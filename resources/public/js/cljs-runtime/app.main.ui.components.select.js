import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.uuid.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.keyboard.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.components.select');
app.main.ui.components.select.as_key_value = (function app$main$ui$components$select$as_key_value(item){
if(cljs.core.map_QMARK_(item)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,item,item], null);
}
});
app.main.ui.components.select.rotate_index_forward = (function app$main$ui$components$select$rotate_index_forward(index,length){
var last_index = (length - (1));
var index__$1 = (((index < (0)))?(0):index);
var index__$2 = (index__$1 + (1));
var index__$3 = (((index__$2 > last_index))?(0):index__$2);
return index__$3;
});
app.main.ui.components.select.rotate_index_backward = (function app$main$ui$components$select$rotate_index_backward(index,length){
var last_index = (length - (1));
var index__$1 = (((index < (0)))?(0):index);
var index__$2 = (index__$1 - (1));
var index__$3 = (((index__$2 < (0)))?last_index:index__$2);
return index__$3;
});
app.main.ui.components.select.rotate_option_forward = (function app$main$ui$components$select$rotate_option_forward(options,index){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(options,app.main.ui.components.select.rotate_index_forward(index,cljs.core.count(options))));
});
app.main.ui.components.select.rotate_option_backward = (function app$main$ui$components$select$rotate_option_backward(options,index,length){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(options,app.main.ui.components.select.rotate_index_backward(index,length)));
});
app.main.ui.components.select.select = (function app$main$ui$components$select$select(props_71850){
var map__71851 = rumext.v2.util.wrap_props(props_71850);
var map__71851__$1 = cljs.core.__destructure_map(map__71851);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71851__$1,new cljs.core.Keyword(null,"options","options",99638489));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71851__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71851__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var on_pointer_enter_option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71851__$1,new cljs.core.Keyword(null,"on-pointer-enter-option","on-pointer-enter-option",-403377657));
var on_pointer_leave_option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71851__$1,new cljs.core.Keyword(null,"on-pointer-leave-option","on-pointer-leave-option",1851242568));
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71851__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var dropdown_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71851__$1,new cljs.core.Keyword(null,"dropdown-class","dropdown-class",-1809197876));
var is_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71851__$1,new cljs.core.Keyword(null,"is-open?","is-open?",-319226511));
var data_direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71851__$1,new cljs.core.Keyword(null,"data-direction","data-direction",1954636275));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71851__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var label_index = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(options)],(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.main.ui.components.select.as_key_value),options);
}));
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next(),new cljs.core.Keyword(null,"is-open?","is-open?",-319226511),(function (){var or__5025__auto__ = is_open_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return false;
}
})(),new cljs.core.Keyword(null,"current-value","current-value",2066017989),default_value], null);
}));
var state = cljs.core.deref(state_STAR_);
var current_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"id","id",-1388402092));
var current_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-value","current-value",2066017989));
var current_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(label_index,current_value);
var is_open_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"is-open?","is-open?",-319226511));
var node_ref = rumext.v2.use_ref(null);
var dropdown_direction_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("down");
var dropdown_direction = cljs.core.deref(dropdown_direction_STAR_);
var dropdown_direction_change_STAR_ = rumext.v2.use_ref((0));
var handle_key_up = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(disabled),rumext.v2.adapt(options),rumext.v2.adapt(current_value)],(function (e){
if(cljs.core.truth_(disabled)){
return null;
} else {
var options__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"disabled","disabled",-1529784218)),options);
var length = cljs.core.count(options__$1);
var index = app.common.data.index_of_pred(options__$1,(function (p1__71846_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__71846_SHARP_),current_value);
}));
var index__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(index,(0));
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.keyboard.left_arrow_QMARK_(e);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.keyboard.up_arrow_QMARK_(e);
}
})())){
var value = app.main.ui.components.select.rotate_option_backward(options__$1,index__$1,length);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"current-value","current-value",2066017989),value);

if(cljs.core.fn_QMARK_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value) : on_change.call(null,value));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.keyboard.right_arrow_QMARK_(e);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.keyboard.down_arrow_QMARK_(e);
}
})())){
var value = app.main.ui.components.select.rotate_option_forward(options__$1,index__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"current-value","current-value",2066017989),value);

