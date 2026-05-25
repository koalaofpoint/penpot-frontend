import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.math.js";
import "./app.common.types.color.js";
import "./app.common.types.fills.js";
import "./app.main.features.js";
import "./app.main.ui.components.numeric_input.js";
import "./app.main.ui.components.reorder_handler.js";
import "./app.main.ui.components.select.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.formats.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.workspace.sidebar.options.rows.color_row.js";
import "./app.util.dom.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.colorpicker.gradients');
app.main.ui.workspace.colorpicker.gradients.offset__GT_string = (function app$main$ui$workspace$colorpicker$gradients$offset__GT_string(opacity){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1((app.common.data.coalesce(opacity,(1)) * (100))));
});
app.main.ui.workspace.colorpicker.gradients.event__GT_offset = (function app$main$ui$workspace$colorpicker$gradients$event__GT_offset(event){
return (event.nativeEvent.offsetX / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(app.util.dom.get_bounding_rect(app.util.dom.get_current_target(event))));
});
app.main.ui.workspace.colorpicker.gradients.format_rgb = (function app$main$ui$workspace$colorpicker$gradients$format_rgb(p__54835){
var map__54844 = p__54835;
var map__54844__$1 = cljs.core.__destructure_map(map__54844);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54844__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54844__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54844__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54844__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
return ""+"rgb("+(r ?? "")+", "+(g ?? "")+", "+(b ?? "")+") "+((offset * (100)) ?? "")+"%";
});
app.main.ui.workspace.colorpicker.gradients.gradient__GT_string = (function app$main$ui$workspace$colorpicker$gradients$gradient__GT_string(stops){
return ""+"linear-gradient(90deg, "+(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.colorpicker.gradients.format_rgb,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54848){
var map__54849 = p__54848;
var map__54849__$1 = cljs.core.__destructure_map(map__54849);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54849__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54849__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54849__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var vec__54850 = app.common.types.color.hex__GT_rgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54850,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54850,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54850,(2),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"g","g",1738089905),g,new cljs.core.Keyword(null,"b","b",1482224470),b,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),opacity,new cljs.core.Keyword(null,"offset","offset",296498311),offset], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311),stops)))) ?? "")+")";
});
app.main.ui.workspace.colorpicker.gradients.stop__GT_hex_color = (function app$main$ui$workspace$colorpicker$gradients$stop__GT_hex_color(stop){
return cljs.core.select_keys(stop,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"opacity","opacity",397153780)], null));
});
app.main.ui.workspace.colorpicker.gradients.stop_input_row_STAR_ = (function app$main$ui$workspace$colorpicker$gradients$stop_input_row_STAR_(props_54853){
var on_blur_stop_offset = props_54853.onBlurStopOffset;
var on_select_stop = props_54853.onSelectStop;
var on_remove_stop = props_54853.onRemoveStop;
var index = props_54853.index;
var on_blur_stop_color = props_54853.onBlurStopColor;
var on_reorder_stops = props_54853.onReorderStops;
var is_selected = props_54853.isSelected;
var on_focus_stop_color = props_54853.onFocusStopColor;
var on_focus_stop_offset = props_54853.onFocusStopOffset;
var stop = props_54853.stop;
var on_change_stop = props_54853.onChangeStop;
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(stop,new cljs.core.Keyword(null,"offset","offset",296498311));
var handle_change_stop_color = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change_stop),rumext.v2.adapt(stop)],(function (value){
var G__54857 = stop;
var G__54858 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stop,value], 0));
return (on_change_stop.cljs$core$IFn$_invoke$arity$2 ? on_change_stop.cljs$core$IFn$_invoke$arity$2(G__54857,G__54858) : on_change_stop.call(null,G__54857,G__54858));
}));
var handle_change_offset = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change_stop),rumext.v2.adapt(stop)],(function (value){
var G__54859 = stop;
var G__54860 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stop,new cljs.core.Keyword(null,"offset","offset",296498311),app.common.math.precision((value / (100)),(2)));
return (on_change_stop.cljs$core$IFn$_invoke$arity$2 ? on_change_stop.cljs$core$IFn$_invoke$arity$2(G__54859,G__54860) : on_change_stop.call(null,G__54859,G__54860));
}));
var handle_remove_stop = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_remove_stop),rumext.v2.adapt(index)],(function (){
if(cljs.core.truth_(on_remove_stop)){
return (on_remove_stop.cljs$core$IFn$_invoke$arity$1 ? on_remove_stop.cljs$core$IFn$_invoke$arity$1(index) : on_remove_stop.call(null,index));
} else {
return null;
}
}));
var handle_focus_stop_offset = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_select_stop),rumext.v2.adapt(on_focus_stop_offset),rumext.v2.adapt(index)],(function (){
(on_select_stop.cljs$core$IFn$_invoke$arity$1 ? on_select_stop.cljs$core$IFn$_invoke$arity$1(index) : on_select_stop.call(null,index));

if(cljs.core.truth_(on_focus_stop_offset)){
return (on_focus_stop_offset.cljs$core$IFn$_invoke$arity$0 ? on_focus_stop_offset.cljs$core$IFn$_invoke$arity$0() : on_focus_stop_offset.call(null));
} else {
return null;
}
}));
var handle_blur_stop_offset = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_select_stop),rumext.v2.adapt(on_blur_stop_offset),rumext.v2.adapt(index)],(function (){
(on_select_stop.cljs$core$IFn$_invoke$arity$1 ? on_select_stop.cljs$core$IFn$_invoke$arity$1(index) : on_select_stop.call(null,index));

if(cljs.core.truth_(on_blur_stop_offset)){
return (on_blur_stop_offset.cljs$core$IFn$_invoke$arity$0 ? on_blur_stop_offset.cljs$core$IFn$_invoke$arity$0() : on_blur_stop_offset.call(null));
} else {
return null;
}
}));
var handle_focus_stop_color = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_select_stop),rumext.v2.adapt(on_focus_stop_offset),rumext.v2.adapt(index)],(function (){
(on_select_stop.cljs$core$IFn$_invoke$arity$1 ? on_select_stop.cljs$core$IFn$_invoke$arity$1(index) : on_select_stop.call(null,index));

if(cljs.core.truth_(on_focus_stop_color)){
return (on_focus_stop_offset.cljs$core$IFn$_invoke$arity$0 ? on_focus_stop_offset.cljs$core$IFn$_invoke$arity$0() : on_focus_stop_offset.call(null));
} else {
return null;
}
}));
var handle_blur_stop_color = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_select_stop),rumext.v2.adapt(on_blur_stop_color),rumext.v2.adapt(index)],(function (){
(on_select_stop.cljs$core$IFn$_invoke$arity$1 ? on_select_stop.cljs$core$IFn$_invoke$arity$1(index) : on_select_stop.call(null,index));

if(cljs.core.truth_(on_blur_stop_color)){
return (on_blur_stop_color.cljs$core$IFn$_invoke$arity$0 ? on_blur_stop_color.cljs$core$IFn$_invoke$arity$0() : on_blur_stop_color.call(null));
} else {
return null;
}
}));
var on_drop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(on_reorder_stops)],(function (position,data){
var from_index = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(data);
var to_index = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"bot","bot",-950896508)))?(index + (1)):index);
if(cljs.core.truth_(on_reorder_stops)){
return (on_reorder_stops.cljs$core$IFn$_invoke$arity$2 ? on_reorder_stops.cljs$core$IFn$_invoke$arity$2(from_index,to_index) : on_reorder_stops.call(null,from_index,to_index));
} else {
return null;
}
}));
var vec__54854 = app.main.ui.hooks.use_sortable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data-type","data-type",-326421468),"penpot/stops",new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),on_drop,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),index], null),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),true], 0));
var dprops = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54854,(0),null);
var dref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54854,(1),null);
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_gradients__gradient-stops-entry"+" "+(cljs.core.truth_(is_selected)?"main_ui_workspace_colorpicker_gradients__is-selected":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"center","center",-748944368)))?"main_ui_workspace_colorpicker_gradients__dnd-over":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"top","top",-1856271961)))?"main_ui_workspace_colorpicker_gradients__dnd-over-top":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"bot","bot",-950896508)))?"main_ui_workspace_colorpicker_gradients__dnd-over-bot":""),'children':[rumext.v2.jsx(app.main.ui.components.reorder_handler.reorder_handler_STAR_,{'ref':dref}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_gradients__offset-input-wrapper",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_colorpicker_gradients__icon-text",'children':"%"}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'value':app.main.ui.workspace.colorpicker.gradients.offset__GT_string(offset),'onChange':handle_change_offset,'default':(100),'min':(0),'max':(100),'onFocus':handle_focus_stop_offset,'onBlur':handle_blur_stop_offset})]}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.rows.color_row.color_row_STAR_,{'onRemove':handle_remove_stop,'origin':new cljs.core.Keyword(null,"gradient","gradient",-1983908971),'index':index,'onChange':handle_change_stop_color,'onFocus':handle_focus_stop_color,'disableGradient':true,'onBlur':handle_blur_stop_color,'color':app.main.ui.workspace.colorpicker.gradients.stop__GT_hex_color(stop),'disablePicker':true})]});
});

