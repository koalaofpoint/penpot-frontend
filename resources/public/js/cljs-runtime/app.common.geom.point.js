import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.exceptions.js";
import "./app.common.math.js";
import "./app.common.record.js";
import "./app.common.schema.js";
import "./app.common.schema.generators.js";
import "./app.common.transit.js";
import "./cljs.pprint.js";
import "./cuerdas.core.js";
goog.provide('app.common.geom.point');

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
app.common.geom.point.Point = (function (x,y,$meta,$extmap,$hash){
this.x = x;
this.y = y;
this.$meta = $meta;
this.$extmap = $extmap;
this.$hash = $hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139280;
});
(app.common.geom.point.Point.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this$,f__45940__auto__,init__45941__auto__){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__45942__auto__,p__46314){
var vec__46316 = p__46314;
var key_46248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46316,(0),null);
var v__45943__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46316,(1),null);
return (f__45940__auto__.cljs$core$IFn$_invoke$arity$3 ? f__45940__auto__.cljs$core$IFn$_invoke$arity$3(ret__45942__auto__,key_46248,v__45943__auto__) : f__45940__auto__.call(null,ret__45942__auto__,key_46248,v__45943__auto__));
}),init__45941__auto__,this$__$1);
}));

(app.common.geom.point.Point.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((this$__$1 === other)) || ((((!((other == null)))) && ((((this$__$1.constructor === other.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.x,other.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.y,other.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.$extmap,other.$extmap)))))))))));
}));

(app.common.geom.point.Point.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__45882__auto__ = this$__$1.$hash;
if((!((h__45882__auto__ == null)))){
return h__45882__auto__;
} else {
var h__45882__auto____$1 = (function (coll__45932__auto__){
return (74812275 ^ cljs.core.hash_unordered_coll(coll__45932__auto__));
})(this$__$1);
(this$__$1.$hash = h__45882__auto____$1);

return h__45882__auto____$1;
}
}));

(app.common.geom.point.Point.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,val_46249){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(val_46249)){
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(val_46249,(0)),cljs.core._nth(val_46249,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,val_46249);
}
}));

(app.common.geom.point.Point.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (2 + cljs.core.count(this$__$1.$extmap));
}));

(app.common.geom.point.Point.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),this$__$1.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),this$__$1.y,null))], null),this$__$1.$extmap));
}));

(app.common.geom.point.Point.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.$meta;
}));

(app.common.geom.point.Point.prototype.app$common$record$ICustomRecordEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.geom.point.Point.prototype.app$common$record$ICustomRecordEquiv$_equiv_with_exceptions$arity$3 = (function (this$,other,exceptions){
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
var and__5023__auto____$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.x,other.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.y,other.y)) && ((cljs.core.count(this$__$1.$extmap) === cljs.core.count(other.$extmap))))));
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

(app.common.geom.point.Point.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new app.common.geom.point.Point(this$__$1.x,this$__$1.y,this$__$1.$meta,this$__$1.$extmap,this$__$1.$hash));
}));

(app.common.geom.point.Point.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer__46013__auto__,opts__46014__auto__){
var self__ = this;
var this$__$1 = this;
var pr_pair__46015__auto__ = (function (keyval__46017__auto__){
return cljs.core.pr_sequential_writer(writer__46013__auto__,cljs.core.pr_writer,""," ","",opts__46014__auto__,keyval__46017__auto__);
});
return cljs.core.pr_sequential_writer(writer__46013__auto__,pr_pair__46015__auto__,"#app.common.geom.point.Point{",", ","}",opts__46014__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),this$__$1.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),this$__$1.y],null))], null),this$__$1.$extmap));
}));

(app.common.geom.point.Point.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.RecordIter((0),this$__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(this$__$1.$extmap)?cljs.core._iterator(this$__$1.$extmap):cljs.core.nil_iter())));
}));

(app.common.geom.point.Point.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (this$,key_46248,val_46249){
var self__ = this;
var this$__$1 = this;
var key__45937__auto__ = (((key_46248 instanceof cljs.core.Keyword))?key_46248.fqn:key_46248);
var G__46348_46480 = key_46248;
var G__46348_46481__$1 = (((G__46348_46480 instanceof cljs.core.Keyword))?G__46348_46480.fqn:null);
switch (G__46348_46481__$1) {
case "x":
(this$__$1.x = val_46249);

break;
case "y":
(this$__$1.y = val_46249);

break;
default:
(this$__$1.$extmap = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1.$extmap,key_46248,val_46249));

}

return this$__$1;
}));

