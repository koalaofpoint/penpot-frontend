import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.files.helpers.js";
import "./app.common.logging.js";
import "./app.common.time.js";
import "./app.common.types.token.js";
import "./app.common.types.tokens_lib.js";
import "./app.config.js";
import "./app.main.data.helpers.js";
import "./app.main.data.style_dictionary.js";
import "./app.main.data.tokenscript.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.thumbnails.js";
import "./app.main.data.workspace.tokens.application.js";
import "./app.main.data.workspace.undo.js";
import "./beicon.v2.core.js";
import "./clojure.data.js";
import "./clojure.set.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.tokens.propagation');
app.common.logging.loggers.set("app.main.data.workspace.tokens.propagation",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"warn","warn",-436710552)));
/**
 * Like d/deep-merge but unions set values.
 */
app.main.data.workspace.tokens.propagation.deep_merge = (function app$main$data$workspace$tokens$propagation$deep_merge(var_args){
var G__52344 = arguments.length;
switch (G__52344) {
case 2:
return app.main.data.workspace.tokens.propagation.deep_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___52405 = arguments.length;
var i__5750__auto___52406 = (0);
while(true){
if((i__5750__auto___52406 < len__5749__auto___52405)){
args_arr__5774__auto__.push((arguments[i__5750__auto___52406]));

var G__52407 = (i__5750__auto___52406 + (1));
i__5750__auto___52406 = G__52407;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return app.main.data.workspace.tokens.propagation.deep_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(app.main.data.workspace.tokens.propagation.deep_merge.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.map_QMARK_(a)){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.tokens.propagation.deep_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
} else {
if(cljs.core.set_QMARK_(a)){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
return b;

}
}
}));

(app.main.data.workspace.tokens.propagation.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rest){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.main.data.workspace.tokens.propagation.deep_merge,a,cljs.core.cons(b,rest));
}));

/** @this {Function} */
(app.main.data.workspace.tokens.propagation.deep_merge.cljs$lang$applyTo = (function (seq52341){
var G__52342 = cljs.core.first(seq52341);
var seq52341__$1 = cljs.core.next(seq52341);
var G__52343 = cljs.core.first(seq52341__$1);
var seq52341__$2 = cljs.core.next(seq52341__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52342,G__52343,seq52341__$2);
}));

(app.main.data.workspace.tokens.propagation.deep_merge.cljs$lang$maxFixedArity = (2));

/**
 * Flattens a map where the keys are sets of keywords.
 */
