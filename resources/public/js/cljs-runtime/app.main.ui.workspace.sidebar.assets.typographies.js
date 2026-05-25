import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.path_names.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.libraries.js";
import "./app.main.data.workspace.texts.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.workspace.sidebar.assets.common.js";
import "./app.main.ui.workspace.sidebar.assets.groups.js";
import "./app.main.ui.workspace.sidebar.options.menus.typography.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./cuerdas.core.js";
import "./okulary.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.assets.typographies');
app.main.ui.workspace.sidebar.assets.typographies.lens_COLON_typography_section_state = okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (gstate){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rename-typography","rename-typography",-1476102726),new cljs.core.Keyword(null,"rename-typography","rename-typography",-1476102726).cljs$core$IFn$_invoke$arity$1(gstate),new cljs.core.Keyword(null,"edit-typography","edit-typography",-679697712),new cljs.core.Keyword(null,"edit-typography","edit-typography",-679697712).cljs$core$IFn$_invoke$arity$1(gstate)], null);
}),app.main.refs.workspace_global,cljs.core._EQ_);
app.main.ui.workspace.sidebar.assets.typographies.typography_item = (function app$main$ui$workspace$sidebar$assets$typographies$typography_item(props_55208){
var selected_paths = (props_55208["selected-paths"]);
var move_typography = (props_55208["move-typography"]);
var on_asset_click = (props_55208["on-asset-click"]);
var selected_full = (props_55208["selected-full"]);
var handle_change = (props_55208["handle-change"]);
var selected = props_55208.selected;
var rename_QMARK_ = (props_55208["rename?"]);
var file_id = (props_55208["file-id"]);
var local_QMARK_ = (props_55208["local?"]);
var on_context_menu = (props_55208["on-context-menu"]);
var editing_id = (props_55208["editing-id"]);
var typography = props_55208.typography;
var renaming_id = (props_55208["renaming-id"]);
var item_ref = rumext.v2.use_ref();
var typography_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(typography);
var dragging_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var dragging_QMARK_ = cljs.core.deref(dragging_STAR_);
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
var editing_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(typography));
var renaming_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renaming_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(typography));
var open_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(editing_QMARK_);
var open_QMARK_ = cljs.core.deref(open_STAR_);
var on_drop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(typography),rumext.v2.adapt(dragging_STAR_),rumext.v2.adapt(selected),rumext.v2.adapt(selected_full),rumext.v2.adapt(selected_paths),rumext.v2.adapt(move_typography)],(function (event){
return app.main.ui.workspace.sidebar.assets.common.on_drop_asset(event,typography,dragging_STAR_,selected,selected_full,selected_paths,move_typography);
}));
var on_drag_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(typography),rumext.v2.adapt(dragging_STAR_),rumext.v2.adapt(selected),rumext.v2.adapt(selected_paths)],(function (event){
return app.main.ui.workspace.sidebar.assets.common.on_drag_enter_asset(event,typography,dragging_STAR_,selected,selected_paths);
}));
var on_drag_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(dragging_STAR_)],(function (event){
return app.main.ui.workspace.sidebar.assets.common.on_drag_leave_asset(event,dragging_STAR_);
}));
var on_typography_drag_start = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(typography),rumext.v2.adapt(file_id),rumext.v2.adapt(selected),rumext.v2.adapt(item_ref),rumext.v2.adapt(read_only_QMARK_),rumext.v2.adapt(renaming_QMARK_),rumext.v2.adapt(open_QMARK_)],(function (event){
if(cljs.core.truth_((function (){var or__5025__auto__ = read_only_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = renaming_QMARK_;
if(or__5025__auto____$1){
return or__5025__auto____$1;
} else {
return open_QMARK_;
}
}
})())){
return app.util.dom.prevent_default(event);
} else {
return app.main.ui.workspace.sidebar.assets.common.on_asset_drag_start(event,file_id,typography,selected,item_ref,new cljs.core.Keyword(null,"typographies","typographies",-482095730),cljs.core.identity);
}
}));
var on_context_menu__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_context_menu),rumext.v2.adapt(typography_id)],cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_context_menu,typography_id));
var handle_change__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(typography)],cljs.core.partial.cljs$core$IFn$_invoke$arity$2(handle_change,typography));
var on_asset_click__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(typography),rumext.v2.adapt(on_asset_click),rumext.v2.adapt(read_only_QMARK_),rumext.v2.adapt(local_QMARK_)],(function (event){
if(cljs.core.truth_(read_only_QMARK_)){
return null;
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"use-library-typography",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"sidebar",new cljs.core.Keyword(null,"external-library","external-library",93332093),cljs.core.not(local_QMARK_)], null)));

