import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.path_names.js";
import "./app.common.types.component.js";
import "./app.common.types.file.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.libraries.js";
import "./app.main.data.workspace.media.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.data.workspace.variants.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.editable_label.js";
import "./app.main.ui.components.file_uploader.js";
import "./app.main.ui.components.radio_buttons.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.workspace.sidebar.assets.common.js";
import "./app.main.ui.workspace.sidebar.assets.groups.js";
import "./app.util.dom.js";
import "./app.util.dom.dnd.js";
import "./app.util.i18n.js";
import "./cuerdas.core.js";
import "./okulary.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.assets.components');
app.main.ui.workspace.sidebar.assets.components.drag_data_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-local","is-local",-258841872),false], null));
app.main.ui.workspace.sidebar.assets.components.set_drag_data_BANG_ = (function app$main$ui$workspace$sidebar$assets$components$set_drag_data_BANG_(data){
return cljs.core.reset_BANG_(app.main.ui.workspace.sidebar.assets.components.drag_data_STAR_,data);
});
app.main.ui.workspace.sidebar.assets.components.get_component_root_and_container = (function app$main$ui$workspace$sidebar$assets$components$get_component_root_and_container(file_id,component){
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.refs.files),file_id),new cljs.core.Keyword(null,"data","data",-232669377));
var root_shape = app.common.types.file.get_component_root(data,component);
var container = app.common.types.file.get_component_page(data,component);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_shape,container], null);
});
app.main.ui.workspace.sidebar.assets.components.components_item_STAR_ = (function app$main$ui$workspace$sidebar$assets$components$components_item_STAR_(props_55132){
var selected_paths = props_55132.selectedPaths;
var on_asset_click = props_55132.onAssetClick;
var selected_full = props_55132.selectedFull;
var selected = props_55132.selected;
var file_id = props_55132.fileId;
var cancel_rename = props_55132.cancelRename;
var is_listing_thumbs = props_55132.isListingThumbs;
var num_variants = props_55132.numVariants;
var on_context_menu = props_55132.onContextMenu;
var renaming = props_55132.renaming;
var component = props_55132.component;
var do_rename = props_55132.doRename;
var is_local = props_55132.isLocal;
var on_drag_start = props_55132.onDragStart;
var item_ref = rumext.v2.use_ref();
var dragging_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var dragging_QMARK_ = cljs.core.deref(dragging_STAR_);
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
var component_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component);
var visible_QMARK_ = app.main.ui.hooks.use_visible.cljs$core$IFn$_invoke$arity$variadic(item_ref,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"once?","once?",-872881597),true], 0));
var renaming_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renaming,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component));
var vec__55133 = app.main.ui.workspace.sidebar.assets.components.get_component_root_and_container(file_id,component);
var root_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55133,(0),null);
var container = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55133,(1),null);
var on_component_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(component_id),rumext.v2.adapt(on_asset_click)],(function (event){
app.util.dom.stop_propagation(event);

if(cljs.core.truth_((on_asset_click.cljs$core$IFn$_invoke$arity$2 ? on_asset_click.cljs$core$IFn$_invoke$arity$2(event,component_id) : on_asset_click.call(null,event,component_id)))){
return null;
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.unselect_all_assets.cljs$core$IFn$_invoke$arity$0());
}
}));
var on_component_double_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(component),rumext.v2.adapt(is_local),rumext.v2.adapt(renaming_QMARK_)],(function (event){
app.util.dom.stop_propagation(event);

if(renaming_QMARK_){
return null;
} else {
if(cljs.core.truth_(is_local)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.go_to_local_component.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),component_id], 0)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.go_to_component_file(file_id,component,false));
}
}
}));
var on_drop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(component),rumext.v2.adapt(dragging_STAR_),rumext.v2.adapt(selected),rumext.v2.adapt(selected_full),rumext.v2.adapt(selected_paths),rumext.v2.adapt(is_local),rumext.v2.adapt(app.main.ui.workspace.sidebar.assets.components.drag_data_STAR_)],(function (event){
if(cljs.core.truth_((function (){var and__5023__auto__ = is_local;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"is-local","is-local",-258841872).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.ui.workspace.sidebar.assets.components.drag_data_STAR_));
} else {
return and__5023__auto__;
}
})())){
return app.main.ui.workspace.sidebar.assets.common.on_drop_asset(event,component,dragging_STAR_,selected,selected_full,selected_paths,app.main.data.workspace.variants.rename_comp_or_variant_and_main);
} else {
return null;
}
}));
var on_drag_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(component),rumext.v2.adapt(dragging_STAR_),rumext.v2.adapt(selected),rumext.v2.adapt(selected_paths),rumext.v2.adapt(is_local),rumext.v2.adapt(app.main.ui.workspace.sidebar.assets.components.drag_data_STAR_)],(function (event){
if(cljs.core.truth_((function (){var and__5023__auto__ = is_local;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"is-local","is-local",-258841872).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.ui.workspace.sidebar.assets.components.drag_data_STAR_));
} else {
return and__5023__auto__;
}
})())){
return app.main.ui.workspace.sidebar.assets.common.on_drag_enter_asset(event,component,dragging_STAR_,selected,selected_paths);
} else {
return null;
}
}));
var on_drag_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(dragging_STAR_),rumext.v2.adapt(is_local),rumext.v2.adapt(app.main.ui.workspace.sidebar.assets.components.drag_data_STAR_)],(function (event){
if(cljs.core.truth_((function (){var and__5023__auto__ = is_local;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"is-local","is-local",-258841872).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.ui.workspace.sidebar.assets.components.drag_data_STAR_));
} else {
return and__5023__auto__;
}
})())){
return app.main.ui.workspace.sidebar.assets.common.on_drag_leave_asset(event,dragging_STAR_);
} else {
return null;
}
}));
var on_component_drag_start = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(component),rumext.v2.adapt(selected),rumext.v2.adapt(item_ref),rumext.v2.adapt(on_drag_start),rumext.v2.adapt(read_only_QMARK_),rumext.v2.adapt(renaming_QMARK_),rumext.v2.adapt(is_local)],(function (event){
if(cljs.core.truth_((function (){var or__5025__auto__ = read_only_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return renaming_QMARK_;
}
})())){
return app.util.dom.prevent_default(event);
} else {
return app.main.ui.workspace.sidebar.assets.common.on_asset_drag_start(event,file_id,component,selected,item_ref,new cljs.core.Keyword(null,"components","components",-1073188942),on_drag_start);
}
}));
var on_context_menu__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_context_menu),rumext.v2.adapt(component_id)],cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_context_menu,component_id));
return rumext.v2.jsx("div",{'onDoubleClick':on_component_double_click,'onDragEnter':on_drag_enter,'onDragLeave':on_drag_leave,'className':"main_ui_workspace_sidebar_assets_components__component-item"+" "+(cljs.core.truth_(is_listing_thumbs)?"main_ui_workspace_sidebar_assets_components__component-item-grid":"")+" "+((cljs.core.not(is_listing_thumbs))?"main_ui_workspace_sidebar_assets_components__component-item-list":"")+" "+((cljs.core.contains_QMARK_(selected,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component)))?"main_ui_workspace_sidebar_assets_components__component-item-selected":""),'children':(((((!((root_shape == null)))) && ((!((container == null))))))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'className':(cljs.core.truth_(is_listing_thumbs)?"main_ui_workspace_sidebar_assets_components__component-item-grid-name":"")+" "+((cljs.core.not(is_listing_thumbs))?"main_ui_workspace_sidebar_assets_components__component-item-list-name":"")+" "+((renaming_QMARK_)?"main_ui_workspace_sidebar_assets_components__component-item-editing":""),'children':rumext.v2.jsx(app.main.ui.components.editable_label.editable_label_STAR_,{'classInput':(cljs.core.truth_(is_listing_thumbs)?"main_ui_workspace_sidebar_assets_components__component-item-grid-input":"")+" "+((cljs.core.not(is_listing_thumbs))?"main_ui_workspace_sidebar_assets_components__component-item-list-input":""),'classLabel':(cljs.core.truth_(is_listing_thumbs)?"main_ui_workspace_sidebar_assets_components__component-item-grid-label":"")+" "+((cljs.core.not(is_listing_thumbs))?"main_ui_workspace_sidebar_assets_components__component-item-list-label":""),'value':app.common.path_names.merge_path_item(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component)),'tooltip':app.common.path_names.merge_path_item(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component)),'displayValue':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component),'isEditing':renaming_QMARK_,'onChange':do_rename,'onCancel':cancel_rename})}),((dragging_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_assets_components__component-item-dragging"}):null)]}),rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.common.component_item_thumbnail_STAR_,{'fileId':file_id,'className':"main_ui_workspace_sidebar_assets_components__component-item-thumbnail"+" "+((cljs.core.not(is_listing_thumbs))?"main_ui_workspace_sidebar_assets_components__component-item-list-thumbnail":""),'rootShape':root_shape,'component':component,'container':container,'isHidden':cljs.core.not(visible_QMARK_)}),((app.common.types.component.is_variant_QMARK_(component))?rumext.v2.jsx("span",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.assets.components.num-variants",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([num_variants], 0)),'className':"main_ui_workspace_sidebar_assets_components__component-item-variant-mark"+" "+(cljs.core.truth_(is_listing_thumbs)?"main_ui_workspace_sidebar_assets_components__component-item-grid-variant-mark":""),'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.variant,'size':"s"})}):null)]}):null),'id':""+"component-shape-id-"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component) ?? ""),'onContextMenu':on_context_menu__$1,'onDrop':on_drop,'onDragOver':app.util.dom.prevent_default,'draggable':((cljs.core.not(read_only_QMARK_)) && ((!(renaming_QMARK_)))),'onClick':on_component_click,'ref':item_ref,'onDragStart':on_component_drag_start});
});

