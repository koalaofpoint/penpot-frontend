import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$rxjs.js";
goog.provide('beicon.v2.operators');
beicon.v2.operators.scheduler = (function beicon$v2$operators$scheduler(type){
var G__44973 = type;
var G__44973__$1 = (((G__44973 instanceof cljs.core.Keyword))?G__44973.fqn:null);
switch (G__44973__$1) {
case "asap":
return shadow.js.shim.module$rxjs.asapScheduler;

break;
case "async":
return shadow.js.shim.module$rxjs.asyncScheduler;

break;
case "queue":
return shadow.js.shim.module$rxjs.queueScheduler;

break;
case "af":
return shadow.js.shim.module$rxjs.animationFrameScheduler;

break;
case "animation-frame":
return shadow.js.shim.module$rxjs.animationFrameScheduler;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44973__$1)].join('')));

}
});
beicon.v2.operators.plain_object_QMARK_ = (function beicon$v2$operators$plain_object_QMARK_(o){
return (((!((o == null)))) && ((Object.getPrototypeOf(o) === Object.prototype)));
});
/**
 * Returns an observable sequence that shares a single subscription to
 *   the underlying sequence.
 */
beicon.v2.operators.share = shadow.js.shim.module$rxjs.share;
/**
 * Emits a given value if the source Observable completes without
 *   emitting any next value, otherwise mirrors the source Observable.
 */
beicon.v2.operators.if_empty = shadow.js.shim.module$rxjs.defaultIfEmpty;
/**
 * Merges an observable sequence of observable sequences into an
 *   observable sequence.
 */
beicon.v2.operators.merge_all = shadow.js.shim.module$rxjs.mergeAll;
/**
 * Filters the elements of an observable sequence
 *   based on a predicate.
 */
beicon.v2.operators.filter = (function beicon$v2$operators$filter(f){
return shadow.js.shim.module$rxjs.filter((function (p1__44974_SHARP_){
return cljs.core.boolean$((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__44974_SHARP_) : f.call(null,p1__44974_SHARP_)));
}));
});
beicon.v2.operators.map = (function beicon$v2$operators$map(f){
return shadow.js.shim.module$rxjs.map((function (p1__44975_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__44975_SHARP_) : f.call(null,p1__44975_SHARP_));
}));
});
/**
 * Same as `map` but also projects an index.
 */
beicon.v2.operators.map_indexed = (function beicon$v2$operators$map_indexed(var_args){
var G__44980 = arguments.length;
switch (G__44980) {
case 0:
return beicon.v2.operators.map_indexed.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return beicon.v2.operators.map_indexed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.operators.map_indexed.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.js.shim.module$rxjs.map((function (a,b){
return [a,b];
}));
}));

(beicon.v2.operators.map_indexed.cljs$core$IFn$_invoke$arity$1 = (function (f){
return shadow.js.shim.module$rxjs.map((function (p1__44978_SHARP_,p2__44977_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p2__44977_SHARP_,p1__44978_SHARP_) : f.call(null,p2__44977_SHARP_,p1__44978_SHARP_));
}));
}));

(beicon.v2.operators.map_indexed.cljs$lang$maxFixedArity = 1);

/**
 * Projects each element of an observable sequence to an observable
 *   sequence and merges the resulting observable sequences or Promises
 *   or array/iterable into one observable sequence.
 * 
 *   In other languages is called: flatMap or mergeMap.
 */
beicon.v2.operators.merge_map = (function beicon$v2$operators$merge_map(var_args){
var G__44984 = arguments.length;
switch (G__44984) {
case 1:
return beicon.v2.operators.merge_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return beicon.v2.operators.merge_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.operators.merge_map.cljs$core$IFn$_invoke$arity$1 = (function (f){
return shadow.js.shim.module$rxjs.mergeMap((function (p1__44981_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__44981_SHARP_) : f.call(null,p1__44981_SHARP_));
}));
}));

