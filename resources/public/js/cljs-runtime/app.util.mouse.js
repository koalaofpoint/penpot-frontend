import "./cljs_env.js";
import "./cljs.core.js";
import "./beicon.v2.core.js";
goog.provide('app.util.mouse');

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
app.util.mouse.MouseEvent = (function (type,ctrl,shift,alt,meta,__meta,__extmap,__hash){
this.type = type;
this.ctrl = ctrl;
this.shift = shift;
this.alt = alt;
this.meta = meta;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.util.mouse.MouseEvent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(app.util.mouse.MouseEvent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k66576,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__66596 = k66576;
var G__66596__$1 = (((G__66596 instanceof cljs.core.Keyword))?G__66596.fqn:null);
switch (G__66596__$1) {
case "type":
return self__.type;

break;
case "ctrl":
return self__.ctrl;

break;
case "shift":
return self__.shift;

break;
case "alt":
return self__.alt;

break;
case "meta":
return self__.meta;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k66576,else__5326__auto__);

}
}));

(app.util.mouse.MouseEvent.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__66609){
var vec__66610 = p__66609;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66610,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66610,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(app.util.mouse.MouseEvent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#app.util.mouse.MouseEvent{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ctrl","ctrl",361402094),self__.ctrl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"shift","shift",997140064),self__.shift],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alt","alt",-3214426),self__.alt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"meta","meta",1499536964),self__.meta],null))], null),self__.__extmap));
}));

(app.util.mouse.MouseEvent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66575){
var self__ = this;
var G__66575__$1 = this;
return (new cljs.core.RecordIter((0),G__66575__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"meta","meta",1499536964)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.util.mouse.MouseEvent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(app.util.mouse.MouseEvent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new app.util.mouse.MouseEvent(self__.type,self__.ctrl,self__.shift,self__.alt,self__.meta,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.util.mouse.MouseEvent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(app.util.mouse.MouseEvent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1048159938 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(app.util.mouse.MouseEvent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this66577,other66578){
var self__ = this;
var this66577__$1 = this;
return (((!((other66578 == null)))) && ((((this66577__$1.constructor === other66578.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66577__$1.type,other66578.type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66577__$1.ctrl,other66578.ctrl)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66577__$1.shift,other66578.shift)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66577__$1.alt,other66578.alt)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66577__$1.meta,other66578.meta)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66577__$1.__extmap,other66578.__extmap)))))))))))))));
}));

(app.util.mouse.MouseEvent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shift","shift",997140064),null,new cljs.core.Keyword(null,"meta","meta",1499536964),null,new cljs.core.Keyword(null,"alt","alt",-3214426),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new app.util.mouse.MouseEvent(self__.type,self__.ctrl,self__.shift,self__.alt,self__.meta,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(app.util.mouse.MouseEvent.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k66576){
var self__ = this;
var this__5330__auto____$1 = this;
var G__66646 = k66576;
var G__66646__$1 = (((G__66646 instanceof cljs.core.Keyword))?G__66646.fqn:null);
switch (G__66646__$1) {
case "type":
case "ctrl":
case "shift":
case "alt":
case "meta":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k66576);

}
}));

(app.util.mouse.MouseEvent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__66575){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__66653 = cljs.core.keyword_identical_QMARK_;
var expr__66654 = k__5332__auto__;
if(cljs.core.truth_((pred__66653.cljs$core$IFn$_invoke$arity$2 ? pred__66653.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__66654) : pred__66653.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__66654)))){
return (new app.util.mouse.MouseEvent(G__66575,self__.ctrl,self__.shift,self__.alt,self__.meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66653.cljs$core$IFn$_invoke$arity$2 ? pred__66653.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ctrl","ctrl",361402094),expr__66654) : pred__66653.call(null,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),expr__66654)))){
return (new app.util.mouse.MouseEvent(self__.type,G__66575,self__.shift,self__.alt,self__.meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66653.cljs$core$IFn$_invoke$arity$2 ? pred__66653.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shift","shift",997140064),expr__66654) : pred__66653.call(null,new cljs.core.Keyword(null,"shift","shift",997140064),expr__66654)))){
return (new app.util.mouse.MouseEvent(self__.type,self__.ctrl,G__66575,self__.alt,self__.meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66653.cljs$core$IFn$_invoke$arity$2 ? pred__66653.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alt","alt",-3214426),expr__66654) : pred__66653.call(null,new cljs.core.Keyword(null,"alt","alt",-3214426),expr__66654)))){
return (new app.util.mouse.MouseEvent(self__.type,self__.ctrl,self__.shift,G__66575,self__.meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66653.cljs$core$IFn$_invoke$arity$2 ? pred__66653.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"meta","meta",1499536964),expr__66654) : pred__66653.call(null,new cljs.core.Keyword(null,"meta","meta",1499536964),expr__66654)))){
return (new app.util.mouse.MouseEvent(self__.type,self__.ctrl,self__.shift,self__.alt,G__66575,self__.__meta,self__.__extmap,null));
} else {
return (new app.util.mouse.MouseEvent(self__.type,self__.ctrl,self__.shift,self__.alt,self__.meta,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__66575),null));
}
}
}
}
}
}));

