import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.uuid.js";
import "./app.util.object.js";
import "./app.worker.messages.js";
import "./beicon.v2.core.js";
goog.provide('app.util.worker');

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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.util.worker.Worker = (function (instance,stream,__meta,__extmap,__hash){
this.instance = instance;
this.stream = stream;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.util.worker.Worker.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(app.util.worker.Worker.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k54967,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__54974 = k54967;
var G__54974__$1 = (((G__54974 instanceof cljs.core.Keyword))?G__54974.fqn:null);
switch (G__54974__$1) {
case "instance":
return self__.instance;

break;
case "stream":
return self__.stream;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54967,else__5326__auto__);

}
}));

(app.util.worker.Worker.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__54975){
var vec__54976 = p__54975;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54976,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54976,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(app.util.worker.Worker.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#app.util.worker.Worker{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance","instance",-2121349050),self__.instance],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stream","stream",1534941648),self__.stream],null))], null),self__.__extmap));
}));

(app.util.worker.Worker.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54966){
var self__ = this;
var G__54966__$1 = this;
return (new cljs.core.RecordIter((0),G__54966__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"stream","stream",1534941648)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.util.worker.Worker.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(app.util.worker.Worker.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new app.util.worker.Worker(self__.instance,self__.stream,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.util.worker.Worker.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(app.util.worker.Worker.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-2074835673 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(app.util.worker.Worker.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54968,other54969){
var self__ = this;
var this54968__$1 = this;
return (((!((other54969 == null)))) && ((((this54968__$1.constructor === other54969.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54968__$1.instance,other54969.instance)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54968__$1.stream,other54969.stream)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54968__$1.__extmap,other54969.__extmap)))))))));
}));

(app.util.worker.Worker.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"instance","instance",-2121349050),null,new cljs.core.Keyword(null,"stream","stream",1534941648),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new app.util.worker.Worker(self__.instance,self__.stream,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(app.util.worker.Worker.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k54967){
var self__ = this;
var this__5330__auto____$1 = this;
var G__54980 = k54967;
var G__54980__$1 = (((G__54980 instanceof cljs.core.Keyword))?G__54980.fqn:null);
switch (G__54980__$1) {
case "instance":
case "stream":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k54967);

}
}));

(app.util.worker.Worker.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__54966){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__54982 = cljs.core.keyword_identical_QMARK_;
var expr__54983 = k__5332__auto__;
if(cljs.core.truth_((pred__54982.cljs$core$IFn$_invoke$arity$2 ? pred__54982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instance","instance",-2121349050),expr__54983) : pred__54982.call(null,new cljs.core.Keyword(null,"instance","instance",-2121349050),expr__54983)))){
return (new app.util.worker.Worker(G__54966,self__.stream,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54982.cljs$core$IFn$_invoke$arity$2 ? pred__54982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stream","stream",1534941648),expr__54983) : pred__54982.call(null,new cljs.core.Keyword(null,"stream","stream",1534941648),expr__54983)))){
return (new app.util.worker.Worker(self__.instance,G__54966,self__.__meta,self__.__extmap,null));
} else {
return (new app.util.worker.Worker(self__.instance,self__.stream,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__54966),null));
}
}
}));

(app.util.worker.Worker.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"instance","instance",-2121349050),self__.instance,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stream","stream",1534941648),self__.stream,null))], null),self__.__extmap));
}));

(app.util.worker.Worker.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__54966){
var self__ = this;
var this__5322__auto____$1 = this;
return (new app.util.worker.Worker(self__.instance,self__.stream,G__54966,self__.__extmap,self__.__hash));
}));

(app.util.worker.Worker.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(app.util.worker.Worker.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"instance","instance",-480817523,null),new cljs.core.Symbol(null,"stream","stream",-1119494121,null)], null);
}));

(app.util.worker.Worker.cljs$lang$type = true);

(app.util.worker.Worker.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"app.util.worker/Worker",null,(1),null));
}));

(app.util.worker.Worker.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"app.util.worker/Worker");
}));

/**
 * Positional factory function for app.util.worker/Worker.
 */
app.util.worker.__GT_Worker = (function app$util$worker$__GT_Worker(instance,stream){
return (new app.util.worker.Worker(instance,stream,null,null,null));
});

