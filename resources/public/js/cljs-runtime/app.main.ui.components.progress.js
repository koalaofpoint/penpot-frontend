import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.types.color.js";
import "./app.main.data.common.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.icons.js";
import "./app.util.i18n.js";
import "./app.util.theme.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.components.progress');
app.main.ui.components.progress.neutral_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_components_progress__icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-msg-neutral"})});
app.main.ui.components.progress.error_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_components_progress__icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-delete-text"})});
app.main.ui.components.progress.close_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_components_progress__close-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-close"})});
app.main.ui.components.progress.progress_notification_widget_STAR_ = (function app$main$ui$components$progress$progress_notification_widget_STAR_(props_57987){
var state = rumext.v2.deref(app.main.refs.progress);
var profile = rumext.v2.deref(app.main.refs.profile);
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$3(profile,new cljs.core.Keyword(null,"theme","theme",-1247880880),"dark");
var default_theme_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("dark",theme);
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(state);
var healthy_QMARK_ = new cljs.core.Keyword(null,"healthy","healthy",-215908271).cljs$core$IFn$_invoke$arity$1(state);
var visible_QMARK_ = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(state);
var progress = new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(state);
var hint = new cljs.core.Keyword(null,"hint","hint",439639918).cljs$core$IFn$_invoke$arity$1(state);
var total = new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(state);
var pwidth = (cljs.core.truth_(error_QMARK_)?(280):((progress * (280)) / total));
var color = (cljs.core.truth_(error_QMARK_)?"#ff3277":(cljs.core.truth_(healthy_QMARK_)?((default_theme_QMARK_)?"#7efff5":"#6911d4"):((cljs.core.not(healthy_QMARK_))?"#fe4811":null)));
var background_clr = ((default_theme_QMARK_)?"#2e3434":"#eef0f2");
var toggle_detail_visibility = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.toggle_progress_visibility());
}));
return rumext.v2.jsx(rumext.v2.Fragment,{'children':(cljs.core.truth_(visible_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_components_progress__progress-modal"+" "+(cljs.core.truth_(error_QMARK_)?"main_ui_components_progress__has-error":""),'children':[(cljs.core.truth_(error_QMARK_)?app.main.ui.components.progress.error_icon:app.main.ui.components.progress.neutral_icon),rumext.v2.jsxs("div",{'className':"main_ui_components_progress__title",'children':[rumext.v2.jsx("div",{'className':"main_ui_components_progress__title-text",'children':hint}),(cljs.core.truth_(error_QMARK_)?rumext.v2.jsx("button",{'className':"main_ui_components_progress__retry-btn",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.retry")}):rumext.v2.jsx("span",{'className':"main_ui_components_progress__progress",'children':""+(progress ?? "")+" / "+(total ?? "")}))]}),rumext.v2.jsx("button",{'onClick':toggle_detail_visibility,'className':"main_ui_components_progress__progress-close-button",'children':app.main.ui.components.progress.close_icon}),(cljs.core.truth_(error_QMARK_)?null:rumext.v2.jsx("svg",{'height':(4),'width':(280),'className':"main_ui_components_progress__progress-bar",'children':rumext.v2.jsxs("g",{'children':[rumext.v2.jsx("path",{'d':"M0 0 L280 0",'stroke':background_clr,'strokeWidth':(30)}),rumext.v2.jsx("path",{'d':""+"M0 0 L280 0",'stroke':color,'strokeWidth':(30),'fill':"transparent",'strokeDasharray':(280),'strokeDashoffset':((280) - pwidth),'style':{'transition':"stroke-dashoffset 1s ease-in-out"}})]})}))]}):null)});
});

(app.main.ui.components.progress.progress_notification_widget_STAR_.displayName = "progress-notification-widget*");


//# sourceMappingURL=app.main.ui.components.progress.js.map
