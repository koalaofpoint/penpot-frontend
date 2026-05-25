import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$$tokens_studio$sd_transforms.js";
import "./shadow.js.shim.module$style_dictionary$default.js";
import "./app.common.files.tokens.js";
import "./app.common.logging.js";
import "./app.common.schema.js";
import "./app.common.time.js";
import "./app.common.types.token.js";
import "./app.common.types.tokens_lib.js";
import "./app.config.js";
import "./app.main.data.tinycolor.js";
import "./app.main.data.tokenscript.js";
import "./app.main.data.workspace.tokens.errors.js";
import "./app.main.data.workspace.tokens.warnings.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./promesa.core.js";
import "./rumext.v2.js";
goog.provide('app.main.data.style_dictionary');
app.common.logging.loggers.set("app.main.data.style-dictionary",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"debug","debug",-1608172596)));
/**
 * Initiates the StyleDictionary instance.
 *   Setup transforms from tokens-studio used to parse and resolved token values.
 */
app.main.data.style_dictionary.setup_style_dictionary = (function (){
shadow.js.shim.module$$tokens_studio$sd_transforms.register(shadow.js.shim.module$style_dictionary$default);

shadow.js.shim.module$style_dictionary$default.registerTransformGroup(({"name": "penpot", "transforms": shadow.js.shim.module$$tokens_studio$sd_transforms.getTransforms().concat(["ts/color/css/hexrgba","ts/color/modifiers","color/css"])}));

shadow.js.shim.module$style_dictionary$default.registerFormat(({"name": "custom/json", "format": (function (res){
return res.dictionary.tokens;
})}));

return shadow.js.shim.module$style_dictionary$default;
})()
;
app.main.data.style_dictionary.default_config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"platforms","platforms",1418350461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transformGroup","transformGroup",2048632909),"penpot",new cljs.core.Keyword(null,"files","files",-472457450),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",-1306924766),"custom/json",new cljs.core.Keyword(null,"destination","destination",-253872483),"penpot"], null)], null)], null)], null),new cljs.core.Keyword(null,"preprocessors","preprocessors",109643103),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tokens-studio"], null),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verbosity","verbosity",-780202586),"silent",new cljs.core.Keyword(null,"warnings","warnings",-735437651),"silent",new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brokenReferences","brokenReferences",-359732824),"console"], null)], null)], null);
/**
 * Parses `value` of a color `sd-token` into a map like `{:value 1 :unit "px"}`.
 *   If the value is not parseable and/or has missing references returns a map with `:errors`.
 */
app.main.data.style_dictionary.parse_sd_token_color_value = (function app$main$data$style_dictionary$parse_sd_token_color_value(value){
var missing_references = cljs.core.seq(app.common.types.token.find_token_value_references(value));
var temp__5823__auto__ = app.main.data.tinycolor.valid_color(value);
if(cljs.core.truth_(temp__5823__auto__)){
var tc = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"unit","unit",375175175),app.main.data.tinycolor.color_format(tc)], null);
} else {
if(missing_references){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","missing-reference","error.style-dictionary/missing-reference",599665942),missing_references)], null),new cljs.core.Keyword(null,"references","references",882562509),missing_references], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.token","invalid-color","error.token/invalid-color",-1523551318),value)], null)], null);

}
}
});
app.main.data.style_dictionary.numeric_string_QMARK_ = (function app$main$data$style_dictionary$numeric_string_QMARK_(s){
var and__5023__auto__ = typeof s === 'string';
if(and__5023__auto__){
return cljs.core.re_matches(/^-?\d+(\.\d+)?$/,s);
} else {
return and__5023__auto__;
}
});
app.main.data.style_dictionary.with_units = (function app$main$data$style_dictionary$with_units(s){
var and__5023__auto__ = typeof s === 'string';
if(and__5023__auto__){
return cljs.core.re_matches(/^-?\d+(\.\d+)?(px|rem)$/,s);
} else {
return and__5023__auto__;
}
});
/**
 * Parses `value` of a number `sd-token` into a map like `{:value 1 :unit "px"}`.
 *   If the `value` is not parseable and/or has missing references returns a map with `:errors`.
 */
app.main.data.style_dictionary.parse_sd_token_number_value = (function app$main$data$style_dictionary$parse_sd_token_number_value(value){
var number_QMARK_ = (function (){var or__5025__auto__ = typeof value === 'number';
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.main.data.style_dictionary.numeric_string_QMARK_(value);
}
})();
var parsed_value = app.common.files.tokens.parse_token_value(value);
var out_of_bounds = (((new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(parsed_value) >= app.common.schema.max_safe_int)) || ((new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(parsed_value) <= app.common.schema.min_safe_int)));
if(cljs.core.truth_((function (){var and__5023__auto__ = parsed_value;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = (!(out_of_bounds));
if(and__5023__auto____$1){
return number_QMARK_;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return parsed_value;
} else {
if(out_of_bounds){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.token","number-too-large","error.token/number-too-large",1728828587),value)], null)], null);
} else {
if(cljs.core.seq(app.common.types.token.find_token_value_references(value))){
var references = cljs.core.seq(app.common.types.token.find_token_value_references(value));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","missing-reference","error.style-dictionary/missing-reference",599665942),references)], null),new cljs.core.Keyword(null,"references","references",882562509),references], null);
} else {
if(cljs.core.truth_(app.main.data.style_dictionary.with_units(value))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","value-with-units","error.style-dictionary/value-with-units",-1838622742),value)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","invalid-token-value","error.style-dictionary/invalid-token-value",2098581256),value)], null)], null);

}
}
}
}
});
/**
 * Parses `value` of a number `sd-token` into a map like `{:value 1 :unit "px"}`.
 *   If the `value` is not parseable and/or has missing references returns a map with `:errors`.
 */
