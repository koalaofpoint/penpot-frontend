// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { parseUUID } from '../../common/uuid';
// import { withoutNils } from '../../common/data';
// import { decodeSegments } from '../../common/types/path';

/**
 * Parse a UUID string to UUID object
 */
export function parseId(id: string | null | undefined): string | undefined {
  if (!id) return undefined;
  // TODO: return parseUUID(id);
  return id;
}

/**
 * Parse a string to a keyword
 */
export function parseKeyword(kw: string | null | undefined): string | undefined {
  if (!kw) return undefined;
  return kw;
}

/**
 * Parse and normalize hex color to lowercase
 */
export function parseHex(color: string | null | undefined): string | undefined {
  if (typeof color !== 'string') return undefined;
  return color.toLowerCase();
}

/**
 * Point interface
 */
export interface Point {
  x?: number;
  y?: number;
}

/**
 * Parse a point from object
 */
export function parsePoint(point: unknown): Point | undefined {
  if (typeof point !== 'object' || point === null) return undefined;

  const obj = point as Record<string, unknown>;
  const x = obj.x;
  const y = obj.y;

  if (x === undefined && y === undefined) return undefined;

  return {
    x: typeof x === 'number' ? x : undefined,
    y: typeof y === 'number' ? y : undefined
  };
}

/**
 * Shape type
 */
export type ShapeType =
  | 'board'
  | 'group'
  | 'boolean'
  | 'rectangle'
  | 'path'
  | 'text'
  | 'ellipse'
  | 'svg-raw'
  | 'image';

/**
 * Parse shape type string to internal type
 */
export function parseShapeType(type: string | null | undefined): ShapeType | undefined {
  if (!type) return undefined;

  switch (type) {
    case 'board':
      return 'board';
    case 'boolean':
      return 'boolean';
    case 'rectangle':
      return 'rectangle';
    case 'ellipse':
      return 'ellipse';
    default:
      return parseKeyword(type) as ShapeType | undefined;
  }
}

/**
 * Shape selection criteria
 */
export interface ShapeCriteria {
  name?: string;
  nameLike?: string;
  type?: ShapeType;
}

/**
 * Parse shape criteria from object
 */
export function parseCriteria(criteria: unknown): ShapeCriteria | undefined {
  if (typeof criteria !== 'object' || criteria === null) return undefined;

  const obj = criteria as Record<string, unknown>;

  return {
    name: typeof obj.name === 'string' ? obj.name : undefined,
    nameLike: typeof obj.nameLike === 'string' ? obj.nameLike : undefined,
    type: parseShapeType(typeof obj.type === 'string' ? obj.type : undefined)
  };
}

/**
 * Image data interface
 */
export interface ImageData {
  name?: string;
  width: number;
  height: number;
  mtype?: string;
  id: string;
  keepAspectRatio?: boolean;
}

/**
 * Parse image data from object
 */
export function parseImageData(imageData: unknown): ImageData | undefined {
  if (typeof imageData !== 'object' || imageData === null) return undefined;

  const obj = imageData as Record<string, unknown>;

  return {
    id: parseId(typeof obj.id === 'string' ? obj.id : undefined) ?? '',
    name: typeof obj.name === 'string' ? obj.name : undefined,
    width: typeof obj.width === 'number' ? obj.width : 0,
    height: typeof obj.height === 'number' ? obj.height : 0,
    mtype: typeof obj.mtype === 'string' ? obj.mtype : undefined,
    keepAspectRatio: typeof obj.keepAspectRatio === 'boolean' ? obj.keepAspectRatio : undefined
  };
}

/**
 * Gradient stop interface
 */
export interface GradientStop {
  color: string;
  opacity?: number;
  offset: number;
}

/**
 * Parse gradient stop from object
 */
