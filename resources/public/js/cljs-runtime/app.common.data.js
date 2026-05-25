import "./cljs_env.js";
import "./cljs.core.js";
import "./cljs.reader.js";
import "./goog.array.array.js";
import "./app.common.math.js";
import "./clojure.set.js";
import "./cuerdas.core.js";
import "./linked.map.js";
import "./linked.set.js";
goog.provide('app.common.data');
goog.scope(function(){
  app.common.data.goog$module$goog$array = goog.module.get('goog.array');
});
app.common.data.boolean_or_nil_QMARK_ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.boolean_QMARK_);
app.common.data.in_range_QMARK_ = (function app$common$data$in_range_QMARK_(size,i){
return (((i < size)) && ((i >= (0))));
});
app.common.data.xf_COLON_map_id = cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092));
app.common.data.ordered_set = (function app$common$data$ordered_set(var_args){
var G__29261 = arguments.length;
switch (G__29261) {
case 0:
return app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___29988 = arguments.length;
var i__5750__auto___29991 = (0);
while(true){
if((i__5750__auto___29991 < len__5749__auto___29988)){
args_arr__5774__auto__.push((arguments[i__5750__auto___29991]));

var G__29993 = (i__5750__auto___29991 + (1));
i__5750__auto___29991 = G__29993;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((1)),(0),null)):null);
return app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);

}
});

(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.set.empty_linked_set;
}));

(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$1 = (function (a){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(linked.set.empty_linked_set,a);
}));

(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$variadic = (function (a,xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.conj,linked.set.empty_linked_set,a,xs);
}));

/** @this {Function} */
(app.common.data.ordered_set.cljs$lang$applyTo = (function (seq29258){
var G__29259 = cljs.core.first(seq29258);
var seq29258__$1 = cljs.core.next(seq29258);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29259,seq29258__$1);
}));

(app.common.data.ordered_set.cljs$lang$maxFixedArity = (1));

app.common.data.ordered_map = (function app$common$data$ordered_map(var_args){
var G__29283 = arguments.length;
switch (G__29283) {
case 0:
return app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___30007 = arguments.length;
var i__5750__auto___30010 = (0);
while(true){
if((i__5750__auto___30010 < len__5749__auto___30007)){
args_arr__5774__auto__.push((arguments[i__5750__auto___30010]));

var G__30012 = (i__5750__auto___30010 + (1));
i__5750__auto___30010 = G__30012;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.map.empty_linked_map;
}));

(app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$2 = (function (k,a){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(linked.map.empty_linked_map,k,a);
}));

(app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$variadic = (function (k,a,xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc,linked.map.empty_linked_map,k,a,xs);
}));

/** @this {Function} */
(app.common.data.ordered_map.cljs$lang$applyTo = (function (seq29276){
var G__29277 = cljs.core.first(seq29276);
var seq29276__$1 = cljs.core.next(seq29276);
var G__29278 = cljs.core.first(seq29276__$1);
var seq29276__$2 = cljs.core.next(seq29276__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29277,G__29278,seq29276__$2);
}));

(app.common.data.ordered_map.cljs$lang$maxFixedArity = (2));

app.common.data.ordered_set_QMARK_ = (function app$common$data$ordered_set_QMARK_(o){
return (o instanceof linked.set.LinkedSet);
});
app.common.data.ordered_map_QMARK_ = (function app$common$data$ordered_map_QMARK_(o){
return (o instanceof linked.map.LinkedMap);
});
app.common.data.oassoc = (function app$common$data$oassoc(var_args){
var args__5755__auto__ = [];
var len__5749__auto___30022 = arguments.length;
var i__5750__auto___30023 = (0);
while(true){
if((i__5750__auto___30023 < len__5749__auto___30022)){
args__5755__auto__.push((arguments[i__5750__auto___30023]));

var G__30024 = (i__5750__auto___30023 + (1));
i__5750__auto___30023 = G__30024;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.data.oassoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.data.oassoc.cljs$core$IFn$_invoke$arity$variadic = (function (o,kvs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,(function (){var or__5025__auto__ = o;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$0();
}
})(),kvs);
}));

(app.common.data.oassoc.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.data.oassoc.cljs$lang$applyTo = (function (seq29315){
var G__29316 = cljs.core.first(seq29315);
var seq29315__$1 = cljs.core.next(seq29315);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29316,seq29315__$1);
}));

app.common.data.oassoc_in = (function app$common$data$oassoc_in(o,p__29323,v){
var vec__29324 = p__29323;
var seq__29325 = cljs.core.seq(vec__29324);
var first__29326 = cljs.core.first(seq__29325);
var seq__29325__$1 = cljs.core.next(seq__29325);
var k = first__29326;
var ks = seq__29325__$1;
if(ks){
return app.common.data.oassoc.cljs$core$IFn$_invoke$arity$variadic(o,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k,(function (){var G__29327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(o,k);
var G__29328 = ks;
var G__29329 = v;
return (app.common.data.oassoc_in.cljs$core$IFn$_invoke$arity$3 ? app.common.data.oassoc_in.cljs$core$IFn$_invoke$arity$3(G__29327,G__29328,G__29329) : app.common.data.oassoc_in.call(null,G__29327,G__29328,G__29329));
})()], 0));
} else {
return app.common.data.oassoc.cljs$core$IFn$_invoke$arity$variadic(o,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k,v], 0));
}
});
app.common.data.oupdate_in = (function app$common$data$oupdate_in(var_args){
var args__5755__auto__ = [];
var len__5749__auto___30025 = arguments.length;
var i__5750__auto___30026 = (0);
while(true){
if((i__5750__auto___30026 < len__5749__auto___30025)){
args__5755__auto__.push((arguments[i__5750__auto___30026]));

var G__30027 = (i__5750__auto___30026 + (1));
i__5750__auto___30026 = G__30027;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return app.common.data.oupdate_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(app.common.data.oupdate_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,f,args){
var up = (function app$common$data$up(m__$1,ks__$1,f__$1,args__$1){
var vec__29334 = ks__$1;
var seq__29335 = cljs.core.seq(vec__29334);
var first__29336 = cljs.core.first(seq__29335);
var seq__29335__$1 = cljs.core.next(seq__29335);
var k = first__29336;
var ks__$2 = seq__29335__$1;
if(ks__$2){
return app.common.data.oassoc.cljs$core$IFn$_invoke$arity$variadic(m__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k,app$common$data$up(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k),ks__$2,f__$1,args__$1)], 0));
} else {
return app.common.data.oassoc.cljs$core$IFn$_invoke$arity$variadic(m__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k),args__$1)], 0));
}
});
return up(m,ks,f,args);
}));

(app.common.data.oupdate_in.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(app.common.data.oupdate_in.cljs$lang$applyTo = (function (seq29330){
var G__29331 = cljs.core.first(seq29330);
var seq29330__$1 = cljs.core.next(seq29330);
var G__29332 = cljs.core.first(seq29330__$1);
var seq29330__$2 = cljs.core.next(seq29330__$1);
var G__29333 = cljs.core.first(seq29330__$2);
var seq29330__$3 = cljs.core.next(seq29330__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29331,G__29332,G__29333,seq29330__$3);
}));

/**
 * Assoc a k v pair, in the order position just before the other key.
 */
app.common.data.oreorder_before = (function app$common$data$oreorder_before(o,ks,k,v,before_k){
var f = (function (o_SINGLEQUOTE_){
var found = cljs.core.volatile_BANG_(false);
var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__29344){
var vec__29345 = p__29344;
var k_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29345,(0),null);
var v_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29345,(1),null);
if(cljs.core.truth_((function (){var and__5023__auto__ = before_k;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_SINGLEQUOTE_,before_k);
} else {
return and__5023__auto__;
}
})())){
cljs.core.vreset_BANG_(found,true);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,k,v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_SINGLEQUOTE_,v_SINGLEQUOTE_], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,k_SINGLEQUOTE_)){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k_SINGLEQUOTE_,v_SINGLEQUOTE_);

}
}
}),app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$0(),o_SINGLEQUOTE_);
if(((cljs.core.not(before_k)) || (cljs.core.not(cljs.core.deref(found))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
} else {
return result;
}
});
if(cljs.core.seq(ks)){
return app.common.data.oupdate_in(o,ks,f);
} else {
return f(o);
}
});
/**
 * Assoc a k v pair, in the order position just before the other key
 */
