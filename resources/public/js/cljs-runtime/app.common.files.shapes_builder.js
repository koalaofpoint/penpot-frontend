import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.exceptions.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.shapes.common.js";
import "./app.common.geom.shapes.transforms.js";
import "./app.common.math.js";
import "./app.common.schema.js";
import "./app.common.svg.js";
import "./app.common.types.color.js";
import "./app.common.types.path.js";
import "./app.common.types.path.segment.js";
import "./app.common.types.shape.js";
import "./app.common.uuid.js";
import "./cuerdas.core.js";
goog.provide('app.common.files.shapes_builder');
app.common.files.shapes_builder.default_rect = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"height","height",1025178622),(1)], null);
app.common.files.shapes_builder.assert_valid_num = (function app$common$files$shapes_builder$assert_valid_num(attr,num){
if(cljs.core.truth_((function (){var and__5023__auto__ = app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(num);
if(cljs.core.truth_(and__5023__auto__)){
return (((num <= app.common.schema.max_safe_int)) && ((num >= app.common.schema.min_safe_int)));
} else {
return and__5023__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["invalid numeric value for `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr),"`: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join(''),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"data-validation","data-validation",-893817907),new cljs.core.Keyword(null,"hint","hint",439639918),["invalid numeric value for `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr),"`: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join('')], null),null], 0)),null);
}

if((((num > (0))) && ((num < (1))))){
return (1);
} else {
if((((num < (0))) && ((num > (-1))))){
return (-1);
} else {
return num;

}
}
});
app.common.files.shapes_builder.assert_valid_pos_num = (function app$common$files$shapes_builder$assert_valid_pos_num(attr,num){
if((num > (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["invalid numeric value for `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr),"`: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," (should be positive)"].join(''),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"data-validation","data-validation",-893817907),new cljs.core.Keyword(null,"hint","hint",439639918),["invalid numeric value for `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr),"`: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," (should be positive)"].join('')], null),null], 0)),null);
}

return num;
});
app.common.files.shapes_builder.assert_valid_blend_mode = (function app$common$files$shapes_builder$assert_valid_blend_mode(mode){
var value = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cuerdas.core.lower(cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(mode)));
if(cljs.core.contains_QMARK_(app.common.types.shape.blend_modes,value)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["unexpected blend mode: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"data-validation","data-validation",-893817907),new cljs.core.Keyword(null,"hint","hint",439639918),["unexpected blend mode: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')], null),null], 0)),null);
}

return value;
});
app.common.files.shapes_builder.svg_dimensions = (function app$common$files$shapes_builder$svg_dimensions(p__67264){
var map__67265 = p__67264;
var map__67265__$1 = cljs.core.__destructure_map(map__67265);
var data = map__67265__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67265__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$2(attrs,(100));
var height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$2(attrs,(100));
var viewbox = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"viewBox","viewBox",-469489477).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ""+"0 0 "+(width ?? "")+" "+(height ?? "");
}
})();
var vec__67266 = app.common.svg.parse_numbers(viewbox);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67266,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67266,(1),null);
var width__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67266,(2),null);
var height__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67266,(3),null);
var width__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width__$1,(0)))?(1):width__$1);
var height__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(height__$1,(0)))?(1):height__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.files.shapes_builder.assert_valid_num(new cljs.core.Keyword(null,"x","x",2099068185),x),app.common.files.shapes_builder.assert_valid_num(new cljs.core.Keyword(null,"y","y",-1757859776),y),app.common.files.shapes_builder.assert_valid_pos_num(new cljs.core.Keyword(null,"width","width",-384071477),width__$2),app.common.files.shapes_builder.assert_valid_pos_num(new cljs.core.Keyword(null,"height","height",1025178622),height__$2)], null);
});
/**
 * Processes gradient stops to extract stop-color and stop-opacity from style attributes
 * and convert them to direct attributes. This ensures stops with style='stop-color:#...;stop-opacity:1'
 * are properly converted to stop-color and stop-opacity attributes.
 */
