import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.math.js";
import "./app.common.uuid.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.components.numeric_input.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.keyboard.js";
import "./app.util.timers.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.components.editable_select');
app.main.ui.components.editable_select.editable_select = (function app$main$ui$components$editable_select$editable_select(props_78078){
var map__78079 = rumext.v2.util.wrap_props(props_78078);
var map__78079__$1 = cljs.core.__destructure_map(map__78079);
var params = map__78079__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78079__$1,new cljs.core.Keyword(null,"options","options",99638489));
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78079__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78079__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78079__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78079__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78079__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78079__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var input_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78079__$1,new cljs.core.Keyword(null,"input-class","input-class",-62053138));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78079__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next(),new cljs.core.Keyword(null,"is-open?","is-open?",-319226511),false,new cljs.core.Keyword(null,"current-value","current-value",2066017989),value,new cljs.core.Keyword(null,"top","top",-1856271961),null,new cljs.core.Keyword(null,"left","left",-399115937),null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null], null));
var state = cljs.core.deref(state_STAR_);
var is_open_QMARK_ = new cljs.core.Keyword(null,"is-open?","is-open?",-319226511).cljs$core$IFn$_invoke$arity$1(state);
var current_value = new cljs.core.Keyword(null,"current-value","current-value",2066017989).cljs$core$IFn$_invoke$arity$1(state);
var element_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(state);
var min_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"min","min",444991522));
var max_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"max","max",61366548));
var emit_blur_QMARK_ = rumext.v2.use_ref(null);
var font_size_wrapper_ref = rumext.v2.use_ref();
var toggle_dropdown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(state)],(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"is-open?","is-open?",-319226511),cljs.core.not);
}));
var close_dropdown = (function (event){
app.util.dom.stop_propagation(event);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"is-open?","is-open?",-319226511),false);
});
var select_item = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change),rumext.v2.adapt(on_blur)],(function (event){
var value__$1 = app.common.data.read_string(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"current-value","current-value",2066017989),value__$1);

if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value__$1) : on_change.call(null,value__$1));
} else {
}

if(cljs.core.truth_(on_blur)){
return (on_blur.cljs$core$IFn$_invoke$arity$0 ? on_blur.cljs$core$IFn$_invoke$arity$0() : on_blur.call(null));
} else {
return null;
}
}));
var as_key_value = (function (item){
if(cljs.core.map_QMARK_(item)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,item], null);
}
});
var labels_map = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(as_key_value),options);
var value__GT_label = (function (value__$1){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(labels_map,value__$1,value__$1);
});
var set_value = (function (value__$1){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"current-value","current-value",2066017989),value__$1);

if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value__$1) : on_change.call(null,value__$1));
} else {
return null;
}
});
var handle_change_input = (function (event){
var value__$1 = app.util.dom.get_value(app.util.dom.get_target(event));
var value__$2 = (function (){var or__5025__auto__ = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(value__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return value__$1;
}
})();
return set_value(value__$2);
});
var on_node_load = (function (node){
if(cljs.core.truth_(node)){
return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
var temp__5825__auto__ = (cljs.core.truth_(node)?app.util.dom.get_bounding_rect(node):null);
if(cljs.core.truth_(temp__5825__auto__)){
var bounds = temp__5825__auto__;
var map__78080 = app.util.dom.get_window_size();
var map__78080__$1 = cljs.core.__destructure_map(map__78080);
var window_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78080__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__78081 = bounds;
var map__78081__$1 = cljs.core.__destructure_map(map__78081);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78081__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78081__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78081__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bottom = ((((window_height - top) < (300)))?(window_height - top):null);
var top__$1 = ((((window_height - top) >= (300)))?(top + height):null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"left","left",-399115937),left,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"top","top",-1856271961),top__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),bottom], 0));
} else {
return null;
}
}));
} else {
return null;
}
});
var handle_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(set_value)],(function (event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"number")){
var up_QMARK_ = app.util.keyboard.up_arrow_QMARK_(event);
var down_QMARK_ = app.util.keyboard.down_arrow_QMARK_(event);
if(cljs.core.truth_((function (){var or__5025__auto__ = up_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return down_QMARK_;
}
})())){
app.util.dom.prevent_default(event);

var value__$1 = app.util.dom.get_value(app.util.dom.get_target(event));
var value__$2 = (function (){var or__5025__auto__ = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(value__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return value__$1;
}
})();
var increment = ((app.util.keyboard.shift_QMARK_(event))?(cljs.core.truth_(up_QMARK_)?(10):(-10)):((app.util.keyboard.alt_QMARK_(event))?(cljs.core.truth_(up_QMARK_)?0.1:-0.1):(cljs.core.truth_(up_QMARK_)?(1):(-1))
));
var new_value = (value__$2 + increment);
var new_value__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(min_val);
if(cljs.core.truth_(and__5023__auto__)){
return (new_value < min_val);
} else {
return and__5023__auto__;
}
})())?min_val:(cljs.core.truth_((function (){var and__5023__auto__ = app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(max_val);
if(cljs.core.truth_(and__5023__auto__)){
return (new_value > max_val);
} else {
return and__5023__auto__;
}
})())?max_val:new_value
));
return set_value(new_value__$1);
} else {
return null;
}
} else {
return null;
}
}));
var handle_focus = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return rumext.v2.set_ref_val_BANG_(emit_blur_QMARK_,false);
}));
var handle_blur = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
rumext.v2.set_ref_val_BANG_(emit_blur_QMARK_,true);

