import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.path_names.js";
import "./app.main.constants.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.colors.js";
import "./app.main.data.workspace.libraries.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.color_bullet.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.workspace.sidebar.assets.common.js";
import "./app.main.ui.workspace.sidebar.assets.groups.js";
import "./app.util.color.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./cuerdas.core.js";
import "./okulary.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.assets.colors');
app.main.ui.workspace.sidebar.assets.colors.color_item = (function app$main$ui$workspace$sidebar$assets$colors$color_item(props_55130){
var selected_paths = (props_55130["selected-paths"]);
var on_asset_click = (props_55130["on-asset-click"]);
var selected_full = (props_55130["selected-full"]);
var on_assets_delete = (props_55130["on-assets-delete"]);
var selected = props_55130.selected;
var file_id = (props_55130["file-id"]);
var color = props_55130.color;
var multi_assets_QMARK_ = (props_55130["multi-assets?"]);
var local_QMARK_ = (props_55130["local?"]);
var move_color = (props_55130["move-color"]);
var on_clear_selection = (props_55130["on-clear-selection"]);
var on_group = (props_55130["on-group"]);
var multi_colors_QMARK_ = (props_55130["multi-colors?"]);
var color__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color),rumext.v2.adapt(file_id)],(function (){
var G__55131 = color;
var G__55131__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(color))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__55131,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(color),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], 0)):G__55131);
if(cljs.core.truth_(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(color))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__55131__$1,new cljs.core.Keyword(null,"value","value",305978217));
} else {
return G__55131__$1;
}
}));
var color_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color__$1);
var item_ref = rumext.v2.use_ref();
var dragging_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var dragging_QMARK_ = cljs.core.deref(dragging_STAR_);
var rename_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color-for-rename","color-for-rename",-1584502786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.refs.workspace_local)),color_id);
var input_ref = rumext.v2.use_ref();
var editing_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(rename_QMARK_);
var editing_QMARK_ = cljs.core.deref(editing_STAR_);
var menu_state = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(app.main.ui.workspace.sidebar.assets.common.initial_context_menu_state);
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
var default_name = (cljs.core.truth_(new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color__$1))?app.util.color.gradient_type__GT_string(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(color__$1,new cljs.core.Keyword(null,"gradient","gradient",-1983908971)),new cljs.core.Keyword(null,"type","type",1174270348))):(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color__$1))?new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color__$1):new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(color__$1)
));
var rename_color = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(color_id)],(function (name){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.rename_color(file_id,color_id,name));
}));
var edit_color = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color__$1),rumext.v2.adapt(file_id)],(function (attrs){
var name = app.common.path_names.merge_path_item(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(color__$1),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(color__$1));
var color__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color__$1)),new cljs.core.Keyword(null,"name","name",1843675177),name);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.update_color(color__$2,file_id));
}));
var delete_color = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(multi_colors_QMARK_),rumext.v2.adapt(multi_assets_QMARK_),rumext.v2.adapt(file_id),rumext.v2.adapt(color_id)],(function (){
if(cljs.core.truth_((function (){var or__5025__auto__ = multi_colors_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return multi_assets_QMARK_;
}
})())){
return (on_assets_delete.cljs$core$IFn$_invoke$arity$0 ? on_assets_delete.cljs$core$IFn$_invoke$arity$0() : on_assets_delete.call(null));
} else {
var undo_id = Symbol();
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.undo.start_undo_transaction(undo_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.libraries.delete_color(color__$1),app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$4(file_id,file_id,new cljs.core.Keyword(null,"colors","colors",1157174732),color_id),app.main.data.workspace.undo.commit_undo_transaction(undo_id)], 0));
}
}));
var rename_color_clicked = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(read_only_QMARK_),rumext.v2.adapt(local_QMARK_)],(function (event){
if(cljs.core.truth_((function (){var and__5023__auto__ = local_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(read_only_QMARK_);
} else {
return and__5023__auto__;
}
})())){
app.util.dom.prevent_default(event);

return cljs.core.reset_BANG_(editing_STAR_,true);
} else {
return null;
}
}));
var input_blur = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(rename_color)],(function (event){
var name = app.util.dom.get_target_val(event);
(rename_color.cljs$core$IFn$_invoke$arity$1 ? rename_color.cljs$core$IFn$_invoke$arity$1(name) : rename_color.call(null,name));

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.clear_color_for_rename);

return cljs.core.reset_BANG_(editing_STAR_,false);
}));
var input_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(input_blur)],(function (event){
if(cljs.core.truth_(app.util.keyboard.esc_QMARK_(event))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.clear_color_for_rename);

cljs.core.reset_BANG_(editing_STAR_,false);
} else {
}

if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (input_blur.cljs$core$IFn$_invoke$arity$1 ? input_blur.cljs$core$IFn$_invoke$arity$1(event) : input_blur.call(null,event));
} else {
return null;
}
}));
var edit_color_clicked = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(edit_color),rumext.v2.adapt(color__$1)],(function (event){
return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),event.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),event.clientY,new cljs.core.Keyword(null,"on-accept","on-accept",705439955),edit_color,new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"assets","assets",210278279),new cljs.core.Keyword(null,"data","data",-232669377),color__$1,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"right","right",-452581833)], null));
}));
var on_context_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color_id),rumext.v2.adapt(selected),rumext.v2.adapt(on_clear_selection),rumext.v2.adapt(read_only_QMARK_)],(function (event){
app.util.dom.prevent_default(event);

var pos = app.util.dom.get_client_position(event);
if(cljs.core.truth_((function (){var and__5023__auto__ = local_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(read_only_QMARK_);
} else {
return and__5023__auto__;
}
})())){
if(cljs.core.contains_QMARK_(selected,color_id)){
} else {
(on_clear_selection.cljs$core$IFn$_invoke$arity$0 ? on_clear_selection.cljs$core$IFn$_invoke$arity$0() : on_clear_selection.call(null));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(menu_state,app.main.ui.workspace.sidebar.assets.common.open_context_menu,pos);
} else {
return null;
}
}));
var on_close_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(menu_state,app.main.ui.workspace.sidebar.assets.common.close_context_menu);
}));
var on_drop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color__$1),rumext.v2.adapt(dragging_STAR_),rumext.v2.adapt(selected),rumext.v2.adapt(selected_full),rumext.v2.adapt(selected_paths),rumext.v2.adapt(move_color)],(function (event){
return app.main.ui.workspace.sidebar.assets.common.on_drop_asset(event,color__$1,dragging_STAR_,selected,selected_full,selected_paths,move_color);
}));
var on_drag_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color__$1),rumext.v2.adapt(dragging_STAR_),rumext.v2.adapt(selected),rumext.v2.adapt(selected_paths)],(function (event){
return app.main.ui.workspace.sidebar.assets.common.on_drag_enter_asset(event,color__$1,dragging_STAR_,selected,selected_paths);
}));
var on_drag_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(dragging_STAR_)],(function (event){
return app.main.ui.workspace.sidebar.assets.common.on_drag_leave_asset(event,dragging_STAR_);
}));
var on_color_drag_start = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color__$1),rumext.v2.adapt(file_id),rumext.v2.adapt(selected),rumext.v2.adapt(item_ref),rumext.v2.adapt(read_only_QMARK_),rumext.v2.adapt(editing_QMARK_)],(function (event){
if(cljs.core.truth_((function (){var or__5025__auto__ = read_only_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return editing_QMARK_;
}
})())){
return app.util.dom.prevent_default(event);
} else {
return app.main.ui.workspace.sidebar.assets.common.on_asset_drag_start(event,file_id,color__$1,selected,item_ref,new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.identity);
}
}));
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color__$1),rumext.v2.adapt(on_asset_click),rumext.v2.adapt(read_only_QMARK_),rumext.v2.adapt(file_id)],(function (event){
if(cljs.core.truth_(read_only_QMARK_)){
return null;
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"use-library-color",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"sidebar",new cljs.core.Keyword(null,"external-library","external-library",93332093),cljs.core.not(local_QMARK_)], null)));

