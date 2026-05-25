import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.config.js";
import "./app.main.data.dashboard.js";
import "./app.main.data.dashboard.shortcuts.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.data.plugins.js";
import "./app.main.data.project.js";
import "./app.main.refs.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.main.ui.components.progress.js";
import "./app.main.ui.context.js";
import "./app.main.ui.dashboard.deleted.js";
import "./app.main.ui.dashboard.files.js";
import "./app.main.ui.dashboard.fonts.js";
import "./app.main.ui.dashboard.import.js";
import "./app.main.ui.dashboard.libraries.js";
import "./app.main.ui.dashboard.projects.js";
import "./app.main.ui.dashboard.search.js";
import "./app.main.ui.dashboard.sidebar.js";
import "./app.main.ui.dashboard.team.js";
import "./app.main.ui.dashboard.templates.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.modal.js";
import "./app.main.ui.workspace.plugins.js";
import "./app.plugins.register.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./app.util.object.js";
import "./app.util.storage.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./goog.events.events.js";
import "./okulary.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.dashboard');
app.main.ui.dashboard.dashboard_content_STAR_ = (function app$main$ui$dashboard$dashboard_content_STAR_(props_58577){
var default_project = props_58577.defaultProject;
var profile = props_58577.profile;
var projects = props_58577.projects;
var search_term = props_58577.searchTerm;
var section = props_58577.section;
var project = props_58577.project;
var team = props_58577.team;
var container = rumext.v2.use_ref();
var content_width = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((0));
var project_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project);
var team_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team);
var permissions = new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(team);
var default_project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(default_project,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_resize = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_){
var dom = rumext.v2.ref_val(container);
var width = app.util.object.get.cljs$core$IFn$_invoke$arity$2(dom,"clientWidth");
return cljs.core.reset_BANG_(content_width,width);
}));
var clear_selected_fn = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.clear_selected_files());
}));
var show_templates_QMARK_ = (function (){var and__5023__auto__ = cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"dashboard-templates-section","dashboard-templates-section",-474074368));
if(and__5023__auto__){
return new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(permissions);
} else {
return and__5023__auto__;
}
})();
var show_deleted_QMARK_ = new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(permissions);
var section__$1 = ((((cljs.core.not(show_deleted_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"dashboard-deleted","dashboard-deleted",-551384632)))))?new cljs.core.Keyword(null,"dashboard-recent","dashboard-recent",-1541043167):section);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var key1 = goog.events.listen(window,"resize",on_resize);
return (function (){
return goog.events.unlistenByKey(key1);
});
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$1(on_resize);

return rumext.v2.jsxs("div",{'onClick':clear_selected_fn,'ref':container,'className':"main_ui_dashboard__dashboard-content",'children':[rumext.v2.jsx(app.main.ui.components.progress.progress_notification_widget_STAR_,{}),(function (){var G__58578 = section__$1;
var G__58578__$1 = (((G__58578 instanceof cljs.core.Keyword))?G__58578.fqn:null);
switch (G__58578__$1) {
case "dashboard-recent":
if(cljs.core.seq(projects)){
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.dashboard.projects.projects_section_STAR_,{'team':team,'projects':projects,'profile':profile}),((show_templates_QMARK_)?rumext.v2.jsx(app.main.ui.dashboard.templates.templates_section_STAR_,{'profile':profile,'projectId':project_id,'teamId':team_id,'defaultProjectId':default_project_id,'contentWidth':cljs.core.deref(content_width)}):null)]});
} else {
return null;
}

break;
case "dashboard-fonts":
return rumext.v2.jsx(app.main.ui.dashboard.fonts.fonts_page_STAR_,{'team':team});

break;
case "dashboard-font-providers":
return rumext.v2.jsx(app.main.ui.dashboard.fonts.font_providers_page_STAR_,{'team':team});

break;
case "dashboard-files":
if(cljs.core.truth_(project)){
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.dashboard.files.files_section_STAR_,{'team':team,'project':project}),((show_templates_QMARK_)?rumext.v2.jsx(app.main.ui.dashboard.templates.templates_section_STAR_,{'profile':profile,'teamId':team_id,'projectId':project_id,'defaultProjectId':default_project_id,'contentWidth':cljs.core.deref(content_width)}):null)]});
} else {
return null;
}

break;
case "dashboard-search":
return rumext.v2.jsx(app.main.ui.dashboard.search.search_page_STAR_,{'team':team,'searchTerm':search_term});

break;
case "dashboard-libraries":
return rumext.v2.jsx(app.main.ui.dashboard.libraries.libraries_page_STAR_,{'team':team,'defaultProject':default_project});

break;
case "dashboard-members":
return rumext.v2.jsx(app.main.ui.dashboard.team.team_members_page_STAR_,{'team':team,'profile':profile});

break;
case "dashboard-invitations":
return rumext.v2.jsx(app.main.ui.dashboard.team.team_invitations_page_STAR_,{'team':team,'profile':profile});

