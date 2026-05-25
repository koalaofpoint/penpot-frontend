import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.common.js";
import "./app.common.geom.shapes.corners.js";
import "./app.common.geom.shapes.effects.js";
import "./app.common.geom.shapes.strokes.js";
import "./app.common.math.js";
import "./app.common.schema.js";
import "./app.common.types.shape.layout.js";
import "./app.common.types.text.js";
goog.provide('app.common.types.modifiers');

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
app.common.types.modifiers.Modifiers = (function (last_order,geometry_parent,geometry_child,structure_parent,structure_child,__meta,__extmap,__hash){
this.last_order = last_order;
this.geometry_parent = geometry_parent;
this.geometry_child = geometry_child;
this.structure_parent = structure_parent;
this.structure_child = structure_child;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.common.types.modifiers.Modifiers.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(app.common.types.modifiers.Modifiers.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k49711,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__49727 = k49711;
var G__49727__$1 = (((G__49727 instanceof cljs.core.Keyword))?G__49727.fqn:null);
switch (G__49727__$1) {
case "last-order":
return self__.last_order;

break;
case "geometry-parent":
return self__.geometry_parent;

break;
case "geometry-child":
return self__.geometry_child;

break;
case "structure-parent":
return self__.structure_parent;

break;
case "structure-child":
return self__.structure_child;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49711,else__5326__auto__);

}
}));

(app.common.types.modifiers.Modifiers.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__49735){
var vec__49736 = p__49735;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49736,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49736,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(app.common.types.modifiers.Modifiers.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#app.common.types.modifiers.Modifiers{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"last-order","last-order",203806992),self__.last_order],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"geometry-parent","geometry-parent",1427808503),self__.geometry_parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678),self__.geometry_child],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324),self__.structure_parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"structure-child","structure-child",-1244004583),self__.structure_child],null))], null),self__.__extmap));
}));

(app.common.types.modifiers.Modifiers.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49710){
var self__ = this;
var G__49710__$1 = this;
return (new cljs.core.RecordIter((0),G__49710__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-order","last-order",203806992),new cljs.core.Keyword(null,"geometry-parent","geometry-parent",1427808503),new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678),new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324),new cljs.core.Keyword(null,"structure-child","structure-child",-1244004583)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.common.types.modifiers.Modifiers.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(app.common.types.modifiers.Modifiers.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new app.common.types.modifiers.Modifiers(self__.last_order,self__.geometry_parent,self__.geometry_child,self__.structure_parent,self__.structure_child,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.common.types.modifiers.Modifiers.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(app.common.types.modifiers.Modifiers.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (1658042313 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(app.common.types.modifiers.Modifiers.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49712,other49713){
var self__ = this;
var this49712__$1 = this;
return (((!((other49713 == null)))) && ((((this49712__$1.constructor === other49713.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49712__$1.last_order,other49713.last_order)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49712__$1.geometry_parent,other49713.geometry_parent)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49712__$1.geometry_child,other49713.geometry_child)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49712__$1.structure_parent,other49713.structure_parent)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49712__$1.structure_child,other49713.structure_child)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49712__$1.__extmap,other49713.__extmap)))))))))))))));
}));

(app.common.types.modifiers.Modifiers.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678),null,new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324),null,new cljs.core.Keyword(null,"last-order","last-order",203806992),null,new cljs.core.Keyword(null,"geometry-parent","geometry-parent",1427808503),null,new cljs.core.Keyword(null,"structure-child","structure-child",-1244004583),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new app.common.types.modifiers.Modifiers(self__.last_order,self__.geometry_parent,self__.geometry_child,self__.structure_parent,self__.structure_child,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(app.common.types.modifiers.Modifiers.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k49711){
var self__ = this;
var this__5330__auto____$1 = this;
var G__49775 = k49711;
var G__49775__$1 = (((G__49775 instanceof cljs.core.Keyword))?G__49775.fqn:null);
switch (G__49775__$1) {
case "last-order":
case "geometry-parent":
case "geometry-child":
case "structure-parent":
case "structure-child":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49711);

}
}));

(app.common.types.modifiers.Modifiers.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__49710){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__49776 = cljs.core.keyword_identical_QMARK_;
var expr__49777 = k__5332__auto__;
if(cljs.core.truth_((pred__49776.cljs$core$IFn$_invoke$arity$2 ? pred__49776.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"last-order","last-order",203806992),expr__49777) : pred__49776.call(null,new cljs.core.Keyword(null,"last-order","last-order",203806992),expr__49777)))){
return (new app.common.types.modifiers.Modifiers(G__49710,self__.geometry_parent,self__.geometry_child,self__.structure_parent,self__.structure_child,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49776.cljs$core$IFn$_invoke$arity$2 ? pred__49776.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"geometry-parent","geometry-parent",1427808503),expr__49777) : pred__49776.call(null,new cljs.core.Keyword(null,"geometry-parent","geometry-parent",1427808503),expr__49777)))){
return (new app.common.types.modifiers.Modifiers(self__.last_order,G__49710,self__.geometry_child,self__.structure_parent,self__.structure_child,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49776.cljs$core$IFn$_invoke$arity$2 ? pred__49776.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678),expr__49777) : pred__49776.call(null,new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678),expr__49777)))){
return (new app.common.types.modifiers.Modifiers(self__.last_order,self__.geometry_parent,G__49710,self__.structure_parent,self__.structure_child,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49776.cljs$core$IFn$_invoke$arity$2 ? pred__49776.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324),expr__49777) : pred__49776.call(null,new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324),expr__49777)))){
return (new app.common.types.modifiers.Modifiers(self__.last_order,self__.geometry_parent,self__.geometry_child,G__49710,self__.structure_child,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49776.cljs$core$IFn$_invoke$arity$2 ? pred__49776.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"structure-child","structure-child",-1244004583),expr__49777) : pred__49776.call(null,new cljs.core.Keyword(null,"structure-child","structure-child",-1244004583),expr__49777)))){
return (new app.common.types.modifiers.Modifiers(self__.last_order,self__.geometry_parent,self__.geometry_child,self__.structure_parent,G__49710,self__.__meta,self__.__extmap,null));
} else {
return (new app.common.types.modifiers.Modifiers(self__.last_order,self__.geometry_parent,self__.geometry_child,self__.structure_parent,self__.structure_child,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__49710),null));
}
}
}
}
}
}));

(app.common.types.modifiers.Modifiers.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"last-order","last-order",203806992),self__.last_order,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"geometry-parent","geometry-parent",1427808503),self__.geometry_parent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678),self__.geometry_child,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324),self__.structure_parent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"structure-child","structure-child",-1244004583),self__.structure_child,null))], null),self__.__extmap));
}));

(app.common.types.modifiers.Modifiers.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__49710){
var self__ = this;
var this__5322__auto____$1 = this;
return (new app.common.types.modifiers.Modifiers(self__.last_order,self__.geometry_parent,self__.geometry_child,self__.structure_parent,self__.structure_child,G__49710,self__.__extmap,self__.__hash));
}));

(app.common.types.modifiers.Modifiers.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(app.common.types.modifiers.Modifiers.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"last-order","last-order",1844338519,null),new cljs.core.Symbol(null,"geometry-parent","geometry-parent",-1226627266,null),new cljs.core.Symbol(null,"geometry-child","geometry-child",-635623091,null),new cljs.core.Symbol(null,"structure-parent","structure-parent",1452089203,null),new cljs.core.Symbol(null,"structure-child","structure-child",396526944,null)], null);
}));

(app.common.types.modifiers.Modifiers.cljs$lang$type = true);

(app.common.types.modifiers.Modifiers.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"app.common.types.modifiers/Modifiers",null,(1),null));
}));

(app.common.types.modifiers.Modifiers.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"app.common.types.modifiers/Modifiers");
}));

/**
 * Positional factory function for app.common.types.modifiers/Modifiers.
 */
app.common.types.modifiers.__GT_Modifiers = (function app$common$types$modifiers$__GT_Modifiers(last_order,geometry_parent,geometry_child,structure_parent,structure_child){
return (new app.common.types.modifiers.Modifiers(last_order,geometry_parent,geometry_child,structure_parent,structure_child,null,null,null));
});

/**
 * Factory function for app.common.types.modifiers/Modifiers, taking a map of keywords to field values.
 */
app.common.types.modifiers.map__GT_Modifiers = (function app$common$types$modifiers$map__GT_Modifiers(G__49716){
var extmap__5365__auto__ = (function (){var G__49780 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49716,new cljs.core.Keyword(null,"last-order","last-order",203806992),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"geometry-parent","geometry-parent",1427808503),new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678),new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324),new cljs.core.Keyword(null,"structure-child","structure-child",-1244004583)], 0));
if(cljs.core.record_QMARK_(G__49716)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49780);
} else {
return G__49780;
}
})();
return (new app.common.types.modifiers.Modifiers(new cljs.core.Keyword(null,"last-order","last-order",203806992).cljs$core$IFn$_invoke$arity$1(G__49716),new cljs.core.Keyword(null,"geometry-parent","geometry-parent",1427808503).cljs$core$IFn$_invoke$arity$1(G__49716),new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678).cljs$core$IFn$_invoke$arity$1(G__49716),new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324).cljs$core$IFn$_invoke$arity$1(G__49716),new cljs.core.Keyword(null,"structure-child","structure-child",-1244004583).cljs$core$IFn$_invoke$arity$1(G__49716),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
app.common.types.modifiers.GeometricOperation = (function (order,type,vector,origin,transform,transform_inverse,rotation,center,__meta,__extmap,__hash){
this.order = order;
this.type = type;
this.vector = vector;
this.origin = origin;
this.transform = transform;
this.transform_inverse = transform_inverse;
this.rotation = rotation;
this.center = center;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.common.types.modifiers.GeometricOperation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(app.common.types.modifiers.GeometricOperation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k49782,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__49786 = k49782;
var G__49786__$1 = (((G__49786 instanceof cljs.core.Keyword))?G__49786.fqn:null);
switch (G__49786__$1) {
case "order":
return self__.order;

break;
case "type":
return self__.type;

break;
case "vector":
return self__.vector;

break;
case "origin":
return self__.origin;

break;
case "transform":
return self__.transform;

break;
case "transform-inverse":
return self__.transform_inverse;

break;
case "rotation":
return self__.rotation;

break;
case "center":
return self__.center;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49782,else__5326__auto__);

}
}));