(beicon.v2.operators.merge_map.cljs$core$IFn$_invoke$arity$2 = (function (f,concurrency){
return shadow.js.shim.module$rxjs.mergeMap((function (p1__44982_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__44982_SHARP_) : f.call(null,p1__44982_SHARP_));
}),concurrency);
}));

(beicon.v2.operators.merge_map.cljs$lang$maxFixedArity = 2);

beicon.v2.operators.switch_map = (function beicon$v2$operators$switch_map(f){
return shadow.js.shim.module$rxjs.switchMap((function (p1__44985_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__44985_SHARP_) : f.call(null,p1__44985_SHARP_));
}));
});
/**
 * Projects each element of an observable sequence to an observable
 *   sequence and concatenates the resulting observable sequences or
 *   Promises or array/iterable into one observable sequence.
 */
beicon.v2.operators.mapcat = (function beicon$v2$operators$mapcat(f){
return shadow.js.shim.module$rxjs.concatMap((function (p1__44987_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__44987_SHARP_) : f.call(null,p1__44987_SHARP_));
}));
});
/**
 * Indexed variant of `mapcat`
 */
beicon.v2.operators.mapcat_indexed = (function beicon$v2$operators$mapcat_indexed(f){
return shadow.js.shim.module$rxjs.concatMap((function (p1__44989_SHARP_,p2__44988_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p2__44988_SHARP_,p1__44989_SHARP_) : f.call(null,p2__44988_SHARP_,p1__44989_SHARP_));
}));
});
/**
 * Bypasses a specified number of elements in an
 *   observable sequence and then returns the remaining
 *   elements.
 */
beicon.v2.operators.skip = shadow.js.shim.module$rxjs.skip;
/**
 * Bypasses elements in an observable sequence as long
 *   as a specified condition is true and then returns the
 *   remaining elements.
 */
beicon.v2.operators.skip_while = (function beicon$v2$operators$skip_while(f){
return shadow.js.shim.module$rxjs.skipWhile((function (p1__44990_SHARP_){
return cljs.core.boolean$((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__44990_SHARP_) : f.call(null,p1__44990_SHARP_)));
}));
});
/**
 * Returns the values from the source observable sequence only after the
 *   other observable sequence produces a value.
 */
beicon.v2.operators.skip_until = (function beicon$v2$operators$skip_until(pob){
return shadow.js.shim.module$rxjs.skipUntil(pob);
});
/**
 * Skip a specified number of values before the completion of an observable.
 */
beicon.v2.operators.skip_last = (function beicon$v2$operators$skip_last(n){
return shadow.js.shim.module$rxjs.skipLast(n);
});
/**
 * Bypasses a specified number of elements in an observable sequence and
 *   then returns the remaining elements.
 */
beicon.v2.operators.take = shadow.js.shim.module$rxjs.take;
beicon.v2.operators.take_last = shadow.js.shim.module$rxjs.takeLast;
/**
 * Returns elements from an observable sequence as long as a specified
 *   predicate returns true.
 */
beicon.v2.operators.take_while = (function beicon$v2$operators$take_while(f){
return shadow.js.shim.module$rxjs.takeWhile((function (p1__44995_SHARP_){
return cljs.core.boolean$((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__44995_SHARP_) : f.call(null,p1__44995_SHARP_)));
}));
});
/**
 * Returns the values from the source observable sequence until the
 *   other observable sequence or Promise produces a value.
 */
beicon.v2.operators.take_until = shadow.js.shim.module$rxjs.takeUntil;
/**
 * Applies an accumulator function over an observable sequence,
 *   returning the result of the aggregation as a single element in the
 *   result sequence.
 */
beicon.v2.operators.reduce = (function beicon$v2$operators$reduce(var_args){
var G__45008 = arguments.length;
switch (G__45008) {
case 1:
return beicon.v2.operators.reduce.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return beicon.v2.operators.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.operators.reduce.cljs$core$IFn$_invoke$arity$1 = (function (f){
return shadow.js.shim.module$rxjs.reduce((function (p1__45003_SHARP_,p2__45004_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__45003_SHARP_,p2__45004_SHARP_) : f.call(null,p1__45003_SHARP_,p2__45004_SHARP_));
}));
}));

