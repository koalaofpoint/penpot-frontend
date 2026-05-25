import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.transit.js";
import "./app.common.types.component.js";
import "./app.common.types.container.js";
import "./app.common.types.page.js";
import "./app.common.types.shape.layout.js";
import "./app.config.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.data.shortcuts.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.interactions.js";
import "./app.main.data.workspace.libraries.js";
import "./app.main.data.workspace.selection.js";
import "./app.main.data.workspace.shape_layout.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.shortcuts.js";
import "./app.main.data.workspace.variants.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.workspace.sidebar.assets.common.js";
import "./app.util.clipboard.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.shape_icon.js";
import "./app.util.timers.js";
import "./beicon.v2.core.js";
import "./okulary.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.context_menu');
app.main.ui.workspace.context_menu.menu_ref = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),app.main.refs.workspace_local);
app.main.ui.workspace.context_menu.prevent_default = (function app$main$ui$workspace$context_menu$prevent_default(event){
app.util.dom.prevent_default(event);

return app.util.dom.stop_propagation(event);
});
app.main.ui.workspace.context_menu.menu_entry_STAR_ = (function app$main$ui$workspace$context_menu$menu_entry_STAR_(props_54889){
var children = props_54889.children;
var on_pointer_leave = props_54889.onPointerLeave;
var disabled = props_54889.disabled;
var is_selected = props_54889.isSelected;
var on_pointer_enter = props_54889.onPointerEnter;
var value = props_54889.value;
var icon = props_54889.icon;
var title = props_54889.title;
var shortcut = props_54889.shortcut;
var on_click = props_54889.onClick;
var on_unmount = props_54889.onUnmount;
var submenu_ref = rumext.v2.use_ref(null);
var hovering_QMARK_ = rumext.v2.use_ref(false);
var on_click_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_click)],(function (event){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.hide_context_menu);

if(cljs.core.truth_(on_click)){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));
} else {
return null;
}
}));
var on_pointer_enter__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
rumext.v2.set_ref_val_BANG_(hovering_QMARK_,true);

var submenu_node_55037 = rumext.v2.ref_val(submenu_ref);
if((!((submenu_node_55037 == null)))){
app.util.dom.set_css_property_BANG_(submenu_node_55037,"display","block");
} else {
}

if(cljs.core.truth_(on_pointer_enter)){
return (on_pointer_enter.cljs$core$IFn$_invoke$arity$0 ? on_pointer_enter.cljs$core$IFn$_invoke$arity$0() : on_pointer_enter.call(null));
} else {
return null;
}
}));
var on_pointer_leave__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
rumext.v2.set_ref_val_BANG_(hovering_QMARK_,false);

var submenu_node_55038 = rumext.v2.ref_val(submenu_ref);
if((!((submenu_node_55038 == null)))){
app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((200),(function (){
if(cljs.core.truth_(rumext.v2.ref_val(hovering_QMARK_))){
return null;
} else {
return app.util.dom.set_css_property_BANG_(submenu_node_55038,"display","none");
}
}));
} else {
}

if(cljs.core.truth_(on_pointer_leave)){
return (on_pointer_leave.cljs$core$IFn$_invoke$arity$0 ? on_pointer_leave.cljs$core$IFn$_invoke$arity$0() : on_pointer_leave.call(null));
} else {
return null;
}
}));
var set_dom_node = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (dom){
var submenu_node = rumext.v2.ref_val(submenu_ref);
if((((!((dom == null)))) && ((!((submenu_node == null)))))){
return app.util.dom.set_css_property_BANG_(submenu_node,"top",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom.offsetTop),"px"].join(''));
} else {
return null;
}
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_unmount)],cljs.core.constantly(on_unmount));

if(cljs.core.truth_(icon)){
return rumext.v2.jsxs("li",{'disabled':disabled,'data-value':value,'ref':set_dom_node,'onClick':on_click_SINGLEQUOTE_,'onPointerEnter':on_pointer_enter__$1,'onPointerLeave':on_pointer_leave__$1,'className':"main_ui_workspace_context_menu__icon-menu-item",'children':[rumext.v2.jsxs("span",{'className':"main_ui_workspace_context_menu__icon-wrapper",'children':[(cljs.core.truth_(is_selected)?rumext.v2.jsx("span",{'className':"main_ui_workspace_context_menu__selected-icon",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.tick,'size':"s"})}):rumext.v2.jsx("span",{'className':"main_ui_workspace_context_menu__selected-icon"})),rumext.v2.jsx("span",{'className':"main_ui_workspace_context_menu__shape-icon",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':icon,'size':"s"})})]}),rumext.v2.jsx("span",{'className':"main_ui_workspace_context_menu__title",'children':title})]});
} else {
return rumext.v2.jsxs("li",{'disabled':disabled,'ref':set_dom_node,'data-value':value,'onClick':on_click_SINGLEQUOTE_,'onPointerEnter':on_pointer_enter__$1,'onPointerLeave':on_pointer_leave__$1,'className':"main_ui_workspace_context_menu__context-menu-item",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_context_menu__title",'children':title}),(cljs.core.truth_(shortcut)?rumext.v2.jsx("span",{'className':"main_ui_workspace_context_menu__shortcut",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__54892){
var vec__54893 = p__54892;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54893,(0),null);
var sc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54893,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_context_menu__shortcut-key",'children':sc},""+(shortcut ?? "")+"-"+(idx ?? "")));

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(app.main.data.shortcuts.split_sc(shortcut)))}):null),(((cljs.core.count(children) > (1)))?rumext.v2.jsx("span",{'className':"main_ui_workspace_context_menu__submenu-icon",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow,'size':"s"})}):null),(((cljs.core.count(children) > (1)))?rumext.v2.jsx("ul",{'ref':submenu_ref,'style':{'display':"none",'left':(250)},'onContextMenu':app.main.ui.workspace.context_menu.prevent_default,'className':"main_ui_workspace_context_menu__workspace-context-submenu",'children':children}):null)]});
}
});

