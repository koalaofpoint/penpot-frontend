import "./cljs_env.js";
import "./cljs.core.js";
import "./app.config.js";
import "./app.main.data.common.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.data.team.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.main.ui.dashboard.sidebar.js";
import "./app.main.ui.icons.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.settings.sidebar');
app.main.ui.settings.sidebar.arrow_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_settings_sidebar__arrow-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-arrow"})});
app.main.ui.settings.sidebar.feedback_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_settings_sidebar__feedback-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-feedback"})});
app.main.ui.settings.sidebar.go_settings_profile = (function app$main$ui$settings$sidebar$go_settings_profile(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"settings-profile","settings-profile",-520294200)));
});
app.main.ui.settings.sidebar.go_settings_feedback = (function app$main$ui$settings$sidebar$go_settings_feedback(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"settings-feedback","settings-feedback",-1884878904)));
});
app.main.ui.settings.sidebar.go_settings_password = (function app$main$ui$settings$sidebar$go_settings_password(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"settings-password","settings-password",-1747755582)));
});
app.main.ui.settings.sidebar.go_settings_options = (function app$main$ui$settings$sidebar$go_settings_options(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"settings-options","settings-options",1577810826)));
});
app.main.ui.settings.sidebar.go_settings_subscription = (function app$main$ui$settings$sidebar$go_settings_subscription(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"settings-subscription","settings-subscription",11670706)));
});
app.main.ui.settings.sidebar.go_settings_access_tokens = (function app$main$ui$settings$sidebar$go_settings_access_tokens(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"settings-access-tokens","settings-access-tokens",-527363437)));
});
app.main.ui.settings.sidebar.go_settings_notifications = (function app$main$ui$settings$sidebar$go_settings_notifications(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"settings-notifications","settings-notifications",-990272802)));
});
app.main.ui.settings.sidebar.show_release_notes = (function app$main$ui$settings$sidebar$show_release_notes(event){
var version = new cljs.core.Keyword(null,"main","main",-2117802661).cljs$core$IFn$_invoke$arity$1(app.config.version);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"show-release-notes",new cljs.core.Keyword(null,"version","version",425292698),version], null)));

