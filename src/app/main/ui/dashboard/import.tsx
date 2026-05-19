// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react";
import { useEffect, useState, useCallback } from "react";
import * as d from "app.common.data";
import * as dm from "app.common.data.macros";
import * as ex from "app.common.exceptions";
import * as log from "app.common.logging";
import * as dd from "app.main.data.dashboard";
import * as ev from "app.main.data.event";
import * as modal from "app.main.data.modal";
import * as ntf from "app.main.data.notifications";
import * as st from "app.main.store";
import { FileUploader } from "app.main.ui.components.file-uploader";
import { Loader } from "app.main.ui.ds.product.loader";
import * as deprecatedIcon from "app.main.ui.icons";
import { ContextNotification } from "app.main.ui.notifications.context-notification";
import * as mw from "app.main.worker";
import * as dom from "app.util.dom";
import * as i18n from "app.util.i18n";
import { tr } from "app.util.i18n";
import * as kbd from "app.util.keyboard";
import * as wapi from "app.util.webapi";
import * as rx from "beicon.v2.core";
import * as str from "cuerdas.core";
import * as ptk from "potok.v2.core";

log.setLevel("debug");

const emitDelay = 200;

function useImportFile(projectId: string, onFinishImport?: () => void) {
  return useCallback((entries: FileList | File[]) => {
    const entriesArray = Array.from(entries).map((file: any) => ({
      name: file.name,
      uri: wapi.createUri(file)
    }));

    if (entriesArray.length === 0) return;

    st.emit!(modal.show({
      type: "import",
      projectId: projectId,
      entries: entriesArray,
      onFinishImport: onFinishImport
    }));
  }, [projectId, onFinishImport]);
}

interface ImportFormProps {
  projectId: string;
  onFinishImport?: () => void;
  externalRef?: React.RefObject<HTMLInputElement>;
}

function ImportForm(props: ImportFormProps) {
  const onFileSelected = useImportFile(props.projectId, props.onFinishImport);

  return (
    <form className="import-file" aria-hidden="true">
      <FileUploader
        accept=".penpot,.zip"
        multi={true}
        ref={props.externalRef}
        onSelected={onFileSelected}
      />
    </form>
  );
}

function updateEntryName(entries: any[], fileId: string, newName: string): any[] {
  const trimmedName = str.trim(newName);
  return entries.map((entry) => {
    if (entry.fileId === fileId && trimmedName !== "") {
      return { ...entry, name: trimmedName };
    }
    return entry;
  });
}

function removeEntry(entries: any[], fileId: string): any[] {
  return entries.map((entry) => {
    if (entry.fileId === fileId) {
      return { ...entry, deleted: true };
    }
    return entry;
  });
}

function updateWithAnalyzeResult(entries: any[], updated: any): any[] {
  const filteredEntries = entries.filter((e: any) => dm.getIn(e, ["fileId"]) && typeof e.fileId === "string");
  const status = updated.status === "success" ? "import-ready" : "analyze-error";
  const merged = { ...updated, status };

  const exists = filteredEntries.some((e: any) => e.fileId === updated.fileId);
  if (exists) {
    return filteredEntries.map((entry: any) => {
      if (entry.fileId === updated.fileId) {
        return { ...entry, ...merged };
      }
      return entry;
    });
  }
  return [...filteredEntries, merged];
}

function updateEntryStatus(entries: any[], message: any): any[] {
  return entries.map((entry) => {
    if (entry.fileId === message.fileId) {
      const status = message.status === "progress" ? "import-progress"
        : message.status === "finish" ? "import-success"
        : "import-error";

      return d.withoutNils({
        ...entry,
        progress: message.progress,
        status: status,
        error: message.error
      });
    }
    return entry;
  });
}

function parseProgressMessage(message: any): string {
  switch (message.type) {
    case "upload-data":
      return tr("dashboard.import.progress.upload-data", message.current, message.total);
    case "upload-media":
      return tr("dashboard.import.progress.upload-media", message.file);
    case "process-page":
      return tr("dashboard.import.progress.process-page", message.file);
    case "process-colors":
      return tr("dashboard.import.progress.process-colors");
    case "process-typographies":
      return tr("dashboard.import.progress.process-typographies");
    case "process-media":
      return tr("dashboard.import.progress.process-media");
    case "process-components":
      return tr("dashboard.import.progress.process-components");
    case "process-deleted-components":
      return tr("dashboard.import.progress.process-components");
    default:
      return "";
  }
}

