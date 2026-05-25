import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.schema.js";
import "./app.config.js";
import "./app.main.data.auth.js";
import "./app.main.data.notifications.js";
import "./app.main.repo.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.main.ui.auth.login.js";
import "./app.main.ui.components.forms.js";
import "./app.main.ui.components.link.js";
import "./app.util.i18n.js";
import "./app.util.storage.js";
import "./beicon.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.auth.register');
app.main.ui.auth.register.newsletter_options_STAR_ = (function app$main$ui$auth$register$newsletter_options_STAR_(props_53184){
var updates_label = rumext.v2.jsx(app.util.i18n.tr_html_STAR_,{'tagName':"div",'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding-v2.newsletter.updates")});
return rumext.v2.jsx("div",{'className':"main_ui_auth_register__fields-row main_ui_auth_register__input-visible main_ui_auth_register__newsletter-option-wrapper",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'name':new cljs.core.Keyword(null,"accept-newsletter-updates","accept-newsletter-updates",-611935651),'class':"main_ui_auth_register__checkbox-newsletter-updates",'type':"checkbox",'default-checked':false,'label':updates_label})});
});

(app.main.ui.auth.register.newsletter_options_STAR_.displayName = "newsletter-options*");

app.main.ui.auth.register.terms_and_privacy_STAR_ = (function app$main$ui$auth$register$terms_and_privacy_STAR_(props_53185){
var terms_label = rumext.v2.jsx(app.util.i18n.tr_html_STAR_,{'tagName':"div",'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("auth.terms-and-privacy-agreement",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.terms_of_service_uri,app.config.privacy_policy_uri], 0))});
return rumext.v2.jsx("div",{'className':"main_ui_auth_register__fields-row main_ui_auth_register__input-visible main_ui_auth_register__accept-terms-and-privacy-wrapper",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'name':new cljs.core.Keyword(null,"accept-terms-and-privacy","accept-terms-and-privacy",420542438),'show-error':false,'class':"main_ui_auth_register__checkbox-terms-and-privacy",'type':"checkbox",'default-checked':false,'label':terms_label})});
});

(app.main.ui.auth.register.terms_and_privacy_STAR_.displayName = "terms-and-privacy*");

