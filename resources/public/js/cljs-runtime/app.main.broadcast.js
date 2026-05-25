import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.exceptions.js";
import "./app.common.transit.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.broadcast');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.main.broadcast.BroadcastMessage = (function (id,type,data,__meta,__extmap,__hash){
this.id = id;
this.type = type;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.main.broadcast.BroadcastMessage.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(app.main.broadcast.BroadcastMessage.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k53439,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__53443 = k53439;
var G__53443__$1 = (((G__53443 instanceof cljs.core.Keyword))?G__53443.fqn:null);
switch (G__53443__$1) {
case "id":
return self__.id;

break;
case "type":
return self__.type;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53439,else__5326__auto__);

}
}));

(app.main.broadcast.BroadcastMessage.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__53447){
var vec__53448 = p__53447;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53448,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53448,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(app.main.broadcast.BroadcastMessage.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#app.main.broadcast.BroadcastMessage{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(app.main.broadcast.BroadcastMessage.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53438){
var self__ = this;
var G__53438__$1 = this;
return (new cljs.core.RecordIter((0),G__53438__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.main.broadcast.BroadcastMessage.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(app.main.broadcast.BroadcastMessage.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new app.main.broadcast.BroadcastMessage(self__.id,self__.type,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.main.broadcast.BroadcastMessage.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(app.main.broadcast.BroadcastMessage.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-110346835 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(app.main.broadcast.BroadcastMessage.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53440,other53441){
var self__ = this;
var this53440__$1 = this;
return (((!((other53441 == null)))) && ((((this53440__$1.constructor === other53441.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53440__$1.id,other53441.id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53440__$1.type,other53441.type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53440__$1.data,other53441.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53440__$1.__extmap,other53441.__extmap)))))))))));
}));

(app.main.broadcast.BroadcastMessage.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new app.main.broadcast.BroadcastMessage(self__.id,self__.type,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(app.main.broadcast.BroadcastMessage.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k53439){
var self__ = this;
var this__5330__auto____$1 = this;
var G__53456 = k53439;
var G__53456__$1 = (((G__53456 instanceof cljs.core.Keyword))?G__53456.fqn:null);
switch (G__53456__$1) {
case "id":
case "type":
case "data":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k53439);

}
}));

(app.main.broadcast.BroadcastMessage.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__53438){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__53458 = cljs.core.keyword_identical_QMARK_;
var expr__53459 = k__5332__auto__;
if(cljs.core.truth_((pred__53458.cljs$core$IFn$_invoke$arity$2 ? pred__53458.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__53459) : pred__53458.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__53459)))){
return (new app.main.broadcast.BroadcastMessage(G__53438,self__.type,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53458.cljs$core$IFn$_invoke$arity$2 ? pred__53458.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__53459) : pred__53458.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__53459)))){
return (new app.main.broadcast.BroadcastMessage(self__.id,G__53438,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53458.cljs$core$IFn$_invoke$arity$2 ? pred__53458.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__53459) : pred__53458.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__53459)))){
return (new app.main.broadcast.BroadcastMessage(self__.id,self__.type,G__53438,self__.__meta,self__.__extmap,null));
} else {
return (new app.main.broadcast.BroadcastMessage(self__.id,self__.type,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__53438),null));
}
}
}
}));

(app.main.broadcast.BroadcastMessage.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(app.main.broadcast.BroadcastMessage.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.data;
}));

(app.main.broadcast.BroadcastMessage.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__53438){
var self__ = this;
var this__5322__auto____$1 = this;
return (new app.main.broadcast.BroadcastMessage(self__.id,self__.type,self__.data,G__53438,self__.__extmap,self__.__hash));
}));

(app.main.broadcast.BroadcastMessage.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(app.main.broadcast.BroadcastMessage.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(app.main.broadcast.BroadcastMessage.cljs$lang$type = true);

(app.main.broadcast.BroadcastMessage.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"app.main.broadcast/BroadcastMessage",null,(1),null));
}));

(app.main.broadcast.BroadcastMessage.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"app.main.broadcast/BroadcastMessage");
}));

/**
 * Positional factory function for app.main.broadcast/BroadcastMessage.
 */
