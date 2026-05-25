import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$react_dom$server.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.exceptions.js";
import "./app.common.files.helpers.js";
import "./app.common.logging.js";
import "./app.common.math.js";
import "./app.common.types.fills.js";
import "./app.common.types.fills.impl.js";
import "./app.common.types.path.js";
import "./app.common.types.path.impl.js";
import "./app.common.types.shape.layout.js";
import "./app.common.types.text.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.refs.js";
import "./app.main.render.js";
import "./app.main.store.js";
import "./app.main.ui.shapes.text.js";
import "./app.main.worker.js";
import "./app.render_wasm.api.fonts.js";
import "./app.render_wasm.api.shapes.js";
import "./app.render_wasm.api.texts.js";
import "./app.render_wasm.api.webgl.js";
import "./app.render_wasm.deserializers.js";
import "./app.render_wasm.helpers.js";
import "./app.render_wasm.mem.js";
import "./app.render_wasm.mem.heap32.js";
import "./app.render_wasm.performance.js";
import "./app.render_wasm.serializers.js";
import "./app.render_wasm.serializers.color.js";
import "./app.render_wasm.svg_filters.js";
import "./app.render_wasm.text_editor.js";
import "./app.render_wasm.wasm.js";
import "./app.util.debug.js";
import "./app.util.dom.js";
import "./app.util.functions.js";
import "./app.util.globals.js";
import "./app.util.modules.js";
import "./app.util.text.content.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./promesa.core.js";
import "./rumext.v2.js";
goog.provide('app.render_wasm.api');
app.render_wasm.api.use_dpr_QMARK_ = cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"render-wasm-dpr","render-wasm-dpr",286455414));
app.render_wasm.api.UUID_U8_SIZE = (16);
app.render_wasm.api.UUID_U32_SIZE = ((16) / (4));
app.render_wasm.api.MODIFIER_U8_SIZE = (40);
app.render_wasm.api.MODIFIER_U32_SIZE = ((40) / (4));
app.render_wasm.api.MODIFIER_TRANSFORM_U8_OFFSET_SIZE = (16);
app.render_wasm.api.INPUT_MODIFIER_U8_SIZE = (44);
app.render_wasm.api.INPUT_MODIFIER_U32_SIZE = ((44) / (4));
app.render_wasm.api.GRID_LAYOUT_ROW_U8_SIZE = (8);
app.render_wasm.api.GRID_LAYOUT_COLUMN_U8_SIZE = (8);
app.render_wasm.api.GRID_LAYOUT_CELL_U8_SIZE = (36);
app.render_wasm.api.MAX_BUFFER_CHUNK_SIZE = ((256) * (1024));
app.render_wasm.api.DEBOUNCE_DELAY_MS = (100);
app.render_wasm.api.THROTTLE_DELAY_MS = (10);
app.render_wasm.api.SHAPES_CHUNK_SIZE = (100);
app.render_wasm.api.ASYNC_THRESHOLD = (100);
app.render_wasm.api.capture_canvas_pixels = app.render_wasm.api.webgl.capture_canvas_pixels;
app.render_wasm.api.restore_previous_canvas_pixels = app.render_wasm.api.webgl.restore_previous_canvas_pixels;
app.render_wasm.api.clear_canvas_pixels = app.render_wasm.api.webgl.clear_canvas_pixels;
app.render_wasm.api.text_editor_start = app.render_wasm.text_editor.text_editor_start;
app.render_wasm.api.text_editor_stop = app.render_wasm.text_editor.text_editor_stop;
app.render_wasm.api.text_editor_set_cursor_from_point = app.render_wasm.text_editor.text_editor_set_cursor_from_point;
app.render_wasm.api.text_editor_is_active_QMARK_ = app.render_wasm.text_editor.text_editor_is_active_QMARK_;
app.render_wasm.api.text_editor_sync_content = app.render_wasm.text_editor.text_editor_sync_content;
app.render_wasm.api.dpr = ((app.render_wasm.api.use_dpr_QMARK_)?(((typeof window !== 'undefined'))?window.devicePixelRatio:1.0):1.0);
app.render_wasm.api.noop_fn = cljs.core.constantly(null);
/**
 * Returns a promise that resolves after yielding to the browser's event loop.
 * Uses requestAnimationFrame for smooth visual updates during loading.
 */
app.render_wasm.api.yield_to_browser = (function app$render_wasm$api$yield_to_browser(){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,_reject){
return requestAnimationFrame((function (_){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(null) : resolve.call(null,null));
}));
}));
});
app.render_wasm.api.object_svg = (function app$render_wasm$api$object_svg(props_55487){
var shape = props_55487.shape;
var props = props_55487;
var objects = rumext.v2.deref(app.main.refs.workspace_page_objects);
var shape_wrapper = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape)],(function (){
return app.main.render.shape_wrapper_factory(objects);
}));
return rumext.v2.jsx("svg",{'version':"1.1",'xmlns':"http://www.w3.org/2000/svg",'xmlnsXlink':"http://www.w3.org/1999/xlink",'fill':"none",'children':rumext.v2.jsx(shape_wrapper,{'shape':shape})});
});

(app.render_wasm.api.object_svg.displayName = "object-svg");

app.render_wasm.api.get_static_markup = (function app$render_wasm$api$get_static_markup(shape){
return shadow.js.shim.module$react_dom$server.renderToStaticMarkup(rumext.v2.element.cljs$core$IFn$_invoke$arity$2(app.render_wasm.api.object_svg,({"shape": shape})));
});

app.render_wasm.api.render = (function app$render_wasm$api$render(timestamp){
if(((app.render_wasm.wasm.context_initialized_QMARK_) && (cljs.core.not(cljs.core.deref(app.render_wasm.wasm.context_lost_QMARK_))))){
var fn_55488_55813 = (app.render_wasm.wasm.internal_module["_render"]);
fn_55488_55813(timestamp);

try{if(app.render_wasm.wasm.context_initialized_QMARK_){
app.render_wasm.text_editor.text_editor_update_blink(timestamp);

var runtime_features_55814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"features-runtime","features-runtime",-389800627));
var enabled_features_55815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"features","features",-1146962336));
if(((cljs.core.contains_QMARK_(runtime_features_55814,"text-editor-wasm/v1")) || (cljs.core.contains_QMARK_(enabled_features_55815,"text-editor-wasm/v1")))){
app.render_wasm.text_editor.text_editor_render_overlay();
} else {
}

var ev_55816 = app.render_wasm.text_editor.text_editor_poll_event();
if(cljs.core.truth_((function (){var and__5023__auto__ = ev_55816;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ev_55816,(0));
} else {
return and__5023__auto__;
}
})())){
(app.render_wasm.api.request_render.cljs$core$IFn$_invoke$arity$1 ? app.render_wasm.api.request_render.cljs$core$IFn$_invoke$arity$1("text-editor-event") : app.render_wasm.api.request_render.call(null,"text-editor-event"));
} else {
}
} else {
}
}catch (e55489){var e_55817 = e55489;
console.error("text-editor overlay/update failed:",e_55817);
}
(app.render_wasm.wasm.internal_frame_id = null);

return app.util.globals.dispatch_BANG_(app.util.globals.event("penpot:wasm:render"));
} else {
return null;
}
});
app.render_wasm.api.render_sync = (function app$render_wasm$api$render_sync(){
if(((app.render_wasm.wasm.context_initialized_QMARK_) && (cljs.core.not(cljs.core.deref(app.render_wasm.wasm.context_lost_QMARK_))))){
var fn_55490_55818 = (app.render_wasm.wasm.internal_module["_render_sync"]);
fn_55490_55818();

return (app.render_wasm.wasm.internal_frame_id = null);
} else {
return null;
}
});
app.render_wasm.api.render_sync_shape = (function app$render_wasm$api$render_sync_shape(id){
if(((app.render_wasm.wasm.context_initialized_QMARK_) && (cljs.core.not(cljs.core.deref(app.render_wasm.wasm.context_lost_QMARK_))))){
var buffer = app.common.uuid.get_u32(id);
var fn_55491_55819 = (app.render_wasm.wasm.internal_module["_render_sync_shape"]);
fn_55491_55819((buffer[(0)]),(buffer[(1)]),(buffer[(2)]),(buffer[(3)]));

return (app.render_wasm.wasm.internal_frame_id = null);
} else {
return null;
}
});
/**
 * Render a lightweight preview without tile caching.
 * Used during progressive loading for fast feedback.
 */
app.render_wasm.api.render_preview_BANG_ = (function app$render_wasm$api$render_preview_BANG_(){
if(((app.render_wasm.wasm.context_initialized_QMARK_) && (cljs.core.not(cljs.core.deref(app.render_wasm.wasm.context_lost_QMARK_))))){
var fn_55492 = (app.render_wasm.wasm.internal_module["_render_preview"]);
return fn_55492();
} else {
return null;
}
});
if((typeof app !== 'undefined') && (typeof app.render_wasm !== 'undefined') && (typeof app.render_wasm.api !== 'undefined') && (typeof app.render_wasm.api.pending_render !== 'undefined')){
} else {
app.render_wasm.api.pending_render = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof app !== 'undefined') && (typeof app.render_wasm !== 'undefined') && (typeof app.render_wasm.api !== 'undefined') && (typeof app.render_wasm.api.shapes_loading_QMARK_ !== 'undefined')){
} else {
app.render_wasm.api.shapes_loading_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof app !== 'undefined') && (typeof app.render_wasm !== 'undefined') && (typeof app.render_wasm.api !== 'undefined') && (typeof app.render_wasm.api.deferred_render_QMARK_ !== 'undefined')){
} else {
app.render_wasm.api.deferred_render_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
app.render_wasm.api.register_deferred_render_BANG_ = (function app$render_wasm$api$register_deferred_render_BANG_(){
return cljs.core.reset_BANG_(app.render_wasm.api.deferred_render_QMARK_,true);
});
app.render_wasm.api.request_render = (function app$render_wasm$api$request_render(_requester){
if(((app.render_wasm.wasm.context_initialized_QMARK_) && (cljs.core.not(cljs.core.deref(app.render_wasm.wasm.context_lost_QMARK_))))){
if(cljs.core.truth_(cljs.core.deref(app.render_wasm.api.shapes_loading_QMARK_))){
return app.render_wasm.api.register_deferred_render_BANG_();
} else {
if(cljs.core.truth_(cljs.core.deref(app.render_wasm.api.pending_render))){
return null;
} else {
cljs.core.reset_BANG_(app.render_wasm.api.pending_render,true);

var frame_id = requestAnimationFrame((function (ts){
cljs.core.reset_BANG_(app.render_wasm.api.pending_render,false);

(app.render_wasm.wasm.internal_frame_id = null);

return app.render_wasm.api.render(ts);
}));
return (app.render_wasm.wasm.internal_frame_id = frame_id);
}
}
} else {
return null;
}
});
app.render_wasm.api.begin_shapes_loading_BANG_ = (function app$render_wasm$api$begin_shapes_loading_BANG_(){
cljs.core.reset_BANG_(app.render_wasm.api.shapes_loading_QMARK_,true);

var frame_id = app.render_wasm.wasm.internal_frame_id;
var was_pending = cljs.core.deref(app.render_wasm.api.pending_render);
if(cljs.core.truth_(frame_id)){
cancelAnimationFrame(frame_id);

(app.render_wasm.wasm.internal_frame_id = null);
} else {
}

cljs.core.reset_BANG_(app.render_wasm.api.pending_render,false);

return cljs.core.reset_BANG_(app.render_wasm.api.deferred_render_QMARK_,was_pending);
});
app.render_wasm.api.end_shapes_loading_BANG_ = (function app$render_wasm$api$end_shapes_loading_BANG_(){
var was_loading = cljs.core.compare_and_set_BANG_(app.render_wasm.api.shapes_loading_QMARK_,true,false);
cljs.core.reset_BANG_(app.render_wasm.api.deferred_render_QMARK_,false);

if(was_loading){
return app.render_wasm.api.request_render("set-objects:flush");
} else {
return null;
}
});
app.render_wasm.api.use_shape = (function app$render_wasm$api$use_shape(id){
if(app.render_wasm.wasm.context_initialized_QMARK_){
var buffer = app.common.uuid.get_u32(id);
var fn_55493 = (app.render_wasm.wasm.internal_module["_use_shape"]);
return fn_55493((buffer[(0)]),(buffer[(1)]),(buffer[(2)]),(buffer[(3)]));
} else {
return null;
}
});
/**
 * This function sets shape text content and returns a stream that loads the needed fonts asynchronously
 */
app.render_wasm.api.set_shape_text_content = (function app$render_wasm$api$set_shape_text_content(shape_id,content){
app.render_wasm.text_editor.cache_shape_text_content_BANG_(shape_id,content);

var fn_55494_55821 = (app.render_wasm.wasm.internal_module["_clear_shape_text"]);
fn_55494_55821();

var G__55495_55822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(content,new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333));
(app.render_wasm.api.set_shape_vertical_align.cljs$core$IFn$_invoke$arity$1 ? app.render_wasm.api.set_shape_vertical_align.cljs$core$IFn$_invoke$arity$1(G__55495_55822) : app.render_wasm.api.set_shape_vertical_align.call(null,G__55495_55822));

var fonts = app.render_wasm.api.fonts.get_content_fonts(content);
var fallback_fonts = (app.render_wasm.api.fonts_from_text_content.cljs$core$IFn$_invoke$arity$2 ? app.render_wasm.api.fonts_from_text_content.cljs$core$IFn$_invoke$arity$2(content,true) : app.render_wasm.api.fonts_from_text_content.call(null,content,true));
var all_fonts = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fonts,fallback_fonts);
var result = app.render_wasm.api.fonts.store_fonts(all_fonts);
app.render_wasm.api.fonts.load_fallback_fonts_for_editor_BANG_(fallback_fonts);

var fn_55496_55827 = (app.render_wasm.wasm.internal_module["_update_shape_text_layout"]);
fn_55496_55827();

return result;
});
/**
 * Apply style attrs to the currently selected text spans.
 * Updates the cached content, pushes to WASM, and returns {:shape-id :content} for saving.
 */
