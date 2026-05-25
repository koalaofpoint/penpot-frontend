import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.types.modifiers.js";
goog.provide('app.common.geom.modif_tree');
/**
 * Add the given modifiers to the map of modifiers.
 */
app.common.geom.modif_tree.add_modifiers = (function app$common$geom$modif_tree$add_modifiers(modif_tree,id,modifiers){
if(app.common.types.modifiers.empty_QMARK_(modifiers)){
return modif_tree;
} else {
var old_modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(modif_tree,id),new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
var new_modifiers = app.common.types.modifiers.add_modifiers(old_modifiers,modifiers);
var G__68111 = modif_tree;
var G__68111__$1 = ((app.common.types.modifiers.empty_QMARK_(new_modifiers))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__68111,id):G__68111);
if((!(app.common.types.modifiers.empty_QMARK_(new_modifiers)))){
return cljs.core.assoc_in(G__68111__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null),new_modifiers);
} else {
return G__68111__$1;
}
}
});
/**
 * Merge two maps of modifiers into a single one
 */
app.common.geom.modif_tree.merge_modif_tree = (function app$common$geom$modif_tree$merge_modif_tree(modif_tree,other_tree){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (modif_tree__$1,p__68112){
var vec__68113 = p__68112;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68113,(0),null);
var map__68116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68113,(1),null);
var map__68116__$1 = cljs.core.__destructure_map(map__68116);
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68116__$1,new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
return app.common.geom.modif_tree.add_modifiers(modif_tree__$1,id,modifiers);
}),modif_tree,other_tree);
});
/**
 * Only applies the structure modifiers to the objects tree map
 */
app.common.geom.modif_tree.apply_structure_modifiers = (function app$common$geom$modif_tree$apply_structure_modifiers(objects,modif_tree){
var update_children_structure_modifiers = (function app$common$geom$modif_tree$apply_structure_modifiers_$_update_children_structure_modifiers(objects__$1,ids,modifiers){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__68117_SHARP_,p2__68118_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__68117_SHARP_,p2__68118_SHARP_,app.common.types.modifiers.apply_structure_modifiers,modifiers);
}),objects__$1,ids);
});
var apply_shape = (function app$common$geom$modif_tree$apply_structure_modifiers_$_apply_shape(objects__$1,p__68126){
var vec__68127 = p__68126;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68127,(0),null);
var map__68130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68127,(1),null);
var map__68130__$1 = cljs.core.__destructure_map(map__68130);
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68130__$1,new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
var G__68131 = objects__$1;
var G__68131__$1 = ((app.common.types.modifiers.has_structure_QMARK_(modifiers))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__68131,id,app.common.types.modifiers.apply_structure_modifiers,modifiers):G__68131);
if(((app.common.types.modifiers.has_structure_QMARK_(modifiers)) && (app.common.types.modifiers.has_structure_child_QMARK_(modifiers)))){
return update_children_structure_modifiers(G__68131__$1,app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects__$1,id),app.common.types.modifiers.select_child_structre_modifiers(modifiers));
} else {
return G__68131__$1;
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(apply_shape,objects,modif_tree);
});

//# sourceMappingURL=app.common.geom.modif_tree.js.map
