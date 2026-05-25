import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.logging.js";
import "./app.common.schema.js";
import "./app.config.js";
import "./app.main.data.auth.js";
import "./app.main.data.notifications.js";
import "./app.main.repo.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.main.ui.components.button_link.js";
import "./app.main.ui.components.forms.js";
import "./app.main.ui.components.link.js";
import "./app.main.ui.ds.notifications.context_notification.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.storage.js";
import "./beicon.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.auth.login');
app.main.ui.auth.login.show_sso_login_buttons_QMARK_ = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,app.config.flags),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-with-google","login-with-google",-360269339),new cljs.core.Keyword(null,"login-with-github","login-with-github",518824080),new cljs.core.Keyword(null,"login-with-gitlab","login-with-gitlab",-81921144),new cljs.core.Keyword(null,"login-with-oidc","login-with-oidc",688254834)], null));
app.main.ui.auth.login.demo_warning_STAR_ = (function app$main$ui$auth$login$demo_warning_STAR_(props_53164){
return rumext.v2.jsx(app.main.ui.ds.notifications.context_notification.context_notification_STAR_,{'level':new cljs.core.Keyword(null,"warning","warning",-1685650671),'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.demo-warning")});
});

(app.main.ui.auth.login.demo_warning_STAR_.displayName = "demo-warning*");

app.main.ui.auth.login.create_demo_profile = (function app$main$ui$auth$login$create_demo_profile(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.auth.create_demo_profile());
});
app.main.ui.auth.login.store_login_redirect = (function app$main$ui$auth$login$store_login_redirect(){
var _STAR_sync_STAR__orig_val__53166 = app.util.storage._STAR_sync_STAR_;
var _STAR_sync_STAR__temp_val__53167 = true;
(app.util.storage._STAR_sync_STAR_ = _STAR_sync_STAR__temp_val__53167);

try{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.storage.session,cljs.core.assoc,new cljs.core.Keyword(null,"login-redirect","login-redirect",-2132232884),app.main.router.get_current_href());
}finally {(app.util.storage._STAR_sync_STAR_ = _STAR_sync_STAR__orig_val__53166);
}});
app.main.ui.auth.login.clear_login_redirect = (function app$main$ui$auth$login$clear_login_redirect(){
var _STAR_sync_STAR__orig_val__53168 = app.util.storage._STAR_sync_STAR_;
var _STAR_sync_STAR__temp_val__53169 = true;
(app.util.storage._STAR_sync_STAR_ = _STAR_sync_STAR__temp_val__53169);

try{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.util.storage.session,cljs.core.dissoc,new cljs.core.Keyword(null,"login-redirect","login-redirect",-2132232884));
}finally {(app.util.storage._STAR_sync_STAR_ = _STAR_sync_STAR__orig_val__53168);
}});
app.main.ui.auth.login.login_with_sso = (function app$main$ui$auth$login$login_with_sso(provider,params){
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"provider","provider",-302056900),provider);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.auth.login_with_sso(params__$1));
});
app.main.ui.auth.login.schema_COLON_login_form = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"LoginForm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","email","app.common.schema/email",2070921211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","code","error/code",-1740032098),"errors.invalid-email"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invitation-token","invitation-token",-310125311),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null)], null)], null);
app.main.ui.auth.login.login_form_STAR_ = (function app$main$ui$auth$login$login_form_STAR_(props_53170){
var params = props_53170.params;
var handle_redirect = props_53170.handleRedirect;
var on_recovery_request = props_53170.onRecoveryRequest;
var on_success_callback = props_53170.onSuccessCallback;
var origin = props_53170.origin;
var props = props_53170;
var initial = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(params)],(function (){
return params;
}));
var error = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var form = (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.auth.login.schema_COLON_login_form,new cljs.core.Keyword(null,"initial","initial",1854648214),initial) : app.main.ui.components.forms.use_form.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.auth.login.schema_COLON_login_form,new cljs.core.Keyword(null,"initial","initial",1854648214),initial));
var on_error = (function (cause){
var cause__$1 = cljs.core.ex_data(cause);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restriction","restriction",-1380234912),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cause__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"profile-blocked","profile-blocked",188698258),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cause__$1))))){
return cljs.core.reset_BANG_(error,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.profile-blocked"));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restriction","restriction",-1380234912),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cause__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ldap-not-initialized","ldap-not-initialized",2044423174),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cause__$1))))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.ldap-disabled")));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restriction","restriction",-1380234912),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cause__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"admin-only-profile","admin-only-profile",-1460712669),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cause__$1))))){
return cljs.core.reset_BANG_(error,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.profile-blocked"));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cause__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wrong-credentials","wrong-credentials",2055788730),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cause__$1))))){
return cljs.core.reset_BANG_(error,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.wrong-credentials"));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cause__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"account-without-password","account-without-password",-96930553),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cause__$1))))){
return cljs.core.reset_BANG_(error,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.wrong-credentials"));
} else {
return cljs.core.reset_BANG_(error,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.generic"));

}
}
}
}
}
});
var show_password_field_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return (!(cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"login-with-custom-sso","login-with-custom-sso",1598745070))));
}));
var show_password_field_QMARK_ = cljs.core.deref(show_password_field_STAR_);
var on_success = (function (data){
if(cljs.core.fn_QMARK_(on_success_callback)){
return (on_success_callback.cljs$core$IFn$_invoke$arity$1 ? on_success_callback.cljs$core$IFn$_invoke$arity$1(data) : on_success_callback.call(null,data));
} else {
return null;
}
});
var on_submit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(show_password_field_QMARK_),rumext.v2.adapt(params)],(function (form__$1,_event){
cljs.core.reset_BANG_(error,null);

var data = new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form__$1));
if(cljs.core.truth_(show_password_field_QMARK_)){
var params__$1 = cljs.core.with_meta(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params,data], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success], null));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.auth.login(params__$1));
} else {
var params__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params,data], 0));
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (sso_provider_id){
if(cljs.core.truth_(sso_provider_id)){
var params__$2 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"provider","provider",-302056900),sso_provider_id], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.auth.login_with_sso(params__$2));
} else {
return cljs.core.reset_BANG_(show_password_field_STAR_,true);
}
}),beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (cause){
if(app.common.logging.enabled_QMARK_("app.main.ui.auth.login",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"error on retrieving sso provider"], null)], null);
}),null)),cause,null,"app.main.ui.auth.login",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}


