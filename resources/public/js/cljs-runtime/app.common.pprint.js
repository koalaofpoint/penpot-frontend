import "./cljs_env.js";
import "./cljs.core.js";
import "./me.flowthing.pp.js";
goog.provide('app.common.pprint');
app.common.pprint.default_level = (8);
app.common.pprint.default_length = (25);
app.common.pprint.default_width = (120);
app.common.pprint.pprint = (function app$common$pprint$pprint(var_args){
var args__5755__auto__ = [];
var len__5749__auto___29269 = arguments.length;
var i__5750__auto___29271 = (0);
while(true){
if((i__5750__auto___29271 < len__5749__auto___29269)){
args__5755__auto__.push((arguments[i__5750__auto___29271]));

var G__29272 = (i__5750__auto___29271 + (1));
i__5750__auto___29271 = G__29272;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.pprint.pprint.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.pprint.pprint.cljs$core$IFn$_invoke$arity$variadic = (function (expr,p__29205){
var map__29206 = p__29205;
var map__29206__$1 = cljs.core.__destructure_map(map__29206);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29206__$1,new cljs.core.Keyword(null,"width","width",-384071477),app.common.pprint.default_width);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29206__$1,new cljs.core.Keyword(null,"level","level",1290497552),app.common.pprint.default_level);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29206__$1,new cljs.core.Keyword(null,"length","length",588987862),app.common.pprint.default_length);
var _STAR_print_level_STAR__orig_val__29208 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__orig_val__29210 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__temp_val__29211 = level;
var _STAR_print_length_STAR__temp_val__29212 = length;
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__29211);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__29212);

try{return me.flowthing.pp.pprint.cljs$core$IFn$_invoke$arity$2(expr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),width], null));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__29210);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__29208);
}}));

(app.common.pprint.pprint.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.pprint.pprint.cljs$lang$applyTo = (function (seq29200){
var G__29201 = cljs.core.first(seq29200);
var seq29200__$1 = cljs.core.next(seq29200);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29201,seq29200__$1);
}));

app.common.pprint.pprint_str = (function app$common$pprint$pprint_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___29279 = arguments.length;
var i__5750__auto___29281 = (0);
while(true){
if((i__5750__auto___29281 < len__5749__auto___29279)){
args__5755__auto__.push((arguments[i__5750__auto___29281]));

var G__29282 = (i__5750__auto___29281 + (1));
i__5750__auto___29281 = G__29282;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.pprint.pprint_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.pprint.pprint_str.cljs$core$IFn$_invoke$arity$variadic = (function (expr,p__29248){
var map__29249 = p__29248;
var map__29249__$1 = cljs.core.__destructure_map(map__29249);
var opts = map__29249__$1;
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29253_29284 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29254_29285 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29255_29286 = true;
var _STAR_print_fn_STAR__temp_val__29256_29287 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29255_29286);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29256_29287);

try{app.common.pprint.pprint.cljs$core$IFn$_invoke$arity$variadic(expr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29254_29285);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29253_29284);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
}));

(app.common.pprint.pprint_str.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.pprint.pprint_str.cljs$lang$applyTo = (function (seq29233){
var G__29234 = cljs.core.first(seq29233);
var seq29233__$1 = cljs.core.next(seq29233);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29234,seq29233__$1);
}));


//# sourceMappingURL=app.common.pprint.js.map
