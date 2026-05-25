import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.i18n.js";
import "./app.common.schema.js";
import "./app.common.types.token.js";
import "./app.common.types.tokens_lib.js";
import "./clojure.set.js";
import "./cuerdas.core.js";
import "./malli.core.js";
goog.provide('app.common.files.tokens');
app.common.files.tokens.token_value_empty_fn = (function app$common$files$tokens$token_value_empty_fn(p__71634){
var map__71635 = p__71634;
var map__71635__$1 = cljs.core.__destructure_map(map__71635);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71635__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(((cuerdas.core.empty_QMARK_(value)) || (cuerdas.core.blank_QMARK_(value)))){
return app.common.i18n.tr("workspace.tokens.empty-input");
} else {
return null;
}
});
app.common.files.tokens.schema_COLON_token_value_generic = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),app.common.files.tokens.token_value_empty_fn], null)], null);
app.common.files.tokens.schema_COLON_token_value_numeric = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),app.common.files.tokens.token_value_empty_fn], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71641_SHARP_){
return app.common.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.invalid-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__71641_SHARP_)], 0));
})], null),(function (value){
if(cuerdas.core.numeric_QMARK_(value)){
var n = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(value);
return (!((n == null)));
} else {
return true;
}
})], null)], null);
app.common.files.tokens.schema_COLON_token_value_percent = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),app.common.files.tokens.token_value_empty_fn], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71642_SHARP_){
return app.common.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.value-with-percent",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__71642_SHARP_)], 0));
})], null),(function (value){
if(app.common.data.percent_QMARK_(value)){
var v = app.common.data.parse_percent.cljs$core$IFn$_invoke$arity$1(value);
return (!((v == null)));
} else {
return true;
}
})], null)], null);
app.common.files.tokens.schema_COLON_token_value_composite_ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),app.common.files.tokens.token_value_empty_fn], null)], null);
app.common.files.tokens.schema_COLON_token_value_opacity = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),app.common.files.tokens.token_value_empty_fn], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.common.i18n.tr("workspace.tokens.opacity-range");
})], null),(function (opacity){
if(cuerdas.core.numeric_QMARK_(opacity)){
var n = app.common.data.parse_percent.cljs$core$IFn$_invoke$arity$1(opacity);
return (((!((n == null)))) && (((((0) <= n)) && ((n <= (1))))));
} else {
return true;
}
})], null)], null);
app.common.files.tokens.schema_COLON_token_value_font_family = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422)], null),app.common.types.token.schema_COLON_token_ref], null);
app.common.files.tokens.schema_COLON_token_value_font_weight = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.common.i18n.tr("workspace.tokens.invalid-font-weight-token-value");
})], null),app.common.types.token.valid_font_weight_variant], null),new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422)], null);
app.common.files.tokens.schema_COLON_token_value_typography_map = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.files.tokens.schema_COLON_token_value_font_family], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.files.tokens.schema_COLON_token_value_numeric], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.files.tokens.schema_COLON_token_value_font_weight], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.files.tokens.schema_COLON_token_value_percent], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.files.tokens.schema_COLON_token_value_generic], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paragraph-spacing","paragraph-spacing",-1853018274),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.files.tokens.schema_COLON_token_value_generic], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.files.tokens.schema_COLON_token_value_generic], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-case","text-case",1049419399),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.files.tokens.schema_COLON_token_value_generic], null)], null);
app.common.files.tokens.schema_COLON_token_value_typography = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),app.common.files.tokens.schema_COLON_token_value_typography_map,app.common.files.tokens.schema_COLON_token_value_composite_ref], null);
app.common.files.tokens.schema_COLON_token_value_shadow_vector = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.common.i18n.tr("workspace.tokens.shadow-token-blur-value-error");
})], null),(function (blur){
var n = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(blur);
return (((n == null)) || ((!((n < (0))))));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spread","spread",862337191),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.common.i18n.tr("workspace.tokens.shadow-token-spread-value-error");
})], null),(function (spread){
var n = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(spread);
return (((n == null)) || ((!((n < (0))))));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inset","inset",-396367740),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null);
app.common.files.tokens.schema_COLON_token_value_shadow = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),app.common.files.tokens.schema_COLON_token_value_shadow_vector,app.common.files.tokens.schema_COLON_token_value_composite_ref], null);
app.common.files.tokens.make_token_value_schema = (function app$common$files$tokens$make_token_value_schema(token_type){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.constantly(token_type),new cljs.core.Keyword(null,"title","title",636505583),"Token Value"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opacity","opacity",397153780),app.common.files.tokens.schema_COLON_token_value_opacity], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),app.common.files.tokens.schema_COLON_token_value_font_family], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),app.common.files.tokens.schema_COLON_token_value_numeric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),app.common.files.tokens.schema_COLON_token_value_font_weight], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typography","typography",-399568138),app.common.files.tokens.schema_COLON_token_value_typography], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803),app.common.files.tokens.schema_COLON_token_value_shadow], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli.core","default","malli.core/default",-1706204176),app.common.files.tokens.schema_COLON_token_value_generic], null)], null);
});
/**
 * Dynamically generates a schema to check a token name, adding translated error messages
 * and two additional validations:
 *  - Min and max length.
 *  - Checks if other token with a path derived from the name already exists at `tokens-tree`.
 *    e.g. it's not allowed to create a token `foo.bar` if a token `foo` already exists.
 */
