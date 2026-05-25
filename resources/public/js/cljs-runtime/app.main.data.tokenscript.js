import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$$penpot$tokenscript.js";
import "./app.common.logging.js";
import "./app.common.time.js";
import "./app.main.data.workspace.tokens.errors.js";
goog.provide('app.main.data.tokenscript');
app.common.logging.loggers.set("app.main.data.tokenscript",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"debug","debug",-1608172596)));
app.main.data.tokenscript.config = shadow.js.shim.module$$penpot$tokenscript.makeConfig();
app.main.data.tokenscript.tokenscript_symbol_QMARK_ = (function app$main$data$tokenscript$tokenscript_symbol_QMARK_(v){
return (v instanceof shadow.js.shim.module$$penpot$tokenscript.BaseSymbolType);
});
app.main.data.tokenscript.structured_token_QMARK_ = (function app$main$data$tokenscript$structured_token_QMARK_(v){
return (v instanceof shadow.js.shim.module$$penpot$tokenscript.TokenSymbol);
});
app.main.data.tokenscript.structured_record_token_QMARK_ = (function app$main$data$tokenscript$structured_record_token_QMARK_(v){
return ((app.main.data.tokenscript.structured_token_QMARK_(v)) && ((v.value instanceof Map)));
});
app.main.data.tokenscript.structured_array_token_QMARK_ = (function app$main$data$tokenscript$structured_array_token_QMARK_(v){
return ((app.main.data.tokenscript.structured_token_QMARK_(v)) && ((v.value instanceof Array)));
});
app.main.data.tokenscript.number_with_unit_symbol_QMARK_ = (function app$main$data$tokenscript$number_with_unit_symbol_QMARK_(v){
return (v instanceof shadow.js.shim.module$$penpot$tokenscript.NumberWithUnitSymbol);
});
app.main.data.tokenscript.number_symbol_QMARK_ = (function app$main$data$tokenscript$number_symbol_QMARK_(v){
return (v instanceof shadow.js.shim.module$$penpot$tokenscript.NumberSymbol);
});
app.main.data.tokenscript.list_symbol_QMARK_ = (function app$main$data$tokenscript$list_symbol_QMARK_(v){
return (v instanceof shadow.js.shim.module$$penpot$tokenscript.ListSymbol);
});
app.main.data.tokenscript.color_symbol_QMARK_ = (function app$main$data$tokenscript$color_symbol_QMARK_(v){
return (v instanceof shadow.js.shim.module$$penpot$tokenscript.ColorSymbol);
});
app.main.data.tokenscript.processor_error_QMARK_ = (function app$main$data$tokenscript$processor_error_QMARK_(err){
return (err instanceof shadow.js.shim.module$$penpot$tokenscript.ProcessorError);
});
app.main.data.tokenscript.color_symbol__GT_hex_string = (function app$main$data$tokenscript$color_symbol__GT_hex_string(v){
if(app.main.data.tokenscript.color_symbol_QMARK_(v)){
return v.to("hex").toString();
} else {
return null;
}
});
app.main.data.tokenscript.color_alpha = (function app$main$data$tokenscript$color_alpha(v){
if(cljs.core.truth_(v.isHex())){
return (1);
} else {
var or__5025__auto__ = v.getAttribute("alpha");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
}
});
app.main.data.tokenscript.color_symbol__GT_penpot_color = (function app$main$data$tokenscript$color_symbol__GT_penpot_color(v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),app.main.data.tokenscript.color_symbol__GT_hex_string(v),new cljs.core.Keyword(null,"opacity","opacity",397153780),app.main.data.tokenscript.color_alpha(v)], null);
});
app.main.data.tokenscript.rem_number_with_unit_QMARK_ = (function app$main$data$tokenscript$rem_number_with_unit_QMARK_(v){
return ((app.main.data.tokenscript.number_with_unit_symbol_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v.unit,"rem")));
});
app.main.data.tokenscript.percent_number_with_unit_QMARK_ = (function app$main$data$tokenscript$percent_number_with_unit_QMARK_(v){
return ((app.main.data.tokenscript.number_with_unit_symbol_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v.unit,"%")));
});
app.main.data.tokenscript.rem__GT_px = (function app$main$data$tokenscript$rem__GT_px(v){
return (v.value * (16));
});
/**
 * Converts structured token (record or array) to penpot map format.
 *   Structured tokens are non-primitive token types like `typography` or `box-shadow`.
 */