export function parseGradientStop(stop: unknown): GradientStop | undefined {
  if (typeof stop !== 'object' || stop === null) return undefined;

  const obj = stop as Record<string, unknown>;

  return {
    color: parseHex(typeof obj.color === 'string' ? obj.color : undefined) ?? '',
    opacity: typeof obj.opacity === 'number' ? obj.opacity : undefined,
    offset: typeof obj.offset === 'number' ? obj.offset : 0
  };
}

/**
 * Gradient type
 */
export type GradientType = 'linear' | 'radial';

/**
 * Gradient interface
 */
export interface Gradient {
  type: GradientType;
  startX?: number;
  startY?: number;
  endX?: number;
  endY?: number;
  width?: number;
  stops: GradientStop[];
}

/**
 * Parse gradient from object
 */
export function parseGradient(gradient: unknown): Gradient | undefined {
  if (typeof gradient !== 'object' || gradient === null) return undefined;

  const obj = gradient as Record<string, unknown>;

  const stopsValue = obj.stops;
  let stops: GradientStop[] = [];

  if (Array.isArray(stopsValue)) {
    for (const stop of stopsValue) {
      const parsed = parseGradientStop(stop);
      if (parsed) stops.push(parsed);
    }
  }

  return {
    type: parseKeyword(typeof obj.type === 'string' ? obj.type : undefined) as GradientType,
    startX: typeof obj.startX === 'number' ? obj.startX : undefined,
    startY: typeof obj.startY === 'number' ? obj.startY : undefined,
    endX: typeof obj.endX === 'number' ? obj.endX : undefined,
    endY: typeof obj.endY === 'number' ? obj.endY : undefined,
    width: typeof obj.width === 'number' ? obj.width : undefined,
    stops
  };
}

/**
 * Color data interface
 */
export interface ColorData {
  id?: string;
  fileId?: string;
  refId?: string; // deprecated
  refFile?: string; // deprecated
  color?: string;
  opacity?: number;
  gradient?: Gradient;
  image?: ImageData;
}

/**
 * Parse color data from object
 */
export function parseColorData(color: unknown): ColorData | undefined {
  if (typeof color !== 'object' || color === null) return undefined;

  const obj = color as Record<string, unknown>;

  return {
    id: parseId(typeof obj.id === 'string' ? obj.id : undefined),
    fileId: parseId(typeof obj.fileId === 'string' ? obj.fileId : undefined),
    color: parseHex(typeof obj.color === 'string' ? obj.color : undefined),
    opacity: typeof obj.opacity === 'number' ? obj.opacity : undefined,
    gradient: parseGradient(obj.gradient),
    image: parseImageData(obj.image)
  };
}

/**
 * Color interface (with name and path)
 */
export interface Color extends ColorData {
  name?: string;
  path?: string;
}

/**
 * Parse color from object
 */
export function parseColor(color: unknown): Color | undefined {
  if (typeof color !== 'object' || color === null) return undefined;

  const obj = color as Record<string, unknown>;
  const data = parseColorData(color);

  if (!data) return undefined;

  return {
    ...data,
    name: typeof obj.name === 'string' ? obj.name : undefined,
    path: typeof obj.path === 'string' ? obj.path : undefined
  };
}

/**
 * Shadow style type
 */
export type ShadowStyle = 'drop-shadow' | 'inner-shadow';

/**
 * Shadow interface
 */
export interface Shadow {
  id?: string;
  style?: ShadowStyle;
  offsetX?: number;
  offsetY?: number;
  blur?: number;
  spread?: number;
  hidden?: boolean;
  color?: Color;
}

/**
 * Parse shadow from object
 */
export function parseShadow(shadow: unknown): Shadow | undefined {
  if (typeof shadow !== 'object' || shadow === null) return undefined;

  const obj = shadow as Record<string, unknown>;

  return {
    id: parseId(typeof obj.id === 'string' ? obj.id : undefined),
    style: parseKeyword(typeof obj.style === 'string' ? obj.style : undefined) as ShadowStyle,
    offsetX: typeof obj.offsetX === 'number' ? obj.offsetX : undefined,
    offsetY: typeof obj.offsetY === 'number' ? obj.offsetY : undefined,
    blur: typeof obj.blur === 'number' ? obj.blur : undefined,
    spread: typeof obj.spread === 'number' ? obj.spread : undefined,
    hidden: typeof obj.hidden === 'boolean' ? obj.hidden : undefined,
    color: parseColor(obj.color)
  };
}

