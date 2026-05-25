import "./cljs_env.js";
import "./cljs.core.js";
import "./promesa.exec.js";
import "./promesa.impl.js";
import "./promesa.protocols.js";
import "./promesa.util.js";
goog.provide('promesa.core');
/**
 * Return a resolved promise with provided value.
 */
promesa.core.resolved = (function promesa$core$resolved(v){
return promesa.impl.resolved(v);
});
/**
 * Return a rejected promise with provided reason.
 */
promesa.core.rejected = (function promesa$core$rejected(v){
return promesa.impl.rejected(v);
});
/**
 * Creates an empty promise instance.
 */
promesa.core.deferred = (function promesa$core$deferred(){
return promesa.impl.deferred();
});
/**
 * The coerce based promise constructor. Creates an appropriate promise
 *   instance depending on the provided value.
 * 
 *   If an executor is provided, it will be used to resolve this
 *   promise.
 */
promesa.core.promise = (function promesa$core$promise(var_args){
var G__45863 = arguments.length;
switch (G__45863) {
case 1:
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (v){
return promesa.protocols._promise(v);
}));

(promesa.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (v,executor){
return promesa.protocols._fmap(promesa.protocols._promise(v),cljs.core.identity,executor);
}));

(promesa.core.promise.cljs$lang$maxFixedArity = 2);

/**
 * A convenience alias for `promise` coercion function that only accepts
 *   a single argument.
 */
promesa.core.wrap = (function promesa$core$wrap(v){
return promesa.protocols._promise(v);
});
/**
 * Create a promise instance from a factory function. If an executor is
 *   provided, the factory will be executed in the provided executor.
 * 
 *   A factory function looks like `(fn [resolve reject] (resolve 1))`.
 */
promesa.core.create = (function promesa$core$create(var_args){
var G__45874 = arguments.length;
switch (G__45874) {
case 1:
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.create.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.create.cljs$core$IFn$_invoke$arity$1 = (function (f){
var d = promesa.impl.deferred();
try{var G__45880_46222 = (function (p1__45869_SHARP_){
return promesa.protocols._resolve_BANG_(d,p1__45869_SHARP_);
});
var G__45881_46223 = (function (p1__45870_SHARP_){
return promesa.protocols._reject_BANG_(d,p1__45870_SHARP_);
});
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__45880_46222,G__45881_46223) : f.call(null,G__45880_46222,G__45881_46223));
}catch (e45879){var e_46224 = e45879;
promesa.protocols._reject_BANG_(d,e_46224);
}
return d;
}));

(promesa.core.create.cljs$core$IFn$_invoke$arity$2 = (function (f,executor){
var d = promesa.impl.deferred();
promesa.exec.run.cljs$core$IFn$_invoke$arity$2(executor,(function (){
try{var G__45886 = (function (p1__45871_SHARP_){
return promesa.protocols._resolve_BANG_(d,p1__45871_SHARP_);
});
var G__45887 = (function (p1__45872_SHARP_){
return promesa.protocols._reject_BANG_(d,p1__45872_SHARP_);
});
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__45886,G__45887) : f.call(null,G__45886,G__45887));
}catch (e45884){var e = e45884;
return promesa.protocols._reject_BANG_(d,e);
}}));

return d;
}));

(promesa.core.create.cljs$lang$maxFixedArity = 2);

/**
 * Return true if `v` is a promise instance.
 */
promesa.core.promise_QMARK_ = (function promesa$core$promise_QMARK_(v){
return promesa.impl.promise_QMARK_(v);
});
/**
 * Return true if `v` is a deferred instance.
 */
promesa.core.deferred_QMARK_ = (function promesa$core$deferred_QMARK_(v){
return promesa.impl.deferred_QMARK_(v);
});
/**
 * Returns true if `v` is a promise like object.
 */
promesa.core.thenable_QMARK_ = (function promesa$core$thenable_QMARK_(v){
return ((cljs.core.object_QMARK_(v)) && (cljs.core.fn_QMARK_((v["then"]))));
});
/**
 * Returns true if promise `p` is already fulfilled.
 */
promesa.core.resolved_QMARK_ = (function promesa$core$resolved_QMARK_(p){
return promesa.protocols._resolved_QMARK_(p);
});
/**
 * Returns true if promise `p` is already rejected.
 */
promesa.core.rejected_QMARK_ = (function promesa$core$rejected_QMARK_(p){
return promesa.protocols._rejected_QMARK_(p);
});
/**
 * Returns true if promise `p` is stil pending.
 */
promesa.core.pending_QMARK_ = (function promesa$core$pending_QMARK_(p){
return promesa.protocols._pending_QMARK_(p);
});
/**
 * Returns the current promise value.
 */