app.main.ui.auth.register.schema_COLON_register_form = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"RegisterForm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword("app.common.schema","password","app.common.schema/password",836164606)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fullname","fullname",1638772587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(250)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword("app.common.schema","email","app.common.schema/email",2070921211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accept-terms-and-privacy","accept-terms-and-privacy",420542438),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),(!(cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"terms-and-privacy-checkbox","terms-and-privacy-checkbox",-1938913707))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accept-newsletter-updates","accept-newsletter-updates",-611935651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422)], null)], null);
app.main.ui.auth.register.register_form_STAR_ = (function app$main$ui$auth$register$register_form_STAR_(props_53186){
var params = props_53186.params;
var on_success_callback = props_53186.onSuccessCallback;
var initial = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(params)],cljs.core.constantly(params));
var form = (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.auth.register.schema_COLON_register_form,new cljs.core.Keyword(null,"initial","initial",1854648214),initial) : app.main.ui.components.forms.use_form.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.auth.register.schema_COLON_register_form,new cljs.core.Keyword(null,"initial","initial",1854648214),initial));
var submitted_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var on_error = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (cause){
var map__53189 = cljs.core.ex_data(cause);
var map__53189__$1 = cljs.core.__destructure_map(map__53189);
var edata = map__53189__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53189__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53189__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var pred__53190 = cljs.core._EQ_;
var expr__53191 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,code], null);
if(cljs.core.truth_((function (){var G__53193 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restriction","restriction",-1380234912),new cljs.core.Keyword(null,"email-does-not-match-invitation","email-does-not-match-invitation",-1798001872)], null);
var G__53194 = expr__53191;
return (pred__53190.cljs$core$IFn$_invoke$arity$2 ? pred__53190.cljs$core$IFn$_invoke$arity$2(G__53193,G__53194) : pred__53190.call(null,G__53193,G__53194));
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.email-does-not-match-invitation")));
} else {
if(cljs.core.truth_((function (){var G__53195 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restriction","restriction",-1380234912),new cljs.core.Keyword(null,"registration-disabled","registration-disabled",-1481878041)], null);
var G__53196 = expr__53191;
return (pred__53190.cljs$core$IFn$_invoke$arity$2 ? pred__53190.cljs$core$IFn$_invoke$arity$2(G__53195,G__53196) : pred__53190.call(null,G__53195,G__53196));
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.registration-disabled")));
} else {
if(cljs.core.truth_((function (){var G__53197 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restriction","restriction",-1380234912),new cljs.core.Keyword(null,"email-domain-is-not-allowed","email-domain-is-not-allowed",-1746810955)], null);
var G__53198 = expr__53191;
return (pred__53190.cljs$core$IFn$_invoke$arity$2 ? pred__53190.cljs$core$IFn$_invoke$arity$2(G__53197,G__53198) : pred__53190.call(null,G__53197,G__53198));
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.email-domain-not-allowed")));
} else {
if(cljs.core.truth_((function (){var G__53203 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restriction","restriction",-1380234912),new cljs.core.Keyword(null,"email-has-permanent-bounces","email-has-permanent-bounces",223647074)], null);
var G__53204 = expr__53191;
return (pred__53190.cljs$core$IFn$_invoke$arity$2 ? pred__53190.cljs$core$IFn$_invoke$arity$2(G__53203,G__53204) : pred__53190.call(null,G__53203,G__53204));
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.email-has-permanent-bounces",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(edata)], 0))));
} else {
if(cljs.core.truth_((function (){var G__53205 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restriction","restriction",-1380234912),new cljs.core.Keyword(null,"email-has-complaints","email-has-complaints",-2106579252)], null);
var G__53206 = expr__53191;
return (pred__53190.cljs$core$IFn$_invoke$arity$2 ? pred__53190.cljs$core$IFn$_invoke$arity$2(G__53205,G__53206) : pred__53190.call(null,G__53205,G__53206));
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.email-has-permanent-bounces",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(edata)], 0))));
} else {
if(cljs.core.truth_((function (){var G__53207 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"email-as-password","email-as-password",-1539580403)], null);
var G__53208 = expr__53191;
return (pred__53190.cljs$core$IFn$_invoke$arity$2 ? pred__53190.cljs$core$IFn$_invoke$arity$2(G__53207,G__53208) : pred__53190.call(null,G__53207,G__53208));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"password","password",417022471)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.email-as-password")], null));
} else {
var temp__5825__auto___53220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(edata,new cljs.core.Keyword(null,"explain","explain",484226146));
if(cljs.core.truth_(temp__5825__auto___53220)){
var explain_53221 = temp__5825__auto___53220;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([explain_53221], 0));
} else {
}

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.generic")));
}
}
}
}
}
}
}));
var on_success = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_success_callback)],(function (params__$1){
if(cljs.core.fn_QMARK_(on_success_callback)){
var G__53209 = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(params__$1);
return (on_success_callback.cljs$core$IFn$_invoke$arity$1 ? on_success_callback.cljs$core$IFn$_invoke$arity$1(G__53209) : on_success_callback.call(null,G__53209));
} else {
if((!((new cljs.core.Keyword(null,"invitation-token","invitation-token",-310125311).cljs$core$IFn$_invoke$arity$1(params__$1) == null)))){
var token = new cljs.core.Keyword(null,"invitation-token","invitation-token",-310125311).cljs$core$IFn$_invoke$arity$1(params__$1);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auth-verify-token","auth-verify-token",-675769474),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token","token",-1211463215),token], null)));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"is-active","is-active",-1424968720).cljs$core$IFn$_invoke$arity$1(params__$1))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.auth.login_from_register());
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.storage.user,cljs.core.assoc,new cljs.core.Keyword("app.main.ui.auth.register","email","app.main.ui.auth.register/email",1302079451),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(params__$1));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"auth-register-success","auth-register-success",-965924859)));

}
}
}
}));
var on_register_profile = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_success),rumext.v2.adapt(on_error)],(function (params__$1){
cljs.core.reset_BANG_(submitted_QMARK_,true);

return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$4(on_success,on_error,(function (){
return cljs.core.reset_BANG_(submitted_QMARK_,false);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"register-profile","register-profile",-590987011),params__$1));
}));
var on_submit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_success_callback)],(function (form__$1,_event){
cljs.core.reset_BANG_(submitted_QMARK_,true);

var create_welcome_file_QMARK_ = app.config.external_feature_flag("onboarding-03","test");
var cdata = (function (){var G__53210 = new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form__$1));
if(cljs.core.truth_(create_welcome_file_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53210,new cljs.core.Keyword(null,"create-welcome-file","create-welcome-file",1201110474),true);
} else {
return G__53210;
}
})();
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$4(on_register_profile,on_error,(function (){
return cljs.core.reset_BANG_(submitted_QMARK_,false);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prepare-register-profile","prepare-register-profile",-1420419189),cdata));
}));
return rumext.v2.jsxs(app.main.ui.components.forms.form,{'on-submit':on_submit,'form':form,'children':[rumext.v2.jsx("div",{'className':"main_ui_auth_register__fields-row",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'name':new cljs.core.Keyword(null,"fullname","fullname",1638772587),'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.fullname"),'type':"text",'show-success?':true,'class':"main_ui_auth_register__form-field"})}),rumext.v2.jsx("div",{'className':"main_ui_auth_register__fields-row",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'type':"text",'name':new cljs.core.Keyword(null,"email","email",1415816706),'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.work-email"),'data-testid':"email-input",'show-success?':true,'class':"main_ui_auth_register__form-field"})}),rumext.v2.jsx("div",{'className':"main_ui_auth_register__fields-row",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'name':new cljs.core.Keyword(null,"password","password",417022471),'hint':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.password-length-hint"),'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.password"),'show-success?':true,'type':"password",'class':"main_ui_auth_register__form-field"})}),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"terms-and-privacy-checkbox","terms-and-privacy-checkbox",-1938913707)))?rumext.v2.jsx(app.main.ui.auth.register.terms_and_privacy_STAR_,{}):null),rumext.v2.jsx(app.main.ui.auth.register.newsletter_options_STAR_,{}),rumext.v2.jsx(app.main.ui.components.forms.submit_button_STAR_,{'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.register-submit"),'disabled':cljs.core.deref(submitted_QMARK_),'data-testid':"register-form-submit",'className':"main_ui_auth_register__register-btn"})]});
});

(app.main.ui.auth.register.register_form_STAR_.displayName = "register-form*");

app.main.ui.auth.register.register_methods_STAR_ = (function app$main$ui$auth$register$register_methods_STAR_(props_53211){
var hide_separator = props_53211.hideSeparator;
var params = props_53211.params;
var on_success_callback = props_53211.onSuccessCallback;
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(cljs.core.truth_(app.main.ui.auth.login.show_sso_login_buttons_QMARK_)?rumext.v2.jsx(app.main.ui.auth.login.login_sso_buttons_STAR_,{'params':params}):null),(cljs.core.truth_((function (){var or__5025__auto__ = app.main.ui.auth.login.show_sso_login_buttons_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return hide_separator === false;
}
})())?rumext.v2.jsx("hr",{'className':"main_ui_auth_register__separator"}):null),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"login-with-password","login-with-password",-305903165)))?rumext.v2.jsx(app.main.ui.auth.register.register_form_STAR_,{'params':params,'onSuccessCallback':on_success_callback}):null)]});
});

