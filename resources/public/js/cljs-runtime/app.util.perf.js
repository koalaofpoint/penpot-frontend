import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$react.js";
import "./shadow.js.shim.module$tdigest.js";
import "./app.common.math.js";
import "./goog.functions.functions.js";
import "./rumext.v2.js";
goog.provide('app.util.perf');
app.util.perf.tdigest = (function app$util$perf$tdigest(){
var x47476 = (new shadow.js.shim.module$tdigest.TDigest());
(x47476.cljs$core$ITransientCollection$ = cljs.core.PROTOCOL_SENTINEL);

(x47476.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (this$,n){
var this$__$1 = this;
this$__$1.push(n);

return this$__$1;
}));

(x47476.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));

return x47476;
});
app.util.perf.tdigest_summary = (function app$util$perf$tdigest_summary(td){
return ["samples=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((td["n"])),"\n","Q50=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(td.percentile(0.5)),"\n","Q75=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(td.percentile(0.75)),"\n","Q95=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(td.percentile(0.9)),"\n","MAX=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(td.percentile((1)))].join('');
});
app.util.perf.timestamp = (function app$util$perf$timestamp(){
return performance.now();
});
app.util.perf.registry = (new Map());
app.util.perf.register_measure = (function (){var insert_BANG_ = (function (name,measure){
var td = app.util.perf.registry.get(name);
if(cljs.core.truth_(td)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(td,measure);
} else {
return app.util.perf.registry.set(name,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(app.util.perf.tdigest(),measure));
}
});
var print_single_summary_BANG_ = (function (name,td){
return console.log(["[measure: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"] ",app.util.perf.tdigest_summary(td)].join(''));
});
var print_summary_BANG_ = goog.functions.debounce((function (){
return app.util.perf.registry.forEach((function (td,name){
return print_single_summary_BANG_(name,td);
}));
}),(500));
return (function (name,measure){
insert_BANG_(name,measure);

return (print_summary_BANG_.cljs$core$IFn$_invoke$arity$0 ? print_summary_BANG_.cljs$core$IFn$_invoke$arity$0() : print_summary_BANG_.call(null));
});
})();
app.util.perf.measurable = (function app$util$perf$measurable(name,f){
return (function() { 
var G__47616__delegate = function (args){
var start__47465__auto__ = app.util.perf.timestamp();
var res__47466__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var end__47467__auto__ = app.util.perf.timestamp();
app.util.perf.register_measure(name,(end__47467__auto__ - start__47465__auto__));

return res__47466__auto__;
};
var G__47616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47617__i = 0, G__47617__a = new Array(arguments.length -  0);
while (G__47617__i < G__47617__a.length) {G__47617__a[G__47617__i] = arguments[G__47617__i + 0]; ++G__47617__i;}
  args = new cljs.core.IndexedSeq(G__47617__a,0,null);
} 
return G__47616__delegate.call(this,args);};
G__47616.cljs$lang$maxFixedArity = 0;
G__47616.cljs$lang$applyTo = (function (arglist__47618){
var args = cljs.core.seq(arglist__47618);
return G__47616__delegate(args);
});
G__47616.cljs$core$IFn$_invoke$arity$variadic = G__47616__delegate;
return G__47616;
})()
;
});
app.util.perf.on_render_factory = (function app$util$perf$on_render_factory(label){
var td = app.util.perf.tdigest();
var log = goog.functions.debounce((function (phase,td__$1){
return console.log(["[profile: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(phase),")] ",app.util.perf.tdigest_summary(td__$1)].join(''));
}),(300));
return (function (id,phase,adur,bdur,st,ct,itx){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(td,adur);

return (log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(phase,td) : log.call(null,phase,td));
});
});
app.util.perf.profiler = (function app$util$perf$profiler(props_47502){
var props = props_47502;
var children = (props["children"]);
var label = (props["label"]);
var enabled_QMARK_ = (props["enabled"]);
var enabled_QMARK___$1 = (((enabled_QMARK_ == null))?true:enabled_QMARK_);
var on_render = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(label)],(function (){
return app.util.perf.on_render_factory(label);
}));
if(cljs.core.truth_(enabled_QMARK___$1)){
return rumext.v2.create_element(shadow.js.shim.module$react.Profiler,({"id": label, "onRender": on_render}),children);
} else {
return children;
}
});

