import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.flex_layout.positions.js";
import "./app.common.geom.shapes.points.js";
import "./app.common.geom.shapes.transforms.js";
import "./app.common.math.js";
import "./app.common.types.modifiers.js";
import "./app.common.types.shape.layout.js";
goog.provide('app.common.geom.shapes.flex_layout.modifiers');
/**
 * Calculates the size and modifiers for the width of an auto-fill child
 */
app.common.geom.shapes.flex_layout.modifiers.calc_fill_width_data = (function app$common$geom$shapes$flex_layout$modifiers$calc_fill_width_data(parent,transform,transform_inverse,child,child_origin,child_width,p__68334){
var map__68335 = p__68334;
var map__68335__$1 = cljs.core.__destructure_map(map__68335);
var layout_data = map__68335__$1;
var children_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68335__$1,new cljs.core.Keyword(null,"children-data","children-data",2027614482));
var line_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68335__$1,new cljs.core.Keyword(null,"line-width","line-width",-906934988));
var to_bound_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68335__$1,new cljs.core.Keyword(null,"to-bound-width","to-bound-width",-163351398));
if(app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)){
var target_width = (function (){var x__5110__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(children_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"child-width","child-width",-597845627)], null));
var y__5111__auto__ = 0.01;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var fill_scale = (target_width / child_width);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),target_width,new cljs.core.Keyword(null,"modifiers","modifiers",50378834),app.common.types.modifiers.resize_modifiers.cljs$core$IFn$_invoke$arity$4(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(fill_scale,(1)),child_origin,transform,transform_inverse)], null);
} else {
if(app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)){
var line_width__$1 = (function (){var x__5113__auto__ = line_width;
var y__5114__auto__ = (function (){var or__5025__auto__ = to_bound_width;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return line_width;
}
})();
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var target_width = (function (){var x__5110__auto__ = (line_width__$1 - app.common.types.shape.layout.child_width_margin(child));
var y__5111__auto__ = 0.01;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var max_width = (function (){var x__5110__auto__ = app.common.types.shape.layout.child_max_width(child);
var y__5111__auto__ = 0.01;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var child_min_width = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(children_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"child-min-width","child-min-width",-1878111322)], null));
var target_width__$1 = app.common.math.clamp(target_width,child_min_width,max_width);
var fill_scale = (target_width__$1 / child_width);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),target_width__$1,new cljs.core.Keyword(null,"modifiers","modifiers",50378834),app.common.types.modifiers.resize_modifiers.cljs$core$IFn$_invoke$arity$4(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(fill_scale,(1)),child_origin,transform,transform_inverse)], null);
} else {
return null;
}
}
});
/**
 * Calculates the size and modifiers for the height of an auto-fill child
 */
