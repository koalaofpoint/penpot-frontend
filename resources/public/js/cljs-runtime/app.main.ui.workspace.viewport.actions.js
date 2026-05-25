import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.math.js";
import "./app.common.types.shape.layout.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.drawing.js";
import "./app.main.data.workspace.libraries.js";
import "./app.main.data.workspace.media.js";
import "./app.main.data.workspace.path.js";
import "./app.main.data.workspace.texts.js";
import "./app.main.features.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.workspace.sidebar.assets.components.js";
import "./app.main.ui.workspace.viewport.viewport_ref.js";
import "./app.render_wasm.api.js";
import "./app.render_wasm.wasm.js";
import "./app.util.dom.js";
import "./app.util.dom.dnd.js";
import "./app.util.dom.normalize_wheel.js";
import "./app.util.keyboard.js";
import "./app.util.mouse.js";
import "./app.util.object.js";
import "./app.util.rxops.js";
import "./app.util.text.ui.js";
import "./app.util.timers.js";
import "./app.util.webapi.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.viewport.actions');
app.main.ui.workspace.viewport.actions.scale_per_pixel = -0.0057;
app.main.ui.workspace.viewport.actions.on_pointer_down = (function app$main$ui$workspace$viewport$actions$on_pointer_down(p__56872,selected,edition,drawing_tool,text_editing_QMARK_,node_editing_QMARK_,grid_editing_QMARK_,drawing_path_QMARK_,create_comment_QMARK_,space_QMARK_,panning,z_QMARK_,read_only_QMARK_){
var map__56877 = p__56872;
var map__56877__$1 = cljs.core.__destructure_map(map__56877);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56877__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var blocked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56877__$1,new cljs.core.Keyword(null,"blocked","blocked",181326681));
var hidden = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56877__$1,new cljs.core.Keyword(null,"hidden","hidden",-312506092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56877__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id),rumext.v2.adapt(blocked),rumext.v2.adapt(hidden),rumext.v2.adapt(type),rumext.v2.adapt(selected),rumext.v2.adapt(edition),rumext.v2.adapt(drawing_tool),rumext.v2.adapt(text_editing_QMARK_),rumext.v2.adapt(node_editing_QMARK_),rumext.v2.adapt(grid_editing_QMARK_),rumext.v2.adapt(drawing_path_QMARK_),rumext.v2.adapt(create_comment_QMARK_),rumext.v2.adapt(cljs.core.deref(z_QMARK_)),rumext.v2.adapt(cljs.core.deref(space_QMARK_)),rumext.v2.adapt(panning),rumext.v2.adapt(read_only_QMARK_)],(function (bevent){
var target_56902 = app.util.dom.get_target(bevent);
var editor_56903 = app.util.text.ui.closest_text_editor_content(target_56902);
if(cljs.core.truth_(editor_56903)){
editor_56903.setPointerCapture(bevent.pointerId);
} else {
target_56902.setPointerCapture(bevent.pointerId);
}

if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.dom.class_QMARK_(app.util.dom.get_target(bevent),"viewport-controls");
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = app.util.dom.class_QMARK_(app.util.dom.get_target(bevent),"viewport-selrect");
if(or__5025__auto____$1){
return or__5025__auto____$1;
} else {
return app.util.dom.child_QMARK_(app.util.dom.get_target(bevent),app.util.dom.query.cljs$core$IFn$_invoke$arity$1(".grid-layout-editor"));
}
}
})())){
app.util.dom.stop_propagation(bevent);

if(cljs.core.truth_(cljs.core.deref(z_QMARK_))){
return null;
} else {
var event = app.util.dom.event__GT_native_event(bevent);
var ctrl_QMARK_ = app.util.keyboard.ctrl_QMARK_(event);
var meta_QMARK_ = app.util.keyboard.meta_QMARK_(event);
var shift_QMARK_ = app.util.keyboard.shift_QMARK_(event);
var alt_QMARK_ = app.util.keyboard.alt_QMARK_(event);
var mod_QMARK_ = app.util.keyboard.mod_QMARK_(event);
var left_click_QMARK_ = ((cljs.core.not(panning)) && (app.util.dom.left_mouse_QMARK_(bevent)));
var middle_click_QMARK_ = ((cljs.core.not(panning)) && (app.util.dom.middle_mouse_QMARK_(bevent)));
if(cljs.core.truth_((function (){var or__5025__auto__ = middle_click_QMARK_;
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = left_click_QMARK_;
if(and__5023__auto__){
return cljs.core.deref(space_QMARK_);
} else {
return and__5023__auto__;
}
}
})())){
app.util.dom.prevent_default(bevent);

if(mod_QMARK_){
var raw_pt = app.util.dom.get_client_position(event);
var pt = app.main.ui.workspace.viewport.viewport_ref.point__GT_viewport(raw_pt);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.start_zooming(pt));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.start_panning());
}
} else {
if(left_click_QMARK_){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.util.mouse.__GT_MouseEvent(new cljs.core.Keyword(null,"down","down",1565245570),ctrl_QMARK_,shift_QMARK_,alt_QMARK_,meta_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("app.main.data.workspace.specialized-panel","interrupt","app.main.data.workspace.specialized-panel/interrupt",-2063805375)], 0));

