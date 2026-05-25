import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.focus.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.types.component.js";
import "./app.common.types.shape_tree.js";
import "./app.common.uuid.js";
import "./app.main.data.shortcuts.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.edition.js";
import "./app.main.data.workspace.grid_layout.shortcuts.js";
import "./app.main.data.workspace.path.shortcuts.js";
import "./app.main.data.workspace.shortcuts.js";
import "./app.main.data.workspace.text.shortcuts.js";
import "./app.main.features.js";
import "./app.main.store.js";
import "./app.main.streams.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.workspace.shapes.frame.dynamic_modifiers.js";
import "./app.main.ui.workspace.viewport.actions.js";
import "./app.main.ui.workspace.viewport.utils.js";
import "./app.main.worker.js";
import "./app.render_wasm.api.js";
import "./app.util.debug.js";
import "./app.util.dom.js";
import "./app.util.globals.js";
import "./app.util.keyboard.js";
import "./app.util.mouse.js";
import "./beicon.v2.core.js";
import "./beicon.v2.operators.js";
import "./goog.events.events.js";
import "./rumext.v2.js";
import "./goog.events.eventtype.js";
goog.provide('app.main.ui.workspace.viewport.hooks');
app.main.ui.workspace.viewport.hooks.setup_dom_events = (function app$main$ui$workspace$viewport$hooks$setup_dom_events(zoom,disable_paste_ref,in_viewport_ref,workspace_read_only_QMARK_,drawing_tool,drawing_path_QMARK_){
var zoom_ref = rumext.v2.use_ref(zoom);
var _ = rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(zoom)],(function (){
return rumext.v2.set_ref_val_BANG_(zoom_ref,zoom);
}));
var on_key_down = app.main.ui.workspace.viewport.actions.on_key_down();
var on_key_up = app.main.ui.workspace.viewport.actions.on_key_up();
var on_mouse_wheel = app.main.ui.workspace.viewport.actions.on_mouse_wheel(zoom_ref);
var on_paste = app.main.ui.workspace.viewport.actions.on_paste(disable_paste_ref,in_viewport_ref,workspace_read_only_QMARK_);
var on_pointer_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(drawing_tool),rumext.v2.adapt(drawing_path_QMARK_)],(function (e){
var target = app.util.dom.get_target(e);
var parent_QMARK_ = app.util.dom.get_parent_with_data(target,"dont-clear-path");
if(cljs.core.truth_((function (){var and__5023__auto__ = drawing_path_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(parent_QMARK_);
} else {
return and__5023__auto__;
}
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.edition.clear_edition_mode());
} else {
return null;
}
}));
var on_blur = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.util.mouse.__GT_BlurEvent());
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(drawing_tool),rumext.v2.adapt(drawing_path_QMARK_)],(function (){
var key = goog.events.listen(window,goog.events.EventType.POINTERDOWN,on_pointer_down);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drawing_tool,new cljs.core.Keyword(null,"comments","comments",-293346423))){
rumext.v2.set_ref_val_BANG_(disable_paste_ref,true);
} else {
rumext.v2.set_ref_val_BANG_(disable_paste_ref,false);
}

return (function (){
return goog.events.unlistenByKey(key);
});
}));

