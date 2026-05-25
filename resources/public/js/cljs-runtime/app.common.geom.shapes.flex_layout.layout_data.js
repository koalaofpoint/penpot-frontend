import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.geom.shapes.flex_layout.positions.js";
import "./app.common.geom.shapes.points.js";
import "./app.common.math.js";
import "./app.common.types.shape.layout.js";
goog.provide('app.common.geom.shapes.flex_layout.layout_data');
app.common.geom.shapes.flex_layout.layout_data.conjv = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY);
app.common.geom.shapes.flex_layout.layout_data._child_min_width = null;
app.common.geom.shapes.flex_layout.layout_data.child_min_width = (function app$common$geom$shapes$flex_layout$layout_data$child_min_width(child,child_bounds,bounds,objects){
return (app.common.geom.shapes.flex_layout.layout_data._child_min_width.cljs$core$IFn$_invoke$arity$4 ? app.common.geom.shapes.flex_layout.layout_data._child_min_width.cljs$core$IFn$_invoke$arity$4(child,child_bounds,bounds,objects) : app.common.geom.shapes.flex_layout.layout_data._child_min_width.call(null,child,child_bounds,bounds,objects));
});
app.common.geom.shapes.flex_layout.layout_data._child_min_height = null;
app.common.geom.shapes.flex_layout.layout_data.child_min_height = (function app$common$geom$shapes$flex_layout$layout_data$child_min_height(child,child_bounds,bounds,objects){
return (app.common.geom.shapes.flex_layout.layout_data._child_min_height.cljs$core$IFn$_invoke$arity$4 ? app.common.geom.shapes.flex_layout.layout_data._child_min_height.cljs$core$IFn$_invoke$arity$4(child,child_bounds,bounds,objects) : app.common.geom.shapes.flex_layout.layout_data._child_min_height.call(null,child,child_bounds,bounds,objects));
});
app.common.geom.shapes.flex_layout.layout_data.layout_bounds = (function app$common$geom$shapes$flex_layout$layout_data$layout_bounds(parent,shape_bounds){
var vec__68236 = app.common.types.shape.layout.paddings(parent);
var pad_top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68236,(0),null);
var pad_right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68236,(1),null);
var pad_bottom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68236,(2),null);
var pad_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68236,(3),null);
return app.common.geom.shapes.points.pad_points(shape_bounds,pad_top,pad_right,pad_bottom,pad_left);
});
/**
 * Calculates the lines basic data and accumulated values. The positions will be calculated in a different operation
 */
