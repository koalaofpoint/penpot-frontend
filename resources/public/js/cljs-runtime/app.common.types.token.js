import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.schema.js";
import "./app.common.schema.generators.js";
import "./app.common.time.js";
import "./clojure.set.js";
import "./cuerdas.core.js";
import "./malli.util.js";
goog.provide('app.common.types.token');
/**
 * Converts registed map schema into set of keys.
 */
app.common.types.token.schema_keys = (function app$common$types$token$schema_keys(schema){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,malli.util.keys(app.common.schema.schema(schema)));
});
/**
 * Returns set of token references found in `token-value`.
 * 
 *   Used for checking if a token has a reference in the value.
 *   Token references are strings delimited by curly braces.
 *   E.g.: {foo.bar.baz} -> foo.bar.baz
 */
app.common.types.token.find_token_value_references = (function app$common$types$token$find_token_value_references(token_value){
if(typeof token_value === 'string'){
var G__50629 = cljs.core.re_seq(/\{([^}]*)\}/,token_value);
var G__50629__$1 = (((G__50629 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__50629));
if((G__50629__$1 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,G__50629__$1);
}
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
/**
 * Check if the token is self referencing with its `token-name` in `token-value`.
 *   Simple 1 level check, doesn't account for circular self refernces across multiple tokens.
 */
app.common.types.token.token_value_self_reference_QMARK_ = (function app$common$types$token$token_value_self_reference_QMARK_(token_name,token_value){
var token_references = app.common.types.token.find_token_value_references(token_value);
var self_reference_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(token_references,token_name);
return cljs.core.boolean$(self_reference_QMARK_);
});
/**
 * Recursively check if a value references the token name. Handles strings, maps, and sequences.
 */
app.common.types.token.references_token_QMARK_ = (function app$common$types$token$references_token_QMARK_(value,token_name){
if(typeof value === 'string'){
return cljs.core.boolean$(cljs.core.some((function (p1__50632_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__50632_SHARP_,token_name);
}),app.common.types.token.find_token_value_references(value)));
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.some(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50633_SHARP_){
return (app.common.types.token.references_token_QMARK_.cljs$core$IFn$_invoke$arity$2 ? app.common.types.token.references_token_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__50633_SHARP_,token_name) : app.common.types.token.references_token_QMARK_.call(null,p1__50633_SHARP_,token_name));
}),cljs.core.vals(value)));
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.some(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50636_SHARP_){
return (app.common.types.token.references_token_QMARK_.cljs$core$IFn$_invoke$arity$2 ? app.common.types.token.references_token_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__50636_SHARP_,token_name) : app.common.types.token.references_token_QMARK_.call(null,p1__50636_SHARP_,token_name));
}),value));
} else {
return false;

}
}
}
});
/**
 * Predicate if a composite token is a reference value - a string pointing to another token.
 */
app.common.types.token.composite_token_reference_QMARK_ = (function app$common$types$token$composite_token_reference_QMARK_(token_value){
return typeof token_value === 'string';
});
/**
 * Recursively update token references within a token value, supporting complex token values (maps, sequences, strings).
 */