(app.util.mouse.MouseEvent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ctrl","ctrl",361402094),self__.ctrl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"shift","shift",997140064),self__.shift,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"alt","alt",-3214426),self__.alt,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"meta","meta",1499536964),self__.meta,null))], null),self__.__extmap));
}));

(app.util.mouse.MouseEvent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__66575){
var self__ = this;
var this__5322__auto____$1 = this;
return (new app.util.mouse.MouseEvent(self__.type,self__.ctrl,self__.shift,self__.alt,self__.meta,G__66575,self__.__extmap,self__.__hash));
}));

(app.util.mouse.MouseEvent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(app.util.mouse.MouseEvent.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"ctrl","ctrl",2001933621,null),new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.Symbol(null,"alt","alt",1637317101,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(app.util.mouse.MouseEvent.cljs$lang$type = true);

(app.util.mouse.MouseEvent.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"app.util.mouse/MouseEvent",null,(1),null));
}));

(app.util.mouse.MouseEvent.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"app.util.mouse/MouseEvent");
}));

/**
 * Positional factory function for app.util.mouse/MouseEvent.
 */
app.util.mouse.__GT_MouseEvent = (function app$util$mouse$__GT_MouseEvent(type,ctrl,shift,alt,meta){
return (new app.util.mouse.MouseEvent(type,ctrl,shift,alt,meta,null,null,null));
});

/**
 * Factory function for app.util.mouse/MouseEvent, taking a map of keywords to field values.
 */
app.util.mouse.map__GT_MouseEvent = (function app$util$mouse$map__GT_MouseEvent(G__66582){
var extmap__5365__auto__ = (function (){var G__66664 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__66582,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"meta","meta",1499536964)], 0));
if(cljs.core.record_QMARK_(G__66582)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__66664);
} else {
return G__66664;
}
})();
return (new app.util.mouse.MouseEvent(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__66582),new cljs.core.Keyword(null,"ctrl","ctrl",361402094).cljs$core$IFn$_invoke$arity$1(G__66582),new cljs.core.Keyword(null,"shift","shift",997140064).cljs$core$IFn$_invoke$arity$1(G__66582),new cljs.core.Keyword(null,"alt","alt",-3214426).cljs$core$IFn$_invoke$arity$1(G__66582),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(G__66582),null,cljs.core.not_empty(extmap__5365__auto__),null));
});


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
app.util.mouse.PointerEvent = (function (source,pt,ctrl,shift,alt,meta,__meta,__extmap,__hash){
this.source = source;
this.pt = pt;
this.ctrl = ctrl;
this.shift = shift;
this.alt = alt;
this.meta = meta;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.util.mouse.PointerEvent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(app.util.mouse.PointerEvent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k66668,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__66683 = k66668;
var G__66683__$1 = (((G__66683 instanceof cljs.core.Keyword))?G__66683.fqn:null);
switch (G__66683__$1) {
case "source":
return self__.source;

break;
case "pt":
return self__.pt;

break;
case "ctrl":
return self__.ctrl;

break;
case "shift":
return self__.shift;

break;
case "alt":
return self__.alt;

break;
case "meta":
return self__.meta;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k66668,else__5326__auto__);

}
}));

(app.util.mouse.PointerEvent.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__66689){
var vec__66691 = p__66689;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66691,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66691,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(app.util.mouse.PointerEvent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#app.util.mouse.PointerEvent{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pt","pt",556460867),self__.pt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ctrl","ctrl",361402094),self__.ctrl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"shift","shift",997140064),self__.shift],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alt","alt",-3214426),self__.alt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"meta","meta",1499536964),self__.meta],null))], null),self__.__extmap));
}));

