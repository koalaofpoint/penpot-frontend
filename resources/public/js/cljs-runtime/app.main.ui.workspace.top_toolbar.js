import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.geom.point.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.common.js";
import "./app.main.data.workspace.media.js";
import "./app.main.data.workspace.shortcuts.js";
import "./app.main.features.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.file_uploader.js";
import "./app.main.ui.context.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.timers.js";
import "./okulary.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.top_toolbar');
app.main.ui.workspace.top_toolbar.image_upload = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$top_toolbar$image_upload(props_56842){
var ref = rumext.v2.use_ref(null);
var file_id = rumext.v2.use_ctx(app.main.ui.context.current_file_id);
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.clear_edition_mode()], 0));

return app.util.dom.click(rumext.v2.ref_val(ref));
}));
var on_selected = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (blobs){
var vbox = cljs.core.deref(app.main.refs.vbox);
var x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vbox) / (2)));
var y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vbox) / (2)));
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"blobs","blobs",-1606355916),cljs.core.seq(blobs),new cljs.core.Keyword(null,"position","position",-2011731912),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y)], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.media.upload_media_workspace(params));
}));
return rumext.v2.jsx("li",{'children':rumext.v2.jsxs("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.image",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"insert-image","insert-image",-460453042))], 0)),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.image",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"insert-image","insert-image",-460453042))], 0)),'onClick':on_click,'className':"main_ui_workspace_top_toolbar__main-toolbar-options-button",'children':[app.main.ui.icons.img,rumext.v2.jsx(app.main.ui.components.file_uploader.file_uploader,{'input-id':"image-upload",'accept':app.main.data.workspace.media.accept_image_types,'multi':true,'ref':ref,'on-selected':on_selected})]})});
}));

(app.main.ui.workspace.top_toolbar.image_upload.displayName = "image-upload");

app.main.ui.workspace.top_toolbar.toolbar_hidden_ref = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (state){
var visibility = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"hide-toolbar","hide-toolbar",-1320052666));
var path_edit_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"selected","selected",574897764));
var edition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"edition","edition",1337508089));
var single_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected),(1));
var path_editing_QMARK_ = ((single_QMARK_) && ((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(path_edit_state,edition) == null)))));
if(path_editing_QMARK_){
return true;
} else {
return visibility;
}
}),app.main.refs.workspace_local);
app.main.ui.workspace.top_toolbar.top_toolbar_STAR_ = rumext.v2.memo_SINGLEQUOTE_((function app$main$ui$workspace$top_toolbar$top_toolbar_STAR_(props_56854){
var layout = props_56854.layout;
var drawtool = rumext.v2.deref(app.main.refs.selected_drawing_tool);
var edition = rumext.v2.deref(app.main.refs.selected_edition);
var profile = rumext.v2.deref(app.main.refs.profile);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(profile,new cljs.core.Keyword(null,"props","props",453281727));
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
var rulers_QMARK_ = rumext.v2.deref(app.main.refs.rulers_QMARK_);
var hide_toolbar_QMARK_ = rumext.v2.deref(app.main.ui.workspace.top_toolbar.toolbar_hidden_ref);
var interrupt = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.clear_edition_mode()], 0));
}));
var select_drawtool = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var tool = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"tool"));
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.clear_edition_mode()], 0));

