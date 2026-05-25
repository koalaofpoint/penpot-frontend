import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.types.component.js";
import "./app.common.types.components_list.js";
import "./app.common.types.container.js";
import "./app.common.types.shape.layout.js";
import "./app.common.uuid.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.collapse.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.workspace.sidebar.layer_name.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./app.util.shape_icon.js";
import "./app.util.timers.js";
import "./beicon.v2.core.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.layer_item');
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.ui !== 'undefined') && (typeof app.main.ui.workspace !== 'undefined') && (typeof app.main.ui.workspace.sidebar !== 'undefined') && (typeof app.main.ui.workspace.sidebar.layer_item !== 'undefined') && (typeof app.main.ui.workspace.sidebar.layer_item.sidebar_hover_queue !== 'undefined')){
} else {
app.main.ui.workspace.sidebar.layer_item.sidebar_hover_queue = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enter","enter",1792452624),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"leave","leave",1022579443),cljs.core.PersistentHashSet.EMPTY], null));
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.ui !== 'undefined') && (typeof app.main.ui.workspace !== 'undefined') && (typeof app.main.ui.workspace.sidebar !== 'undefined') && (typeof app.main.ui.workspace.sidebar.layer_item !== 'undefined') && (typeof app.main.ui.workspace.sidebar.layer_item.sidebar_hover_pending_QMARK_ !== 'undefined')){
} else {
app.main.ui.workspace.sidebar.layer_item.sidebar_hover_pending_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
app.main.ui.workspace.sidebar.layer_item.schedule_sidebar_hover_flush = (function app$main$ui$workspace$sidebar$layer_item$schedule_sidebar_hover_flush(){
if(cljs.core.compare_and_set_BANG_(app.main.ui.workspace.sidebar.layer_item.sidebar_hover_pending_QMARK_,false,true)){
return app.util.timers.raf((function (){
var map__52994 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.sidebar.layer_item.sidebar_hover_queue,cljs.core.constantly(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enter","enter",1792452624),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"leave","leave",1022579443),cljs.core.PersistentHashSet.EMPTY], null)));
var map__52994__$1 = cljs.core.__destructure_map(map__52994);
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52994__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var leave = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52994__$1,new cljs.core.Keyword(null,"leave","leave",1022579443));
cljs.core.reset_BANG_(app.main.ui.workspace.sidebar.layer_item.sidebar_hover_pending_QMARK_,false);

if(cljs.core.seq(leave)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.main.store.emit_BANG_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.dehighlight_shape,leave));
} else {
}

if(cljs.core.seq(enter)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.main.store.emit_BANG_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.highlight_shape,enter));
} else {
return null;
}
}));
} else {
return null;
}
});
app.main.ui.workspace.sidebar.layer_item.layer_item_inner = (function app$main$ui$workspace$sidebar$layer_item$layer_item_inner(props_52995){
var dnd_over_bot_QMARK_ = (props_52995["dnd-over-bot?"]);
var dnd_over_top_QMARK_ = (props_52995["dnd-over-top?"]);
var on_zoom_to_selected = (props_52995["on-zoom-to-selected"]);
var hide_toggle_QMARK_ = (props_52995["hide-toggle?"]);
var selected_QMARK_ = (props_52995["selected?"]);
var component_tree_QMARK_ = (props_52995["component-tree?"]);
var name_ref = (props_52995["name-ref"]);
var children = props_52995.children;
var on_disable_drag = (props_52995["on-disable-drag"]);
var on_select_shape = (props_52995["on-select-shape"]);
var dnd_over_QMARK_ = (props_52995["dnd-over?"]);
var on_pointer_leave = (props_52995["on-pointer-leave"]);
var ref = props_52995.ref;
var expanded_QMARK_ = (props_52995["expanded?"]);
var on_pointer_enter = (props_52995["on-pointer-enter"]);
var on_enable_drag = (props_52995["on-enable-drag"]);
var item = props_52995.item;
var on_context_menu = (props_52995["on-context-menu"]);
var highlighted_QMARK_ = (props_52995["highlighted?"]);
var on_toggle_collapse = (props_52995["on-toggle-collapse"]);
var style = props_52995.style;
var on_toggle_visibility = (props_52995["on-toggle-visibility"]);
var read_only_QMARK_ = (props_52995["read-only?"]);
var parent_size = (props_52995["parent-size"]);
var on_toggle_blocking = (props_52995["on-toggle-blocking"]);
var depth = props_52995.depth;
var filtered_QMARK_ = (props_52995["filtered?"]);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item);
var blocked_QMARK_ = new cljs.core.Keyword(null,"blocked","blocked",181326681).cljs$core$IFn$_invoke$arity$1(item);
var hidden_QMARK_ = new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(item);
var has_shapes_QMARK_ = cljs.core.boolean$(cljs.core.seq(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(item)));
var touched_QMARK_ = cljs.core.boolean$(cljs.core.seq(new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(item)));
var parent_board_QMARK_ = ((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(item)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.common.uuid.zero,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(item))));
var absolute_QMARK_ = app.common.types.shape.layout.item_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1(item);
var is_variant_QMARK_ = app.common.types.component.is_variant_QMARK_(item);
var is_variant_container_QMARK_ = app.common.types.component.is_variant_container_QMARK_(item);
var variant_id = ((is_variant_QMARK_)?new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(item):null);
var variant_name = ((is_variant_QMARK_)?new cljs.core.Keyword(null,"variant-name","variant-name",-1785573622).cljs$core$IFn$_invoke$arity$1(item):null);
var variant_error = ((is_variant_QMARK_)?new cljs.core.Keyword(null,"variant-error","variant-error",-42521934).cljs$core$IFn$_invoke$arity$1(item):null);
var data = cljs.core.deref(app.main.refs.workspace_data);
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(item));
var variant_properties = new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(component);
var icon_shape = app.util.shape_icon.get_shape_icon(item);
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'id':id,'ref':ref,'onClick':on_select_shape,'onContextMenu':on_context_menu,'data-testid':"layer-row",'style':style,'className':"main_ui_workspace_sidebar_layer_item__layer-row"+" "+(cljs.core.truth_(highlighted_QMARK_)?"main_ui_workspace_sidebar_layer_item__highlight":"")+" "+((app.common.types.component.instance_head_QMARK_(item))?"main_ui_workspace_sidebar_layer_item__component":"")+" "+(cljs.core.truth_(new cljs.core.Keyword(null,"masked-group","masked-group",1899947873).cljs$core$IFn$_invoke$arity$1(item))?"main_ui_workspace_sidebar_layer_item__masked":"")+" "+(cljs.core.truth_(selected_QMARK_)?"main_ui_workspace_sidebar_layer_item__selected":"")+" "+((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(item))?"main_ui_workspace_sidebar_layer_item__type-frame":"")+" "+((app.common.files.helpers.bool_shape_QMARK_(item))?"main_ui_workspace_sidebar_layer_item__type-bool":"")+" "+(cljs.core.truth_((function (){var or__5025__auto__ = component_tree_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return is_variant_container_QMARK_;
}
})())?"main_ui_workspace_sidebar_layer_item__type-comp":"")+" "+(cljs.core.truth_(hidden_QMARK_)?"main_ui_workspace_sidebar_layer_item__hidden":"")+" "+(cljs.core.truth_(dnd_over_QMARK_)?"main_ui_workspace_sidebar_layer_item__dnd-over":"")+" "+(cljs.core.truth_(dnd_over_top_QMARK_)?"main_ui_workspace_sidebar_layer_item__dnd-over-top":"")+" "+(cljs.core.truth_(dnd_over_bot_QMARK_)?"main_ui_workspace_sidebar_layer_item__dnd-over-bot":"")+" "+((parent_board_QMARK_)?"main_ui_workspace_sidebar_layer_item__root-board":""),'children':[rumext.v2.jsx("span",{'style':{'--depth':depth},'className':"main_ui_workspace_sidebar_layer_item__tab-indentation"+" "+(cljs.core.truth_(filtered_QMARK_)?"main_ui_workspace_sidebar_layer_item__filtered":"")}),rumext.v2.jsxs("div",{'style':{'--depth':depth},'onPointerEnter':on_pointer_enter,'onPointerLeave':on_pointer_leave,'onDoubleClick':app.util.dom.stop_propagation,'className':"main_ui_workspace_sidebar_layer_item__element-list-body"+" "+(cljs.core.truth_(filtered_QMARK_)?"main_ui_workspace_sidebar_layer_item__filtered":"")+" "+(cljs.core.truth_(selected_QMARK_)?"main_ui_workspace_sidebar_layer_item__selected":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"icon","icon",1679606541)))?"main_ui_workspace_sidebar_layer_item__icon-layer":""),'children':[((((0) < cljs.core.count(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(item))))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_layer_item__button-content",'children':[((((cljs.core.not(hide_toggle_QMARK_)) && (cljs.core.not(filtered_QMARK_))))?rumext.v2.jsx("button",{'data-testid':"toggle-content",'aria-expanded':expanded_QMARK_,'onClick':on_toggle_collapse,'className':"main_ui_workspace_sidebar_layer_item__toggle-content"+" "+(cljs.core.truth_(expanded_QMARK_)?"main_ui_workspace_sidebar_layer_item__inverse":""),'children':app.main.ui.icons.arrow}):null),rumext.v2.jsxs("div",{'onDoubleClick':on_zoom_to_selected,'className':"main_ui_workspace_sidebar_layer_item__icon-shape",'children':[((absolute_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_layer_item__absolute"}):null),rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':icon_shape,'size':"s",'data-testid':["icon-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon_shape)].join('')})]})]}):rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_layer_item__button-content",'children':[(((!(filtered_QMARK_)))?rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_layer_item__toggle-content"}):null),rumext.v2.jsxs("div",{'onDoubleClick':on_zoom_to_selected,'className':"main_ui_workspace_sidebar_layer_item__icon-shape",'children':[((absolute_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_layer_item__absolute"}):null),rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':icon_shape,'size':"s",'data-testid':["icon-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon_shape)].join('')})]})]})),rumext.v2.jsx(app.main.ui.workspace.sidebar.layer_name.layer_name_STAR_,{'typeComp':(function (){var or__5025__auto__ = component_tree_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return is_variant_container_QMARK_;
}
})(),'variantName':variant_name,'onStopEdit':on_enable_drag,'variantError':variant_error,'shapeId':id,'disabledDoubleClick':read_only_QMARK_,'componentId':new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component),'parentSize':parent_size,'typeFrame':app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(item),'isBlocked':blocked_QMARK_,'isShapeTouched':touched_QMARK_,'isHidden':hidden_QMARK_,'ref':name_ref,'depth':depth,'isSelected':selected_QMARK_,'shapeName':name,'onStartEdit':on_disable_drag,'variantId':variant_id,'variantProperties':variant_properties})]}),((cljs.core.not(read_only_QMARK_))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_layer_item__element-actions"+" "+((has_shapes_QMARK_)?"main_ui_workspace_sidebar_layer_item__is-parent":"")+" "+(cljs.core.truth_(hidden_QMARK_)?"main_ui_workspace_sidebar_layer_item__selected":"")+" "+(cljs.core.truth_(blocked_QMARK_)?"main_ui_workspace_sidebar_layer_item__selected":""),'children':[rumext.v2.jsx("button",{'title':(cljs.core.truth_(hidden_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.show"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.hide")),'onClick':on_toggle_visibility,'className':"main_ui_workspace_sidebar_layer_item__toggle-element"+" "+(cljs.core.truth_(hidden_QMARK_)?"main_ui_workspace_sidebar_layer_item__selected":""),'children':((hidden_QMARK_)?app.main.ui.icons.hide:app.main.ui.icons.shown)}),rumext.v2.jsx("button",{'title':(cljs.core.truth_(new cljs.core.Keyword(null,"blocked","blocked",181326681).cljs$core$IFn$_invoke$arity$1(item))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.unlock"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.lock")),'onClick':on_toggle_blocking,'className':"main_ui_workspace_sidebar_layer_item__block-element"+" "+(cljs.core.truth_(blocked_QMARK_)?"main_ui_workspace_sidebar_layer_item__selected":""),'children':((blocked_QMARK_)?app.main.ui.icons.lock:app.main.ui.icons.unlock)})]}):null)]}),children]});
});