(app.util.mouse.PointerEvent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66667){
var self__ = this;
var G__66667__$1 = this;
return (new cljs.core.RecordIter((0),G__66667__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"meta","meta",1499536964)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.util.mouse.PointerEvent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(app.util.mouse.PointerEvent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new app.util.mouse.PointerEvent(self__.source,self__.pt,self__.ctrl,self__.shift,self__.alt,self__.meta,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.util.mouse.PointerEvent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(app.util.mouse.PointerEvent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-821521640 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(app.util.mouse.PointerEvent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this66669,other66670){
var self__ = this;
var this66669__$1 = this;
return (((!((other66670 == null)))) && ((((this66669__$1.constructor === other66670.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66669__$1.source,other66670.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66669__$1.pt,other66670.pt)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66669__$1.ctrl,other66670.ctrl)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66669__$1.shift,other66670.shift)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66669__$1.alt,other66670.alt)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66669__$1.meta,other66670.meta)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66669__$1.__extmap,other66670.__extmap)))))))))))))))));
}));

(app.util.mouse.PointerEvent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"shift","shift",997140064),null,new cljs.core.Keyword(null,"pt","pt",556460867),null,new cljs.core.Keyword(null,"meta","meta",1499536964),null,new cljs.core.Keyword(null,"alt","alt",-3214426),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new app.util.mouse.PointerEvent(self__.source,self__.pt,self__.ctrl,self__.shift,self__.alt,self__.meta,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(app.util.mouse.PointerEvent.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k66668){
var self__ = this;
var this__5330__auto____$1 = this;
var G__66711 = k66668;
var G__66711__$1 = (((G__66711 instanceof cljs.core.Keyword))?G__66711.fqn:null);
switch (G__66711__$1) {
case "source":
case "pt":
case "ctrl":
case "shift":
case "alt":
case "meta":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k66668);

}
}));

(app.util.mouse.PointerEvent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__66667){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__66713 = cljs.core.keyword_identical_QMARK_;
var expr__66714 = k__5332__auto__;
if(cljs.core.truth_((pred__66713.cljs$core$IFn$_invoke$arity$2 ? pred__66713.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__66714) : pred__66713.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__66714)))){
return (new app.util.mouse.PointerEvent(G__66667,self__.pt,self__.ctrl,self__.shift,self__.alt,self__.meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66713.cljs$core$IFn$_invoke$arity$2 ? pred__66713.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pt","pt",556460867),expr__66714) : pred__66713.call(null,new cljs.core.Keyword(null,"pt","pt",556460867),expr__66714)))){
return (new app.util.mouse.PointerEvent(self__.source,G__66667,self__.ctrl,self__.shift,self__.alt,self__.meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66713.cljs$core$IFn$_invoke$arity$2 ? pred__66713.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ctrl","ctrl",361402094),expr__66714) : pred__66713.call(null,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),expr__66714)))){
return (new app.util.mouse.PointerEvent(self__.source,self__.pt,G__66667,self__.shift,self__.alt,self__.meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66713.cljs$core$IFn$_invoke$arity$2 ? pred__66713.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shift","shift",997140064),expr__66714) : pred__66713.call(null,new cljs.core.Keyword(null,"shift","shift",997140064),expr__66714)))){
return (new app.util.mouse.PointerEvent(self__.source,self__.pt,self__.ctrl,G__66667,self__.alt,self__.meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66713.cljs$core$IFn$_invoke$arity$2 ? pred__66713.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alt","alt",-3214426),expr__66714) : pred__66713.call(null,new cljs.core.Keyword(null,"alt","alt",-3214426),expr__66714)))){
return (new app.util.mouse.PointerEvent(self__.source,self__.pt,self__.ctrl,self__.shift,G__66667,self__.meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66713.cljs$core$IFn$_invoke$arity$2 ? pred__66713.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"meta","meta",1499536964),expr__66714) : pred__66713.call(null,new cljs.core.Keyword(null,"meta","meta",1499536964),expr__66714)))){
return (new app.util.mouse.PointerEvent(self__.source,self__.pt,self__.ctrl,self__.shift,self__.alt,G__66667,self__.__meta,self__.__extmap,null));
} else {
return (new app.util.mouse.PointerEvent(self__.source,self__.pt,self__.ctrl,self__.shift,self__.alt,self__.meta,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__66667),null));
}
}
}
}
}
}
}));

(app.util.mouse.PointerEvent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pt","pt",556460867),self__.pt,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ctrl","ctrl",361402094),self__.ctrl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"shift","shift",997140064),self__.shift,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"alt","alt",-3214426),self__.alt,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"meta","meta",1499536964),self__.meta,null))], null),self__.__extmap));
}));

