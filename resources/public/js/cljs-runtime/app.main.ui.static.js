import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$rxjs.js";
import "./app.common.data.js";
import "./app.common.exceptions.js";
import "./app.common.pprint.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.data.auth.js";
import "./app.main.data.common.js";
import "./app.main.errors.js";
import "./app.main.refs.js";
import "./app.main.repo.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.main.ui.auth.login.js";
import "./app.main.ui.auth.recovery_request.js";
import "./app.main.ui.auth.register.js";
import "./app.main.ui.dashboard.sidebar.js";
import "./app.main.ui.ds.buttons.button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.foundations.assets.raw_svg.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.viewer.header.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.timers.js";
import "./app.util.webapi.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.static$');
app.main.ui.static$.TimeoutError = shadow.js.shim.module$rxjs.TimeoutError;
app.main.ui.static$.error_container_STAR_ = (function app$main$ui$static$error_container_STAR_(props_54726){
var children = props_54726.children;
var profile_id = new cljs.core.Keyword(null,"profile-id","profile-id",1866572309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var on_nav_root = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav_root());
}));
return rumext.v2.jsxs("section",{'className':"main_ui_static__exception-layout",'children':[rumext.v2.jsxs("button",{'onClick':on_nav_root,'className':"main_ui_static__exception-header",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.raw_svg.raw_svg_STAR_,{'id':"penpot-logo-icon",'className':"main_ui_static__penpot-logo"}),(cljs.core.truth_(profile_id)?rumext.v2.jsxs("div",{'className':"main_ui_static__go-back-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow,'className':"main_ui_static__back-arrow"}),rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.go-dashboard")})]}):null)]}),rumext.v2.jsx("div",{'className':"main_ui_static__deco-before",'children':app.main.ui.icons.logo_error_screen}),(cljs.core.truth_(profile_id)?null:rumext.v2.jsx("button",{'onClick':on_nav_root,'className':"main_ui_static__login-header",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.login")})),rumext.v2.jsx("div",{'className':"main_ui_static__exception-content",'children':rumext.v2.jsx("div",{'className':"main_ui_static__container",'children':children})}),rumext.v2.jsxs("div",{'className':"main_ui_static__deco-after2",'children':[rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.copyright-period")}),app.main.ui.icons.logo_error_screen,rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.made-with-love")})]})]});
});

(app.main.ui.static$.error_container_STAR_.displayName = "error-container*");

app.main.ui.static$.invalid_token = (function app$main$ui$static$invalid_token(props_54727){
return rumext.v2.jsxs(app.main.ui.static$.error_container_STAR_,{'children':[rumext.v2.jsx("div",{'className':"main_ui_static__main-message",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.invite-invalid")}),rumext.v2.jsx("div",{'className':"main_ui_static__desc-message",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.invite-invalid.info")})]});
});

(app.main.ui.static$.invalid_token.displayName = "invalid-token");

