import "./cljs_env.js";
import "./cljs.core.js";
import "./cuerdas.core.js";
goog.provide('app.util.strings');
app.util.strings.trail_zeros_regex_1 = /\.0+$/;
app.util.strings.trail_zeros_regex_2 = /(\.\d*[^0])0+$/;
/**
 * Creates a number with predetermined precision and then removes the trailing 0.
 *   Examples:
 *  12.0123, 0 => 12
 *  12.0123, 1 => 12
 *  12.0123, 2 => 12.01
 */
app.util.strings.format_precision = (function app$util$strings$format_precision(num,precision){
try{if(typeof num === 'number'){
var num_str = num.toFixed(precision);
var num_str__$1 = cuerdas.core.replace(num_str,/\.0+$/,"");
var num_str__$2 = (function (){var temp__5823__auto__ = cljs.core.re_find(/(\.\d*[^0])0+$/,num_str__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cuerdas.core.replace(num_str__$1,cljs.core.first(m),cljs.core.second(m));
} else {
return num_str__$1;
}
})();
return num_str__$2;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(num);
}
}catch (e54936){var _ = e54936;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(num);
}});
app.util.strings.matches_search = (function app$util$strings$matches_search(name,search_term){
if(cuerdas.core.empty_QMARK_(search_term)){
return true;
} else {
var st = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(cuerdas.core.lower(search_term));
var nm = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(cuerdas.core.lower(name));
return cuerdas.core.includes_QMARK_(nm,st);
}
});

//# sourceMappingURL=app.util.strings.js.map
