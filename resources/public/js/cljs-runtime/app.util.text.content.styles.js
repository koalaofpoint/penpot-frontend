import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.transit.js";
import "./app.common.types.text.js";
import "./cuerdas.core.js";
goog.provide('app.util.text.content.styles');
app.util.text.content.styles.encode = (function app$util$text$content$styles$encode(value){
return app.common.transit.encode_str.cljs$core$IFn$_invoke$arity$1(value);
});
app.util.text.content.styles.decode = (function app$util$text$content$styles$decode(value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,"")){
return null;
} else {
return app.common.transit.decode_str.cljs$core$IFn$_invoke$arity$1(value);
}
});
app.util.text.content.styles.mapping = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fills","fills",902966780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.util.text.content.styles.encode,app.util.text.content.styles.decode], null),new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.util.text.content.styles.encode,app.util.text.content.styles.decode], null),new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.util.text.content.styles.encode,app.util.text.content.styles.decode], null),new cljs.core.Keyword(null,"font-id","font-id",-390084123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,cljs.core.identity], null),new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,cljs.core.identity], null),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,cljs.core.identity], null)], null);
/**
 * This function adds units to style values
 */
app.util.text.content.styles.normalize_style_value = (function app$util$text$content$styles$normalize_style_value(k,v){
if((((k instanceof cljs.core.Keyword)) && (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"font-size","font-size",-1847940346))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767))))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2(v,(-2)),"px")))))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"px"].join('');
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"font-family","font-family",-667419874))) && (cljs.core.seq(v)))){
return ""+(cuerdas.core.quote.cljs$core$IFn$_invoke$arity$1(cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(v,",")))) ?? "")+", var(--fallback-families)";
} else {
return v;

}
}
});
/**
 * This function strips units from attr values and un-scapes font-family
 */
app.util.text.content.styles.normalize_attr_value = (function app$util$text$content$styles$normalize_attr_value(k,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"mixed")){
return new cljs.core.Keyword(null,"multiple","multiple",1244445549);
} else {
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"font-size","font-size",-1847940346))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2(v,(-2)),"px")))){
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(v,(0),(-2));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"font-family","font-family",-667419874))){
return cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$1(cuerdas.core.replace(v,", var(--fallback-families)",""));
} else {
return v;

}
}
}
});
app.util.text.content.styles.get_style_name_as_css_variable = (function app$util$text$content$styles$get_style_name_as_css_variable(key){
return ""+"--"+(cljs.core.name(key) ?? "");
});
app.util.text.content.styles.get_style_name = (function app$util$text$content$styles$get_style_name(key){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"text-direction","text-direction",590275785))){
return "direction";
} else {
return cljs.core.name(key);

}
});
app.util.text.content.styles.get_style_keyword = (function app$util$text$content$styles$get_style_keyword(key){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.text.content.styles.get_style_name_as_css_variable(key));
});
app.util.text.content.styles.get_attr_keyword_from_css_variable = (function app$util$text$content$styles$get_attr_keyword_from_css_variable(style_name){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2(style_name,(2)));
});
app.util.text.content.styles.get_attr_keyword = (function app$util$text$content$styles$get_attr_keyword(style_name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style_name,"direction")){
return new cljs.core.Keyword(null,"text-direction","text-direction",590275785);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(style_name);

}
});
app.util.text.content.styles.attr_needs_mapping_QMARK_ = (function app$util$text$content$styles$attr_needs_mapping_QMARK_(key){
var contained_QMARK_ = cljs.core.contains_QMARK_(app.util.text.content.styles.mapping,key);
return contained_QMARK_;
});
app.util.text.content.styles.attr__GT_style_key = (function app$util$text$content$styles$attr__GT_style_key(key){
if(app.util.text.content.styles.attr_needs_mapping_QMARK_(key)){
var name = app.util.text.content.styles.get_style_name_as_css_variable(key);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"text-direction","text-direction",590275785))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("direction");
} else {
return key;

}
}
});
app.util.text.content.styles.attr__GT_style_value = (function app$util$text$content$styles$attr__GT_style_value(var_args){
var G__55248 = arguments.length;
switch (G__55248) {
case 2:
return app.util.text.content.styles.attr__GT_style_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.util.text.content.styles.attr__GT_style_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.text.content.styles.attr__GT_style_value.cljs$core$IFn$_invoke$arity$2 = (function (key,value){
return app.util.text.content.styles.attr__GT_style_value.cljs$core$IFn$_invoke$arity$3(key,value,false);
}));

(app.util.text.content.styles.attr__GT_style_value.cljs$core$IFn$_invoke$arity$3 = (function (key,value,normalize_QMARK_){
if(app.util.text.content.styles.attr_needs_mapping_QMARK_(key)){
var vec__55249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.util.text.content.styles.mapping,key);
var encoder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55249,(0),null);
if(cljs.core.truth_(normalize_QMARK_)){
return app.util.text.content.styles.normalize_style_value(key,(encoder.cljs$core$IFn$_invoke$arity$1 ? encoder.cljs$core$IFn$_invoke$arity$1(value) : encoder.call(null,value)));
} else {
return (encoder.cljs$core$IFn$_invoke$arity$1 ? encoder.cljs$core$IFn$_invoke$arity$1(value) : encoder.call(null,value));
}
} else {
if(cljs.core.truth_(normalize_QMARK_)){
return app.util.text.content.styles.normalize_style_value(key,value);
} else {
return value;
}
}
}));

