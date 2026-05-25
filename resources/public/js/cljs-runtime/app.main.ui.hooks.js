import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.files.focus.js";
import "./app.common.math.js";
import "./app.main.broadcast.js";
import "./app.main.data.shortcuts.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.util.dom.js";
import "./app.util.dom.dnd.js";
import "./app.util.storage.js";
import "./app.util.timers.js";
import "./app.util.webapi.js";
import "./beicon.v2.core.js";
import "./beicon.v2.operators.js";
import "./goog.functions.functions.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.hooks');
app.main.ui.hooks.render_id = (0);
/**
 * Get a stable, DOM usable identifier across all react rerenders
 */
app.main.ui.hooks.use_render_id = (function app$main$ui$hooks$use_render_id(){
return rumext.v2.useMemo((function (){
return "render-" + (++app.main.ui.hooks.render_id);
}),[]);
});
app.main.ui.hooks.use_rxsub = (function app$main$ui$hooks$use_rxsub(ob){
var vec__53602 = rumext.v2.useState((function (){
if((((!((ob == null))))?(((((ob.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === ob.cljs$core$IDeref$))))?true:(((!ob.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,ob):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,ob))){
return cljs.core.deref(ob);
} else {
return null;
}
}));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53602,(0),null);
var reset_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53602,(1),null);
rumext.v2.useEffect((function (){
var sub = beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2(ob,(function (p1__53601_SHARP_){
return (reset_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_state_BANG_.cljs$core$IFn$_invoke$arity$1(p1__53601_SHARP_) : reset_state_BANG_.call(null,p1__53601_SHARP_));
}));
return (function (){
return beicon.v2.core.dispose_BANG_(sub);
});
}),[ob]);

return state;
});
app.main.ui.hooks.use_shortcuts = (function app$main$ui$hooks$use_shortcuts(key,shortcuts){
return rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),shortcuts],(function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.shortcuts.push_shortcuts(key,shortcuts));

return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.shortcuts.pop_shortcuts(key));
});
}));
});
app.main.ui.hooks.set_timer = (function app$main$ui$hooks$set_timer(state,ms,func){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"timer","timer",-1266967739),app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2(ms,func));
});
app.main.ui.hooks.cancel_timer = (function app$main$ui$hooks$cancel_timer(state){
var timer = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(timer)){
beicon.v2.core.dispose_BANG_(timer);

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"timer","timer",-1266967739));
} else {
return state;
}
});
app.main.ui.hooks.sortable_ctx = rumext.v2.create_context(null);
app.main.ui.hooks.sortable_container_STAR_ = (function app$main$ui$hooks$sortable_container_STAR_(props_53625){
var children = props_53625.children;
var global_drag_end = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$1((function (){
return beicon.v2.core.subject();
}));
return rumext.v2.jsx(rumext.v2.provider(app.main.ui.hooks.sortable_ctx),{'value':global_drag_end,'children':children});
});

(app.main.ui.hooks.sortable_container_STAR_.displayName = "sortable-container*");

