import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.points.js";
import "./app.common.math.js";
import "./app.common.types.shape.layout.js";
goog.provide('app.common.geom.shapes.grid_layout.layout_data');
app.common.geom.shapes.grid_layout.layout_data._child_min_width = null;
app.common.geom.shapes.grid_layout.layout_data.child_min_width = (function app$common$geom$shapes$grid_layout$layout_data$child_min_width(child,child_bounds,bounds,objects){
return (app.common.types.shape.layout.child_width_margin(child) + (app.common.geom.shapes.grid_layout.layout_data._child_min_width.cljs$core$IFn$_invoke$arity$5 ? app.common.geom.shapes.grid_layout.layout_data._child_min_width.cljs$core$IFn$_invoke$arity$5(child,child_bounds,bounds,objects,true) : app.common.geom.shapes.grid_layout.layout_data._child_min_width.call(null,child,child_bounds,bounds,objects,true)));
});
app.common.geom.shapes.grid_layout.layout_data._child_min_height = null;
app.common.geom.shapes.grid_layout.layout_data.child_min_height = (function app$common$geom$shapes$grid_layout$layout_data$child_min_height(child,child_bounds,bounds,objects){
return (app.common.types.shape.layout.child_height_margin(child) + (app.common.geom.shapes.grid_layout.layout_data._child_min_height.cljs$core$IFn$_invoke$arity$5 ? app.common.geom.shapes.grid_layout.layout_data._child_min_height.cljs$core$IFn$_invoke$arity$5(child,child_bounds,bounds,objects,true) : app.common.geom.shapes.grid_layout.layout_data._child_min_height.call(null,child,child_bounds,bounds,objects,true)));
});
app.common.geom.shapes.grid_layout.layout_data.layout_bounds = (function app$common$geom$shapes$grid_layout$layout_data$layout_bounds(parent,shape_bounds){
var vec__54359 = app.common.types.shape.layout.paddings(parent);
var pad_top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54359,(0),null);
var pad_right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54359,(1),null);
var pad_bottom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54359,(2),null);
var pad_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54359,(3),null);
return app.common.geom.shapes.points.pad_points(shape_bounds,pad_top,pad_right,pad_bottom,pad_left);
});
app.common.geom.shapes.grid_layout.layout_data.calculate_initial_track_size = (function app$common$geom$shapes$grid_layout$layout_data$calculate_initial_track_size(total_value,p__54362){
var map__54363 = p__54362;
var map__54363__$1 = cljs.core.__destructure_map(map__54363);
var track = map__54363__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54363__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54363__$1,new cljs.core.Keyword(null,"value","value",305978217));
var vec__54364 = (function (){var G__54367 = type;
var G__54367__$1 = (((G__54367 instanceof cljs.core.Keyword))?G__54367.fqn:null);
switch (G__54367__$1) {
case "percent":
var value__$1 = ((total_value * value) / (100));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value__$1,value__$1], null);

break;
case "fixed":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,value], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.01,Infinity], null);

}
})();
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54364,(0),null);
var max_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54364,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(track,new cljs.core.Keyword(null,"size","size",1098693007),size,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-size","max-size",-874966132),max_size], 0));
});
app.common.geom.shapes.grid_layout.layout_data.set_auto_base_size = (function app$common$geom$shapes$grid_layout$layout_data$set_auto_base_size(track_list,children,shape_cells,bounds,objects,type){
var vec__54368 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column-span","column-span",1302376857),app.common.geom.shapes.grid_layout.layout_data.child_min_width], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row-span","row-span",-365554241),app.common.geom.shapes.grid_layout.layout_data.child_min_height], null));
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54368,(0),null);
var prop_span = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54368,(1),null);
var size_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54368,(2),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tracks,p__54371){
var vec__54372 = p__54371;
var child_bounds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54372,(0),null);
var child_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54372,(1),null);
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape_cells,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_shape));
var idx = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) - (1));
var track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tracks,idx);
var G__54376 = tracks;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop_span),(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(track))))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__54376,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.Keyword(null,"size","size",1098693007)], null),cljs.core.max,(size_fn.cljs$core$IFn$_invoke$arity$4 ? size_fn.cljs$core$IFn$_invoke$arity$4(child_shape,child_bounds,bounds,objects) : size_fn.call(null,child_shape,child_bounds,bounds,objects)));
} else {
return G__54376;
}
}),track_list,children);
});
app.common.geom.shapes.grid_layout.layout_data.tracks_total_size = (function app$common$geom$shapes$grid_layout$layout_data$tracks_total_size(track_list){
var calc_tracks_total_size = (function (acc,p__54415){
var map__54416 = p__54415;
var map__54416__$1 = cljs.core.__destructure_map(map__54416);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54416__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (acc + size);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(calc_tracks_total_size,(0),track_list);
});
app.common.geom.shapes.grid_layout.layout_data.tracks_total_frs = (function app$common$geom$shapes$grid_layout$layout_data$tracks_total_frs(track_list){
var calc_tracks_total_frs = (function (acc,p__54422){
var map__54423 = p__54422;
var map__54423__$1 = cljs.core.__destructure_map(map__54423);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54423__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54423__$1,new cljs.core.Keyword(null,"value","value",305978217));
var value__$1 = (function (){var x__5110__auto__ = (1);
var y__5111__auto__ = value;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var G__54425 = acc;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"flex","flex",-1425124628))){
return (G__54425 + value__$1);
} else {
return G__54425;
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(calc_tracks_total_frs,(0),track_list);
});
app.common.geom.shapes.grid_layout.layout_data.tracks_total_autos = (function app$common$geom$shapes$grid_layout$layout_data$tracks_total_autos(track_list){
var calc_tracks_total_autos = (function (acc,p__54427){
var map__54428 = p__54427;
var map__54428__$1 = cljs.core.__destructure_map(map__54428);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54428__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__54429 = acc;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"auto","auto",-566279492))){
return (G__54429 + (1));
} else {
return G__54429;
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(calc_tracks_total_autos,(0),track_list);
});
/**
 * Tries to assign the fr value distributing the excess between the free spaces
 */
app.common.geom.shapes.grid_layout.layout_data.set_fr_value = (function app$common$geom$shapes$grid_layout$layout_data$set_fr_value(track_list,fr_value,auto_QMARK_){
var flex_QMARK_ = (function (p1__54430_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__54430_SHARP_)));
});
var assign_fn = (function (p__54431,p__54432){
var vec__54433 = p__54431;
var assign_fr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54433,(0),null);
var pending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54433,(1),null);
var free_frs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54433,(2),null);
var vec__54436 = p__54432;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54436,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54436,(1),null);
var fr = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(assign_fr,idx,(fr_value * fr));
var full_QMARK_ = (current <= new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(t));
var cur_pending = ((full_QMARK_)?(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(t) - current):(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(assign_fr,idx,((full_QMARK_)?new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(t):current)),(pending + cur_pending),(function (){var G__54439 = free_frs;
if((!(full_QMARK_))){
return (G__54439 + fr);
} else {
return G__54439;
}
})()], null);
});
var change_fn = (function (delta){
return (function (assign_fr,p__54440){
var vec__54441 = p__54440;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54441,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54441,(1),null);
var fr = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(assign_fr,idx);
var full_QMARK_ = (current <= new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(t));
var G__54444 = assign_fr;
if((!(full_QMARK_))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__54444,idx,cljs.core._,(delta * fr));
} else {
return G__54444;
}
});
});
var assign_fr = (function (){var assign_fr = cljs.core.PersistentArrayMap.EMPTY;
while(true){
var vec__54448 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(assign_fn,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [assign_fr,(0),(0)], null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(flex_QMARK_,app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(track_list)));
var assign_fr__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54448,(0),null);
var pending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54448,(1),null);
var free_frs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54448,(2),null);
if(cljs.core.truth_((function (){var or__5025__auto__ = auto_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(free_frs,(0))) || (app.common.math.almost_zero_QMARK_(pending)));
}
})())){
return assign_fr__$1;
} else {
var delta = (pending / free_frs);
var assign_fr__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(change_fn(delta),assign_fr__$1,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(flex_QMARK_,app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(track_list)));
var G__54591 = assign_fr__$2;
assign_fr = G__54591;
continue;
}
break;
}
})();
var track_list__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (track_list__$1,p__54451){
var vec__54452 = p__54451;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54452,(0),null);
var assignment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54452,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(track_list__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.Keyword(null,"size","size",1098693007)], null),cljs.core.max,assignment);
}),track_list,assign_fr);
return track_list__$1;
});
app.common.geom.shapes.grid_layout.layout_data.stretch_tracks = (function app$common$geom$shapes$grid_layout$layout_data$stretch_tracks(track_list,add_size){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__54455){
var map__54456 = p__54455;
var map__54456__$1 = cljs.core.__destructure_map(map__54456);
var track = map__54456__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54456__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54456__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var max_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54456__$1,new cljs.core.Keyword(null,"max-size","max-size",-874966132));
var G__54457 = track;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54457,new cljs.core.Keyword(null,"size","size",1098693007),(function (){var x__5113__auto__ = (size + add_size);
var y__5114__auto__ = max_size;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})());
} else {
return G__54457;
}
}),track_list);
});
app.common.geom.shapes.grid_layout.layout_data.has_flex_track_QMARK_ = (function app$common$geom$shapes$grid_layout$layout_data$has_flex_track_QMARK_(type,track_list,cell){
var vec__54459 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column-span","column-span",1302376857)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row-span","row-span",-365554241)], null));
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54459,(0),null);
var prop_span = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54459,(1),null);
var from_idx = app.common.math.clamp((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) - (1)),(0),(cljs.core.count(track_list) - (1)));
var to_idx = app.common.math.clamp(((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) - (1)) + cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop_span)),(0),(cljs.core.count(track_list) - (1)));
var tracks = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(track_list,from_idx,to_idx);
return (!((app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__54458_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__54458_SHARP_));
}),tracks) == null)));
});
app.common.geom.shapes.grid_layout.layout_data.size_to_allocate = (function app$common$geom$shapes$grid_layout$layout_data$size_to_allocate(type,parent,p__54472,cell,bounds,objects){
var vec__54473 = p__54472;
var child_bounds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54473,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54473,(1),null);
var vec__54476 = app.common.types.shape.layout.gaps(parent);
var row_gap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54476,(0),null);
var column_gap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54476,(1),null);
var vec__54479 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.shapes.grid_layout.layout_data.child_min_width,column_gap,new cljs.core.Keyword(null,"column-span","column-span",1302376857)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.shapes.grid_layout.layout_data.child_min_height,row_gap,new cljs.core.Keyword(null,"row-span","row-span",-365554241)], null));
var sfn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54479,(0),null);
var gap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54479,(1),null);
var prop_span = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54479,(2),null);
var span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop_span);
return ((sfn.cljs$core$IFn$_invoke$arity$4 ? sfn.cljs$core$IFn$_invoke$arity$4(child,child_bounds,bounds,objects) : sfn.call(null,child,child_bounds,bounds,objects)) - (gap * (span - (1))));
});
app.common.geom.shapes.grid_layout.layout_data.allocate_auto_tracks = (function app$common$geom$shapes$grid_layout$layout_data$allocate_auto_tracks(allocations,indexed_tracks,to_allocate){
while(true){
if(cljs.core.empty_QMARK_(indexed_tracks)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [allocations,to_allocate], null);
} else {
var vec__54483 = cljs.core.first(indexed_tracks);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54483,(0),null);
var track = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54483,(1),null);
var old_allocated = cljs.core.get.cljs$core$IFn$_invoke$arity$3(allocations,idx,0.01);
var auto_track_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(track));
var allocated = ((auto_track_QMARK_)?(function (){var x__5110__auto__ = (function (){var x__5110__auto__ = old_allocated;
var y__5111__auto__ = (to_allocate / cljs.core.count(indexed_tracks));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y__5111__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(track);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})():new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(track));
var G__54592 = (function (){var G__54486 = allocations;
if(auto_track_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54486,idx,allocated);
} else {
return G__54486;
}
})();
var G__54593 = cljs.core.rest(indexed_tracks);
var G__54594 = (to_allocate - allocated);
allocations = G__54592;
indexed_tracks = G__54593;
to_allocate = G__54594;
continue;
}
break;
}
});
app.common.geom.shapes.grid_layout.layout_data.allocate_flex_tracks = (function app$common$geom$shapes$grid_layout$layout_data$allocate_flex_tracks(allocations,indexed_tracks,to_allocate,fr_value){
while(true){
if(cljs.core.empty_QMARK_(indexed_tracks)){
return allocations;
} else {
var vec__54487 = cljs.core.first(indexed_tracks);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54487,(0),null);
var track = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54487,(1),null);
var old_allocated = cljs.core.get.cljs$core$IFn$_invoke$arity$3(allocations,idx,0.01);
var auto_track_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(track));
var flex_track_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(track));
var fr = ((flex_track_QMARK_)?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(track):(0));
var target_allocation = (fr_value * fr);
var allocated = ((((auto_track_QMARK_) || (flex_track_QMARK_)))?(function (){var x__5110__auto__ = (function (){var x__5110__auto__ = target_allocation;
var y__5111__auto__ = old_allocated;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y__5111__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(track);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})():new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(track));
var G__54596 = (function (){var G__54490 = allocations;
if(((flex_track_QMARK_) || (auto_track_QMARK_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54490,idx,allocated);
} else {
return G__54490;
}
})();
var G__54597 = cljs.core.rest(indexed_tracks);
var G__54598 = (to_allocate - allocated);
var G__54599 = fr_value;
allocations = G__54596;
indexed_tracks = G__54597;
to_allocate = G__54598;
fr_value = G__54599;
continue;
}
break;
}
});
app.common.geom.shapes.grid_layout.layout_data.set_auto_multi_span = (function app$common$geom$shapes$grid_layout$layout_data$set_auto_multi_span(parent,track_list,children_map,shape_cells,bounds,objects,type){
var vec__54495 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column-span","column-span",1302376857)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row-span","row-span",-365554241)], null));
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54495,(0),null);
var prop_span = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54495,(1),null);
var allocated = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (allocated,cell){
var shape_id = cljs.core.first(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(cell));
var from_idx = app.common.math.clamp((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) - (1)),(0),(cljs.core.count(track_list) - (1)));
var to_idx = app.common.math.clamp(((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) - (1)) + cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop_span)),(0),(cljs.core.count(track_list) - (1)));
var indexed_tracks = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(track_list),from_idx,to_idx);
var to_allocate = app.common.geom.shapes.grid_layout.layout_data.size_to_allocate(type,parent,cljs.core.get.cljs$core$IFn$_invoke$arity$2(children_map,shape_id),cell,bounds,objects);
var vec__54498 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function app$common$geom$shapes$grid_layout$layout_data$set_auto_multi_span_$_find_auto_allocations(p__54507,p__54508){
var vec__54509 = p__54507;
var to_allocate__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54509,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54509,(1),null);
var vec__54512 = p__54508;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54512,(0),null);
var track = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54512,(1),null);
var idx_track = vec__54512;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(track))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_allocate__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,idx_track)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(to_allocate__$1 - new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(track)),result], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_allocate,cljs.core.PersistentVector.EMPTY], null),indexed_tracks);
var to_allocate__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54498,(0),null);
var indexed_tracks__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54498,(1),null);
var non_assigned_indexed_tracks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__54515){
var vec__54516 = p__54515;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54516,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54516,(1),null);
return cljs.core.contains_QMARK_(allocated,idx);
}),indexed_tracks__$1);
var vec__54501 = app.common.geom.shapes.grid_layout.layout_data.allocate_auto_tracks(allocated,non_assigned_indexed_tracks,(function (){var x__5110__auto__ = to_allocate__$1;
var y__5111__auto__ = (0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})());
var allocated__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54501,(0),null);
var to_allocate__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54501,(1),null);
var vec__54504 = app.common.geom.shapes.grid_layout.layout_data.allocate_auto_tracks(allocated__$1,indexed_tracks__$1,(function (){var x__5110__auto__ = to_allocate__$2;
var y__5111__auto__ = (0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})());
var allocated__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54504,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54504,(1),null);
return allocated__$2;
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(prop_span,cljs.core._,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54492_SHARP_){
return app.common.geom.shapes.grid_layout.layout_data.has_flex_track_QMARK_(type,track_list,p1__54492_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54491_SHARP_){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__54491_SHARP_,prop_span) > (1));
}),cljs.core.vals(shape_cells)))));
var track_list__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (p1__54494_SHARP_,p2__54493_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p2__54493_SHARP_,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.max,cljs.core.get.cljs$core$IFn$_invoke$arity$2(allocated,p1__54494_SHARP_));
})),track_list);
return track_list__$1;
});
app.common.geom.shapes.grid_layout.layout_data.set_flex_multi_span = (function app$common$geom$shapes$grid_layout$layout_data$set_flex_multi_span(parent,track_list,children_map,shape_cells,bounds,objects,type){
var vec__54523 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column-span","column-span",1302376857)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row-span","row-span",-365554241)], null));
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54523,(0),null);
var prop_span = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54523,(1),null);
var allocate_fr_tracks = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (alloc,cell){
var shape_id = cljs.core.first(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(cell));
var from_idx = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) - (1));
var to_idx = ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) - (1)) + cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop_span));
var indexed_tracks = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(track_list),from_idx,to_idx);
var to_allocate = app.common.geom.shapes.grid_layout.layout_data.size_to_allocate(type,parent,cljs.core.get.cljs$core$IFn$_invoke$arity$2(children_map,shape_id),cell,bounds,objects);
var vec__54526 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function app$common$geom$shapes$grid_layout$layout_data$set_flex_multi_span_$_find_lex_allocations(p__54529,p__54530){
var vec__54531 = p__54529;
var to_allocate__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54531,(0),null);
var total_fr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54531,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54531,(2),null);
var vec__54534 = p__54530;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54534,(0),null);
var track = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54534,(1),null);
var idx_track = vec__54534;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(track))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_allocate__$1,(total_fr + new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(track)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,idx_track)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(to_allocate__$1 - new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(track)),total_fr,result], null);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_allocate,(0),cljs.core.PersistentVector.EMPTY], null),indexed_tracks);
var to_allocate__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54526,(0),null);
var total_frs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54526,(1),null);
var indexed_tracks__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54526,(2),null);
var to_allocate__$2 = (function (){var x__5110__auto__ = to_allocate__$1;
var y__5111__auto__ = (0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var fr_value = (to_allocate__$2 / total_frs);
return app.common.geom.shapes.grid_layout.layout_data.allocate_flex_tracks(alloc,indexed_tracks__$1,to_allocate__$2,fr_value);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(prop_span,cljs.core._,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54520_SHARP_){
return app.common.geom.shapes.grid_layout.layout_data.has_flex_track_QMARK_(type,track_list,p1__54520_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54519_SHARP_){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__54519_SHARP_,prop_span) > (1));
}),cljs.core.vals(shape_cells)))));
var track_list__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (p1__54522_SHARP_,p2__54521_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p2__54521_SHARP_,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.max,cljs.core.get.cljs$core$IFn$_invoke$arity$2(allocate_fr_tracks,p1__54522_SHARP_));
})),track_list);
return track_list__$1;
});
app.common.geom.shapes.grid_layout.layout_data.min_fr_value = (function app$common$geom$shapes$grid_layout$layout_data$min_fr_value(tracks){
var tracks__$1 = cljs.core.seq(tracks);
var min_fr = 0.01;
while(true){
if(cljs.core.empty_QMARK_(tracks__$1)){
return min_fr;
} else {
var map__54538 = cljs.core.first(tracks__$1);
var map__54538__$1 = cljs.core.__destructure_map(map__54538);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54538__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54538__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54538__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min_fr__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"flex","flex",-1425124628)))?(function (){var x__5110__auto__ = min_fr;
var y__5111__auto__ = (size / value);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})():min_fr);
var G__54605 = cljs.core.rest(tracks__$1);
var G__54606 = min_fr__$1;
tracks__$1 = G__54605;
min_fr = G__54606;
continue;
}
break;
}
});
app.common.geom.shapes.grid_layout.layout_data.calc_layout_data = (function app$common$geom$shapes$grid_layout$layout_data$calc_layout_data(var_args){
var G__54555 = arguments.length;
switch (G__54555) {
case 5:
return app.common.geom.shapes.grid_layout.layout_data.calc_layout_data.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return app.common.geom.shapes.grid_layout.layout_data.calc_layout_data.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.grid_layout.layout_data.calc_layout_data.cljs$core$IFn$_invoke$arity$5 = (function (parent,transformed_parent_bounds,children,bounds,objects){
return app.common.geom.shapes.grid_layout.layout_data.calc_layout_data.cljs$core$IFn$_invoke$arity$6(parent,transformed_parent_bounds,children,bounds,objects,false);
}));

(app.common.geom.shapes.grid_layout.layout_data.calc_layout_data.cljs$core$IFn$_invoke$arity$6 = (function (parent,transformed_parent_bounds,children,bounds,objects,auto_QMARK_){
var hv = (function (p1__54539_SHARP_){
return app.common.geom.shapes.points.start_hv(transformed_parent_bounds,p1__54539_SHARP_);
});
var vv = (function (p1__54540_SHARP_){
return app.common.geom.shapes.points.start_vv(transformed_parent_bounds,p1__54540_SHARP_);
});
var layout_bounds = app.common.geom.shapes.grid_layout.layout_data.layout_bounds(parent,transformed_parent_bounds);
var bound_height = app.common.geom.shapes.points.height_points(layout_bounds);
var bound_width = app.common.geom.shapes.points.width_points(layout_bounds);
var bound_corner = app.common.geom.shapes.points.origin(layout_bounds);
var vec__54556 = app.common.types.shape.layout.gaps(parent);
var row_gap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54556,(0),null);
var column_gap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54556,(1),null);
var auto_height_QMARK_ = (function (){var or__5025__auto__ = app.common.types.shape.layout.auto_height_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return auto_QMARK_;
}
})();
var auto_width_QMARK_ = (function (){var or__5025__auto__ = app.common.types.shape.layout.auto_width_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return auto_QMARK_;
}
})();
var map__54559 = parent;
var map__54559__$1 = cljs.core.__destructure_map(map__54559);
var layout_grid_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54559__$1,new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864));
var layout_grid_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54559__$1,new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947));
var layout_grid_cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54559__$1,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187));
var num_columns = cljs.core.count(layout_grid_columns);
var num_rows = cljs.core.count(layout_grid_rows);
var column_total_gap = (column_gap * (num_columns - (1)));
var row_total_gap = (row_gap * (num_rows - (1)));
var shape_cells = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__54560){
var vec__54561 = p__54560;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54561,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54561,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54541_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__54541_SHARP_,cell],null));
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(cell));
})),layout_grid_cells);
var children__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54542_SHARP_){
return app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__54542_SHARP_));
}),children);
var children_map = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__54543_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__54543_SHARP_)),p1__54543_SHARP_],null));
})),children__$1);
var column_tracks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.grid_layout.layout_data.calculate_initial_track_size,bound_width),layout_grid_columns);
var row_tracks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.grid_layout.layout_data.calculate_initial_track_size,bound_height),layout_grid_rows);
var column_tracks__$1 = app.common.geom.shapes.grid_layout.layout_data.set_auto_base_size(column_tracks,children__$1,shape_cells,bounds,objects,new cljs.core.Keyword(null,"column","column",2078222095));
var row_tracks__$1 = app.common.geom.shapes.grid_layout.layout_data.set_auto_base_size(row_tracks,children__$1,shape_cells,bounds,objects,new cljs.core.Keyword(null,"row","row",-570139521));
var column_tracks__$2 = app.common.geom.shapes.grid_layout.layout_data.set_auto_multi_span(parent,column_tracks__$1,children_map,shape_cells,bounds,objects,new cljs.core.Keyword(null,"column","column",2078222095));
var row_tracks__$2 = app.common.geom.shapes.grid_layout.layout_data.set_auto_multi_span(parent,row_tracks__$1,children_map,shape_cells,bounds,objects,new cljs.core.Keyword(null,"row","row",-570139521));
var column_total_size_nofr = app.common.geom.shapes.grid_layout.layout_data.tracks_total_size(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54544_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__54544_SHARP_));
}),column_tracks__$2));
var row_total_size_nofr = app.common.geom.shapes.grid_layout.layout_data.tracks_total_size(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54545_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__54545_SHARP_));
}),row_tracks__$2));
var column_frs = app.common.geom.shapes.grid_layout.layout_data.tracks_total_frs(column_tracks__$2);
var row_frs = app.common.geom.shapes.grid_layout.layout_data.tracks_total_frs(row_tracks__$2);
var column_tracks__$3 = app.common.geom.shapes.grid_layout.layout_data.set_flex_multi_span(parent,column_tracks__$2,children_map,shape_cells,bounds,objects,new cljs.core.Keyword(null,"column","column",2078222095));
var row_tracks__$3 = app.common.geom.shapes.grid_layout.layout_data.set_flex_multi_span(parent,row_tracks__$2,children_map,shape_cells,bounds,objects,new cljs.core.Keyword(null,"row","row",-570139521));
var fr_column_space = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (bound_width - (column_total_size_nofr + column_total_gap));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var fr_row_space = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (bound_height - (row_total_size_nofr + row_total_gap));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var min_column_fr = app.common.geom.shapes.grid_layout.layout_data.min_fr_value(column_tracks__$3);
var min_row_fr = app.common.geom.shapes.grid_layout.layout_data.min_fr_value(row_tracks__$3);
var column_fr = (cljs.core.truth_(auto_width_QMARK_)?min_column_fr:app.common.math.finite((fr_column_space / column_frs),(0)));
var row_fr = (cljs.core.truth_(auto_height_QMARK_)?min_row_fr:app.common.math.finite((fr_row_space / row_frs),(0)));
var column_tracks__$4 = app.common.geom.shapes.grid_layout.layout_data.set_fr_value(column_tracks__$3,column_fr,auto_width_QMARK_);
var row_tracks__$4 = app.common.geom.shapes.grid_layout.layout_data.set_fr_value(row_tracks__$3,row_fr,auto_height_QMARK_);
var column_total_size = app.common.geom.shapes.grid_layout.layout_data.tracks_total_size(column_tracks__$4);
var row_total_size = app.common.geom.shapes.grid_layout.layout_data.tracks_total_size(row_tracks__$4);
var auto_column_space = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (cljs.core.truth_(auto_width_QMARK_)?(0):(bound_width - (column_total_size + column_total_gap)));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var auto_row_space = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (cljs.core.truth_(auto_height_QMARK_)?(0):(bound_height - (row_total_size + row_total_gap)));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var column_autos = app.common.geom.shapes.grid_layout.layout_data.tracks_total_autos(column_tracks__$4);
var row_autos = app.common.geom.shapes.grid_layout.layout_data.tracks_total_autos(row_tracks__$4);
var column_add_auto = (auto_column_space / column_autos);
var row_add_auto = (auto_row_space / row_autos);
var column_tracks__$5 = (function (){var G__54564 = column_tracks__$4;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stretch","stretch",-1888837380),new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134).cljs$core$IFn$_invoke$arity$1(parent))){
return app.common.geom.shapes.grid_layout.layout_data.stretch_tracks(G__54564,column_add_auto);
} else {
return G__54564;
}
})();
var row_tracks__$5 = (function (){var G__54565 = row_tracks__$4;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stretch","stretch",-1888837380),new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473).cljs$core$IFn$_invoke$arity$1(parent))){
return app.common.geom.shapes.grid_layout.layout_data.stretch_tracks(G__54565,row_add_auto);
} else {
return G__54565;
}
})();
var column_total_size__$1 = app.common.geom.shapes.grid_layout.layout_data.tracks_total_size(column_tracks__$5);
var row_total_size__$1 = app.common.geom.shapes.grid_layout.layout_data.tracks_total_size(row_tracks__$5);
var num_columns__$1 = cljs.core.count(column_tracks__$5);
var column_gap__$1 = (function (){var G__54566 = new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"auto-width?","auto-width?",1734047389,null),G__54566)){
return column_gap;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"space-evenly","space-evenly",-998758715),G__54566)){
var x__5110__auto__ = column_gap;
var y__5111__auto__ = ((bound_width - column_total_size__$1) / (num_columns__$1 + (1)));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"space-around","space-around",248184132),G__54566)){
var x__5110__auto__ = column_gap;
var y__5111__auto__ = ((bound_width - column_total_size__$1) / num_columns__$1);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"space-between","space-between",1908176695),G__54566)){
var x__5110__auto__ = column_gap;
var y__5111__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_columns__$1,(1)))?column_gap:((bound_width - column_total_size__$1) / (num_columns__$1 - (1))));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
} else {
return column_gap;

}
}
}
}
})();
var num_rows__$1 = cljs.core.count(row_tracks__$5);
var row_gap__$1 = (function (){var G__54567 = new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"auto-height?","auto-height?",1612111070,null),G__54567)){
return row_gap;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"space-evenly","space-evenly",-998758715),G__54567)){
var x__5110__auto__ = row_gap;
var y__5111__auto__ = ((bound_height - row_total_size__$1) / (num_rows__$1 + (1)));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"space-around","space-around",248184132),G__54567)){
var x__5110__auto__ = row_gap;
var y__5111__auto__ = ((bound_height - row_total_size__$1) / num_rows__$1);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"space-between","space-between",1908176695),G__54567)){
var x__5110__auto__ = row_gap;
var y__5111__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_rows__$1,(1)))?row_gap:((bound_height - row_total_size__$1) / (num_rows__$1 - (1))));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
} else {
return row_gap;

}
}
}
}
})();
var start_p = (function (){var G__54568 = bound_corner;
var G__54568__$1 = ((((cljs.core.not(auto_width_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134).cljs$core$IFn$_invoke$arity$1(parent)))))?app.common.geom.point.add(G__54568,hv((bound_width - (column_total_size__$1 + column_total_gap)))):G__54568);
var G__54568__$2 = ((((cljs.core.not(auto_width_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134).cljs$core$IFn$_invoke$arity$1(parent)))))?app.common.geom.point.add(G__54568__$1,hv(((bound_width - (column_total_size__$1 + column_total_gap)) / (2)))):G__54568__$1);
var G__54568__$3 = ((((cljs.core.not(auto_height_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473).cljs$core$IFn$_invoke$arity$1(parent)))))?app.common.geom.point.add(G__54568__$2,vv((bound_height - (row_total_size__$1 + row_total_gap)))):G__54568__$2);
var G__54568__$4 = ((((cljs.core.not(auto_height_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473).cljs$core$IFn$_invoke$arity$1(parent)))))?app.common.geom.point.add(G__54568__$3,vv(((bound_height - (row_total_size__$1 + row_total_gap)) / (2)))):G__54568__$3);
var G__54568__$5 = ((((cljs.core.not(auto_width_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"space-around","space-around",248184132),new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134).cljs$core$IFn$_invoke$arity$1(parent)))))?app.common.geom.point.add(G__54568__$4,hv((column_gap__$1 / (2)))):G__54568__$4);
var G__54568__$6 = ((((cljs.core.not(auto_width_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"space-evenly","space-evenly",-998758715),new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134).cljs$core$IFn$_invoke$arity$1(parent)))))?app.common.geom.point.add(G__54568__$5,hv(column_gap__$1)):G__54568__$5);
var G__54568__$7 = ((((cljs.core.not(auto_height_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"space-around","space-around",248184132),new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473).cljs$core$IFn$_invoke$arity$1(parent)))))?app.common.geom.point.add(G__54568__$6,vv((row_gap__$1 / (2)))):G__54568__$6);
if(((cljs.core.not(auto_height_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"space-evenly","space-evenly",-998758715),new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473).cljs$core$IFn$_invoke$arity$1(parent))))){
return app.common.geom.point.add(G__54568__$7,vv(row_gap__$1));
} else {
return G__54568__$7;
}
})();
var column_tracks__$6 = cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__54569,p__54570){
var vec__54571 = p__54569;
var tracks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54571,(0),null);
var start_p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54571,(1),null);
var map__54574 = p__54570;
var map__54574__$1 = cljs.core.__destructure_map(map__54574);
var track = map__54574__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54574__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tracks,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(track,new cljs.core.Keyword(null,"start-p","start-p",767587445),start_p__$1)),app.common.geom.point.add(start_p__$1,hv((size + column_gap__$1)))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,start_p], null),column_tracks__$5));
var row_tracks__$6 = cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__54575,p__54576){
var vec__54577 = p__54575;
var tracks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54577,(0),null);
var start_p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54577,(1),null);
var map__54580 = p__54576;
var map__54580__$1 = cljs.core.__destructure_map(map__54580);
var track = map__54580__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54580__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tracks,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(track,new cljs.core.Keyword(null,"start-p","start-p",767587445),start_p__$1)),app.common.geom.point.add(start_p__$1,vv((size + row_gap__$1)))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,start_p], null),row_tracks__$5));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"row-tracks","row-tracks",-1727486848),new cljs.core.Keyword(null,"column-total-size","column-total-size",1061541632),new cljs.core.Keyword(null,"column-total-gap","column-total-gap",1781452557),new cljs.core.Keyword(null,"column-gap","column-gap",384822863),new cljs.core.Keyword(null,"column-tracks","column-tracks",291761616),new cljs.core.Keyword(null,"layout-bounds","layout-bounds",-1028383563),new cljs.core.Keyword(null,"row-total-gap","row-total-gap",-853642856),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"shape-cells","shape-cells",1406817502),new cljs.core.Keyword(null,"row-total-size","row-total-size",-2056972834),new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537)],[row_tracks__$6,column_total_size__$1,column_total_gap,column_gap__$1,column_tracks__$6,layout_bounds,row_total_gap,start_p,shape_cells,row_total_size__$1,row_gap__$1]);
}));