app.render_wasm.api.apply_style_to_selection = (function app$render_wasm$api$apply_style_to_selection(attrs){
return app.render_wasm.text_editor.apply_style_to_selection(attrs,app.render_wasm.api.use_shape,app.render_wasm.api.set_shape_text_content);
});
app.render_wasm.api.update_text_rect_BANG_ = (function app$render_wasm$api$update_text_rect_BANG_(id){
if(app.render_wasm.wasm.context_initialized_QMARK_){
return app.main.worker.emit_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cmd","cmd",-302931143),new cljs.core.Keyword("index","update-text-rect","index/update-text-rect",-937315909),new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)),new cljs.core.Keyword(null,"shape-id","shape-id",981169327),id,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),(app.render_wasm.api.get_text_dimensions.cljs$core$IFn$_invoke$arity$1 ? app.render_wasm.api.get_text_dimensions.cljs$core$IFn$_invoke$arity$1(id) : app.render_wasm.api.get_text_dimensions.call(null,id))], null));
} else {
return null;
}
});
/**
 * Guarantee that the shape always sends a valid text tree to WASM. When the
 *   content is nil (freshly created text) we fall back to
 *   tc/default-text-content so the renderer receives typography information.
 */
app.render_wasm.api.ensure_text_content = (function app$render_wasm$api$ensure_text_content(content){
var or__5025__auto__ = content;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.text.content.v2_default_text_content();
}
});
app.render_wasm.api.set_parent_id = (function app$render_wasm$api$set_parent_id(id){
var buffer = app.common.uuid.get_u32(id);
var fn_55497 = (app.render_wasm.wasm.internal_module["_set_parent"]);
return fn_55497((buffer[(0)]),(buffer[(1)]),(buffer[(2)]),(buffer[(3)]));
});
app.render_wasm.api.set_shape_clip_content = (function app$render_wasm$api$set_shape_clip_content(clip_content){
var fn_55498 = (app.render_wasm.wasm.internal_module["_set_shape_clip_content"]);
return fn_55498(clip_content);
});
app.render_wasm.api.set_shape_type = (function app$render_wasm$api$set_shape_type(type){
var fn_55499 = (app.render_wasm.wasm.internal_module["_set_shape_type"]);
return fn_55499(app.render_wasm.serializers.translate_shape_type(type));
});
app.render_wasm.api.set_masked = (function app$render_wasm$api$set_masked(masked){
var fn_55500 = (app.render_wasm.wasm.internal_module["_set_shape_masked_group"]);
return fn_55500(masked);
});
app.render_wasm.api.set_shape_selrect = (function app$render_wasm$api$set_shape_selrect(selrect){
var fn_55501 = (app.render_wasm.wasm.internal_module["_set_shape_selrect"]);
return fn_55501((selrect?.x1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x1","x1",-1863922247))),(selrect?.y1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y1","y1",589123466))),(selrect?.x2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x2","x2",-1362513475))),(selrect?.y2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y2","y2",-718691301))));
});
app.render_wasm.api.set_shape_transform = (function app$render_wasm$api$set_shape_transform(transform){
var fn_55502 = (app.render_wasm.wasm.internal_module["_set_shape_transform"]);
return fn_55502((transform?.a?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(transform,new cljs.core.Keyword(null,"a","a",-2123407586))),(transform?.b?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(transform,new cljs.core.Keyword(null,"b","b",1482224470))),(transform?.c?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(transform,new cljs.core.Keyword(null,"c","c",-1763192079))),(transform?.d?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(transform,new cljs.core.Keyword(null,"d","d",1972142424))),(transform?.e?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(transform,new cljs.core.Keyword(null,"e","e",1381269198))),(transform?.f?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(transform,new cljs.core.Keyword(null,"f","f",-1597136552))));
});
app.render_wasm.api.set_shape_rotation = (function app$render_wasm$api$set_shape_rotation(rotation){
var fn_55503 = (app.render_wasm.wasm.internal_module["_set_shape_rotation"]);
return fn_55503(rotation);
});
app.render_wasm.api.set_shape_children = (function app$render_wasm$api$set_shape_children(children){
performance.mark("set-shape-children::begin");

var children_55838__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.uuid_QMARK_),children);
var G__55504_55839 = cljs.core.count(children_55838__$1);
switch (G__55504_55839) {
case (0):
var fn_55505_55841 = (app.render_wasm.wasm.internal_module["_set_children_0"]);
fn_55505_55841();

break;
case (1):
var vec__55506_55842 = children_55838__$1;
var c1_55843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55506_55842,(0),null);
var c1_55844__$1 = app.common.uuid.get_u32(c1_55843);
var fn_55509_55845 = (app.render_wasm.wasm.internal_module["_set_children_1"]);
fn_55509_55845((c1_55844__$1[(0)]),(c1_55844__$1[(1)]),(c1_55844__$1[(2)]),(c1_55844__$1[(3)]));

break;
case (2):
var vec__55510_55846 = children_55838__$1;
var c1_55847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55510_55846,(0),null);
var c2_55848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55510_55846,(1),null);
var c1_55849__$1 = app.common.uuid.get_u32(c1_55847);
var c2_55850__$1 = app.common.uuid.get_u32(c2_55848);
var fn_55513_55851 = (app.render_wasm.wasm.internal_module["_set_children_2"]);
fn_55513_55851((c1_55849__$1[(0)]),(c1_55849__$1[(1)]),(c1_55849__$1[(2)]),(c1_55849__$1[(3)]),(c2_55850__$1[(0)]),(c2_55850__$1[(1)]),(c2_55850__$1[(2)]),(c2_55850__$1[(3)]));

break;
case (3):
var vec__55514_55852 = children_55838__$1;
var c1_55853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55514_55852,(0),null);
var c2_55854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55514_55852,(1),null);
var c3_55855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55514_55852,(2),null);
var c1_55856__$1 = app.common.uuid.get_u32(c1_55853);
var c2_55857__$1 = app.common.uuid.get_u32(c2_55854);
var c3_55858__$1 = app.common.uuid.get_u32(c3_55855);
var fn_55517_55859 = (app.render_wasm.wasm.internal_module["_set_children_3"]);
fn_55517_55859((c1_55856__$1[(0)]),(c1_55856__$1[(1)]),(c1_55856__$1[(2)]),(c1_55856__$1[(3)]),(c2_55857__$1[(0)]),(c2_55857__$1[(1)]),(c2_55857__$1[(2)]),(c2_55857__$1[(3)]),(c3_55858__$1[(0)]),(c3_55858__$1[(1)]),(c3_55858__$1[(2)]),(c3_55858__$1[(3)]));

break;
case (4):
var vec__55518_55860 = children_55838__$1;
var c1_55861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55518_55860,(0),null);
var c2_55862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55518_55860,(1),null);
var c3_55863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55518_55860,(2),null);
var c4_55864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55518_55860,(3),null);
var c1_55865__$1 = app.common.uuid.get_u32(c1_55861);
var c2_55866__$1 = app.common.uuid.get_u32(c2_55862);
var c3_55867__$1 = app.common.uuid.get_u32(c3_55863);
var c4_55868__$1 = app.common.uuid.get_u32(c4_55864);
var fn_55521_55869 = (app.render_wasm.wasm.internal_module["_set_children_4"]);
fn_55521_55869((c1_55865__$1[(0)]),(c1_55865__$1[(1)]),(c1_55865__$1[(2)]),(c1_55865__$1[(3)]),(c2_55866__$1[(0)]),(c2_55866__$1[(1)]),(c2_55866__$1[(2)]),(c2_55866__$1[(3)]),(c3_55867__$1[(0)]),(c3_55867__$1[(1)]),(c3_55867__$1[(2)]),(c3_55867__$1[(3)]),(c4_55868__$1[(0)]),(c4_55868__$1[(1)]),(c4_55868__$1[(2)]),(c4_55868__$1[(3)]));

break;
case (5):
var vec__55522_55870 = children_55838__$1;
var c1_55871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55522_55870,(0),null);
var c2_55872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55522_55870,(1),null);
var c3_55873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55522_55870,(2),null);
var c4_55874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55522_55870,(3),null);
var c5_55875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55522_55870,(4),null);
var c1_55876__$1 = app.common.uuid.get_u32(c1_55871);
var c2_55877__$1 = app.common.uuid.get_u32(c2_55872);
var c3_55878__$1 = app.common.uuid.get_u32(c3_55873);
var c4_55879__$1 = app.common.uuid.get_u32(c4_55874);
var c5_55880__$1 = app.common.uuid.get_u32(c5_55875);
var fn_55525_55881 = (app.render_wasm.wasm.internal_module["_set_children_5"]);
fn_55525_55881((c1_55876__$1[(0)]),(c1_55876__$1[(1)]),(c1_55876__$1[(2)]),(c1_55876__$1[(3)]),(c2_55877__$1[(0)]),(c2_55877__$1[(1)]),(c2_55877__$1[(2)]),(c2_55877__$1[(3)]),(c3_55878__$1[(0)]),(c3_55878__$1[(1)]),(c3_55878__$1[(2)]),(c3_55878__$1[(3)]),(c4_55879__$1[(0)]),(c4_55879__$1[(1)]),(c4_55879__$1[(2)]),(c4_55879__$1[(3)]),(c5_55880__$1[(0)]),(c5_55880__$1[(1)]),(c5_55880__$1[(2)]),(c5_55880__$1[(3)]));

break;
default:
var heap_55882 = app.render_wasm.mem.get_heap_u32();
var size_55883 = app.render_wasm.mem.get_alloc_size(children_55838__$1,(16));
var offset_55884 = app.render_wasm.mem.alloc__GT_offset_32(size_55883);
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (offset__$1,id){
return app.render_wasm.mem.heap32.write_uuid(offset__$1,heap_55882,id);
}),offset_55884,children_55838__$1);

var fn_55526_55886 = (app.render_wasm.wasm.internal_module["_set_children"]);
fn_55526_55886();

}

performance.mark("set-shape-children::end");

performance.measure("set-shape-children",(function (){var obj55528 = ({"start":"set-shape-children::begin","end":"set-shape-children::end","detail":({})});
return obj55528;
})());

return null;
});
app.render_wasm.api.get_string_length = (function app$render_wasm$api$get_string_length(string){
return (cljs.core.count(string) + (1));
});
/**
 * Registers a WebGL texture with Emscripten's GL object system and returns its ID
 */
app.render_wasm.api.get_texture_id_for_gl_object = (function app$render_wasm$api$get_texture_id_for_gl_object(texture){
var gl_obj = (app.render_wasm.wasm.internal_module["GL"]);
var textures = gl_obj.textures;
var new_id = gl_obj.getNewId(textures);
(textures[new_id] = texture);

return new_id;
});
app.render_wasm.api.retrieve_image = (function app$render_wasm$api$retrieve_image(url){
return beicon.v2.core.from(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(fetch(url),(function (response){
return response.blob();
})),(function (image){
return createImageBitmap(image);
})));
});
/**
 * Loads an image and creates a WebGL texture from it, passing the texture ID to WASM.
 * This avoids decoding the image twice (once in browser, once in WASM).
 */
