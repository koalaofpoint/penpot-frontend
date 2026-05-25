import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.common.math.js";
import "./app.common.record.js";
import "./app.common.schema.js";
import "./app.common.schema.generators.js";
import "./app.common.transit.js";
goog.provide('app.common.geom.rect');

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
 * @implements {app.common.record.ICustomRecordEquiv}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.ITransientAssociative}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.common.geom.rect.Rect = (function (x,y,width,height,x1,y1,x2,y2,$meta,$extmap,$hash){
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.x1 = x1;
this.y1 = y1;
this.x2 = x2;
this.y2 = y2;
this.$meta = $meta;
this.$extmap = $extmap;
this.$hash = $hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139280;
});
(app.common.geom.rect.Rect.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this$,f__45940__auto__,init__45941__auto__){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__45942__auto__,p__46505){
var vec__46506 = p__46505;
var key_46497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46506,(0),null);
var v__45943__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46506,(1),null);
return (f__45940__auto__.cljs$core$IFn$_invoke$arity$3 ? f__45940__auto__.cljs$core$IFn$_invoke$arity$3(ret__45942__auto__,key_46497,v__45943__auto__) : f__45940__auto__.call(null,ret__45942__auto__,key_46497,v__45943__auto__));
}),init__45941__auto__,this$__$1);
}));

(app.common.geom.rect.Rect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((this$__$1 === other)) || ((((!((other == null)))) && ((((this$__$1.constructor === other.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.x,other.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.y,other.y)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.width,other.width)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.height,other.height)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.x1,other.x1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.y1,other.y1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.x2,other.x2)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.y2,other.y2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.$extmap,other.$extmap)))))))))))))))))))))));
}));

(app.common.geom.rect.Rect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__45882__auto__ = this$__$1.$hash;
if((!((h__45882__auto__ == null)))){
return h__45882__auto__;
} else {
var h__45882__auto____$1 = (function (coll__45932__auto__){
return (647966571 ^ cljs.core.hash_unordered_coll(coll__45932__auto__));
})(this$__$1);
(this$__$1.$hash = h__45882__auto____$1);

return h__45882__auto____$1;
}
}));

(app.common.geom.rect.Rect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,val_46498){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(val_46498)){
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(val_46498,(0)),cljs.core._nth(val_46498,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,val_46498);
}
}));

(app.common.geom.rect.Rect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (8 + cljs.core.count(this$__$1.$extmap));
}));

(app.common.geom.rect.Rect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),this$__$1.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),this$__$1.y,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"width","width",-384071477),this$__$1.width,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"height","height",1025178622),this$__$1.height,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x1","x1",-1863922247),this$__$1.x1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y1","y1",589123466),this$__$1.y1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x2","x2",-1362513475),this$__$1.x2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y2","y2",-718691301),this$__$1.y2,null))], null),this$__$1.$extmap));
}));

(app.common.geom.rect.Rect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.$meta;
}));

(app.common.geom.rect.Rect.prototype.app$common$record$ICustomRecordEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.geom.rect.Rect.prototype.app$common$record$ICustomRecordEquiv$_equiv_with_exceptions$arity$3 = (function (this$,other,exceptions){
var self__ = this;
var this$__$1 = this;
var or__5025__auto__ = (this$__$1 === other);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = (!((other == null)));
if(and__5023__auto__){
var and__5023__auto____$1 = (this$__$1.constructor === other.constructor);
if(and__5023__auto____$1){
var and__5023__auto____$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.x,other.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.y,other.y)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.width,other.width)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.height,other.height)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.x1,other.x1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.y1,other.y1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.x2,other.x2)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.y2,other.y2)) && ((cljs.core.count(this$__$1.$extmap) === cljs.core.count(other.$extmap))))))))))))))))));
if(and__5023__auto____$2){
return cljs.core.reduce_kv((function (_,k,v){
if(cljs.core.contains_QMARK_(exceptions,k)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(this$__$1.$extmap,k,new cljs.core.Keyword("app.common.record","not-exists","app.common.record/not-exists",937981956)),v)){
return true;
} else {
return cljs.core.reduced(false);
}
}
}),true,other.$extmap);
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
}));

(app.common.geom.rect.Rect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new app.common.geom.rect.Rect(this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.x1,this$__$1.y1,this$__$1.x2,this$__$1.y2,this$__$1.$meta,this$__$1.$extmap,this$__$1.$hash));
}));

