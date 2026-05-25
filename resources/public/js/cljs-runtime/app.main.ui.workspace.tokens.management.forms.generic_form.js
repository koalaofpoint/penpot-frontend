import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.files.tokens.js";
import "./app.common.schema.js";
import "./app.common.types.tokens_lib.js";
import "./app.main.constants.js";
import "./app.main.data.helpers.js";
import "./app.main.data.modal.js";
import "./app.main.data.workspace.tokens.application.js";
import "./app.main.data.workspace.tokens.errors.js";
import "./app.main.data.workspace.tokens.library_edit.js";
import "./app.main.data.workspace.tokens.propagation.js";
import "./app.main.data.workspace.tokens.remapping.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.ds.buttons.button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.foundations.typography.heading.js";
import "./app.main.ui.forms.js";
import "./app.main.ui.workspace.tokens.management.forms.controls.js";
import "./app.main.ui.workspace.tokens.management.forms.validators.js";
import "./app.util.dom.js";
import "./app.util.forms.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.management.forms.generic_form');
app.main.ui.workspace.tokens.management.forms.generic_form.get_value_for_validator = (function app$main$ui$workspace$tokens$management$forms$generic_form$get_value_for_validator(active_tab,value,value_subfield,value_type){
var G__56487 = value_type;
var G__56487__$1 = (((G__56487 instanceof cljs.core.Keyword))?G__56487.fqn:null);
switch (G__56487__$1) {
case "indexed":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,new cljs.core.Keyword(null,"reference","reference",-1711695023))){
return new cljs.core.Keyword(null,"reference","reference",-1711695023).cljs$core$IFn$_invoke$arity$1(value);
} else {
return (value_subfield.cljs$core$IFn$_invoke$arity$1 ? value_subfield.cljs$core$IFn$_invoke$arity$1(value) : value_subfield.call(null,value));
}

break;
case "composite":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,new cljs.core.Keyword(null,"reference","reference",-1711695023))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"reference","reference",-1711695023));
} else {
return value;
}

break;
default:
return value;

}
});
app.main.ui.workspace.tokens.management.forms.generic_form.form_STAR_ = (function app$main$ui$workspace$tokens$management$forms$generic_form$form_STAR_(props_56489){
var is_create = props_56489.isCreate;
var value_type = props_56489.valueType;
var make_schema = props_56489.makeSchema;
var validator = props_56489.validator;
var input_value_placeholder = props_56489.inputValuePlaceholder;
var tokens_tree_in_selected_set = props_56489.tokensTreeInSelectedSet;
var selected_token_set_id = props_56489.selectedTokenSetId;
var input_component = props_56489.inputComponent;
var token = props_56489.token;
var token_type = props_56489.tokenType;
var value_subfield = props_56489.valueSubfield;
var initial = props_56489.initial;
var action = props_56489.action;
var props = props_56489;
var make_schema__$1 = (function (){var or__5025__auto__ = make_schema;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (function (p1__56488_SHARP_){
return app.common.schema.dissoc_key(app.common.files.tokens.make_token_schema(p1__56488_SHARP_,token_type),new cljs.core.Keyword(null,"id","id",-1388402092));
});
}
})();
var input_component__$1 = (function (){var or__5025__auto__ = input_component;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.ui.workspace.tokens.management.forms.controls.input_STAR_;
}
})();
var validate_token = (function (){var or__5025__auto__ = validator;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.ui.workspace.tokens.management.forms.validators.default_validate_token;
}
})();
var active_tab_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
if(cljs.core.truth_(app.common.files.tokens.is_reference_QMARK_(token))){
return new cljs.core.Keyword(null,"reference","reference",-1711695023);
} else {
return new cljs.core.Keyword(null,"composite","composite",-257118970);
}
}));
var active_tab = cljs.core.deref(active_tab_STAR_);
var token__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token)],(function (){
var or__5025__auto__ = token;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),token_type], null);
}
}));
var token_properties = app.main.data.workspace.tokens.application.get_token_properties(token__$1);
var token_title = cuerdas.core.lower(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(token_properties));
var tokens = rumext.v2.deref(app.main.refs.workspace_all_tokens_map);
var tokens_in_selected_set = rumext.v2.deref(app.main.refs.workspace_all_tokens_in_selected_set);
var tokens__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tokens),rumext.v2.adapt(tokens_in_selected_set),rumext.v2.adapt(token__$1)],(function (){
var G__56490 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tokens,tokens_in_selected_set], 0));
if(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token__$1);
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(token__$1);
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56490,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token__$1),token__$1);
} else {
return G__56490;
}
}));
var schema = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tokens_tree_in_selected_set),rumext.v2.adapt(active_tab)],(function (){
return (make_schema__$1.cljs$core$IFn$_invoke$arity$2 ? make_schema__$1.cljs$core$IFn$_invoke$arity$2(tokens_tree_in_selected_set,active_tab) : make_schema__$1.call(null,tokens_tree_in_selected_set,active_tab));
}));
var initial__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token__$1),rumext.v2.adapt(initial)],(function (){
var or__5025__auto__ = initial;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),token_type,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(token__$1,""),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$2(token__$1,""),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$2(token__$1,"")], null);
}
}));
var form = app.util.forms.use_form.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"initial","initial",1854648214),initial__$1], 0));
var on_toggle_tab = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(form)],(function (new_tab){
var new_tab__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_tab);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_tab__$1,new cljs.core.Keyword(null,"reference","reference",-1711695023))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-errors","async-errors",-1865115559),new cljs.core.Keyword(null,"reference","reference",-1711695023)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Need valid reference"], null));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update,new cljs.core.Keyword(null,"async-errors","async-errors",-1865115559),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reference","reference",-1711695023)], 0));
}

