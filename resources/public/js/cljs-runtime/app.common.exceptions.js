import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.pprint.js";
import "./app.common.schema.js";
import "./cljs.spec.alpha.js";
import "./cuerdas.core.js";
goog.provide('app.common.exceptions');
/**
 * Keys whose values must be obfuscated in validation explains.
 */
app.common.exceptions.sensitive_fields = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"invitation-token","invitation-token",-310125311),null,new cljs.core.Keyword(null,"old-password","old-password",1136552804),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"token","token",-1211463215),null], null), null);
app.common.exceptions._STAR_data_length_STAR_ = (8);
app.common.exceptions._STAR_data_level_STAR_ = (8);
app.common.exceptions.ex_info_QMARK_ = (function app$common$exceptions$ex_info_QMARK_(v){
return (v instanceof cljs.core.ExceptionInfo);
});
app.common.exceptions.error_QMARK_ = (function app$common$exceptions$error_QMARK_(v){
return (v instanceof cljs.core.ExceptionInfo);
});
app.common.exceptions.exception_QMARK_ = (function app$common$exceptions$exception_QMARK_(v){
return (v instanceof Error);
});
app.common.exceptions.explain = (function app$common$exceptions$explain(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43349 = arguments.length;
var i__5750__auto___43350 = (0);
while(true){
if((i__5750__auto___43350 < len__5749__auto___43349)){
args__5755__auto__.push((arguments[i__5750__auto___43350]));

var G__43351 = (i__5750__auto___43350 + (1));
i__5750__auto___43350 = G__43351;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.exceptions.explain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.exceptions.explain.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__43289){
var map__43290 = p__43289;
var map__43290__$1 = cljs.core.__destructure_map(map__43290);
var opts = map__43290__$1;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword("integrant.core","build-failed-spec","integrant.core/build-failed-spec",1167262590))) && (cljs.core.contains_QMARK_(data,new cljs.core.Keyword(null,"explain","explain",484226146))))){
return app.common.exceptions.explain.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"explain","explain",484226146).cljs$core$IFn$_invoke$arity$1(data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
} else {
if(cljs.core.contains_QMARK_(data,new cljs.core.Keyword("app.common.schema","explain","app.common.schema/explain",1944111705))){
var exp = new cljs.core.Keyword("app.common.schema","explain","app.common.schema/explain",1944111705).cljs$core$IFn$_invoke$arity$1(data);
var sanitize_map = (function app$common$exceptions$sanitize_map(m){
return cljs.core.reduce_kv((function (acc,k,v){
var k_STAR_ = ((typeof k === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k):k);
if(cljs.core.contains_QMARK_(app.common.exceptions.sensitive_fields,k_STAR_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,((cljs.core.map_QMARK_(v))?app$common$exceptions$sanitize_map(v):app.common.data.obfuscate_string.cljs$core$IFn$_invoke$arity$2(v,true)));
} else {
if(cljs.core.map_QMARK_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,app$common$exceptions$sanitize_map(v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);

}
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
var sanitize_explain = (function (exp__$1){
var G__43294 = exp__$1;
if(cljs.core.truth_(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(exp__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__43294,new cljs.core.Keyword(null,"value","value",305978217),sanitize_map);
} else {
return G__43294;
}
});
return app.common.schema.humanize_explain.cljs$core$IFn$_invoke$arity$variadic(sanitize_explain(exp),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
} else {
return null;
}
}
}));

(app.common.exceptions.explain.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.exceptions.explain.cljs$lang$applyTo = (function (seq43286){
var G__43287 = cljs.core.first(seq43286);
var seq43286__$1 = cljs.core.next(seq43286);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43287,seq43286__$1);
}));

app.common.exceptions.format_throwable = (function app$common$exceptions$format_throwable(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43354 = arguments.length;
var i__5750__auto___43355 = (0);
while(true){
if((i__5750__auto___43355 < len__5749__auto___43354)){
args__5755__auto__.push((arguments[i__5750__auto___43355]));

var G__43356 = (i__5750__auto___43355 + (1));
i__5750__auto___43355 = G__43356;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.exceptions.format_throwable.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.exceptions.format_throwable.cljs$core$IFn$_invoke$arity$variadic = (function (cause,p__43321){
var map__43322 = p__43321;
var map__43322__$1 = cljs.core.__destructure_map(map__43322);
var opts = map__43322__$1;
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43323_43358 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43324_43359 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43325_43360 = true;
var _STAR_print_fn_STAR__temp_val__43326_43361 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43325_43360);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43326_43361);

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["===================="], 0));

var temp__5825__auto___43362 = cljs.core.ex_data(cause);
if(cljs.core.truth_(temp__5825__auto___43362)){
var exdata_43364 = temp__5825__auto___43362;
var temp__5825__auto___43365__$1 = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(exdata_43364,new cljs.core.Keyword(null,"hint","hint",439639918));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.ex_message(cause);
}
})();
if(cljs.core.truth_(temp__5825__auto___43365__$1)){
var hint_43366 = temp__5825__auto___43365__$1;
if(cljs.core.truth_(cuerdas.core.index_of.cljs$core$IFn$_invoke$arity$2(hint_43366,"\n"))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hint:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hint_43366], 0));

cljs.core.println();
} else {
}
} else {
}

var temp__5825__auto___43367__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(exdata_43364,new cljs.core.Keyword("app.common.schema","explain","app.common.schema/explain",1944111705));
if(cljs.core.truth_(temp__5825__auto___43367__$1)){
var explain_43368 = temp__5825__auto___43367__$1;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Explain:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.schema.humanize_explain(explain_43368)], 0));