app.common.data.oassoc_before = (function app$common$data$oassoc_before(o,before_k,k,v){
var temp__5823__auto__ = (function (){var G__29348 = cljs.core.keys(o);
var G__29349 = before_k;
return (app.common.data.index_of.cljs$core$IFn$_invoke$arity$2 ? app.common.data.index_of.cljs$core$IFn$_invoke$arity$2(G__29348,G__29349) : app.common.data.index_of.call(null,G__29348,G__29349));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var index = temp__5823__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$0(),cljs.core.take.cljs$core$IFn$_invoke$arity$2(index,o)),k,v),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(index,o));
} else {
return app.common.data.oassoc.cljs$core$IFn$_invoke$arity$variadic(o,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k,v], 0));
}
});
app.common.data.oassoc_in_before = (function app$common$data$oassoc_in_before(o,p__29355,p__29356,v){
var vec__29358 = p__29355;
var seq__29359 = cljs.core.seq(vec__29358);
var first__29360 = cljs.core.first(seq__29359);
var seq__29359__$1 = cljs.core.next(seq__29359);
var before_k = first__29360;
var before_ks = seq__29359__$1;
var vec__29361 = p__29356;
var seq__29362 = cljs.core.seq(vec__29361);
var first__29363 = cljs.core.first(seq__29362);
var seq__29362__$1 = cljs.core.next(seq__29362);
var k = first__29363;
var ks = seq__29362__$1;
var temp__5823__auto__ = (function (){var G__29367 = cljs.core.keys(o);
var G__29368 = before_k;
return (app.common.data.index_of.cljs$core$IFn$_invoke$arity$2 ? app.common.data.index_of.cljs$core$IFn$_invoke$arity$2(G__29367,G__29368) : app.common.data.index_of.call(null,G__29367,G__29368));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var index = temp__5823__auto__;
var new_v = ((ks)?(function (){var G__29369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(o,k);
var G__29370 = before_ks;
var G__29371 = ks;
var G__29372 = v;
return (app.common.data.oassoc_in_before.cljs$core$IFn$_invoke$arity$4 ? app.common.data.oassoc_in_before.cljs$core$IFn$_invoke$arity$4(G__29369,G__29370,G__29371,G__29372) : app.common.data.oassoc_in_before.call(null,G__29369,G__29370,G__29371,G__29372));
})():v);
var current_index = (function (){var G__29373 = cljs.core.keys(o);
var G__29374 = k;
return (app.common.data.index_of.cljs$core$IFn$_invoke$arity$2 ? app.common.data.index_of.cljs$core$IFn$_invoke$arity$2(G__29373,G__29374) : app.common.data.index_of.call(null,G__29373,G__29374));
})();
var new_index = (cljs.core.truth_((function (){var and__5023__auto__ = current_index;
if(cljs.core.truth_(and__5023__auto__)){
return (current_index < index);
} else {
return and__5023__auto__;
}
})())?(index - (1)):index);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,before_k)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$0(),cljs.core.take.cljs$core$IFn$_invoke$arity$2(new_index,o)),k,new_v),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((new_index + (1)),o));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$0(),cljs.core.take.cljs$core$IFn$_invoke$arity$2(new_index,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(o,k))),k,new_v),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(new_index,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(o,k)));
}
} else {
return app.common.data.oassoc_in(o,cljs.core.cons(k,ks),v);
}
});
/**
 * Creates an optimized vector compatible type of length 2 backed
 *   internally with MapEntry impl because it has faster access method
 *   for its fields.
 */
app.common.data.vec2 = (function app$common$data$vec2(o1,o2){
return cljs.core.__GT_MapEntry(o1,o2,null);
});
app.common.data.queue = (function app$common$data$queue(var_args){
var G__29399 = arguments.length;
switch (G__29399) {
case 0:
return app.common.data.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.common.data.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___30033 = arguments.length;
var i__5750__auto___30034 = (0);
while(true){
if((i__5750__auto___30034 < len__5749__auto___30033)){
args_arr__5774__auto__.push((arguments[i__5750__auto___30034]));

var G__30035 = (i__5750__auto___30034 + (1));
i__5750__auto___30034 = G__30035;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((1)),(0),null)):null);
return app.common.data.queue.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);

}
});

(app.common.data.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY);
}));

(app.common.data.queue.cljs$core$IFn$_invoke$arity$1 = (function (a){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.queue.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null));
}));

(app.common.data.queue.cljs$core$IFn$_invoke$arity$variadic = (function (a,more){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.queue.cljs$core$IFn$_invoke$arity$0(),cljs.core.cons(a,more));
}));

/** @this {Function} */
(app.common.data.queue.cljs$lang$applyTo = (function (seq29397){
var G__29398 = cljs.core.first(seq29397);
var seq29397__$1 = cljs.core.next(seq29397);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29398,seq29397__$1);
}));

(app.common.data.queue.cljs$lang$maxFixedArity = (1));

app.common.data.array_QMARK_ = (function app$common$data$array_QMARK_(o){
return cljs.core.array_QMARK_(o);
});
app.common.data.not_empty_QMARK_ = (function app$common$data$not_empty_QMARK_(coll){
return cljs.core.boolean$(cljs.core.seq(coll));
});
app.common.data.editable_collection_QMARK_ = (function app$common$data$editable_collection_QMARK_(m){
if((!((m == null)))){
if((((m.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === m.cljs$core$IEditableCollection$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
app.common.data.deep_merge = (function app$common$data$deep_merge(var_args){
var G__29510 = arguments.length;
switch (G__29510) {
case 2:
return app.common.data.deep_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___30038 = arguments.length;
var i__5750__auto___30039 = (0);
while(true){
if((i__5750__auto___30039 < len__5749__auto___30038)){
args_arr__5774__auto__.push((arguments[i__5750__auto___30039]));

var G__30040 = (i__5750__auto___30039 + (1));
i__5750__auto___30039 = G__30040;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return app.common.data.deep_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(app.common.data.deep_merge.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.map_QMARK_(a)){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(app.common.data.deep_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
} else {
return b;
}
}));

(app.common.data.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rest){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.data.deep_merge,a,cljs.core.cons(b,rest));
}));

/** @this {Function} */
(app.common.data.deep_merge.cljs$lang$applyTo = (function (seq29503){
var G__29505 = cljs.core.first(seq29503);
var seq29503__$1 = cljs.core.next(seq29503);
var G__29506 = cljs.core.first(seq29503__$1);
var seq29503__$2 = cljs.core.next(seq29503__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29505,G__29506,seq29503__$2);
}));

(app.common.data.deep_merge.cljs$lang$maxFixedArity = (2));

app.common.data.dissoc_in = (function app$common$data$dissoc_in(m,p__29534){
var vec__29537 = p__29534;
var seq__29538 = cljs.core.seq(vec__29537);
var first__29539 = cljs.core.first(seq__29538);
var seq__29538__$1 = cljs.core.next(seq__29538);
var k = first__29539;
var ks = seq__29538__$1;
if(ks){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5823__auto__)){
var nextmap = temp__5823__auto__;
var newmap = (app.common.data.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? app.common.data.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : app.common.data.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
/**
 * A totally lazy implementation of concat with different call
 *   signature. It works like a flatten with a single level of nesting.
 */
app.common.data.concat_all = (function app$common$data$concat_all(colls){
return (new cljs.core.LazySeq(null,(function (){
var c = cljs.core.seq(colls);
var o = cljs.core.first(c);
var r = cljs.core.rest(c);
var temp__5823__auto__ = cljs.core.seq(o);
if(temp__5823__auto__){
var o__$1 = temp__5823__auto__;
return cljs.core.cons(cljs.core.first(o__$1),(function (){var G__29550 = cljs.core.cons(cljs.core.rest(o__$1),r);
return (app.common.data.concat_all.cljs$core$IFn$_invoke$arity$1 ? app.common.data.concat_all.cljs$core$IFn$_invoke$arity$1(G__29550) : app.common.data.concat_all.call(null,G__29550));
})());
} else {
var G__29553 = cljs.core.seq(r);
if((G__29553 == null)){
return null;
} else {
return (app.common.data.concat_all.cljs$core$IFn$_invoke$arity$1 ? app.common.data.concat_all.cljs$core$IFn$_invoke$arity$1(G__29553) : app.common.data.concat_all.call(null,G__29553));
}
}
}),null,null));
});
/**
 * A fully lazy version of mapcat.
 */
app.common.data.mapcat = (function app$common$data$mapcat(var_args){
var G__29572 = arguments.length;
switch (G__29572) {
case 1:
return app.common.data.mapcat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___30046 = arguments.length;
var i__5750__auto___30050 = (0);
while(true){
if((i__5750__auto___30050 < len__5749__auto___30046)){
args_arr__5774__auto__.push((arguments[i__5750__auto___30050]));

var G__30051 = (i__5750__auto___30050 + (1));
i__5750__auto___30050 = G__30051;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((1)),(0),null)):null);
return app.common.data.mapcat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);

}
});

(app.common.data.mapcat.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(f);
}));

(app.common.data.mapcat.cljs$core$IFn$_invoke$arity$variadic = (function (f,colls){
return app.common.data.concat_all(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,colls));
}));

/** @this {Function} */
(app.common.data.mapcat.cljs$lang$applyTo = (function (seq29560){
var G__29561 = cljs.core.first(seq29560);
var seq29560__$1 = cljs.core.next(seq29560);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29561,seq29560__$1);
}));

(app.common.data.mapcat.cljs$lang$maxFixedArity = (1));

app.common.data.transient_concat = (function app$common$data$transient_concat(c1,colls){
var result = cljs.core.transient$(c1);
var colls__$1 = colls;
while(true){
if(cljs.core.truth_(colls__$1)){
var G__30063 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,result,cljs.core.first(colls__$1));
var G__30064 = cljs.core.next(colls__$1);
result = G__30063;
colls__$1 = G__30064;
continue;
} else {
return cljs.core.persistent_BANG_(result);
}
break;
}
});
app.common.data.concat_set = (function app$common$data$concat_set(var_args){
var G__29593 = arguments.length;
switch (G__29593) {
case 0:
return app.common.data.concat_set.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.common.data.concat_set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___30066 = arguments.length;
var i__5750__auto___30067 = (0);
while(true){
if((i__5750__auto___30067 < len__5749__auto___30066)){
args_arr__5774__auto__.push((arguments[i__5750__auto___30067]));

var G__30070 = (i__5750__auto___30067 + (1));
i__5750__auto___30067 = G__30070;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((1)),(0),null)):null);
return app.common.data.concat_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);

}
});

(app.common.data.concat_set.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
}));

(app.common.data.concat_set.cljs$core$IFn$_invoke$arity$1 = (function (c1){
if(cljs.core.set_QMARK_(c1)){
return c1;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,c1);
}
}));

(app.common.data.concat_set.cljs$core$IFn$_invoke$arity$variadic = (function (c1,more){
if(cljs.core.set_QMARK_(c1)){
return app.common.data.transient_concat(c1,more);
} else {
return app.common.data.transient_concat(cljs.core.PersistentHashSet.EMPTY,cljs.core.cons(c1,more));
}
}));

