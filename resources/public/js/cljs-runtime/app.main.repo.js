import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.exceptions.js";
import "./app.common.logging.js";
import "./app.common.time.js";
import "./app.common.transit.js";
import "./app.common.uri.js";
import "./app.config.js";
import "./app.util.http.js";
import "./app.util.sse.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
goog.provide('app.main.repo');
app.common.logging.loggers.set("app.main.repo",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"info","info",-317069002)));
/**
 * Set of error types that are considered transient and safe to retry
 *   for idempotent (GET) requests.
 */
app.main.repo.retryable_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offline","offline",-107631935),null,new cljs.core.Keyword(null,"service-unavailable","service-unavailable",751643155),null,new cljs.core.Keyword(null,"network","network",2050004697),null,new cljs.core.Keyword(null,"bad-gateway","bad-gateway",1203629050),null], null), null);
/**
 * Return true when `error` represents a transient failure that is safe
 *   to retry.  Only errors whose `ex-data` `:type` belongs to
 *   `retryable-types` qualify.
 */
app.main.repo.retryable_error_QMARK_ = (function app$main$repo$retryable_error_QMARK_(error){
return cljs.core.contains_QMARK_(app.main.repo.retryable_types,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(error)));
});
/**
 * Default configuration for the retry mechanism on idempotent requests.
 */
app.main.repo.default_retry_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121),(3),new cljs.core.Keyword(null,"base-delay-ms","base-delay-ms",463049020),(1000)], null);
/**
 * Wrap `observable-fn` (a zero-arg function returning an Observable) so
 *   that retryable errors are retried up to `:max-retries` times with
 *   exponential back-off.  Non-retryable errors propagate immediately.
 * 
 *   Accepts an optional `config` map with:
 *  :max-retries   – maximum number of retries (default 3)
 *  :base-delay-ms – base delay in ms; doubles each attempt (default 1000)
 */
app.main.repo.with_retry = (function app$main$repo$with_retry(var_args){
var G__51107 = arguments.length;
switch (G__51107) {
case 1:
return app.main.repo.with_retry.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.repo.with_retry.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.repo.with_retry.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.repo.with_retry.cljs$core$IFn$_invoke$arity$1 = (function (observable_fn){
return app.main.repo.with_retry.cljs$core$IFn$_invoke$arity$2(observable_fn,app.main.repo.default_retry_config);
}));

(app.main.repo.with_retry.cljs$core$IFn$_invoke$arity$2 = (function (observable_fn,config){
return app.main.repo.with_retry.cljs$core$IFn$_invoke$arity$3(observable_fn,config,(0));
}));

(app.main.repo.with_retry.cljs$core$IFn$_invoke$arity$3 = (function (observable_fn,config,attempt){
var map__51112 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.repo.default_retry_config,config], 0));
var map__51112__$1 = cljs.core.__destructure_map(map__51112);
var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51112__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));
var base_delay_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51112__$1,new cljs.core.Keyword(null,"base-delay-ms","base-delay-ms",463049020));
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (cause){
if(((app.main.repo.retryable_error_QMARK_(cause)) && ((attempt < max_retries)))){
var delay_ms = (base_delay_ms * ((1) << attempt));
if(app.common.logging.enabled_QMARK_("app.main.repo",new cljs.core.Keyword(null,"warn","warn",-436710552))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"retrying request"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attempt","attempt",1611761308),(attempt + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delay","delay",-574225219),delay_ms], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.ex_message(cause)], null)], null);
}),null)),null,null,"app.main.repo",new cljs.core.Keyword(null,"warn","warn",-436710552),false);
} else {
}


return beicon.v2.core.mapcat((function (_){
return app.main.repo.with_retry.cljs$core$IFn$_invoke$arity$3(observable_fn,config,(attempt + (1)));
}),beicon.v2.core.timer(delay_ms));
} else {
return beicon.v2.core.throw$(cause);
}
}),(observable_fn.cljs$core$IFn$_invoke$arity$0 ? observable_fn.cljs$core$IFn$_invoke$arity$0() : observable_fn.call(null)));
}));

