import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.common.js";
import "./app.common.geom.shapes.text.js";
import "./app.common.math.js";
import "./app.common.types.path.segment.js";
goog.provide('app.common.geom.shapes.intersect');
/**
 * Given three ordered points gives the orientation
 *   (clockwise, counterclock or coplanar-line)
 */
app.common.geom.shapes.intersect.orientation = (function app$common$geom$shapes$intersect$orientation(p1,p2,p3){
var map__50339 = p1;
var map__50339__$1 = cljs.core.__destructure_map(map__50339);
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50339__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50339__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__50340 = p2;
var map__50340__$1 = cljs.core.__destructure_map(map__50340);
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50340__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50340__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__50341 = p3;
var map__50341__$1 = cljs.core.__destructure_map(map__50341);
var x3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50341__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50341__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var v = (((y2 - y1) * (x3 - x2)) - ((y3 - y2) * (x2 - x1)));
if((v > (0))){
return new cljs.core.Keyword("app.common.geom.shapes.intersect","clockwise","app.common.geom.shapes.intersect/clockwise",-588807839);
} else {
if((v < (0))){
return new cljs.core.Keyword("app.common.geom.shapes.intersect","counter-clockwise","app.common.geom.shapes.intersect/counter-clockwise",1531989207);
} else {
return new cljs.core.Keyword("app.common.geom.shapes.intersect","coplanar","app.common.geom.shapes.intersect/coplanar",2062490877);

}
}
});
/**
 * Given three colinear points p, q, r checks if q lies on segment pr
 */
app.common.geom.shapes.intersect.on_segment_QMARK_ = (function app$common$geom$shapes$intersect$on_segment_QMARK_(p__50343,p__50344,p__50345){
var map__50346 = p__50343;
var map__50346__$1 = cljs.core.__destructure_map(map__50346);
var qx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50346__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var qy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50346__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__50347 = p__50344;
var map__50347__$1 = cljs.core.__destructure_map(map__50347);
var px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50347__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50347__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__50348 = p__50345;
var map__50348__$1 = cljs.core.__destructure_map(map__50348);
var rx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50348__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50348__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return (((qx <= Math.max(px,rx))) && ((((qx >= Math.min(px,rx))) && ((((qy <= Math.max(py,ry))) && ((qy >= Math.min(py,ry))))))));
});
/**
 * Given two segments A<pa1,pa2> and B<pb1,pb2> defined by two points.
 *   Checks if they intersects.
 */
app.common.geom.shapes.intersect.intersect_segments_QMARK_ = (function app$common$geom$shapes$intersect$intersect_segments_QMARK_(p__50353,p__50354){
var vec__50355 = p__50353;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50355,(0),null);
var q1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50355,(1),null);
var vec__50358 = p__50354;
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50358,(0),null);
var q2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50358,(1),null);
var o1 = app.common.geom.shapes.intersect.orientation(p1,q1,p2);
var o2 = app.common.geom.shapes.intersect.orientation(p1,q1,q2);
var o3 = app.common.geom.shapes.intersect.orientation(p2,q2,p1);
var o4 = app.common.geom.shapes.intersect.orientation(p2,q2,q1);
return ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(o1,o2)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(o3,o4)))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(o1,new cljs.core.Keyword(null,"coplanar","coplanar",-17755778))) && (app.common.geom.shapes.intersect.on_segment_QMARK_(p2,p1,q1)))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(o2,new cljs.core.Keyword(null,"coplanar","coplanar",-17755778))) && (app.common.geom.shapes.intersect.on_segment_QMARK_(q2,p1,q1)))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(o3,new cljs.core.Keyword(null,"coplanar","coplanar",-17755778))) && (app.common.geom.shapes.intersect.on_segment_QMARK_(p1,p2,q2)))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(o4,new cljs.core.Keyword(null,"coplanar","coplanar",-17755778))) && (app.common.geom.shapes.intersect.on_segment_QMARK_(q1,p2,q2)))))))))));
});
/**
 * Given a set of points for a polygon will return
 *   the lines that define it
 */
