import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.schema.js";
import "./app.common.types.page.js";
import "./app.common.types.plugins.js";
import "./app.common.types.variant.js";
import "./cuerdas.core.js";
goog.provide('app.common.types.component');
app.common.types.component.schema_COLON_component = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.time","inst","app.common.time/inst",1401175972)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("gen","max","gen/max",61264228),(10),new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.page.schema_COLON_objects], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.plugins.schema_COLON_plugin_data], null)], null),app.common.types.variant.schema_COLON_variant_component], null);
app.common.types.component.check_component = app.common.schema.check_fn(app.common.types.component.schema_COLON_component);
app.common.types.component.sync_attrs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864),new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"font-style","font-style",-773672352),new cljs.core.Keyword(null,"hide-fill-on-export","hide-fill-on-export",-1674607391),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new cljs.core.Keyword(null,"layout-item-absolute","layout-item-absolute",1832387265),new cljs.core.Keyword(null,"masked-group","masked-group",1899947873),new cljs.core.Keyword(null,"layout-gap-type","layout-gap-type",-1483813598),new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"layout-wrap-type","layout-wrap-type",186626597),new cljs.core.Keyword(null,"bool-type","bool-type",-1094918459),new cljs.core.Keyword(null,"grow-type","grow-type",-908344411),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895),new cljs.core.Keyword(null,"layout-item-margin-type","layout-item-margin-type",-1313230390),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.Keyword(null,"layout-padding-type","layout-padding-type",-1407674837),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"fixed-scroll","fixed-scroll",-83520691),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366),new cljs.core.Keyword(null,"show-content","show-content",-878000465),new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),new cljs.core.Keyword(null,"proportion-lock","proportion-lock",1363898127),new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576),new cljs.core.Keyword(null,"exports","exports",-745008272),new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134),new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"locked","locked",-1658763820),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548),new cljs.core.Keyword(null,"layout-justify-items","layout-justify-items",1271685173),new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670),new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473),new cljs.core.Keyword(null,"position-data","position-data",-499622376),new cljs.core.Keyword(null,"strokes","strokes",-1645650952),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"blocked","blocked",181326681),new cljs.core.Keyword(null,"proportion","proportion",-1209284230),new cljs.core.Keyword(null,"grids","grids",44187194),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"r4","r4",1134323163),new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947),new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.Keyword(null,"layout-item-align-self","layout-item-align-self",-1976194692),new cljs.core.Keyword(null,"selrect","selrect",1966287292),new cljs.core.Keyword(null,"fills","fills",902966780),new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548),new cljs.core.Keyword(null,"bool-content","bool-content",1114257725),new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307),new cljs.core.Keyword(null,"layout-grid-dir","layout-grid-dir",1868849661),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"layout-item-z-index","layout-item-z-index",728479455)],[new cljs.core.Keyword(null,"geometry-group","geometry-group",801077954),new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864),new cljs.core.Keyword(null,"text-display-group","text-display-group",-1254503578),new cljs.core.Keyword(null,"text-font-group","text-font-group",-123303706),new cljs.core.Keyword(null,"fill-group","fill-group",1027726676),new cljs.core.Keyword(null,"fill-group","fill-group",1027726676),new cljs.core.Keyword(null,"layout-item-absolute","layout-item-absolute",1832387265),new cljs.core.Keyword(null,"mask-group","mask-group",1146803642),new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.Keyword(null,"geometry-group","geometry-group",801077954),new cljs.core.Keyword(null,"geometry-group","geometry-group",801077954),new cljs.core.Keyword(null,"text-display-group","text-display-group",-1254503578),new cljs.core.Keyword(null,"layout-wrap-type","layout-wrap-type",186626597),new cljs.core.Keyword(null,"content-group","content-group",-531031163),new cljs.core.Keyword(null,"text-font-group","text-font-group",-123303706),new cljs.core.Keyword(null,"text-font-group","text-font-group",-123303706),new cljs.core.Keyword(null,"text-font-group","text-font-group",-123303706),new cljs.core.Keyword(null,"layout-container","layout-container",684815305),new cljs.core.Keyword(null,"content-group","content-group",-531031163),new cljs.core.Keyword(null,"layer-effects-group","layer-effects-group",-93250121),new cljs.core.Keyword(null,"name-group","name-group",1478986286),new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895),new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.Keyword(null,"geometry-group","geometry-group",801077954),new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.Keyword(null,"geometry-group","geometry-group",801077954),new cljs.core.Keyword(null,"geometry-group","geometry-group",801077954),new cljs.core.Keyword(null,"constraints-group","constraints-group",-1724513344),new cljs.core.Keyword(null,"radius-group","radius-group",-848842979),new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366),new cljs.core.Keyword(null,"show-content","show-content",-878000465),new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),new cljs.core.Keyword(null,"geometry-group","geometry-group",801077954),new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),new cljs.core.Keyword(null,"geometry-group","geometry-group",801077954),new cljs.core.Keyword(null,"exports-group","exports-group",-1337580552),new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),new cljs.core.Keyword(null,"radius-group","radius-group",-848842979),new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134),new cljs.core.Keyword(null,"constraints-group","constraints-group",-1724513344),new cljs.core.Keyword(null,"blur-group","blur-group",-1135959686),new cljs.core.Keyword(null,"stroke-group","stroke-group",-1369020464),new cljs.core.Keyword(null,"constraints-group","constraints-group",-1724513344),new cljs.core.Keyword(null,"radius-group","radius-group",-848842979),new cljs.core.Keyword(null,"visibility-group","visibility-group",-461928512),new cljs.core.Keyword(null,"geometry-group","geometry-group",801077954),new cljs.core.Keyword(null,"layer-effects-group","layer-effects-group",-93250121),new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548),new cljs.core.Keyword(null,"layout-justify-items","layout-justify-items",1271685173),new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670),new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473),new cljs.core.Keyword(null,"content-group","content-group",-531031163),new cljs.core.Keyword(null,"stroke-group","stroke-group",-1369020464),new cljs.core.Keyword(null,"text-display-group","text-display-group",-1254503578),new cljs.core.Keyword(null,"geometry-group","geometry-group",801077954),new cljs.core.Keyword(null,"modifiable-group","modifiable-group",131767925),new cljs.core.Keyword(null,"geometry-group","geometry-group",801077954),new cljs.core.Keyword(null,"grids-group","grids-group",1826235940),new cljs.core.Keyword(null,"shadow-group","shadow-group",1422309239),new cljs.core.Keyword(null,"radius-group","radius-group",-848842979),new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947),new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.Keyword(null,"layout-item-align-self","layout-item-align-self",-1976194692),new cljs.core.Keyword(null,"geometry-group","geometry-group",801077954),new cljs.core.Keyword(null,"fill-group","fill-group",1027726676),new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548),new cljs.core.Keyword(null,"content-group","content-group",-531031163),new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307),new cljs.core.Keyword(null,"layout-grid-dir","layout-grid-dir",1868849661),new cljs.core.Keyword(null,"fill-group","fill-group",1027726676),new cljs.core.Keyword(null,"text-font-group","text-font-group",-123303706),new cljs.core.Keyword(null,"geometry-group","geometry-group",801077954),new cljs.core.Keyword(null,"layout-item-z-index","layout-item-z-index",728479455)]);
app.common.types.component.swap_keep_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"layout-item-absolute","layout-item-absolute",1832387265),null,new cljs.core.Keyword(null,"layout-item-margin-type","layout-item-margin-type",-1313230390),null,new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366),null,new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),null,new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),null,new cljs.core.Keyword(null,"interactions","interactions",550841811),null,new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548),null,new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),null,new cljs.core.Keyword(null,"layout-item-align-self","layout-item-align-self",-1976194692),null,new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548),null,new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307),null,new cljs.core.Keyword(null,"layout-item-z-index","layout-item-z-index",728479455),null], null), null);
/**
 * Check if some attribute is one that is involved in component syncrhonization.
 * Note that design tokens also are involved, although they go by an alternate
 * route and thus they are not part of :sync-attrs.
 * Also when detaching a nested copy it also needs to trigger a synchronization,
 * even though :shape-ref is not a synced attribute per se
 */
