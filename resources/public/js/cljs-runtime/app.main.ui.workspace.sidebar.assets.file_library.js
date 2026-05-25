import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.variant.js";
import "./app.common.types.component.js";
import "./app.common.types.components_list.js";
import "./app.main.data.event.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.libraries.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.refs.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.context.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.workspace.sidebar.assets.colors.js";
import "./app.main.ui.workspace.sidebar.assets.common.js";
import "./app.main.ui.workspace.sidebar.assets.components.js";
import "./app.main.ui.workspace.sidebar.assets.typographies.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./cuerdas.core.js";
import "./okulary.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.assets.file_library');
app.main.ui.workspace.sidebar.assets.file_library.ref_COLON_open_status = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.in$(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-assets","workspace-assets",-912330383),new cljs.core.Keyword(null,"open-status","open-status",-381209745)], null)),app.main.store.state);
app.main.ui.workspace.sidebar.assets.file_library.ref_COLON_selected = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.in$(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-assets","workspace-assets",-912330383),new cljs.core.Keyword(null,"selected","selected",574897764)], null)),app.main.store.state);
app.main.ui.workspace.sidebar.assets.file_library.create_file_ref = (function app$main$ui$workspace$sidebar$assets$file_library$create_file_ref(library_id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"files","files",-472457450)),library_id),new cljs.core.Keyword(null,"data","data",-232669377));
}),app.main.store.state);
});
app.main.ui.workspace.sidebar.assets.file_library.use_library_ref = (function app$main$ui$workspace$sidebar$assets$file_library$use_library_ref(file_id){
var library_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (){
return app.main.ui.workspace.sidebar.assets.file_library.create_file_ref(file_id);
}));
return rumext.v2.deref(library_ref);
});
/**
 * Returns the currently selected assets set on the library
 */
