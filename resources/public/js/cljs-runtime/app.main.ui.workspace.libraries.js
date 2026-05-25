import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.variant.js";
import "./app.common.types.components_list.js";
import "./app.common.types.file.js";
import "./app.common.types.library.js";
import "./app.common.types.typographies_list.js";
import "./app.common.uuid.js";
import "./app.main.data.dashboard.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.data.profile.js";
import "./app.main.data.team.js";
import "./app.main.data.workspace.colors.js";
import "./app.main.data.workspace.libraries.js";
import "./app.main.refs.js";
import "./app.main.render.js";
import "./app.main.store.js";
import "./app.main.ui.components.color_bullet.js";
import "./app.main.ui.components.link_button.js";
import "./app.main.ui.components.search_bar.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.layout.tab_switcher.js";
import "./app.main.ui.ds.product.empty_state.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.icons.js";
import "./app.util.color.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.strings.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.libraries');
app.main.ui.workspace.libraries.close_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_workspace_libraries__close-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-close"})});
app.main.ui.workspace.libraries.add_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_workspace_libraries__add-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-add"})});
/**
 * Given a library data return a summary representation of this library
 */
app.main.ui.workspace.libraries.get_library_summary = (function app$main$ui$workspace$libraries$get_library_summary(data){
var colors = cljs.core.count(new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(data));
var graphics = (0);
var typographies = cljs.core.count(new cljs.core.Keyword(null,"typographies","typographies",-482095730).cljs$core$IFn$_invoke$arity$1(data));
var components = cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54922_SHARP_){
return app.common.files.variant.is_secondary_variant_QMARK_(p1__54922_SHARP_,data);
}),app.common.types.components_list.components_seq(data)));
var empty_QMARK_ = (((components === (0))) && ((((graphics === (0))) && ((((colors === (0))) && ((typographies === (0))))))));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908),empty_QMARK_,new cljs.core.Keyword(null,"colors","colors",1157174732),colors,new cljs.core.Keyword(null,"graphics","graphics",-2079995979),graphics,new cljs.core.Keyword(null,"typographies","typographies",-482095730),typographies,new cljs.core.Keyword(null,"components","components",-1073188942),components], null);
});
app.main.ui.workspace.libraries.adapt_backend_summary = (function app$main$ui$workspace$libraries$adapt_backend_summary(summary){
var components = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(summary));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var graphics = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"media","media",-1066138403).cljs$core$IFn$_invoke$arity$1(summary));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var typographies = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"typographies","typographies",-482095730).cljs$core$IFn$_invoke$arity$1(summary));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var colors = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(summary));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var empty_QMARK_ = (((components === (0))) && ((((graphics === (0))) && ((((colors === (0))) && ((typographies === (0))))))));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908),empty_QMARK_,new cljs.core.Keyword(null,"components","components",-1073188942),components,new cljs.core.Keyword(null,"graphics","graphics",-2079995979),graphics,new cljs.core.Keyword(null,"typographies","typographies",-482095730),typographies,new cljs.core.Keyword(null,"colors","colors",1157174732),colors], null);
});
app.main.ui.workspace.libraries.describe_library = (function app$main$ui$workspace$libraries$describe_library(components_count,graphics_count,colors_count,typography_count){
var all_zero_QMARK_ = (((components_count === (0))) && ((((graphics_count === (0))) && ((((colors_count === (0))) && ((typography_count === (0))))))));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" \u00B7 ",(function (){var G__54926 = cljs.core.PersistentVector.EMPTY;
var G__54926__$1 = ((((all_zero_QMARK_) || ((components_count > (0)))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__54926,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.libraries.components",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(components_count)], 0))):G__54926);
var G__54926__$2 = ((((all_zero_QMARK_) || ((graphics_count > (0)))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__54926__$1,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.libraries.graphics",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(graphics_count)], 0))):G__54926__$1);
var G__54926__$3 = ((((all_zero_QMARK_) || ((colors_count > (0)))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__54926__$2,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.libraries.colors",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(colors_count)], 0))):G__54926__$2);
if(((all_zero_QMARK_) || ((typography_count > (0))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__54926__$3,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.libraries.typography",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(typography_count)], 0)));
} else {
return G__54926__$3;
}
})())),"\u00A0"].join('');
});
app.main.ui.workspace.libraries.library_description_STAR_ = (function app$main$ui$workspace$libraries$library_description_STAR_(props_54927){
var summary = props_54927.summary;
var components_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(summary,new cljs.core.Keyword(null,"components","components",-1073188942));
var graphics_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(summary,new cljs.core.Keyword(null,"graphics","graphics",-2079995979));
var typography_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(summary,new cljs.core.Keyword(null,"typographies","typographies",-482095730));
var colors_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(summary,new cljs.core.Keyword(null,"colors","colors",1157174732));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(((components_count > (0)))?rumext.v2.jsx("li",{'className':"main_ui_workspace_libraries__element-count",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.libraries.components",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(components_count)], 0))}):null),(((graphics_count > (0)))?rumext.v2.jsx("li",{'className':"main_ui_workspace_libraries__element-count",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.libraries.graphics",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(graphics_count)], 0))}):null),(((colors_count > (0)))?rumext.v2.jsx("li",{'className':"main_ui_workspace_libraries__element-count",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.libraries.colors",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(colors_count)], 0))}):null),(((typography_count > (0)))?rumext.v2.jsx("li",{'className':"main_ui_workspace_libraries__element-count",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.libraries.typography",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(typography_count)], 0))}):null)]});
});