(app.util.mouse.PointerEvent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__66667){
var self__ = this;
var this__5322__auto____$1 = this;
return (new app.util.mouse.PointerEvent(self__.source,self__.pt,self__.ctrl,self__.shift,self__.alt,self__.meta,G__66667,self__.__extmap,self__.__hash));
}));

(app.util.mouse.PointerEvent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(app.util.mouse.PointerEvent.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pt","pt",-2097974902,null),new cljs.core.Symbol(null,"ctrl","ctrl",2001933621,null),new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.Symbol(null,"alt","alt",1637317101,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(app.util.mouse.PointerEvent.cljs$lang$type = true);

(app.util.mouse.PointerEvent.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"app.util.mouse/PointerEvent",null,(1),null));
}));

(app.util.mouse.PointerEvent.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"app.util.mouse/PointerEvent");
}));

/**
 * Positional factory function for app.util.mouse/PointerEvent.
 */
app.util.mouse.__GT_PointerEvent = (function app$util$mouse$__GT_PointerEvent(source,pt,ctrl,shift,alt,meta){
return (new app.util.mouse.PointerEvent(source,pt,ctrl,shift,alt,meta,null,null,null));
});

/**
 * Factory function for app.util.mouse/PointerEvent, taking a map of keywords to field values.
 */
app.util.mouse.map__GT_PointerEvent = (function app$util$mouse$map__GT_PointerEvent(G__66672){
var extmap__5365__auto__ = (function (){var G__66724 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__66672,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"meta","meta",1499536964)], 0));
if(cljs.core.record_QMARK_(G__66672)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__66724);
} else {
return G__66724;
}
})();
return (new app.util.mouse.PointerEvent(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__66672),new cljs.core.Keyword(null,"pt","pt",556460867).cljs$core$IFn$_invoke$arity$1(G__66672),new cljs.core.Keyword(null,"ctrl","ctrl",361402094).cljs$core$IFn$_invoke$arity$1(G__66672),new cljs.core.Keyword(null,"shift","shift",997140064).cljs$core$IFn$_invoke$arity$1(G__66672),new cljs.core.Keyword(null,"alt","alt",-3214426).cljs$core$IFn$_invoke$arity$1(G__66672),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(G__66672),null,cljs.core.not_empty(extmap__5365__auto__),null));
});


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
app.util.mouse.ScrollEvent = (function (point,__meta,__extmap,__hash){
this.point = point;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.util.mouse.ScrollEvent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(app.util.mouse.ScrollEvent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k66726,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__66733 = k66726;
var G__66733__$1 = (((G__66733 instanceof cljs.core.Keyword))?G__66733.fqn:null);
switch (G__66733__$1) {
case "point":
return self__.point;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k66726,else__5326__auto__);

}
}));

(app.util.mouse.ScrollEvent.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__66736){
var vec__66737 = p__66736;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66737,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66737,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(app.util.mouse.ScrollEvent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#app.util.mouse.ScrollEvent{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"point","point",1813198264),self__.point],null))], null),self__.__extmap));
}));

(app.util.mouse.ScrollEvent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66725){
var self__ = this;
var G__66725__$1 = this;
return (new cljs.core.RecordIter((0),G__66725__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.util.mouse.ScrollEvent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(app.util.mouse.ScrollEvent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new app.util.mouse.ScrollEvent(self__.point,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.util.mouse.ScrollEvent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(app.util.mouse.ScrollEvent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1812625280 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(app.util.mouse.ScrollEvent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this66727,other66728){
var self__ = this;
var this66727__$1 = this;
return (((!((other66728 == null)))) && ((((this66727__$1.constructor === other66728.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66727__$1.point,other66728.point)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66727__$1.__extmap,other66728.__extmap)))))));
}));

(app.util.mouse.ScrollEvent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"point","point",1813198264),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new app.util.mouse.ScrollEvent(self__.point,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(app.util.mouse.ScrollEvent.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k66726){
var self__ = this;
var this__5330__auto____$1 = this;
var G__66747 = k66726;
var G__66747__$1 = (((G__66747 instanceof cljs.core.Keyword))?G__66747.fqn:null);
switch (G__66747__$1) {
case "point":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k66726);

}
}));

