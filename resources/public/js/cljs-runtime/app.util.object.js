import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.json.js";
import "./app.common.schema.js";
import "./cuerdas.core.js";
import "./rumext.v2.util.js";
goog.provide('app.util.object');
app.util.object.array_QMARK_ = (function app$util$object$array_QMARK_(o){
return Array.isArray(o);
});
app.util.object.into_array = (function app$util$object$into_array(o){
return Array.from(o);
});
app.util.object.create = (function app$util$object$create(){
return ({});
});
app.util.object.get = (function app$util$object$get(var_args){
var G__43462 = arguments.length;
switch (G__43462) {
case 2:
return app.util.object.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.util.object.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.object.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
if((!((obj == null)))){
return (obj[k]);
} else {
return null;
}
}));

(app.util.object.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,default$){
var result = app.util.object.get.cljs$core$IFn$_invoke$arity$2(obj,k);
if((void 0 === result)){
return default$;
} else {
return result;
}
}));

(app.util.object.get.cljs$lang$maxFixedArity = 3);

app.util.object.contains_QMARK_ = (function app$util$object$contains_QMARK_(obj,k){
if((!((obj == null)))){
return Object.hasOwn(obj,k);
} else {
return null;
}
});
app.util.object.clone = (function app$util$object$clone(a){
return Object.assign(({}),a);
});
app.util.object.merge_BANG_ = (function app$util$object$merge_BANG_(var_args){
var G__43470 = arguments.length;
switch (G__43470) {
case 2:
return app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___43539 = arguments.length;
var i__5750__auto___43540 = (0);
while(true){
if((i__5750__auto___43540 < len__5749__auto___43539)){
args_arr__5774__auto__.push((arguments[i__5750__auto___43540]));

var G__43541 = (i__5750__auto___43540 + (1));
i__5750__auto___43540 = G__43541;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return Object.assign(a,b);
}));

(app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.util.object.merge_BANG_,app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(a,b),more);
}));

/** @this {Function} */
(app.util.object.merge_BANG_.cljs$lang$applyTo = (function (seq43467){
var G__43468 = cljs.core.first(seq43467);
var seq43467__$1 = cljs.core.next(seq43467);
var G__43469 = cljs.core.first(seq43467__$1);
var seq43467__$2 = cljs.core.next(seq43467__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43468,G__43469,seq43467__$2);
}));

(app.util.object.merge_BANG_.cljs$lang$maxFixedArity = (2));

app.util.object.merge = (function app$util$object$merge(var_args){
var G__43478 = arguments.length;
switch (G__43478) {
case 2:
return app.util.object.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___43544 = arguments.length;
var i__5750__auto___43545 = (0);
while(true){
if((i__5750__auto___43545 < len__5749__auto___43544)){
args_arr__5774__auto__.push((arguments[i__5750__auto___43545]));

var G__43546 = (i__5750__auto___43545 + (1));
i__5750__auto___43545 = G__43546;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return app.util.object.merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(app.util.object.merge.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return Object.assign(({}),a,b);
}));

(app.util.object.merge.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.util.object.merge_BANG_,app.util.object.merge.cljs$core$IFn$_invoke$arity$2(a,b),more);
}));

/** @this {Function} */
(app.util.object.merge.cljs$lang$applyTo = (function (seq43475){
var G__43476 = cljs.core.first(seq43475);
var seq43475__$1 = cljs.core.next(seq43475);
var G__43477 = cljs.core.first(seq43475__$1);
var seq43475__$2 = cljs.core.next(seq43475__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43476,G__43477,seq43475__$2);
}));

(app.util.object.merge.cljs$lang$maxFixedArity = (2));

