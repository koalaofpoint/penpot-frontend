import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.files.helpers.js";
import "./app.common.types.shape_tree.js";
import "./app.common.uuid.js";
goog.provide('app.common.files.focus');
app.common.files.focus.focus_objects = (function app$common$files$focus$focus_objects(objects,focus){
var ids_with_children = ((app.common.data.not_empty_QMARK_(focus))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(focus,app.common.uuid.zero),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.get_children_ids,objects)),focus):null);
var G__53353 = objects;
if((!((ids_with_children == null)))){
return cljs.core.assoc_in(cljs.core.select_keys(G__53353,ids_with_children),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.uuid.zero,new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null),app.common.types.shape_tree.sort_z_index.cljs$core$IFn$_invoke$arity$2(objects,focus));
} else {
return G__53353;
}
});
app.common.files.focus.filter_not_focus = (function app$common$files$focus$filter_not_focus(objects,focus,ids){
var focused_ids = ((app.common.data.not_empty_QMARK_(focus))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(focus,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.get_children_ids,objects)),focus):null);
if((!((focused_ids == null)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__53359_SHARP_){
return cljs.core.contains_QMARK_(focused_ids,p1__53359_SHARP_);
})),ids);
} else {
return ids;
}
});
app.common.files.focus.is_in_focus_QMARK_ = (function app$common$files$focus$is_in_focus_QMARK_(objects,focus,id){
return app.common.data.seek.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,focus),cljs.core.cons(id,app.common.files.helpers.get_parent_ids(objects,id)));
});

//# sourceMappingURL=app.common.files.focus.js.map
