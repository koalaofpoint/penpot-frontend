import "./cljs_env.js";
import "./cljs.core.js";
import "./promesa.protocols.js";
import "./promesa.util.js";
import "./promesa.impl.promise.js";
goog.provide('promesa.exec');
promesa.exec._STAR_default_scheduler_STAR_ = null;
promesa.exec._STAR_default_executor_STAR_ = null;
/**
 * Var that indicates the availability of virtual threads.
 */
promesa.exec.virtual_threads_available_QMARK_ = false;
promesa.exec.structured_task_scope_available_QMARK_ = false;
promesa.exec.noop = cljs.core.constantly(null);
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_scheduler !== 'undefined')){
} else {
/**
 * Default scheduled executor instance.
 */
promesa.exec.default_scheduler = (new cljs.core.Delay((function (){
return (promesa.exec.scheduled_executor.cljs$core$IFn$_invoke$arity$0 ? promesa.exec.scheduled_executor.cljs$core$IFn$_invoke$arity$0() : promesa.exec.scheduled_executor.call(null));
}),null));
}
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_executor !== 'undefined')){
} else {
/**
 * Default executor instance, ForkJoinPool/commonPool in JVM, MicrotaskExecutor on JS.
 */
promesa.exec.default_executor = (new cljs.core.Delay((function (){
return (promesa.exec.microtask_executor.cljs$core$IFn$_invoke$arity$0 ? promesa.exec.microtask_executor.cljs$core$IFn$_invoke$arity$0() : promesa.exec.microtask_executor.call(null));
}),null));
}
/**
 * Default Executor instance that runs the task in the same thread.
 */
promesa.exec.default_current_thread_executor = (new cljs.core.Delay((function (){
return (promesa.exec.current_thread_executor.cljs$core$IFn$_invoke$arity$0 ? promesa.exec.current_thread_executor.cljs$core$IFn$_invoke$arity$0() : promesa.exec.current_thread_executor.call(null));
}),null));
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_cached_executor !== 'undefined')){
} else {
/**
 * A global, cached thread executor service.
 */
promesa.exec.default_cached_executor = (new cljs.core.Delay((function (){
return promesa.exec.default_executor;
}),null));
}
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_thread_executor !== 'undefined')){
} else {
/**
 * A global, thread per task executor service.
 */
promesa.exec.default_thread_executor = promesa.exec.default_executor;
}
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_vthread_executor !== 'undefined')){
} else {
/**
 * A global, virtual thread per task executor service.
 */
promesa.exec.default_vthread_executor = promesa.exec.default_executor;
}
/**
 * Returns true if `o` is an instane of Executor or satisfies IExecutor protocol.
 */
promesa.exec.executor_QMARK_ = (function promesa$exec$executor_QMARK_(o){
if((!((o == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === o.promesa$protocols$IExecutor$)))){
return true;
} else {
if((!o.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(promesa.protocols.IExecutor,o);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(promesa.protocols.IExecutor,o);
}
});
promesa.exec.resolve_executor = (function promesa$exec$resolve_executor(var_args){
var G__42825 = arguments.length;
switch (G__42825) {
case 0:
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$0 = (function (){
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(null);
}));

(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1 = (function (executor){
if(promesa.exec.executor_QMARK_(executor)){
return executor;
} else {
if((executor == null)){
return cljs.core.deref(promesa.exec.default_executor);
} else {
if(cljs.core.delay_QMARK_(executor)){
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(executor));
} else {
var G__42826 = executor;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__42826)){
return cljs.core.deref(promesa.exec.default_executor);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cached","cached",1437727905),G__42826)){
return cljs.core.deref(promesa.exec.default_cached_executor);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__42826)){
return cljs.core.deref(promesa.exec.default_executor);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-thread","current-thread",-1723055768),G__42826)){
return cljs.core.deref(promesa.exec.default_current_thread_executor);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),G__42826)){
return cljs.core.deref(promesa.exec.default_vthread_executor);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"thread","thread",947001524),G__42826)){
return cljs.core.deref(promesa.exec.default_thread_executor);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"virtual","virtual",-1139229001),G__42826)){
return cljs.core.deref(promesa.exec.default_vthread_executor);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"same-thread","same-thread",-1479619719),G__42826)){
return cljs.core.deref(promesa.exec.default_current_thread_executor);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"platform","platform",-1086422114),G__42826)){
return cljs.core.deref(promesa.exec.default_thread_executor);
} else {
throw (new TypeError("invalid executor"));

}
}
}
}
}
}
}
}
}

}
}
}
}));

