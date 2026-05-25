import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.notifications.js";
import "./app.main.store.js";
import "./app.main.ui.ds.notifications.toast.js";
import "./app.main.ui.notifications.context_notification.js";
import "./app.main.ui.notifications.inline_notification.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.notifications');
app.main.ui.notifications.ref_COLON_notification = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"notification","notification",-222338233),app.main.store.state);
app.main.ui.notifications.current_notification_STAR_ = (function app$main$ui$notifications$current_notification_STAR_(props_82884){
var notification = rumext.v2.deref(app.main.ui.notifications.ref_COLON_notification);
var on_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.hide());
}));
var actionable_QMARK_ = (((new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(notification) == null)) && ((new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(notification) == null)));
var inline_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(notification))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"floating","floating",-1978091029),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(notification))));
var toast_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(notification))) || ((!((new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(notification) == null)))));
var content = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(notification);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})();
var show_detail_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var handle_toggle_detail = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_detail_STAR_,cljs.core.not);
}));
if(cljs.core.truth_(notification)){
if(toast_QMARK_){
return rumext.v2.jsx(app.main.ui.ds.notifications.toast.toast_STAR_,{'level':(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(notification);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"info","info",-317069002);
}
})(),'type':new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(notification),'detail':new cljs.core.Keyword(null,"detail","detail",-1545345025).cljs$core$IFn$_invoke$arity$1(notification),'onClose':on_close,'showDetail':cljs.core.deref(show_detail_STAR_),'onToggleDetail':handle_toggle_detail,'children':content});
} else {
if(inline_QMARK_){
return rumext.v2.jsx(app.main.ui.notifications.inline_notification.inline_notification,{'accept':new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(notification),'cancel':new cljs.core.Keyword(null,"cancel","cancel",-1964088360).cljs$core$IFn$_invoke$arity$1(notification),'links':new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(notification),'content':new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(notification)});
} else {
if(actionable_QMARK_){
return rumext.v2.jsx(app.main.ui.notifications.context_notification.context_notification,{'level':(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(notification);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"info","info",-317069002);
}
})(),'links':new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(notification),'content':new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(notification)});
} else {
return rumext.v2.jsx(app.main.ui.ds.notifications.toast.toast_STAR_,{'level':(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(notification);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"info","info",-317069002);
}
})(),'type':new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(notification),'detail':new cljs.core.Keyword(null,"detail","detail",-1545345025).cljs$core$IFn$_invoke$arity$1(notification),'onClose':on_close,'children':content});

}
}
}
} else {
return null;
}
});

(app.main.ui.notifications.current_notification_STAR_.displayName = "current-notification*");


//# sourceMappingURL=app.main.ui.notifications.js.map