(app.main.ui.workspace.context_menu.menu_entry_STAR_.displayName = "menu-entry*");

app.main.ui.workspace.context_menu.menu_separator_STAR_ = (function app$main$ui$workspace$context_menu$menu_separator_STAR_(props_54896){
return rumext.v2.jsx("li",{'className':"main_ui_workspace_context_menu__separator"});
});

(app.main.ui.workspace.context_menu.menu_separator_STAR_.displayName = "menu-separator*");

app.main.ui.workspace.context_menu.context_menu_edit_STAR_ = (function app$main$ui$workspace$context_menu$context_menu_edit_STAR_(props_54899){
var shapes = props_54899.shapes;
var do_copy = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.copy_selected());
});
var do_copy_link = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.copy_link_to_clipboard());
});
var do_cut = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.copy_selected(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.delete_selected()], 0));
});
var do_paste = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.paste_from_clipboard());
});
var do_duplicate = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.variants.duplicate_or_add_variant());
});
var enabled_paste_props_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var handle_copy_css = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.copy_selected_css());
}));
var handle_copy_css_nested = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.copy_selected_css_nested());
}));
var handle_copy_props = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.copy_selected_props());
}));
var handle_paste_props = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.paste_selected_props());
}));
var handle_copy_svg = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.copy_selected_svg());
}));
var handle_copy_text = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.copy_selected_text());
}));
var handle_hover_copy_paste = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((function (data){
try{var pdata = app.common.transit.decode_str.cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.reset_BANG_(enabled_paste_props_STAR_,(function (){var and__5023__auto__ = app.main.data.workspace.paste_data_valid_QMARK_(pdata);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"copied-props","copied-props",377336865),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(pdata));
} else {
return and__5023__auto__;
}
})());
}catch (e54900){var _ = e54900;
return cljs.core.reset_BANG_(enabled_paste_props_STAR_,false);
}}),(function (){
return cljs.core.reset_BANG_(enabled_paste_props_STAR_,false);
}),beicon.v2.core.take((1),beicon.v2.core.mapcat((function (p1__54898_SHARP_){
return p1__54898_SHARP_.text();
}),app.util.clipboard.from_navigator.cljs$core$IFn$_invoke$arity$0())));
}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.copy"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"copy","copy",-1077617309)),'onClick':do_copy}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.copy-link"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"copy-link","copy-link",-2059434674)),'onClick':do_copy_link}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.cut"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"cut","cut",-1042666209)),'onClick':do_cut}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.paste"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"paste","paste",1975741548)),'onClick':do_paste}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.duplicate"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"duplicate","duplicate",-1107405184)),'onClick':do_duplicate}),rumext.v2.jsxs(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.copy-paste-as"),'onPointerEnter':((app.config.check_browser_QMARK_(new cljs.core.Keyword(null,"chrome","chrome",1718738387)))?handle_hover_copy_paste:null),'children':[rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.copy-css"),'onClick':handle_copy_css}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.copy-css-nested"),'onClick':handle_copy_css_nested}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.copy-svg"),'onClick':handle_copy_svg}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_separator_STAR_,{}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.copy-text"),'onClick':handle_copy_text}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.copy-props"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"copy-props","copy-props",1215339691)),'disabled':(cljs.core.count(shapes) > (1)),'onClick':handle_copy_props}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.paste-props"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"paste-props","paste-props",197304251)),'disabled':((app.config.check_browser_QMARK_(new cljs.core.Keyword(null,"chrome","chrome",1718738387))) && (cljs.core.not(cljs.core.deref(enabled_paste_props_STAR_)))),'onClick':handle_paste_props})]}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_separator_STAR_,{})]});
});

(app.main.ui.workspace.context_menu.context_menu_edit_STAR_.displayName = "context-menu-edit*");

app.main.ui.workspace.context_menu.context_menu_layer_position_STAR_ = (function app$main$ui$workspace$context_menu$context_menu_layer_position_STAR_(props_54904){
var shapes = props_54904.shapes;
var do_bring_forward = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.vertical_order_selected(new cljs.core.Keyword(null,"up","up",-269712113)));
}));
var do_bring_to_front = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.vertical_order_selected(new cljs.core.Keyword(null,"top","top",-1856271961)));
}));
var do_send_backward = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.vertical_order_selected(new cljs.core.Keyword(null,"down","down",1565245570)));
}));
var do_send_to_back = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.vertical_order_selected(new cljs.core.Keyword(null,"bottom","bottom",-1550509018)));
}));
var select_shapes = (function (id){
return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.selection.select_shape.cljs$core$IFn$_invoke$arity$1(id));
});
});
var on_pointer_enter = (function (id){
return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.highlight_shape(id));
});
});
var on_pointer_leave = (function (id){
return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.dehighlight_shape(id));
});
});
var on_unmount = (function (id){
return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.dehighlight_shape(id));
});
});
var hover_ids = cljs.core.deref(app.main.refs.current_hover_ids);
var objects = cljs.core.deref(app.main.refs.workspace_page_objects);
var hover_objs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),hover_ids);
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(((cljs.core.count(hover_objs) > (1)))?rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.select-layer"),'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,object){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(object),'isSelected':cljs.core.some((function (p1__54903_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(object,p1__54903_SHARP_);
}),shapes),'onClick':select_shapes(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(object)),'onPointerEnter':on_pointer_enter(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(object)),'onPointerLeave':on_pointer_leave(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(object)),'onUnmount':on_unmount(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(object)),'icon':app.util.shape_icon.get_shape_icon(object)},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(object) ?? "")));

