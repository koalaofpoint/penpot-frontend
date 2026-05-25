import "./cljs_env.js";
import "./cljs.core.js";
import "./cuerdas.core.js";
goog.provide('app.common.json');
app.common.json.read_kebab_key = (function app$common$json$read_kebab_key(k){
if(((typeof k === 'string') && (cljs.core.not(cuerdas.core.includes_QMARK_(k,"/"))))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cuerdas.core.kebab(k));
} else {
return k;
}
});
app.common.json.write_camel_key = (function app$common$json$write_camel_key(k){
if((((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol)))){
return cuerdas.core.camel(k);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(k);
}
});
app.common.json.__GT_js = (function app$common$json$__GT_js(var_args){
var args__5755__auto__ = [];
var len__5749__auto___29306 = arguments.length;
var i__5750__auto___29307 = (0);
while(true){
if((i__5750__auto___29307 < len__5749__auto___29306)){
args__5755__auto__.push((arguments[i__5750__auto___29307]));

var G__29308 = (i__5750__auto___29307 + (1));
i__5750__auto___29307 = G__29308;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.json.__GT_js.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.json.__GT_js.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__29262){
var map__29263 = p__29262;
var map__29263__$1 = cljs.core.__destructure_map(map__29263);
var opts = map__29263__$1;
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29263__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),app.common.json.write_camel_key);
var f = (function app$common$json$this_fn(x__$1){
if((x__$1 == null)){
return null;
} else {
if((((!((x__$1 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x__$1.cljs$core$IEncodeJS$))))?true:(((!x__$1.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,x__$1):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,x__$1))){
return cljs.core._clj__GT_js(x__$1);
} else {
if((((x__$1 instanceof cljs.core.Keyword)) || ((x__$1 instanceof cljs.core.Symbol)))){
return cljs.core.name(x__$1);
} else {
if(typeof x__$1 === 'number'){
return x__$1;
} else {
if(cljs.core.boolean_QMARK_(x__$1)){
return x__$1;
} else {
if(cljs.core.map_QMARK_(x__$1)){
return cljs.core.reduce_kv((function (m,k,v){
var k__$1 = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(k) : key_fn.call(null,k));
(m[k__$1] = app$common$json$this_fn(v));

return m;
}),({}),x__$1);
} else {
if(cljs.core.coll_QMARK_(x__$1)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arr,v){
arr.push(app$common$json$this_fn(v));

return arr;
}),[],x__$1);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1);

}
}
}
}
}
}
}
});
return f(x);
}));

(app.common.json.__GT_js.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.json.__GT_js.cljs$lang$applyTo = (function (seq29251){
var G__29252 = cljs.core.first(seq29251);
var seq29251__$1 = cljs.core.next(seq29251);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29252,seq29251__$1);
}));

app.common.json.__GT_clj = (function app$common$json$__GT_clj(var_args){
var args__5755__auto__ = [];
var len__5749__auto___29309 = arguments.length;
var i__5750__auto___29310 = (0);
while(true){
if((i__5750__auto___29310 < len__5749__auto___29309)){
args__5755__auto__.push((arguments[i__5750__auto___29310]));

var G__29311 = (i__5750__auto___29310 + (1));
i__5750__auto___29310 = G__29311;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.json.__GT_clj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.json.__GT_clj.cljs$core$IFn$_invoke$arity$variadic = (function (o,p__29294){
var map__29295 = p__29294;
var map__29295__$1 = cljs.core.__destructure_map(map__29295);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29295__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),app.common.json.read_kebab_key);
var val_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29295__$1,new cljs.core.Keyword(null,"val-fn","val-fn",-474077741),cljs.core.identity);
var recursive = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29295__$1,new cljs.core.Keyword(null,"recursive","recursive",718885872),true);
var f = (function app$common$json$this_fn(x){
var x__$1 = (val_fn.cljs$core$IFn$_invoke$arity$1 ? val_fn.cljs$core$IFn$_invoke$arity$1(x) : val_fn.call(null,x));
if(cljs.core.array_QMARK_(x__$1)){
return cljs.core.persistent_BANG_(x__$1.reduce((function (p1__29288_SHARP_,p2__29289_SHARP_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(p1__29288_SHARP_,(cljs.core.truth_(recursive)?app$common$json$this_fn(p2__29289_SHARP_):p2__29289_SHARP_));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY)));
} else {
if((cljs.core.type(x__$1) === Object)){
return cljs.core.persistent_BANG_(cljs.core.js_keys(x__$1).reduce((function (p1__29290_SHARP_,p2__29291_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__29290_SHARP_,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(p2__29291_SHARP_) : key_fn.call(null,p2__29291_SHARP_)),(cljs.core.truth_(recursive)?app$common$json$this_fn((x__$1[p2__29291_SHARP_])):(x__$1[p2__29291_SHARP_])));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)));
} else {
return x__$1;

}
}
});
return f(o);
}));

(app.common.json.__GT_clj.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.json.__GT_clj.cljs$lang$applyTo = (function (seq29292){
var G__29293 = cljs.core.first(seq29292);
var seq29292__$1 = cljs.core.next(seq29292);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29293,seq29292__$1);
}));

app.common.json.encode = (function app$common$json$encode(var_args){
var args__5755__auto__ = [];
var len__5749__auto___29312 = arguments.length;
var i__5750__auto___29313 = (0);
while(true){
if((i__5750__auto___29313 < len__5749__auto___29312)){
args__5755__auto__.push((arguments[i__5750__auto___29313]));

var G__29314 = (i__5750__auto___29313 + (1));
i__5750__auto___29313 = G__29314;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.json.encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.json.encode.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__29300){
var map__29301 = p__29300;
var map__29301__$1 = cljs.core.__destructure_map(map__29301);
var opts = map__29301__$1;
return JSON.stringify(app.common.json.__GT_js.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0)),null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(opts));
}));

(app.common.json.encode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.json.encode.cljs$lang$applyTo = (function (seq29298){
var G__29299 = cljs.core.first(seq29298);
var seq29298__$1 = cljs.core.next(seq29298);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29299,seq29298__$1);
}));

app.common.json.decode = (function app$common$json$decode(var_args){
var args__5755__auto__ = [];
var len__5749__auto___29318 = arguments.length;
var i__5750__auto___29319 = (0);
while(true){
if((i__5750__auto___29319 < len__5749__auto___29318)){
args__5755__auto__.push((arguments[i__5750__auto___29319]));

var G__29320 = (i__5750__auto___29319 + (1));
i__5750__auto___29319 = G__29320;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.json.decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.json.decode.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__29304){
var map__29305 = p__29304;
var map__29305__$1 = cljs.core.__destructure_map(map__29305);
var opts = map__29305__$1;
return app.common.json.__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
}));

(app.common.json.decode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.json.decode.cljs$lang$applyTo = (function (seq29302){
var G__29303 = cljs.core.first(seq29302);
var seq29302__$1 = cljs.core.next(seq29302);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29303,seq29302__$1);
}));


//# sourceMappingURL=app.common.json.js.map
