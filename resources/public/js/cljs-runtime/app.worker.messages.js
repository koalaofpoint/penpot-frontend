import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.transit.js";
import "./app.util.object.js";
goog.provide('app.worker.messages');
app.worker.messages.encode = (function app$worker$messages$encode(p__54940){
var map__54941 = p__54940;
var map__54941__$1 = cljs.core.__destructure_map(map__54941);
var message = map__54941__$1;
var sender_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54941__$1,new cljs.core.Keyword(null,"sender-id","sender-id",-1032660135));
var reply_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54941__$1,new cljs.core.Keyword(null,"reply-to","reply-to",-145674792));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54941__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var buffer_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54941__$1,new cljs.core.Keyword(null,"buffer?","buffer?",607721787));
return ({"cmd": app.common.data.name(new cljs.core.Keyword(null,"cmd","cmd",-302931143).cljs$core$IFn$_invoke$arity$1(payload)), "senderId": (cljs.core.truth_(sender_id)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(sender_id):null), "replyTo": (cljs.core.truth_(reply_to)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(reply_to):null), "payload": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-indices","initialize-indices",241528700),new cljs.core.Keyword(null,"cmd","cmd",-302931143).cljs$core$IFn$_invoke$arity$1(payload)))?new cljs.core.Keyword(null,"file-raw","file-raw",-341717768).cljs$core$IFn$_invoke$arity$1(payload):(((!((payload == null))))?app.common.transit.encode_str.cljs$core$IFn$_invoke$arity$1(payload):null)), "buffer": (((!((buffer_QMARK_ == null))))?buffer_QMARK_:null)});
});
app.worker.messages.decode = (function app$worker$messages$decode(data){
var cmd = app.util.object.get.cljs$core$IFn$_invoke$arity$2(data,"cmd");
var sender_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(data,"senderId");
var reply_to = app.util.object.get.cljs$core$IFn$_invoke$arity$2(data,"replyTo");
var payload = app.util.object.get.cljs$core$IFn$_invoke$arity$2(data,"payload");
var buffer = app.util.object.get.cljs$core$IFn$_invoke$arity$2(data,"buffer");
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sender-id","sender-id",-1032660135),(cljs.core.truth_(sender_id)?cljs.core.uuid(sender_id):null),new cljs.core.Keyword(null,"reply-to","reply-to",-145674792),(cljs.core.truth_(reply_to)?cljs.core.uuid(reply_to):null),new cljs.core.Keyword(null,"payload","payload",-383036092),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cmd,"initialize-indices"))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cmd","cmd",-302931143),new cljs.core.Keyword(null,"initialize-indices","initialize-indices",241528700),new cljs.core.Keyword(null,"file-raw","file-raw",-341717768),payload], null):(((!((payload == null))))?app.common.transit.decode_str.cljs$core$IFn$_invoke$arity$1(payload):null)),new cljs.core.Keyword(null,"buffer?","buffer?",607721787),buffer], null));
});

//# sourceMappingURL=app.worker.messages.js.map
