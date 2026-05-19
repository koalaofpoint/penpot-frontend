// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper location
// import { createImageData } from './image-data';
// import { withoutEmpty } from '../../util/object';
// import { name } from '../../common/data';

// let shapeProxy: Function;

/**
 * Format an ID to string
 */
export function formatId(id: string | null | undefined): string | undefined {
  return id ? String(id) : undefined;
}

/**
 * Format a keyword to string
 */
export function formatKey(kw: string | null | undefined): string | undefined {
  return kw ? kw : undefined;
}

/**
 * Format an array using a formatting function
 */
export function formatArray<T, U>(
  formatFn: (item: T) => U | null | undefined,
  coll: T[] | null | undefined
): U[] | undefined {
  if (!coll) return undefined;

  const result: U[] = [];
  for (const item of coll) {
    const formatted = formatFn(item);
    if (formatted !== undefined && formatted !== null) {
      result.push(formatted);
    }
  }

  return result;
}

/**
 * Format a mixed value (convert :multiple to "mixed")
 */
export function formatMixed(value: unknown): unknown {
  if (value === ':multiple' || value === 'multiple') {
    return 'mixed';
  }
  return value;
}

/**
 * Point interface
 */
export interface Point {
  x: number;
  y: number;
}

/**
 * Format a point to plain object
 */
export function formatPoint(point: { x?: number; y?: number } | null | undefined): Point | undefined {
  if (!point) return undefined;

  return withoutEmpty({
    x: point.x,
    y: point.y
  });
}

/**
 * Shape type string
 */
export type ShapeTypeString =
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
 * Format shape type keyword to string
 */
export function formatShapeType(type: string | null | undefined): ShapeTypeString {
  if (!type) return type as any;

  switch (type) {
    case 'frame':
      return 'board';
    case 'rect':
      return 'rectangle';
    case 'circle':
      return 'ellipse';
    default:
      return type as ShapeTypeString;
  }
}

/**
 * Bounds interface
 */
export interface Bounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * Format bounds to plain object
 */
export function formatBounds(bounds: { x?: number; y?: number; width?: number; height?: number } | null | undefined): Bounds | undefined {
  if (!bounds) return undefined;

  return withoutEmpty({
    x: bounds.x,
    y: bounds.y,
    width: bounds.width,
    height: bounds.height
  });
}

/**
 * Color shape info entry interface
 */
export interface ColorShapeInfoEntry {
  property: string;
  index?: number;
  shapeId: string;
}

/**
 * Format shape info to plain object
 */
export function formatShapeInfo(info: { prop: string; shapeId: string; index?: number } | null | undefined): ColorShapeInfoEntry | undefined {
  if (!info) return undefined;

  return withoutEmpty({
    property: info.prop,
    index: info.index,
    shapeId: String(info.shapeId)
  });
}

/**
 * Gradient type
 */
export type GradientType = 'linear' | 'radial';

/**
 * Gradient stop interface
 */
export interface GradientStop {
  color: string;
  opacity?: number;
  offset: number;
}

/**
 * Format gradient stop to plain object
 */
export function formatStop(stop: { color?: string; opacity?: number; offset?: number } | null | undefined): GradientStop | undefined {
  if (!stop) return undefined;

  return withoutEmpty({
    color: stop.color,
    opacity: stop.opacity,
    offset: stop.offset
  });
}

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
 * Format gradient to plain object
 */