(beicon.v2.operators.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,seed){
return shadow.js.shim.module$rxjs.reduce((function (p1__45005_SHARP_,p2__45006_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__45005_SHARP_,p2__45006_SHARP_) : f.call(null,p1__45005_SHARP_,p2__45006_SHARP_));
}),seed);
}));

(beicon.v2.operators.reduce.cljs$lang$maxFixedArity = 2);

/**
 * Applies an accumulator function over an observable sequence and
 *   returns each intermediate result.  Same as reduce but with
 *   intermediate results
 */
beicon.v2.operators.scan = (function beicon$v2$operators$scan(var_args){
var G__45025 = arguments.length;
switch (G__45025) {
case 1:
return beicon.v2.operators.scan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return beicon.v2.operators.scan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.operators.scan.cljs$core$IFn$_invoke$arity$1 = (function (f){
return shadow.js.shim.module$rxjs.scan((function (p1__45019_SHARP_,p2__45020_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__45019_SHARP_,p2__45020_SHARP_) : f.call(null,p1__45019_SHARP_,p2__45020_SHARP_));
}));
}));

(beicon.v2.operators.scan.cljs$core$IFn$_invoke$arity$2 = (function (f,seed){
return shadow.js.shim.module$rxjs.scan((function (p1__45021_SHARP_,p2__45022_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__45021_SHARP_,p2__45022_SHARP_) : f.call(null,p1__45021_SHARP_,p2__45022_SHARP_));
}),seed);
}));

(beicon.v2.operators.scan.cljs$lang$maxFixedArity = 2);

/**
 * Applies an accumulator function over the source Observable where
 *   the accumulator function itself returns an Observable, then each
 *   intermediate Observable returned is merged into the output
 *   Observable.
 */
beicon.v2.operators.merge_scan = (function beicon$v2$operators$merge_scan(f,seed){
return shadow.js.shim.module$rxjs.mergeScan((function (p1__45029_SHARP_,p2__45030_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__45029_SHARP_,p2__45030_SHARP_) : f.call(null,p1__45029_SHARP_,p2__45030_SHARP_));
}),seed);
});
/**
 * Recursively projects each source value to an Observable
 *   which is merged in the output Observable.
 */
beicon.v2.operators.expand = (function beicon$v2$operators$expand(var_args){
var G__45034 = arguments.length;
switch (G__45034) {
case 1:
return beicon.v2.operators.expand.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return beicon.v2.operators.expand.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.operators.expand.cljs$core$IFn$_invoke$arity$1 = (function (f){
return shadow.js.shim.module$rxjs.expand((function (p1__45031_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__45031_SHARP_) : f.call(null,p1__45031_SHARP_));
}));
}));

(beicon.v2.operators.expand.cljs$core$IFn$_invoke$arity$2 = (function (f,c){
return shadow.js.shim.module$rxjs.expand((function (p1__45032_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__45032_SHARP_) : f.call(null,p1__45032_SHARP_));
}),c);
}));

(beicon.v2.operators.expand.cljs$lang$maxFixedArity = 2);

/**
 * Merges the specified observable sequences into one observable
 *   sequence by using the selector function only when the source
 *   observable sequence (the instance) produces an element.
 * 
 *   (operator)
 */
beicon.v2.operators.with_latest = function withLatestFrom(...args) {
  const resultSelector = (typeof args[0] === 'function') ? args.shift() : undefined;
  if (resultSelector === undefined) {
    return shadow.js.shim.module$rxjs.withLatestFrom(...args);
  } else {
    return shadow.js.shim.module$rxjs.withLatestFrom(...args, resultSelector);
  }
};
/**
 * Combines multiple Observables to create an Observable whose values
 *   are calculated from the latest values of each of its input
 *   Observables (operator).
 */