app.common.geom.shapes.intersect.points__GT_lines = (function app$common$geom$shapes$intersect$points__GT_lines(var_args){
var G__50370 = arguments.length;
switch (G__50370) {
case 1:
return app.common.geom.shapes.intersect.points__GT_lines.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.geom.shapes.intersect.points__GT_lines.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.intersect.points__GT_lines.cljs$core$IFn$_invoke$arity$1 = (function (points){
return app.common.geom.shapes.intersect.points__GT_lines.cljs$core$IFn$_invoke$arity$2(points,true);
}));

(app.common.geom.shapes.intersect.points__GT_lines.cljs$core$IFn$_invoke$arity$2 = (function (points,closed_QMARK_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,points,(function (){var G__50371 = cljs.core.rest(points);
if(closed_QMARK_ === true){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(G__50371,(new cljs.core.List(null,cljs.core.first(points),null,(1),null)));
} else {
return G__50371;
}
})());
}));

(app.common.geom.shapes.intersect.points__GT_lines.cljs$lang$maxFixedArity = 2);

/**
 * Checks if two sets of lines intersect in any point
 */
app.common.geom.shapes.intersect.intersects_lines_QMARK_ = (function app$common$geom$shapes$intersect$intersects_lines_QMARK_(lines_a,lines_b){
var cur_line = cljs.core.first(lines_a);
var pending = cljs.core.rest(lines_a);
while(true){
if(cljs.core.not(cur_line)){
return false;
} else {
if(cljs.core.truth_(cljs.core.some(((function (cur_line,pending){
return (function (p1__50372_SHARP_){
return app.common.geom.shapes.intersect.intersect_segments_QMARK_(cur_line,p1__50372_SHARP_);
});})(cur_line,pending))
,lines_b))){
return true;
} else {
var G__50413 = cljs.core.first(pending);
var G__50414 = cljs.core.rest(pending);
cur_line = G__50413;
pending = G__50414;
continue;
}
}
break;
}
});
/**
 * Checks the intersection between segment qr and a ray
 *   starting in point p with an angle of 0 degrees
 */
app.common.geom.shapes.intersect.intersect_ray_QMARK_ = (function app$common$geom$shapes$intersect$intersect_ray_QMARK_(p__50373,p__50374){
var map__50375 = p__50373;
var map__50375__$1 = cljs.core.__destructure_map(map__50375);
var px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50375__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50375__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__50376 = p__50374;
var map__50379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50376,(0),null);
var map__50379__$1 = cljs.core.__destructure_map(map__50379);
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50379__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50379__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__50380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50376,(1),null);
var map__50380__$1 = cljs.core.__destructure_map(map__50380);
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50380__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50380__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
if((((((y1 <= py)) && ((y2 > py)))) || ((((y1 > py)) && ((y2 <= py)))))){
var vt = ((py - y1) / (y2 - y1));
var ix = (x1 + (vt * (x2 - x1)));
return (px < ix);
} else {
return false;
}
});
/**
 * Check if the point P is inside the polygon defined by `points`
 */
app.common.geom.shapes.intersect.is_point_inside_evenodd_QMARK_ = (function app$common$geom$shapes$intersect$is_point_inside_evenodd_QMARK_(p,lines){
return cljs.core.odd_QMARK_(cljs.core.count(cljs.core.filterv((function (p1__50381_SHARP_){
return app.common.geom.shapes.intersect.intersect_ray_QMARK_(p,p1__50381_SHARP_);
}),lines)));
});
/**
 * Calculates the next windup number for the nonzero algorithm
 */