(app.main.ui.workspace.sidebar.assets.components.components_item_STAR_.displayName = "components-item*");

/**
 * Counts the total number of leaf elements in a nested map structure.
 *   A leaf element is considered any element inside a vector.
 */
app.main.ui.workspace.sidebar.assets.components.count_leaves = (function app$main$ui$workspace$sidebar$assets$components$count_leaves(m){
return cljs.core.reduce_kv((function (acc,_,v){
if(cljs.core.map_QMARK_(v)){
return (acc + (app.main.ui.workspace.sidebar.assets.components.count_leaves.cljs$core$IFn$_invoke$arity$1 ? app.main.ui.workspace.sidebar.assets.components.count_leaves.cljs$core$IFn$_invoke$arity$1(v) : app.main.ui.workspace.sidebar.assets.components.count_leaves.call(null,v)));
} else {
if(cljs.core.vector_QMARK_(v)){
return (acc + cljs.core.count(v));
} else {
return acc;

}
}
}),(0),m);
});
app.main.ui.workspace.sidebar.assets.components.components_group_STAR_ = (function app$main$ui$workspace$sidebar$assets$components$components_group_STAR_(props_55170){
var on_group_combine_variants = props_55170.onGroupCombineVariants;
var groups = props_55170.groups;
var on_asset_click = props_55170.onAssetClick;
var on_rename_group = props_55170.onRenameGroup;
var selected_full = props_55170.selectedFull;
var selected = props_55170.selected;
var file_id = props_55170.fileId;
var cancel_rename = props_55170.cancelRename;
var is_listing_thumbs = props_55170.isListingThumbs;
var count_variants = props_55170.countVariants;
var is_force_open = props_55170.isForceOpen;
var on_ungroup = props_55170.onUngroup;
var on_context_menu = props_55170.onContextMenu;
var renaming = props_55170.renaming;
var open_groups = props_55170.openGroups;
var prefix = props_55170.prefix;
var do_rename = props_55170.doRename;
var is_local = props_55170.isLocal;
var on_group = props_55170.onGroup;
var on_drag_start = props_55170.onDragStart;
var group_open_QMARK_ = ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(open_groups,prefix) === false)?false:((is_force_open) || (cljs.core.get.cljs$core$IFn$_invoke$arity$3(open_groups,prefix,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefix,""))?true:false)))));
var dragging_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var dragging_QMARK_ = cljs.core.deref(dragging_STAR_);
var selected_paths = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_full)],(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168)),app.common.data.nilv.cljs$core$IFn$_invoke$arity$1("")),selected_full);
}));
var components = cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$3(groups,"",cljs.core.PersistentVector.EMPTY));
var can_combine_QMARK_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_local),rumext.v2.adapt(groups),rumext.v2.adapt(components)],(function (){
var and__5023__auto__ = is_local;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = (app.main.ui.workspace.sidebar.assets.components.count_leaves(groups) > (1));
if(and__5023__auto____$1){
var and__5023__auto____$2 = cljs.core.not_any_QMARK_(app.common.types.component.is_variant_QMARK_,components);
if(and__5023__auto____$2){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139),components));
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}));
var on_drag_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(dragging_STAR_),rumext.v2.adapt(prefix),rumext.v2.adapt(selected_paths),rumext.v2.adapt(is_local),rumext.v2.adapt(app.main.ui.workspace.sidebar.assets.components.drag_data_STAR_)],(function (event){
if(cljs.core.truth_((function (){var and__5023__auto__ = is_local;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"is-local","is-local",-258841872).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.ui.workspace.sidebar.assets.components.drag_data_STAR_));
} else {
return and__5023__auto__;
}
})())){
return app.main.ui.workspace.sidebar.assets.common.on_drag_enter_asset_group(event,dragging_STAR_,prefix,selected_paths);
} else {
return null;
}
}));
var on_drag_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(dragging_STAR_),rumext.v2.adapt(is_local),rumext.v2.adapt(app.main.ui.workspace.sidebar.assets.components.drag_data_STAR_)],(function (event){
if(cljs.core.truth_((function (){var and__5023__auto__ = is_local;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"is-local","is-local",-258841872).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.ui.workspace.sidebar.assets.components.drag_data_STAR_));
} else {
return and__5023__auto__;
}
})())){
return app.main.ui.workspace.sidebar.assets.common.on_drag_leave_asset(event,dragging_STAR_);
} else {
return null;
}
}));
var on_drop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(dragging_STAR_),rumext.v2.adapt(prefix),rumext.v2.adapt(selected_paths),rumext.v2.adapt(selected_full),rumext.v2.adapt(is_local),rumext.v2.adapt(app.main.ui.workspace.sidebar.assets.components.drag_data_STAR_)],(function (event){
if(cljs.core.truth_((function (){var and__5023__auto__ = is_local;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"is-local","is-local",-258841872).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.ui.workspace.sidebar.assets.components.drag_data_STAR_));
} else {
return and__5023__auto__;
}
})())){
return app.main.ui.workspace.sidebar.assets.common.on_drop_asset_group(event,dragging_STAR_,prefix,selected_paths,selected_full,app.main.data.workspace.variants.rename_comp_or_variant_and_main);
} else {
return null;
}
}));
return rumext.v2.jsxs("div",{'onDragEnter':on_drag_enter,'onDragLeave':on_drag_leave,'onDragOver':app.util.dom.prevent_default,'onDrop':on_drop,'className':"main_ui_workspace_sidebar_assets_components__component-group",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.groups.asset_group_title_STAR_,{'fileId':file_id,'section':new cljs.core.Keyword(null,"components","components",-1073188942),'path':prefix,'isGroupOpen':group_open_QMARK_,'isCanCombine':can_combine_QMARK_,'onRename':on_rename_group,'onUngroup':on_ungroup,'onGroupCombineVariants':on_group_combine_variants}),((group_open_QMARK_)?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'onDragEnter':on_drag_enter,'onDragLeave':on_drag_leave,'onDragOver':app.util.dom.prevent_default,'onDrop':on_drop,'className':(cljs.core.truth_(is_listing_thumbs)?"main_ui_workspace_sidebar_assets_components__component-group-grid":"")+" "+((cljs.core.not(is_listing_thumbs))?"main_ui_workspace_sidebar_assets_components__component-group-list":""),'children':[((dragging_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_assets_components__component-group-placeholder",'children':"\u00A0"}):null),(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.empty_QMARK_(components);
if(and__5023__auto__){
var and__5023__auto____$1 = (!((groups == null)));
if(and__5023__auto____$1){
return is_local;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_assets_components__component-group-drop-space"+" "+((cljs.core.not(dragging_QMARK_))?"main_ui_workspace_sidebar_assets_components__component-group-drop-space-small":"")}):null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,component){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.components.components_item_STAR_,{'isLocal':is_local,'selected':selected,'onGroup':on_group,'onAssetClick':on_asset_click,'doRename':do_rename,'component':component,'cancelRename':cancel_rename,'numVariants':(function (){var G__55177 = new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(component);
return (count_variants.cljs$core$IFn$_invoke$arity$1 ? count_variants.cljs$core$IFn$_invoke$arity$1(G__55177) : count_variants.call(null,G__55177));
})(),'onContextMenu':on_context_menu,'isListingThumbs':is_listing_thumbs,'renaming':renaming,'onDragStart':on_drag_start,'fileId':file_id,'selectedFull':selected_full,'selectedPaths':selected_paths},""+"component-"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component) ?? "")));

