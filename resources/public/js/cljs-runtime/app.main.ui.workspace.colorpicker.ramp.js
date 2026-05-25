import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.math.js";
import "./app.common.types.color.js";
import "./app.main.ui.components.color_bullet.js";
import "./app.main.ui.workspace.colorpicker.slider_selector.js";
import "./app.util.dom.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.colorpicker.ramp');
app.main.ui.workspace.colorpicker.ramp.value_saturation_selector = (function app$main$ui$workspace$colorpicker$ramp$value_saturation_selector(props_77680){
var map__77681 = rumext.v2.util.wrap_props(props_77680);
var map__77681__$1 = cljs.core.__destructure_map(map__77681);
var saturation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77681__$1,new cljs.core.Keyword(null,"saturation","saturation",-14247929));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77681__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77681__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_start_drag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77681__$1,new cljs.core.Keyword(null,"on-start-drag","on-start-drag",-1763010775));
var on_finish_drag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77681__$1,new cljs.core.Keyword(null,"on-finish-drag","on-finish-drag",471583064));
var dragging_QMARK__STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var dragging_QMARK_ = cljs.core.deref(dragging_QMARK__STAR_);
var calculate_pos = (function (ev){
var map__77682 = app.util.dom.get_bounding_rect(app.util.dom.get_target(ev));
var map__77682__$1 = cljs.core.__destructure_map(map__77682);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77682__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77682__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77682__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77682__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
var map__77683 = app.util.dom.get_client_position(ev);
var map__77683__$1 = cljs.core.__destructure_map(map__77683);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77683__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77683__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var px = app.common.math.clamp(((x - left) / (right - left)),(0),(1));
var py = ((255) * ((1) - app.common.math.clamp(((y - top) / (bottom - top)),(0),(1))));
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(px,py) : on_change.call(null,px,py));
});
var handle_start_drag = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_start_drag)],(function (event){
app.util.dom.capture_pointer(event);

cljs.core.reset_BANG_(dragging_QMARK__STAR_,true);

return (on_start_drag.cljs$core$IFn$_invoke$arity$0 ? on_start_drag.cljs$core$IFn$_invoke$arity$0() : on_start_drag.call(null));
}));
var handle_stop_drag = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_finish_drag)],(function (event){
app.util.dom.release_pointer(event);

cljs.core.reset_BANG_(dragging_QMARK__STAR_,false);

return (on_finish_drag.cljs$core$IFn$_invoke$arity$0 ? on_finish_drag.cljs$core$IFn$_invoke$arity$0() : on_finish_drag.call(null));
}));
var handle_change_pointer_move = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(calculate_pos),rumext.v2.adapt(dragging_QMARK_)],(function (event){
if(cljs.core.truth_(dragging_QMARK_)){
return calculate_pos(event);
} else {
return null;
}
}));
return rumext.v2.jsx("div",{'data-testid':"value-saturation-selector",'onPointerDown':handle_start_drag,'onPointerUp':handle_stop_drag,'onClick':calculate_pos,'onPointerMove':handle_change_pointer_move,'className':"main_ui_workspace_colorpicker_ramp__value-saturation-selector",'children':rumext.v2.jsx("div",{'data-testid':"ramp-handler",'style':{'pointerEvents':"none",'left':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * saturation)),"%"].join(''),'top':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * ((1) - (value / (255))))),"%"].join('')},'className':"main_ui_workspace_colorpicker_ramp__handler"})});
});

(app.main.ui.workspace.colorpicker.ramp.value_saturation_selector.displayName = "value-saturation-selector");

