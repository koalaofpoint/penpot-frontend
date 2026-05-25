import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.ui.inspect.attributes.common.js";
import "./app.main.ui.inspect.styles.rows.properties_row.js";
import "./app.util.code_gen.style_css.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.styles.panels.visibility');
app.main.ui.inspect.styles.panels.visibility.properties = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224)], null);
app.main.ui.inspect.styles.panels.visibility.get_applied_tokens_in_shape = (function app$main$ui$inspect$styles$panels$visibility$get_applied_tokens_in_shape(shape_tokens,property){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape_tokens,property);
});
app.main.ui.inspect.styles.panels.visibility.get_resolved_token = (function app$main$ui$inspect$styles$panels$visibility$get_resolved_token(property,shape,resolved_tokens){
var shape_tokens = new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871).cljs$core$IFn$_invoke$arity$1(shape);
var applied_tokens_in_shape = app.main.ui.inspect.styles.panels.visibility.get_applied_tokens_in_shape(shape_tokens,property);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(resolved_tokens,applied_tokens_in_shape);
return token;
});
app.main.ui.inspect.styles.panels.visibility.visibility_panel_STAR_ = (function app$main$ui$inspect$styles$panels$visibility$visibility_panel_STAR_(props_74949){
var shapes = props_74949.shapes;
var objects = props_74949.objects;
var resolved_tokens = props_74949.resolvedTokens;
return rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_panels_visibility__visibility-panel",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,shape){
out_arr__46744__auto__.push(rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_panels_visibility__visibility-shape",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto____$1,property){
out_arr__46744__auto____$1.push((function (){var temp__5825__auto__ = app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$3(objects,shape,property);
if(cljs.core.truth_(temp__5825__auto__)){
var value = temp__5825__auto__;
var property_name = app.main.ui.inspect.attributes.common.get_css_rule_humanized(property);
var resolved_token = app.main.ui.inspect.styles.panels.visibility.get_resolved_token(property,shape,resolved_tokens);
var property_value = ((cljs.core.not(resolved_token))?app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$3(objects,shape,property):"");
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'term':property_name,'detail':""+(value ?? ""),'token':resolved_token,'property':property_value,'copiable':true},""+"visibility-property-"+(property ?? ""));
} else {
return null;
}
})());

return out_arr__46744__auto____$1;
}),[],app.main.ui.inspect.styles.panels.visibility.properties)},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));

return out_arr__46744__auto__;
}),[],shapes)});
});

(app.main.ui.inspect.styles.panels.visibility.visibility_panel_STAR_.displayName = "visibility-panel*");


//# sourceMappingURL=app.main.ui.inspect.styles.panels.visibility.js.map
