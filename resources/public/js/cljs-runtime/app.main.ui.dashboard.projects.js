import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.geom.point.js";
import "./app.common.time.js";
import "./app.main.data.common.js";
import "./app.main.data.dashboard.js";
import "./app.main.data.dashboard.shortcuts.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.data.project.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.dashboard.deleted.js";
import "./app.main.ui.dashboard.grid.js";
import "./app.main.ui.dashboard.inline_edition.js";
import "./app.main.ui.dashboard.pin_button.js";
import "./app.main.ui.dashboard.project_menu.js";
import "./app.main.ui.ds.product.empty_placeholder.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./app.util.storage.js";
import "./cuerdas.core.js";
import "./okulary.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.dashboard.projects');
app.main.ui.dashboard.projects.show_more_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_projects__show-more-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-arrow"})});
app.main.ui.dashboard.projects.close_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_projects__close-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-close"})});
app.main.ui.dashboard.projects.add_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_projects__add-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-add"})});
app.main.ui.dashboard.projects.menu_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_projects__menu-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-menu"})});
app.main.ui.dashboard.projects.header_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$dashboard$projects$header_STAR_(props_58563){
var can_edit = props_58563.canEdit;
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.create_project());
}));
return rumext.v2.jsxs("header",{'data-testid':"dashboard-header",'className':"main_ui_dashboard_projects__dashboard-header",'children':[rumext.v2.jsx("div",{'id':"dashboard-projects-title",'className':"main_ui_dashboard_projects__dashboard-title",'children':rumext.v2.jsx("h1",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.projects-title")})}),(cljs.core.truth_(can_edit)?rumext.v2.jsx("button",{'onClick':on_click,'data-testid':"new-project-button",'className':"main_ui_dashboard_projects__btn-secondary main_ui_dashboard_projects__btn-small",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.new-project")}):null)]});
}));

(app.main.ui.dashboard.projects.header_STAR_.displayName = "header*");

app.main.ui.dashboard.projects.team_hero_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$dashboard$projects$team_hero_STAR_(props_58564){
var on_close = props_58564.onClose;
var team = props_58564.team;
var on_nav_members_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_members());
}));
var on_invite = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invite-members","invite-members",683231892),new cljs.core.Keyword(null,"team","team",1355747699),team,new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"hero","hero",1983137057)], null)));
}));
var on_close_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_close)],(function (event){
app.util.dom.prevent_default(event);

return (on_close.cljs$core$IFn$_invoke$arity$1 ? on_close.cljs$core$IFn$_invoke$arity$1(event) : on_close.call(null,event));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_dashboard_projects__team-hero",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_projects__img-wrapper",'children':rumext.v2.jsx("img",{'src':"images/deco-team-banner.png",'border':"0",'role':"presentation"})}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_projects__text",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_projects__title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dasboard.team-hero.title")}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_projects__info",'children':[rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dasboard.team-hero.text")}),rumext.v2.jsx("a",{'onClick':on_nav_members_click,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dasboard.team-hero.management")})]}),rumext.v2.jsx("button",{'onClick':on_invite,'className':"main_ui_dashboard_projects__btn-primary main_ui_dashboard_projects__invite",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.choice.team-up.invite-members")})]}),rumext.v2.jsx("button",{'onClick':on_close_SINGLEQUOTE_,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.close"),'className':"main_ui_dashboard_projects__close",'children':app.main.ui.dashboard.projects.close_icon})]});
}));

(app.main.ui.dashboard.projects.team_hero_STAR_.displayName = "team-hero*");