return cljs.core.reset_BANG_(active_tab_STAR_,new_tab__$1);
}));
var on_cancel = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (e){
app.util.dom.prevent_default(e);

return app.main.data.modal.hide_BANG_();
}));
var on_delete_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_token_set_id),rumext.v2.adapt(token__$1)],(function (e){
app.util.dom.prevent_default(e);

app.main.data.modal.hide_BANG_();

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.delete_token(selected_token_set_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token__$1)));
}));
var handle_key_down_delete = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_delete_token)],(function (e){
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.keyboard.enter_QMARK_(e);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.keyboard.space_QMARK_(e);
}
})())){
return (on_delete_token.cljs$core$IFn$_invoke$arity$1 ? on_delete_token.cljs$core$IFn$_invoke$arity$1(e) : on_delete_token.call(null,e));
} else {
return null;
}
}));
var handle_key_down_cancel = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_cancel)],(function (e){
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.keyboard.enter_QMARK_(e);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.keyboard.space_QMARK_(e);
}
})())){
return (on_cancel.cljs$core$IFn$_invoke$arity$1 ? on_cancel.cljs$core$IFn$_invoke$arity$1(e) : on_cancel.call(null,e));
} else {
return null;
}
}));
var on_remap_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token__$1)],(function (valid_token,name,old_name,description){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.tokens.library_edit.update_token.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token__$1),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(valid_token),new cljs.core.Keyword(null,"description","description",-1428560544),description], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.tokens.remapping.remap_tokens(old_name,name),app.main.data.workspace.tokens.propagation.propagate_workspace_tokens(),app.main.data.modal.hide_BANG_()], 0));
}));
var on_rename_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token__$1)],(function (valid_token,name,description){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.tokens.library_edit.update_token.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token__$1),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(valid_token),new cljs.core.Keyword(null,"description","description",-1428560544),description], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.hide_BANG_()], 0));
}));
var on_submit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(validate_token),rumext.v2.adapt(token__$1),rumext.v2.adapt(tokens__$1),rumext.v2.adapt(token_type),rumext.v2.adapt(value_subfield),rumext.v2.adapt(value_type),rumext.v2.adapt(active_tab),rumext.v2.adapt(on_remap_token),rumext.v2.adapt(on_rename_token),rumext.v2.adapt(is_create)],(function (form__$1,_event){
var name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clean-data","clean-data",1601974651),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var path = [app.common.data.name(token_type),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
var description = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clean-data","clean-data",1601974651),new cljs.core.Keyword(null,"description","description",-1428560544)], null));
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clean-data","clean-data",1601974651),new cljs.core.Keyword(null,"value","value",305978217)], null));
var value_for_validation = app.main.ui.workspace.tokens.management.forms.generic_form.get_value_for_validator(active_tab,value,value_subfield,value_type);
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((function (valid_token){
var state = cljs.core.deref(app.main.store.state);
var file_data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var old_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token__$1);
var is_rename = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,"edit")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(name,old_name)));
var references_count = app.main.data.workspace.tokens.remapping.count_token_references(file_data,old_name);
var on_remap = (function (){
return (on_remap_token.cljs$core$IFn$_invoke$arity$4 ? on_remap_token.cljs$core$IFn$_invoke$arity$4(valid_token,name,old_name,description) : on_remap_token.call(null,valid_token,name,old_name,description));
});
var on_rename = (function (){
return (on_rename_token.cljs$core$IFn$_invoke$arity$3 ? on_rename_token.cljs$core$IFn$_invoke$arity$3(valid_token,name,description) : on_rename_token.call(null,valid_token,name,description));
});
if(((is_rename) && ((references_count > (0))))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tokens","remapping-confirmation","tokens/remapping-confirmation",-1629837152),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"old-token-name","old-token-name",-978310636),old_name,new cljs.core.Keyword(null,"new-token-name","new-token-name",554026608),name,new cljs.core.Keyword(null,"references-count","references-count",403887736),references_count,new cljs.core.Keyword(null,"on-remap","on-remap",143137190),on_remap,new cljs.core.Keyword(null,"on-rename","on-rename",2102721909),on_rename], null)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(is_create)?app.main.data.workspace.tokens.library_edit.create_token.cljs$core$IFn$_invoke$arity$1(app.common.types.tokens_lib.make_token.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"type","type",1174270348),token_type,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(valid_token),new cljs.core.Keyword(null,"description","description",-1428560544),description], null)], 0))):app.main.data.workspace.tokens.library_edit.update_token.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token__$1),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(valid_token),new cljs.core.Keyword(null,"description","description",-1428560544),description], null))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.tokens.library_edit.toggle_token_path(path),app.main.data.workspace.tokens.propagation.propagate_workspace_tokens(),app.main.data.modal.hide_BANG_()], 0));
}
}),(function (p__56491){
var map__56492 = p__56491;
var map__56492__$1 = cljs.core.__destructure_map(map__56492);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56492__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var error_messages = app.main.data.workspace.tokens.errors.humanize_errors(errors);
var error_message = cljs.core.first(error_messages);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),error_message], null));
}),(function (){var G__56493 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"token-value","token-value",1433419008),value_for_validation,new cljs.core.Keyword(null,"token-name","token-name",1766556933),name,new cljs.core.Keyword(null,"token-description","token-description",-1559156482),description,new cljs.core.Keyword(null,"prev-token","prev-token",2072559436),token__$1,new cljs.core.Keyword(null,"tokens","tokens",-818939304),tokens__$1], null);
return (validate_token.cljs$core$IFn$_invoke$arity$1 ? validate_token.cljs$core$IFn$_invoke$arity$1(G__56493) : validate_token.call(null,G__56493));
})());
}));
return rumext.v2.jsx(app.main.ui.forms.form_STAR_,{'className':"main_ui_workspace_tokens_management_forms_generic_form__form-wrapper",'form':form,'onSubmit':on_submit,'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_management_forms_generic_form__token-rows",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.typography.heading.heading_STAR_,{'level':(2),'typography':"headline-medium",'className':"main_ui_workspace_tokens_management_forms_generic_form__form-modal-title",'children':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,"edit"))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.edit-token",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([token_type], 0)):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.create-token",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([token_type], 0)))}),rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_generic_form__input-row",'children':rumext.v2.jsx(app.main.ui.forms.form_input_STAR_,{'id':"token-name",'name':new cljs.core.Keyword(null,"name","name",1843675177),'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.token-name"),'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.enter-token-name",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([token_title], 0)),'maxLength':app.main.constants.max_input_length,'variant':"comfortable",'trim':true,'autoFocus':true})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_generic_form__input-row",'children':(function (){var G__56494 = value_type;
var G__56494__$1 = (((G__56494 instanceof cljs.core.Keyword))?G__56494.fqn:null);
switch (G__56494__$1) {
case "indexed":
return rumext.v2.jsx(input_component__$1,{'token':token__$1,'tokens':tokens__$1,'tab':active_tab,'valueSubfield':value_subfield,'handleToggle':on_toggle_tab});

break;
case "composite":
return rumext.v2.jsx(input_component__$1,{'token':token__$1,'tokens':tokens__$1,'tab':active_tab,'handleToggle':on_toggle_tab});

break;
default:
return rumext.v2.jsx(input_component__$1,{'placeholder':(function (){var or__5025__auto__ = input_value_placeholder;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.token-value-enter");
}
})(),'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.token-value"),'name':new cljs.core.Keyword(null,"value","value",305978217),'token':token__$1,'tokens':tokens__$1});

}
})()}),rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_generic_form__input-row",'children':rumext.v2.jsx(app.main.ui.forms.form_input_STAR_,{'id':"token-description",'name':new cljs.core.Keyword(null,"description","description",-1428560544),'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.token-description"),'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.token-description"),'maxLength':app.main.constants.max_input_length,'variant':"comfortable",'isOptional':true})}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_management_forms_generic_form__button-row"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,"edit"))?"main_ui_workspace_tokens_management_forms_generic_form__with-delete":""),'children':[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,"edit"))?rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'onClick':on_delete_token,'onKeyDown':handle_key_down_delete,'className':"main_ui_workspace_tokens_management_forms_generic_form__delete-btn",'type':"button",'icon':app.main.ui.ds.foundations.assets.icon.delete$,'variant':"secondary",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.delete")}):null),rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'onClick':on_cancel,'onKeyDown':handle_key_down_cancel,'type':"button",'id':"token-modal-cancel",'variant':"secondary",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.cancel")}),rumext.v2.jsx(app.main.ui.forms.form_submit_STAR_,{'variant':"primary",'onSubmit':on_submit,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.save")})]})]})});
});

(app.main.ui.workspace.tokens.management.forms.generic_form.form_STAR_.displayName = "form*");


//# sourceMappingURL=app.main.ui.workspace.tokens.management.forms.generic_form.js.map