app.main.ui.hooks.use_sortable = (function app$main$ui$hooks$use_sortable(var_args){
var args__5755__auto__ = [];
var len__5749__auto___53710 = arguments.length;
var i__5750__auto___53711 = (0);
while(true){
if((i__5750__auto___53711 < len__5749__auto___53710)){
args__5755__auto__.push((arguments[i__5750__auto___53711]));

var G__53713 = (i__5750__auto___53711 + (1));
i__5750__auto___53711 = G__53713;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.ui.hooks.use_sortable.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.ui.hooks.use_sortable.cljs$core$IFn$_invoke$arity$variadic = (function (p__53628){
var map__53629 = p__53628;
var map__53629__$1 = cljs.core.__destructure_map(map__53629);
var opts = map__53629__$1;
var data_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53629__$1,new cljs.core.Keyword(null,"data-type","data-type",-326421468));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53629__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var on_drop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53629__$1,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491));
var on_drag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53629__$1,new cljs.core.Keyword(null,"on-drag","on-drag",-69159091));
var on_hold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53629__$1,new cljs.core.Keyword(null,"on-hold","on-hold",-295274098));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53629__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var detect_center_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53629__$1,new cljs.core.Keyword(null,"detect-center?","detect-center?",1398000690));
var draggable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53629__$1,new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),true);
var ref = rumext.v2.use_ref();
var state = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"over","over",192553051),null,new cljs.core.Keyword(null,"timer","timer",-1266967739),null,new cljs.core.Keyword(null,"subscr","subscr",100986586),null], null));
var global_drag_end = rumext.v2.use_ctx(app.main.ui.hooks.sortable_ctx);
var cleanup = (function (){
var G__53630_53719 = new cljs.core.Keyword(null,"subscr","subscr",100986586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if((G__53630_53719 == null)){
} else {
beicon.v2.core.dispose_BANG_(G__53630_53719);
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (state__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(app.main.ui.hooks.cancel_timer(state__$1),new cljs.core.Keyword(null,"over","over",192553051),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"subscr","subscr",100986586)], 0));
}));
});
var subscribe_to_drag_end = (function (){
if((new cljs.core.Keyword(null,"subscr","subscr",100986586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)) == null)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (p1__53626_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__53626_SHARP_,new cljs.core.Keyword(null,"subscr","subscr",100986586),beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2(global_drag_end,cleanup));
}));
} else {
return null;
}
});
var on_drag_start = (function (event){
if(cljs.core.truth_((function (){var or__5025__auto__ = disabled;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.not(draggable_QMARK_);
}
})())){
app.util.dom.stop_propagation(event);

return app.util.dom.prevent_default(event);
} else {
app.util.dom.stop_propagation(event);

app.util.dom.dnd.set_data_BANG_.cljs$core$IFn$_invoke$arity$3(event,data_type,data);

app.util.dom.dnd.set_drag_image_BANG_.cljs$core$IFn$_invoke$arity$2(event,app.util.dom.dnd.invisible_image());

app.util.dom.dnd.set_allowed_effect_BANG_(event,"move");

if(cljs.core.fn_QMARK_(on_drag)){
return (on_drag.cljs$core$IFn$_invoke$arity$1 ? on_drag.cljs$core$IFn$_invoke$arity$1(data) : on_drag.call(null,data));
} else {
return null;
}
}
});
var on_drag_enter = (function (event){
app.util.dom.prevent_default(event);

if(cljs.core.truth_(app.util.dom.dnd.from_child_QMARK_(event))){
return null;
} else {
app.util.dom.stop_propagation(event);

subscribe_to_drag_end();

if(cljs.core.fn_QMARK_(on_hold)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (state__$1){
return app.main.ui.hooks.set_timer(app.main.ui.hooks.cancel_timer(state__$1),(1000),on_hold);
}));
} else {
return null;
}
}
});
var on_drag_over = (function (event){
if(cljs.core.truth_(app.util.dom.dnd.has_type_QMARK_(event,data_type))){
app.util.dom.prevent_default(event);

if(cljs.core.truth_(app.util.dom.dnd.from_child_QMARK_(event))){
return null;
} else {
app.util.dom.stop_propagation(event);

subscribe_to_drag_end();

var side = app.util.dom.dnd.drop_side(event,detect_center_QMARK_);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"over","over",192553051),side);
}
} else {
return null;
}
});
var on_drag_leave = (function (event){
if(cljs.core.truth_(app.util.dom.dnd.from_child_QMARK_(event))){
return null;
} else {
return cleanup();
}
});
var on_drop_SINGLEQUOTE_ = (function (event){
app.util.dom.stop_propagation(event);

var side = app.util.dom.dnd.drop_side(event,detect_center_QMARK_);
var drop_data = app.util.dom.dnd.get_data.cljs$core$IFn$_invoke$arity$2(event,data_type);
cleanup();

global_drag_end.next(null);

if(cljs.core.fn_QMARK_(on_drop)){
return (on_drop.cljs$core$IFn$_invoke$arity$3 ? on_drop.cljs$core$IFn$_invoke$arity$3(side,drop_data,event) : on_drop.call(null,side,drop_data,event));
} else {
return null;
}
});
var on_drag_end = (function (event){
app.util.dom.stop_propagation(event);

global_drag_end.next(null);

return cleanup();
});
var on_mount = (function (){
var dom = rumext.v2.ref_val(ref);
dom.setAttribute("draggable",(function (){var and__5023__auto__ = draggable_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(disabled);
} else {
return and__5023__auto__;
}
})());

dom.addEventListener("dragstart",on_drag_start,false);

dom.addEventListener("dragenter",on_drag_enter,false);

dom.addEventListener("dragover",on_drag_over,false);

dom.addEventListener("dragleave",on_drag_leave,false);

dom.addEventListener("drop",on_drop_SINGLEQUOTE_,false);

dom.addEventListener("dragend",on_drag_end,false);

return (function (){
dom.removeEventListener("dragstart",on_drag_start);

dom.removeEventListener("dragenter",on_drag_enter);

dom.removeEventListener("dragover",on_drag_over);

dom.removeEventListener("dragleave",on_drag_leave);

dom.removeEventListener("drop",on_drop_SINGLEQUOTE_);

return dom.removeEventListener("dragend",on_drag_end);
});
});
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(data),rumext.v2.adapt(on_drop),rumext.v2.adapt(draggable_QMARK_)],on_mount);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(state),ref], null);
}));