app.main.ui.workspace.sidebar.assets.file_library.use_selected = (function app$main$ui$workspace$sidebar$assets$file_library$use_selected(file_id){
var selected_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.key(file_id),app.main.ui.workspace.sidebar.assets.file_library.ref_COLON_selected);
}));
return rumext.v2.deref(selected_ref);
});
app.main.ui.workspace.sidebar.assets.file_library.file_library_title_STAR_ = (function app$main$ui$workspace$sidebar$assets$file_library$file_library_title_STAR_(props_55235){
var is_open = props_55235.isOpen;
var file_id = props_55235.fileId;
var is_local = props_55235.isLocal;
var page_id = props_55235.pageId;
var file_name = props_55235.fileName;
var router = rumext.v2.deref(app.main.refs.router);
var team_id = rumext.v2.use_ctx(app.main.ui.context.current_team_id);
var url = app.main.router.resolve.cljs$core$IFn$_invoke$arity$3(router,new cljs.core.Keyword(null,"workspace","workspace",-1096735709),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id,new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null));
var toggle_open = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(is_open)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_assets_section_open(file_id,new cljs.core.Keyword(null,"library","library",467978288),cljs.core.not(is_open)));
}));
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (ev){
app.util.dom.stop_propagation(ev);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"navigate-to-library-file"], null)));
}));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_assets_file_library__library-title"+" "+(cljs.core.truth_(is_open)?"main_ui_workspace_sidebar_assets_file_library__open":""),'children':rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':true,'collapsed':cljs.core.not(is_open),'allClickable':true,'onCollapsed':toggle_open,'title':(cljs.core.truth_(is_local)?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_assets_file_library__special-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.local-library")}):rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_assets_file_library__special-title",'children':file_name})),'children':((is_local)?null:rumext.v2.jsx("span",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.open-library"),'children':rumext.v2.jsx("a",{'href':["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''),'target':"_blank",'onClick':on_click,'className':"main_ui_workspace_sidebar_assets_file_library__file-link",'children':app.main.ui.icons.open_link})}))})});
});

(app.main.ui.workspace.sidebar.assets.file_library.file_library_title_STAR_.displayName = "file-library-title*");

app.main.ui.workspace.sidebar.assets.file_library.extend_selected = (function app$main$ui$workspace$sidebar$assets$file_library$extend_selected(selected,type,asset_groups,asset_id,file_id){
var flatten_groups = (function app$main$ui$workspace$sidebar$assets$file_library$extend_selected_$_flatten_groups(groups){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(groups,"",cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(app$main$ui$workspace$sidebar$assets$file_library$extend_selected_$_flatten_groups,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55243_SHARP_){
return cljs.core.seq(cljs.core.first(p1__55243_SHARP_));
}),groups))], 0)))], null));
});
var selected_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected,type);
if((cljs.core.count(selected_SINGLEQUOTE_) === (0))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.select_single_asset(file_id,asset_id,type));
} else {
var all_assets = flatten_groups(asset_groups);
var click_index = app.common.data.index_of_pred(all_assets,(function (p1__55244_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55244_SHARP_),asset_id);
}));
var first_index = cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (asset){
return app.common.data.index_of_pred(all_assets,(function (p1__55245_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55245_SHARP_),asset);
}));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected,type))));
var min_index = (function (){var x__5113__auto__ = first_index;
var y__5114__auto__ = click_index;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var max_index = (function (){var x__5110__auto__ = first_index;
var y__5111__auto__ = click_index;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__55246_SHARP_){
return (((min_index <= cljs.core.first(p1__55246_SHARP_))) && ((cljs.core.first(p1__55246_SHARP_) <= max_index)));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.second))),app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(all_assets));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.select_assets(file_id,ids,type));
}
});
app.main.ui.workspace.sidebar.assets.file_library.file_library_content_STAR_ = (function app$main$ui$workspace$sidebar$assets$file_library$file_library_content_STAR_(props_55263){
var open_status_ref = props_55263.openStatusRef;
var filters = props_55263.filters;
var count_variants = props_55263.countVariants;
var file = props_55263.file;
var colors = props_55263.colors;
var is_loaded = props_55263.isLoaded;
var typographies = props_55263.typographies;
var is_local = props_55263.isLocal;
var on_clear_selection = props_55263.onClearSelection;
var components = props_55263.components;
var open_status = rumext.v2.deref(open_status_ref);
var file_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file);
var filters_section = new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(filters);
var has_filters_term_QMARK_ = (!(cuerdas.core.empty_QMARK_(new cljs.core.Keyword(null,"term","term",-1817390416).cljs$core$IFn$_invoke$arity$1(filters))));
var reverse_sort_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"ordering","ordering",1096406705).cljs$core$IFn$_invoke$arity$1(filters));
var listing_thumbs_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"thumbs","thumbs",-1134286339),new cljs.core.Keyword(null,"list-style","list-style",-809622358).cljs$core$IFn$_invoke$arity$1(filters));
var selected = app.main.ui.workspace.sidebar.assets.file_library.use_selected(file_id);
var show_components_QMARK_ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filters_section,"all")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filters_section,"components")))) && ((((cljs.core.count(components) > (0))) || ((!(has_filters_term_QMARK_))))));
var show_colors_QMARK_ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filters_section,"all")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filters_section,"colors")))) && ((((cljs.core.count(colors) > (0))) || ((!(has_filters_term_QMARK_))))));
var show_typography_QMARK_ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filters_section,"all")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filters_section,"typographies")))) && ((((cljs.core.count(typographies) > (0))) || ((!(has_filters_term_QMARK_))))));
var force_open_components_QMARK_ = ((has_filters_term_QMARK_)?((60) > cljs.core.count(components)):null);
var force_open_colors_QMARK_ = ((has_filters_term_QMARK_)?((60) > cljs.core.count(colors)):null);
var force_open_typographies_QMARK_ = ((has_filters_term_QMARK_)?((60) > cljs.core.count(typographies)):null);
var on_asset_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(selected)],(function (asset_type,asset_groups,event,asset_id){
if(app.util.keyboard.mod_QMARK_(event)){
app.util.dom.stop_propagation(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.toggle_selected_assets(file_id,asset_id,asset_type));

return true;
} else {
if(app.util.keyboard.shift_QMARK_(event)){
app.util.dom.stop_propagation(event);

app.main.ui.workspace.sidebar.assets.file_library.extend_selected(selected,asset_type,asset_groups,asset_id,file_id);

return true;
} else {
return null;
}
}
}));
var on_component_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_asset_click)],cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_asset_click,new cljs.core.Keyword(null,"components","components",-1073188942)));
var on_colors_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_asset_click)],cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_asset_click,new cljs.core.Keyword(null,"colors","colors",1157174732)));
var on_typography_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_asset_click)],cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_asset_click,new cljs.core.Keyword(null,"typographies","typographies",-482095730)));
var delete_component = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(components)],(function (component_id){
var component = cljs.core.some((function (p1__55259_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55259_SHARP_),component_id)){
return p1__55259_SHARP_;
} else {
return null;
}
}),components);
if(app.common.types.component.is_variant_QMARK_(component)){
return app.main.data.workspace.shapes.delete_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(component)]));
} else {
return app.main.data.workspace.libraries.delete_component(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),component_id], null));
}
}));
var on_assets_delete = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected),rumext.v2.adapt(file_id)],(function (){
var undo_id = Symbol();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.start_undo_transaction(undo_id));

cljs.core.run_BANG_(app.main.store.emit_BANG_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(delete_component,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(selected)));

cljs.core.run_BANG_(app.main.store.emit_BANG_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55260_SHARP_){
return app.main.data.workspace.libraries.delete_media(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),p1__55260_SHARP_], null));
}),new cljs.core.Keyword(null,"graphics","graphics",-2079995979).cljs$core$IFn$_invoke$arity$1(selected)));

