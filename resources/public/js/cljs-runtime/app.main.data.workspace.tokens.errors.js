import "./cljs_env.js";
import "./cljs.core.js";
import "./app.util.i18n.js";
import "./cuerdas.core.js";
goog.provide('app.main.data.workspace.tokens.errors');
app.main.data.workspace.tokens.errors.error_codes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("error.import","json-parse-error","error.import/json-parse-error",503270464),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-font-weight","error.style-dictionary/invalid-token-value-font-weight",-1037871167),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-shadow","error.style-dictionary/invalid-token-value-shadow",1280239811),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-font-family","error.style-dictionary/invalid-token-value-font-family",-2130547996),new cljs.core.Keyword("error.token","empty-input","error.token/empty-input",-1506425915),new cljs.core.Keyword("error.style-dictionary","value-with-percent","error.style-dictionary/value-with-percent",1914161576),new cljs.core.Keyword("error.style-dictionary","invalid-token-value","error.style-dictionary/invalid-token-value",2098581256),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-shadow-spread","error.style-dictionary/invalid-token-value-shadow-spread",-522549398),new cljs.core.Keyword("error.token","invalid-color","error.token/invalid-color",-1523551318),new cljs.core.Keyword("error.style-dictionary","value-with-units","error.style-dictionary/value-with-units",-1838622742),new cljs.core.Keyword("error.token","number-too-large","error.token/number-too-large",1728828587),new cljs.core.Keyword("error.import","invalid-token-name","error.import/invalid-token-name",-1589247189),new cljs.core.Keyword("error.import","style-dictionary-unknown-error","error.import/style-dictionary-unknown-error",-317476276),new cljs.core.Keyword("error.style-dictionary","composite-line-height-needs-font-size","error.style-dictionary/composite-line-height-needs-font-size",-1348579572),new cljs.core.Keyword("error.import","no-token-files-found","error.import/no-token-files-found",-1804804754),new cljs.core.Keyword("error.import","invalid-json-data","error.import/invalid-json-data",231259630),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-opacity","error.style-dictionary/invalid-token-value-opacity",-1542237618),new cljs.core.Keyword("error.token","direct-self-reference","error.token/direct-self-reference",1855619343),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-shadow-type","error.style-dictionary/invalid-token-value-shadow-type",-1470937584),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-shadow-blur","error.style-dictionary/invalid-token-value-shadow-blur",1597718933),new cljs.core.Keyword("error.style-dictionary","missing-reference","error.style-dictionary/missing-reference",599665942),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-stroke-width","error.style-dictionary/invalid-token-value-stroke-width",-601889002),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-text-case","error.style-dictionary/invalid-token-value-text-case",-1959663654),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-text-decoration","error.style-dictionary/invalid-token-value-text-decoration",234419485),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-typography","error.style-dictionary/invalid-token-value-typography",-300328291),new cljs.core.Keyword("error.import","style-dictionary-reference-errors","error.import/style-dictionary-reference-errors",-51943298),new cljs.core.Keyword("error","unknown","error/unknown",-848619937)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.import","json-parse-error","error.import/json-parse-error",503270464),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.error-parse");
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-font-weight","error.style-dictionary/invalid-token-value-font-weight",-1037871167),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71828_SHARP_){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.invalid-font-weight-token-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__71828_SHARP_], 0));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-shadow","error.style-dictionary/invalid-token-value-shadow",1280239811),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71835_SHARP_){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.invalid-token-value-shadow",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__71835_SHARP_], 0));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-font-family","error.style-dictionary/invalid-token-value-font-family",-2130547996),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71829_SHARP_){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.invalid-font-family-token-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__71829_SHARP_], 0));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.token","empty-input","error.token/empty-input",-1506425915),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.empty-input");
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.style-dictionary","value-with-percent","error.style-dictionary/value-with-percent",1914161576),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.value-with-percent"));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.style-dictionary","invalid-token-value","error.style-dictionary/invalid-token-value",2098581256),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71823_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.invalid-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__71823_SHARP_], 0)));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-shadow-spread","error.style-dictionary/invalid-token-value-shadow-spread",-522549398),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.shadow-spread-range");
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.token","invalid-color","error.token/invalid-color",-1523551318),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71820_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.invalid-color",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__71820_SHARP_], 0)));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.style-dictionary","value-with-units","error.style-dictionary/value-with-units",-1838622742),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.value-with-units"));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.token","number-too-large","error.token/number-too-large",1728828587),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71821_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.number-too-large",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__71821_SHARP_], 0)));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.import","invalid-token-name","error.import/invalid-token-name",-1589247189),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.invalid-json-token-name");
}),new cljs.core.Keyword("error","detail","error/detail",-1373701625),(function (p1__71817_SHARP_){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.invalid-json-token-name-detail",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__71817_SHARP_], 0));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.import","style-dictionary-reference-errors","error.import/style-dictionary-reference-errors",-51943298),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.import-error");
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.style-dictionary","composite-line-height-needs-font-size","error.style-dictionary/composite-line-height-needs-font-size",-1348579572),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71831_SHARP_){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.composite-line-height-needs-font-size",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__71831_SHARP_], 0));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.import","no-token-files-found","error.import/no-token-files-found",-1804804754),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.no-token-files-found");
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.import","invalid-json-data","error.import/invalid-json-data",231259630),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.invalid-json");
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-opacity","error.style-dictionary/invalid-token-value-opacity",-1542237618),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71824_SHARP_){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.invalid-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__71824_SHARP_], 0))),"."].join(''),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.opacity-range")], null));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.token","direct-self-reference","error.token/direct-self-reference",1855619343),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.self-reference");
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-shadow-type","error.style-dictionary/invalid-token-value-shadow-type",-1470937584),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71832_SHARP_){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.invalid-shadow-type-token-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__71832_SHARP_], 0));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-shadow-blur","error.style-dictionary/invalid-token-value-shadow-blur",1597718933),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.shadow-blur-range");
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.style-dictionary","missing-reference","error.style-dictionary/missing-reference",599665942),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71822_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.missing-references")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",p1__71822_SHARP_))].join('');
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-stroke-width","error.style-dictionary/invalid-token-value-stroke-width",-601889002),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71825_SHARP_){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.invalid-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__71825_SHARP_], 0))),"."].join(''),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.stroke-width-range")], null));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-text-case","error.style-dictionary/invalid-token-value-text-case",-1959663654),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71826_SHARP_){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.invalid-text-case-token-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__71826_SHARP_], 0));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-text-decoration","error.style-dictionary/invalid-token-value-text-decoration",234419485),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71827_SHARP_){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.invalid-text-decoration-token-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__71827_SHARP_], 0));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.style-dictionary","invalid-token-value-typography","error.style-dictionary/invalid-token-value-typography",-300328291),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71830_SHARP_){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.invalid-token-value-typography",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__71830_SHARP_], 0));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.import","style-dictionary-reference-errors","error.import/style-dictionary-reference-errors",-51943298),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71818_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.import-error")),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__71818_SHARP_))].join('');
}),new cljs.core.Keyword("error","detail","error/detail",-1373701625),(function (p1__71819_SHARP_){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n\n",cljs.core.rest(p1__71819_SHARP_));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error","unknown","error/unknown",-848619937),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.unknown-error");
})], null)]);
app.main.data.workspace.tokens.errors.get_error_code = (function app$main$data$workspace$tokens$errors$get_error_code(error_key){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.main.data.workspace.tokens.errors.error_codes,error_key,new cljs.core.Keyword("error","unknown","error/unknown",-848619937).cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.errors.error_codes));
});
app.main.data.workspace.tokens.errors.error_with_value = (function app$main$data$workspace$tokens$errors$error_with_value(error_key,error_value){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.main.data.workspace.tokens.errors.get_error_code(error_key),new cljs.core.Keyword("error","value","error/value",420466049),error_value);
});
app.main.data.workspace.tokens.errors.error_ex_info = (function app$main$data$workspace$tokens$errors$error_ex_info(error_key,error_value,exception){
var err = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.main.data.workspace.tokens.errors.error_with_value(error_key,error_value),new cljs.core.Keyword("error","exception","error/exception",1312810496),exception);
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("error","code","error/code",-1740032098).cljs$core$IFn$_invoke$arity$1(err),err);
});
app.main.data.workspace.tokens.errors.has_error_code_QMARK_ = (function app$main$data$workspace$tokens$errors$has_error_code_QMARK_(error_key,errors){
return cljs.core.some((function (p1__71841_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("error","code","error/code",-1740032098).cljs$core$IFn$_invoke$arity$1(p1__71841_SHARP_),error_key);
}),errors);
});
/**
 * Returns the human-readable message string for a single error map.
 *   When the error carries an :error/fn key the function is called with
 *   :error/value to produce the message.  Falls back to :message for
 *   errors that originate from schema-validation (which have no :error/fn).
 */
