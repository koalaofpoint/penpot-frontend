// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { DEFAULT_CHUNK_SIZE } from "./constants";
import { d, dm } from "../../common/data";
import { log } from "../../common/logging";
import { cm } from "../../common/media";
import { uuid } from "../../common/uuid";
import { ev } from "./event";
import { ntf } from "./notifications";
import { fonts } from "../fonts";
import { rp } from "./repo";
import { st } from "./store";
import { tr } from "../../util/i18n";
import { storage } from "../../util/storage";
import { wa } from "../../util/webapi";
import { rx } from "../../beicon/v2";
import { str } from "../../cuerdas/core";
import { ptk } from "../../potok/v2";

export interface FontVariant {
  id: string;
  name: string;
  style: string;
  weight: string;
  [fonts.WOFF1_FILE_ID]?: string;
  [fonts.WOFF2_FILE_ID]?: string;
  [fonts.TTF_FILE_ID]?: string;
  [fonts.OTF_FILE_ID]?: string;
}

export interface Font {
  id: string;
  name: string;
  family: string;
  variants: FontVariant[];
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  heightWarning?: boolean;
  fontId: string;
  teamId?: string;
  data?: Record<string, Uint8Array>;
  names?: Set<string>;
  content?: any;
}

export interface FontData {
  data: Uint8Array;
  name: string;
  type: string;
}

export interface PreparedFont {
  id: string;
  name: string;
  family: string;
  variants: FontVariant[];
}

export interface ProcessedFont {
  content: FontData;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  heightWarning: boolean;
  fontId: string;
  teamId?: string;
  names?: Set<string>;
  data?: Record<string, Uint8Array>;
}

// Helper functions

const chunkArray = (data: Uint8Array, chunkSize: number): Uint8Array[] => {
  const totalSize = data.length;
  const chunks: Uint8Array[] = [];
  let offset = 0;

  while (offset < totalSize) {
    const end = Math.min(offset + chunkSize, totalSize);
    const chunk = data.subarray(offset, end);
    chunks.push(chunk);
    offset = end;
  }

  return chunks;
};

const prepareFont = ([id, [item]]: [string, any]): PreparedFont => {
  const variantSortFn = (item: FontVariant): [string, number] => [
    item.weight,
    item.style === "normal" ? 1 : 2,
  ];

  const prepareFontVariant = (item: any): FontVariant => ({
    id: `${item.fontStyle}-${item.fontWeight}`,
    name: `${cm.fontWeightToName(item.fontWeight)}${
      item.fontStyle !== "normal" ? ` ${str.capital(item.fontStyle)}` : ""
    }`,
    style: item.fontStyle,
    weight: `${item.fontWeight}`,
    [fonts.WOFF1_FILE_ID]: item.woff1FileId,
    [fonts.WOFF2_FILE_ID]: item.woff2FileId,
    [fonts.TTF_FILE_ID]: item.ttfFileId,
    [fonts.OTF_FILE_ID]: item.otfFileId,
  });

  const adaptFontId = (variant: FontVariant): FontVariant => ({
    ...variant,
    fontId: `custom-${variant.fontId}`,
  });

  return {
    id,
    name: item.fontFamily,
    family: item.fontFamily,
    variants: item.variants
      .map(prepareFontVariant)
      .sort(variantSortFn)
      .map(adaptFontId),
  };
};

const calculateFamilyToIdMapping = (existing: Record<string, Font>): Record<string, string> => {
  const mapping: Record<string, string> = {};
  Object.values(existing).forEach((font) => {
    mapping[font.fontFamily] = font.fontId;
  });
  return mapping;
};

const mergeAndGroupFonts = (
  currentFonts: Record<string, Font>,
  installedFonts: Record<string, Font>,
  incomingFonts: Record<string, Font>
): Record<string, Font> => {
  const famdb = calculateFamilyToIdMapping({ ...currentFonts, ...installedFonts });
  const items = Object.values(incomingFonts);
  let result = currentFonts;

  for (const item of items) {
    const fontId = famdb[item.fontFamily] || uuid.next();
    const font = { ...item, fontId };
    famdb[item.fontFamily] = fontId;
    result = { ...result, [item.id]: font };
  }

  return result;
};