app.main.data.style_dictionary.parse_sd_token_general_value = (function app$main$data$style_dictionary$parse_sd_token_general_value(value){
var parsed_value = app.common.files.tokens.parse_token_value(value);
var out_of_bounds = (((new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(parsed_value) >= app.common.schema.max_safe_int)) || ((new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(parsed_value) <= app.common.schema.min_safe_int)));
if(cljs.core.truth_((function (){var and__5023__auto__ = parsed_value;
if(cljs.core.truth_(and__5023__auto__)){
return (!(out_of_bounds));
} else {
return and__5023__auto__;
}
})())){
return parsed_value;
} else {
if(out_of_bounds){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.token","number-too-large","error.token/number-too-large",1728828587),value)], null)], null);
} else {
var temp__5823__auto__ = cljs.core.seq(app.common.types.token.find_token_value_references(value));
if(temp__5823__auto__){
var references = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","missing-reference","error.style-dictionary/missing-reference",599665942),references)], null),new cljs.core.Keyword(null,"references","references",882562509),references], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","invalid-token-value","error.style-dictionary/invalid-token-value",2098581256),value)], null)], null);
}
}
}
});
/**
 * Parses `value` of a dimensions `sd-token` into a map like `{:value 1 :unit "px"}`.
 *   If the `value` is not parseable and/or has missing references returns a map with `:errors`.
 *   If the `value` is parseable but is out of range returns a map with `warnings`.
 */
app.main.data.style_dictionary.parse_sd_token_opacity_value = (function app$main$data$style_dictionary$parse_sd_token_opacity_value(value){
var missing_references_QMARK_ = cljs.core.seq(app.common.types.token.find_token_value_references(value));
var parsed_value = app.common.files.tokens.parse_token_value(value);
var out_of_scope = (!(((((0) <= new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(parsed_value))) && ((new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(parsed_value) <= (1))))));
var references = cljs.core.seq(app.common.types.token.find_token_value_references(value));
if(cljs.core.truth_((function (){var and__5023__auto__ = parsed_value;
if(cljs.core.truth_(and__5023__auto__)){
return (!(out_of_scope));
} else {
return and__5023__auto__;
}
})())){
return parsed_value;
} else {
if(references){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","missing-reference","error.style-dictionary/missing-reference",599665942),references)], null),new cljs.core.Keyword(null,"references","references",882562509),references], null);
} else {
if(((cljs.core.not(missing_references_QMARK_)) && (out_of_scope))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","invalid-token-value-opacity","error.style-dictionary/invalid-token-value-opacity",-1542237618),value)], null)], null);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = missing_references_QMARK_;
if(and__5023__auto__){
var and__5023__auto____$1 = out_of_scope;
if(and__5023__auto____$1){
return parsed_value;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parsed_value,new cljs.core.Keyword(null,"warnings","warnings",-735437651),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.warnings.warning_with_value(new cljs.core.Keyword("warning.style-dictionary","invalid-referenced-token-value-opacity","warning.style-dictionary/invalid-referenced-token-value-opacity",1549690788),value)], null));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","invalid-token-value","error.style-dictionary/invalid-token-value",2098581256),value)], null)], null);

}
}
}
}
});
/**
 * Parses `value` of a dimensions `sd-token` into a map like `{:value 1 :unit "px"}`.
 *   If the `value` is not parseable and/or has missing references returns a map with `:errors`.
 *   If the `value` is parseable but is out of range returns a map with `warnings`.
 */
app.main.data.style_dictionary.parse_sd_token_stroke_width_value = (function app$main$data$style_dictionary$parse_sd_token_stroke_width_value(value){
var missing_references_QMARK_ = cljs.core.seq(app.common.types.token.find_token_value_references(value));
var parsed_value = app.common.files.tokens.parse_token_value(value);
var out_of_scope = (new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(parsed_value) < (0));
if(cljs.core.truth_((function (){var and__5023__auto__ = parsed_value;
if(cljs.core.truth_(and__5023__auto__)){
return (!(out_of_scope));
} else {
return and__5023__auto__;
}
})())){
return parsed_value;
} else {
if(missing_references_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","missing-reference","error.style-dictionary/missing-reference",599665942),missing_references_QMARK_)], null),new cljs.core.Keyword(null,"references","references",882562509),missing_references_QMARK_], null);
} else {
if(((cljs.core.not(missing_references_QMARK_)) && (out_of_scope))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","invalid-token-value-stroke-width","error.style-dictionary/invalid-token-value-stroke-width",-601889002),value)], null)], null);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = missing_references_QMARK_;
if(and__5023__auto__){
var and__5023__auto____$1 = out_of_scope;
if(and__5023__auto____$1){
return parsed_value;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parsed_value,new cljs.core.Keyword(null,"warnings","warnings",-735437651),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.warnings.warning_with_value(new cljs.core.Keyword("warning.style-dictionary","invalid-referenced-token-value-stroke-width","warning.style-dictionary/invalid-referenced-token-value-stroke-width",1689441159),value)], null));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","invalid-token-value","error.style-dictionary/invalid-token-value",2098581256),value)], null)], null);

}
}
}
}
});
/**
 * Parses `value` of a text-case `sd-token` into a map like `{:value "1"}`.
 *   If the `value` is not parseable and/or has missing references returns a map with `:errors`.
 */
