import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.files.variant.js";
import "./app.common.types.component.js";
import "./app.common.types.components_list.js";
import "./app.main.ui.components.copy_button.js";
import "./app.main.ui.components.title_bar.js";
import "./app.util.i18n.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.attributes.variant');
app.main.ui.inspect.attributes.variant.variant_block_STAR_ = (function app$main$ui$inspect$attributes$variant$variant_block_STAR_(props_74705){
var value = props_74705.value;
var name = props_74705.name;
return rumext.v2.jsxs("div",{'title':value,'className':"main_ui_inspect_attributes_variant__variant-row",'children':[rumext.v2.jsx("div",{'className':"attr-label",'children':name}),rumext.v2.jsx("div",{'className':"attr-value",'children':rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':value,'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_variant__button-children",'children':value})})})]});
});

(app.main.ui.inspect.attributes.variant.variant_block_STAR_.displayName = "variant-block*");

app.main.ui.inspect.attributes.variant.variant_panel_STAR_ = (function app$main$ui$inspect$attributes$variant$variant_panel_STAR_(props_74711){
var shapes = props_74711.shapes;
var file_id = props_74711.fileId;
var libraries = props_74711.libraries;
var objects = props_74711.objects;
var kk = props_74711;
var shape = cljs.core.first(shapes);
var is_container_QMARK_ = app.common.types.component.is_variant_container_QMARK_(shape);
var properties = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects),rumext.v2.adapt(shape)],(function (){
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,file_id),new cljs.core.Keyword(null,"data","data",-232669377));
var component = (cljs.core.truth_(is_container_QMARK_)?null:app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape)));
if(cljs.core.truth_(is_container_QMARK_)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74709_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__74709_SHARP_,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cuerdas.core.join,", "));
}),app.common.files.variant.extract_properties_values(data,objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74710_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__74710_SHARP_,new cljs.core.Keyword(null,"value","value",305978217),(function (v){
if(cuerdas.core.blank_QMARK_(v)){
return "--";
} else {
return v;
}
}));
}),new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(component));
}
}));
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_variant__attributes-block",'children':[rumext.v2.jsx(app.main.ui.components.title_bar.inspect_title_bar_STAR_,{'title':(cljs.core.truth_(is_container_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.variants"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.variant")),'className':"main_ui_inspect_attributes_variant__title-wrapper",'titleClass':"main_ui_inspect_attributes_variant__variant-attr-title"}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__74712){
var vec__74713 = p__74712;
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74713,(0),null);
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74713,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.inspect.attributes.variant.variant_block_STAR_,{'name':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(property),'value':new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(property)},""+"variant-property-"+(pos ?? "")));

return out_arr__46744__auto__;
}),[],cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,properties))]});
});

(app.main.ui.inspect.attributes.variant.variant_panel_STAR_.displayName = "variant-panel*");


//# sourceMappingURL=app.main.ui.inspect.attributes.variant.js.map
