import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.shapes.flex_layout.js";
import "./app.common.geom.shapes.points.js";
import "./app.common.types.modifiers.js";
import "./app.common.types.shape.layout.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.modifiers.js";
import "./app.main.data.workspace.transforms.js";
import "./app.main.features.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.css_cursors.js";
import "./app.main.ui.flex_controls.common.js";
import "./app.main.ui.workspace.viewport.viewport_ref.js";
import "./app.util.dom.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.flex_controls.gap');
app.main.ui.flex_controls.gap.gap_display = (function app$main$ui$flex_controls$gap$gap_display(props_56585){
var map__56586 = rumext.v2.util.wrap_props(props_56585);
var map__56586__$1 = cljs.core.__destructure_map(map__56586);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56586__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56586__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var hover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56586__$1,new cljs.core.Keyword(null,"hover?","hover?",-1201331489));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56586__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var on_pointer_leave = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56586__$1,new cljs.core.Keyword(null,"on-pointer-leave","on-pointer-leave",253985380));
var gap_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56586__$1,new cljs.core.Keyword(null,"gap-type","gap-type",-691516251));
var on_pointer_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56586__$1,new cljs.core.Keyword(null,"on-pointer-enter","on-pointer-enter",199832041));
var mouse_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56586__$1,new cljs.core.Keyword(null,"mouse-pos","mouse-pos",370762057));
var on_context_menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56586__$1,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340));
var on_move_selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56586__$1,new cljs.core.Keyword(null,"on-move-selected","on-move-selected",117316753));
var hover_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56586__$1,new cljs.core.Keyword(null,"hover-value","hover-value",1679488403));
var rect_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56586__$1,new cljs.core.Keyword(null,"rect-data","rect-data",627750614));
var gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56586__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56586__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072));
var resizing = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(null);
var start = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(null);
var original_value = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1((0));
var last_pos = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(null);
var negate_QMARK_ = new cljs.core.Keyword(null,"resize-negate?","resize-negate?",-1130986046).cljs$core$IFn$_invoke$arity$1(rect_data);
var axis = new cljs.core.Keyword(null,"resize-axis","resize-axis",-1746101927).cljs$core$IFn$_invoke$arity$1(rect_data);
var on_pointer_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frame_id),rumext.v2.adapt(gap_type),rumext.v2.adapt(gap)],(function (event){
app.util.dom.capture_pointer(event);

cljs.core.reset_BANG_(resizing,gap_type);

cljs.core.reset_BANG_(start,app.util.dom.get_client_position(event));

return cljs.core.reset_BANG_(original_value,new cljs.core.Keyword(null,"initial-value","initial-value",470619381).cljs$core$IFn$_invoke$arity$1(rect_data));
}));
var calc_modifiers = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frame_id),rumext.v2.adapt(gap_type),rumext.v2.adapt(gap)],(function (pos){
var delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__56587 = app.common.geom.point.to_vec(cljs.core.deref(start),pos);
if(cljs.core.truth_(negate_QMARK_)){
return app.common.geom.point.negate(G__56587);
} else {
return G__56587;
}
})(),axis);
var val = ((function (){var x__5110__auto__ = (cljs.core.deref(original_value) + (delta / zoom));
var y__5111__auto__ = (0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})() | (0));
var layout_gap = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(gap,gap_type,val);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,app.main.data.workspace.modifiers.create_modif_tree(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_id], null),app.common.types.modifiers.change_property(app.common.types.modifiers.empty(),new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),layout_gap))], null);
}));
var on_lost_pointer_capture = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(calc_modifiers)],(function (event){
app.util.dom.release_pointer(event);

if(cljs.core.truth_((function (){var and__5023__auto__ = app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"render-wasm/v1");
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(resizing),gap_type);
} else {
return and__5023__auto__;
}
})())){
var vec__56588_56663 = (function (){var G__56591 = cljs.core.deref(last_pos);
return (calc_modifiers.cljs$core$IFn$_invoke$arity$1 ? calc_modifiers.cljs$core$IFn$_invoke$arity$1(G__56591) : calc_modifiers.call(null,G__56591));
})();
var __56664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56588_56663,(0),null);
var modifiers_56665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56588_56663,(1),null);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.modifiers.apply_wasm_modifiers(modifiers_56665),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.transforms.finish_transform()], 0));
} else {
}

