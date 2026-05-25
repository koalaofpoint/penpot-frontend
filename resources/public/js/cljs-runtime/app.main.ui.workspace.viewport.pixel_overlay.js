import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.math.js";
import "./app.config.js";
import "./app.main.data.modal.js";
import "./app.main.data.workspace.colors.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.fonts.js";
import "./app.main.rasterizer.js";
import "./app.main.store.js";
import "./app.main.ui.css_cursors.js";
import "./app.render_wasm.api.js";
import "./app.util.dom.js";
import "./app.util.globals.js";
import "./app.util.keyboard.js";
import "./app.util.object.js";
import "./beicon.v2.core.js";
import "./goog.events.events.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.viewport.pixel_overlay');
app.main.ui.workspace.viewport.pixel_overlay.create_offscreen_canvas = (function app$main$ui$workspace$viewport$pixel_overlay$create_offscreen_canvas(width,height){
return (new OffscreenCanvas(width,height));
});
app.main.ui.workspace.viewport.pixel_overlay.resize_offscreen_canvas = (function app$main$ui$workspace$viewport$pixel_overlay$resize_offscreen_canvas(canvas,width,height){
var resized = cljs.core.volatile_BANG_(false);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((canvas["width"]),width)){
} else {
app.util.object.set_BANG_(canvas,"width",width);

cljs.core.vreset_BANG_(resized,true);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((canvas["height"]),height)){
} else {
app.util.object.set_BANG_(canvas,"height",height);

cljs.core.vreset_BANG_(resized,true);
}

return canvas;
});
app.main.ui.workspace.viewport.pixel_overlay.get_offscreen_canvas = (function (){
var internal_state = ({"canvas": null});
return (function (width,height){
var canvas = (internal_state["canvas"]);
if(cljs.core.truth_(canvas)){
return app.main.ui.workspace.viewport.pixel_overlay.resize_offscreen_canvas(canvas,width,height);
} else {
var new_canvas = app.main.ui.workspace.viewport.pixel_overlay.create_offscreen_canvas(width,height);
app.util.object.set_BANG_(internal_state,"canvas",new_canvas);

return new_canvas;
}
});
})();
app.main.ui.workspace.viewport.pixel_overlay.process_pointer_move = (function app$main$ui$workspace$viewport$pixel_overlay$process_pointer_move(viewport_node,canvas,canvas_image_data,zoom_view_context,client_x,client_y){
var temp__5825__auto__ = rumext.v2.ref_val(canvas_image_data);
if(cljs.core.truth_(temp__5825__auto__)){
var image_data = temp__5825__auto__;
var temp__5825__auto____$1 = app.util.dom.get_element("picker-detail");
if(cljs.core.truth_(temp__5825__auto____$1)){
var zoom_view_node = temp__5825__auto____$1;
if(cljs.core.truth_(rumext.v2.ref_val(zoom_view_context))){
} else {
rumext.v2.set_ref_val_BANG_(zoom_view_context,zoom_view_node.getContext("2d"));
}

var canvas_width = (260);
var canvas_height = (140);
var map__57121 = app.util.dom.get_bounding_rect(viewport_node);
var map__57121__$1 = cljs.core.__destructure_map(map__57121);
var brx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57121__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var bry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57121__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var x = app.common.math.floor((client_x - brx));
var y = app.common.math.floor((client_y - bry));
var zoom_context = rumext.v2.ref_val(zoom_view_context);
var offset = (((y * (image_data["width"])) + x) * (4));
var rgba = (image_data["data"]);
var r = app.util.object.get.cljs$core$IFn$_invoke$arity$2(rgba,((0) + offset));
var g = app.util.object.get.cljs$core$IFn$_invoke$arity$2(rgba,((1) + offset));
var b = app.util.object.get.cljs$core$IFn$_invoke$arity$2(rgba,((2) + offset));
var a = app.util.object.get.cljs$core$IFn$_invoke$arity$2(rgba,((3) + offset));
var sx = (x - (32));
var sy = ((app.config.check_browser_QMARK_(new cljs.core.Keyword(null,"safari","safari",497115653)))?y:(y - (17)));
var sw = (65);
var sh = (35);
var dx = (0);
var dy = (0);
var dw = canvas_width;
var dh = canvas_height;
if(cljs.core.truth_(app.util.object.get.cljs$core$IFn$_invoke$arity$2(zoom_context,"imageSmoothingEnabled"))){
app.util.object.set_BANG_(zoom_context,"imageSmoothingEnabled",false);
} else {
}

zoom_context.clearRect((0),(0),canvas_width,canvas_height);

zoom_context.drawImage(canvas,sx,sy,sw,sh,dx,dy,dw,dh);

return requestAnimationFrame((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.pick_color(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,a], null)));
}));
} else {
return null;
}
} else {
return null;
}
});
app.main.ui.workspace.viewport.pixel_overlay.pixel_overlay = (function app$main$ui$workspace$viewport$pixel_overlay$pixel_overlay(props_57122){
var props = props_57122;
var vport = (props["vport"]);
var viewport_ref = (props["viewport-ref"]);
var viewport_node = rumext.v2.ref_val(viewport_ref);
var canvas = app.main.ui.workspace.viewport.pixel_overlay.get_offscreen_canvas(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vport),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vport));
var canvas_context = canvas.getContext("2d",({"willReadFrequently": true}));
var canvas_image_data = rumext.v2.use_ref(null);
var zoom_view_context = rumext.v2.use_ref(null);
var canvas_ready = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var initial_mouse_pos = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var update_str = beicon.v2.core.subject();
var handle_keydown = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (event){
if(cljs.core.truth_(app.util.keyboard.esc_QMARK_(event))){
app.util.dom.stop_propagation(event);

app.util.dom.prevent_default(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.stop_picker());

return app.main.data.modal.disallow_click_outside_BANG_();
} else {
return null;
}
}));
var handle_pointer_down_picker = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.undo.start_undo_transaction(new cljs.core.Keyword(null,"mouse-down-picker","mouse-down-picker",-418905630)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.colors.pick_color_select(true,app.util.keyboard.shift_QMARK_(event))], 0));
}));
var handle_pointer_up_picker = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.undo.commit_undo_transaction(new cljs.core.Keyword(null,"mouse-down-picker","mouse-down-picker",-418905630)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.colors.stop_picker()], 0));

