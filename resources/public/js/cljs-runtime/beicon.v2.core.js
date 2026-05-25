import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$rxjs.js";
import "./beicon.v2.operators.js";
goog.provide('beicon.v2.core');
beicon.v2.core.Observable = shadow.js.shim.module$rxjs.Observable;
beicon.v2.core.Subject = shadow.js.shim.module$rxjs.Subject;
beicon.v2.core.BehaviorSubject = shadow.js.shim.module$rxjs.BehaviorSubject;
beicon.v2.core.Subscriber = shadow.js.shim.module$rxjs.Subscriber;
beicon.v2.core.Disposable = shadow.js.shim.module$rxjs.Subscription;
beicon.v2.core.Scheduler = shadow.js.shim.module$rxjs.Scheduler;
beicon.v2.core.internal_call = (function beicon$v2$core$internal_call(f,source){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(source) : f.call(null,source));
});
beicon.v2.core.noop = shadow.js.shim.module$rxjs.noop;
beicon.v2.core.comp = beicon.v2.operators.comp;
beicon.v2.core.pipe = beicon.v2.operators.pipe;
/**
 * Pushes the given value to the bus stream.
 */
beicon.v2.core.push_BANG_ = (function beicon$v2$core$push_BANG_(b,v){
return b.next(v);
});
/**
 * Pushes the given error to the bus stream.
 */
beicon.v2.core.error_BANG_ = (function beicon$v2$core$error_BANG_(b,e){
return b.error(e);
});
/**
 * Ends the given bus stream.
 */
beicon.v2.core.end_BANG_ = (function beicon$v2$core$end_BANG_(b){
return b.complete();
});
/**
 * Return true if `ob` is a instance
 *   of Rx.Observable.
 */
beicon.v2.core.observable_QMARK_ = (function beicon$v2$core$observable_QMARK_(ob){
return (ob instanceof beicon.v2.core.Observable);
});
/**
 * Check if the provided object is disposable (jvm) or subscription (js).
 */
beicon.v2.core.disposable_QMARK_ = (function beicon$v2$core$disposable_QMARK_(v){
return (v instanceof beicon.v2.core.Disposable);
});
/**
 * Check if the provided value is Scheduler instance.
 */
beicon.v2.core.scheduler_QMARK_ = (function beicon$v2$core$scheduler_QMARK_(v){
return (v instanceof beicon.v2.core.Scheduler);
});
/**
 * Check if the provided value is Subject instance.
 */
beicon.v2.core.subject_QMARK_ = (function beicon$v2$core$subject_QMARK_(b){
return (b instanceof beicon.v2.core.Subject);
});
beicon.v2.core.subscriber_QMARK_ = (function beicon$v2$core$subscriber_QMARK_(o){
return (o instanceof beicon.v2.core.Subscriber);
});
/**
 * Creates an observable sequence from a specified subscribe method
 *   implementation.
 */
beicon.v2.core.create = (function beicon$v2$core$create(sf){
if(cljs.core.fn_QMARK_(sf)){
} else {
throw (new Error(["Assert failed: ","expected a plain function","\n","(fn? sf)"].join('')));
}

return (new beicon.v2.core.Observable((function (subs){
try{return (sf.cljs$core$IFn$_invoke$arity$1 ? sf.cljs$core$IFn$_invoke$arity$1(subs) : sf.call(null,subs));
}catch (e45314){var e = e45314;
return subs.error(e);
}})));
});
/**
 * Subject that, once an Observer has subscribed, emits all
 *   subsequently observed items to the subscriber.
 */
beicon.v2.core.subject = (function beicon$v2$core$subject(){
return (new beicon.v2.core.Subject());
});
/**
 * Bus that emits the most recent item it has observed and
 *   all subsequent observed items to each subscribed Observer.
 */
beicon.v2.core.behavior_subject = (function beicon$v2$core$behavior_subject(v){
return (new beicon.v2.core.BehaviorSubject(v));
});
/**
 * Generates an observable sequence that repeats the
 *   given element.
 */
beicon.v2.core.range = (function beicon$v2$core$range(var_args){
var G__45317 = arguments.length;
switch (G__45317) {
case 1:
return beicon.v2.core.range.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return beicon.v2.core.range.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.core.range.cljs$core$IFn$_invoke$arity$1 = (function (b){
return beicon.v2.core.range.cljs$core$IFn$_invoke$arity$2((0),b);
}));

(beicon.v2.core.range.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return shadow.js.shim.module$rxjs.range(a,b);
}));

(beicon.v2.core.range.cljs$lang$maxFixedArity = 2);

/**
 * Creates an observable from js arrays, clojurescript collections, and
 *   promise instance.
 */
