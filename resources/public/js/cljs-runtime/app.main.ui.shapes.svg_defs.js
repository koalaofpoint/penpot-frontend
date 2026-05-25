import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.shapes.bounds.js";
import "./app.common.json.js";
import "./app.common.svg.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.svg_defs');
app.main.ui.shapes.svg_defs.add_matrix = (function app$main$ui$shapes$svg_defs$add_matrix(attrs,transform_key,transform_matrix){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(attrs,transform_key,(function (val){
if(cljs.core.truth_(val)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(transform_matrix)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(transform_matrix);
}
}));
});
app.main.ui.shapes.svg_defs.svg_node = (function app$main$ui$shapes$svg_defs$svg_node(props_54734){
var transform = props_54734.transform;
var type = props_54734.type;
var node = props_54734.node;
var bounds = props_54734.bounds;
var prefix_id = (props_54734["prefix-id"]);
if(typeof node === 'string'){
return node;
} else {
var map__54735 = node;
var map__54735__$1 = cljs.core.__destructure_map(map__54735);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54735__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54735__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54735__$1,new cljs.core.Keyword(null,"content","content",15833224));
var transform_gradient_QMARK_ = ((cljs.core.contains_QMARK_(app.common.svg.gradient_tags,tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("userSpaceOnUse",cljs.core.get.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"gradientUnits","gradientUnits",-198536416),"objectBoundingBox"))));
var transform_pattern_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("userSpaceOnUse",cljs.core.get.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"patternContentUnits","patternContentUnits",652936965),"userSpaceOnUse"))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("userSpaceOnUse",cljs.core.get.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"patternUnits","patternUnits",-1458803100),"userSpaceOnUse"))))));
var transform_clippath_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clipPath","clipPath",-934619797),tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("userSpaceOnUse",cljs.core.get.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"clipPathUnits","clipPathUnits",-1747479222),"userSpaceOnUse"))));
var transform_filter_QMARK_ = ((cljs.core.contains_QMARK_(app.common.svg.filter_tags,tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("userSpaceOnUse",cljs.core.get.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"filterUnits","filterUnits",-1278010713),"objectBoundingBox"))));
var transform_mask_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mask","mask",-585748447),tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("userSpaceOnUse",cljs.core.get.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"maskUnits","maskUnits",1842176270),"objectBoundingBox"))));
var attrs__$1 = (function (){var G__54740 = (function (){var G__54741 = app.common.svg.attrs__GT_props.cljs$core$IFn$_invoke$arity$1(app.common.svg.update_attr_ids(attrs,prefix_id));
if(((((transform_gradient_QMARK_) || (((transform_pattern_QMARK_) || (((transform_clippath_QMARK_) || (((transform_filter_QMARK_) || (transform_mask_QMARK_))))))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),type)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__54741,new cljs.core.Keyword(null,"className","className",-1983287057),(function (p1__54733_SHARP_){
if(cljs.core.truth_(p1__54733_SHARP_)){
return ""+(p1__54733_SHARP_ ?? "")+" svg-def";
} else {
return "svg-def";
}
}));
} else {
return G__54741;
}
})();
var G__54740__$1 = ((transform_gradient_QMARK_)?app.main.ui.shapes.svg_defs.add_matrix(G__54740,new cljs.core.Keyword(null,"gradientTransform","gradientTransform",-364684930),transform):G__54740);
var G__54740__$2 = ((transform_pattern_QMARK_)?app.main.ui.shapes.svg_defs.add_matrix(G__54740__$1,new cljs.core.Keyword(null,"patternTransform","patternTransform",-1380251494),transform):G__54740__$1);
var G__54740__$3 = ((transform_clippath_QMARK_)?app.main.ui.shapes.svg_defs.add_matrix(G__54740__$2,new cljs.core.Keyword(null,"transform","transform",1381301764),transform):G__54740__$2);
if(((transform_filter_QMARK_) || (transform_mask_QMARK_))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__54740__$3,bounds], 0));
} else {
return G__54740__$3;
}
})();
var attrs__$2 = (function (){var G__54743 = attrs__$1;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"filter","filter",-948537934))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"mask","mask",-585748447))))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__54743,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-old-x","data-old-x",1262470324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(attrs__$1),new cljs.core.Keyword(null,"data-old-y","data-old-y",132754460),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(attrs__$1),new cljs.core.Keyword(null,"data-old-width","data-old-width",193537062),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(attrs__$1),new cljs.core.Keyword(null,"data-old-height","data-old-height",-1528057579),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(attrs__$1)], null)], 0));
} else {
return G__54743;
}
})();
var vec__54736 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"mask","mask",-585748447)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["g",({"className": "svg-mask-wrapper", "transform": cljs.core.str.cljs$core$IFn$_invoke$arity$1(transform)})], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rumext.v2.Fragment,({})], null));
var wrapper = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54736,(0),null);
var wrapper_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54736,(1),null);
var props = app.common.json.__GT_js.cljs$core$IFn$_invoke$arity$variadic(attrs__$2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.name], 0));
return rumext.v2.create_element(cljs.core.name(tag),props,rumext.v2.create_element(wrapper,wrapper_props,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__54745){
var vec__54746 = p__54745;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54746,(0),null);
var node__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54746,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsx(app$main$ui$shapes$svg_defs$svg_node,{'type':type,'node':node__$1,'prefix-id':prefix_id,'transform':transform,'bounds':bounds},""+"node-"+(index ?? "")));

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(content))));

}
});

