import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.logging.js";
import "./app.common.uri.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.util.dom.js";
import "./app.util.http.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
goog.provide('app.main.rasterizer');
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.rasterizer !== 'undefined') && (typeof app.main.rasterizer.ready_QMARK_ !== 'undefined')){
} else {
app.main.rasterizer.ready_QMARK_ = false;
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.rasterizer !== 'undefined') && (typeof app.main.rasterizer.queue !== 'undefined')){
} else {
app.main.rasterizer.queue = [];
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.rasterizer !== 'undefined') && (typeof app.main.rasterizer.instance !== 'undefined')){
} else {
app.main.rasterizer.instance = null;
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.rasterizer !== 'undefined') && (typeof app.main.rasterizer.msgbus !== 'undefined')){
} else {
app.main.rasterizer.msgbus = beicon.v2.core.subject();
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.rasterizer !== 'undefined') && (typeof app.main.rasterizer.origin !== 'undefined')){
} else {
app.main.rasterizer.origin = ""+(app.common.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.rasterizer_uri,"rasterizer.html"], 0)) ?? "");
}
app.main.rasterizer.process_queued_messages_BANG_ = (function app$main$rasterizer$process_queued_messages_BANG_(){
var message = app.main.rasterizer.queue.shift();
while(true){
if((!((message == null)))){
(app.main.rasterizer.send_message_BANG_.cljs$core$IFn$_invoke$arity$1 ? app.main.rasterizer.send_message_BANG_.cljs$core$IFn$_invoke$arity$1(message) : app.main.rasterizer.send_message_BANG_.call(null,message));

var G__68055 = app.main.rasterizer.queue.shift();
message = G__68055;
continue;
} else {
return null;
}
break;
}
});
/**
 * Handles a message from the rasterizer.
 */
app.main.rasterizer.on_message = (function app$main$rasterizer$on_message(event){
var evorigin = (event["origin"]);
var evdata = (event["data"]);
if(((cljs.core.object_QMARK_(evdata)) && (cuerdas.core.starts_with_QMARK_(app.main.rasterizer.origin,evorigin)))){
var scope = (evdata["scope"]);
var type = (evdata["type"]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("penpot/rasterizer",scope)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"ready")){
(app.main.rasterizer.ready_QMARK_ = true);

app.main.rasterizer.process_queued_messages_BANG_();
} else {
}

return app.main.rasterizer.msgbus.next(evdata);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Sends a message to the rasterizer.
 */
app.main.rasterizer.send_message_BANG_ = (function app$main$rasterizer$send_message_BANG_(message){
var window__$1 = app.main.rasterizer.instance.contentWindow;
return window__$1.postMessage(message,app.main.rasterizer.origin);
});
/**
 * Queues a message to be sent to the thumbnail renderer when it's ready.
 */
app.main.rasterizer.queue_message_BANG_ = (function app$main$rasterizer$queue_message_BANG_(message){
return app.main.rasterizer.queue.push(message);
});
/**
 * Replaces URIs for rasterizer ones in styles
 */
app.main.rasterizer.replace_uris = (function app$main$rasterizer$replace_uris(styles){
var public_uri = cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.config.public_uri);
var rasterizer_uri = cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.config.rasterizer_uri);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(public_uri,rasterizer_uri)))){
return cuerdas.core.replace(styles,public_uri,rasterizer_uri);
} else {
return styles;
}
});
/**
 * Renders an SVG
 */
