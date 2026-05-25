import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.notifications.shared.notification_pill.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.notifications.toast');
app.main.ui.ds.notifications.toast.schema_COLON_toast = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"context","context",-830191113)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"success","success",1890645906)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"appearance","appearance",-216383432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"neutral","neutral",-1941956087),new cljs.core.Keyword(null,"ghost","ghost",-1531157576)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-html","is-html",1211759888),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-detail","show-detail",-635170891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-detail","on-toggle-detail",-479335726),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),cljs.core.fn_QMARK_], null)], null)], null);
app.main.ui.ds.notifications.toast.toast_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.notifications.toast.schema_COLON_toast);

app.main.ui.ds.notifications.toast.toast_STAR_ = (function app$main$ui$ds$notifications$toast$toast_STAR_(props_82868){
// ===== start props checking =====;

var res__47117__auto___82870 = app.main.ui.ds.notifications.toast.toast_STAR__validator(props_82868);
if((!((res__47117__auto___82870 == null)))){
var items__47118__auto___82871 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___82870);
var msg__47122__auto___82872 = ["invalid props on component toast*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___82871),"\n"].join('');
throw (new Error(msg__47122__auto___82872));
} else {
}

// ===== end props checking =====;

var detail = undefined;
var children = undefined;
var on_close = undefined;
var type = undefined;
var level = undefined;
var is_html = undefined;
var on_toggle_detail = undefined;
var class$ = undefined;
var show_detail = undefined;
var appearance = undefined;
var props = undefined;
var {"detail": detail, "children": children, "onClose": on_close, "type": type, "level": level, "isHtml": is_html, "onToggleDetail": on_toggle_detail, "className": class$, "showDetail": show_detail, "appearance": appearance, ...props} = props_82868;

var class$__$1 = ""+(class$ ?? "")+" "+("main_ui_ds_notifications_toast__toast" ?? "");
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
return rumext.v2.create_element("aside",props__$1,rumext.v2.jsx(app.main.ui.ds.notifications.shared.notification_pill.notification_pill_STAR_,{'level':level__$1,'type':type__$1,'isHtml':is_html__$1,'appearance':appearance__$1,'detail':detail,'showDetail':show_detail,'onToggleDetail':on_toggle_detail,'children':children}),rumext.v2.jsx("button",{'onClick':on_close,'aria-label':"Close",'className':"main_ui_ds_notifications_toast__close-button"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level__$1,new cljs.core.Keyword(null,"default","default",-1987822328)))?"main_ui_ds_notifications_toast__level-default":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671)))?"main_ui_ds_notifications_toast__level-warning":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level__$1,new cljs.core.Keyword(null,"error","error",-978969032)))?"main_ui_ds_notifications_toast__level-error":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level__$1,new cljs.core.Keyword(null,"success","success",1890645906)))?"main_ui_ds_notifications_toast__level-success":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level__$1,new cljs.core.Keyword(null,"info","info",-317069002)))?"main_ui_ds_notifications_toast__level-info":""),'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.close})}));
});

(app.main.ui.ds.notifications.toast.toast_STAR_.displayName = "toast*");


//# sourceMappingURL=app.main.ui.ds.notifications.toast.js.map