app.common.types.token.update_token_value_references = (function app$common$types$token$update_token_value_references(value,old_name,new_name){
if(typeof value === 'string'){
return cuerdas.core.replace(value,cljs.core.re_pattern(["\\{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.replace(old_name,".","\\.")),"\\}"].join('')),["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_name),"}"].join(''));
} else {
if(cljs.core.map_QMARK_(value)){
return app.common.data.update_vals(value,(function (p1__50641_SHARP_){
return (app.common.types.token.update_token_value_references.cljs$core$IFn$_invoke$arity$3 ? app.common.types.token.update_token_value_references.cljs$core$IFn$_invoke$arity$3(p1__50641_SHARP_,old_name,new_name) : app.common.types.token.update_token_value_references.call(null,p1__50641_SHARP_,old_name,new_name));
}));
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50642_SHARP_){
return (app.common.types.token.update_token_value_references.cljs$core$IFn$_invoke$arity$3 ? app.common.types.token.update_token_value_references.cljs$core$IFn$_invoke$arity$3(p1__50642_SHARP_,old_name,new_name) : app.common.types.token.update_token_value_references.call(null,p1__50642_SHARP_,old_name,new_name));
}),value);
} else {
return value;

}
}
}
});
app.common.types.token.token_type__GT_dtcg_token_type = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sizing","sizing",-1868029885),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"text-case","text-case",1049419399),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"typography","typography",-399568138),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"spacing","spacing",204422175)],["sizing","rotation","color","number","fontSizes","fontWeights","textCase","other","string","dimension","borderWidth","opacity","typography","textDecoration","letterSpacing","shadow","borderRadius","boolean","fontFamilies","spacing"]);
app.common.types.token.dtcg_token_type__GT_token_type = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(clojure.set.map_invert(app.common.types.token.token_type__GT_dtcg_token_type),"fontWeight",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fontSize",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"fontFamily",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"boxShadow",new cljs.core.Keyword(null,"shadow","shadow",873231803)], 0));
/**
 * When converting the type of one element inside a composite token, an additional type
 * :line-height is available, that is not allowed for a standalone token.
 */
app.common.types.token.composite_token_type__GT_dtcg_token_type = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.types.token.token_type__GT_dtcg_token_type,new cljs.core.Keyword(null,"line-height","line-height",1870784992),"lineHeights");
/**
 * Same as above, in the opposite direction.
 */
app.common.types.token.composite_dtcg_token_type__GT_token_type = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(app.common.types.token.dtcg_token_type__GT_token_type,"lineHeights",new cljs.core.Keyword(null,"line-height","line-height",1870784992),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["lineHeight",new cljs.core.Keyword(null,"line-height","line-height",1870784992)], 0));
app.common.types.token.token_types = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(app.common.types.token.token_type__GT_dtcg_token_type));
app.common.types.token.token_name_validation_regex = /^[a-zA-Z0-9_-][a-zA-Z0-9$_-]*(\.[a-zA-Z0-9$_-]+)*$/;
/**
 * A token name can contains letters, numbers, underscores the character $ and dots, but
 * not start with $ or end with a dot. The $ character does not have any special meaning,
 * but dots separate token groups (e.g. color.primary.background).
 */
app.common.types.token.schema_COLON_token_name = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re","re",228676202),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"TokenName",new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.text], null),app.common.types.token.token_name_validation_regex], null);
app.common.types.token.token_ref_validation_regex = /^\{[a-zA-Z0-9_-][a-zA-Z0-9$_-]*(\.[a-zA-Z0-9$_-]+)*\}$/;
/**
 * A token reference is a token name enclosed in {}.
 */
