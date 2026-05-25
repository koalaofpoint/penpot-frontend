import "./cljs_env.js";
import "./cljs.core.js";
import "./garden.compiler.js";
goog.provide('garden.core');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__5755__auto__ = [];
var len__5749__auto___82496 = arguments.length;
var i__5750__auto___82497 = (0);
while(true){
if((i__5750__auto___82497 < len__5749__auto___82496)){
args__5755__auto__.push((arguments[i__5750__auto___82497]));

var G__82498 = (i__5750__auto___82497 + (1));
i__5750__auto___82497 = G__82498;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(garden.compiler.compile_css,rules);
}));

(garden.core.css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.core.css.cljs$lang$applyTo = (function (seq82492){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq82492));
}));

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__5755__auto__ = [];
var len__5749__auto___82499 = arguments.length;
var i__5750__auto___82500 = (0);
while(true){
if((i__5750__auto___82500 < len__5749__auto___82499)){
args__5755__auto__.push((arguments[i__5750__auto___82500]));

var G__82501 = (i__5750__auto___82500 + (1));
i__5750__auto___82500 = G__82501;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style(maps);
}));

(garden.core.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.core.style.cljs$lang$applyTo = (function (seq82495){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq82495));
}));


//# sourceMappingURL=garden.core.js.map