app.main.ui.dashboard.projects.project_item_STAR_ = (function app$main$ui$dashboard$projects$project_item_STAR_(props_58565){
var is_first = props_58565.isFirst;
var can_edit = props_58565.canEdit;
var project = props_58565.project;
var team = props_58565.team;
var files = props_58565.files;
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(project,new cljs.core.Keyword(null,"id","id",-1388402092));
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"id","id",-1388402092));
var file_count = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(project);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var is_draft_QMARK_ = new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(project);
var empty_QMARK_ = ((cljs.core.not(can_edit)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),file_count)));
var dstate = rumext.v2.deref(app.main.refs.dashboard_local);
var edit_id = new cljs.core.Keyword(null,"project-for-edit","project-for-edit",-763691370).cljs$core$IFn$_invoke$arity$1(dstate);
var local = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false,new cljs.core.Keyword(null,"menu-pos","menu-pos",1459627496),null,new cljs.core.Keyword(null,"edition","edition",1337508089),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project),edit_id)], null));
var vec__58566 = app.main.ui.hooks.use_dynamic_grid_item_width.cljs$core$IFn$_invoke$arity$0();
var rowref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58566,(0),null);
var limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58566,(1),null);
var on_nav = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(project_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_files.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"project-id","project-id",206449307),project_id], 0)));
}));
var toggle_pin = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(project)],(function (event){
app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.toggle_project_pin(project));
}));
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
var on_edit_open = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local,cljs.core.assoc,new cljs.core.Keyword(null,"edition","edition",1337508089),true);
}));
var on_edit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(project)],(function (name){
var name__$1 = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(name);
if(cuerdas.core.empty_QMARK_(name__$1)){
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(app.main.data.dashboard.rename_project(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(project,new cljs.core.Keyword(null,"name","name",1843675177),name__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"dashboard"], null)));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local,cljs.core.assoc,new cljs.core.Keyword(null,"edition","edition",1337508089),false);
}));
var on_file_created = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p__58569){
var map__58570 = p__58569;
var map__58570__$1 = cljs.core.__destructure_map(map__58570);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58570__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58570__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var page_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages","pages",-285406513),(0)], null));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file-id","file-id",-811871323),id,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], 0)));
}));
var create_file = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(project_id),rumext.v2.adapt(on_file_created)],(function (origin){
var mdata = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_file_created], null);
var params = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project-id","project-id",206449307),project_id], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(app.main.data.dashboard.create_file(cljs.core.with_meta(params,mdata)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),origin,new cljs.core.Keyword(null,"has-files","has-files",-150994558),(file_count > (0))], null)));
}));
var on_create_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(create_file)],(function (_){
return (create_file.cljs$core$IFn$_invoke$arity$1 ? create_file.cljs$core$IFn$_invoke$arity$1("dashboard:grid-header-plus-button") : create_file.call(null,"dashboard:grid-header-plus-button"));
}));
var on_import = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(project_id),rumext.v2.adapt(team_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.project.fetch_files.cljs$core$IFn$_invoke$arity$1(project_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.dashboard.fetch_recent_files.cljs$core$IFn$_invoke$arity$1(team_id),app.main.data.dashboard.fetch_projects(team_id),app.main.data.dashboard.clear_selected_files()], 0));
}));
var handle_create_click = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_create_click)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_create_click.cljs$core$IFn$_invoke$arity$1 ? on_create_click.cljs$core$IFn$_invoke$arity$1(event) : on_create_click.call(null,event));
} else {
return null;
}
}));
var handle_menu_click = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_menu_click)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
app.util.dom.stop_propagation(event);