if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(edition,id);
if(and__5023__auto__){
var or__5025__auto__ = text_editing_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return grid_editing_QMARK_;
}
} else {
return and__5023__auto__;
}
})())){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.clear_edition_mode());

if(cljs.core.truth_((function (){var and__5023__auto__ = text_editing_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"render-wasm/v1");
if(cljs.core.truth_(and__5023__auto____$1)){
return app.render_wasm.wasm.context_initialized_QMARK_;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
var temp__5825__auto___56904 = (app.render_wasm.api.text_editor_sync_content.cljs$core$IFn$_invoke$arity$0 ? app.render_wasm.api.text_editor_sync_content.cljs$core$IFn$_invoke$arity$0() : app.render_wasm.api.text_editor_sync_content.call(null));
if(cljs.core.truth_(temp__5825__auto___56904)){
var map__56878_56905 = temp__5825__auto___56904;
var map__56878_56906__$1 = cljs.core.__destructure_map(map__56878_56905);
var shape_id_56907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56878_56906__$1,new cljs.core.Keyword(null,"shape-id","shape-id",981169327));
var content_56908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56878_56906__$1,new cljs.core.Keyword(null,"content","content",15833224));
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.v2_update_text_shape_content.cljs$core$IFn$_invoke$arity$variadic(shape_id_56907,content_56908,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-name?","update-name?",-1643455272),true,new cljs.core.Keyword(null,"finalize?","finalize?",687625539),true], 0)));
} else {
}

(app.render_wasm.api.text_editor_stop.cljs$core$IFn$_invoke$arity$0 ? app.render_wasm.api.text_editor_stop.cljs$core$IFn$_invoke$arity$0() : app.render_wasm.api.text_editor_stop.call(null));
} else {
}
} else {
}

if(((cljs.core.not(text_editing_QMARK_)) && (((cljs.core.not(blocked)) && (((cljs.core.not(hidden)) && (((cljs.core.not(create_comment_QMARK_)) && (cljs.core.not(drawing_path_QMARK_)))))))))){
if(cljs.core.truth_(node_editing_QMARK_)){
if(cljs.core.truth_(read_only_QMARK_)){
return null;
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.handle_area_selection(shift_QMARK_,((shift_QMARK_) && (mod_QMARK_))));
}
} else {
if(cljs.core.truth_(drawing_tool)){
if(cljs.core.truth_(read_only_QMARK_)){
return null;
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.drawing.start_drawing(drawing_tool));
}
} else {
if(((cljs.core.not(id)) || (mod_QMARK_))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.handle_area_selection(shift_QMARK_,((shift_QMARK_) && (mod_QMARK_)),mod_QMARK_));
} else {
if(cljs.core.not(drawing_tool)){
if(cljs.core.truth_(read_only_QMARK_)){
return null;
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.start_move_selected.cljs$core$IFn$_invoke$arity$2(id,shift_QMARK_));
}
} else {
return null;
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
}
}
} else {
return null;
}
}));
});
app.main.ui.workspace.viewport.actions.on_move_selected = (function app$main$ui$workspace$viewport$actions$on_move_selected(hover,hover_ids,selected,space_QMARK_,z_QMARK_,read_only_QMARK_){
return rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(hover)),rumext.v2.adapt(cljs.core.deref(hover_ids)),rumext.v2.adapt(selected),rumext.v2.adapt(cljs.core.deref(space_QMARK_)),rumext.v2.adapt(cljs.core.deref(z_QMARK_)),rumext.v2.adapt(read_only_QMARK_)],(function (bevent){
var event = app.util.dom.event__GT_native_event(bevent);
var shift_QMARK_ = app.util.keyboard.shift_QMARK_(event);
var mod_QMARK_ = app.util.keyboard.mod_QMARK_(event);
if(((app.util.dom.left_mouse_QMARK_(bevent)) && ((((!(mod_QMARK_))) && ((((!(shift_QMARK_))) && (cljs.core.not(cljs.core.deref(space_QMARK_))))))))){
app.util.dom.prevent_default(bevent);

app.util.dom.stop_propagation(bevent);

if(cljs.core.truth_((function (){var or__5025__auto__ = read_only_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(z_QMARK_);
}
})())){
return null;
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.start_move_selected.cljs$core$IFn$_invoke$arity$0());
}
} else {
return null;
}
}));
});
app.main.ui.workspace.viewport.actions.on_frame_select = (function app$main$ui$workspace$viewport$actions$on_frame_select(selected,read_only_QMARK_){
return rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected),rumext.v2.adapt(read_only_QMARK_)],(function (event,id){
var shift_QMARK_ = app.util.keyboard.shift_QMARK_(event);
var selected_QMARK_ = cljs.core.contains_QMARK_(selected,id);
var selected_drawtool = cljs.core.deref(app.main.refs.selected_drawing_tool);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(((((shift_QMARK_) || ((!(selected_QMARK_)))))?app.main.data.workspace.select_shape.cljs$core$IFn$_invoke$arity$2(id,shift_QMARK_):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((selected_drawtool == null)) && ((((!(shift_QMARK_))) && (cljs.core.not(read_only_QMARK_))))))?app.main.data.workspace.start_move_selected.cljs$core$IFn$_invoke$arity$0():null)], 0));
}));
});
app.main.ui.workspace.viewport.actions.on_frame_enter = (function app$main$ui$workspace$viewport$actions$on_frame_enter(frame_hover){
return rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (id){
return cljs.core.reset_BANG_(frame_hover,id);
}));
});
app.main.ui.workspace.viewport.actions.on_frame_leave = (function app$main$ui$workspace$viewport$actions$on_frame_leave(frame_hover){
return rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(frame_hover,null);
}));
});
app.main.ui.workspace.viewport.actions.on_click = (function app$main$ui$workspace$viewport$actions$on_click(hover,selected,edition,drawing_path_QMARK_,drawing_tool,space_QMARK_,selrect,z_QMARK_){
return rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(hover)),rumext.v2.adapt(selected),rumext.v2.adapt(edition),rumext.v2.adapt(drawing_path_QMARK_),rumext.v2.adapt(drawing_tool),rumext.v2.adapt(cljs.core.deref(space_QMARK_)),rumext.v2.adapt(selrect),rumext.v2.adapt(cljs.core.deref(z_QMARK_))],(function (event){
if(cljs.core.truth_((function (){var and__5023__auto__ = (selrect == null);
if(and__5023__auto__){
var or__5025__auto__ = app.util.dom.class_QMARK_(app.util.dom.get_target(event),"viewport-controls");
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = app.util.dom.child_QMARK_(app.util.dom.get_target(event),app.util.dom.query.cljs$core$IFn$_invoke$arity$1(".grid-layout-editor"));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return app.util.dom.class_QMARK_(app.util.dom.get_target(event),"viewport-selrect");
}
}
} else {
return and__5023__auto__;
}
})())){
var ctrl_QMARK_ = app.util.keyboard.ctrl_QMARK_(event);
var shift_QMARK_ = app.util.keyboard.shift_QMARK_(event);
var alt_QMARK_ = app.util.keyboard.alt_QMARK_(event);
var meta_QMARK_ = app.util.keyboard.meta_QMARK_(event);
var hovering_QMARK_ = (!((cljs.core.deref(hover) == null)));
var raw_pt = app.util.dom.get_client_position(event);
var pt = app.main.ui.workspace.viewport.viewport_ref.point__GT_viewport(raw_pt);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.util.mouse.__GT_MouseEvent(new cljs.core.Keyword(null,"click","click",1912301393),ctrl_QMARK_,shift_QMARK_,alt_QMARK_,meta_QMARK_));

