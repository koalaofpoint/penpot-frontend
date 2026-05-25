import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.bounds_map.js";
import "./app.common.geom.modif_tree.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.common.js";
import "./app.common.geom.shapes.constraints.js";
import "./app.common.geom.shapes.flex_layout.js";
import "./app.common.geom.shapes.grid_layout.js";
import "./app.common.geom.shapes.min_size_layout.js";
import "./app.common.geom.shapes.pixel_precision.js";
import "./app.common.geom.shapes.points.js";
import "./app.common.geom.shapes.transforms.js";
import "./app.common.geom.shapes.tree_seq.js";
import "./app.common.types.modifiers.js";
import "./app.common.types.shape.layout.js";
import "./app.common.uuid.js";
goog.provide('app.common.geom.modifiers');
/**
 * Propagates the modifiers from a parent too its children applying constraints if necesary
 */
app.common.geom.modifiers.set_children_modifiers = (function app$common$geom$modifiers$set_children_modifiers(modif_tree,children,objects,bounds,parent,transformed_parent_bounds,ignore_constraints){
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(modif_tree,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent)),new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
if(app.common.types.modifiers.empty_QMARK_(modifiers)){
return modif_tree;
} else {
if(app.common.types.modifiers.only_move_QMARK_(modifiers)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__68500_SHARP_,p2__68501_SHARP_){
return app.common.geom.modif_tree.add_modifiers(p1__68500_SHARP_,p2__68501_SHARP_,modifiers);
}),modif_tree,children);
} else {
var parent_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent);
var parent_bounds = app.common.geom.shapes.transforms.transform_bounds.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,parent_id)),app.common.types.modifiers.select_parent(modifiers));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (modif_tree__$1,child_id){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,child_id);
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
var child_bounds = cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,child_id));
var child_modifiers = app.common.geom.shapes.constraints.calc_child_modifiers(parent,child,modifiers,ignore_constraints,child_bounds,parent_bounds,transformed_parent_bounds);
return app.common.geom.modif_tree.add_modifiers(modif_tree__$1,child_id,child_modifiers);
} else {
return modif_tree__$1;
}
}),modif_tree,children);

}
}
});
app.common.geom.modifiers.set_flex_layout_modifiers = (function app$common$geom$modifiers$set_flex_layout_modifiers(modif_tree,children,objects,bounds,parent,transformed_parent_bounds){
var apply_modifiers = (function app$common$geom$modifiers$set_flex_layout_modifiers_$_apply_modifiers(bounds__$1,child){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child));
if(cljs.core.truth_(temp__5825__auto__)){
var child_bounds = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.shapes.points.parent_coords_bounds(cljs.core.deref(child_bounds),cljs.core.deref(transformed_parent_bounds)),child], null);
} else {
return null;
}
});
var set_child_modifiers = (function app$common$geom$modifiers$set_flex_layout_modifiers_$_set_child_modifiers(p__68513,p__68514){
var vec__68515 = p__68513;
var layout_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68515,(0),null);
var modif_tree__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68515,(1),null);
var vec__68518 = p__68514;
var child_bounds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68518,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68518,(1),null);
var vec__68521 = app.common.geom.shapes.flex_layout.layout_child_modifiers(parent,transformed_parent_bounds,child,child_bounds,layout_line);
var modifiers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68521,(0),null);
var layout_line__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68521,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [layout_line__$1,app.common.geom.modif_tree.add_modifiers(modif_tree__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child),modifiers)], null);
});
var bounds__$1 = app.common.geom.bounds_map.transform_bounds_map.cljs$core$IFn$_invoke$arity$4(bounds,objects,modif_tree,children);
var children__$1 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(apply_modifiers,bounds__$1),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.common.invalid_geometry_QMARK_,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),children)));
var layout_data = app.common.geom.shapes.flex_layout.calc_layout_data.cljs$core$IFn$_invoke$arity$5(parent,cljs.core.deref(transformed_parent_bounds),children__$1,bounds__$1,objects);
var children__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var G__68524 = children__$1;
if(cljs.core.not(new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474).cljs$core$IFn$_invoke$arity$1(layout_data))){
return cljs.core.reverse(G__68524);
} else {
return G__68524;
}
})());
var max_idx = (cljs.core.count(children__$2) - (1));
var layout_lines = new cljs.core.Keyword(null,"layout-lines","layout-lines",-1868555037).cljs$core$IFn$_invoke$arity$1(layout_data);
var modif_tree__$1 = modif_tree;
var layout_line = cljs.core.first(layout_lines);
var pending = cljs.core.rest(layout_lines);
var from_idx = (0);
while(true){
if((((!((layout_line == null)))) && ((from_idx <= max_idx)))){
var to_idx = (from_idx + new cljs.core.Keyword(null,"num-children","num-children",-1656107233).cljs$core$IFn$_invoke$arity$1(layout_line));
var children__$3 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children__$2,from_idx,to_idx);
var vec__68528 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(set_child_modifiers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [layout_line,modif_tree__$1], null),children__$3);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68528,(0),null);
var modif_tree__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68528,(1),null);
var G__68600 = modif_tree__$2;
var G__68601 = cljs.core.first(pending);
var G__68602 = cljs.core.rest(pending);
var G__68603 = to_idx;
modif_tree__$1 = G__68600;
layout_line = G__68601;
pending = G__68602;
from_idx = G__68603;
continue;
} else {
return modif_tree__$1;
}
break;
}
});
app.common.geom.modifiers.set_grid_layout_modifiers = (function app$common$geom$modifiers$set_grid_layout_modifiers(modif_tree,objects,bounds,parent,transformed_parent_bounds){
var apply_modifiers = (function app$common$geom$modifiers$set_grid_layout_modifiers_$_apply_modifiers(bounds__$1,child){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child));
if(cljs.core.truth_(temp__5825__auto__)){
var child_bounds = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.shapes.points.parent_coords_bounds(cljs.core.deref(child_bounds),cljs.core.deref(transformed_parent_bounds)),child], null);
} else {
return null;
}
});
var set_child_modifiers = (function app$common$geom$modifiers$set_grid_layout_modifiers_$_set_child_modifiers(modif_tree__$1,grid_data,cell_data,p__68535){
var vec__68536 = p__68535;
var child_bounds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68536,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68536,(1),null);
var modifiers = app.common.geom.shapes.grid_layout.child_modifiers(parent,transformed_parent_bounds,child,child_bounds,grid_data,cell_data);
return app.common.geom.modif_tree.add_modifiers(modif_tree__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child),modifiers);
});
var bounds__$1 = app.common.geom.bounds_map.transform_bounds_map.cljs$core$IFn$_invoke$arity$4(bounds,objects,modif_tree,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent));
var children = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(apply_modifiers,bounds__$1),app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$3(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remove-hidden","remove-hidden",-1900786853),true], null)));
var grid_data = app.common.geom.shapes.grid_layout.calc_layout_data.cljs$core$IFn$_invoke$arity$5(parent,cljs.core.deref(transformed_parent_bounds),children,bounds__$1,objects);
var modif_tree__$1 = modif_tree;
var bound_PLUS_child = cljs.core.first(children);
var pending = cljs.core.rest(children);
while(true){
if((!((bound_PLUS_child == null)))){
var cell_data = app.common.geom.shapes.grid_layout.get_cell_data(grid_data,cljs.core.deref(transformed_parent_bounds),bound_PLUS_child);
var modif_tree__$2 = (function (){var G__68540 = modif_tree__$1;
if((!((cell_data == null)))){
return set_child_modifiers(G__68540,grid_data,cell_data,bound_PLUS_child);
} else {
return G__68540;
}
})();
var G__68605 = modif_tree__$2;
var G__68606 = cljs.core.first(pending);
var G__68607 = cljs.core.rest(pending);
modif_tree__$1 = G__68605;
bound_PLUS_child = G__68606;
pending = G__68607;
continue;
} else {
return modif_tree__$1;
}
break;
}
});
/**
 * Propagate modifiers to its children
 */
