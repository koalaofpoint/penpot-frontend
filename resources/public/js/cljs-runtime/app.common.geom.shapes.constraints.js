import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.common.js";
import "./app.common.geom.shapes.intersect.js";
import "./app.common.geom.shapes.points.js";
import "./app.common.geom.shapes.transforms.js";
import "./app.common.math.js";
import "./app.common.types.modifiers.js";
import "./app.common.types.shape.layout.js";
import "./app.common.uuid.js";
goog.provide('app.common.geom.shapes.constraints');
app.common.geom.shapes.constraints.other_axis = (function app$common$geom$shapes$constraints$other_axis(axis){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),axis)){
return new cljs.core.Keyword(null,"y","y",-1757859776);
} else {
return new cljs.core.Keyword(null,"x","x",2099068185);
}
});
app.common.geom.shapes.constraints.get_delta_start = (function app$common$geom$shapes$constraints$get_delta_start(axis,rect,tr_rect){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),axis)){
return (new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(tr_rect) - new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(rect));
} else {
return (new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(tr_rect) - new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(rect));
}
});
app.common.geom.shapes.constraints.get_delta_end = (function app$common$geom$shapes$constraints$get_delta_end(axis,rect,tr_rect){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),axis)){
return (new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(tr_rect) - new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(rect));
} else {
return (new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(tr_rect) - new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(rect));
}
});
app.common.geom.shapes.constraints.get_delta_size = (function app$common$geom$shapes$constraints$get_delta_size(axis,rect,tr_rect){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),axis)){
return (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(tr_rect) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect));
} else {
return (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(tr_rect) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect));
}
});
app.common.geom.shapes.constraints.get_delta_scale = (function app$common$geom$shapes$constraints$get_delta_scale(axis,rect,tr_rect){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),axis)){
return (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(tr_rect) / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect));
} else {
return (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(tr_rect) / new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect));
}
});
app.common.geom.shapes.constraints.get_delta_center = (function app$common$geom$shapes$constraints$get_delta_center(axis,center,tr_center){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),axis)){
return (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tr_center) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(center));
} else {
return (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tr_center) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(center));
}
});
app.common.geom.shapes.constraints.get_displacement = (function app$common$geom$shapes$constraints$get_displacement(var_args){
var G__50485 = arguments.length;
switch (G__50485) {
case 2:
return app.common.geom.shapes.constraints.get_displacement.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return app.common.geom.shapes.constraints.get_displacement.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.constraints.get_displacement.cljs$core$IFn$_invoke$arity$2 = (function (axis,delta){
return app.common.geom.shapes.constraints.get_displacement.cljs$core$IFn$_invoke$arity$4(axis,delta,(0),(0));
}));

(app.common.geom.shapes.constraints.get_displacement.cljs$core$IFn$_invoke$arity$4 = (function (axis,delta,init_x,init_y){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),axis)){
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((init_x + delta),init_y);
} else {
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(init_x,(init_y + delta));
}
}));

(app.common.geom.shapes.constraints.get_displacement.cljs$lang$maxFixedArity = 4);