return rumext.v2.use_layout_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_key_down),rumext.v2.adapt(on_key_up),rumext.v2.adapt(on_paste),rumext.v2.adapt(workspace_read_only_QMARK_)],(function (){
var keys = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.events.listen(document,goog.events.EventType.KEYDOWN,on_key_down),goog.events.listen(document,goog.events.EventType.KEYUP,on_key_up),goog.events.listen(window,goog.events.EventType.WHEEL,on_mouse_wheel,({"passive": false})),goog.events.listen(window,goog.events.EventType.PASTE,on_paste),goog.events.listen(window,goog.events.EventType.BLUR,on_blur)], null);
return (function (){
var seq__57127 = cljs.core.seq(keys);
var chunk__57128 = null;
var count__57129 = (0);
var i__57130 = (0);
while(true){
if((i__57130 < count__57129)){
var key = chunk__57128.cljs$core$IIndexed$_nth$arity$2(null,i__57130);
goog.events.unlistenByKey(key);


var G__57218 = seq__57127;
var G__57219 = chunk__57128;
var G__57220 = count__57129;
var G__57221 = (i__57130 + (1));
seq__57127 = G__57218;
chunk__57128 = G__57219;
count__57129 = G__57220;
i__57130 = G__57221;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__57127);
if(temp__5825__auto__){
var seq__57127__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57127__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__57127__$1);
var G__57222 = cljs.core.chunk_rest(seq__57127__$1);
var G__57223 = c__5548__auto__;
var G__57224 = cljs.core.count(c__5548__auto__);
var G__57225 = (0);
seq__57127 = G__57222;
chunk__57128 = G__57223;
count__57129 = G__57224;
i__57130 = G__57225;
continue;
} else {
var key = cljs.core.first(seq__57127__$1);
goog.events.unlistenByKey(key);


var G__57227 = cljs.core.next(seq__57127__$1);
var G__57228 = null;
var G__57229 = (0);
var G__57230 = (0);
seq__57127 = G__57227;
chunk__57128 = G__57228;
count__57129 = G__57229;
i__57130 = G__57230;
continue;
}
} else {
return null;
}
}
break;
}
});
}));
});
app.main.ui.workspace.viewport.hooks.setup_viewport_size = (function app$main$ui$workspace$viewport$hooks$setup_viewport_size(vport,viewport_ref){
return rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(vport)],(function (){
var node = rumext.v2.ref_val(viewport_ref);
var prnt = app.util.dom.get_parent(node);
var size = app.util.dom.get_client_size(prnt);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(size,vport)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.initialize_viewport(app.util.dom.get_client_size(prnt)));
} else {
return null;
}
}));
});
app.main.ui.workspace.viewport.hooks.setup_cursor = (function app$main$ui$workspace$viewport$hooks$setup_cursor(cursor,alt_QMARK_,mod_QMARK_,space_QMARK_,panning,drawing_tool,drawing_path_QMARK_,path_editing_QMARK_,z_QMARK_,workspace_read_only_QMARK_){
return rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(cursor)),rumext.v2.adapt(cljs.core.deref(alt_QMARK_)),rumext.v2.adapt(cljs.core.deref(mod_QMARK_)),rumext.v2.adapt(cljs.core.deref(space_QMARK_)),rumext.v2.adapt(panning),rumext.v2.adapt(drawing_tool),rumext.v2.adapt(drawing_path_QMARK_),rumext.v2.adapt(path_editing_QMARK_),rumext.v2.adapt(z_QMARK_),rumext.v2.adapt(workspace_read_only_QMARK_)],(function (){
var show_pen_QMARK_ = (function (){var or__5025__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drawing_tool,new cljs.core.Keyword(null,"path","path",-188191168));
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = drawing_path_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(drawing_tool,new cljs.core.Keyword(null,"curve","curve",-569677866));
} else {
return and__5023__auto__;
}
}
})();
var show_zoom_QMARK_ = (function (){var and__5023__auto__ = cljs.core.deref(z_QMARK_);
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.not(cljs.core.deref(space_QMARK_))) && (((cljs.core.not(cljs.core.deref(mod_QMARK_))) && (((cljs.core.not(drawing_path_QMARK_)) && (cljs.core.not(drawing_tool)))))));
} else {
return and__5023__auto__;
}
})();
var new_cursor = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref(mod_QMARK_);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.deref(space_QMARK_);
} else {
return and__5023__auto__;
}
})())?app.main.ui.workspace.viewport.utils.get_cursor(new cljs.core.Keyword(null,"zoom","zoom",-1827487038)):(cljs.core.truth_((function (){var or__5025__auto__ = panning;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(space_QMARK_);
}
})())?app.main.ui.workspace.viewport.utils.get_cursor(new cljs.core.Keyword(null,"hand","hand",791601933)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drawing_tool,new cljs.core.Keyword(null,"comments","comments",-293346423)))?app.main.ui.workspace.viewport.utils.get_cursor(new cljs.core.Keyword(null,"comments","comments",-293346423)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drawing_tool,new cljs.core.Keyword(null,"frame","frame",-1711082588)))?app.main.ui.workspace.viewport.utils.get_cursor(new cljs.core.Keyword(null,"create-artboard","create-artboard",-183459146)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drawing_tool,new cljs.core.Keyword(null,"rect","rect",-108902628)))?app.main.ui.workspace.viewport.utils.get_cursor(new cljs.core.Keyword(null,"create-rectangle","create-rectangle",-773298875)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drawing_tool,new cljs.core.Keyword(null,"circle","circle",1903212362)))?app.main.ui.workspace.viewport.utils.get_cursor(new cljs.core.Keyword(null,"create-ellipse","create-ellipse",-403794363)):(cljs.core.truth_((function (){var and__5023__auto__ = show_zoom_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.deref(alt_QMARK_));
} else {
return and__5023__auto__;
}
})())?app.main.ui.workspace.viewport.utils.get_cursor(new cljs.core.Keyword(null,"zoom-in","zoom-in",1242180949)):(cljs.core.truth_((function (){var and__5023__auto__ = show_zoom_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.deref(alt_QMARK_);
} else {
return and__5023__auto__;
}
})())?app.main.ui.workspace.viewport.utils.get_cursor(new cljs.core.Keyword(null,"zoom-out","zoom-out",681508467)):(cljs.core.truth_(show_pen_QMARK_)?app.main.ui.workspace.viewport.utils.get_cursor(new cljs.core.Keyword(null,"pen","pen",2006675445)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drawing_tool,new cljs.core.Keyword(null,"curve","curve",-569677866)))?app.main.ui.workspace.viewport.utils.get_cursor(new cljs.core.Keyword(null,"pencil","pencil",-217778832)):(cljs.core.truth_(drawing_tool)?app.main.ui.workspace.viewport.utils.get_cursor(new cljs.core.Keyword(null,"create-shape","create-shape",-897512870)):(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref(alt_QMARK_);
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.not(path_editing_QMARK_)) && (cljs.core.not(workspace_read_only_QMARK_)));
} else {
return and__5023__auto__;
}
})())?app.main.ui.workspace.viewport.utils.get_cursor(new cljs.core.Keyword(null,"duplicate","duplicate",-1107405184)):app.main.ui.workspace.viewport.utils.get_cursor(new cljs.core.Keyword(null,"pointer-inner","pointer-inner",1173575841))
))))))))))));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cursor),new_cursor)){
return cljs.core.reset_BANG_(cursor,new_cursor);
} else {
return null;
}
}));
});
app.main.ui.workspace.viewport.hooks.setup_keyboard = (function app$main$ui$workspace$viewport$hooks$setup_keyboard(alt_STAR_,mod_STAR_,space_STAR_,z_STAR_,shift_STAR_){
var kbd_zoom_s = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return beicon.v2.core.pipe(beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$0(),beicon.v2.core.filter((function (kevent){
return ((app.util.keyboard.minus_QMARK_(kevent)) || (((app.util.keyboard.underscore_QMARK_(kevent)) || (((app.util.keyboard.equals_QMARK_(kevent)) || (app.util.keyboard.plus_QMARK_(kevent)))))));
}),beicon.v2.core.filter(app.util.keyboard.mod_event_QMARK_,beicon.v2.core.filter(app.util.keyboard.key_down_event_QMARK_,app.main.streams.keyboard))));
}));
var kbd_shift_s = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return beicon.v2.core.pipe(beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$0(),beicon.v2.core.map(app.util.keyboard.key_down_event_QMARK_,beicon.v2.core.filter(cljs.core.complement(app.util.keyboard.editing_event_QMARK_),beicon.v2.core.filter(app.util.keyboard.shift_key_QMARK_,app.main.streams.keyboard))));
}));
var kbd_z_s = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return beicon.v2.core.pipe(beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$0(),beicon.v2.core.map(app.util.keyboard.key_down_event_QMARK_,beicon.v2.core.filter(cljs.core.complement(app.util.keyboard.editing_event_QMARK_),beicon.v2.core.filter(app.util.keyboard.z_QMARK_,app.main.streams.keyboard))));
}));
app.main.ui.hooks.use_stream.cljs$core$IFn$_invoke$arity$2(app.main.streams.keyboard_alt,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,alt_STAR_));