/**
 * Factory function for app.util.worker/Worker, taking a map of keywords to field values.
 */
app.util.worker.map__GT_Worker = (function app$util$worker$map__GT_Worker(G__54971){
var extmap__5365__auto__ = (function (){var G__54988 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54971,new cljs.core.Keyword(null,"instance","instance",-2121349050),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stream","stream",1534941648)], 0));
if(cljs.core.record_QMARK_(G__54971)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54988);
} else {
return G__54988;
}
})();
return (new app.util.worker.Worker(new cljs.core.Keyword(null,"instance","instance",-2121349050).cljs$core$IFn$_invoke$arity$1(G__54971),new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(G__54971),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

app.util.worker.send_message_BANG_ = (function app$util$worker$send_message_BANG_(var_args){
var G__54993 = arguments.length;
switch (G__54993) {
case 2:
return app.util.worker.send_message_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.util.worker.send_message_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.worker.send_message_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (worker,message){
return app.util.worker.send_message_BANG_.cljs$core$IFn$_invoke$arity$3(worker,message,null);
}));

(app.util.worker.send_message_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (worker,p__54995,p__54996){
var map__54997 = p__54995;
var map__54997__$1 = cljs.core.__destructure_map(map__54997);
var message = map__54997__$1;
var sender_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54997__$1,new cljs.core.Keyword(null,"sender-id","sender-id",-1032660135));
var map__54998 = p__54996;
var map__54998__$1 = cljs.core.__destructure_map(map__54998);
var many_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54998__$1,new cljs.core.Keyword(null,"many?","many?",-605360673),false);
var ignore_response_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54998__$1,new cljs.core.Keyword(null,"ignore-response?","ignore-response?",-1427500946),false);
var take_messages = (function (ob){
if(cljs.core.truth_(many_QMARK_)){
return beicon.v2.core.take_while((function (p1__54990_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(p1__54990_SHARP_));
}),ob);
} else {
return beicon.v2.core.take((1),ob);
}
});
var transfer = new cljs.core.Keyword(null,"transfer","transfer",327423400).cljs$core$IFn$_invoke$arity$1(message);
var data = (function (){var G__54999 = app.worker.messages.encode(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(message,new cljs.core.Keyword(null,"transfer","transfer",327423400)));
if((!((transfer == null)))){
return app.util.object.set_BANG_(G__54999,"transfer",transfer);
} else {
return G__54999;
}
})();
var instance = new cljs.core.Keyword(null,"instance","instance",-2121349050).cljs$core$IFn$_invoke$arity$1(worker);
if((!((instance == null)))){
instance.postMessage(data,transfer);

if(cljs.core.not(ignore_response_QMARK_)){
return beicon.v2.core.map(app.util.worker.handle_response,beicon.v2.core.filter(cljs.core.complement(new cljs.core.Keyword(null,"dropped","dropped",-1651285782)),take_messages(beicon.v2.core.filter((function (p1__54991_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reply-to","reply-to",-145674792).cljs$core$IFn$_invoke$arity$1(p1__54991_SHARP_),sender_id);
}),new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(worker)))));
} else {
return beicon.v2.core.empty();
}
} else {
return beicon.v2.core.empty();
}
}));

(app.util.worker.send_message_BANG_.cljs$lang$maxFixedArity = 3);

app.util.worker.ask_BANG_ = (function app$util$worker$ask_BANG_(var_args){
var G__55005 = arguments.length;
switch (G__55005) {
case 2:
return app.util.worker.ask_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.util.worker.ask_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.worker.ask_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (worker,message){
return app.util.worker.ask_BANG_.cljs$core$IFn$_invoke$arity$3(worker,message,null);
}));

(app.util.worker.ask_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (worker,message,transfer){
return app.util.worker.send_message_BANG_.cljs$core$IFn$_invoke$arity$2(worker,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sender-id","sender-id",-1032660135),app.common.uuid.next(),new cljs.core.Keyword(null,"payload","payload",-383036092),message,new cljs.core.Keyword(null,"transfer","transfer",327423400),transfer], null));
}));

(app.util.worker.ask_BANG_.cljs$lang$maxFixedArity = 3);

app.util.worker.emit_BANG_ = (function app$util$worker$emit_BANG_(var_args){
var G__55011 = arguments.length;
switch (G__55011) {
case 2:
return app.util.worker.emit_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.util.worker.emit_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.worker.emit_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (worker,message){
return app.util.worker.emit_BANG_.cljs$core$IFn$_invoke$arity$3(worker,message,null);
}));

(app.util.worker.emit_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (worker,message,transfer){
return app.util.worker.send_message_BANG_.cljs$core$IFn$_invoke$arity$3(worker,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sender-id","sender-id",-1032660135),app.common.uuid.next(),new cljs.core.Keyword(null,"payload","payload",-383036092),message,new cljs.core.Keyword(null,"transfer","transfer",327423400),transfer], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-response?","ignore-response?",-1427500946),true], null));
}));