app.main.data.style_dictionary.parse_sd_token_letter_spacing_value = (function app$main$data$style_dictionary$parse_sd_token_letter_spacing_value(value){
var parsed_value = app.main.data.style_dictionary.parse_sd_token_general_value(value);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(parsed_value),"%")){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","value-with-percent","error.style-dictionary/value-with-percent",1914161576),value)], null)], null);
} else {
return parsed_value;
}
});
/**
 * Parses `value` of a text-case `sd-token` into a map like `{:value "uppercase"}`.
 *   If the `value` is not parseable and/or has missing references returns a map with `:errors`.
 */
app.main.data.style_dictionary.parse_sd_token_text_case_value = (function app$main$data$style_dictionary$parse_sd_token_text_case_value(value){
var normalized_value = cuerdas.core.lower(cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(value));
var valid_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["none",null,"lowercase",null,"capitalize",null,"uppercase",null], null), null),normalized_value);
var references = cljs.core.seq(app.common.types.token.find_token_value_references(value));
if(valid_QMARK_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),normalized_value], null);
} else {
if(references){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","missing-reference","error.style-dictionary/missing-reference",599665942),references)], null),new cljs.core.Keyword(null,"references","references",882562509),references], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","invalid-token-value-text-case","error.style-dictionary/invalid-token-value-text-case",-1959663654),value)], null)], null);

}
}
});
/**
 * Parses `value` of a text-decoration `sd-token` into a map like `{:value "underline"}`.
 *   If the `value` is not parseable and/or has missing references returns a map with `:errors`.
 */
app.main.data.style_dictionary.parse_sd_token_text_decoration_value = (function app$main$data$style_dictionary$parse_sd_token_text_decoration_value(value){
var valid_text_decoration = app.common.types.token.valid_text_decoration(value);
var references = cljs.core.seq(app.common.types.token.find_token_value_references(value));
if(cljs.core.truth_(valid_text_decoration)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),valid_text_decoration], null);
} else {
if(references){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","missing-reference","error.style-dictionary/missing-reference",599665942),references)], null),new cljs.core.Keyword(null,"references","references",882562509),references], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","invalid-token-value-text-decoration","error.style-dictionary/invalid-token-value-text-decoration",234419485),value)], null)], null);

}
}
});
/**
 * Parses `value` of a font-weight `sd-token` into a map like `{:value "700"}` or `{:value "700 Italic"}`.
 *   If the `value` is not parseable and/or has missing references returns a map with `:errors`.
 */
app.main.data.style_dictionary.parse_sd_token_font_weight_value = (function app$main$data$style_dictionary$parse_sd_token_font_weight_value(value){
var valid_font_weight = app.common.types.token.valid_font_weight_variant(value);
var references = cljs.core.seq(app.common.types.token.find_token_value_references(value));
if(cljs.core.truth_(valid_font_weight)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
if(references){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","missing-reference","error.style-dictionary/missing-reference",599665942),references)], null),new cljs.core.Keyword(null,"references","references",882562509),references], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","invalid-token-value-font-weight","error.style-dictionary/invalid-token-value-font-weight",-1037871167),value)], null)], null);

}
}
});
/**
 * Parses `line-height-value` of a composite typography token.
 *   Uses `font-size-value` to calculate the relative line-height value.
 *   Returns an error for an invalid font-size value.
 */
app.main.data.style_dictionary.parse_sd_token_typography_line_height = (function app$main$data$style_dictionary$parse_sd_token_typography_line_height(line_height_value,font_size_value,font_size_errors){
var missing_references = cljs.core.seq(app.common.types.token.find_token_value_references(line_height_value));
var error = ((missing_references)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","missing-reference","error.style-dictionary/missing-reference",599665942),missing_references)], null),new cljs.core.Keyword(null,"references","references",882562509),missing_references], null):((((cljs.core.not(font_size_value)) || (cljs.core.seq(font_size_errors))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","composite-line-height-needs-font-size","error.style-dictionary/composite-line-height-needs-font-size",-1348579572),font_size_value)], null),new cljs.core.Keyword(null,"font-size-value","font-size-value",-1463858424),font_size_value], null):null));
var or__5025__auto__ = error;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){try{var temp__5825__auto__ = app.common.files.tokens.parse_token_value(line_height_value);
if(cljs.core.truth_(temp__5825__auto__)){
var map__71971 = temp__5825__auto__;
var map__71971__$1 = cljs.core.__destructure_map(map__71971);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71971__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71971__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__71973 = unit;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("%",G__71973)){
return (value / (100));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("px",G__71973)){
return (value / font_size_value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__71973)){
return value;
} else {
return null;

}
}
}
} else {
return null;
}
}catch (e71969){var _ = e71969;
return null;
}})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","invalid-token-value","error.style-dictionary/invalid-token-value",2098581256),line_height_value)], null)], null);
}
}
});
app.main.data.style_dictionary.parse_sd_token_font_family_value = (function app$main$data$style_dictionary$parse_sd_token_font_family_value(value){
var value__$1 = cljs.core.flatten(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(value));
var valid_font_family = ((typeof value__$1 === 'string') || (cljs.core.every_QMARK_(cljs.core.string_QMARK_,value__$1)));
var missing_references = cljs.core.seq(cljs.core.some(app.common.types.token.find_token_value_references,value__$1));
if((!(valid_font_family))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","invalid-token-value-font-family","error.style-dictionary/invalid-token-value-font-family",-2130547996),value__$1)], null)], null);
} else {
if(missing_references){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","missing-reference","error.style-dictionary/missing-reference",599665942),missing_references)], null),new cljs.core.Keyword(null,"references","references",882562509),missing_references], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value__$1], null);

}
}
});
app.main.data.style_dictionary.parse_atomic_typography_value = (function app$main$data$style_dictionary$parse_atomic_typography_value(token_type,token_value){
var G__71977 = token_type;
var G__71977__$1 = (((G__71977 instanceof cljs.core.Keyword))?G__71977.fqn:null);
switch (G__71977__$1) {
case "font-size":
return app.main.data.style_dictionary.parse_sd_token_general_value(token_value);

break;
case "font-family":
return app.main.data.style_dictionary.parse_sd_token_font_family_value(token_value);

break;
case "font-weight":
return app.main.data.style_dictionary.parse_sd_token_font_weight_value(token_value);

break;
case "letter-spacing":
return app.main.data.style_dictionary.parse_sd_token_letter_spacing_value(token_value);

break;
case "text-case":
return app.main.data.style_dictionary.parse_sd_token_text_case_value(token_value);

break;
case "text-decoration":
return app.main.data.style_dictionary.parse_sd_token_text_decoration_value(token_value);

break;
default:
return null;

}
});
/**
 * Parses composite typography `value` map.
 *   Processes the `:line-height` based on the `:font-size` value in the map.
 */
