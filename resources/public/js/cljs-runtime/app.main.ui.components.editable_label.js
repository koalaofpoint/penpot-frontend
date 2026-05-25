import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.constants.js";
import "./app.util.dom.js";
import "./app.util.keyboard.js";
import "./app.util.timers.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.components.editable_label');
app.main.ui.components.editable_label.editable_label_STAR_ = (function app$main$ui$components$editable_label$editable_label_STAR_(props_78045){
var on_change = props_78045.onChange;
var on_cancel = props_78045.onCancel;
var tooltip = props_78045.tooltip;
var class_label = props_78045.classLabel;
var value = props_78045.value;
var class_input = props_78045.classInput;
var is_editing = props_78045.isEditing;
var display_value = props_78045.displayValue;
var input_ref = rumext.v2.use_ref(null);
var internal_editing_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var internal_editing_QMARK_ = cljs.core.deref(internal_editing_STAR_);
var start_edition = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
cljs.core.reset_BANG_(internal_editing_STAR_,true);

return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((100),(function (){
var temp__5825__auto__ = rumext.v2.ref_val(input_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
return app.util.dom.focus_BANG_(node);
} else {
return null;
}
}));
}));
var stop_edition = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(internal_editing_STAR_,false);
}));
var accept_edition = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(internal_editing_QMARK_),rumext.v2.adapt(on_change),rumext.v2.adapt(stop_edition)],(function (){
if(cljs.core.truth_(internal_editing_QMARK_)){
var value__$1 = app.util.dom.get_value(rumext.v2.ref_val(input_ref));
if(cljs.core.fn_QMARK_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value__$1) : on_change.call(null,value__$1));
} else {
}

return (stop_edition.cljs$core$IFn$_invoke$arity$0 ? stop_edition.cljs$core$IFn$_invoke$arity$0() : stop_edition.call(null));
} else {
return null;
}
}));
var cancel_edition = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(stop_edition),rumext.v2.adapt(on_cancel)],(function (){
(stop_edition.cljs$core$IFn$_invoke$arity$0 ? stop_edition.cljs$core$IFn$_invoke$arity$0() : stop_edition.call(null));

if(cljs.core.fn_QMARK_(on_cancel)){
return (on_cancel.cljs$core$IFn$_invoke$arity$0 ? on_cancel.cljs$core$IFn$_invoke$arity$0() : on_cancel.call(null));
} else {
return null;
}
}));
var on_key_up = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cancel_edition),rumext.v2.adapt(accept_edition)],(function (event){
if(cljs.core.truth_(app.util.keyboard.esc_QMARK_(event))){
return (cancel_edition.cljs$core$IFn$_invoke$arity$0 ? cancel_edition.cljs$core$IFn$_invoke$arity$0() : cancel_edition.call(null));
} else {
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (accept_edition.cljs$core$IFn$_invoke$arity$0 ? accept_edition.cljs$core$IFn$_invoke$arity$0() : accept_edition.call(null));
} else {
return null;
}
}
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_editing),rumext.v2.adapt(internal_editing_QMARK_),rumext.v2.adapt(start_edition)],(function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = is_editing;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(internal_editing_QMARK_);
} else {
return and__5023__auto__;
}
})())){
return (start_edition.cljs$core$IFn$_invoke$arity$0 ? start_edition.cljs$core$IFn$_invoke$arity$0() : start_edition.call(null));
} else {
return null;
}
}));

if(internal_editing_QMARK_){
return rumext.v2.jsx("input",{'ref':input_ref,'defaultValue':value,'onKeyUp':on_key_up,'maxLength':app.main.constants.max_input_length,'onBlur':accept_edition,'className':("main_ui_components_editable_label__editable-label-input" ?? "")+" "+(class_input ?? "")});
} else {
return rumext.v2.jsx("span",{'title':tooltip,'className':("main_ui_components_editable_label__editable-label-text" ?? "")+" "+(class_label ?? ""),'children':display_value});
}
});

(app.main.ui.components.editable_label.editable_label_STAR_.displayName = "editable-label*");


//# sourceMappingURL=app.main.ui.components.editable_label.js.map