promesa.core.extract = (function promesa$core$extract(var_args){
var G__45902 = arguments.length;
switch (G__45902) {
case 1:
return promesa.core.extract.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.extract.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.extract.cljs$core$IFn$_invoke$arity$1 = (function (p){
return promesa.protocols._extract(p);
}));

(promesa.core.extract.cljs$core$IFn$_invoke$arity$2 = (function (p,default$){
return promesa.protocols._extract(p,default$);
}));

(promesa.core.extract.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if promise `p` is already done.
 */
promesa.core.done_QMARK_ = (function promesa$core$done_QMARK_(p){
return cljs.core.not(promesa.protocols._pending_QMARK_(p));
});
/**
 * Chains a function `f` to be executed when the promise `p` is
 *   successfully resolved. Returns a promise that will be resolved with
 *   the return value of calling `f` with value as single argument; `f`
 *   can return a plain value or promise instance, an automatic
 *   unwrapping will be performed.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 */
promesa.core.then = (function promesa$core$then(var_args){
var G__45915 = arguments.length;
switch (G__45915) {
case 2:
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.then.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._then(promesa.protocols._promise(p),f);
}));

(promesa.core.then.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._then(promesa.protocols._promise(p),f,executor);
}));

(promesa.core.then.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed when the promise `p` is
 *   successfully resolved. Returns a promise that will be resolved with
 *   the return value of calling `f` with value as single argument; `f`
 *   should return a plain value, no automatic unwrapping will be
 *   performed.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 */
promesa.core.then_SINGLEQUOTE_ = (function promesa$core$then_SINGLEQUOTE_(var_args){
var G__45927 = arguments.length;
switch (G__45927) {
case 2:
return promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._fmap(promesa.protocols._promise(p),f);
}));

(promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._fmap(promesa.protocols._promise(p),f,executor);
}));

(promesa.core.then_SINGLEQUOTE_.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed with when the promise `p` is
 *   successfully resolved. Returns a promise that will mirror the
 *   promise instance returned by calling `f` with the value as single
 *   argument; `f` **must** return a promise instance.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 */
promesa.core.bind = (function promesa$core$bind(var_args){
var G__45936 = arguments.length;
switch (G__45936) {
case 2:
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.bind.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.bind.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._mcat(promesa.protocols._promise(p),f);
}));

(promesa.core.bind.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._mcat(promesa.protocols._promise(p),f,executor);
}));

(promesa.core.bind.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed when the promise `p` is
 *   successfully resolved. Returns a promise that will be resolved with
 *   the return value of calling `f` with value as single argument.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 * 
 *   This function is intended to be used with `->>`.
 */
promesa.core.map = (function promesa$core$map(var_args){
var G__45945 = arguments.length;
switch (G__45945) {
case 2:
return promesa.core.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.map.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._fmap(promesa.protocols._promise(p),f);
}));

(promesa.core.map.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._fmap(promesa.protocols._promise(p),f,executor);
}));

(promesa.core.map.cljs$lang$maxFixedArity = 3);

/**
 * A convenience alias for `map`.
 */
promesa.core.fmap = (function promesa$core$fmap(var_args){
var G__45951 = arguments.length;
switch (G__45951) {
case 2:
return promesa.core.fmap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.fmap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.fmap.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._fmap(promesa.protocols._promise(p),f);
}));

(promesa.core.fmap.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._fmap(promesa.protocols._promise(p),f,executor);
}));

(promesa.core.fmap.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed when the promise `p` is
 *   successfully resolved. Returns a promise that will mirror the
 *   promise instance returned by calling `f` with the value as single
 *   argument; `f` **must** return a promise instance.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 * 
 *   This funciton is intended to be used with `->>`.
 */
promesa.core.mapcat = (function promesa$core$mapcat(var_args){
var G__45957 = arguments.length;
switch (G__45957) {
case 2:
return promesa.core.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.mapcat.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._mcat(promesa.protocols._promise(p),f);
}));

(promesa.core.mapcat.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._mcat(promesa.protocols._promise(p),f,executor);
}));

(promesa.core.mapcat.cljs$lang$maxFixedArity = 3);

/**
 * A convenience alias for `mapcat`.
 */
promesa.core.mcat = (function promesa$core$mcat(var_args){
var G__45963 = arguments.length;
switch (G__45963) {
case 2:
return promesa.core.mcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.mcat.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.mcat.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._mcat(promesa.protocols._promise(p),f);
}));

(promesa.core.mcat.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._mcat(promesa.protocols._promise(p),f,executor);
}));

(promesa.core.mcat.cljs$lang$maxFixedArity = 3);

/**
 * Chain variable number of functions to be executed serially using
 *   `then`.
 */