(app.main.repo.with_retry.cljs$lang$maxFixedArity = 3);

app.main.repo.handle_response = (function app$main$repo$handle_response(p__51120){
var map__51121 = p__51120;
var map__51121__$1 = cljs.core.__destructure_map(map__51121);
var response = map__51121__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51121__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51121__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51121__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51121__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((204),status)){
return beicon.v2.core.of(null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((502),status)){
return beicon.v2.core.throw$(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("http error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bad-gateway","bad-gateway",1203629050)], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((503),status)){
return beicon.v2.core.throw$(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("http error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"service-unavailable","service-unavailable",751643155)], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response))){
return beicon.v2.core.throw$(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("http error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"offline","offline",-107631935)], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status)){
return beicon.v2.core.of(body);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((413),status)){
return beicon.v2.core.throw$(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("http error",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"request-body-too-large","request-body-too-large",158334)], null)));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,(403))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("cloudflare",cljs.core.get.cljs$core$IFn$_invoke$arity$2(headers,"server"))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("challenge",cljs.core.get.cljs$core$IFn$_invoke$arity$2(headers,"cf-mitigated"))))))){
return beicon.v2.core.throw$(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("http error",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"authorization","authorization",-166302136),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"challenge-required","challenge-required",2136495006)], null)));
} else {
if((((status >= (400))) && (cljs.core.map_QMARK_(body)))){
return beicon.v2.core.throw$(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("http error",cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(body,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"status","status",-1997798413),status], 0))));
} else {
return beicon.v2.core.throw$(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("unable to process repository response",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"unable-to-process-repository-response","unable-to-process-repository-response",-694987169),new cljs.core.Keyword(null,"hint","hint",439639918),"unable to process repository response",new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"data","data",-232669377),body], null),null], 0)),null));

}
}
}
}
}
}
}
}
});
app.main.repo.default_options = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("app.util.sse","clone-template","app.util.sse/clone-template",1175830498),new cljs.core.Keyword("app.util.sse","import-binfile","app.util.sse/import-binfile",-1363470717),new cljs.core.Keyword(null,"create-file-thumbnail","create-file-thumbnail",-1914149111),new cljs.core.Keyword(null,"export-binfile","export-binfile",-1093144052),new cljs.core.Keyword("app.util.sse","restore-deleted-team-files","app.util.sse/restore-deleted-team-files",-2130814225),new cljs.core.Keyword(null,"create-file-object-thumbnail","create-file-object-thumbnail",-1990532944),new cljs.core.Keyword("app.util.sse","export-binfile","app.util.sse/export-binfile",-1934301614),new cljs.core.Keyword(null,"get-raw-file","get-raw-file",-2017081582),new cljs.core.Keyword(null,"update-file","update-file",-511736043),new cljs.core.Keyword("app.util.sse","permanently-delete-team-files","app.util.sse/permanently-delete-team-files",2138355294),new cljs.core.Keyword(null,"retrieve-list-of-builtin-templates","retrieve-list-of-builtin-templates",-515432481)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream?","stream?",-1451356708),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream?","stream?",-1451356708),true,new cljs.core.Keyword(null,"form-data?","form-data?",1304045150),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"revn","revn",-633391765)], null),new cljs.core.Keyword(null,"form-data?","form-data?",1304045150),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-type","response-type",-1493770458),new cljs.core.Keyword(null,"blob","blob",1636965233)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream?","stream?",-1451356708),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"object-id","object-id",-754527291),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),new cljs.core.Keyword(null,"form-data?","form-data?",1304045150),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream?","stream?",-1451356708),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rename-to","rename-to",610483329),new cljs.core.Keyword(null,"get-file","get-file",-588292783),new cljs.core.Keyword(null,"raw-transit?","raw-transit?",1086268953),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream?","stream?",-1451356708),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"all","all",892129742)], null)]);
app.main.repo.send_BANG_ = (function app$main$repo$send_BANG_(id,params,options){
var map__51128 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.repo.default_options,id),options], 0));
var map__51128__$1 = cljs.core.__destructure_map(map__51128);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51128__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var stream_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51128__$1,new cljs.core.Keyword(null,"stream?","stream?",-1451356708));
var form_data_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51128__$1,new cljs.core.Keyword(null,"form-data?","form-data?",1304045150));
var raw_transit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51128__$1,new cljs.core.Keyword(null,"raw-transit?","raw-transit?",1086268953));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51128__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var rename_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51128__$1,new cljs.core.Keyword(null,"rename-to","rename-to",610483329));
var decode_fn = (cljs.core.truth_(raw_transit_QMARK_)?app.util.http.conditional_error_decode_transit:app.util.http.conditional_decode_transit);
var id__$1 = (function (){var or__5025__auto__ = rename_to;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return id;
}
})();
var nid = cljs.core.name(id__$1);
var method = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(query_params,new cljs.core.Keyword(null,"all","all",892129742)))?new cljs.core.Keyword(null,"get","get",1683182755):((cuerdas.core.starts_with_QMARK_(nid,"get-"))?new cljs.core.Keyword(null,"get","get",1683182755):new cljs.core.Keyword(null,"post","post",269697687)
));
var response_type__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(response_type,new cljs.core.Keyword(null,"text","text",-1790561697));
var request = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"uri","uri",-774711847),app.common.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.public_uri,"api/main/methods/",nid], 0)),new cljs.core.Keyword(null,"credentials","credentials",1373178854),"include",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 3, ["accept","application/transit+json,text/event-stream,*/*","x-external-session-id",app.config.external_session_id(),"x-event-origin",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(params))], null),new cljs.core.Keyword(null,"body","body",-2049205669),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,new cljs.core.Keyword(null,"post","post",269697687)))?(cljs.core.truth_(form_data_QMARK_)?app.util.http.form_data(params):app.util.http.transit_data(params)):null),new cljs.core.Keyword(null,"query","query",-1288509510),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,new cljs.core.Keyword(null,"get","get",1683182755)))?params:(cljs.core.truth_(query_params)?cljs.core.select_keys(params,query_params):null)),new cljs.core.Keyword(null,"response-type","response-type",-1493770458),(cljs.core.truth_(stream_QMARK_)?null:response_type__$1)], null);
var tpoint = app.common.time.tpoint_ms();
if(app.common.logging.enabled_QMARK_("app.main.repo",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"make request"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null)], null);
}),null)),null,null,"app.main.repo",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}