if(((hovering_QMARK_) && (((cljs.core.not(cljs.core.deref(space_QMARK_))) && (((cljs.core.not(edition)) && (((cljs.core.not(drawing_path_QMARK_)) && (cljs.core.not(drawing_tool)))))))))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.select_shape.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hover)),shift_QMARK_));
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = hovering_QMARK_;
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core.not(cljs.core.deref(space_QMARK_));
if(and__5023__auto____$1){
var and__5023__auto____$2 = edition;
if(cljs.core.truth_(and__5023__auto____$2)){
return ((cljs.core.not(drawing_path_QMARK_)) && (cljs.core.not(drawing_tool)));
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
var hover_shape_56910 = cljs.core.deref(hover);
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(hover_shape_56910));
if(and__5023__auto__){
var and__5023__auto____$1 = app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"text-editor-wasm/v1");
if(cljs.core.truth_(and__5023__auto____$1)){
return app.render_wasm.wasm.context_initialized_QMARK_;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
var raw_pt_56911__$1 = app.util.dom.get_client_position(event);
var G__56879_56912 = raw_pt_56911__$1.x;
var G__56880_56913 = raw_pt_56911__$1.y;
(app.render_wasm.api.text_editor_set_cursor_from_point.cljs$core$IFn$_invoke$arity$2 ? app.render_wasm.api.text_editor_set_cursor_from_point.cljs$core$IFn$_invoke$arity$2(G__56879_56912,G__56880_56913) : app.render_wasm.api.text_editor_set_cursor_from_point.call(null,G__56879_56912,G__56880_56913));
} else {
}
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref(z_QMARK_);
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.not(cljs.core.deref(space_QMARK_))) && (((cljs.core.not(edition)) && (((cljs.core.not(drawing_path_QMARK_)) && (cljs.core.not(drawing_tool)))))));
} else {
return and__5023__auto__;
}
})())){
if(alt_QMARK_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.decrease_zoom.cljs$core$IFn$_invoke$arity$1(pt));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.increase_zoom.cljs$core$IFn$_invoke$arity$1(pt));
}
} else {
return null;
}
} else {
return null;
}
}));
});
app.main.ui.workspace.viewport.actions.on_double_click = (function app$main$ui$workspace$viewport$actions$on_double_click(hover,hover_ids,hover_top_frame_id,drawing_path_QMARK_,objects,edition,drawing_tool,z_QMARK_,read_only_QMARK_){
return rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(hover)),rumext.v2.adapt(cljs.core.deref(hover_ids)),rumext.v2.adapt(cljs.core.deref(hover_top_frame_id)),rumext.v2.adapt(drawing_path_QMARK_),rumext.v2.adapt(edition),rumext.v2.adapt(drawing_tool),rumext.v2.adapt(cljs.core.deref(z_QMARK_)),rumext.v2.adapt(read_only_QMARK_)],(function (event){
app.util.dom.stop_propagation(event);

if(cljs.core.truth_(cljs.core.deref(z_QMARK_))){
return null;
} else {
var ctrl_QMARK_ = app.util.keyboard.ctrl_QMARK_(event);
var shift_QMARK_ = app.util.keyboard.shift_QMARK_(event);
var alt_QMARK_ = app.util.keyboard.alt_QMARK_(event);
var meta_QMARK_ = app.util.keyboard.meta_QMARK_(event);
var map__56881 = (function (){var or__5025__auto__ = cljs.core.deref(hover);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.first(cljs.core.deref(hover_ids)));
}
})();
var map__56881__$1 = cljs.core.__destructure_map(map__56881);
var shape = map__56881__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56881__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56881__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var editable_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"circle","circle",1903212362),null,new cljs.core.Keyword(null,"image","image",-58725096),null,new cljs.core.Keyword(null,"rect","rect",-108902628),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),type);
var hover_shape = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.common.files.helpers.is_child_QMARK_,objects,id),cljs.core.deref(hover_ids)));
var selected_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,hover_shape);
var grid_layout_id = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.grid_layout_QMARK_,objects),cljs.core.reverse(cljs.core.deref(hover_ids)));
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.util.mouse.__GT_MouseEvent(new cljs.core.Keyword(null,"double-click","double-click",-733492993),ctrl_QMARK_,shift_QMARK_,alt_QMARK_,meta_QMARK_));