/** @this {Function} */
(app.common.data.concat_set.cljs$lang$applyTo = (function (seq29591){
var G__29592 = cljs.core.first(seq29591);
var seq29591__$1 = cljs.core.next(seq29591);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29592,seq29591__$1);
}));

(app.common.data.concat_set.cljs$lang$maxFixedArity = (1));

app.common.data.concat_vec = (function app$common$data$concat_vec(var_args){
var G__29598 = arguments.length;
switch (G__29598) {
case 0:
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___30075 = arguments.length;
var i__5750__auto___30076 = (0);
while(true){
if((i__5750__auto___30076 < len__5749__auto___30075)){
args_arr__5774__auto__.push((arguments[i__5750__auto___30076]));

var G__30077 = (i__5750__auto___30076 + (1));
i__5750__auto___30076 = G__30077;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((1)),(0),null)):null);
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);

}
});

(app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$1 = (function (c1){
if(cljs.core.vector_QMARK_(c1)){
return c1;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,c1);
}
}));

(app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic = (function (c1,more){
if(cljs.core.vector_QMARK_(c1)){
return app.common.data.transient_concat(c1,more);
} else {
return app.common.data.transient_concat(cljs.core.PersistentVector.EMPTY,cljs.core.cons(c1,more));
}
}));

/** @this {Function} */
(app.common.data.concat_vec.cljs$lang$applyTo = (function (seq29596){
var G__29597 = cljs.core.first(seq29596);
var seq29596__$1 = cljs.core.next(seq29596);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29597,seq29596__$1);
}));

(app.common.data.concat_vec.cljs$lang$maxFixedArity = (1));

app.common.data.enumerate = (function app$common$data$enumerate(var_args){
var G__29603 = arguments.length;
switch (G__29603) {
case 1:
return app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.data.enumerate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1 = (function (items){
return app.common.data.enumerate.cljs$core$IFn$_invoke$arity$2(items,(0));
}));

(app.common.data.enumerate.cljs$core$IFn$_invoke$arity$2 = (function (items,start){
var idx = start;
var items__$1 = cljs.core.seq(items);
var res = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(items__$1){
var G__30084 = (idx + (1));
var G__30085 = cljs.core.next(items__$1);
var G__30086 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,cljs.core.first(items__$1)], null));
idx = G__30084;
items__$1 = G__30085;
res = G__30086;
continue;
} else {
return cljs.core.persistent_BANG_(res);
}
break;
}
}));

(app.common.data.enumerate.cljs$lang$maxFixedArity = 2);

app.common.data.group_by = (function app$common$data$group_by(var_args){
var G__29605 = arguments.length;
switch (G__29605) {
case 2:
return app.common.data.group_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.data.group_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.data.group_by.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.group_by.cljs$core$IFn$_invoke$arity$2 = (function (kf,coll){
return app.common.data.group_by.cljs$core$IFn$_invoke$arity$4(kf,cljs.core.identity,cljs.core.PersistentVector.EMPTY,coll);
}));

(app.common.data.group_by.cljs$core$IFn$_invoke$arity$3 = (function (kf,vf,coll){
return app.common.data.group_by.cljs$core$IFn$_invoke$arity$4(kf,vf,cljs.core.PersistentVector.EMPTY,coll);
}));

(app.common.data.group_by.cljs$core$IFn$_invoke$arity$4 = (function (kf,vf,iv,coll){
var conj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,iv);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,item){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,(kf.cljs$core$IFn$_invoke$arity$1 ? kf.cljs$core$IFn$_invoke$arity$1(item) : kf.call(null,item)),conj,(vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(item) : vf.call(null,item)));
}),cljs.core.PersistentArrayMap.EMPTY,coll);
}));

(app.common.data.group_by.cljs$lang$maxFixedArity = 4);

/**
 * Find the first boletus croquetta, settles for jamon if none found.
 */
app.common.data.seek = (function app$common$data$seek(var_args){
var G__29608 = arguments.length;
switch (G__29608) {
case 2:
return app.common.data.seek.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.data.seek.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.seek.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return app.common.data.seek.cljs$core$IFn$_invoke$arity$3(pred,coll,null);
}));

(app.common.data.seek.cljs$core$IFn$_invoke$arity$3 = (function (pred,coll,ham){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.reduced(x);
} else {
return ham;
}
}),ham,coll);
}));

(app.common.data.seek.cljs$lang$maxFixedArity = 3);

/**
 * Return a indexed map of the collection keyed by the result of
 *   executing the getter over each element of the collection.
 */
app.common.data.index_by = (function app$common$data$index_by(var_args){
var G__29622 = arguments.length;
switch (G__29622) {
case 2:
return app.common.data.index_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.data.index_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.index_by.cljs$core$IFn$_invoke$arity$2 = (function (kf,coll){
return app.common.data.index_by.cljs$core$IFn$_invoke$arity$3(kf,cljs.core.identity,coll);
}));

(app.common.data.index_by.cljs$core$IFn$_invoke$arity$3 = (function (kf,vf,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29618_SHARP_,p2__29619_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__29618_SHARP_,(kf.cljs$core$IFn$_invoke$arity$1 ? kf.cljs$core$IFn$_invoke$arity$1(p2__29619_SHARP_) : kf.call(null,p2__29619_SHARP_)),(vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(p2__29619_SHARP_) : vf.call(null,p2__29619_SHARP_)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
}));

(app.common.data.index_by.cljs$lang$maxFixedArity = 3);

app.common.data.index_of_pred = (function app$common$data$index_of_pred(coll,pred){
var s = cljs.core.seq(coll);
var index = (0);
while(true){
if(s){
if(cljs.core.truth_((function (){var G__29631 = cljs.core.first(s);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__29631) : pred.call(null,G__29631));
})())){
return index;
} else {
var G__30097 = cljs.core.next(s);
var G__30098 = (index + (1));
s = G__30097;
index = G__30098;
continue;
}
} else {
return null;
}
break;
}
});
app.common.data.index_of = (function app$common$data$index_of(coll,v){
return app.common.data.index_of_pred(coll,(function (p1__29633_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__29633_SHARP_,v);
}));
});
app.common.data.replace_by_id = (function app$common$data$replace_by_id(var_args){
var G__29637 = arguments.length;
switch (G__29637) {
case 1:
return app.common.data.replace_by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.data.replace_by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.replace_by_id.cljs$core$IFn$_invoke$arity$1 = (function (value){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(value))){
return value;
} else {
return item;
}
}));
}));

(app.common.data.replace_by_id.cljs$core$IFn$_invoke$arity$2 = (function (coll,value){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(app.common.data.replace_by_id.cljs$core$IFn$_invoke$arity$1(value),coll);
}));

(app.common.data.replace_by_id.cljs$lang$maxFixedArity = 2);

app.common.data.vec_without_nils = (function app$common$data$vec_without_nils(coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_),coll);
});
/**
 * Given a map, return a map removing key-value
 *   pairs when value is `nil`.
 */
app.common.data.without_nils = (function app$common$data$without_nils(var_args){
var G__29647 = arguments.length;
switch (G__29647) {
case 0:
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.without_nils.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.val));
}));

(app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1 = (function (data){
return cljs.core.reduce_kv((function (data__$1,k,v){
if((v == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data__$1,k);
} else {
return data__$1;
}
}),data,data);
}));

(app.common.data.without_nils.cljs$lang$maxFixedArity = 1);

app.common.data.without_qualified = (function app$common$data$without_qualified(var_args){
var G__29654 = arguments.length;
switch (G__29654) {
case 0:
return app.common.data.without_qualified.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.common.data.without_qualified.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.without_qualified.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.qualified_keyword_QMARK_,cljs.core.key));
}));

(app.common.data.without_qualified.cljs$core$IFn$_invoke$arity$1 = (function (data){
return cljs.core.reduce_kv((function (data__$1,k,_){
if(cljs.core.qualified_keyword_QMARK_(k)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data__$1,k);
} else {
return data__$1;
}
}),data,data);
}));

(app.common.data.without_qualified.cljs$lang$maxFixedArity = 1);

/**
 * Return a map without the keys provided
 *   in the `keys` parameter.
 */
app.common.data.without_keys = (function app$common$data$without_keys(data,keys){
if(app.common.data.editable_collection_QMARK_(data)){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc_BANG_,cljs.core.transient$(data),keys));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,data,keys);
}
});
/**
 * Changes is some attributes that need to change in object.
 *   When the attribute is nil it will be removed.
 * 
 *   For example
 *  - object:  {:a 1 :b {:foo 1 :bar 2} :c 10}
 *  - changes: {:a 2 :b {:foo nil :k 3}}
 *  - result:  {:a 2 :b {:bar 2 :k 3} :c 10}
 *   
 */
app.common.data.patch_object = (function app$common$data$patch_object(var_args){
var G__29661 = arguments.length;
switch (G__29661) {
case 1:
return app.common.data.patch_object.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.patch_object.cljs$core$IFn$_invoke$arity$1 = (function (changes){
return (function (p1__29658_SHARP_){
return app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(p1__29658_SHARP_,changes);
});
}));

(app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2 = (function (object,changes){
if(cljs.core.truth_(object)){
return cljs.core.reduce_kv((function (object__$1,key,value){
if(cljs.core.map_QMARK_(value)){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(object__$1,key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(object__$1,key,app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(current,value));
} else {
if((((value == null)) && (cljs.core.record_QMARK_(object__$1)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(object__$1,key,null);
} else {
if((value == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(object__$1,key);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(object__$1,key,value);

}
}
}
}),object,changes);
} else {
return changes;
}
}));

(app.common.data.patch_object.cljs$lang$maxFixedArity = 2);

/**
 * Takes a vector and returns a vector with an element in the
 *   specified index removed.
 */
app.common.data.remove_at_index = (function app$common$data$remove_at_index(v,index){
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),index),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(index + (1)))], 0));
});
/**
 * Return a vector with all elements equal to `o` removed.
 */