(app.common.geom.rect.Rect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer__46013__auto__,opts__46014__auto__){
var self__ = this;
var this$__$1 = this;
var pr_pair__46015__auto__ = (function (keyval__46017__auto__){
return cljs.core.pr_sequential_writer(writer__46013__auto__,cljs.core.pr_writer,""," ","",opts__46014__auto__,keyval__46017__auto__);
});
return cljs.core.pr_sequential_writer(writer__46013__auto__,pr_pair__46015__auto__,"#app.common.geom.rect.Rect{",", ","}",opts__46014__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),this$__$1.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),this$__$1.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),this$__$1.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),this$__$1.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x1","x1",-1863922247),this$__$1.x1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y1","y1",589123466),this$__$1.y1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x2","x2",-1362513475),this$__$1.x2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y2","y2",-718691301),this$__$1.y2],null))], null),this$__$1.$extmap));
}));

(app.common.geom.rect.Rect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.RecordIter((0),this$__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"y2","y2",-718691301)], null),(cljs.core.truth_(this$__$1.$extmap)?cljs.core._iterator(this$__$1.$extmap):cljs.core.nil_iter())));
}));

(app.common.geom.rect.Rect.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (this$,key_46497,val_46498){
var self__ = this;
var this$__$1 = this;
var key__45937__auto__ = (((key_46497 instanceof cljs.core.Keyword))?key_46497.fqn:key_46497);
var G__46536_46732 = key_46497;
var G__46536_46733__$1 = (((G__46536_46732 instanceof cljs.core.Keyword))?G__46536_46732.fqn:null);
switch (G__46536_46733__$1) {
case "x":
(this$__$1.x = val_46498);

break;
case "y":
(this$__$1.y = val_46498);

break;
case "width":
(this$__$1.width = val_46498);

break;
case "height":
(this$__$1.height = val_46498);

break;
case "x1":
(this$__$1.x1 = val_46498);

break;
case "y1":
(this$__$1.y1 = val_46498);

break;
case "x2":
(this$__$1.x2 = val_46498);

break;
case "y2":
(this$__$1.y2 = val_46498);

break;
default:
(this$__$1.$extmap = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1.$extmap,key_46497,val_46498));

}

return this$__$1;
}));

(app.common.geom.rect.Rect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,val_46498){
var self__ = this;
var this$__$1 = this;
return (new app.common.geom.rect.Rect(this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.x1,this$__$1.y1,this$__$1.x2,this$__$1.y2,val_46498,this$__$1.$extmap,this$__$1.$hash));
}));

(app.common.geom.rect.Rect.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,key_46497){
var self__ = this;
var this$__$1 = this;
var G__46537 = key_46497;
var G__46537__$1 = (((G__46537 instanceof cljs.core.Keyword))?G__46537.fqn:null);
switch (G__46537__$1) {
case "x":
case "y":
case "width":
case "height":
case "x1":
case "y1":
case "x2":
case "y2":
return true;

break;
default:
return cljs.core.contains_QMARK_(this$__$1.$extmap,key_46497);

}
}));

