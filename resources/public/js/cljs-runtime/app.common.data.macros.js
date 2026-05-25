import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./cuerdas.core.js";
goog.provide('app.common.data.macros');
app.common.data.macros.runtime_assert = (function app$common$data$macros$runtime_assert(hint,f){
try{if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(hint,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"expr-validation","expr-validation",1929649751),new cljs.core.Keyword(null,"hint","hint",439639918),hint], null));
}
}catch (e34442){var cause = e34442;
var data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.ex_data(cause),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assertion","assertion",-1645134882)),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"expr-validation","expr-validation",1929649751)),new cljs.core.Keyword(null,"hint","hint",439639918),hint);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(hint,data,cause);
}});
/**
 * Truncates a string to a certain length
 */
app.common.data.macros.truncate = (function app$common$data$macros$truncate(s,max_length){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(function (){var x__5113__auto__ = max_length;
var y__5114__auto__ = cljs.core.count(s);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})());
});

//# sourceMappingURL=app.common.data.macros.js.map