(app.common.types.modifiers.GeometricOperation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__49787){
var vec__49788 = p__49787;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49788,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49788,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(app.common.types.modifiers.GeometricOperation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#app.common.types.modifiers.GeometricOperation{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"order","order",-1254677256),self__.order],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vector","vector",1902966158),self__.vector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"origin","origin",1037372088),self__.origin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform","transform",1381301764),self__.transform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576),self__.transform_inverse],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rotation","rotation",-1728051644),self__.rotation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"center","center",-748944368),self__.center],null))], null),self__.__extmap));
}));

(app.common.types.modifiers.GeometricOperation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49781){
var self__ = this;
var G__49781__$1 = this;
return (new cljs.core.RecordIter((0),G__49781__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"center","center",-748944368)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.common.types.modifiers.GeometricOperation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(app.common.types.modifiers.GeometricOperation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new app.common.types.modifiers.GeometricOperation(self__.order,self__.type,self__.vector,self__.origin,self__.transform,self__.transform_inverse,self__.rotation,self__.center,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.common.types.modifiers.GeometricOperation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(app.common.types.modifiers.GeometricOperation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1819923951 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(app.common.types.modifiers.GeometricOperation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49783,other49784){
var self__ = this;
var this49783__$1 = this;
return (((!((other49784 == null)))) && ((((this49783__$1.constructor === other49784.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49783__$1.order,other49784.order)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49783__$1.type,other49784.type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49783__$1.vector,other49784.vector)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49783__$1.origin,other49784.origin)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49783__$1.transform,other49784.transform)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49783__$1.transform_inverse,other49784.transform_inverse)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49783__$1.rotation,other49784.rotation)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49783__$1.center,other49784.center)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49783__$1.__extmap,other49784.__extmap)))))))))))))))))))));
}));

(app.common.types.modifiers.GeometricOperation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"transform","transform",1381301764),null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"center","center",-748944368),null,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576),null,new cljs.core.Keyword(null,"order","order",-1254677256),null,new cljs.core.Keyword(null,"origin","origin",1037372088),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new app.common.types.modifiers.GeometricOperation(self__.order,self__.type,self__.vector,self__.origin,self__.transform,self__.transform_inverse,self__.rotation,self__.center,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(app.common.types.modifiers.GeometricOperation.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k49782){
var self__ = this;
var this__5330__auto____$1 = this;
var G__49815 = k49782;
var G__49815__$1 = (((G__49815 instanceof cljs.core.Keyword))?G__49815.fqn:null);
switch (G__49815__$1) {
case "order":
case "type":
case "vector":
case "origin":
case "transform":
case "transform-inverse":
case "rotation":
case "center":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49782);

}
}));

(app.common.types.modifiers.GeometricOperation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__49781){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__49816 = cljs.core.keyword_identical_QMARK_;
var expr__49817 = k__5332__auto__;
if(cljs.core.truth_((pred__49816.cljs$core$IFn$_invoke$arity$2 ? pred__49816.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"order","order",-1254677256),expr__49817) : pred__49816.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),expr__49817)))){
return (new app.common.types.modifiers.GeometricOperation(G__49781,self__.type,self__.vector,self__.origin,self__.transform,self__.transform_inverse,self__.rotation,self__.center,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49816.cljs$core$IFn$_invoke$arity$2 ? pred__49816.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__49817) : pred__49816.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__49817)))){
return (new app.common.types.modifiers.GeometricOperation(self__.order,G__49781,self__.vector,self__.origin,self__.transform,self__.transform_inverse,self__.rotation,self__.center,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49816.cljs$core$IFn$_invoke$arity$2 ? pred__49816.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vector","vector",1902966158),expr__49817) : pred__49816.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),expr__49817)))){
return (new app.common.types.modifiers.GeometricOperation(self__.order,self__.type,G__49781,self__.origin,self__.transform,self__.transform_inverse,self__.rotation,self__.center,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49816.cljs$core$IFn$_invoke$arity$2 ? pred__49816.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"origin","origin",1037372088),expr__49817) : pred__49816.call(null,new cljs.core.Keyword(null,"origin","origin",1037372088),expr__49817)))){
return (new app.common.types.modifiers.GeometricOperation(self__.order,self__.type,self__.vector,G__49781,self__.transform,self__.transform_inverse,self__.rotation,self__.center,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49816.cljs$core$IFn$_invoke$arity$2 ? pred__49816.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transform","transform",1381301764),expr__49817) : pred__49816.call(null,new cljs.core.Keyword(null,"transform","transform",1381301764),expr__49817)))){
return (new app.common.types.modifiers.GeometricOperation(self__.order,self__.type,self__.vector,self__.origin,G__49781,self__.transform_inverse,self__.rotation,self__.center,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49816.cljs$core$IFn$_invoke$arity$2 ? pred__49816.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576),expr__49817) : pred__49816.call(null,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576),expr__49817)))){
return (new app.common.types.modifiers.GeometricOperation(self__.order,self__.type,self__.vector,self__.origin,self__.transform,G__49781,self__.rotation,self__.center,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49816.cljs$core$IFn$_invoke$arity$2 ? pred__49816.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rotation","rotation",-1728051644),expr__49817) : pred__49816.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),expr__49817)))){
return (new app.common.types.modifiers.GeometricOperation(self__.order,self__.type,self__.vector,self__.origin,self__.transform,self__.transform_inverse,G__49781,self__.center,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49816.cljs$core$IFn$_invoke$arity$2 ? pred__49816.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"center","center",-748944368),expr__49817) : pred__49816.call(null,new cljs.core.Keyword(null,"center","center",-748944368),expr__49817)))){
return (new app.common.types.modifiers.GeometricOperation(self__.order,self__.type,self__.vector,self__.origin,self__.transform,self__.transform_inverse,self__.rotation,G__49781,self__.__meta,self__.__extmap,null));
} else {
return (new app.common.types.modifiers.GeometricOperation(self__.order,self__.type,self__.vector,self__.origin,self__.transform,self__.transform_inverse,self__.rotation,self__.center,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__49781),null));
}
}
}
}
}
}
}
}
}));

(app.common.types.modifiers.GeometricOperation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"order","order",-1254677256),self__.order,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vector","vector",1902966158),self__.vector,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"origin","origin",1037372088),self__.origin,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transform","transform",1381301764),self__.transform,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576),self__.transform_inverse,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rotation","rotation",-1728051644),self__.rotation,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"center","center",-748944368),self__.center,null))], null),self__.__extmap));
}));

(app.common.types.modifiers.GeometricOperation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__49781){
var self__ = this;
var this__5322__auto____$1 = this;
return (new app.common.types.modifiers.GeometricOperation(self__.order,self__.type,self__.vector,self__.origin,self__.transform,self__.transform_inverse,self__.rotation,self__.center,G__49781,self__.__extmap,self__.__hash));
}));

(app.common.types.modifiers.GeometricOperation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(app.common.types.modifiers.GeometricOperation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"order","order",385854271,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"origin","origin",-1617063681,null),new cljs.core.Symbol(null,"transform","transform",-1273134005,null),new cljs.core.Symbol(null,"transform-inverse","transform-inverse",-1421313193,null),new cljs.core.Symbol(null,"rotation","rotation",-87520117,null),new cljs.core.Symbol(null,"center","center",891587159,null)], null);
}));

(app.common.types.modifiers.GeometricOperation.cljs$lang$type = true);

(app.common.types.modifiers.GeometricOperation.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"app.common.types.modifiers/GeometricOperation",null,(1),null));
}));

(app.common.types.modifiers.GeometricOperation.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"app.common.types.modifiers/GeometricOperation");
}));

/**
 * Positional factory function for app.common.types.modifiers/GeometricOperation.
 */
app.common.types.modifiers.__GT_GeometricOperation = (function app$common$types$modifiers$__GT_GeometricOperation(order,type,vector,origin,transform,transform_inverse,rotation,center){
return (new app.common.types.modifiers.GeometricOperation(order,type,vector,origin,transform,transform_inverse,rotation,center,null,null,null));
});

/**
 * Factory function for app.common.types.modifiers/GeometricOperation, taking a map of keywords to field values.
 */
