import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.types.color.js";
import "./app.main.ui.workspace.colorpicker.slider_selector.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.colorpicker.hsva');
app.main.ui.workspace.colorpicker.hsva.hsva_selector = (function app$main$ui$workspace$colorpicker$hsva$hsva_selector(props_77535){
var map__77536 = rumext.v2.util.wrap_props(props_77535);
var map__77536__$1 = cljs.core.__destructure_map(map__77536);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77536__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var disable_opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77536__$1,new cljs.core.Keyword(null,"disable-opacity","disable-opacity",1547998851));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77536__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_start_drag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77536__$1,new cljs.core.Keyword(null,"on-start-drag","on-start-drag",-1763010775));
var on_finish_drag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77536__$1,new cljs.core.Keyword(null,"on-finish-drag","on-finish-drag",471583064));
var map__77537 = color;
var map__77537__$1 = cljs.core.__destructure_map(map__77537);
var hue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77537__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var saturation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77537__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77537__$1,new cljs.core.Keyword(null,"v","v",21465059));
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77537__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var handle_change_slider = (function (key){
return (function (new_value){
var change = cljs.core.PersistentHashMap.fromArrays([key],[new_value]);
var map__77538 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([color,change], 0));
var map__77538__$1 = cljs.core.__destructure_map(map__77538);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77538__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77538__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77538__$1,new cljs.core.Keyword(null,"v","v",21465059));
var hex = app.common.types.color.hsv__GT_hex(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,v], null));
var vec__77539 = app.common.types.color.hex__GT_rgb(hex);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77539,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77539,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77539,(2),null);
var G__77543 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([change,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hex","hex",41691346),hex,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"g","g",1738089905),g,new cljs.core.Keyword(null,"b","b",1482224470),b], null)], 0));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__77543) : on_change.call(null,G__77543));
});
});
var on_change_opacity = (function (new_alpha){
var G__77547 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new_alpha], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__77547) : on_change.call(null,G__77547));
});
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_hsva__hsva-selector",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_hsva__hsva-row",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_colorpicker_hsva__hsva-selector-label",'children':"H"}),rumext.v2.jsx(app.main.ui.workspace.colorpicker.slider_selector.slider_selector,{'class':"main_ui_workspace_colorpicker_hsva__hsva-bar",'type':new cljs.core.Keyword(null,"hue","hue",-508078848),'max-value':(360),'value':hue,'on-change':handle_change_slider(new cljs.core.Keyword(null,"h","h",1109658740)),'on-start-drag':on_start_drag,'on-finish-drag':on_finish_drag})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_hsva__hsva-row",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_colorpicker_hsva__hsva-selector-label",'children':"S"}),rumext.v2.jsx(app.main.ui.workspace.colorpicker.slider_selector.slider_selector,{'class':"main_ui_workspace_colorpicker_hsva__hsva-bar",'type':new cljs.core.Keyword(null,"saturation","saturation",-14247929),'max-value':(1),'value':saturation,'on-change':handle_change_slider(new cljs.core.Keyword(null,"s","s",1705939918)),'on-start-drag':on_start_drag,'on-finish-drag':on_finish_drag})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_hsva__hsva-row",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_colorpicker_hsva__hsva-selector-label",'children':"V"}),rumext.v2.jsx(app.main.ui.workspace.colorpicker.slider_selector.slider_selector,{'class':"main_ui_workspace_colorpicker_hsva__hsva-bar",'type':new cljs.core.Keyword(null,"value","value",305978217),'reverse?':false,'max-value':(255),'value':value,'on-change':handle_change_slider(new cljs.core.Keyword(null,"v","v",21465059)),'on-start-drag':on_start_drag,'on-finish-drag':on_finish_drag})]}),((cljs.core.not(disable_opacity))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_hsva__hsva-row",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_colorpicker_hsva__hsva-selector-label",'children':"A"}),rumext.v2.jsx(app.main.ui.workspace.colorpicker.slider_selector.slider_selector,{'class':"main_ui_workspace_colorpicker_hsva__hsva-bar",'type':new cljs.core.Keyword(null,"opacity","opacity",397153780),'max-value':(1),'value':alpha,'on-change':on_change_opacity,'on-start-drag':on_start_drag,'on-finish-drag':on_finish_drag})]}):null)]});
});

(app.main.ui.workspace.colorpicker.hsva.hsva_selector.displayName = "hsva-selector");


//# sourceMappingURL=app.main.ui.workspace.colorpicker.hsva.js.map
