import "./cljs_env.js";
import "./cljs.core.js";
goog.provide('garden.compression');
/**
 * Return a function which when given a string will return a map
 *   containing the chunk of text matched by re, it's size, and tag.
 */
garden.compression.token_fn = (function garden$compression$token_fn(p__81732){
var vec__81733 = p__81732;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81733,(0),null);
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81733,(1),null);
return (function (s){
var temp__5825__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__5825__auto__)){
var chunk = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"chunk","chunk",-1191159620),chunk,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.count(chunk)], null);
} else {
return null;
}
});
});
/**
 * Given an arbitrary number of [tag regex] pairs, return a function
 *   which when given a string s will return the first matching token of s.
 *   Token precedence is determined by the order of the pairs. The first
 *   and last pairs have the highest and lowest precedence respectively.
 */
garden.compression.tokenizer = (function garden$compression$tokenizer(var_args){
var args__5755__auto__ = [];
var len__5749__auto___81747 = arguments.length;
var i__5750__auto___81748 = (0);
while(true){
if((i__5750__auto___81748 < len__5749__auto___81747)){
args__5755__auto__.push((arguments[i__5750__auto___81748]));

var G__81749 = (i__5750__auto___81748 + (1));
i__5750__auto___81748 = G__81749;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic = (function (tags_PLUS_regexes){
var fs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compression.token_fn,tags_PLUS_regexes);
return (function (s){
return cljs.core.some((function (p1__81737_SHARP_){
return (p1__81737_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__81737_SHARP_.cljs$core$IFn$_invoke$arity$1(s) : p1__81737_SHARP_.call(null,s));
}),fs);
});
}));

(garden.compression.tokenizer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.compression.tokenizer.cljs$lang$applyTo = (function (seq81738){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq81738));
}));

/**
 * Tokenizer used during stylesheet compression.
 */
garden.compression.stylesheet_tokenizer = garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),/^\"(?:\\.|[^\"])*\"/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r-brace","r-brace",-1335738887),/^\s*\{\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l-brace","l-brace",613286657),/^;?\s*}/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r-paren","r-paren",-1688338021),/^\s*\(\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l-paren","l-paren",2052672514),/^\s*\)/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comma","comma",1699024745),/^,\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colon","colon",-965200945),/^:\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semicolon","semicolon",797086549),/^;/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),/^and\s+/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space+","space+",378127624),/^ +/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"white-space+","white-space+",1452157162),/^\s+/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any","any",1705907423),/^./], null)], 0));
/**
 * Compress a string of CSS using a basic compressor.
 */
garden.compression.compress_stylesheet = (function garden$compression$compress_stylesheet(stylesheet){
var s1 = stylesheet;
var s2 = "";
while(true){
var temp__5823__auto__ = garden.compression.stylesheet_tokenizer(s1);
if(cljs.core.truth_(temp__5823__auto__)){
var map__81740 = temp__5823__auto__;
var map__81740__$1 = cljs.core.__destructure_map(map__81740);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81740__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var chunk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81740__$1,new cljs.core.Keyword(null,"chunk","chunk",-1191159620));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81740__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var G__81752 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s1,size);
var G__81753 = [s2,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__81742 = tag;
var G__81742__$1 = (((G__81742 instanceof cljs.core.Keyword))?G__81742.fqn:null);
switch (G__81742__$1) {
case "string":
return chunk;

break;
case "r-brace":
return "{";

break;
case "l-brace":
return "}";

break;
case "r-paren":
return "(";

break;
case "l-paren":
return ")";

break;
case "and":
return "and ";

break;
case "comma":
return ",";

break;
case "semi-comma":
return ";";

break;
case "colon":
return ":";

break;
case "space+":
return " ";

break;
case "white-space+":
return "";

break;
default:
return chunk;

}
})())].join('');
s1 = G__81752;
s2 = G__81753;
continue;
} else {
return s2;
}
break;
}
});

//# sourceMappingURL=garden.compression.js.map