(app.common.geom.point.Point.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,val_46249){
var self__ = this;
var this$__$1 = this;
return (new app.common.geom.point.Point(this$__$1.x,this$__$1.y,val_46249,this$__$1.$extmap,this$__$1.$hash));
}));

(app.common.geom.point.Point.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,key_46248){
var self__ = this;
var this$__$1 = this;
var G__46354 = key_46248;
var G__46354__$1 = (((G__46354 instanceof cljs.core.Keyword))?G__46354.fqn:null);
switch (G__46354__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(this$__$1.$extmap,key_46248);

}
}));

(app.common.geom.point.Point.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,key_46248,val_46249){
var self__ = this;
var this$__$1 = this;
var G__46356 = key_46248;
var G__46356__$1 = (((G__46356 instanceof cljs.core.Keyword))?G__46356.fqn:null);
switch (G__46356__$1) {
case "x":
return (new app.common.geom.point.Point(val_46249,this$__$1.y,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "y":
return (new app.common.geom.point.Point(this$__$1.x,val_46249,this$__$1.$meta,this$__$1.$extmap,null));

break;
default:
return (new app.common.geom.point.Point(this$__$1.x,this$__$1.y,this$__$1.$meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1.$extmap,key_46248,val_46249),null));

}
}));

(app.common.geom.point.Point.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,key_46248){
var self__ = this;
var this$__$1 = this;
var G__46360 = key_46248;
var G__46360__$1 = (((G__46360 instanceof cljs.core.Keyword))?G__46360.fqn:null);
switch (G__46360__$1) {
case "x":
case "y":
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,key_46248,null);

break;
default:
var extmap1__45938__auto__ = this$__$1.$extmap;
var extmap2__45939__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(extmap1__45938__auto__,key_46248);
if((extmap1__45938__auto__ === extmap2__45939__auto__)){
return this$__$1;
} else {
return (new app.common.geom.point.Point(this$__$1.x,this$__$1.y,this$__$1.$meta,cljs.core.not_empty(extmap2__45939__auto__),null));
}

}
}));

(app.common.geom.point.Point.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k__45934__auto__){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k__45934__auto__,null);
}));

(app.common.geom.point.Point.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,key_46248,else__45935__auto__){
var self__ = this;
var this$__$1 = this;
var G__46366 = key_46248;
var G__46366__$1 = (((G__46366 instanceof cljs.core.Keyword))?G__46366.fqn:null);
switch (G__46366__$1) {
case "x":
return this$__$1.x;

break;
case "y":
return this$__$1.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(this$__$1.$extmap,key_46248,else__45935__auto__);

}
}));

(app.common.geom.point.Point.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"$meta","$meta",427370151,null),new cljs.core.Symbol(null,"$extmap","$extmap",962221828,null),new cljs.core.Symbol(null,"$hash","$hash",2001710882,null)], null);
}));

(app.common.geom.point.Point.cljs$lang$type = true);

(app.common.geom.point.Point.cljs$lang$ctorStr = "app.common.geom.point/Point");

(app.common.geom.point.Point.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.common.geom.point/Point");
}));

/**
 * Positional factory function for app.common.geom.point/Point.
 */
app.common.geom.point.__GT_Point = (function app$common$geom$point$__GT_Point(x,y,$meta,$extmap,$hash){
return (new app.common.geom.point.Point(x,y,$meta,$extmap,$hash));
});


app.common.geom.point.pos__GT_Point = (function app$common$geom$point$pos__GT_Point(x,y){
return (new app.common.geom.point.Point(x,y,null,null,null));
});

app.common.geom.point.map__GT_Point = (function app$common$geom$point$map__GT_Point(param_46240){
var exclude__46023__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null);
var extmap__46024__auto__ = cljs.core.reduce_kv((function (acc__46025__auto__,k__46026__auto__,v__46027__auto__){
if(cljs.core.contains_QMARK_(exclude__46023__auto__,k__46026__auto__)){
return acc__46025__auto__;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__46025__auto__,k__46026__auto__,v__46027__auto__);
}
}),cljs.core.PersistentArrayMap.EMPTY,param_46240);
return (new app.common.geom.point.Point(cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_46240,new cljs.core.Keyword(null,"x","x",2099068185)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_46240,new cljs.core.Keyword(null,"y","y",-1757859776)),null,cljs.core.not_empty(extmap__46024__auto__),null));
});

/**
 * Return true if `v` is Point instance.
 */