function hasStatusAnalyze(item: any): boolean {
  return item.status === "analyze";
}

function hasStatusImportSuccess(item: any): boolean {
  return item.status === "import-success";
}

function hasStatusError(item: any): boolean {
  return item.status === "import-error" || item.status === "analyze-error";
}

function hasStatusReady(item: any): boolean {
  return item.status === "import-ready" && !item.deleted;
}

function analyzeEntries(state: any, entries: any[]) {
  const features = st.state.features;

  const subscription = mw.askMany!({
    cmd: "analyze-import",
    files: entries,
    features: features
  })
  .pipe(
    rx.mapcat((msg: any) => rx.delay(emitDelay, rx.of(msg))),
    rx.filter((msg: any) => msg != null)
  )
  .subscribe((message: any) => {
    if (message.error != null) {
      st.emit!(ptk.dataEvent(ev.event, {
        name: "import-files-error",
        error: message.error
      }));
    }
    state.swap((s: any) => updateWithAnalyzeResult(s, message));
  });

  return subscription;
}

function importFiles(state: any, projectId: string, entries: any[]) {
  st.emit!(ptk.dataEvent(ev.event, {
    name: "import-files",
    numFiles: entries.length
  }));

  const features = st.state.features;

  const subscription = mw.askMany!({
    cmd: "import-files",
    projectId: projectId,
    files: entries,
    features: features
  })
  .pipe(
    rx.filter((msg: any) => msg.fileId && typeof msg.fileId === "string")
  )
  .subscribe((message: any) => {
    state.swap((s: any) => updateEntryStatus(s, message));
  });

  return subscription;
}

interface ImportEntryProps {
  entries: any[];
  entry: any;
  edition: string | null;
  canBeDeleted: boolean;
  onEdit?: (fileId: string, event: any) => void;
  onChange?: (fileId: string, value: string, event?: any) => void;
  onDelete?: (fileId: string, event?: any) => void;
}