if(cljs.core.truth_((function (){var G__55210 = event;
var G__55211 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(typography);
return (on_asset_click.cljs$core$IFn$_invoke$arity$2 ? on_asset_click.cljs$core$IFn$_invoke$arity$2(G__55210,G__55211) : on_asset_click.call(null,G__55210,G__55211));
})())){
return null;
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.apply_typography.cljs$core$IFn$_invoke$arity$2(typography,file_id));
}
}
}));
return rumext.v2.jsxs("div",{'onDragEnter':on_drag_enter,'onDragLeave':on_drag_leave,'className':"main_ui_workspace_sidebar_assets_typographies__typography-item",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.typography.typography_entry,{'editing?':editing_QMARK_,'focus-name?':rename_QMARK_,'external-open*':open_STAR_,'file-id':file_id,'renaming?':renaming_QMARK_,'local?':local_QMARK_,'on-context-menu':on_context_menu__$1,'on-click':on_asset_click__$1,'typography':typography,'on-change':handle_change__$1,'selected?':cljs.core.contains_QMARK_(selected,typography_id)}),((dragging_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_assets_typographies__dragging"}):null)],'onDrop':on_drop,'onDragOver':app.util.dom.prevent_default,'draggable':((cljs.core.not(read_only_QMARK_)) && (cljs.core.not(open_QMARK_))),'ref':item_ref,'onDragStart':on_typography_drag_start});
});

(app.main.ui.workspace.sidebar.assets.typographies.typography_item.displayName = "typography-item");

app.main.ui.workspace.sidebar.assets.typographies.typographies_group = (function app$main$ui$workspace$sidebar$assets$typographies$typographies_group(props_55212){
var groups = props_55212.groups;
var on_asset_click = (props_55212["on-asset-click"]);
var on_rename_group = (props_55212["on-rename-group"]);
var selected_full = (props_55212["selected-full"]);
var force_open_QMARK_ = (props_55212["force-open?"]);
var handle_change = (props_55212["handle-change"]);
var selected = props_55212.selected;
var file_id = (props_55212["file-id"]);
var file = props_55212.file;
var on_ungroup = (props_55212["on-ungroup"]);
var local_QMARK_ = (props_55212["local?"]);
var on_context_menu = (props_55212["on-context-menu"]);
var local_data = (props_55212["local-data"]);
var open_groups = (props_55212["open-groups"]);
var prefix = props_55212.prefix;
var editing_id = (props_55212["editing-id"]);
var renaming_id = (props_55212["renaming-id"]);
var group_open_QMARK_ = ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(open_groups,prefix) === false)?false:cljs.core.get.cljs$core$IFn$_invoke$arity$3(open_groups,prefix,true));
var dragging_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var dragging_QMARK_ = cljs.core.deref(dragging_STAR_);
var selected_paths = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_full)],(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168)),app.common.data.nilv.cljs$core$IFn$_invoke$arity$1("")),selected_full);
}));
var move_typography = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.libraries.rename_typography,file_id));
var on_drag_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(dragging_STAR_),rumext.v2.adapt(prefix),rumext.v2.adapt(selected_paths)],(function (event){
return app.main.ui.workspace.sidebar.assets.common.on_drag_enter_asset_group(event,dragging_STAR_,prefix,selected_paths);
}));
var on_drag_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(dragging_STAR_)],(function (event){
return app.main.ui.workspace.sidebar.assets.common.on_drag_leave_asset(event,dragging_STAR_);
}));
var on_drop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(dragging_STAR_),rumext.v2.adapt(prefix),rumext.v2.adapt(selected_paths),rumext.v2.adapt(selected_full),rumext.v2.adapt(move_typography)],(function (event){
return app.main.ui.workspace.sidebar.assets.common.on_drop_asset_group(event,dragging_STAR_,prefix,selected_paths,selected_full,move_typography);
}));
return rumext.v2.jsxs("div",{'onDragEnter':on_drag_enter,'onDragLeave':on_drag_leave,'onDragOver':app.util.dom.prevent_default,'onDrop':on_drop,'className':"main_ui_workspace_sidebar_assets_typographies__typographies-group",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.groups.asset_group_title_STAR_,{'fileId':file_id,'section':new cljs.core.Keyword(null,"typographies","typographies",-482095730),'path':prefix,'isGroupOpen':group_open_QMARK_,'onRename':on_rename_group,'onUngroup':on_ungroup}),(cljs.core.truth_(group_open_QMARK_)?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(function (){var typographies = cljs.core.get.cljs$core$IFn$_invoke$arity$3(groups,"",cljs.core.PersistentVector.EMPTY);
return rumext.v2.jsxs("div",{'onDragEnter':on_drag_enter,'onDragLeave':on_drag_leave,'onDragOver':app.util.dom.prevent_default,'onDrop':on_drop,'className':"main_ui_workspace_sidebar_assets_typographies__assets-list",'children':[((dragging_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_assets_typographies__grid-placeholder",'children':"\u00A0"}):null),((((cljs.core.empty_QMARK_(typographies)) && ((!((groups == null))))))?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_assets_typographies__drop-space"}):null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55213){
var map__55214 = p__55213;
var map__55214__$1 = cljs.core.__destructure_map(map__55214);
var typography = map__55214__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55214__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.typographies.typography_item,{'selected-full':selected_full,'handle-change':handle_change,'selected':selected,'rename?':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rename-typography","rename-typography",-1476102726).cljs$core$IFn$_invoke$arity$1(local_data),id),'file-id':file_id,'local?':local_QMARK_,'on-context-menu':on_context_menu,'editing-id':editing_id,'typography':typography,'renaming-id':renaming_id,'selected-paths':selected_paths,'move-typography':move_typography,'on-asset-click':on_asset_click},""+"typography-"+(id ?? "")));

return out_arr__35152__auto__;
}),[],typographies)]});
})(),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55215){
var vec__55216 = p__55215;
var path_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55216,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55216,(1),null);
out_arr__35152__auto__.push(((cljs.core.empty_QMARK_(path_item))?null:rumext.v2.jsx(app$main$ui$workspace$sidebar$assets$typographies$typographies_group,{'selected-full':selected_full,'force-open?':force_open_QMARK_,'handle-change':handle_change,'selected':selected,'file-id':file_id,'on-ungroup':on_ungroup,'file':file,'local?':local_QMARK_,'on-context-menu':on_context_menu,'local-data':local_data,'open-groups':open_groups,'prefix':app.common.path_names.merge_path_item(prefix,path_item),'editing-id':editing_id,'renaming-id':renaming_id,'groups':content,'on-asset-click':on_asset_click,'on-rename-group':on_rename_group},""+"group-"+(path_item ?? ""))));