/**
 * Parse array of shadows
 */
export function parseShadows(shadows: unknown): Shadow[] {
  if (!Array.isArray(shadows)) return [];

  const result: Shadow[] = [];
  for (const shadow of shadows) {
    const parsed = parseShadow(shadow);
    if (parsed) result.push(parsed);
  }
  return result;
}

/**
 * Stroke style type
 */
export type StrokeStyle = 'solid' | 'dotted' | 'dashed' | 'mixed' | 'none' | 'svg';

/**
 * Stroke cap type
 */
export type StrokeCap = 'square' | 'round' | 'butt';

/**
 * Stroke alignment type
 */
export type StrokeAlignment = 'center' | 'inner' | 'outer';

/**
 * Fill interface
 */
export interface Fill {
  fillColor?: string;
  fillOpacity?: number;
  fillColorGradient?: Gradient;
  fillColorRefFile?: string;
  fillColorRefId?: string;
  fillImage?: ImageData;
}

/**
 * Parse fill from object
 */
export function parseFill(fill: unknown): Fill | undefined {
  if (typeof fill !== 'object' || fill === null) return undefined;

  const obj = fill as Record<string, unknown>;

  return {
    fillColor: parseHex(typeof obj.fillColor === 'string' ? obj.fillColor : undefined),
    fillOpacity: typeof obj.fillOpacity === 'number' ? obj.fillOpacity : undefined,
    fillColorGradient: parseGradient(obj.fillColorGradient),
    fillColorRefFile: parseId(typeof obj.fillColorRefFile === 'string' ? obj.fillColorRefFile : undefined),
    fillColorRefId: parseId(typeof obj.fillColorRefId === 'string' ? obj.fillColorRefId : undefined),
    fillImage: parseImageData(obj.fillImage)
  };
}

/**
 * Parse array of fills
 */
export function parseFills(fills: unknown): Fill[] {
  if (!Array.isArray(fills)) return [];

  const result: Fill[] = [];
  for (const fill of fills) {
    const parsed = parseFill(fill);
    if (parsed) result.push(parsed);
  }
  return result;
}

/**
 * Stroke interface
 */
export interface Stroke {
  strokeColor?: string;
  strokeColorRefFile?: string;
  strokeColorRefId?: string;
  strokeOpacity?: number;
  strokeStyle?: StrokeStyle;
  strokeWidth?: number;
  strokeAlignment?: StrokeAlignment;
  strokeCapStart?: StrokeCap;
  strokeCapEnd?: StrokeCap;
  strokeColorGradient?: Gradient;
}

/**
 * Parse stroke from object
 */
export function parseStroke(stroke: unknown): Stroke | undefined {
  if (typeof stroke !== 'object' || stroke === null) return undefined;

  const obj = stroke as Record<string, unknown>;

  return {
    strokeColor: parseHex(typeof obj.strokeColor === 'string' ? obj.strokeColor : undefined),
    strokeColorRefFile: parseId(typeof obj.strokeColorRefFile === 'string' ? obj.strokeColorRefFile : undefined),
    strokeColorRefId: parseId(typeof obj.strokeColorRefId === 'string' ? obj.strokeColorRefId : undefined),
    strokeOpacity: typeof obj.strokeOpacity === 'number' ? obj.strokeOpacity : undefined,
    strokeStyle: parseKeyword(typeof obj.strokeStyle === 'string' ? obj.strokeStyle : undefined) as StrokeStyle,
    strokeWidth: typeof obj.strokeWidth === 'number' ? obj.strokeWidth : undefined,
    strokeAlignment: parseKeyword(typeof obj.strokeAlignment === 'string' ? obj.strokeAlignment : undefined) as StrokeAlignment,
    strokeCapStart: parseKeyword(typeof obj.strokeCapStart === 'string' ? obj.strokeCapStart : undefined) as StrokeCap,
    strokeCapEnd: parseKeyword(typeof obj.strokeCapEnd === 'string' ? obj.strokeCapEnd : undefined) as StrokeCap,
    strokeColorGradient: parseGradient(obj.strokeColorGradient)
  };
}