return app.main.data.modal.disallow_click_outside_BANG_();
}));
var handle_draw_picker_canvas = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (){
var svg_node = app.util.dom.get_element("render");
var fonts = app.main.fonts.get_node_fonts(svg_node);
var result = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),svg_node,new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vport),new cljs.core.Keyword(null,"result","result",1415092211),"image-bitmap"], null);
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (image_bitmap){
canvas_context.drawImage(image_bitmap,(0),(0));

var width = (canvas["width"]);
var height = (canvas["height"]);
var image_data = canvas_context.getImageData((0),(0),width,height);
rumext.v2.set_ref_val_BANG_(canvas_image_data,image_data);

return cljs.core.reset_BANG_(canvas_ready,true);
}),beicon.v2.core.mapcat(app.main.rasterizer.render_node,beicon.v2.core.map((function (styles){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"styles","styles",1954480375),styles);
}),app.main.fonts.render_font_styles_cached(fonts))));
}));
var handle_svg_change = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (){
return update_str.next(new cljs.core.Keyword(null,"update","update",1045576396));
}));
var handle_mouse_enter = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(viewport_node)],(function (event){
var x = event.clientX;
var y = event.clientY;
return cljs.core.reset_BANG_(initial_mouse_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
}));
var handle_pointer_move_picker = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(viewport_node)],(function (event){
return app.main.ui.workspace.viewport.pixel_overlay.process_pointer_move(viewport_node,canvas,canvas_image_data,zoom_view_context,event.clientX,event.clientY);
}));
if(cljs.core.truth_(app.util.object.get.cljs$core$IFn$_invoke$arity$2(canvas_context,"imageSmoothingEnabled"))){
app.util.object.set_BANG_(canvas_context,"imageSmoothingEnabled",false);
} else {
}

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
var listener = goog.events.listen(app.util.globals.document,"keydown",handle_keydown);
return (function (){
return goog.events.unlistenByKey(listener);
});
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
var sub = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2(handle_draw_picker_canvas,beicon.v2.core.debounce((10),update_str));
return (function (){
return beicon.v2.core.dispose_BANG_(sub);
});
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
var config = ({"attributes": true, "childList": true, "subtree": true, "characterData": true});
var svg_node = app.util.dom.get_element("render");
var observer = (new MutationObserver(handle_svg_change));
observer.observe(svg_node,config);

(handle_svg_change.cljs$core$IFn$_invoke$arity$0 ? handle_svg_change.cljs$core$IFn$_invoke$arity$0() : handle_svg_change.call(null));

