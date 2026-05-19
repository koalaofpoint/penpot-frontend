/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

import * as DM from "../common/data/macros";
import * as GPT from "../common/geom/point";
import * as PATH from "../common/types/path";
import * as PST from "./state";
import * as SNAP from "../snap";
import * as ST from "../store";
import * as MS from "../streams";
import * as MSE from "../util/mouse";
import { Observable, from, merge, filter, map, take, takeUntil, withLatestFrom, empty } from "rxjs";
import { derived, fromAtom } from "okulary";

const DRAG_THRESHOLD = 5;

export function dragging(start: any, zoom: number): (current: any) => boolean {
  return (current) => GPT.distance(start, current) >= DRAG_THRESHOLD / zoom;
}

export function finishEdition(event: any): boolean {
  return event.type === "app.main.data.workspace.common/clear-edition-mode";
}

export function toPixelSnap(position: any): any {
  const layout = ST.state.getValue()["workspace-layout"];
  const snapPixel = layout?.has?.("snap-pixel-grid");

  if (!snapPixel || !GPT.point(position)) {
    return position;
  }

  return GPT.round(position);
}

export function dragStream(toStream: Observable<any>, notDragStream: Observable<any> = empty()): Observable<any> {
  const zoom = DM.getIn(ST.state.getValue(), ["workspace-local", "zoom"], 1);
  const start = toPixelSnap(MS.mousePosition.getValue());

  const stopper = merge(MSE.dragStopper(ST.stream), ST.stream.pipe(filter((e) => finishEdition(e))));

  const positionStream = MS.mousePosition.pipe(
    map(toPixelSnap),
    filter(dragging(start, zoom)),
    take(1),
    takeUntil(stopper)
  );

  return merge(
    positionStream.pipe(
      map((value) => (value === "empty" ? notDragStream : empty()))
    ),
    positionStream.pipe(map(() => toStream))
  );
}

export function snapToggledStream(): Observable<boolean> {
  const getSnap = (state: any) => {
    const id = PST.getPathId(state);
    return DM.getIn(state, ["workspace-local", "edit-path", id, "snap-toggled"]);
  };

  return fromAtom(derived(getSnap), { emitCurrentValue: true }) as Observable<boolean>;
}

export function movePointsStream(startPoint: any, selectedPoints: Set<any>, points: any[]): Observable<any> {
  const zoom = DM.getIn(ST.state.getValue(), ["workspace-local", "zoom"], 1);
  const ranges = SNAP.createRanges(points, selectedPoints);
  const dPos = SNAP.snapPathAccuracy / zoom;

  const checkPathSnap = ([position, snapToggled]: [any, boolean]) => {
    if (snapToggled) {
      const delta = GPT.subtract(position, startPoint);
      const movedPoints = [...selectedPoints].map((p) => GPT.add(p, delta));
      const snap = SNAP.getSnapDelta(movedPoints, ranges, dPos);
      return GPT.add(position, snap);
    }
    return position;
  };

  return MS.mousePosition.pipe(
    map(toPixelSnap),
    withLatestFrom(snapToggledStream()),
    map(checkPathSnap),
    withLatestFrom(
      (position: any, shift: boolean, alt: boolean) => ({ ...position, shift, alt }),
      MS.mousePositionShift,
      MS.mousePositionAlt
    )
  );
}

export function getAngle(node: any, handler: any, opposite: any): [number, number] | null {
  if (node == null || handler == null || opposite == null) {
    return null;
  }

  const v1 = GPT.toVec(node, opposite);
  const v2 = GPT.toVec(node, handler);
  const rotAngle = GPT.angleWithOther(v1, v2);
  const rotSign = GPT.angleSign(v1, v2);

  return [rotAngle, rotSign];
}

export function moveHandlerStream(
  startPoint: any,
  node: any,
  handler: any,
  opposite: any,
  points: any[]
): Observable<any> {
  const zoom = DM.getIn(ST.state.getValue(), ["workspace-local", "zoom"], 1);
  const ranges = SNAP.createRanges(points);
  const dPos = SNAP.snapPathAccuracy / zoom;

  const [initialAngle] = getAngle(node, handler, opposite) || [0, 0];

  const checkPathSnap = ([position, snapToggled]: [any, boolean]) => {
    if (snapToggled) {
      const delta = GPT.subtract(position, startPoint);
      const movedHandler = GPT.add(handler, delta);

      const [rotAngle, rotSign] = getAngle(node, movedHandler, opposite) || [0, 0];

      const snapOppositeAngle =
        rotAngle != null &&
        (position["alt"] || 180 - initialAngle > 0.1) &&
        180 - rotAngle <= 5;

      if (snapOppositeAngle) {
        const rotHandler = GPT.rotate(movedHandler, node, 180 - rotSign * rotAngle);
        const snap = GPT.toVec(movedHandler, rotHandler);
        return { ...GPT.add(position, snap), shift: position.shift, alt: position.alt };
      } else {
        const snap = SNAP.getSnapDelta([movedHandler], ranges, dPos);
        return { ...GPT.add(position, snap), shift: position.shift, alt: position.alt };
      }
    }
    return position;
  };

  return MS.mousePosition.pipe(
    map(toPixelSnap),
    withLatestFrom(
      (position: any, shift: boolean, alt: boolean) => ({ ...position, shift, alt }),
      MS.mousePositionShift,
      MS.mousePositionAlt
    ),
    withLatestFrom(snapToggledStream()),
    map(checkPathSnap)
  );
}

export function positionStream(state: any): Observable<any> {
  const zoom = state["workspace-local"]?.zoom || 1;
  const dPos = SNAP.snapPathAccuracy / zoom;
  const getContent = (s: any) => PST.getPath(s, "content");

  const contentStream = fromAtom(derived(getContent), { emitCurrentValue: true });

  const rangesStream = contentStream.pipe(
    filter((c) => c != null),
    map(PATH.getPoints),
    map(SNAP.createRanges)
  );

  return MS.mousePosition.pipe(
    map(toPixelSnap),
    withLatestFrom(rangesStream, snapToggledStream()),
    map(([position, ranges, snapToggled]) => {
      if (snapToggled) {
        const snap = SNAP.getSnapDelta([position], ranges, dPos);
        return GPT.add(position, snap);
      }
      return position;
    }),
    withLatestFrom(
      (position: any, shift: boolean, alt: boolean) => ({ ...position, shift, alt }),
      MS.mousePositionShift,
      MS.mousePositionAlt
    )
  );
}