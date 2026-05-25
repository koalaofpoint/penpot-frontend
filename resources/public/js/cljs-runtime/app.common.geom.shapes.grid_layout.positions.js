import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.line.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.common.js";
import "./app.common.geom.shapes.grid_layout.layout_data.js";
import "./app.common.geom.shapes.points.js";
import "./app.common.geom.shapes.transforms.js";
import "./app.common.math.js";
import "./app.common.types.modifiers.js";
import "./app.common.types.shape.layout.js";
goog.provide('app.common.geom.shapes.grid_layout.positions');
/**
 * Retrieves the points that define the bounds for given cell
 */
app.common.geom.shapes.grid_layout.positions.cell_bounds = (function app$common$geom$shapes$grid_layout$positions$cell_bounds(p__54601,p__54602){
var map__54603 = p__54601;
var map__54603__$1 = cljs.core.__destructure_map(map__54603);
var layout_data = map__54603__$1;
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54603__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var row_tracks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54603__$1,new cljs.core.Keyword(null,"row-tracks","row-tracks",-1727486848));
var column_tracks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54603__$1,new cljs.core.Keyword(null,"column-tracks","column-tracks",291761616));
var layout_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54603__$1,new cljs.core.Keyword(null,"layout-bounds","layout-bounds",-1028383563));
var column_gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54603__$1,new cljs.core.Keyword(null,"column-gap","column-gap",384822863));
var row_gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54603__$1,new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537));
var map__54604 = p__54602;
var map__54604__$1 = cljs.core.__destructure_map(map__54604);
var cell = map__54604__$1;
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54604__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54604__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var row_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54604__$1,new cljs.core.Keyword(null,"row-span","row-span",-365554241));
var column_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54604__$1,new cljs.core.Keyword(null,"column-span","column-span",1302376857));
var hv = (function (p1__54595_SHARP_){
return app.common.geom.shapes.points.start_hv(layout_bounds,p1__54595_SHARP_);
});
var vv = (function (p1__54600_SHARP_){
return app.common.geom.shapes.points.start_vv(layout_bounds,p1__54600_SHARP_);
});
var span_column_tracks = app.common.data.safe_subvec.cljs$core$IFn$_invoke$arity$3(column_tracks,(column - (1)),((column - (1)) + column_span));
var span_row_tracks = app.common.data.safe_subvec.cljs$core$IFn$_invoke$arity$3(row_tracks,(row - (1)),((row - (1)) + row_span));
if(cljs.core.truth_((function (){var and__5023__auto__ = span_column_tracks;
if(cljs.core.truth_(and__5023__auto__)){
return span_row_tracks;
} else {
return and__5023__auto__;
}
})())){
var p1 = app.common.geom.point.add(origin,app.common.geom.point.add(app.common.geom.point.to_vec(origin,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(span_column_tracks,(0)),new cljs.core.Keyword(null,"start-p","start-p",767587445))),app.common.geom.point.to_vec(origin,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(span_row_tracks,(0)),new cljs.core.Keyword(null,"start-p","start-p",767587445)))));
var p2 = (function (){var $ = p1;
var $__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,track){
return app.common.geom.point.add(p,hv(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(track)));
}),$,span_column_tracks);
return app.common.geom.point.add($__$1,hv((column_gap * (cljs.core.count(span_column_tracks) - (1)))));
})();
var p3 = (function (){var $ = p2;
var $__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,track){
return app.common.geom.point.add(p,vv(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(track)));
}),$,span_row_tracks);
return app.common.geom.point.add($__$1,vv((row_gap * (cljs.core.count(span_row_tracks) - (1)))));
})();
var p4 = (function (){var $ = p1;
var $__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,track){
return app.common.geom.point.add(p,vv(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(track)));
}),$,span_row_tracks);
return app.common.geom.point.add($__$1,vv((row_gap * (cljs.core.count(span_row_tracks) - (1)))));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2,p3,p4], null);
} else {
return null;
}
});
/**
 * Calculates the size and modifiers for the width of an auto-fill child
 */
