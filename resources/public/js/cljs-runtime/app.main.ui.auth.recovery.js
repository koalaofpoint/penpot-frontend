import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.schema.js";
import "./app.main.data.notifications.js";
import "./app.main.data.profile.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.main.ui.components.forms.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.auth.recovery');
app.main.ui.auth.recovery.schema_COLON_recovery_form = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"RecoveryForm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password-1","password-1",983206964),new cljs.core.Keyword("app.common.schema","password","app.common.schema/password",836164606)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password-2","password-2",-1471375738),new cljs.core.Keyword("app.common.schema","password","app.common.schema/password",836164606)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),"errors.password-invalid-confirmation",new cljs.core.Keyword("error","field","error/field",-1330531468),new cljs.core.Keyword(null,"password-2","password-2",-1471375738)], null),(function (p__58593){
var map__58594 = p__58593;
var map__58594__$1 = cljs.core.__destructure_map(map__58594);
var password_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58594__$1,new cljs.core.Keyword(null,"password-1","password-1",983206964));
var password_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58594__$1,new cljs.core.Keyword(null,"password-2","password-2",-1471375738));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(password_1,password_2);
})], null)], null);
app.main.ui.auth.recovery.on_error = (function app$main$ui$auth$recovery$on_error(_form,_error){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.invalid-recovery-token")));
});
app.main.ui.auth.recovery.on_success = (function app$main$ui$auth$recovery$on_success(_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.notifications.info.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.notifications.password-changed-successfully")),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"auth-login","auth-login",-1527817479))], 0));
});
app.main.ui.auth.recovery.on_submit = (function app$main$ui$auth$recovery$on_submit(form,_event){
var mdata = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),app.main.ui.auth.recovery.on_error,new cljs.core.Keyword(null,"on-success","on-success",1786904109),app.main.ui.auth.recovery.on_success], null);
var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clean-data","clean-data",1601974651),new cljs.core.Keyword(null,"token","token",-1211463215)], null)),new cljs.core.Keyword(null,"password","password",417022471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clean-data","clean-data",1601974651),new cljs.core.Keyword(null,"password-2","password-2",-1471375738)], null))], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.profile.recover_profile(cljs.core.with_meta(params,mdata)));
});
app.main.ui.auth.recovery.recovery_form = (function app$main$ui$auth$recovery$recovery_form(props_58595){
var map__58596 = rumext.v2.util.wrap_props(props_58595);
var map__58596__$1 = cljs.core.__destructure_map(map__58596);
var props = map__58596__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58596__$1,new cljs.core.Keyword(null,"params","params",710516235));
var form = (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.auth.recovery.schema_COLON_recovery_form,new cljs.core.Keyword(null,"initial","initial",1854648214),params) : app.main.ui.components.forms.use_form.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.auth.recovery.schema_COLON_recovery_form,new cljs.core.Keyword(null,"initial","initial",1854648214),params));
return rumext.v2.jsxs(app.main.ui.components.forms.form,{'on-submit':app.main.ui.auth.recovery.on_submit,'class':"main_ui_auth_recovery__recovery-form",'form':form,'children':[rumext.v2.jsx("div",{'className':"main_ui_auth_recovery__fields-row",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'type':"password",'name':new cljs.core.Keyword(null,"password-1","password-1",983206964),'show-success?':true,'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.new-password"),'class':"main_ui_auth_recovery__form-field"})}),rumext.v2.jsx("div",{'className':"main_ui_auth_recovery__fields-row",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'type':"password",'name':new cljs.core.Keyword(null,"password-2","password-2",-1471375738),'show-success?':true,'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.confirm-password"),'class':"main_ui_auth_recovery__form-field"})}),rumext.v2.jsx(app.main.ui.components.forms.submit_button_STAR_,{'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.recovery-submit"),'className':"main_ui_auth_recovery__submit-btn"})]});
});

(app.main.ui.auth.recovery.recovery_form.displayName = "recovery-form");

app.main.ui.auth.recovery.recovery_page = (function app$main$ui$auth$recovery$recovery_page(props_58597){
var map__58598 = rumext.v2.util.wrap_props(props_58597);
var map__58598__$1 = cljs.core.__destructure_map(map__58598);
var props = map__58598__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58598__$1,new cljs.core.Keyword(null,"params","params",710516235));
return rumext.v2.jsxs("div",{'className':"main_ui_auth_recovery__auth-form-wrapper",'children':[rumext.v2.jsx("h1",{'className':"main_ui_auth_recovery__auth-title",'children':"Forgot your password?"}),rumext.v2.jsx("div",{'className':"main_ui_auth_recovery__auth-subtitle",'children':"Please enter your new password"}),rumext.v2.jsx("hr",{'className':"main_ui_auth_recovery__separator"}),rumext.v2.jsx(app.main.ui.auth.recovery.recovery_form,{'params':params}),rumext.v2.jsx("div",{'className':"main_ui_auth_recovery__links",'children':rumext.v2.jsx("div",{'className':"main_ui_auth_recovery__go-back",'children':rumext.v2.jsx("a",{'onClick':(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"auth-login","auth-login",-1527817479)));
}),'className':"main_ui_auth_recovery__go-back-link",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("profile.recovery.go-to-login")})})})]});
});

(app.main.ui.auth.recovery.recovery_page.displayName = "recovery-page");


//# sourceMappingURL=app.main.ui.auth.recovery.js.map
