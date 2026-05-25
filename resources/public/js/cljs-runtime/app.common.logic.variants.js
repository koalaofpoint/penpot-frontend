import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.helpers.js";
import "./app.common.files.variant.js";
import "./app.common.logic.libraries.js";
import "./app.common.logic.shapes.js";
import "./app.common.logic.variant_properties.js";
import "./app.common.types.component.js";
import "./app.common.types.container.js";
import "./app.common.types.file.js";
import "./app.common.types.variant.js";
import "./app.common.uuid.js";
goog.provide('app.common.logic.variants');
app.common.logic.variants.generate_add_new_variant = (function app$common$logic$variants$generate_add_new_variant(changes,shape,variant_id,new_component_id,new_shape_id,prop_num){
var data = app.common.files.changes_builder.get_library_data(changes);
var objects = app.common.files.changes_builder.get_objects(changes);
var component_id = new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape);
var value = [app.common.types.variant.value_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.last(app.common.files.variant.extract_properties_values(data,objects,variant_id)))) + (1)))].join('');
var vec__67926 = app.common.logic.libraries.generate_duplicate_component.cljs$core$IFn$_invoke$arity$variadic(changes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null),component_id,new_component_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-shape-id","new-shape-id",954303512),new_shape_id,new cljs.core.Keyword(null,"apply-changes-local-library?","apply-changes-local-library?",1077602630),true], null)], 0));
var new_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67926,(0),null);
var changes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67926,(1),null);
var G__67929 = changes__$1;
var G__67929__$1 = (((prop_num >= (0)))?app.common.logic.variant_properties.generate_update_property_value(G__67929,new_component_id,prop_num,value):G__67929);
return app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$4(G__67929__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_shape], null),(0));

});
app.common.logic.variants.generate_path = (function app$common$logic$variants$generate_path(path,objects,base_id,shape){
var get_type = (function (p1__67930_SHARP_){
var G__67931 = p1__67930_SHARP_;
var G__67931__$1 = (((G__67931 instanceof cljs.core.Keyword))?G__67931.fqn:null);
switch (G__67931__$1) {
case "frame":
return new cljs.core.Keyword(null,"container","container",-1736937707);

break;
case "group":
return new cljs.core.Keyword(null,"container","container",-1736937707);

break;
case "rect":
return new cljs.core.Keyword(null,"shape","shape",1190694006);

break;
case "circle":
return new cljs.core.Keyword(null,"shape","shape",1190694006);

break;
case "bool":
return new cljs.core.Keyword(null,"shape","shape",1190694006);

break;
case "path":
return new cljs.core.Keyword(null,"shape","shape",1190694006);

break;
default:
return p1__67930_SHARP_;

}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))){
return path;
} else {
var G__67932 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape)))].join('');
var G__67933 = objects;
var G__67934 = base_id;
var G__67935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
return (app.common.logic.variants.generate_path.cljs$core$IFn$_invoke$arity$4 ? app.common.logic.variants.generate_path.cljs$core$IFn$_invoke$arity$4(G__67932,G__67933,G__67934,G__67935) : app.common.logic.variants.generate_path.call(null,G__67932,G__67933,G__67934,G__67935));
}
});
/**
 * Adds a new property :shape-path to the shape, with the path of the shape.
 * Suffixes like -1, -2, etc. are added to ensure uniqueness.
 */
app.common.logic.variants.add_unique_path = (function app$common$logic$variants$add_unique_path(shapes,objects,base_id){
var unique_path = (function app$common$logic$variants$add_unique_path_$_unique_path(shape,counts){
var path = app.common.logic.variants.generate_path("",objects,base_id,shape);
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,path,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join(''),cljs.core.update.cljs$core$IFn$_invoke$arity$3(counts,path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(1)))], null);
});
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__67936,shape){
var vec__67937 = p__67936;
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67937,(0),null);
var counts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67937,(1),null);
var vec__67940 = unique_path(shape,counts);
var shape_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67940,(0),null);
var counts_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67940,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"shape-path","shape-path",79876289),shape_path)),counts_SINGLEQUOTE_], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),shapes));
});
/**
 * As part of the keep-touched process on a switch, given a child on the original
 * copy that was swapped (orig-swapped-child), and its related shape on the new copy
 * (related-shape-in-new), move the orig-swapped-child into the parent of
 * related-shape-in-new, fix its swap-slot if needed, and then delete
 * related-shape-in-new
 */