(app.main.ui.workspace.libraries.library_description_STAR_.displayName = "library-description*");

app.main.ui.workspace.libraries.sample_library_entry_STAR_ = (function app$main$ui$workspace$libraries$sample_library_entry_STAR_(props_54932){
var importing = props_54932.importing;
var library = props_54932.library;
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(library);
var importing_QMARK_ = cljs.core.deref(importing);
var team_id = rumext.v2.use_ctx(app.main.ui.context.current_team_id);
var on_error = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_){
cljs.core.reset_BANG_(importing,null);

return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.libraries-and-templates.import-error")));
}));
var on_success = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id)],(function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.fetch_shared_files.cljs$core$IFn$_invoke$arity$1(team_id));
}));
var import_library = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_success),rumext.v2.adapt(on_error)],(function (_){
cljs.core.reset_BANG_(importing,id);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.clone_template(cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"template-id","template-id",1952916477),id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null))));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__sample-library-item",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__sample-library-item-name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(library)}),rumext.v2.jsx("input",{'type':"button",'value':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(importing_QMARK_,id))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.adding"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.add")),'onClick':import_library,'className':"main_ui_workspace_libraries__sample-library-button"+" "+(((importing_QMARK_ == null))?"main_ui_workspace_libraries__sample-library-add":"")+" "+(((!((importing_QMARK_ == null))))?"main_ui_workspace_libraries__sample-library-adding":"")})]},""+(id ?? ""));
});

(app.main.ui.workspace.libraries.sample_library_entry_STAR_.displayName = "sample-library-entry*");

/**
 * Check if currentt library summary has elements or not
 */
