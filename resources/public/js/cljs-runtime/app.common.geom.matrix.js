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
import "./cljs.pprint.js";
goog.provide('app.common.geom.matrix');
app.common.geom.matrix.precision = (6);

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
app.common.geom.matrix.Matrix = (function (a,b,c,d,e,f,$meta,$extmap,$hash){
this.a = a;
this.b = b;
this.c = c;
this.d = d;
this.e = e;
this.f = f;
this.$meta = $meta;
this.$extmap = $extmap;
this.$hash = $hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139280;
});
(app.common.geom.matrix.Matrix.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (app.common.geom.matrix.format_precision.cljs$core$IFn$_invoke$arity$2 ? app.common.geom.matrix.format_precision.cljs$core$IFn$_invoke$arity$2(this$,app.common.geom.matrix.precision) : app.common.geom.matrix.format_precision.call(null,this$,app.common.geom.matrix.precision));
}));

(app.common.geom.matrix.Matrix.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this$,f__45940__auto__,init__45941__auto__){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__45942__auto__,p__47249){
var vec__47250 = p__47249;
var key_47247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47250,(0),null);
var v__45943__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47250,(1),null);
return (f__45940__auto__.cljs$core$IFn$_invoke$arity$3 ? f__45940__auto__.cljs$core$IFn$_invoke$arity$3(ret__45942__auto__,key_47247,v__45943__auto__) : f__45940__auto__.call(null,ret__45942__auto__,key_47247,v__45943__auto__));
}),init__45941__auto__,this$__$1);
}));

(app.common.geom.matrix.Matrix.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((this$__$1 === other)) || ((((!((other == null)))) && ((((this$__$1.constructor === other.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.a,other.a)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.b,other.b)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.c,other.c)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.d,other.d)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.e,other.e)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.$extmap,other.$extmap)))))))))))))))))));
}));

(app.common.geom.matrix.Matrix.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__45882__auto__ = this$__$1.$hash;
if((!((h__45882__auto__ == null)))){
return h__45882__auto__;
} else {
var h__45882__auto____$1 = (function (coll__45932__auto__){
return (-814985099 ^ cljs.core.hash_unordered_coll(coll__45932__auto__));
})(this$__$1);
(this$__$1.$hash = h__45882__auto____$1);

return h__45882__auto____$1;
}
}));

(app.common.geom.matrix.Matrix.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,val_47248){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(val_47248)){
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(val_47248,(0)),cljs.core._nth(val_47248,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,val_47248);
}
}));

(app.common.geom.matrix.Matrix.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (6 + cljs.core.count(this$__$1.$extmap));
}));

(app.common.geom.matrix.Matrix.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"a","a",-2123407586),this$__$1.a,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"b","b",1482224470),this$__$1.b,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"c","c",-1763192079),this$__$1.c,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"d","d",1972142424),this$__$1.d,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"e","e",1381269198),this$__$1.e,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),this$__$1.f,null))], null),this$__$1.$extmap));
}));

(app.common.geom.matrix.Matrix.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.$meta;
}));

(app.common.geom.matrix.Matrix.prototype.app$common$record$ICustomRecordEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.geom.matrix.Matrix.prototype.app$common$record$ICustomRecordEquiv$_equiv_with_exceptions$arity$3 = (function (this$,other,exceptions){
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
var and__5023__auto____$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.a,other.a)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.b,other.b)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.c,other.c)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.d,other.d)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.e,other.e)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.f,other.f)) && ((cljs.core.count(this$__$1.$extmap) === cljs.core.count(other.$extmap))))))))))))));
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

(app.common.geom.matrix.Matrix.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new app.common.geom.matrix.Matrix(this$__$1.a,this$__$1.b,this$__$1.c,this$__$1.d,this$__$1.e,this$__$1.f,this$__$1.$meta,this$__$1.$extmap,this$__$1.$hash));
}));

(app.common.geom.matrix.Matrix.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer__46013__auto__,opts__46014__auto__){
var self__ = this;
var this$__$1 = this;
var pr_pair__46015__auto__ = (function (keyval__46017__auto__){
return cljs.core.pr_sequential_writer(writer__46013__auto__,cljs.core.pr_writer,""," ","",opts__46014__auto__,keyval__46017__auto__);
});
return cljs.core.pr_sequential_writer(writer__46013__auto__,pr_pair__46015__auto__,"#app.common.geom.matrix.Matrix{",", ","}",opts__46014__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),this$__$1.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"b","b",1482224470),this$__$1.b],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"c","c",-1763192079),this$__$1.c],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"d","d",1972142424),this$__$1.d],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1381269198),this$__$1.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),this$__$1.f],null))], null),this$__$1.$extmap));
}));

(app.common.geom.matrix.Matrix.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.RecordIter((0),this$__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"f","f",-1597136552)], null),(cljs.core.truth_(this$__$1.$extmap)?cljs.core._iterator(this$__$1.$extmap):cljs.core.nil_iter())));
}));