app.common.files.shapes_builder.process_gradient_stops = (function app$common$files$shapes_builder$process_gradient_stops(stops){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (stop){
var stop_attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(stop);
var stop_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(stop_attrs,new cljs.core.Keyword(null,"style","style",-496642736));
var parsed_style = ((((typeof stop_style === 'string') && (cljs.core.seq(stop_style))))?app.common.svg.parse_style(stop_style):null);
var style_stop_color = (cljs.core.truth_(parsed_style)?new cljs.core.Keyword(null,"stop-color","stop-color",316173955).cljs$core$IFn$_invoke$arity$1(parsed_style):null);
var style_stop_opacity = (cljs.core.truth_(parsed_style)?new cljs.core.Keyword(null,"stop-opacity","stop-opacity",-2018003729).cljs$core$IFn$_invoke$arity$1(parsed_style):null);
var final_attrs = (function (){var G__67271 = stop_attrs;
var G__67271__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = style_stop_color;
if(cljs.core.truth_(and__5023__auto__)){
return (!(cljs.core.contains_QMARK_(stop_attrs,new cljs.core.Keyword(null,"stop-color","stop-color",316173955))));
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67271,new cljs.core.Keyword(null,"stop-color","stop-color",316173955),style_stop_color):G__67271);
var G__67271__$2 = (cljs.core.truth_((function (){var and__5023__auto__ = style_stop_opacity;
if(cljs.core.truth_(and__5023__auto__)){
return (!(cljs.core.contains_QMARK_(stop_attrs,new cljs.core.Keyword(null,"stop-opacity","stop-opacity",-2018003729))));
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67271__$1,new cljs.core.Keyword(null,"stop-opacity","stop-opacity",-2018003729),style_stop_opacity):G__67271__$1);
if(cljs.core.truth_((function (){var or__5025__auto__ = style_stop_color;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return style_stop_opacity;
}
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__67271__$2,new cljs.core.Keyword(null,"style","style",-496642736));
} else {
return G__67271__$2;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stop,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),final_attrs);
}),stops);
});
/**
 * Resolves xlink:href references in gradients by merging the referenced gradient's
 * stops and attributes with the referencing gradient. This ensures gradients that
 * reference other gradients (like linearGradient3550 referencing linearGradient3536)
 * inherit the stops from the base gradient.
 * 
 * According to SVG spec, when a gradient has xlink:href:
 * - It inherits all attributes from the referenced gradient
 * - It inherits all stops from the referenced gradient
 * - The referencing gradient's attributes override the base ones
 * - If the referencing gradient has stops, they replace the base stops
 * 
 * Returns the defs map with all gradient href references resolved.
 */
app.common.files.shapes_builder.resolve_gradient_href = (function app$common$files$shapes_builder$resolve_gradient_href(defs){
var resolve_gradient = (function app$common$files$shapes_builder$resolve_gradient_href_$_resolve_gradient(gradient_id,gradient_node,defs__$1,visited){
if(cljs.core.contains_QMARK_(visited,gradient_id)){
console.warn("[resolve-gradient] Circular reference detected for",gradient_id);

return gradient_node;
} else {
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(gradient_node);
var href_id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205).cljs$core$IFn$_invoke$arity$1(attrs);
}
})();
var href_id__$1 = ((((typeof href_id === 'string') && ((cljs.core.count(href_id) > (0)))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(href_id,(1)):null);
var base_gradient = (cljs.core.truth_((function (){var and__5023__auto__ = href_id__$1;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.contains_QMARK_(defs__$1,href_id__$1);
} else {
return and__5023__auto__;
}
})())?cljs.core.get.cljs$core$IFn$_invoke$arity$2(defs__$1,href_id__$1):null);
var resolved_base = (cljs.core.truth_(base_gradient)?app$common$files$shapes_builder$resolve_gradient_href_$_resolve_gradient(href_id__$1,base_gradient,defs__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited,gradient_id)):null);
if(cljs.core.truth_(resolved_base)){
var base_attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(resolved_base);
var ref_attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(gradient_node);
var base_attrs_clean = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(base_attrs,new cljs.core.Keyword(null,"id","id",-1388402092));
var ref_attrs_clean = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(ref_attrs,new cljs.core.Keyword(null,"href","href",-793805698),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),new cljs.core.Keyword(null,"id","id",-1388402092)], 0));
var base_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(base_attrs,new cljs.core.Keyword(null,"gradientTransform","gradientTransform",-364684930));
var ref_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ref_attrs,new cljs.core.Keyword(null,"gradientTransform","gradientTransform",-364684930));
var combined_transform = (cljs.core.truth_((function (){var and__5023__auto__ = base_transform;
if(cljs.core.truth_(and__5023__auto__)){
return ref_transform;
} else {
return and__5023__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_transform)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ref_transform)].join(''):(function (){var or__5025__auto__ = ref_transform;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return base_transform;
}
})()
);
var merged_attrs = (function (){var G__67281 = app.common.data.deep_merge.cljs$core$IFn$_invoke$arity$2(base_attrs_clean,ref_attrs_clean);
if(cljs.core.truth_(combined_transform)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67281,new cljs.core.Keyword(null,"gradientTransform","gradientTransform",-364684930),combined_transform);
} else {
return G__67281;
}
})();
var final_content = ((cljs.core.seq(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(gradient_node)))?new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(gradient_node):new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(resolved_base));
var processed_content = app.common.files.shapes_builder.process_gradient_stops(final_content);
var result = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(gradient_node),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(merged_attrs,new cljs.core.Keyword(null,"id","id",-1388402092),gradient_id),new cljs.core.Keyword(null,"content","content",15833224),processed_content], null);
return result;
} else {
var processed_content = app.common.files.shapes_builder.process_gradient_stops(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(gradient_node));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(gradient_node,new cljs.core.Keyword(null,"content","content",15833224),processed_content);
}
}
});
var gradient_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"linearGradient","linearGradient",1711964727),null,new cljs.core.Keyword(null,"radialGradient","radialGradient",1402247193),null], null), null);
var result = cljs.core.reduce_kv((function (acc,id,node){
if(cljs.core.contains_QMARK_(gradient_tags,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,id,resolve_gradient(id,node,defs,cljs.core.PersistentHashSet.EMPTY));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,id,node);
}
}),cljs.core.PersistentArrayMap.EMPTY,defs);
return result;
});
app.common.files.shapes_builder.create_svg_shapes = (function app$common$files$shapes_builder$create_svg_shapes(var_args){
var G__67284 = arguments.length;
switch (G__67284) {
case 7:
return app.common.files.shapes_builder.create_svg_shapes.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return app.common.files.shapes_builder.create_svg_shapes.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.shapes_builder.create_svg_shapes.cljs$core$IFn$_invoke$arity$7 = (function (svg_data,pos,objects,frame_id,parent_id,selected,center_QMARK_){
return app.common.files.shapes_builder.create_svg_shapes.cljs$core$IFn$_invoke$arity$8(app.common.uuid.next(),svg_data,pos,objects,frame_id,parent_id,selected,center_QMARK_);
}));

(app.common.files.shapes_builder.create_svg_shapes.cljs$core$IFn$_invoke$arity$8 = (function (id,svg_data,p__67285,objects,frame_id,parent_id,selected,center_QMARK_){
var map__67286 = p__67285;
var map__67286__$1 = cljs.core.__destructure_map(map__67286);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67286__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67286__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__67293 = app.common.files.shapes_builder.svg_dimensions(svg_data);
var vb_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67293,(0),null);
var vb_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67293,(1),null);
var vb_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67293,(2),null);
var vb_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67293,(3),null);
var unames = app.common.files.helpers.get_used_names(objects);
var svg_name = cuerdas.core.replace(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(svg_data),".svg","");
var svg_data__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(svg_data,new cljs.core.Keyword(null,"x","x",2099068185),app.common.math.round.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(center_QMARK_)?((x - vb_x) - (vb_width / (2))):x))),new cljs.core.Keyword(null,"y","y",-1757859776),app.common.math.round.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(center_QMARK_)?((y - vb_y) - (vb_height / (2))):y))),new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),vb_x),new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),vb_y),new cljs.core.Keyword(null,"width","width",-384071477),vb_width),new cljs.core.Keyword(null,"height","height",1025178622),vb_height),new cljs.core.Keyword(null,"name","name",1843675177),svg_name);
var vec__67296 = app.common.svg.extract_defs(app.common.svg.fix_percents(app.common.svg.fix_default_values(svg_data__$1)));
var def_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67296,(0),null);
var svg_data__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67296,(1),null);
var def_nodes__$1 = app.common.files.shapes_builder.resolve_gradient_href(def_nodes);
var background = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),""+(vb_x ?? ""),new cljs.core.Keyword(null,"y","y",-1757859776),""+(vb_y ?? ""),new cljs.core.Keyword(null,"width","width",-384071477),""+(vb_width ?? ""),new cljs.core.Keyword(null,"height","height",1025178622),""+(vb_height ?? ""),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"id","id",-1388402092),"base-background"], null),new cljs.core.Keyword(null,"hidden","hidden",-312506092),true,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null);
var svg_data__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(svg_data__$2,new cljs.core.Keyword(null,"defs","defs",1398449717),def_nodes__$1),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [background], null),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(svg_data__$2)));
var root_shape = (app.common.files.shapes_builder.create_svg_root.cljs$core$IFn$_invoke$arity$4 ? app.common.files.shapes_builder.create_svg_root.cljs$core$IFn$_invoke$arity$4(id,frame_id,parent_id,svg_data__$3) : app.common.files.shapes_builder.create_svg_root.call(null,id,frame_id,parent_id,svg_data__$3));
var root_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root_shape);
var root_attrs = app.common.svg.format_styles(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(svg_data__$3));
var vec__67299 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(app.common.files.shapes_builder.create_svg_children,objects,selected,frame_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root_id,svg_data__$3], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [unames,cljs.core.PersistentVector.EMPTY], null),app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__67282_SHARP_){
return app.common.svg.inherit_attributes(root_attrs,p1__67282_SHARP_);
}),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(svg_data__$3))));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67299,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67299,(1),null);
var all_defs_from_children = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,child){
var temp__5823__auto__ = new cljs.core.Keyword(null,"svg-defs","svg-defs",364869720).cljs$core$IFn$_invoke$arity$1(child);
if(cljs.core.truth_(temp__5823__auto__)){
var child_defs = temp__5823__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,child_defs], 0));
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,children);
var root_shape_with_defs = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(root_shape,new cljs.core.Keyword(null,"svg-defs","svg-defs",364869720),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([def_nodes__$1,all_defs_from_children], 0)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_shape_with_defs,children], null);
}));