app.common.types.modifiers.map__GT_GeometricOperation = (function app$common$types$modifiers$map__GT_GeometricOperation(G__49785){
var extmap__5365__auto__ = (function (){var G__49832 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49785,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"center","center",-748944368)], 0));
if(cljs.core.record_QMARK_(G__49785)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49832);
} else {
return G__49832;
}
})();
return (new app.common.types.modifiers.GeometricOperation(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__49785),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__49785),new cljs.core.Keyword(null,"vector","vector",1902966158).cljs$core$IFn$_invoke$arity$1(G__49785),new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(G__49785),new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(G__49785),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$1(G__49785),new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(G__49785),new cljs.core.Keyword(null,"center","center",-748944368).cljs$core$IFn$_invoke$arity$1(G__49785),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
app.common.types.modifiers.StructureOperation = (function (type,property,value,index,__meta,__extmap,__hash){
this.type = type;
this.property = property;
this.value = value;
this.index = index;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.common.types.modifiers.StructureOperation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(app.common.types.modifiers.StructureOperation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k49842,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__49853 = k49842;
var G__49853__$1 = (((G__49853 instanceof cljs.core.Keyword))?G__49853.fqn:null);
switch (G__49853__$1) {
case "type":
return self__.type;

break;
case "property":
return self__.property;

break;
case "value":
return self__.value;

break;
case "index":
return self__.index;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49842,else__5326__auto__);

}
}));

(app.common.types.modifiers.StructureOperation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__49854){
var vec__49855 = p__49854;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49855,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49855,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(app.common.types.modifiers.StructureOperation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#app.common.types.modifiers.StructureOperation{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"property","property",-1114278232),self__.property],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null))], null),self__.__extmap));
}));

(app.common.types.modifiers.StructureOperation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49841){
var self__ = this;
var G__49841__$1 = this;
return (new cljs.core.RecordIter((0),G__49841__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"index","index",-1531685915)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.common.types.modifiers.StructureOperation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(app.common.types.modifiers.StructureOperation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new app.common.types.modifiers.StructureOperation(self__.type,self__.property,self__.value,self__.index,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.common.types.modifiers.StructureOperation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(app.common.types.modifiers.StructureOperation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (697367287 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(app.common.types.modifiers.StructureOperation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49843,other49844){
var self__ = this;
var this49843__$1 = this;
return (((!((other49844 == null)))) && ((((this49843__$1.constructor === other49844.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49843__$1.type,other49844.type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49843__$1.property,other49844.property)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49843__$1.value,other49844.value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49843__$1.index,other49844.index)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49843__$1.__extmap,other49844.__extmap)))))))))))));
}));

(app.common.types.modifiers.StructureOperation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"property","property",-1114278232),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"type","type",1174270348),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new app.common.types.modifiers.StructureOperation(self__.type,self__.property,self__.value,self__.index,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(app.common.types.modifiers.StructureOperation.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k49842){
var self__ = this;
var this__5330__auto____$1 = this;
var G__49865 = k49842;
var G__49865__$1 = (((G__49865 instanceof cljs.core.Keyword))?G__49865.fqn:null);
switch (G__49865__$1) {
case "type":
case "property":
case "value":
case "index":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49842);

}
}));

(app.common.types.modifiers.StructureOperation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__49841){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__49870 = cljs.core.keyword_identical_QMARK_;
var expr__49871 = k__5332__auto__;
if(cljs.core.truth_((pred__49870.cljs$core$IFn$_invoke$arity$2 ? pred__49870.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__49871) : pred__49870.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__49871)))){
return (new app.common.types.modifiers.StructureOperation(G__49841,self__.property,self__.value,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49870.cljs$core$IFn$_invoke$arity$2 ? pred__49870.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"property","property",-1114278232),expr__49871) : pred__49870.call(null,new cljs.core.Keyword(null,"property","property",-1114278232),expr__49871)))){
return (new app.common.types.modifiers.StructureOperation(self__.type,G__49841,self__.value,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49870.cljs$core$IFn$_invoke$arity$2 ? pred__49870.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__49871) : pred__49870.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__49871)))){
return (new app.common.types.modifiers.StructureOperation(self__.type,self__.property,G__49841,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49870.cljs$core$IFn$_invoke$arity$2 ? pred__49870.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915),expr__49871) : pred__49870.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),expr__49871)))){
return (new app.common.types.modifiers.StructureOperation(self__.type,self__.property,self__.value,G__49841,self__.__meta,self__.__extmap,null));
} else {
return (new app.common.types.modifiers.StructureOperation(self__.type,self__.property,self__.value,self__.index,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__49841),null));
}
}
}
}
}));

(app.common.types.modifiers.StructureOperation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"property","property",-1114278232),self__.property,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"index","index",-1531685915),self__.index,null))], null),self__.__extmap));
}));

(app.common.types.modifiers.StructureOperation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__49841){
var self__ = this;
var this__5322__auto____$1 = this;
return (new app.common.types.modifiers.StructureOperation(self__.type,self__.property,self__.value,self__.index,G__49841,self__.__extmap,self__.__hash));
}));

(app.common.types.modifiers.StructureOperation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(app.common.types.modifiers.StructureOperation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"property","property",526253295,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null);
}));

(app.common.types.modifiers.StructureOperation.cljs$lang$type = true);

(app.common.types.modifiers.StructureOperation.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"app.common.types.modifiers/StructureOperation",null,(1),null));
}));

(app.common.types.modifiers.StructureOperation.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"app.common.types.modifiers/StructureOperation");
}));

/**
 * Positional factory function for app.common.types.modifiers/StructureOperation.
 */
app.common.types.modifiers.__GT_StructureOperation = (function app$common$types$modifiers$__GT_StructureOperation(type,property,value,index){
return (new app.common.types.modifiers.StructureOperation(type,property,value,index,null,null,null));
});

/**
 * Factory function for app.common.types.modifiers/StructureOperation, taking a map of keywords to field values.
 */
app.common.types.modifiers.map__GT_StructureOperation = (function app$common$types$modifiers$map__GT_StructureOperation(G__49845){
var extmap__5365__auto__ = (function (){var G__49878 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49845,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"index","index",-1531685915)], 0));
if(cljs.core.record_QMARK_(G__49845)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49878);
} else {
return G__49878;
}
})();
return (new app.common.types.modifiers.StructureOperation(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__49845),new cljs.core.Keyword(null,"property","property",-1114278232).cljs$core$IFn$_invoke$arity$1(G__49845),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__49845),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__49845),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

app.common.types.modifiers.move_op = (function app$common$types$modifiers$move_op(order,vector){
return (new app.common.types.modifiers.GeometricOperation(order,new cljs.core.Keyword(null,"move","move",-2110884309),vector,null,null,null,null,null,null,null,null));
});
app.common.types.modifiers.resize_op = (function app$common$types$modifiers$resize_op(var_args){
var G__49883 = arguments.length;
switch (G__49883) {
case 3:
return app.common.types.modifiers.resize_op.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return app.common.types.modifiers.resize_op.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.modifiers.resize_op.cljs$core$IFn$_invoke$arity$3 = (function (order,vector,origin){
return (new app.common.types.modifiers.GeometricOperation(order,new cljs.core.Keyword(null,"resize","resize",297367086),vector,origin,null,null,null,null,null,null,null));
}));

(app.common.types.modifiers.resize_op.cljs$core$IFn$_invoke$arity$5 = (function (order,vector,origin,transform,transform_inverse){
return (new app.common.types.modifiers.GeometricOperation(order,new cljs.core.Keyword(null,"resize","resize",297367086),vector,origin,transform,transform_inverse,null,null,null,null,null));
}));

(app.common.types.modifiers.resize_op.cljs$lang$maxFixedArity = 5);

app.common.types.modifiers.rotation_geom_op = (function app$common$types$modifiers$rotation_geom_op(order,center,angle){
return (new app.common.types.modifiers.GeometricOperation(order,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,null,null,null,angle,center,null,null,null));
});
app.common.types.modifiers.rotation_struct_op = (function app$common$types$modifiers$rotation_struct_op(angle){
return (new app.common.types.modifiers.StructureOperation(new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,angle,null,null,null,null));
});
app.common.types.modifiers.remove_children_op = (function app$common$types$modifiers$remove_children_op(shapes){
return (new app.common.types.modifiers.StructureOperation(new cljs.core.Keyword(null,"remove-children","remove-children",1296934069),null,shapes,null,null,null,null));
});
app.common.types.modifiers.add_children_op = (function app$common$types$modifiers$add_children_op(shapes,index){
return (new app.common.types.modifiers.StructureOperation(new cljs.core.Keyword(null,"add-children","add-children",705239943),null,shapes,index,null,null,null));
});
app.common.types.modifiers.reflow_op = (function app$common$types$modifiers$reflow_op(){
return (new app.common.types.modifiers.StructureOperation(new cljs.core.Keyword(null,"reflow","reflow",-1736202629),null,null,null,null,null,null));
});
app.common.types.modifiers.scale_content_op = (function app$common$types$modifiers$scale_content_op(value){
return (new app.common.types.modifiers.StructureOperation(new cljs.core.Keyword(null,"scale-content","scale-content",1165837834),null,value,null,null,null,null));
});
app.common.types.modifiers.change_property_op = (function app$common$types$modifiers$change_property_op(property,value){
return (new app.common.types.modifiers.StructureOperation(new cljs.core.Keyword(null,"change-property","change-property",271308648),property,value,null,null,null,null));
});
app.common.types.modifiers.move_vec_QMARK_ = (function app$common$types$modifiers$move_vec_QMARK_(vector){
return (((!(app.common.math.almost_zero_QMARK_((vector?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(vector,new cljs.core.Keyword(null,"x","x",2099068185))))))) || ((!(app.common.math.almost_zero_QMARK_((vector?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(vector,new cljs.core.Keyword(null,"y","y",-1757859776))))))));
});
app.common.types.modifiers.resize_vec_QMARK_ = (function app$common$types$modifiers$resize_vec_QMARK_(vector){
return (((!(app.common.math.almost_zero_QMARK_(((vector?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(vector,new cljs.core.Keyword(null,"x","x",2099068185))) - (1)))))) || ((!(app.common.math.almost_zero_QMARK_(((vector?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(vector,new cljs.core.Keyword(null,"y","y",-1757859776))) - (1)))))));
});
/**
 * Returns true when `rect` has finite, in-range, positive width and height.
 */
app.common.types.modifiers.safe_size_rect_QMARK_ = (function app$common$types$modifiers$safe_size_rect_QMARK_(rect){
var and__5023__auto__ = (!((rect == null)));
if(and__5023__auto__){
var w = (rect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"width","width",-384071477)));
var h = (rect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"height","height",1025178622)));
return ((app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$2(w,h)) && ((((w > (0))) && ((((h > (0))) && ((((w <= app.common.schema.max_safe_int)) && ((h <= app.common.schema.max_safe_int)))))))));
} else {
return and__5023__auto__;
}
});
/**
 * Returns the best available size rect for a shape, trying several
 * fallbacks in order:
 * 1. `:selrect`  — if it has valid, in-range, positive dimensions.
 * 2. `points->rect` — computed from the shape's corner points.
 * 3. Top-level `:x :y :width :height` shape fields.
 * 4. `grc/empty-rect` — a unit rect (0,0,0.01,0.01) of last resort.
 */
