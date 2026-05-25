import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.main.ui.components.link_button.js";
import "./app.main.ui.icons.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.notifications.context_notification');
app.main.ui.notifications.context_notification.neutral_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_notifications_context_notification__icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-msg-neutral"})});
app.main.ui.notifications.context_notification.error_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_notifications_context_notification__icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-delete-text"})});
app.main.ui.notifications.context_notification.success_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_notifications_context_notification__icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-status-tick"})});
app.main.ui.notifications.context_notification.info_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_notifications_context_notification__icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-help"})});
app.main.ui.notifications.context_notification.get_icon_by_level = (function app$main$ui$notifications$context_notification$get_icon_by_level(level){
var G__73452 = level;
var G__73452__$1 = (((G__73452 instanceof cljs.core.Keyword))?G__73452.fqn:null);
switch (G__73452__$1) {
case "warning":
return app.main.ui.notifications.context_notification.neutral_icon;

break;
case "error":
return app.main.ui.notifications.context_notification.error_icon;

break;
case "success":
return app.main.ui.notifications.context_notification.success_icon;

break;
case "info":
return app.main.ui.notifications.context_notification.info_icon;

break;
default:
return app.main.ui.notifications.context_notification.neutral_icon;

}
});
/**
 * They are persistent, informative and non-actionable.
 *   They are contextual messages in specific areas off the app
 */
app.main.ui.notifications.context_notification.context_notification = (function app$main$ui$notifications$context_notification$context_notification(props_73453){
var links = props_73453.links;
var content = props_73453.content;
var level = props_73453.level;
var is_html = (props_73453["is-html"]);
var class$ = props_73453.class;
var props = props_73453;
return rumext.v2.jsxs("aside",{'className':""+(class$ ?? "")+" "+("main_ui_notifications_context_notification__context-notification"+" "+(cljs.core.truth_(is_html)?"main_ui_notifications_context_notification__contain-html":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.Keyword(null,"warning","warning",-1685650671)))?"main_ui_notifications_context_notification__warning":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.Keyword(null,"error","error",-978969032)))?"main_ui_notifications_context_notification__error":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.Keyword(null,"success","success",1890645906)))?"main_ui_notifications_context_notification__success":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.Keyword(null,"info","info",-317069002)))?"main_ui_notifications_context_notification__info":"") ?? ""),'children':[app.main.ui.notifications.context_notification.get_icon_by_level(level),rumext.v2.jsx("div",{'dangerouslySetInnerHTML':(cljs.core.truth_(is_html)?({"__html": content}):null),'className':"main_ui_notifications_context_notification__context-text",'children':(cljs.core.truth_(is_html)?null:rumext.v2.jsxs(rumext.v2.Fragment,{'children':[content,(((!((links == null))))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__73454){
var vec__73455 = p__73454;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73455,(0),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73455,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.components.link_button.link_button,{'class':"main_ui_notifications_context_notification__link",'on-click':new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(link),'value':new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(link)},""+"link-"+(index ?? "")));

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(links)):null)]}))})]});
});

(app.main.ui.notifications.context_notification.context_notification.displayName = "context-notification");


//# sourceMappingURL=app.main.ui.notifications.context_notification.js.map