(app.common.geom.matrix.Matrix.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (this$,key_47247,val_47248){
var self__ = this;
var this$__$1 = this;
var key__45937__auto__ = (((key_47247 instanceof cljs.core.Keyword))?key_47247.fqn:key_47247);
var G__47268_47403 = key_47247;
var G__47268_47404__$1 = (((G__47268_47403 instanceof cljs.core.Keyword))?G__47268_47403.fqn:null);
switch (G__47268_47404__$1) {
case "a":
(this$__$1.a = val_47248);

break;
case "b":
(this$__$1.b = val_47248);

break;
case "c":
(this$__$1.c = val_47248);

break;
case "d":
(this$__$1.d = val_47248);

break;
case "e":
(this$__$1.e = val_47248);

break;
case "f":
(this$__$1.f = val_47248);

break;
default:
(this$__$1.$extmap = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1.$extmap,key_47247,val_47248));

}

return this$__$1;
}));

(app.common.geom.matrix.Matrix.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,val_47248){
var self__ = this;
var this$__$1 = this;
return (new app.common.geom.matrix.Matrix(this$__$1.a,this$__$1.b,this$__$1.c,this$__$1.d,this$__$1.e,this$__$1.f,val_47248,this$__$1.$extmap,this$__$1.$hash));
}));

(app.common.geom.matrix.Matrix.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,key_47247){
var self__ = this;
var this$__$1 = this;
var G__47269 = key_47247;
var G__47269__$1 = (((G__47269 instanceof cljs.core.Keyword))?G__47269.fqn:null);
switch (G__47269__$1) {
case "a":
case "b":
case "c":
case "d":
case "e":
case "f":
return true;

break;
default:
return cljs.core.contains_QMARK_(this$__$1.$extmap,key_47247);

}
}));

(app.common.geom.matrix.Matrix.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,key_47247,val_47248){
var self__ = this;
var this$__$1 = this;
var G__47270 = key_47247;
var G__47270__$1 = (((G__47270 instanceof cljs.core.Keyword))?G__47270.fqn:null);
switch (G__47270__$1) {
case "a":
return (new app.common.geom.matrix.Matrix(val_47248,this$__$1.b,this$__$1.c,this$__$1.d,this$__$1.e,this$__$1.f,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "b":
return (new app.common.geom.matrix.Matrix(this$__$1.a,val_47248,this$__$1.c,this$__$1.d,this$__$1.e,this$__$1.f,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "c":
return (new app.common.geom.matrix.Matrix(this$__$1.a,this$__$1.b,val_47248,this$__$1.d,this$__$1.e,this$__$1.f,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "d":
return (new app.common.geom.matrix.Matrix(this$__$1.a,this$__$1.b,this$__$1.c,val_47248,this$__$1.e,this$__$1.f,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "e":
return (new app.common.geom.matrix.Matrix(this$__$1.a,this$__$1.b,this$__$1.c,this$__$1.d,val_47248,this$__$1.f,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "f":
return (new app.common.geom.matrix.Matrix(this$__$1.a,this$__$1.b,this$__$1.c,this$__$1.d,this$__$1.e,val_47248,this$__$1.$meta,this$__$1.$extmap,null));

break;
default:
return (new app.common.geom.matrix.Matrix(this$__$1.a,this$__$1.b,this$__$1.c,this$__$1.d,this$__$1.e,this$__$1.f,this$__$1.$meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1.$extmap,key_47247,val_47248),null));

}
}));

(app.common.geom.matrix.Matrix.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,key_47247){
var self__ = this;
var this$__$1 = this;
var G__47271 = key_47247;
var G__47271__$1 = (((G__47271 instanceof cljs.core.Keyword))?G__47271.fqn:null);
switch (G__47271__$1) {
case "a":
case "b":
case "c":
case "d":
case "e":
case "f":
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,key_47247,null);

break;
default:
var extmap1__45938__auto__ = this$__$1.$extmap;
var extmap2__45939__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(extmap1__45938__auto__,key_47247);
if((extmap1__45938__auto__ === extmap2__45939__auto__)){
return this$__$1;
} else {
return (new app.common.geom.matrix.Matrix(this$__$1.a,this$__$1.b,this$__$1.c,this$__$1.d,this$__$1.e,this$__$1.f,this$__$1.$meta,cljs.core.not_empty(extmap2__45939__auto__),null));
}

}
}));

(app.common.geom.matrix.Matrix.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k__45934__auto__){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k__45934__auto__,null);
}));

(app.common.geom.matrix.Matrix.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,key_47247,else__45935__auto__){
var self__ = this;
var this$__$1 = this;
var G__47272 = key_47247;
var G__47272__$1 = (((G__47272 instanceof cljs.core.Keyword))?G__47272.fqn:null);
switch (G__47272__$1) {
case "a":
return this$__$1.a;

break;
case "b":
return this$__$1.b;

break;
case "c":
return this$__$1.c;

break;
case "d":
return this$__$1.d;

break;
case "e":
return this$__$1.e;

break;
case "f":
return this$__$1.f;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(this$__$1.$extmap,key_47247,else__45935__auto__);

}
}));

(app.common.geom.matrix.Matrix.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),new cljs.core.Symbol(null,"$meta","$meta",427370151,null),new cljs.core.Symbol(null,"$extmap","$extmap",962221828,null),new cljs.core.Symbol(null,"$hash","$hash",2001710882,null)], null);
}));