/**
 * Parse array of strokes
 */
export function parseStrokes(strokes: unknown): Stroke[] {
  if (!Array.isArray(strokes)) return [];

  const result: Stroke[] = [];
  for (const stroke of strokes) {
    const parsed = parseStroke(stroke);
    if (parsed) result.push(parsed);
  }
  return result;
}

/**
 * Blur interface
 */
export interface Blur {
  id?: string;
  type?: 'layer-blur';
  value?: number;
  hidden?: boolean;
}

/**
 * Parse blur from object
 */
export function parseBlur(blur: unknown): Blur | undefined {
  if (typeof blur !== 'object' || blur === null) return undefined;

  const obj = blur as Record<string, unknown>;

  return {
    id: parseId(typeof obj.id === 'string' ? obj.id : undefined),
    type: parseKeyword(typeof obj.type === 'string' ? obj.type : undefined) as 'layer-blur',
    value: typeof obj.value === 'number' ? obj.value : undefined,
    hidden: typeof obj.hidden === 'boolean' ? obj.hidden : undefined
  };
}

/**
 * Export type
 */
export type ExportType = 'png' | 'jpeg' | 'webp' | 'svg' | 'pdf';

/**
 * Export interface
 */
export interface Export {
  type: ExportType;
  scale: number;
  suffix: string;
  skipChildren?: boolean;
}

/**
 * Parse export from object
 */
export function parseExport(exp: unknown): Export | undefined {
  if (typeof exp !== 'object' || exp === null) return undefined;

  const obj = exp as Record<string, unknown>;

  return {
    type: parseKeyword(typeof obj.type === 'string' ? obj.type : undefined) as ExportType,
    scale: typeof obj.scale === 'number' ? obj.scale : 1,
    suffix: typeof obj.suffix === 'string' ? obj.suffix : '',
    skipChildren: typeof obj.skipChildren === 'boolean' ? obj.skipChildren : false
  };
}

/**
 * Parse array of exports
 */
export function parseExports(exports: unknown): Export[] {
  if (!Array.isArray(exports)) return [];

  const result: Export[] = [];
  for (const exp of exports) {
    const parsed = parseExport(exp);
    if (parsed) result.push(parsed);
  }
  return result;
}

/**
 * Guide params type
 */
export type GuideColumnType = 'stretch' | 'left' | 'center' | 'right';

/**
 * Guide column params interface
 */
export interface GuideColumnParams {
  color: Color;
  type?: GuideColumnType;
  size?: number;
  margin?: number;
  itemLength?: number;
  gutter?: number;
}

/**
 * Parse guide column params from object
 */
export function parseFrameGuideColumnParams(params: unknown): GuideColumnParams | undefined {
  if (typeof params !== 'object' || params === null) return undefined;

  const obj = params as Record<string, unknown>;
  const color = parseColor(obj.color);

  if (!color) return undefined;

  return {
    color,
    type: parseKeyword(typeof obj.type === 'string' ? obj.type : undefined) as GuideColumnType,
    size: typeof obj.size === 'number' ? obj.size : undefined,
    margin: typeof obj.margin === 'number' ? obj.margin : undefined,
    itemLength: typeof obj.itemLength === 'number' ? obj.itemLength : undefined,
    gutter: typeof obj.gutter === 'number' ? obj.gutter : undefined
  };
}