const renameAndRegroup = (
  currentFonts: Record<string, Font>,
  id: string,
  name: string,
  installedFonts: Record<string, Font>
): Record<string, Font> => {
  const famdb = calculateFamilyToIdMapping({ ...currentFonts, ...installedFonts });
  const fontId = famdb[name] || uuid.next();

  return {
    ...currentFonts,
    [id]: {
      ...currentFonts[id],
      fontFamily: name,
      fontId,
    },
  };
};

const calculateFamilyToIdMappingLegacy = (existing: Record<string, any>): Record<string, string> => {
  const mapping: Record<string, string> = {};
  Object.values(existing).forEach((font) => {
    mapping[font.fontFamily] = font.fontId;
  });
  return mapping;
};

const mergeAndGroupFontsLegacy = (
  currentFonts: Record<string, any>,
  installedFonts: Record<string, any>,
  incomingFonts: Record<string, any>
): Record<string, any> => {
  const famdb = calculateFamilyToIdMappingLegacy({ ...currentFonts, ...installedFonts });
  const items = Object.values(incomingFonts);
  let result = currentFonts;

  for (const item of items) {
    const fontId = famdb[item.fontFamily] || uuid.next();
    const font = { ...item, fontId };
    famdb[item.fontFamily] = fontId;
    result = { ...result, [item.id]: font };
  }

  return result;
};

const renameAndRegroupLegacy = (
  currentFonts: Record<string, any>,
  id: string,
  name: string,
  installedFonts: Record<string, any>
): Record<string, any> => {
  const famdb = calculateFamilyToIdMappingLegacy({ ...currentFonts, ...installedFonts });
  const fontId = famdb[name] || uuid.next();

  return {
    ...currentFonts,
    [id]: {
      ...currentFonts[id],
      fontFamily: name,
      fontId,
    },
  };
};

// General purpose events & IMPL

export const fontsFetched = (fonts: any[]) => {
  const prepareFont = ([id, [item]]: [string, any]): PreparedFont => {
    const variantSortFn = (item: FontVariant): [string, number] => [
      item.weight,
      item.style === "normal" ? 1 : 2,
    ];

    const prepareFontVariant = (item: any): FontVariant => ({
      id: `${item.fontStyle}-${item.fontWeight}`,
      name: `${cm.fontWeightToName(item.fontWeight)}${
        item.fontStyle !== "normal" ? ` ${str.capital(item.fontStyle)}` : ""
      }`,
      style: item.fontStyle,
      weight: `${item.fontWeight}`,
      [fonts.WOFF1_FILE_ID]: item.woff1FileId,
      [fonts.WOFF2_FILE_ID]: item.woff2FileId,
      [fonts.TTF_FILE_ID]: item.ttfFileId,
      [fonts.OTF_FILE_ID]: item.otfFileId,
    });

    const adaptFontId = (variant: FontVariant): FontVariant => ({
      ...variant,
      fontId: `custom-${variant.fontId}`,
    });

    return {
      id,
      name: item.fontFamily,
      family: item.fontFamily,
      variants: item.variants
        .map(prepareFontVariant)
        .sort(variantSortFn)
        .map(adaptFontId),
    };
  };

  return ptk.reify<ptk.UpdateEvent & ptk.EffectEvent>("fonts-loaded", {
    update(state: any) {
      return { ...state, fonts: d.indexBy("id", fonts) };
    },

    effect(_state: any, _prevState: any, dispatch: ptk.Dispatch) {
      const preparedFonts = fonts
        .map(([id, items]: [string, any]) => [id, items])
        .map(([id, items]: [string, any]) => {
          if (!Array.isArray(items)) {
            const item = items;
            return [id, [item]];
          }
          return [id, items];
        })
        .map(prepareFont);

      fonts.register("custom", preparedFonts);
    },
  });
};

export const fetchFonts = (teamId: string) => {
  return ptk.reify<ptk.WatchEvent>("fetch-fonts", {
    watch(_state: any, _prevState: any, dispatch: ptk.Dispatch) {
      return rx.map(
        (fonts: any[]) => fontsFetched(fonts)
      )(
        rx.from(rp.cmd("get-font-variants", { teamId }))
      );
    },
  });
};

