import "./cljs_env.js";
import "./cljs.core.js";
import "./beicon.v2.core.js";
import "./okulary.core.js";
goog.provide('potok.v2.core');

/**
 * @interface
 */
potok.v2.core.UpdateEvent = function(){};

var potok$v2$core$UpdateEvent$update$dyn_46466 = (function (event,state){
var x__5373__auto__ = (((event == null))?null:event);
var m__5374__auto__ = (potok.v2.core.update[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(event,state) : m__5374__auto__.call(null,event,state));
} else {
var m__5372__auto__ = (potok.v2.core.update["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(event,state) : m__5372__auto__.call(null,event,state));
} else {
throw cljs.core.missing_protocol("UpdateEvent.update",event);
}
}
});
/**
 * Apply a transformation to the state.
 */
potok.v2.core.update = (function potok$v2$core$update(event,state){
if((((!((event == null)))) && ((!((event.potok$v2$core$UpdateEvent$update$arity$2 == null)))))){
return event.potok$v2$core$UpdateEvent$update$arity$2(event,state);
} else {
return potok$v2$core$UpdateEvent$update$dyn_46466(event,state);
}
});


/**
 * @interface
 */
potok.v2.core.WatchEvent = function(){};

var potok$v2$core$WatchEvent$watch$dyn_46467 = (function (event,state,stream){
var x__5373__auto__ = (((event == null))?null:event);
var m__5374__auto__ = (potok.v2.core.watch[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(event,state,stream) : m__5374__auto__.call(null,event,state,stream));
} else {
var m__5372__auto__ = (potok.v2.core.watch["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(event,state,stream) : m__5372__auto__.call(null,event,state,stream));
} else {
throw cljs.core.missing_protocol("WatchEvent.watch",event);
}
}
});
potok.v2.core.watch = (function potok$v2$core$watch(event,state,stream){
if((((!((event == null)))) && ((!((event.potok$v2$core$WatchEvent$watch$arity$3 == null)))))){
return event.potok$v2$core$WatchEvent$watch$arity$3(event,state,stream);
} else {
return potok$v2$core$WatchEvent$watch$dyn_46467(event,state,stream);
}
});


/**
 * @interface
 */
potok.v2.core.EffectEvent = function(){};

var potok$v2$core$EffectEvent$effect$dyn_46472 = (function (event,state,stream){
var x__5373__auto__ = (((event == null))?null:event);
var m__5374__auto__ = (potok.v2.core.effect[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(event,state,stream) : m__5374__auto__.call(null,event,state,stream));
} else {
var m__5372__auto__ = (potok.v2.core.effect["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(event,state,stream) : m__5372__auto__.call(null,event,state,stream));
} else {
throw cljs.core.missing_protocol("EffectEvent.effect",event);
}
}
});
potok.v2.core.effect = (function potok$v2$core$effect(event,state,stream){
if((((!((event == null)))) && ((!((event.potok$v2$core$EffectEvent$effect$arity$3 == null)))))){
return event.potok$v2$core$EffectEvent$effect$arity$3(event,state,stream);
} else {
return potok$v2$core$EffectEvent$effect$dyn_46472(event,state,stream);
}
});


/**
 * @interface
 */
potok.v2.core.Event = function(){};

var potok$v2$core$Event$_type$dyn_46475 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (potok.v2.core._type[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (potok.v2.core._type["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Event.-type",_);
}
}
});
/**
 * Returns the type of the event.
 */
potok.v2.core._type = (function potok$v2$core$_type(_){
if((((!((_ == null)))) && ((!((_.potok$v2$core$Event$_type$arity$1 == null)))))){
return _.potok$v2$core$Event$_type$arity$1(_);
} else {
return potok$v2$core$Event$_type$dyn_46475(_);
}
});

/**
 * Return `true` when `e` satisfies
 *   the UpdateEvent protocol.
 */
potok.v2.core.update_QMARK_ = (function potok$v2$core$update_QMARK_(e){
if((!((e == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === e.potok$v2$core$UpdateEvent$)))){
return true;
} else {
if((!e.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(potok.v2.core.UpdateEvent,e);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(potok.v2.core.UpdateEvent,e);
}
});
/**
 * Return `true` when `e` satisfies
 *   the WatchEvent protocol.
 */
potok.v2.core.watch_QMARK_ = (function potok$v2$core$watch_QMARK_(e){
if((!((e == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === e.potok$v2$core$WatchEvent$)))){
return true;
} else {
if((!e.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(potok.v2.core.WatchEvent,e);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(potok.v2.core.WatchEvent,e);
}
});
/**
 * Return `true` when `e` satisfies
 *   the EffectEvent protocol.
 */
potok.v2.core.effect_QMARK_ = (function potok$v2$core$effect_QMARK_(e){
if((!((e == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === e.potok$v2$core$EffectEvent$)))){
return true;
} else {
if((!e.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(potok.v2.core.EffectEvent,e);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(potok.v2.core.EffectEvent,e);
}
});
/**
 * Return `true` if `v` is an event.
 */
potok.v2.core.event_QMARK_ = (function potok$v2$core$event_QMARK_(v){
var or__5025__auto__ = (((!((v == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === v.potok$v2$core$Event$))))?true:(((!v.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(potok.v2.core.Event,v):false)):cljs.core.native_satisfies_QMARK_(potok.v2.core.Event,v));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return ((potok.v2.core.update_QMARK_(v)) || (((potok.v2.core.watch_QMARK_(v)) || (potok.v2.core.effect_QMARK_(v)))));
}
});
/**
 * Return `true` if `v` is a promise instance or is a thenable
 *   object.
 */
potok.v2.core.promise_QMARK_ = (function potok$v2$core$promise_QMARK_(v){
var or__5025__auto__ = (v instanceof Promise);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = goog.isObject(v);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.fn_QMARK_((v["then"]));
} else {
return and__5023__auto__;
}
}
});
potok.v2.core.type = (function potok$v2$core$type(o){
if((((!((o == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === o.potok$v2$core$Event$))))?true:false):false)){
return o.potok$v2$core$Event$_type$arity$1(null);
} else {
return new cljs.core.Keyword("potok.v2.core","undefined","potok.v2.core/undefined",-94368560);
}
});
potok.v2.core.type_QMARK_ = (function potok$v2$core$type_QMARK_(var_args){
var G__46434 = arguments.length;
switch (G__46434) {
case 1:
return potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (t){
return (function (v){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(potok.v2.core.type(v),t);
});
}));

(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (t,v){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(potok.v2.core.type(v),t);
}));

(potok.v2.core.type_QMARK_.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {potok.v2.core.Event}
*/
potok.v2.core.DataEvent = (function (t,o){
this.t = t;
this.o = o;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(potok.v2.core.DataEvent.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(potok.v2.core.DataEvent.prototype.potok$v2$core$Event$_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.t;
}));

(potok.v2.core.DataEvent.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.o;
}));

(potok.v2.core.DataEvent.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"o","o",290524299,null)], null);
}));