(app.main.ui.shapes.svg_defs.svg_node.displayName = "svg-node");

app.main.ui.shapes.svg_defs.get_svg_def_bounds = (function app$main$ui$shapes$svg_defs$get_svg_def_bounds(p__54749,shape,transform){
var map__54750 = p__54749;
var map__54750__$1 = cljs.core.__destructure_map(map__54750);
var node = map__54750__$1;
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54750__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54750__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"mask","mask",-585748447))) || (cljs.core.contains_QMARK_(app.common.svg.filter_tags,tag)))){
var G__54751 = app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"x","x",2099068185))),app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"y","y",-1757859776))),app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"width","width",-384071477))),app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"height","height",1025178622))));
if((G__54751 == null)){
return null;
} else {
return app.common.geom.shapes.transform_rect(G__54751,transform);
}
} else {
return app.common.geom.shapes.bounds.get_shape_filter_bounds.cljs$core$IFn$_invoke$arity$1(shape);
}
});
app.main.ui.shapes.svg_defs.svg_defs = (function app$main$ui$shapes$svg_defs$svg_defs(props_54754){
var render_id = (props_54754["render-id"]);
var shape = props_54754.shape;
var defs = new cljs.core.Keyword(null,"svg-defs","svg-defs",364869720).cljs$core$IFn$_invoke$arity$1(shape);
var transform = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape)],(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"svg-raw","svg-raw",-594329202),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape))){
return app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0();
} else {
return app.common.svg.svg_transform_matrix(shape);
}
}));
var transform__$1 = (((!((new cljs.core.Keyword(null,"svg-transform","svg-transform",-1664613325).cljs$core$IFn$_invoke$arity$1(shape) == null))))?app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$2(transform,new cljs.core.Keyword(null,"svg-transform","svg-transform",-1664613325).cljs$core$IFn$_invoke$arity$1(shape)):transform);
var prefix_id = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(render_id),rumext.v2.adapt(defs)],(function (id){
var G__54755 = id;
if(cljs.core.contains_QMARK_(defs,id)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(render_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54755)].join('');
} else {
return G__54755;
}
}));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__54756){
var vec__54757 = p__54756;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54757,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54757,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.shapes.svg_defs.svg_node,{'type':new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape),'node':node,'prefix-id':prefix_id,'transform':transform__$1,'bounds':app.main.ui.shapes.svg_defs.get_svg_def_bounds(node,shape,transform__$1)},""+(key ?? "")));

return out_arr__46744__auto__;
}),[],defs);
});

(app.main.ui.shapes.svg_defs.svg_defs.displayName = "svg-defs");


//# sourceMappingURL=app.main.ui.shapes.svg_defs.js.map
