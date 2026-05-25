import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.shapes.js";
import "./app.config.js";
import "./app.main.ui.context.js";
import "./app.main.ui.shapes.attrs.js";
import "./app.main.ui.shapes.custom_stroke.js";
import "./app.main.ui.shapes.fills.js";
import "./app.main.ui.shapes.gradients.js";
import "./app.util.object.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.text.svg_text');
app.main.ui.shapes.text.svg_text.fill_attrs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170)], null);
app.main.ui.shapes.text.svg_text.set_white_fill = (function app$main$ui$shapes$text$svg_text$set_white_fill(shape){
var update_color = (function (data){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870)], 0)),new cljs.core.Keyword(null,"fills","fills",902966780),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),"#FFFFFF",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(1)], null)], null));
});
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_when(shape,new cljs.core.Keyword(null,"position-data","position-data",-499622376),(function (p1__54889_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(update_color,p1__54889_SHARP_);
})),new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),"#FFFFFF",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),(1)], 0));
});
app.main.ui.shapes.text.svg_text.text_shape = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$shapes$text$svg_text$text_shape(props_54890){
var props = props_54890;
var render_id = rumext.v2.use_ctx(app.main.ui.context.render_id);
var shape = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"shape");
var shape__$1 = (function (){var G__54895 = shape;
if(cljs.core.truth_(new cljs.core.Keyword(null,"is-mask?","is-mask?",162096519).cljs$core$IFn$_invoke$arity$1(shape))){
return app.main.ui.shapes.text.svg_text.set_white_fill(G__54895);
} else {
return G__54895;
}
})();
var map__54894 = shape__$1;
var map__54894__$1 = cljs.core.__destructure_map(map__54894);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54894__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54894__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54894__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54894__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var position_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54894__$1,new cljs.core.Keyword(null,"position-data","position-data",-499622376));
var transform = app.common.geom.shapes.transform_str.cljs$core$IFn$_invoke$arity$1(shape__$1);
var group_props = app.main.ui.shapes.attrs.add_border_props_BANG_(app.main.ui.shapes.attrs.add_fill_props_BANG_.cljs$core$IFn$_invoke$arity$3(({"transform": transform, "className": "text-container", "x": x, "y": y, "width": width, "height": height}),shape__$1,render_id),shape__$1);
var get_gradient_id = (function (index){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(render_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('');
});
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(cljs.core.truth_(app.common.data.seek.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870),position_data))?rumext.v2.jsx("defs",{'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__54900){
var vec__54901 = p__54900;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54901,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54901,(1),null);
out_arr__46744__auto__.push((((!((new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870).cljs$core$IFn$_invoke$arity$1(data) == null))))?(function (){var id = ""+"fill-color-gradient-"+(get_gradient_id(index) ?? "");
return rumext.v2.jsx(app.main.ui.shapes.gradients.gradient,{'id':id,'attr':new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870),'shape':data},id);
})():null));

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(position_data))}):null),rumext.v2.create_element("g",group_props,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__54912){
var vec__54913 = p__54912;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54913,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54913,(1),null);
out_arr__46744__auto__.push((function (){var rtl_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("rtl",new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(data));
var browser_props = ((app.config.check_browser_QMARK_(new cljs.core.Keyword(null,"safari","safari",497115653)))?({"dominantBaseline": "hanging", "dy": "0.2em", "y": (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(data) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(data))}):null);
var props__$1 = (function (){var G__54916 = ({"key": ""+"text-"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1) ?? "")+"-"+(index ?? ""), "x": ((rtl_QMARK_)?(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(data) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(data)):new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(data)), "y": new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(data), "dominantBaseline": "ideographic", "textLength": new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(data), "lengthAdjust": "spacingAndGlyphs", "style": app.util.object.set_BANG_(({"textTransform": new cljs.core.Keyword(null,"text-transform","text-transform",1685000676).cljs$core$IFn$_invoke$arity$1(data), "fontFamily": new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(data), "letterSpacing": new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767).cljs$core$IFn$_invoke$arity$1(data), "fontStyle": new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(data), "fontWeight": new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(data), "whiteSpace": "pre", "fontSize": new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(data), "textDecoration": new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207).cljs$core$IFn$_invoke$arity$1(data), "direction": new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(data)}),"fill",["url(#fill-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(render_id),")"].join(''))});
if(cljs.core.truth_(browser_props)){
return app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(G__54916,browser_props);
} else {
return G__54916;
}
})();
var shape__$2 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"fills","fills",902966780),new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"shadow","shadow",873231803),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"blur","blur",-453500461)], 0));
var render_id__$1 = ""+(render_id ?? "")+"-"+(index ?? "");
return rumext.v2.jsxs(rumext.v2.provider(app.main.ui.context.render_id),{'value':render_id__$1,'children':[rumext.v2.jsx("defs",{'children':rumext.v2.jsx(app.main.ui.shapes.fills.fills,{'shape':shape__$2,'render-id':render_id__$1})}),rumext.v2.jsx(app.main.ui.shapes.custom_stroke.shape_custom_strokes,{'shape':shape__$2,'position':index,'render-id':render_id__$1,'children':rumext.v2.create_element("text",props__$1,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(data))})]},index);
})());

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(position_data)))]});
}));

(app.main.ui.shapes.text.svg_text.text_shape.displayName = "text-shape");


//# sourceMappingURL=app.main.ui.shapes.text.svg_text.js.map