app.common.geom.shapes.intersect.next_windup = (function app$common$geom$shapes$intersect$next_windup(wn,p__50383,p__50384){
var map__50385 = p__50383;
var map__50385__$1 = cljs.core.__destructure_map(map__50385);
var px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50385__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50385__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__50386 = p__50384;
var map__50389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50386,(0),null);
var map__50389__$1 = cljs.core.__destructure_map(map__50389);
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50389__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50389__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__50390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50386,(1),null);
var map__50390__$1 = cljs.core.__destructure_map(map__50390);
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50390__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50390__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var line_side = (((x2 - x1) * (py - y1)) - ((px - x1) * (y2 - y1)));
if((y1 <= py)){
if((((y2 > py)) && ((line_side > (0))))){
return (wn + (1));
} else {
return wn;
}
} else {
if((((y2 <= py)) && ((line_side < (0))))){
return (wn - (1));
} else {
return wn;
}
}
});
/**
 * Check if the point P is inside the polygon defined by `points`
 */
app.common.geom.shapes.intersect.is_point_inside_nonzero_QMARK_ = (function app$common$geom$shapes$intersect$is_point_inside_nonzero_QMARK_(p,lines){
var wn = (0);
var line = cljs.core.first(lines);
var lines__$1 = cljs.core.rest(lines);
while(true){
if(cljs.core.truth_(line)){
var wn__$1 = app.common.geom.shapes.intersect.next_windup(wn,p,line);
var G__50415 = wn__$1;
var G__50416 = cljs.core.first(lines__$1);
var G__50417 = cljs.core.rest(lines__$1);
wn = G__50415;
line = G__50416;
lines__$1 = G__50417;
continue;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(wn,(0));
}
break;
}
});
/**
 * Checks if the given rect intersects with the selrect
 */
app.common.geom.shapes.intersect.overlaps_rect_points_QMARK_ = (function app$common$geom$shapes$intersect$overlaps_rect_points_QMARK_(rect,points){
var rect_points = app.common.geom.rect.rect__GT_points(rect);
var rect_lines = app.common.geom.shapes.intersect.points__GT_lines.cljs$core$IFn$_invoke$arity$1(rect_points);
var points_lines = app.common.geom.shapes.intersect.points__GT_lines.cljs$core$IFn$_invoke$arity$1(points);
return ((app.common.geom.shapes.intersect.is_point_inside_evenodd_QMARK_(cljs.core.first(rect_points),points_lines)) || (((app.common.geom.shapes.intersect.is_point_inside_evenodd_QMARK_(cljs.core.first(points),rect_lines)) || (app.common.geom.shapes.intersect.intersects_lines_QMARK_(rect_lines,points_lines)))));
});
/**
 * Checks if the given rect overlaps with the path in any point
 */
app.common.geom.shapes.intersect.overlaps_path_QMARK_ = (function app$common$geom$shapes$intersect$overlaps_path_QMARK_(shape,rect,include_content_QMARK_){
if(app.common.data.not_empty_QMARK_(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape))){
var simple_QMARK_ = (cljs.core.count(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape)) > (100));
var rect_points = app.common.geom.rect.rect__GT_points(rect);
var rect_lines = app.common.geom.shapes.intersect.points__GT_lines.cljs$core$IFn$_invoke$arity$1(rect_points);
var path_lines = ((simple_QMARK_)?app.common.geom.shapes.intersect.points__GT_lines.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape)):app.common.types.path.segment.path__GT_lines(shape));
var start_point = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape))));
var or__5025__auto__ = app.common.geom.shapes.intersect.intersects_lines_QMARK_(rect_lines,path_lines);
if(or__5025__auto__){
return or__5025__auto__;
} else {
if(cljs.core.truth_(include_content_QMARK_)){
return ((app.common.geom.shapes.intersect.is_point_inside_nonzero_QMARK_(cljs.core.first(rect_points),path_lines)) || (app.common.geom.shapes.intersect.is_point_inside_nonzero_QMARK_(start_point,rect_lines)));
} else {
return false;
}
}
} else {
return null;
}
});
/**
 * checks if a point is inside an ellipse
 */