app.main.data.workspace.tokens.errors.resolve_error_message = (function app$main$data$workspace$tokens$errors$resolve_error_message(error){
var temp__5823__auto__ = new cljs.core.Keyword("error","fn","error/fn",-1263293860).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
var G__71842 = new cljs.core.Keyword("error","value","error/value",420466049).cljs$core$IFn$_invoke$arity$1(error);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__71842) : f.call(null,G__71842));
} else {
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error);
}
});
/**
 * Returns the error map with a :message key set to the resolved human-
 *   readable string.  When the error carries an :error/fn key the function
 *   is called with :error/value; otherwise the map is returned unchanged
 *   (it is expected to already carry a :message from schema-validation).
 */
app.main.data.workspace.tokens.errors.resolve_error_assoc_message = (function app$main$data$workspace$tokens$errors$resolve_error_assoc_message(error){
var temp__5823__auto__ = new cljs.core.Keyword("error","fn","error/fn",-1263293860).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"message","message",-406056002),(function (){var G__71843 = new cljs.core.Keyword("error","value","error/value",420466049).cljs$core$IFn$_invoke$arity$1(error);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__71843) : f.call(null,G__71843));
})());
} else {
return error;
}
});
app.main.data.workspace.tokens.errors.humanize_errors = (function app$main$data$workspace$tokens$errors$humanize_errors(errors){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (err){
if(cljs.core.truth_(new cljs.core.Keyword("error","fn","error/fn",-1263293860).cljs$core$IFn$_invoke$arity$1(err))){
var G__71845 = new cljs.core.Keyword("error","value","error/value",420466049).cljs$core$IFn$_invoke$arity$1(err);
var fexpr__71844 = new cljs.core.Keyword("error","fn","error/fn",-1263293860).cljs$core$IFn$_invoke$arity$1(err);
return (fexpr__71844.cljs$core$IFn$_invoke$arity$1 ? fexpr__71844.cljs$core$IFn$_invoke$arity$1(G__71845) : fexpr__71844.call(null,G__71845));
} else {
if(cljs.core.truth_(new cljs.core.Keyword("error","message","error/message",-502809098).cljs$core$IFn$_invoke$arity$1(err))){
return new cljs.core.Keyword("error","message","error/message",-502809098).cljs$core$IFn$_invoke$arity$1(err);
} else {
return err;

}
}
}),errors);
});
app.main.data.workspace.tokens.errors.detail_errors = (function app$main$data$workspace$tokens$errors$detail_errors(errors){
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (err){
if(cljs.core.truth_(new cljs.core.Keyword("error","detail","error/detail",-1373701625).cljs$core$IFn$_invoke$arity$1(err))){
var G__71848 = new cljs.core.Keyword("error","value","error/value",420466049).cljs$core$IFn$_invoke$arity$1(err);
var fexpr__71847 = new cljs.core.Keyword("error","detail","error/detail",-1373701625).cljs$core$IFn$_invoke$arity$1(err);
return (fexpr__71847.cljs$core$IFn$_invoke$arity$1 ? fexpr__71847.cljs$core$IFn$_invoke$arity$1(G__71848) : fexpr__71847.call(null,G__71848));
} else {
return null;
}
}),errors)));
});

//# sourceMappingURL=app.main.data.workspace.tokens.errors.js.map