(promesa.exec.resolve_executor.cljs$lang$maxFixedArity = 1);

promesa.exec.resolve_scheduler = (function promesa$exec$resolve_scheduler(var_args){
var G__42832 = arguments.length;
switch (G__42832) {
case 0:
return promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0 = (function (){
return promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1(null);
}));

(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1 = (function (scheduler){
if((((scheduler == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),scheduler)))){
return cljs.core.deref(promesa.exec.default_scheduler);
} else {
return promesa.util.maybe_deref(scheduler);
}
}));

(promesa.exec.resolve_scheduler.cljs$lang$maxFixedArity = 1);

promesa.exec.wrap_bindings = (function promesa$exec$wrap_bindings(f){
return f;
});
/**
 * Run the task in the provided executor, returns `nil`. Analogous to
 *   the `(.execute executor f)`. Fire and forget.
 * 
 *   Exception unsafe, can raise exceptions if the executor
 *   rejects the task.
 */
promesa.exec.exec_BANG_ = (function promesa$exec$exec_BANG_(var_args){
var G__42848 = arguments.length;
switch (G__42848) {
case 1:
return promesa.exec.exec_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.exec_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.exec_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var f__$1 = promesa.exec.wrap_bindings(f);
return promesa.protocols._exec_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(promesa.exec._STAR_default_executor_STAR_),f__$1);
}));

(promesa.exec.exec_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executor,f){
var f__$1 = promesa.exec.wrap_bindings(f);
return promesa.protocols._exec_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(executor),f__$1);
}));

(promesa.exec.exec_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Run the task in the provided executor.
 * 
 *   Exception unsafe, can raise exceptions if the executor
 *   rejects the task.
 */
promesa.exec.run_BANG_ = (function promesa$exec$run_BANG_(var_args){
var G__42851 = arguments.length;
switch (G__42851) {
case 1:
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var f__$1 = promesa.exec.wrap_bindings(f);
return promesa.protocols._run_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(promesa.exec._STAR_default_executor_STAR_),f__$1);
}));

(promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executor,f){
var f__$1 = promesa.exec.wrap_bindings(f);
return promesa.protocols._run_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(executor),f__$1);
}));

(promesa.exec.run_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Submit a task to be executed in a provided executor
 *   and return a promise that will be completed with
 *   the return value of a task.
 * 
 *   Exception unsafe, can raise exceptions if the executor
 *   rejects the task.
 */
promesa.exec.submit_BANG_ = (function promesa$exec$submit_BANG_(var_args){
var G__42856 = arguments.length;
switch (G__42856) {
case 1:
return promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var f__$1 = promesa.exec.wrap_bindings(f);
return promesa.protocols._submit_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(promesa.exec._STAR_default_executor_STAR_),f__$1);
}));

(promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executor,f){
var f__$1 = promesa.exec.wrap_bindings(f);
return promesa.protocols._submit_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(executor),f__$1);
}));

(promesa.exec.submit_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Schedule a callable to be executed after the `ms` delay
 *   is reached.
 * 
 *   In JVM it uses a scheduled executor service and in JS
 *   it uses the `setTimeout` function.
 * 
 *   Exception unsafe, can raise exceptions if the executor
 *   rejects the task.
 */
promesa.exec.schedule_BANG_ = (function promesa$exec$schedule_BANG_(var_args){
var G__42861 = arguments.length;
switch (G__42861) {
case 2:
return promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ms,f){
return promesa.protocols._schedule_BANG_(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0(),ms,f);
}));

(promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (scheduler,ms,f){
return promesa.protocols._schedule_BANG_(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1(scheduler),ms,f);
}));

(promesa.exec.schedule_BANG_.cljs$lang$maxFixedArity = 3);

promesa.exec.rejected = (function promesa$exec$rejected(v){
return promesa.impl.promise.rejected(v);
});
/**
 * Exception safe version of `run!`. It always returns an promise instance.
 */