(app.util.text.content.styles.attr__GT_style_value.cljs$lang$maxFixedArity = 3);

app.util.text.content.styles.attr__GT_style = (function app$util$text$content$styles$attr__GT_style(p__55253){
var vec__55254 = p__55253;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55254,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55254,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.util.text.content.styles.attr__GT_style_key(key),app.util.text.content.styles.attr__GT_style_value.cljs$core$IFn$_invoke$arity$2(key,value)], null);
});
/**
 * Maps attrs to styles
 */
app.util.text.content.styles.attrs__GT_styles = (function app$util$text$content$styles$attrs__GT_styles(styles){
var mapped_styles = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.util.text.content.styles.attr__GT_style,styles));
return cljs.core.clj__GT_js(mapped_styles);
});
app.util.text.content.styles.style_needs_mapping_QMARK_ = (function app$util$text$content$styles$style_needs_mapping_QMARK_(name){
return cuerdas.core.starts_with_QMARK_(name,"--");
});
app.util.text.content.styles.style__GT_attr_key = (function app$util$text$content$styles$style__GT_attr_key(key){
if(app.util.text.content.styles.style_needs_mapping_QMARK_(key)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2(key,(2)));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key);
}
});
app.util.text.content.styles.style__GT_attr_value = (function app$util$text$content$styles$style__GT_attr_value(var_args){
var G__55266 = arguments.length;
switch (G__55266) {
case 2:
return app.util.text.content.styles.style__GT_attr_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.util.text.content.styles.style__GT_attr_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.text.content.styles.style__GT_attr_value.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return app.util.text.content.styles.style__GT_attr_value.cljs$core$IFn$_invoke$arity$3(name,value,false);
}));

(app.util.text.content.styles.style__GT_attr_value.cljs$core$IFn$_invoke$arity$3 = (function (name,value,normalize_QMARK_){
if(app.util.text.content.styles.style_needs_mapping_QMARK_(name)){
var key = app.util.text.content.styles.get_attr_keyword_from_css_variable(name);
var vec__55267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.util.text.content.styles.mapping,key);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55267,(0),null);
var decoder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55267,(1),null);
if(cljs.core.truth_(normalize_QMARK_)){
return app.util.text.content.styles.normalize_attr_value(key,(decoder.cljs$core$IFn$_invoke$arity$1 ? decoder.cljs$core$IFn$_invoke$arity$1(value) : decoder.call(null,value)));
} else {
return (decoder.cljs$core$IFn$_invoke$arity$1 ? decoder.cljs$core$IFn$_invoke$arity$1(value) : decoder.call(null,value));
}
} else {
var key = app.util.text.content.styles.get_attr_keyword(name);
if(cljs.core.truth_(normalize_QMARK_)){
return app.util.text.content.styles.normalize_attr_value(key,value);
} else {
return value;
}
}
}));

(app.util.text.content.styles.style__GT_attr_value.cljs$lang$maxFixedArity = 3);

/**
 * Maps style to attr
 */
app.util.text.content.styles.style__GT_attr = (function app$util$text$content$styles$style__GT_attr(p__55271){
var vec__55272 = p__55271;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55272,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55272,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.util.text.content.styles.style__GT_attr_key(key),app.util.text.content.styles.style__GT_attr_value.cljs$core$IFn$_invoke$arity$2(key,value)], null);
});
/**
 * Maps styles to attrs
 */