return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(drawing_path_QMARK_);
if(and__5023__auto__){
return shape;
} else {
return and__5023__auto__;
}
})())){
if(((editable_QMARK_) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,edition)) && (cljs.core.not(read_only_QMARK_)))))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.select_shape.cljs$core$IFn$_invoke$arity$1(id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.start_editing_selected()], 0));

if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"text","text",-1790561697));
if(and__5023__auto__){
var and__5023__auto____$1 = app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"text-editor-wasm/v1");
if(cljs.core.truth_(and__5023__auto____$1)){
return app.render_wasm.wasm.context_initialized_QMARK_;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return (app.render_wasm.api.text_editor_start.cljs$core$IFn$_invoke$arity$1 ? app.render_wasm.api.text_editor_start.cljs$core$IFn$_invoke$arity$1(id) : app.render_wasm.api.text_editor_start.call(null,id));
} else {
return null;
}
} else {
if((!((selected_shape == null)))){
cljs.core.reset_BANG_(hover,selected_shape);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.select_shape.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected_shape)));
} else {
if(((cljs.core.not(selected_shape)) && ((((!((grid_layout_id == null)))) && (cljs.core.not(read_only_QMARK_)))))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.start_edition_mode(grid_layout_id));
} else {
return null;
}
}
}
} else {
return null;
}
}));
}
}));
});
app.main.ui.workspace.viewport.actions.on_context_menu = (function app$main$ui$workspace$viewport$actions$on_context_menu(hover,hover_ids,read_only_QMARK_){
return rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(hover)),rumext.v2.adapt(cljs.core.deref(hover_ids)),rumext.v2.adapt(read_only_QMARK_)],(function (event){
app.util.dom.prevent_default(event);

if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.dom.class_QMARK_(app.util.dom.get_target(event),"viewport-controls");
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = app.util.dom.child_QMARK_(app.util.dom.get_target(event),app.util.dom.query.cljs$core$IFn$_invoke$arity$1(".grid-layout-editor"));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return app.util.dom.class_QMARK_(app.util.dom.get_target(event),"viewport-selrect");
}
}
})())){
var position = app.util.dom.get_client_position(event);
return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(((((cljs.core.not(read_only_QMARK_)) && ((!((cljs.core.deref(hover) == null))))))?app.main.data.workspace.show_shape_context_menu(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"shape","shape",1190694006),cljs.core.deref(hover),new cljs.core.Keyword(null,"hover-ids","hover-ids",-792079290),cljs.core.deref(hover_ids)], null)):app.main.data.workspace.show_context_menu(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),position], null))));
}));
} else {
return null;
}
}));
});
app.main.ui.workspace.viewport.actions.on_menu_selected = (function app$main$ui$workspace$viewport$actions$on_menu_selected(hover,hover_ids,selected,read_only_QMARK_){
return rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(hover)),rumext.v2.adapt(cljs.core.deref(hover_ids)),rumext.v2.adapt(selected),rumext.v2.adapt(read_only_QMARK_)],(function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

if(cljs.core.truth_(read_only_QMARK_)){
return null;
} else {
var position = app.util.dom.get_client_position(event);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.show_shape_context_menu(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"hover-ids","hover-ids",-792079290),cljs.core.deref(hover_ids)], null)));
}
}));
});
app.main.ui.workspace.viewport.actions.on_pointer_up = (function app$main$ui$workspace$viewport$actions$on_pointer_up(disable_paste_ref){
return rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

var target_56950 = app.util.dom.get_target(event);
target_56950.releasePointerCapture(event.pointerId);

var event__$1 = app.util.dom.event__GT_native_event(event);
var ctrl_QMARK_ = app.util.keyboard.ctrl_QMARK_(event__$1);
var shift_QMARK_ = app.util.keyboard.shift_QMARK_(event__$1);
var alt_QMARK_ = app.util.keyboard.alt_QMARK_(event__$1);
var meta_QMARK_ = app.util.keyboard.meta_QMARK_(event__$1);
var left_click_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),event__$1.which);
var middle_click_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),event__$1.which);
if(left_click_QMARK_){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.util.mouse.__GT_MouseEvent(new cljs.core.Keyword(null,"up","up",-269712113),ctrl_QMARK_,shift_QMARK_,alt_QMARK_,meta_QMARK_));
} else {
}