app.common.geom.point.point_QMARK_ = (function app$common$geom$point$point_QMARK_(v){
return (v instanceof app.common.geom.point.Point);
});
app.common.geom.point.schema_COLON_point_attrs = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"PointAttrs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null)], null);
app.common.geom.point.valid_point_attrs_QMARK_ = app.common.schema.validator(app.common.geom.point.schema_COLON_point_attrs);
app.common.geom.point.valid_point_QMARK_ = app.common.schema.validator(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.geom.point.point_QMARK_], null),app.common.geom.point.schema_COLON_point_attrs], null));
app.common.geom.point.decode_point = (function app$common$geom$point$decode_point(p){
if(cljs.core.map_QMARK_(p)){
return app.common.geom.point.map__GT_Point(p);
} else {
if(typeof p === 'string'){
var vec__46397 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.parse_double,cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(p,/,/));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46397,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46397,(1),null);
return app.common.geom.point.pos__GT_Point(x,y);
} else {
return p;
}
}
});
app.common.geom.point.point__GT_str = (function app$common$geom$point$point__GT_str(p){
if(app.common.geom.point.point_QMARK_(p)){
return ""+((p?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"x","x",2099068185))) ?? "")+","+((p?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"y","y",-1757859776))) ?? "");
} else {
return p;
}
});
app.common.geom.point.point__GT_json = (function app$common$geom$point$point__GT_json(p){
if(app.common.geom.point.point_QMARK_(p)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p);
} else {
return p;
}
});
app.common.geom.point.schema_COLON_point = app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.geom.point","point","app.common.geom.point/point",1811057644),new cljs.core.Keyword(null,"pred","pred",1927423397),app.common.geom.point.valid_point_QMARK_,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("decode","string","decode/string",-108229948),new cljs.core.Keyword("decode","json","decode/json",468276044),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("app.common.schema.openapi","format","app.common.schema.openapi/format",1235016623),new cljs.core.Keyword("encode","json","encode/json",303857460),new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),new cljs.core.Keyword("gen","gen","gen/gen",142743606),new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.Keyword("encode","string","encode/string",-137314532)],["Point",app.common.geom.point.decode_point,app.common.geom.point.decode_point,"point","point",app.common.geom.point.point__GT_json,"string",app.common.schema.generators.fmap((function (p1__46412_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.common.geom.point.pos__GT_Point,p1__46412_SHARP_);
}),app.common.schema.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.schema.generators.small_int(),app.common.schema.generators.small_int()], 0))),"expected a valid point",app.common.geom.point.point__GT_str])], null));
app.common.geom.point.point_like_QMARK_ = (function app$common$geom$point$point_like_QMARK_(p__46414){
var map__46417 = p__46414;
var map__46417__$1 = cljs.core.__destructure_map(map__46417);
var v = map__46417__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46417__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46417__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var and__5023__auto__ = cljs.core.map_QMARK_(v);
if(and__5023__auto__){
var and__5023__auto____$1 = app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__5023__auto____$1)){
return app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(y);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});
/**
 * Create a Point instance.
 */
app.common.geom.point.point = (function app$common$geom$point$point(var_args){
var G__46421 = arguments.length;
switch (G__46421) {
case 0:
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.common.geom.point.pos__GT_Point((0),(0));
}));

(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1 = (function (v){
if(app.common.geom.point.point_QMARK_(v)){
return v;
} else {
if(typeof v === 'number'){
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(v,v);
} else {
if(cljs.core.truth_(app.common.geom.point.point_like_QMARK_(v))){
return app.common.geom.point.pos__GT_Point(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("invalid arguments (on pointer constructor)",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hint","hint",439639918),"invalid arguments (on pointer constructor)",new cljs.core.Keyword(null,"value","value",305978217),v], null),null], 0)),null);

}
}
}
}));

(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return app.common.geom.point.pos__GT_Point(x,y);
}));

(app.common.geom.point.point.cljs$lang$maxFixedArity = 2);

app.common.geom.point.close_QMARK_ = (function app$common$geom$point$close_QMARK_(p1,p2){
var and__5023__auto__ = app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2((p1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"x","x",2099068185))),(p2?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"x","x",2099068185))));
if(cljs.core.truth_(and__5023__auto__)){
return app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2((p1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"y","y",-1757859776))),(p2?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"y","y",-1757859776))));
} else {
return and__5023__auto__;
}
});
app.common.geom.point.angle__GT_point = (function app$common$geom$point$angle__GT_point(pt,angle,distance){
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(((pt?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"x","x",2099068185))) + (distance * app.common.math.cos(angle))),((pt?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"y","y",-1757859776))) - (distance * app.common.math.sin(angle))));
});
/**
 * Returns the addition of the supplied value to both
 *   coordinates of the point as a new point.
 */
