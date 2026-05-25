import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.controls.checkbox');
app.main.ui.ds.controls.checkbox.schema_COLON_checkbox = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
app.main.ui.ds.controls.checkbox.checkbox_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.controls.checkbox.schema_COLON_checkbox);

app.main.ui.ds.controls.checkbox.checkbox_STAR_ = (function app$main$ui$ds$controls$checkbox$checkbox_STAR_(props_78355){
// ===== start props checking =====;

var res__47117__auto___78360 = app.main.ui.ds.controls.checkbox.checkbox_STAR__validator(props_78355);
if((!((res__47117__auto___78360 == null)))){
var items__47118__auto___78361 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___78360);
var msg__47122__auto___78362 = ["invalid props on component checkbox*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___78361),"\n"].join('');
throw (new Error(msg__47122__auto___78362));
} else {
}

// ===== end props checking =====;

var on_change = undefined;
var disabled = undefined;
var label = undefined;
var id = undefined;
var class$ = undefined;
var checked = undefined;
var props = undefined;
var {"id": id, "className": class$, "label": label, "checked": checked, "onChange": on_change, "disabled": disabled, ...props} = props_78355;

var props__$1 = {...props, 'type':"checkbox",'className':"main_ui_ds_controls_checkbox__checkbox-input",'id':id,'checked':checked,'onChange':on_change,'disabled':disabled};
return rumext.v2.jsx("div",{'className':(class$ ?? "")+" "+("main_ui_ds_controls_checkbox__checkbox" ?? ""),'children':rumext.v2.jsxs("label",{'htmlFor':id,'className':"main_ui_ds_controls_checkbox__checkbox-label",'children':[rumext.v2.jsx("div",{'className':"main_ui_ds_controls_checkbox__checkbox-box"+" "+(cljs.core.truth_(checked)?"main_ui_ds_controls_checkbox__checked":"")+" "+(cljs.core.truth_(disabled)?"main_ui_ds_controls_checkbox__disabled":""),'children':(cljs.core.truth_(checked)?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.tick,'size':"s"}):null)}),rumext.v2.jsx("div",{'className':"main_ui_ds_controls_checkbox__checkbox-text",'children':label}),rumext.v2.create_element("input",props__$1)]})});
});

(app.main.ui.ds.controls.checkbox.checkbox_STAR_.displayName = "checkbox*");


//# sourceMappingURL=app.main.ui.ds.controls.checkbox.js.map
