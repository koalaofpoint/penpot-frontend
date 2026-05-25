import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.uuid.js";
import "./app.main.constants.js";
import "./app.main.data.event.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.colors.js";
import "./app.main.data.workspace.shortcuts.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.context.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.hooks.resize.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.workspace.color_palette.js";
import "./app.main.ui.workspace.color_palette_ctx_menu.js";
import "./app.main.ui.workspace.text_palette.js";
import "./app.main.ui.workspace.text_palette_ctx_menu.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.object.js";
import "./app.util.timers.js";
import "./goog.events.events.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.palette');
app.main.ui.workspace.palette.ref_COLON_viewport = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vport","vport",-1317419022),app.main.refs.workspace_local);
app.main.ui.workspace.palette.calculate_palette_style = (function app$main$ui$workspace$palette$calculate_palette_style(rulers_QMARK_){
var left_sidebar = app.util.dom.get_element("left-sidebar-aside");
var left_sidebar_size = app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(left_sidebar,"width"));
var rulers_width = (cljs.core.truth_(rulers_QMARK_)?(22):(0));
var min_left_sidebar_width = app.main.constants.left_sidebar_default_width;
var left_padding = (4);
var calculate_padding_left = (((rulers_width + (function (){var or__5025__auto__ = left_sidebar_size;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return min_left_sidebar_width;
}
})()) + left_padding) + (1));
return ({"paddingLeft": ""+(calculate_padding_left ?? "")+"px", "paddingRight": "322px"});
});
app.main.ui.workspace.palette.palette_STAR_ = (function app$main$ui$workspace$palette$palette_STAR_(props_55073){
var on_change_size = props_55073.onChangeSize;
var layout = props_55073.layout;
var color_palette_QMARK_ = new cljs.core.Keyword(null,"colorpalette","colorpalette",-2142723517).cljs$core$IFn$_invoke$arity$1(layout);
var text_palette_QMARK_ = new cljs.core.Keyword(null,"textpalette","textpalette",-1296342868).cljs$core$IFn$_invoke$arity$1(layout);
var hide_palettes_QMARK_ = new cljs.core.Keyword(null,"hide-palettes","hide-palettes",-1168299178).cljs$core$IFn$_invoke$arity$1(layout);
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
var container = rumext.v2.use_ref(null);
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-menu","show-menu",14072792),false], null);
}));
var state = cljs.core.deref(state_STAR_);
var show_menu_QMARK_ = new cljs.core.Keyword(null,"show-menu","show-menu",14072792).cljs$core$IFn$_invoke$arity$1(state);
var selected = app.main.ui.hooks.use_shared_state(new cljs.core.Keyword("app.main.data.workspace.colors","colorpalette-selected","app.main.data.workspace.colors/colorpalette-selected",-553076822),new cljs.core.Keyword(null,"recent","recent",449517715));
var selected_text_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"file","file",-1269645878));
var selected_text = cljs.core.deref(selected_text_STAR_);
var on_select = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p1__55072_SHARP_){
return cljs.core.reset_BANG_(selected,p1__55072_SHARP_);
}));
var rulers_QMARK_ = rumext.v2.deref(app.main.refs.rulers_QMARK_);
var vport = rumext.v2.deref(app.main.ui.workspace.palette.ref_COLON_viewport);
var vport_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(vport,new cljs.core.Keyword(null,"width","width",-384071477));
var map__55074 = app.main.ui.hooks.resize.use_resize_hook.cljs$core$IFn$_invoke$arity$8(new cljs.core.Keyword(null,"palette","palette",-456203511),(72),(54),(80),new cljs.core.Keyword(null,"y","y",-1757859776),true,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),on_change_size);
var map__55074__$1 = cljs.core.__destructure_map(map__55074);
var on_pointer_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55074__$1,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138));
var on_lost_pointer_capture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55074__$1,new cljs.core.Keyword(null,"on-lost-pointer-capture","on-lost-pointer-capture",-1554883134));
var on_pointer_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55074__$1,new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695));
var parent_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55074__$1,new cljs.core.Keyword(null,"parent-ref","parent-ref",-860935235));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55074__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var on_resize = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_){
var dom = rumext.v2.ref_val(container);
var width = app.util.object.get.cljs$core$IFn$_invoke$arity$2(dom,"clientWidth");
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"width","width",-384071477),width);
}));
var on_close_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"show-menu","show-menu",14072792),false);
}));
var on_select_palette = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_select)],(function (event){
var node = app.util.dom.get_current_target(event);
var value = app.util.dom.get_attribute(node,"data-palette");
var G__55075 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",value)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("recent",value))))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value):app.common.uuid.parse(value));
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(G__55075) : on_select.call(null,G__55075));
}));
var on_select_text_palette_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_select)],(function (lib){
if((((lib == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),lib)))){
return cljs.core.reset_BANG_(selected_text_STAR_,new cljs.core.Keyword(null,"file","file",-1269645878));
} else {
return cljs.core.reset_BANG_(selected_text_STAR_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(lib));
}
}));
var toggle_palettes = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_){
app.main.ui.hooks.resize.set_resize_type_BANG_(new cljs.core.Keyword(null,"top","top",-1856271961));

app.util.dom.add_class_BANG_(app.util.dom.get_element_by_class.cljs$core$IFn$_invoke$arity$1("color-palette"),"fade-out-down");

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(app.main.data.workspace.toggle_layout_flag(new cljs.core.Keyword(null,"hide-palettes","hide-palettes",-1168299178)),cljs.core.assoc,new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace-left-toolbar"));
}));
var on_select_color_palette = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var node = app.util.dom.get_current_target(event);
app.main.ui.hooks.resize.set_resize_type_BANG_(new cljs.core.Keyword(null,"top","top",-1856271961));