cljs.core.reset_BANG_(resizing,null);

cljs.core.reset_BANG_(start,null);

cljs.core.reset_BANG_(original_value,(0));

if(cljs.core.not(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"render-wasm/v1"))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.modifiers.apply_modifiers.cljs$core$IFn$_invoke$arity$0());
} else {
return null;
}
}));
var on_pointer_move = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(calc_modifiers),rumext.v2.adapt(on_change)],(function (event){
var pos = app.util.dom.get_client_position(event);
cljs.core.reset_BANG_(last_pos,pos);

cljs.core.reset_BANG_(mouse_pos,app.main.ui.workspace.viewport.viewport_ref.point__GT_viewport(pos));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(resizing),gap_type)){
var vec__56593 = (calc_modifiers.cljs$core$IFn$_invoke$arity$1 ? calc_modifiers.cljs$core$IFn$_invoke$arity$1(pos) : calc_modifiers.call(null,pos));
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56593,(0),null);
var modifiers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56593,(1),null);
cljs.core.reset_BANG_(hover_value,val);

if(cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"render-wasm/v1"))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.modifiers.set_wasm_modifiers(modifiers));
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.modifiers.set_modifiers.cljs$core$IFn$_invoke$arity$1(modifiers));
}

if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(modifiers) : on_change.call(null,modifiers));
} else {
return null;
}
} else {
return null;
}
}));
return rumext.v2.jsxs("g",{'className':"gap-rect",'children':[rumext.v2.jsx("rect",{'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect_data),'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect_data),'className':"info-area",'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect_data),'onContextMenu':on_context_menu,'style':{'fill':(cljs.core.truth_((function (){var or__5025__auto__ = hover_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return selected_QMARK_;
}
})())?app.main.ui.flex_controls.common.distance_color:"none"),'opacity':(cljs.core.truth_(selected_QMARK_)?0.5:0.25)},'y':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect_data),'onPointerMove':on_pointer_move,'onPointerDown':on_move_selected,'onPointerLeave':on_pointer_leave,'onPointerEnter':on_pointer_enter}),(function (){var handle_width = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"x","x",2099068185)))?((2) / zoom):(function (){var x__5113__auto__ = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect_data) * 0.5);
var y__5114__auto__ = ((20) / zoom);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})());
var handle_height = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"y","y",-1757859776)))?((2) / zoom):(function (){var x__5113__auto__ = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect_data) * 0.5);
var y__5114__auto__ = ((30) / zoom);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})());
return rumext.v2.jsx("rect",{'width':handle_width,'height':handle_height,'className':"handle"+" "+((cljs.core.truth_((function (){var or__5025__auto__ = hover_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return selected_QMARK_;
}
})())?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resize-axis","resize-axis",-1746101927).cljs$core$IFn$_invoke$arity$1(rect_data),new cljs.core.Keyword(null,"x","x",2099068185)))?app.main.ui.css_cursors.get_dynamic("resize-ew",(0)):app.main.ui.css_cursors.get_dynamic("resize-ew",(90))):null) ?? ""),'x':(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect_data) + ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect_data) - handle_width) / (2))),'onContextMenu':on_context_menu,'style':{'fill':(cljs.core.truth_((function (){var or__5025__auto__ = hover_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return selected_QMARK_;
}
})())?app.main.ui.flex_controls.common.distance_color:"none"),'opacity':(cljs.core.truth_(selected_QMARK_)?(0):(1))},'onLostPointerCapture':on_lost_pointer_capture,'y':(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect_data) + ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect_data) - handle_height) / (2))),'onPointerMove':on_pointer_move,'onPointerDown':on_pointer_down,'onPointerLeave':on_pointer_leave,'onPointerEnter':on_pointer_enter});
})()]});
});

(app.main.ui.flex_controls.gap.gap_display.displayName = "gap-display");

