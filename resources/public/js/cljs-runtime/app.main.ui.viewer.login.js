import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.logging.js";
import "./app.main.data.modal.js";
import "./app.main.store.js";
import "./app.main.ui.auth.login.js";
import "./app.main.ui.auth.recovery_request.js";
import "./app.main.ui.auth.register.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.viewer.login');
app.common.logging.loggers.set("app.main.ui.viewer.login",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"warn","warn",-436710552)));
app.main.ui.viewer.login.login_register_modal = (function app$main$ui$viewer$login$login_register_modal(props_58616){
var _ = rumext.v2.util.wrap_props(props_58616);
var user_email = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("");
var register_token = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("");
var current_section_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login","login",55217519));
var current_section = cljs.core.deref(current_section_STAR_);
var set_current_section = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p1__58614_SHARP_){
return cljs.core.reset_BANG_(current_section_STAR_,p1__58614_SHARP_);
}));
var set_section = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var section = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
return (set_current_section.cljs$core$IFn$_invoke$arity$1 ? set_current_section.cljs$core$IFn$_invoke$arity$1(section) : set_current_section.call(null,section));
}));
var go_back_to_login = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return (set_current_section.cljs$core$IFn$_invoke$arity$1 ? set_current_section.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login","login",55217519)) : set_current_section.call(null,new cljs.core.Keyword(null,"login","login",55217519)));
}));
var main_section = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_section,new cljs.core.Keyword(null,"login","login",55217519))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_section,new cljs.core.Keyword(null,"register","register",1968522516))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_section,new cljs.core.Keyword(null,"register-validate","register-validate",425170720))))));
var close = (function (event){
app.util.dom.prevent_default(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.hide());
});
var success_email_sent = (function (email){
cljs.core.reset_BANG_(user_email,email);

return (set_current_section.cljs$core$IFn$_invoke$arity$1 ? set_current_section.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"email-sent","email-sent",-1405729778)) : set_current_section.call(null,new cljs.core.Keyword(null,"email-sent","email-sent",-1405729778)));
});
var success_login = (function (){
return window.location.reload(true);
});
var success_register = (function (data){
cljs.core.reset_BANG_(register_token,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(data));

return (set_current_section.cljs$core$IFn$_invoke$arity$1 ? set_current_section.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"register-validate","register-validate",425170720)) : set_current_section.call(null,new cljs.core.Keyword(null,"register-validate","register-validate",425170720)));
});
return rumext.v2.jsx("div",{'className':"main_ui_viewer_login__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_viewer_login__modal-container",'children':[rumext.v2.jsxs("div",{'className':"main_ui_viewer_login__modal-header",'children':[rumext.v2.jsx("h2",{'className':"main_ui_viewer_login__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.continue-with-penpot")}),rumext.v2.jsx("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.close"),'onClick':close,'className':"main_ui_viewer_login__modal-close-btn",'children':app.main.ui.icons.close})]}),rumext.v2.jsxs("div",{'className':"main_ui_viewer_login__modal-content",'children':[(function (){var G__58624 = current_section;
var G__58624__$1 = (((G__58624 instanceof cljs.core.Keyword))?G__58624.fqn:null);
switch (G__58624__$1) {
case "login":
return rumext.v2.jsxs("div",{'className':"main_ui_viewer_login__form-container",'children':[rumext.v2.jsx(app.main.ui.auth.login.login_dialog_STAR_,{'onSuccessCallback':success_login,'origin':new cljs.core.Keyword(null,"viewer","viewer",-783949853)}),rumext.v2.jsxs("div",{'className':"main_ui_viewer_login__links",'children':[rumext.v2.jsx("div",{'className':"main_ui_viewer_login__recovery-request",'children':rumext.v2.jsx("a",{'onClick':set_section,'data-value':"recovery-request",'className':"main_ui_viewer_login__recovery-link",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.forgot-password")})}),rumext.v2.jsxs("div",{'className':"main_ui_viewer_login__register",'children':[rumext.v2.jsxs("span",{'className':"main_ui_viewer_login__register-text",'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.register")," "]}),rumext.v2.jsx("a",{'onClick':set_section,'data-value':"register",'className':"main_ui_viewer_login__register-link",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.register-submit")})]})]})]});

break;
case "register":
return rumext.v2.jsxs("div",{'className':"main_ui_viewer_login__form-container",'children':[rumext.v2.jsx(app.main.ui.auth.register.register_methods_STAR_,{'onSuccessCallback':success_register}),rumext.v2.jsx("div",{'className':"main_ui_viewer_login__links",'children':rumext.v2.jsxs("div",{'className':"main_ui_viewer_login__account",'children':[rumext.v2.jsxs("span",{'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.already-have-account")," "]}),rumext.v2.jsx("a",{'onClick':set_section,'data-value':"login",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.login-here")})]})})]});

break;
case "register-validate":
return rumext.v2.jsxs("div",{'className':"main_ui_viewer_login__form-container",'children':[rumext.v2.jsx(app.main.ui.auth.register.register_validate_form_STAR_,{'params':new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.deref(register_token)], null),'onSuccessCallback':success_email_sent}),rumext.v2.jsx("div",{'className':"main_ui_viewer_login__links",'children':rumext.v2.jsx("div",{'className':"main_ui_viewer_login__register",'children':rumext.v2.jsx("a",{'onClick':set_section,'data-value':"register",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.go-back")})})})]});

break;
case "recovery-request":
return rumext.v2.jsx(app.main.ui.auth.recovery_request.recovery_request_page,{'go-back-callback':go_back_to_login,'on-success-callback':success_email_sent});

break;
case "email-sent":
return rumext.v2.jsx("div",{'className':"main_ui_viewer_login__form-container",'children':rumext.v2.jsx(app.main.ui.auth.register.register_success_page_STAR_,{'params':new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.deref(user_email)], null)})});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58624__$1)].join('')));

}
})(),((main_section)?rumext.v2.jsx("div",{'className':"main_ui_viewer_login__links",'children':rumext.v2.jsx(app.main.ui.auth.register.terms_register_STAR_,{})}):null)]})]})});
});

(app.main.ui.viewer.login.login_register_modal.displayName = "login-register-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"login-register","login-register",1592630494),app.main.ui.viewer.login.login_register_modal);
}));

//# sourceMappingURL=app.main.ui.viewer.login.js.map
