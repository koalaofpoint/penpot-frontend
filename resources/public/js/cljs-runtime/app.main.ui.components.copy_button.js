import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.ui.icons.js";
import "./app.util.clipboard.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.timers.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.components.copy_button');
app.main.ui.components.copy_button.copy_button_STAR_ = (function app$main$ui$components$copy_button$copy_button_STAR_(props_74640){
var aria_label = (props_74640["aria-label"]);
var data = props_74640.data;
var children = props_74640.children;
var on_copied = props_74640.onCopied;
var class$ = props_74640.className;
var active_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var active_QMARK_ = cljs.core.deref(active_STAR_);
var class$__$1 = ""+(class$ ?? "")+" "+((((!((!((children == null))))))?"main_ui_components_copy_button__copy-button":"")+" "+(((!((children == null))))?"main_ui_components_copy_button__copy-wrapper":"") ?? "");
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(data)],(function (event){
if(cljs.core.truth_(app.util.dom.get_boolean_data(event,"active"))){
return null;
} else {
cljs.core.reset_BANG_(active_STAR_,true);

app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((1000),(function (){
return cljs.core.reset_BANG_(active_STAR_,false);
}));

if(cljs.core.fn_QMARK_(on_copied)){
(on_copied.cljs$core$IFn$_invoke$arity$1 ? on_copied.cljs$core$IFn$_invoke$arity$1(event) : on_copied.call(null,event));
} else {
}

return app.util.clipboard.to_clipboard(((cljs.core.fn_QMARK_(data))?(data.cljs$core$IFn$_invoke$arity$0 ? data.cljs$core$IFn$_invoke$arity$0() : data.call(null)):data));
}
}));
return rumext.v2.jsxs("button",{'aria-label':(function (){var or__5025__auto__ = aria_label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.copy");
}
})(),'data-active':""+(active_QMARK_ ?? ""),'onClick':on_click,'className':class$__$1,'children':[children,rumext.v2.jsx("span",{'className':"main_ui_components_copy_button__icon-btn",'children':(cljs.core.truth_(active_QMARK_)?app.main.ui.icons.tick:app.main.ui.icons.clipboard)})]});
});

(app.main.ui.components.copy_button.copy_button_STAR_.displayName = "copy-button*");


//# sourceMappingURL=app.main.ui.components.copy_button.js.map