app.main.broadcast.__GT_BroadcastMessage = (function app$main$broadcast$__GT_BroadcastMessage(id,type,data){
return (new app.main.broadcast.BroadcastMessage(id,type,data,null,null,null));
});

/**
 * Factory function for app.main.broadcast/BroadcastMessage, taking a map of keywords to field values.
 */
app.main.broadcast.map__GT_BroadcastMessage = (function app$main$broadcast$map__GT_BroadcastMessage(G__53442){
var extmap__5365__auto__ = (function (){var G__53467 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53442,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"data","data",-232669377)], 0));
if(cljs.core.record_QMARK_(G__53442)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53467);
} else {
return G__53467;
}
})();
return (new app.main.broadcast.BroadcastMessage(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__53442),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__53442),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__53442),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

app.main.broadcast.default_topic = "penpot";
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.broadcast !== 'undefined') && (typeof app.main.broadcast.default_channel !== 'undefined')){
} else {
app.main.broadcast.default_channel = (((typeof BroadcastChannel !== 'undefined'))?(function (){try{return (new BroadcastChannel("penpot"));
}catch (e53469){var e__43136__auto__ = e53469;
return null;
}})():null);
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.broadcast !== 'undefined') && (typeof app.main.broadcast.stream !== 'undefined')){
} else {
app.main.broadcast.stream = (((typeof BroadcastChannel !== 'undefined'))?beicon.v2.core.share(beicon.v2.core.map(app.main.broadcast.map__GT_BroadcastMessage,beicon.v2.core.map(app.common.transit.decode_str,beicon.v2.core.create((function (subs){
var chan = (new BroadcastChannel("penpot"));
(chan["onmessage"] = (function (p1__53472_SHARP_){
return subs.next((p1__53472_SHARP_["data"]));
}));

return (function (){
return chan.close();
});
}))))):beicon.v2.core.subject());
}
app.main.broadcast.emit_BANG_ = (function app$main$broadcast$emit_BANG_(var_args){
var G__53474 = arguments.length;
switch (G__53474) {
case 2:
return app.main.broadcast.emit_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.broadcast.emit_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.broadcast.emit_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,data){
if(cljs.core.truth_(app.main.broadcast.default_channel)){
app.main.broadcast.default_channel.postMessage(app.common.transit.encode_str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null)));

return null;
} else {
return null;
}
}));

(app.main.broadcast.emit_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (id,type,data){
if(cljs.core.truth_(app.main.broadcast.default_channel)){
app.main.broadcast.default_channel.postMessage(app.common.transit.encode_str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null)));

return null;
} else {
return null;
}
}));

(app.main.broadcast.emit_BANG_.cljs$lang$maxFixedArity = 3);

app.main.broadcast.type_QMARK_ = (function app$main$broadcast$type_QMARK_(var_args){
var G__53479 = arguments.length;
switch (G__53479) {
case 1:
return app.main.broadcast.type_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.broadcast.type_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.broadcast.type_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (type){
return (function (obj){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(obj),type);
});
}));

(app.main.broadcast.type_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (obj,type){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(obj),type);
}));

(app.main.broadcast.type_QMARK_.cljs$lang$maxFixedArity = 2);

app.main.broadcast.event = (function app$main$broadcast$event(type,data){
if((typeof app.main.broadcast.event_53482 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.broadcast.event_53482 = (function (type,data,meta53483){
this.type = type;
this.data = data;
this.meta53483 = meta53483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.broadcast.event_53482.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.broadcast.event_53482.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.broadcast","event","app.main.broadcast/event",-1531468833);
}));

(app.main.broadcast.event_53482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53484,meta53483__$1){
var self__ = this;
var _53484__$1 = this;
return (new app.main.broadcast.event_53482(self__.type,self__.data,meta53483__$1));
}));

(app.main.broadcast.event_53482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53484){
var self__ = this;
var _53484__$1 = this;
return self__.meta53483;
}));

(app.main.broadcast.event_53482.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.broadcast.event_53482.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return app.main.broadcast.emit_BANG_.cljs$core$IFn$_invoke$arity$2(self__.type,self__.data);
}));
}

return (new app.main.broadcast.event_53482(type,data,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.broadcast.js.map
