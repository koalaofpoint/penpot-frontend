import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.common.js";
import "./app.common.geom.shapes.points.js";
import "./app.common.geom.shapes.transforms.js";
import "./app.common.math.js";
import "./app.common.types.modifiers.js";
goog.provide('app.common.geom.shapes.pixel_precision');
app.common.geom.shapes.pixel_precision.size_pixel_precision = (function app$common$geom$shapes$pixel_precision$size_pixel_precision(modifiers,shape,points,precision){
var origin = app.common.geom.shapes.points.origin(points);
var curr_width = app.common.geom.shapes.points.width_points(points);
var curr_height = app.common.geom.shapes.points.height_points(points);
var center = app.common.geom.shapes.common.points__GT_center(points);
var selrect = app.common.geom.shapes.transforms.calculate_selrect(points,center);
var transform = app.common.geom.shapes.transforms.calculate_transform(points,center,selrect);
var transform_inverse = (((!((transform == null))))?app.common.geom.matrix.inverse(transform):null);
var path_QMARK_ = app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var vertical_line_QMARK_ = ((path_QMARK_) && ((curr_width <= 0.01)));
var horizontal_line_QMARK_ = ((path_QMARK_) && ((curr_height <= 0.01)));
var target_width = ((vertical_line_QMARK_)?curr_width:Math.max((1),app.common.math.round.cljs$core$IFn$_invoke$arity$2(curr_width,precision)));
var target_height = ((horizontal_line_QMARK_)?curr_height:Math.max((1),app.common.math.round.cljs$core$IFn$_invoke$arity$2(curr_height,precision)));
var ratio_width = (target_width / curr_width);
var ratio_height = (target_height / curr_height);
var scalev = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(ratio_width,ratio_height);
return app.common.types.modifiers.resize.cljs$core$IFn$_invoke$arity$6(modifiers,scalev,origin,transform,transform_inverse,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"precise?","precise?",-353383452),true], null));
});
app.common.geom.shapes.pixel_precision.position_pixel_precision = (function app$common$geom$shapes$pixel_precision$position_pixel_precision(modifiers,_,points,precision,ignore_axis){
var bounds = app.common.geom.rect.bounds__GT_rect(points);
var corner = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(bounds);
var target_corner = (function (){var G__68494 = corner;
var G__68494__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ignore_axis,new cljs.core.Keyword(null,"x","x",2099068185)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__68494,new cljs.core.Keyword(null,"y","y",-1757859776),app.common.math.round,precision):G__68494);
var G__68494__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ignore_axis,new cljs.core.Keyword(null,"y","y",-1757859776)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__68494__$1,new cljs.core.Keyword(null,"x","x",2099068185),app.common.math.round,precision):G__68494__$1);
if((ignore_axis == null)){
return app.common.geom.point.round_step(G__68494__$2,precision);
} else {
return G__68494__$2;
}
})();
var deltav = app.common.geom.point.to_vec(corner,target_corner);
return app.common.types.modifiers.move.cljs$core$IFn$_invoke$arity$2(modifiers,deltav);
});
/**
 * Adjust modifiers so they adjust to the pixel grid
 */
app.common.geom.shapes.pixel_precision.set_pixel_precision = (function app$common$geom$shapes$pixel_precision$set_pixel_precision(modifiers,shape,precision,ignore_axis){
var points = app.common.geom.shapes.common.transform_points.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.common.shape__GT_points(shape),app.common.types.modifiers.modifiers__GT_transform(modifiers));
var has_resize_QMARK_ = (!(app.common.types.modifiers.only_move_QMARK_(modifiers)));
var vec__68495 = (function (){var modifiers__$1 = (function (){var G__68498 = modifiers;
if(has_resize_QMARK_){
return app.common.geom.shapes.pixel_precision.size_pixel_precision(G__68498,shape,points,precision);
} else {
return G__68498;
}
})();
var points__$1 = ((has_resize_QMARK_)?app.common.geom.shapes.common.transform_points.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape),app.common.types.modifiers.modifiers__GT_transform(modifiers__$1)):points);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [modifiers__$1,points__$1], null);
})();
var modifiers__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68495,(0),null);
var points__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68495,(1),null);
return app.common.geom.shapes.pixel_precision.position_pixel_precision(modifiers__$1,shape,points__$1,precision,ignore_axis);
});
app.common.geom.shapes.pixel_precision.adjust_pixel_precision = (function app$common$geom$shapes$pixel_precision$adjust_pixel_precision(modif_tree,objects,precision,ignore_axis){
var update_modifiers = (function (modif_tree__$1,shape){
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(modif_tree__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
var G__68499 = modif_tree__$1;
if((((!((modifiers == null)))) && (app.common.types.modifiers.has_geometry_QMARK_(modifiers)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$6(G__68499,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null),app.common.geom.shapes.pixel_precision.set_pixel_precision,shape,precision,ignore_axis);
} else {
return G__68499;
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(update_modifiers,modif_tree,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),cljs.core.keys(modif_tree)));
});

//# sourceMappingURL=app.common.geom.shapes.pixel_precision.js.map
