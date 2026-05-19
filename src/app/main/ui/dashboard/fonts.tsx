// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react";
import { cm } from "app.common.media";
import { uuid } from "app.common.uuid";
import { cf } from "app.config";
import { df } from "app.main.data.fonts";
import { modal } from "app.main.data.modal";
import { ntf } from "app.main.data.notifications";
import { rp } from "app.main.repo";
import { st } from "app.main.store";
import { ContextMenu } from "app.main.ui.components.context-menu-a11y";
import { FileUploader } from "app.main.ui.components.file-uploader";
import { EmptyPlaceholder } from "app.main.ui.ds.product.empty-placeholder";
import { deprecatedIcon } from "app.main.ui.icons";
import { ContextNotification } from "app.main.ui.notifications.context-notification";
import { dom } from "app.util.dom";
import { tr } from "app.util.i18n";
import { kbd } from "app.util.keyboard";
import { rx } from "beicon.v2.core";
import { str as strLib } from "cuerdas.core";

function cssClass(classes: Record<string, boolean>): string {
  return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
}

const acceptFontTypes = [
  cm.fontTypes.join(","),
  ",.ttf,application/font-woff,woff,.otf"
].join(",");

function usePageTitle(team: any, section: string) {
  React.useEffect(() => {
    if (team) {
      const tname = team.isDefault ? tr("dashboard.your-penpot") : team.name;
      const title = section === "fonts"
        ? tr("title.dashboard.fonts", tname)
        : tr("title.dashboard.font-providers", tname);
      dom.setHtmlTitle(title);
    }
  }, [team, section]);
}

function badFontFamilyTmp(font: any): boolean {
  return font["font-family-tmp"] !== undefined && strLib.blank(font["font-family-tmp"]);
}

interface HeaderProps {
  section: string;
  team: any;
}

export function Header(props: HeaderProps) {
  const { section, team } = props;
  usePageTitle(team, section);

  return (
    <header className={cssClass({ "dashboard-header": true })} data-testid="dashboard-header">
      <div id="dashboard-fonts-title" className={cssClass({ "dashboard-title": true })}>
        <h1>{tr("labels.fonts")}</h1>
      </div>
    </header>
  );
}

interface FontVariantDisplayNameProps {
  variant: any;
}

export function FontVariantDisplayName(props: FontVariantDisplayNameProps) {
  const { variant } = props;
  return (
    <>
      <span>{cm.fontWeightToName(variant["font-weight"])}</span>
      {variant["font-style"] !== "normal" && (
        <span> {strLib.capital(variant["font-style"])}</span>
      )}
    </>
  );
}

interface UploadedFontsProps {
  team: any;
  installedFonts: any;
}

