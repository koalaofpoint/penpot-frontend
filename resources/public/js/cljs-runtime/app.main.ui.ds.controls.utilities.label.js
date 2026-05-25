import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.controls.utilities.label');
app.main.ui.ds.controls.utilities.label.schema_COLON__COLON_label = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-optional","is-optional",-946617554),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
app.main.ui.ds.controls.utilities.label.label_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.controls.utilities.label.schema_COLON__COLON_label);

app.main.ui.ds.controls.utilities.label.label_STAR_ = (function app$main$ui$ds$controls$utilities$label$label_STAR_(props_77041){
// ===== start props checking =====;

var res__47117__auto___77044 = app.main.ui.ds.controls.utilities.label.label_STAR__validator(props_77041);
if((!((res__47117__auto___77044 == null)))){
var items__47118__auto___77045 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___77044);
var msg__47122__auto___77046 = ["invalid props on component label*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___77045),"\n"].join('');
throw (new Error(msg__47122__auto___77046));
} else {
}

// ===== end props checking =====;

var children = undefined;
var is_optional = undefined;
var for$ = undefined;
var class$ = undefined;
var props = undefined;
var {"className": class$, "htmlFor": for$, "isOptional": is_optional, "children": children, ...props} = props_77041;

var is_optional__$1 = (function (){var or__5025__auto__ = is_optional;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return false;
}
})();
var props__$1 = {...props, 'className':""+(class$ ?? "")+" "+("main_ui_ds_controls_utilities_label__label" ?? ""),'htmlFor':for$};
return rumext.v2.create_element("label",props__$1,rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(((!((children == null))))?rumext.v2.jsx("span",{'className':"main_ui_ds_controls_utilities_label__label-text",'children':children}):null),(cljs.core.truth_(is_optional__$1)?rumext.v2.jsx("span",{'className':"main_ui_ds_controls_utilities_label__label-optional",'children':"(Optional)"}):null)]}));
});

(app.main.ui.ds.controls.utilities.label.label_STAR_.displayName = "label*");


//# sourceMappingURL=app.main.ui.ds.controls.utilities.label.js.map
