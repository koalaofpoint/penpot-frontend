import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.util.dom.js";
import "./app.util.keyboard.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.components.search_bar');
app.main.ui.components.search_bar.search_bar_STAR_ = (function app$main$ui$components$search_bar$search_bar_STAR_(props_72843){
var on_change = props_72843.onChange;
var children = props_72843.children;
var on_clear = props_72843.onClear;
var icon_id = props_72843.iconId;
var placeholder = props_72843.placeholder;
var value = props_72843.value;
var id = props_72843.id;
var class$ = props_72843.className;
var auto_focus = props_72843.autoFocus;
var handle_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change)],(function (event){
var value__$1 = app.util.dom.get_target_val(event);
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(value__$1,event) : on_change.call(null,value__$1,event));
}));
var handle_clear = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_clear),rumext.v2.adapt(on_change)],(function (event){
if(cljs.core.truth_(on_clear)){
return (on_clear.cljs$core$IFn$_invoke$arity$1 ? on_clear.cljs$core$IFn$_invoke$arity$1(event) : on_clear.call(null,event));
} else {
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2("",event) : on_change.call(null,"",event));
}
}));
var handle_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var enter_QMARK_ = app.util.keyboard.enter_QMARK_(event);
var esc_QMARK_ = app.util.keyboard.esc_QMARK_(event);
var node = app.util.dom.get_target(event);
if(enter_QMARK_){
app.util.dom.blur_BANG_(node);
} else {
}

if(esc_QMARK_){
return app.util.dom.blur_BANG_(node);
} else {
return null;
}
}));
return rumext.v2.jsxs("span",{'className':"main_ui_components_search_bar__search-box"+" "+(((!((children == null))))?"main_ui_components_search_bar__has-children":""),'children':[children,rumext.v2.jsxs("div",{'className':(class$ ?? "")+" "+("main_ui_components_search_bar__search-input-wrapper" ?? ""),'children':[(cljs.core.truth_(icon_id)?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':icon_id,'size':"s",'className':"main_ui_components_search_bar__icon"}):null),rumext.v2.jsx("input",{'id':id,'onChange':handle_change,'value':value,'autoFocus':auto_focus,'autoComplete':"off",'placeholder':placeholder,'onKeyDown':handle_key_down,'className':"main_ui_components_search_bar__search-input"}),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value))?rumext.v2.jsx("button",{'onClick':handle_clear,'className':"main_ui_components_search_bar__clear-icon",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.delete_text,'size':"s"})}):null)]})]});
});

(app.main.ui.components.search_bar.search_bar_STAR_.displayName = "search-bar*");


//# sourceMappingURL=app.main.ui.components.search_bar.js.map