(app.common.files.shapes_builder.create_svg_shapes.cljs$lang$maxFixedArity = 8);

app.common.files.shapes_builder.create_raw_svg = (function app$common$files$shapes_builder$create_raw_svg(name,frame_id,p__67309,p__67310){
var map__67311 = p__67309;
var map__67311__$1 = cljs.core.__destructure_map(map__67311);
var svg_data = map__67311__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67311__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67311__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67311__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67311__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var offset_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67311__$1,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230));
var offset_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67311__$1,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008));
var defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67311__$1,new cljs.core.Keyword(null,"defs","defs",1398449717));
var map__67312 = p__67310;
var map__67312__$1 = cljs.core.__destructure_map(map__67312);
var data = map__67312__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67312__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var props = app.common.svg.attrs__GT_props.cljs$core$IFn$_invoke$arity$1(attrs);
var vbox = app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(offset_x,offset_y,width,height);
return app.common.types.shape.setup_shape(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),new cljs.core.Keyword(null,"svg-viewbox","svg-viewbox",-255575146),new cljs.core.Keyword(null,"svg-defs","svg-defs",364869720),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[y,data,name,width,new cljs.core.Keyword(null,"svg-raw","svg-raw",-594329202),props,vbox,defs,frame_id,x,height]));
});
app.common.files.shapes_builder.create_svg_root = (function app$common$files$shapes_builder$create_svg_root(id,frame_id,parent_id,p__67316){
var map__67317 = p__67316;
var map__67317__$1 = cljs.core.__destructure_map(map__67317);
var svg_data = map__67317__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67317__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67317__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67317__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var offset_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67317__$1,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67317__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67317__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67317__$1,new cljs.core.Keyword(null,"defs","defs",1398449717));
var offset_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67317__$1,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67317__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var props = app.common.svg.attrs__GT_props.cljs$core$IFn$_invoke$arity$1(app.common.data.without_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"view-box","view-box",-1792199155),new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571)], 0)),app.common.svg.inheritable_props));
return app.common.types.shape.setup_shape(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"svg-defs","svg-defs",364869720),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[(y + offset_y),name,width,new cljs.core.Keyword(null,"group","group",582596132),props,id,parent_id,defs,frame_id,(x + offset_x),height]));
});
app.common.files.shapes_builder.create_svg_children = (function app$common$files$shapes_builder$create_svg_children(objects,selected,frame_id,parent_id,svg_data,p__67326,p__67327){
var vec__67328 = p__67326;
var unames = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67328,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67328,(1),null);
var vec__67331 = p__67327;
var _index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67331,(0),null);
var svg_element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67331,(1),null);
var vec__67334 = (app.common.files.shapes_builder.parse_svg_element.cljs$core$IFn$_invoke$arity$4 ? app.common.files.shapes_builder.parse_svg_element.cljs$core$IFn$_invoke$arity$4(frame_id,svg_data,svg_element,unames) : app.common.files.shapes_builder.parse_svg_element.call(null,frame_id,svg_data,svg_element,unames));
var shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67334,(0),null);
var new_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67334,(1),null);
if((!((shape == null)))){
var shape_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
var shape__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id);
var children__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,shape__$1);
var unames__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(unames,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape__$1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(app.common.files.shapes_builder.create_svg_children,objects,selected,frame_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shape_id,svg_data], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [unames__$1,children__$1], null),app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(new_children));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [unames,children], null);
}
});
app.common.files.shapes_builder.create_group = (function app$common$files$shapes_builder$create_group(name,frame_id,p__67340,p__67341){
var map__67343 = p__67340;
var map__67343__$1 = cljs.core.__destructure_map(map__67343);
var svg_data = map__67343__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67343__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67343__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67343__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67343__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var offset_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67343__$1,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230));
var offset_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67343__$1,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008));
var defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67343__$1,new cljs.core.Keyword(null,"defs","defs",1398449717));
var map__67345 = p__67341;
var map__67345__$1 = cljs.core.__destructure_map(map__67345);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67345__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var transform = app.common.svg.parse_transform(new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(attrs));
var attrs__$1 = app.common.svg.attrs__GT_props.cljs$core$IFn$_invoke$arity$1(app.common.data.without_keys(attrs,app.common.svg.inheritable_props));
var vbox = app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(offset_x,offset_y,width,height);
return app.common.types.shape.setup_shape(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),new cljs.core.Keyword(null,"svg-transform","svg-transform",-1664613325),new cljs.core.Keyword(null,"svg-viewbox","svg-viewbox",-255575146),new cljs.core.Keyword(null,"svg-defs","svg-defs",364869720),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[(y + offset_y),name,width,new cljs.core.Keyword(null,"group","group",582596132),attrs__$1,transform,vbox,defs,frame_id,(x + offset_x),height]));
});
app.common.files.shapes_builder.create_path_shape = (function app$common$files$shapes_builder$create_path_shape(name,frame_id,svg_data,p__67348){
var map__67349 = p__67348;
var map__67349__$1 = cljs.core.__destructure_map(map__67349);
var data = map__67349__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67349__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
if(((cljs.core.contains_QMARK_(attrs,new cljs.core.Keyword(null,"d","d",1972142424))) && (cljs.core.seq(new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(attrs))))){
var transform = app.common.svg.parse_transform(new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(attrs));
var content = (function (){var G__67350 = app.common.types.path.from_string(new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(attrs));
if((!((transform == null)))){
return app.common.types.path.segment.transform_content(G__67350,transform);
} else {
return G__67350;
}
})();
var selrect = app.common.types.path.segment.content__GT_selrect(content);
var points = app.common.geom.rect.rect__GT_points(selrect);
var origin = app.common.geom.point.negate(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(svg_data));
var attrs__$1 = app.common.svg.attrs__GT_props.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"transform","transform",1381301764)], 0)));
return app.common.geom.shapes.translate_to_frame(app.common.types.shape.setup_shape(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"svg-transform","svg-transform",-1664613325),new cljs.core.Keyword(null,"svg-viewbox","svg-viewbox",-255575146),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"strokes","strokes",-1645650952),new cljs.core.Keyword(null,"selrect","selrect",1966287292),new cljs.core.Keyword(null,"fills","fills",902966780)],[content,name,new cljs.core.Keyword(null,"path","path",-188191168),attrs__$1,points,transform,selrect,frame_id,cljs.core.PersistentVector.EMPTY,selrect,cljs.core.PersistentVector.EMPTY])),origin);
} else {
return null;
}
});
app.common.files.shapes_builder.calculate_rect_metadata = (function app$common$files$shapes_builder$calculate_rect_metadata(rect,transform){
var points = app.common.geom.shapes.transform_points.cljs$core$IFn$_invoke$arity$2(app.common.geom.rect.rect__GT_points(rect),transform);
var center = app.common.geom.shapes.common.points__GT_center(points);
var selrect = app.common.geom.shapes.transforms.calculate_selrect(points,center);
var transform__$1 = app.common.geom.shapes.transforms.calculate_transform(points,center,selrect);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(selrect),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(selrect),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(selrect),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selrect),new cljs.core.Keyword(null,"selrect","selrect",1966287292),selrect,new cljs.core.Keyword(null,"points","points",-1486596883),points,new cljs.core.Keyword(null,"transform","transform",1381301764),transform__$1,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576),(((!((transform__$1 == null))))?app.common.geom.matrix.inverse(transform__$1):null)], null);
});
app.common.files.shapes_builder.parse_rect_attrs = (function app$common$files$shapes_builder$parse_rect_attrs(p__67356){
var map__67357 = p__67356;
var map__67357__$1 = cljs.core.__destructure_map(map__67357);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67357__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67357__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67357__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67357__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(x,(0)),app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(y,(0)),app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(width,(1)),app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(height,(1)));
});
app.common.files.shapes_builder.parse_radius_attrs = (function app$common$files$shapes_builder$parse_radius_attrs(attrs){
if(((cljs.core.contains_QMARK_(attrs,new cljs.core.Keyword(null,"rx","rx",1627208482))) || (cljs.core.contains_QMARK_(attrs,new cljs.core.Keyword(null,"ry","ry",-334598563))))){
var rx_val = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(attrs),(0));
var ry_val = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(attrs),(0));
var radius = ((((cljs.core.contains_QMARK_(attrs,new cljs.core.Keyword(null,"rx","rx",1627208482))) && (cljs.core.contains_QMARK_(attrs,new cljs.core.Keyword(null,"ry","ry",-334598563)))))?(function (){var x__5113__auto__ = rx_val;
var y__5114__auto__ = ry_val;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})():((cljs.core.contains_QMARK_(attrs,new cljs.core.Keyword(null,"rx","rx",1627208482)))?rx_val:((cljs.core.contains_QMARK_(attrs,new cljs.core.Keyword(null,"ry","ry",-334598563)))?ry_val:(0)
)));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r1","r1",690974900),radius,new cljs.core.Keyword(null,"r2","r2",252844174),radius,new cljs.core.Keyword(null,"r3","r3",-2027148174),radius,new cljs.core.Keyword(null,"r4","r4",1134323163),radius], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
app.common.files.shapes_builder.create_rect_shape = (function app$common$files$shapes_builder$create_rect_shape(name,frame_id,svg_data,p__67365){
var map__67367 = p__67365;
var map__67367__$1 = cljs.core.__destructure_map(map__67367);
var data = map__67367__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67367__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var transform = app.common.geom.matrix.transform_in(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(svg_data),app.common.svg.parse_transform(new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(attrs)));
var origin = app.common.geom.point.negate(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(svg_data));
var vbox = app.common.files.shapes_builder.parse_rect_attrs(attrs);
var rect = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(vbox,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(origin)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(origin));
var props = app.common.svg.attrs__GT_props.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563),new cljs.core.Keyword(null,"transform","transform",1381301764)], 0)));
var radius_attrs = app.common.files.shapes_builder.parse_radius_attrs(attrs);
return app.common.types.shape.setup_shape(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.files.shapes_builder.calculate_rect_metadata(rect,transform),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628)),new cljs.core.Keyword(null,"name","name",1843675177),name),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id),new cljs.core.Keyword(null,"svg-viewbox","svg-viewbox",-255575146),vbox),new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),props),new cljs.core.Keyword(null,"fills","fills",902966780),cljs.core.PersistentVector.EMPTY),radius_attrs], 0)));
});
app.common.files.shapes_builder.parse_circle_attrs = (function app$common$files$shapes_builder$parse_circle_attrs(attrs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(attrs)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.common.data.parse_double)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563)], null));
});
app.common.files.shapes_builder.create_circle_shape = (function app$common$files$shapes_builder$create_circle_shape(name,frame_id,svg_data,p__67373){
var map__67374 = p__67373;
var map__67374__$1 = cljs.core.__destructure_map(map__67374);
var data = map__67374__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67374__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var vec__67375 = app.common.files.shapes_builder.parse_circle_attrs(attrs);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67375,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67375,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67375,(2),null);
var rx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67375,(3),null);
var ry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67375,(4),null);
var transform = app.common.geom.matrix.transform_in(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(svg_data),app.common.svg.parse_transform(new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(attrs)));
var rx__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(r,rx);
var ry__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(r,ry);
var rx__$2 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(rx__$1,(0));
var ry__$2 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(ry__$1,(0));
var cx__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(cx,(0));
var cy__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(cy,(0));
var origin = app.common.geom.point.negate(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(svg_data));
var rect = app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(((cx__$1 - rx__$2) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(origin)),((cy__$1 - ry__$2) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(origin)),((2) * rx__$2),((2) * ry__$2));
var props = app.common.svg.attrs__GT_props.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"cx","cx",1272694324),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563),new cljs.core.Keyword(null,"transform","transform",1381301764)], 0)));
return app.common.types.shape.setup_shape(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.files.shapes_builder.calculate_rect_metadata(rect,transform),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362)),new cljs.core.Keyword(null,"name","name",1843675177),name),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id),new cljs.core.Keyword(null,"svg-viewbox","svg-viewbox",-255575146),rect),new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),props),new cljs.core.Keyword(null,"fills","fills",902966780),cljs.core.PersistentVector.EMPTY));
});
app.common.files.shapes_builder.create_image_shape = (function app$common$files$shapes_builder$create_image_shape(name,frame_id,svg_data,p__67386){
var map__67387 = p__67386;
var map__67387__$1 = cljs.core.__destructure_map(map__67387);
var data = map__67387__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67387__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var transform = app.common.geom.matrix.transform_in(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(svg_data),app.common.svg.parse_transform(new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(attrs)));
var image_url = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205).cljs$core$IFn$_invoke$arity$1(attrs);
}
})();
var image_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(svg_data,new cljs.core.Keyword(null,"image-data","image-data",-377483758)),image_url);
var metadata = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(image_data),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(image_data),new cljs.core.Keyword(null,"mtype","mtype",-1724656120),new cljs.core.Keyword(null,"mtype","mtype",-1724656120).cljs$core$IFn$_invoke$arity$1(image_data),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(image_data)], null);
var origin = app.common.geom.point.negate(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(svg_data));
var rect = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(app.common.files.shapes_builder.parse_rect_attrs(attrs),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(origin)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(origin));
var props = app.common.svg.attrs__GT_props.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205)], 0)));
if((!((image_data == null)))){
return app.common.types.shape.setup_shape(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.files.shapes_builder.calculate_rect_metadata(rect,transform),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628)),new cljs.core.Keyword(null,"name","name",1843675177),name),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id),new cljs.core.Keyword(null,"fills","fills",902966780),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(1),new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),metadata], null)], null)),new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata),new cljs.core.Keyword(null,"svg-viewbox","svg-viewbox",-255575146),rect),new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),props));
} else {
return null;
}
});
app.common.files.shapes_builder.setup_fill = (function app$common$files$shapes_builder$setup_fill(shape){
var color_attr = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"fill","fill",883462889)));
var color_attr__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color_attr,"currentColor"))?"#000000":color_attr);
var color_style = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"style","style",-496642736)),new cljs.core.Keyword(null,"fill","fill",883462889)));
var color_style__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color_style,"currentColor"))?"#000000":color_style);
var G__67420 = shape;
var G__67420__$1 = ((app.common.types.color.color_string_QMARK_(color_attr__$1))?cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__67420,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),cljs.core.dissoc,new cljs.core.Keyword(null,"fill","fill",883462889)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),new cljs.core.Keyword(null,"style","style",-496642736)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"fill","fill",883462889)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fills","fills",902966780),(0),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903)], null),app.common.types.color.parse(color_attr__$1)):G__67420);
var G__67420__$2 = ((app.common.types.color.color_string_QMARK_(color_style__$1))?cljs.core.assoc_in(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__67420__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),new cljs.core.Keyword(null,"style","style",-496642736)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"fill","fill",883462889)),new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),cljs.core.dissoc,new cljs.core.Keyword(null,"fill","fill",883462889)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fills","fills",902966780),(0),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903)], null),app.common.types.color.parse(color_style__$1)):G__67420__$1);
var G__67420__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = ((app.common.types.color.color_string_QMARK_(color_attr__$1)) || (app.common.types.color.color_string_QMARK_(color_style__$1)));
if(and__5023__auto__){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981));
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__67420__$2,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),cljs.core.dissoc,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),new cljs.core.Keyword(null,"style","style",-496642736)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fills","fills",902966780),(0),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170)], null),app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981)),(1))):G__67420__$2);
if(cljs.core.truth_((function (){var and__5023__auto__ = ((app.common.types.color.color_string_QMARK_(color_attr__$1)) || (app.common.types.color.color_string_QMARK_(color_style__$1)));
if(and__5023__auto__){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"style","style",-496642736)),new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc_in(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__67420__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),new cljs.core.Keyword(null,"style","style",-496642736)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981)),new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),cljs.core.dissoc,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fills","fills",902966780),(0),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170)], null),app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"style","style",-496642736)),new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981)),(1)));
} else {
return G__67420__$3;
}
});
app.common.files.shapes_builder.setup_stroke = (function app$common$files$shapes_builder$setup_stroke(shape){
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"style","style",-496642736));
var stroke = (function (){var or__5025__auto__ = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stroke","stroke",1741823555).cljs$core$IFn$_invoke$arity$1(attrs));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stroke","stroke",1741823555).cljs$core$IFn$_invoke$arity$1(style));
}
})();
var color = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stroke,"currentColor"))?"#000000":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stroke,"none"))?null:((app.common.types.color.color_string_QMARK_(stroke))?app.common.types.color.parse(stroke):null)));
var opacity = (((!((color == null))))?app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"strokeOpacity","strokeOpacity",-565583263).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"strokeOpacity","strokeOpacity",-565583263).cljs$core$IFn$_invoke$arity$1(style);
}
})(),(1)):null);
var width = (((!((color == null))))?app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332).cljs$core$IFn$_invoke$arity$1(style);
}
})(),(1)):null);
var linecap = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"strokeLinecap","strokeLinecap",-1974748357));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"strokeLinecap","strokeLinecap",-1974748357));
}
})();
var linecap__$1 = (function (){var G__67439 = linecap;
var G__67439__$1 = (((G__67439 == null))?null:cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(G__67439));
if((G__67439__$1 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__67439__$1);
}
})();
var attrs__$1 = app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var G__67441 = attrs;
if((!((color == null)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67441,new cljs.core.Keyword(null,"stroke","stroke",1741823555),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),new cljs.core.Keyword(null,"strokeOpacity","strokeOpacity",-565583263)], 0));
} else {
return G__67441;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),(function (style__$1){
var G__67442 = style__$1;
if((!((color == null)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67442,new cljs.core.Keyword(null,"stroke","stroke",1741823555),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),new cljs.core.Keyword(null,"strokeOpacity","strokeOpacity",-565583263)], 0));
} else {
return G__67442;
}
})));
var G__67444 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),attrs__$1);
var G__67444__$1 = (((!((color == null))))?cljs.core.assoc_in(G__67444,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952),(0),new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937)], null),color):G__67444);
var G__67444__$2 = (((((!((color == null)))) && ((!((opacity == null))))))?cljs.core.assoc_in(G__67444__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952),(0),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159)], null),opacity):G__67444__$1);
var G__67444__$3 = (((((!((color == null)))) && ((!((width == null))))))?cljs.core.assoc_in(G__67444__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952),(0),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435)], null),width):G__67444__$2);
var G__67444__$4 = (((((!((linecap__$1 == null)))) && (((app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(linecap__$1,new cljs.core.Keyword(null,"round","round",2009433328))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(linecap__$1,new cljs.core.Keyword(null,"square","square",812434677)))))))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__67444__$3,new cljs.core.Keyword(null,"stroke-cap-start","stroke-cap-start",-2018645757),linecap__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stroke-cap-end","stroke-cap-end",-411370737),linecap__$1,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),linecap__$1], 0)):G__67444__$3);
if(cljs.core.truth_(app.common.data.any_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"strokes","strokes",-1645650952)),(0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"strokeColor","strokeColor",-1017463338),new cljs.core.Keyword(null,"strokeOpacity","strokeOpacity",-565583263),new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),new cljs.core.Keyword(null,"strokeLinecap","strokeLinecap",-1974748357),new cljs.core.Keyword(null,"strokeCapStart","strokeCapStart",-1203895731),new cljs.core.Keyword(null,"strokeCapEnd","strokeCapEnd",-120833567)], 0)))){
return cljs.core.assoc_in(G__67444__$4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952),(0),new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146)], null),new cljs.core.Keyword(null,"svg","svg",856789142));
} else {
return G__67444__$4;
}
});
app.common.files.shapes_builder.setup_opacity = (function app$common$files$shapes_builder$setup_opacity(shape){
var G__67449 = shape;
var G__67449__$1 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"opacity","opacity",397153780)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__67449,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),cljs.core.dissoc,new cljs.core.Keyword(null,"opacity","opacity",397153780)),new cljs.core.Keyword(null,"opacity","opacity",397153780),app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"opacity","opacity",397153780)),(1))):G__67449);
var G__67449__$2 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"style","style",-496642736)),new cljs.core.Keyword(null,"opacity","opacity",397153780)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__67449__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),new cljs.core.Keyword(null,"style","style",-496642736)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"opacity","opacity",397153780)),new cljs.core.Keyword(null,"opacity","opacity",397153780),app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"style","style",-496642736)),new cljs.core.Keyword(null,"opacity","opacity",397153780)),(1))):G__67449__$1);
var G__67449__$3 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"mixBlendMode","mixBlendMode",362779252)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__67449__$2,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),cljs.core.dissoc,new cljs.core.Keyword(null,"mixBlendMode","mixBlendMode",362779252)),new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224),app.common.files.shapes_builder.assert_valid_blend_mode(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"mixBlendMode","mixBlendMode",362779252)))):G__67449__$2);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"style","style",-496642736)),new cljs.core.Keyword(null,"mixBlendMode","mixBlendMode",362779252)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__67449__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),new cljs.core.Keyword(null,"style","style",-496642736)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"mixBlendMode","mixBlendMode",362779252)),new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224),app.common.files.shapes_builder.assert_valid_blend_mode(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"style","style",-496642736)),new cljs.core.Keyword(null,"mixBlendMode","mixBlendMode",362779252))));
} else {
return G__67449__$3;
}
});
app.common.files.shapes_builder.setup_other = (function app$common$files$shapes_builder$setup_other(shape){
var G__67457 = shape;
var G__67457__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"display","display",242065432)),"none"))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__67457,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),new cljs.core.Keyword(null,"style","style",-496642736)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"display","display",242065432)),new cljs.core.Keyword(null,"hidden","hidden",-312506092),true):G__67457);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"style","style",-496642736)),new cljs.core.Keyword(null,"display","display",242065432)),"none")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__67457__$1,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),cljs.core.dissoc,new cljs.core.Keyword(null,"display","display",242065432)),new cljs.core.Keyword(null,"hidden","hidden",-312506092),true);
} else {
return G__67457__$1;
}
});
/**
 * Given a tag returns its layer name
 */
