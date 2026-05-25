import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.constants.js";
import "./app.main.ui.ds.controls.select.js";
import "./app.main.ui.ds.controls.shared.options_dropdown.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.util.dom.js";
import "./app.util.keyboard.js";
import "./app.util.object.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
import "./rumext.v2.util.js";
goog.provide('app.main.ui.ds.controls.combobox');
app.main.ui.ds.controls.combobox.schema_COLON_combobox = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),app.main.ui.ds.controls.shared.options_dropdown.schema_COLON_option], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-length","max-length",-254826109),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default-selected","default-selected",-2024262127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty-to-end","empty-to-end",1724235985),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"has-error","has-error",-786302929),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
app.main.ui.ds.controls.combobox.combobox_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.controls.combobox.schema_COLON_combobox);

app.main.ui.ds.controls.combobox.combobox_STAR_ = (function app$main$ui$ds$controls$combobox$combobox_STAR_(props_78310){
// ===== start props checking =====;

var res__47117__auto___78317 = app.main.ui.ds.controls.combobox.combobox_STAR__validator(props_78310);
if((!((res__47117__auto___78317 == null)))){
var items__47118__auto___78318 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___78317);
var msg__47122__auto___78319 = ["invalid props on component combobox*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___78318),"\n"].join('');
throw (new Error(msg__47122__auto___78319));
} else {
}

// ===== end props checking =====;

var options = undefined;
var on_change = undefined;
var max_length = undefined;
var placeholder = undefined;
var disabled = undefined;
var has_error = undefined;
var default_selected = undefined;
var empty_to_end = undefined;
var id = undefined;
var class$ = undefined;
var props = undefined;
var {"options": options, "onChange": on_change, "maxLength": max_length, "placeholder": placeholder, "disabled": disabled, "hasError": has_error, "defaultSelected": default_selected, "emptyToEnd": empty_to_end, "id": id, "className": class$, ...props} = props_78310;

var options__$1 = ((cljs.core.array_QMARK_(options))?rumext.v2.util.bean(options):options);
var empty_to_end__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(empty_to_end,false);
var is_open_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var is_open = cljs.core.deref(is_open_STAR_);
var selected_id_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(default_selected);
var selected_id = cljs.core.deref(selected_id_STAR_);
var filter_id_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("");
var filter_id = cljs.core.deref(filter_id_STAR_);
var focused_id_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var focused_id = cljs.core.deref(focused_id_STAR_);
var combobox_ref = rumext.v2.use_ref(null);
var input_ref = rumext.v2.use_ref(null);
var nodes_ref = rumext.v2.use_ref(null);
var options_ref = rumext.v2.use_ref(null);
var listbox_id = rumext.v2.use_id();
var value_ref = rumext.v2.use_ref(null);
var dropdown_options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(options__$1),rumext.v2.adapt(filter_id)],(function (){
return cljs.core.not_empty(cljs.core.filterv((function (option){
var option__$1 = cuerdas.core.lower(cljs.core.get.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.Keyword(null,"id","id",-1388402092)));
var filter = cuerdas.core.lower(filter_id);
return cuerdas.core.includes_QMARK_(option__$1,filter);
}),options__$1));
}));
var set_option_ref = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (node){
var state = rumext.v2.ref_val(nodes_ref);
var state__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(state,({}));
var id__$1 = app.util.dom.get_data(node,"id");
var state__$2 = app.util.object.set_BANG_(state__$1,id__$1,node);
rumext.v2.set_ref_val_BANG_(nodes_ref,state__$2);

return (function (){
var state__$3 = rumext.v2.ref_val(nodes_ref);
var state__$4 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(state__$3,({}));
var id__$2 = app.util.dom.get_data(node,"id");
var state__$5 = app.util.object.unset_BANG_(state__$4,id__$2);
return rumext.v2.set_ref_val_BANG_(nodes_ref,state__$5);
});
}));
var on_option_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change)],(function (event){
app.util.dom.stop_propagation(event);

var node = app.util.dom.get_current_target(event);
var id__$1 = app.util.dom.get_data(node,"id");
cljs.core.reset_BANG_(selected_id_STAR_,id__$1);

cljs.core.reset_BANG_(is_open_STAR_,false);

cljs.core.reset_BANG_(focused_id_STAR_,null);

if(cljs.core.fn_QMARK_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id__$1) : on_change.call(null,id__$1));
} else {
return null;
}
}));
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(disabled)],(function (event){
app.util.dom.stop_propagation(event);

if(cljs.core.truth_(disabled)){
return null;
} else {
if(cljs.core.truth_(cljs.core.deref(is_open_STAR_))){
} else {
cljs.core.reset_BANG_(filter_id_STAR_,"");
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(is_open_STAR_,cljs.core.not);
}
}));
var on_blur = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change)],(function (event){
app.util.dom.stop_propagation(event);

var target = app.util.dom.get_related_target(event);
var self_node = rumext.v2.ref_val(combobox_ref);
if(cljs.core.truth_(app.util.dom.is_child_QMARK_(self_node,target))){
return null;
} else {
cljs.core.reset_BANG_(is_open_STAR_,false);

cljs.core.reset_BANG_(focused_id_STAR_,null);

if(cljs.core.fn_QMARK_(on_change)){
var temp__5825__auto__ = rumext.v2.ref_val(input_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var input_node = temp__5825__auto__;
var G__78311 = app.util.dom.get_input_value(input_node);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__78311) : on_change.call(null,G__78311));
} else {
return null;
}
} else {
return null;
}
}
}));
var on_input_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(disabled)],(function (event){
app.util.dom.stop_propagation(event);

if(cljs.core.truth_(disabled)){
return null;
} else {
if(cljs.core.truth_(cljs.core.deref(is_open_STAR_))){
} else {
cljs.core.reset_BANG_(filter_id_STAR_,"");
}

return cljs.core.reset_BANG_(is_open_STAR_,true);
}
}));
var on_input_focus = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