app.render_wasm.api.fetch_image = (function app$render_wasm$api$fetch_image(shape_id,image_id,thumbnail_QMARK_){
var url = app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),image_id], null),thumbnail_QMARK_);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),url,new cljs.core.Keyword(null,"thumbnail?","thumbnail?",1872474018),thumbnail_QMARK_,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (){
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (cause){
if(app.common.logging.enabled_QMARK_("app.render-wasm.api",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"Could not fetch image"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image-id","image-id",-988480565),image_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thumbnail?","thumbnail?",1872474018),thumbnail_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),url], null)], null);
}),null)),cause,null,"app.render-wasm.api",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}


return beicon.v2.core.empty();
}),beicon.v2.core.map((function (img){
var temp__5825__auto__ = app.render_wasm.api.webgl.get_webgl_context();
if(cljs.core.truth_(temp__5825__auto__)){
var gl = temp__5825__auto__;
var texture = app.render_wasm.api.webgl.create_webgl_texture_from_image(gl,img);
var texture_id = app.render_wasm.api.get_texture_id_for_gl_object(texture);
var width = img.width;
var height = img.height;
var total_bytes = (48);
var offset = app.render_wasm.mem.alloc__GT_offset_32(total_bytes);
var heap32 = app.render_wasm.mem.get_heap_u32();
app.render_wasm.mem.heap32.write_uuid(offset,heap32,shape_id);

app.render_wasm.mem.heap32.write_uuid((offset + (4)),heap32,image_id);

(heap32[(offset + (8))] = (cljs.core.truth_(thumbnail_QMARK_)?(1):(0)));

(heap32[(offset + (9))] = texture_id);

(heap32[(offset + (10))] = width);

(heap32[(offset + (11))] = height);

var fn_55531_55890 = (app.render_wasm.wasm.internal_module["_store_image_from_texture"]);
fn_55531_55890();

return true;
} else {
return null;
}
}),app.render_wasm.api.retrieve_image(url)));
})], null);
});
app.render_wasm.api.get_fill_images = (function app$render_wasm$api$get_fill_images(leaf){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(leaf));
});
app.render_wasm.api.process_fill_image = (function app$render_wasm$api$process_fill_image(shape_id,fill,thumbnail_QMARK_){
var temp__5825__auto__ = new cljs.core.Keyword(null,"fill-image","fill-image",-99895848).cljs$core$IFn$_invoke$arity$1(fill);
if(cljs.core.truth_(temp__5825__auto__)){
var image = temp__5825__auto__;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(image,new cljs.core.Keyword(null,"id","id",-1388402092));
var buffer = app.common.uuid.get_u32(id);
var cached_image_QMARK_ = (function (){var fn_55532 = (app.render_wasm.wasm.internal_module["_is_image_cached"]);
return fn_55532((buffer[(0)]),(buffer[(1)]),(buffer[(2)]),(buffer[(3)]),thumbnail_QMARK_);
})();
if((cached_image_QMARK_ === (0))){
return app.render_wasm.api.fetch_image(shape_id,id,thumbnail_QMARK_);
} else {
return null;
}
} else {
return null;
}
});
app.render_wasm.api.set_shape_text_images = (function app$render_wasm$api$set_shape_text_images(var_args){
var G__55536 = arguments.length;
switch (G__55536) {
case 2:
return app.render_wasm.api.set_shape_text_images.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.render_wasm.api.set_shape_text_images.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.render_wasm.api.set_shape_text_images.cljs$core$IFn$_invoke$arity$2 = (function (shape_id,content){
return app.render_wasm.api.set_shape_text_images.cljs$core$IFn$_invoke$arity$3(shape_id,content,false);
}));

(app.render_wasm.api.set_shape_text_images.cljs$core$IFn$_invoke$arity$3 = (function (shape_id,content,thumbnail_QMARK_){
var paragraph_set = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(content,new cljs.core.Keyword(null,"children","children",-940561982)));
var paragraphs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paragraph_set,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55533_SHARP_){
return app.render_wasm.api.process_fill_image(shape_id,p1__55533_SHARP_,thumbnail_QMARK_);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(app.render_wasm.api.get_fill_images,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([paragraphs], 0))], 0)));
}));

(app.render_wasm.api.set_shape_text_images.cljs$lang$maxFixedArity = 3);

app.render_wasm.api.set_shape_fills = (function app$render_wasm$api$set_shape_fills(shape_id,fills,thumbnail_QMARK_){
if(cljs.core.empty_QMARK_(fills)){
var fn_55537 = (app.render_wasm.wasm.internal_module["_clear_shape_fills"]);
return fn_55537();
} else {
var fills__$1 = app.common.types.fills.coerce(fills);
var offset = app.render_wasm.mem.alloc__GT_offset_32(app.common.types.fills.get_byte_size(fills__$1));
var heap = app.render_wasm.mem.get_heap_u32();
app.common.types.fills.write_to(fills__$1,heap,offset);

var fn_55538_55892 = (app.render_wasm.wasm.internal_module["_set_shape_fills"]);
fn_55538_55892();

return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (id){
var buffer = app.common.uuid.get_u32(id);
var cached_image_QMARK_ = (function (){var fn_55539 = (app.render_wasm.wasm.internal_module["_is_image_cached"]);
return fn_55539((buffer[(0)]),(buffer[(1)]),(buffer[(2)]),(buffer[(3)]),thumbnail_QMARK_);
})();
if((cached_image_QMARK_ === (0))){
return app.render_wasm.api.fetch_image(shape_id,id,thumbnail_QMARK_);
} else {
return null;
}
}),app.common.types.fills.get_image_ids(fills__$1));
}
});
app.render_wasm.api.set_shape_strokes = (function app$render_wasm$api$set_shape_strokes(shape_id,strokes,thumbnail_QMARK_){
var fn_55540_55896 = (app.render_wasm.wasm.internal_module["_clear_shape_strokes"]);
fn_55540_55896();

return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (stroke){
var opacity = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159).cljs$core$IFn$_invoke$arity$1(stroke);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return 1.0;
}
})();
var color = new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937).cljs$core$IFn$_invoke$arity$1(stroke);
var gradient = new cljs.core.Keyword(null,"stroke-color-gradient","stroke-color-gradient",-195812260).cljs$core$IFn$_invoke$arity$1(stroke);
var image = new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214).cljs$core$IFn$_invoke$arity$1(stroke);
var width = new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$1(stroke);
var align = new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340).cljs$core$IFn$_invoke$arity$1(stroke);
var style = app.render_wasm.serializers.translate_stroke_style(new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146).cljs$core$IFn$_invoke$arity$1(stroke));
var cap_start = app.render_wasm.serializers.translate_stroke_cap(new cljs.core.Keyword(null,"stroke-cap-start","stroke-cap-start",-2018645757).cljs$core$IFn$_invoke$arity$1(stroke));
var cap_end = app.render_wasm.serializers.translate_stroke_cap(new cljs.core.Keyword(null,"stroke-cap-end","stroke-cap-end",-411370737).cljs$core$IFn$_invoke$arity$1(stroke));
var offset = app.render_wasm.mem.alloc(app.common.types.fills.impl.FILL_U8_SIZE);
var heap = app.render_wasm.mem.get_heap_u8();
var dview = (new DataView(heap.buffer));
var G__55541_55900 = align;
var G__55541_55901__$1 = (((G__55541_55900 instanceof cljs.core.Keyword))?G__55541_55900.fqn:null);
switch (G__55541_55901__$1) {
case "inner":
var fn_55542_55903 = (app.render_wasm.wasm.internal_module["_add_shape_inner_stroke"]);
fn_55542_55903(width,style,cap_start,cap_end);

break;
case "outer":
var fn_55543_55904 = (app.render_wasm.wasm.internal_module["_add_shape_outer_stroke"]);
fn_55543_55904(width,style,cap_start,cap_end);

break;
default:
var fn_55544_55905 = (app.render_wasm.wasm.internal_module["_add_shape_center_stroke"]);
fn_55544_55905(width,style,cap_start,cap_end);

}

if((!((gradient == null)))){
app.common.types.fills.impl.write_gradient_fill(offset,dview,opacity,gradient);

var fn_55545 = (app.render_wasm.wasm.internal_module["_add_shape_stroke_fill"]);
return fn_55545();
} else {
if((!((image == null)))){
var image_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(image,new cljs.core.Keyword(null,"id","id",-1388402092));
var buffer = app.common.uuid.get_u32(image_id);
var cached_image_QMARK_ = (function (){var fn_55546 = (app.render_wasm.wasm.internal_module["_is_image_cached"]);
return fn_55546((buffer[(0)]),(buffer[(1)]),(buffer[(2)]),(buffer[(3)]),thumbnail_QMARK_);
})();
app.common.types.fills.impl.write_image_fill(offset,dview,opacity,image);

var fn_55547_55906 = (app.render_wasm.wasm.internal_module["_add_shape_stroke_fill"]);
fn_55547_55906();

if((cached_image_QMARK_ === (0))){
return app.render_wasm.api.fetch_image(shape_id,image_id,thumbnail_QMARK_);
} else {
return null;
}
} else {
if((!((color == null)))){
app.common.types.fills.impl.write_solid_fill(offset,dview,opacity,color);

var fn_55548 = (app.render_wasm.wasm.internal_module["_add_shape_stroke_fill"]);
return fn_55548();
} else {
return null;
}
}
}
}),strokes);
});
app.render_wasm.api.set_shape_svg_attrs = (function app$render_wasm$api$set_shape_svg_attrs(attrs){
var style = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs);
var allowed_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),null,new cljs.core.Keyword(null,"fillRule","fillRule",-1827524923),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),null,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),null,new cljs.core.Keyword(null,"strokeLinejoin","strokeLinejoin",-721488076),null,new cljs.core.Keyword(null,"strokeLinecap","strokeLinecap",-1974748357),null], null), null);
var attrs__$1 = cljs.core.select_keys(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"style","style",-496642736)),style], 0)),allowed_keys);
var fill_rule = app.render_wasm.serializers.translate_fill_rule((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598).cljs$core$IFn$_invoke$arity$1(attrs__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"fillRule","fillRule",-1827524923).cljs$core$IFn$_invoke$arity$1(attrs__$1);
}
})());
var stroke_linecap = app.render_wasm.serializers.translate_stroke_linecap((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248).cljs$core$IFn$_invoke$arity$1(attrs__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"strokeLinecap","strokeLinecap",-1974748357).cljs$core$IFn$_invoke$arity$1(attrs__$1);
}
})());
var stroke_linejoin = app.render_wasm.serializers.translate_stroke_linejoin((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406).cljs$core$IFn$_invoke$arity$1(attrs__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"strokeLinejoin","strokeLinejoin",-721488076).cljs$core$IFn$_invoke$arity$1(attrs__$1);
}
})());
var fill_none = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("none",new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(attrs__$1));
var fn_55549 = (app.render_wasm.wasm.internal_module["_set_shape_svg_attrs"]);
return fn_55549(fill_rule,stroke_linecap,stroke_linejoin,fill_none);
});
/**
 * Upload path content in chunks to WASM.
 */