app.common.files.shapes_builder.tag__GT_name = (function app$common$files$shapes_builder$tag__GT_name(tag){
var suffix = ((typeof tag === 'string')?tag:(((tag instanceof cljs.core.Keyword))?app.common.data.name(tag):(((tag == null))?"node":""+(tag ?? "")
)));
return ""+"svg-"+(suffix ?? "");
});
/**
 * Filters out false positive references that are not valid def IDs.
 * Filters out:
 * - Colors in style attributes (hex colors like #f9dd67)
 * - Style fragments that contain CSS keywords (like stop-opacity)
 * - References that don't exist in defs
 */
app.common.files.shapes_builder.filter_valid_def_references = (function app$common$files$shapes_builder$filter_valid_def_references(ref_ids,defs){
var is_style_fragment_QMARK_ = (function (ref_id){
var or__5025__auto__ = app.common.types.color.hex_color_string_QMARK_(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ref_id)].join(''));
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cuerdas.core.includes_QMARK_(ref_id,";");
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = cuerdas.core.includes_QMARK_(ref_id,"stop-opacity");
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return cuerdas.core.includes_QMARK_(ref_id,"stop-color");
}
}
}
});
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67458_SHARP_){
return cljs.core.contains_QMARK_(defs,p1__67458_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(is_style_fragment_QMARK_,ref_ids));
});
app.common.files.shapes_builder.parse_svg_element = (function app$common$files$shapes_builder$parse_svg_element(frame_id,svg_data,p__67468,unames){
var map__67469 = p__67468;
var map__67469__$1 = cljs.core.__destructure_map(map__67469);
var element = map__67469__$1;
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67469__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67469__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var hidden = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67469__$1,new cljs.core.Keyword(null,"hidden","hidden",-312506092));
var name = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.files.shapes_builder.tag__GT_name(tag);
}
})();
var att_refs = app.common.svg.find_attr_references(attrs);
var defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(svg_data,new cljs.core.Keyword(null,"defs","defs",1398449717));
var valid_refs = app.common.files.shapes_builder.filter_valid_def_references(att_refs,defs);
var all_refs = app.common.svg.find_def_references(defs,valid_refs);
var references = app.common.files.shapes_builder.filter_valid_def_references(all_refs,defs);
var href_id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return " ";
}
}
})();
var href_id__$1 = ((((typeof href_id === 'string') && ((cljs.core.count(href_id) > (0)))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(href_id,(1)):href_id);
var use_tag_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"use","use",-1846382424),tag)) && ((((!((href_id__$1 == null)))) && (cljs.core.contains_QMARK_(defs,href_id__$1)))));
if(use_tag_QMARK_){
var use_data = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(defs,href_id__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),(function (p1__67461_SHARP_){
return app.common.data.deep_merge.cljs$core$IFn$_invoke$arity$2(p1__67461_SHARP_,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698)], 0)));
}));
var displacement = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(attrs,"0")),app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(attrs,"0")));
var disp_matrix = ""+(app.common.geom.matrix.translate_matrix.cljs$core$IFn$_invoke$arity$1(displacement) ?? "");
var element__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"g","g",1738089905)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.dissoc,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),new cljs.core.Keyword(null,"transform","transform",1381301764)], 0)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),app.common.svg.add_transform,disp_matrix),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [use_data], null));
return (app.common.files.shapes_builder.parse_svg_element.cljs$core$IFn$_invoke$arity$4 ? app.common.files.shapes_builder.parse_svg_element.cljs$core$IFn$_invoke$arity$4(frame_id,svg_data,element__$1,unames) : app.common.files.shapes_builder.parse_svg_element.call(null,frame_id,svg_data,element__$1,unames));
} else {
var shape = (function (){var G__67484 = tag;
var G__67484__$1 = (((G__67484 instanceof cljs.core.Keyword))?G__67484.fqn:null);
switch (G__67484__$1) {
case "g":
case "a":
case "svg":
return app.common.files.shapes_builder.create_group(name,frame_id,svg_data,element);

break;
case "rect":
return app.common.files.shapes_builder.create_rect_shape(name,frame_id,svg_data,element);

break;
case "circle":
case "ellipse":
return app.common.files.shapes_builder.create_circle_shape(name,frame_id,svg_data,element);

break;
case "path":
return app.common.files.shapes_builder.create_path_shape(name,frame_id,svg_data,element);

break;
case "polyline":
return app.common.files.shapes_builder.create_path_shape(name,frame_id,svg_data,app.common.svg.polyline__GT_path(element));

break;
case "polygon":
return app.common.files.shapes_builder.create_path_shape(name,frame_id,svg_data,app.common.svg.polygon__GT_path(element));

break;
case "line":
return app.common.files.shapes_builder.create_path_shape(name,frame_id,svg_data,app.common.svg.line__GT_path(element));

break;
case "image":
return app.common.files.shapes_builder.create_image_shape(name,frame_id,svg_data,element);

break;
default:
return app.common.files.shapes_builder.create_raw_svg(name,frame_id,svg_data,element);

}
})();
if((!((shape == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67491 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(app.common.files.shapes_builder.setup_other(app.common.files.shapes_builder.setup_opacity(app.common.files.shapes_builder.setup_stroke(app.common.files.shapes_builder.setup_fill(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"svg-defs","svg-defs",364869720),cljs.core.select_keys(defs,references)))))),new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),(function (attrs__$1){
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs__$1))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs__$1,new cljs.core.Keyword(null,"style","style",-496642736));
} else {
return attrs__$1;
}
}));
if(hidden){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67491,new cljs.core.Keyword(null,"hidden","hidden",-312506092),true);
} else {
return G__67491;
}
})(),(function (){var G__67492 = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(element);
if(cljs.core.contains_QMARK_(app.common.svg.parent_tags,tag)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.svg.inherit_attributes,attrs),G__67492);
} else {
return G__67492;
}
})()], null);
} else {
return null;
}
}
});

//# sourceMappingURL=app.common.files.shapes_builder.js.map