cljs.core.run_BANG_(app.main.store.emit_BANG_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55261_SHARP_){
return app.main.data.workspace.libraries.delete_color(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),p1__55261_SHARP_], null));
}),new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(selected)));

cljs.core.run_BANG_(app.main.store.emit_BANG_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55262_SHARP_){
return app.main.data.workspace.libraries.delete_typography(p1__55262_SHARP_);
}),new cljs.core.Keyword(null,"typographies","typographies",-482095730).cljs$core$IFn$_invoke$arity$1(selected)));

if(((cljs.core.seq(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(selected))) || (((cljs.core.seq(new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(selected))) || (cljs.core.seq(new cljs.core.Keyword(null,"typographies","typographies",-482095730).cljs$core$IFn$_invoke$arity$1(selected))))))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$2(file_id,file_id));
} else {
}

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_assets_file_library__library-content",'children':((cljs.core.not(is_loaded))?rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_assets_file_library__loading",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.loading")}):rumext.v2.jsxs(rumext.v2.Fragment,{'children':[((show_components_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.components.components_section_STAR_,{'isLocal':is_local,'selected':selected,'onAssetClick':on_component_click,'onAssetsDelete':on_assets_delete,'isForceOpen':force_open_components_QMARK_,'countVariants':count_variants,'deleteComponent':delete_component,'isListingThumbs':listing_thumbs_QMARK_,'onClearSelection':on_clear_selection,'components':components,'isOpen':((force_open_components_QMARK_) || (cljs.core.get.cljs$core$IFn$_invoke$arity$3(open_status,new cljs.core.Keyword(null,"components","components",-1073188942),false))),'fileId':file_id,'isReverseSort':reverse_sort_QMARK_,'openStatusRef':open_status_ref}):null),((show_colors_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.colors.colors_section_STAR_,{'isLocal':is_local,'selected':selected,'onAssetClick':on_colors_click,'onAssetsDelete':on_assets_delete,'isForceOpen':force_open_colors_QMARK_,'onClearSelection':on_clear_selection,'isOpen':((force_open_colors_QMARK_) || (cljs.core.get.cljs$core$IFn$_invoke$arity$3(open_status,new cljs.core.Keyword(null,"colors","colors",1157174732),false))),'colors':colors,'fileId':file_id,'isReverseSort':reverse_sort_QMARK_,'openStatusRef':open_status_ref}):null),((show_typography_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.typographies.typographies_section_STAR_,{'isLocal':is_local,'selected':selected,'onAssetClick':on_typography_click,'onAssetsDelete':on_assets_delete,'isForceOpen':force_open_typographies_QMARK_,'onClearSelection':on_clear_selection,'typographies':typographies,'file':file,'isOpen':((force_open_typographies_QMARK_) || (cljs.core.get.cljs$core$IFn$_invoke$arity$3(open_status,new cljs.core.Keyword(null,"typographies","typographies",-482095730),false))),'fileId':new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),'isReverseSort':reverse_sort_QMARK_,'openStatusRef':open_status_ref}):null),(((((!(show_components_QMARK_))) && ((((!(show_colors_QMARK_))) && ((!(show_typography_QMARK_)))))))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_assets_file_library__asset-title",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_assets_file_library__no-found-icon",'children':app.main.ui.icons.search}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_assets_file_library__no-found-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.not-found")})]}):null)]}))});
});

