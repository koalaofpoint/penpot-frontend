import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.schema.js";
import "./app.common.types.token.js";
import "./app.common.types.tokens_lib.js";
import "./app.main.data.workspace.tokens.errors.js";
import "./app.main.ui.components.radio_buttons.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.workspace.tokens.management.forms.controls.js";
import "./app.main.ui.workspace.tokens.management.forms.generic_form.js";
import "./app.main.ui.workspace.tokens.management.forms.validators.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.management.forms.typography');
/**
 * Check token when any of the attributes in token value have a self-reference.
 */
app.main.ui.workspace.tokens.management.forms.typography.check_typography_token_self_reference = (function app$main$ui$workspace$tokens$management$forms$typography$check_typography_token_self_reference(token){
var token_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token);
var token_values = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.some((function (p__56527){
var vec__56528 = p__56527;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56528,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56528,(1),null);
var temp__5825__auto__ = (function (){var G__56531 = k;
var G__56531__$1 = (((G__56531 instanceof cljs.core.Keyword))?G__56531.fqn:null);
switch (G__56531__$1) {
case "font-family":
return app.main.ui.workspace.tokens.management.forms.validators.check_coll_self_reference(token_name,v);

break;
default:
return app.main.ui.workspace.tokens.management.forms.validators.check_self_reference(token_name,v);

}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var err = temp__5825__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(err,new cljs.core.Keyword(null,"typography-key","typography-key",64987307),k);
} else {
return null;
}
}),token_values);
});
app.main.ui.workspace.tokens.management.forms.typography.check_empty_typography_token = (function app$main$ui$workspace$tokens$management$forms$typography$check_empty_typography_token(token){
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(token))){
return app.main.data.workspace.tokens.errors.get_error_code(new cljs.core.Keyword("error.token","empty-input","error.token/empty-input",-1506425915));
} else {
return null;
}
});
app.main.ui.workspace.tokens.management.forms.typography.validate_typography_token = (function app$main$ui$workspace$tokens$management$forms$typography$validate_typography_token(p__56535){
var map__56536 = p__56535;
var map__56536__$1 = cljs.core.__destructure_map(map__56536);
var props = map__56536__$1;
var token_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56536__$1,new cljs.core.Keyword(null,"token-value","token-value",1433419008));
if((token_value == null)){
return beicon.v2.core.of(null);
} else {
if(app.common.types.token.composite_token_reference_QMARK_(token_value)){
return app.main.ui.workspace.tokens.management.forms.validators.default_validate_token(props);
} else {
return app.main.ui.workspace.tokens.management.forms.validators.default_validate_token(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"token-value","token-value",1433419008),(function (v){
return app.common.data.update_when((function (){var or__5025__auto__ = v;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"font-family","font-family",-667419874),(function (p1__56534_SHARP_){
if(typeof p1__56534_SHARP_ === 'string'){
return app.common.types.token.split_font_family(p1__56534_SHARP_);
} else {
return p1__56534_SHARP_;
}
}));
})),new cljs.core.Keyword(null,"validators","validators",-1973346672),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.ui.workspace.tokens.management.forms.typography.check_empty_typography_token,app.main.ui.workspace.tokens.management.forms.typography.check_typography_token_self_reference], null)));

}
}
});
app.main.ui.workspace.tokens.management.forms.typography.composite_form_STAR_ = (function app$main$ui$workspace$tokens$management$forms$typography$composite_form_STAR_(props_56538){
var token = props_56538.token;
var tokens = props_56538.tokens;
var props = props_56538;
var letter_spacing_sub_token = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token)],(function (){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(temp__5823__auto__)){
var value = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"value","value",305978217),app.common.types.token.join_font_family(cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767)))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767)], null);
}
}));
var font_family_sub_token = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token)],(function (){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(temp__5823__auto__)){
var value = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"font-family","font-family",-667419874))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"font-family","font-family",-667419874)], null);
}
}));
var font_size_sub_token = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token)],(function (){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(temp__5823__auto__)){
var value = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"font-size","font-size",-1847940346))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"font-size","font-size",-1847940346)], null);
}
}));
var font_weight_sub_token = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token)],(function (){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(temp__5823__auto__)){
var value = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583)], null);
}
}));
var line_height_sub_token = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token)],(function (){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(temp__5823__auto__)){
var value = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"line-height","line-height",1870784992))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097)], null);
}
}));
var text_case_sub_token = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token)],(function (){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(temp__5823__auto__)){
var value = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text-case","text-case",1049419399),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"text-case","text-case",1049419399))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text-case","text-case",1049419399)], null);
}
}));
var text_decoration_sub_token = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token)],(function (){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(temp__5823__auto__)){
var value = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207)], null);
}
}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_typography__input-row",'children':rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.controls.composite_fonts_combobox_STAR_,{'icon':app.main.ui.ds.foundations.assets.icon.text_font_family,'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.token-font-family-value-enter"),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.token-font-family-value"),'name':new cljs.core.Keyword(null,"font-family","font-family",-667419874),'token':font_family_sub_token,'tokens':tokens})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_typography__input-row",'children':rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.controls.input_composite_STAR_,{'aria-label':"Font Size",'icon':app.main.ui.ds.foundations.assets.icon.text_font_size,'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.font-size-value-enter"),'name':new cljs.core.Keyword(null,"font-size","font-size",-1847940346),'token':font_size_sub_token,'tokens':tokens})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_typography__input-row",'children':rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.controls.input_composite_STAR_,{'aria-label':"Font Weight",'icon':app.main.ui.ds.foundations.assets.icon.text_font_weight,'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.font-weight-value-enter"),'name':new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),'token':font_weight_sub_token,'tokens':tokens})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_typography__input-row",'children':rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.controls.input_composite_STAR_,{'aria-label':"Line Height",'icon':app.main.ui.ds.foundations.assets.icon.text_lineheight,'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.line-height-value-enter"),'name':new cljs.core.Keyword(null,"line-height","line-height",1870784992),'token':line_height_sub_token,'tokens':tokens})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_typography__input-row",'children':rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.controls.input_composite_STAR_,{'aria-label':"Letter Spacing",'icon':app.main.ui.ds.foundations.assets.icon.text_letterspacing,'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.letter-spacing-value-enter-composite"),'name':new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),'token':letter_spacing_sub_token,'tokens':tokens})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_typography__input-row",'children':rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.controls.input_composite_STAR_,{'aria-label':"Text Case",'icon':app.main.ui.ds.foundations.assets.icon.text_mixed,'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.text-case-value-enter"),'name':new cljs.core.Keyword(null,"text-case","text-case",1049419399),'token':text_case_sub_token,'tokens':tokens})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_typography__input-row",'children':rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.controls.input_composite_STAR_,{'aria-label':"Text Decoration",'icon':app.main.ui.ds.foundations.assets.icon.text_underlined,'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.text-decoration-value-enter"),'name':new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),'token':text_decoration_sub_token,'tokens':tokens})})]});
});

(app.main.ui.workspace.tokens.management.forms.typography.composite_form_STAR_.displayName = "composite-form*");

app.main.ui.workspace.tokens.management.forms.typography.reference_form_STAR_ = (function app$main$ui$workspace$tokens$management$forms$typography$reference_form_STAR_(props_56539){
var token = props_56539.token;
var tokens = props_56539.tokens;
var props = props_56539;
return rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_typography__input-row",'children':rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.controls.input_composite_STAR_,{'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.reference-composite"),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.reference"),'icon':app.main.ui.ds.foundations.assets.icon.text_typography,'name':new cljs.core.Keyword(null,"reference","reference",-1711695023),'token':token,'tokens':tokens})});
});