return out_arr__35152__auto__;
}),[],hover_objs)}):null),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.forward"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"bring-forward","bring-forward",-672639798)),'onClick':do_bring_forward}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.front"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"bring-front","bring-front",244467975)),'onClick':do_bring_to_front}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.backward"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"bring-backward","bring-backward",-1847662891)),'onClick':do_send_backward}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.back"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"bring-back","bring-back",4389822)),'onClick':do_send_to_back}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_separator_STAR_,{})]});
});

(app.main.ui.workspace.context_menu.context_menu_layer_position_STAR_.displayName = "context-menu-layer-position*");

app.main.ui.workspace.context_menu.context_menu_flip_STAR_ = (function app$main$ui$workspace$context_menu$context_menu_flip_STAR_(props_54912){
var do_flip_vertical = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.flip_vertical_selected.cljs$core$IFn$_invoke$arity$0());
});
var do_flip_horizontal = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.flip_horizontal_selected.cljs$core$IFn$_invoke$arity$0());
});
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.flip-vertical"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"flip-vertical","flip-vertical",-1929513553)),'onClick':do_flip_vertical}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.flip-horizontal"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"flip-horizontal","flip-horizontal",1160987018)),'onClick':do_flip_horizontal}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_separator_STAR_,{})]});
});

(app.main.ui.workspace.context_menu.context_menu_flip_STAR_.displayName = "context-menu-flip*");

app.main.ui.workspace.context_menu.context_menu_thumbnail_STAR_ = (function app$main$ui$workspace$context_menu$context_menu_thumbnail_STAR_(props_54913){
var shapes = props_54913.shapes;
var single_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes),(1));
var has_frame_QMARK_ = cljs.core.some(app.common.files.helpers.frame_shape_QMARK_,shapes);
var do_toggle_thumbnail = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.toggle_file_thumbnail_selected());
});
if(cljs.core.truth_((function (){var and__5023__auto__ = single_QMARK_;
if(and__5023__auto__){
return has_frame_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[((cljs.core.every_QMARK_(new cljs.core.Keyword(null,"use-for-thumbnail","use-for-thumbnail",1921212442),shapes))?rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.thumbnail-remove"),'onClick':do_toggle_thumbnail}):rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.thumbnail-set"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"thumbnail-set","thumbnail-set",-614504484)),'onClick':do_toggle_thumbnail})),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_separator_STAR_,{})]});
} else {
return null;
}
});

(app.main.ui.workspace.context_menu.context_menu_thumbnail_STAR_.displayName = "context-menu-thumbnail*");

app.main.ui.workspace.context_menu.context_menu_rename_STAR_ = (function app$main$ui$workspace$context_menu$context_menu_rename_STAR_(props_54914){
var shapes = props_54914.shapes;
var do_rename = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.start_rename_selected());
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes),(1))){
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_separator_STAR_,{}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.rename"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"rename","rename",1508157613)),'onClick':do_rename})]});
} else {
return null;
}
});

(app.main.ui.workspace.context_menu.context_menu_rename_STAR_.displayName = "context-menu-rename*");

