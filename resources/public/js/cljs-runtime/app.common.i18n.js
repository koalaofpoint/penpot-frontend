import "./cljs_env.js";
import "./cljs.core.js";
goog.provide('app.common.i18n');
/**
 * This function will be monkeypatched at runtime with the real function in frontend i18n.
 * Here it just returns the key passed as argument. This way the result can be used in
 * unit tests or backend code for logs or error messages.
 */
app.common.i18n.tr = (function app$common$i18n$tr(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51169 = arguments.length;
var i__5750__auto___51170 = (0);
while(true){
if((i__5750__auto___51170 < len__5749__auto___51169)){
args__5755__auto__.push((arguments[i__5750__auto___51170]));

var G__51171 = (i__5750__auto___51170 + (1));
i__5750__auto___51170 = G__51171;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.i18n.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.i18n.tr.cljs$core$IFn$_invoke$arity$variadic = (function (key,_args){
return key;
}));

(app.common.i18n.tr.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.i18n.tr.cljs$lang$applyTo = (function (seq51166){
var G__51167 = cljs.core.first(seq51166);
var seq51166__$1 = cljs.core.next(seq51166);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51167,seq51166__$1);
}));


//# sourceMappingURL=app.common.i18n.js.map
