import "./cljs_env.js";
import "./cljs.core.js";
import "./goog.math.math.js";
goog.provide('app.common.math');
app.common.math.PI = Math.PI;
app.common.math.nan_QMARK_ = (function app$common$math$nan_QMARK_(v){
return isNaN(v);
});
app.common.math.finite_QMARK_ = (function app$common$math$finite_QMARK_(v){
var and__5023__auto__ = (!((v == null)));
if(and__5023__auto__){
return isFinite(v);
} else {
return and__5023__auto__;
}
});
app.common.math.finite = (function app$common$math$finite(v,default$){
if(cljs.core.truth_(app.common.math.finite_QMARK_(v))){
return v;
} else {
return default$;
}
});
app.common.math.abs = (function app$common$math$abs(v){
return Math.abs(v);
});
/**
 * Returns the sine of a number
 */
app.common.math.sin = (function app$common$math$sin(v){
return Math.sin(v);
});
/**
 * Returns the cosine of a number.
 */
app.common.math.cos = (function app$common$math$cos(v){
return Math.cos(v);
});
/**
 * Returns the arccosine of a number.
 */
app.common.math.acos = (function app$common$math$acos(v){
return Math.acos(v);
});
/**
 * Returns the tangent of a number.
 */
app.common.math.tan = (function app$common$math$tan(v){
return Math.tan(v);
});
/**
 * Returns the arctangent of the quotient of its arguments.
 */
app.common.math.atan2 = (function app$common$math$atan2(x,y){
return Math.atan2(x,y);
});
/**
 * Negate the number
 */
app.common.math.neg = (function app$common$math$neg(v){
return (- v);
});
/**
 * Calculates the square of a number
 */
app.common.math.sq = (function app$common$math$sq(v){
return (v * v);
});
/**
 * Returns the base to the exponent power.
 */
app.common.math.pow = (function app$common$math$pow(b,e){
return Math.pow(b,e);
});
/**
 * Returns the square root of a number.
 */
app.common.math.sqrt = (function app$common$math$sqrt(v){
return Math.sqrt(v);
});
/**
 * Returns the cubic root of a number
 */
app.common.math.cubicroot = (function app$common$math$cubicroot(v){
if((v > (0))){
return app.common.math.pow(v,((1) / (3)));
} else {
return (- app.common.math.pow((- v),((1) / (3))));
}
});
/**
 * Returns the largest integer less than or
 *   equal to a given number.
 */
app.common.math.floor = (function app$common$math$floor(v){
return Math.floor(v);
});
/**
 * Returns the value of a number rounded to
 *   the nearest integer.
 *   If given step rounds to the next closest step, for example:
 *   (round 13.4 0.5) => 13.5
 *   (round 13.4 0.3) => 13.3
 */
app.common.math.round = (function app$common$math$round(var_args){
var G__28613 = arguments.length;
switch (G__28613) {
case 2:
return app.common.math.round.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.math.round.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.math.round.cljs$core$IFn$_invoke$arity$2 = (function (v,step){
return (app.common.math.round.cljs$core$IFn$_invoke$arity$1((v / step)) * step);
}));

(app.common.math.round.cljs$core$IFn$_invoke$arity$1 = (function (v){
return Math.round(v);
}));

(app.common.math.round.cljs$lang$maxFixedArity = 2);

/**
 * Returns the smallest integer greater than
 *   or equal to a given number.
 */
app.common.math.ceil = (function app$common$math$ceil(v){
return Math.ceil(v);
});
app.common.math.precision = (function app$common$math$precision(v,n){
if(((typeof v === 'number') && (cljs.core.integer_QMARK_(n)))){
var d = app.common.math.pow((10),n);
return (app.common.math.round.cljs$core$IFn$_invoke$arity$1((v * d)) / d);
} else {
return null;
}
});
/**
 * Returns a string representing the given number, using fixed precision.
 */
app.common.math.to_fixed = (function app$common$math$to_fixed(v,n){
return v.toFixed(n);
});
/**
 * Converts degrees to radians.
 */
app.common.math.radians = (function app$common$math$radians(degrees){
return goog.math.toRadians(degrees);
});
/**
 * Converts radians to degrees.
 */
app.common.math.degrees = (function app$common$math$degrees(radians){
return goog.math.toDegrees(radians);
});
/**
 * Square root of the squares addition
 */
app.common.math.hypot = (function app$common$math$hypot(a,b){
return Math.hypot(a,b);
});
/**
 * Calculate the distance between two points.
 */
app.common.math.distance = (function app$common$math$distance(p__28628,p__28629){
var vec__28630 = p__28628;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28630,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28630,(1),null);
var vec__28633 = p__28629;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28633,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28633,(1),null);
var dx = (x1 - x2);
var dy = (y1 - y2);
return app.common.math.precision(app.common.math.hypot(dx,dy),(2));
});
/**
 * Logarithm base 10
 */
app.common.math.log10 = (function app$common$math$log10(x){
return Math.log10(x);
});
app.common.math.clamp = (function app$common$math$clamp(num,from,to){
if((num < from)){
return from;
} else {
if((num > to)){
return to;
} else {
return num;
}
}
});
app.common.math.almost_zero_QMARK_ = (function app$common$math$almost_zero_QMARK_(num){
return (app.common.math.abs(num) < 1.0E-4);
});
/**
 * Given a number if it's close enough to zero round to the zero to avoid precision problems
 */
app.common.math.round_to_zero = (function app$common$math$round_to_zero(num){
if((app.common.math.abs(num) < 1.0E-4)){
return (0);
} else {
return num;
}
});
if((typeof app !== 'undefined') && (typeof app.common !== 'undefined') && (typeof app.common.math !== 'undefined') && (typeof app.common.math.float_equal_precision !== 'undefined')){
} else {
app.common.math.float_equal_precision = 0.001;
}
/**
 * Equality for float numbers. Check if the difference is within a range
 */
app.common.math.close_QMARK_ = (function app$common$math$close_QMARK_(var_args){
var G__28637 = arguments.length;
switch (G__28637) {
case 2:
return app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (num1,num2){
return app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$3(num1,num2,app.common.math.float_equal_precision);
}));

(app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (num1,num2,precision){
return (app.common.math.abs((num1 - num2)) <= precision);
}));

(app.common.math.close_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * Calculates a the linear interpolation between two values and a given percent
 */
app.common.math.lerp = (function app$common$math$lerp(v0,v1,t){
return ((((1) - t) * v0) + (t * v1));
});
app.common.math.max_abs = (function app$common$math$max_abs(a,b){
return Math.max(app.common.math.abs(a),app.common.math.abs(b));
});
/**
 * Get the sign (+1 / -1) for the number
 */
app.common.math.sign = (function app$common$math$sign(n){
if((n < (0))){
return (-1);
} else {
return (1);
}
});

//# sourceMappingURL=app.common.math.js.map