app.common.geom.point.add = (function app$common$geom$point$add(p1,p2){
app.common.data.macros.runtime_assert("arguments should be point instance",(function (){
return ((app.common.geom.point.point_QMARK_(p1)) && (app.common.geom.point.point_QMARK_(p2)));
}));

return app.common.geom.point.pos__GT_Point(((p1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"x","x",2099068185))) + (p2?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"x","x",2099068185)))),((p1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"y","y",-1757859776))) + (p2?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"y","y",-1757859776)))));
});
/**
 * Returns the subtraction of the supplied value to both
 *   coordinates of the point as a new point.
 */
app.common.geom.point.subtract = (function app$common$geom$point$subtract(p1,p2){
app.common.data.macros.runtime_assert("arguments should be pointer instance",(function (){
return ((app.common.geom.point.point_QMARK_(p1)) && (app.common.geom.point.point_QMARK_(p2)));
}));

return app.common.geom.point.pos__GT_Point(((p1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"x","x",2099068185))) - (p2?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"x","x",2099068185)))),((p1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"y","y",-1757859776))) - (p2?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"y","y",-1757859776)))));
});
/**
 * Returns the subtraction of the supplied value to both
 *   coordinates of the point as a new point.
 */
app.common.geom.point.multiply = (function app$common$geom$point$multiply(p1,p2){
if(((app.common.geom.point.point_QMARK_(p1)) && (app.common.geom.point.point_QMARK_(p2)))){
} else {
throw (new Error(["Assert failed: ","arguments should be pointer instance","\n","(and (point? p1) (point? p2))"].join('')));
}

return app.common.geom.point.pos__GT_Point(((p1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"x","x",2099068185))) * (p2?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"x","x",2099068185)))),((p1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"y","y",-1757859776))) * (p2?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"y","y",-1757859776)))));
});
app.common.geom.point.divide = (function app$common$geom$point$divide(p1,p2){
if(((app.common.geom.point.point_QMARK_(p1)) && (app.common.geom.point.point_QMARK_(p2)))){
} else {
throw (new Error(["Assert failed: ","arguments should be pointer instance","\n","(and (point? p1) (point? p2))"].join('')));
}

return app.common.geom.point.pos__GT_Point(((p1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"x","x",2099068185))) / (p2?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"x","x",2099068185)))),((p1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"y","y",-1757859776))) / (p2?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"y","y",-1757859776)))));
});
app.common.geom.point.min = (function app$common$geom$point$min(var_args){
var G__46438 = arguments.length;
switch (G__46438) {
case 0:
return app.common.geom.point.min.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.common.geom.point.min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.geom.point.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.point.min.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(app.common.geom.point.min.cljs$core$IFn$_invoke$arity$1 = (function (p1){
return p1;
}));

(app.common.geom.point.min.cljs$core$IFn$_invoke$arity$2 = (function (p1,p2){
if((p1 == null)){
return p2;
} else {
if((p2 == null)){
return p1;
} else {
return app.common.geom.point.pos__GT_Point((function (){var x__5113__auto__ = (p1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"x","x",2099068185)));
var y__5114__auto__ = (p2?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"x","x",2099068185)));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})(),(function (){var x__5113__auto__ = (p1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"y","y",-1757859776)));
var y__5114__auto__ = (p2?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"y","y",-1757859776)));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})());

}
}
}));

(app.common.geom.point.min.cljs$lang$maxFixedArity = 2);

app.common.geom.point.max = (function app$common$geom$point$max(var_args){
var G__46445 = arguments.length;
switch (G__46445) {
case 0:
return app.common.geom.point.max.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.common.geom.point.max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.geom.point.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.point.max.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(app.common.geom.point.max.cljs$core$IFn$_invoke$arity$1 = (function (p1){
return p1;
}));

(app.common.geom.point.max.cljs$core$IFn$_invoke$arity$2 = (function (p1,p2){
if((p1 == null)){
return p2;
} else {
if((p2 == null)){
return p1;
} else {
return app.common.geom.point.pos__GT_Point((function (){var x__5110__auto__ = (p1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"x","x",2099068185)));
var y__5111__auto__ = (p2?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"x","x",2099068185)));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})(),(function (){var x__5110__auto__ = (p1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"y","y",-1757859776)));
var y__5111__auto__ = (p2?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"y","y",-1757859776)));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})());

}
}
}));

(app.common.geom.point.max.cljs$lang$maxFixedArity = 2);