app.main.data.workspace.tokens.propagation.flatten_set_keyed_map = (function app$main$data$workspace$tokens$propagation$flatten_set_keyed_map(m,into_m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__52346){
var vec__52347 = p__52346;
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52347,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52347,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,action], null);
}),ks));
}),into_m,m);
});
app.main.data.workspace.tokens.propagation.filter_existing_values_QMARK_ = false;
app.main.data.workspace.tokens.propagation.attributes__GT_shape_update = cljs.core.PersistentHashMap.fromArrays([new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),null], null), null),app.common.types.token.stroke_width_keys,app.common.types.token.border_radius_keys,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-gap","column-gap",384822863),null,new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),null], null), null),app.common.types.token.text_decoration_keys,app.common.types.token.rotation_keys,app.common.types.token.font_family_keys,app.common.types.token.typography_token_keys,app.common.types.token.color_keys,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"m3","m3",-703635357),null,new cljs.core.Keyword(null,"m4","m4",-1624571215),null,new cljs.core.Keyword(null,"m2","m2",-587003306),null,new cljs.core.Keyword(null,"m1","m1",-108094626),null], null), null),app.common.types.token.font_weight_keys,app.common.types.token.sizing_keys,app.common.types.token.opacity_keys,app.common.types.token.font_size_keys,app.common.types.token.shadow_keys,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366),null,new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548),null,new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548),null,new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p2","p2",905500641),null,new cljs.core.Keyword(null,"p4","p4",-1090126814),null,new cljs.core.Keyword(null,"p3","p3",1731040739),null,new cljs.core.Keyword(null,"p1","p1",-936759954),null], null), null),app.common.types.token.text_case_keys,app.common.types.token.letter_spacing_keys],[app.main.data.workspace.tokens.application.update_line_height,app.main.data.workspace.tokens.application.update_stroke_width,app.main.data.workspace.tokens.application.update_shape_radius_for_corners,app.main.data.workspace.tokens.application.apply_dimensions_token,app.main.data.workspace.tokens.application.update_layout_gap,app.main.data.workspace.tokens.application.update_text_decoration,app.main.data.workspace.tokens.application.update_rotation,app.main.data.workspace.tokens.application.update_font_family,app.main.data.workspace.tokens.application.update_typography,app.main.data.workspace.tokens.application.update_fill_stroke,app.main.data.workspace.tokens.application.update_layout_item_margin,app.main.data.workspace.tokens.application.update_font_weight,app.main.data.workspace.tokens.application.apply_dimensions_token,app.main.data.workspace.tokens.application.update_opacity,app.main.data.workspace.tokens.application.update_font_size,app.main.data.workspace.tokens.application.update_shadow,app.main.data.workspace.tokens.application.update_shape_position,app.main.data.workspace.tokens.application.update_layout_sizing_limits,app.main.data.workspace.tokens.application.update_layout_padding,app.main.data.workspace.tokens.application.update_text_case,app.main.data.workspace.tokens.application.update_letter_spacing]);
app.main.data.workspace.tokens.propagation.attribute_actions_map = app.main.data.workspace.tokens.propagation.flatten_set_keyed_map(app.main.data.workspace.tokens.propagation.attributes__GT_shape_update,cljs.core.PersistentArrayMap.EMPTY);
app.main.data.workspace.tokens.propagation.invert_collect_key_vals = (function app$main$data$workspace$tokens$propagation$invert_collect_key_vals(xs,resolved_tokens,shape){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__52350){
var vec__52351 = p__52350;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52351,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52351,(1),null);
var resolved_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(resolved_tokens,v);
var resolved_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(resolved_token,new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626));
var skip_QMARK_ = ((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(resolved_tokens,v))) || (((app.main.data.workspace.tokens.propagation.filter_existing_values_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,k),resolved_value)))));
if(skip_QMARK_){
return acc;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,resolved_value,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),k);
}
}),cljs.core.PersistentArrayMap.EMPTY,xs);
});
app.main.data.workspace.tokens.propagation.split_attribute_groups = (function app$main$data$workspace$tokens$propagation$split_attribute_groups(attrs_values_map){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__52354){
var vec__52355 = p__52354;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52355,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52355,(1),null);
if(cljs.core.truth_(cljs.core.some(attrs,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null)))){
var vec__52358 = clojure.data.diff(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),attrs);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52358,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52358,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52358,(2),null);
var G__52361 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,b,v);
if(cljs.core.truth_(a)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52361,a,v);
} else {
return G__52361;
}
} else {
if(cljs.core.truth_(cljs.core.some(attrs,app.common.types.token.spacing_keys))){
var vec__52362 = clojure.data.diff(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-gap","column-gap",384822863),null,new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),null], null), null),attrs);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52362,(0),null);
var rst = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52362,(1),null);
var gap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52362,(2),null);
var vec__52365 = clojure.data.diff(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p2","p2",905500641),null,new cljs.core.Keyword(null,"p4","p4",-1090126814),null,new cljs.core.Keyword(null,"p3","p3",1731040739),null,new cljs.core.Keyword(null,"p1","p1",-936759954),null], null), null),rst);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52365,(0),null);
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52365,(1),null);
var padding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52365,(2),null);
var G__52368 = acc;
var G__52368__$1 = ((cljs.core.seq(gap))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52368,gap,v):G__52368);
var G__52368__$2 = ((cljs.core.seq(position))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52368__$1,position,v):G__52368__$1);
if(cljs.core.seq(padding)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52368__$2,padding,v);
} else {
return G__52368__$2;
}
} else {
if(cljs.core.truth_(attrs)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,attrs,v);
} else {
return null;
}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,attrs_values_map);
});
app.main.data.workspace.tokens.propagation.shape_ids_by_values = (function app$main$data$workspace$tokens$propagation$shape_ids_by_values(attrs_values_map,object_id){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52369){
var vec__52370 = p__52369;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52370,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52370,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([value,cljs.core.PersistentHashSet.createAsIfByAssoc([object_id])])], null);
}),attrs_values_map));
});
app.main.data.workspace.tokens.propagation.collect_shapes_update_info = (function app$main$data$workspace$tokens$propagation$collect_shapes_update_info(resolved_tokens,objects){
var items = cljs.core.seq(objects);
var frame_ids = cljs.core.PersistentHashSet.EMPTY;
var text_ids = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.PersistentArrayMap.EMPTY;
while(true){
var temp__5823__auto__ = cljs.core.first(items);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__52379 = temp__5823__auto__;
var shape_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52379,(0),null);
var map__52382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52379,(1),null);
var map__52382__$1 = cljs.core.__destructure_map(map__52382);
var shape = map__52382__$1;
var applied_tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52382__$1,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871));
var applied_tokens__$1 = app.main.data.workspace.tokens.propagation.split_attribute_groups(app.main.data.workspace.tokens.propagation.shape_ids_by_values(app.main.data.workspace.tokens.propagation.invert_collect_key_vals(applied_tokens,resolved_tokens,shape),shape_id));
var parent_frame_id = app.common.files.helpers.get_shape_id_root_frame(objects,shape_id);
var G__52414 = cljs.core.rest(items);
var G__52415 = (cljs.core.truth_(parent_frame_id)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frame_ids,parent_frame_id):frame_ids);
var G__52416 = ((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(text_ids,shape_id):text_ids);
var G__52417 = app.main.data.workspace.tokens.propagation.deep_merge.cljs$core$IFn$_invoke$arity$2(tokens,applied_tokens__$1);
items = G__52414;
frame_ids = G__52415;
text_ids = G__52416;
tokens = G__52417;
continue;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tokens,frame_ids,text_ids], null);
}
break;
}
});
app.main.data.workspace.tokens.propagation.actionize_shapes_update_info = (function app$main$data$workspace$tokens$propagation$actionize_shapes_update_info(page_id,shapes_update_info){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__52384){
var vec__52385 = p__52384;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52385,(0),null);
var update_infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52385,(1),null);
var action = cljs.core.some(app.main.data.workspace.tokens.propagation.attribute_actions_map,attrs);
if(cljs.core.fn_QMARK_(action)){
} else {
throw (new Error(["Assert failed: ","missing action function on attributes->shape-update","\n","(fn? action)"].join('')));
}