app.common.data.without_obj = (function app$common$data$without_obj(coll,o){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__29665_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__29665_SHARP_,o);
})),coll);
});
app.common.data.zip = (function app$common$data$zip(col1,col2){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,col1,col2);
});
/**
 * Return a zip of both collections, extended to the length of the longest one,
 * and padding the shorter one with nils as needed.
 */
app.common.data.zip_all = (function app$common$data$zip_all(col1,col2){
var diff = (cljs.core.count(col1) - cljs.core.count(col2));
if((diff > (0))){
return app.common.data.zip(col1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(col2,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
} else {
if((diff < (0))){
return app.common.data.zip(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(col1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),col2);
} else {
return app.common.data.zip(col1,col2);

}
}
});
/**
 * Map over the values of a map
 */
app.common.data.mapm = (function app$common$data$mapm(var_args){
var G__29667 = arguments.length;
switch (G__29667) {
case 1:
return app.common.data.mapm.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.data.mapm.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.mapm.cljs$core$IFn$_invoke$arity$1 = (function (mfn){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__29668){
var vec__29669 = p__29668;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29669,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29669,(1),null);
return app.common.data.vec2(key,(mfn.cljs$core$IFn$_invoke$arity$2 ? mfn.cljs$core$IFn$_invoke$arity$2(key,val) : mfn.call(null,key,val)));
}));
}));

(app.common.data.mapm.cljs$core$IFn$_invoke$arity$2 = (function (mfn,coll){
return cljs.core.reduce_kv((function (coll__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coll__$1,k,(mfn.cljs$core$IFn$_invoke$arity$2 ? mfn.cljs$core$IFn$_invoke$arity$2(k,v) : mfn.call(null,k,v)));
}),coll,coll);
}));

(app.common.data.mapm.cljs$lang$maxFixedArity = 2);

/**
 * Returns a vector of the items in coll for which (pred item) returns logical false
 */
app.common.data.removev = (function app$common$data$removev(pred,coll){
return cljs.core.filterv(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,pred),coll);
});
/**
 * Filter values of a map that satisfy a predicate
 */
app.common.data.filterm = (function app$common$data$filterm(pred,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(pred),coll);
});
/**
 * Remove values of a map that satisfy a predicate
 */
app.common.data.removem = (function app$common$data$removem(pred,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(pred),coll);
});
/**
 * Maps a function to each pair of values that can be combined inside the
 *   function without repetition.
 * 
 *   Optional parameters:
 *   `pred?`   A predicate that if not satisfied won't process the pair
 *   `target`  A collection that will be used as seed to be stored
 * 
 *   Example:
 *   (map-perm vector [1 2 3 4]) => [[1 2] [1 3] [1 4] [2 3] [2 4] [3 4]]
 */
app.common.data.map_perm = (function app$common$data$map_perm(var_args){
var G__29673 = arguments.length;
switch (G__29673) {
case 2:
return app.common.data.map_perm.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.data.map_perm.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.data.map_perm.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.map_perm.cljs$core$IFn$_invoke$arity$2 = (function (mfn,coll){
return app.common.data.map_perm.cljs$core$IFn$_invoke$arity$4(mfn,cljs.core.constantly(true),cljs.core.PersistentVector.EMPTY,coll);
}));

(app.common.data.map_perm.cljs$core$IFn$_invoke$arity$3 = (function (mfn,pred_QMARK_,coll){
return app.common.data.map_perm.cljs$core$IFn$_invoke$arity$4(mfn,pred_QMARK_,cljs.core.PersistentVector.EMPTY,coll);
}));

(app.common.data.map_perm.cljs$core$IFn$_invoke$arity$4 = (function (mfn,pred_QMARK_,target,coll){
var result = cljs.core.transient$(target);
var current = cljs.core.first(coll);
var coll__$1 = cljs.core.rest(coll);
while(true){
if(cljs.core.not(current)){
return cljs.core.persistent_BANG_(result);
} else {
var result__$1 = (function (){var result__$1 = result;
var other = cljs.core.first(coll__$1);
var coll__$2 = cljs.core.rest(coll__$1);
while(true){
if(cljs.core.not(other)){
return result__$1;
} else {
var G__30146 = (function (){var G__29681 = result__$1;
if(cljs.core.truth_((pred_QMARK_.cljs$core$IFn$_invoke$arity$2 ? pred_QMARK_.cljs$core$IFn$_invoke$arity$2(current,other) : pred_QMARK_.call(null,current,other)))){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__29681,(mfn.cljs$core$IFn$_invoke$arity$2 ? mfn.cljs$core$IFn$_invoke$arity$2(current,other) : mfn.call(null,current,other)));
} else {
return G__29681;
}
})();
var G__30147 = cljs.core.first(coll__$2);
var G__30148 = cljs.core.rest(coll__$2);
result__$1 = G__30146;
other = G__30147;
coll__$2 = G__30148;
continue;
}
break;
}
})();
var G__30152 = result__$1;
var G__30153 = cljs.core.first(coll__$1);
var G__30154 = cljs.core.rest(coll__$1);
result = G__30152;
current = G__30153;
coll__$1 = G__30154;
continue;
}
break;
}
}));

(app.common.data.map_perm.cljs$lang$maxFixedArity = 4);

/**
 * Returns a new collection with the cartesian product of both collections.
 *   For example:
 *  (join [1 2 3] [:a :b]) => ([1 :a] [1 :b] [2 :a] [2 :b] [3 :a] [3 :b])
 *   You can pass a function to merge the items. By default is `vector`:
 *  (join [1 2 3] [1 10 100] *) => (1 10 100 2 20 200 3 30 300)
 */
app.common.data.join = (function app$common$data$join(var_args){
var G__29685 = arguments.length;
switch (G__29685) {
case 2:
return app.common.data.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.data.join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.data.join.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.join.cljs$core$IFn$_invoke$arity$2 = (function (col1,col2){
return app.common.data.join.cljs$core$IFn$_invoke$arity$4(col1,col2,cljs.core.vector,cljs.core.PersistentVector.EMPTY);
}));

(app.common.data.join.cljs$core$IFn$_invoke$arity$3 = (function (col1,col2,join_fn){
return app.common.data.join.cljs$core$IFn$_invoke$arity$4(col1,col2,join_fn,cljs.core.PersistentVector.EMPTY);
}));

(app.common.data.join.cljs$core$IFn$_invoke$arity$4 = (function (col1,col2,join_fn,acc){
while(true){
if(cljs.core.empty_QMARK_(col1)){
return acc;
} else {
if(cljs.core.empty_QMARK_(col2)){
return acc;
} else {
var G__30173 = cljs.core.rest(col1);
var G__30174 = col2;
var G__30175 = join_fn;
var G__30176 = (function (){var other = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(join_fn,cljs.core.first(col1)),col2);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,other);
})();
col1 = G__30173;
col2 = G__30174;
join_fn = G__30175;
acc = G__30176;
continue;

}
}
break;
}
}));

(app.common.data.join.cljs$lang$maxFixedArity = 4);

app.common.data.sentinel = (new Object());
/**
 * Returns a function to access a map
 */
app.common.data.getf = (function app$common$data$getf(coll){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get,coll);
});
app.common.data.update_vals = (function app$common$data$update_vals(m,f){
return cljs.core.reduce_kv((function (acc,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),m,m);
});
app.common.data.update_in_when = (function app$common$data$update_in_when(var_args){
var args__5755__auto__ = [];
var len__5749__auto___30193 = arguments.length;
var i__5750__auto___30202 = (0);
while(true){
if((i__5750__auto___30202 < len__5749__auto___30193)){
args__5755__auto__.push((arguments[i__5750__auto___30202]));

var G__30203 = (i__5750__auto___30202 + (1));
i__5750__auto___30202 = G__30203;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,key_seq,app.common.data.sentinel);
if((!((app.common.data.sentinel === found)))){
return cljs.core.assoc_in(m,key_seq,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else {
return m;
}
}));

(app.common.data.update_in_when.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(app.common.data.update_in_when.cljs$lang$applyTo = (function (seq29697){
var G__29698 = cljs.core.first(seq29697);
var seq29697__$1 = cljs.core.next(seq29697);
var G__29699 = cljs.core.first(seq29697__$1);
var seq29697__$2 = cljs.core.next(seq29697__$1);
var G__29700 = cljs.core.first(seq29697__$2);
var seq29697__$3 = cljs.core.next(seq29697__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29698,G__29699,G__29700,seq29697__$3);
}));

app.common.data.update_when = (function app$common$data$update_when(var_args){
var args__5755__auto__ = [];
var len__5749__auto___30221 = arguments.length;
var i__5750__auto___30222 = (0);
while(true){
if((i__5750__auto___30222 < len__5749__auto___30221)){
args__5755__auto__.push((arguments[i__5750__auto___30222]));

var G__30224 = (i__5750__auto___30222 + (1));
i__5750__auto___30222 = G__30224;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return app.common.data.update_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(app.common.data.update_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key,f,args){
var found = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,key,app.common.data.sentinel);
if((!((app.common.data.sentinel === found)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else {
return m;
}
}));

(app.common.data.update_when.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(app.common.data.update_when.cljs$lang$applyTo = (function (seq29706){
var G__29707 = cljs.core.first(seq29706);
var seq29706__$1 = cljs.core.next(seq29706);
var G__29708 = cljs.core.first(seq29706__$1);
var seq29706__$2 = cljs.core.next(seq29706__$1);
var G__29709 = cljs.core.first(seq29706__$2);
var seq29706__$3 = cljs.core.next(seq29706__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29707,G__29708,G__29709,seq29706__$3);
}));

app.common.data.assoc_in_when = (function app$common$data$assoc_in_when(m,key_seq,v){
var found = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,key_seq,app.common.data.sentinel);
if((!((app.common.data.sentinel === found)))){
return cljs.core.assoc_in(m,key_seq,v);
} else {
return m;
}
});
app.common.data.assoc_when = (function app$common$data$assoc_when(m,key,v){
var found = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,key,app.common.data.sentinel);
if((!((app.common.data.sentinel === found)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,v);
} else {
return m;
}
});
/**
 * A side effect map version.
 */
app.common.data.domap = (function app$common$data$domap(var_args){
var G__29717 = arguments.length;
switch (G__29717) {
case 1:
return app.common.data.domap.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.data.domap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.domap.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));

return x;
}));
}));

(app.common.data.domap.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));

return x;
}),coll);
}));

