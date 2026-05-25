import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.math.js";
goog.provide('app.common.types.path.helpers');
app.common.types.path.helpers.curve_curve_precision = 0.1;
app.common.types.path.helpers.curve_range_precision = (2);
app.common.types.path.helpers.s_EQ_ = (function app$common$types$path$helpers$s_EQ_(a,b){
return app.common.math.almost_zero_QMARK_((a - b));
});
app.common.types.path.helpers.make_move_to = (function app$common$types$path$helpers$make_move_to(to){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to)], null)], null);
});
app.common.types.path.helpers.make_line_to = (function app$common$types$path$helpers$make_line_to(to){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"line-to","line-to",1332939595),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to)], null)], null);
});
app.common.types.path.helpers.make_curve_params = (function app$common$types$path$helpers$make_curve_params(var_args){
var G__48187 = arguments.length;
switch (G__48187) {
case 1:
return app.common.types.path.helpers.make_curve_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.types.path.helpers.make_curve_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.path.helpers.make_curve_params.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.path.helpers.make_curve_params.cljs$core$IFn$_invoke$arity$1 = (function (point){
return app.common.types.path.helpers.make_curve_params.cljs$core$IFn$_invoke$arity$3(point,point,point);
}));

(app.common.types.path.helpers.make_curve_params.cljs$core$IFn$_invoke$arity$2 = (function (point,handler){
return app.common.types.path.helpers.make_curve_params.cljs$core$IFn$_invoke$arity$3(point,handler,point);
}));

(app.common.types.path.helpers.make_curve_params.cljs$core$IFn$_invoke$arity$3 = (function (point,h1,h2){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point),new cljs.core.Keyword(null,"c1x","c1x",-1789291378),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(h1),new cljs.core.Keyword(null,"c1y","c1y",-1210747344),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(h1),new cljs.core.Keyword(null,"c2x","c2x",-699963108),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(h2),new cljs.core.Keyword(null,"c2y","c2y",1361944924),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(h2)], null);
}));

(app.common.types.path.helpers.make_curve_params.cljs$lang$maxFixedArity = 3);

app.common.types.path.helpers.update_curve_to = (function app$common$types$path$helpers$update_curve_to(command,h1,h2){
var params = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(command)),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(command)),new cljs.core.Keyword(null,"c1x","c1x",-1789291378),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(h1),new cljs.core.Keyword(null,"c1y","c1y",-1210747344),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(h1),new cljs.core.Keyword(null,"c2x","c2x",-699963108),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(h2),new cljs.core.Keyword(null,"c2y","c2y",1361944924),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(h2)], null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(command,new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"curve-to","curve-to",-936461191)),new cljs.core.Keyword(null,"params","params",710516235),params);
});
app.common.types.path.helpers.make_curve_to = (function app$common$types$path$helpers$make_curve_to(to,h1,h2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"curve-to","curve-to",-936461191),new cljs.core.Keyword(null,"params","params",710516235),app.common.types.path.helpers.make_curve_params.cljs$core$IFn$_invoke$arity$3(to,h1,h2)], null);
});
app.common.types.path.helpers.prefix__GT_coords = (function app$common$types$path$helpers$prefix__GT_coords(prefix){
var G__48237 = prefix;
var G__48237__$1 = (((G__48237 instanceof cljs.core.Keyword))?G__48237.fqn:null);
switch (G__48237__$1) {
case "c1":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c1x","c1x",-1789291378),new cljs.core.Keyword(null,"c1y","c1y",-1210747344)], null);

break;
case "c2":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c2x","c2x",-699963108),new cljs.core.Keyword(null,"c2y","c2y",1361944924)], null);

break;
default:
return null;

}
});
app.common.types.path.helpers.closest_angle = (function app$common$types$path$helpers$closest_angle(angle){
if((((angle > 337.5)) || ((angle <= 22.5)))){
return (0);
} else {
if((((angle > 22.5)) && ((angle <= 67.5)))){
return (45);
} else {
if((((angle > 67.5)) && ((angle <= 112.5)))){
return (90);
} else {
if((((angle > 112.5)) && ((angle <= 157.5)))){
return (135);
} else {
if((((angle > 157.5)) && ((angle <= 202.5)))){
return (180);
} else {
if((((angle > 202.5)) && ((angle <= 247.5)))){
return (225);
} else {
if((((angle > 247.5)) && ((angle <= 292.5)))){
return (270);
} else {
if((((angle > 292.5)) && ((angle <= 337.5)))){
return (315);
} else {
return null;
}
}
}
}
}
}
}
}
});
app.common.types.path.helpers.position_fixed_angle = (function app$common$types$path$helpers$position_fixed_angle(point,from_point){
if(cljs.core.truth_((function (){var and__5023__auto__ = from_point;
if(cljs.core.truth_(and__5023__auto__)){
return point;
} else {
return and__5023__auto__;
}
})())){
var angle = cljs.core.mod(((360) + (- app.common.geom.point.angle.cljs$core$IFn$_invoke$arity$2(point,from_point))),(360));
var to_angle = app.common.types.path.helpers.closest_angle(angle);
var distance = app.common.geom.point.distance(point,from_point);
return app.common.geom.point.angle__GT_point(from_point,app.common.math.radians(to_angle),distance);
} else {
return point;
}
});
app.common.types.path.helpers.segment__GT_point = (function app$common$types$path$helpers$segment__GT_point(var_args){
var G__48251 = arguments.length;
switch (G__48251) {
case 1:
return app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1 = (function (segment){
return app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$2(segment,new cljs.core.Keyword(null,"x","x",2099068185));
}));

(app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$2 = (function (segment,coord){
var temp__5825__auto__ = cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(segment,new cljs.core.Keyword(null,"params","params",710516235)));
if(cljs.core.truth_(temp__5825__auto__)){
var params = temp__5825__auto__;
var G__48253 = coord;
var G__48253__$1 = (((G__48253 instanceof cljs.core.Keyword))?G__48253.fqn:null);
switch (G__48253__$1) {
case "c1":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"c1x","c1x",-1789291378)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"c1y","c1y",-1210747344)));

break;
case "c2":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"c2x","c2x",-699963108)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"c2y","c2y",1361944924)));

break;
default:
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"x","x",2099068185)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"y","y",-1757859776)));

}
} else {
return null;
}
}));

(app.common.types.path.helpers.segment__GT_point.cljs$lang$maxFixedArity = 2);