app.main.data.style_dictionary.parse_composite_typography_value = (function app$main$data$style_dictionary$parse_composite_typography_value(value){
var missing_references = ((typeof value === 'string')?cljs.core.seq(app.common.types.token.find_token_value_references(value)):null);
if(cljs.core.truth_(missing_references)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","missing-reference","error.style-dictionary/missing-reference",599665942),missing_references)], null),new cljs.core.Keyword(null,"references","references",882562509),missing_references], null);
} else {
if(typeof value === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","invalid-token-value-typography","error.style-dictionary/invalid-token-value-typography",-300328291),value)], null)], null);
} else {
var converted = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var add_keyed_errors = (function (typography_map,k,errors){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(typography_map,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71978_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__71978_SHARP_,new cljs.core.Keyword(null,"typography-key","typography-key",64987307),k);
}),errors));
});
var without_line_height = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(converted,new cljs.core.Keyword(null,"line-height","line-height",1870784992));
var valid_typography = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__71979){
var vec__71980 = p__71979;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71980,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71980,(1),null);
var map__71984 = app.main.data.style_dictionary.parse_atomic_typography_value(k,v);
var map__71984__$1 = cljs.core.__destructure_map(map__71984);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71984__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71984__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.seq(errors)){
return add_keyed_errors(acc,k,errors);
} else {
return cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),k], null),(function (){var or__5025__auto__ = value__$1;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return v;
}
})());
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.PersistentArrayMap.EMPTY], null),without_line_height);
var line_height = (function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"line-height","line-height",1870784992).cljs$core$IFn$_invoke$arity$1(converted);
if(cljs.core.truth_(temp__5825__auto__)){
var line_height = temp__5825__auto__;
return app.main.data.style_dictionary.parse_sd_token_typography_line_height(line_height,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(valid_typography,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"font-size","font-size",-1847940346)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(valid_typography,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"font-size","font-size",-1847940346)], null)));
} else {
return null;
}
})();
var valid_typography__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(line_height))?add_keyed_errors(valid_typography,new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(line_height)):(cljs.core.truth_(line_height)?cljs.core.assoc_in(valid_typography,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"line-height","line-height",1870784992)], null),line_height):valid_typography
));
return valid_typography__$1;

}
}
});
app.main.data.style_dictionary.collect_typography_errors = (function app$main$data$style_dictionary$collect_typography_errors(token){
return cljs.core.group_by(new cljs.core.Keyword(null,"typography-key","typography-key",64987307),new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(token));
});
app.main.data.style_dictionary.parse_sd_token_shadow_inset = (function app$main$data$style_dictionary$parse_sd_token_shadow_inset(value){
var references = cljs.core.seq(app.common.types.token.find_token_value_references(value));
if(cljs.core.boolean_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
if(references){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","missing-reference","error.style-dictionary/missing-reference",599665942),references)], null),new cljs.core.Keyword(null,"references","references",882562509),references], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","invalid-token-value-shadow-type","error.style-dictionary/invalid-token-value-shadow-type",-1470937584),value)], null)], null);

}
}
});
/**
 * Parses shadow blur value (non-negative number).
 */
