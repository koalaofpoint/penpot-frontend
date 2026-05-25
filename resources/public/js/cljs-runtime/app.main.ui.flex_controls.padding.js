import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.common.types.modifiers.js";
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
goog.provide('app.main.ui.flex_controls.padding');
app.main.ui.flex_controls.padding.padding_display = (function app$main$ui$flex_controls$padding$padding_display(props_56672){
var map__56674 = rumext.v2.util.wrap_props(props_56672);
var map__56674__$1 = cljs.core.__destructure_map(map__56674);
var hover_all_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56674__$1,new cljs.core.Keyword(null,"hover-all?","hover-all?",1343012409));
var hover_h_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56674__$1,new cljs.core.Keyword(null,"hover-h?","hover-h?",1568370393));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56674__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56674__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var hover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56674__$1,new cljs.core.Keyword(null,"hover?","hover?",-1201331489));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56674__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var on_pointer_leave = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56674__$1,new cljs.core.Keyword(null,"on-pointer-leave","on-pointer-leave",253985380));
var on_pointer_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56674__$1,new cljs.core.Keyword(null,"on-pointer-enter","on-pointer-enter",199832041));
var mouse_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56674__$1,new cljs.core.Keyword(null,"mouse-pos","mouse-pos",370762057));
var hover_v_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56674__$1,new cljs.core.Keyword(null,"hover-v?","hover-v?",284060266));
var padding_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56674__$1,new cljs.core.Keyword(null,"padding-num","padding-num",-747769845));
var on_context_menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56674__$1,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340));
var on_move_selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56674__$1,new cljs.core.Keyword(null,"on-move-selected","on-move-selected",117316753));
var hover_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56674__$1,new cljs.core.Keyword(null,"hover-value","hover-value",1679488403));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56674__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var rect_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56674__$1,new cljs.core.Keyword(null,"rect-data","rect-data",627750614));
var frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56674__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072));
var resizing_QMARK_ = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(false);
var start = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(null);
var original_value = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1((0));
var last_pos = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(null);
var negate_QMARK_ = new cljs.core.Keyword(null,"resize-negate?","resize-negate?",-1130986046).cljs$core$IFn$_invoke$arity$1(rect_data) === true;
var axis = new cljs.core.Keyword(null,"resize-axis","resize-axis",-1746101927).cljs$core$IFn$_invoke$arity$1(rect_data);
var on_pointer_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frame_id),rumext.v2.adapt(rect_data),rumext.v2.adapt(padding_num)],(function (event){
app.util.dom.capture_pointer(event);

cljs.core.reset_BANG_(resizing_QMARK_,true);

cljs.core.reset_BANG_(start,app.util.dom.get_client_position(event));

return cljs.core.reset_BANG_(original_value,new cljs.core.Keyword(null,"initial-value","initial-value",470619381).cljs$core$IFn$_invoke$arity$1(rect_data));
}));
var calc_modifiers = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frame_id),rumext.v2.adapt(padding_num),rumext.v2.adapt(padding),rumext.v2.adapt(hover_all_QMARK_),rumext.v2.adapt(hover_v_QMARK_),rumext.v2.adapt(hover_h_QMARK_)],(function (pos){
var delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__56676 = app.common.geom.point.to_vec(cljs.core.deref(start),pos);
if(negate_QMARK_){
return app.common.geom.point.negate(G__56676);
} else {
return G__56676;
}
})(),axis);
var val = ((function (){var x__5110__auto__ = (cljs.core.deref(original_value) + (delta / zoom));
var y__5111__auto__ = (0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})() | (0));
var layout_padding = (cljs.core.truth_(hover_all_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(padding,new cljs.core.Keyword(null,"p1","p1",-936759954),val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"p2","p2",905500641),val,new cljs.core.Keyword(null,"p3","p3",1731040739),val,new cljs.core.Keyword(null,"p4","p4",-1090126814),val], 0)):(cljs.core.truth_(hover_v_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(padding,new cljs.core.Keyword(null,"p1","p1",-936759954),val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"p3","p3",1731040739),val], 0)):(cljs.core.truth_(hover_h_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(padding,new cljs.core.Keyword(null,"p2","p2",905500641),val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"p4","p4",-1090126814),val], 0)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(padding,padding_num,val)
)));
var layout_padding_type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(padding),new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(padding),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"p3","p3",1731040739).cljs$core$IFn$_invoke$arity$1(padding),new cljs.core.Keyword(null,"p4","p4",-1090126814).cljs$core$IFn$_invoke$arity$1(padding)], 0)))?new cljs.core.Keyword(null,"simple","simple",-581868663):new cljs.core.Keyword(null,"multiple","multiple",1244445549));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,app.main.data.workspace.modifiers.create_modif_tree(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_id], null),app.common.types.modifiers.change_property(app.common.types.modifiers.change_property(app.common.types.modifiers.empty(),new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),layout_padding),new cljs.core.Keyword(null,"layout-padding-type","layout-padding-type",-1407674837),layout_padding_type))], null);
}));
var on_lost_pointer_capture = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(calc_modifiers)],(function (event){
app.util.dom.release_pointer(event);

if(cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"render-wasm/v1"))){
var vec__56677_56708 = (function (){var G__56680 = cljs.core.deref(last_pos);
return (calc_modifiers.cljs$core$IFn$_invoke$arity$1 ? calc_modifiers.cljs$core$IFn$_invoke$arity$1(G__56680) : calc_modifiers.call(null,G__56680));
})();
var __56709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56677_56708,(0),null);
var modifiers_56710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56677_56708,(1),null);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.modifiers.apply_wasm_modifiers(modifiers_56710),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.transforms.finish_transform()], 0));
} else {
}

