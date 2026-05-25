import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.shapes.js";
import "./app.common.logic.variant_properties.js";
import "./app.common.types.component.js";
import "./app.common.types.container.js";
import "./app.common.types.pages_list.js";
import "./app.common.types.shape.interactions.js";
import "./app.common.types.shape.layout.js";
import "./app.common.types.shape.token.js";
import "./app.common.types.text.js";
import "./app.common.types.token.js";
import "./app.common.uuid.js";
import "./clojure.set.js";
goog.provide('app.common.logic.shapes');
app.common.logic.shapes.text_typography_style_attrs = cljs.core.set(app.common.types.text.text_typography_attrs);
/**
 * When updating attributes that have a token applied, we must unapply it, because the value
 *   of the attribute now has been given directly, and does not come from the token.
 *   When applying a typography asset style we also unapply any typographic tokens.
 */
app.common.logic.shapes.generate_unapply_tokens = (function app$common$logic$shapes$generate_unapply_tokens(changes,objects,changed_sub_attr){
var new_objects = app.common.files.changes_builder.get_objects(changes);
var mod_obj_changes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56584_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__56584_SHARP_),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456));
}),new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(changes));
var text_changed_attrs = (function (shape){
var new_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
var attrs = app.common.types.text.get_diff_attrs(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(new_shape));
var attrs__$1 = (function (){var G__56598 = attrs;
var G__56598__$1 = ((cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(app.common.logic.shapes.text_typography_style_attrs,attrs)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__56598,app.common.types.token.typography_keys):G__56598);
if(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(and__5023__auto__)){
return app.common.types.shape.token.font_weight_applied_QMARK_(shape);
} else {
return and__5023__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56598__$1,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583));
} else {
return G__56598__$1;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.types.token.shape_attr__GT_token_attrs,attrs__$1));
});
var check_attr = (function (shape,changes__$1,attr){
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871),cljs.core.PersistentArrayMap.EMPTY);
var token_attrs = ((((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"content","content",15833224)))))?text_changed_attrs(shape):app.common.types.token.shape_attr__GT_token_attrs.cljs$core$IFn$_invoke$arity$2(attr,changed_sub_attr));
if(cljs.core.truth_(cljs.core.some((function (p1__56589_SHARP_){
return cljs.core.contains_QMARK_(tokens,p1__56589_SHARP_);
}),token_attrs))){
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(changes__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null),(function (p1__56590_SHARP_){
return app.common.types.token.unapply_tokens_from_shape(p1__56590_SHARP_,token_attrs);
}));
} else {
return changes__$1;
}
});
var check_shape = (function (changes__$1,mod_obj_change){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mod_obj_change));
var attrs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__56591_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__56591_SHARP_),new cljs.core.Keyword(null,"set","set",304602554));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attr","attr",-604132353))),new cljs.core.Keyword(null,"operations","operations",1630691895).cljs$core$IFn$_invoke$arity$1(mod_obj_change));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(check_attr,shape),changes__$1,attrs);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(check_shape,changes,mod_obj_changes);
});
app.common.logic.shapes.generate_update_shapes = (function app$common$logic$shapes$generate_update_shapes(changes,ids,update_fn,objects,p__56611){
var map__56612 = p__56611;
var map__56612__$1 = cljs.core.__destructure_map(map__56612);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56612__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var changed_sub_attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56612__$1,new cljs.core.Keyword(null,"changed-sub-attr","changed-sub-attr",280796634));
var ignore_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56612__$1,new cljs.core.Keyword(null,"ignore-tree","ignore-tree",864252283));
var ignore_touched = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56612__$1,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699));
var with_objects_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56612__$1,new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428));
var changes__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes__$1,id){
var opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"ignore-geometry?","ignore-geometry?",836794794),cljs.core.get.cljs$core$IFn$_invoke$arity$2(ignore_tree,id),new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),ignore_touched,new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),with_objects_QMARK_], null);
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(changes__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),update_fn,app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(opts));
}),app.common.files.changes_builder.with_objects(changes,objects),ids);
var grid_ids = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.grid_layout_QMARK_,objects),ids);
var changes__$2 = (function (){var G__56615 = app.common.files.changes_builder.reorder_grid_children(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(changes__$1,grid_ids,app.common.types.shape.layout.assign_cell_positions,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true], null)),ids);
if(cljs.core.not(ignore_touched)){
return app.common.logic.shapes.generate_unapply_tokens(G__56615,objects,changed_sub_attr);
} else {
return G__56615;
}
})();
return changes__$2;
});
app.common.logic.shapes.generate_update_shape_flags = (function app$common$logic$shapes$generate_update_shape_flags(changes,ids,objects,p__56617){
var map__56619 = p__56617;
var map__56619__$1 = cljs.core.__destructure_map(map__56619);
var flags = map__56619__$1;
var blocked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56619__$1,new cljs.core.Keyword(null,"blocked","blocked",181326681));
var hidden = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56619__$1,new cljs.core.Keyword(null,"hidden","hidden",-312506092));
var update_fn = (function (obj){
var G__56621 = obj;
var G__56621__$1 = ((cljs.core.boolean_QMARK_(blocked))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56621,new cljs.core.Keyword(null,"blocked","blocked",181326681),blocked):G__56621);
if(cljs.core.boolean_QMARK_(hidden)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56621__$1,new cljs.core.Keyword(null,"hidden","hidden",-312506092),hidden);
} else {
return G__56621__$1;
}
});
var ids__$1 = ((cljs.core.boolean_QMARK_(blocked))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(ids,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__56616_SHARP_){
return app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,p1__56616_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ids], 0))):ids);
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(changes,ids__$1,update_fn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),null,new cljs.core.Keyword(null,"blocked","blocked",181326681),null], null), null)], null));
});
app.common.logic.shapes.generate_delete_shapes = (function app$common$logic$shapes$generate_delete_shapes(var_args){
var G__56634 = arguments.length;
switch (G__56634) {
case 6:
return app.common.logic.shapes.generate_delete_shapes.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 3:
return app.common.logic.shapes.generate_delete_shapes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.logic.shapes.generate_delete_shapes.cljs$core$IFn$_invoke$arity$6 = (function (changes,file,page,objects,ids,options){
return app.common.logic.shapes.generate_delete_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_page(changes,page),objects),file),ids,options);
}));