beicon.v2.core.from = (function beicon$v2$core$from(v){
if((v == null)){
return shadow.js.shim.module$rxjs.EMPTY;
} else {
return shadow.js.shim.module$rxjs.from(v);
}
});
beicon.v2.core.from_atom = (function beicon$v2$core$from_atom(var_args){
var G__45323 = arguments.length;
switch (G__45323) {
case 1:
return beicon.v2.core.from_atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return beicon.v2.core.from_atom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.core.from_atom.cljs$core$IFn$_invoke$arity$1 = (function (atm){
return beicon.v2.core.from_atom.cljs$core$IFn$_invoke$arity$2(atm,null);
}));

(beicon.v2.core.from_atom.cljs$core$IFn$_invoke$arity$2 = (function (atm,p__45333){
var map__45334 = p__45333;
var map__45334__$1 = cljs.core.__destructure_map(map__45334);
var emit_current_value_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45334__$1,new cljs.core.Keyword(null,"emit-current-value?","emit-current-value?",56289147),false);
return beicon.v2.core.create((function (subs){
var key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("beicon"));
if(cljs.core.truth_(emit_current_value_QMARK_)){
subs.next(cljs.core.deref(atm));
} else {
}

cljs.core.add_watch(atm,key,(function (_,___$1,___$2,val){
return subs.next(val);
}));

return (function (){
return cljs.core.remove_watch(atm,key);
});
}));
}));

(beicon.v2.core.from_atom.cljs$lang$maxFixedArity = 2);

/**
 * Creates an Observable by attaching an event listener to an event target
 */
beicon.v2.core.from_event = (function beicon$v2$core$from_event(et,ev){
return shadow.js.shim.module$rxjs.fromEvent(et,ev);
});
/**
 * Returns an observable sequence that produces a value after
 *   `ms` has elapsed and then after each period.
 */
beicon.v2.core.timer = shadow.js.shim.module$rxjs.timer;
/**
 * Returns an observable sequence that produces a
 *   value after each period.
 */
beicon.v2.core.interval = (function beicon$v2$core$interval(ms){
return shadow.js.shim.module$rxjs.interval(ms);
});
/**
 * Returns an observable sequence that is already
 *   in end state.
 */
beicon.v2.core.empty = (function beicon$v2$core$empty(){
return shadow.js.shim.module$rxjs.EMPTY;
});
/**
 * Returns an exceptionally terminated observable with provided cause.
 */
beicon.v2.core.throw$ = (function beicon$v2$core$throw(e){
if(cljs.core.fn_QMARK_(e)){
return shadow.js.shim.module$rxjs.throwError(e);
} else {
return shadow.js.shim.module$rxjs.throwError((function (){
return e;
}));
}
});
/**
 * Same as `throw`
 */
beicon.v2.core.error = (function beicon$v2$core$error(e){
throw e;
});
/**
 * Runs all observable sequences in parallel and collect their last
 *   elements.
 */
beicon.v2.core.fjoin = function forkJoin(...args) {
  const resultSelector = (typeof args[0] === 'function') ? args.shift() : undefined;
  if (resultSelector === undefined) {
    return shadow.js.shim.module$rxjs.forkJoin(...args);
  } else {
    return shadow.js.shim.module$rxjs.forkJoin(...args, resultSelector);
  }
};
/**
 * Converts arguments to an observable sequence
 */
beicon.v2.core.of = shadow.js.shim.module$rxjs.of;
/**
 * Create an observable that surfaces any of the given
 *   sequences, whichever reacted first.
 */
beicon.v2.core.race = shadow.js.shim.module$rxjs.race;
/**
 * Merges the specified observable sequences or Promises (cljs) into one
 *   observable sequence.
 */
beicon.v2.core.zip = function zip(...sources) {
  const projectFunction = (typeof sources[0] === 'function') ? sources.shift() : undefined;

  if (projectFunction === undefined) {
    return shadow.js.shim.module$rxjs.zip(...sources);
  } else {
    return shadow.js.shim.module$rxjs.zip(...sources, projectFunction);
  }
};
/**
 * Concatenates all of the specified observable
 *   sequences, as long as the previous observable
 *   sequence terminated successfully.
 */
beicon.v2.core.concat = function(...args) { args = args.filter(cljs.core.some_QMARK_); return shadow.js.shim.module$rxjs.concat(...args); };
/**
 * Merges all the observable sequences and Promises
 *   into a single observable sequence.
 */
beicon.v2.core.merge = function(...args) {
  const sources = args.filter(cljs.core.some_QMARK_);
  return !sources.length ? shadow.js.shim.module$rxjs.EMPTY : sources.length === 1 ? shadow.js.shim.module$rxjs.from(sources[0]) : shadow.js.shim.module$rxjs.mergeAll(Infinity)(shadow.js.shim.module$rxjs.from(sources))
};
/**
 * Combines multiple Observables to create an Observable whose values
 *   are calculated from the latest values of each of its input
 *   Observables (constructor).
 */