return out_arr__35152__auto__;
}),[],components)]}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55178){
var vec__55180 = p__55178;
var path_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55180,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55180,(1),null);
out_arr__35152__auto__.push(((cljs.core.empty_QMARK_(path_item))?null:rumext.v2.jsx(app$main$ui$workspace$sidebar$assets$components$components_group_STAR_,{'isLocal':is_local,'selected':selected,'onRenameGroup':on_rename_group,'onAssetClick':on_asset_click,'prefix':app.common.path_names.merge_path_item(prefix,path_item),'isForceOpen':is_force_open,'doRename':do_rename,'countVariants':count_variants,'cancelRename':cancel_rename,'onContextMenu':on_context_menu,'isListingThumbs':is_listing_thumbs,'onUngroup':on_ungroup,'onGroupCombineVariants':on_group_combine_variants,'openGroups':open_groups,'renaming':renaming,'onDragStart':on_drag_start,'fileId':file_id,'groups':content,'selectedFull':selected_full},path_item)));

return out_arr__35152__auto__;
}),[],groups)]}):null)]});
});

(app.main.ui.workspace.sidebar.assets.components.components_group_STAR_.displayName = "components-group*");

app.main.ui.workspace.sidebar.assets.components.components_section_STAR_ = (function app$main$ui$workspace$sidebar$assets$components$components_section_STAR_(props_55199){
var on_asset_click = props_55199.onAssetClick;
var is_open = props_55199.isOpen;
var open_status_ref = props_55199.openStatusRef;
var on_assets_delete = props_55199.onAssetsDelete;
var selected = props_55199.selected;
var file_id = props_55199.fileId;
var is_listing_thumbs = props_55199.isListingThumbs;
var count_variants = props_55199.countVariants;
var is_force_open = props_55199.isForceOpen;
var is_local = props_55199.isLocal;
var on_clear_selection = props_55199.onClearSelection;
var components = props_55199.components;
var is_reverse_sort = props_55199.isReverseSort;
var delete_component = props_55199.deleteComponent;
var input_ref = rumext.v2.use_ref(null);
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var state = cljs.core.deref(state_STAR_);
var current_component_id = new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(state);
var renaming_QMARK_ = new cljs.core.Keyword(null,"renaming","renaming",619763182).cljs$core$IFn$_invoke$arity$1(state);
var open_groups_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(open_status_ref)],(function (){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.in$(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102),new cljs.core.Keyword(null,"components","components",-1073188942)], null)),open_status_ref);
}));
var open_groups = rumext.v2.deref(open_groups_ref);
var menu_state = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(app.main.ui.workspace.sidebar.assets.common.initial_context_menu_state);
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
var toggle_list_style = rumext.v2.use_ctx(app.main.ui.workspace.sidebar.assets.common.assets_toggle_list_style);
var selected__$1 = new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(selected);
var selected_full = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__55183_SHARP_){
return cljs.core.contains_QMARK_(selected__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55183_SHARP_));
})),components);
var multi_components_QMARK_ = (cljs.core.count(selected__$1) > (1));
var multi_assets_QMARK_ = ((cljs.core.seq(new cljs.core.Keyword(null,"graphics","graphics",-2079995979).cljs$core$IFn$_invoke$arity$1(selected__$1))) || (((cljs.core.seq(new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(selected__$1))) || (cljs.core.seq(new cljs.core.Keyword(null,"typographies","typographies",-482095730).cljs$core$IFn$_invoke$arity$1(selected__$1))))));
var selected_and_current = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected__$1),rumext.v2.adapt(components),rumext.v2.adapt(current_component_id)],(function (){
return cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(selected__$1,cljs.core.PersistentVector.EMPTY),current_component_id));
}));
var selected_and_current_full = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_and_current)],(function (){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55186_SHARP_){
return cljs.core.contains_QMARK_(selected_and_current,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55186_SHARP_));
}),components);
}));
var any_variant_QMARK_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_and_current)],(function (){
return cljs.core.some(app.common.types.component.is_variant_QMARK_,selected_and_current_full);
}));
var all_same_page_QMARK_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_and_current)],(function (){
var page = new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(cljs.core.first(selected_and_current_full));
return cljs.core.every_QMARK_((function (p1__55187_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(p1__55187_SHARP_));
}),selected_and_current_full);
}));
var groups = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(components),rumext.v2.adapt(is_reverse_sort)],(function (){
return app.main.ui.workspace.sidebar.assets.groups.group_assets(components,is_reverse_sort);
}));
var add_component = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_assets_section_open(file_id,new cljs.core.Keyword(null,"components","components",-1073188942),true));

