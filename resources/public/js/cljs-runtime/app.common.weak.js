import "./cljs_env.js";
import "./cljs.core.js";
import "./module$app$common$weak$impl_weak_map.js";
import "./module$app$common$weak$impl_weak_value_map.js";
goog.provide('app.common.weak');
/**
 * Creates a WeakMap instance where values are held by soft
 *   references and keys are held by hard references.
 */
app.common.weak.weak_value_map = (function app$common$weak$weak_value_map(){
return (new module$app$common$weak$impl_weak_value_map.WeakValueMap());
});
/**
 * Create a WeakMap-like instance what uses clojure equality
 *   semantics.
 */
app.common.weak.weak_map = (function app$common$weak$weak_map(){
return (new module$app$common$weak$impl_weak_map.WeakEqMap(({"hash": cljs.core.hash, "equals": cljs.core._EQ_})));
});
app.common.weak.state = (new WeakMap());
app.common.weak.global_counter = (0);
/**
 * A simple helper that returns a stable key string for an object while
 *   that object remains in memory and is not collected by the GC.
 * 
 *   Mainly used for assign temporal IDs/keys for react children
 *   elements when the element has no specific id.
 */
app.common.weak.weak_key = (function app$common$weak$weak_key(o){
var key = app.common.weak.state.get(o);
if((!((key == null)))){
return key;
} else {
var key__$1 = ["weak-key",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.common.weak.global_counter++)].join('');
app.common.weak.state.set(o,key__$1);

return key__$1;
}
});
/**
 * Returns a memoized version of a referentially transparent
 *   function. The memoized version of the function keeps a cache of the
 *   mapping from arguments to results and, when calls with the same
 *   arguments are repeated often, has higher performance at the expense
 *   of higher memory use.
 * 
 *   The main difference with clojure.core/memoize, is that this function
 *   uses weak-map, so cache is cleared once GC is passed and cached keys
 *   are collected
 */
app.common.weak.memoize = (function app$common$weak$memoize(f){
var mem = app.common.weak.weak_map();
return (function() { 
var G__47774__delegate = function (args){
var v = mem.get(args);
if((void 0 === v)){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
mem.set(args,ret);

return ret;
} else {
return v;
}
};
var G__47774 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47775__i = 0, G__47775__a = new Array(arguments.length -  0);
while (G__47775__i < G__47775__a.length) {G__47775__a[G__47775__i] = arguments[G__47775__i + 0]; ++G__47775__i;}
  args = new cljs.core.IndexedSeq(G__47775__a,0,null);
} 
return G__47774__delegate.call(this,args);};
G__47774.cljs$lang$maxFixedArity = 0;
G__47774.cljs$lang$applyTo = (function (arglist__47776){
var args = cljs.core.seq(arglist__47776);
return G__47774__delegate(args);
});
G__47774.cljs$core$IFn$_invoke$arity$variadic = G__47774__delegate;
return G__47774;
})()
;
});

//# sourceMappingURL=app.common.weak.js.map
