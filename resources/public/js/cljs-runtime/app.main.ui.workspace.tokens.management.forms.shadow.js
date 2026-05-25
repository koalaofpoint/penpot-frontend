import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.schema.js";
import "./app.common.types.token.js";
import "./app.common.types.tokens_lib.js";
import "./app.main.data.workspace.tokens.errors.js";
import "./app.main.ui.components.radio_buttons.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.forms.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.workspace.tokens.management.forms.controls.js";
import "./app.main.ui.workspace.tokens.management.forms.generic_form.js";
import "./app.main.ui.workspace.tokens.management.forms.validators.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.management.forms.shadow');
/**
 * Check token when any of the attributes in a shadow's value have a self-reference.
 */
app.main.ui.workspace.tokens.management.forms.shadow.check_shadow_token_self_reference = (function app$main$ui$workspace$tokens$management$forms$shadow$check_shadow_token_self_reference(token){
var token_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token);
var shadow_values = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.some((function (p__56501){
var vec__56502 = p__56501;
var shadow_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56502,(0),null);
var shadow_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56502,(1),null);
return cljs.core.some((function (p__56505){
var vec__56506 = p__56505;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56506,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56506,(1),null);
var temp__5825__auto__ = app.main.ui.workspace.tokens.management.forms.validators.check_self_reference(token_name,v);
if(cljs.core.truth_(temp__5825__auto__)){
var err = temp__5825__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(err,new cljs.core.Keyword(null,"shadow-key","shadow-key",-1799237015),k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shadow-index","shadow-index",-1389271741),shadow_idx], 0));
} else {
return null;
}
}),shadow_map);
}),app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(shadow_values));
});
app.main.ui.workspace.tokens.management.forms.shadow.check_empty_shadow_token = (function app$main$ui$workspace$tokens$management$forms$shadow$check_empty_shadow_token(token){
if(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(token));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.some((function (shadow__$1){
return cljs.core.not_every_QMARK_((function (p1__56509_SHARP_){
return cljs.core.contains_QMARK_(shadow__$1,p1__56509_SHARP_);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"spread","spread",862337191),new cljs.core.Keyword(null,"color","color",1011675173)], null));
}),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(token));
}
})())){
return app.main.data.workspace.tokens.errors.get_error_code(new cljs.core.Keyword("error.token","empty-input","error.token/empty-input",-1506425915));
} else {
return null;
}
});
app.main.ui.workspace.tokens.management.forms.shadow.validate_shadow_token = (function app$main$ui$workspace$tokens$management$forms$shadow$validate_shadow_token(p__56511){
var map__56512 = p__56511;
var map__56512__$1 = cljs.core.__destructure_map(map__56512);
var params = map__56512__$1;
var token_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56512__$1,new cljs.core.Keyword(null,"token-value","token-value",1433419008));
if((token_value == null)){
return beicon.v2.core.of(null);
} else {
if(app.common.types.token.composite_token_reference_QMARK_(token_value)){
return app.main.ui.workspace.tokens.management.forms.validators.default_validate_token(params);
} else {
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"token-value","token-value",1433419008),(function (value){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (shadow__$1){
return app.common.data.update_when(shadow__$1,new cljs.core.Keyword(null,"inset","inset",-396367740),(function (p1__56510_SHARP_){
if(cljs.core.boolean_QMARK_(p1__56510_SHARP_)){
return p1__56510_SHARP_;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",p1__56510_SHARP_)){
return true;
} else {
return false;

}
}
}));
}),(function (){var or__5025__auto__ = value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
})),new cljs.core.Keyword(null,"validators","validators",-1973346672),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.ui.workspace.tokens.management.forms.shadow.check_empty_shadow_token,app.main.ui.workspace.tokens.management.forms.shadow.check_shadow_token_self_reference], null));
return app.main.ui.workspace.tokens.management.forms.validators.default_validate_token(params__$1);

}
}
});
app.main.ui.workspace.tokens.management.forms.shadow.default_token_shadow = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),"4",new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),"4",new cljs.core.Keyword(null,"blur","blur",-453500461),"4",new cljs.core.Keyword(null,"spread","spread",862337191),"0"], null);
app.main.ui.workspace.tokens.management.forms.shadow.get_subtoken = (function app$main$ui$workspace$tokens$management$forms$shadow$get_subtoken(token,index,prop,value_subfield){
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),value_subfield,index,prop], null));
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop,new cljs.core.Keyword(null,"color","color",1011675173)))?new cljs.core.Keyword(null,"color","color",1011675173):new cljs.core.Keyword(null,"dimensions","dimensions",-254818097)),new cljs.core.Keyword(null,"value","value",305978217),value], null));
});
app.main.ui.workspace.tokens.management.forms.shadow.shadow_formset_STAR_ = (function app$main$ui$workspace$tokens$management$forms$shadow$shadow_formset_STAR_(props_56513){
var index = props_56513.index;
var show_button = props_56513.showButton;
var token = props_56513.token;
var remove_shadow_block = props_56513.removeShadowBlock;
var value_subfield = props_56513.valueSubfield;
var tokens = props_56513.tokens;
var props = props_56513;
var inset_token = app.main.ui.workspace.tokens.management.forms.shadow.get_subtoken(token,index,new cljs.core.Keyword(null,"inset","inset",-396367740),value_subfield);
var inset_token__$1 = app.main.ui.hooks.use_equal_memo(inset_token);
var color_token = app.main.ui.workspace.tokens.management.forms.shadow.get_subtoken(token,index,new cljs.core.Keyword(null,"color","color",1011675173),value_subfield);
var color_token__$1 = app.main.ui.hooks.use_equal_memo(color_token);
var offset_x_token = app.main.ui.workspace.tokens.management.forms.shadow.get_subtoken(token,index,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),value_subfield);
var offset_x_token__$1 = app.main.ui.hooks.use_equal_memo(offset_x_token);
var offset_y_token = app.main.ui.workspace.tokens.management.forms.shadow.get_subtoken(token,index,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),value_subfield);
var offset_y_token__$1 = app.main.ui.hooks.use_equal_memo(offset_y_token);
var blur_token = app.main.ui.workspace.tokens.management.forms.shadow.get_subtoken(token,index,new cljs.core.Keyword(null,"blur","blur",-453500461),value_subfield);
var blur_token__$1 = app.main.ui.hooks.use_equal_memo(blur_token);
var spread_token = app.main.ui.workspace.tokens.management.forms.shadow.get_subtoken(token,index,new cljs.core.Keyword(null,"spread","spread",862337191),value_subfield);
var spread_token__$1 = app.main.ui.hooks.use_equal_memo(spread_token);
var on_button_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index)],(function (event){
return (remove_shadow_block.cljs$core$IFn$_invoke$arity$2 ? remove_shadow_block.cljs$core$IFn$_invoke$arity$2(index,event) : remove_shadow_block.call(null,index,event));
}));
return rumext.v2.jsxs("div",{'data-testid':["shadow-input-fields-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),'className':"main_ui_workspace_tokens_management_forms_shadow__shadow-block",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_management_forms_shadow__select-wrapper",'children':[rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.controls.select_indexed_STAR_,{'options':new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"drop",new cljs.core.Keyword(null,"label","label",1718410804),"drop shadow",new cljs.core.Keyword(null,"icon","icon",1679606541),app.main.ui.ds.foundations.assets.icon.drop_shadow], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"inner",new cljs.core.Keyword(null,"label","label",1718410804),"inner shadow",new cljs.core.Keyword(null,"icon","icon",1679606541),app.main.ui.ds.foundations.assets.icon.inner_shadow], null)], null),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.shadow-inset"),'token':inset_token__$1,'tokens':tokens,'index':index,'indexedType':value_subfield,'name':new cljs.core.Keyword(null,"inset","inset",-396367740)}),(cljs.core.truth_(show_button)?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'type':"button",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.shadow-remove-shadow"),'onClick':on_button_click,'icon':app.main.ui.ds.foundations.assets.icon.remove}):null)]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_management_forms_shadow__inputs-wrapper",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_shadow__input-row",'children':rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.controls.indexed_color_input_STAR_,{'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.token-value-enter"),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.color"),'name':new cljs.core.Keyword(null,"color","color",1011675173),'token':color_token__$1,'valueSubfield':value_subfield,'index':index,'tokens':tokens})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_shadow__input-row",'children':rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.controls.input_indexed_STAR_,{'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.shadow-x"),'icon':app.main.ui.ds.foundations.assets.icon.character_x,'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.shadow-x"),'name':new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),'token':offset_x_token__$1,'index':index,'valueSubfield':value_subfield,'tokens':tokens})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_shadow__input-row",'children':rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.controls.input_indexed_STAR_,{'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.shadow-y"),'icon':app.main.ui.ds.foundations.assets.icon.character_y,'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.shadow-y"),'name':new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),'token':offset_y_token__$1,'index':index,'valueSubfield':value_subfield,'tokens':tokens})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_shadow__input-row",'children':rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.controls.input_indexed_STAR_,{'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.shadow-blur"),'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.shadow-blur"),'name':new cljs.core.Keyword(null,"blur","blur",-453500461),'slotStart':rumext.v2.jsx("span",{'className':"main_ui_workspace_tokens_management_forms_shadow__visible-label",'children':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.shadow-blur")),":"].join('')}),'token':blur_token__$1,'index':index,'valueSubfield':value_subfield,'tokens':tokens})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_shadow__input-row",'children':rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.controls.input_indexed_STAR_,{'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.shadow-spread"),'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.shadow-spread"),'name':new cljs.core.Keyword(null,"spread","spread",862337191),'slotStart':rumext.v2.jsx("span",{'className':"main_ui_workspace_tokens_management_forms_shadow__visible-label",'children':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.shadow-spread")),":"].join('')}),'token':spread_token__$1,'valueSubfield':value_subfield,'index':index,'tokens':tokens})})]})]});
});