(app.common.data.domap.cljs$lang$maxFixedArity = 2);

app.common.data.merge = (function app$common$data$merge(var_args){
var args__5755__auto__ = [];
var len__5749__auto___30284 = arguments.length;
var i__5750__auto___30285 = (0);
while(true){
if((i__5750__auto___30285 < len__5749__auto___30284)){
args__5755__auto__.push((arguments[i__5750__auto___30285]));

var G__30286 = (i__5750__auto___30285 + (1));
i__5750__auto___30285 = G__30286;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.common.data.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.common.data.merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,(function (){var or__5025__auto__ = cljs.core.first(maps);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.rest(maps));
}));

(app.common.data.merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.common.data.merge.cljs$lang$applyTo = (function (seq29719){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29719));
}));

/**
 * Text attrs specific merge function.
 */
app.common.data.txt_merge = (function app$common$data$txt_merge(obj,attrs){
return cljs.core.reduce_kv((function (obj__$1,k,v){
if((v == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(obj__$1,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(obj__$1,k,v);
}
}),obj,attrs);
});
app.common.data.distinct_xf = (function app$common$data$distinct_xf(f){
return (function (rf){
var seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__30311 = null;
var G__30311__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__30311__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__30311__2 = (function (result,input){
var input_STAR_ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(input) : f.call(null,input));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen),input_STAR_)){
return result;
} else {
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null),input_STAR_));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,input) : rf.call(null,result,input));
}
});
G__30311 = function(result,input){
switch(arguments.length){
case 0:
return G__30311__0.call(this);
case 1:
return G__30311__1.call(this,result);
case 2:
return G__30311__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30311.cljs$core$IFn$_invoke$arity$0 = G__30311__0;
G__30311.cljs$core$IFn$_invoke$arity$1 = G__30311__1;
G__30311.cljs$core$IFn$_invoke$arity$2 = G__30311__2;
return G__30311;
})()
});
});
/**
 * Given a collection will return a new collection where each element
 *   is paired with the next item in the collection
 *   (with-next (range 5)) => [[0 1] [1 2] [2 3] [3 4] [4 nil]]
 */
app.common.data.with_next = (function app$common$data$with_next(coll){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,coll,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(coll),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)));
});
/**
 * Given a collection will return a new collection where each element
 *   is paired with the previous item in the collection
 *   (with-prev (range 5)) => [[0 nil] [1 0] [2 1] [3 2] [4 3]]
 */
app.common.data.with_prev = (function app$common$data$with_prev(coll){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,coll,cljs.core.cons(null,coll));
});
/**
 * Given a collection will return a new collection where every item is paired
 *   with the previous and the next item of a collection
 *   (with-prev-next (range 5)) => [[0 nil 1] [1 0 2] [2 1 3] [3 2 4] [4 3 nil]]
 */
app.common.data.with_prev_next = (function app$common$data$with_prev_next(coll){
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,coll,cljs.core.cons(null,coll),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(coll),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)));
});
/**
 * Applies a map function to an associative map and recurses over its children
 *   when it's a vector or a map
 */
app.common.data.deep_mapm = (function app$common$data$deep_mapm(mfn,m){
var do_map = (function (entry){
var vec__29725 = (mfn.cljs$core$IFn$_invoke$arity$1 ? mfn.cljs$core$IFn$_invoke$arity$1(entry) : mfn.call(null,entry));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29725,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29725,(1),null);
if(((cljs.core.vector_QMARK_(v)) || (cljs.core.map_QMARK_(v)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(app.common.data.deep_mapm.cljs$core$IFn$_invoke$arity$2 ? app.common.data.deep_mapm.cljs$core$IFn$_invoke$arity$2(mfn,v) : app.common.data.deep_mapm.call(null,mfn,v))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});
if(cljs.core.map_QMARK_(m)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(do_map),m);
} else {
if(cljs.core.vector_QMARK_(m)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.data.deep_mapm,mfn)),m);
} else {
return m;

}
}
});
/**
 * Creates a totally lazy seqable via repeated calls to step, a
 *   function of some (continuation token) 'k'. The first call to step
 *   will be passed initk, returning 'ret'. If (somef ret) is true, (vf
 *   ret) will be included in the iteration, else iteration will
 *   terminate and vf/kf will not be called. If (kf ret) is non-nil it
 *   will be passed to the next step call, else iteration will terminate.
 * 
 *   This can be used e.g. to consume APIs that return paginated or batched data.
 * 
 * step - (possibly impure) fn of 'k' -> 'ret'
 * :somef - fn of 'ret' -> logical true/false, default 'some?'
 * :vf - fn of 'ret' -> 'v', a value produced by the iteration, default 'identity'
 * :kf - fn of 'ret' -> 'next-k' or nil (signaling 'do not continue'), default 'identity'
 * :initk - the first value passed to step, default 'nil'
 * 
 *   It is presumed that step with non-initk is
 *   unreproducible/non-idempotent. If step with initk is unreproducible
 *   it is on the consumer to not consume twice.
 */
app.common.data.iteration = (function app$common$data$iteration(var_args){
var args__5755__auto__ = [];
var len__5749__auto___30343 = arguments.length;
var i__5750__auto___30352 = (0);
while(true){
if((i__5750__auto___30352 < len__5749__auto___30343)){
args__5755__auto__.push((arguments[i__5750__auto___30352]));

var G__30353 = (i__5750__auto___30352 + (1));
i__5750__auto___30352 = G__30353;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.common.data.iteration.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.common.data.iteration.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return app.common.data.concat_all(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.iteration,args));
}));

(app.common.data.iteration.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.common.data.iteration.cljs$lang$applyTo = (function (seq29733){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29733));
}));

/**
 * Insert an element in a vector at an arbitrary index
 */
app.common.data.add_at_index = (function app$common$data$add_at_index(coll,index,element){
if(cljs.core.vector_QMARK_(coll)){
} else {
throw (new Error("Assert failed: (vector? coll)"));
}

var vec__29744 = cljs.core.split_at(index,coll);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29744,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29744,(1),null);
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [element], null),after], 0));
});
/**
 * Insert a list of elements at the given index of a previous list.
 *   Replace all existing elems.
 */
app.common.data.insert_at_index = (function app$common$data$insert_at_index(elems,index,new_elems){
var vec__29747 = cljs.core.split_at(index,elems);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29747,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29747,(1),null);
var p_QMARK_ = cljs.core.set(new_elems);
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(p_QMARK_,before),new_elems,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(p_QMARK_,after)], 0));
});
/**
 * Insert an element in an ordered map at an arbitrary index
 */
app.common.data.addm_at_index = (function app$common$data$addm_at_index(coll,index,key,element){
if(app.common.data.ordered_map_QMARK_(coll)){
} else {
throw (new Error("Assert failed: (ordered-map? coll)"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$0(),cljs.core.take.cljs$core$IFn$_invoke$arity$2(index,coll)),key,element),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(index,coll));
});
/**
 * Insert a map {k v} of elements in an ordered map at an arbitrary index
 */
app.common.data.insertm_at_index = (function app$common$data$insertm_at_index(coll,index,new_elems){
if(app.common.data.ordered_map_QMARK_(coll)){
} else {
throw (new Error("Assert failed: (ordered-map? coll)"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$0(),cljs.core.take.cljs$core$IFn$_invoke$arity$2(index,coll)),new_elems),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(index,coll));
});
/**
 * Insert an element in an ordered set at an arbitrary index
 */
app.common.data.adds_at_index = (function app$common$data$adds_at_index(coll,index,element){
if(app.common.data.ordered_set_QMARK_(coll)){
} else {
throw (new Error("Assert failed: (ordered-set? coll)"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),cljs.core.take.cljs$core$IFn$_invoke$arity$2(index,coll)),element),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(index,coll));
});
/**
 * Insert a list of elements in an ordered set at an arbitrary index
 */
app.common.data.inserts_at_index = (function app$common$data$inserts_at_index(coll,index,new_elems){
if(app.common.data.ordered_set_QMARK_(coll)){
} else {
throw (new Error("Assert failed: (ordered-set? coll)"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),cljs.core.take.cljs$core$IFn$_invoke$arity$2(index,coll)),new_elems),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(index,coll));
});
/**
 * Like interleave, but stops when the longest seq is done, instead of the shortest.
 */
app.common.data.interleave_all = (function app$common$data$interleave_all(var_args){
var G__29779 = arguments.length;
switch (G__29779) {
case 0:
return app.common.data.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.common.data.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.data.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___30432 = arguments.length;
var i__5750__auto___30433 = (0);
while(true){
if((i__5750__auto___30433 < len__5749__auto___30432)){
args_arr__5774__auto__.push((arguments[i__5750__auto___30433]));

var G__30434 = (i__5750__auto___30433 + (1));
i__5750__auto___30433 = G__30434;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return app.common.data.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(app.common.data.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
}));

(app.common.data.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
}));

(app.common.data.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if(((s1) && (s2))){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),app.common.data.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
}));

