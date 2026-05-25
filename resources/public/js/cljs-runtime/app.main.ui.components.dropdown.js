import "./cljs_env.js";
import "./cljs.core.js";
import "./app.config.js";
import "./app.util.dom.js";
import "./app.util.globals.js";
import "./app.util.keyboard.js";
import "./app.util.timers.js";
import "./goog.events.events.js";
import "./rumext.v2.js";
import "./goog.events.eventtype.js";
goog.provide('app.main.ui.components.dropdown');
app.main.ui.components.dropdown.dropdown_content_STAR_ = (function app$main$ui$components$dropdown$dropdown_content_STAR_(props_71482){
var children = props_71482.children;
var on_close = props_71482.onClose;
var container = props_71482.container;
var listening_ref = rumext.v2.use_ref(null);
var container_ref = container;
var on_click = (function (event){
if(cljs.core.truth_(rumext.v2.ref_val(listening_ref))){
var target = app.util.dom.get_target(event);
var mac_ctrl_click_QMARK_ = ((app.config.check_platform_QMARK_(new cljs.core.Keyword(null,"macos","macos",-1712303293))) && (app.util.keyboard.ctrl_QMARK_(event)));
if((((!(mac_ctrl_click_QMARK_))) && (cljs.core.not(target.data_no_close)))){
if(cljs.core.truth_(container_ref)){
var parent = rumext.v2.ref_val(container_ref);
if(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.not(parent);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return parent.contains(target);
}
})())){
return null;
} else {
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
}
} else {
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
}
} else {
return null;
}
} else {
return null;
}
});
var on_keyup = (function (event){
if(cljs.core.truth_(app.util.keyboard.esc_QMARK_(event))){
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else {
return null;
}
});
var on_mount = (function (){
var keys = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.events.listen(app.util.globals.document,goog.events.EventType.CLICK,on_click),goog.events.listen(app.util.globals.document,goog.events.EventType.CONTEXTMENU,on_click),goog.events.listen(app.util.globals.document,goog.events.EventType.KEYUP,on_keyup)], null);
app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
return rumext.v2.set_ref_val_BANG_(listening_ref,true);
}));

return (function (){
return cljs.core.run_BANG_(goog.events.unlistenByKey,keys);
});
});
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$1(on_mount);

return children;
});

(app.main.ui.components.dropdown.dropdown_content_STAR_.displayName = "dropdown-content*");

app.main.ui.components.dropdown.dropdown = (function app$main$ui$components$dropdown$dropdown(props_71483){
var show = props_71483.show;
var children = props_71483.children;
var on_close = (props_71483["on-close"]);
var container = props_71483.container;
if(cljs.core.fn_QMARK_(on_close)){
} else {
throw (new Error(["Assert failed: ","missing `on-close` prop","\n","(fn? on-close)"].join('')));
}

if(cljs.core.boolean_QMARK_(show)){
} else {
throw (new Error(["Assert failed: ","missing `show` prop","\n","(boolean? show)"].join('')));
}

if(show){
return rumext.v2.jsx(app.main.ui.components.dropdown.dropdown_content_STAR_,{'onClose':on_close,'container':container,'children':children});
} else {
return null;
}
});

(app.main.ui.components.dropdown.dropdown.displayName = "dropdown");


//# sourceMappingURL=app.main.ui.components.dropdown.js.map
