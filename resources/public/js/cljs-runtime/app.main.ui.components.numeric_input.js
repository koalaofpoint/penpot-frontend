import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.math.js";
import "./app.common.schema.js";
import "./app.main.ui.formats.js";
import "./app.main.ui.hooks.js";
import "./app.util.dom.js";
import "./app.util.globals.js";
import "./app.util.keyboard.js";
import "./app.util.object.js";
import "./app.util.simple_math.js";
import "./cuerdas.core.js";
import "./goog.events.events.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.components.numeric_input');
app.main.ui.components.numeric_input.numeric_input_STAR_ = rumext.v2.forward_ref((function app$main$ui$components$numeric_input$numeric_input_STAR_(props_77655,external_ref){
var props = props_77655;
var value_str = (props["value"]);
var min_value = (props["min"]);
var max_value = (props["max"]);
var step_value = (props["step"]);
var wrap_value_QMARK_ = (props["data-wrap"]);
var on_change = (props["onChange"]);
var on_blur = (props["onBlur"]);
var on_focus = (props["onFocus"]);
var title = (props["title"]);
var default$ = (props["default"]);
var nillable_QMARK_ = (props["nillable"]);
var class$ = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((props["className"]),"");
var min_value__$1 = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(min_value);
var max_value__$1 = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(max_value);
var step_value__$1 = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(step_value,(1));
var default$__$1 = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(default$,(cljs.core.truth_(nillable_QMARK_)?null:(0)));
var integer_QMARK_ = (props["integer"]);
var select_on_focus_QMARK_ = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((props["selectOnFocus"]),true);
var local_ref = rumext.v2.use_ref();
var ref = (function (){var or__5025__auto__ = external_ref;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return local_ref;
}
})();
var value = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),value_str))?app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(value_str,default$__$1):null);
var dirty_ref = rumext.v2.use_ref(false);
var last_value_STAR_ = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(value);
var parse_value = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(min_value__$1),rumext.v2.adapt(max_value__$1),rumext.v2.adapt(value),rumext.v2.adapt(nillable_QMARK_),rumext.v2.adapt(default$__$1),rumext.v2.adapt(integer_QMARK_)],(function (){
var temp__5825__auto__ = rumext.v2.ref_val(ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
var new_value = app.util.simple_math.expr_eval(cuerdas.core.strip_suffix(app.util.dom.get_value(node),"."),value);
if(cljs.core.truth_(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(new_value))){
var G__77659 = (function (){var G__77660 = app.common.data.min.cljs$core$IFn$_invoke$arity$2(app.common.data.max.cljs$core$IFn$_invoke$arity$2((function (){var G__77661 = new_value;
if(cljs.core.truth_(integer_QMARK_)){
return app.common.math.round.cljs$core$IFn$_invoke$arity$1(G__77661);
} else {
return G__77661;
}
})(),(app.common.schema.min_safe_int / (2))),(app.common.schema.max_safe_int / (2)));
if(cljs.core.truth_(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(min_value__$1))){
return app.common.data.max.cljs$core$IFn$_invoke$arity$2(G__77660,min_value__$1);
} else {
return G__77660;
}
})();
if(cljs.core.truth_(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(max_value__$1))){
return app.common.data.min.cljs$core$IFn$_invoke$arity$2(G__77659,max_value__$1);
} else {
return G__77659;
}
} else {
if(cljs.core.truth_(nillable_QMARK_)){
return default$__$1;
} else {
return value;

}
}
} else {
return null;
}
}));
var update_input = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (new_value){
var temp__5825__auto__ = rumext.v2.ref_val(ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
return app.util.dom.set_value_BANG_(node,app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(new_value));
} else {
return null;
}
}));
var apply_value = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change),rumext.v2.adapt(update_input),rumext.v2.adapt(value)],(function (event,new_value){
rumext.v2.set_ref_val_BANG_(dirty_ref,false);

if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_value,value)) && (cljs.core.fn_QMARK_(on_change)))){
(on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(new_value,event) : on_change.call(null,new_value,event));
} else {
}

