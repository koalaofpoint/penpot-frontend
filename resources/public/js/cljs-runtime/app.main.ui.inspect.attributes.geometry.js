import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.main.ui.components.copy_button.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.inspect.attributes.common.js";
import "./app.util.code_gen.style_css.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.attributes.geometry');
app.main.ui.inspect.attributes.geometry.properties = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"transform","transform",1381301764)], null);
app.main.ui.inspect.attributes.geometry.geometry_block = (function app$main$ui$inspect$attributes$geometry$geometry_block(props_74660){
var map__74661 = rumext.v2.util.wrap_props(props_74660);
var map__74661__$1 = cljs.core.__destructure_map(map__74661);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74661__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74661__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
return rumext.v2.jsx(rumext.v2.Fragment,{'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__74662){
var vec__74663 = p__74662;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74663,(0),null);
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74663,(1),null);
out_arr__46744__auto__.push((function (){var temp__5825__auto__ = app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$3(objects,shape,property);
if(cljs.core.truth_(temp__5825__auto__)){
var value = temp__5825__auto__;
var property_name = app.main.ui.inspect.attributes.common.get_css_rule_humanized(property);
return rumext.v2.jsxs("div",{'title':property_name,'className':"main_ui_inspect_attributes_geometry__geometry-row",'children':[rumext.v2.jsx("div",{'className':"attr-label",'children':property_name}),rumext.v2.jsx("div",{'className':"attr-value",'children':rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$3(objects,shape,property),'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_geometry__button-children",'children':value})})})]},""+"block-"+(idx ?? "")+"-"+(app.common.data.name(property) ?? ""));
} else {
return null;
}
})());

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(app.main.ui.inspect.attributes.geometry.properties))});
});

(app.main.ui.inspect.attributes.geometry.geometry_block.displayName = "geometry-block");

app.main.ui.inspect.attributes.geometry.geometry_panel = (function app$main$ui$inspect$attributes$geometry$geometry_panel(props_74666){
var map__74667 = rumext.v2.util.wrap_props(props_74666);
var map__74667__$1 = cljs.core.__destructure_map(map__74667);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74667__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74667__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_geometry__attributes-block",'children':[rumext.v2.jsx(app.main.ui.components.title_bar.inspect_title_bar_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.size"),'className':"main_ui_inspect_attributes_geometry__title-wrapper",'titleClass':"main_ui_inspect_attributes_geometry__geometry-attr-title",'children':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes),(1)))?rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.util.code_gen.style_css.get_shape_properties_css.cljs$core$IFn$_invoke$arity$3(objects,cljs.core.first(shapes),app.main.ui.inspect.attributes.geometry.properties),'className':"main_ui_inspect_attributes_geometry__copy-btn-title"}):null)}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,shape){
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.inspect.attributes.geometry.geometry_block,{'shape':shape,'objects':objects},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));

return out_arr__46744__auto__;
}),[],shapes)]});
});

(app.main.ui.inspect.attributes.geometry.geometry_panel.displayName = "geometry-panel");


//# sourceMappingURL=app.main.ui.inspect.attributes.geometry.js.map