beicon.v2.operators.combine_latest = shadow.js.shim.module$rxjs.combineLatestWith;
/**
 * Continues an observable sequence that is terminated
 *   by an exception with the next observable sequence.
 */
beicon.v2.operators.catch$ = (function beicon$v2$operators$catch(handler){
return shadow.js.shim.module$rxjs.catchError((function (error,source){
var value = (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(error,source) : handler.call(null,error,source));
if((value instanceof shadow.js.shim.module$rxjs.Observable)){
return value;
} else {
return shadow.js.shim.module$rxjs.EMPTY;
}
}));
});
/**
 * Invokes an action for each element in the
 *   observable sequence.
 */
beicon.v2.operators.tap = (function beicon$v2$operators$tap(var_args){
var G__45052 = arguments.length;
switch (G__45052) {
case 1:
return beicon.v2.operators.tap.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return beicon.v2.operators.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return beicon.v2.operators.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.operators.tap.cljs$core$IFn$_invoke$arity$1 = (function (f){
if(((beicon.v2.operators.plain_object_QMARK_(f)) || (cljs.core.fn_QMARK_(f)))){
return shadow.js.shim.module$rxjs.tap(f);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid argiments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),f], null));
}
}));

(beicon.v2.operators.tap.cljs$core$IFn$_invoke$arity$2 = (function (f,e){
return shadow.js.shim.module$rxjs.tap(({"next": f, "error": e, "complete": shadow.js.shim.module$rxjs.noop}));
}));

(beicon.v2.operators.tap.cljs$core$IFn$_invoke$arity$3 = (function (f,e,c){
return shadow.js.shim.module$rxjs.tap(({"next": f, "error": e, "complete": c}));
}));

(beicon.v2.operators.tap.cljs$lang$maxFixedArity = 3);

/**
 * Returns an observable sequence that emits only the first item emitted
 *   by the source Observable during sequential time windows of a
 *   specified duration.
 * 
 *   (operator only)
 */