cljs.core.reset_BANG_(resizing_QMARK_,false);

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
cljs.core.reset_BANG_(mouse_pos,app.main.ui.workspace.viewport.viewport_ref.point__GT_viewport(pos));

cljs.core.reset_BANG_(last_pos,pos);

if(cljs.core.truth_(cljs.core.deref(resizing_QMARK_))){
var vec__56685 = (calc_modifiers.cljs$core$IFn$_invoke$arity$1 ? calc_modifiers.cljs$core$IFn$_invoke$arity$1(pos) : calc_modifiers.call(null,pos));
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56685,(0),null);
var modifiers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56685,(1),null);
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
return rumext.v2.jsxs("g",{'className':"padding-rect",'children':[rumext.v2.jsx("rect",{'width':(function (){var x__5110__auto__ = (0);
var y__5111__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect_data);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})(),'height':(function (){var x__5110__auto__ = (0);
var y__5111__auto__ = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect_data);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})(),'className':"info-area",'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect_data),'onContextMenu':on_context_menu,'style':{'fill':(cljs.core.truth_((function (){var or__5025__auto__ = hover_QMARK_;
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

(app.main.ui.flex_controls.padding.padding_display.displayName = "padding-display");

app.main.ui.flex_controls.padding.padding_rects = (function app$main$ui$flex_controls$padding$padding_rects(props_56692){
var map__56694 = rumext.v2.util.wrap_props(props_56692);
var map__56694__$1 = cljs.core.__destructure_map(map__56694);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56694__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56694__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var alt_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56694__$1,new cljs.core.Keyword(null,"alt?","alt?",-1427998432));
var shift_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56694__$1,new cljs.core.Keyword(null,"shift?","shift?",-1034734696));
var on_move_selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56694__$1,new cljs.core.Keyword(null,"on-move-selected","on-move-selected",117316753));
var on_context_menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56694__$1,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340));
var frame_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame);
var paddings_selected = rumext.v2.deref(app.main.refs.workspace_paddings_selected);
var current_modifiers = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var frame__$1 = app.common.types.modifiers.apply_structure_modifiers(frame,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_modifiers),frame_id),new cljs.core.Keyword(null,"modifiers","modifiers",50378834)));
var hover_value = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((0));
var mouse_pos = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var hover = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var hover_all_QMARK_ = (function (){var and__5023__auto__ = (!((cljs.core.deref(hover) == null)));
if(and__5023__auto__){
return alt_QMARK_;
} else {
return and__5023__auto__;
}
})();
var hover_v_QMARK_ = (function (){var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hover),new cljs.core.Keyword(null,"p1","p1",-936759954))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hover),new cljs.core.Keyword(null,"p3","p3",1731040739))));
if(and__5023__auto__){
return shift_QMARK_;
} else {
return and__5023__auto__;
}
})();
var hover_h_QMARK_ = (function (){var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hover),new cljs.core.Keyword(null,"p2","p2",905500641))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hover),new cljs.core.Keyword(null,"p4","p4",-1090126814))));
if(and__5023__auto__){
return shift_QMARK_;
} else {
return and__5023__auto__;
}
})();
var padding = new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747).cljs$core$IFn$_invoke$arity$1(frame__$1);
var map__56696 = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(frame__$1);
var map__56696__$1 = cljs.core.__destructure_map(map__56696);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56696__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56696__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56696__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56696__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56696__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56696__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var pill_width = (app.main.ui.flex_controls.common.flex_display_pill_width / zoom);
var pill_height = (app.main.ui.flex_controls.common.flex_display_pill_height / zoom);
var negate = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p1","p1",-936759954),(cljs.core.truth_(new cljs.core.Keyword(null,"flip-y","flip-y",935998815).cljs$core$IFn$_invoke$arity$1(frame__$1))?true:false),new cljs.core.Keyword(null,"p2","p2",905500641),(cljs.core.truth_(new cljs.core.Keyword(null,"flip-x","flip-x",891276861).cljs$core$IFn$_invoke$arity$1(frame__$1))?true:false),new cljs.core.Keyword(null,"p3","p3",1731040739),(cljs.core.truth_(new cljs.core.Keyword(null,"flip-y","flip-y",935998815).cljs$core$IFn$_invoke$arity$1(frame__$1))?true:false),new cljs.core.Keyword(null,"p4","p4",-1090126814),(cljs.core.truth_(new cljs.core.Keyword(null,"flip-x","flip-x",891276861).cljs$core$IFn$_invoke$arity$1(frame__$1))?true:false)], null);
var negate__$1 = (function (){var G__56697 = negate;
var G__56697__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(frame__$1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56697,new cljs.core.Keyword(null,"p2","p2",905500641),cljs.core.not(new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(negate))):G__56697);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(frame__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56697__$1,new cljs.core.Keyword(null,"p3","p3",1731040739),cljs.core.not(new cljs.core.Keyword(null,"p3","p3",1731040739).cljs$core$IFn$_invoke$arity$1(negate)));
} else {
return G__56697__$1;
}
})();
var padding_rect_data = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p1","p1",-936759954),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"resize-type","resize-type",-1850768191),new cljs.core.Keyword(null,"resize-negate?","resize-negate?",-1130986046),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"initial-value","initial-value",470619381),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"resize-axis","resize-axis",-1746101927),new cljs.core.Keyword(null,"height","height",1025178622)],[(cljs.core.truth_(new cljs.core.Keyword(null,"flip-y","flip-y",935998815).cljs$core$IFn$_invoke$arity$1(frame__$1))?(y2 - new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(padding)):y1),(cljs.core.truth_(new cljs.core.Keyword(null,"flip-y","flip-y",935998815).cljs$core$IFn$_invoke$arity$1(frame__$1))?new cljs.core.Keyword(null,"bottom","bottom",-1550509018):new cljs.core.Keyword(null,"top","top",-1856271961)),new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(negate__$1),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frame_id),"-p1"].join(''),width,new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(padding),x1,new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(padding)]),new cljs.core.Keyword(null,"p2","p2",905500641),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"resize-type","resize-type",-1850768191),new cljs.core.Keyword(null,"resize-negate?","resize-negate?",-1130986046),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"initial-value","initial-value",470619381),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"resize-axis","resize-axis",-1746101927),new cljs.core.Keyword(null,"height","height",1025178622)],[y1,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(negate__$1),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frame_id),"-p2"].join(''),new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(padding),new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(padding),(cljs.core.truth_(new cljs.core.Keyword(null,"flip-x","flip-x",891276861).cljs$core$IFn$_invoke$arity$1(frame__$1))?x1:(x2 - new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(padding))),new cljs.core.Keyword(null,"x","x",2099068185),height]),new cljs.core.Keyword(null,"p3","p3",1731040739),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"resize-type","resize-type",-1850768191),new cljs.core.Keyword(null,"resize-negate?","resize-negate?",-1130986046),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"initial-value","initial-value",470619381),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"resize-axis","resize-axis",-1746101927),new cljs.core.Keyword(null,"height","height",1025178622)],[(cljs.core.truth_(new cljs.core.Keyword(null,"flip-y","flip-y",935998815).cljs$core$IFn$_invoke$arity$1(frame__$1))?y1:(y2 - new cljs.core.Keyword(null,"p3","p3",1731040739).cljs$core$IFn$_invoke$arity$1(padding))),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"p3","p3",1731040739).cljs$core$IFn$_invoke$arity$1(negate__$1),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frame_id),"-p3"].join(''),width,new cljs.core.Keyword(null,"p3","p3",1731040739).cljs$core$IFn$_invoke$arity$1(padding),x1,new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"p3","p3",1731040739).cljs$core$IFn$_invoke$arity$1(padding)]),new cljs.core.Keyword(null,"p4","p4",-1090126814),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"resize-type","resize-type",-1850768191),new cljs.core.Keyword(null,"resize-negate?","resize-negate?",-1130986046),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"initial-value","initial-value",470619381),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"resize-axis","resize-axis",-1746101927),new cljs.core.Keyword(null,"height","height",1025178622)],[y1,(cljs.core.truth_(new cljs.core.Keyword(null,"flip-x","flip-x",891276861).cljs$core$IFn$_invoke$arity$1(frame__$1))?new cljs.core.Keyword(null,"right","right",-452581833):new cljs.core.Keyword(null,"left","left",-399115937)),new cljs.core.Keyword(null,"p4","p4",-1090126814).cljs$core$IFn$_invoke$arity$1(negate__$1),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frame_id),"-p4"].join(''),new cljs.core.Keyword(null,"p4","p4",-1090126814).cljs$core$IFn$_invoke$arity$1(padding),new cljs.core.Keyword(null,"p4","p4",-1090126814).cljs$core$IFn$_invoke$arity$1(padding),(cljs.core.truth_(new cljs.core.Keyword(null,"flip-x","flip-x",891276861).cljs$core$IFn$_invoke$arity$1(frame__$1))?(x2 - new cljs.core.Keyword(null,"p4","p4",-1090126814).cljs$core$IFn$_invoke$arity$1(padding)):x1),new cljs.core.Keyword(null,"x","x",2099068185),height])], null);
var on_pointer_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (hover_type,val){
cljs.core.reset_BANG_(hover,hover_type);

return cljs.core.reset_BANG_(hover_value,val);
}));
var on_pointer_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(hover,null);
}));
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (modifiers){
return cljs.core.reset_BANG_(current_modifiers,modifiers);
}));
var hover_QMARK_ = (function (value){
var or__5025__auto__ = hover_all_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"p1","p1",-936759954))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"p3","p3",1731040739))));
if(and__5023__auto__){
return hover_v_QMARK_;
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = (function (){var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"p2","p2",905500641))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"p4","p4",-1090126814))));
if(and__5023__auto__){
return hover_h_QMARK_;
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hover),value);
}
}
}
});
return rumext.v2.jsxs("g",{'className':"paddings",'pointerEvents':"visible",'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__56698){
var vec__56699 = p__56698;
var padding_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56699,(0),null);
var rect_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56699,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.flex_controls.padding.padding_display,{'zoom':zoom,'on-pointer-leave':on_pointer_leave,'mouse-pos':mouse_pos,'on-pointer-enter':cljs.core.partial.cljs$core$IFn$_invoke$arity$3(on_pointer_enter,padding_num,cljs.core.get.cljs$core$IFn$_invoke$arity$2(padding,padding_num)),'hover-v?':hover_v_QMARK_,'padding-num':padding_num,'on-context-menu':on_context_menu,'on-move-selected':on_move_selected,'hover-value':hover_value,'padding':padding,'rect-data':rect_data,'frame-id':frame_id,'hover-all?':hover_all_QMARK_,'hover-h?':hover_h_QMARK_,'on-change':on_change,'selected?':cljs.core.get.cljs$core$IFn$_invoke$arity$2(paddings_selected,padding_num),'hover?':hover_QMARK_(padding_num)},new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(rect_data)));

