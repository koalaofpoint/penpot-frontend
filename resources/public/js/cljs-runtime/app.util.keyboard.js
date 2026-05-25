import "./cljs_env.js";
import "./cljs.core.js";
import "./app.config.js";
import "./app.util.dom.js";
import "./cuerdas.core.js";
goog.provide('app.util.keyboard');

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
app.util.keyboard.KeyboardEvent = (function (type,key,shift,ctrl,alt,meta,mod,editing,native_event,__meta,__extmap,__hash){
this.type = type;
this.key = key;
this.shift = shift;
this.ctrl = ctrl;
this.alt = alt;
this.meta = meta;
this.mod = mod;
this.editing = editing;
this.native_event = native_event;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.util.keyboard.KeyboardEvent.prototype.preventDefault = (function (){
var self__ = this;
var _ = this;
return app.util.dom.prevent_default(self__.native_event);
}));

(app.util.keyboard.KeyboardEvent.prototype.stopPropagation = (function (){
var self__ = this;
var _ = this;
return app.util.dom.stop_propagation(self__.native_event);
}));

(app.util.keyboard.KeyboardEvent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(app.util.keyboard.KeyboardEvent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k66574,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__66621 = k66574;
var G__66621__$1 = (((G__66621 instanceof cljs.core.Keyword))?G__66621.fqn:null);
switch (G__66621__$1) {
case "type":
return self__.type;

break;
case "key":
return self__.key;

break;
case "shift":
return self__.shift;

break;
case "ctrl":
return self__.ctrl;

break;
case "alt":
return self__.alt;

break;
case "meta":
return self__.meta;

break;
case "mod":
return self__.mod;

break;
case "editing":
return self__.editing;

break;
case "native-event":
return self__.native_event;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k66574,else__5326__auto__);

}
}));

(app.util.keyboard.KeyboardEvent.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__66632){
var vec__66633 = p__66632;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66633,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66633,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(app.util.keyboard.KeyboardEvent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#app.util.keyboard.KeyboardEvent{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"shift","shift",997140064),self__.shift],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ctrl","ctrl",361402094),self__.ctrl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alt","alt",-3214426),self__.alt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"meta","meta",1499536964),self__.meta],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mod","mod",-130487320),self__.mod],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"editing","editing",1365491601),self__.editing],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"native-event","native-event",-387122796),self__.native_event],null))], null),self__.__extmap));
}));

(app.util.keyboard.KeyboardEvent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66573){
var self__ = this;
var G__66573__$1 = this;
return (new cljs.core.RecordIter((0),G__66573__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"mod","mod",-130487320),new cljs.core.Keyword(null,"editing","editing",1365491601),new cljs.core.Keyword(null,"native-event","native-event",-387122796)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.util.keyboard.KeyboardEvent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(app.util.keyboard.KeyboardEvent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new app.util.keyboard.KeyboardEvent(self__.type,self__.key,self__.shift,self__.ctrl,self__.alt,self__.meta,self__.mod,self__.editing,self__.native_event,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.util.keyboard.KeyboardEvent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (9 + cljs.core.count(self__.__extmap));
}));

(app.util.keyboard.KeyboardEvent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-327343103 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(app.util.keyboard.KeyboardEvent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this66579,other66580){
var self__ = this;
var this66579__$1 = this;
return (((!((other66580 == null)))) && ((((this66579__$1.constructor === other66580.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66579__$1.type,other66580.type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66579__$1.key,other66580.key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66579__$1.shift,other66580.shift)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66579__$1.ctrl,other66580.ctrl)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66579__$1.alt,other66580.alt)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66579__$1.meta,other66580.meta)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66579__$1.mod,other66580.mod)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66579__$1.editing,other66580.editing)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66579__$1.native_event,other66580.native_event)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66579__$1.__extmap,other66580.__extmap)))))))))))))))))))))));
}));

