import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.tooltip.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.controls.utilities.token_field');
app.main.ui.ds.controls.utilities.token_field.schema_COLON_token_field = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slot-start","slot-start",-777883945),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),cljs.core.some_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-token-key-down","on-token-key-down",-1063466089),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"detach-token","detach-token",2110463361),cljs.core.fn_QMARK_], null)], null);
app.main.ui.ds.controls.utilities.token_field.token_field_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.controls.utilities.token_field.schema_COLON_token_field);

app.main.ui.ds.controls.utilities.token_field.token_field_STAR_ = (function app$main$ui$ds$controls$utilities$token_field$token_field_STAR_(props_78381){
// ===== start props checking =====;

var res__47117__auto___78383 = app.main.ui.ds.controls.utilities.token_field.token_field_STAR__validator(props_78381);
if((!((res__47117__auto___78383 == null)))){
var items__47118__auto___78384 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___78383);
var msg__47122__auto___78385 = ["invalid props on component token-field*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___78384),"\n"].join('');
throw (new Error(msg__47122__auto___78385));
} else {
}

// ===== end props checking =====;

var detach_token = props_78381.detachToken;
var disabled = props_78381.disabled;
var property = props_78381.property;
var on_focus = props_78381.onFocus;
var value = props_78381.value;
var on_blur = props_78381.onBlur;
var token_detach_btn_ref = props_78381.tokenDetachBtnRef;
var on_click = props_78381.onClick;
var label = props_78381.label;
var id = props_78381.id;
var class$ = props_78381.className;
var token_wrapper_ref = props_78381.tokenWrapperRef;
var slot_start = props_78381.slotStart;
var on_token_key_down = props_78381.onTokenKeyDown;
var set_active_QMARK_ = (!((id == null)));
var content = ((set_active_QMARK_)?label:app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.inputs.token-field.no-active-token-option"));
var default_id = rumext.v2.use_id();
var id__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(id,default_id);
var pill_ref = rumext.v2.use_ref(null);
var focus_wrapper = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(disabled)],(function (event){
if(disabled){
return null;
} else {
app.util.dom.prevent_default(event);

return app.util.dom.focus_BANG_(rumext.v2.ref_val(token_wrapper_ref));
}
}));
return rumext.v2.jsx(app.main.ui.ds.tooltip.tooltip_STAR_,{'content':property,'className':"main_ui_ds_controls_utilities_token_field__token-field-wrapper",'triggerRef':token_wrapper_ref,'id':""+(default_id ?? "")+"-input",'children':rumext.v2.jsxs("div",{'aria-labelledby':""+(default_id ?? "")+"-input",'tabIndex':(cljs.core.truth_(disabled)?(-1):(0)),'className':(class$ ?? "")+" "+("main_ui_ds_controls_utilities_token_field__token-field"+" "+(((!((slot_start == null))))?"main_ui_ds_controls_utilities_token_field__with-icon":"")+" "+(cljs.core.truth_(disabled)?"main_ui_ds_controls_utilities_token_field__token-field-disabled":"") ?? ""),'children':[(((!((slot_start == null))))?slot_start:null),rumext.v2.jsx("div",{'className':"main_ui_ds_controls_utilities_token_field__content-wrapper",'children':rumext.v2.jsx(app.main.ui.ds.tooltip.tooltip_STAR_,{'content':content,'triggerRef':pill_ref,'id':""+(id__$1 ?? "")+"-pill",'children':rumext.v2.jsxs("button",{'onClick':on_click,'ref':pill_ref,'disabled':disabled,'aria-labelledby':""+(id__$1 ?? "")+"-pill",'onKeyDown':on_token_key_down,'className':"main_ui_ds_controls_utilities_token_field__pill"+" "+(((!(set_active_QMARK_)))?"main_ui_ds_controls_utilities_token_field__no-set-pill":"")+" "+(cljs.core.truth_(disabled)?"main_ui_ds_controls_utilities_token_field__pill-disabled":""),'children':[value,((set_active_QMARK_)?null:rumext.v2.jsx("div",{'className':"main_ui_ds_controls_utilities_token_field__pill-dot"}))]})})}),((disabled)?null:rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'className':"main_ui_ds_controls_utilities_token_field__invisible-button",'tooltipClass':"main_ui_ds_controls_utilities_token_field__button-tooltip",'icon':app.main.ui.ds.foundations.assets.icon.broken_link,'ref':token_detach_btn_ref,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.inputs.token-field.detach-token"),'onClick':detach_token}))],'onFocus':on_focus,'onBlur':on_blur,'onClick':focus_wrapper,'ref':token_wrapper_ref,'onKeyDown':on_token_key_down,'disabled':disabled})});
});

(app.main.ui.ds.controls.utilities.token_field.token_field_STAR_.displayName = "token-field*");


//# sourceMappingURL=app.main.ui.ds.controls.utilities.token_field.js.map
