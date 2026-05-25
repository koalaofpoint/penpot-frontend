import "./cljs_env.js";
import "./cljs.core.js";
import "./module$app$common$svg$path$parser.js";
goog.provide('app.common.svg.path');
/**
 * A function for convert Arcs to Beziers, used only for testing
 *   purposes.
 */
app.common.svg.path.arc__GT_beziers = (function app$common$svg$path$arc__GT_beziers(x1,y1,x2,y2,fa,fs,rx,ry,phi){
return module$app$common$svg$path$parser.arcToBeziers(x1,y1,x2,y2,fa,fs,rx,ry,phi);
});
app.common.svg.path.parse = (function app$common$svg$path$parse(path_str){
if(cljs.core.empty_QMARK_(path_str)){
return path_str;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (segment){
return segment.toPersistentMap();
})),module$app$common$svg$path$parser.parse(path_str));
}
});

//# sourceMappingURL=app.common.svg.path.js.map
