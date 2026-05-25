import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.main.constants.js";
import "./app.main.ui.ds.controls.utilities.hint_message.js";
import "./app.main.ui.ds.controls.utilities.input_field.js";
import "./app.main.ui.ds.controls.utilities.label.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.controls.input');
app.main.ui.ds.controls.input.schema_COLON_input = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-optional","is-optional",-946617554),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-length","max-length",-254826109),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"seamless","dense","comfortable"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint-message","hint-message",1237641424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint-type","hint-type",-546671026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"hint","error","warning"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint-formated","hint-formated",1231922240),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
app.main.ui.ds.controls.input.input_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.controls.input.schema_COLON_input);

app.main.ui.ds.controls.input.input_STAR_ = rumext.v2.forward_ref((function app$main$ui$ds$controls$input$input_STAR_(props_77110,ref){
// ===== start props checking =====;

var res__47117__auto___77111 = app.main.ui.ds.controls.input.input_STAR__validator(props_77110);
if((!((res__47117__auto___77111 == null)))){
var items__47118__auto___77112 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___77111);
var msg__47122__auto___77113 = ["invalid props on component input*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___77112),"\n"].join('');
throw (new Error(msg__47122__auto___77113));
} else {
}

// ===== end props checking =====;

var hint_formated = undefined;
var max_length = undefined;
var variant = undefined;
var type = undefined;
var hint_type = undefined;
var is_optional = undefined;
var hint_message = undefined;
var label = undefined;
var id = undefined;
var class$ = undefined;
var props = undefined;
var {"hintFormated": hint_formated, "maxLength": max_length, "variant": variant, "type": type, "hintType": hint_type, "isOptional": is_optional, "hintMessage": hint_message, "label": label, "id": id, "className": class$, ...props} = props_77110;

var id__$1 = (function (){var or__5025__auto__ = id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return rumext.v2.use_id();
}
})();
var variant__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(variant,"dense");
var hint_class = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("error",hint_type);
if(and__5023__auto__){
return hint_formated;
} else {
return and__5023__auto__;
}
})())?"main_ui_ds_controls_input__hint-formated":"");
var is_optional__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(is_optional,false);
var type__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(type,"text");
var max_length__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(max_length,app.main.constants.max_input_length);
var has_hint = (((!((hint_message == null)))) && ((!(cuerdas.core.blank_QMARK_(hint_message)))));
var has_label = (!(cuerdas.core.blank_QMARK_(label)));
var ref__$1 = (function (){var or__5025__auto__ = ref;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return rumext.v2.use_ref();
}
})();
var props__$1 = {...props, 'ref':ref__$1,'type':type__$1,'id':id__$1,'maxLength':max_length__$1,'hasHint':has_hint,'hintType':hint_type,'variant':variant__$1};
return rumext.v2.jsxs("div",{'className':""+(class$ ?? "")+" "+("main_ui_ds_controls_input__input-wrapper"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant__$1,"dense"))?"main_ui_ds_controls_input__variant-dense":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant__$1,"comfortable"))?"main_ui_ds_controls_input__variant-comfortable":"")+" "+((has_hint)?"main_ui_ds_controls_input__has-hint":"") ?? ""),'children':[((has_label)?rumext.v2.jsx(app.main.ui.ds.controls.utilities.label.label_STAR_,{'htmlFor':id__$1,'isOptional':is_optional__$1,'children':label}):null),rumext.v2.create_element(app.main.ui.ds.controls.utilities.input_field.input_field_STAR_,props__$1),((has_hint)?rumext.v2.jsx(app.main.ui.ds.controls.utilities.hint_message.hint_message_STAR_,{'id':id__$1,'className':hint_class,'message':hint_message,'type':hint_type}):null)]});
}));

(app.main.ui.ds.controls.input.input_STAR_.displayName = "input*");


//# sourceMappingURL=app.main.ui.ds.controls.input.js.map
