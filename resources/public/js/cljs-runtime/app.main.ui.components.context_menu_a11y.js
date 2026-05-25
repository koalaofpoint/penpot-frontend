import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.schema.js";
import "./app.main.refs.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.globals.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./app.util.timers.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.components.context_menu_a11y');
app.main.ui.components.context_menu_a11y.xf_COLON_options = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.some_QMARK_));
app.main.ui.components.context_menu_a11y.generate_ids_group = (function app$main$ui$components$context_menu_a11y$generate_ids_group(options,has_parents_QMARK_){
var ids = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(app.main.ui.components.context_menu_a11y.xf_COLON_options,options);
var ids__$1 = (cljs.core.truth_(has_parents_QMARK_)?cljs.core.cons("go-back-sub-option",ids):ids);
return cljs.core.vec(ids__$1);
});
app.main.ui.components.context_menu_a11y.schema_COLON_option = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registry","registry",1021159018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.ui.components.context-menu-a11y","option","app.main.ui.components.context-menu-a11y/option",44848074),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"separator","separator",-1628749125)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("app.main.ui.components.context-menu-a11y","option","app.main.ui.components.context-menu-a11y/option",44848074)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","contains-any","app.common.schema/contains-any",545508409),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"options","options",99638489),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("app.main.ui.components.context-menu-a11y","option","app.main.ui.components.context-menu-a11y/option",44848074)], null)], null);
app.main.ui.components.context_menu_a11y.valid_option_QMARK_ = app.common.schema.lazy_validator(app.main.ui.components.context_menu_a11y.schema_COLON_option);
app.main.ui.components.context_menu_a11y.context_menu_inner_STAR_ = (function app$main$ui$components$context_menu_a11y$context_menu_inner_STAR_(props_72825){
var options = props_72825.options;
var fixed = props_72825.fixed;
var selectable = props_72825.selectable;
var left = props_72825.left;
var min_width = props_72825.minWidth;
var selected = props_72825.selected;
var on_close = props_72825.onClose;
var top = props_72825.top;
var width = props_72825.width;
var origin = props_72825.origin;
var props = props_72825;
if(cljs.core.every_QMARK_(app.main.ui.components.context_menu_a11y.valid_option_QMARK_,options)){
} else {
throw (new Error(["Assert failed: ","expected valid options","\n","(every? valid-option? options)"].join('')));
}

if(cljs.core.fn_QMARK_(on_close)){
} else {
throw (new Error(["Assert failed: ","missing `on-close` prop","\n","(fn? on-close)"].join('')));
}

if(cljs.core.vector_QMARK_(options)){
} else {
throw (new Error(["Assert failed: ","missing `options` prop","\n","(vector? options)"].join('')));
}

var width__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(width,"initial");
var min_width__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(min_width,false);
var left__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(left,(0));
var top__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(top,(0));
var route = rumext.v2.deref(app.main.refs.route);
var in_dashboard_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dashboard-projects","dashboard-projects",-425944382),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route)));
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),(0),new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),(0),new cljs.core.Keyword(null,"levels","levels",-950747887),null], null);
}));
var state = cljs.core.deref(state_STAR_);
var offset_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230));
var offset_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008));
var levels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"levels","levels",-950747887));
var internal_id = rumext.v2.use_id();
var on_local_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_close)],(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"levels","levels",-950747887),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"options","options",99638489),options], null)], null));