promesa.core.chain = (function promesa$core$chain(var_args){
var G__45969 = arguments.length;
switch (G__45969) {
case 2:
return promesa.core.chain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___46244 = arguments.length;
var i__5750__auto___46246 = (0);
while(true){
if((i__5750__auto___46246 < len__5749__auto___46244)){
args_arr__5774__auto__.push((arguments[i__5750__auto___46246]));

var G__46247 = (i__5750__auto___46246 + (1));
i__5750__auto___46246 = G__46247;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(promesa.core.chain.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic = (function (p,f,fs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(promesa.core.then,p,cljs.core.cons(f,fs));
}));

/** @this {Function} */
(promesa.core.chain.cljs$lang$applyTo = (function (seq45966){
var G__45967 = cljs.core.first(seq45966);
var seq45966__$1 = cljs.core.next(seq45966);
var G__45968 = cljs.core.first(seq45966__$1);
var seq45966__$2 = cljs.core.next(seq45966__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45967,G__45968,seq45966__$2);
}));

(promesa.core.chain.cljs$lang$maxFixedArity = (2));

/**
 * Chain variable number of functions to be executed serially using
 *   `map`.
 */
promesa.core.chain_SINGLEQUOTE_ = (function promesa$core$chain_SINGLEQUOTE_(var_args){
var G__45976 = arguments.length;
switch (G__45976) {
case 2:
return promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___46254 = arguments.length;
var i__5750__auto___46255 = (0);
while(true){
if((i__5750__auto___46255 < len__5749__auto___46254)){
args_arr__5774__auto__.push((arguments[i__5750__auto___46255]));

var G__46256 = (i__5750__auto___46255 + (1));
i__5750__auto___46255 = G__46256;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic = (function (p,f,fs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__45971_SHARP_,p2__45970_SHARP_){
return promesa.core.map.cljs$core$IFn$_invoke$arity$2(p2__45970_SHARP_,p1__45971_SHARP_);
}),promesa.protocols._promise(p),cljs.core.cons(f,fs));
}));

/** @this {Function} */
(promesa.core.chain_SINGLEQUOTE_.cljs$lang$applyTo = (function (seq45973){
var G__45974 = cljs.core.first(seq45973);
var seq45973__$1 = cljs.core.next(seq45973);
var G__45975 = cljs.core.first(seq45973__$1);
var seq45973__$2 = cljs.core.next(seq45973__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45974,G__45975,seq45973__$2);
}));

(promesa.core.chain_SINGLEQUOTE_.cljs$lang$maxFixedArity = (2));

/**
 * Chains a function `f` to be executed when the promise `p` is completed
 *   (resolved or rejected) and returns a promise completed (resolving or
 *   rejecting) with the return value of calling `f` with both: value and
 *   the exception; `f` can return a new plain value or promise instance,
 *   and automatic unwrapping will be performed.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 * 
 *   For performance sensitive code, look at `hmap` and `hcat`.
 */
promesa.core.handle = (function promesa$core$handle(var_args){
var G__45978 = arguments.length;
switch (G__45978) {
case 2:
return promesa.core.handle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.handle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.handle.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._mcat(promesa.protocols._hmap(promesa.protocols._promise(p),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(promesa.protocols._promise,f)),cljs.core.identity);
}));

(promesa.core.handle.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._mcat(promesa.protocols._hmap(promesa.protocols._promise(p),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(promesa.protocols._promise,f),executor),cljs.core.identity,executor);
}));

(promesa.core.handle.cljs$lang$maxFixedArity = 3);

/**
 * Like `handle` but ignores the return value. Returns a promise that
 *   will mirror the original one.
 */
promesa.core.finally$ = (function promesa$core$finally(var_args){
var G__45985 = arguments.length;
switch (G__45985) {
case 2:
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._fnly(promesa.protocols._promise(p),f);
}));

(promesa.core.finally$.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._fnly(promesa.protocols._promise(p),f,executor);
}));

(promesa.core.finally$.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed when the promise `p` is completed
 *   (resolved or rejected) and returns a promise completed (resolving or
 *   rejecting) with the return value of calling `f` with both: value and
 *   the exception.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 * 
 *   Intended to be used with `->>`.
 */
promesa.core.hmap = (function promesa$core$hmap(var_args){
var G__45990 = arguments.length;
switch (G__45990) {
case 2:
return promesa.core.hmap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.hmap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.hmap.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._hmap(promesa.protocols._promise(p),f);
}));

(promesa.core.hmap.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._hmap(promesa.protocols._promise(p),f,executor);
}));

(promesa.core.hmap.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed when the promise `p` is completed
 *   (resolved or rejected) and returns a promise that will mirror the
 *   promise instance returned by calling `f` with both: value and the
 *   exception. The `f` function must return a promise instance.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 * 
 *   Intended to be used with `->>`.
 */
promesa.core.hcat = (function promesa$core$hcat(var_args){
var G__45994 = arguments.length;
switch (G__45994) {
case 2:
return promesa.core.hcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.hcat.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.hcat.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._mcat(promesa.protocols._hmap(promesa.protocols._promise(p),f),cljs.core.identity);
}));

(promesa.core.hcat.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._mcat(promesa.protocols._hmap(promesa.protocols._promise(p),f,executor),cljs.core.identity,executor);
}));

