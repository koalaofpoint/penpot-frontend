import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.data.common.js";
import "./app.main.data.dashboard.js";
import "./app.main.data.exports.files.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.repo.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.main.ui.components.context_menu_a11y.js";
import "./app.main.ui.context.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.dashboard.file_menu');
app.main.ui.dashboard.file_menu.get_project_name = (function app$main$ui$dashboard$file_menu$get_project_name(project){
if(cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(project))){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.drafts");
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project);
}
});
app.main.ui.dashboard.file_menu.get_project_id = (function app$main$ui$dashboard$file_menu$get_project_id(project){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project));
});
app.main.ui.dashboard.file_menu.get_team_name = (function app$main$ui$dashboard$file_menu$get_team_name(team){
if(cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(team))){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.your-penpot");
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team);
}
});
/**
 * Group projects by team.
 */
app.main.ui.dashboard.file_menu.group_by_team = (function app$main$ui$dashboard$file_menu$group_by_team(projects){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (teams,project){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(teams,new cljs.core.Keyword(null,"team-id","team-id",-14505725).cljs$core$IFn$_invoke$arity$1(project),(function (p1__57990_SHARP_){
if((p1__57990_SHARP_ == null)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"team-id","team-id",-14505725).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"team-name","team-name",1475836072).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"is-default","is-default",1401171070),new cljs.core.Keyword(null,"is-default-team","is-default-team",1150636297).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"projects","projects",-364845983),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [project], null)], null);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__57990_SHARP_,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.conj,project);
}
}));
}),cljs.core.PersistentArrayMap.EMPTY,projects);
});
app.main.ui.dashboard.file_menu.file_menu_STAR_ = (function app$main$ui$dashboard$file_menu$file_menu_STAR_(props_57999){
var left = props_57999.left;
var navigate = props_57999.navigate;
var on_close = props_57999.onClose;
var top = props_57999.top;
var can_edit = props_57999.canEdit;
var on_edit = props_57999.onEdit;
var parent_id = props_57999.parentId;
var files = props_57999.files;
var can_restore = props_57999.canRestore;
var origin = props_57999.origin;
if(cljs.core.seq(files)){
} else {
throw (new Error(["Assert failed: ","missing `files` prop","\n","(seq files)"].join('')));
}

if(cljs.core.fn_QMARK_(on_edit)){
} else {
throw (new Error(["Assert failed: ","missing `on-edit` prop","\n","(fn? on-edit)"].join('')));
}

if(cljs.core.fn_QMARK_(on_close)){
} else {
throw (new Error(["Assert failed: ","missing `on-close` prop","\n","(fn? on-close)"].join('')));
}

if(cljs.core.boolean_QMARK_(navigate)){
} else {
throw (new Error(["Assert failed: ","missing `navigate` prop","\n","(boolean? navigate)"].join('')));
}

var is_lib_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"libraries","libraries",-303286011),origin);
var is_search_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"search","search",1564939822),origin);
var top__$1 = (function (){var or__5025__auto__ = top;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var left__$1 = (function (){var or__5025__auto__ = left;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var file = cljs.core.first(files);
var file_count = cljs.core.count(files);
var multi_QMARK_ = (file_count > (1));
var current_team_id = rumext.v2.use_ctx(app.main.ui.context.current_team_id);
var teams_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var teams = cljs.core.deref(teams_STAR_);
var current_team = cljs.core.get.cljs$core$IFn$_invoke$arity$2(teams,current_team_id);
var other_teams = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__57991_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__57991_SHARP_),current_team_id);
}),cljs.core.vals(teams));
var file_project_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"project-id","project-id",206449307)),files);
var current_projects = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__57992_SHARP_){
return cljs.core.contains_QMARK_(file_project_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__57992_SHARP_));
}),new cljs.core.Keyword(null,"projects","projects",-364845983).cljs$core$IFn$_invoke$arity$1(current_team));
var on_new_tab = (function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword("app.main.router","new-window","app.main.router/new-window",1705407424),true], null)], 0)));
});
var on_duplicate = (function (_){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.main.store.emit_BANG_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.data.dashboard.duplicate_file,files));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.success-duplicate-file",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(file_count)], 0))));
});
var on_delete_accept = (function (_){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.main.store.emit_BANG_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.data.dashboard.delete_file,files));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.success-delete-file",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(file_count)], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.dashboard.clear_selected_files()], 0));
});
var on_delete = (function (event){
app.util.dom.stop_propagation(event);

var num_shared = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__57993_SHARP_){
return new cljs.core.Keyword(null,"is-shared","is-shared",2126511925).cljs$core$IFn$_invoke$arity$1(p1__57993_SHARP_);
}),files);
if(((0) < cljs.core.count(num_shared))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete-shared-libraries","delete-shared-libraries",769506220),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),files),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),on_delete_accept,new cljs.core.Keyword(null,"count-libraries","count-libraries",-1908764886),cljs.core.count(num_shared)], null)));
} else {
if(multi_QMARK_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("modals.delete-file-multi-confirm.title",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_count], 0)),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("modals.delete-file-multi-confirm.message",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_count], 0)),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("modals.delete-file-multi-confirm.accept",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_count], 0)),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),on_delete_accept], null)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-file-confirm.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-file-confirm.message"),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-file-confirm.accept"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),on_delete_accept], null)));
}
}
});
var on_move_success = (function (team_id,project_id){
if(multi_QMARK_){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.success-move-files")));
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.success-move-file")));
}

if(cljs.core.truth_((function (){var or__5025__auto__ = navigate;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(team_id,current_team_id);
}
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_files.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"project-id","project-id",206449307),project_id,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null)], 0)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.dashboard.fetch_recent_files.cljs$core$IFn$_invoke$arity$1(team_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.dashboard.clear_selected_files()], 0));
}
});
var on_move_accept = (function (params,team_id,project_id){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.move_files(cljs.core.with_meta(params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
return on_move_success(team_id,project_id);
})], null))));
});
var on_move = (function (team_id,project_id){
var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),files),new cljs.core.Keyword(null,"project-id","project-id",206449307),project_id], null);
return (function (){
var num_shared = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__57994_SHARP_){
return new cljs.core.Keyword(null,"is-shared","is-shared",2126511925).cljs$core$IFn$_invoke$arity$1(p1__57994_SHARP_);
}),files);
if(((((0) < cljs.core.count(num_shared))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(team_id,current_team_id)))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete-shared-libraries","delete-shared-libraries",769506220),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),files),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),(function (){
return on_move_accept(params,team_id,project_id);
}),new cljs.core.Keyword(null,"count-libraries","count-libraries",-1908764886),cljs.core.count(num_shared)], null)));
} else {
return on_move_accept(params,team_id,project_id);
}
});
});
var add_shared = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.set_file_shared(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file,new cljs.core.Keyword(null,"is-shared","is-shared",2126511925),true)));
});
var del_shared = (function (_){
return cljs.core.run_BANG_((function (p1__57995_SHARP_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.set_file_shared(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__57995_SHARP_,new cljs.core.Keyword(null,"is-shared","is-shared",2126511925),false)));
}),files);
});
var on_add_shared = (function (event){
app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.show_shared_dialog(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),add_shared));
});
var on_del_shared = (function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete-shared-libraries","delete-shared-libraries",769506220),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"unpublish","unpublish",-1397708862),new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),files),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),del_shared,new cljs.core.Keyword(null,"count-libraries","count-libraries",-1908764886),file_count], null)));
});
var on_export_binary_files = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(app.main.data.exports.files.open_export_dialog(files),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"dashboard"], null)));
});
var restore_fn = (function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.restore_files_immediately(cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),current_team_id,new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,app.common.data.xf_COLON_map_id,files)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.restore-success-notification",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file)], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.dashboard.fetch_projects(current_team_id),app.main.data.dashboard.fetch_deleted_files.cljs$core$IFn$_invoke$arity$1(current_team_id)], 0));
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.errors.error-on-restore-file",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file)], 0))));
})], null))));
});
var on_restore_immediately = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard-restore-file-confirmation.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard-restore-file-confirmation.description",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file)], 0)),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.continue"),new cljs.core.Keyword(null,"accept-style","accept-style",630742659),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),restore_fn], null)));
});
var on_delete_immediately = (function (){
var accept_fn = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.delete_files_immediately(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),current_team_id,new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,app.common.data.xf_COLON_map_id,files)], null)));
});
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.delete-forever-confirmation.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.delete-file-forever-confirmation.description",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file)], 0)),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.delete-forever-confirmation.title"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),accept_fn], null)));
});
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (p1__57996_SHARP_){
return cljs.core.reset_BANG_(teams_STAR_,p1__57996_SHARP_);
}),beicon.v2.core.map(app.main.ui.dashboard.file_menu.group_by_team,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"get-all-projects","get-all-projects",1718710818))));
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_close)],(function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dropdown","open","dropdown/open",824533839),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"file-menu"], null)));

var stream = beicon.v2.core.take((1),beicon.v2.core.filter((function (p1__57998_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("file-menu",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__57998_SHARP_));
}),beicon.v2.core.map(cljs.core.deref,beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dropdown","open","dropdown/open",824533839)),app.main.store.stream))));
var subs = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$4(null,null,on_close,stream);
return (function (){
return beicon.v2.core.dispose_BANG_(subs);
});
}));

