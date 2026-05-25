import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.common.logging.js";
import "./app.common.math.js";
import "./app.main.ui.context.js";
import "./app.main.ui.hooks.js";
import "./app.util.dom.js";
import "./app.util.globals.js";
import "./app.util.storage.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.hooks.resize');
app.common.logging.loggers.set("app.main.ui.hooks.resize",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"warn","warn",-436710552)));
app.main.ui.hooks.resize.last_resize_type = null;
app.main.ui.hooks.resize.get_initial_state = (function app$main$ui$hooks$resize$get_initial_state(initial,file_id,key){
var saved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.util.storage.user,new cljs.core.Keyword("app.main.ui.hooks.resize","state","app.main.ui.hooks.resize/state",172840657)),file_id),key);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(saved,initial);
});
app.main.ui.hooks.resize.update_persistent_state = (function app$main$ui$hooks$resize$update_persistent_state(data,file_id,key,size){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.main.ui.hooks.resize","state","app.main.ui.hooks.resize/state",172840657),file_id], null),cljs.core.assoc,key,size);
});
app.main.ui.hooks.resize.set_resize_type_BANG_ = (function app$main$ui$hooks$resize$set_resize_type_BANG_(type){
return (app.main.ui.hooks.resize.last_resize_type = type);
});
/**
 * Allows a node to be resized by dragging, and calculates the new size based on the drag setting a maximum and minimum value.
 * 
 * Parameters:
 * - `key` - A unique key to identify the resize hook.
 * - `initial` - The initial size of the node.
 * - `min-val` - The minimum value the size can be.
 * - `max-val` - The maximum value the size can be. It can be a number or a string representing either a fixed value or a percentage (0 to 1).
 * - `axis` - The axis to resize on, either `:x` or `:y`.
 * - `negate?` - If `true`, the axis is negated.
 * - `resize-type` - The type of resize, either `:width` or `:height`.
 * - `on-change-size` - A function to call when the size changes.
 * 
 * Returns:
 * - An object with the following:
 * 
 *   - `:on-pointer-down` - A function to call when the pointer is pressed down.
 *   - `:on-lost-pointer-capture` - A function to call when the pointer is released.
 *   - `:on-pointer-move` - A function to call when the pointer is moved.
 *   - `:parent-ref` - A reference to the node.
 *   - `:set-size` - A function to set the size.
 *   - `:size` - The current size.
 */
app.main.ui.hooks.resize.use_resize_hook = (function app$main$ui$hooks$resize$use_resize_hook(var_args){
var G__71362 = arguments.length;
switch (G__71362) {
case 7:
return app.main.ui.hooks.resize.use_resize_hook.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return app.main.ui.hooks.resize.use_resize_hook.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.hooks.resize.use_resize_hook.cljs$core$IFn$_invoke$arity$7 = (function (key,initial,min_val,max_val,axis,negate_QMARK_,resize_type){
return app.main.ui.hooks.resize.use_resize_hook.cljs$core$IFn$_invoke$arity$8(key,initial,min_val,max_val,axis,negate_QMARK_,resize_type,null);
}));

(app.main.ui.hooks.resize.use_resize_hook.cljs$core$IFn$_invoke$arity$8 = (function (key,initial,min_val,max_val,axis,negate_QMARK_,resize_type,on_change_size){
var file_id = rumext.v2.use_ctx(app.main.ui.context.current_file_id);
var current_size_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.ui.hooks.resize.get_initial_state(initial,file_id,key);
}));
var current_size = cljs.core.deref(current_size_STAR_);
var parent_ref = rumext.v2.use_ref(null);
var dragging_ref = rumext.v2.use_ref(false);
var start_size_ref = rumext.v2.use_ref(null);
var start_ref = rumext.v2.use_ref(null);
var window_height_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return app.util.dom.get_window_height();
}));
var window_height = cljs.core.deref(window_height_STAR_);
var max_val__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(max_val),rumext.v2.adapt(window_height)],(function (){
var parsed_max_val = ((typeof max_val === 'string')?app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(max_val):null);
if(cljs.core.truth_(parsed_max_val)){
return (window_height * parsed_max_val);
} else {
return max_val;
}
}));
var set_size = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(key),rumext.v2.adapt(min_val),rumext.v2.adapt(max_val__$1),rumext.v2.adapt(window_height)],(function (new_size){
var new_size__$1 = app.common.math.clamp(new_size,min_val,max_val__$1);
cljs.core.reset_BANG_(current_size_STAR_,new_size__$1);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.util.storage.user,app.main.ui.hooks.resize.update_persistent_state,file_id,key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_size__$1], 0));
}));
var on_pointer_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_size)],(function (event){
app.util.dom.capture_pointer(event);

rumext.v2.set_ref_val_BANG_(start_size_ref,current_size);

rumext.v2.set_ref_val_BANG_(dragging_ref,true);

rumext.v2.set_ref_val_BANG_(start_ref,app.util.dom.get_client_position(event));

return (app.main.ui.hooks.resize.last_resize_type = resize_type);
}));
var on_lost_pointer_capture = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.release_pointer(event);

rumext.v2.set_ref_val_BANG_(start_size_ref,null);

rumext.v2.set_ref_val_BANG_(dragging_ref,false);

rumext.v2.set_ref_val_BANG_(start_ref,null);

