// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app/common/data";
import * as dm from "app/common/data.macros";
import * as cfo from "app/common/files/tokens";
import * as ctsl from "app/common/types/shape/layout";
import * as ctt from "app/common/types/token";
import * as modal from "app/main/data/modal";
import * as dwsl from "app/main/data/workspace/shape-layout";
import * as dwta from "app/main/data/workspace/tokens/application";
import * as dwtl from "app/main/data/workspace/tokens/library-edit";
import * as refs from "app/main/refs";
import { emit } from "app/main/store";
import { Dropdown } from "app/main/ui/components/dropdown";
import { icon as iconStar } from "app/main/ui/ds/foundations/assets/icon";
import * as i from "app/main/ui/ds/foundations/assets/icon";
import * as hooks from "app/main/ui/hooks";
import * as dom from "app/util/dom";
import { tr } from "app/util/i18n";
import * as timers from "app/util/timers";
import * as set from "clojure.set";
import * as l from "okulary.core";
import * as ptk from "potok.v2.core";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

// Helpers ---------------------------------------------------------------------

function keyInMap(ks: any[], m: any): boolean {
  return ks.some((k) => m.has(k));
}

function cleanSeparators(items: any[]): any[] | null {
  const items2 = d.dedupe(items).dropWhile((x: any) => x === ":separator");
  if (items2.every((x: any) => x === ":separator")) {
    return null;
  }
  return items2;
}

// Actions ---------------------------------------------------------------------

function attributeActions(token: any, selectedShapes: any[], attributes: any) {
  const idsByAttributes = cfo.shapesIdsByAppliedAttributes(token, selectedShapes, attributes);
  const shapeIds = new Set(selectedShapes.map((s: any) => s.id));
  return {
    allSelected: cfo.shapesAppliedAll(idsByAttributes, shapeIds, attributes),
    shapeIds,
    selectedPred: (attr: any) => idsByAttributes[attr]?.length > 0,
  };
}

function genericAttributeActions(
  attributes: any,
  title: string,
  { token, selectedShapes, onUpdateShape, hint, allowedShapeAttributes }: any
) {
  const allowedAttributes = set.intersection(attributes, allowedShapeAttributes);
  const onUpdateShapeFn = onUpdateShape || dwta.getUpdateShapeFn(token);
  const { selectedPred, shapeIds } = attributeActions(token, selectedShapes, allowedAttributes);

  return [...allowedAttributes].map((attribute) => {
    const selected = selectedPred(attribute);
    const props = {
      attributes: new Set([attribute]),
      token,
      shapeIds: [...shapeIds],
    };
    const unapplyProps = {
      tokenName: token.name,
      attributes: new Set([attribute]),
      shapeIds: [...shapeIds],
    };

    return {
      title,
      hint,
      selected: selected,
      action: () => {
        if (selected) {
          emit(dwta.unapplyToken(unapplyProps));
        } else {
          emit(dwta.applyToken({ ...props, onUpdateShape: onUpdateShapeFn }));
        }
      },
    };
  });
}

function allOrSeparateActions(
  { attributeLabels, onUpdateShapeAll, onUpdateShape, hint }: any,
  { token, selectedShapes, allowedShapeAttributes }: any
) {
  const attrLabels = (attributeLabels as any);
  const allowedAttrs = attrLabels ? Object.keys(attrLabels).filter((k) => allowedShapeAttributes.has(k)) : null;
  if (!allowedAttrs?.length) return null;

  const attributes = new Set(Object.keys(attrLabels));
  const { allSelected, selectedPred, shapeIds } = attributeActions(token, selectedShapes, attributes);

  const allAction = {
    title: tr("labels.all"),
    selected: allSelected,
    hint,
    action: () => {
      const props = { attributes, token, shapeIds: [...shapeIds] };
      const unapplyProps = { tokenName: token.name, attributes, shapeIds: [...shapeIds] };
      if (allSelected) {
        emit(dwta.unapplyToken(unapplyProps));
      } else {
        emit(dwta.applyToken({ ...props, onUpdateShape: onUpdateShapeAll || onUpdateShape }));
      }
    },
  };

  const singleActions = allowedAttrs.map((attr) => {
    const selected = selectedPred(attr);
    return {
      title: attrLabels[attr],
      selected: !allSelected && selected,
      action: () => {
        const props = { attributes: new Set([attr]), token, shapeIds: [...shapeIds] };
        const unapplyProps = { tokenName: token.name, attributes: new Set([attr]), shapeIds: [...shapeIds] };
        let event: any;
        if (allSelected) {
          event = dwta.applyToken({ ...props, attributesToRemove: attributes });
        } else if (selected) {
          event = dwta.unapplyToken(unapplyProps);
        } else {
          event = dwta.applyToken({ ...props, onUpdateShape });
        }
        emit(event);
      },
    };
  });

  return [allAction, ...singleActions].filter(Boolean);
}

