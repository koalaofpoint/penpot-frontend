import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.common.js";
import "./app.main.data.dashboard.js";
import "./app.main.data.dashboard.shortcuts.js";
import "./app.main.data.event.js";
import "./app.main.data.project.js";
import "./app.main.refs.js";
import "./app.main.store.js";
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
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.dashboard.files');
app.main.ui.dashboard.files.menu_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_files__menu-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-menu"})});
app.main.ui.dashboard.files.header_STAR_ = (function app$main$ui$dashboard$files$header_STAR_(props_58546){
var can_edit = props_58546.canEdit;
var project = props_58546.project;
var create_fn = props_58546.createFn;
var project_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project);
var local = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false,new cljs.core.Keyword(null,"edition","edition",1337508089),false], null));
var on_create_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(create_fn)],(function (event){
app.util.dom.prevent_default(event);

return (create_fn.cljs$core$IFn$_invoke$arity$1 ? create_fn.cljs$core$IFn$_invoke$arity$1("dashboard:header") : create_fn.call(null,"dashboard:header"));
}));
var on_menu_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var position = app.util.dom.get_client_position(event);
app.util.dom.prevent_default(event);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(local,cljs.core.assoc,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"menu-pos","menu-pos",1459627496),position], 0));
}));
var on_menu_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local,cljs.core.assoc,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
}));
var on_edit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(local,cljs.core.assoc,new cljs.core.Keyword(null,"edition","edition",1337508089),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false], 0));
}));
var toggle_pin = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(project)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.toggle_project_pin(project));
}));
var on_import = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(project_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.project.fetch_files.cljs$core$IFn$_invoke$arity$1(project_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.dashboard.clear_selected_files()], 0));
}));
return rumext.v2.jsxs("header",{'data-testid':"dashboard-header",'className':"main_ui_dashboard_files__dashboard-header",'children':[(cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(project))?rumext.v2.jsx("div",{'id':"dashboard-drafts-title",'className':"main_ui_dashboard_files__dashboard-title",'children':rumext.v2.jsx("h1",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.drafts")})}):(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"edition","edition",1337508089).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local));
if(cljs.core.truth_(and__5023__auto__)){
return can_edit;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.dashboard.inline_edition.inline_edition,{'content':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project),'on-end':(function (name){
var name__$1 = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(name);
if(cuerdas.core.empty_QMARK_(name__$1)){
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(app.main.data.dashboard.rename_project(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(project,new cljs.core.Keyword(null,"name","name",1843675177),name__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"project"], null)));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local,cljs.core.assoc,new cljs.core.Keyword(null,"edition","edition",1337508089),false);
}),'max-length':(250)}):rumext.v2.jsx("div",{'className':"main_ui_dashboard_files__dashboard-title",'children':rumext.v2.jsx("h1",{'onDoubleClick':on_edit,'data-testid':"project-title",'id':new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project),'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project)})}))),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_files__dashboard-header-actions",'children':[((can_edit)?rumext.v2.jsx("a",{'tabIndex':"0",'onClick':on_create_click,'data-testid':"new-file",'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_create_click.cljs$core$IFn$_invoke$arity$1 ? on_create_click.cljs$core$IFn$_invoke$arity$1(event) : on_create_click.call(null,event));
} else {
return null;
}
}),'className':"main_ui_dashboard_files__btn-secondary main_ui_dashboard_files__btn-small main_ui_dashboard_files__new-file",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.new-file")}):null),(cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(project))?null:rumext.v2.jsx(app.main.ui.dashboard.pin_button.pin_button_STAR_,{'tabIndex':(0),'isPinned':new cljs.core.Keyword(null,"is-pinned","is-pinned",620920978).cljs$core$IFn$_invoke$arity$1(project),'onClick':toggle_pin,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (toggle_pin.cljs$core$IFn$_invoke$arity$1 ? toggle_pin.cljs$core$IFn$_invoke$arity$1(event) : toggle_pin.call(null,event));
} else {
return null;
}
})})),((can_edit)?rumext.v2.jsx("div",{'tabIndex':"0",'onClick':on_menu_click,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.options"),'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_menu_click.cljs$core$IFn$_invoke$arity$1 ? on_menu_click.cljs$core$IFn$_invoke$arity$1(event) : on_menu_click.call(null,event));
} else {
return null;
}
}),'className':"main_ui_dashboard_files__icon",'children':app.main.ui.dashboard.files.menu_icon}):null),((can_edit)?rumext.v2.jsx(app.main.ui.dashboard.project_menu.project_menu_STAR_,{'project':project,'show':new cljs.core.Keyword(null,"menu-open","menu-open",1430293295).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local)),'left':(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"menu-pos","menu-pos",1459627496).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local))) - (180)),'top':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"menu-pos","menu-pos",1459627496).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local))),'onEdit':on_edit,'onClose':on_menu_close,'onImport':on_import}):null)]})]});
});