(app.common.geom.rect.Rect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,key_46497,val_46498){
var self__ = this;
var this$__$1 = this;
var G__46538 = key_46497;
var G__46538__$1 = (((G__46538 instanceof cljs.core.Keyword))?G__46538.fqn:null);
switch (G__46538__$1) {
case "x":
return (new app.common.geom.rect.Rect(val_46498,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.x1,this$__$1.y1,this$__$1.x2,this$__$1.y2,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "y":
return (new app.common.geom.rect.Rect(this$__$1.x,val_46498,this$__$1.width,this$__$1.height,this$__$1.x1,this$__$1.y1,this$__$1.x2,this$__$1.y2,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "width":
return (new app.common.geom.rect.Rect(this$__$1.x,this$__$1.y,val_46498,this$__$1.height,this$__$1.x1,this$__$1.y1,this$__$1.x2,this$__$1.y2,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "height":
return (new app.common.geom.rect.Rect(this$__$1.x,this$__$1.y,this$__$1.width,val_46498,this$__$1.x1,this$__$1.y1,this$__$1.x2,this$__$1.y2,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "x1":
return (new app.common.geom.rect.Rect(this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,val_46498,this$__$1.y1,this$__$1.x2,this$__$1.y2,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "y1":
return (new app.common.geom.rect.Rect(this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.x1,val_46498,this$__$1.x2,this$__$1.y2,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "x2":
return (new app.common.geom.rect.Rect(this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.x1,this$__$1.y1,val_46498,this$__$1.y2,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "y2":
return (new app.common.geom.rect.Rect(this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.x1,this$__$1.y1,this$__$1.x2,val_46498,this$__$1.$meta,this$__$1.$extmap,null));

break;
default:
return (new app.common.geom.rect.Rect(this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.x1,this$__$1.y1,this$__$1.x2,this$__$1.y2,this$__$1.$meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1.$extmap,key_46497,val_46498),null));

}
}));

(app.common.geom.rect.Rect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,key_46497){
var self__ = this;
var this$__$1 = this;
var G__46539 = key_46497;
var G__46539__$1 = (((G__46539 instanceof cljs.core.Keyword))?G__46539.fqn:null);
switch (G__46539__$1) {
case "x":
case "y":
case "width":
case "height":
case "x1":
case "y1":
case "x2":
case "y2":
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,key_46497,null);

break;
default:
var extmap1__45938__auto__ = this$__$1.$extmap;
var extmap2__45939__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(extmap1__45938__auto__,key_46497);
if((extmap1__45938__auto__ === extmap2__45939__auto__)){
return this$__$1;
} else {
return (new app.common.geom.rect.Rect(this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.x1,this$__$1.y1,this$__$1.x2,this$__$1.y2,this$__$1.$meta,cljs.core.not_empty(extmap2__45939__auto__),null));
}

}
}));

(app.common.geom.rect.Rect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k__45934__auto__){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k__45934__auto__,null);
}));

(app.common.geom.rect.Rect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,key_46497,else__45935__auto__){
var self__ = this;
var this$__$1 = this;
var G__46540 = key_46497;
var G__46540__$1 = (((G__46540 instanceof cljs.core.Keyword))?G__46540.fqn:null);
switch (G__46540__$1) {
case "x":
return this$__$1.x;

break;
case "y":
return this$__$1.y;

break;
case "width":
return this$__$1.width;

break;
case "height":
return this$__$1.height;

break;
case "x1":
return this$__$1.x1;

break;
case "y1":
return this$__$1.y1;

break;
case "x2":
return this$__$1.x2;

break;
case "y2":
return this$__$1.y2;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(this$__$1.$extmap,key_46497,else__45935__auto__);

}
}));

(app.common.geom.rect.Rect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"x1","x1",-223390720,null),new cljs.core.Symbol(null,"y1","y1",-2065312303,null),new cljs.core.Symbol(null,"x2","x2",278018052,null),new cljs.core.Symbol(null,"y2","y2",921840226,null),new cljs.core.Symbol(null,"$meta","$meta",427370151,null),new cljs.core.Symbol(null,"$extmap","$extmap",962221828,null),new cljs.core.Symbol(null,"$hash","$hash",2001710882,null)], null);
}));

(app.common.geom.rect.Rect.cljs$lang$type = true);

(app.common.geom.rect.Rect.cljs$lang$ctorStr = "app.common.geom.rect/Rect");

(app.common.geom.rect.Rect.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.common.geom.rect/Rect");
}));

/**
 * Positional factory function for app.common.geom.rect/Rect.
 */
app.common.geom.rect.__GT_Rect = (function app$common$geom$rect$__GT_Rect(x,y,width,height,x1,y1,x2,y2,$meta,$extmap,$hash){
return (new app.common.geom.rect.Rect(x,y,width,height,x1,y1,x2,y2,$meta,$extmap,$hash));
});


app.common.geom.rect.pos__GT_Rect = (function app$common$geom$rect$pos__GT_Rect(x,y,width,height,x1,y1,x2,y2){
return (new app.common.geom.rect.Rect(x,y,width,height,x1,y1,x2,y2,null,null,null));
});

app.common.geom.rect.map__GT_Rect = (function app$common$geom$rect$map__GT_Rect(param_46496){
var exclude__46023__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"y1","y1",589123466),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"x1","x1",-1863922247),null,new cljs.core.Keyword(null,"y2","y2",-718691301),null,new cljs.core.Keyword(null,"x2","x2",-1362513475),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null);
var extmap__46024__auto__ = cljs.core.reduce_kv((function (acc__46025__auto__,k__46026__auto__,v__46027__auto__){
if(cljs.core.contains_QMARK_(exclude__46023__auto__,k__46026__auto__)){
return acc__46025__auto__;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__46025__auto__,k__46026__auto__,v__46027__auto__);
}
}),cljs.core.PersistentArrayMap.EMPTY,param_46496);
return (new app.common.geom.rect.Rect(cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_46496,new cljs.core.Keyword(null,"x","x",2099068185)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_46496,new cljs.core.Keyword(null,"y","y",-1757859776)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_46496,new cljs.core.Keyword(null,"width","width",-384071477)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_46496,new cljs.core.Keyword(null,"height","height",1025178622)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_46496,new cljs.core.Keyword(null,"x1","x1",-1863922247)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_46496,new cljs.core.Keyword(null,"y1","y1",589123466)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_46496,new cljs.core.Keyword(null,"x2","x2",-1362513475)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_46496,new cljs.core.Keyword(null,"y2","y2",-718691301)),null,cljs.core.not_empty(extmap__46024__auto__),null));
});