app.main.ui.hooks.use_stream.cljs$core$IFn$_invoke$arity$2(app.main.streams.keyboard_space,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,space_STAR_));

app.main.ui.hooks.use_stream.cljs$core$IFn$_invoke$arity$2(kbd_z_s,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,z_STAR_));

app.main.ui.hooks.use_stream.cljs$core$IFn$_invoke$arity$2(kbd_shift_s,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,shift_STAR_));

app.main.ui.hooks.use_stream.cljs$core$IFn$_invoke$arity$2(app.main.streams.keyboard_mod,(function (value){
cljs.core.reset_BANG_(mod_STAR_,value);

if(value){
return null;
} else {
return cljs.core.reset_BANG_(z_STAR_,false);
}
}));

return app.main.ui.hooks.use_stream.cljs$core$IFn$_invoke$arity$2(kbd_zoom_s,(function (kevent){
app.util.dom.prevent_default(kevent);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(((((app.util.keyboard.minus_QMARK_(kevent)) || (app.util.keyboard.underscore_QMARK_(kevent))))?app.main.data.workspace.decrease_zoom.cljs$core$IFn$_invoke$arity$0():app.main.data.workspace.increase_zoom.cljs$core$IFn$_invoke$arity$0()));
}));
});
app.main.ui.workspace.viewport.hooks.setup_hover_shapes = (function app$main$ui$workspace$viewport$hooks$setup_hover_shapes(page_id,move_stream,objects,transform,selected,mod_QMARK_,hover,measure_hover,hover_ids,hover_top_frame_id,hover_disabled_QMARK_,focus,zoom,show_measures_QMARK_){
var zoom_ref = rumext.v2.use_ref(zoom);
var mod_ref = rumext.v2.use_ref(cljs.core.deref(mod_QMARK_));
var transform_ref = rumext.v2.use_ref(null);
var selected_ref = rumext.v2.use_ref(selected);
var hover_disabled_ref = rumext.v2.use_ref(hover_disabled_QMARK_);
var focus_ref = rumext.v2.use_ref(focus);
var last_point_ref = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(null);
var mod_str = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$1((function (){
return beicon.v2.core.subject();
}));
var query_point = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(page_id)],(function (point){
var zoom__$1 = rumext.v2.ref_val(zoom_ref);
var rect = app.common.geom.rect.center__GT_rect.cljs$core$IFn$_invoke$arity$2(point,((5) / zoom__$1));
if(cljs.core.truth_(rumext.v2.ref_val(hover_disabled_ref))){
return beicon.v2.core.of(null);
} else {
return beicon.v2.core.filter(cljs.core.some_QMARK_,app.main.worker.ask_buffered_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cmd","cmd",-302931143),new cljs.core.Keyword("index","query-selection","index/query-selection",-1103332922),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"rect","rect",-108902628),rect,new cljs.core.Keyword(null,"include-frames?","include-frames?",-256091430),true,new cljs.core.Keyword(null,"clip-children?","clip-children?",-1668191047),cljs.core.not(rumext.v2.ref_val(mod_ref)),new cljs.core.Keyword(null,"using-selrect?","using-selrect?",-223163153),false], null)));
}
}));
var over_shapes_stream = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(query_point),rumext.v2.adapt(move_stream),rumext.v2.adapt(mod_str)],(function (){
return beicon.v2.core.share(beicon.v2.core.merge(beicon.v2.core.merge_map(query_point,beicon.v2.core.filter(cljs.core.some_QMARK_,beicon.v2.core.map((function (){
return cljs.core.deref(last_point_ref);
}),beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),mod_str)))),beicon.v2.core.merge_map(query_point,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (p1__57165_SHARP_){
return cljs.core.reset_BANG_(last_point_ref,p1__57165_SHARP_);
}),move_stream))));
}));
var over_shapes_stream_debounced = beicon.v2.core.debounce((50),over_shapes_stream);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(transform)],(function (){
return rumext.v2.set_ref_val_BANG_(transform_ref,transform);
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(zoom)],(function (){
return rumext.v2.set_ref_val_BANG_(zoom_ref,zoom);
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(mod_QMARK_))],(function (){
mod_str.next(new cljs.core.Keyword(null,"update","update",1045576396));

return rumext.v2.set_ref_val_BANG_(mod_ref,cljs.core.deref(mod_QMARK_));
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected)],(function (){
return rumext.v2.set_ref_val_BANG_(selected_ref,selected);
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(hover_disabled_QMARK_)],(function (){
return rumext.v2.set_ref_val_BANG_(hover_disabled_ref,hover_disabled_QMARK_);
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(focus)],(function (){
return rumext.v2.set_ref_val_BANG_(focus_ref,focus);
}));

app.main.ui.hooks.use_stream.cljs$core$IFn$_invoke$arity$3(over_shapes_stream_debounced,[rumext.v2.adapt(objects)],(function (_){
return cljs.core.reset_BANG_(hover_top_frame_id,app.common.types.shape_tree.top_nested_frame.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.deref(last_point_ref)));
}));

var sorted_ids_cache = rumext.v2.use_ref(cljs.core.PersistentArrayMap.EMPTY);
return app.main.ui.hooks.use_stream.cljs$core$IFn$_invoke$arity$4(over_shapes_stream,[rumext.v2.adapt(page_id),rumext.v2.adapt(objects),rumext.v2.adapt(show_measures_QMARK_)],(function (ids){
var selected__$1 = rumext.v2.ref_val(selected_ref);
var focus__$1 = rumext.v2.ref_val(focus_ref);
var mod_QMARK___$1 = rumext.v2.ref_val(mod_ref);
var cached_ids = rumext.v2.ref_val(sorted_ids_cache);
var make_sorted_ids = (function (mod_QMARK___$2,ids__$1){
var sorted_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.hidden_parent_QMARK_,objects)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__57166_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__57166_SHARP_),new cljs.core.Keyword(null,"blocked","blocked",181326681));
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.svg_raw_shape_QMARK_,objects))),app.common.types.shape_tree.sort_z_index.cljs$core$IFn$_invoke$arity$3(objects,ids__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bottom-frames?","bottom-frames?",1381369412),mod_QMARK___$2], null)));
rumext.v2.set_ref_val_BANG_(sorted_ids_cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cached_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mod_QMARK___$2,ids__$1], null),sorted_ids));

