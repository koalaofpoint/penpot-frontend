import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.main.data.workspace.js";
import "./app.main.store.js";
import "./app.main.ui.ds.product.panel_title.js";
import "./app.main.ui.icons.js";
import "./app.util.debug.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.debug');
app.main.ui.workspace.sidebar.debug.debug_panel_STAR_ = (function app$main$ui$workspace$sidebar$debug$debug_panel_STAR_(props_55232){
var class$ = props_55232.className;
var on_toggle_enabled = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event,option){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

app.util.debug.toggle_BANG_(option);

return app.main.reinit(true);
}));
var handle_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.remove_layout_flag(new cljs.core.Keyword(null,"debug-panel","debug-panel",-1624930518)));
}));
return rumext.v2.jsxs("div",{'className':""+(class$ ?? "")+" "+("main_ui_workspace_sidebar_debug__debug-panel" ?? ""),'children':[rumext.v2.jsx(app.main.ui.ds.product.panel_title.panel_title_STAR_,{'className':"main_ui_workspace_sidebar_debug__debug-panel-title",'text':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.debug.title"),'onClose':handle_close}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_debug__debug-panel-inner",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,option){
out_arr__35152__auto__.push(rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_debug__checkbox-wrapper",'children':[rumext.v2.jsx("span",{'onClick':(function (p1__55230_SHARP_){
return (on_toggle_enabled.cljs$core$IFn$_invoke$arity$2 ? on_toggle_enabled.cljs$core$IFn$_invoke$arity$2(p1__55230_SHARP_,option) : on_toggle_enabled.call(null,p1__55230_SHARP_,option));
}),'className':"main_ui_workspace_sidebar_debug__checkbox-icon"+" "+((app.util.debug.enabled_QMARK_(option))?"checked":""),'children':((app.util.debug.enabled_QMARK_(option))?app.main.ui.icons.status_tick:null)}),rumext.v2.jsx("input",{'type':"checkbox",'id':app.common.data.name(option),'onChange':(function (p1__55231_SHARP_){
return (on_toggle_enabled.cljs$core$IFn$_invoke$arity$2 ? on_toggle_enabled.cljs$core$IFn$_invoke$arity$2(p1__55231_SHARP_,option) : on_toggle_enabled.call(null,p1__55231_SHARP_,option));
}),'checked':app.util.debug.enabled_QMARK_(option)},app.common.data.name(option)),rumext.v2.jsx("label",{'htmlFor':app.common.data.name(option),'children':app.common.data.name(option)})]},app.common.data.name(option)));

return out_arr__35152__auto__;
}),[],cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(app.common.data.name,app.util.debug.options))})]});
});

(app.main.ui.workspace.sidebar.debug.debug_panel_STAR_.displayName = "debug-panel*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.debug.js.map
