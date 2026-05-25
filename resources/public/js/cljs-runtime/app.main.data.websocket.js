import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.logging.js";
import "./app.common.uri.js";
import "./app.config.js";
import "./app.util.websocket.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.websocket');
app.common.logging.loggers.set("app.main.data.websocket",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"error","error",-978969032)));
app.main.data.websocket.send_BANG_ = (function app$main$data$websocket$send_BANG_(param69102,param69103){
return app.util.websocket.send_BANG_(param69102,param69103);
});
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.data !== 'undefined') && (typeof app.main.data.websocket !== 'undefined') && (typeof app.main.data.websocket.ws_conn !== 'undefined')){
} else {
app.main.data.websocket.ws_conn = cljs.core.volatile_BANG_(null);
}
app.main.data.websocket.prepare_uri = (function app$main$data$websocket$prepare_uri(params){
var base = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.public_uri,"ws/notifications"], 0)),new cljs.core.Keyword(null,"query","query",-1288509510),app.common.uri.map__GT_query_string.cljs$core$IFn$_invoke$arity$1(params));
var G__69112 = base;
var G__69112__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("https",new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(base)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69112,new cljs.core.Keyword(null,"scheme","scheme",90199613),"wss"):G__69112);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("http",new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(base))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69112__$1,new cljs.core.Keyword(null,"scheme","scheme",90199613),"ws");
} else {
return G__69112__$1;
}
});
app.main.data.websocket.send = (function app$main$data$websocket$send(message){
if((typeof app.main.data.websocket.send_message_69120 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.websocket.send_message_69120 = (function (message,meta69121){
this.message = message;
this.meta69121 = meta69121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.websocket.send_message_69120.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.websocket.send_message_69120.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.websocket","send-message","app.main.data.websocket/send-message",1713313880);
}));

(app.main.data.websocket.send_message_69120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69122,meta69121__$1){
var self__ = this;
var _69122__$1 = this;
return (new app.main.data.websocket.send_message_69120(self__.message,meta69121__$1));
}));

(app.main.data.websocket.send_message_69120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69122){
var self__ = this;
var _69122__$1 = this;
return self__.meta69121;
}));

(app.main.data.websocket.send_message_69120.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.websocket.send_message_69120.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var G__69130 = cljs.core.deref(app.main.data.websocket.ws_conn);
if((G__69130 == null)){
return null;
} else {
return app.util.websocket.send_BANG_(G__69130,self__.message);
}
}));
}

return (new app.main.data.websocket.send_message_69120(message,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.websocket.initialize = (function app$main$data$websocket$initialize(){
if((typeof app.main.data.websocket.initialize_69134 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.websocket.initialize_69134 = (function (meta69135){
this.meta69135 = meta69135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.websocket.initialize_69134.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.websocket.initialize_69134.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.websocket","initialize","app.main.data.websocket/initialize",-1086102386);
}));

(app.main.data.websocket.initialize_69134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69136,meta69135__$1){
var self__ = this;
var _69136__$1 = this;
return (new app.main.data.websocket.initialize_69134(meta69135__$1));
}));

(app.main.data.websocket.initialize_69134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69136){
var self__ = this;
var _69136__$1 = this;
return self__.meta69135;
}));

(app.main.data.websocket.initialize_69134.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.websocket.initialize_69134.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
if(app.common.logging.enabled_QMARK_("app.main.data.websocket",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"initialize"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),"watch"], null)], null);
}),null)),null,null,"app.main.data.websocket",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}


var sid = new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(state);
var uri = app.main.data.websocket.prepare_uri(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),sid], null));
var ws = app.util.websocket.create(uri);
cljs.core.vreset_BANG_(app.main.data.websocket.ws_conn,ws);

var stopper = beicon.v2.core.merge(beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.websocket","finalize","app.main.data.websocket/finalize",-1838092854)),stream),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.websocket","initialize","app.main.data.websocket/initialize",-1086102386)),stream));
return beicon.v2.core.take_until(stopper,beicon.v2.core.merge(beicon.v2.core.of((function (p1__69131_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__69131_SHARP_,new cljs.core.Keyword(null,"ws-conn","ws-conn",1536795552),ws);
})),beicon.v2.core.map((function (p1__69132_SHARP_){
return potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.websocket","message","app.main.data.websocket/message",-2128948247),p1__69132_SHARP_);
}),beicon.v2.core.map(new cljs.core.Keyword(null,"payload","payload",-383036092),beicon.v2.core.filter(app.util.websocket.message_event_QMARK_,app.util.websocket.get_rcv_stream(ws)))),beicon.v2.core.map((function (___$2){
return potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.websocket","opened","app.main.data.websocket/opened",1251993736),cljs.core.PersistentArrayMap.EMPTY);
}),beicon.v2.core.filter(app.util.websocket.opened_event_QMARK_,app.util.websocket.get_rcv_stream(ws)))));
}));
}

return (new app.main.data.websocket.initialize_69134(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.websocket.finalize = (function app$main$data$websocket$finalize(){
if((typeof app.main.data.websocket.finalize_69144 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.websocket.finalize_69144 = (function (meta69145){
this.meta69145 = meta69145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.websocket.finalize_69144.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.websocket.finalize_69144.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.websocket","finalize","app.main.data.websocket/finalize",-1838092854);
}));

(app.main.data.websocket.finalize_69144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69146,meta69145__$1){
var self__ = this;
var _69146__$1 = this;
return (new app.main.data.websocket.finalize_69144(meta69145__$1));
}));

(app.main.data.websocket.finalize_69144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69146){
var self__ = this;
var _69146__$1 = this;
return self__.meta69145;
}));

(app.main.data.websocket.finalize_69144.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.websocket.finalize_69144.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"ws-conn","ws-conn",1536795552));
}));

(app.main.data.websocket.finalize_69144.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.websocket.finalize_69144.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(app.common.logging.enabled_QMARK_("app.main.data.websocket",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"event:finalize"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),"effect"], null)], null);
}),null)),null,null,"app.main.data.websocket",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}


var G__69157 = cljs.core.deref(app.main.data.websocket.ws_conn);
if((G__69157 == null)){
return null;
} else {
return app.util.websocket.close_BANG_(G__69157);
}
}));
}

return (new app.main.data.websocket.finalize_69144(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.websocket.js.map
