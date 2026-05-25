import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$lodash$debounce.js";
import "./app.util.rxops.js";
goog.provide('app.util.functions');
app.util.functions.ext_debounce = (function (){var or__5025__auto__ = shadow.js.shim.module$lodash$debounce.default;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return shadow.js.shim.module$lodash$debounce;
}
})();
app.util.functions.debounce = (function app$util$functions$debounce(var_args){
var G__46155 = arguments.length;
switch (G__46155) {
case 1:
return app.util.functions.debounce.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.functions.debounce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.functions.debounce.cljs$core$IFn$_invoke$arity$1 = (function (f){
return app.util.functions.debounce.cljs$core$IFn$_invoke$arity$2(f,(0));
}));

(app.util.functions.debounce.cljs$core$IFn$_invoke$arity$2 = (function (f,timeout){
var G__46159 = f;
var G__46160 = timeout;
var G__46161 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"leading","leading",-1239035032),null,true,null,false,null,new cljs.core.Keyword(null,"trailing","trailing",-1987290406),null], null), null);
return (app.util.functions.ext_debounce.cljs$core$IFn$_invoke$arity$3 ? app.util.functions.ext_debounce.cljs$core$IFn$_invoke$arity$3(G__46159,G__46160,G__46161) : app.util.functions.ext_debounce.call(null,G__46159,G__46160,G__46161));
}));

(app.util.functions.debounce.cljs$lang$maxFixedArity = 2);

app.util.functions.throttle = (function app$util$functions$throttle(var_args){
var G__46165 = arguments.length;
switch (G__46165) {
case 1:
return app.util.functions.throttle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.functions.throttle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.functions.throttle.cljs$core$IFn$_invoke$arity$1 = (function (f){
return app.util.rxops.throttle_fn((0),f);
}));

(app.util.functions.throttle.cljs$core$IFn$_invoke$arity$2 = (function (f,timeout){
return app.util.rxops.throttle_fn(timeout,f);
}));

(app.util.functions.throttle.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=app.util.functions.js.map