app.common.geom.shapes.intersect.is_point_inside_ellipse_QMARK_ = (function app$common$geom$shapes$intersect$is_point_inside_ellipse_QMARK_(point,p__50391){
var map__50392 = p__50391;
var map__50392__$1 = cljs.core.__destructure_map(map__50392);
var cx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50392__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50392__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var rx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50392__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var ry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50392__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50392__$1,new cljs.core.Keyword(null,"transform","transform",1381301764));
var center = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(cx,cy);
var transform__$1 = (((!((transform == null))))?app.common.geom.matrix.transform_in(center,transform):null);
var map__50393 = (((!((transform__$1 == null))))?app.common.geom.point.transform(point,transform__$1):point);
var map__50393__$1 = cljs.core.__destructure_map(map__50393);
var px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50393__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50393__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var v = ((app.common.math.sq((px - cx)) / app.common.math.sq(rx)) + (app.common.math.sq((py - cy)) / app.common.math.sq(ry)));
return (v <= (1));
});
/**
 * Checks whether a single line intersects with the given ellipse
 */
app.common.geom.shapes.intersect.intersects_line_ellipse_QMARK_ = (function app$common$geom$shapes$intersect$intersects_line_ellipse_QMARK_(p__50394,p__50395){
var vec__50396 = p__50394;
var map__50399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50396,(0),null);
var map__50399__$1 = cljs.core.__destructure_map(map__50399);
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50399__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50399__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__50400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50396,(1),null);
var map__50400__$1 = cljs.core.__destructure_map(map__50400);
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50400__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50400__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__50401 = p__50395;
var map__50401__$1 = cljs.core.__destructure_map(map__50401);
var cx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50401__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50401__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var rx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50401__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var ry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50401__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var a = ((app.common.math.sq((x2 - x1)) / app.common.math.sq(rx)) + (app.common.math.sq((y2 - y1)) / app.common.math.sq(ry)));
var b = ((((((2) * x1) * (x2 - x1)) - (((2) * cx) * (x2 - x1))) / app.common.math.sq(rx)) + (((((2) * y1) * (y2 - y1)) - (((2) * cy) * (y2 - y1))) / app.common.math.sq(ry)));
var c = (((((app.common.math.sq(x1) + app.common.math.sq(cx)) + (((-2) * x1) * cx)) / app.common.math.sq(rx)) + (((app.common.math.sq(y1) + app.common.math.sq(cy)) + (((-2) * y1) * cy)) / app.common.math.sq(ry))) + (-1));
var determ = (app.common.math.sq(b) - (((4) * a) * c));
if(app.common.math.almost_zero_QMARK_(a)){
if(app.common.math.almost_zero_QMARK_(b)){
return null;
} else {
var t = ((- c) / b);
return (((t >= (0))) && ((t <= (1))));
}
} else {
if((determ >= (0))){
var t1 = (((- b) + app.common.math.sqrt(determ)) / ((2) * a));
var t2 = (((- b) - app.common.math.sqrt(determ)) / ((2) * a));
return (((((t1 >= (0))) && ((t1 <= (1))))) || ((((t2 >= (0))) && ((t2 <= (1))))));
} else {
return null;
}
}
});
/**
 * Checks if a set of lines intersect with an ellipse in any point
 */
app.common.geom.shapes.intersect.intersects_lines_ellipse_QMARK_ = (function app$common$geom$shapes$intersect$intersects_lines_ellipse_QMARK_(rect_lines,p__50402){
var map__50403 = p__50402;
var map__50403__$1 = cljs.core.__destructure_map(map__50403);
var ellipse_data = map__50403__$1;
var cx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50403__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50403__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50403__$1,new cljs.core.Keyword(null,"transform","transform",1381301764));
var center = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(cx,cy);
var transform__$1 = (((!((transform == null))))?app.common.geom.matrix.transform_in(center,transform):null);
return cljs.core.some((function (p__50404){
var vec__50405 = p__50404;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50405,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50405,(1),null);
var p1__$1 = (((!((transform__$1 == null))))?app.common.geom.point.transform(p1,transform__$1):p1);
var p2__$1 = (((!((transform__$1 == null))))?app.common.geom.point.transform(p2,transform__$1):p2);
return app.common.geom.shapes.intersect.intersects_line_ellipse_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__$1,p2__$1], null),ellipse_data);
}),rect_lines);
});
/**
 * Checks if the given rect overlaps with an ellipse
 */
