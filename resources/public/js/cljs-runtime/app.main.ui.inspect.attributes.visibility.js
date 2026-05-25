import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.ui.components.copy_button.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.inspect.attributes.common.js";
import "./app.util.code_gen.style_css.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.attributes.visibility');
app.main.ui.inspect.attributes.visibility.properties = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224),new cljs.core.Keyword(null,"visibility","visibility",1338380893)], null);
app.main.ui.inspect.attributes.visibility.has_visibility_props_QMARK_ = (function app$main$ui$inspect$attributes$visibility$has_visibility_props_QMARK_(shape){
var shape_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
var and__5023__auto__ = (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape_type,new cljs.core.Keyword(null,"text","text",-1790561697))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape_type,new cljs.core.Keyword(null,"group","group",582596132))))));
if(and__5023__auto__){
var or__5025__auto__ = new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(shape);
}
}
} else {
return and__5023__auto__;
}
});
app.main.ui.inspect.attributes.visibility.visibility_block_STAR_ = (function app$main$ui$inspect$attributes$visibility$visibility_block_STAR_(props_74749){
var objects = props_74749.objects;
var shape = props_74749.shape;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,property){
out_arr__46744__auto__.push((function (){var temp__5825__auto__ = app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$3(objects,shape,property);
if(cljs.core.truth_(temp__5825__auto__)){
var value = temp__5825__auto__;
var property_name = app.main.ui.inspect.attributes.common.get_css_rule_humanized(property);
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_visibility__visibility-row",'children':[rumext.v2.jsx("div",{'title':property_name,'className':"attr-label",'children':property_name}),rumext.v2.jsx("div",{'className':"attr-value",'children':rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$3(objects,shape,property),'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_visibility__button-children",'children':value})})})]},app.common.data.name(property));
} else {
return null;
}
})());

return out_arr__46744__auto__;
}),[],app.main.ui.inspect.attributes.visibility.properties);
});

(app.main.ui.inspect.attributes.visibility.visibility_block_STAR_.displayName = "visibility-block*");

app.main.ui.inspect.attributes.visibility.visibility_panel_STAR_ = (function app$main$ui$inspect$attributes$visibility$visibility_panel_STAR_(props_74750){
var shapes = props_74750.shapes;
var objects = props_74750.objects;
var shapes__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes)],(function (){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.main.ui.inspect.attributes.visibility.has_visibility_props_QMARK_,shapes);
}));
if(cljs.core.seq(shapes__$1)){
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_visibility__attributes-block",'children':[rumext.v2.jsx(app.main.ui.components.title_bar.inspect_title_bar_STAR_,{'title':"Visibility",'className':"main_ui_inspect_attributes_visibility__title-wrapper",'titleClass':"main_ui_inspect_attributes_visibility__visibility-attr-title",'children':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes__$1),(1)))?rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.util.code_gen.style_css.get_shape_properties_css.cljs$core$IFn$_invoke$arity$3(objects,cljs.core.first(shapes__$1),app.main.ui.inspect.attributes.visibility.properties),'className':"main_ui_inspect_attributes_visibility__copy-btn-title"}):null)}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,shape){
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.inspect.attributes.visibility.visibility_block_STAR_,{'shape':shape,'objects':objects},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));

return out_arr__46744__auto__;
}),[],shapes__$1)]});
} else {
return null;
}
});

(app.main.ui.inspect.attributes.visibility.visibility_panel_STAR_.displayName = "visibility-panel*");


//# sourceMappingURL=app.main.ui.inspect.attributes.visibility.js.map
