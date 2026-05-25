import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.ui.ds.foundations.typography.js";
import "./app.main.ui.ds.foundations.typography.text.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.product.cta');
app.main.ui.ds.product.cta.schema_COLON_cta = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
app.main.ui.ds.product.cta.cta_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.product.cta.schema_COLON_cta);

app.main.ui.ds.product.cta.cta_STAR_ = (function app$main$ui$ds$product$cta$cta_STAR_(props_73339){
// ===== start props checking =====;

var res__47117__auto___73343 = app.main.ui.ds.product.cta.cta_STAR__validator(props_73339);
if((!((res__47117__auto___73343 == null)))){
var items__47118__auto___73344 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___73343);
var msg__47122__auto___73345 = ["invalid props on component cta*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___73344),"\n"].join('');
throw (new Error(msg__47122__auto___73345));
} else {
}

// ===== end props checking =====;

var children = undefined;
var title = undefined;
var class$ = undefined;
var props = undefined;
var {"className": class$, "title": title, "children": children, ...props} = props_73339;

var class$__$1 = app.common.data.append_class(class$,"main_ui_ds_product_cta__cta");
var props__$1 = {...props, 'className':class$__$1,'data-testid':"cta"};
return rumext.v2.create_element("div",props__$1,rumext.v2.jsx("div",{'className':"main_ui_ds_product_cta__cta-title",'children':rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':app.main.ui.ds.foundations.typography.headline_small,'className':"main_ui_ds_product_cta__placeholder-title",'children':title})}),rumext.v2.jsx("div",{'className':"main_ui_ds_product_cta__cta-message",'children':children}));
});

(app.main.ui.ds.product.cta.cta_STAR_.displayName = "cta*");


//# sourceMappingURL=app.main.ui.ds.product.cta.js.map