app.main.ui.flex_controls.gap.gap_rects = (function app$main$ui$flex_controls$gap$gap_rects(props_56603){
var map__56604 = rumext.v2.util.wrap_props(props_56603);
var map__56604__$1 = cljs.core.__destructure_map(map__56604);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56604__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56604__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var on_move_selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56604__$1,new cljs.core.Keyword(null,"on-move-selected","on-move-selected",117316753));
var on_context_menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56604__$1,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340));
var frame_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame);
var saved_dir = new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670).cljs$core$IFn$_invoke$arity$1(frame);
var is_col_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),saved_dir)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column-reverse","column-reverse",278726587),saved_dir)));
var flip_x = new cljs.core.Keyword(null,"flip-x","flip-x",891276861).cljs$core$IFn$_invoke$arity$1(frame);
var flip_y = new cljs.core.Keyword(null,"flip-y","flip-y",935998815).cljs$core$IFn$_invoke$arity$1(frame);
var pill_width = (app.main.ui.flex_controls.common.flex_display_pill_width / zoom);
var pill_height = (app.main.ui.flex_controls.common.flex_display_pill_height / zoom);
var workspace_modifiers = rumext.v2.deref(app.main.refs.workspace_modifiers);
var workspace_wasm_modifiers = rumext.v2.deref(app.main.refs.workspace_wasm_modifiers);
var gap_selected = rumext.v2.deref(app.main.refs.workspace_gap_selected);
var hover = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var hover_value = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((0));
var mouse_pos = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var current_modifiers = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var frame__$1 = app.common.types.modifiers.apply_structure_modifiers(frame,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_modifiers),frame_id),new cljs.core.Keyword(null,"modifiers","modifiers",50378834)));
var padding = new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747).cljs$core$IFn$_invoke$arity$1(frame__$1);
var gap = new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911).cljs$core$IFn$_invoke$arity$1(frame__$1);
var map__56605 = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(frame__$1);
var map__56605__$1 = cljs.core.__destructure_map(map__56605);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56605__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56605__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56605__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56605__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var on_pointer_enter = (function (hover_type,val){
cljs.core.reset_BANG_(hover,hover_type);

return cljs.core.reset_BANG_(hover_value,val);
});
var on_pointer_leave = (function (){
return cljs.core.reset_BANG_(hover,null);
});
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (modifiers){
return cljs.core.reset_BANG_(current_modifiers,modifiers);
}));
var negate = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-gap","column-gap",384822863),(cljs.core.truth_(flip_x)?true:false),new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),(cljs.core.truth_(flip_y)?true:false)], null);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var children = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.position_absolute_QMARK_,app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$2(objects,frame_id));
var children_to_display = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-reverse","row-reverse",78332847),saved_dir)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column-reverse","column-reverse",278726587),saved_dir))))?cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(children):cljs.core.rest(children));
var children_to_display__$1 = (cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"render-wasm/v1"))?(function (){var modifiers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,workspace_wasm_modifiers);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (shape){
return app.common.geom.shapes.apply_transform(shape,cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));
}),children_to_display);
})():cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56597_SHARP_){
return app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(p1__56597_SHARP_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(workspace_modifiers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56597_SHARP_),new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null)));
}),children_to_display));
var wrap_blocks = (function (){var block_children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56598_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[app.common.geom.shapes.points.parent_coords_bounds(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(p1__56598_SHARP_),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(frame__$1)),p1__56598_SHARP_],null));
}),children);
var bounds = app.common.data.lazy_map(cljs.core.keys(objects),(function (p1__56599_SHARP_){
return app.common.geom.shapes.shape__GT_points(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__56599_SHARP_));
}));
var layout_data = app.common.geom.shapes.flex_layout.calc_layout_data.cljs$core$IFn$_invoke$arity$5(frame__$1,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(frame__$1),block_children,bounds,objects);
var layout_bounds = new cljs.core.Keyword(null,"layout-bounds","layout-bounds",-1028383563).cljs$core$IFn$_invoke$arity$1(layout_data);
var xv = (function (p1__56600_SHARP_){
return app.common.geom.shapes.points.start_hv(layout_bounds,p1__56600_SHARP_);
});
var yv = (function (p1__56601_SHARP_){
return app.common.geom.shapes.points.start_vv(layout_bounds,p1__56601_SHARP_);
});
var iter__5503__auto__ = (function app$main$ui$flex_controls$gap$gap_rects_$_iter__56607(s__56608){
return (new cljs.core.LazySeq(null,(function (){
var s__56608__$1 = s__56608;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56608__$1);
if(temp__5825__auto__){
var s__56608__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56608__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__56608__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__56610 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__56609 = (0);
while(true){
if((i__56609 < size__5502__auto__)){
var map__56611 = cljs.core._nth(c__5501__auto__,i__56609);
var map__56611__$1 = cljs.core.__destructure_map(map__56611);
var start_p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56611__$1,new cljs.core.Keyword(null,"start-p","start-p",767587445));
var line_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56611__$1,new cljs.core.Keyword(null,"line-width","line-width",-906934988));
var line_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56611__$1,new cljs.core.Keyword(null,"line-height","line-height",1870784992));
var layout_gap_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56611__$1,new cljs.core.Keyword(null,"layout-gap-row","layout-gap-row",609410826));
var layout_gap_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56611__$1,new cljs.core.Keyword(null,"layout-gap-col","layout-gap-col",-1979319979));
var num_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56611__$1,new cljs.core.Keyword(null,"num-children","num-children",-1656107233));
cljs.core.chunk_append(b__56610,(function (){var line_width__$1 = ((is_col_QMARK_)?line_width:(line_width + ((num_children - (1)) * layout_gap_row)));
var line_height__$1 = ((is_col_QMARK_)?(line_height + ((num_children - (1)) * layout_gap_col)):line_height);
var end_p = app.common.geom.point.add(app.common.geom.point.add(start_p,xv(line_width__$1)),yv(line_height__$1));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (){var x__5113__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_p);
var y__5114__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end_p);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})(),new cljs.core.Keyword(null,"y1","y1",589123466),(function (){var x__5113__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_p);
var y__5114__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end_p);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})(),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (){var x__5110__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_p);
var y__5111__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end_p);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})(),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (){var x__5110__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_p);
var y__5111__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end_p);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()], null);
})());