(app.common.geom.matrix.Matrix.cljs$lang$type = true);

(app.common.geom.matrix.Matrix.cljs$lang$ctorStr = "app.common.geom.matrix/Matrix");

(app.common.geom.matrix.Matrix.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.common.geom.matrix/Matrix");
}));

/**
 * Positional factory function for app.common.geom.matrix/Matrix.
 */
app.common.geom.matrix.__GT_Matrix = (function app$common$geom$matrix$__GT_Matrix(a,b,c,d,e,f,$meta,$extmap,$hash){
return (new app.common.geom.matrix.Matrix(a,b,c,d,e,f,$meta,$extmap,$hash));
});


app.common.geom.matrix.pos__GT_Matrix = (function app$common$geom$matrix$pos__GT_Matrix(a,b,c,d,e,f){
return (new app.common.geom.matrix.Matrix(a,b,c,d,e,f,null,null,null));
});

app.common.geom.matrix.map__GT_Matrix = (function app$common$geom$matrix$map__GT_Matrix(param_47246){
var exclude__46023__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"c","c",-1763192079),null,new cljs.core.Keyword(null,"b","b",1482224470),null,new cljs.core.Keyword(null,"d","d",1972142424),null,new cljs.core.Keyword(null,"f","f",-1597136552),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null);
var extmap__46024__auto__ = cljs.core.reduce_kv((function (acc__46025__auto__,k__46026__auto__,v__46027__auto__){
if(cljs.core.contains_QMARK_(exclude__46023__auto__,k__46026__auto__)){
return acc__46025__auto__;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__46025__auto__,k__46026__auto__,v__46027__auto__);
}
}),cljs.core.PersistentArrayMap.EMPTY,param_47246);
return (new app.common.geom.matrix.Matrix(cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_47246,new cljs.core.Keyword(null,"a","a",-2123407586)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_47246,new cljs.core.Keyword(null,"b","b",1482224470)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_47246,new cljs.core.Keyword(null,"c","c",-1763192079)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_47246,new cljs.core.Keyword(null,"d","d",1972142424)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_47246,new cljs.core.Keyword(null,"e","e",1381269198)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_47246,new cljs.core.Keyword(null,"f","f",-1597136552)),null,cljs.core.not_empty(extmap__46024__auto__),null));
});

app.common.geom.matrix.format_precision = (function app$common$geom$matrix$format_precision(mtx,precision){
if(cljs.core.truth_(mtx)){
return ""+"matrix("+(app.common.math.to_fixed(mtx.a,precision) ?? "")+", "+(app.common.math.to_fixed(mtx.b,precision) ?? "")+", "+(app.common.math.to_fixed(mtx.c,precision) ?? "")+", "+(app.common.math.to_fixed(mtx.d,precision) ?? "")+", "+(app.common.math.to_fixed(mtx.e,precision) ?? "")+", "+(app.common.math.to_fixed(mtx.f,precision) ?? "")+")";
} else {
return null;
}
});
/**
 * Return true if `v` is Matrix instance.
 */
app.common.geom.matrix.matrix_QMARK_ = (function app$common$geom$matrix$matrix_QMARK_(v){
return (v instanceof app.common.geom.matrix.Matrix);
});
/**
 * Create a new matrix instance.
 */
app.common.geom.matrix.matrix = (function app$common$geom$matrix$matrix(var_args){
var G__47277 = arguments.length;
switch (G__47277) {
case 0:
return app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0();

break;
case 6:
return app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.common.geom.matrix.pos__GT_Matrix((1),(0),(0),(1),(0),(0));
}));

(app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
return app.common.geom.matrix.pos__GT_Matrix(a,b,c,d,e,f);
}));

(app.common.geom.matrix.matrix.cljs$lang$maxFixedArity = 6);