app.render_wasm.api.set_shape_path_content = (function app$render_wasm$api$set_shape_path_content(content){
var chunk_size = cljs.core.quot(app.render_wasm.api.MAX_BUFFER_CHUNK_SIZE,(4));
var buffer_size = app.common.types.path.get_byte_size(content);
var padded_size = ((4) * app.common.math.ceil((buffer_size / (4))));
var buffer = (new Uint8Array(padded_size));
app.common.types.path.write_to(content,buffer.buffer,(0));

var fn_55550_55908 = (app.render_wasm.wasm.internal_module["_start_shape_path_buffer"]);
fn_55550_55908();

var heapu32_55909 = app.render_wasm.mem.get_heap_u32();
var offset_55910 = (0);
while(true){
if((offset_55910 < padded_size)){
var end_55911 = (function (){var x__5113__auto__ = padded_size;
var y__5114__auto__ = (offset_55910 + (chunk_size * (4)));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var chunk_55912 = buffer.subarray(offset_55910,end_55911);
var chunk_u32_55913 = (new Uint32Array(chunk_55912.buffer,chunk_55912.byteOffset,cljs.core.quot(chunk_55912.length,(4))));
var offset_size_55914 = chunk_u32_55913.length;
var heap_offset_55915 = app.render_wasm.mem.alloc__GT_offset_32(((4) * offset_size_55914));
heapu32_55909.set(chunk_u32_55913,heap_offset_55915);

var fn_55552_55916 = (app.render_wasm.wasm.internal_module["_set_shape_path_chunk_buffer"]);
fn_55552_55916();

var G__55918 = end_55911;
offset_55910 = G__55918;
continue;
} else {
}
break;
}

var fn_55553 = (app.render_wasm.wasm.internal_module["_set_shape_path_buffer"]);
return fn_55553();
});
app.render_wasm.api.set_shape_svg_raw_content = (function app$render_wasm$api$set_shape_svg_raw_content(content){
var size = app.render_wasm.api.get_string_length(content);
var offset = app.render_wasm.mem.alloc(size);
var fn_55554_55920 = (app.render_wasm.wasm.internal_module["stringToUTF8"]);
fn_55554_55920(content,offset,size);

var fn_55555 = (app.render_wasm.wasm.internal_module["_set_shape_svg_raw_content"]);
return fn_55555();
});
app.render_wasm.api.set_shape_blend_mode = (function app$render_wasm$api$set_shape_blend_mode(blend_mode){
var fn_55556 = (app.render_wasm.wasm.internal_module["_set_shape_blend_mode"]);
return fn_55556(app.render_wasm.serializers.translate_blend_mode(blend_mode));
});
app.render_wasm.api.set_shape_vertical_align = (function app$render_wasm$api$set_shape_vertical_align(vertical_align){
var fn_55557 = (app.render_wasm.wasm.internal_module["_set_shape_vertical_align"]);
return fn_55557(app.render_wasm.serializers.translate_vertical_align(vertical_align));
});
app.render_wasm.api.set_shape_opacity = (function app$render_wasm$api$set_shape_opacity(opacity){
var fn_55558 = (app.render_wasm.wasm.internal_module["_set_shape_opacity"]);
return fn_55558((function (){var or__5025__auto__ = opacity;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})());
});
app.render_wasm.api.set_constraints_h = (function app$render_wasm$api$set_constraints_h(constraint){
if(cljs.core.truth_(constraint)){
var fn_55559 = (app.render_wasm.wasm.internal_module["_set_shape_constraint_h"]);
return fn_55559(app.render_wasm.serializers.translate_constraint_h(constraint));
} else {
return null;
}
});
app.render_wasm.api.set_constraints_v = (function app$render_wasm$api$set_constraints_v(constraint){
if(cljs.core.truth_(constraint)){
var fn_55560 = (app.render_wasm.wasm.internal_module["_set_shape_constraint_v"]);
return fn_55560(app.render_wasm.serializers.translate_constraint_v(constraint));
} else {
return null;
}
});
app.render_wasm.api.set_shape_constraints = (function app$render_wasm$api$set_shape_constraints(constraint_h,constraint_v){
var fn_55561_55922 = (app.render_wasm.wasm.internal_module["_clear_shape_constraints"]);
fn_55561_55922();

app.render_wasm.api.set_constraints_h(constraint_h);

return app.render_wasm.api.set_constraints_v(constraint_v);
});
app.render_wasm.api.set_shape_hidden = (function app$render_wasm$api$set_shape_hidden(hidden){
var fn_55562 = (app.render_wasm.wasm.internal_module["_set_shape_hidden"]);
return fn_55562(hidden);
});
app.render_wasm.api.set_shape_bool_type = (function app$render_wasm$api$set_shape_bool_type(bool_type){
var fn_55563 = (app.render_wasm.wasm.internal_module["_set_shape_bool_type"]);
return fn_55563(app.render_wasm.serializers.translate_bool_type(bool_type));
});
app.render_wasm.api.set_shape_blur = (function app$render_wasm$api$set_shape_blur(blur){
if((!((blur == null)))){
var type = app.render_wasm.serializers.translate_blur_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(blur));
var hidden = new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(blur);
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(blur);
var fn_55564 = (app.render_wasm.wasm.internal_module["_set_shape_blur"]);
return fn_55564(type,hidden,value);
} else {
var fn_55565 = (app.render_wasm.wasm.internal_module["_clear_shape_blur"]);
return fn_55565();
}
});
app.render_wasm.api.set_shape_corners = (function app$render_wasm$api$set_shape_corners(corners){
var vec__55567 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55566_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(p1__55566_SHARP_,(0));
}),corners);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55567,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55567,(1),null);
var r3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55567,(2),null);
var r4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55567,(3),null);
var fn_55570 = (app.render_wasm.wasm.internal_module["_set_shape_corners"]);
return fn_55570(r1,r2,r3,r4);
});
app.render_wasm.api.set_flex_layout = (function app$render_wasm$api$set_flex_layout(shape){
var dir = app.render_wasm.serializers.translate_layout_flex_dir(cljs.core.get.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670),new cljs.core.Keyword(null,"row","row",-570139521)));
var gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911));
var row_gap = cljs.core.get.cljs$core$IFn$_invoke$arity$3(gap,new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),(0));
var column_gap = cljs.core.get.cljs$core$IFn$_invoke$arity$3(gap,new cljs.core.Keyword(null,"column-gap","column-gap",384822863),(0));
var align_items = app.render_wasm.serializers.translate_layout_align_items(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895)));
var align_content = app.render_wasm.serializers.translate_layout_align_content(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473)));
var justify_items = app.render_wasm.serializers.translate_layout_justify_items(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-justify-items","layout-justify-items",1271685173)));
var justify_content = app.render_wasm.serializers.translate_layout_justify_content(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134)));
var wrap_type = app.render_wasm.serializers.translate_layout_wrap_type(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-wrap-type","layout-wrap-type",186626597)));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747));
var padding_top = cljs.core.get.cljs$core$IFn$_invoke$arity$3(padding,new cljs.core.Keyword(null,"p1","p1",-936759954),(0));
var padding_right = cljs.core.get.cljs$core$IFn$_invoke$arity$3(padding,new cljs.core.Keyword(null,"p2","p2",905500641),(0));
var padding_bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(padding,new cljs.core.Keyword(null,"p3","p3",1731040739),(0));
var padding_left = cljs.core.get.cljs$core$IFn$_invoke$arity$3(padding,new cljs.core.Keyword(null,"p4","p4",-1090126814),(0));
var fn_55571 = (app.render_wasm.wasm.internal_module["_set_flex_layout_data"]);
return fn_55571(dir,row_gap,column_gap,align_items,align_content,justify_items,justify_content,wrap_type,padding_top,padding_right,padding_bottom,padding_left);
});
app.render_wasm.api.set_grid_layout_data = (function app$render_wasm$api$set_grid_layout_data(shape){
var dir = app.render_wasm.serializers.translate_layout_grid_dir(cljs.core.get.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"layout-grid-dir","layout-grid-dir",1868849661),new cljs.core.Keyword(null,"row","row",-570139521)));
var gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911));
var row_gap = cljs.core.get.cljs$core$IFn$_invoke$arity$3(gap,new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),(0));
var column_gap = cljs.core.get.cljs$core$IFn$_invoke$arity$3(gap,new cljs.core.Keyword(null,"column-gap","column-gap",384822863),(0));
var align_items = app.render_wasm.serializers.translate_layout_align_items(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895)));
var align_content = app.render_wasm.serializers.translate_layout_align_content(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473)));
var justify_items = app.render_wasm.serializers.translate_layout_justify_items(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-justify-items","layout-justify-items",1271685173)));
var justify_content = app.render_wasm.serializers.translate_layout_justify_content(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134)));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747));
var padding_top = cljs.core.get.cljs$core$IFn$_invoke$arity$3(padding,new cljs.core.Keyword(null,"p1","p1",-936759954),(0));
var padding_right = cljs.core.get.cljs$core$IFn$_invoke$arity$3(padding,new cljs.core.Keyword(null,"p2","p2",905500641),(0));
var padding_bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(padding,new cljs.core.Keyword(null,"p3","p3",1731040739),(0));
var padding_left = cljs.core.get.cljs$core$IFn$_invoke$arity$3(padding,new cljs.core.Keyword(null,"p4","p4",-1090126814),(0));
var fn_55574 = (app.render_wasm.wasm.internal_module["_set_grid_layout_data"]);
return fn_55574(dir,row_gap,column_gap,align_items,align_content,justify_items,justify_content,padding_top,padding_right,padding_bottom,padding_left);
});
app.render_wasm.api.set_grid_layout_rows = (function app$render_wasm$api$set_grid_layout_rows(entries){
var size = app.render_wasm.mem.get_alloc_size(entries,(8));
var offset = app.render_wasm.mem.alloc(size);
var dview = app.render_wasm.mem.get_data_view();
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (offset__$1,p__55579){
var map__55581 = p__55579;
var map__55581__$1 = cljs.core.__destructure_map(map__55581);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55581__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55581__$1,new cljs.core.Keyword(null,"value","value",305978217));
return app.render_wasm.mem.assert_written(app.render_wasm.mem.write_f32((app.render_wasm.mem.write_u8(offset__$1,dview,app.render_wasm.serializers.translate_grid_track_type(type)) + (3)),dview,value),offset__$1,(8));
}),offset,entries);

var fn_55582 = (app.render_wasm.wasm.internal_module["_set_grid_rows"]);
return fn_55582();
});
app.render_wasm.api.set_grid_layout_columns = (function app$render_wasm$api$set_grid_layout_columns(entries){
var size = app.render_wasm.mem.get_alloc_size(entries,(8));
var offset = app.render_wasm.mem.alloc(size);
var dview = app.render_wasm.mem.get_data_view();
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (offset__$1,p__55588){
var map__55589 = p__55588;
var map__55589__$1 = cljs.core.__destructure_map(map__55589);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55589__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55589__$1,new cljs.core.Keyword(null,"value","value",305978217));
return app.render_wasm.mem.assert_written(app.render_wasm.mem.write_f32((app.render_wasm.mem.write_u8(offset__$1,dview,app.render_wasm.serializers.translate_grid_track_type(type)) + (3)),dview,value),offset__$1,(8));
}),offset,entries);

var fn_55590 = (app.render_wasm.wasm.internal_module["_set_grid_columns"]);
return fn_55590();
});
app.render_wasm.api.set_grid_layout_cells = (function app$render_wasm$api$set_grid_layout_cells(cells){
var size = app.render_wasm.mem.get_alloc_size(cells,(36));
var offset = app.render_wasm.mem.alloc(size);
var dview = app.render_wasm.mem.get_data_view();
cljs.core.reduce_kv((function (offset__$1,_,cell){
var shape_id = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,new cljs.core.Keyword(null,"shapes","shapes",1897594879)));
return app.render_wasm.mem.assert_written(app.render_wasm.mem.write_uuid((app.render_wasm.mem.write_u8(app.render_wasm.mem.write_u8(app.render_wasm.mem.write_i32(app.render_wasm.mem.write_i32(app.render_wasm.mem.write_i32(app.render_wasm.mem.write_i32(offset__$1,dview,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,new cljs.core.Keyword(null,"row","row",-570139521))),dview,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,new cljs.core.Keyword(null,"row-span","row-span",-365554241))),dview,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,new cljs.core.Keyword(null,"column","column",2078222095))),dview,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,new cljs.core.Keyword(null,"column-span","column-span",1302376857))),dview,app.render_wasm.serializers.translate_align_self(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,new cljs.core.Keyword(null,"align-self","align-self",1475936794)))),dview,app.render_wasm.serializers.translate_justify_self(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605)))) + (2)),dview,app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(shape_id,app.common.uuid.zero)),offset__$1,(36));
}),offset,cells);

var fn_55591 = (app.render_wasm.wasm.internal_module["_set_grid_cells"]);
return fn_55591();
});
app.render_wasm.api.set_grid_layout = (function app$render_wasm$api$set_grid_layout(shape){
app.render_wasm.api.set_grid_layout_data(shape);

app.render_wasm.api.set_grid_layout_rows(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947)));

app.render_wasm.api.set_grid_layout_columns(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864)));