(app.common.data.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1], 0))));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.common.data.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
}),null,null));
}));

/** @this {Function} */
(app.common.data.interleave_all.cljs$lang$applyTo = (function (seq29776){
var G__29777 = cljs.core.first(seq29776);
var seq29776__$1 = cljs.core.next(seq29776);
var G__29778 = cljs.core.first(seq29776__$1);
var seq29776__$2 = cljs.core.next(seq29776__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29777,G__29778,seq29776__$2);
}));

(app.common.data.interleave_all.cljs$lang$maxFixedArity = (2));

app.common.data.nan_QMARK_ = (function app$common$data$nan_QMARK_(v){
return isNaN(v);
});
app.common.data.impl_parse_integer = (function app$common$data$impl_parse_integer(v){
return parseInt(v,(10));
});
app.common.data.impl_parse_double = (function app$common$data$impl_parse_double(v){
return parseFloat(v);
});
app.common.data.parse_integer = (function app$common$data$parse_integer(var_args){
var G__29786 = arguments.length;
switch (G__29786) {
case 1:
return app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$1 = (function (v){
return app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$2(v,null);
}));

(app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$2 = (function (v,default$){
var v__$1 = app.common.data.impl_parse_integer(v);
if(cljs.core.truth_((function (){var or__5025__auto__ = (v__$1 == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.common.data.nan_QMARK_(v__$1);
}
})())){
return default$;
} else {
return v__$1;
}
}));

(app.common.data.parse_integer.cljs$lang$maxFixedArity = 2);

app.common.data.parse_double = (function app$common$data$parse_double(var_args){
var G__29793 = arguments.length;
switch (G__29793) {
case 1:
return app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1 = (function (v){
return app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(v,null);
}));

(app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2 = (function (v,default$){
var v__$1 = app.common.data.impl_parse_double(v);
if(cljs.core.truth_((function (){var or__5025__auto__ = (v__$1 == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.common.data.nan_QMARK_(v__$1);
}
})())){
return default$;
} else {
return v__$1;
}
}));

(app.common.data.parse_double.cljs$lang$maxFixedArity = 2);

app.common.data.percent_QMARK_ = (function app$common$data$percent_QMARK_(v){
return cuerdas.core.numeric_QMARK_(cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2(v,"%"));
});
app.common.data.parse_percent = (function app$common$data$parse_percent(var_args){
var G__29805 = arguments.length;
switch (G__29805) {
case 1:
return app.common.data.parse_percent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.data.parse_percent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.parse_percent.cljs$core$IFn$_invoke$arity$1 = (function (v){
return app.common.data.parse_percent.cljs$core$IFn$_invoke$arity$2(v,null);
}));

(app.common.data.parse_percent.cljs$core$IFn$_invoke$arity$2 = (function (v,default$){
if(cuerdas.core.ends_with_QMARK_(v,"%")){
var v__$1 = app.common.data.impl_parse_double(cuerdas.core.trim.cljs$core$IFn$_invoke$arity$2(v,"%"));
if(cljs.core.truth_((function (){var or__5025__auto__ = (v__$1 == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.common.data.nan_QMARK_(v__$1);
}
})())){
return default$;
} else {
return (v__$1 / (100));
}
} else {
return app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(v,default$);
}
}));

(app.common.data.parse_percent.cljs$lang$maxFixedArity = 2);

app.common.data.parse_uuid = (function app$common$data$parse_uuid(v){
try{return cljs.core.parse_uuid(v);
}catch (e29806){var _ = e29806;
return null;
}});
app.common.data.num_string_QMARK_ = (function app$common$data$num_string_QMARK_(v){
return ((typeof v === 'string') && (((cljs.core.not(isNaN(v))) && (cljs.core.not(isNaN(app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(v)))))));
});
app.common.data.read_string = (function app$common$data$read_string(v){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(v);
});
app.common.data.coalesce_str = (function app$common$data$coalesce_str(val,default$){
if(cljs.core.truth_((function (){var or__5025__auto__ = (val == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.common.data.nan_QMARK_(val);
}
})())){
return default$;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(val);
}
});
app.common.data.coalesce = (function app$common$data$coalesce(val,default$){
var or__5025__auto__ = val;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$;
}
});
/**
 * Return `true` if `x` is a regexp pattern
 *   instance.
 */
app.common.data.regexp_QMARK_ = (function app$common$data$regexp_QMARK_(x){
return cljs.core.regexp_QMARK_(x);
});
/**
 * Returns a new function that if you pass nil as any argument will
 *   return nil
 */
app.common.data.nilf = (function app$common$data$nilf(f){
return (function() { 
var G__30495__delegate = function (args){
if(cljs.core.truth_(cljs.core.some(cljs.core.nil_QMARK_,args))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
};
var G__30495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30499__i = 0, G__30499__a = new Array(arguments.length -  0);
while (G__30499__i < G__30499__a.length) {G__30499__a[G__30499__i] = arguments[G__30499__i + 0]; ++G__30499__i;}
  args = new cljs.core.IndexedSeq(G__30499__a,0,null);
} 
return G__30495__delegate.call(this,args);};
G__30495.cljs$lang$maxFixedArity = 0;
G__30495.cljs$lang$applyTo = (function (arglist__30500){
var args = cljs.core.seq(arglist__30500);
return G__30495__delegate(args);
});
G__30495.cljs$core$IFn$_invoke$arity$variadic = G__30495__delegate;
return G__30495;
})()
;
});
/**
 * Returns a default value if the given value is nil
 */
app.common.data.nilv = (function app$common$data$nilv(var_args){
var G__29833 = arguments.length;
switch (G__29833) {
case 1:
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.nilv.cljs$core$IFn$_invoke$arity$1 = (function (default$){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__29825_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(p1__29825_SHARP_,default$);
}));
}));

(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2 = (function (v,default$){
if((!((v == null)))){
return v;
} else {
return default$;
}
}));

(app.common.data.nilv.cljs$lang$maxFixedArity = 2);

/**
 * Checks if a value `val` is a number but not an Infinite or NaN
 */
app.common.data.num_QMARK_ = (function app$common$data$num_QMARK_(var_args){
var G__29840 = arguments.length;
switch (G__29840) {
case 1:
return app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___30517 = arguments.length;
var i__5750__auto___30519 = (0);
while(true){
if((i__5750__auto___30519 < len__5749__auto___30517)){
args_arr__5774__auto__.push((arguments[i__5750__auto___30519]));

var G__30523 = (i__5750__auto___30519 + (1));
i__5750__auto___30519 = G__30523;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((4) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((4)),(0),null)):null);
return app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5775__auto__);

}
});

(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return app.common.math.finite_QMARK_(a);
}));

(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return ((app.common.math.finite_QMARK_(a)) && (app.common.math.finite_QMARK_(b)));
}));

(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return ((app.common.math.finite_QMARK_(a)) && (((app.common.math.finite_QMARK_(b)) && (app.common.math.finite_QMARK_(c)))));
}));

(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
return ((app.common.math.finite_QMARK_(a)) && (((app.common.math.finite_QMARK_(b)) && (((app.common.math.finite_QMARK_(c)) && (app.common.math.finite_QMARK_(d)))))));
}));

(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,others){
return ((app.common.math.finite_QMARK_(a)) && (((app.common.math.finite_QMARK_(b)) && (((app.common.math.finite_QMARK_(c)) && (((app.common.math.finite_QMARK_(d)) && (cljs.core.every_QMARK_(app.common.math.finite_QMARK_,others)))))))));
}));

/** @this {Function} */
(app.common.data.num_QMARK_.cljs$lang$applyTo = (function (seq29835){
var G__29836 = cljs.core.first(seq29835);
var seq29835__$1 = cljs.core.next(seq29835);
var G__29837 = cljs.core.first(seq29835__$1);
var seq29835__$2 = cljs.core.next(seq29835__$1);
var G__29838 = cljs.core.first(seq29835__$2);
var seq29835__$3 = cljs.core.next(seq29835__$2);
var G__29839 = cljs.core.first(seq29835__$3);
var seq29835__$4 = cljs.core.next(seq29835__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29836,G__29837,G__29838,G__29839,seq29835__$4);
}));

(app.common.data.num_QMARK_.cljs$lang$maxFixedArity = (4));

app.common.data.safe_PLUS_ = (function app$common$data$safe_PLUS_(a,b){
if(cljs.core.truth_(app.common.math.finite_QMARK_(a))){
return (a + b);
} else {
return a;
}
});
app.common.data.max = (function app$common$data$max(var_args){
var G__29849 = arguments.length;
switch (G__29849) {
case 1:
return app.common.data.max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.data.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.data.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.data.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return app.common.data.max.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return app.common.data.max.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___30591 = arguments.length;
var i__5750__auto___30592 = (0);
while(true){
if((i__5750__auto___30592 < len__5749__auto___30591)){
args_arr__5774__auto__.push((arguments[i__5750__auto___30592]));

var G__30593 = (i__5750__auto___30592 + (1));
i__5750__auto___30592 = G__30593;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((6) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((6)),(0),null)):null);
return app.common.data.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5775__auto__);

}
});

(app.common.data.max.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(app.common.data.max.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return Math.max(a,b);
}));

(app.common.data.max.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return Math.max(a,b,c);
}));

(app.common.data.max.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
return Math.max(a,b,c,d);
}));

(app.common.data.max.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
return Math.max(a,b,c,d,e);
}));

(app.common.data.max.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
return Math.max(a,b,c,d,e,f);
}));

