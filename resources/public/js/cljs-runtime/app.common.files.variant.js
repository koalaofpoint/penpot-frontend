import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.types.component.js";
import "./app.common.types.components_list.js";
import "./app.common.types.variant.js";
goog.provide('app.common.files.variant');
/**
 * Find a list of the components thet belongs to this variant-id
 */
app.common.files.variant.find_variant_components = (function app$common$files$variant$find_variant_components(var_args){
var G__56227 = arguments.length;
switch (G__56227) {
case 2:
return app.common.files.variant.find_variant_components.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.files.variant.find_variant_components.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.variant.find_variant_components.cljs$core$IFn$_invoke$arity$2 = (function (data,variant_id){
var page_id = new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56223_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(p1__56223_SHARP_),variant_id);
}),cljs.core.vals(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(data)))));
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145)),page_id),new cljs.core.Keyword(null,"objects","objects",2099713734));
return app.common.files.variant.find_variant_components.cljs$core$IFn$_invoke$arity$3(data,objects,variant_id);
}));

(app.common.files.variant.find_variant_components.cljs$core$IFn$_invoke$arity$3 = (function (data,objects,variant_id){
return cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56225_SHARP_){
return app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(data,p1__56225_SHARP_,true);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56224_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__56224_SHARP_),new cljs.core.Keyword(null,"component-id","component-id",1551113783));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,variant_id),new cljs.core.Keyword(null,"shapes","shapes",1897594879)))));
}));

(app.common.files.variant.find_variant_components.cljs$lang$maxFixedArity = 3);

app.common.files.variant.extract_properties_names = (function app$common$files$variant$extract_properties_names(shape,data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1((function (p1__56228_SHARP_){
return app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(p1__56228_SHARP_),true);
})(shape)));
});
/**
 * Get a map of properties associated to their possible values
 */
app.common.files.variant.extract_properties_values = (function app$common$files$variant$extract_properties_values(data,objects,variant_id){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__56229){
var vec__56230 = p__56229;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56230,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56230,(1),null);
var mdata = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.meta,v));
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),k,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),v))], null),mdata);
}),cljs.core.group_by(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.files.variant.find_variant_components.cljs$core$IFn$_invoke$arity$3(data,objects,variant_id)], 0))));
});
app.common.files.variant.get_variant_mains = (function app$common$files$variant$get_variant_mains(component,data){
if(cljs.core.truth_(app.common.types.variant.valid_variant_component_QMARK_(component))){
} else {
throw (new Error(["Assert failed: ","expected valid component variant","\n","(ctv/valid-variant-component? component)"].join('')));
}

var temp__5825__auto__ = new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(component);
if(cljs.core.truth_(temp__5825__auto__)){
var variant_id = temp__5825__auto__;
var page_id = new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145)),page_id),new cljs.core.Keyword(null,"objects","objects",2099713734));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,variant_id),new cljs.core.Keyword(null,"shapes","shapes",1897594879));
} else {
return null;
}
});
app.common.files.variant.is_secondary_variant_QMARK_ = (function app$common$files$variant$is_secondary_variant_QMARK_(component,data){
var shapes = app.common.files.variant.get_variant_mains(component,data);
return ((cljs.core.seq(shapes)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component),cljs.core.last(shapes))));
});
app.common.files.variant.get_primary_variant = (function app$common$files$variant$get_primary_variant(data,component){
var page_id = new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145)),page_id),new cljs.core.Keyword(null,"objects","objects",2099713734));
var variant_id = new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(component);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.peek(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,variant_id),new cljs.core.Keyword(null,"shapes","shapes",1897594879))));
});
app.common.files.variant.get_primary_component = (function app$common$files$variant$get_primary_component(data,component_id){
var temp__5825__auto__ = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2(data,component_id);
if(cljs.core.truth_(temp__5825__auto__)){
var component = temp__5825__auto__;
if(app.common.types.component.is_variant_QMARK_(component)){
return app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(app.common.files.variant.get_primary_variant(data,component)));
} else {
return component;
}
} else {
return null;
}
});

//# sourceMappingURL=app.common.files.variant.js.map