app.util.dom.add_class_BANG_(app.util.dom.get_element_by_class.cljs$core$IFn$_invoke$arity$1("color-palette"),"fade-out-down");

app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((300),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.remove_layout_flag(new cljs.core.Keyword(null,"hide-palettes","hide-palettes",-1168299178)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.remove_layout_flag(new cljs.core.Keyword(null,"textpalette","textpalette",-1296342868)),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(app.main.data.workspace.toggle_layout_flag(new cljs.core.Keyword(null,"colorpalette","colorpalette",-2142723517)),cljs.core.assoc,new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace-left-toolbar")], 0));
}));

return app.util.dom.blur_BANG_(node);
}));
var on_select_text_palette = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var node = app.util.dom.get_current_target(event);
app.main.ui.hooks.resize.set_resize_type_BANG_(new cljs.core.Keyword(null,"top","top",-1856271961));

app.util.dom.add_class_BANG_(app.util.dom.get_element_by_class.cljs$core$IFn$_invoke$arity$1("color-palette"),"fade-out-down");

app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((300),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.remove_layout_flag(new cljs.core.Keyword(null,"hide-palettes","hide-palettes",-1168299178)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.remove_layout_flag(new cljs.core.Keyword(null,"colorpalette","colorpalette",-2142723517)),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(app.main.data.workspace.toggle_layout_flag(new cljs.core.Keyword(null,"textpalette","textpalette",-1296342868)),cljs.core.assoc,new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace-left-toolbar")], 0));
}));

return app.util.dom.blur_BANG_(node);
}));
var any_palette_QMARK_ = (function (){var or__5025__auto__ = color_palette_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return text_palette_QMARK_;
}
})();
var size_classname = (((size <= (64)))?"main_ui_workspace_palette__small-palette":(((size <= (72)))?"main_ui_workspace_palette__mid-palette":(((size <= (80)))?"main_ui_workspace_palette__big-palette":null)));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var key1 = goog.events.listen(window,"resize",on_resize);
return (function (){
return goog.events.unlistenByKey(key1);
});
}));

rumext.v2.use_layout_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var dom = rumext.v2.ref_val(parent_ref);
var width = app.util.object.get.cljs$core$IFn$_invoke$arity$2(dom,"clientWidth");
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"width","width",-384071477),width);
}));