if(middle_click_QMARK_){
app.util.dom.prevent_default(event__$1);

rumext.v2.set_ref_val_BANG_(disable_paste_ref,true);

app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
return rumext.v2.set_ref_val_BANG_(disable_paste_ref,false);
}));
} else {
}

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.finish_panning(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.finish_zooming()], 0));
}));
});
app.main.ui.workspace.viewport.actions.on_pointer_enter = (function app$main$ui$workspace$viewport$actions$on_pointer_enter(in_viewport_ref){
return rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return rumext.v2.set_ref_val_BANG_(in_viewport_ref,true);
}));
});
app.main.ui.workspace.viewport.actions.on_pointer_leave = (function app$main$ui$workspace$viewport$actions$on_pointer_leave(in_viewport_ref){
return rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return rumext.v2.set_ref_val_BANG_(in_viewport_ref,false);
}));
});
app.main.ui.workspace.viewport.actions.on_key_down = (function app$main$ui$workspace$viewport$actions$on_key_down(){
return rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (event){
var bevent = event.getBrowserEvent();
var key = event.key;
var ctrl_QMARK_ = app.util.keyboard.ctrl_QMARK_(event);
var shift_QMARK_ = app.util.keyboard.shift_QMARK_(event);
var alt_QMARK_ = app.util.keyboard.alt_QMARK_(event);
var meta_QMARK_ = app.util.keyboard.meta_QMARK_(event);
var mod_QMARK_ = app.util.keyboard.mod_QMARK_(event);
var target = app.util.dom.get_target(event);
var editing_QMARK_ = ((app.util.text.ui.some_text_editor_content_QMARK_(target)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("rich-text",app.util.object.get.cljs$core$IFn$_invoke$arity$2(target,"className"))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("INPUT",app.util.object.get.cljs$core$IFn$_invoke$arity$2(target,"tagName"))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("TEXTAREA",app.util.object.get.cljs$core$IFn$_invoke$arity$2(target,"tagName"))))))));
if(cljs.core.truth_(bevent.repeat)){
return null;
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.util.keyboard.__GT_KeyboardEvent(new cljs.core.Keyword(null,"down","down",1565245570),key,shift_QMARK_,ctrl_QMARK_,alt_QMARK_,meta_QMARK_,mod_QMARK_,editing_QMARK_,event));
}
}));
});
app.main.ui.workspace.viewport.actions.on_key_up = (function app$main$ui$workspace$viewport$actions$on_key_up(){
return rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (event){
var key = event.key;
var ctrl_QMARK_ = app.util.keyboard.ctrl_QMARK_(event);
var shift_QMARK_ = app.util.keyboard.shift_QMARK_(event);
var alt_QMARK_ = app.util.keyboard.alt_QMARK_(event);
var meta_QMARK_ = app.util.keyboard.meta_QMARK_(event);
var mod_QMARK_ = app.util.keyboard.mod_QMARK_(event);
var target = app.util.dom.get_target(event);
var editing_QMARK_ = ((app.util.text.ui.some_text_editor_content_QMARK_(target)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("rich-text",app.util.object.get.cljs$core$IFn$_invoke$arity$2(target,"className"))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("INPUT",app.util.object.get.cljs$core$IFn$_invoke$arity$2(target,"tagName"))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("TEXTAREA",app.util.object.get.cljs$core$IFn$_invoke$arity$2(target,"tagName"))))))));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.util.keyboard.__GT_KeyboardEvent(new cljs.core.Keyword(null,"up","up",-269712113),key,shift_QMARK_,ctrl_QMARK_,alt_QMARK_,meta_QMARK_,mod_QMARK_,editing_QMARK_,event));
}));
});
app.main.ui.workspace.viewport.actions.on_pointer_move = (function app$main$ui$workspace$viewport$actions$on_pointer_move(move_stream){
var last_position = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(null);
return rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var raw_pt = app.util.dom.get_client_position(event);
var pt = app.main.ui.workspace.viewport.viewport_ref.point__GT_viewport(raw_pt);
var delta = (cljs.core.truth_(cljs.core.deref(last_position))?app.common.geom.point.subtract(raw_pt,cljs.core.deref(last_position)):app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0)));
move_stream.next(pt);