(app.common.logic.shapes.generate_delete_shapes.cljs$core$IFn$_invoke$arity$3 = (function (changes,ids,p__56641){
var map__56642 = p__56641;
var map__56642__$1 = cljs.core.__destructure_map(map__56642);
var ignore_touched = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56642__$1,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699));
var allow_altering_copies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56642__$1,new cljs.core.Keyword(null,"allow-altering-copies","allow-altering-copies",1930197967));
var ignore_children_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56642__$1,new cljs.core.Keyword(null,"ignore-children-fn","ignore-children-fn",576274564),cljs.core.constantly(false));
var ignore_mask = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56642__$1,new cljs.core.Keyword(null,"ignore-mask","ignore-mask",-19600370),false);
var ignore_flows_for = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56642__$1,new cljs.core.Keyword(null,"ignore-flows-for","ignore-flows-for",-641074503),cljs.core.PersistentHashSet.EMPTY);
var objects = app.common.files.changes_builder.get_objects(changes);
var data = app.common.files.changes_builder.get_library_data(changes);
var page_id = app.common.files.changes_builder.get_page_id(changes);
var page = (function (){var or__5025__auto__ = app.common.files.changes_builder.get_page(changes);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.pages_list.get_page(data,page_id);
}
})();
var ids__$1 = app.common.files.helpers.clean_loops(objects,ids);
var in_component_copy_QMARK_ = (function (shape_id){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,shape_id);
var and__5023__auto__ = app.common.types.container.has_any_copy_parent_QMARK_(objects,shape);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(allow_altering_copies);
} else {
return and__5023__auto__;
}
});
var vec__56646 = (function (){var ids_seq = cljs.core.seq(ids__$1);
var ids_to_delete = cljs.core.PersistentVector.EMPTY;
var ids_to_hide = cljs.core.PersistentVector.EMPTY;
while(true){
var id = cljs.core.first(ids_seq);
if((id == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ids_to_delete,ids_to_hide], null);
} else {
if(cljs.core.truth_(in_component_copy_QMARK_(id))){
var G__56752 = cljs.core.rest(ids_seq);
var G__56753 = ids_to_delete;
var G__56754 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ids_to_hide,id);
ids_seq = G__56752;
ids_to_delete = G__56753;
ids_to_hide = G__56754;
continue;
} else {
var G__56755 = cljs.core.rest(ids_seq);
var G__56756 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ids_to_delete,id);
var G__56757 = ids_to_hide;
ids_seq = G__56755;
ids_to_delete = G__56756;
ids_to_hide = G__56757;
continue;
}
}
break;
}
})();
var ids_to_delete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56646,(0),null);
var ids_to_hide = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56646,(1),null);
var lookup = app.common.data.getf(objects);
var groups_to_unmask = (cljs.core.truth_(ignore_mask)?null:(function (){
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (group_ids,id){
var obj = lookup(id);
var parent = lookup(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(obj));
if(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"masked-group","masked-group",1899947873).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.first(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(group_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent));
} else {
return group_ids;
}
}),cljs.core.PersistentHashSet.EMPTY,ids_to_delete);

