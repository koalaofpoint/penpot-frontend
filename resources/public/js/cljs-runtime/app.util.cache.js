import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.time.js";
import "./beicon.v2.core.js";
goog.provide('app.util.cache');
if((typeof app !== 'undefined') && (typeof app.util !== 'undefined') && (typeof app.util.cache !== 'undefined') && (typeof app.util.cache.cache !== 'undefined')){
} else {
app.util.cache.cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof app !== 'undefined') && (typeof app.util !== 'undefined') && (typeof app.util.cache !== 'undefined') && (typeof app.util.cache.pending !== 'undefined')){
} else {
app.util.cache.pending = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
app.util.cache.with_cache = (function app$util$cache$with_cache(p__46423,observable){
var map__46424 = p__46423;
var map__46424__$1 = cljs.core.__destructure_map(map__46424);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46424__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var max_age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46424__$1,new cljs.core.Keyword(null,"max-age","max-age",-270129271));
var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.util.cache.cache),key);
var pending_entry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.util.cache.pending),key);
var age = (cljs.core.truth_(entry)?app.common.time.diff_ms(new cljs.core.Keyword(null,"created-at","created-at",-89248644).cljs$core$IFn$_invoke$arity$1(entry),app.common.time.now()):null);
if((((!((entry == null)))) && ((age < max_age)))){
return beicon.v2.core.of(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(entry));
} else {
if((!((pending_entry == null)))){
return pending_entry;
} else {
var subject = beicon.v2.core.subject();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.cache.pending,cljs.core.assoc,key,subject);

beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$3(observable,(function (data){
var entry_46426__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"created-at","created-at",-89248644),app.common.time.now(),new cljs.core.Keyword(null,"data","data",-232669377),data], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.cache.cache,cljs.core.assoc,key,entry_46426__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.util.cache.pending,cljs.core.dissoc,key);

subject.next(data);

return subject.complete();
}),(function (p1__46422_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.util.cache.pending,cljs.core.dissoc,key);

return subject.error(p1__46422_SHARP_);
}));

return subject;

}
}
});

//# sourceMappingURL=app.util.cache.js.map
