import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.proportions.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.record.js";
import "./app.common.schema.js";
import "./app.common.schema.generators.js";
import "./app.common.transit.js";
import "./app.common.types.color.js";
import "./app.common.types.fills.js";
import "./app.common.types.grid.js";
import "./app.common.types.path.js";
import "./app.common.types.plugins.js";
import "./app.common.types.shape.attrs.js";
import "./app.common.types.shape.blur.js";
import "./app.common.types.shape.export.js";
import "./app.common.types.shape.interactions.js";
import "./app.common.types.shape.layout.js";
import "./app.common.types.shape.shadow.js";
import "./app.common.types.shape.text.js";
import "./app.common.types.text.js";
import "./app.common.types.token.js";
import "./app.common.types.variant.js";
import "./app.common.uuid.js";
import "./clojure.set.js";
goog.provide('app.common.types.shape');
if((typeof app !== 'undefined') && (typeof app.common !== 'undefined') && (typeof app.common.types !== 'undefined') && (typeof app.common.types.shape !== 'undefined') && (typeof app.common.types.shape._STAR_shape_changes_STAR_ !== 'undefined')){
} else {
app.common.types.shape._STAR_shape_changes_STAR_ = null;
}
if((typeof app !== 'undefined') && (typeof app.common !== 'undefined') && (typeof app.common.types !== 'undefined') && (typeof app.common.types.shape !== 'undefined') && (typeof app.common.types.shape.wasm_enabled_QMARK_ !== 'undefined')){
} else {
app.common.types.shape.wasm_enabled_QMARK_ = false;
}
if((typeof app !== 'undefined') && (typeof app.common !== 'undefined') && (typeof app.common.types !== 'undefined') && (typeof app.common.types.shape !== 'undefined') && (typeof app.common.types.shape.wasm_create_shape !== 'undefined')){
} else {
app.common.types.shape.wasm_create_shape = cljs.core.constantly(null);
}

/**
 * @interface
 */
app.common.types.shape.IShape = function(){};


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
 * @implements {app.common.types.shape.IShape}
 * @implements {cljs.core.ITransientAssociative}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.common.types.shape.Shape = (function (id,name,type,x,y,width,height,rotation,selrect,points,transform,transform_inverse,parent_id,frame_id,flip_x,flip_y,$meta,$extmap,$hash){
this.id = id;
this.name = name;
this.type = type;
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.rotation = rotation;
this.selrect = selrect;
this.points = points;
this.transform = transform;
this.transform_inverse = transform_inverse;
this.parent_id = parent_id;
this.frame_id = frame_id;
this.flip_x = flip_x;
this.flip_y = flip_y;
this.$meta = $meta;
this.$extmap = $extmap;
this.$hash = $hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139280;
});
(app.common.types.shape.Shape.prototype.app$common$types$shape$IShape$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.shape.Shape.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this$,f__45940__auto__,init__45941__auto__){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__45942__auto__,p__50882){
var vec__50883 = p__50882;
var key_50879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50883,(0),null);
var v__45943__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50883,(1),null);
return (f__45940__auto__.cljs$core$IFn$_invoke$arity$3 ? f__45940__auto__.cljs$core$IFn$_invoke$arity$3(ret__45942__auto__,key_50879,v__45943__auto__) : f__45940__auto__.call(null,ret__45942__auto__,key_50879,v__45943__auto__));
}),init__45941__auto__,this$__$1);
}));

(app.common.types.shape.Shape.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((this$__$1 === other)) || ((((!((other == null)))) && ((((this$__$1.constructor === other.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.id,other.id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.name,other.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.type,other.type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.x,other.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.y,other.y)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.width,other.width)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.height,other.height)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.rotation,other.rotation)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.selrect,other.selrect)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.points,other.points)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.transform,other.transform)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.transform_inverse,other.transform_inverse)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.parent_id,other.parent_id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.frame_id,other.frame_id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.flip_x,other.flip_x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.flip_y,other.flip_y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.$extmap,other.$extmap)))))))))))))))))))))))))))))))))))))));
}));

(app.common.types.shape.Shape.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__45882__auto__ = this$__$1.$hash;
if((!((h__45882__auto__ == null)))){
return h__45882__auto__;
} else {
var h__45882__auto____$1 = (function (coll__45932__auto__){
return (-1623361444 ^ cljs.core.hash_unordered_coll(coll__45932__auto__));
})(this$__$1);
(this$__$1.$hash = h__45882__auto____$1);

return h__45882__auto____$1;
}
}));

(app.common.types.shape.Shape.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,val_50880){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(val_50880)){
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(val_50880,(0)),cljs.core._nth(val_50880,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,val_50880);
}
}));

(app.common.types.shape.Shape.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (16 + cljs.core.count(this$__$1.$extmap));
}));

(app.common.types.shape.Shape.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),this$__$1.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),this$__$1.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),this$__$1.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),this$__$1.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),this$__$1.y,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"width","width",-384071477),this$__$1.width,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"height","height",1025178622),this$__$1.height,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rotation","rotation",-1728051644),this$__$1.rotation,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"selrect","selrect",1966287292),this$__$1.selrect,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"points","points",-1486596883),this$__$1.points,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transform","transform",1381301764),this$__$1.transform,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576),this$__$1.transform_inverse,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),this$__$1.parent_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),this$__$1.frame_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"flip-x","flip-x",891276861),this$__$1.flip_x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"flip-y","flip-y",935998815),this$__$1.flip_y,null))], null),this$__$1.$extmap));
}));

(app.common.types.shape.Shape.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.$meta;
}));

(app.common.types.shape.Shape.prototype.app$common$record$ICustomRecordEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.shape.Shape.prototype.app$common$record$ICustomRecordEquiv$_equiv_with_exceptions$arity$3 = (function (this$,other,exceptions){
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
var and__5023__auto____$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.id,other.id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.name,other.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.type,other.type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.x,other.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.y,other.y)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.width,other.width)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.height,other.height)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.rotation,other.rotation)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.selrect,other.selrect)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.points,other.points)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.transform,other.transform)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.transform_inverse,other.transform_inverse)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.parent_id,other.parent_id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.frame_id,other.frame_id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.flip_x,other.flip_x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.flip_y,other.flip_y)) && ((cljs.core.count(this$__$1.$extmap) === cljs.core.count(other.$extmap))))))))))))))))))))))))))))))))));
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

(app.common.types.shape.Shape.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new app.common.types.shape.Shape(this$__$1.id,this$__$1.name,this$__$1.type,this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.rotation,this$__$1.selrect,this$__$1.points,this$__$1.transform,this$__$1.transform_inverse,this$__$1.parent_id,this$__$1.frame_id,this$__$1.flip_x,this$__$1.flip_y,this$__$1.$meta,this$__$1.$extmap,this$__$1.$hash));
}));

(app.common.types.shape.Shape.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer__46013__auto__,opts__46014__auto__){
var self__ = this;
var this$__$1 = this;
var pr_pair__46015__auto__ = (function (keyval__46017__auto__){
return cljs.core.pr_sequential_writer(writer__46013__auto__,cljs.core.pr_writer,""," ","",opts__46014__auto__,keyval__46017__auto__);
});
return cljs.core.pr_sequential_writer(writer__46013__auto__,pr_pair__46015__auto__,"#app.common.types.shape.Shape{",", ","}",opts__46014__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),this$__$1.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),this$__$1.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),this$__$1.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),this$__$1.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),this$__$1.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),this$__$1.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),this$__$1.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rotation","rotation",-1728051644),this$__$1.rotation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selrect","selrect",1966287292),this$__$1.selrect],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),this$__$1.points],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform","transform",1381301764),this$__$1.transform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576),this$__$1.transform_inverse],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),this$__$1.parent_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),this$__$1.frame_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"flip-x","flip-x",891276861),this$__$1.flip_x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"flip-y","flip-y",935998815),this$__$1.flip_y],null))], null),this$__$1.$extmap));
}));

(app.common.types.shape.Shape.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.RecordIter((0),this$__$1,16,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"selrect","selrect",1966287292),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"flip-x","flip-x",891276861),new cljs.core.Keyword(null,"flip-y","flip-y",935998815)], null),(cljs.core.truth_(this$__$1.$extmap)?cljs.core._iterator(this$__$1.$extmap):cljs.core.nil_iter())));
}));

(app.common.types.shape.Shape.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (this$,key_50879,val_50880){
var self__ = this;
var this$__$1 = this;
var key__45937__auto__ = (((key_50879 instanceof cljs.core.Keyword))?key_50879.fqn:key_50879);
var G__50888_50984 = key_50879;
var G__50888_50985__$1 = (((G__50888_50984 instanceof cljs.core.Keyword))?G__50888_50984.fqn:null);
switch (G__50888_50985__$1) {
case "id":
(this$__$1.id = val_50880);

break;
case "name":
(this$__$1.name = val_50880);

break;
case "type":
(this$__$1.type = val_50880);

break;
case "x":
(this$__$1.x = val_50880);

break;
case "y":
(this$__$1.y = val_50880);

break;
case "width":
(this$__$1.width = val_50880);

break;
case "height":
(this$__$1.height = val_50880);

break;
case "rotation":
(this$__$1.rotation = val_50880);

break;
case "selrect":
(this$__$1.selrect = val_50880);

break;
case "points":
(this$__$1.points = val_50880);

break;
case "transform":
(this$__$1.transform = val_50880);

break;
case "transform-inverse":
(this$__$1.transform_inverse = val_50880);

break;
case "parent-id":
(this$__$1.parent_id = val_50880);

break;
case "frame-id":
(this$__$1.frame_id = val_50880);

break;
case "flip-x":
(this$__$1.flip_x = val_50880);

break;
case "flip-y":
(this$__$1.flip_y = val_50880);

break;
default:
(this$__$1.$extmap = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1.$extmap,key_50879,val_50880));

}

return this$__$1;
}));