if(cljs.core.fn_QMARK_(on_close)){
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else {
return null;
}
}));
var props__$1 = {...props, 'onClose':on_local_close};
var ids = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(levels)],(function (){
var last_level = cljs.core.last(levels);
return app.main.ui.components.context_menu_a11y.generate_ids_group(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(last_level),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(last_level));
}));
var check_menu_offscreen = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(top__$1),rumext.v2.adapt(left__$1),rumext.v2.adapt(offset_x),rumext.v2.adapt(offset_y)],(function (node){
if((!((node == null)))){
var bounding_rect = app.util.dom.get_bounding_rect(node);
var window_size = app.util.dom.get_window_size();
var node_height = (bounding_rect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounding_rect,new cljs.core.Keyword(null,"height","height",1025178622)));
var node_width = (bounding_rect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounding_rect,new cljs.core.Keyword(null,"width","width",-384071477)));
var window_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(window_size,new cljs.core.Keyword(null,"height","height",1025178622));
var window_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(window_size,new cljs.core.Keyword(null,"width","width",-384071477));
var target_offset_y = ((((top__$1 + node_height) > window_height))?(- node_height):(0));
var target_offset_x = ((((left__$1 + node_width) > window_width))?(- node_width):(0));
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(target_offset_y,offset_y)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(target_offset_x,offset_x)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),target_offset_y,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),target_offset_x], 0));
} else {
return null;
}
} else {
return null;
}
}));
var enter_submenu = (function (name,options__$1){
return (function (event){
app.util.dom.stop_propagation(event);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"levels","levels",-950747887),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),name,new cljs.core.Keyword(null,"options","options",99638489),options__$1], null)], 0));
});
});
var on_submenu_exit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"levels","levels",-950747887),cljs.core.pop);
}));
var on_key_down = (function (options_original,parent_original){
return (function (event){
var ids__$1 = app.main.ui.components.context_menu_a11y.generate_ids_group(options_original,parent_original);
var first_id = app.util.dom.get_element(cljs.core.first(ids__$1));
var first_element = app.util.dom.get_element(first_id);
var len = cljs.core.count(ids__$1);
var parent = app.util.dom.get_target(event);
var parent_id = app.util.dom.get_attribute(parent,"id");
var option = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__72817_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__72817_SHARP_));
}),options_original);
var sub_options = cljs.core.not_empty(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(option));
var handler = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(option);
var is_back_option_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("go-back-sub-option",parent_id);
if(cljs.core.truth_(app.util.keyboard.home_QMARK_(event))){
if(cljs.core.truth_(first_element)){
app.util.dom.focus_BANG_(first_element);
} else {
}
} else {
}

if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
if(is_back_option_QMARK_){
(on_submenu_exit.cljs$core$IFn$_invoke$arity$1 ? on_submenu_exit.cljs$core$IFn$_invoke$arity$1(event) : on_submenu_exit.call(null,event));
} else {
if(cljs.core.truth_(sub_options)){
app.util.dom.stop_propagation(event);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"levels","levels",-950747887),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(option),new cljs.core.Keyword(null,"options","options",99638489),sub_options], null)], 0));
} else {
app.util.dom.stop_propagation(event);

(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));
}
}
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = is_back_option_QMARK_;
if(and__5023__auto__){
return app.util.keyboard.left_arrow_QMARK_(event);
} else {
return and__5023__auto__;
}
})())){
(on_submenu_exit.cljs$core$IFn$_invoke$arity$1 ? on_submenu_exit.cljs$core$IFn$_invoke$arity$1(event) : on_submenu_exit.call(null,event));
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = sub_options;
if(cljs.core.truth_(and__5023__auto__)){
return app.util.keyboard.right_arrow_QMARK_(event);
} else {
return and__5023__auto__;
}
})())){
app.util.dom.stop_propagation(event);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"levels","levels",-950747887),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(option),new cljs.core.Keyword(null,"options","options",99638489),sub_options], null)], 0));
} else {
}

if(cljs.core.truth_(app.util.keyboard.up_arrow_QMARK_(event))){
var actual_selected_72831 = app.util.dom.get_active();
var actual_id_72832 = app.util.dom.get_attribute(actual_selected_72831,"id");
var actual_index_72833 = app.common.data.index_of(ids__$1,actual_id_72832);
var previous_id_72834 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),actual_index_72833))?cljs.core.last(ids__$1):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids__$1,(actual_index_72833 - (1))));
app.util.dom.focus_BANG_(app.util.dom.get_element(previous_id_72834));
} else {
}

