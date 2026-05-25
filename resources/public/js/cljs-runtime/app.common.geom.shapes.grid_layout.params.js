import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.common.js";
import "./app.common.geom.shapes.points.js";
import "./app.common.math.js";
import "./app.common.types.shape.layout.js";
import "./clojure.set.js";
goog.provide('app.common.geom.shapes.grid_layout.params');
/**
 * Creates ranges
 */
app.common.geom.shapes.grid_layout.params.rect__GT_range = (function app$common$geom$shapes$grid_layout$params$rect__GT_range(axis,rect){
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(rect),axis);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"x","x",2099068185))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(start + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(start + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect))], null);
}
});
/**
 * Return true if the ranges overlaps in the given axis
 */
app.common.geom.shapes.grid_layout.params.overlaps_range_QMARK_ = (function app$common$geom$shapes$grid_layout$params$overlaps_range_QMARK_(axis,p__54380,rect){
var vec__54381 = p__54380;
var start_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54381,(0),null);
var end_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54381,(1),null);
var vec__54384 = app.common.geom.shapes.grid_layout.params.rect__GT_range(axis,rect);
var start_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54384,(0),null);
var end_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54384,(1),null);
var or__5025__auto__ = (((start_a < start_b)) && ((start_b < end_a)));
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (((start_b < start_a)) && ((start_a < end_b)));
if(or__5025__auto____$1){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(start_a,start_b);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(end_a,end_b);
}
}
}
});
/**
 * Creates a new range given the rect
 */
app.common.geom.shapes.grid_layout.params.join_range = (function app$common$geom$shapes$grid_layout$params$join_range(axis,p__54387,rect){
var vec__54388 = p__54387;
var start_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54388,(0),null);
var end_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54388,(1),null);
var range = vec__54388;
if(cljs.core.not(range)){
return app.common.geom.shapes.grid_layout.params.rect__GT_range(axis,rect);
} else {
var vec__54391 = app.common.geom.shapes.grid_layout.params.rect__GT_range(axis,rect);
var start_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54391,(0),null);
var end_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54391,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5113__auto__ = start_a;
var y__5114__auto__ = start_b;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})(),(function (){var x__5110__auto__ = end_a;
var y__5111__auto__ = end_b;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()], null);
}
});
app.common.geom.shapes.grid_layout.params.size_range = (function app$common$geom$shapes$grid_layout$params$size_range(p__54395){
var vec__54396 = p__54395;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54396,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54396,(1),null);
return (end - start);
});
/**
 * Given the geometry and the axis calculates the tracks for the given shapes
 */
app.common.geom.shapes.grid_layout.params.calculate_tracks = (function app$common$geom$shapes$grid_layout$params$calculate_tracks(axis,shapes_by_axis){
var pending = cljs.core.seq(shapes_by_axis);
var result = cljs.core.PersistentVector.EMPTY;
var index = (1);
var current_track = cljs.core.PersistentHashSet.EMPTY;
var current_range = null;
while(true){
if(pending){
var vec__54402 = cljs.core.first(pending);
var next_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54402,(0),null);
var rect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54402,(1),null);
var next_shape_PLUS_rects = vec__54402;
if(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.not(current_range);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.common.geom.shapes.grid_layout.params.overlaps_range_QMARK_(axis,current_range,rect);
}
})())){
var current_track__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_track,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(next_shape));
var current_range__$1 = app.common.geom.shapes.grid_layout.params.join_range(axis,current_range,rect);
var G__54462 = cljs.core.next(pending);
var G__54463 = result;
var G__54464 = index;
var G__54465 = current_track__$1;
var G__54466 = current_range__$1;
pending = G__54462;
result = G__54463;
index = G__54464;
current_track = G__54465;
current_range = G__54466;
continue;
} else {
var G__54467 = cljs.core.next(pending);
var G__54468 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"shapes","shapes",1897594879),current_track,new cljs.core.Keyword(null,"size","size",1098693007),app.common.geom.shapes.grid_layout.params.size_range(current_range)], null));
var G__54469 = (index + (1));
var G__54470 = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(next_shape)]);
var G__54471 = app.common.geom.shapes.grid_layout.params.rect__GT_range(axis,rect);
pending = G__54467;
result = G__54468;
index = G__54469;
current_track = G__54470;
current_range = G__54471;
continue;
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"shapes","shapes",1897594879),current_track,new cljs.core.Keyword(null,"size","size",1098693007),app.common.geom.shapes.grid_layout.params.size_range(current_range)], null));
}
break;
}
});
/**
 * Create cells for the defined tracks and assign the shapes to these cells
 */