app.main.data.style_dictionary.parse_sd_token_shadow_blur = (function app$main$data$style_dictionary$parse_sd_token_shadow_blur(value){
var parsed = app.main.data.style_dictionary.parse_sd_token_general_value(value);
var valid_QMARK_ = (function (){var and__5023__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(parsed);
if(cljs.core.truth_(and__5023__auto__)){
return (new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(parsed) >= (0));
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(valid_QMARK_)){
return parsed;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","invalid-token-value-shadow-blur","error.style-dictionary/invalid-token-value-shadow-blur",1597718933),value)], null)], null);

}
});
/**
 * Parses shadow spread value (non-negative number).
 */
app.main.data.style_dictionary.parse_sd_token_shadow_spread = (function app$main$data$style_dictionary$parse_sd_token_shadow_spread(value){
var parsed = app.main.data.style_dictionary.parse_sd_token_general_value(value);
var valid_QMARK_ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(parsed);
if(cljs.core.truth_(valid_QMARK_)){
return parsed;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","invalid-token-value-shadow-spread","error.style-dictionary/invalid-token-value-shadow-spread",-522549398),value)], null)], null);

}
});
/**
 * Parses a single shadow map with properties: x, y, blur, spread, color, type.
 */
app.main.data.style_dictionary.parse_single_shadow = (function app$main$data$style_dictionary$parse_single_shadow(shadow_map,shadow_index){
var shadow_map__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),null,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),null,new cljs.core.Keyword(null,"blur","blur",-453500461),null,new cljs.core.Keyword(null,"spread","spread",862337191),null,new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"inset","inset",-396367740),false], null),shadow_map], 0));
var add_keyed_errors = (function (shadow_result,k,errors){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(shadow_result,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71993_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__71993_SHARP_,new cljs.core.Keyword(null,"shadow-key","shadow-key",-1799237015),k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shadow-index","shadow-index",-1389271741),shadow_index], 0));
}),errors));
});
var parsers = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),app.main.data.style_dictionary.parse_sd_token_general_value,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),app.main.data.style_dictionary.parse_sd_token_general_value,new cljs.core.Keyword(null,"blur","blur",-453500461),app.main.data.style_dictionary.parse_sd_token_shadow_blur,new cljs.core.Keyword(null,"spread","spread",862337191),app.main.data.style_dictionary.parse_sd_token_shadow_spread,new cljs.core.Keyword(null,"color","color",1011675173),app.main.data.style_dictionary.parse_sd_token_color_value,new cljs.core.Keyword(null,"inset","inset",-396367740),app.main.data.style_dictionary.parse_sd_token_shadow_inset], null);
var valid_shadow = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__71994){
var vec__71995 = p__71994;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71995,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71995,(1),null);
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(parsers,k);
if(cljs.core.truth_(temp__5823__auto__)){
var parser = temp__5823__auto__;
var map__71998 = (parser.cljs$core$IFn$_invoke$arity$1 ? parser.cljs$core$IFn$_invoke$arity$1(v) : parser.call(null,v));
var map__71998__$1 = cljs.core.__destructure_map(map__71998);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71998__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71998__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.seq(errors)){
return add_keyed_errors(acc,k,errors);
} else {
return cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),k], null),(function (){var or__5025__auto__ = value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return v;
}
})());
}
} else {
return acc;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.PersistentArrayMap.EMPTY], null),shadow_map__$1);
return valid_shadow;
});
/**
 * Parses shadow value and validates it.
 */
app.main.data.style_dictionary.parse_sd_token_shadow_value = (function app$main$data$style_dictionary$parse_sd_token_shadow_value(value){
var missing_references = ((typeof value === 'string')?cljs.core.seq(app.common.types.token.find_token_value_references(value)):null);
if(cljs.core.truth_(missing_references)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","missing-reference","error.style-dictionary/missing-reference",599665942),missing_references)], null),new cljs.core.Keyword(null,"references","references",882562509),missing_references], null);
} else {
if(typeof value === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","invalid-token-value-shadow","error.style-dictionary/invalid-token-value-shadow",1280239811),value)], null)], null);
} else {
if((value == null)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.get_error_code(new cljs.core.Keyword("error.token","empty-input","error.token/empty-input",-1506425915))], null)], null);
} else {
if(cljs.core.not(Array.isArray(value))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","invalid-token-value","error.style-dictionary/invalid-token-value",2098581256),value)], null)], null);
} else {
var converted = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var parsed_shadows = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,shadow_map){
return app.main.data.style_dictionary.parse_single_shadow(shadow_map,idx);
}),converted);
var all_errors = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parsed_shadows], 0));
var all_values = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),parsed_shadows));
if(cljs.core.seq(all_errors)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),all_errors,new cljs.core.Keyword(null,"value","value",305978217),all_values], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),all_values], null);
}

}
}
}
}
});
app.main.data.style_dictionary.collect_shadow_errors = (function app$main$data$style_dictionary$collect_shadow_errors(token,shadow_index){
return cljs.core.group_by(new cljs.core.Keyword(null,"shadow-key","shadow-key",-1799237015),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72005_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shadow-index","shadow-index",-1389271741).cljs$core$IFn$_invoke$arity$1(p1__72005_SHARP_),shadow_index);
}),new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(token)));
});
/**
 * Converts a StyleDictionary dictionary with resolved tokens (aka `sd-tokens`) back to clojure.
 *   The `get-origin-token` argument should be a function that takes an
 *   `sd-token` and returns the original penpot token, so we can merge
 *   the resolved attributes back in.
 * 
 *   The `sd-token` will have references in `value` replaced with the computed value as a string.
 *   Here's an example for a `sd-token`:
 *   ```js
 *   {
 *  name:  'token.with.reference',
 *  value: '12px',
 *  type:  'border-radius',
 *  path: ['token', 'with', 'reference'],
 * 
 *  // The penpot origin token converted to a js object
 *  original: {
 *      name:  'token.with.reference',
 *      value: '{referenced.token}',
 *      type:  'border-radius'
 *  },
 *   }
 *   ```
 * 
 *   We also convert `sd-token` value string into a unit that can be used as penpot shape attributes.
 *  - Dimensions like '12px' will be converted into numbers
 *  - Colors will be validated & converted to hex
 * 
 *   Lastly we check for errors in each token
 *   `sd-token` will keep the missing references in the `value` (E.g "{missing} + {existing}" -> "{missing} + 12px")
 *   So we parse out the missing references and add them to `:errors` in the final token.
 */