app.main.ui.workspace.context_menu.context_menu_group_STAR_ = (function app$main$ui$workspace$context_menu$context_menu_group_STAR_(props_54918){
var shapes = props_54918.shapes;
var multiple_QMARK_ = (cljs.core.count(shapes) > (1));
var single_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes),(1));
var objects = cljs.core.deref(app.main.refs.workspace_page_objects);
var any_in_copy_QMARK_ = cljs.core.some((function (p1__54915_SHARP_){
return app.common.types.container.has_any_copy_parent_QMARK_(objects,p1__54915_SHARP_);
}),shapes);
var any_is_variant_QMARK_ = cljs.core.some(app.common.types.component.is_variant_QMARK_,shapes);
var has_frame_QMARK_ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__54916_SHARP_){
return ((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__54916_SHARP_)) && ((((!(app.common.types.component.instance_head_QMARK_(p1__54916_SHARP_)))) && (cljs.core.not(app.common.types.component.is_variant_container_QMARK_(p1__54916_SHARP_))))));
}),shapes);
var has_group_QMARK_ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__54917_SHARP_){
return ((app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__54917_SHARP_)) && ((((!(app.common.types.component.instance_head_QMARK_(p1__54917_SHARP_)))) && (cljs.core.not(app.common.types.component.is_variant_container_QMARK_(p1__54917_SHARP_))))));
}),shapes);
var has_bool_QMARK_ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.bool_shape_QMARK_,shapes);
var has_mask_QMARK_ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"masked-group","masked-group",1899947873),shapes);
var is_group_QMARK_ = (function (){var and__5023__auto__ = single_QMARK_;
if(and__5023__auto__){
return has_group_QMARK_;
} else {
return and__5023__auto__;
}
})();
var is_bool_QMARK_ = (function (){var and__5023__auto__ = single_QMARK_;
if(and__5023__auto__){
return has_bool_QMARK_;
} else {
return and__5023__auto__;
}
})();
var do_create_group = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.group_selected());
});
var do_remove_group = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.ungroup_selected());
});
var do_mask_group = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.mask_group.cljs$core$IFn$_invoke$arity$0());
});
var do_unmask_group = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.unmask_group.cljs$core$IFn$_invoke$arity$0());
});
var do_create_artboard_from_selection = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.create_artboard_from_selection.cljs$core$IFn$_invoke$arity$0());
});
return rumext.v2.jsx(rumext.v2.Fragment,{'children':((cljs.core.not((function (){var or__5025__auto__ = any_in_copy_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return any_is_variant_QMARK_;
}
})()))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(cljs.core.truth_((function (){var or__5025__auto__ = has_bool_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = has_group_QMARK_;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = has_mask_QMARK_;
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return has_frame_QMARK_;
}
}
}
})())?rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.ungroup"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"ungroup","ungroup",-1629254184)),'onClick':do_remove_group}):null),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.group"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"group","group",582596132)),'onClick':do_create_group}),(cljs.core.truth_((function (){var or__5025__auto__ = multiple_QMARK_;
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){var and__5023__auto__ = is_group_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(has_mask_QMARK_);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return is_bool_QMARK_;
}
}
})())?rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.mask"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"mask","mask",-585748447)),'onClick':do_mask_group}):null),(cljs.core.truth_(has_mask_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.unmask"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"unmask","unmask",-978841832)),'onClick':do_unmask_group}):null),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.create-artboard-from-selection"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"artboard-selection","artboard-selection",528432632)),'onClick':do_create_artboard_from_selection}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_separator_STAR_,{})]}):null)});
});

(app.main.ui.workspace.context_menu.context_menu_group_STAR_.displayName = "context-menu-group*");

app.main.ui.workspace.context_menu.context_focus_mode_menu_STAR_ = (function app$main$ui$workspace$context_menu$context_focus_mode_menu_STAR_(props_54919){
var focus = rumext.v2.deref(app.main.refs.workspace_focus_selected);
var do_toggle_focus_mode = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.toggle_focus_mode());
});
return rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':((cljs.core.empty_QMARK_(focus))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.focus.focus-on"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.focus.focus-off")),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-focus-mode","toggle-focus-mode",-1702630161)),'onClick':do_toggle_focus_mode});
});

(app.main.ui.workspace.context_menu.context_focus_mode_menu_STAR_.displayName = "context-focus-mode-menu*");

app.main.ui.workspace.context_menu.context_menu_path_STAR_ = (function app$main$ui$workspace$context_menu$context_menu_path_STAR_(props_54921){
var shapes = props_54921.shapes;
var disable_flatten = props_54921.disableFlatten;
var disable_booleans = props_54921.disableBooleans;
var multiple_QMARK_ = (cljs.core.count(shapes) > (1));
var single_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes),(1));
var has_group_QMARK_ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.group_shape_QMARK_,shapes);
var has_bool_QMARK_ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.bool_shape_QMARK_,shapes);
var has_frame_QMARK_ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.frame_shape_QMARK_,shapes);
var has_path_QMARK_ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.path_shape_QMARK_,shapes);
var is_group_QMARK_ = (function (){var and__5023__auto__ = single_QMARK_;
if(and__5023__auto__){
return has_group_QMARK_;
} else {
return and__5023__auto__;
}
})();
var is_bool_QMARK_ = (function (){var and__5023__auto__ = single_QMARK_;
if(and__5023__auto__){
return has_bool_QMARK_;
} else {
return and__5023__auto__;
}
})();
var is_frame_QMARK_ = (function (){var and__5023__auto__ = single_QMARK_;
if(and__5023__auto__){
return has_frame_QMARK_;
} else {
return and__5023__auto__;
}
})();
var do_start_editing = (function (){
return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.start_editing_selected());
}));
});
var do_transform_to_path = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.convert_selected_to_path.cljs$core$IFn$_invoke$arity$0());
});
var make_do_bool = (function (bool_type){
return (function (){
if(multiple_QMARK_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.create_bool(bool_type));
} else {
if(cljs.core.truth_(is_group_QMARK_)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.group_to_bool(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(shapes)),bool_type));
} else {
if(cljs.core.truth_(is_bool_QMARK_)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.change_bool_type(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(shapes)),bool_type));
} else {
return null;
}
}
}
});
});
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[((((single_QMARK_) && (cljs.core.not(is_frame_QMARK_))))?rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.edit"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"start-editing","start-editing",36503254)),'onClick':do_start_editing}):null),(cljs.core.truth_((function (){var or__5025__auto__ = disable_flatten;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = has_frame_QMARK_;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return has_path_QMARK_;
}
}
})())?null:rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.flatten"),'onClick':do_transform_to_path})),(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(has_frame_QMARK_);
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core.not(disable_booleans);
if(and__5023__auto____$1){
var or__5025__auto__ = multiple_QMARK_;
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto____$2 = single_QMARK_;
if(and__5023__auto____$2){
var or__5025__auto____$1 = is_group_QMARK_;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return is_bool_QMARK_;
}
} else {
return and__5023__auto____$2;
}
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsxs(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.path"),'children':[rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.union"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"bool-union","bool-union",-400530038)),'onClick':make_do_bool(new cljs.core.Keyword(null,"union","union",2142937499))}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.difference"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"bool-difference","bool-difference",1638220619)),'onClick':make_do_bool(new cljs.core.Keyword(null,"difference","difference",1916101396))}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.intersection"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"bool-intersection","bool-intersection",2106050785)),'onClick':make_do_bool(new cljs.core.Keyword(null,"intersection","intersection",2003891010))}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.exclude"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"bool-exclude","bool-exclude",906557011)),'onClick':make_do_bool(new cljs.core.Keyword(null,"exclude","exclude",-1230250334))}),(cljs.core.truth_((function (){var and__5023__auto__ = single_QMARK_;
if(and__5023__auto__){
var and__5023__auto____$1 = is_bool_QMARK_;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not(disable_flatten);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_separator_STAR_,{}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.flatten"),'onClick':do_transform_to_path})]}):null)]}):null)]});
});