if(cljs.core.truth_((function (){var G__55137 = event;
var G__55138 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color__$1);
return (on_asset_click.cljs$core$IFn$_invoke$arity$2 ? on_asset_click.cljs$core$IFn$_invoke$arity$2(G__55137,G__55138) : on_asset_click.call(null,G__55137,G__55138));
})())){
return null;
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.apply_color_from_assets(file_id,color__$1,app.util.keyboard.alt_QMARK_(event)));
}
}
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(editing_QMARK_)],(function (){
if(cljs.core.truth_(editing_QMARK_)){
var input = rumext.v2.ref_val(input_ref);
app.util.dom.select_text_BANG_(input);

return null;
} else {
return null;
}
}));

return rumext.v2.jsxs("div",{'onDragEnter':on_drag_enter,'onDragLeave':on_drag_leave,'className':"main_ui_workspace_sidebar_assets_colors__asset-list-item"+" "+((cljs.core.contains_QMARK_(selected,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color__$1)))?"main_ui_workspace_sidebar_assets_colors__selected":"")+" "+(cljs.core.truth_(editing_QMARK_)?"main_ui_workspace_sidebar_assets_colors__editing":""),'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_assets_colors__bullet-block",'children':rumext.v2.jsx(app.main.ui.components.color_bullet.color_bullet,{'color':color__$1,'mini':true})}),((editing_QMARK_)?rumext.v2.jsx("input",{'type':"text",'ref':input_ref,'onBlur':input_blur,'onKeyDown':input_key_down,'autoFocus':true,'maxLength':app.main.constants.max_input_length,'defaultValue':app.common.path_names.merge_path_item(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(color__$1),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(color__$1)),'className':"main_ui_workspace_sidebar_assets_colors__element-name"}):rumext.v2.jsx("div",{'title':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(color__$1),default_name))?default_name:""+(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(color__$1) ?? "")+" ("+(default_name ?? "")+")"),'onDoubleClick':rename_color_clicked,'className':"main_ui_workspace_sidebar_assets_colors__name-block",'children':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(color__$1),default_name))?rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_assets_colors__default-name",'children':default_name}):rumext.v2.jsxs(rumext.v2.Fragment,{'children':[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(color__$1),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_assets_colors__default-name main_ui_workspace_sidebar_assets_colors__default-name-with-color",'children':default_name})]}))})),(cljs.core.truth_(local_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.common.assets_context_menu_STAR_,{'onClose':on_close_menu,'state':cljs.core.deref(menu_state),'options':new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__5025__auto__ = multi_colors_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return multi_assets_QMARK_;
}
})())?null:new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.rename"),new cljs.core.Keyword(null,"id","id",-1388402092),"assets-rename-color",new cljs.core.Keyword(null,"handler","handler",-195596612),rename_color_clicked], null)),(cljs.core.truth_((function (){var or__5025__auto__ = multi_colors_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return multi_assets_QMARK_;
}
})())?null:new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.edit"),new cljs.core.Keyword(null,"id","id",-1388402092),"assets-edit-color",new cljs.core.Keyword(null,"handler","handler",-195596612),edit_color_clicked], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.delete"),new cljs.core.Keyword(null,"id","id",-1388402092),"assets-delete-color",new cljs.core.Keyword(null,"handler","handler",-195596612),delete_color], null),(cljs.core.truth_(multi_assets_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.group"),new cljs.core.Keyword(null,"id","id",-1388402092),"assets-group-color",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){var G__55143 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color__$1);
return (on_group.cljs$core$IFn$_invoke$arity$1 ? on_group.cljs$core$IFn$_invoke$arity$1(G__55143) : on_group.call(null,G__55143));
})()], null))], null)}):null),((dragging_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_assets_colors__dragging"}):null)],'onContextMenu':on_context_menu,'onDrop':on_drop,'style':({"--bullet-size": "16px"}),'onDragOver':app.util.dom.prevent_default,'draggable':((cljs.core.not(read_only_QMARK_)) && (cljs.core.not(editing_QMARK_))),'onClick':(cljs.core.truth_(editing_QMARK_)?null:on_click),'ref':item_ref,'onDragStart':on_color_drag_start});
});

