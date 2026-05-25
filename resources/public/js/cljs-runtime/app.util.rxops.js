import "./cljs_env.js";
import "./cljs.core.js";
import "./beicon.v2.core.js";
goog.provide('app.util.rxops');
app.util.rxops.throttle_fn = (function app$util$rxops$throttle_fn(delay,f){
var state = ({"lastExecTime": (0), "timeoutId": null, "context": null, "args": null});
var execute_fn = (function (){
var context = state.context;
var args = state.args;
f.apply(context,args);

(state.lastExecTime = Date.now());

return (state.timeoutId = null);
});
var wrapped_fn = (function (){
var ctime = Date.now();
var ltime = state.lastExecTime;
var args = arguments;
var this_45883 = this;
(state.context = this_45883);

(state.args = args);

var timeout_id = state.timeoutId;
if(((ctime - ltime) >= delay)){
if(timeout_id){
clearTimeout(timeout_id);

(state.timeoutId = null);
} else {
}

return execute_fn();
} else {
if(timeout_id){
return null;
} else {
return (state.timeoutId = setTimeout(execute_fn,(delay - (ctime - ltime))));
}
}
});
var x45866 = wrapped_fn;
(x45866.beicon$v2$core$IDisposable$ = cljs.core.PROTOCOL_SENTINEL);

(x45866.beicon$v2$core$IDisposable$_dispose$arity$1 = (function (_){
var ___$1 = this;
clearTimeout(state.timeoutId);

(state.lastExecTime = (0));

return (state.timeoutId = null);
}));

return x45866;
});
/**
 * High performance rxjs throttle operation. It does not saturates the
 *   macro-task queue of the js runtime on long burst of mouse
 *   movements.
 */
app.util.rxops.throttle = (function app$util$rxops$throttle(delay){
return (function (source){
return beicon.v2.core.create((function (subs){
var next_fn = app.util.rxops.throttle_fn(delay,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(beicon.v2.core.push_BANG_,subs));
var error_fn = (function (cause){
beicon.v2.core.dispose_BANG_(next_fn);

return subs.error(cause);
});
var end_fn = (function (){
beicon.v2.core.dispose_BANG_(next_fn);

return subs.complete();
});
return beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$4(source,next_fn,error_fn,end_fn);
}));
});
});

//# sourceMappingURL=app.util.rxops.js.map
