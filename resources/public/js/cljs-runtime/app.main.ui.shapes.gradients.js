import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.main.ui.context.js";
import "./app.main.ui.shapes.export.js";
import "./app.util.object.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.gradients');
app.main.ui.shapes.gradients.add_metadata_BANG_ = (function app$main$ui$shapes$gradients$add_metadata_BANG_(props,gradient){
return app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(props,"penpot:gradient","true"),"penpot:start-x",new cljs.core.Keyword(null,"start-x","start-x",-193941684).cljs$core$IFn$_invoke$arity$1(gradient)),"penpot:start-y",new cljs.core.Keyword(null,"start-y","start-y",-771244577).cljs$core$IFn$_invoke$arity$1(gradient)),"penpot:end-x",new cljs.core.Keyword(null,"end-x","end-x",-1323983821).cljs$core$IFn$_invoke$arity$1(gradient)),"penpot:end-y",new cljs.core.Keyword(null,"end-y","end-y",859881965).cljs$core$IFn$_invoke$arity$1(gradient)),"penpot:width",new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(gradient));
});
app.main.ui.shapes.gradients.linear_gradient = (function app$main$ui$shapes$gradients$linear_gradient(props_54216){
var force_transform = (props_54216["force-transform"]);
var id = props_54216.id;
var gradient = props_54216.gradient;
var shape = props_54216.shape;
var transform = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape)],(function (){
if(cljs.core.truth_(force_transform)){
return app.common.geom.shapes.transform_matrix.cljs$core$IFn$_invoke$arity$3(shape,null,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(0.5,0.5));
} else {
return null;
}
}));
var metadata_QMARK_ = rumext.v2.use_ctx(app.main.ui.shapes.export$.include_metadata_ctx);
var props = ({"id": id, "x1": new cljs.core.Keyword(null,"start-x","start-x",-193941684).cljs$core$IFn$_invoke$arity$1(gradient), "y1": new cljs.core.Keyword(null,"start-y","start-y",-771244577).cljs$core$IFn$_invoke$arity$1(gradient), "x2": new cljs.core.Keyword(null,"end-x","end-x",-1323983821).cljs$core$IFn$_invoke$arity$1(gradient), "y2": new cljs.core.Keyword(null,"end-y","end-y",859881965).cljs$core$IFn$_invoke$arity$1(gradient), "gradientTransform": ""+(transform ?? "")});
if(metadata_QMARK_){
app.main.ui.shapes.gradients.add_metadata_BANG_(props,gradient);
} else {
}

return rumext.v2.create_element("linearGradient",props,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__54217){
var vec__54218 = p__54217;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54218,(0),null);
var map__54221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54218,(1),null);
var map__54221__$1 = cljs.core.__destructure_map(map__54221);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54221__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54221__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54221__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
out_arr__46744__auto__.push(rumext.v2.jsx("stop",{'offset':app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(offset,(0)),'stopColor':color,'stopOpacity':opacity},""+(id ?? "")+"-stop-"+(index ?? "")));

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"stops","stops",-1205459005).cljs$core$IFn$_invoke$arity$1(gradient)))));
});

(app.main.ui.shapes.gradients.linear_gradient.displayName = "linear-gradient");

