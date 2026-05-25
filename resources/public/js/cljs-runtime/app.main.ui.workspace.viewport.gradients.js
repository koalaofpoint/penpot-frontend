import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.shapes.points.js";
import "./app.common.math.js";
import "./app.common.types.color.js";
import "./app.common.types.fills.js";
import "./app.main.data.workspace.colors.js";
import "./app.main.features.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.workspace.viewport.viewport_ref.js";
import "./app.util.dom.js";
import "./app.util.mouse.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.viewport.gradients');
app.main.ui.workspace.viewport.gradients.gradient_line_stroke_width = (2);
app.main.ui.workspace.viewport.gradients.gradient_line_stroke_color = "var(--app-white)";
app.main.ui.workspace.viewport.gradients.gradient_square_width = 20.5;
app.main.ui.workspace.viewport.gradients.gradient_square_radius = (4);
app.main.ui.workspace.viewport.gradients.gradient_square_stroke_width = (2);
app.main.ui.workspace.viewport.gradients.gradient_width_handler_radius = (4);
app.main.ui.workspace.viewport.gradients.gradient_width_handler_radius_selected = (6);
app.main.ui.workspace.viewport.gradients.gradient_width_handler_radius_handler = (15);
app.main.ui.workspace.viewport.gradients.gradient_width_handler_color = "var(--app-white)";
app.main.ui.workspace.viewport.gradients.gradient_square_stroke_color = "var(--app-white)";
app.main.ui.workspace.viewport.gradients.gradient_square_stroke_color_selected = "var(--color-accent-tertiary)";
app.main.ui.workspace.viewport.gradients.gradient_endpoint_radius = (4);
app.main.ui.workspace.viewport.gradients.gradient_endpoint_radius_selected = (6);
app.main.ui.workspace.viewport.gradients.gradient_endpoint_radius_handler = (20);
app.main.ui.workspace.viewport.gradients.shadow = (function app$main$ui$workspace$viewport$gradients$shadow(props_56884){
var map__56885 = rumext.v2.util.wrap_props(props_56884);
var map__56885__$1 = cljs.core.__destructure_map(map__56885);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56885__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56885__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
return rumext.v2.jsxs("filter",{'id':id,'x':"-10%",'y':"-10%",'width':"120%",'height':"120%",'filterUnits':"objectBoundingBox",'colorInterpolationFilters':"sRGB",'children':[rumext.v2.jsx("feFlood",{'floodOpacity':"0",'result':"BackgroundImageFix"}),rumext.v2.jsx("feColorMatrix",{'in':"SourceAlpha",'type':"matrix",'values':"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),rumext.v2.jsx("feOffset",{'dy':offset}),rumext.v2.jsx("feGaussianBlur",{'stdDeviation':"1"}),rumext.v2.jsx("feColorMatrix",{'type':"matrix",'values':"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}),rumext.v2.jsx("feBlend",{'mode':"normal",'in2':"BackgroundImageFix",'result':id}),rumext.v2.jsx("feBlend",{'mode':"normal",'in':"SourceGraphic",'in2':id,'result':"shape"})]});
});

(app.main.ui.workspace.viewport.gradients.shadow.displayName = "shadow");