app.common.geom.matrix.schema_COLON_matrix_attrs = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"MatrixAttrs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword("app.common.schema","safe-double","app.common.schema/safe-double",-720421367)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword("app.common.schema","safe-double","app.common.schema/safe-double",-720421367)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword("app.common.schema","safe-double","app.common.schema/safe-double",-720421367)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword("app.common.schema","safe-double","app.common.schema/safe-double",-720421367)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword("app.common.schema","safe-double","app.common.schema/safe-double",-720421367)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword("app.common.schema","safe-double","app.common.schema/safe-double",-720421367)], null)], null);
app.common.geom.matrix.valid_matrix_QMARK_ = app.common.schema.validator(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.geom.matrix.matrix_QMARK_], null),app.common.geom.matrix.schema_COLON_matrix_attrs], null));
app.common.geom.matrix.matrix_generator = (function app$common$geom$matrix$matrix_generator(){
return app.common.schema.generators.fmap((function (p1__47281_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.common.geom.matrix.pos__GT_Matrix,p1__47281_SHARP_);
}),app.common.schema.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.schema.generators.small_double(),app.common.schema.generators.small_double(),app.common.schema.generators.small_double(),app.common.schema.generators.small_double(),app.common.schema.generators.small_double(),app.common.schema.generators.small_double()], 0)));
});
app.common.geom.matrix.number_regex = /[+-]?\d*(\.\d+)?([eE][+-]?\d+)?/;
app.common.geom.matrix.str__GT_matrix = (function app$common$geom$matrix$str__GT_matrix(matrix_str){
var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.common.data.parse_double,cljs.core.first),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47282_SHARP_){
return cljs.core.seq(cljs.core.first(p1__47282_SHARP_));
}),cljs.core.re_seq(app.common.geom.matrix.number_regex,matrix_str)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.common.geom.matrix.matrix,params);
});
app.common.geom.matrix.matrix__GT_str = (function app$common$geom$matrix$matrix__GT_str(o){
if(app.common.geom.matrix.matrix_QMARK_(o)){
return ""+((o?.a?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(o,new cljs.core.Keyword(null,"a","a",-2123407586))) ?? "")+","+((o?.b?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(o,new cljs.core.Keyword(null,"b","b",1482224470))) ?? "")+","+((o?.c?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(o,new cljs.core.Keyword(null,"c","c",-1763192079))) ?? "")+","+((o?.d?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(o,new cljs.core.Keyword(null,"d","d",1972142424))) ?? "")+","+((o?.e?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(o,new cljs.core.Keyword(null,"e","e",1381269198))) ?? "")+","+((o?.f?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(o,new cljs.core.Keyword(null,"f","f",-1597136552))) ?? "")+",";
} else {
return o;
}
});
app.common.geom.matrix.matrix__GT_json = (function app$common$geom$matrix$matrix__GT_json(o){
if(app.common.geom.matrix.matrix_QMARK_(o)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,o);
} else {
return o;
}
});
app.common.geom.matrix.decode_matrix = (function app$common$geom$matrix$decode_matrix(o){
if(cljs.core.map_QMARK_(o)){
return app.common.geom.matrix.map__GT_Matrix(o);
} else {
if(typeof o === 'string'){
return app.common.geom.matrix.str__GT_matrix(o);
} else {
return o;
}
}
});
app.common.geom.matrix.schema_COLON_matrix = app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.geom.matrix","matrix","app.common.geom.matrix/matrix",-2125853053),new cljs.core.Keyword(null,"pred","pred",1927423397),app.common.geom.matrix.valid_matrix_QMARK_,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("decode","string","decode/string",-108229948),new cljs.core.Keyword("decode","json","decode/json",468276044),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("app.common.schema.openapi","format","app.common.schema.openapi/format",1235016623),new cljs.core.Keyword("encode","json","encode/json",303857460),new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),new cljs.core.Keyword("gen","gen","gen/gen",142743606),new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.Keyword("encode","string","encode/string",-137314532)],["Matrix instance",app.common.geom.matrix.decode_matrix,app.common.geom.matrix.decode_matrix,"matrix","matrix",app.common.geom.matrix.matrix__GT_json,"string",app.common.geom.matrix.matrix_generator(),"expected a valid matrix instance",app.common.geom.matrix.matrix__GT_str])], null));
app.common.geom.matrix.close_QMARK_ = (function app$common$geom$matrix$close_QMARK_(m1,m2){
return ((app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(m1.a,m2.a)) && (((app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(m1.b,m2.b)) && (((app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(m1.c,m2.c)) && (((app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(m1.d,m2.d)) && (((app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(m1.e,m2.e)) && (app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(m1.f,m2.f)))))))))));
});
app.common.geom.matrix.unit_QMARK_ = (function app$common$geom$matrix$unit_QMARK_(m1){
return (((!((m1 == null)))) && (((app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(m1.a,(1))) && (((app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(m1.b,(0))) && (((app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(m1.c,(0))) && (((app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(m1.d,(1))) && (((app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(m1.e,(0))) && (app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(m1.f,(0))))))))))))));
});
app.common.geom.matrix.multiply_BANG_ = (function app$common$geom$matrix$multiply_BANG_(m1,m2){
var m1a = m1.a;
var m1b = m1.b;
var m1c = m1.c;
var m1d = m1.d;
var m1e = m1.e;
var m1f = m1.f;
var m2a = m2.a;
var m2b = m2.b;
var m2c = m2.c;
var m2d = m2.d;
var m2e = m2.e;
var m2f = m2.f;
(m1.a = ((m1a * m2a) + (m1c * m2b)));

(m1.b = ((m1b * m2a) + (m1d * m2b)));

(m1.c = ((m1a * m2c) + (m1c * m2d)));

(m1.d = ((m1b * m2c) + (m1d * m2d)));

(m1.e = (((m1a * m2e) + (m1c * m2f)) + m1e));

(m1.f = (((m1b * m2e) + (m1d * m2f)) + m1f));

return m1;
});
app.common.geom.matrix.multiply = (function app$common$geom$matrix$multiply(var_args){
var G__47304 = arguments.length;
switch (G__47304) {
case 2:
return app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___47424 = arguments.length;
var i__5750__auto___47425 = (0);
while(true){
if((i__5750__auto___47425 < len__5749__auto___47424)){
args_arr__5774__auto__.push((arguments[i__5750__auto___47425]));

var G__47427 = (i__5750__auto___47425 + (1));
i__5750__auto___47425 = G__47427;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$2 = (function (m1,m2){
if((((m1 == null)) && ((m2 == null)))){
return app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0();
} else {
if((m1 == null)){
return m2;
} else {
if((m2 == null)){
return m1;
} else {
var m1a = m1.a;
var m1b = m1.b;
var m1c = m1.c;
var m1d = m1.d;
var m1e = m1.e;
var m1f = m1.f;
var m2a = m2.a;
var m2b = m2.b;
var m2c = m2.c;
var m2d = m2.d;
var m2e = m2.e;
var m2f = m2.f;
return app.common.geom.matrix.pos__GT_Matrix(((m1a * m2a) + (m1c * m2b)),((m1b * m2a) + (m1d * m2b)),((m1a * m2c) + (m1c * m2d)),((m1b * m2c) + (m1d * m2d)),(((m1a * m2e) + (m1c * m2f)) + m1e),(((m1b * m2e) + (m1d * m2f)) + m1f));

}
}
}
}));

(app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$variadic = (function (m1,m2,others){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.geom.matrix.multiply_BANG_,app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$2(m1,m2),others);
}));

/** @this {Function} */
(app.common.geom.matrix.multiply.cljs$lang$applyTo = (function (seq47301){
var G__47302 = cljs.core.first(seq47301);
var seq47301__$1 = cljs.core.next(seq47301);
var G__47303 = cljs.core.first(seq47301__$1);
var seq47301__$2 = cljs.core.next(seq47301__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47302,G__47303,seq47301__$2);
}));

(app.common.geom.matrix.multiply.cljs$lang$maxFixedArity = (2));

/**
 * Given two TRANSLATE matrixes (only e and f have significative
 *   values), combine them. Quicker than multiplying them, for this
 *   precise case.
 */
app.common.geom.matrix.add_translate = (function app$common$geom$matrix$add_translate(var_args){
var G__47313 = arguments.length;
switch (G__47313) {
case 2:
return app.common.geom.matrix.add_translate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___47432 = arguments.length;
var i__5750__auto___47433 = (0);
while(true){
if((i__5750__auto___47433 < len__5749__auto___47432)){
args_arr__5774__auto__.push((arguments[i__5750__auto___47433]));

var G__47434 = (i__5750__auto___47433 + (1));
i__5750__auto___47433 = G__47434;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return app.common.geom.matrix.add_translate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(app.common.geom.matrix.add_translate.cljs$core$IFn$_invoke$arity$2 = (function (m1,m2){
var m1e = (m1?.e?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m1,new cljs.core.Keyword(null,"e","e",1381269198)));
var m1f = (m1?.f?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m1,new cljs.core.Keyword(null,"f","f",-1597136552)));
var m2e = (m2?.e?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m2,new cljs.core.Keyword(null,"e","e",1381269198)));
var m2f = (m2?.f?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m2,new cljs.core.Keyword(null,"f","f",-1597136552)));
return app.common.geom.matrix.pos__GT_Matrix((1),(0),(0),(1),(m1e + m2e),(m1f + m2f));
}));

(app.common.geom.matrix.add_translate.cljs$core$IFn$_invoke$arity$variadic = (function (m1,m2,others){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.geom.matrix.add_translate,app.common.geom.matrix.add_translate.cljs$core$IFn$_invoke$arity$2(m1,m2),others);
}));

/** @this {Function} */
(app.common.geom.matrix.add_translate.cljs$lang$applyTo = (function (seq47310){
var G__47311 = cljs.core.first(seq47310);
var seq47310__$1 = cljs.core.next(seq47310);
var G__47312 = cljs.core.first(seq47310__$1);
var seq47310__$2 = cljs.core.next(seq47310__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47311,G__47312,seq47310__$2);
}));

(app.common.geom.matrix.add_translate.cljs$lang$maxFixedArity = (2));

app.common.geom.matrix.substract = (function app$common$geom$matrix$substract(p__47319,p__47320){
var map__47321 = p__47319;
var map__47321__$1 = cljs.core.__destructure_map(map__47321);
var m1a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47321__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var m1b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47321__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var m1c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47321__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var m1d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47321__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var m1e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47321__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var m1f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47321__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var map__47322 = p__47320;
var map__47322__$1 = cljs.core.__destructure_map(map__47322);
var m2a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47322__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var m2b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47322__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var m2c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47322__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var m2d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47322__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var m2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47322__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var m2f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47322__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
return app.common.geom.matrix.pos__GT_Matrix((m1a - m2a),(m1b - m2b),(m1c - m2c),(m1d - m2d),(m1e - m2e),(m1f - m2f));
});
app.common.geom.matrix.base = app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0();
app.common.geom.matrix.base_QMARK_ = (function app$common$geom$matrix$base_QMARK_(v){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,app.common.geom.matrix.base);
});
app.common.geom.matrix.translate_matrix = (function app$common$geom$matrix$translate_matrix(var_args){
var G__47326 = arguments.length;
switch (G__47326) {
case 1:
return app.common.geom.matrix.translate_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.geom.matrix.translate_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.matrix.translate_matrix.cljs$core$IFn$_invoke$arity$1 = (function (pt){
app.common.data.macros.runtime_assert("expr assert: (gpt/point? pt)",(function (){
return app.common.geom.point.point_QMARK_(pt);
}));

return app.common.geom.matrix.pos__GT_Matrix((1),(0),(0),(1),(pt?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"x","x",2099068185))),(pt?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"y","y",-1757859776))));
}));

