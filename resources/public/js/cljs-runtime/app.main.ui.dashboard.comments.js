import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.comments.js";
import "./app.main.data.event.js";
import "./app.main.data.workspace.comments.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.comments.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.icons.js";
import "./app.util.i18n.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.dashboard.comments');
app.main.ui.dashboard.comments.comments_icon_svg = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_comments__comments-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-comments"})});
app.main.ui.dashboard.comments.comments_icon_STAR_ = (function app$main$ui$dashboard$comments$comments_icon_STAR_(props_53157){
var on_show_comments = props_53157.onShowComments;
var profile = props_53157.profile;
var threads_map = rumext.v2.deref(app.main.refs.comment_threads);
var tgroups = app.main.data.comments.group_threads_by_file_and_page(app.main.data.comments.apply_filters(cljs.core.PersistentArrayMap.EMPTY,profile,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),cljs.core.vals(threads_map)))));
return rumext.v2.jsx("div",{'className':"main_ui_dashboard_comments__dashboard-comments-section",'children':rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'tabIndex':"0",'className':"main_ui_dashboard_comments__comment-button",'data-testid':"open-comments",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.notifications.view"),'onClick':on_show_comments,'icon':app.main.ui.ds.foundations.assets.icon.comments,'children':((cljs.core.seq(tgroups))?rumext.v2.jsx("div",{'className':"main_ui_dashboard_comments__unread"}):null)})});
});

(app.main.ui.dashboard.comments.comments_icon_STAR_.displayName = "comments-icon*");

app.main.ui.dashboard.comments.comments_section = (function app$main$ui$dashboard$comments$comments_section(props_53163){
var map__53165 = rumext.v2.util.wrap_props(props_53163);
var map__53165__$1 = cljs.core.__destructure_map(map__53165);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53165__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var team = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53165__$1,new cljs.core.Keyword(null,"team","team",1355747699));
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53165__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
var on_hide_comments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53165__$1,new cljs.core.Keyword(null,"on-hide-comments","on-hide-comments",-1952668017));
var threads_map = rumext.v2.deref(app.main.refs.comment_threads);
var team_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team);
var tgroups = app.main.data.comments.group_threads_by_file_and_page(app.main.data.comments.apply_filters(cljs.core.PersistentArrayMap.EMPTY,profile,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),cljs.core.vals(threads_map)))));
var on_navigate = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (thread){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(app.main.data.workspace.comments.navigate_to_comment_from_dashboard(thread),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"dashboard"], null)));
}));
var on_read_all = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.mark_all_threads_as_read(team_id));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.retrieve_unread_comment_threads(team_id));
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(show_QMARK_)],(function (){
if(cljs.core.truth_(show_QMARK_)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"open-comment-notifications",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"dashboard"], null)));
} else {
return null;
}
}));

return rumext.v2.jsx("div",{'className':"main_ui_dashboard_comments__dashboard-comments-section",'children':rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':show_QMARK_,'on-close':on_hide_comments,'dropdown-id':"dashboard-comments",'children':rumext.v2.jsxs("div",{'className':"main_ui_dashboard_comments__dropdown main_ui_dashboard_comments__comments-section main_ui_dashboard_comments__comment-threads-section",'children':[rumext.v2.jsxs("div",{'className':"main_ui_dashboard_comments__header",'children':[rumext.v2.jsx("h3",{'className':"main_ui_dashboard_comments__header-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.notifications")}),((cljs.core.seq(tgroups))?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'className':"main_ui_dashboard_comments__mark-all-as-read-button main_ui_dashboard_comments__notifications-button",'variant':"action",'tabIndex':(cljs.core.truth_(show_QMARK_)?"0":"-1"),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("label.mark-all-as-read"),'onClick':on_read_all,'icon':app.main.ui.ds.foundations.assets.icon.tick}):null),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'className':"main_ui_dashboard_comments__notifications-button",'variant':"action",'tabIndex':(cljs.core.truth_(show_QMARK_)?"0":"-1"),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.close"),'onClick':on_hide_comments,'icon':app.main.ui.ds.foundations.assets.icon.close})]}),((cljs.core.seq(tgroups))?rumext.v2.jsxs("div",{'className':"main_ui_dashboard_comments__thread-groups",'children':[rumext.v2.jsx(app.main.ui.comments.comment_dashboard_thread_group_STAR_,{'group':cljs.core.first(tgroups),'onThreadClick':on_navigate,'showFileName':true}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,tgroup){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.comments.comment_dashboard_thread_group_STAR_,{'group':tgroup,'onThreadClick':on_navigate,'showFileName':true},new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(tgroup)));

return out_arr__35152__auto__;
}),[],cljs.core.rest(tgroups))]}):rumext.v2.jsxs("div",{'className':"main_ui_dashboard_comments__thread-groups-placeholder",'children':[app.main.ui.dashboard.comments.comments_icon_svg,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.no-comments-available")]}))]})})});
});

(app.main.ui.dashboard.comments.comments_section.displayName = "comments-section");


//# sourceMappingURL=app.main.ui.dashboard.comments.js.map