return cljs.core.PersistentVector.EMPTY;
})()
);
var interacting_shapes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (shape){
var interactions = new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(shape);
return cljs.core.some((function (p1__56628_SHARP_){
var and__5023__auto__ = app.common.types.shape.interactions.has_destination(p1__56628_SHARP_);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.contains_QMARK_(ids_to_delete,new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(p1__56628_SHARP_));
} else {
return and__5023__auto__;
}
}),interactions);
}),cljs.core.vals(objects));
var id_to_delete_QMARK_ = cljs.core.set(ids_to_delete);
var changes__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes__$1,p__56664){
var vec__56665 = p__56664;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56665,(0),null);
var flow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56665,(1),null);
if(cljs.core.truth_((function (){var and__5023__auto__ = (function (){var G__56668 = new cljs.core.Keyword(null,"starting-frame","starting-frame",-1907986271).cljs$core$IFn$_invoke$arity$1(flow);
return (id_to_delete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? id_to_delete_QMARK_.cljs$core$IFn$_invoke$arity$1(G__56668) : id_to_delete_QMARK_.call(null,G__56668));
})();
if(cljs.core.truth_(and__5023__auto__)){
return (!(cljs.core.contains_QMARK_(ignore_flows_for,new cljs.core.Keyword(null,"starting-frame","starting-frame",-1907986271).cljs$core$IFn$_invoke$arity$1(flow))));
} else {
return and__5023__auto__;
}
})())){
return app.common.files.changes_builder.set_flow(app.common.files.changes_builder.with_page(changes__$1,page),id,null);
} else {
return changes__$1;
}
}),changes,new cljs.core.Keyword(null,"flows","flows",-1369576628).cljs$core$IFn$_invoke$arity$1(page));
var all_parents = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,id){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(res,app.common.files.helpers.get_parent_ids(objects,id));
}),app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ids_to_delete,ids_to_hide));
var descendants_to_delete = cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),cljs.core.reverse(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,id){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(res,app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$3(objects,id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-children-fn","ignore-children-fn",576274564),ignore_children_fn], null)));
}),cljs.core.PersistentVector.EMPTY,ids_to_delete)));
var find_all_empty_parents = (function app$common$logic$shapes$recursive_find_empty_parents(empty_parents){
var all_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(empty_parents,ids_to_delete);
var contains_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,all_ids);
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(lookup),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__56629_SHARP_){
var or__5025__auto__ = app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__56629_SHARP_);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = app.common.files.helpers.bool_shape_QMARK_(p1__56629_SHARP_);
if(or__5025__auto____$1){
return or__5025__auto____$1;
} else {
return app.common.types.component.is_variant_container_QMARK_(p1__56629_SHARP_);
}
}
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__56630_SHARP_){
return cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(contains_QMARK_,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(p1__56630_SHARP_)));
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092))], 0));
var parents = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,xform,all_parents);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(empty_parents,parents)){
return empty_parents;
} else {
return app$common$logic$shapes$recursive_find_empty_parents(parents);
}
});
var empty_parents = ((cljs.core.not(allow_altering_copies))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),find_all_empty_parents(cljs.core.PersistentHashSet.EMPTY)):cljs.core.PersistentHashSet.EMPTY);
var components_to_delete = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (components,id){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data));
if(and__5023__auto__){
return new cljs.core.Keyword(null,"main-instance","main-instance",476264761).cljs$core$IFn$_invoke$arity$1(shape);
} else {
return and__5023__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(components,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape));
} else {
return components;
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ids_to_delete,descendants_to_delete));
var ids_set = cljs.core.set(ids_to_delete);
var guides_to_delete = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56631_SHARP_){
return cljs.core.contains_QMARK_(ids_set,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(p1__56631_SHARP_));
}),cljs.core.vals(new cljs.core.Keyword(null,"guides","guides",-1398390510).cljs$core$IFn$_invoke$arity$1(page))));
var changes__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes__$2,guide_id){
return app.common.files.changes_builder.set_flow(app.common.files.changes_builder.with_page(changes__$2,page),guide_id,null);
}),changes__$1,guides_to_delete);
var changes__$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes__$3,component_id){
return app.common.files.changes_builder.delete_component(changes__$3,component_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page));
}),changes__$2,components_to_delete);
var changes__$4 = app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.resize_parents(app.common.files.changes_builder.remove_objects.cljs$core$IFn$_invoke$arity$2(app.common.files.changes_builder.remove_objects.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.remove_objects.cljs$core$IFn$_invoke$arity$3(app.common.logic.shapes.generate_update_shape_flags(changes__$3,ids_to_hide,objects,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),true], null)),descendants_to_delete,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null)),ids_to_delete,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),ignore_touched], null)),empty_parents),all_parents),groups_to_unmask,(function (shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"masked-group","masked-group",1899947873),false);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),interacting_shapes),(function (shape){
return app.common.data.update_when(shape,new cljs.core.Keyword(null,"interactions","interactions",550841811),(function (interactions){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__56632_SHARP_){
var and__5023__auto__ = app.common.types.shape.interactions.has_destination(p1__56632_SHARP_);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.contains_QMARK_(ids_to_delete,new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(p1__56632_SHARP_));
} else {
return and__5023__auto__;
}
})),interactions);
}));
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [all_parents,changes__$4], null);
}));

