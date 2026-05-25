import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.types.component.js";
import "./app.common.types.shape.js";
import "./app.common.types.shape.layout.js";
goog.provide('app.util.shape_icon');
/**
 * Returns the icon for a boolean shape
 */
app.util.shape_icon.get_bool_icon = (function app$util$shape_icon$get_bool_icon(shape){
var G__72818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"bool-type","bool-type",-1094918459));
var G__72818__$1 = (((G__72818 instanceof cljs.core.Keyword))?G__72818.fqn:null);
switch (G__72818__$1) {
case "difference":
return "boolean-difference";

break;
case "exclude":
return "boolean-exclude";

break;
case "intersection":
return "boolean-intersection";

break;
case "union":
return "boolean-union";

break;
default:
return null;

}
});
/**
 * Returns the icon for a frame shape
 */
app.util.shape_icon.get_frame_icon = (function app$util$shape_icon$get_frame_icon(shape){
if(cljs.core.truth_(app.common.types.component.is_variant_container_QMARK_(shape))){
return "component";
} else {
if(((app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))){
return "flex-horizontal";
} else {
if(((app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))){
return "flex-vertical";
} else {
if(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return "flex-grid";
} else {
return "board";

}
}
}
}
});
/**
 * Returns the icon for a shape based on its type and properties
 */
app.util.shape_icon.get_shape_icon = (function app$util$shape_icon$get_shape_icon(shape){
if(app.common.types.component.instance_head_QMARK_(shape)){
if(app.common.types.component.main_instance_QMARK_(shape)){
if(app.common.types.component.is_variant_QMARK_(shape)){
return "variant";
} else {
return "component";
}
} else {
return "component-copy";
}
} else {
var G__72819 = (shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)));
var G__72819__$1 = (((G__72819 instanceof cljs.core.Keyword))?G__72819.fqn:null);
switch (G__72819__$1) {
case "frame":
return app.util.shape_icon.get_frame_icon(shape);

break;
case "image":
return "img";

break;
case "line":
if(cljs.core.truth_(app.common.types.shape.has_images_QMARK_(shape))){
return "img";
} else {
return "rectangle";
}

break;
case "circle":
if(cljs.core.truth_(app.common.types.shape.has_images_QMARK_(shape))){
return "img";
} else {
return "elipse";
}

break;
case "path":
if(cljs.core.truth_(app.common.types.shape.has_images_QMARK_(shape))){
return "img";
} else {
return "path";
}

break;
case "rect":
if(cljs.core.truth_(app.common.types.shape.has_images_QMARK_(shape))){
return "img";
} else {
return "rectangle";
}

break;
case "text":
return "text";

break;
case "group":
if(cljs.core.truth_(new cljs.core.Keyword(null,"masked-group","masked-group",1899947873).cljs$core$IFn$_invoke$arity$1(shape))){
return "mask";
} else {
return "group";
}

break;
case "bool":
return app.util.shape_icon.get_bool_icon(shape);

break;
case "svg-raw":
return "img";

break;
default:
return null;

}
}
});
/**
 * Returns the icon for a shape based on its type
 */
app.util.shape_icon.get_shape_icon_by_type = (function app$util$shape_icon$get_shape_icon_by_type(type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"component","component",1555936782))){
return "component";
} else {
var G__72820 = type;
var G__72820__$1 = (((G__72820 instanceof cljs.core.Keyword))?G__72820.fqn:null);
switch (G__72820__$1) {
case "frame":
return "board";

break;
case "image":
return "img";

break;
case "shape":
return "path";

break;
case "text":
return "text";

break;
case "mask":
return "mask";

break;
case "group":
return "group";

break;
default:
return null;

}
}
});

//# sourceMappingURL=app.util.shape_icon.js.map
