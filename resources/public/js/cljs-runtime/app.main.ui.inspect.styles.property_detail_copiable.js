import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.refs.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.utilities.swatch.js";
import "./app.main.ui.inspect.common.colors.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.styles.property_detail_copiable');
app.main.ui.inspect.styles.property_detail_copiable.schema_COLON_property_detail_copiable = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"copied","copied",991643975),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.fn_QMARK_], null)], null);
app.main.ui.inspect.styles.property_detail_copiable.property_detail_copiable_STAR__validator = rumext.v2.validation.validator(app.main.ui.inspect.styles.property_detail_copiable.schema_COLON_property_detail_copiable);

app.main.ui.inspect.styles.property_detail_copiable.property_detail_copiable_STAR_ = (function app$main$ui$inspect$styles$property_detail_copiable$property_detail_copiable_STAR_(props_74837){
// ===== start props checking =====;

var res__47117__auto___74838 = app.main.ui.inspect.styles.property_detail_copiable.property_detail_copiable_STAR__validator(props_74837);
if((!((res__47117__auto___74838 == null)))){
var items__47118__auto___74839 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___74838);
var msg__47122__auto___74840 = ["invalid props on component property-detail-copiable*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___74839),"\n"].join('');
throw (new Error(msg__47122__auto___74840));
} else {
}

// ===== end props checking =====;

var children = props_74837.children;
var color = props_74837.color;
var ref = props_74837.ref;
var copied = props_74837.copied;
var on_click = props_74837.onClick;
var token = props_74837.token;
return rumext.v2.jsxs("button",{'onClick':on_click,'ref':ref,'className':"main_ui_inspect_styles_property_detail_copiable__property-detail-copiable"+" "+(cljs.core.truth_(copied)?"main_ui_inspect_styles_property_detail_copiable__property-detail-copied":"")+" "+(((!((color == null))))?"main_ui_inspect_styles_property_detail_copiable__property-detail-copiable-color":""),'children':[(cljs.core.truth_(color)?rumext.v2.jsx(app.main.ui.ds.utilities.swatch.swatch_STAR_,{'background':color,'size':"small"}):null),(cljs.core.truth_(token)?rumext.v2.jsx("span",{'className':"main_ui_inspect_styles_property_detail_copiable__property-detail-text main_ui_inspect_styles_property_detail_copiable__property-detail-text-token",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token)}):(cljs.core.truth_(new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884).cljs$core$IFn$_invoke$arity$1(color))?(function (){var colors_library = app.main.ui.inspect.common.colors.use_colors_library(color);
var file_colors_ref = rumext.v2.deref(app.main.ui.inspect.common.colors.file_colors_ref);
var file_colors_wokspace = rumext.v2.deref(app.main.refs.workspace_file_colors);
var file_colors = (function (){var or__5025__auto__ = file_colors_ref;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return file_colors_wokspace;
}
})();
var color_library_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var or__5025__auto__ = colors_library;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return file_colors;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var color__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(color,new cljs.core.Keyword(null,"name","name",1843675177),color_library_name);
return rumext.v2.jsx("span",{'className':"main_ui_inspect_styles_property_detail_copiable__property-detail-text",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(color__$1)});
})():rumext.v2.jsx("span",{'className':"main_ui_inspect_styles_property_detail_copiable__property-detail-text",'children':children}))),rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'className':"main_ui_inspect_styles_property_detail_copiable__property-detail-icon",'iconId':(cljs.core.truth_(copied)?app.main.ui.ds.foundations.assets.icon.tick:app.main.ui.ds.foundations.assets.icon.clipboard),'size':"s",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.tabs.styles.copy-to-clipboard")})]});
});

(app.main.ui.inspect.styles.property_detail_copiable.property_detail_copiable_STAR_.displayName = "property-detail-copiable*");


//# sourceMappingURL=app.main.ui.inspect.styles.property_detail_copiable.js.map