beicon.v2.core.combine_latest = function(...sources) {
  const projectFunction = (typeof sources[0] === 'function') ? sources.shift() : undefined;
  return shadow.js.shim.module$rxjs.combineLatest(sources, projectFunction);
};
/**
 * Comboines multiple Observables to create an Observable whose values
 *   are calculated from the latest values of each of its input
 *   Observables (constructor).
 * 
 *   A variant of `conbine-latest*` that accepts an array or sequential
 */
beicon.v2.core.combine_latest_all = (function beicon$v2$core$combine_latest_all(obs){
if(cljs.core.array_QMARK_(obs)){
return shadow.js.shim.module$rxjs.combineLatest(obs);
} else {
if(cljs.core.sequential_QMARK_(obs)){
return shadow.js.shim.module$rxjs.combineLatest(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(obs));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unexpected arguments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obs","obs",-664011444),obs], null));

}
}
});
/**
 * Get the scheduler instance by type. The posible types are: `:asap`,
 *   `:async`, `:queue`.  Old `:trampoline` type is renamed as `:queue`
 *   and is deprecated.
 */
beicon.v2.core.scheduler = (function beicon$v2$core$scheduler(type){
return beicon.v2.operators.scheduler(type);
});
/**
 * Create a connectable (hot) observable
 *   from other observable.
 */
beicon.v2.core.publish_BANG_ = (function beicon$v2$core$publish_BANG_(ob){
return ob.publish();
});
/**
 * Connect the connectable observable.
 */
beicon.v2.core.connect_BANG_ = (function beicon$v2$core$connect_BANG_(ob){
return ob.connect();
});
/**
 * Coerce a object to an observable instance.
 */
beicon.v2.core.to_observable = (function beicon$v2$core$to_observable(ob){
if(beicon.v2.core.subject_QMARK_(ob)){
} else {
throw (new Error(["Assert failed: ","`ob` should be a Subject instance","\n","(subject? ob)"].join('')));
}

return ob.asObservable();
});

/**
 * @interface
 */
beicon.v2.core.IDisposable = function(){};

var beicon$v2$core$IDisposable$_dispose$dyn_45526 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (beicon.v2.core._dispose[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (beicon.v2.core._dispose["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IDisposable.-dispose",_);
}
}
});
/**
 * dispose resources.
 */
beicon.v2.core._dispose = (function beicon$v2$core$_dispose(_){
if((((!((_ == null)))) && ((!((_.beicon$v2$core$IDisposable$_dispose$arity$1 == null)))))){
return _.beicon$v2$core$IDisposable$_dispose$arity$1(_);
} else {
return beicon$v2$core$IDisposable$_dispose$dyn_45526(_);
}
});

/**
 * Dispose resources acquired by the subscription.
 */
beicon.v2.core.dispose_BANG_ = (function beicon$v2$core$dispose_BANG_(v){
return beicon.v2.core._dispose(v);
});
(beicon.v2.core.Subscriber.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL);

(beicon.v2.core.Subscriber.prototype.call = (function (unused__14253__auto__){
var self__ = this;
var G__45344 = (arguments.length - (1));
switch (G__45344) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(beicon.v2.core.Subscriber.prototype.apply = (function (self__,args45343){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45343)));
}));

(beicon.v2.core.Subscriber.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return this$.unsubscribe();
}));

(beicon.v2.core.Subscriber.prototype.beicon$v2$core$IDisposable$ = cljs.core.PROTOCOL_SENTINEL);

(beicon.v2.core.Subscriber.prototype.beicon$v2$core$IDisposable$_dispose$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.unsubscribe();
}));
(beicon.v2.core.BehaviorSubject.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL);

(beicon.v2.core.BehaviorSubject.prototype.cljs$core$IDeref$_deref$arity$1 = (function (self){
var self__$1 = this;
return self__$1.getValue();
}));
/**
 * Subscribes an observer to the observable sequence.
 */
