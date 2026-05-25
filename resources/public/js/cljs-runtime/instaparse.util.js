import "./cljs_env.js";
import "./cljs.core.js";
goog.provide('instaparse.util');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__5755__auto__ = [];
var len__5749__auto___75533 = arguments.length;
var i__5750__auto___75534 = (0);
while(true){
if((i__5750__auto___75534 < len__5749__auto___75533)){
args__5755__auto__.push((arguments[i__5750__auto___75534]));

var G__75535 = (i__5750__auto___75534 + (1));
i__5750__auto___75534 = G__75535;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq75530){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75530));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__5755__auto__ = [];
var len__5749__auto___75536 = arguments.length;
var i__5750__auto___75537 = (0);
while(true){
if((i__5750__auto___75537 < len__5749__auto___75536)){
args__5755__auto__.push((arguments[i__5750__auto___75537]));

var G__75538 = (i__5750__auto___75537 + (1));
i__5750__auto___75537 = G__75538;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq75531){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75531));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__75532 = "";
var G__75532__$1 = (cljs.core.truth_(re.ignoreCase)?[G__75532,"i"].join(''):G__75532);
var G__75532__$2 = (cljs.core.truth_(re.multiline)?[G__75532__$1,"m"].join(''):G__75532__$1);
if(cljs.core.truth_(re.unicode)){
return [G__75532__$2,"u"].join('');
} else {
return G__75532__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
