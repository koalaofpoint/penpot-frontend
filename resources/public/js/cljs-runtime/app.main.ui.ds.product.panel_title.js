import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.product.panel_title');
app.main.ui.ds.product.panel_title.schema_COLON_panel_title = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null)], null);
app.main.ui.ds.product.panel_title.panel_title_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.product.panel_title.schema_COLON_panel_title);

app.main.ui.ds.product.panel_title.panel_title_STAR_ = (function app$main$ui$ds$product$panel_title$panel_title_STAR_(props_73024){
// ===== start props checking =====;

var res__47117__auto___73038 = app.main.ui.ds.product.panel_title.panel_title_STAR__validator(props_73024);
if((!((res__47117__auto___73038 == null)))){
var items__47118__auto___73039 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___73038);
var msg__47122__auto___73040 = ["invalid props on component panel-title*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___73039),"\n"].join('');
throw (new Error(msg__47122__auto___73040));
} else {
}

// ===== end props checking =====;

var text = undefined;
var on_close = undefined;
var class$ = undefined;
var props = undefined;
var {"className": class$, "text": text, "onClose": on_close, ...props} = props_73024;

var props__$1 = {...props, 'className':(class$ ?? "")+" "+("main_ui_ds_product_panel_title__panel-title" ?? "")};
return rumext.v2.create_element("div",props__$1,rumext.v2.jsx("span",{'className':"main_ui_ds_product_panel_title__panel-title-text",'children':text}),(cljs.core.truth_(on_close)?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.close"),'onClick':on_close,'icon':app.main.ui.ds.foundations.assets.icon.close}):null));
});

(app.main.ui.ds.product.panel_title.panel_title_STAR_.displayName = "panel-title*");


//# sourceMappingURL=app.main.ui.ds.product.panel_title.js.map