(app.main.ui.workspace.sidebar.layer_item.layer_item_inner.displayName = "layer-item-inner");

app.main.ui.workspace.sidebar.layer_item.layer_item = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$sidebar$layer_item$layer_item(props_52998){
var component_child_QMARK_ = (props_52998["component-child?"]);
var render_children_QMARK_ = (props_52998["render-children?"]) ?? true;
var selected = props_52998.selected;
var index = props_52998.index;
var objects = props_52998.objects;
var item = props_52998.item;
var highlighted = props_52998.highlighted;
var style = props_52998.style;
var sortable_QMARK_ = (props_52998["sortable?"]);
var parent_size = (props_52998["parent-size"]);
var depth = props_52998.depth;
var filtered_QMARK_ = (props_52998["filtered?"]);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
var blocked_QMARK_ = new cljs.core.Keyword(null,"blocked","blocked",181326681).cljs$core$IFn$_invoke$arity$1(item);
var hidden_QMARK_ = new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(item);
var drag_disabled_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var drag_disabled_QMARK_ = cljs.core.deref(drag_disabled_STAR_);
var scroll_to_middle_QMARK_ = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(true);
var expanded_iref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id)],(function (){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.in$(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),id], null)),app.main.refs.workspace_local);
}));
var expanded_QMARK_ = rumext.v2.deref(expanded_iref);
var selected_QMARK_ = cljs.core.contains_QMARK_(selected,id);
var highlighted_QMARK_ = cljs.core.contains_QMARK_(highlighted,id);
var container_QMARK_ = ((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(item)) || (app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(item)));
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
var parent_board_QMARK_ = ((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(item)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.common.uuid.zero,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(item))));
var toggle_collapse = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(expanded_QMARK_)],(function (event){
app.util.dom.stop_propagation(event);

if(cljs.core.truth_((function (){var and__5023__auto__ = expanded_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return app.util.keyboard.shift_QMARK_(event);
} else {
return and__5023__auto__;
}
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.collapse.collapse_all());
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.collapse.toggle_collapse(id));
}
}));
var toggle_blocking = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id),rumext.v2.adapt(blocked_QMARK_)],(function (event){
app.util.dom.stop_propagation(event);

if(cljs.core.truth_(blocked_QMARK_)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_shape_flags(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blocked","blocked",181326681),false], null)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.update_shape_flags(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blocked","blocked",181326681),true], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.deselect_shape(id)], 0));
}
}));
var toggle_visibility = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(hidden_QMARK_)],(function (event){
app.util.dom.stop_propagation(event);

if(cljs.core.truth_(hidden_QMARK_)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_shape_flags(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),false], null)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_shape_flags(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),true], null)));
}
}));
var select_shape = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id),rumext.v2.adapt(filtered_QMARK_),rumext.v2.adapt(objects)],(function (event){
app.util.dom.prevent_default(event);

cljs.core.reset_BANG_(scroll_to_middle_QMARK_,false);

if(app.util.keyboard.shift_QMARK_(event)){
if(cljs.core.truth_(filtered_QMARK_)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shift_select_shapes.cljs$core$IFn$_invoke$arity$2(id,objects));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shift_select_shapes.cljs$core$IFn$_invoke$arity$1(id));
}
} else {
if(app.util.keyboard.mod_QMARK_(event)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.select_shape.cljs$core$IFn$_invoke$arity$2(id,true));
} else {
if((cljs.core.count(selected) > (1))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.select_shape.cljs$core$IFn$_invoke$arity$1(id));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.select_shape.cljs$core$IFn$_invoke$arity$1(id));

}
}
}
}));
var on_pointer_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id)],(function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.sidebar.layer_item.sidebar_hover_queue,(function (p__53006){
var map__53007 = p__53006;
var map__53007__$1 = cljs.core.__destructure_map(map__53007);
var q = map__53007__$1;
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53007__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var leave = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53007__$1,new cljs.core.Keyword(null,"leave","leave",1022579443));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(q,new cljs.core.Keyword(null,"enter","enter",1792452624),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(enter,id)),new cljs.core.Keyword(null,"leave","leave",1022579443),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(leave,id));
}));

