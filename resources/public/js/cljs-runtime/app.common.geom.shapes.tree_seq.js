import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.types.shape.layout.js";
import "./app.common.uuid.js";
goog.provide('app.common.geom.shapes.tree_seq');
/**
 * Given an id returns a sequence of its children
 */
app.common.geom.shapes.tree_seq.get_children_seq = (function app$common$geom$shapes$tree_seq$get_children_seq(id,objects){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53037_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__53037_SHARP_);
}),cljs.core.tree_seq((function (p1__53036_SHARP_){
return app.common.data.not_empty_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__53036_SHARP_),new cljs.core.Keyword(null,"shapes","shapes",1897594879)));
}),(function (id__$1){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id__$1);
var G__53038 = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape);
if(((app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (app.common.types.shape.layout.reverse_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))){
return cljs.core.reverse(G__53038);
} else {
return G__53038;
}
}),id));
});
app.common.geom.shapes.tree_seq.get_reflow_root = (function app$common$geom$shapes$tree_seq$get_reflow_root(var_args){
var G__53041 = arguments.length;
switch (G__53041) {
case 2:
return app.common.geom.shapes.tree_seq.get_reflow_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.geom.shapes.tree_seq.get_reflow_root.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.tree_seq.get_reflow_root.cljs$core$IFn$_invoke$arity$2 = (function (id,objects){
return app.common.geom.shapes.tree_seq.get_reflow_root.cljs$core$IFn$_invoke$arity$3(id,id,objects);
}));

(app.common.geom.shapes.tree_seq.get_reflow_root.cljs$core$IFn$_invoke$arity$3 = (function (current,last_root,objects){
while(true){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,current);
if((((!(shape))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.common.uuid.zero,current)))){
return last_root;
} else {
var parent_id = (shape?.parent_id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131)));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
if(((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)) && ((!(app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)))))){
return last_root;
} else {
if(((app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)) && (app.common.types.shape.layout.auto_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)))){
var G__53084 = parent_id;
var G__53085 = parent_id;
var G__53086 = objects;
current = G__53084;
last_root = G__53085;
objects = G__53086;
continue;
} else {
if(app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)){
return parent_id;
} else {
var G__53087 = parent_id;
var G__53088 = last_root;
var G__53089 = objects;
current = G__53087;
last_root = G__53088;
objects = G__53089;
continue;

}
}
}
}
break;
}
}));

(app.common.geom.shapes.tree_seq.get_reflow_root.cljs$lang$maxFixedArity = 3);

app.common.geom.shapes.tree_seq.search_common_roots = (function app$common$geom$shapes$tree_seq$search_common_roots(ids,objects){
var find_root = (function (roots,id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,app.common.uuid.zero)){
return roots;
} else {
var root = app.common.geom.shapes.tree_seq.get_reflow_root.cljs$core$IFn$_invoke$arity$2(id,objects);
var roots__$1 = ((app.common.files.helpers.has_children_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,root))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.common.files.helpers.is_child_QMARK_,objects,root)),roots):roots);
var contains_parent_QMARK_ = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,roots__$1),app.common.files.helpers.get_parent_ids(objects,root));
var G__53054 = roots__$1;
if(cljs.core.not(contains_parent_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__53054,root);
} else {
return G__53054;
}
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(find_root,cljs.core.PersistentHashSet.EMPTY,ids);
});
/**
 * Given the ids that have changed search for layout roots to recalculate
 */
app.common.geom.shapes.tree_seq.resolve_tree = (function app$common$geom$shapes$tree_seq$resolve_tree(ids,objects){
app.common.data.macros.runtime_assert("expr assert: (or (nil? ids) (set? ids))",(function (){
return (((ids == null)) || (cljs.core.set_QMARK_(ids)));
}));

var child_seq = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__53062_SHARP_){
return app.common.geom.shapes.tree_seq.get_children_seq(p1__53062_SHARP_,objects);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.geom.shapes.tree_seq.search_common_roots(ids,objects)], 0));
if(cljs.core.contains_QMARK_(ids,app.common.uuid.zero)){
return cljs.core.cons(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,app.common.uuid.zero),child_seq);
} else {
return child_seq;
}
});
/**
 * Resolves the subtree but only partialy from-to the parameters
 */
app.common.geom.shapes.tree_seq.resolve_subtree = (function app$common$geom$shapes$tree_seq$resolve_subtree(from_id,to_id,objects){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(app.common.data.take_until.cljs$core$IFn$_invoke$arity$2((function (p1__53066_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__53066_SHARP_),to_id);
}),app.common.geom.shapes.tree_seq.get_children_seq(from_id,objects)),cljs.core.rest(app.common.geom.shapes.tree_seq.get_children_seq(to_id,objects)));
});

//# sourceMappingURL=app.common.geom.shapes.tree_seq.js.map