(app.common.types.shape.Shape.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,val_50880){
var self__ = this;
var this$__$1 = this;
return (new app.common.types.shape.Shape(this$__$1.id,this$__$1.name,this$__$1.type,this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.rotation,this$__$1.selrect,this$__$1.points,this$__$1.transform,this$__$1.transform_inverse,this$__$1.parent_id,this$__$1.frame_id,this$__$1.flip_x,this$__$1.flip_y,val_50880,this$__$1.$extmap,this$__$1.$hash));
}));

(app.common.types.shape.Shape.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,key_50879){
var self__ = this;
var this$__$1 = this;
var G__50889 = key_50879;
var G__50889__$1 = (((G__50889 instanceof cljs.core.Keyword))?G__50889.fqn:null);
switch (G__50889__$1) {
case "id":
case "name":
case "type":
case "x":
case "y":
case "width":
case "height":
case "rotation":
case "selrect":
case "points":
case "transform":
case "transform-inverse":
case "parent-id":
case "frame-id":
case "flip-x":
case "flip-y":
return true;

break;
default:
return cljs.core.contains_QMARK_(this$__$1.$extmap,key_50879);

}
}));

(app.common.types.shape.Shape.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,key_50879,val_50880){
var self__ = this;
var this$__$1 = this;
var G__50890 = key_50879;
var G__50890__$1 = (((G__50890 instanceof cljs.core.Keyword))?G__50890.fqn:null);
switch (G__50890__$1) {
case "id":
return (new app.common.types.shape.Shape(val_50880,this$__$1.name,this$__$1.type,this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.rotation,this$__$1.selrect,this$__$1.points,this$__$1.transform,this$__$1.transform_inverse,this$__$1.parent_id,this$__$1.frame_id,this$__$1.flip_x,this$__$1.flip_y,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "name":
return (new app.common.types.shape.Shape(this$__$1.id,val_50880,this$__$1.type,this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.rotation,this$__$1.selrect,this$__$1.points,this$__$1.transform,this$__$1.transform_inverse,this$__$1.parent_id,this$__$1.frame_id,this$__$1.flip_x,this$__$1.flip_y,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "type":
return (new app.common.types.shape.Shape(this$__$1.id,this$__$1.name,val_50880,this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.rotation,this$__$1.selrect,this$__$1.points,this$__$1.transform,this$__$1.transform_inverse,this$__$1.parent_id,this$__$1.frame_id,this$__$1.flip_x,this$__$1.flip_y,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "x":
return (new app.common.types.shape.Shape(this$__$1.id,this$__$1.name,this$__$1.type,val_50880,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.rotation,this$__$1.selrect,this$__$1.points,this$__$1.transform,this$__$1.transform_inverse,this$__$1.parent_id,this$__$1.frame_id,this$__$1.flip_x,this$__$1.flip_y,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "y":
return (new app.common.types.shape.Shape(this$__$1.id,this$__$1.name,this$__$1.type,this$__$1.x,val_50880,this$__$1.width,this$__$1.height,this$__$1.rotation,this$__$1.selrect,this$__$1.points,this$__$1.transform,this$__$1.transform_inverse,this$__$1.parent_id,this$__$1.frame_id,this$__$1.flip_x,this$__$1.flip_y,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "width":
return (new app.common.types.shape.Shape(this$__$1.id,this$__$1.name,this$__$1.type,this$__$1.x,this$__$1.y,val_50880,this$__$1.height,this$__$1.rotation,this$__$1.selrect,this$__$1.points,this$__$1.transform,this$__$1.transform_inverse,this$__$1.parent_id,this$__$1.frame_id,this$__$1.flip_x,this$__$1.flip_y,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "height":
return (new app.common.types.shape.Shape(this$__$1.id,this$__$1.name,this$__$1.type,this$__$1.x,this$__$1.y,this$__$1.width,val_50880,this$__$1.rotation,this$__$1.selrect,this$__$1.points,this$__$1.transform,this$__$1.transform_inverse,this$__$1.parent_id,this$__$1.frame_id,this$__$1.flip_x,this$__$1.flip_y,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "rotation":
return (new app.common.types.shape.Shape(this$__$1.id,this$__$1.name,this$__$1.type,this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,val_50880,this$__$1.selrect,this$__$1.points,this$__$1.transform,this$__$1.transform_inverse,this$__$1.parent_id,this$__$1.frame_id,this$__$1.flip_x,this$__$1.flip_y,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "selrect":
return (new app.common.types.shape.Shape(this$__$1.id,this$__$1.name,this$__$1.type,this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.rotation,val_50880,this$__$1.points,this$__$1.transform,this$__$1.transform_inverse,this$__$1.parent_id,this$__$1.frame_id,this$__$1.flip_x,this$__$1.flip_y,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "points":
return (new app.common.types.shape.Shape(this$__$1.id,this$__$1.name,this$__$1.type,this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.rotation,this$__$1.selrect,val_50880,this$__$1.transform,this$__$1.transform_inverse,this$__$1.parent_id,this$__$1.frame_id,this$__$1.flip_x,this$__$1.flip_y,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "transform":
return (new app.common.types.shape.Shape(this$__$1.id,this$__$1.name,this$__$1.type,this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.rotation,this$__$1.selrect,this$__$1.points,val_50880,this$__$1.transform_inverse,this$__$1.parent_id,this$__$1.frame_id,this$__$1.flip_x,this$__$1.flip_y,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "transform-inverse":
return (new app.common.types.shape.Shape(this$__$1.id,this$__$1.name,this$__$1.type,this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.rotation,this$__$1.selrect,this$__$1.points,this$__$1.transform,val_50880,this$__$1.parent_id,this$__$1.frame_id,this$__$1.flip_x,this$__$1.flip_y,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "parent-id":
return (new app.common.types.shape.Shape(this$__$1.id,this$__$1.name,this$__$1.type,this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.rotation,this$__$1.selrect,this$__$1.points,this$__$1.transform,this$__$1.transform_inverse,val_50880,this$__$1.frame_id,this$__$1.flip_x,this$__$1.flip_y,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "frame-id":
return (new app.common.types.shape.Shape(this$__$1.id,this$__$1.name,this$__$1.type,this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.rotation,this$__$1.selrect,this$__$1.points,this$__$1.transform,this$__$1.transform_inverse,this$__$1.parent_id,val_50880,this$__$1.flip_x,this$__$1.flip_y,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "flip-x":
return (new app.common.types.shape.Shape(this$__$1.id,this$__$1.name,this$__$1.type,this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.rotation,this$__$1.selrect,this$__$1.points,this$__$1.transform,this$__$1.transform_inverse,this$__$1.parent_id,this$__$1.frame_id,val_50880,this$__$1.flip_y,this$__$1.$meta,this$__$1.$extmap,null));

break;
case "flip-y":
return (new app.common.types.shape.Shape(this$__$1.id,this$__$1.name,this$__$1.type,this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.rotation,this$__$1.selrect,this$__$1.points,this$__$1.transform,this$__$1.transform_inverse,this$__$1.parent_id,this$__$1.frame_id,this$__$1.flip_x,val_50880,this$__$1.$meta,this$__$1.$extmap,null));

break;
default:
return (new app.common.types.shape.Shape(this$__$1.id,this$__$1.name,this$__$1.type,this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.rotation,this$__$1.selrect,this$__$1.points,this$__$1.transform,this$__$1.transform_inverse,this$__$1.parent_id,this$__$1.frame_id,this$__$1.flip_x,this$__$1.flip_y,this$__$1.$meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1.$extmap,key_50879,val_50880),null));

}
}));

(app.common.types.shape.Shape.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,key_50879){
var self__ = this;
var this$__$1 = this;
var G__50891 = key_50879;
var G__50891__$1 = (((G__50891 instanceof cljs.core.Keyword))?G__50891.fqn:null);
switch (G__50891__$1) {
case "id":
case "name":
case "type":
case "x":
case "y":
case "width":
case "height":
case "rotation":
case "selrect":
case "points":
case "transform":
case "transform-inverse":
case "parent-id":
case "frame-id":
case "flip-x":
case "flip-y":
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,key_50879,null);

break;
default:
var extmap1__45938__auto__ = this$__$1.$extmap;
var extmap2__45939__auto__ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(extmap1__45938__auto__,key_50879);
if((extmap1__45938__auto__ === extmap2__45939__auto__)){
return this$__$1;
} else {
return (new app.common.types.shape.Shape(this$__$1.id,this$__$1.name,this$__$1.type,this$__$1.x,this$__$1.y,this$__$1.width,this$__$1.height,this$__$1.rotation,this$__$1.selrect,this$__$1.points,this$__$1.transform,this$__$1.transform_inverse,this$__$1.parent_id,this$__$1.frame_id,this$__$1.flip_x,this$__$1.flip_y,this$__$1.$meta,cljs.core.not_empty(extmap2__45939__auto__),null));
}

}
}));

(app.common.types.shape.Shape.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k__45934__auto__){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k__45934__auto__,null);
}));

(app.common.types.shape.Shape.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,key_50879,else__45935__auto__){
var self__ = this;
var this$__$1 = this;
var G__50892 = key_50879;
var G__50892__$1 = (((G__50892 instanceof cljs.core.Keyword))?G__50892.fqn:null);
switch (G__50892__$1) {
case "id":
return this$__$1.id;

break;
case "name":
return this$__$1.name;

break;
case "type":
return this$__$1.type;

break;
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
case "rotation":
return this$__$1.rotation;

break;
case "selrect":
return this$__$1.selrect;

break;
case "points":
return this$__$1.points;

break;
case "transform":
return this$__$1.transform;

break;
case "transform-inverse":
return this$__$1.transform_inverse;

break;
case "parent-id":
return this$__$1.parent_id;

break;
case "frame-id":
return this$__$1.frame_id;

break;
case "flip-x":
return this$__$1.flip_x;

break;
case "flip-y":
return this$__$1.flip_y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(this$__$1.$extmap,key_50879,else__45935__auto__);

}
}));

(app.common.types.shape.Shape.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"rotation","rotation",-87520117,null),new cljs.core.Symbol(null,"selrect","selrect",-688148477,null),new cljs.core.Symbol(null,"points","points",153934644,null),new cljs.core.Symbol(null,"transform","transform",-1273134005,null),new cljs.core.Symbol(null,"transform-inverse","transform-inverse",-1421313193,null),new cljs.core.Symbol(null,"parent-id","parent-id",239802396,null),new cljs.core.Symbol(null,"frame-id","frame-id",1004159455,null),new cljs.core.Symbol(null,"flip-x","flip-x",-1763158908,null),new cljs.core.Symbol(null,"flip-y","flip-y",-1718436954,null),new cljs.core.Symbol(null,"$meta","$meta",427370151,null),new cljs.core.Symbol(null,"$extmap","$extmap",962221828,null),new cljs.core.Symbol(null,"$hash","$hash",2001710882,null)], null);
}));

(app.common.types.shape.Shape.cljs$lang$type = true);

(app.common.types.shape.Shape.cljs$lang$ctorStr = "app.common.types.shape/Shape");

(app.common.types.shape.Shape.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.common.types.shape/Shape");
}));

/**
 * Positional factory function for app.common.types.shape/Shape.
 */
app.common.types.shape.__GT_Shape = (function app$common$types$shape$__GT_Shape(id,name,type,x,y,width,height,rotation,selrect,points,transform,transform_inverse,parent_id,frame_id,flip_x,flip_y,$meta,$extmap,$hash){
return (new app.common.types.shape.Shape(id,name,type,x,y,width,height,rotation,selrect,points,transform,transform_inverse,parent_id,frame_id,flip_x,flip_y,$meta,$extmap,$hash));
});


app.common.types.shape.pos__GT_Shape = (function app$common$types$shape$pos__GT_Shape(id,name,type,x,y,width,height,rotation,selrect,points,transform,transform_inverse,parent_id,frame_id,flip_x,flip_y){
return (new app.common.types.shape.Shape(id,name,type,x,y,width,height,rotation,selrect,points,transform,transform_inverse,parent_id,frame_id,flip_x,flip_y,null,null,null));
});

app.common.types.shape.map__GT_Shape = (function app$common$types$shape$map__GT_Shape(param_50878){
var exclude__46023__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"transform","transform",1381301764),null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"points","points",-1486596883),null,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),null,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"selrect","selrect",1966287292),null,new cljs.core.Keyword(null,"flip-x","flip-x",891276861),null,new cljs.core.Keyword(null,"height","height",1025178622),null,new cljs.core.Keyword(null,"flip-y","flip-y",935998815),null], null), null);
var extmap__46024__auto__ = cljs.core.reduce_kv((function (acc__46025__auto__,k__46026__auto__,v__46027__auto__){
if(cljs.core.contains_QMARK_(exclude__46023__auto__,k__46026__auto__)){
return acc__46025__auto__;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__46025__auto__,k__46026__auto__,v__46027__auto__);
}
}),cljs.core.PersistentArrayMap.EMPTY,param_50878);
return (new app.common.types.shape.Shape(cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_50878,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_50878,new cljs.core.Keyword(null,"name","name",1843675177)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_50878,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_50878,new cljs.core.Keyword(null,"x","x",2099068185)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_50878,new cljs.core.Keyword(null,"y","y",-1757859776)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_50878,new cljs.core.Keyword(null,"width","width",-384071477)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_50878,new cljs.core.Keyword(null,"height","height",1025178622)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_50878,new cljs.core.Keyword(null,"rotation","rotation",-1728051644)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_50878,new cljs.core.Keyword(null,"selrect","selrect",1966287292)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_50878,new cljs.core.Keyword(null,"points","points",-1486596883)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_50878,new cljs.core.Keyword(null,"transform","transform",1381301764)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_50878,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_50878,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_50878,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_50878,new cljs.core.Keyword(null,"flip-x","flip-x",891276861)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(param_50878,new cljs.core.Keyword(null,"flip-y","flip-y",935998815)),null,cljs.core.not_empty(extmap__46024__auto__),null));
});

app.common.types.shape.shape_QMARK_ = (function app$common$types$shape$shape_QMARK_(o){
if((!((o == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === o.app$common$types$shape$IShape$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * A low level function that creates a Shape data structure
 *   from a attrs map without performing other transformations
 */
app.common.types.shape.create_shape = (function app$common$types$shape$create_shape(attrs){
if(app.common.types.shape.wasm_enabled_QMARK_){
return app.common.types.shape.wasm_create_shape(attrs);
} else {
return app.common.types.shape.map__GT_Shape(attrs);
}
});
app.common.types.shape.stroke_caps_line = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"round","round",2009433328),null,new cljs.core.Keyword(null,"square","square",812434677),null], null), null);
app.common.types.shape.stroke_caps_marker = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-arrow","line-arrow",-1440558012),null,new cljs.core.Keyword(null,"diamond-marker","diamond-marker",-496524178),null,new cljs.core.Keyword(null,"triangle-arrow","triangle-arrow",270775124),null,new cljs.core.Keyword(null,"circle-marker","circle-marker",-241178759),null,new cljs.core.Keyword(null,"square-marker","square-marker",-789240803),null], null), null);
app.common.types.shape.stroke_caps = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.set.union.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.stroke_caps_line,app.common.types.shape.stroke_caps_marker),null);
app.common.types.shape.shape_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"group","group",582596132),null,new cljs.core.Keyword(null,"frame","frame",-1711082588),null,new cljs.core.Keyword(null,"circle","circle",1903212362),null,new cljs.core.Keyword(null,"svg-raw","svg-raw",-594329202),null,new cljs.core.Keyword(null,"image","image",-58725096),null,new cljs.core.Keyword(null,"bool","bool",1444635321),null,new cljs.core.Keyword(null,"rect","rect",-108902628),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
app.common.types.shape.blend_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"hue","hue",-508078848),null,new cljs.core.Keyword(null,"screen","screen",1990059748),null,new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"darken","darken",1770242949),null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),null,new cljs.core.Keyword(null,"lighten","lighten",-234464980),null,new cljs.core.Keyword(null,"normal","normal",-1519123858),null,new cljs.core.Keyword(null,"overlay","overlay",-139131598),null,new cljs.core.Keyword(null,"difference","difference",1916101396),null,new cljs.core.Keyword(null,"luminosity","luminosity",-483901643),null,new cljs.core.Keyword(null,"exclusion","exclusion",531897910),null,new cljs.core.Keyword(null,"hard-light","hard-light",-37591145),null,new cljs.core.Keyword(null,"multiply","multiply",-1036907048),null,new cljs.core.Keyword(null,"soft-light","soft-light",513207899),null,new cljs.core.Keyword(null,"color-dodge","color-dodge",-1461064835),null,new cljs.core.Keyword(null,"color-burn","color-burn",-540235169),null], null), null);
app.common.types.shape.horizontal_constraint_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"scale","scale",-230427353),null,new cljs.core.Keyword(null,"center","center",-748944368),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"leftright","leftright",1894963129),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null);
app.common.types.shape.vertical_constraint_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null,new cljs.core.Keyword(null,"scale","scale",-230427353),null,new cljs.core.Keyword(null,"top","top",-1856271961),null,new cljs.core.Keyword(null,"center","center",-748944368),null,new cljs.core.Keyword(null,"topbottom","topbottom",207067417),null], null), null);
app.common.types.shape.text_align_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["right",null,"justify",null,"center",null,"left",null], null), null);
app.common.types.shape.bool_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"exclude","exclude",-1230250334),null,new cljs.core.Keyword(null,"intersection","intersection",2003891010),null,new cljs.core.Keyword(null,"difference","difference",1916101396),null,new cljs.core.Keyword(null,"union","union",2142937499),null], null), null);
app.common.types.shape.grow_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-height","auto-height",-960519663),null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),null,new cljs.core.Keyword(null,"auto-width","auto-width",-992925188),null], null), null);
app.common.types.shape.schema_COLON_points = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("gen","max","gen/max",61264228),(4),new cljs.core.Keyword("gen","min","gen/min",444569458),(4)], null),new cljs.core.Keyword("app.common.geom.point","point","app.common.geom.point/point",1811057644)], null);
/**
 * A set used for proper check if color should contain only one of the
 *   attrs listed in this set.
 */