promesa.exec.run = (function promesa$exec$run(var_args){
var G__42867 = arguments.length;
switch (G__42867) {
case 1:
return promesa.exec.run.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.run.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.run.cljs$core$IFn$_invoke$arity$1 = (function (f){
try{return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$1(f);
}catch (e42878){var cause = e42878;
return promesa.exec.rejected(cause);
}}));

(promesa.exec.run.cljs$core$IFn$_invoke$arity$2 = (function (executor,f){
try{return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(executor,f);
}catch (e42879){var cause = e42879;
return promesa.exec.rejected(cause);
}}));

(promesa.exec.run.cljs$lang$maxFixedArity = 2);

/**
 * Exception safe version of `submit!`. It always returns an promise instance.
 */
promesa.exec.submit = (function promesa$exec$submit(var_args){
var G__42882 = arguments.length;
switch (G__42882) {
case 1:
return promesa.exec.submit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.submit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.submit.cljs$core$IFn$_invoke$arity$1 = (function (f){
try{return promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$1(f);
}catch (e42884){var cause = e42884;
return promesa.exec.rejected(cause);
}}));

(promesa.exec.submit.cljs$core$IFn$_invoke$arity$2 = (function (executor,f){
try{return promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$2(executor,f);
}catch (e42885){var cause = e42885;
return promesa.exec.rejected(cause);
}}));

(promesa.exec.submit.cljs$lang$maxFixedArity = 2);

/**
 * Exception safe version of `schedule!`. It always returns an promise instance.
 */
promesa.exec.schedule = (function promesa$exec$schedule(var_args){
var G__42888 = arguments.length;
switch (G__42888) {
case 2:
return promesa.exec.schedule.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.exec.schedule.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.schedule.cljs$core$IFn$_invoke$arity$2 = (function (ms,f){
try{return promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$2(ms,f);
}catch (e42889){var cause = e42889;
return promesa.exec.rejected(cause);
}}));

(promesa.exec.schedule.cljs$core$IFn$_invoke$arity$3 = (function (scheduler,ms,f){
try{return promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3(scheduler,ms,f);
}catch (e42891){var cause = e42891;
return promesa.exec.rejected(cause);
}}));

(promesa.exec.schedule.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {promesa.protocols.IScheduler}
*/
promesa.exec.Scheduler = (function (){
});
(promesa.exec.Scheduler.prototype.promesa$protocols$IScheduler$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.Scheduler.prototype.promesa$protocols$IScheduler$_schedule_BANG_$arity$3 = (function (_,ms,f){
var self__ = this;
var ___$1 = this;
var df = promesa.impl.promise.deferred();
var tid = setTimeout((function (){
try{return promesa.protocols._resolve_BANG_(df,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}catch (e42899){var cause = e42899;
return promesa.protocols._reject_BANG_(df,cause);
}}),ms);
promesa.protocols._fnly(df,(function (___$2,c){
if(cljs.core.truth_(promesa.impl.promise.isCancellationError(c))){
return clearTimeout(tid);
} else {
return null;
}
}));

return df;
}));

(promesa.exec.Scheduler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(promesa.exec.Scheduler.cljs$lang$type = true);

(promesa.exec.Scheduler.cljs$lang$ctorStr = "promesa.exec/Scheduler");

(promesa.exec.Scheduler.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"promesa.exec/Scheduler");
}));

/**
 * Positional factory function for promesa.exec/Scheduler.
 */
promesa.exec.__GT_Scheduler = (function promesa$exec$__GT_Scheduler(){
return (new promesa.exec.Scheduler());
});

/**
 * A scheduled thread pool constructor. A ScheduledExecutor (IScheduler
 *   in CLJS) instance allows execute asynchronous tasks some time later.
 */
promesa.exec.scheduled_executor = (function promesa$exec$scheduled_executor(var_args){
var args__5755__auto__ = [];
var len__5749__auto___42986 = arguments.length;
var i__5750__auto___42987 = (0);
while(true){
if((i__5750__auto___42987 < len__5749__auto___42986)){
args__5755__auto__.push((arguments[i__5750__auto___42987]));

var G__42988 = (i__5750__auto___42987 + (1));
i__5750__auto___42987 = G__42988;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return promesa.exec.scheduled_executor.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(promesa.exec.scheduled_executor.cljs$core$IFn$_invoke$arity$variadic = (function (p__42905){
var map__42906 = p__42905;
var map__42906__$1 = cljs.core.__destructure_map(map__42906);
var options = map__42906__$1;
var parallelism = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42906__$1,new cljs.core.Keyword(null,"parallelism","parallelism",-930922333),(1));
return promesa.exec.__GT_Scheduler();
}));

(promesa.exec.scheduled_executor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(promesa.exec.scheduled_executor.cljs$lang$applyTo = (function (seq42904){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42904));
}));


/**
* @constructor
 * @implements {promesa.protocols.IExecutor}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.exec.t_promesa$exec42912 = (function (meta42913){
this.meta42913 = meta42913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(promesa.exec.t_promesa$exec42912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42914,meta42913__$1){
var self__ = this;
var _42914__$1 = this;
return (new promesa.exec.t_promesa$exec42912(meta42913__$1));
}));

(promesa.exec.t_promesa$exec42912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42914){
var self__ = this;
var _42914__$1 = this;
return self__.meta42913;
}));

(promesa.exec.t_promesa$exec42912.prototype.promesa$protocols$IExecutor$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.t_promesa$exec42912.prototype.promesa$protocols$IExecutor$_exec_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return null;
}catch (e42918){var _ = e42918;
return null;
}}));

(promesa.exec.t_promesa$exec42912.prototype.promesa$protocols$IExecutor$_run_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
try{return promesa.protocols._promise(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(promesa.exec.noop,f));
}catch (e42922){var cause = e42922;
return promesa.protocols._promise(cause);
}}));

(promesa.exec.t_promesa$exec42912.prototype.promesa$protocols$IExecutor$_submit_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
try{return promesa.protocols._promise((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}catch (e42923){var cause = e42923;
return promesa.protocols._promise(cause);
}}));

(promesa.exec.t_promesa$exec42912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42913","meta42913",-555016602,null)], null);
}));

(promesa.exec.t_promesa$exec42912.cljs$lang$type = true);

(promesa.exec.t_promesa$exec42912.cljs$lang$ctorStr = "promesa.exec/t_promesa$exec42912");

(promesa.exec.t_promesa$exec42912.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"promesa.exec/t_promesa$exec42912");
}));

/**
 * Positional factory function for promesa.exec/t_promesa$exec42912.
 */
promesa.exec.__GT_t_promesa$exec42912 = (function promesa$exec$__GT_t_promesa$exec42912(meta42913){
return (new promesa.exec.t_promesa$exec42912(meta42913));
});


/**
 * Creates an executor instance that run tasks in the same thread.
 */
promesa.exec.current_thread_executor = (function promesa$exec$current_thread_executor(){
return (new promesa.exec.t_promesa$exec42912(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {promesa.protocols.IExecutor}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.exec.t_promesa$exec42934 = (function (meta42935){
this.meta42935 = meta42935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(promesa.exec.t_promesa$exec42934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42936,meta42935__$1){
var self__ = this;
var _42936__$1 = this;
return (new promesa.exec.t_promesa$exec42934(meta42935__$1));
}));

(promesa.exec.t_promesa$exec42934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42936){
var self__ = this;
var _42936__$1 = this;
return self__.meta42935;
}));

(promesa.exec.t_promesa$exec42934.prototype.promesa$protocols$IExecutor$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.t_promesa$exec42934.prototype.promesa$protocols$IExecutor$_exec_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.impl.promise.nextTick(f);
}));

(promesa.exec.t_promesa$exec42934.prototype.promesa$protocols$IExecutor$_run_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.protocols._fmap(promesa.protocols._fmap(promesa.protocols._promise(null),(function (_){
try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}catch (e42941){var ___$1 = e42941;
return null;
}})),promesa.exec.noop);
}));

(promesa.exec.t_promesa$exec42934.prototype.promesa$protocols$IExecutor$_submit_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.protocols._fmap(promesa.protocols._promise(null),(function (_){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}));
}));

(promesa.exec.t_promesa$exec42934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42935","meta42935",1008613526,null)], null);
}));

(promesa.exec.t_promesa$exec42934.cljs$lang$type = true);

(promesa.exec.t_promesa$exec42934.cljs$lang$ctorStr = "promesa.exec/t_promesa$exec42934");

(promesa.exec.t_promesa$exec42934.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"promesa.exec/t_promesa$exec42934");
}));

/**
 * Positional factory function for promesa.exec/t_promesa$exec42934.
 */
promesa.exec.__GT_t_promesa$exec42934 = (function promesa$exec$__GT_t_promesa$exec42934(meta42935){
return (new promesa.exec.t_promesa$exec42934(meta42935));
});


/**
 * An IExecutor that schedules tasks to be executed in the MicrotasksQueue.
 */
promesa.exec.microtask_executor = (function promesa$exec$microtask_executor(){
return (new promesa.exec.t_promesa$exec42934(cljs.core.PersistentArrayMap.EMPTY));
});
promesa.exec.close_BANG_ = (function promesa$exec$close_BANG_(var_args){
var G__42955 = arguments.length;
switch (G__42955) {
case 1:
return promesa.exec.close_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.close_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.close_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (o){
return promesa.protocols._close_BANG_(o);
}));

(promesa.exec.close_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (o,reason){
return promesa.protocols._close_BANG_(o,reason);
}));

(promesa.exec.close_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=promesa.exec.js.map