if(cljs.core.truth_(disabled)){
return null;
} else {
return app.util.dom.select_text_BANG_(event.target);
}
}));
var on_input_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_open),rumext.v2.adapt(focused_id),rumext.v2.adapt(disabled)],(function (event){
app.util.dom.stop_propagation(event);

if(cljs.core.truth_(disabled)){
return null;
} else {
var options__$2 = rumext.v2.ref_val(options_ref);
var len = cljs.core.count(options__$2);
var index = app.common.data.index_of_pred(options__$2,(function (p1__78309_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(focused_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__78309_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092)));
}));
var index__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(index,(-1));
var nodes = rumext.v2.ref_val(nodes_ref);
if(cljs.core.truth_(is_open)){
if(cljs.core.truth_(app.util.keyboard.home_QMARK_(event))){
return app.main.ui.ds.controls.select.handle_focus_change(options__$2,focused_id_STAR_,(0),nodes);
} else {
if(cljs.core.truth_(app.util.keyboard.up_arrow_QMARK_(event))){
var new_index = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index__$1,(-1)))?(len - (1)):cljs.core.mod((index__$1 - (1)),len));
return app.main.ui.ds.controls.select.handle_focus_change(options__$2,focused_id_STAR_,new_index,nodes);
} else {
if(cljs.core.truth_(app.util.keyboard.down_arrow_QMARK_(event))){
var new_index = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index__$1,(-1)))?(0):cljs.core.mod((index__$1 + (1)),len));
return app.main.ui.ds.controls.select.handle_focus_change(options__$2,focused_id_STAR_,new_index,nodes);
} else {
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
cljs.core.reset_BANG_(selected_id_STAR_,focused_id);

cljs.core.reset_BANG_(is_open_STAR_,false);

cljs.core.reset_BANG_(focused_id_STAR_,null);

app.util.dom.blur_BANG_(rumext.v2.ref_val(input_ref));

if(((cljs.core.fn_QMARK_(on_change)) && ((!((focused_id == null)))))){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(focused_id) : on_change.call(null,focused_id));
} else {
return null;
}
} else {
if(cljs.core.truth_(app.util.keyboard.esc_QMARK_(event))){
cljs.core.reset_BANG_(is_open_STAR_,false);

cljs.core.reset_BANG_(focused_id_STAR_,null);

return app.util.dom.blur_BANG_(rumext.v2.ref_val(input_ref));
} else {
return null;
}
}
}
}
}
} else {
if(cljs.core.truth_(app.util.keyboard.down_arrow_QMARK_(event))){
return cljs.core.reset_BANG_(is_open_STAR_,true);
} else {
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.keyboard.esc_QMARK_(event);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.keyboard.enter_QMARK_(event);
}
})())){
return app.util.dom.blur_BANG_(rumext.v2.ref_val(input_ref));
} else {
return null;
}
}
}
}
}));
var on_input_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