app.common.geom.shapes.flex_layout.layout_data.init_layout_lines = (function app$common$geom$shapes$flex_layout$layout_data$init_layout_lines(shape,children,layout_bounds,bounds,objects,auto_QMARK_){
var col_QMARK_ = app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var row_QMARK_ = app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var space_around_QMARK_ = app.common.types.shape.layout.space_around_QMARK_(shape);
var space_evenly_QMARK_ = app.common.types.shape.layout.space_evenly_QMARK_(shape);
var auto_width_QMARK_ = (function (){var or__5025__auto__ = app.common.types.shape.layout.auto_width_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return auto_QMARK_;
}
})();
var auto_height_QMARK_ = (function (){var or__5025__auto__ = app.common.types.shape.layout.auto_height_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return auto_QMARK_;
}
})();
var wrap_QMARK_ = ((app.common.types.shape.layout.wrap_QMARK_(shape)) && (((((col_QMARK_) || (cljs.core.not(auto_width_QMARK_)))) && (((row_QMARK_) || (cljs.core.not(auto_height_QMARK_)))))));
var vec__68239 = app.common.types.shape.layout.gaps(shape);
var layout_gap_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68239,(0),null);
var layout_gap_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68239,(1),null);
var layout_width = app.common.geom.shapes.points.width_points(layout_bounds);
var layout_height = app.common.geom.shapes.points.height_points(layout_bounds);
var line_data = null;
var result = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var children__$1 = cljs.core.seq(children);
while(true){
if(cljs.core.not(children__$1)){
return cljs.core.persistent_BANG_((function (){var G__68250 = result;
if((!((line_data == null)))){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__68250,line_data);
} else {
return G__68250;
}
})());
} else {
var vec__68251 = cljs.core.first(children__$1);
var child_bounds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68251,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68251,(1),null);
var map__68254 = line_data;
var map__68254__$1 = cljs.core.__destructure_map(map__68254);
var line_min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68254__$1,new cljs.core.Keyword(null,"line-min-width","line-min-width",-1500903047));
var line_min_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68254__$1,new cljs.core.Keyword(null,"line-min-height","line-min-height",-691270023));
var line_max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68254__$1,new cljs.core.Keyword(null,"line-max-width","line-max-width",-2085887686));
var line_max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68254__$1,new cljs.core.Keyword(null,"line-max-height","line-max-height",-737603808));
var num_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68254__$1,new cljs.core.Keyword(null,"num-children","num-children",-1656107233));
var children_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68254__$1,new cljs.core.Keyword(null,"children-data","children-data",2027614482));
var child_width = app.common.geom.shapes.points.width_points(child_bounds);
var child_height = app.common.geom.shapes.points.height_points(child_bounds);
var child_max_width = app.common.types.shape.layout.child_max_width(child);
var child_max_height = app.common.types.shape.layout.child_max_height(child);
var child_margin_width = app.common.types.shape.layout.child_width_margin(child);
var child_margin_height = app.common.types.shape.layout.child_height_margin(child);
var fill_width_QMARK_ = app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$1(child);
var fill_height_QMARK_ = app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1(child);
var child_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"child-min-width","child-min-width",-1878111322),app.common.geom.shapes.flex_layout.layout_data.child_min_width(child,child_bounds,bounds,objects),new cljs.core.Keyword(null,"child-min-height","child-min-height",1967236206),app.common.geom.shapes.flex_layout.layout_data.child_min_height(child,child_bounds,bounds,objects),new cljs.core.Keyword(null,"child-max-width","child-max-width",-1197823794),((fill_width_QMARK_)?child_max_width:child_width),new cljs.core.Keyword(null,"child-max-height","child-max-height",994590678),((fill_height_QMARK_)?child_max_height:child_height)], null);
var next_min_width = (child_margin_width + new cljs.core.Keyword(null,"child-min-width","child-min-width",-1878111322).cljs$core$IFn$_invoke$arity$1(child_data));
var next_min_height = (child_margin_height + new cljs.core.Keyword(null,"child-min-height","child-min-height",1967236206).cljs$core$IFn$_invoke$arity$1(child_data));
var next_max_width = (child_margin_width + new cljs.core.Keyword(null,"child-max-width","child-max-width",-1197823794).cljs$core$IFn$_invoke$arity$1(child_data));
var next_max_height = (child_margin_height + new cljs.core.Keyword(null,"child-max-height","child-max-height",994590678).cljs$core$IFn$_invoke$arity$1(child_data));
var total_gap_col = ((space_evenly_QMARK_)?(layout_gap_col * (num_children + (2))):((space_around_QMARK_)?(layout_gap_col * (num_children + (1))):(layout_gap_col * num_children)
));
var total_gap_row = ((space_evenly_QMARK_)?(layout_gap_row * (num_children + (2))):((space_around_QMARK_)?(layout_gap_row * (num_children + (1))):(layout_gap_row * num_children)
));
var next_line_min_width = ((line_min_width + next_min_width) + total_gap_col);
var next_line_min_height = ((line_min_height + next_min_height) + total_gap_row);
if((((!((line_data == null)))) && ((((!(wrap_QMARK_))) || (((((row_QMARK_) && ((((next_line_min_width < layout_width)) || (app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$3(next_line_min_width,layout_width,0.5)))))) || (((col_QMARK_) && ((((next_line_min_height < layout_height)) || (app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$3(next_line_min_height,layout_height,0.5)))))))))))){
var G__68371 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"line-min-width","line-min-width",-1500903047),((row_QMARK_)?(line_min_width + next_min_width):(function (){var x__5110__auto__ = line_min_width;
var y__5111__auto__ = next_min_width;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()),new cljs.core.Keyword(null,"line-max-width","line-max-width",-2085887686),((row_QMARK_)?(line_max_width + next_max_width):(function (){var x__5110__auto__ = line_max_width;
var y__5111__auto__ = next_max_width;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()),new cljs.core.Keyword(null,"line-min-height","line-min-height",-691270023),((col_QMARK_)?(line_min_height + next_min_height):(function (){var x__5110__auto__ = line_min_height;
var y__5111__auto__ = next_min_height;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()),new cljs.core.Keyword(null,"line-max-height","line-max-height",-737603808),((col_QMARK_)?(line_max_height + next_max_height):(function (){var x__5110__auto__ = line_max_height;
var y__5111__auto__ = next_max_height;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()),new cljs.core.Keyword(null,"num-children","num-children",-1656107233),(num_children + (1)),new cljs.core.Keyword(null,"children-data","children-data",2027614482),app.common.geom.shapes.flex_layout.layout_data.conjv(children_data,child_data)], null);
var G__68372 = result;
var G__68373 = cljs.core.next(children__$1);
line_data = G__68371;
result = G__68372;
children__$1 = G__68373;
continue;
} else {
var G__68374 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"line-min-width","line-min-width",-1500903047),next_min_width,new cljs.core.Keyword(null,"line-min-height","line-min-height",-691270023),next_min_height,new cljs.core.Keyword(null,"line-max-width","line-max-width",-2085887686),next_max_width,new cljs.core.Keyword(null,"line-max-height","line-max-height",-737603808),next_max_height,new cljs.core.Keyword(null,"num-children","num-children",-1656107233),(1),new cljs.core.Keyword(null,"children-data","children-data",2027614482),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [child_data], null)], null);
var G__68375 = (function (){var G__68256 = result;
if((!((line_data == null)))){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__68256,line_data);
} else {
return G__68256;
}
})();
var G__68376 = cljs.core.next(children__$1);
line_data = G__68374;
result = G__68375;
children__$1 = G__68376;
continue;
}
}
break;
}
});
app.common.geom.shapes.flex_layout.layout_data.add_space_to_items = (function app$common$geom$shapes$flex_layout$layout_data$add_space_to_items(prop,prop_min,prop_max,to_share,items){
var num_items = cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__68257_SHARP_){
return app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__68257_SHARP_,prop),cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__68257_SHARP_,prop_max));
}),items));
var per_line_target = (to_share / num_items);
var items__$1 = cljs.core.seq(items);
var remainder = to_share;
var result = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.not(items__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(result),remainder], null);
} else {
var current = cljs.core.first(items__$1);
var cur_val = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,prop);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,prop_min);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return (0);
}
}
})();
var max_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,prop_max);
var cur_inc = ((((cur_val + per_line_target) > max_val))?(max_val - cur_val):per_line_target);
var current__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current,prop,(cur_val + cur_inc));
var remainder__$1 = (remainder - cur_inc);
var G__68377 = cljs.core.next(items__$1);
var G__68378 = remainder__$1;
var G__68379 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,current__$1);
items__$1 = G__68377;
remainder = G__68378;
result = G__68379;
continue;
}
break;
}
});
app.common.geom.shapes.flex_layout.layout_data.distribute_space = (function app$common$geom$shapes$flex_layout$layout_data$distribute_space(prop,prop_min,prop_max,min_value,bound_value,items){
var to_share = (bound_value - min_value);
var items__$1 = items;
while(true){
if((to_share <= (0))){
return items__$1;
} else {
var vec__68261 = app.common.geom.shapes.flex_layout.layout_data.add_space_to_items(prop,prop_min,prop_max,to_share,items__$1);
var items__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68261,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68261,(1),null);
if((remainder <= to_share)){
} else {
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(remainder),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_share)].join(''),"\n","(<= remainder to-share)"].join('')));
}

