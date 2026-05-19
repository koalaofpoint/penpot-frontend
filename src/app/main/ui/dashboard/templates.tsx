// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react";
import { useCallback, useState, useEffect, useRef } from "react";
import * as dm from "app.common.data.macros";
import * as u from "app.common.uri";
import * as cf from "app.config";
import * as dcm from "app.main.data.common";
import * as dd from "app.main.data.dashboard";
import * as ev from "app.main.data.event";
import * as modal from "app.main.data.modal";
import * as refs from "app.main.refs";
import * as st from "app.main.store";
import * as deprecatedIcon from "app.main.ui.icons";
import * as dom from "app.util.dom";
import * as nw from "app.util.dom.normalize-wheel";
import { tr } from "app.util.i18n";
import * as kbd from "app.util.keyboard";
import * as storage from "app.util.storage";
import * as l from "okulary.core";
import * as ptk from "potok.v2.core";

const arrowIcon = deprecatedIcon.iconXref("arrow", "arrow-icon");
const downloadIcon = deprecatedIcon.iconXref("add", "download-icon");

const builtinTemplates = l.derived("builtin-templates", st.state);

function importTemplate(
  template: any,
  teamId: string,
  projectId: string | null,
  defaultProjectId: string,
  section: string
) {
  const onFinish = () => {
    st.emit!(
      dd.fetchRecentFiles(teamId),
      ptk.event(ev.event, {
        name: "import-template-finish",
        origin: "dashboard",
        template: template.name,
        section: section
      })
    );

    if (projectId === null) {
      dcm.goToDashboardRecent({
        teamId: teamId,
        projectId: defaultProjectId
      });
    }
  };

  st.emit!(
    ptk.event(ev.event, {
      name: "import-template-launch",
      origin: "dashboard",
      template: template.name,
      section: section
    }),
    modal.show({
      type: "import",
      projectId: projectId || defaultProjectId,
      files: [],
      template: template,
      onFinishImport: onFinish
    })
  );
}

interface TitleProps {
  onClick: () => void;
  isCollapsed: boolean;
}

function Title(props: TitleProps) {
  const onKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (kbd.enter(event)) {
      dom.stopPropagation(event);
      dom.preventDefault(event);
      props.onClick();
    }
  }, [props.onClick]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <div className={cssClass({ title: true })}>
      <button
        tabIndex={0}
        className={cssClass({ "title-btn": true })}
        onClick={props.onClick}
        onKeyDown={onKeyDown}
      >
        <span className={cssClass({ "title-text": true })}>
          {tr("dashboard.libraries-and-templates")}
        </span>
        {props.isCollapsed ? (
          <span className={cssClass({ "title-icon-container": true })}>
            <span className={cssClass({ "title-icon-text": true })}>{tr("labels.show")}</span>
            <span className={cssClass({ "title-icon": true, "title-icon-collapsed": true })}>
              {arrowIcon}
            </span>
          </span>
        ) : (
          <span className={cssClass({ "title-icon-container": true })}>
            <span className={cssClass({ "title-icon-text": true })}>{tr("labels.hide")}</span>
            <span className={cssClass({ "title-icon": true })}>
              {arrowIcon}
            </span>
          </span>
        )}
      </button>
    </div>
  );
}

interface CardItemProps {
  item: any;
  index: number;
  isVisible: boolean;
  collapsed: boolean;
  onImport: (item: any, event?: any) => void;
}

function CardItem(props: CardItemProps) {
  const id = dm.str("card-container-", props.index);
  const href = u.join(cf.publicUri, dm.str("images/thumbnails/template-", props.item.id, ".jpg"));
  const [hover, setHover] = useState(false);

  const onClick = useCallback((event: React.MouseEvent) => {
    props.onImport(props.item, event);
  }, [props.item, props.onImport]);

  const onKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (kbd.enter(event)) {
      dom.stopPropagation(event);
      props.onImport(props.item);
    }
  }, [props.item, props.onImport]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <div
      className={cssClass({ "card-container": true })}
      tabIndex={!props.isVisible || props.collapsed ? -1 : 0}
      id={id}
      data-index={props.index}
    >
      <a
        className={cssClass({ "template-card": true })}
        onClick={onClick}
        onMouseDown={dom.preventDefault}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onKeyDown={onKeyDown}
      >
        <div className={cssClass({ "img-container": true })}>
          <img src={href} alt={props.item.name} loading="lazy" decoding="async" />
        </div>
        <div className={cssClass({ "card-name": true })}>
          <span className={cssClass({ "card-text": true })}>
            {hover ? tr("dashboard.template.add-to-project") : props.item.name}
          </span>
          {downloadIcon}
        </div>
      </a>
    </div>
  );
}

interface CardItemLinkProps {
  total: number;
  isVisible: boolean;
  collapsed: boolean;
  section: string;
}