return sorted_ids;
});
var ids__$1 = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cached_ids,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mod_QMARK___$1,ids], null));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return make_sorted_ids(mod_QMARK___$1,ids);
}
})();
var grouped_QMARK_ = (function (id){
var and__5023__auto__ = app.common.files.helpers.group_like_shape_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,id);
if(cljs.core.truth_(and__5023__auto__)){
return (!(app.common.files.helpers.mask_shape_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,id)));
} else {
return and__5023__auto__;
}
});
var selected_with_parents = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__57167_SHARP_){
return app.common.files.helpers.get_parent_ids(objects,p1__57167_SHARP_);
})),selected__$1);
var root_frame_with_data_QMARK_ = (function (p1__57168_SHARP_){
var obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__57168_SHARP_);
return ((app.common.files.helpers.root_frame_QMARK_.cljs$core$IFn$_invoke$arity$1(obj)) && (((app.common.data.not_empty_QMARK_(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(obj))) && ((((!(app.common.types.component.instance_head_QMARK_(obj)))) && ((!(app.common.types.component.main_instance_QMARK_(obj)))))))));
});
var remove_hover_xf = (cljs.core.truth_(mod_QMARK___$1)?cljs.core.filter.cljs$core$IFn$_invoke$arity$1(grouped_QMARK_):((cljs.core.not(mod_QMARK___$1))?(function (){var child_parent_QMARK_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__57169_SHARP_){
return app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,p1__57169_SHARP_);
})),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__57170_SHARP_){
return app.common.files.helpers.get_parent_ids(objects,p1__57170_SHARP_);
}))),ids__$1);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__57171_SHARP_){
var or__5025__auto__ = root_frame_with_data_QMARK_(p1__57171_SHARP_);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){var and__5023__auto__ = app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,p1__57171_SHARP_);
if(cljs.core.truth_(and__5023__auto__)){
return (!(cljs.core.contains_QMARK_(child_parent_QMARK_,p1__57171_SHARP_)));
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var and__5023__auto__ = app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"render-wasm/v1");
if(cljs.core.truth_(and__5023__auto__)){
return ((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__57171_SHARP_))) && ((!(app.render_wasm.api.intersect_position_in_shape(p1__57171_SHARP_,cljs.core.deref(last_point_ref))))));
} else {
return and__5023__auto__;
}
}
}
}));
})():null));
var remove_measure_xf = (cljs.core.truth_(mod_QMARK___$1)?cljs.core.filter.cljs$core$IFn$_invoke$arity$1(grouped_QMARK_):((cljs.core.not(mod_QMARK___$1))?(function (){var child_parent_QMARK_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__57172_SHARP_){
return app.common.files.helpers.group_like_shape_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,p1__57172_SHARP_);
})),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__57173_SHARP_){
return app.common.files.helpers.get_parent_ids(objects,p1__57173_SHARP_);
}))),ids__$1);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__57174_SHARP_){
var and__5023__auto__ = app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,p1__57174_SHARP_);
if(cljs.core.truth_(and__5023__auto__)){
return (!(cljs.core.contains_QMARK_(child_parent_QMARK_,p1__57174_SHARP_)));
} else {
return and__5023__auto__;
}
}));
})():null));
var remove_hover_QMARK_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(selected_with_parents,remove_hover_xf,ids__$1);
var remove_measure_QMARK_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(selected_with_parents,remove_measure_xf,ids__$1);
var no_fill_nested_frames_QMARK_ = (function (id){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
return ((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && ((((!(app.common.files.helpers.is_direct_child_of_root_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))) && (cljs.core.empty_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"fills","fills",902966780)))))));
});
var hover_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__57176_SHARP_){
var or__5025__auto__ = cljs.core.empty_QMARK_(focus__$1);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.common.files.focus.is_in_focus_QMARK_(objects,focus__$1,p1__57176_SHARP_);
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__57175_SHARP_){
var and__5023__auto__ = mod_QMARK___$1;
if(cljs.core.truth_(and__5023__auto__)){
return no_fill_nested_frames_QMARK_(p1__57175_SHARP_);
} else {
return and__5023__auto__;
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_hover_QMARK_,ids__$1)))));
var measure_hover_shape = (cljs.core.truth_(show_measures_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__57178_SHARP_){
var or__5025__auto__ = cljs.core.empty_QMARK_(focus__$1);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.common.files.focus.is_in_focus_QMARK_(objects,focus__$1,p1__57178_SHARP_);
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__57177_SHARP_){
var and__5023__auto__ = mod_QMARK___$1;
if(cljs.core.truth_(and__5023__auto__)){
return no_fill_nested_frames_QMARK_(p1__57177_SHARP_);
} else {
return and__5023__auto__;
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_measure_QMARK_,ids__$1))))):null);
cljs.core.reset_BANG_(hover,hover_shape);