return app.main.ui.workspace.sidebar.layer_item.schedule_sidebar_hover_flush();
}));
var on_pointer_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id)],(function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.sidebar.layer_item.sidebar_hover_queue,(function (p__53010){
var map__53011 = p__53010;
var map__53011__$1 = cljs.core.__destructure_map(map__53011);
var q = map__53011__$1;
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53011__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var leave = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53011__$1,new cljs.core.Keyword(null,"leave","leave",1022579443));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(q,new cljs.core.Keyword(null,"enter","enter",1792452624),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(enter,id)),new cljs.core.Keyword(null,"leave","leave",1022579443),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(leave,id));
}));

return app.main.ui.workspace.sidebar.layer_item.schedule_sidebar_hover_flush();
}));
var on_context_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(item),rumext.v2.adapt(read_only_QMARK_)],(function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

if(cljs.core.truth_(read_only_QMARK_)){
return null;
} else {
var pos = app.util.dom.get_client_position(event);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.show_shape_context_menu(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),pos,new cljs.core.Keyword(null,"shape","shape",1190694006),item], null)));
}
}));
var on_drag = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id),rumext.v2.adapt(selected)],(function (p__53012){
var map__53013 = p__53012;
var map__53013__$1 = cljs.core.__destructure_map(map__53013);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53013__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if((!(cljs.core.contains_QMARK_(selected,id__$1)))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.select_shape.cljs$core$IFn$_invoke$arity$1(id__$1));
} else {
return null;
}
}));
var on_drop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id),rumext.v2.adapt(objects),rumext.v2.adapt(expanded_QMARK_),rumext.v2.adapt(selected)],(function (side,_data){
var single_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected),(1));
var same_QMARK_ = ((single_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(selected),id)));
if(same_QMARK_){
return null;
} else {
var files = cljs.core.deref(app.main.refs.files);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
var parent_id = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(side,new cljs.core.Keyword(null,"center","center",-748944368)))?id:(cljs.core.truth_((function (){var and__5023__auto__ = expanded_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(side,new cljs.core.Keyword(null,"bot","bot",-950896508))) && (app.common.data.not_empty_QMARK_(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape))));
} else {
return and__5023__auto__;
}
})())?id:app.common.files.helpers.get_parent_id(objects,id)
));
var vec__53014 = app.common.types.container.find_valid_parent_and_frame_ids.cljs$core$IFn$_invoke$arity$5(parent_id,objects,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52997_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__52997_SHARP_);
}),selected),false,files);
var parent_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53014,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53014,(1),null);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id__$1);
var current_index = app.common.data.index_of(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent),id);
var to_index = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(side,new cljs.core.Keyword(null,"center","center",-748944368)))?(0):(cljs.core.truth_((function (){var and__5023__auto__ = expanded_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(side,new cljs.core.Keyword(null,"bot","bot",-950896508))) && (app.common.data.not_empty_QMARK_(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape))));
} else {
return and__5023__auto__;
}
})())?cljs.core.count(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent)):(((current_index < (0)))?null:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(side,new cljs.core.Keyword(null,"top","top",-1856271961)))?(current_index + (1)):current_index
))));
if((!((to_index == null)))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.relocate_selected_shapes(parent_id__$1,to_index));
} else {
return null;
}
}
}));
var on_hold = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id),rumext.v2.adapt(expanded_QMARK_)],(function (){
if(cljs.core.truth_(expanded_QMARK_)){
return null;
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.collapse.toggle_collapse(id));
}
}));
var zoom_to_selected = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