(app.main.ui.workspace.sidebar.assets.colors.color_item.displayName = "color-item");

app.main.ui.workspace.sidebar.assets.colors.colors_group = (function app$main$ui$workspace$sidebar$assets$colors$colors_group(props_55144){
var map__55145 = rumext.v2.util.wrap_props(props_55144);
var map__55145__$1 = cljs.core.__destructure_map(map__55145);
var groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"groups","groups",-136896102));
var on_asset_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"on-asset-click","on-asset-click",1164784669));
var on_rename_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"on-rename-group","on-rename-group",-1516017186));
var selected_full = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"selected-full","selected-full",-948180416));
var on_assets_delete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"on-assets-delete","on-assets-delete",-1367349600));
var force_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"force-open?","force-open?",514305058));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var multi_assets_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"multi-assets?","multi-assets?",-1126822393));
var on_ungroup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"on-ungroup","on-ungroup",-1285143350));
var local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"local?","local?",-1422786101));
var colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var open_groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"open-groups","open-groups",1010222446));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var on_clear_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"on-clear-selection","on-clear-selection",-1065562127));
var on_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"on-group","on-group",1496733713));
var multi_colors_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"multi-colors?","multi-colors?",-2136724074));
var group_open_QMARK_ = ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(open_groups,prefix) === false)?false:((force_open_QMARK_) || (cljs.core.get.cljs$core$IFn$_invoke$arity$3(open_groups,prefix,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefix,""))?true:false)))));
var dragging_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var dragging_QMARK_ = cljs.core.deref(dragging_STAR_);
var selected_paths = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_full)],(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168)),app.common.data.nilv.cljs$core$IFn$_invoke$arity$1("")),selected_full);
}));
var move_color = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.libraries.rename_color,file_id));
var on_drag_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(dragging_STAR_),rumext.v2.adapt(prefix),rumext.v2.adapt(selected_paths)],(function (event){
return app.main.ui.workspace.sidebar.assets.common.on_drag_enter_asset_group(event,dragging_STAR_,prefix,selected_paths);
}));
var on_drag_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(dragging_STAR_)],(function (event){
return app.main.ui.workspace.sidebar.assets.common.on_drag_leave_asset(event,dragging_STAR_);
}));
var on_drop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(dragging_STAR_),rumext.v2.adapt(prefix),rumext.v2.adapt(selected_paths),rumext.v2.adapt(selected_full),rumext.v2.adapt(move_color)],(function (event){
return app.main.ui.workspace.sidebar.assets.common.on_drop_asset_group(event,dragging_STAR_,prefix,selected_paths,selected_full,move_color);
}));
return rumext.v2.jsxs("div",{'onDragEnter':on_drag_enter,'onDragLeave':on_drag_leave,'onDragOver':app.util.dom.prevent_default,'onDrop':on_drop,'className':"main_ui_workspace_sidebar_assets_colors__colors-group",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.groups.asset_group_title_STAR_,{'fileId':file_id,'section':new cljs.core.Keyword(null,"colors","colors",1157174732),'path':prefix,'isGroupOpen':group_open_QMARK_,'onRename':on_rename_group,'onUngroup':on_ungroup}),((group_open_QMARK_)?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(function (){var colors__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(groups,"",cljs.core.PersistentVector.EMPTY);
return rumext.v2.jsxs("div",{'onDragEnter':on_drag_enter,'onDragLeave':on_drag_leave,'onDragOver':app.util.dom.prevent_default,'onDrop':on_drop,'className':"main_ui_workspace_sidebar_assets_colors__asset-list",'children':[((dragging_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_assets_colors__grid-placeholder",'children':"\u00A0"}):null),((((cljs.core.empty_QMARK_(colors__$1)) && ((!((groups == null))))))?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_assets_colors__drop-space"}):null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,color){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.colors.color_item,{'selected-full':selected_full,'on-assets-delete':on_assets_delete,'selected':selected,'color':color,'file-id':file_id,'multi-assets?':multi_assets_QMARK_,'local?':local_QMARK_,'colors':colors__$1,'move-color':move_color,'on-group':on_group,'on-clear-selection':on_clear_selection,'multi-colors?':multi_colors_QMARK_,'selected-paths':selected_paths,'on-asset-click':on_asset_click},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color) ?? "")));

return out_arr__35152__auto__;
}),[],colors__$1)]});
})(),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55150){
var vec__55151 = p__55150;
var path_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55151,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55151,(1),null);
out_arr__35152__auto__.push(((cljs.core.empty_QMARK_(path_item))?null:rumext.v2.jsx(app$main$ui$workspace$sidebar$assets$colors$colors_group,{'selected-full':selected_full,'on-assets-delete':on_assets_delete,'force-open?':force_open_QMARK_,'selected':selected,'file-id':file_id,'multi-assets?':multi_assets_QMARK_,'on-ungroup':on_ungroup,'local?':local_QMARK_,'colors':colors,'open-groups':open_groups,'prefix':app.common.path_names.merge_path_item(prefix,path_item),'on-group':on_group,'on-clear-selection':on_clear_selection,'multi-colors?':multi_colors_QMARK_,'groups':content,'on-asset-click':on_asset_click,'on-rename-group':on_rename_group},""+"group-"+(path_item ?? ""))));

