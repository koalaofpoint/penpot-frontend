import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.main.constants.js";
import "./app.main.data.viewer.js";
import "./app.main.store.js";
import "./app.main.ui.hooks.resize.js";
import "./app.main.ui.inspect.left_sidebar.js";
import "./app.main.ui.inspect.render.js";
import "./app.main.ui.inspect.right_sidebar.js";
import "./app.util.dom.js";
import "./app.util.keyboard.js";
import "./goog.events.events.js";
import "./rumext.v2.js";
import "./goog.events.eventtype.js";
goog.provide('app.main.ui.viewer.inspect');
app.main.ui.viewer.inspect.handle_select_frame = (function app$main$ui$viewer$inspect$handle_select_frame(event){
var frame_id = app.common.data.read_string(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
var origin = app.util.dom.get_target(event);
var over_section_QMARK_ = app.util.dom.class_QMARK_(origin,"inspect-svg-container");
var layout = app.util.dom.get_element("viewer-layout");
var has_force_QMARK_ = app.util.dom.class_QMARK_(layout,"force-visible");
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.select_shape(frame_id));

if(over_section_QMARK_){
if(has_force_QMARK_){
return app.util.dom.remove_class_BANG_(layout,"force-visible");
} else {
return app.util.dom.add_class_BANG_(layout,"force-visible");
}
} else {
return null;
}
});
app.main.ui.viewer.inspect.viewport = (function app$main$ui$viewer$inspect$viewport(props_58652){
var map__58653 = rumext.v2.util.wrap_props(props_58652);
var map__58653__$1 = cljs.core.__destructure_map(map__58653);
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"local","local",-1497766724));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"page","page",849072397));
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var viewer_pagination = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"viewer-pagination","viewer-pagination",-181925280));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var share_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"share-id","share-id",795821204));
var inspect_svg_container_ref = rumext.v2.use_ref(null);
var current_section_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002));
var current_section = cljs.core.deref(current_section_STAR_);
var can_be_expanded_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_section,new cljs.core.Keyword(null,"code","code",1586293142));
var on_mouse_wheel = (function (event){
if(app.util.keyboard.mod_QMARK_(event)){
app.util.dom.prevent_default(event);

var event__$1 = event.getBrowserEvent();
var delta = (event__$1.deltaY + event__$1.deltaX);
if((delta > (0))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.decrease_zoom);
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.increase_zoom);
}
} else {
return null;
}
});
var on_mount = (function (){
var key1 = goog.events.listen(goog.global,goog.events.EventType.WHEEL,on_mouse_wheel,({"passive": false}));
return (function (){
return goog.events.unlistenByKey(key1);
});
});
var map__58654 = app.main.ui.hooks.resize.use_resize_hook.cljs$core$IFn$_invoke$arity$7(new cljs.core.Keyword(null,"code","code",1586293142),app.main.constants.right_sidebar_default_width,app.main.constants.right_sidebar_default_width,app.main.constants.right_sidebar_default_max_width,new cljs.core.Keyword(null,"x","x",2099068185),true,new cljs.core.Keyword(null,"right","right",-452581833));
var map__58654__$1 = cljs.core.__destructure_map(map__58654);
var set_right_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58654__$1,new cljs.core.Keyword(null,"set-size","set-size",-1037159587));
var right_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58654__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var on_pointer_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58654__$1,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138));
var on_lost_pointer_capture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58654__$1,new cljs.core.Keyword(null,"on-lost-pointer-capture","on-lost-pointer-capture",-1554883134));
var on_pointer_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58654__$1,new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695));
var handle_change_section = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (section){
return cljs.core.reset_BANG_(current_section_STAR_,section);
}));
var handle_expand = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(right_size)],(function (){
var G__58655 = (((right_size > app.main.constants.right_sidebar_default_width))?app.main.constants.right_sidebar_default_width:app.main.constants.right_sidebar_default_max_width);
return (set_right_size.cljs$core$IFn$_invoke$arity$1 ? set_right_size.cljs$core$IFn$_invoke$arity$1(G__58655) : set_right_size.call(null,G__58655));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$1(on_mount);

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame))],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.select_shape(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame)));
}));

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.inspect.left_sidebar.left_sidebar,{'frame':frame,'local':local,'page':page}),rumext.v2.jsxs("div",{'id':"inspect-svg-wrapper",'data-value':cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame)], 0)),'onClick':app.main.ui.viewer.inspect.handle_select_frame,'className':"main_ui_viewer_inspect__inspect-svg-wrapper",'children':[rumext.v2.jsx(viewer_pagination,{'index':index,'num-frames':cljs.core.count(new cljs.core.Keyword(null,"frames","frames",1765687497).cljs$core$IFn$_invoke$arity$1(page)),'left-bar':true,'right-bar':true}),rumext.v2.jsx("div",{'id':"inspect-svg-container",'ref':inspect_svg_container_ref,'className':"main_ui_viewer_inspect__inspect-svg-container",'children':rumext.v2.jsx(app.main.ui.inspect.render.render_frame_svg,{'frame':frame,'page':page,'local':local,'size':size})})]}),rumext.v2.jsxs("div",{'style':({"--right-sidebar-width": ((can_be_expanded_QMARK_)?""+(right_size ?? "")+"px":null)}),'className':"main_ui_viewer_inspect__sidebar-container"+" "+(((!(can_be_expanded_QMARK_)))?"main_ui_viewer_inspect__not-expand":"")+" "+((can_be_expanded_QMARK_)?"main_ui_viewer_inspect__expanded":""),'children':[((can_be_expanded_QMARK_)?rumext.v2.jsx("div",{'onPointerDown':on_pointer_down,'onLostPointerCapture':on_lost_pointer_capture,'onPointerMove':on_pointer_move,'className':"main_ui_viewer_inspect__resize-area"}):null),rumext.v2.jsx(app.main.ui.inspect.right_sidebar.right_sidebar_STAR_,{'frame':frame,'selected':new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(local),'page':page,'file':file,'onChangeSection':handle_change_section,'onExpand':handle_expand,'shareId':share_id})]})]});
});

(app.main.ui.viewer.inspect.viewport.displayName = "viewport");


//# sourceMappingURL=app.main.ui.viewer.inspect.js.map
