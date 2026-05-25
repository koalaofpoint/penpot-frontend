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
goog.provide('app.main.ui.flex_controls.margin');
app.main.ui.flex_controls.margin.margin_display = (function app$main$ui$flex_controls$margin$margin_display(props_56671){
var map__56673 = rumext.v2.util.wrap_props(props_56671);
var map__56673__$1 = cljs.core.__destructure_map(map__56673);
var hover_all_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56673__$1,new cljs.core.Keyword(null,"hover-all?","hover-all?",1343012409));
var hover_h_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56673__$1,new cljs.core.Keyword(null,"hover-h?","hover-h?",1568370393));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56673__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56673__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var hover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56673__$1,new cljs.core.Keyword(null,"hover?","hover?",-1201331489));
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56673__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56673__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var on_pointer_leave = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56673__$1,new cljs.core.Keyword(null,"on-pointer-leave","on-pointer-leave",253985380));
var margin_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56673__$1,new cljs.core.Keyword(null,"margin-num","margin-num",-23910265));
var on_pointer_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56673__$1,new cljs.core.Keyword(null,"on-pointer-enter","on-pointer-enter",199832041));
var mouse_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56673__$1,new cljs.core.Keyword(null,"mouse-pos","mouse-pos",370762057));
var hover_v_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56673__$1,new cljs.core.Keyword(null,"hover-v?","hover-v?",284060266));
var shape_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56673__$1,new cljs.core.Keyword(null,"shape-id","shape-id",981169327));
var hover_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56673__$1,new cljs.core.Keyword(null,"hover-value","hover-value",1679488403));
var rect_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56673__$1,new cljs.core.Keyword(null,"rect-data","rect-data",627750614));
var resizing_QMARK_ = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(false);
var start = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(null);
var original_value = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1((0));
var last_pos = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(null);
var negate_QMARK_ = new cljs.core.Keyword(null,"resize-negate?","resize-negate?",-1130986046).cljs$core$IFn$_invoke$arity$1(rect_data) === true;
var axis = new cljs.core.Keyword(null,"resize-axis","resize-axis",-1746101927).cljs$core$IFn$_invoke$arity$1(rect_data);
var on_pointer_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_id),rumext.v2.adapt(margin_num),rumext.v2.adapt(margin)],(function (event){
app.util.dom.capture_pointer(event);

cljs.core.reset_BANG_(resizing_QMARK_,true);

cljs.core.reset_BANG_(start,app.util.dom.get_client_position(event));

return cljs.core.reset_BANG_(original_value,new cljs.core.Keyword(null,"initial-value","initial-value",470619381).cljs$core$IFn$_invoke$arity$1(rect_data));
}));
var calc_modifiers = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_id),rumext.v2.adapt(margin_num),rumext.v2.adapt(margin),rumext.v2.adapt(hover_all_QMARK_),rumext.v2.adapt(hover_v_QMARK_),rumext.v2.adapt(hover_h_QMARK_)],(function (pos){
var delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__56675 = app.common.geom.point.to_vec(cljs.core.deref(start),pos);
if(negate_QMARK_){
return app.common.geom.point.negate(G__56675);
} else {
return G__56675;
}
})(),axis);
var val = ((function (){var x__5110__auto__ = (cljs.core.deref(original_value) + (delta / zoom));
var y__5111__auto__ = (0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})() | (0));
var layout_item_margin = (cljs.core.truth_(hover_all_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(margin,new cljs.core.Keyword(null,"m1","m1",-108094626),val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"m2","m2",-587003306),val,new cljs.core.Keyword(null,"m3","m3",-703635357),val,new cljs.core.Keyword(null,"m4","m4",-1624571215),val], 0)):(cljs.core.truth_(hover_v_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(margin,new cljs.core.Keyword(null,"m1","m1",-108094626),val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"m3","m3",-703635357),val], 0)):(cljs.core.truth_(hover_h_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(margin,new cljs.core.Keyword(null,"m2","m2",-587003306),val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"m4","m4",-1624571215),val], 0)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(margin,margin_num,val)
)));
var layout_item_margin_type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"m1","m1",-108094626).cljs$core$IFn$_invoke$arity$1(margin),new cljs.core.Keyword(null,"m2","m2",-587003306).cljs$core$IFn$_invoke$arity$1(margin),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"m3","m3",-703635357).cljs$core$IFn$_invoke$arity$1(margin),new cljs.core.Keyword(null,"m4","m4",-1624571215).cljs$core$IFn$_invoke$arity$1(margin)], 0)))?new cljs.core.Keyword(null,"simple","simple",-581868663):new cljs.core.Keyword(null,"multiple","multiple",1244445549));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,app.main.data.workspace.modifiers.create_modif_tree(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null),app.common.types.modifiers.change_property(app.common.types.modifiers.change_property(app.common.types.modifiers.empty(),new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),layout_item_margin),new cljs.core.Keyword(null,"layout-item-margin-type","layout-item-margin-type",-1313230390),layout_item_margin_type))], null);
}));
var on_lost_pointer_capture = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(calc_modifiers)],(function (event){
app.util.dom.release_pointer(event);

if(cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"render-wasm/v1"))){
var vec__56681_56713 = (function (){var G__56684 = cljs.core.deref(last_pos);
return (calc_modifiers.cljs$core$IFn$_invoke$arity$1 ? calc_modifiers.cljs$core$IFn$_invoke$arity$1(G__56684) : calc_modifiers.call(null,G__56684));
})();
var __56714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56681_56713,(0),null);
var modifiers_56715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56681_56713,(1),null);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.modifiers.apply_wasm_modifiers(modifiers_56715),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.transforms.finish_transform()], 0));
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
var vec__56688 = (calc_modifiers.cljs$core$IFn$_invoke$arity$1 ? calc_modifiers.cljs$core$IFn$_invoke$arity$1(pos) : calc_modifiers.call(null,pos));
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56688,(0),null);
var modifiers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56688,(1),null);
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
return rumext.v2.jsx("rect",{'width':(function (){var x__5110__auto__ = (0);
var y__5111__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect_data);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})(),'height':(function (){var x__5110__auto__ = (0);
var y__5111__auto__ = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect_data);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})(),'className':"margin-rect"+" "+((cljs.core.truth_((function (){var or__5025__auto__ = hover_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return selected_QMARK_;
}
})())?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resize-axis","resize-axis",-1746101927).cljs$core$IFn$_invoke$arity$1(rect_data),new cljs.core.Keyword(null,"x","x",2099068185)))?app.main.ui.css_cursors.get_dynamic("resize-ew",(0)):app.main.ui.css_cursors.get_dynamic("resize-ew",(90))):null) ?? ""),'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect_data),'style':{'fill':(cljs.core.truth_((function (){var or__5025__auto__ = hover_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return selected_QMARK_;
}
})())?app.main.ui.flex_controls.common.warning_color:"none"),'opacity':(cljs.core.truth_(selected_QMARK_)?0.5:0.25)},'onLostPointerCapture':on_lost_pointer_capture,'y':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect_data),'onPointerMove':on_pointer_move,'onPointerDown':on_pointer_down,'onPointerLeave':on_pointer_leave,'onPointerEnter':on_pointer_enter});
});