app.main.ui.workspace.libraries.empty_library_QMARK_ = (function app$main$ui$workspace$libraries$empty_library_QMARK_(summary){
return cljs.core.boolean$(new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908).cljs$core$IFn$_invoke$arity$1(summary));
});
app.main.ui.workspace.libraries.libraries_tab_STAR_ = (function app$main$ui$workspace$libraries$libraries_tab_STAR_(props_54946){
var shared_libraries = props_54946.sharedLibraries;
var linked_libraries = props_54946.linkedLibraries;
var is_shared = props_54946.isShared;
var file_id = rumext.v2.use_ctx(app.main.ui.context.current_file_id);
var search_term_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("");
var search_term = cljs.core.deref(search_term_STAR_);
var local_library = cljs.core.deref(app.main.refs.workspace_data);
var summary = app.main.ui.workspace.libraries.get_library_summary(local_library);
var empty_library_QMARK_ = app.main.ui.workspace.libraries.empty_library_QMARK_(summary);
var selected = app.main.ui.hooks.use_shared_state(new cljs.core.Keyword("app.main.data.workspace.colors","colorpalette-selected","app.main.data.workspace.colors/colorpalette-selected",-553076822),new cljs.core.Keyword(null,"recent","recent",449517715));
var dependencies = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shared_libraries)],(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"library-file-ids","library-file-ids",65064728)),cljs.core.vals(shared_libraries)));
}));
var library_names = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shared_libraries)],(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54949){
var map__54950 = p__54949;
var map__54950__$1 = cljs.core.__destructure_map(map__54950);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54950__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54950__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,name], null);
}),cljs.core.vals(shared_libraries)));
}));
var find_connected_to = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(dependencies)],(function (library_id){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__54951){
var vec__54955 = p__54951;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54955,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54955,(1),null);
if(cljs.core.contains_QMARK_(v,library_id)){
return k;
} else {
return null;
}
}),dependencies);
}));
var shared_libraries__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shared_libraries),rumext.v2.adapt(linked_libraries),rumext.v2.adapt(file_id),rumext.v2.adapt(search_term)],(function (){
if(cljs.core.truth_(shared_libraries)){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cuerdas.core.lower,new cljs.core.Keyword(null,"name","name",1843675177)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54939_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__54939_SHARP_,new cljs.core.Keyword(null,"connected-to-names","connected-to-names",-2033861740),cljs.core.keep.cljs$core$IFn$_invoke$arity$2(library_names,new cljs.core.Keyword(null,"connected-to","connected-to",-1930163150).cljs$core$IFn$_invoke$arity$1(p1__54939_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54938_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__54938_SHARP_,new cljs.core.Keyword(null,"connected-to","connected-to",-1930163150),(function (){var G__54959 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__54938_SHARP_);
return (find_connected_to.cljs$core$IFn$_invoke$arity$1 ? find_connected_to.cljs$core$IFn$_invoke$arity$1(G__54959) : find_connected_to.call(null,G__54959));
})());
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54937_SHARP_){
return app.util.strings.matches_search(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__54937_SHARP_),search_term);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54936_SHARP_){
return cljs.core.contains_QMARK_(linked_libraries,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__54936_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54935_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__54935_SHARP_),file_id);
}),cljs.core.vals(shared_libraries)))))));
} else {
return null;
}
}));
var linked_libraries__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(linked_libraries),rumext.v2.adapt(find_connected_to),rumext.v2.adapt(library_names)],(function (){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cuerdas.core.lower,new cljs.core.Keyword(null,"name","name",1843675177)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54942_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__54942_SHARP_,new cljs.core.Keyword(null,"connected-to-names","connected-to-names",-2033861740),cljs.core.keep.cljs$core$IFn$_invoke$arity$2(library_names,new cljs.core.Keyword(null,"connected-to","connected-to",-1930163150).cljs$core$IFn$_invoke$arity$1(p1__54942_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54941_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__54941_SHARP_,new cljs.core.Keyword(null,"connected-to","connected-to",-1930163150),(function (){var G__54965 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__54941_SHARP_);
return (find_connected_to.cljs$core$IFn$_invoke$arity$1 ? find_connected_to.cljs$core$IFn$_invoke$arity$1(G__54965) : find_connected_to.call(null,G__54965));
})());
}),cljs.core.vals(linked_libraries))));
}));
var linked_libraries_ids = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(linked_libraries__$1)],(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),linked_libraries__$1);
}));
var importing_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var sample_libraries = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"penpot-design-system",new cljs.core.Keyword(null,"name","name",1843675177),"Design system example"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"wireframing-kit",new cljs.core.Keyword(null,"name","name",1843675177),"Wireframe library"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"whiteboarding-kit",new cljs.core.Keyword(null,"name","name",1843675177),"Whiteboarding Kit"], null)], null);
var change_search_term = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
return cljs.core.reset_BANG_(search_term_STAR_,event);
}));
var link_library = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (event){
var library_id = (function (){var G__54968 = app.util.dom.get_current_target(event);
var G__54968__$1 = (((G__54968 == null))?null:app.util.dom.get_data(G__54968,"library-id"));
if((G__54968__$1 == null)){
return null;
} else {
return app.common.uuid.parse(G__54968__$1);
}
})();
cljs.core.reset_BANG_(selected,library_id);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.link_file_to_library(file_id,library_id));
}));
var unlink_library = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (event){
var library_id = (function (){var G__54969 = app.util.dom.get_current_target(event);
var G__54969__$1 = (((G__54969 == null))?null:app.util.dom.get_data(G__54969,"library-id"));
if((G__54969__$1 == null)){
return null;
} else {
return app.common.uuid.parse(G__54969__$1);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(library_id,cljs.core.deref(selected))){
cljs.core.reset_BANG_(selected,new cljs.core.Keyword(null,"file","file",-1269645878));
} else {
}

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.libraries.unlink_file_from_library(file_id,library_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$2(file_id,library_id)], 0));
}));
var on_delete_accept = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.libraries.set_file_shared(file_id,false),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"libraries-dialog","libraries-dialog",-29719008),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id], null))], 0));
}));
var on_delete_cancel = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"libraries-dialog","libraries-dialog",-29719008),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id], null)));
}));
var publish = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (event){
var input_node = app.util.dom.get_target(event);
var publish_library = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.set_file_shared(file_id,true));
});
var cancel_publish = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"libraries-dialog","libraries-dialog",-29719008),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id], null)));
});
if(empty_library_QMARK_){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.publish-empty-library.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.publish-empty-library.message"),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.publish-empty-library.accept"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),publish_library,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),cancel_publish], null)));
} else {
publish_library();
}

