import "./cljs_env.js";
import "./cljs.core.js";
import "./app.util.i18n.js";
import "./cuerdas.core.js";
goog.provide('app.main.data.workspace.tokens.warnings');
app.main.data.workspace.tokens.warnings.warning_codes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("warning.style-dictionary","invalid-referenced-token-value-opacity","warning.style-dictionary/invalid-referenced-token-value-opacity",1549690788),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("warning","code","warning/code",1535644202),new cljs.core.Keyword("warning.style-dictionary","invalid-referenced-token-value-opacity","warning.style-dictionary/invalid-referenced-token-value-opacity",1549690788),new cljs.core.Keyword("warning","fn","warning/fn",-218854416),(function (value){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.resolved-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))),"."].join(''),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.opacity-range")], null));
})], null),new cljs.core.Keyword("warning.style-dictionary","invalid-referenced-token-value-stroke-width","warning.style-dictionary/invalid-referenced-token-value-stroke-width",1689441159),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("warning","code","warning/code",1535644202),new cljs.core.Keyword("warning.style-dictionary","invalid-referenced-token-value-stroke-width","warning.style-dictionary/invalid-referenced-token-value-stroke-width",1689441159),new cljs.core.Keyword("warning","fn","warning/fn",-218854416),(function (value){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.resolved-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))),"."].join(''),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.stroke-width-range")], null));
})], null),new cljs.core.Keyword("warning","unknown","warning/unknown",-1993610101),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("warning","code","warning/code",1535644202),new cljs.core.Keyword("warning","unknown","warning/unknown",-1993610101),new cljs.core.Keyword("warning","message","warning/message",-1396136870),"Unknown warning"], null)], null);
app.main.data.workspace.tokens.warnings.get_warning_code = (function app$main$data$workspace$tokens$warnings$get_warning_code(warning_key){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.main.data.workspace.tokens.warnings.warning_codes,warning_key,new cljs.core.Keyword("warning","unknown","warning/unknown",-1993610101).cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.warnings.warning_codes));
});
app.main.data.workspace.tokens.warnings.warning_with_value = (function app$main$data$workspace$tokens$warnings$warning_with_value(warning_key,warning_value){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.main.data.workspace.tokens.warnings.get_warning_code(warning_key),new cljs.core.Keyword("warning","value","warning/value",1465330453),warning_value);
});
app.main.data.workspace.tokens.warnings.humanize_warnings = (function app$main$data$workspace$tokens$warnings$humanize_warnings(warnings){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (warn){
if(cljs.core.truth_(new cljs.core.Keyword("warning","fn","warning/fn",-218854416).cljs$core$IFn$_invoke$arity$1(warn))){
var G__71934 = new cljs.core.Keyword("warning","value","warning/value",1465330453).cljs$core$IFn$_invoke$arity$1(warn);
var fexpr__71933 = new cljs.core.Keyword("warning","fn","warning/fn",-218854416).cljs$core$IFn$_invoke$arity$1(warn);
return (fexpr__71933.cljs$core$IFn$_invoke$arity$1 ? fexpr__71933.cljs$core$IFn$_invoke$arity$1(G__71934) : fexpr__71933.call(null,G__71934));
} else {
if(cljs.core.truth_(new cljs.core.Keyword("warning","message","warning/message",-1396136870).cljs$core$IFn$_invoke$arity$1(warn))){
return new cljs.core.Keyword("warning","message","warning/message",-1396136870).cljs$core$IFn$_invoke$arity$1(warn);
} else {
return warn;

}
}
}),warnings);
});

//# sourceMappingURL=app.main.data.workspace.tokens.warnings.js.map
