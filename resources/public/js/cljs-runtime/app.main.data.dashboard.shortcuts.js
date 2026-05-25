import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.common.js";
import "./app.main.data.dashboard.js";
import "./app.main.data.event.js";
import "./app.main.data.profile.js";
import "./app.main.data.shortcuts.js";
import "./app.main.store.js";
goog.provide('app.main.data.dashboard.shortcuts');
app.main.data.dashboard.shortcuts.shortcuts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle-theme","toggle-theme",-91905156),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.alt("M"),new cljs.core.Keyword(null,"command","command",-894540724),app.main.data.shortcuts.a_mod("m"),new cljs.core.Keyword(null,"subsections","subsections",689265297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-dashboard","general-dashboard",1757742988)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(app.main.data.profile.toggle_theme(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"dashboard:shortcuts"], null)));
})], null)], null);
app.main.data.dashboard.shortcuts.shortcuts_sidebar_navigation = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"go-to-drafts","go-to-drafts",-411440066),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"G D",new cljs.core.Keyword(null,"command","command",-894540724),"g d",new cljs.core.Keyword(null,"subsections","subsections",689265297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-dashboard","navigation-dashboard",-1099692958)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_files.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.Keyword(null,"default","default",-1987822328)], 0)));
})], null),new cljs.core.Keyword(null,"go-to-libs","go-to-libs",13087431),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"G L",new cljs.core.Keyword(null,"command","command",-894540724),"g l",new cljs.core.Keyword(null,"subsections","subsections",689265297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-dashboard","navigation-dashboard",-1099692958)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_libraries());
})], null)], null);
app.main.data.dashboard.shortcuts.shortcut_search = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"go-to-search","go-to-search",1620800181),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.meta("F"),new cljs.core.Keyword(null,"command","command",-894540724),app.main.data.shortcuts.c_mod("f"),new cljs.core.Keyword(null,"subsections","subsections",689265297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-dashboard","navigation-dashboard",-1099692958)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_search());
})], null)], null);
app.main.data.dashboard.shortcuts.shortcut_create_new_project = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"create-new-project","create-new-project",304792374),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"+",new cljs.core.Keyword(null,"command","command",-894540724),"+",new cljs.core.Keyword(null,"subsections","subsections",689265297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-dashboard","general-dashboard",1757742988)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.create_element());
})], null)], null);
app.main.data.dashboard.shortcuts.shortcuts_dashboard = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.dashboard.shortcuts.shortcuts,app.main.data.dashboard.shortcuts.shortcuts_sidebar_navigation], 0));
app.main.data.dashboard.shortcuts.shortcuts_projects = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.dashboard.shortcuts.shortcuts,app.main.data.dashboard.shortcuts.shortcuts_sidebar_navigation,app.main.data.dashboard.shortcuts.shortcut_search,app.main.data.dashboard.shortcuts.shortcut_create_new_project], 0));
app.main.data.dashboard.shortcuts.shortcuts_drafts_libraries = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.dashboard.shortcuts.shortcuts,app.main.data.dashboard.shortcuts.shortcuts_sidebar_navigation,app.main.data.dashboard.shortcuts.shortcut_search], 0));
app.main.data.dashboard.shortcuts.get_tooltip = (function app$main$data$dashboard$shortcuts$get_tooltip(shortcut){
if(cljs.core.contains_QMARK_(app.main.data.dashboard.shortcuts.shortcuts,shortcut)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shortcut),"\n","(contains? shortcuts shortcut)"].join('')));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.main.data.dashboard.shortcuts.shortcuts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shortcut,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058)], null));
});

//# sourceMappingURL=app.main.data.dashboard.shortcuts.js.map
