import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.types.component.js";
import "./app.common.types.components_list.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.inspect.annotation.js";
import "./app.main.ui.inspect.attributes.blur.js";
import "./app.main.ui.inspect.attributes.fill.js";
import "./app.main.ui.inspect.attributes.geometry.js";
import "./app.main.ui.inspect.attributes.layout.js";
import "./app.main.ui.inspect.attributes.layout_element.js";
import "./app.main.ui.inspect.attributes.shadow.js";
import "./app.main.ui.inspect.attributes.stroke.js";
import "./app.main.ui.inspect.attributes.svg.js";
import "./app.main.ui.inspect.attributes.text.js";
import "./app.main.ui.inspect.attributes.variant.js";
import "./app.main.ui.inspect.attributes.visibility.js";
import "./app.main.ui.inspect.exports.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.attributes');
app.main.ui.inspect.attributes.type__GT_options = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"layout-element","layout-element",1221436156)], null),new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"layout-element","layout-element",1221436156)], null),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"layout-element","layout-element",1221436156)], null),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"layout-element","layout-element",1221436156)], null),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"layout-element","layout-element",1221436156)], null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"layout-element","layout-element",1221436156)], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"layout-element","layout-element",1221436156)], null),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"layout-element","layout-element",1221436156)], null)], null);
app.main.ui.inspect.attributes.attributes_STAR_ = (function app$main$ui$inspect$attributes$attributes_STAR_(props_53100){
var shapes = props_53100.shapes;
var color_space = props_53100.colorSpace;
var frame = props_53100.frame;
var file_id = props_53100.fileId;
var libraries = props_53100.libraries;
var objects = props_53100.objects;
var page_id = props_53100.pageId;
var from = props_53100.from;
var share_id = props_53100.shareId;
var shapes__$1 = app.main.ui.hooks.use_equal_memo(shapes);
var first_shape = cljs.core.first(shapes__$1);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,file_id),new cljs.core.Keyword(null,"data","data",-232669377));
var first_component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(first_shape));
var type = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes__$1),(1));
if(and__5023__auto__){
var or__5025__auto__ = app.common.types.component.is_variant_container_QMARK_(first_shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.component.is_variant_QMARK_(first_component);
}
} else {
return and__5023__auto__;
}
})())?new cljs.core.Keyword(null,"variant","variant",-424354234):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes__$1),(1)))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(first_shape):new cljs.core.Keyword(null,"multiple","multiple",1244445549)
));
var options = (app.main.ui.inspect.attributes.type__GT_options.cljs$core$IFn$_invoke$arity$1 ? app.main.ui.inspect.attributes.type__GT_options.cljs$core$IFn$_invoke$arity$1(type) : app.main.ui.inspect.attributes.type__GT_options.call(null,type));
var annotation_content = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes__$1),(1)))?app.common.types.components_list.get_component_annotation(first_shape,libraries):null);
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes__element-options"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,new cljs.core.Keyword(null,"workspace","workspace",-1096735709)))?"main_ui_inspect_attributes__workspace-element-options":""),'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__53101){
var vec__53102 = p__53101;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53102,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53102,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx((function (){var G__53105 = option;
var G__53105__$1 = (((G__53105 instanceof cljs.core.Keyword))?G__53105.fqn:null);
switch (G__53105__$1) {
case "geometry":
return app.main.ui.inspect.attributes.geometry.geometry_panel;

break;
case "layout":
return app.main.ui.inspect.attributes.layout.layout_panel;

break;
case "layout-element":
return app.main.ui.inspect.attributes.layout_element.layout_element_panel;

break;
case "fill":
return app.main.ui.inspect.attributes.fill.fill_panel_STAR_;

break;
case "stroke":
return app.main.ui.inspect.attributes.stroke.stroke_panel_STAR_;

break;
case "shadow":
return app.main.ui.inspect.attributes.shadow.shadow_panel;

break;
case "blur":
return app.main.ui.inspect.attributes.blur.blur_panel;

break;
case "visibility":
return app.main.ui.inspect.attributes.visibility.visibility_panel_STAR_;

break;
case "text":
return app.main.ui.inspect.attributes.text.text_panel;

break;
case "svg":
return app.main.ui.inspect.attributes.svg.svg_panel;

break;
case "variant":
return app.main.ui.inspect.attributes.variant.variant_panel_STAR_;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53105__$1)].join('')));

}
})(),{'shapes':shapes__$1,'colorSpace':color_space,'objects':objects,'frame':frame,'from':from,'libraries':libraries,'fileId':file_id},idx));

return out_arr__35152__auto__;
}),[],cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,options)),(cljs.core.truth_(annotation_content)?rumext.v2.jsx(app.main.ui.inspect.annotation.annotation,{'content':annotation_content}):null),rumext.v2.jsx(app.main.ui.inspect.exports.exports,{'shapes':shapes__$1,'type':type,'page-id':page_id,'file-id':file_id,'share-id':share_id})]});
});

(app.main.ui.inspect.attributes.attributes_STAR_.displayName = "attributes*");


//# sourceMappingURL=app.main.ui.inspect.attributes.js.map