app.common.logic.variants.keep_swapped_item = (function app$common$logic$variants$keep_swapped_item(changes,related_shape_in_new,orig_swapped_child,ldata,page,swap_ref_id){
var before_changes = app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$5(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_page(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$0(),page),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page)),app.common.uuid.zero,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [orig_swapped_child], null),(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-altering-copies","allow-altering-copies",1930197967),true], null));
var objects = app.common.files.changes_builder.get_objects(changes);
var prev_swap_slot = app.common.types.component.get_swap_slot(orig_swapped_child);
var current_parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(related_shape_in_new));
var pos = app.common.data.index_of(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(current_parent),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(related_shape_in_new));
return cljs.core.second(app.common.logic.shapes.generate_delete_shapes.cljs$core$IFn$_invoke$arity$6((function (){var G__67944 = app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$5(app.common.files.changes_builder.concat_changes(before_changes,changes),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(related_shape_in_new),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [orig_swapped_child], null),pos,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-altering-copies","allow-altering-copies",1930197967),true], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_swap_slot,swap_ref_id)){
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(G__67944,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(orig_swapped_child)], null),(function (p1__67943_SHARP_){
return app.common.types.component.set_swap_slot(app.common.types.component.remove_swap_slot(p1__67943_SHARP_),new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(related_shape_in_new));
}));
} else {
return G__67944;
}
})(),ldata,page,objects,app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(related_shape_in_new)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-altering-copies","allow-altering-copies",1930197967),true], null)));
});
/**
 * Check if any ancestor of a shape (between base-parent-id and shape) was swapped
 */
app.common.logic.variants.child_of_swapped_QMARK_ = (function app$common$logic$variants$child_of_swapped_QMARK_(shape,objects,base_parent_id){
var ancestors = cljs.core.seq(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__67945_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(base_parent_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__67945_SHARP_));
}),app.common.types.container.get_parent_heads(objects,shape)));
var num_ancestors = cljs.core.count(ancestors);
var ancestors__$1 = ((((ancestors) && (((3) <= num_ancestors))))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(ancestors),(1),(num_ancestors - (1))):null);
return cljs.core.some(app.common.types.component.get_swap_slot,ancestors__$1);
});
/**
 * Get the shape referenced by the shape-ref of the near main of the shape,
 * recursively repeated until find a shape-ref with parent-id as ancestor.
 * It will return the shape or nil if it doesn't found any
 */
app.common.logic.variants.find_shape_ref_child_of = (function app$common$logic$variants$find_shape_ref_child_of(container,libraries,shape,parent_id){
var ref_shape = app.common.types.file.find_ref_shape.cljs$core$IFn$_invoke$arity$variadic(null,container,libraries,shape,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"with-context?","with-context?",-56752853),true], 0));
var ref_shape_container = (cljs.core.truth_(ref_shape)?new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ref_shape)):null);
var ref_shape_parents_set = (cljs.core.truth_(ref_shape)?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,app.common.data.xf_COLON_map_id,app.common.files.helpers.get_parents_with_self(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(ref_shape_container),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ref_shape))):null);
if((((ref_shape == null)) || (cljs.core.contains_QMARK_(ref_shape_parents_set,parent_id)))){
return ref_shape;
} else {
return (app.common.logic.variants.find_shape_ref_child_of.cljs$core$IFn$_invoke$arity$4 ? app.common.logic.variants.find_shape_ref_child_of.cljs$core$IFn$_invoke$arity$4(ref_shape_container,libraries,ref_shape,parent_id) : app.common.logic.variants.find_shape_ref_child_of.call(null,ref_shape_container,libraries,ref_shape,parent_id));
}
});
/**
 * Adds to the :touched attr of a shape the content of
 * the :touched of all its chain of ref shapes
 */
