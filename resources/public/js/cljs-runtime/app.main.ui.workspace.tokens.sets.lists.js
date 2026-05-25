import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.types.tokens_lib.js";
import "./app.main.data.workspace.tokens.library_edit.js";
import "./app.main.store.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.foundations.typography.text.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.workspace.tokens.sets.helpers.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.sets.lists');
app.main.ui.workspace.tokens.sets.lists.on_start_creation = (function app$main$ui$workspace$tokens$sets$lists$on_start_creation(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.start_token_set_creation(cljs.core.PersistentVector.EMPTY));
});
app.main.ui.workspace.tokens.sets.lists.editing_label_STAR_ = (function app$main$ui$workspace$tokens$sets$lists$editing_label_STAR_(props_56306){
var on_cancel = props_56306.onCancel;
var default_value = props_56306.defaultValue;
var on_submit = props_56306.onSubmit;
var on_submit__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_cancel),rumext.v2.adapt(on_submit),rumext.v2.adapt(default_value)],(function (event){
var value = app.util.dom.get_target_val(event);
if(((cuerdas.core.empty_QMARK_(value)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,default_value)))){
return (on_cancel.cljs$core$IFn$_invoke$arity$0 ? on_cancel.cljs$core$IFn$_invoke$arity$0() : on_cancel.call(null));
} else {
return (on_submit.cljs$core$IFn$_invoke$arity$1 ? on_submit.cljs$core$IFn$_invoke$arity$1(value) : on_submit.call(null,value));
}
}));
var on_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_submit__$1),rumext.v2.adapt(on_cancel)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_submit__$1.cljs$core$IFn$_invoke$arity$1 ? on_submit__$1.cljs$core$IFn$_invoke$arity$1(event) : on_submit__$1.call(null,event));
} else {
if(cljs.core.truth_(app.util.keyboard.esc_QMARK_(event))){
return (on_cancel.cljs$core$IFn$_invoke$arity$0 ? on_cancel.cljs$core$IFn$_invoke$arity$0() : on_cancel.call(null));
} else {
return null;
}
}
}));
return rumext.v2.jsx("input",{'type':"text",'onBlur':on_submit__$1,'onKeyDown':on_key_down,'maxLength':"256",'autoFocus':true,'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.set-edit-placeholder"),'defaultValue':default_value,'className':"main_ui_workspace_tokens_sets_lists__editing-node"});
});

(app.main.ui.workspace.tokens.sets.lists.editing_label_STAR_.displayName = "editing-label*");

app.main.ui.workspace.tokens.sets.lists.checkbox_STAR_ = (function app$main$ui$workspace$tokens$sets$lists$checkbox_STAR_(props_56307){
var aria_label = (props_56307["aria-label"]);
var disabled = props_56307.disabled;
var on_click = props_56307.onClick;
var checked = props_56307.checked;
var all_QMARK_ = checked === true;
var mixed_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(checked,"mixed");
var checked_QMARK_ = ((all_QMARK_) || (mixed_QMARK_));
return rumext.v2.jsx("div",{'role':"checkbox",'aria-checked':""+(checked ?? ""),'disabled':disabled,'title':(cljs.core.truth_(disabled)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.no-permisions-set"):null),'tabIndex':(0),'onClick':(cljs.core.truth_(disabled)?null:on_click),'className':"main_ui_workspace_tokens_sets_lists__checkbox-style"+" "+((checked_QMARK_)?"main_ui_workspace_tokens_sets_lists__checkbox-checked-style":"")+" "+(cljs.core.truth_((function (){var and__5023__auto__ = checked_QMARK_;
if(and__5023__auto__){
return disabled;
} else {
return and__5023__auto__;
}
})())?"main_ui_workspace_tokens_sets_lists__checkbox-disabled-checked":"")+" "+(cljs.core.truth_(disabled)?"main_ui_workspace_tokens_sets_lists__checkbox-disabled":""),'children':((checked_QMARK_)?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'aria-label':aria_label,'className':"main_ui_workspace_tokens_sets_lists__check-icon",'size':"s",'iconId':((mixed_QMARK_)?app.main.ui.ds.foundations.assets.icon.remove:app.main.ui.ds.foundations.assets.icon.tick)}):null)});
});

(app.main.ui.workspace.tokens.sets.lists.checkbox_STAR_.displayName = "checkbox*");