(app.common.logic.shapes.generate_delete_shapes.cljs$lang$maxFixedArity = 6);

app.common.logic.shapes.generate_relocate = (function app$common$logic$shapes$generate_relocate(var_args){
var args__5755__auto__ = [];
var len__5749__auto___56770 = arguments.length;
var i__5750__auto___56771 = (0);
while(true){
if((i__5750__auto___56771 < len__5749__auto___56770)){
args__5755__auto__.push((arguments[i__5750__auto___56771]));

var G__56773 = (i__5750__auto___56771 + (1));
i__5750__auto___56771 = G__56773;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((4) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((4)),(0),null)):null);
return app.common.logic.shapes.generate_relocate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5756__auto__);
});

(app.common.logic.shapes.generate_relocate.cljs$core$IFn$_invoke$arity$variadic = (function (changes,parent_id,to_index,ids,p__56695){
var map__56696 = p__56695;
var map__56696__$1 = cljs.core.__destructure_map(map__56696);
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56696__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
var ignore_parents_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56696__$1,new cljs.core.Keyword(null,"ignore-parents?","ignore-parents?",1793745865));
var objects = app.common.files.changes_builder.get_objects(changes);
var ids__$1 = app.common.files.helpers.order_by_indexed_shapes(objects,ids);
var shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),ids__$1);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
var all_parents = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([parent_id]),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__56677_SHARP_){
return app.common.files.helpers.get_parent_id(objects,p1__56677_SHARP_);
})),ids__$1);
var parents = (cljs.core.truth_(ignore_parents_QMARK_)?cljs.core.PersistentHashSet.createAsIfByAssoc([parent_id]):all_parents);
var children_ids = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__56678_SHARP_){
return app.common.files.helpers.get_children_ids_with_self(objects,p1__56678_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ids__$1], 0));
var child_heads = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__56682_SHARP_){
return app.common.types.container.get_child_heads(objects,p1__56682_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ids__$1], 0));
var child_heads_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),child_heads);
var variant_shapes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.types.component.is_variant_QMARK_,shapes);
var component_main_parent = app.common.types.container.find_component_main.cljs$core$IFn$_invoke$arity$3(objects,parent,false);
var groups_to_delete = (function (){var current_id = cljs.core.first(parents);
var to_check = cljs.core.rest(parents);
var removed_id_QMARK_ = cljs.core.set(ids__$1);
var result = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.not(current_id)){
return result;
} else {
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,current_id);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(group))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_id,parent_id)) && (cljs.core.empty_QMARK_(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(removed_id_QMARK_,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(group)))))))){
var to_check__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(to_check,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.files.helpers.get_parent_id(objects,current_id)], null));
var G__56778 = cljs.core.first(to_check__$1);
var G__56779 = cljs.core.rest(to_check__$1);
var G__56780 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(removed_id_QMARK_,current_id);
var G__56781 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,current_id);
current_id = G__56778;
to_check = G__56779;
removed_id_QMARK_ = G__56780;
result = G__56781;
continue;
} else {
var G__56782 = cljs.core.first(to_check);
var G__56783 = cljs.core.rest(to_check);
var G__56784 = removed_id_QMARK_;
var G__56785 = result;
current_id = G__56782;
to_check = G__56783;
removed_id_QMARK_ = G__56784;
result = G__56785;
continue;
}
}
break;
}
})();
var groups_to_unmask = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (group_ids,id){
var obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
var parent__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(obj));
if(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"masked-group","masked-group",1899947873).cljs$core$IFn$_invoke$arity$1(parent__$1);
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.first(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent__$1)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent__$1),parent_id)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(group_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent__$1));
} else {
return group_ids;
}
}),cljs.core.PersistentHashSet.EMPTY,ids__$1);
var vec__56697 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__56704,id){
var vec__56708 = p__56704;
var shapes_to_detach = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56708,(0),null);
var shapes_to_deroot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56708,(1),null);
var shapes_to_reroot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56708,(2),null);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
var parent__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
var component_shape = app.common.types.container.get_component_shape.cljs$core$IFn$_invoke$arity$2(objects,shape);
var component_shape_parent = app.common.types.container.get_component_shape.cljs$core$IFn$_invoke$arity$3(objects,parent__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-main?","allow-main?",-837994938),true], null));
var root_parent = app.common.types.container.get_instance_root(objects,parent__$1);
var detach_QMARK_ = ((app.common.types.component.in_component_copy_not_head_QMARK_(shape)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component_shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component_shape_parent))));
var deroot_QMARK_ = (function (){var and__5023__auto__ = app.common.types.component.instance_root_QMARK_(shape);
if(and__5023__auto__){
return root_parent;
} else {
return and__5023__auto__;
}
})();
var reroot_QMARK_ = ((app.common.types.component.subinstance_head_QMARK_(shape)) && (cljs.core.not(component_shape_parent)));
var ids_to_detach = ((detach_QMARK_)?cljs.core.cons(id,app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,id)):null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__56714 = shapes_to_detach;
if(detach_QMARK_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__56714,ids_to_detach);
} else {
return G__56714;
}
})(),(function (){var G__56715 = shapes_to_deroot;
if(cljs.core.truth_(deroot_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56715,id);
} else {
return G__56715;
}
})(),(function (){var G__56716 = shapes_to_reroot;
if(reroot_QMARK_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56716,id);
} else {
return G__56716;
}
})()], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__56683_SHARP_){
return app.common.types.container.get_child_heads(objects,p1__56683_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ids__$1], 0))));
var shapes_to_detach = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56697,(0),null);
var shapes_to_deroot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56697,(1),null);
var shapes_to_reroot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56697,(2),null);
var index_cell_data = (cljs.core.truth_(to_index)?app.common.types.shape.layout.get_cell_by_index(parent,to_index):null);
var cell__$1 = (function (){var or__5025__auto__ = cell;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto__ = index_cell_data;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(index_cell_data),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(index_cell_data)], null);
} else {
return and__5023__auto__;
}
}
})();
var empty_variant_cont = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (to_delete,parent_id__$1){
var parent__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id__$1);
if(cljs.core.truth_((function (){var and__5023__auto__ = app.common.types.component.is_variant_container_QMARK_(parent__$1);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.empty_QMARK_(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(ids__$1),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent__$1)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(to_delete,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent__$1));
} else {
return to_delete;
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56684_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__56684_SHARP_,parent_id);
}),all_parents));
var G__56720 = app.common.files.changes_builder.resize_parents((function (){var G__56721 = (function (){var G__56722 = app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.remove_objects.cljs$core$IFn$_invoke$arity$2(app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$4((function (){var G__56723 = (function (){var G__56724 = (function (){var G__56725 = (function (){var G__56726 = app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3((function (){var G__56727 = (function (){var G__56728 = changes;
if((!(app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)))){
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(G__56728,ids__$1,app.common.types.shape.layout.remove_layout_item_data),ids__$1,app.common.types.token.unapply_layout_item_tokens);
} else {
return G__56728;
}
})();
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(app.common.uuid.zero,parent_id)) && (app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)))){
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(G__56727,ids__$1,(function (p1__56685_SHARP_){
var G__56729 = p1__56685_SHARP_;
if(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__56685_SHARP_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56729,new cljs.core.Keyword(null,"hide-in-viewer","hide-in-viewer",1478442312),true);
} else {
return G__56729;
}
}));
} else {
return G__56727;
}
})(),child_heads_ids,(function (shape){
var G__56730 = shape;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(component_main_parent,app.common.types.container.find_component_main.cljs$core$IFn$_invoke$arity$3(objects,shape,false))){
return app.common.types.component.remove_swap_slot(G__56730);
} else {
return G__56730;
}
}));
if(cljs.core.truth_(app.common.types.container.get_instance_root(objects,parent))){
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(G__56726,children_ids,(function (p1__56686_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56686_SHARP_,new cljs.core.Keyword(null,"component-root","component-root",-485271026));
}));
} else {
return G__56726;
}
})();
if(cljs.core.not(app.common.types.container.get_instance_root(objects,parent))){
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(G__56725,child_heads_ids,(function (p1__56687_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56687_SHARP_,new cljs.core.Keyword(null,"component-root","component-root",-485271026),true);
}));
} else {
return G__56725;
}
})();
if(cljs.core.not(app.common.types.component.is_variant_container_QMARK_(parent))){
return app.common.logic.variant_properties.generate_make_shapes_no_variant(G__56724,variant_shapes);
} else {
return G__56724;
}
})();
if(cljs.core.truth_(app.common.types.component.is_variant_container_QMARK_(parent))){
return app.common.logic.variant_properties.generate_make_shapes_variant(G__56723,child_heads,parent);
} else {
return G__56723;
}
})(),parent_id,shapes,to_index),groups_to_delete),groups_to_unmask,(function (shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"masked-group","masked-group",1899947873),false);
})),shapes_to_detach,app.common.types.component.detach_shape),shapes_to_deroot,(function (shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"component-root","component-root",-485271026),null);
})),shapes_to_reroot,(function (shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"component-root","component-root",-485271026),true);
})),ids__$1,(function (shape){
var frame_id = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"frame","frame",-1711082588)))?new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent):new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(parent));
var moved_shape = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),app.common.geom.shapes.default_constraints_h(moved_shape),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),app.common.geom.shapes.default_constraints_v(moved_shape)], 0));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null)),parents,(function (parent__$1){
if(app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent__$1)){
var G__56734 = parent__$1;
var G__56734__$1 = (cljs.core.truth_(app.common.types.shape.layout.change_h_sizing_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent__$1),objects,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent__$1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56734,new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),new cljs.core.Keyword(null,"fix","fix",-1031773329)):G__56734);
if(cljs.core.truth_(app.common.types.shape.layout.change_v_sizing_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent__$1),objects,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent__$1)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56734__$1,new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),new cljs.core.Keyword(null,"fix","fix",-1031773329));
} else {
return G__56734__$1;
}
} else {
return parent__$1;
}
}));
if(cljs.core.truth_(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,parent_id))){
return app.common.files.changes_builder.reorder_grid_children(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(G__56722,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),(function (frame,objects__$1){
var vec__56735 = cell__$1;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56735,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56735,(1),null);
return app.common.types.shape.layout.assign_cell_positions((function (){var G__56738 = frame;
if((!((cell__$1 == null)))){
return app.common.types.shape.layout.assign_cells(app.common.types.shape.layout.push_into_cell(app.common.types.shape.layout.free_cell_shapes(G__56738,ids__$1),ids__$1,row,column),objects__$1);
} else {
return G__56738;
}
})(),objects__$1);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null));
} else {
return G__56722;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"blocked","blocked",181326681).cljs$core$IFn$_invoke$arity$1(parent))){
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(G__56721,ids__$1,(function (p1__56688_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56688_SHARP_,new cljs.core.Keyword(null,"blocked","blocked",181326681),true);
}));
} else {
return G__56721;
}
})(),parents);
if(cljs.core.seq(empty_variant_cont)){
return (function (p1__56689_SHARP_){
return cljs.core.second(app.common.logic.shapes.generate_delete_shapes.cljs$core$IFn$_invoke$arity$3(p1__56689_SHARP_,empty_variant_cont,cljs.core.PersistentArrayMap.EMPTY));
})(G__56720);
} else {
return G__56720;
}
}));