app.main.ui.static$.login_modal_STAR_ = (function app$main$ui$static$login_modal_STAR_(props_54728){
var current_section = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login","login",55217519));
var user_email = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("");
var register_token = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("");
var set_section = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var section = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"section"));
return cljs.core.reset_BANG_(current_section,section);
}));
var set_section_recovery = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(current_section,new cljs.core.Keyword(null,"recovery-request","recovery-request",-1814480618));
}));
var set_section_login = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(current_section,new cljs.core.Keyword(null,"login","login",55217519));
}));
var success_login = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.reload(true));
}));
var success_register = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (data){
cljs.core.reset_BANG_(register_token,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(data));

return cljs.core.reset_BANG_(current_section,new cljs.core.Keyword(null,"register-validate","register-validate",425170720));
}));
var register_email_sent = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (email){
cljs.core.reset_BANG_(user_email,email);

return cljs.core.reset_BANG_(current_section,new cljs.core.Keyword(null,"register-email-sent","register-email-sent",1898188574));
}));
var recovery_email_sent = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (email){
cljs.core.reset_BANG_(user_email,email);

return cljs.core.reset_BANG_(current_section,new cljs.core.Keyword(null,"recovery-email-sent","recovery-email-sent",721273155));
}));
var on_nav_root = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auth-login","auth-login",-1527817479),cljs.core.PersistentArrayMap.EMPTY));
}));
return rumext.v2.jsx("div",{'className':"main_ui_static__overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_static__dialog-login",'children':[rumext.v2.jsx("div",{'className':"main_ui_static__modal-close",'children':rumext.v2.jsx("button",{'onClick':on_nav_root,'className':"main_ui_static__modal-close-button",'children':app.main.ui.icons.close})}),rumext.v2.jsxs("div",{'className':"main_ui_static__login",'children':[rumext.v2.jsx("div",{'className':"main_ui_static__logo",'children':app.main.ui.icons.logo}),(function (){var G__54729 = cljs.core.deref(current_section);
var G__54729__$1 = (((G__54729 instanceof cljs.core.Keyword))?G__54729.fqn:null);
switch (G__54729__$1) {
case "login":
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'className':"main_ui_static__logo-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.login")}),rumext.v2.jsx("div",{'className':"main_ui_static__logo-subtitle",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.login.free")}),rumext.v2.jsx(app.main.ui.auth.login.login_dialog_STAR_,{'onRecoveryRequest':set_section_recovery,'onSuccessCallback':success_login,'handleRedirect':true}),rumext.v2.jsx("hr",{'className':"main_ui_static__separator"}),rumext.v2.jsxs("div",{'className':"main_ui_static__change-section",'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.register")," ",rumext.v2.jsx("a",{'data-section':"register",'onClick':set_section,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.register-submit")})]})]});

break;
case "register":
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'className':"main_ui_static__logo-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.login.signup-free")}),rumext.v2.jsx("div",{'className':"main_ui_static__logo-subtitle",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.login.start-using")}),rumext.v2.jsx(app.main.ui.auth.register.register_methods_STAR_,{'onSuccessCallback':success_register,'hideSeparator':true}),rumext.v2.jsx("div",{'className':"main_ui_static__separator"}),rumext.v2.jsxs("div",{'className':"main_ui_static__change-section",'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.already-have-account")," ",rumext.v2.jsx("a",{'data-section':"login",'onClick':set_section,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.login-here")})]}),rumext.v2.jsxs("div",{'className':"main_ui_static__links",'children':[rumext.v2.jsx("hr",{'className':"main_ui_static__separator"}),rumext.v2.jsx(app.main.ui.auth.register.terms_register_STAR_,{})]})]});

break;
case "register-validate":
return rumext.v2.jsxs("div",{'className':"main_ui_static__form-container",'children':[rumext.v2.jsx(app.main.ui.auth.register.register_form_STAR_,{'params':new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.deref(register_token)], null),'onSuccessCallback':register_email_sent}),rumext.v2.jsx("div",{'className':"main_ui_static__links",'children':rumext.v2.jsx("div",{'className':"main_ui_static__register",'children':rumext.v2.jsx("a",{'data-section':"register",'onClick':set_section,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.go-back")})})})]});

break;
case "register-email-sent":
return rumext.v2.jsx("div",{'className':"main_ui_static__form-container",'children':rumext.v2.jsx(app.main.ui.auth.register.register_success_page_STAR_,{'params':new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.deref(user_email),new cljs.core.Keyword(null,"hide-logo","hide-logo",-332089125),true], null)})});

break;
case "recovery-request":
return rumext.v2.jsx(app.main.ui.auth.recovery_request.recovery_request_page,{'go-back-callback':set_section_login,'on-success-callback':recovery_email_sent});

break;
case "recovery-email-sent":
return rumext.v2.jsx("div",{'className':"main_ui_static__form-container",'children':rumext.v2.jsx(app.main.ui.auth.recovery_request.recovery_sent_page,{'email':cljs.core.deref(user_email)})});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54729__$1)].join('')));

}
})()]})]})});
});

(app.main.ui.static$.login_modal_STAR_.displayName = "login-modal*");