(app.common.geom.matrix.translate_matrix.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return app.common.geom.matrix.pos__GT_Matrix((1),(0),(0),(1),x,y);
}));

(app.common.geom.matrix.translate_matrix.cljs$lang$maxFixedArity = 2);

app.common.geom.matrix.translate_matrix_neg = (function app$common$geom$matrix$translate_matrix_neg(var_args){
var G__47334 = arguments.length;
switch (G__47334) {
case 1:
return app.common.geom.matrix.translate_matrix_neg.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.geom.matrix.translate_matrix_neg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.matrix.translate_matrix_neg.cljs$core$IFn$_invoke$arity$1 = (function (pt){
app.common.data.macros.runtime_assert("expr assert: (gpt/point? pt)",(function (){
return app.common.geom.point.point_QMARK_(pt);
}));

return app.common.geom.matrix.pos__GT_Matrix((1),(0),(0),(1),(- (pt?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"x","x",2099068185)))),(- (pt?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"y","y",-1757859776)))));
}));

(app.common.geom.matrix.translate_matrix_neg.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return app.common.geom.matrix.pos__GT_Matrix((1),(0),(0),(1),(- x),(- y));
}));

(app.common.geom.matrix.translate_matrix_neg.cljs$lang$maxFixedArity = 2);

app.common.geom.matrix.scale_matrix = (function app$common$geom$matrix$scale_matrix(var_args){
var G__47337 = arguments.length;
switch (G__47337) {
case 2:
return app.common.geom.matrix.scale_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.geom.matrix.scale_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.matrix.scale_matrix.cljs$core$IFn$_invoke$arity$2 = (function (pt,center){
var sx = (pt?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"x","x",2099068185)));
var sy = (pt?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"y","y",-1757859776)));
var cx = (center?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(center,new cljs.core.Keyword(null,"x","x",2099068185)));
var cy = (center?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(center,new cljs.core.Keyword(null,"y","y",-1757859776)));
return app.common.geom.matrix.pos__GT_Matrix(sx,(0),(0),sy,(cx - (cx * sx)),(cy - (cy * sy)));
}));