beicon.v2.core.subscribe = (function beicon$v2$core$subscribe(var_args){
var G__45346 = arguments.length;
switch (G__45346) {
case 2:
return beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (ob,nf){
if(((beicon.v2.operators.plain_object_QMARK_(nf)) || (beicon.v2.core.subject_QMARK_(nf)))){
return ob.subscribe(nf);
} else {
if(cljs.core.map_QMARK_(nf)){
return beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$4(ob,cljs.core.get.cljs$core$IFn$_invoke$arity$3(nf,new cljs.core.Keyword(null,"next","next",-117701485),beicon.v2.core.noop),cljs.core.get.cljs$core$IFn$_invoke$arity$3(nf,new cljs.core.Keyword(null,"error","error",-978969032),beicon.v2.core.noop),cljs.core.get.cljs$core$IFn$_invoke$arity$3(nf,new cljs.core.Keyword(null,"complete","complete",-500388775),beicon.v2.core.noop));
} else {
return ob.subscribe(({"next": nf}));

}
}
}));

(beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$3 = (function (ob,next_fn,error_fn){
var observer = ({"next": next_fn, "error": error_fn});
return ob.subscribe(observer);
}));

(beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$4 = (function (ob,next_fn,error_fn,complete_fn){
var observer = ({"next": next_fn, "error": error_fn, "complete": complete_fn});
return ob.subscribe(observer);
}));

(beicon.v2.core.subscribe.cljs$lang$maxFixedArity = 4);

/**
 * Subscribes an observer to the observable sequence.
 */
beicon.v2.core.sub_BANG_ = (function beicon$v2$core$sub_BANG_(var_args){
var G__45350 = arguments.length;
switch (G__45350) {
case 2:
return beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ob,nf){
return beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$2(ob,nf);
}));

(beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ob,next_fn,error_fn){
return beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$3(ob,next_fn,error_fn);
}));

(beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (ob,next_fn,error_fn,complete_fn){
return beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$4(ob,next_fn,error_fn,complete_fn);
}));

(beicon.v2.core.sub_BANG_.cljs$lang$maxFixedArity = 4);

beicon.v2.core.on_error = (function beicon$v2$core$on_error(ob,on_error){
return beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$3(ob,beicon.v2.core.noop,on_error);
});
beicon.v2.core.on_end = (function beicon$v2$core$on_end(ob,on_complete){
return beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$4(ob,beicon.v2.core.noop,beicon.v2.core.noop,on_complete);
});
/**
 * A specialized version of `subscribe` with inverted arguments.
 */
beicon.v2.core.subs_BANG_ = (function beicon$v2$core$subs_BANG_(var_args){
var G__45352 = arguments.length;
switch (G__45352) {
case 2:
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (nf,ob){
return beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$2(ob,nf);
}));

(beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (nf,ef,ob){
return beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$3(ob,nf,ef);
}));

(beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (nf,ef,cf,ob){
return beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$4(ob,nf,ef,cf);
}));

(beicon.v2.core.subs_BANG_.cljs$lang$maxFixedArity = 4);

beicon.v2.core.disposable_atom = (function beicon$v2$core$disposable_atom(ref,disposable){
var x45357 = ref;
(x45357.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL);

(x45357.call = (function (unused__14253__auto__){
var self__ = this;
var G__45359 = (arguments.length - (1));
switch (G__45359) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(x45357.apply = (function (self__,args45358){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45358)));
}));

(x45357.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return beicon.v2.core._dispose(this$);
}));

(x45357.beicon$v2$core$IDisposable$ = cljs.core.PROTOCOL_SENTINEL);

(x45357.beicon$v2$core$IDisposable$_dispose$arity$1 = (function (_){
var ___$1 = this;
return disposable.unsubscribe();
}));

return x45357;
});
/**
 * Materialize the observable sequence into an atom.
 */
beicon.v2.core.to_atom = (function beicon$v2$core$to_atom(var_args){
var G__45365 = arguments.length;
switch (G__45365) {
case 1:
return beicon.v2.core.to_atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return beicon.v2.core.to_atom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return beicon.v2.core.to_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.core.to_atom.cljs$core$IFn$_invoke$arity$1 = (function (ob){
var a = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return beicon.v2.core.to_atom.cljs$core$IFn$_invoke$arity$2(ob,a);
}));

(beicon.v2.core.to_atom.cljs$core$IFn$_invoke$arity$2 = (function (ob,a){
var disposable = beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$2(ob,(function (p1__45360_SHARP_){
return cljs.core.reset_BANG_(a,p1__45360_SHARP_);
}));
return beicon.v2.core.disposable_atom(a,disposable);
}));

(beicon.v2.core.to_atom.cljs$core$IFn$_invoke$arity$3 = (function (ob,a,f){
var disposable = beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$2(ob,(function (p1__45361_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,f,p1__45361_SHARP_);
}));
return beicon.v2.core.disposable_atom(a,disposable);
}));

(beicon.v2.core.to_atom.cljs$lang$maxFixedArity = 3);

/**
 * Returns an observable sequence that shares a single
 *   subscription to the underlying sequence.
 */
beicon.v2.core.share = (function beicon$v2$core$share(ob){
return beicon.v2.operators.pipe(beicon.v2.operators.share(),ob);
});
/**
 * Emits a given value if the source Observable completes without
 *   emitting any next value, otherwise mirrors the source Observable.
 */
beicon.v2.core.if_empty = (function beicon$v2$core$if_empty(default$,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.if_empty(default$),ob);
});
/**
 * Merges an observable sequence of observable sequences into an
 *   observable sequence.
 */
