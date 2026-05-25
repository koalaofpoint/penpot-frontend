import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.ui.inspect.attributes.common.js";
import "./app.main.ui.inspect.styles.rows.properties_row.js";
import "./app.util.code_gen.style_css.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.styles.panels.blur');
app.main.ui.inspect.styles.panels.blur.blur_panel_STAR_ = (function app$main$ui$inspect$styles$panels$blur$blur_panel_STAR_(props_74869){
var shapes = props_74869.shapes;
var objects = props_74869.objects;
return rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_panels_blur__blur-panel",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,shape){
out_arr__46744__auto__.push(rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_panels_blur__blur-shape",'children':(function (){var property = new cljs.core.Keyword(null,"filter","filter",-948537934);
var value = app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$3(objects,shape,property);
var property_name = app.main.ui.inspect.attributes.common.get_css_rule_humanized(property);
var property_value = app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$3(objects,shape,property);
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'term':property_name,'detail':""+(value ?? ""),'property':property_value,'copiable':true},""+"blur-property-"+(property ?? ""));
})()},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));

return out_arr__46744__auto__;
}),[],shapes)});
});

(app.main.ui.inspect.styles.panels.blur.blur_panel_STAR_.displayName = "blur-panel*");


//# sourceMappingURL=app.main.ui.inspect.styles.panels.blur.js.map