return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((100),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.select_for_drawing(tool));
}));
}));
var toggle_debug_panel = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(layout)],(function (){
var is_sidebar_closed_QMARK_ = cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"collapse-left-sidebar","collapse-left-sidebar",-1883177143));
if(is_sidebar_closed_QMARK_){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.toggle_layout_flag(new cljs.core.Keyword(null,"collapse-left-sidebar","collapse-left-sidebar",-1883177143)));
} else {
}

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.remove_layout_flag(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(app.main.data.workspace.toggle_layout_flag(new cljs.core.Keyword(null,"debug-panel","debug-panel",-1624930518)),cljs.core.assoc,new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace-left-toolbar")], 0));
}));
var toggle_toolbar = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.blur_BANG_(app.util.dom.get_target(event));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.common.toggle_toolbar_visibility());
}));
var test_tooltip_board_text = ((cljs.core.not(new cljs.core.Keyword(null,"workspace-visited","workspace-visited",479274314).cljs$core$IFn$_invoke$arity$1(props)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.frame-first-time",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"draw-frame","draw-frame",657391841))], 0)):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.frame",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"draw-frame","draw-frame",657391841))], 0)));
if(read_only_QMARK_){
return null;
} else {
return rumext.v2.jsxs("aside",{'className':"main_ui_workspace_top_toolbar__main-toolbar"+" "+((cljs.core.not(rulers_QMARK_))?"main_ui_workspace_top_toolbar__main-toolbar-no-rulers":"")+" "+(cljs.core.truth_(hide_toolbar_QMARK_)?"main_ui_workspace_top_toolbar__main-toolbar-hidden":""),'children':[rumext.v2.jsxs("ul",{'data-testid':"toolbar-options",'className':"main_ui_workspace_top_toolbar__main-toolbar-options",'children':[rumext.v2.jsx("li",{'children':rumext.v2.jsx("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.move",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"move","move",-2110884309))], 0)),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.move",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"move","move",-2110884309))], 0)),'onClick':interrupt,'className':"main_ui_workspace_top_toolbar__main-toolbar-options-button"+" "+(((((drawtool == null)) && (cljs.core.not(edition))))?"main_ui_workspace_top_toolbar__selected":""),'children':app.main.ui.icons.move})}),rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("li",{'children':rumext.v2.jsx("button",{'title':test_tooltip_board_text,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.frame",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"draw-frame","draw-frame",657391841))], 0)),'onClick':select_drawtool,'data-tool':"frame",'data-testid':"artboard-btn",'className':"main_ui_workspace_top_toolbar__main-toolbar-options-button"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drawtool,new cljs.core.Keyword(null,"frame","frame",-1711082588)))?"main_ui_workspace_top_toolbar__selected":""),'children':app.main.ui.icons.board})}),rumext.v2.jsx("li",{'children':rumext.v2.jsx("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.rect",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"draw-rect","draw-rect",-1268379642))], 0)),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.rect",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"draw-rect","draw-rect",-1268379642))], 0)),'onClick':select_drawtool,'data-tool':"rect",'data-testid':"rect-btn",'className':"main_ui_workspace_top_toolbar__main-toolbar-options-button"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drawtool,new cljs.core.Keyword(null,"rect","rect",-108902628)))?"main_ui_workspace_top_toolbar__selected":""),'children':app.main.ui.icons.rectangle})}),rumext.v2.jsx("li",{'children':rumext.v2.jsx("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.ellipse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"draw-ellipse","draw-ellipse",-1242523678))], 0)),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.ellipse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"draw-ellipse","draw-ellipse",-1242523678))], 0)),'onClick':select_drawtool,'data-tool':"circle",'data-testid':"ellipse-btn",'className':"main_ui_workspace_top_toolbar__main-toolbar-options-button"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drawtool,new cljs.core.Keyword(null,"circle","circle",1903212362)))?"main_ui_workspace_top_toolbar__selected":""),'children':app.main.ui.icons.elipse})}),rumext.v2.jsx("li",{'children':rumext.v2.jsx("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.text",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"draw-text","draw-text",2017889925))], 0)),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.text",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"draw-text","draw-text",2017889925))], 0)),'onClick':select_drawtool,'data-tool':"text",'className':"main_ui_workspace_top_toolbar__main-toolbar-options-button"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drawtool,new cljs.core.Keyword(null,"text","text",-1790561697)))?"main_ui_workspace_top_toolbar__selected":""),'children':app.main.ui.icons.text})}),rumext.v2.jsx(app.main.ui.workspace.top_toolbar.image_upload,{}),rumext.v2.jsx("li",{'children':rumext.v2.jsx("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.curve",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"draw-curve","draw-curve",1664540671))], 0)),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.curve",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"draw-curve","draw-curve",1664540671))], 0)),'onClick':select_drawtool,'data-tool':"curve",'data-testid':"curve-btn",'className':"main_ui_workspace_top_toolbar__main-toolbar-options-button"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drawtool,new cljs.core.Keyword(null,"curve","curve",-569677866)))?"main_ui_workspace_top_toolbar__selected":""),'children':app.main.ui.icons.curve})}),rumext.v2.jsx("li",{'children':rumext.v2.jsx("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.path",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"draw-path","draw-path",-1562145274))], 0)),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.path",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"draw-path","draw-path",-1562145274))], 0)),'onClick':select_drawtool,'data-tool':"path",'data-testid':"path-btn",'className':"main_ui_workspace_top_toolbar__main-toolbar-options-button"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drawtool,new cljs.core.Keyword(null,"path","path",-188191168)))?"main_ui_workspace_top_toolbar__selected":""),'children':app.main.ui.icons.path})}),(cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"plugins/runtime"))?rumext.v2.jsx("li",{'children':rumext.v2.jsx("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.plugins",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"plugins","plugins",1900073717))], 0)),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.plugins",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"plugins","plugins",1900073717))], 0)),'onClick':(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"open-plugins-manager",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:toolbar"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugin-management","plugin-management",-1941842397),cljs.core.PersistentArrayMap.EMPTY)], 0));
}),'data-tool':"plugins",'data-testid':"plugins-btn",'className':"main_ui_workspace_top_toolbar__main-toolbar-options-button",'children':app.main.ui.icons.puzzle})}):null),(cljs.core.truth_(cljs.core._STAR_assert_STAR_)?rumext.v2.jsx("li",{'children':rumext.v2.jsx("button",{'title':"Debugging tool",'onClick':toggle_debug_panel,'className':"main_ui_workspace_top_toolbar__main-toolbar-options-button"+" "+((cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"debug-panel","debug-panel",-1624930518)))?"main_ui_workspace_top_toolbar__selected":""),'children':app.main.ui.icons.bug})}):null)]})]}),rumext.v2.jsx("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.toolbar.toggle-toolbar"),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.toolbar.toggle-toolbar"),'onClick':toggle_toolbar,'className':"main_ui_workspace_top_toolbar__toolbar-handler",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_top_toolbar__toolbar-handler-btn"})})]});
}
}));

(app.main.ui.workspace.top_toolbar.top_toolbar_STAR_.displayName = "top-toolbar*");


//# sourceMappingURL=app.main.ui.workspace.top_toolbar.js.map
