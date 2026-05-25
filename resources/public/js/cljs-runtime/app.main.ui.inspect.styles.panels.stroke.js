import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.types.color.js";
import "./app.config.js";
import "./app.main.ui.inspect.attributes.common.js";
import "./app.main.ui.inspect.styles.rows.color_properties_row.js";
import "./app.main.ui.inspect.styles.rows.properties_row.js";
import "./app.util.code_gen.style_css.js";
import "./app.util.color.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.styles.panels.stroke');
app.main.ui.inspect.styles.panels.stroke.properties = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"border-width","border-width",-1512605390)], null);
app.main.ui.inspect.styles.panels.stroke.shape_prop__GT_stroke_prop = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937)], null);
app.main.ui.inspect.styles.panels.stroke.get_applied_tokens_in_shape = (function app$main$ui$inspect$styles$panels$stroke$get_applied_tokens_in_shape(shape_tokens,property){
var border_prop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.ui.inspect.styles.panels.stroke.shape_prop__GT_stroke_prop,property);
if(cljs.core.truth_(border_prop)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape_tokens,border_prop);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape_tokens,property);
}
});
/**
 * Get the resolved token for a specific property in a shape.
 */
app.main.ui.inspect.styles.panels.stroke.get_resolved_token = (function app$main$ui$inspect$styles$panels$stroke$get_resolved_token(property,shape,resolved_tokens){
var shape_tokens = new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871).cljs$core$IFn$_invoke$arity$1(shape);
var applied_tokens_in_shape = app.main.ui.inspect.styles.panels.stroke.get_applied_tokens_in_shape(shape_tokens,property);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(resolved_tokens,applied_tokens_in_shape);
return token;
});
app.main.ui.inspect.styles.panels.stroke.is_first_element_QMARK_ = (function app$main$ui$inspect$styles$panels$stroke$is_first_element_QMARK_(idx){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),idx);
});
/**
 * Returns true if the resolved token matches the color and is the first stroke (idx = 0).
 */
app.main.ui.inspect.styles.panels.stroke.has_color_token_QMARK_ = (function app$main$ui$inspect$styles$panels$stroke$has_color_token_QMARK_(resolved_token,stroke_type,idx){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626).cljs$core$IFn$_invoke$arity$1(resolved_token),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(stroke_type))) && (app.main.ui.inspect.styles.panels.stroke.is_first_element_QMARK_(idx)));
});
app.main.ui.inspect.styles.panels.stroke.generate_stroke_shorthand = (function app$main$ui$inspect$styles$panels$stroke$generate_stroke_shorthand(shapes,color_space){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes),(1))){
var shape = cljs.core.first(shapes);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,stroke){
var stroke_type = app.common.types.color.stroke__GT_color(stroke);
var stroke_width = new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$1(stroke);
var stroke_style = new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146).cljs$core$IFn$_invoke$arity$1(stroke);
var color_value = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(stroke_type);
var formatted_color_value = app.util.color.color__GT_format__GT_background(stroke_type,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(color_space));
var color_gradient = new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(stroke_type);
var gradient_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stroke_type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gradient","gradient",-1983908971),new cljs.core.Keyword(null,"type","type",1174270348)], null)),new cljs.core.Keyword(null,"stops","stops",-1205459005),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stroke_type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gradient","gradient",-1983908971),new cljs.core.Keyword(null,"stops","stops",-1205459005)], null))], null);
var color_image = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(stroke_type);
var value = (cljs.core.truth_(color_value)?""+"border: "+(stroke_width ?? "")+"px "+(app.common.data.name(stroke_style) ?? "")+" "+(formatted_color_value ?? "")+";":(cljs.core.truth_(color_gradient)?""+"border-image: "+(app.util.color.gradient__GT_css(gradient_data) ?? "")+" 100 / "+(stroke_width ?? "")+"px;":(cljs.core.truth_(color_image)?""+"border-image: url("+(app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1(color_image) ?? "")+") 100 / "+(stroke_width ?? "")+"px;":""
)));
if(cljs.core.empty_QMARK_(acc)){
return value;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
}
}),"",new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(shape));
} else {
return null;
}
});
app.main.ui.inspect.styles.panels.stroke.stroke_panel_STAR_ = (function app$main$ui$inspect$styles$panels$stroke$stroke_panel_STAR_(props_74901){
var shapes = props_74901.shapes;
var color_space = props_74901.colorSpace;
var objects = props_74901.objects;
var resolved_tokens = props_74901.resolvedTokens;
var on_stroke_shorthand = props_74901.onStrokeShorthand;
var shorthand_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.ui.inspect.styles.panels.stroke.generate_stroke_shorthand(shapes,color_space);
}));
var shorthand = cljs.core.deref(shorthand_STAR_);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shorthand),rumext.v2.adapt(on_stroke_shorthand),rumext.v2.adapt(shapes)],(function (){
cljs.core.reset_BANG_(shorthand_STAR_,app.main.ui.inspect.styles.panels.stroke.generate_stroke_shorthand(shapes,color_space));

var G__74907 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"panel","panel",-558637456),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"property","property",-1114278232),shorthand], null);
return (on_stroke_shorthand.cljs$core$IFn$_invoke$arity$1 ? on_stroke_shorthand.cljs$core$IFn$_invoke$arity$1(G__74907) : on_stroke_shorthand.call(null,G__74907));
}));

return rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_panels_stroke__stroke-panel",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,shape){
out_arr__46744__auto__.push(rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_panels_stroke__stroke-shape",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto____$1,p__74908){
var vec__74909 = p__74908;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74909,(0),null);
var stroke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74909,(1),null);
out_arr__46744__auto____$1.push(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto____$2,property){
out_arr__46744__auto____$2.push((function (){var value = app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$3(objects,stroke,property);
var stroke_type = app.common.types.color.stroke__GT_color(stroke);
var property_name = app.main.ui.inspect.attributes.common.get_css_rule_humanized(property);
var property_value = app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$3(objects,stroke,property);
var resolved_token = ((app.main.ui.inspect.styles.panels.stroke.is_first_element_QMARK_(idx))?app.main.ui.inspect.styles.panels.stroke.get_resolved_token(property,shape,resolved_tokens):null);
var has_color_token = app.main.ui.inspect.styles.panels.stroke.has_color_token_QMARK_(resolved_token,stroke_type,idx);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property,new cljs.core.Keyword(null,"border-color","border-color",-2059162761))){
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.color_properties_row.color_properties_row_STAR_,{'term':property_name,'color':stroke_type,'token':((has_color_token)?resolved_token:null),'format':color_space,'copiable':true},[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(property)].join(''));
} else {
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'term':app.common.data.name(property_name),'detail':""+(value ?? ""),'token':resolved_token,'property':property_value,'copiable':true},[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(property)].join(''));
}
})());

return out_arr__46744__auto____$2;
}),[],app.main.ui.inspect.styles.panels.stroke.properties));

return out_arr__46744__auto____$1;
}),[],cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(shape)))},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));

return out_arr__46744__auto__;
}),[],shapes)});
});

(app.main.ui.inspect.styles.panels.stroke.stroke_panel_STAR_.displayName = "stroke-panel*");


//# sourceMappingURL=app.main.ui.inspect.styles.panels.stroke.js.map