app.common.geom.shapes.intersect.overlaps_ellipse_QMARK_ = (function app$common$geom$shapes$intersect$overlaps_ellipse_QMARK_(shape,rect){
var rect_points = app.common.geom.rect.rect__GT_points(rect);
var rect_lines = app.common.geom.shapes.intersect.points__GT_lines.cljs$core$IFn$_invoke$arity$1(rect_points);
var map__50408 = shape;
var map__50408__$1 = cljs.core.__destructure_map(map__50408);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50408__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50408__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50408__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50408__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var center = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + (width / (2))),(y + (height / (2))));
var ellipse_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(center),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(center),new cljs.core.Keyword(null,"rx","rx",1627208482),(width / (2)),new cljs.core.Keyword(null,"ry","ry",-334598563),(height / (2)),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$1(shape)], null);
var or__5025__auto__ = app.common.geom.shapes.intersect.is_point_inside_evenodd_QMARK_(center,rect_lines);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = app.common.geom.shapes.intersect.is_point_inside_ellipse_QMARK_(cljs.core.first(rect_points),ellipse_data);
if(or__5025__auto____$1){
return or__5025__auto____$1;
} else {
return app.common.geom.shapes.intersect.intersects_lines_ellipse_QMARK_(rect_lines,ellipse_data);
}
}
});
app.common.geom.shapes.intersect.overlaps_text_QMARK_ = (function app$common$geom$shapes$intersect$overlaps_text_QMARK_(p__50410,rect){
var map__50411 = p__50410;
var map__50411__$1 = cljs.core.__destructure_map(map__50411);
var shape = map__50411__$1;
var position_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50411__$1,new cljs.core.Keyword(null,"position-data","position-data",-499622376));
if((((!((position_data == null)))) && (app.common.data.not_empty_QMARK_(position_data)))){
var center = app.common.geom.shapes.common.shape__GT_center(shape);
var transform_rect = (function (rect_points){
return app.common.geom.shapes.common.transform_points.cljs$core$IFn$_invoke$arity$3(rect_points,center,new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(shape));
});
return cljs.core.some((function (p1__50409_SHARP_){
return app.common.geom.shapes.intersect.overlaps_rect_points_QMARK_(rect,p1__50409_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(transform_rect,app.common.geom.rect.rect__GT_points,app.common.geom.shapes.text.position_data__GT_rect),position_data));
} else {
return app.common.geom.shapes.intersect.overlaps_rect_points_QMARK_(rect,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape));
}
});
/**
 * General case to check for overlapping between shapes and a rectangle
 */
