import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.notifications.shared.notification_pill');
app.main.ui.ds.notifications.shared.notification_pill.icons_by_level = (function app$main$ui$ds$notifications$shared$notification_pill$icons_by_level(level){
var G__74961 = level;
var G__74961__$1 = (((G__74961 instanceof cljs.core.Keyword))?G__74961.fqn:null);
switch (G__74961__$1) {
case "info":
return app.main.ui.ds.foundations.assets.icon.info;

break;
case "default":
return app.main.ui.ds.foundations.assets.icon.info;

break;
case "warning":
return app.main.ui.ds.foundations.assets.icon.msg_neutral;

break;
case "error":
return app.main.ui.ds.foundations.assets.icon.delete_text;

break;
case "success":
return app.main.ui.ds.foundations.assets.icon.status_tick;

break;
default:
return app.main.ui.ds.foundations.assets.icon.info;

}
});
app.main.ui.ds.notifications.shared.notification_pill.schema_COLON_notification_pill = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"success","success",1890645906)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"context","context",-830191113)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"appearance","appearance",-216383432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"neutral","neutral",-1941956087),new cljs.core.Keyword(null,"ghost","ghost",-1531157576)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-html","is-html",1211759888),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-detail","show-detail",-635170891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-detail","on-toggle-detail",-479335726),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),cljs.core.fn_QMARK_], null)], null)], null);
app.main.ui.ds.notifications.shared.notification_pill.notification_pill_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.notifications.shared.notification_pill.schema_COLON_notification_pill);

app.main.ui.ds.notifications.shared.notification_pill.notification_pill_STAR_ = (function app$main$ui$ds$notifications$shared$notification_pill$notification_pill_STAR_(props_74963){
// ===== start props checking =====;

var res__47117__auto___74978 = app.main.ui.ds.notifications.shared.notification_pill.notification_pill_STAR__validator(props_74963);
if((!((res__47117__auto___74978 == null)))){
var items__47118__auto___74979 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___74978);
var msg__47122__auto___74980 = ["invalid props on component notification-pill*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___74979),"\n"].join('');
throw (new Error(msg__47122__auto___74980));
} else {
}

// ===== end props checking =====;

var detail = props_74963.detail;
var children = props_74963.children;
var type = props_74963.type;
var level = props_74963.level;
var is_html = props_74963.isHtml;
var on_toggle_detail = props_74963.onToggleDetail;
var show_detail = props_74963.showDetail;
var appearance = props_74963.appearance;
var class$ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(appearance,new cljs.core.Keyword(null,"neutral","neutral",-1941956087)))?"main_ui_ds_notifications_shared_notification_pill__appearance-neutral":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(appearance,new cljs.core.Keyword(null,"ghost","ghost",-1531157576)))?"main_ui_ds_notifications_shared_notification_pill__appearance-ghost":"")+" "+(cljs.core.truth_(detail)?"main_ui_ds_notifications_shared_notification_pill__with-detail":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"toast","toast",68598129)))?"main_ui_ds_notifications_shared_notification_pill__type-toast":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"context","context",-830191113)))?"main_ui_ds_notifications_shared_notification_pill__type-context":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.Keyword(null,"default","default",-1987822328)))?"main_ui_ds_notifications_shared_notification_pill__level-default":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.Keyword(null,"warning","warning",-1685650671)))?"main_ui_ds_notifications_shared_notification_pill__level-warning":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.Keyword(null,"error","error",-978969032)))?"main_ui_ds_notifications_shared_notification_pill__level-error":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.Keyword(null,"success","success",1890645906)))?"main_ui_ds_notifications_shared_notification_pill__level-success":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.Keyword(null,"info","info",-317069002)))?"main_ui_ds_notifications_shared_notification_pill__level-info":"");
var is_html__$1 = (function (){var or__5025__auto__ = is_html;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return false;
}
})();
var icon_id = app.main.ui.ds.notifications.shared.notification_pill.icons_by_level(level);
return rumext.v2.jsxs("div",{'className':""+(class$ ?? "")+" "+("main_ui_ds_notifications_shared_notification_pill__notification-pill" ?? ""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_ds_notifications_shared_notification_pill__error-message",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':icon_id,'className':"main_ui_ds_notifications_shared_notification_pill__icon"}),(cljs.core.truth_(is_html__$1)?rumext.v2.jsx("div",{'dangerouslySetInnerHTML':({"__html": children}),'className':"main_ui_ds_notifications_shared_notification_pill__context-text"}):children)]}),(cljs.core.truth_(detail)?rumext.v2.jsxs("div",{'className':"main_ui_ds_notifications_shared_notification_pill__error-detail",'children':[rumext.v2.jsxs("div",{'className':"main_ui_ds_notifications_shared_notification_pill__error-detail-title",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'icon':(cljs.core.truth_(show_detail)?"arrow-down":"arrow"),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.notification-pill.detail"),'iconClass':"main_ui_ds_notifications_shared_notification_pill__expand-icon",'variant':"action",'onClick':on_toggle_detail}),rumext.v2.jsx("div",{'onClick':on_toggle_detail,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.notification-pill.detail")})]}),(cljs.core.truth_(show_detail)?rumext.v2.jsx("div",{'dangerouslySetInnerHTML':({"__html": detail}),'className':"main_ui_ds_notifications_shared_notification_pill__error-detail-content"}):null)]}):null)]});
});

(app.main.ui.ds.notifications.shared.notification_pill.notification_pill_STAR_.displayName = "notification-pill*");


//# sourceMappingURL=app.main.ui.ds.notifications.shared.notification_pill.js.map
