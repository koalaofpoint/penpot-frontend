import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.product.empty_state');
app.main.ui.ds.product.empty_state.schema_COLON_empty_state = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__72912_SHARP_){
return cljs.core.contains_QMARK_(app.main.ui.ds.foundations.assets.icon.icon_list,p1__72912_SHARP_);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
app.main.ui.ds.product.empty_state.empty_state_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.product.empty_state.schema_COLON_empty_state);

app.main.ui.ds.product.empty_state.empty_state_STAR_ = (function app$main$ui$ds$product$empty_state$empty_state_STAR_(props_72913){
// ===== start props checking =====;

var res__47117__auto___72915 = app.main.ui.ds.product.empty_state.empty_state_STAR__validator(props_72913);
if((!((res__47117__auto___72915 == null)))){
var items__47118__auto___72916 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___72915);
var msg__47122__auto___72917 = ["invalid props on component empty-state*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___72916),"\n"].join('');
throw (new Error(msg__47122__auto___72917));
} else {
}

// ===== end props checking =====;

var text = undefined;
var icon = undefined;
var class$ = undefined;
var props = undefined;
var {"className": class$, "icon": icon, "text": text, ...props} = props_72913;

var props__$1 = {...props, 'className':(class$ ?? "")+" "+("main_ui_ds_product_empty_state__group" ?? "")};
return rumext.v2.create_element("div",props__$1,rumext.v2.jsx("div",{'className':"main_ui_ds_product_empty_state__icon-wrapper",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':icon,'size':"l",'className':"main_ui_ds_product_empty_state__icon"})}),rumext.v2.jsx("div",{'className':"main_ui_ds_product_empty_state__text",'children':text}));
});

(app.main.ui.ds.product.empty_state.empty_state_STAR_.displayName = "empty-state*");


//# sourceMappingURL=app.main.ui.ds.product.empty_state.js.map