(app.util.worker.emit_BANG_.cljs$lang$maxFixedArity = 3);

app.util.worker.ask_many_BANG_ = (function app$util$worker$ask_many_BANG_(var_args){
var G__55013 = arguments.length;
switch (G__55013) {
case 2:
return app.util.worker.ask_many_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.util.worker.ask_many_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.worker.ask_many_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (worker,message){
return app.util.worker.ask_many_BANG_.cljs$core$IFn$_invoke$arity$3(worker,message,null);
}));

(app.util.worker.ask_many_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (worker,message,transfer){
return app.util.worker.send_message_BANG_.cljs$core$IFn$_invoke$arity$3(worker,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sender-id","sender-id",-1032660135),app.common.uuid.next(),new cljs.core.Keyword(null,"payload","payload",-383036092),message,new cljs.core.Keyword(null,"transfer","transfer",327423400),transfer], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"many?","many?",-605360673),true], null));
}));

(app.util.worker.ask_many_BANG_.cljs$lang$maxFixedArity = 3);

app.util.worker.ask_buffered_BANG_ = (function app$util$worker$ask_buffered_BANG_(var_args){
var G__55015 = arguments.length;
switch (G__55015) {
case 2:
return app.util.worker.ask_buffered_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.util.worker.ask_buffered_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.worker.ask_buffered_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (worker,message){
return app.util.worker.ask_buffered_BANG_.cljs$core$IFn$_invoke$arity$3(worker,message,null);
}));

(app.util.worker.ask_buffered_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (worker,message,transfer){
return app.util.worker.send_message_BANG_.cljs$core$IFn$_invoke$arity$2(worker,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sender-id","sender-id",-1032660135),app.common.uuid.next(),new cljs.core.Keyword(null,"payload","payload",-383036092),message,new cljs.core.Keyword(null,"buffer?","buffer?",607721787),true,new cljs.core.Keyword(null,"transfer","transfer",327423400),transfer], null));
}));

(app.util.worker.ask_buffered_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Return a initialized webworker instance.
 */
app.util.worker.init = (function app$util$worker$init(path,on_error){
var instance = (new Worker(path));
var bus = beicon.v2.core.subject();
var worker = (new app.util.worker.Worker(instance,beicon.v2.core.to_observable(bus),null,null,null));
var handle_message = (function (event){
var message = app.worker.messages.decode(event.data);
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(message))){
var G__55016 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(message);
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__55016) : on_error.call(null,G__55016));
} else {
return bus.next(message);
}
});
var handle_error = (function (event){
var G__55017 = worker;
var G__55018 = event.data;
return (on_error.cljs$core$IFn$_invoke$arity$2 ? on_error.cljs$core$IFn$_invoke$arity$2(G__55017,G__55018) : on_error.call(null,G__55017,G__55018));
});
instance.addEventListener("message",handle_message);

instance.addEventListener("error",handle_error);

return worker;
});
app.util.worker.handle_response = (function app$util$worker$handle_response(p__55019){
var map__55020 = p__55019;
var map__55020__$1 = cljs.core.__destructure_map(map__55020);
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55020__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55020__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var temp__5823__auto__ = error;
if(cljs.core.truth_(temp__5823__auto__)){
var map__55022 = temp__5823__auto__;
var map__55022__$1 = cljs.core.__destructure_map(map__55022);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55022__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55022__$1,new cljs.core.Keyword(null,"message","message",-406056002));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(message,data);
} else {
return payload;
}
});

//# sourceMappingURL=app.util.worker.js.map