export const processUpload = (blobs: Blob[], teamId: string) => {
  const parseMtype = (ba: ArrayBuffer): string => {
    const u8 = new Uint8Array(ba, 0, 4);
    const sg = Array.from(u8).reduce(
      (ret: string, val: number, i: number) =>
        `${ret}${i === 0 ? "" : " "}${val.toString(8)}`,
      ""
    );

    switch (sg) {
      case "117 124 124 117": return "font/otf";
      case "0 1 0 0": return "font/ttf";
      case "167 117 106 106": return "font/woff";
      default: return "";
    }
  };

  const readBlob = (blob: Blob): rx.Observable<{ data: ArrayBuffer; name: string; type: string } | { error: string }> => {
    return rx.pipe(
      rx.from(wa.readFileAsArrayBuffer(blob)),
      rx.map((data: ArrayBuffer) => ({
        data,
        name: blob.name,
        type: parseMtype(data),
      })),
      rx.catchError(() => rx.of({ error: blob.name })),
      rx.filter(
        (font): font is { data: ArrayBuffer; name: string; type: string } =>
          !!font.type || !!font.error
      )
    );
  };

  const fonts$ = rx.pipe(
    rx.from(blobs),
    rx.flatMap(readBlob)
  );

  const errors$ = rx.pipe(
    fonts$,
    rx.filter((font): font is { error: string } => !!font.error),
    rx.reduce((acc: string[], font) => [...acc, `'${font.error}'`], [])
  );

  errors$.subscribe((errors) => {
    if (errors.length > 0) {
      st.emit(
        ntf.error(
          errors.length > 1
            ? tr("errors.bad-font-plural", errors.join(", "))
            : tr("errors.bad-font", errors[0])
        )
      );
    }
  });

  return rx.pipe(
    fonts$,
    rx.filter((font): font is { data: ArrayBuffer; name: string; type: string } => !font.error),
    rx.map((font) => ({ ...font, font: fonts.parse(font.data) })),
    rx.filter((font): font is any => !!font.font),
    rx.map(({ font, name, type, data }) => {
      const DEFAULT_CHUNK_SIZE = 4 * 1024 * 1024; // 4MiB

      const family = font.getEnglishName("preferredFamily") || font.getEnglishName("fontFamily");
      const variant = font.getEnglishName("preferredSubfamily") || font.getEnglishName("fontSubfamily");

      const hheaAscender = Math.abs(font.tables.hhea.ascender);
      const hheaDescender = Math.abs(font.tables.hhea.descender);

      const winAscent = Math.abs(font.tables.os2.usWinAscent);
      const winDescent = Math.abs(font.tables.os2.usWinDescent);

      const os2Ascent = Math.abs(font.tables.os2.sTypoAscender);
      const os2Descent = Math.abs(font.tables.os2.sTypoDescender);

      const fSelection = !!(font.tables.os2.fsSelection & (1 << 7));

      const heightWarning =
        hheaAscender !== winAscent ||
        hheaDescender !== winDescent ||
        (fSelection && (hheaAscender !== os2Ascent || hheaDescender !== os2Descent));

      const dataArray = new Uint8Array(data);

      return {
        content: {
          data: chunkArray(dataArray, DEFAULT_CHUNK_SIZE),
          name,
          type,
        },
        fontFamily: family || "",
        fontWeight: cm.parseFontWeight(variant),
        fontStyle: cm.parseFontStyle(variant),
        heightWarning,
      };
    }),
    rx.reduce((acc, font) => {
      const keyFn = (font: any) => [font.fontFamily, font.fontWeight, font.fontStyle];
      const existing = Object.values(acc).find((f: any) =>
        keyFn(f).join() === keyFn(font).join()
      );

      if (existing) {
        const content = font.content as FontData;
        return {
          ...acc,
          [existing.id]: {
            ...existing,
            data: { ...existing.data, [content.type]: content.data },
            names: { ...(existing.names || new Set()), [content.name]: true },
          },
        };
      }

      const tmpId = uuid.next();
      const content = font.content as FontData;
      return {
        ...acc,
        [tmpId]: {
          ...font,
          id: tmpId,
          teamId,
          names: new Set([content.name]),
          data: { [content.type]: content.data },
        },
      };
    }, {} as Record<string, any>)
  );
};