app.main.ui.static$.request_dialog_STAR_ = (function app$main$ui$static$request_dialog_STAR_(props_54730){
var on_close = props_54730.onClose;
var cancel_text = props_54730.cancelText;
var content = props_54730.content;
var button_text = props_54730.buttonText;
var on_button_click = props_54730.onButtonClick;
var title = props_54730.title;
var on_click = (function (){var or__5025__auto__ = on_button_click;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return on_close;
}
})();
return rumext.v2.jsx("div",{'className':"main_ui_static__overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_static__dialog",'children':[rumext.v2.jsx("div",{'className':"main_ui_static__modal-close",'children':rumext.v2.jsx("button",{'onClick':on_close,'className':"main_ui_static__modal-close-button",'children':app.main.ui.icons.close})}),rumext.v2.jsx("div",{'className':"main_ui_static__dialog-title",'children':title}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__54731){
var vec__54732 = p__54731;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54732,(0),null);
var content__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54732,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx("div",{'children':content__$1},index));

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(content)),rumext.v2.jsxs("div",{'className':"main_ui_static__sign-info",'children':[(cljs.core.truth_(cancel_text)?rumext.v2.jsx("button",{'onClick':on_close,'className':"main_ui_static__cancel-button",'children':cancel_text}):null),rumext.v2.jsx("button",{'onClick':on_click,'children':button_text})]})]})});
});

(app.main.ui.static$.request_dialog_STAR_.displayName = "request-dialog*");

app.main.ui.static$.request_access_STAR_ = (function app$main$ui$static$request_access_STAR_(props_54735){
var is_default = props_54735.isDefault;
var profile = props_54735.profile;
var team_id = props_54735.teamId;
var file_id = props_54735.fileId;
var is_workspace = props_54735.isWorkspace;
var requested_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sent","sent",-1537501490),false,new cljs.core.Keyword(null,"already-requested","already-requested",-1921328713),false], null));
var requested = cljs.core.deref(requested_STAR_);
var on_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(profile)],(function (){
var team_id__$1 = new cljs.core.Keyword(null,"default-team-id","default-team-id",1198639706).cljs$core$IFn$_invoke$arity$1(profile);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_recent.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id__$1], 0)));
}));
var on_success = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(requested_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sent","sent",-1537501490),true,new cljs.core.Keyword(null,"already-requested","already-requested",-1921328713),false], null));
}));
var on_error = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(requested_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sent","sent",-1537501490),true,new cljs.core.Keyword(null,"already-requested","already-requested",-1921328713),true], null));
}));
var on_request_access = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(team_id),rumext.v2.adapt(is_workspace)],(function (){
var params = (((!((file_id == null))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"is-viewer","is-viewer",-1388243148),cljs.core.not(is_workspace)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null));
var mdata = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.create_team_access_request(cljs.core.with_meta(params,mdata)));
}));
if(cljs.core.truth_(is_default)){
return rumext.v2.jsx(app.main.ui.static$.request_dialog_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.project"),'buttonText':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.go-dashboard"),'onClose':on_close});
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = (!((file_id == null)));
if(and__5023__auto__){
return new cljs.core.Keyword(null,"already-requested","already-requested",-1921328713).cljs$core$IFn$_invoke$arity$1(requested);
} else {
return and__5023__auto__;
}
})())){
return rumext.v2.jsx(app.main.ui.static$.request_dialog_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.already-requested.file"),'content':new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.already-requested.or-others.file")], null),'buttonText':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.go-dashboard"),'onClose':on_close});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"already-requested","already-requested",-1921328713).cljs$core$IFn$_invoke$arity$1(requested))){
return rumext.v2.jsx(app.main.ui.static$.request_dialog_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.already-requested.project"),'content':new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.already-requested.or-others.project")], null),'buttonText':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.go-dashboard"),'onClose':on_close});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"sent","sent",-1537501490).cljs$core$IFn$_invoke$arity$1(requested))){
return rumext.v2.jsx(app.main.ui.static$.request_dialog_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.done.success"),'content':new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.done.remember")], null),'buttonText':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.go-dashboard"),'onClose':on_close});
} else {
if((!((file_id == null)))){
return rumext.v2.jsx(app.main.ui.static$.request_dialog_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.file"),'content':new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.you-can-ask.file"),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.if-approves")], null),'buttonText':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.ask"),'onButtonClick':on_request_access,'cancelText':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.go-dashboard"),'onClose':on_close});
} else {
if((!((team_id == null)))){
return rumext.v2.jsx(app.main.ui.static$.request_dialog_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.project"),'content':new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.you-can-ask.project"),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.if-approves")], null),'buttonText':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.ask"),'onButtonClick':on_request_access,'cancelText':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.go-dashboard"),'onClose':on_close});
} else {
return null;
}
}
}
}
}
}
});

