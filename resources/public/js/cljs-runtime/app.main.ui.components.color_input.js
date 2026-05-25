import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.types.color.js";
import "./app.main.ui.hooks.js";
import "./app.util.dom.js";
import "./app.util.globals.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./goog.events.events.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.components.color_input');
app.main.ui.components.color_input.get_clean_color = (function app$main$ui$components$color_input$get_clean_color(node){
return app.common.types.color.prepend_hash(app.common.types.color.parse(app.common.types.color.expand_hex(app.util.dom.get_value(node))));
});
app.main.ui.components.color_input.color_input_STAR_ = rumext.v2.forward_ref((function app$main$ui$components$color_input$color_input_STAR_(props_77129,external_ref){
var aria_label = undefined;
var on_change = undefined;
var select_on_focus = undefined;
var on_focus = undefined;
var value = undefined;
var on_blur = undefined;
var class$ = undefined;
var props = undefined;
var {"value": value, "onChange": on_change, "onBlur": on_blur, "onFocus": on_focus, "selectOnFocus": select_on_focus, "className": class$, "aria-label": aria_label, ...props} = props_77129;

var select_on_focus_QMARK_ = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(select_on_focus,true);
var class$__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(class$,"color-input");
var aria_label__$1 = (function (){var or__5025__auto__ = aria_label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.color");
}
})();
var local_ref = rumext.v2.use_ref();
var ref = (function (){var or__5025__auto__ = external_ref;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return local_ref;
}
})();
var dirty_ref = rumext.v2.use_ref(false);
var parse_value = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
var input_node = rumext.v2.ref_val(ref);
try{var value__$1 = app.main.ui.components.color_input.get_clean_color(input_node);
app.util.dom.set_validity_BANG_(input_node,"");

return value__$1;
}catch (e77130){var _e = e77130;
app.util.dom.set_validity_BANG_(input_node,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.invalid-color"));

return null;
}}));
var update_input = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (new_value){
var input_node = rumext.v2.ref_val(ref);
return app.util.dom.set_value_BANG_(input_node,app.common.types.color.remove_hash(new_value));
}));
var apply_value = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change),rumext.v2.adapt(update_input)],(function (new_value){
rumext.v2.set_ref_val_BANG_(dirty_ref,false);

if(cljs.core.truth_((function (){var and__5023__auto__ = new_value;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(app.common.types.color.remove_hash(new_value),value);
} else {
return and__5023__auto__;
}
})())){
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
}

return (update_input.cljs$core$IFn$_invoke$arity$1 ? update_input.cljs$core$IFn$_invoke$arity$1(new_value) : update_input.call(null,new_value));
} else {
return null;
}
}));
var handle_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(apply_value),rumext.v2.adapt(update_input)],(function (event){
rumext.v2.set_ref_val_BANG_(dirty_ref,true);

var input_node = rumext.v2.ref_val(ref);
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
var value__$1 = (parse_value.cljs$core$IFn$_invoke$arity$0 ? parse_value.cljs$core$IFn$_invoke$arity$0() : parse_value.call(null));
(update_input.cljs$core$IFn$_invoke$arity$1 ? update_input.cljs$core$IFn$_invoke$arity$1(value__$1) : update_input.call(null,value__$1));

app.util.dom.prevent_default(event);

return app.util.dom.blur_BANG_(input_node);
} else {
if(cljs.core.truth_(app.util.keyboard.esc_QMARK_(event))){
(update_input.cljs$core$IFn$_invoke$arity$1 ? update_input.cljs$core$IFn$_invoke$arity$1(value) : update_input.call(null,value));

app.util.dom.prevent_default(event);

return app.util.dom.blur_BANG_(input_node);
} else {
return null;
}
}
}));
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var target = app.util.dom.get_target(event);
var current = rumext.v2.ref_val(ref);
if((((!((current == null)))) && (cljs.core.not(current.contains(target))))){
return app.util.dom.blur_BANG_(current);
} else {
return null;
}
}));
var on_mouse_up = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
return app.util.dom.prevent_default(event);
}));
var handle_focus = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var target = app.util.dom.get_target(event);
if(cljs.core.truth_(on_focus)){
(on_focus.cljs$core$IFn$_invoke$arity$0 ? on_focus.cljs$core$IFn$_invoke$arity$0() : on_focus.call(null));
} else {
}

if(cljs.core.truth_(select_on_focus_QMARK_)){
app.util.dom.get_target(event).select();

return target.addEventListener("mouseup",on_mouse_up,({"once": true}));
} else {
return null;
}
}));
var handle_blur = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(parse_value),rumext.v2.adapt(apply_value),rumext.v2.adapt(update_input)],(function (_){
var new_value = (parse_value.cljs$core$IFn$_invoke$arity$0 ? parse_value.cljs$core$IFn$_invoke$arity$0() : parse_value.call(null));
if(cljs.core.truth_(new_value)){
(apply_value.cljs$core$IFn$_invoke$arity$1 ? apply_value.cljs$core$IFn$_invoke$arity$1(new_value) : apply_value.call(null,new_value));
} else {
(update_input.cljs$core$IFn$_invoke$arity$1 ? update_input.cljs$core$IFn$_invoke$arity$1(value) : update_input.call(null,value));
}

if(cljs.core.truth_(on_blur)){
return (on_blur.cljs$core$IFn$_invoke$arity$0 ? on_blur.cljs$core$IFn$_invoke$arity$0() : on_blur.call(null));
} else {
return null;
}
}));
var handle_blur__$1 = app.main.ui.hooks.use_ref_callback(handle_blur);
var props__$1 = {...props, 'className':class$__$1,'type':"text",'ref':ref,'aria-label':aria_label__$1,'defaultValue':value,'onKeyDown':handle_key_down,'onBlur':handle_blur__$1,'onFocus':handle_focus};
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(value)],(function (){
var temp__5825__auto__ = rumext.v2.ref_val(ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
return app.util.dom.set_value_BANG_(node,value);
} else {
return null;
}
}));

rumext.v2.use_layout_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return (function (){
if(cljs.core.truth_(rumext.v2.ref_val(dirty_ref))){
return (handle_blur__$1.cljs$core$IFn$_invoke$arity$0 ? handle_blur__$1.cljs$core$IFn$_invoke$arity$0() : handle_blur__$1.call(null));
} else {
return null;
}
});
}));

rumext.v2.use_layout_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var key1 = goog.events.listen(app.util.globals.window,"pointerdown",on_click);
var key2 = goog.events.listen(app.util.globals.window,"click",on_click);
return (function (){
goog.events.unlistenByKey(key1);

return goog.events.unlistenByKey(key2);
});
}));

return rumext.v2.create_element("input",props__$1);
}));

(app.main.ui.components.color_input.color_input_STAR_.displayName = "color-input*");


//# sourceMappingURL=app.main.ui.components.color_input.js.map
