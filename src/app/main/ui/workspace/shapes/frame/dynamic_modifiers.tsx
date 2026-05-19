// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data';
import * as dm from 'app/common/data/macros';
import * as cfh from 'app/common/files/helpers';
import * as gmt from 'app/common/geom/matrix';
import * as gpt from 'app/common/geom/point';
import * as grc from 'app/common/geom/rect';
import * as gsh from 'app/common/geom/shapes';
import * as ctm from 'app/common/types/modifiers';
import { store } from 'app/main/store';
import * as hooks from 'app/main/ui/hooks';
import * as vwu from 'app/main/ui/workspace/viewport/utils';
import * as dbg from 'app/util/debug';
import * as dom from 'app/util/dom';
import * as ts from 'app/util/timers';
import React, { useEffect, useMemo, useRef } from 'react';

const getShapeNode = (id: string, baseNode: Document | HTMLElement = document) => {
  const base = baseNode as HTMLElement;
  if ((base as HTMLElement).id === `shape-${id}`) {
    return base;
  }
  return dom.query(base, `#shape-${id}`);
};

const getNodes = (
  baseNode: HTMLElement | null,
  shape: { id: string; parentId?: string; meta?: { maskingChild?: boolean } }
): (HTMLElement | null)[] => {
  if (!baseNode) return [];

  const shapeNode = getShapeNode(shape.id, baseNode);
  const parentNode = shape.parentId ? getShapeNode(shape.parentId, baseNode) : null;
  const frame = cfh.frameShape(shape);
  const group = cfh.groupShape(shape);
  const text = cfh.textShape(shape);
  const maskingChild = shape.meta?.maskingChild;

  if (frame) {
    return [
      shapeNode,
      dom.query(shapeNode, '.frame-children') as HTMLElement,
      dom.query(baseNode, `#thumbnail-container-${shape.id}`) as HTMLElement,
      dom.query(baseNode, `#thumbnail-${shape.id}`) as HTMLElement,
      dom.query(baseNode, `#frame-title-${shape.id}`) as HTMLElement,
    ];
  }

  if (maskingChild && parentNode) {
    return [
      shapeNode,
      dom.query(parentNode, '.mask-clip-path') as HTMLElement,
      dom.query(parentNode, '.mask-shape') as HTMLElement,
      ...(dbg.enabled('shape-titles')
        ? [dom.query(baseNode, `#frame-title-${shape.id}`) as HTMLElement]
        : []),
    ];
  }

  if (group && shapeNode) {
    const shapeDefs = dom.query(shapeNode, 'defs');
    const result: (HTMLElement | null)[] = [];

    if (dbg.enabled('shape-titles')) {
      result.push(dom.query(baseNode, `#frame-title-${shape.id}`) as HTMLElement);
    }
    if (shapeDefs) {
      result.push(...(dom.queryAll(shapeDefs, '.svg-def') as HTMLElement[]));
      result.push(...(dom.queryAll(shapeDefs, '.svg-mask-wrapper') as HTMLElement[]));
    }
    return result;
  }

  if (text) {
    return [
      shapeNode,
      ...(dbg.enabled('shape-titles')
        ? [dom.query(baseNode, `#frame-title-${shape.id}`) as HTMLElement]
        : []),
    ];
  }

  return [
    shapeNode,
    ...(dbg.enabled('shape-titles')
      ? [dom.query(baseNode, `#frame-title-${shape.id}`) as HTMLElement]
      : []),
  ];
};

const transformRegion = (node: HTMLElement, modifiers: any) => {
  const x = d.parseDouble(dom.getAttribute(node, 'data-old-x') || '');
  const y = d.parseDouble(dom.getAttribute(node, 'data-old-y') || '');
  const width = d.parseDouble(dom.getAttribute(node, 'data-old-width') || '');
  const height = d.parseDouble(dom.getAttribute(node, 'data-old-height') || '');

  const rect = grc.makeRect(x, y, width, height);
  const transformed = gsh.transformSelrect(rect, modifiers);

  if (transformed.x != null && transformed.y != null && transformed.width != null && transformed.height != null) {
    dom.setAttribute(node, 'x', transformed.x);
    dom.setAttribute(node, 'y', transformed.y);
    dom.setAttribute(node, 'width', transformed.width);
    dom.setAttribute(node, 'height', transformed.height);
  }
};