(app.main.ui.static$.request_access_STAR_.displayName = "request-access*");

app.main.ui.static$.not_found_STAR_ = (function app$main$ui$static$not_found_STAR_(props_54736){
return rumext.v2.jsxs(app.main.ui.static$.error_container_STAR_,{'children':[rumext.v2.jsx("div",{'className':"main_ui_static__main-message",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.not-found.main-message")}),rumext.v2.jsx("div",{'className':"main_ui_static__desc-message",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.desc-message.error")}),rumext.v2.jsx("div",{'className':"main_ui_static__desc-message",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.desc-message.doesnt-exist")})]});
});

(app.main.ui.static$.not_found_STAR_.displayName = "not-found*");

app.main.ui.static$.bad_gateway_STAR_ = (function app$main$ui$static$bad_gateway_STAR_(props_54737){
var handle_retry = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.assign_exception(null));
}));
return rumext.v2.jsxs(app.main.ui.static$.error_container_STAR_,{'children':[rumext.v2.jsx("div",{'className':"main_ui_static__main-message",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.bad-gateway.main-message")}),rumext.v2.jsx("div",{'className':"main_ui_static__desc-message",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.bad-gateway.desc-message")}),rumext.v2.jsx("div",{'className':"main_ui_static__sign-info",'children':rumext.v2.jsx("button",{'onClick':handle_retry,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.retry")})})]});
});

(app.main.ui.static$.bad_gateway_STAR_.displayName = "bad-gateway*");

app.main.ui.static$.service_unavailable_STAR_ = (function app$main$ui$static$service_unavailable_STAR_(props_54738){
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.assign_exception(null));
}));
return rumext.v2.jsxs(app.main.ui.static$.error_container_STAR_,{'children':[rumext.v2.jsx("div",{'className':"main_ui_static__main-message",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.service-unavailable.main-message")}),rumext.v2.jsx("div",{'className':"main_ui_static__desc-message",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.service-unavailable.desc-message")}),rumext.v2.jsx("div",{'className':"main_ui_static__sign-info",'children':rumext.v2.jsx("button",{'onClick':on_click,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.retry")})})]});
});

(app.main.ui.static$.service_unavailable_STAR_.displayName = "service-unavailable*");

app.main.ui.static$.webgl_context_lost_STAR_ = (function app$main$ui$static$webgl_context_lost_STAR_(props_54739){
var on_reload = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return location.reload();
}));
return rumext.v2.jsxs(app.main.ui.static$.error_container_STAR_,{'children':[rumext.v2.jsx("div",{'className':"main_ui_static__main-message",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.webgl-context-lost.main-message")}),rumext.v2.jsx("div",{'className':"main_ui_static__desc-message",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.webgl-context-lost.desc-message")}),rumext.v2.jsx("div",{'className':"main_ui_static__buttons-container",'children':rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"primary",'onClick':on_reload,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.reload-page")})})]});
});

(app.main.ui.static$.webgl_context_lost_STAR_.displayName = "webgl-context-lost*");

app.main.ui.static$.generate_report = (function app$main$ui$static$generate_report(data){
try{var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var profile_id = new cljs.core.Keyword(null,"profile-id","profile-id",1866572309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var trace = new cljs.core.Keyword("app.main.errors","trace","app.main.errors/trace",198160606).cljs$core$IFn$_invoke$arity$1(data);
var instance = new cljs.core.Keyword("app.main.errors","instance","app.main.errors/instance",2062011223).cljs$core$IFn$_invoke$arity$1(data);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54741_54752 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54742_54753 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54743_54754 = true;
var _STAR_print_fn_STAR__temp_val__54744_54755 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54743_54754);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54744_54755);

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hint:    ",(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"hint","hint",439639918).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.ex_message(instance);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return "--";
}
}
})()], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Prof ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = profile_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "--";
}
})())], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Team ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = team_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "--";
}
})())], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["URI:     ",app.config.public_uri], 0));

