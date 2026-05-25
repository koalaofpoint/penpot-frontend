import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.util.dom.js";
import "./app.util.keyboard.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.controls.switch$');
app.main.ui.ds.controls.switch$.schema_COLON_switch = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),cljs.core.fn_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
app.main.ui.ds.controls.switch$.switch_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.controls.switch$.schema_COLON_switch);

app.main.ui.ds.controls.switch$.switch_STAR_ = (function app$main$ui$ds$controls$switch$switch_STAR_(props_78312,ref){
// ===== start props checking =====;

var res__47117__auto___78313 = app.main.ui.ds.controls.switch$.switch_STAR__validator(props_78312);
if((!((res__47117__auto___78313 == null)))){
var items__47118__auto___78315 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___78313);
var msg__47122__auto___78316 = ["invalid props on component switch*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___78315),"\n"].join('');
throw (new Error(msg__47122__auto___78316));
} else {
}

// ===== end props checking =====;

var aria_label = undefined;
var on_change = undefined;
var disabled = undefined;
var default_checked = undefined;
var label = undefined;
var id = undefined;
var class$ = undefined;
var props = undefined;
var {"id": id, "className": class$, "label": label, "aria-label": aria_label, "defaultChecked": default_checked, "onChange": on_change, "disabled": disabled, ...props} = props_78312;

var checked_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(default_checked);
var checked_QMARK_ = cljs.core.deref(checked_STAR_);
var disabled_QMARK_ = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(disabled,false);
var has_label_QMARK_ = (!(cuerdas.core.blank_QMARK_(label)));
var handle_toggle = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change),rumext.v2.adapt(checked_QMARK_),rumext.v2.adapt(disabled_QMARK_)],(function (){
if(cljs.core.truth_(disabled_QMARK_)){
return null;
} else {
var updated_checked_QMARK_ = cljs.core.not(checked_QMARK_);
cljs.core.reset_BANG_(checked_STAR_,updated_checked_QMARK_);

if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(updated_checked_QMARK_) : on_change.call(null,updated_checked_QMARK_));
} else {
return null;
}
}
}));
var handle_keydown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(handle_toggle)],(function (event){
app.util.dom.prevent_default(event);

if(cljs.core.truth_(disabled_QMARK_)){
return null;
} else {
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.keyboard.space_QMARK_(event);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.keyboard.enter_QMARK_(event);
}
})())){
return (handle_toggle.cljs$core$IFn$_invoke$arity$1 ? handle_toggle.cljs$core$IFn$_invoke$arity$1(event) : handle_toggle.call(null,event));
} else {
return null;
}
}
}));
var props__$1 = {...props, 'role':"switch",'aria-label':((has_label_QMARK_)?null:aria_label),'tabIndex':(cljs.core.truth_(disabled_QMARK_)?(-1):(0)),'className':(class$ ?? "")+" "+("main_ui_ds_controls_switch__switch"+" "+((checked_QMARK_ === false)?"main_ui_ds_controls_switch__off":"")+" "+(((checked_QMARK_ == null))?"main_ui_ds_controls_switch__neutral":"")+" "+((checked_QMARK_ === true)?"main_ui_ds_controls_switch__on":"") ?? ""),'aria-checked':checked_QMARK_,'onClick':handle_toggle,'ref':ref,'onKeyDown':handle_keydown,'disabled':disabled_QMARK_};
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(default_checked)],(function (){
return cljs.core.reset_BANG_(checked_STAR_,default_checked);
}));

return rumext.v2.create_element("div",props__$1,rumext.v2.jsx("div",{'id':id,'className':"main_ui_ds_controls_switch__switch-track",'children':rumext.v2.jsx("div",{'className':"main_ui_ds_controls_switch__switch-thumb"})}),((has_label_QMARK_)?rumext.v2.jsx("label",{'htmlFor':id,'className':"main_ui_ds_controls_switch__switch-label",'children':label}):null));
});

(app.main.ui.ds.controls.switch$.switch_STAR_.displayName = "switch*");


//# sourceMappingURL=app.main.ui.ds.controls.switch.js.map