if((((remainder <= (0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(remainder,to_share)))){
return items__$2;
} else {
var G__68380 = remainder;
var G__68381 = items__$2;
to_share = G__68380;
items__$1 = G__68381;
continue;
}
}
break;
}
});
app.common.geom.shapes.flex_layout.layout_data.add_lines_positions = (function app$common$geom$shapes$flex_layout$layout_data$add_lines_positions(parent,layout_bounds,auto_QMARK_,layout_lines){
var row_QMARK_ = app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var col_QMARK_ = app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var auto_width_QMARK_ = (function (){var or__5025__auto__ = app.common.types.shape.layout.auto_width_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return auto_QMARK_;
}
})();
var auto_height_QMARK_ = (function (){var or__5025__auto__ = app.common.types.shape.layout.auto_height_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return auto_QMARK_;
}
})();
var space_evenly_QMARK_ = app.common.types.shape.layout.space_evenly_QMARK_(parent);
var space_around_QMARK_ = app.common.types.shape.layout.space_around_QMARK_(parent);
var vec__68270 = app.common.types.shape.layout.gaps(parent);
var layout_gap_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68270,(0),null);
var layout_gap_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68270,(1),null);
var layout_width = app.common.geom.shapes.points.width_points(layout_bounds);
var layout_height = app.common.geom.shapes.points.height_points(layout_bounds);
var add_lines = (function app$common$geom$shapes$flex_layout$layout_data$add_lines_positions_$_add_lines(p__68293,p__68294){
var vec__68295 = p__68293;
var total_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68295,(0),null);
var total_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68295,(1),null);
var map__68298 = p__68294;
var map__68298__$1 = cljs.core.__destructure_map(map__68298);
var line_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68298__$1,new cljs.core.Keyword(null,"line-width","line-width",-906934988));
var line_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68298__$1,new cljs.core.Keyword(null,"line-height","line-height",1870784992));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(total_width + line_width),(total_height + line_height)], null);
});
var add_ranges = (function app$common$geom$shapes$flex_layout$layout_data$add_lines_positions_$_add_ranges(p__68299,p__68300){
var vec__68301 = p__68299;
var total_min_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68301,(0),null);
var total_min_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68301,(1),null);
var total_max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68301,(2),null);
var total_max_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68301,(3),null);
var map__68304 = p__68300;
var map__68304__$1 = cljs.core.__destructure_map(map__68304);
var line_min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68304__$1,new cljs.core.Keyword(null,"line-min-width","line-min-width",-1500903047));
var line_min_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68304__$1,new cljs.core.Keyword(null,"line-min-height","line-min-height",-691270023));
var line_max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68304__$1,new cljs.core.Keyword(null,"line-max-width","line-max-width",-2085887686));
var line_max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68304__$1,new cljs.core.Keyword(null,"line-max-height","line-max-height",-737603808));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(total_min_width + line_min_width),(total_min_height + line_min_height),(total_max_width + line_max_width),(total_max_height + line_max_height)], null);
});
var add_starts = (function app$common$geom$shapes$flex_layout$layout_data$add_lines_positions_$_add_starts(total_width,total_height,num_lines,p__68305,layout_line){
var vec__68306 = p__68305;
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68306,(0),null);
var base_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68306,(1),null);
var start_p = app.common.geom.shapes.flex_layout.positions.get_start_line(parent,layout_bounds,layout_line,base_p,total_width,total_height,num_lines);
var next_p = app.common.geom.shapes.flex_layout.positions.get_next_line(parent,layout_bounds,layout_line,base_p,total_width,total_height,num_lines);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(layout_line,new cljs.core.Keyword(null,"start-p","start-p",767587445),start_p)),next_p], null);
});
var get_layout_width = (function app$common$geom$shapes$flex_layout$layout_data$add_lines_positions_$_get_layout_width(p__68309){
var map__68310 = p__68309;
var map__68310__$1 = cljs.core.__destructure_map(map__68310);
var num_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68310__$1,new cljs.core.Keyword(null,"num-children","num-children",-1656107233));
var num_gap = ((space_evenly_QMARK_)?(num_children + (1)):((space_around_QMARK_)?num_children:(num_children - (1))
));
return (layout_width - (layout_gap_col * num_gap));
});
var get_layout_height = (function app$common$geom$shapes$flex_layout$layout_data$add_lines_positions_$_get_layout_height(p__68311){
var map__68312 = p__68311;
var map__68312__$1 = cljs.core.__destructure_map(map__68312);
var num_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68312__$1,new cljs.core.Keyword(null,"num-children","num-children",-1656107233));
var num_gap = ((space_evenly_QMARK_)?(num_children + (1)):((space_around_QMARK_)?num_children:(num_children - (1))
));
return (layout_height - (layout_gap_row * num_gap));
});
var vec__68313 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_ranges,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null),layout_lines);
var total_min_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68313,(0),null);
var total_min_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68313,(1),null);
var total_max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68313,(2),null);
var total_max_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68313,(3),null);
var num_lines = cljs.core.count(layout_lines);
var stretch_width_fix = ((((col_QMARK_) && (((app.common.types.shape.layout.content_stretch_QMARK_(parent)) && (cljs.core.not(auto_width_QMARK_))))))?(((layout_width - (layout_gap_col * (num_lines - (1)))) - total_max_width) / num_lines):(0));
var stretch_height_fix = ((((row_QMARK_) && (((app.common.types.shape.layout.content_stretch_QMARK_(parent)) && (cljs.core.not(auto_height_QMARK_))))))?(((layout_height - (layout_gap_row * (num_lines - (1)))) - total_max_height) / num_lines):(0));
var rest_layout_height = (layout_height - ((num_lines - (1)) * layout_gap_row));
var rest_layout_width = (layout_width - ((num_lines - (1)) * layout_gap_col));
var layout_lines__$1 = (function (){var G__68319 = layout_lines;
var G__68319__$1 = ((row_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68264_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__68264_SHARP_,new cljs.core.Keyword(null,"line-width","line-width",-906934988),(cljs.core.truth_(auto_width_QMARK_)?new cljs.core.Keyword(null,"line-min-width","line-min-width",-1500903047).cljs$core$IFn$_invoke$arity$1(p1__68264_SHARP_):(function (){var x__5110__auto__ = new cljs.core.Keyword(null,"line-min-width","line-min-width",-1500903047).cljs$core$IFn$_invoke$arity$1(p1__68264_SHARP_);
var y__5111__auto__ = (function (){var x__5113__auto__ = get_layout_width(p1__68264_SHARP_);
var y__5114__auto__ = new cljs.core.Keyword(null,"line-max-width","line-max-width",-2085887686).cljs$core$IFn$_invoke$arity$1(p1__68264_SHARP_);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()));
}),G__68319):G__68319);
var G__68319__$2 = ((col_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68265_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__68265_SHARP_,new cljs.core.Keyword(null,"line-height","line-height",1870784992),(cljs.core.truth_(auto_height_QMARK_)?new cljs.core.Keyword(null,"line-min-height","line-min-height",-691270023).cljs$core$IFn$_invoke$arity$1(p1__68265_SHARP_):(function (){var x__5110__auto__ = new cljs.core.Keyword(null,"line-min-height","line-min-height",-691270023).cljs$core$IFn$_invoke$arity$1(p1__68265_SHARP_);
var y__5111__auto__ = (function (){var x__5113__auto__ = get_layout_height(p1__68265_SHARP_);
var y__5114__auto__ = new cljs.core.Keyword(null,"line-max-height","line-max-height",-737603808).cljs$core$IFn$_invoke$arity$1(p1__68265_SHARP_);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()));
}),G__68319__$1):G__68319__$1);
var G__68319__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = row_QMARK_;
if(and__5023__auto__){
var or__5025__auto__ = (total_min_height >= rest_layout_height);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return auto_height_QMARK_;
}
} else {
return and__5023__auto__;
}
})())?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68266_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__68266_SHARP_,new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"line-min-height","line-min-height",-691270023).cljs$core$IFn$_invoke$arity$1(p1__68266_SHARP_));
}),G__68319__$2):G__68319__$2);
var G__68319__$4 = ((((row_QMARK_) && ((((total_max_height <= rest_layout_height)) && (cljs.core.not(auto_height_QMARK_))))))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68267_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__68267_SHARP_,new cljs.core.Keyword(null,"line-height","line-height",1870784992),(new cljs.core.Keyword(null,"line-max-height","line-max-height",-737603808).cljs$core$IFn$_invoke$arity$1(p1__68267_SHARP_) + stretch_height_fix));
}),G__68319__$3):G__68319__$3);
var G__68319__$5 = (cljs.core.truth_((function (){var and__5023__auto__ = col_QMARK_;
if(and__5023__auto__){
var or__5025__auto__ = (total_min_width >= rest_layout_width);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return auto_width_QMARK_;
}
} else {
return and__5023__auto__;
}
})())?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68268_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__68268_SHARP_,new cljs.core.Keyword(null,"line-width","line-width",-906934988),new cljs.core.Keyword(null,"line-min-width","line-min-width",-1500903047).cljs$core$IFn$_invoke$arity$1(p1__68268_SHARP_));
}),G__68319__$4):G__68319__$4);
if(((col_QMARK_) && ((((total_max_width <= rest_layout_width)) && (cljs.core.not(auto_width_QMARK_)))))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68269_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__68269_SHARP_,new cljs.core.Keyword(null,"line-width","line-width",-906934988),(new cljs.core.Keyword(null,"line-max-width","line-max-width",-2085887686).cljs$core$IFn$_invoke$arity$1(p1__68269_SHARP_) + stretch_width_fix));
}),G__68319__$5);
} else {
return G__68319__$5;
}
})();
var layout_lines__$2 = (function (){var G__68320 = layout_lines__$1;
var G__68320__$1 = ((((row_QMARK_) && ((((((total_min_height < rest_layout_height)) && ((rest_layout_height < total_max_height)))) && (cljs.core.not(auto_height_QMARK_))))))?app.common.geom.shapes.flex_layout.layout_data.distribute_space(new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"line-min-height","line-min-height",-691270023),new cljs.core.Keyword(null,"line-max-height","line-max-height",-737603808),total_min_height,rest_layout_height,G__68320):G__68320);
if(((col_QMARK_) && ((((((total_min_width < rest_layout_width)) && ((rest_layout_width < total_max_width)))) && (cljs.core.not(auto_width_QMARK_)))))){
return app.common.geom.shapes.flex_layout.layout_data.distribute_space(new cljs.core.Keyword(null,"line-width","line-width",-906934988),new cljs.core.Keyword(null,"line-min-width","line-min-width",-1500903047),new cljs.core.Keyword(null,"line-max-width","line-max-width",-2085887686),total_min_width,rest_layout_width,G__68320__$1);
} else {
return G__68320__$1;
}
})();
var layout_lines__$3 = ((row_QMARK_)?cljs.core.persistent_BANG_(cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__68321,p__68322){
var vec__68323 = p__68321;
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68323,(0),null);
var rest_layout_height__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68323,(1),null);
var map__68326 = p__68322;
var map__68326__$1 = cljs.core.__destructure_map(map__68326);
var line = map__68326__$1;
var line_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68326__$1,new cljs.core.Keyword(null,"line-height","line-height",1870784992));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(line,new cljs.core.Keyword(null,"to-bound-height","to-bound-height",1545099969),rest_layout_height__$1)),((rest_layout_height__$1 - line_height) - layout_gap_row)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),layout_height], null),layout_lines__$2))):((col_QMARK_)?cljs.core.persistent_BANG_(cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__68327,p__68328){
var vec__68329 = p__68327;
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68329,(0),null);
var rest_layout_width__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68329,(1),null);
var map__68332 = p__68328;
var map__68332__$1 = cljs.core.__destructure_map(map__68332);
var line = map__68332__$1;
var line_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68332__$1,new cljs.core.Keyword(null,"line-width","line-width",-906934988));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(line,new cljs.core.Keyword(null,"to-bound-width","to-bound-width",-163351398),rest_layout_width__$1)),((rest_layout_width__$1 - line_width) - layout_gap_col)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),layout_width], null),layout_lines__$2))):layout_lines__$2
));
var vec__68316 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_lines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),layout_lines__$3);
var total_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68316,(0),null);
var total_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68316,(1),null);
var base_p = app.common.geom.shapes.flex_layout.positions.get_base_line(parent,layout_bounds,total_width,total_height,num_lines);
return cljs.core.persistent_BANG_(cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(add_starts,total_width,total_height,num_lines),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),base_p], null),layout_lines__$3)));
});
/**
 * Calculates the baseline for a flex layout
 */
