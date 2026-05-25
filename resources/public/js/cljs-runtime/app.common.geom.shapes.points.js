import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.intersect.js";
import "./app.common.math.js";
goog.provide('app.common.geom.shapes.points');
app.common.geom.shapes.points.origin = (function app$common$geom$shapes$points$origin(points){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,(0));
});
app.common.geom.shapes.points.hv = (function app$common$geom$shapes$points$hv(p__50418){
var vec__50419 = p__50418;
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50419,(0),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50419,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50419,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50419,(3),null);
return app.common.geom.point.to_vec(p0,p1);
});
app.common.geom.shapes.points.vv = (function app$common$geom$shapes$points$vv(p__50422){
var vec__50423 = p__50422;
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50423,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50423,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50423,(2),null);
var p3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50423,(3),null);
return app.common.geom.point.to_vec(p0,p3);
});
/**
 * Horizontal vector from the origin with a magnitude `val`
 */
app.common.geom.shapes.points.start_hv = (function app$common$geom$shapes$points$start_hv(p__50426,val){
var vec__50427 = p__50426;
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50427,(0),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50427,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50427,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50427,(3),null);
return app.common.geom.point.scale(app.common.geom.point.unit(app.common.geom.point.to_vec(p0,p1)),val);
});
/**
 * Horizontal vector from the oposite to the origin in the x axis with a magnitude `val`
 */
app.common.geom.shapes.points.end_hv = (function app$common$geom$shapes$points$end_hv(p__50430,val){
var vec__50431 = p__50430;
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50431,(0),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50431,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50431,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50431,(3),null);
return app.common.geom.point.scale(app.common.geom.point.unit(app.common.geom.point.to_vec(p1,p0)),val);
});
/**
 * Vertical vector from the oposite to the origin in the x axis with a magnitude `val`
 */
app.common.geom.shapes.points.start_vv = (function app$common$geom$shapes$points$start_vv(p__50434,val){
var vec__50435 = p__50434;
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50435,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50435,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50435,(2),null);
var p3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50435,(3),null);
return app.common.geom.point.scale(app.common.geom.point.unit(app.common.geom.point.to_vec(p0,p3)),val);
});
/**
 * Vertical vector from the oposite to the origin in the x axis with a magnitude `val`
 */
app.common.geom.shapes.points.end_vv = (function app$common$geom$shapes$points$end_vv(p__50438,val){
var vec__50439 = p__50438;
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50439,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50439,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50439,(2),null);
var p3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50439,(3),null);
return app.common.geom.point.scale(app.common.geom.point.unit(app.common.geom.point.to_vec(p3,p0)),val);
});
app.common.geom.shapes.points.width_points = (function app$common$geom$shapes$points$width_points(p__50442){
var vec__50443 = p__50442;
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50443,(0),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50443,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50443,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50443,(3),null);
if((((!((p0 == null)))) && ((!((p1 == null)))))){
var x__5110__auto__ = 0.01;
var y__5111__auto__ = app.common.geom.point.length(app.common.geom.point.to_vec(p0,p1));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
} else {
return null;
}
});
app.common.geom.shapes.points.height_points = (function app$common$geom$shapes$points$height_points(p__50446){
var vec__50447 = p__50446;
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50447,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50447,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50447,(2),null);
var p3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50447,(3),null);
if((((!((p0 == null)))) && ((!((p3 == null)))))){
var x__5110__auto__ = 0.01;
var y__5111__auto__ = app.common.geom.point.length(app.common.geom.point.to_vec(p0,p3));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
} else {
return null;
}
});
app.common.geom.shapes.points.pad_points = (function app$common$geom$shapes$points$pad_points(p__50450,pad_top,pad_right,pad_bottom,pad_left){
var vec__50451 = p__50450;
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50451,(0),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50451,(1),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50451,(2),null);
var p3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50451,(3),null);
var points = vec__50451;
if((!((points == null)))){
var top_v = app.common.geom.shapes.points.start_vv(points,pad_top);
var right_v = app.common.geom.shapes.points.end_hv(points,pad_right);
var bottom_v = app.common.geom.shapes.points.end_vv(points,pad_bottom);
var left_v = app.common.geom.shapes.points.start_hv(points,pad_left);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.add(app.common.geom.point.add(p0,left_v),top_v),app.common.geom.point.add(app.common.geom.point.add(p1,right_v),top_v),app.common.geom.point.add(app.common.geom.point.add(p2,right_v),bottom_v),app.common.geom.point.add(app.common.geom.point.add(p3,left_v),bottom_v)], null);
} else {
return null;
}
});
/**
 * Given a point and a line returns the parametric t the cross point with the line going through the other axis projected
 */
app.common.geom.shapes.points.project_t = (function app$common$geom$shapes$points$project_t(point,p__50454,other_axis_vec){
var vec__50455 = p__50454;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50455,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50455,(1),null);
var line_vec = app.common.geom.point.to_vec(start,end);
var pr_point = app.common.geom.shapes.intersect.line_line_intersect(point,app.common.geom.point.add(point,other_axis_vec),start,end);
if((!(app.common.math.almost_zero_QMARK_(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(line_vec))))){
return ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pr_point) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start)) / new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(line_vec));
} else {
if((!(app.common.math.almost_zero_QMARK_(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(line_vec))))){
return ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pr_point) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start)) / new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(line_vec));
} else {
return (0);

}
}
});
/**
 * Project the point into the given axis: `:h` or `:v` means horizontal or vertical axis
 */