(app.main.ui.dashboard.files.header_STAR_.displayName = "header*");

app.main.ui.dashboard.files.files_section_STAR_ = (function app$main$ui$dashboard$files$files_section_STAR_(props_58552){
var project = props_58552.project;
var team = props_58552.team;
var files = rumext.v2.deref(app.main.refs.files);
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(project,new cljs.core.Keyword(null,"id","id",-1388402092));
var files__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(project_id),rumext.v2.adapt(files)],(function (){
return cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58551_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(project_id,new cljs.core.Keyword(null,"project-id","project-id",206449307).cljs$core$IFn$_invoke$arity$1(p1__58551_SHARP_));
}),cljs.core.vals(files))));
}));
var can_edit_QMARK_ = new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(team));
var project_id__$1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project);
var is_draft_proyect = new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(project);
var vec__58553 = app.main.ui.hooks.use_dynamic_grid_item_width.cljs$core$IFn$_invoke$arity$0();
var rowref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58553,(0),null);
var limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58553,(1),null);
var file_count = (function (){var or__5025__auto__ = cljs.core.count(files__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var empty_state_viewer = ((cljs.core.not(can_edit_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),file_count)));
var selected_files = rumext.v2.deref(app.main.refs.selected_files);
var on_file_created = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (file_data){
var file_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file_data);
var page_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(file_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages","pages",-285406513),(0)], null));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], 0)));
}));
var create_file = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(project)],(function (origin){
var mdata = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_file_created], null);
var params = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project)], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(app.main.data.dashboard.create_file(cljs.core.with_meta(params,mdata)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),origin,new cljs.core.Keyword(null,"has-files","has-files",-150994558),(file_count > (0))], null)));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(project)],(function (){
if(cljs.core.truth_(project)){
var pname = (cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(project))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.drafts"):new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project));
return app.util.dom.set_html_title(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("title.dashboard.files",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pname], 0)));
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(project_id__$1)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.project.fetch_files.cljs$core$IFn$_invoke$arity$1(project_id__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.dashboard.clear_selected_files()], 0));
}));

app.main.ui.hooks.use_shortcuts(new cljs.core.Keyword("app.main.ui.dashboard.files","dashboard","app.main.ui.dashboard.files/dashboard",1600474145),app.main.data.dashboard.shortcuts.shortcuts_drafts_libraries);

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.dashboard.files.header_STAR_,{'team':team,'canEdit':can_edit_QMARK_,'project':project,'createFn':create_file}),rumext.v2.jsx("section",{'ref':rowref,'className':"main_ui_dashboard_files__dashboard-container main_ui_dashboard_files__no-bg",'children':((empty_state_viewer)?rumext.v2.jsx(app.main.ui.ds.product.empty_placeholder.empty_placeholder_STAR_,{'title':(cljs.core.truth_(is_draft_proyect)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-placeholder-drafts-title"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-placeholder-files-title")),'className':"main_ui_dashboard_files__placeholder-placement",'type':(1),'subtitle':(cljs.core.truth_(is_draft_proyect)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-placeholder-drafts-subtitle"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-placeholder-files-subtitle"))}):rumext.v2.jsx(app.main.ui.dashboard.grid.grid_STAR_,{'project':project,'files':files__$1,'selectedFiles':selected_files,'canEdit':can_edit_QMARK_,'origin':new cljs.core.Keyword(null,"files","files",-472457450),'createFn':create_file,'limit':limit}))})]});
});

(app.main.ui.dashboard.files.files_section_STAR_.displayName = "files-section*");


//# sourceMappingURL=app.main.ui.dashboard.files.js.map