return (update_input.cljs$core$IFn$_invoke$arity$1 ? update_input.cljs$core$IFn$_invoke$arity$1(new_value) : update_input.call(null,new_value));
}));
var set_delta = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(wrap_value_QMARK_),rumext.v2.adapt(min_value__$1),rumext.v2.adapt(max_value__$1),rumext.v2.adapt(parse_value),rumext.v2.adapt(apply_value)],(function (event,up_QMARK_,down_QMARK_){
var current_value = (parse_value.cljs$core$IFn$_invoke$arity$0 ? parse_value.cljs$core$IFn$_invoke$arity$0() : parse_value.call(null));
var current_value__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(current_value);
if(and__5023__auto__){
var and__5023__auto____$1 = down_QMARK_;
if(cljs.core.truth_(and__5023__auto____$1)){
return max_value__$1;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?max_value__$1:(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(current_value);
if(and__5023__auto__){
var and__5023__auto____$1 = up_QMARK_;
if(cljs.core.truth_(and__5023__auto____$1)){
return min_value__$1;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?min_value__$1:((cljs.core.not(current_value))?app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(default$__$1,(0)):current_value
)));
if(cljs.core.truth_(current_value__$1)){
var increment = ((app.util.keyboard.shift_QMARK_(event))?(cljs.core.truth_(up_QMARK_)?(step_value__$1 * (10)):(step_value__$1 * (-10))):((app.util.keyboard.alt_QMARK_(event))?(cljs.core.truth_(up_QMARK_)?(step_value__$1 * 0.1):(step_value__$1 * -0.1)):(cljs.core.truth_(up_QMARK_)?step_value__$1:(- step_value__$1))
));
var new_value = (current_value__$1 + increment);
var new_value__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = wrap_value_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$2(max_value__$1,min_value__$1);
if(and__5023__auto____$1){
var and__5023__auto____$2 = (new_value > max_value__$1);
if(and__5023__auto____$2){
return up_QMARK_;
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?(((new_value - max_value__$1) + min_value__$1) - step_value__$1):(cljs.core.truth_((function (){var and__5023__auto__ = wrap_value_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$2(max_value__$1,min_value__$1);
if(and__5023__auto____$1){
var and__5023__auto____$2 = (new_value < min_value__$1);
if(and__5023__auto____$2){
return down_QMARK_;
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?(((new_value - min_value__$1) + max_value__$1) + step_value__$1):(cljs.core.truth_((function (){var and__5023__auto__ = app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(min_value__$1);
if(cljs.core.truth_(and__5023__auto__)){
return (new_value < min_value__$1);
} else {
return and__5023__auto__;
}
})())?min_value__$1:(cljs.core.truth_((function (){var and__5023__auto__ = app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(max_value__$1);
if(cljs.core.truth_(and__5023__auto__)){
return (new_value > max_value__$1);
} else {
return and__5023__auto__;
}
})())?max_value__$1:new_value
))));
var new_value__$2 = (cljs.core.truth_(integer_QMARK_)?app.common.math.round.cljs$core$IFn$_invoke$arity$1(new_value__$1):new_value__$1);
return (apply_value.cljs$core$IFn$_invoke$arity$2 ? apply_value.cljs$core$IFn$_invoke$arity$2(event,new_value__$2) : apply_value.call(null,event,new_value__$2));
} else {
return null;
}
}));
var handle_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(set_delta),rumext.v2.adapt(apply_value),rumext.v2.adapt(update_input),rumext.v2.adapt(parse_value)],(function (event){
rumext.v2.set_ref_val_BANG_(dirty_ref,true);

var up_QMARK_ = app.util.keyboard.up_arrow_QMARK_(event);
var down_QMARK_ = app.util.keyboard.down_arrow_QMARK_(event);
var enter_QMARK_ = app.util.keyboard.enter_QMARK_(event);
var esc_QMARK_ = app.util.keyboard.esc_QMARK_(event);
var node = rumext.v2.ref_val(ref);
if(cljs.core.truth_((function (){var or__5025__auto__ = up_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return down_QMARK_;
}
})())){
(set_delta.cljs$core$IFn$_invoke$arity$3 ? set_delta.cljs$core$IFn$_invoke$arity$3(event,up_QMARK_,down_QMARK_) : set_delta.call(null,event,up_QMARK_,down_QMARK_));
} else {
}

cljs.core.reset_BANG_(last_value_STAR_,(parse_value.cljs$core$IFn$_invoke$arity$0 ? parse_value.cljs$core$IFn$_invoke$arity$0() : parse_value.call(null)));

if(cljs.core.truth_(enter_QMARK_)){
app.util.dom.blur_BANG_(node);
} else {
}

if(cljs.core.truth_(esc_QMARK_)){
(update_input.cljs$core$IFn$_invoke$arity$1 ? update_input.cljs$core$IFn$_invoke$arity$1(value_str) : update_input.call(null,value_str));

return app.util.dom.blur_BANG_(node);
} else {
return null;
}
}));
var handle_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(parse_value)],(function (){
return cljs.core.reset_BANG_(last_value_STAR_,(parse_value.cljs$core$IFn$_invoke$arity$0 ? parse_value.cljs$core$IFn$_invoke$arity$0() : parse_value.call(null)));
}));
var handle_mouse_wheel = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(set_delta)],(function (event){
var temp__5825__auto__ = rumext.v2.ref_val(ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
if(cljs.core.truth_(app.util.dom.active_QMARK_(node))){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

var map__77663 = app.util.dom.get_delta_position(event);
var map__77663__$1 = cljs.core.__destructure_map(map__77663);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77663__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var G__77664 = event;
var G__77665 = (y < (0));
var G__77666 = (y > (0));
return (set_delta.cljs$core$IFn$_invoke$arity$3 ? set_delta.cljs$core$IFn$_invoke$arity$3(G__77664,G__77665,G__77666) : set_delta.call(null,G__77664,G__77665,G__77666));
} else {
return null;
}
} else {
return null;
}
}));
var handle_blur = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(parse_value),rumext.v2.adapt(apply_value),rumext.v2.adapt(update_input),rumext.v2.adapt(on_blur)],(function (event){
if(cljs.core.truth_(rumext.v2.ref_val(dirty_ref))){
var new_value_77667 = (function (){var or__5025__auto__ = cljs.core.deref(last_value_STAR_);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$__$1;
}
})();
if(cljs.core.truth_((function (){var or__5025__auto__ = nillable_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new_value_77667;
}
})())){
(apply_value.cljs$core$IFn$_invoke$arity$2 ? apply_value.cljs$core$IFn$_invoke$arity$2(event,new_value_77667) : apply_value.call(null,event,new_value_77667));
} else {
(update_input.cljs$core$IFn$_invoke$arity$1 ? update_input.cljs$core$IFn$_invoke$arity$1(new_value_77667) : update_input.call(null,new_value_77667));
}

if(cljs.core.fn_QMARK_(on_blur)){
return (on_blur.cljs$core$IFn$_invoke$arity$1 ? on_blur.cljs$core$IFn$_invoke$arity$1(event) : on_blur.call(null,event));
} else {
return null;
}
} else {
return null;
}
}));
var handle_unmount = app.main.ui.hooks.use_ref_callback(handle_blur);
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var target = app.util.dom.get_target(event);
var node = rumext.v2.ref_val(ref);
if((((!((node == null)))) && (cljs.core.not(app.util.dom.child_QMARK_(node,target))))){
return app.util.dom.blur_BANG_(node);
} else {
return null;
}
}));
var handle_focus = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_focus),rumext.v2.adapt(select_on_focus_QMARK_)],(function (event){
cljs.core.reset_BANG_(last_value_STAR_,(parse_value.cljs$core$IFn$_invoke$arity$0 ? parse_value.cljs$core$IFn$_invoke$arity$0() : parse_value.call(null)));

var target = app.util.dom.get_target(event);
if(cljs.core.truth_(on_focus)){
rumext.v2.set_ref_val_BANG_(dirty_ref,true);

(on_focus.cljs$core$IFn$_invoke$arity$1 ? on_focus.cljs$core$IFn$_invoke$arity$1(event) : on_focus.call(null,event));
} else {
}

if(cljs.core.truth_(select_on_focus_QMARK_)){
app.util.dom.select_text_BANG_(target);

return target.addEventListener("mouseup",app.util.dom.prevent_default,({"once": true}));
} else {
return null;
}
}));
var props__$1 = app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.unset_BANG_(app.util.object.unset_BANG_(app.util.object.unset_BANG_(app.util.object.clone(props),"selectOnFocus"),"nillable"),"integer"),"value",rumext.v2.undefined),"onChange",handle_change),"className",class$),"type","text"),"ref",ref),"defaultValue",app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(value)),"title",title),"onKeyDown",handle_key_down),"onBlur",handle_blur),"onFocus",handle_focus);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(value)],(function (){
var temp__5825__auto__ = rumext.v2.ref_val(ref);
if(cljs.core.truth_(temp__5825__auto__)){
var input_node = temp__5825__auto__;
return app.util.dom.set_value_BANG_(input_node,app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(value));
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(handle_unmount)],(function (){
return handle_unmount;
}));

rumext.v2.use_layout_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var keys = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.events.listen(app.util.globals.window,"pointerdown",on_click),goog.events.listen(app.util.globals.window,"click",on_click)], null);
return (function (){
return cljs.core.run_BANG_(goog.events.unlistenByKey,keys);
});
}));

rumext.v2.use_layout_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(handle_mouse_wheel)],(function (){
var temp__5825__auto__ = rumext.v2.ref_val(ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
var key = goog.events.listen(node,"wheel",handle_mouse_wheel,({"passive": false}));
return (function (){
return goog.events.unlistenByKey(key);
});
} else {
return null;
}
}));

return rumext.v2.create_element("input",props__$1);
}));

(app.main.ui.components.numeric_input.numeric_input_STAR_.displayName = "numeric-input*");


//# sourceMappingURL=app.main.ui.components.numeric_input.js.map
