import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.json.js";
import "./app.common.schema.js";
import "./app.common.types.color.js";
import "./app.config.js";
import "./app.main.ui.ds.tooltip.js";
import "./app.util.color.js";
import "./app.util.i18n.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.utilities.swatch');
app.main.ui.ds.utilities.swatch.color_title = (function app$main$ui$ds$utilities$swatch$color_title(color_item){
var map__72435 = cljs.core.meta(color_item);
var map__72435__$1 = cljs.core.__destructure_map(map__72435);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72435__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72435__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path_and_name = (cljs.core.truth_((function (){var and__5023__auto__ = path;
if(cljs.core.truth_(and__5023__auto__)){
return (!(cuerdas.core.empty_QMARK_(path)));
} else {
return and__5023__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
var gradient = new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color_item);
var image = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(color_item);
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color_item);
if((!((name == null)))){
if((!((color == null)))){
return ""+(path_and_name ?? "")+" ("+(color ?? "")+")";
} else {
if((!((gradient == null)))){
return ""+(path_and_name ?? "")+" ("+(app.util.color.gradient_type__GT_string(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(gradient)) ?? "")+")";
} else {
if((!((image == null)))){
return ""+(path_and_name ?? "")+" ("+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("media.image") ?? "")+")";
} else {
return path_and_name;

}
}
}
} else {
if((!((color == null)))){
return color;
} else {
if((!((gradient == null)))){
return app.util.color.gradient_type__GT_string(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(gradient));
} else {
if((!((image == null)))){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("media.image");
} else {
return null;
}
}
}
}
});
app.main.ui.ds.utilities.swatch.schema_COLON_swatch = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SchemaSwatch"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.color.schema_COLON_color], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"small","medium","large"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","boolean","app.common.schema/boolean",-727386221)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"has-errors","has-errors",44889806),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("app.common.schema","boolean","app.common.schema/boolean",-727386221)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-tooltip","show-tooltip",-508807528),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("app.common.schema","boolean","app.common.schema/boolean",-727386221)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip-content","tooltip-content",2008084641),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","any","app.common.schema/any",-1231442794)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","fn","app.common.schema/fn",-520191477)], null)], null);
app.main.ui.ds.utilities.swatch.swatch_STAR__validator = rumext.v2.validation.validator(app.common.schema.schema(app.main.ui.ds.utilities.swatch.schema_COLON_swatch));

