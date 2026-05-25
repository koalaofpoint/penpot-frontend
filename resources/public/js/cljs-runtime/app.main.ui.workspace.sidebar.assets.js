import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.types.components_list.js";
import "./app.main.data.modal.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.assets.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.context_menu_a11y.js";
import "./app.main.ui.components.search_bar.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.workspace.sidebar.assets.common.js";
import "./app.main.ui.workspace.sidebar.assets.file_library.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./cuerdas.core.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.assets');
app.main.ui.workspace.sidebar.assets.assets_libraries_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$sidebar$assets$assets_libraries_STAR_(props_55269){
var filters = props_55269.filters;
var file_id = rumext.v2.use_ctx(app.main.ui.context.current_file_id);
var files = rumext.v2.deref(app.main.refs.files);
var libraries = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(files),rumext.v2.adapt(file_id)],(function (){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__55268_SHARP_){
return cuerdas.core.lower(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__55268_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(file,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.dissoc,new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__55267_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55267_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"is-indirect","is-indirect",-518601596),cljs.core.vals(app.main.refs.select_libraries(files,file_id))))));
}));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,file){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.file_library.file_library_STAR_,{'file':file,'isLocal':false,'isDefaultOpen':false,'filters':filters},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file) ?? "")));

return out_arr__35152__auto__;
}),[],libraries);
}));

(app.main.ui.workspace.sidebar.assets.assets_libraries_STAR_.displayName = "assets-libraries*");

app.main.ui.workspace.sidebar.assets.ref_COLON_local_library = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (file){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(file,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.dissoc,new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145));
}),app.main.refs.file);
app.main.ui.workspace.sidebar.assets.assets_local_library_STAR_ = (function app$main$ui$workspace$sidebar$assets$assets_local_library_STAR_(props_55270){
var filters = props_55270.filters;
var file = rumext.v2.deref(app.main.ui.workspace.sidebar.assets.ref_COLON_local_library);
return rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.file_library.file_library_STAR_,{'file':file,'isLocal':true,'isDefaultOpen':true,'filters':filters});
});

(app.main.ui.workspace.sidebar.assets.assets_local_library_STAR_.displayName = "assets-local-library*");

