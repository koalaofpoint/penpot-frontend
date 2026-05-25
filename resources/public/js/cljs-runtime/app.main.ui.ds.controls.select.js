import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.ui.ds.controls.shared.options_dropdown.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.util.dom.js";
import "./app.util.keyboard.js";
import "./app.util.object.js";
import "./clojure.string.js";
import "./rumext.v2.js";
import "./rumext.v2.util.js";
goog.provide('app.main.ui.ds.controls.select');
app.main.ui.ds.controls.select.get_option = (function app$main$ui$ds$controls$select$get_option(options,id){
var options__$1 = ((cljs.core.delay_QMARK_(options))?cljs.core.deref(options):options);
var or__5025__auto__ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__74612_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__74612_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092)));
}),options__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.seq(options__$1)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(options__$1,(0));
} else {
return null;
}
}
});
app.main.ui.ds.controls.select.get_selected_option_id = (function app$main$ui$ds$controls$select$get_selected_option_id(options,default$){
var option = app.main.ui.ds.controls.select.get_option(options,default$);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.Keyword(null,"id","id",-1388402092));
});
app.main.ui.ds.controls.select.handle_focus_change = (function app$main$ui$ds$controls$select$handle_focus_change(options,focused_STAR_,new_index,nodes){
var option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new_index);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.Keyword(null,"id","id",-1388402092));
var node = app.util.object.get.cljs$core$IFn$_invoke$arity$2(nodes,id);
cljs.core.reset_BANG_(focused_STAR_,id);

return app.util.dom.scroll_into_view_if_needed_BANG_.cljs$core$IFn$_invoke$arity$1(node);
});
app.main.ui.ds.controls.select.handle_selection = (function app$main$ui$ds$controls$select$handle_selection(focused_STAR_,selected_STAR_,open_STAR_){
var temp__5825__auto___74633 = cljs.core.deref(focused_STAR_);
if(cljs.core.truth_(temp__5825__auto___74633)){
var focused_74634 = temp__5825__auto___74633;
cljs.core.reset_BANG_(selected_STAR_,focused_74634);
} else {
}

cljs.core.reset_BANG_(open_STAR_,false);

return cljs.core.reset_BANG_(focused_STAR_,null);
});
app.main.ui.ds.controls.select.schema_COLON_select = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null),app.main.ui.ds.controls.shared.options_dropdown.schema_COLON_option], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default-selected","default-selected",-2024262127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty-to-end","empty-to-end",1724235985),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"default","ghost"], null)], null)], null)], null);
app.main.ui.ds.controls.select.select_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.controls.select.schema_COLON_select);