(app.main.ui.flex_controls.margin.margin_display.displayName = "margin-display");

app.main.ui.flex_controls.margin.margin_rects = (function app$main$ui$flex_controls$margin$margin_rects(props_56691){
var map__56693 = rumext.v2.util.wrap_props(props_56691);
var map__56693__$1 = cljs.core.__destructure_map(map__56693);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56693__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56693__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56693__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var alt_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56693__$1,new cljs.core.Keyword(null,"alt?","alt?",-1427998432));
var shift_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56693__$1,new cljs.core.Keyword(null,"shift?","shift?",-1034734696));
var shape_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
var pill_width = (app.main.ui.flex_controls.common.flex_display_pill_width / zoom);
var pill_height = (app.main.ui.flex_controls.common.flex_display_pill_height / zoom);
var margins_selected = rumext.v2.deref(app.main.refs.workspace_margins_selected);
var current_modifiers = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var shape__$1 = app.common.types.modifiers.apply_structure_modifiers(shape,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_modifiers),shape_id),new cljs.core.Keyword(null,"modifiers","modifiers",50378834)));
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
var hover_v_QMARK_ = (function (){var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hover),new cljs.core.Keyword(null,"m1","m1",-108094626))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hover),new cljs.core.Keyword(null,"m3","m3",-703635357))));
if(and__5023__auto__){
return shift_QMARK_;
} else {
return and__5023__auto__;
}
})();
var hover_h_QMARK_ = (function (){var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hover),new cljs.core.Keyword(null,"m2","m2",-587003306))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hover),new cljs.core.Keyword(null,"m4","m4",-1624571215))));
if(and__5023__auto__){
return shift_QMARK_;
} else {
return and__5023__auto__;
}
})();
var margin = new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708).cljs$core$IFn$_invoke$arity$1(shape__$1);
var map__56695 = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape__$1);
var map__56695__$1 = cljs.core.__destructure_map(map__56695);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56695__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56695__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56695__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56695__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56695__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56695__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
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
var or__5025__auto____$1 = (function (){var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"m1","m1",-108094626))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"m3","m3",-703635357))));
if(and__5023__auto__){
return hover_v_QMARK_;
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = (function (){var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"m2","m2",-587003306))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"m4","m4",-1624571215))));
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
var margin_display_data = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"m1","m1",-108094626),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"resize-type","resize-type",-1850768191),new cljs.core.Keyword(null,"resize-negate?","resize-negate?",-1130986046),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"initial-value","initial-value",470619381),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"resize-axis","resize-axis",-1746101927),new cljs.core.Keyword(null,"height","height",1025178622)],[(cljs.core.truth_(new cljs.core.Keyword(null,"flip-y","flip-y",935998815).cljs$core$IFn$_invoke$arity$1(frame))?y2:(y1 - new cljs.core.Keyword(null,"m1","m1",-108094626).cljs$core$IFn$_invoke$arity$1(margin))),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"flip-y","flip-y",935998815).cljs$core$IFn$_invoke$arity$1(frame),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape_id),"-m1"].join(''),width,new cljs.core.Keyword(null,"m1","m1",-108094626).cljs$core$IFn$_invoke$arity$1(margin),x1,new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"m1","m1",-108094626).cljs$core$IFn$_invoke$arity$1(margin)]),new cljs.core.Keyword(null,"m2","m2",-587003306),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"resize-type","resize-type",-1850768191),new cljs.core.Keyword(null,"resize-negate?","resize-negate?",-1130986046),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"initial-value","initial-value",470619381),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"resize-axis","resize-axis",-1746101927),new cljs.core.Keyword(null,"height","height",1025178622)],[y1,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"flip-x","flip-x",891276861).cljs$core$IFn$_invoke$arity$1(frame),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape_id),"-m2"].join(''),new cljs.core.Keyword(null,"m2","m2",-587003306).cljs$core$IFn$_invoke$arity$1(margin),new cljs.core.Keyword(null,"m2","m2",-587003306).cljs$core$IFn$_invoke$arity$1(margin),(cljs.core.truth_(new cljs.core.Keyword(null,"flip-x","flip-x",891276861).cljs$core$IFn$_invoke$arity$1(frame))?(x1 - new cljs.core.Keyword(null,"m2","m2",-587003306).cljs$core$IFn$_invoke$arity$1(margin)):x2),new cljs.core.Keyword(null,"x","x",2099068185),height]),new cljs.core.Keyword(null,"m3","m3",-703635357),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"resize-type","resize-type",-1850768191),new cljs.core.Keyword(null,"resize-negate?","resize-negate?",-1130986046),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"initial-value","initial-value",470619381),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"resize-axis","resize-axis",-1746101927),new cljs.core.Keyword(null,"height","height",1025178622)],[(cljs.core.truth_(new cljs.core.Keyword(null,"flip-y","flip-y",935998815).cljs$core$IFn$_invoke$arity$1(frame))?(y1 - new cljs.core.Keyword(null,"m3","m3",-703635357).cljs$core$IFn$_invoke$arity$1(margin)):y2),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"flip-y","flip-y",935998815).cljs$core$IFn$_invoke$arity$1(frame),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape_id),"-m3"].join(''),width,new cljs.core.Keyword(null,"m3","m3",-703635357).cljs$core$IFn$_invoke$arity$1(margin),x1,new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"m3","m3",-703635357).cljs$core$IFn$_invoke$arity$1(margin)]),new cljs.core.Keyword(null,"m4","m4",-1624571215),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"resize-type","resize-type",-1850768191),new cljs.core.Keyword(null,"resize-negate?","resize-negate?",-1130986046),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"initial-value","initial-value",470619381),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"resize-axis","resize-axis",-1746101927),new cljs.core.Keyword(null,"height","height",1025178622)],[y1,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"flip-x","flip-x",891276861).cljs$core$IFn$_invoke$arity$1(frame),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape_id),"-m4"].join(''),new cljs.core.Keyword(null,"m4","m4",-1624571215).cljs$core$IFn$_invoke$arity$1(margin),new cljs.core.Keyword(null,"m4","m4",-1624571215).cljs$core$IFn$_invoke$arity$1(margin),(cljs.core.truth_(new cljs.core.Keyword(null,"flip-x","flip-x",891276861).cljs$core$IFn$_invoke$arity$1(frame))?x2:(x1 - new cljs.core.Keyword(null,"m4","m4",-1624571215).cljs$core$IFn$_invoke$arity$1(margin))),new cljs.core.Keyword(null,"x","x",2099068185),height])], null);
return rumext.v2.jsxs("g",{'className':"margins",'pointerEvents':"visible",'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__56704){
var vec__56705 = p__56704;
var margin_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56705,(0),null);
var rect_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56705,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.flex_controls.margin.margin_display,{'zoom':zoom,'on-pointer-leave':on_pointer_leave,'margin-num':margin_num,'mouse-pos':mouse_pos,'on-pointer-enter':cljs.core.partial.cljs$core$IFn$_invoke$arity$3(on_pointer_enter,margin_num,cljs.core.get.cljs$core$IFn$_invoke$arity$2(margin,margin_num)),'hover-v?':hover_v_QMARK_,'shape-id':shape_id,'hover-value':hover_value,'rect-data':rect_data,'hover-all?':hover_all_QMARK_,'hover-h?':hover_h_QMARK_,'on-change':on_change,'selected?':cljs.core.get.cljs$core$IFn$_invoke$arity$2(margins_selected,margin_num),'hover?':hover_QMARK_(margin_num),'margin':margin},new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(rect_data)));

