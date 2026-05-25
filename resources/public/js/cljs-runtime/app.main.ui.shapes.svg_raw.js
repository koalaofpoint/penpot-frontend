import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.geom.shapes.js";
import "./app.common.svg.js";
import "./app.main.ui.context.js";
import "./app.main.ui.shapes.attrs.js";
import "./app.util.object.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.svg_raw');
app.main.ui.shapes.svg_raw.graphic_element = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"textPath","textPath",269260449),null,new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null,new cljs.core.Keyword(null,"circle","circle",1903212362),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"svg","svg",856789142),null,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),null,new cljs.core.Keyword(null,"image","image",-58725096),null,new cljs.core.Keyword(null,"polyline","polyline",-1731551044),null,new cljs.core.Keyword(null,"rect","rect",-108902628),null,new cljs.core.Keyword(null,"polygon","polygon",837053759),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
app.main.ui.shapes.svg_raw.svg_ids_ctx = rumext.v2.create_context(null);
app.main.ui.shapes.svg_raw.svg_root = (function app$main$ui$shapes$svg_raw$svg_root(props_54742){
var props = props_54742;
var shape = (props["shape"]);
var children = (props["children"]);
var x = (shape?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (shape?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"y","y",-1757859776)));
var w = (shape?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"width","width",-384071477)));
var h = (shape?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"height","height",1025178622)));
var ids_mapping = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape)],(function (){
return app.common.svg.generate_id_mapping(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape));
}));
var render_id = rumext.v2.use_ctx(app.main.ui.context.render_id);
var props__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape),rumext.v2.adapt(render_id)],(function (){
return app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.unset_BANG_(app.main.ui.shapes.attrs.add_fill_props_BANG_.cljs$core$IFn$_invoke$arity$3(({}),shape,render_id),"transform"),"x",x),"y",y),"width",w),"height",h),"preserveAspectRatio","none");
}));
return rumext.v2.jsx(rumext.v2.provider(app.main.ui.shapes.svg_raw.svg_ids_ctx),{'value':ids_mapping,'children':rumext.v2.jsx("g",{'className':"svg-raw",'transform':app.common.geom.shapes.transform_str.cljs$core$IFn$_invoke$arity$1(shape),'children':rumext.v2.create_element("svg",props__$1,children)})});
});

(app.main.ui.shapes.svg_raw.svg_root.displayName = "svg-root");

app.main.ui.shapes.svg_raw.svg_element = (function app$main$ui$shapes$svg_raw$svg_element(props_54744){
var props = props_54744;
var shape = (props["shape"]);
var children = (props["children"]);
var ids_mapping = rumext.v2.use_ctx(app.main.ui.shapes.svg_raw.svg_ids_ctx);
var render_id = rumext.v2.use_ctx(app.main.ui.context.render_id);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape));
var shape__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape),rumext.v2.adapt(ids_mapping)],(function (){
var tag__$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),app.common.svg.replace_attrs_ids,ids_mapping),new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),(function (attrs){
if(cljs.core.contains_QMARK_(app.main.ui.shapes.svg_raw.graphic_element,tag__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"transform","transform",1381301764),""+(app.common.svg.svg_transform_matrix(shape) ?? "")+" "+(new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$2(attrs,"") ?? ""));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"transform","transform",1381301764));
}
}));
}));
var props__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape__$1),rumext.v2.adapt(render_id)],(function (){
var element_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"id","id",-1388402092));
var props__$1 = app.main.ui.shapes.attrs.add_fill_props_BANG_.cljs$core$IFn$_invoke$arity$3(({}),shape__$1,render_id);
if((((!((element_id == null)))) && (cljs.core.contains_QMARK_(ids_mapping,element_id)))){
app.util.object.set_BANG_(props__$1,"id",cljs.core.get.cljs$core$IFn$_invoke$arity$2(ids_mapping,element_id));
} else {
}

return props__$1;
}));
return rumext.v2.create_element(cljs.core.name(tag),props__$1,children);
});

(app.main.ui.shapes.svg_raw.svg_element.displayName = "svg-element");

app.main.ui.shapes.svg_raw.svg_raw_shape = (function app$main$ui$shapes$svg_raw$svg_raw_shape(shape_wrapper){
var svg_raw_shape__54753 = (function app$main$ui$shapes$svg_raw$svg_raw_shape_$_svg_raw_shape(props_54752){
var props = props_54752;
var shape = (props["shape"]);
var childs = (props["childs"]);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"content","content",15833224));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(content,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var svg_root_QMARK_ = ((cljs.core.map_QMARK_(content)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"svg","svg",856789142))));
var svg_tag_QMARK_ = cljs.core.map_QMARK_(content);
var svg_leaf_QMARK_ = typeof content === 'string';
var valid_tag_QMARK_ = cljs.core.contains_QMARK_(app.common.svg.svg_tags,tag);
var current_svg_root_id = rumext.v2.use_ctx(app.main.ui.context.current_svg_root_id);
var style_content = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"style","style",-496642736)))?""+"#shape-"+(current_svg_root_id ?? "")+"{ "+(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape))) ?? "")+" }":null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"style","style",-496642736))){
return rumext.v2.jsx("style",{'children':style_content});
} else {
if(svg_root_QMARK_){
return rumext.v2.jsx(app.main.ui.shapes.svg_raw.svg_root,{'shape':shape,'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,item){
out_arr__46744__auto__.push(rumext.v2.jsx(shape_wrapper,{'shape':item},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item) ?? "")));

return out_arr__46744__auto__;
}),[],childs)});
} else {
if(((svg_tag_QMARK_) && (valid_tag_QMARK_))){
return rumext.v2.jsx(app.main.ui.shapes.svg_raw.svg_element,{'shape':shape,'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,item){
out_arr__46744__auto__.push(rumext.v2.jsx(shape_wrapper,{'shape':item},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item) ?? "")));

return out_arr__46744__auto__;
}),[],childs)});
} else {
if(svg_leaf_QMARK_){
return content;
} else {
return null;
}
}
}
}
});
(svg_raw_shape__54753.displayName = "svg-raw-shape");

return svg_raw_shape__54753;
});

//# sourceMappingURL=app.main.ui.shapes.svg_raw.js.map