app.common.geom.shapes.grid_layout.params.assign_shape_cells = (function app$common$geom$shapes$grid_layout$params$assign_shape_cells(params,rows,cols){
var assign_cell = (function (p__54410,row,column){
var vec__54411 = p__54410;
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54411,(0),null);
var auto_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54411,(1),null);
var row_num = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(row);
var column_num = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(column);
var cell = app.common.types.shape.layout.cell_by_row_column(params__$1,row_num,column_num);
var shape = cljs.core.first(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(column)));
var auto_QMARK___$1 = (function (){var and__5023__auto__ = auto_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (!((shape == null)));
} else {
return and__5023__auto__;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54414 = params__$1;
var G__54414__$1 = (((!((shape == null))))?cljs.core.assoc_in(G__54414,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null)):G__54414);
if(cljs.core.not(auto_QMARK___$1)){
return cljs.core.assoc_in(G__54414__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.Keyword(null,"manual","manual",-237370608));
} else {
return G__54414__$1;
}
})(),auto_QMARK___$1], null);
});
var vec__54407 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,row){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__54405_SHARP_,p2__54406_SHARP_){
return assign_cell(p1__54405_SHARP_,row,p2__54406_SHARP_);
}),result,cols);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [params,true], null),rows);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54407,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54407,(1),null);
return params__$1;
});
/**
 * Given the shapes calculate its grid parameters (horizontal vs vertical, gaps, etc)
 */
app.common.geom.shapes.grid_layout.params.calculate_params = (function app$common$geom$shapes$grid_layout$params$calculate_params(var_args){
var G__54426 = arguments.length;
switch (G__54426) {
case 2:
return app.common.geom.shapes.grid_layout.params.calculate_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.geom.shapes.grid_layout.params.calculate_params.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.grid_layout.params.calculate_params.cljs$core$IFn$_invoke$arity$2 = (function (objects,shapes){
return app.common.geom.shapes.grid_layout.params.calculate_params.cljs$core$IFn$_invoke$arity$3(objects,shapes,null);
}));

(app.common.geom.shapes.grid_layout.params.calculate_params.cljs$core$IFn$_invoke$arity$3 = (function (_objects,shapes,parent){
if(cljs.core.empty_QMARK_(shapes)){
return app.common.types.shape.layout.create_cells(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.shape.layout.default_track_value,app.common.types.shape.layout.default_track_value], null),new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.shape.layout.default_track_value,app.common.types.shape.layout.default_track_value], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2),(2)], null));
} else {
var shapes__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hidden","hidden",-312506092),shapes);
var all_shapes_rect = app.common.geom.shapes.common.shapes__GT_rect(shapes__$1);
var shapes_PLUS_bounds = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54417_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__54417_SHARP_,app.common.geom.rect.points__GT_rect(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__54417_SHARP_,new cljs.core.Keyword(null,"points","points",-1486596883)))],null));
}),shapes__$1);
var shapes_by_x = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.second),shapes_PLUS_bounds);
var shapes_by_y = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.second),shapes_PLUS_bounds);
var cols = app.common.geom.shapes.grid_layout.params.calculate_tracks(new cljs.core.Keyword(null,"x","x",2099068185),shapes_by_x);
var rows = app.common.geom.shapes.grid_layout.params.calculate_tracks(new cljs.core.Keyword(null,"y","y",-1757859776),shapes_by_y);
var num_cols = cljs.core.count(cols);
var num_rows = cljs.core.count(rows);
var total_cols_width = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__54418_SHARP_,p2__54419_SHARP_){
return (p1__54418_SHARP_ + new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p2__54419_SHARP_));
}),(0),cols);
var total_rows_height = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__54420_SHARP_,p2__54421_SHARP_){
return (p1__54420_SHARP_ + new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p2__54421_SHARP_));
}),(0),rows);
var column_gap = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_cols,(1)))?(0):((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(all_shapes_rect) - total_cols_width) / (num_cols - (1))));
var row_gap = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_rows,(1)))?(0):((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(all_shapes_rect) - total_rows_height) / (num_rows - (1))));
var layout_grid_rows = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly(app.common.types.shape.layout.default_track_value),rows);
var layout_grid_columns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly(app.common.types.shape.layout.default_track_value),cols);
var parent_childs_vector = app.common.geom.point.to_vec(app.common.geom.shapes.points.origin(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(parent)),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(all_shapes_rect));
var p_left = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(parent_childs_vector);
var p_top = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(parent_childs_vector);
return app.common.geom.shapes.grid_layout.params.assign_shape_cells(app.common.types.shape.layout.create_cells(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864),layout_grid_columns,new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947),layout_grid_rows,new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),row_gap,new cljs.core.Keyword(null,"column-gap","column-gap",384822863),column_gap], null),new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p1","p1",-936759954),p_top,new cljs.core.Keyword(null,"p2","p2",905500641),p_left,new cljs.core.Keyword(null,"p3","p3",1731040739),p_top,new cljs.core.Keyword(null,"p4","p4",-1090126814),p_left], null),new cljs.core.Keyword(null,"layout-grid-dir","layout-grid-dir",1868849661),(((num_cols > num_rows))?new cljs.core.Keyword(null,"row","row",-570139521):new cljs.core.Keyword(null,"column","column",2078222095))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),num_cols,num_rows], null)),rows,cols);
}
}));

(app.common.geom.shapes.grid_layout.params.calculate_params.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=app.common.geom.shapes.grid_layout.params.js.map
