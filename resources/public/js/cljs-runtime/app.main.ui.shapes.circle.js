import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.geom.shapes.js";
import "./app.main.ui.shapes.custom_stroke.js";
import "./app.util.object.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.circle');
app.main.ui.shapes.circle.circle_shape = (function app$main$ui$shapes$circle$circle_shape(props_54340){
var props = props_54340;
var shape = (props["shape"]);
var x = (shape?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (shape?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"y","y",-1757859776)));
var w = (shape?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"width","width",-384071477)));
var h = (shape?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"height","height",1025178622)));
var t = app.common.geom.shapes.transform_str.cljs$core$IFn$_invoke$arity$1(shape);
var cx = (x + (w / (2)));
var cy = (y + (h / (2)));
var rx = (w / (2));
var ry = (h / (2));
var props__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape)],(function (){
return app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(({}),({"cx": cx, "cy": cy, "rx": rx, "ry": ry, "transform": t}));
}));
return rumext.v2.jsx(app.main.ui.shapes.custom_stroke.shape_custom_strokes,{'shape':shape,'children':rumext.v2.create_element("ellipse",props__$1)});
});

(app.main.ui.shapes.circle.circle_shape.displayName = "circle-shape");


//# sourceMappingURL=app.main.ui.shapes.circle.js.map