(app.util.perf.profiler.displayName = "profiler");

app.util.perf.benchmark = (function app$util$perf$benchmark(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47623 = arguments.length;
var i__5750__auto___47624 = (0);
while(true){
if((i__5750__auto___47624 < len__5749__auto___47623)){
args__5755__auto__.push((arguments[i__5750__auto___47624]));

var G__47625 = (i__5750__auto___47624 + (1));
i__5750__auto___47624 = G__47625;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.util.perf.benchmark.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.util.perf.benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (p__47532){
var map__47533 = p__47532;
var map__47533__$1 = cljs.core.__destructure_map(map__47533);
var run_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47533__$1,new cljs.core.Keyword(null,"run-fn","run-fn",1067056862));
var chk_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47533__$1,new cljs.core.Keyword(null,"chk-fn","chk-fn",1965574268));
var iterations = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47533__$1,new cljs.core.Keyword(null,"iterations","iterations",-1402710890),(10000));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47533__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var gc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47533__$1,new cljs.core.Keyword(null,"gc","gc",-177389165));
var end_mark = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),":end"].join('');
var blackhole = cljs.core.volatile_BANG_(null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["=> benchmarking:",name], 0));

if(cljs.core.truth_(gc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-> force gc: true"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--> warming up:  ",(iterations * (2))], 0));

if(cljs.core.fn_QMARK_(gc)){
(gc.cljs$core$IFn$_invoke$arity$0 ? gc.cljs$core$IFn$_invoke$arity$0() : gc.call(null));
} else {
}

var i_47626 = (iterations * (2));
while(true){
if((i_47626 > (0))){
cljs.core.vreset_BANG_(blackhole,(run_fn.cljs$core$IFn$_invoke$arity$0 ? run_fn.cljs$core$IFn$_invoke$arity$0() : run_fn.call(null)));

var G__47627 = (i_47626 - (1));
i_47626 = G__47627;
continue;
} else {
}
break;
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--> benchmarking:",iterations], 0));

if(cljs.core.fn_QMARK_(gc)){
(gc.cljs$core$IFn$_invoke$arity$0 ? gc.cljs$core$IFn$_invoke$arity$0() : gc.call(null));
} else {
}

performance.mark(name);

var i_47628 = iterations;
while(true){
if((i_47628 > (0))){
cljs.core.vreset_BANG_(blackhole,(run_fn.cljs$core$IFn$_invoke$arity$0 ? run_fn.cljs$core$IFn$_invoke$arity$0() : run_fn.call(null)));

var G__47629 = (i_47628 - (1));
i_47628 = G__47629;
continue;
} else {
}
break;
}

performance.measure(end_mark,name);

if(cljs.core.fn_QMARK_(chk_fn)){
if(cljs.core.truth_((function (){var G__47542 = cljs.core.deref(blackhole);
return (chk_fn.cljs$core$IFn$_invoke$arity$1 ? chk_fn.cljs$core$IFn$_invoke$arity$1(G__47542) : chk_fn.call(null,G__47542));
})())){
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--> EE: failed chk-fn"], 0));
}
} else {
}

var vec__47543 = performance.getEntriesByName(end_mark);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47543,(0),null);
var duration = app.common.math.precision(result.duration,(4));
var avg = app.common.math.precision((duration / iterations),(4));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--> TOTAL:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration)," ms"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--> AVG  :",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(avg)," ms"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

performance.clearMarks(name);

performance.clearMeasures(end_mark);

return ({"duration": duration, "avg": avg});
}));

(app.util.perf.benchmark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.util.perf.benchmark.cljs$lang$applyTo = (function (seq47515){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47515));
}));

app.util.perf.now = (function app$util$perf$now(){
return performance.now();
});
/**
 * Create a measurement checkpoint for time measurement of potentially
 *   asynchronous flow.
 */