if(cljs.core.fn_QMARK_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value) : on_change.call(null,value));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.keyboard.enter_QMARK_(e);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.keyboard.space_QMARK_(e);
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"is-open?","is-open?",-319226511),false);
} else {
if(cljs.core.truth_(app.util.keyboard.tab_QMARK_(e))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"is-open?","is-open?",-319226511),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-value","current-value",2066017989),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.first(options__$1))], 0));
} else {
return null;
}
}
}
}
}
}));
var open_dropdown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(disabled)],(function (){
if(cljs.core.truth_(disabled)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"is-open?","is-open?",-319226511),true);
}
}));
var close_dropdown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"is-open?","is-open?",-319226511),false);
}));
var select_item = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change)],(function (event){
var value = app.common.data.read_string(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"current-value","current-value",2066017989),value);

if(cljs.core.fn_QMARK_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value) : on_change.call(null,value));
} else {
return null;
}
}));
var highlight_item = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_pointer_enter_option)],(function (event){
if(cljs.core.fn_QMARK_(on_pointer_enter_option)){
var value = app.common.data.read_string(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
return (on_pointer_enter_option.cljs$core$IFn$_invoke$arity$1 ? on_pointer_enter_option.cljs$core$IFn$_invoke$arity$1(value) : on_pointer_enter_option.call(null,value));
} else {
return null;
}
}));
var unhighlight_item = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_pointer_leave_option)],(function (event){
if(cljs.core.fn_QMARK_(on_pointer_leave_option)){
var value = app.common.data.read_string(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
return (on_pointer_leave_option.cljs$core$IFn$_invoke$arity$1 ? on_pointer_leave_option.cljs$core$IFn$_invoke$arity$1(value) : on_pointer_leave_option.call(null,value));
} else {
return null;
}
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(default_value)],(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"current-value","current-value",2066017989),default_value);
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_open_QMARK___$1)],(function (){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),rumext.v2.ref_val(dropdown_direction_change_STAR_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,is_open_QMARK___$1)))){
cljs.core.reset_BANG_(dropdown_direction_STAR_,"down");

return rumext.v2.set_ref_val_BANG_(dropdown_direction_change_STAR_,(0));
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_open_QMARK___$1)],(function (){
var dropdown_element = rumext.v2.ref_val(node_ref);
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),rumext.v2.ref_val(dropdown_direction_change_STAR_));
if(and__5023__auto__){
return dropdown_element;
} else {
return and__5023__auto__;
}
})())){
var is_outside_QMARK_ = app.util.dom.is_element_outside_QMARK_(dropdown_element);
cljs.core.reset_BANG_(dropdown_direction_STAR_,((is_outside_QMARK_)?"up":"down"));

return rumext.v2.set_ref_val_BANG_(dropdown_direction_change_STAR_,(rumext.v2.ref_val(dropdown_direction_change_STAR_) + (1)));
} else {
return null;
}
}));

var selected_option = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__71849_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__71849_SHARP_),default_value);
}),options));
var current_icon = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(selected_option);
var current_icon_ref = app.main.ui.icons.key__GT_icon(current_icon);
return rumext.v2.jsxs("div",{'id':""+(current_id ?? ""),'onClick':open_dropdown,'onKeyUp':handle_key_up,'tabIndex':"0",'role':"combobox",'className':""+("main_ui_components_select__custom-select"+" "+(cljs.core.truth_(disabled)?"main_ui_components_select__disabled":"")+" "+(((!((current_icon_ref == null))))?"main_ui_components_select__icon":"") ?? "")+" "+(class$ ?? ""),'children':[(cljs.core.truth_((function (){var and__5023__auto__ = current_icon;
if(cljs.core.truth_(and__5023__auto__)){
return current_icon_ref;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx("span",{'className':"main_ui_components_select__current-icon",'children':current_icon_ref}):null),rumext.v2.jsx("span",{'className':"main_ui_components_select__current-label",'children':current_label}),rumext.v2.jsx("span",{'className':"main_ui_components_select__dropdown-button",'children':app.main.ui.icons.arrow}),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':is_open_QMARK___$1,'on-close':close_dropdown,'children':rumext.v2.jsx("ul",{'ref':node_ref,'data-direction':app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(data_direction,dropdown_direction),'className':""+(dropdown_class ?? "")+" "+("main_ui_components_select__custom-select-dropdown" ?? ""),'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__71858){
var vec__71859 = p__71858;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71859,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71859,(1),null);
out_arr__46744__auto__.push(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"separator","separator",-1628749125),item))?rumext.v2.jsx("li",{'id':""+(current_id ?? "")+"-"+(index ?? ""),'tabIndex':"-1",'role':"option",'className':"main_ui_components_select__separator"},""+(current_id ?? "")+"-"+(index ?? "")):(function (){var vec__71862 = app.main.ui.components.select.as_key_value(item);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71862,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71862,(1),null);
var icon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71862,(2),null);
var icon_ref = app.main.ui.icons.key__GT_icon(icon);
return rumext.v2.jsxs("li",{'role':"option",'tabIndex':"-1",'className':"main_ui_components_select__checked-element"+" "+(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(item))?"main_ui_components_select__disabled":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,current_value))?"main_ui_components_select__is-selected":""),'children':[(cljs.core.truth_((function (){var and__5023__auto__ = icon;
if(cljs.core.truth_(and__5023__auto__)){
return icon_ref;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx("span",{'className':"main_ui_components_select__icon",'children':icon_ref}):null),rumext.v2.jsx("span",{'className':"main_ui_components_select__label",'children':label}),rumext.v2.jsx("span",{'className':"main_ui_components_select__check-icon",'children':app.main.ui.icons.tick})],'onKeyUp':select_item,'id':""+(current_id ?? "")+"-"+(index ?? ""),'data-value':cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)),'onClick':select_item,'onPointerLeave':unhighlight_item,'onPointerEnter':highlight_item},""+(current_id ?? "")+"-"+(index ?? ""));
})()));

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(options))})})]});
});

(app.main.ui.components.select.select.displayName = "select");


//# sourceMappingURL=app.main.ui.components.select.js.map