(app.main.ui.auth.register.register_methods_STAR_.displayName = "register-methods*");

app.main.ui.auth.register.register_page_STAR_ = (function app$main$ui$auth$register$register_page_STAR_(props_53213){
var params = props_53213.params;
return rumext.v2.jsxs("div",{'className':"main_ui_auth_register__auth-form-wrapper main_ui_auth_register__register-form",'children':[rumext.v2.jsx("h1",{'data-testid':"registration-title",'className':"main_ui_auth_register__auth-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.register-title")}),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"demo-warning","demo-warning",328616032)))?rumext.v2.jsx(app.main.ui.auth.login.demo_warning_STAR_,{}):null),rumext.v2.jsx(app.main.ui.auth.register.register_methods_STAR_,{'params':params}),rumext.v2.jsxs("div",{'className':"main_ui_auth_register__links",'children':[rumext.v2.jsxs("div",{'className':"main_ui_auth_register__account",'children':[rumext.v2.jsxs("span",{'className':"main_ui_auth_register__account-text",'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.already-have-account")," "]}),rumext.v2.jsx(app.main.ui.components.link.link,{'action':(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auth-login","auth-login",-1527817479),params));
}),'class':"main_ui_auth_register__account-link",'data-testid':"login-here-link",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.login-here")})]}),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"demo-users","demo-users",1563448744)))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("hr",{'className':"main_ui_auth_register__separator"}),rumext.v2.jsx("div",{'className':"main_ui_auth_register__demo-account",'children':rumext.v2.jsx(app.main.ui.components.link.link,{'action':app.main.ui.auth.login.create_demo_profile,'class':"main_ui_auth_register__demo-account-link",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.create-demo-account")})})]}):null)]})]});
});