if(cljs.core.truth_(app.util.keyboard.down_arrow_QMARK_(event))){
var actual_selected_72835 = app.util.dom.get_active();
var actual_id_72836 = app.util.dom.get_attribute(actual_selected_72835,"id");
var actual_index_72837 = app.common.data.index_of(ids__$1,actual_id_72836);
var next_id_72838 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((len - (1)),actual_index_72837))?cljs.core.first(ids__$1):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids__$1,((1) + actual_index_72837)));
app.util.dom.focus_BANG_(app.util.dom.get_element(next_id_72838));
} else {
}

if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.keyboard.esc_QMARK_(event);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.keyboard.tab_QMARK_(event);
}
})())){
(on_close.cljs$core$IFn$_invoke$arity$1 ? on_close.cljs$core$IFn$_invoke$arity$1(event) : on_close.call(null,event));

return app.util.dom.focus_BANG_(app.util.dom.get_element(origin));
} else {
return null;
}
});
});
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(options)],(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"levels","levels",-950747887),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"options","options",99638489),options], null)], null));
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(internal_id)],(function (){
return app.util.globals.dispatch_BANG_(app.util.globals.event("penpot:context-menu:open",({"id": internal_id})));
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(internal_id),rumext.v2.adapt(on_local_close)],(function (){
var on_event = (function app$main$ui$components$context_menu_a11y$context_menu_inner_STAR__$_on_event(event){
var temp__5825__auto__ = (event["detail"]);
if(cljs.core.truth_(temp__5825__auto__)){
var detail = temp__5825__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(internal_id,(detail["id"]))){
return (on_local_close.cljs$core$IFn$_invoke$arity$1 ? on_local_close.cljs$core$IFn$_invoke$arity$1(event) : on_local_close.call(null,event));
} else {
return null;
}
} else {
return null;
}
});
app.util.globals.listen("penpot:context-menu:open",on_event);

return cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.util.globals.unlisten,"penpot:context-menu:open",on_event);
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (){
return app.util.timers.schedule_on_idle.cljs$core$IFn$_invoke$arity$1((function (){
return app.util.dom.focus_BANG_(app.util.dom.get_element(cljs.core.first(ids)));
}));
}));

