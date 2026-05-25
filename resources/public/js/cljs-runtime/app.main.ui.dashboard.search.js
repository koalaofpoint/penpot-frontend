import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.data.dashboard.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.dashboard.grid.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.dashboard.search');
app.main.ui.dashboard.search.ref_COLON_search_result = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"search-result","search-result",528142443),app.main.store.state);
app.main.ui.dashboard.search.ref_COLON_selected = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (state){
var files = app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"search-result","search-result",528142443).cljs$core$IFn$_invoke$arity$1(state));
return app.main.refs.extract_selected_files(files,cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"selected-files","selected-files",1045525459)));
}),app.main.store.state);
app.main.ui.dashboard.search.search_page_STAR_ = (function app$main$ui$dashboard$search$search_page_STAR_(props_58547){
var search_term = props_58547.searchTerm;
var team = props_58547.team;
var search_term__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(search_term,"");
var result = rumext.v2.deref(app.main.ui.dashboard.search.ref_COLON_search_result);
var selected = rumext.v2.deref(app.main.ui.dashboard.search.ref_COLON_selected);
var vec__58548 = app.main.ui.hooks.use_dynamic_grid_item_width.cljs$core$IFn$_invoke$arity$0();
var rowref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58548,(0),null);
var limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58548,(1),null);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team)],(function (){
if(cljs.core.truth_(team)){
var tname = (cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(team))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.your-penpot"):new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team));
return app.util.dom.set_html_title(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("title.dashboard.search",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tname], 0)));
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(search_term__$1)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.dashboard.search(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term__$1], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.dashboard.clear_selected_files()], 0));
}));

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("header",{'data-testid':"dashboard-header",'className':"main_ui_dashboard_search__dashboard-header",'children':rumext.v2.jsx("div",{'id':"dashboard-search-title",'className':"main_ui_dashboard_search__dashboard-title",'children':rumext.v2.jsx("h1",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.title-search")})})}),rumext.v2.jsx("section",{'ref':rowref,'className':"main_ui_dashboard_search__dashboard-container main_ui_dashboard_search__search main_ui_dashboard_search__no-bg",'children':((cljs.core.empty_QMARK_(search_term__$1))?rumext.v2.jsxs("div",{'className':"main_ui_dashboard_search__grid-empty-placeholder main_ui_dashboard_search__search",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_search__icon",'children':app.main.ui.icons.search}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_search__text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.type-something")})]}):(((result == null))?rumext.v2.jsxs("div",{'className':"main_ui_dashboard_search__grid-empty-placeholder main_ui_dashboard_search__search",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_search__icon",'children':app.main.ui.icons.search}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_search__text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.searching-for",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([search_term__$1], 0))})]}):((cljs.core.empty_QMARK_(result))?rumext.v2.jsxs("div",{'className':"main_ui_dashboard_search__grid-empty-placeholder main_ui_dashboard_search__search",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_search__icon",'children':app.main.ui.icons.search}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_search__text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.no-matches-for",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([search_term__$1], 0))})]}):rumext.v2.jsx(app.main.ui.dashboard.grid.grid_STAR_,{'files':result,'selectedFiles':selected,'origin':new cljs.core.Keyword(null,"search","search",1564939822),'limit':limit})
)))})]});
});

(app.main.ui.dashboard.search.search_page_STAR_.displayName = "search-page*");


//# sourceMappingURL=app.main.ui.dashboard.search.js.map
