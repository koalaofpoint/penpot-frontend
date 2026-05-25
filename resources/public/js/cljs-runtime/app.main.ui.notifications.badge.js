import "./cljs_env.js";
import "./cljs.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.notifications.badge');
/**
 * They are persistent, informative and non-actionable.
 * They are small messages in specific areas off the app
 */
app.main.ui.notifications.badge.badge_notification = (function app$main$ui$notifications$badge$badge_notification(props_73451){
var is_focus = (props_73451["is-focus"]);
var content = props_73451.content;
var type = props_73451.type;
var size = props_73451.size;
var props = props_73451;
return rumext.v2.jsx("aside",{'className':"main_ui_notifications_badge__badge-notification"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"warning","warning",-1685650671)))?"main_ui_notifications_badge__warning":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"error","error",-978969032)))?"main_ui_notifications_badge__error":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"success","success",1890645906)))?"main_ui_notifications_badge__success":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"info","info",-317069002)))?"main_ui_notifications_badge__info":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(size,new cljs.core.Keyword(null,"small","small",2133478704)))?"main_ui_notifications_badge__small":"")+" "+(cljs.core.truth_(is_focus)?"main_ui_notifications_badge__focus":""),'children':content});
});

(app.main.ui.notifications.badge.badge_notification.displayName = "badge-notification");


//# sourceMappingURL=app.main.ui.notifications.badge.js.map