if((!((levels == null)))){
return rumext.v2.create_element(app.main.ui.components.dropdown.dropdown_content_STAR_,props__$1,(function (){var level = cljs.core.peek(levels);
var options__$1 = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(level);
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(level);
return rumext.v2.jsx("div",{'style':{'top':(top__$1 + offset_y),'left':(left__$1 + offset_x)},'onKeyDown':on_key_down(options__$1,parent),'className':(cljs.core.truth_(selectable)?"main_ui_components_context_menu_a11y__is-selectable":"")+" "+"main_ui_components_context_menu_a11y__context-menu"+" "+"main_ui_components_context_menu_a11y__is-open"+" "+(cljs.core.truth_(fixed)?"main_ui_components_context_menu_a11y__fixed":""),'children':rumext.v2.jsxs("ul",{'style':{'width':width__$1},'role':"menu",'ref':check_menu_offscreen,'className':(cljs.core.truth_(min_width__$1)?"main_ui_components_context_menu_a11y__min-width":"")+" "+"main_ui_components_context_menu_a11y__context-menu-items",'children':[(cljs.core.truth_(parent)?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("li",{'id':"go-back-sub-option",'role':"menuitem",'tabIndex':"0",'onKeyDown':app.util.dom.prevent_default,'className':"main_ui_components_context_menu_a11y__context-menu-item",'children':rumext.v2.jsxs("button",{'data-no-close':true,'onClick':on_submenu_exit,'className':"main_ui_components_context_menu_a11y__context-menu-action main_ui_components_context_menu_a11y__submenu-back",'children':[rumext.v2.jsx("span",{'className':"main_ui_components_context_menu_a11y__submenu-icon-back",'children':app.main.ui.icons.arrow}),parent]})}),rumext.v2.jsx("li",{'className':"main_ui_components_context_menu_a11y__separator"})]}):null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__72826){
var vec__72827 = p__72826;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72827,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72827,(1),null);
out_arr__46744__auto__.push((function (){var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(option);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(option);
var sub_options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(option);
var handler = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(option);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(option);
var disabled = new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(option);
if(cljs.core.truth_(name)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
return rumext.v2.jsx("li",{'className':"main_ui_components_context_menu_a11y__separator"},""+"context-item-"+(index ?? ""));
} else {
return rumext.v2.jsx("li",{'id':id,'tabIndex':"0",'role':"menuitem",'onKeyDown':app.util.dom.prevent_default,'className':(cljs.core.truth_((function (){var and__5023__auto__ = selected;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,selected);
} else {
return and__5023__auto__;
}
})())?"main_ui_components_context_menu_a11y__is-selected":"")+" "+(cljs.core.truth_((function (){var and__5023__auto__ = selected;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,selected);
} else {
return and__5023__auto__;
}
})())?"main_ui_components_context_menu_a11y__selected":"")+" "+"main_ui_components_context_menu_a11y__context-menu-item",'children':((cljs.core.not(sub_options))?rumext.v2.jsxs("a",{'title':title,'onClick':(function (p1__72824_SHARP_){
app.util.dom.stop_propagation(p1__72824_SHARP_);

if(cljs.core.truth_(disabled)){
return null;
} else {
(on_close.cljs$core$IFn$_invoke$arity$1 ? on_close.cljs$core$IFn$_invoke$arity$1(p1__72824_SHARP_) : on_close.call(null,p1__72824_SHARP_));

return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(p1__72824_SHARP_) : handler.call(null,p1__72824_SHARP_));
}
}),'data-testid':id,'className':"main_ui_components_context_menu_a11y__context-menu-action"+" "+(cljs.core.truth_(disabled)?"main_ui_components_context_menu_a11y__context-menu-action-disabled":""),'children':[((((in_dashboard_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"Default"))))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.default-team-name"):name),(cljs.core.truth_((function (){var and__5023__auto__ = selected;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,selected);
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx("span",{'className':"main_ui_components_context_menu_a11y__selected-icon",'children':app.main.ui.icons.tick}):null)]}):rumext.v2.jsxs("a",{'data-no-close':true,'onClick':enter_submenu(name,sub_options),'data-testid':id,'className':"main_ui_components_context_menu_a11y__context-menu-action main_ui_components_context_menu_a11y__submenu",'children':[name,rumext.v2.jsx("span",{'className':"main_ui_components_context_menu_a11y__submenu-icon",'children':app.main.ui.icons.arrow})]}))},id);
}
} else {
return null;
}
})());

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(options__$1))]})});
})());
} else {
return null;
}
});

(app.main.ui.components.context_menu_a11y.context_menu_inner_STAR_.displayName = "context-menu-inner*");

app.main.ui.components.context_menu_a11y.context_menu_STAR_ = (function app$main$ui$components$context_menu_a11y$context_menu_STAR_(props_72830){
var show = props_72830.show;
var props = props_72830;
if(cljs.core.boolean_QMARK_(show)){
} else {
throw (new Error(["Assert failed: ","expected `show` prop to be a boolean","\n","(boolean? show)"].join('')));
}

if(show){
return rumext.v2.create_element(app.main.ui.components.context_menu_a11y.context_menu_inner_STAR_,props);
} else {
return null;
}
});

(app.main.ui.components.context_menu_a11y.context_menu_STAR_.displayName = "context-menu*");


//# sourceMappingURL=app.main.ui.components.context_menu_a11y.js.map
