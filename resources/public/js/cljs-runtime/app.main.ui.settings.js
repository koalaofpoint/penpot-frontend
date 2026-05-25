import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.dashboard.shortcuts.js";
import "./app.main.refs.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.modal.js";
import "./app.main.ui.settings.access_tokens.js";
import "./app.main.ui.settings.change_email.js";
import "./app.main.ui.settings.delete_account.js";
import "./app.main.ui.settings.feedback.js";
import "./app.main.ui.settings.notifications.js";
import "./app.main.ui.settings.options.js";
import "./app.main.ui.settings.password.js";
import "./app.main.ui.settings.profile.js";
import "./app.main.ui.settings.sidebar.js";
import "./app.main.ui.settings.subscription.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.settings');
app.main.ui.settings.header = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$settings$header(props_66895){
return rumext.v2.jsx("header",{'data-testid':"dashboard-header",'className':"main_ui_settings__dashboard-header",'children':rumext.v2.jsx("div",{'className':"main_ui_settings__dashboard-title",'children':rumext.v2.jsx("h1",{'data-testid':"account-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.your-account-title")})})});
}));

(app.main.ui.settings.header.displayName = "header");

app.main.ui.settings.settings_STAR_ = (function app$main$ui$settings$settings_STAR_(props_66896){
var error_report_id = props_66896.errorReportId;
var type = props_66896.type;
var route = props_66896.route;
var error_href = props_66896.errorHref;
var section = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var profile = rumext.v2.deref(app.main.refs.profile);
app.main.ui.hooks.use_shortcuts(new cljs.core.Keyword("app.main.ui.settings","dashboard","app.main.ui.settings/dashboard",-311373545),app.main.data.dashboard.shortcuts.shortcuts);

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(profile)],(function (){
if((profile == null)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.assign_exception(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"authentication","authentication",1746273042)], null)));
} else {
return null;
}
}));

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.modal.modal_container_STAR_,{}),rumext.v2.jsxs("section",{'className':"main_ui_settings__dashboard-layout-refactor main_ui_settings__dashboard",'children':[rumext.v2.jsx(app.main.ui.settings.sidebar.sidebar,{'profile':profile,'section':section}),rumext.v2.jsxs("div",{'className':"main_ui_settings__dashboard-content",'children':[rumext.v2.jsx(app.main.ui.settings.header,{}),rumext.v2.jsx("section",{'className':"main_ui_settings__dashboard-container",'children':(function (){var G__66897 = section;
var G__66897__$1 = (((G__66897 instanceof cljs.core.Keyword))?G__66897.fqn:null);
switch (G__66897__$1) {
case "settings-profile":
return rumext.v2.jsx(app.main.ui.settings.profile.profile_page,{});

break;
case "settings-feedback":
return rumext.v2.jsx(app.main.ui.settings.feedback.feedback_page_STAR_,{'type':type,'errorReportId':error_report_id,'errorHref':error_href});

break;
case "settings-password":
return rumext.v2.jsx(app.main.ui.settings.password.password_page,{});

break;
case "settings-options":
return rumext.v2.jsx(app.main.ui.settings.options.options_page,{});

break;
case "settings-subscription":
return rumext.v2.jsx(app.main.ui.settings.subscription.subscription_page_STAR_,{'profile':profile});

break;
case "settings-access-tokens":
return rumext.v2.jsx(app.main.ui.settings.access_tokens.access_tokens_page,{});

break;
case "settings-notifications":
return rumext.v2.jsx(app.main.ui.settings.notifications.notifications_page_STAR_,{'profile':profile});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66897__$1)].join('')));

}
})()})]})]})]});
});

(app.main.ui.settings.settings_STAR_.displayName = "settings*");

app.main.ui.settings.settings_page_STAR_ = (function app$main$ui$settings$settings_page_STAR_(props_66898){
var props = props_66898;
return rumext.v2.create_element(app.main.ui.settings.settings_STAR_,props);
});

(app.main.ui.settings.settings_page_STAR_.displayName = "settings-page*");


//# sourceMappingURL=app.main.ui.settings.js.map