app.common.geom.modifiers.set_modifiers_constraints = (function app$common$geom$modifiers$set_modifiers_constraints(objects,bounds,ignore_constraints,modif_tree,parent){
var parent_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent);
var children = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent);
var root_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.common.uuid.zero,parent_id);
var modifiers = app.common.types.modifiers.select_geometry(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(modif_tree,parent_id),new cljs.core.Keyword(null,"modifiers","modifiers",50378834)));
var has_modifiers_QMARK_ = app.common.types.modifiers.child_modifiers_QMARK_(modifiers);
var parent_QMARK_ = ((app.common.files.helpers.group_like_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)) || (app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)));
var transformed_parent_bounds = (new cljs.core.Delay((function (){
return app.common.geom.shapes.transforms.transform_bounds.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,parent_id)),modifiers);
}),null));
var G__68541 = modif_tree;
if(((has_modifiers_QMARK_) && (((parent_QMARK_) && ((!(root_QMARK_))))))){
return app.common.geom.modifiers.set_children_modifiers(G__68541,children,objects,bounds,parent,transformed_parent_bounds,ignore_constraints);
} else {
return G__68541;
}
});
/**
 * Propagate modifiers to its children
 */
app.common.geom.modifiers.set_modifiers_layout = (function app$common$geom$modifiers$set_modifiers_layout(var_args){
var G__68545 = arguments.length;
switch (G__68545) {
case 4:
return app.common.geom.modifiers.set_modifiers_layout.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return app.common.geom.modifiers.set_modifiers_layout.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.modifiers.set_modifiers_layout.cljs$core$IFn$_invoke$arity$4 = (function (objects,bounds,ignore_constraints,parent){
return app.common.geom.modifiers.set_modifiers_layout.cljs$core$IFn$_invoke$arity$5(objects,bounds,ignore_constraints,cljs.core.PersistentArrayMap.EMPTY,parent);
}));

(app.common.geom.modifiers.set_modifiers_layout.cljs$core$IFn$_invoke$arity$5 = (function (objects,bounds,ignore_constraints,modif_tree,parent){
var parent_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent);
var root_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.common.uuid.zero,parent_id);
var modifiers = app.common.types.modifiers.select_geometry(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(modif_tree,parent_id),new cljs.core.Keyword(null,"modifiers","modifiers",50378834)));
var has_modifiers_QMARK_ = app.common.types.modifiers.child_modifiers_QMARK_(modifiers);
var flex_layout_QMARK_ = app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var grid_layout_QMARK_ = app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var parent_QMARK_ = ((app.common.files.helpers.group_like_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)) || (app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)));
var transformed_parent_bounds = (new cljs.core.Delay((function (){
return app.common.geom.shapes.transforms.transform_bounds.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,parent_id)),modifiers);
}),null));
var children_modifiers = ((((flex_layout_QMARK_) || (grid_layout_QMARK_)))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68542_SHARP_){
return app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,p1__68542_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent)):new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent));
var children_layout = ((((flex_layout_QMARK_) || (grid_layout_QMARK_)))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__68543_SHARP_){
return app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,p1__68543_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent)):null);
var G__68546 = modif_tree;
var G__68546__$1 = ((((has_modifiers_QMARK_) && (((parent_QMARK_) && ((!(root_QMARK_)))))))?app.common.geom.modifiers.set_children_modifiers(G__68546,children_modifiers,objects,bounds,parent,transformed_parent_bounds,ignore_constraints):G__68546);
var G__68546__$2 = ((flex_layout_QMARK_)?app.common.geom.modifiers.set_flex_layout_modifiers(G__68546__$1,children_layout,objects,bounds,parent,transformed_parent_bounds):G__68546__$1);
if(grid_layout_QMARK_){
return app.common.geom.modifiers.set_grid_layout_modifiers(G__68546__$2,objects,bounds,parent,transformed_parent_bounds);
} else {
return G__68546__$2;
}
}));

