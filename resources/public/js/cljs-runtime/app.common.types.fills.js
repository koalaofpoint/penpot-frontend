import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.exceptions.js";
import "./app.common.flags.js";
import "./app.common.schema.js";
import "./app.common.schema.generators.js";
import "./app.common.types.color.js";
import "./app.common.types.fills.impl.js";
import "./clojure.set.js";
goog.provide('app.common.types.fills');
app.common.types.fills.MAX_GRADIENT_STOPS = (16);
app.common.types.fills.MAX_FILLS = (8);
app.common.types.fills.schema_COLON_fill_attrs = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"FillAttrs",new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","number","app.common.schema/number",-157963053),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.color.schema_COLON_hex_color], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.color.schema_COLON_gradient], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.color.schema_COLON_image], null)], null);
/**
 * A set of attrs that corresponds to fill data type
 */
app.common.types.fills.fill_attrs = app.common.schema.keys(app.common.types.fills.schema_COLON_fill_attrs);
/**
 * A set used for proper check if color should contain only one of the
 *   attrs listed in this set.
 */
app.common.types.fills.valid_fill_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),null,new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870),null,new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),null], null), null);
/**
 * Check if color has correct color attrs
 */
app.common.types.fills.has_valid_fill_attrs_QMARK_ = (function app$common$types$fills$has_valid_fill_attrs_QMARK_(color){
var attrs = cljs.core.set(cljs.core.keys(color));
var result = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(attrs,app.common.types.fills.valid_fill_attrs);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(result));
});
app.common.types.fills.schema_COLON_fill = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),app.common.types.fills.schema_COLON_fill_attrs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.types.fills.has_valid_fill_attrs_QMARK_], null)], null);
app.common.types.fills.check_fill = app.common.schema.check_fn(app.common.types.fills.schema_COLON_fill);
app.common.types.fills.schema_COLON_fills_as_vector = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","max","gen/max",61264228),(2)], null),app.common.types.fills.schema_COLON_fill], null);
app.common.types.fills.schema_COLON_fills = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.fills.schema_COLON_fills_as_vector)], null),app.common.types.fills.schema_COLON_fills_as_vector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.types.fills.impl.fills_QMARK_], null)], null);
app.common.types.fills.from_plain = (function app$common$types$fills$from_plain(o){
if(cljs.core.every_QMARK_(app.common.types.fills.check_fill,o)){
} else {
throw (new Error(["Assert failed: ","expected valid fills vector","\n","(every? check-fill o)"].join('')));
}

return app.common.types.fills.impl.from_plain(o);
});
app.common.types.fills.fills_QMARK_ = (function app$common$types$fills$fills_QMARK_(o){
return app.common.types.fills.impl.fills_QMARK_(o);
});
app.common.types.fills.coerce = (function app$common$types$fills$coerce(o){
if((o == null)){
return app.common.types.fills.impl.from_plain(cljs.core.PersistentVector.EMPTY);
} else {
if(app.common.types.fills.impl.fills_QMARK_(o)){
return o;
} else {
if(cljs.core.vector_QMARK_(o)){
return app.common.types.fills.impl.from_plain(o);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["cannot coerce ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o], 0))," to fills"].join(''),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"invalid-type","invalid-type",-1552570890),new cljs.core.Keyword(null,"hint","hint",439639918),["cannot coerce ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o], 0))," to fills"].join('')], null),null], 0)),null);

}
}
}
});
app.common.types.fills.get_image_ids = (function app$common$types$fills$get_image_ids(fills){
if(cljs.core.vector_QMARK_(fills)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fill-image","fill-image",-99895848)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092))),fills);
} else {
return app.common.types.fills.impl._get_image_ids(fills);
}
});
app.common.types.fills.get_byte_size = (function app$common$types$fills$get_byte_size(fills){
return app.common.types.fills.impl._get_byte_size(fills);
});
app.common.types.fills.write_to = (function app$common$types$fills$write_to(fills,buffer,offset){
return app.common.types.fills.impl._write_to(fills,buffer,offset);
});
app.common.types.fills.assoc = (function app$common$types$fills$assoc(fills,position,fill){
if(cljs.core.contains_QMARK_(app.common.flags._STAR_current_STAR_,new cljs.core.Keyword(null,"frontend-binary-fills","frontend-binary-fills",-342747503))){
if((fills == null)){
return app.common.types.fills.impl.from_plain(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fill], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.types.fills.coerce(fills),position,fill);
}
} else {
if((fills == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fill], null);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fills,position,fill);
}
}
});
app.common.types.fills.update = (function app$common$types$fills$update(var_args){
var args__5755__auto__ = [];
var len__5749__auto___48413 = arguments.length;
var i__5750__auto___48414 = (0);
while(true){
if((i__5750__auto___48414 < len__5749__auto___48413)){
args__5755__auto__.push((arguments[i__5750__auto___48414]));

var G__48415 = (i__5750__auto___48414 + (1));
i__5750__auto___48414 = G__48415;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return app.common.types.fills.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(app.common.types.fills.update.cljs$core$IFn$_invoke$arity$variadic = (function (fills,f,args){
var fills__$1 = cljs.core.vec(fills);
var fills__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,fills__$1,args);
if(cljs.core.contains_QMARK_(app.common.flags._STAR_current_STAR_,new cljs.core.Keyword(null,"frontend-binary-fills","frontend-binary-fills",-342747503))){
return app.common.types.fills.impl.from_plain(fills__$2);
} else {
return cljs.core.vec(fills__$2);
}
}));

(app.common.types.fills.update.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(app.common.types.fills.update.cljs$lang$applyTo = (function (seq48397){
var G__48398 = cljs.core.first(seq48397);
var seq48397__$1 = cljs.core.next(seq48397);
var G__48399 = cljs.core.first(seq48397__$1);
var seq48397__$2 = cljs.core.next(seq48397__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48398,G__48399,seq48397__$2);
}));

app.common.types.fills.create = (function app$common$types$fills$create(var_args){
var args__5755__auto__ = [];
var len__5749__auto___48421 = arguments.length;
var i__5750__auto___48422 = (0);
while(true){
if((i__5750__auto___48422 < len__5749__auto___48421)){
args__5755__auto__.push((arguments[i__5750__auto___48422]));

var G__48423 = (i__5750__auto___48422 + (1));
i__5750__auto___48422 = G__48423;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.common.types.fills.create.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.common.types.fills.create.cljs$core$IFn$_invoke$arity$variadic = (function (elements){
var fills = cljs.core.vec(elements);
if(cljs.core.contains_QMARK_(app.common.flags._STAR_current_STAR_,new cljs.core.Keyword(null,"frontend-binary-fills","frontend-binary-fills",-342747503))){
return app.common.types.fills.impl.from_plain(fills);
} else {
return fills;
}
}));

(app.common.types.fills.create.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.common.types.fills.create.cljs$lang$applyTo = (function (seq48402){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48402));
}));

/**
 * Prepend a fill to existing fills
 */
app.common.types.fills.prepend = (function app$common$types$fills$prepend(fills,fill){
var fills__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fill], null),fills);
if(cljs.core.contains_QMARK_(app.common.flags._STAR_current_STAR_,new cljs.core.Keyword(null,"frontend-binary-fills","frontend-binary-fills",-342747503))){
return app.common.types.fills.impl.from_plain(fills__$1);
} else {
return fills__$1;
}
});
app.common.types.fills.fill__GT_color = (function app$common$types$fills$fill__GT_color(fill){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903).cljs$core$IFn$_invoke$arity$1(fill),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170).cljs$core$IFn$_invoke$arity$1(fill),new cljs.core.Keyword(null,"gradient","gradient",-1983908971),new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870).cljs$core$IFn$_invoke$arity$1(fill),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"fill-image","fill-image",-99895848).cljs$core$IFn$_invoke$arity$1(fill),new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098).cljs$core$IFn$_invoke$arity$1(fill),new cljs.core.Keyword(null,"ref-file","ref-file",255004238),new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255).cljs$core$IFn$_invoke$arity$1(fill)], null));
});

//# sourceMappingURL=app.common.types.fills.js.map
