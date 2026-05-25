import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.transit.js";
import "./beicon.v2.core.js";
import "./goog.events.events.js";
import "./goog.net.websocket.js";
goog.provide('app.util.websocket');

/**
 * @interface
 */
app.util.websocket.IWebSocket = function(){};

var app$util$websocket$IWebSocket$_stream$dyn_69080 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.util.websocket._stream[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.util.websocket._stream["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IWebSocket.-stream",_);
}
}
});
/**
 * Retrieve the message stream
 */
app.util.websocket._stream = (function app$util$websocket$_stream(_){
if((((!((_ == null)))) && ((!((_.app$util$websocket$IWebSocket$_stream$arity$1 == null)))))){
return _.app$util$websocket$IWebSocket$_stream$arity$1(_);
} else {
return app$util$websocket$IWebSocket$_stream$dyn_69080(_);
}
});

var app$util$websocket$IWebSocket$_send$dyn_69085 = (function (_,message){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.util.websocket._send[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,message) : m__5374__auto__.call(null,_,message));
} else {
var m__5372__auto__ = (app.util.websocket._send["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,message) : m__5372__auto__.call(null,_,message));
} else {
throw cljs.core.missing_protocol("IWebSocket.-send",_);
}
}
});
/**
 * send a message
 */
app.util.websocket._send = (function app$util$websocket$_send(_,message){
if((((!((_ == null)))) && ((!((_.app$util$websocket$IWebSocket$_send$arity$2 == null)))))){
return _.app$util$websocket$IWebSocket$_send$arity$2(_,message);
} else {
return app$util$websocket$IWebSocket$_send$dyn_69085(_,message);
}
});

var app$util$websocket$IWebSocket$_close$dyn_69086 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.util.websocket._close[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.util.websocket._close["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IWebSocket.-close",_);
}
}
});
/**
 * close websocket
 */
app.util.websocket._close = (function app$util$websocket$_close(_){
if((((!((_ == null)))) && ((!((_.app$util$websocket$IWebSocket$_close$arity$1 == null)))))){
return _.app$util$websocket$IWebSocket$_close$arity$1(_);
} else {
return app$util$websocket$IWebSocket$_close$dyn_69086(_);
}
});

var app$util$websocket$IWebSocket$_open_QMARK_$dyn_69087 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.util.websocket._open_QMARK_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.util.websocket._open_QMARK_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IWebSocket.-open?",_);
}
}
});
/**
 * check if the channel is open
 */
app.util.websocket._open_QMARK_ = (function app$util$websocket$_open_QMARK_(_){
if((((!((_ == null)))) && ((!((_.app$util$websocket$IWebSocket$_open_QMARK_$arity$1 == null)))))){
return _.app$util$websocket$IWebSocket$_open_QMARK_$arity$1(_);
} else {
return app$util$websocket$IWebSocket$_open_QMARK_$dyn_69087(_);
}
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {app.util.websocket.IWebSocket}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
app.util.websocket.t_app$util$websocket69019 = (function (uri,sb,ws,data,lk1,lk2,lk3,meta69020){
this.uri = uri;
this.sb = sb;
this.ws = ws;
this.data = data;
this.lk1 = lk1;
this.lk2 = lk2;
this.lk3 = lk3;
this.meta69020 = meta69020;
this.cljs$lang$protocol_mask$partition0$ = 4620288;
this.cljs$lang$protocol_mask$partition1$ = 98306;
});
(app.util.websocket.t_app$util$websocket69019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69021,meta69020__$1){
var self__ = this;
var _69021__$1 = this;
return (new app.util.websocket.t_app$util$websocket69019(self__.uri,self__.sb,self__.ws,self__.data,self__.lk1,self__.lk2,self__.lk3,meta69020__$1));
}));

(app.util.websocket.t_app$util$websocket69019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69021){
var self__ = this;
var _69021__$1 = this;
return self__.meta69020;
}));

(app.util.websocket.t_app$util$websocket69019.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._deref(self__.data);
}));

(app.util.websocket.t_app$util$websocket69019.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,newval){
var self__ = this;
var ___$1 = this;
return cljs.core._reset_BANG_(self__.data,newval);
}));

(app.util.websocket.t_app$util$websocket69019.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return cljs.core._swap_BANG_(self__.data,f);
}));

(app.util.websocket.t_app$util$websocket69019.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (_,f,x){
var self__ = this;
var ___$1 = this;
return cljs.core._swap_BANG_(self__.data,f,x);
}));

(app.util.websocket.t_app$util$websocket69019.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (_,f,x,y){
var self__ = this;
var ___$1 = this;
return cljs.core._swap_BANG_(self__.data,f,x,y);
}));

(app.util.websocket.t_app$util$websocket69019.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (_,f,x,y,more){
var self__ = this;
var ___$1 = this;
return cljs.core._swap_BANG_(self__.data,f,x,y,more);
}));

(app.util.websocket.t_app$util$websocket69019.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (_,oldval,newval){
var self__ = this;
var ___$1 = this;
return cljs.core._notify_watches(self__.data,oldval,newval);
}));

(app.util.websocket.t_app$util$websocket69019.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (_,key,f){
var self__ = this;
var ___$1 = this;
return cljs.core._add_watch(self__.data,key,f);
}));

(app.util.websocket.t_app$util$websocket69019.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
return cljs.core._remove_watch(self__.data,key);
}));