return app.util.dom.blur_BANG_(input_node);
}));
var unpublish = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete-shared-libraries","delete-shared-libraries",769506220),new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.PersistentHashSet.createAsIfByAssoc([file_id]),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"unpublish","unpublish",-1397708862),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),on_delete_accept,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),on_delete_cancel,new cljs.core.Keyword(null,"count-libraries","count-libraries",-1908764886),(1)], null)));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__libraries-content",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__lib-section",'children':[rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':false,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.in-this-file"),'className':"main_ui_workspace_libraries__title-spacing-lib"}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__section-list",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__section-list-item",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__item-content",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.file-library")}),rumext.v2.jsx("ul",{'className':"main_ui_workspace_libraries__item-contents",'children':rumext.v2.jsx(app.main.ui.workspace.libraries.library_description_STAR_,{'summary':summary})})]}),((is_shared)?rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("common.unpublish"),'onClick':unpublish,'className':"main_ui_workspace_libraries__item-unpublish"}):rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("common.publish"),'onClick':publish,'className':"main_ui_workspace_libraries__item-publish"}))]}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__54989){
var map__54990 = p__54989;
var map__54990__$1 = cljs.core.__destructure_map(map__54990);
var library = map__54990__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54990__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54990__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54990__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var connected_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54990__$1,new cljs.core.Keyword(null,"connected-to","connected-to",-1930163150));
var connected_to_names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54990__$1,new cljs.core.Keyword(null,"connected-to-names","connected-to-names",-2033861740));
out_arr__35152__auto__.push((function (){var disabled_QMARK_ = cljs.core.some((function (p1__54944_SHARP_){
return cljs.core.contains_QMARK_(linked_libraries_ids,p1__54944_SHARP_);
}),connected_to);
return rumext.v2.jsxs("div",{'data-testid':"library-item",'className':"main_ui_workspace_libraries__section-list-item",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__item-content",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__item-name",'children':name}),rumext.v2.jsx("ul",{'className':"main_ui_workspace_libraries__item-contents",'children':(function (){var summary__$1 = app.main.ui.workspace.libraries.get_library_summary(data);
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.libraries.library_description_STAR_,{'summary':summary__$1}),((cljs.core.seq(connected_to))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__connected-to-wrapper",'children':[rumext.v2.jsxs("span",{'children':["(",app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.connected-to")," "]}),rumext.v2.jsx("span",{'className':"main_ui_workspace_libraries__connected-to-values",'children':cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",connected_to_names)}),rumext.v2.jsx("span",{'children':")"})]}):null)]});
})()})]}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'type':"button",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.unlink-library-btn"),'icon':app.main.ui.ds.foundations.assets.icon.detach,'data-library-id':""+(id ?? ""),'variant':"secondary",'disabled':disabled_QMARK_,'onClick':unlink_library})]},""+(id ?? ""));
})());

