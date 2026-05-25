import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.ui.ds.buttons.button.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.notifications.actionable');
app.main.ui.ds.notifications.actionable.schema_COLON_actionable = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"default","error"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel-label","cancel-label",-1093310551),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-accept","on-accept",705439955),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.fn_QMARK_], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.fn_QMARK_], null)], null)], null)], null);
app.main.ui.ds.notifications.actionable.actionable_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.notifications.actionable.schema_COLON_actionable);

app.main.ui.ds.notifications.actionable.actionable_STAR_ = (function app$main$ui$ds$notifications$actionable$actionable_STAR_(props_82875){
// ===== start props checking =====;

var res__47117__auto___82876 = app.main.ui.ds.notifications.actionable.actionable_STAR__validator(props_82875);
if((!((res__47117__auto___82876 == null)))){
var items__47118__auto___82877 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___82876);
var msg__47122__auto___82878 = ["invalid props on component actionable*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___82877),"\n"].join('');
throw (new Error(msg__47122__auto___82878));
} else {
}

// ===== end props checking =====;

var on_cancel = undefined;
var children = undefined;
var variant = undefined;
var accept_label = undefined;
var cancel_label = undefined;
var on_accept = undefined;
var class$ = undefined;
var props = undefined;
var {"className": class$, "variant": variant, "acceptLabel": accept_label, "cancelLabel": cancel_label, "children": children, "onAccept": on_accept, "onCancel": on_cancel, ...props} = props_82875;

var variant__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(variant,"default");
var class$__$1 = app.common.data.append_class(class$,"main_ui_ds_notifications_actionable__notification");
var props__$1 = {...props, 'className':class$__$1,'data-testid':"actionable"};
var on_accept__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (e){
if(cljs.core.fn_QMARK_(on_accept)){
return (on_accept.cljs$core$IFn$_invoke$arity$1 ? on_accept.cljs$core$IFn$_invoke$arity$1(e) : on_accept.call(null,e));
} else {
return null;
}
}));
var on_cancel__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (e){
if(cljs.core.truth_(on_cancel)){
return (on_cancel.cljs$core$IFn$_invoke$arity$1 ? on_cancel.cljs$core$IFn$_invoke$arity$1(e) : on_cancel.call(null,e));
} else {
return null;
}
}));
return rumext.v2.create_element("aside",props__$1,rumext.v2.jsx("div",{'className':"main_ui_ds_notifications_actionable__notification-message",'children':children}),(cljs.core.truth_(cancel_label)?rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"secondary",'type':"button",'onClick':on_cancel__$1,'children':cancel_label}):null),(cljs.core.truth_(accept_label)?rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant__$1,"default"))?"primary":"destructive"),'type':"button",'onClick':on_accept__$1,'children':accept_label}):null));
});

(app.main.ui.ds.notifications.actionable.actionable_STAR_.displayName = "actionable*");


//# sourceMappingURL=app.main.ui.ds.notifications.actionable.js.map