(app.common.geom.matrix.scale_matrix.cljs$core$IFn$_invoke$arity$1 = (function (pt){
app.common.data.macros.runtime_assert("expr assert: (gpt/point? pt)",(function (){
return app.common.geom.point.point_QMARK_(pt);
}));

return app.common.geom.matrix.pos__GT_Matrix((pt?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"x","x",2099068185))),(0),(0),(pt?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"y","y",-1757859776))),(0),(0));
}));

(app.common.geom.matrix.scale_matrix.cljs$lang$maxFixedArity = 2);

app.common.geom.matrix.rotate_matrix = (function app$common$geom$matrix$rotate_matrix(var_args){
var G__47349 = arguments.length;
switch (G__47349) {
case 2:
return app.common.geom.matrix.rotate_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.geom.matrix.rotate_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.matrix.rotate_matrix.cljs$core$IFn$_invoke$arity$2 = (function (angle,point){
var cx = (point?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.Keyword(null,"x","x",2099068185)));
var cy = (point?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.Keyword(null,"y","y",-1757859776)));
var nx = (- cx);
var ny = (- cy);
var a = app.common.math.radians(angle);
var c = app.common.math.cos(a);
var s = app.common.math.sin(a);
var ns = (- s);
var tx = (((c * nx) + (ns * ny)) + cx);
var ty = (((s * nx) + (c * ny)) + cy);
return app.common.geom.matrix.pos__GT_Matrix(c,s,ns,c,tx,ty);
}));

(app.common.geom.matrix.rotate_matrix.cljs$core$IFn$_invoke$arity$1 = (function (angle){
var a = app.common.math.radians(angle);
return app.common.geom.matrix.pos__GT_Matrix(app.common.math.cos(a),app.common.math.sin(a),(- app.common.math.sin(a)),app.common.math.cos(a),(0),(0));
}));

(app.common.geom.matrix.rotate_matrix.cljs$lang$maxFixedArity = 2);

app.common.geom.matrix.skew_matrix = (function app$common$geom$matrix$skew_matrix(var_args){
var G__47355 = arguments.length;
switch (G__47355) {
case 3:
return app.common.geom.matrix.skew_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return app.common.geom.matrix.skew_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.matrix.skew_matrix.cljs$core$IFn$_invoke$arity$3 = (function (angle_x,angle_y,point){
return app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$variadic(app.common.geom.matrix.translate_matrix.cljs$core$IFn$_invoke$arity$1(point),app.common.geom.matrix.skew_matrix.cljs$core$IFn$_invoke$arity$2(angle_x,angle_y),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.geom.matrix.translate_matrix.cljs$core$IFn$_invoke$arity$1(app.common.geom.point.negate(point))], 0));
}));