app.common.types.token.schema_COLON_token_ref = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re","re",228676202),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"TokenRef",new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.text], null),app.common.types.token.token_ref_validation_regex], null);
app.common.types.token.schema_COLON_token_type = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","json","decode/json",468276044),(function (type){
if(typeof type === 'string'){
return (app.common.types.token.dtcg_token_type__GT_token_type.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.dtcg_token_type__GT_token_type.cljs$core$IFn$_invoke$arity$1(type) : app.common.types.token.dtcg_token_type__GT_token_type.call(null,type));
} else {
return type;
}
})], null),app.common.types.token.token_types], null);
app.common.types.token.schema_COLON_token_attrs = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Token"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),app.common.types.token.schema_COLON_token_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),app.common.types.token.schema_COLON_token_type], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("app.common.schema","any","app.common.schema/any",-1231442794)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.time","inst","app.common.time/inst",1401175972)], null)], null);
app.common.types.token.schema_COLON_border_radius = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"BorderRadiusTokenAttrs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r4","r4",1134323163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null)], null);
app.common.types.token.border_radius_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_border_radius);
app.common.types.token.schema_COLON_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null)], null);
app.common.types.token.color_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_color);
app.common.types.token.schema_COLON_sizing_base = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SizingBaseTokenAttrs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null)], null);
app.common.types.token.schema_COLON_sizing_layout_item = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SizingLayoutItemTokenAttrs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null)], null);
app.common.types.token.sizing_layout_item_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_sizing_layout_item);
app.common.types.token.schema_COLON_sizing = malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(malli.util.union,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.token.schema_COLON_sizing_base,app.common.types.token.schema_COLON_sizing_layout_item], null)),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"title","title",636505583),"SizingTokenAttrs"], 0));
app.common.types.token.sizing_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_sizing);
app.common.types.token.schema_COLON_spacing_gap = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SpacingGapTokenAttrs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-gap","column-gap",384822863),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null)], null);
app.common.types.token.schema_COLON_spacing_padding = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SpacingPaddingTokenAttrs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p2","p2",905500641),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p3","p3",1731040739),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p4","p4",-1090126814),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null)], null);
app.common.types.token.schema_COLON_spacing_gap_padding = malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(malli.util.union,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.token.schema_COLON_spacing_gap,app.common.types.token.schema_COLON_spacing_padding], null)),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"title","title",636505583),"SpacingGapPaddingTokenAttrs"], 0));
app.common.types.token.spacing_gap_padding_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_spacing_gap_padding);
app.common.types.token.schema_COLON_spacing_margin = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SpacingMarginTokenAttrs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m1","m1",-108094626),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m2","m2",-587003306),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m3","m3",-703635357),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m4","m4",-1624571215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null)], null);
app.common.types.token.spacing_margin_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_spacing_margin);
app.common.types.token.schema_COLON_spacing = malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(malli.util.union,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.token.schema_COLON_spacing_gap,app.common.types.token.schema_COLON_spacing_padding,app.common.types.token.schema_COLON_spacing_margin], null)),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"title","title",636505583),"SpacingTokenAttrs"], 0));
app.common.types.token.spacing_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_spacing);
app.common.types.token.schema_COLON_stroke_width = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null)], null);
app.common.types.token.stroke_width_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_stroke_width);
app.common.types.token.schema_COLON_dimensions = malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(malli.util.union,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.token.schema_COLON_sizing,app.common.types.token.schema_COLON_spacing,app.common.types.token.schema_COLON_stroke_width,app.common.types.token.schema_COLON_border_radius], null)),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"title","title",636505583),"DimensionsTokenAttrs"], 0));
app.common.types.token.dimensions_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_dimensions);
app.common.types.token.schema_COLON_font_family = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null)], null);
app.common.types.token.font_family_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_font_family);
app.common.types.token.schema_COLON_font_size = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"FontSizeTokenAttrs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null)], null);
app.common.types.token.font_size_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_font_size);
app.common.types.token.schema_COLON_font_weight = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null)], null);
app.common.types.token.font_weight_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_font_weight);
app.common.types.token.schema_COLON_letter_spacing = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"LetterSpacingTokenAttrs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null)], null);
app.common.types.token.letter_spacing_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_letter_spacing);
app.common.types.token.schema_COLON_line_height = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"LineHeightTokenAttrs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null)], null);
app.common.types.token.line_height_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_line_height);
app.common.types.token.schema_COLON_rotation = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"RotationTokenAttrs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null)], null);
app.common.types.token.rotation_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_rotation);
app.common.types.token.schema_COLON_number = malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(malli.util.union,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.token.schema_COLON_line_height,app.common.types.token.schema_COLON_rotation], null)),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"title","title",636505583),"NumberTokenAttrs"], 0));
app.common.types.token.number_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_number);
app.common.types.token.schema_COLON_opacity = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"OpacityTokenAttrs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null)], null);
app.common.types.token.opacity_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_opacity);
app.common.types.token.schema_COLON_shadow = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"ShadowTokenAttrs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null)], null);
app.common.types.token.shadow_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_shadow);
app.common.types.token.schema_COLON_text_case = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-case","text-case",1049419399),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null)], null);
app.common.types.token.text_case_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_text_case);
app.common.types.token.schema_COLON_text_decoration = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null)], null);
app.common.types.token.text_decoration_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_text_decoration);
app.common.types.token.schema_COLON_typography = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typography","typography",-399568138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null)], null);
app.common.types.token.typography_token_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_typography);
app.common.types.token.typography_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(app.common.types.token.font_family_keys,app.common.types.token.font_size_keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.token.font_weight_keys,app.common.types.token.letter_spacing_keys,app.common.types.token.line_height_keys,app.common.types.token.text_case_keys,app.common.types.token.text_decoration_keys,app.common.types.token.typography_token_keys], 0));
app.common.types.token.schema_COLON_axis = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.token.schema_COLON_token_name], null)], null);
app.common.types.token.axis_keys = app.common.types.token.schema_keys(app.common.types.token.schema_COLON_axis);
app.common.types.token.all_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(app.common.types.token.axis_keys,app.common.types.token.border_radius_keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.token.color_keys,app.common.types.token.dimensions_keys,app.common.types.token.number_keys,app.common.types.token.opacity_keys,app.common.types.token.rotation_keys,app.common.types.token.shadow_keys,app.common.types.token.sizing_keys,app.common.types.token.spacing_keys,app.common.types.token.stroke_width_keys,app.common.types.token.typography_keys,app.common.types.token.typography_token_keys], 0));
app.common.types.token.schema_COLON_tokens = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"GenericTokenAttrs"], null)], null);
app.common.types.token.schema_COLON_applied_tokens = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"AppliedTokens"], null),app.common.types.token.schema_COLON_tokens,app.common.types.token.schema_COLON_border_radius,app.common.types.token.schema_COLON_shadow,app.common.types.token.schema_COLON_sizing,app.common.types.token.schema_COLON_spacing,app.common.types.token.schema_COLON_rotation,app.common.types.token.schema_COLON_number,app.common.types.token.schema_COLON_font_size,app.common.types.token.schema_COLON_letter_spacing,app.common.types.token.schema_COLON_font_family,app.common.types.token.schema_COLON_text_case,app.common.types.token.schema_COLON_text_decoration,app.common.types.token.schema_COLON_dimensions], null);
app.common.types.token.token_attr_QMARK_ = (function app$common$types$token$token_attr_QMARK_(attr){
return cljs.core.contains_QMARK_(app.common.types.token.all_keys,attr);
});
/**
 * Returns the actual shape attribute affected when a token have been applied
 * to a given `token-attr`.
 */
