import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.transit.js";
import "./app.common.uri.js";
import "./app.config.js";
import "./app.util.cache.js";
import "./app.util.globals.js";
import "./app.util.perf.js";
import "./app.util.webapi.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./promesa.core.js";
goog.provide('app.util.http');

/**
 * A helper for define body data with the appropriate headers.
 * @interface
 */
app.util.http.IBodyData = function(){};

var app$util$http$IBodyData$_update_headers$dyn_47700 = (function (_,headers){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.util.http._update_headers[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,headers) : m__5374__auto__.call(null,_,headers));
} else {
var m__5372__auto__ = (app.util.http._update_headers["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,headers) : m__5372__auto__.call(null,_,headers));
} else {
throw cljs.core.missing_protocol("IBodyData.-update-headers",_);
}
}
});
app.util.http._update_headers = (function app$util$http$_update_headers(_,headers){
if((((!((_ == null)))) && ((!((_.app$util$http$IBodyData$_update_headers$arity$2 == null)))))){
return _.app$util$http$IBodyData$_update_headers$arity$2(_,headers);
} else {
return app$util$http$IBodyData$_update_headers$dyn_47700(_,headers);
}
});

var app$util$http$IBodyData$_get_body_data$dyn_47704 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.util.http._get_body_data[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.util.http._get_body_data["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBodyData.-get-body-data",_);
}
}
});
app.util.http._get_body_data = (function app$util$http$_get_body_data(_){
if((((!((_ == null)))) && ((!((_.app$util$http$IBodyData$_get_body_data$arity$1 == null)))))){
return _.app$util$http$IBodyData$_get_body_data$arity$1(_);
} else {
return app$util$http$IBodyData$_get_body_data$dyn_47704(_);
}
});

(app.util.globals.FormData.prototype.app$util$http$IBodyData$ = cljs.core.PROTOCOL_SENTINEL);

(app.util.globals.FormData.prototype.app$util$http$IBodyData$_get_body_data$arity$1 = (function (it){
var it__$1 = this;
return it__$1;
}));