return out_arr__35152__auto__;
}),[],linked_libraries__$1)]})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__shared-section",'children':[rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':false,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.shared-libraries"),'className':"main_ui_workspace_libraries__title-spacing-lib"}),rumext.v2.jsx(app.main.ui.components.search_bar.search_bar_STAR_,{'onChange':change_search_term,'value':search_term,'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.search-shared-libraries"),'iconId':app.main.ui.ds.foundations.assets.icon.search}),((cljs.core.seq(shared_libraries__$1))?rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__section-list-shared",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55002){
var map__55003 = p__55002;
var map__55003__$1 = cljs.core.__destructure_map(map__55003);
var library = map__55003__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55003__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55003__$1,new cljs.core.Keyword(null,"name","name",1843675177));
out_arr__35152__auto__.push(rumext.v2.jsxs("div",{'data-testid':"library-item",'className':"main_ui_workspace_libraries__section-list-item",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__item-content",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__item-name",'children':name}),rumext.v2.jsx("ul",{'className':"main_ui_workspace_libraries__item-contents",'children':(function (){var summary__$1 = app.main.ui.workspace.libraries.adapt_backend_summary(new cljs.core.Keyword(null,"library-summary","library-summary",908431551).cljs$core$IFn$_invoke$arity$1(library));
return rumext.v2.jsx(app.main.ui.workspace.libraries.library_description_STAR_,{'summary':summary__$1});
})()})]}),rumext.v2.jsx("button",{'data-library-id':""+(id ?? ""),'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.shared-library-btn"),'onClick':link_library,'className':"main_ui_workspace_libraries__item-button-shared",'children':app.main.ui.workspace.libraries.add_icon})]},""+(id ?? "")));

return out_arr__35152__auto__;
}),[],shared_libraries__$1)}):((cljs.core.empty_QMARK_(shared_libraries__$1))?rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__section-list-empty",'children':(((shared_libraries__$1 == null))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.loading"):((cuerdas.core.empty_QMARK_(search_term))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__sample-libraries-info",'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.empty.no-libraries"),rumext.v2.jsx("a",{'target':"_blank",'href':"https://penpot.app/libraries-templates",'className':"main_ui_workspace_libraries__sample-libraries-link",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.empty.some-templates")})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__sample-libraries-container",'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.empty.add-some"),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,library){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.libraries.sample_library_entry_STAR_,{'library':library,'importing':importing_STAR_}));

return out_arr__35152__auto__;
}),[],sample_libraries)]})]}):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.libraries.no-matches-for",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([search_term], 0))
))}):null))]})]});
});

(app.main.ui.workspace.libraries.libraries_tab_STAR_.displayName = "libraries-tab*");

app.main.ui.workspace.libraries.extract_assets = (function app$main$ui$workspace$libraries$extract_assets(file_data,library,summary_QMARK_){
var exceeded = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"components","components",-1073188942),false,new cljs.core.Keyword(null,"colors","colors",1157174732),false,new cljs.core.Keyword(null,"typographies","typographies",-482095730),false], null));
var truncate = (function (asset_type,items){
if(cljs.core.truth_((function (){var and__5023__auto__ = summary_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (cljs.core.count(items) > (5));
} else {
return and__5023__auto__;
}
})())){
exceeded.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exceeded.cljs$core$IDeref$_deref$arity$1(null),asset_type,true));

return cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),items);
} else {
return items;
}
});
var assets = app.main.data.workspace.libraries.assets_need_sync.cljs$core$IFn$_invoke$arity$2(library,file_data);
var component_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-id","asset-id",249736185),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55005_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-type","asset-type",-1419820094).cljs$core$IFn$_invoke$arity$1(p1__55005_SHARP_),new cljs.core.Keyword(null,"component","component",1555936782));
}),assets)));
var color_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-id","asset-id",249736185),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55006_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-type","asset-type",-1419820094).cljs$core$IFn$_invoke$arity$1(p1__55006_SHARP_),new cljs.core.Keyword(null,"color","color",1011675173));
}),assets)));
var typography_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-id","asset-id",249736185),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55007_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-type","asset-type",-1419820094).cljs$core$IFn$_invoke$arity$1(p1__55007_SHARP_),new cljs.core.Keyword(null,"typography","typography",-399568138));
}),assets)));
var components = truncate(new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__55009_SHARP_){
return cuerdas.core.lower(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__55009_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55008_SHARP_){
return app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library),p1__55008_SHARP_);
}),component_ids)));
var colors = truncate(new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__55011_SHARP_){
return cuerdas.core.lower(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__55011_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55010_SHARP_){
return app.common.types.library.get_color(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library),p1__55010_SHARP_);
}),color_ids)));
var typographies = truncate(new cljs.core.Keyword(null,"typographies","typographies",-482095730),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__55013_SHARP_){
return cuerdas.core.lower(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__55013_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55012_SHARP_){
return app.common.types.typographies_list.get_typography(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library),p1__55012_SHARP_);
}),typography_ids)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [library,cljs.core.deref(exceeded),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"components","components",-1073188942),components,new cljs.core.Keyword(null,"colors","colors",1157174732),colors,new cljs.core.Keyword(null,"typographies","typographies",-482095730),typographies], null)], null);
});
app.main.ui.workspace.libraries.updates_tab_STAR_ = (function app$main$ui$workspace$libraries$updates_tab_STAR_(props_55029){
var file_id = props_55029.fileId;
var libraries = props_55029.libraries;
var summary_QMARK__STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(true);
var summary_QMARK_ = cljs.core.deref(summary_QMARK__STAR_);
var updating_QMARK_ = rumext.v2.deref(app.main.refs.updating_library);
var file_data = cljs.core.deref(app.main.refs.workspace_data);
var see_all_assets = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(summary_QMARK__STAR_,false);
}));
var libs_assets = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_data),rumext.v2.adapt(libraries),rumext.v2.adapt(summary_QMARK__STAR_)],(function (){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__55031){
var vec__55032 = p__55031;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55032,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55032,(1),null);
var map__55035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55032,(2),null);
var map__55035__$1 = cljs.core.__destructure_map(map__55035);
var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55035__$1,new cljs.core.Keyword(null,"components","components",-1073188942));
var colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55035__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var typographies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55035__$1,new cljs.core.Keyword(null,"typographies","typographies",-482095730));
return ((cljs.core.seq(components)) || (((cljs.core.seq(colors)) || (cljs.core.seq(typographies)))));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55023_SHARP_){
return app.main.ui.workspace.libraries.extract_assets(file_data,p1__55023_SHARP_,summary_QMARK_);
}),cljs.core.vals(libraries)));
}));
var update = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (event){
if(cljs.core.truth_(updating_QMARK_)){
return null;
} else {
var library_id = (function (){var G__55036 = app.util.dom.get_target(event);
var G__55036__$1 = (((G__55036 == null))?null:app.util.dom.get_data(G__55036,"library-id"));
if((G__55036__$1 == null)){
return null;
} else {
return app.common.uuid.parse(G__55036__$1);
}
})();
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.libraries.set_updating_library(true),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$2(file_id,library_id)], 0));
}
}));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__updates-content",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__update-section",'children':((cljs.core.empty_QMARK_(libs_assets))?rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__section-list-empty",'children':rumext.v2.jsx(app.main.ui.ds.product.empty_state.empty_state_STAR_,{'icon':app.main.ui.ds.foundations.assets.icon.library,'text':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.no-libraries-need-sync")})}):rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__section-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.library-updates")}),rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__section-list",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55040){
var vec__55041 = p__55040;
var map__55044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55041,(0),null);
var map__55044__$1 = cljs.core.__destructure_map(map__55044);
var library = map__55044__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55044__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55044__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var exceeded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55041,(1),null);
var map__55045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55041,(2),null);
var map__55045__$1 = cljs.core.__destructure_map(map__55045);
var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55045__$1,new cljs.core.Keyword(null,"components","components",-1073188942));
var colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55045__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var typographies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55045__$1,new cljs.core.Keyword(null,"typographies","typographies",-482095730));
out_arr__35152__auto__.push(rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__section-list-item",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__item-content",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__item-name",'children':name}),rumext.v2.jsx("ul",{'className':"main_ui_workspace_libraries__item-contents",'children':app.main.ui.workspace.libraries.describe_library(cljs.core.count(components),(0),cljs.core.count(colors),cljs.core.count(typographies))})]}),rumext.v2.jsx("button",{'type':"button",'disabled':updating_QMARK_,'data-library-id':""+(id ?? ""),'onClick':update,'className':"main_ui_workspace_libraries__item-update",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.update")}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__libraries-updates",'children':[((cljs.core.empty_QMARK_(components))?null:rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__libraries-updates-column",'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto____$1,component){
out_arr__35152__auto____$1.push(rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__libraries-updates-item",'children':(function (){var component__$1 = app.common.types.file.load_component_objects.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library),component);
var root_shape = app.common.types.file.get_component_root(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library),component__$1);
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.render.component_svg,{'root-shape':root_shape,'class':"main_ui_workspace_libraries__component-svg",'objects':new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component__$1)}),rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__name-block",'children':rumext.v2.jsx("span",{'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component__$1),'className':"main_ui_workspace_libraries__item-name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component__$1)})})]});
})()},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component) ?? "")));