app.common.geom.shapes.points.project_point = (function app$common$geom$shapes$points$project_point(p__50458,axis,point){
var vec__50459 = p__50458;
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50459,(0),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50459,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50459,(2),null);
var p3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50459,(3),null);
var bounds = vec__50459;
var vec__50462 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"h","h",1109658740)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.to_vec(p0,p3),p0,p1], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.to_vec(p0,p1),p0,p3], null));
var other_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50462,(0),null);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50462,(1),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50462,(2),null);
return app.common.geom.shapes.intersect.line_line_intersect(point,app.common.geom.point.add(point,other_vec),start,end);
});
/**
 * Check if the points are parallel to the coordinate axis.
 */
app.common.geom.shapes.points.axis_aligned_QMARK_ = (function app$common$geom$shapes$points$axis_aligned_QMARK_(p__50465){
var vec__50466 = p__50465;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50466,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50466,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50466,(2),null);
var p4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50466,(3),null);
var pts = vec__50466;
var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pts),(4));
if(and__5023__auto__){
var hv = app.common.geom.point.to_vec(p1,p2);
var vv = app.common.geom.point.to_vec(p1,p4);
return ((app.common.math.almost_zero_QMARK_(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(hv))) && (((app.common.math.almost_zero_QMARK_(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vv))) && ((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(hv) > (0))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vv) > (0))))))));
} else {
return and__5023__auto__;
}
});
app.common.geom.shapes.points.parent_coords_bounds = (function app$common$geom$shapes$points$parent_coords_bounds(child_bounds,p__50472){
var vec__50473 = p__50472;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50473,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50473,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50473,(2),null);
var p4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50473,(3),null);
var parent_bounds = vec__50473;
if(cljs.core.empty_QMARK_(child_bounds)){
return parent_bounds;
} else {
if(((app.common.geom.shapes.points.axis_aligned_QMARK_(child_bounds)) && (app.common.geom.shapes.points.axis_aligned_QMARK_(parent_bounds)))){
return child_bounds;
} else {
var rh = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null);
var rv = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p4], null);
var hv = app.common.geom.point.to_vec(p1,p2);
var vv = app.common.geom.point.to_vec(p1,p4);
var ph = (function (p1__50469_SHARP_){
return app.common.geom.point.add(p1,app.common.geom.point.scale(hv,p1__50469_SHARP_));
});
var pv = (function (p1__50470_SHARP_){
return app.common.geom.point.add(p1,app.common.geom.point.scale(vv,p1__50470_SHARP_));
});
var find_boundary_ts = (function (p__50479,current_point){
var vec__50480 = p__50479;
var th_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50480,(0),null);
var th_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50480,(1),null);
var tv_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50480,(2),null);
var tv_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50480,(3),null);
var cth = app.common.geom.shapes.points.project_t(current_point,rh,vv);
var ctv = app.common.geom.shapes.points.project_t(current_point,rv,hv);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.min(th_min,cth),Math.max(th_max,cth),Math.min(tv_min,ctv),Math.max(tv_max,ctv)], null);
});
var vec__50476 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(find_boundary_ts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [Infinity,-Infinity,Infinity,-Infinity], null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50471_SHARP_){
var and__5023__auto__ = app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__50471_SHARP_));
if(cljs.core.truth_(and__5023__auto__)){
return app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__50471_SHARP_));
} else {
return and__5023__auto__;
}
}),child_bounds));
var th_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50476,(0),null);
var th_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50476,(1),null);
var tv_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50476,(2),null);
var tv_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50476,(3),null);
var minv_start = pv(tv_min);
var minv_end = app.common.geom.point.add(minv_start,hv);
var minh_start = ph(th_min);
var minh_end = app.common.geom.point.add(minh_start,vv);
var maxv_start = pv(tv_max);
var maxv_end = app.common.geom.point.add(maxv_start,hv);
var maxh_start = ph(th_max);
var maxh_end = app.common.geom.point.add(maxh_start,vv);
var i1 = app.common.geom.shapes.intersect.line_line_intersect(minv_start,minv_end,minh_start,minh_end);
var i2 = app.common.geom.shapes.intersect.line_line_intersect(minv_start,minv_end,maxh_start,maxh_end);
var i3 = app.common.geom.shapes.intersect.line_line_intersect(maxv_start,maxv_end,maxh_start,maxh_end);
var i4 = app.common.geom.shapes.intersect.line_line_intersect(maxv_start,maxv_end,minh_start,minh_end);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [i1,i2,i3,i4], null);
}
}
});
app.common.geom.shapes.points.merge_parent_coords_bounds = (function app$common$geom$shapes$points$merge_parent_coords_bounds(bounds,parent_bounds){
return app.common.geom.shapes.points.parent_coords_bounds(cljs.core.flatten(bounds),parent_bounds);
});
app.common.geom.shapes.points.move = (function app$common$geom$shapes$points$move(bounds,vector){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50483_SHARP_){
return app.common.geom.point.add(p1__50483_SHARP_,vector);
}),bounds);
});
app.common.geom.shapes.points.center = (function app$common$geom$shapes$points$center(bounds){
var width = app.common.geom.shapes.points.width_points(bounds);
var height = app.common.geom.shapes.points.height_points(bounds);
var half_h = app.common.geom.shapes.points.start_hv(bounds,(width / (2)));
var half_v = app.common.geom.shapes.points.start_vv(bounds,(height / (2)));
return app.common.geom.point.add(app.common.geom.point.add(app.common.geom.shapes.points.origin(bounds),half_h),half_v);
});

//# sourceMappingURL=app.common.geom.shapes.points.js.map