/**
 * Guide column interface
 */
export interface GuideColumn {
  type: 'column';
  display: boolean;
  params: GuideColumnParams;
}

/**
 * Parse guide column from object
 */
export function parseFrameGuideColumn(guide: unknown): GuideColumn | undefined {
  if (typeof guide !== 'object' || guide === null) return undefined;

  const obj = guide as Record<string, unknown>;
  const params = parseFrameGuideColumnParams(obj.params);

  if (!params) return undefined;

  return {
    type: 'column',
    display: typeof obj.display === 'boolean' ? obj.display : false,
    params
  };
}

/**
 * Guide row interface
 */
export interface GuideRow {
  type: 'row';
  display: boolean;
  params: GuideColumnParams;
}

/**
 * Parse guide row from object
 */
export function parseFrameGuideRow(guide: unknown): GuideRow | undefined {
  if (typeof guide !== 'object' || guide === null) return undefined;

  const obj = guide as Record<string, unknown>;
  const params = parseFrameGuideColumnParams(obj.params);

  if (!params) return undefined;

  return {
    type: 'row',
    display: typeof obj.display === 'boolean' ? obj.display : false,
    params
  };
}

/**
 * Guide square params interface
 */
export interface GuideSquareParams {
  color: Color;
  size?: number;
}

/**
 * Parse guide square params from object
 */
export function parseFrameGuideSquareParams(params: unknown): GuideSquareParams | undefined {
  if (typeof params !== 'object' || params === null) return undefined;

  const obj = params as Record<string, unknown>;
  const color = parseColor(obj.color);

  if (!color) return undefined;

  return {
    color,
    size: typeof obj.size === 'number' ? obj.size : undefined
  };
}

/**
 * Guide square interface
 */
export interface GuideSquare {
  type: 'square';
  display: boolean;
  params: GuideSquareParams;
}

/**
 * Parse guide square from object
 */
export function parseFrameGuideSquare(guide: unknown): GuideSquare | undefined {
  if (typeof guide !== 'object' || guide === null) return undefined;

  const obj = guide as Record<string, unknown>;
  const params = parseFrameGuideSquareParams(obj.params);

  if (!params) return undefined;

  return {
    type: 'square',
    display: typeof obj.display === 'boolean' ? obj.display : false,
    params
  };
}

/**
 * Frame guide type
 */
export type FrameGuide = GuideColumn | GuideRow | GuideSquare;

/**
 * Parse frame guide from object
 */
export function parseFrameGuide(guide: unknown): FrameGuide | undefined {
  if (typeof guide !== 'object' || guide === null) return undefined;

  const obj = guide as Record<string, unknown>;
  const type = typeof obj.type === 'string' ? obj.type : undefined;

  switch (type) {
    case 'column':
      return parseFrameGuideColumn(guide);
    case 'row':
      return parseFrameGuideRow(guide);
    case 'square':
      return parseFrameGuideSquare(guide);
    default:
      return undefined;
  }
}

/**
 * Parse array of frame guides
 */
export function parseFrameGuides(guides: unknown): FrameGuide[] {
  if (!Array.isArray(guides)) return [];

  const result: FrameGuide[] = [];
  for (const guide of guides) {
    const parsed = parseFrameGuide(guide);
    if (parsed) result.push(parsed);
  }
  return result;
}

/**
 * Easing type
 */
export type EasingType = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';

/**
 * Dissolve animation interface
 */
export interface Dissolve {
  type: 'dissolve';
  duration: number;
  easing?: EasingType;
}

/**
 * Slide direction type
 */
export type SlideDirection = 'right' | 'left' | 'up' | 'down';

/**
 * Slide way type
 */
export type SlideWay = 'in' | 'out';

/**
 * Slide animation interface
 */
export interface Slide {
  type: 'slide';
  way: SlideWay;
  direction?: SlideDirection;
  duration: number;
  offsetEffect?: boolean;
  easing?: EasingType;
}