(app.main.ui.hooks.use_sortable.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.ui.hooks.use_sortable.cljs$lang$applyTo = (function (seq53627){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53627));
}));

/**
 * Wraps the subscription to a stream into a `use-effect` call
 */
app.main.ui.hooks.use_stream = (function app$main$ui$hooks$use_stream(var_args){
var G__53635 = arguments.length;
switch (G__53635) {
case 2:
return app.main.ui.hooks.use_stream.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.ui.hooks.use_stream.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.ui.hooks.use_stream.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.hooks.use_stream.cljs$core$IFn$_invoke$arity$2 = (function (stream,on_subscribe){
return app.main.ui.hooks.use_stream.cljs$core$IFn$_invoke$arity$3(stream,[],on_subscribe);
}));

(app.main.ui.hooks.use_stream.cljs$core$IFn$_invoke$arity$3 = (function (stream,deps,on_subscribe){
return app.main.ui.hooks.use_stream.cljs$core$IFn$_invoke$arity$4(stream,deps,on_subscribe,null);
}));

(app.main.ui.hooks.use_stream.cljs$core$IFn$_invoke$arity$4 = (function (stream,deps,on_subscribe,on_dispose){
return rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2(deps,(function (){
if(cljs.core.truth_(stream)){
var sub = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2(on_subscribe,stream);
return (function (){
beicon.v2.core.dispose_BANG_(sub);

if(cljs.core.truth_(on_dispose)){
return (on_dispose.cljs$core$IFn$_invoke$arity$0 ? on_dispose.cljs$core$IFn$_invoke$arity$0() : on_dispose.call(null));
} else {
return null;
}
});
} else {
return null;
}
}));
}));

(app.main.ui.hooks.use_stream.cljs$lang$maxFixedArity = 4);

/**
 * Returns the value from previous render cycle.
 */
app.main.ui.hooks.use_previous = (function app$main$ui$hooks$use_previous(value){
var ref = rumext.v2.use_ref(value);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(value)],(function (){
return rumext.v2.set_ref_val_BANG_(ref,value);
}));

return rumext.v2.ref_val(ref);
});
/**
 * Returns a var pointer what automatically updates with latest values.
 */
app.main.ui.hooks.use_update_var = (function app$main$ui$hooks$use_update_var(value){
var ptr = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(value);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(value)],(function (){
return cljs.core.reset_BANG_(ptr,value);
}));

return ptr;
});
app.main.ui.hooks.use_update_ref = (function app$main$ui$hooks$use_update_ref(value){
var ref = rumext.v2.use_ref(value);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(value)],(function (){
return rumext.v2.set_ref_val_BANG_(ref,value);
}));

return ref;
});
/**
 * Returns a stable callback pointer what calls the interned
 *   callback. The interned callback will be automatically updated on
 *   each render if the reference changes and works as noop if the
 *   pointer references to nil value.
 */
