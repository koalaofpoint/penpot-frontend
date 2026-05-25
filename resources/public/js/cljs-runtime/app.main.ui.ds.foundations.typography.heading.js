import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.ds.foundations.typography.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.foundations.typography.heading');
app.main.ui.ds.foundations.typography.heading.valid_level_QMARK_ = (function app$main$ui$ds$foundations$typography$heading$valid_level_QMARK_(value){
var number_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["3",null,"4",null,"5",null,"6",null,"1",null,"2",null], null), null);
return cljs.core.contains_QMARK_(number_set,""+(value ?? ""));
});
app.main.ui.ds.foundations.typography.heading.valid_typography_QMARK_ = (function app$main$ui$ds$foundations$typography$heading$valid_typography_QMARK_(value){
return cljs.core.contains_QMARK_(app.main.ui.ds.foundations.typography.typography_list,value);
});
app.main.ui.ds.foundations.typography.heading.schema_COLON_heading = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__78323_SHARP_){
return app.main.ui.ds.foundations.typography.heading.valid_level_QMARK_(p1__78323_SHARP_);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typography","typography",-399568138),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__78324_SHARP_){
return app.main.ui.ds.foundations.typography.heading.valid_typography_QMARK_(""+(p1__78324_SHARP_ ?? ""));
})], null)], null)], null)], null);
app.main.ui.ds.foundations.typography.heading.heading_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.foundations.typography.heading.schema_COLON_heading);

app.main.ui.ds.foundations.typography.heading.heading_STAR_ = (function app$main$ui$ds$foundations$typography$heading$heading_STAR_(props_78325){
// ===== start props checking =====;

var res__47117__auto___78326 = app.main.ui.ds.foundations.typography.heading.heading_STAR__validator(props_78325);
if((!((res__47117__auto___78326 == null)))){
var items__47118__auto___78327 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___78326);
var msg__47122__auto___78328 = ["invalid props on component heading*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___78327),"\n"].join('');
throw (new Error(msg__47122__auto___78328));
} else {
}

// ===== end props checking =====;

var children = undefined;
var level = undefined;
var class$ = undefined;
var typography = undefined;
var props = undefined;
var {"level": level, "typography": typography, "className": class$, "children": children, ...props} = props_78325;

var level__$1 = (function (){var or__5025__auto__ = level;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "1";
}
})();
var tag = ""+"h"+(level__$1 ?? "");
var class$__$1 = ""+(class$ ?? "")+" "+(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.display))?"main_ui_ds_foundations_typography_heading__display-typography":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.title_large))?"main_ui_ds_foundations_typography_heading__title-large-typography":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.title_medium))?"main_ui_ds_foundations_typography_heading__title-medium-typography":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.title_small))?"main_ui_ds_foundations_typography_heading__title-small-typography":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.headline_large))?"main_ui_ds_foundations_typography_heading__headline-large-typography":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.headline_medium))?"main_ui_ds_foundations_typography_heading__headline-medium-typography":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.headline_small))?"main_ui_ds_foundations_typography_heading__headline-small-typography":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.body_large))?"main_ui_ds_foundations_typography_heading__body-large-typography":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.body_medium))?"main_ui_ds_foundations_typography_heading__body-medium-typography":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.body_small))?"main_ui_ds_foundations_typography_heading__body-small-typography":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography,app.main.ui.ds.foundations.typography.code_font))?"main_ui_ds_foundations_typography_heading__code-font-typography":"") ?? "");
var props__$1 = {...props, 'className':class$__$1};
return rumext.v2.create_element(tag,props__$1,children);
});

(app.main.ui.ds.foundations.typography.heading.heading_STAR_.displayName = "heading*");


//# sourceMappingURL=app.main.ui.ds.foundations.typography.heading.js.map
