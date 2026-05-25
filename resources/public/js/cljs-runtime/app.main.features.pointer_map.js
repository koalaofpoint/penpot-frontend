import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.transit.js";
import "./app.main.repo.js";
import "./beicon.v2.core.js";
goog.provide('app.main.features.pointer_map');
app.main.features.pointer_map.resolve_file = (function app$main$features$pointer_map$resolve_file(p__68655){
var map__68656 = p__68655;
var map__68656__$1 = cljs.core.__destructure_map(map__68656);
var file = map__68656__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68656__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68656__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var resolve_pointer = (function app$main$features$pointer_map$resolve_file_$_resolve_pointer(p__68675){
var vec__68676 = p__68675;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68676,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68676,(1),null);
var kv = vec__68676;
if(app.common.transit.pointer_QMARK_(val)){
return beicon.v2.core.map((function (p1__68654_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[key,p1__68654_SHARP_],null));
}),beicon.v2.core.map((function (p1__68653_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__68653_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-file-fragment","get-file-fragment",-1236282386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),id,new cljs.core.Keyword(null,"fragment-id","fragment-id",216690564),cljs.core.deref(val)], null))));
} else {
return beicon.v2.core.of(kv);
}
});
var resolve_pointers = (function app$main$features$pointer_map$resolve_file_$_resolve_pointers(coll){
return beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentArrayMap.EMPTY,beicon.v2.core.merge_map(resolve_pointer,beicon.v2.core.from(cljs.core.seq(coll))));
});
return beicon.v2.core.map((function (p__68686){
var vec__68687 = p__68686;
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68687,(0),null);
var pages_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68687,(1),null);
var data__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),pages_index);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file,new cljs.core.Keyword(null,"data","data",-232669377),data__$2);
}),beicon.v2.core.take((1),beicon.v2.core.zip(resolve_pointers(data),resolve_pointers(new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145).cljs$core$IFn$_invoke$arity$1(data)))));
});

//# sourceMappingURL=app.main.features.pointer_map.js.map