app.main.ui.workspace.tokens.sets.lists.inline_add_button_STAR_ = (function app$main$ui$workspace$tokens$sets$lists$inline_add_button_STAR_(props_56308){
var can_edit_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.can_edit_QMARK_);
if(cljs.core.truth_(can_edit_QMARK_)){
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_sets_lists__empty-sets-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':"body-small",'className':"main_ui_workspace_tokens_sets_lists__empty-state-message",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.no-sets-yet")}),rumext.v2.jsx("button",{'onClick':app.main.ui.workspace.tokens.sets.lists.on_start_creation,'className':"main_ui_workspace_tokens_sets_lists__create-set-button",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.create-one")})]});
} else {
return rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_sets_lists__empty-sets-wrapper",'children':rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':"body-small",'className':"main_ui_workspace_tokens_sets_lists__empty-state-message",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.no-sets-yet")})});
}
});

(app.main.ui.workspace.tokens.sets.lists.inline_add_button_STAR_.displayName = "inline-add-button*");

app.main.ui.workspace.tokens.sets.lists.add_button_STAR_ = (function app$main$ui$workspace$tokens$sets$lists$add_button_STAR_(props_56309){
return rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'icon':app.main.ui.ds.foundations.assets.icon.add,'onClick':app.main.ui.workspace.tokens.sets.lists.on_start_creation,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.add set")});
});

(app.main.ui.workspace.tokens.sets.lists.add_button_STAR_.displayName = "add-button*");

app.main.ui.workspace.tokens.sets.lists.sets_tree_set_group_STAR_ = (function app$main$ui$workspace$tokens$sets$lists$sets_tree_set_group_STAR_(props_56311){
var path = props_56311.path;
var index = props_56311.index;
var on_edit_submit = props_56311.onEditSubmit;
var is_selected = props_56311.isSelected;
var on_toggle = props_56311.onToggle;
var is_collapsed = props_56311.isCollapsed;
var on_drop = props_56311.onDrop;
var is_draggable = props_56311.isDraggable;
var is_active = props_56311.isActive;
var on_toggle_collapse = props_56311.onToggleCollapse;
var on_start_edition = props_56311.onStartEdition;
var is_editing = props_56311.isEditing;
var label = props_56311.label;
var id = props_56311.id;
var on_reset_edition = props_56311.onResetEdition;
var depth = props_56311.depth;
var can_edit_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.can_edit_QMARK_);
var label_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-label"].join('');
var on_context_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_editing),rumext.v2.adapt(id),rumext.v2.adapt(path),rumext.v2.adapt(can_edit_QMARK_)],(function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

if(cljs.core.truth_((function (){var and__5023__auto__ = can_edit_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(is_editing);
} else {
return and__5023__auto__;
}
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.assign_token_set_context_menu(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),app.util.dom.get_client_position(event),new cljs.core.Keyword(null,"is-group","is-group",1574418960),true,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"path","path",-188191168),path], null)));
} else {
return null;
}
}));
var on_collapse_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