(app.common.geom.modifiers.set_modifiers_layout.cljs$lang$maxFixedArity = 5);

app.common.geom.modifiers.propagate_modifiers_constraints = (function app$common$geom$modifiers$propagate_modifiers_constraints(var_args){
var G__68550 = arguments.length;
switch (G__68550) {
case 4:
return app.common.geom.modifiers.propagate_modifiers_constraints.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return app.common.geom.modifiers.propagate_modifiers_constraints.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.modifiers.propagate_modifiers_constraints.cljs$core$IFn$_invoke$arity$4 = (function (objects,bounds,ignore_constraints,shapes){
return app.common.geom.modifiers.propagate_modifiers_constraints.cljs$core$IFn$_invoke$arity$5(objects,bounds,ignore_constraints,cljs.core.PersistentArrayMap.EMPTY,shapes);
}));

(app.common.geom.modifiers.propagate_modifiers_constraints.cljs$core$IFn$_invoke$arity$5 = (function (objects,bounds,ignore_constraints,modif_tree,shapes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__68547_SHARP_,p2__68548_SHARP_){
return app.common.geom.modifiers.set_modifiers_constraints(objects,bounds,ignore_constraints,p1__68547_SHARP_,p2__68548_SHARP_);
}),modif_tree,shapes);
}));