return beicon.v2.core.of(null);
}),beicon.v2.core.map(new cljs.core.Keyword(null,"id","id",-1388402092),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-sso-provider","get-sso-provider",336930270),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(params__$1)], null)))));
}
}));
var on_submit_ldap = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(form)],(function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

cljs.core.reset_BANG_(error,null);

var params__$1 = new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form));
var params__$2 = cljs.core.with_meta(params__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success], null));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.auth.login_with_ldap(params__$2));
}));
var on_recovery_request__$1 = (function (){var or__5025__auto__ = on_recovery_request;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"auth-recovery-request","auth-recovery-request",206791454)));
});
}
})();
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(handle_redirect)],(function (){
if(cljs.core.truth_(handle_redirect)){
return app.main.ui.auth.login.store_login_redirect();
} else {
return app.main.ui.auth.login.clear_login_redirect();
}
}));

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(function (){var temp__5825__auto__ = cljs.core.deref(error);
if(cljs.core.truth_(temp__5825__auto__)){
var message = temp__5825__auto__;
return rumext.v2.jsx(app.main.ui.ds.notifications.context_notification.context_notification_STAR_,{'level':new cljs.core.Keyword(null,"error","error",-978969032),'children':message});
} else {
return null;
}
})(),rumext.v2.jsxs(app.main.ui.components.forms.form,{'on-submit':on_submit,'class':"main_ui_auth_login__login-form",'form':form,'children':[rumext.v2.jsx("div",{'className':"main_ui_auth_login__fields-row",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'name':new cljs.core.Keyword(null,"email","email",1415816706),'type':"email",'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.work-email"),'class':"main_ui_auth_login__form-field"})}),(cljs.core.truth_(show_password_field_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_auth_login__fields-row",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'type':"password",'name':new cljs.core.Keyword(null,"password","password",417022471),'auto-focus?':true,'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.password"),'class':"main_ui_auth_login__form-field"})}):null),((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(origin,new cljs.core.Keyword(null,"viewer","viewer",-783949853))) && (((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"login","login",55217519))) || (cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"login-with-password","login-with-password",-305903165)))))))?rumext.v2.jsx("div",{'className':"main_ui_auth_login__fields-row main_ui_auth_login__forgot-password",'children':rumext.v2.jsx(app.main.ui.components.link.link,{'action':on_recovery_request__$1,'class':"main_ui_auth_login__forgot-pass-link",'data-testid':"forgot-password",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.forgot-password")})}):null),rumext.v2.jsxs("div",{'className':"main_ui_auth_login__buttons-stack",'children':[((((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"login","login",55217519))) || (cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"login-with-password","login-with-password",-305903165)))))?rumext.v2.jsx(app.main.ui.components.forms.submit_button_STAR_,{'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.continue"),'data-testid':"login-submit",'className':"main_ui_auth_login__login-button"}):null),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"login-with-ldap","login-with-ldap",1944357469)))?rumext.v2.jsx(app.main.ui.components.forms.submit_button_STAR_,{'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.login-with-ldap-submit"),'className':"main_ui_auth_login__login-ldap-button",'onClick':on_submit_ldap}):null)]})]})]});
});

(app.main.ui.auth.login.login_form_STAR_.displayName = "login-form*");

