import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.config.js";
import "./app.main.store.js";
import "./app.util.dom.js";
import "./app.util.globals.js";
import "./app.util.keyboard.js";
import "./beicon.v2.core.js";
import "./goog.events.events.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
import "./goog.events.eventtype.js";
goog.provide('app.main.ui.components.dropdown_menu');
app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_ = (function app$main$ui$components$dropdown_menu$dropdown_menu_item_STAR_(props_73197){
var can_focus = undefined;
var props = undefined;
var {"canFocus": can_focus, ...props} = props_73197;

var can_focus__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(can_focus,true);
var tab_index = (cljs.core.truth_(can_focus__$1)?"0":"-1");
var props__$1 = {...props, 'role':"menuitem",'tabIndex':tab_index};
return rumext.v2.create_element("li",props__$1);
});

(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_.displayName = "dropdown-menu-item*");

app.main.ui.components.dropdown_menu.internal_dropdown_menu_STAR_ = (function app$main$ui$components$dropdown_menu$internal_dropdown_menu_STAR_(props_73201){
var children = props_73201.children;
var on_close = props_73201.onClose;
var id = props_73201.id;
var class$ = props_73201.className;
if(cljs.core.fn_QMARK_(on_close)){
} else {
throw (new Error(["Assert failed: ","missing `on-close` prop","\n","(fn? on-close)"].join('')));
}

var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_close)],(function (event){
var target = app.util.dom.get_target(event);
var mac_ctrl_click_QMARK_ = ((app.config.check_platform_QMARK_(new cljs.core.Keyword(null,"macos","macos",-1712303293))) && (app.util.keyboard.ctrl_QMARK_(event)));
if((((!(mac_ctrl_click_QMARK_))) && (((cljs.core.not(target.data_no_close)) && (cljs.core.fn_QMARK_(on_close)))))){
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else {
return null;
}
}));
var container = rumext.v2.use_ref();
var on_keyup = (function (event){
if(cljs.core.truth_(app.util.keyboard.esc_QMARK_(event))){
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else {
return null;
}
});
var on_key_down = (function (event){
var temp__5825__auto__ = rumext.v2.ref_val(container);
if(cljs.core.truth_(temp__5825__auto__)){
var container__$1 = temp__5825__auto__;
var entries = cljs.core.vec(app.util.dom.query_all.cljs$core$IFn$_invoke$arity$2(container__$1,"[role=menuitem]"));
if(cljs.core.truth_(app.util.keyboard.up_arrow_QMARK_(event))){
var selected = app.util.dom.get_active();
var index = app.common.data.index_of_pred(entries,(function (p1__73198_SHARP_){
return (p1__73198_SHARP_ === selected);
}));
var target = (((index == null))?cljs.core.peek(entries):(function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries,(index - (1)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.peek(entries);
}
})());
return app.util.dom.focus_BANG_(target);
} else {
if(cljs.core.truth_(app.util.keyboard.down_arrow_QMARK_(event))){
var selected = app.util.dom.get_active();
var index = app.common.data.index_of_pred(entries,(function (p1__73199_SHARP_){
return (p1__73199_SHARP_ === selected);
}));
var target = (((index == null))?cljs.core.first(entries):(function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries,(index + (1)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.first(entries);
}
})());
return app.util.dom.focus_BANG_(target);
} else {
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
var selected = app.util.dom.get_active();
app.util.dom.prevent_default(event);

return app.util.dom.click_BANG_(selected);
} else {
if(cljs.core.truth_(app.util.keyboard.tab_QMARK_(event))){
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else {
return null;
}
}
}
}
} else {
return null;
}
});
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id)],(function (){
if(cljs.core.truth_(id)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dropdown","open","dropdown/open",824533839),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)));
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_close),rumext.v2.adapt(id)],(function (){
if(cljs.core.truth_(id)){
var stream = beicon.v2.core.take((1),beicon.v2.core.filter((function (p1__73200_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__73200_SHARP_));
}),beicon.v2.core.map(cljs.core.deref,beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dropdown","open","dropdown/open",824533839)),app.main.store.stream))));
var subs = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$4(null,null,on_close,stream);
return (function (){
return beicon.v2.core.dispose_BANG_(subs);
});
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var keys = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.events.listen(app.util.globals.document,goog.events.EventType.CLICK,on_click),goog.events.listen(app.util.globals.document,goog.events.EventType.CONTEXTMENU,on_click),goog.events.listen(app.util.globals.document,goog.events.EventType.KEYUP,on_keyup),goog.events.listen(app.util.globals.document,goog.events.EventType.KEYDOWN,on_key_down)], null);
return (function (){
var seq__73212 = cljs.core.seq(keys);
var chunk__73213 = null;
var count__73214 = (0);
var i__73215 = (0);
while(true){
if((i__73215 < count__73214)){
var key = chunk__73213.cljs$core$IIndexed$_nth$arity$2(null,i__73215);
goog.events.unlistenByKey(key);


var G__73236 = seq__73212;
var G__73237 = chunk__73213;
var G__73238 = count__73214;
var G__73239 = (i__73215 + (1));
seq__73212 = G__73236;
chunk__73213 = G__73237;
count__73214 = G__73238;
i__73215 = G__73239;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__73212);
if(temp__5825__auto__){
var seq__73212__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73212__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__73212__$1);
var G__73240 = cljs.core.chunk_rest(seq__73212__$1);
var G__73241 = c__5548__auto__;
var G__73242 = cljs.core.count(c__5548__auto__);
var G__73243 = (0);
seq__73212 = G__73240;
chunk__73213 = G__73241;
count__73214 = G__73242;
i__73215 = G__73243;
continue;
} else {
var key = cljs.core.first(seq__73212__$1);
goog.events.unlistenByKey(key);


var G__73244 = cljs.core.next(seq__73212__$1);
var G__73245 = null;
var G__73246 = (0);
var G__73247 = (0);
seq__73212 = G__73244;
chunk__73213 = G__73245;
count__73214 = G__73246;
i__73215 = G__73247;
continue;
}
} else {
return null;
}
}
break;
}
});
}));

return rumext.v2.jsx("ul",{'role':"menu",'ref':container,'className':class$,'children':children});
});

(app.main.ui.components.dropdown_menu.internal_dropdown_menu_STAR_.displayName = "internal-dropdown-menu*");

app.main.ui.components.dropdown_menu.dropdown_menu_STAR_ = (function app$main$ui$components$dropdown_menu$dropdown_menu_STAR_(props_73224){
var show = props_73224.show;
var props = props_73224;
if(cljs.core.truth_(show)){
return rumext.v2.create_element(app.main.ui.components.dropdown_menu.internal_dropdown_menu_STAR_,props);
} else {
return null;
}
});

(app.main.ui.components.dropdown_menu.dropdown_menu_STAR_.displayName = "dropdown-menu*");


//# sourceMappingURL=app.main.ui.components.dropdown_menu.js.map