(promesa.core.hcat.cljs$lang$maxFixedArity = 3);

/**
 * Inverted arguments version of `finally`; intended to be used with
 *   `->>`.
 */
promesa.core.fnly = (function promesa$core$fnly(var_args){
var G__46000 = arguments.length;
switch (G__46000) {
case 2:
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.fnly.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._fnly(promesa.protocols._promise(p),f);
}));

(promesa.core.fnly.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._fnly(promesa.protocols._promise(p),f,executor);
}));

(promesa.core.fnly.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed when the promise `p` is
 *   rejected. Returns a promise that will be resolved with the return
 *   value of calling `f` with exception as single argument; `f` can
 *   return a plain value or promise instance, an automatic unwrapping
 *   will be performed.
 * 
 *   The computation will be executed in the completion thread, look at
 *   `merr` if you want the ability to schedule the computation to other
 *   thread.
 */
promesa.core.catch$ = (function promesa$core$catch(var_args){
var G__46005 = arguments.length;
switch (G__46005) {
case 2:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._merr(promesa.protocols._promise(p),(function (p1__46001_SHARP_){
return promesa.protocols._promise((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__46001_SHARP_) : f.call(null,p1__46001_SHARP_)));
}));
}));

(promesa.core.catch$.cljs$core$IFn$_invoke$arity$3 = (function (p,pred_or_type,f){
var accept_QMARK_ = ((cljs.core.ifn_QMARK_(pred_or_type))?pred_or_type:(function (p1__46002_SHARP_){
return (p1__46002_SHARP_ instanceof pred_or_type);
}));
return promesa.protocols._merr(promesa.protocols._promise(p),(function (e){
if(cljs.core.truth_((accept_QMARK_.cljs$core$IFn$_invoke$arity$1 ? accept_QMARK_.cljs$core$IFn$_invoke$arity$1(e) : accept_QMARK_.call(null,e)))){
return promesa.protocols._promise((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e)));
} else {
return promesa.impl.rejected(e);
}
}));
}));

(promesa.core.catch$.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed when the promise `p` is
 *   rejected. Returns a promise that will mirror the promise returned by
 *   calling `f` with exception as single argument; `f` **must** return a
 *   promise instance or throw an exception.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 * 
 *   This is intended to be used with `->>`.
 */
promesa.core.merr = (function promesa$core$merr(var_args){
var G__46007 = arguments.length;
switch (G__46007) {
case 2:
return promesa.core.merr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.merr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.merr.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._merr(p,f);
}));

(promesa.core.merr.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._merr(p,f,executor);
}));

(promesa.core.merr.cljs$lang$maxFixedArity = 3);

/**
 * Same as `catch` but with parameters inverted.
 * 
 *   DEPRECATED
 */
