import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.keyboard.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.dashboard.inline_edition');
app.main.ui.dashboard.inline_edition.inline_edition = (function app$main$ui$dashboard$inline_edition$inline_edition(props_75001){
var map__75002 = rumext.v2.util.wrap_props(props_75001);
var map__75002__$1 = cljs.core.__destructure_map(map__75002);
var props = map__75002__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75002__$1,new cljs.core.Keyword(null,"content","content",15833224));
var on_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75002__$1,new cljs.core.Keyword(null,"on-end","on-end",1933704364));
var max_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75002__$1,new cljs.core.Keyword(null,"max-length","max-length",-254826109));
var name = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(content);
var input_ref = rumext.v2.use_ref();
var on_input = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (event){
return cljs.core.reset_BANG_(name,app.util.dom.get_target_val(event));
}));
var on_cancel = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

var G__75003 = cljs.core.deref(name);
return (on_end.cljs$core$IFn$_invoke$arity$1 ? on_end.cljs$core$IFn$_invoke$arity$1(G__75003) : on_end.call(null,G__75003));
}));
var on_click = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

return app.util.dom.stop_propagation(event);
}));
var on_blur = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (event){
var name__$1 = app.util.dom.get_target_val(event);
return (on_end.cljs$core$IFn$_invoke$arity$1 ? on_end.cljs$core$IFn$_invoke$arity$1(name__$1) : on_end.call(null,name__$1));
}));
var on_keyup = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

if(cljs.core.truth_(app.util.keyboard.esc_QMARK_(event))){
return (on_cancel.cljs$core$IFn$_invoke$arity$0 ? on_cancel.cljs$core$IFn$_invoke$arity$0() : on_cancel.call(null));
} else {
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
var name__$1 = app.util.dom.get_target_val(event);
return (on_end.cljs$core$IFn$_invoke$arity$1 ? on_end.cljs$core$IFn$_invoke$arity$1(name__$1) : on_end.call(null,name__$1));
} else {
return null;
}
}
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
var node = rumext.v2.ref_val(input_ref);
app.util.dom.focus_BANG_(node);

return app.util.dom.select_text_BANG_(node);
}));

return rumext.v2.jsxs("div",{'className':"main_ui_dashboard_inline_edition__edit-wrapper",'children':[rumext.v2.jsx("input",{'value':cljs.core.deref(name),'ref':input_ref,'onClick':on_click,'onChange':on_input,'onKeyDown':on_keyup,'onBlur':on_blur,'maxLength':max_length,'className':"main_ui_dashboard_inline_edition__element-title"}),rumext.v2.jsx("span",{'onClick':on_cancel,'className':"main_ui_dashboard_inline_edition__close",'children':app.main.ui.icons.close})]});
});

(app.main.ui.dashboard.inline_edition.inline_edition.displayName = "inline-edition");


//# sourceMappingURL=app.main.ui.dashboard.inline_edition.js.map
