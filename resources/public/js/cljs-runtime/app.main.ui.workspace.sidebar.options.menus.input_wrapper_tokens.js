import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.types.token.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.controls.numeric_input.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens');
app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$input_wrapper_tokens$numeric_input_wrapper_STAR_(props_78453){
var attr = undefined;
var align = undefined;
var placeholder = undefined;
var value = undefined;
var applied_token = undefined;
var input_type = undefined;
var class$ = undefined;
var on_detach = undefined;
var props = undefined;
var {"value": value, "attr": attr, "appliedToken": applied_token, "align": align, "onDetach": on_detach, "placeholder": placeholder, "inputType": input_type, "className": class$, ...props} = props_78453;

var tokens = rumext.v2.use_ctx(app.main.ui.context.active_tokens_by_type);
var tokens__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tokens),rumext.v2.adapt(input_type)],(function (){
return (new cljs.core.Delay((function (){
return cljs.core.not_empty(cljs.core.select_keys(cljs.core.deref(tokens),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.types.token.tokens_by_input,(function (){var or__5025__auto__ = input_type;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return attr;
}
})())));
}),null));
}));
var on_detach_attr = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_detach),rumext.v2.adapt(attr)],(function (p1__78452_SHARP_){
return (on_detach.cljs$core$IFn$_invoke$arity$2 ? on_detach.cljs$core$IFn$_invoke$arity$2(p1__78452_SHARP_,attr) : on_detach.call(null,p1__78452_SHARP_,attr));
}));
var props__$1 = {...props, 'placeholder':(function (){var or__5025__auto__ = placeholder;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),value)){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple");
} else {
return "--";
}
}
})(),'className':(class$ ?? "")+" "+("main_ui_workspace_sidebar_options_menus_input_wrapper_tokens__numeric-input-wrapper" ?? ""),'appliedToken':applied_token,'tokens':((cljs.core.delay_QMARK_(tokens__$1))?cljs.core.deref(tokens__$1):tokens__$1),'align':align,'onDetach':on_detach_attr,'name':attr,'value':value};
return rumext.v2.create_element(app.main.ui.ds.controls.numeric_input.numeric_input_STAR_,props__$1);
});

(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_.displayName = "numeric-input-wrapper*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.js.map