if(((app.util.keyboard.alt_QMARK_(event)) && (app.util.keyboard.mod_QMARK_(event)))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"onboarding","onboarding",-1622662800)], null)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"release-notes","release-notes",1238210686),new cljs.core.Keyword(null,"version","version",425292698),version], null)));
}
});
app.main.ui.settings.sidebar.sidebar_content = (function app$main$ui$settings$sidebar$sidebar_content(props_66880){
var profile = props_66880.profile;
var section = props_66880.section;
var profile_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"settings-profile","settings-profile",-520294200));
var password_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"settings-password","settings-password",-1747755582));
var options_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"settings-options","settings-options",1577810826));
var feedback_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"settings-feedback","settings-feedback",-1884878904));
var subscription_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"settings-subscription","settings-subscription",11670706));
var access_tokens_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"settings-access-tokens","settings-access-tokens",-527363437));
var notifications_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"settings-notifications","settings-notifications",-990272802));
var team_id = (function (){var or__5025__auto__ = app.main.data.team.get_last_team_id();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"default-team-id","default-team-id",1198639706).cljs$core$IFn$_invoke$arity$1(profile);
}
})();
var go_dashboard = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_recent.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], 0)));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_settings_sidebar__sidebar-content",'children':[rumext.v2.jsx("div",{'className':"main_ui_settings_sidebar__sidebar-content-section",'children':rumext.v2.jsxs("button",{'onClick':go_dashboard,'className':"main_ui_settings_sidebar__back-to-dashboard",'children':[app.main.ui.settings.sidebar.arrow_icon,rumext.v2.jsx("span",{'className':"main_ui_settings_sidebar__back-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.dashboard")})]})}),rumext.v2.jsx("hr",{'className':"main_ui_settings_sidebar__sidebar-separator"}),rumext.v2.jsx("div",{'className':"main_ui_settings_sidebar__sidebar-content-section",'children':rumext.v2.jsxs("ul",{'className':"main_ui_settings_sidebar__sidebar-nav-settings",'children':[rumext.v2.jsx("li",{'onClick':app.main.ui.settings.sidebar.go_settings_profile,'className':((profile_QMARK_)?"main_ui_settings_sidebar__current":"")+" "+"main_ui_settings_sidebar__settings-item",'children':rumext.v2.jsx("span",{'className':"main_ui_settings_sidebar__element-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.profile")})}),rumext.v2.jsx("li",{'onClick':app.main.ui.settings.sidebar.go_settings_password,'className':((password_QMARK_)?"main_ui_settings_sidebar__current":"")+" "+"main_ui_settings_sidebar__settings-item",'children':rumext.v2.jsx("span",{'className':"main_ui_settings_sidebar__element-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.password")})}),rumext.v2.jsx("li",{'onClick':app.main.ui.settings.sidebar.go_settings_notifications,'className':((notifications_QMARK_)?"main_ui_settings_sidebar__current":"")+" "+"main_ui_settings_sidebar__settings-item",'children':rumext.v2.jsx("span",{'className':"main_ui_settings_sidebar__element-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.notifications")})}),rumext.v2.jsx("li",{'onClick':app.main.ui.settings.sidebar.go_settings_options,'data-testid':"settings-profile",'className':((options_QMARK_)?"main_ui_settings_sidebar__current":"")+" "+"main_ui_settings_sidebar__settings-item",'children':rumext.v2.jsx("span",{'className':"main_ui_settings_sidebar__element-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.settings")})}),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776)))?rumext.v2.jsx("li",{'onClick':app.main.ui.settings.sidebar.go_settings_subscription,'data-testid':"settings-subscription",'className':((subscription_QMARK_)?"main_ui_settings_sidebar__current":"")+" "+"main_ui_settings_sidebar__settings-item",'children':rumext.v2.jsx("span",{'className':"main_ui_settings_sidebar__element-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.labels")})}):null),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"access-tokens","access-tokens",713316693)))?rumext.v2.jsx("li",{'onClick':app.main.ui.settings.sidebar.go_settings_access_tokens,'data-testid':"settings-access-tokens",'className':((access_tokens_QMARK_)?"main_ui_settings_sidebar__current":"")+" "+"main_ui_settings_sidebar__settings-item",'children':rumext.v2.jsx("span",{'className':"main_ui_settings_sidebar__element-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.access-tokens")})}):null),rumext.v2.jsx("hr",{'className':"main_ui_settings_sidebar__sidebar-separator"}),rumext.v2.jsx("li",{'onClick':app.main.ui.settings.sidebar.show_release_notes,'data-testid':"release-notes",'className':"main_ui_settings_sidebar__settings-item",'children':rumext.v2.jsx("span",{'className':"main_ui_settings_sidebar__element-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.release-notes")})}),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"user-feedback","user-feedback",89199827)))?rumext.v2.jsxs("li",{'onClick':app.main.ui.settings.sidebar.go_settings_feedback,'className':((feedback_QMARK_)?"main_ui_settings_sidebar__current":"")+" "+"main_ui_settings_sidebar__settings-item",'children':[app.main.ui.settings.sidebar.feedback_icon,rumext.v2.jsx("span",{'className':"main_ui_settings_sidebar__element-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.contact-us")})]}):null)]})})]});
});

(app.main.ui.settings.sidebar.sidebar_content.displayName = "sidebar-content");

app.main.ui.settings.sidebar.sidebar = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$settings$sidebar$sidebar(props_66881){
var profile = props_66881.profile;
var section = props_66881.section;
return rumext.v2.jsxs("div",{'className':"main_ui_settings_sidebar__dashboard-sidebar main_ui_settings_sidebar__settings",'children':[rumext.v2.jsx(app.main.ui.settings.sidebar.sidebar_content,{'profile':profile,'section':section}),rumext.v2.jsx(app.main.ui.dashboard.sidebar.profile_section_STAR_,{'profile':profile})]});
}));

(app.main.ui.settings.sidebar.sidebar.displayName = "sidebar");


//# sourceMappingURL=app.main.ui.settings.sidebar.js.map