return app.render_wasm.api.set_grid_layout_cells(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187)));
});
app.render_wasm.api.set_layout_data = (function app$render_wasm$api$set_layout_data(shape){
var margins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708));
var margin_top = cljs.core.get.cljs$core$IFn$_invoke$arity$3(margins,new cljs.core.Keyword(null,"m1","m1",-108094626),(0));
var margin_right = cljs.core.get.cljs$core$IFn$_invoke$arity$3(margins,new cljs.core.Keyword(null,"m2","m2",-587003306),(0));
var margin_bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(margins,new cljs.core.Keyword(null,"m3","m3",-703635357),(0));
var margin_left = cljs.core.get.cljs$core$IFn$_invoke$arity$3(margins,new cljs.core.Keyword(null,"m4","m4",-1624571215),(0));
var h_sizing = app.render_wasm.serializers.translate_layout_sizing(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527)));
var v_sizing = app.render_wasm.serializers.translate_layout_sizing(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641)));
var align_self = app.render_wasm.serializers.translate_align_self(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-item-align-self","layout-item-align-self",-1976194692)));
var max_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307));
var has_max_h = (!((max_h == null)));
var min_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548));
var has_min_h = (!((min_h == null)));
var max_w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366));
var has_max_w = (!((max_w == null)));
var min_w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548));
var has_min_w = (!((min_w == null)));
var is_absolute = cljs.core.boolean$(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-item-absolute","layout-item-absolute",1832387265)));
var z_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-item-z-index","layout-item-z-index",728479455));
var fn_55598 = (app.render_wasm.wasm.internal_module["_set_layout_data"]);
return fn_55598(margin_top,margin_right,margin_bottom,margin_left,h_sizing,v_sizing,has_max_h,app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(max_h,(0)),has_min_h,app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(min_h,(0)),has_max_w,app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(max_w,(0)),has_min_w,app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(min_w,(0)),app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(align_self,(0)),is_absolute,app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(z_index,(0)));
});
app.render_wasm.api.has_any_layout_prop_QMARK_ = (function app$render_wasm$api$has_any_layout_prop_QMARK_(shape){
return cljs.core.some((function (p1__55599_SHARP_){
return (((p1__55599_SHARP_ instanceof cljs.core.Keyword)) && (cuerdas.core.starts_with_QMARK_(cljs.core.name(p1__55599_SHARP_),"layout-")));
}),cljs.core.keys(shape));
});
app.render_wasm.api.clear_layout = (function app$render_wasm$api$clear_layout(){
var fn_55602 = (app.render_wasm.wasm.internal_module["_clear_shape_layout"]);
return fn_55602();
});
app.render_wasm.api.set_shape_layout = (function app$render_wasm$api$set_shape_layout(shape){
app.render_wasm.api.clear_layout();

if(app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
app.render_wasm.api.set_flex_layout(shape);
} else {
}

if(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return app.render_wasm.api.set_grid_layout(shape);
} else {
return null;
}
});
app.render_wasm.api.set_shape_shadows = (function app$render_wasm$api$set_shape_shadows(shadows){
var fn_55603_55926 = (app.render_wasm.wasm.internal_module["_clear_shape_shadows"]);
fn_55603_55926();

return cljs.core.run_BANG_((function (shadow__$1){
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow__$1,new cljs.core.Keyword(null,"blur","blur",-453500461));
var rgba = app.render_wasm.serializers.color.hex__GT_u32argb(cljs.core.get.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"color","color",1011675173)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"opacity","opacity",397153780)));
var hidden = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow__$1,new cljs.core.Keyword(null,"hidden","hidden",-312506092));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow__$1,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow__$1,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008));
var spread = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow__$1,new cljs.core.Keyword(null,"spread","spread",862337191));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var fn_55604 = (app.render_wasm.wasm.internal_module["_add_shape_shadow"]);
return fn_55604(rgba,blur,spread,x,y,app.render_wasm.serializers.translate_shadow_style(style),hidden);
}),shadows);
});
app.render_wasm.api.fonts_from_text_content = (function app$render_wasm$api$fonts_from_text_content(content,fallback_fonts_only_QMARK_){
var paragraph_set = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(content,new cljs.core.Keyword(null,"children","children",-940561982)));
var paragraphs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paragraph_set,new cljs.core.Keyword(null,"children","children",-940561982));
var total = cljs.core.count(paragraphs);
var index = (0);
var emoji_QMARK_ = false;
var langs = cljs.core.PersistentHashSet.EMPTY;
while(true){
if((index < total)){
var paragraph = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(paragraphs,index);
var spans = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paragraph,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.empty_QMARK_(cljs.core.seq(spans))){
var G__55928 = (index + (1));
var G__55929 = emoji_QMARK_;
var G__55930 = langs;
index = G__55928;
emoji_QMARK_ = G__55929;
langs = G__55930;
continue;
} else {
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),spans));
var emoji_QMARK___$1 = (cljs.core.truth_(emoji_QMARK_)?emoji_QMARK_:app.render_wasm.api.texts.contains_emoji_QMARK_(text));
var langs__$1 = app.render_wasm.api.texts.collect_used_languages(langs,text);
if(cljs.core.truth_(fallback_fonts_only_QMARK_)){
app.render_wasm.api.texts.write_shape_text(spans,paragraph,text);
} else {
}

var G__55931 = (index + (1));
var G__55932 = emoji_QMARK___$1;
var G__55933 = langs__$1;
index = G__55931;
emoji_QMARK_ = G__55932;
langs = G__55933;
continue;
}
} else {
var updated_fonts = app.render_wasm.api.fonts.add_noto_fonts((function (){var G__55609 = cljs.core.PersistentHashSet.EMPTY;
if(emoji_QMARK_){
return app.render_wasm.api.fonts.add_emoji_font(G__55609);
} else {
return G__55609;
}
})(),langs);
var fallback_fonts = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (index,emoji_QMARK_,langs,updated_fonts,paragraph_set,paragraphs,total){
return (function (p1__55605_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__55605_SHARP_,new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356));
});})(index,emoji_QMARK_,langs,updated_fonts,paragraph_set,paragraphs,total))
,updated_fonts);
if(cljs.core.truth_(fallback_fonts_only_QMARK_)){
return updated_fonts;
} else {
return fallback_fonts;
}
}
break;
}
});
app.render_wasm.api.set_shape_grow_type = (function app$render_wasm$api$set_shape_grow_type(grow_type){
var fn_55611 = (app.render_wasm.wasm.internal_module["_set_shape_grow_type"]);
return fn_55611(app.render_wasm.serializers.translate_grow_type(grow_type));
});
app.render_wasm.api.get_text_dimensions = (function app$render_wasm$api$get_text_dimensions(var_args){
var G__55613 = arguments.length;
switch (G__55613) {
case 1:
return app.render_wasm.api.get_text_dimensions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return app.render_wasm.api.get_text_dimensions.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.render_wasm.api.get_text_dimensions.cljs$core$IFn$_invoke$arity$1 = (function (id){
app.render_wasm.api.use_shape(id);

return app.render_wasm.api.get_text_dimensions.cljs$core$IFn$_invoke$arity$0();
}));

(app.render_wasm.api.get_text_dimensions.cljs$core$IFn$_invoke$arity$0 = (function (){
var offset = app.render_wasm.mem.__GT_offset_32((function (){var fn_55614 = (app.render_wasm.wasm.internal_module["_get_text_dimensions"]);
return fn_55614();
})());
var heapf32 = app.render_wasm.mem.get_heap_f32();
var width = (heapf32[(offset + (0))]);
var height = (heapf32[(offset + (1))]);
var max_width = (heapf32[(offset + (2))]);
var x = (heapf32[(offset + (3))]);
var y = (heapf32[(offset + (4))]);
app.render_wasm.mem.free();

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width], null);
}));

(app.render_wasm.api.get_text_dimensions.cljs$lang$maxFixedArity = 1);

app.render_wasm.api.intersect_position_in_shape = (function app$render_wasm$api$intersect_position_in_shape(id,position){
var buffer = app.common.uuid.get_u32(id);
var result = (function (){var fn_55615 = (app.render_wasm.wasm.internal_module["_intersect_position_in_shape"]);
return fn_55615((buffer[(0)]),(buffer[(1)]),(buffer[(2)]),(buffer[(3)]),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position));
})();
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result,(1));
});
app.render_wasm.api.render_finish = (function (){var do_render = (function app$render_wasm$api$do_render(ts){
if(app.render_wasm.wasm.context_initialized_QMARK_){
performance.mark("render-finish::begin");

var fn_55623_55938 = (app.render_wasm.wasm.internal_module["_set_view_end"]);
fn_55623_55938();

app.render_wasm.api.render(ts);

performance.mark("render-finish::end");

return performance.measure("render-finish",(function (){var obj55625 = ({"start":"render-finish::begin","end":"render-finish::end","detail":({})});
return obj55625;
})());
} else {
return null;
}
});
return app.util.functions.debounce.cljs$core$IFn$_invoke$arity$2(do_render,(100));
})();
app.render_wasm.api.render_pan = (function (){var do_render_pan = (function app$render_wasm$api$do_render_pan(ts){
if(app.render_wasm.wasm.context_initialized_QMARK_){
performance.mark("render-pan::begin");

app.render_wasm.api.render(ts);

performance.mark("render-pan::end");

return performance.measure("render-pan",(function (){var obj55633 = ({"start":"render-pan::begin","end":"render-pan::end","detail":({})});
return obj55633;
})());
} else {
return null;
}
});
return app.util.functions.throttle.cljs$core$IFn$_invoke$arity$2(do_render_pan,(10));
})();
app.render_wasm.api.set_view_box = (function app$render_wasm$api$set_view_box(prev_zoom,zoom,vbox){
var is_pan = app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(prev_zoom,zoom);
performance.mark("set-view-box::begin");

var fn_55638_55939 = (app.render_wasm.wasm.internal_module["_set_view_start"]);
fn_55638_55939();

var fn_55639_55940 = (app.render_wasm.wasm.internal_module["_set_view"]);
fn_55639_55940(zoom,(- new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox)),(- new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox)));

if(cljs.core.truth_(is_pan)){
performance.mark("set-view-box::end");

performance.measure("set-view-box",(function (){var obj55641 = ({"start":"set-view-box::begin","end":"set-view-box::end","detail":({})});
return obj55641;
})());

performance.mark("set-view-box::pan::begin");

(app.render_wasm.api.render_pan.cljs$core$IFn$_invoke$arity$0 ? app.render_wasm.api.render_pan.cljs$core$IFn$_invoke$arity$0() : app.render_wasm.api.render_pan.call(null));

(app.render_wasm.api.render_finish.cljs$core$IFn$_invoke$arity$0 ? app.render_wasm.api.render_finish.cljs$core$IFn$_invoke$arity$0() : app.render_wasm.api.render_finish.call(null));

performance.mark("set-view-box::pan::end");

return performance.measure("set-view-box::pan",(function (){var obj55645 = ({"start":"set-view-box::pan::begin","end":"set-view-box::pan::end","detail":({})});
return obj55645;
})());
} else {
performance.mark("set-view-box::end");

performance.measure("set-view-box",(function (){var obj55651 = ({"start":"set-view-box::begin","end":"set-view-box::end","detail":({})});
return obj55651;
})());

performance.mark("set-view-box::zoom::begin");

var fn_55654_55942 = (app.render_wasm.wasm.internal_module["_render_from_cache"]);
fn_55654_55942((0));

(app.render_wasm.api.render_finish.cljs$core$IFn$_invoke$arity$0 ? app.render_wasm.api.render_finish.cljs$core$IFn$_invoke$arity$0() : app.render_wasm.api.render_finish.call(null));

performance.mark("set-view-box::zoom::end");

return performance.measure("set-view-box::zoom",(function (){var obj55656 = ({"start":"set-view-box::zoom::begin","end":"set-view-box::zoom::end","detail":({})});
return obj55656;
})());
}
});
app.render_wasm.api.set_object = (function app$render_wasm$api$set_object(shape){
performance.mark("set-object::begin");

var shape__$1 = app.render_wasm.svg_filters.apply_svg_derived(shape);
var id = (shape__$1?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"id","id",-1388402092)));
var type = (shape__$1?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"type","type",1174270348)));
var masked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"masked-group","masked-group",1899947873));
var fills = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"fills","fills",902966780));
var strokes = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"group","group",582596132)))?cljs.core.PersistentVector.EMPTY:cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"strokes","strokes",-1645650952)));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var content = (function (){var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"content","content",15833224));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"text","text",-1790561697))){
return app.render_wasm.api.ensure_text_content(content);
} else {
return content;
}
})();
var bool_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"bool-type","bool-type",-1094918459));
var grow_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"grow-type","grow-type",-908344411));
var blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"blur","blur",-453500461));
var svg_attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772));
var shadows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
app.render_wasm.api.shapes.set_shape_base_props(shape__$1);