var make_request = (function (){
return beicon.v2.core.mapcat((function (p__51133){
var map__51134 = p__51133;
var map__51134__$1 = cljs.core.__destructure_map(map__51134);
var response = map__51134__$1;
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51134__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51134__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(app.common.logging.enabled_QMARK_("app.main.repo",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"response received"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),tpoint()], null)], null);
}),null)),null,null,"app.main.repo",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}


var ctype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(headers,"content-type");
var response_stream_QMARK_ = cuerdas.core.starts_with_QMARK_(ctype,"text/event-stream");
var tpoint__$1 = app.common.time.tpoint_ms();
if(((response_stream_QMARK_) && (cljs.core.not(stream_QMARK_)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("expected normal response, received sse stream",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"unexpected-response","unexpected-response",-1471929181),new cljs.core.Keyword(null,"hint","hint",439639918),"expected normal response, received sse stream",new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(response),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response)], null),null], 0)),null);
} else {
}

if(response_stream_QMARK_){
return app.util.sse.read_stream(app.util.sse.create_stream(body),app.common.transit.decode_str);
} else {
return beicon.v2.core.mapcat(app.main.repo.handle_response,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (_){
if(app.common.logging.enabled_QMARK_("app.main.repo",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"response decoded"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),tpoint__$1()], null)], null);
}),null)),null,null,"app.main.repo",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}