(app.util.mouse.ScrollEvent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__66725){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__66748 = cljs.core.keyword_identical_QMARK_;
var expr__66749 = k__5332__auto__;
if(cljs.core.truth_((pred__66748.cljs$core$IFn$_invoke$arity$2 ? pred__66748.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"point","point",1813198264),expr__66749) : pred__66748.call(null,new cljs.core.Keyword(null,"point","point",1813198264),expr__66749)))){
return (new app.util.mouse.ScrollEvent(G__66725,self__.__meta,self__.__extmap,null));
} else {
return (new app.util.mouse.ScrollEvent(self__.point,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__66725),null));
}
}));

(app.util.mouse.ScrollEvent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"point","point",1813198264),self__.point,null))], null),self__.__extmap));
}));

(app.util.mouse.ScrollEvent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__66725){
var self__ = this;
var this__5322__auto____$1 = this;
return (new app.util.mouse.ScrollEvent(self__.point,G__66725,self__.__extmap,self__.__hash));
}));

(app.util.mouse.ScrollEvent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(app.util.mouse.ScrollEvent.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"point","point",-841237505,null)], null);
}));

(app.util.mouse.ScrollEvent.cljs$lang$type = true);

(app.util.mouse.ScrollEvent.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"app.util.mouse/ScrollEvent",null,(1),null));
}));

(app.util.mouse.ScrollEvent.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"app.util.mouse/ScrollEvent");
}));

/**
 * Positional factory function for app.util.mouse/ScrollEvent.
 */
app.util.mouse.__GT_ScrollEvent = (function app$util$mouse$__GT_ScrollEvent(point){
return (new app.util.mouse.ScrollEvent(point,null,null,null));
});

/**
 * Factory function for app.util.mouse/ScrollEvent, taking a map of keywords to field values.
 */
app.util.mouse.map__GT_ScrollEvent = (function app$util$mouse$map__GT_ScrollEvent(G__66729){
var extmap__5365__auto__ = (function (){var G__66762 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__66729,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.record_QMARK_(G__66729)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__66762);
} else {
return G__66762;
}
})();
return (new app.util.mouse.ScrollEvent(new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(G__66729),null,cljs.core.not_empty(extmap__5365__auto__),null));
});


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
app.util.mouse.BlurEvent = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.util.mouse.BlurEvent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(app.util.mouse.BlurEvent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k66764,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__66768 = k66764;
switch (G__66768) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k66764,else__5326__auto__);

}
}));

(app.util.mouse.BlurEvent.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__66772){
var vec__66773 = p__66772;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66773,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66773,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(app.util.mouse.BlurEvent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#app.util.mouse.BlurEvent{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(app.util.mouse.BlurEvent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66763){
var self__ = this;
var G__66763__$1 = this;
return (new cljs.core.RecordIter((0),G__66763__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.util.mouse.BlurEvent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(app.util.mouse.BlurEvent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new app.util.mouse.BlurEvent(self__.__meta,self__.__extmap,self__.__hash));
}));

(app.util.mouse.BlurEvent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(app.util.mouse.BlurEvent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1792553993 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(app.util.mouse.BlurEvent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this66765,other66766){
var self__ = this;
var this66765__$1 = this;
return (((!((other66766 == null)))) && ((((this66765__$1.constructor === other66766.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66765__$1.__extmap,other66766.__extmap)))));
}));

(app.util.mouse.BlurEvent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new app.util.mouse.BlurEvent(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(app.util.mouse.BlurEvent.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k66764){
var self__ = this;
var this__5330__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k66764);
}));

(app.util.mouse.BlurEvent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__66763){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__66785 = cljs.core.keyword_identical_QMARK_;
var expr__66786 = k__5332__auto__;
return (new app.util.mouse.BlurEvent(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__66763),null));
}));

(app.util.mouse.BlurEvent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(app.util.mouse.BlurEvent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__66763){
var self__ = this;
var this__5322__auto____$1 = this;
return (new app.util.mouse.BlurEvent(G__66763,self__.__extmap,self__.__hash));
}));

(app.util.mouse.BlurEvent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(app.util.mouse.BlurEvent.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(app.util.mouse.BlurEvent.cljs$lang$type = true);

(app.util.mouse.BlurEvent.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"app.util.mouse/BlurEvent",null,(1),null));
}));

(app.util.mouse.BlurEvent.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"app.util.mouse/BlurEvent");
}));

/**
 * Positional factory function for app.util.mouse/BlurEvent.
 */
app.util.mouse.__GT_BlurEvent = (function app$util$mouse$__GT_BlurEvent(){
return (new app.util.mouse.BlurEvent(null,null,null));
});

/**
 * Factory function for app.util.mouse/BlurEvent, taking a map of keywords to field values.
 */