function layoutSpacingItems({
  token,
  selectedShapes,
  allAttrLabels,
  horizontalAttrLabels,
  verticalAttrLabels,
  onUpdateShape,
  hint,
}: any) {
  const horizontalAttrs = new Set(Object.keys(horizontalAttrLabels));
  const verticalAttrs = new Set(Object.keys(verticalAttrLabels));
  const attrs = set.union(horizontalAttrs, verticalAttrs);
  const { allSelected, selectedPred, shapeIds } = attributeActions(token, selectedShapes, attrs);
  const horizontalSelected =
    !allSelected && [...horizontalAttrs].every((a) => selectedPred(a));
  const verticalSelected =
    !allSelected && [...verticalAttrs].every((a) => selectedPred(a));

  const multiItems = [
    {
      title: tr("labels.all"),
      selected: allSelected,
      hint,
      action: () => {
        const props = { attributes: attrs, token, shapeIds: [...shapeIds] };
        const unapplyProps = { tokenName: token.name, attributes: attrs, shapeIds: [...shapeIds] };
        if (allSelected) {
          emit(dwta.unapplyToken(unapplyProps));
        } else {
          emit(dwta.applyToken({ ...props, onUpdateShape }));
        }
      },
    },
    {
      title: "Horizontal",
      selected: horizontalSelected,
      action: () => {
        const props = { token, shapeIds: [...shapeIds] };
        let event: any;
        if (allSelected) {
          event = dwta.applyToken({ ...props, attributesToRemove: verticalAttrs });
        } else if (horizontalSelected) {
          event = dwta.applyToken({ ...props, attributesToRemove: horizontalAttrs });
        } else {
          event = dwta.applyToken({ ...props, attributes: horizontalAttrs, onUpdateShape });
        }
        emit(event);
      },
    },
    {
      title: "Vertical",
      selected: verticalSelected,
      action: () => {
        const props = { token, shapeIds: [...shapeIds] };
        let event: any;
        if (allSelected) {
          event = dwta.applyToken({ ...props, attributesToRemove: horizontalAttrs });
        } else if (verticalSelected) {
          event = dwta.applyToken({ ...props, attributesToRemove: verticalAttrs });
        } else {
          event = dwta.applyToken({ ...props, attributes: verticalAttrs, onUpdateShape });
        }
        emit(event);
      },
    },
  ];

  const singleItems = Object.entries(allAttrLabels).map(([attr, title]: [string, string]) => {
    const sameAxisSelected =
      horizontalAttrs.has(attr) ? horizontalSelected : verticalAttrs.has(attr) ? verticalSelected : true;
    const selected = !allSelected && !sameAxisSelected && selectedPred(attr);
    return {
      title,
      selected,
      action: () => {
        const props = { attributes: new Set([attr]), token, shapeIds: [...shapeIds] };
        const unapplyProps = { tokenName: token.name, attributes: new Set([attr]), shapeIds: [...shapeIds] };
        let event: any;
        if (allSelected) {
          event = dwta.applyToken({ ...props, attributesToRemove: attrs });
        } else if (selected) {
          event = dwta.unapplyToken(unapplyProps);
        } else {
          event = dwta.applyToken({ ...props, onUpdateShape });
        }
        emit(event);
      },
    };
  });

  return multiItems.concat(singleItems);
}

function updateShapeLayoutPadding(value: any, shapeIds: any[], attributes: any[]) {
  emit(
    ...(attributes.length === 1 ? [dwsl.updateLayout(shapeIds, { layoutPaddingType: "multiple" })] : []),
    dwta.updateLayoutPadding(value, shapeIds, attributes)
  );
}

function updateShapeLayoutMargin(value: any, shapeIds: any[], attributes: any[]) {
  emit(
    ...(attributes.length === 1 ? [dwsl.updateLayout(shapeIds, { layoutItemMarginType: "multiple" })] : []),
    dwta.updateLayoutItemMargin(value, shapeIds, attributes)
  );
}

