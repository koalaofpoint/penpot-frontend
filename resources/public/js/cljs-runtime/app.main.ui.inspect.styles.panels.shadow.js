import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.ui.inspect.attributes.common.js";
import "./app.main.ui.inspect.styles.rows.color_properties_row.js";
import "./app.main.ui.inspect.styles.rows.properties_row.js";
import "./app.util.code_gen.style_css.js";
import "./app.util.code_gen.style_css_formats.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.styles.panels.shadow');
app.main.ui.inspect.styles.panels.shadow.get_applied_tokens_in_shape = (function app$main$ui$inspect$styles$panels$shadow$get_applied_tokens_in_shape(shape_tokens,property){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape_tokens,property);
});
app.main.ui.inspect.styles.panels.shadow.get_resolved_token = (function app$main$ui$inspect$styles$panels$shadow$get_resolved_token(property,shape,resolved_tokens){
var shape_tokens = new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871).cljs$core$IFn$_invoke$arity$1(shape);
var applied_tokens_in_shape = app.main.ui.inspect.styles.panels.shadow.get_applied_tokens_in_shape(shape_tokens,property);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(resolved_tokens,applied_tokens_in_shape);
return token;
});
app.main.ui.inspect.styles.panels.shadow.generate_shadow_shorthand = (function app$main$ui$inspect$styles$panels$shadow$generate_shadow_shorthand(shapes){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes),(1))){
var shorthand_property = ""+"box-shadow: ";
var shorthand_value = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,shadow__$1){
var value = app.util.code_gen.style_css_formats.format_shadow__GT_css(shadow__$1,cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.empty_QMARK_(acc)){
return value;
} else {
return ""+(acc ?? "")+", "+(value ?? "");
}
}),"",new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(cljs.core.first(shapes)));
return ""+(shorthand_property ?? "")+(shorthand_value ?? "")+";";
} else {
return null;
}
});
app.main.ui.inspect.styles.panels.shadow.shadow_panel_STAR_ = (function app$main$ui$inspect$styles$panels$shadow$shadow_panel_STAR_(props_74895){
var on_shadow_shorthand = props_74895.onShadowShorthand;
var shapes = props_74895.shapes;
var color_space = props_74895.colorSpace;
var resolved_tokens = props_74895.resolvedTokens;
var shorthand_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.ui.inspect.styles.panels.shadow.generate_shadow_shorthand(shapes);
}));
var shorthand = cljs.core.deref(shorthand_STAR_);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shorthand),rumext.v2.adapt(on_shadow_shorthand),rumext.v2.adapt(shapes)],(function (){
cljs.core.reset_BANG_(shorthand_STAR_,app.main.ui.inspect.styles.panels.shadow.generate_shadow_shorthand(shapes));

var G__74896 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"panel","panel",-558637456),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"property","property",-1114278232),shorthand], null);
return (on_shadow_shorthand.cljs$core$IFn$_invoke$arity$1 ? on_shadow_shorthand.cljs$core$IFn$_invoke$arity$1(G__74896) : on_shadow_shorthand.call(null,G__74896));
}));

return rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_panels_shadow__shadow-panel",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,shape){
out_arr__46744__auto__.push((function (){var composite_shadow_token = app.main.ui.inspect.styles.panels.shadow.get_resolved_token(new cljs.core.Keyword(null,"shadow","shadow",873231803),shape,resolved_tokens);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto____$1,p__74897){
var vec__74898 = p__74897;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74898,(0),null);
var shadow__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74898,(1),null);
out_arr__46744__auto____$1.push(rumext.v2.jsxs("div",{'className':"main_ui_inspect_styles_panels_shadow__shadow-shape",'children':[(cljs.core.truth_(composite_shadow_token)?rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'term':"Shadow",'detail':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(composite_shadow_token),'token':composite_shadow_token,'property':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(composite_shadow_token),'copiable':true}):null),rumext.v2.jsx(app.main.ui.inspect.styles.rows.color_properties_row.color_properties_row_STAR_,{'term':"Shadow Color",'color':new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shadow__$1),'format':color_space,'copiable':true}),(function (){var value = ""+(new cljs.core.Keyword(null,"offset-x","offset-x",1036466230).cljs$core$IFn$_invoke$arity$1(shadow__$1) ?? "")+"px "+(new cljs.core.Keyword(null,"offset-y","offset-y",2076844008).cljs$core$IFn$_invoke$arity$1(shadow__$1) ?? "")+"px "+(new cljs.core.Keyword(null,"blur","blur",-453500461).cljs$core$IFn$_invoke$arity$1(shadow__$1) ?? "")+"px "+(new cljs.core.Keyword(null,"spread","spread",862337191).cljs$core$IFn$_invoke$arity$1(shadow__$1) ?? "")+"px";
var property_name = app.main.ui.inspect.attributes.common.get_css_rule_humanized(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(shadow__$1));
var property_value = app.util.code_gen.style_css.shadow__GT_css(shadow__$1);
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'term':property_name,'detail':""+(value ?? ""),'property':property_value,'copiable':true});
})()]},""+(idx ?? "")));

return out_arr__46744__auto____$1;
}),[],cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(shape)));
})());

return out_arr__46744__auto__;
}),[],shapes)});
});

(app.main.ui.inspect.styles.panels.shadow.shadow_panel_STAR_.displayName = "shadow-panel*");


//# sourceMappingURL=app.main.ui.inspect.styles.panels.shadow.js.map