app.common.files.tokens.make_token_name_schema = (function app$common$files$tokens$make_token_name_schema(tokens_tree){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(255),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71655_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__71655_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.common.i18n.tr("workspace.tokens.token-name-length-validation-error"))].join('');
})], null)], null),app.common.schema.update_properties.cljs$core$IFn$_invoke$arity$variadic(app.common.types.token.schema_COLON_token_name,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71656_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__71656_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.common.i18n.tr("workspace.tokens.token-name-validation-error"))].join('');
})], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71657_SHARP_){
return app.common.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.token-name-duplication-validation-error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__71657_SHARP_)], 0));
})], null),(function (p1__71658_SHARP_){
return (((!((tokens_tree == null)))) && ((!(app.common.types.tokens_lib.token_name_path_exists_QMARK_(p1__71658_SHARP_,tokens_tree)))));
})], null)], null);
});
app.common.files.tokens.schema_COLON_token_description = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max","max",61366548),(2048),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.common.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.field-max-length",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2048)], 0));
})], null)], null);
app.common.files.tokens.make_token_schema = (function app$common$files$tokens$make_token_schema(tokens_tree,token_type){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),app.common.schema.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.token.schema_COLON_token_attrs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),app.common.files.tokens.make_token_name_schema(tokens_tree)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),app.common.files.tokens.make_token_value_schema(token_type)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.files.tokens.schema_COLON_token_description], null)], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","field","error/field",-1330531468),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.common.i18n.tr("workspace.tokens.self-reference");
})], null),(function (p__71661){
var map__71662 = p__71661;
var map__71662__$1 = cljs.core.__destructure_map(map__71662);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71662__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71662__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5023__auto__ = name;
if(cljs.core.truth_(and__5023__auto__)){
return value;
} else {
return and__5023__auto__;
}
})())){
return (!(app.common.types.token.token_value_self_reference_QMARK_(name,value)));
} else {
return null;
}
})], null)], null);
});
/**
 * Convert token attributes as they come from a decoded json, with DTCG types, to internal types.
 * Eg. From this:
 * 
 *   {'name' 'body-text'
 *    'type' 'typography'
 *    'value' {
 *      'fontFamilies' ['Arial' 'Helvetica' 'sans-serif']
 *      'fontSize' '16px'
 *      'fontWeights' 'normal'}}
 * 
 * to this
 *   {:name 'body-text'
 *    :type :typography
 *    :value {
 *      :font-family ['Arial' 'Helvetica' 'sans-serif']
 *      :font-size '16px'
 *      :font-weight 'normal'}}
 */
app.common.files.tokens.convert_dtcg_token = (function app$common$files$tokens$convert_dtcg_token(token_attrs){
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(token_attrs,"name");
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(token_attrs,"type");
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(token_attrs,"value");
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(token_attrs,"description");
var type__$1 = (app.common.types.token.dtcg_token_type__GT_token_type.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.dtcg_token_type__GT_token_type.cljs$core$IFn$_invoke$arity$1(type) : app.common.types.token.dtcg_token_type__GT_token_type.call(null,type));
var value__$1 = (function (){var G__71665 = type__$1;
var G__71665__$1 = (((G__71665 instanceof cljs.core.Keyword))?G__71665.fqn:null);
switch (G__71665__$1) {
case "font-family":
return app.common.types.tokens_lib.convert_dtcg_font_family(value);

break;
case "typography":
return app.common.types.tokens_lib.convert_dtcg_typography_composite(value);

break;
case "shadow":
return app.common.types.tokens_lib.convert_dtcg_shadow_composite(value);

break;
default:
return value;

}
})();
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"value","value",305978217),value__$1,new cljs.core.Keyword(null,"description","description",-1428560544),description], null));
});
/**
 * Generates a dynamic schema to check a token set name:
 *  - Validate name length.
 *  - Checks if other token set with a path derived from the name already exists in the tokens lib.
 */