const startTransform = (baseNode: HTMLElement, shapes: any[]) => {
  shapes.forEach((shape) => {
    const nodes = getNodes(baseNode, shape);
    nodes.forEach((node) => {
      if (!node) return;

      const oldTransform = dom.getAttribute(node, 'transform');
      if (oldTransform) {
        dom.setAttribute(node, 'data-old-transform', oldTransform);
      }

      const tagName = dom.getTagName(node);
      if (tagName === 'linearGradient' || tagName === 'radialGradient') {
        const gradientTransform = dom.getAttribute(node, 'gradientTransform');
        if (gradientTransform) {
          dom.setAttribute(node, 'data-old-gradientTransform', gradientTransform);
        }
      }

      if (tagName === 'pattern') {
        const patternTransform = dom.getAttribute(node, 'patternTransform');
        if (patternTransform) {
          dom.setAttribute(node, 'data-old-patternTransform', patternTransform);
        }
      }

      if (tagName === 'mask' || tagName === 'filter') {
        dom.setAttribute(node, 'data-old-x', dom.getAttribute(node, 'x') || '');
        dom.setAttribute(node, 'data-old-y', dom.getAttribute(node, 'y') || '');
        dom.setAttribute(node, 'data-old-width', dom.getAttribute(node, 'width') || '');
        dom.setAttribute(node, 'data-old-height', dom.getAttribute(node, 'height') || '');
      }
    });
  });
};

const setTransformAtt = (node: HTMLElement, att: string, value: string) => {
  const oldAtt = dom.getAttribute(node, `data-old-${att}`);
  const newValue = oldAtt ? `${value} ${oldAtt}` : value;
  dom.setAttribute(node, att, newValue);
};

const overrideTransformAtt = (node: HTMLElement, att: string, value: string) => {
  dom.setAttribute(node, att, value);
};

const updateTransform = (
  baseNode: HTMLElement,
  shapes: any[],
  transforms: Record<string, string>,
  modifiers: Record<string, any>
) => {
  shapes.forEach((shape: any) => {
    const nodes = getNodes(baseNode, shape);
    const transform = transforms[shape.id];
    const shapeModifiers = modifiers[shape.id]?.modifiers;

    nodes.forEach((node) => {
      if (!node) return;

      if (dom.classList(node, 'frame-children')) {
        setTransformAtt(node, 'transform', gmt.inverse(transform));
      } else if (dom.classList(node, 'frame-title')) {
        const transformedShape = gsh.transformShape(shape, shapeModifiers);
        const zoom = store.getState().workspaceLocal?.zoom || 1;
        const editGrid = dom.getData(node, 'edit-grid') === 'true';
        const mtx = vwu.titleTransform(transformedShape, zoom, editGrid);
        overrideTransformAtt(node, 'transform', mtx);
      } else if (dom.getTagName(node) === 'mask' || dom.getTagName(node) === 'filter') {
        transformRegion(node, shapeModifiers);
      } else if (
        dom.getTagName(node) === 'linearGradient' ||
        dom.getTagName(node) === 'radialGradient'
      ) {
        setTransformAtt(node, 'gradientTransform', transform);
      } else if (dom.getTagName(node) === 'pattern') {
        setTransformAtt(node, 'patternTransform', transform);
      } else if (transform) {
        setTransformAtt(node, 'transform', transform);
      }
    });
  });
};

const removeTransform = (baseNode: HTMLElement, shapes: any[]) => {
  shapes.forEach((shape) => {
    const nodes = getNodes(baseNode, shape);
    nodes.forEach((node) => {
      if (!node) return;

      const tagName = dom.getTagName(node);

      if (tagName === 'foreignObject') {
        // The shape width/height will be automatically setup when the modifiers are applied
      } else if (tagName === 'mask' || tagName === 'filter') {
        dom.setAttribute(node, 'x', dom.getAttribute(node, 'data-old-x') || '');
        dom.setAttribute(node, 'y', dom.getAttribute(node, 'data-old-y') || '');
        dom.setAttribute(node, 'width', dom.getAttribute(node, 'data-old-width') || '');
        dom.setAttribute(node, 'height', dom.getAttribute(node, 'data-old-height') || '');
        dom.removeAttribute(node, 'data-old-x');
        dom.removeAttribute(node, 'data-old-y');
        dom.removeAttribute(node, 'data-old-width');
        dom.removeAttribute(node, 'data-old-height');
      } else if (dom.classList(node, 'frame-title')) {
        dom.removeAttribute(node, 'data-old-transform');
      } else {
        const oldTransform = dom.getAttribute(node, 'data-old-transform');
        if (oldTransform) {
          dom.removeAttribute(node, 'data-old-transform');
        } else {
          dom.removeAttribute(node, 'transform');
        }
      }
    });
  });
};

const adaptTextModifiers = (modifiers: any, shape: any) => {
  const transformed = gsh.transformShape(shape, modifiers);
  const scaleV = gpt.point(
    (shape.width || 1) / (transformed.width || 1),
    (shape.height || 1) / (transformed.height || 1)
  );
  return ctm.resize(
    modifiers,
    scaleV,
    transformed.points?.[0],
    transformed.transform,
    transformed.transformInverse
  );
};