cljs.core.println();
} else {
}

var temp__5825__auto___43370__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(exdata_43364,new cljs.core.Keyword(null,"explain","explain",484226146));
if(cljs.core.truth_(temp__5825__auto___43370__$1)){
var explain_43371 = temp__5825__auto___43370__$1;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Server Explain:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([explain_43371], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Data:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--------------------"], 0));

app.common.pprint.pprint(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(exdata_43364,new cljs.core.Keyword("app.common.schema","explain","app.common.schema/explain",1944111705),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"explain","explain",484226146)], 0)));

cljs.core.println();
} else {
}

var temp__5825__auto___43372 = cause.stack;
if(cljs.core.truth_(temp__5825__auto___43372)){
var trace_43373 = temp__5825__auto___43372;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Trace:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause.stack], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["===================="], 0));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43324_43359);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43323_43358);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
}));

(app.common.exceptions.format_throwable.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.exceptions.format_throwable.cljs$lang$applyTo = (function (seq43311){
var G__43312 = cljs.core.first(seq43311);
var seq43311__$1 = cljs.core.next(seq43311);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43312,seq43311__$1);
}));

app.common.exceptions.first_line = (function app$common$exceptions$first_line(s){
var break_index = cuerdas.core.index_of.cljs$core$IFn$_invoke$arity$2(s,"\n");
if((break_index > (0))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),break_index);
} else {
return s;
}
});
app.common.exceptions.print_throwable = (function app$common$exceptions$print_throwable(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43375 = arguments.length;
var i__5750__auto___43376 = (0);
while(true){
if((i__5750__auto___43376 < len__5749__auto___43375)){
args__5755__auto__.push((arguments[i__5750__auto___43376]));

var G__43377 = (i__5750__auto___43376 + (1));
i__5750__auto___43376 = G__43377;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.exceptions.print_throwable.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.exceptions.print_throwable.cljs$core$IFn$_invoke$arity$variadic = (function (cause,p__43340){
var map__43341 = p__43340;
var map__43341__$1 = cljs.core.__destructure_map(map__43341);
var opts = map__43341__$1;
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var data = cljs.core.ex_data(cause);
var title = (function (){var G__43342 = (function (){var or__5025__auto__ = (function (){var G__43344 = new cljs.core.Keyword(null,"hint","hint",439639918).cljs$core$IFn$_invoke$arity$1(data);
if((G__43344 == null)){
return null;
} else {
return app.common.exceptions.first_line(G__43344);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.ex_message(cause);
}
})();
if(typeof prefix === 'string'){
return [prefix,": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43342)].join('');
} else {
return G__43342;
}
})();
console.group(title);

try{console.log(app.common.exceptions.format_throwable(cause));

var cause__$1 = cljs.core.ex_cause(cause);
while(true){
if(cljs.core.truth_(cause__$1)){
console.log("\nCaused by:");

console.log(app.common.exceptions.format_throwable(cause__$1));

var G__43378 = cljs.core.ex_cause(cause__$1);
cause__$1 = G__43378;
continue;
} else {
return null;
}
break;
}
}finally {console.groupEnd();
}}));

(app.common.exceptions.print_throwable.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.exceptions.print_throwable.cljs$lang$applyTo = (function (seq43335){
var G__43336 = cljs.core.first(seq43335);
var seq43335__$1 = cljs.core.next(seq43335);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43336,seq43335__$1);
}));

app.common.exceptions.get_hint = (function app$common$exceptions$get_hint(cause){
var or__5025__auto__ = (function (){var G__43345 = cljs.core.ex_data(cause);
var G__43345__$1 = (((G__43345 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__43345,new cljs.core.Keyword(null,"hint","hint",439639918)));
if((G__43345__$1 == null)){
return null;
} else {
return app.common.exceptions.first_line(G__43345__$1);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var G__43346 = cljs.core.ex_message(cause);
if((G__43346 == null)){
return null;
} else {
return app.common.exceptions.first_line(G__43346);
}
}
});

//# sourceMappingURL=app.common.exceptions.js.map