app.common.types.modifiers.safe_size_rect = (function app$common$types$modifiers$safe_size_rect(p__49896){
var map__49897 = p__49896;
var map__49897__$1 = cljs.core.__destructure_map(map__49897);
var selrect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49897__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49897__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49897__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49897__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49897__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49897__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var or__5025__auto__ = (function (){var and__5023__auto__ = app.common.types.modifiers.safe_size_rect_QMARK_(selrect);
if(and__5023__auto__){
return selrect;
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){var from_points = app.common.geom.rect.points__GT_rect(points);
var and__5023__auto__ = app.common.types.modifiers.safe_size_rect_QMARK_(from_points);
if(and__5023__auto__){
return from_points;
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = (function (){var from_shape = app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(x,y,width,height);
var and__5023__auto__ = app.common.types.modifiers.safe_size_rect_QMARK_(from_shape);
if(and__5023__auto__){
return from_shape;
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return app.common.geom.rect.empty_rect;
}
}
}
});
app.common.types.modifiers.mergeable_move_QMARK_ = (function app$common$types$modifiers$mergeable_move_QMARK_(op1,op2){
var type_op1 = (op1?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(op1,new cljs.core.Keyword(null,"type","type",1174270348)));
var type_op2 = (op2?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(op2,new cljs.core.Keyword(null,"type","type",1174270348)));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),type_op1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),type_op2)));
});
app.common.types.modifiers.mergeable_resize_QMARK_ = (function app$common$types$modifiers$mergeable_resize_QMARK_(op1,op2){
var type_op1 = (op1?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(op1,new cljs.core.Keyword(null,"type","type",1174270348)));
var transform_op1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((op1?.transform?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(op1,new cljs.core.Keyword(null,"transform","transform",1381301764))),app.common.geom.matrix.base);
var transform_inv_op1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((op1?.transform_inverse?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(op1,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576))),app.common.geom.matrix.base);
var origin_op1 = (op1?.origin?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(op1,new cljs.core.Keyword(null,"origin","origin",1037372088)));
var type_op2 = (op2?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(op2,new cljs.core.Keyword(null,"type","type",1174270348)));
var transform_op2 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((op2?.transform?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(op2,new cljs.core.Keyword(null,"transform","transform",1381301764))),app.common.geom.matrix.base);
var transform_inv_op2 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((op2?.transform_inverse?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(op2,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576))),app.common.geom.matrix.base);
var origin_op2 = (op2?.origin?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(op2,new cljs.core.Keyword(null,"origin","origin",1037372088)));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resize","resize",297367086),type_op1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resize","resize",297367086),type_op2)) && (((app.common.geom.point.close_QMARK_(origin_op1,origin_op2)) && (((app.common.geom.matrix.close_QMARK_(transform_op1,transform_op2)) && (app.common.geom.matrix.close_QMARK_(transform_inv_op1,transform_inv_op2)))))))));
});
app.common.types.modifiers.merge_move = (function app$common$types$modifiers$merge_move(op1,op2){
var vector_op1 = (op1?.vector?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(op1,new cljs.core.Keyword(null,"vector","vector",1902966158)));
var vector_op2 = (op2?.vector?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(op2,new cljs.core.Keyword(null,"vector","vector",1902966158)));
var vector = app.common.geom.point.add(vector_op1,vector_op2);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(op1,new cljs.core.Keyword(null,"vector","vector",1902966158),vector);
});
app.common.types.modifiers.merge_resize = (function app$common$types$modifiers$merge_resize(op1,op2){
var op1_vector = (op1?.vector?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(op1,new cljs.core.Keyword(null,"vector","vector",1902966158)));
var op1_x = (op1_vector?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(op1_vector,new cljs.core.Keyword(null,"x","x",2099068185)));
var op1_y = (op1_vector?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(op1_vector,new cljs.core.Keyword(null,"y","y",-1757859776)));
var op2_vector = (op2?.vector?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(op2,new cljs.core.Keyword(null,"vector","vector",1902966158)));
var op2_x = (op2_vector?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(op2_vector,new cljs.core.Keyword(null,"x","x",2099068185)));
var op2_y = (op2_vector?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(op2_vector,new cljs.core.Keyword(null,"y","y",-1757859776)));
var vector = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((op1_x * op2_x),(op1_y * op2_y));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(op1,new cljs.core.Keyword(null,"vector","vector",1902966158),vector);
});
/**
 * Check the last operation to check if we can stack it over the last one
 */
app.common.types.modifiers.maybe_add_move = (function app$common$types$modifiers$maybe_add_move(operations,op){
if(cljs.core.empty_QMARK_(operations)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [op], null);
} else {
var head = cljs.core.peek(operations);
if(app.common.types.modifiers.mergeable_move_QMARK_(head,op)){
var item = app.common.types.modifiers.merge_move(head,op);
var G__49916 = cljs.core.pop(operations);
if(app.common.types.modifiers.move_vec_QMARK_((item?.vector?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"vector","vector",1902966158))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49916,item);
} else {
return G__49916;
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(operations,op);
}
}
});
/**
 * Check the last operation to check if we can stack it over the last one
 */
app.common.types.modifiers.maybe_add_resize = (function app$common$types$modifiers$maybe_add_resize(var_args){
var G__49918 = arguments.length;
switch (G__49918) {
case 2:
return app.common.types.modifiers.maybe_add_resize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.modifiers.maybe_add_resize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.modifiers.maybe_add_resize.cljs$core$IFn$_invoke$arity$2 = (function (operations,op){
return app.common.types.modifiers.maybe_add_resize.cljs$core$IFn$_invoke$arity$3(operations,op,null);
}));

(app.common.types.modifiers.maybe_add_resize.cljs$core$IFn$_invoke$arity$3 = (function (operations,op,p__49930){
var map__49931 = p__49930;
var map__49931__$1 = cljs.core.__destructure_map(map__49931);
var precise_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49931__$1,new cljs.core.Keyword(null,"precise?","precise?",-353383452));
if(cljs.core.empty_QMARK_(operations)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [op], null);
} else {
var head = cljs.core.peek(operations);
if(app.common.types.modifiers.mergeable_resize_QMARK_(head,op)){
var item = app.common.types.modifiers.merge_resize(head,op);
var G__49932 = cljs.core.pop(operations);
if(cljs.core.truth_((function (){var or__5025__auto__ = precise_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.modifiers.resize_vec_QMARK_((item?.vector?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"vector","vector",1902966158))));
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49932,item);
} else {
return G__49932;
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(operations,op);
}
}
}));

(app.common.types.modifiers.maybe_add_resize.cljs$lang$maxFixedArity = 3);

app.common.types.modifiers.valid_vector_QMARK_ = (function app$common$types$modifiers$valid_vector_QMARK_(vector){
var x = (vector?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(vector,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (vector?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(vector,new cljs.core.Keyword(null,"y","y",-1757859776)));
return app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y);
});
app.common.types.modifiers.empty = (function app$common$types$modifiers$empty(){
return (new app.common.types.modifiers.Modifiers((0),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,null,null));
});
app.common.types.modifiers.move_parent = (function app$common$types$modifiers$move_parent(var_args){
var G__49939 = arguments.length;
switch (G__49939) {
case 3:
return app.common.types.modifiers.move_parent.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return app.common.types.modifiers.move_parent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.modifiers.move_parent.cljs$core$IFn$_invoke$arity$3 = (function (modifiers,x,y){
return app.common.types.modifiers.move_parent.cljs$core$IFn$_invoke$arity$2(modifiers,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y));
}));

(app.common.types.modifiers.move_parent.cljs$core$IFn$_invoke$arity$2 = (function (modifiers,vector){
if(app.common.types.modifiers.valid_vector_QMARK_(vector)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(""+"Invalid move vector: "+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vector) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vector) ?? "")),"\n","(valid-vector? vector)"].join('')));
}

var modifiers__$1 = (function (){var or__5025__auto__ = modifiers;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.modifiers.empty();
}
})();
var order = ((modifiers__$1?.last_order?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers__$1,new cljs.core.Keyword(null,"last-order","last-order",203806992))) + (1));
var modifiers__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(modifiers__$1,new cljs.core.Keyword(null,"last-order","last-order",203806992),order);
var G__49942 = modifiers__$2;
if(app.common.types.modifiers.move_vec_QMARK_(vector)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49942,new cljs.core.Keyword(null,"geometry-parent","geometry-parent",1427808503),app.common.types.modifiers.maybe_add_move,app.common.types.modifiers.move_op(order,vector));
} else {
return G__49942;
}
}));

