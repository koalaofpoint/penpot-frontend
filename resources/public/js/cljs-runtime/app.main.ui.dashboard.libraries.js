import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.dashboard.js";
import "./app.main.data.dashboard.shortcuts.js";
import "./app.main.data.team.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.dashboard.grid.js";
import "./app.main.ui.hooks.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.dashboard.libraries');
app.main.ui.dashboard.libraries.ref_COLON_selected_files = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (state){
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"selected-files","selected-files",1045525459));
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"shared-files","shared-files",-929120284));
return app.main.refs.extract_selected_files(files,selected);
}),app.main.store.state);
app.main.ui.dashboard.libraries.libraries_page_STAR_ = (function app$main$ui$dashboard$libraries$libraries_page_STAR_(props_58528){
var default_project = props_58528.defaultProject;
var team = props_58528.team;
var files = rumext.v2.deref(app.main.refs.shared_files);
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"id","id",-1388402092));
var can_edit = new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(team));
var files__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(files),rumext.v2.adapt(team_id)],(function (){
return cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58527_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(team_id,new cljs.core.Keyword(null,"team-id","team-id",-14505725).cljs$core$IFn$_invoke$arity$1(p1__58527_SHARP_));
}),cljs.core.vals(files))));
}));
var selected_files = rumext.v2.deref(app.main.ui.dashboard.libraries.ref_COLON_selected_files);
var vec__58530 = app.main.ui.hooks.use_dynamic_grid_item_width.cljs$core$IFn$_invoke$arity$1((350));
var rowref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58530,(0),null);
var limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58530,(1),null);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team)],(function (){
var tname = (cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(team))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.your-penpot"):new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team));
return app.util.dom.set_html_title(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("title.dashboard.shared-libraries",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tname], 0)));
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.team.fetch_shared_files.cljs$core$IFn$_invoke$arity$1(team_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.dashboard.clear_selected_files()], 0));
}));

app.main.ui.hooks.use_shortcuts(new cljs.core.Keyword("app.main.ui.dashboard.libraries","dashboard","app.main.ui.dashboard.libraries/dashboard",-1567324353),app.main.data.dashboard.shortcuts.shortcuts_drafts_libraries);

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("header",{'data-testid':"dashboard-header",'className':"main_ui_dashboard_libraries__dashboard-header",'children':rumext.v2.jsx("div",{'id':"dashboard-libraries-title",'className':"main_ui_dashboard_libraries__dashboard-title",'children':rumext.v2.jsx("h1",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.libraries-title")})})}),rumext.v2.jsx("section",{'ref':rowref,'className':"main_ui_dashboard_libraries__dashboard-container main_ui_dashboard_libraries__no-bg main_ui_dashboard_libraries__dashboard-shared",'children':rumext.v2.jsx(app.main.ui.dashboard.grid.grid_STAR_,{'files':files__$1,'selectedFiles':selected_files,'project':default_project,'origin':new cljs.core.Keyword(null,"libraries","libraries",-303286011),'limit':limit,'canEdit':can_edit})})]});
});

(app.main.ui.dashboard.libraries.libraries_page_STAR_.displayName = "libraries-page*");


//# sourceMappingURL=app.main.ui.dashboard.libraries.js.map