app.common.types.component.component_attr_QMARK_ = (function app$common$types$component$component_attr_QMARK_(attr){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.types.component.sync_attrs,attr);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329),attr)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871),attr)));
}
});
/**
 * Check if this shape is the head of a top instance.
 */
app.common.types.component.instance_root_QMARK_ = (function app$common$types$component$instance_root_QMARK_(shape){
return new cljs.core.Keyword(null,"component-root","component-root",-485271026).cljs$core$IFn$_invoke$arity$1(shape) === true;
});
/**
 * Check if this shape is the head of a top instance or a subinstance.
 */
app.common.types.component.instance_head_QMARK_ = (function app$common$types$component$instance_head_QMARK_(shape){
return (!((new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape) == null)));
});
/**
 * Check if this shape is the head of a subinstance.
 */
app.common.types.component.subinstance_head_QMARK_ = (function app$common$types$component$subinstance_head_QMARK_(shape){
return (((!((new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape) == null)))) && ((new cljs.core.Keyword(null,"component-root","component-root",-485271026).cljs$core$IFn$_invoke$arity$1(shape) == null)));
});
/**
 * Check if this shape is the head of a subinstance that is a copy.
 */
app.common.types.component.subcopy_head_QMARK_ = (function app$common$types$component$subcopy_head_QMARK_(shape){
return (((!((new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape) == null)))) && ((((new cljs.core.Keyword(null,"component-root","component-root",-485271026).cljs$core$IFn$_invoke$arity$1(shape) == null)) && ((!((new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape) == null)))))));
});
app.common.types.component.instance_of_QMARK_ = (function app$common$types$component$instance_of_QMARK_(shape,file_id,component_id){
return (((!((new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape) == null)))) && ((((!((new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape) == null)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape),component_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape),file_id)))))));
});
app.common.types.component.is_main_of_QMARK_ = (function app$common$types$component$is_main_of_QMARK_(shape_main,shape_inst){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape_inst),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_main));
});
/**
 * Check if this shape is the root of the main instance of some
 *   component.
 */
