import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.buttons.button');
app.main.ui.ds.buttons.button.schema_COLON_button = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"button","submit","reset"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__72923_SHARP_){
return cljs.core.contains_QMARK_(app.main.ui.ds.foundations.assets.icon.icon_list,p1__72923_SHARP_);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-ref","on-ref",-1423620311),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"primary","secondary","ghost","destructive"], null)], null)], null)], null);
app.main.ui.ds.buttons.button.button_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.buttons.button.schema_COLON_button);

app.main.ui.ds.buttons.button.button_STAR_ = (function app$main$ui$ds$buttons$button$button_STAR_(props_72924){
// ===== start props checking =====;

var res__47117__auto___72926 = app.main.ui.ds.buttons.button.button_STAR__validator(props_72924);
if((!((res__47117__auto___72926 == null)))){
var items__47118__auto___72927 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___72926);
var msg__47122__auto___72928 = ["invalid props on component button*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___72927),"\n"].join('');
throw (new Error(msg__47122__auto___72928));
} else {
}

// ===== end props checking =====;

var to = undefined;
var children = undefined;
var variant = undefined;
var on_ref = undefined;
var type = undefined;
var icon = undefined;
var class$ = undefined;
var props = undefined;
var {"variant": variant, "icon": icon, "children": children, "className": class$, "onRef": on_ref, "to": to, "type": type, ...props} = props_72924;

var variant__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(variant,"primary");
var element = (cljs.core.truth_(to)?"a":"button");
var internal_class = "main_ui_ds_buttons_button__button"+" "+(((!((to == null))))?"main_ui_ds_buttons_button__button-link":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant__$1,"primary"))?"main_ui_ds_buttons_button__button-primary":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant__$1,"secondary"))?"main_ui_ds_buttons_button__button-secondary":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant__$1,"ghost"))?"main_ui_ds_buttons_button__button-ghost":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant__$1,"destructive"))?"main_ui_ds_buttons_button__button-destructive":"");
var props__$1 = {...props, 'className':(class$ ?? "")+" "+(internal_class ?? ""),'href':to,'type':app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(type,"button"),'ref':(function (node){
if(cljs.core.truth_(on_ref)){
return (on_ref.cljs$core$IFn$_invoke$arity$1 ? on_ref.cljs$core$IFn$_invoke$arity$1(node) : on_ref.call(null,node));
} else {
return null;
}
})};
return rumext.v2.create_element(element,props__$1,(cljs.core.truth_(icon)?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':icon,'size':"m"}):null),rumext.v2.jsx("span",{'className':"main_ui_ds_buttons_button__label-wrapper",'children':children}));
});

(app.main.ui.ds.buttons.button.button_STAR_.displayName = "button*");


//# sourceMappingURL=app.main.ui.ds.buttons.button.js.map