app.common.geom.point.inverse = (function app$common$geom$point$inverse(pt){
if(app.common.geom.point.point_QMARK_(pt)){
} else {
throw (new Error(["Assert failed: ","point instance expected","\n","(point? pt)"].join('')));
}

return app.common.geom.point.pos__GT_Point((1.0 / (pt?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"x","x",2099068185)))),(1.0 / (pt?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"y","y",-1757859776)))));
});
app.common.geom.point.negate = (function app$common$geom$point$negate(pt){
if(app.common.geom.point.point_QMARK_(pt)){
} else {
throw (new Error(["Assert failed: ","point instance expected","\n","(point? pt)"].join('')));
}

return app.common.geom.point.pos__GT_Point((- (pt?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"x","x",2099068185)))),(- (pt?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"y","y",-1757859776)))));
});
/**
 * Calculate the distance between two points.
 */
app.common.geom.point.distance = (function app$common$geom$point$distance(p1,p2){
if(((app.common.geom.point.point_QMARK_(p1)) && (app.common.geom.point.point_QMARK_(p2)))){
} else {
throw (new Error(["Assert failed: ","arguments should be point instances","\n","(and (point? p1) (point? p2))"].join('')));
}

var dx = ((p1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"x","x",2099068185))) - (p2?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"x","x",2099068185))));
var dy = ((p1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"y","y",-1757859776))) - (p2?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"y","y",-1757859776))));
return app.common.math.hypot(dx,dy);
});
/**
 * Calculate the distance, separated x and y.
 */
app.common.geom.point.distance_vector = (function app$common$geom$point$distance_vector(p1,p2){
if(((app.common.geom.point.point_QMARK_(p1)) && (app.common.geom.point.point_QMARK_(p2)))){
} else {
throw (new Error(["Assert failed: ","arguments should be point instances","\n","(and (point? p1) (point? p2))"].join('')));
}

var dx = ((p1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"x","x",2099068185))) - (p2?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"x","x",2099068185))));
var dy = ((p1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"y","y",-1757859776))) - (p2?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"y","y",-1757859776))));
return app.common.geom.point.pos__GT_Point(app.common.math.abs(dx),app.common.math.abs(dy));
});
app.common.geom.point.length = (function app$common$geom$point$length(pt){
if(app.common.geom.point.point_QMARK_(pt)){
} else {
throw (new Error(["Assert failed: ","point instance expected","\n","(point? pt)"].join('')));
}

var x = (pt?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (pt?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"y","y",-1757859776)));
return app.common.math.hypot(x,y);
});
/**
 * Returns the smaller angle between two vectors.
 *   If the second vector is not provided, the angle
 *   will be measured from x-axis.
 */
app.common.geom.point.angle = (function app$common$geom$point$angle(var_args){
var G__46457 = arguments.length;
switch (G__46457) {
case 1:
return app.common.geom.point.angle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.geom.point.angle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.point.angle.cljs$core$IFn$_invoke$arity$1 = (function (pt){
if(app.common.geom.point.point_QMARK_(pt)){
} else {
throw (new Error(["Assert failed: ","point instance expected","\n","(point? pt)"].join('')));
}

var x = (pt?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (pt?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"y","y",-1757859776)));
return app.common.math.degrees(app.common.math.atan2(y,x));
}));

(app.common.geom.point.angle.cljs$core$IFn$_invoke$arity$2 = (function (pt,center){
if(app.common.geom.point.point_QMARK_(pt)){
} else {
throw (new Error(["Assert failed: ","point instance expected","\n","(point? pt)"].join('')));
}

if(app.common.geom.point.point_QMARK_(center)){
} else {
throw (new Error(["Assert failed: ","point instance expected","\n","(point? center)"].join('')));
}

var x = ((pt?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"x","x",2099068185))) - (center?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(center,new cljs.core.Keyword(null,"x","x",2099068185))));
var y = ((pt?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"y","y",-1757859776))) - (center?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(center,new cljs.core.Keyword(null,"y","y",-1757859776))));
return app.common.math.degrees(app.common.math.atan2(y,x));
}));

(app.common.geom.point.angle.cljs$lang$maxFixedArity = 2);

/**
 * Consider point as vector and calculate
 *   the angle between two vectors.
 */