function spacingAttributeActions({
  token,
  selectedShapes,
  allowedShapeAttributes,
  isSelectedInsideLayout,
}: any) {
  const paddingAttrLabels: Record<string, string> = {
    p1: "Padding top",
    p2: "Padding right",
    p3: "Padding bottom",
    p4: "Padding left",
  };
  const paddingItems = keyInMap(Object.keys(paddingAttrLabels), allowedShapeAttributes)
    ? layoutSpacingItems({
        token,
        selectedShapes,
        allAttrLabels: paddingAttrLabels,
        hint: tr("workspace.tokens.paddings"),
        horizontalAttrLabels: { p2: "Padding right", p4: "Padding left" },
        verticalAttrLabels: { p1: "Padding top", p3: "Padding bottom" },
        onUpdateShape: updateShapeLayoutPadding,
      })
    : null;

  const marginAttrLabels: Record<string, string> = {
    m1: "Margin top",
    m2: "Margin right",
    m3: "Margin bottom",
    m4: "Margin left",
  };
  const marginItems =
    isSelectedInsideLayout || keyInMap(Object.keys(marginAttrLabels), allowedShapeAttributes)
      ? layoutSpacingItems({
          token,
          selectedShapes,
          allAttrLabels: marginAttrLabels,
          hint: tr("workspace.tokens.margins"),
          horizontalAttrLabels: { m2: "Margin right", m4: "Margin left" },
          verticalAttrLabels: { m1: "Margin top", m3: "Margin bottom" },
          onUpdateShape: updateShapeLayoutMargin,
        })
      : null;

  const gapItems = allOrSeparateActions(
    {
      attributeLabels: { "column-gap": "Column Gap", "row-gap": "Row Gap" },
      hint: tr("workspace.tokens.gaps"),
      onUpdateShape: dwta.updateLayoutGap,
    },
    { token, selectedShapes, allowedShapeAttributes }
  );

  return cleanSeparators(
    [...(gapItems || []), ":separator", ...(paddingItems || []), ":separator", ...(marginItems || [])]
  );
}

function sizingAttributeActions(contextData: any) {
  return cleanSeparators([
    ...(allOrSeparateActions(
      {
        attributeLabels: { width: "Width", height: "Height" },
        hint: tr("workspace.tokens.size"),
        onUpdateShape: dwta.applyDimensionsToken,
      },
      contextData
    ) || []),
    ":separator",
    ...(allOrSeparateActions(
      {
        attributeLabels: { "layout-item-min-w": "Min Width", "layout-item-min-h": "Min Height" },
        hint: tr("workspace.tokens.min-size"),
        onUpdateShape: dwta.updateLayoutSizingLimits,
      },
      contextData
    ) || []),
    ":separator",
    ...(allOrSeparateActions(
      {
        attributeLabels: { "layout-item-max-w": "Max Width", "layout-item-max-h": "Max Height" },
        hint: tr("workspace.tokens.max-size"),
        onUpdateShape: dwta.updateLayoutSizingLimits,
      },
      contextData
    ) || []),
  ]);
}

function updateShapeRadiusForCorners(value: any, shapeIds: any[], attributes: any[]) {
  emit(ptk.dataEvent("expand-border-radius"), dwta.updateShapeRadiusForCorners(value, shapeIds, attributes));
}