return out_arr__35152__auto__;
}),[],groups)]}):null)]});
});

(app.main.ui.workspace.sidebar.assets.typographies.typographies_group.displayName = "typographies-group");

app.main.ui.workspace.sidebar.assets.typographies.typographies_section_STAR_ = (function app$main$ui$workspace$sidebar$assets$typographies$typographies_section_STAR_(props_55229){
var on_asset_click = props_55229.onAssetClick;
var is_open = props_55229.isOpen;
var open_status_ref = props_55229.openStatusRef;
var on_assets_delete = props_55229.onAssetsDelete;
var selected = props_55229.selected;
var file_id = props_55229.fileId;
var is_force_open = props_55229.isForceOpen;
var file = props_55229.file;
var typographies = props_55229.typographies;
var is_local = props_55229.isLocal;
var on_clear_selection = props_55229.onClearSelection;
var is_reverse_sort = props_55229.isReverseSort;
var state = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"detail-open?","detail-open?",-1192975497),false,new cljs.core.Keyword(null,"id","id",-1388402092),null], null));
var local_data = rumext.v2.deref(app.main.ui.workspace.sidebar.assets.typographies.lens_COLON_typography_section_state);
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
var menu_state = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(app.main.ui.workspace.sidebar.assets.common.initial_context_menu_state);
var typographies__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(typographies)],(function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.libraries.extract_path_if_missing,typographies);
}));
var groups = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(typographies__$1),rumext.v2.adapt(is_reverse_sort)],(function (){
return app.main.ui.workspace.sidebar.assets.groups.group_assets(typographies__$1,is_reverse_sort);
}));
var selected__$1 = new cljs.core.Keyword(null,"typographies","typographies",-482095730).cljs$core$IFn$_invoke$arity$1(selected);
var selected_full = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected__$1),rumext.v2.adapt(typographies__$1)],(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__55219_SHARP_){
return cljs.core.contains_QMARK_(selected__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55219_SHARP_));
})),typographies__$1);
}));
var multi_typographies_QMARK_ = (cljs.core.count(selected__$1) > (1));
var multi_assets_QMARK_ = ((cljs.core.seq(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(selected__$1))) || (((cljs.core.seq(new cljs.core.Keyword(null,"graphics","graphics",-2079995979).cljs$core$IFn$_invoke$arity$1(selected__$1))) || (cljs.core.seq(new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(selected__$1))))));
var open_groups_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(open_status_ref)],(function (){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.in$(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102),new cljs.core.Keyword(null,"typographies","typographies",-482095730)], null)),open_status_ref);
}));
var open_groups = rumext.v2.deref(open_groups_ref);
var add_typography = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (_){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_assets_section_open(file_id,new cljs.core.Keyword(null,"typographies","typographies",-482095730),true));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.add_typography(file_id));
}));
var handle_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (typography,changes){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.update_typography(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([typography,changes], 0)),file_id));
}));
var create_group = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(typographies__$1),rumext.v2.adapt(selected__$1),rumext.v2.adapt(on_clear_selection),rumext.v2.adapt(file_id),rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))],(function (group_name){
(on_clear_selection.cljs$core$IFn$_invoke$arity$0 ? on_clear_selection.cljs$core$IFn$_invoke$arity$0() : on_clear_selection.call(null));

var undo_id = Symbol();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.start_undo_transaction(undo_id));

cljs.core.run_BANG_(app.main.store.emit_BANG_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55221_SHARP_){
return app.main.data.workspace.libraries.update_typography(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55221_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),app.main.ui.workspace.sidebar.assets.common.add_group(p1__55221_SHARP_,group_name)),file_id);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55220_SHARP_){
if(multi_typographies_QMARK_){
return cljs.core.contains_QMARK_(selected__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55220_SHARP_));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55220_SHARP_));
}
}),typographies__$1)));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
var rename_group = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(typographies__$1)],(function (path,last_path){
(on_clear_selection.cljs$core$IFn$_invoke$arity$0 ? on_clear_selection.cljs$core$IFn$_invoke$arity$0() : on_clear_selection.call(null));

var undo_id = Symbol();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.start_undo_transaction(undo_id));

cljs.core.run_BANG_(app.main.store.emit_BANG_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55223_SHARP_){
return app.main.data.workspace.libraries.update_typography(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55223_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),app.main.ui.workspace.sidebar.assets.common.rename_group(p1__55223_SHARP_,path,last_path)),file_id);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55222_SHARP_){
return cuerdas.core.starts_with_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__55222_SHARP_),path);
}),typographies__$1)));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
var on_group = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(typographies__$1),rumext.v2.adapt(selected__$1),rumext.v2.adapt(create_group)],(function (event){
app.util.dom.stop_propagation(event);

return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name-group-dialog","name-group-dialog",1853050356),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accept","accept",1874130431),create_group], null));
}));
var on_rename_group = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(typographies__$1)],(function (event,path,last_path){
app.util.dom.stop_propagation(event);

return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name-group-dialog","name-group-dialog",1853050356),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"last-path","last-path",-143957020),last_path,new cljs.core.Keyword(null,"accept","accept",1874130431),rename_group], null));
}));
var on_ungroup = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(typographies__$1)],(function (path){
(on_clear_selection.cljs$core$IFn$_invoke$arity$0 ? on_clear_selection.cljs$core$IFn$_invoke$arity$0() : on_clear_selection.call(null));

var undo_id = Symbol();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.start_undo_transaction(undo_id));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.main.store.emit_BANG_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55225_SHARP_){
return app.main.data.workspace.libraries.rename_typography(file_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55225_SHARP_),app.main.ui.workspace.sidebar.assets.common.ungroup(p1__55225_SHARP_,path));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55224_SHARP_){
return cuerdas.core.starts_with_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__55224_SHARP_),path);
}),typographies__$1)));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
var on_context_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected__$1),rumext.v2.adapt(on_clear_selection),rumext.v2.adapt(read_only_QMARK_)],(function (id,event){
app.util.dom.prevent_default(event);

var pos = app.util.dom.get_client_position(event);
if(cljs.core.not(read_only_QMARK_)){
if(cljs.core.contains_QMARK_(selected__$1,id)){
} else {
(on_clear_selection.cljs$core$IFn$_invoke$arity$0 ? on_clear_selection.cljs$core$IFn$_invoke$arity$0() : on_clear_selection.call(null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(menu_state,app.main.ui.workspace.sidebar.assets.common.open_context_menu,pos);
} else {
return null;
}
}));
var on_close_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(menu_state,app.main.ui.workspace.sidebar.assets.common.close_context_menu);
}));
var handle_rename_typography_clicked = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1((function (p1__55226_SHARP_){
return cljs.core.assoc_in(p1__55226_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"rename-typography","rename-typography",-1476102726)], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
}));
});
var handle_edit_typography_clicked = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1((function (p1__55227_SHARP_){
return cljs.core.assoc_in(p1__55227_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"edit-typography","edit-typography",-679697712)], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
}));
});
var handle_delete_typography = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(state)),rumext.v2.adapt(multi_typographies_QMARK_),rumext.v2.adapt(multi_assets_QMARK_)],(function (){
var undo_id = Symbol();
if(((multi_typographies_QMARK_) || (multi_assets_QMARK_))){
return (on_assets_delete.cljs$core$IFn$_invoke$arity$0 ? on_assets_delete.cljs$core$IFn$_invoke$arity$0() : on_assets_delete.call(null));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.undo.start_undo_transaction(undo_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.libraries.delete_typography(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))),app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$4(file_id,file_id,new cljs.core.Keyword(null,"typographies","typographies",-482095730),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))),app.main.data.workspace.undo.commit_undo_transaction(undo_id)], 0));
}
}));
var editing_id = new cljs.core.Keyword(null,"edit-typography","edit-typography",-679697712).cljs$core$IFn$_invoke$arity$1(local_data);
var renaming_id = new cljs.core.Keyword(null,"rename-typography","rename-typography",-1476102726).cljs$core$IFn$_invoke$arity$1(local_data);
var on_asset_click__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(groups),rumext.v2.adapt(on_asset_click)],cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_asset_click,groups));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(local_data)],(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"edit-typography","edit-typography",-679697712).cljs$core$IFn$_invoke$arity$1(local_data))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1((function (p1__55228_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__55228_SHARP_,new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),cljs.core.dissoc,new cljs.core.Keyword(null,"edit-typography","edit-typography",-679697712));
}));
} else {
return null;
}
}));