app.main.ui.workspace.viewport.gradients.checkerboard = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAIAAAC0tAIdAAACvUlEQVQoFQGyAk39AeLi4gAAAAAAAB0dHQAAAAAAAOPj4wAAAAAAAB0dHQAAAAAAAOPj4wAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////AAAAAAAA4+PjAAAAAAAAHR0dAAAAAAAA4+PjAAAAAAAAHR0dAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATj4+MAAAAAAAAdHR0AAAAAAADj4+MAAAAAAAAdHR0AAAAAAADj4+MAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjScaa0cU7nIAAAAASUVORK5CYII=";
app.main.ui.workspace.viewport.gradients.gradient_color_handler = (function app$main$ui$workspace$viewport$gradients$gradient_color_handler(props_56886){
var map__56887 = rumext.v2.util.wrap_props(props_56886);
var map__56887__$1 = cljs.core.__destructure_map(map__56887);
var on_pointer_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56887__$1,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138));
var on_pointer_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56887__$1,new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695));
var on_lost_pointer_capture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56887__$1,new cljs.core.Keyword(null,"on-lost-pointer-capture","on-lost-pointer-capture",-1554883134));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56887__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56887__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56887__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56887__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56887__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56887__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var on_pointer_up = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56887__$1,new cljs.core.Keyword(null,"on-pointer-up","on-pointer-up",385194000));
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56887__$1,new cljs.core.Keyword(null,"point","point",1813198264));
return rumext.v2.jsxs("g",{'filter':"url(#gradient-drop-shadow)",'style':{'cursor':"pointer"},'transform':app.common.geom.matrix.rotate_matrix.cljs$core$IFn$_invoke$arity$2(angle,point),'children':[rumext.v2.jsx("image",{'href':app.main.ui.workspace.viewport.gradients.checkerboard,'x':((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point) - ((app.main.ui.workspace.viewport.gradients.gradient_square_width / (2)) / zoom)) + ((12) / zoom)),'y':(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point) - ((app.main.ui.workspace.viewport.gradients.gradient_square_width / (2)) / zoom)),'width':(app.main.ui.workspace.viewport.gradients.gradient_square_width / zoom),'height':(app.main.ui.workspace.viewport.gradients.gradient_square_width / zoom)}),rumext.v2.jsx("rect",{'width':((app.main.ui.workspace.viewport.gradients.gradient_square_width / zoom) / (2)),'height':(app.main.ui.workspace.viewport.gradients.gradient_square_width / zoom),'x':((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point) - ((app.main.ui.workspace.viewport.gradients.gradient_square_width / (2)) / zoom)) + ((12) / zoom)),'onPointerUp':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_pointer_up,new cljs.core.Keyword(null,"to-p","to-p",1750614589)),'fill':new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(color),'rx':(app.main.ui.workspace.viewport.gradients.gradient_square_radius / zoom),'onClick':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_click,new cljs.core.Keyword(null,"to-p","to-p",1750614589)),'y':(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point) - ((app.main.ui.workspace.viewport.gradients.gradient_square_width / (2)) / zoom)),'onPointerDown':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_pointer_down,new cljs.core.Keyword(null,"to-p","to-p",1750614589))}),(cljs.core.truth_(selected)?rumext.v2.jsx("rect",{'width':((app.main.ui.workspace.viewport.gradients.gradient_square_width / zoom) + ((4) / zoom)),'height':((app.main.ui.workspace.viewport.gradients.gradient_square_width / zoom) + ((4) / zoom)),'x':(((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point) - ((app.main.ui.workspace.viewport.gradients.gradient_square_width / (2)) / zoom)) + ((12) / zoom)) - ((2) / zoom)),'stroke':"var(--color-accent-tertiary)",'fill':"transparent",'strokeWidth':(app.main.ui.workspace.viewport.gradients.gradient_square_stroke_width / zoom),'rx':((app.main.ui.workspace.viewport.gradients.gradient_square_radius + ((2) / zoom)) / zoom),'y':((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point) - ((app.main.ui.workspace.viewport.gradients.gradient_square_width / (2)) / zoom)) - ((2) / zoom)),'pointerEvents':"none"}):null),rumext.v2.jsx("rect",{'width':(app.main.ui.workspace.viewport.gradients.gradient_square_width / zoom),'height':(app.main.ui.workspace.viewport.gradients.gradient_square_width / zoom),'x':((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point) - ((app.main.ui.workspace.viewport.gradients.gradient_square_width / (2)) / zoom)) + ((12) / zoom)),'data-index':index,'onPointerUp':on_pointer_up,'data-allow-click-modal':"colorpicker",'stroke':"var(--app-white)",'fill':new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(color),'strokeWidth':(app.main.ui.workspace.viewport.gradients.gradient_square_stroke_width / zoom),'onLostPointerCapture':on_lost_pointer_capture,'rx':(app.main.ui.workspace.viewport.gradients.gradient_square_radius / zoom),'onClick':on_click,'y':(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point) - ((app.main.ui.workspace.viewport.gradients.gradient_square_width / (2)) / zoom)),'onPointerMove':on_pointer_move,'fillOpacity':new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(color),'onPointerDown':on_pointer_down,'pointerEvents':"all"}),rumext.v2.jsx("circle",{'cx':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point),'cy':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point),'r':((2) / zoom),'fill':"var(--app-white)"})]});
});

