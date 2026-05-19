/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

import * as GPT from "../common/geom/point";
import * as MTH from "../common/math";
import * as PATH from "../common/types/path";
import * as PATH_HELPERS from "../common/types/path/helpers";

export function appendNode(shape: any, position: any, prevPoint: any, prevHandler: any): any {
  const segment = PATH.nextNode(shape.content, position, prevPoint, prevHandler);
  return PATH.updateGeometry(PATH.appendSegment(shape, segment));
}

export function anglePoints(common: any, p1: any, p2: any): number {
  return MTH.abs(GPT.angleWithOther(GPT.toVec(common, p1), GPT.toVec(common, p2)));
}

function calculateOppositeDelta(
  node: any,
  handler: any,
  opposite: any,
  matchAngle: boolean,
  matchDistance: boolean,
  dx: number,
  dy: number
): [number, number] | null {
  if (handler == null || opposite == null) {
    return null;
  }

  let matchAngleParam = matchAngle;
  let matchDistanceParam = matchDistance;

  const angleHandlers = anglePoints(node, handler, opposite);
  matchAngleParam = matchAngleParam && MTH.abs(180 - angleHandlers) <= 0.1;
  matchDistanceParam =
    matchDistanceParam && MTH.almostZero(GPT.distance(node, handler) - GPT.distance(node, opposite));

  const newHandler = { x: handler.x + dx, y: handler.y + dy };
  const v1 = GPT.toVec(node, handler);
  const v2 = GPT.toVec(node, newHandler);
  const deltaAngle = GPT.angleWithOther(v1, v2);
  const deltaSign = GPT.angleSign(v1, v2);
  const distanceScale = GPT.distance(node, handler) / GPT.distance(node, newHandler);

  let newOpposite = opposite;
  if (matchAngleParam) {
    newOpposite = GPT.rotate(newOpposite, node, deltaSign * deltaAngle);
  }
  if (matchDistanceParam) {
    newOpposite = GPT.scaleFrom(newOpposite, distanceScale);
  }

  return [newOpposite.x - opposite.x, newOpposite.y - opposite.y];
}

export function moveHandlerModifiers(
  content: any,
  index: number,
  prefix: string,
  matchDistance: boolean,
  matchAngle: boolean,
  dx: number,
  dy: number
): any {
  const [cx, cy] = PATH_HELPERS.prefixToCoords(prefix);
  const [opIdx, opPrefix] = PATH.oppositeIndex(content, index, prefix);
  const node = PATH.handlerToNode(content, index, prefix);
  const handler = PATH.getHandlerPoint(content, index, prefix);
  const opposite = PATH.getHandlerPoint(content, opIdx, opPrefix);
  const [ocx, ocy] = PATH_HELPERS.prefixToCoords(opPrefix);
  const [odx, ody] = calculateOppositeDelta(node, handler, opposite, matchAngle, matchDistance, dx, dy) || [0, 0];

  const hnv = handler
    ? GPT.toVec(node, { x: handler.x + dx, y: handler.y + dy })
    : GPT.point(dx, dy);

  const result: any = {};
  result[index] = { [cx]: dx, [cy]: dy };

  if (opIdx != null && opposite !== node) {
    result[opIdx] = { [ocx]: odx, [ocy]: ody };
  }

  if (opIdx != null && opposite === node && matchDistance && matchAngle) {
    result[opIdx] = { [ocx]: -hnv.x, [ocy]: -hnv.y };
  }

  return result;
}