app.main.data.tokenscript.structured_token__GT_penpot_map = (function app$main$data$tokenscript$structured_token__GT_penpot_map(token_symbol){
if((token_symbol.value instanceof Array)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.main.data.tokenscript.tokenscript_symbols__GT_penpot_unit,token_symbol.value);
} else {
var entries = cljs.core.es6_iterator_seq(token_symbol.value.entries());
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__71874){
var vec__71875 = p__71874;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71875,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71875,(1),null);
var V = vec__71875;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(app.main.data.tokenscript.tokenscript_symbols__GT_penpot_unit.cljs$core$IFn$_invoke$arity$1 ? app.main.data.tokenscript.tokenscript_symbols__GT_penpot_unit.cljs$core$IFn$_invoke$arity$1(v) : app.main.data.tokenscript.tokenscript_symbols__GT_penpot_unit.call(null,v))], null);
}),entries));
}
});
app.main.data.tokenscript.tokenscript_symbols__GT_penpot_unit = (function app$main$data$tokenscript$tokenscript_symbols__GT_penpot_unit(v){
if((v == null)){
return null;
} else {
if(app.main.data.tokenscript.structured_token_QMARK_(v)){
return app.main.data.tokenscript.structured_token__GT_penpot_map(v);
} else {
if(app.main.data.tokenscript.list_symbol_QMARK_(v)){
return app.main.data.tokenscript.structured_token__GT_penpot_map(v);
} else {
if(app.main.data.tokenscript.color_symbol_QMARK_(v)){
return v.to("hex").value;
} else {
if(app.main.data.tokenscript.rem_number_with_unit_QMARK_(v)){
return app.main.data.tokenscript.rem__GT_px(v);
} else {
if(app.main.data.tokenscript.percent_number_with_unit_QMARK_(v)){
return (v.value / (100));
} else {
return v.value;

}
}
}
}
}
}
});
/**
 * Collects resolved tokens during build time into a clojure structure.
 * Returns Tokenscript Symbols in `:resolved-value` key.
 */
app.main.data.tokenscript.create_token_builder = (function app$main$data$tokenscript$create_token_builder(tokens){
var output = cljs.core.volatile_BANG_(tokens);
var on_resolve = (function (token_name,resolved_symbol){
return output.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc_in(output.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_name,new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626)], null),resolved_symbol));
});
var on_error = (function (token_name,_error,_original_value){
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tokens,token_name);
var default_error = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","invalid-token-value","error.style-dictionary/invalid-token-value",2098581256),value)], null);
return output.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc_in(output.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_name,new cljs.core.Keyword(null,"errors","errors",-908790718)], null),default_error));
});
var get_result = (function (){
return cljs.core.deref(output);
});
return ({"onResolve": on_resolve, "onError": on_error, "getResult": get_result});
});
/**
 * Convert penpot token into a format that tokenscript can handle.
 */
app.main.data.tokenscript.clj__GT_token__GT_tokenscript_token = (function app$main$data$tokenscript$clj__GT_token__GT_tokenscript_token(p__71878){
var map__71879 = p__71878;
var map__71879__$1 = cljs.core.__destructure_map(map__71879);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71879__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71879__$1,new cljs.core.Keyword(null,"value","value",305978217));
return ({"$type": cljs.core.name(type), "$value": cljs.core.clj__GT_js(value)});
});
/**
 * Convert penpot map of tokens into tokenscript map structure.
 *   tokenscript accepts a map of [token-name {"$type": string, "$value": any}]
 */
