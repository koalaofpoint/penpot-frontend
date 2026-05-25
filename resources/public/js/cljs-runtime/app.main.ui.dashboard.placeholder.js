import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.event.js";
import "./app.main.store.js";
import "./app.main.ui.dashboard.import.js";
import "./app.main.ui.ds.product.empty_placeholder.js";
import "./app.main.ui.ds.product.loader.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./okulary.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.dashboard.placeholder');
app.main.ui.dashboard.placeholder.empty_project_placeholder_STAR_ = (function app$main$ui$dashboard$placeholder$empty_project_placeholder_STAR_(props_58438){
var on_finish_import = props_58438.onFinishImport;
var project_id = props_58438.projectId;
var on_create = props_58438.onCreate;
var file_input = rumext.v2.use_ref(null);
var on_add_library = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"explore-libraries-click",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"dashboard",new cljs.core.Keyword(null,"section","section",-300141526),"empty-placeholder-projects"], null)));

return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$1("https://penpot.app/penpothub/libraries-templates");
}));
var on_import = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.util.dom.click(rumext.v2.ref_val(file_input));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_dashboard_placeholder__empty-project-container",'children':[rumext.v2.jsxs("div",{'onClick':on_create,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.add-file"),'className':"main_ui_dashboard_placeholder__empty-project-card",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_placeholder__empty-project-card-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-project.create")}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_placeholder__empty-project-card-subtitle",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-project.start")})]}),rumext.v2.jsxs("div",{'onClick':on_import,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-project.import"),'className':"main_ui_dashboard_placeholder__empty-project-card",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_placeholder__empty-project-card-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-project.import")}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_placeholder__empty-project-card-subtitle",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-project.import-penpot")})]}),rumext.v2.jsxs("div",{'onClick':on_add_library,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-project.go-to-libraries"),'className':"main_ui_dashboard_placeholder__empty-project-card",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_placeholder__empty-project-card-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-project.add-library")}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_placeholder__empty-project-card-subtitle",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-project.explore")})]}),rumext.v2.jsx(app.main.ui.dashboard.import$.import_form,{'ref':file_input,'project-id':project_id,'on-finish-import':on_finish_import})]});
});

(app.main.ui.dashboard.placeholder.empty_project_placeholder_STAR_.displayName = "empty-project-placeholder*");

/**
 * Return a ref that resolves to true or false if there are at least some
 *   file or some project (a part of the default) exists; this determines
 *   if we need to show a complete placeholder or the small one.
 */
app.main.ui.dashboard.placeholder.make_has_other_files_or_projects_ref = (function app$main$ui$dashboard$placeholder$make_has_other_files_or_projects_ref(team_id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (state){
var or__5025__auto__ = (function (){var projects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"projects","projects",-364845983));
return cljs.core.some((function (p__58439){
var vec__58440 = p__58439;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58440,(0),null);
var project = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58440,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"team-id","team-id",-14505725).cljs$core$IFn$_invoke$arity$1(project),team_id)) && (cljs.core.not(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(project))));
}),projects);
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"files","files",-472457450));
return cljs.core.some((function (p__58443){
var vec__58444 = p__58443;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58444,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58444,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"team-id","team-id",-14505725).cljs$core$IFn$_invoke$arity$1(file),team_id);
}),files);
}
}),app.main.store.state);
});
app.main.ui.dashboard.placeholder.empty_grid_placeholder_STAR_ = (function app$main$ui$dashboard$placeholder$empty_grid_placeholder_STAR_(props_58447){
var on_finish_import = props_58447.onFinishImport;
var project_id = props_58447.projectId;
var team_id = props_58447.teamId;
var limit = props_58447.limit;
var can_edit = props_58447.canEdit;
var is_dragging = props_58447.isDragging;
var create_fn = props_58447.createFn;
var origin = props_58447.origin;
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(create_fn)],(function (_){
return (create_fn.cljs$core$IFn$_invoke$arity$1 ? create_fn.cljs$core$IFn$_invoke$arity$1("dashboard:empty-folder-placeholder") : create_fn.call(null,"dashboard:empty-folder-placeholder"));
}));
var show_text_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var show_text_QMARK_ = cljs.core.deref(show_text_STAR_);
var on_mouse_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_text_STAR_,true);
}));
var on_mouse_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_text_STAR_,null);
}));
var has_other_STAR_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id)],(function (){
return app.main.ui.dashboard.placeholder.make_has_other_files_or_projects_ref(team_id);
}));
var has_other_QMARK_ = rumext.v2.deref(has_other_STAR_);
if(is_dragging === true){
return rumext.v2.jsx("ul",{'style':{'gridTemplateColumns':["repeat(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(limit),", 1fr)"].join('')},'className':"main_ui_dashboard_placeholder__grid-row main_ui_dashboard_placeholder__no-wrap",'children':rumext.v2.jsx("li",{'className':"main_ui_dashboard_placeholder__grid-item main_ui_dashboard_placeholder__grid-empty-placeholder main_ui_dashboard_placeholder__dragged"})});
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"libraries","libraries",-303286011),origin)){
return rumext.v2.jsx(app.main.ui.ds.product.empty_placeholder.empty_placeholder_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-placeholder-libraries-title"),'type':(2),'subtitle':(cljs.core.truth_(can_edit)?null:app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-placeholder-libraries-subtitle-viewer-role")),'className':"main_ui_dashboard_placeholder__empty-placeholder-libraries",'children':(cljs.core.truth_(can_edit)?rumext.v2.jsx(app.util.i18n.tr_html_STAR_,{'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-placeholder-libraries"),'className':"main_ui_dashboard_placeholder__placeholder-markdown",'tagName':"span"}):null)});
} else {
if(cljs.core.not(has_other_QMARK_)){
return rumext.v2.jsx(app.main.ui.dashboard.placeholder.empty_project_placeholder_STAR_,{'onCreate':on_click,'onFinishImport':on_finish_import,'projectId':project_id});
} else {
return rumext.v2.jsx("div",{'className':"main_ui_dashboard_placeholder__grid-empty-placeholder",'children':rumext.v2.jsx("button",{'onClick':on_click,'onMouseEnter':on_mouse_enter,'onMouseLeave':on_mouse_leave,'className':"main_ui_dashboard_placeholder__create-new",'children':(cljs.core.truth_(show_text_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.empty-project.create"):app.main.ui.icons.add)})});
}

}
}
});

(app.main.ui.dashboard.placeholder.empty_grid_placeholder_STAR_.displayName = "empty-grid-placeholder*");

app.main.ui.dashboard.placeholder.loading_placeholder_STAR_ = (function app$main$ui$dashboard$placeholder$loading_placeholder_STAR_(props_58448){
return rumext.v2.jsx(app.main.ui.ds.product.loader.loader_STAR_,{'width':(32),'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.loading"),'className':"main_ui_dashboard_placeholder__placeholder-loader",'children':rumext.v2.jsx("span",{'className':"main_ui_dashboard_placeholder__placeholder-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.loading-files")})});
});

(app.main.ui.dashboard.placeholder.loading_placeholder_STAR_.displayName = "loading-placeholder*");


//# sourceMappingURL=app.main.ui.dashboard.placeholder.js.map
