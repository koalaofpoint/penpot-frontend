import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.geom.point.js";
import "./app.main.data.common.js";
import "./app.main.data.dashboard.js";
import "./app.main.data.modal.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.context_menu_a11y.js";
import "./app.main.ui.dashboard.grid.js";
import "./app.main.ui.ds.buttons.button.js";
import "./app.main.ui.ds.product.empty_placeholder.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.dashboard.deleted');
app.main.ui.dashboard.deleted.ref_COLON_deleted_files = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deleted-files","deleted-files",-555859130),app.main.store.state);
app.main.ui.dashboard.deleted.menu_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_deleted__menu-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-menu"})});
app.main.ui.dashboard.deleted.on_restore_project = (function app$main$ui$dashboard$deleted$on_restore_project(project){
var on_accept = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.restore_project_immediately(project));
});
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.restore-project-confirmation.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.restore-project-confirmation.description",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project)], 0)),new cljs.core.Keyword(null,"accept-style","accept-style",630742659),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.continue"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),on_accept], null)));
});
app.main.ui.dashboard.deleted.on_delete_project = (function app$main$ui$dashboard$deleted$on_delete_project(project){
var accept_fn = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.delete_project_immediately(project));
});
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.delete-forever-confirmation.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.delete-project-forever-confirmation.description",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project)], 0)),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.delete-forever-confirmation.title"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),accept_fn], null)));
});
app.main.ui.dashboard.deleted.header_STAR_ = (function app$main$ui$dashboard$deleted$header_STAR_(props_58526){
return rumext.v2.jsx("header",{'data-testid':"dashboard-header",'className':"main_ui_dashboard_deleted__dashboard-header",'children':rumext.v2.jsx("div",{'id':"dashboard-deleted-title",'className':"main_ui_dashboard_deleted__dashboard-title",'children':rumext.v2.jsx("h1",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.projects-title")})})});
});

(app.main.ui.dashboard.deleted.header_STAR_.displayName = "header*");

app.main.ui.dashboard.deleted.project_context_menu_STAR_ = (function app$main$ui$dashboard$deleted$project_context_menu_STAR_(props_58529){
var show = props_58529.show;
var left = props_58529.left;
var on_close = props_58529.onClose;
var top = props_58529.top;
var project = props_58529.project;
var top__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(top,(0));
var left__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(left,(0));
var on_restore_project = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(project)],cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.ui.dashboard.deleted.on_restore_project,project));
var on_delete_project = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(project)],cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.ui.dashboard.deleted.on_delete_project,project));
var options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_restore_project),rumext.v2.adapt(on_delete_project)],(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.restore-project-button"),new cljs.core.Keyword(null,"id","id",-1388402092),"project-restore",new cljs.core.Keyword(null,"handler","handler",-195596612),on_restore_project], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.delete-project-button"),new cljs.core.Keyword(null,"id","id",-1388402092),"project-delete",new cljs.core.Keyword(null,"handler","handler",-195596612),on_delete_project], null)], null);
}));
return rumext.v2.jsx(app.main.ui.components.context_menu_a11y.context_menu_STAR_,{'onClose':on_close,'show':show,'fixed':((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(top__$1,(0))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(left__$1,(0)))),'minWidth':true,'top':top__$1,'left':left__$1,'options':options});
});

(app.main.ui.dashboard.deleted.project_context_menu_STAR_.displayName = "project-context-menu*");

app.main.ui.dashboard.deleted.deleted_project_item_STAR_ = (function app$main$ui$dashboard$deleted$deleted_project_item_STAR_(props_58534){
var project = props_58534.project;
var files = props_58534.files;
var project_files = cljs.core.filterv((function (p1__58533_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"project-id","project-id",206449307).cljs$core$IFn$_invoke$arity$1(p1__58533_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project));
}),files);
var empty_QMARK_ = cljs.core.empty_QMARK_(project_files);
var selected_files = rumext.v2.deref(app.main.refs.selected_files);
var dstate = rumext.v2.deref(app.main.refs.dashboard_local);
var edit_id = new cljs.core.Keyword(null,"project-for-edit","project-for-edit",-763691370).cljs$core$IFn$_invoke$arity$1(dstate);
var local = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false,new cljs.core.Keyword(null,"menu-pos","menu-pos",1459627496),null,new cljs.core.Keyword(null,"edition","edition",1337508089),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project),edit_id)], null);
}));
var vec__58535 = app.main.ui.hooks.use_dynamic_grid_item_width.cljs$core$IFn$_invoke$arity$0();
var rowref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58535,(0),null);
var limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58535,(1),null);
var on_menu_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

var client_position = app.util.dom.get_client_position(event);
var position = (((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(client_position) == null)) && ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(client_position) == null))))?(function (){var target_element = app.util.dom.get_target(event);
var points = app.util.dom.get_bounding_rect(target_element);
var y = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(points);
var x = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(points);
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y);
})():client_position);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(local,cljs.core.assoc,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"menu-pos","menu-pos",1459627496),position], 0));
}));
var on_menu_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local,cljs.core.assoc,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
}));
var handle_menu_click = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_menu_click)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
app.util.dom.stop_propagation(event);