app.common.geom.shapes.grid_layout.positions.calc_fill_width_data = (function app$common$geom$shapes$grid_layout$positions$calc_fill_width_data(_parent,transform,transform_inverse,child,child_origin,child_width,cell_bounds){
var target_width = (function (){var x__5110__auto__ = (app.common.geom.shapes.points.width_points(cell_bounds) - app.common.types.shape.layout.child_width_margin(child));
var y__5111__auto__ = 0.01;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var max_width = (function (){var x__5110__auto__ = app.common.types.shape.layout.child_max_width(child);
var y__5111__auto__ = 0.01;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var target_width__$1 = app.common.math.clamp(target_width,app.common.types.shape.layout.child_min_width(child),max_width);
var fill_scale = (target_width__$1 / child_width);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),target_width__$1,new cljs.core.Keyword(null,"modifiers","modifiers",50378834),app.common.types.modifiers.resize_modifiers.cljs$core$IFn$_invoke$arity$4(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(fill_scale,(1)),child_origin,transform,transform_inverse)], null);
});
/**
 * Calculates the size and modifiers for the height of an auto-fill child
 */
app.common.geom.shapes.grid_layout.positions.calc_fill_height_data = (function app$common$geom$shapes$grid_layout$positions$calc_fill_height_data(_parent,transform,transform_inverse,child,child_origin,child_height,cell_bounds){
var target_height = (function (){var x__5110__auto__ = (app.common.geom.shapes.points.height_points(cell_bounds) - app.common.types.shape.layout.child_height_margin(child));
var y__5111__auto__ = 0.01;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var max_height = (function (){var x__5110__auto__ = app.common.types.shape.layout.child_max_height(child);
var y__5111__auto__ = 0.01;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var target_height__$1 = app.common.math.clamp(target_height,app.common.types.shape.layout.child_min_height(child),max_height);
var fill_scale = (target_height__$1 / child_height);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),target_height__$1,new cljs.core.Keyword(null,"modifiers","modifiers",50378834),app.common.types.modifiers.resize_modifiers.cljs$core$IFn$_invoke$arity$4(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((1),fill_scale),child_origin,transform,transform_inverse)], null);
});
app.common.geom.shapes.grid_layout.positions.fill_modifiers = (function app$common$geom$shapes$grid_layout$positions$fill_modifiers(parent,parent_bounds,child,child_bounds,layout_data,cell_data){
var child_origin = app.common.geom.shapes.points.origin(child_bounds);
var child_width = app.common.geom.shapes.points.width_points(child_bounds);
var child_height = app.common.geom.shapes.points.height_points(child_bounds);
var cell_bounds = app.common.geom.shapes.grid_layout.positions.cell_bounds(layout_data,cell_data);
var vec__54608 = ((((app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$1(child)) || (app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1(child))))?app.common.geom.shapes.transforms.calculate_geometry(cljs.core.deref(parent_bounds)):null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54608,(0),null);
var transform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54608,(1),null);
var transform_inverse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54608,(2),null);
var fill_width = ((app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$1(child))?app.common.geom.shapes.grid_layout.positions.calc_fill_width_data(parent,transform,transform_inverse,child,child_origin,child_width,cell_bounds):null);
var fill_height = ((app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1(child))?app.common.geom.shapes.grid_layout.positions.calc_fill_height_data(parent,transform,transform_inverse,child,child_origin,child_height,cell_bounds):null);
var child_width__$1 = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(fill_width);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return child_width;
}
})();
var child_height__$1 = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(fill_height);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return child_height;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [child_width__$1,child_height__$1,(function (){var G__54611 = (function (){var G__54612 = app.common.types.modifiers.empty();
if(cljs.core.truth_(fill_width)){
return app.common.types.modifiers.add_modifiers(G__54612,new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(fill_width));
} else {
return G__54612;
}
})();
if(cljs.core.truth_(fill_height)){
return app.common.types.modifiers.add_modifiers(G__54611,new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(fill_height));
} else {
return G__54611;
}
})()], null);
});
app.common.geom.shapes.grid_layout.positions.child_position_delta = (function app$common$geom$shapes$grid_layout$positions$child_position_delta(parent,child,child_bounds,child_width,child_height,layout_data,cell_data){
var temp__5823__auto__ = app.common.geom.shapes.grid_layout.positions.cell_bounds(layout_data,cell_data);
if(cljs.core.truth_(temp__5823__auto__)){
var cell_bounds = temp__5823__auto__;
var child_origin = app.common.geom.shapes.points.origin(child_bounds);
var align = new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895).cljs$core$IFn$_invoke$arity$1(parent);
var justify = new cljs.core.Keyword(null,"layout-justify-items","layout-justify-items",1271685173).cljs$core$IFn$_invoke$arity$1(parent);
var align_self = new cljs.core.Keyword(null,"align-self","align-self",1475936794).cljs$core$IFn$_invoke$arity$1(cell_data);
var justify_self = new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605).cljs$core$IFn$_invoke$arity$1(cell_data);
var align_self__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = align_self;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(align_self,new cljs.core.Keyword(null,"auto","auto",-566279492));
} else {
return and__5023__auto__;
}
})())?align_self:null);
var justify_self__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = justify_self;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(justify_self,new cljs.core.Keyword(null,"auto","auto",-566279492));
} else {
return and__5023__auto__;
}
})())?justify_self:null);
var align__$1 = (function (){var or__5025__auto__ = align_self__$1;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return align;
}
})();
var justify__$1 = (function (){var or__5025__auto__ = justify_self__$1;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return justify;
}
})();
var origin_h = app.common.geom.shapes.points.project_point(cell_bounds,new cljs.core.Keyword(null,"h","h",1109658740),child_origin);
var origin_v = app.common.geom.shapes.points.project_point(cell_bounds,new cljs.core.Keyword(null,"v","v",21465059),child_origin);
var hv = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.points.start_hv,cell_bounds);
var vv = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.points.start_vv,cell_bounds);
var vec__54613 = app.common.types.shape.layout.child_margins(child);
var top_m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54613,(0),null);
var right_m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54613,(1),null);
var bottom_m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54613,(2),null);
var left_m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54613,(3),null);
var vec__54616 = (function (){var G__54622 = justify__$1;
var G__54622__$1 = (((G__54622 instanceof cljs.core.Keyword))?G__54622.fqn:null);
switch (G__54622__$1) {
case "end":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.add(origin_h,hv(child_width)),app.common.geom.point.subtract(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cell_bounds,(1)),hv(right_m))], null);

