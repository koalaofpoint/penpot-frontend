import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.geom.shapes.js";
import "./app.main.ui.context.js";
import "./app.main.ui.shapes.attrs.js";
import "./app.main.ui.shapes.custom_stroke.js";
import "./app.util.object.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.image');
app.main.ui.shapes.image.image_shape = (function app$main$ui$shapes$image$image_shape(props_54708){
var props = props_54708;
var shape = (props["shape"]);
var x = (shape?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (shape?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"y","y",-1757859776)));
var w = (shape?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"width","width",-384071477)));
var h = (shape?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"height","height",1025178622)));
var render_id = rumext.v2.use_ctx(app.main.ui.context.render_id);
var transform = app.common.geom.shapes.transform_str.cljs$core$IFn$_invoke$arity$1(shape);
var props__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape),rumext.v2.adapt(render_id)],(function (){
return app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.ui.shapes.attrs.add_border_props_BANG_(app.main.ui.shapes.attrs.add_fill_props_BANG_.cljs$core$IFn$_invoke$arity$3(({}),shape,render_id),shape),({"x": x, "y": y, "width": w, "height": h, "transform": transform}));
}));
var path_QMARK_ = (!((props__$1.d == null)));
return rumext.v2.jsx(app.main.ui.shapes.custom_stroke.shape_custom_strokes,{'shape':shape,'children':((path_QMARK_)?rumext.v2.create_element("path",props__$1):rumext.v2.create_element("rect",props__$1))});
});

(app.main.ui.shapes.image.image_shape.displayName = "image-shape");


//# sourceMappingURL=app.main.ui.shapes.image.js.map