app.util.perf.tpoint = (function app$util$perf$tpoint(){
var p1 = app.util.perf.now();
return (function (){
return Math.floor((app.util.perf.now() - p1));
});
});
app.util.perf.measure_time_to_render = (function app$util$perf$measure_time_to_render(event){
if((((typeof globalThis !== 'undefined')) && ((((!((globalThis.requestAnimationFrame == null)))) && ((((!((globalThis.scheduler == null)))) && ((!((globalThis.scheduler.postTask == null)))))))))){
var start = app.util.perf.timestamp();
return requestAnimationFrame((function (){
return scheduler.postTask((function (){
var end = app.util.perf.timestamp();
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event),"]",cljs.core.str.cljs$core$IFn$_invoke$arity$1((end - start))].join('')], 0));
}),({"priority": "user-blocking"}));
}));
} else {
return null;
}
});
if((typeof app !== 'undefined') && (typeof app.util !== 'undefined') && (typeof app.util.perf !== 'undefined') && (typeof app.util.perf.longtask_observer_STAR_ !== 'undefined')){
} else {
app.util.perf.longtask_observer_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof app !== 'undefined') && (typeof app.util !== 'undefined') && (typeof app.util.perf !== 'undefined') && (typeof app.util.perf.stall_timer_STAR_ !== 'undefined')){
} else {
app.util.perf.stall_timer_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof app !== 'undefined') && (typeof app.util !== 'undefined') && (typeof app.util.perf !== 'undefined') && (typeof app.util.perf.current_op_STAR_ !== 'undefined')){
} else {
app.util.perf.current_op_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
app.util.perf.install_long_task_observer = (function app$util$perf$install_long_task_observer(){
if((((!((window.PerformanceObserver == null)))) && ((cljs.core.deref(app.util.perf.longtask_observer_STAR_) == null)))){
var observer = (new PerformanceObserver((function (list,_){
var seq__47597 = cljs.core.seq(list.getEntries());
var chunk__47598 = null;
var count__47599 = (0);
var i__47600 = (0);
while(true){
if((i__47600 < count__47599)){
var entry = chunk__47598.cljs$core$IIndexed$_nth$arity$2(null,i__47600);
var dur_47633 = entry.duration;
var start_47634 = entry.startTime;
var attrib_47635 = entry.attribution;
var attrib_count_47636 = (cljs.core.truth_(attrib_47635)?attrib_47635.length:null);
var first_attrib_47637 = (cljs.core.truth_((function (){var and__5023__auto__ = attrib_count_47636;
if(cljs.core.truth_(and__5023__auto__)){
return (attrib_count_47636 > (0));
} else {
return and__5023__auto__;
}
})())?(attrib_47635[(0)]):null);
var attrib_name_47638 = (cljs.core.truth_(first_attrib_47637)?first_attrib_47637.name:null);
var attrib_ctype_47639 = (cljs.core.truth_(first_attrib_47637)?first_attrib_47637.containerType:null);
var attrib_cid_47640 = (cljs.core.truth_(first_attrib_47637)?first_attrib_47637.containerId:null);
var attrib_csrc_47641 = (cljs.core.truth_(first_attrib_47637)?first_attrib_47637.containerSrc:null);
console.warn(["[perf] long task ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(dur_47633)),"ms at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(start_47634)),"ms",(cljs.core.truth_(first_attrib_47637)?[" attrib:name=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attrib_name_47638)," ctype=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attrib_ctype_47639)," cid=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attrib_cid_47640)," csrc=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attrib_csrc_47641)].join(''):null)].join(''));


var G__47642 = seq__47597;
var G__47643 = chunk__47598;
var G__47644 = count__47599;
var G__47645 = (i__47600 + (1));
seq__47597 = G__47642;
chunk__47598 = G__47643;
count__47599 = G__47644;
i__47600 = G__47645;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__47597);
if(temp__5825__auto__){
var seq__47597__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47597__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__47597__$1);
var G__47646 = cljs.core.chunk_rest(seq__47597__$1);
var G__47647 = c__5548__auto__;
var G__47648 = cljs.core.count(c__5548__auto__);
var G__47649 = (0);
seq__47597 = G__47646;
chunk__47598 = G__47647;
count__47599 = G__47648;
i__47600 = G__47649;
continue;
} else {
var entry = cljs.core.first(seq__47597__$1);
var dur_47650 = entry.duration;
var start_47651 = entry.startTime;
var attrib_47652 = entry.attribution;
var attrib_count_47653 = (cljs.core.truth_(attrib_47652)?attrib_47652.length:null);
var first_attrib_47654 = (cljs.core.truth_((function (){var and__5023__auto__ = attrib_count_47653;
if(cljs.core.truth_(and__5023__auto__)){
return (attrib_count_47653 > (0));
} else {
return and__5023__auto__;
}
})())?(attrib_47652[(0)]):null);
var attrib_name_47655 = (cljs.core.truth_(first_attrib_47654)?first_attrib_47654.name:null);
var attrib_ctype_47656 = (cljs.core.truth_(first_attrib_47654)?first_attrib_47654.containerType:null);
var attrib_cid_47657 = (cljs.core.truth_(first_attrib_47654)?first_attrib_47654.containerId:null);
var attrib_csrc_47658 = (cljs.core.truth_(first_attrib_47654)?first_attrib_47654.containerSrc:null);
console.warn(["[perf] long task ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(dur_47650)),"ms at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(start_47651)),"ms",(cljs.core.truth_(first_attrib_47654)?[" attrib:name=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attrib_name_47655)," ctype=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attrib_ctype_47656)," cid=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attrib_cid_47657)," csrc=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attrib_csrc_47658)].join(''):null)].join(''));


var G__47659 = cljs.core.next(seq__47597__$1);
var G__47660 = null;
var G__47661 = (0);
var G__47662 = (0);
seq__47597 = G__47659;
chunk__47598 = G__47660;
count__47599 = G__47661;
i__47600 = G__47662;
continue;
}
} else {
return null;
}
}
break;
}
})));
observer.observe(({"entryTypes": ["longtask"]}));