(app.main.ui.workspace.tokens.management.forms.shadow.shadow_formset_STAR_.displayName = "shadow-formset*");

app.main.ui.workspace.tokens.management.forms.shadow.composite_form_STAR_ = (function app$main$ui$workspace$tokens$management$forms$shadow$composite_form_STAR_(props_56514){
var token = props_56514.token;
var remove_shadow_block = props_56514.removeShadowBlock;
var value_subfield = props_56514.valueSubfield;
var tokens = props_56514.tokens;
var props = props_56514;
var form = rumext.v2.use_ctx(app.main.ui.forms.context);
var length = cljs.core.count((function (){var G__56515 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)));
return (value_subfield.cljs$core$IFn$_invoke$arity$1 ? value_subfield.cljs$core$IFn$_invoke$arity$1(G__56515) : value_subfield.call(null,G__56515));
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,index){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.shadow.shadow_formset_STAR_,{'index':index,'token':token,'tokens':tokens,'valueSubfield':value_subfield,'removeShadowBlock':remove_shadow_block,'showButton':(length > (1))},index));

return out_arr__35152__auto__;
}),[],cljs.core.range.cljs$core$IFn$_invoke$arity$1(length));
});

(app.main.ui.workspace.tokens.management.forms.shadow.composite_form_STAR_.displayName = "composite-form*");