beicon.v2.operators.throttle = (function beicon$v2$operators$throttle(var_args){
var G__45062 = arguments.length;
switch (G__45062) {
case 1:
return beicon.v2.operators.throttle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return beicon.v2.operators.throttle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.operators.throttle.cljs$core$IFn$_invoke$arity$1 = (function (ms){
return shadow.js.shim.module$rxjs.throttleTime(ms);
}));

(beicon.v2.operators.throttle.cljs$core$IFn$_invoke$arity$2 = (function (ms,config){
if(beicon.v2.operators.plain_object_QMARK_(config)){
return shadow.js.shim.module$rxjs.throttleTime(ms,config);
} else {
if(cljs.core.map_QMARK_(config)){
return shadow.js.shim.module$rxjs.throttleTime(ms,({"leading": new cljs.core.Keyword(null,"leading","leading",-1239035032).cljs$core$IFn$_invoke$arity$2(config,true), "trailing": new cljs.core.Keyword(null,"trailing","trailing",-1987290406).cljs$core$IFn$_invoke$arity$2(config,false)}));
} else {
return shadow.js.shim.module$rxjs.throttleTime(ms);

}
}
}));

(beicon.v2.operators.throttle.cljs$lang$maxFixedArity = 2);

/**
 * Emits an item from the source Observable after a
 *   particular timespan has passed without the Observable
 *   omitting any other items.
 */
beicon.v2.operators.debounce = shadow.js.shim.module$rxjs.debounceTime;
/**
 * Samples the observable sequence at each interval.
 */
beicon.v2.operators.sample = shadow.js.shim.module$rxjs.sampleTime;
/**
 * Samples the observable sequence at each interval.
 */
beicon.v2.operators.sample_when = shadow.js.shim.module$rxjs.sample;
/**
 * Ignores all elements in an observable sequence leaving only the
 *   termination messages.
 */
beicon.v2.operators.ignore = shadow.js.shim.module$rxjs.ignoreElements;
/**
 * Returns an Observable that mirrors the source Observable, but will
 *   call a specified function when the source terminates on complete or
 *   error.
 */
beicon.v2.operators.finalize = shadow.js.shim.module$rxjs.finalize;
/**
 * Returns an observable sequence that contains only
 *   distinct contiguous elements.
 */
beicon.v2.operators.distinct_contiguous = (function beicon$v2$operators$distinct_contiguous(var_args){
var G__45075 = arguments.length;
switch (G__45075) {
case 0:
return beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.js.shim.module$rxjs.distinctUntilChanged();
}));

(beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$1 = (function (comparator_fn){
return shadow.js.shim.module$rxjs.distinctUntilChanged((function (p1__45065_SHARP_,p2__45066_SHARP_){
return (comparator_fn.cljs$core$IFn$_invoke$arity$2 ? comparator_fn.cljs$core$IFn$_invoke$arity$2(p1__45065_SHARP_,p2__45066_SHARP_) : comparator_fn.call(null,p1__45065_SHARP_,p2__45066_SHARP_));
}));
}));

(beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$2 = (function (comparator_fn,key_fn){
return shadow.js.shim.module$rxjs.distinctUntilChanged((function (p1__45067_SHARP_,p2__45068_SHARP_){
return (comparator_fn.cljs$core$IFn$_invoke$arity$2 ? comparator_fn.cljs$core$IFn$_invoke$arity$2(p1__45067_SHARP_,p2__45068_SHARP_) : comparator_fn.call(null,p1__45067_SHARP_,p2__45068_SHARP_));
}),(function (p1__45069_SHARP_){
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(p1__45069_SHARP_) : key_fn.call(null,p1__45069_SHARP_));
}));
}));

(beicon.v2.operators.distinct_contiguous.cljs$lang$maxFixedArity = 2);

/**
 * Returns an observable sequence that contains only distinct
 *   elements.
 * 
 *   Usage of this operator should be considered carefully due to the
 *   maintenance of an internal lookup structure which can grow large.
 */
beicon.v2.operators.distinct = (function beicon$v2$operators$distinct(var_args){
var G__45086 = arguments.length;
switch (G__45086) {
case 0:
return beicon.v2.operators.distinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return beicon.v2.operators.distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return beicon.v2.operators.distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.operators.distinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.js.shim.module$rxjs.distinct();
}));

(beicon.v2.operators.distinct.cljs$core$IFn$_invoke$arity$1 = (function (comparator_fn){
return shadow.js.shim.module$rxjs.distinct((function (p1__45080_SHARP_,p2__45081_SHARP_){
return (comparator_fn.cljs$core$IFn$_invoke$arity$2 ? comparator_fn.cljs$core$IFn$_invoke$arity$2(p1__45080_SHARP_,p2__45081_SHARP_) : comparator_fn.call(null,p1__45080_SHARP_,p2__45081_SHARP_));
}));
}));

(beicon.v2.operators.distinct.cljs$core$IFn$_invoke$arity$2 = (function (comparator_fn,key_fn){
return shadow.js.shim.module$rxjs.distinct((function (p1__45082_SHARP_,p2__45083_SHARP_){
return (comparator_fn.cljs$core$IFn$_invoke$arity$2 ? comparator_fn.cljs$core$IFn$_invoke$arity$2(p1__45082_SHARP_,p2__45083_SHARP_) : comparator_fn.call(null,p1__45082_SHARP_,p2__45083_SHARP_));
}),(function (p1__45084_SHARP_){
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(p1__45084_SHARP_) : key_fn.call(null,p1__45084_SHARP_));
}));
}));

(beicon.v2.operators.distinct.cljs$lang$maxFixedArity = 2);

/**
 * Projects each element of an observable sequence into zero
 *   or more buffers which are produced based on element count
 *   information.
 */