app.common.types.path.helpers.command__GT_line = (function app$common$types$path$helpers$command__GT_line(var_args){
var G__48256 = arguments.length;
switch (G__48256) {
case 1:
return app.common.types.path.helpers.command__GT_line.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.types.path.helpers.command__GT_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.path.helpers.command__GT_line.cljs$core$IFn$_invoke$arity$1 = (function (segment){
return app.common.types.path.helpers.command__GT_line.cljs$core$IFn$_invoke$arity$2(segment,new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(segment));
}));

(app.common.types.path.helpers.command__GT_line.cljs$core$IFn$_invoke$arity$2 = (function (segment,prev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev,app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(segment)], null);
}));

(app.common.types.path.helpers.command__GT_line.cljs$lang$maxFixedArity = 2);

app.common.types.path.helpers.command__GT_bezier = (function app$common$types$path$helpers$command__GT_bezier(var_args){
var G__48258 = arguments.length;
switch (G__48258) {
case 1:
return app.common.types.path.helpers.command__GT_bezier.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.types.path.helpers.command__GT_bezier.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.path.helpers.command__GT_bezier.cljs$core$IFn$_invoke$arity$1 = (function (segment){
return app.common.types.path.helpers.command__GT_bezier.cljs$core$IFn$_invoke$arity$2(segment,new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(segment));
}));

(app.common.types.path.helpers.command__GT_bezier.cljs$core$IFn$_invoke$arity$2 = (function (segment,prev){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev,app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(segment),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"c1x","c1x",-1789291378).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(segment)),new cljs.core.Keyword(null,"c1y","c1y",-1210747344).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(segment))),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"c2x","c2x",-699963108).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(segment)),new cljs.core.Keyword(null,"c2y","c2y",1361944924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(segment)))], null);
}));

(app.common.types.path.helpers.command__GT_bezier.cljs$lang$maxFixedArity = 2);

app.common.types.path.helpers.command__GT_selrect = (function app$common$types$path$helpers$command__GT_selrect(var_args){
var G__48262 = arguments.length;
switch (G__48262) {
case 1:
return app.common.types.path.helpers.command__GT_selrect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.types.path.helpers.command__GT_selrect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.path.helpers.command__GT_selrect.cljs$core$IFn$_invoke$arity$1 = (function (command){
return app.common.types.path.helpers.command__GT_selrect.cljs$core$IFn$_invoke$arity$2(command,new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(command));
}));

(app.common.types.path.helpers.command__GT_selrect.cljs$core$IFn$_invoke$arity$2 = (function (command,prev_point){
var points = (function (){var G__48266 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(command);
var G__48266__$1 = (((G__48266 instanceof cljs.core.Keyword))?G__48266.fqn:null);
switch (G__48266__$1) {
case "move-to":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(command)], null);

break;
case "line-to":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_point,app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(command)], null);

break;
case "curve-to":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_point,app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(command)], null),(function (){var curve = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_point,app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(command),app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$2(command,new cljs.core.Keyword(null,"c1","c1",1132530803)),app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$2(command,new cljs.core.Keyword(null,"c2","c2",-1561880371))], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48260_SHARP_){
return (app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$2 ? app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$2(curve,p1__48260_SHARP_) : app.common.types.path.helpers.curve_values.call(null,curve,p1__48260_SHARP_));
}),(app.common.types.path.helpers.curve_extremities.cljs$core$IFn$_invoke$arity$1 ? app.common.types.path.helpers.curve_extremities.cljs$core$IFn$_invoke$arity$1(curve) : app.common.types.path.helpers.curve_extremities.call(null,curve)));
})());

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
})();
return app.common.geom.rect.points__GT_rect(points);
}));

(app.common.types.path.helpers.command__GT_selrect.cljs$lang$maxFixedArity = 2);

app.common.types.path.helpers.line_values = (function app$common$types$path$helpers$line_values(p__48285,t){
var vec__48286 = p__48285;
var from_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48286,(0),null);
var to_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48286,(1),null);
var move_v = app.common.geom.point.scale(app.common.geom.point.to_vec(from_p,to_p),t);
return app.common.geom.point.add(from_p,move_v);
});
app.common.types.path.helpers.line_windup = (function app$common$types$path$helpers$line_windup(p__48318,t){
var vec__48325 = p__48318;
var from_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48325,(0),null);
var to_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48325,(1),null);
var l = vec__48325;
var p = app.common.types.path.helpers.line_values(l,t);
var cy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p);
var ay = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to_p);
var by = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from_p);
if(((((cy - ay) > (0))) && ((!(app.common.types.path.helpers.s_EQ_(cy,ay)))))){
return (1);
} else {
if(((((cy - ay) < (0))) && ((!(app.common.types.path.helpers.s_EQ_(cy,ay)))))){
return (-1);
} else {
if(((cy - by) < (0))){
return (1);
} else {
if(((cy - by) > (0))){
return (-1);
} else {
return (0);

}
}
}
}
});
/**
 * Parametric equation for cubic beziers. Given a start and end and
 *   two intermediate points returns points for values of t.
 *   If you draw t on a plane you got the bezier cube
 */
app.common.types.path.helpers.curve_values = (function app$common$types$path$helpers$curve_values(var_args){
var G__48329 = arguments.length;
switch (G__48329) {
case 2:
return app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$2 = (function (p__48332,t){
var vec__48333 = p__48332;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48333,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48333,(1),null);
var h1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48333,(2),null);
var h2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48333,(3),null);
return app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$5(start,end,h1,h2,t);
}));

(app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$5 = (function (start,end,h1,h2,t){
var t2 = (t * t);
var t3 = (t2 * t);
var start_v = ((((- t3) + ((3) * t2)) + ((-3) * t)) + (1));
var h1_v = ((((3) * t3) + ((-6) * t2)) + ((3) * t));
var h2_v = (((-3) * t3) + ((3) * t2));
var end_v = t3;
var coord_v = (function (coord){
return (((((coord.cljs$core$IFn$_invoke$arity$1 ? coord.cljs$core$IFn$_invoke$arity$1(start) : coord.call(null,start)) * start_v) + ((coord.cljs$core$IFn$_invoke$arity$1 ? coord.cljs$core$IFn$_invoke$arity$1(h1) : coord.call(null,h1)) * h1_v)) + ((coord.cljs$core$IFn$_invoke$arity$1 ? coord.cljs$core$IFn$_invoke$arity$1(h2) : coord.call(null,h2)) * h2_v)) + ((coord.cljs$core$IFn$_invoke$arity$1 ? coord.cljs$core$IFn$_invoke$arity$1(end) : coord.call(null,end)) * end_v));
});
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(coord_v(new cljs.core.Keyword(null,"x","x",2099068185)),coord_v(new cljs.core.Keyword(null,"y","y",-1757859776)));
}));

(app.common.types.path.helpers.curve_values.cljs$lang$maxFixedArity = 5);

/**
 * Solvers a quadratic or cubic equation given by the parameters a b c d.
 * 
 *   Implemented as reduction algorithm (this helps implemement
 *   derivative algorithms that does not require intermediate results
 *   thanks to transducers.
 */