app.main.ui.workspace.tokens.management.forms.shadow.reference_form_STAR_ = (function app$main$ui$workspace$tokens$management$forms$shadow$reference_form_STAR_(props_56516){
var token = props_56516.token;
var tokens = props_56516.tokens;
var props = props_56516;
return rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_shadow__input-row-reference",'children':rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.controls.input_composite_STAR_,{'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.reference-composite-shadow"),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.reference"),'icon':app.main.ui.ds.foundations.assets.icon.drop_shadow,'name':new cljs.core.Keyword(null,"reference","reference",-1711695023),'token':token,'tokens':tokens})});
});

(app.main.ui.workspace.tokens.management.forms.shadow.reference_form_STAR_.displayName = "reference-form*");

app.main.ui.workspace.tokens.management.forms.shadow.tabs_wrapper_STAR_ = (function app$main$ui$workspace$tokens$management$forms$shadow$tabs_wrapper_STAR_(props_56518){
var tab = undefined;
var handle_toggle = undefined;
var token = undefined;
var value_subfield = undefined;
var tokens = undefined;
var props = undefined;
var {"token": token, "tokens": tokens, "tab": tab, "handleToggle": handle_toggle, "valueSubfield": value_subfield, ...props} = props_56518;

var form = rumext.v2.use_ctx(app.main.ui.forms.context);
var on_add_shadow_block = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(value_subfield)],(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),value_subfield], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.ui.workspace.tokens.management.forms.shadow.default_token_shadow], 0));
}));
var remove_shadow_block = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(value_subfield)],(function (index,event){
app.util.dom.prevent_default(event);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),value_subfield], null),(function (p1__56517_SHARP_){
return app.common.data.remove_at_index(p1__56517_SHARP_,index);
}));
}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_management_forms_shadow__title-bar",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_shadow__title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.shadow")}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'type':"button",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.shadow-add-shadow"),'onClick':on_add_shadow_block,'icon':app.main.ui.ds.foundations.assets.icon.add}),rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'class':"main_ui_workspace_tokens_management_forms_shadow__listing-options",'selected':app.common.data.name(tab),'on-change':handle_toggle,'name':"reference-composite-tab",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.layers,'value':"composite",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.individual-tokens"),'id':"composite-opt"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.tokens,'value':"reference",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.use-reference"),'id':"reference-opt"})]})]}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab,new cljs.core.Keyword(null,"composite","composite",-257118970)))?rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.shadow.composite_form_STAR_,{'token':token,'tokens':tokens,'removeShadowBlock':remove_shadow_block,'valueSubfield':value_subfield}):rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.shadow.reference_form_STAR_,{'token':token,'tokens':tokens}))]});
});

