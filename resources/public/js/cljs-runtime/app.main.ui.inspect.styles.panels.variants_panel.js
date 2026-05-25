import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.files.variant.js";
import "./app.common.types.component.js";
import "./app.main.ui.inspect.styles.rows.properties_row.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.styles.panels.variants_panel');
app.main.ui.inspect.styles.panels.variants_panel.variants_panel_STAR_ = (function app$main$ui$inspect$styles$panels$variants_panel$variants_panel_STAR_(props_74948){
var data = props_74948.data;
var objects = props_74948.objects;
var component = props_74948.component;
var shape = props_74948.shape;
var is_container_QMARK_ = app.common.types.component.is_variant_container_QMARK_(shape);
var properties = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects),rumext.v2.adapt(shape)],(function (){
if(cljs.core.truth_(is_container_QMARK_)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74946_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__74946_SHARP_,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cuerdas.core.join,", "));
}),app.common.files.variant.extract_properties_values(data,objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74947_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__74947_SHARP_,new cljs.core.Keyword(null,"value","value",305978217),(function (v){
if(cuerdas.core.blank_QMARK_(v)){
return "--";
} else {
return v;
}
}));
}),new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(component));
}
}));
return rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_panels_variants_panel__variants-panel",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,property){
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'term':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(property),'detail':new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(property)},""+"variant-property-"+(property ?? "")));

return out_arr__46744__auto__;
}),[],properties)});
});

(app.main.ui.inspect.styles.panels.variants_panel.variants_panel_STAR_.displayName = "variants-panel*");


//# sourceMappingURL=app.main.ui.inspect.styles.panels.variants_panel.js.map