app.common.types.path.helpers.solve_roots_STAR_ = (function app$common$types$path$helpers$solve_roots_STAR_(result,conj,a,b,c,d){
var sqrt_b2_4ac = app.common.math.sqrt(((b * b) - (((4) * a) * c)));
if(((app.common.math.almost_zero_QMARK_(d)) && (((app.common.math.almost_zero_QMARK_(a)) && (app.common.math.almost_zero_QMARK_(b)))))){
return result;
} else {
if(((app.common.math.almost_zero_QMARK_(d)) && (app.common.math.almost_zero_QMARK_(a)))){
var G__48362 = result;
var G__48365 = ((- c) / b);
return (conj.cljs$core$IFn$_invoke$arity$2 ? conj.cljs$core$IFn$_invoke$arity$2(G__48362,G__48365) : conj.call(null,G__48362,G__48365));
} else {
if(app.common.math.almost_zero_QMARK_(d)){
var G__48366 = (function (){var G__48369 = result;
var G__48370 = (((- b) + sqrt_b2_4ac) / ((2) * a));
return (conj.cljs$core$IFn$_invoke$arity$2 ? conj.cljs$core$IFn$_invoke$arity$2(G__48369,G__48370) : conj.call(null,G__48369,G__48370));
})();
var G__48367 = (((- b) - sqrt_b2_4ac) / ((2) * a));
return (conj.cljs$core$IFn$_invoke$arity$2 ? conj.cljs$core$IFn$_invoke$arity$2(G__48366,G__48367) : conj.call(null,G__48366,G__48367));
} else {
var a__$1 = (a / d);
var b__$1 = (b / d);
var c__$1 = (c / d);
var p = ((((3) * b__$1) - (a__$1 * a__$1)) / (3));
var q = (((((((2) * a__$1) * a__$1) * a__$1) + (((-9) * a__$1) * b__$1)) + ((27) * c__$1)) / (27));
var p3 = (p / (3));
var q2 = (q / (2));
var discriminant = ((q2 * q2) + ((p3 * p3) * p3));
if((discriminant < (0))){
var mp3 = ((- p) / (3));
var mp33 = ((mp3 * mp3) * mp3);
var r = app.common.math.sqrt(mp33);
var t = ((- q) / ((2) * r));
var cosphi = (((t < (-1)))?(-1):(((t > (1)))?(1):t
));
var phi = app.common.math.acos(cosphi);
var crtr = app.common.math.cubicroot(r);
var t1 = ((2) * crtr);
var root1 = ((t1 * app.common.math.cos((phi / (3)))) - (a__$1 / (3)));
var root2 = ((t1 * app.common.math.cos(((phi + ((2) * app.common.math.PI)) / (3)))) - (a__$1 / (3)));
var root3 = ((t1 * app.common.math.cos(((phi + ((4) * app.common.math.PI)) / (3)))) - (a__$1 / (3)));
var G__48375 = (function (){var G__48379 = (conj.cljs$core$IFn$_invoke$arity$2 ? conj.cljs$core$IFn$_invoke$arity$2(result,root1) : conj.call(null,result,root1));
var G__48380 = root2;
return (conj.cljs$core$IFn$_invoke$arity$2 ? conj.cljs$core$IFn$_invoke$arity$2(G__48379,G__48380) : conj.call(null,G__48379,G__48380));
})();
var G__48376 = root3;
return (conj.cljs$core$IFn$_invoke$arity$2 ? conj.cljs$core$IFn$_invoke$arity$2(G__48375,G__48376) : conj.call(null,G__48375,G__48376));
} else {
if(app.common.math.almost_zero_QMARK_(discriminant)){
var u1 = (((q2 < (0)))?app.common.math.cubicroot((- q2)):(- app.common.math.cubicroot(q2)));
var root1 = (((2) * u1) - (a__$1 / (3)));
var root2 = ((- u1) - (a__$1 / (3)));
var G__48390 = (conj.cljs$core$IFn$_invoke$arity$2 ? conj.cljs$core$IFn$_invoke$arity$2(result,root1) : conj.call(null,result,root1));
var G__48391 = root2;
return (conj.cljs$core$IFn$_invoke$arity$2 ? conj.cljs$core$IFn$_invoke$arity$2(G__48390,G__48391) : conj.call(null,G__48390,G__48391));
} else {
var sd = app.common.math.sqrt(discriminant);
var u1 = app.common.math.cubicroot((sd - q2));
var v1 = app.common.math.cubicroot((sd + q2));
var root = ((u1 - v1) - (a__$1 / (3)));
return (conj.cljs$core$IFn$_invoke$arity$2 ? conj.cljs$core$IFn$_invoke$arity$2(result,root) : conj.call(null,result,root));

}
}

}
}
}
});
/**
 * Solvers a quadratic or cubic equation given by the parameters a b c d
 */
app.common.types.path.helpers.solve_roots = (function app$common$types$path$helpers$solve_roots(var_args){
var G__48401 = arguments.length;
switch (G__48401) {
case 3:
return app.common.types.path.helpers.solve_roots.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.types.path.helpers.solve_roots.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.path.helpers.solve_roots.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return app.common.types.path.helpers.solve_roots.cljs$core$IFn$_invoke$arity$4(a,b,c,(0));
}));

(app.common.types.path.helpers.solve_roots.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
return app.common.types.path.helpers.solve_roots_STAR_(cljs.core.PersistentVector.EMPTY,cljs.core.conj,a,b,c,d);
}));

(app.common.types.path.helpers.solve_roots.cljs$lang$maxFixedArity = 4);

/**
 * Calculates the extremities by solving the first derivative for a cubic
 *   bezier and then solving the quadratic formula
 */
app.common.types.path.helpers.curve_extremities = (function app$common$types$path$helpers$curve_extremities(var_args){
var G__48418 = arguments.length;
switch (G__48418) {
case 1:
return app.common.types.path.helpers.curve_extremities.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return app.common.types.path.helpers.curve_extremities.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.path.helpers.curve_extremities.cljs$core$IFn$_invoke$arity$1 = (function (p__48435){
var vec__48436 = p__48435;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48436,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48436,(1),null);
var h1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48436,(2),null);
var h2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48436,(3),null);
return app.common.types.path.helpers.curve_extremities.cljs$core$IFn$_invoke$arity$4(start,end,h1,h2);
}));