const shapeAttributeActionsMap: Record<string, (contextData: any) => any[]> = {
  "border-radius": (contextData) =>
    allOrSeparateActions(
      {
        attributeLabels: { r1: "Top Left", r2: "Top Right", r4: "Bottom Left", r3: "Bottom Right" },
        hint: tr("workspace.tokens.radius"),
        onUpdateShapeAll: dwta.updateShapeRadiusAll,
        onUpdateShape: updateShapeRadiusForCorners,
      },
      contextData
    ),
  color: (contextData) =>
    [
      ...(genericAttributeActions(new Set(["fill"]), "Fill", {
        ...contextData,
        onUpdateShape: dwta.updateFill,
        hint: tr("workspace.tokens.color"),
      }) || []),
      ...(genericAttributeActions(new Set(["stroke-color"]), "Stroke", {
        ...contextData,
        onUpdateShape: dwta.updateStrokeColor,
      }) || []),
    ],
  spacing: spacingAttributeActions,
  sizing: sizingAttributeActions,
  rotation: (contextData) => genericAttributeActions(new Set(["rotation"]), "Rotation", contextData),
  opacity: (contextData) => genericAttributeActions(new Set(["opacity"]), "Opacity", contextData),
  number: (contextData) => [
    ...(genericAttributeActions(new Set(["rotation"]), "Rotation", {
      ...contextData,
      onUpdateShape: dwta.updateRotation,
    }) || []),
    ...((() => {
      const lh = genericAttributeActions(new Set(["line-height"]), "Line Height", {
        ...contextData,
        onUpdateShape: dwta.updateLineHeight,
      });
      return lh?.length ? lh : [];
    })()),
  ],
  "stroke-width": (contextData) => genericAttributeActions(new Set(["stroke-width"]), "Stroke Width", contextData),
  "font-size": (contextData) => genericAttributeActions(new Set(["font-size"]), "Font Size", contextData),
  "font-family": (contextData) => genericAttributeActions(new Set(["font-family"]), "Font Family", contextData),
  "line-height": (contextData) =>
    genericAttributeActions(new Set(["line-height"]), "Line Height", {
      ...contextData,
      onUpdateShape: dwta.updateLineHeight,
    }),
  "letter-spacing": (contextData) =>
    genericAttributeActions(new Set(["letter-spacing"]), "Letter Spacing", contextData),
  "text-case": (contextData) => genericAttributeActions(new Set(["text-case"]), "Text Case", contextData),
  "text-decoration": (contextData) =>
    genericAttributeActions(new Set(["text-decoration"]), "Text Decoration", contextData),
  "font-weight": (contextData) => genericAttributeActions(new Set(["font-weight"]), "Font Weight", contextData),
  typography: (contextData) => genericAttributeActions(new Set(["typography"]), "Typography", contextData),
  shadow: (contextData) => genericAttributeActions(new Set(["shadow"]), "Shadow", contextData),
  dimensions: (contextData) =>
    cleanSeparators([
      ...(sizingAttributeActions(contextData)?.length
        ? [{ title: "Sizing", submenu: "sizing" }]
        : []),
      ...(spacingAttributeActions(contextData)?.length
        ? [{ title: "Spacing", submenu: "spacing" }]
        : []),
      ":separator",
      ...(shapeAttributeActionsMap["border-radius"](contextData)?.length
        ? [{ title: "Border Radius", submenu: "border-radius" }]
        : []),
      ":separator",
      ...(genericAttributeActions(new Set(["stroke-width"]), "Stroke Width", {
        ...contextData,
        onUpdateShape: dwta.updateStrokeWidth,
      }) || []),
      ":separator",
      ...(genericAttributeActions(new Set(["x"]), "X", {
        ...contextData,
        onUpdateShape: dwta.updateShapePosition,
        hint: tr("workspace.tokens.axis"),
      }) || []),
      ...(genericAttributeActions(new Set(["y"]), "Y", {
        ...contextData,
        onUpdateShape: dwta.updateShapePosition,
      }) || []),
    ]),
};

function defaultActions({ token, selectedTokenSetId, onDeleteToken }: any) {
  const { modal } = dwta.getTokenProperties(token);
  const onDuplicateToken = () => emit(dwtl.duplicateToken(token.id));
  return [
    {
      title: tr("workspace.tokens.edit"),
      noSelectable: true,
      action: (event: Event) => {
        const { key, fields } = modal;
        dom.stopPropagation(event);
        emit(
          dwtl.assignTokenContextMenu(null),
          modal.show(key, {
            x: (event as any).clientX,
            y: (event as any).clientY,
            position: "right",
            fields,
            action: "edit",
            selectedTokenSetId,
            token,
          })
        );
      },
    },
    { title: tr("workspace.tokens.duplicate"), noSelectable: true, action: onDuplicateToken },
    {
      title: tr("workspace.tokens.delete"),
      noSelectable: true,
      action: () => onDeleteToken(token),
    },
  ];
}

function allowedShapeAttributes(shapes: any[]): Set<string> {
  return shapes.reduce(
    (acc, shape) => new Set([...acc, ...ctt.shapeTypeToAttributes(shape.type, shape.layout)]),
    new Set<string>()
  );
}