app.main.data.tokenscript.clj_tokens__GT_tokenscript_tokens = (function app$main$data$tokenscript$clj_tokens__GT_tokenscript_tokens(tokens){
var token_map = (new Map());
var seq__71883_71902 = cljs.core.seq(tokens);
var chunk__71884_71903 = null;
var count__71885_71904 = (0);
var i__71886_71905 = (0);
while(true){
if((i__71886_71905 < count__71885_71904)){
var vec__71893_71906 = chunk__71884_71903.cljs$core$IIndexed$_nth$arity$2(null,i__71886_71905);
var k_71907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71893_71906,(0),null);
var token_71908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71893_71906,(1),null);
token_map.set(k_71907,app.main.data.tokenscript.clj__GT_token__GT_tokenscript_token(token_71908));


var G__71909 = seq__71883_71902;
var G__71910 = chunk__71884_71903;
var G__71911 = count__71885_71904;
var G__71912 = (i__71886_71905 + (1));
seq__71883_71902 = G__71909;
chunk__71884_71903 = G__71910;
count__71885_71904 = G__71911;
i__71886_71905 = G__71912;
continue;
} else {
var temp__5825__auto___71916 = cljs.core.seq(seq__71883_71902);
if(temp__5825__auto___71916){
var seq__71883_71917__$1 = temp__5825__auto___71916;
if(cljs.core.chunked_seq_QMARK_(seq__71883_71917__$1)){
var c__5548__auto___71918 = cljs.core.chunk_first(seq__71883_71917__$1);
var G__71919 = cljs.core.chunk_rest(seq__71883_71917__$1);
var G__71920 = c__5548__auto___71918;
var G__71921 = cljs.core.count(c__5548__auto___71918);
var G__71922 = (0);
seq__71883_71902 = G__71919;
chunk__71884_71903 = G__71920;
count__71885_71904 = G__71921;
i__71886_71905 = G__71922;
continue;
} else {
var vec__71896_71923 = cljs.core.first(seq__71883_71917__$1);
var k_71924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71896_71923,(0),null);
var token_71925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71896_71923,(1),null);
token_map.set(k_71924,app.main.data.tokenscript.clj__GT_token__GT_tokenscript_token(token_71925));


var G__71926 = cljs.core.next(seq__71883_71917__$1);
var G__71927 = null;
var G__71928 = (0);
var G__71929 = (0);
seq__71883_71902 = G__71926;
chunk__71884_71903 = G__71927;
count__71885_71904 = G__71928;
i__71886_71905 = G__71929;
continue;
}
} else {
}
}
break;
}

return token_map;
});
/**
 * Builds tokens using `tokenscript`.
 */
app.main.data.tokenscript.process_tokens = (function app$main$data$tokenscript$process_tokens(tokens){
var input = app.main.data.tokenscript.clj_tokens__GT_tokenscript_tokens(tokens);
var result = shadow.js.shim.module$$penpot$tokenscript.processTokens(input,({"config": app.main.data.tokenscript.config, "builder": app.main.data.tokenscript.create_token_builder(tokens)}));
return result;
});
app.main.data.tokenscript.update_token = (function app$main$data$tokenscript$update_token(tokens,token){
var result = app.main.data.tokenscript.process_tokens(tokens);
var resolver = result.resolver;
return resolver.updateToken(({"tokenPath": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token), "tokenData": app.main.data.tokenscript.clj__GT_token__GT_tokenscript_token(token)}));
});
app.main.data.tokenscript.resolve_tokens = (function app$main$data$tokenscript$resolve_tokens(tokens){
var tpoint = app.common.time.tpoint_ms();
var result = app.main.data.tokenscript.process_tokens(tokens);
var elapsed = tpoint();
if(app.common.logging.enabled_QMARK_("app.main.data.tokenscript",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"tokenscript/resolve-tokens"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),elapsed], null)], null);
}),null)),null,null,"app.main.data.tokenscript",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return result.output;
});

//# sourceMappingURL=app.main.data.tokenscript.js.map
