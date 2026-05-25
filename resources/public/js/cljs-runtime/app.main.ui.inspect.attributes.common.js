import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.types.color.js";
import "./app.config.js";
import "./app.main.refs.js";
import "./app.main.ui.components.color_bullet.js";
import "./app.main.ui.components.copy_button.js";
import "./app.main.ui.components.select.js";
import "./app.main.ui.ds.buttons.button.js";
import "./app.main.ui.formats.js";
import "./app.main.ui.inspect.common.colors.js";
import "./app.util.i18n.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.attributes.common');
app.main.ui.inspect.attributes.common.get_css_rule_humanized = (function app$main$ui$inspect$attributes$common$get_css_rule_humanized(property){
var $ = property;
var $__$1 = app.common.data.name($);
var $__$2 = cuerdas.core.split.cljs$core$IFn$_invoke$arity$2($__$1,"-");
var $__$3 = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",$__$2);
return cuerdas.core.capital($__$3);
});
app.main.ui.inspect.attributes.common.color_row = (function app$main$ui$inspect$attributes$common$color_row(props_74647){
var map__74648 = rumext.v2.util.wrap_props(props_74647);
var map__74648__$1 = cljs.core.__destructure_map(map__74648);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74648__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74648__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var copy_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74648__$1,new cljs.core.Keyword(null,"copy-data","copy-data",-320904302));
var property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74648__$1,new cljs.core.Keyword(null,"property","property",-1114278232));
var on_change_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74648__$1,new cljs.core.Keyword(null,"on-change-format","on-change-format",-1600641015));
var colors_library = app.main.ui.inspect.common.colors.use_colors_library(color);
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
var image = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(color__$1);
if(cljs.core.truth_(image)){
var name = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(image);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("media.image");
}
})();
return rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_common__attributes-image-as-color-row",'children':rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_common__attributes-color-row",'children':[rumext.v2.jsx("div",{'style':({"--bullet-size": "16px"}),'className':"main_ui_inspect_attributes_common__bullet-wrapper",'children':rumext.v2.jsx(app.main.ui.components.color_bullet.color_bullet,{'color':color__$1,'mini':true})}),rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_common__format-wrapper",'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_common__image-format",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("media.image.short")})}),rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':copy_data,'className':"main_ui_inspect_attributes_common__color-row-copy-btn",'children':rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_common__color-info"+" "+(((!((color_library_name == null))))?"main_ui_inspect_attributes_common__two-line":""),'children':[rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_common__first-row",'children':rumext.v2.jsx("span",{'className':"main_ui_inspect_attributes_common__opacity-info",'children':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(color__$1))),"%"].join('')})}),(cljs.core.truth_(color_library_name)?rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_common__second-row",'children':rumext.v2.jsx("div",{'data-testid':"color-library-name",'className':"main_ui_inspect_attributes_common__color-name-library",'children':color_library_name})}):null)]})}),rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_common__image-download",'children':[rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_common__image-wrapper",'children':rumext.v2.jsx("img",{'src':app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1(image),'className':"main_ui_inspect_attributes_common__resolved-image"})}),rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'className':"main_ui_inspect_attributes_common__download-button",'type':"button",'variant':"secondary",'target':"_blank",'download':name,'to':app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1(image),'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.image.download")})]})]})});
} else {
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_common__attributes-color-row",'children':[rumext.v2.jsx("div",{'style':({"--bullet-size": "16px"}),'className':"main_ui_inspect_attributes_common__bullet-wrapper",'children':rumext.v2.jsx(app.main.ui.components.color_bullet.color_bullet,{'color':color__$1,'mini':true})}),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"inspect-styles","inspect-styles",1359737423)))?rumext.v2.jsx("div",{'className':"attr-label",'children':property}):rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_common__format-wrapper",'children':[(cljs.core.truth_((function (){var and__5023__auto__ = on_change_format;
if(cljs.core.truth_(and__5023__auto__)){
var or__5025__auto__ = new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return image;
}
} else {
return and__5023__auto__;
}
})())?null:rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':format,'class':"main_ui_inspect_attributes_common__select-format-wrapper",'options':new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"hex","hex",41691346),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.color.hex")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"rgba","rgba",-2032958718),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.color.rgba")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"hsla","hsla",1815162996),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.color.hsla")], null)], null),'on-change':on_change_format})),(cljs.core.truth_(new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color__$1))?rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_common__format-info",'children':"rgba"}):null)]})),rumext.v2.jsxs(app.main.ui.components.copy_button.copy_button_STAR_,{'data':copy_data,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.copy-color"),'className':"main_ui_inspect_attributes_common__color-row-copy-btn"+" "+((cljs.core.not(color_library_name))?"main_ui_inspect_attributes_common__one-line":"")+" "+(((!((color_library_name == null))))?"main_ui_inspect_attributes_common__two-line":""),'children':[rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_common__first-row",'children':rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_common__name-opacity",'children':[rumext.v2.jsx("span",{'className':"main_ui_inspect_attributes_common__color-value-wrapper"+" "+(cljs.core.truth_(new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color__$1))?"main_ui_inspect_attributes_common__gradient-name":""),'children':(cljs.core.truth_(new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color__$1))?rumext.v2.jsx(app.main.ui.components.color_bullet.color_name,{'color':color__$1,'size':(90)}):(function (){var G__74649 = format;
var G__74649__$1 = (((G__74649 instanceof cljs.core.Keyword))?G__74649.fqn:null);
switch (G__74649__$1) {
case "hex":
return rumext.v2.jsx(app.main.ui.components.color_bullet.color_name,{'color':color__$1});

break;
case "rgba":
var vec__74650 = app.common.types.color.hex__GT_rgba(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color__$1),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(color__$1));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74650,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74650,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74650,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74650,(3),null);
var result = app.common.types.color.format_rgba(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,a], null));
return rumext.v2.jsx(rumext.v2.Fragment,{'children':result});

break;
case "hsla":
var vec__74653 = app.common.types.color.hex__GT_hsla(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color__$1),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(color__$1));
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74653,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74653,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74653,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74653,(3),null);
var result = app.common.types.color.format_hsla(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l,a], null));
return rumext.v2.jsx(rumext.v2.Fragment,{'children':result});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74649__$1)].join('')));

}
})())}),((((cljs.core.not(new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hex","hex",41691346),format))))?rumext.v2.jsx("span",{'className':"main_ui_inspect_attributes_common__opacity-info",'children':""+(app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1((app.common.data.coalesce(new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(color__$1),(1)) * (100))) ?? "")+"%"}):null)]})}),(cljs.core.truth_(color_library_name)?rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_common__second-row",'children':rumext.v2.jsx("div",{'data-testid':"color-library-name",'className':"main_ui_inspect_attributes_common__color-name-library",'children':color_library_name})}):null)]})]});
}
});

(app.main.ui.inspect.attributes.common.color_row.displayName = "color-row");


//# sourceMappingURL=app.main.ui.inspect.attributes.common.js.map