(app.main.ui.workspace.viewport.gradients.gradient_color_handler.displayName = "gradient-color-handler");

app.main.ui.workspace.viewport.gradients.gradient_handler_transformed = (function app$main$ui$workspace$viewport$gradients$gradient_handler_transformed(props_56894){
var map__56895 = rumext.v2.util.wrap_props(props_56894);
var map__56895__$1 = cljs.core.__destructure_map(map__56895);
var to_p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56895__$1,new cljs.core.Keyword(null,"to-p","to-p",1750614589));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56895__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var stops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56895__$1,new cljs.core.Keyword(null,"stops","stops",-1205459005));
var on_change_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56895__$1,new cljs.core.Keyword(null,"on-change-width","on-change-width",1217523302));
var on_change_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56895__$1,new cljs.core.Keyword(null,"on-change-start","on-change-start",-1484497624));
var on_change_finish = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56895__$1,new cljs.core.Keyword(null,"on-change-finish","on-change-finish",-985157970));
var width_p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56895__$1,new cljs.core.Keyword(null,"width-p","width-p",371756625));
var editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56895__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var from_p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56895__$1,new cljs.core.Keyword(null,"from-p","from-p",2047181810));
var moving_point = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(null);
var angle = ((90) + app.common.geom.point.angle.cljs$core$IFn$_invoke$arity$2(from_p,to_p));
var dragging_ref = rumext.v2.use_ref(false);
var start_offset = rumext.v2.use_ref(null);
var handler_state = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display?","display?",-1189123617),false,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"hover","hover",-341141711),null], null));
var render_wasm_QMARK_ = app.main.features.use_feature("render-wasm/v1");
var can_add_stop_QMARK_ = ((render_wasm_QMARK_)?(cljs.core.count(stops) < app.common.types.fills.MAX_GRADIENT_STOPS):true);
var endpoint_on_pointer_down = (function (position,event){
app.util.dom.stop_propagation(event);

app.util.dom.prevent_default(event);

app.util.dom.capture_pointer(event);

cljs.core.reset_BANG_(moving_point,position);

if(cljs.core.truth_((function (){var fexpr__56896 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from-p","from-p",2047181810),null,new cljs.core.Keyword(null,"to-p","to-p",1750614589),null], null), null);
return (fexpr__56896.cljs$core$IFn$_invoke$arity$1 ? fexpr__56896.cljs$core$IFn$_invoke$arity$1(position) : fexpr__56896.call(null,position));
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.select_colorpicker_gradient_stop((function (){var G__56897 = position;
var G__56897__$1 = (((G__56897 instanceof cljs.core.Keyword))?G__56897.fqn:null);
switch (G__56897__$1) {
case "from-p":
return (0);

break;
case "to-p":
return (1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56897__$1)].join('')));

}
})()));
} else {
return null;
}
});
var endpoint_on_pointer_up = (function (_position,event){
app.util.dom.release_pointer(event);

app.util.dom.stop_propagation(event);

app.util.dom.prevent_default(event);

cljs.core.reset_BANG_(moving_point,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(handler_state,cljs.core.assoc,new cljs.core.Keyword(null,"hover","hover",-341141711),null);
});
var endpoint_on_pointer_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (position){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(handler_state,cljs.core.assoc,new cljs.core.Keyword(null,"hover","hover",-341141711),position);
}));
var endpoint_on_pointer_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(handler_state,cljs.core.assoc,new cljs.core.Keyword(null,"hover","hover",-341141711),null);
}));
var points_on_pointer_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
if(can_add_stop_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(handler_state,cljs.core.assoc,new cljs.core.Keyword(null,"display?","display?",-1189123617),true);
} else {
return null;
}
}));
var points_on_pointer_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(handler_state,cljs.core.assoc,new cljs.core.Keyword(null,"display?","display?",-1189123617),false);
}));
var points_on_pointer_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(stops)],(function (e){
app.util.dom.prevent_default(e);

app.util.dom.stop_propagation(e);

if(can_add_stop_QMARK_){
var raw_pt = app.util.dom.get_client_position(e);
var position = app.main.ui.workspace.viewport.viewport_ref.point__GT_viewport(raw_pt);
var lv = app.common.geom.point.unit(app.common.geom.point.to_vec(from_p,to_p));
var nv = app.common.geom.point.normal_left(lv);
var offset = app.common.math.precision(app.common.geom.shapes.points.project_t(position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_p,to_p], null),nv),(2));
var new_stop = app.common.types.color.interpolate_gradient(stops,offset);
var stops__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stops,new_stop);
var stops__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311),stops__$1));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.update_colorpicker_stops(stops__$2));
} else {
return null;
}
}));
var points_on_pointer_move = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(from_p),rumext.v2.adapt(to_p)],(function (e){
var raw_pt = app.util.dom.get_client_position(e);
var position = app.main.ui.workspace.viewport.viewport_ref.point__GT_viewport(raw_pt);
var lv = app.common.geom.point.unit(app.common.geom.point.to_vec(from_p,to_p));
var nv = app.common.geom.point.normal_left(lv);
var offset = app.common.geom.shapes.points.project_t(position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_p,to_p], null),nv);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(handler_state,cljs.core.assoc,new cljs.core.Keyword(null,"offset","offset",296498311),offset);
}));
var handle_marker_pointer_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(stops)],(function (event){
var index = app.common.data.read_string(app.util.dom.get_data(app.util.dom.get_current_target(event),"index"));
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(stops,index);
app.util.dom.capture_pointer(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.select_colorpicker_gradient_stop(index));

rumext.v2.set_ref_val_BANG_(dragging_ref,true);

return rumext.v2.set_ref_val_BANG_(start_offset,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(stop));
}));
var handle_marker_pointer_move = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(stops)],(function (event){
var temp__5825__auto__ = rumext.v2.ref_val(dragging_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var _ = temp__5825__auto__;
var index = app.common.data.read_string(app.util.dom.get_data(app.util.dom.get_target(event),"index"));
var raw_pt = app.util.dom.get_client_position(event);
var position = app.main.ui.workspace.viewport.viewport_ref.point__GT_viewport(raw_pt);
var lv = app.common.geom.point.unit(app.common.geom.point.to_vec(from_p,to_p));
var nv = app.common.geom.point.normal_left(lv);
var offset = app.common.geom.shapes.points.project_t(position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_p,to_p], null),nv);
var offset__$1 = app.common.math.precision(app.common.math.clamp(offset,(0),(1)),(2));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.update_colorpicker_stops(cljs.core.assoc_in(stops,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"offset","offset",296498311)], null),offset__$1)));
} else {
return null;
}
}));
var handle_marker_lost_pointer_capture = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(stops)],(function (event){
app.util.dom.release_pointer(event);

rumext.v2.set_ref_val_BANG_(dragging_ref,false);

rumext.v2.set_ref_val_BANG_(start_offset,null);

var stops__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311),stops));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.update_colorpicker_stops(stops__$1));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(moving_point)),rumext.v2.adapt(from_p),rumext.v2.adapt(to_p),rumext.v2.adapt(width_p)],(function (){
var subs = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (pt){
var G__56901 = cljs.core.deref(moving_point);
var G__56901__$1 = (((G__56901 instanceof cljs.core.Keyword))?G__56901.fqn:null);
switch (G__56901__$1) {
case "from-p":
if(cljs.core.truth_(on_change_start)){
return (on_change_start.cljs$core$IFn$_invoke$arity$1 ? on_change_start.cljs$core$IFn$_invoke$arity$1(pt) : on_change_start.call(null,pt));
} else {
return null;
}

break;
case "to-p":
if(cljs.core.truth_(on_change_finish)){
return (on_change_finish.cljs$core$IFn$_invoke$arity$1 ? on_change_finish.cljs$core$IFn$_invoke$arity$1(pt) : on_change_finish.call(null,pt));
} else {
return null;
}

break;
case "width-p":
if(cljs.core.truth_(on_change_width)){
var width_v = app.common.geom.point.unit(app.common.geom.point.to_vec(from_p,width_p));
var distance = app.common.geom.point.point_line_distance(pt,from_p,to_p);
var new_width_p = app.common.geom.point.add(from_p,app.common.geom.point.multiply(width_v,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(distance)));
return (on_change_width.cljs$core$IFn$_invoke$arity$1 ? on_change_width.cljs$core$IFn$_invoke$arity$1(new_width_p) : on_change_width.call(null,new_width_p));
} else {
return null;
}

break;
default:
return null;

}
}),beicon.v2.core.map(app.util.mouse.get_pointer_position,beicon.v2.core.filter((function (p1__56890_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"viewport","viewport",443342715),app.util.mouse.get_pointer_source(p1__56890_SHARP_));
}),beicon.v2.core.filter(app.util.mouse.pointer_event_QMARK_,app.main.store.stream))));
return (function (){
return beicon.v2.core.dispose_BANG_(subs);
});
}));