promesa.core.error = (function promesa$core$error(var_args){
var G__46009 = arguments.length;
switch (G__46009) {
case 2:
return promesa.core.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.error.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core.error.cljs$core$IFn$_invoke$arity$3 = (function (f,type,p){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$3(p,type,f);
}));

(promesa.core.error.cljs$lang$maxFixedArity = 3);

/**
 * Given an array of promises, return a promise that is fulfilled when
 *   all the items in the array are fulfilled.
 * 
 *   Example:
 * 
 *   ```
 *   (-> (p/all [(promise :first-promise)
 *            (promise :second-promise)])
 *    (then (fn [[first-result second-result]])
 *            (println (str first-result ", " second-result))))
 *   ```
 * 
 *   Will print to out `:first-promise, :second-promise`.
 * 
 *   If at least one of the promises is rejected, the resulting promise
 *   will be rejected.
 */
promesa.core.all = (function promesa$core$all(promises){
return promesa.impl.all(promises);
});
promesa.core.race = (function promesa$core$race(promises){
return promesa.impl.race(promises);
});
/**
 * Given an array of promises, return a promise that is fulfilled when
 *   first one item in the array is fulfilled.
 */
promesa.core.any = (function promesa$core$any(var_args){
var G__46011 = arguments.length;
switch (G__46011) {
case 1:
return promesa.core.any.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.any.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.any.cljs$core$IFn$_invoke$arity$1 = (function (promises){
return promesa.core.any.cljs$core$IFn$_invoke$arity$2(promises,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826));
}));

(promesa.core.any.cljs$core$IFn$_invoke$arity$2 = (function (promises,default$){
var items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,promises);
var state = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pending","pending",-220036727),items,new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"resolved?","resolved?",862515389),false], null));
var lock = promesa.util.mutex();
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
var seq__46016 = cljs.core.seq(promises);
var chunk__46018 = null;
var count__46019 = (0);
var i__46020 = (0);
while(true){
if((i__46020 < count__46019)){
var p = chunk__46018.cljs$core$IIndexed$_nth$arity$2(null,i__46020);
promesa.protocols._fnly(promesa.protocols._promise(p),((function (seq__46016,chunk__46018,count__46019,i__46020,p,items,state,lock){
return (function (v,exception){
lock.promesa$protocols$ILock$_lock_BANG_$arity$1(null);

try{if(cljs.core.truth_(exception)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved?","resolved?",862515389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
var state__$1 = state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,((function (seq__46016,chunk__46018,count__46019,i__46020,p,items,state,lock){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.disj,p),new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.conj,exception);
});})(seq__46016,chunk__46018,count__46019,i__46020,p,items,state,lock))
(state.cljs$core$IDeref$_deref$arity$1(null)));
if(cljs.core.seq(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(state__$1))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826))){
var G__46061 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No promises resolved",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rejections","rejections",-1620899911),new cljs.core.Keyword(null,"rejections","rejections",-1620899911).cljs$core$IFn$_invoke$arity$1(state__$1)], null));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__46061) : reject.call(null,G__46061));
} else {
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(default$) : resolve.call(null,default$));
}
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved?","resolved?",862515389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
var map__46063 = state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,((function (seq__46016,chunk__46018,count__46019,i__46020,p,items,state,lock){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"resolved?","resolved?",862515389),true),new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.disj,p);
});})(seq__46016,chunk__46018,count__46019,i__46020,p,items,state,lock))
(state.cljs$core$IDeref$_deref$arity$1(null)));
var map__46063__$1 = cljs.core.__destructure_map(map__46063);
var pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46063__$1,new cljs.core.Keyword(null,"pending","pending",-220036727));
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(v) : resolve.call(null,v));
}
}
}finally {lock.promesa$protocols$ILock$_unlock_BANG_$arity$1(null);
}});})(seq__46016,chunk__46018,count__46019,i__46020,p,items,state,lock))
);


var G__46277 = seq__46016;
var G__46278 = chunk__46018;
var G__46279 = count__46019;
var G__46280 = (i__46020 + (1));
seq__46016 = G__46277;
chunk__46018 = G__46278;
count__46019 = G__46279;
i__46020 = G__46280;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__46016);
if(temp__5825__auto__){
var seq__46016__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46016__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__46016__$1);
var G__46282 = cljs.core.chunk_rest(seq__46016__$1);
var G__46283 = c__5548__auto__;
var G__46284 = cljs.core.count(c__5548__auto__);
var G__46285 = (0);
seq__46016 = G__46282;
chunk__46018 = G__46283;
count__46019 = G__46284;
i__46020 = G__46285;
continue;
} else {
var p = cljs.core.first(seq__46016__$1);
promesa.protocols._fnly(promesa.protocols._promise(p),((function (seq__46016,chunk__46018,count__46019,i__46020,p,seq__46016__$1,temp__5825__auto__,items,state,lock){
return (function (v,exception){
lock.promesa$protocols$ILock$_lock_BANG_$arity$1(null);

try{if(cljs.core.truth_(exception)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved?","resolved?",862515389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
var state__$1 = state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,((function (seq__46016,chunk__46018,count__46019,i__46020,p,seq__46016__$1,temp__5825__auto__,items,state,lock){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.disj,p),new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.conj,exception);
});})(seq__46016,chunk__46018,count__46019,i__46020,p,seq__46016__$1,temp__5825__auto__,items,state,lock))
(state.cljs$core$IDeref$_deref$arity$1(null)));
if(cljs.core.seq(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(state__$1))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826))){
var G__46065 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No promises resolved",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rejections","rejections",-1620899911),new cljs.core.Keyword(null,"rejections","rejections",-1620899911).cljs$core$IFn$_invoke$arity$1(state__$1)], null));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__46065) : reject.call(null,G__46065));
} else {
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(default$) : resolve.call(null,default$));
}
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved?","resolved?",862515389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
var map__46066 = state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,((function (seq__46016,chunk__46018,count__46019,i__46020,p,seq__46016__$1,temp__5825__auto__,items,state,lock){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"resolved?","resolved?",862515389),true),new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.disj,p);
});})(seq__46016,chunk__46018,count__46019,i__46020,p,seq__46016__$1,temp__5825__auto__,items,state,lock))
(state.cljs$core$IDeref$_deref$arity$1(null)));
var map__46066__$1 = cljs.core.__destructure_map(map__46066);
var pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46066__$1,new cljs.core.Keyword(null,"pending","pending",-220036727));
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(v) : resolve.call(null,v));
}
}
}finally {lock.promesa$protocols$ILock$_unlock_BANG_$arity$1(null);
}});})(seq__46016,chunk__46018,count__46019,i__46020,p,seq__46016__$1,temp__5825__auto__,items,state,lock))
);