app.util.mouse.map__GT_BlurEvent = (function app$util$mouse$map__GT_BlurEvent(G__66767){
var extmap__5365__auto__ = (function (){var G__66794 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__66767);
if(cljs.core.record_QMARK_(G__66767)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__66794);
} else {
return G__66794;
}
})();
return (new app.util.mouse.BlurEvent(null,cljs.core.not_empty(extmap__5365__auto__),null));
});

app.util.mouse.mouse_event_QMARK_ = (function app$util$mouse$mouse_event_QMARK_(v){
return (v instanceof app.util.mouse.MouseEvent);
});
app.util.mouse.pointer_event_QMARK_ = (function app$util$mouse$pointer_event_QMARK_(v){
return (v instanceof app.util.mouse.PointerEvent);
});
app.util.mouse.scroll_event_QMARK_ = (function app$util$mouse$scroll_event_QMARK_(v){
return (v instanceof app.util.mouse.ScrollEvent);
});
app.util.mouse.blur_event_QMARK_ = (function app$util$mouse$blur_event_QMARK_(v){
return (v instanceof app.util.mouse.BlurEvent);
});
app.util.mouse.mouse_down_event_QMARK_ = (function app$util$mouse$mouse_down_event_QMARK_(v){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down","down",1565245570),v.type);
});
app.util.mouse.mouse_up_event_QMARK_ = (function app$util$mouse$mouse_up_event_QMARK_(v){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),v.type);
});
app.util.mouse.mouse_click_event_QMARK_ = (function app$util$mouse$mouse_click_event_QMARK_(v){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"click","click",1912301393),v.type);
});
app.util.mouse.mouse_double_click_event_QMARK_ = (function app$util$mouse$mouse_double_click_event_QMARK_(v){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"double-click","double-click",-733492993),v.type);
});
app.util.mouse.get_pointer_source = (function app$util$mouse$get_pointer_source(ev){
return ev.source;
});
app.util.mouse.get_pointer_position = (function app$util$mouse$get_pointer_position(ev){
return ev.pt;
});
app.util.mouse.get_pointer_ctrl_mod = (function app$util$mouse$get_pointer_ctrl_mod(ev){
return ev.ctrl;
});
app.util.mouse.get_pointer_meta_mod = (function app$util$mouse$get_pointer_meta_mod(ev){
return ev.meta;
});
app.util.mouse.get_pointer_alt_mod = (function app$util$mouse$get_pointer_alt_mod(ev){
return ev.alt;
});
app.util.mouse.get_pointer_shift_mod = (function app$util$mouse$get_pointer_shift_mod(ev){
return ev.shift;
});
/**
 * Creates a stream to stop drag events. Takes into account the mouse and also
 *   if the window loses focus or the esc key is pressed.
 */
app.util.mouse.drag_stopper = (function app$util$mouse$drag_stopper(var_args){
var G__66804 = arguments.length;
switch (G__66804) {
case 1:
return app.util.mouse.drag_stopper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.mouse.drag_stopper.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.mouse.drag_stopper.cljs$core$IFn$_invoke$arity$1 = (function (stream){
return app.util.mouse.drag_stopper.cljs$core$IFn$_invoke$arity$2(stream,null);
}));

(app.util.mouse.drag_stopper.cljs$core$IFn$_invoke$arity$2 = (function (stream,p__66805){
var map__66806 = p__66805;
var map__66806__$1 = cljs.core.__destructure_map(map__66806);
var blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66806__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003),true);
var up_mouse_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66806__$1,new cljs.core.Keyword(null,"up-mouse?","up-mouse?",-2106647044),true);
var interrupt_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66806__$1,new cljs.core.Keyword(null,"interrupt?","interrupt?",275320536),true);
return beicon.v2.core.merge((cljs.core.truth_(blur_QMARK_)?beicon.v2.core.filter(app.util.mouse.blur_event_QMARK_,stream):beicon.v2.core.empty()),(cljs.core.truth_(up_mouse_QMARK_)?beicon.v2.core.filter(app.util.mouse.mouse_up_event_QMARK_,beicon.v2.core.filter(app.util.mouse.mouse_event_QMARK_,stream)):beicon.v2.core.empty()),(cljs.core.truth_(interrupt_QMARK_)?beicon.v2.core.filter((function (p1__66802_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__66802_SHARP_,new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178));
}),stream):beicon.v2.core.empty()));
}));

(app.util.mouse.drag_stopper.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=app.util.mouse.js.map
