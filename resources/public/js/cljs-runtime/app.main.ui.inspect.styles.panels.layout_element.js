import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.types.shape.layout.js";
import "./app.main.ui.inspect.attributes.common.js";
import "./app.main.ui.inspect.styles.rows.properties_row.js";
import "./app.util.code_gen.style_css.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.styles.panels.layout_element');
app.main.ui.inspect.styles.panels.layout_element.shape_prop__GT_margin_prop = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),new cljs.core.Keyword(null,"m1","m1",-108094626),new cljs.core.Keyword(null,"margin-inline-end","margin-inline-end",-1696808891),new cljs.core.Keyword(null,"m2","m2",-587003306),new cljs.core.Keyword(null,"margin-block-end","margin-block-end",-1287470806),new cljs.core.Keyword(null,"m3","m3",-703635357),new cljs.core.Keyword(null,"margin-inline-start","margin-inline-start",320232954),new cljs.core.Keyword(null,"m4","m4",-1624571215),new cljs.core.Keyword(null,"max-block-size","max-block-size",-1751985816),new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307),new cljs.core.Keyword(null,"min-block-size","min-block-size",2039624084),new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548),new cljs.core.Keyword(null,"max-inline-size","max-inline-size",1870424342),new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366),new cljs.core.Keyword(null,"min-inline-size","min-inline-size",-2050841943),new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548)], null);
app.main.ui.inspect.styles.panels.layout_element.has_margin_QMARK_ = (function app$main$ui$inspect$styles$panels$layout_element$has_margin_QMARK_(shape){
var margin = new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708).cljs$core$IFn$_invoke$arity$1(shape);
var margin_keys = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m1","m1",-108094626),new cljs.core.Keyword(null,"m2","m2",-587003306),new cljs.core.Keyword(null,"m3","m3",-703635357),new cljs.core.Keyword(null,"m4","m4",-1624571215)], null);
return cljs.core.some((function (key){
return ((cljs.core.contains_QMARK_(margin,key)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get.cljs$core$IFn$_invoke$arity$2(margin,key))));
}),margin_keys);
});
app.main.ui.inspect.styles.panels.layout_element.get_applied_margins_in_shape = (function app$main$ui$inspect$styles$panels$layout_element$get_applied_margins_in_shape(shape_tokens,property){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.ui.inspect.styles.panels.layout_element.shape_prop__GT_margin_prop,property);
if(cljs.core.truth_(temp__5823__auto__)){
var margin_prop = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape_tokens,margin_prop);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape_tokens,property);
}
});
app.main.ui.inspect.styles.panels.layout_element.get_resolved_tokens = (function app$main$ui$inspect$styles$panels$layout_element$get_resolved_tokens(property,shape,resolved_tokens){
var temp__5825__auto__ = new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(temp__5825__auto__)){
var shape_tokens = temp__5825__auto__;
var applied_tokens_in_shape = app.main.ui.inspect.styles.panels.layout_element.get_applied_margins_in_shape(shape_tokens,property);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(resolved_tokens,applied_tokens_in_shape);
return token;
} else {
return null;
}
});
app.main.ui.inspect.styles.panels.layout_element.generate_layout_element_shorthand = (function app$main$ui$inspect$styles$panels$layout_element$generate_layout_element_shorthand(shapes,objects){
var shape = cljs.core.first(shapes);
var shorthand_margin = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes),(1));
if(and__5023__auto__){
return app.main.ui.inspect.styles.panels.layout_element.has_margin_QMARK_(shape);
} else {
return and__5023__auto__;
}
})())?app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$3(objects,shape,new cljs.core.Keyword(null,"margin","margin",-995903681)):null);
var shorthand_grow = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes),(1))) && (app.common.types.shape.layout.flex_layout_immediate_child_QMARK_(objects,shape))))?(function (){var temp__5823__auto__ = app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$3(objects,shape,new cljs.core.Keyword(null,"flex","flex",-1425124628));
if(cljs.core.truth_(temp__5823__auto__)){
var flex_value = temp__5823__auto__;
return flex_value;
} else {
return (0);
}
})():null);
var shorthand_basis = (0);
var shorthand_shrink = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes),(1))) && (app.common.types.shape.layout.flex_layout_immediate_child_QMARK_(objects,shape))))?(function (){var temp__5823__auto__ = app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$3(objects,shape,new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383));
if(cljs.core.truth_(temp__5823__auto__)){
var flex_shrink_value = temp__5823__auto__;
return flex_shrink_value;
} else {
return (0);
}
})():null);
var shorthand_flex = ""+"flex: "+(shorthand_grow ?? "")+" "+(shorthand_basis ?? "")+" "+(shorthand_shrink ?? "")+";";
var shorthand = ""+(shorthand_margin ?? "")+" "+(shorthand_flex ?? "");
return shorthand;
});
app.main.ui.inspect.styles.panels.layout_element.layout_element_panel_STAR_ = (function app$main$ui$inspect$styles$panels$layout_element$layout_element_panel_STAR_(props_74893){
var shapes = props_74893.shapes;
var objects = props_74893.objects;
var resolved_tokens = props_74893.resolvedTokens;
var on_layout_element_shorthand = props_74893.onLayoutElementShorthand;
var layout_element_properties = props_74893.layoutElementProperties;
var shapes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74892_SHARP_){
return app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,p1__74892_SHARP_);
}),shapes);
var shorthand_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.ui.inspect.styles.panels.layout_element.generate_layout_element_shorthand(shapes__$1,objects);
}));
var shorthand = cljs.core.deref(shorthand_STAR_);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shorthand),rumext.v2.adapt(on_layout_element_shorthand),rumext.v2.adapt(shapes__$1),rumext.v2.adapt(objects)],(function (){
cljs.core.reset_BANG_(shorthand_STAR_,app.main.ui.inspect.styles.panels.layout_element.generate_layout_element_shorthand(shapes__$1,objects));

var G__74894 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"panel","panel",-558637456),new cljs.core.Keyword(null,"layout-element","layout-element",1221436156),new cljs.core.Keyword(null,"property","property",-1114278232),shorthand], null);
return (on_layout_element_shorthand.cljs$core$IFn$_invoke$arity$1 ? on_layout_element_shorthand.cljs$core$IFn$_invoke$arity$1(G__74894) : on_layout_element_shorthand.call(null,G__74894));
}));

return rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_panels_layout_element__layout-element-panel",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,shape){
out_arr__46744__auto__.push(rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_panels_layout_element__layout-element-shape",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto____$1,property){
out_arr__46744__auto____$1.push((function (){var temp__5825__auto__ = app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$3(objects,shape,property);
if(cljs.core.truth_(temp__5825__auto__)){
var value = temp__5825__auto__;
var property_name = app.main.ui.inspect.attributes.common.get_css_rule_humanized(property);
var resolved_token = app.main.ui.inspect.styles.panels.layout_element.get_resolved_tokens(property,shape,resolved_tokens);
var property_value = ((cljs.core.not(resolved_token))?app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$3(objects,shape,property):"");
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'term':property_name,'detail':cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),'token':resolved_token,'property':property_value,'copiable':true},""+"layout-element-property-"+(property ?? ""));
} else {
return null;
}
})());

return out_arr__46744__auto____$1;
}),[],layout_element_properties)},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));

return out_arr__46744__auto__;
}),[],shapes__$1)});
});

(app.main.ui.inspect.styles.panels.layout_element.layout_element_panel_STAR_.displayName = "layout-element-panel*");


//# sourceMappingURL=app.main.ui.inspect.styles.panels.layout_element.js.map