var G__46288 = cljs.core.next(seq__46016__$1);
var G__46289 = null;
var G__46290 = (0);
var G__46291 = (0);
seq__46016 = G__46288;
chunk__46018 = G__46289;
count__46019 = G__46290;
i__46020 = G__46291;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));

(promesa.core.any.cljs$lang$maxFixedArity = 2);

/**
 * Given an array of promises, return a promise that is fulfilled when
 *   all the items in the array are resolved (independently if
 *   successfully or exceptionally).
 * 
 *   Example:
 * 
 *   ```
 *   (->> (p/wait-all* [(promise-returning-fn :first-promise)
 *                   (promise-returning-fn :second-promise)])
 *     (p/fmap (fn [_]
 *               (println "done"))))
 *   ```
 * 
 *   Rejected promises also counts as resolved.
 */
promesa.core.wait_all_STAR_ = (function promesa$core$wait_all_STAR_(promises){
var promises__$1 = cljs.core.set(promises);
var total = cljs.core.count(promises__$1);
var prom = promesa.core.deferred();
if((total > (0))){
var counter_46296 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(total);
cljs.core.run_BANG_((function (p1__46071_SHARP_){
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$2((function (_,___$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter_46296,cljs.core.dec))){
return promesa.protocols._resolve_BANG_(prom,null);
} else {
return null;
}
}),p1__46071_SHARP_);
}),promises__$1);
} else {
promesa.protocols._resolve_BANG_(prom,null);
}

return prom;
});
/**
 * Given a variable number of promises, returns a promise which resolves
 *   to `nil` when all provided promises complete (rejected or resolved)
 */
promesa.core.wait_all = (function promesa$core$wait_all(var_args){
var args__5755__auto__ = [];
var len__5749__auto___46298 = arguments.length;
var i__5750__auto___46299 = (0);
while(true){
if((i__5750__auto___46299 < len__5749__auto___46298)){
args__5755__auto__.push((arguments[i__5750__auto___46299]));

var G__46300 = (i__5750__auto___46299 + (1));
i__5750__auto___46299 = G__46300;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return promesa.core.wait_all.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(promesa.core.wait_all.cljs$core$IFn$_invoke$arity$variadic = (function (promises){
return promesa.core.wait_all_STAR_(cljs.core.vec(promises));
}));

(promesa.core.wait_all.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(promesa.core.wait_all.cljs$lang$applyTo = (function (seq46077){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46077));
}));

/**
 * A promise aware run! function. Executed in terms of `then` rules.
 * 
 *   DEPRECATED, replaced by `run` (without !)
 */
promesa.core.run_BANG_ = (function promesa$core$run_BANG_(var_args){
var G__46094 = arguments.length;
switch (G__46094) {
case 2:
return promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return promesa.protocols._fmap(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__46086_SHARP_,p2__46088_SHARP_){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(p1__46086_SHARP_,(function (_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__46088_SHARP_) : f.call(null,p2__46088_SHARP_));
}));
}),promesa.impl.resolved(null),coll),cljs.core.constantly(null));
}));

(promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (f,coll,executor){
return promesa.protocols._fmap(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__46089_SHARP_,p2__46090_SHARP_){
return promesa.core.then.cljs$core$IFn$_invoke$arity$3(p1__46089_SHARP_,(function (_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__46090_SHARP_) : f.call(null,p2__46090_SHARP_));
}),executor);
}),promesa.impl.resolved(null),coll),cljs.core.constantly(null));
}));

(promesa.core.run_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * A promise aware run! function. Executed in terms of `then` rules.
 */
promesa.core.run = (function promesa$core$run(var_args){
var G__46111 = arguments.length;
switch (G__46111) {
case 2:
return promesa.core.run.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.run.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.run.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return promesa.protocols._fmap(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__46100_SHARP_,p2__46101_SHARP_){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(p1__46100_SHARP_,(function (_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__46101_SHARP_) : f.call(null,p2__46101_SHARP_));
}));
}),promesa.impl.resolved(null),coll),cljs.core.constantly(null));
}));

(promesa.core.run.cljs$core$IFn$_invoke$arity$3 = (function (f,coll,executor){
return promesa.protocols._fmap(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__46102_SHARP_,p2__46103_SHARP_){
return promesa.core.then.cljs$core$IFn$_invoke$arity$3(p1__46102_SHARP_,(function (_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__46103_SHARP_) : f.call(null,p2__46103_SHARP_));
}),executor);
}),promesa.impl.resolved(null),coll),cljs.core.constantly(null));
}));

(promesa.core.run.cljs$lang$maxFixedArity = 3);

/**
 * A promise-aware reduce. Allows reduce with potentially asynchrnous
 *   process over provided initial value and a collection.
 */