(app.common.geom.modifiers.propagate_modifiers_constraints.cljs$lang$maxFixedArity = 5);

app.common.geom.modifiers.propagate_modifiers_layouts = (function app$common$geom$modifiers$propagate_modifiers_layouts(var_args){
var G__68554 = arguments.length;
switch (G__68554) {
case 4:
return app.common.geom.modifiers.propagate_modifiers_layouts.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return app.common.geom.modifiers.propagate_modifiers_layouts.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.modifiers.propagate_modifiers_layouts.cljs$core$IFn$_invoke$arity$4 = (function (objects,bounds,ignore_constraints,shapes){
return app.common.geom.modifiers.propagate_modifiers_layouts.cljs$core$IFn$_invoke$arity$5(objects,bounds,ignore_constraints,cljs.core.PersistentArrayMap.EMPTY,shapes);
}));

(app.common.geom.modifiers.propagate_modifiers_layouts.cljs$core$IFn$_invoke$arity$5 = (function (objects,bounds,ignore_constraints,modif_tree,shapes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__68551_SHARP_,p2__68552_SHARP_){
return app.common.geom.modifiers.set_modifiers_layout.cljs$core$IFn$_invoke$arity$5(objects,bounds,ignore_constraints,p1__68551_SHARP_,p2__68552_SHARP_);
}),modif_tree,shapes);
}));

(app.common.geom.modifiers.propagate_modifiers_layouts.cljs$lang$maxFixedArity = 5);

/**
 * Calculates the modifiers to adjust the bounds for auto-width/auto-height shapes
 */