return app.util.dom.click(rumext.v2.ref_val(input_ref));
}));
var on_file_selected = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (blobs){
var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"blobs","blobs",-1606355916),cljs.core.seq(blobs)], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.media.upload_media_components(params),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-asset-to-library",new cljs.core.Keyword(null,"asset-type","asset-type",-1419820094),"components"], null))], 0));
}));
var on_duplicate = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_component_id),rumext.v2.adapt(selected__$1)],(function (){
if(cljs.core.empty_QMARK_(selected__$1)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.duplicate_component.cljs$core$IFn$_invoke$arity$2(file_id,current_component_id));
} else {
var undo_id = Symbol();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.start_undo_transaction(undo_id));

cljs.core.run_BANG_(app.main.store.emit_BANG_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.libraries.duplicate_component,file_id),selected__$1));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}
}));
var on_delete = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_component_id),rumext.v2.adapt(file_id),rumext.v2.adapt(multi_components_QMARK_),rumext.v2.adapt(multi_assets_QMARK_),rumext.v2.adapt(on_assets_delete)],(function (){
var undo_id = Symbol();
if(((multi_components_QMARK_) || (multi_assets_QMARK_))){
return (on_assets_delete.cljs$core$IFn$_invoke$arity$0 ? on_assets_delete.cljs$core$IFn$_invoke$arity$0() : on_assets_delete.call(null));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.undo.start_undo_transaction(undo_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(delete_component.cljs$core$IFn$_invoke$arity$1 ? delete_component.cljs$core$IFn$_invoke$arity$1(current_component_id) : delete_component.call(null,current_component_id)),app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$4(file_id,file_id,new cljs.core.Keyword(null,"components","components",-1073188942),current_component_id),app.main.data.workspace.undo.commit_undo_transaction(undo_id)], 0));
}
}));
var on_close_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(menu_state,app.main.ui.workspace.sidebar.assets.common.close_context_menu);
}));
var on_rename = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"renaming","renaming",619763182),true);
}));
var cancel_rename = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_STAR_,cljs.core.dissoc,new cljs.core.Keyword(null,"renaming","renaming",619763182));
}));
var do_rename = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_component_id)],(function (new_name){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_STAR_,cljs.core.dissoc,new cljs.core.Keyword(null,"renaming","renaming",619763182));

if((!(cuerdas.core.blank_QMARK_(new_name)))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.variants.rename_comp_or_variant_and_main(current_component_id,new_name));
} else {
return null;
}
}));
var on_context_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected__$1),rumext.v2.adapt(on_clear_selection),rumext.v2.adapt(read_only_QMARK_)],(function (component_id,event){
app.util.dom.stop_propagation(event);

app.util.dom.prevent_default(event);

var pos = app.util.dom.get_client_position(event);
if(cljs.core.not(read_only_QMARK_)){
if(cljs.core.contains_QMARK_(selected__$1,component_id)){
} else {
(on_clear_selection.cljs$core$IFn$_invoke$arity$0 ? on_clear_selection.cljs$core$IFn$_invoke$arity$0() : on_clear_selection.call(null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"component-id","component-id",1551113783),component_id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(menu_state,app.main.ui.workspace.sidebar.assets.common.open_context_menu,pos);
} else {
return null;
}
}));
var create_group = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_component_id),rumext.v2.adapt(components),rumext.v2.adapt(selected__$1),rumext.v2.adapt(on_clear_selection)],(function (group_name){
(on_clear_selection.cljs$core$IFn$_invoke$arity$0 ? on_clear_selection.cljs$core$IFn$_invoke$arity$0() : on_clear_selection.call(null));

var undo_id = Symbol();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.start_undo_transaction(undo_id));

cljs.core.run_BANG_(app.main.store.emit_BANG_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55191_SHARP_){
return app.main.data.workspace.variants.rename_comp_or_variant_and_main(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55191_SHARP_),app.main.ui.workspace.sidebar.assets.common.add_group(p1__55191_SHARP_,group_name));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55190_SHARP_){
if(multi_components_QMARK_){
return cljs.core.contains_QMARK_(selected__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55190_SHARP_));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_component_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55190_SHARP_));
}
}),components)));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
var rename_group = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(components),rumext.v2.adapt(on_clear_selection)],(function (path,last_path){
(on_clear_selection.cljs$core$IFn$_invoke$arity$0 ? on_clear_selection.cljs$core$IFn$_invoke$arity$0() : on_clear_selection.call(null));

var undo_id = Symbol();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.start_undo_transaction(undo_id));

cljs.core.run_BANG_(app.main.store.emit_BANG_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55193_SHARP_){
return app.main.data.workspace.variants.rename_comp_or_variant_and_main(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55193_SHARP_),app.main.ui.workspace.sidebar.assets.common.rename_group(p1__55193_SHARP_,path,last_path));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55192_SHARP_){
return app.common.path_names.inside_path_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__55192_SHARP_),path);
}),components)));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
var on_group = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(components),rumext.v2.adapt(selected__$1),rumext.v2.adapt(create_group)],(function (event){
app.util.dom.stop_propagation(event);

return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name-group-dialog","name-group-dialog",1853050356),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accept","accept",1874130431),create_group], null));
}));
var on_rename_group = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(components)],(function (event,path,last_path){
app.util.dom.stop_propagation(event);

return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name-group-dialog","name-group-dialog",1853050356),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"last-path","last-path",-143957020),last_path,new cljs.core.Keyword(null,"accept","accept",1874130431),rename_group], null));
}));
var on_ungroup = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(components),rumext.v2.adapt(on_clear_selection)],(function (path){
(on_clear_selection.cljs$core$IFn$_invoke$arity$0 ? on_clear_selection.cljs$core$IFn$_invoke$arity$0() : on_clear_selection.call(null));

var undo_id = Symbol();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.start_undo_transaction(undo_id));

cljs.core.run_BANG_(app.main.store.emit_BANG_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55196_SHARP_){
return app.main.data.workspace.variants.rename_comp_or_variant_and_main(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55196_SHARP_),app.main.ui.workspace.sidebar.assets.common.ungroup(p1__55196_SHARP_,path));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55195_SHARP_){
return app.common.path_names.inside_path_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__55195_SHARP_),path);
}),components)));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
var on_group_combine_variants = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(components),rumext.v2.adapt(on_clear_selection)],(function (path){
(on_clear_selection.cljs$core$IFn$_invoke$arity$0 ? on_clear_selection.cljs$core$IFn$_invoke$arity$0() : on_clear_selection.call(null));

var comps = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55197_SHARP_){
return app.common.path_names.inside_path_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__55197_SHARP_),path);
}),components);
var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372),comps));
var page_id = new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(cljs.core.first(comps));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.variants.combine_as_variants(ids,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"trigger","trigger",103466139),"workspace:context-menu-assets-group"], null)));
}));
var on_drag_start = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (component,event){
var file_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.refs.files),file_id),new cljs.core.Keyword(null,"data","data",-232669377));
var shape_main = app.common.types.file.get_component_root(file_data,component);
app.main.ui.workspace.sidebar.assets.components.set_drag_data_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"shape","shape",1190694006),shape_main,new cljs.core.Keyword(null,"is-local","is-local",-258841872),is_local], null));