var sub_options = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__5503__auto__ = (function app$main$ui$dashboard$file_menu$file_menu_STAR__$_iter__58023(s__58024){
return (new cljs.core.LazySeq(null,(function (){
var s__58024__$1 = s__58024;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__58024__$1);
if(temp__5825__auto__){
var s__58024__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58024__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__58024__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__58026 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__58025 = (0);
while(true){
if((i__58025 < size__5502__auto__)){
var project = cljs.core._nth(c__5501__auto__,i__58025);
cljs.core.chunk_append(b__58026,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.main.ui.dashboard.file_menu.get_project_name(project),new cljs.core.Keyword(null,"id","id",-1388402092),app.main.ui.dashboard.file_menu.get_project_id(project),new cljs.core.Keyword(null,"handler","handler",-195596612),on_move(current_team_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project))], null));

var G__58116 = (i__58025 + (1));
i__58025 = G__58116;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58026),app$main$ui$dashboard$file_menu$file_menu_STAR__$_iter__58023(cljs.core.chunk_rest(s__58024__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58026),null);
}
} else {
var project = cljs.core.first(s__58024__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.main.ui.dashboard.file_menu.get_project_name(project),new cljs.core.Keyword(null,"id","id",-1388402092),app.main.ui.dashboard.file_menu.get_project_id(project),new cljs.core.Keyword(null,"handler","handler",-195596612),on_move(current_team_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project))], null),app$main$ui$dashboard$file_menu$file_menu_STAR__$_iter__58023(cljs.core.rest(s__58024__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(current_projects);
})(),((cljs.core.seq(other_teams))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.move-to-other-team"),new cljs.core.Keyword(null,"id","id",-1388402092),"move-to-other-team",new cljs.core.Keyword(null,"options","options",99638489),(function (){var iter__5503__auto__ = (function app$main$ui$dashboard$file_menu$file_menu_STAR__$_iter__58029(s__58030){
return (new cljs.core.LazySeq(null,(function (){
var s__58030__$1 = s__58030;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__58030__$1);
if(temp__5825__auto__){
var s__58030__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58030__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__58030__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__58032 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__58031 = (0);
while(true){
if((i__58031 < size__5502__auto__)){
var team = cljs.core._nth(c__5501__auto__,i__58031);
cljs.core.chunk_append(b__58032,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.main.ui.dashboard.file_menu.get_team_name(team),new cljs.core.Keyword(null,"id","id",-1388402092),app.main.ui.dashboard.file_menu.get_project_id(team),new cljs.core.Keyword(null,"options","options",99638489),(function (){var iter__5503__auto__ = ((function (i__58031,team,c__5501__auto__,size__5502__auto__,b__58032,s__58030__$2,temp__5825__auto__,is_lib_page_QMARK_,is_search_page_QMARK_,top__$1,left__$1,file,file_count,multi_QMARK_,current_team_id,teams_STAR_,teams,current_team,other_teams,file_project_ids,current_projects,on_new_tab,on_duplicate,on_delete_accept,on_delete,on_move_success,on_move_accept,on_move,add_shared,del_shared,on_add_shared,on_del_shared,on_export_binary_files,restore_fn,on_restore_immediately,on_delete_immediately,left,navigate,on_close,top,can_edit,on_edit,parent_id,files,can_restore,origin){
return (function app$main$ui$dashboard$file_menu$file_menu_STAR__$_iter__58029_$_iter__58034(s__58035){
return (new cljs.core.LazySeq(null,((function (i__58031,team,c__5501__auto__,size__5502__auto__,b__58032,s__58030__$2,temp__5825__auto__,is_lib_page_QMARK_,is_search_page_QMARK_,top__$1,left__$1,file,file_count,multi_QMARK_,current_team_id,teams_STAR_,teams,current_team,other_teams,file_project_ids,current_projects,on_new_tab,on_duplicate,on_delete_accept,on_delete,on_move_success,on_move_accept,on_move,add_shared,del_shared,on_add_shared,on_del_shared,on_export_binary_files,restore_fn,on_restore_immediately,on_delete_immediately,left,navigate,on_close,top,can_edit,on_edit,parent_id,files,can_restore,origin){
return (function (){
var s__58035__$1 = s__58035;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__58035__$1);
if(temp__5825__auto____$1){
var s__58035__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58035__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__58035__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__58037 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__58036 = (0);
while(true){
if((i__58036 < size__5502__auto____$1)){
var sub_project = cljs.core._nth(c__5501__auto____$1,i__58036);
cljs.core.chunk_append(b__58037,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.main.ui.dashboard.file_menu.get_project_name(sub_project),new cljs.core.Keyword(null,"id","id",-1388402092),app.main.ui.dashboard.file_menu.get_project_id(sub_project),new cljs.core.Keyword(null,"handler","handler",-195596612),on_move(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sub_project))], null));

var G__58122 = (i__58036 + (1));
i__58036 = G__58122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58037),app$main$ui$dashboard$file_menu$file_menu_STAR__$_iter__58029_$_iter__58034(cljs.core.chunk_rest(s__58035__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58037),null);
}
} else {
var sub_project = cljs.core.first(s__58035__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.main.ui.dashboard.file_menu.get_project_name(sub_project),new cljs.core.Keyword(null,"id","id",-1388402092),app.main.ui.dashboard.file_menu.get_project_id(sub_project),new cljs.core.Keyword(null,"handler","handler",-195596612),on_move(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sub_project))], null),app$main$ui$dashboard$file_menu$file_menu_STAR__$_iter__58029_$_iter__58034(cljs.core.rest(s__58035__$2)));
}
} else {
return null;
}
break;
}
});})(i__58031,team,c__5501__auto__,size__5502__auto__,b__58032,s__58030__$2,temp__5825__auto__,is_lib_page_QMARK_,is_search_page_QMARK_,top__$1,left__$1,file,file_count,multi_QMARK_,current_team_id,teams_STAR_,teams,current_team,other_teams,file_project_ids,current_projects,on_new_tab,on_duplicate,on_delete_accept,on_delete,on_move_success,on_move_accept,on_move,add_shared,del_shared,on_add_shared,on_del_shared,on_export_binary_files,restore_fn,on_restore_immediately,on_delete_immediately,left,navigate,on_close,top,can_edit,on_edit,parent_id,files,can_restore,origin))
,null,null));
});})(i__58031,team,c__5501__auto__,size__5502__auto__,b__58032,s__58030__$2,temp__5825__auto__,is_lib_page_QMARK_,is_search_page_QMARK_,top__$1,left__$1,file,file_count,multi_QMARK_,current_team_id,teams_STAR_,teams,current_team,other_teams,file_project_ids,current_projects,on_new_tab,on_duplicate,on_delete_accept,on_delete,on_move_success,on_move_accept,on_move,add_shared,del_shared,on_add_shared,on_del_shared,on_export_binary_files,restore_fn,on_restore_immediately,on_delete_immediately,left,navigate,on_close,top,can_edit,on_edit,parent_id,files,can_restore,origin))
;
return iter__5503__auto__(new cljs.core.Keyword(null,"projects","projects",-364845983).cljs$core$IFn$_invoke$arity$1(team));
})()], null));