return rumext.v2.jsxs("g",{'className':"gradient-handlers",'pointerEvents':"none",'children':[rumext.v2.jsx("defs",{'children':rumext.v2.jsx(app.main.ui.workspace.viewport.gradients.shadow,{'id':"gradient-drop-shadow",'offset':((2) / zoom)})}),(function (){var lv = app.common.geom.point.unit(app.common.geom.point.to_vec(from_p,to_p));
var nv = app.common.geom.point.normal_left(lv);
var width = ((40) / zoom);
var points = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.add(from_p,app.common.geom.point.scale(nv,(width / (-2)))),app.common.geom.point.add(from_p,app.common.geom.point.scale(nv,(width / (2)))),app.common.geom.point.add(to_p,app.common.geom.point.scale(nv,(width / (2)))),app.common.geom.point.add(to_p,app.common.geom.point.scale(nv,(width / (-2))))], null);
var points_str = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56891_SHARP_){
return ""+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__56891_SHARP_) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__56891_SHARP_) ?? "");
}),points));
return rumext.v2.jsx("polygon",{'points':points_str,'data-allow-click-modal':"colorpicker",'fill':"transparent",'pointerEvents':"all",'onPointerEnter':points_on_pointer_enter,'onPointerLeave':points_on_pointer_leave,'onPointerDown':points_on_pointer_down,'onPointerMove':points_on_pointer_move});
})(),rumext.v2.jsx("g",{'filter':"url(#gradient-drop-shadow)",'children':(function (){var pu = app.common.geom.point.unit(app.common.geom.point.normal_right(app.common.geom.point.to_vec(from_p,to_p)));
var sc = ((app.main.ui.workspace.viewport.gradients.gradient_line_stroke_width / zoom) / (2));
var points = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.add(from_p,app.common.geom.point.scale(pu,(- sc))),app.common.geom.point.add(from_p,app.common.geom.point.scale(pu,sc)),app.common.geom.point.add(to_p,app.common.geom.point.scale(pu,sc)),app.common.geom.point.add(to_p,app.common.geom.point.scale(pu,(- sc)))], null);
return rumext.v2.jsx("polygon",{'points':cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56892_SHARP_){
return ""+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__56892_SHARP_) ?? "")+", "+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__56892_SHARP_) ?? "");
}),points)),'fill':app.main.ui.workspace.viewport.gradients.gradient_line_stroke_color});
})()}),(cljs.core.truth_(width_p)?rumext.v2.jsx("g",{'filter':"url(#gradient-drop-shadow)",'children':(function (){var pu = app.common.geom.point.unit(app.common.geom.point.normal_right(app.common.geom.point.to_vec(from_p,width_p)));
var sc = ((app.main.ui.workspace.viewport.gradients.gradient_line_stroke_width / zoom) / (2));
var points = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.add(from_p,app.common.geom.point.scale(pu,(- sc))),app.common.geom.point.add(from_p,app.common.geom.point.scale(pu,sc)),app.common.geom.point.add(width_p,app.common.geom.point.scale(pu,sc)),app.common.geom.point.add(width_p,app.common.geom.point.scale(pu,(- sc)))], null);
return rumext.v2.jsx("polygon",{'points':cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56893_SHARP_){
return ""+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__56893_SHARP_) ?? "")+", "+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__56893_SHARP_) ?? "");
}),points)),'fill':app.main.ui.workspace.viewport.gradients.gradient_line_stroke_color});
})()}):null),(cljs.core.truth_(width_p)?rumext.v2.jsxs("g",{'filter':"url(#gradient-drop-shadow)",'children':[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width-p","width-p",371756625),new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(handler_state))))?rumext.v2.jsx("circle",{'filter':"url(#gradient-drop-shadow)",'cx':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(width_p),'cy':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(width_p),'fill':app.main.ui.workspace.viewport.gradients.gradient_square_stroke_color_selected,'r':(app.main.ui.workspace.viewport.gradients.gradient_width_handler_radius_selected / zoom)}):null),rumext.v2.jsx("circle",{'data-allow-click-modal':"colorpicker",'cx':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(width_p),'cy':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(width_p),'r':(app.main.ui.workspace.viewport.gradients.gradient_width_handler_radius / zoom),'fill':app.main.ui.workspace.viewport.gradients.gradient_width_handler_color}),rumext.v2.jsx("circle",{'cy':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(width_p),'onPointerUp':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(endpoint_on_pointer_up,new cljs.core.Keyword(null,"width-p","width-p",371756625)),'data-allow-click-modal':"colorpicker",'fill':"transparent",'r':(app.main.ui.workspace.viewport.gradients.gradient_width_handler_radius_handler / zoom),'onPointerDown':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(endpoint_on_pointer_down,new cljs.core.Keyword(null,"width-p","width-p",371756625)),'onPointerLeave':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(endpoint_on_pointer_leave,new cljs.core.Keyword(null,"width-p","width-p",371756625)),'cx':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(width_p),'onPointerEnter':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(endpoint_on_pointer_enter,new cljs.core.Keyword(null,"width-p","width-p",371756625)),'pointerEvents':"all"})]}):null),rumext.v2.jsxs("g",{'children':[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from-p","from-p",2047181810),new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(handler_state))))?rumext.v2.jsx("circle",{'filter':"url(#gradient-drop-shadow)",'cx':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(from_p),'cy':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from_p),'fill':app.main.ui.workspace.viewport.gradients.gradient_square_stroke_color_selected,'r':(app.main.ui.workspace.viewport.gradients.gradient_endpoint_radius_selected / zoom)}):null),rumext.v2.jsx("circle",{'filter':"url(#gradient-drop-shadow)",'cx':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(from_p),'cy':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from_p),'fill':"var(--app-white)",'r':(app.main.ui.workspace.viewport.gradients.gradient_endpoint_radius / zoom)}),rumext.v2.jsx("circle",{'cy':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from_p),'onPointerUp':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(endpoint_on_pointer_up,new cljs.core.Keyword(null,"from-p","from-p",2047181810)),'data-allow-click-modal':"colorpicker",'fill':"transparent",'onLostPointerCapture':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(endpoint_on_pointer_up,new cljs.core.Keyword(null,"from-p","from-p",2047181810)),'r':(app.main.ui.workspace.viewport.gradients.gradient_endpoint_radius_handler / zoom),'onPointerDown':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(endpoint_on_pointer_down,new cljs.core.Keyword(null,"from-p","from-p",2047181810)),'onPointerLeave':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(endpoint_on_pointer_leave,new cljs.core.Keyword(null,"from-p","from-p",2047181810)),'cx':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(from_p),'onPointerEnter':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(endpoint_on_pointer_enter,new cljs.core.Keyword(null,"from-p","from-p",2047181810)),'pointerEvents':"all"})]}),rumext.v2.jsxs("g",{'children':[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to-p","to-p",1750614589),new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(handler_state))))?rumext.v2.jsx("circle",{'filter':"url(#gradient-drop-shadow)",'cx':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to_p),'cy':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to_p),'fill':app.main.ui.workspace.viewport.gradients.gradient_square_stroke_color_selected,'r':(app.main.ui.workspace.viewport.gradients.gradient_endpoint_radius_selected / zoom)}):null),rumext.v2.jsx("circle",{'filter':"url(#gradient-drop-shadow)",'cx':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to_p),'cy':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to_p),'fill':"var(--app-white)",'r':(app.main.ui.workspace.viewport.gradients.gradient_endpoint_radius / zoom)}),rumext.v2.jsx("circle",{'cy':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to_p),'onPointerUp':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(endpoint_on_pointer_up,new cljs.core.Keyword(null,"to-p","to-p",1750614589)),'data-allow-click-modal':"colorpicker",'fill':"transparent",'onLostPointerCapture':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(endpoint_on_pointer_up,new cljs.core.Keyword(null,"from-p","from-p",2047181810)),'r':(app.main.ui.workspace.viewport.gradients.gradient_endpoint_radius_handler / zoom),'onPointerDown':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(endpoint_on_pointer_down,new cljs.core.Keyword(null,"to-p","to-p",1750614589)),'onPointerLeave':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(endpoint_on_pointer_leave,new cljs.core.Keyword(null,"to-p","to-p",1750614589)),'cx':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to_p),'onPointerEnter':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(endpoint_on_pointer_enter,new cljs.core.Keyword(null,"to-p","to-p",1750614589)),'pointerEvents':"all"})]}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__56925){
var vec__56926 = p__56925;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56926,(0),null);
var stop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56926,(1),null);
out_arr__35152__auto__.push((function (){var stop_p = app.common.geom.point.add(from_p,app.common.geom.point.scale(app.common.geom.point.to_vec(from_p,to_p),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(stop)));
return rumext.v2.jsx(app.main.ui.workspace.viewport.gradients.gradient_color_handler,{'on-pointer-move':handle_marker_pointer_move,'on-lost-pointer-capture':handle_marker_lost_pointer_capture,'zoom':zoom,'selected':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing,index),'color':new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(stop),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(stop)], null),'index':index,'angle':angle,'point':stop_p,'on-pointer-down':handle_marker_pointer_down},index);
})());

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(stops)),(cljs.core.truth_(new cljs.core.Keyword(null,"display?","display?",-1189123617).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(handler_state)))?(function (){var p = app.common.geom.point.add(from_p,app.common.geom.point.scale(app.common.geom.point.to_vec(from_p,to_p),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(handler_state))));
return rumext.v2.jsx("circle",{'filter':"url(#gradient-drop-shadow)",'cx':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),'cy':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),'r':((4) / zoom),'fill':"var(--app-white)"});
})():null)]});
});

