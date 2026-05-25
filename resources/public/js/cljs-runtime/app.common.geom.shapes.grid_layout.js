import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.geom.shapes.grid_layout.bounds.js";
import "./app.common.geom.shapes.grid_layout.layout_data.js";
import "./app.common.geom.shapes.grid_layout.params.js";
import "./app.common.geom.shapes.grid_layout.positions.js";
goog.provide('app.common.geom.shapes.grid_layout');
app.common.geom.shapes.grid_layout.calc_layout_data = (function() {
var app$common$geom$shapes$grid_layout$calc_layout_data = null;
var app$common$geom$shapes$grid_layout$calc_layout_data__5 = (function (param54670,param54671,param54672,param54673,param54674){
return app.common.geom.shapes.grid_layout.layout_data.calc_layout_data.cljs$core$IFn$_invoke$arity$5(param54670,param54671,param54672,param54673,param54674);
});
var app$common$geom$shapes$grid_layout$calc_layout_data__6 = (function (param54675,param54676,param54677,param54678,param54679,param54680){
return app.common.geom.shapes.grid_layout.layout_data.calc_layout_data.cljs$core$IFn$_invoke$arity$6(param54675,param54676,param54677,param54678,param54679,param54680);
});
app$common$geom$shapes$grid_layout$calc_layout_data = function(param54675,param54676,param54677,param54678,param54679,param54680){
switch(arguments.length){
case 5:
return app$common$geom$shapes$grid_layout$calc_layout_data__5.call(this,param54675,param54676,param54677,param54678,param54679);
case 6:
return app$common$geom$shapes$grid_layout$calc_layout_data__6.call(this,param54675,param54676,param54677,param54678,param54679,param54680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$common$geom$shapes$grid_layout$calc_layout_data.cljs$core$IFn$_invoke$arity$5 = app$common$geom$shapes$grid_layout$calc_layout_data__5;
app$common$geom$shapes$grid_layout$calc_layout_data.cljs$core$IFn$_invoke$arity$6 = app$common$geom$shapes$grid_layout$calc_layout_data__6;
return app$common$geom$shapes$grid_layout$calc_layout_data;
})()
;
app.common.geom.shapes.grid_layout.get_cell_data = (function app$common$geom$shapes$grid_layout$get_cell_data(param54681,param54682,param54683){
return app.common.geom.shapes.grid_layout.layout_data.get_cell_data(param54681,param54682,param54683);
});
app.common.geom.shapes.grid_layout.child_modifiers = (function app$common$geom$shapes$grid_layout$child_modifiers(param54684,param54685,param54686,param54687,param54688,param54689){
return app.common.geom.shapes.grid_layout.positions.child_modifiers(param54684,param54685,param54686,param54687,param54688,param54689);
});
app.common.geom.shapes.grid_layout.get_position_grid_coord = (function app$common$geom$shapes$grid_layout$get_position_grid_coord(param54690,param54691){
return app.common.geom.shapes.grid_layout.positions.get_position_grid_coord(param54690,param54691);
});
app.common.geom.shapes.grid_layout.get_drop_cell = (function app$common$geom$shapes$grid_layout$get_drop_cell(param54692,param54693,param54694){
return app.common.geom.shapes.grid_layout.positions.get_drop_cell(param54692,param54693,param54694);
});
/**
 * Retrieves the points that define the bounds for given cell
 */
app.common.geom.shapes.grid_layout.cell_bounds = (function app$common$geom$shapes$grid_layout$cell_bounds(param54695,param54696){
return app.common.geom.shapes.grid_layout.positions.cell_bounds(param54695,param54696);
});
app.common.geom.shapes.grid_layout.layout_content_points = (function app$common$geom$shapes$grid_layout$layout_content_points(param54697,param54698,param54699){
return app.common.geom.shapes.grid_layout.bounds.layout_content_points(param54697,param54698,param54699);
});
app.common.geom.shapes.grid_layout.layout_content_bounds = (function app$common$geom$shapes$grid_layout$layout_content_bounds(param54700,param54701,param54702){
return app.common.geom.shapes.grid_layout.bounds.layout_content_bounds(param54700,param54701,param54702);
});
/**
 * Given the shapes calculate its grid parameters (horizontal vs vertical, gaps, etc)
 */
app.common.geom.shapes.grid_layout.calculate_params = (function() {
var app$common$geom$shapes$grid_layout$calculate_params = null;
var app$common$geom$shapes$grid_layout$calculate_params__2 = (function (param54703,param54704){
return app.common.geom.shapes.grid_layout.params.calculate_params.cljs$core$IFn$_invoke$arity$2(param54703,param54704);
});
var app$common$geom$shapes$grid_layout$calculate_params__3 = (function (param54705,param54706,param54707){
return app.common.geom.shapes.grid_layout.params.calculate_params.cljs$core$IFn$_invoke$arity$3(param54705,param54706,param54707);
});
app$common$geom$shapes$grid_layout$calculate_params = function(param54705,param54706,param54707){
switch(arguments.length){
case 2:
return app$common$geom$shapes$grid_layout$calculate_params__2.call(this,param54705,param54706);
case 3:
return app$common$geom$shapes$grid_layout$calculate_params__3.call(this,param54705,param54706,param54707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$common$geom$shapes$grid_layout$calculate_params.cljs$core$IFn$_invoke$arity$2 = app$common$geom$shapes$grid_layout$calculate_params__2;
app$common$geom$shapes$grid_layout$calculate_params.cljs$core$IFn$_invoke$arity$3 = app$common$geom$shapes$grid_layout$calculate_params__3;
return app$common$geom$shapes$grid_layout$calculate_params;
})()
;

//# sourceMappingURL=app.common.geom.shapes.grid_layout.js.map
