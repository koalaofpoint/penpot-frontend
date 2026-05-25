import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$ua_parser_js.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.json.js";
import "./app.common.logging.js";
import "./app.common.math.js";
import "./app.common.time.js";
import "./app.config.js";
import "./app.main.refs.js";
import "./app.main.repo.js";
import "./app.main.store.js";
import "./app.util.globals.js";
import "./app.util.http.js";
import "./app.util.i18n.js";
import "./app.util.object.js";
import "./app.util.perf.js";
import "./app.util.storage.js";
import "./beicon.v2.core.js";
import "./beicon.v2.operators.js";
import "./lambdaisland.uri.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.event');
app.common.logging.loggers.set("app.main.data.event",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"info","info",-317069002)));
app.main.data.event.max_buffer_size = (1024);
app.main.data.event.max_chunk_size = (100);
app.main.data.event.session_timeout = (((1000) * (60)) * (30));
app.main.data.event.min_longtask_time = (1000);
app.main.data.event.debounce_longtask_time = (1000);
app.main.data.event.min_browser_event_time = (1000);
app.main.data.event.debounce_browser_event_time = (1000);
app.main.data.event.min_performace_event_time = (1000);
app.main.data.event.debounce_performance_event_time = (1000);
app.main.data.event.micro_benchmark_iterations = 1000000.0;
app.main.data.event.collect_context = (function app$main$data$event$collect_context(){
var uagent = (new shadow.js.shim.module$ua_parser_js.UAParser());
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"full","full",436801220).cljs$core$IFn$_invoke$arity$1(app.config.version),new cljs.core.Keyword(null,"locale","locale",-2115712697),app.util.i18n._STAR_current_locale_STAR_], null),(function (){var browser = uagent.getBrowser();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"browser","browser",828191719),app.util.object.get.cljs$core$IFn$_invoke$arity$2(browser,"name"),new cljs.core.Keyword(null,"browser-version","browser-version",148347308),app.util.object.get.cljs$core$IFn$_invoke$arity$2(browser,"version")], null);
})(),(function (){var engine = uagent.getEngine();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"engine","engine",1459054265),app.util.object.get.cljs$core$IFn$_invoke$arity$2(engine,"name"),new cljs.core.Keyword(null,"engine-version","engine-version",2033807870),app.util.object.get.cljs$core$IFn$_invoke$arity$2(engine,"version")], null);
})(),(function (){var os = uagent.getOS();
var name = app.util.object.get.cljs$core$IFn$_invoke$arity$2(os,"name");
var version = app.util.object.get.cljs$core$IFn$_invoke$arity$2(os,"version");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"os","os",795021913),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(version)].join(''),new cljs.core.Keyword(null,"os-version","os-version",409171217),version], null);
})(),(function (){var device = uagent.getDevice();
var temp__5823__auto__ = app.util.object.get.cljs$core$IFn$_invoke$arity$2(device,"type");
if(cljs.core.truth_(temp__5823__auto__)){
var type = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"device-type","device-type",-1461223759),type,new cljs.core.Keyword(null,"device-vendor","device-vendor",2012647423),app.util.object.get.cljs$core$IFn$_invoke$arity$2(device,"vendor"),new cljs.core.Keyword(null,"device-model","device-model",-1108995606),app.util.object.get.cljs$core$IFn$_invoke$arity$2(device,"model")], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"device-type","device-type",-1461223759),"unknown"], null);
}
})(),(function (){var screen__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(app.util.globals.window,"screen");
var orientation = app.util.object.get.cljs$core$IFn$_invoke$arity$2(screen__$1,"orientation");
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen-width","screen-width",1557963263),app.util.object.get.cljs$core$IFn$_invoke$arity$2(screen__$1,"width"),new cljs.core.Keyword(null,"screen-height","screen-height",141363033),app.util.object.get.cljs$core$IFn$_invoke$arity$2(screen__$1,"height"),new cljs.core.Keyword(null,"screen-color-depth","screen-color-depth",-114651382),app.util.object.get.cljs$core$IFn$_invoke$arity$2(screen__$1,"colorDepth"),new cljs.core.Keyword(null,"screen-orientation","screen-orientation",-1569291418),app.util.object.get.cljs$core$IFn$_invoke$arity$2(orientation,"type")], null);
})(),(function (){var cpu = uagent.getCPU();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"device-arch","device-arch",-313234416),app.util.object.get.cljs$core$IFn$_invoke$arity$2(cpu,"architecture")], null);
})()], 0));
});
app.main.data.event.context = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(app.main.data.event.collect_context()));
cljs.core.add_watch(app.util.i18n.locale,"events",(function (p1__51741_SHARP_,p2__51742_SHARP_,p3__51743_SHARP_,p4__51740_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.data.event.context,cljs.core.assoc,new cljs.core.Keyword(null,"locale","locale",-2115712697),p4__51740_SHARP_);
}));

