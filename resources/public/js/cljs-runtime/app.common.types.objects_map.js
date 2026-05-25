import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.transit.js";
import "./clojure.core.protocols.js";
goog.provide('app.common.types.objects_map');

/**
 * @interface
 */
app.common.types.objects_map.IObjectsMap = function(){};

var app$common$types$objects_map$IObjectsMap$compact$dyn_82730 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (app.common.types.objects_map.compact[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (app.common.types.objects_map.compact["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObjectsMap.compact",this$);
}
}
});
app.common.types.objects_map.compact = (function app$common$types$objects_map$compact(this$){
if((((!((this$ == null)))) && ((!((this$.app$common$types$objects_map$IObjectsMap$compact$arity$1 == null)))))){
return this$.app$common$types$objects_map$IObjectsMap$compact$arity$1(this$);
} else {
return app$common$types$objects_map$IObjectsMap$compact$dyn_82730(this$);
}
});

var app$common$types$objects_map$IObjectsMap$get_data$dyn_82731 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (app.common.types.objects_map.get_data[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (app.common.types.objects_map.get_data["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObjectsMap.get-data",this$);
}
}
});
/**
 * retrieve internal data
 */
app.common.types.objects_map.get_data = (function app$common$types$objects_map$get_data(this$){
if((((!((this$ == null)))) && ((!((this$.app$common$types$objects_map$IObjectsMap$get_data$arity$1 == null)))))){
return this$.app$common$types$objects_map$IObjectsMap$get_data$arity$1(this$);
} else {
return app$common$types$objects_map$IObjectsMap$get_data$dyn_82731(this$);
}
});

var app$common$types$objects_map$IObjectsMap$_hash_for_key$dyn_82732 = (function (this$,key){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (app.common.types.objects_map._hash_for_key[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,key) : m__5374__auto__.call(null,this$,key));
} else {
var m__5372__auto__ = (app.common.types.objects_map._hash_for_key["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,key) : m__5372__auto__.call(null,this$,key));
} else {
throw cljs.core.missing_protocol("IObjectsMap.-hash-for-key",this$);
}
}
});
/**
 * retrieve a hash for a key
 */
app.common.types.objects_map._hash_for_key = (function app$common$types$objects_map$_hash_for_key(this$,key){
if((((!((this$ == null)))) && ((!((this$.app$common$types$objects_map$IObjectsMap$_hash_for_key$arity$2 == null)))))){
return this$.app$common$types$objects_map$IObjectsMap$_hash_for_key$arity$2(this$,key);
} else {
return app$common$types$objects_map$IObjectsMap$_hash_for_key$dyn_82732(this$,key);
}
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMapEntry}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.ILookup}
*/
app.common.types.objects_map.ObjectsMapEntry = (function (key,omap){
this.key = key;
this.omap = omap;
this.cljs$lang$protocol_mask$partition0$ = 2178943251;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.common.types.objects_map.ObjectsMapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer(writer,(function (item,w,_){
return cljs.core._write(w,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item], 0)));
}),"[",", ","]",opts,this$__$1);
}));

(app.common.types.objects_map.ObjectsMapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
var node__$1 = this;
return node__$1.cljs$core$IIndexed$_nth$arity$3(null,k,null);
}));

(app.common.types.objects_map.ObjectsMapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
var node__$1 = this;
return node__$1.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
}));

(app.common.types.objects_map.ObjectsMapEntry.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.key;
}));

(app.common.types.objects_map.ObjectsMapEntry.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.omap,self__.key);
}));

(app.common.types.objects_map.ObjectsMapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return app.common.types.objects_map._hash_for_key(self__.omap,self__.key);
}));

(app.common.types.objects_map.ObjectsMapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return ((cljs.core.map_entry_QMARK_(other)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.key.cljs$core$IFn$_invoke$arity$1 ? self__.key.cljs$core$IFn$_invoke$arity$1(this$__$1) : self__.key.call(null,this$__$1)),(self__.key.cljs$core$IFn$_invoke$arity$1 ? self__.key.cljs$core$IFn$_invoke$arity$1(other) : self__.key.call(null,other)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.val(this$__$1),cljs.core.val(other))))));
}));

(app.common.types.objects_map.ObjectsMapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (2);
}));

(app.common.types.objects_map.ObjectsMapEntry.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return node__$1.cljs$core$IMapEntry$_val$arity$1(null);
} else {
throw (new Error("Index out of bounds"));

}
}
}));

(app.common.types.objects_map.ObjectsMapEntry.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return node__$1.cljs$core$IMapEntry$_val$arity$1(null);
} else {
return not_found;

}
}
}));

(app.common.types.objects_map.ObjectsMapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(self__.key,(new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(this$__$1.cljs$core$IMapEntry$_val$arity$1(null),null);
}),null,null)));
}));