(app.common.logic.shapes.generate_relocate.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(app.common.logic.shapes.generate_relocate.cljs$lang$applyTo = (function (seq56690){
var G__56691 = cljs.core.first(seq56690);
var seq56690__$1 = cljs.core.next(seq56690);
var G__56692 = cljs.core.first(seq56690__$1);
var seq56690__$2 = cljs.core.next(seq56690__$1);
var G__56693 = cljs.core.first(seq56690__$2);
var seq56690__$3 = cljs.core.next(seq56690__$2);
var G__56694 = cljs.core.first(seq56690__$3);
var seq56690__$4 = cljs.core.next(seq56690__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56691,G__56692,G__56693,G__56694,seq56690__$4);
}));

app.common.logic.shapes.change_show_in_viewer = (function app$common$logic$shapes$change_show_in_viewer(shape,hide_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"hide-in-viewer","hide-in-viewer",1478442312),hide_QMARK_);
});
app.common.logic.shapes.add_new_interaction = (function app$common$logic$shapes$add_new_interaction(shape,interaction){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"interactions","interactions",550841811),app.common.types.shape.interactions.add_interaction,interaction);
});
app.common.logic.shapes.show_in_viewer = (function app$common$logic$shapes$show_in_viewer(shape){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"hide-in-viewer","hide-in-viewer",1478442312));
});

//# sourceMappingURL=app.common.logic.shapes.js.map