(app.main.ui.workspace.context_menu.context_menu_path_STAR_.displayName = "context-menu-path*");

app.main.ui.workspace.context_menu.context_menu_layer_options_STAR_ = (function app$main$ui$workspace$context_menu$context_menu_layer_options_STAR_(props_54940){
var shapes = props_54940.shapes;
var ids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes);
var do_show_shape = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_shape_flags(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),false], null)));
});
var do_hide_shape = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_shape_flags(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),true], null)));
});
var do_lock_shape = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_shape_flags(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blocked","blocked",181326681),true], null)));
});
var do_unlock_shape = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_shape_flags(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blocked","blocked",181326681),false], null)));
});
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[((cljs.core.every_QMARK_(new cljs.core.Keyword(null,"hidden","hidden",-312506092),shapes))?rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.show"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-visibility","toggle-visibility",502586674)),'onClick':do_show_shape}):rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.hide"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-visibility","toggle-visibility",502586674)),'onClick':do_hide_shape})),((cljs.core.every_QMARK_(new cljs.core.Keyword(null,"blocked","blocked",181326681),shapes))?rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.unlock"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-lock","toggle-lock",-266873991)),'onClick':do_unlock_shape}):rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.lock"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-lock","toggle-lock",-266873991)),'onClick':do_lock_shape}))]});
});

(app.main.ui.workspace.context_menu.context_menu_layer_options_STAR_.displayName = "context-menu-layer-options*");

app.main.ui.workspace.context_menu.context_menu_prototype_STAR_ = (function app$main$ui$workspace$context_menu$context_menu_prototype_STAR_(props_54958){
var shapes = props_54958.shapes;
var flows = rumext.v2.deref(app.main.refs.workspace_page_flows);
var options_mode = rumext.v2.deref(app.main.refs.options_mode_global);
var do_add_flow = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.interactions.add_flow_selected_frame());
});
var do_remove_flow = (function (p1__54953_SHARP_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.interactions.remove_flow.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__54953_SHARP_)));
});
var prototype_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(options_mode,new cljs.core.Keyword(null,"prototype","prototype",-1121365005));
var single_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes),(1));
var has_frame_QMARK_ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.frame_shape_QMARK_,shapes);
var is_frame_QMARK_ = (function (){var and__5023__auto__ = single_QMARK_;
if(and__5023__auto__){
return has_frame_QMARK_;
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = prototype_QMARK_;
if(and__5023__auto__){
return is_frame_QMARK_;
} else {
return and__5023__auto__;
}
})())){
var temp__5823__auto__ = app.common.types.page.get_frame_flow(flows,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(shapes)));
if(cljs.core.truth_(temp__5823__auto__)){
var flow = temp__5823__auto__;
return rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.delete-flow-start"),'onClick':do_remove_flow(flow)});
} else {
return rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.flow-start"),'onClick':do_add_flow});
}
} else {
return null;
}
});

(app.main.ui.workspace.context_menu.context_menu_prototype_STAR_.displayName = "context-menu-prototype*");

app.main.ui.workspace.context_menu.context_menu_layout_STAR_ = (function app$main$ui$workspace$context_menu$context_menu_layout_STAR_(props_54963){
var shapes = props_54963.shapes;
var single_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes),(1));
var objects = cljs.core.deref(app.main.refs.workspace_page_objects);
var any_in_copy_QMARK_ = cljs.core.some(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54962_SHARP_){
return app.common.types.container.has_any_copy_parent_QMARK_(objects,p1__54962_SHARP_);
}),shapes));
var has_flex_QMARK_ = ((single_QMARK_) && (cljs.core.every_QMARK_(app.common.types.shape.layout.flex_layout_QMARK_,shapes)));
var has_grid_QMARK_ = ((single_QMARK_) && (cljs.core.every_QMARK_(app.common.types.shape.layout.grid_layout_QMARK_,shapes)));
var any_is_variant_QMARK_ = cljs.core.some(app.common.types.component.is_variant_QMARK_,shapes);
var on_add_layout = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(app.main.data.workspace.shape_layout.create_layout(type),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:context-menu"], null)));
}));
var on_remove_layout = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes)],(function (_event){
var ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.remove_layout(ids));
}));
return rumext.v2.jsx(rumext.v2.Fragment,{'children':((cljs.core.not(any_in_copy_QMARK_))?((((has_flex_QMARK_) || (has_grid_QMARK_)))?rumext.v2.jsxs("div",{'children':[rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_separator_STAR_,{}),((has_flex_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.remove-flex"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-layout-flex","toggle-layout-flex",-419502780)),'onClick':on_remove_layout}):rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.remove-grid"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-layout-grid","toggle-layout-grid",-1385848312)),'onClick':on_remove_layout}))]}):((((single_QMARK_) || (cljs.core.not(any_is_variant_QMARK_))))?rumext.v2.jsxs("div",{'children':[rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_separator_STAR_,{}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.add-flex"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-layout-flex","toggle-layout-flex",-419502780)),'value':"flex",'onClick':on_add_layout}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.add-grid"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-layout-grid","toggle-layout-grid",-1385848312)),'value':"grid",'onClick':on_add_layout})]}):null)):null)});
});