app.main.data.style_dictionary.process_sd_tokens = (function app$main$data$style_dictionary$process_sd_tokens(sd_tokens,get_origin_token){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,sd_token){
var origin_token = (get_origin_token.cljs$core$IFn$_invoke$arity$1 ? get_origin_token.cljs$core$IFn$_invoke$arity$1(sd_token) : get_origin_token.call(null,sd_token));
var value = sd_token.value;
var parsed_token_value = (function (){var or__5025__auto__ = app.main.data.style_dictionary.parse_atomic_typography_value(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(origin_token),value);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var G__72009 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(origin_token);
var G__72009__$1 = (((G__72009 instanceof cljs.core.Keyword))?G__72009.fqn:null);
switch (G__72009__$1) {
case "typography":
return app.main.data.style_dictionary.parse_composite_typography_value(value);

break;
case "shadow":
return app.main.data.style_dictionary.parse_sd_token_shadow_value(value);

break;
case "color":
return app.main.data.style_dictionary.parse_sd_token_color_value(value);

break;
case "opacity":
return app.main.data.style_dictionary.parse_sd_token_opacity_value(value);

break;
case "stroke-width":
return app.main.data.style_dictionary.parse_sd_token_stroke_width_value(value);

break;
case "number":
return app.main.data.style_dictionary.parse_sd_token_number_value(value);

break;
default:
return app.main.data.style_dictionary.parse_sd_token_general_value(value);

}
}
})();
var output_token = (cljs.core.truth_(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(parsed_token_value))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([origin_token,parsed_token_value], 0)):(cljs.core.truth_(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(parsed_token_value))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(origin_token,new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(parsed_token_value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"warnings","warnings",-735437651),new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(parsed_token_value),new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(parsed_token_value)], 0)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(origin_token,new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(parsed_token_value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(parsed_token_value)], 0))
));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(output_token),output_token);
}),cljs.core.PersistentArrayMap.EMPTY,sd_tokens);
});

/**
 * @interface
 */
app.main.data.style_dictionary.IStyleDictionary = function(){};

var app$main$data$style_dictionary$IStyleDictionary$add_tokens$dyn_72152 = (function (_,tokens){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.main.data.style_dictionary.add_tokens[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,tokens) : m__5374__auto__.call(null,_,tokens));
} else {
var m__5372__auto__ = (app.main.data.style_dictionary.add_tokens["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,tokens) : m__5372__auto__.call(null,_,tokens));
} else {
throw cljs.core.missing_protocol("IStyleDictionary.add-tokens",_);
}
}
});
app.main.data.style_dictionary.add_tokens = (function app$main$data$style_dictionary$add_tokens(_,tokens){
if((((!((_ == null)))) && ((!((_.app$main$data$style_dictionary$IStyleDictionary$add_tokens$arity$2 == null)))))){
return _.app$main$data$style_dictionary$IStyleDictionary$add_tokens$arity$2(_,tokens);
} else {
return app$main$data$style_dictionary$IStyleDictionary$add_tokens$dyn_72152(_,tokens);
}
});

var app$main$data$style_dictionary$IStyleDictionary$enable_debug$dyn_72153 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.main.data.style_dictionary.enable_debug[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.main.data.style_dictionary.enable_debug["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IStyleDictionary.enable-debug",_);
}
}
});
app.main.data.style_dictionary.enable_debug = (function app$main$data$style_dictionary$enable_debug(_){
if((((!((_ == null)))) && ((!((_.app$main$data$style_dictionary$IStyleDictionary$enable_debug$arity$1 == null)))))){
return _.app$main$data$style_dictionary$IStyleDictionary$enable_debug$arity$1(_);
} else {
return app$main$data$style_dictionary$IStyleDictionary$enable_debug$dyn_72153(_);
}
});

var app$main$data$style_dictionary$IStyleDictionary$get_config$dyn_72154 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.main.data.style_dictionary.get_config[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.main.data.style_dictionary.get_config["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IStyleDictionary.get-config",_);
}
}
});
app.main.data.style_dictionary.get_config = (function app$main$data$style_dictionary$get_config(_){
if((((!((_ == null)))) && ((!((_.app$main$data$style_dictionary$IStyleDictionary$get_config$arity$1 == null)))))){
return _.app$main$data$style_dictionary$IStyleDictionary$get_config$arity$1(_);
} else {
return app$main$data$style_dictionary$IStyleDictionary$get_config$dyn_72154(_);
}
});

var app$main$data$style_dictionary$IStyleDictionary$build_dictionary$dyn_72156 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.main.data.style_dictionary.build_dictionary[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.main.data.style_dictionary.build_dictionary["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IStyleDictionary.build-dictionary",_);
}
}
});
app.main.data.style_dictionary.build_dictionary = (function app$main$data$style_dictionary$build_dictionary(_){
if((((!((_ == null)))) && ((!((_.app$main$data$style_dictionary$IStyleDictionary$build_dictionary$arity$1 == null)))))){
return _.app$main$data$style_dictionary$IStyleDictionary$build_dictionary$arity$1(_);
} else {
return app$main$data$style_dictionary$IStyleDictionary$build_dictionary$dyn_72156(_);
}
});


/**
* @constructor
 * @implements {app.main.data.style_dictionary.IStyleDictionary}
*/
app.main.data.style_dictionary.StyleDictionary = (function (config){
this.config = config;
});
(app.main.data.style_dictionary.StyleDictionary.prototype.app$main$data$style_dictionary$IStyleDictionary$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.style_dictionary.StyleDictionary.prototype.app$main$data$style_dictionary$IStyleDictionary$add_tokens$arity$2 = (function (_,tokens){
var self__ = this;
var ___$1 = this;
return (new app.main.data.style_dictionary.StyleDictionary(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.config,new cljs.core.Keyword(null,"tokens","tokens",-818939304),tokens)));
}));

(app.main.data.style_dictionary.StyleDictionary.prototype.app$main$data$style_dictionary$IStyleDictionary$enable_debug$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new app.main.data.style_dictionary.StyleDictionary(cljs.core.update.cljs$core$IFn$_invoke$arity$4(self__.config,new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbosity","verbosity",-780202586),"verbose"], null))));
}));

(app.main.data.style_dictionary.StyleDictionary.prototype.app$main$data$style_dictionary$IStyleDictionary$get_config$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.config;
}));