(app.common.data.max.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,f,other){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.data.max,Math.max(a,b,c,d,e,f),other);
}));

/** @this {Function} */
(app.common.data.max.cljs$lang$applyTo = (function (seq29842){
var G__29843 = cljs.core.first(seq29842);
var seq29842__$1 = cljs.core.next(seq29842);
var G__29844 = cljs.core.first(seq29842__$1);
var seq29842__$2 = cljs.core.next(seq29842__$1);
var G__29845 = cljs.core.first(seq29842__$2);
var seq29842__$3 = cljs.core.next(seq29842__$2);
var G__29846 = cljs.core.first(seq29842__$3);
var seq29842__$4 = cljs.core.next(seq29842__$3);
var G__29847 = cljs.core.first(seq29842__$4);
var seq29842__$5 = cljs.core.next(seq29842__$4);
var G__29848 = cljs.core.first(seq29842__$5);
var seq29842__$6 = cljs.core.next(seq29842__$5);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29843,G__29844,G__29845,G__29846,G__29847,G__29848,seq29842__$6);
}));

(app.common.data.max.cljs$lang$maxFixedArity = (6));

app.common.data.min = (function app$common$data$min(var_args){
var G__29858 = arguments.length;
switch (G__29858) {
case 1:
return app.common.data.min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.data.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.data.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.data.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return app.common.data.min.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return app.common.data.min.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___30661 = arguments.length;
var i__5750__auto___30662 = (0);
while(true){
if((i__5750__auto___30662 < len__5749__auto___30661)){
args_arr__5774__auto__.push((arguments[i__5750__auto___30662]));

var G__30663 = (i__5750__auto___30662 + (1));
i__5750__auto___30662 = G__30663;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((6) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((6)),(0),null)):null);
return app.common.data.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5775__auto__);

}
});

(app.common.data.min.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(app.common.data.min.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return Math.min(a,b);
}));

(app.common.data.min.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return Math.min(a,b,c);
}));

(app.common.data.min.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
return Math.min(a,b,c,d);
}));

(app.common.data.min.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
return Math.min(a,b,c,d,e);
}));

(app.common.data.min.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
return Math.min(a,b,c,d,e,f);
}));

(app.common.data.min.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,f,other){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.data.min,Math.min(a,b,c,d,e,f),other);
}));

/** @this {Function} */
(app.common.data.min.cljs$lang$applyTo = (function (seq29851){
var G__29852 = cljs.core.first(seq29851);
var seq29851__$1 = cljs.core.next(seq29851);
var G__29853 = cljs.core.first(seq29851__$1);
var seq29851__$2 = cljs.core.next(seq29851__$1);
var G__29854 = cljs.core.first(seq29851__$2);
var seq29851__$3 = cljs.core.next(seq29851__$2);
var G__29855 = cljs.core.first(seq29851__$3);
var seq29851__$4 = cljs.core.next(seq29851__$3);
var G__29856 = cljs.core.first(seq29851__$4);
var seq29851__$5 = cljs.core.next(seq29851__$4);
var G__29857 = cljs.core.first(seq29851__$5);
var seq29851__$6 = cljs.core.next(seq29851__$5);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29852,G__29853,G__29854,G__29855,G__29856,G__29857,seq29851__$6);
}));

(app.common.data.min.cljs$lang$maxFixedArity = (6));

/**
 * Function that checks if a number is nil or nan. Will return 0 when not
 *   valid and the number otherwise.
 */
app.common.data.check_num = (function app$common$data$check_num(var_args){
var G__29865 = arguments.length;
switch (G__29865) {
case 1:
return app.common.data.check_num.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.data.check_num.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.check_num.cljs$core$IFn$_invoke$arity$1 = (function (v){
return app.common.math.finite(v,(0));
}));

(app.common.data.check_num.cljs$core$IFn$_invoke$arity$2 = (function (v,default$){
return app.common.math.finite(v,default$);
}));

(app.common.data.check_num.cljs$lang$maxFixedArity = 2);

app.common.data.any_key_QMARK_ = (function app$common$data$any_key_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___30719 = arguments.length;
var i__5750__auto___30720 = (0);
while(true){
if((i__5750__auto___30720 < len__5749__auto___30719)){
args__5755__auto__.push((arguments[i__5750__auto___30720]));

var G__30721 = (i__5750__auto___30720 + (1));
i__5750__auto___30720 = G__30721;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.data.any_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.data.any_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (element,rest){
return cljs.core.some((function (p1__29866_SHARP_){
return cljs.core.contains_QMARK_(element,p1__29866_SHARP_);
}),rest);
}));

(app.common.data.any_key_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.data.any_key_QMARK_.cljs$lang$applyTo = (function (seq29867){
var G__29868 = cljs.core.first(seq29867);
var seq29867__$1 = cljs.core.next(seq29867);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29868,seq29867__$1);
}));

/**
 * Improved version of name that won't fail if the input is not a keyword
 */
app.common.data.name = (function app$common$data$name(maybe_keyword){
if((maybe_keyword == null)){
return null;
} else {
if((maybe_keyword instanceof cljs.core.Keyword)){
return cljs.core.name(maybe_keyword);
} else {
if(typeof maybe_keyword === 'string'){
return maybe_keyword;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(maybe_keyword);

}
}
}
});
/**
 * Given a keyword and a prefix will return a new keyword with the prefix attached
 *   (prefix-keyword "prefix" :test) => :prefix-test
 */
app.common.data.prefix_keyword = (function app$common$data$prefix_keyword(prefix,kw){
var prefix__$1 = (((prefix instanceof cljs.core.Keyword))?app.common.data.name(prefix):prefix);
var kw__$1 = (((kw instanceof cljs.core.Keyword))?app.common.data.name(kw):kw);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(kw__$1)].join(''));
});
/**
 * Similar to the tap in rxjs but for plain collections
 */
app.common.data.tap = (function app$common$data$tap(f,coll){
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(coll) : f.call(null,coll));

return coll;
});
/**
 * Same but with args reversed, for -> threads
 */
app.common.data.tap_r = (function app$common$data$tap_r(coll,f){
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(coll) : f.call(null,coll));

return coll;
});
/**
 * Given two maps returns the diff of its attributes in a map where
 *   the keys will be the attributes that change and the values the previous
 *   and current value. For attributes which value is a map this will be recursive.
 * 
 *   For example:
 *   (map-diff {:a 1 :b 2 :c { :foo 1 :var 2}
 *          {:a 2      :c { :foo 10 } :d 10)
 * 
 *   => { :a [1 2]
 *        :b [2 nil]
 *        :c { :foo [1 10]
 *             :var [2 nil]}
 *        :d [nil 10] }
 * 
 *   If both maps are identical the result will be an empty map.
 */
app.common.data.map_diff = (function app$common$data$map_diff(m1,m2){
var m1ks = cljs.core.set(cljs.core.keys(m1));
var m2ks = cljs.core.set(cljs.core.keys(m2));
var keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(m1ks,m2ks);
var diff_attr = (function (diff,key){
var v1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m1,key);
var v2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m2,key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v1,v2)){
return diff;
} else {
if(((cljs.core.map_QMARK_(v1)) && (cljs.core.map_QMARK_(v2)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(diff,key,(app.common.data.map_diff.cljs$core$IFn$_invoke$arity$2 ? app.common.data.map_diff.cljs$core$IFn$_invoke$arity$2(v1,v2) : app.common.data.map_diff.call(null,v1,v2)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(diff,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,v2], null));

}
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(diff_attr,cljs.core.PersistentArrayMap.EMPTY,keys);
});
app.common.data.extract_numeric_suffix = (function app$common$data$extract_numeric_suffix(basename){
var temp__5823__auto__ = cljs.core.re_find(/(.*)-([0-9]+)$/,basename);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__29874 = temp__5823__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29874,(0),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29874,(1),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29874,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,((1) + app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$1(p2))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [basename,(1)], null);
}
});
/**
 * A unique name generator
 */
app.common.data.unique_name = (function app$common$data$unique_name(var_args){
var G__29878 = arguments.length;
switch (G__29878) {
case 2:
return app.common.data.unique_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.data.unique_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.unique_name.cljs$core$IFn$_invoke$arity$2 = (function (basename,used){
return app.common.data.unique_name.cljs$core$IFn$_invoke$arity$3(basename,used,false);
}));

(app.common.data.unique_name.cljs$core$IFn$_invoke$arity$3 = (function (basename,used,prefix_first_QMARK_){
if(typeof basename === 'string'){
} else {
throw (new Error("Assert failed: (string? basename)"));
}

if(cljs.core.set_QMARK_(used)){
} else {
throw (new Error("Assert failed: (set? used)"));
}

if((cljs.core.count(basename) > (1000))){
return basename;
} else {
var vec__29885 = app.common.data.extract_numeric_suffix(basename);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29885,(0),null);
var initial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29885,(1),null);
if(((cljs.core.not(prefix_first_QMARK_)) && ((!(cljs.core.contains_QMARK_(used,basename)))))){
return basename;
} else {
var counter = initial;
while(true){
var candidate = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),counter);
if(and__5023__auto__){
return prefix_first_QMARK_;
} else {
return and__5023__auto__;
}
})())?cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join(''));
if(cljs.core.contains_QMARK_(used,candidate)){
var G__30801 = (counter + (1));
counter = G__30801;
continue;
} else {
return candidate;
}
break;
}
}
}
}));

(app.common.data.unique_name.cljs$lang$maxFixedArity = 3);