/**
 * @interface
 */
app.main.data.event.Event = function(){};

var app$main$data$event$Event$_data$dyn_51876 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.main.data.event._data[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.main.data.event._data["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Event.-data",_);
}
}
});
/**
 * Get event data
 */
app.main.data.event._data = (function app$main$data$event$_data(_){
if((((!((_ == null)))) && ((!((_.app$main$data$event$Event$_data$arity$1 == null)))))){
return _.app$main$data$event$Event$_data$arity$1(_);
} else {
return app$main$data$event$Event$_data$dyn_51876(_);
}
});


/**
 * @interface
 */
app.main.data.event.PerformanceEvent = function(){};

app.main.data.event.coerce_to_string = (function app$main$data$event$coerce_to_string(v){
if((v instanceof cljs.core.Keyword)){
return cljs.core.name(v);
} else {
if(typeof v === 'string'){
return v;
} else {
if((v == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);

}
}
}
});
app.main.data.event.xf_COLON_coerce_to_string = cljs.core.keep.cljs$core$IFn$_invoke$arity$1(app.main.data.event.coerce_to_string);
/**
 * Removes complex data types from props.
 */
app.main.data.event.simplify_props = (function app$main$data$event$simplify_props(data){
return cljs.core.reduce_kv((function (data__$1,k,v){
if(cljs.core.map_QMARK_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,k,new cljs.core.Keyword("placeholder","map","placeholder/map",-43461776));
} else {
if(cljs.core.vector_QMARK_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,k,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.main.data.event.xf_COLON_coerce_to_string,v));
} else {
if(cljs.core.set_QMARK_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,k,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.main.data.event.xf_COLON_coerce_to_string,v));
} else {
if(cljs.core.coll_QMARK_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,k,new cljs.core.Keyword("placeholder","coll","placeholder/coll",-2075266112));
} else {
if(cljs.core.fn_QMARK_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,k,new cljs.core.Keyword("placeholder","fn","placeholder/fn",-761763945));
} else {
if((v == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data__$1,k);
} else {
return data__$1;

}
}
}
}
}
}
}),data,data);
});
app.main.data.event.add_external_context_info = (function app$main$data$event$add_external_context_info(context){
var external_context_info = app.common.json.__GT_clj(app.config.external_context_info());
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([context,external_context_info], 0));
});
app.main.data.event.make_proto_event = (function app$main$data$event$make_proto_event(event){
var data = app.common.data.deep_merge.cljs$core$IFn$_invoke$arity$2(app.main.data.event._data(event),cljs.core.meta(event));
var type = potok.v2.core.type(event);
var ev_name = cljs.core.name(type);
var context = app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app.main.data.event","context","app.main.data.event/context",-411684139).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"event-origin","event-origin",-1803146545),new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"event-namespace","event-namespace",-1246033011),cljs.core.namespace(type)),new cljs.core.Keyword(null,"event-symbol","event-symbol",-1673621604),ev_name));
var props = app.main.data.event.simplify_props(app.common.data.without_qualified.cljs$core$IFn$_invoke$arity$1(data));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.main.data.event","type","app.main.data.event/type",-599808406).cljs$core$IFn$_invoke$arity$2(data,"action"),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837).cljs$core$IFn$_invoke$arity$2(data,ev_name),new cljs.core.Keyword(null,"context","context",-830191113),context,new cljs.core.Keyword(null,"props","props",453281727),props], null);
});
app.main.data.event.make_data_event = (function app$main$data$event$make_data_event(event){
var data = cljs.core.deref(event);
var name = new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837).cljs$core$IFn$_invoke$arity$1(data);
if(typeof name === 'string'){
var type = new cljs.core.Keyword("app.main.data.event","type","app.main.data.event/type",-599808406).cljs$core$IFn$_invoke$arity$2(data,"action");
var context = app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app.main.data.event","context","app.main.data.event/context",-411684139).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"event-origin","event-origin",-1803146545),new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174).cljs$core$IFn$_invoke$arity$1(data)));
var props = app.main.data.event.simplify_props(app.common.data.without_qualified.cljs$core$IFn$_invoke$arity$1(data));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"context","context",-830191113),context,new cljs.core.Keyword(null,"props","props",453281727),props], null);
} else {
return null;
}
});
/**
 * Create a standard event
 */