return (function (){
return observer.disconnect();
});
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(viewport_node),rumext.v2.adapt(cljs.core.deref(canvas_ready))],(function (){
if(cljs.core.truth_(canvas_ready)){
var map__57123 = cljs.core.deref(initial_mouse_pos);
var map__57123__$1 = cljs.core.__destructure_map(map__57123);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57123__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57123__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return app.main.ui.workspace.viewport.pixel_overlay.process_pointer_move(viewport_node,canvas,canvas_image_data,zoom_view_context,x,y);
} else {
return null;
}
}));

return rumext.v2.jsx("div",{'id':"pixel-overlay",'tabIndex':(0),'onPointerDown':handle_pointer_down_picker,'onPointerUp':handle_pointer_up_picker,'onPointerMove':handle_pointer_move_picker,'onMouseEnter':handle_mouse_enter,'className':""+(app.main.ui.css_cursors.get_static("picker") ?? "")+" "+("main_ui_workspace_viewport_pixel_overlay__pixel-overlay" ?? "")});
});

(app.main.ui.workspace.viewport.pixel_overlay.pixel_overlay.displayName = "pixel-overlay");

app.main.ui.workspace.viewport.pixel_overlay.process_pointer_move_wasm = (function app$main$ui$workspace$viewport$pixel_overlay$process_pointer_move_wasm(viewport_node,canvas,canvas_image_data,zoom_view_context,client_x,client_y){
var temp__5825__auto__ = rumext.v2.ref_val(canvas_image_data);
if(cljs.core.truth_(temp__5825__auto__)){
var image_data = temp__5825__auto__;
var temp__5825__auto____$1 = app.util.dom.get_element("picker-detail");
if(cljs.core.truth_(temp__5825__auto____$1)){
var zoom_view_node = temp__5825__auto____$1;
if(cljs.core.truth_(rumext.v2.ref_val(zoom_view_context))){
} else {
rumext.v2.set_ref_val_BANG_(zoom_view_context,zoom_view_node.getContext("2d"));
}

var zoom_view_width = (260);
var zoom_view_height = (140);
var map__57124 = app.util.dom.get_bounding_rect(viewport_node);
var map__57124__$1 = cljs.core.__destructure_map(map__57124);
var brx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57124__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var bry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57124__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var x = app.common.math.floor((client_x - brx));
var y = app.common.math.floor((client_y - bry));
var canvas_x = (x * app.render_wasm.api.dpr);
var canvas_y = (y * app.render_wasm.api.dpr);
var zoom_context = rumext.v2.ref_val(zoom_view_context);
var inverted_y = (image_data.height - canvas_y);
var offset = (((inverted_y * image_data.width) + canvas_x) * (4));
var rgba = image_data.data;
var r = app.util.object.get.cljs$core$IFn$_invoke$arity$2(rgba,((0) + offset));
var g = app.util.object.get.cljs$core$IFn$_invoke$arity$2(rgba,((1) + offset));
var b = app.util.object.get.cljs$core$IFn$_invoke$arity$2(rgba,((2) + offset));
var a = app.util.object.get.cljs$core$IFn$_invoke$arity$2(rgba,((3) + offset));
var sx = (canvas_x - (32));
var sy = ((app.config.check_browser_QMARK_(new cljs.core.Keyword(null,"safari","safari",497115653)))?canvas_y:(canvas_y - (17)));
var sw = (65);
var sh = (35);
if(cljs.core.truth_(app.util.object.get.cljs$core$IFn$_invoke$arity$2(zoom_context,"imageSmoothingEnabled"))){
app.util.object.set_BANG_(zoom_context,"imageSmoothingEnabled",false);
} else {
}

zoom_context.clearRect((0),(0),zoom_view_width,zoom_view_height);

zoom_context.drawImage(canvas,sx,sy,sw,sh,(0),(0),zoom_view_width,zoom_view_height);

return requestAnimationFrame((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.pick_color(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,a], null)));
}));
} else {
return null;
}
} else {
return null;
}
});
app.main.ui.workspace.viewport.pixel_overlay.pixel_overlay_wasm_STAR_ = (function app$main$ui$workspace$viewport$pixel_overlay$pixel_overlay_wasm_STAR_(props_57125){
var viewport_ref = props_57125.viewportRef;
var canvas_ref = props_57125.canvasRef;
var viewport_node = rumext.v2.ref_val(viewport_ref);
var canvas = rumext.v2.ref_val(canvas_ref);
var canvas_context = rumext.v2.use_ref(null);
var canvas_image_data = rumext.v2.use_ref(null);
var zoom_view_context = rumext.v2.use_ref(null);
var initial_mouse_pos = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var update_str = beicon.v2.core.subject();
var handle_keydown = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (event){
if(cljs.core.truth_(app.util.keyboard.esc_QMARK_(event))){
app.util.dom.stop_propagation(event);

app.util.dom.prevent_default(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.stop_picker());

return app.main.data.modal.disallow_click_outside_BANG_();
} else {
return null;
}
}));
var handle_pointer_down_picker = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.undo.start_undo_transaction(new cljs.core.Keyword(null,"mouse-down-picker","mouse-down-picker",-418905630)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.colors.pick_color_select(true,app.util.keyboard.shift_QMARK_(event))], 0));
}));
var handle_pointer_up_picker = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.undo.commit_undo_transaction(new cljs.core.Keyword(null,"mouse-down-picker","mouse-down-picker",-418905630)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.colors.stop_picker()], 0));