app.common.geom.modifiers.calc_auto_modifiers = (function app$common$geom$modifiers$calc_auto_modifiers(objects,bounds,parent){
var parent_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent);
var parent_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,parent_id);
var set_parent_auto_width = (function (modifiers,auto_width){
var origin = app.common.geom.shapes.points.origin(cljs.core.deref(parent_bounds));
var current_width = app.common.geom.shapes.points.width_points(cljs.core.deref(parent_bounds));
var scale_width = (auto_width / current_width);
return app.common.types.modifiers.resize.cljs$core$IFn$_invoke$arity$5(modifiers,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(scale_width,(1)),origin,new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$1(parent));
});
var set_parent_auto_height = (function (modifiers,auto_height){
var origin = app.common.geom.shapes.points.origin(cljs.core.deref(parent_bounds));
var current_height = app.common.geom.shapes.points.height_points(cljs.core.deref(parent_bounds));
var scale_height = (auto_height / current_height);
return app.common.types.modifiers.resize.cljs$core$IFn$_invoke$arity$5(modifiers,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((1),scale_height),origin,new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$1(parent));
});
var children = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.common.invalid_geometry_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.position_absolute_QMARK_,app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$2(objects,parent_id)));
var auto_QMARK_ = (function (){var or__5025__auto__ = app.common.types.shape.layout.auto_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(parent));
if(cljs.core.truth_(and__5023__auto__)){
return app.common.types.shape.layout.fill_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
} else {
return and__5023__auto__;
}
}
})();
var auto_width_QMARK_ = (function (){var or__5025__auto__ = app.common.types.shape.layout.auto_width_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(parent));
if(cljs.core.truth_(and__5023__auto__)){
return app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
} else {
return and__5023__auto__;
}
}
})();
var auto_height_QMARK_ = (function (){var or__5025__auto__ = app.common.types.shape.layout.auto_height_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(parent));
if(cljs.core.truth_(and__5023__auto__)){
return app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
} else {
return and__5023__auto__;
}
}
})();
var content_bounds = (cljs.core.truth_((function (){var and__5023__auto__ = app.common.data.not_empty_QMARK_(children);
if(and__5023__auto__){
return auto_QMARK_;
} else {
return and__5023__auto__;
}
})())?((app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))?app.common.geom.shapes.flex_layout.layout_content_bounds(bounds,parent,children,objects):((app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))?(function (){var children__$1 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (child){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child));
if(cljs.core.truth_(temp__5825__auto__)){
var child_bounds_ref = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(child_bounds_ref),child], null);
} else {
return null;
}
}),children);
var layout_data = app.common.geom.shapes.grid_layout.calc_layout_data.cljs$core$IFn$_invoke$arity$5(parent,cljs.core.deref(parent_bounds),children__$1,bounds,objects);
return app.common.geom.shapes.grid_layout.layout_content_bounds(bounds,parent,layout_data);
})():null)):null);
var auto_width = (cljs.core.truth_(content_bounds)?app.common.geom.shapes.points.width_points(content_bounds):null);
var auto_height = (cljs.core.truth_(content_bounds)?app.common.geom.shapes.points.height_points(content_bounds):null);
var G__68555 = app.common.types.modifiers.empty();
var G__68555__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = (!((auto_width == null)));
if(and__5023__auto__){
return auto_width_QMARK_;
} else {
return and__5023__auto__;
}
})())?set_parent_auto_width(G__68555,auto_width):G__68555);
if(cljs.core.truth_((function (){var and__5023__auto__ = (!((auto_height == null)));
if(and__5023__auto__){
return auto_height_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return set_parent_auto_height(G__68555__$1,auto_height);
} else {
return G__68555__$1;
}
});
app.common.geom.modifiers.find_auto_layouts = (function app$common$geom$modifiers$find_auto_layouts(objects,shapes){
var mk_check_auto_layout = (function app$common$geom$modifiers$find_auto_layouts_$_mk_check_auto_layout(objects__$1){
return (function (shape){
if(cljs.core.truth_((function (){var or__5025__auto__ = app.common.types.shape.layout.auto_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.truth_(and__5023__auto__)){
return app.common.types.shape.layout.fill_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
} else {
return and__5023__auto__;
}
}
})())){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
} else {
return null;
}
});
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),cljs.core.keep.cljs$core$IFn$_invoke$arity$1(mk_check_auto_layout(objects)),shapes);
});
/**
 * Checks if we need to calculate the full tree or we can calculate just a partial tree. Partial
 *   trees are more efficient but cannot be done when the layout is centered.
 */
app.common.geom.modifiers.full_tree_QMARK_ = (function app$common$geom$modifiers$full_tree_QMARK_(objects,layout_id){
var layout_justify_content = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [layout_id,new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134)], null));
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"space-around","space-around",248184132),null,new cljs.core.Keyword(null,"space-evenly","space-evenly",-998758715),null,new cljs.core.Keyword(null,"center","center",-748944368),null,new cljs.core.Keyword(null,"end","end",-268185958),null,new cljs.core.Keyword(null,"stretch","stretch",-1888837380),null], null), null),layout_justify_content);
});
/**
 * Recalculates the layouts to adjust the sizing: auto new sizes
 */
