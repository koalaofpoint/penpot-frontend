// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
// TODO: Import proper modules
// import * as d from '../../../common/data';
// import * as dm from '../../../common/data/macros';
// import * as clr from '../../../common/types/color';
// import * as de from '../../../main/data/exports/assets';
// import * as modal from '../../../main/data/modal';
// import * as refs from '../../../main/refs';
// import * as st from '../../../main/store';
// import * as deprecated-icon from '../icons';
// import * as shape-wrapper from '../workspace/shapes';
// import * as dom from '../../../util/dom';
// import * as i18n from '../../../util/i18n';
// import * as ust from '../../../util/strings';
// import * as theme from '../../../util/theme';

interface ExportItem {
  shape: any;
  suffix?: string;
  enabled?: boolean;
  scale?: number;
  type?: string;
}

interface ExportMultipleDialogProps {
  exports: ExportItem[];
  title: string;
  cmd: string;
  noSelection: React.ReactNode;
  origin?: string;
}

function ExportMultipleDialog({
  exports: initialExports,
  title,
  cmd,
  noSelection,
  origin
}: ExportMultipleDialogProps) {
  // const lstate = refs/export;
  const inProgress = false;
  const [exports, setExports] = React.useState(initialExports);

  const allExports = exports;
  const allChecked = allExports.every((e) => e.enabled);
  const allUnchecked = allExports.every((e) => !e.enabled);

  const enabledExports = allExports
    .filter((e) => e.enabled)
    .map(({ shape, enabled, ...rest }) => rest);

  const handleCancel = (event: React.MouseEvent) => {
    event.preventDefault();
    // st/emit!(modal/hide);
  };

  const handleAccept = (event: React.MouseEvent) => {
    event.preventDefault();
    // st/emit!(modal/hide, de/request-multiple-export({ exports: enabledExports, cmd }), de/export-shapes-event(enabledExports, origin));
  };

  const handleToggleEnabled = (event: React.MouseEvent, index: number) => {
    const target = event.currentTarget as HTMLElement;
    const value = target.getAttribute("data-value");
    const parsedIndex = parseInt(value || "", 10);

    if (!isNaN(parsedIndex)) {
      setExports((prev) =>
        prev.map((exp, i) =>
          i === parsedIndex ? { ...exp, enabled: !exp.enabled } : exp
        )
      );
    }
  };

  const handleChangeAll = () => {
    setExports((prev) =>
      prev.map((exp) => ({ ...exp, enabled: !allChecked }))
    );
  };

  return (
    <div className="modal-overlay">
      <div className={`modal-container ${allExports.length === 0 ? "empty" : ""}`}>
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close-btn" onClick={handleCancel}>
            {/* deprecated-icon/close */}
            <svg viewBox="0 0 24 24" width="24" height="24"><path d="M..."/></svg>
          </button>
        </div>

        <div className="modal-content">
          {allExports.length > 0 ? (
            <>
              <div className="selection-header">
                <button className="selection-btn" onClick={handleChangeAll}>
                  <span className="checkbox-wrapper">
                    {allChecked ? (
                      <span className="checkobox-tick checked">
                        {/* deprecated-icon/tick */}
                        <svg viewBox="0 0 24 24" width="24" height="24"><path d="M..."/></svg>
                      </span>
                    ) : allUnchecked ? (
                      <span className="checkobox-tick unche ked"> </span>
                    ) : (
                      <span className="checkobox-tick intermediate">
                        {/* deprecated-icon/remove-icon */}
                        <svg viewBox="0 0 24 24" width="24" height="24"><path d="M..."/></svg>
                      </span>
                    )}
                  </span>
                  <div className="selection-title">
                    Selected {enabledExports.length} of {allExports.length}
                  </div>
                </button>
              </div>

              <div className="selection-wrapper">
                <div className={`selection-list ${allExports.length > 8 ? "selection-shadow" : ""}`}>
                  {allExports.map((exportItem, index) => {
                    const { shape, suffix } = exportItem;
                    const { x, y, width, height } = shape?.selrect || {};
                    const scale = exportItem.scale;
                    const type = exportItem.type;

                    return (
                      <div key={shape?.id} className="selection-row">
                        <button
                          className="selection-btn"
                          data-value={index.toString()}
                          onClick={(e) => handleToggleEnabled(e, index)}
                        >
                          <span className="checkbox-wrapper">
                            {exportItem.enabled ? (
                              <span className="checkobox-tick checked">
                                {/* deprecated-icon/tick */}
                                <svg viewBox="0 0 24 24" width="24" height="24"><path d="M..."/></svg>
                              </span>
                            ) : (
                              <span className="checkobox-tick unche ked"> </span>
                            )}
                          </span>

                          <div className="image-wrapper">
                            {shape?.thumbnail ? (
                              <img src={shape.thumbnail} alt="" />
                            ) : (
                              <svg
                                viewBox={`${x} ${y} ${width} ${height}`}
                                width={24}
                                height={20}
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                style={{ WebkitPrintColorAdjust: "exact" } as any}
                                fill="none"
                              >
                                {/* shape-wrapper */}
                              </svg>
                            )}
                          </div>

                          <div className="selection-name">
                            {shape?.name}
                            {suffix || ""}
                          </div>

                          {scale && (
                            <div className="selection-scale">
                              {(width * scale).toFixed(2)}x{(height * scale).toFixed(2)}
                            </div>
                          )}

                          {type && (
                            <div className="selection-extension">
                              {type.toUpperCase()}
                            </div>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            noSelection
          )}
        </div>

        {allExports.length > 0 && (
          <div className="modal-footer">
            <div className="action-buttons">
              <input
                className="cancel-button"
                type="button"
                value="Cancel"
                onClick={handleCancel}
              />
              <input
                className={`accept-btn ${inProgress || allUnchecked ? "btn-disabled" : ""}`}
                disabled={inProgress || allUnchecked}
                type="button"
                value={inProgress ? "Exporting..." : "Export"}
                onClick={inProgress ? undefined : handleAccept}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ShapesNoSelection() {
  return (
    <div className="no-selection">
      <p className="modal-msg">No elements to export</p>
      <p className="modal-scd-msg">Select elements in the canvas to export</p>
      <a
        target="_blank"
        className="modal-link"
        href="https://help.penpot.app/user-guide/exporting/"
      >
        Learn more
      </a>
    </div>
  );
}

interface ExportShapesDialogProps {
  exports: ExportItem[];
  origin?: string;
}

export function ExportShapesDialog({ exports, origin }: ExportShapesDialogProps) {
  const title = "Export shapes";
  return (
    <ExportMultipleDialog
      exports={exports}
      title={title}
      cmd="export-shapes"
      noSelection={<ShapesNoSelection />}
      origin={origin}
    />
  );
}

interface ExportFramesDialogProps {
  exports: ExportItem[];
  origin?: string;
}

export function ExportFramesDialog({ exports, origin }: ExportFramesDialogProps) {
  const title = "Export frames";
  return (
    <ExportMultipleDialog
      exports={exports}
      title={title}
      cmd="export-frames"
      origin={origin}
    />
  );
}

export function ProgressWidget() {
  // const state = refs/export;
  // const profile = refs/profile;
  // const currentTheme = profile?.theme || theme/default;

  const error = false;
  const healthy = true;
  const detailVisible = false;
  const widgetVisible = false;
  const progress = 0;
  const items: any[] = [];
  const total = items.length || 0;
  const complete = progress === total;

  const circ = 2 * Math.PI * 12;
  const pct = total === 0 ? circ : circ - circ * (progress / total);

  const pwidth = error ? 280 : (progress * 280) / total;

  // const color = error ? clr/new-danger
  //              : healthy ? (is-default-theme? ? clr/new-primary : clr/new-primary-light)
  //              : clr/new-warning;

  // const backgroundClr = is-default-theme? ? clr/background-quaternary : clr/background-quaternary-light;

  const handleRetry = () => {
    // st/emit!(de/retry-last-export);
  };

  const handleToggleDetail = () => {
    // st/emit!(de/toggle-detail-visibililty);
  };

  return (
    <>
      {widgetVisible && (
        <div className="export-progress-widget" onClick={handleToggleDetail}>
          <svg width="24" height="24">
            <circle
              r="10"
              cx="12"
              cy="12"
              fill="transparent"
              stroke="var(--color-accent-quaternary)"
              strokeWidth="4"
            />
            <circle
              r="10"
              cx="12"
              cy="12"
              fill="transparent"
              stroke="var(--color-primary)"
              strokeWidth="4"
              strokeDasharray={`${circ} ${circ}`}
              strokeDashoffset={pct}
              transform="rotate(-90 12,12)"
              style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
            />
          </svg>
        </div>
      )}

      {detailVisible && (
        <div className={`export-progress-modal ${error ? "has-error" : ""}`}>
          {/* error ? error-icon : neutral-icon */}

          <div className="export-progress-title">
            <div className="title-text">
              {error
                ? "Error exporting"
                : complete
                ? "Export complete"
                : healthy
                ? "Exporting..."
                : "Exporting slowly..."}
            </div>

            {error ? (
              <button className="retry-btn" onClick={handleRetry}>
                Retry
              </button>
            ) : (
              <span className="progress">
                {progress} / {total}
              </span>
            )}
          </div>

          <button className="progress-close-button" onClick={handleToggleDetail}>
            {/* close-icon */}
            <svg viewBox="0 0 24 24" width="24" height="24"><path d="M..."/></svg>
          </button>

          {!error && (
            <svg className="progress-bar" height={4} width={280}>
              <g>
                <path
                  d="M0 0 L280 0"
                  stroke="var(--color-accent-quaternary)"
                  strokeWidth={30}
                />
                <path
                  d="M0 0 L280 0"
                  stroke="var(--color-primary)"
                  strokeWidth={30}
                  fill="transparent"
                  strokeDasharray={280}
                  strokeDashoffset={280 - pwidth}
                  style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
                />
              </g>
            </svg>
          )}
        </div>
      )}
    </>
  );
}
