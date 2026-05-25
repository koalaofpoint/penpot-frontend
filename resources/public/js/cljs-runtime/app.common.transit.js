import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.uri.js";
import "./cognitect.transit.js";
import "./lambdaisland.uri.js";
import "./linked.map.js";
import "./linked.set.js";
goog.provide('app.common.transit');
app.common.transit.write_handlers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.common.transit.read_handlers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.common.transit.write_handler_map = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.common.transit.read_handler_map = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
app.common.transit.Pointer = (function (id,metadata){
this.id = id;
this.metadata = metadata;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.common.transit.Pointer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.metadata;
}));

(app.common.transit.Pointer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,meta){
var self__ = this;
var ___$1 = this;
return (new app.common.transit.Pointer(self__.id,meta));
}));

(app.common.transit.Pointer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.id;
}));

(app.common.transit.Pointer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"metadata","metadata",-855134172,null)], null);
}));

(app.common.transit.Pointer.cljs$lang$type = true);

(app.common.transit.Pointer.cljs$lang$ctorStr = "app.common.transit/Pointer");

(app.common.transit.Pointer.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.common.transit/Pointer");
}));

/**
 * Positional factory function for app.common.transit/Pointer.
 */
app.common.transit.__GT_Pointer = (function app$common$transit$__GT_Pointer(id,metadata){
return (new app.common.transit.Pointer(id,metadata));
});

app.common.transit.pointer_QMARK_ = (function app$common$transit$pointer_QMARK_(o){
return (o instanceof app.common.transit.Pointer);
});
app.common.transit.add_handlers_BANG_ = (function app$common$transit$add_handlers_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___45373 = arguments.length;
var i__5750__auto___45374 = (0);
while(true){
if((i__5750__auto___45374 < len__5749__auto___45373)){
args__5755__auto__.push((arguments[i__5750__auto___45374]));

var G__45375 = (i__5750__auto___45374 + (1));
i__5750__auto___45374 = G__45375;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.common.transit.add_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.common.transit.add_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (handlers){
var adapt_write_handler = (function app$common$transit$adapt_write_handler(p__45339){
var map__45340 = p__45339;
var map__45340__$1 = cljs.core.__destructure_map(map__45340);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45340__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45340__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var wfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45340__$1,new cljs.core.Keyword(null,"wfn","wfn",-1437298400));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$,cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly(id),wfn)], null);
});
var adapt_read_handler = (function app$common$transit$adapt_read_handler(p__45341){
var map__45342 = p__45341;
var map__45342__$1 = cljs.core.__destructure_map(map__45342);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45342__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45342__$1,new cljs.core.Keyword(null,"rfn","rfn",-990883444));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cognitect.transit.read_handler(rfn)], null);
});
var merge_and_clean = (function app$common$transit$merge_and_clean(m1,m2){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m1,m2], 0)));
});
var rhs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rfn","rfn",-990883444)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(adapt_read_handler)),handlers);
var whs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"wfn","wfn",-1437298400)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(adapt_write_handler)),handlers);
var cwh = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.common.transit.write_handlers,merge_and_clean,whs);
var crh = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.common.transit.read_handlers,merge_and_clean,rhs);
cljs.core.reset_BANG_(app.common.transit.write_handler_map,cwh);

cljs.core.reset_BANG_(app.common.transit.read_handler_map,crh);

return null;
}));

(app.common.transit.add_handlers_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.common.transit.add_handlers_BANG_.cljs$lang$applyTo = (function (seq45275){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45275));
}));

