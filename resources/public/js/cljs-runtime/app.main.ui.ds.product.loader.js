import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.math.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.product.loader');
app.main.ui.ds.product.loader.get_tips = (function app$main$ui$ds$product$loader$get_tips(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("loader.tips.01.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("loader.tips.01.message")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("loader.tips.02.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("loader.tips.02.message")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("loader.tips.03.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("loader.tips.03.message")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("loader.tips.04.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("loader.tips.04.message")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("loader.tips.05.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("loader.tips.05.message")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("loader.tips.06.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("loader.tips.06.message")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("loader.tips.07.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("loader.tips.07.message")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("loader.tips.08.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("loader.tips.08.message")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("loader.tips.09.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("loader.tips.09.message")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("loader.tips.10.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("loader.tips.10.message")], null)], null);
});
app.main.ui.ds.product.loader.svg_COLON_loader_path_1 = "M128.273 0l-3.9 2.77L0 91.078l128.273 91.076 549.075-.006V.008L128.273 0zm20.852 30l498.223.006V152.15l-498.223.007V30zm-25 9.74v102.678l-49.033-34.813-.578-32.64 49.61-35.225z";
app.main.ui.ds.product.loader.svg_COLON_loader_path_2 = "M134.482 157.147v25l518.57.008.002-25-518.572-.008z";
app.main.ui.ds.product.loader.loader_icon_STAR_ = (function app$main$ui$ds$product$loader$loader_icon_STAR_(props_71359){
var height = undefined;
var width = undefined;
var title = undefined;
var props = undefined;
var {"width": width, "height": height, "title": title, ...props} = props_71359;

var class$ = "main_ui_ds_product_loader__loader";
var props__$1 = {...props, 'viewBox':"0 0 677.34762 182.15429",'role':"status",'width':width,'height':height,'className':class$};
return rumext.v2.create_element("svg",props__$1,rumext.v2.jsx("title",{'children':title}),rumext.v2.jsxs("g",{'children':[rumext.v2.jsx("path",{'d':app.main.ui.ds.product.loader.svg_COLON_loader_path_1}),rumext.v2.jsx("path",{'d':app.main.ui.ds.product.loader.svg_COLON_loader_path_2,'className':"main_ui_ds_product_loader__loader-line"})]}));
});

(app.main.ui.ds.product.loader.loader_icon_STAR_.displayName = "loader-icon*");

app.main.ui.ds.product.loader.schema_COLON_loader = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-loading","file-loading",-229235493),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
app.main.ui.ds.product.loader.loader_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.product.loader.schema_COLON_loader);

app.main.ui.ds.product.loader.loader_STAR_ = (function app$main$ui$ds$product$loader$loader_STAR_(props_71373){
// ===== start props checking =====;

var res__47117__auto___71379 = app.main.ui.ds.product.loader.loader_STAR__validator(props_71373);
if((!((res__47117__auto___71379 == null)))){
var items__47118__auto___71380 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___71379);
var msg__47122__auto___71381 = ["invalid props on component loader*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___71380),"\n"].join('');
throw (new Error(msg__47122__auto___71381));
} else {
}

// ===== end props checking =====;

var file_loading = undefined;
var height = undefined;
var children = undefined;
var width = undefined;
var title = undefined;
var overlay = undefined;
var class$ = undefined;
var props = undefined;
var {"className": class$, "width": width, "height": height, "title": title, "overlay": overlay, "children": children, "fileLoading": file_loading, ...props} = props_71373;

var width__$1 = (function (){var or__5025__auto__ = width;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (((!((height == null))))?app.common.math.ceil((height * ((100) / (27)))):null);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return (100);
}
}
})();
var height__$1 = (function (){var or__5025__auto__ = height;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (((!((width__$1 == null))))?app.common.math.ceil((width__$1 * ((27) / (100)))):null);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return (27);
}
}
})();
var class$__$1 = ""+(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(class$,"") ?? "")+" "+("main_ui_ds_product_loader__wrapper"+" "+(cljs.core.truth_(overlay)?"main_ui_ds_product_loader__wrapper-overlay":"")+" "+(cljs.core.truth_(file_loading)?"main_ui_ds_product_loader__file-loading":"") ?? "");
var title__$1 = (function (){var or__5025__auto__ = title;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.loading");
}
})();
var tips = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$1(app.main.ui.ds.product.loader.get_tips);
var tip_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var tip = cljs.core.deref(tip_STAR_);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_loading),rumext.v2.adapt(tips)],(function (){
if(cljs.core.truth_(file_loading)){
var sub = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return cljs.core.reset_BANG_(tip_STAR_,cljs.core.rand_nth(tips));
}),beicon.v2.core.timer((1000),(4000)));
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(beicon.v2.core.dispose_BANG_,sub);
} else {
return null;
}
}));

return rumext.v2.jsxs("div",{'className':class$__$1,'children':[rumext.v2.jsxs("div",{'className':"main_ui_ds_product_loader__loader-content",'children':[rumext.v2.jsx(app.main.ui.ds.product.loader.loader_icon_STAR_,{'title':title__$1,'width':width__$1,'height':height__$1}),(cljs.core.truth_((function (){var and__5023__auto__ = file_loading;
if(cljs.core.truth_(and__5023__auto__)){
return tip;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsxs("div",{'className':"main_ui_ds_product_loader__tips-container",'children':[rumext.v2.jsx("div",{'className':"main_ui_ds_product_loader__tip-title",'children':cljs.core.get.cljs$core$IFn$_invoke$arity$2(tip,new cljs.core.Keyword(null,"title","title",636505583))}),rumext.v2.jsx("div",{'className':"main_ui_ds_product_loader__tip-message",'children':cljs.core.get.cljs$core$IFn$_invoke$arity$2(tip,new cljs.core.Keyword(null,"message","message",-406056002))})]}):null)]}),children]});
});

(app.main.ui.ds.product.loader.loader_STAR_.displayName = "loader*");


//# sourceMappingURL=app.main.ui.ds.product.loader.js.map