app.common.types.component.main_instance_QMARK_ = (function app$common$types$component$main_instance_QMARK_(shape){
return new cljs.core.Keyword(null,"main-instance","main-instance",476264761).cljs$core$IFn$_invoke$arity$1(shape) === true;
});
/**
 * Check if the shape is inside a component non-main instance.
 */
app.common.types.component.in_component_copy_QMARK_ = (function app$common$types$component$in_component_copy_QMARK_(shape){
return (!((new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape) == null)));
});
/**
 * Check if the shape is inside a component non-main instance and
 *   is not the head of a subinstance.
 */
app.common.types.component.in_component_copy_not_head_QMARK_ = (function app$common$types$component$in_component_copy_not_head_QMARK_(shape){
return (((!((new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape) == null)))) && ((new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape) == null)));
});
/**
 * Check if the shape is inside a component non-main instance and
 *   is not the root shape.
 */
app.common.types.component.in_component_copy_not_root_QMARK_ = (function app$common$types$component$in_component_copy_not_root_QMARK_(shape){
return (((!((new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape) == null)))) && ((new cljs.core.Keyword(null,"component-root","component-root",-485271026).cljs$core$IFn$_invoke$arity$1(shape) == null)));
});
/**
 * Check if this shape is the root of the main instance of the given component.
 */
app.common.types.component.main_instance_of_QMARK_ = (function app$common$types$component$main_instance_of_QMARK_(shape_id,page_id,component){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape_id,new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component))));
});
/**
 * Check if this shape or component is a variant component
 */
app.common.types.component.is_variant_QMARK_ = (function app$common$types$component$is_variant_QMARK_(item){
return (!((new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(item) == null)));
});
/**
 * Check if this shape is a variant container
 */
app.common.types.component.is_variant_container_QMARK_ = (function app$common$types$component$is_variant_container_QMARK_(shape){
return new cljs.core.Keyword(null,"is-variant-container","is-variant-container",-1294533822).cljs$core$IFn$_invoke$arity$1(shape);
});
app.common.types.component.set_touched_group = (function app$common$types$component$set_touched_group(touched,group){
if(cljs.core.truth_(group)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5025__auto__ = touched;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),group);
} else {
return null;
}
});
app.common.types.component.touched_group_QMARK_ = (function app$common$types$component$touched_group_QMARK_(shape,group){
var fexpr__50992 = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
return (fexpr__50992.cljs$core$IFn$_invoke$arity$1 ? fexpr__50992.cljs$core$IFn$_invoke$arity$1(group) : fexpr__50992.call(null,group));
});
/**
 * Convert a swap-slot into a :touched group
 */
app.common.types.component.build_swap_slot_group = (function app$common$types$component$build_swap_slot_group(swap_slot){
if(cljs.core.truth_(swap_slot)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["swap-slot-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(swap_slot)].join(''));
} else {
return null;
}
});
app.common.types.component.swap_slot_QMARK_ = (function app$common$types$component$swap_slot_QMARK_(group){
return cuerdas.core.starts_with_QMARK_(cljs.core.name(group),"swap-slot-");
});
/**
 * Gets all touched groups that are not swap slots.
 */
app.common.types.component.normal_touched_groups = (function app$common$types$component$normal_touched_groups(shape){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(app.common.types.component.swap_slot_QMARK_,new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(shape)));
});
app.common.types.component.group__GT_swap_slot = (function app$common$types$component$group__GT_swap_slot(group){
return cljs.core.parse_uuid(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(group),(10)));
});
/**
 * If the shape has a :touched group in the form :swap-slot-<uuid>, get the id.
 */
app.common.types.component.get_swap_slot = (function app$common$types$component$get_swap_slot(shape){
var group = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(app.common.types.component.swap_slot_QMARK_,new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.truth_(group)){
return app.common.types.component.group__GT_swap_slot(group);
} else {
return null;
}
});
/**
 * Add a touched group with a form :swap-slot-<uuid>.
 */