(potok.v2.core.DataEvent.cljs$lang$type = true);

(potok.v2.core.DataEvent.cljs$lang$ctorStr = "potok.v2.core/DataEvent");

(potok.v2.core.DataEvent.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"potok.v2.core/DataEvent");
}));

/**
 * Positional factory function for potok.v2.core/DataEvent.
 */
potok.v2.core.__GT_DataEvent = (function potok$v2$core$__GT_DataEvent(t,o){
return (new potok.v2.core.DataEvent(t,o));
});

/**
 * Creates an event instance that only contains data.
 */
potok.v2.core.data_event = (function potok$v2$core$data_event(var_args){
var G__46436 = arguments.length;
switch (G__46436) {
case 1:
return potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$1 = (function (t){
return (new potok.v2.core.DataEvent(t,null));
}));

(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2 = (function (t,o){
return (new potok.v2.core.DataEvent(t,o));
}));

(potok.v2.core.data_event.cljs$lang$maxFixedArity = 2);

potok.v2.core.data_event_QMARK_ = (function potok$v2$core$data_event_QMARK_(o){
return (o instanceof potok.v2.core.DataEvent);
});
if((typeof potok !== 'undefined') && (typeof potok.v2 !== 'undefined') && (typeof potok.v2.core !== 'undefined') && (typeof potok.v2.core.resolve !== 'undefined')){
} else {
potok.v2.core.resolve = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__46439 = cljs.core.get_global_hierarchy;
return (fexpr__46439.cljs$core$IFn$_invoke$arity$0 ? fexpr__46439.cljs$core$IFn$_invoke$arity$0() : fexpr__46439.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("potok.v2.core","resolve"),(function (type,params){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
potok.v2.core.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type,params){
return potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(type,params);
}));
potok.v2.core.event = (function potok$v2$core$event(var_args){
var G__46441 = arguments.length;
switch (G__46441) {
case 1:
return potok.v2.core.event.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return potok.v2.core.event.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(potok.v2.core.event.cljs$core$IFn$_invoke$arity$1 = (function (type){
return potok.v2.core.resolve.cljs$core$IFn$_invoke$arity$2(type,null);
}));

(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2 = (function (type,params){
return potok.v2.core.resolve.cljs$core$IFn$_invoke$arity$2(type,params);
}));

(potok.v2.core.event.cljs$lang$maxFixedArity = 2);

(potok.v2.core.UpdateEvent["function"] = true);

(potok.v2.core.update["function"] = (function (func,state){
return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(state) : func.call(null,state));
}));
if((typeof potok !== 'undefined') && (typeof potok.v2 !== 'undefined') && (typeof potok.v2.core !== 'undefined') && (typeof potok.v2.core.handle_error !== 'undefined')){
} else {
potok.v2.core.handle_error = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__46442 = cljs.core.get_global_hierarchy;
return (fexpr__46442.cljs$core$IFn$_invoke$arity$0 ? fexpr__46442.cljs$core$IFn$_invoke$arity$0() : fexpr__46442.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("potok.v2.core","handle-error"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
potok.v2.core.handle_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (error){
console.warn("Using default error handler, consider using your own!");

return console.error(error);
}));
potok.v2.core.noop = cljs.core.constantly(null);
potok.v2.core.repr_event = (function potok$v2$core$repr_event(event){
if((((!((event == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === event.potok$v2$core$Event$))))?true:(((!event.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(potok.v2.core.Event,event):false)):cljs.core.native_satisfies_QMARK_(potok.v2.core.Event,event))){
return ["typ:(",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([potok.v2.core._type(event)], 0)),")"].join('');
} else {
if(((cljs.core.fn_QMARK_(event)) && ((cljs.core.count(event.name) > (0))))){
return ["fn:(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge(event.name)),")"].join('');
} else {
return ["unk:(",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event], 0)),")"].join('');

}
}
});
/**
 * Start a new store.
 * 
 *   This function initializes a new event processing stream
 *   loop and returns a bi-directional rx stream that should
 *   be used to push new events and subscribe to state changes.
 */
potok.v2.core.store = (function potok$v2$core$store(var_args){
var G__46450 = arguments.length;
switch (G__46450) {
case 0:
return potok.v2.core.store.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return potok.v2.core.store.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(potok.v2.core.store.cljs$core$IFn$_invoke$arity$0 = (function (){
return potok.v2.core.store.cljs$core$IFn$_invoke$arity$1(null);
}));

(potok.v2.core.store.cljs$core$IFn$_invoke$arity$1 = (function (p__46451){
var map__46452 = p__46451;
var map__46452__$1 = cljs.core.__destructure_map(map__46452);
var params = map__46452__$1;
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46452__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),potok.v2.core.handle_error);
var on_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46452__$1,new cljs.core.Keyword(null,"on-event","on-event",1340574774));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46452__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var validate_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46452__$1,new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_);
var input_sb = beicon.v2.core.subject();
var input_sm = (function (){var G__46453 = beicon.v2.core.to_observable(input_sb);
var G__46453__$1 = (((!((on_event == null))))?beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_event,G__46453):G__46453);
return beicon.v2.core.share(G__46453__$1);

})();
var state_STAR_ = okulary.core.atom(state);
var process_update = (function (event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_STAR_,(function (state__$1){
var result = potok.v2.core.update(event,state__$1);
if(cljs.core.truth_((validate_fn.cljs$core$IFn$_invoke$arity$1 ? validate_fn.cljs$core$IFn$_invoke$arity$1(result) : validate_fn.call(null,result)))){
} else {
var hint_46486 = ["seems like the event '",potok.v2.core.repr_event(event),"' ","does not pass validation"].join('');
throw (new Error(hint_46486));
}

return result;
}));
});
var process_error = (function (error){
var res = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(error) : on_error.call(null,error));
if(beicon.v2.core.observable_QMARK_(res)){
return res;
} else {
return beicon.v2.core.empty();
}
});
var process_watch = (function (event){
var result = potok.v2.core.watch(event,cljs.core.deref(state_STAR_),input_sm);
if(beicon.v2.core.observable_QMARK_(result)){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (p1__46446_SHARP_){
return input_sb.next(p1__46446_SHARP_);
}),beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(process_error,result));
} else {
if(potok.v2.core.promise_QMARK_(result)){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (p1__46447_SHARP_){
return input_sb.next(p1__46447_SHARP_);
}),beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(process_error,beicon.v2.core.from(result)));
} else {
if((result == null)){
return null;
} else {
return console.warn("Event returned unexpected object from `watch` method (ignoring).",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"event-type","event-type",319722813),potok.v2.core.type(event)], null)], 0)));

}
}
}
});
var process_effect = (function (event){
return potok.v2.core.effect(event,cljs.core.deref(state_STAR_),input_sm);
});
var process_event = (function (event){
try{if(potok.v2.core.update_QMARK_(event)){
process_update(event);
} else {
}

if(potok.v2.core.watch_QMARK_(event)){
process_watch(event);
} else {
}

if(potok.v2.core.effect_QMARK_(event)){
return process_effect(event);
} else {
return null;
}
}catch (e46454){var e = e46454;
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (p1__46448_SHARP_){
return input_sb.next(p1__46448_SHARP_);
}),process_error(e));
}});
beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2(input_sm,process_event);

