import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.logging.js";
import "./app.util.object.js";
import "./app.util.timers.js";
import "./beicon.v2.core.js";
import "./beicon.v2.operators.js";
import "./cuerdas.core.js";
import "./okulary.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.store');
app.common.logging.loggers.set("app.main.store",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"info","info",-317069002)));
cljs.core.enable_console_print_BANG_();
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.store !== 'undefined') && (typeof app.main.store.loader !== 'undefined')){
} else {
app.main.store.loader = okulary.core.atom(false);
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.store !== 'undefined') && (typeof app.main.store.on_error !== 'undefined')){
} else {
app.main.store.on_error = okulary.core.atom(cljs.core.identity);
}
potok.v2.core.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type,data){
return potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(type,data);
}));
app.main.store.on_event = cljs.core.identity;
app.main.store._STAR_debug_events_STAR_ = false;
app.main.store._STAR_debug_events_time_STAR_ = false;
app.main.store.current_measure = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.main.store.measure_time_to_render = (function app$main$store$measure_time_to_render(event){
if(cljs.core.truth_(cljs.core.deref(app.main.store.current_measure))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.main.store.current_measure,cljs.core.conj,event);
} else {
var start = performance.now();
cljs.core.reset_BANG_(app.main.store.current_measure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null));

return app.util.timers.raf((function (){
return scheduler.postTask((function (){
var time_51017 = (performance.now() - start);
if((time_51017 > (1000))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(time_51017),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.deref(app.main.store.current_measure)))].join('')], 0));
} else {
}

return cljs.core.reset_BANG_(app.main.store.current_measure,null);
}),({"priority": "user-blocking"}));
}));
}
});
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
app.main.store.debug_exclude_events = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.workspace.notifications","handle-pointer-update","app.main.data.workspace.notifications/handle-pointer-update",614124289),null,new cljs.core.Keyword("app.main.data.workspace.selection","change-hover-state","app.main.data.workspace.selection/change-hover-state",972605989),null,new cljs.core.Keyword("app.main.data.workspace.notifications","handle-pointer-send","app.main.data.workspace.notifications/handle-pointer-send",-1463250994),null,new cljs.core.Keyword("app.main.data.websocket","send-message","app.main.data.websocket/send-message",1713313880),null], null), null);