(app.main.ui.workspace.viewport.gradients.gradient_handler_transformed.displayName = "gradient-handler-transformed");

app.main.ui.workspace.viewport.gradients.gradient_handlers_impl_STAR_ = (function app$main$ui$workspace$viewport$gradients$gradient_handlers_impl_STAR_(props_56929){
var zoom = props_56929.zoom;
var stops = props_56929.stops;
var editing = props_56929.editing;
var gradient = props_56929.gradient;
var shape = props_56929.shape;
var transform = app.common.geom.shapes.transform_matrix.cljs$core$IFn$_invoke$arity$1(shape);
var transform_inverse = app.common.geom.shapes.inverse_transform_matrix.cljs$core$IFn$_invoke$arity$1(shape);
var map__56930 = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape);
var map__56930__$1 = cljs.core.__destructure_map(map__56930);
var sr = map__56930__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56930__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56930__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56930__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56930__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var from_p = app.common.geom.point.transform(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + (width * new cljs.core.Keyword(null,"start-x","start-x",-193941684).cljs$core$IFn$_invoke$arity$1(gradient))),(y + (height * new cljs.core.Keyword(null,"start-y","start-y",-771244577).cljs$core$IFn$_invoke$arity$1(gradient)))),transform);
var to_p = app.common.geom.point.transform(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + (width * new cljs.core.Keyword(null,"end-x","end-x",-1323983821).cljs$core$IFn$_invoke$arity$1(gradient))),(y + (height * new cljs.core.Keyword(null,"end-y","end-y",859881965).cljs$core$IFn$_invoke$arity$1(gradient)))),transform);
var gradient_vec = app.common.geom.point.to_vec(from_p,to_p);
var gradient_length = app.common.geom.point.length(gradient_vec);
var width_v = app.common.geom.point.multiply(app.common.geom.point.multiply(app.common.geom.point.normal_right(gradient_vec),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(gradient) * (gradient_length / (height / (2)))))),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1((width / (2))));
var width_p = app.common.geom.point.add(from_p,width_v);
var change_BANG_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (changes){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.update_colorpicker_gradient(changes));
}));
var on_change_start = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(transform_inverse),rumext.v2.adapt(width),rumext.v2.adapt(height)],(function (point){
var point__$1 = app.common.geom.point.transform(point,transform_inverse);
var start_x = ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point__$1) - x) / width);
var start_y = ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point__$1) - y) / height);
var G__56938 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-x","start-x",-193941684),start_x,new cljs.core.Keyword(null,"start-y","start-y",-771244577),start_y], null);
return (change_BANG_.cljs$core$IFn$_invoke$arity$1 ? change_BANG_.cljs$core$IFn$_invoke$arity$1(G__56938) : change_BANG_.call(null,G__56938));
}));
var on_change_finish = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(transform_inverse),rumext.v2.adapt(width),rumext.v2.adapt(height)],(function (point){
var point__$1 = app.common.geom.point.transform(point,transform_inverse);
var end_x = ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point__$1) - x) / width);
var end_y = ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point__$1) - y) / height);
var G__56939 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"end-x","end-x",-1323983821),end_x,new cljs.core.Keyword(null,"end-y","end-y",859881965),end_y], null);
return (change_BANG_.cljs$core$IFn$_invoke$arity$1 ? change_BANG_.cljs$core$IFn$_invoke$arity$1(G__56939) : change_BANG_.call(null,G__56939));
}));
var on_change_width = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(gradient_length),rumext.v2.adapt(width),rumext.v2.adapt(height)],(function (point){
var scale_factor_y = (gradient_length / (height / (2)));
var norm_dist = (app.common.geom.point.distance(point,from_p) / ((width / (2)) * scale_factor_y));
if(cljs.core.truth_((function (){var and__5023__auto__ = norm_dist;
if(cljs.core.truth_(and__5023__auto__)){
return app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(norm_dist);
} else {
return and__5023__auto__;
}
})())){
var G__56942 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),norm_dist], null);
return (change_BANG_.cljs$core$IFn$_invoke$arity$1 ? change_BANG_.cljs$core$IFn$_invoke$arity$1(G__56942) : change_BANG_.call(null,G__56942));
} else {
return null;
}
}));
return rumext.v2.jsx(app.main.ui.workspace.viewport.gradients.gradient_handler_transformed,{'zoom':zoom,'stops':stops,'on-change-width':on_change_width,'on-change-start':on_change_start,'on-change-finish':on_change_finish,'width-p':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"radial","radial",-1334240714),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(gradient)))?width_p:null),'editing':editing,'from-p':from_p,'to-p':to_p});
});