/**
 * Push animation interface
 */
export interface Push {
  type: 'push';
  direction?: SlideDirection;
  duration: number;
  easing?: EasingType;
}

/**
 * Animation type
 */
export type Animation = Dissolve | Slide | Push;

/**
 * Parse animation from object
 */
export function parseAnimation(animation: unknown): Animation | undefined {
  if (typeof animation !== 'object' || animation === null) return undefined;

  const obj = animation as Record<string, unknown>;
  const type = parseKeyword(typeof obj.type === 'string' ? obj.type : undefined);

  switch (type) {
    case 'dissolve':
      return {
        type: 'dissolve',
        duration: typeof obj.duration === 'number' ? obj.duration : 0,
        easing: parseKeyword(typeof obj.easing === 'string' ? obj.easing : undefined) as EasingType
      };

    case 'slide':
      return {
        type: 'slide',
        way: parseKeyword(typeof obj.way === 'string' ? obj.way : undefined) as SlideWay,
        direction: parseKeyword(typeof obj.direction === 'string' ? obj.direction : undefined) as SlideDirection,
        duration: typeof obj.duration === 'number' ? obj.duration : 0,
        offsetEffect: typeof obj.offsetEffect === 'boolean' ? obj.offsetEffect : undefined,
        easing: parseKeyword(typeof obj.easing === 'string' ? obj.easing : undefined) as EasingType
      };

    case 'push':
      return {
        type: 'push',
        direction: parseKeyword(typeof obj.direction === 'string' ? obj.direction : undefined) as SlideDirection,
        duration: typeof obj.duration === 'number' ? obj.duration : 0,
        easing: parseKeyword(typeof obj.easing === 'string' ? obj.easing : undefined) as EasingType
      };

    default:
      return undefined;
  }
}

/**
 * Overlay position type
 */
export type OverlayPosition =
  | 'manual'
  | 'center'
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';

/**
 * Action type
 */
export type ActionType =
  | 'navigate-to'
  | 'open-overlay'
  | 'toggle-overlay'
  | 'close-overlay'
  | 'previous-screen'
  | 'open-url';

/**
 * Navigate to action interface
 */
export interface NavigateTo {
  type: 'navigate-to';
  destination?: unknown; // Shape proxy
  preserveScrollPosition?: boolean;
  animation?: Animation;
}

/**
 * Overlay action base interface
 */
export interface OverlayAction {
  destination?: unknown; // Shape proxy
  relativeTo?: unknown; // Shape proxy
  position?: OverlayPosition;
  manualPositionLocation?: Point;
  closeWhenClickOutside?: boolean;
  addBackgroundOverlay?: boolean;
  animation?: Animation;
}

/**
 * Open overlay action interface
 */
export interface OpenOverlay extends OverlayAction {
  type: 'open-overlay';
}

/**
 * Toggle overlay action interface
 */
export interface ToggleOverlay extends OverlayAction {
  type: 'toggle-overlay';
}

/**
 * Close overlay action interface
 */
export interface CloseOverlay {
  type: 'close-overlay';
  destination?: unknown;
  animation?: Animation;
}

/**
 * Previous screen action interface
 */
export interface PreviousScreen {
  type: 'previous-screen';
}

/**
 * Open URL action interface
 */
export interface OpenUrl {
  type: 'open-url';
  url: string;
}

/**
 * Action type union
 */
export type Action = NavigateTo | OpenOverlay | ToggleOverlay | CloseOverlay | PreviousScreen | OpenUrl;

/**
 * Internal action representation
 */
export interface InternalAction {
  actionType?: ActionType | 'navigate' | 'prev-screen';
  destination?: string;
  relativeTo?: string;
  overlayPosType?: OverlayPosition;
  overlayPosition?: Point;
  closeClickOutside?: boolean;
  backgroundOverlay?: boolean;
  preserveScroll?: boolean;
  animation?: Animation;
  url?: string;
}