beicon.v2.core.merge_all = (function beicon$v2$core$merge_all(var_args){
var G__45369 = arguments.length;
switch (G__45369) {
case 1:
return beicon.v2.core.merge_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return beicon.v2.core.merge_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.core.merge_all.cljs$core$IFn$_invoke$arity$1 = (function (ob){
return beicon.v2.operators.pipe(beicon.v2.operators.merge_all(),ob);
}));

(beicon.v2.core.merge_all.cljs$core$IFn$_invoke$arity$2 = (function (concurrency,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.merge_all(concurrency),ob);
}));

(beicon.v2.core.merge_all.cljs$lang$maxFixedArity = 2);

/**
 * Filters the elements of an observable sequence
 *   based on a predicate.
 */
beicon.v2.core.filter = (function beicon$v2$core$filter(f,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.filter(f),ob);
});
/**
 * Apply a function to each element of an observable
 *   sequence.
 */
beicon.v2.core.map = (function beicon$v2$core$map(f,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.map(f),ob);
});
/**
 * Same as `map` but also projects an index.
 */
beicon.v2.core.map_indexed = (function beicon$v2$core$map_indexed(f,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.map_indexed.cljs$core$IFn$_invoke$arity$1(f),ob);
});
/**
 * Projects each element of an observable sequence to an observable
 *   sequence and merges the resulting observable sequences or Promises
 *   or array/iterable into one observable sequence.
 * 
 *   In other languages is called: flatMap or mergeMap.
 */
beicon.v2.core.merge_map = (function beicon$v2$core$merge_map(f,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.merge_map.cljs$core$IFn$_invoke$arity$1(f),ob);
});
beicon.v2.core.switch_map = (function beicon$v2$core$switch_map(f,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.switch_map(f),ob);
});
/**
 * Projects each element of an observable sequence to an observable
 *   sequence and concatenates the resulting observable sequences or
 *   Promises or array/iterable into one observable sequence.
 */
beicon.v2.core.mapcat = (function beicon$v2$core$mapcat(f,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.mapcat(f),ob);
});
beicon.v2.core.concat_all = (function beicon$v2$core$concat_all(ob){
return beicon.v2.operators.pipe(beicon.v2.operators.merge_all((1)),ob);
});
/**
 * Bypasses a specified number of elements in an
 *   observable sequence and then returns the remaining
 *   elements.
 */
beicon.v2.core.skip = (function beicon$v2$core$skip(n,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.skip(n),ob);
});
/**
 * Bypasses elements in an observable sequence as long
 *   as a specified condition is true and then returns the
 *   remaining elements.
 */
beicon.v2.core.skip_while = (function beicon$v2$core$skip_while(f,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.skip_while(f),ob);
});
/**
 * Returns the values from the source observable sequence only after the
 *   other observable sequence produces a value.
 */
beicon.v2.core.skip_until = (function beicon$v2$core$skip_until(pob,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.skip_until(pob),ob);
});
/**
 * Skip a specified number of values before the completion of an observable.
 */
beicon.v2.core.skip_last = (function beicon$v2$core$skip_last(n,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.skip_last(n),ob);
});
/**
 * Bypasses a specified number of elements in an observable sequence and
 *   then returns the remaining elements.
 */
beicon.v2.core.take = (function beicon$v2$core$take(n,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.take(n),ob);
});
beicon.v2.core.take_last = (function beicon$v2$core$take_last(n,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.take_last(n),ob);
});
/**
 * Returns elements from an observable sequence as long as a specified
 *   predicate returns true.
 */
beicon.v2.core.take_while = (function beicon$v2$core$take_while(f,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.take_while(f),ob);
});
/**
 * Returns the values from the source observable sequence until the
 *   other observable sequence or Promise produces a value.
 */
beicon.v2.core.take_until = (function beicon$v2$core$take_until(other,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.take_until(other),ob);
});
/**
 * Return an observable that only has the first value of the provided
 *   observable. You can optionally pass a predicate and default value.
 */
beicon.v2.core.first = (function beicon$v2$core$first(ob){
return beicon.v2.operators.pipe(beicon.v2.operators.take((1)),ob);
});
/**
 * Return an observable that only has the last value of the provided
 *   observable. You can optionally pass a predicate and default value.
 */
beicon.v2.core.last = (function beicon$v2$core$last(ob){
return beicon.v2.operators.pipe(beicon.v2.operators.take_last((1)),ob);
});
/**
 * Applies an accumulator function over an observable sequence,
 *   returning the result of the aggregation as a single element in the
 *   result sequence.
 */
beicon.v2.core.reduce = (function beicon$v2$core$reduce(var_args){
var G__45383 = arguments.length;
switch (G__45383) {
case 2:
return beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.reduce.cljs$core$IFn$_invoke$arity$1(f),ob);
}));

(beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,seed,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.reduce.cljs$core$IFn$_invoke$arity$2(f,seed),ob);
}));

(beicon.v2.core.reduce.cljs$lang$maxFixedArity = 3);

/**
 * Applies an accumulator function over an observable sequence and
 *   returns each intermediate result.  Same as reduce but with
 *   intermediate results
 */
beicon.v2.core.scan = (function beicon$v2$core$scan(var_args){
var G__45391 = arguments.length;
switch (G__45391) {
case 2:
return beicon.v2.core.scan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return beicon.v2.core.scan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.core.scan.cljs$core$IFn$_invoke$arity$2 = (function (f,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.scan.cljs$core$IFn$_invoke$arity$1(f),ob);
}));

(beicon.v2.core.scan.cljs$core$IFn$_invoke$arity$3 = (function (f,seed,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.scan.cljs$core$IFn$_invoke$arity$2(f,seed),ob);
}));

(beicon.v2.core.scan.cljs$lang$maxFixedArity = 3);

/**
 * Applies an accumulator function over the source Observable where
 *   the accumulator function itself returns an Observable, then each
 *   intermediate Observable returned is merged into the output
 *   Observable.
 */
beicon.v2.core.merge_scan = (function beicon$v2$core$merge_scan(f,seed,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.merge_scan(f,seed),ob);
});
/**
 * Recursively projects each source value to an Observable
 *   which is merged in the output Observable.
 */
beicon.v2.core.expand = (function beicon$v2$core$expand(f,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.expand.cljs$core$IFn$_invoke$arity$1(f),ob);
});
/**
 * Merges the specified observable sequences into one observable
 *   sequence by using the selector function only when the source
 *   observable sequence (the instance) produces an element.
 */
beicon.v2.core.with_latest_from = (function beicon$v2$core$with_latest_from(var_args){
var G__45395 = arguments.length;
switch (G__45395) {
case 2:
return beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$2 = (function (o1,source){
return beicon.v2.operators.pipe(beicon.v2.operators.with_latest(o1),source);
}));

(beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$3 = (function (o1,o2,source){
return beicon.v2.operators.pipe(beicon.v2.operators.with_latest(o1,o2),source);
}));

(beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$4 = (function (o1,o2,o3,source){
return beicon.v2.operators.pipe(beicon.v2.operators.with_latest(o1,o2,o3),source);
}));

(beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$5 = (function (o1,o2,o3,o4,source){
return beicon.v2.operators.pipe(beicon.v2.operators.with_latest(o1,o2,o3,o4),source);
}));

(beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$6 = (function (o1,o2,o3,o4,o5,source){
return beicon.v2.operators.pipe(beicon.v2.operators.with_latest(o1,o2,o3,o4,o5),source);
}));

(beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$7 = (function (o1,o2,o3,o4,o5,o6,source){
return beicon.v2.operators.pipe(beicon.v2.operators.with_latest(o1,o2,o3,o4,o5,o6),source);
}));

(beicon.v2.core.with_latest_from.cljs$lang$maxFixedArity = 7);

/**
 * Combines multiple Observables to create an Observable whose values
 *   are calculated from the latest values of each of its input
 *   Observables (operator).
 */
beicon.v2.core.combine_latest_with = (function beicon$v2$core$combine_latest_with(var_args){
var G__45397 = arguments.length;
switch (G__45397) {
case 2:
return beicon.v2.core.combine_latest_with.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return beicon.v2.core.combine_latest_with.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return beicon.v2.core.combine_latest_with.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return beicon.v2.core.combine_latest_with.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return beicon.v2.core.combine_latest_with.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return beicon.v2.core.combine_latest_with.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.core.combine_latest_with.cljs$core$IFn$_invoke$arity$2 = (function (o1,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.combine_latest(o1),ob);
}));

(beicon.v2.core.combine_latest_with.cljs$core$IFn$_invoke$arity$3 = (function (o1,o2,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.combine_latest(o1,o2),ob);
}));

(beicon.v2.core.combine_latest_with.cljs$core$IFn$_invoke$arity$4 = (function (o1,o2,o3,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.combine_latest(o1,o2,o3),ob);
}));

(beicon.v2.core.combine_latest_with.cljs$core$IFn$_invoke$arity$5 = (function (o1,o2,o3,o4,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.combine_latest(o1,o2,o3,o4),ob);
}));

(beicon.v2.core.combine_latest_with.cljs$core$IFn$_invoke$arity$6 = (function (o1,o2,o3,o4,o5,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.combine_latest(o1,o2,o3,o4,o5),ob);
}));

(beicon.v2.core.combine_latest_with.cljs$core$IFn$_invoke$arity$7 = (function (o1,o2,o3,o4,o5,o6,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.combine_latest(o1,o2,o3,o4,o5,o6),ob);
}));

