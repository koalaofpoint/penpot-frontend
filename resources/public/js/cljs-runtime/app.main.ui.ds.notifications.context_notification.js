import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.main.ui.ds.notifications.shared.notification_pill.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.notifications.context_notification');
app.main.ui.ds.notifications.context_notification.schema_COLON_context_notification = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"context","context",-830191113)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"appearance","appearance",-216383432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"neutral","neutral",-1941956087),new cljs.core.Keyword(null,"ghost","ghost",-1531157576)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"success","success",1890645906)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-html","is-html",1211759888),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
app.main.ui.ds.notifications.context_notification.context_notification_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.notifications.context_notification.schema_COLON_context_notification);

/**
 * Persistent notifications, they do not disappear.
 * These are contextual messages in specific areas of the tool, usually in modals and Dashboard area, and are mainly informative.
 */
app.main.ui.ds.notifications.context_notification.context_notification_STAR_ = (function app$main$ui$ds$notifications$context_notification$context_notification_STAR_(props_74994){
// ===== start props checking =====;

var res__47117__auto___74995 = app.main.ui.ds.notifications.context_notification.context_notification_STAR__validator(props_74994);
if((!((res__47117__auto___74995 == null)))){
var items__47118__auto___74996 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___74995);
var msg__47122__auto___74997 = ["invalid props on component context-notification*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___74996),"\n"].join('');
throw (new Error(msg__47122__auto___74997));
} else {
}

// ===== end props checking =====;

var children = undefined;
var type = undefined;
var level = undefined;
var is_html = undefined;
var class$ = undefined;
var appearance = undefined;
var props = undefined;
var {"className": class$, "type": type, "appearance": appearance, "level": level, "isHtml": is_html, "children": children, ...props} = props_74994;

var class$__$1 = ""+(class$ ?? "")+" "+("main_ui_ds_notifications_context_notification__contextual-notification"+" "+(cljs.core.truth_(is_html)?"main_ui_ds_notifications_context_notification__contain-html":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.Keyword(null,"default","default",-1987822328)))?"main_ui_ds_notifications_context_notification__level-default":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.Keyword(null,"warning","warning",-1685650671)))?"main_ui_ds_notifications_context_notification__level-warning":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.Keyword(null,"error","error",-978969032)))?"main_ui_ds_notifications_context_notification__level-error":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.Keyword(null,"success","success",1890645906)))?"main_ui_ds_notifications_context_notification__level-success":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.Keyword(null,"info","info",-317069002)))?"main_ui_ds_notifications_context_notification__level-info":"") ?? "");
var level__$1 = ((typeof level === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(level):app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.Keyword(null,"default","default",-1987822328)));
var type__$1 = ((typeof type === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type):app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"context","context",-830191113)));
var appearance__$1 = ((typeof appearance === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(appearance):app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(appearance,new cljs.core.Keyword(null,"neutral","neutral",-1941956087)));
var is_html__$1 = (function (){var or__5025__auto__ = is_html;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return false;
}
})();
var props__$1 = {...props, 'className':class$__$1,'role':"alert",'aria-live':"polite"};
return rumext.v2.create_element("aside",props__$1,rumext.v2.jsx(app.main.ui.ds.notifications.shared.notification_pill.notification_pill_STAR_,{'level':level__$1,'type':type__$1,'isHtml':is_html__$1,'appearance':appearance__$1,'children':children}));
});

(app.main.ui.ds.notifications.context_notification.context_notification_STAR_.displayName = "context-notification*");


//# sourceMappingURL=app.main.ui.ds.notifications.context_notification.js.map
