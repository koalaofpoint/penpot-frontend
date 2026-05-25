import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.schema.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.data.profile.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.forms.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.notifications.context_notification.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.settings.change_email');
app.main.ui.settings.change_email.on_error = (function app$main$ui$settings$change_email$on_error(form,cause){
var map__66574 = cljs.core.ex_data(cause);
var map__66574__$1 = cljs.core.__destructure_map(map__66574);
var error = map__66574__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66574__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var G__66575 = code;
var G__66575__$1 = (((G__66575 instanceof cljs.core.Keyword))?G__66575.fqn:null);
switch (G__66575__$1) {
case "email-already-exists":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(form,(function (data){
var error__$1 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.email-already-exists")], null);
return cljs.core.assoc_in(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"email-1","email-1",1974791786)], null),error__$1);
}));

break;
case "profile-is-muted":
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.profile-is-muted")));

break;
case "email-has-permanent-bounces":
case "email-has-complaints":
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.email-has-permanent-bounces",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(error)], 0))));

break;
default:
return beicon.v2.core.throw$(cause);

}
});
app.main.ui.settings.change_email.on_success = (function app$main$ui$settings$change_email$on_success(profile,data){
if(cljs.core.truth_(new cljs.core.Keyword(null,"changed","changed",570724917).cljs$core$IFn$_invoke$arity$1(data))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.profile.refresh_profile(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.hide()], 0));
} else {
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("notifications.validation-email-sent",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(profile)], 0));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.notifications.info.cljs$core$IFn$_invoke$arity$1(message),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.hide()], 0));
}
});
app.main.ui.settings.change_email.on_submit = (function app$main$ui$settings$change_email$on_submit(profile,form,_event){
var params = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clean-data","clean-data",1601974651),new cljs.core.Keyword(null,"email-1","email-1",1974791786)], null))], null);
var mdata = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.ui.settings.change_email.on_error,form),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.ui.settings.change_email.on_success,profile)], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.profile.request_email_change(cljs.core.with_meta(params,mdata)));
});
app.main.ui.settings.change_email.schema_COLON_email_change_form = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"EmailChangeForm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email-1","email-1",1974791786),new cljs.core.Keyword("app.common.schema","email","app.common.schema/email",2070921211)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email-2","email-2",-1475431959),new cljs.core.Keyword("app.common.schema","email","app.common.schema/email",2070921211)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.invalid-email-confirmation");
}),new cljs.core.Keyword("error","field","error/field",-1330531468),new cljs.core.Keyword(null,"email-2","email-2",-1475431959)], null),(function (data){
var email_1 = new cljs.core.Keyword(null,"email-1","email-1",1974791786).cljs$core$IFn$_invoke$arity$1(data);
var email_2 = new cljs.core.Keyword(null,"email-2","email-2",-1475431959).cljs$core$IFn$_invoke$arity$1(data);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(email_1,email_2);
})], null)], null);
app.main.ui.settings.change_email.change_email_modal = (function app$main$ui$settings$change_email$change_email_modal(props_66577){
var profile = rumext.v2.deref(app.main.refs.profile);
var form = (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.settings.change_email.schema_COLON_email_change_form,new cljs.core.Keyword(null,"initial","initial",1854648214),profile) : app.main.ui.components.forms.use_form.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.settings.change_email.schema_COLON_email_change_form,new cljs.core.Keyword(null,"initial","initial",1854648214),profile));
var on_submit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(profile)],cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.ui.settings.change_email.on_submit,profile));
return rumext.v2.jsx("div",{'className':"main_ui_settings_change_email__modal-overlay",'children':rumext.v2.jsx("div",{'className':"main_ui_settings_change_email__modal-container",'children':rumext.v2.jsxs(app.main.ui.components.forms.form,{'form':form,'on-submit':on_submit,'children':[rumext.v2.jsxs("div",{'className':"main_ui_settings_change_email__modal-header",'children':[rumext.v2.jsx("h2",{'data-testid':"change-email-title",'className':"main_ui_settings_change_email__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.change-email.title")}),rumext.v2.jsx("button",{'onClick':app.main.data.modal.hide_BANG_,'className':"main_ui_settings_change_email__modal-close-btn",'children':app.main.ui.icons.close})]}),rumext.v2.jsxs("div",{'className':"main_ui_settings_change_email__modal-content",'children':[rumext.v2.jsx(app.main.ui.notifications.context_notification.context_notification,{'level':new cljs.core.Keyword(null,"info","info",-317069002),'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("modals.change-email.info",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(profile)], 0))}),rumext.v2.jsx("div",{'className':"main_ui_settings_change_email__fields-row",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'type':"email",'name':new cljs.core.Keyword(null,"email-1","email-1",1974791786),'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.change-email.new-email"),'trim':true,'show-success?':true})}),rumext.v2.jsx("div",{'className':"main_ui_settings_change_email__fields-row",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'type':"email",'name':new cljs.core.Keyword(null,"email-2","email-2",-1475431959),'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.change-email.confirm-email"),'trim':true,'show-success?':true})})]}),rumext.v2.jsx("div",{'className':"main_ui_settings_change_email__modal-footer",'children':rumext.v2.jsx("div",{'data-testid':"change-email-submit",'className':"main_ui_settings_change_email__action-buttons",'children':rumext.v2.jsx(app.main.ui.components.forms.submit_button_STAR_,{'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.change-email.submit")})})})]})})});
});

(app.main.ui.settings.change_email.change_email_modal.displayName = "change-email-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"change-email","change-email",-1066380073),app.main.ui.settings.change_email.change_email_modal);
}));

//# sourceMappingURL=app.main.ui.settings.change_email.js.map