promesa.core.reduce = (function promesa$core$reduce(f,init,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (init__$1,item){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(init__$1,(function (init__$2){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(init__$2,item) : f.call(null,init__$2,item));
}));
}),promesa.core.resolved(init),coll);
});
/**
 * Cancel the promise.
 */
promesa.core.cancel_BANG_ = (function promesa$core$cancel_BANG_(p){
promesa.protocols._cancel_BANG_(p);

return p;
});
/**
 * Return true if `v` is a cancelled promise.
 */
promesa.core.cancelled_QMARK_ = (function promesa$core$cancelled_QMARK_(v){
return promesa.protocols._cancelled_QMARK_(v);
});
/**
 * Resolve a completable promise with a value.
 */
promesa.core.resolve_BANG_ = (function promesa$core$resolve_BANG_(var_args){
var G__46125 = arguments.length;
switch (G__46125) {
case 1:
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (o){
return promesa.protocols._resolve_BANG_(o,null);
}));

(promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (o,v){
return promesa.protocols._resolve_BANG_(o,v);
}));

(promesa.core.resolve_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Reject a completable promise with an error.
 */
promesa.core.reject_BANG_ = (function promesa$core$reject_BANG_(p,e){
return promesa.protocols._reject_BANG_(p,e);
});
/**
 * Given a function that accepts a callback as the last argument, return a
 *   function that returns a promise. Callback is expected to take one
 *   parameter (result of a computation).
 */
promesa.core.promisify = (function promesa$core$promisify(callable){
return (function() { 
var G__46311__delegate = function (args){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
var args__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(args),resolve);
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callable,args__$1);
}catch (e46135){if((e46135 instanceof Error)){
var e = e46135;
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(e) : reject.call(null,e));
} else {
throw e46135;

}
}}));
};
var G__46311 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46312__i = 0, G__46312__a = new Array(arguments.length -  0);
while (G__46312__i < G__46312__a.length) {G__46312__a[G__46312__i] = arguments[G__46312__i + 0]; ++G__46312__i;}
  args = new cljs.core.IndexedSeq(G__46312__a,0,null);
} 
return G__46311__delegate.call(this,args);};
G__46311.cljs$lang$maxFixedArity = 0;
G__46311.cljs$lang$applyTo = (function (arglist__46313){
var args = cljs.core.seq(arglist__46313);
return G__46311__delegate(args);
});
G__46311.cljs$core$IFn$_invoke$arity$variadic = G__46311__delegate;
return G__46311;
})()
;
});
/**
 * @constructor
 */
promesa.core.TimeoutException = (function promesa$core$TimeoutException(message){
var it = this;
Error.call(it,message,cljs.core.PersistentArrayMap.EMPTY,null);

return it;
});
goog.inherits(promesa.core.TimeoutException,Error);
/**
 * Returns a cancellable promise that will be fulfilled with this
 *   promise's fulfillment value or rejection reason.  However, if this
 *   promise is not fulfilled or rejected within `ms` milliseconds, the
 *   returned promise is cancelled with a TimeoutError.
 */
promesa.core.timeout = (function promesa$core$timeout(var_args){
var G__46138 = arguments.length;
switch (G__46138) {
case 2:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (p,t){
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$4(p,t,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826),new cljs.core.Keyword(null,"default","default",-1987822328));
}));

(promesa.core.timeout.cljs$core$IFn$_invoke$arity$3 = (function (p,t,v){
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$4(p,t,v,new cljs.core.Keyword(null,"default","default",-1987822328));
}));

(promesa.core.timeout.cljs$core$IFn$_invoke$arity$4 = (function (p,t,v,scheduler){
var timeout = promesa.core.deferred();
var tid = promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3(scheduler,t,(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826))){
return promesa.core.reject_BANG_(timeout,(new promesa.core.TimeoutException("Operation timed out.")));
} else {
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(timeout,v);
}
}));
return promesa.core.race(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [promesa.core.fnly.cljs$core$IFn$_invoke$arity$2((function (_,___$1){
return promesa.protocols._cancel_BANG_(tid);
}),p),timeout], null));
}));

(promesa.core.timeout.cljs$lang$maxFixedArity = 4);

/**
 * Given a timeout in miliseconds and optional value, returns a promise
 *   that will be fulfilled with provided value (or nil) after the time is
 *   reached.
 */
