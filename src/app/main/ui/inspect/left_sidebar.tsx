// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import * as ctk from 'app/common/types/component';
import * as dv from 'app/main/data/viewer';
import * as st from 'app/main/store';
import { LayerItemInner } from 'app/main/ui/workspace/sidebar/layer-item';
import * as dom from 'app/util/dom';
import * as kbd from 'app/util/keyboard';

interface LayerItemProps {
  item: any;
  selected: Set<string>;
  objects: Record<string, any>;
  depth: number;
  componentChild?: boolean;
  hideToggle?: boolean;
}

function LayerItem({
  item,
  selected,
  objects,
  depth,
  componentChild,
  hideToggle
}: LayerItemProps) {
  const id = item.id;
  const hidden = item.hidden;
  const selected = selected.has(id);
  const itemRef = React.useRef<HTMLDivElement>(null);
  const depth = depth + 1;

  const componentTree = componentChild || ctk.instanceRoot(item) || ctk.instanceHead(item);

  const collapsedRef = React.useMemo(() => {
    return makeCollapsedRef(id);
  }, [id]);

  const expanded = !st.getState(collapsedRef);

  const toggleCollapse = React.useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event);
    st.emit(dv.toggleCollapse(id));
  }, [id]);

  const selectShape = React.useCallback((event: React.MouseEvent) => {
    dom.preventDefault(event);

    if (kbd.mod(event)) {
      st.emit(dv.toggleSelection(id));
    } else if (kbd.shift(event)) {
      st.emit(dv.shiftSelectTo(id));
    } else {
      st.emit(dv.selectShape(id));
    }
  }, [id]);

  React.useEffect(() => {
    if (selected.size === 1 && selected) {
      dom.scrollIntoViewIfNeeded(itemRef.current, true);
    }
  }, [selected]);

  return (
    <LayerItemInner
      ref={itemRef}
      item={item}
      depth={depth}
      readOnly
      highlighted={false}
      selected={selected}
      componentTree={componentTree}
      hidden={hidden}
      filtered={false}
      expanded={expanded}
      hideToggle={hideToggle}
      onSelectShape={selectShape}
      onToggleCollapse={toggleCollapse}
    >
      {item.shapes && expanded && (
        <div
          className={`element-children ${selected ? 'parent-selected' : ''}`}
          data-testid={`children-${id}`}
        >
          {item.shapes.reverse().map((childId: string, index: number) => {
            const childItem = objects[childId];
            if (!childItem) return null;
            return (
              <LayerItem
                key={childId}
                item={childItem}
                selected={selected}
                index={index}
                objects={objects}
                depth={depth}
                componentChild={componentTree}
              />
            );
          })}
        </div>
      )}
    </LayerItemInner>
  );
}

function makeCollapsedRef(id: string) {
  return (state: any) => state.viewerLocal?.collapsed?.[id];
}

interface LeftSidebarProps {
  frame: any;
  page: any;
  local: any;
}

export function LeftSidebar({ frame, page, local }: LeftSidebarProps) {
  const selected = local?.selected || new Set();
  const objects = page?.objects || {};

  return (
    <aside className="settings-bar-left">
      <div className="settings-bar-inside">
        <div className="element-list">
          <LayerItem
            item={frame}
            selected={selected}
            index={0}
            objects={objects}
            sortable={false}
            filtered={false}
            depth={-2}
            hideToggle
          />
        </div>
      </div>
    </aside>
  );
}