app.common.files.tokens.make_token_set_name_schema = (function app$common$files$tokens$make_token_set_name_schema(tokens_lib,set_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(255),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71666_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__71666_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.common.i18n.tr("workspace.tokens.token-name-length-validation-error"))].join('');
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.common.i18n.tr("errors.token-set-already-exists");
})], null),(function (name){
var or__5025__auto__ = (tokens_lib == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var set = app.common.types.tokens_lib.get_set_by_name(tokens_lib,name);
return (((set == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.common.types.tokens_lib.get_id(set),set_id)));
}
})], null)], null);
});
app.common.files.tokens.schema_COLON_token_set_description = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max","max",61366548),(2048),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.common.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.field-max-length",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2048)], 0));
})], null)], null);
app.common.files.tokens.make_token_set_schema = (function app$common$files$tokens$make_token_set_schema(tokens_lib,set_id){
return app.common.schema.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.tokens_lib.schema_COLON_token_set_attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),app.common.files.tokens.make_token_set_name_schema(tokens_lib,set_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__71667_SHARP_){
return app.common.types.tokens_lib.normalized_set_name_QMARK_(p1__71667_SHARP_);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.files.tokens.schema_COLON_token_set_description], null)], null)], 0));
});
/**
 * Generates a dynamic schema to check a token theme group:
 *  - Validate group length.
 *  - Checks if other token theme with the same name already exists in the new group in the tokens lib.
 */
app.common.files.tokens.make_token_theme_group_schema = (function app$common$files$tokens$make_token_theme_group_schema(tokens_lib,name,theme_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(255),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71668_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__71668_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.common.i18n.tr("workspace.tokens.token-name-length-validation-error"))].join('');
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.common.i18n.tr("errors.token-theme-already-exists");
})], null),(function (group){
var or__5025__auto__ = (tokens_lib == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var theme = app.common.types.tokens_lib.get_theme_by_name(tokens_lib,group,name);
return (((theme == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(theme),theme_id)));
}
})], null)], null);
});
/**
 * Generates a dynamic schema to check a token theme name:
 *  - Validate name length.
 *  - Checks if other token theme with the same name already exists in the same group in the tokens lib.
 */
app.common.files.tokens.make_token_theme_name_schema = (function app$common$files$tokens$make_token_theme_name_schema(tokens_lib,group,theme_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(255),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71669_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__71669_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.common.i18n.tr("workspace.tokens.token-name-length-validation-error"))].join('');
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__71670_SHARP_){
return app.common.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.token-theme-already-exists",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(group),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__71670_SHARP_))].join('')], 0));
})], null),(function (name){
var or__5025__auto__ = (tokens_lib == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var theme = app.common.types.tokens_lib.get_theme_by_name(tokens_lib,group,name);
return (((theme == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(theme),theme_id)));
}
})], null)], null);
});
app.common.files.tokens.schema_COLON_token_theme_description = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max","max",61366548),(2048),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.common.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.field-max-length",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2048)], 0));
})], null)], null);
app.common.files.tokens.make_token_theme_schema = (function app$common$files$tokens$make_token_theme_schema(tokens_lib,group,name,theme_id){
return app.common.schema.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.tokens_lib.schema_COLON_token_theme_attrs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),app.common.files.tokens.make_token_theme_group_schema(tokens_lib,name,theme_id)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),app.common.files.tokens.make_token_theme_name_schema(tokens_lib,group,theme_id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.files.tokens.schema_COLON_token_theme_description], null)], null)], 0));
});
/**
 * Regexp that can be used to parse a number value out of resolved token value.
 *   This regexp also trims whitespace around the value.
 */
app.common.files.tokens.parseable_token_value_regexp = /^\s*(-?[0-9]+\.?[0-9]*)(px|%)?\s*$/;
/**
 * Parses a resolved value and separates the unit from the value.
 *   Returns a map of {:value `number` :unit `string`}.
 */