(beicon.v2.core.combine_latest_with.cljs$lang$maxFixedArity = 7);

/**
 * Continues an observable sequence that is terminated
 *   by an exception with the next observable sequence.
 */
beicon.v2.core.catch$ = (function beicon$v2$core$catch(var_args){
var G__45403 = arguments.length;
switch (G__45403) {
case 2:
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2 = (function (handler,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.catch$(handler),ob);
}));

(beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$3 = (function (pred,handler,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.catch$((function (value){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(value) : pred.call(null,value)))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(value) : handler.call(null,value));
} else {
throw value;
}
})),ob);
}));

(beicon.v2.core.catch$.cljs$lang$maxFixedArity = 3);

/**
 * Invokes an action for each element in the
 *   observable sequence.
 */
beicon.v2.core.tap = (function beicon$v2$core$tap(var_args){
var G__45407 = arguments.length;
switch (G__45407) {
case 2:
return beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2 = (function (f,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.tap.cljs$core$IFn$_invoke$arity$1(f),ob);
}));

(beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$3 = (function (f,e,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.tap.cljs$core$IFn$_invoke$arity$2(f,e),ob);
}));

(beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$4 = (function (f,e,c,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.tap.cljs$core$IFn$_invoke$arity$3(f,e,c),ob);
}));

(beicon.v2.core.tap.cljs$lang$maxFixedArity = 4);

/**
 * Returns an observable sequence that emits only the first item emitted
 *   by the source Observable during sequential time windows of a
 *   specified duration.
 */
beicon.v2.core.throttle = (function beicon$v2$core$throttle(var_args){
var G__45411 = arguments.length;
switch (G__45411) {
case 2:
return beicon.v2.core.throttle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return beicon.v2.core.throttle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.core.throttle.cljs$core$IFn$_invoke$arity$2 = (function (ms,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.throttle.cljs$core$IFn$_invoke$arity$1(ms),ob);
}));

(beicon.v2.core.throttle.cljs$core$IFn$_invoke$arity$3 = (function (ms,config,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.throttle.cljs$core$IFn$_invoke$arity$2(ms,config),ob);
}));

(beicon.v2.core.throttle.cljs$lang$maxFixedArity = 3);

/**
 * Emits an item from the source Observable after a
 *   particular timespan has passed without the Observable
 *   omitting any other items.
 */
beicon.v2.core.debounce = (function beicon$v2$core$debounce(ms,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.debounce(ms),ob);
});
/**
 * Samples the observable sequence at each interval.
 */
beicon.v2.core.sample = (function beicon$v2$core$sample(ms,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.sample(ms),ob);
});
/**
 * Samples the observable sequence at each interval.
 */
beicon.v2.core.sample_when = (function beicon$v2$core$sample_when(other,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.sample_when(other),ob);
});
/**
 * Ignores all elements in an observable sequence leaving only the
 *   termination messages.
 */
beicon.v2.core.ignore = (function beicon$v2$core$ignore(ob){
return beicon.v2.operators.pipe(beicon.v2.operators.ignore(),ob);
});
/**
 * Returns an Observable that mirrors the source Observable, but will
 *   call a specified function when the source terminates on complete or
 *   error.
 */
beicon.v2.core.finalize = (function beicon$v2$core$finalize(f,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.finalize(f),ob);
});
/**
 * Projects each element of an observable sequence into zero
 *   or more buffers which are produced based on element count
 *   information.
 */
beicon.v2.core.buffer = (function beicon$v2$core$buffer(var_args){
var G__45415 = arguments.length;
switch (G__45415) {
case 2:
return beicon.v2.core.buffer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return beicon.v2.core.buffer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.core.buffer.cljs$core$IFn$_invoke$arity$2 = (function (n,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.buffer(n),ob);
}));

(beicon.v2.core.buffer.cljs$core$IFn$_invoke$arity$3 = (function (n,o,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.buffer(n,o),ob);
}));

(beicon.v2.core.buffer.cljs$lang$maxFixedArity = 3);

/**
 * Buffers the source Observable values for a specific time period.
 */
beicon.v2.core.buffer_time = (function beicon$v2$core$buffer_time(var_args){
var G__45418 = arguments.length;
switch (G__45418) {
case 2:
return beicon.v2.core.buffer_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return beicon.v2.core.buffer_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return beicon.v2.core.buffer_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.core.buffer_time.cljs$core$IFn$_invoke$arity$2 = (function (ms,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.buffer_time(ms),ob);
}));

(beicon.v2.core.buffer_time.cljs$core$IFn$_invoke$arity$3 = (function (ms,start,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.buffer_time(ms,start),ob);
}));

(beicon.v2.core.buffer_time.cljs$core$IFn$_invoke$arity$4 = (function (ms,start,max,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.buffer_time(ms,start,max),ob);
}));