cljs.core.reset_BANG_(measure_hover,measure_hover_shape);

return cljs.core.reset_BANG_(hover_ids,ids__$1);
}),(function (){
return rumext.v2.set_ref_val_BANG_(sorted_ids_cache,cljs.core.PersistentArrayMap.EMPTY);
}));
});
app.main.ui.workspace.viewport.hooks.setup_viewport_modifiers = (function app$main$ui$workspace$viewport$hooks$setup_viewport_modifiers(modifiers,objects){
var root_frame_ids = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.common.types.shape_tree.get_root_shapes_ids(objects);
}));
var modifiers__$1 = cljs.core.select_keys(modifiers,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(root_frame_ids,app.common.uuid.zero));
return app.main.ui.workspace.shapes.frame.dynamic_modifiers.use_dynamic_modifiers(objects,app.util.globals.document,modifiers__$1);
});
app.main.ui.workspace.viewport.hooks.inside_vbox = (function app$main$ui$workspace$viewport$hooks$inside_vbox(vbox,objects,frame_id){
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
var and__5023__auto__ = (!((frame == null)));
if(and__5023__auto__){
return app.common.geom.shapes.overlaps_QMARK_(frame,vbox);
} else {
return and__5023__auto__;
}
});
app.main.ui.workspace.viewport.hooks.setup_active_frames = (function app$main$ui$workspace$viewport$hooks$setup_active_frames(objects,hover_ids,selected,active_frames,zoom,transform,vbox){
var all_frames = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.common.types.shape_tree.get_root_frames_ids(objects);
}));
var selected_frames = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected)],(function (){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(selected,all_frames);
}));
var xf_selected_frame = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(app.common.files.helpers.root_frame_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__57192_SHARP_){
return app.common.files.helpers.get_shape_id_root_frame(objects,p1__57192_SHARP_);
})));
var selected_shapes_frames = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected)],(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,xf_selected_frame,selected);
}));
var active_selection = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(transform,new cljs.core.Keyword(null,"move","move",-2110884309))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected_frames),(1)))))?cljs.core.first(selected_frames):null);
var last_hover_ids = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(null);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(hover_ids))],(function (){
if(app.common.data.not_empty_QMARK_(cljs.core.deref(hover_ids))){
return cljs.core.reset_BANG_(last_hover_ids,cljs.core.set(cljs.core.deref(hover_ids)));
} else {
return null;
}
}));

return rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects),rumext.v2.adapt(cljs.core.deref(hover_ids)),rumext.v2.adapt(selected),rumext.v2.adapt(zoom),rumext.v2.adapt(transform),rumext.v2.adapt(vbox)],(function (){
var hover_ids_QMARK_ = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57193_SHARP_){
return app.common.files.helpers.get_shape_id_root_frame(objects,p1__57193_SHARP_);
}),cljs.core.deref(hover_ids)));
var is_active_frame_QMARK_ = (function (id){
return (((zoom > 1.3)) || (((((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),transform)) || ((zoom >= 0.25)))) && (((cljs.core.contains_QMARK_(hover_ids_QMARK_,id)) || (cljs.core.contains_QMARK_(cljs.core.deref(last_hover_ids),id)))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,active_selection)) || (cljs.core.contains_QMARK_(selected_shapes_frames,id)))))));
});
var new_active_frames = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(is_active_frame_QMARK_),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.ui.workspace.viewport.hooks.inside_vbox,vbox,objects))),all_frames);
var new_active_frames__$1 = ((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"disable-frame-thumbnails","disable-frame-thumbnails",-1073907006)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,all_frames):((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"force-frame-thumbnails","force-frame-thumbnails",-717831919)))?cljs.core.PersistentHashSet.EMPTY:new_active_frames
));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(active_frames),new_active_frames__$1)){
return cljs.core.reset_BANG_(active_frames,new_active_frames__$1);
} else {
return null;
}
}));
});
app.main.ui.workspace.viewport.hooks.setup_shortcuts = (function app$main$ui$workspace$viewport$hooks$setup_shortcuts(path_editing_QMARK_,drawing_path_QMARK_,text_editing_QMARK_,grid_editing_QMARK_){
app.main.ui.hooks.use_shortcuts(new cljs.core.Keyword("app.main.ui.workspace.viewport.hooks","workspace","app.main.ui.workspace.viewport.hooks/workspace",1534742616),app.main.data.workspace.shortcuts.shortcuts);

return rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(path_editing_QMARK_),rumext.v2.adapt(drawing_path_QMARK_),rumext.v2.adapt(grid_editing_QMARK_)],(function (){
if(cljs.core.truth_(grid_editing_QMARK_)){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.shortcuts.push_shortcuts(new cljs.core.Keyword("app.main.ui.workspace.viewport.hooks","grid","app.main.ui.workspace.viewport.hooks/grid",-1939984239),app.main.data.workspace.grid_layout.shortcuts.shortcuts));

return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.shortcuts.pop_shortcuts(new cljs.core.Keyword("app.main.ui.workspace.viewport.hooks","grid","app.main.ui.workspace.viewport.hooks/grid",-1939984239)));
});
} else {
if(cljs.core.truth_((function (){var or__5025__auto__ = drawing_path_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return path_editing_QMARK_;
}
})())){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.shortcuts.push_shortcuts(new cljs.core.Keyword("app.main.ui.workspace.viewport.hooks","path","app.main.ui.workspace.viewport.hooks/path",1642934739),app.main.data.workspace.path.shortcuts.shortcuts));

return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.shortcuts.pop_shortcuts(new cljs.core.Keyword("app.main.ui.workspace.viewport.hooks","path","app.main.ui.workspace.viewport.hooks/path",1642934739)));
});
} else {
if(cljs.core.truth_(text_editing_QMARK_)){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.shortcuts.push_shortcuts(new cljs.core.Keyword("app.main.ui.workspace.viewport.hooks","text","app.main.ui.workspace.viewport.hooks/text",409069194),app.main.data.workspace.text.shortcuts.shortcuts));

return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.shortcuts.pop_shortcuts(new cljs.core.Keyword("app.main.ui.workspace.viewport.hooks","text","app.main.ui.workspace.viewport.hooks/text",409069194)));
});
} else {
return null;
}
}
}
}));
});

//# sourceMappingURL=app.main.ui.workspace.viewport.hooks.js.map