return (on_toggle_collapse.cljs$core$IFn$_invoke$arity$1 ? on_toggle_collapse.cljs$core$IFn$_invoke$arity$1(path) : on_toggle_collapse.call(null,path));
}));
var on_double_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id)],(function (){
return (on_start_edition.cljs$core$IFn$_invoke$arity$1 ? on_start_edition.cljs$core$IFn$_invoke$arity$1(id) : on_start_edition.call(null,id));
}));
var on_checkbox_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_toggle),rumext.v2.adapt(path),rumext.v2.adapt(can_edit_QMARK_)],(function (){
return (on_toggle.cljs$core$IFn$_invoke$arity$1 ? on_toggle.cljs$core$IFn$_invoke$arity$1(path) : on_toggle.call(null,path));
}));
var on_edit_submit_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(path),rumext.v2.adapt(on_edit_submit),rumext.v2.adapt(can_edit_QMARK_)],(function (p1__56310_SHARP_){
return (on_edit_submit.cljs$core$IFn$_invoke$arity$2 ? on_edit_submit.cljs$core$IFn$_invoke$arity$2(path,p1__56310_SHARP_) : on_edit_submit.call(null,path,p1__56310_SHARP_));
}));
var on_drop__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(on_drop)],(function (position,data){
return (on_drop.cljs$core$IFn$_invoke$arity$3 ? on_drop.cljs$core$IFn$_invoke$arity$3(index,position,data) : on_drop.call(null,index,position,data));
}));
var vec__56312 = app.main.ui.hooks.use_sortable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data-type","data-type",-326421468),"penpot/token-set",new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),on_drop__$1,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"is-group","is-group",1574418960),true], null),new cljs.core.Keyword(null,"detect-center?","detect-center?",1398000690),true,new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),(function (){var and__5023__auto__ = is_draggable;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(is_editing);
} else {
return and__5023__auto__;
}
})()], 0));
var dprops = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56312,(0),null);
var dref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56312,(1),null);
return rumext.v2.jsxs("div",{'ref':dref,'data-testid':"tokens-set-group-item",'style':{'--tree-depth':depth},'onContextMenu':on_context_menu,'className':"main_ui_workspace_tokens_sets_lists__set-item-container"+" "+"main_ui_workspace_tokens_sets_lists__set-item-group"+" "+(cljs.core.truth_(is_selected)?"main_ui_workspace_tokens_sets_lists__selected-set":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"center","center",-748944368)))?"main_ui_workspace_tokens_sets_lists__dnd-over":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"top","top",-1856271961)))?"main_ui_workspace_tokens_sets_lists__dnd-over-top":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"bot","bot",-950896508)))?"main_ui_workspace_tokens_sets_lists__dnd-over-bot":""),'children':[rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'className':"main_ui_workspace_tokens_sets_lists__set-item-group-collapse-button",'onClick':on_collapse_click,'data-testid':"tokens-set-group-collapse",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.collapse"),'icon':(cljs.core.truth_(is_collapsed)?"arrow-right":"arrow-down"),'variant':"action"}),(cljs.core.truth_(is_editing)?rumext.v2.jsx(app.main.ui.workspace.tokens.sets.lists.editing_label_STAR_,{'defaultValue':label,'onCancel':on_reset_edition,'onSubmit':on_edit_submit_SINGLEQUOTE_}):rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'role':"button",'title':label,'tabIndex':(0),'onDoubleClick':on_double_click,'id':label_id,'className':"main_ui_workspace_tokens_sets_lists__set-name",'children':label}),rumext.v2.jsx(app.main.ui.workspace.tokens.sets.lists.checkbox_STAR_,{'onClick':on_checkbox_click,'disabled':cljs.core.not(can_edit_QMARK_),'checked':(function (){var G__56315 = is_active;
var G__56315__$1 = (((G__56315 instanceof cljs.core.Keyword))?G__56315.fqn:null);
switch (G__56315__$1) {
case "all":
return true;

break;
case "partial":
return "mixed";

break;
case "none":
return false;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56315__$1)].join('')));

}
})(),'arialLabel':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.select-set")})]}))]});
});

(app.main.ui.workspace.tokens.sets.lists.sets_tree_set_group_STAR_.displayName = "sets-tree-set-group*");

