import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.types.fills.js";
import "./app.config.js";
import "./app.main.ui.inspect.attributes.common.js";
import "./app.main.ui.inspect.styles.rows.color_properties_row.js";
import "./app.util.color.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.styles.panels.fill');
app.main.ui.inspect.styles.panels.fill.get_applied_tokens_in_shape = (function app$main$ui$inspect$styles$panels$fill$get_applied_tokens_in_shape(shape_tokens,property){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape_tokens,property);
});
/**
 * Get the resolved token for a specific property in a shape.
 */
app.main.ui.inspect.styles.panels.fill.get_resolved_token = (function app$main$ui$inspect$styles$panels$fill$get_resolved_token(shape,resolved_tokens){
var shape_tokens = new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871).cljs$core$IFn$_invoke$arity$1(shape);
var applied_tokens_in_shape = app.main.ui.inspect.styles.panels.fill.get_applied_tokens_in_shape(shape_tokens,new cljs.core.Keyword(null,"fill","fill",883462889));
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(resolved_tokens,applied_tokens_in_shape);
return token;
});
/**
 * Returns true if the resolved token matches the color and is the first fill (idx = 0).
 */
app.main.ui.inspect.styles.panels.fill.has_token_QMARK_ = (function app$main$ui$inspect$styles$panels$fill$has_token_QMARK_(resolved_token,color_type,idx){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626).cljs$core$IFn$_invoke$arity$1(resolved_token),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color_type))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),idx)));
});
app.main.ui.inspect.styles.panels.fill.generate_fill_shorthand = (function app$main$ui$inspect$styles$panels$fill$generate_fill_shorthand(shape,color_space){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,fill){
var color = app.common.types.fills.fill__GT_color(fill);
var prefix = (cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color))?"background-color: ":"background-image: ");
var value = (cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color);
}
})())?app.util.color.color__GT_format__GT_background(color,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(color_space)):(cljs.core.truth_(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(color))?["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(color))),"')"].join(''):""
));
var full_value = [prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),";"].join('');
if(cljs.core.empty_QMARK_(acc)){
return full_value;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)," ",full_value].join('');
}
}),"",new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(shape));
});
app.main.ui.inspect.styles.panels.fill.fill_panel_STAR_ = (function app$main$ui$inspect$styles$panels$fill$fill_panel_STAR_(props_74882){
var shapes = props_74882.shapes;
var color_space = props_74882.colorSpace;
var resolved_tokens = props_74882.resolvedTokens;
var on_fill_shorthand = props_74882.onFillShorthand;
var shorthand_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.ui.inspect.styles.panels.fill.generate_fill_shorthand(cljs.core.first(shapes),color_space);
}));
var shorthand = cljs.core.deref(shorthand_STAR_);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shorthand),rumext.v2.adapt(on_fill_shorthand),rumext.v2.adapt(shapes)],(function (){
cljs.core.reset_BANG_(shorthand_STAR_,app.main.ui.inspect.styles.panels.fill.generate_fill_shorthand(cljs.core.first(shapes),color_space));

var G__74883 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"panel","panel",-558637456),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"property","property",-1114278232),shorthand], null);
return (on_fill_shorthand.cljs$core$IFn$_invoke$arity$1 ? on_fill_shorthand.cljs$core$IFn$_invoke$arity$1(G__74883) : on_fill_shorthand.call(null,G__74883));
}));

return rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_panels_fill__fill-panel",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,shape){
out_arr__46744__auto__.push(rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_panels_fill__fill-shape",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto____$1,p__74884){
var vec__74885 = p__74884;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74885,(0),null);
var fill = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74885,(1),null);
out_arr__46744__auto____$1.push((function (){var property = new cljs.core.Keyword(null,"background","background",-863952629);
var color_type = app.common.types.fills.fill__GT_color(fill);
var property_name = app.main.ui.inspect.attributes.common.get_css_rule_humanized(property);
var resolved_token = app.main.ui.inspect.styles.panels.fill.get_resolved_token(shape,resolved_tokens);
var has_token = app.main.ui.inspect.styles.panels.fill.has_token_QMARK_(resolved_token,color_type,idx);
if(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color_type))){
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.color_properties_row.color_properties_row_STAR_,{'term':property_name,'color':color_type,'token':((has_token)?resolved_token:null),'format':color_space,'copiable':true},idx);
} else {
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.color_properties_row.color_properties_row_STAR_,{'term':property_name,'color':color_type,'copiable':true},idx);
}
})());

return out_arr__46744__auto____$1;
}),[],cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(shape)))},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));

return out_arr__46744__auto__;
}),[],shapes)});
});

(app.main.ui.inspect.styles.panels.fill.fill_panel_STAR_.displayName = "fill-panel*");


//# sourceMappingURL=app.main.ui.inspect.styles.panels.fill.js.map