app.main.ui.workspace.colorpicker.ramp.enrich_color_map = (function app$main$ui$workspace$colorpicker$ramp$enrich_color_map(p__77684){
var map__77685 = p__77684;
var map__77685__$1 = cljs.core.__destructure_map(map__77685);
var color = map__77685__$1;
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77685__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77685__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77685__$1,new cljs.core.Keyword(null,"v","v",21465059));
var h__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(h,(0));
var s__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(s,(0));
var v__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(v,(0));
var hsv = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h__$1,s__$1,v__$1], null);
var vec__77686 = app.common.types.color.hsv__GT_rgb(hsv);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77686,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77686,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77686,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(color,new cljs.core.Keyword(null,"hex","hex",41691346),app.common.types.color.hsv__GT_hex(hsv),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),h__$1,new cljs.core.Keyword(null,"s","s",1705939918),s__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"g","g",1738089905),g,new cljs.core.Keyword(null,"b","b",1482224470),b], 0));
});
app.main.ui.workspace.colorpicker.ramp.ramp_selector_STAR_ = (function app$main$ui$workspace$colorpicker$ramp$ramp_selector_STAR_(props_77689){
var on_change = props_77689.onChange;
var disable_opacity = props_77689.disableOpacity;
var color = props_77689.color;
var on_start_drag = props_77689.onStartDrag;
var on_finish_drag = props_77689.onFinishDrag;
var internal_color_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.ui.workspace.colorpicker.ramp.enrich_color_map(color);
}));
var internal_color = cljs.core.deref(internal_color_STAR_);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(internal_color,new cljs.core.Keyword(null,"h","h",1109658740));
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(internal_color,new cljs.core.Keyword(null,"s","s",1705939918));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(internal_color,new cljs.core.Keyword(null,"v","v",21465059));
var hex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(internal_color,new cljs.core.Keyword(null,"hex","hex",41691346));
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(internal_color,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var bullet_color = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(hex),rumext.v2.adapt(alpha)],(function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),hex,new cljs.core.Keyword(null,"opacity","opacity",397153780),alpha], null);
}));
var on_change_value_saturation = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(internal_color),rumext.v2.adapt(on_change)],(function (saturation,value){
var color__$1 = app.main.ui.workspace.colorpicker.ramp.enrich_color_map(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(internal_color,new cljs.core.Keyword(null,"s","s",1705939918),saturation),new cljs.core.Keyword(null,"v","v",21465059),value));
cljs.core.reset_BANG_(internal_color_STAR_,color__$1);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(color__$1) : on_change.call(null,color__$1));
}));
var on_change_hue = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(internal_color),rumext.v2.adapt(on_change)],(function (hue){
var color__$1 = app.main.ui.workspace.colorpicker.ramp.enrich_color_map(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(internal_color,new cljs.core.Keyword(null,"h","h",1109658740),hue));
cljs.core.reset_BANG_(internal_color_STAR_,color__$1);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(color__$1) : on_change.call(null,color__$1));
}));
var on_change_opacity = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(internal_color),rumext.v2.adapt(on_change)],(function (opacity){
var color__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(internal_color,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),opacity);
cljs.core.reset_BANG_(internal_color_STAR_,color__$1);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(color__$1) : on_change.call(null,color__$1));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color)],(function (){
return cljs.core.reset_BANG_(internal_color_STAR_,app.main.ui.workspace.colorpicker.ramp.enrich_color_map(color));
}));

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.colorpicker.ramp.value_saturation_selector,{'hue':h,'saturation':s,'value':v,'on-change':on_change_value_saturation,'on-start-drag':on_start_drag,'on-finish-drag':on_finish_drag}),rumext.v2.jsxs("div",{'style':{'--bullet-size':"52px"},'className':"main_ui_workspace_colorpicker_ramp__shade-selector",'children':[rumext.v2.jsx(app.main.ui.components.color_bullet.color_bullet,{'color':bullet_color,'area':true}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_ramp__sliders-wrapper",'children':[rumext.v2.jsx(app.main.ui.workspace.colorpicker.slider_selector.slider_selector,{'type':new cljs.core.Keyword(null,"hue","hue",-508078848),'max-value':(360),'value':h,'on-change':on_change_hue,'on-start-drag':on_start_drag,'on-finish-drag':on_finish_drag}),((cljs.core.not(disable_opacity))?rumext.v2.jsx(app.main.ui.workspace.colorpicker.slider_selector.slider_selector,{'type':new cljs.core.Keyword(null,"opacity","opacity",397153780),'max-value':(1),'value':alpha,'on-change':on_change_opacity,'on-start-drag':on_start_drag,'on-finish-drag':on_finish_drag}):null)]})]})]});
});

(app.main.ui.workspace.colorpicker.ramp.ramp_selector_STAR_.displayName = "ramp-selector*");


//# sourceMappingURL=app.main.ui.workspace.colorpicker.ramp.js.map
