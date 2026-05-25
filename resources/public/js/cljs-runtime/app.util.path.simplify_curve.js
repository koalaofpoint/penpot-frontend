import "./cljs_env.js";
import "./cljs.core.js";
import "./app.util.path.path_impl_simplify.js";
goog.provide('app.util.path.simplify_curve');
/**
 * Simplifies a drawing done with the pen tool
 */
app.util.path.simplify_curve.simplify = (function app$util$path$simplify_curve$simplify(var_args){
var G__69913 = arguments.length;
switch (G__69913) {
case 1:
return app.util.path.simplify_curve.simplify.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.path.simplify_curve.simplify.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.path.simplify_curve.simplify.cljs$core$IFn$_invoke$arity$1 = (function (points){
return app.util.path.simplify_curve.simplify.cljs$core$IFn$_invoke$arity$2(points,0.1);
}));

(app.util.path.simplify_curve.simplify.cljs$core$IFn$_invoke$arity$2 = (function (points,tolerance){
var points__$1 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(points);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,app.util.path.path_impl_simplify.simplify(points__$1,tolerance,true));
}));

(app.util.path.simplify_curve.simplify.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=app.util.path.simplify_curve.js.map
