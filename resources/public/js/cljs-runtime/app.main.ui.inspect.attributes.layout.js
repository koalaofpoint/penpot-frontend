import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.types.shape.layout.js";
import "./app.main.ui.components.copy_button.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.inspect.attributes.common.js";
import "./app.util.code_gen.style_css.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.attributes.layout');
app.main.ui.inspect.attributes.layout.properties = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"justify-items","justify-items",1638310783),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),new cljs.core.Keyword(null,"column-gap","column-gap",384822863),new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"padding-inline-start","padding-inline-start",1837266335),new cljs.core.Keyword(null,"padding-inline-end","padding-inline-end",-647416958),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),new cljs.core.Keyword(null,"padding-block-end","padding-block-end",923602025)], null);
app.main.ui.inspect.attributes.layout.layout_block = (function app$main$ui$inspect$attributes$layout$layout_block(props_74668){
var map__74669 = rumext.v2.util.wrap_props(props_74668);
var map__74669__$1 = cljs.core.__destructure_map(map__74669);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74669__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74669__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,property){
out_arr__46744__auto__.push((function (){var temp__5825__auto__ = app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$3(objects,shape,property);
if(cljs.core.truth_(temp__5825__auto__)){
var value = temp__5825__auto__;
var property_name = app.main.ui.inspect.attributes.common.get_css_rule_humanized(property);
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_layout__layout-row",'children':[rumext.v2.jsx("div",{'title':property_name,'className':"attr-label",'children':property_name}),rumext.v2.jsx("div",{'className':"attr-value",'children':rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$3(objects,shape,property),'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_layout__button-children",'children':value})})})]},""+"layout-"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape) ?? "")+"-"+(app.common.data.name(property) ?? ""));
} else {
return null;
}
})());

return out_arr__46744__auto__;
}),[],app.main.ui.inspect.attributes.layout.properties);
});

(app.main.ui.inspect.attributes.layout.layout_block.displayName = "layout-block");

app.main.ui.inspect.attributes.layout.layout_panel = (function app$main$ui$inspect$attributes$layout$layout_panel(props_74670){
var map__74671 = rumext.v2.util.wrap_props(props_74670);
var map__74671__$1 = cljs.core.__destructure_map(map__74671);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74671__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74671__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var shapes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.any_layout_QMARK_,shapes);
if(cljs.core.seq(shapes__$1)){
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_layout__attributes-block",'children':[rumext.v2.jsx(app.main.ui.components.title_bar.inspect_title_bar_STAR_,{'title':"Layout",'className':"main_ui_inspect_attributes_layout__title-wrapper",'titleClass':"main_ui_inspect_attributes_layout__layout-attr-title",'children':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes__$1),(1)))?rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.util.code_gen.style_css.get_shape_properties_css.cljs$core$IFn$_invoke$arity$3(objects,cljs.core.first(shapes__$1),app.main.ui.inspect.attributes.layout.properties),'className':"main_ui_inspect_attributes_layout__copy-btn-title"}):null)}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,shape){
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.inspect.attributes.layout.layout_block,{'shape':shape,'objects':objects},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));

return out_arr__46744__auto__;
}),[],shapes__$1)]});
} else {
return null;
}
});

(app.main.ui.inspect.attributes.layout.layout_panel.displayName = "layout-panel");


//# sourceMappingURL=app.main.ui.inspect.attributes.layout.js.map