// Dashboard related events

export const addFont = (font: any) => {
  return ptk.reify<ptk.UpdateEvent & ptk.WatchEvent>("add-font", {
    update(state: any) {
      return { ...state, fonts: { ...state.fonts, [font.id]: font } };
    },

    watch(state: any, _prevState: any, dispatch: ptk.Dispatch) {
      const teamId = state.currentTeamId;
      return rx.of(
        ptk.dataEvent<ev.Event>("event", {
          name: "add-font",
          teamId,
          fontId: font.id,
          fontFamily: font.fontFamily,
          fontStyle: font.fontStyle,
          fontWeight: font.fontWeight,
        })
      );
    },
  });
};

export const updateFont = ({ id, name }: { id: string; name: string }) => {
  dm.assert(uuid.is(id), "expected a valid uuid");
  dm.assert(typeof name === "string", "expected a string");

  return ptk.reify<ptk.UpdateEvent & ptk.WatchEvent>("update-font", {
    update(state: any) {
      return {
        ...state,
        fonts: d.updateValues(state.fonts, (font) =>
          font.fontId === id ? { ...font, fontFamily: name } : font
        ),
      };
    },

    watch(state: any, _prevState: any, dispatch: ptk.Dispatch) {
      const teamId = state.currentTeamId;
      return rx.pipe(
        rp.cmd("update-font", { id, name, teamId }),
        rx.ignore()
      );
    },
  });
};

export const deleteFont = (fontId: string) => {
  dm.assert(uuid.is(fontId), "expected a valid uuid");

  return ptk.reify<ev.Event & ptk.UpdateEvent & ptk.WatchEvent>("delete-font", {
    data() {
      return { id: fontId };
    },

    update(state: any) {
      return {
        ...state,
        fonts: d.removeMap(([_id, variant]) => variant.fontId === fontId),
      };
    },

    watch(state: any, _prevState: any, dispatch: ptk.Dispatch) {
      const teamId = state.currentTeamId;
      return rx.concat(
        rp.cmd("delete-font", { id: fontId, teamId }),
        rx.of(
          ptk.dataEvent<ev.Event>("event", {
            name: "delete-font",
            teamId,
            fontId,
          })
        )
      );
    },
  });
};

export const deleteFontVariant = (id: string) => {
  dm.assert(uuid.is(id), "expected a valid uuid");

  return ptk.reify<ptk.UpdateEvent & ptk.WatchEvent>("delete-font-variants", {
    update(state: any) {
      return {
        ...state,
        fonts: d.removeMap(([_, variant]) => variant.id === id),
      };
    },

    watch(state: any, _prevState: any, dispatch: ptk.Dispatch) {
      const teamId = state.currentTeamId;
      return rx.concat(
        rp.cmd("delete-font-variant", { id, teamId }),
        rx.of(
          ptk.dataEvent<ev.Event>("event", {
            name: "delete-font-variant",
            id,
            teamId,
          })
        )
      );
    },
  });
};

// Workspace related events

const updateRecentFont = (state: any, fileId: string, font: any) => {
  const xform = [
    (arr: any[]) => arr.filter((f) => f !== font),
    (arr: any[]) => arr.slice(0, 3),
  ] as any;

  return {
    ...state,
    [fileId]: [font, ...xform(state[fileId] || [])],
  };
};

export const addRecentFont = (font: any) => {
  return ptk.reify<ptk.UpdateEvent & ptk.EffectEvent>("add-recent-font", {
    update(state: any) {
      const fileId = state.currentFileId;
      return {
        ...state,
        recentFonts: updateRecentFont(state, fileId, font),
      };
    },

    effect(state: any, _prevState: any, dispatch: ptk.Dispatch) {
      storage.user.set("recent-fonts", state.recentFonts);
    },
  });
};