var G__56670 = (i__56609 + (1));
i__56609 = G__56670;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56610),app$main$ui$flex_controls$gap$gap_rects_$_iter__56607(cljs.core.chunk_rest(s__56608__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56610),null);
}
} else {
var map__56612 = cljs.core.first(s__56608__$2);
var map__56612__$1 = cljs.core.__destructure_map(map__56612);
var start_p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56612__$1,new cljs.core.Keyword(null,"start-p","start-p",767587445));
var line_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56612__$1,new cljs.core.Keyword(null,"line-width","line-width",-906934988));
var line_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56612__$1,new cljs.core.Keyword(null,"line-height","line-height",1870784992));
var layout_gap_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56612__$1,new cljs.core.Keyword(null,"layout-gap-row","layout-gap-row",609410826));
var layout_gap_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56612__$1,new cljs.core.Keyword(null,"layout-gap-col","layout-gap-col",-1979319979));
var num_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56612__$1,new cljs.core.Keyword(null,"num-children","num-children",-1656107233));
return cljs.core.cons((function (){var line_width__$1 = ((is_col_QMARK_)?line_width:(line_width + ((num_children - (1)) * layout_gap_row)));
var line_height__$1 = ((is_col_QMARK_)?(line_height + ((num_children - (1)) * layout_gap_col)):line_height);
var end_p = app.common.geom.point.add(app.common.geom.point.add(start_p,xv(line_width__$1)),yv(line_height__$1));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (){var x__5113__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_p);
var y__5114__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end_p);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})(),new cljs.core.Keyword(null,"y1","y1",589123466),(function (){var x__5113__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_p);
var y__5114__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end_p);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})(),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (){var x__5110__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_p);
var y__5111__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end_p);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})(),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (){var x__5110__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_p);
var y__5111__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end_p);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()], null);
})(),app$main$ui$flex_controls$gap$gap_rects_$_iter__56607(cljs.core.rest(s__56608__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.Keyword(null,"layout-lines","layout-lines",-1868555037).cljs$core$IFn$_invoke$arity$1(layout_data));
})();
var block_contains = (function (x,y,block){
if(is_col_QMARK_){
return (((new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(block) <= x)) && ((x <= new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(block))));
} else {
return (((new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(block) <= y)) && ((y <= new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(block))));
}
});
var get_container_block = (function (shape){
var selrect = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape);
var x = ((new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(selrect) + new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(selrect)) / (2));
var y = ((new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(selrect) + new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(selrect)) / (2));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56602_SHARP_){
return block_contains(x,y,p1__56602_SHARP_);
}),wrap_blocks));
});
var create_cgdd = (function (shape){
var block = get_container_block(shape);
var x = (cljs.core.truth_(flip_x)?((new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape)) - cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.Keyword(null,"m2","m2",-587003306)], null))) - new cljs.core.Keyword(null,"column-gap","column-gap",384822863).cljs$core$IFn$_invoke$arity$1(gap)):(new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape)) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.Keyword(null,"m2","m2",-587003306)], null))));
var y = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(block);
var h = (new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(block) - new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(block));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"resize-type","resize-type",-1850768191),new cljs.core.Keyword(null,"resize-negate?","resize-negate?",-1130986046),new cljs.core.Keyword(null,"gap-type","gap-type",-691516251),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"initial-value","initial-value",470619381),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"resize-axis","resize-axis",-1746101927),new cljs.core.Keyword(null,"height","height",1025178622)],[y,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"column-gap","column-gap",384822863).cljs$core$IFn$_invoke$arity$1(negate),((is_col_QMARK_)?new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537):new cljs.core.Keyword(null,"column-gap","column-gap",384822863)),new cljs.core.Keyword(null,"column-gap","column-gap",384822863).cljs$core$IFn$_invoke$arity$1(gap),new cljs.core.Keyword(null,"column-gap","column-gap",384822863).cljs$core$IFn$_invoke$arity$1(gap),x,new cljs.core.Keyword(null,"x","x",2099068185),h]);
});
var create_cgdd_block = (function (block){
var x = (cljs.core.truth_(flip_x)?(new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(block) - new cljs.core.Keyword(null,"column-gap","column-gap",384822863).cljs$core$IFn$_invoke$arity$1(gap)):new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(block));
var y = (cljs.core.truth_(flip_y)?(y1 + new cljs.core.Keyword(null,"p3","p3",1731040739).cljs$core$IFn$_invoke$arity$1(padding)):(y1 + new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(padding)));
var h = (height - (new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(padding) + new cljs.core.Keyword(null,"p3","p3",1731040739).cljs$core$IFn$_invoke$arity$1(padding)));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"resize-type","resize-type",-1850768191),new cljs.core.Keyword(null,"resize-negate?","resize-negate?",-1130986046),new cljs.core.Keyword(null,"gap-type","gap-type",-691516251),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"initial-value","initial-value",470619381),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"resize-axis","resize-axis",-1746101927),new cljs.core.Keyword(null,"height","height",1025178622)],[y,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"column-gap","column-gap",384822863).cljs$core$IFn$_invoke$arity$1(negate),((is_col_QMARK_)?new cljs.core.Keyword(null,"column-gap","column-gap",384822863):new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537)),new cljs.core.Keyword(null,"column-gap","column-gap",384822863).cljs$core$IFn$_invoke$arity$1(gap),new cljs.core.Keyword(null,"column-gap","column-gap",384822863).cljs$core$IFn$_invoke$arity$1(gap),x,new cljs.core.Keyword(null,"x","x",2099068185),h]);
});
var create_rgdd = (function (shape){
var block = get_container_block(shape);
var x = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(block);
var y = (cljs.core.truth_(flip_y)?((new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape)) - cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.Keyword(null,"m3","m3",-703635357)], null))) - new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537).cljs$core$IFn$_invoke$arity$1(gap)):(new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape)) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.Keyword(null,"m3","m3",-703635357)], null))));
var w = (new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(block) - new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(block));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"resize-type","resize-type",-1850768191),new cljs.core.Keyword(null,"resize-negate?","resize-negate?",-1130986046),new cljs.core.Keyword(null,"gap-type","gap-type",-691516251),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"initial-value","initial-value",470619381),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"resize-axis","resize-axis",-1746101927),new cljs.core.Keyword(null,"height","height",1025178622)],[y,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537).cljs$core$IFn$_invoke$arity$1(negate),((is_col_QMARK_)?new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537):new cljs.core.Keyword(null,"column-gap","column-gap",384822863)),w,new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537).cljs$core$IFn$_invoke$arity$1(gap),x,new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537).cljs$core$IFn$_invoke$arity$1(gap)]);
});
var create_rgdd_block = (function (block){
var x = (cljs.core.truth_(flip_x)?(x1 + new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(padding)):(x1 + new cljs.core.Keyword(null,"p4","p4",-1090126814).cljs$core$IFn$_invoke$arity$1(padding)));
var y = (cljs.core.truth_(flip_y)?(new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(block) - new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537).cljs$core$IFn$_invoke$arity$1(gap)):new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(block));
var w = (width - (new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(padding) + new cljs.core.Keyword(null,"p4","p4",-1090126814).cljs$core$IFn$_invoke$arity$1(padding)));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"resize-type","resize-type",-1850768191),new cljs.core.Keyword(null,"resize-negate?","resize-negate?",-1130986046),new cljs.core.Keyword(null,"gap-type","gap-type",-691516251),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"initial-value","initial-value",470619381),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"resize-axis","resize-axis",-1746101927),new cljs.core.Keyword(null,"height","height",1025178622)],[y,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537).cljs$core$IFn$_invoke$arity$1(negate),((is_col_QMARK_)?new cljs.core.Keyword(null,"column-gap","column-gap",384822863):new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537)),w,new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537).cljs$core$IFn$_invoke$arity$1(gap),x,new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537).cljs$core$IFn$_invoke$arity$1(gap)]);
});
var display_blocks = ((is_col_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(create_cgdd_block,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(wrap_blocks)):cljs.core.map.cljs$core$IFn$_invoke$arity$2(create_rgdd_block,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(wrap_blocks)));
var display_children = ((is_col_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(create_rgdd,children_to_display__$1):cljs.core.map.cljs$core$IFn$_invoke$arity$2(create_cgdd,children_to_display__$1));
return rumext.v2.jsxs("g",{'className':"gaps",'pointerEvents':"visible",'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__56657){
var vec__56658 = p__56657;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56658,(0),null);
var display_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56658,(1),null);
out_arr__35152__auto__.push((function (){var gap_type = new cljs.core.Keyword(null,"gap-type","gap-type",-691516251).cljs$core$IFn$_invoke$arity$1(display_item);
return rumext.v2.jsx(app.main.ui.flex_controls.gap.gap_display,{'zoom':zoom,'on-pointer-leave':on_pointer_leave,'gap-type':gap_type,'mouse-pos':mouse_pos,'on-pointer-enter':cljs.core.partial.cljs$core$IFn$_invoke$arity$3(on_pointer_enter,gap_type,cljs.core.get.cljs$core$IFn$_invoke$arity$2(gap,gap_type)),'on-context-menu':on_context_menu,'on-move-selected':on_move_selected,'hover-value':hover_value,'gap':gap,'rect-data':display_item,'frame-id':frame_id,'on-change':on_change,'selected?':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(gap_selected,gap_type),'hover?':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hover),gap_type)},[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frame_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''));
})());

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(display_blocks,display_children))),(cljs.core.truth_(cljs.core.deref(hover))?rumext.v2.jsx(app.main.ui.flex_controls.common.flex_display_pill,{'height':pill_height,'width':pill_width,'font-size':(app.main.ui.flex_controls.common.font_size / zoom),'border-radius':(app.main.ui.flex_controls.common.flex_display_pill_border_radius / zoom),'color':app.main.ui.flex_controls.common.distance_color,'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mouse_pos)),'y':(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mouse_pos)) - pill_width),'value':cljs.core.deref(hover_value)}):null)]});
});

(app.main.ui.flex_controls.gap.gap_rects.displayName = "gap-rects");

app.main.ui.flex_controls.gap.gap_control = (function app$main$ui$flex_controls$gap$gap_control(props_56661){
var map__56662 = rumext.v2.util.wrap_props(props_56661);
var map__56662__$1 = cljs.core.__destructure_map(map__56662);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56662__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56662__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var on_move_selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56662__$1,new cljs.core.Keyword(null,"on-move-selected","on-move-selected",117316753));
var on_context_menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56662__$1,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340));
if(cljs.core.truth_(frame)){
return rumext.v2.jsx("g",{'className':"measurement-gaps",'pointerEvents':"none",'children':rumext.v2.jsx("g",{'className':"hover-shapes",'children':rumext.v2.jsx(app.main.ui.flex_controls.gap.gap_rects,{'frame':frame,'zoom':zoom,'on-move-selected':on_move_selected,'on-context-menu':on_context_menu})})});
} else {
return null;
}
});

(app.main.ui.flex_controls.gap.gap_control.displayName = "gap-control");


//# sourceMappingURL=app.main.ui.flex_controls.gap.js.map