(app.main.ui.workspace.sidebar.assets.file_library.file_library_content_STAR_.displayName = "file-library-content*");

app.main.ui.workspace.sidebar.assets.file_library.file_library_STAR_ = (function app$main$ui$workspace$sidebar$assets$file_library$file_library_STAR_(props_55265){
var is_default_open = props_55265.isDefaultOpen;
var filters = props_55265.filters;
var file = props_55265.file;
var is_local = props_55265.isLocal;
var file_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file);
var file_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file);
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"pages","pages",-285406513)),(0));
var library = app.main.ui.workspace.sidebar.assets.file_library.use_library_ref(file_id);
var colors = new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(library);
var typographies = new cljs.core.Keyword(null,"typographies","typographies",-482095730).cljs$core$IFn$_invoke$arity$1(library);
var filters_term = new cljs.core.Keyword(null,"term","term",-1817390416).cljs$core$IFn$_invoke$arity$1(filters);
var is_loaded = (!((library == null)));
var filtered_colors = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(filters),rumext.v2.adapt(colors)],(function (){
return app.main.ui.workspace.sidebar.assets.common.apply_filters(cljs.core.vals(colors),filters);
}));
var filtered_components = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(filters),rumext.v2.adapt(library)],(function (){
var $ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,app.common.types.components_list.components_seq(library));
var $__$1 = app.main.ui.workspace.sidebar.assets.common.apply_filters($,filters);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__55264_SHARP_){
return app.common.files.variant.is_secondary_variant_QMARK_(p1__55264_SHARP_,library);
}),$__$1);
}));
var filtered_typographies = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(filters),rumext.v2.adapt(typographies)],(function (){
return app.main.ui.workspace.sidebar.assets.common.apply_filters(cljs.core.vals(typographies),filters);
}));
var open_status_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.key(file_id),app.main.ui.workspace.sidebar.assets.file_library.ref_COLON_open_status);
}));
var open_status = rumext.v2.deref(open_status_ref);
var force_lib_open_QMARK_ = (((!(cuerdas.core.blank_QMARK_(filters_term)))) && (((((60) > cljs.core.count(filtered_colors))) || (((((60) > cljs.core.count(filtered_components))) || (((60) > cljs.core.count(filtered_typographies))))))));
var open_QMARK_ = ((new cljs.core.Keyword(null,"library","library",467978288).cljs$core$IFn$_invoke$arity$1(open_status) === false)?false:(function (){var or__5025__auto__ = force_lib_open_QMARK_;
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"library","library",467978288).cljs$core$IFn$_invoke$arity$1(open_status),is_default_open);
}
})());
var unselect_all = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.unselect_all_assets.cljs$core$IFn$_invoke$arity$1(file_id));
}));
var variants_counter = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(library)],(function (){
return cljs.core.update_vals(cljs.core.group_by(new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),app.common.types.components_list.components_seq(library)),cljs.core.count);
}));
var count_variants = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(variants_counter)],(function (variant_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(variants_counter,variant_id);
}));
return rumext.v2.jsxs("div",{'onContextMenu':app.util.dom.prevent_default,'onClick':unselect_all,'className':"main_ui_workspace_sidebar_assets_file_library__tool-window",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.file_library.file_library_title_STAR_,{'fileId':file_id,'pageId':page_id,'fileName':file_name,'isOpen':open_QMARK_,'isLocal':is_local}),((open_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.file_library.file_library_content_STAR_,{'isLocal':is_local,'isLoaded':is_loaded,'countVariants':count_variants,'filters':filters,'onClearSelection':unselect_all,'typographies':filtered_typographies,'file':file,'components':filtered_components,'colors':filtered_colors,'openStatusRef':open_status_ref}):null)]});
});

(app.main.ui.workspace.sidebar.assets.file_library.file_library_STAR_.displayName = "file-library*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.assets.file_library.js.map