return null;
}),beicon.v2.core.map(decode_fn,app.util.http.process_response_type(response_type__$1,response))));
}
}),beicon.v2.core.map(app.util.http.response__GT_map,app.util.http.fetch(request)));
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get","get",1683182755),method)){
return app.main.repo.with_retry.cljs$core$IFn$_invoke$arity$1(make_request);
} else {
return make_request();
}
});
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.repo !== 'undefined') && (typeof app.main.repo.cmd_BANG_ !== 'undefined')){
} else {
app.main.repo.cmd_BANG_ = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__51136 = cljs.core.get_global_hierarchy;
return (fexpr__51136.cljs$core$IFn$_invoke$arity$0 ? fexpr__51136.cljs$core$IFn$_invoke$arity$0() : fexpr__51136.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.main.repo","cmd!"),(function (id,_){
return id;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
app.main.repo.cmd_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (id,params){
return app.main.repo.send_BANG_(id,params,null);
}));
app.main.repo.cmd_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"login-with-oidc","login-with-oidc",688254834),(function (_,params){
var uri = app.common.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.public_uri,"api/auth/oidc"], 0));
return beicon.v2.core.mapcat(app.main.repo.handle_response,beicon.v2.core.map(app.util.http.conditional_decode_transit,app.util.http.send_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"credentials","credentials",1373178854),"include",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, ["x-external-session-id",app.config.external_session_id(),"x-event-origin",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(params))], null),new cljs.core.Keyword(null,"query","query",-1288509510),params], null))));
}));
app.main.repo.send_export = (function app$main$repo$send_export(p__51152){
var map__51153 = p__51152;
var map__51153__$1 = cljs.core.__destructure_map(map__51153);
var params = map__51153__$1;
var blob_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51153__$1,new cljs.core.Keyword(null,"blob?","blob?",-327089451));
return beicon.v2.core.mapcat(app.main.repo.handle_response,beicon.v2.core.map(app.util.http.conditional_decode_transit,app.util.http.send_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),app.common.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.public_uri,"api/export"], 0)),new cljs.core.Keyword(null,"body","body",-2049205669),app.util.http.transit_data(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"blob?","blob?",-327089451))),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, ["x-external-session-id",app.config.external_session_id(),"x-event-origin",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(params))], null),new cljs.core.Keyword(null,"credentials","credentials",1373178854),"include",new cljs.core.Keyword(null,"response-type","response-type",-1493770458),(cljs.core.truth_(blob_QMARK_)?new cljs.core.Keyword(null,"blob","blob",1636965233):new cljs.core.Keyword(null,"text","text",-1790561697))], null))));
});
app.main.repo.cmd_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"export","export",214356590),(function (_,params){
var default$ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wait","wait",-260664777),false,new cljs.core.Keyword(null,"blob?","blob?",-327089451),false], null);
return app.main.repo.send_export(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$,params], 0)));
}));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upload-file-media-object","upload-file-media-object",-350555764),new cljs.core.Keyword("app.main.repo","multipart-upload","app.main.repo/multipart-upload",350994081));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-profile-photo","update-profile-photo",1847991804),new cljs.core.Keyword("app.main.repo","multipart-upload","app.main.repo/multipart-upload",350994081));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-team-photo","update-team-photo",539796592),new cljs.core.Keyword("app.main.repo","multipart-upload","app.main.repo/multipart-upload",350994081));
app.main.repo.cmd_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("app.main.repo","multipart-upload","app.main.repo/multipart-upload",350994081),(function (id,params){
return beicon.v2.core.mapcat(app.main.repo.handle_response,beicon.v2.core.map(app.util.http.conditional_decode_transit,app.util.http.send_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),app.common.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.public_uri,"api/main/methods/",cljs.core.name(id)], 0)),new cljs.core.Keyword(null,"credentials","credentials",1373178854),"include",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, ["x-external-session-id",app.config.external_session_id(),"x-event-origin",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(params))], null),new cljs.core.Keyword(null,"body","body",-2049205669),app.util.http.form_data(params)], null))));
}));

//# sourceMappingURL=app.main.repo.js.map