app.common.types.component.set_swap_slot = (function app$common$types$component$set_swap_slot(shape,swap_slot){
var G__50994 = shape;
if((!((swap_slot == null)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50994,new cljs.core.Keyword(null,"touched","touched",-609134419),app.common.types.component.set_touched_group,app.common.types.component.build_swap_slot_group(swap_slot));
} else {
return G__50994;
}
});
app.common.types.component.match_swap_slot_QMARK_ = (function app$common$types$component$match_swap_slot_QMARK_(shape_main,shape_inst){
var slot_main = app.common.types.component.get_swap_slot(shape_main);
var slot_inst = app.common.types.component.get_swap_slot(shape_inst);
if((!((slot_inst == null)))){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slot_main,slot_inst)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_main),slot_inst)));
} else {
return null;
}
});
app.common.types.component.remove_swap_slot = (function app$common$types$component$remove_swap_slot(shape){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"touched","touched",-609134419),(function (touched){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50996_SHARP_){
return cuerdas.core.starts_with_QMARK_(cljs.core.name(p1__50996_SHARP_),"swap-slot-");
}),touched));
}));
});
app.common.types.component.get_deleted_component_root = (function app$common$types$component$get_deleted_component_root(component){
if((!((new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component) == null)))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component)], null));
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component)], null));
}
});
/**
 * Check if the shape uses any component in the given library.
 */
app.common.types.component.uses_library_components_QMARK_ = (function app$common$types$component$uses_library_components_QMARK_(shape,library_id){
return (((!((new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape) == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape),library_id)));
});
/**
 * Remove the links and leave it as a plain shape, detached from any component.
 */
app.common.types.component.detach_shape = (function app$common$types$component$detach_shape(shape){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.Keyword(null,"component-id","component-id",1551113783),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component-file","component-file",-1378670433),new cljs.core.Keyword(null,"component-root","component-root",-485271026),new cljs.core.Keyword(null,"main-instance","main-instance",476264761),new cljs.core.Keyword(null,"remote-synced","remote-synced",1564821477),new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329),new cljs.core.Keyword(null,"touched","touched",-609134419)], 0));
});
/**
 * Make the shape not be a component head, but keep its :shape-ref and :touched if it was a nested copy
 */
app.common.types.component.unhead_shape = (function app$common$types$component$unhead_shape(shape){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.Keyword(null,"component-root","component-root",-485271026),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component-file","component-file",-1378670433),new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"main-instance","main-instance",476264761)], 0));
});
/**
 * Make the shape a component head, by adding component info
 */
app.common.types.component.rehead_shape = (function app$common$types$component$rehead_shape(shape,component_file,component_id){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.Keyword(null,"component-file","component-file",-1378670433),component_file,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component-id","component-id",1551113783),component_id], 0));
});
app.common.types.component.extract_ids = (function app$common$types$component$extract_ids(shape){
if(cljs.core.map_QMARK_(shape)){
var current_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
var child_ids = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(app.common.types.component.extract_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(shape)], 0));
return cljs.core.cons(current_id,child_ids);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Compare two components, and return a set of the keys with different values
 */
app.common.types.component.diff_components = (function app$common$types$component$diff_components(comp1,comp2){
var eq = (function (key,val1,val2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"objects","objects",2099713734))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.common.types.component.extract_ids(val1),app.common.types.component.extract_ids(val2));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val1,val2);
}
});
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51002_SHARP_){
return (!(eq(p1__51002_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(comp1,p1__51002_SHARP_),cljs.core.get.cljs$core$IFn$_invoke$arity$2(comp2,p1__51002_SHARP_))));
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(comp1),cljs.core.keys(comp2)))));
});
app.common.types.component.allow_duplicate_QMARK_ = (function app$common$types$component$allow_duplicate_QMARK_(objects,shape){
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
return (((!(app.common.types.component.in_component_copy_not_head_QMARK_(shape)))) && ((((!(app.common.types.component.instance_head_QMARK_(shape)))) || ((!(app.common.types.component.in_component_copy_QMARK_(parent)))))));
});
app.common.types.component.all_touched_groups = (function app$common$types$component$all_touched_groups(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.vals(app.common.types.component.sync_attrs));
});
app.common.types.component.valid_touched_group_QMARK_ = (function app$common$types$component$valid_touched_group_QMARK_(group){
try{return ((cljs.core.contains_QMARK_(app.common.types.component.all_touched_groups(),group)) || (((app.common.types.component.swap_slot_QMARK_(group)) && ((!((app.common.types.component.group__GT_swap_slot(group) == null)))))));
}catch (e51011){var _ = e51011;
return false;
}});

//# sourceMappingURL=app.common.types.component.js.map
