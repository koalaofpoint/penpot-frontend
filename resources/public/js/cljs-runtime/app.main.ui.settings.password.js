import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.schema.js";
import "./app.main.data.notifications.js";
import "./app.main.data.profile.js";
import "./app.main.store.js";
import "./app.main.ui.components.forms.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.settings.password');
app.main.ui.settings.password.on_error = (function app$main$ui$settings$password$on_error(form,error){
var data = cljs.core.ex_data(error);
var G__66867 = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(data);
var G__66867__$1 = (((G__66867 instanceof cljs.core.Keyword))?G__66867.fqn:null);
switch (G__66867__$1) {
case "old-password-not-match":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),new cljs.core.Keyword(null,"password-old","password-old",119312255)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.wrong-old-password")], null));

break;
case "email-as-password":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),new cljs.core.Keyword(null,"password-1","password-1",983206964)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.email-as-password")], null));

break;
default:
var msg = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("generic.error");
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(msg));

}
});
app.main.ui.settings.password.on_success = (function app$main$ui$settings$password$on_success(form){
cljs.core.reset_BANG_(form,null);

var password_old_node = app.util.dom.get_element("password-old");
var msg = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.notifications.password-saved");
app.util.dom.clean_value_BANG_(password_old_node);

app.util.dom.focus_BANG_(password_old_node);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(msg));
});
app.main.ui.settings.password.on_submit = (function app$main$ui$settings$password$on_submit(form,event){
app.util.dom.prevent_default(event);

var params = cljs.core.with_meta(new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.ui.settings.password.on_success,form),new cljs.core.Keyword(null,"on-error","on-error",1728533530),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.ui.settings.password.on_error,form)], null));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.profile.update_password(params));
});
app.main.ui.settings.password.schema_COLON_password_form = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"PasswordForm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password-1","password-1",983206964),new cljs.core.Keyword("app.common.schema","password","app.common.schema/password",836164606)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password-2","password-2",-1471375738),new cljs.core.Keyword("app.common.schema","password","app.common.schema/password",836164606)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password-old","password-old",119312255),new cljs.core.Keyword("app.common.schema","password","app.common.schema/password",836164606)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","code","error/code",-1740032098),"errors.password-invalid-confirmation",new cljs.core.Keyword("error","field","error/field",-1330531468),new cljs.core.Keyword(null,"password-2","password-2",-1471375738)], null),(function (p__66868){
var map__66869 = p__66868;
var map__66869__$1 = cljs.core.__destructure_map(map__66869);
var password_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66869__$1,new cljs.core.Keyword(null,"password-1","password-1",983206964));
var password_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66869__$1,new cljs.core.Keyword(null,"password-2","password-2",-1471375738));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(password_1,password_2);
})], null)], null);
app.main.ui.settings.password.password_form = (function app$main$ui$settings$password$password_form(props_66872){
var initial = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"password-old","password-old",119312255),"",new cljs.core.Keyword(null,"password-1","password-1",983206964),"",new cljs.core.Keyword(null,"password-2","password-2",-1471375738),""], null);
}));
var form = (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.settings.password.schema_COLON_password_form,new cljs.core.Keyword(null,"initial","initial",1854648214),initial) : app.main.ui.components.forms.use_form.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.settings.password.schema_COLON_password_form,new cljs.core.Keyword(null,"initial","initial",1854648214),initial));
return rumext.v2.jsxs(app.main.ui.components.forms.form,{'class':"main_ui_settings_password__password-form",'on-submit':app.main.ui.settings.password.on_submit,'form':form,'children':[rumext.v2.jsx("div",{'className':"main_ui_settings_password__fields-row",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'type':"password",'name':new cljs.core.Keyword(null,"password-old","password-old",119312255),'auto-focus?':true,'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.old-password")})}),rumext.v2.jsx("div",{'className':"main_ui_settings_password__fields-row",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'type':"password",'name':new cljs.core.Keyword(null,"password-1","password-1",983206964),'show-success?':true,'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.new-password")})}),rumext.v2.jsx("div",{'className':"main_ui_settings_password__fields-row",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'type':"password",'name':new cljs.core.Keyword(null,"password-2","password-2",-1471375738),'show-success?':true,'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.confirm-password")})}),rumext.v2.jsx(app.main.ui.components.forms.submit_button_STAR_,{'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.password-change"),'data-testid':"submit-password",'className':"main_ui_settings_password__update-btn"})]});
});

(app.main.ui.settings.password.password_form.displayName = "password-form");

app.main.ui.settings.password.password_page = (function app$main$ui$settings$password$password_page(props_66874){
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return app.util.dom.set_html_title(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("title.settings.password"));
}));

return rumext.v2.jsx("section",{'className':"main_ui_settings_password__dashboard-settings",'children':rumext.v2.jsxs("div",{'className':"main_ui_settings_password__form-container",'children':[rumext.v2.jsx("h2",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.password-change")}),rumext.v2.jsx(app.main.ui.settings.password.password_form,{})]})});
});

(app.main.ui.settings.password.password_page.displayName = "password-page");


//# sourceMappingURL=app.main.ui.settings.password.js.map