app.common.types.token.token_attr__GT_shape_attr = (function app$common$types$token$token_attr__GT_shape_attr(token_attr){
var G__50687 = token_attr;
var G__50687__$1 = (((G__50687 instanceof cljs.core.Keyword))?G__50687.fqn:null);
switch (G__50687__$1) {
case "fill":
return new cljs.core.Keyword(null,"fills","fills",902966780);

break;
case "stroke-color":
return new cljs.core.Keyword(null,"strokes","strokes",-1645650952);

break;
case "stroke-width":
return new cljs.core.Keyword(null,"strokes","strokes",-1645650952);

break;
default:
return token_attr;

}
});
/**
 * Returns the token-attr affected when a given attribute in a shape is changed.
 * The sub-attr is for attributes that may have multiple values, like strokes
 * (may be width or color) and layout padding & margin (may have 4 edges).
 */
app.common.types.token.shape_attr__GT_token_attrs = (function app$common$types$token$shape_attr__GT_token_attrs(var_args){
var G__50689 = arguments.length;
switch (G__50689) {
case 1:
return app.common.types.token.shape_attr__GT_token_attrs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.types.token.shape_attr__GT_token_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.token.shape_attr__GT_token_attrs.cljs$core$IFn$_invoke$arity$1 = (function (shape_attr){
return app.common.types.token.shape_attr__GT_token_attrs.cljs$core$IFn$_invoke$arity$2(shape_attr,null);
}));

(app.common.types.token.shape_attr__GT_token_attrs.cljs$core$IFn$_invoke$arity$2 = (function (shape_attr,changed_sub_attr){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fills","fills",902966780),shape_attr)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),null], null), null);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"strokes","strokes",-1645650952),shape_attr)) && ((changed_sub_attr == null)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null], null), null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"strokes","strokes",-1645650952),shape_attr)){
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),null], null), null),changed_sub_attr))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),null], null), null);
} else {
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null], null), null),changed_sub_attr))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null], null), null);
} else {
return null;
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),shape_attr)){
if(cljs.core.seq(changed_sub_attr)){
return changed_sub_attr;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p2","p2",905500641),null,new cljs.core.Keyword(null,"p4","p4",-1090126814),null,new cljs.core.Keyword(null,"p3","p3",1731040739),null,new cljs.core.Keyword(null,"p1","p1",-936759954),null], null), null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),shape_attr)){
if(cljs.core.seq(changed_sub_attr)){
return changed_sub_attr;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"m3","m3",-703635357),null,new cljs.core.Keyword(null,"m4","m4",-1624571215),null,new cljs.core.Keyword(null,"m2","m2",-587003306),null,new cljs.core.Keyword(null,"m1","m1",-108094626),null], null), null);
}
} else {
if(cljs.core.truth_((app.common.types.token.font_size_keys.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.font_size_keys.cljs$core$IFn$_invoke$arity$1(shape_attr) : app.common.types.token.font_size_keys.call(null,shape_attr)))){
return cljs.core.PersistentHashSet.createAsIfByAssoc([shape_attr,new cljs.core.Keyword(null,"typography","typography",-399568138)]);
} else {
if(cljs.core.truth_((app.common.types.token.letter_spacing_keys.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.letter_spacing_keys.cljs$core$IFn$_invoke$arity$1(shape_attr) : app.common.types.token.letter_spacing_keys.call(null,shape_attr)))){
return cljs.core.PersistentHashSet.createAsIfByAssoc([shape_attr,new cljs.core.Keyword(null,"typography","typography",-399568138)]);
} else {
if(cljs.core.truth_((app.common.types.token.font_family_keys.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.font_family_keys.cljs$core$IFn$_invoke$arity$1(shape_attr) : app.common.types.token.font_family_keys.call(null,shape_attr)))){
return cljs.core.PersistentHashSet.createAsIfByAssoc([shape_attr,new cljs.core.Keyword(null,"typography","typography",-399568138)]);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line-height","line-height",1870784992),shape_attr)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),null,new cljs.core.Keyword(null,"typography","typography",-399568138),null], null), null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),shape_attr)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-case","text-case",1049419399),null,new cljs.core.Keyword(null,"typography","typography",-399568138),null], null), null);
} else {
if(cljs.core.truth_((app.common.types.token.text_decoration_keys.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.text_decoration_keys.cljs$core$IFn$_invoke$arity$1(shape_attr) : app.common.types.token.text_decoration_keys.call(null,shape_attr)))){
return cljs.core.PersistentHashSet.createAsIfByAssoc([shape_attr,new cljs.core.Keyword(null,"typography","typography",-399568138)]);
} else {
if(cljs.core.truth_((app.common.types.token.font_weight_keys.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.font_weight_keys.cljs$core$IFn$_invoke$arity$1(shape_attr) : app.common.types.token.font_weight_keys.call(null,shape_attr)))){
return cljs.core.PersistentHashSet.createAsIfByAssoc([shape_attr,new cljs.core.Keyword(null,"typography","typography",-399568138)]);
} else {
if(cljs.core.truth_((app.common.types.token.border_radius_keys.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.border_radius_keys.cljs$core$IFn$_invoke$arity$1(shape_attr) : app.common.types.token.border_radius_keys.call(null,shape_attr)))){
return cljs.core.PersistentHashSet.createAsIfByAssoc([shape_attr]);
} else {
if(cljs.core.truth_((app.common.types.token.shadow_keys.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.shadow_keys.cljs$core$IFn$_invoke$arity$1(shape_attr) : app.common.types.token.shadow_keys.call(null,shape_attr)))){
return cljs.core.PersistentHashSet.createAsIfByAssoc([shape_attr]);
} else {
if(cljs.core.truth_((app.common.types.token.sizing_keys.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.sizing_keys.cljs$core$IFn$_invoke$arity$1(shape_attr) : app.common.types.token.sizing_keys.call(null,shape_attr)))){
return cljs.core.PersistentHashSet.createAsIfByAssoc([shape_attr]);
} else {
if(cljs.core.truth_((app.common.types.token.opacity_keys.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.opacity_keys.cljs$core$IFn$_invoke$arity$1(shape_attr) : app.common.types.token.opacity_keys.call(null,shape_attr)))){
return cljs.core.PersistentHashSet.createAsIfByAssoc([shape_attr]);
} else {
if(cljs.core.truth_((app.common.types.token.spacing_keys.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.spacing_keys.cljs$core$IFn$_invoke$arity$1(shape_attr) : app.common.types.token.spacing_keys.call(null,shape_attr)))){
return cljs.core.PersistentHashSet.createAsIfByAssoc([shape_attr]);
} else {
if(cljs.core.truth_((app.common.types.token.rotation_keys.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.rotation_keys.cljs$core$IFn$_invoke$arity$1(shape_attr) : app.common.types.token.rotation_keys.call(null,shape_attr)))){
return cljs.core.PersistentHashSet.createAsIfByAssoc([shape_attr]);
} else {
if(cljs.core.truth_((app.common.types.token.number_keys.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.number_keys.cljs$core$IFn$_invoke$arity$1(shape_attr) : app.common.types.token.number_keys.call(null,shape_attr)))){
return cljs.core.PersistentHashSet.createAsIfByAssoc([shape_attr]);
} else {
if(cljs.core.truth_((app.common.types.token.axis_keys.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.axis_keys.cljs$core$IFn$_invoke$arity$1(shape_attr) : app.common.types.token.axis_keys.call(null,shape_attr)))){
return cljs.core.PersistentHashSet.createAsIfByAssoc([shape_attr]);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(app.common.types.token.shape_attr__GT_token_attrs.cljs$lang$maxFixedArity = 2);

app.common.types.token.position_attributes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null);
app.common.types.token.generic_attributes = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(app.common.types.token.color_keys,app.common.types.token.stroke_width_keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.token.rotation_keys,app.common.types.token.sizing_keys,app.common.types.token.opacity_keys,app.common.types.token.shadow_keys,app.common.types.token.position_attributes], 0));
app.common.types.token.rect_attributes = clojure.set.union.cljs$core$IFn$_invoke$arity$2(app.common.types.token.generic_attributes,app.common.types.token.border_radius_keys);
app.common.types.token.frame_with_layout_attributes = clojure.set.union.cljs$core$IFn$_invoke$arity$2(app.common.types.token.rect_attributes,app.common.types.token.spacing_gap_padding_keys);
app.common.types.token.text_attributes = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(app.common.types.token.generic_attributes,app.common.types.token.typography_keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.token.number_keys], 0));
/**
 * Returns what token attributes may be applied to a shape depending on its type
 * and if it is a frame with a layout.
 */
app.common.types.token.shape_type__GT_attributes = (function app$common$types$token$shape_type__GT_attributes(type,is_layout){
var G__50691 = type;
var G__50691__$1 = (((G__50691 instanceof cljs.core.Keyword))?G__50691.fqn:null);
switch (G__50691__$1) {
case "bool":
return app.common.types.token.generic_attributes;

break;
case "circle":
return app.common.types.token.generic_attributes;

break;
case "rect":
return app.common.types.token.rect_attributes;

break;
case "frame":
if(cljs.core.truth_(is_layout)){
return app.common.types.token.frame_with_layout_attributes;
} else {
return app.common.types.token.rect_attributes;
}

break;
case "image":
return app.common.types.token.rect_attributes;

break;
case "path":
return app.common.types.token.generic_attributes;

break;
case "svg-raw":
return app.common.types.token.generic_attributes;

break;
case "text":
return app.common.types.token.text_attributes;

break;
default:
return null;

}
});
/**
 * Returns which ones of the given `attributes` can be applied to a shape
 * of type `shape-type` and `is-layout`.
 */
app.common.types.token.appliable_attrs_for_shape = (function app$common$types$token$appliable_attrs_for_shape(attributes,shape_type,is_layout){
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(attributes,app.common.types.token.shape_type__GT_attributes(shape_type,is_layout));
});
/**
 * Returns if any of the given `attributes` can be applied to a shape
 * of type `shape-type` and `is-layout`.
 */
app.common.types.token.any_appliable_attr_for_shape_QMARK_ = (function app$common$types$token$any_appliable_attr_for_shape_QMARK_(attributes,token_type,is_layout){
return app.common.data.not_empty_QMARK_(app.common.types.token.appliable_attrs_for_shape(attributes,token_type,is_layout));
});
app.common.types.token.attrs_in_text_content = clojure.set.union.cljs$core$IFn$_invoke$arity$2(app.common.types.token.typography_keys,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),null], null), null));
/**
 * A map from input name to applicable token for that input.
 */
app.common.types.token.tokens_by_input = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"vertical-padding","vertical-padding",50408610),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"horizontal-margin","horizontal-margin",1659318629),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"sided-paddings","sided-paddings",1192080137),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"column-gap","column-gap",384822863),new cljs.core.Keyword(null,"vertical-margin","vertical-margin",629210288),new cljs.core.Keyword(null,"horizontal-padding","horizontal-padding",-1543677678),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"sided-margins","sided-margins",-355961218),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537)],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),null,new cljs.core.Keyword(null,"number","number",1570378438),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sizing","sizing",-1868029885),null,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),null,new cljs.core.Keyword(null,"spacing","spacing",204422175),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sizing","sizing",-1868029885),null,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"number","number",1570378438),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),null,new cljs.core.Keyword(null,"spacing","spacing",204422175),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sizing","sizing",-1868029885),null,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),null,new cljs.core.Keyword(null,"spacing","spacing",204422175),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sizing","sizing",-1868029885),null,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sizing","sizing",-1868029885),null,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),null,new cljs.core.Keyword(null,"spacing","spacing",204422175),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),null,new cljs.core.Keyword(null,"spacing","spacing",204422175),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),null,new cljs.core.Keyword(null,"spacing","spacing",204422175),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),null,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),null,new cljs.core.Keyword(null,"spacing","spacing",204422175),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sizing","sizing",-1868029885),null,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),null,new cljs.core.Keyword(null,"spacing","spacing",204422175),null], null), null)]);
app.common.types.token.generate_attr_map = (function app$common$types$token$generate_attr_map(token,attributes){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (attr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token)], null);
}),attributes));
});
/**
 * Applies the token to the given attributes in the shape.
 */