return out_arr__35152__auto__;
}),[],groups)]}):null)]});
});

(app.main.ui.workspace.sidebar.assets.colors.colors_group.displayName = "colors-group");

app.main.ui.workspace.sidebar.assets.colors.colors_section_STAR_ = (function app$main$ui$workspace$sidebar$assets$colors$colors_section_STAR_(props_55161){
var on_asset_click = props_55161.onAssetClick;
var is_open = props_55161.isOpen;
var open_status_ref = props_55161.openStatusRef;
var on_assets_delete = props_55161.onAssetsDelete;
var selected = props_55161.selected;
var file_id = props_55161.fileId;
var is_force_open = props_55161.isForceOpen;
var colors = props_55161.colors;
var is_local = props_55161.isLocal;
var on_clear_selection = props_55161.onClearSelection;
var is_reverse_sort = props_55161.isReverseSort;
var selected__$1 = new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(selected);
var selected_full = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected__$1),rumext.v2.adapt(colors)],(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__55154_SHARP_){
return cljs.core.contains_QMARK_(selected__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55154_SHARP_));
})),colors);
}));
var open_groups_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(open_status_ref)],(function (){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.in$(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102),new cljs.core.Keyword(null,"colors","colors",1157174732)], null)),open_status_ref);
}));
var open_groups = rumext.v2.deref(open_groups_ref);
var multi_colors_QMARK_ = (cljs.core.count(selected__$1) > (1));
var multi_assets_QMARK_ = ((cljs.core.seq(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(selected__$1))) || (((cljs.core.seq(new cljs.core.Keyword(null,"graphics","graphics",-2079995979).cljs$core$IFn$_invoke$arity$1(selected__$1))) || (cljs.core.seq(new cljs.core.Keyword(null,"typographies","typographies",-482095730).cljs$core$IFn$_invoke$arity$1(selected__$1))))));
var groups = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(colors),rumext.v2.adapt(is_reverse_sort)],(function (){
return app.main.ui.workspace.sidebar.assets.groups.group_assets(colors,is_reverse_sort);
}));
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
var add_color = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (value,_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.add_color.cljs$core$IFn$_invoke$arity$1(value));
}));
var add_color_clicked = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (event){
var bounds = app.util.dom.get_bounding_rect(app.util.dom.get_current_target(event));
var x_position = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bounds);
var y_position = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(bounds);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.set_assets_section_open(file_id,new cljs.core.Keyword(null,"colors","colors",1157174732),true),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-asset-to-library",new cljs.core.Keyword(null,"asset-type","asset-type",-1419820094),"color"], null)),app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x_position,new cljs.core.Keyword(null,"y","y",-1757859776),y_position,new cljs.core.Keyword(null,"on-accept","on-accept",705439955),add_color,new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"assets","assets",210278279),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#406280",new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"right","right",-452581833)], null))], 0));
}));
var create_group = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(colors),rumext.v2.adapt(selected__$1),rumext.v2.adapt(on_clear_selection),rumext.v2.adapt(file_id)],(function (color_id){
return (function (group_name){
(on_clear_selection.cljs$core$IFn$_invoke$arity$0 ? on_clear_selection.cljs$core$IFn$_invoke$arity$0() : on_clear_selection.call(null));

var undo_id = Symbol();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.start_undo_transaction(undo_id));

cljs.core.run_BANG_(app.main.store.emit_BANG_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55156_SHARP_){
return app.main.data.workspace.libraries.update_color(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55156_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),app.main.ui.workspace.sidebar.assets.common.add_group(p1__55156_SHARP_,group_name)),file_id);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55155_SHARP_){
if(multi_colors_QMARK_){
return cljs.core.contains_QMARK_(selected__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55155_SHARP_));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55155_SHARP_));
}
}),colors)));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.commit_undo_transaction(undo_id));
});
}));
var rename_group = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(colors)],(function (path,last_path){
(on_clear_selection.cljs$core$IFn$_invoke$arity$0 ? on_clear_selection.cljs$core$IFn$_invoke$arity$0() : on_clear_selection.call(null));

var undo_id = Symbol();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.start_undo_transaction(undo_id));

cljs.core.run_BANG_(app.main.store.emit_BANG_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55158_SHARP_){
return app.main.data.workspace.libraries.update_color(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55158_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),app.main.ui.workspace.sidebar.assets.common.rename_group(p1__55158_SHARP_,path,last_path)),file_id);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55157_SHARP_){
return cuerdas.core.starts_with_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__55157_SHARP_),path);
}),colors)));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
var on_group = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(colors),rumext.v2.adapt(selected__$1)],(function (color_id){
return (function (event){
app.util.dom.stop_propagation(event);

return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name-group-dialog","name-group-dialog",1853050356),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accept","accept",1874130431),(create_group.cljs$core$IFn$_invoke$arity$1 ? create_group.cljs$core$IFn$_invoke$arity$1(color_id) : create_group.call(null,color_id))], null));
});
}));
var on_rename_group = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(colors)],(function (event,path,last_path){
app.util.dom.stop_propagation(event);

return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name-group-dialog","name-group-dialog",1853050356),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"last-path","last-path",-143957020),last_path,new cljs.core.Keyword(null,"accept","accept",1874130431),rename_group], null));
}));
var on_ungroup = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(colors)],(function (path){
(on_clear_selection.cljs$core$IFn$_invoke$arity$0 ? on_clear_selection.cljs$core$IFn$_invoke$arity$0() : on_clear_selection.call(null));

var undo_id = Symbol();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.start_undo_transaction(undo_id));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.main.store.emit_BANG_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55160_SHARP_){
return app.main.data.workspace.libraries.update_color(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55160_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),app.main.ui.workspace.sidebar.assets.common.ungroup(p1__55160_SHARP_,path)),file_id);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55159_SHARP_){
return cuerdas.core.starts_with_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__55159_SHARP_),path);
}),colors)));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
var on_asset_click__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(groups),rumext.v2.adapt(on_asset_click)],cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_asset_click,groups));
return rumext.v2.jsxs(app.main.ui.workspace.sidebar.assets.common.asset_section_STAR_,{'fileId':file_id,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.colors"),'section':new cljs.core.Keyword(null,"colors","colors",1157174732),'assetsCount':cljs.core.count(colors),'isOpen':is_open,'children':[(cljs.core.truth_(is_local)?rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.common.asset_section_block_STAR_,{'role':new cljs.core.Keyword(null,"title-button","title-button",-634326965),'children':(cljs.core.truth_(read_only_QMARK_)?null:rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.colors.add-color"),'onClick':add_color_clicked,'icon':app.main.ui.ds.foundations.assets.icon.add}))}):null),rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.common.asset_section_block_STAR_,{'role':new cljs.core.Keyword(null,"content","content",15833224),'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.colors.colors_group,{'selected-full':selected_full,'on-assets-delete':on_assets_delete,'force-open?':is_force_open,'selected':selected__$1,'file-id':file_id,'multi-assets?':multi_assets_QMARK_,'on-ungroup':on_ungroup,'local?':is_local,'colors':colors,'open-groups':open_groups,'prefix':"",'on-group':on_group,'on-clear-selection':on_clear_selection,'multi-colors?':multi_colors_QMARK_,'groups':groups,'on-asset-click':on_asset_click__$1,'on-rename-group':on_rename_group})})]});
});

(app.main.ui.workspace.sidebar.assets.colors.colors_section_STAR_.displayName = "colors-section*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.assets.colors.js.map