app.main.ui.hooks.use_ref_callback = (function app$main$ui$hooks$use_ref_callback(f){
var ptr = rumext.v2.use_ref(null);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(f)],(function (){
return rumext.v2.set_ref_val_BANG_(ptr,({"f": f}));
}));

return rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function() { 
var G__53745__delegate = function (args){
var obj = rumext.v2.ref_val(ptr);
if(obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(obj.f,args);
} else {
return null;
}
};
var G__53745 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53746__i = 0, G__53746__a = new Array(arguments.length -  0);
while (G__53746__i < G__53746__a.length) {G__53746__a[G__53746__i] = arguments[G__53746__i + 0]; ++G__53746__i;}
  args = new cljs.core.IndexedSeq(G__53746__a,0,null);
} 
return G__53745__delegate.call(this,args);};
G__53745.cljs$lang$maxFixedArity = 0;
G__53745.cljs$lang$applyTo = (function (arglist__53747){
var args = cljs.core.seq(arglist__53747);
return G__53745__delegate(args);
});
G__53745.cljs$core$IFn$_invoke$arity$variadic = G__53745__delegate;
return G__53745;
})()
);
});
/**
 * Returns a ref that will be automatically updated when the value is changed
 */
app.main.ui.hooks.use_ref_value = (function app$main$ui$hooks$use_ref_value(v){
var ref = rumext.v2.use_ref(v);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(v)],(function (){
return rumext.v2.set_ref_val_BANG_(ref,v);
}));

return ref;
});
app.main.ui.hooks.use_equal_memo = (function app$main$ui$hooks$use_equal_memo(val){
var ref = rumext.v2.use_ref(null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rumext.v2.ref_val(ref),val)){
} else {
rumext.v2.set_ref_val_BANG_(ref,val);
}

return rumext.v2.ref_val(ref);
});
app.main.ui.hooks.with_focus_objects = (function app$main$ui$hooks$with_focus_objects(var_args){
var G__53654 = arguments.length;
switch (G__53654) {
case 1:
return app.main.ui.hooks.with_focus_objects.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.ui.hooks.with_focus_objects.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.hooks.with_focus_objects.cljs$core$IFn$_invoke$arity$1 = (function (objects){
var focus = rumext.v2.deref(app.main.refs.workspace_focus_selected);
return app.main.ui.hooks.with_focus_objects.cljs$core$IFn$_invoke$arity$2(objects,focus);
}));

(app.main.ui.hooks.with_focus_objects.cljs$core$IFn$_invoke$arity$2 = (function (objects,focus){
return rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(focus),rumext.v2.adapt(objects)],(function (){
return app.common.files.focus.focus_objects(objects,focus);
}));
}));

(app.main.ui.hooks.with_focus_objects.cljs$lang$maxFixedArity = 2);

app.main.ui.hooks.use_debounce = (function app$main$ui$hooks$use_debounce(ms,value){
var vec__53661 = rumext.v2.useState(value);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53661,(0),null);
var update_state_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53661,(1),null);
var update_fn = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ms)],(function (){
return goog.functions.debounce(update_state_fn,ms);
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(value)],(function (){
return (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(value) : update_fn.call(null,value));
}));

return state;
});
/**
 * A specialized hook that adds persistence and inter-context reactivity
 *   to the default mf/use-state hook.
 * 
 *   The state is automatically persisted under the provided key on
 *   localStorage. And it will keep watching events with type equals to
 *   `key` for new values.
 */
app.main.ui.hooks.use_shared_state = (function app$main$ui$hooks$use_shared_state(key,default$){
var id = rumext.v2.use_id();
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.util.storage.user,key,default$);
}));
var state = cljs.core.deref(state_STAR_);
var stream = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id)],(function (){
return beicon.v2.core.map(cljs.core.deref,beicon.v2.core.filter((function (p1__53671_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__53671_SHARP_),key);
}),beicon.v2.core.filter((function (p1__53670_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__53670_SHARP_),id);
}),app.main.broadcast.stream)));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(state),rumext.v2.adapt(key),rumext.v2.adapt(id)],(function (){
app.main.broadcast.emit_BANG_.cljs$core$IFn$_invoke$arity$3(id,key,state);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.storage.user,cljs.core.assoc,key,state);
}));

