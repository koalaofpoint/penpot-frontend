import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.ds.foundations.typography.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.foundations.typography.text');
app.main.ui.ds.foundations.typography.text.valid_typography_QMARK_ = (function app$main$ui$ds$foundations$typography$text$valid_typography_QMARK_(value){
return cljs.core.contains_QMARK_(app.main.ui.ds.foundations.typography.typography_list,value);
});
app.main.ui.ds.foundations.typography.text.schema_COLON_text = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typography","typography",-399568138),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__73298_SHARP_){
return app.main.ui.ds.foundations.typography.text.valid_typography_QMARK_(""+(p1__73298_SHARP_ ?? ""));
})], null)], null)], null)], null);
app.main.ui.ds.foundations.typography.text.text_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.foundations.typography.text.schema_COLON_text);

app.main.ui.ds.foundations.typography.text.text_STAR_ = (function app$main$ui$ds$foundations$typography$text$text_STAR_(props_73301){
// ===== start props checking =====;

var res__47117__auto___73335 = app.main.ui.ds.foundations.typography.text.text_STAR__validator(props_73301);
if((!((res__47117__auto___73335 == null)))){
var items__47118__auto___73336 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___73335);
var msg__47122__auto___73337 = ["invalid props on component text*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___73336),"\n"].join('');
throw (new Error(msg__47122__auto___73337));
} else {
}

// ===== end props checking =====;

var children = undefined;
var as = undefined;
var class$ = undefined;
var typography = undefined;
var props = undefined;
var {"as": as, "typography": typography, "children": children, "className": class$, ...props} = props_73301;

var as__$1 = ((((cljs.core.empty_QMARK_(as)) || ((as == null))))?"p":as);
var class$__$1 = ""+((function (){var or__5025__auto__ = class$;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})() ?? "")+" "+(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.display))?"main_ui_ds_foundations_typography_text__display-typography":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.title_large))?"main_ui_ds_foundations_typography_text__title-large-typography":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.title_medium))?"main_ui_ds_foundations_typography_text__title-medium-typography":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.title_small))?"main_ui_ds_foundations_typography_text__title-small-typography":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.headline_large))?"main_ui_ds_foundations_typography_text__headline-large-typography":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.headline_medium))?"main_ui_ds_foundations_typography_text__headline-medium-typography":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.headline_small))?"main_ui_ds_foundations_typography_text__headline-small-typography":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.body_large))?"main_ui_ds_foundations_typography_text__body-large-typography":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.body_medium))?"main_ui_ds_foundations_typography_text__body-medium-typography":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.body_small))?"main_ui_ds_foundations_typography_text__body-small-typography":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.code_font))?"main_ui_ds_foundations_typography_text__code-font-typography":"") ?? "");
var props__$1 = {...props, 'className':class$__$1};
return rumext.v2.create_element(as__$1,props__$1,children);
});

(app.main.ui.ds.foundations.typography.text.text_STAR_.displayName = "text*");


//# sourceMappingURL=app.main.ui.ds.foundations.typography.text.js.map