export function formatGradient(gradient: {
  type?: string;
  startX?: number;
  startY?: number;
  endX?: number;
  endY?: number;
  width?: number;
  stops?: unknown[];
} | null | undefined): Gradient | undefined {
  if (!gradient) return undefined;

  return withoutEmpty({
    type: formatKey(gradient.type) as GradientType,
    startX: gradient.startX,
    startY: gradient.startY,
    endX: gradient.endX,
    endY: gradient.endY,
    width: gradient.width,
    stops: formatArray(formatStop, gradient.stops) ?? []
  });
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
 * Format image data
 */
export function formatImage(image: unknown): ImageData | undefined {
  if (!image) return undefined;

  // TODO: return createImageData(image);
  return undefined;
}

/**
 * Color interface
 */
export interface Color {
  id?: string;
  fileId?: string;
  name?: string;
  path?: string;
  color?: string;
  opacity?: number;
  refId?: string;
  refFile?: string;
  gradient?: Gradient;
  image?: ImageData;
}

/**
 * Format color data to plain object
 */
export function formatColor(color: {
  id?: string;
  fileId?: string;
  name?: string;
  path?: string;
  color?: string;
  opacity?: number;
  refId?: string;
  refFile?: string;
  gradient?: unknown;
  image?: unknown;
} | null | undefined): Color | undefined {
  if (!color) return undefined;

  const id = formatId(color.id) || formatId(color.refId);
  const fileId = formatId(color.fileId) || formatId(color.refFile);

  return withoutEmpty({
    id,
    fileId,
    name: color.name,
    path: color.path,
    color: color.color,
    opacity: color.opacity,
    refId: formatId(color.refId),
    refFile: formatId(color.refFile),
    gradient: formatGradient(color.gradient as any),
    image: formatImage(color.image)
  });
}

/**
 * Color with shape info
 */
export interface ColorWithShapeInfo extends Color {
  shapeInfo?: ColorShapeInfoEntry[];
}

/**
 * Format color result with shape info
 */
export function formatColorResult(result: [unknown, unknown[]] | null | undefined): ColorWithShapeInfo | undefined {
  if (!result) return undefined;

  const [colorData, attrs] = result;
  const color = formatColor(colorData as any);
  const shapesInfo = formatArray(formatShapeInfo, attrs as any[]);

  if (!color) return undefined;

  return {
    ...color,
    shapeInfo: shapesInfo
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
 * Format shadow to plain object
 */
export function formatShadow(shadow: {
  id?: string;
  style?: string;
  offsetX?: number;
  offsetY?: number;
  blur?: number;
  spread?: number;
  hidden?: boolean;
  color?: unknown;
} | null | undefined): Shadow | undefined {
  if (!shadow) return undefined;

  return withoutEmpty({
    id: formatId(shadow.id),
    style: formatKey(shadow.style) as ShadowStyle,
    offsetX: shadow.offsetX,
    offsetY: shadow.offsetY,
    blur: shadow.blur,
    spread: shadow.spread,
    hidden: shadow.hidden,
    color: formatColor(shadow.color as any)
  });
}

/**
 * Format array of shadows
 */
export function formatShadows(shadows: unknown[] | null | undefined): Shadow[] | undefined {
  return formatArray(formatShadow, shadows);
}

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
 * Format fill to plain object
 */
export function formatFill(fill: {
  fillColor?: string;
  fillOpacity?: number;
  fillColorGradient?: unknown;
  fillColorRefFile?: string;
  fillColorRefId?: string;
  fillImage?: unknown;
} | null | undefined): Fill | undefined {
  if (!fill) return undefined;

  return withoutEmpty({
    fillColor: fill.fillColor,
    fillOpacity: fill.fillOpacity,
    fillColorGradient: formatGradient(fill.fillColorGradient as any),
    fillColorRefFile: formatId(fill.fillColorRefFile),
    fillColorRefId: formatId(fill.fillColorRefId),
    fillImage: formatImage(fill.fillImage)
  });
}

/**
 * Format fills (handle "mixed" case)
 */
export function formatFills(fills: unknown[] | 'multiple' | 'mixed' | null | undefined): unknown[] | 'mixed' | undefined {
  if (fills === 'multiple' || fills === 'mixed') {
    return 'mixed';
  }

  return formatArray(formatFill, fills as unknown[]);
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
 * Format stroke to plain object
 */
export function formatStroke(stroke: {
  strokeColor?: string;
  strokeColorRefFile?: string;
  strokeColorRefId?: string;
  strokeOpacity?: number;
  strokeStyle?: string;
  strokeWidth?: number;
  strokeAlignment?: string;
  strokeCapStart?: string;
  strokeCapEnd?: string;
  strokeColorGradient?: unknown;
} | null | undefined): Stroke | undefined {
  if (!stroke) return undefined;

  return withoutEmpty({
    strokeColor: stroke.strokeColor,
    strokeColorRefFile: formatId(stroke.strokeColorRefFile),
    strokeColorRefId: formatId(stroke.strokeColorRefId),
    strokeOpacity: stroke.strokeOpacity,
    strokeStyle: formatKey(stroke.strokeStyle) as StrokeStyle,
    strokeWidth: stroke.strokeWidth,
    strokeAlignment: formatKey(stroke.strokeAlignment) as StrokeAlignment,
    strokeCapStart: formatKey(stroke.strokeCapStart) as StrokeCap,
    strokeCapEnd: formatKey(stroke.strokeCapEnd) as StrokeCap,
    strokeColorGradient: formatGradient(stroke.strokeColorGradient as any)
  });
}

/**
 * Format array of strokes
 */
export function formatStrokes(strokes: unknown[] | null | undefined): Stroke[] | undefined {
  return formatArray(formatStroke, strokes);
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
 * Format blur to plain object
 */
export function formatBlur(blur: {
  id?: string;
  type?: string;
  value?: number;
  hidden?: boolean;
} | null | undefined): Blur | undefined {
  if (!blur) return undefined;

  return withoutEmpty({
    id: formatId(blur.id),
    type: formatKey(blur.type) as 'layer-blur',
    value: blur.value,
    hidden: blur.hidden
  });
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
}

/**
 * Format export to plain object
 */
export function formatExport(exp: {
  type?: string;
  scale?: number;
  suffix?: string;
} | null | undefined): Export | undefined {
  if (!exp) return undefined;

  return withoutEmpty({
    type: formatKey(exp.type) as ExportType,
    scale: exp.scale,
    suffix: exp.suffix
  });
}

/**
 * Format array of exports
 */
export function formatExports(exports: unknown[] | null | undefined): Export[] | undefined {
  return formatArray(formatExport, exports);
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
 * Format guide column params
 */
export function formatFrameGuideColumnParams(params: {
  color?: unknown;
  type?: string;
  size?: number;
  margin?: number;
  itemLength?: number;
  gutter?: number;
} | null | undefined): GuideColumnParams | undefined {
  if (!params) return undefined;

  return withoutEmpty({
    color: formatColor(params.color as any) ?? { color: '' },
    type: formatKey(params.type) as GuideColumnType,
    size: params.size,
    margin: params.margin,
    itemLength: params.itemLength,
    gutter: params.gutter
  });
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
 * Format guide column
 */
export function formatFrameGuideColumn(guide: {
  type?: string;
  display?: boolean;
  params?: unknown;
} | null | undefined): GuideColumn | undefined {
  if (!guide) return undefined;

  return withoutEmpty({
    type: formatKey(guide.type) as 'column',
    display: guide.display ?? false,
    params: formatFrameGuideColumnParams(guide.params as any) ?? { color: { color: '' } }
  });
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
 * Format guide row
 */
export function formatFrameGuideRow(guide: {
  type?: string;
  display?: boolean;
  params?: unknown;
} | null | undefined): GuideRow | undefined {
  if (!guide) return undefined;

  return withoutEmpty({
    type: formatKey(guide.type) as 'row',
    display: guide.display ?? false,
    params: formatFrameGuideColumnParams(guide.params as any) ?? { color: { color: '' } }
  });
}

/**
 * Guide square params interface
 */
export interface GuideSquareParams {
  color: Color;
  size?: number;
}

/**
 * Format guide square params
 */
export function formatFrameGuideSquareParams(params: {
  color?: unknown;
  size?: number;
} | null | undefined): GuideSquareParams | undefined {
  if (!params) return undefined;

  return withoutEmpty({
    color: formatColor(params.color as any) ?? { color: '' },
    size: params.size
  });
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
 * Format guide square
 */
export function formatFrameGuideSquare(guide: {
  type?: string;
  display?: boolean;
  params?: unknown;
} | null | undefined): GuideSquare | undefined {
  if (!guide) return undefined;

  return withoutEmpty({
    type: formatKey(guide.type) as 'square',
    display: guide.display ?? false,
    params: formatFrameGuideSquareParams(guide.params as any) ?? { color: { color: '' } }
  });
}

/**
 * Frame guide type
 */
export type FrameGuide = GuideColumn | GuideRow | GuideSquare;

/**
 * Format frame guide
 */
export function formatFrameGuide(guide: { type?: string } | null | undefined): FrameGuide | undefined {
  if (!guide) return undefined;

  switch (guide.type) {
    case 'column':
      return formatFrameGuideColumn(guide as any);
    case 'row':
      return formatFrameGuideRow(guide as any);
    case 'square':
      return formatFrameGuideSquare(guide as any);
    default:
      return undefined;
  }
}

/**
 * Format array of frame guides
 */
export function formatFrameGuides(guides: unknown[] | null | undefined): FrameGuide[] | undefined {
  return formatArray(formatFrameGuide, guides);
}

/**
 * Path command type
 */
export type PathCommand =
  | 'M'
  | 'move-to'
  | 'Z'
  | 'close-path'
  | 'L'
  | 'line-to'
  | 'H'
  | 'line-to-horizontal'
  | 'V'
  | 'line-to-vertical'
  | 'C'
  | 'curve-to'
  | 'S'
  | 'smooth-curve-to'
  | 'Q'
  | 'quadratic-bezier-curve-to'
  | 'T'
  | 'smooth-quadratic-bezier-curve-to'
  | 'A'
  | 'elliptical-arc';

/**
 * Path command params interface
 */
export interface PathCommandParams {
  x?: number;
  y?: number;
  c1x?: number;
  c1y?: number;
  c2x?: number;
  c2y?: number;
  rx?: number;
  ry?: number;
  xAxisRotation?: number;
  largeArcFlag?: boolean;
  sweepFlag?: boolean;
}

/**
 * Format path command params
 */
export function formatCommandParams(props: {
  x?: number;
  y?: number;
  c1x?: number;
  c1y?: number;
  c2x?: number;
  c2y?: number;
  rx?: number;
  ry?: number;
  xAxisRotation?: number;
  largeArcFlag?: boolean;
  sweepFlag?: boolean;
} | null | undefined): PathCommandParams | undefined {
  if (!props) return undefined;

  return withoutEmpty({
    x: props.x,
    y: props.y,
    c1x: props.c1x,
    c1y: props.c1y,
    c2x: props.c2x,
    c2y: props.c2y,
    rx: props.rx,
    ry: props.ry,
    xAxisRotation: props.xAxisRotation,
    largeArcFlag: props.largeArcFlag,
    sweepFlag: props.sweepFlag
  });
}

/**
 * Path command interface
 */
export interface Command {
  command: PathCommand;
  params?: PathCommandParams;
}

/**
 * Format path command
 */
export function formatCommand(cmd: { command?: string; params?: unknown } | null | undefined): Command | undefined {
  if (!cmd) return undefined;

  return withoutEmpty({
    command: formatKey(cmd.command) as PathCommand,
    params: formatCommandParams(cmd.params as any)
  });
}

/**
 * Format array of path commands
 */
export function formatPathContent(content: unknown[] | null | undefined): Command[] | undefined {
  return formatArray(formatCommand, content);
}

/**
 * Track type
 */
export type TrackType = 'flex' | 'fixed' | 'percent' | 'auto';

/**
 * Track interface
 */
export interface Track {
  type: TrackType;
  value: number | null;
}

/**
 * Format track
 */
export function formatTrack(track: { type?: string; value?: number | null } | null | undefined): Track | undefined {
  if (!track) return undefined;

  return withoutEmpty({
    type: formatKey(track.type) as TrackType,
    value: track.value ?? null
  });
}

/**
 * Format array of tracks
 */
export function formatTracks(tracks: unknown[] | null | undefined): Track[] | undefined {
  return formatArray(formatTrack, tracks);
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
 * Format animation to plain object
 */
export function formatAnimation(animation: {
  animationType?: string;
  duration?: number;
  easing?: string;
  way?: string;
  direction?: string;
  offsetEffect?: boolean;
} | null | undefined): Animation | undefined {
  if (!animation) return undefined;

  const type = animation.animationType;

  switch (type) {
    case 'dissolve':
      return withoutEmpty({
        type: 'dissolve',
        duration: animation.duration ?? 0,
        easing: formatKey(animation.easing) as EasingType
      });

    case 'slide':
      return withoutEmpty({
        type: 'slide',
        way: formatKey(animation.way) as SlideWay,
        direction: formatKey(animation.direction) as SlideDirection,
        duration: animation.duration ?? 0,
        offsetEffect: animation.offsetEffect,
        easing: formatKey(animation.easing) as EasingType
      });

    case 'push':
      return withoutEmpty({
        type: 'push',
        direction: formatKey(animation.direction) as SlideDirection,
        duration: animation.duration ?? 0,
        easing: formatKey(animation.easing) as EasingType
      });

    default:
      return undefined;
  }
}

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
 * Navigate to action interface
 */
export interface NavigateTo {
  type: 'navigate-to';
  destination?: unknown;
  preserveScrollPosition?: boolean;
  animation?: Animation;
}

/**
 * Overlay action base interface
 */
export interface OverlayAction {
  destination?: unknown;
  relativeTo?: unknown;
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
 * Format action to plain object
 */
export function formatAction(
  interaction: {
    actionType?: string;
    destination?: string;
    relativeTo?: string;
    overlayPosType?: string;
    overlayPosition?: { x?: number; y?: number };
    closeClickOutside?: boolean;
    backgroundOverlay?: boolean;
    preserveScroll?: boolean;
    animation?: unknown;
    url?: string;
  } | null | undefined,
  pluginId: string,
  fileId: string,
  pageId: string
): Action | undefined {
  if (!interaction) return undefined;

  const actionType = interaction.actionType;

  switch (actionType) {
    case 'navigate':
      return withoutEmpty({
        type: 'navigate-to',
        destination: interaction.destination ? {} : undefined, // TODO: create shape proxy
        preserveScrollPosition: interaction.preserveScroll,
        animation: formatAnimation(interaction.animation as any)
      });

    case 'open-overlay':
      return withoutEmpty({
        type: 'open-overlay',
        destination: interaction.destination ? {} : undefined, // TODO: create shape proxy
        relativeTo: interaction.relativeTo ? {} : undefined, // TODO: create shape proxy
        position: formatKey(interaction.overlayPosType) as OverlayPosition,
        manualPositionLocation: formatPoint(interaction.overlayPosition),
        closeWhenClickOutside: interaction.closeClickOutside,
        addBackgroundOverlay: interaction.backgroundOverlay,
        animation: formatAnimation(interaction.animation as any)
      });

    case 'toggle-overlay':
      return withoutEmpty({
        type: 'toggle-overlay',
        destination: interaction.destination ? {} : undefined, // TODO: create shape proxy
        relativeTo: interaction.relativeTo ? {} : undefined, // TODO: create shape proxy
        position: formatKey(interaction.overlayPosType) as OverlayPosition,
        manualPositionLocation: formatPoint(interaction.overlayPosition),
        closeWhenClickOutside: interaction.closeClickOutside,
        addBackgroundOverlay: interaction.backgroundOverlay,
        animation: formatAnimation(interaction.animation as any)
      });

    case 'close-overlay':
      return withoutEmpty({
        type: 'close-overlay',
        destination: interaction.destination ? {} : undefined, // TODO: create shape proxy
        animation: formatAnimation(interaction.animation as any)
      });

    case 'prev-screen':
      return { type: 'previous-screen' };

    case 'open-url':
      return withoutEmpty({
        type: 'open-url',
        url: interaction.url ?? ''
      });

    default:
      return undefined;
  }
}

/**
 * Convert axis to orientation string
 */
export function axisToOrientation(axis: string | null | undefined): 'horizontal' | 'vertical' | undefined {
  switch (axis) {
    case 'y':
      return 'horizontal';
    case 'x':
      return 'vertical';
    default:
      return undefined;
  }
}

/**
 * Remove undefined and null values from object
 */
function withoutEmpty<T extends Record<string, unknown>>(obj: T): Partial<T> {
  const result: Partial<T> = {};

  for (const key in obj) {
    const value = obj[key];
    if (value !== undefined && value !== null && value !== '') {
      result[key] = value;
    }
  }

  return result;
}