app.common.geom.rect.rect_QMARK_ = (function app$common$geom$rect$rect_QMARK_(o){
return (o instanceof app.common.geom.rect.Rect);
});
app.common.transit.add_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"rect",new cljs.core.Keyword(null,"class","class",-2030961996),app.common.geom.rect.Rect,new cljs.core.Keyword(null,"wfn","wfn",-1437298400),(function (p1__46545_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__46545_SHARP_);
}),new cljs.core.Keyword(null,"rfn","rfn",-990883444),app.common.geom.rect.map__GT_Rect], null)], 0));
app.common.geom.rect.make_rect = (function app$common$geom$rect$make_rect(var_args){
var G__46549 = arguments.length;
switch (G__46549) {
case 0:
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4((0),(0),0.01,0.01);
}));

(app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$1 = (function (data){
if(app.common.geom.rect.rect_QMARK_(data)){
return data;
} else {
var map__46550 = data;
var map__46550__$1 = cljs.core.__destructure_map(map__46550);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46550__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46550__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46550__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46550__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(x,(0)),app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(y,(0)),app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(width,0.01),app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(height,0.01));
}
}));

(app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$2 = (function (p1,p2){
app.common.data.macros.runtime_assert("expected `p1` and `p2` to be points",(function (){
return ((app.common.geom.point.point_QMARK_(p1)) && (app.common.geom.point.point_QMARK_(p2)));
}));

var xp1 = (p1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"x","x",2099068185)));
var yp1 = (p1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"y","y",-1757859776)));
var xp2 = (p2?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"x","x",2099068185)));
var yp2 = (p2?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"y","y",-1757859776)));
var x1 = Math.min(xp1,xp2);
var y1 = Math.min(yp1,yp2);
var x2 = Math.max(xp1,xp2);
var y2 = Math.max(yp1,yp2);
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(x1,y1,(x2 - x1),(y2 - y1));
}));

(app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4 = (function (x,y,width,height){
if(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$4(x,y,width,height)){
var w = Math.max(width,0.01);
var h = Math.max(height,0.01);
return app.common.geom.rect.pos__GT_Rect(x,y,w,h,x,y,(x + w),(y + h));
} else {
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$0();
}
}));

(app.common.geom.rect.make_rect.cljs$lang$maxFixedArity = 4);

app.common.geom.rect.schema_COLON_rect_attrs = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"RectAttrs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null)], null);
app.common.geom.rect.rect_generator = (function app$common$geom$rect$rect_generator(){
return app.common.schema.generators.fmap((function (p1__46559_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.common.geom.rect.make_rect,p1__46559_SHARP_);
}),app.common.schema.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.schema.generators.small_double(),app.common.schema.generators.small_double(),app.common.schema.generators.small_double(),app.common.schema.generators.small_double()], 0)));
});
app.common.geom.rect.decode_rect = (function app$common$geom$rect$decode_rect(o){
if(cljs.core.map_QMARK_(o)){
return app.common.geom.rect.map__GT_Rect(o);
} else {
return o;
}
});
app.common.geom.rect.rect__GT_json = (function app$common$geom$rect$rect__GT_json(o){
if(app.common.geom.rect.rect_QMARK_(o)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,o);
} else {
return o;
}
});
app.common.geom.rect.schema_COLON_rect = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("error","message","error/message",-502809098),"errors.invalid-rect",new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.geom.rect.rect_generator(),new cljs.core.Keyword("decode","json","decode/json",468276044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),app.common.geom.rect.decode_rect], null),new cljs.core.Keyword("encode","json","encode/json",303857460),app.common.geom.rect.rect__GT_json], null),app.common.geom.rect.schema_COLON_rect_attrs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.geom.rect.rect_QMARK_], null)], null);
app.common.geom.rect.valid_rect_QMARK_ = app.common.schema.validator(app.common.geom.rect.schema_COLON_rect);
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.common.geom.rect","rect","app.common.geom.rect/rect",-1838463012),app.common.geom.rect.schema_COLON_rect);
app.common.geom.rect.empty_rect = app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4((0),(0),0.01,0.01);
app.common.geom.rect.update_rect = (function app$common$geom$rect$update_rect(rect,type){
var G__46566 = type;
var G__46566__$1 = (((G__46566 instanceof cljs.core.Keyword))?G__46566.fqn:null);
switch (G__46566__$1) {
case "size":
var x = (rect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (rect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"y","y",-1757859776)));
var w = (rect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"width","width",-384071477)));
var h = (rect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"height","height",1025178622)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rect,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + w),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y2","y2",-718691301),(y + h)], 0));

