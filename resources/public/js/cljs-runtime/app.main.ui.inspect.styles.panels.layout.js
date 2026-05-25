import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.ui.inspect.attributes.common.js";
import "./app.main.ui.inspect.styles.rows.properties_row.js";
import "./app.util.code_gen.style_css.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.styles.panels.layout');
app.main.ui.inspect.styles.panels.layout.properties = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"justify-items","justify-items",1638310783),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),new cljs.core.Keyword(null,"column-gap","column-gap",384822863),new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"padding-inline-start","padding-inline-start",1837266335),new cljs.core.Keyword(null,"padding-inline-end","padding-inline-end",-647416958),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),new cljs.core.Keyword(null,"padding-block-end","padding-block-end",923602025)], null);
app.main.ui.inspect.styles.panels.layout.shape_prop__GT_padding_prop = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword(null,"padding-inline-end","padding-inline-end",-647416958),new cljs.core.Keyword(null,"p2","p2",905500641),new cljs.core.Keyword(null,"padding-block-end","padding-block-end",923602025),new cljs.core.Keyword(null,"p3","p3",1731040739),new cljs.core.Keyword(null,"padding-inline-start","padding-inline-start",1837266335),new cljs.core.Keyword(null,"p4","p4",-1090126814)], null);
app.main.ui.inspect.styles.panels.layout.has_padding_QMARK_ = (function app$main$ui$inspect$styles$panels$layout$has_padding_QMARK_(shape){
var padding = new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747).cljs$core$IFn$_invoke$arity$1(shape);
var padding_keys = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword(null,"p2","p2",905500641),new cljs.core.Keyword(null,"p3","p3",1731040739),new cljs.core.Keyword(null,"p4","p4",-1090126814)], null);
return cljs.core.some((function (key){
return ((cljs.core.contains_QMARK_(padding,key)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get.cljs$core$IFn$_invoke$arity$2(padding,key))));
}),padding_keys);
});
app.main.ui.inspect.styles.panels.layout.get_applied_tokens_in_shape = (function app$main$ui$inspect$styles$panels$layout$get_applied_tokens_in_shape(shape_tokens,property){
var padding_prop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.ui.inspect.styles.panels.layout.shape_prop__GT_padding_prop,property);
if(cljs.core.truth_(padding_prop)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape_tokens,padding_prop);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape_tokens,property);
}
});
app.main.ui.inspect.styles.panels.layout.get_resolved_token = (function app$main$ui$inspect$styles$panels$layout$get_resolved_token(property,shape,resolved_tokens){
var shape_tokens = new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871).cljs$core$IFn$_invoke$arity$1(shape);
var applied_tokens_in_shape = app.main.ui.inspect.styles.panels.layout.get_applied_tokens_in_shape(shape_tokens,property);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(resolved_tokens,applied_tokens_in_shape);
return token;
});
app.main.ui.inspect.styles.panels.layout.generate_layout_shorthand = (function app$main$ui$inspect$styles$panels$layout$generate_layout_shorthand(shapes,objects){
var shape = cljs.core.first(shapes);
var shorthand_padding = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes),(1));
if(and__5023__auto__){
return app.main.ui.inspect.styles.panels.layout.has_padding_QMARK_(shape);
} else {
return and__5023__auto__;
}
})())?app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$3(objects,shape,new cljs.core.Keyword(null,"padding","padding",1660304693)):null);
var shorthand_grid = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(shape)))))?["grid: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$3(objects,shape,new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629)))," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$3(objects,shape,new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133))),";"].join(''):null);
var shorthand = (cljs.core.truth_((function (){var or__5025__auto__ = shorthand_padding;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return shorthand_grid;
}
})())?[shorthand_grid," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shorthand_padding)].join(''):null);
return shorthand;
});
app.main.ui.inspect.styles.panels.layout.layout_panel_STAR_ = (function app$main$ui$inspect$styles$panels$layout$layout_panel_STAR_(props_74890){
var shapes = props_74890.shapes;
var objects = props_74890.objects;
var resolved_tokens = props_74890.resolvedTokens;
var on_layout_shorthand = props_74890.onLayoutShorthand;
var shorthand_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.ui.inspect.styles.panels.layout.generate_layout_shorthand(shapes,objects);
}));
var shorthand = cljs.core.deref(shorthand_STAR_);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shorthand),rumext.v2.adapt(on_layout_shorthand),rumext.v2.adapt(shapes),rumext.v2.adapt(objects)],(function (){
cljs.core.reset_BANG_(shorthand_STAR_,app.main.ui.inspect.styles.panels.layout.generate_layout_shorthand(shapes,objects));

var G__74891 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"panel","panel",-558637456),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"property","property",-1114278232),shorthand], null);
return (on_layout_shorthand.cljs$core$IFn$_invoke$arity$1 ? on_layout_shorthand.cljs$core$IFn$_invoke$arity$1(G__74891) : on_layout_shorthand.call(null,G__74891));
}));

return rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_panels_layout__variants-panel",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,shape){
out_arr__46744__auto__.push(rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_panels_layout__layout-shape",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto____$1,property){
out_arr__46744__auto____$1.push((function (){var temp__5825__auto__ = app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$3(objects,shape,property);
if(cljs.core.truth_(temp__5825__auto__)){
var value = temp__5825__auto__;
var property_name = app.main.ui.inspect.attributes.common.get_css_rule_humanized(property);
var resolved_token = app.main.ui.inspect.styles.panels.layout.get_resolved_token(property,shape,resolved_tokens);
var property_value = ((cljs.core.not(resolved_token))?app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$3(objects,shape,property):"");
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'term':property_name,'detail':value,'token':resolved_token,'property':property_value,'copiable':true},""+"layout-property-"+(property ?? ""));
} else {
return null;
}
})());

return out_arr__46744__auto____$1;
}),[],app.main.ui.inspect.styles.panels.layout.properties)},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));

return out_arr__46744__auto__;
}),[],shapes)});
});

(app.main.ui.inspect.styles.panels.layout.layout_panel_STAR_.displayName = "layout-panel*");


//# sourceMappingURL=app.main.ui.inspect.styles.panels.layout.js.map