return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((200),(function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = on_blur;
if(cljs.core.truth_(and__5023__auto__)){
return rumext.v2.ref_val(emit_blur_QMARK_);
} else {
return and__5023__auto__;
}
})())){
return (on_blur.cljs$core$IFn$_invoke$arity$0 ? on_blur.cljs$core$IFn$_invoke$arity$0() : on_blur.call(null));
} else {
return null;
}
}));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(value),rumext.v2.adapt(current_value)],(function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),current_value)){
return cljs.core.reset_BANG_(state_STAR_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-value","current-value",2066017989),value], null));
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_open_QMARK_)],(function (){
var wrapper_node_78110 = rumext.v2.ref_val(font_size_wrapper_ref);
var node_78111 = app.util.dom.get_element_by_class.cljs$core$IFn$_invoke$arity$2("checked-element is-selected",wrapper_node_78110);
var nodes_78112 = app.util.dom.get_elements_by_class.cljs$core$IFn$_invoke$arity$2("checked-element-value",wrapper_node_78110);
var closest_78113 = (function (a,b){
return cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__78076_SHARP_){
return app.common.math.abs((p1__78076_SHARP_ - b));
}),a));
});
var closest_value_78114 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(closest_78113(options,value));
if(cljs.core.truth_(is_open_QMARK_)){
if((!((node_78111 == null)))){
app.util.dom.scroll_into_view_if_needed_BANG_.cljs$core$IFn$_invoke$arity$1(node_78111);
} else {
var G__78082_78115 = nodes_78112;
var G__78082_78116__$1 = (((G__78082_78115 == null))?null:app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__78077_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(closest_value_78114,app.util.dom.get_inner_text(p1__78077_SHARP_));
}),G__78082_78115));
if((G__78082_78116__$1 == null)){
} else {
app.util.dom.scroll_into_view_if_needed_BANG_.cljs$core$IFn$_invoke$arity$1(G__78082_78116__$1);
}
}
} else {
}

return rumext.v2.set_ref_val_BANG_(emit_blur_QMARK_,cljs.core.not(is_open_QMARK_));
}));

return rumext.v2.jsxs("div",{'ref':on_node_load,'className':""+(class$ ?? "")+" "+("main_ui_components_editable_select__editable-select" ?? ""),'children':[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"number"))?rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'value':(function (){var or__5025__auto__ = (function (){var G__78083 = current_value;
if((G__78083 == null)){
return null;
} else {
return value__GT_label(G__78083);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),'className':input_class,'onChange':set_value,'onFocus':handle_focus,'onBlur':handle_blur,'aria-label':aria_label,'placeholder':placeholder}):rumext.v2.jsx("input",{'onChange':handle_change_input,'aria-label':aria_label,'className':input_class,'placeholder':placeholder,'value':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"multiple","multiple",1244445549)))?null:(function (){var or__5025__auto__ = (function (){var G__78084 = current_value;
if((G__78084 == null)){
return null;
} else {
return value__GT_label(G__78084);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()),'onFocus':handle_focus,'onBlur':handle_blur,'type':type,'onKeyDown':handle_key_down})),rumext.v2.jsx("span",{'onClick':toggle_dropdown,'className':"main_ui_components_editable_select__dropdown-button",'children':app.main.ui.icons.arrow}),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':(function (){var or__5025__auto__ = is_open_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return false;
}
})(),'on-close':close_dropdown,'children':rumext.v2.jsx("ul",{'ref':font_size_wrapper_ref,'className':"main_ui_components_editable_select__custom-select-dropdown",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__78085){
var vec__78086 = p__78085;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78086,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78086,(1),null);
out_arr__46744__auto__.push(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"separator","separator",-1628749125),item))?rumext.v2.jsx("li",{'className':"main_ui_components_editable_select__separator"},""+(element_id ?? "")+"-"+(index ?? "")):(function (){var vec__78089 = as_key_value(item);
var value__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78089,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78089,(1),null);
return rumext.v2.jsxs("li",{'data-value':value__$1,'onClick':select_item,'className':"main_ui_components_editable_select__dropdown-element"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(""+(value__$1 ?? ""),current_value))?"main_ui_components_editable_select__is-selected":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_components_editable_select__label",'children':label}),rumext.v2.jsx("span",{'className':"main_ui_components_editable_select__check-icon",'children':app.main.ui.icons.tick})]},[cljs.core.str.cljs$core$IFn$_invoke$arity$1(element_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''));
})()));

return out_arr__46744__auto__;
}),[],cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,options))})})]});
});

(app.main.ui.components.editable_select.editable_select.displayName = "editable-select");


//# sourceMappingURL=app.main.ui.components.editable_select.js.map