break;
case "corners":
var x1 = (rect?.x1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"x1","x1",-1863922247)));
var y1 = (rect?.y1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"y1","y1",589123466)));
var x2 = (rect?.x2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"x2","x2",-1362513475)));
var y2 = (rect?.y2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"y2","y2",-718691301)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rect,new cljs.core.Keyword(null,"x","x",2099068185),Math.min(x1,x2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),Math.min(y1,y2),new cljs.core.Keyword(null,"width","width",-384071477),app.common.math.abs((x2 - x1)),new cljs.core.Keyword(null,"height","height",1025178622),app.common.math.abs((y2 - y1))], 0));

break;
case "position":
var x = (rect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (rect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"y","y",-1757859776)));
var w = (rect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"width","width",-384071477)));
var h = (rect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"height","height",1025178622)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rect,new cljs.core.Keyword(null,"x1","x1",-1863922247),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y1","y1",589123466),y,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + w),new cljs.core.Keyword(null,"y2","y2",-718691301),(y + h)], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46566__$1)].join('')));

}
});
app.common.geom.rect.update_rect_BANG_ = (function app$common$geom$rect$update_rect_BANG_(rect,type){
var G__46573 = type;
var G__46573__$1 = (((G__46573 instanceof cljs.core.Keyword))?G__46573.fqn:null);
switch (G__46573__$1) {
case "size":
case "position":
var x = (rect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (rect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"y","y",-1757859776)));
var w = (rect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"width","width",-384071477)));
var h = (rect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"height","height",1025178622)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rect,new cljs.core.Keyword(null,"x1","x1",-1863922247),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y1","y1",589123466),y,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + w),new cljs.core.Keyword(null,"y2","y2",-718691301),(y + h)], 0));

break;
case "corners":
var x1 = (rect?.x1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"x1","x1",-1863922247)));
var y1 = (rect?.y1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"y1","y1",589123466)));
var x2 = (rect?.x2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"x2","x2",-1362513475)));
var y2 = (rect?.y2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"y2","y2",-718691301)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rect,new cljs.core.Keyword(null,"x","x",2099068185),Math.min(x1,x2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),Math.min(y1,y2),new cljs.core.Keyword(null,"width","width",-384071477),app.common.math.abs((x2 - x1)),new cljs.core.Keyword(null,"height","height",1025178622),app.common.math.abs((y2 - y1))], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46573__$1)].join('')));

}
});
app.common.geom.rect.close_rect_QMARK_ = (function app$common$geom$rect$close_rect_QMARK_(rect1,rect2){
app.common.data.macros.runtime_assert("expected two rects",(function (){
return ((app.common.geom.rect.rect_QMARK_(rect1)) && (app.common.geom.rect.rect_QMARK_(rect2)));
}));

return ((app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2((rect1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect1,new cljs.core.Keyword(null,"x","x",2099068185))),(rect2?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect2,new cljs.core.Keyword(null,"x","x",2099068185))))) && (((app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2((rect1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect1,new cljs.core.Keyword(null,"y","y",-1757859776))),(rect2?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect2,new cljs.core.Keyword(null,"y","y",-1757859776))))) && (((app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2((rect1?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect1,new cljs.core.Keyword(null,"width","width",-384071477))),(rect2?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect2,new cljs.core.Keyword(null,"width","width",-384071477))))) && (app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2((rect1?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect1,new cljs.core.Keyword(null,"height","height",1025178622))),(rect2?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect2,new cljs.core.Keyword(null,"height","height",1025178622))))))))));
});
app.common.geom.rect.rect__GT_points = (function app$common$geom$rect$rect__GT_points(rect){
app.common.data.macros.runtime_assert("expected rect instance",(function (){
return app.common.geom.rect.rect_QMARK_(rect);
}));

var x = (rect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (rect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"y","y",-1757859776)));
var w = (rect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"width","width",-384071477)));
var h = (rect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"height","height",1025178622)));
if(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y)){
var w__$1 = Math.max(w,0.01);
var h__$1 = Math.max(h,0.01);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + w__$1),y),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + w__$1),(y + h__$1)),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,(y + h__$1))], null);
} else {
return null;
}
});
/**
 * Extract the position part of the rect
 */