app.main.data.event.make_event = (function app$main$data$event$make_event(var_args){
var G__51787 = arguments.length;
switch (G__51787) {
case 1:
return app.main.data.event.make_event.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.event.make_event.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.event.make_event.cljs$core$IFn$_invoke$arity$1 = (function (result){
var props = (result[(0)]);
var profile_id = (result[(1)]);
return app.main.data.event.make_event.cljs$core$IFn$_invoke$arity$2(profile_id,props);
}));

(app.main.data.event.make_event.cljs$core$IFn$_invoke$arity$2 = (function (profile_id,event){
var temp__5825__auto__ = (((((!((event == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === event.app$main$data$event$Event$))))?true:(((!event.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(app.main.data.event.Event,event):false)):cljs.core.native_satisfies_QMARK_(app.main.data.event.Event,event)))?app.main.data.event.make_proto_event(event):((potok.v2.core.data_event_QMARK_(event))?app.main.data.event.make_data_event(event):null));
if(cljs.core.truth_(temp__5825__auto__)){
var event__$1 = temp__5825__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(event__$1,new cljs.core.Keyword(null,"profile-id","profile-id",1866572309),profile_id);
} else {
return null;
}
}));

(app.main.data.event.make_event.cljs$lang$maxFixedArity = 2);

/**
 * Create a performance trigger event
 */
app.main.data.event.make_performance_event = (function app$main$data$event$make_performance_event(var_args){
var G__51791 = arguments.length;
switch (G__51791) {
case 1:
return app.main.data.event.make_performance_event.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.event.make_performance_event.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.event.make_performance_event.cljs$core$IFn$_invoke$arity$1 = (function (result){
var props = (result[(0)]);
var profile_id = (result[(1)]);
return app.main.data.event.make_performance_event.cljs$core$IFn$_invoke$arity$2(profile_id,props);
}));

(app.main.data.event.make_performance_event.cljs$core$IFn$_invoke$arity$2 = (function (profile_id,props){
var perf_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"performance-info","performance-info",-492900708));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"trigger",new cljs.core.Keyword(null,"name","name",1843675177),["performance-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-stats","file-stats",1549464101),new cljs.core.Keyword(null,"counters","counters",33475982).cljs$core$IFn$_invoke$arity$1(perf_info)], null),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837)),new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(perf_info)),new cljs.core.Keyword(null,"profile-id","profile-id",1866572309),profile_id], null);
}));

(app.main.data.event.make_performance_event.cljs$lang$maxFixedArity = 2);

/**
 * Process performance sensitive events
 */
app.main.data.event.process_performance_event = (function app$main$data$event$process_performance_event(result){
var event = (result[(0)]);
var profile_id = (result[(1)]);
if((((!((event == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === event.app$main$data$event$PerformanceEvent$))))?true:(((!event.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(app.main.data.event.PerformanceEvent,event):false)):cljs.core.native_satisfies_QMARK_(app.main.data.event.PerformanceEvent,event))){
return beicon.v2.core.create((function (subs){
var start = app.util.perf.now();
requestAnimationFrame((function (){
return scheduler.postTask((function (){
var time = (app.util.perf.now() - start);
if((time > (1000))){
subs.next(app.main.data.event.make_performance_event.cljs$core$IFn$_invoke$arity$2(profile_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"blocking-event",new cljs.core.Keyword(null,"event-name","event-name",927259778),app.common.data.name(potok.v2.core.type(event)),new cljs.core.Keyword(null,"duration","duration",1444101068),time], null)));
} else {
}

return subs.complete();
}),({"priority": "user-blocking"}));
}));

return null;
}));
} else {
return beicon.v2.core.empty();
}
});
app.main.data.event.append_to_buffer = (function app$main$data$event$append_to_buffer(buffer,item){
if((cljs.core.count(buffer) >= (1024))){
return buffer;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffer,item);
}
});
app.main.data.event.remove_from_buffer = (function app$main$data$event$remove_from_buffer(buffer,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),cljs.core.drop.cljs$core$IFn$_invoke$arity$1(items),buffer);
});
app.main.data.event.persist_events = (function app$main$data$event$persist_events(events){
if(cljs.core.seq(events)){
var uri = lambdaisland.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.public_uri,"api/main/methods/push-audit-events"], 0));
var params = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"credentials","credentials",1373178854),"include",new cljs.core.Keyword(null,"body","body",-2049205669),app.util.http.transit_data(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"events","events",1792552201),events], null))], null);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (_){
return beicon.v2.core.of(null);
}),beicon.v2.core.mapcat(app.main.repo.handle_response,app.util.http.send_BANG_(params)));
} else {
return beicon.v2.core.of(null);
}
});
/**
 * Create user interaction/input event observer. Returns rx stream.
 */
