// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
// TODO: Import proper modules
// import * as d from '../../../common/data';
// import * as dm from '../../../common/data/macros';
// import * as fexp from '../../../main/data/exports/files';
// import * as modal from '../../../main/data/modal';
// import * as st from '../../../main/store';
// import * as loader from '../ds/product/loader';
// import * as deprecated-icon from '../icons';
// import * as dom from '../../../util/dom';
// import * as i18n from '../../../util/i18n';
// import * as rx from 'beicon.v2/core';

interface FileEntry {
  id: string;
  name: string;
  loading?: boolean;
  exportSuccess?: boolean;
  exportError?: boolean;
  hasLibraries?: boolean;
}

interface ExportDialogProps {
  teamId?: string;
  files: FileEntry[];
}

function markFileError(files: FileEntry[], fileId: string): FileEntry[] {
  return files.map((file) =>
    file.id === fileId
      ? { ...file, exportError: true, loading: false }
      : file
  );
}

function markFileSuccess(files: FileEntry[], fileId: string): FileEntry[] {
  return files.map((file) =>
    file.id === fileId
      ? { ...file, exportSuccess: true, loading: false }
      : file
  );
}

function initializeState(files: FileEntry[]) {
  const initializedFiles = files.map((file) => ({ ...file, loading: true }));
  return {
    status: "prepare" as "prepare" | "exporting",
    selected: "all" as "all" | "detach" | "merge",
    files: initializedFiles
  };
}

function ExportEntry({ file }: { file: FileEntry }) {
  return (
    <div
      className={`file-entry ${file.loading ? "loading" : ""} ${
        file.exportSuccess ? "success" : ""
      } ${file.exportError ? "error" : ""}`}
    >
      <div className="file-name">
        {file.loading ? (
          // <loader width={16} title="Loading" />
          <span>Loading...</span>
        ) : (
          <span className="file-icon">
            {file.exportSuccess ? (
              /* deprecated-icon/tick */
              <svg viewBox="0 0 24 24" width="16" height="16"><path d="M..."/></svg>
            ) : file.exportError ? (
              /* deprecated-icon/close */
              <svg viewBox="0 0 24 24" width="16" height="16"><path d="M..."/></svg>
            ) : null}
          </span>
        )}
        <div className="file-name-label">{file.name}</div>
      </div>
    </div>
  );
}

export function ExportDialog({ teamId, files }: ExportDialogProps) {
  const [state, setState] = React.useState(() => initializeState(files));
  const hasLibs = files.some((f) => f.hasLibraries);

  const { status, selected, files: stateFiles } = state;

  const startExport = React.useCallback(() => {
    setState((prev) => ({ ...prev, status: "exporting" }));

    // fexp/export-files({ files, type: selected })
    //   .subscribe({
    //     next: ({ fileId, error, filename, uri }) => {
    //       if (error) {
    //         setState((prev) => ({
    //           ...prev,
    //           files: markFileError(prev.files, fileId)
    //         }));
    //       } else {
    //         setState((prev) => ({
    //           ...prev,
    //           files: markFileSuccess(prev.files, fileId)
    //         }));
    //         dom/trigger-download-uri(filename, "application/penpot", uri);
    //       }
    //     }
    //   });
  }, [files, selected]);

  const handleCancel = (event: React.MouseEvent) => {
    event.preventDefault();
    // st/emit!(modal/hide);
  };

  const handleAccept = (event: React.MouseEvent) => {
    event.preventDefault();
    startExport();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const type = event.target.getAttribute("data-type");
    if (type) {
      setState((prev) => ({ ...prev, selected: type as any }));
    }
  };

  // Auto-start export when no libraries
  React.useEffect(() => {
    if (!hasLibs && status === "prepare") {
      startExport();
    }
  }, [hasLibs, status, startExport]);

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">Download Penpot files</h2>
          <button className="modal-close-btn" onClick={handleCancel}>
            {/* deprecated-icon/close */}
            <svg viewBox="0 0 24 24" width="24" height="24"><path d="M..."/></svg>
          </button>
        </div>

        {status === "prepare" && (
          <>
            <div className="modal-content">
              <p className="modal-msg">
                You can download all the files or detach libraries from components.
              </p>
              <p className="modal-scd-msg">
                Select an export option for your files.
              </p>

              {(["all", "detach", "merge"] as const).map((type) => (
                <div key={type} className="export-option">
                  <label
                    htmlFor={`export-${type}`}
                    className={selected === type ? "checked" : ""}
                  >
                    <span className={selected === type ? "checked" : ""}>
                      {selected === type && (
                        /* deprecated-icon/status-tick */
                        <svg viewBox="0 0 24 24" width="24" height="24"><path d="M..."/></svg>
                      )}
                    </span>
                    <div className="option-content">
                      <h3 className="modal-subtitle">
                        {type === "all"
                          ? "All files"
                          : type === "detach"
                          ? "Detach libraries"
                          : "Merge libraries"}
                      </h3>
                      <p className="modal-msg">
                        {type === "all"
                          ? "Download all files with their current structure."
                          : type === "detach"
                          ? "Download files removing library links."
                          : "Download files with embedded libraries."}
                      </p>
                    </div>

                    <input
                      type="radio"
                      className="option-input"
                      id={`export-${type}`}
                      checked={selected === type}
                      name="export-option"
                      data-type={type}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              ))}
            </div>

            <div className="modal-footer">
              <div className="action-buttons">
                <input
                  className="cancel-button"
                  type="button"
                  value="Cancel"
                  onClick={handleCancel}
                />
                <input
                  className="accept-btn"
                  type="button"
                  value="Continue"
                  onClick={handleAccept}
                />
              </div>
            </div>
          </>
        )}

        {status === "exporting" && (
          <>
            <div className="modal-content">
              {stateFiles.map((file) => (
                <ExportEntry key={file.id} file={file} />
              ))}
            </div>

            <div className="modal-footer">
              <div className="action-buttons">
                <input
                  className="accept-btn"
                  type="button"
                  value="Close"
                  disabled={stateFiles.some((f) => f.loading)}
                  onClick={handleCancel}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