app.common.geom.rect.rect__GT_point = (function app$common$geom$rect$rect__GT_point(rect){
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((rect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"x","x",2099068185))),(rect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"y","y",-1757859776))));
});
app.common.geom.rect.rect__GT_center = (function app$common$geom$rect$rect__GT_center(rect){
app.common.data.macros.runtime_assert("expr assert: (rect? rect)",(function (){
return app.common.geom.rect.rect_QMARK_(rect);
}));

var x = (rect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (rect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"y","y",-1757859776)));
var w = (rect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"width","width",-384071477)));
var h = (rect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"height","height",1025178622)));
if(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$4(x,y,w,h)){
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + (w / 2.0)),(y + (h / 2.0)));
} else {
return null;
}
});
app.common.geom.rect.rect__GT_lines = (function app$common$geom$rect$rect__GT_lines(rect){
app.common.data.macros.runtime_assert("expr assert: (rect? rect)",(function (){
return app.common.geom.rect.rect_QMARK_(rect);
}));

var x = (rect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (rect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"y","y",-1757859776)));
var w = (rect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"width","width",-384071477)));
var h = (rect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"height","height",1025178622)));
if(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y)){
var w__$1 = Math.max(w,0.01);
var h__$1 = Math.max(h,0.01);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + w__$1),y)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + w__$1),y),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + w__$1),(y + h__$1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + w__$1),(y + h__$1)),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,(y + h__$1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,(y + h__$1)),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y)], null)], null);
} else {
return null;
}
});
app.common.geom.rect.points__GT_rect = (function app$common$geom$rect$points__GT_rect(points){
var temp__5825__auto__ = cljs.core.seq(points);
if(temp__5825__auto__){
var points__$1 = temp__5825__auto__;
var minx = Infinity;
var miny = Infinity;
var maxx = -Infinity;
var maxy = -Infinity;
var pts = points__$1;
while(true){
var temp__5823__auto__ = cljs.core.first(pts);
if(cljs.core.truth_(temp__5823__auto__)){
var pt = temp__5823__auto__;
var x = (pt?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (pt?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"y","y",-1757859776)));
var G__46828 = Math.min(minx,x);
var G__46829 = Math.min(miny,y);
var G__46830 = Math.max(maxx,x);
var G__46831 = Math.max(maxy,y);
var G__46832 = cljs.core.rest(pts);
minx = G__46828;
miny = G__46829;
maxx = G__46830;
maxy = G__46831;
pts = G__46832;
continue;
} else {
if(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$4(minx,miny,maxx,maxy)){
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(minx,miny,(maxx - minx),(maxy - miny));
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
app.common.geom.rect.bounds__GT_rect = (function app$common$geom$rect$bounds__GT_rect(p__46618){
var vec__46619 = p__46618;
var pa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46619,(0),null);
var pb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46619,(1),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46619,(2),null);
var pd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46619,(3),null);
var ax = (pa?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pa,new cljs.core.Keyword(null,"x","x",2099068185)));
var ay = (pa?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pa,new cljs.core.Keyword(null,"y","y",-1757859776)));
var bx = (pb?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pb,new cljs.core.Keyword(null,"x","x",2099068185)));
var by = (pb?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pb,new cljs.core.Keyword(null,"y","y",-1757859776)));
var cx = (pc?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pc,new cljs.core.Keyword(null,"x","x",2099068185)));
var cy = (pc?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pc,new cljs.core.Keyword(null,"y","y",-1757859776)));
var dx = (pd?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pd,new cljs.core.Keyword(null,"x","x",2099068185)));
var dy = (pd?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pd,new cljs.core.Keyword(null,"y","y",-1757859776)));
var minx = Math.min(ax,bx,cx,dx);
var miny = Math.min(ay,by,cy,dy);
var maxx = Math.max(ax,bx,cx,dx);
var maxy = Math.max(ay,by,cy,dy);
if(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$4(minx,miny,maxx,maxy)){
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(minx,miny,(maxx - minx),(maxy - miny));
} else {
return null;
}
});
app.common.geom.rect.xf_keep_x = cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__46632_SHARP_){
return (p1__46632_SHARP_?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__46632_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185)));
}));
app.common.geom.rect.xf_keep_y = cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__46633_SHARP_){
return (p1__46633_SHARP_?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__46633_SHARP_,new cljs.core.Keyword(null,"y","y",-1757859776)));
}));
app.common.geom.rect.xf_keep_x2 = cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__46636_SHARP_){
return (p1__46636_SHARP_?.x2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__46636_SHARP_,new cljs.core.Keyword(null,"x2","x2",-1362513475)));
}));
app.common.geom.rect.xf_keep_y2 = cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__46637_SHARP_){
return (p1__46637_SHARP_?.y2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__46637_SHARP_,new cljs.core.Keyword(null,"y2","y2",-718691301)));
}));
app.common.geom.rect.squared_points = (function app$common$geom$rect$squared_points(points){
if(app.common.data.not_empty_QMARK_(points)){
var minx = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(app.common.geom.rect.xf_keep_x,app.common.data.min,Infinity,points);
var miny = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(app.common.geom.rect.xf_keep_y,app.common.data.min,Infinity,points);
var maxx = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(app.common.geom.rect.xf_keep_x2,app.common.data.max,-Infinity,points);
var maxy = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(app.common.geom.rect.xf_keep_y2,app.common.data.max,-Infinity,points);
if(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$4(minx,miny,maxx,maxy)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(minx,miny),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(maxx,miny),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(maxx,maxy),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(minx,maxy)], null);
} else {
return null;
}
} else {
return null;
}
});
app.common.geom.rect.join_rects = (function app$common$geom$rect$join_rects(rects){
if(cljs.core.seq(rects)){
var minx = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(app.common.geom.rect.xf_keep_x,app.common.data.min,Infinity,rects);
var miny = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(app.common.geom.rect.xf_keep_y,app.common.data.min,Infinity,rects);
var maxx = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(app.common.geom.rect.xf_keep_x2,app.common.data.max,-Infinity,rects);
var maxy = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(app.common.geom.rect.xf_keep_y2,app.common.data.max,-Infinity,rects);
if(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$4(minx,miny,maxx,maxy)){
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(minx,miny,(maxx - minx),(maxy - miny));
} else {
return null;
}
} else {
return null;
}
});
app.common.geom.rect.center__GT_rect = (function app$common$geom$rect$center__GT_rect(var_args){
var G__46665 = arguments.length;
switch (G__46665) {
case 2:
return app.common.geom.rect.center__GT_rect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.geom.rect.center__GT_rect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.rect.center__GT_rect.cljs$core$IFn$_invoke$arity$2 = (function (point,size){
return app.common.geom.rect.center__GT_rect.cljs$core$IFn$_invoke$arity$3(point,size,size);
}));

(app.common.geom.rect.center__GT_rect.cljs$core$IFn$_invoke$arity$3 = (function (point,w,h){
if((!((point == null)))){
var x = (point?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (point?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.Keyword(null,"y","y",-1757859776)));
if(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$4(x,y,w,h)){
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4((x - (w / (2))),(y - (h / (2))),w,h);
} else {
return null;
}
} else {
return null;
}
}));

(app.common.geom.rect.center__GT_rect.cljs$lang$maxFixedArity = 3);

app.common.geom.rect.s_EQ_ = (function app$common$geom$rect$s_EQ_(a,b){
return app.common.math.almost_zero_QMARK_((a - b));
});
/**
 * Check for two rects to overlap. Rects won't overlap only if
 * one of them is fully to the left or the top
 */
app.common.geom.rect.overlaps_rects_QMARK_ = (function app$common$geom$rect$overlaps_rects_QMARK_(rect_a,rect_b){
var x1a = (rect_a?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect_a,new cljs.core.Keyword(null,"x","x",2099068185)));
var y1a = (rect_a?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect_a,new cljs.core.Keyword(null,"y","y",-1757859776)));
var x2a = (x1a + (rect_a?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect_a,new cljs.core.Keyword(null,"width","width",-384071477))));
var y2a = (y1a + (rect_a?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect_a,new cljs.core.Keyword(null,"height","height",1025178622))));
var x1b = (rect_b?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect_b,new cljs.core.Keyword(null,"x","x",2099068185)));
var y1b = (rect_b?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect_b,new cljs.core.Keyword(null,"y","y",-1757859776)));
var x2b = (x1b + (rect_b?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect_b,new cljs.core.Keyword(null,"width","width",-384071477))));
var y2b = (y1b + (rect_b?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect_b,new cljs.core.Keyword(null,"height","height",1025178622))));
return (((((x2a > x1b)) || (app.common.geom.rect.s_EQ_(x2a,x1b)))) && ((((((x2b >= x1a)) || (app.common.geom.rect.s_EQ_(x2b,x1a)))) && ((((((y1b <= y2a)) || (app.common.geom.rect.s_EQ_(y1b,y2a)))) && ((((y1a <= y2b)) || (app.common.geom.rect.s_EQ_(y1a,y2b)))))))));
});
app.common.geom.rect.contains_point_QMARK_ = (function app$common$geom$rect$contains_point_QMARK_(rect,point){
if(app.common.geom.point.point_QMARK_(point)){
} else {
throw (new Error("Assert failed: (gpt/point? point)"));
}

var x1 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect);
var y1 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect);
var x2 = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect));
var y2 = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect));
var px = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point);
var py = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point);
return (((((px > x1)) || (app.common.geom.rect.s_EQ_(px,x1)))) && ((((((px < x2)) || (app.common.geom.rect.s_EQ_(px,x2)))) && ((((((py > y1)) || (app.common.geom.rect.s_EQ_(py,y1)))) && ((((py < y2)) || (app.common.geom.rect.s_EQ_(py,y2)))))))));
});
/**
 * Check if a rect srb is contained inside sra
 */
