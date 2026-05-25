import "./cljs_env.js";
import "./cljs.core.js";
import "./app.util.keyboard.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.components.link_button');
app.main.ui.components.link_button.link_button = (function app$main$ui$components$link_button$link_button(props_72842){
var value = props_72842.value;
var on_click = (props_72842["on-click"]);
var data_testid = (props_72842["data-testid"]);
var class$ = props_72842.class;
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
return rumext.v2.jsx("input",{'type':"button",'value':value,'tabIndex':"0",'onClick':on_click,'onKeyDown':on_key_down,'data-testid':data_testid,'className':class$});
});

(app.main.ui.components.link_button.link_button.displayName = "link-button");


//# sourceMappingURL=app.main.ui.components.link_button.js.map