(app.common.types.objects_map.ObjectsMapEntry.prototype.call = (function (unused__14253__auto__){
var self__ = this;
var self__ = this;
var G__82693 = (arguments.length - (1));
switch (G__82693) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(app.common.types.objects_map.ObjectsMapEntry.prototype.apply = (function (self__,args82692){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args82692)));
}));

(app.common.types.objects_map.ObjectsMapEntry.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var node = this;
return node.cljs$core$IIndexed$_nth$arity$2(null,k);
}));

(app.common.types.objects_map.ObjectsMapEntry.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var node = this;
return node.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
}));

(app.common.types.objects_map.ObjectsMapEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"omap","omap",1314795126,null)], null);
}));

(app.common.types.objects_map.ObjectsMapEntry.cljs$lang$type = true);

(app.common.types.objects_map.ObjectsMapEntry.cljs$lang$ctorStr = "app.common.types.objects-map/ObjectsMapEntry");

(app.common.types.objects_map.ObjectsMapEntry.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.common.types.objects-map/ObjectsMapEntry");
}));

/**
 * Positional factory function for app.common.types.objects-map/ObjectsMapEntry.
 */
app.common.types.objects_map.__GT_ObjectsMapEntry = (function app$common$types$objects_map$__GT_ObjectsMapEntry(key,omap){
return (new app.common.types.objects_map.ObjectsMapEntry(key,omap));
});


/**
* @constructor
*/
app.common.types.objects_map.ObjectMapIterator = (function (iterator,omap){
this.iterator = iterator;
this.omap = omap;
});
(app.common.types.objects_map.ObjectMapIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return self__.iterator.hasNext();
}));

(app.common.types.objects_map.ObjectMapIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var entry = self__.iterator.next();
return (new app.common.types.objects_map.ObjectsMapEntry(cljs.core.key(entry),self__.omap));
}));

(app.common.types.objects_map.ObjectMapIterator.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
}));

(app.common.types.objects_map.ObjectMapIterator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"iterator","iterator",-32550441,null),new cljs.core.Symbol(null,"omap","omap",1314795126,null)], null);
}));

(app.common.types.objects_map.ObjectMapIterator.cljs$lang$type = true);

(app.common.types.objects_map.ObjectMapIterator.cljs$lang$ctorStr = "app.common.types.objects-map/ObjectMapIterator");

(app.common.types.objects_map.ObjectMapIterator.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.common.types.objects-map/ObjectMapIterator");
}));

/**
 * Positional factory function for app.common.types.objects-map/ObjectMapIterator.
 */
app.common.types.objects_map.__GT_ObjectMapIterator = (function app$common$types$objects_map$__GT_ObjectMapIterator(iterator,omap){
return (new app.common.types.objects_map.ObjectMapIterator(iterator,omap));
});