(app.main.ui.workspace.context_menu.context_menu_layout_STAR_.displayName = "context-menu-layout*");

app.main.ui.workspace.context_menu.context_menu_component_STAR_ = (function app$main$ui$workspace$context_menu$context_menu_component_STAR_(props_54974){
var shapes = props_54974.shapes;
var single_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes),(1));
var objects = cljs.core.deref(app.main.refs.workspace_page_objects);
var can_make_component = cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54973_SHARP_){
return app.common.types.container.valid_shape_for_component_QMARK_(objects,p1__54973_SHARP_);
}),shapes));
var components_menu_entries = app.main.ui.workspace.sidebar.assets.common.generate_components_menu_entries(shapes);
var variant_container_QMARK_ = (function (){var and__5023__auto__ = single_QMARK_;
if(and__5023__auto__){
return app.common.types.component.is_variant_container_QMARK_(cljs.core.first(shapes));
} else {
return and__5023__auto__;
}
})();
var all_main_QMARK_ = cljs.core.every_QMARK_(app.common.types.component.main_instance_QMARK_,shapes);
var any_variant_QMARK_ = cljs.core.some(app.common.types.component.is_variant_QMARK_,shapes);
var do_add_component = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.add_component.cljs$core$IFn$_invoke$arity$0());
}));
var do_add_multiple_components = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.add_multiple_components());
}));
var do_combine_as_variants = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.variants.combine_selected_as_variants(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger","trigger",103466139),"workspace:context-menu-component"], null)));
}));
var do_add_variant = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-new-variant",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:context-menu-component"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.variants.add_new_variant.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(shapes)))], 0));
}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[((can_make_component)?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_separator_STAR_,{}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.create-component"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"create-component-variant","create-component-variant",1450799770)),'onClick':do_add_component}),(((!(single_QMARK_)))?rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.create-multiple-components"),'onClick':do_add_multiple_components}):null)]}):null),((cljs.core.seq(components_menu_entries))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_separator_STAR_,{}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,entry){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(entry),'shortcut':((cljs.core.contains_QMARK_(entry,new cljs.core.Keyword(null,"shortcut","shortcut",-431647697)))?app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"shortcut","shortcut",-431647697).cljs$core$IFn$_invoke$arity$1(entry)):null),'onClick':new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(entry)},new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(entry)));

return out_arr__35152__auto__;
}),[],cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,components_menu_entries))]}):null),(cljs.core.truth_(variant_container_QMARK_)?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_separator_STAR_,{}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.add-variant"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"create-component-variant","create-component-variant",1450799770)),'onClick':do_add_variant})]}):null),(((((!(single_QMARK_))) && (((all_main_QMARK_) && (cljs.core.not(any_variant_QMARK_))))))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_separator_STAR_,{}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.combine-as-variants"),'onClick':do_combine_as_variants})]}):null)]});
});

(app.main.ui.workspace.context_menu.context_menu_component_STAR_.displayName = "context-menu-component*");

app.main.ui.workspace.context_menu.context_menu_delete_STAR_ = (function app$main$ui$workspace$context_menu$context_menu_delete_STAR_(props_54975){
var do_delete = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.delete_selected());
});
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_separator_STAR_,{}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.delete"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"delete","delete",-1768633620)),'onClick':do_delete})]});
});

(app.main.ui.workspace.context_menu.context_menu_delete_STAR_.displayName = "context-menu-delete*");