app.common.types.shape.valid_stroke_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214),null,new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),null,new cljs.core.Keyword(null,"stroke-color-gradient","stroke-color-gradient",-195812260),null], null), null);
/**
 * Check if color has correct color attrs
 */
app.common.types.shape.has_valid_stroke_attrs_QMARK_ = (function app$common$types$shape$has_valid_stroke_attrs_QMARK_(color){
var attrs = cljs.core.set(cljs.core.keys(color));
var result = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(attrs,app.common.types.shape.valid_stroke_attrs);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(result));
});
app.common.types.shape.schema_COLON_stroke_attrs = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"StrokeAttrs",new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke-color-ref-file","stroke-color-ref-file",2014652279),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke-color-ref-id","stroke-color-ref-id",1785439761),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"solid","solid",-2023773691),null,new cljs.core.Keyword(null,"mixed","mixed",737211760),null,new cljs.core.Keyword(null,"dashed","dashed",-1449249319),null,new cljs.core.Keyword(null,"dotted","dotted",-1504510307),null], null), null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),null,new cljs.core.Keyword(null,"inner","inner",-1383171215),null,new cljs.core.Keyword(null,"outer","outer",-375185956),null], null), null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke-cap-start","stroke-cap-start",-2018645757),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.stroke_caps], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke-cap-end","stroke-cap-end",-411370737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.stroke_caps], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.color.schema_COLON_hex_color], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke-color-gradient","stroke-color-gradient",-195812260),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.color.schema_COLON_gradient], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.color.schema_COLON_image], null)], null);
/**
 * A set of attrs that corresponds to stroke data type
 */