var G__58124 = (i__58031 + (1));
i__58031 = G__58124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58032),app$main$ui$dashboard$file_menu$file_menu_STAR__$_iter__58029(cljs.core.chunk_rest(s__58030__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58032),null);
}
} else {
var team = cljs.core.first(s__58030__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.main.ui.dashboard.file_menu.get_team_name(team),new cljs.core.Keyword(null,"id","id",-1388402092),app.main.ui.dashboard.file_menu.get_project_id(team),new cljs.core.Keyword(null,"options","options",99638489),(function (){var iter__5503__auto__ = ((function (team,s__58030__$2,temp__5825__auto__,is_lib_page_QMARK_,is_search_page_QMARK_,top__$1,left__$1,file,file_count,multi_QMARK_,current_team_id,teams_STAR_,teams,current_team,other_teams,file_project_ids,current_projects,on_new_tab,on_duplicate,on_delete_accept,on_delete,on_move_success,on_move_accept,on_move,add_shared,del_shared,on_add_shared,on_del_shared,on_export_binary_files,restore_fn,on_restore_immediately,on_delete_immediately,left,navigate,on_close,top,can_edit,on_edit,parent_id,files,can_restore,origin){
return (function app$main$ui$dashboard$file_menu$file_menu_STAR__$_iter__58029_$_iter__58042(s__58043){
return (new cljs.core.LazySeq(null,(function (){
var s__58043__$1 = s__58043;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__58043__$1);
if(temp__5825__auto____$1){
var s__58043__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58043__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__58043__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__58045 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__58044 = (0);
while(true){
if((i__58044 < size__5502__auto__)){
var sub_project = cljs.core._nth(c__5501__auto__,i__58044);
cljs.core.chunk_append(b__58045,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.main.ui.dashboard.file_menu.get_project_name(sub_project),new cljs.core.Keyword(null,"id","id",-1388402092),app.main.ui.dashboard.file_menu.get_project_id(sub_project),new cljs.core.Keyword(null,"handler","handler",-195596612),on_move(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sub_project))], null));

var G__58131 = (i__58044 + (1));
i__58044 = G__58131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58045),app$main$ui$dashboard$file_menu$file_menu_STAR__$_iter__58029_$_iter__58042(cljs.core.chunk_rest(s__58043__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58045),null);
}
} else {
var sub_project = cljs.core.first(s__58043__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.main.ui.dashboard.file_menu.get_project_name(sub_project),new cljs.core.Keyword(null,"id","id",-1388402092),app.main.ui.dashboard.file_menu.get_project_id(sub_project),new cljs.core.Keyword(null,"handler","handler",-195596612),on_move(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sub_project))], null),app$main$ui$dashboard$file_menu$file_menu_STAR__$_iter__58029_$_iter__58042(cljs.core.rest(s__58043__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(team,s__58030__$2,temp__5825__auto__,is_lib_page_QMARK_,is_search_page_QMARK_,top__$1,left__$1,file,file_count,multi_QMARK_,current_team_id,teams_STAR_,teams,current_team,other_teams,file_project_ids,current_projects,on_new_tab,on_duplicate,on_delete_accept,on_delete,on_move_success,on_move_accept,on_move,add_shared,del_shared,on_add_shared,on_del_shared,on_export_binary_files,restore_fn,on_restore_immediately,on_delete_immediately,left,navigate,on_close,top,can_edit,on_edit,parent_id,files,can_restore,origin))
;
return iter__5503__auto__(new cljs.core.Keyword(null,"projects","projects",-364845983).cljs$core$IFn$_invoke$arity$1(team));
})()], null),app$main$ui$dashboard$file_menu$file_menu_STAR__$_iter__58029(cljs.core.rest(s__58030__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(other_teams);
})()], null)], null):null));
var options = (cljs.core.truth_(can_restore)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.file-menu.restore-files-option",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(file_count)], 0)),new cljs.core.Keyword(null,"id","id",-1388402092),"restore-file",new cljs.core.Keyword(null,"handler","handler",-195596612),on_restore_immediately], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.file-menu.delete-files-permanently-option",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(file_count)], 0)),new cljs.core.Keyword(null,"id","id",-1388402092),"delete-file",new cljs.core.Keyword(null,"handler","handler",-195596612),on_delete_immediately], null)], null):((multi_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(can_edit)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.duplicate-multi",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_count], 0)),new cljs.core.Keyword(null,"id","id",-1388402092),"duplicate-multi",new cljs.core.Keyword(null,"handler","handler",-195596612),on_duplicate], null):null),(cljs.core.truth_((function (){var and__5023__auto__ = ((cljs.core.seq(current_projects)) || (cljs.core.seq(other_teams)));
if(and__5023__auto__){
return can_edit;
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.move-to-multi",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_count], 0)),new cljs.core.Keyword(null,"id","id",-1388402092),"file-move-multi",new cljs.core.Keyword(null,"options","options",99638489),sub_options], null):null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.export-binary-multi",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_count], 0)),new cljs.core.Keyword(null,"id","id",-1388402092),"file-binary-export-multi",new cljs.core.Keyword(null,"handler","handler",-195596612),on_export_binary_files], null),(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"is-shared","is-shared",2126511925).cljs$core$IFn$_invoke$arity$1(file);
if(cljs.core.truth_(and__5023__auto__)){
return can_edit;
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("labels.unpublish-multi-files",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_count], 0)),new cljs.core.Keyword(null,"id","id",-1388402092),"file-unpublish-multi",new cljs.core.Keyword(null,"handler","handler",-195596612),on_del_shared], null):null),(cljs.core.truth_((function (){var and__5023__auto__ = (!(is_lib_page_QMARK_));
if(and__5023__auto__){
return can_edit;
} else {
return and__5023__auto__;
}
})())?(function (){
new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"separator","separator",-1628749125)], null);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("labels.delete-multi-files",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_count], 0)),new cljs.core.Keyword(null,"id","id",-1388402092),"file-delete-multi",new cljs.core.Keyword(null,"handler","handler",-195596612),on_delete], null);
})()
:null)], null):new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.open-in-new-tab"),new cljs.core.Keyword(null,"id","id",-1388402092),"file-open-new-tab",new cljs.core.Keyword(null,"handler","handler",-195596612),on_new_tab], null),(cljs.core.truth_((function (){var and__5023__auto__ = (!(is_search_page_QMARK_));
if(and__5023__auto__){
return can_edit;
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.rename"),new cljs.core.Keyword(null,"id","id",-1388402092),"file-rename",new cljs.core.Keyword(null,"handler","handler",-195596612),on_edit], null):null),(cljs.core.truth_((function (){var and__5023__auto__ = (!(is_search_page_QMARK_));
if(and__5023__auto__){
return can_edit;
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.duplicate"),new cljs.core.Keyword(null,"id","id",-1388402092),"file-duplicate",new cljs.core.Keyword(null,"handler","handler",-195596612),on_duplicate], null):null),(cljs.core.truth_((function (){var and__5023__auto__ = (!(is_lib_page_QMARK_));
if(and__5023__auto__){
var and__5023__auto____$1 = (!(is_search_page_QMARK_));
if(and__5023__auto____$1){
var and__5023__auto____$2 = ((cljs.core.seq(current_projects)) || (cljs.core.seq(other_teams)));
if(and__5023__auto____$2){
return can_edit;
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.move-to"),new cljs.core.Keyword(null,"id","id",-1388402092),"file-move-to",new cljs.core.Keyword(null,"options","options",99638489),sub_options], null):null),(cljs.core.truth_((function (){var and__5023__auto__ = (!(is_search_page_QMARK_));
if(and__5023__auto__){
return can_edit;
} else {
return and__5023__auto__;
}
})())?(cljs.core.truth_(new cljs.core.Keyword(null,"is-shared","is-shared",2126511925).cljs$core$IFn$_invoke$arity$1(file))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.unpublish-shared"),new cljs.core.Keyword(null,"id","id",-1388402092),"file-del-shared",new cljs.core.Keyword(null,"handler","handler",-195596612),on_del_shared], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.add-shared"),new cljs.core.Keyword(null,"id","id",-1388402092),"file-add-shared",new cljs.core.Keyword(null,"handler","handler",-195596612),on_add_shared], null)):null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"separator","separator",-1628749125)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.download-binary-file"),new cljs.core.Keyword(null,"id","id",-1388402092),"download-binary-file",new cljs.core.Keyword(null,"handler","handler",-195596612),on_export_binary_files], null),(cljs.core.truth_((function (){var and__5023__auto__ = (!(is_lib_page_QMARK_));
if(and__5023__auto__){
var and__5023__auto____$1 = (!(is_search_page_QMARK_));
if(and__5023__auto____$1){
return can_edit;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"separator","separator",-1628749125)], null):null),(cljs.core.truth_((function (){var and__5023__auto__ = (!(is_lib_page_QMARK_));
if(and__5023__auto__){
var and__5023__auto____$1 = (!(is_search_page_QMARK_));
if(and__5023__auto____$1){
return can_edit;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.delete"),new cljs.core.Keyword(null,"id","id",-1388402092),"file-delete",new cljs.core.Keyword(null,"handler","handler",-195596612),on_delete], null):null)], null)));
return rumext.v2.jsx(app.main.ui.components.context_menu_a11y.context_menu_STAR_,{'onClose':on_close,'fixed':((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(top__$1,(0))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(left__$1,(0)))),'show':true,'minWidth':true,'top':top__$1,'left':left__$1,'options':options,'origin':parent_id});
});

(app.main.ui.dashboard.file_menu.file_menu_STAR_.displayName = "file-menu*");


//# sourceMappingURL=app.main.ui.dashboard.file_menu.js.map