(app.main.data.style_dictionary.StyleDictionary.prototype.app$main$data$style_dictionary$IStyleDictionary$build_dictionary$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var platform = "json";
var config_SINGLEQUOTE_ = cljs.core.clj__GT_js(self__.config);
var build_PLUS_ = promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2((new shadow.js.shim.module$style_dictionary$default(config_SINGLEQUOTE_)).buildAllPlatforms(platform),(function (p1__72027_SHARP_){
return p1__72027_SHARP_.getPlatformTokens(platform);
})),(function (p1__72028_SHARP_){
return p1__72028_SHARP_.allTokens;
}));
return beicon.v2.core.from(build_PLUS_);
}));

(app.main.data.style_dictionary.StyleDictionary.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null)], null);
}));

(app.main.data.style_dictionary.StyleDictionary.cljs$lang$type = true);

(app.main.data.style_dictionary.StyleDictionary.cljs$lang$ctorStr = "app.main.data.style-dictionary/StyleDictionary");

(app.main.data.style_dictionary.StyleDictionary.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.main.data.style-dictionary/StyleDictionary");
}));

/**
 * Positional factory function for app.main.data.style-dictionary/StyleDictionary.
 */
app.main.data.style_dictionary.__GT_StyleDictionary = (function app$main$data$style_dictionary$__GT_StyleDictionary(config){
return (new app.main.data.style_dictionary.StyleDictionary(config));
});

app.main.data.style_dictionary.resolve_tokens_tree = (function app$main$data$style_dictionary$resolve_tokens_tree(var_args){
var G__72039 = arguments.length;
switch (G__72039) {
case 2:
return app.main.data.style_dictionary.resolve_tokens_tree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.style_dictionary.resolve_tokens_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.style_dictionary.resolve_tokens_tree.cljs$core$IFn$_invoke$arity$2 = (function (tokens_tree,get_token){
return app.main.data.style_dictionary.resolve_tokens_tree.cljs$core$IFn$_invoke$arity$3(tokens_tree,get_token,(new app.main.data.style_dictionary.StyleDictionary(app.main.data.style_dictionary.default_config)));
}));

(app.main.data.style_dictionary.resolve_tokens_tree.cljs$core$IFn$_invoke$arity$3 = (function (tokens_tree,get_token,style_dictionary){
return beicon.v2.core.map((function (p1__72037_SHARP_){
return app.main.data.style_dictionary.process_sd_tokens(p1__72037_SHARP_,get_token);
}),app.main.data.style_dictionary.build_dictionary(app.main.data.style_dictionary.add_tokens(style_dictionary,tokens_tree)));
}));

(app.main.data.style_dictionary.resolve_tokens_tree.cljs$lang$maxFixedArity = 3);

app.main.data.style_dictionary.sd_token_name = (function app$main$data$style_dictionary$sd_token_name(sd_token){
return sd_token.original.name;
});
app.main.data.style_dictionary.sd_token_uuid = (function app$main$data$style_dictionary$sd_token_uuid(sd_token){
return cljs.core.uuid(sd_token.original.id.uuid);
});
app.main.data.style_dictionary.resolve_tokens = (function app$main$data$style_dictionary$resolve_tokens(tokens){
var tokens_tree = app.common.types.tokens_lib.tokens_tree(tokens);
return app.main.data.style_dictionary.resolve_tokens_tree.cljs$core$IFn$_invoke$arity$2(tokens_tree,(function (p1__72046_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(tokens,app.main.data.style_dictionary.sd_token_name(p1__72046_SHARP_));
}));
});
/**
 * Interactive check of resolving tokens.
 *   Uses a ids map to backtrace the original token from the resolved
 *   StyleDictionary token.
 * 
 *   We have to pass in all tokens from all sets in the entire library to
 *   style dictionary so we know if references are missing / to resolve
 *   them and possibly show interactive previews (in the tokens form) to
 *   the user.
 * 
 *   Since we're using the :name path as the identifier we might be
 *   throwing away or overriding tokens in the tree that we pass to
 *   StyleDictionary.
 * 
 *   So to get back the original token from the resolved sd-token (see my
 *   updates for what an sd-token is) we include a temporary :id for the
 *   token that we pass to StyleDictionary, this way after the resolving
 *   computation we can restore any token, even clashing ones with the
 *   same :name path by just looking up that :id in the ids map.
 */
app.main.data.style_dictionary.resolve_tokens_interactive = (function app$main$data$style_dictionary$resolve_tokens_interactive(tokens){
var map__72048 = app.common.types.tokens_lib.backtrace_tokens_tree(tokens);
var map__72048__$1 = cljs.core.__destructure_map(map__72048);
var tokens_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72048__$1,new cljs.core.Keyword(null,"tokens-tree","tokens-tree",-1251912938));
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72048__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
return app.main.data.style_dictionary.resolve_tokens_tree.cljs$core$IFn$_invoke$arity$2(tokens_tree,(function (p1__72047_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(ids,app.main.data.style_dictionary.sd_token_uuid(p1__72047_SHARP_));
}));
});
app.main.data.style_dictionary.resolve_tokens_with_verbose_errors = (function app$main$data$style_dictionary$resolve_tokens_with_verbose_errors(tokens){
return app.main.data.style_dictionary.resolve_tokens_tree.cljs$core$IFn$_invoke$arity$3(app.common.types.tokens_lib.tokens_tree(tokens),(function (p1__72052_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(tokens,app.main.data.style_dictionary.sd_token_name(p1__72052_SHARP_));
}),(new app.main.data.style_dictionary.StyleDictionary(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.main.data.style_dictionary.default_config,new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbosity","verbosity",-780202586),"verbose"], null)))));
});
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.data !== 'undefined') && (typeof app.main.data.style_dictionary !== 'undefined') && (typeof app.main.data.style_dictionary._BANG_tokens_cache !== 'undefined')){
} else {
app.main.data.style_dictionary._BANG_tokens_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * The StyleDictionary process function is async, so we can't use
 *   resolved values directly.
 * 
 *   This hook will return the unresolved tokens as state until they are
 *   processed, then the state will be updated with the resolved tokens.
 */
app.main.data.style_dictionary.use_resolved_tokens = (function app$main$data$style_dictionary$use_resolved_tokens(var_args){
var args__5755__auto__ = [];
var len__5749__auto___72163 = arguments.length;
var i__5750__auto___72164 = (0);
while(true){
if((i__5750__auto___72164 < len__5749__auto___72163)){
args__5755__auto__.push((arguments[i__5750__auto___72164]));

var G__72165 = (i__5750__auto___72164 + (1));
i__5750__auto___72164 = G__72165;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.main.data.style_dictionary.use_resolved_tokens.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.main.data.style_dictionary.use_resolved_tokens.cljs$core$IFn$_invoke$arity$variadic = (function (tokens,p__72067){
var map__72068 = p__72067;
var map__72068__$1 = cljs.core.__destructure_map(map__72068);
var config = map__72068__$1;
var cache_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72068__$1,new cljs.core.Keyword(null,"cache-atom","cache-atom",-1015427733),app.main.data.style_dictionary._BANG_tokens_cache);
var interactive_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72068__$1,new cljs.core.Keyword(null,"interactive?","interactive?",367617676));
var tokens_state = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache_atom),tokens));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tokens),rumext.v2.adapt(config)],(function (){
if(cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"tokenscript","tokenscript",-1399248500))){
return null;
} else {
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache_atom),tokens);
if((tokens == null)){
return null;
} else {
if(beicon.v2.core.observable_QMARK_(cached)){
return beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2(cached,(function (p1__72056_SHARP_){
return cljs.core.reset_BANG_(tokens_state,p1__72056_SHARP_);
}));
} else {
if((!((cached == null)))){
return cljs.core.reset_BANG_(tokens_state,cached);
} else {
var resolved_tokens_s = (cljs.core.truth_(interactive_QMARK_)?app.main.data.style_dictionary.resolve_tokens_interactive(tokens):app.main.data.style_dictionary.resolve_tokens(tokens));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache_atom,cljs.core.assoc,tokens,resolved_tokens_s);

return beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2(resolved_tokens_s,(function (resolved_tokens){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache_atom,cljs.core.assoc,tokens,resolved_tokens);

return cljs.core.reset_BANG_(tokens_state,resolved_tokens);
}));

}
}
}
}
}));

