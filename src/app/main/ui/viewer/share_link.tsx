// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useMemo, useState } from "react";
import * as d from "@app/common/data";
import * as dm from "@app/common/data.macros";
import * as cf from "@app/config";
import * as dc from "@app/main/data/common";
import * as ev from "@app/main/data/event";
import * as modal from "@app/main/data/modal";
import * as ntf from "@app/main/data/notifications";
import * as refs from "@app/main/refs";
import * as rt from "@app/main/router";
import { emit } from "@app/main/store";
import { Select } from "@app/main/ui/components/select";
import * as deprecatedIcon from "@app/main/ui/icons";
import { clipboard } from "@app/util/clipboard";
import * as dom from "@app/util/dom";
import { tr } from "@app/util/i18n";

interface ShareLinkDialogProps {
  file: any;
  page: any;
}

function prepareParams(options: any) {
  const { pages, whoComment, whoInspect } = options;
  return { pages, whoComment, whoInspect };
}

export function ShareLinkDialog(props: ShareLinkDialogProps) {
  const { file, page } = props;

  const currentPage = page;
  const currentPageId = page?.id;
  const slinks = useDeref(refs.shareLinks);
  const router = useDeref(refs.router);
  const route = useDeref(refs.route);
  const zoomType = useDeref(refs.viewerZoomType);
  const pageIds = dm.getIn(file, ["data", "pages"]);

  const [permsVisible, setPermsVisible] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const [options, setOptions] = useState({
    pagesMode: "current",
    allPages: false,
    pages: new Set([currentPageId]),
    whoComment: "team",
    whoInspect: "team"
  });

  const currentLink = useMemo(() => {
    const { pages, whoComment, whoInspect } = prepareParams(options);
    const slink = slinks?.find(
      (s: any) =>
        s.whoInspect === whoInspect &&
        s.whoComment === whoComment &&
        d.seqs(s.pages) === pages
    );

    if (slink) {
      const pageId = slink.pages?.find((p: string) => pageIds.includes(p));
      const params = {
        ...route?.queryParams,
        shareId: slink.id,
        pageId: pageId,
        index: "0"
      };
      if (zoomType) {
        params.zoom = zoomType;
      } else {
        delete params.zoom;
      }
      const href = rt.resolve(router, "viewer", params);
      return dm.str({ ...cf.publicUri, fragment: href });
    }
    return null;
  }, [slinks, options, pageIds, route, zoomType]);

  const onClose = useCallback((event: React.MouseEvent) => {
    dom.preventDefault(event);
    emit(modal.hide());
    emit(modal.disallowClickOutside());
  }, []);

  const onToggleAll = useCallback(() => {
    setConfirm(false);
    setOptions((prev) => {
      if (prev.allPages) {
        return { ...prev, allPages: false, pages: new Set([currentPageId]) };
      } else {
        return {
          ...prev,
          allPages: true,
          pages: new Set(file?.data?.pages || [])
        };
      }
    });
  }, [currentPageId, file]);

  const onMarkCheckedPage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const checked = target.checked;
    const pageId = (target as any).dataset.pageId;

    if (!pageId) return;

    const firstPage = Array.from(options.pages)[0];
    const difPages = pageId !== firstPage;
    const noOnePage = options.pages.size > 1;
    const shouldChange = noOnePage || difPages;

    if (!shouldChange) return;

    setConfirm(false);
    setOptions((prev) => {
      const newPages = checked
        ? new Set([...prev.pages, pageId])
        : new Set([...prev.pages].filter((p) => p !== pageId));
      const allSelected = newPages.size === pageIds.length;
      return { ...prev, pages: newPages, allPages: allSelected };
    });
  }, [options, pageIds]);

  const createLink = useCallback(() => {
    const params = prepareParams(options);
    params.fileId = file?.id;
    emit(
      dc.createShareLink(params),
      ev.event(ev.NAME, "create-share-link", { origin: "viewer", canComment: params.whoComment, canInspectCode: params.whoInspect })
    );
  }, [options, file]);

  const copyLink = useCallback(() => {
    if (currentLink) {
      clipboard.toClipboard(currentLink);
      emit(ntf.show({
        level: "info",
        type: "toast",
        content: tr("common.share-link.link-copied-success"),
        timeout: 1000
      }), ev.event(ev.NAME, "copy-share-link", { origin: "viewer" }));
    }
  }, [currentLink]);

  const tryDeleteLink = useCallback(() => {
    setConfirm(true);
  }, []);

  const deleteLink = useCallback(() => {
    const params = prepareParams(options);
    const slink = slinks?.find((s: any) => s.flags === params);
    setConfirm(false);
    if (slink) {
      emit(dc.deleteShareLink(slink));
    }
  }, [options, slinks]);

  const togglePermsVisibility = useCallback(() => {
    setPermsVisible((prev) => !prev);
  }, []);

  const onInspectChange = useCallback((value: string) => {
    setConfirm(false);
    setOptions((prev) => ({ ...prev, whoInspect: value }));
  }, []);

  const onCommentChange = useCallback((value: string) => {
    setConfirm(false);
    setOptions((prev) => ({ ...prev, whoComment: value }));
  }, []);

  return (
    <div className="share-modal">
      <div className="share-link-dialog">
        <div className="share-link-header">
          <h2 className="share-link-title">{tr("common.share-link.title")}</h2>
          <button className="modal-close-button" onClick={onClose} title={tr("labels.close")}>
            {deprecatedIcon.close}
          </button>
        </div>

        <div className="modal-content">
          <div className="share-link-section">
            {(!confirm && currentLink) && (
              <div className="custon-input-wrapper">
                <input
                  className="input-text"
                  type="text"
                  value={currentLink || ""}
                  placeholder={tr("common.share-link.placeholder")}
                  readOnly
                />
                <button
                  className="copy-button"
                  title={tr("viewer.header.share.copy-link")}
                  onClick={copyLink}
                >
                  {deprecatedIcon.clipboard}
                </button>
              </div>
            )}

            <div className="hint-wrapper">
              {!confirm && (
                <div className="hint">{tr("common.share-link.permissions-hint")}</div>
              )}

              {confirm ? (
                <div className="confirm-dialog">
                  <div className="description">
                    {tr("common.share-link.confirm-deletion-link-description")}
                  </div>
                  <div className="actions">
                    <input
                      type="button"
                      className="button-cancel"
                      onClick={() => setConfirm(false)}
                      value={tr("labels.cancel")}
                    />
                    <input
                      type="button"
                      className="button-danger"
                      onClick={deleteLink}
                      value={tr("common.share-link.destroy-link")}
                    />
                  </div>
                </div>
              ) : currentLink ? (
                <input
                  type="button"
                  className="button-danger"
                  onClick={tryDeleteLink}
                  value={tr("common.share-link.destroy-link")}
                />
              ) : (
                <input
                  type="button"
                  className="button-active"
                  onClick={createLink}
                  value={tr("common.share-link.get-link")}
                />
              )}
            </div>
          </div>

          {!confirm && (
            <div className="permissions-section">
              <button className="manage-permissions" onClick={togglePermsVisibility}>
                <span className={`icon ${permsVisible ? "rotated" : ""}`}>
                  {deprecatedIcon.arrow}
                </span>
                {tr("common.share-link.manage-ops")}
              </button>

              {permsVisible && (
                <>
                  {(() => {
                    const allSelected = options.allPages;
                    const pages = (file?.data?.pages || []).map((id: string) => file?.data?.pagesIndex?.[id]);
                    const selected = options.pages;

                    return (
                      <div className="view-mode">
                        <div className="subtitle">
                          {tr("common.share-link.permissions-pages")}
                        </div>
                        <div className="items">
                          {pages.length === 1 ? (
                            <div className="checkbox-wrapper">
                              <label
                                htmlFor={`page-${currentPageId}`}
                                className="global/checked"
                              >
                                <span className="checked">{deprecatedIcon.statusTick}</span>
                                {currentPage?.name}
                              </label>
                              <input
                                type="checkbox"
                                id={`page-${currentPageId}`}
                                data-page-id={currentPageId}
                                onChange={onMarkCheckedPage}
                                checked={true}
                              />
                              <span> {tr("common.share-link.current-tag")}</span>
                            </div>
                          ) : (
                            <>
                              <div className="select-all-row">
                                <div className="checkbox-wrapper">
                                  <label htmlFor="view-all" className="select-all-label">
                                    <span className={`global/checked ${allSelected ? "checked" : ""}`}>
                                      {allSelected && deprecatedIcon.statusTick}
                                    </span>
                                    {tr("common.share-link.view-all")}
                                    <input
                                      type="checkbox"
                                      id="view-all"
                                      checked={allSelected}
                                      name="pages-mode"
                                      onChange={onToggleAll}
                                    />
                                  </label>
                                </div>
                                <span className="count-pages">
                                  {tr("common.share-link.page-shared", selected.size)}
                                </span>
                              </div>

                              <ul className="pages-selection">
                                {pages.map(({ id, name }: any) => (
                                  <li key={id} className="checkbox-wrapper">
                                    <label htmlFor={`page-${id}`}>
                                      <span className={`global/checked ${selected.has(id) ? "checked" : ""}`}>
                                        {selected.has(id) && deprecatedIcon.statusTick}
                                      </span>
                                      {name}
                                      {currentPageId === id && (
                                        <div className="current-tag"> {tr("common.share-link.current-tag")}</div>
                                      )}
                                      <input
                                        type="checkbox"
                                        id={`page-${id}`}
                                        data-page-id={id}
                                        onChange={onMarkCheckedPage}
                                        checked={selected.has(id)}
                                      />
                                    </label>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })()}

                  <div className="access-mode">
                    <div className="subtitle">
                      {tr("common.share-link.permissions-can-comment")}
                    </div>
                    <div className="items">
                      <Select
                        className="who-comment-select"
                        defaultValue={String(options.whoComment)}
                        options={[
                          { value: "team", label: tr("common.share-link.team-members") },
                          { value: "all", label: tr("common.share-link.all-users") }
                        ]}
                        onChange={onCommentChange}
                      />
                    </div>
                  </div>

                  <div className="inspect-mode">
                    <div className="subtitle">
                      {tr("common.share-link.permissions-can-inspect")}
                    </div>
                    <div className="items">
                      <Select
                        className="who-inspect-select"
                        defaultValue={String(options.whoInspect)}
                        options={[
                          { value: "team", label: tr("common.share-link.team-members") },
                          { value: "all", label: tr("common.share-link.all-users") }
                        ]}
                        onChange={onInspectChange}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { useDeref } from "@shared/rum";