app.main.ui.workspace.tokens.sets.lists.sets_tree_set_STAR_ = (function app$main$ui$workspace$tokens$sets$lists$sets_tree_set_STAR_(props_56317){
var set = props_56317.set;
var path = props_56317.path;
var is_new = props_56317.isNew;
var index = props_56317.index;
var on_edit_submit = props_56317.onEditSubmit;
var is_selected = props_56317.isSelected;
var on_toggle = props_56317.onToggle;
var on_drop = props_56317.onDrop;
var is_draggable = props_56317.isDraggable;
var is_active = props_56317.isActive;
var on_start_edition = props_56317.onStartEdition;
var on_select = props_56317.onSelect;
var is_editing = props_56317.isEditing;
var label = props_56317.label;
var id = props_56317.id;
var on_reset_edition = props_56317.onResetEdition;
var depth = props_56317.depth;
var can_edit_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.can_edit_QMARK_);
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_editing),rumext.v2.adapt(on_select),rumext.v2.adapt(id)],(function (event){
app.util.dom.stop_propagation(event);

if(cljs.core.truth_(is_editing)){
return null;
} else {
if(cljs.core.fn_QMARK_(on_select)){
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(id) : on_select.call(null,id));
} else {
return null;
}
}
}));
var on_context_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_editing),rumext.v2.adapt(id),rumext.v2.adapt(path),rumext.v2.adapt(can_edit_QMARK_)],(function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

if(cljs.core.truth_((function (){var and__5023__auto__ = can_edit_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(is_editing);
} else {
return and__5023__auto__;
}
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.assign_token_set_context_menu(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),app.util.dom.get_client_position(event),new cljs.core.Keyword(null,"is-group","is-group",1574418960),false,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"path","path",-188191168),path], null)));
} else {
return null;
}
}));
var on_double_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id),rumext.v2.adapt(is_new)],(function (){
if(cljs.core.truth_(is_new)){
return null;
} else {
return (on_start_edition.cljs$core$IFn$_invoke$arity$1 ? on_start_edition.cljs$core$IFn$_invoke$arity$1(id) : on_start_edition.call(null,id));
}
}));
var on_checkbox_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id),rumext.v2.adapt(on_toggle)],(function (event){
app.util.dom.stop_propagation(event);

if(cljs.core.fn_QMARK_(on_toggle)){
var G__56321 = app.common.types.tokens_lib.get_name(set);
return (on_toggle.cljs$core$IFn$_invoke$arity$1 ? on_toggle.cljs$core$IFn$_invoke$arity$1(G__56321) : on_toggle.call(null,G__56321));
} else {
return null;
}
}));
var on_edit_submit_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(set),rumext.v2.adapt(on_edit_submit)],(function (p1__56316_SHARP_){
return (on_edit_submit.cljs$core$IFn$_invoke$arity$2 ? on_edit_submit.cljs$core$IFn$_invoke$arity$2(set,p1__56316_SHARP_) : on_edit_submit.call(null,set,p1__56316_SHARP_));
}));
var on_drag = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(path)],(function (_){
if(cljs.core.truth_(is_selected)){
return null;
} else {
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(path) : on_select.call(null,path));
}
}));
var on_drop__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(on_drop)],(function (position,data){
return (on_drop.cljs$core$IFn$_invoke$arity$3 ? on_drop.cljs$core$IFn$_invoke$arity$3(index,position,data) : on_drop.call(null,index,position,data));
}));
var vec__56318 = app.main.ui.hooks.use_sortable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data-type","data-type",-326421468),"penpot/token-set",new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),on_drag,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),on_drop__$1,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"is-group","is-group",1574418960),false], null),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),(function (){var and__5023__auto__ = is_draggable;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(is_editing);
} else {
return and__5023__auto__;
}
})()], 0));
var dprops = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56318,(0),null);
var dref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56318,(1),null);
var drop_over = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dprops,new cljs.core.Keyword(null,"over","over",192553051));
return rumext.v2.jsxs("div",{'onDoubleClick':on_double_click,'role':"button",'className':"main_ui_workspace_tokens_sets_lists__set-item-container"+" "+(cljs.core.truth_(is_selected)?"main_ui_workspace_tokens_sets_lists__selected-set":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drop_over,new cljs.core.Keyword(null,"center","center",-748944368)))?"main_ui_workspace_tokens_sets_lists__dnd-over":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drop_over,new cljs.core.Keyword(null,"top","top",-1856271961)))?"main_ui_workspace_tokens_sets_lists__dnd-over-top":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drop_over,new cljs.core.Keyword(null,"bot","bot",-950896508)))?"main_ui_workspace_tokens_sets_lists__dnd-over-bot":""),'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.document,'className':"main_ui_workspace_tokens_sets_lists__icon"+" "+((cljs.core.not(depth))?"main_ui_workspace_tokens_sets_lists__root-icon":"")}),(cljs.core.truth_(is_editing)?rumext.v2.jsx(app.main.ui.workspace.tokens.sets.lists.editing_label_STAR_,{'defaultValue':label,'onCancel':on_reset_edition,'onSubmit':on_edit_submit_SINGLEQUOTE_}):rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_sets_lists__set-name",'children':label}),rumext.v2.jsx(app.main.ui.workspace.tokens.sets.lists.checkbox_STAR_,{'onClick':on_checkbox_click,'disabled':cljs.core.not(can_edit_QMARK_),'arialLabel':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.select-set"),'checked':is_active})]}))],'id':["token-set-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("/",path))].join(''),'data-testid':"tokens-set-item",'onContextMenu':on_context_menu,'style':{'--tree-depth':depth},'aria-checked':is_active,'onClick':on_click,'ref':dref});
});

(app.main.ui.workspace.tokens.sets.lists.sets_tree_set_STAR_.displayName = "sets-tree-set*");