app.main.ui.workspace.context_menu.shape_context_menu_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$context_menu$shape_context_menu_STAR_(props_54978){
var mdata = props_54978.mdata;
var map__54980 = mdata;
var map__54980__$1 = cljs.core.__destructure_map(map__54980);
var disable_booleans = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54980__$1,new cljs.core.Keyword(null,"disable-booleans","disable-booleans",1692419768));
var disable_flatten = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54980__$1,new cljs.core.Keyword(null,"disable-flatten","disable-flatten",570467597));
var objects = cljs.core.deref(app.main.refs.workspace_page_objects);
var shape_ids = rumext.v2.deref(app.main.refs.selected_shapes);
var shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),shape_ids);
var is_not_variant_container_QMARK_ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__54977_SHARP_){
return cljs.core.not(app.common.types.component.is_variant_container_QMARK_(p1__54977_SHARP_));
}),shapes);
var props = {'shapes':shapes,'disableBooleans':disable_booleans,'disableFlatten':disable_flatten};
if(cljs.core.empty_QMARK_(shapes)){
return null;
} else {
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.create_element(app.main.ui.workspace.context_menu.context_menu_edit_STAR_,props),rumext.v2.create_element(app.main.ui.workspace.context_menu.context_menu_layer_position_STAR_,props),(cljs.core.truth_(is_not_variant_container_QMARK_)?rumext.v2.create_element(app.main.ui.workspace.context_menu.context_menu_flip_STAR_,props):null),rumext.v2.create_element(app.main.ui.workspace.context_menu.context_menu_thumbnail_STAR_,props),rumext.v2.create_element(app.main.ui.workspace.context_menu.context_menu_rename_STAR_,props),rumext.v2.create_element(app.main.ui.workspace.context_menu.context_menu_group_STAR_,props),rumext.v2.create_element(app.main.ui.workspace.context_menu.context_focus_mode_menu_STAR_,props),rumext.v2.create_element(app.main.ui.workspace.context_menu.context_menu_path_STAR_,props),rumext.v2.create_element(app.main.ui.workspace.context_menu.context_menu_layer_options_STAR_,props),rumext.v2.create_element(app.main.ui.workspace.context_menu.context_menu_prototype_STAR_,props),(cljs.core.truth_(is_not_variant_container_QMARK_)?rumext.v2.create_element(app.main.ui.workspace.context_menu.context_menu_layout_STAR_,props):null),rumext.v2.create_element(app.main.ui.workspace.context_menu.context_menu_component_STAR_,props),rumext.v2.create_element(app.main.ui.workspace.context_menu.context_menu_delete_STAR_,props)]});
}
}));

(app.main.ui.workspace.context_menu.shape_context_menu_STAR_.displayName = "shape-context-menu*");

app.main.ui.workspace.context_menu.page_item_context_menu_STAR_ = (function app$main$ui$workspace$context_menu$page_item_context_menu_STAR_(props_54984){
var mdata = props_54984.mdata;
var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(mdata);
var deletable_QMARK_ = new cljs.core.Keyword(null,"deletable?","deletable?",2134719819).cljs$core$IFn$_invoke$arity$1(mdata);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page);
var delete_fn = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.delete_page(id));
});
var do_delete = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-page.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-page.body"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),delete_fn], null)));
});
var do_duplicate = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.duplicate_page(id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"duplicate-page"], null))], 0));
});
var do_rename = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.start_rename_page_item(id));
});
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(cljs.core.truth_(deletable_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.delete"),'onClick':do_delete}):null),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.rename"),'onClick':do_rename}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.duplicate"),'onClick':do_duplicate})]});
});

(app.main.ui.workspace.context_menu.page_item_context_menu_STAR_.displayName = "page-item-context-menu*");

app.main.ui.workspace.context_menu.viewport_context_menu_STAR_ = (function app$main$ui$workspace$context_menu$viewport_context_menu_STAR_(props_54986){
var focus = rumext.v2.deref(app.main.refs.workspace_focus_selected);
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
var do_paste = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.paste_from_clipboard());
});
var do_hide_ui = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(app.main.data.workspace.toggle_layout_flag(new cljs.core.Keyword(null,"hide-ui","hide-ui",834012905)),cljs.core.assoc,new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace-context-menu"));
});
var do_toggle_focus_mode = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.toggle_focus_mode());
});
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[((read_only_QMARK_)?null:rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.paste"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"paste","paste",1975741548)),'onClick':do_paste})),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.hide-ui"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"hide-ui","hide-ui",834012905)),'onClick':do_hide_ui}),((app.common.data.not_empty_QMARK_(focus))?rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.focus.focus-off"),'shortcut':app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-focus-mode","toggle-focus-mode",-1702630161)),'onClick':do_toggle_focus_mode}):null)]});
});

(app.main.ui.workspace.context_menu.viewport_context_menu_STAR_.displayName = "viewport-context-menu*");

app.main.ui.workspace.context_menu.grid_track_context_menu_STAR_ = (function app$main$ui$workspace$context_menu$grid_track_context_menu_STAR_(props_54991){
var mdata = props_54991.mdata;
var map__54993 = mdata;
var map__54993__$1 = cljs.core.__destructure_map(map__54993);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54993__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54993__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var grid_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54993__$1,new cljs.core.Keyword(null,"grid-id","grid-id",1007140206));
var do_delete_track = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(grid_id),rumext.v2.adapt(type),rumext.v2.adapt(index)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.remove_layout_track(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grid_id], null),type,index));
}));
var do_add_track_before = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(grid_id),rumext.v2.adapt(type),rumext.v2.adapt(index)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.add_layout_track.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grid_id], null),type,app.common.types.shape.layout.default_track_value,index));
}));
var do_add_track_after = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(grid_id),rumext.v2.adapt(type),rumext.v2.adapt(index)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.add_layout_track.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grid_id], null),type,app.common.types.shape.layout.default_track_value,(index + (1))));
}));
var do_duplicate_track = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(grid_id),rumext.v2.adapt(type),rumext.v2.adapt(index)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.duplicate_layout_track(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grid_id], null),type,index));
}));
var do_delete_track_shapes = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(grid_id),rumext.v2.adapt(type),rumext.v2.adapt(index)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.remove_layout_track.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grid_id], null),type,index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-shapes?","with-shapes?",-2137257409),true], null)], 0)));
}));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095))){
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.context-menu.grid-track.column.duplicate"),'onClick':do_duplicate_track}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.context-menu.grid-track.column.add-before"),'onClick':do_add_track_before}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.context-menu.grid-track.column.add-after"),'onClick':do_add_track_after}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.context-menu.grid-track.column.delete"),'onClick':do_delete_track}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.context-menu.grid-track.column.delete-shapes"),'onClick':do_delete_track_shapes})]});
} else {
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.context-menu.grid-track.row.duplicate"),'onClick':do_duplicate_track}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.context-menu.grid-track.row.add-before"),'onClick':do_add_track_before}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.context-menu.grid-track.row.add-after"),'onClick':do_add_track_after}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.context-menu.grid-track.row.delete"),'onClick':do_delete_track}),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.context-menu.grid-track.row.delete-shapes"),'onClick':do_delete_track_shapes})]});
}
});