function CardItemLink(props: CardItemLinkProps) {
  const id = dm.str("card-container-", props.total);

  const onClick = useCallback(() => {
    st.emit!(ptk.event(ev.event, {
      name: "explore-libraries-click",
      origin: "dashboard",
      section: props.section
    }));
  }, [props.section]);

  const onKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (kbd.enter(event)) {
      dom.stopPropagation(event);
      onClick();
    }
  }, [onClick]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <div className={cssClass({ "card-container": true })}>
      <div className={cssClass({ "template-card": true })}>
        <div className={cssClass({ "img-container": true })}>
          <a
            id={id}
            tabIndex={!props.isVisible || props.collapsed ? -1 : 0}
            href="https://penpot.app/libraries-templates"
            target="_blank"
            onClick={onClick}
            onKeyDown={onKeyDown}
          >
            <div className={cssClass({ "template-link": true })}>
              <div className={cssClass({ "template-link-title": true })}>
                {tr("dashboard.libraries-and-templates")}
              </div>
              <div className={cssClass({ "template-link-text": true })}>
                {tr("dashboard.libraries-and-templates.explore")}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

interface TemplatesSectionProps {
  defaultProjectId: string;
  profile: any;
  projectId: string | null;
  teamId: string;
}

function TemplatesSection(props: TemplatesSectionProps) {
  const templatesData = refs.deref(builtinTemplates) as any[];
  const templates = templatesData?.filter(
    (t: any) => t.id !== "welcome" && t.id !== "tutorial-for-beginners"
  ) || [];

  const route = refs.deref(refs.route);
  const routeName = route?.data?.name;
  const section = routeName === "dashboard-files"
    ? (props.projectId === props.defaultProjectId ? "dashboard-drafts" : "dashboard-project")
    : (routeName as string);

  const [collapsed, setCollapsed] = useState(() => {
    return storage.getGlobal("::collapsed") ?? false;
  });

  const [canMove, setCanMove] = useState({ left: false, right: true });
  const contentRef = useRef<HTMLDivElement>(null);

  const onToggleCollapse = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  const onWheel = useCallback((event: React.WheelEvent) => {
    const eventNormalized = nw.normalizeWheel(event);
    const deltaY = eventNormalized.spinY;
    const deltaX = eventNormalized.spinX;
    const node = contentRef.current;

    if (node && Math.abs(deltaY) > Math.abs(deltaX)) {
      node.scrollBy({ left: 300 * deltaY, behavior: "smooth" });
    }
  }, []);

  const onScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const scrollLeft = target.scrollLeft;
    const scrollAvailable = target.scrollWidth - scrollLeft;
    const clientWidth = target.clientWidth;

    setCanMove({
      left: scrollLeft > 0,
      right: scrollAvailable > clientWidth
    });
  }, []);

  const onMoveLeft = useCallback((event: React.KeyboardEvent | React.MouseEvent) => {
    if (contentRef.current) {
      if (kbd.rightArrow(event as any)) {
        contentRef.current.scrollBy({ left: 300, top: 0 });
      } else {
        contentRef.current.scrollBy({ left: -300, top: 0 });
      }
    }
  }, []);

  const onMoveRight = useCallback((event: React.KeyboardEvent | React.MouseEvent) => {
    if (contentRef.current) {
      if (kbd.leftArrow(event as any)) {
        contentRef.current.scrollBy({ left: -300, top: 0 });
      } else {
        contentRef.current.scrollBy({ left: 300, top: 0 });
      }
    }
  }, []);

  const onImportTemplate = useCallback((template: any, _event?: any) => {
    importTemplate(template, props.teamId, props.projectId, props.defaultProjectId, section);
  }, [props.teamId, props.projectId, props.defaultProjectId, section]);

  useEffect(() => {
    const content = contentRef.current;
    if (content && templates) {
      dom.scrollTo(content, { behavior: "instant", left: 0, top: 0 });
      dom.dispatchEvent(content, dom.event("scroll"));
    }
  }, [templates]);

  useEffect(() => {
    storage.setGlobal("::collapsed", collapsed);

    if (props.profile && !collapsed) {
      st.emit!(dd.fetchBuiltinTemplates());
    }
  }, [props.profile, collapsed]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <div className={cssClass({ "dashboard-templates-section": true, collapsed: collapsed })}>
      <Title onClick={onToggleCollapse} isCollapsed={collapsed} />

      <p className={cssClass({ "content-description": true })}>
        {tr("dashboard.libraries-and-templates.description")}
      </p>

      <div
        className={cssClass({ content: true })}
        onScroll={onScroll}
        onWheel={onWheel}
        ref={contentRef}
      >
        {templates.map((template: any, index: number) => (
          <CardItem
            key={index}
            item={template}
            index={index}
            isVisible={true}
            collapsed={collapsed}
            onImport={onImportTemplate}
          />
        ))}

        <CardItemLink
          total={templates.length}
          isVisible={true}
          collapsed={collapsed}
          section={section}
        />
      </div>

      {canMove.left && (
        <button
          className={cssClass({ "move-button": true, "move-left": true })}
          tabIndex={collapsed ? -1 : 0}
          onClick={onMoveLeft}
          onKeyDown={onMoveLeft as any}
        >
          {arrowIcon}
        </button>
      )}

      {canMove.right && (
        <button
          className={cssClass({ "move-button": true, "move-right": true })}
          tabIndex={collapsed ? -1 : 0}
          onClick={onMoveRight}
          onKeyDown={onMoveRight as any}
          aria-label={tr("labels.next")}
        >
          {arrowIcon}
        </button>
      )}
    </div>
  );
}

export { TemplatesSection };