return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52388){
var vec__52389 = p__52388;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52389,(0),null);
var shape_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52389,(1),null);
return (action.cljs$core$IFn$_invoke$arity$4 ? action.cljs$core$IFn$_invoke$arity$4(v,shape_ids,attrs,page_id) : action.call(null,v,shape_ids,attrs,page_id));
}),update_infos);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shapes_update_info], 0));
});
/**
 * Propagate tokens values to all shapes where they are applied
 */
app.main.data.workspace.tokens.propagation.propagate_tokens = (function app$main$data$workspace$tokens$propagation$propagate_tokens(state,resolved_tokens){
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404));
var current_page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425));
var fdata = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,file_id);
var tpoint = app.common.time.tpoint_ms();
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.tokens.propagation",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),"START"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"propagate-tokens"], null)], null);
}),null)),null,null,"app.main.data.workspace.tokens.propagation",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}


return beicon.v2.core.finalize((function (_){
var elapsed = tpoint();
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.tokens.propagation",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),"END"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"propagate-tokens"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),elapsed], null)], null);
}),null)),null,null,"app.main.data.workspace.tokens.propagation",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}

return null;
}),beicon.v2.core.mapcat((function (page_id){
var page = app.main.data.helpers.get_page(fdata,page_id);
var vec__52394 = app.main.data.workspace.tokens.propagation.collect_shapes_update_info(resolved_tokens,new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page));
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52394,(0),null);
var frame_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52394,(1),null);
var text_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52394,(2),null);
var actions = app.main.data.workspace.tokens.propagation.actionize_shapes_update_info(page_id,attrs);
var map__52397 = cljs.core.group_by((function (p1__52392_SHARP_){
if(beicon.v2.core.observable_QMARK_(p1__52392_SHARP_)){
return new cljs.core.Keyword(null,"observable","observable",-1538858614);
} else {
return new cljs.core.Keyword(null,"normal","normal",-1519123858);
}
}),actions);
var map__52397__$1 = cljs.core.__destructure_map(map__52397);
var observable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52397__$1,new cljs.core.Keyword(null,"observable","observable",-1538858614));
var normal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52397__$1,new cljs.core.Keyword(null,"normal","normal",-1519123858));
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.tokens.propagation",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),"PROGRESS"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"propagate-tokens"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_id)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),tpoint()], null)], null);
}),null)),null,null,"app.main.data.workspace.tokens.propagation",new cljs.core.Keyword(null,"info","info",-317069002),true);
} else {
}