(app.main.ui.workspace.tokens.management.forms.shadow.tabs_wrapper_STAR_.displayName = "tabs-wrapper*");

app.main.ui.workspace.tokens.management.forms.shadow.make_schema = (function app$main$ui$workspace$tokens$management$forms$shadow$make_schema(tokens_tree,active_tab){
return app.common.schema.schema(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(255),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__56519_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__56519_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.token-name-length-validation-error"))].join('');
})], null)], null),app.common.schema.update_properties.cljs$core$IFn$_invoke$arity$variadic(app.common.types.token.schema_COLON_token_name,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__56520_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__56520_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.token-name-validation-error"))].join('');
})], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p1__56521_SHARP_){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.token-name-duplication-validation-error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__56521_SHARP_)], 0));
})], null),(function (p1__56522_SHARP_){
return (!(app.common.types.tokens_lib.token_name_path_exists_QMARK_(p1__56522_SHARP_,tokens_tree)));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.shadow-token-blur-value-error");
})], null),(function (blur){
var n = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(blur);
return (((n == null)) || ((!((n < (0))))));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spread","spread",862337191),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-result","color-result",-859632008),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","any","app.common.schema/any",-1231442794)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inset","inset",-396367740),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,new cljs.core.Keyword(null,"reference","reference",-1711695023)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reference","reference",-1711695023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),false], null),new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reference","reference",-1711695023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max","max",61366548),(2048),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.field-max-length",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2048)], 0));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","field","error/field",-1330531468),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"reference","reference",-1711695023)], null),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.self-reference");
})], null),(function (p__56523){
var map__56524 = p__56523;
var map__56524__$1 = cljs.core.__destructure_map(map__56524);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56524__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56524__$1,new cljs.core.Keyword(null,"value","value",305978217));
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
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (_){
return "Must be a valid shadow or reference";
}),new cljs.core.Keyword("error","field","error/field",-1330531468),new cljs.core.Keyword(null,"value","value",305978217)], null),(function (p__56525){
var map__56526 = p__56525;
var map__56526__$1 = cljs.core.__destructure_map(map__56526);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56526__$1,new cljs.core.Keyword(null,"value","value",305978217));
var reference = cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"reference","reference",-1711695023));
var ref_valid_QMARK_ = (function (){var and__5023__auto__ = reference;
if(cljs.core.truth_(and__5023__auto__)){
return (!(cuerdas.core.blank_QMARK_(reference)));
} else {
return and__5023__auto__;
}
})();
var shadows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var valid_composite_shadow_QMARK_ = ((cljs.core.seq(shadows)) && (cljs.core.every_QMARK_((function (p__56532){
var map__56533 = p__56532;
var map__56533__$1 = cljs.core.__destructure_map(map__56533);
var offset_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56533__$1,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230));
var offset_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56533__$1,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008));
var blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56533__$1,new cljs.core.Keyword(null,"blur","blur",-453500461));
var spread = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56533__$1,new cljs.core.Keyword(null,"spread","spread",862337191));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56533__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return (((!(cuerdas.core.blank_QMARK_(offset_x)))) && ((((!(cuerdas.core.blank_QMARK_(offset_y)))) && ((((!(cuerdas.core.blank_QMARK_(blur)))) && ((((!(cuerdas.core.blank_QMARK_(spread)))) && ((!(cuerdas.core.blank_QMARK_(color)))))))))));
}),shadows)));
var or__5025__auto__ = ref_valid_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return valid_composite_shadow_QMARK_;
}
})], null)], null));
});
app.main.ui.workspace.tokens.management.forms.shadow.make_default_value = (function app$main$ui$workspace$tokens$management$forms$shadow$make_default_value(value){
if(typeof value === 'string'){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reference","reference",-1711695023),value,new cljs.core.Keyword(null,"shadow","shadow",873231803),cljs.core.PersistentVector.EMPTY], null);
} else {
if(cljs.core.vector_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reference","reference",-1711695023),null,new cljs.core.Keyword(null,"shadow","shadow",873231803),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reference","reference",-1711695023),null,new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.ui.workspace.tokens.management.forms.shadow.default_token_shadow], null)], null);

}
}
});
app.main.ui.workspace.tokens.management.forms.shadow.form_STAR_ = (function app$main$ui$workspace$tokens$management$forms$shadow$form_STAR_(props_56537){
var token = props_56537.token;
var token_type = props_56537.tokenType;
var props = props_56537;
var token__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token)],(function (){
var or__5025__auto__ = token;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(temp__5823__auto__)){
var value = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),token_type,new cljs.core.Keyword(null,"value","value",305978217),app.main.ui.workspace.tokens.management.forms.shadow.make_default_value(value)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),token_type,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reference","reference",-1711695023),null,new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.ui.workspace.tokens.management.forms.shadow.default_token_shadow], null)], null)], null);
}
}
}));
var initial = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token__$1)],(function (){
var raw_value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(token__$1);
var value = app.main.ui.workspace.tokens.management.forms.shadow.make_default_value(raw_value);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(token__$1,""),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$2(token__$1,""),new cljs.core.Keyword(null,"value","value",305978217),value], null);
}));
var props__$1 = {...props, 'token':token__$1,'tokenType':token_type,'initial':initial,'makeSchema':app.main.ui.workspace.tokens.management.forms.shadow.make_schema,'valueType':new cljs.core.Keyword(null,"indexed","indexed",390758624),'valueSubfield':new cljs.core.Keyword(null,"shadow","shadow",873231803),'inputComponent':app.main.ui.workspace.tokens.management.forms.shadow.tabs_wrapper_STAR_,'validator':app.main.ui.workspace.tokens.management.forms.shadow.validate_shadow_token};
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.generic_form.form_STAR_,props__$1);
});

(app.main.ui.workspace.tokens.management.forms.shadow.form_STAR_.displayName = "form*");


//# sourceMappingURL=app.main.ui.workspace.tokens.management.forms.shadow.js.map
