import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.math.js";
import "./app.util.dom.js";
import "./app.util.object.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.colorpicker.slider_selector');
app.main.ui.workspace.colorpicker.slider_selector.slider_selector = (function app$main$ui$workspace$colorpicker$slider_selector$slider_selector(props_77505){
var map__77506 = rumext.v2.util.wrap_props(props_77505);
var map__77506__$1 = cljs.core.__destructure_map(map__77506);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77506__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var reverse_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77506__$1,new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474));
var on_start_drag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77506__$1,new cljs.core.Keyword(null,"on-start-drag","on-start-drag",-1763010775));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77506__$1,new cljs.core.Keyword(null,"value","value",305978217));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77506__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var min_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77506__$1,new cljs.core.Keyword(null,"min-value","min-value",-1119123315));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77506__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77506__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77506__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var on_finish_drag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77506__$1,new cljs.core.Keyword(null,"on-finish-drag","on-finish-drag",471583064));
var min_value__$1 = (function (){var or__5025__auto__ = min_value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var max_value__$1 = (function (){var or__5025__auto__ = max_value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})();
var dragging_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
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
var calculate_pos = (function (ev){
if(cljs.core.truth_(on_change)){
var map__77507 = app.util.dom.get_bounding_rect(app.util.dom.get_target(ev));
var map__77507__$1 = cljs.core.__destructure_map(map__77507);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77507__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77507__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77507__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77507__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
var map__77508 = app.util.dom.get_client_position(ev);
var map__77508__$1 = cljs.core.__destructure_map(map__77508);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77508__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77508__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var unit_value = (cljs.core.truth_(vertical_QMARK_)?app.common.math.clamp(((bottom - y) / (bottom - top)),(0),(1)):app.common.math.clamp(((x - left) / (right - left)),(0),(1)));
var unit_value__$1 = (cljs.core.truth_(reverse_QMARK_)?app.common.math.abs((unit_value - 1.0)):unit_value);
var value__$1 = (min_value__$1 + (unit_value__$1 * (max_value__$1 - min_value__$1)));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value__$1) : on_change.call(null,value__$1));
} else {
return null;
}
});
return rumext.v2.jsx("div",{'data-testid':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"opacity","opacity",397153780)))?"slider-opacity":null),'onPointerDown':handle_start_drag,'onPointerUp':handle_stop_drag,'onLostPointerCapture':handle_stop_drag,'onClick':calculate_pos,'onPointerMove':(function (p1__77504_SHARP_){
if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
return calculate_pos(p1__77504_SHARP_);
} else {
return null;
}
}),'className':""+(class$ ?? "")+((cljs.core.truth_(vertical_QMARK_)?"main_ui_workspace_colorpicker_slider_selector__vertical":"")+" "+"main_ui_workspace_colorpicker_slider_selector__slider-selector"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"hue","hue",-508078848)))?"main_ui_workspace_colorpicker_slider_selector__hue":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"opacity","opacity",397153780)))?"main_ui_workspace_colorpicker_slider_selector__opacity":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"value","value",305978217)))?"main_ui_workspace_colorpicker_slider_selector__value":"") ?? ""),'children':(function (){var value_percent = (((value - min_value__$1) / (max_value__$1 - min_value__$1)) * (100));
var value_percent__$1 = (cljs.core.truth_(reverse_QMARK_)?app.common.math.abs((value_percent - (100))):value_percent);
var value_percent_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_percent__$1),"%"].join('');
var style_common = ({"pointerEvents": "none"});
var style_horizontal = app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(({"left": value_percent_str}),style_common);
var style_vertical = app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(({"bottom": value_percent_str}),style_common);
return rumext.v2.jsx("div",{'style':(cljs.core.truth_(vertical_QMARK_)?style_vertical:style_horizontal),'className':"main_ui_workspace_colorpicker_slider_selector__handler"});
})()});
});

(app.main.ui.workspace.colorpicker.slider_selector.slider_selector.displayName = "slider-selector");


//# sourceMappingURL=app.main.ui.workspace.colorpicker.slider_selector.js.map