app.common.geom.shapes.constraints.get_scale = (function app$common$geom$shapes$constraints$get_scale(axis,scale){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),axis)){
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(scale,(1));
} else {
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((1),scale);
}
});
app.common.geom.shapes.constraints.get_size = (function app$common$geom$shapes$constraints$get_size(axis,rect){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),axis)){
return new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect);
} else {
return new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect);
}
});
app.common.geom.shapes.constraints.right_vector = (function app$common$geom$shapes$constraints$right_vector(child_points,parent_points){
var vec__50486 = parent_points;
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50486,(0),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50486,(1),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50486,(2),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50486,(3),null);
var vec__50489 = child_points;
var _c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50489,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50489,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50489,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50489,(3),null);
var dir_v = app.common.geom.point.to_vec(p0,p1);
var cp = app.common.geom.shapes.intersect.line_line_intersect(c1,app.common.geom.point.add(c1,dir_v),p1,p2);
return app.common.geom.point.to_vec(c1,cp);
});
app.common.geom.shapes.constraints.left_vector = (function app$common$geom$shapes$constraints$left_vector(child_points,parent_points){
var vec__50493 = parent_points;
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50493,(0),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50493,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50493,(2),null);
var p3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50493,(3),null);
var vec__50496 = child_points;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50496,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50496,(1),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50496,(2),null);
var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50496,(3),null);
var dir_v = app.common.geom.point.to_vec(p0,p1);
var cp = app.common.geom.shapes.intersect.line_line_intersect(c3,app.common.geom.point.add(c3,dir_v),p0,p3);
return app.common.geom.point.to_vec(c3,cp);
});
app.common.geom.shapes.constraints.top_vector = (function app$common$geom$shapes$constraints$top_vector(child_points,parent_points){
var vec__50499 = parent_points;
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50499,(0),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50499,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50499,(2),null);
var p3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50499,(3),null);
var vec__50502 = child_points;
var c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50502,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50502,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50502,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50502,(3),null);
var dir_v = app.common.geom.point.to_vec(p0,p3);
var cp = app.common.geom.shapes.intersect.line_line_intersect(c0,app.common.geom.point.add(c0,dir_v),p0,p1);
return app.common.geom.point.to_vec(c0,cp);
});
app.common.geom.shapes.constraints.bottom_vector = (function app$common$geom$shapes$constraints$bottom_vector(child_points,parent_points){
var vec__50505 = parent_points;
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50505,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50505,(1),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50505,(2),null);
var p3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50505,(3),null);
var vec__50508 = child_points;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50508,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50508,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50508,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50508,(3),null);
var dir_v = app.common.geom.point.to_vec(p0,p3);
var cp = app.common.geom.shapes.intersect.line_line_intersect(c2,app.common.geom.point.add(c2,dir_v),p2,p3);
return app.common.geom.point.to_vec(c2,cp);
});
app.common.geom.shapes.constraints.center_horizontal_vector = (function app$common$geom$shapes$constraints$center_horizontal_vector(child_points,parent_points){
var vec__50511 = parent_points;
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50511,(0),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50511,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50511,(2),null);
var p3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50511,(3),null);
var vec__50514 = child_points;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50514,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50514,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50514,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50514,(3),null);
var dir_v = app.common.geom.point.to_vec(p0,p1);
var p1c = app.common.geom.point.add(p0,app.common.geom.point.scale(dir_v,0.5));
var p2c = app.common.geom.point.add(p3,app.common.geom.point.scale(dir_v,0.5));
var cp = app.common.geom.shapes.intersect.line_line_intersect(c1,app.common.geom.point.add(c1,dir_v),p1c,p2c);
return app.common.geom.point.to_vec(c1,cp);
});
app.common.geom.shapes.constraints.center_vertical_vector = (function app$common$geom$shapes$constraints$center_vertical_vector(child_points,parent_points){
var vec__50517 = parent_points;
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50517,(0),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50517,(1),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50517,(2),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50517,(3),null);
var vec__50520 = child_points;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50520,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50520,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50520,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50520,(3),null);
var dir_v = app.common.geom.point.to_vec(p1,p2);
var p3c = app.common.geom.point.add(p0,app.common.geom.point.scale(dir_v,0.5));
var p2c = app.common.geom.point.add(p1,app.common.geom.point.scale(dir_v,0.5));
var cp = app.common.geom.shapes.intersect.line_line_intersect(c1,app.common.geom.point.add(c1,dir_v),p3c,p2c);
return app.common.geom.point.to_vec(c1,cp);
});
app.common.geom.shapes.constraints.start_vector = (function app$common$geom$shapes$constraints$start_vector(axis,child_points,parent_points){
var pos_vector = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),axis))?app.common.geom.shapes.constraints.left_vector:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),axis))?app.common.geom.shapes.constraints.top_vector:null));
return (pos_vector.cljs$core$IFn$_invoke$arity$2 ? pos_vector.cljs$core$IFn$_invoke$arity$2(child_points,parent_points) : pos_vector.call(null,child_points,parent_points));
});
app.common.geom.shapes.constraints.end_vector = (function app$common$geom$shapes$constraints$end_vector(axis,child_points,parent_points){
var pos_vector = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),axis))?app.common.geom.shapes.constraints.right_vector:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),axis))?app.common.geom.shapes.constraints.bottom_vector:null));
return (pos_vector.cljs$core$IFn$_invoke$arity$2 ? pos_vector.cljs$core$IFn$_invoke$arity$2(child_points,parent_points) : pos_vector.call(null,child_points,parent_points));
});
app.common.geom.shapes.constraints.center_vector = (function app$common$geom$shapes$constraints$center_vector(axis,child_points,parent_points){
var fexpr__50526 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),axis))?app.common.geom.shapes.constraints.center_horizontal_vector:app.common.geom.shapes.constraints.center_vertical_vector);
return (fexpr__50526.cljs$core$IFn$_invoke$arity$2 ? fexpr__50526.cljs$core$IFn$_invoke$arity$2(child_points,parent_points) : fexpr__50526.call(null,child_points,parent_points));
});
app.common.geom.shapes.constraints.displacement = (function app$common$geom$shapes$constraints$displacement(before_v,after_v,before_parent_side_v,after_parent_side_v){
var before_angl = app.common.geom.point.angle_with_other(before_v,before_parent_side_v);
var after_angl = app.common.geom.point.angle_with_other(after_v,after_parent_side_v);
var sign = (cljs.core.truth_(app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(before_angl,after_angl))?(1):(-1));
var length = (sign * app.common.geom.point.length(before_v));
if(app.common.math.almost_zero_QMARK_(length)){
return after_v;
} else {
return app.common.geom.point.subtract(after_v,app.common.geom.point.scale(app.common.geom.point.unit(after_v),length));
}
});
app.common.geom.shapes.constraints.side_vector = (function app$common$geom$shapes$constraints$side_vector(axis,p__50531){
var vec__50533 = p__50531;
var c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50533,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50533,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50533,(2),null);
var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50533,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"x","x",2099068185))){
return app.common.geom.point.to_vec(c0,c1);
} else {
return app.common.geom.point.to_vec(c0,c3);
}
});
app.common.geom.shapes.constraints.side_vector_resize = (function app$common$geom$shapes$constraints$side_vector_resize(axis,p__50538,start_vector,end_vector){
var vec__50539 = p__50538;
var c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50539,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50539,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50539,(2),null);
var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50539,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"x","x",2099068185))){
return app.common.geom.point.to_vec(app.common.geom.point.add(c0,start_vector),app.common.geom.point.add(c1,end_vector));
} else {
return app.common.geom.point.to_vec(app.common.geom.point.add(c0,start_vector),app.common.geom.point.add(c3,end_vector));
}
});
if((typeof app !== 'undefined') && (typeof app.common !== 'undefined') && (typeof app.common.geom !== 'undefined') && (typeof app.common.geom.shapes !== 'undefined') && (typeof app.common.geom.shapes.constraints !== 'undefined') && (typeof app.common.geom.shapes.constraints.constraint_modifier !== 'undefined')){
} else {
app.common.geom.shapes.constraints.constraint_modifier = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__50542 = cljs.core.get_global_hierarchy;
return (fexpr__50542.cljs$core$IFn$_invoke$arity$0 ? fexpr__50542.cljs$core$IFn$_invoke$arity$0() : fexpr__50542.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.common.geom.shapes.constraints","constraint-modifier"),(function() { 
var G__50544__delegate = function (type,_){
return type;
};
var G__50544 = function (type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__50545__i = 0, G__50545__a = new Array(arguments.length -  1);
while (G__50545__i < G__50545__a.length) {G__50545__a[G__50545__i] = arguments[G__50545__i + 1]; ++G__50545__i;}
  _ = new cljs.core.IndexedSeq(G__50545__a,0,null);
} 
return G__50544__delegate.call(this,type,_);};
G__50544.cljs$lang$maxFixedArity = 1;
G__50544.cljs$lang$applyTo = (function (arglist__50546){
var type = cljs.core.first(arglist__50546);
var _ = cljs.core.rest(arglist__50546);
return G__50544__delegate(type,_);
});
G__50544.cljs$core$IFn$_invoke$arity$variadic = G__50544__delegate;
return G__50544;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
app.common.geom.shapes.constraints.constraint_modifier.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"start","start",-355208981),(function (_,axis,child_points_before,parent_points_before,child_points_after,parent_points_after){
var start_before = app.common.geom.shapes.constraints.start_vector(axis,child_points_before,parent_points_before);
var start_after = app.common.geom.shapes.constraints.start_vector(axis,child_points_after,parent_points_after);
var before_side_vector = app.common.geom.shapes.constraints.side_vector(axis,parent_points_before);
var after_side_vector = app.common.geom.shapes.constraints.side_vector(axis,parent_points_after);
return app.common.types.modifiers.move_modifiers.cljs$core$IFn$_invoke$arity$1(app.common.geom.shapes.constraints.displacement(start_before,start_after,before_side_vector,after_side_vector));
}));
app.common.geom.shapes.constraints.constraint_modifier.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"end","end",-268185958),(function (_,axis,child_points_before,parent_points_before,child_points_after,parent_points_after){
var end_before = app.common.geom.shapes.constraints.end_vector(axis,child_points_before,parent_points_before);
var end_after = app.common.geom.shapes.constraints.end_vector(axis,child_points_after,parent_points_after);
var before_side_vector = app.common.geom.shapes.constraints.side_vector(axis,parent_points_before);
var after_side_vector = app.common.geom.shapes.constraints.side_vector(axis,parent_points_after);
return app.common.types.modifiers.move_modifiers.cljs$core$IFn$_invoke$arity$1(app.common.geom.shapes.constraints.displacement(end_before,end_after,before_side_vector,after_side_vector));
}));
app.common.geom.shapes.constraints.constraint_modifier.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),(function (_,axis,child_points_before,parent_points_before,child_points_after,parent_points_after){
var end_before = app.common.geom.shapes.constraints.end_vector(axis,child_points_before,parent_points_before);
var end_after = app.common.geom.shapes.constraints.end_vector(axis,child_points_after,parent_points_after);
var start_before = app.common.geom.shapes.constraints.start_vector(axis,child_points_before,parent_points_before);
var start_after = app.common.geom.shapes.constraints.start_vector(axis,child_points_after,parent_points_after);
var before_side_vector = app.common.geom.shapes.constraints.side_vector(axis,parent_points_before);
var after_side_vector = app.common.geom.shapes.constraints.side_vector(axis,parent_points_after);
var disp_end = app.common.geom.shapes.constraints.displacement(end_before,end_after,before_side_vector,after_side_vector);
var disp_start = app.common.geom.shapes.constraints.displacement(start_before,start_after,before_side_vector,after_side_vector);
var before_vec = app.common.geom.shapes.constraints.side_vector(axis,child_points_after);
var after_vec = app.common.geom.shapes.constraints.side_vector_resize(axis,child_points_after,disp_start,disp_end);
var scale = (app.common.geom.point.length(after_vec) / Math.max(0.01,app.common.geom.point.length(before_vec)));
var resize_origin = app.common.geom.shapes.points.origin(child_points_after);
var center = app.common.geom.shapes.common.points__GT_center(parent_points_after);
var selrect = app.common.geom.shapes.transforms.calculate_selrect(parent_points_after,center);
var transform = app.common.geom.shapes.transforms.calculate_transform(parent_points_after,center,selrect);
var transform_inverse = (((!((transform == null))))?app.common.geom.matrix.inverse(transform):null);
var resize_vector = app.common.geom.shapes.constraints.get_scale(axis,scale);
return app.common.types.modifiers.move.cljs$core$IFn$_invoke$arity$2(app.common.types.modifiers.resize.cljs$core$IFn$_invoke$arity$5(app.common.types.modifiers.empty(),resize_vector,resize_origin,transform,transform_inverse),disp_start);
}));
app.common.geom.shapes.constraints.constraint_modifier.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"center","center",-748944368),(function (_,axis,child_points_before,parent_points_before,child_points_after,parent_points_after){
var center_before = app.common.geom.shapes.constraints.center_vector(axis,child_points_before,parent_points_before);
var center_after = app.common.geom.shapes.constraints.center_vector(axis,child_points_after,parent_points_after);
var before_side_vector = app.common.geom.shapes.constraints.side_vector(axis,parent_points_before);
var after_side_vector = app.common.geom.shapes.constraints.side_vector(axis,parent_points_after);
return app.common.types.modifiers.move_modifiers.cljs$core$IFn$_invoke$arity$1(app.common.geom.shapes.constraints.displacement(center_before,center_after,before_side_vector,after_side_vector));
}));
app.common.geom.shapes.constraints.constraint_modifier.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1,___$2,___$3,___$4){
return cljs.core.PersistentVector.EMPTY;
}));
app.common.geom.shapes.constraints.const__GT_type_PLUS_axis = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"leftright","leftright",1894963129),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"topbottom","topbottom",207067417),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"scale","scale",-230427353)], null);
app.common.geom.shapes.constraints.default_constraints_h = (function app$common$geom$shapes$constraints$default_constraints_h(shape){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),app.common.uuid.zero)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape))){
return new cljs.core.Keyword(null,"left","left",-399115937);
} else {
return new cljs.core.Keyword(null,"scale","scale",-230427353);
}
}
});
app.common.geom.shapes.constraints.default_constraints_v = (function app$common$geom$shapes$constraints$default_constraints_v(shape){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),app.common.uuid.zero)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape))){
return new cljs.core.Keyword(null,"top","top",-1856271961);
} else {
return new cljs.core.Keyword(null,"scale","scale",-230427353);
}
}
});
/**
 * Before aplying constraints we need to remove the deformation caused by the resizing of the parent
 */
