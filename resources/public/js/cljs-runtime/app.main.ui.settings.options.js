import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.notifications.js";
import "./app.main.data.profile.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.forms.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.theme.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.settings.options');
app.main.ui.settings.options.schema_COLON_options_form = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"OptionsForm"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(20)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(250)], null)], null)], null)], null);
app.main.ui.settings.options.on_success = (function app$main$ui$settings$options$on_success(_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("notifications.profile-saved")));
});
app.main.ui.settings.options.on_submit = (function app$main$ui$settings$options$on_submit(form,_event){
var data = new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.profile.update_profile(data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.profile.persist_profile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),app.main.ui.settings.options.on_success], null)], 0))], 0));
});
app.main.ui.settings.options.options_form = (function app$main$ui$settings$options$options_form(props_66873){
var profile = rumext.v2.deref(app.main.refs.profile);
var initial = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(profile)],(function (){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(profile,new cljs.core.Keyword(null,"lang","lang",-1819677104),(function (p1__66870_SHARP_){
var or__5025__auto__ = p1__66870_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})),new cljs.core.Keyword(null,"theme","theme",-1247880880),(function (p1__66871_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__66871_SHARP_,"default")){
return "dark";
} else {
var or__5025__auto__ = p1__66871_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "dark";
}
}
}));
}));
var form = (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.settings.options.schema_COLON_options_form,new cljs.core.Keyword(null,"initial","initial",1854648214),initial) : app.main.ui.components.forms.use_form.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.settings.options.schema_COLON_options_form,new cljs.core.Keyword(null,"initial","initial",1854648214),initial));
return rumext.v2.jsxs(app.main.ui.components.forms.form,{'class':"main_ui_settings_options__options-form",'on-submit':app.main.ui.settings.options.on_submit,'form':form,'children':[rumext.v2.jsx("h3",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.language")}),rumext.v2.jsx("div",{'className':"main_ui_settings_options__fields-row",'children':rumext.v2.jsx(app.main.ui.components.forms.select,{'options':cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Auto (browser)",new cljs.core.Keyword(null,"value","value",305978217),""], null)], null),app.util.i18n.supported_locales),'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.select-ui-language"),'default':"",'name':new cljs.core.Keyword(null,"lang","lang",-1819677104),'data-testid':"setting-lang"})}),rumext.v2.jsx("h3",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.theme-change")}),rumext.v2.jsx("div",{'className':"main_ui_settings_options__fields-row",'children':rumext.v2.jsx(app.main.ui.components.forms.select,{'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.select-ui-theme"),'name':new cljs.core.Keyword(null,"theme","theme",-1247880880),'default':"dark",'options':new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.select-ui-theme.dark"),new cljs.core.Keyword(null,"value","value",305978217),"dark"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.select-ui-theme.light"),new cljs.core.Keyword(null,"value","value",305978217),"light"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.select-ui-theme.system"),new cljs.core.Keyword(null,"value","value",305978217),"system"], null)], null),'data-testid':"setting-theme"})}),rumext.v2.jsx(app.main.ui.components.forms.submit_button_STAR_,{'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.update-settings"),'data-testid':"submit-lang-change",'className':"main_ui_settings_options__btn-primary"})]});
});

(app.main.ui.settings.options.options_form.displayName = "options-form");

app.main.ui.settings.options.options_page = (function app$main$ui$settings$options$options_page(props_66876){
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
return app.util.dom.set_html_title(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("title.settings.options"));
}));

return rumext.v2.jsx("div",{'className':"main_ui_settings_options__dashboard-settings",'children':rumext.v2.jsxs("div",{'data-testid':"settings-form",'className':"main_ui_settings_options__form-container",'children':[rumext.v2.jsx("h2",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.settings")}),rumext.v2.jsx(app.main.ui.settings.options.options_form,{})]})});
});

(app.main.ui.settings.options.options_page.displayName = "options-page");


//# sourceMappingURL=app.main.ui.settings.options.js.map