/**
* @constructor
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IFind}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {app.common.types.objects_map.IObjectsMap}
 * @implements {clojure.core.protocols.Datafiable}
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
app.common.types.objects_map.ObjectsMap = (function (metadata,cache,data,modified,hash){
this.metadata = metadata;
this.cache = cache;
this.data = data;
this.modified = modified;
this.hash = hash;
this.cljs$lang$protocol_mask$partition0$ = 2163607311;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.common.types.objects_map.ObjectsMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer(writer,(function (item,w,_){
cljs.core._write(w,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._key(item)], 0)));

cljs.core._write(w," ");

return cljs.core._write(w,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._val(item)], 0)));
}),"#penpot/objects-map {",", ","}",opts,cljs.core.seq(this$__$1));
}));

(app.common.types.objects_map.ObjectsMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq_iter(this$__$1);
}));

(app.common.types.objects_map.ObjectsMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
}));

(app.common.types.objects_map.ObjectsMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
}));

(app.common.types.objects_map.ObjectsMap.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(cljs.core.keys(this$));
}));

(app.common.types.objects_map.ObjectsMap.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(this$));
}));

(app.common.types.objects_map.ObjectsMap.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(cljs.core.vals(this$));
}));

(app.common.types.objects_map.ObjectsMap.prototype.has = (function (k){
var self__ = this;
var this$ = this;
return cljs.core.contains_QMARK_(this$,k);
}));

(app.common.types.objects_map.ObjectsMap.prototype.get = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
}));

(app.common.types.objects_map.ObjectsMap.prototype.forEach = (function (f){
var self__ = this;
var this$ = this;
return cljs.core.run_BANG_((function (p__82695){
var vec__82696 = p__82695;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82696,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82696,(1),null);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));
}),this$);
}));

(app.common.types.objects_map.ObjectsMap.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.objects_map.ObjectsMap.prototype.cljs$core$IFind$_find$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._contains_key_QMARK_(self__.data,k)){
return (new app.common.types.objects_map.ObjectsMapEntry(k,this$__$1));
} else {
return null;
}
}));

(app.common.types.objects_map.ObjectsMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){
var self__ = this;
var this$__$1 = this;
if((new_meta === cljs.core.meta)){
return this$__$1;
} else {
return (new app.common.types.objects_map.ObjectsMap(new_meta,self__.cache,self__.data,self__.modified,self__.hash));
}
}));

(app.common.types.objects_map.ObjectsMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
var or__5025__auto__ = cljs.core._lookup(self__.cache,k);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core._contains_key_QMARK_(self__.data,k)){
var v = cljs.core._lookup(self__.data,k);
var v__$1 = app.common.transit.decode_str.cljs$core$IFn$_invoke$arity$1(v);
(this$__$1.cache = cljs.core._assoc(self__.cache,k,v__$1));

return v__$1;
} else {
(this$__$1.cache = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.cache,k,null));

return null;
}
}
}));

(app.common.types.objects_map.ObjectsMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
if(cljs.core._contains_key_QMARK_(self__.data,k)){
return this$__$1.cljs$core$ILookup$_lookup$arity$2(null,k);
} else {
return not_found;
}
}));

(app.common.types.objects_map.ObjectsMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.metadata;
}));

(app.common.types.objects_map.ObjectsMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.app$common$types$objects_map$IObjectsMap$compact$arity$1(null);

return (new app.common.types.objects_map.ObjectsMap(self__.metadata,cljs.core.PersistentArrayMap.EMPTY,self__.data,false,null));
}));

(app.common.types.objects_map.ObjectsMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this$,f,init){
var self__ = this;
var this$__$1 = this;
return cljs.core._kv_reduce(self__.data,(function (init__$1,k,_){
var G__82703 = init__$1;
var G__82704 = k;
var G__82705 = this$__$1.cljs$core$ILookup$_lookup$arity$2(null,k);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__82703,G__82704,G__82705) : f.call(null,G__82703,G__82704,G__82705));
}),init);
}));

(app.common.types.objects_map.ObjectsMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.hash)){
} else {
(self__.hash = cljs.core.hash_unordered_coll(this$__$1));
}

return self__.hash;
}));

(app.common.types.objects_map.ObjectsMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core.equiv_map(this$__$1,other);
}));

(app.common.types.objects_map.ObjectsMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (app.common.types.objects_map.create.cljs$core$IFn$_invoke$arity$0 ? app.common.types.objects_map.create.cljs$core$IFn$_invoke$arity$0() : app.common.types.objects_map.create.call(null));
}));

(app.common.types.objects_map.ObjectsMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new app.common.types.objects_map.ObjectsMap(self__.metadata,cljs.core._assoc(self__.cache,k,v),cljs.core._assoc(self__.data,k,null),true,null));
}));

(app.common.types.objects_map.ObjectsMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.data,k);
}));

(app.common.types.objects_map.ObjectsMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.data);
}));

(app.common.types.objects_map.ObjectsMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new app.common.types.objects_map.ObjectsMap(self__.metadata,cljs.core._dissoc(self__.cache,k),cljs.core._dissoc(self__.data,k),true,null));
}));

(app.common.types.objects_map.ObjectsMap.prototype.app$common$types$objects_map$IObjectsMap$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.objects_map.ObjectsMap.prototype.app$common$types$objects_map$IObjectsMap$compact$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.modified)){
var G__82706_82751 = self__.data;
var G__82707_82752 = self__.cache;
var G__82708_82753 = (function (data_SINGLEQUOTE_){
(this$__$1.modified = false);

return (this$__$1.data = data_SINGLEQUOTE_);
});
(app.common.types.objects_map.do_compact.cljs$core$IFn$_invoke$arity$3 ? app.common.types.objects_map.do_compact.cljs$core$IFn$_invoke$arity$3(G__82706_82751,G__82707_82752,G__82708_82753) : app.common.types.objects_map.do_compact.call(null,G__82706_82751,G__82707_82752,G__82708_82753));
} else {
}

return this$__$1;
}));

(app.common.types.objects_map.ObjectsMap.prototype.app$common$types$objects_map$IObjectsMap$get_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.app$common$types$objects_map$IObjectsMap$compact$arity$1(null);

return self__.data;
}));

(app.common.types.objects_map.ObjectsMap.prototype.app$common$types$objects_map$IObjectsMap$_hash_for_key$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
if(cljs.core._contains_key_QMARK_(self__.cache,key)){
return cljs.core._hash(cljs.core._lookup(self__.cache,key));
} else {
return cljs.core._hash(this$__$1.cljs$core$ILookup$_lookup$arity$2(null,key));
}
}));

(app.common.types.objects_map.ObjectsMap.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.objects_map.ObjectsMap.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),self__.data,new cljs.core.Keyword(null,"cache","cache",-1237023054),self__.cache,new cljs.core.Keyword(null,"modified","modified",-2134587826),self__.modified,new cljs.core.Keyword(null,"hash","hash",-13781596),self__.hash], null);
}));

(app.common.types.objects_map.ObjectsMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return (new app.common.types.objects_map.ObjectsMapEntry(id,this$__$1));
}),cljs.core.keys(self__.data)));
}));

(app.common.types.objects_map.ObjectsMap.prototype.call = (function (unused__14253__auto__){
var self__ = this;
var self__ = this;
var G__82709 = (arguments.length - (1));
switch (G__82709) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(app.common.types.objects_map.ObjectsMap.prototype.apply = (function (self__,args82694){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args82694)));
}));

(app.common.types.objects_map.ObjectsMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
}));

(app.common.types.objects_map.ObjectsMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
}));

(app.common.types.objects_map.ObjectsMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.map_entry_QMARK_(entry)){
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,entry.cljs$core$IMapEntry$_key$arity$1(null),entry.cljs$core$IMapEntry$_val$arity$1(null));
} else {
if(cljs.core.vector_QMARK_(entry)){
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry,(0)),cljs.core._nth(entry,(1)));
} else {
var ret = this$__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__82755 = cljs.core._assoc(ret,cljs.core._nth(e,(0)),cljs.core._nth(e,(1)));
var G__82756 = cljs.core.next(es);
ret = G__82755;
es = G__82756;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}

}
}
}));

(app.common.types.objects_map.ObjectsMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"metadata","metadata",-855134172,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"modified","modified",-494056299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"hash","hash",1626749931,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(app.common.types.objects_map.ObjectsMap.cljs$lang$type = true);

(app.common.types.objects_map.ObjectsMap.cljs$lang$ctorStr = "app.common.types.objects-map/ObjectsMap");

(app.common.types.objects_map.ObjectsMap.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.common.types.objects-map/ObjectsMap");
}));

/**
 * Positional factory function for app.common.types.objects-map/ObjectsMap.
 */