return cljs.core.reset_BANG_(app.util.perf.longtask_observer_STAR_,observer);
} else {
return null;
}
});
/**
 * Log event loop stalls by measuring setInterval drift.
 * 
 *   Params:
 *  - interval-ms: base interval
 *  - threshold-ms: drift over which we report
 *   
 */
app.util.perf.start_event_loop_stall_logger = (function app$util$perf$start_event_loop_stall_logger(interval_ms,threshold_ms){
if((cljs.core.deref(app.util.perf.stall_timer_STAR_) == null)){
var last = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(performance.now());
var id = setInterval((function (){
var now = performance.now();
var expected = (cljs.core.deref(last) + interval_ms);
var drift = (now - expected);
var current_op = cljs.core.deref(app.util.perf.current_op_STAR_);
var measures = performance.getEntriesByType("measure");
var mlen = measures.length;
var last_measure = (((mlen > (0)))?(measures[(mlen - (1))]):null);
var meas_name = (cljs.core.truth_(last_measure)?last_measure.name:null);
var meas_detail = (cljs.core.truth_(last_measure)?last_measure.detail:null);
var meas_count = (cljs.core.truth_(meas_detail)?(meas_detail["count"]):null);
cljs.core.reset_BANG_(last,now);

if((drift > threshold_ms)){
return console.warn(["[perf] event loop stall: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(drift)),"ms",(cljs.core.truth_(current_op)?[" op=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_op)].join(''):null),(cljs.core.truth_(meas_name)?[" last=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(meas_name)].join(''):null),(cljs.core.truth_(meas_count)?[" count=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(meas_count)].join(''):null)].join(''));
} else {
return null;
}
}),interval_ms);
return cljs.core.reset_BANG_(app.util.perf.stall_timer_STAR_,id);
} else {
return null;
}
});
/**
 * Install perf observers in dev builds. Safe to call multiple times.
 *   Perf logs are disabled by default. Enable them with the :perf-logs
 *   flag in config.
 */
app.util.perf.setup = (function app$util$perf$setup(){
app.util.perf.install_long_task_observer();

app.util.perf.start_event_loop_stall_logger((50),(100));

var api = ({"reset": (function (){
try{performance.clearMarks();

return performance.clearMeasures();
}catch (e47613){var _ = e47613;
return null;
}})});
return (window["PenpotPerf"] = api);
});

//# sourceMappingURL=app.util.perf.js.map