app.common.types.shape.stroke_attrs = app.common.schema.keys(app.common.types.shape.schema_COLON_stroke_attrs);
app.common.types.shape.schema_COLON_stroke = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),app.common.types.shape.schema_COLON_stroke_attrs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.types.shape.has_valid_stroke_attrs_QMARK_], null)], null);
app.common.types.shape.check_stroke = app.common.schema.check_fn(app.common.types.shape.schema_COLON_stroke);
app.common.types.shape.schema_COLON_shape_base_attrs = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"ShapeMinimalRecord"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.shape_types], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selrect","selrect",1966287292),new cljs.core.Keyword("app.common.geom.rect","rect","app.common.geom.rect/rect",-1838463012)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883),app.common.types.shape.schema_COLON_points], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword("app.common.geom.matrix","matrix","app.common.geom.matrix/matrix",-2125853053)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576),new cljs.core.Keyword("app.common.geom.matrix","matrix","app.common.geom.matrix/matrix",-2125853053)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null);
app.common.types.shape.schema_COLON_shape_geom_attrs = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"ShapeGeometryAttrs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null)], null);
app.common.types.shape.schema_COLON_shape_generic_attrs = cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"ShapeGenericAttrs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-file","component-file",-1378670433),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-root","component-root",-485271026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-instance","main-instance",476264761),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-synced","remote-synced",1564821477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocked","blocked",181326681),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locked","locked",-1658763820),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"masked-group","masked-group",1899947873),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fills","fills",902966780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.fills.schema_COLON_fills], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proportion","proportion",-1209284230),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proportion-lock","proportion-lock",1363898127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.horizontal_constraint_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.vertical_constraint_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fixed-scroll","fixed-scroll",-83520691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r4","r4",1134323163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grids","grids",44187194),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","max","gen/max",61264228),(2)], null),app.common.types.grid.schema_COLON_grid], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exports","exports",-745008272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","max","gen/max",61264228),(2)], null),app.common.types.shape.export$.schema_COLON_export], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","max","gen/max",61264228),(2)], null),app.common.types.shape.schema_COLON_stroke], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.blend_modes], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interactions","interactions",550841811),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","max","gen/max",61264228),(2)], null),app.common.types.shape.interactions.schema_COLON_interaction], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","max","gen/max",61264228),(1)], null),app.common.types.shape.shadow.schema_COLON_shadow], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.shape.blur.schema_COLON_blur], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grow-type","grow-type",-908344411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.grow_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_applied_tokens], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.plugins.schema_COLON_plugin_data], null)], true);
app.common.types.shape.schema_COLON_group_attrs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"GroupAttrs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("gen","max","gen/max",61264228),(10),new cljs.core.Keyword("gen","min","gen/min",444569458),(1)], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null)], null);
app.common.types.shape.schema_COLON_frame_attrs = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"FrameAttrs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("gen","max","gen/max",61264228),(10),new cljs.core.Keyword("gen","min","gen/min",444569458),(1)], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hide-fill-on-export","hide-fill-on-export",-1674607391),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-content","show-content",-878000465),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hide-in-viewer","hide-in-viewer",1478442312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
app.common.types.shape.schema_COLON_bool_attrs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"BoolAttrs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("gen","max","gen/max",61264228),(10),new cljs.core.Keyword("gen","min","gen/min",444569458),(1)], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool-type","bool-type",-1094918459),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.bool_types], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),app.common.types.path.schema_COLON_content], null)], null);
app.common.types.shape.schema_COLON_rect_attrs = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"RectAttrs"], null)], null);
app.common.types.shape.schema_COLON_circle_attrs = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"CircleAttrs"], null)], null);
app.common.types.shape.schema_COLON_svg_raw_attrs = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SvgRawAttrs"], null)], null);
app.common.types.shape.schema_COLON_image_attrs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"ImageAttrs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.small_int.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"min","min",444991522),(1)], 0))], null),new cljs.core.Keyword("app.common.schema","int","app.common.schema/int",519552051)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.small_int.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"min","min",444991522),(1)], 0))], null),new cljs.core.Keyword("app.common.schema","int","app.common.schema/int",519552051)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mtype","mtype",-1724656120),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.elements(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["image/jpeg","image/png"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null)], null)], null);
app.common.types.shape.schema_COLON_path_attrs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"PathAttrs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),app.common.types.path.schema_COLON_content], null)], null);
app.common.types.shape.schema_COLON_text_attrs = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"TextAttrs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position-data","position-data",-499622376),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),app.common.types.shape.text.schema_COLON_position_data], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),app.common.types.shape.text.schema_COLON_content], null)], null)], null);
app.common.types.shape.decode_shape = (function app$common$types$shape$decode_shape(o){
if(cljs.core.map_QMARK_(o)){
return app.common.types.shape.create_shape(o);
} else {
return o;
}
});
/**
 * Get the shape generator.
 */
