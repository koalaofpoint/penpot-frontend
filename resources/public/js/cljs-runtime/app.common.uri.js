import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./cuerdas.core.js";
import "./lambdaisland.uri.js";
import "./lambdaisland.uri.normalize.js";
goog.provide('app.common.uri');
/**
 * Joins any number of URIs as per RFC3986. Arguments can be strings, they will
 *   be coerced to URI records.
 * @param {...*} var_args
 */
app.common.uri.join = (function() { 
var app$common$uri$join__delegate = function (param34458){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.join,param34458);
};
var app$common$uri$join = function (var_args){
var param34458 = null;
if (arguments.length > 0) {
var G__34495__i = 0, G__34495__a = new Array(arguments.length -  0);
while (G__34495__i < G__34495__a.length) {G__34495__a[G__34495__i] = arguments[G__34495__i + 0]; ++G__34495__i;}
  param34458 = new cljs.core.IndexedSeq(G__34495__a,0,null);
} 
return app$common$uri$join__delegate.call(this,param34458);};
app$common$uri$join.cljs$lang$maxFixedArity = 0;
app$common$uri$join.cljs$lang$applyTo = (function (arglist__34496){
var param34458 = cljs.core.seq(arglist__34496);
return app$common$uri$join__delegate(param34458);
});
app$common$uri$join.cljs$core$IFn$_invoke$arity$variadic = app$common$uri$join__delegate;
return app$common$uri$join;
})()
;
/**
 * Parse a URI string into a lambadisland.uri.URI record.
 */
app.common.uri.parse = (function app$common$uri$parse(param34463){
return lambdaisland.uri.parse(param34463);
});
/**
 * Percent encoding for query strings. Will percent-encode values that are
 *   reserved in query strings only. Encodes spaces as +.
 */
app.common.uri.query_encode = (function app$common$uri$query_encode(param34466){
return lambdaisland.uri.query_encode(param34466);
});
/**
 * Convert characters in their percent encoded form. e.g.
 * `(percent_encode "a") #_=> "%61"`. When given a second argument, then
 * only characters of the given character class are encoded,
 * see `character-class`.
 * 
 * Characters are encoded as UTF-8. To use a different encoding. re-bind
 * `*character-encoding*`
 */
app.common.uri.percent_encode = (function() {
var app$common$uri$percent_encode = null;
var app$common$uri$percent_encode__1 = (function (param34468){
return lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$1(param34468);
});
var app$common$uri$percent_encode__2 = (function (param34469,param34470){
return lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$2(param34469,param34470);
});
app$common$uri$percent_encode = function(param34469,param34470){
switch(arguments.length){
case 1:
return app$common$uri$percent_encode__1.call(this,param34469);
case 2:
return app$common$uri$percent_encode__2.call(this,param34469,param34470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$common$uri$percent_encode.cljs$core$IFn$_invoke$arity$1 = app$common$uri$percent_encode__1;
app$common$uri$percent_encode.cljs$core$IFn$_invoke$arity$2 = app$common$uri$percent_encode__2;
return app$common$uri$percent_encode;
})()
;
/**
 * Check if `o` is URI instance.
 */
app.common.uri.uri_QMARK_ = (function app$common$uri$uri_QMARK_(param34471){
return lambdaisland.uri.uri_QMARK_(param34471);
});
app.common.uri.uri = (function app$common$uri$uri(o){
if(lambdaisland.uri.uri_QMARK_(o)){
return o;
} else {
if(cljs.core.map_QMARK_(o)){
return lambdaisland.uri.map__GT_URI(o);
} else {
if((o == null)){
return o;
} else {
return lambdaisland.uri.parse(o);

}
}
}
});
app.common.uri.query_string__GT_map = (function app$common$uri$query_string__GT_map(s){
return lambdaisland.uri.query_string__GT_map.cljs$core$IFn$_invoke$arity$1(s);
});
app.common.uri.default_encode_value = (function app$common$uri$default_encode_value(v){
if((v instanceof cljs.core.Keyword)){
return cljs.core.name(v);
} else {
return v;
}
});
app.common.uri.get_domain = (function app$common$uri$get_domain(p__34480){
var map__34481 = p__34480;
var map__34481__$1 = cljs.core.__destructure_map(map__34481);
var uri = map__34481__$1;
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34481__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34481__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var G__34483 = host;
if(cljs.core.truth_(port)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34483),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join('');
} else {
return G__34483;
}
});
app.common.uri.map__GT_query_string = (function app$common$uri$map__GT_query_string(var_args){
var G__34486 = arguments.length;
switch (G__34486) {
case 1:
return app.common.uri.map__GT_query_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.uri.map__GT_query_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.uri.map__GT_query_string.cljs$core$IFn$_invoke$arity$1 = (function (params){
return app.common.uri.map__GT_query_string.cljs$core$IFn$_invoke$arity$2(params,null);
}));

(app.common.uri.map__GT_query_string.cljs$core$IFn$_invoke$arity$2 = (function (params,p__34487){
var map__34488 = p__34487;
var map__34488__$1 = cljs.core.__destructure_map(map__34488);
var value_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34488__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790),app.common.uri.default_encode_value);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34488__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.identity);
return lambdaisland.uri.map__GT_query_string(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__34484_SHARP_){
return (cljs.core.second(p1__34484_SHARP_) == null);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__34489){
var vec__34490 = p__34489;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34490,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34490,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(k) : key_fn.call(null,k)),(value_fn.cljs$core$IFn$_invoke$arity$1 ? value_fn.cljs$core$IFn$_invoke$arity$1(v) : value_fn.call(null,v))], null);
}))),params));
}));

(app.common.uri.map__GT_query_string.cljs$lang$maxFixedArity = 2);

app.common.uri.ensure_path_slash = (function app$common$uri$ensure_path_slash(u){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(app.common.uri.uri(u),new cljs.core.Keyword(null,"path","path",-188191168),(function (path){
if(cuerdas.core.ends_with_QMARK_(path,"/")){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"/"].join('');
}
}));
});
(lambdaisland.uri.URI.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(lambdaisland.uri.URI.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,_opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.edn_tag)," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1.toString()], 0))], 0));
}));

//# sourceMappingURL=app.common.uri.js.map