return out_arr__35152__auto____$1;
}),[],components),(cljs.core.truth_(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(exceeded))?rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__libraries-updates-item",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__name-block main_ui_workspace_libraries__ellipsis",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_libraries__item-name",'children':"(...)"})})},app.common.uuid.next()):null)]})),((cljs.core.empty_QMARK_(colors))?null:rumext.v2.jsxs("div",{'style':({"--bullet-size": "24px"}),'className':"main_ui_workspace_libraries__libraries-updates-column",'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto____$1,color){
out_arr__35152__auto____$1.push((function (){var default_name = (cljs.core.truth_(new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color))?app.util.color.gradient_type__GT_string(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gradient","gradient",-1983908971),new cljs.core.Keyword(null,"type","type",1174270348)], null))):(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color))?new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color):new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(color)
));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__libraries-updates-item",'children':rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.components.color_bullet.color_bullet,{'color':new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(color)], null)}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__name-block",'children':[rumext.v2.jsx("span",{'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(color),'className':"main_ui_workspace_libraries__item-name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(color)}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(color),default_name))?null:rumext.v2.jsx("span",{'className':"color-value",'children':new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color)}))]})]})},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color) ?? ""));
})());

return out_arr__35152__auto____$1;
}),[],colors),(cljs.core.truth_(new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(exceeded))?rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__libraries-updates-item",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__name-block.ellipsis",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_libraries__item-name",'children':"(...)"})})},app.common.uuid.next()):null)]})),((cljs.core.empty_QMARK_(typographies))?null:rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__libraries-updates-column",'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto____$1,typography){
out_arr__35152__auto____$1.push(rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__libraries-updates-item",'children':rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'style':{'fontFamily':new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(typography),'fontWeight':new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(typography),'fontStyle':new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(typography)},'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.typography.sample")}),rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__name-block",'children':rumext.v2.jsx("span",{'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(typography),'className':"main_ui_workspace_libraries__item-name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(typography)})})]})},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(typography) ?? "")));

return out_arr__35152__auto____$1;
}),[],typographies),(cljs.core.truth_(new cljs.core.Keyword(null,"typographies","typographies",-482095730).cljs$core$IFn$_invoke$arity$1(exceeded))?rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__libraries-updates-item",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__name-block.ellipsis",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_libraries__item-name",'children':"(...)"})})},app.common.uuid.next()):null)]}))]}),(((((new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(exceeded) > (0))) || ((((new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(exceeded) > (0))) || ((new cljs.core.Keyword(null,"typographies","typographies",-482095730).cljs$core$IFn$_invoke$arity$1(exceeded) > (0)))))))?rumext.v2.jsx(app.main.ui.components.link_button.link_button,{'on-click':see_all_assets,'class':"main_ui_workspace_libraries__libraries-updates-see-all",'value':["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.update.see-all-changes")),")"].join('')}):null)]},""+(id ?? "")));

return out_arr__35152__auto__;
}),[],libs_assets)})]}))})});
});

(app.main.ui.workspace.libraries.updates_tab_STAR_.displayName = "updates-tab*");

app.main.ui.workspace.libraries.libraries_dialog = (function app$main$ui$workspace$libraries$libraries_dialog(props_55051){
var map__55057 = rumext.v2.util.wrap_props(props_55051);
var map__55057__$1 = cljs.core.__destructure_map(map__55057);
var starting_tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55057__$1,new cljs.core.Keyword(null,"starting-tab","starting-tab",-1478861215));
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55057__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var files = rumext.v2.deref(app.main.refs.files);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(files,file_id);
var shared_QMARK_ = new cljs.core.Keyword(null,"is-shared","is-shared",2126511925).cljs$core$IFn$_invoke$arity$1(file);
var linked_libraries = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(files),rumext.v2.adapt(file_id)],(function (){
return app.main.refs.select_libraries(files,file_id);
}));
var linked_libraries__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(linked_libraries),rumext.v2.adapt(file_id)],(function (){
return app.common.data.removem((function (p__55060){
var vec__55061 = p__55060;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55061,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55061,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(lib),file_id);
}),linked_libraries);
}));
var shared_libraries = rumext.v2.deref(app.main.refs.shared_files);
var close_dialog_outside = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_target(event),app.util.dom.get_current_target(event))){
return app.main.data.modal.hide_BANG_();
} else {
return null;
}
}));
var close_dialog = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_){
return app.main.data.modal.hide_BANG_();
}));
var selected_tab_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(starting_tab,"libraries");
}));
var selected_tab = cljs.core.deref(selected_tab_STAR_);
var on_change_tab = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p1__55050_SHARP_){
return cljs.core.reset_BANG_(selected_tab_STAR_,p1__55050_SHARP_);
}));
var tabs = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.libraries"),new cljs.core.Keyword(null,"id","id",-1388402092),"libraries"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.updates"),new cljs.core.Keyword(null,"id","id",-1388402092),"updates"], null)], null);
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.fetch_shared_files.cljs$core$IFn$_invoke$arity$0());
}));