beicon.v2.operators.buffer = shadow.js.shim.module$rxjs.bufferCount;
/**
 * Buffers the source Observable values for a specific time period.
 *   (operator only)
 */
beicon.v2.operators.buffer_time = shadow.js.shim.module$rxjs.bufferTime;
/**
 * Buffers the source Observable values until notifier emits.
 */
beicon.v2.operators.buffer_until = shadow.js.shim.module$rxjs.buffer;
/**
 * Given an optional number of retries and an observable,
 *   repeats the source observable the specified number of
 *   times or until it terminates. If no number of retries
 *   is given, it will be retried indefinitely.
 */
beicon.v2.operators.retry = shadow.js.shim.module$rxjs.retry;
beicon.v2.operators.transform = (function beicon$v2$operators$transform(xform){
return (function (source){
return (new shadow.js.shim.module$rxjs.Observable((function (subs){
var xsubs = (function (){var G__45091 = (function() {
var G__45191 = null;
var G__45191__1 = (function (r){
subs.complete();

return r;
});
var G__45191__2 = (function (_,input){
subs.next(input);

return input;
});
G__45191 = function(_,input){
switch(arguments.length){
case 1:
return G__45191__1.call(this,_);
case 2:
return G__45191__2.call(this,_,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45191.cljs$core$IFn$_invoke$arity$1 = G__45191__1;
G__45191.cljs$core$IFn$_invoke$arity$2 = G__45191__2;
return G__45191;
})()
;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__45091) : xform.call(null,G__45091));
})();
var obs = ({"next": (function (input){
var v = (xsubs.cljs$core$IFn$_invoke$arity$2 ? xsubs.cljs$core$IFn$_invoke$arity$2(null,input) : xsubs.call(null,null,input));
if(cljs.core.reduced_QMARK_(v)){
var G__45108 = cljs.core.deref(v);
return (xsubs.cljs$core$IFn$_invoke$arity$1 ? xsubs.cljs$core$IFn$_invoke$arity$1(G__45108) : xsubs.call(null,G__45108));
} else {
return null;
}
}), "error": (function (cause){
return subs.error(cause);
}), "complete": (function (){
(xsubs.cljs$core$IFn$_invoke$arity$1 ? xsubs.cljs$core$IFn$_invoke$arity$1(null) : xsubs.call(null,null));

return subs.complete();
})});
var sub = source.subscribe(obs);
return (function (){
return subs.unsubscribe();
});
})));
});
});
/**
 * Returns the source observable sequence or the other
 *   observable sequence if dueTime elapses.
 */
beicon.v2.operators.timeout = (function beicon$v2$operators$timeout(var_args){
var G__45145 = arguments.length;
switch (G__45145) {
case 1:
return beicon.v2.operators.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return beicon.v2.operators.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.operators.timeout.cljs$core$IFn$_invoke$arity$1 = (function (ms){
if(((typeof ms === 'number') || ((((ms instanceof Data)) || (beicon.v2.operators.plain_object_QMARK_(ms)))))){
return shadow.js.shim.module$rxjs.timeout(ms);
} else {
if(cljs.core.map_QMARK_(ms)){
return shadow.js.shim.module$rxjs.timeout(({"first": cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.Keyword(null,"first","first",-644103046)), "each": cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.Keyword(null,"each","each",940016129)), "with": cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.Keyword(null,"with","with",-1536296876))}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid arguments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ms","ms",-1152709733),ms], null));

}
}
}));

(beicon.v2.operators.timeout.cljs$core$IFn$_invoke$arity$2 = (function (ms,with$){
return shadow.js.shim.module$rxjs.timeout(({"each": ms, "with": (((with$ instanceof shadow.js.shim.module$rxjs.Observable))?(function (){
return with$;
}):with$)}));
}));

(beicon.v2.operators.timeout.cljs$lang$maxFixedArity = 2);

/**
 * Time shifts the observable sequence by dueTime. The relative
 *   time intervals between the values are preserved.
 */
beicon.v2.operators.delay = shadow.js.shim.module$rxjs.delay;
/**
 * Time shifts the observable sequence based on a subscription
 *   delay and a delay selector function for each element.
 */
beicon.v2.operators.delay_when = shadow.js.shim.module$rxjs.delayWhen;
beicon.v2.operators.pipe = function pipeWith(...fns) { const input = fns.pop(); return fns.reduce((prev, fn) => fn(prev), input); };
beicon.v2.operators.comp = function pipeComp(...fns) { return (source) => fns.reduce((prev, fn) => fn(prev), source); };
/**
 * Time shifts at least `ms` milisseconds.
 */
beicon.v2.operators.delay_at_least = (function beicon$v2$operators$delay_at_least(ms){
return beicon.v2.operators.comp(beicon.v2.operators.combine_latest(shadow.js.shim.module$rxjs.timer(ms)),beicon.v2.operators.map(cljs.core.first));
});
beicon.v2.operators.observe_on = (function beicon$v2$operators$observe_on(var_args){
var G__45149 = arguments.length;
switch (G__45149) {
case 1:
return beicon.v2.operators.observe_on.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return beicon.v2.operators.observe_on.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.operators.observe_on.cljs$core$IFn$_invoke$arity$1 = (function (sch){
if((sch instanceof shadow.js.shim.module$rxjs.Scheduler)){
return shadow.js.shim.module$rxjs.observeOn(sch);
} else {
if((sch instanceof cljs.core.Keyword)){
return beicon.v2.operators.observe_on.cljs$core$IFn$_invoke$arity$1(beicon.v2.operators.scheduler(sch));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid arguments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sch","sch",-877249434),sch], null));

}
}
}));

(beicon.v2.operators.observe_on.cljs$core$IFn$_invoke$arity$2 = (function (sch,delay){
if((sch instanceof shadow.js.shim.module$rxjs.Scheduler)){
return shadow.js.shim.module$rxjs.observeOn(sch,delay);
} else {
if((sch instanceof cljs.core.Keyword)){
return beicon.v2.operators.observe_on.cljs$core$IFn$_invoke$arity$2(beicon.v2.operators.scheduler(sch),delay);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid arguments",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sch","sch",-877249434),sch,new cljs.core.Keyword(null,"delay","delay",-574225219),delay], null));

}
}
}));

