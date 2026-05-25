import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.controls.utilities.hint_message');
app.main.ui.ds.controls.utilities.hint_message.schema_COLON__COLON_hint_message = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"hint","error","warning"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
app.main.ui.ds.controls.utilities.hint_message.hint_message_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.controls.utilities.hint_message.schema_COLON__COLON_hint_message);

app.main.ui.ds.controls.utilities.hint_message.hint_message_STAR_ = (function app$main$ui$ds$controls$utilities$hint_message$hint_message_STAR_(props_77042){
// ===== start props checking =====;

var res__47117__auto___77049 = app.main.ui.ds.controls.utilities.hint_message.hint_message_STAR__validator(props_77042);
if((!((res__47117__auto___77049 == null)))){
var items__47118__auto___77050 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___77049);
var msg__47122__auto___77051 = ["invalid props on component hint-message*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___77050),"\n"].join('');
throw (new Error(msg__47122__auto___77051));
} else {
}

// ===== end props checking =====;

var message = undefined;
var type = undefined;
var id = undefined;
var class$ = undefined;
var props = undefined;
var {"id": id, "className": class$, "message": message, "type": type, ...props} = props_77042;

var type__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"hint","hint",439639918));
return rumext.v2.jsx("div",{'className':""+(class$ ?? "")+" "+("main_ui_ds_controls_utilities_hint_message__hint-message"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"hint"))?"main_ui_ds_controls_utilities_hint_message__type-hint":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"warning"))?"main_ui_ds_controls_utilities_hint_message__type-warning":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"error"))?"main_ui_ds_controls_utilities_hint_message__type-error":"") ?? ""),'aria-live':((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"warning")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"error"))))?"polite":null),'children':(((!((message == null))))?rumext.v2.jsx("span",{'id':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-hint"].join(''),'className':"main_ui_ds_controls_utilities_hint_message__hint-message-text",'children':message}):null)});
});

(app.main.ui.ds.controls.utilities.hint_message.hint_message_STAR_.displayName = "hint-message*");


//# sourceMappingURL=app.main.ui.ds.controls.utilities.hint_message.js.map