(app.common.geom.matrix.skew_matrix.cljs$core$IFn$_invoke$arity$2 = (function (angle_x,angle_y){
var m1 = app.common.math.tan(app.common.math.radians(angle_x));
var m2 = app.common.math.tan(app.common.math.radians(angle_y));
return app.common.geom.matrix.pos__GT_Matrix((1),m2,m1,(1),(0),(0));
}));

(app.common.geom.matrix.skew_matrix.cljs$lang$maxFixedArity = 3);

/**
 * Apply rotation transformation to the matrix.
 */
app.common.geom.matrix.rotate = (function app$common$geom$matrix$rotate(var_args){
var G__47358 = arguments.length;
switch (G__47358) {
case 2:
return app.common.geom.matrix.rotate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.geom.matrix.rotate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.matrix.rotate.cljs$core$IFn$_invoke$arity$2 = (function (m,angle){
return app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$2(m,app.common.geom.matrix.rotate_matrix.cljs$core$IFn$_invoke$arity$1(angle));
}));

(app.common.geom.matrix.rotate.cljs$core$IFn$_invoke$arity$3 = (function (m,angle,center){
return app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$2(m,app.common.geom.matrix.rotate_matrix.cljs$core$IFn$_invoke$arity$2(angle,center));
}));

(app.common.geom.matrix.rotate.cljs$lang$maxFixedArity = 3);

/**
 * Apply scale transformation to the matrix.
 */
app.common.geom.matrix.scale = (function app$common$geom$matrix$scale(var_args){
var G__47365 = arguments.length;
switch (G__47365) {
case 2:
return app.common.geom.matrix.scale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.geom.matrix.scale.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.matrix.scale.cljs$core$IFn$_invoke$arity$2 = (function (m,scale){
return app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$2(m,app.common.geom.matrix.scale_matrix.cljs$core$IFn$_invoke$arity$1(scale));
}));

(app.common.geom.matrix.scale.cljs$core$IFn$_invoke$arity$3 = (function (m,scale,center){
return app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$2(m,app.common.geom.matrix.scale_matrix.cljs$core$IFn$_invoke$arity$2(scale,center));
}));

(app.common.geom.matrix.scale.cljs$lang$maxFixedArity = 3);

/**
 * Apply scale transformation to the matrix.
 */
app.common.geom.matrix.scale_BANG_ = (function app$common$geom$matrix$scale_BANG_(var_args){
var G__47368 = arguments.length;
switch (G__47368) {
case 2:
return app.common.geom.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.geom.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (m,scale){
return app.common.geom.matrix.multiply_BANG_(m,app.common.geom.matrix.scale_matrix.cljs$core$IFn$_invoke$arity$1(scale));
}));

(app.common.geom.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,scale,center){
return app.common.geom.matrix.multiply_BANG_(m,app.common.geom.matrix.scale_matrix.cljs$core$IFn$_invoke$arity$2(scale,center));
}));

(app.common.geom.matrix.scale_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Apply translate transformation to the matrix.
 */
app.common.geom.matrix.translate = (function app$common$geom$matrix$translate(m,pt){
return app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$2(m,app.common.geom.matrix.translate_matrix.cljs$core$IFn$_invoke$arity$1(pt));
});
/**
 * Apply translate transformation to the matrix.
 */
app.common.geom.matrix.translate_BANG_ = (function app$common$geom$matrix$translate_BANG_(m,pt){
return app.common.geom.matrix.multiply_BANG_(m,app.common.geom.matrix.translate_matrix.cljs$core$IFn$_invoke$arity$1(pt));
});
/**
 * Apply translate transformation to the matrix.
 */
app.common.geom.matrix.skew = (function app$common$geom$matrix$skew(var_args){
var G__47370 = arguments.length;
switch (G__47370) {
case 3:
return app.common.geom.matrix.skew.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.geom.matrix.skew.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.matrix.skew.cljs$core$IFn$_invoke$arity$3 = (function (m,angle_x,angle_y){
return app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$2(m,app.common.geom.matrix.skew_matrix.cljs$core$IFn$_invoke$arity$2(angle_x,angle_y));
}));

(app.common.geom.matrix.skew.cljs$core$IFn$_invoke$arity$4 = (function (m,angle_x,angle_y,p){
return app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$2(m,app.common.geom.matrix.skew_matrix.cljs$core$IFn$_invoke$arity$3(angle_x,angle_y,p));
}));

(app.common.geom.matrix.skew.cljs$lang$maxFixedArity = 4);

app.common.geom.matrix.m_equal = (function app$common$geom$matrix$m_equal(m1,m2,threshold){
var th_eq = (function (a,b){
return (app.common.math.abs((a - b)) <= threshold);
});
var map__47371 = m1;
var map__47371__$1 = cljs.core.__destructure_map(map__47371);
var m1a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47371__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var m1b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47371__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var m1c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47371__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var m1d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47371__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var m1e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47371__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var m1f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47371__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var map__47372 = m2;
var map__47372__$1 = cljs.core.__destructure_map(map__47372);
var m2a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47372__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var m2b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47372__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var m2c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47372__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var m2d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47372__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var m2e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47372__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var m2f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47372__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
return ((th_eq(m1a,m2a)) && (((th_eq(m1b,m2b)) && (((th_eq(m1c,m2c)) && (((th_eq(m1d,m2d)) && (((th_eq(m1e,m2e)) && (th_eq(m1f,m2f)))))))))));
});
cljs.pprint.simple_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,app.common.geom.matrix.Matrix,(function (obj){
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0));
}));
app.common.geom.matrix.transform_in = (function app$common$geom$matrix$transform_in(pt,mtx){
if((((!((pt == null)))) && ((!((mtx == null)))))){
return app.common.geom.matrix.translate(app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$2(app.common.geom.matrix.translate(app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0(),pt),mtx),app.common.geom.point.negate(pt));
} else {
return mtx;
}
});
/**
 * Determinant for the affinity transform
 */
app.common.geom.matrix.determinant = (function app$common$geom$matrix$determinant(p__47380){
var map__47382 = p__47380;
var map__47382__$1 = cljs.core.__destructure_map(map__47382);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47382__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47382__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47382__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47382__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47382__$1,new cljs.core.Keyword(null,"_","_",1453416199));
return ((a * d) - (c * b));
});
/**
 * Gets the inverse of the affinity transform `mtx`
 */
app.common.geom.matrix.inverse = (function app$common$geom$matrix$inverse(p__47388){
var map__47389 = p__47388;
var map__47389__$1 = cljs.core.__destructure_map(map__47389);
var mtx = map__47389__$1;
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47389__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47389__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47389__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47389__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47389__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47389__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var det = app.common.geom.matrix.determinant(mtx);
if(app.common.math.almost_zero_QMARK_(det)){
return null;
} else {
var a_SINGLEQUOTE_ = (d / det);
var b_SINGLEQUOTE_ = ((- b) / det);
var c_SINGLEQUOTE_ = ((- c) / det);
var d_SINGLEQUOTE_ = (a / det);
var e_SINGLEQUOTE_ = (((c * f) - (d * e)) / det);
var f_SINGLEQUOTE_ = (((b * e) - (a * f)) / det);
return app.common.geom.matrix.pos__GT_Matrix(a_SINGLEQUOTE_,b_SINGLEQUOTE_,c_SINGLEQUOTE_,d_SINGLEQUOTE_,e_SINGLEQUOTE_,f_SINGLEQUOTE_);
}
});
app.common.geom.matrix.round = (function app$common$geom$matrix$round(mtx){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(mtx,new cljs.core.Keyword(null,"a","a",-2123407586),app.common.math.precision,(4)),new cljs.core.Keyword(null,"b","b",1482224470),app.common.math.precision,(4)),new cljs.core.Keyword(null,"c","c",-1763192079),app.common.math.precision,(4)),new cljs.core.Keyword(null,"d","d",1972142424),app.common.math.precision,(4)),new cljs.core.Keyword(null,"e","e",1381269198),app.common.math.precision,(4)),new cljs.core.Keyword(null,"f","f",-1597136552),app.common.math.precision,(4));
});
/**
 * Transform a point around the shape center
 */