var temp__5825__auto___54756 = new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5825__auto___54756)){
var file_id_54758 = temp__5825__auto___54756;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["File ID:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_id_54758)], 0));
} else {
}

cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Data:"], 0));

var data_54759__$1 = data;
while(true){
app.common.pprint.pprint.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_when(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(app.common.data.without_qualified.cljs$core$IFn$_invoke$arity$1(data_54759__$1),new cljs.core.Keyword(null,"explain","explain",484226146)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.constantly("(...)")),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),(8),new cljs.core.Keyword(null,"length","length",588987862),(10)], null)], 0));

cljs.core.println();

var temp__5825__auto___54760 = new cljs.core.Keyword(null,"explain","explain",484226146).cljs$core$IFn$_invoke$arity$1(data_54759__$1);
if(cljs.core.truth_(temp__5825__auto___54760)){
var explain_54761 = temp__5825__auto___54760;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([explain_54761], 0));
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"server-error","server-error",-426815993),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data_54759__$1))) && (cljs.core.contains_QMARK_(data_54759__$1,new cljs.core.Keyword(null,"data","data",-232669377))))){
var G__54762 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data_54759__$1);
data_54759__$1 = G__54762;
continue;
} else {
}
break;
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Trace:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([trace], 0));

cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Last events:"], 0));

app.common.pprint.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(app.main.store.last_events),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"length","length",588987862),(200)], null)], 0));

cljs.core.println();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54742_54753);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54741_54752);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
}catch (e54740){var cause = e54740;
console.error("error on generating report.txt",cause);

return null;
}});
app.main.ui.static$.internal_error_STAR_ = (function app$main$ui$static$internal_error_STAR_(props_54745){
var report = props_54745.report;
var on_reset = props_54745.onReset;
var props = props_54745;
var report_uri = rumext.v2.use_ref(null);
var on_reset__$1 = (function (){var or__5025__auto__ = on_reset;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.assign_exception(null));
});
}
})();
var support_contact_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_reset__$1),rumext.v2.adapt(report)],(function (){
app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1(on_reset__$1);

var error_report_id = app.common.uuid.next();
var error_href = app.main.router.get_current_href();
(app.main.errors.last_report = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),error_report_id,new cljs.core.Keyword(null,"content","content",15833224),report], null));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"settings-feedback","settings-feedback",-1884878904),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"issue",new cljs.core.Keyword(null,"error-report-id","error-report-id",848722092),error_report_id,new cljs.core.Keyword(null,"error-href","error-href",-1882436137),error_href], null)));
}));
var on_download = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

var temp__5825__auto__ = rumext.v2.ref_val(report_uri);
if(cljs.core.truth_(temp__5825__auto__)){
var uri = temp__5825__auto__;
return app.util.dom.trigger_download_uri("report","text/plain",uri);
} else {
return null;
}
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(report)],(function (){
if((!((report == null)))){
(app.main.errors.last_report = report);

var report__$1 = app.util.webapi.create_blob.cljs$core$IFn$_invoke$arity$2(report,"text/plain");
var uri = app.util.webapi.create_uri(report__$1);
rumext.v2.set_ref_val_BANG_(report_uri,uri);

return (function (){
return app.util.webapi.revoke_uri(uri);
});
} else {
return null;
}
}));

return rumext.v2.jsxs(app.main.ui.static$.error_container_STAR_,{'children':[rumext.v2.jsx("div",{'className':"main_ui_static__main-message",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.internal-error.main-message")}),rumext.v2.jsxs("div",{'className':"main_ui_static__desc-message",'children':[rumext.v2.jsx("p",{'className':"main_ui_static__desc-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.internal-error.desc-message-first")}),rumext.v2.jsx("p",{'className':"main_ui_static__desc-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.internal-error.desc-message-second")})]}),(((!((report == null))))?rumext.v2.jsx("a",{'onClick':on_download,'className':"main_ui_static__download-link",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("labels.download",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["report.txt"], 0))}):null),rumext.v2.jsxs("div",{'className':"main_ui_static__buttons-container",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"secondary",'type':"button",'className':"main_ui_static__support-btn",'onClick':support_contact_click,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.contact-support")}),rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"primary",'type':"button",'className':"main_ui_static__retry-btn",'onClick':on_reset__$1,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.retry")})]})]});
});

(app.main.ui.static$.internal_error_STAR_.displayName = "internal-error*");

/**
 * Load exception page info
 */