return rumext.v2.jsx("div",{'id':"palette-wrapper",'style':app.main.ui.workspace.palette.calculate_palette_style(rulers_QMARK_),'data-testid':"palette",'className':"main_ui_workspace_palette__palette-wrapper",'children':((read_only_QMARK_)?null:rumext.v2.jsxs("div",{'ref':parent_ref,'style':({"--height": ""+(size ?? "")+"px"}),'className':""+(size_classname ?? "")+" "+("main_ui_workspace_palette__palettes"+" "+(cljs.core.truth_(any_palette_QMARK_)?"main_ui_workspace_palette__wide":"")+" "+(cljs.core.truth_(hide_palettes_QMARK_)?"main_ui_workspace_palette__hidden-bts":"") ?? ""),'children':[rumext.v2.jsx("div",{'onPointerDown':on_pointer_down,'onLostPointerCapture':on_lost_pointer_capture,'onPointerMove':on_pointer_move,'className':"main_ui_workspace_palette__resize-area"}),rumext.v2.jsxs("ul",{'className':""+(size_classname ?? "")+" "+("main_ui_workspace_palette__palette-btn-list"+" "+(cljs.core.truth_(hide_palettes_QMARK_)?"main_ui_workspace_palette__hidden-bts":"") ?? ""),'children':[rumext.v2.jsx("li",{'className':"main_ui_workspace_palette__palette-item",'children':rumext.v2.jsx("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.color-palette",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-colorpalette","toggle-colorpalette",-172926492))], 0)),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.color-palette",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-colorpalette","toggle-colorpalette",-172926492))], 0)),'onClick':on_select_color_palette,'className':"main_ui_workspace_palette__palette-btn"+" "+(cljs.core.truth_(color_palette_QMARK_)?"main_ui_workspace_palette__selected":""),'children':app.main.ui.icons.drop_icon})}),rumext.v2.jsx("li",{'className':"main_ui_workspace_palette__palette-item",'children':rumext.v2.jsx("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.text-palette",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-textpalette","toggle-textpalette",-1581028492))], 0)),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.text-palette",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-textpalette","toggle-textpalette",-1581028492))], 0)),'onClick':on_select_text_palette,'className':"main_ui_workspace_palette__palette-btn"+" "+(cljs.core.truth_(text_palette_QMARK_)?"main_ui_workspace_palette__selected":""),'children':app.main.ui.icons.text_palette})})]}),(cljs.core.truth_(any_palette_QMARK_)?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("button",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"show-menu","show-menu",14072792),cljs.core.not);
}),'className':"main_ui_workspace_palette__palette-actions",'children':app.main.ui.icons.menu}),rumext.v2.jsxs("div",{'ref':container,'className':"main_ui_workspace_palette__palette",'children':[(cljs.core.truth_(text_palette_QMARK_)?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.text_palette_ctx_menu.text_palette_ctx_menu,{'show-menu?':show_menu_QMARK_,'close-menu':on_close_menu,'on-select-palette':on_select_text_palette_menu,'selected':selected_text}),rumext.v2.jsx(app.main.ui.workspace.text_palette.text_palette,{'size':size,'selected':selected_text,'width':vport_width})]}):null),(cljs.core.truth_(color_palette_QMARK_)?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.color_palette_ctx_menu.color_palette_ctx_menu_STAR_,{'show':show_menu_QMARK_,'onClose':on_close_menu,'onSelect':on_select_palette,'selected':cljs.core.deref(selected)}),rumext.v2.jsx(app.main.ui.workspace.color_palette.color_palette_STAR_,{'size':size,'selected':cljs.core.deref(selected),'width':vport_width})]}):null)]})]}):rumext.v2.jsx("div",{'onClick':toggle_palettes,'data-testid':"toggle-palettes-visibility",'className':"main_ui_workspace_palette__handler",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_palette__handler-btn"})}))]}))});
});

(app.main.ui.workspace.palette.palette_STAR_.displayName = "palette*");


//# sourceMappingURL=app.main.ui.workspace.palette.js.map