(app.main.ui.workspace.viewport.gradients.gradient_handlers_impl_STAR_.displayName = "gradient-handlers-impl*");

app.main.ui.workspace.viewport.gradients.gradient_handlers_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$viewport$gradients$gradient_handlers_STAR_(props_56943){
var zoom = props_56943.zoom;
var id = props_56943.id;
var shape_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id)],(function (){
return app.main.refs.object_by_id(id);
}));
var shape = rumext.v2.deref(shape_ref);
var state = rumext.v2.deref(app.main.refs.colorpicker);
var gradient = new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(state);
var render_wasm_QMARK_ = app.main.features.use_feature("render-wasm/v1");
var stops = ((render_wasm_QMARK_)?cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(app.common.types.fills.MAX_GRADIENT_STOPS,new cljs.core.Keyword(null,"stops","stops",-1205459005).cljs$core$IFn$_invoke$arity$1(state))):new cljs.core.Keyword(null,"stops","stops",-1205459005).cljs$core$IFn$_invoke$arity$1(state));
var editing_stop = new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616).cljs$core$IFn$_invoke$arity$1(state);
if((((!((gradient == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"shape-id","shape-id",981169327).cljs$core$IFn$_invoke$arity$1(gradient))))){
return rumext.v2.jsx(app.main.ui.workspace.viewport.gradients.gradient_handlers_impl_STAR_,{'zoom':zoom,'gradient':gradient,'stops':stops,'editing':editing_stop,'shape':shape});
} else {
return null;
}
}));

(app.main.ui.workspace.viewport.gradients.gradient_handlers_STAR_.displayName = "gradient-handlers*");


//# sourceMappingURL=app.main.ui.workspace.viewport.gradients.js.map
