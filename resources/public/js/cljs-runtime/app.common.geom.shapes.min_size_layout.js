import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.shapes.flex_layout.bounds.js";
import "./app.common.geom.shapes.flex_layout.layout_data.js";
import "./app.common.geom.shapes.grid_layout.bounds.js";
import "./app.common.geom.shapes.grid_layout.layout_data.js";
import "./app.common.geom.shapes.points.js";
import "./app.common.types.shape.layout.js";
goog.provide('app.common.geom.shapes.min_size_layout');
app.common.geom.shapes.min_size_layout.child_min_width = (function app$common$geom$shapes$min_size_layout$child_min_width(var_args){
var G__68489 = arguments.length;
switch (G__68489) {
case 4:
return app.common.geom.shapes.min_size_layout.child_min_width.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return app.common.geom.shapes.min_size_layout.child_min_width.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.min_size_layout.child_min_width.cljs$core$IFn$_invoke$arity$4 = (function (child,child_bounds,bounds,objects){
return app.common.geom.shapes.min_size_layout.child_min_width.cljs$core$IFn$_invoke$arity$5(child,child_bounds,bounds,objects,false);
}));

(app.common.geom.shapes.min_size_layout.child_min_width.cljs$core$IFn$_invoke$arity$5 = (function (child,child_bounds,bounds,objects,strict_QMARK_){
if(((cljs.core.not(strict_QMARK_)) && (((app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$1(child)) && (app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(child)))))){
return app.common.types.shape.layout.child_min_width(child);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = strict_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return ((app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$1(child)) && (app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(child)));
} else {
return and__5023__auto__;
}
})())){
var children = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.position_absolute_QMARK_,app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$2(objects,(child?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(child,new cljs.core.Keyword(null,"id","id",-1388402092)))));
var x__5110__auto__ = app.common.types.shape.layout.child_min_width(child);
var y__5111__auto__ = app.common.geom.shapes.points.width_points(app.common.geom.shapes.flex_layout.bounds.layout_content_bounds(bounds,child,children,objects));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
} else {
if(((app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$1(child)) && (app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(child)))){
var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68487_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__68487_SHARP_))),p1__68487_SHARP_],null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.position_absolute_QMARK_,app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child))));
var layout_data = app.common.geom.shapes.grid_layout.layout_data.calc_layout_data.cljs$core$IFn$_invoke$arity$6(child,cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child))),children,bounds,objects,true);
var x__5110__auto__ = app.common.types.shape.layout.child_min_width(child);
var y__5111__auto__ = app.common.geom.shapes.points.width_points(app.common.geom.shapes.grid_layout.bounds.layout_content_bounds(bounds,child,layout_data));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
} else {
if(app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$1(child)){
return app.common.types.shape.layout.child_min_width(child);
} else {
return app.common.geom.shapes.points.width_points(child_bounds);

}
}
}
}
}));

(app.common.geom.shapes.min_size_layout.child_min_width.cljs$lang$maxFixedArity = 5);

app.common.geom.shapes.min_size_layout.child_min_height = (function app$common$geom$shapes$min_size_layout$child_min_height(var_args){
var G__68491 = arguments.length;
switch (G__68491) {
case 4:
return app.common.geom.shapes.min_size_layout.child_min_height.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return app.common.geom.shapes.min_size_layout.child_min_height.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.min_size_layout.child_min_height.cljs$core$IFn$_invoke$arity$4 = (function (child,child_bounds,bounds,objects){
return app.common.geom.shapes.min_size_layout.child_min_height.cljs$core$IFn$_invoke$arity$5(child,child_bounds,bounds,objects,false);
}));

(app.common.geom.shapes.min_size_layout.child_min_height.cljs$core$IFn$_invoke$arity$5 = (function (child,child_bounds,bounds,objects,strict_QMARK_){
if(((cljs.core.not(strict_QMARK_)) && (((app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1(child)) && (app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(child)))))){
return app.common.types.shape.layout.child_min_height(child);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = strict_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return ((app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1(child)) && (app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(child)));
} else {
return and__5023__auto__;
}
})())){
var children = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.position_absolute_QMARK_,app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$2(objects,(child?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(child,new cljs.core.Keyword(null,"id","id",-1388402092)))));
var x__5110__auto__ = app.common.types.shape.layout.child_min_height(child);
var y__5111__auto__ = app.common.geom.shapes.points.height_points(app.common.geom.shapes.flex_layout.bounds.layout_content_bounds(bounds,child,children,objects));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
} else {
if(((app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1(child)) && (app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(child)))){
var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (child__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child__$1))),child__$1], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.position_absolute_QMARK_,app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$2(objects,(child?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(child,new cljs.core.Keyword(null,"id","id",-1388402092))))));
var layout_data = app.common.geom.shapes.grid_layout.layout_data.calc_layout_data.cljs$core$IFn$_invoke$arity$6(child,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(child),children,bounds,objects,true);
var auto_bounds = app.common.geom.shapes.grid_layout.bounds.layout_content_bounds(bounds,child,layout_data);
var x__5110__auto__ = app.common.types.shape.layout.child_min_height(child);
var y__5111__auto__ = app.common.geom.shapes.points.height_points(auto_bounds);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
} else {
if(app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1(child)){
return app.common.types.shape.layout.child_min_height(child);
} else {
return app.common.geom.shapes.points.height_points(child_bounds);

}
}
}
}
}));

(app.common.geom.shapes.min_size_layout.child_min_height.cljs$lang$maxFixedArity = 5);

(app.common.geom.shapes.flex_layout.layout_data._child_min_width = app.common.geom.shapes.min_size_layout.child_min_width);

(app.common.geom.shapes.flex_layout.layout_data._child_min_height = app.common.geom.shapes.min_size_layout.child_min_height);

(app.common.geom.shapes.flex_layout.bounds._child_min_width = app.common.geom.shapes.min_size_layout.child_min_width);

(app.common.geom.shapes.flex_layout.bounds._child_min_height = app.common.geom.shapes.min_size_layout.child_min_height);

(app.common.geom.shapes.grid_layout.layout_data._child_min_width = app.common.geom.shapes.min_size_layout.child_min_width);

(app.common.geom.shapes.grid_layout.layout_data._child_min_height = app.common.geom.shapes.min_size_layout.child_min_height);

//# sourceMappingURL=app.common.geom.shapes.min_size_layout.js.map