return out_arr__35152__auto__;
}),[],margin_display_data),(cljs.core.truth_(cljs.core.deref(hover))?rumext.v2.jsx(app.main.ui.flex_controls.common.flex_display_pill,{'height':pill_height,'width':pill_width,'font-size':(app.main.ui.flex_controls.common.font_size / zoom),'border-radius':(app.main.ui.flex_controls.common.flex_display_pill_border_radius / zoom),'color':app.main.ui.flex_controls.common.warning_color,'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mouse_pos)),'y':(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mouse_pos)) - pill_width),'value':cljs.core.deref(hover_value)}):null)]});
});

(app.main.ui.flex_controls.margin.margin_rects.displayName = "margin-rects");

app.main.ui.flex_controls.margin.margin_control = (function app$main$ui$flex_controls$margin$margin_control(props_56711){
var map__56712 = rumext.v2.util.wrap_props(props_56711);
var map__56712__$1 = cljs.core.__destructure_map(map__56712);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56712__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56712__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56712__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var alt_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56712__$1,new cljs.core.Keyword(null,"alt?","alt?",-1427998432));
var shift_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56712__$1,new cljs.core.Keyword(null,"shift?","shift?",-1034734696));
if(cljs.core.truth_(shape)){
return rumext.v2.jsx("g",{'className':"measurement-gaps",'pointerEvents':"none",'children':rumext.v2.jsx("g",{'className':"hover-shapes",'children':rumext.v2.jsx(app.main.ui.flex_controls.margin.margin_rects,{'shape':shape,'frame':parent,'zoom':zoom,'alt?':alt_QMARK_,'shift?':shift_QMARK_})})});
} else {
return null;
}
});

(app.main.ui.flex_controls.margin.margin_control.displayName = "margin-control");


//# sourceMappingURL=app.main.ui.flex_controls.margin.js.map
