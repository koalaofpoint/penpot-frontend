import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.common.math.js";
import "./app.common.types.color.js";
import "./app.main.ui.workspace.colorpicker.slider_selector.js";
import "./app.util.dom.js";
import "./app.util.object.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.colorpicker.harmony');
app.main.ui.workspace.colorpicker.harmony.create_color_wheel = (function app$main$ui$workspace$colorpicker$harmony$create_color_wheel(canvas_node){
var ctx = canvas_node.getContext("2d");
var width = app.util.object.get.cljs$core$IFn$_invoke$arity$2(canvas_node,"width");
var height = app.util.object.get.cljs$core$IFn$_invoke$arity$2(canvas_node,"height");
var radius = (width / (2));
var cx = (width / (2));
var cy = (width / (2));
var step = 0.2;
ctx.clearRect((0),(0),width,height);

var seq__77524_77578 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(360),step));
var chunk__77525_77579 = null;
var count__77526_77580 = (0);
var i__77527_77581 = (0);
while(true){
if((i__77527_77581 < count__77526_77580)){
var degrees_77582 = chunk__77525_77579.cljs$core$IIndexed$_nth$arity$2(null,i__77527_77581);
var degrees_rad_77583 = app.common.math.radians(degrees_77582);
var x_77584 = (radius * app.common.math.cos((- degrees_rad_77583)));
var y_77585 = (radius * app.common.math.sin((- degrees_rad_77583)));
app.util.object.set_BANG_(ctx,"strokeStyle",cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("hsl(%s, 100%, 50%)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([degrees_77582], 0)));

ctx.beginPath();

ctx.moveTo(cx,cy);

ctx.lineTo((cx + x_77584),(cy + y_77585));

ctx.stroke();


var G__77586 = seq__77524_77578;
var G__77587 = chunk__77525_77579;
var G__77588 = count__77526_77580;
var G__77589 = (i__77527_77581 + (1));
seq__77524_77578 = G__77586;
chunk__77525_77579 = G__77587;
count__77526_77580 = G__77588;
i__77527_77581 = G__77589;
continue;
} else {
var temp__5825__auto___77590 = cljs.core.seq(seq__77524_77578);
if(temp__5825__auto___77590){
var seq__77524_77591__$1 = temp__5825__auto___77590;
if(cljs.core.chunked_seq_QMARK_(seq__77524_77591__$1)){
var c__5548__auto___77592 = cljs.core.chunk_first(seq__77524_77591__$1);
var G__77593 = cljs.core.chunk_rest(seq__77524_77591__$1);
var G__77594 = c__5548__auto___77592;
var G__77595 = cljs.core.count(c__5548__auto___77592);
var G__77596 = (0);
seq__77524_77578 = G__77593;
chunk__77525_77579 = G__77594;
count__77526_77580 = G__77595;
i__77527_77581 = G__77596;
continue;
} else {
var degrees_77597 = cljs.core.first(seq__77524_77591__$1);
var degrees_rad_77598 = app.common.math.radians(degrees_77597);
var x_77599 = (radius * app.common.math.cos((- degrees_rad_77598)));
var y_77600 = (radius * app.common.math.sin((- degrees_rad_77598)));
app.util.object.set_BANG_(ctx,"strokeStyle",cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("hsl(%s, 100%, 50%)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([degrees_77597], 0)));

ctx.beginPath();

ctx.moveTo(cx,cy);

ctx.lineTo((cx + x_77599),(cy + y_77600));

ctx.stroke();


var G__77601 = cljs.core.next(seq__77524_77591__$1);
var G__77602 = null;
var G__77603 = (0);
var G__77604 = (0);
seq__77524_77578 = G__77601;
chunk__77525_77579 = G__77602;
count__77526_77580 = G__77603;
i__77527_77581 = G__77604;
continue;
}
} else {
}
}
break;
}

var grd = ctx.createRadialGradient(cx,cy,(0),cx,cx,radius);
grd.addColorStop((0),"rgba(255, 255, 255, 1)");

grd.addColorStop((1),"rgba(255, 255, 255, 0)");

app.util.object.set_BANG_(ctx,"fillStyle",grd);

ctx.beginPath();

ctx.arc(cx,cy,radius,(0),((2) * app.common.math.PI),true);

ctx.closePath();

return ctx.fill();
});
app.main.ui.workspace.colorpicker.harmony.color__GT_point = (function app$main$ui$workspace$colorpicker$harmony$color__GT_point(canvas_side,hue,saturation){
var hue_rad = app.common.math.radians((- hue));
var comp_x = (saturation * app.common.math.cos(hue_rad));
var comp_y = (saturation * app.common.math.sin(hue_rad));
var x = ((canvas_side / (2)) + (comp_x * (canvas_side / (2))));
var y = ((canvas_side / (2)) + (comp_y * (canvas_side / (2))));
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y);
});
app.main.ui.workspace.colorpicker.harmony.harmony_selector = (function app$main$ui$workspace$colorpicker$harmony$harmony_selector(props_77549){
var map__77550 = rumext.v2.util.wrap_props(props_77549);
var map__77550__$1 = cljs.core.__destructure_map(map__77550);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77550__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var disable_opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77550__$1,new cljs.core.Keyword(null,"disable-opacity","disable-opacity",1547998851));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77550__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_start_drag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77550__$1,new cljs.core.Keyword(null,"on-start-drag","on-start-drag",-1763010775));
var on_finish_drag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77550__$1,new cljs.core.Keyword(null,"on-finish-drag","on-finish-drag",471583064));
var canvas_ref = rumext.v2.use_ref(null);
var canvas_side = (192);
var map__77551 = color;
var map__77551__$1 = cljs.core.__destructure_map(map__77551);
var hue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77551__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var saturation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77551__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77551__$1,new cljs.core.Keyword(null,"v","v",21465059));
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77551__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var pos_current = app.main.ui.workspace.colorpicker.harmony.color__GT_point(canvas_side,hue,saturation);
var pos_complement = app.main.ui.workspace.colorpicker.harmony.color__GT_point(canvas_side,cljs.core.mod((hue + (180)),(360)),saturation);
var dragging_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var calculate_pos = (function (ev){
var map__77558 = app.util.dom.get_bounding_rect(app.util.dom.get_target(ev));
var map__77558__$1 = cljs.core.__destructure_map(map__77558);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77558__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77558__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77558__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77558__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
var map__77559 = app.util.dom.get_client_position(ev);
var map__77559__$1 = cljs.core.__destructure_map(map__77559);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77559__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77559__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var px = app.common.math.clamp(((x - left) / (right - left)),(0),(1));
var py = app.common.math.clamp(((y - top) / (bottom - top)),(0),(1));
var px__$1 = (((2) * px) - (1));
var py__$1 = (((2) * py) - (1));
var angle = app.common.math.degrees(app.common.math.atan2(px__$1,py__$1));
var new_hue = cljs.core.mod((angle - (90)),(360));
var new_saturation = app.common.math.clamp(app.common.math.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [px__$1,py__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),(0),(1));
var hex = app.common.types.color.hsv__GT_hex(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_hue,new_saturation,value], null));
var vec__77560 = app.common.types.color.hex__GT_rgb(hex);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77560,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77560,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77560,(2),null);
var G__77563 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"hex","hex",41691346),hex,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"g","g",1738089905),g,new cljs.core.Keyword(null,"b","b",1482224470),b,new cljs.core.Keyword(null,"h","h",1109658740),new_hue,new cljs.core.Keyword(null,"s","s",1705939918),new_saturation], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__77563) : on_change.call(null,G__77563));
});
var handle_start_drag = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_start_drag)],(function (event){
app.util.dom.capture_pointer(event);

cljs.core.reset_BANG_(dragging_QMARK_,true);

if(cljs.core.truth_(on_start_drag)){
return (on_start_drag.cljs$core$IFn$_invoke$arity$0 ? on_start_drag.cljs$core$IFn$_invoke$arity$0() : on_start_drag.call(null));
} else {
return null;
}
}));
var handle_stop_drag = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_finish_drag)],(function (event){
app.util.dom.release_pointer(event);

cljs.core.reset_BANG_(dragging_QMARK_,false);

if(cljs.core.truth_(on_finish_drag)){
return (on_finish_drag.cljs$core$IFn$_invoke$arity$0 ? on_finish_drag.cljs$core$IFn$_invoke$arity$0() : on_finish_drag.call(null));
} else {
return null;
}
}));
var on_change_value = (function (new_value){
var hex = app.common.types.color.hsv__GT_hex(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue,saturation,new_value], null));
var vec__77565 = app.common.types.color.hex__GT_rgb(hex);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77565,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77565,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77565,(2),null);
var G__77568 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"hex","hex",41691346),hex,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"g","g",1738089905),g,new cljs.core.Keyword(null,"b","b",1482224470),b,new cljs.core.Keyword(null,"v","v",21465059),new_value], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__77568) : on_change.call(null,G__77568));
});
var on_complement_click = (function (_){
var new_hue = cljs.core.mod((hue + (180)),(360));
var hex = app.common.types.color.hsv__GT_hex(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_hue,saturation,value], null));
var vec__77572 = app.common.types.color.hex__GT_rgb(hex);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77572,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77572,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77572,(2),null);
var G__77575 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"hex","hex",41691346),hex,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"g","g",1738089905),g,new cljs.core.Keyword(null,"b","b",1482224470),b,new cljs.core.Keyword(null,"h","h",1109658740),new_hue,new cljs.core.Keyword(null,"s","s",1705939918),saturation], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__77575) : on_change.call(null,G__77575));
});
var on_change_opacity = (function (new_alpha){
var G__77576 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new_alpha], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__77576) : on_change.call(null,G__77576));
});
var vec__77552 = app.common.types.color.hsv__GT_hsl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue,saturation,(0)], null));
var h1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77552,(0),null);
var s1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77552,(1),null);
var l1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77552,(2),null);
var vec__77555 = app.common.types.color.hsv__GT_hsl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue,saturation,(255)], null));
var h2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77555,(0),null);
var s2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77555,(1),null);
var l2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77555,(2),null);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(canvas_ref)],(function (){
if(cljs.core.truth_(canvas_ref)){
return app.main.ui.workspace.colorpicker.harmony.create_color_wheel(rumext.v2.ref_val(canvas_ref));
} else {
return null;
}
}));

