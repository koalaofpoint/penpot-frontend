import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.logging.js";
import "./app.common.math.js";
import "./app.common.time.js";
import "./app.util.object.js";
import "./beicon.v2.core.js";
goog.provide('app.util.queue');
app.common.logging.loggers.set("app.util.queue",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"info","info",-317069002)));
app.util.queue.create = (function app$util$queue$create(find_fn,threshold){
return ({"find-fn": find_fn, "items": [], "timeout": null, "time": (0), "threshold": threshold, "max-iterations": Infinity});
});
app.util.queue.next_process_time = (function app$util$queue$next_process_time(queue){
var time = (queue["time"]);
var threshold = (queue["threshold"]);
var max_time = (5000);
var min_time = (1000);
var calc_time = Math.min(Math.max(((time - threshold) * (10)),min_time),max_time);
if(app.common.logging.enabled_QMARK_("app.util.queue",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"queue::next-process-time"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),time], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threshold","threshold",204221583),threshold], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"calc-time","calc-time",1430633842),calc_time], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-time","max-time",857408479),max_time], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min-time","min-time",736615549),min_time], null)], null);
}),null)),null,null,"app.util.queue",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return calc_time;
});
app.util.queue.has_requested_process_QMARK_ = (function app$util$queue$has_requested_process_QMARK_(queue){
return (!(((queue["timeout"]) == null)));
});
app.util.queue.cancel_process_BANG_ = (function app$util$queue$cancel_process_BANG_(queue){
if(app.common.logging.enabled_QMARK_("app.util.queue",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"queue::cancel-process"], null)], null);
}),null)),null,null,"app.util.queue",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


var timeout_68063 = (queue["timeout"]);
if((!((timeout_68063 == null)))){
clearTimeout(timeout_68063);
} else {
}

(queue["timeout"] = null);

return queue;
});
app.util.queue.process = (function app$util$queue$process(queue,iterations){
var threshold = (queue["threshold"]);
var max_iterations = (queue["max-iterations"]);
var items = (queue["items"]);
var item = items.shift();
if((!((item == null)))){
var tp = app.common.time.tpoint_ms();
var f = (item["f"]);
var res = (item["result"]);
return beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$4((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),(function (o){
return res.next(o);
}),(function (e){
return res.error(e);
}),(function (){
res.complete();

var duration = tp();
var time = (queue["time"]);
var time__$1 = (time + duration);
(queue["time"] = time__$1);

if((((time__$1 > threshold)) || ((iterations >= max_iterations)))){
var G__68057 = queue;
var G__68058 = (0);
var G__68059 = app.util.queue.next_process_time(queue);
return (app.util.queue.request_process.cljs$core$IFn$_invoke$arity$3 ? app.util.queue.request_process.cljs$core$IFn$_invoke$arity$3(G__68057,G__68058,G__68059) : app.util.queue.request_process.call(null,G__68057,G__68058,G__68059));
} else {
var G__68060 = queue;
var G__68061 = (iterations + (1));
var G__68062 = (0);
return (app.util.queue.request_process.cljs$core$IFn$_invoke$arity$3 ? app.util.queue.request_process.cljs$core$IFn$_invoke$arity$3(G__68060,G__68061,G__68062) : app.util.queue.request_process.call(null,G__68060,G__68061,G__68062));
}
}));
} else {
return null;
}
});
app.util.queue.request_process = (function app$util$queue$request_process(queue,iterations,time){
if(app.common.logging.enabled_QMARK_("app.util.queue",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"queue::request-process"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),time], null)], null);
}),null)),null,null,"app.util.queue",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return (queue["timeout"] = setTimeout((function (){
(queue["timeout"] = null);

return app.util.queue.process(queue,iterations);
}),time));
});
app.util.queue.enqueue_first = (function app$util$queue$enqueue_first(queue,item){
var items = (queue["items"]);
items.unshift(item);

if(app.util.queue.has_requested_process_QMARK_(queue)){
return null;
} else {
return app.util.queue.request_process(queue,(0),app.util.queue.next_process_time(queue));
}
});
app.util.queue.enqueue_last = (function app$util$queue$enqueue_last(queue,item){
var items = (queue["items"]);
items.push(item);

if(app.util.queue.has_requested_process_QMARK_(queue)){
return null;
} else {
return app.util.queue.request_process(queue,(0),app.util.queue.next_process_time(queue));
}
});
app.util.queue.enqueue_unique = (function app$util$queue$enqueue_unique(queue,request,f){
var items = (queue["items"]);
var find_fn = (queue["find-fn"]);
var result = beicon.v2.core.subject();
(request["result"] = result);

(request["f"] = f);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((request["tag"]),"frame")){
var item_68064 = items.find(find_fn);
if(cljs.core.truth_(item_68064)){
var other_result_68065 = (item_68064["result"]);
beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$2(other_result_68065,result);
} else {
app.util.queue.enqueue_first(queue,request);
}
} else {
var item_68066 = items.findLast(find_fn);
if(cljs.core.truth_(item_68066)){
var other_result_68067 = (item_68066["result"]);
beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$2(other_result_68067,result);
} else {
app.util.queue.enqueue_last(queue,request);
}
}

return beicon.v2.core.to_observable(result);
});
app.util.queue.clear_BANG_ = (function app$util$queue$clear_BANG_(queue){
return app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.queue.cancel_process_BANG_(queue),"items",[]),"time",(0));
});

//# sourceMappingURL=app.util.queue.js.map