(app.common.types.modifiers.move_parent.cljs$lang$maxFixedArity = 3);

app.common.types.modifiers.resize_parent = (function app$common$types$modifiers$resize_parent(var_args){
var G__49949 = arguments.length;
switch (G__49949) {
case 3:
return app.common.types.modifiers.resize_parent.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return app.common.types.modifiers.resize_parent.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.modifiers.resize_parent.cljs$core$IFn$_invoke$arity$3 = (function (modifiers,vector,origin){
if(app.common.types.modifiers.valid_vector_QMARK_(vector)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(""+"Invalid move vector: "+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vector) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vector) ?? "")),"\n","(valid-vector? vector)"].join('')));
}

var modifiers__$1 = (function (){var or__5025__auto__ = modifiers;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.modifiers.empty();
}
})();
var order = ((modifiers__$1?.last_order?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers__$1,new cljs.core.Keyword(null,"last-order","last-order",203806992))) + (1));
var modifiers__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(modifiers__$1,new cljs.core.Keyword(null,"last-order","last-order",203806992),order);
var G__49952 = modifiers__$2;
if(app.common.types.modifiers.resize_vec_QMARK_(vector)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49952,new cljs.core.Keyword(null,"geometry-parent","geometry-parent",1427808503),app.common.types.modifiers.maybe_add_resize,app.common.types.modifiers.resize_op.cljs$core$IFn$_invoke$arity$3(order,vector,origin));
} else {
return G__49952;
}
}));

(app.common.types.modifiers.resize_parent.cljs$core$IFn$_invoke$arity$5 = (function (modifiers,vector,origin,transform,transform_inverse){
if(app.common.types.modifiers.valid_vector_QMARK_(vector)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(""+"Invalid move vector: "+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vector) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vector) ?? "")),"\n","(valid-vector? vector)"].join('')));
}

var modifiers__$1 = (function (){var or__5025__auto__ = modifiers;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.modifiers.empty();
}
})();
var order = ((modifiers__$1?.last_order?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers__$1,new cljs.core.Keyword(null,"last-order","last-order",203806992))) + (1));
var modifiers__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(modifiers__$1,new cljs.core.Keyword(null,"last-order","last-order",203806992),order);
var G__49955 = modifiers__$2;
if(app.common.types.modifiers.resize_vec_QMARK_(vector)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49955,new cljs.core.Keyword(null,"geometry-parent","geometry-parent",1427808503),app.common.types.modifiers.maybe_add_resize,app.common.types.modifiers.resize_op.cljs$core$IFn$_invoke$arity$5(order,vector,origin,transform,transform_inverse));
} else {
return G__49955;
}
}));

(app.common.types.modifiers.resize_parent.cljs$lang$maxFixedArity = 5);

app.common.types.modifiers.move = (function app$common$types$modifiers$move(var_args){
var G__49957 = arguments.length;
switch (G__49957) {
case 3:
return app.common.types.modifiers.move.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return app.common.types.modifiers.move.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.modifiers.move.cljs$core$IFn$_invoke$arity$3 = (function (modifiers,x,y){
return app.common.types.modifiers.move.cljs$core$IFn$_invoke$arity$2(modifiers,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y));
}));

(app.common.types.modifiers.move.cljs$core$IFn$_invoke$arity$2 = (function (modifiers,vector){
app.common.data.macros.runtime_assert(""+"Invalid move vector: "+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vector) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vector) ?? ""),(function (){
return app.common.types.modifiers.valid_vector_QMARK_(vector);
}));

var modifiers__$1 = (function (){var or__5025__auto__ = modifiers;
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.common.types.modifiers.empty();
}
})();
var order = ((modifiers__$1?.last_order?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers__$1,new cljs.core.Keyword(null,"last-order","last-order",203806992))) + (1));
var modifiers__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(modifiers__$1,new cljs.core.Keyword(null,"last-order","last-order",203806992),order);
var G__49961 = modifiers__$2;
if(app.common.types.modifiers.move_vec_QMARK_(vector)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49961,new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678),app.common.types.modifiers.maybe_add_move,app.common.types.modifiers.move_op(order,vector));
} else {
return G__49961;
}
}));

(app.common.types.modifiers.move.cljs$lang$maxFixedArity = 3);

app.common.types.modifiers.resize = (function app$common$types$modifiers$resize(var_args){
var G__49963 = arguments.length;
switch (G__49963) {
case 3:
return app.common.types.modifiers.resize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return app.common.types.modifiers.resize.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return app.common.types.modifiers.resize.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.modifiers.resize.cljs$core$IFn$_invoke$arity$3 = (function (modifiers,vector,origin){
if(app.common.types.modifiers.valid_vector_QMARK_(vector)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(""+"Invalid resize vector: "+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vector) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vector) ?? "")),"\n","(valid-vector? vector)"].join('')));
}

var modifiers__$1 = (function (){var or__5025__auto__ = modifiers;
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.common.types.modifiers.empty();
}
})();
var order = ((modifiers__$1?.last_order?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers__$1,new cljs.core.Keyword(null,"last-order","last-order",203806992))) + (1));
var modifiers__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(modifiers__$1,new cljs.core.Keyword(null,"last-order","last-order",203806992),order);
var G__49964 = modifiers__$2;
if(app.common.types.modifiers.resize_vec_QMARK_(vector)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49964,new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678),app.common.types.modifiers.maybe_add_resize,app.common.types.modifiers.resize_op.cljs$core$IFn$_invoke$arity$3(order,vector,origin));
} else {
return G__49964;
}
}));

(app.common.types.modifiers.resize.cljs$core$IFn$_invoke$arity$5 = (function (modifiers,vector,origin,transform,transform_inverse){
return app.common.types.modifiers.resize.cljs$core$IFn$_invoke$arity$6(modifiers,vector,origin,transform,transform_inverse,null);
}));

(app.common.types.modifiers.resize.cljs$core$IFn$_invoke$arity$6 = (function (modifiers,vector,origin,transform,transform_inverse,p__49965){
var map__49966 = p__49965;
var map__49966__$1 = cljs.core.__destructure_map(map__49966);
var precise_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49966__$1,new cljs.core.Keyword(null,"precise?","precise?",-353383452));
if(app.common.types.modifiers.valid_vector_QMARK_(vector)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(""+"Invalid resize vector: "+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vector) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vector) ?? "")),"\n","(valid-vector? vector)"].join('')));
}

var modifiers__$1 = (function (){var or__5025__auto__ = modifiers;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.modifiers.empty();
}
})();
var order = ((modifiers__$1?.last_order?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers__$1,new cljs.core.Keyword(null,"last-order","last-order",203806992))) + (1));
var modifiers__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(modifiers__$1,new cljs.core.Keyword(null,"last-order","last-order",203806992),order);
var G__49968 = modifiers__$2;
if(cljs.core.truth_((function (){var or__5025__auto__ = precise_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.modifiers.resize_vec_QMARK_(vector);
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49968,new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678),app.common.types.modifiers.maybe_add_resize,app.common.types.modifiers.resize_op.cljs$core$IFn$_invoke$arity$5(order,vector,origin,transform,transform_inverse));
} else {
return G__49968;
}
}));

(app.common.types.modifiers.resize.cljs$lang$maxFixedArity = 6);