app.common.types.shape.shape_generator = (function app$common$types$shape$shape_generator(){
return app.common.schema.generators.fmap(app.common.types.shape.create_shape,app.common.schema.generators.mcat((function (p__50894){
var map__50895 = p__50894;
var map__50895__$1 = cljs.core.__destructure_map(map__50895);
var shape = map__50895__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50895__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return clojure.test.check.generators.bind(app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.schema_COLON_shape_generic_attrs),(function (attrs1){
return clojure.test.check.generators.bind(app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.schema_COLON_shape_geom_attrs),(function (attrs2){
return clojure.test.check.generators.bind((function (){var G__50896 = type;
var G__50896__$1 = (((G__50896 instanceof cljs.core.Keyword))?G__50896.fqn:null);
switch (G__50896__$1) {
case "text":
return app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.schema_COLON_text_attrs);

break;
case "path":
return app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.schema_COLON_path_attrs);

break;
case "svg-raw":
return app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.schema_COLON_svg_raw_attrs);

break;
case "image":
return app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.schema_COLON_image_attrs);

break;
case "circle":
return app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.schema_COLON_circle_attrs);

break;
case "rect":
return app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.schema_COLON_rect_attrs);

break;
case "bool":
return app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.schema_COLON_bool_attrs);

break;
case "group":
return app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.schema_COLON_group_attrs);

break;
case "frame":
return app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.schema_COLON_frame_attrs);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50896__$1)].join('')));

}
})(),(function (attrs3){
var val__35816__auto__ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"path","path",-188191168))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"bool","bool",1444635321)))))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs1,shape,attrs3], 0)):cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs1,shape,attrs2,attrs3], 0)));
if(clojure.test.check.generators.generator_QMARK_(val__35816__auto__)){
return val__35816__auto__;
} else {
return clojure.test.check.generators.return$(val__35816__auto__);
}
}));
}));
}));
}),app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.schema_COLON_shape_base_attrs)));
});
app.common.types.shape.schema_COLON_shape_attrs = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("decode","json","decode/json",468276044),(function (shape){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword);
}),new cljs.core.Keyword(null,"title","title",636505583),"Shape"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"GroupShape"], null),app.common.types.shape.layout.schema_COLON_layout_child_attrs,app.common.types.shape.schema_COLON_group_attrs,app.common.types.shape.schema_COLON_shape_generic_attrs,app.common.types.shape.schema_COLON_shape_geom_attrs,app.common.types.shape.schema_COLON_shape_base_attrs], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"FrameShape"], null),app.common.types.shape.layout.schema_COLON_layout_child_attrs,app.common.types.shape.layout.schema_COLON_layout_attrs,app.common.types.shape.schema_COLON_frame_attrs,app.common.types.shape.schema_COLON_shape_generic_attrs,app.common.types.shape.schema_COLON_shape_geom_attrs,app.common.types.shape.schema_COLON_shape_base_attrs,app.common.types.variant.schema_COLON_variant_shape,app.common.types.variant.schema_COLON_variant_container], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"BoolShape"], null),app.common.types.shape.layout.schema_COLON_layout_child_attrs,app.common.types.shape.schema_COLON_bool_attrs,app.common.types.shape.schema_COLON_shape_generic_attrs,app.common.types.shape.schema_COLON_shape_base_attrs], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"RectShape"], null),app.common.types.shape.layout.schema_COLON_layout_child_attrs,app.common.types.shape.schema_COLON_rect_attrs,app.common.types.shape.schema_COLON_shape_generic_attrs,app.common.types.shape.schema_COLON_shape_geom_attrs,app.common.types.shape.schema_COLON_shape_base_attrs], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"CircleShape"], null),app.common.types.shape.layout.schema_COLON_layout_child_attrs,app.common.types.shape.schema_COLON_circle_attrs,app.common.types.shape.schema_COLON_shape_generic_attrs,app.common.types.shape.schema_COLON_shape_geom_attrs,app.common.types.shape.schema_COLON_shape_base_attrs], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"ImageShape"], null),app.common.types.shape.layout.schema_COLON_layout_child_attrs,app.common.types.shape.schema_COLON_image_attrs,app.common.types.shape.schema_COLON_shape_generic_attrs,app.common.types.shape.schema_COLON_shape_geom_attrs,app.common.types.shape.schema_COLON_shape_base_attrs], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg-raw","svg-raw",-594329202),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SvgRawShape"], null),app.common.types.shape.layout.schema_COLON_layout_child_attrs,app.common.types.shape.schema_COLON_svg_raw_attrs,app.common.types.shape.schema_COLON_shape_generic_attrs,app.common.types.shape.schema_COLON_shape_geom_attrs,app.common.types.shape.schema_COLON_shape_base_attrs], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"PathShape"], null),app.common.types.shape.layout.schema_COLON_layout_child_attrs,app.common.types.shape.schema_COLON_path_attrs,app.common.types.shape.schema_COLON_shape_generic_attrs,app.common.types.shape.schema_COLON_shape_base_attrs], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"TextShape"], null),app.common.types.shape.layout.schema_COLON_layout_child_attrs,app.common.types.shape.schema_COLON_text_attrs,app.common.types.shape.schema_COLON_shape_generic_attrs,app.common.types.shape.schema_COLON_shape_geom_attrs,app.common.types.shape.schema_COLON_shape_base_attrs], null)], null)], null);
app.common.types.shape.schema_COLON_shape = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Shape",new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.types.shape.shape_generator(),new cljs.core.Keyword("decode","json","decode/json",468276044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),app.common.types.shape.decode_shape], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.types.shape.shape_QMARK_], null),app.common.types.shape.schema_COLON_shape_attrs], null);
app.common.types.shape.check_shape_generic_attrs = app.common.schema.check_fn(app.common.types.shape.schema_COLON_shape_generic_attrs);
app.common.types.shape.check_shape_attrs = app.common.schema.check_fn(app.common.types.shape.schema_COLON_shape_attrs);
app.common.types.shape.check_shape = app.common.schema.check_fn.cljs$core$IFn$_invoke$arity$variadic(app.common.types.shape.schema_COLON_shape,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hint","hint",439639918),"expected valid shape"], 0));
app.common.types.shape.valid_shape_QMARK_ = app.common.schema.lazy_validator(app.common.types.shape.schema_COLON_shape);
app.common.types.shape.explain_shape = app.common.schema.lazy_explainer(app.common.types.shape.schema_COLON_shape);
app.common.types.shape.has_images_QMARK_ = (function app$common$types$shape$has_images_QMARK_(p__50897){
var map__50898 = p__50897;
var map__50898__$1 = cljs.core.__destructure_map(map__50898);
var fills = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50898__$1,new cljs.core.Keyword(null,"fills","fills",902966780));
var strokes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50898__$1,new cljs.core.Keyword(null,"strokes","strokes",-1645650952));
var or__5025__auto__ = cljs.core.some(new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),fills);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.some(new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214),strokes);
}
});
app.common.types.shape.allowed_shape_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 35, [new cljs.core.Keyword(null,"masked-group","masked-group",1899947873),null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),null,new cljs.core.Keyword(null,"grow-type","grow-type",-908344411),null,new cljs.core.Keyword(null,"remote-synced","remote-synced",1564821477),null,new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224),null,new cljs.core.Keyword(null,"touched","touched",-609134419),null,new cljs.core.Keyword(null,"fixed-scroll","fixed-scroll",-83520691),null,new cljs.core.Keyword(null,"r2","r2",252844174),null,new cljs.core.Keyword(null,"component-root","component-root",-485271026),null,new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329),null,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431),null,new cljs.core.Keyword(null,"proportion-lock","proportion-lock",1363898127),null,new cljs.core.Keyword(null,"page-id","page-id",-872941168),null,new cljs.core.Keyword(null,"exports","exports",-745008272),null,new cljs.core.Keyword(null,"r3","r3",-2027148174),null,new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),null,new cljs.core.Keyword(null,"blur","blur",-453500461),null,new cljs.core.Keyword(null,"interactions","interactions",550841811),null,new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),null,new cljs.core.Keyword(null,"r1","r1",690974900),null,new cljs.core.Keyword(null,"hidden","hidden",-312506092),null,new cljs.core.Keyword(null,"locked","locked",-1658763820),null,new cljs.core.Keyword(null,"opacity","opacity",397153780),null,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871),null,new cljs.core.Keyword(null,"component-id","component-id",1551113783),null,new cljs.core.Keyword(null,"strokes","strokes",-1645650952),null,new cljs.core.Keyword(null,"main-instance","main-instance",476264761),null,new cljs.core.Keyword(null,"blocked","blocked",181326681),null,new cljs.core.Keyword(null,"proportion","proportion",-1209284230),null,new cljs.core.Keyword(null,"grids","grids",44187194),null,new cljs.core.Keyword(null,"shadow","shadow",873231803),null,new cljs.core.Keyword(null,"r4","r4",1134323163),null,new cljs.core.Keyword(null,"fills","fills",902966780),null,new cljs.core.Keyword(null,"component-file","component-file",-1378670433),null], null), null);
app.common.types.shape.allowed_shape_geom_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null);
app.common.types.shape.allowed_shape_base_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"transform","transform",1381301764),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"points","points",-1486596883),null,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),null,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),null,new cljs.core.Keyword(null,"selrect","selrect",1966287292),null], null), null);
app.common.types.shape.allowed_bool_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bool-type","bool-type",-1094918459),null,new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"shapes","shapes",1897594879),null], null), null);
app.common.types.shape.allowed_group_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),null], null), null);
app.common.types.shape.allowed_frame_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864),null,new cljs.core.Keyword(null,"hide-fill-on-export","hide-fill-on-export",-1674607391),null,new cljs.core.Keyword(null,"layout-gap-type","layout-gap-type",-1483813598),null,new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),null,new cljs.core.Keyword(null,"layout-wrap-type","layout-wrap-type",186626597),null,new cljs.core.Keyword(null,"layout","layout",-2120940921),null,new cljs.core.Keyword(null,"hide-in-viewer","hide-in-viewer",1478442312),null,new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895),null,new cljs.core.Keyword(null,"layout-padding-type","layout-padding-type",-1407674837),null,new cljs.core.Keyword(null,"show-content","show-content",-878000465),null,new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),null,new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134),null,new cljs.core.Keyword(null,"layout-justify-items","layout-justify-items",1271685173),null,new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670),null,new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473),null,new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947),null,new cljs.core.Keyword(null,"layout-grid-dir","layout-grid-dir",1868849661),null,new cljs.core.Keyword(null,"shapes","shapes",1897594879),null], null), null);
app.common.types.shape.allowed_image_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),null], null), null);
app.common.types.shape.allowed_svg_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),null], null), null);
app.common.types.shape.allowed_path_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),null], null), null);
app.common.types.shape.allowed_text_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),null], null), null);
app.common.types.shape.allowed_generic_attrs = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(app.common.types.shape.allowed_shape_attrs,app.common.types.shape.allowed_shape_geom_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.shape.allowed_shape_base_attrs], 0));
app.common.types.shape.is_allowed_switch_keep_attr_QMARK_ = (function app$common$types$shape$is_allowed_switch_keep_attr_QMARK_(attr,type){
var G__50899 = type;
var G__50899__$1 = (((G__50899 instanceof cljs.core.Keyword))?G__50899.fqn:null);
switch (G__50899__$1) {
case "group":
return ((cljs.core.contains_QMARK_(app.common.types.shape.allowed_group_attrs,attr)) || (cljs.core.contains_QMARK_(app.common.types.shape.allowed_generic_attrs,attr)));

break;
case "frame":
return ((cljs.core.contains_QMARK_(app.common.types.shape.allowed_frame_attrs,attr)) || (cljs.core.contains_QMARK_(app.common.types.shape.allowed_generic_attrs,attr)));

break;
case "bool":
return ((cljs.core.contains_QMARK_(app.common.types.shape.allowed_bool_attrs,attr)) || (((cljs.core.contains_QMARK_(app.common.types.shape.allowed_shape_attrs,attr)) || (cljs.core.contains_QMARK_(app.common.types.shape.allowed_shape_base_attrs,attr)))));

break;
case "rect":
return cljs.core.contains_QMARK_(app.common.types.shape.allowed_generic_attrs,attr);

break;
case "circle":
return cljs.core.contains_QMARK_(app.common.types.shape.allowed_generic_attrs,attr);

break;
case "image":
return ((cljs.core.contains_QMARK_(app.common.types.shape.allowed_image_attrs,attr)) || (cljs.core.contains_QMARK_(app.common.types.shape.allowed_generic_attrs,attr)));

break;
case "svg-raw":
return ((cljs.core.contains_QMARK_(app.common.types.shape.allowed_svg_attrs,attr)) || (cljs.core.contains_QMARK_(app.common.types.shape.allowed_generic_attrs,attr)));

break;
case "path":
return ((cljs.core.contains_QMARK_(app.common.types.shape.allowed_path_attrs,attr)) || (((cljs.core.contains_QMARK_(app.common.types.shape.allowed_shape_attrs,attr)) || (cljs.core.contains_QMARK_(app.common.types.shape.allowed_shape_base_attrs,attr)))));

break;
case "text":
return ((cljs.core.contains_QMARK_(app.common.types.shape.allowed_text_attrs,attr)) || (cljs.core.contains_QMARK_(app.common.types.shape.allowed_generic_attrs,attr)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50899__$1)].join('')));

}
});
app.common.types.shape.minimal_rect_attrs = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"name","name",1843675177),"Rectangle",new cljs.core.Keyword(null,"fills","fills",902966780),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),app.common.types.shape.attrs.default_color,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(1)], null)], null),new cljs.core.Keyword(null,"strokes","strokes",-1645650952),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"r1","r1",690974900),(0),new cljs.core.Keyword(null,"r2","r2",252844174),(0),new cljs.core.Keyword(null,"r3","r3",-2027148174),(0),new cljs.core.Keyword(null,"r4","r4",1134323163),(0)], null);
app.common.types.shape.minimal_image_attrs = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"r1","r1",690974900),(0),new cljs.core.Keyword(null,"r2","r2",252844174),(0),new cljs.core.Keyword(null,"r3","r3",-2027148174),(0),new cljs.core.Keyword(null,"r4","r4",1134323163),(0),new cljs.core.Keyword(null,"fills","fills",902966780),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"strokes","strokes",-1645650952),cljs.core.PersistentVector.EMPTY], null);
app.common.types.shape.minimal_frame_attrs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hide-fill-on-export","hide-fill-on-export",-1674607391),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"strokes","strokes",-1645650952),new cljs.core.Keyword(null,"r4","r4",1134323163),new cljs.core.Keyword(null,"fills","fills",902966780),new cljs.core.Keyword(null,"shapes","shapes",1897594879)],[false,"Board",(0),(0),(0),app.common.uuid.zero,cljs.core.PersistentVector.EMPTY,(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),"#FFFFFF",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(1)], null)], null),cljs.core.PersistentVector.EMPTY]);
app.common.types.shape.minimal_circle_attrs = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"name","name",1843675177),"Ellipse",new cljs.core.Keyword(null,"fills","fills",902966780),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),app.common.types.shape.attrs.default_color,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(1)], null)], null),new cljs.core.Keyword(null,"strokes","strokes",-1645650952),cljs.core.PersistentVector.EMPTY], null);
app.common.types.shape.minimal_group_attrs = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"name","name",1843675177),"Group",new cljs.core.Keyword(null,"fills","fills",902966780),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"strokes","strokes",-1645650952),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentVector.EMPTY], null);
app.common.types.shape.minimal_bool_attrs = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"name","name",1843675177),"Bool",new cljs.core.Keyword(null,"fills","fills",902966780),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"strokes","strokes",-1645650952),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentVector.EMPTY], null);
app.common.types.shape.minimal_text_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"name","name",1843675177),"Text"], null);
app.common.types.shape.minimal_path_attrs = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"name","name",1843675177),"Path",new cljs.core.Keyword(null,"fills","fills",902966780),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"strokes","strokes",-1645650952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340),new cljs.core.Keyword(null,"inner","inner",-1383171215),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),"#000000",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),(1)], null)], null)], null);
app.common.types.shape.minimal_svg_raw_attrs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"svg-raw","svg-raw",-594329202),new cljs.core.Keyword(null,"fills","fills",902966780),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"strokes","strokes",-1645650952),cljs.core.PersistentVector.EMPTY], null);
app.common.types.shape.minimal_multiple_attrs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"multiple","multiple",1244445549)], null);
app.common.types.shape.get_minimal_shape = (function app$common$types$shape$get_minimal_shape(type){
var G__50900 = type;
var G__50900__$1 = (((G__50900 instanceof cljs.core.Keyword))?G__50900.fqn:null);
switch (G__50900__$1) {
case "rect":
return app.common.types.shape.minimal_rect_attrs;

break;
case "image":
return app.common.types.shape.minimal_image_attrs;

break;
case "circle":
return app.common.types.shape.minimal_circle_attrs;

break;
case "path":
return app.common.types.shape.minimal_path_attrs;

break;
case "frame":
return app.common.types.shape.minimal_frame_attrs;

break;
case "bool":
return app.common.types.shape.minimal_bool_attrs;

break;
case "group":
return app.common.types.shape.minimal_group_attrs;

break;
case "text":
return app.common.types.shape.minimal_text_attrs;

break;
case "svg-raw":
return app.common.types.shape.minimal_svg_raw_attrs;

break;
case "multiple":
return app.common.types.shape.minimal_multiple_attrs;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50900__$1)].join('')));

}
});
app.common.types.shape.make_minimal_shape = (function app$common$types$shape$make_minimal_shape(type){
var type__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"curve","curve",-569677866)))?new cljs.core.Keyword(null,"path","path",-188191168):type);
var attrs = app.common.types.shape.get_minimal_shape(type__$1);
var attrs__$1 = (function (){var G__50901 = attrs;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),type__$1)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bool","bool",1444635321),type__$1)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50901,new cljs.core.Keyword(null,"x","x",2099068185),(0)),new cljs.core.Keyword(null,"y","y",-1757859776),(0)),new cljs.core.Keyword(null,"width","width",-384071477),0.01),new cljs.core.Keyword(null,"height","height",1025178622),0.01);
} else {
return G__50901;
}
})();
var attrs__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs__$1,new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next()),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),app.common.uuid.zero),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),app.common.uuid.zero),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0));
return app.common.types.shape.create_shape(attrs__$2);
});
/**
 * Initializes the selrect and points for a shape.
 */