app.util.object.set_BANG_ = (function app$util$object$set_BANG_(obj,key,value){
(obj[key] = value);

return obj;
});
app.util.object.unset_BANG_ = (function app$util$object$unset_BANG_(obj,key){
delete obj[key];

return obj;
});
app.util.object.not_found_sym = Symbol("not-found");
app.util.object.update_BANG_ = (function app$util$object$update_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43550 = arguments.length;
var i__5750__auto___43551 = (0);
while(true){
if((i__5750__auto___43551 < len__5749__auto___43550)){
args__5755__auto__.push((arguments[i__5750__auto___43551]));

var G__43552 = (i__5750__auto___43551 + (1));
i__5750__auto___43551 = G__43552;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return app.util.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(app.util.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,key,f,args){
var found = cljs.core.get.cljs$core$IFn$_invoke$arity$3(obj,key,app.util.object.not_found_sym);
if((found === app.util.object.not_found_sym)){
} else {
(obj[key] = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
}

return obj;
}));

(app.util.object.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(app.util.object.update_BANG_.cljs$lang$applyTo = (function (seq43483){
var G__43484 = cljs.core.first(seq43483);
var seq43483__$1 = cljs.core.next(seq43483);
var G__43485 = cljs.core.first(seq43483__$1);
var seq43483__$2 = cljs.core.next(seq43483__$1);
var G__43486 = cljs.core.first(seq43483__$2);
var seq43483__$3 = cljs.core.next(seq43483__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43484,G__43485,G__43486,seq43483__$3);
}));

app.util.object.in_QMARK_ = (function app$util$object$in_QMARK_(obj,prop){
return prop in obj;
});
app.util.object.without_empty = (function app$util$object$without_empty(obj){
if((!((obj == null)))){
return Object.entries(obj).reduce((a, [k,v]) => (v == null ? a : (a[k]=v, a)), {}) ;
} else {
return null;
}
});
app.util.object.plain_object_QMARK_ = (function app$util$object$plain_object_QMARK_(o){
return (((!((o == null)))) && ((Object.getPrototypeOf(o) === Object.prototype)));
});
app.util.object.stringify = (function app$util$object$stringify(obj){
return JSON.stringify(obj);
});
app.util.object.collect_properties = (function app$util$object$collect_properties(params){
var vec__43504 = ((cljs.core.map_QMARK_(cljs.core.first(params)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(params),cljs.core.rest(params)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,params], null));
var tmeta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43504,(0),null);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43504,(1),null);
var params__$2 = cljs.core.seq(params__$1);
var props = cljs.core.PersistentVector.EMPTY;
var defs = cljs.core.PersistentArrayMap.EMPTY;
var curr = new cljs.core.Keyword(null,"start","start",-355208981);
var ckey = null;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(curr,new cljs.core.Keyword(null,"start","start",-355208981))){
var candidate = cljs.core.first(params__$2);
if((candidate instanceof cljs.core.Keyword)){
var G__43557 = cljs.core.rest(params__$2);
var G__43558 = props;
var G__43559 = defs;
var G__43560 = new cljs.core.Keyword(null,"property","property",-1114278232);
var G__43561 = candidate;
params__$2 = G__43557;
props = G__43558;
defs = G__43559;
curr = G__43560;
ckey = G__43561;
continue;
} else {
if((candidate == null)){
var G__43562 = cljs.core.rest(params__$2);
var G__43563 = props;
var G__43564 = defs;
var G__43565 = new cljs.core.Keyword(null,"end","end",-268185958);
var G__43566 = null;
params__$2 = G__43562;
props = G__43563;
defs = G__43564;
curr = G__43565;
ckey = G__43566;
continue;
} else {
var G__43567 = cljs.core.rest(params__$2);
var G__43568 = props;
var G__43569 = defs;
var G__43570 = new cljs.core.Keyword(null,"definition","definition",-1198729982);
var G__43571 = candidate;
params__$2 = G__43567;
props = G__43568;
defs = G__43569;
curr = G__43570;
ckey = G__43571;
continue;

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),curr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tmeta,props,defs], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"property","property",-1114278232),curr)){
var definition = cljs.core.first(params__$2);
if((!((definition == null)))){
var definition__$1 = ((cljs.core.map_QMARK_(definition))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"wrap","wrap",851669987).cljs$core$IFn$_invoke$arity$1(tmeta),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword(null,"on-error","on-error",1728533530).cljs$core$IFn$_invoke$arity$1(tmeta)], null),definition], 0)):app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enumerable","enumerable",-106303070),false], null),cljs.core.meta(definition)], 0)),new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"wrap","wrap",851669987).cljs$core$IFn$_invoke$arity$1(tmeta)),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword(null,"on-error","on-error",1728533530).cljs$core$IFn$_invoke$arity$1(tmeta)),new cljs.core.Keyword(null,"fn","fn",-1175266204),definition),new cljs.core.Keyword(null,"get","get",1683182755),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], 0))));
var definition__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(definition__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name(ckey));
var G__43573 = cljs.core.rest(params__$2);
var G__43574 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(props,definition__$2);
var G__43575 = defs;
var G__43576 = new cljs.core.Keyword(null,"start","start",-355208981);
var G__43577 = null;
params__$2 = G__43573;
props = G__43574;
defs = G__43575;
curr = G__43576;
ckey = G__43577;
continue;
} else {
var hint = ["expected property definition for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(curr)].join('');
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(hint,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),curr], null));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"definition","definition",-1198729982),curr)){
var vec__43529 = (function (){var params__$3 = params__$2;
var defs__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(defs,ckey,((function (params__$2,props,defs,curr,ckey,params__$3,vec__43504,tmeta,params__$1){
return (function (p1__43501_SHARP_){
var or__5025__auto__ = p1__43501_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
});})(params__$2,props,defs,curr,ckey,params__$3,vec__43504,tmeta,params__$1))
);
while(true){
var candidate = cljs.core.first(params__$3);
var params__$4 = cljs.core.rest(params__$3);
if((candidate == null)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$4,props,defs__$1,new cljs.core.Keyword(null,"end","end",-268185958)], null);
} else {
if((candidate instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$4,props,defs__$1,new cljs.core.Keyword(null,"property","property",-1114278232),candidate], null);
} else {
if((candidate instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$4,props,defs__$1,new cljs.core.Keyword(null,"definition","definition",-1198729982),candidate], null);
} else {
var G__43579 = params__$4;
var G__43580 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(defs__$1,ckey,cljs.core.conj,candidate);
params__$3 = G__43579;
defs__$1 = G__43580;
continue;

}
}
}
break;
}
})();
var params__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43529,(0),null);
var props__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43529,(1),null);
var defs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43529,(2),null);
var curr__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43529,(3),null);
var ckey__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43529,(4),null);
var G__43582 = params__$3;
var G__43583 = props__$1;
var G__43584 = defs__$1;
var G__43585 = curr__$1;
var G__43586 = ckey__$1;
params__$2 = G__43582;
props = G__43583;
defs = G__43584;
curr = G__43585;
ckey = G__43586;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid params",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
break;
}
});
app.util.object.type_symbol = Symbol["for"]("penpot.reify:type");
app.util.object.type_of_QMARK_ = (function app$util$object$type_of_QMARK_(o,t){
var o__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(o,app.util.object.type_symbol);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(o__$1,t);
});

//# sourceMappingURL=app.util.object.js.map