app.main.ui.auth.login.login_sso_buttons_STAR_ = (function app$main$ui$auth$login$login_sso_buttons_STAR_(props_53176){
var params = props_53176.params;
var props = props_53176;
var login_with_google = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(params)],(function (){
return app.main.ui.auth.login.login_with_sso("google",params);
}));
var login_with_github = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(params)],(function (){
return app.main.ui.auth.login.login_with_sso("github",params);
}));
var login_with_gitlab = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(params)],(function (){
return app.main.ui.auth.login.login_with_sso("gitlab",params);
}));
var login_with_oidc = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(params)],(function (){
return app.main.ui.auth.login.login_with_sso("oidc",params);
}));
return rumext.v2.jsxs("div",{'className':"main_ui_auth_login__auth-buttons",'children':[((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"login-with-google","login-with-google",-360269339)))?rumext.v2.jsx(app.main.ui.components.button_link.button_link,{'on-click':login_with_google,'icon':app.main.ui.icons.brand_google,'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.login-with-google-submit"),'class':"main_ui_auth_login__login-btn main_ui_auth_login__btn-google-auth"}):null),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"login-with-github","login-with-github",518824080)))?rumext.v2.jsx(app.main.ui.components.button_link.button_link,{'on-click':login_with_github,'icon':app.main.ui.icons.brand_github,'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.login-with-github-submit"),'class':"main_ui_auth_login__login-btn main_ui_auth_login__btn-github-auth"}):null),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"login-with-gitlab","login-with-gitlab",-81921144)))?rumext.v2.jsx(app.main.ui.components.button_link.button_link,{'on-click':login_with_gitlab,'icon':app.main.ui.icons.brand_gitlab,'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.login-with-gitlab-submit"),'class':"main_ui_auth_login__login-btn main_ui_auth_login__btn-gitlab-auth"}):null),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"login-with-oidc","login-with-oidc",688254834)))?rumext.v2.jsx(app.main.ui.components.button_link.button_link,{'on-click':login_with_oidc,'icon':app.main.ui.icons.brand_openid,'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.login-with-oidc-submit"),'class':"main_ui_auth_login__login-btn main_ui_auth_login__btn-oidc-auth"}):null)]});
});

(app.main.ui.auth.login.login_sso_buttons_STAR_.displayName = "login-sso-buttons*");

app.main.ui.auth.login.login_dialog_STAR_ = (function app$main$ui$auth$login$login_dialog_STAR_(props_53178){
var params = props_53178.params;
var props = props_53178;
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(cljs.core.truth_(app.main.ui.auth.login.show_sso_login_buttons_QMARK_)?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.auth.login.login_sso_buttons_STAR_,{'params':params}),((((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"login","login",55217519))) || (((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"login-with-password","login-with-password",-305903165))) || (cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"login-with-ldap","login-with-ldap",1944357469)))))))?rumext.v2.jsx("hr",{'className':"main_ui_auth_login__separator"}):null)]}):null),((((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"login","login",55217519))) || (((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"login-with-password","login-with-password",-305903165))) || (cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"login-with-ldap","login-with-ldap",1944357469)))))))?rumext.v2.create_element(app.main.ui.auth.login.login_form_STAR_,props):null)]});
});

(app.main.ui.auth.login.login_dialog_STAR_.displayName = "login-dialog*");

app.main.ui.auth.login.login_page = (function app$main$ui$auth$login$login_page(props_53179){
var map__53180 = rumext.v2.util.wrap_props(props_53179);
var map__53180__$1 = cljs.core.__destructure_map(map__53180);
var props = map__53180__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53180__$1,new cljs.core.Keyword(null,"params","params",710516235));
var go_register = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auth-register","auth-register",826284239),params));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_auth_login__auth-form-wrapper",'children':[rumext.v2.jsx("h1",{'data-testid':"login-title",'className':"main_ui_auth_login__auth-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.login-account-title")}),rumext.v2.jsx("p",{'className':"main_ui_auth_login__auth-tagline",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.login-tagline")}),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"demo-warning","demo-warning",328616032)))?rumext.v2.jsx(app.main.ui.auth.login.demo_warning_STAR_,{}):null),rumext.v2.jsx(app.main.ui.auth.login.login_dialog_STAR_,{'params':params}),rumext.v2.jsx("hr",{'className':"main_ui_auth_login__separator"}),rumext.v2.jsx("div",{'className':"main_ui_auth_login__links",'children':((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"registration","registration",1079145595)))?rumext.v2.jsxs("div",{'className':"main_ui_auth_login__register",'children':[rumext.v2.jsxs("span",{'className':"main_ui_auth_login__register-text",'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.register")," "]}),rumext.v2.jsx(app.main.ui.components.link.link,{'action':go_register,'class':"main_ui_auth_login__register-link",'data-testid':"register-submit",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.register-submit")})]}):null)})]});
});

(app.main.ui.auth.login.login_page.displayName = "login-page");


//# sourceMappingURL=app.main.ui.auth.login.js.map