app.common.geom.point.angle_with_other = (function app$common$geom$point$angle_with_other(p1,p2){
if(((app.common.geom.point.point_QMARK_(p1)) && (app.common.geom.point.point_QMARK_(p2)))){
} else {
throw (new Error(["Assert failed: ","arguments should be point instances","\n","(and (point? p1) (point? p2))"].join('')));
}

var length_p1 = app.common.geom.point.length(p1);
var length_p2 = app.common.geom.point.length(p2);
if(((app.common.math.almost_zero_QMARK_(length_p1)) || (app.common.math.almost_zero_QMARK_(length_p2)))){
return (0);
} else {
var a = ((((p1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"x","x",2099068185))) * (p2?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"x","x",2099068185)))) + ((p1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"y","y",-1757859776))) * (p2?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"y","y",-1757859776))))) / (length_p1 * length_p2));
var a__$1 = app.common.math.acos((((a < (-1)))?(-1):(((a > (1)))?(1):a)));
var d = app.common.math.degrees(a__$1);
if(cljs.core.truth_(app.common.math.nan_QMARK_(d))){
return (0);
} else {
return d;
}
}
});
app.common.geom.point.angle_sign = (function app$common$geom$point$angle_sign(p1,p2){
if((((p1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"y","y",-1757859776))) * (p2?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"x","x",2099068185)))) > ((p1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"x","x",2099068185))) * (p2?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"y","y",-1757859776)))))){
return (-1);
} else {
return (1);
}
});
app.common.geom.point.signed_angle_with_other = (function app$common$geom$point$signed_angle_with_other(v1,v2){
return (app.common.geom.point.angle_sign(v1,v2) * app.common.geom.point.angle_with_other(v1,v2));
});
/**
 * Update the angle of the point.
 */
app.common.geom.point.update_angle = (function app$common$geom$point$update_angle(p,angle){
if(typeof angle === 'number'){
} else {
throw (new Error(["Assert failed: ","expected number","\n","(number? angle)"].join('')));
}

var len = app.common.geom.point.length(p);
var angle__$1 = app.common.math.radians(angle);
return app.common.geom.point.pos__GT_Point((app.common.math.cos(angle__$1) * len),(app.common.math.sin(angle__$1) * len));
});
/**
 * Return the quadrant of the angle of the point.
 */
app.common.geom.point.quadrant = (function app$common$geom$point$quadrant(p){
if(app.common.geom.point.point_QMARK_(p)){
} else {
throw (new Error(["Assert failed: ","expected point instance","\n","(point? p)"].join('')));
}

var x = (p?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (p?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"y","y",-1757859776)));
if((x >= (0))){
if((y >= (0))){
return (1);
} else {
return (4);
}
} else {
if((y >= (0))){
return (2);
} else {
return (3);
}
}
});
/**
 * Round the coordinates of the point to a precision
 */
app.common.geom.point.round = (function app$common$geom$point$round(var_args){
var G__46465 = arguments.length;
switch (G__46465) {
case 1:
return app.common.geom.point.round.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.geom.point.round.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.point.round.cljs$core$IFn$_invoke$arity$1 = (function (point){
return app.common.geom.point.round.cljs$core$IFn$_invoke$arity$2(point,(0));
}));

(app.common.geom.point.round.cljs$core$IFn$_invoke$arity$2 = (function (pt,decimals){
if(app.common.geom.point.point_QMARK_(pt)){
} else {
throw (new Error(["Assert failed: ","expected point instance","\n","(point? pt)"].join('')));
}

if(typeof decimals === 'number'){
} else {
throw (new Error(["Assert failed: ","expected number instance","\n","(number? decimals)"].join('')));
}

return app.common.geom.point.pos__GT_Point(app.common.math.precision((pt?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"x","x",2099068185))),decimals),app.common.math.precision((pt?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"y","y",-1757859776))),decimals));
}));

(app.common.geom.point.round.cljs$lang$maxFixedArity = 2);

/**
 * Round the coordinates to the closest half-point
 */
app.common.geom.point.round_step = (function app$common$geom$point$round_step(pt,step){
if(app.common.geom.point.point_QMARK_(pt)){
} else {
throw (new Error(["Assert failed: ","expected point instance","\n","(point? pt)"].join('')));
}

return app.common.geom.point.pos__GT_Point(app.common.math.round.cljs$core$IFn$_invoke$arity$2((pt?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"x","x",2099068185))),step),app.common.math.round.cljs$core$IFn$_invoke$arity$2((pt?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"y","y",-1757859776))),step));
});
/**
 * Transform a point applying a matrix transformation.
 */