app.common.types.token.apply_token_to_shape = (function app$common$types$token$apply_token_to_shape(p__50708){
var map__50710 = p__50708;
var map__50710__$1 = cljs.core.__destructure_map(map__50710);
var _props = map__50710__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50710__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50710__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50710__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var map_to_apply = app.common.types.token.generate_attr_map(token,attributes);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871),(function (p1__50706_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__50706_SHARP_,map_to_apply], 0));
}));
});
/**
 * Removes any token applied to the given attributes in the shape.
 */
app.common.types.token.unapply_tokens_from_shape = (function app$common$types$token$unapply_tokens_from_shape(shape,attributes){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871),app.common.data.without_keys,attributes);
});
/**
 * Unapplies all layout item related tokens from shape.
 */
app.common.types.token.unapply_layout_item_tokens = (function app$common$types$token$unapply_layout_item_tokens(shape){
var layout_item_attrs = clojure.set.union.cljs$core$IFn$_invoke$arity$2(app.common.types.token.sizing_layout_item_keys,app.common.types.token.spacing_margin_keys);
return app.common.types.token.unapply_tokens_from_shape(shape,layout_item_attrs);
});
/**
 * Splits font family `value` string from into vector of font families.
 * 
 *   Doesn't handle possible edge-case of font-families with `,` in their font family name.
 */