(app.common.types.path.helpers.curve_extremities.cljs$core$IFn$_invoke$arity$4 = (function (start,end,h1,h2){
var coords = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(h1),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(h2),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(h1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(h2),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end)], null)], null);
var coord__GT_tvalue = (function (p__48442){
var vec__48443 = p__48442;
var c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48443,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48443,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48443,(2),null);
var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48443,(3),null);
var a = (((((-3) * c0) + ((9) * c1)) + ((-9) * c2)) + ((3) * c3));
var b = ((((6) * c0) + ((-12) * c1)) + ((6) * c2));
var c = (((3) * c1) + ((-3) * c0));
return app.common.types.path.helpers.solve_roots.cljs$core$IFn$_invoke$arity$3(a,b,c);
});
return cljs.core.filterv((function (p1__48410_SHARP_){
return (((p1__48410_SHARP_ > 0.01)) && ((p1__48410_SHARP_ < 0.99)));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(coord__GT_tvalue,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coords], 0)));
}));

(app.common.types.path.helpers.curve_extremities.cljs$lang$maxFixedArity = 4);

/**
 * Calculates the extremities by solving the first derivative for a
 *   cubic bezier and then solving the quadratic formula
 */
app.common.types.path.helpers.calculate_curve_extremities = (function app$common$types$path$helpers$calculate_curve_extremities(start,end,h1,h2){
var start_x = (start?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(start,new cljs.core.Keyword(null,"x","x",2099068185)));
var h1_x = (h1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(h1,new cljs.core.Keyword(null,"x","x",2099068185)));
var h2_x = (h2?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(h2,new cljs.core.Keyword(null,"x","x",2099068185)));
var end_x = (end?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(end,new cljs.core.Keyword(null,"x","x",2099068185)));
var start_y = (start?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(start,new cljs.core.Keyword(null,"y","y",-1757859776)));
var h1_y = (h1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(h1,new cljs.core.Keyword(null,"y","y",-1757859776)));
var h2_y = (h2?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(h2,new cljs.core.Keyword(null,"y","y",-1757859776)));
var end_y = (end?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(end,new cljs.core.Keyword(null,"y","y",-1757859776)));
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__48446_SHARP_){
return (((p1__48446_SHARP_ > 0.01)) && ((p1__48446_SHARP_ < 0.99)));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (t){
var t2 = (t * t);
var t3 = (t2 * t);
var start_v = ((((- t3) + ((3) * t2)) + ((-3) * t)) + (1));
var h1_v = ((((3) * t3) + ((-6) * t2)) + ((3) * t));
var h2_v = (((-3) * t3) + ((3) * t2));
var end_v = t3;
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(((((start_x * start_v) + (h1_x * h1_v)) + (h2_x * h2_v)) + (end_x * end_v)),((((start_y * start_v) + (h1_y * h1_v)) + (h2_y * h2_v)) + (end_y * end_v)));
})));
var conj_STAR_ = xform(cljs.core.conj_BANG_);
var process_curve = (function (result,c0,c1,c2,c3){
var a = (((((-3) * c0) + ((9) * c1)) + ((-9) * c2)) + ((3) * c3));
var b = ((((6) * c0) + ((-12) * c1)) + ((6) * c2));
var c = (((3) * c1) + ((-3) * c0));
return app.common.types.path.helpers.solve_roots_STAR_(result,conj_STAR_,a,b,c,(0));
});
return cljs.core.persistent_BANG_(process_curve(process_curve(cljs.core.transient$(cljs.core.PersistentVector.EMPTY),start_x,h1_x,h2_x,end_x),start_y,h1_y,h2_y,end_y));
});
/**
 * Retrieve the tangent vector to the curve in the point `t`
 */
app.common.types.path.helpers.curve_tangent = (function app$common$types$path$helpers$curve_tangent(p__48458,t){
var vec__48459 = p__48458;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48459,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48459,(1),null);
var h1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48459,(2),null);
var h2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48459,(3),null);
var coords = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(h1),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(h2),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(h1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(h2),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end)], null)], null);
var solve_derivative = (function (p__48465){
var vec__48466 = p__48465;
var c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48466,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48466,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48466,(2),null);
var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48466,(3),null);
var t2 = (t * t);
return ((((c0 * ((((-3) * t2) + ((6) * t)) + (-3))) + (c1 * ((((9) * t2) + ((-12) * t)) + (3)))) + (c2 * (((-9) * t2) + ((6) * t)))) + (c3 * ((3) * t2)));
});
var vec__48462 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(solve_derivative,coords);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48462,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48462,(1),null);
var d = app.common.math.hypot(x,y);
if(app.common.math.almost_zero_QMARK_(d)){
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0));
} else {
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x / d),(y / d));
}
});
app.common.types.path.helpers.curve_windup = (function app$common$types$path$helpers$curve_windup(curve,t){
var tangent = app.common.types.path.helpers.curve_tangent(curve,t);
if((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tangent) > (0))){
return (-1);
} else {
if((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tangent) < (0))){
return (1);
} else {
return (0);

}
}
});
app.common.types.path.helpers.num_segments = (10);
/**
 * Transform the bezier curve given by the parameters into a series of straight lines
 *   defined by the constant num-segments
 */
app.common.types.path.helpers.curve__GT_lines = (function app$common$types$path$helpers$curve__GT_lines(start,end,h1,h2){
var offset = ((1) / (10));
var tp = (function (t){
return app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$5(start,end,h1,h2,t);
});
var from = 0.0;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
var to = Math.min(1.0,(from + offset));
var line = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tp(from),tp(to)], null);
var result__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,line);
if((to >= 1.0)){
return result__$1;
} else {
var G__48830 = to;
var G__48831 = result__$1;
from = G__48830;
result = G__48831;
continue;
}
break;
}
});
/**
 * Splits a curve into two at the given parametric value `t`.
 *   Calculates the Casteljau's algorithm intermediate points
 */
app.common.types.path.helpers.curve_split = (function app$common$types$path$helpers$curve_split(var_args){
var G__48476 = arguments.length;
switch (G__48476) {
case 2:
return app.common.types.path.helpers.curve_split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return app.common.types.path.helpers.curve_split.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.path.helpers.curve_split.cljs$core$IFn$_invoke$arity$2 = (function (p__48479,t){
var vec__48480 = p__48479;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48480,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48480,(1),null);
var h1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48480,(2),null);
var h2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48480,(3),null);
return app.common.types.path.helpers.curve_split.cljs$core$IFn$_invoke$arity$5(start,end,h1,h2,t);
}));

(app.common.types.path.helpers.curve_split.cljs$core$IFn$_invoke$arity$5 = (function (start,end,h1,h2,t){
var p1 = app.common.geom.point.lerp(start,h1,t);
var p2 = app.common.geom.point.lerp(h1,h2,t);
var p3 = app.common.geom.point.lerp(h2,end,t);
var p4 = app.common.geom.point.lerp(p1,p2,t);
var p5 = app.common.geom.point.lerp(p2,p3,t);
var sp = app.common.geom.point.lerp(p4,p5,t);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,sp,p1,p4], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sp,end,p5,p3], null)], null);
}));