export function UploadedFonts(props: UploadedFontsProps) {
  const { team, installedFonts } = props;
  const fontsRef = React.useState<Record<string, any>>({})[0];
  const fonts = fontsRef.current;
  const fontsVals = React.useMemo(() => {
    const vals = Object.values(fonts);
    return vals.length > 0 ? vals : null;
  }, [fonts]);

  const teamId = team?.id;
  const inputRef = React.useRef<HTMLInputElement>(null);

  const uploadingRef = React.useState<Set<string>>(new Set())[0];
  const uploading = uploadingRef.current;

  const disableUploadAll = React.useMemo(() => {
    return Object.values(fonts).some((f: any) => badFontFamilyTmp(f));
  }, [fonts]);

  const problematicFonts = React.useMemo(() => {
    return Object.values(fonts).some((f: any) => f["height-warning?"]);
  }, [fonts]);

  const onClick = React.useCallback(() => {
    const node = inputRef.current;
    if (node) dom.click(node);
  }, []);

  const onSelected = React.useCallback(
    (blobs: any[]) => {
      df.processUpload(blobs, teamId).subscribe(
        (result: any) => {
          fontsRef.current = df.mergeAndGroupFonts(installedFonts, result);
        },
        (error: any) => {
          console.error("error", error);
        }
      );
    },
    [teamId, installedFonts]
  );

  const onUploadFn = React.useCallback(
    (item: any) => {
      uploadingRef.current = new Set(uploading);
      uploadingRef.current.add(item.id);

      rp.cmd!("create-font-variant", item).pipe(
        rx.delayAtLeast(2000)
      ).subscribe(
        (font: any) => {
          fontsRef.current = { ...fontsRef.current, [item.id]: undefined };
          uploadingRef.current.delete(item.id);
          st.emit!(df.addFont(font));
        },
        (error: any) => {
          st.emit!(ntf.error(tr("errors.bad-font", item.names?.[0])));
          fontsRef.current = { ...fontsRef.current, [item.id]: undefined };
          console.log("error", error);
        }
      );
    },
    [uploading]
  );

  const onUpload = React.useCallback(
    (event: any) => {
      const target = dom.getCurrentTarget(event);
      const id = uuid.parse(dom.getData(target, "id"));
      const item = fonts[id];
      if (item) onUploadFn(item);
    },
    [fonts, onUploadFn]
  );

  const onBlurName = React.useCallback(
    (event: any) => {
      const target = dom.getCurrentTarget(event);
      const id = uuid.parse(dom.getData(target, "id"));
      const name = dom.getValue(target);
      if (!strLib.blank(name)) {
        fontsRef.current = df.renameAndRegroup(id, name, installedFonts);
      }
    },
    [installedFonts]
  );

  const onChangeName = React.useCallback(
    (event: any) => {
      const target = dom.getCurrentTarget(event);
      const id = uuid.parse(dom.getData(target, "id"));
      const name = dom.getValue(target);
      fontsRef.current = { ...fontsRef.current, [id]: { ...fontsRef.current[id], "font-family-tmp": name } };
    },
    []
  );

  const onDelete = React.useCallback(
    (event: any) => {
      const id = uuid.parse(dom.getData(dom.getCurrentTarget(event), "id"));
      const newFonts = { ...fontsRef.current };
      delete newFonts[id];
      fontsRef.current = newFonts;
    },
    []
  );

  const onUploadAll = React.useCallback(
    (_: any) => {
      if (fontsVals) {
        fontsVals.forEach((f: any) => onUploadFn(f));
      }
    },
    [fontsVals, onUploadFn]
  );

  const onDismissAll = React.useCallback(
    (_: any) => {
      Object.values(fontsRef.current).forEach((f: any) => {
        const newFonts = { ...fontsRef.current };
        delete newFonts[f.id];
        fontsRef.current = newFonts;
      });
    },
    []
  );

  return (
    <div className={cssClass({ "dashboard-fonts-upload": true })}>
      <div className={cssClass({ "dashboard-fonts-hero": true })}>
        <div className={cssClass({ desc: true })}>
          <h2>{tr("labels.upload-custom-fonts")}</h2>

          <button
            className={cssClass({ "btn-primary": true })}
            onClick={onClick}
            tabIndex="0"
          >
            <span>{tr("labels.add-custom-font")}</span>
            <FileUploader
              inputId="font-upload"
              accept={acceptFontTypes}
              multi={true}
              ref={inputRef}
              onSelected={onSelected}
            />
          </button>

          {cf.termsOfServiceUri && (
            <ContextNotification
              content={tr("dashboard.fonts.hero-text2", cf.termsOfServiceUri)}
              level="default"
              isHtml={true}
            />
          )}

          {problematicFonts && (
            <ContextNotification
              content={tr("dashboard.fonts.warning-text")}
              level="warning"
              isHtml={true}
            />
          )}
        </div>
      </div>

      {fonts && Object.keys(fonts).length > 0 && (
        <div className={cssClass({ "font-item": true, "table-row": true })}>
          <span>{tr("dashboard.fonts.fonts-added", fonts?.length || 0)}</span>
          <div className={cssClass({ "table-field": true, options: true })}>
            <button
              className={cssClass({ "btn-primary": true, disabled: disableUploadAll })}
              onClick={onUploadAll}
              data-testid="upload-all"
              disabled={disableUploadAll}
            >
              <span>{tr("dashboard.fonts.upload-all")}</span>
            </button>
            <button
              className={cssClass({ "btn-secondary": true })}
              onClick={onDismissAll}
              data-testid="dismiss-all"
            >
              <span>{tr("dashboard.fonts.dismiss-all")}</span>
            </button>
          </div>
        </div>
      )}

      {fontsVals?.map((item: any) => {
        const isUploading = uploading.has(item.id);
        const disableUpload = isUploading || badFontFamilyTmp(item);

        return (
          <div
            key={item.id}
            className={cssClass({ "font-item": true, "table-row": true })}
          >
            <div className={cssClass({ "table-field": true, family: true })}>
              <input
                type="text"
                data-id={String(item.id)}
                onBlur={onBlurName}
                onChange={onChangeName}
                defaultValue={item["font-family"]}
              />
            </div>
            <div className={cssClass({ "table-field": true, variants: true })}>
              <span className={cssClass({ label: true })}>
                <FontVariantDisplayName variant={item} />
              </span>
            </div>

            <div className={cssClass({ "table-field": true, filenames: true })}>
              {item.names?.map((name: string) => (
                <span key={`name-${name}`}>{name}</span>
              ))}
            </div>

            <div className={cssClass({ "table-field": true, options: true })}>
              {item["height-warning?"] && (
                <span className={cssClass({ icon: true, failure: true })}>
                  {deprecatedIcon.msgNeutral}
                </span>
              )}

              <button
                onClick={onUpload}
                data-id={String(item.id)}
                className={cssClass({
                  "btn-primary": true,
                  "upload-button": true,
                  disabled: disableUpload
                })}
                disabled={disableUpload}
              >
                {isUploading ? tr("labels.uploading") : tr("labels.upload")}
              </button>
              <span
                className={cssClass({ icon: true, close: true })}
                data-id={String(item.id)}
                onClick={onDelete}
              >
                {deprecatedIcon.close}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

interface InstalledFontContextMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export function InstalledFontContextMenu(props: InstalledFontContextMenuProps) {
  const { isOpen, onClose, onEdit, onDelete } = props;

  const options = React.useMemo(() => [
    { name: tr("labels.edit"), id: "font-edit", handler: onEdit },
    { name: tr("labels.delete"), id: "font-delete", handler: onDelete }
  ], [onEdit, onDelete]);

  return (
    <ContextMenu
      onClose={onClose}
      show={isOpen}
      fixed={false}
      minWidth={true}
      top={-15}
      left={-115}
      options={options}
    />
  );
}

interface InstalledFontProps {
  fontId: string;
  variants: any[];
  canEdit: boolean;
}

export function InstalledFont(props: InstalledFontProps) {
  const { fontId, variants, canEdit } = props;
  const font = variants?.[0];

  const menuOpenRef = React.useState(false)[0];
  const menuOpen = menuOpenRef.current;
  const editionRef = React.useState(false)[0];
  const edition = editionRef.current;

  const stateRef = React.useState(font?.["font-family"] || "")[0];
  const fontFamily = stateRef.current;

  const sortedVariants = React.useMemo(() => {
    return [...variants].sort((a, b) => {
      const aWeight = a["font-weight"];
      const bWeight = b["font-weight"];
      const aStyle = a["font-style"] === "normal" ? 1 : 2;
      const bStyle = b["font-style"] === "normal" ? 1 : 2;
      return aWeight - bWeight || aStyle - bStyle;
    });
  }, [variants]);

  const onChange = React.useCallback(
    (event: any) => {
      stateRef.current = dom.getTargetVal(event);
    },
    []
  );

  const onEdit = React.useCallback(() => {
    editionRef.current = true;
  }, []);

  const onMenuOpen = React.useCallback(() => {
    menuOpenRef.current = true;
  }, []);

  const onMenuClose = React.useCallback(() => {
    menuOpenRef.current = false;
  }, []);

  const onSave = React.useCallback(
    (_: any) => {
      editionRef.current = false;
      if (!strLib.blank(fontFamily)) {
        st.emit!(df.updateFont({ id: fontId, name: fontFamily }));
      }
    },
    [fontId, fontFamily]
  );

  const onKeyDown = React.useCallback(
    (event: any) => {
      if (kbd.enter(event)) {
        onSave(event);
      }
    },
    [onSave]
  );

  const onCancel = React.useCallback(
    (_: any) => {
      editionRef.current = false;
      stateRef.current = font?.["font-family"] || "";
    },
    [font]
  );

  const onDeleteFont = React.useCallback(
    () => {
      const options = {
        type: "confirm" as const,
        title: tr("modals.delete-font.title"),
        message: tr("modals.delete-font.message"),
        acceptLabel: tr("labels.delete"),
        onAccept: () => st.emit!(df.deleteFont(fontId))
      };
      st.emit!(modal.show(options));
    },
    [fontId]
  );

  const onDeleteVariant = React.useCallback(
    (event: any) => {
      const id = uuid.parse(dom.getData(dom.getCurrentTarget(event), "id"));
      const options = {
        type: "confirm" as const,
        title: tr("modals.delete-font-variant.title"),
        message: tr("modals.delete-font-variant.message"),
        acceptLabel: tr("labels.delete"),
        onAccept: () => st.emit!(df.deleteFontVariant(id))
      };
      st.emit!(modal.show(options));
    },
    []
  );

  return (
    <div className={cssClass({ "font-item": true, "table-row": true })}>
      <div
        className={cssClass({
          "table-field": true,
          family: true,
          "is-edition": edition
        })}
      >
        {edition ? (
          <input
            type="text"
            autoFocus={true}
            defaultValue={fontFamily}
            onKeyDown={onKeyDown}
            onChange={onChange}
          />
        ) : (
          <span>{font?.["font-family"]}</span>
        )}
      </div>

      <div className={cssClass({ "table-field": true, variants: true })}>
        {sortedVariants.map((item: any) => (
          <div
            key={item.id}
            className={cssClass({
              variant: true,
              "inhert-variant": !canEdit
            })}
          >
            <span className={cssClass({ label: true })}>
              <FontVariantDisplayName variant={item} />
            </span>
            {canEdit && (
              <span
                className={cssClass({ icon: true, close: true })}
                data-id={String(item.id)}
                onClick={onDeleteVariant}
              >
                {deprecatedIcon.add}
              </span>
            )}
          </div>
        ))}
      </div>

      {edition ? (
        <div className={cssClass({ "table-field": true, options: true })}>
          <button
            disabled={strLib.blank(fontFamily)}
            onClick={onSave}
            className={cssClass({ "btn-primary": true, "btn-disabled": strLib.blank(fontFamily) })}
          >
            {tr("labels.save")}
          </button>
          <button
            className={cssClass({ icon: true, close: true })}
            onClick={onCancel}
          >
            {deprecatedIcon.close}
          </button>
        </div>
      ) : canEdit && (
        <div className={cssClass({ "table-field": true, options: true })}>
          <span
            className={cssClass({ icon: true })}
            onClick={onMenuOpen}
          >
            {deprecatedIcon.menu}
          </span>

          <InstalledFontContextMenu
            onClose={onMenuClose}
            isOpen={menuOpen}
            onDelete={onDeleteFont}
            onEdit={onEdit}
          />
        </div>
      )}
    </div>
  );
}

interface InstalledFontsProps {
  fonts: any;
  canEdit: boolean;
}

export function InstalledFonts(props: InstalledFontsProps) {
  const { fonts, canEdit } = props;
  const searchTermRef = React.useState("")[0];
  const searchTerm = searchTermRef.current;

  const matches = React.useCallback(
    (font: any) => {
      return strLib.includes(
        strLib.lower(font["font-family"] || ""),
        strLib.lower(searchTerm)
      );
    },
    [searchTerm]
  );

  const onChange = React.useCallback(
    (event: any) => {
      searchTermRef.current = strLib.lower(dom.getTargetVal(event));
    },
    []
  );

  const fontsById = React.useMemo(() => {
    if (!fonts) return {};
    return Object.values(fonts)
      .filter(matches)
      .reduce((acc: any, font: any) => {
        const existing = acc[font["font-id"]] || [];
        acc[font["font-id"]] = [...existing, font];
        return acc;
      }, {});
  }, [fonts, matches]);

  if (!fonts) {
    return (
      <div className={cssClass({ "dashboard-installed-fonts": true })}>
        <div className={cssClass({ "fonts-placeholder": true })}>
          <div className={cssClass({ icon: true })}>{deprecatedIcon.loader}</div>
          <div className={cssClass({ label: true })}>{tr("dashboard.loading-fonts")}</div>
        </div>
      </div>
    );
  }

  if (Object.keys(fontsById).length === 0) {
    if (canEdit) {
      return (
        <div className={cssClass({ "dashboard-installed-fonts": true })}>
          <div className={cssClass({ "fonts-placeholder": true })}>
            <div className={cssClass({ icon: true })}>{deprecatedIcon.text}</div>
            <div className={cssClass({ label: true })}>{tr("dashboard.fonts.empty-placeholder")}</div>
          </div>
        </div>
      );
    }

    return (
      <EmptyPlaceholder
        title={tr("dashboard.fonts.empty-placeholder-viewer")}
        subtitle={tr("dashboard.fonts.empty-placeholder-viewer-sub")}
        type={2}
      />
    );
  }

  return (
    <div className={cssClass({ "dashboard-installed-fonts": true })}>
      <h3>{tr("labels.installed-fonts")}</h3>
      <div className={cssClass({ "installed-fonts-header": true })}>
        <div className={cssClass({ "table-field": true, family: true })}>
          {tr("labels.font-family")}
        </div>
        <div className={cssClass({ "table-field": true, variants: true })}>
          {tr("labels.font-variants")}
        </div>
        <div className={cssClass({ "table-field": true, "search-input": true })}>
          <input
            placeholder={tr("labels.search-font")}
            defaultValue=""
            onChange={onChange}
          />
        </div>
      </div>

      {Object.entries(fontsById).map(([fontId, fontVariants]: [string, any[]]) => (
        <InstalledFont
          key={`${fontId}-installed`}
          fontId={fontId}
          canEdit={canEdit}
          variants={fontVariants}
        />
      ))}
    </div>
  );
}

const refFonts = { current: null };

interface FontsPageProps {
  team: any;
}

export function FontsPage(props: FontsPageProps) {
  const { team } = props;
  const fonts = refFonts.current;
  const permissions = team?.permissions || {};
  const canEdit = permissions["can-edit"];

  return (
    <>
      <Header section="fonts" team={team} />
      <section className={cssClass({ "dashboard-container": true, "dashboard-fonts": true })}>
        {canEdit && <UploadedFonts team={team} installedFonts={fonts} />}
        <InstalledFonts fonts={fonts} canEdit={canEdit} />
      </section>
    </>
  );
}

interface FontProvidersPageProps {
  team: any;
}

export function FontProvidersPage(props: FontProvidersPageProps) {
  const { team } = props;
  return (
    <>
      <Header section="providers" team={team} />
      <section className={cssClass({ "dashboard-container": true })}>
        <span>font providers</span>
      </section>
    </>
  );
}