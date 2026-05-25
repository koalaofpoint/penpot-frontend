import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.geom.shapes.js";
import "./app.main.ui.shapes.attrs.js";
import "./app.main.ui.shapes.custom_stroke.js";
import "./app.util.object.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.rect');
app.main.ui.shapes.rect.rect_shape = (function app$main$ui$shapes$rect$rect_shape(props_54709){
var props = props_54709;
var shape = (props["shape"]);
var x = (shape?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (shape?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"y","y",-1757859776)));
var w = (shape?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"width","width",-384071477)));
var h = (shape?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"height","height",1025178622)));
var t = app.common.geom.shapes.transform_str.cljs$core$IFn$_invoke$arity$1(shape);
var props__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape)],(function (){
return app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.ui.shapes.attrs.add_border_props_BANG_(({}),shape),({"x": x, "y": y, "transform": t, "width": w, "height": h}));
}));
var path_QMARK_ = (!((props__$1.d == null)));
return rumext.v2.jsx(app.main.ui.shapes.custom_stroke.shape_custom_strokes,{'shape':shape,'children':((path_QMARK_)?rumext.v2.create_element("path",props__$1):rumext.v2.create_element("rect",props__$1))});
});

(app.main.ui.shapes.rect.rect_shape.displayName = "rect-shape");


//# sourceMappingURL=app.main.ui.shapes.rect.js.map
