import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.transit.js";
import "./app.main.fonts.js";
import "./app.util.dom.js";
import "./app.util.text_position_data.js";
import "./cuerdas.core.js";
import "./promesa.core.js";
goog.provide('app.util.text_svg_position');
/**
 * Given a text node retrieves the rectangles for everyone of its paragraphs and its text.
 */
app.util.text_svg_position.parse_text_nodes = (function app$util$text_svg_position$parse_text_nodes(parent_node,direction,text_node,text_align){
var parse_entry = (function app$util$text_svg_position$parse_text_nodes_$_parse_entry(entry){
if((!((entry.position == null)))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node","node",581201198),entry.node,new cljs.core.Keyword(null,"position","position",-2011731912),app.util.dom.bounding_rect__GT_rect(entry.position),new cljs.core.Keyword(null,"text","text",-1790561697),entry.text,new cljs.core.Keyword(null,"direction","direction",-633359395),direction], null);
} else {
return null;
}
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(parse_entry),app.util.text_position_data.parse_text_nodes(parent_node,text_node,text_align));
});
app.util.text_svg_position.load_promises = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
app.util.text_svg_position.load_font = (function app$util$text_svg_position$load_font(font){
if(cljs.core.contains_QMARK_(cljs.core.deref(app.util.text_svg_position.load_promises),font)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.util.text_svg_position.load_promises),font);
} else {
var load_promise = app.util.dom.load_font(font);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.text_svg_position.load_promises,cljs.core.assoc,font,load_promise);

return load_promise;
}
});
app.util.text_svg_position.resolve_font = (function app$util$text_svg_position$resolve_font(node){
var styles = app.util.dom.get_computed_styles(node);
var font = app.util.dom.get_property_value(styles,"font");
var font__$1 = ((((cljs.core.not(font)) || (cljs.core.empty_QMARK_(font))))?""+(app.util.dom.get_property_value(styles,"font-size") ?? "")+" "+(app.util.dom.get_property_value(styles,"font-family") ?? ""):font);
var font_id = app.util.dom.get_property_value(styles,"--font-id");
return promesa.core.merr.cljs$core$IFn$_invoke$arity$2((function (_cause){
console.error(""+"Cannot load font "+(font_id ?? ""));

return promesa.core.resolved(null);
}),promesa.core.fmap.cljs$core$IFn$_invoke$arity$2((function (){
if(app.util.dom.check_font_QMARK_(font__$1)){
return null;
} else {
return app.util.text_svg_position.load_font(font__$1);
}
}),app.main.fonts.ensure_loaded_BANG_.cljs$core$IFn$_invoke$arity$1(font_id)));
});
app.util.text_svg_position.process_text_node = (function app$util$text_svg_position$process_text_node(parent_node){
var root = app.util.dom.get_parent_with_selector(parent_node,".text-node-html");
var paragraph = app.util.dom.get_parent_with_selector(parent_node,".paragraph");
var shape_x = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_attribute(root,"data-x"));
var shape_y = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_attribute(root,"data-y"));
var direction = app.util.dom.get_computed_styles(parent_node).direction;
var text_align = app.util.dom.get_computed_styles(paragraph).textAlign;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__80104_SHARP_){
return app.util.text_svg_position.parse_text_nodes(parent_node,direction,p1__80104_SHARP_,text_align);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__80105_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__80105_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,shape_x),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,shape_y);
}))),cljs.core.seq(parent_node.childNodes));
});
app.util.text_svg_position.calc_text_node_positions = (function app$util$text_svg_position$calc_text_node_positions(shape_id){
var text_nodes = app.util.dom.query_all.cljs$core$IFn$_invoke$arity$2(app.util.dom.query.cljs$core$IFn$_invoke$arity$1(""+"#html-text-node-"+(shape_id ?? "")),".text-node");
return promesa.core.fmap.cljs$core$IFn$_invoke$arity$2((function (){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(app.util.text_svg_position.process_text_node,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text_nodes], 0));
}),promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.util.text_svg_position.resolve_font,text_nodes)));
});
app.util.text_svg_position.calc_position_data = (function app$util$text_svg_position$calc_position_data(shape_id){
var get_prop = (function app$util$text_svg_position$calc_position_data_$_get_prop(styles,prop){
var value = styles.getPropertyValue(prop);
if((((!((value == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,"")))){
return value;
} else {
return null;
}
});
var transform_data = (function app$util$text_svg_position$calc_position_data_$_transform_data(p__80108){
var map__80109 = p__80108;
var map__80109__$1 = cljs.core.__destructure_map(map__80109);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80109__$1,new cljs.core.Keyword(null,"node","node",581201198));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80109__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80109__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80109__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var styles = app.util.dom.get_computed_styles(node);
var position__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(position,new cljs.core.Keyword(null,"y","y",-1757859776),((position?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"y","y",-1757859776))) + (position?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"height","height",1025178622)))));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(position__$1,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.val),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"font-style","font-style",-773672352),new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"fills","fills",902966780),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"text","text",-1790561697)],[""+(get_prop(styles,"font-style") ?? ""),""+(get_prop(styles,"text-transform") ?? ""),""+(get_prop(styles,"font-size") ?? ""),""+(get_prop(styles,"font-weight") ?? ""),""+(get_prop(styles,"text-decoration") ?? ""),""+(get_prop(styles,"letter-spacing") ?? ""),app.common.transit.decode_str.cljs$core$IFn$_invoke$arity$1(get_prop(styles,"--fills")),direction,""+(get_prop(styles,"font-family") ?? ""),text]));
});
if((!((shape_id == null)))){
return promesa.core.fmap.cljs$core$IFn$_invoke$arity$2((function (text_data){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(transform_data,text_data);
}),app.util.text_svg_position.calc_text_node_positions(shape_id));
} else {
return null;
}
});

//# sourceMappingURL=app.util.text_svg_position.js.map