(app.util.keyboard.KeyboardEvent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"shift","shift",997140064),null,new cljs.core.Keyword(null,"meta","meta",1499536964),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"alt","alt",-3214426),null,new cljs.core.Keyword(null,"mod","mod",-130487320),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),null,new cljs.core.Keyword(null,"editing","editing",1365491601),null,new cljs.core.Keyword(null,"native-event","native-event",-387122796),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new app.util.keyboard.KeyboardEvent(self__.type,self__.key,self__.shift,self__.ctrl,self__.alt,self__.meta,self__.mod,self__.editing,self__.native_event,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(app.util.keyboard.KeyboardEvent.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k66574){
var self__ = this;
var this__5330__auto____$1 = this;
var G__66679 = k66574;
var G__66679__$1 = (((G__66679 instanceof cljs.core.Keyword))?G__66679.fqn:null);
switch (G__66679__$1) {
case "type":
case "key":
case "shift":
case "ctrl":
case "alt":
case "meta":
case "mod":
case "editing":
case "native-event":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k66574);

}
}));

(app.util.keyboard.KeyboardEvent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__66573){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__66686 = cljs.core.keyword_identical_QMARK_;
var expr__66687 = k__5332__auto__;
if(cljs.core.truth_((pred__66686.cljs$core$IFn$_invoke$arity$2 ? pred__66686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__66687) : pred__66686.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__66687)))){
return (new app.util.keyboard.KeyboardEvent(G__66573,self__.key,self__.shift,self__.ctrl,self__.alt,self__.meta,self__.mod,self__.editing,self__.native_event,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66686.cljs$core$IFn$_invoke$arity$2 ? pred__66686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__66687) : pred__66686.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__66687)))){
return (new app.util.keyboard.KeyboardEvent(self__.type,G__66573,self__.shift,self__.ctrl,self__.alt,self__.meta,self__.mod,self__.editing,self__.native_event,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66686.cljs$core$IFn$_invoke$arity$2 ? pred__66686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shift","shift",997140064),expr__66687) : pred__66686.call(null,new cljs.core.Keyword(null,"shift","shift",997140064),expr__66687)))){
return (new app.util.keyboard.KeyboardEvent(self__.type,self__.key,G__66573,self__.ctrl,self__.alt,self__.meta,self__.mod,self__.editing,self__.native_event,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66686.cljs$core$IFn$_invoke$arity$2 ? pred__66686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ctrl","ctrl",361402094),expr__66687) : pred__66686.call(null,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),expr__66687)))){
return (new app.util.keyboard.KeyboardEvent(self__.type,self__.key,self__.shift,G__66573,self__.alt,self__.meta,self__.mod,self__.editing,self__.native_event,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66686.cljs$core$IFn$_invoke$arity$2 ? pred__66686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alt","alt",-3214426),expr__66687) : pred__66686.call(null,new cljs.core.Keyword(null,"alt","alt",-3214426),expr__66687)))){
return (new app.util.keyboard.KeyboardEvent(self__.type,self__.key,self__.shift,self__.ctrl,G__66573,self__.meta,self__.mod,self__.editing,self__.native_event,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66686.cljs$core$IFn$_invoke$arity$2 ? pred__66686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"meta","meta",1499536964),expr__66687) : pred__66686.call(null,new cljs.core.Keyword(null,"meta","meta",1499536964),expr__66687)))){
return (new app.util.keyboard.KeyboardEvent(self__.type,self__.key,self__.shift,self__.ctrl,self__.alt,G__66573,self__.mod,self__.editing,self__.native_event,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66686.cljs$core$IFn$_invoke$arity$2 ? pred__66686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mod","mod",-130487320),expr__66687) : pred__66686.call(null,new cljs.core.Keyword(null,"mod","mod",-130487320),expr__66687)))){
return (new app.util.keyboard.KeyboardEvent(self__.type,self__.key,self__.shift,self__.ctrl,self__.alt,self__.meta,G__66573,self__.editing,self__.native_event,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66686.cljs$core$IFn$_invoke$arity$2 ? pred__66686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"editing","editing",1365491601),expr__66687) : pred__66686.call(null,new cljs.core.Keyword(null,"editing","editing",1365491601),expr__66687)))){
return (new app.util.keyboard.KeyboardEvent(self__.type,self__.key,self__.shift,self__.ctrl,self__.alt,self__.meta,self__.mod,G__66573,self__.native_event,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66686.cljs$core$IFn$_invoke$arity$2 ? pred__66686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"native-event","native-event",-387122796),expr__66687) : pred__66686.call(null,new cljs.core.Keyword(null,"native-event","native-event",-387122796),expr__66687)))){
return (new app.util.keyboard.KeyboardEvent(self__.type,self__.key,self__.shift,self__.ctrl,self__.alt,self__.meta,self__.mod,self__.editing,G__66573,self__.__meta,self__.__extmap,null));
} else {
return (new app.util.keyboard.KeyboardEvent(self__.type,self__.key,self__.shift,self__.ctrl,self__.alt,self__.meta,self__.mod,self__.editing,self__.native_event,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__66573),null));
}
}
}
}
}
}
}
}
}
}));