app.common.types.modifiers.rotation = (function app$common$types$modifiers$rotation(modifiers,center,angle){
var modifiers__$1 = (function (){var or__5025__auto__ = modifiers;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.modifiers.empty();
}
})();
var order = ((modifiers__$1?.last_order?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers__$1,new cljs.core.Keyword(null,"last-order","last-order",203806992))) + (1));
var modifiers__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(modifiers__$1,new cljs.core.Keyword(null,"last-order","last-order",203806992),order);
var G__49970 = modifiers__$2;
if(cljs.core.not(app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(angle,(0)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49970,new cljs.core.Keyword(null,"structure-child","structure-child",-1244004583),cljs.core.conj,app.common.types.modifiers.rotation_struct_op(angle)),new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678),cljs.core.conj,app.common.types.modifiers.rotation_geom_op(order,center,angle));
} else {
return G__49970;
}
});
app.common.types.modifiers.remove_children = (function app$common$types$modifiers$remove_children(modifiers,shapes){
var G__49971 = (function (){var or__5025__auto__ = modifiers;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.modifiers.empty();
}
})();
if(app.common.data.not_empty_QMARK_(shapes)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49971,new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324),cljs.core.conj,app.common.types.modifiers.remove_children_op(shapes));
} else {
return G__49971;
}
});
app.common.types.modifiers.add_children = (function app$common$types$modifiers$add_children(modifiers,shapes,index){
var G__49974 = (function (){var or__5025__auto__ = modifiers;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.modifiers.empty();
}
})();
if(app.common.data.not_empty_QMARK_(shapes)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49974,new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324),cljs.core.conj,app.common.types.modifiers.add_children_op(shapes,index));
} else {
return G__49974;
}
});
app.common.types.modifiers.reflow = (function app$common$types$modifiers$reflow(modifiers){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var or__5025__auto__ = modifiers;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.modifiers.empty();
}
})(),new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324),cljs.core.conj,app.common.types.modifiers.reflow_op());
});
app.common.types.modifiers.scale_content = (function app$common$types$modifiers$scale_content(modifiers,value){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var or__5025__auto__ = modifiers;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.modifiers.empty();
}
})(),new cljs.core.Keyword(null,"structure-child","structure-child",-1244004583),cljs.core.conj,app.common.types.modifiers.scale_content_op(value));
});
app.common.types.modifiers.change_property = (function app$common$types$modifiers$change_property(modifiers,property,value){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var or__5025__auto__ = modifiers;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.modifiers.empty();
}
})(),new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324),cljs.core.conj,app.common.types.modifiers.change_property_op(property,value));
});
app.common.types.modifiers.concat_geometry = (function app$common$types$modifiers$concat_geometry(operations,other,merge_QMARK_){
if(cljs.core.empty_QMARK_(operations)){
return other;
} else {
if(cljs.core.empty_QMARK_(other)){
return operations;
} else {
var result = operations;
var operations__$1 = cljs.core.seq(other);
while(true){
if(cljs.core.empty_QMARK_(operations__$1)){
return result;
} else {
var current = cljs.core.first(operations__$1);
var result__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = merge_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),(current?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,new cljs.core.Keyword(null,"type","type",1174270348))));
} else {
return and__5023__auto__;
}
})())?app.common.types.modifiers.maybe_add_move(result,current):(cljs.core.truth_((function (){var and__5023__auto__ = merge_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resize","resize",297367086),(current?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,new cljs.core.Keyword(null,"type","type",1174270348))));
} else {
return and__5023__auto__;
}
})())?app.common.types.modifiers.maybe_add_resize.cljs$core$IFn$_invoke$arity$2(result,current):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,current)
));
var G__50182 = result__$1;
var G__50183 = cljs.core.rest(operations__$1);
result = G__50182;
operations__$1 = G__50183;
continue;
}
break;
}

}
}
});
app.common.types.modifiers.increase_order = (function app$common$types$modifiers$increase_order(operations,last_order){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49977_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__49977_SHARP_,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core._PLUS_,last_order);
}),operations);
});
app.common.types.modifiers.add_modifiers = (function app$common$types$modifiers$add_modifiers(modifiers,new_modifiers){
var modifiers__$1 = (function (){var or__5025__auto__ = modifiers;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.modifiers.empty();
}
})();
var new_modifiers__$1 = (function (){var or__5025__auto__ = new_modifiers;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.modifiers.empty();
}
})();
var last_order = (modifiers__$1?.last_order?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers__$1,new cljs.core.Keyword(null,"last-order","last-order",203806992)));
var new_last_order = (new_modifiers__$1?.last_order?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_modifiers__$1,new cljs.core.Keyword(null,"last-order","last-order",203806992)));
var old_geom_child = (modifiers__$1?.geometry_child?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers__$1,new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678)));
var new_geom_child = app.common.types.modifiers.increase_order((new_modifiers__$1?.geometry_child?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_modifiers__$1,new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678))),last_order);
var old_geom_parent = (modifiers__$1?.geometry_parent?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers__$1,new cljs.core.Keyword(null,"geometry-parent","geometry-parent",1427808503)));
var new_geom_parent = app.common.types.modifiers.increase_order((new_modifiers__$1?.geometry_parent?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_modifiers__$1,new cljs.core.Keyword(null,"geometry-parent","geometry-parent",1427808503))),last_order);
var merge_child_QMARK_ = ((cljs.core.empty_QMARK_(new_geom_parent)) && (cljs.core.empty_QMARK_(old_geom_parent)));
var merge_parent_QMARK_ = ((cljs.core.empty_QMARK_(new_geom_child)) && (cljs.core.empty_QMARK_(old_geom_child)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(modifiers__$1,new cljs.core.Keyword(null,"last-order","last-order",203806992),(last_order + new_last_order)),new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678),(function (p1__49980_SHARP_){
return app.common.types.modifiers.concat_geometry(p1__49980_SHARP_,new_geom_child,merge_child_QMARK_);
})),new cljs.core.Keyword(null,"geometry-parent","geometry-parent",1427808503),(function (p1__49981_SHARP_){
return app.common.types.modifiers.concat_geometry(p1__49981_SHARP_,new_geom_parent,merge_parent_QMARK_);
})),new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324),(function (p1__49982_SHARP_){
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__49982_SHARP_,(new_modifiers__$1?.structure_parent?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_modifiers__$1,new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324)))], 0));
})),new cljs.core.Keyword(null,"structure-child","structure-child",-1244004583),(function (p1__49983_SHARP_){
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__49983_SHARP_,(new_modifiers__$1?.structure_child?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_modifiers__$1,new cljs.core.Keyword(null,"structure-child","structure-child",-1244004583)))], 0));
}));
});
app.common.types.modifiers.move_modifiers = (function app$common$types$modifiers$move_modifiers(var_args){
var G__49985 = arguments.length;
switch (G__49985) {
case 2:
return app.common.types.modifiers.move_modifiers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.types.modifiers.move_modifiers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.modifiers.move_modifiers.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return app.common.types.modifiers.move.cljs$core$IFn$_invoke$arity$2(app.common.types.modifiers.empty(),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y));
}));

(app.common.types.modifiers.move_modifiers.cljs$core$IFn$_invoke$arity$1 = (function (vector){
return app.common.types.modifiers.move.cljs$core$IFn$_invoke$arity$2(app.common.types.modifiers.empty(),vector);
}));

(app.common.types.modifiers.move_modifiers.cljs$lang$maxFixedArity = 2);

app.common.types.modifiers.resize_modifiers = (function app$common$types$modifiers$resize_modifiers(var_args){
var G__49987 = arguments.length;
switch (G__49987) {
case 2:
return app.common.types.modifiers.resize_modifiers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return app.common.types.modifiers.resize_modifiers.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.modifiers.resize_modifiers.cljs$core$IFn$_invoke$arity$2 = (function (vector,origin){
return app.common.types.modifiers.resize.cljs$core$IFn$_invoke$arity$3(app.common.types.modifiers.empty(),vector,origin);
}));

(app.common.types.modifiers.resize_modifiers.cljs$core$IFn$_invoke$arity$4 = (function (vector,origin,transform,transform_inverse){
return app.common.types.modifiers.resize.cljs$core$IFn$_invoke$arity$5(app.common.types.modifiers.empty(),vector,origin,transform,transform_inverse);
}));

(app.common.types.modifiers.resize_modifiers.cljs$lang$maxFixedArity = 4);

app.common.types.modifiers.rotation_modifiers = (function app$common$types$modifiers$rotation_modifiers(shape,center,angle){
var shape_center = app.common.geom.shapes.common.shape__GT_center(shape);
var move_vec = app.common.geom.point.transform(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0)),app.common.geom.matrix.rotate.cljs$core$IFn$_invoke$arity$3(app.common.geom.matrix.rotate.cljs$core$IFn$_invoke$arity$3(app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0(),angle,center),(- angle),shape_center));
return app.common.types.modifiers.move.cljs$core$IFn$_invoke$arity$2(app.common.types.modifiers.rotation(app.common.types.modifiers.empty(),shape_center,angle),move_vec);
});
app.common.types.modifiers.reflow_modifiers = (function app$common$types$modifiers$reflow_modifiers(){
return app.common.types.modifiers.reflow(app.common.types.modifiers.empty());
});
app.common.types.modifiers.change_size = (function app$common$types$modifiers$change_size(p__49988,width,height){
var map__49989 = p__49988;
var map__49989__$1 = cljs.core.__destructure_map(map__49989);
var shape = map__49989__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49989__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49989__$1,new cljs.core.Keyword(null,"transform","transform",1381301764));
var transform_inverse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49989__$1,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576));
var map__49990 = app.common.types.modifiers.safe_size_rect(shape);
var map__49990__$1 = cljs.core.__destructure_map(map__49990);
var sr_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49990__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var sr_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49990__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width__$1 = (function (){var or__5025__auto__ = width;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return sr_width;
}
})();
var height__$1 = (function (){var or__5025__auto__ = height;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return sr_height;
}
})();
var origin = cljs.core.first(points);
var scalex = (width__$1 / sr_width);
var scaley = (height__$1 / sr_height);
return app.common.types.modifiers.resize_modifiers.cljs$core$IFn$_invoke$arity$4(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(scalex,scaley),origin,transform,transform_inverse);
});
app.common.types.modifiers.change_dimensions_modifiers = (function app$common$types$modifiers$change_dimensions_modifiers(var_args){
var G__49993 = arguments.length;
switch (G__49993) {
case 3:
return app.common.types.modifiers.change_dimensions_modifiers.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.types.modifiers.change_dimensions_modifiers.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.modifiers.change_dimensions_modifiers.cljs$core$IFn$_invoke$arity$3 = (function (shape,attr,value){
return app.common.types.modifiers.change_dimensions_modifiers.cljs$core$IFn$_invoke$arity$4(shape,attr,value,null);
}));

(app.common.types.modifiers.change_dimensions_modifiers.cljs$core$IFn$_invoke$arity$4 = (function (shape,attr,value,p__49994){
var map__49995 = p__49994;
var map__49995__$1 = cljs.core.__destructure_map(map__49995);
var ignore_lock_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49995__$1,new cljs.core.Keyword(null,"ignore-lock?","ignore-lock?",1533033230),false);
app.common.data.macros.runtime_assert("expr assert: (map? shape)",(function (){
return cljs.core.map_QMARK_(shape);
}));

app.common.data.macros.runtime_assert("expr assert: (#{:width :height} attr)",(function (){
var fexpr__50002 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null);
return (fexpr__50002.cljs$core$IFn$_invoke$arity$1 ? fexpr__50002.cljs$core$IFn$_invoke$arity$1(attr) : fexpr__50002.call(null,attr));
}));

app.common.data.macros.runtime_assert("expr assert: (number? value)",(function (){
return typeof value === 'number';
}));

var value__$1 = (((app.common.math.abs(value) < 0.01))?0.01:value);
var map__50005 = shape;
var map__50005__$1 = cljs.core.__destructure_map(map__50005);
var proportion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50005__$1,new cljs.core.Keyword(null,"proportion","proportion",-1209284230));
var proportion_lock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50005__$1,new cljs.core.Keyword(null,"proportion-lock","proportion-lock",1363898127));
var map__50006 = app.common.types.modifiers.safe_size_rect(shape);
var map__50006__$1 = cljs.core.__destructure_map(map__50006);
var sr_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50006__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var sr_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50006__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var locked_QMARK_ = (function (){var and__5023__auto__ = cljs.core.not(ignore_lock_QMARK_);
if(and__5023__auto__){
return proportion_lock;
} else {
return and__5023__auto__;
}
})();
var width = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"width","width",-384071477)))?value__$1:(cljs.core.truth_(locked_QMARK_)?(value__$1 * proportion):sr_width));
var height = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"height","height",1025178622)))?value__$1:(cljs.core.truth_(locked_QMARK_)?(value__$1 / proportion):sr_height));
var origin = cljs.core.first(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape));
var scalex = (width / sr_width);
var scaley = (height / sr_height);
return app.common.types.modifiers.resize_modifiers.cljs$core$IFn$_invoke$arity$4(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(scalex,scaley),origin,new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$1(shape));
}));

