import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.main.ui.components.link_button.js";
import "./app.main.ui.ds.notifications.actionable.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.notifications.inline_notification');
/**
 * They are persistent messages and report a special situation
 * of the application and require user interaction to disappear.
 */
app.main.ui.notifications.inline_notification.inline_notification = (function app$main$ui$notifications$inline_notification$inline_notification(props_82879){
var links = props_82879.links;
var accept = props_82879.accept;
var content = props_82879.content;
var cancel = props_82879.cancel;
var props = props_82879;
return rumext.v2.jsxs(app.main.ui.ds.notifications.actionable.actionable_STAR_,{'className':"main_ui_notifications_inline_notification__new-inline",'cancelLabel':new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cancel),'onCancel':new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(cancel),'acceptLabel':new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(accept),'onAccept':new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(accept),'children':[content,(((!((links == null))))?rumext.v2.jsx("nav",{'className':"main_ui_notifications_inline_notification__link-nav",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__82880){
var vec__82881 = p__82880;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82881,(0),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82881,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.components.link_button.link_button,{'class':"main_ui_notifications_inline_notification__link",'on-click':new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(link),'value':new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(link)},""+"link-"+(index ?? "")));

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(links))}):null)]});
});

(app.main.ui.notifications.inline_notification.inline_notification.displayName = "inline-notification");


//# sourceMappingURL=app.main.ui.notifications.inline_notification.js.map