app.render_wasm.api.set_shape_children(children);

app.render_wasm.api.set_shape_blur(blur);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"group","group",582596132))){
app.render_wasm.api.set_masked(cljs.core.boolean$(masked));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"bool","bool",1444635321))){
app.render_wasm.api.set_shape_bool_type(bool_type);
} else {
}

if((((!((content == null)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"path","path",-188191168))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"bool","bool",1444635321))))))){
app.render_wasm.api.set_shape_path_content(content);
} else {
}

if((!((svg_attrs == null)))){
app.render_wasm.api.set_shape_svg_attrs(svg_attrs);
} else {
}

if((((!((content == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"svg-raw","svg-raw",-594329202))))){
app.render_wasm.api.set_shape_svg_raw_content(app.render_wasm.api.get_static_markup(shape__$1));
} else {
}

app.render_wasm.api.set_shape_shadows(shadows);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"text","text",-1790561697))){
app.render_wasm.api.set_shape_grow_type(grow_type);
} else {
}

app.render_wasm.api.set_shape_layout(shape__$1);

app.render_wasm.api.set_layout_data(shape__$1);

var pending_thumbnails = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(app.render_wasm.api.set_shape_text_content(id,content),app.render_wasm.api.set_shape_text_images.cljs$core$IFn$_invoke$arity$3(id,content,true),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.render_wasm.api.set_shape_fills(id,fills,true),app.render_wasm.api.set_shape_strokes(id,strokes,true)], 0)));
var pending_full = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(app.render_wasm.api.set_shape_text_images.cljs$core$IFn$_invoke$arity$3(id,content,false),app.render_wasm.api.set_shape_fills(id,fills,false),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.render_wasm.api.set_shape_strokes(id,strokes,false)], 0)));
performance.mark("set-object::end");

performance.measure("set-object",(function (){var obj55669 = ({"start":"set-object::begin","end":"set-object::end","detail":({})});
return obj55669;
})());

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572),pending_thumbnails,new cljs.core.Keyword(null,"full","full",436801220),pending_full], null);
});
app.render_wasm.api.update_text_layouts = (function app$render_wasm$api$update_text_layouts(shapes){
return cljs.core.run_BANG_((function (id){
app.render_wasm.api.fonts.update_text_layout(id);

return app.render_wasm.api.update_text_rect_BANG_(id);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.text_shape_QMARK_,shapes)));
});
app.render_wasm.api.process_pending = (function app$render_wasm$api$process_pending(var_args){
var G__55674 = arguments.length;
switch (G__55674) {
case 4:
return app.render_wasm.api.process_pending.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return app.render_wasm.api.process_pending.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.render_wasm.api.process_pending.cljs$core$IFn$_invoke$arity$4 = (function (shapes,thumbnails,full,on_complete){
return app.render_wasm.api.process_pending.cljs$core$IFn$_invoke$arity$5(shapes,thumbnails,full,null,on_complete);
}));

(app.render_wasm.api.process_pending.cljs$core$IFn$_invoke$arity$5 = (function (shapes,thumbnails,full,on_render,on_complete){
var pending_thumbnails = app.common.data.index_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"callback","callback",-705136228),thumbnails);
var pending_full = app.common.data.index_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"callback","callback",-705136228),full);
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$4((function (_){
app.render_wasm.api.update_text_layouts(shapes);

if(cljs.core.truth_(on_render)){
return (on_render.cljs$core$IFn$_invoke$arity$0 ? on_render.cljs$core$IFn$_invoke$arity$0() : on_render.call(null));
} else {
return app.render_wasm.api.request_render("pending-finished");
}
}),app.render_wasm.api.noop_fn,on_complete,beicon.v2.core.concat(beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,beicon.v2.core.merge_map((function (callback){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
}),beicon.v2.core.from(cljs.core.vals(pending_thumbnails)))),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,beicon.v2.core.mapcat((function (callback){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
}),beicon.v2.core.from(cljs.core.vals(pending_full))))));
}));

(app.render_wasm.api.process_pending.cljs$lang$maxFixedArity = 5);

app.render_wasm.api.process_object = (function app$render_wasm$api$process_object(shape){
var map__55679 = app.render_wasm.api.set_object(shape);
var map__55679__$1 = cljs.core.__destructure_map(map__55679);
var thumbnails = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55679__$1,new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572));
var full = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55679__$1,new cljs.core.Keyword(null,"full","full",436801220));
return app.render_wasm.api.process_pending.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null),thumbnails,full,app.render_wasm.api.noop_fn);
});
/**
 * Process a chunk of shapes synchronously, returning accumulated pending operations.
 * Returns {:thumbnails [...] :full [...] :next-index n}
 */
app.render_wasm.api.process_shapes_chunk = (function app$render_wasm$api$process_shapes_chunk(shapes,start_index,chunk_size,thumbnails_acc,full_acc){
var total = cljs.core.count(shapes);
var end_index = (function (){var x__5113__auto__ = total;
var y__5114__auto__ = (start_index + chunk_size);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var index = start_index;
var t_acc = thumbnails_acc;
var f_acc = full_acc;
while(true){
if((index < end_index)){
var shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,index);
var map__55680 = app.render_wasm.api.set_object(shape);
var map__55680__$1 = cljs.core.__destructure_map(map__55680);
var thumbnails = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55680__$1,new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572));
var full = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55680__$1,new cljs.core.Keyword(null,"full","full",436801220));
var G__55949 = (index + (1));
var G__55950 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(t_acc,thumbnails);
var G__55951 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(f_acc,full);
index = G__55949;
t_acc = G__55950;
f_acc = G__55951;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572),t_acc,new cljs.core.Keyword(null,"full","full",436801220),f_acc,new cljs.core.Keyword(null,"next-index","next-index",-711843894),end_index], null);
}
break;
}
});
/**
 * Asynchronously process shapes in chunks, yielding to the browser between chunks.
 * Returns a promise that resolves when all shapes are processed.
 * 
 * Renders a preview only periodically during loading to show progress,
 * then does a full tile-based render at the end.
 */
app.render_wasm.api.set_objects_async = (function app$render_wasm$api$set_objects_async(shapes,render_callback){
var total_shapes = cljs.core.count(shapes);
var total_chunks = app.common.math.ceil((total_shapes / (100)));
var render_at_chunks = cljs.core.set(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.math.floor((total_chunks * 0.25)),app.common.math.floor((total_chunks * 0.5)),app.common.math.floor((total_chunks * 0.75))], null));
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,_reject){
var process_next_chunk = (function app$render_wasm$api$set_objects_async_$_process_next_chunk(index,thumbnails_acc,full_acc,chunk_count){
if((index < total_shapes)){
var map__55693 = app.render_wasm.api.process_shapes_chunk(shapes,index,(100),thumbnails_acc,full_acc);
var map__55693__$1 = cljs.core.__destructure_map(map__55693);
var thumbnails = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572));
var full = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"full","full",436801220));
var next_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"next-index","next-index",-711843894));
var new_chunk_count = (chunk_count + (1));
if(cljs.core.contains_QMARK_(render_at_chunks,new_chunk_count)){
app.render_wasm.api.render_preview_BANG_();
} else {
}

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(app.render_wasm.api.yield_to_browser(),(function (_){
return app$render_wasm$api$set_objects_async_$_process_next_chunk(next_index,thumbnails,full,new_chunk_count);
}));
} else {
performance.mark("set-objects::end");

performance.measure("set-objects",(function (){var obj55696 = ({"start":"set-objects::begin","end":"set-objects::end","detail":({})});
return obj55696;
})());

return app.render_wasm.api.process_pending.cljs$core$IFn$_invoke$arity$5(shapes,thumbnails_acc,full_acc,app.render_wasm.api.noop_fn,(function (){
app.render_wasm.api.end_shapes_loading_BANG_();

if(cljs.core.truth_(render_callback)){
(render_callback.cljs$core$IFn$_invoke$arity$0 ? render_callback.cljs$core$IFn$_invoke$arity$0() : render_callback.call(null));
} else {
(app.render_wasm.api.render_finish.cljs$core$IFn$_invoke$arity$0 ? app.render_wasm.api.render_finish.cljs$core$IFn$_invoke$arity$0() : app.render_wasm.api.render_finish.call(null));
}

app.util.globals.dispatch_BANG_(app.util.globals.event("penpot:wasm:set-objects"));

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(null) : resolve.call(null,null));
}));
}
});
return process_next_chunk((0),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,(0));
}));
});
/**
 * Synchronously process all shapes (for small shape counts).
 */
app.render_wasm.api.set_objects_sync = (function app$render_wasm$api$set_objects_sync(shapes,render_callback){
var total_shapes = cljs.core.count(shapes);
var map__55705 = (function (){var index = (0);
var thumbnails_acc = cljs.core.PersistentVector.EMPTY;
var full_acc = cljs.core.PersistentVector.EMPTY;
while(true){
if((index < total_shapes)){
var shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,index);
var map__55710 = app.render_wasm.api.set_object(shape);
var map__55710__$1 = cljs.core.__destructure_map(map__55710);
var thumbnails = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55710__$1,new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572));
var full = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55710__$1,new cljs.core.Keyword(null,"full","full",436801220));
var G__55957 = (index + (1));
var G__55958 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(thumbnails_acc,thumbnails);
var G__55959 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(full_acc,full);
index = G__55957;
thumbnails_acc = G__55958;
full_acc = G__55959;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572),thumbnails_acc,new cljs.core.Keyword(null,"full","full",436801220),full_acc], null);
}
break;
}
})();
var map__55705__$1 = cljs.core.__destructure_map(map__55705);
var thumbnails = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55705__$1,new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572));
var full = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55705__$1,new cljs.core.Keyword(null,"full","full",436801220));
performance.mark("set-objects::end");

performance.measure("set-objects",(function (){var obj55713 = ({"start":"set-objects::begin","end":"set-objects::end","detail":({})});
return obj55713;
})());

return app.render_wasm.api.process_pending.cljs$core$IFn$_invoke$arity$5(shapes,thumbnails,full,app.render_wasm.api.noop_fn,(function (){
if(cljs.core.truth_(render_callback)){
(render_callback.cljs$core$IFn$_invoke$arity$0 ? render_callback.cljs$core$IFn$_invoke$arity$0() : render_callback.call(null));
} else {
(app.render_wasm.api.render_finish.cljs$core$IFn$_invoke$arity$0 ? app.render_wasm.api.render_finish.cljs$core$IFn$_invoke$arity$0() : app.render_wasm.api.render_finish.call(null));
}

return app.util.globals.dispatch_BANG_(app.util.globals.event("penpot:wasm:set-objects"));
}));
});
/**
 * Returns shapes sorted in tree order (parents before children).
 * This ensures parent shapes are processed before their children,
 * maintaining proper shape reference consistency in WASM.
 */
app.render_wasm.api.shapes_in_tree_order = (function app$render_wasm$api$shapes_in_tree_order(objects){
if(cljs.core.contains_QMARK_(objects,app.common.uuid.zero)){
var ordered_ids = app.common.files.helpers.get_children_ids_with_self(objects,app.common.uuid.zero);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__55718_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__55718_SHARP_);
})),ordered_ids);
} else {
var top_level_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (shape){
return (!(cljs.core.contains_QMARK_(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape))));
}),cljs.core.vals(objects)));
var all_ordered_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__55719_SHARP_){
return app.common.files.helpers.get_children_ids_with_self(objects,p1__55719_SHARP_);
})),top_level_ids);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__55720_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__55720_SHARP_);
})),all_ordered_ids);
}
});
/**
 * Set all shape objects for rendering.
 * 
 * Shapes are processed in tree order (parents before children)
 * to maintain proper shape reference consistency in WASM.
 */
