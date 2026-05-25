import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.types.color.js";
import "./app.config.js";
import "./app.main.ui.ds.buttons.button.js";
import "./app.main.ui.ds.tooltip.js";
import "./app.main.ui.formats.js";
import "./app.main.ui.inspect.styles.property_detail_copiable.js";
import "./app.util.clipboard.js";
import "./app.util.color.js";
import "./app.util.i18n.js";
import "./app.util.timers.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.styles.rows.color_properties_row');
app.main.ui.inspect.styles.rows.color_properties_row.schema_COLON_color_properties_row = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"copiable","copiable",828892749),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
app.main.ui.inspect.styles.rows.color_properties_row.color_properties_row_STAR__validator = rumext.v2.validation.validator(app.main.ui.inspect.styles.rows.color_properties_row.schema_COLON_color_properties_row);

app.main.ui.inspect.styles.rows.color_properties_row.color_properties_row_STAR_ = (function app$main$ui$inspect$styles$rows$color_properties_row$color_properties_row_STAR_(props_74870){
// ===== start props checking =====;

var res__47117__auto___74878 = app.main.ui.inspect.styles.rows.color_properties_row.color_properties_row_STAR__validator(props_74870);
if((!((res__47117__auto___74878 == null)))){
var items__47118__auto___74879 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___74878);
var msg__47122__auto___74880 = ["invalid props on component color-properties-row*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___74879),"\n"].join('');
throw (new Error(msg__47122__auto___74880));
} else {
}

// ===== end props checking =====;

var format = props_74870.format;
var color = props_74870.color;
var term = props_74870.term;
var token = props_74870.token;
var class$ = props_74870.className;
var copied_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var copied = cljs.core.deref(copied_STAR_);
var color_value = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color);
var color_gradient = new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color);
var color_image = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(color);
var color_image_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(color_image);
var color_image_url = (((!((color_image == null))))?app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1(color_image):null);
var row_ref = rumext.v2.use_ref(null);
var color_opacity = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color)],(function (){
return ""+(app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1((app.common.data.coalesce(new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(color),(1)) * (100))) ?? "")+"%";
}));
var formatted_color_value = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color),rumext.v2.adapt(format),rumext.v2.adapt(color_opacity)],(function (){
if((!((new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color) == null)))){
var G__74871 = format;
switch (G__74871) {
case "hex":
return ""+(color_value ?? "")+" "+(color_opacity ?? "");

break;
case "rgba":
var vec__74872 = app.common.types.color.hex__GT_rgba(color_value,color_opacity);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74872,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74872,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74872,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74872,(3),null);
var result = app.common.types.color.format_rgba(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,a], null));
return result;

break;
case "hsla":
var vec__74875 = app.common.types.color.hex__GT_hsla(color_value,color_opacity);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74875,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74875,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74875,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74875,(3),null);
var result = app.common.types.color.format_hsla(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l,a], null));
return result;

break;
default:
return color_value;

}
} else {
if((!((new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color) == null)))){
return app.util.color.gradient_type__GT_string(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(color_gradient));
} else {
if((!((new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(color) == null)))){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("media.image");
} else {
return "none";

}
}
}
}));
var css_term = cuerdas.core.replace(cuerdas.core.lower(cuerdas.core.replace(cuerdas.core.replace(term,/ /,"-"),/([A-Z])/,"-$1")),/^-/,"");
var copiable_value = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color),rumext.v2.adapt(token),rumext.v2.adapt(format),rumext.v2.adapt(color_opacity)],(function (){
if((!((token == null)))){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color))){
return ""+(css_term ?? "")+": "+(app.util.color.color__GT_format__GT_background(color,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format)) ?? "")+";";
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color))){
return ""+(css_term ?? "")+": "+(app.util.color.color__GT_background(color) ?? "")+";";
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(color))){
return ""+(css_term ?? "")+": url("+(color_image_url ?? "")+") no-repeat center center / cover;";
} else {
return "none";

}
}
}
}
}));
var copy_attr = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(copied),rumext.v2.adapt(copiable_value)],(function (){
cljs.core.reset_BANG_(copied_STAR_,true);

app.util.clipboard.to_clipboard(copiable_value);

return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((1000),(function (){
return cljs.core.reset_BANG_(copied_STAR_,false);
}));
}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("dl",{'data-testid':"property-row",'className':("main_ui_inspect_styles_rows_color_properties_row__property-row" ?? "")+" "+(class$ ?? ""),'children':[rumext.v2.jsx("dt",{'className':"main_ui_inspect_styles_rows_color_properties_row__property-term",'children':term}),rumext.v2.jsx("dd",{'className':"main_ui_inspect_styles_rows_color_properties_row__property-detail",'children':(cljs.core.truth_(token)?rumext.v2.jsx(app.main.ui.ds.tooltip.tooltip_STAR_,{'id':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token),'className':"main_ui_inspect_styles_rows_color_properties_row__tooltip-token-wrapper",'triggerRef':row_ref,'content':(function (){
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_styles_rows_color_properties_row__tooltip-token",'children':[rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_rows_color_properties_row__tooltip-token-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.tabs.styles.token-resolved-value")}),rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_rows_color_properties_row__tooltip-token-value",'children':new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626).cljs$core$IFn$_invoke$arity$1(token)})]});
}),'children':rumext.v2.jsx(app.main.ui.inspect.styles.property_detail_copiable.property_detail_copiable_STAR_,{'color':color,'token':token,'ref':row_ref,'copied':copied,'onClick':copy_attr,'children':formatted_color_value})}):rumext.v2.jsx(app.main.ui.inspect.styles.property_detail_copiable.property_detail_copiable_STAR_,{'color':color,'copied':copied,'onClick':copy_attr,'children':formatted_color_value}))})]}),(cljs.core.truth_(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(color))?rumext.v2.jsxs("figure",{'className':"main_ui_inspect_styles_rows_color_properties_row__color-image-preview",'children':[rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_rows_color_properties_row__color-image-preview-wrapper",'children':rumext.v2.jsx("img",{'src':color_image_url,'title':color_image_name,'alt':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.image.preview"),'className':"main_ui_inspect_styles_rows_color_properties_row__color-image"})}),rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"secondary",'to':color_image_url,'type':"button",'target':"_blank",'download':color_image_name,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.image.download")})]}):null)]});
});

(app.main.ui.inspect.styles.rows.color_properties_row.color_properties_row_STAR_.displayName = "color-properties-row*");


//# sourceMappingURL=app.main.ui.inspect.styles.rows.color_properties_row.js.map