return app.main.data.modal.disallow_click_outside_BANG_();
}));
var handle_draw_picker_canvas = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(canvas_context)],(function (){
var temp__5825__auto__ = rumext.v2.ref_val(canvas_context);
if(cljs.core.truth_(temp__5825__auto__)){
var canvas_context__$1 = temp__5825__auto__;
var width = canvas.width;
var height = canvas.height;
var buffer = (new Uint8ClampedArray(((width * height) * (4))));
var _ = canvas_context__$1.readPixels((0),(0),width,height,canvas_context__$1.RGBA,canvas_context__$1.UNSIGNED_BYTE,buffer);
var image_data = (new ImageData(buffer,width,height));
return rumext.v2.set_ref_val_BANG_(canvas_image_data,image_data);
} else {
return null;
}
}));
var handle_canvas_changed = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (_){
return update_str.next(new cljs.core.Keyword(null,"update","update",1045576396));
}));
var handle_mouse_enter = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(viewport_node)],(function (event){
var x = event.clientX;
var y = event.clientY;
return cljs.core.reset_BANG_(initial_mouse_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
}));
var handle_pointer_move_picker = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(viewport_node)],(function (event){
return app.main.ui.workspace.viewport.pixel_overlay.process_pointer_move_wasm(viewport_node,canvas,canvas_image_data,zoom_view_context,event.clientX,event.clientY);
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(canvas)],(function (){
var context = canvas.getContext("webgl2",({"willReadFrequently": true, "preserveDrawingBuffer": true}));
return rumext.v2.set_ref_val_BANG_(canvas_context,context);
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
var listener = goog.events.listen(app.util.globals.document,"keydown",handle_keydown);
return (function (){
return goog.events.unlistenByKey(listener);
});
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
var sub = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2(handle_draw_picker_canvas,beicon.v2.core.debounce((10),update_str));
return (function (){
return beicon.v2.core.dispose_BANG_(sub);
});
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
(handle_canvas_changed.cljs$core$IFn$_invoke$arity$0 ? handle_canvas_changed.cljs$core$IFn$_invoke$arity$0() : handle_canvas_changed.call(null));

app.util.globals.document.addEventListener("penpot:wasm:render",handle_canvas_changed);

return (function (){
return app.util.globals.document.removeEventListener("penpot:wasm:render",handle_canvas_changed);
});
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(viewport_node),rumext.v2.adapt(canvas),rumext.v2.adapt(canvas_image_data),rumext.v2.adapt(zoom_view_context)],(function (){
if((!((canvas == null)))){
var map__57126 = cljs.core.deref(initial_mouse_pos);
var map__57126__$1 = cljs.core.__destructure_map(map__57126);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57126__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57126__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return app.main.ui.workspace.viewport.pixel_overlay.process_pointer_move_wasm(viewport_node,canvas,canvas_image_data,zoom_view_context,x,y);
} else {
return null;
}
}));

return rumext.v2.jsx("div",{'id':"pixel-overlay",'tabIndex':(0),'onPointerDown':handle_pointer_down_picker,'onPointerUp':handle_pointer_up_picker,'onPointerMove':handle_pointer_move_picker,'onMouseEnter':handle_mouse_enter,'className':""+(app.main.ui.css_cursors.get_static("picker") ?? "")+" "+("main_ui_workspace_viewport_pixel_overlay__pixel-overlay" ?? "")});
});

(app.main.ui.workspace.viewport.pixel_overlay.pixel_overlay_wasm_STAR_.displayName = "pixel-overlay-wasm*");


//# sourceMappingURL=app.main.ui.workspace.viewport.pixel_overlay.js.map