app.common.geom.shapes.intersect.overlaps_QMARK_ = (function app$common$geom$shapes$intersect$overlaps_QMARK_(shape,rect){
var swidth = ((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})() / (2));
var rect__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(rect,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._,swidth),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,swidth),new cljs.core.Keyword(null,"width","width",-384071477),cljs.core._PLUS_,((2) * swidth)),new cljs.core.Keyword(null,"height","height",1025178622),cljs.core._PLUS_,((2) * swidth));
var or__5025__auto__ = cljs.core.not(shape);
if(or__5025__auto__){
return or__5025__auto__;
} else {
if(((app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) || (app.common.files.helpers.bool_shape_QMARK_(shape)))){
var and__5023__auto__ = app.common.geom.shapes.intersect.overlaps_rect_points_QMARK_(rect__$1,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape));
if(and__5023__auto__){
return app.common.geom.shapes.intersect.overlaps_path_QMARK_(shape,rect__$1,true);
} else {
return and__5023__auto__;
}
} else {
if(app.common.files.helpers.circle_shape_QMARK_(shape)){
var and__5023__auto__ = app.common.geom.shapes.intersect.overlaps_rect_points_QMARK_(rect__$1,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape));
if(and__5023__auto__){
return app.common.geom.shapes.intersect.overlaps_ellipse_QMARK_(shape,rect__$1);
} else {
return and__5023__auto__;
}
} else {
if(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return app.common.geom.shapes.intersect.overlaps_text_QMARK_(shape,rect__$1);
} else {
return app.common.geom.shapes.intersect.overlaps_rect_points_QMARK_(rect__$1,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape));

}
}
}
}
});
app.common.geom.shapes.intersect.has_point_rect_QMARK_ = (function app$common$geom$shapes$intersect$has_point_rect_QMARK_(rect,point){
var lines = app.common.geom.rect.rect__GT_lines(rect);
return app.common.geom.shapes.intersect.is_point_inside_evenodd_QMARK_(point,lines);
});
app.common.geom.shapes.intersect.slow_has_point_QMARK_ = (function app$common$geom$shapes$intersect$slow_has_point_QMARK_(shape,point){
var lines = app.common.geom.shapes.intersect.points__GT_lines.cljs$core$IFn$_invoke$arity$1((shape?.points?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"points","points",-1486596883))));
return app.common.geom.shapes.intersect.is_point_inside_evenodd_QMARK_(point,lines);
});
app.common.geom.shapes.intersect.fast_has_point_QMARK_ = (function app$common$geom$shapes$intersect$fast_has_point_QMARK_(shape,point){
var x1 = (shape?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"x","x",2099068185)));
var y1 = (shape?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"y","y",-1757859776)));
var x2 = (x1 + (shape?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"width","width",-384071477))));
var y2 = (y1 + (shape?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"height","height",1025178622))));
var px = (point?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.Keyword(null,"x","x",2099068185)));
var py = (point?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.Keyword(null,"y","y",-1757859776)));
return (((px >= x1)) && ((((px <= x2)) && ((((py >= y1)) && ((py <= y2)))))));
});
app.common.geom.shapes.intersect.has_point_QMARK_ = (function app$common$geom$shapes$intersect$has_point_QMARK_(shape,point){
if(((app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) || (((app.common.files.helpers.bool_shape_QMARK_(shape)) || (app.common.files.helpers.circle_shape_QMARK_(shape)))))){
return app.common.geom.shapes.intersect.slow_has_point_QMARK_(shape,point);
} else {
return app.common.geom.shapes.intersect.fast_has_point_QMARK_(shape,point);
}
});
app.common.geom.shapes.intersect.rect_contains_shape_QMARK_ = (function app$common$geom$shapes$intersect$rect_contains_shape_QMARK_(rect,shape){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.intersect.has_point_rect_QMARK_,rect),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape));
});
/**
 * Calculates the interesection point for two lines given by the points a-b and b-c
 */
app.common.geom.shapes.intersect.line_line_intersect = (function app$common$geom$shapes$intersect$line_line_intersect(a,b,c,d){
var a1 = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));
var b1 = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b));
var c1 = ((a1 * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a)) + (b1 * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a)));
var a2 = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(d) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(c));
var b2 = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(c) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(d));
var c2 = ((a2 * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(c)) + (b2 * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(c)));
var det = ((a1 * b2) - (a2 * b1));
var det__$1 = ((app.common.math.almost_zero_QMARK_(det))?0.001:det);
var x = (((b2 * c1) - (b1 * c2)) / det__$1);
var y = (((c2 * a1) - (c1 * a2)) / det__$1);
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y);
});

//# sourceMappingURL=app.common.geom.shapes.intersect.js.map