break;
case "dashboard-webhooks":
return rumext.v2.jsx(app.main.ui.dashboard.team.webhooks_page_STAR_,{'team':team});

break;
case "dashboard-settings":
return rumext.v2.jsx(app.main.ui.dashboard.team.team_settings_page_STAR_,{'team':team,'profile':profile});

break;
case "dashboard-deleted":
return rumext.v2.jsx(app.main.ui.dashboard.deleted.deleted_section_STAR_,{'team':team,'projects':projects,'profile':profile});

break;
default:
return null;

}
})()]});
});

(app.main.ui.dashboard.dashboard_content_STAR_.displayName = "dashboard-content*");

app.main.ui.dashboard.ref_COLON_dashboard_initialized = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"team-initialized","team-initialized",1603238932),app.main.store.state);
app.main.ui.dashboard.use_plugin_register = (function app$main$ui$dashboard$use_plugin_register(plugin_url,team_id,project_id){
var navegate_file_BANG_ = (function (plugin,p__58579){
var map__58580 = p__58579;
var map__58580__$1 = cljs.core.__destructure_map(map__58580);
var project_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58580__$1,new cljs.core.Keyword(null,"project-id","project-id",206449307));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58580__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58580__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.plugins.delay_open_plugin(plugin),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace","workspace",-1096735709),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"pages","pages",-285406513)),(0)),new cljs.core.Keyword(null,"project-id","project-id",206449307),project_id__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323),id,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null))], 0));
});
var create_file_BANG_ = (function (plugin){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.modal.hide(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var data = cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"project-id","project-id",206449307),project_id,new cljs.core.Keyword(null,"name","name",1843675177),""+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.plugins.try-plugin") ?? "")+(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin) ?? "")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(navegate_file_BANG_,plugin)], null));
return cljs.core.with_meta(app.main.data.dashboard.create_file(data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"plugin-try-out"], null));
})()], 0));
});
var open_try_out_dialog = (function (plugin){
return app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugin-try-out","plugin-try-out",235173416),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"plugin","plugin",-1688841923),plugin,new cljs.core.Keyword(null,"on-accept","on-accept",705439955),(function (){
return create_file_BANG_(plugin);
}),new cljs.core.Keyword(null,"on-close","on-close",-761178394),app.main.data.modal.hide_BANG_], null));
});
var open_permissions_dialog = (function (plugin){
return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugin-permissions","plugin-permissions",-1579203559),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"plugin","plugin",-1688841923),plugin,new cljs.core.Keyword(null,"on-accept","on-accept",705439955),(function (){
app.plugins.register.install_plugin_BANG_(plugin);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.modal.hide(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dashboard-recent","dashboard-recent",-1541043167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null)),open_try_out_dialog(plugin)], 0));
}),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.modal.hide(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dashboard-recent","dashboard-recent",-1541043167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null))], 0));
})], null));
});
return rumext.v2.use_layout_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(plugin_url),rumext.v2.adapt(team_id),rumext.v2.adapt(project_id)],(function (){
if(cljs.core.truth_(plugin_url)){
beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((function (plugin){
if(cljs.core.truth_(plugin)){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"install-plugin",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin),new cljs.core.Keyword(null,"url","url",276297046),plugin_url], null)));

return open_permissions_dialog(plugin);
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.plugins.parse-error")));
}
}),(function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.plugins.bad-url")));
}),app.main.data.plugins.fetch_manifest(plugin_url));

var _STAR_sync_STAR__orig_val__58581 = app.util.storage._STAR_sync_STAR_;
var _STAR_sync_STAR__temp_val__58582 = true;
(app.util.storage._STAR_sync_STAR_ = _STAR_sync_STAR__temp_val__58582);

try{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.util.storage.session,cljs.core.dissoc,new cljs.core.Keyword(null,"plugin-url","plugin-url",1542869449));
}finally {(app.util.storage._STAR_sync_STAR_ = _STAR_sync_STAR__orig_val__58581);
}} else {
return null;
}
}));
});
app.main.ui.dashboard.use_templates_import = (function app$main$ui$dashboard$use_templates_import(can_edit_QMARK_,template,project){
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(project,new cljs.core.Keyword(null,"id","id",-1388402092));
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(project,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
return rumext.v2.use_layout_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(can_edit_QMARK_),rumext.v2.adapt(template),rumext.v2.adapt(project_id),rumext.v2.adapt(team_id)],(function (){
if((((!((template == null)))) && ((((!((project_id == null)))) && ((!((team_id == null)))))))){
if(cljs.core.truth_(can_edit_QMARK_)){
var valid_url_QMARK__58589 = cuerdas.core.ends_with_QMARK_(template,".penpot");
var template_name_58590 = ((cuerdas.core.starts_with_QMARK_(template,"http"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(template,cljs.core.count(app.config.templates_uri)):template);
var template_url_58591 = ["/github/penpot-files/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(template_name_58590)].join('');
var on_import_58592 = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.project.fetch_files.cljs$core$IFn$_invoke$arity$1(project_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.dashboard.fetch_recent_files.cljs$core$IFn$_invoke$arity$1(team_id),app.main.data.dashboard.fetch_projects(team_id),app.main.data.dashboard.clear_selected_files(),potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"install-template-from-link-finished",new cljs.core.Keyword(null,"name","name",1843675177),template_name_58590,new cljs.core.Keyword(null,"url","url",276297046),template_url_58591], null))], 0));
});
if(valid_url_QMARK__58589){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"install-template-from-link",new cljs.core.Keyword(null,"name","name",1843675177),template_name_58590,new cljs.core.Keyword(null,"url","url",276297046),template_url_58591], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.Keyword(null,"project-id","project-id",206449307),project_id,new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),template_name_58590,new cljs.core.Keyword(null,"uri","uri",-774711847),template_url_58591], null)], null),new cljs.core.Keyword(null,"on-finish-import","on-finish-import",1088832986),on_import_58592], null))], 0));
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.import.bad-url")));
}
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.import.no-perms")));
}