return (on_menu_click.cljs$core$IFn$_invoke$arity$1 ? on_menu_click.cljs$core$IFn$_invoke$arity$1(event) : on_menu_click.call(null,event));
} else {
return null;
}
}));
return rumext.v2.jsxs("article",{'className':"main_ui_dashboard_deleted__dashboard-project-row",'children':[rumext.v2.jsx("header",{'className':"main_ui_dashboard_deleted__project",'children':rumext.v2.jsxs("div",{'className':"main_ui_dashboard_deleted__project-name-wrapper",'children':[rumext.v2.jsx("h2",{'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project),'className':"main_ui_dashboard_deleted__project-name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project)}),(cljs.core.truth_(new cljs.core.Keyword(null,"deleted-at","deleted-at",1742232687).cljs$core$IFn$_invoke$arity$1(project))?rumext.v2.jsxs("div",{'className':"main_ui_dashboard_deleted__info-wrapper",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_deleted__project-actions",'children':rumext.v2.jsx("button",{'onClick':on_menu_click,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.options"),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.options"),'data-testid':"project-options",'onKeyDown':handle_menu_click,'className':"main_ui_dashboard_deleted__options-btn",'children':app.main.ui.dashboard.deleted.menu_icon})}),(cljs.core.truth_(new cljs.core.Keyword(null,"menu-open","menu-open",1430293295).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local)))?rumext.v2.jsx(app.main.ui.dashboard.deleted.project_context_menu_STAR_,{'project':project,'show':new cljs.core.Keyword(null,"menu-open","menu-open",1430293295).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local)),'left':((24) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"menu-pos","menu-pos",1459627496).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local)))),'top':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"menu-pos","menu-pos",1459627496).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local))),'onClose':on_menu_close}):null)]}):null)]})}),rumext.v2.jsx("div",{'ref':rowref,'className':"main_ui_dashboard_deleted__grid-container",'children':((empty_QMARK_)?rumext.v2.jsx(app.main.ui.ds.product.empty_placeholder.empty_placeholder_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-placeholder-files-title"),'className':"main_ui_dashboard_deleted__placeholder-placement",'type':(1),'subtitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-placeholder-files-subtitle")}):rumext.v2.jsx(app.main.ui.dashboard.grid.grid_STAR_,{'project':project,'files':project_files,'origin':new cljs.core.Keyword(null,"deleted","deleted",-510100639),'canEdit':false,'canRestore':true,'limit':limit,'selectedFiles':selected_files}))})]});
});

(app.main.ui.dashboard.deleted.deleted_project_item_STAR_.displayName = "deleted-project-item*");

app.main.ui.dashboard.deleted.menu_STAR_ = (function app$main$ui$dashboard$deleted$menu_STAR_(props_58539){
var team_id = props_58539.teamId;
var section = props_58539.section;
var on_recent_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_recent.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], 0)));
}));
var on_deleted_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_deleted.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], 0)));
}));
return rumext.v2.jsx("div",{'className':"main_ui_dashboard_deleted__nav",'children':rumext.v2.jsxs("div",{'className':"main_ui_dashboard_deleted__nav-inside",'children':[rumext.v2.jsx("div",{'data-testid':"recent-tab",'onClick':on_recent_click,'className':("main_ui_dashboard_deleted__nav-option" ?? "")+" "+(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"dashboard-recent","dashboard-recent",-1541043167)))?"main_ui_dashboard_deleted__selected":"") ?? ""),'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.recent")}),rumext.v2.jsx("div",{'variant':"ghost",'type':"button",'data-testid':"deleted-tab",'onClick':on_deleted_click,'className':("main_ui_dashboard_deleted__nav-option" ?? "")+" "+(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"dashboard-deleted","dashboard-deleted",-551384632)))?"main_ui_dashboard_deleted__selected":"") ?? ""),'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.deleted")})]})});
});

(app.main.ui.dashboard.deleted.menu_STAR_.displayName = "menu*");

app.main.ui.dashboard.deleted.deleted_section_STAR_ = (function app$main$ui$dashboard$deleted$deleted_section_STAR_(props_58545){
var projects = props_58545.projects;
var team = props_58545.team;
var deleted_map = rumext.v2.deref(app.main.ui.dashboard.deleted.ref_COLON_deleted_files);
var projects__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(projects),rumext.v2.adapt(deleted_map)],(function (){
return cljs.core.not_empty(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (project){
if(cljs.core.truth_(deleted_map)){
return cljs.core.some((function (p1__58541_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"project-id","project-id",206449307).cljs$core$IFn$_invoke$arity$1(p1__58541_SHARP_));
}),cljs.core.vals(deleted_map));
} else {
return null;
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (project){
var or__5025__auto__ = new cljs.core.Keyword(null,"deleted-at","deleted-at",1742232687).cljs$core$IFn$_invoke$arity$1(project);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.truth_(deleted_map)){
return cljs.core.some((function (p1__58540_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"project-id","project-id",206449307).cljs$core$IFn$_invoke$arity$1(p1__58540_SHARP_));
}),cljs.core.vals(deleted_map));
} else {
return null;
}
}
}),projects)))));
}));
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"id","id",-1388402092));
var deletion_days = (function (){var subscription = cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"subscription","subscription",1949009182));
var sub_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword(null,"type","type",1174270348));
var sub_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword(null,"status","status",-1997798413));
var canceled_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["unpaid",null,"canceled",null], null), null),sub_status);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("unlimited",sub_type)) && ((!(canceled_QMARK_))))){
return (30);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("enterprise",sub_type)) && ((!(canceled_QMARK_))))){
return (90);
} else {
return (7);

}
}
})();
var on_delete_all = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id),rumext.v2.adapt(deleted_map)],(function (){
var temp__5825__auto__ = cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.key),deleted_map));
if(cljs.core.truth_(temp__5825__auto__)){
var ids = temp__5825__auto__;
var on_accept = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.delete_files_immediately(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id,new cljs.core.Keyword(null,"ids","ids",-998535796),ids], null)));
});
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.delete-forever-confirmation.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.delete-all-forever-confirmation.description",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(ids)], 0)),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.delete-forever-confirmation.title"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),on_accept], null)));
} else {
return null;
}
}));
var on_restore_all = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id),rumext.v2.adapt(deleted_map)],(function (){
var temp__5825__auto__ = cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.key),deleted_map));
if(cljs.core.truth_(temp__5825__auto__)){
var ids = temp__5825__auto__;
var on_accept = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.restore_files_immediately(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id,new cljs.core.Keyword(null,"ids","ids",-998535796),ids], null)));
});
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.restore-all-confirmation.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.restore-all-confirmation.description",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(ids)], 0)),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.continue"),new cljs.core.Keyword(null,"accept-style","accept-style",630742659),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),on_accept], null)));
} else {
return null;
}
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.dashboard.fetch_projects(team_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.dashboard.fetch_deleted_files.cljs$core$IFn$_invoke$arity$1(team_id),app.main.data.dashboard.clear_selected_files()], 0));
}));

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.dashboard.deleted.header_STAR_,{'team':team}),rumext.v2.jsx("section",{'data-testid':"deleted-page-section",'className':"main_ui_dashboard_deleted__dashboard-container main_ui_dashboard_deleted__no-bg",'children':rumext.v2.jsx(rumext.v2.Fragment,{'children':rumext.v2.jsxs("div",{'className':"main_ui_dashboard_deleted__no-bg",'children':[rumext.v2.jsx(app.main.ui.dashboard.deleted.menu_STAR_,{'teamId':team_id,'section':new cljs.core.Keyword(null,"dashboard-deleted","dashboard-deleted",-551384632)}),((cljs.core.seq(projects__$1))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'className':"main_ui_dashboard_deleted__deleted-info-content",'children':[rumext.v2.jsxs("p",{'className':"main_ui_dashboard_deleted__deleted-info",'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.trash-info-text-part1"),rumext.v2.jsx("span",{'className':"main_ui_dashboard_deleted__info-text-highlight",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.trash-info-text-part2",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([deletion_days], 0))}),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.trash-info-text-part3"),rumext.v2.jsx("br",{}),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.trash-info-text-part4")]}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_deleted__deleted-options",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"ghost",'type':"button",'onClick':on_restore_all,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.restore-all-deleted-button")}),rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"destructive",'type':"button",'icon':"delete",'onClick':on_delete_all,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.clear-trash-button")})]})]}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__58557){
var map__58558 = p__58557;
var map__58558__$1 = cljs.core.__destructure_map(map__58558);
var project = map__58558__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58558__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
out_arr__35152__auto__.push((function (){var files = (cljs.core.truth_(deleted_map)?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),(function (p1__58544_SHARP_,p2__58543_SHARP_){
return cljs.core.compare(p2__58543_SHARP_,p1__58544_SHARP_);
}),cljs.core.filterv((function (p1__58542_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"project-id","project-id",206449307).cljs$core$IFn$_invoke$arity$1(p1__58542_SHARP_));
}),cljs.core.vals(deleted_map))):null);
return rumext.v2.jsx(app.main.ui.dashboard.deleted.deleted_project_item_STAR_,{'project':project,'files':files},id);
})());

return out_arr__35152__auto__;
}),[],projects__$1)]}):rumext.v2.jsx("div",{'className':"main_ui_dashboard_deleted__deleted-info-content",'children':rumext.v2.jsx("p",{'className':"main_ui_dashboard_deleted__deleted-info",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.deleted.empty-state-description")})}))]})})})]});
});

(app.main.ui.dashboard.deleted.deleted_section_STAR_.displayName = "deleted-section*");


//# sourceMappingURL=app.main.ui.dashboard.deleted.js.map