app.main.data.event.user_input_observer = (function app$main$data$event$user_input_observer(){
if((((typeof globalThis !== 'undefined')) && ((!((globalThis.PerformanceObserver == null)))))){
return beicon.v2.core.create((function (subs){
var observer = (new PerformanceObserver((function (list){
return cljs.core.run_BANG_((function (entry){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("event",entry.entryType)) && ((entry.duration > (1000))))){
return subs.next(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"user-input",new cljs.core.Keyword(null,"duration","duration",1444101068),entry.duration,new cljs.core.Keyword(null,"event-name","event-name",927259778),entry.name], null));
} else {
return null;
}
}),list.getEntries());
})));
observer.observe(({"entryTypes": ["event"]}));

return (function (){
return observer.disconnect();
});
}));
} else {
return beicon.v2.core.empty();
}
});
/**
 * Create a Long-Task performance observer. Returns rx stream.
 */
app.main.data.event.longtask_observer = (function app$main$data$event$longtask_observer(){
if((((typeof globalThis !== 'undefined')) && ((!((globalThis.PerformanceObserver == null)))))){
return beicon.v2.core.create((function (subs){
var observer = (new PerformanceObserver((function (list){
return cljs.core.run_BANG_((function (entry){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("longtask",entry.entryType)) && ((entry.duration > (1000))))){
return subs.next(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"long-task",new cljs.core.Keyword(null,"duration","duration",1444101068),entry.duration], null));
} else {
return null;
}
}),list.getEntries());
})));
observer.observe(({"entryTypes": ["longtask"]}));

return (function (){
return observer.disconnect();
});
}));
} else {
return beicon.v2.core.empty();
}
});
app.main.data.event.snapshot_performance_info = (function app$main$data$event$snapshot_performance_info(p__51799){
var map__51800 = p__51799;
var map__51800__$1 = cljs.core.__destructure_map(map__51800);
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51800__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var count_shapes = (function app$main$data$event$snapshot_performance_info_$_count_shapes(file){
return cljs.core.reduce_kv((function (sum,_,page){
return (sum + cljs.core.count(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page)));
}),(0),new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file)));
});
var add_libraries_counters = (function app$main$data$event$snapshot_performance_info_$_add_libraries_counters(state,files){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,library_id){
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(files,library_id),new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.Keyword(null,"total-components","total-components",1903682778),cljs.core._PLUS_,cljs.core.count(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(data))),new cljs.core.Keyword(null,"total-colors","total-colors",-891553408),cljs.core._PLUS_,cljs.core.count(new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(data))),new cljs.core.Keyword(null,"total-typographies","total-typographies",-453409679),cljs.core._PLUS_,cljs.core.count(new cljs.core.Keyword(null,"typographies","typographies",-482095730).cljs$core$IFn$_invoke$arity$1(data)));
}),state,app.main.refs.select_libraries(files,file_id));
});
if((typeof app.main.data.event.snapshot_performance_info_51805 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.event.snapshot_performance_info_51805 = (function (p__51799,map__51800,file_id,count_shapes,add_libraries_counters,meta51806){
this.p__51799 = p__51799;
this.map__51800 = map__51800;
this.file_id = file_id;
this.count_shapes = count_shapes;
this.add_libraries_counters = add_libraries_counters;
this.meta51806 = meta51806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.event.snapshot_performance_info_51805.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.event.snapshot_performance_info_51805.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.event","snapshot-performance-info","app.main.data.event/snapshot-performance-info",116165252);
}));

(app.main.data.event.snapshot_performance_info_51805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51807,meta51806__$1){
var self__ = this;
var _51807__$1 = this;
return (new app.main.data.event.snapshot_performance_info_51805(self__.p__51799,self__.map__51800,self__.file_id,self__.count_shapes,self__.add_libraries_counters,meta51806__$1));
}));

