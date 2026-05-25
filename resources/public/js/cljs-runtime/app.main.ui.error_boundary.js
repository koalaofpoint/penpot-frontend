import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$react_error_boundary.js";
import "./app.common.exceptions.js";
import "./app.config.js";
import "./app.main.errors.js";
import "./app.main.refs.js";
import "./goog.functions.functions.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.error_boundary');
app.main.ui.error_boundary.error_boundary_STAR_ = (function app$main$ui$error_boundary$error_boundary_STAR_(props_58678){
var children = props_58678.children;
var fallback = props_58678.fallback;
var fallback_wrapper = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(fallback)],(function (){
var fallback_wrapper_STAR___58680 = (function app$main$ui$error_boundary$error_boundary_STAR__$_fallback_wrapper_STAR_(props_58679){
var reset_error_boundary = props_58679.resetErrorBoundary;
var error = props_58679.error;
var route = rumext.v2.deref(app.main.refs.route);
var data = app.main.errors.exception__GT_error_data(error);
return rumext.v2.jsx(fallback,{'data':data,'route':route,'onReset':reset_error_boundary});
});
(fallback_wrapper_STAR___58680.displayName = "fallback-wrapper*");

return fallback_wrapper_STAR___58680;
}));
var on_error = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return goog.functions.debounce((function (error,info){
if(cljs.core.truth_(app.main.errors.stale_asset_error_QMARK_(error))){
return app.config.throttled_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reason","reason",-2070751759),cljs.core.ex_message(error)], 0));
} else {
(app.main.errors.last_exception = error);

app.common.exceptions.print_throwable(error);

return console.error("Component trace: \n",(info["componentStack"]),"\n",error);
}
}),(100));
}));
return rumext.v2.jsx(shadow.js.shim.module$react_error_boundary.ErrorBoundary,{'FallbackComponent':fallback_wrapper,'onError':on_error,'children':children});
});

(app.main.ui.error_boundary.error_boundary_STAR_.displayName = "error-boundary*");


//# sourceMappingURL=app.main.ui.error_boundary.js.map