app.common.types.shape.setup_rect = (function app$common$types$shape$setup_rect(p__50902){
var map__50903 = p__50902;
var map__50903__$1 = cljs.core.__destructure_map(map__50903);
var shape = map__50903__$1;
var selrect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50903__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50903__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50903__$1,new cljs.core.Keyword(null,"transform","transform",1381301764));
var selrect__$1 = (function (){var or__5025__auto__ = selrect;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.geom.shapes.shape__GT_rect(shape);
}
})();
var center = app.common.geom.rect.rect__GT_center(selrect__$1);
var transform__$1 = (function (){var or__5025__auto__ = transform;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0();
}
})();
var points__$1 = (function (){var or__5025__auto__ = points;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.geom.shapes.transform_points.cljs$core$IFn$_invoke$arity$3(app.common.geom.rect.rect__GT_points(selrect__$1),center,transform__$1);
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"selrect","selrect",1966287292),selrect__$1),new cljs.core.Keyword(null,"points","points",-1486596883),points__$1);
});
app.common.types.shape.setup_path = (function app$common$types$shape$setup_path(p__50904){
var map__50905 = p__50904;
var map__50905__$1 = cljs.core.__destructure_map(map__50905);
var shape = map__50905__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50905__$1,new cljs.core.Keyword(null,"content","content",15833224));
var selrect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50905__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50905__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var selrect__$1 = (function (){var or__5025__auto__ = selrect;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = app.common.types.path.calc_selrect(content);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$0();
}
}
})();
var points__$1 = (function (){var or__5025__auto__ = points;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.geom.rect.rect__GT_points(selrect__$1);
}
})();
var content__$1 = app.common.types.path.content(content);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"selrect","selrect",1966287292),selrect__$1),new cljs.core.Keyword(null,"points","points",-1486596883),points__$1),new cljs.core.Keyword(null,"content","content",15833224),content__$1);
});
app.common.types.shape.setup_image = (function app$common$types$shape$setup_image(p__50906){
var map__50907 = p__50906;
var map__50907__$1 = cljs.core.__destructure_map(map__50907);
var shape = map__50907__$1;
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50907__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"proportion","proportion",-1209284230),(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metadata) / new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(metadata))),new cljs.core.Keyword(null,"proportion-lock","proportion-lock",1363898127),true);
});
/**
 * A function that initializes the geometric data of the shape. The props must
 *   contain at least :x :y :width :height.
 */