(app.common.types.path.helpers.curve_split.cljs$lang$maxFixedArity = 5);

/**
 * Given a point and a line-to command will create a two new line-to commands
 *   that will split the original line into two given a value between 0-1
 */
app.common.types.path.helpers.split_line_to = (function app$common$types$path$helpers$split_line_to(from_p,segment,t_val){
var to_p = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(segment);
var sp = app.common.geom.point.lerp(from_p,to_p,t_val);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.path.helpers.make_line_to(sp),segment], null);
});
/**
 * Given the point and a curve-to command will split the curve into two new
 *   curve-to commands given a value between 0-1
 */
app.common.types.path.helpers.split_curve_to = (function app$common$types$path$helpers$split_curve_to(from_p,segment,t_val){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(segment);
var end = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(params));
var h1 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"c1x","c1x",-1789291378).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"c1y","c1y",-1210747344).cljs$core$IFn$_invoke$arity$1(params));
var h2 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"c2x","c2x",-699963108).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"c2y","c2y",1361944924).cljs$core$IFn$_invoke$arity$1(params));
var vec__48492 = app.common.types.path.helpers.curve_split.cljs$core$IFn$_invoke$arity$5(from_p,end,h1,h2,t_val);
var vec__48495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48492,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48495,(0),null);
var to1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48495,(1),null);
var h11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48495,(2),null);
var h21 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48495,(3),null);
var vec__48498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48492,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48498,(0),null);
var to2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48498,(1),null);
var h12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48498,(2),null);
var h22 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48498,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.path.helpers.make_curve_to(to1,h11,h21),app.common.types.path.helpers.make_curve_to(to2,h12,h22)], null);
});
/**
 * Given a curve returns a new curve between the values t1-t2
 */
app.common.types.path.helpers.subcurve_range = (function app$common$types$path$helpers$subcurve_range(var_args){
var G__48504 = arguments.length;
switch (G__48504) {
case 2:
return app.common.types.path.helpers.subcurve_range.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.path.helpers.subcurve_range.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 6:
return app.common.types.path.helpers.subcurve_range.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.path.helpers.subcurve_range.cljs$core$IFn$_invoke$arity$2 = (function (p__48507,p__48508){
var vec__48510 = p__48507;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48510,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48510,(1),null);
var h1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48510,(2),null);
var h2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48510,(3),null);
var vec__48513 = p__48508;
var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48513,(0),null);
var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48513,(1),null);
return app.common.types.path.helpers.subcurve_range.cljs$core$IFn$_invoke$arity$6(start,end,h1,h2,t1,t2);
}));

(app.common.types.path.helpers.subcurve_range.cljs$core$IFn$_invoke$arity$3 = (function (p__48522,t1,t2){
var vec__48523 = p__48522;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48523,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48523,(1),null);
var h1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48523,(2),null);
var h2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48523,(3),null);
return app.common.types.path.helpers.subcurve_range.cljs$core$IFn$_invoke$arity$6(start,end,h1,h2,t1,t2);
}));

(app.common.types.path.helpers.subcurve_range.cljs$core$IFn$_invoke$arity$6 = (function (start,end,h1,h2,t1,t2){
var vec__48527 = (((t1 < t2))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1,t2], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t2,t1], null));
var t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48527,(0),null);
var t2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48527,(1),null);
var t2_SINGLEQUOTE_ = ((t2__$1 - t1__$1) / ((1) - t1__$1));
var vec__48530 = app.common.types.path.helpers.curve_split.cljs$core$IFn$_invoke$arity$5(start,end,h1,h2,t1__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48530,(0),null);
var curve_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48530,(1),null);
return cljs.core.first(app.common.types.path.helpers.curve_split.cljs$core$IFn$_invoke$arity$2(curve_SINGLEQUOTE_,t2_SINGLEQUOTE_));
}));

(app.common.types.path.helpers.subcurve_range.cljs$lang$maxFixedArity = 6);

/**
 * Splits a line into several lines given the points in `values`
 *   for example (split-line-to-ranges p c [0 0.25 0.5 0.75 1] will split
 *   the line into 4 lines
 */
app.common.types.path.helpers.split_line_to_ranges = (function app$common$types$path$helpers$split_line_to_ranges(from_p,segment,values){
var values__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48533_SHARP_){
return (((p1__48533_SHARP_ > (0))) && ((p1__48533_SHARP_ < (1))));
}),values);
if(cljs.core.empty_QMARK_(values__$1)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segment], null);
} else {
var to_p = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(segment);
var values_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(values__$1,(1)));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (val){
return app.common.types.path.helpers.make_line_to(app.common.geom.point.lerp(from_p,to_p,val));
}),values_set);
}
});
/**
 * Splits a curve into several curves given the points in `values`
 *   for example (split-curve-to-ranges p c [0 0.25 0.5 0.75 1] will split
 *   the curve into 4 curves that draw the same curve
 */
app.common.types.path.helpers.split_curve_to_ranges = (function app$common$types$path$helpers$split_curve_to_ranges(from_p,segment,values){
var values__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48537_SHARP_){
return (((p1__48537_SHARP_ > (0))) && ((p1__48537_SHARP_ < (1))));
}),values);
if(cljs.core.empty_QMARK_(values__$1)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segment], null);
} else {
var to_p = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(segment);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(segment);
var h1 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"c1x","c1x",-1789291378).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"c1y","c1y",-1210747344).cljs$core$IFn$_invoke$arity$1(params));
var h2 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"c2x","c2x",-699963108).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"c2y","c2y",1361944924).cljs$core$IFn$_invoke$arity$1(params));
var values_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(values__$1,(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0)));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__48539){
var vec__48540 = p__48539;
var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48540,(0),null);
var t0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48540,(1),null);
var vec__48543 = app.common.types.path.helpers.subcurve_range.cljs$core$IFn$_invoke$arity$6(from_p,to_p,h1,h2,t0,t1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48543,(0),null);
var to_p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48543,(1),null);
var h1_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48543,(2),null);
var h2_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48543,(3),null);
return app.common.types.path.helpers.make_curve_to(to_p__$1,h1_SINGLEQUOTE_,h2_SINGLEQUOTE_);
}),cljs.core.rest(app.common.data.with_prev(values_set)));
}
});
app.common.types.path.helpers.get_line_tval = (function app$common$types$path$helpers$get_line_tval(p__48547,p__48549){
var vec__48550 = p__48547;
var map__48553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48550,(0),null);
var map__48553__$1 = cljs.core.__destructure_map(map__48553);
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48553__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48553__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__48554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48550,(1),null);
var map__48554__$1 = cljs.core.__destructure_map(map__48554);
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48554__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48554__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__48555 = p__48549;
var map__48555__$1 = cljs.core.__destructure_map(map__48555);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48555__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48555__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
if(((app.common.types.path.helpers.s_EQ_(x1,x2)) && (app.common.types.path.helpers.s_EQ_(y1,y2)))){
return Infinity;
} else {
if(app.common.types.path.helpers.s_EQ_(x1,x2)){
return ((y - y1) / (y2 - y1));
} else {
return ((x - x1) / (x2 - x1));

}
}
});
app.common.types.path.helpers.curve_range__GT_rect = (function app$common$types$path$helpers$curve_range__GT_rect(curve,from_t,to_t){
var vec__48571 = app.common.types.path.helpers.subcurve_range.cljs$core$IFn$_invoke$arity$3(curve,from_t,to_t);
var from_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48571,(0),null);
var to_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48571,(1),null);
var curve__$1 = vec__48571;
var extremes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48565_SHARP_){
return app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$2(curve__$1,p1__48565_SHARP_);
}),app.common.types.path.helpers.curve_extremities.cljs$core$IFn$_invoke$arity$1(curve__$1));
return app.common.geom.rect.points__GT_rect(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_p,to_p], null),extremes));
});
/**
 * Using the line equation we put the x value and check if matches with
 *   the given Y. If it does the point is inside the line
 */