app.common.geom.point.transform = (function app$common$geom$point$transform(p,m){
if(app.common.geom.point.point_QMARK_(p)){
if((!((m == null)))){
var x = (p?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (p?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"y","y",-1757859776)));
var a = (m?.a?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"a","a",-2123407586)));
var b = (m?.b?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"b","b",1482224470)));
var c = (m?.c?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"c","c",-1763192079)));
var d = (m?.d?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"d","d",1972142424)));
var e = (m?.e?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"e","e",1381269198)));
var f = (m?.f?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"f","f",-1597136552)));
return app.common.geom.point.pos__GT_Point((((x * a) + (y * c)) + e),(((x * b) + (y * d)) + f));
} else {
return p;
}
} else {
return null;
}
});
app.common.geom.point.transform_BANG_ = (function app$common$geom$point$transform_BANG_(p,m){
app.common.data.macros.runtime_assert("expected valid rect and matrix instances",(function (){
return (((!((p == null)))) && ((!((m == null)))));
}));

var x = (p?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (p?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"y","y",-1757859776)));
var a = (m?.a?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"a","a",-2123407586)));
var b = (m?.b?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"b","b",1482224470)));
var c = (m?.c?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"c","c",-1763192079)));
var d = (m?.d?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"d","d",1972142424)));
var e = (m?.e?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"e","e",1381269198)));
var f = (m?.f?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"f","f",-1597136552)));
(p.x = (((x * a) + (y * c)) + e));

(p.y = (((x * b) + (y * d)) + f));

return p;
});
/**
 * Returns a result of transform an identity point with the provided
 *   matrix instance
 */
app.common.geom.point.matrix__GT_point = (function app$common$geom$point$matrix__GT_point(m){
var e = (m?.e?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"e","e",1381269198)));
var f = (m?.f?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"f","f",-1597136552)));
return app.common.geom.point.pos__GT_Point(e,f);
});
app.common.geom.point.to_vec = (function app$common$geom$point$to_vec(p1,p2){
return app.common.geom.point.subtract(p2,p1);
});
app.common.geom.point.scale = (function app$common$geom$point$scale(p,scalar){
return app.common.geom.point.pos__GT_Point(((p?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"x","x",2099068185))) * scalar),((p?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"y","y",-1757859776))) * scalar));
});
app.common.geom.point.dot = (function app$common$geom$point$dot(p1,p2){
return (((p1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"x","x",2099068185))) * (p2?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"x","x",2099068185)))) + ((p1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"y","y",-1757859776))) * (p2?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"y","y",-1757859776)))));
});
app.common.geom.point.unit = (function app$common$geom$point$unit(p1){
var p_length = app.common.geom.point.length(p1);
if(app.common.math.almost_zero_QMARK_(p_length)){
return app.common.geom.point.pos__GT_Point((0),(0));
} else {
return app.common.geom.point.pos__GT_Point(((p1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"x","x",2099068185))) / p_length),((p1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"y","y",-1757859776))) / p_length));
}
});
app.common.geom.point.perpendicular = (function app$common$geom$point$perpendicular(pt){
return app.common.geom.point.pos__GT_Point((- (pt?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"y","y",-1757859776)))),(pt?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"x","x",2099068185))));
});
/**
 * V1 perpendicular projection on vector V2
 */
app.common.geom.point.project = (function app$common$geom$point$project(v1,v2){
var v2_unit = app.common.geom.point.unit(v2);
var scalar_proj = app.common.geom.point.dot(v1,v2_unit);
return app.common.geom.point.scale(v2_unit,scalar_proj);
});
/**
 * Centroid of a group of points
 */
app.common.geom.point.center_points = (function app$common$geom$point$center_points(points){
var k = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(cljs.core.count(points));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__46468_SHARP_,p2__46469_SHARP_){
return app.common.geom.point.add(p1__46468_SHARP_,app.common.geom.point.divide(p2__46469_SHARP_,k));
}),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$0(),points);
});
/**
 * Returns the normal unit vector on the left side
 */
app.common.geom.point.normal_left = (function app$common$geom$point$normal_left(p__46470){
var map__46471 = p__46470;
var map__46471__$1 = cljs.core.__destructure_map(map__46471);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46471__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46471__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return app.common.geom.point.unit(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((- y),x));
});
/**
 * Returns the normal unit vector on the right side
 */
app.common.geom.point.normal_right = (function app$common$geom$point$normal_right(p__46473){
var map__46474 = p__46473;
var map__46474__$1 = cljs.core.__destructure_map(map__46474);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46474__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46474__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return app.common.geom.point.unit(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(y,(- x)));
});
/**
 * Returns the distance from a point to a line defined by two points
 */