var _STAR_sync_STAR__orig_val__58583 = app.util.storage._STAR_sync_STAR_;
var _STAR_sync_STAR__temp_val__58584 = true;
(app.util.storage._STAR_sync_STAR_ = _STAR_sync_STAR__temp_val__58584);

try{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.util.storage.session,cljs.core.dissoc,new cljs.core.Keyword(null,"template","template",-702405684));
}finally {(app.util.storage._STAR_sync_STAR_ = _STAR_sync_STAR__orig_val__58583);
}} else {
return null;
}
}));
});
app.main.ui.dashboard.dashboard_STAR_ = (function app$main$ui$dashboard$dashboard_STAR_(props_58586){
var project_id = props_58586.projectId;
var profile = props_58586.profile;
var team_id = props_58586.teamId;
var search_term = props_58586.searchTerm;
var plugin_url = props_58586.pluginUrl;
var section = props_58586.section;
var template = props_58586.template;
var team = rumext.v2.deref(app.main.refs.team);
var projects = rumext.v2.deref(app.main.refs.projects);
var project = cljs.core.get.cljs$core$IFn$_invoke$arity$2(projects,project_id);
var projects__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(projects),rumext.v2.adapt(team_id)],(function (){
return cljs.core.filterv((function (p1__58585_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(team_id,new cljs.core.Keyword(null,"team-id","team-id",-14505725).cljs$core$IFn$_invoke$arity$1(p1__58585_SHARP_));
}),cljs.core.vals(projects));
}));
var can_edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"permissions","permissions",67803075)),new cljs.core.Keyword(null,"can-edit","can-edit",442089902));
var template__$1 = (function (){var or__5025__auto__ = template;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(app.util.storage.session);
}
})();
var plugin_url__$1 = (function (){var or__5025__auto__ = plugin_url;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"plugin-url","plugin-url",1542869449).cljs$core$IFn$_invoke$arity$1(app.util.storage.session);
}
})();
var default_project = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(projects__$1)],(function (){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"is-default","is-default",1401171070),projects__$1));
}));
app.main.ui.hooks.use_shortcuts(new cljs.core.Keyword("app.main.ui.dashboard","dashboard","app.main.ui.dashboard/dashboard",25877386),app.main.data.dashboard.shortcuts.shortcuts_dashboard);

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id)],(function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.initialize(team_id));

return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.finalize(team_id));
});
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var key = goog.events.listen(goog.global,"keydown",(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.open_selected_file());
} else {
return null;
}
}));
return (function (){
return goog.events.unlistenByKey(key);
});
}));

app.main.ui.dashboard.use_plugin_register(plugin_url__$1,team_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(default_project));

app.main.ui.dashboard.use_templates_import(can_edit_QMARK_,template__$1,default_project);

return rumext.v2.jsxs(rumext.v2.provider(app.main.ui.context.current_project_id),{'value':project_id,'children':[rumext.v2.jsx(app.main.ui.modal.modal_container_STAR_,{}),rumext.v2.jsxs("main",{'className':"main_ui_dashboard__dashboard",'children':[rumext.v2.jsx(app.main.ui.dashboard.sidebar.sidebar_STAR_,{'team':team,'projects':projects__$1,'project':project,'defaultProject':default_project,'profile':profile,'section':section,'searchTerm':search_term}),rumext.v2.jsx(app.main.ui.dashboard.dashboard_content_STAR_,{'projects':projects__$1,'profile':profile,'project':project,'defaultProject':default_project,'section':section,'searchTerm':search_term,'team':team})]},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team) ?? ""))]});
});

(app.main.ui.dashboard.dashboard_STAR_.displayName = "dashboard*");

app.main.ui.dashboard.dashboard_page_STAR_ = (function app$main$ui$dashboard$dashboard_page_STAR_(props_58587){
var props = props_58587;
return rumext.v2.create_element(app.main.ui.dashboard.dashboard_STAR_,props);
});

(app.main.ui.dashboard.dashboard_page_STAR_.displayName = "dashboard-page*");


//# sourceMappingURL=app.main.ui.dashboard.js.map