app.common.types.path.helpers.line_has_point_QMARK_ = (function app$common$types$path$helpers$line_has_point_QMARK_(point,p__48579){
var vec__48581 = p__48579;
var from_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48581,(0),null);
var to_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48581,(1),null);
var map__48587 = from_p;
var map__48587__$1 = cljs.core.__destructure_map(map__48587);
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48587__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48587__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__48588 = to_p;
var map__48588__$1 = cljs.core.__destructure_map(map__48588);
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48588__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48588__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__48589 = point;
var map__48589__$1 = cljs.core.__destructure_map(map__48589);
var px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48589__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48589__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var m = ((app.common.types.path.helpers.s_EQ_(x1,x2))?null:((y2 - y1) / (x2 - x1)));
var vy = (((!((m == null))))?(((m * px) + ((- m) * x1)) + y1):null);
return ((((app.common.types.path.helpers.s_EQ_(x1,x2)) && (app.common.types.path.helpers.s_EQ_(px,x1)))) || ((((!((vy == null)))) && (app.common.types.path.helpers.s_EQ_(py,vy)))));
});
/**
 * Using the line equation we put the x value and check if matches with
 *   the given Y. If it does the point is inside the line
 */
app.common.types.path.helpers.segment_has_point_QMARK_ = (function app$common$types$path$helpers$segment_has_point_QMARK_(point,line){
var and__5023__auto__ = app.common.types.path.helpers.line_has_point_QMARK_(point,line);
if(and__5023__auto__){
var t = app.common.types.path.helpers.get_line_tval(line,point);
return (((((t > (0))) || (app.common.types.path.helpers.s_EQ_(t,(0))))) && ((((t < (1))) || (app.common.types.path.helpers.s_EQ_(t,(1))))));
} else {
return and__5023__auto__;
}
});
app.common.types.path.helpers.curve_has_point_QMARK_ = (function app$common$types$path$helpers$curve_has_point_QMARK_(point,curve){
var check_range = (function app$common$types$path$helpers$curve_has_point_QMARK__$_check_range(from_t,to_t){
var r = app.common.types.path.helpers.curve_range__GT_rect(curve,from_t,to_t);
if(app.common.geom.rect.contains_point_QMARK_(r,point)){
if(app.common.types.path.helpers.s_EQ_(from_t,to_t)){
return (app.common.geom.point.distance(app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$2(curve,from_t),point) < 0.1);
} else {
var half_t = (from_t + ((to_t - from_t) / 2.0));
var or__5025__auto__ = app$common$types$path$helpers$curve_has_point_QMARK__$_check_range(from_t,half_t);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app$common$types$path$helpers$curve_has_point_QMARK__$_check_range(half_t,to_t);
}
}
} else {
return null;
}
});
return check_range((0),(1));
});
/**
 * Uses cardano algorithm to find the roots for a cubic bezier
 */
app.common.types.path.helpers.curve_roots = (function app$common$types$path$helpers$curve_roots(var_args){
var G__48625 = arguments.length;
switch (G__48625) {
case 2:
return app.common.types.path.helpers.curve_roots.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return app.common.types.path.helpers.curve_roots.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.path.helpers.curve_roots.cljs$core$IFn$_invoke$arity$2 = (function (p__48628,coord){
var vec__48630 = p__48628;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48630,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48630,(1),null);
var h1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48630,(2),null);
var h2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48630,(3),null);
return app.common.types.path.helpers.curve_roots.cljs$core$IFn$_invoke$arity$5(start,end,h1,h2,coord);
}));

(app.common.types.path.helpers.curve_roots.cljs$core$IFn$_invoke$arity$5 = (function (start,end,h1,h2,coord){
var coords = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(start,coord),cljs.core.get.cljs$core$IFn$_invoke$arity$2(h1,coord),cljs.core.get.cljs$core$IFn$_invoke$arity$2(h2,coord),cljs.core.get.cljs$core$IFn$_invoke$arity$2(end,coord)], null)], null);
var coord__GT_tvalue = (function (p__48636){
var vec__48639 = p__48636;
var pa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48639,(0),null);
var pb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48639,(1),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48639,(2),null);
var pd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48639,(3),null);
var a = ((((3) * pa) + ((-6) * pb)) + ((3) * pc));
var b = (((-3) * pa) + ((3) * pb));
var c = pa;
var d = ((((- pa) + ((3) * pb)) + ((-3) * pc)) + pd);
return app.common.types.path.helpers.solve_roots.cljs$core$IFn$_invoke$arity$4(a,b,c,d);
});
return cljs.core.filterv((function (p1__48622_SHARP_){
return (((p1__48622_SHARP_ >= (0))) && ((p1__48622_SHARP_ <= (1))));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(coord__GT_tvalue,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coords], 0)));
}));

(app.common.types.path.helpers.curve_roots.cljs$lang$maxFixedArity = 5);