return (app.main.ui.hooks.resize.last_resize_type = null);
}));
var on_pointer_move = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(min_val),rumext.v2.adapt(max_val__$1),rumext.v2.adapt(negate_QMARK_),rumext.v2.adapt(file_id),rumext.v2.adapt(key)],(function (event){
if(cljs.core.truth_(rumext.v2.ref_val(dragging_ref))){
var start = rumext.v2.ref_val(start_ref);
var pos = app.util.dom.get_client_position(event);
var delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__71363 = app.common.geom.point.to_vec(start,pos);
if(cljs.core.truth_(negate_QMARK_)){
return app.common.geom.point.negate(G__71363);
} else {
return G__71363;
}
})(),axis);
var start_size = rumext.v2.ref_val(start_size_ref);
var new_size = (function (){var x__5113__auto__ = (function (){var x__5110__auto__ = (start_size + delta);
var y__5111__auto__ = min_val;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y__5114__auto__ = max_val__$1;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return (set_size.cljs$core$IFn$_invoke$arity$1 ? set_size.cljs$core$IFn$_invoke$arity$1(new_size) : set_size.call(null,new_size));
} else {
return null;
}
}));
var on_resize_window = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
var new_window_height = app.util.dom.get_window_height();
return cljs.core.reset_BANG_(window_height_STAR_,new_window_height);
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change_size),rumext.v2.adapt(current_size)],(function (){
if(cljs.core.truth_(on_change_size)){
return (on_change_size.cljs$core$IFn$_invoke$arity$1 ? on_change_size.cljs$core$IFn$_invoke$arity$1(current_size) : on_change_size.call(null,current_size));
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
app.util.globals.window.addEventListener("resize",on_resize_window);

return (function (){
return app.util.globals.window.removeEventListener("resize",on_resize_window);
});
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(window_height)],(function (){
var new_size = app.common.math.clamp(current_size,min_val,max_val__$1);
return (set_size.cljs$core$IFn$_invoke$arity$1 ? set_size.cljs$core$IFn$_invoke$arity$1(new_size) : set_size.call(null,new_size));
}));

return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),on_pointer_down,new cljs.core.Keyword(null,"on-lost-pointer-capture","on-lost-pointer-capture",-1554883134),on_lost_pointer_capture,new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695),on_pointer_move,new cljs.core.Keyword(null,"parent-ref","parent-ref",-860935235),parent_ref,new cljs.core.Keyword(null,"set-size","set-size",-1037159587),set_size,new cljs.core.Keyword(null,"size","size",1098693007),current_size], null);
}));

(app.main.ui.hooks.resize.use_resize_hook.cljs$lang$maxFixedArity = 8);

app.main.ui.hooks.resize.use_resize_observer = (function app$main$ui$hooks$resize$use_resize_observer(callback){
app.common.data.macros.runtime_assert("expected a valid callback",(function (){
return cljs.core.fn_QMARK_(callback);
}));

var prev_val_ref = rumext.v2.use_ref(null);
var observer_ref = rumext.v2.use_ref(null);
var callback__$1 = app.main.ui.hooks.use_ref_callback(callback);
var node_ref = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (node){
if((!((node == null)))){
var observer_71374 = rumext.v2.ref_val(observer_ref);
var prev_val_71375 = rumext.v2.ref_val(prev_val_ref);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_val_71375,node)) && ((!((observer_71374 == null)))))){
if(app.common.logging.enabled_QMARK_("app.main.ui.hooks.resize",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action","action",-811238024),"disconnect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("js","prev-val","js/prev-val",1324827446),prev_val_71375], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("js","node","js/node",581197925),node], null)], null);
}),null)),null,null,"app.main.ui.hooks.resize",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


observer_71374.disconnect();

rumext.v2.set_ref_val_BANG_(observer_ref,null);
} else {
}

if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_val_71375,node)) && ((!((node == null)))))){
var observer_71376__$1 = (new ResizeObserver((function (){
var G__71364 = app.main.ui.hooks.resize.last_resize_type;
var G__71365 = app.util.dom.get_client_size(node);
return (callback__$1.cljs$core$IFn$_invoke$arity$2 ? callback__$1.cljs$core$IFn$_invoke$arity$2(G__71364,G__71365) : callback__$1.call(null,G__71364,G__71365));
})));
rumext.v2.set_ref_val_BANG_(observer_ref,observer_71376__$1);

if(app.common.logging.enabled_QMARK_("app.main.ui.hooks.resize",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action","action",-811238024),"observe"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("js","node","js/node",581197925),node], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("js","observer","js/observer",-1103718059),observer_71376__$1], null)], null);
}),null)),null,null,"app.main.ui.hooks.resize",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


observer_71376__$1.observe(node);

var G__71366_71377 = app.main.ui.hooks.resize.last_resize_type;
var G__71367_71378 = app.util.dom.get_client_size(node);
(callback__$1.cljs$core$IFn$_invoke$arity$2 ? callback__$1.cljs$core$IFn$_invoke$arity$2(G__71366_71377,G__71367_71378) : callback__$1.call(null,G__71366_71377,G__71367_71378));
} else {
}

return rumext.v2.set_ref_val_BANG_(prev_val_ref,node);
} else {
return null;
}
}));
rumext.v2.use_layout_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return (function (){
var temp__5825__auto__ = rumext.v2.ref_val(observer_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var observer = temp__5825__auto__;
if(app.common.logging.enabled_QMARK_("app.main.ui.hooks.resize",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action","action",-811238024),"disconnect"], null)], null);
}),null)),null,null,"app.main.ui.hooks.resize",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return observer.disconnect();
} else {
return null;
}
});
}));

return node_ref;
});

//# sourceMappingURL=app.main.ui.hooks.resize.js.map