cljs.core.reset_BANG_(last_position,raw_pt);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.util.mouse.__GT_PointerEvent(new cljs.core.Keyword(null,"delta","delta",108939957),delta,app.util.keyboard.ctrl_QMARK_(event),app.util.keyboard.shift_QMARK_(event),app.util.keyboard.alt_QMARK_(event),app.util.keyboard.meta_QMARK_(event)));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.util.mouse.__GT_PointerEvent(new cljs.core.Keyword(null,"viewport","viewport",443342715),pt,app.util.keyboard.ctrl_QMARK_(event),app.util.keyboard.shift_QMARK_(event),app.util.keyboard.alt_QMARK_(event),app.util.keyboard.meta_QMARK_(event)));
}));
});
/**
 * Accumulate a compound zoom scale and a cursor point into `state`, scheduling
 *   a single requestAnimationFrame flush if one is not already pending.  On the
 *   next frame the accumulated scale is applied via `dw/set-zoom` and the state
 *   is reset to its idle values.
 */
app.main.ui.workspace.viewport.actions.schedule_zoom_BANG_ = (function app$main$ui$workspace$viewport$actions$schedule_zoom_BANG_(state,scale,pt){
var pending_QMARK_ = (state.zoomRafId > (0));
(state.scale = (state.scale * scale));

(state.zoomPt = pt);

if(pending_QMARK_){
return null;
} else {
return (state.zoomRafId = app.util.timers.raf((function (){
var s = state.scale;
var zp = state.zoomPt;
(state.scale = (1));

(state.zoomPt = null);

(state.zoomRafId = (0));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_zoom.cljs$core$IFn$_invoke$arity$2(zp,s));
})));
}
});
/**
 * Accumulate scroll deltas into `state`, scheduling a single
 *   requestAnimationFrame flush if one is not already pending.  On the next
 *   frame the accumulated dx/dy are applied via `dw/update-viewport-position`
 *   and the state is reset to its idle values.
 */