app.common.types.path.helpers.line_line_crossing = (function app$common$types$path$helpers$line_line_crossing(p__48649,p__48650){
var vec__48652 = p__48649;
var from_p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48652,(0),null);
var to_p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48652,(1),null);
var l1 = vec__48652;
var vec__48655 = p__48650;
var from_p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48655,(0),null);
var to_p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48655,(1),null);
var l2 = vec__48655;
var map__48660 = from_p1;
var map__48660__$1 = cljs.core.__destructure_map(map__48660);
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48660__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48660__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__48661 = to_p1;
var map__48661__$1 = cljs.core.__destructure_map(map__48661);
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48661__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48661__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__48662 = from_p2;
var map__48662__$1 = cljs.core.__destructure_map(map__48662);
var x3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48662__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48662__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__48663 = to_p2;
var map__48663__$1 = cljs.core.__destructure_map(map__48663);
var x4 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48663__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y4 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48663__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var nx = (((x3 - x4) * ((x1 * y2) - (y1 * x2))) - ((x1 - x2) * ((x3 * y4) - (y3 * x4))));
var ny = (((y3 - y4) * ((x1 * y2) - (y1 * x2))) - ((y1 - y2) * ((x3 * y4) - (y3 * x4))));
var d = (((x1 - x2) * (y3 - y4)) - ((y1 - y2) * (x3 - x4)));
if((!(app.common.math.almost_zero_QMARK_(d)))){
var cross_p = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((nx / d),(ny / d));
var t1 = app.common.types.path.helpers.get_line_tval(l1,cross_p);
var t2 = app.common.types.path.helpers.get_line_tval(l2,cross_p);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1,t2], null);
} else {
if(app.common.types.path.helpers.line_has_point_QMARK_(from_p2,l1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.path.helpers.get_line_tval(l1,from_p2),(0)], null);
} else {
if(app.common.types.path.helpers.line_has_point_QMARK_(to_p2,l1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.path.helpers.get_line_tval(l1,to_p2),(1)], null);
} else {
if(app.common.types.path.helpers.line_has_point_QMARK_(to_p1,l2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),app.common.types.path.helpers.get_line_tval(l2,to_p1)], null);
} else {
if(app.common.types.path.helpers.line_has_point_QMARK_(from_p1,l2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),app.common.types.path.helpers.get_line_tval(l2,from_p1)], null);
} else {
return null;

}
}
}
}
}
});
app.common.types.path.helpers.line_line_intersect = (function app$common$types$path$helpers$line_line_intersect(l1,l2){
var vec__48672 = app.common.types.path.helpers.line_line_crossing(l1,l2);
var l1_t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48672,(0),null);
var l2_t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48672,(1),null);
if((((!((l1_t == null)))) && ((((!((l2_t == null)))) && ((((((l1_t > (0))) || (app.common.types.path.helpers.s_EQ_(l1_t,(0))))) && ((((((l1_t < (1))) || (app.common.types.path.helpers.s_EQ_(l1_t,(1))))) && ((((((l2_t > (0))) || (app.common.types.path.helpers.s_EQ_(l2_t,(0))))) && ((((l2_t < (1))) || (app.common.types.path.helpers.s_EQ_(l2_t,(1))))))))))))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [l1_t], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [l2_t], null)], null);
} else {
return null;
}
});
app.common.types.path.helpers.line_curve_crossing = (function app$common$types$path$helpers$line_curve_crossing(p__48687,p__48688){
var vec__48690 = p__48687;
var from_p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48690,(0),null);
var to_p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48690,(1),null);
var vec__48693 = p__48688;
var from_p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48693,(0),null);
var to_p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48693,(1),null);
var h1_p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48693,(2),null);
var h2_p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48693,(3),null);
var theta = app.common.math.degrees(app.common.math.atan2((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to_p1) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from_p1)),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to_p1) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(from_p1))));
var transform = app.common.geom.matrix.translate(app.common.geom.matrix.rotate.cljs$core$IFn$_invoke$arity$2(app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0(),(- theta)),app.common.geom.point.negate(from_p1));
var c2_SINGLEQUOTE_ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.transform(from_p2,transform),app.common.geom.point.transform(to_p2,transform),app.common.geom.point.transform(h1_p2,transform),app.common.geom.point.transform(h2_p2,transform)], null);
return app.common.types.path.helpers.curve_roots.cljs$core$IFn$_invoke$arity$2(c2_SINGLEQUOTE_,new cljs.core.Keyword(null,"y","y",-1757859776));
});
app.common.types.path.helpers.line_curve_intersect = (function app$common$types$path$helpers$line_curve_intersect(l1,c2){
var curve_ts = cljs.core.filterv((function (curve_t){
var curve_t__$1 = ((app.common.math.almost_zero_QMARK_(curve_t))?(0):curve_t);
var curve_v = app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$2(c2,curve_t__$1);
var line_t = app.common.types.path.helpers.get_line_tval(l1,curve_v);
return (((curve_t__$1 >= (0))) && ((((curve_t__$1 <= (1))) && ((((line_t >= (0))) && ((line_t <= (1))))))));
}),app.common.types.path.helpers.line_curve_crossing(l1,c2));
var intersect_ps = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48701_SHARP_){
return app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$2(c2,p1__48701_SHARP_);
}),curve_ts);
var line_ts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48702_SHARP_){
return app.common.types.path.helpers.get_line_tval(l1,p1__48702_SHARP_);
}),intersect_ps);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_ts,curve_ts], null);
});
app.common.types.path.helpers.ray_overlaps_QMARK_ = (function app$common$types$path$helpers$ray_overlaps_QMARK_(ray_point,p__48706){
var map__48708 = p__48706;
var map__48708__$1 = cljs.core.__destructure_map(map__48708);
var selrect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48708__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
return (((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ray_point) > new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(selrect))) || (app.common.math.almost_zero_QMARK_((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ray_point) - new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(selrect)))))) && ((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ray_point) < new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(selrect))) || (app.common.math.almost_zero_QMARK_((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ray_point) - new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(selrect)))))));
});
app.common.types.path.helpers.ray_line_intersect = (function app$common$types$path$helpers$ray_line_intersect(point,p__48712){
var vec__48713 = p__48712;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48713,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48713,(1),null);
var line = vec__48713;
var ray_line = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point) + (1)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point))], null);
var a__$1 = (((((!((a == null)))) && (app.common.types.path.helpers.s_EQ_(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point)))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(a,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,(10)):a);
var b__$1 = (((((!((b == null)))) && (app.common.types.path.helpers.s_EQ_(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point)))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(b,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,(10)):b);
var vec__48718 = app.common.types.path.helpers.line_line_crossing(ray_line,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1], null));
var ray_t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48718,(0),null);
var line_t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48718,(1),null);
if((((!((line_t == null)))) && ((((!((ray_t == null)))) && ((((ray_t > (0))) && ((((((line_t > (0))) || (app.common.types.path.helpers.s_EQ_(line_t,(0))))) && ((((line_t < (1))) || (app.common.types.path.helpers.s_EQ_(line_t,(1))))))))))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.path.helpers.line_values(line,line_t),app.common.types.path.helpers.line_windup(line,line_t)], null)], null);
} else {
return null;
}
});
app.common.types.path.helpers.ray_curve_intersect = (function app$common$types$path$helpers$ray_curve_intersect(ray_line,curve){
var curve_ts = cljs.core.filterv((function (p1__48724_SHARP_){
var curve_v = app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$2(curve,p1__48724_SHARP_);
var curve_tg = app.common.types.path.helpers.curve_tangent(curve,p1__48724_SHARP_);
var curve_tg_angle = app.common.geom.point.angle.cljs$core$IFn$_invoke$arity$1(curve_tg);
var ray_t = app.common.types.path.helpers.get_line_tval(ray_line,curve_v);
return (((ray_t > (0))) && ((((app.common.math.abs((curve_tg_angle - (180))) > 0.01)) && ((app.common.math.abs((curve_tg_angle - (0))) > 0.01)))));
}),app.common.types.path.helpers.line_curve_crossing(ray_line,curve));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48725_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$2(curve,p1__48725_SHARP_),app.common.types.path.helpers.curve_windup(curve,p1__48725_SHARP_)],null));
}),curve_ts);
});
app.common.types.path.helpers.curve_curve_intersect = (function app$common$types$path$helpers$curve_curve_intersect(c1,c2){
var check_range = (function app$common$types$path$helpers$curve_curve_intersect_$_check_range(c1_from,c1_to,c2_from,c2_to){
var r1 = app.common.types.path.helpers.curve_range__GT_rect(c1,c1_from,c1_to);
var r2 = app.common.types.path.helpers.curve_range__GT_rect(c2,c2_from,c2_to);
if(app.common.geom.rect.overlaps_rects_QMARK_(r1,r2)){
var p1 = app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$2(c1,c1_from);
var p2 = app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$2(c2,c2_from);
if((app.common.geom.point.distance(p1,p2) < 0.1)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"d","d",1972142424),app.common.geom.point.distance(p1,p2),new cljs.core.Keyword(null,"t1","t1",24972444),app.common.math.precision(c1_from,(4)),new cljs.core.Keyword(null,"t2","t2",-748855222),app.common.math.precision(c2_from,(4))], null)], null);
} else {
var c1_half = (c1_from + ((c1_to - c1_from) / (2)));
var c2_half = (c2_from + ((c2_to - c2_from) / (2)));
var ts_1 = app$common$types$path$helpers$curve_curve_intersect_$_check_range(c1_from,c1_half,c2_from,c2_half);
var ts_2 = app$common$types$path$helpers$curve_curve_intersect_$_check_range(c1_from,c1_half,c2_half,c2_to);
var ts_3 = app$common$types$path$helpers$curve_curve_intersect_$_check_range(c1_half,c1_to,c2_from,c2_half);
var ts_4 = app$common$types$path$helpers$curve_curve_intersect_$_check_range(c1_half,c1_to,c2_half,c2_to);
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(ts_1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ts_2,ts_3,ts_4], 0));
}
} else {
return null;
}
});
var remove_close_ts = (function app$common$types$path$helpers$curve_curve_intersect_$_remove_close_ts(p__48749){
var map__48751 = p__48749;
var map__48751__$1 = cljs.core.__destructure_map(map__48751);
var cp1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48751__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var cp2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48751__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
return (function (p__48755){
var map__48756 = p__48755;
var map__48756__$1 = cljs.core.__destructure_map(map__48756);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48756__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48756__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
return (((app.common.geom.point.distance(p1,cp1) >= (2))) && ((app.common.geom.point.distance(p2,cp2) >= (2))));
});
});
var process_ts = (function app$common$types$path$helpers$curve_curve_intersect_$_process_ts(ts){
var current = cljs.core.first(ts);
var pending = cljs.core.rest(ts);
var c1_ts = cljs.core.PersistentVector.EMPTY;
var c2_ts = cljs.core.PersistentVector.EMPTY;
while(true){
if((current == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1_ts,c2_ts], null);
} else {
var pending__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(remove_close_ts(current),pending);
var c1_ts__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(c1_ts,new cljs.core.Keyword(null,"t1","t1",24972444).cljs$core$IFn$_invoke$arity$1(current));
var c2_ts__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(c2_ts,new cljs.core.Keyword(null,"t2","t2",-748855222).cljs$core$IFn$_invoke$arity$1(current));
var G__48895 = cljs.core.first(pending__$1);
var G__48896 = cljs.core.rest(pending__$1);
var G__48897 = c1_ts__$1;
var G__48898 = c2_ts__$1;
current = G__48895;
pending = G__48896;
c1_ts = G__48897;
c2_ts = G__48898;
continue;
}
break;
}
});
return process_ts(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"d","d",1972142424),check_range((0),(1),(0),(1))));
});
app.common.types.path.helpers.is_point_in_geom_data_QMARK_ = (function app$common$types$path$helpers$is_point_in_geom_data_QMARK_(point,content_geom){
var ray_line = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point) + (1)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point))], null);
var cast_ray = (function (data){
var G__48762 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(data);
var G__48762__$1 = (((G__48762 instanceof cljs.core.Keyword))?G__48762.fqn:null);
switch (G__48762__$1) {
case "line-to":
return app.common.types.path.helpers.ray_line_intersect(point,new cljs.core.Keyword(null,"geom","geom",1207084371).cljs$core$IFn$_invoke$arity$1(data));

break;
case "curve-to":
return app.common.types.path.helpers.ray_curve_intersect(ray_line,new cljs.core.Keyword(null,"geom","geom",1207084371).cljs$core$IFn$_invoke$arity$1(data));

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
});
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cast_ray,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.path.helpers.ray_overlaps_QMARK_,point),content_geom)], 0)))));
});
app.common.types.path.helpers.is_point_in_border_QMARK_ = (function app$common$types$path$helpers$is_point_in_border_QMARK_(point,content){
var inside_border_QMARK_ = (function app$common$types$path$helpers$is_point_in_border_QMARK__$_inside_border_QMARK_(segment){
var G__48766 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(segment);
var G__48766__$1 = (((G__48766 instanceof cljs.core.Keyword))?G__48766.fqn:null);
switch (G__48766__$1) {
case "line-to":
return app.common.types.path.helpers.segment_has_point_QMARK_(point,app.common.types.path.helpers.command__GT_line.cljs$core$IFn$_invoke$arity$1(segment));

break;
case "curve-to":
return app.common.types.path.helpers.curve_has_point_QMARK_(point,app.common.types.path.helpers.command__GT_bezier.cljs$core$IFn$_invoke$arity$1(segment));

break;
default:
return false;

}
});
return cljs.core.some(inside_border_QMARK_,content);
});

//# sourceMappingURL=app.common.types.path.helpers.js.map