(app.main.store.on_event = (function (e){
if(cljs.core.truth_((function (){var and__5023__auto__ = app.main.store._STAR_debug_events_time_STAR_;
if(cljs.core.truth_(and__5023__auto__)){
return potok.v2.core.event_QMARK_(e);
} else {
return and__5023__auto__;
}
})())){
app.main.store.measure_time_to_render(potok.v2.core.type(e));
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = app.main.store._STAR_debug_events_STAR_;
if(cljs.core.truth_(and__5023__auto__)){
return ((potok.v2.core.event_QMARK_(e)) && (cljs.core.not((function (){var G__50993 = potok.v2.core.type(e);
return (app.main.store.debug_exclude_events.cljs$core$IFn$_invoke$arity$1 ? app.main.store.debug_exclude_events.cljs$core$IFn$_invoke$arity$1(G__50993) : app.main.store.debug_exclude_events.call(null,G__50993));
})())));
} else {
return and__5023__auto__;
}
})())){
return console.log(["[stream]: ",potok.v2.core.repr_event(e)].join(''));
} else {
return null;
}
}));
} else {
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.store !== 'undefined') && (typeof app.main.store.state !== 'undefined')){
} else {
app.main.store.state = potok.v2.core.store.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"resolve","resolve",-1584445482),potok.v2.core.resolve,new cljs.core.Keyword(null,"on-event","on-event",1340574774),app.main.store.on_event,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (cause){
if(cljs.core.truth_(cause)){
var fexpr__50995 = cljs.core.deref(app.main.store.on_error);
return (fexpr__50995.cljs$core$IFn$_invoke$arity$1 ? fexpr__50995.cljs$core$IFn$_invoke$arity$1(cause) : fexpr__50995.call(null,cause));
} else {
return null;
}
})], null));
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.store !== 'undefined') && (typeof app.main.store.stream !== 'undefined')){
} else {
app.main.store.stream = potok.v2.core.input_stream(app.main.store.state);
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.store !== 'undefined') && (typeof app.main.store.last_events !== 'undefined')){
} else {
app.main.store.last_events = (function (){var buffer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var omitset = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("app.main.data.workspace.persistence","update-persistence-status","app.main.data.workspace.persistence/update-persistence-status",1352886816),null,new cljs.core.Keyword("app.main.data.workspace.notifications","handle-pointer-send","app.main.data.workspace.notifications/handle-pointer-send",-1463250994),null,new cljs.core.Keyword("potok.v2.core","undefined","potok.v2.core/undefined",-94368560),null,new cljs.core.Keyword("app.main.router","assign-exception","app.main.router/assign-exception",-192148203),null,new cljs.core.Keyword("app.main.data.websocket","send-message","app.main.data.websocket/send-message",1713313880),null], null), null);
beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (p1__51000_SHARP_){
return cljs.core.reset_BANG_(buffer,cljs.core.vec(p1__51000_SHARP_));
}),beicon.v2.core.scan.cljs$core$IFn$_invoke$arity$3((function (buffer__$1,event){
var G__51001 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffer__$1,event);
if((cljs.core.count(buffer__$1) > (50))){
return cljs.core.pop(G__51001);
} else {
return G__51001;
}
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),beicon.v2.core.pipe(beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$0(),beicon.v2.core.map(cljs.core.str,beicon.v2.core.filter((function (p1__50999_SHARP_){
return (!(cljs.core.contains_QMARK_(omitset,p1__50999_SHARP_)));
}),beicon.v2.core.merge(beicon.v2.core.map((function (p1__50998_SHARP_){
return new cljs.core.Keyword(null,"hint-origin","hint-origin",-1188161082).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(p1__50998_SHARP_));
}),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.changes","commit","app.main.data.changes/commit",-1518621522)),app.main.store.stream)),beicon.v2.core.map(potok.v2.core.type,app.main.store.stream)))))));

return buffer;
})();
}
app.main.store.emit_BANG_ = (function app$main$store$emit_BANG_(var_args){
var G__51012 = arguments.length;
switch (G__51012) {
case 0:
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___51024 = arguments.length;
var i__5750__auto___51025 = (0);
while(true){
if((i__5750__auto___51025 < len__5749__auto___51024)){
args_arr__5774__auto__.push((arguments[i__5750__auto___51025]));

var G__51026 = (i__5750__auto___51025 + (1));
i__5750__auto___51025 = G__51026;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((1)),(0),null)):null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);

}
});

(app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (event){
potok.v2.core.emit_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.store.state,event);

return null;
}));

(app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (event,events){
cljs.core.apply.cljs$core$IFn$_invoke$arity$3(potok.v2.core.emit_BANG_,app.main.store.state,cljs.core.cons(event,events));

return null;
}));

/** @this {Function} */
(app.main.store.emit_BANG_.cljs$lang$applyTo = (function (seq51009){
var G__51010 = cljs.core.first(seq51009);
var seq51009__$1 = cljs.core.next(seq51009);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51010,seq51009__$1);
}));

(app.main.store.emit_BANG_.cljs$lang$maxFixedArity = (1));

app.main.store.async_emit_BANG_ = (function app$main$store$async_emit_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51031 = arguments.length;
var i__5750__auto___51032 = (0);
while(true){
if((i__5750__auto___51032 < len__5749__auto___51031)){
args__5755__auto__.push((arguments[i__5750__auto___51032]));

var G__51033 = (i__5750__auto___51032 + (1));
i__5750__auto___51032 = G__51033;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.store.async_emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.store.async_emit_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.main.store.emit_BANG_,params);
}));
}));

(app.main.store.async_emit_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.store.async_emit_BANG_.cljs$lang$applyTo = (function (seq51015){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51015));
}));

if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.store !== 'undefined') && (typeof app.main.store.ongoing_tasks !== 'undefined')){
} else {
app.main.store.ongoing_tasks = okulary.core.atom(cljs.core.PersistentHashSet.EMPTY);
}
cljs.core.add_watch(app.main.store.ongoing_tasks,new cljs.core.Keyword("app.main.store","ongoing-tasks","app.main.store/ongoing-tasks",1500732996),(function (_,___$1,___$2,events){
if(cljs.core.empty_QMARK_(events)){
return app.util.object.set_BANG_(window,"onbeforeunload",null);
} else {
return app.util.object.set_BANG_(window,"onbeforeunload",cljs.core.constantly(false));
}
}));

//# sourceMappingURL=app.main.store.js.map
