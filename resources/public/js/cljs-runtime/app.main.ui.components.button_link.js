import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.util.keyboard.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.components.button_link');
app.main.ui.components.button_link.button_link = (function app$main$ui$components$button_link$button_link(props_75038){
var icon = props_75038.icon;
var on_click = (props_75038["on-click"]);
var label = props_75038.label;
var class$ = props_75038.class;
var on_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_click)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
if(cljs.core.fn_QMARK_(on_click)){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));
} else {
return null;
}
} else {
return null;
}
}));
return rumext.v2.jsxs("a",{'tabIndex':"0",'onClick':on_click,'onKeyDown':on_key_down,'className':""+(class$ ?? "")+" "+("main_ui_components_button_link__button" ?? ""),'children':[rumext.v2.jsx("span",{'className':"logo",'children':icon}),label]});
});

(app.main.ui.components.button_link.button_link.displayName = "button-link");


//# sourceMappingURL=app.main.ui.components.button_link.js.map
