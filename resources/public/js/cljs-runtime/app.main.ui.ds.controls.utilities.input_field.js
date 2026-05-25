import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.constants.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.tooltip.js";
import "./app.util.dom.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.controls.utilities.input_field');
app.main.ui.ds.controls.utilities.input_field.schema_COLON_input_field = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__77040_SHARP_){
return cljs.core.contains_QMARK_(app.main.ui.ds.foundations.assets.icon.icon_list,p1__77040_SHARP_);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"has-hint","has-hint",-1178757960),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint-type","hint-type",-546671026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"hint","error","warning"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-length","max-length",-254826109),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"seamless","dense","comfortable"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slot-start","slot-start",-777883945),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),cljs.core.some_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slot-end","slot-end",-295342166),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),cljs.core.some_QMARK_], null)], null)], null);
app.main.ui.ds.controls.utilities.input_field.input_field_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.controls.utilities.input_field.schema_COLON_input_field);

app.main.ui.ds.controls.utilities.input_field.input_field_STAR_ = rumext.v2.forward_ref((function app$main$ui$ds$controls$utilities$input_field$input_field_STAR_(props_77043,ref){
// ===== start props checking =====;

var res__47117__auto___77052 = app.main.ui.ds.controls.utilities.input_field.input_field_STAR__validator(props_77043);
if((!((res__47117__auto___77052 == null)))){
var items__47118__auto___77053 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___77052);
var msg__47122__auto___77054 = ["invalid props on component input-field*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___77053),"\n"].join('');
throw (new Error(msg__47122__auto___77054));
} else {
}

// ===== end props checking =====;

var aria_label = undefined;
var max_length = undefined;
var variant = undefined;
var slot_end = undefined;
var type = undefined;
var icon = undefined;
var hint_type = undefined;
var id = undefined;
var class$ = undefined;
var slot_start = undefined;
var has_hint = undefined;
var props = undefined;
var {"aria-label": aria_label, "maxLength": max_length, "variant": variant, "slotEnd": slot_end, "type": type, "icon": icon, "hintType": hint_type, "id": id, "className": class$, "slotStart": slot_start, "hasHint": has_hint, ...props} = props_77043;

var input_ref = rumext.v2.use_ref();
var type__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(type,"text");
var variant__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(variant,"dense");
var tooltip_id = rumext.v2.use_id();
var props__$1 = {...props, 'className':(class$ ?? "")+" "+("main_ui_ds_controls_utilities_input_field__input"+" "+(((!((icon == null))))?"main_ui_ds_controls_utilities_input_field__input-with-icon":"") ?? ""),'ref':(function (){var or__5025__auto__ = ref;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return input_ref;
}
})(),'aria-invalid':(cljs.core.truth_((function (){var and__5023__auto__ = has_hint;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hint_type,"error");
} else {
return and__5023__auto__;
}
})())?"true":null),'aria-describedby':(cljs.core.truth_(has_hint)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-hint"].join(''):null),'aria-labelledby':tooltip_id,'type':app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(type__$1,"text"),'id':id,'maxLength':app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(max_length,app.main.constants.max_input_length)};
var inside_class = "main_ui_ds_controls_utilities_input_field__input-wrapper"+" "+(cljs.core.truth_(has_hint)?"main_ui_ds_controls_utilities_input_field__has-hint":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hint_type,"hint"))?"main_ui_ds_controls_utilities_input_field__hint-type-hint":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hint_type,"warning"))?"main_ui_ds_controls_utilities_input_field__hint-type-warning":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hint_type,"error"))?"main_ui_ds_controls_utilities_input_field__hint-type-error":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant__$1,"seamless"))?"main_ui_ds_controls_utilities_input_field__variant-seamless":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant__$1,"dense"))?"main_ui_ds_controls_utilities_input_field__variant-dense":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant__$1,"comfortable"))?"main_ui_ds_controls_utilities_input_field__variant-comfortable":"");
var on_icon_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ref)],(function (_event){
var input_node = rumext.v2.ref_val(ref);
app.util.dom.select_node(input_node);

return app.util.dom.focus_BANG_(input_node);
}));
return rumext.v2.jsxs("div",{'className':(inside_class ?? "")+" "+(class$ ?? ""),'children':[(((!((slot_start == null))))?slot_start:null),(((!((icon == null))))?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':icon,'className':"main_ui_ds_controls_utilities_input_field__icon",'size':"s",'onClick':on_icon_click}):null),(cljs.core.truth_(aria_label)?rumext.v2.jsx(app.main.ui.ds.tooltip.tooltip_STAR_,{'content':aria_label,'triggerRef':(function (){var or__5025__auto__ = ref;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return input_ref;
}
})(),'className':"main_ui_ds_controls_utilities_input_field__tooltip-wrapper",'id':tooltip_id,'children':rumext.v2.create_element("input",props__$1)}):rumext.v2.create_element("input",props__$1)),(((!((slot_end == null))))?slot_end:null)]});
}));

(app.main.ui.ds.controls.utilities.input_field.input_field_STAR_.displayName = "input-field*");


//# sourceMappingURL=app.main.ui.ds.controls.utilities.input_field.js.map