return rumext.v2.jsxs("div",{'style':{'--hue-from':""+"hsl("+(h1 ?? "")+", "+((s1 * (100)) ?? "")+"%, "+((l1 * (100)) ?? "")+"%)",'--hue-to':""+"hsl("+(h2 ?? "")+", "+((s2 * (100)) ?? "")+"%, "+((l2 * (100)) ?? "")+"%)"},'className':"main_ui_workspace_colorpicker_harmony__harmony-selector",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_harmony__handlers-wrapper",'children':[rumext.v2.jsx(app.main.ui.workspace.colorpicker.slider_selector.slider_selector,{'reverse?':false,'on-start-drag':on_start_drag,'value':value,'vertical':true,'type':new cljs.core.Keyword(null,"value","value",305978217),'max-value':(255),'vertical?':true,'on-finish-drag':on_finish_drag,'on-change':on_change_value}),((cljs.core.not(disable_opacity))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rumext.v2.jsx(app.main.ui.workspace.colorpicker.slider_selector.slider_selector,{'type':new cljs.core.Keyword(null,"opacity","opacity",397153780),'vertical?':true,'value':alpha,'max-value':(1),'vertical':true,'on-change':on_change_opacity,'on-start-drag':on_start_drag,'on-finish-drag':on_finish_drag})], null):null)]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_harmony__hue-wheel-wrapper",'children':[rumext.v2.jsx("canvas",{'width':canvas_side,'height':canvas_side,'className':"main_ui_workspace_colorpicker_harmony__hue-wheel",'onPointerUp':handle_stop_drag,'onLostPointerCapture':handle_stop_drag,'onClick':calculate_pos,'onPointerMove':(function (p1__77548_SHARP_){
if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
return calculate_pos(p1__77548_SHARP_);
} else {
return null;
}
}),'ref':canvas_ref,'onPointerDown':handle_start_drag}),rumext.v2.jsx("div",{'style':{'pointerEvents':"none",'left':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos_current),'top':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos_current)},'className':"main_ui_workspace_colorpicker_harmony__handler"}),rumext.v2.jsx("div",{'style':{'left':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos_complement),'top':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos_complement),'cursor':"pointer"},'onClick':on_complement_click,'className':"main_ui_workspace_colorpicker_harmony__handler"+" "+"main_ui_workspace_colorpicker_harmony__complement"})]})]});
});

(app.main.ui.workspace.colorpicker.harmony.harmony_selector.displayName = "harmony-selector");


//# sourceMappingURL=app.main.ui.workspace.colorpicker.harmony.js.map