(app.main.data.event.snapshot_performance_info_51805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51807){
var self__ = this;
var _51807__$1 = this;
return self__.meta51806;
}));

(app.main.data.event.snapshot_performance_info_51805.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.event.snapshot_performance_info_51805.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"performance-info","performance-info",-492900708),(function (info){
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"files","files",-472457450));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(files,self__.file_id);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info,new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id),new cljs.core.Keyword(null,"counters","counters",33475982),cljs.core.assoc,new cljs.core.Keyword(null,"total-shapes","total-shapes",-1728271112),(self__.count_shapes.cljs$core$IFn$_invoke$arity$1 ? self__.count_shapes.cljs$core$IFn$_invoke$arity$1(file) : self__.count_shapes.call(null,file))),new cljs.core.Keyword(null,"counters","counters",33475982),self__.add_libraries_counters,files);
}));
}));
}

return (new app.main.data.event.snapshot_performance_info_51805(p__51799,map__51800__$1,file_id,count_shapes,add_libraries_counters,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.event.store_performace_info = (function app$main$data$event$store_performace_info(){
if((typeof app.main.data.event.store_performace_info_51817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.event.store_performace_info_51817 = (function (meta51818){
this.meta51818 = meta51818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.event.store_performace_info_51817.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.event.store_performace_info_51817.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.event","store-performace-info","app.main.data.event/store-performace-info",1565391522);
}));

(app.main.data.event.store_performace_info_51817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51819,meta51818__$1){
var self__ = this;
var _51819__$1 = this;
return (new app.main.data.event.store_performace_info_51817(meta51818__$1));
}));

(app.main.data.event.store_performace_info_51817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51819){
var self__ = this;
var _51819__$1 = this;
return self__.meta51818;
}));

(app.main.data.event.store_performace_info_51817.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.event.store_performace_info_51817.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var start = app.util.perf.now();
var ___$2 = (function (){var i = 1000000.0;
while(true){
if((i === (0))){
return null;
} else {
(app.common.math.sin(i) * app.common.math.sqrt(i));

var G__51926 = (i - (1));
i = G__51926;
continue;
}
break;
}
})();
var end = app.util.perf.now();
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"performance-info","performance-info",-492900708),cljs.core.assoc,new cljs.core.Keyword(null,"bench","bench",1414206922),(end - start));
}));

(app.main.data.event.store_performace_info_51817.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.event.store_performace_info_51817.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
return beicon.v2.core.map(app.main.data.event.snapshot_performance_info,beicon.v2.core.map(cljs.core.deref,beicon.v2.core.take((1),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace","all-libraries-resolved","app.main.data.workspace/all-libraries-resolved",-391037696)),stream))));
}));
}

return (new app.main.data.event.store_performace_info_51817(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.event.initialize = (function app$main$data$event$initialize(){
if((typeof app.main.data.event.initialize_51828 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.event.initialize_51828 = (function (meta51829){
this.meta51829 = meta51829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.event.initialize_51828.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.event.initialize_51828.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.event","initialize","app.main.data.event/initialize",-1618391629);
}));

(app.main.data.event.initialize_51828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51830,meta51829__$1){
var self__ = this;
var _51830__$1 = this;
return (new app.main.data.event.initialize_51828(meta51829__$1));
}));

(app.main.data.event.initialize_51828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51830){
var self__ = this;
var _51830__$1 = this;
return self__.meta51829;
}));

(app.main.data.event.initialize_51828.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.event.initialize_51828.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.event.store_performace_info());
}));

(app.main.data.event.initialize_51828.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.event.initialize_51828.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
var session = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var stopper = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.event","initialize","app.main.data.event/initialize",-1618391629)),stream);
var buffer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY));
var profile = beicon.v2.core.pipe(beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$0(),beicon.v2.core.map(new cljs.core.Keyword(null,"id","id",-1388402092),beicon.v2.core.map(new cljs.core.Keyword(null,"profile","profile",-545963874),beicon.v2.core.from_atom.cljs$core$IFn$_invoke$arity$2(app.util.storage.user,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"emit-current-value?","emit-current-value?",56289147),true], null)))));
if(app.common.logging.enabled_QMARK_("app.main.data.event",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"event instrumentation initialized"], null)], null);
}),null)),null,null,"app.main.data.event",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$4((function (chunk){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,app.main.data.event.remove_from_buffer,cljs.core.count(chunk));
}),(function (cause){
if(app.common.logging.enabled_QMARK_("app.main.data.event",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"unexpected error on audit persistence"], null)], null);
}),null)),cause,null,"app.main.data.event",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}