var x46455 = state_STAR_;
(x46455.next = (function (event){
var _ = this;
return input_sb.next(event);
}));

(x46455.error = (function (error){
var _ = this;
return input_sb.complete();
}));

(x46455.complete = (function (){
var _ = this;
return input_sb.complete();
}));

(x46455.getInputStream = (function (){
var _ = this;
return input_sm;
}));

(x46455.beicon$v2$core$IDisposable$ = cljs.core.PROTOCOL_SENTINEL);

(x46455.beicon$v2$core$IDisposable$_dispose$arity$1 = (function (_){
var ___$1 = this;
return input_sb.complete();
}));

return x46455;
}));

(potok.v2.core.store.cljs$lang$maxFixedArity = 1);

/**
 * Emits an event or a collection of them into the default store.
 * 
 *   If you have instanciated your own store, this function provides
 *   2-arity that allows specify a user defined store.
 */
potok.v2.core.emit_BANG_ = (function potok$v2$core$emit_BANG_(var_args){
var G__46463 = arguments.length;
switch (G__46463) {
case 2:
return potok.v2.core.emit_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___46490 = arguments.length;
var i__5750__auto___46491 = (0);
while(true){
if((i__5750__auto___46491 < len__5749__auto___46490)){
args_arr__5774__auto__.push((arguments[i__5750__auto___46491]));

var G__46492 = (i__5750__auto___46491 + (1));
i__5750__auto___46491 = G__46492;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return potok.v2.core.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(potok.v2.core.emit_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (store,event){
return store.next(event);
}));

(potok.v2.core.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (store,event,more){
return cljs.core.run_BANG_((function (p1__46458_SHARP_){
return store.next(p1__46458_SHARP_);
}),cljs.core.cons(event,more));
}));

/** @this {Function} */
(potok.v2.core.emit_BANG_.cljs$lang$applyTo = (function (seq46460){
var G__46461 = cljs.core.first(seq46460);
var seq46460__$1 = cljs.core.next(seq46460);
var G__46462 = cljs.core.first(seq46460__$1);
var seq46460__$2 = cljs.core.next(seq46460__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46461,G__46462,seq46460__$2);
}));

(potok.v2.core.emit_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Returns the internal input stream of the store. Should
 *   be used by third party integration that want use store
 *   as event bus not only with defined events.
 */
potok.v2.core.input_stream = (function potok$v2$core$input_stream(store){
return store.getInputStream();
});

//# sourceMappingURL=potok.v2.core.js.map