app.common.logic.variants.add_touched_from_ref_chain = (function app$common$logic$variants$add_touched_from_ref_chain(container,libraries,shape){
var new_touched = app.common.types.file.get_touched_from_ref_chain_until_target_ref(container,libraries,shape,null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"touched","touched",-609134419),new_touched);
});
/**
 * This is used as part of the switch process, when you switch from
 * an original-shape to a new-shape. It generate changes to
 * copy the touched attributes on the shapes children of the original-shape
 * into the related children of the new-shape.
 * This relation is tricky. The shapes are related if:
 * * On the main components, both have the same name (the name on the copies are ignored)
 * * Both has the same type of ancestors, on the same order (see generate-path for the
 *   translation of the types)
 */
app.common.logic.variants.generate_keep_touched = (function app$common$logic$variants$generate_keep_touched(changes,new_shape,original_shape,original_shapes,page,libraries,ldata){
var objects = app.common.files.changes_builder.get_objects(changes);
var container = app.common.types.container.make_container(page,new cljs.core.Keyword(null,"page","page",849072397));
var page_objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page);
var orig_touched = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__67947_SHARP_){
return app.common.logic.variants.child_of_swapped_QMARK_(p1__67947_SHARP_,page_objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(original_shape));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,new cljs.core.Keyword(null,"touched","touched",-609134419)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67946_SHARP_){
return app.common.logic.variants.add_touched_from_ref_chain(container,libraries,p1__67946_SHARP_);
}),original_shapes)));
var new_shapes_w_path = app.common.logic.variants.add_unique_path(cljs.core.reverse(app.common.files.helpers.get_children_with_self(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_shape))),objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_shape));
var new_shapes_map = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shape-path","shape-path",79876289),cljs.core.identity)),new_shapes_w_path);
var orig_base_ref_shape = app.common.types.file.find_remote_shape.cljs$core$IFn$_invoke$arity$variadic(container,libraries,original_shape,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-context?","with-context?",-56752853),true], null)], 0));
var orig_ref_objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(orig_base_ref_shape)));
var o_ref_shapes_wp = app.common.logic.variants.add_unique_path(cljs.core.reverse(app.common.files.helpers.get_children_with_self(orig_ref_objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(orig_base_ref_shape))),orig_ref_objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(orig_base_ref_shape));
var o_ref_shapes_p_map = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"shape-path","shape-path",79876289))),o_ref_shapes_wp);
var vec__67948 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__67951,orig_child_touched){
var vec__67952 = p__67951;
var changes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67952,(0),null);
var parent_of_swapped = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67952,(1),null);
var swap_slot = app.common.types.component.get_swap_slot(orig_child_touched);
var orig_ref_shape = (cljs.core.truth_(swap_slot)?null:app.common.logic.variants.find_shape_ref_child_of(container,libraries,orig_child_touched,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(orig_base_ref_shape)));
var orig_ref_id = (cljs.core.truth_(swap_slot)?app.common.types.file.find_ref_id_for_swapped(orig_child_touched,container,libraries):new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(orig_ref_shape));
var shape_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(o_ref_shapes_p_map,orig_ref_id);
var related_shape_in_new = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_shapes_map,shape_path);
var parents_of_swapped = (cljs.core.truth_(related_shape_in_new)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parent_of_swapped,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(related_shape_in_new)):parent_of_swapped);
var changes__$2 = (cljs.core.truth_(related_shape_in_new)?(cljs.core.truth_(swap_slot)?app.common.logic.variants.keep_swapped_item(changes__$1,related_shape_in_new,orig_child_touched,ldata,page,orig_ref_id):app.common.logic.libraries.update_attrs_on_switch(changes__$1,related_shape_in_new,orig_child_touched,new_shape,original_shape,orig_ref_shape,container)):changes__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [changes__$2,parents_of_swapped], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [changes,cljs.core.PersistentVector.EMPTY], null),orig_touched);
var changes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67948,(0),null);
var parents_of_swapped = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67948,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [changes__$1,parents_of_swapped], null);
});

//# sourceMappingURL=app.common.logic.variants.js.map