(app.util.keyboard.KeyboardEvent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"shift","shift",997140064),self__.shift,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ctrl","ctrl",361402094),self__.ctrl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"alt","alt",-3214426),self__.alt,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"meta","meta",1499536964),self__.meta,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"mod","mod",-130487320),self__.mod,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"editing","editing",1365491601),self__.editing,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"native-event","native-event",-387122796),self__.native_event,null))], null),self__.__extmap));
}));

(app.util.keyboard.KeyboardEvent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__66573){
var self__ = this;
var this__5322__auto____$1 = this;
return (new app.util.keyboard.KeyboardEvent(self__.type,self__.key,self__.shift,self__.ctrl,self__.alt,self__.meta,self__.mod,self__.editing,self__.native_event,G__66573,self__.__extmap,self__.__hash));
}));

(app.util.keyboard.KeyboardEvent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(app.util.keyboard.KeyboardEvent.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.Symbol(null,"ctrl","ctrl",2001933621,null),new cljs.core.Symbol(null,"alt","alt",1637317101,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol(null,"editing","editing",-1288944168,null),new cljs.core.Symbol(null,"native-event","native-event",1253408731,null)], null);
}));

(app.util.keyboard.KeyboardEvent.cljs$lang$type = true);

(app.util.keyboard.KeyboardEvent.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"app.util.keyboard/KeyboardEvent",null,(1),null));
}));

(app.util.keyboard.KeyboardEvent.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"app.util.keyboard/KeyboardEvent");
}));

/**
 * Positional factory function for app.util.keyboard/KeyboardEvent.
 */
app.util.keyboard.__GT_KeyboardEvent = (function app$util$keyboard$__GT_KeyboardEvent(type,key,shift,ctrl,alt,meta,mod,editing,native_event){
return (new app.util.keyboard.KeyboardEvent(type,key,shift,ctrl,alt,meta,mod,editing,native_event,null,null,null));
});

/**
 * Factory function for app.util.keyboard/KeyboardEvent, taking a map of keywords to field values.
 */
app.util.keyboard.map__GT_KeyboardEvent = (function app$util$keyboard$map__GT_KeyboardEvent(G__66583){
var extmap__5365__auto__ = (function (){var G__66705 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__66583,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"mod","mod",-130487320),new cljs.core.Keyword(null,"editing","editing",1365491601),new cljs.core.Keyword(null,"native-event","native-event",-387122796)], 0));
if(cljs.core.record_QMARK_(G__66583)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__66705);
} else {
return G__66705;
}
})();
return (new app.util.keyboard.KeyboardEvent(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__66583),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__66583),new cljs.core.Keyword(null,"shift","shift",997140064).cljs$core$IFn$_invoke$arity$1(G__66583),new cljs.core.Keyword(null,"ctrl","ctrl",361402094).cljs$core$IFn$_invoke$arity$1(G__66583),new cljs.core.Keyword(null,"alt","alt",-3214426).cljs$core$IFn$_invoke$arity$1(G__66583),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(G__66583),new cljs.core.Keyword(null,"mod","mod",-130487320).cljs$core$IFn$_invoke$arity$1(G__66583),new cljs.core.Keyword(null,"editing","editing",1365491601).cljs$core$IFn$_invoke$arity$1(G__66583),new cljs.core.Keyword(null,"native-event","native-event",-387122796).cljs$core$IFn$_invoke$arity$1(G__66583),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

