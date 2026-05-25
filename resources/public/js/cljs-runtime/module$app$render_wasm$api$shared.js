import "./cljs_env.js";

var GrowType$$module$app$render_wasm$api$shared = {"fixed":0, "auto-width":1, "auto-height":2};
var RawBlendMode$$module$app$render_wasm$api$shared = {"normal":3, "screen":14, "overlay":15, "darken":16, "lighten":17, "color-dodge":18, "color-burn":19, "hard-light":20, "soft-light":21, "difference":22, "exclusion":23, "multiply":24, "hue":25, "saturation":26, "color":27, "luminosity":28};
var RawBlurType$$module$app$render_wasm$api$shared = {"layer-blur":0};
var RawFillData$$module$app$render_wasm$api$shared = {"solid":0, "linear":1, "radial":2, "image":3};
var RawFontStyle$$module$app$render_wasm$api$shared = {"normal":0, "italic":1};
var RawAlignItems$$module$app$render_wasm$api$shared = {"start":0, "end":1, "center":2, "stretch":3};
var RawAlignContent$$module$app$render_wasm$api$shared = {"start":0, "end":1, "center":2, "space-between":3, "space-around":4, "space-evenly":5, "stretch":6};
var RawJustifyItems$$module$app$render_wasm$api$shared = {"start":0, "end":1, "center":2, "stretch":3};
var RawJustifyContent$$module$app$render_wasm$api$shared = {"start":0, "end":1, "center":2, "space-between":3, "space-around":4, "space-evenly":5, "stretch":6};
var RawJustifySelf$$module$app$render_wasm$api$shared = {"none":0, "auto":1, "start":2, "end":3, "center":4, "stretch":5};
var RawAlignSelf$$module$app$render_wasm$api$shared = {"none":0, "auto":1, "start":2, "end":3, "center":4, "stretch":5};
var RawVerticalAlign$$module$app$render_wasm$api$shared = {"top":0, "center":1, "bottom":2};
var RawConstraintH$$module$app$render_wasm$api$shared = {"left":0, "right":1, "leftright":2, "center":3, "scale":4};
var RawConstraintV$$module$app$render_wasm$api$shared = {"top":0, "bottom":1, "topbottom":2, "center":3, "scale":4};
var RawFlexDirection$$module$app$render_wasm$api$shared = {"row":0, "row-reverse":1, "column":2, "column-reverse":3};
var RawWrapType$$module$app$render_wasm$api$shared = {"wrap":0, "nowrap":1};
var RawGridDirection$$module$app$render_wasm$api$shared = {"row":0, "column":1};
var RawGridTrackType$$module$app$render_wasm$api$shared = {"percent":0, "flex":1, "auto":2, "fixed":3};
var RawSizing$$module$app$render_wasm$api$shared = {"fill":0, "fix":1, "auto":2};
var RawBoolType$$module$app$render_wasm$api$shared = {"union":0, "difference":1, "intersection":2, "exclusion":3};
var RawSegmentData$$module$app$render_wasm$api$shared = {"move-to":1, "line-to":2, "curve-to":3, "close":4};
var RawShadowStyle$$module$app$render_wasm$api$shared = {"drop-shadow":0, "inner-shadow":1};
var RawShapeType$$module$app$render_wasm$api$shared = {"frame":0, "group":1, "bool":2, "rect":3, "path":4, "text":5, "circle":6, "svg-raw":7};
var RawStrokeStyle$$module$app$render_wasm$api$shared = {"solid":0, "dotted":1, "dashed":2, "mixed":3};
var RawStrokeCap$$module$app$render_wasm$api$shared = {"none":0, "line-arrow":1, "triangle-arrow":2, "square-marker":3, "circle-marker":4, "diamond-marker":5, "round":6, "square":7};
var RawFillRule$$module$app$render_wasm$api$shared = {"nonzero":0, "evenodd":1};
var RawStrokeLineCap$$module$app$render_wasm$api$shared = {"butt":0, "round":1, "square":2};
var RawStrokeLineJoin$$module$app$render_wasm$api$shared = {"miter":0, "round":1, "bevel":2};
var RawTextAlign$$module$app$render_wasm$api$shared = {"left":0, "center":1, "right":2, "justify":3};
var RawTextDirection$$module$app$render_wasm$api$shared = {"ltr":0, "rtl":1};
var RawTextDecoration$$module$app$render_wasm$api$shared = {"none":0, "underline":1, "line-through":2, "overline":3};
var RawTextTransform$$module$app$render_wasm$api$shared = {"none":0, "uppercase":1, "lowercase":2, "capitalize":3};
var RawGrowType$$module$app$render_wasm$api$shared = {"fixed":0, "auto-width":1, "auto-height":2};
var CursorDirection$$module$app$render_wasm$api$shared = {"backward":0, "forward":1, "line-before":2, "line-after":3, "line-start":4, "line-end":5};
var RawTransformEntryKind$$module$app$render_wasm$api$shared = {"parent":0, "child":1};
/** @const */ 
var module$app$render_wasm$api$shared = {};
/** @const */ 
module$app$render_wasm$api$shared.CursorDirection = CursorDirection$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.GrowType = GrowType$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawAlignContent = RawAlignContent$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawAlignItems = RawAlignItems$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawAlignSelf = RawAlignSelf$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawBlendMode = RawBlendMode$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawBlurType = RawBlurType$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawBoolType = RawBoolType$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawConstraintH = RawConstraintH$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawConstraintV = RawConstraintV$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawFillData = RawFillData$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawFillRule = RawFillRule$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawFlexDirection = RawFlexDirection$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawFontStyle = RawFontStyle$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawGridDirection = RawGridDirection$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawGridTrackType = RawGridTrackType$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawGrowType = RawGrowType$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawJustifyContent = RawJustifyContent$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawJustifyItems = RawJustifyItems$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawJustifySelf = RawJustifySelf$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawSegmentData = RawSegmentData$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawShadowStyle = RawShadowStyle$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawShapeType = RawShapeType$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawSizing = RawSizing$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawStrokeCap = RawStrokeCap$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawStrokeLineCap = RawStrokeLineCap$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawStrokeLineJoin = RawStrokeLineJoin$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawStrokeStyle = RawStrokeStyle$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawTextAlign = RawTextAlign$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawTextDecoration = RawTextDecoration$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawTextDirection = RawTextDirection$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawTextTransform = RawTextTransform$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawTransformEntryKind = RawTransformEntryKind$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawVerticalAlign = RawVerticalAlign$$module$app$render_wasm$api$shared;
/** @const */ 
module$app$render_wasm$api$shared.RawWrapType = RawWrapType$$module$app$render_wasm$api$shared;

$CLJS.module$app$render_wasm$api$shared=module$app$render_wasm$api$shared;
//# sourceMappingURL=module$app$render_wasm$api$shared.js.map