if(cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"tokenscript","tokenscript",-1399248500))){
return app.main.data.tokenscript.resolve_tokens(tokens);
} else {
return cljs.core.deref(tokens_state);
}
}));

(app.main.data.style_dictionary.use_resolved_tokens.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.main.data.style_dictionary.use_resolved_tokens.cljs$lang$applyTo = (function (seq72057){
var G__72058 = cljs.core.first(seq72057);
var seq72057__$1 = cljs.core.next(seq72057);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72058,seq72057__$1);
}));

/**
 * This hook will return the unresolved tokens as state until they are
 *   processed, then the state will be updated with the resolved tokens.
 * 
 *   This is a cache-less, simplified version of use-resolved-tokens
 *   hook.
 */
app.main.data.style_dictionary.use_resolved_tokens_STAR_ = (function app$main$data$style_dictionary$use_resolved_tokens_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___72174 = arguments.length;
var i__5750__auto___72175 = (0);
while(true){
if((i__5750__auto___72175 < len__5749__auto___72174)){
args__5755__auto__.push((arguments[i__5750__auto___72175]));

var G__72176 = (i__5750__auto___72175 + (1));
i__5750__auto___72175 = G__72176;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.main.data.style_dictionary.use_resolved_tokens_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.main.data.style_dictionary.use_resolved_tokens_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (tokens,p__72093){
var map__72095 = p__72093;
var map__72095__$1 = cljs.core.__destructure_map(map__72095);
var interactive_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72095__$1,new cljs.core.Keyword(null,"interactive?","interactive?",367617676));
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(tokens);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tokens),rumext.v2.adapt(interactive_QMARK_)],(function (){
if(cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"tokenscript","tokenscript",-1399248500))){
return null;
} else {
if(cljs.core.seq(tokens)){
var tpoint = app.common.time.tpoint_ms();
var tokens_s = (cljs.core.truth_(interactive_QMARK_)?app.main.data.style_dictionary.resolve_tokens_interactive(tokens):app.main.data.style_dictionary.resolve_tokens(tokens));
return beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2(tokens_s,(function (resolved_tokens){
var elapsed = tpoint();
if(app.common.logging.enabled_QMARK_("app.main.data.style-dictionary",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"use-resolved-tokens*"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),elapsed], null)], null);
}),null)),null,null,"app.main.data.style-dictionary",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.reset_BANG_(state_STAR_,resolved_tokens);
}));
} else {
return cljs.core.reset_BANG_(state_STAR_,tokens);
}
}
}));

if(cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"tokenscript","tokenscript",-1399248500))){
return app.main.data.tokenscript.resolve_tokens(tokens);
} else {
return cljs.core.deref(state_STAR_);
}
}));

(app.main.data.style_dictionary.use_resolved_tokens_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.main.data.style_dictionary.use_resolved_tokens_STAR_.cljs$lang$applyTo = (function (seq72085){
var G__72086 = cljs.core.first(seq72085);
var seq72085__$1 = cljs.core.next(seq72085);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72086,seq72085__$1);
}));


//# sourceMappingURL=app.main.data.style_dictionary.js.map