(app.util.globals.FormData.prototype.app$util$http$IBodyData$_update_headers$arity$2 = (function (_,headers){
var ___$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(headers,"content-type",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Content-Type"], 0));
}));

(app.util.http.IBodyData["_"] = true);

(app.util.http._get_body_data["_"] = (function (it){
return it;
}));

(app.util.http._update_headers["_"] = (function (_,headers){
return headers;
}));
app.util.http.translate_method = (function app$util$http$translate_method(method){
var G__47632 = method;
var G__47632__$1 = (((G__47632 instanceof cljs.core.Keyword))?G__47632.fqn:null);
switch (G__47632__$1) {
case "head":
return "HEAD";

break;
case "options":
return "OPTIONS";

break;
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
case "patch":
return "PATCH";

break;
case "delete":
return "DELETE";

break;
case "trace":
return "TRACE";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47632__$1)].join('')));

}
});
app.util.http.parse_headers = (function app$util$http$parse_headers(headers){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.vec),cljs.core.seq(headers.entries()));
});
app.util.http.default_headers = (function app$util$http$default_headers(){
return new cljs.core.PersistentArrayMap(null, 2, ["x-frontend-version",new cljs.core.Keyword(null,"full","full",436801220).cljs$core$IFn$_invoke$arity$1(app.config.version),"x-client",["penpot-frontend/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"full","full",436801220).cljs$core$IFn$_invoke$arity$1(app.config.version))].join('')], null);
});
if((typeof app !== 'undefined') && (typeof app.util !== 'undefined') && (typeof app.util.http !== 'undefined') && (typeof app.util.http.network_averages !== 'undefined')){
} else {
app.util.http.network_averages = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
app.util.http.fetch = (function app$util$http$fetch(p__47666){
var map__47667 = p__47666;
var map__47667__$1 = cljs.core.__destructure_map(map__47667);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47667__$1,new cljs.core.Keyword(null,"method","method",55703592));
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47667__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47667__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47667__$1,new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47667__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47667__$1,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"cors","cors",1066181665));
var omit_default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47667__$1,new cljs.core.Keyword(null,"omit-default-headers","omit-default-headers",-2108409502));
var credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47667__$1,new cljs.core.Keyword(null,"credentials","credentials",1373178854),"same-origin");
return beicon.v2.core.create((function (subscriber){
var controller = (new AbortController());
var signal = controller.signal;
var unsubscribed_QMARK_ = cljs.core.volatile_BANG_(false);
var abortable_QMARK_ = cljs.core.volatile_BANG_(true);
var query__$1 = ((typeof query === 'string')?query:((cljs.core.map_QMARK_(query))?app.common.uri.map__GT_query_string.cljs$core$IFn$_invoke$arity$1(query):null
));
var uri__$1 = (function (){var G__47670 = uri;
var G__47670__$1 = ((typeof uri === 'string')?app.common.uri.uri(G__47670):G__47670);
if((!((query__$1 == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47670__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query__$1);
} else {
return G__47670__$1;
}
})();
var headers__$1 = (function (){var G__47672 = headers;
if(cljs.core.not(omit_default_headers)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__47672,app.util.http.default_headers()], 0));
} else {
return G__47672;
}
})();
var headers__$2 = app.util.http._update_headers(body,headers__$1);
var body__$1 = app.util.http._get_body_data(body);
var params = ({"method": app.util.http.translate_method(method), "headers": cljs.core.clj__GT_js(headers__$2), "body": body__$1, "mode": app.common.data.name(mode), "redirect": "follow", "credentials": credentials, "referrerPolicy": "no-referrer", "signal": signal});
var start = app.util.perf.timestamp();
promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(fetch(cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri__$1),params),(function (response){
cljs.core.vreset_BANG_(abortable_QMARK_,false);

subscriber.next(response);

return subscriber.complete();
})),(function (cause){
cljs.core.vreset_BANG_(abortable_QMARK_,false);

if(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.deref(unsubscribed_QMARK_);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause.name,"AbortError");
}
})())){
return null;
} else {
var error = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(cljs.core.ex_message(cause),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"hint","hint",439639918),"unable to perform fetch operation",new cljs.core.Keyword(null,"uri","uri",-774711847),uri__$1,new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$2], null),cause);
return subscriber.error(error);
}
})),(function (){
var map__47674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.util.http.network_averages),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(uri__$1));
var map__47674__$1 = cljs.core.__destructure_map(map__47674);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47674__$1,new cljs.core.Keyword(null,"count","count",2139924085),(0));
var average = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47674__$1,new cljs.core.Keyword(null,"average","average",-492356168),(0));
var current_time = (app.util.perf.timestamp() - start);
var average__$1 = ((average * (count / (count + (1)))) + (current_time / (count + (1))));
var count__$1 = (count + (1));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.http.network_averages,cljs.core.assoc,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(uri__$1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),count__$1,new cljs.core.Keyword(null,"average","average",-492356168),average__$1], null));
}));