return out_arr__35152__auto__;
}),[],padding_rect_data),(cljs.core.truth_(cljs.core.deref(hover))?rumext.v2.jsx(app.main.ui.flex_controls.common.flex_display_pill,{'height':pill_height,'width':pill_width,'font-size':(app.main.ui.flex_controls.common.font_size / zoom),'border-radius':(app.main.ui.flex_controls.common.flex_display_pill_border_radius / zoom),'color':app.main.ui.flex_controls.common.distance_color,'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mouse_pos)),'y':(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mouse_pos)) - pill_width),'value':cljs.core.deref(hover_value)}):null)]});
});

(app.main.ui.flex_controls.padding.padding_rects.displayName = "padding-rects");

app.main.ui.flex_controls.padding.padding_control = (function app$main$ui$flex_controls$padding$padding_control(props_56702){
var map__56703 = rumext.v2.util.wrap_props(props_56702);
var map__56703__$1 = cljs.core.__destructure_map(map__56703);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56703__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56703__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var alt_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56703__$1,new cljs.core.Keyword(null,"alt?","alt?",-1427998432));
var shift_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56703__$1,new cljs.core.Keyword(null,"shift?","shift?",-1034734696));
var on_move_selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56703__$1,new cljs.core.Keyword(null,"on-move-selected","on-move-selected",117316753));
var on_context_menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56703__$1,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340));
if(cljs.core.truth_(frame)){
return rumext.v2.jsx("g",{'className':"measurement-gaps",'pointerEvents':"none",'children':rumext.v2.jsx("g",{'className':"hover-shapes",'children':rumext.v2.jsx(app.main.ui.flex_controls.padding.padding_rects,{'frame':frame,'zoom':zoom,'alt?':alt_QMARK_,'shift?':shift_QMARK_,'on-move-selected':on_move_selected,'on-context-menu':on_context_menu})})});
} else {
return null;
}
});

(app.main.ui.flex_controls.padding.padding_control.displayName = "padding-control");


//# sourceMappingURL=app.main.ui.flex_controls.padding.js.map