app.main.ui.hooks.use_stream.cljs$core$IFn$_invoke$arity$2(stream,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,state_STAR_));

return state_STAR_;
});
/**
 * A specialized hook that adds persistence to the default mf/use-state hook.
 * 
 *   The state is automatically persisted under the provided key on
 *   localStorage. And it will keep watching events with type equals to
 *   `key` for new values.
 */
app.main.ui.hooks.use_persisted_state = (function app$main$ui$hooks$use_persisted_state(key,default$){
var id = rumext.v2.use_id();
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.util.storage.user,key,default$);
}));
var state = cljs.core.deref(state_STAR_);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(state),rumext.v2.adapt(key),rumext.v2.adapt(id)],(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.storage.user,cljs.core.assoc,key,state);
}));

return state_STAR_;
});
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.ui !== 'undefined') && (typeof app.main.ui.hooks !== 'undefined') && (typeof app.main.ui.hooks.intersection_subject !== 'undefined')){
} else {
app.main.ui.hooks.intersection_subject = beicon.v2.core.subject();
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.ui !== 'undefined') && (typeof app.main.ui.hooks !== 'undefined') && (typeof app.main.ui.hooks.intersection_observer !== 'undefined')){
} else {
app.main.ui.hooks.intersection_observer = (new cljs.core.Delay((function (){
return (new IntersectionObserver((function (entries,_){
return cljs.core.run_BANG_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(beicon.v2.core.push_BANG_,app.main.ui.hooks.intersection_subject),cljs.core.seq(entries));
}),({"rootMargin": "0px", "threshold": [(0),1.0]})));
}),null));
}
app.main.ui.hooks.use_visible = (function app$main$ui$hooks$use_visible(var_args){
var args__5755__auto__ = [];
var len__5749__auto___53758 = arguments.length;
var i__5750__auto___53759 = (0);
while(true){
if((i__5750__auto___53759 < len__5749__auto___53758)){
args__5755__auto__.push((arguments[i__5750__auto___53759]));

var G__53760 = (i__5750__auto___53759 + (1));
i__5750__auto___53759 = G__53760;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.main.ui.hooks.use_visible.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.main.ui.hooks.use_visible.cljs$core$IFn$_invoke$arity$variadic = (function (ref,p__53679){
var map__53680 = p__53679;
var map__53680__$1 = cljs.core.__destructure_map(map__53680);
var once_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53680__$1,new cljs.core.Keyword(null,"once?","once?",-872881597));
var state = rumext.v2.useState(false);
var update_state_BANG_ = (state[(1)]);
var state__$1 = (state[(0)]);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(once_QMARK_)],(function (){
var node = rumext.v2.ref_val(ref);
var stream = beicon.v2.core.pipe(beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$0(),beicon.v2.core.map((function (entry){
var ratio = (entry["intersectionRatio"]);
var intersecting_QMARK_ = (entry["isIntersecting"]);
var intersecting_QMARK___$1 = ((intersecting_QMARK_) || ((ratio > 0.5)));
if(((intersecting_QMARK___$1 === true) && (once_QMARK_ === true))){
cljs.core.deref(app.main.ui.hooks.intersection_observer).unobserve(node);
} else {
}

return intersecting_QMARK___$1;
}),beicon.v2.core.filter((function (entry){
var target = (entry["target"]);
return (target === node);
}),app.main.ui.hooks.intersection_subject)));
var subs = beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2(stream,update_state_BANG_);
cljs.core.deref(app.main.ui.hooks.intersection_observer).observe(node);

return (function (){
cljs.core.deref(app.main.ui.hooks.intersection_observer).unobserve(node);

return beicon.v2.core.dispose_BANG_(subs);
});
}));

return state__$1;
}));

(app.main.ui.hooks.use_visible.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.main.ui.hooks.use_visible.cljs$lang$applyTo = (function (seq53673){
var G__53674 = cljs.core.first(seq53673);
var seq53673__$1 = cljs.core.next(seq53673);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53674,seq53673__$1);
}));

/**
 * Returns the singleton container div for the given category, creating
 *   and appending it to document.body on first access.
 */