app.common.types.shape.setup_shape = (function app$common$types$shape$setup_shape(p__50908){
var map__50909 = p__50908;
var map__50909__$1 = cljs.core.__destructure_map(map__50909);
var props = map__50909__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50909__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var shape = app.common.types.shape.make_minimal_shape(type);
var props__$1 = app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,props));
var shape__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shape,app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,props__$1))], 0));
var shape__$2 = (function (){var G__50910 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape__$1);
var G__50910__$1 = (((G__50910 instanceof cljs.core.Keyword))?G__50910.fqn:null);
switch (G__50910__$1) {
case "bool":
case "path":
return app.common.types.shape.setup_path(shape__$1);

break;
case "image":
return app.common.types.shape.setup_image(app.common.types.shape.setup_rect(shape__$1));

break;
default:
return app.common.types.shape.setup_rect(shape__$1);

}
})();
return app.common.geom.proportions.setup_proportions((function (){var G__50911 = (function (){var G__50912 = shape__$2;
if((new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(shape__$2) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50912,new cljs.core.Keyword(null,"transform","transform",1381301764),app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0());
} else {
return G__50912;
}
})();
if((new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$1(shape__$2) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50911,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576),app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0());
} else {
return G__50911;
}
})());
});
app.common.transit.add_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"shape",new cljs.core.Keyword(null,"class","class",-2030961996),app.common.types.shape.Shape,new cljs.core.Keyword(null,"wfn","wfn",-1437298400),(function (p1__50913_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__50913_SHARP_);
}),new cljs.core.Keyword(null,"rfn","rfn",-990883444),app.common.types.shape.create_shape], null)], 0));
app.common.types.shape.basic_extract_props = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [new cljs.core.Keyword(null,"layout-item-absolute","layout-item-absolute",1832387265),null,new cljs.core.Keyword(null,"layout-item-margin-type","layout-item-margin-type",-1313230390),null,new cljs.core.Keyword(null,"r2","r2",252844174),null,new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366),null,new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),null,new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),null,new cljs.core.Keyword(null,"r3","r3",-2027148174),null,new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),null,new cljs.core.Keyword(null,"blur","blur",-453500461),null,new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),null,new cljs.core.Keyword(null,"r1","r1",690974900),null,new cljs.core.Keyword(null,"opacity","opacity",397153780),null,new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548),null,new cljs.core.Keyword(null,"strokes","strokes",-1645650952),null,new cljs.core.Keyword(null,"shadow","shadow",873231803),null,new cljs.core.Keyword(null,"r4","r4",1134323163),null,new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),null,new cljs.core.Keyword(null,"fills","fills",902966780),null,new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548),null,new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307),null,new cljs.core.Keyword(null,"layout-item-z-index","layout-item-z-index",728479455),null], null), null);
/**
 * Retrieves an object with the 'pasteable' properties for a shape.
 */
app.common.types.shape.extract_props = (function app$common$types$shape$extract_props(shape){
var assoc_props = (function app$common$types$shape$extract_props_$_assoc_props(props,node,attrs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (props__$1,attr){
var G__50916 = props__$1;
if((((!(cljs.core.contains_QMARK_(props__$1,attr)))) && ((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,attr) == null)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50916,attr,cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,attr));
} else {
return G__50916;
}
}),props,attrs);
});
var extract_text_props = (function app$common$types$shape$extract_props_$_extract_text_props(props,shape__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,node){
var G__50917 = result;
var G__50917__$1 = ((app.common.types.text.is_root_node_QMARK_(node))?assoc_props(G__50917,node,app.common.types.text.root_attrs):G__50917);
var G__50917__$2 = ((app.common.types.text.is_paragraph_node_QMARK_(node))?assoc_props(G__50917__$1,node,app.common.types.text.paragraph_attrs):G__50917__$1);
if(app.common.types.text.is_text_node_QMARK_(node)){
return assoc_props(G__50917__$2,node,app.common.types.text.text_node_attrs);
} else {
return G__50917__$2;
}
}),props,app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape__$1)));
});
var extract_layout_attrs = (function app$common$types$shape$extract_props_$_extract_layout_attrs(props,shape__$1){
return app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(props,cljs.core.select_keys(shape__$1,app.common.types.shape.layout.layout_attrs));
});
var extract_props = (function (){var G__50918 = app.common.types.shape.basic_extract_props;
if(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(G__50918,new cljs.core.Keyword(null,"fills","fills",902966780));
} else {
return G__50918;
}
})();
var G__50919 = (function (){var G__50920 = cljs.core.select_keys(shape,extract_props);
if(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return extract_text_props(G__50920,shape);
} else {
return G__50920;
}
})();
if(app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return extract_layout_attrs(G__50919,shape);
} else {
return G__50919;
}
});
/**
 * Given the object of `extract-props` applies it to a shape. Adapt the shape if necesary
 */
app.common.types.shape.patch_props = (function app$common$types$shape$patch_props(shape,props,objects){
var patch_text_props = (function app$common$types$shape$patch_props_$_patch_text_props(shape__$1,props__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"content","content",15833224),(function (content){
return app.common.types.text.transform_nodes.cljs$core$IFn$_invoke$arity$2((function (node){
var G__50923 = node;
var G__50923__$1 = ((app.common.types.text.is_root_node_QMARK_(node))?app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(G__50923,cljs.core.select_keys(props__$1,app.common.types.text.root_attrs)):G__50923);
var G__50923__$2 = ((app.common.types.text.is_paragraph_node_QMARK_(node))?app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(G__50923__$1,cljs.core.select_keys(props__$1,app.common.types.text.paragraph_attrs)):G__50923__$1);
if(app.common.types.text.is_text_node_QMARK_(node)){
return app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(G__50923__$2,cljs.core.select_keys(props__$1,app.common.types.text.text_node_attrs));
} else {
return G__50923__$2;
}
}),content);
}));
});
var patch_layout_props = (function app$common$types$shape$patch_props_$_patch_layout_props(shape__$1,props__$1){
var shape__$2 = app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(shape__$1,cljs.core.select_keys(props__$1,app.common.types.shape.layout.layout_attrs));
var G__50924 = shape__$2;
if(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$2)){
return app.common.types.shape.layout.assign_cells(G__50924,objects);
} else {
return G__50924;
}
});
var G__50925 = (function (){var G__50926 = app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(shape,cljs.core.select_keys(props,app.common.types.shape.basic_extract_props));
if(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return patch_text_props(G__50926,props);
} else {
return G__50926;
}
})();
if(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return patch_layout_props(G__50925,props);
} else {
return G__50925;
}
});
app.common.types.shape.set_fill_color = (function app$common$types$shape$set_fill_color(shape,position,color,opacity,gradient,image){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fills","fills",902966780),position], null),(function (fill){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fill,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),opacity,new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870),gradient,new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),image], 0)));
}));
});
app.common.types.shape.attach_fill_color = (function app$common$types$shape$attach_fill_color(shape,position,ref_id,ref_file){
return app.common.data.update_in_when(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fills","fills",902966780),position], null),(function (fill){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fill,new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255),ref_file),new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098),ref_id);
}));
});
app.common.types.shape.detach_fill_color = (function app$common$types$shape$detach_fill_color(shape,position){
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fills","fills",902966780),position], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098),new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255)], 0));
});
app.common.types.shape.set_stroke_color = (function app$common$types$shape$set_stroke_color(shape,position,color,opacity,gradient,image){
return app.common.data.update_in_when(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952),position], null),(function (stroke){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stroke,new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),color),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),opacity),new cljs.core.Keyword(null,"stroke-color-gradient","stroke-color-gradient",-195812260),gradient),new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214),image));
}));
});
app.common.types.shape.attach_stroke_color = (function app$common$types$shape$attach_stroke_color(shape,position,ref_id,ref_file){
return app.common.data.update_in_when(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952),position], null),(function (stroke){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stroke,new cljs.core.Keyword(null,"stroke-color-ref-id","stroke-color-ref-id",1785439761),ref_id),new cljs.core.Keyword(null,"stroke-color-ref-file","stroke-color-ref-file",2014652279),ref_file);
}));
});
app.common.types.shape.detach_stroke_color = (function app$common$types$shape$detach_stroke_color(shape,position){
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952),position], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stroke-color-ref-id","stroke-color-ref-id",1785439761),new cljs.core.Keyword(null,"stroke-color-ref-file","stroke-color-ref-file",2014652279)], 0));
});
app.common.types.shape.set_shadow_color = (function app$common$types$shape$set_shadow_color(shape,position,color,opacity,gradient){
return app.common.data.update_in_when(shape,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803),position,new cljs.core.Keyword(null,"color","color",1011675173)], null),(function (shadow_color){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow_color,new cljs.core.Keyword(null,"color","color",1011675173),color),new cljs.core.Keyword(null,"opacity","opacity",397153780),opacity),new cljs.core.Keyword(null,"gradient","gradient",-1983908971),gradient));
}));
});
app.common.types.shape.attach_shadow_color = (function app$common$types$shape$attach_shadow_color(shape,position,ref_id,ref_file){
return app.common.data.update_in_when(shape,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803),position,new cljs.core.Keyword(null,"color","color",1011675173)], null),(function (color){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(color,new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),ref_id),new cljs.core.Keyword(null,"ref-file","ref-file",255004238),ref_file);
}));
});
app.common.types.shape.detach_shadow_color = (function app$common$types$shape$detach_shadow_color(shape,position){
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803),position,new cljs.core.Keyword(null,"color","color",1011675173)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),new cljs.core.Keyword(null,"ref-file","ref-file",255004238)], 0));
});
app.common.types.shape.set_grid_color = (function app$common$types$shape$set_grid_color(shape,position,color,opacity,gradient){
return app.common.data.update_in_when(shape,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grids","grids",44187194),position,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"color","color",1011675173)], null),(function (grid_color){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(grid_color,new cljs.core.Keyword(null,"color","color",1011675173),color),new cljs.core.Keyword(null,"opacity","opacity",397153780),opacity),new cljs.core.Keyword(null,"gradient","gradient",-1983908971),gradient));
}));
});
app.common.types.shape.attach_grid_color = (function app$common$types$shape$attach_grid_color(shape,position,ref_id,ref_file){
return app.common.data.update_in_when(shape,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grids","grids",44187194),position,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"color","color",1011675173)], null),(function (color){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(color,new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),ref_id),new cljs.core.Keyword(null,"ref-file","ref-file",255004238),ref_file);
}));
});
app.common.types.shape.detach_grid_color = (function app$common$types$shape$detach_grid_color(shape,position){
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grids","grids",44187194),position,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"color","color",1011675173)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),new cljs.core.Keyword(null,"ref-file","ref-file",255004238)], 0));
});
/**
 * Execute an update function on all colors of a shape.
 */