return (function (){
cljs.core.vreset_BANG_(unsubscribed_QMARK_,true);

if(cljs.core.truth_(cljs.core.deref(abortable_QMARK_))){
return controller.abort();
} else {
return null;
}
});
}));
});
app.util.http.response__GT_map = (function app$util$http$response__GT_map(response){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),response.status,new cljs.core.Keyword(null,"uri","uri",-774711847),response.url,new cljs.core.Keyword(null,"headers","headers",-835030129),app.util.http.parse_headers(response.headers),new cljs.core.Keyword(null,"body","body",-2049205669),response.body,new cljs.core.Keyword("app.util.http","response","app.util.http/response",-877557607),response], null);
});
app.util.http.process_response_type = (function app$util$http$process_response_type(response_type,response){
var native_response = new cljs.core.Keyword("app.util.http","response","app.util.http/response",-877557607).cljs$core$IFn$_invoke$arity$1(response);
var body = (function (){var G__47676 = response_type;
var G__47676__$1 = (((G__47676 instanceof cljs.core.Keyword))?G__47676.fqn:null);
switch (G__47676__$1) {
case "buffer":
return native_response.arrayBuffer();

break;
case "json":
return native_response.json();

break;
case "text":
return native_response.text();

break;
case "blob":
return native_response.blob();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47676__$1)].join('')));

}
})();
return beicon.v2.core.map((function (body__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1);
}),beicon.v2.core.from(body));
});
app.util.http.send_BANG_ = (function app$util$http$send_BANG_(p__47677){
var map__47678 = p__47677;
var map__47678__$1 = cljs.core.__destructure_map(map__47678);
var params = map__47678__$1;
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47678__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458),new cljs.core.Keyword(null,"text","text",-1790561697));
return beicon.v2.core.mapcat(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.util.http.process_response_type,response_type),beicon.v2.core.map(app.util.http.response__GT_map,app.util.http.fetch(params)));
});
app.util.http.form_data = (function app$util$http$form_data(data){
var append = (function app$util$http$form_data_$_append(form,k,v){
if(cljs.core.list_QMARK_(v)){
form.append(cljs.core.name(k),cljs.core.first(v),cljs.core.second(v));
} else {
form.append(cljs.core.name(k),v);
}

return form;
});
return cljs.core.reduce_kv(append,(new FormData()),data);
});

/**
* @constructor
 * @implements {app.util.http.IBodyData}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.util.http.t_app$util$http47679 = (function (data,meta47680){
this.data = data;
this.meta47680 = meta47680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.util.http.t_app$util$http47679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47681,meta47680__$1){
var self__ = this;
var _47681__$1 = this;
return (new app.util.http.t_app$util$http47679(self__.data,meta47680__$1));
}));

(app.util.http.t_app$util$http47679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47681){
var self__ = this;
var _47681__$1 = this;
return self__.meta47680;
}));

(app.util.http.t_app$util$http47679.prototype.app$util$http$IBodyData$ = cljs.core.PROTOCOL_SENTINEL);

(app.util.http.t_app$util$http47679.prototype.app$util$http$IBodyData$_get_body_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return app.common.transit.encode_str.cljs$core$IFn$_invoke$arity$2(self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"json-verbose","json-verbose",-542533531)], null));
}));

(app.util.http.t_app$util$http47679.prototype.app$util$http$IBodyData$_update_headers$arity$2 = (function (_,headers){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers,"content-type","application/transit+json");
}));

(app.util.http.t_app$util$http47679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"meta47680","meta47680",-1651089329,null)], null);
}));

(app.util.http.t_app$util$http47679.cljs$lang$type = true);

(app.util.http.t_app$util$http47679.cljs$lang$ctorStr = "app.util.http/t_app$util$http47679");

(app.util.http.t_app$util$http47679.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.util.http/t_app$util$http47679");
}));

/**
 * Positional factory function for app.util.http/t_app$util$http47679.
 */
app.util.http.__GT_t_app$util$http47679 = (function app$util$http$__GT_t_app$util$http47679(data,meta47680){
return (new app.util.http.t_app$util$http47679(data,meta47680));
});