app.common.geom.rect.contains_rect_QMARK_ = (function app$common$geom$rect$contains_rect_QMARK_(sra,srb){
var ax1 = (sra?.x1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(sra,new cljs.core.Keyword(null,"x1","x1",-1863922247)));
var ax2 = (sra?.x2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(sra,new cljs.core.Keyword(null,"x2","x2",-1362513475)));
var ay1 = (sra?.y1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(sra,new cljs.core.Keyword(null,"y1","y1",589123466)));
var ay2 = (sra?.y2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(sra,new cljs.core.Keyword(null,"y2","y2",-718691301)));
var bx1 = (srb?.x1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(srb,new cljs.core.Keyword(null,"x1","x1",-1863922247)));
var bx2 = (srb?.x2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(srb,new cljs.core.Keyword(null,"x2","x2",-1362513475)));
var by1 = (srb?.y1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(srb,new cljs.core.Keyword(null,"y1","y1",589123466)));
var by2 = (srb?.y2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(srb,new cljs.core.Keyword(null,"y2","y2",-718691301)));
return (((bx1 >= ax1)) && ((((bx2 <= ax2)) && ((((by1 >= ay1)) && ((by2 <= ay2)))))));
});
app.common.geom.rect.corners__GT_rect = (function app$common$geom$rect$corners__GT_rect(var_args){
var G__46692 = arguments.length;
switch (G__46692) {
case 2:
return app.common.geom.rect.corners__GT_rect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return app.common.geom.rect.corners__GT_rect.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.rect.corners__GT_rect.cljs$core$IFn$_invoke$arity$2 = (function (p1,p2){
return app.common.geom.rect.corners__GT_rect.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p2),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p2));
}));

