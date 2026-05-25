import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.ui.inspect.attributes.common.js";
import "./app.main.ui.inspect.styles.rows.properties_row.js";
import "./app.util.code_gen.style_css.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.styles.panels.geometry');
app.main.ui.inspect.styles.panels.geometry.properties = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"border-start-start-radius","border-start-start-radius",520714431),new cljs.core.Keyword(null,"border-start-end-radius","border-start-end-radius",867698004),new cljs.core.Keyword(null,"border-end-start-radius","border-end-start-radius",-251560249),new cljs.core.Keyword(null,"border-end-end-radius","border-end-end-radius",670676344),new cljs.core.Keyword(null,"transform","transform",1381301764)], null);
app.main.ui.inspect.styles.panels.geometry.shape_prop__GT_border_radius_prop = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-start-start-radius","border-start-start-radius",520714431),new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"border-start-end-radius","border-start-end-radius",867698004),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"border-end-start-radius","border-end-start-radius",-251560249),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"border-end-end-radius","border-end-end-radius",670676344),new cljs.core.Keyword(null,"r4","r4",1134323163)], null);
/**
 * Returns true if the shape has any non-zero border radius values.
 */
app.main.ui.inspect.styles.panels.geometry.has_border_radius_QMARK_ = (function app$main$ui$inspect$styles$panels$geometry$has_border_radius_QMARK_(shape){
var radius_keys = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"r4","r4",1134323163)], null);
return cljs.core.some((function (key){
return ((cljs.core.contains_QMARK_(shape,key)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,key))));
}),radius_keys);
});
app.main.ui.inspect.styles.panels.geometry.get_applied_tokens_in_shape = (function app$main$ui$inspect$styles$panels$geometry$get_applied_tokens_in_shape(shape_tokens,property){
var border_prop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.ui.inspect.styles.panels.geometry.shape_prop__GT_border_radius_prop,property);
if(cljs.core.truth_(border_prop)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape_tokens,border_prop);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape_tokens,property);
}
});
app.main.ui.inspect.styles.panels.geometry.get_resolved_token = (function app$main$ui$inspect$styles$panels$geometry$get_resolved_token(property,shape,resolved_tokens){
var shape_tokens = new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871).cljs$core$IFn$_invoke$arity$1(shape);
var applied_tokens_in_shape = app.main.ui.inspect.styles.panels.geometry.get_applied_tokens_in_shape(shape_tokens,property);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(resolved_tokens,applied_tokens_in_shape);
return token;
});
app.main.ui.inspect.styles.panels.geometry.generate_geometry_shorthand = (function app$main$ui$inspect$styles$panels$geometry$generate_geometry_shorthand(shapes,objects){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes),(1));
if(and__5023__auto__){
return app.main.ui.inspect.styles.panels.geometry.has_border_radius_QMARK_(cljs.core.first(shapes));
} else {
return and__5023__auto__;
}
})())){
return app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$3(objects,cljs.core.first(shapes),new cljs.core.Keyword(null,"border-radius","border-radius",419594011));
} else {
return null;
}
});
app.main.ui.inspect.styles.panels.geometry.geometry_panel_STAR_ = (function app$main$ui$inspect$styles$panels$geometry$geometry_panel_STAR_(props_74888){
var shapes = props_74888.shapes;
var on_geometry_shorthand = props_74888.onGeometryShorthand;
var objects = props_74888.objects;
var resolved_tokens = props_74888.resolvedTokens;
var shorthand_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.ui.inspect.styles.panels.geometry.generate_geometry_shorthand(shapes,objects);
}));
var shorthand = cljs.core.deref(shorthand_STAR_);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shorthand),rumext.v2.adapt(on_geometry_shorthand),rumext.v2.adapt(shapes),rumext.v2.adapt(objects)],(function (){
cljs.core.reset_BANG_(shorthand_STAR_,app.main.ui.inspect.styles.panels.geometry.generate_geometry_shorthand(shapes,objects));

var G__74889 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"panel","panel",-558637456),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"property","property",-1114278232),shorthand], null);
return (on_geometry_shorthand.cljs$core$IFn$_invoke$arity$1 ? on_geometry_shorthand.cljs$core$IFn$_invoke$arity$1(G__74889) : on_geometry_shorthand.call(null,G__74889));
}));

return rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_panels_geometry__geometry-panel",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,shape){
out_arr__46744__auto__.push(rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_panels_geometry__geometry-shape",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto____$1,property){
out_arr__46744__auto____$1.push((function (){var temp__5825__auto__ = app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$3(objects,shape,property);
if(cljs.core.truth_(temp__5825__auto__)){
var value = temp__5825__auto__;
var property_name = app.main.ui.inspect.attributes.common.get_css_rule_humanized(property);
var resolved_token = app.main.ui.inspect.styles.panels.geometry.get_resolved_token(property,shape,resolved_tokens);
var property_value = ((cljs.core.not(resolved_token))?app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$3(objects,shape,property):"");
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'term':property_name,'detail':value,'token':resolved_token,'property':property_value,'copiable':true},""+"geometry-property-"+(property ?? ""));
} else {
return null;
}
})());

return out_arr__46744__auto____$1;
}),[],app.main.ui.inspect.styles.panels.geometry.properties)},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));

return out_arr__46744__auto__;
}),[],shapes)});
});

(app.main.ui.inspect.styles.panels.geometry.geometry_panel_STAR_.displayName = "geometry-panel*");


//# sourceMappingURL=app.main.ui.inspect.styles.panels.geometry.js.map