app.main.ui.workspace.tokens.sets.lists.token_sets_tree_STAR_ = (function app$main$ui$workspace$tokens$sets$lists$token_sets_tree_STAR_(props_56323){
var on_toggle_set = props_56323.onToggleSet;
var is_token_set_active = props_56323.isTokenSetActive;
var on_edit_submit_group = props_56323.onEditSubmitGroup;
var new_path = props_56323.newPath;
var selected = props_56323.selected;
var edition_id = props_56323.editionId;
var token_sets = props_56323.tokenSets;
var is_draggable = props_56323.isDraggable;
var is_token_set_group_active = props_56323.isTokenSetGroupActive;
var on_edit_submit_set = props_56323.onEditSubmitSet;
var on_start_edition = props_56323.onStartEdition;
var on_select = props_56323.onSelect;
var on_toggle_set_group = props_56323.onToggleSetGroup;
var on_reset_edition = props_56323.onResetEdition;
var tokens_lib = props_56323.tokensLib;
var collapsed_paths_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var collapsed_paths = cljs.core.deref(collapsed_paths_STAR_);
var collapsed_QMARK_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(collapsed_paths)],cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,collapsed_paths));
var on_drop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(collapsed_paths)],(function (index,position,data){
var params = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from-index","from-index",242234713),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"to-index","to-index",2106835987),index,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"collapsed-paths","collapsed-paths",-841392049),collapsed_paths], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"is-group","is-group",1574418960).cljs$core$IFn$_invoke$arity$1(data))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.drop_token_set_group(params));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.drop_token_set(params));
}
}));
var on_toggle_collapse = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (path){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(collapsed_paths_STAR_,(function (p1__56322_SHARP_){
if(cljs.core.contains_QMARK_(p1__56322_SHARP_,path)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__56322_SHARP_,path);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__56322_SHARP_,path);
}
}));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var sub = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (paths_SINGLEQUOTE_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(collapsed_paths_STAR_,(function (paths){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,paths,paths_SINGLEQUOTE_);
}));
}),beicon.v2.core.map(new cljs.core.Keyword(null,"paths","paths",-1807389588),beicon.v2.core.map(cljs.core.deref,beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"expand-token-sets","expand-token-sets",1253386)),app.main.store.stream))));
return (function (){
return beicon.v2.core.dispose_BANG_(sub);
});
}));

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__56324){
var map__56325 = p__56324;
var map__56325__$1 = cljs.core.__destructure_map(map__56325);
var node = map__56325__$1;
var token_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56325__$1,new cljs.core.Keyword(null,"token-set","token-set",655734075));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56325__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56325__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var is_new = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56325__$1,new cljs.core.Keyword(null,"is-new","is-new",-1424373503));
var is_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56325__$1,new cljs.core.Keyword(null,"is-group","is-group",1574418960));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56325__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56325__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
out_arr__35152__auto__.push(((is_group)?rumext.v2.jsx(app.main.ui.workspace.tokens.sets.lists.sets_tree_set_group_STAR_,{'onResetEdition':on_reset_edition,'isCollapsed':(collapsed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? collapsed_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : collapsed_QMARK_.call(null,path)),'isActive':(is_token_set_group_active.cljs$core$IFn$_invoke$arity$1 ? is_token_set_group_active.cljs$core$IFn$_invoke$arity$1(path) : is_token_set_group_active.call(null,path)),'index':index,'onStartEdition':on_start_edition,'onToggle':on_toggle_set_group,'isDraggable':is_draggable,'label':cljs.core.peek(path),'path':path,'id':id,'onDrop':on_drop,'depth':depth,'isSelected':false,'onEditSubmit':on_edit_submit_group,'isEditing':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edition_id,id),'onToggleCollapse':on_toggle_collapse},index):((is_new)?rumext.v2.jsx(app.main.ui.workspace.tokens.sets.lists.sets_tree_set_STAR_,{'onResetEdition':on_reset_edition,'isActive':true,'index':index,'isDraggable':false,'label':"",'path':path,'id':id,'onDrop':on_drop,'isNew':true,'depth':depth,'isSelected':true,'onEditSubmit':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.tokens.sets.helpers.on_create_token_set,tokens_lib),'set':token_set,'isEditing':true},index):rumext.v2.jsx(app.main.ui.workspace.tokens.sets.lists.sets_tree_set_STAR_,{'onResetEdition':on_reset_edition,'isActive':(function (){var G__56326 = app.common.types.tokens_lib.get_name(token_set);
return (is_token_set_active.cljs$core$IFn$_invoke$arity$1 ? is_token_set_active.cljs$core$IFn$_invoke$arity$1(G__56326) : is_token_set_active.call(null,G__56326));
})(),'index':index,'onStartEdition':on_start_edition,'onToggle':on_toggle_set,'isDraggable':is_draggable,'label':cljs.core.peek(path),'path':path,'id':id,'onDrop':on_drop,'isNew':false,'depth':depth,'isSelected':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,id),'onEditSubmit':on_edit_submit_set,'set':token_set,'isEditing':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edition_id,id),'onSelect':on_select},index)
)));