app.main.ui.hooks.get_or_create_portal_container = (function app$main$ui$hooks$get_or_create_portal_container(category){
var body = app.util.dom.get_body();
var id = ["portal-container-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(category)].join('');
var or__5025__auto__ = app.util.dom.query.cljs$core$IFn$_invoke$arity$2(body,["#",id].join(''));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var container = app.util.dom.create_element.cljs$core$IFn$_invoke$arity$1("div");
app.util.dom.set_attribute_BANG_(container,"id",id);

app.util.dom.append_child_BANG_(body,container);

return container;
}
});
/**
 * Returns a shared singleton container div for React portals, identified
 *   by a logical category. Available categories:
 * 
 *  :modal    — modal dialogs
 *  :popup    — popups, dropdowns, context menus
 *  :tooltip  — tooltips
 *  :default  — general portal use (default)
 * 
 *   All portals in the same category share one <div> on document.body,
 *   keeping the DOM clean and avoiding removeChild race conditions.
 */
app.main.ui.hooks.use_portal_container = (function app$main$ui$hooks$use_portal_container(var_args){
var G__53694 = arguments.length;
switch (G__53694) {
case 0:
return app.main.ui.hooks.use_portal_container.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.ui.hooks.use_portal_container.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.hooks.use_portal_container.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.ui.hooks.use_portal_container.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328));
}));

(app.main.ui.hooks.use_portal_container.cljs$core$IFn$_invoke$arity$1 = (function (category){
var category__$1 = cljs.core.name(category);
return rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(category__$1)],(function (){
return app.main.ui.hooks.get_or_create_portal_container(category__$1);
}));
}));

(app.main.ui.hooks.use_portal_container.cljs$lang$maxFixedArity = 1);

app.main.ui.hooks.use_dynamic_grid_item_width = (function app$main$ui$hooks$use_dynamic_grid_item_width(var_args){
var G__53696 = arguments.length;
switch (G__53696) {
case 0:
return app.main.ui.hooks.use_dynamic_grid_item_width.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.ui.hooks.use_dynamic_grid_item_width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.hooks.use_dynamic_grid_item_width.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.ui.hooks.use_dynamic_grid_item_width.cljs$core$IFn$_invoke$arity$1(null);
}));

(app.main.ui.hooks.use_dynamic_grid_item_width.cljs$core$IFn$_invoke$arity$1 = (function (itemsize){
var width_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var width = cljs.core.deref(width_STAR_);
var rowref = rumext.v2.use_ref();
var itemsize__$1 = (((!((itemsize == null))))?itemsize:(((width >= (1030)))?(280):(230)
));
var ratio = (((!((width == null))))?(width / itemsize__$1):(0));
var nitems = app.common.math.floor(ratio);
var limit = Math.min((10),nitems);
var limit__$1 = Math.max((1),limit);
var th_size = (cljs.core.truth_(width)?app.common.math.floor(((((width - (32)) - ((limit__$1 - (1)) * (24))) / limit__$1) - (12))):null);
var th_size__$1 = ((cljs.core.odd_QMARK_((th_size | (0))))?(th_size - (1)):th_size);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(th_size__$1)],(function (){
if(cljs.core.truth_(th_size__$1)){
var node = rumext.v2.ref_val(rowref);
node.style.setProperty("--th-width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(th_size__$1),"px"].join(''));

return node.style.setProperty("--th-height",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.common.math.ceil((th_size__$1 * ((2) / (3))))),"px"].join(''));
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var node = rumext.v2.ref_val(rowref);
var mnt_QMARK_ = cljs.core.volatile_BANG_(true);
var sub = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (entries){
var row = cljs.core.first(entries);
var row_rect = row.contentRect;
var row_width = row_rect.width;
if(cljs.core.truth_(cljs.core.deref(mnt_QMARK_))){
return cljs.core.reset_BANG_(width_STAR_,row_width);
} else {
return null;
}
}),app.util.webapi.observe_resize(node));
return (function (){
cljs.core.vreset_BANG_(mnt_QMARK_,false);

return beicon.v2.core.dispose_BANG_(sub);
});
}));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rowref,limit__$1], null);
}));

(app.main.ui.hooks.use_dynamic_grid_item_width.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=app.main.ui.hooks.js.map
