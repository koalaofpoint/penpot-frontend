import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.tokenscript.js";
import "./cuerdas.core.js";
goog.provide('app.main.data.workspace.tokens.format');
app.main.data.workspace.tokens.format.category_dictionary = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"sizing","sizing",-1868029885),new cljs.core.Keyword(null,"inset","inset",-396367740),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"spread","spread",862337191),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"text-case","text-case",1049419399),new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"spacing","spacing",204422175)],["Y","Line Height","Sizing","Inner Shadow","Color","Font Size","Spread","Font Weight","Text Case","Y","Blur","Stroke Width","X","Text Decoration","Letter Spacing","X","Border Radius","Font Family","Spacing"]);
/**
 * Formats a sequence of [k v] entries into a formatted string.
 */
app.main.data.workspace.tokens.format.format_map_entries = (function app$main$data$workspace$tokens$format$format_map_entries(entries){
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74831){
var vec__74832 = p__74831;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74832,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74832,(1),null);
return ["- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__74836 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
return (app.main.data.workspace.tokens.format.category_dictionary.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.tokens.format.category_dictionary.cljs$core$IFn$_invoke$arity$1(G__74836) : app.main.data.workspace.tokens.format.category_dictionary.call(null,G__74836));
})()),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((app.main.data.workspace.tokens.format.format_token_value.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.tokens.format.format_token_value.cljs$core$IFn$_invoke$arity$1(v) : app.main.data.workspace.tokens.format.format_token_value.call(null,v)))].join('');
}),entries)))].join('');
});
/**
 * Formats tokenscript Token
 */
app.main.data.workspace.tokens.format.format_structured_token = (function app$main$data$workspace$tokens$format$format_structured_token(token_symbol){
return app.main.data.workspace.tokens.format.format_map_entries(cljs.core.es6_iterator_seq(token_symbol.value.entries()));
});
app.main.data.workspace.tokens.format.format_tokenscript_symbol = (function app$main$data$workspace$tokens$format$format_tokenscript_symbol(tokenscript_symbol){
if(app.main.data.tokenscript.rem_number_with_unit_QMARK_(tokenscript_symbol)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.main.data.tokenscript.rem__GT_px(tokenscript_symbol)),"px"].join('');
} else {
if(app.main.data.tokenscript.color_symbol_QMARK_(tokenscript_symbol)){
return app.main.data.tokenscript.color_symbol__GT_hex_string(tokenscript_symbol);
} else {
if(app.main.data.tokenscript.structured_record_token_QMARK_(tokenscript_symbol)){
return app.main.data.workspace.tokens.format.format_structured_token(tokenscript_symbol);
} else {
if(app.main.data.tokenscript.structured_array_token_QMARK_(tokenscript_symbol)){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.tokens.format.format_tokenscript_symbol,tokenscript_symbol.value));
} else {
return tokenscript_symbol.toString();

}
}
}
}
});
/**
 * Converts token value of any shape to a string.
 */
app.main.data.workspace.tokens.format.format_token_value = (function app$main$data$workspace$tokens$format$format_token_value(token_value){
if(app.main.data.tokenscript.tokenscript_symbol_QMARK_(token_value)){
return app.main.data.workspace.tokens.format.format_tokenscript_symbol(token_value);
} else {
if(cljs.core.map_QMARK_(token_value)){
return app.main.data.workspace.tokens.format.format_map_entries(token_value);
} else {
if(((cljs.core.sequential_QMARK_(token_value)) && (cljs.core.every_QMARK_(cljs.core.map_QMARK_,token_value)))){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.tokens.format.format_token_value,token_value));
} else {
if(cljs.core.sequential_QMARK_(token_value)){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",token_value);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(token_value);

}
}
}
}
});

//# sourceMappingURL=app.main.data.workspace.tokens.format.js.map