(app.common.geom.shapes.grid_layout.layout_data.calc_layout_data.cljs$lang$maxFixedArity = 6);

app.common.geom.shapes.grid_layout.layout_data.get_cell_data = (function app$common$geom$shapes$grid_layout$layout_data$get_cell_data(p__54581,_transformed_parent_bounds,p__54582){
var map__54583 = p__54581;
var map__54583__$1 = cljs.core.__destructure_map(map__54583);
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54583__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var row_tracks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54583__$1,new cljs.core.Keyword(null,"row-tracks","row-tracks",-1727486848));
var column_tracks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54583__$1,new cljs.core.Keyword(null,"column-tracks","column-tracks",291761616));
var shape_cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54583__$1,new cljs.core.Keyword(null,"shape-cells","shape-cells",1406817502));
var vec__54584 = p__54582;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54584,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54584,(1),null);
var grid_cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape_cells,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child));
if((((!((grid_cell == null)))) && (app.common.data.not_empty_QMARK_(grid_cell)))){
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(column_tracks,(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(grid_cell) - (1)),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(row_tracks,(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(grid_cell) - (1)),null);
var column_start_p = new cljs.core.Keyword(null,"start-p","start-p",767587445).cljs$core$IFn$_invoke$arity$1(column);
var row_start_p = new cljs.core.Keyword(null,"start-p","start-p",767587445).cljs$core$IFn$_invoke$arity$1(row);
if((((!((column_start_p == null)))) && ((!((row_start_p == null)))))){
var start_p = app.common.geom.point.add(origin,app.common.geom.point.add(app.common.geom.point.to_vec(origin,column_start_p),app.common.geom.point.to_vec(origin,row_start_p)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(grid_cell,new cljs.core.Keyword(null,"start-p","start-p",767587445),start_p);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=app.common.geom.shapes.grid_layout.layout_data.js.map
