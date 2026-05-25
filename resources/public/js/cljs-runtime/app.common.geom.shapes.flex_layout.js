import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.geom.shapes.flex_layout.bounds.js";
import "./app.common.geom.shapes.flex_layout.drop_area.js";
import "./app.common.geom.shapes.flex_layout.layout_data.js";
import "./app.common.geom.shapes.flex_layout.modifiers.js";
import "./app.common.geom.shapes.flex_layout.params.js";
goog.provide('app.common.geom.shapes.flex_layout');
app.common.geom.shapes.flex_layout.layout_content_bounds = (function app$common$geom$shapes$flex_layout$layout_content_bounds(param68439,param68440,param68441,param68442){
return app.common.geom.shapes.flex_layout.bounds.layout_content_bounds(param68439,param68440,param68441,param68442);
});
app.common.geom.shapes.flex_layout.layout_content_points = (function app$common$geom$shapes$flex_layout$layout_content_points(param68443,param68444,param68445,param68446){
return app.common.geom.shapes.flex_layout.bounds.layout_content_points(param68443,param68444,param68445,param68446);
});
/**
 * Returns the bounds of the children as points
 */
app.common.geom.shapes.flex_layout.child_layout_bound_points = (function() {
var app$common$geom$shapes$flex_layout$child_layout_bound_points = null;
var app$common$geom$shapes$flex_layout$child_layout_bound_points__6 = (function (param68447,param68448,param68449,param68450,param68451,param68452){
return app.common.geom.shapes.flex_layout.bounds.child_layout_bound_points.cljs$core$IFn$_invoke$arity$6(param68447,param68448,param68449,param68450,param68451,param68452);
});
var app$common$geom$shapes$flex_layout$child_layout_bound_points__7 = (function (param68453,param68454,param68455,param68456,param68457,param68458,param68459){
return app.common.geom.shapes.flex_layout.bounds.child_layout_bound_points.cljs$core$IFn$_invoke$arity$7(param68453,param68454,param68455,param68456,param68457,param68458,param68459);
});
app$common$geom$shapes$flex_layout$child_layout_bound_points = function(param68453,param68454,param68455,param68456,param68457,param68458,param68459){
switch(arguments.length){
case 6:
return app$common$geom$shapes$flex_layout$child_layout_bound_points__6.call(this,param68453,param68454,param68455,param68456,param68457,param68458);
case 7:
return app$common$geom$shapes$flex_layout$child_layout_bound_points__7.call(this,param68453,param68454,param68455,param68456,param68457,param68458,param68459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$common$geom$shapes$flex_layout$child_layout_bound_points.cljs$core$IFn$_invoke$arity$6 = app$common$geom$shapes$flex_layout$child_layout_bound_points__6;
app$common$geom$shapes$flex_layout$child_layout_bound_points.cljs$core$IFn$_invoke$arity$7 = app$common$geom$shapes$flex_layout$child_layout_bound_points__7;
return app$common$geom$shapes$flex_layout$child_layout_bound_points;
})()
;
app.common.geom.shapes.flex_layout.get_drop_index = (function app$common$geom$shapes$flex_layout$get_drop_index(param68460,param68461,param68462){
return app.common.geom.shapes.flex_layout.drop_area.get_drop_index(param68460,param68461,param68462);
});
app.common.geom.shapes.flex_layout.get_drop_areas = (function app$common$geom$shapes$flex_layout$get_drop_areas(param68463,param68464,param68465){
return app.common.geom.shapes.flex_layout.drop_area.get_drop_areas(param68463,param68464,param68465);
});
/**
 * Digest the layout data to pass it to the constrains
 */
app.common.geom.shapes.flex_layout.calc_layout_data = (function() {
var app$common$geom$shapes$flex_layout$calc_layout_data = null;
var app$common$geom$shapes$flex_layout$calc_layout_data__5 = (function (param68466,param68467,param68468,param68469,param68470){
return app.common.geom.shapes.flex_layout.layout_data.calc_layout_data.cljs$core$IFn$_invoke$arity$5(param68466,param68467,param68468,param68469,param68470);
});
var app$common$geom$shapes$flex_layout$calc_layout_data__6 = (function (param68471,param68472,param68473,param68474,param68475,param68476){
return app.common.geom.shapes.flex_layout.layout_data.calc_layout_data.cljs$core$IFn$_invoke$arity$6(param68471,param68472,param68473,param68474,param68475,param68476);
});
app$common$geom$shapes$flex_layout$calc_layout_data = function(param68471,param68472,param68473,param68474,param68475,param68476){
switch(arguments.length){
case 5:
return app$common$geom$shapes$flex_layout$calc_layout_data__5.call(this,param68471,param68472,param68473,param68474,param68475);
case 6:
return app$common$geom$shapes$flex_layout$calc_layout_data__6.call(this,param68471,param68472,param68473,param68474,param68475,param68476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$common$geom$shapes$flex_layout$calc_layout_data.cljs$core$IFn$_invoke$arity$5 = app$common$geom$shapes$flex_layout$calc_layout_data__5;
app$common$geom$shapes$flex_layout$calc_layout_data.cljs$core$IFn$_invoke$arity$6 = app$common$geom$shapes$flex_layout$calc_layout_data__6;
return app$common$geom$shapes$flex_layout$calc_layout_data;
})()
;
/**
 * Calculates the modifiers for the layout
 */
app.common.geom.shapes.flex_layout.layout_child_modifiers = (function app$common$geom$shapes$flex_layout$layout_child_modifiers(param68477,param68478,param68479,param68480,param68481){
return app.common.geom.shapes.flex_layout.modifiers.layout_child_modifiers(param68477,param68478,param68479,param68480,param68481);
});
/**
 * Given the shapes calculate its flex parameters (horizontal vs vertical, gaps, etc)
 */
app.common.geom.shapes.flex_layout.calculate_params = (function() {
var app$common$geom$shapes$flex_layout$calculate_params = null;
var app$common$geom$shapes$flex_layout$calculate_params__2 = (function (param68482,param68483){
return app.common.geom.shapes.flex_layout.params.calculate_params.cljs$core$IFn$_invoke$arity$2(param68482,param68483);
});
var app$common$geom$shapes$flex_layout$calculate_params__3 = (function (param68484,param68485,param68486){
return app.common.geom.shapes.flex_layout.params.calculate_params.cljs$core$IFn$_invoke$arity$3(param68484,param68485,param68486);
});
app$common$geom$shapes$flex_layout$calculate_params = function(param68484,param68485,param68486){
switch(arguments.length){
case 2:
return app$common$geom$shapes$flex_layout$calculate_params__2.call(this,param68484,param68485);
case 3:
return app$common$geom$shapes$flex_layout$calculate_params__3.call(this,param68484,param68485,param68486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$common$geom$shapes$flex_layout$calculate_params.cljs$core$IFn$_invoke$arity$2 = app$common$geom$shapes$flex_layout$calculate_params__2;
app$common$geom$shapes$flex_layout$calculate_params.cljs$core$IFn$_invoke$arity$3 = app$common$geom$shapes$flex_layout$calculate_params__3;
return app$common$geom$shapes$flex_layout$calculate_params;
})()
;

//# sourceMappingURL=app.common.geom.shapes.flex_layout.js.map