(app.main.ui.auth.register.register_page_STAR_.displayName = "register-page*");

app.main.ui.auth.register.register_success_page_STAR_ = (function app$main$ui$auth$register$register_success_page_STAR_(props_53214){
var params = props_53214.params;
var email = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword("app.main.ui.auth.register","email","app.main.ui.auth.register/email",1302079451).cljs$core$IFn$_invoke$arity$1(app.util.storage.user);
}
})();
return rumext.v2.jsxs("div",{'className':"main_ui_auth_register__auth-form-wrapper main_ui_auth_register__register-success",'children':[rumext.v2.jsxs("div",{'className':"main_ui_auth_register__auth-title-wrapper",'children':[rumext.v2.jsx("h2",{'className':"main_ui_auth_register__auth-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.check-mail")}),rumext.v2.jsx("div",{'className':"main_ui_auth_register__notification-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.verification-email-sent")})]}),rumext.v2.jsx("div",{'className':"main_ui_auth_register__notification-text-email",'children':email})]});
});

(app.main.ui.auth.register.register_success_page_STAR_.displayName = "register-success-page*");

app.main.ui.auth.register.terms_register_STAR_ = (function app$main$ui$auth$register$terms_register_STAR_(props_53215){
var show_all_QMARK_ = (function (){var and__5023__auto__ = app.config.terms_of_service_uri;
if(cljs.core.truth_(and__5023__auto__)){
return app.config.privacy_policy_uri;
} else {
return and__5023__auto__;
}
})();
var show_terms_QMARK_ = (!((app.config.terms_of_service_uri == null)));
var show_privacy_QMARK_ = (!((app.config.privacy_policy_uri == null)));
if(cljs.core.truth_(show_all_QMARK_)){
return rumext.v2.jsxs("div",{'className':"main_ui_auth_register__terms-register",'children':[((show_terms_QMARK_)?rumext.v2.jsx("a",{'href':app.config.terms_of_service_uri,'target':"_blank",'className':"main_ui_auth_register__auth-link",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.terms-of-service")}):null),(cljs.core.truth_(show_all_QMARK_)?rumext.v2.jsx("span",{'className':"main_ui_auth_register__and-text",'children':""+" "+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.and") ?? "")+"  "}):null),((show_privacy_QMARK_)?rumext.v2.jsx("a",{'href':app.config.privacy_policy_uri,'target':"_blank",'className':"main_ui_auth_register__auth-link",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.privacy-policy")}):null)]});
} else {
return null;
}
});

(app.main.ui.auth.register.terms_register_STAR_.displayName = "terms-register*");

app.main.ui.auth.register.schema_COLON_register_validate_form = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"RegisterValidateForm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fullname","fullname",1638772587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(250)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accept-terms-and-privacy","accept-terms-and-privacy",420542438),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),(!(cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"terms-and-privacy-checkbox","terms-and-privacy-checkbox",-1938913707))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accept-newsletter-updates","accept-newsletter-updates",-611935651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
app.main.ui.auth.register.register_validate_form_STAR_ = (function app$main$ui$auth$register$register_validate_form_STAR_(props_53216){
var params = props_53216.params;
var on_success_callback = props_53216.onSuccessCallback;
var form = (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.auth.register.schema_COLON_register_validate_form,new cljs.core.Keyword(null,"initial","initial",1854648214),params) : app.main.ui.components.forms.use_form.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.auth.register.schema_COLON_register_validate_form,new cljs.core.Keyword(null,"initial","initial",1854648214),params));
var submitted_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var on_success = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_success_callback)],(function (params__$1){
app.config.external_notify_register_success(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params__$1));

if(cljs.core.fn_QMARK_(on_success_callback)){
var G__53217 = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(params__$1);
return (on_success_callback.cljs$core$IFn$_invoke$arity$1 ? on_success_callback.cljs$core$IFn$_invoke$arity$1(G__53217) : on_success_callback.call(null,G__53217));
} else {
if((!((new cljs.core.Keyword(null,"invitation-token","invitation-token",-310125311).cljs$core$IFn$_invoke$arity$1(params__$1) == null)))){
var token = new cljs.core.Keyword(null,"invitation-token","invitation-token",-310125311).cljs$core$IFn$_invoke$arity$1(params__$1);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auth-verify-token","auth-verify-token",-675769474),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token","token",-1211463215),token], null)));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"is-active","is-active",-1424968720).cljs$core$IFn$_invoke$arity$1(params__$1))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.auth.login_from_register());
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.storage.user,cljs.core.assoc,new cljs.core.Keyword("app.main.ui.auth.register","email","app.main.ui.auth.register/email",1302079451),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(params__$1));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"auth-register-success","auth-register-success",-965924859)));

}
}
}
}));
var on_error = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.generic")));
}));
var on_submit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_success),rumext.v2.adapt(on_error)],(function (form__$1,_){
cljs.core.reset_BANG_(submitted_QMARK_,true);

var create_welcome_file_QMARK_ = app.config.external_feature_flag("onboarding-03","test");
var params__$1 = (function (){var G__53218 = new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form__$1));
if(cljs.core.truth_(create_welcome_file_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53218,new cljs.core.Keyword(null,"create-welcome-file","create-welcome-file",1201110474),true);
} else {
return G__53218;
}
})();
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3(on_success,on_error,beicon.v2.core.finalize((function (){
return cljs.core.reset_BANG_(submitted_QMARK_,false);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"register-profile","register-profile",-590987011),params__$1)));
}));
return rumext.v2.jsxs(app.main.ui.components.forms.form,{'on-submit':on_submit,'form':form,'class':"main_ui_auth_register__register-validate-form",'children':[rumext.v2.jsx("div",{'className':"main_ui_auth_register__fields-row",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'name':new cljs.core.Keyword(null,"fullname","fullname",1638772587),'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.fullname"),'type':"text",'show-success?':true,'class':"main_ui_auth_register__form-field"})}),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"terms-and-privacy-checkbox","terms-and-privacy-checkbox",-1938913707)))?rumext.v2.jsx(app.main.ui.auth.register.terms_and_privacy_STAR_,{}):null),rumext.v2.jsx(app.main.ui.auth.register.newsletter_options_STAR_,{}),rumext.v2.jsx(app.main.ui.components.forms.submit_button_STAR_,{'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.register-submit"),'disabled':cljs.core.deref(submitted_QMARK_),'className':"main_ui_auth_register__register-btn"})]});
});

(app.main.ui.auth.register.register_validate_form_STAR_.displayName = "register-validate-form*");

app.main.ui.auth.register.register_validate_page_STAR_ = (function app$main$ui$auth$register$register_validate_page_STAR_(props_53219){
var params = props_53219.params;
return rumext.v2.jsxs("div",{'className':"main_ui_auth_register__auth-form-wrapper main_ui_auth_register__register-form",'children':[rumext.v2.jsxs("div",{'className':"main_ui_auth_register__auth-title-wrapper",'children':[rumext.v2.jsx("h2",{'data-testid':"register-title",'className':"main_ui_auth_register__auth-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.register-account-title")}),rumext.v2.jsx("div",{'className':"main_ui_auth_register__auth-subtitle",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.register-account-tagline")})]}),rumext.v2.jsx(app.main.ui.auth.register.register_validate_form_STAR_,{'params':params}),rumext.v2.jsx("div",{'className':"main_ui_auth_register__links",'children':rumext.v2.jsx("div",{'className':"main_ui_auth_register__go-back",'children':rumext.v2.jsx(app.main.ui.components.link.link,{'action':(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auth-register","auth-register",826284239),cljs.core.PersistentArrayMap.EMPTY));
}),'class':"main_ui_auth_register__go-back-link",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.go-back")})})})]});
});

(app.main.ui.auth.register.register_validate_page_STAR_.displayName = "register-validate-page*");


//# sourceMappingURL=app.main.ui.auth.register.js.map