app.render_wasm.api.set_objects = (function app$render_wasm$api$set_objects(var_args){
var G__55724 = arguments.length;
switch (G__55724) {
case 1:
return app.render_wasm.api.set_objects.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.render_wasm.api.set_objects.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.render_wasm.api.set_objects.cljs$core$IFn$_invoke$arity$1 = (function (objects){
return app.render_wasm.api.set_objects.cljs$core$IFn$_invoke$arity$2(objects,null);
}));

(app.render_wasm.api.set_objects.cljs$core$IFn$_invoke$arity$2 = (function (objects,render_callback){
performance.mark("set-objects::begin");

var shapes = app.render_wasm.api.shapes_in_tree_order(objects);
var total_shapes = cljs.core.count(shapes);
if((total_shapes < (100))){
return app.render_wasm.api.set_objects_sync(shapes,render_callback);
} else {
app.render_wasm.api.begin_shapes_loading_BANG_();

try{promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(app.render_wasm.api.set_objects_async(shapes,render_callback),(function (error){
app.render_wasm.api.end_shapes_loading_BANG_();

return console.error("Async WASM shape loading failed",error);
}));
}catch (e55730){var error_55962 = e55730;
app.render_wasm.api.end_shapes_loading_BANG_();

console.error("Async WASM shape loading failed",error_55962);

throw error_55962;
}
return null;
}
}));

(app.render_wasm.api.set_objects.cljs$lang$maxFixedArity = 2);

app.render_wasm.api.clear_focus_mode = (function app$render_wasm$api$clear_focus_mode(){
var fn_55731_55963 = (app.render_wasm.wasm.internal_module["_clear_focus_mode"]);
fn_55731_55963();

return app.render_wasm.api.request_render("clear-focus-mode");
});
app.render_wasm.api.set_focus_mode = (function app$render_wasm$api$set_focus_mode(entries){
if(cljs.core.empty_QMARK_(entries)){
return null;
} else {
var size = app.render_wasm.mem.get_alloc_size(entries,(16));
var heap = app.render_wasm.mem.get_heap_u32();
var offset = app.render_wasm.mem.alloc__GT_offset_32(size);
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (offset__$1,id){
return app.render_wasm.mem.heap32.write_uuid(offset__$1,heap,id);
}),offset,entries);

var fn_55732_55964 = (app.render_wasm.wasm.internal_module["_set_focus_mode"]);
fn_55732_55964();

return app.render_wasm.api.request_render("set-focus-mode");
}
});
app.render_wasm.api.set_structure_modifiers = (function app$render_wasm$api$set_structure_modifiers(entries){
if(cljs.core.empty_QMARK_(entries)){
return null;
} else {
var size = app.render_wasm.mem.get_alloc_size(entries,(44));
var offset = app.render_wasm.mem.alloc__GT_offset_32(size);
var heapu32 = app.render_wasm.mem.get_heap_u32();
var heapf32 = app.render_wasm.mem.get_heap_f32();
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (offset__$1,p__55734){
var map__55735 = p__55734;
var map__55735__$1 = cljs.core.__destructure_map(map__55735);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55735__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55735__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55735__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55735__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55735__$1,new cljs.core.Keyword(null,"value","value",305978217));
return app.render_wasm.mem.heap32.write_f32(app.render_wasm.mem.heap32.write_uuid(app.render_wasm.mem.heap32.write_uuid(app.render_wasm.mem.heap32.write_u32(app.render_wasm.mem.heap32.write_u32(offset__$1,heapu32,app.render_wasm.serializers.translate_structure_modifier_type(type)),heapu32,app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(index,(0))),heapu32,parent),heapu32,id),heapf32,value);
}),offset,entries);

var fn_55736 = (app.render_wasm.wasm.internal_module["_set_structure_modifiers"]);
return fn_55736();
}
});
app.render_wasm.api.propagate_modifiers = (function app$render_wasm$api$propagate_modifiers(entries,pixel_precision){
if(cljs.core.empty_QMARK_(entries)){
return null;
} else {
var heapf32 = app.render_wasm.mem.get_heap_f32();
var heapu32 = app.render_wasm.mem.get_heap_u32();
var size = app.render_wasm.mem.get_alloc_size(entries,(44));
var offset = app.render_wasm.mem.alloc__GT_offset_32(size);
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (offset__$1,p__55737){
var vec__55738 = p__55737;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55738,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55738,(1),null);
var transform = new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(data);
var kind = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(data);
return app.render_wasm.mem.heap32.write_u32(app.render_wasm.mem.heap32.write_matrix(app.render_wasm.mem.heap32.write_uuid(offset__$1,heapu32,id),heapf32,transform),heapu32,app.render_wasm.serializers.translate_transform_entry_kind(kind));
}),offset,entries);

var offset__$1 = app.render_wasm.mem.__GT_offset_32((function (){var fn_55741 = (app.render_wasm.wasm.internal_module["_propagate_modifiers"]);
return fn_55741(pixel_precision);
})());
var length = (heapu32[offset__$1]);
var max_offset = ((offset__$1 + (1)) + (length * app.render_wasm.api.MODIFIER_U32_SIZE));
var result = (function (){var result = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var offset__$2 = (offset__$1 + (1));
while(true){
if((offset__$2 < max_offset)){
var entry = app.render_wasm.deserializers.read_modifier_entry(heapu32,heapf32,offset__$2);
var G__55966 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,entry);
var G__55967 = (offset__$2 + app.render_wasm.api.MODIFIER_U32_SIZE);
result = G__55966;
offset__$2 = G__55967;
continue;
} else {
return cljs.core.persistent_BANG_(result);
}
break;
}
})();
app.render_wasm.mem.free();

return result;
}
});
app.render_wasm.api.get_selection_rect = (function app$render_wasm$api$get_selection_rect(entries){
if(cljs.core.empty_QMARK_(entries)){
return null;
} else {
var size = app.render_wasm.mem.get_alloc_size(entries,(16));
var offset = app.render_wasm.mem.alloc__GT_offset_32(size);
var heapu32 = app.render_wasm.mem.get_heap_u32();
var heapf32 = app.render_wasm.mem.get_heap_f32();
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (offset__$1,id){
return app.render_wasm.mem.heap32.write_uuid(offset__$1,heapu32,id);
}),offset,entries);

var offset__$1 = app.render_wasm.mem.__GT_offset_32((function (){var fn_55742 = (app.render_wasm.wasm.internal_module["_get_selection_rect"]);
return fn_55742();
})());
var result = app.render_wasm.deserializers.read_selection_rect(heapf32,offset__$1);
app.render_wasm.mem.free();

return result;
}
});
app.render_wasm.api.set_canvas_background = (function app$render_wasm$api$set_canvas_background(background){
var rgba = app.render_wasm.serializers.color.hex__GT_u32argb(background,(1));
var fn_55743_55968 = (app.render_wasm.wasm.internal_module["_set_canvas_background"]);
fn_55743_55968(rgba);

return app.render_wasm.api.request_render("set-canvas-background");
});
app.render_wasm.api.clean_modifiers = (function app$render_wasm$api$clean_modifiers(){
var fn_55744 = (app.render_wasm.wasm.internal_module["_clean_modifiers"]);
return fn_55744();
});
app.render_wasm.api.set_modifiers = (function app$render_wasm$api$set_modifiers(modifiers){
if(cljs.core.vector_QMARK_(modifiers)){
} else {
throw (new Error(["Assert failed: ","expected a vector for `set-modifiers`","\n","(vector? modifiers)"].join('')));
}

var length = cljs.core.count(modifiers);
if((length > (0))){
var offset = app.render_wasm.mem.alloc__GT_offset_32(((40) * length));
var heapu32 = app.render_wasm.mem.get_heap_u32();
var heapf32 = app.render_wasm.mem.get_heap_f32();
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (offset__$1,p__55745){
var vec__55746 = p__55745;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55746,(0),null);
var transform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55746,(1),null);
return app.render_wasm.mem.heap32.write_matrix(app.render_wasm.mem.heap32.write_uuid(offset__$1,heapu32,id),heapf32,transform);
}),offset,modifiers);

var fn_55749_55969 = (app.render_wasm.wasm.internal_module["_set_modifiers"]);
fn_55749_55969();

return app.render_wasm.api.request_render("set-modifiers");
} else {
return null;
}
});
app.render_wasm.api.initialize_viewport = (function app$render_wasm$api$initialize_viewport(var_args){
var G__55764 = arguments.length;
switch (G__55764) {
case 4:
return app.render_wasm.api.initialize_viewport.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return app.render_wasm.api.initialize_viewport.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.render_wasm.api.initialize_viewport.cljs$core$IFn$_invoke$arity$4 = (function (base_objects,zoom,vbox,background){
return app.render_wasm.api.initialize_viewport.cljs$core$IFn$_invoke$arity$5(base_objects,zoom,vbox,background,null);
}));

(app.render_wasm.api.initialize_viewport.cljs$core$IFn$_invoke$arity$5 = (function (base_objects,zoom,vbox,background,callback){
var rgba = app.render_wasm.serializers.color.hex__GT_u32argb(background,(1));
var shapes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.vals(base_objects));
var total_shapes = cljs.core.count(shapes);
var fn_55765_55975 = (app.render_wasm.wasm.internal_module["_set_canvas_background"]);
fn_55765_55975(rgba);

var fn_55766_55976 = (app.render_wasm.wasm.internal_module["_set_view"]);
fn_55766_55976(zoom,(- new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox)),(- new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox)));

var fn_55767_55977 = (app.render_wasm.wasm.internal_module["_init_shapes_pool"]);
fn_55767_55977(total_shapes);

return app.render_wasm.api.set_objects.cljs$core$IFn$_invoke$arity$2(base_objects,callback);
}));

(app.render_wasm.api.initialize_viewport.cljs$lang$maxFixedArity = 5);

app.render_wasm.api.default_context_options = ({"antialias": false, "depth": true, "stencil": true, "alpha": true, "preserveDrawingBuffer": true});
app.render_wasm.api.resize_viewbox = (function app$render_wasm$api$resize_viewbox(width,height){
var fn_55770 = (app.render_wasm.wasm.internal_module["_resize_viewbox"]);
return fn_55770(width,height);
});
app.render_wasm.api.debug_flags = (function app$render_wasm$api$debug_flags(){
var G__55771 = (0);
if(app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"wasm-viewbox","wasm-viewbox",-1694070386))){
return (G__55771 | (1));
} else {
return G__55771;
}
});
app.render_wasm.api.set_canvas_size = (function app$render_wasm$api$set_canvas_size(canvas){
var width = (function (){var or__5025__auto__ = canvas.clientWidth;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return canvas.width;
}
})();
var height = (function (){var or__5025__auto__ = canvas.clientHeight;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return canvas.height;
}
})();
(canvas.width = (app.render_wasm.api.dpr * width));

return (canvas.height = (app.render_wasm.api.dpr * height));
});
app.render_wasm.api.get_browser = (function app$render_wasm$api$get_browser(){
if((typeof navigator !== 'undefined')){
var user_agent = navigator.userAgent;
if(cljs.core.truth_(user_agent)){
if(cljs.core.truth_(cljs.core.re_find(/firefox/i,user_agent))){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(cljs.core.re_find(/chrome/i,user_agent))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(cljs.core.re_find(/safari/i,user_agent))){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(cljs.core.re_find(/edge/i,user_agent))){
return new cljs.core.Keyword(null,"edge","edge",919909153);
} else {
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);

}
}
}
}
} else {
return null;
}
} else {
return null;
}
});
app.render_wasm.api.on_webgl_context_lost = (function app$render_wasm$api$on_webgl_context_lost(event){
app.util.dom.prevent_default(event);

cljs.core.reset_BANG_(app.render_wasm.wasm.context_lost_QMARK_,true);

if(app.common.logging.enabled_QMARK_("app.render-wasm.api",new cljs.core.Keyword(null,"warn","warn",-436710552))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"WebGL context lost"], null)], null);
}),null)),null,null,"app.render-wasm.api",new cljs.core.Keyword(null,"warn","warn",-436710552),false);
} else {
}


throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("WebGL context lost",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"webgl-context-lost","webgl-context-lost",669503048),new cljs.core.Keyword(null,"hint","hint",439639918),"WebGL context lost"], null),null], 0)),null);
});
app.render_wasm.api.init_canvas_context = (function app$render_wasm$api$init_canvas_context(canvas){
var gl = (app.render_wasm.wasm.internal_module["GL"]);
var flags = app.render_wasm.api.debug_flags();
var context_id = ((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"wasm-gl-context-init-error","wasm-gl-context-init-error",-2060239440)))?"fail":"webgl2");
var context = canvas.getContext(context_id,app.render_wasm.api.default_context_options);
var context_init_QMARK_ = (!((context == null)));
var browser = app.render_wasm.api.get_browser();
var browser__$1 = app.render_wasm.serializers.translate_browser(browser);
if((context == null)){
} else {
var handle_55985 = gl.registerContext(context,({"majorVersion": (2)}));
gl.makeContextCurrent(handle_55985);

(app.render_wasm.wasm.gl_context_handle = handle_55985);

(app.render_wasm.wasm.gl_context = context);

context.getExtension("WEBGL_debug_renderer_info");

var fn_55779_55986 = (app.render_wasm.wasm.internal_module["_init"]);
fn_55779_55986((canvas.width / app.render_wasm.api.dpr),(canvas.height / app.render_wasm.api.dpr));

var fn_55780_55988 = (app.render_wasm.wasm.internal_module["_set_render_options"]);
fn_55780_55988(flags,app.render_wasm.api.dpr);

var fn_55782_55990 = (app.render_wasm.wasm.internal_module["_set_browser"]);
fn_55782_55990(browser__$1);

app.render_wasm.api.set_canvas_size(canvas);

(app.render_wasm.wasm.canvas = canvas);

canvas.addEventListener("webglcontextlost",app.render_wasm.api.on_webgl_context_lost);

(app.render_wasm.wasm.context_initialized_QMARK_ = true);
}