return null;
}),(function (){
if(app.common.logging.enabled_QMARK_("app.main.data.event",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"audit persistence terminated"], null)], null);
}),null)),null,null,"app.main.data.event",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}

return null;
}),beicon.v2.core.take_until(stopper,beicon.v2.core.mapcat((function (p__51853){
var vec__51854 = p__51853;
var chunk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51854,(0),null);
var profile_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51854,(1),null);
var events = cljs.core.filterv((function (p1__51826_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(profile_id,new cljs.core.Keyword(null,"profile-id","profile-id",1866572309).cljs$core$IFn$_invoke$arity$1(p1__51826_SHARP_));
}),chunk);
return beicon.v2.core.map(cljs.core.constantly(chunk),beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (___$3){
if(app.common.logging.enabled_QMARK_("app.main.data.event",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"events chunk persisted"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.count(chunk)], null)], null);
}),null)),null,null,"app.main.data.event",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}

return null;
}),app.main.data.event.persist_events(events)));
}),beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$2(profile,beicon.v2.core.map((function (___$3){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1((100)),cljs.core.deref(buffer));
}),beicon.v2.core.merge(beicon.v2.core.debounce((2000),beicon.v2.core.filter((function (p1__51825_SHARP_){
return (cljs.core.count(p1__51825_SHARP_) > (0));
}),beicon.v2.core.from_atom.cljs$core$IFn$_invoke$arity$1(buffer))),beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.profile","logout","app.main.data.profile/logout",-280567330)),stream))))))));

return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$4((function (___$3){
if(app.common.logging.enabled_QMARK_("app.main.data.event",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"session reinitialized"], null)], null);
}),null)),null,null,"app.main.data.event",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.reset_BANG_(session,null);
}),(function (cause){
if(app.common.logging.enabled_QMARK_("app.main.data.event",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"error on event batching stream"], null)], null);
}),null)),cause,null,"app.main.data.event",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}

return null;
}),(function (){
if(app.common.logging.enabled_QMARK_("app.main.data.event",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hitn","hitn",1033754506),"events batching stream terminated"], null)], null);
}),null)),null,null,"app.main.data.event",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}

return null;
}),beicon.v2.core.take_until(stopper,beicon.v2.core.switch_map((function (){
return beicon.v2.core.timer(app.main.data.event.session_timeout);
}),beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (event){
if(app.common.logging.enabled_QMARK_("app.main.data.event",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"event enqueued"], null)], null);
}),null)),null,null,"app.main.data.event",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,app.main.data.event.append_to_buffer,event);
}),beicon.v2.core.map((function (event){
var session_STAR_ = (function (){var or__5025__auto__ = cljs.core.deref(session);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.time.now();
}
})();
var context = app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(app.main.data.event.add_external_context_info(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(app.main.data.event.context),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(event)], 0)),new cljs.core.Keyword(null,"session","session",1008279103),session_STAR_),new cljs.core.Keyword(null,"external-session-id","external-session-id",-965075146),app.config.external_session_id())));
cljs.core.reset_BANG_(session,session_STAR_);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(event,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.common.time.now()),new cljs.core.Keyword(null,"context","context",-830191113),context);
}),beicon.v2.core.filter(new cljs.core.Keyword(null,"profile-id","profile-id",1866572309),beicon.v2.core.merge(beicon.v2.core.map(app.main.data.event.make_event,beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$2(profile,stream)),beicon.v2.core.debounce((1000),beicon.v2.core.map(app.main.data.event.make_performance_event,beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$2(profile,app.main.data.event.user_input_observer()))),beicon.v2.core.debounce((1000),beicon.v2.core.map(app.main.data.event.make_performance_event,beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$2(profile,app.main.data.event.longtask_observer()))),(((((typeof globalThis !== 'undefined')) && ((((!((globalThis.requestAnimationFrame == null)))) && ((((!((globalThis.scheduler == null)))) && ((!((globalThis.scheduler.postTask == null))))))))))?beicon.v2.core.debounce((1000),beicon.v2.core.merge_map(app.main.data.event.process_performance_event,beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$2(profile,stream))):beicon.v2.core.empty()))))))));
}));
}

return (new app.main.data.event.initialize_51828(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.event.event = (function app$main$data$event$event(props){
return potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),props);
});

//# sourceMappingURL=app.main.data.event.js.map