break;
case "center":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.add(origin_h,hv((child_width / (2)))),app.common.geom.point.subtract(app.common.geom.point.add(app.common.geom.shapes.points.project_point(cell_bounds,new cljs.core.Keyword(null,"h","h",1109658740),app.common.geom.shapes.points.center(cell_bounds)),hv((left_m / (2)))),hv((right_m / (2))))], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [origin_h,app.common.geom.point.add(cljs.core.first(cell_bounds),hv(left_m))], null);

}
})();
var from_h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54616,(0),null);
var to_h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54616,(1),null);
var vec__54619 = (function (){var G__54623 = align__$1;
var G__54623__$1 = (((G__54623 instanceof cljs.core.Keyword))?G__54623.fqn:null);
switch (G__54623__$1) {
case "end":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.add(origin_v,vv(child_height)),app.common.geom.point.subtract(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cell_bounds,(3)),vv(bottom_m))], null);

break;
case "center":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.add(origin_v,vv((child_height / (2)))),app.common.geom.point.subtract(app.common.geom.point.add(app.common.geom.shapes.points.project_point(cell_bounds,new cljs.core.Keyword(null,"v","v",21465059),app.common.geom.shapes.points.center(cell_bounds)),vv(top_m)),vv(bottom_m))], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [origin_v,app.common.geom.point.add(cljs.core.first(cell_bounds),vv(top_m))], null);

}
})();
var from_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54619,(0),null);
var to_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54619,(1),null);
return app.common.geom.point.add(app.common.geom.point.add(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$0(),app.common.geom.point.to_vec(from_h,to_h)),app.common.geom.point.to_vec(from_v,to_v));
} else {
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0));
}
});
app.common.geom.shapes.grid_layout.positions.child_modifiers = (function app$common$geom$shapes$grid_layout$positions$child_modifiers(parent,parent_bounds,child,child_bounds,layout_data,cell_data){
var vec__54624 = app.common.geom.shapes.grid_layout.positions.fill_modifiers(parent,parent_bounds,child,child_bounds,layout_data,cell_data);
var child_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54624,(0),null);
var child_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54624,(1),null);
var fill_modifiers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54624,(2),null);
var position_delta = app.common.geom.shapes.grid_layout.positions.child_position_delta(parent,child,child_bounds,child_width,child_height,layout_data,cell_data);
var G__54627 = app.common.types.modifiers.empty();
if(cljs.core.not(app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1(child))){
return app.common.types.modifiers.move.cljs$core$IFn$_invoke$arity$2(app.common.types.modifiers.add_modifiers(G__54627,fill_modifiers),position_delta);
} else {
return G__54627;
}
});
app.common.geom.shapes.grid_layout.positions.get_position_grid_coord = (function app$common$geom$shapes$grid_layout$positions$get_position_grid_coord(p__54630,position){
var map__54631 = p__54630;
var map__54631__$1 = cljs.core.__destructure_map(map__54631);
var layout_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54631__$1,new cljs.core.Keyword(null,"layout-bounds","layout-bounds",-1028383563));
var row_tracks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54631__$1,new cljs.core.Keyword(null,"row-tracks","row-tracks",-1727486848));
var column_tracks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54631__$1,new cljs.core.Keyword(null,"column-tracks","column-tracks",291761616));
var hv = (function (p1__54628_SHARP_){
return app.common.geom.shapes.points.start_hv(layout_bounds,p1__54628_SHARP_);
});
var vv = (function (p1__54629_SHARP_){
return app.common.geom.shapes.points.start_vv(layout_bounds,p1__54629_SHARP_);
});
var make_is_inside_track = (function (type){
var vec__54644 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vv,hv], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hv,vv], null));
var vfn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54644,(0),null);
var ofn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54644,(1),null);
return (function app$common$geom$shapes$grid_layout$positions$get_position_grid_coord_$_is_inside_track_QMARK_(p__54647){
var map__54648 = p__54647;
var map__54648__$1 = cljs.core.__destructure_map(map__54648);
var track = map__54648__$1;
var start_p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54648__$1,new cljs.core.Keyword(null,"start-p","start-p",767587445));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54648__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var unit_v = (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1((1)) : vfn.call(null,(1)));
var end_p = app.common.geom.point.add(start_p,(ofn.cljs$core$IFn$_invoke$arity$1 ? ofn.cljs$core$IFn$_invoke$arity$1(size) : ofn.call(null,size)));
return app.common.geom.line.is_inside_lines_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_p,unit_v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end_p,unit_v], null),position);
});
});
var make_min_distance_track = (function (type){
var vec__54649 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vv,hv], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hv,vv], null));
var vfn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54649,(0),null);
var ofn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54649,(1),null);
return (function (p__54652,p__54653){
var vec__54654 = p__54652;
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54654,(0),null);
var selected_dist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54654,(1),null);
var vec__54657 = p__54653;
var cur_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54657,(0),null);
var map__54660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54657,(1),null);
var map__54660__$1 = cljs.core.__destructure_map(map__54660);
var track = map__54660__$1;
var start_p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54660__$1,new cljs.core.Keyword(null,"start-p","start-p",767587445));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54660__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var unit_v = (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1((1)) : vfn.call(null,(1)));
var end_p = app.common.geom.point.add(start_p,(ofn.cljs$core$IFn$_invoke$arity$1 ? ofn.cljs$core$IFn$_invoke$arity$1(size) : ofn.call(null,size)));
var dist_1 = app.common.math.abs(app.common.geom.line.line_value(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_p,unit_v], null),position));
var dist_2 = app.common.math.abs(app.common.geom.line.line_value(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end_p,unit_v], null),position));
if((((dist_1 < selected_dist)) || ((dist_2 < selected_dist)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_idx,track], null),(function (){var x__5113__auto__ = dist_1;
var y__5114__auto__ = dist_2;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected,selected_dist], null);
}
});
});
var vec__54632 = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(make_is_inside_track(new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core.second),app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(column_tracks));
var col_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54632,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54632,(1),null);
var vec__54635 = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(make_is_inside_track(new cljs.core.Keyword(null,"row","row",-570139521)),cljs.core.second),app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(row_tracks));
var row_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54635,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54635,(1),null);
var vec__54638 = (((!((column == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_idx,column], null):cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(make_min_distance_track(new cljs.core.Keyword(null,"column","column",2078222095)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),Infinity], null),app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(column_tracks))));
var col_idx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54638,(0),null);
var column__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54638,(1),null);
var vec__54641 = (((!((row == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx,row], null):cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(make_min_distance_track(new cljs.core.Keyword(null,"row","row",-570139521)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),Infinity], null),app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(row_tracks))));
var row_idx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54641,(0),null);
var row__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54641,(1),null);
if((((!((column__$1 == null)))) && ((!((row__$1 == null)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row_idx__$1 + (1)),(col_idx__$1 + (1))], null);
} else {
return null;
}
});
app.common.geom.shapes.grid_layout.positions.get_drop_cell = (function app$common$geom$shapes$grid_layout$positions$get_drop_cell(frame_id,objects,position){
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54662_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[app.common.geom.shapes.points.parent_coords_bounds(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(p1__54662_SHARP_),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(frame)),p1__54662_SHARP_],null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hidden","hidden",-312506092),app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame))));
var bounds = app.common.data.lazy_map(cljs.core.keys(objects),(function (p1__54664_SHARP_){
return app.common.geom.shapes.common.shape__GT_points(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__54664_SHARP_));
}));
var layout_data = app.common.geom.shapes.grid_layout.layout_data.calc_layout_data.cljs$core$IFn$_invoke$arity$5(frame,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(frame),children,bounds,objects);
return app.common.geom.shapes.grid_layout.positions.get_position_grid_coord(layout_data,position);
});

//# sourceMappingURL=app.common.geom.shapes.grid_layout.positions.js.map