app.util.text.content.styles.styles__GT_attrs = (function app$util$text$content$styles$styles__GT_attrs(styles){
var mapped_attrs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.util.text.content.styles.style__GT_attr,styles));
return mapped_attrs;
});
/**
 * Returns a Javascript object compatible with the TextEditor default styles
 */
app.util.text.content.styles.get_style_defaults = (function app$util$text$content$styles$get_style_defaults(style_defaults){
return cljs.core.clj__GT_js(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__55275){
var vec__55276 = p__55275;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55276,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55276,(1),null);
if(cljs.core.contains_QMARK_(app.util.text.content.styles.mapping,k)){
var vec__55279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.util.text.content.styles.mapping,k);
var style_encode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55279,(0),null);
var style_name = app.util.text.content.styles.get_style_name_as_css_variable(k);
var style_value = app.util.text.content.styles.normalize_style_value(style_name,(style_encode.cljs$core$IFn$_invoke$arity$1 ? style_encode.cljs$core$IFn$_invoke$arity$1(v) : style_encode.call(null,v)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,style_name,style_value);
} else {
var style_name = app.util.text.content.styles.get_style_name(k);
var style_value = app.util.text.content.styles.normalize_style_value(style_name,v);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,style_name,style_value);
}
}),cljs.core.PersistentArrayMap.EMPTY,style_defaults));
});
app.util.text.content.styles.mixed_values = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"multiple","multiple",1244445549),null,"mixed",null,new cljs.core.Keyword(null,"mixed","mixed",737211760),null,"multiple",null], null), null);
/**
 * Returns a ClojureScript object compatible with text nodes
 */
app.util.text.content.styles.get_styles_from_style_declaration = (function app$util$text$content$styles$get_styles_from_style_declaration(var_args){
var args__5755__auto__ = [];
var len__5749__auto___55299 = arguments.length;
var i__5750__auto___55300 = (0);
while(true){
if((i__5750__auto___55300 < len__5749__auto___55299)){
args__5755__auto__.push((arguments[i__5750__auto___55300]));

var G__55301 = (i__5750__auto___55300 + (1));
i__5750__auto___55300 = G__55301;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.util.text.content.styles.get_styles_from_style_declaration.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.util.text.content.styles.get_styles_from_style_declaration.cljs$core$IFn$_invoke$arity$variadic = (function (style_declaration,p__55287){
var map__55288 = p__55287;
var map__55288__$1 = cljs.core.__destructure_map(map__55288);
var removed_mixed = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55288__$1,new cljs.core.Keyword(null,"removed-mixed","removed-mixed",-588684214),false);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
if(cljs.core.contains_QMARK_(app.util.text.content.styles.mapping,k)){
var style_name = app.util.text.content.styles.get_style_name_as_css_variable(k);
var vec__55289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.util.text.content.styles.mapping,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55289,(0),null);
var style_decode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55289,(1),null);
var style_value = style_declaration.getPropertyValue(style_name);
if(((cljs.core.not(removed_mixed)) || ((!(cljs.core.contains_QMARK_(app.util.text.content.styles.mixed_values,style_value)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(style_decode.cljs$core$IFn$_invoke$arity$1 ? style_decode.cljs$core$IFn$_invoke$arity$1(style_value) : style_decode.call(null,style_value)));
} else {
return null;
}
} else {
var style_name = app.util.text.content.styles.get_style_name(k);
var style_value = app.util.text.content.styles.normalize_attr_value(k,style_declaration.getPropertyValue(style_name));
if(((cljs.core.not(removed_mixed)) || ((!(cljs.core.contains_QMARK_(app.util.text.content.styles.mixed_values,style_value)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,style_value);
} else {
return null;
}
}
}),cljs.core.PersistentArrayMap.EMPTY,app.common.types.text.text_style_attrs);
}));

(app.util.text.content.styles.get_styles_from_style_declaration.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.util.text.content.styles.get_styles_from_style_declaration.cljs$lang$applyTo = (function (seq55282){
var G__55283 = cljs.core.first(seq55282);
var seq55282__$1 = cljs.core.next(seq55282);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55283,seq55282__$1);
}));

/**
 * Returns a ClojureScript object compatible with text nodes
 */
app.util.text.content.styles.get_styles_from_event = (function app$util$text$content$styles$get_styles_from_event(e){
var style_declaration = e.detail;
return app.util.text.content.styles.get_styles_from_style_declaration(style_declaration);
});

//# sourceMappingURL=app.util.text.content.styles.js.map