(beicon.v2.operators.observe_on.cljs$lang$maxFixedArity = 2);

beicon.v2.operators.subscribe_on = (function beicon$v2$operators$subscribe_on(var_args){
var G__45153 = arguments.length;
switch (G__45153) {
case 1:
return beicon.v2.operators.subscribe_on.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return beicon.v2.operators.subscribe_on.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.operators.subscribe_on.cljs$core$IFn$_invoke$arity$1 = (function (sch){
if((sch instanceof shadow.js.shim.module$rxjs.Scheduler)){
return shadow.js.shim.module$rxjs.subscribeOn(sch);
} else {
if((sch instanceof cljs.core.Keyword)){
return beicon.v2.operators.subscribe_on.cljs$core$IFn$_invoke$arity$1(beicon.v2.operators.scheduler(sch));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid arguments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sch","sch",-877249434),sch], null));

}
}
}));

(beicon.v2.operators.subscribe_on.cljs$core$IFn$_invoke$arity$2 = (function (sch,delay){
if((sch instanceof shadow.js.shim.module$rxjs.Scheduler)){
return shadow.js.shim.module$rxjs.subscribeOn(sch,delay);
} else {
if((sch instanceof cljs.core.Keyword)){
return beicon.v2.operators.subscribe_on.cljs$core$IFn$_invoke$arity$2(beicon.v2.operators.scheduler(sch),delay);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid arguments",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sch","sch",-877249434),sch,new cljs.core.Keyword(null,"delay","delay",-574225219),delay], null));

}
}
}));

(beicon.v2.operators.subscribe_on.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=beicon.v2.operators.js.map