(app.main.ui.workspace.colorpicker.gradients.stop_input_row_STAR_.displayName = "stop-input-row*");

app.main.ui.workspace.colorpicker.gradients.gradients_STAR_ = (function app$main$ui$workspace$colorpicker$gradients$gradients_STAR_(props_54861){
var on_reverse_stops = props_54861.onReverseStops;
var on_change_type = props_54861.onChangeType;
var on_stop_edit_start = props_54861.onStopEditStart;
var on_select_stop = props_54861.onSelectStop;
var on_rotate_stops = props_54861.onRotateStops;
var on_add_stop_preview = props_54861.onAddStopPreview;
var stops = props_54861.stops;
var on_remove_stop = props_54861.onRemoveStop;
var on_add_stop_auto = props_54861.onAddStopAuto;
var on_stop_edit_finish = props_54861.onStopEditFinish;
var on_reorder_stops = props_54861.onReorderStops;
var type = props_54861.type;
var on_change_stop = props_54861.onChangeStop;
var editing_stop = props_54861.editingStop;
var preview_state = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hover?","hover?",-1201331489),false,new cljs.core.Keyword(null,"offset","offset",296498311),0.5], null);
}));
var dragging_ref = rumext.v2.use_ref(false);
var start_ref = rumext.v2.use_ref(null);
var start_offset = rumext.v2.use_ref(null);
var background_ref = rumext.v2.use_ref(null);
var handle_select_stop = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_select_stop)],(function (event){
if(cljs.core.truth_(on_select_stop)){
var index = app.common.data.read_string(app.util.dom.get_data(app.util.dom.get_current_target(event),"index"));
return (on_select_stop.cljs$core$IFn$_invoke$arity$1 ? on_select_stop.cljs$core$IFn$_invoke$arity$1(index) : on_select_stop.call(null,index));
} else {
return null;
}
}));
var handle_change_type = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change_type)],(function (event){
if(cljs.core.truth_(on_change_type)){
return (on_change_type.cljs$core$IFn$_invoke$arity$1 ? on_change_type.cljs$core$IFn$_invoke$arity$1(event) : on_change_type.call(null,event));
} else {
return null;
}
}));
var handle_add_stop = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_add_stop_auto)],(function (){
if(cljs.core.truth_(on_add_stop_auto)){
return (on_add_stop_auto.cljs$core$IFn$_invoke$arity$0 ? on_add_stop_auto.cljs$core$IFn$_invoke$arity$0() : on_add_stop_auto.call(null));
} else {
return null;
}
}));
var handle_preview_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(preview_state,cljs.core.assoc,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),true);
}));
var handle_preview_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(preview_state,cljs.core.assoc,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),false);
}));
var handle_preview_move = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (e){
var offset = app.common.math.precision(app.main.ui.workspace.colorpicker.gradients.event__GT_offset(e),(2));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(preview_state,cljs.core.assoc,new cljs.core.Keyword(null,"offset","offset",296498311),offset);
}));
var handle_preview_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_add_stop_preview)],(function (e){
var offset = app.common.math.precision(app.main.ui.workspace.colorpicker.gradients.event__GT_offset(e),(2));
if(cljs.core.truth_(on_add_stop_preview)){
return (on_add_stop_preview.cljs$core$IFn$_invoke$arity$1 ? on_add_stop_preview.cljs$core$IFn$_invoke$arity$1(offset) : on_add_stop_preview.call(null,offset));
} else {
return null;
}
}));
var handle_stop_marker_pointer_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_stop_edit_start),rumext.v2.adapt(handle_select_stop),rumext.v2.adapt(stops)],(function (event){
var index = app.common.data.read_string(app.util.dom.get_data(app.util.dom.get_current_target(event),"index"));
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(stops,index);
app.util.dom.capture_pointer(event);

(handle_select_stop.cljs$core$IFn$_invoke$arity$1 ? handle_select_stop.cljs$core$IFn$_invoke$arity$1(event) : handle_select_stop.call(null,event));

rumext.v2.set_ref_val_BANG_(dragging_ref,true);

rumext.v2.set_ref_val_BANG_(start_ref,app.util.dom.get_client_position(event));

rumext.v2.set_ref_val_BANG_(start_offset,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(stop));

return (on_stop_edit_start.cljs$core$IFn$_invoke$arity$0 ? on_stop_edit_start.cljs$core$IFn$_invoke$arity$0() : on_stop_edit_start.call(null));
}));
var handle_stop_marker_pointer_move = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change_stop),rumext.v2.adapt(stops)],(function (event){
var temp__5825__auto__ = rumext.v2.ref_val(dragging_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var _ = temp__5825__auto__;
var start_pt = rumext.v2.ref_val(start_ref);
var start_offset__$1 = rumext.v2.ref_val(start_offset);
var index = app.common.data.read_string(app.util.dom.get_data(app.util.dom.get_target(event),"index"));
var current_pt = app.util.dom.get_client_position(event);
var delta_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(current_pt) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_pt));
var background_node = rumext.v2.ref_val(background_ref);
var background_width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(app.util.dom.get_bounding_rect(background_node));
var delta_offset = (delta_x / background_width);
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(stops,index);
var new_offset = app.common.math.precision(app.common.math.clamp((start_offset__$1 + delta_offset),(0),(1)),(2));
var G__54862 = stop;
var G__54863 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stop,new cljs.core.Keyword(null,"offset","offset",296498311),new_offset);
return (on_change_stop.cljs$core$IFn$_invoke$arity$2 ? on_change_stop.cljs$core$IFn$_invoke$arity$2(G__54862,G__54863) : on_change_stop.call(null,G__54862,G__54863));
} else {
return null;
}
}));
var handle_stop_marker_lost_pointer_capture = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_stop_edit_finish)],(function (event){
app.util.dom.release_pointer(event);

rumext.v2.set_ref_val_BANG_(dragging_ref,false);

rumext.v2.set_ref_val_BANG_(start_ref,null);

return (on_stop_edit_finish.cljs$core$IFn$_invoke$arity$0 ? on_stop_edit_finish.cljs$core$IFn$_invoke$arity$0() : on_stop_edit_finish.call(null));
}));
var handle_rotate_gradient = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_rotate_stops)],(function (){
if(cljs.core.truth_(on_rotate_stops)){
return (on_rotate_stops.cljs$core$IFn$_invoke$arity$0 ? on_rotate_stops.cljs$core$IFn$_invoke$arity$0() : on_rotate_stops.call(null));
} else {
return null;
}
}));
var handle_reverse_gradient = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_reverse_stops)],(function (){
if(cljs.core.truth_(on_reverse_stops)){
return (on_reverse_stops.cljs$core$IFn$_invoke$arity$0 ? on_reverse_stops.cljs$core$IFn$_invoke$arity$0() : on_reverse_stops.call(null));
} else {
return null;
}
}));
var cap_stops_QMARK_ = app.main.features.use_feature("render-wasm/v1");
var add_stop_disabled_QMARK_ = ((cap_stops_QMARK_)?(cljs.core.count(stops) >= app.common.types.fills.MAX_GRADIENT_STOPS):null);
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_gradients__gradient-panel",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_gradients__gradient-preview",'children':[rumext.v2.jsx("div",{'ref':background_ref,'style':{'background':app.main.ui.workspace.colorpicker.gradients.gradient__GT_string(stops)},'onPointerEnter':handle_preview_enter,'onPointerLeave':handle_preview_leave,'onPointerMove':handle_preview_move,'onPointerDown':handle_preview_down,'className':"main_ui_workspace_colorpicker_gradients__gradient-background",'children':((cljs.core.not(add_stop_disabled_QMARK_))?rumext.v2.jsx("div",{'style':{'display':(cljs.core.truth_(new cljs.core.Keyword(null,"hover?","hover?",-1201331489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(preview_state)))?"block":"none"),'--preview-position':""+(((100) * new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(preview_state))) ?? "")+"%"},'className':"main_ui_workspace_colorpicker_gradients__gradient-preview-stop-preview"}):null)}),rumext.v2.jsx("div",{'className':"main_ui_workspace_colorpicker_gradients__gradient-preview-stop-wrapper",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__54864){
var vec__54865 = p__54864;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54865,(0),null);
var map__54868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54865,(1),null);
var map__54868__$1 = cljs.core.__destructure_map(map__54868);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54868__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54868__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54868__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54868__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54868__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54868__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
out_arr__35152__auto__.push(rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'style':{'--color-solid':color,'--color-alpha':""+"rgba("+(r ?? "")+", "+(g ?? "")+", "+(b ?? "")+", "+(alpha ?? "")+")",'--position':""+((offset * (100)) ?? "")+"%"},'data-index':index,'onPointerDown':handle_stop_marker_pointer_down,'onPointerMove':handle_stop_marker_pointer_move,'onLostPointerCapture':handle_stop_marker_lost_pointer_capture,'className':"main_ui_workspace_colorpicker_gradients__gradient-preview-stop"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_stop,index))?"main_ui_workspace_colorpicker_gradients__is-selected":""),'children':[rumext.v2.jsx("div",{'style':{'pointerEvents':"none"},'className':"main_ui_workspace_colorpicker_gradients__gradient-preview-stop-color"}),rumext.v2.jsx("div",{'style':{'pointerEvents':"none"},'className':"main_ui_workspace_colorpicker_gradients__gradient-preview-stop-alpha"})]}),rumext.v2.jsx("div",{'style':{'--position':""+((offset * (100)) ?? "")+"%"},'className':"main_ui_workspace_colorpicker_gradients__gradient-preview-stop-decoration"})]},""+"preview-stop-"+(index ?? "")));

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(stops))})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_gradients__gradient-options",'children':[rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':type,'options':new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"linear-gradient","linear-gradient",1752751047),new cljs.core.Keyword(null,"label","label",1718410804),"Linear"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"radial-gradient","radial-gradient",-635026259),new cljs.core.Keyword(null,"label","label",1718410804),"Radial"], null)], null),'on-change':handle_change_type,'class':"main_ui_workspace_colorpicker_gradients__gradient-options-select"}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_gradients__gradient-options-buttons",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':"Rotate gradient",'onClick':handle_rotate_gradient,'iconClass':"main_ui_workspace_colorpicker_gradients__rotate-icon",'icon':app.main.ui.ds.foundations.assets.icon.reload}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':"Reverse gradient",'onClick':handle_reverse_gradient,'icon':app.main.ui.ds.foundations.assets.icon.switch$}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':"Add stop",'disabled':add_stop_disabled_QMARK_,'onClick':handle_add_stop,'icon':app.main.ui.ds.foundations.assets.icon.add})]})]}),rumext.v2.jsx("div",{'className':"main_ui_workspace_colorpicker_gradients__gradient-stops-list",'children':rumext.v2.jsx(app.main.ui.hooks.sortable_container_STAR_,{'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__54869){
var vec__54870 = p__54869;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54870,(0),null);
var stop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54870,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.colorpicker.gradients.stop_input_row_STAR_,{'stop':stop,'onSelectStop':on_select_stop,'index':index,'onFocusStopOffset':on_stop_edit_start,'onBlurStopColor':on_stop_edit_finish,'onChangeStop':on_change_stop,'onFocusStopColor':on_stop_edit_start,'onBlurStopOffset':on_stop_edit_finish,'onReorderStops':on_reorder_stops,'isSelected':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_stop,index),'onRemoveStop':on_remove_stop},index));

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(stops))})}),rumext.v2.jsx("hr",{'className':"main_ui_workspace_colorpicker_gradients__gradient-separator"})]});
});

(app.main.ui.workspace.colorpicker.gradients.gradients_STAR_.displayName = "gradients*");


//# sourceMappingURL=app.main.ui.workspace.colorpicker.gradients.js.map