app.main.ui.workspace.viewport.actions.schedule_scroll_BANG_ = (function app$main$ui$workspace$viewport$actions$schedule_scroll_BANG_(state,zoom,event,delta_x,delta_y){
var pending_QMARK_ = (state.rafId > (0));
if((((!(app.config.check_platform_QMARK_(new cljs.core.Keyword(null,"macos","macos",-1712303293))))) && (app.util.keyboard.shift_QMARK_(event)))){
(state.dx = (state.dx + (delta_y / zoom)));
} else {
(state.dx = (state.dx + (delta_x / zoom)));

(state.dy = (state.dy + (delta_y / zoom)));
}

if(pending_QMARK_){
return null;
} else {
return (state.rafId = app.util.timers.raf((function (){
var dx = state.dx;
var dy = state.dy;
(state.dx = (0));

(state.dy = (0));

(state.rafId = (0));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_viewport_position(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__56882_SHARP_){
return (p1__56882_SHARP_ + dx);
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__56883_SHARP_){
return (p1__56883_SHARP_ + dy);
})], null)));
})));
}
});
app.main.ui.workspace.viewport.actions.on_mouse_wheel = (function app$main$ui$workspace$viewport$actions$on_mouse_wheel(zoom_ref){
var scroll_state = rumext.v2.use_ref(({"dx": (0), "dy": (0), "rafId": (0), "scale": (1), "zoomPt": null, "zoomRafId": (0)}));
return rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (event){
var event__$1 = event.getBrowserEvent();
var target = app.util.dom.get_target(event__$1);
var mod_QMARK_ = app.util.keyboard.mod_QMARK_(event__$1);
var ctrl_QMARK_ = app.util.keyboard.ctrl_QMARK_(event__$1);
var picking_color_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("pixel-overlay",target.id);
var comments_layer_QMARK_ = app.util.dom.is_child_QMARK_(app.util.dom.get_element("comments"),target);
var raw_pt = app.util.dom.get_client_position(event__$1);
var pt = app.main.ui.workspace.viewport.viewport_ref.point__GT_viewport(raw_pt);
var norm_event = app.util.dom.normalize_wheel.normalize_wheel(event__$1);
var delta_y = norm_event.pixelY;
var delta_x = norm_event.pixelX;
var delta_zoom = (delta_y + delta_x);
var scale = ((1) + app.common.math.abs((app.main.ui.workspace.viewport.actions.scale_per_pixel * delta_zoom)));
var scale__$1 = (((delta_zoom > (0)))?((1) / scale):scale);
if(cljs.core.truth_((function (){var or__5025__auto__ = app.main.ui.workspace.viewport.viewport_ref.inside_viewport_QMARK_(target);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return picking_color_QMARK_;
}
})())){
app.util.dom.prevent_default(event__$1);

app.util.dom.stop_propagation(event__$1);

if(((ctrl_QMARK_) || (mod_QMARK_))){
app.main.ui.workspace.viewport.actions.schedule_zoom_BANG_(rumext.v2.ref_val(scroll_state),scale__$1,pt);
} else {
app.main.ui.workspace.viewport.actions.schedule_scroll_BANG_(rumext.v2.ref_val(scroll_state),rumext.v2.ref_val(zoom_ref),event__$1,delta_x,delta_y);
}
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = comments_layer_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return ((ctrl_QMARK_) || (mod_QMARK_));
} else {
return and__5023__auto__;
}
})())){
app.util.dom.prevent_default(event__$1);

app.util.dom.stop_propagation(event__$1);

return app.main.ui.workspace.viewport.actions.schedule_zoom_BANG_(rumext.v2.ref_val(scroll_state),scale__$1,pt);
} else {
return null;
}
}));
});
app.main.ui.workspace.viewport.actions.on_drag_enter = (function app$main$ui$workspace$viewport$actions$on_drag_enter(comp_inst_ref){
return rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (e){
var component_inst_QMARK__56951 = rumext.v2.ref_val(comp_inst_ref);
if(cljs.core.truth_((function (){var and__5023__auto__ = app.util.dom.dnd.has_type_QMARK_(e,"penpot/component");
if(cljs.core.truth_(and__5023__auto__)){
return ((app.util.dom.class_QMARK_(app.util.dom.get_target(e),"viewport-controls")) && (cljs.core.not(component_inst_QMARK__56951)));
} else {
return and__5023__auto__;
}
})())){
var point_56952 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(e.clientX,e.clientY);
var viewport_coord_56953 = app.main.ui.workspace.viewport.viewport_ref.point__GT_viewport(point_56952);
var map__56898_56954 = cljs.core.deref(app.main.ui.workspace.sidebar.assets.components.drag_data_STAR_);
var map__56898_56955__$1 = cljs.core.__destructure_map(map__56898_56954);
var component_56956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56898_56955__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var file_id_56957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56898_56955__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var shape_56958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56898_56955__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var final_x_56959 = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(viewport_coord_56953) - (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(shape_56958) / (2)));
var final_y_56960 = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(viewport_coord_56953) - (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(shape_56958) / (2)));
rumext.v2.set_ref_val_BANG_(comp_inst_ref,true);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.instantiate_component.cljs$core$IFn$_invoke$arity$4(file_id_56957,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component_56956),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(final_x_56959,final_y_56960),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-move?","start-move?",952844762),true,new cljs.core.Keyword(null,"initial-point","initial-point",-1460665937),viewport_coord_56953,new cljs.core.Keyword(null,"origin","origin",1037372088),"sidebar"], null)));
} else {
}

if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.dom.dnd.has_type_QMARK_(e,"penpot/shape");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = app.util.dom.dnd.has_type_QMARK_(e,"penpot/component");
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = app.util.dom.dnd.has_type_QMARK_(e,"Files");
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = app.util.dom.dnd.has_type_QMARK_(e,"text/uri-list");
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
return app.util.dom.dnd.has_type_QMARK_(e,"text/asset-id");
}
}
}
}
})())){
return app.util.dom.prevent_default(e);
} else {
return null;
}
}));
});
app.main.ui.workspace.viewport.actions.on_drag_end = (function app$main$ui$workspace$viewport$actions$on_drag_end(comp_inst_ref){
return rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (){
return rumext.v2.set_ref_val_BANG_(comp_inst_ref,false);
}));
});
app.main.ui.workspace.viewport.actions.on_drag_over = (function app$main$ui$workspace$viewport$actions$on_drag_over(move_stream){
var on_pointer_move = app.main.ui.workspace.viewport.actions.on_pointer_move(move_stream);
var on_pointer_move__$1 = app.util.rxops.throttle_fn((50),(function (e){
return app.util.timers.raf((function (){
return (on_pointer_move.cljs$core$IFn$_invoke$arity$1 ? on_pointer_move.cljs$core$IFn$_invoke$arity$1(e) : on_pointer_move.call(null,e));
}));
}));
return rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (e){
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.dom.dnd.has_type_QMARK_(e,"penpot/shape");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = app.util.dom.dnd.has_type_QMARK_(e,"penpot/component");
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = app.util.dom.dnd.has_type_QMARK_(e,"Files");
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = app.util.dom.dnd.has_type_QMARK_(e,"text/uri-list");
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
return app.util.dom.dnd.has_type_QMARK_(e,"text/asset-id");
}
}
}
}
})())){
on_pointer_move__$1(e);

return app.util.dom.prevent_default(e);
} else {
return null;
}
}));
});
app.main.ui.workspace.viewport.actions.on_drop = (function app$main$ui$workspace$viewport$actions$on_drop(file,comp_inst_ref){
return rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

var point = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(event.clientX,event.clientY);
var viewport_coord = app.main.ui.workspace.viewport.viewport_ref.point__GT_viewport(point);
if(cljs.core.truth_(app.util.dom.dnd.has_type_QMARK_(event,"penpot/shape"))){
var shape = app.util.dom.dnd.get_data.cljs$core$IFn$_invoke$arity$2(event,"penpot/shape");
var final_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(viewport_coord) - (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(shape) / (2)));
var final_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(viewport_coord) - (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(shape) / (2)));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.add_shape.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next()),new cljs.core.Keyword(null,"x","x",2099068185),final_x),new cljs.core.Keyword(null,"y","y",-1757859776),final_y)));
} else {
if(cljs.core.truth_(app.util.dom.dnd.has_type_QMARK_(event,"penpot/component"))){
var event__$1 = app.util.dom.event__GT_native_event(event);
var ctrl_QMARK_ = app.util.keyboard.ctrl_QMARK_(event__$1);
var shift_QMARK_ = app.util.keyboard.shift_QMARK_(event__$1);
var alt_QMARK_ = app.util.keyboard.alt_QMARK_(event__$1);
var meta_QMARK_ = app.util.keyboard.meta_QMARK_(event__$1);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.util.mouse.__GT_MouseEvent(new cljs.core.Keyword(null,"up","up",-269712113),ctrl_QMARK_,shift_QMARK_,alt_QMARK_,meta_QMARK_));

return rumext.v2.set_ref_val_BANG_(comp_inst_ref,false);
} else {
if(cljs.core.truth_(app.util.dom.dnd.has_type_QMARK_(event,"Files"))){
var files = app.util.dom.dnd.get_files(event);
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"position","position",-2011731912),viewport_coord,new cljs.core.Keyword(null,"blobs","blobs",-1606355916),cljs.core.seq(files)], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.media.upload_media_workspace(params));
} else {
if(cljs.core.truth_(app.util.dom.dnd.has_type_QMARK_(event,"text/uri-list"))){
var data = app.util.dom.dnd.get_data.cljs$core$IFn$_invoke$arity$2(event,"text/uri-list");
var lines = cuerdas.core.lines(data);
var uris = cljs.core.filterv((function (p1__56899_SHARP_){
return cuerdas.core.starts_with_QMARK_(p1__56899_SHARP_,"http");
}),lines);
var data__$1 = cljs.core.filterv((function (p1__56900_SHARP_){
return cuerdas.core.starts_with_QMARK_(p1__56900_SHARP_,"data:image/");
}),lines);
var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"position","position",-2011731912),viewport_coord], null);
var params__$1 = ((cljs.core.seq(uris))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"uris","uris",-253706916),uris):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"blobs","blobs",-1606355916),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.util.webapi.data_uri__GT_blob,data__$1)));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.media.upload_media_workspace(params__$1));
} else {
var files = app.util.dom.dnd.get_files(event);
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"position","position",-2011731912),viewport_coord,new cljs.core.Keyword(null,"blobs","blobs",-1606355916),cljs.core.seq(files)], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.media.upload_media_workspace(params));

}
}
}
}
}));
});
app.main.ui.workspace.viewport.actions.invalid_paste_targets = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["INPUT",null,"TEXTAREA",null], null), null);
app.main.ui.workspace.viewport.actions.on_paste = (function app$main$ui$workspace$viewport$actions$on_paste(disable_paste_ref,in_viewport_ref,read_only_QMARK_){
return rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(read_only_QMARK_)],(function (event){
var tag_name = app.util.dom.get_tag_name(app.util.dom.get_target(event));
var disable_paste_QMARK_ = rumext.v2.ref_val(disable_paste_ref);
var in_viewport_QMARK_ = rumext.v2.ref_val(in_viewport_ref);
if((((!(cljs.core.contains_QMARK_(app.main.ui.workspace.viewport.actions.invalid_paste_targets,tag_name)))) && (((cljs.core.not(disable_paste_QMARK_)) && (cljs.core.not(read_only_QMARK_)))))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.paste_from_event(event,in_viewport_QMARK_));
} else {
return null;
}
}));
});

//# sourceMappingURL=app.main.ui.workspace.viewport.actions.js.map