app.main.ui.shapes.gradients.radial_gradient = (function app$main$ui$shapes$gradients$radial_gradient(props_54222){
var id = props_54222.id;
var gradient = props_54222.gradient;
var shape = props_54222.shape;
var path_QMARK_ = app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var transform = ((path_QMARK_)?(shape?.transform?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"transform","transform",1381301764))):null);
var transform__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(transform,app.common.geom.matrix.base);
var transform_inv = ((path_QMARK_)?(shape?.transform_inverse?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576))):null);
var transform_inv__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(transform_inv,app.common.geom.matrix.base);
var map__54223 = gradient;
var map__54223__$1 = cljs.core.__destructure_map(map__54223);
var gwidth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54223__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var start_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54223__$1,new cljs.core.Keyword(null,"start-x","start-x",-193941684));
var start_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54223__$1,new cljs.core.Keyword(null,"start-y","start-y",-771244577));
var end_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54223__$1,new cljs.core.Keyword(null,"end-x","end-x",-1323983821));
var end_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54223__$1,new cljs.core.Keyword(null,"end-y","end-y",859881965));
var gstart_pt = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(start_x,start_y);
var gend_pt = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(end_x,end_y);
var gradient_vec = app.common.geom.point.to_vec(gstart_pt,gend_pt);
var angle = (app.common.geom.point.angle.cljs$core$IFn$_invoke$arity$1(gradient_vec) + (90));
var points = (shape?.points?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"points","points",-1486596883)));
var bounds = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(points)],(function (){
return app.common.geom.rect.points__GT_rect(points);
}));
var selrect = (shape?.selrect?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"selrect","selrect",1966287292)));
var factor = ((path_QMARK_)?((selrect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"height","height",1025178622))) / (bounds?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"height","height",1025178622)))):1.0);
var transform__$2 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(gradient),rumext.v2.adapt(transform__$1),rumext.v2.adapt(transform_inv__$1),rumext.v2.adapt(factor)],(function (){
return app.common.geom.matrix.translate(app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$2(app.common.geom.matrix.scale.cljs$core$IFn$_invoke$arity$2(app.common.geom.matrix.rotate.cljs$core$IFn$_invoke$arity$2(app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$2(app.common.geom.matrix.translate(app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0(),gstart_pt),transform__$1),angle),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(gwidth,factor)),transform_inv__$1),app.common.geom.point.negate(gstart_pt));
}));
var metadata_QMARK_ = rumext.v2.use_ctx(app.main.ui.shapes.export$.include_metadata_ctx);
var props = ({"id": id, "cx": start_x, "cy": start_y, "r": app.common.geom.point.length(gradient_vec), "gradientTransform": transform__$2});
if(metadata_QMARK_){
app.main.ui.shapes.gradients.add_metadata_BANG_(props,gradient);
} else {
}

return rumext.v2.create_element("radialGradient",props,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__54224){
var vec__54225 = p__54224;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54225,(0),null);
var map__54228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54225,(1),null);
var map__54228__$1 = cljs.core.__destructure_map(map__54228);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54228__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54228__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54228__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
out_arr__46744__auto__.push(rumext.v2.jsx("stop",{'offset':app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(offset,(0)),'stopColor':color,'stopOpacity':opacity},""+(id ?? "")+"-stop-"+(index ?? "")));

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stops","stops",-1205459005).cljs$core$IFn$_invoke$arity$1(gradient))));
});

(app.main.ui.shapes.gradients.radial_gradient.displayName = "radial-gradient");

app.main.ui.shapes.gradients.gradient = (function app$main$ui$shapes$gradients$gradient(props_54229){
var props = props_54229;
var attr = (props["attr"]);
var shape = (props["shape"]);
var id = (props["id"]);
var rid = rumext.v2.use_ctx(app.main.ui.context.render_id);
var id__$1 = (((!((id == null))))?id:""+(cljs.core.name(attr) ?? "")+"-"+(rid ?? ""));
var gradient__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,attr);
var props__$1 = ({"id": id__$1, "gradient": gradient__$1, "shape": shape});
if((!((gradient__$1 == null)))){
var G__54230 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(gradient__$1);
var G__54230__$1 = (((G__54230 instanceof cljs.core.Keyword))?G__54230.fqn:null);
switch (G__54230__$1) {
case "linear":
return rumext.v2.create_element(app.main.ui.shapes.gradients.linear_gradient,props__$1);

break;
case "radial":
return rumext.v2.create_element(app.main.ui.shapes.gradients.radial_gradient,props__$1);

break;
default:
return null;

}
} else {
return null;
}
});

(app.main.ui.shapes.gradients.gradient.displayName = "gradient");


//# sourceMappingURL=app.main.ui.shapes.gradients.js.map