return context_init_QMARK_;
});
app.render_wasm.api.clear_canvas = (function app$render_wasm$api$clear_canvas(){
if(app.render_wasm.wasm.context_initialized_QMARK_){
try{if(cljs.core.truth_(app.render_wasm.wasm.internal_frame_id)){
cancelAnimationFrame(app.render_wasm.wasm.internal_frame_id);

(app.render_wasm.wasm.internal_frame_id = null);
} else {
}

cljs.core.reset_BANG_(app.render_wasm.api.pending_render,false);

cljs.core.reset_BANG_(app.render_wasm.api.shapes_loading_QMARK_,false);

cljs.core.reset_BANG_(app.render_wasm.api.deferred_render_QMARK_,false);

(app.render_wasm.wasm.context_initialized_QMARK_ = false);

var fn_55786_55991 = (app.render_wasm.wasm.internal_module["_clean_up"]);
fn_55786_55991();

if(cljs.core.truth_(app.render_wasm.wasm.canvas)){
app.render_wasm.wasm.canvas.removeEventListener("webglcontextlost",app.render_wasm.api.on_webgl_context_lost);

(app.render_wasm.wasm.canvas = null);
} else {
}

var temp__5825__auto__ = (app.render_wasm.wasm.internal_module["GL"]);
if(cljs.core.truth_(temp__5825__auto__)){
var gl = temp__5825__auto__;
var temp__5825__auto____$1 = app.render_wasm.wasm.gl_context_handle;
if(cljs.core.truth_(temp__5825__auto____$1)){
var handle = temp__5825__auto____$1;
try{var temp__5825__auto___55992__$2 = app.render_wasm.wasm.gl_context;
if(cljs.core.truth_(temp__5825__auto___55992__$2)){
var ctx_55993 = temp__5825__auto___55992__$2;
var temp__5825__auto___55994__$3 = ctx_55993.getExtension("WEBGL_lose_context");
if(cljs.core.truth_(temp__5825__auto___55994__$3)){
var lose_ext_55995 = temp__5825__auto___55994__$3;
lose_ext_55995.loseContext();
} else {
}
} else {
}

return gl.deleteContext(handle);
}finally {(app.render_wasm.wasm.gl_context_handle = null);

(app.render_wasm.wasm.gl_context = null);
}} else {
return null;
}
} else {
return null;
}
}catch (e55784){var error = e55784;
return console.error(error);
}} else {
return null;
}
});
app.render_wasm.api.show_grid = (function app$render_wasm$api$show_grid(id){
var buffer_55996 = app.common.uuid.get_u32(id);
var fn_55787_55997 = (app.render_wasm.wasm.internal_module["_show_grid"]);
fn_55787_55997((buffer_55996[(0)]),(buffer_55996[(1)]),(buffer_55996[(2)]),(buffer_55996[(3)]));

return app.render_wasm.api.request_render("show-grid");
});
app.render_wasm.api.clear_grid = (function app$render_wasm$api$clear_grid(){
var fn_55788_55999 = (app.render_wasm.wasm.internal_module["_hide_grid"]);
fn_55788_55999();

return app.render_wasm.api.request_render("clear-grid");
});
app.render_wasm.api.get_grid_coords = (function app$render_wasm$api$get_grid_coords(position){
var offset = (function (){var fn_55789 = (app.render_wasm.wasm.internal_module["_get_grid_coords"]);
return fn_55789(cljs.core.get.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"x","x",2099068185)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"y","y",-1757859776)));
})();
var heapi32 = app.render_wasm.mem.get_heap_i32();
var row = (heapi32[app.render_wasm.mem.__GT_offset_32((offset + (0)))]);
var column = (heapi32[app.render_wasm.mem.__GT_offset_32((offset + (4)))]);
app.render_wasm.mem.free();

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column], null);
});
app.render_wasm.api.shape_to_path = (function app$render_wasm$api$shape_to_path(id){
app.render_wasm.api.use_shape(id);

try{var offset = app.render_wasm.mem.__GT_offset_32((function (){var fn_55791 = (app.render_wasm.wasm.internal_module["_current_to_path"]);
return fn_55791();
})());
var heap = app.render_wasm.mem.get_heap_u32();
var length = (heap[offset]);
var data = app.render_wasm.mem.slice(heap,(offset + (1)),(length * app.common.types.path.impl.SEGMENT_U32_SIZE));
var content = app.common.types.path.from_bytes(data);
app.render_wasm.mem.free();

return content;
}catch (e55790){var cause = e55790;
app.render_wasm.mem.free();

throw cause;
}});
app.render_wasm.api.calculate_bool_STAR_ = (function app$render_wasm$api$calculate_bool_STAR_(bool_type,ids){
var size = app.render_wasm.mem.get_alloc_size(ids,(16));
var heap = app.render_wasm.mem.get_heap_u32();
var offset = app.render_wasm.mem.alloc__GT_offset_32(size);
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (offset__$1,id){
return app.render_wasm.mem.heap32.write_uuid(offset__$1,heap,id);
}),offset,cljs.core.rseq(ids));

try{var offset__$1 = app.render_wasm.mem.__GT_offset_32((function (){var fn_55795 = (app.render_wasm.wasm.internal_module["_calculate_bool"]);
return fn_55795(app.render_wasm.serializers.translate_bool_type(bool_type));
})());
var length = (heap[offset__$1]);
var data = app.render_wasm.mem.slice(heap,(offset__$1 + (1)),(length * app.common.types.path.impl.SEGMENT_U32_SIZE));
var content = app.common.types.path.from_bytes(data);
app.render_wasm.mem.free();

return content;
}catch (e55793){var cause = e55793;
app.render_wasm.mem.free();

throw cause;
}});
app.render_wasm.api.calculate_bool = (function app$render_wasm$api$calculate_bool(shape,objects){
var fn_55797_56003 = (app.render_wasm.wasm.internal_module["_start_temp_objects"]);
fn_55797_56003();

var bool_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"bool-type","bool-type",-1094918459));
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var all_children = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__55796_SHARP_){
return app.common.files.helpers.get_children_with_self(objects,p1__55796_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ids], 0));
var fn_55799_56004 = (app.render_wasm.wasm.internal_module["_init_shapes_pool"]);
fn_55799_56004(cljs.core.count(all_children));

cljs.core.run_BANG_(app.render_wasm.api.set_object,all_children);

var content = app.common.types.path.impl.path_data(app.render_wasm.api.calculate_bool_STAR_(bool_type,ids));
var fn_55800_56005 = (app.render_wasm.wasm.internal_module["_end_temp_objects"]);
fn_55800_56005();

return content;
});
app.render_wasm.api.POSITION_DATA_U8_SIZE = (36);
app.render_wasm.api.POSITION_DATA_U32_SIZE = (app.render_wasm.api.POSITION_DATA_U8_SIZE / (4));
app.render_wasm.api.calculate_position_data = (function app$render_wasm$api$calculate_position_data(shape){
if(app.render_wasm.wasm.context_initialized_QMARK_){
app.render_wasm.api.use_shape(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));

var heapf32 = app.render_wasm.mem.get_heap_f32();
var heapu32 = app.render_wasm.mem.get_heap_u32();
var offset = app.render_wasm.mem.__GT_offset_32((function (){var fn_55802 = (app.render_wasm.wasm.internal_module["_calculate_position_data"]);
return fn_55802();
})());
var length = (heapu32[offset]);
var max_offset = ((offset + (1)) + (length * app.render_wasm.api.POSITION_DATA_U32_SIZE));
var result = (function (){var result = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var offset__$1 = (offset + (1));
while(true){
if((offset__$1 < max_offset)){
var entry = app.render_wasm.deserializers.read_position_data_entry(heapu32,heapf32,offset__$1);
var G__56006 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,entry);
var G__56007 = (offset__$1 + app.render_wasm.api.POSITION_DATA_U32_SIZE);
result = G__56006;
offset__$1 = G__56007;
continue;
} else {
return cljs.core.persistent_BANG_(result);
}
break;
}
})();
var result__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__55804){
var map__55805 = p__55804;
var map__55805__$1 = cljs.core.__destructure_map(map__55805);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55805__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var paragraph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55805__$1,new cljs.core.Keyword(null,"paragraph","paragraph",296707709));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55805__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55805__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var start_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55805__$1,new cljs.core.Keyword(null,"start-pos","start-pos",668789086));
var span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55805__$1,new cljs.core.Keyword(null,"span","span",1394872991));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55805__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var end_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55805__$1,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55805__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape);
var element = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(content),(0))),paragraph)),span);
var element_text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(element);
if(cljs.core.truth_((function (){var and__5023__auto__ = element;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = element_text;
if(cljs.core.truth_(and__5023__auto____$1)){
return (((start_pos >= (0))) && ((((end_pos <= cljs.core.count(element_text))) && ((start_pos <= end_pos)))));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
var text = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(element_text,start_pos,end_pos);
return app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(app.common.types.text.default_text_attrs,app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"font-style","font-style",-773672352),new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"fills","fills",902966780),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"text","text",-1790561697)],[(y + height),cljs.core.get.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"font-style","font-style",-773672352)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"text-transform","text-transform",1685000676)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"font-size","font-size",-1847940346)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583)),width,cljs.core.get.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767)),x,cljs.core.get.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"fills","fills",902966780)),app.render_wasm.deserializers.translate_direction(direction),cljs.core.get.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"font-family","font-family",-667419874)),height,text])));
} else {
return null;
}
})),result);
app.render_wasm.mem.free();

return result__$1;
} else {
return null;
}
});
app.render_wasm.api.apply_canvas_blur = (function app$render_wasm$api$apply_canvas_blur(){
if(cljs.core.truth_(app.render_wasm.wasm.canvas)){
app.util.dom.set_style_BANG_(app.render_wasm.wasm.canvas,"filter","blur(4px)");
} else {
}

var controls_to_blur = app.util.dom.query_all.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_element("viewport-controls"),".blurrable");
return cljs.core.run_BANG_((function (p1__55810_SHARP_){
return app.util.dom.set_style_BANG_(p1__55810_SHARP_,"filter","blur(4px)");
}),controls_to_blur);
});
app.render_wasm.api.init_wasm_module = (function app$render_wasm$api$init_wasm_module(module){
var default_fn = (module["default"]);
var href = app.config.resolve_href("js/render-wasm.wasm");
var G__55811 = ({"locateFile": cljs.core.constantly(href)});
return (default_fn.cljs$core$IFn$_invoke$arity$1 ? default_fn.cljs$core$IFn$_invoke$arity$1(G__55811) : default_fn.call(null,G__55811));
});
if((typeof app !== 'undefined') && (typeof app.render_wasm !== 'undefined') && (typeof app.render_wasm.api !== 'undefined') && (typeof app.render_wasm.api.module !== 'undefined')){
} else {
app.render_wasm.api.module = (new cljs.core.Delay((function (){
if((typeof dynamicImport !== 'undefined')){
var uri = app.config.resolve_href("js/render-wasm.js");
return promesa.core.merr.cljs$core$IFn$_invoke$arity$2((function (cause){
console.error(cause);

return promesa.core.resolved(false);
}),promesa.core.fmap.cljs$core$IFn$_invoke$arity$2((function (default$){
(app.render_wasm.wasm.internal_module = default$);

return true;
}),promesa.core.mcat.cljs$core$IFn$_invoke$arity$2(app.render_wasm.api.init_wasm_module,app.util.modules.import$(uri))));
} else {
return promesa.core.resolved(false);
}
}),null));
}

//# sourceMappingURL=app.render_wasm.api.js.map