const ImportEntry = React.memo(function ImportEntry(props: ImportEntryProps) {
  const status = props.entry.status;
  const format = props.entry.type;

  const loading = status === "analyze" || status === "import-progress";
  const analyzeError = status === "analyze-error";
  const importSuccess = status === "import-success";
  const importError = status === "import-error";
  const importReady = status === "import-ready";

  const isShared = props.entry.shared;
  const progress = props.entry.progress;
  const fileId = props.entry.fileId;
  const editing = fileId != null && props.edition === fileId;

  const editable = format === "legacy-zip" && status === "import-ready";

  const onEditKeyPress = useCallback((event: React.KeyboardEvent) => {
    if (kbd.enter(event) || kbd.esc(event)) {
      dom.preventDefault(event);
      dom.stopPropagation(event);
      dom.blur!(dom.getTarget(event) as HTMLElement);
    }
  }, []);

  const onEditBlur = useCallback((event: React.FocusEvent) => {
    const value = dom.getTargetVal(event);
    props.onChange?.(fileId, value, event);
  }, [fileId, props.onChange]);

  const onEdit = useCallback((event: React.MouseEvent) => {
    if (typeof props.onEdit === "function") {
      props.onEdit(fileId, event);
    }
  }, [fileId, props.onEdit]);

  const onDelete = useCallback((event: React.MouseEvent) => {
    if (typeof props.onDelete === "function") {
      props.onDelete(fileId, event);
    }
  }, [fileId, props.onDelete]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <div className={cssClass({
      "file-entry": true,
      loading: loading,
      success: importSuccess,
      error: importError || analyzeError,
      editable: importReady && !editing
    })}>
      <div className={cssClass({ "file-name": true })}>
        {loading ? (
          <Loader width={16} title={tr("labels.loading")} />
        ) : (
          <div className={cssClass({
            "file-icon": true,
            "icon-fill": importReady
          })}>
            {importReady && deprecatedIcon.logoIcon}
            {importError && deprecatedIcon.close}
            {importSuccess && deprecatedIcon.tick}
            {analyzeError && deprecatedIcon.close}
          </div>
        )}

        {editing ? (
          <div className={cssClass({ "file-name-edit": true })}>
            <input
              type="text"
              autoFocus={true}
              defaultValue={props.entry.name}
              onKeyPress={onEditKeyPress}
              onBlur={onEditBlur}
            />
          </div>
        ) : (
          <div className={cssClass({ "file-name-label": true })}>
            {props.entry.name}
            {isShared && (
              <span className={cssClass({ icon: true })}>
                {deprecatedIcon.library}
              </span>
            )}
          </div>
        )}

        <div className={cssClass({ "edit-entry-buttons": true })}>
          {editable && (
            <button onClick={onEdit}>{deprecatedIcon.curve}</button>
          )}
          {props.canBeDeleted && (
            <button onClick={onDelete}>{deprecatedIcon.delete}</button>
          )}
        </div>
      </div>

      {analyzeError && (
        <div className={cssClass({ "error-message": true })}>
          {props.entry.error ? tr(props.entry.error) : tr("dashboard.import.analyze-error")}
        </div>
      )}

      {importError && (
        <div className={cssClass({ "error-message": true })}>
          {tr("labels.error")}
        </div>
      )}

      {!importSuccess && progress != null && (
        <div className={cssClass({ "progress-message": true })}>
          {parseProgressMessage(progress)}
        </div>
      )}

      <div className={cssClass({ "linked-libraries": true })}>
        {props.entry.libraries?.map((libraryId: string) => {
          const libraryData = props.entries.find((e: any) => e.fileId === libraryId);
          const error = libraryData?.deleted || libraryData?.importError;

          if (!libraryData) return null;

          return (
            <div className={cssClass({ "linked-library": true })} key={dm.str(libraryId)}>
              {libraryData.name}
              <span className={cssClass({
                "linked-library-tag": true,
                error: error
              })}>
                {deprecatedIcon.detach}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
});

function initializeState(entries: any[]) {
  return entries.map((entry) => ({ ...entry, status: "analyze" }));
}

interface ImportDialogProps {
  projectId: string;
  entries: any[];
  template?: any;
  onFinishImport?: () => void;
}

function ImportDialog(props: ImportDialogProps) {
  useEffect(() => {
    return () => {
      props.entries.forEach((entry: any) => wapi.revokeUri(entry.uri));
    };
  }, [props.entries]);

  const [state, setState] = useState(() => initializeState(props.entries));
  const entries = state;

  const [status, setStatus] = useState<"analyze" | "import-progress" | "import-success" | "import-error" | "import-ready">("analyze");
  const [edition, setEdition] = useState<string | null>(null);

  const continueEntries = useCallback(() => {
    const readyEntries = entries.filter(hasStatusReady);
    setStatus("import-progress");
    importFiles({ swap: setState } as any, props.projectId, readyEntries);
  }, [entries, props.projectId]);

  const continueTemplate = useCallback((template: any) => {
    const onSuccess = () => {
      setStatus("import-success");
      if (typeof props.onFinishImport === "function") {
        props.onFinishImport();
      }
    };

    const onError = (cause: any) => {
      setStatus("error");
      ex.printThrowable(cause);
      return rx.of(modal.hide(), ntf.error(tr("dashboard.libraries-and-templates.import-error")));
    };

    const params = {
      projectId: props.projectId,
      templateId: template.id
    };

    setStatus("import-progress");
    st.emit!(dd.cloneTemplate(
      ptk.withMeta(params, {
        onSuccess: onSuccess,
        onError: onError
      })
    ));
  }, [props.projectId, props.onFinishImport]);

  const onEdit = useCallback((fileId: string, _event: any) => {
    setEdition(fileId);
  }, []);

  const onEntryChange = useCallback((fileId: string, value: string) => {
    setEdition(null);
    setState((prev) => updateEntryName(prev, fileId, value));
  }, []);

  const onEntryDelete = useCallback((fileId: string) => {
    setState((prev) => removeEntry(prev, fileId));
  }, []);

  const onCancel = useCallback((event: React.MouseEvent) => {
    if (edition === null) {
      dom.preventDefault(event);
      st.emit!(modal.hide());
    }
  }, [edition]);

  const onContinue = useCallback((event: React.MouseEvent) => {
    dom.preventDefault(event);
    if (props.template) {
      continueTemplate(props.template);
    } else {
      continueEntries();
    }
  }, [props.template, continueTemplate, continueEntries]);

  const onAccept = useCallback((event: React.MouseEvent) => {
    dom.preventDefault(event);
    st.emit!(modal.hide());
    if (typeof props.onFinishImport === "function") {
      props.onFinishImport();
    }
  }, [props.onFinishImport]);

  const filteredEntries = entries.filter((e) => !e.deleted);

  const importSuccessTotal = props.template
    ? 1
    : filteredEntries.filter(hasStatusImportSuccess).length;

  const errors = props.template
    ? status === "error"
    : filteredEntries.some(hasStatusError) || filteredEntries.length === 0;

  const pendingAnalysis = filteredEntries.some(hasStatusAnalyze);

  useEffect(() => {
    if (props.template) {
      setStatus("import-ready");
    } else if (filteredEntries.length > 0 && filteredEntries.every((e) => e.status === "import-ready")) {
      setStatus("import-ready");
    } else if (filteredEntries.length > 0 && filteredEntries.every((e) => e.status === "import-success")) {
      setStatus("import-success");
    } else if (
      filteredEntries.length > 0 &&
      filteredEntries.every((e) => e.status !== "import-ready") &&
      filteredEntries.some((e) => e.status === "import-error")
    ) {
      setStatus("import-error");
    }
  }, [props.template, filteredEntries]);

  useEffect(() => {
    const sub = analyzeEntries({ swap: setState } as any, entries);
    return () => rx.dispose!(sub);
  }, [entries]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <div className={cssClass({ "modal-overlay": true })}>
      <div className={cssClass({ "modal-container": true })}>
        <div className={cssClass({ "modal-header": true })}>
          <h2 className={cssClass({ "modal-title": true })}>{tr("dashboard.import")}</h2>

          <button
            className={cssClass({ "modal-close-btn": true })}
            onClick={onCancel}
          >
            {deprecatedIcon.close}
          </button>
        </div>

        <div className={cssClass({ "modal-content": true })}>
          {status === "analyze" && errors && (
            <ContextNotification
              level="warning"
              className={cssClass({ "context-notification-error": true })}
              content={tr("dashboard.import.import-warning")}
            />
          )}

          {status === "import-success" && (
            <ContextNotification
              level={importSuccessTotal === 0 ? "warning" : "success"}
              content={tr("dashboard.import.import-message", i18n.c(importSuccessTotal))}
            />
          )}

          {status === "import-error" && (
            <ContextNotification
              level="error"
              className={cssClass({ "context-notification-error": true })}
              content={tr("dashboard.import.import-error.disclaimer")}
            />
          )}

          {status === "import-error" || (status === "analyze" && errors) ? (
            <div className={cssClass({ "import-error-disclaimer": true })}>
              <div>{tr("dashboard.import.import-error.message1")}</div>
              <ul className={cssClass({ "import-error-list": true })}>
                {filteredEntries.map((entry) => {
                  if (entry.status === "import-error" || entry.status === "analyze-error") {
                    return (
                      <li className={cssClass({ "import-error-list-entry": true })} key={entry.uri}>
                        {entry.name}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
              <div>{tr("dashboard.import.import-error.message2")}</div>
            </div>
          ) : (
            filteredEntries.map((entry) => (
              <ImportEntry
                key={dm.str(entry.uri, "/", entry.fileId)}
                entry={entry}
                entries={filteredEntries}
                edition={edition}
                onEdit={onEdit}
                onChange={onEntryChange}
                onDelete={onEntryDelete}
                canBeDeleted={filteredEntries.length > 1}
              />
            ))
          )}

          {props.template && (
            <ImportEntry
              entry={{ ...props.template, status }}
              canBeDeleted={false}
            />
          )}
        </div>

        <div className={cssClass({ "modal-footer": true })}>
          <div className={cssClass({ "action-buttons": true })}>
            {status === "analyze" && (
              <input
                className={cssClass({ "cancel-button": true })}
                type="button"
                value={tr("labels.cancel")}
                onClick={onCancel}
              />
            )}

            {status === "import-ready" && (
              <input
                className={cssClass({ "accept-btn": true })}
                type="button"
                value={tr("labels.continue")}
                disabled={pendingAnalysis}
                onClick={onContinue}
              />
            )}

            {["import-success", "import-error", "import-progress"].includes(status) && (
              <input
                className={cssClass({ "accept-btn": true })}
                type="button"
                value={tr("labels.accept")}
                disabled={status === "import-progress"}
                onClick={onAccept}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { ImportDialog, useImportFile };