return rumext.v2.jsx("div",{'onClick':close_dialog_outside,'data-testid':"libraries-modal",'className':"main_ui_workspace_libraries__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__modal-dialog",'children':[rumext.v2.jsx("button",{'onClick':close_dialog,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.close"),'data-testid':"close-libraries",'className':"main_ui_workspace_libraries__close-btn",'children':app.main.ui.workspace.libraries.close_icon}),rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.libraries")}),rumext.v2.jsx(app.main.ui.ds.layout.tab_switcher.tab_switcher_STAR_,{'tabs':tabs,'selected':selected_tab,'onChange':on_change_tab,'children':(function (){var G__55065 = selected_tab;
switch (G__55065) {
case "libraries":
return rumext.v2.jsx(app.main.ui.workspace.libraries.libraries_tab_STAR_,{'isShared':shared_QMARK_,'linkedLibraries':linked_libraries__$1,'sharedLibraries':shared_libraries});

break;
case "updates":
return rumext.v2.jsx(app.main.ui.workspace.libraries.updates_tab_STAR_,{'fileId':file_id,'libraries':linked_libraries__$1});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55065)].join('')));

}
})()})]})});
});

(app.main.ui.workspace.libraries.libraries_dialog.displayName = "libraries-dialog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"libraries-dialog","libraries-dialog",-29719008),app.main.ui.workspace.libraries.libraries_dialog);
}));
app.main.ui.workspace.libraries.v2_info_dialog = (function app$main$ui$workspace$libraries$v2_info_dialog(props_55066){
var handle_gotit_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.data.modal.hide_BANG_();

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.profile.update_profile_props(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v2-info-shown","v2-info-shown",1459219808),true], null)));
}));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__modal-dialog main_ui_workspace_libraries__modal-v2-info",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__modal-v2-title",'children':"IMPORTANT INFORMATION ABOUT NEW COMPONENTS"}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__modal-content",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__info-content",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__info-block",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__info-icon",'children':app.main.ui.icons.v2_icon_1}),rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__info-block-title",'children':"One physical source of truth"}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__info-block-content",'children':["Main components are now found at the design space. They act as a single source ","of truth and can be worked on with their copies. This ensures consistency and ","allows better control and synchronization."]})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__info-block",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__info-icon",'children':app.main.ui.icons.v2_icon_2}),rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__info-block-title",'children':"Swap components"}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__info-block-content",'children':["Now, you can replace one component copy with another within your libraries. ","The swap components functionality streamlines making changes, testing ","variations, or updating elements without extensive manual adjustments."]})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__info-block",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__info-icon",'children':app.main.ui.icons.v2_icon_3}),rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__info-block-title",'children':"Graphic assets no longer exist"}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__info-block-content",'children':["Graphic assets now disappear, so that all graphic assets become components. ","This way, swapping between them is possible, and we avoid confusion about ","what should go in each typology."]})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__info-block",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__info-icon",'children':app.main.ui.icons.v2_icon_4}),rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__info-block-title",'children':"Main components page"}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_libraries__info-block-content",'children':["You might find that a new page called 'Main components' has appeared in ","your file. On that page, you'll find all the main components that were ","created in your files previously to this new version."]})]})]}),rumext.v2.jsx("div",{'className':"main_ui_workspace_libraries__info-bottom",'children':rumext.v2.jsx("button",{'onClick':handle_gotit_click,'className':"main_ui_workspace_libraries__primary-button",'children':"I GOT IT"})})]})]})});
});

(app.main.ui.workspace.libraries.v2_info_dialog.displayName = "v2-info-dialog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"v2-info","v2-info",1679610198),app.main.ui.workspace.libraries.v2_info_dialog);
}));

//# sourceMappingURL=app.main.ui.workspace.libraries.js.map