app.common.geom.modifiers.sizing_auto_modifiers = (function app$common$geom$modifiers$sizing_auto_modifiers(modif_tree,sizing_auto_layouts,objects,bounds,ignore_constraints){
var calculate_modifiers = (function (p__68556,layout_id){
var vec__68557 = p__68556;
var modif_tree__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68557,(0),null);
var bounds__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68557,(1),null);
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,layout_id);
var auto_modifiers = app.common.geom.modifiers.calc_auto_modifiers(objects,bounds__$1,layout);
if(((app.common.types.modifiers.empty_QMARK_(auto_modifiers)) && ((!(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(layout)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [modif_tree__$1,bounds__$1], null);
} else {
var from_layout = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(sizing_auto_layouts,app.common.files.helpers.get_parent_ids(objects,layout_id));
var shapes = (cljs.core.truth_((function (){var and__5023__auto__ = from_layout;
if(cljs.core.truth_(and__5023__auto__)){
return (!(app.common.geom.modifiers.full_tree_QMARK_(objects,from_layout)));
} else {
return and__5023__auto__;
}
})())?app.common.geom.shapes.tree_seq.resolve_subtree(from_layout,layout_id,objects):app.common.geom.shapes.tree_seq.resolve_tree(cljs.core.PersistentHashSet.createAsIfByAssoc([layout_id]),objects));
var auto_modif_tree = cljs.core.PersistentArrayMap.createAsIfByAssoc([layout_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),auto_modifiers], null)]);
var auto_modif_tree__$1 = app.common.geom.modifiers.propagate_modifiers_layouts.cljs$core$IFn$_invoke$arity$5(objects,bounds__$1,ignore_constraints,auto_modif_tree,shapes);
var bounds__$2 = app.common.geom.bounds_map.transform_bounds_map.cljs$core$IFn$_invoke$arity$3(bounds__$1,objects,auto_modif_tree__$1);
var modif_tree__$2 = app.common.geom.modif_tree.merge_modif_tree(modif_tree__$1,auto_modif_tree__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [modif_tree__$2,bounds__$2], null);
}
});
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(calculate_modifiers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [modif_tree,bounds], null),cljs.core.reverse(sizing_auto_layouts)));
});
/**
 * Returns a list of ids without the root-frames with only move
 */
app.common.geom.modifiers.filter_layouts_ids = (function app$common$geom$modifiers$filter_layouts_ids(objects,modif_tree){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__68560){
var vec__68561 = p__68560;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68561,(0),null);
var map__68564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68561,(1),null);
var map__68564__$1 = cljs.core.__destructure_map(map__68564);
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68564__$1,new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
var or__5025__auto__ = app.common.types.modifiers.empty_QMARK_(modifiers);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = app.common.files.helpers.root_frame_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,id);
if(cljs.core.truth_(and__5023__auto__)){
return app.common.types.modifiers.only_move_QMARK_(modifiers);
} else {
return and__5023__auto__;
}
}
}),modif_tree)));
});
/**
 * Applies recursively the modifiers and calculate the layouts and constraints for all the items to be placed correctly
 */
