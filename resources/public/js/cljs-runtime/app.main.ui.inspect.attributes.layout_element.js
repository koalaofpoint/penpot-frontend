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
goog.provide('app.main.ui.inspect.attributes.layout_element');
app.main.ui.inspect.attributes.layout_element.properties = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"grid-column","grid-column",-1086912770),new cljs.core.Keyword(null,"grid-row","grid-row",-1737175087)], null);
app.main.ui.inspect.attributes.layout_element.layout_element_block = (function app$main$ui$inspect$attributes$layout_element$layout_element_block(props_74672){
var map__74673 = rumext.v2.util.wrap_props(props_74672);
var map__74673__$1 = cljs.core.__destructure_map(map__74673);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74673__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74673__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,property){
out_arr__46744__auto__.push((function (){var temp__5825__auto__ = app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$3(objects,shape,property);
if(cljs.core.truth_(temp__5825__auto__)){
var value = temp__5825__auto__;
var property_name = app.main.ui.inspect.attributes.common.get_css_rule_humanized(property);
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_layout_element__layout-element-row",'children':[rumext.v2.jsx("div",{'className':"attr-label",'children':property_name}),rumext.v2.jsx("div",{'className':"attr-value",'children':rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$3(objects,shape,property),'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_layout_element__button-children",'children':value})})})]},""+"layout-element-"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape) ?? "")+"-"+(app.common.data.name(property) ?? ""));
} else {
return null;
}
})());

return out_arr__46744__auto__;
}),[],app.main.ui.inspect.attributes.layout_element.properties);
});

(app.main.ui.inspect.attributes.layout_element.layout_element_block.displayName = "layout-element-block");

app.main.ui.inspect.attributes.layout_element.layout_element_panel = (function app$main$ui$inspect$attributes$layout_element$layout_element_panel(props_74678){
var map__74679 = rumext.v2.util.wrap_props(props_74678);
var map__74679__$1 = cljs.core.__destructure_map(map__74679);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74679__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74679__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var shapes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74674_SHARP_){
return app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,p1__74674_SHARP_);
}),shapes);
var only_flex_QMARK_ = cljs.core.every_QMARK_((function (p1__74675_SHARP_){
return app.common.types.shape.layout.flex_layout_immediate_child_QMARK_(objects,p1__74675_SHARP_);
}),shapes__$1);
var only_grid_QMARK_ = cljs.core.every_QMARK_((function (p1__74676_SHARP_){
return app.common.types.shape.layout.grid_layout_immediate_child_QMARK_(objects,p1__74676_SHARP_);
}),shapes__$1);
var some_layout_prop_QMARK_ = cljs.core.seq(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (shape){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__74677_SHARP_){
return app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$3(objects,shape,p1__74677_SHARP_);
}),app.main.ui.inspect.attributes.layout_element.properties);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shapes__$1], 0)));
var menu_title = ((only_flex_QMARK_)?"Flex element":((only_grid_QMARK_)?"Flex element":"Layout element"
));
if(some_layout_prop_QMARK_){
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_layout_element__attributes-block",'children':[rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':false,'title':menu_title,'className':"main_ui_inspect_attributes_layout_element__title-wrapper",'titleClass':"main_ui_inspect_attributes_layout_element__layout-element-attr-title",'children':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes__$1),(1)))?rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.util.code_gen.style_css.get_shape_properties_css.cljs$core$IFn$_invoke$arity$3(objects,cljs.core.first(shapes__$1),app.main.ui.inspect.attributes.layout_element.properties),'className':"main_ui_inspect_attributes_layout_element__copy-btn-title"}):null)}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,shape){
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.inspect.attributes.layout_element.layout_element_block,{'shape':shape,'objects':objects},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));

return out_arr__46744__auto__;
}),[],shapes__$1)]});
} else {
return null;
}
});

(app.main.ui.inspect.attributes.layout_element.layout_element_panel.displayName = "layout-element-panel");


//# sourceMappingURL=app.main.ui.inspect.attributes.layout_element.js.map