app.util.keyboard.keyboard_event_QMARK_ = (function app$util$keyboard$keyboard_event_QMARK_(o){
return (o instanceof app.util.keyboard.KeyboardEvent);
});
app.util.keyboard.key_up_event_QMARK_ = (function app$util$keyboard$key_up_event_QMARK_(event){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),event.type);
});
app.util.keyboard.key_down_event_QMARK_ = (function app$util$keyboard$key_down_event_QMARK_(event){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down","down",1565245570),event.type);
});
app.util.keyboard.mod_event_QMARK_ = (function app$util$keyboard$mod_event_QMARK_(event){
return event.mod === true;
});
app.util.keyboard.editing_event_QMARK_ = (function app$util$keyboard$editing_event_QMARK_(event){
return event.editing === true;
});
app.util.keyboard.is_key_QMARK_ = (function app$util$keyboard$is_key_QMARK_(var_args){
var G__66718 = arguments.length;
switch (G__66718) {
case 1:
return app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (key){
return (function (event){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,key);
});
}));

(app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (event,key){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,key);
}));

(app.util.keyboard.is_key_QMARK_.cljs$lang$maxFixedArity = 2);

app.util.keyboard.is_key_ignore_case_QMARK_ = (function app$util$keyboard$is_key_ignore_case_QMARK_(key){
var key__$1 = cuerdas.core.upper(key);
return (function (e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cuerdas.core.upper(e.key),key__$1);
});
});
app.util.keyboard.alt_QMARK_ = (function app$util$keyboard$alt_QMARK_(event){
return event.altKey;
});
app.util.keyboard.ctrl_QMARK_ = (function app$util$keyboard$ctrl_QMARK_(event){
return event.ctrlKey;
});
app.util.keyboard.meta_QMARK_ = (function app$util$keyboard$meta_QMARK_(event){
return event.metaKey;
});
app.util.keyboard.shift_QMARK_ = (function app$util$keyboard$shift_QMARK_(event){
return event.shiftKey;
});
app.util.keyboard.mod_QMARK_ = (function app$util$keyboard$mod_QMARK_(event){
if(app.config.check_platform_QMARK_(new cljs.core.Keyword(null,"macos","macos",-1712303293))){
return app.util.keyboard.meta_QMARK_(event);
} else {
return app.util.keyboard.ctrl_QMARK_(event);
}
});
app.util.keyboard.esc_QMARK_ = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1("Escape");
app.util.keyboard.enter_QMARK_ = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1("Enter");
app.util.keyboard.space_QMARK_ = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1(" ");
app.util.keyboard.z_QMARK_ = app.util.keyboard.is_key_ignore_case_QMARK_("z");
app.util.keyboard.equals_QMARK_ = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1("=");
app.util.keyboard.plus_QMARK_ = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1("+");
app.util.keyboard.minus_QMARK_ = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1("-");
app.util.keyboard.underscore_QMARK_ = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1("_");
app.util.keyboard.up_arrow_QMARK_ = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1("ArrowUp");
app.util.keyboard.down_arrow_QMARK_ = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1("ArrowDown");
app.util.keyboard.left_arrow_QMARK_ = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1("ArrowLeft");
app.util.keyboard.right_arrow_QMARK_ = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1("ArrowRight");
app.util.keyboard.alt_key_QMARK_ = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1("Alt");
app.util.keyboard.shift_key_QMARK_ = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1("Shift");
app.util.keyboard.ctrl_key_QMARK_ = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1("Control");
app.util.keyboard.meta_key_QMARK_ = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1("Meta");
app.util.keyboard.comma_QMARK_ = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1(",");
app.util.keyboard.backspace_QMARK_ = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1("Backspace");
app.util.keyboard.home_QMARK_ = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1("Home");
app.util.keyboard.tab_QMARK_ = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1("Tab");
app.util.keyboard.delete_QMARK_ = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$1("Delete");

//# sourceMappingURL=app.util.keyboard.js.map