/**
 * Parse action from object
 */
export function parseAction(action: unknown): InternalAction | undefined {
  if (typeof action !== 'object' || action === null) return undefined;

  const obj = action as Record<string, unknown>;
  const type = parseKeyword(typeof obj.type === 'string' ? obj.type : undefined) as ActionType;

  switch (type) {
    case 'navigate-to':
      return {
        actionType: 'navigate',
        destination: extractId(obj.destination),
        preserveScroll: typeof obj.preserveScrollPosition === 'boolean' ? obj.preserveScrollPosition : undefined,
        animation: parseAnimation(obj.animation)
      };

    case 'open-overlay':
    case 'toggle-overlay':
      return {
        actionType: type,
        destination: extractId(obj.destination),
        relativeTo: extractId(obj.relativeTo),
        overlayPosType: parseKeyword(typeof obj.position === 'string' ? obj.position : undefined) as OverlayPosition,
        overlayPosition: parsePoint(obj.manualPositionLocation),
        closeClickOutside: typeof obj.closeWhenClickOutside === 'boolean' ? obj.closeWhenClickOutside : undefined,
        backgroundOverlay: typeof obj.addBackgroundOverlay === 'boolean' ? obj.addBackgroundOverlay : undefined,
        animation: parseAnimation(obj.animation)
      };

    case 'close-overlay':
      return {
        actionType: 'close-overlay',
        destination: extractId(obj.destination),
        animation: parseAnimation(obj.animation)
      };

    case 'previous-screen':
      return { actionType: 'prev-screen' };

    case 'open-url':
      return {
        actionType: 'open-url',
        url: typeof obj.url === 'string' ? obj.url : ''
      };

    default:
      return undefined;
  }
}

/**
 * Extract ID from proxy or object
 */
function extractId(value: unknown): string | undefined {
  if (typeof value === 'string') return value;
  if (typeof value !== 'object' || value === null) return undefined;

  // Try to get $id symbol property
  const idSymbol = Symbol('$id');
  if (idSymbol in (value as Record<symbol, unknown>)) {
    const id = (value as Record<symbol, unknown>)[idSymbol];
    if (typeof id === 'string') return id;
  }

  return undefined;
}

/**
 * Interaction event type
 */
export type InteractionEventType =
  | 'click'
  | 'mouseover'
  | 'mouseenter'
  | 'mouseout'
  | 'mouseleave';

/**
 * Interaction interface
 */
export interface Interaction {
  eventType: InteractionEventType;
  delay?: number;
  actionType?: ActionType | 'navigate' | 'prev-screen';
  destination?: string;
  relativeTo?: string;
  overlayPosType?: OverlayPosition;
  overlayPosition?: Point;
  closeClickOutside?: boolean;
  backgroundOverlay?: boolean;
  preserveScroll?: boolean;
  animation?: Animation;
  url?: string;
}

/**
 * Parse interaction from trigger, action, and delay
 */
export function parseInteraction(
  trigger: string | null | undefined,
  action: unknown,
  delay?: unknown
): Interaction | undefined {
  if (typeof trigger !== 'string') return undefined;

  const actionData = parseAction(action);
  if (!actionData) return undefined;

  return {
    eventType: parseKeyword(trigger) as InteractionEventType,
    delay: typeof delay === 'number' ? delay : undefined,
    ...actionData
  };
}

/**
 * Orientation type
 */
export type Orientation = 'horizontal' | 'vertical';

/**
 * Orientation to axis conversion
 */
export function orientationToAxis(orientation: string | null | undefined): string | undefined {
  if (orientation === 'horizontal') return 'y';
  if (orientation === 'vertical') return 'x';
  return undefined;
}

/**
 * Parse path commands from JSON string or array
 */
export function parseCommands(commands: unknown): unknown[] {
  // TODO: Decode path segments
  // return decodeSegments(jsonToClj(commands));
  return [];
}