(app.main.ui.workspace.tokens.management.forms.typography.reference_form_STAR_.displayName = "reference-form*");

app.main.ui.workspace.tokens.management.forms.typography.tabs_wrapper_STAR_ = (function app$main$ui$workspace$tokens$management$forms$typography$tabs_wrapper_STAR_(props_56540){
var tab = undefined;
var handle_toggle = undefined;
var token = undefined;
var tokens = undefined;
var props = undefined;
var {"token": token, "tokens": tokens, "tab": tab, "handleToggle": handle_toggle, ...props} = props_56540;

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_management_forms_typography__title-bar",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_typography__title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.typography")}),rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'class':"main_ui_workspace_tokens_management_forms_typography__listing-options",'selected':app.common.data.name(tab),'on-change':handle_toggle,'name':"reference-composite-tab",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.layers,'value':"composite",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.individual-tokens"),'id':"composite-opt"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.tokens,'value':"reference",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.use-reference"),'id':"reference-opt"})]})]}),rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_typography__inputs-wrapper",'children':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab,new cljs.core.Keyword(null,"composite","composite",-257118970)))?rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.typography.composite_form_STAR_,{'token':token,'tokens':tokens}):rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.typography.reference_form_STAR_,{'token':token,'tokens':tokens}))})]});
});

