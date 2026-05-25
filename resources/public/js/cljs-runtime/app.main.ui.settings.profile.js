import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.schema.js";
import "./app.config.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.data.profile.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.file_uploader.js";
import "./app.main.ui.components.forms.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.settings.profile');
app.main.ui.settings.profile.schema_COLON_profile_form = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"ProfileForm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fullname","fullname",1638772587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(250)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword("app.common.schema","email","app.common.schema/email",2070921211)], null)], null);
app.main.ui.settings.profile.on_success = (function app$main$ui$settings$profile$on_success(_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("notifications.profile-saved")));
});
app.main.ui.settings.profile.on_submit = (function app$main$ui$settings$profile$on_submit(form,_event){
var data = new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.profile.update_profile(data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.profile.persist_profile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),app.main.ui.settings.profile.on_success], null)], 0))], 0));
});
app.main.ui.settings.profile.profile_form = (function app$main$ui$settings$profile$profile_form(props_66877){
var profile = rumext.v2.deref(app.main.refs.profile);
var form = (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.settings.profile.schema_COLON_profile_form,new cljs.core.Keyword(null,"initial","initial",1854648214),profile) : app.main.ui.components.forms.use_form.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.settings.profile.schema_COLON_profile_form,new cljs.core.Keyword(null,"initial","initial",1854648214),profile));
var on_show_change_email = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-email","change-email",-1066380073),cljs.core.PersistentArrayMap.EMPTY);
}));
var on_show_delete_account = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-account","delete-account",725157341),cljs.core.PersistentArrayMap.EMPTY);
}));
return rumext.v2.jsxs(app.main.ui.components.forms.form,{'on-submit':app.main.ui.settings.profile.on_submit,'form':form,'class':"main_ui_settings_profile__profile-form",'children':[rumext.v2.jsx("div",{'className':"main_ui_settings_profile__fields-row",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'type':"text",'name':new cljs.core.Keyword(null,"fullname","fullname",1638772587),'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.your-name")})}),rumext.v2.jsxs("div",{'onClick':on_show_change_email,'className':"main_ui_settings_profile__fields-row",'children':[rumext.v2.jsx(app.main.ui.components.forms.input,{'type':"email",'name':new cljs.core.Keyword(null,"email","email",1415816706),'disabled':true,'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.your-email")}),rumext.v2.jsx("div",{'className':"main_ui_settings_profile__options",'children':rumext.v2.jsx("div",{'className':"change-email",'children':rumext.v2.jsx("a",{'onClick':on_show_change_email,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.change-email")})})})]}),rumext.v2.jsx(app.main.ui.components.forms.submit_button_STAR_,{'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.save-settings"),'disabled':cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))),'className':"main_ui_settings_profile__btn-primary"}),rumext.v2.jsx("div",{'className':"main_ui_settings_profile__links",'children':rumext.v2.jsx("div",{'className':"main_ui_settings_profile__link-item",'children':rumext.v2.jsx("a",{'onClick':on_show_delete_account,'data-testid':"remove-acount-btn",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.remove-account")})})})]});
});

(app.main.ui.settings.profile.profile_form.displayName = "profile-form");

app.main.ui.settings.profile.profile_photo_form = (function app$main$ui$settings$profile$profile_photo_form(props_66878){
var input_ref = rumext.v2.use_ref(null);
var profile = rumext.v2.deref(app.main.refs.profile);
var photo = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(profile)],(function (){
return app.config.resolve_profile_photo_url(profile);
}));
var on_image_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.util.dom.click(rumext.v2.ref_val(input_ref));
}));
var on_file_selected = (function (file){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.profile.update_photo(file));
});
return rumext.v2.jsx("form",{'className':"main_ui_settings_profile__avatar-form",'children':rumext.v2.jsxs("div",{'className':"main_ui_settings_profile__image-change-field",'children':[rumext.v2.jsx("span",{'onClick':on_image_click,'className':"main_ui_settings_profile__update-overlay",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.update")}),rumext.v2.jsx("img",{'src':photo}),rumext.v2.jsx(app.main.ui.components.file_uploader.file_uploader,{'accept':"image/jpeg,image/png",'multi':false,'ref':input_ref,'on-selected':on_file_selected,'data-testid':"profile-image-input"})]})});
});

(app.main.ui.settings.profile.profile_photo_form.displayName = "profile-photo-form");

app.main.ui.settings.profile.profile_page = (function app$main$ui$settings$profile$profile_page(props_66879){
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return app.util.dom.set_html_title(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("title.settings.profile"));
}));

return rumext.v2.jsx("div",{'className':"main_ui_settings_profile__dashboard-settings",'children':rumext.v2.jsxs("div",{'className':"main_ui_settings_profile__form-container",'children':[rumext.v2.jsx("h2",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.profile")}),rumext.v2.jsx(app.main.ui.settings.profile.profile_photo_form,{}),rumext.v2.jsx(app.main.ui.settings.profile.profile_form,{})]})});
});

(app.main.ui.settings.profile.profile_page.displayName = "profile-page");


//# sourceMappingURL=app.main.ui.settings.profile.js.map