app.common.geom.shapes.flex_layout.modifiers.calc_fill_height_data = (function app$common$geom$shapes$flex_layout$modifiers$calc_fill_height_data(parent,transform,transform_inverse,child,child_origin,child_height,p__68340){
var map__68341 = p__68340;
var map__68341__$1 = cljs.core.__destructure_map(map__68341);
var layout_data = map__68341__$1;
var children_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68341__$1,new cljs.core.Keyword(null,"children-data","children-data",2027614482));
var line_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68341__$1,new cljs.core.Keyword(null,"line-height","line-height",1870784992));
var to_bound_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68341__$1,new cljs.core.Keyword(null,"to-bound-height","to-bound-height",1545099969));
if(app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)){
var target_height = (function (){var x__5110__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(children_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"child-height","child-height",-1775428512)], null));
var y__5111__auto__ = 0.01;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var fill_scale = (target_height / child_height);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),target_height,new cljs.core.Keyword(null,"modifiers","modifiers",50378834),app.common.types.modifiers.resize_modifiers.cljs$core$IFn$_invoke$arity$4(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((1),fill_scale),child_origin,transform,transform_inverse)], null);
} else {
if(app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)){
var line_height__$1 = (function (){var x__5113__auto__ = line_height;
var y__5114__auto__ = (function (){var or__5025__auto__ = to_bound_height;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return line_height;
}
})();
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var target_height = (function (){var x__5110__auto__ = (line_height__$1 - app.common.types.shape.layout.child_height_margin(child));
var y__5111__auto__ = 0.01;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var max_height = (function (){var x__5110__auto__ = app.common.types.shape.layout.child_max_height(child);
var y__5111__auto__ = 0.01;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var child_min_height = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(children_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"child-min-height","child-min-height",1967236206)], null));
var target_height__$1 = app.common.math.clamp(target_height,child_min_height,max_height);
var fill_scale = (target_height__$1 / child_height);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),target_height__$1,new cljs.core.Keyword(null,"modifiers","modifiers",50378834),app.common.types.modifiers.resize_modifiers.cljs$core$IFn$_invoke$arity$4(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((1),fill_scale),child_origin,transform,transform_inverse)], null);
} else {
return null;
}
}
});
app.common.geom.shapes.flex_layout.modifiers.fill_modifiers = (function app$common$geom$shapes$flex_layout$modifiers$fill_modifiers(parent,parent_bounds,child,child_bounds,layout_line){
var child_origin = app.common.geom.shapes.points.origin(child_bounds);
var child_width = app.common.geom.shapes.points.width_points(child_bounds);
var child_height = app.common.geom.shapes.points.height_points(child_bounds);
var vec__68342 = ((((app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$1(child)) || (app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1(child))))?app.common.geom.shapes.transforms.calculate_geometry(cljs.core.deref(parent_bounds)):null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68342,(0),null);
var transform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68342,(1),null);
var transform_inverse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68342,(2),null);
var fill_width = ((app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$1(child))?app.common.geom.shapes.flex_layout.modifiers.calc_fill_width_data(parent,transform,transform_inverse,child,child_origin,child_width,layout_line):null);
var fill_height = ((app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1(child))?app.common.geom.shapes.flex_layout.modifiers.calc_fill_height_data(parent,transform,transform_inverse,child,child_origin,child_height,layout_line):null);
var child_width__$1 = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(fill_width);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return child_width;
}
})();
var child_height__$1 = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(fill_height);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return child_height;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [child_width__$1,child_height__$1,(function (){var G__68345 = (function (){var G__68346 = app.common.types.modifiers.empty();
if(cljs.core.truth_(fill_width)){
return app.common.types.modifiers.add_modifiers(G__68346,new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(fill_width));
} else {
return G__68346;
}
})();
if(cljs.core.truth_(fill_height)){
return app.common.types.modifiers.add_modifiers(G__68345,new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(fill_height));
} else {
return G__68345;
}
})()], null);
});
/**
 * Calculates the modifiers for the layout
 */
app.common.geom.shapes.flex_layout.modifiers.layout_child_modifiers = (function app$common$geom$shapes$flex_layout$modifiers$layout_child_modifiers(parent,parent_bounds,child,child_bounds,layout_line){
var child_origin = app.common.geom.shapes.points.origin(child_bounds);
var vec__68347 = app.common.geom.shapes.flex_layout.modifiers.fill_modifiers(parent,parent_bounds,child,child_bounds,layout_line);
var child_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68347,(0),null);
var child_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68347,(1),null);
var fill_modifiers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68347,(2),null);
var vec__68350 = app.common.geom.shapes.flex_layout.positions.get_child_position(parent,child,child_width,child_height,layout_line);
var corner_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68350,(0),null);
var layout_line__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68350,(1),null);
var move_vec = app.common.geom.point.to_vec(child_origin,corner_p);
var modifiers = app.common.types.modifiers.move.cljs$core$IFn$_invoke$arity$2(app.common.types.modifiers.add_modifiers(app.common.types.modifiers.empty(),fill_modifiers),move_vec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [modifiers,layout_line__$1], null);
});

//# sourceMappingURL=app.common.geom.shapes.flex_layout.modifiers.js.map