app.common.types.shape.process_shape_colors = (function app$common$types$shape$process_shape_colors(shape,process_fn){
var process_fill = (function (shape__$1,p__50929){
var vec__50930 = p__50929;
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50930,(0),null);
var fill = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50930,(1),null);
var G__50933 = shape__$1;
var G__50934 = position;
var G__50935 = app.common.types.fills.fill__GT_color(fill);
var G__50936 = app.common.types.shape.set_fill_color;
var G__50937 = app.common.types.shape.attach_fill_color;
var G__50938 = app.common.types.shape.detach_fill_color;
return (process_fn.cljs$core$IFn$_invoke$arity$6 ? process_fn.cljs$core$IFn$_invoke$arity$6(G__50933,G__50934,G__50935,G__50936,G__50937,G__50938) : process_fn.call(null,G__50933,G__50934,G__50935,G__50936,G__50937,G__50938));
});
var process_stroke = (function (shape__$1,p__50939){
var vec__50940 = p__50939;
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50940,(0),null);
var stroke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50940,(1),null);
var G__50943 = shape__$1;
var G__50944 = position;
var G__50945 = app.common.types.color.stroke__GT_color(stroke);
var G__50946 = app.common.types.shape.set_stroke_color;
var G__50947 = app.common.types.shape.attach_stroke_color;
var G__50948 = app.common.types.shape.detach_stroke_color;
return (process_fn.cljs$core$IFn$_invoke$arity$6 ? process_fn.cljs$core$IFn$_invoke$arity$6(G__50943,G__50944,G__50945,G__50946,G__50947,G__50948) : process_fn.call(null,G__50943,G__50944,G__50945,G__50946,G__50947,G__50948));
});
var process_shadow = (function (shape__$1,p__50949){
var vec__50950 = p__50949;
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50950,(0),null);
var shadow__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50950,(1),null);
var G__50953 = shape__$1;
var G__50954 = position;
var G__50955 = app.common.types.color.shadow__GT_color(shadow__$1);
var G__50956 = app.common.types.shape.set_shadow_color;
var G__50957 = app.common.types.shape.attach_shadow_color;
var G__50958 = app.common.types.shape.detach_shadow_color;
return (process_fn.cljs$core$IFn$_invoke$arity$6 ? process_fn.cljs$core$IFn$_invoke$arity$6(G__50953,G__50954,G__50955,G__50956,G__50957,G__50958) : process_fn.call(null,G__50953,G__50954,G__50955,G__50956,G__50957,G__50958));
});
var process_grid = (function (shape__$1,p__50959){
var vec__50960 = p__50959;
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50960,(0),null);
var grid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50960,(1),null);
var G__50963 = shape__$1;
var G__50964 = position;
var G__50965 = app.common.types.color.grid__GT_color(grid);
var G__50966 = app.common.types.shape.set_grid_color;
var G__50967 = app.common.types.shape.attach_grid_color;
var G__50968 = app.common.types.shape.detach_grid_color;
return (process_fn.cljs$core$IFn$_invoke$arity$6 ? process_fn.cljs$core$IFn$_invoke$arity$6(G__50963,G__50964,G__50965,G__50966,G__50967,G__50968) : process_fn.call(null,G__50963,G__50964,G__50965,G__50966,G__50967,G__50968));
});
var process_text_node = (function (node){
var $ = node;
var $__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_fill,$,app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1($)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_stroke,$__$1,app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1($__$1)));
});
var process_text = (function (shape__$1){
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape__$1);
var new_content = app.common.types.text.transform_nodes.cljs$core$IFn$_invoke$arity$2(process_text_node,content);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(content,new_content)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"content","content",15833224),new_content);
} else {
return shape__$1;
}
});
var $ = shape;
var $__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_fill,$,app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1($)));
var $__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_stroke,$__$1,app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1($__$1)));
var $__$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_shadow,$__$2,app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1($__$2)));
var $__$4 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_grid,$__$3,app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grids","grids",44187194).cljs$core$IFn$_invoke$arity$1($__$3)));
return process_text($__$4);
});
/**
 * Get all colors used by a node of a text shape
 */
app.common.types.shape.get_text_node_colors = (function app$common$types$shape$get_text_node_colors(node){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.types.fills.fill__GT_color,new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(node)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.types.color.stroke__GT_color,new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(node)));
});
/**
 * Get all colors used by a shape, in any section.
 */
app.common.types.shape.get_all_colors = (function app$common$types$shape$get_all_colors(shape){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.types.fills.fill__GT_color,new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(shape)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.types.color.stroke__GT_color,new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(shape)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.types.color.shadow__GT_color,new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(shape)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"frame","frame",-1711082588)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.types.color.grid__GT_color,new cljs.core.Keyword(null,"grids","grids",44187194).cljs$core$IFn$_invoke$arity$1(shape)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"text","text",-1790561697)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (colors,node){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(colors,app.common.types.shape.get_text_node_colors(node));
}),cljs.core.List.EMPTY,app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape))):null)], 0));
});
/**
 * Check if the shape uses the given library color.
 */
app.common.types.shape.uses_library_color_QMARK_ = (function app$common$types$shape$uses_library_color_QMARK_(shape,library_id,color_id){
var all_colors = app.common.types.shape.get_all_colors(shape);
return cljs.core.some((function (p1__50969_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884).cljs$core$IFn$_invoke$arity$1(p1__50969_SHARP_),color_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref-file","ref-file",255004238).cljs$core$IFn$_invoke$arity$1(p1__50969_SHARP_),library_id)));
}),all_colors);
});
/**
 * Check if the shape uses any color in the given library.
 */
app.common.types.shape.uses_library_colors_QMARK_ = (function app$common$types$shape$uses_library_colors_QMARK_(shape,library_id){
var all_colors = app.common.types.shape.get_all_colors(shape);
return cljs.core.some((function (p1__50970_SHARP_){
return (((!((new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884).cljs$core$IFn$_invoke$arity$1(p1__50970_SHARP_) == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref-file","ref-file",255004238).cljs$core$IFn$_invoke$arity$1(p1__50970_SHARP_),library_id)));
}),all_colors);
});
/**
 * Change the shape so that any use of the given color now points to
 *   the given library.
 */
app.common.types.shape.remap_colors = (function app$common$types$shape$remap_colors(shape,library_id,color){
var remap_color = (function app$common$types$shape$remap_colors_$_remap_color(shape__$1,position,shape_color,_,attach_fn,___$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884).cljs$core$IFn$_invoke$arity$1(shape_color),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color))){
var G__50976 = shape__$1;
var G__50977 = position;
var G__50978 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color);
var G__50979 = library_id;
return (attach_fn.cljs$core$IFn$_invoke$arity$4 ? attach_fn.cljs$core$IFn$_invoke$arity$4(G__50976,G__50977,G__50978,G__50979) : attach_fn.call(null,G__50976,G__50977,G__50978,G__50979));
} else {
return shape__$1;
}
});
return app.common.types.shape.process_shape_colors(shape,remap_color);
});

//# sourceMappingURL=app.common.types.shape.js.map