app.util.dom.dnd.set_data_BANG_.cljs$core$IFn$_invoke$arity$3(event,"penpot/component",true);

app.util.dom.dnd.set_drag_image_BANG_.cljs$core$IFn$_invoke$arity$2(event,app.util.dom.dnd.invisible_image());

return app.util.dom.dnd.set_allowed_effect_BANG_(event,"move");
}));
var on_show_main = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_component_id),rumext.v2.adapt(file_id),rumext.v2.adapt(is_local)],(function (event){
app.util.dom.stop_propagation(event);

if(cljs.core.truth_(is_local)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.go_to_local_component.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),current_component_id], 0)));
} else {
var component = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__55198_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55198_SHARP_),current_component_id);
}),components);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.go_to_component_file(file_id,component,false));
}
}));
var on_asset_click__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(groups),rumext.v2.adapt(on_asset_click)],cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_asset_click,groups));
var on_combine_as_variants = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_and_current_full)],(function (event){
app.util.dom.stop_propagation(event);

var page_id = new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(cljs.core.first(selected_and_current_full));
var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372),selected_full));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.variants.combine_as_variants(ids,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"trigger","trigger",103466139),"workspace:context-menu-assets"], null)));
}));
return rumext.v2.jsxs(app.main.ui.workspace.sidebar.assets.common.asset_section_STAR_,{'fileId':file_id,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.components"),'section':new cljs.core.Keyword(null,"components","components",-1073188942),'assetsCount':cljs.core.count(components),'isOpen':is_open,'children':[rumext.v2.jsxs(app.main.ui.workspace.sidebar.assets.common.asset_section_block_STAR_,{'role':new cljs.core.Keyword(null,"title-button","title-button",-634326965),'children':[((is_open)?rumext.v2.jsx("div",{'children':rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'selected':(cljs.core.truth_(is_listing_thumbs)?"grid":"list"),'on-change':toggle_list_style,'name':"listing-style",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.view_as_list,'value':"list",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.list-view"),'id':"opt-list"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.flex_grid,'value':"grid",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.grid-view"),'id':"opt-grid"})]})}):null),(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(read_only_QMARK_);
if(and__5023__auto__){
return is_local;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.components.add-component"),'onClick':add_component,'icon':app.main.ui.ds.foundations.assets.icon.add,'children':rumext.v2.jsx(app.main.ui.components.file_uploader.file_uploader,{'accept':app.main.data.workspace.media.accept_image_types,'multi':true,'ref':input_ref,'on-selected':on_file_selected})}):null)]}),rumext.v2.jsxs(app.main.ui.workspace.sidebar.assets.common.asset_section_block_STAR_,{'role':new cljs.core.Keyword(null,"content","content",15833224),'children':[((is_open)?rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.components.components_group_STAR_,{'isLocal':is_local,'selected':selected__$1,'onRenameGroup':on_rename_group,'onGroup':on_group,'onAssetClick':on_asset_click__$1,'prefix':"",'isForceOpen':is_force_open,'doRename':do_rename,'countVariants':count_variants,'cancelRename':cancel_rename,'onContextMenu':on_context_menu,'isListingThumbs':is_listing_thumbs,'onUngroup':on_ungroup,'onGroupCombineVariants':on_group_combine_variants,'openGroups':open_groups,'renaming':((renaming_QMARK_)?current_component_id:null),'onDragStart':on_drag_start,'fileId':file_id,'groups':groups,'selectedFull':selected_full}):null),rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.common.assets_context_menu_STAR_,{'onClose':on_close_menu,'state':cljs.core.deref(menu_state),'options':new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__5023__auto__ = is_local;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not((function (){var or__5025__auto__ = multi_components_QMARK_;
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = multi_assets_QMARK_;
if(or__5025__auto____$1){
return or__5025__auto____$1;
} else {
return read_only_QMARK_;
}
}
})());
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.rename"),new cljs.core.Keyword(null,"id","id",-1388402092),"assets-rename-component",new cljs.core.Keyword(null,"handler","handler",-195596612),on_rename], null):null),(cljs.core.truth_((function (){var and__5023__auto__ = is_local;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not((function (){var or__5025__auto__ = multi_assets_QMARK_;
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = read_only_QMARK_;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return any_variant_QMARK_;
}
}
})());
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.duplicate-main"),new cljs.core.Keyword(null,"id","id",-1388402092),"assets-duplicate-component",new cljs.core.Keyword(null,"handler","handler",-195596612),on_duplicate], null):null),(cljs.core.truth_((function (){var and__5023__auto__ = is_local;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not((function (){var or__5025__auto__ = multi_assets_QMARK_;
if(or__5025__auto__){
return or__5025__auto__;
} else {
return read_only_QMARK_;
}
})());
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.group"),new cljs.core.Keyword(null,"id","id",-1388402092),"assets-group-component",new cljs.core.Keyword(null,"handler","handler",-195596612),on_group], null):null),(((!(multi_assets_QMARK_)))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.show-main"),new cljs.core.Keyword(null,"id","id",-1388402092),"assets-show-main-component",new cljs.core.Keyword(null,"handler","handler",-195596612),on_show_main], null):null),(cljs.core.truth_((function (){var and__5023__auto__ = is_local;
if(cljs.core.truth_(and__5023__auto__)){
return ((multi_components_QMARK_) && (cljs.core.not(any_variant_QMARK_)));
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.combine-as-variants"),new cljs.core.Keyword(null,"id","id",-1388402092),"assets-combine-as-variants",new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(all_same_page_QMARK_)?null:app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.combine-as-variants-error")),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(all_same_page_QMARK_),new cljs.core.Keyword(null,"handler","handler",-195596612),on_combine_as_variants], null):null),(cljs.core.truth_((function (){var and__5023__auto__ = is_local;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(read_only_QMARK_);
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.delete"),new cljs.core.Keyword(null,"id","id",-1388402092),"assets-delete-component",new cljs.core.Keyword(null,"handler","handler",-195596612),on_delete], null):null)], null)})]})]});
});

(app.main.ui.workspace.sidebar.assets.components.components_section_STAR_.displayName = "components-section*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.assets.components.js.map