app.main.ui.workspace.sidebar.assets.toggle_values = (function app$main$ui$workspace$sidebar$assets$toggle_values(v,a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,a)){
return b;
} else {
return a;
}
});
app.main.ui.workspace.sidebar.assets.assets_toolbox_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$sidebar$assets$assets_toolbox_STAR_(props_55271){
var file_id = props_55271.fileId;
var size = props_55271.size;
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
var filters_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"term","term",-1817390416),"",new cljs.core.Keyword(null,"section","section",-300141526),"all",new cljs.core.Keyword(null,"ordering","ordering",1096406705),app.main.data.workspace.assets.get_current_assets_ordering(),new cljs.core.Keyword(null,"list-style","list-style",-809622358),app.main.data.workspace.assets.get_current_assets_list_style(),new cljs.core.Keyword(null,"open-menu","open-menu",1078280881),false], null));
var filters = cljs.core.deref(filters_STAR_);
var term = new cljs.core.Keyword(null,"term","term",-1817390416).cljs$core$IFn$_invoke$arity$1(filters);
var list_style = new cljs.core.Keyword(null,"list-style","list-style",-809622358).cljs$core$IFn$_invoke$arity$1(filters);
var menu_open_QMARK_ = new cljs.core.Keyword(null,"open-menu","open-menu",1078280881).cljs$core$IFn$_invoke$arity$1(filters);
var section = new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(filters);
var ordering = new cljs.core.Keyword(null,"ordering","ordering",1096406705).cljs$core$IFn$_invoke$arity$1(filters);
var reverse_sort_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"desc","desc",2093485764),ordering);
var libs = rumext.v2.deref(app.main.refs.libraries);
var num_libs = cljs.core.count(libs);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(libs,file_id);
var components = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file)],(function (){
return app.common.types.components_list.components.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file));
}));
var toggle_ordering = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ordering)],(function (){
var new_value = app.main.ui.workspace.sidebar.assets.toggle_values(ordering,new cljs.core.Keyword(null,"asc","asc",356854569),new cljs.core.Keyword(null,"desc","desc",2093485764));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(filters_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"ordering","ordering",1096406705),new_value);

return app.main.data.workspace.assets.set_current_assets_ordering_BANG_(new_value);
}));
var toggle_list_style = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(list_style)],(function (){
var new_value = app.main.ui.workspace.sidebar.assets.toggle_values(list_style,new cljs.core.Keyword(null,"thumbs","thumbs",-1134286339),new cljs.core.Keyword(null,"list","list",765357683));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(filters_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"list-style","list-style",-809622358),new_value);

return app.main.data.workspace.assets.set_current_assets_list_style_BANG_(new_value);
}));
var on_search_term_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.clear_assets_section_open());

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(filters_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"term","term",-1817390416),event);
}));
var on_section_filter_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var value = (function (){var or__5025__auto__ = app.util.dom.get_value(app.util.dom.get_target(event));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var $ = app.util.dom.get_current_target(event);
return app.util.dom.get_attribute($,"data-testid");
}
})();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.clear_assets_section_open());

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(filters_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"section","section",-300141526),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"open-menu","open-menu",1078280881),false], 0));
}));
var show_libraries_dialog = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (){
return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"libraries-dialog","libraries-dialog",-29719008),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id], null));
}));
var on_open_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(filters_STAR_,cljs.core.update,new cljs.core.Keyword(null,"open-menu","open-menu",1078280881),cljs.core.not);
}));
var on_menu_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(filters_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"open-menu","open-menu",1078280881),false);
}));
var options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_section_filter_change)],(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.box-filter-all"),new cljs.core.Keyword(null,"id","id",-1388402092),"all",new cljs.core.Keyword(null,"handler","handler",-195596612),on_section_filter_change], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.components"),new cljs.core.Keyword(null,"id","id",-1388402092),"components",new cljs.core.Keyword(null,"handler","handler",-195596612),on_section_filter_change], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.colors"),new cljs.core.Keyword(null,"id","id",-1388402092),"colors",new cljs.core.Keyword(null,"handler","handler",-195596612),on_section_filter_change], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.typography"),new cljs.core.Keyword(null,"id","id",-1388402092),"typographies",new cljs.core.Keyword(null,"handler","handler",-195596612),on_section_filter_change], null)], null);
}));
return rumext.v2.jsxs("article",{'className':"main_ui_workspace_sidebar_assets__assets-bar",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_assets__assets-header",'children':[((read_only_QMARK_)?null:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_libs,(1))) && (cljs.core.empty_QMARK_(components))))?rumext.v2.jsx("button",{'onClick':show_libraries_dialog,'data-testid':"libraries",'className':"main_ui_workspace_sidebar_assets__add-library-button",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.add-library")}):rumext.v2.jsx("button",{'onClick':show_libraries_dialog,'data-testid':"libraries",'className':"main_ui_workspace_sidebar_assets__libraries-button",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.manage-library")}))),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_assets__search-wrapper",'children':[rumext.v2.jsx(app.main.ui.components.search_bar.search_bar_STAR_,{'onChange':on_search_term_change,'value':term,'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.search"),'children':rumext.v2.jsx("button",{'onClick':on_open_menu,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.filter"),'className':"main_ui_workspace_sidebar_assets__section-button"+" "+(cljs.core.truth_(menu_open_QMARK_)?"main_ui_workspace_sidebar_assets__opened":""),'children':app.main.ui.icons.filter_icon})}),rumext.v2.jsx(app.main.ui.components.context_menu_a11y.context_menu_STAR_,{'selected':section,'width':size,'top':(158),'onClose':on_menu_close,'fixed':true,'minWidth':true,'show':menu_open_QMARK_,'selectable':true,'options':options,'left':(18)}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.sort"),'onClick':toggle_ordering,'icon':((reverse_sort_QMARK_)?"asc-sort":"desc-sort")})]})]}),rumext.v2.jsx(rumext.v2.provider(app.main.ui.workspace.sidebar.assets.common.assets_filters),{'value':filters,'children':rumext.v2.jsx(rumext.v2.provider(app.main.ui.workspace.sidebar.assets.common.assets_toggle_ordering),{'value':toggle_ordering,'children':rumext.v2.jsx(rumext.v2.provider(app.main.ui.workspace.sidebar.assets.common.assets_toggle_list_style),{'value':toggle_list_style,'children':rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.assets_local_library_STAR_,{'filters':filters}),rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.assets_libraries_STAR_,{'filters':filters})]})})})})]});
}));

(app.main.ui.workspace.sidebar.assets.assets_toolbox_STAR_.displayName = "assets-toolbox*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.assets.js.map