app.common.types.objects_map.__GT_ObjectsMap = (function app$common$types$objects_map$__GT_ObjectsMap(metadata,cache,data,modified,hash){
return (new app.common.types.objects_map.ObjectsMap(metadata,cache,data,modified,hash));
});

(app.common.types.objects_map.ObjectsMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__5678__auto__ = this;
return cljs.core.es6_iterator(this__5678__auto__);
}));
app.common.types.objects_map.do_compact = (function app$common$types$objects_map$do_compact(data,cache,update_fn){
var new_data = cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (data__$1,id,obj){
if((obj == null)){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(data__$1,id,app.common.transit.encode_str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,id)));
} else {
return data__$1;
}
}),cljs.core.transient$(data),data));
(update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(new_data) : update_fn.call(null,new_data));

return null;
});
app.common.types.objects_map.from_data = (function app$common$types$objects_map$from_data(data){
return (new app.common.types.objects_map.ObjectsMap(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,data,false,null));
});
app.common.types.objects_map.objects_map_QMARK_ = (function app$common$types$objects_map$objects_map_QMARK_(o){
return (o instanceof app.common.types.objects_map.ObjectsMap);
});
app.common.types.objects_map.create = (function app$common$types$objects_map$create(var_args){
var G__82720 = arguments.length;
switch (G__82720) {
case 0:
return app.common.types.objects_map.create.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.common.types.objects_map.create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.objects_map.create.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.common.types.objects_map.from_data(cljs.core.PersistentArrayMap.EMPTY);
}));

(app.common.types.objects_map.create.cljs$core$IFn$_invoke$arity$1 = (function (other){
if(app.common.types.objects_map.objects_map_QMARK_(other)){
return app.common.types.objects_map.from_data(app.common.types.objects_map.get_data(other));
} else {
throw (new Error("invalid arguments"));

}
}));

(app.common.types.objects_map.create.cljs$lang$maxFixedArity = 1);

app.common.types.objects_map.wrap = (function app$common$types$objects_map$wrap(objects){
if((objects instanceof app.common.types.objects_map.ObjectsMap)){
return objects;
} else {
return app.common.types.objects_map.compact(cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.types.objects_map.create.cljs$core$IFn$_invoke$arity$0(),objects));
}
});
app.common.transit.add_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"penpot/objects-map/v2",new cljs.core.Keyword(null,"class","class",-2030961996),app.common.types.objects_map.ObjectsMap,new cljs.core.Keyword(null,"wfn","wfn",-1437298400),app.common.types.objects_map.get_data,new cljs.core.Keyword(null,"rfn","rfn",-990883444),app.common.types.objects_map.from_data], null)], 0));

//# sourceMappingURL=app.common.types.objects_map.js.map