app.common.transit.add_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"n",new cljs.core.Keyword(null,"rfn","rfn",-990883444),(function (value){
return parseInt(value,(10));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"u",new cljs.core.Keyword(null,"rfn","rfn",-990883444),cljs.core.parse_uuid], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"ordered-map",new cljs.core.Keyword(null,"class","class",-2030961996),linked.map.LinkedMap,new cljs.core.Keyword(null,"wfn","wfn",-1437298400),cljs.core.vec,new cljs.core.Keyword(null,"rfn","rfn",-990883444),(function (p1__45347_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(linked.map.empty_linked_map,p1__45347_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"ordered-set",new cljs.core.Keyword(null,"class","class",-2030961996),linked.set.LinkedSet,new cljs.core.Keyword(null,"wfn","wfn",-1437298400),cljs.core.vec,new cljs.core.Keyword(null,"rfn","rfn",-990883444),(function (p1__45349_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(linked.set.empty_linked_set,p1__45349_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"m",new cljs.core.Keyword(null,"class","class",-2030961996),Date,new cljs.core.Keyword(null,"rfn","rfn",-990883444),(function (v){
return (new Date(parseInt(v,(10))));
}),new cljs.core.Keyword(null,"wfn","wfn",-1437298400),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.inst_ms)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"penpot/pointer",new cljs.core.Keyword(null,"class","class",-2030961996),app.common.transit.Pointer,new cljs.core.Keyword(null,"rfn","rfn",-990883444),(function (p__45353){
var vec__45354 = p__45353;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45354,(0),null);
var meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45354,(1),null);
return (new app.common.transit.Pointer(id,meta));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"uri",new cljs.core.Keyword(null,"class","class",-2030961996),lambdaisland.uri.URI,new cljs.core.Keyword(null,"rfn","rfn",-990883444),app.common.uri.uri,new cljs.core.Keyword(null,"wfn","wfn",-1437298400),cljs.core.str], null)], 0));
app.common.transit.is_date_like_QMARK_ = (function app$common$transit$is_date_like_QMARK_(obj){
return (((!((obj == null)))) && (((cljs.core.fn_QMARK_(obj.getTime)) && ((!((obj.getTime() == null)))))));
});
app.common.transit.date_write_handler = cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly("m"),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.inst_ms));
app.common.transit.encode_str = (function app$common$transit$encode_str(var_args){
var G__45364 = arguments.length;
switch (G__45364) {
case 1:
return app.common.transit.encode_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.transit.encode_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.transit.encode_str.cljs$core$IFn$_invoke$arity$1 = (function (data){
return app.common.transit.encode_str.cljs$core$IFn$_invoke$arity$2(data,null);
}));

(app.common.transit.encode_str.cljs$core$IFn$_invoke$arity$2 = (function (data,opts){
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"json","json",1279968570));
var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.deref(app.common.transit.write_handler_map),new cljs.core.Keyword(null,"handlerForForeign","handlerForForeign",-44914005),(function (x,_){
if(app.common.transit.is_date_like_QMARK_(x)){
return app.common.transit.date_write_handler;
} else {
return null;
}
})], null);
var params__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"transform","transform",1381301764),cognitect.transit.write_meta):params);
var writer = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,params__$1);
return cognitect.transit.write(writer,data);
}));

(app.common.transit.encode_str.cljs$lang$maxFixedArity = 2);

app.common.transit.decode_str = (function app$common$transit$decode_str(var_args){
var G__45367 = arguments.length;
switch (G__45367) {
case 1:
return app.common.transit.decode_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.transit.decode_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.transit.decode_str.cljs$core$IFn$_invoke$arity$1 = (function (data){
return app.common.transit.decode_str.cljs$core$IFn$_invoke$arity$2(data,null);
}));

(app.common.transit.decode_str.cljs$core$IFn$_invoke$arity$2 = (function (data,opts){
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"json","json",1279968570));
var params = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.deref(app.common.transit.read_handler_map)], null);
var reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(type,params);
return cognitect.transit.read(reader,data);
}));

(app.common.transit.decode_str.cljs$lang$maxFixedArity = 2);

/**
 * Checks if a string can be decoded with transit
 */
app.common.transit.transit_QMARK_ = (function app$common$transit$transit_QMARK_(v){
try{return (!((app.common.transit.decode_str.cljs$core$IFn$_invoke$arity$1(v) == null)));
}catch (e45370){if((e45370 instanceof SyntaxError)){
var _e = e45370;
return false;
} else {
throw e45370;

}
}});

//# sourceMappingURL=app.common.transit.js.map