return (on_menu_click.cljs$core$IFn$_invoke$arity$1 ? on_menu_click.cljs$core$IFn$_invoke$arity$1(event) : on_menu_click.call(null,event));
} else {
return null;
}
}));
var title_width = ((100) / limit);
return rumext.v2.jsxs("article",{'className':"main_ui_dashboard_projects__dashboard-project-row"+" "+(cljs.core.truth_(is_first)?"main_ui_dashboard_projects__first":""),'children':[rumext.v2.jsx("header",{'className':"main_ui_dashboard_projects__project",'children':rumext.v2.jsxs("div",{'className':"main_ui_dashboard_projects__project-name-wrapper",'children':[(cljs.core.truth_(new cljs.core.Keyword(null,"edition","edition",1337508089).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local)))?rumext.v2.jsx(app.main.ui.dashboard.inline_edition.inline_edition,{'content':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project),'on-end':on_edit,'max-length':(250)}):rumext.v2.jsx("h2",{'onClick':on_nav,'style':{'maxWidth':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title_width),"%"].join('')},'title':(cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(project))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.drafts"):new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project)),'onContextMenu':(cljs.core.truth_(can_edit)?on_menu_click:null),'className':"main_ui_dashboard_projects__project-name",'children':(cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(project))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.drafts"):new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project))})),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_projects__info-wrapper",'children':[rumext.v2.jsxs("div",{'children':[rumext.v2.jsx("span",{'className':"main_ui_dashboard_projects__info",'children':cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("labels.num-of-files",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(file_count)], 0)))}),(function (){var time = app.common.time.timeago(new cljs.core.Keyword(null,"modified-at","modified-at",-932048179).cljs$core$IFn$_invoke$arity$1(project));
return rumext.v2.jsx("span",{'className':"main_ui_dashboard_projects__recent-files-row-title-info",'children':[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(time)].join('')});
})()]}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_projects__project-actions"+" "+(cljs.core.truth_(new cljs.core.Keyword(null,"is-pinned","is-pinned",620920978).cljs$core$IFn$_invoke$arity$1(project))?"main_ui_dashboard_projects__pinned-project":""),'children':[(cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(project))?null:rumext.v2.jsx(app.main.ui.dashboard.pin_button.pin_button_STAR_,{'className':"main_ui_dashboard_projects__pin-button",'isPinned':new cljs.core.Keyword(null,"is-pinned","is-pinned",620920978).cljs$core$IFn$_invoke$arity$1(project),'onClick':toggle_pin,'tabIndex':(0)})),((can_edit)?rumext.v2.jsx("button",{'onClick':on_create_click,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.new-file"),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.new-file"),'data-testid':"project-new-file",'onKeyDown':handle_create_click,'className':"main_ui_dashboard_projects__add-file-btn",'children':app.main.ui.dashboard.projects.add_icon}):null),((can_edit)?rumext.v2.jsx("button",{'onClick':on_menu_click,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.options"),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.options"),'data-testid':"project-options",'onKeyDown':handle_menu_click,'className':"main_ui_dashboard_projects__options-btn",'children':app.main.ui.dashboard.projects.menu_icon}):null)]}),((can_edit)?rumext.v2.jsx(app.main.ui.dashboard.project_menu.project_menu_STAR_,{'project':project,'show':new cljs.core.Keyword(null,"menu-open","menu-open",1430293295).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local)),'left':((24) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"menu-pos","menu-pos",1459627496).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local)))),'top':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"menu-pos","menu-pos",1459627496).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local))),'onEdit':on_edit_open,'onClose':on_menu_close,'onImport':on_import}):null)]})]})}),rumext.v2.jsx("div",{'ref':rowref,'className':"main_ui_dashboard_projects__grid-container",'children':((empty_QMARK_)?rumext.v2.jsx(app.main.ui.ds.product.empty_placeholder.empty_placeholder_STAR_,{'title':((is_draft_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-placeholder-drafts-title"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-placeholder-files-title")),'className':"main_ui_dashboard_projects__placeholder-placement",'type':(1),'subtitle':((is_draft_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-placeholder-drafts-subtitle"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-placeholder-files-subtitle"))}):rumext.v2.jsx(app.main.ui.dashboard.grid.line_grid,{'project':project,'team':team,'files':files,'create-fn':create_file,'can-edit':can_edit,'limit':limit}))}),(((((limit > (0))) && ((file_count > limit))))?rumext.v2.jsxs("button",{'onClick':on_nav,'tabIndex':"0",'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_nav.cljs$core$IFn$_invoke$arity$0 ? on_nav.cljs$core$IFn$_invoke$arity$0() : on_nav.call(null));
} else {
return null;
}
}),'className':"main_ui_dashboard_projects__show-more",'children':[rumext.v2.jsx("span",{'className':"main_ui_dashboard_projects__placeholder-label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.show-all-files")}),app.main.ui.dashboard.projects.show_more_icon]}):null)]});
});

(app.main.ui.dashboard.projects.project_item_STAR_.displayName = "project-item*");