app.common.data.kebab_keys = (function app$common$data$kebab_keys(m){
return app.common.data.deep_mapm((function (p__29888){
var vec__29889 = p__29888;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29889,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29889,(1),null);
if((((k instanceof cljs.core.Keyword)) || (typeof k === 'string'))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cuerdas.core.kebab(app.common.data.name(k))),v], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
}),m);
});
app.common.data.toggle_selection = (function app$common$data$toggle_selection(var_args){
var G__29895 = arguments.length;
switch (G__29895) {
case 2:
return app.common.data.toggle_selection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.data.toggle_selection.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.toggle_selection.cljs$core$IFn$_invoke$arity$2 = (function (set,value){
return app.common.data.toggle_selection.cljs$core$IFn$_invoke$arity$3(set,value,false);
}));

(app.common.data.toggle_selection.cljs$core$IFn$_invoke$arity$3 = (function (set,value,toggle_QMARK_){
if(cljs.core.not(toggle_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),value);
} else {
if(cljs.core.contains_QMARK_(set,value)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(set,value);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(set,value);
}
}
}));

(app.common.data.toggle_selection.cljs$lang$maxFixedArity = 3);

/**
 * Creates a map with lazy values given the generator function that receives as argument
 *   the key for the value to be generated
 */
app.common.data.lazy_map = (function app$common$data$lazy_map(keys,generator_fn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(new cljs.core.Delay((function (){
return (generator_fn.cljs$core$IFn$_invoke$arity$1 ? generator_fn.cljs$core$IFn$_invoke$arity$1(key) : generator_fn.call(null,key));
}),null))], null);
})),keys);
});
app.common.data.opacity_to_hex = (function app$common$data$opacity_to_hex(opacity){
var opacity__$1 = (opacity * (255));
var value = app.common.math.round.cljs$core$IFn$_invoke$arity$1(opacity__$1);
return value.toString((16)).padStart((2),"0");
});
app.common.data.unstable_sort = (function app$common$data$unstable_sort(var_args){
var G__29902 = arguments.length;
switch (G__29902) {
case 1:
return app.common.data.unstable_sort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.data.unstable_sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.unstable_sort.cljs$core$IFn$_invoke$arity$1 = (function (items){
return app.common.data.unstable_sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,items);
}));

(app.common.data.unstable_sort.cljs$core$IFn$_invoke$arity$2 = (function (comp_fn,items){
var items__$1 = cljs.core.to_array(items);
app.common.data.goog$module$goog$array.sort(items__$1,comp_fn);

return cljs.core.seq(items__$1);
}));

(app.common.data.unstable_sort.cljs$lang$maxFixedArity = 2);

/**
 * Obfuscates potentially sensitive values.
 * 
 *   - One-arg arity:
 *  * For strings shorter than 10 characters, all characters are replaced by `*`.
 *  * For longer strings, the first 5 characters are preserved and the rest obfuscated.
 *   - Two-arg arity accepts a boolean `full?` that, when true, replaces the whole value
 *  by `*`, preserving only the length.
 */
app.common.data.obfuscate_string = (function app$common$data$obfuscate_string(var_args){
var G__29913 = arguments.length;
switch (G__29913) {
case 1:
return app.common.data.obfuscate_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.data.obfuscate_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.obfuscate_string.cljs$core$IFn$_invoke$arity$1 = (function (v){
return app.common.data.obfuscate_string.cljs$core$IFn$_invoke$arity$2(v,false);
}));

(app.common.data.obfuscate_string.cljs$core$IFn$_invoke$arity$2 = (function (v,full_QMARK_){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
var n = ((s).length);
if((n === (0))){
return s;
} else {
if(cljs.core.truth_(full_QMARK_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"*"));
} else {
if((n < (10))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"*"));
} else {
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(5)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (5)),"*")))].join('');

}
}
}
}));

(app.common.data.obfuscate_string.cljs$lang$maxFixedArity = 2);

/**
 * Reorder a vector by moving one of their items from some position to some space between positions.
 * It clamps the position numbers to a valid range.
 */
app.common.data.reorder = (function app$common$data$reorder(v,from_pos,to_space_between_pos){
var max_space_pos = cljs.core.count(v);
var max_prop_pos = (max_space_pos - (1));
var from_pos__$1 = app.common.data.max.cljs$core$IFn$_invoke$arity$2((0),app.common.data.min.cljs$core$IFn$_invoke$arity$2(max_prop_pos,from_pos));
var to_space_between_pos__$1 = app.common.data.max.cljs$core$IFn$_invoke$arity$2((0),app.common.data.min.cljs$core$IFn$_invoke$arity$2(max_space_pos,to_space_between_pos));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from_pos__$1,to_space_between_pos__$1)){
return v;
} else {
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,from_pos__$1);
var without_elem = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),from_pos__$1)),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(from_pos__$1 + (1))));
var insert_pos = (((from_pos__$1 < to_space_between_pos__$1))?(to_space_between_pos__$1 - (1)):to_space_between_pos__$1);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(without_elem,(0),insert_pos)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null)),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(without_elem,insert_pos));
}
});
/**
 * Returns a map with keys and values swapped.
 * If the input map has duplicate values, later entries overwrite earlier ones.
 */
app.common.data.invert_map = (function app$common$data$invert_map(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29920){
var vec__29921 = p__29920;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29921,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29921,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null);
}),m));
});
app.common.data.trail_zeros_regex_1 = /\.0+$/;
app.common.data.trail_zeros_regex_2 = /(\.\d*[^0])0+$/;
/**
 * Creates a number with predetermined precision and then removes the trailing 0.
 *   Examples:
 *  12.0123, 0 => 12
 *  12.0123, 1 => 12
 *  12.0123, 2 => 12.01
 */
app.common.data.format_precision = (function app$common$data$format_precision(num,precision){
if(typeof num === 'number'){
try{var num_str = app.common.math.to_fixed(num,precision);
var num_str__$1 = cuerdas.core.replace(num_str,/\.0+$/,"");
var temp__5823__auto__ = cljs.core.re_find(/(\.\d*[^0])0+$/,num_str__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cuerdas.core.replace(num_str__$1,cljs.core.first(m),cljs.core.second(m));
} else {
return num_str__$1;
}
}catch (e29925){var _ = e29925;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(num);
}} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(num);
}
});
app.common.data.format_number = (function app$common$data$format_number(var_args){
var G__29931 = arguments.length;
switch (G__29931) {
case 1:
return app.common.data.format_number.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.data.format_number.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.format_number.cljs$core$IFn$_invoke$arity$1 = (function (value){
return app.common.data.format_number.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(app.common.data.format_number.cljs$core$IFn$_invoke$arity$2 = (function (value,p__29935){
var map__29936 = p__29935;
var map__29936__$1 = cljs.core.__destructure_map(map__29936);
var precision = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29936__$1,new cljs.core.Keyword(null,"precision","precision",-1175707478),(2));
var value__$1 = ((typeof value === 'string')?app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(value):value);
if(cljs.core.truth_(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(value__$1))){
return app.common.data.format_precision(value__$1,precision);
} else {
return null;
}
}));

(app.common.data.format_number.cljs$lang$maxFixedArity = 2);


/**
 * @interface
 */
app.common.data.ICloseable = function(){};

var app$common$data$ICloseable$close_BANG_$dyn_30854 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.data.close_BANG_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.data.close_BANG_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICloseable.close!",_);
}
}
});
/**
 * Close the resource.
 */
app.common.data.close_BANG_ = (function app$common$data$close_BANG_(_){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(_),cljs.core.with_meta(new cljs.core.Symbol("app.common.data","close!","app.common.data/close!",986923301,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5823__auto__){
var meta_impl__5375__auto__ = temp__5823__auto__;
return (meta_impl__5375__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__5375__auto__.cljs$core$IFn$_invoke$arity$1(_) : meta_impl__5375__auto__.call(null,_));
} else {
if((((!((_ == null)))) && ((!((_.app$common$data$ICloseable$close_BANG_$arity$1 == null)))))){
return _.app$common$data$ICloseable$close_BANG_$arity$1(_);
} else {
return app$common$data$ICloseable$close_BANG_$dyn_30854(_);
}
}
});

/**
 * Returns a lazy sequence of successive items from coll until
 *   (pred item) returns true, including that item
 */
app.common.data.take_until = (function app$common$data$take_until(var_args){
var G__29948 = arguments.length;
switch (G__29948) {
case 1:
return app.common.data.take_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.data.take_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.take_until.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return cljs.core.halt_when.cljs$core$IFn$_invoke$arity$2(pred,(function (r,h){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,h);
}));
}));

(app.common.data.take_until.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(app.common.data.take_until.cljs$core$IFn$_invoke$arity$1(pred),cljs.core.conj,cljs.core.PersistentVector.EMPTY,coll);
}));

(app.common.data.take_until.cljs$lang$maxFixedArity = 2);

/**
 * Wrapper around subvec so it doesn't throw an exception but returns nil instead
 */
app.common.data.safe_subvec = (function app$common$data$safe_subvec(var_args){
var G__29959 = arguments.length;
switch (G__29959) {
case 2:
return app.common.data.safe_subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.data.safe_subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.data.safe_subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
if((((!((v == null)))) && ((((start >= (0))) && ((start < cljs.core.count(v))))))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,start);
} else {
return null;
}
}));

(app.common.data.safe_subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
if((!((v == null)))){
var size = cljs.core.count(v);
if((((start >= (0))) && ((((start < size)) && ((((end >= (0))) && ((((start <= end)) && ((end <= size)))))))))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,end);
} else {
return null;
}
} else {
return null;
}
}));

(app.common.data.safe_subvec.cljs$lang$maxFixedArity = 3);

app.common.data.append_class = (function app$common$data$append_class(class$,current_class){
if(cljs.core.seq(class$)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_class)].join('');
} else {
return current_class;
}
});

//# sourceMappingURL=app.common.data.js.map