app.common.geom.shapes.flex_layout.layout_data.add_line_spacing = (function app$common$geom$shapes$flex_layout$layout_data$add_line_spacing(shape,layout_bounds,auto_QMARK_,p__68333){
var map__68336 = p__68333;
var map__68336__$1 = cljs.core.__destructure_map(map__68336);
var line_data = map__68336__$1;
var num_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68336__$1,new cljs.core.Keyword(null,"num-children","num-children",-1656107233));
var line_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68336__$1,new cljs.core.Keyword(null,"line-width","line-width",-906934988));
var line_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68336__$1,new cljs.core.Keyword(null,"line-height","line-height",1870784992));
var width = app.common.geom.shapes.points.width_points(layout_bounds);
var height = app.common.geom.shapes.points.height_points(layout_bounds);
var row_QMARK_ = app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var col_QMARK_ = app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var auto_height_QMARK_ = (function (){var or__5025__auto__ = app.common.types.shape.layout.auto_height_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return auto_QMARK_;
}
})();
var auto_width_QMARK_ = (function (){var or__5025__auto__ = app.common.types.shape.layout.auto_width_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return auto_QMARK_;
}
})();
var space_between_QMARK_ = app.common.types.shape.layout.space_between_QMARK_(shape);
var space_evenly_QMARK_ = app.common.types.shape.layout.space_evenly_QMARK_(shape);
var space_around_QMARK_ = app.common.types.shape.layout.space_around_QMARK_(shape);
var vec__68337 = app.common.types.shape.layout.gaps(shape);
var layout_gap_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68337,(0),null);
var layout_gap_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68337,(1),null);
var margin_x = ((((row_QMARK_) && (((space_evenly_QMARK_) && (cljs.core.not(auto_width_QMARK_))))))?(function (){var x__5110__auto__ = layout_gap_col;
var y__5111__auto__ = ((width - line_width) / (num_children + (1)));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})():((((row_QMARK_) && (((space_around_QMARK_) && (cljs.core.not(auto_width_QMARK_))))))?((function (){var x__5110__auto__ = layout_gap_col;
var y__5111__auto__ = ((width - line_width) / num_children);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})() / (2)):(cljs.core.truth_((function (){var and__5023__auto__ = row_QMARK_;
if(and__5023__auto__){
var and__5023__auto____$1 = ((space_evenly_QMARK_) || (space_around_QMARK_));
if(and__5023__auto____$1){
return auto_width_QMARK_;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?layout_gap_col:(0)
)));
var margin_y = ((((col_QMARK_) && (((space_evenly_QMARK_) && (cljs.core.not(auto_height_QMARK_))))))?(function (){var x__5110__auto__ = layout_gap_row;
var y__5111__auto__ = ((height - line_height) / (num_children + (1)));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})():((((col_QMARK_) && (((space_around_QMARK_) && (cljs.core.not(auto_height_QMARK_))))))?((function (){var x__5110__auto__ = layout_gap_row;
var y__5111__auto__ = ((height - line_height) / num_children);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})() / (2)):(cljs.core.truth_((function (){var and__5023__auto__ = col_QMARK_;
if(and__5023__auto__){
var and__5023__auto____$1 = ((space_evenly_QMARK_) || (space_around_QMARK_));
if(and__5023__auto____$1){
return auto_height_QMARK_;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?layout_gap_row:(0)
)));
var layout_gap_col__$1 = ((((row_QMARK_) && (space_evenly_QMARK_)))?(0):(cljs.core.truth_((function (){var and__5023__auto__ = row_QMARK_;
if(and__5023__auto__){
var and__5023__auto____$1 = space_around_QMARK_;
if(and__5023__auto____$1){
return auto_width_QMARK_;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?(0):((((row_QMARK_) && (space_around_QMARK_)))?((function (){var x__5110__auto__ = layout_gap_col;
var y__5111__auto__ = ((width - line_width) / num_children);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})() / (2)):((((row_QMARK_) && (((space_between_QMARK_) && (cljs.core.not(auto_width_QMARK_))))))?(function (){var x__5110__auto__ = layout_gap_col;
var y__5111__auto__ = ((width - line_width) / (num_children - (1)));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})():layout_gap_col
))));
var layout_gap_row__$1 = ((((col_QMARK_) && (space_evenly_QMARK_)))?(0):(cljs.core.truth_((function (){var and__5023__auto__ = col_QMARK_;
if(and__5023__auto__){
var and__5023__auto____$1 = space_evenly_QMARK_;
if(and__5023__auto____$1){
return auto_height_QMARK_;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?(0):((((col_QMARK_) && (space_around_QMARK_)))?((function (){var x__5110__auto__ = layout_gap_row;
var y__5111__auto__ = ((height - line_height) / num_children);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})() / (2)):((((col_QMARK_) && (((space_between_QMARK_) && (cljs.core.not(auto_height_QMARK_))))))?(function (){var x__5110__auto__ = layout_gap_row;
var y__5111__auto__ = ((height - line_height) / (num_children - (1)));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})():layout_gap_row
))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(line_data,new cljs.core.Keyword(null,"layout-bounds","layout-bounds",-1028383563),layout_bounds,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"layout-gap-row","layout-gap-row",609410826),layout_gap_row__$1,new cljs.core.Keyword(null,"layout-gap-col","layout-gap-col",-1979319979),layout_gap_col__$1,new cljs.core.Keyword(null,"margin-x","margin-x",1660588286),margin_x,new cljs.core.Keyword(null,"margin-y","margin-y",-371718288),margin_y], 0));
});
app.common.geom.shapes.flex_layout.layout_data.add_children_resizes = (function app$common$geom$shapes$flex_layout$layout_data$add_children_resizes(shape,p__68355){
var map__68356 = p__68355;
var map__68356__$1 = cljs.core.__destructure_map(map__68356);
var line_data = map__68356__$1;
var line_min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68356__$1,new cljs.core.Keyword(null,"line-min-width","line-min-width",-1500903047));
var line_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68356__$1,new cljs.core.Keyword(null,"line-width","line-width",-906934988));
var line_min_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68356__$1,new cljs.core.Keyword(null,"line-min-height","line-min-height",-691270023));
var line_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68356__$1,new cljs.core.Keyword(null,"line-height","line-height",1870784992));
var row_QMARK_ = app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var col_QMARK_ = app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(line_data,new cljs.core.Keyword(null,"children-data","children-data",2027614482),(function (children_data){
var G__68357 = children_data;
var G__68357__$1 = ((row_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68353_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__68353_SHARP_,new cljs.core.Keyword(null,"child-width","child-width",-597845627),new cljs.core.Keyword(null,"child-min-width","child-min-width",-1878111322).cljs$core$IFn$_invoke$arity$1(p1__68353_SHARP_));
}),G__68357):G__68357);
var G__68357__$2 = ((col_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68354_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__68354_SHARP_,new cljs.core.Keyword(null,"child-height","child-height",-1775428512),new cljs.core.Keyword(null,"child-min-height","child-min-height",1967236206).cljs$core$IFn$_invoke$arity$1(p1__68354_SHARP_));
}),G__68357__$1):G__68357__$1);
var G__68357__$3 = ((row_QMARK_)?app.common.geom.shapes.flex_layout.layout_data.distribute_space(new cljs.core.Keyword(null,"child-width","child-width",-597845627),new cljs.core.Keyword(null,"child-min-width","child-min-width",-1878111322),new cljs.core.Keyword(null,"child-max-width","child-max-width",-1197823794),line_min_width,line_width,G__68357__$2):G__68357__$2);
var G__68357__$4 = ((col_QMARK_)?app.common.geom.shapes.flex_layout.layout_data.distribute_space(new cljs.core.Keyword(null,"child-height","child-height",-1775428512),new cljs.core.Keyword(null,"child-min-height","child-min-height",1967236206),new cljs.core.Keyword(null,"child-max-height","child-max-height",994590678),line_min_height,line_height,G__68357__$3):G__68357__$3);
return app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),G__68357__$4);

}));
});
/**
 * Digest the layout data to pass it to the constrains
 */
app.common.geom.shapes.flex_layout.layout_data.calc_layout_data = (function app$common$geom$shapes$flex_layout$layout_data$calc_layout_data(var_args){
var G__68359 = arguments.length;
switch (G__68359) {
case 5:
return app.common.geom.shapes.flex_layout.layout_data.calc_layout_data.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return app.common.geom.shapes.flex_layout.layout_data.calc_layout_data.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.flex_layout.layout_data.calc_layout_data.cljs$core$IFn$_invoke$arity$5 = (function (shape,shape_bounds,children,bounds,objects){
return app.common.geom.shapes.flex_layout.layout_data.calc_layout_data.cljs$core$IFn$_invoke$arity$6(shape,shape_bounds,children,bounds,objects,false);
}));

(app.common.geom.shapes.flex_layout.layout_data.calc_layout_data.cljs$core$IFn$_invoke$arity$6 = (function (shape,shape_bounds,children,bounds,objects,auto_QMARK_){
var layout_bounds = app.common.geom.shapes.flex_layout.layout_data.layout_bounds(shape,shape_bounds);
var reverse_QMARK_ = app.common.types.shape.layout.reverse_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var children__$1 = (function (){var G__68360 = children;
if((!(reverse_QMARK_))){
return cljs.core.reverse(G__68360);
} else {
return G__68360;
}
})();
var ignore_child_QMARK_ = (function (p__68361){
var vec__68362 = p__68361;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68362,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68362,(1),null);
return app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1(child);
});
var children__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(ignore_child_QMARK_,children__$1);
var layout_lines = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(app.common.geom.shapes.flex_layout.layout_data.add_line_spacing,shape,layout_bounds,auto_QMARK_)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.flex_layout.layout_data.add_children_resizes,shape))),app.common.geom.shapes.flex_layout.layout_data.add_lines_positions(shape,layout_bounds,auto_QMARK_,app.common.geom.shapes.flex_layout.layout_data.init_layout_lines(shape,children__$2,layout_bounds,bounds,objects,auto_QMARK_)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"layout-lines","layout-lines",-1868555037),layout_lines,new cljs.core.Keyword(null,"layout-bounds","layout-bounds",-1028383563),layout_bounds,new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474),reverse_QMARK_], null);
}));

(app.common.geom.shapes.flex_layout.layout_data.calc_layout_data.cljs$lang$maxFixedArity = 6);


//# sourceMappingURL=app.common.geom.shapes.flex_layout.layout_data.js.map