(beicon.v2.core.buffer_time.cljs$lang$maxFixedArity = 4);

/**
 * Buffers the source Observable values until notifier emits.
 */
beicon.v2.core.buffer_until = (function beicon$v2$core$buffer_until(notifier,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.buffer_until(notifier),ob);
});
/**
 * Given an optional number of retries and an observable,
 *   repeats the source observable the specified number of
 *   times or until it terminates. If no number of retries
 *   is given, it will be retried indefinitely.
 */
beicon.v2.core.retry = (function beicon$v2$core$retry(var_args){
var G__45421 = arguments.length;
switch (G__45421) {
case 1:
return beicon.v2.core.retry.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return beicon.v2.core.retry.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.core.retry.cljs$core$IFn$_invoke$arity$1 = (function (ob){
return beicon.v2.operators.pipe(beicon.v2.operators.retry(),ob);
}));

(beicon.v2.core.retry.cljs$core$IFn$_invoke$arity$2 = (function (n,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.retry(n),ob);
}));

(beicon.v2.core.retry.cljs$lang$maxFixedArity = 2);

/**
 * Transform the observable sequence using transducers.
 */
beicon.v2.core.transform = (function beicon$v2$core$transform(xform,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.transform(xform),ob);
});
/**
 * Returns the source observable sequence or the other
 *   observable sequence if dueTime elapses.
 */
beicon.v2.core.timeout = (function beicon$v2$core$timeout(var_args){
var G__45426 = arguments.length;
switch (G__45426) {
case 2:
return beicon.v2.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return beicon.v2.core.timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (ms,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.timeout.cljs$core$IFn$_invoke$arity$1(ms),ob);
}));

(beicon.v2.core.timeout.cljs$core$IFn$_invoke$arity$3 = (function (ms,with$,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.timeout.cljs$core$IFn$_invoke$arity$2(ms,with$),ob);
}));

(beicon.v2.core.timeout.cljs$lang$maxFixedArity = 3);

/**
 * Time shifts the observable sequence by dueTime. The relative
 *   time intervals between the values are preserved.
 */
beicon.v2.core.delay = (function beicon$v2$core$delay(ms,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.delay(ms),ob);
});
/**
 * Time shifts at least `ms` milisseconds.
 */
beicon.v2.core.delay_at_least = (function beicon$v2$core$delay_at_least(ms,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.delay_at_least(ms),ob);
});
/**
 * Time shifts the observable sequence based on a subscription
 *   delay and a delay selector function for each element.
 */
beicon.v2.core.delay_when = (function beicon$v2$core$delay_when(var_args){
var G__45429 = arguments.length;
switch (G__45429) {
case 2:
return beicon.v2.core.delay_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return beicon.v2.core.delay_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(beicon.v2.core.delay_when.cljs$core$IFn$_invoke$arity$2 = (function (sf,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.delay_when(sf),ob);
}));

(beicon.v2.core.delay_when.cljs$core$IFn$_invoke$arity$3 = (function (sf,sd,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.delay_when(sf,sd),ob);
}));

(beicon.v2.core.delay_when.cljs$lang$maxFixedArity = 3);

/**
 * Just like clojure collections flatten but for rx streams. Given a stream
 *   off collections will emit every value separately
 */
beicon.v2.core.flatten = (function beicon$v2$core$flatten(ob){
return beicon.v2.operators.pipe(shadow.js.shim.module$rxjs.concatMap((function (p1__45455_SHARP_){
return p1__45455_SHARP_;
})),ob);
});
/**
 * Like reduce but accepts a function that returns a stream. Will use as
 *   value for the next step in the reduce the last valued emited by the stream
 *   in the function.
 */
beicon.v2.core.concat_reduce = (function beicon$v2$core$concat_reduce(f,seed,ob){
var current_acc = cljs.core.volatile_BANG_(seed);
return beicon.v2.core.last(beicon.v2.core.concat(beicon.v2.core.of(seed),beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (p1__45469_SHARP_){
return cljs.core.vreset_BANG_(current_acc,p1__45469_SHARP_);
}),beicon.v2.core.mapcat((function (p1__45468_SHARP_){
var G__45473 = cljs.core.deref(current_acc);
var G__45474 = p1__45468_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__45473,G__45474) : f.call(null,G__45473,G__45474));
}),ob))));
});
beicon.v2.core.observe_on = (function beicon$v2$core$observe_on(sch,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.observe_on.cljs$core$IFn$_invoke$arity$1(sch),ob);
});
beicon.v2.core.subscribe_on = (function beicon$v2$core$subscribe_on(sch,ob){
return beicon.v2.operators.pipe(beicon.v2.operators.subscribe_on.cljs$core$IFn$_invoke$arity$1(sch),ob);
});

//# sourceMappingURL=beicon.v2.core.js.map