(app.main.ui.workspace.context_menu.grid_track_context_menu_STAR_.displayName = "grid-track-context-menu*");

app.main.ui.workspace.context_menu.grid_cells_context_menu_STAR_ = (function app$main$ui$workspace$context_menu$grid_cells_context_menu_STAR_(props_54996){
var mdata = props_54996.mdata;
var map__54998 = mdata;
var map__54998__$1 = cljs.core.__destructure_map(map__54998);
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54998__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54998__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var single_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),(1));
var can_merge_QMARK_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cells)],(function (){
return app.common.types.shape.layout.valid_area_cells_QMARK_(cells);
}));
var do_merge_cells = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(grid),rumext.v2.adapt(cells)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.merge_cells(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(grid),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cells)));
}));
var do_create_board = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(grid),rumext.v2.adapt(cells)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.create_cell_board(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(grid),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cells)));
}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(((!(single_QMARK_)))?rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.context-menu.grid-cells.merge"),'onClick':do_merge_cells,'disabled':cljs.core.not(can_merge_QMARK_)}):null),((single_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.context-menu.grid-cells.area"),'onClick':do_merge_cells}):null),rumext.v2.jsx(app.main.ui.workspace.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.context-menu.grid-cells.create-board"),'onClick':do_create_board,'disabled':(((!(single_QMARK_))) && (cljs.core.not(can_merge_QMARK_)))})]});
});

(app.main.ui.workspace.context_menu.grid_cells_context_menu_STAR_.displayName = "grid-cells-context-menu*");

app.main.ui.workspace.context_menu.context_menu_STAR_ = (function app$main$ui$workspace$context_menu$context_menu_STAR_(props_55004){
var mdata = rumext.v2.deref(app.main.ui.workspace.context_menu.menu_ref);
var top = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"y","y",-1757859776)], null)) - (20));
var left = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"x","x",2099068185)], null));
var dropdown_ref = rumext.v2.use_ref();
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(mdata)],(function (){
var temp__5825__auto__ = rumext.v2.ref_val(dropdown_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var dropdown = temp__5825__auto__;
var bounding_rect = app.util.dom.get_bounding_rect(dropdown);
var window_size = app.util.dom.get_window_size();
var delta_x = (function (){var x__5110__auto__ = ((new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bounding_rect) + (250)) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(window_size));
var y__5111__auto__ = (0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var delta_y = (function (){var x__5110__auto__ = (new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(bounding_rect) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(window_size));
var y__5111__auto__ = (0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var new_style = ["top: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((top - delta_y)),"px; ","left: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((left - delta_x)),"px;"].join('');
if((((delta_x > (0))) || ((delta_y > (0))))){
return dropdown.setAttribute("style",new_style);
} else {
return null;
}
} else {
return null;
}
}));

return rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':cljs.core.boolean$(mdata),'on-close':(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.hide_context_menu);
}),'children':rumext.v2.jsx("div",{'ref':dropdown_ref,'style':{'top':top,'left':left},'data-testid':"context-menu",'onContextMenu':app.main.ui.workspace.context_menu.prevent_default,'className':"main_ui_workspace_context_menu__workspace-context-menu",'children':rumext.v2.jsx("ul",{'className':"main_ui_workspace_context_menu__context-list",'children':((read_only_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.context_menu.viewport_context_menu_STAR_,{'mdata':mdata}):(function (){var G__55027 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(mdata);
var G__55027__$1 = (((G__55027 instanceof cljs.core.Keyword))?G__55027.fqn:null);
switch (G__55027__$1) {
case "shape":
return rumext.v2.jsx(app.main.ui.workspace.context_menu.shape_context_menu_STAR_,{'mdata':mdata});

break;
case "page":
return rumext.v2.jsx(app.main.ui.workspace.context_menu.page_item_context_menu_STAR_,{'mdata':mdata});

break;
case "grid-track":
return rumext.v2.jsx(app.main.ui.workspace.context_menu.grid_track_context_menu_STAR_,{'mdata':mdata});

break;
case "grid-cells":
return rumext.v2.jsx(app.main.ui.workspace.context_menu.grid_cells_context_menu_STAR_,{'mdata':mdata});

break;
default:
return rumext.v2.jsx(app.main.ui.workspace.context_menu.viewport_context_menu_STAR_,{'mdata':mdata});

}
})())})})});
});

(app.main.ui.workspace.context_menu.context_menu_STAR_.displayName = "context-menu*");


//# sourceMappingURL=app.main.ui.workspace.context_menu.js.map
