import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.schema.js";
import "./app.main.data.notifications.js";
import "./app.main.data.profile.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.main.ui.components.forms.js";
import "./app.main.ui.components.link.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.auth.recovery_request');
app.main.ui.auth.recovery_request.schema_COLON_recovery_request_form = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"RecoverRequestForm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword("app.common.schema","email","app.common.schema/email",2070921211)], null)], null);
app.main.ui.auth.recovery_request.recovery_form = (function app$main$ui$auth$recovery_request$recovery_form(props_53146){
var map__53147 = rumext.v2.util.wrap_props(props_53146);
var map__53147__$1 = cljs.core.__destructure_map(map__53147);
var props = map__53147__$1;
var on_success_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53147__$1,new cljs.core.Keyword(null,"on-success-callback","on-success-callback",1038309943));
var form = (function (){var G__53148 = new cljs.core.Keyword(null,"schema","schema",-1582001791);
var G__53149 = app.main.ui.auth.recovery_request.schema_COLON_recovery_request_form;
var G__53150 = new cljs.core.Keyword(null,"initial","initial",1854648214);
var G__53151 = cljs.core.PersistentArrayMap.EMPTY;
return (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(G__53148,G__53149,G__53150,G__53151) : app.main.ui.components.forms.use_form.call(null,G__53148,G__53149,G__53150,G__53151));
})();
var submitted = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var default_success_finish = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.info.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.notifications.recovery-token-sent")));
}));
var on_success = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (cdata,_){
cljs.core.reset_BANG_(submitted,false);

if((on_success_callback == null)){
return (default_success_finish.cljs$core$IFn$_invoke$arity$0 ? default_success_finish.cljs$core$IFn$_invoke$arity$0() : default_success_finish.call(null));
} else {
var G__53153 = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(cdata);
return (on_success_callback.cljs$core$IFn$_invoke$arity$1 ? on_success_callback.cljs$core$IFn$_invoke$arity$1(G__53153) : on_success_callback.call(null,G__53153));
}
}));
var on_error = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (data,cause){
cljs.core.reset_BANG_(submitted,false);

var code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(cause));
var G__53155 = code;
var G__53155__$1 = (((G__53155 instanceof cljs.core.Keyword))?G__53155.fqn:null);
switch (G__53155__$1) {
case "profile-not-verified":
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.notifications.profile-not-verified")));

break;
case "profile-is-muted":
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.profile-is-muted")));

break;
case "email-has-permanent-bounces":
case "email-has-complaints":
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.email-has-permanent-bounces",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(data)], 0))));

break;
default:
return beicon.v2.core.throw$(cause);

}
}));
var on_submit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
cljs.core.reset_BANG_(submitted,true);

var cdata = new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form));
var params = cljs.core.with_meta(cdata,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (p1__53144_SHARP_){
return (on_success.cljs$core$IFn$_invoke$arity$2 ? on_success.cljs$core$IFn$_invoke$arity$2(cdata,p1__53144_SHARP_) : on_success.call(null,cdata,p1__53144_SHARP_));
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (p1__53145_SHARP_){
return (on_error.cljs$core$IFn$_invoke$arity$2 ? on_error.cljs$core$IFn$_invoke$arity$2(cdata,p1__53145_SHARP_) : on_error.call(null,cdata,p1__53145_SHARP_));
})], null));
cljs.core.reset_BANG_(form,null);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.profile.request_profile_recovery(params));
}));
return rumext.v2.jsxs(app.main.ui.components.forms.form,{'on-submit':on_submit,'class':"main_ui_auth_recovery_request__recovery-request-form",'form':form,'children':[rumext.v2.jsx("div",{'className':"main_ui_auth_recovery_request__fields-row",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'name':new cljs.core.Keyword(null,"email","email",1415816706),'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.work-email"),'type':"text",'class':"main_ui_auth_recovery_request__form-field"})}),rumext.v2.jsx(app.main.ui.components.forms.submit_button_STAR_,{'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.recovery-request-submit"),'data-testid':"recovery-resquest-submit",'className':"main_ui_auth_recovery_request__recover-btn"})]});
});

(app.main.ui.auth.recovery_request.recovery_form.displayName = "recovery-form");

app.main.ui.auth.recovery_request.recovery_request_page = (function app$main$ui$auth$recovery_request$recovery_request_page(props_53159){
var map__53160 = rumext.v2.util.wrap_props(props_53159);
var map__53160__$1 = cljs.core.__destructure_map(map__53160);
var props = map__53160__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53160__$1,new cljs.core.Keyword(null,"params","params",710516235));
var on_success_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53160__$1,new cljs.core.Keyword(null,"on-success-callback","on-success-callback",1038309943));
var go_back_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53160__$1,new cljs.core.Keyword(null,"go-back-callback","go-back-callback",-551843948));
var default_go_back = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"auth-login","auth-login",-1527817479)));
});
var go_back = (function (){var or__5025__auto__ = go_back_callback;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default_go_back;
}
})();
return rumext.v2.jsxs("div",{'className':"main_ui_auth_recovery_request__auth-form-wrapper",'children':[rumext.v2.jsx("h1",{'className':"main_ui_auth_recovery_request__auth-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.recovery-request-title")}),rumext.v2.jsx("div",{'className':"main_ui_auth_recovery_request__auth-subtitle",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.recovery-request-subtitle")}),rumext.v2.jsx("hr",{'className':"main_ui_auth_recovery_request__separator"}),rumext.v2.jsx(app.main.ui.auth.recovery_request.recovery_form,{'params':params,'on-success-callback':on_success_callback}),rumext.v2.jsx("hr",{'className':"main_ui_auth_recovery_request__separator"}),rumext.v2.jsx("div",{'className':"main_ui_auth_recovery_request__go-back",'children':rumext.v2.jsx(app.main.ui.components.link.link,{'action':go_back,'class':"main_ui_auth_recovery_request__go-back-link",'data-testid':"go-back-link",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.go-back")})})]});
});

(app.main.ui.auth.recovery_request.recovery_request_page.displayName = "recovery-request-page");

app.main.ui.auth.recovery_request.recovery_sent_page = (function app$main$ui$auth$recovery_request$recovery_sent_page(props_53161){
var email = props_53161.email;
return rumext.v2.jsxs("div",{'className':"main_ui_auth_recovery_request__auth-form-wrapper main_ui_auth_recovery_request__register-success",'children':[rumext.v2.jsxs("div",{'className':"main_ui_auth_recovery_request__auth-title-wrapper",'children':[rumext.v2.jsx("h2",{'className':"main_ui_auth_recovery_request__auth-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.check-mail")}),rumext.v2.jsx("div",{'className':"main_ui_auth_recovery_request__notification-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.login.sent-recovery")})]}),rumext.v2.jsx("div",{'className':"main_ui_auth_recovery_request__notification-text-email",'children':email}),rumext.v2.jsx("div",{'className':"main_ui_auth_recovery_request__notification-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("not-found.login.sent-recovery-check")})]});
});

(app.main.ui.auth.recovery_request.recovery_sent_page.displayName = "recovery-sent-page");


//# sourceMappingURL=app.main.ui.auth.recovery_request.js.map