app.common.files.tokens.parse_token_value = (function app$common$files$tokens$parse_token_value(value){
if(typeof value === 'number'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
if(typeof value === 'string'){
var temp__5825__auto__ = cljs.core.re_find(app.common.files.tokens.parseable_token_value_regexp,value);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__71675 = temp__5825__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71675,(0),null);
var value__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71675,(1),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71675,(2),null);
var temp__5825__auto____$1 = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(value__$1);
if(cljs.core.truth_(temp__5825__auto____$1)){
var parsed_value = temp__5825__auto____$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),parsed_value,new cljs.core.Keyword(null,"unit","unit",375175175),unit], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}
});
app.common.files.tokens.token_identifier = (function app$common$files$tokens$token_identifier(p__71678){
var map__71679 = p__71678;
var map__71679__$1 = cljs.core.__destructure_map(map__71679);
var _token = map__71679__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71679__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return name;
});
/**
 * Creats an attributes map using collection of `attributes` for `id`.
 */
app.common.files.tokens.attributes_map = (function app$common$files$tokens$attributes_map(attributes,token){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (attr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,app.common.files.tokens.token_identifier(token)], null);
}),attributes));
});
/**
 * Removes applied tokens with `token-name` for the given `attributes` set from `applied-tokens`.
 */
app.common.files.tokens.remove_attributes_for_token = (function app$common$files$tokens$remove_attributes_for_token(attributes,token_name,applied_tokens){
var attr_QMARK_ = cljs.core.set(attributes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__71684){
var vec__71685 = p__71684;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71685,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71685,(1),null);
var and__5023__auto__ = (attr_QMARK_.cljs$core$IFn$_invoke$arity$1 ? attr_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : attr_QMARK_.call(null,k));
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,token_name);
} else {
return and__5023__auto__;
}
}),applied_tokens));
});
/**
 * Test if `token` is applied to a `shape` on single `token-attribute`.
 */
app.common.files.tokens.token_attribute_applied_QMARK_ = (function app$common$files$tokens$token_attribute_applied_QMARK_(token,shape,token_attribute){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871)),token_attribute);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.common.files.tokens.token_identifier(token),id);
} else {
return null;
}
});
/**
 * Test if `token` is applied to a `shape` with at least one of the given `token-attributes`.
 */
app.common.files.tokens.token_applied_QMARK_ = (function app$common$files$tokens$token_applied_QMARK_(token,shape,token_attributes){
return cljs.core.some((function (p1__71691_SHARP_){
return app.common.files.tokens.token_attribute_applied_QMARK_(token,shape,p1__71691_SHARP_);
}),token_attributes);
});
/**
 * Test if `token` is applied to to any of `shapes` with at least one of the given `token-attributes`.
 */
app.common.files.tokens.shapes_token_applied_QMARK_ = (function app$common$files$tokens$shapes_token_applied_QMARK_(token,shapes,token_attributes){
return cljs.core.some((function (p1__71692_SHARP_){
return app.common.files.tokens.token_applied_QMARK_(token,p1__71692_SHARP_,token_attributes);
}),shapes);
});
app.common.files.tokens.shapes_ids_by_applied_attributes = (function app$common$files$tokens$shapes_ids_by_applied_attributes(token,shapes,token_attributes){
var conj_STAR_ = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,shape){
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result__$1,attr){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result__$1,attr,conj_STAR_,shape_id);
}),result,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__71693_SHARP_){
return app.common.files.tokens.token_attribute_applied_QMARK_(token,shape,p1__71693_SHARP_);
}),token_attributes));
}),cljs.core.PersistentArrayMap.EMPTY,shapes);
});
app.common.files.tokens.shapes_applied_all_QMARK_ = (function app$common$files$tokens$shapes_applied_all_QMARK_(ids_by_attributes,shape_ids,attributes){
return cljs.core.every_QMARK_((function (p1__71697_SHARP_){
return clojure.set.superset_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ids_by_attributes,p1__71697_SHARP_),shape_ids);
}),attributes);
});
app.common.files.tokens.color_token_QMARK_ = (function app$common$files$tokens$color_token_QMARK_(token){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"color","color",1011675173));
});
app.common.files.tokens.is_reference_QMARK_ = (function app$common$files$tokens$is_reference_QMARK_(token){
return cuerdas.core.includes_QMARK_(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(token),"{");
});

//# sourceMappingURL=app.common.files.tokens.js.map