app.main.rasterizer.render = (function app$main$rasterizer$render(p__68050){
var map__68051 = p__68050;
var map__68051__$1 = cljs.core.__destructure_map(map__68051);
var params = map__68051__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68051__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68051__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68051__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68051__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var styles__$1 = app.main.rasterizer.replace_uris(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(styles,""));
var result__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(result,"blob");
var id = ""+(app.common.uuid.next() ?? "");
var payload = ({"data": data, "styles": styles__$1, "width": width, "result": result__$1});
var message = ({"id": id, "scope": "penpot/rasterizer", "payload": payload});
if(app.main.rasterizer.ready_QMARK_){
app.main.rasterizer.send_message_BANG_(message);
} else {
app.main.rasterizer.queue_message_BANG_(message);
}

return beicon.v2.core.take((1),beicon.v2.core.mapcat((function (msg){
var G__68052 = (msg["type"]);
switch (G__68052) {
case "success":
return beicon.v2.core.of((msg["payload"]));

break;
case "failure":
return beicon.v2.core.throw$((new Error((msg["payload"]))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68052)].join('')));

}
}),beicon.v2.core.filter((function (p1__68049_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,(p1__68049_SHARP_["id"]));
}),app.main.rasterizer.msgbus)));
});
/**
 * Renders an SVG using a node
 */
app.main.rasterizer.render_node = (function app$main$rasterizer$render_node(p__68053){
var map__68054 = p__68053;
var map__68054__$1 = cljs.core.__destructure_map(map__68054);
var params = map__68054__$1;
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68054__$1,new cljs.core.Keyword(null,"node","node",581201198));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68054__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68054__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68054__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var width__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(width,app.util.dom.get_attribute(node,"width"));
var styles__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(styles,"");
var data = app.util.dom.node__GT_xml(node);
var result__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(result,"blob");
return app.main.rasterizer.render(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"styles","styles",1954480375),styles__$1,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"result","result",1415092211),result__$1], null));
});
/**
 * Initializes the rasterizer.
 */
app.main.rasterizer.init_BANG_ = (function app$main$rasterizer$init_BANG_(){
var iframe = app.util.dom.create_element.cljs$core$IFn$_invoke$arity$1("iframe");
app.util.dom.set_attribute_BANG_(iframe,"id","rasterizer");

app.util.dom.set_attribute_BANG_(iframe,"src",app.main.rasterizer.origin);

app.util.dom.set_attribute_BANG_(iframe,"hidden",true);

window.addEventListener("message",app.main.rasterizer.on_message);

return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (allowed_QMARK_){
if(cljs.core.truth_(allowed_QMARK_)){
app.util.dom.append_child_BANG_(document.body,iframe);

return (app.main.rasterizer.instance = iframe);
} else {
var new_origin = ""+(app.common.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.public_uri,"rasterizer.html"], 0)) ?? "");
if(app.common.logging.enabled_QMARK_("app.main.rasterizer",new cljs.core.Keyword(null,"warn","warn",-436710552))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"fallback to main domain"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new_origin], null)], null);
}),null)),null,null,"app.main.rasterizer",new cljs.core.Keyword(null,"warn","warn",-436710552),false);
} else {
}


app.util.dom.set_attribute_BANG_(iframe,"src",new_origin);

app.util.dom.append_child_BANG_(document.body,iframe);

(app.main.rasterizer.origin = new_origin);

(app.config.rasterizer_uri = app.config.public_uri);

return (app.main.rasterizer.instance = iframe);
}
}),beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (cause){
if(app.common.logging.enabled_QMARK_("app.main.rasterizer",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"rasterizer iframe blocked by adblocker"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),app.main.rasterizer.origin], null)], null);
}),null)),cause,null,"app.main.rasterizer",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}


return beicon.v2.core.of(false);
}),beicon.v2.core.map((function (response){
var allowed_QMARK_ = cljs.core.not(response.redirected);
if(allowed_QMARK_){
} else {
if(app.common.logging.enabled_QMARK_("app.main.rasterizer",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"rasterizer iframe blocked by adblocker"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),app.main.rasterizer.origin], null)], null);
}),null)),null,null,"app.main.rasterizer",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}

}

return allowed_QMARK_;
}),app.util.http.fetch(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"uri","uri",-774711847),app.config.rasterizer_uri,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"no-cors","no-cors",-603212056)], null)))));
});

//# sourceMappingURL=app.main.rasterizer.js.map