return rumext.v2.jsx(rumext.v2.Fragment,{'children':rumext.v2.jsxs(app.main.ui.workspace.sidebar.assets.common.asset_section_STAR_,{'fileId':file_id,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.typography"),'section':new cljs.core.Keyword(null,"typographies","typographies",-482095730),'assetsCount':cljs.core.count(typographies__$1),'isOpen':is_open,'children':[(cljs.core.truth_(is_local)?rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.common.asset_section_block_STAR_,{'role':new cljs.core.Keyword(null,"title-button","title-button",-634326965),'children':(cljs.core.truth_(read_only_QMARK_)?null:rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.typography.add-typography"),'onClick':add_typography,'icon':app.main.ui.ds.foundations.assets.icon.add}))}):null),rumext.v2.jsxs(app.main.ui.workspace.sidebar.assets.common.asset_section_block_STAR_,{'role':new cljs.core.Keyword(null,"content","content",15833224),'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.typographies.typographies_group,{'selected-full':selected_full,'force-open?':is_force_open,'handle-change':handle_change,'selected':selected__$1,'file-id':file_id,'on-ungroup':on_ungroup,'file':file,'local?':is_local,'on-context-menu':on_context_menu,'state':state,'local-data':local_data,'open-groups':open_groups,'prefix':"",'editing-id':editing_id,'renaming-id':renaming_id,'groups':groups,'on-asset-click':on_asset_click__$1,'on-rename-group':on_rename_group}),(cljs.core.truth_(is_local)?rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.common.assets_context_menu_STAR_,{'onClose':on_close_menu,'state':cljs.core.deref(menu_state),'options':new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((multi_typographies_QMARK_) || (multi_assets_QMARK_)))?null:new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.rename"),new cljs.core.Keyword(null,"id","id",-1388402092),"assets-rename-typography",new cljs.core.Keyword(null,"handler","handler",-195596612),handle_rename_typography_clicked], null)),((((multi_typographies_QMARK_) || (multi_assets_QMARK_)))?null:new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.edit"),new cljs.core.Keyword(null,"id","id",-1388402092),"assets-edit-typography",new cljs.core.Keyword(null,"handler","handler",-195596612),handle_edit_typography_clicked], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.delete"),new cljs.core.Keyword(null,"id","id",-1388402092),"assets-delete-typography",new cljs.core.Keyword(null,"handler","handler",-195596612),handle_delete_typography], null),((multi_assets_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.group"),new cljs.core.Keyword(null,"id","id",-1388402092),"assets-group-typography",new cljs.core.Keyword(null,"handler","handler",-195596612),on_group], null))], null)}):rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.common.assets_context_menu_STAR_,{'onClose':on_close_menu,'state':cljs.core.deref(menu_state),'options':new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"show info",new cljs.core.Keyword(null,"id","id",-1388402092),"assets-rename-typography",new cljs.core.Keyword(null,"handler","handler",-195596612),handle_edit_typography_clicked], null)], null)}))]})]})});
});

(app.main.ui.workspace.sidebar.assets.typographies.typographies_section_STAR_.displayName = "typographies-section*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.assets.typographies.js.map