app.util.dom.prevent_default(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.zoom_to_selected_shape);
}));
var vec__53001 = app.main.ui.hooks.use_sortable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data-type","data-type",-326421468),"penpot/layer",new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),on_drop,new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),on_drag,new cljs.core.Keyword(null,"on-hold","on-hold",-295274098),on_hold,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),drag_disabled_QMARK_,new cljs.core.Keyword(null,"detect-center?","detect-center?",1398000690),container_QMARK_,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),(function (){var and__5023__auto__ = sortable_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.not(read_only_QMARK_)) && (cljs.core.not(app.common.types.container.has_any_copy_parent_QMARK_(objects,item))));
} else {
return and__5023__auto__;
}
})()], 0));
var dprops = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53001,(0),null);
var dref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53001,(1),null);
var ref = rumext.v2.use_ref();
var depth__$1 = (depth + (1));
var component_tree_QMARK_ = (function (){var or__5025__auto__ = component_child_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((app.common.types.component.instance_root_QMARK_(item)) || (app.common.types.component.instance_head_QMARK_(item)));
}
})();
var enable_drag = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(drag_disabled_STAR_,false);
}));
var disable_drag = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(drag_disabled_STAR_,true);
}));
var children_count_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((0));
var children_count = cljs.core.deref(children_count_STAR_);
var lazy_ref = rumext.v2.use_ref(null);
var observer_var = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(null);
var chunk_size = (50);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_QMARK_),rumext.v2.adapt(selected)],(function (){
var single_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected),(1));
var node = rumext.v2.ref_val(ref);
var scroll_node = app.util.dom.get_parent_with_data(node,"scroll-container");
var parent_node = app.util.dom.get_parent_at(node,(2));
var first_child_node = app.util.dom.get_first_child(parent_node);
var subid = (cljs.core.truth_((function (){var and__5023__auto__ = single_QMARK_;
if(and__5023__auto__){
var and__5023__auto____$1 = selected_QMARK_;
if(and__5023__auto____$1){
return cljs.core.deref(scroll_to_middle_QMARK_);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((100),(function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = node;
if(cljs.core.truth_(and__5023__auto__)){
return scroll_node;
} else {
return and__5023__auto__;
}
})())){
var scroll_distance_ratio = app.util.dom.get_scroll_distance_ratio(node,scroll_node);
var scroll_behavior = (((scroll_distance_ratio > (1)))?"instant":"smooth");
app.util.dom.scroll_into_view_if_needed_BANG_.cljs$core$IFn$_invoke$arity$2(first_child_node,({"block": "center", "behavior": scroll_behavior, "inline": "start"}));

return cljs.core.reset_BANG_(scroll_to_middle_QMARK_,true);
} else {
return null;
}
})):null);
return (function (){
if((!((subid == null)))){
return beicon.v2.core.dispose_BANG_(subid);
} else {
return null;
}
});
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(expanded_QMARK_),rumext.v2.adapt(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(item)),rumext.v2.adapt(selected)],(function (){
var shapes_vec = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(item);
var total = cljs.core.count(shapes_vec);
if(cljs.core.truth_(expanded_QMARK_)){
var selected_child_render_idx = (((((total > chunk_size)) && (cljs.core.seq(selected))))?(function (){var shapes_reversed = cljs.core.vec(cljs.core.reverse(shapes_vec));
return cljs.core.some((function (sel_id){
var idx = shapes_reversed.indexOf(sel_id);
if((idx >= (0))){
return idx;
} else {
return null;
}
}),selected);
})():null);
var min_count = (cljs.core.truth_(selected_child_render_idx)?(selected_child_render_idx + chunk_size):chunk_size);
var current = cljs.core.deref(children_count_STAR_);
var new_count = (function (){var x__5113__auto__ = total;
var y__5114__auto__ = (function (){var x__5110__auto__ = (function (){var x__5110__auto__ = current;
var y__5111__auto__ = chunk_size;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y__5111__auto__ = min_count;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return cljs.core.reset_BANG_(children_count_STAR_,new_count);
} else {
return cljs.core.reset_BANG_(children_count_STAR_,(0));
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(children_count),rumext.v2.adapt(expanded_QMARK_),rumext.v2.adapt(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(item))],(function (){
var total = cljs.core.count(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(item));
var node = rumext.v2.ref_val(ref);
var scroll_node = app.util.dom.get_parent_with_data(node,"scroll-container");
var lazy_node = rumext.v2.ref_val(lazy_ref);
var temp__5825__auto___53032 = cljs.core.deref(observer_var);
if(cljs.core.truth_(temp__5825__auto___53032)){
var obs_53033 = temp__5825__auto___53032;
obs_53033.disconnect();

cljs.core.reset_BANG_(observer_var,null);
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = expanded_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = (children_count < total);
if(and__5023__auto____$1){
var and__5023__auto____$2 = scroll_node;
if(cljs.core.truth_(and__5023__auto____$2)){
return lazy_node;
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
var cb = (function (entries){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.seq(entries);
if(and__5023__auto__){
return cljs.core.first(entries).isIntersecting;
} else {
return and__5023__auto__;
}
})())){
var current = cljs.core.deref(children_count_STAR_);
var next_count = (function (){var x__5113__auto__ = total;
var y__5114__auto__ = (current + chunk_size);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return cljs.core.reset_BANG_(children_count_STAR_,next_count);
} else {
return null;
}
});
var observer = (new IntersectionObserver(cb,({"root": scroll_node})));
observer.observe(lazy_node);

return cljs.core.reset_BANG_(observer_var,observer);
} else {
return null;
}
}));

return rumext.v2.jsx(app.main.ui.workspace.sidebar.layer_item.layer_item_inner,{'name-ref':ref,'on-disable-drag':disable_drag,'children':(cljs.core.truth_((function (){var and__5023__auto__ = render_children_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(and__5023__auto____$1)){
return expanded_QMARK_;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsxs("div",{'data-testid':""+"children-"+(id ?? ""),'className':"main_ui_workspace_sidebar_layer_item__element-children"+" "+((selected_QMARK_)?"main_ui_workspace_sidebar_layer_item__parent-selected":"")+" "+((parent_board_QMARK_)?"main_ui_workspace_sidebar_layer_item__sticky-children":""),'children':[(function (){var all_children = cljs.core.reverse(app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(item)));
var visible = cljs.core.take.cljs$core$IFn$_invoke$arity$2(children_count,all_children);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__53017){
var vec__53018 = p__53017;
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53018,(0),null);
var id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53018,(1),null);
out_arr__35152__auto__.push((function (){var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var item__$1 = temp__5825__auto__;
return rumext.v2.jsx(app$main$ui$workspace$sidebar$layer_item$layer_item,{'selected':selected,'index':index__$1,'objects':objects,'item':item__$1,'highlighted':highlighted,'sortable?':sortable_QMARK_,'parent-size':parent_size,'depth':depth__$1,'component-child?':component_tree_QMARK_},""+(id__$1 ?? ""));
} else {
return null;
}
})());

return out_arr__35152__auto__;
}),[],visible);
})(),(((children_count < cljs.core.count(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(item))))?rumext.v2.jsx("div",{'ref':lazy_ref,'className':"main_ui_workspace_sidebar_layer_item__lazy-load-sentinel"}):null)]}):null),'on-select-shape':select_shape,'dnd-over?':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"center","center",-748944368)),'on-pointer-leave':on_pointer_leave,'ref':dref,'expanded?':expanded_QMARK_,'on-enable-drag':enable_drag,'on-pointer-enter':on_pointer_enter,'item':item,'on-context-menu':on_context_menu,'highlighted?':highlighted_QMARK_,'on-toggle-collapse':toggle_collapse,'style':style,'on-toggle-visibility':toggle_visibility,'read-only?':read_only_QMARK_,'parent-size':parent_size,'on-toggle-blocking':toggle_blocking,'depth':depth__$1,'filtered?':filtered_QMARK_,'dnd-over-bot?':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"bot","bot",-950896508)),'dnd-over-top?':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"top","top",-1856271961)),'on-zoom-to-selected':zoom_to_selected,'selected?':selected_QMARK_,'component-tree?':component_tree_QMARK_});
}));

(app.main.ui.workspace.sidebar.layer_item.layer_item.displayName = "layer-item");


//# sourceMappingURL=app.main.ui.workspace.sidebar.layer_item.js.map