return out_arr__35152__auto__;
}),[],app.common.types.tokens_lib.sets_tree_seq.cljs$core$IFn$_invoke$arity$variadic(token_sets,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"skip-children-pred","skip-children-pred",663146554),collapsed_QMARK_,new cljs.core.Keyword(null,"new-at-path","new-at-path",-777014351),new_path], null)], 0)));
});

(app.main.ui.workspace.tokens.sets.lists.token_sets_tree_STAR_.displayName = "token-sets-tree*");

app.main.ui.workspace.tokens.sets.lists.controlled_sets_list_STAR_ = (function app$main$ui$workspace$tokens$sets$lists$controlled_sets_list_STAR_(props_56327){
var on_toggle_token_set = props_56327.onToggleTokenSet;
var is_token_set_active = props_56327.isTokenSetActive;
var on_toggle_token_set_group = props_56327.onToggleTokenSetGroup;
var new_path = props_56327.newPath;
var selected = props_56327.selected;
var on_update_token_set_group = props_56327.onUpdateTokenSetGroup;
var edition_id = props_56327.editionId;
var token_sets = props_56327.tokenSets;
var on_update_token_set = props_56327.onUpdateTokenSet;
var is_token_set_group_active = props_56327.isTokenSetGroupActive;
var on_create_token_set = props_56327.onCreateTokenSet;
var on_start_edition = props_56327.onStartEdition;
var on_select = props_56327.onSelect;
var on_reset_edition = props_56327.onResetEdition;
var tokens_lib = props_56327.tokensLib;
var origin = props_56327.origin;
if(cljs.core.fn_QMARK_(is_token_set_group_active)){
} else {
throw (new Error(["Assert failed: ","expected a function for `is-token-set-group-active` prop","\n","(fn? is-token-set-group-active)"].join('')));
}

if(cljs.core.fn_QMARK_(is_token_set_active)){
} else {
throw (new Error(["Assert failed: ","expected a function for `is-token-set-active` prop","\n","(fn? is-token-set-active)"].join('')));
}

var theme_modal_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(origin,"theme-modal");
var can_edit_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.can_edit_QMARK_);
var draggable_QMARK_ = (function (){var and__5023__auto__ = (!(theme_modal_QMARK_));
if(and__5023__auto__){
return can_edit_QMARK_;
} else {
return and__5023__auto__;
}
})();
var empty_state_QMARK_ = ((theme_modal_QMARK_) && (((cljs.core.empty_QMARK_(token_sets)) && (cljs.core.not(new_path)))));
var on_reset_edition__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_reset_edition)],(function (v){
if(cljs.core.fn_QMARK_(on_reset_edition)){
return (on_reset_edition.cljs$core$IFn$_invoke$arity$1 ? on_reset_edition.cljs$core$IFn$_invoke$arity$1(v) : on_reset_edition.call(null,v));
} else {
return null;
}
}));
var on_start_edition__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_start_edition)],(function (v){
if(cljs.core.fn_QMARK_(on_start_edition)){
return (on_start_edition.cljs$core$IFn$_invoke$arity$1 ? on_start_edition.cljs$core$IFn$_invoke$arity$1(v) : on_start_edition.call(null,v));
} else {
return null;
}
}));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_sets_lists__sets-list",'children':((empty_state_QMARK_)?rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':"body-small",'className':"main_ui_workspace_tokens_sets_lists__empty-state-message-sets",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.no-sets-create")}):rumext.v2.jsx(app.main.ui.workspace.tokens.sets.lists.token_sets_tree_STAR_,{'onResetEdition':on_reset_edition__$1,'tokenSets':token_sets,'onCreateTokenSet':on_create_token_set,'selected':selected,'onToggleSetGroup':on_toggle_token_set_group,'tokensLib':tokens_lib,'onStartEdition':on_start_edition__$1,'newPath':new_path,'isDraggable':draggable_QMARK_,'onEditSubmitSet':on_update_token_set,'isTokenSetActive':is_token_set_active,'onToggleSet':on_toggle_token_set,'editionId':edition_id,'onSelect':on_select,'isTokenSetGroupActive':is_token_set_group_active,'onEditSubmitGroup':on_update_token_set_group}))});
});

(app.main.ui.workspace.tokens.sets.lists.controlled_sets_list_STAR_.displayName = "controlled-sets-list*");


//# sourceMappingURL=app.main.ui.workspace.tokens.sets.lists.js.map