app.common.geom.point.point_line_distance = (function app$common$geom$point$point_line_distance(point,line_point1,line_point2){
var x0 = (point?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.Keyword(null,"x","x",2099068185)));
var y0 = (point?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.Keyword(null,"y","y",-1757859776)));
var x1 = (line_point1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(line_point1,new cljs.core.Keyword(null,"x","x",2099068185)));
var y1 = (line_point1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(line_point1,new cljs.core.Keyword(null,"y","y",-1757859776)));
var x2 = (line_point2?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(line_point2,new cljs.core.Keyword(null,"x","x",2099068185)));
var y2 = (line_point2?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(line_point2,new cljs.core.Keyword(null,"y","y",-1757859776)));
return (app.common.math.abs(((((x0 * (y2 - y1)) + (- (y0 * (x2 - x1)))) + (x2 * y1)) + (- (y2 * x1)))) / app.common.geom.point.distance(line_point2,line_point1));
});
app.common.geom.point.almost_zero_QMARK_ = (function app$common$geom$point$almost_zero_QMARK_(p){
if(app.common.geom.point.point_QMARK_(p)){
} else {
throw (new Error(["Assert failed: ","point instance expected","\n","(point? p)"].join('')));
}

return ((app.common.math.almost_zero_QMARK_((p?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"x","x",2099068185))))) && (app.common.math.almost_zero_QMARK_((p?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"y","y",-1757859776))))));
});
app.common.geom.point.zero_QMARK_ = (function app$common$geom$point$zero_QMARK_(p){
var x = (p?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (p?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"y","y",-1757859776)));
return ((((0) === x)) && (((0) === y)));
});
/**
 * Calculates a linear interpolation between two points given a tvalue
 */
app.common.geom.point.lerp = (function app$common$geom$point$lerp(p1,p2,t){
var x = app.common.math.lerp((p1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"x","x",2099068185))),(p2?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"x","x",2099068185))),t);
var y = app.common.math.lerp((p1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"y","y",-1757859776))),(p2?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"y","y",-1757859776))),t);
return app.common.geom.point.pos__GT_Point(x,y);
});
/**
 * Rotates the point around center with an angle
 */
app.common.geom.point.rotate = (function app$common$geom$point$rotate(p,c,angle){
if(app.common.geom.point.point_QMARK_(p)){
} else {
throw (new Error(["Assert failed: ","point instance expected","\n","(point? p)"].join('')));
}

if(app.common.geom.point.point_QMARK_(c)){
} else {
throw (new Error(["Assert failed: ","point instance expected","\n","(point? c)"].join('')));
}

var angle__$1 = app.common.math.radians(angle);
var px = (p?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"x","x",2099068185)));
var py = (p?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"y","y",-1757859776)));
var cx = (c?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"x","x",2099068185)));
var cy = (c?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"y","y",-1757859776)));
var sa = app.common.math.sin(angle__$1);
var ca = app.common.math.cos(angle__$1);
var x = (((ca * (px - cx)) + ((sa * (py - cy)) * (-1))) + cx);
var y = (((sa * (px - cx)) + (ca * (py - cy))) + cy);
return app.common.geom.point.pos__GT_Point(x,y);
});
/**
 * Moves a point in the vector that creates with center with a scale
 *   value
 */
app.common.geom.point.scale_from = (function app$common$geom$point$scale_from(point,center,value){
return app.common.geom.point.add(point,app.common.geom.point.scale(app.common.geom.point.unit(app.common.geom.point.to_vec(center,point)),value));
});
/**
 * Remove zero values from either coordinate
 */
app.common.geom.point.no_zeros = (function app$common$geom$point$no_zeros(p){
var x = (p?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (p?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"y","y",-1757859776)));
return app.common.geom.point.pos__GT_Point(((app.common.math.almost_zero_QMARK_(x))?0.001:x),((app.common.math.almost_zero_QMARK_(y))?0.001:y));
});
/**
 * Creates a new vector with the same direction but different length
 */
app.common.geom.point.resize = (function app$common$geom$point$resize(vector,new_length){
var old_length = app.common.geom.point.length(vector);
return app.common.geom.point.scale(vector,(new_length / old_length));
});
app.common.geom.point.abs = (function app$common$geom$point$abs(point){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(point,new cljs.core.Keyword(null,"x","x",2099068185),app.common.math.abs),new cljs.core.Keyword(null,"y","y",-1757859776),app.common.math.abs);
});
cljs.pprint.simple_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,app.common.geom.point.Point,(function (obj){
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0));
}));
app.common.transit.add_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"point",new cljs.core.Keyword(null,"class","class",-2030961996),app.common.geom.point.Point,new cljs.core.Keyword(null,"wfn","wfn",-1437298400),(function (p1__46477_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__46477_SHARP_);
}),new cljs.core.Keyword(null,"rfn","rfn",-990883444),app.common.geom.point.map__GT_Point], null)], 0));

//# sourceMappingURL=app.common.geom.point.js.map