app.main.ui.static$.load_info = (function app$main$ui$static$load_info(path_params){
var default$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true], null);
var stream = (cljs.core.truth_(new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(path_params))?beicon.v2.core.map((function (info){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true,new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(info)], null);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-file-info","get-file-info",1238727450),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(path_params)], null))):(cljs.core.truth_(new cljs.core.Keyword(null,"team-id","team-id",-14505725).cljs$core$IFn$_invoke$arity$1(path_params))?beicon.v2.core.map((function (info){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true,new cljs.core.Keyword(null,"team-id","team-id",-14505725),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"team-default","team-default",-1232424959),new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(info)], null);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-team-info","get-team-info",-1384996455),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"team-id","team-id",-14505725).cljs$core$IFn$_invoke$arity$1(path_params)], null))):beicon.v2.core.of(default$)
));
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (cause){
if((cause instanceof app.main.ui.static$.TimeoutError)){
return beicon.v2.core.of(default$);
} else {
return beicon.v2.core.throw$(cause);
}
}),beicon.v2.core.timeout.cljs$core$IFn$_invoke$arity$2((3000),stream));
});
app.main.ui.static$.exception_section_STAR_ = (function app$main$ui$static$exception_section_STAR_(props_54746){
var data = props_54746.data;
var props = props_54746;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"type","type",1174270348));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword("app.main.errors","instance","app.main.errors/instance",2062011223));
var report = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cause)],(function (){
if(app.common.exceptions.exception_QMARK_(cause)){
return app.main.errors.generate_report(cause);
} else {
return null;
}
}));
var props__$1 = {...props, 'report':report};
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(report),rumext.v2.adapt(type),rumext.v2.adapt(cause)],(function (){
if(((app.common.exceptions.exception_QMARK_(cause)) && ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"authentication","authentication",1746273042),null,new cljs.core.Keyword(null,"not-found","not-found",-629079980),null], null), null),type)))))){
return app.main.errors.submit_report.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"event-name","event-name",927259778),"exception-page",new cljs.core.Keyword(null,"report","report",1394055010),report,new cljs.core.Keyword(null,"hint","hint",439639918),app.common.exceptions.get_hint(cause)], 0));
} else {
return null;
}
}));

var G__54747 = type;
var G__54747__$1 = (((G__54747 instanceof cljs.core.Keyword))?G__54747.fqn:null);
switch (G__54747__$1) {
case "not-found":
return rumext.v2.jsx(app.main.ui.static$.not_found_STAR_,{});

break;
case "authentication":
return rumext.v2.jsx(app.main.ui.static$.not_found_STAR_,{});

break;
case "bad-gateway":
return rumext.v2.create_element(app.main.ui.static$.bad_gateway_STAR_,props__$1);

break;
case "service-unavailable":
return rumext.v2.jsx(app.main.ui.static$.service_unavailable_STAR_,{});

break;
case "webgl-context-lost":
return rumext.v2.jsx(app.main.ui.static$.webgl_context_lost_STAR_,{});

break;
default:
return rumext.v2.create_element(app.main.ui.static$.internal_error_STAR_,props__$1);

}
});

(app.main.ui.static$.exception_section_STAR_.displayName = "exception-section*");