return beicon.v2.core.merge(((cljs.core.seq(observable))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(beicon.v2.core.merge,observable):null),((cljs.core.seq(normal))?beicon.v2.core.concat_all(beicon.v2.core.of(normal)):null),beicon.v2.core.mapcat((function (frame_id){
return beicon.v2.core.of(app.main.data.workspace.thumbnails.clear_thumbnail.cljs$core$IFn$_invoke$arity$4(file_id,page_id,frame_id,"frame"),app.main.data.workspace.thumbnails.clear_thumbnail.cljs$core$IFn$_invoke$arity$4(file_id,page_id,frame_id,"component"));
}),beicon.v2.core.from(frame_ids)),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(page_id,current_page_id))?beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(text_ids,(function (shape){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"position-data","position-data",-499622376));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null))):null));
}),beicon.v2.core.concat(beicon.v2.core.of(current_page_id),beicon.v2.core.filter((function (id){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,current_page_id);
}),beicon.v2.core.from(new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(fdata))))));
});
app.main.data.workspace.tokens.propagation.propagate_workspace_tokens = (function app$main$data$workspace$tokens$propagation$propagate_workspace_tokens(){
if((typeof app.main.data.workspace.tokens.propagation.propagate_workspace_tokens_52400 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.propagation.propagate_workspace_tokens_52400 = (function (meta52401){
this.meta52401 = meta52401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.propagation.propagate_workspace_tokens_52400.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.propagation.propagate_workspace_tokens_52400.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.propagation","propagate-workspace-tokens","app.main.data.workspace.tokens.propagation/propagate-workspace-tokens",-508121292);
}));

(app.main.data.workspace.tokens.propagation.propagate_workspace_tokens_52400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52402,meta52401__$1){
var self__ = this;
var _52402__$1 = this;
return (new app.main.data.workspace.tokens.propagation.propagate_workspace_tokens_52400(meta52401__$1));
}));

(app.main.data.workspace.tokens.propagation.propagate_workspace_tokens_52400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52402){
var self__ = this;
var _52402__$1 = this;
return self__.meta52401;
}));

(app.main.data.workspace.tokens.propagation.propagate_workspace_tokens_52400.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.propagation.propagate_workspace_tokens_52400.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var temp__5825__auto__ = app.common.types.tokens_lib.get_tokens_in_active_sets(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991)));
if(cljs.core.truth_(temp__5825__auto__)){
var tokens_tree = temp__5825__auto__;
return beicon.v2.core.mapcat((function (sd_tokens){
var undo_id = Symbol();
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction.cljs$core$IFn$_invoke$arity$variadic(undo_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"timeout","timeout",-318625318),false], 0))),app.main.data.workspace.tokens.propagation.propagate_tokens(state,sd_tokens),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)));
}),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"tokenscript","tokenscript",-1399248500)))?beicon.v2.core.of(app.common.data.update_vals(app.main.data.tokenscript.resolve_tokens(tokens_tree),(function (p1__52399_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__52399_SHARP_,new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626),app.main.data.tokenscript.tokenscript_symbols__GT_penpot_unit);
}))):app.main.data.style_dictionary.resolve_tokens(tokens_tree)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.tokens.propagation.propagate_workspace_tokens_52400(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.tokens.propagation.js.map
