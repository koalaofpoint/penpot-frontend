import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.esm.js";
goog.provide('app.util.modules');
/**
 * Dynamic esm module import import
 */
app.util.modules.import$ = (function app$util$modules$import(path){
return shadow.esm.dynamic_import(cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));
});

//# sourceMappingURL=app.util.modules.js.map