app.main.ui.ds.utilities.swatch.swatch_STAR_ = (function app$main$ui$ds$utilities$swatch$swatch_STAR_(props_72443){
// ===== start props checking =====;

var res__47117__auto___72455 = app.main.ui.ds.utilities.swatch.swatch_STAR__validator(props_72443);
if((!((res__47117__auto___72455 == null)))){
var items__47118__auto___72457 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___72455);
var msg__47122__auto___72458 = ["invalid props on component swatch*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___72457),"\n"].join('');
throw (new Error(msg__47122__auto___72458));
} else {
}

// ===== end props checking =====;

var tooltip_content = undefined;
var background = undefined;
var has_errors = undefined;
var on_click = undefined;
var size = undefined;
var active = undefined;
var class$ = undefined;
var show_tooltip = undefined;
var props = undefined;
var {"background": background, "className": class$, "size": size, "active": active, "hasErrors": has_errors, "tooltipContent": tooltip_content, "onClick": on_click, "showTooltip": show_tooltip, ...props} = props_72443;

var background__$1 = ((cljs.core.object_QMARK_(background))?app.common.json.__GT_clj(background):background);
var read_only_QMARK_ = (on_click == null);
var id_QMARK_ = (!((new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884).cljs$core$IFn$_invoke$arity$1(background__$1) == null)));
var element_type = ((read_only_QMARK_)?"div":"button");
var button_type = (((!(read_only_QMARK_)))?"button":null);
var show_tooltip__$1 = (((!((show_tooltip == null))))?show_tooltip:true);
var size__$1 = (function (){var or__5025__auto__ = size;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "small";
}
})();
var active__$1 = (function (){var or__5025__auto__ = active;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return false;
}
})();
var gradient_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(background__$1));
var gradient_stops = new cljs.core.Keyword(null,"stops","stops",-1205459005).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(background__$1));
var gradient_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),gradient_type,new cljs.core.Keyword(null,"stops","stops",-1205459005),gradient_stops], null);
var image = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(background__$1);
var format = ((id_QMARK_)?"rounded":"square");
var element_id = rumext.v2.use_id();
var has_opacity_QMARK_ = (((!((new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(background__$1) == null)))) && ((new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(background__$1) < (1))));
var element_ref = rumext.v2.use_ref(null);
var on_click__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(background__$1),rumext.v2.adapt(on_click)],(function (event){
if(cljs.core.fn_QMARK_(on_click)){
return on_click(background__$1,event);
} else {
return null;
}
}));
var class$__$1 = ""+(class$ ?? "")+" "+("main_ui_ds_utilities_swatch__swatch"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(size__$1,"small"))?"main_ui_ds_utilities_swatch__small":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(size__$1,"medium"))?"main_ui_ds_utilities_swatch__medium":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(size__$1,"large"))?"main_ui_ds_utilities_swatch__large":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,"square"))?"main_ui_ds_utilities_swatch__square":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active__$1,true))?"main_ui_ds_utilities_swatch__active":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element_type,"button"))?"main_ui_ds_utilities_swatch__interactive":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,"rounded"))?"main_ui_ds_utilities_swatch__rounded":"") ?? "");
var props__$1 = {...props, 'className':class$__$1,'onClick':on_click__$1,'type':button_type,'aria-labelledby':element_id,'ref':element_ref};
var children = rumext.v2.create_element(element_type,props__$1,(((!((gradient_type == null))))?rumext.v2.jsx("div",{'style':{'backgroundImage':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.color.gradient__GT_css(gradient_data)),", repeating-conic-gradient(lightgray 0% 25%, white 0% 50%)"].join('')},'className':"main_ui_ds_utilities_swatch__swatch-gradient"}):(((!((image == null))))?(function (){var uri = app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1(image);
return rumext.v2.jsx("div",{'style':{'backgroundImage':""+"url("+(uri ?? "")+")"},'className':"main_ui_ds_utilities_swatch__swatch-image"});
})():(cljs.core.truth_(has_errors)?rumext.v2.jsx("div",{'className':"main_ui_ds_utilities_swatch__swatch-error"}):rumext.v2.jsxs("div",{'className':"main_ui_ds_utilities_swatch__swatch-opacity",'children':[rumext.v2.jsx("div",{'style':{'background':app.util.color.color__GT_background(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(background__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)))},'className':"main_ui_ds_utilities_swatch__swatch-solid-side"}),rumext.v2.jsx("div",{'style':{'--solid-color-overlay':cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.color.color__GT_background(background__$1))},'className':"main_ui_ds_utilities_swatch__swatch-opacity-side"+" "+((has_opacity_QMARK_)?"main_ui_ds_utilities_swatch__swatch-opacity-side-transparency":"")+" "+(((!(has_opacity_QMARK_)))?"main_ui_ds_utilities_swatch__swatch-opacity-side-solid-color":"")})]})
))));
if(cljs.core.truth_(show_tooltip__$1)){
return rumext.v2.jsx(app.main.ui.ds.tooltip.tooltip_STAR_,{'content':(cljs.core.truth_(tooltip_content)?tooltip_content:app.main.ui.ds.utilities.swatch.color_title(background__$1)),'triggerRef':element_ref,'id':element_id,'children':children});
} else {
return children;
}
});

(app.main.ui.ds.utilities.swatch.swatch_STAR_.displayName = "swatch*");


//# sourceMappingURL=app.main.ui.ds.utilities.swatch.js.map
