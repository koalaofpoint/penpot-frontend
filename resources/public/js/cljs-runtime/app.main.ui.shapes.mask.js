import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.rect.js";
import "./app.main.ui.context.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.mask');
app.main.ui.shapes.mask.mask_id = (function app$main$ui$shapes$mask$mask_id(render_id,mask){
return ""+(render_id ?? "")+"-"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mask) ?? "")+"-mask";
});
app.main.ui.shapes.mask.mask_url = (function app$main$ui$shapes$mask$mask_url(render_id,mask){
return ""+"url(#"+(app.main.ui.shapes.mask.mask_id(render_id,mask) ?? "")+")";
});
app.main.ui.shapes.mask.clip_id = (function app$main$ui$shapes$mask$clip_id(render_id,mask){
return ""+(render_id ?? "")+"-"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mask) ?? "")+"-clip";
});
app.main.ui.shapes.mask.clip_url = (function app$main$ui$shapes$mask$clip_url(render_id,mask){
return ""+"url(#"+(app.main.ui.shapes.mask.clip_id(render_id,mask) ?? "")+")";
});
app.main.ui.shapes.mask.filter_id = (function app$main$ui$shapes$mask$filter_id(render_id,mask){
return ""+(render_id ?? "")+"-"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mask) ?? "")+"-filter";
});
app.main.ui.shapes.mask.filter_url = (function app$main$ui$shapes$mask$filter_url(render_id,mask){
return ""+"url(#"+(app.main.ui.shapes.mask.filter_id(render_id,mask) ?? "")+")";
});
app.main.ui.shapes.mask.set_white_fill = (function app$main$ui$shapes$mask$set_white_fill(shape){
var update_color = (function (data){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870)], 0)),new cljs.core.Keyword(null,"fills","fills",902966780),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),"#FFFFFF",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(1)], null)], null));
});
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_when(shape,new cljs.core.Keyword(null,"position-data","position-data",-499622376),(function (p1__54588_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(update_color,p1__54588_SHARP_);
})),new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),"#FFFFFF",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),(1)], 0));
});
app.main.ui.shapes.mask.point__GT_str = (function app$main$ui$shapes$mask$point__GT_str(point){
return ""+((point?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.Keyword(null,"x","x",2099068185))) ?? "")+","+((point?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.Keyword(null,"y","y",-1757859776))) ?? "");
});
app.main.ui.shapes.mask.mask_factory = (function app$main$ui$shapes$mask$mask_factory(shape_wrapper){
var mask_shape__54590 = (function app$main$ui$shapes$mask$mask_factory_$_mask_shape(props_54589){
var props = props_54589;
var mask = (props["mask"]);
var render_id = rumext.v2.use_ctx(app.main.ui.context.render_id);
var svg_text_QMARK_ = ((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(mask)) && ((!((new cljs.core.Keyword(null,"position-data","position-data",-499622376).cljs$core$IFn$_invoke$arity$1(mask) == null)))));
var points = (mask?.points?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(mask,new cljs.core.Keyword(null,"points","points",-1486596883)));
var points_str = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(points)],(function (){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.ui.shapes.mask.point__GT_str,points));
}));
var bounds = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(points)],(function (){
return app.common.geom.rect.points__GT_rect(points);
}));
var bx = (bounds?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"x","x",2099068185)));
var by = (bounds?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"y","y",-1757859776)));
var bw = (bounds?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"width","width",-384071477)));
var bh = (bounds?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"height","height",1025178622)));
var shape = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(mask)],(function (){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(mask,new cljs.core.Keyword(null,"shadow","shadow",873231803),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"blur","blur",-453500461)], 0)),new cljs.core.Keyword(null,"is-mask?","is-mask?",162096519),true);
}));
return rumext.v2.jsxs("defs",{'children':[rumext.v2.jsxs("filter",{'id':app.main.ui.shapes.mask.filter_id(render_id,mask),'children':[rumext.v2.jsx("feFlood",{'floodColor':"white",'result':"FloodResult"}),rumext.v2.jsx("feComposite",{'in':"FloodResult",'in2':"SourceGraphic",'operator':"in",'result':"comp"})]}),rumext.v2.jsx("clipPath",{'id':app.main.ui.shapes.mask.clip_id(render_id,mask),'className':"mask-clip-path",'children':rumext.v2.jsx("polyline",{'points':points_str})}),rumext.v2.jsx("mask",{'width':bw,'maskUnits':"userSpaceOnUse",'height':bh,'className':"mask-shape",'children':rumext.v2.jsx("g",{'filter':((svg_text_QMARK_)?null:app.main.ui.shapes.mask.filter_url(render_id,mask)),'children':rumext.v2.jsx(shape_wrapper,{'shape':shape})}),'x':bx,'id':app.main.ui.shapes.mask.mask_id(render_id,mask),'data-old-y':by,'data-old-width':bw,'data-old-x':bx,'y':by,'data-old-height':bh})]});
});
(mask_shape__54590.displayName = "mask-shape");

return mask_shape__54590;
});

//# sourceMappingURL=app.main.ui.shapes.mask.js.map