app.util.http.transit_data = (function app$util$http$transit_data(data){
return (new app.util.http.t_app$util$http47679(data,cljs.core.PersistentArrayMap.EMPTY));
});
app.util.http.conditional_decode_transit = (function app$util$http$conditional_decode_transit(p__47682){
var map__47683 = p__47682;
var map__47683__$1 = cljs.core.__destructure_map(map__47683);
var response = map__47683__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47683__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47683__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var contenttype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(headers,"content-type");
if(((cuerdas.core.starts_with_QMARK_(contenttype,"application/transit+json")) && (((typeof body === 'string') && ((cljs.core.count(body) > (0))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword(null,"body","body",-2049205669),app.common.transit.decode_str.cljs$core$IFn$_invoke$arity$1(body));
} else {
return response;
}
});
app.util.http.conditional_error_decode_transit = (function app$util$http$conditional_error_decode_transit(p__47684){
var map__47685 = p__47684;
var map__47685__$1 = cljs.core.__destructure_map(map__47685);
var response = map__47685__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47685__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47685__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((((status >= (400))) && (typeof body === 'string'))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword(null,"body","body",-2049205669),app.common.transit.decode_str.cljs$core$IFn$_invoke$arity$1(body));
} else {
return response;
}
});
app.util.http.success_QMARK_ = (function app$util$http$success_QMARK_(p__47686){
var map__47687 = p__47686;
var map__47687__$1 = cljs.core.__destructure_map(map__47687);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47687__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return ((((200) <= status)) && ((status <= (299))));
});
app.util.http.server_error_QMARK_ = (function app$util$http$server_error_QMARK_(p__47690){
var map__47691 = p__47690;
var map__47691__$1 = cljs.core.__destructure_map(map__47691);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47691__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return ((((500) <= status)) && ((status <= (599))));
});
app.util.http.client_error_QMARK_ = (function app$util$http$client_error_QMARK_(p__47692){
var map__47693 = p__47692;
var map__47693__$1 = cljs.core.__destructure_map(map__47693);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47693__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return ((((400) <= status)) && ((status <= (499))));
});
app.util.http.as_promise = (function app$util$http$as_promise(observable){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3(resolve,reject,beicon.v2.core.take((1),observable));
}));
});
app.util.http.fetch_data_uri = (function app$util$http$fetch_data_uri(var_args){
var G__47696 = arguments.length;
switch (G__47696) {
case 1:
return app.util.http.fetch_data_uri.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.http.fetch_data_uri.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.http.fetch_data_uri.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return app.util.http.fetch_data_uri.cljs$core$IFn$_invoke$arity$2(uri,false);
}));

(app.util.http.fetch_data_uri.cljs$core$IFn$_invoke$arity$2 = (function (uri,throw_err_QMARK_){
var request_str = app.util.cache.with_cache(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uri,new cljs.core.Keyword(null,"max-age","max-age",-270129271),((((1000) * (60)) * (60)) * (4))], null),beicon.v2.core.map((function (p1__47694_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([uri],[p1__47694_SHARP_]);
}),beicon.v2.core.mapcat(app.util.webapi.read_file_as_data_url,beicon.v2.core.map(new cljs.core.Keyword(null,"body","body",-2049205669),beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (resp){
if((((new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(resp) < (200))) || ((new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(resp) >= (300))))){
throw (new Error("Error fetching data uri",({"cause": cljs.core.clj__GT_js(resp)})));
} else {
return null;
}
}),app.util.http.send_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"response-type","response-type",-1493770458),new cljs.core.Keyword(null,"blob","blob",1636965233),new cljs.core.Keyword(null,"omit-default-headers","omit-default-headers",-2108409502),true], null)))))));
if(cljs.core.not(throw_err_QMARK_)){
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (){
return beicon.v2.core.empty();
}),request_str);
} else {
return request_str;
}
}));

(app.util.http.fetch_data_uri.cljs$lang$maxFixedArity = 2);

app.util.http.fetch_text = (function app$util$http$fetch_text(url){
return app.util.cache.with_cache(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),url,new cljs.core.Keyword(null,"max-age","max-age",-270129271),((((1000) * (60)) * (60)) * (4))], null),beicon.v2.core.map(new cljs.core.Keyword(null,"body","body",-2049205669),app.util.http.send_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"cors","cors",1066181665),new cljs.core.Keyword(null,"omit-default-headers","omit-default-headers",-2108409502),true,new cljs.core.Keyword(null,"uri","uri",-774711847),url,new cljs.core.Keyword(null,"response-type","response-type",-1493770458),new cljs.core.Keyword(null,"text","text",-1790561697)], null))));
});

//# sourceMappingURL=app.util.http.js.map