app.common.geom.shapes.constraints.normalize_modifiers = (function app$common$geom$shapes$constraints$normalize_modifiers(constraints_h,constraints_v,modifiers,child_bounds,transformed_child_bounds,parent_bounds,transformed_parent_bounds){
var child_bb_before = app.common.geom.shapes.points.parent_coords_bounds(child_bounds,parent_bounds);
var child_bb_after = app.common.geom.shapes.points.parent_coords_bounds(transformed_child_bounds,transformed_parent_bounds);
var scale_x = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"scale","scale",-230427353),constraints_h))?(1):(app.common.geom.shapes.points.width_points(child_bb_before) / (function (){var x__5110__auto__ = 0.01;
var y__5111__auto__ = app.common.geom.shapes.points.width_points(child_bb_after);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()));
var scale_y = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"scale","scale",-230427353),constraints_v))?(1):(app.common.geom.shapes.points.height_points(child_bb_before) / (function (){var x__5110__auto__ = 0.01;
var y__5111__auto__ = app.common.geom.shapes.points.height_points(child_bb_after);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()));
var resize_vector = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(scale_x,scale_y);
var resize_origin = app.common.geom.shapes.points.origin(child_bb_after);
var center = app.common.geom.shapes.common.points__GT_center(child_bb_after);
var selrect = app.common.geom.shapes.transforms.calculate_selrect(child_bb_after,center);
var transform = app.common.geom.shapes.transforms.calculate_transform(child_bb_after,center,selrect);
var transform_inverse = (((!((transform == null))))?app.common.geom.matrix.inverse(transform):null);
return app.common.types.modifiers.resize.cljs$core$IFn$_invoke$arity$5(modifiers,resize_vector,resize_origin,transform,transform_inverse);
});
app.common.geom.shapes.constraints.calc_child_modifiers = (function app$common$geom$shapes$constraints$calc_child_modifiers(parent,child,modifiers,ignore_constraints,child_bounds,parent_bounds,transformed_parent_bounds){
var modifiers__$1 = app.common.types.modifiers.select_child(modifiers);
var constraints_h = (cljs.core.truth_(ignore_constraints)?new cljs.core.Keyword(null,"scale","scale",-230427353):((((app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)) && (cljs.core.not(app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1(child)))))?new cljs.core.Keyword(null,"left","left",-399115937):new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452).cljs$core$IFn$_invoke$arity$2(child,app.common.geom.shapes.constraints.default_constraints_h(child))
));
var constraints_v = (cljs.core.truth_(ignore_constraints)?new cljs.core.Keyword(null,"scale","scale",-230427353):((((app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)) && (cljs.core.not(app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1(child)))))?new cljs.core.Keyword(null,"top","top",-1856271961):new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122).cljs$core$IFn$_invoke$arity$2(child,app.common.geom.shapes.constraints.default_constraints_v(child))
));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"scale","scale",-230427353),constraints_h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"scale","scale",-230427353),constraints_v)))){
return modifiers__$1;
} else {
var transformed_parent_bounds__$1 = cljs.core.deref(transformed_parent_bounds);
var modifiers__$2 = app.common.types.modifiers.select_child(modifiers__$1);
var reset_modifiers_QMARK_ = ((app.common.geom.shapes.points.axis_aligned_QMARK_(parent_bounds)) && (((app.common.geom.shapes.points.axis_aligned_QMARK_(child_bounds)) && (((app.common.geom.shapes.points.axis_aligned_QMARK_(transformed_parent_bounds__$1)) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"scale","scale",-230427353),constraints_h)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"scale","scale",-230427353),constraints_v)))))))));
var modifiers__$3 = ((reset_modifiers_QMARK_)?app.common.types.modifiers.empty():app.common.geom.shapes.constraints.normalize_modifiers(constraints_h,constraints_v,modifiers__$2,child_bounds,app.common.geom.shapes.transforms.transform_bounds.cljs$core$IFn$_invoke$arity$2(child_bounds,modifiers__$2),parent_bounds,transformed_parent_bounds__$1));
var transformed_child_bounds = ((reset_modifiers_QMARK_)?child_bounds:app.common.geom.shapes.transforms.transform_bounds.cljs$core$IFn$_invoke$arity$2(child_bounds,modifiers__$3));
if(((app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)) && (cljs.core.not(app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1(child))))){
return modifiers__$3;
} else {
var child_points_before = app.common.geom.shapes.points.parent_coords_bounds(child_bounds,parent_bounds);
var child_points_after = app.common.geom.shapes.points.parent_coords_bounds(transformed_child_bounds,transformed_parent_bounds__$1);
var modifiers_h = app.common.geom.shapes.constraints.constraint_modifier.cljs$core$IFn$_invoke$arity$6((constraints_h.cljs$core$IFn$_invoke$arity$1 ? constraints_h.cljs$core$IFn$_invoke$arity$1(app.common.geom.shapes.constraints.const__GT_type_PLUS_axis) : constraints_h.call(null,app.common.geom.shapes.constraints.const__GT_type_PLUS_axis)),new cljs.core.Keyword(null,"x","x",2099068185),child_points_before,parent_bounds,child_points_after,transformed_parent_bounds__$1);
var modifiers_v = app.common.geom.shapes.constraints.constraint_modifier.cljs$core$IFn$_invoke$arity$6((constraints_v.cljs$core$IFn$_invoke$arity$1 ? constraints_v.cljs$core$IFn$_invoke$arity$1(app.common.geom.shapes.constraints.const__GT_type_PLUS_axis) : constraints_v.call(null,app.common.geom.shapes.constraints.const__GT_type_PLUS_axis)),new cljs.core.Keyword(null,"y","y",-1757859776),child_points_before,parent_bounds,child_points_after,transformed_parent_bounds__$1);
return app.common.types.modifiers.add_modifiers(app.common.types.modifiers.add_modifiers(modifiers__$3,modifiers_h),modifiers_v);
}
}
});

//# sourceMappingURL=app.common.geom.shapes.constraints.js.map