app.common.geom.modifiers.set_objects_modifiers = (function app$common$geom$modifiers$set_objects_modifiers(var_args){
var G__68566 = arguments.length;
switch (G__68566) {
case 2:
return app.common.geom.modifiers.set_objects_modifiers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.geom.modifiers.set_objects_modifiers.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.geom.modifiers.set_objects_modifiers.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.modifiers.set_objects_modifiers.cljs$core$IFn$_invoke$arity$2 = (function (modif_tree,objects){
return app.common.geom.modifiers.set_objects_modifiers.cljs$core$IFn$_invoke$arity$3(modif_tree,objects,null);
}));

(app.common.geom.modifiers.set_objects_modifiers.cljs$core$IFn$_invoke$arity$3 = (function (modif_tree,objects,params){
return app.common.geom.modifiers.set_objects_modifiers.cljs$core$IFn$_invoke$arity$4(null,modif_tree,objects,params);
}));

(app.common.geom.modifiers.set_objects_modifiers.cljs$core$IFn$_invoke$arity$4 = (function (old_modif_tree,modif_tree,objects,p__68567){
var map__68568 = p__68567;
var map__68568__$1 = cljs.core.__destructure_map(map__68568);
var ignore_constraints = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68568__$1,new cljs.core.Keyword(null,"ignore-constraints","ignore-constraints",-1221464851),false);
var snap_pixel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68568__$1,new cljs.core.Keyword(null,"snap-pixel?","snap-pixel?",-1854606324),false);
var snap_precision = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68568__$1,new cljs.core.Keyword(null,"snap-precision","snap-precision",637714362),(1));
var snap_ignore_axis = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68568__$1,new cljs.core.Keyword(null,"snap-ignore-axis","snap-ignore-axis",642992690),null);
var objects__$1 = app.common.geom.modif_tree.apply_structure_modifiers((function (){var G__68569 = objects;
if((!((old_modif_tree == null)))){
return app.common.geom.modif_tree.apply_structure_modifiers(G__68569,old_modif_tree);
} else {
return G__68569;
}
})(),modif_tree);
var shapes_tree_all = app.common.geom.shapes.tree_seq.resolve_tree(cljs.core.set(cljs.core.keys(modif_tree)),objects__$1);
var shapes_tree_layout = app.common.geom.shapes.tree_seq.resolve_tree(app.common.geom.modifiers.filter_layouts_ids(objects__$1,modif_tree),objects__$1);
var bounds_map = (function (){var G__68570 = app.common.geom.bounds_map.objects__GT_bounds_map(objects__$1);
if((!((old_modif_tree == null)))){
return app.common.geom.bounds_map.transform_bounds_map.cljs$core$IFn$_invoke$arity$3(G__68570,objects__$1,old_modif_tree);
} else {
return G__68570;
}
})();
var modif_tree__$1 = (function (){var G__68571 = modif_tree;
if(cljs.core.truth_(snap_pixel_QMARK_)){
return app.common.geom.shapes.pixel_precision.adjust_pixel_precision(G__68571,objects__$1,snap_precision,snap_ignore_axis);
} else {
return G__68571;
}
})();
var modif_tree__$2 = app.common.geom.modifiers.propagate_modifiers_constraints.cljs$core$IFn$_invoke$arity$5(objects__$1,bounds_map,ignore_constraints,modif_tree__$1,shapes_tree_all);
var bounds_map__$1 = app.common.geom.bounds_map.transform_bounds_map.cljs$core$IFn$_invoke$arity$3(bounds_map,objects__$1,modif_tree__$2);
var modif_tree_layout = app.common.geom.modifiers.propagate_modifiers_layouts.cljs$core$IFn$_invoke$arity$4(objects__$1,bounds_map__$1,ignore_constraints,shapes_tree_layout);
var modif_tree__$3 = app.common.geom.modif_tree.merge_modif_tree(modif_tree__$2,modif_tree_layout);
var bounds_map__$2 = app.common.geom.bounds_map.transform_bounds_map.cljs$core$IFn$_invoke$arity$3(bounds_map__$1,objects__$1,modif_tree_layout);
var sizing_auto_layouts = app.common.geom.modifiers.find_auto_layouts(objects__$1,shapes_tree_layout);
var modif_tree__$4 = app.common.geom.modifiers.sizing_auto_modifiers(modif_tree__$3,sizing_auto_layouts,objects__$1,bounds_map__$2,ignore_constraints);
var modif_tree__$5 = (cljs.core.truth_(old_modif_tree)?app.common.geom.modif_tree.merge_modif_tree(old_modif_tree,modif_tree__$4):modif_tree__$4);
return modif_tree__$5;
}));

(app.common.geom.modifiers.set_objects_modifiers.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=app.common.geom.modifiers.js.map