var value = app.util.dom.get_value(app.util.dom.get_target(event));
rumext.v2.set_ref_val_BANG_(value_ref,value);

cljs.core.reset_BANG_(selected_id_STAR_,value);

cljs.core.reset_BANG_(filter_id_STAR_,value);

return cljs.core.reset_BANG_(focused_id_STAR_,null);
}));
var selected_option = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(options__$1),rumext.v2.adapt(selected_id)],(function (){
if(app.common.data.not_empty_QMARK_(options__$1)){
return app.main.ui.ds.controls.select.get_option(options__$1,selected_id);
} else {
return null;
}
}));
var icon = (cljs.core.truth_(selected_option)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected_option,new cljs.core.Keyword(null,"icon","icon",1679606541)):null);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(dropdown_options)],(function (){
return rumext.v2.set_ref_val_BANG_(options_ref,dropdown_options);
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(default_selected)],(function (){
return cljs.core.reset_BANG_(selected_id_STAR_,default_selected);
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change)],(function (){
return (function (){
var temp__5825__auto__ = rumext.v2.ref_val(value_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var value = temp__5825__auto__;
rumext.v2.set_ref_val_BANG_(value_ref,null);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value) : on_change.call(null,value));
} else {
return null;
}
});
}));

return rumext.v2.jsxs("div",{'ref':combobox_ref,'className':"main_ui_ds_controls_combobox__wrapper"+" "+(cljs.core.truth_(has_error)?"main_ui_ds_controls_combobox__has-error":"")+" "+(cljs.core.truth_(disabled)?"main_ui_ds_controls_combobox__disabled":""),'children':[rumext.v2.jsxs("div",{'onBlur':on_blur,'onClick':on_click,'className':(class$ ?? "")+" "+("main_ui_ds_controls_combobox__combobox" ?? ""),'children':[rumext.v2.jsxs("span",{'className':"main_ui_ds_controls_combobox__header"+" "+(((!((icon == null))))?"main_ui_ds_controls_combobox__header-icon":""),'children':[(cljs.core.truth_(icon)?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':icon,'size':"s",'aria-hidden':true}):null),rumext.v2.jsx("input",{'role':"combobox",'onChange':on_input_change,'aria-expanded':is_open,'className':"main_ui_ds_controls_combobox__input",'placeholder':placeholder,'aria-autocomplete':"both",'id':id,'data-testid':"combobox-input",'maxLength':app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(max_length,app.main.constants.max_input_length),'value':app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(selected_id,""),'onFocus':on_input_focus,'autoComplete':"off",'onClick':on_input_click,'aria-controls':listbox_id,'type':"text",'ref':input_ref,'aria-activedescendant':focused_id,'onKeyDown':on_input_key_down,'disabled':disabled})]}),((app.common.data.not_empty_QMARK_(options__$1))?rumext.v2.jsx("button",{'type':"button",'tabIndex':"-1",'aria-expanded':is_open,'aria-controls':listbox_id,'onClick':on_click,'className':"main_ui_ds_controls_combobox__button-toggle-list",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow_down,'className':"main_ui_ds_controls_combobox__arrow",'size':"s",'aria-hidden':true,'data-testid':"combobox-open-button"})}):null)]}),((((is_open) && (dropdown_options)))?rumext.v2.jsx(app.main.ui.ds.controls.shared.options_dropdown.options_dropdown_STAR_,{'onClick':on_option_click,'options':dropdown_options,'selected':selected_id,'focused':focused_id,'ref':set_option_ref,'id':listbox_id,'emptyToEnd':empty_to_end__$1,'data-testid':"combobox-options"}):null)]});
});

(app.main.ui.ds.controls.combobox.combobox_STAR_.displayName = "combobox*");


//# sourceMappingURL=app.main.ui.ds.controls.combobox.js.map