promesa.core.delay = (function promesa$core$delay(var_args){
var G__46151 = arguments.length;
switch (G__46151) {
case 1:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.delay.cljs$core$IFn$_invoke$arity$1 = (function (t){
return promesa.core.delay.cljs$core$IFn$_invoke$arity$3(t,null,new cljs.core.Keyword(null,"default","default",-1987822328));
}));

(promesa.core.delay.cljs$core$IFn$_invoke$arity$2 = (function (t,v){
return promesa.core.delay.cljs$core$IFn$_invoke$arity$3(t,v,new cljs.core.Keyword(null,"default","default",-1987822328));
}));

(promesa.core.delay.cljs$core$IFn$_invoke$arity$3 = (function (t,v,scheduler){
var d = promesa.core.deferred();
promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3(scheduler,t,(function (){
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(d,v);
}));

return d;
}));

(promesa.core.delay.cljs$lang$maxFixedArity = 3);

/**
 * Analogous to `clojure.core.async/thread` that returns a promise
 *   instance instead of the `Future`. Useful for executing synchronous
 *   code in a separate thread (also works in cljs).
 */
promesa.core.thread_call = (function promesa$core$thread_call(var_args){
var G__46163 = arguments.length;
switch (G__46163) {
case 1:
return promesa.core.thread_call.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.thread_call.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.thread_call.cljs$core$IFn$_invoke$arity$1 = (function (f){
return promesa.exec.submit.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"thread","thread",947001524),f);
}));

(promesa.core.thread_call.cljs$core$IFn$_invoke$arity$2 = (function (executor,f){
return promesa.exec.submit.cljs$core$IFn$_invoke$arity$2(executor,f);
}));

(promesa.core.thread_call.cljs$lang$maxFixedArity = 2);

/**
 * A shortcut for `(p/thread-call :vthread f)`.
 */
promesa.core.vthread_call = (function promesa$core$vthread_call(f){
return promesa.core.thread_call.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),f);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
promesa.core.Recur = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(promesa.core.Recur.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(promesa.core.Recur.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k46168,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__46176 = k46168;
var G__46176__$1 = (((G__46176 instanceof cljs.core.Keyword))?G__46176.fqn:null);
switch (G__46176__$1) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46168,else__5326__auto__);

}
}));

(promesa.core.Recur.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__46177){
var vec__46178 = p__46177;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46178,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46178,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(promesa.core.Recur.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#promesa.core.Recur{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
}));

(promesa.core.Recur.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46167){
var self__ = this;
var G__46167__$1 = this;
return (new cljs.core.RecordIter((0),G__46167__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(promesa.core.Recur.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(promesa.core.Recur.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new promesa.core.Recur(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
}));

(promesa.core.Recur.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(promesa.core.Recur.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-404494900 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(promesa.core.Recur.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46169,other46170){
var self__ = this;
var this46169__$1 = this;
return (((!((other46170 == null)))) && ((((this46169__$1.constructor === other46170.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46169__$1.bindings,other46170.bindings)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46169__$1.__extmap,other46170.__extmap)))))));
}));

(promesa.core.Recur.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new promesa.core.Recur(self__.bindings,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(promesa.core.Recur.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k46168){
var self__ = this;
var this__5330__auto____$1 = this;
var G__46199 = k46168;
var G__46199__$1 = (((G__46199 instanceof cljs.core.Keyword))?G__46199.fqn:null);
switch (G__46199__$1) {
case "bindings":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46168);

}
}));

(promesa.core.Recur.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__46167){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__46207 = cljs.core.keyword_identical_QMARK_;
var expr__46208 = k__5332__auto__;
if(cljs.core.truth_((pred__46207.cljs$core$IFn$_invoke$arity$2 ? pred__46207.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__46208) : pred__46207.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__46208)))){
return (new promesa.core.Recur(G__46167,self__.__meta,self__.__extmap,null));
} else {
return (new promesa.core.Recur(self__.bindings,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__46167),null));
}
}));

(promesa.core.Recur.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null))], null),self__.__extmap));
}));

(promesa.core.Recur.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__46167){
var self__ = this;
var this__5322__auto____$1 = this;
return (new promesa.core.Recur(self__.bindings,G__46167,self__.__extmap,self__.__hash));
}));

(promesa.core.Recur.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(promesa.core.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
}));

(promesa.core.Recur.cljs$lang$type = true);

(promesa.core.Recur.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"promesa.core/Recur",null,(1),null));
}));

(promesa.core.Recur.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"promesa.core/Recur");
}));

/**
 * Positional factory function for promesa.core/Recur.
 */
promesa.core.__GT_Recur = (function promesa$core$__GT_Recur(bindings){
return (new promesa.core.Recur(bindings,null,null,null));
});

/**
 * Factory function for promesa.core/Recur, taking a map of keywords to field values.
 */
promesa.core.map__GT_Recur = (function promesa$core$map__GT_Recur(G__46172){
var extmap__5365__auto__ = (function (){var G__46212 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46172,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
if(cljs.core.record_QMARK_(G__46172)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46212);
} else {
return G__46212;
}
})();
return (new promesa.core.Recur(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__46172),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

promesa.core.recur_QMARK_ = (function promesa$core$recur_QMARK_(o){
return (o instanceof promesa.core.Recur);
});

//# sourceMappingURL=promesa.core.js.map
