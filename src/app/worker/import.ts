// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as json from "app/common/json";
import * as log from "app/common/logging";
import * as sm from "app/common/schema";
import * as uuid from "app/common/uuid";
import * as rp from "app/main/repo";
import * as http from "app/util/http";
import { tr } from "app/util/i18n";
import * as sse from "app/util/sse";
import * as uz from "app/util/zip";
import * as impl from "app/worker/impl";
import * as rx from "beicon/v2/core";
import * as str from "cuerdas/core";

log.setLevel("warn");

// Upload changes batches size
export const change-batch-size = 100;

const conjv = (list: any[], val: any) => list ? [...list, val] : [val];

function readZipManifest(zipReader: any): any {
  return rx.pipe(
    rx.from(uz.getEntry(zipReader, "manifest.json")),
    rx.mapcat(uz.readAsText),
    rx.map(json.decode)
  );
}

export function slurpUri(uri: string, responseType: string = "text"): any {
  return rx.pipe(
    http.send({
      uri,
      responseType,
      method: "get",
    }),
    rx.map((response: any) => response.body)
  );
}

export function parseMtype(ba: ArrayBuffer): string {
  const u8 = new Uint8Array(ba, 0, 4);
  let ret = "";
  for (let i = 0; i < 4; i++) {
    ret += (i === 0 ? "" : " ") + u8[i].toString(8);
  }
  switch (ret) {
    case "120 113 3 4": return "application/zip";
    case "1 13 32 206": return "application/octet-stream";
    default: return "other";
  }
}

// NOTE: this is a limited subset schema for the manifest file of
// binfile-v3 format; is used for partially parse it and read the
// files referenced inside the exported file

const schemaManifest = {
  title: "Manifest",
  type: "object",
  properties: {
    type: { type: "string" },
    files: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: sm.uuid,
          name: { type: "string" },
        },
      },
    },
  },
};

const decodeManifest = sm.decoder(schemaManifest, sm.jsonTransformer);

export function analyzeFile(file: { uri: string; name?: string }): any {
  const stream = rx.pipe(
    slurpUri(file.uri, "arrayBuffer"),
    rx.mergeMap((body: ArrayBuffer) => {
      const mtype = parseMtype(body);
      if (mtype === "application/zip") {
        const zipReader = uz.reader(body);
        return rx.pipe(
          readZipManifest(zipReader),
          rx.map((manifest: any) => {
            if (manifest.type === "penpot/export-files") {
              const decoded = decodeManifest(manifest);
              return { ...file, type: ":binfile-v3", files: decoded.files };
            }
            return { ...file, type: ":legacy-zip", body };
          }),
          rx.finalize(() => uz.close(zipReader))
        );
      } else if (mtype === "application/octet-stream") {
        return rx.of({ ...file, type: ":binfile-v1" });
      } else {
        return rx.of({ ...file, type: ":unknown" });
      }
    }),
    rx.share()
  );

  return rx.pipe(
    rx.merge(
      rx.pipe(
        rx.filter((entry: any) => entry.type === ":binfile-v1"),
        rx.map((entry: any) => {
          const fileId = uuid.next();
          return {
            ...entry,
            fileId,
            name: file.name,
            status: ":success",
          };
        })
      ),
      rx.pipe(
        rx.filter((entry: any) => entry.type === ":binfile-v3"),
        rx.mergeMap((entry: any) => {
          const files = entry.files;
          return rx.pipe(
            rx.from(files),
            rx.map((f: any) => ({
              ...entry,
              files: undefined,
              name: f.name,
              fileId: f.id,
              status: ":success",
            }))
          );
        })
      ),
      rx.pipe(
        rx.filter((data: any) => data.type === ":unknown"),
        rx.map(() => ({
          uri: file.uri,
          status: ":error",
          error: tr("dashboard.import.analyze-error"),
        }))
      )
    ),
    rx.catch((cause: any) => {
      const error = cause.message || tr("dashboard.import.analyze-error");
      return rx.of({ ...file, error, status: ":error" });
    })
  );
}

impl.handler[":analyze-import"] = ({ files }: { files: any[] }) => {
  return rx.pipe(rx.from(files), rx.mergeMap(analyzeFile));
};

impl.handler[":import-files"] = ({ projectId, files }: { projectId: any; files: any[] }) => {
  const binfileV1 = files.filter((f: any) => f.type === ":binfile-v1");
  const binfileV3 = files.filter((f: any) => f.type === ":binfile-v3");

  return rx.merge(
    rx.pipe(
      rx.from(binfileV1),
      rx.mergeMap((data: any) => {
        return rx.pipe(
          http.send({ uri: data.uri, responseType: "blob", method: "get" }),
          rx.map((response: any) => response.body),
          rx.mapcat((file: any) => {
            return rx.pipe(
              rp.cmd(sse.importBinfile, {
                name: str.replace(data.name, /\.penpot$/, ""),
                file,
                version: 1,
                projectId,
              }),
              rx.tap((event: any) => {
                const payload = sse.getPayload(event);
                const type = sse.getType(event);
                if (type === "progress") {
                  log.dbg("hint", "import-binfile: progress", "section", payload.section, "name", payload.name);
                } else {
                  log.dbg("hint", "import-binfile: end");
                }
              }),
              rx.filter(sse.endOfStream),
              rx.map(() => ({ status: ":finish", fileId: data.fileId }))
            );
          }),
          rx.catch((cause: any) => {
            log.error("hint", "unexpected error on import process", "project-id", projectId, "cause", cause);
            return rx.of({ status: ":error", error: cause.message, fileId: data.fileId });
          })
        );
      })
    ),
    rx.pipe(
      rx.from(binfileV3),
      rx.reduce((result: any, file: any) => {
        const uri = file.uri;
        if (!result[uri]) result[uri] = [];
        result[uri].push(file);
        return result;
      }, {}),
      rx.mapcat((result: any) => Object.entries(result)),
      rx.mergeMap(([uri, entries]: [string, any[]]) => {
        return rx.pipe(
          slurpUri(uri, "blob"),
          rx.mapcat((content: any) => {
            return rp.cmd(sse.importBinfile, {
              name: entries[0].name,
              file: content,
              version: 3,
              projectId,
            }).pipe(
              rx.tap((event: any) => {
                const payload = sse.getPayload(event);
                const type = sse.getType(event);
                if (type === "progress") {
                  log.dbg("hint", "import-binfile: progress", "section", payload.section, "name", payload.name);
                } else {
                  log.dbg("hint", "import-binfile: end");
                }
              }),
              rx.filter(sse.endOfStream),
              rx.mapcat(() =>
                rx.from(entries.map((entry: any) => ({ status: ":finish", fileId: entry.fileId })))
              )
            );
          }),
          rx.catch((cause: any) => {
            log.error("hint", "unexpected error on import process", "project-id", projectId, "sync?", true, "cause", cause);
            return rx.from(entries.map((entry: any) => ({ status: ":error", error: cause.message, fileId: entry.fileId })));
          })
        );
      })
    )
  );
};
