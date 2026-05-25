import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.time.js";
import "./app.main.ui.ds.foundations.typography.js";
import "./app.main.ui.ds.foundations.typography.text.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.utilities.date');
app.main.ui.ds.utilities.date.valid_date_QMARK_ = (function app$main$ui$ds$utilities$date$valid_date_QMARK_(date){
return ((app.common.time.inst_QMARK_(date)) || (typeof date === 'number'));
});
app.main.ui.ds.utilities.date.schema_COLON_date = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.main.ui.ds.utilities.date.valid_date_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typography","typography",-399568138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
app.main.ui.ds.utilities.date.date_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.utilities.date.schema_COLON_date);

app.main.ui.ds.utilities.date.date_STAR_ = (function app$main$ui$ds$utilities$date$date_STAR_(props_79258){
// ===== start props checking =====;

var res__47117__auto___79260 = app.main.ui.ds.utilities.date.date_STAR__validator(props_79258);
if((!((res__47117__auto___79260 == null)))){
var items__47118__auto___79261 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___79260);
var msg__47122__auto___79262 = ["invalid props on component date*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___79261),"\n"].join('');
throw (new Error(msg__47122__auto___79262));
} else {
}

// ===== end props checking =====;

var date = undefined;
var selected = undefined;
var class$ = undefined;
var typography = undefined;
var props = undefined;
var {"className": class$, "date": date, "selected": selected, "typography": typography, ...props} = props_79258;

var date__$1 = (function (){var G__79259 = date;
if((!(app.common.time.inst_QMARK_(date)))){
return app.common.time.inst(G__79259);
} else {
return G__79259;
}
})();
var typography__$1 = (function (){var or__5025__auto__ = typography;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.ui.ds.foundations.typography.body_medium;
}
})();
return rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"time",'typography':typography__$1,'className':(class$ ?? "")+" "+("main_ui_ds_utilities_date__date"+" "+(cljs.core.truth_(selected)?"main_ui_ds_utilities_date__is-selected":"") ?? ""),'dateTime':app.common.time.format_inst.cljs$core$IFn$_invoke$arity$2(date__$1,new cljs.core.Keyword(null,"iso","iso",-1366207543)),'children':app.common.time.format_inst.cljs$core$IFn$_invoke$arity$2(date__$1,new cljs.core.Keyword(null,"localized-date-time","localized-date-time",358812429))});
});

(app.main.ui.ds.utilities.date.date_STAR_.displayName = "date*");


//# sourceMappingURL=app.main.ui.ds.utilities.date.js.map
