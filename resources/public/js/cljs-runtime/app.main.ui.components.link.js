import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.util.keyboard.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.components.link');
app.main.ui.components.link.link = (function app$main$ui$components$link$link(props_75025){
var keyboard_action = (props_75025["keyboard-action"]);
var children = props_75025.children;
var data_testid = (props_75025["data-testid"]);
var class$ = props_75025.class;
var action = props_75025.action;
var keyboard_action__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(keyboard_action,action);
return rumext.v2.jsx("a",{'onClick':action,'onKeyDown':(function (event){
if(app.util.keyboard.enter_QMARK_(event)){
return (keyboard_action__$1.cljs$core$IFn$_invoke$arity$1 ? keyboard_action__$1.cljs$core$IFn$_invoke$arity$1(event) : keyboard_action__$1.call(null,event));
} else {
return null;
}
}),'tabIndex':"0",'data-testid':data_testid,'className':class$,'children':children});
});

(app.main.ui.components.link.link.displayName = "link");


//# sourceMappingURL=app.main.ui.components.link.js.map
