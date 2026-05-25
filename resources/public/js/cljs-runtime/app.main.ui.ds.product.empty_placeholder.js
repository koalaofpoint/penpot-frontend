import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.ds.foundations.assets.raw_svg.js";
import "./app.main.ui.ds.foundations.typography.js";
import "./app.main.ui.ds.foundations.typography.text.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.product.empty_placeholder');
app.main.ui.ds.product.empty_placeholder.schema_COLON_empty_placeholder = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),(1),(2)], null)], null)], null)], null);
app.main.ui.ds.product.empty_placeholder.empty_placeholder_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.product.empty_placeholder.schema_COLON_empty_placeholder);

app.main.ui.ds.product.empty_placeholder.empty_placeholder_STAR_ = (function app$main$ui$ds$product$empty_placeholder$empty_placeholder_STAR_(props_81774){
// ===== start props checking =====;

var res__47117__auto___81775 = app.main.ui.ds.product.empty_placeholder.empty_placeholder_STAR__validator(props_81774);
if((!((res__47117__auto___81775 == null)))){
var items__47118__auto___81776 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___81775);
var msg__47122__auto___81777 = ["invalid props on component empty-placeholder*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___81776),"\n"].join('');
throw (new Error(msg__47122__auto___81777));
} else {
}

// ===== end props checking =====;

var children = undefined;
var type = undefined;
var title = undefined;
var class$ = undefined;
var subtitle = undefined;
var props = undefined;
var {"className": class$, "title": title, "subtitle": subtitle, "type": type, "children": children, ...props} = props_81774;

var class$__$1 = ""+(class$ ?? "")+" "+("main_ui_ds_product_empty_placeholder__empty-placeholder" ?? "");
var props__$1 = {...props, 'className':class$__$1,'data-testid':"empty-placeholder"};
var type__$1 = (function (){var or__5025__auto__ = type;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})();
var decoration_type = ""+"empty-placeholder-"+(cljs.core.str.cljs$core$IFn$_invoke$arity$1(type__$1) ?? "");
return rumext.v2.create_element("div",props__$1,rumext.v2.jsx(app.main.ui.ds.foundations.assets.raw_svg.raw_svg_STAR_,{'id':""+(decoration_type ?? "")+"-left",'className':"main_ui_ds_product_empty_placeholder__svg-decor"}),rumext.v2.jsxs("div",{'className':"main_ui_ds_product_empty_placeholder__text-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':app.main.ui.ds.foundations.typography.title_medium,'className':"main_ui_ds_product_empty_placeholder__placeholder-title",'children':title}),(cljs.core.truth_(subtitle)?rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':app.main.ui.ds.foundations.typography.body_large,'children':subtitle}):null),children]}),rumext.v2.jsx(app.main.ui.ds.foundations.assets.raw_svg.raw_svg_STAR_,{'id':""+(decoration_type ?? "")+"-right",'className':"main_ui_ds_product_empty_placeholder__svg-decor"}));
});

(app.main.ui.ds.product.empty_placeholder.empty_placeholder_STAR_.displayName = "empty-placeholder*");


//# sourceMappingURL=app.main.ui.ds.product.empty_placeholder.js.map