app.main.ui.ds.controls.select.select_STAR_ = (function app$main$ui$ds$controls$select$select_STAR_(props_74622){
// ===== start props checking =====;

var res__47117__auto___74636 = app.main.ui.ds.controls.select.select_STAR__validator(props_74622);
if((!((res__47117__auto___74636 == null)))){
var items__47118__auto___74637 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___74636);
var msg__47122__auto___74638 = ["invalid props on component select*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___74637),"\n"].join('');
throw (new Error(msg__47122__auto___74638));
} else {
}

// ===== end props checking =====;

var options = undefined;
var on_change = undefined;
var variant = undefined;
var disabled = undefined;
var default_selected = undefined;
var empty_to_end = undefined;
var class$ = undefined;
var props = undefined;
var {"options": options, "className": class$, "disabled": disabled, "defaultSelected": default_selected, "emptyToEnd": empty_to_end, "onChange": on_change, "variant": variant, ...props} = props_74622;

var options__$1 = ((cljs.core.array_QMARK_(options))?rumext.v2.util.bean(options):options);
var variant__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(variant,"default");
var empty_to_end__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(empty_to_end,false);
var is_open_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var is_open = cljs.core.deref(is_open_STAR_);
var selected_id_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.ui.ds.controls.select.get_selected_option_id(options__$1,default_selected);
}));
var selected_id = cljs.core.deref(selected_id_STAR_);
var focused_id_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var focused_id = cljs.core.deref(focused_id_STAR_);
var listbox_id = rumext.v2.use_id();
var nodes_ref = rumext.v2.use_ref(null);
var options_ref = rumext.v2.use_ref(null);
var select_ref = rumext.v2.use_ref(null);
var empty_selected_id_QMARK_ = clojure.string.blank_QMARK_(selected_id);
var set_option_ref = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (node){
var state = rumext.v2.ref_val(nodes_ref);
var state__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(state,({}));
var id = app.util.dom.get_data(node,"id");
var state__$2 = app.util.object.set_BANG_(state__$1,id,node);
rumext.v2.set_ref_val_BANG_(nodes_ref,state__$2);

return (function (){
var state__$3 = rumext.v2.ref_val(nodes_ref);
var state__$4 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(state__$3,({}));
var id__$1 = app.util.dom.get_data(node,"id");
var state__$5 = app.util.object.unset_BANG_(state__$4,id__$1);
return rumext.v2.set_ref_val_BANG_(nodes_ref,state__$5);
});
}));
var on_option_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change)],(function (event){
app.util.dom.stop_propagation(event);

var node = app.util.dom.get_current_target(event);
var id = app.util.dom.get_data(node,"id");
cljs.core.reset_BANG_(selected_id_STAR_,id);

cljs.core.reset_BANG_(focused_id_STAR_,null);

cljs.core.reset_BANG_(is_open_STAR_,false);

if(cljs.core.fn_QMARK_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));
} else {
return null;
}
}));
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(disabled)],(function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

if(cljs.core.truth_(disabled)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(is_open_STAR_,cljs.core.not);
}
}));
var on_blur = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var target = app.util.dom.get_related_target(event);
var select_node = rumext.v2.ref_val(select_ref);
if(cljs.core.truth_(app.util.dom.is_child_QMARK_(select_node,target))){
return null;
} else {
cljs.core.reset_BANG_(focused_id_STAR_,null);

return cljs.core.reset_BANG_(is_open_STAR_,false);
}
}));
var on_button_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(focused_id),rumext.v2.adapt(disabled)],(function (event){
app.util.dom.stop_propagation(event);

if(cljs.core.truth_(disabled)){
return null;
} else {
var options__$2 = rumext.v2.ref_val(options_ref);
var len = cljs.core.count(options__$2);
var index = app.common.data.index_of_pred(options__$2,(function (p1__74621_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(focused_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__74621_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092)));
}));
var nodes = rumext.v2.ref_val(nodes_ref);
if(cljs.core.truth_(app.util.keyboard.home_QMARK_(event))){
return app.main.ui.ds.controls.select.handle_focus_change(options__$2,focused_id_STAR_,(0),nodes);
} else {
if(cljs.core.truth_(app.util.keyboard.up_arrow_QMARK_(event))){
return app.main.ui.ds.controls.select.handle_focus_change(options__$2,focused_id_STAR_,cljs.core.mod((index - (1)),len),nodes);
} else {
if(cljs.core.truth_(app.util.keyboard.down_arrow_QMARK_(event))){
return app.main.ui.ds.controls.select.handle_focus_change(options__$2,focused_id_STAR_,cljs.core.mod((index + (1)),len),nodes);
} else {
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.keyboard.space_QMARK_(event);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.keyboard.enter_QMARK_(event);
}
})())){
if(cljs.core.truth_(cljs.core.deref(is_open_STAR_))){
app.util.dom.prevent_default(event);

app.main.ui.ds.controls.select.handle_selection(focused_id_STAR_,selected_id_STAR_,is_open_STAR_);

if(((cljs.core.fn_QMARK_(on_change)) && ((!((focused_id == null)))))){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(focused_id) : on_change.call(null,focused_id));
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(app.util.keyboard.esc_QMARK_(event))){
cljs.core.reset_BANG_(is_open_STAR_,false);

return cljs.core.reset_BANG_(focused_id_STAR_,null);
} else {
return null;
}
}
}
}
}
}
}));
var props__$1 = {...props, 'role':"combobox",'aria-expanded':is_open,'className':(class$ ?? "")+" "+("main_ui_ds_controls_select__select" ?? "")+" "+(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant__$1,"ghost"))?"main_ui_ds_controls_select__variant-ghost":"") ?? ""),'aria-haspopup':"listbox",'onClick':on_click,'aria-controls':listbox_id,'aria-activedescendant':focused_id,'onKeyDown':on_button_key_down,'disabled':disabled};
var selected_option = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(options__$1),rumext.v2.adapt(selected_id)],(function (){
if(app.common.data.not_empty_QMARK_(options__$1)){
return app.main.ui.ds.controls.select.get_option(options__$1,selected_id);
} else {
return null;
}
}));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected_option,new cljs.core.Keyword(null,"label","label",1718410804));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected_option,new cljs.core.Keyword(null,"icon","icon",1679606541));
var has_icon_QMARK_ = (!((icon == null)));
var dimmed_QMARK_ = new cljs.core.Keyword(null,"dimmed","dimmed",-791586346).cljs$core$IFn$_invoke$arity$1(selected_option);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(options__$1)],(function (){
return rumext.v2.set_ref_val_BANG_(options_ref,options__$1);
}));

return rumext.v2.jsxs("div",{'onClick':on_click,'ref':select_ref,'onBlur':on_blur,'className':"main_ui_ds_controls_select__select-wrapper",'children':[rumext.v2.create_element("button",props__$1,rumext.v2.jsxs("span",{'className':"main_ui_ds_controls_select__select-header"+" "+((has_icon_QMARK_)?"main_ui_ds_controls_select__header-icon":""),'children':[((has_icon_QMARK_)?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':icon,'size':"s",'aria-hidden':true}):null),rumext.v2.jsx("span",{'className':"main_ui_ds_controls_select__header-label"+" "+(cljs.core.truth_((function (){var or__5025__auto__ = empty_selected_id_QMARK_;
if(or__5025__auto__){
return or__5025__auto__;
} else {
return dimmed_QMARK_;
}
})())?"main_ui_ds_controls_select__header-label-dimmed":""),'children':((empty_selected_id_QMARK_)?"--":label)})]}),rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow_down,'className':"main_ui_ds_controls_select__arrow",'size':"s",'aria-hidden':true})),((is_open)?rumext.v2.jsx(app.main.ui.ds.controls.shared.options_dropdown.options_dropdown_STAR_,{'onClick':on_option_click,'id':listbox_id,'options':options__$1,'selected':selected_id,'focused':focused_id,'emptyToEnd':empty_to_end__$1,'ref':set_option_ref}):null)]});
});

(app.main.ui.ds.controls.select.select_STAR_.displayName = "select*");


//# sourceMappingURL=app.main.ui.ds.controls.select.js.map