(app.common.geom.rect.corners__GT_rect.cljs$core$IFn$_invoke$arity$4 = (function (xp1,yp1,xp2,yp2){
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(Math.min(xp1,xp2),Math.min(yp1,yp2),cljs.core.abs((xp1 - xp2)),cljs.core.abs((yp1 - yp2)));
}));

(app.common.geom.rect.corners__GT_rect.cljs$lang$maxFixedArity = 4);

app.common.geom.rect.clip_rect = (function app$common$geom$rect$clip_rect(selrect,bounds){
if(app.common.geom.rect.rect_QMARK_(selrect)){
app.common.data.macros.runtime_assert("expr assert: (rect? bounds)",(function (){
return app.common.geom.rect.rect_QMARK_(bounds);
}));

var x1 = (selrect?.x1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x1","x1",-1863922247)));
var y1 = (selrect?.y1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y1","y1",589123466)));
var x2 = (selrect?.x2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x2","x2",-1362513475)));
var y2 = (selrect?.y2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y2","y2",-718691301)));
var bx1 = (bounds?.x1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"x1","x1",-1863922247)));
var by1 = (bounds?.y1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"y1","y1",589123466)));
var bx2 = (bounds?.x2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"x2","x2",-1362513475)));
var by2 = (bounds?.y2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"y2","y2",-718691301)));
return app.common.geom.rect.corners__GT_rect.cljs$core$IFn$_invoke$arity$4(Math.max(bx1,x1),Math.max(by1,y1),Math.min(bx2,x2),Math.min(by2,y2));
} else {
return null;
}
});
app.common.geom.rect.fix_aspect_ratio = (function app$common$geom$rect$fix_aspect_ratio(bounds,aspect_ratio){
if(cljs.core.truth_(aspect_ratio)){
var width = (bounds?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"width","width",-384071477)));
var height = (bounds?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"height","height",1025178622)));
var target_height = (width * aspect_ratio);
var target_width = (height * ((1) / aspect_ratio));
var G__46704 = bounds;
var G__46704__$1 = (((target_height > height))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46704,new cljs.core.Keyword(null,"height","height",1025178622),target_height),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,((target_height - height) / (2))):G__46704);
if((target_height < height)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46704__$1,new cljs.core.Keyword(null,"width","width",-384071477),target_width),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._,((target_width - width) / (2)));
} else {
return G__46704__$1;
}
} else {
return bounds;
}
});

//# sourceMappingURL=app.common.geom.rect.js.map