(app.util.websocket.t_app$util$websocket69019.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return goog.getUid(self__.ws);
}));

(app.util.websocket.t_app$util$websocket69019.prototype.app$util$websocket$IWebSocket$ = cljs.core.PROTOCOL_SENTINEL);

(app.util.websocket.t_app$util$websocket69019.prototype.app$util$websocket$IWebSocket$_stream$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return beicon.v2.core.map((function (p__69037){
var map__69038 = p__69037;
var map__69038__$1 = cljs.core.__destructure_map(map__69038);
var message = map__69038__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69038__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69038__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var G__69039 = message;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"message","message",-406056002),type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69039,new cljs.core.Keyword(null,"payload","payload",-383036092),app.common.transit.decode_str.cljs$core$IFn$_invoke$arity$1(payload));
} else {
return G__69039;
}
}),self__.sb);
}));

(app.util.websocket.t_app$util$websocket69019.prototype.app$util$websocket$IWebSocket$_send$arity$2 = (function (_,msg){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.ws.isOpen())){
return self__.ws.send(msg);
} else {
return null;
}
}));

(app.util.websocket.t_app$util$websocket69019.prototype.app$util$websocket$IWebSocket$_open_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ws.isOpen();
}));

(app.util.websocket.t_app$util$websocket69019.prototype.app$util$websocket$IWebSocket$_close$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.sb.complete();

goog.events.unlistenByKey(self__.lk1);

goog.events.unlistenByKey(self__.lk2);

goog.events.unlistenByKey(self__.lk3);

self__.ws.close();

return self__.ws.dispose();
}));

(app.util.websocket.t_app$util$websocket69019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",865819680,null),new cljs.core.Symbol(null,"sb","sb",-1249746442,null),new cljs.core.Symbol(null,"ws","ws",1727372970,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"lk1","lk1",301206729,null),new cljs.core.Symbol(null,"lk2","lk2",-430193134,null),new cljs.core.Symbol(null,"lk3","lk3",1519840706,null),new cljs.core.Symbol(null,"meta69020","meta69020",-957765600,null)], null);
}));

(app.util.websocket.t_app$util$websocket69019.cljs$lang$type = true);

(app.util.websocket.t_app$util$websocket69019.cljs$lang$ctorStr = "app.util.websocket/t_app$util$websocket69019");

(app.util.websocket.t_app$util$websocket69019.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.util.websocket/t_app$util$websocket69019");
}));

/**
 * Positional factory function for app.util.websocket/t_app$util$websocket69019.
 */
app.util.websocket.__GT_t_app$util$websocket69019 = (function app$util$websocket$__GT_t_app$util$websocket69019(uri,sb,ws,data,lk1,lk2,lk3,meta69020){
return (new app.util.websocket.t_app$util$websocket69019(uri,sb,ws,data,lk1,lk2,lk3,meta69020));
});


app.util.websocket.create = (function app$util$websocket$create(uri){
var sb = beicon.v2.core.subject();
var ws = (new goog.net.WebSocket(({"autoReconnect": true})));
var data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var lk1 = goog.events.listen(ws,goog.net.WebSocket.EventType.MESSAGE,(function (p1__69010_SHARP_){
return sb.next(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"payload","payload",-383036092),p1__69010_SHARP_.message], null));
}));
var lk2 = goog.events.listen(ws,goog.net.WebSocket.EventType.ERROR,(function (p1__69011_SHARP_){
return sb.next(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"payload","payload",-383036092),p1__69011_SHARP_], null));
}));
var lk3 = goog.events.listen(ws,goog.net.WebSocket.EventType.OPENED,(function (p1__69012_SHARP_){
return sb.next(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"opened","opened",-1451743091),new cljs.core.Keyword(null,"payload","payload",-383036092),p1__69012_SHARP_], null));
}));
ws.open(cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri));

return (new app.util.websocket.t_app$util$websocket69019(uri,sb,ws,data,lk1,lk2,lk3,cljs.core.PersistentArrayMap.EMPTY));
});
app.util.websocket.message_event_QMARK_ = (function app$util$websocket$message_event_QMARK_(msg){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"message","message",-406056002));
});
app.util.websocket.error_event_QMARK_ = (function app$util$websocket$error_event_QMARK_(msg){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"error","error",-978969032));
});
app.util.websocket.opened_event_QMARK_ = (function app$util$websocket$opened_event_QMARK_(msg){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"opened","opened",-1451743091));
});
app.util.websocket.send_BANG_ = (function app$util$websocket$send_BANG_(ws,msg){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return app.util.websocket._send(ws,app.common.transit.encode_str.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"json-verbose","json-verbose",-542533531)], null)));
} else {
return app.util.websocket._send(ws,app.common.transit.encode_str.cljs$core$IFn$_invoke$arity$1(msg));
}
});
app.util.websocket.close_BANG_ = (function app$util$websocket$close_BANG_(ws){
return app.util.websocket._close(ws);
});
app.util.websocket.open_QMARK_ = (function app$util$websocket$open_QMARK_(ws){
return app.util.websocket._open_QMARK_(ws);
});
app.util.websocket.get_rcv_stream = (function app$util$websocket$get_rcv_stream(ws){
return app.util.websocket._stream(ws);
});

//# sourceMappingURL=app.util.websocket.js.map