app.common.types.token.split_font_family = (function app$common$types$token$split_font_family(font_value){
var families = cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(font_value,",");
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cuerdas.core.trim),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cuerdas.core.empty_QMARK_));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xform,families);
});
/**
 * Joins font family `value` into a string to be edited with a single input.
 */
app.common.types.token.join_font_family = (function app$common$types$token$join_font_family(font_families){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",font_families);
});
app.common.types.token.text_decoration_values = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["none",null,"strike-through",null,"underline",null], null), null);
app.common.types.token.valid_text_decoration = (function app$common$types$token$valid_text_decoration(value){
var normalized_value = cuerdas.core.lower(cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(value));
if(cljs.core.contains_QMARK_(app.common.types.token.text_decoration_values,normalized_value)){
return normalized_value;
} else {
return null;
}
});
app.common.types.token.font_weight_aliases = cljs.core.PersistentHashMap.fromArrays(["600","300","700","400","100","200","500","900","800","950"],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["demi-bold",null,"halbfett",null,"demibold",null,"demi bold",null,"semibold",null,"semi bold",null,"semi-bold",null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["light",null,"leicht",null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["dreiviertelfett",null,"bold",null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["book",null,"normal",null,"buch",null,"regular",null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["thin",null,"hairline",null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["ultra light",null,"extralight",null,"extraleicht",null,"extra-light",null,"ultra-light",null,"ultralight",null,"extra light",null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["kr\u00E4ftig",null,"medium",null,"kraeftig",null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["heavy",null,"black",null,"extrafett",null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["extrabold",null,"fett",null,"extra-bold",null,"ultrabold",null,"ultra-bold",null,"extra bold",null,"ultra bold",null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["extra-black",null,"extra black",null,"ultra-black",null,"ultra black",null], null), null)]);
app.common.types.token.font_weight_values = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(app.common.types.token.font_weight_aliases));
/**
 * A map of font-weight aliases that map to their number equivalent used by penpot fonts per `:weight`.
 */
app.common.types.token.font_weight_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__50729){
var vec__50730 = p__50729;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50730,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50730,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.zipmap(vs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(k)));
}),cljs.core.PersistentArrayMap.EMPTY,app.common.types.token.font_weight_aliases);
app.common.types.token.parse_font_weight = (function app$common$types$token$parse_font_weight(font_weight){
var vec__50733 = cljs.core.re_find(/^(.+?)\s*(italic)?$/,cuerdas.core.lower(cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_weight)));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50733,(0),null);
var variant = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50733,(1),null);
var italic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50733,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),variant,new cljs.core.Keyword(null,"italic?","italic?",1143640731),(!((italic == null)))], null);
});
/**
 * Converts font-weight token value to a map like `{:weight "100" :style "italic"}`.
 *   Converts a weight alias like `regular` to a number, needs to be a regular number.
 *   Adds `italic` style when found in the `value` string.
 */
app.common.types.token.valid_font_weight_variant = (function app$common$types$token$valid_font_weight_variant(value){
var map__50736 = app.common.types.token.parse_font_weight(value);
var map__50736__$1 = cljs.core.__destructure_map(map__50736);
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50736__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var italic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50736__$1,new cljs.core.Keyword(null,"italic?","italic?",1143640731));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.common.types.token.font_weight_map,variant,variant);
if(cljs.core.truth_((app.common.types.token.font_weight_values.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.font_weight_values.cljs$core$IFn$_invoke$arity$1(weight) : app.common.types.token.font_weight_values.call(null,weight)))){
var G__50737 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"weight","weight",-1262796205),weight], null);
if(cljs.core.truth_(italic_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50737,new cljs.core.Keyword(null,"style","style",-496642736),"italic");
} else {
return G__50737;
}
} else {
return null;
}
});

//# sourceMappingURL=app.common.types.token.js.map