(app.common.types.modifiers.change_dimensions_modifiers.cljs$lang$maxFixedArity = 4);

app.common.types.modifiers.change_orientation_modifiers = (function app$common$types$modifiers$change_orientation_modifiers(shape,orientation){
app.common.data.macros.runtime_assert("expr assert: (map? shape)",(function (){
return cljs.core.map_QMARK_(shape);
}));

app.common.data.macros.runtime_assert("expected a valid orientation",(function (){
var fexpr__50008 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horiz","horiz",-776322169),null,new cljs.core.Keyword(null,"vert","vert",-360932977),null], null), null);
return (fexpr__50008.cljs$core$IFn$_invoke$arity$1 ? fexpr__50008.cljs$core$IFn$_invoke$arity$1(orientation) : fexpr__50008.call(null,orientation));
}));

var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(shape);
var height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(shape);
var new_width = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"horiz","horiz",-776322169)))?(function (){var x__5110__auto__ = width;
var y__5111__auto__ = height;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})():(function (){var x__5113__auto__ = width;
var y__5114__auto__ = height;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})());
var new_height = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"horiz","horiz",-776322169)))?(function (){var x__5113__auto__ = width;
var y__5114__auto__ = height;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})():(function (){var x__5110__auto__ = width;
var y__5111__auto__ = height;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})());
var shape_transform = new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(shape);
var shape_transform_inv = new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$1(shape);
var shape_center = app.common.geom.shapes.common.shape__GT_center(shape);
var map__50009 = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape);
var map__50009__$1 = cljs.core.__destructure_map(map__50009);
var sr_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50009__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var sr_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50009__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var origin = (function (){var G__50010 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape));
if((!((shape_transform == null)))){
return app.common.geom.matrix.transform_point_center(G__50010,shape_center,shape_transform);
} else {
return G__50010;
}
})();
var scalev = app.common.geom.point.divide(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new_width,new_height),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(sr_width,sr_height));
return app.common.types.modifiers.resize_modifiers.cljs$core$IFn$_invoke$arity$4(scalev,origin,shape_transform,shape_transform_inv);
});
app.common.types.modifiers.empty_QMARK_ = (function app$common$types$modifiers$empty_QMARK_(modifiers){
return ((cljs.core.empty_QMARK_((modifiers?.geometry_child?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678))))) && (((cljs.core.empty_QMARK_((modifiers?.geometry_parent?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,new cljs.core.Keyword(null,"geometry-parent","geometry-parent",1427808503))))) && (((cljs.core.empty_QMARK_((modifiers?.structure_parent?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324))))) && (cljs.core.empty_QMARK_((modifiers?.structure_child?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,new cljs.core.Keyword(null,"structure-child","structure-child",-1244004583))))))))));
});
app.common.types.modifiers.child_modifiers_QMARK_ = (function app$common$types$modifiers$child_modifiers_QMARK_(modifiers){
return ((app.common.data.not_empty_QMARK_((modifiers?.geometry_child?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678))))) || (app.common.data.not_empty_QMARK_((modifiers?.structure_child?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,new cljs.core.Keyword(null,"structure-child","structure-child",-1244004583))))));
});
app.common.types.modifiers.has_geometry_QMARK_ = (function app$common$types$modifiers$has_geometry_QMARK_(modifiers){
return ((app.common.data.not_empty_QMARK_((modifiers?.geometry_parent?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,new cljs.core.Keyword(null,"geometry-parent","geometry-parent",1427808503))))) || (app.common.data.not_empty_QMARK_((modifiers?.geometry_child?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678))))));
});
app.common.types.modifiers.has_structure_QMARK_ = (function app$common$types$modifiers$has_structure_QMARK_(p__50013){
var map__50014 = p__50013;
var map__50014__$1 = cljs.core.__destructure_map(map__50014);
var structure_parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50014__$1,new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324));
var structure_child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50014__$1,new cljs.core.Keyword(null,"structure-child","structure-child",-1244004583));
return ((app.common.data.not_empty_QMARK_(structure_parent)) || (app.common.data.not_empty_QMARK_(structure_child)));
});
app.common.types.modifiers.has_structure_child_QMARK_ = (function app$common$types$modifiers$has_structure_child_QMARK_(modifiers){
return app.common.data.not_empty_QMARK_((modifiers?.structure_child?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,new cljs.core.Keyword(null,"structure-child","structure-child",-1244004583))));
});
/**
 * Returns true if there are only move operations
 */
app.common.types.modifiers.only_move_QMARK_ = (function app$common$types$modifiers$only_move_QMARK_(modifiers){
var move_op_QMARK_ = (function (p1__50020_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),(p1__50020_SHARP_?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__50020_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348))));
});
return (((!(app.common.types.modifiers.has_structure_QMARK_(modifiers)))) && (((cljs.core.every_QMARK_(move_op_QMARK_,(modifiers?.geometry_child?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678))))) && (cljs.core.every_QMARK_(move_op_QMARK_,(modifiers?.geometry_parent?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,new cljs.core.Keyword(null,"geometry-parent","geometry-parent",1427808503))))))));
});
app.common.types.modifiers.select_child = (function app$common$types$modifiers$select_child(modifiers){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var or__5025__auto__ = modifiers;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.modifiers.empty();
}
})(),new cljs.core.Keyword(null,"geometry-parent","geometry-parent",1427808503),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324),cljs.core.PersistentVector.EMPTY], 0));
});
app.common.types.modifiers.select_parent = (function app$common$types$modifiers$select_parent(modifiers){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var or__5025__auto__ = modifiers;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.modifiers.empty();
}
})(),new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"structure-child","structure-child",-1244004583),cljs.core.PersistentVector.EMPTY], 0));
});
app.common.types.modifiers.select_structure = (function app$common$types$modifiers$select_structure(modifiers){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var or__5025__auto__ = modifiers;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.modifiers.empty();
}
})(),new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"geometry-parent","geometry-parent",1427808503),cljs.core.PersistentVector.EMPTY], 0));
});
app.common.types.modifiers.select_geometry = (function app$common$types$modifiers$select_geometry(modifiers){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var or__5025__auto__ = modifiers;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.modifiers.empty();
}
})(),new cljs.core.Keyword(null,"structure-child","structure-child",-1244004583),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324),cljs.core.PersistentVector.EMPTY], 0));
});
app.common.types.modifiers.select_child_structre_modifiers = (function app$common$types$modifiers$select_child_structre_modifiers(modifiers){
return app.common.types.modifiers.select_structure(app.common.types.modifiers.select_child(modifiers));
});
/**
 * Returns the frames that have an 'add-children' operation
 */
app.common.types.modifiers.added_children_frames = (function app$common$types$modifiers$added_children_frames(modif_tree){
var structure_changes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__50030){
var vec__50031 = p__50030;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50031,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50031,(1),null);
return (!((new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(val)) == null)));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__50034){
var vec__50035 = p__50034;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50035,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50035,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(val))], null);
}))),modif_tree);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__50038){
var vec__50039 = p__50038;
var frame_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50039,(0),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50039,(1),null);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__50049){
var map__50050 = p__50049;
var map__50050__$1 = cljs.core.__destructure_map(map__50050);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50050__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frame","frame",-1711082588),frame_id,new cljs.core.Keyword(null,"shape","shape",1190694006),id], null);
}),value);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__50051){
var map__50052 = p__50051;
var map__50052__$1 = cljs.core.__destructure_map(map__50052);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50052__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"add-children","add-children",705239943));
}),changes)], 0));
})),structure_changes);
});
/**
 * Transforms a matrix by the translation modifier
 */
app.common.types.modifiers.transform_move_BANG_ = (function app$common$types$modifiers$transform_move_BANG_(matrix,modifier){
return app.common.geom.matrix.multiply_BANG_(app.common.geom.matrix.translate_matrix.cljs$core$IFn$_invoke$arity$1((modifier?.vector?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifier,new cljs.core.Keyword(null,"vector","vector",1902966158)))),matrix);
});
/**
 * Transforms a matrix by the resize modifier
 */