app.main.ui.dashboard.projects.ref_COLON_recent_files = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recent-files","recent-files",-314450292),app.main.store.state);
app.main.ui.dashboard.projects.projects_section_STAR_ = (function app$main$ui$dashboard$projects$projects_section_STAR_(props_58574){
var profile = props_58574.profile;
var projects = props_58574.projects;
var team = props_58574.team;
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"id","id",-1388402092));
var recent_map = rumext.v2.deref(app.main.ui.dashboard.projects.ref_COLON_recent_files);
var permisions = new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(team);
var can_edit = new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(permisions);
var can_invite = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"is-owner","is-owner",-1163290132).cljs$core$IFn$_invoke$arity$1(permisions);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"is-admin","is-admin",-1352205216).cljs$core$IFn$_invoke$arity$1(permisions);
}
})();
var show_team_hero_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.util.storage.global,new cljs.core.Keyword("app.main.ui.dashboard.projects","show-team-hero","app.main.ui.dashboard.projects/show-team-hero",-741317864),true);
}));
var show_team_hero_QMARK_ = cljs.core.deref(show_team_hero_STAR_);
var my_penpot_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default-team-id","default-team-id",1198639706).cljs$core$IFn$_invoke$arity$1(profile),team_id);
var default_team_QMARK_ = new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(team);
var show_deleted_QMARK_ = new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(permisions);
var projects__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(projects)],(function (){
return cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deleted-at","deleted-at",1742232687),projects)));
}));
var on_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
cljs.core.reset_BANG_(show_team_hero_STAR_,false);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"dont-show-team-up-hero",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"dashboard"], null)));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(show_team_hero_QMARK_)],(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.storage.global,cljs.core.assoc,new cljs.core.Keyword("app.main.ui.dashboard.projects","show-team-hero","app.main.ui.dashboard.projects/show-team-hero",-741317864),show_team_hero_QMARK_);
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team)],(function (){
var tname = (cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(team))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.your-penpot"):new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team));
return app.util.dom.set_html_title(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("title.dashboard.projects",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tname], 0)));
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.dashboard.fetch_recent_files.cljs$core$IFn$_invoke$arity$1(team_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.dashboard.clear_selected_files()], 0));
}));

app.main.ui.hooks.use_shortcuts(new cljs.core.Keyword("app.main.ui.dashboard.projects","dashboard","app.main.ui.dashboard.projects/dashboard",-556856058),app.main.data.dashboard.shortcuts.shortcuts_projects);

if(cljs.core.seq(projects__$1)){
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.dashboard.projects.header_STAR_,{'canEdit':can_edit}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_projects__projects-container",'children':rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(cljs.core.truth_((function (){var and__5023__auto__ = show_team_hero_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = can_invite;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not(default_team_QMARK_);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.dashboard.projects.team_hero_STAR_,{'team':team,'onClose':on_close}):null),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_projects__dashboard-container"+" "+"main_ui_dashboard_projects__no-bg"+" "+"main_ui_dashboard_projects__dashboard-projects"+" "+(cljs.core.truth_((function (){var and__5023__auto__ = (!(my_penpot_QMARK_));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core.not(default_team_QMARK_);
if(and__5023__auto____$1){
var and__5023__auto____$2 = show_team_hero_QMARK_;
if(cljs.core.truth_(and__5023__auto____$2)){
return can_invite;
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?"main_ui_dashboard_projects__with-team-hero":""),'children':[(cljs.core.truth_(show_deleted_QMARK_)?rumext.v2.jsx(app.main.ui.dashboard.deleted.menu_STAR_,{'teamId':team_id,'section':new cljs.core.Keyword(null,"dashboard-recent","dashboard-recent",-1541043167)}):null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__58575){
var map__58576 = p__58575;
var map__58576__$1 = cljs.core.__destructure_map(map__58576);
var project = map__58576__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58576__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
out_arr__35152__auto__.push((function (){var files = (cljs.core.truth_(recent_map)?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),(function (p1__58573_SHARP_,p2__58572_SHARP_){
return cljs.core.compare(p2__58572_SHARP_,p1__58573_SHARP_);
}),cljs.core.filterv((function (p1__58571_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"project-id","project-id",206449307).cljs$core$IFn$_invoke$arity$1(p1__58571_SHARP_));
}),cljs.core.vals(recent_map))):null);
return rumext.v2.jsx(app.main.ui.dashboard.projects.project_item_STAR_,{'project':project,'team':team,'files':files,'canEdit':can_edit,'isFirst':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(project,cljs.core.first(projects__$1))},id);
})());

return out_arr__35152__auto__;
}),[],projects__$1)]})]})})]});
} else {
return null;
}
});

(app.main.ui.dashboard.projects.projects_section_STAR_.displayName = "projects-section*");


//# sourceMappingURL=app.main.ui.dashboard.projects.js.map