app.common.geom.matrix.transform_point_center = (function app$common$geom$matrix$transform_point_center(point,center,matrix){
if((((!((point == null)))) && ((((!((matrix == null)))) && ((!((center == null)))))))){
return app.common.geom.point.transform(point,app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$variadic(app.common.geom.matrix.translate_matrix.cljs$core$IFn$_invoke$arity$1(center),matrix,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.geom.matrix.translate_matrix.cljs$core$IFn$_invoke$arity$1(app.common.geom.point.negate(center))], 0)));
} else {
return point;
}
});
app.common.geom.matrix.move_QMARK_ = (function app$common$geom$matrix$move_QMARK_(m){
return ((app.common.math.almost_zero_QMARK_(((m?.a?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"a","a",-2123407586))) - (1)))) && (((app.common.math.almost_zero_QMARK_((m?.b?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"b","b",1482224470))))) && (((app.common.math.almost_zero_QMARK_((m?.c?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"c","c",-1763192079))))) && (app.common.math.almost_zero_QMARK_(((m?.d?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"d","d",1972142424))) - (1)))))))));
});
cljs.pprint.simple_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,app.common.geom.matrix.Matrix,(function (obj){
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0));
}));
app.common.transit.add_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"matrix",new cljs.core.Keyword(null,"class","class",-2030961996),app.common.geom.matrix.Matrix,new cljs.core.Keyword(null,"wfn","wfn",-1437298400),(function (p1__47397_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__47397_SHARP_);
}),new cljs.core.Keyword(null,"rfn","rfn",-990883444),(function (m){
return app.common.geom.matrix.pos__GT_Matrix(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"a","a",-2123407586)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"b","b",1482224470)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"c","c",-1763192079)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"d","d",1972142424)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"e","e",1381269198)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"f","f",-1597136552)));
})], null)], 0));

//# sourceMappingURL=app.common.geom.matrix.js.map