app.main.ui.static$.context_wrapper_STAR_ = (function app$main$ui$static$context_wrapper_STAR_(props_54748){
var profile = props_54748.profile;
var children = props_54748.children;
var is_dashboard = props_54748.isDashboard;
var is_viewer = props_54748.isViewer;
var is_workspace = props_54748.isWorkspace;
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(cljs.core.truth_(is_workspace)?rumext.v2.jsxs("div",{'className':"main_ui_static__workspace",'children':[rumext.v2.jsxs("div",{'className':"main_ui_static__workspace-left",'children':[app.main.ui.icons.logo_icon,rumext.v2.jsxs("div",{'children':[rumext.v2.jsx("div",{'className':"main_ui_static__project-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.project-name")}),rumext.v2.jsx("div",{'className':"main_ui_static__file-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.penpot-file")})]})]}),rumext.v2.jsx("div",{'className':"main_ui_static__workspace-right"})]}):(cljs.core.truth_(is_viewer)?rumext.v2.jsx("div",{'className':"main_ui_static__viewer",'children':rumext.v2.jsx(app.main.ui.viewer.header.header,{'zoom':(1),'permissions':new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-logged","is-logged",702589853),true], null),'frame':null,'index':(0),'section':new cljs.core.Keyword(null,"interactions","interactions",550841811),'file':new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.penpot-file")], null),'shown-thumbnails':false,'page':null,'interactions-mode':null,'project':new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.no-permission.project-name")], null)})}):(cljs.core.truth_(is_dashboard)?rumext.v2.jsx("div",{'className':"main_ui_static__dashboard",'children':rumext.v2.jsx("div",{'className':"main_ui_static__dashboard-sidebar",'children':rumext.v2.jsx(app.main.ui.dashboard.sidebar.sidebar_STAR_,{'team':null,'projects':cljs.core.PersistentVector.EMPTY,'project':new cljs.core.Keyword(null,"default-project-id","default-project-id",-850768589).cljs$core$IFn$_invoke$arity$1(profile),'profile':profile,'section':new cljs.core.Keyword(null,"dashboard-projects","dashboard-projects",-425944382),'searchTerm':""})})}):null))),children]});
});

(app.main.ui.static$.context_wrapper_STAR_.displayName = "context-wrapper*");

app.main.ui.static$.exception_page_STAR_ = (function app$main$ui$static$exception_page_STAR_(props_54749){
var data = props_54749.data;
var route = props_54749.route;
var props = props_54749;
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data);
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route);
var params = new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(route);
var workspace_QMARK_ = cuerdas.core.includes_QMARK_(path,"workspace");
var dashboard_QMARK_ = cuerdas.core.includes_QMARK_(path,"dashboard");
var view_QMARK_ = cuerdas.core.includes_QMARK_(path,"view");
var info_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var info = cljs.core.deref(info_STAR_);
var profile = rumext.v2.deref(app.main.refs.profile);
var auth_error_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"authentication","authentication",1746273042));
var not_found_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
var authenticated_QMARK_ = app.main.data.auth.is_authenticated_QMARK_(profile);
var request_access_QMARK_ = (function (){var and__5023__auto__ = (function (){var or__5025__auto__ = workspace_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = dashboard_QMARK_;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return view_QMARK_;
}
}
})();
if(cljs.core.truth_(and__5023__auto__)){
return (((!((new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(info) == null)))) || ((!((new cljs.core.Keyword(null,"team-id","team-id",-14505725).cljs$core$IFn$_invoke$arity$1(info) == null)))));
} else {
return and__5023__auto__;
}
})();
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(params),rumext.v2.adapt(info)],(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"loaded","loaded",-1246482293).cljs$core$IFn$_invoke$arity$1(info))){
return null;
} else {
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,info_STAR_),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.reset_BANG_,info_STAR_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true], null)),app.main.ui.static$.load_info(params));
}
}));

if(((auth_error_QMARK_) || (not_found_QMARK_))){
if((!(authenticated_QMARK_))){
return rumext.v2.jsx(app.main.ui.static$.context_wrapper_STAR_,{'isWorkspace':workspace_QMARK_,'isDashboard':dashboard_QMARK_,'isViewer':view_QMARK_,'profile':profile,'children':rumext.v2.jsx(app.main.ui.static$.login_modal_STAR_,{})});
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(info,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false))){
if(cljs.core.truth_(request_access_QMARK_)){
return rumext.v2.jsx(app.main.ui.static$.context_wrapper_STAR_,{'isWorkspace':workspace_QMARK_,'isDashboard':dashboard_QMARK_,'isViewer':view_QMARK_,'profile':profile,'children':rumext.v2.jsx(app.main.ui.static$.request_access_STAR_,{'fileId':new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(info),'teamId':new cljs.core.Keyword(null,"team-id","team-id",-14505725).cljs$core$IFn$_invoke$arity$1(info),'isDefault':new cljs.core.Keyword(null,"team-default","team-default",-1232424959).cljs$core$IFn$_invoke$arity$1(info),'profile':profile,'isWorkspace':workspace_QMARK_})});
} else {
return rumext.v2.create_element(app.main.ui.static$.exception_section_STAR_,props);
}
} else {
return null;
}
}
} else {
return rumext.v2.create_element(app.main.ui.static$.exception_section_STAR_,props);
}
});

(app.main.ui.static$.exception_page_STAR_.displayName = "exception-page*");


//# sourceMappingURL=app.main.ui.static.js.map