app.common.types.modifiers.transform_resize_BANG_ = (function app$common$types$modifiers$transform_resize_BANG_(matrix,modifier){
var tf = (modifier?.transform?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifier,new cljs.core.Keyword(null,"transform","transform",1381301764)));
var tfi = (modifier?.transform_inverse?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifier,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576)));
var vector = (modifier?.vector?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifier,new cljs.core.Keyword(null,"vector","vector",1902966158)));
var origin = (modifier?.origin?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifier,new cljs.core.Keyword(null,"origin","origin",1037372088)));
var origin__$1 = (((!((tfi == null))))?app.common.geom.point.transform(origin,tfi):origin);
return app.common.geom.matrix.multiply_BANG_((function (){var G__50062 = app.common.geom.matrix.translate_BANG_(app.common.geom.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$2(app.common.geom.matrix.translate_BANG_((function (){var G__50063 = app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0();
if((!((tf == null)))){
return app.common.geom.matrix.multiply_BANG_(G__50063,tf);
} else {
return G__50063;
}
})(),origin__$1),vector),app.common.geom.point.negate(origin__$1));
if((!((tfi == null)))){
return app.common.geom.matrix.multiply_BANG_(G__50062,tfi);
} else {
return G__50062;
}
})(),matrix);
});
/**
 * Transforms a matrix by the rotation modifier
 */
app.common.types.modifiers.transform_rotate_BANG_ = (function app$common$types$modifiers$transform_rotate_BANG_(matrix,modifier){
var center = (modifier?.center?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifier,new cljs.core.Keyword(null,"center","center",-748944368)));
var rotation = (modifier?.rotation?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifier,new cljs.core.Keyword(null,"rotation","rotation",-1728051644)));
return app.common.geom.matrix.multiply_BANG_(app.common.geom.matrix.translate_BANG_(app.common.geom.matrix.multiply_BANG_(app.common.geom.matrix.translate_BANG_(app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0(),center),app.common.geom.matrix.rotate_matrix.cljs$core$IFn$_invoke$arity$1(rotation)),app.common.geom.point.negate(center)),matrix);
});
/**
 * Returns a matrix transformed by the modifier
 */
app.common.types.modifiers.transform_BANG_ = (function app$common$types$modifiers$transform_BANG_(matrix,modifier){
var type = (modifier?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifier,new cljs.core.Keyword(null,"type","type",1174270348)));
var G__50067 = type;
var G__50067__$1 = (((G__50067 instanceof cljs.core.Keyword))?G__50067.fqn:null);
switch (G__50067__$1) {
case "move":
return app.common.types.modifiers.transform_move_BANG_(matrix,modifier);

break;
case "resize":
return app.common.types.modifiers.transform_resize_BANG_(matrix,modifier);

break;
case "rotation":
return app.common.types.modifiers.transform_rotate_BANG_(matrix,modifier);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50067__$1)].join('')));

}
});
app.common.types.modifiers.modifiers__GT_transform1 = (function app$common$types$modifiers$modifiers__GT_transform1(modifiers){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.types.modifiers.transform_BANG_,app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0(),modifiers);
});
/**
 * Given a set of modifiers returns its transformation matrix
 */
app.common.types.modifiers.modifiers__GT_transform = (function app$common$types$modifiers$modifiers__GT_transform(modifiers){
var modifiers__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((modifiers?.geometry_parent?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,new cljs.core.Keyword(null,"geometry-parent","geometry-parent",1427808503))),(modifiers?.geometry_child?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,new cljs.core.Keyword(null,"geometry-child","geometry-child",2018812678))));
var modifiers__$2 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__50071_SHARP_){
return (p1__50071_SHARP_?.order?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__50071_SHARP_,new cljs.core.Keyword(null,"order","order",-1254677256)));
}),modifiers__$1);
return app.common.types.modifiers.modifiers__GT_transform1(modifiers__$2);
});
app.common.types.modifiers.transform_text_node = (function app$common$types$modifiers$transform_text_node(value,attrs){
var font_size = cljs.core.str.cljs$core$IFn$_invoke$arity$1((app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14))) * value));
var letter_spacing = cljs.core.str.cljs$core$IFn$_invoke$arity$1((app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),(0))) * value));
return app.common.data.txt_merge(attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),font_size,new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),letter_spacing], null));
});
app.common.types.modifiers.transform_paragraph_node = (function app$common$types$modifiers$transform_paragraph_node(value,attrs){
var font_size = cljs.core.str.cljs$core$IFn$_invoke$arity$1((app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14))) * value));
return app.common.data.txt_merge(attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),font_size], null));
});
app.common.types.modifiers.update_text_content = (function app$common$types$modifiers$update_text_content(shape,scale_text_content,value){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"content","content",15833224),scale_text_content,value);
});
app.common.types.modifiers.scale_text_content = (function app$common$types$modifiers$scale_text_content(content,value){
return app.common.types.text.transform_nodes.cljs$core$IFn$_invoke$arity$3(app.common.types.text.is_paragraph_node_QMARK_,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.modifiers.transform_paragraph_node,value),app.common.types.text.transform_nodes.cljs$core$IFn$_invoke$arity$3(app.common.types.text.is_text_node_QMARK_,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.modifiers.transform_text_node,value),content));
});
app.common.types.modifiers.apply_scale_content = (function app$common$types$modifiers$apply_scale_content(shape,value){
var value__$1 = app.common.math.abs(value);
var G__50096 = shape;
var G__50096__$1 = ((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?app.common.types.modifiers.update_text_content(G__50096,app.common.types.modifiers.scale_text_content,value__$1):G__50096);
var G__50096__$2 = app.common.geom.shapes.corners.update_corners_scale(G__50096__$1,value__$1)
;
var G__50096__$3 = ((app.common.data.not_empty_QMARK_(new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(shape)))?app.common.geom.shapes.strokes.update_strokes_width(G__50096__$2,value__$1):G__50096__$2);
var G__50096__$4 = ((app.common.data.not_empty_QMARK_(new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(shape)))?app.common.geom.shapes.effects.update_shadows_scale(G__50096__$3,value__$1):G__50096__$3);
var G__50096__$5 = (((!((new cljs.core.Keyword(null,"blur","blur",-453500461).cljs$core$IFn$_invoke$arity$1(shape) == null))))?app.common.geom.shapes.effects.update_blur_scale(G__50096__$4,value__$1):G__50096__$4);
var G__50096__$6 = ((app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?app.common.types.shape.layout.update_flex_scale(G__50096__$5,value__$1):G__50096__$5);
var G__50096__$7 = ((app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?app.common.types.shape.layout.update_grid_scale(G__50096__$6,value__$1):G__50096__$6);
return app.common.types.shape.layout.update_flex_child(G__50096__$7,value__$1);

});
app.common.types.modifiers.remove_children_set = (function app$common$types$modifiers$remove_children_set(shapes,children_to_remove){
var remove_QMARK_ = cljs.core.set(children_to_remove);
return app.common.data.removev(remove_QMARK_,shapes);
});
app.common.types.modifiers.apply_modifier = (function app$common$types$modifiers$apply_modifier(shape,operation){
var type = (operation?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(operation,new cljs.core.Keyword(null,"type","type",1174270348)));
var G__50112 = type;
var G__50112__$1 = (((G__50112 instanceof cljs.core.Keyword))?G__50112.fqn:null);
switch (G__50112__$1) {
case "rotation":
var rotation = (operation?.value?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(operation,new cljs.core.Keyword(null,"value","value",305978217)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(function (p1__50110_SHARP_){
return cljs.core.mod(((function (){var or__5025__auto__ = p1__50110_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})() + rotation),(360));
}));

break;
case "add-children":
var value = (operation?.value?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(operation,new cljs.core.Keyword(null,"value","value",305978217)));
var index = (operation?.index?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(operation,new cljs.core.Keyword(null,"index","index",-1531685915)));
var shape__$1 = (((!((index == null))))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"shapes","shapes",1897594879),(function (shapes){
if(cljs.core.vector_QMARK_(shapes)){
return app.common.data.insert_at_index(shapes,index,value);
} else {
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(shapes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
}
})):cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"shapes","shapes",1897594879),app.common.data.concat_vec,value));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879),(function (p1__50111_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_set,p1__50111_SHARP_));
}));

break;
case "remove-children":
var value = (operation?.value?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(operation,new cljs.core.Keyword(null,"value","value",305978217)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"shapes","shapes",1897594879),app.common.types.modifiers.remove_children_set,value);

break;
case "scale-content":
var value = (operation?.value?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(operation,new cljs.core.Keyword(null,"value","value",305978217)));
return app.common.types.modifiers.apply_scale_content(shape,value);

break;
case "change-property":
var property = (operation?.property?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(operation,new cljs.core.Keyword(null,"property","property",-1114278232)));
var value = (operation?.value?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(operation,new cljs.core.Keyword(null,"value","value",305978217)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,property,value);

break;
default:
return shape;

}
});
/**
 * Apply structure changes to a shape
 */
app.common.types.modifiers.apply_structure_modifiers = (function app$common$types$modifiers$apply_structure_modifiers(shape,modifiers){
var $ = shape;
var $__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.types.modifiers.apply_modifier,$,(modifiers?.structure_parent?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324))));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.types.modifiers.apply_modifier,$__$1,(modifiers?.structure_child?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,new cljs.core.Keyword(null,"structure-child","structure-child",-1244004583))));
});

//# sourceMappingURL=app.common.types.modifiers.js.map
