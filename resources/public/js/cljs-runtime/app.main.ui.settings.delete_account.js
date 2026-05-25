import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.data.profile.js";
import "./app.main.store.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.notifications.context_notification.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.settings.delete_account');
app.main.ui.settings.delete_account.on_error = (function app$main$ui$settings$delete_account$on_error(cause){
var code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(cause));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"owner-teams-with-people","owner-teams-with-people",-1234064148),code)){
var msg = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("notifications.profile-deletion-not-allowed");
return beicon.v2.core.of(app.main.data.notifications.error(msg));
} else {
return beicon.v2.core.throw$(cause);
}
});
app.main.ui.settings.delete_account.delete_account_modal = (function app$main$ui$settings$delete_account$delete_account_modal(props_66684){
var on_accept = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.modal.hide(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.profile.request_account_deletion(cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),app.main.ui.settings.delete_account.on_error], null)))], 0));
}));
return rumext.v2.jsx("div",{'className':"main_ui_settings_delete_account__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_settings_delete_account__modal-container",'children':[rumext.v2.jsxs("div",{'className':"main_ui_settings_delete_account__modal-header",'children':[rumext.v2.jsx("h2",{'className':"main_ui_settings_delete_account__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-account.title")}),rumext.v2.jsx("button",{'onClick':app.main.data.modal.hide_BANG_,'className':"main_ui_settings_delete_account__modal-close-btn",'children':app.main.ui.icons.close})]}),rumext.v2.jsx("div",{'className':"main_ui_settings_delete_account__modal-content",'children':rumext.v2.jsx(app.main.ui.notifications.context_notification.context_notification,{'level':new cljs.core.Keyword(null,"warning","warning",-1685650671),'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-account.info")})}),rumext.v2.jsx("div",{'className':"main_ui_settings_delete_account__modal-footer",'children':rumext.v2.jsxs("div",{'className':"main_ui_settings_delete_account__action-buttons",'children':[rumext.v2.jsx("button",{'onClick':app.main.data.modal.hide_BANG_,'className':"main_ui_settings_delete_account__cancel-button",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-account.cancel")}),rumext.v2.jsx("button",{'onClick':on_accept,'data-testid':"delete-account-btn",'className':"main_ui_settings_delete_account__accept-button"+" "+"main_ui_settings_delete_account__danger",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-account.confirm")})]})})]})});
});

(app.main.ui.settings.delete_account.delete_account_modal.displayName = "delete-account-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"delete-account","delete-account",725157341),app.main.ui.settings.delete_account.delete_account_modal);
}));

//# sourceMappingURL=app.main.ui.settings.delete_account.js.map