function menuActions({ type, token, selectedShapes }: any) {
  const allowedAttrs = allowedShapeAttributes(selectedShapes);
  const withActions = shapeAttributeActionsMap[token?.type || type];
  return withActions ? withActions({ type, token, selectedShapes, allowedShapeAttributes: allowedAttrs }) : [];
}

function selectionActions(contextData: any) {
  const attributeActionsList = menuActions(contextData);
  return [...attributeActionsList, ...(attributeActionsList?.length ? [":separator"] : []), ...defaultActions(contextData)];
}

function submenuActionsSelectionActions(contextData: any) {
  return menuActions(contextData);
}

// Components ------------------------------------------------------------------

const tokensMenuRef = l.derived("token-context-menu", refs.workspaceTokens);

function preventDefault(event: Event) {
  dom.preventDefault(event);
  dom.stopPropagation(event);
}

interface MenuEntryProps {
  title: string;
  value?: string;
  hint?: string;
  onClick?: () => void;
  selected?: boolean;
  children?: React.ReactNode;
  submenuOffset?: number;
  noSelectable?: boolean;
}

const MenuEntry: React.FC<MenuEntryProps> = ({
  title,
  value,
  hint,
  onClick,
  selected,
  children,
  submenuOffset = 0,
  noSelectable,
}) => {
  const submenuRef = useRef<HTMLUListElement | null>(null);
  const hovering = useRef(false);
  const [parentMenuDomElementPos, setParentMenuDomElementPos] = useState<string | null>(null);
  const [isSubmenuOutside, setIsSubmenuOutside] = useState(false);

  const onPointerEnter = useCallback(() => {
    hovering.current = true;
    const submenuNode = submenuRef.current;
    if (submenuNode) {
      dom.setCssProperty(submenuNode, "display", "block");
      setIsSubmenuOutside(dom.isElementOutside(submenuNode));
    }
  }, []);

  const onPointerLeave = useCallback(() => {
    hovering.current = false;
    const submenuNode = submenuRef.current;
    if (submenuNode) {
      timers.schedule(50, () => {
        if (!hovering.current) {
          dom.setCssProperty(submenuNode, "display", "none");
          setIsSubmenuOutside(false);
        }
      });
    }
  }, []);

  const getParentMenuEntryPosition = useCallback((el: HTMLLIElement | null) => {
    if (el) {
      setParentMenuDomElementPos(`${el.offsetTop}px`);
    }
  }, []);

  const hintText = hint && hint.length > 0;

  return (
    <li
      className={`context-menu-item ${!noSelectable && selected ? "context-menu-item-selected" : ""} ${!noSelectable && !selected ? "context-menu-item-unselected" : ""} ${hintText ? "context-menu-item-hint-wrapper" : ""}`}
      ref={getParentMenuEntryPosition}
      data-value={value}
      onClick={onClick}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      {hint && <span className="context-menu-item-hint">{hint}</span>}
      {!noSelectable && (
        <span className="icon-wrapper">
          <iconStar iconId={i.tick} size="s" />
        </span>
      )}
      <span className="item-text">{title}</span>
      {children && (
        <>
          <iconStar iconId={i.arrow} size="s" />
          <ul
            ref={submenuRef}
            className={`token-context-submenu ${isSubmenuOutside ? "token-context-submenu-top" : ""}`}
            style={{
              left: `${submenuOffset}px`,
              top: isSubmenuOutside ? "unset" : parentMenuDomElementPos || "0px",
            }}
            onContextMenu={preventDefault}
          >
            {children}
          </ul>
        </>
      )}
    </li>
  );
};

interface MenuTreeProps {
  selectedShapes: any[];
  submenuOffset: number;
  type?: string;
  errors?: any;
}