const addMaskingChild = (objects: Record<string, any>) => {
  return (shape: any) => {
    const parent = objects[shape.parentId];
    const maskingChild =
      cfh.maskShape(parent) && parent?.shapes?.[0] === shape.id;

    if (maskingChild) {
      return { ...shape, meta: { ...shape.meta, maskingChild: true } };
    }
    return shape;
  };
};

export const useDynamicModifiers = (
  objects: Record<string, any>,
  node: HTMLElement | null,
  modifiers: any
) => {
  const transforms = useMemo(() => {
    if (!modifiers) return {};
    return d.mapm((id, { modifiers: currentModifiers }) => {
      const shape = objects[id];
      const adaptText =
        shape?.type === 'text' &&
        ctm.hasGeometry(currentModifiers) &&
        !ctm.onlyMove(currentModifiers);
      const finalModifiers = adaptText ? adaptTextModifiers(currentModifiers, shape) : currentModifiers;
      return ctm.modifiersToTransform(finalModifiers);
    }, modifiers);
  }, [modifiers, objects]);

  const addChildren = useMemo(() => {
    if (!modifiers) return [];
    return ctm.addedChildrenFrames(modifiers);
  }, [modifiers]);

  const shapes = useMemo(() => {
    return Object.keys(transforms)
      .filter((id) => transforms[id] != null)
      .map((id) => {
        const shape = objects[id];
        const addChild = addMaskingChild(objects);
        return addChild(shape);
      });
  }, [transforms, objects]);

  const addChildrenMemo = hooks.useEqualMemo(addChildren);
  const prevShapes = useRef<typeof shapes | null>(null);
  const prevModifiers = useRef(modifiers);
  const prevTransforms = useRef(transforms);

  useEffect(() => {
    let rafId1: number;
    let rafId2: number;

    if (addChildrenMemo.length > 0) {
      rafId1 = ts.raf(() => {
        addChildrenMemo.forEach(({ shape }: any) => {
          const shapeNode = getShapeNode(shape.id);
          const mirrorNode = dom.query(
            document,
            `.mirror-shape[href='#shape-${shape.id}']`
          );
          if (mirrorNode) {
            mirrorNode.remove();
          }
          const parent = shapeNode?.parentElement;
          if (parent) {
            dom.removeAttribute(parent, 'display');
          }
        });
      });

      rafId2 = ts.raf(() => {
        addChildrenMemo.forEach(({ frame, shape }: any) => {
          const frameNode = getShapeNode(frame.id);
          const shapeNode = getShapeNode(shape.id);

          if (frameNode && shapeNode) {
            const clipId = dom.query(
              frameNode,
              ':scope > defs > .frame-clip-def'
            )?.getAttribute('id');

            const useNode = dom.createElement(
              'http://www.w3.org/2000/svg',
              'use'
            ) as HTMLElement;
            const contentsNode =
              dom.query(frameNode, '.frame-children') || frameNode;

            dom.setAttribute(useNode, 'href', `#shape-${shape.id}`);
            if (clipId) {
              dom.setAttribute(useNode, 'clip-path', `url(#${clipId})`);
            }
            dom.addClass(useNode, 'mirror-shape');
            dom.appendChild(contentsNode, useNode);
            dom.setAttribute(shapeNode.parentElement!, 'display', 'none');
          }
        });
      });
    }

    return () => {
      if (rafId1) cancelAnimationFrame(rafId1);
      if (rafId2) cancelAnimationFrame(rafId2);
    };
  }, [addChildrenMemo]);

  useEffect(() => {
    let rafId1: number;
    let rafId2: number;
    let rafId3: number;

    const currShapesSet = new Set(shapes.map((s) => s.id));
    const prevShapesSet = new Set(prevShapes.current?.map((s) => s.id) || []);

    const newShapes = shapes.filter((s) => !prevShapesSet.has(s.id));
    const removedShapes = (prevShapes.current || []).filter(
      (s) => !currShapesSet.has(s.id)
    );

    if (newShapes.length > 0) {
      rafId1 = ts.raf(() => {
        if (node) startTransform(node, newShapes);
      });
    }

    if (shapes.length > 0) {
      rafId2 = ts.raf(() => {
        if (node) updateTransform(node, shapes, transforms, modifiers);
      });
    }

    if (removedShapes.length > 0) {
      rafId3 = ts.raf(() => {
        if (node) removeTransform(node, removedShapes);
      });
    }

    prevModifiers.current = modifiers;
    prevTransforms.current = transforms;
    prevShapes.current = shapes;

    return () => {
      if (rafId1) cancelAnimationFrame(rafId1);
      if (rafId2) cancelAnimationFrame(rafId2);
      if (rafId3) cancelAnimationFrame(rafId3);
    };
  }, [transforms, shapes, modifiers, node]);
};