(app.main.ui.workspace.tokens.management.forms.typography.tabs_wrapper_STAR_.displayName = "tabs-wrapper*");

app.main.ui.workspace.tokens.management.forms.typography.make_schema = (function app$main$ui$workspace$tokens$management$forms$typography$make_schema(tokens_tree,active_tab){
return app.common.schema.schema(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(255),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__56541_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__56541_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.token-name-length-validation-error"))].join('');
})], null)], null),app.common.schema.update_properties.cljs$core$IFn$_invoke$arity$variadic(app.common.types.token.schema_COLON_token_name,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__56542_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__56542_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.token-name-validation-error"))].join('');
})], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__56543_SHARP_){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.token-name-duplication-validation-error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__56543_SHARP_)], 0));
})], null),(function (p1__56544_SHARP_){
return (!(app.common.types.tokens_lib.token_name_path_exists_QMARK_(p1__56544_SHARP_,tokens_tree)));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-case","text-case",1049419399),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,new cljs.core.Keyword(null,"reference","reference",-1711695023)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reference","reference",-1711695023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),false], null),new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reference","reference",-1711695023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max","max",61366548),(2048),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.field-max-length",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2048)], 0));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","field","error/field",-1330531468),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"reference","reference",-1711695023)], null),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.self-reference");
})], null),(function (p__56545){
var map__56546 = p__56545;
var map__56546__$1 = cljs.core.__destructure_map(map__56546);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56546__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56546__$1,new cljs.core.Keyword(null,"value","value",305978217));
var reference = cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"reference","reference",-1711695023));
if(cljs.core.truth_((function (){var and__5023__auto__ = reference;
if(cljs.core.truth_(and__5023__auto__)){
return name;
} else {
return and__5023__auto__;
}
})())){
return (!(app.common.types.token.token_value_self_reference_QMARK_(name,reference)));
} else {
return true;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","field","error/field",-1330531468),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"line-height","line-height",1870784992)], null),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.composite-line-height-needs-font-size");
})], null),(function (p__56547){
var map__56548 = p__56547;
var map__56548__$1 = cljs.core.__destructure_map(map__56548);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56548__$1,new cljs.core.Keyword(null,"value","value",305978217));
var line_heigh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"line-height","line-height",1870784992));
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
if(cljs.core.truth_((function (){var and__5023__auto__ = line_heigh;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(font_size);
} else {
return and__5023__auto__;
}
})())){
return false;
} else {
return true;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (_){
return "At least one composite field must be set";
}),new cljs.core.Keyword("error","field","error/field",-1330531468),new cljs.core.Keyword(null,"value","value",305978217)], null),(function (attrs){
var result = cljs.core.reduce_kv((function (_,___$1,v){
if(cuerdas.core.empty_QMARK_(v)){
return false;
} else {
return cljs.core.reduced(true);
}
}),false,cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"value","value",305978217)));
return result;
})], null)], null));
});
app.main.ui.workspace.tokens.management.forms.typography.form_STAR_ = (function app$main$ui$workspace$tokens$management$forms$typography$form_STAR_(props_56549){
var token = props_56549.token;
var props = props_56549;
var initial = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token)],(function (){
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(token);
var processed_value = ((typeof value === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reference","reference",-1711695023),value], null):((cljs.core.map_QMARK_(value))?(function (){var value__$1 = (function (){var G__56550 = value;
if(cljs.core.truth_(new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(value))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__56550,new cljs.core.Keyword(null,"font-family","font-family",-667419874),app.common.types.token.join_font_family);
} else {
return G__56550;
}
})();
return cljs.core.select_keys(value__$1,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"text-case","text-case",1049419399),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207)], null));
})():cljs.core.PersistentArrayMap.EMPTY
));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(token,""),new cljs.core.Keyword(null,"value","value",305978217),processed_value,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$2(token,"")], null);
}));
var props__$1 = {...props, 'initial':initial,'makeSchema':app.main.ui.workspace.tokens.management.forms.typography.make_schema,'token':token,'validator':app.main.ui.workspace.tokens.management.forms.typography.validate_typography_token,'valueType':new cljs.core.Keyword(null,"composite","composite",-257118970),'inputComponent':app.main.ui.workspace.tokens.management.forms.typography.tabs_wrapper_STAR_};
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.generic_form.form_STAR_,props__$1);
});

(app.main.ui.workspace.tokens.management.forms.typography.form_STAR_.displayName = "form*");


//# sourceMappingURL=app.main.ui.workspace.tokens.management.forms.typography.js.map