const MenuTree: React.FC<MenuTreeProps> = ({ selectedShapes, submenuOffset, type, errors }) => {
  const shapeTypes = new Set(selectedShapes.map((s: any) => s.type));
  const editingRef = refs.workspaceEditorState.deref();
  const notEditing = !editingRef || editingRef.length === 0;

  const entries = !errors && selectedShapes.length && notEditing && shapeTypes.size === 1 && !shapeTypes.has("group")
    ? type
      ? submenuActionsSelectionActions({ type, token: null, selectedShapes, submenuOffset, errors })
      : selectionActions({ type, token: null, selectedShapes, submenuOffset, errors })
    : defaultActions({ type, token: null, selectedShapes, submenuOffset, errors });

  const cleanedEntries = cleanSeparators(entries || []);

  return (
    <>
      {(cleanedEntries || []).map((entry: any, index: number) => {
        if (entry === ":separator") {
          return <li key={`sep-${index}`} className="separator" />;
        }
        const { title, action, selected, hint, submenu, noSelectable } = entry;
        if (submenu) {
          return (
            <MenuEntry
              key={`${title}-${index}`}
              title={title}
              hint={hint}
              noSelectable={true}
              submenuOffset={submenuOffset}
            >
              <MenuTree
                selectedShapes={selectedShapes}
                submenuOffset={submenuOffset}
                type={submenu}
                errors={errors}
              />
            </MenuEntry>
          );
        }
        return (
          <MenuEntry
            key={`${title}-${index}`}
            title={title}
            onClick={action}
            hint={hint}
            noSelectable={noSelectable}
            selected={selected}
          />
        );
      })}
    </>
  );
};

interface TokenContextMenuTreeProps {
  width: number;
  errors?: any;
  onDeleteToken?: (token: any) => void;
}

const TokenContextMenuTree: React.FC<TokenContextMenuTreeProps> = ({ width, errors, onDeleteToken }) => {
  const objects = refs.workspacePageObjects.deref() as any;
  const selected = refs.selectedShapes.deref() as any[];
  const tokenId = (refs.workspaceTokens.deref() as any)?.tokenId;
  const token = refs.workspaceTokenInSelectedSet(tokenId).deref();
  const tokenType = token?.type;
  const selectedTokenSetId = refs.selectedTokenSetId.deref();

  const selectedShapes = useMemo(() => {
    return selected.filter(Boolean).map((id) => objects?.[id]).filter(Boolean);
  }, [selected, objects]);

  const isSelectedInsideLayout = useMemo(() => {
    if (!["spacing", "dimensions"].includes(tokenType)) return false;
    return selectedShapes.some((s) => ctsl.anyLayoutImmediateChild(objects, s));
  }, [tokenType, selectedShapes, objects]);

  return (
    <ul className="context-list">
      <MenuTree
        submenuOffset={width}
        token={token}
        errors={errors}
        selectedTokenSetId={selectedTokenSetId}
        selectedShapes={selectedShapes}
        isSelectedInsideLayout={isSelectedInsideLayout}
        onDeleteToken={onDeleteToken}
      />
    </ul>
  );
};

interface TokenContextMenuProps {
  onDeleteToken?: (token: any) => void;
}

export const TokenContextMenu: React.FC<TokenContextMenuProps> = ({ onDeleteToken }) => {
  const mdata = tokensMenuRef.deref();
  const isOpen = !!mdata;
  const [width, setWidth] = useState(0);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [dropdownDirection, setDropdownDirection] = useState("down");
  const dropdownDirectionChange = useRef(0);
  const top = (mdata?.position?.y || 0) + 5;
  const left = (mdata?.position?.x || 0) + 5;
  const container = hooks.usePortalContainer("popup");

  useEffect(() => {
    const node = dropdownRef.current;
    if (node) {
      setWidth(node.offsetWidth);
    }
  }, [isOpen]);

  useEffect(() => {
    if (dropdownDirectionChange.current !== 0 && !isOpen) {
      setDropdownDirection("down");
      dropdownDirectionChange.current = 0;
    }
  }, [isOpen]);

  useEffect(() => {
    if (dropdownDirectionChange.current === 0 && dropdownRef.current) {
      const isOutside = dom.isElementOutside(dropdownRef.current);
      setDropdownDirection(isOutside ? "up" : "down");
      dropdownDirectionChange.current += 1;
    }
  }, [isOpen, dropdownRef]);

  if (!isOpen) return null;

  return (
    <>
      <Dropdown show={isOpen} onClose={() => emit(dwtl.assignTokenContextMenu(null))}>
        <div
          className="token-context-menu"
          data-testid="tokens-context-menu-for-token"
          ref={dropdownRef}
          data-direction={dropdownDirection}
          style={{
            "--bottom": dropdownDirection === "up" ? "40px" : "unset",
            "--top": `${top}px`,
            left: `${left}px`,
          }}
          onContextMenu={preventDefault}
        >
          {mdata && (
            <TokenContextMenuTree
              width={width}
              onDeleteToken={onDeleteToken}
              errors={mdata.errors}
            />
          )}
        </div>
      </Dropdown>
    </>
  );
};