import "./cljs_env.js";
import "./cljs.core.js";
import "./instaparse.print.js";
goog.provide('instaparse.failure');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__75487 = (line + (1));
var G__75488 = (1);
var G__75489 = (counter + (1));
line = G__75487;
col = G__75488;
counter = G__75489;
continue;
} else {
var G__75490 = line;
var G__75491 = (col + (1));
var G__75492 = (counter + (1));
line = G__75490;
col = G__75491;
counter = G__75492;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__75493 = cljs.core.next(chars);
var G__75494 = (n__$1 - (1));
chars = G__75493;
n__$1 = G__75494;
continue;
} else {
var G__75495 = cljs.core.next(chars);
var G__75496 = n__$1;
chars = G__75495;
n__$1 = G__75496;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 * and accounts for horizontal tabs which might change
 * the alignment of the '^' to the error location.
 */
instaparse.failure.marker = (function instaparse$failure$marker(text,n){
if(cljs.core.truth_((function (){var and__5023__auto__ = text;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.integer_QMARK_(n);
} else {
return and__5023__auto__;
}
})())){
var marker_text = clojure.string.replace(text,/[^\s]/," ");
if((n <= (1))){
return "^";
} else {
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(marker_text,(0),(n - (1))),"^"].join('');
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__75477){
var map__75478 = p__75477;
var map__75478__$1 = cljs.core.__destructure_map(map__75478);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75478__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75478__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75478__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75478__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(text,column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__75479_75497 = cljs.core.seq(full_reasons);
var chunk__75480_75498 = null;
var count__75481_75499 = (0);
var i__75482_75500 = (0);
while(true){
if((i__75482_75500 < count__75481_75499)){
var r_75501 = chunk__75480_75498.cljs$core$IIndexed$_nth$arity$2(null,i__75482_75500);
instaparse.failure.print_reason(r_75501);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__75502 = seq__75479_75497;
var G__75503 = chunk__75480_75498;
var G__75504 = count__75481_75499;
var G__75505 = (i__75482_75500 + (1));
seq__75479_75497 = G__75502;
chunk__75480_75498 = G__75503;
count__75481_75499 = G__75504;
i__75482_75500 = G__75505;
continue;
} else {
var temp__5825__auto___75506 = cljs.core.seq(seq__75479_75497);
if(temp__5825__auto___75506){
var seq__75479_75507__$1 = temp__5825__auto___75506;
if(cljs.core.chunked_seq_QMARK_(seq__75479_75507__$1)){
var c__5548__auto___75508 = cljs.core.chunk_first(seq__75479_75507__$1);
var G__75509 = cljs.core.chunk_rest(seq__75479_75507__$1);
var G__75510 = c__5548__auto___75508;
var G__75511 = cljs.core.count(c__5548__auto___75508);
var G__75512 = (0);
seq__75479_75497 = G__75509;
chunk__75480_75498 = G__75510;
count__75481_75499 = G__75511;
i__75482_75500 = G__75512;
continue;
} else {
var r_75513 = cljs.core.first(seq__75479_75507__$1);
instaparse.failure.print_reason(r_75513);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__75514 = cljs.core.next(seq__75479_75507__$1);
var G__75515 = null;
var G__75516 = (0);
var G__75517 = (0);
seq__75479_75497 = G__75514;
chunk__75480_75498 = G__75515;
count__75481_75499 = G__75516;
i__75482_75500 = G__75517;
continue;
}
} else {
}
}
break;
}

var seq__75483 = cljs.core.seq(partial_reasons);
var chunk__75484 = null;
var count__75485 = (0);
var i__75486 = (0);
while(true){
if((i__75486 < count__75485)){
var r = chunk__75484.cljs$core$IIndexed$_nth$arity$2(null,i__75486);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__75518 = seq__75483;
var G__75519 = chunk__75484;
var G__75520 = count__75485;
var G__75521 = (i__75486 + (1));
seq__75483 = G__75518;
chunk__75484 = G__75519;
count__75485 = G__75520;
i__75486 = G__75521;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__75483);
if(temp__5825__auto__){
var seq__75483__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__75483__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__75483__$1);
var G__75522 = cljs.core.chunk_rest(seq__75483__$1);
var G__75523 = c__5548__auto__;
var G__75524 = cljs.core.count(c__5548__auto__);
var G__75525 = (0);
seq__75483 = G__75522;
chunk__75484 = G__75523;
count__75485 = G__75524;
i__75486 = G__75525;
continue;
} else {
var r = cljs.core.first(seq__75483__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__75526 = cljs.core.next(seq__75483__$1);
var G__75527 = null;
var G__75528 = (0);
var G__75529 = (0);
seq__75483 = G__75526;
chunk__75484 = G__75527;
count__75485 = G__75528;
i__75486 = G__75529;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
