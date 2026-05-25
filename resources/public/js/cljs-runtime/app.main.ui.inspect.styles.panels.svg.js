import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.main.ui.inspect.styles.rows.properties_row.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.styles.panels.svg');
app.main.ui.inspect.styles.panels.svg.map__GT_css = (function app$main$ui$inspect$styles$panels$svg$map__GT_css(attr){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("; ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74902){
var vec__74903 = p__74902;
var attr_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74903,(0),null);
var attr_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74903,(1),null);
return [app.common.data.name(attr_key),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr_value)].join('');
}),attr));
});
app.main.ui.inspect.styles.panels.svg.svg_panel_STAR_ = (function app$main$ui$inspect$styles$panels$svg$svg_panel_STAR_(props_74906){
var _objects = props_74906._objects;
var shape = props_74906.shape;
return rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_panels_svg__svg-panel",'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_panels_svg__svg-shape",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__74912){
var vec__74913 = p__74912;
var attr_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74913,(0),null);
var attr_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74913,(1),null);
out_arr__46744__auto__.push(((cljs.core.map_QMARK_(attr_value))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto____$1,p__74916){
var vec__74917 = p__74916;
var sub_attr_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74917,(0),null);
var sub_attr_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74917,(1),null);
out_arr__46744__auto____$1.push((function (){var property_value = app.main.ui.inspect.styles.panels.svg.map__GT_css(sub_attr_value);
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'term':app.common.data.name(sub_attr_key),'detail':""+(sub_attr_value ?? ""),'property':property_value,'copiable':true},""+"svg-property-"+(app.common.data.name(sub_attr_key) ?? ""));
})());

return out_arr__46744__auto____$1;
}),[],attr_value):rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'term':app.common.data.name(attr_key),'detail':""+(attr_value ?? ""),'property':""+(attr_key ?? "")+": "+(attr_value ?? "")+";",'copiable':true},""+"svg-property-"+(app.common.data.name(attr_key) ?? ""))));

return out_arr__46744__auto__;
}),[],new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772).cljs$core$IFn$_invoke$arity$1(shape))},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))});
});

(app.main.ui.inspect.styles.panels.svg.svg_panel_STAR_.displayName = "svg-panel*");


//# sourceMappingURL=app.main.ui.inspect.styles.panels.svg.js.map
