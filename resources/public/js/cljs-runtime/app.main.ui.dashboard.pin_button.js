import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.icons.js";
import "./app.util.i18n.js";
import "./app.util.object.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.dashboard.pin_button');
app.main.ui.dashboard.pin_button.pin_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_pin_button__icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-pin"})});
app.main.ui.dashboard.pin_button.pin_button_STAR_ = (function app$main$ui$dashboard$pin_button$pin_button_STAR_(props_82307){
var aria_label = (props_82307["aria-label"]);
var is_pinned = props_82307.isPinned;
var class$ = props_82307.className;
var props = props_82307;
var aria_label__$1 = (function (){var or__5025__auto__ = aria_label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.pin-unpin");
}
})();
var class$__$1 = ""+((function (){var or__5025__auto__ = class$;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})() ?? "")+" "+("main_ui_dashboard_pin_button__button"+" "+(cljs.core.truth_(is_pinned)?"main_ui_dashboard_pin_button__button-active":"") ?? "");
var props__$1 = app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.unset_BANG_(app.util.object.clone(props),"isPinned"),"className",class$__$1),"aria-label",aria_label__$1);
return rumext.v2.create_element("button",props__$1,app.main.ui.dashboard.pin_button.pin_icon);
});

(app.main.ui.dashboard.pin_button.pin_button_STAR_.displayName = "pin-button*");


//# sourceMappingURL=app.main.ui.dashboard.pin_button.js.map
