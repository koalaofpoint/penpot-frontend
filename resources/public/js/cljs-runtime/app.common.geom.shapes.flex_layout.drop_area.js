import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.common.js";
import "./app.common.geom.shapes.flex_layout.layout_data.js";
import "./app.common.geom.shapes.points.js";
import "./app.common.geom.shapes.transforms.js";
import "./app.common.types.modifiers.js";
import "./app.common.types.shape.layout.js";
goog.provide('app.common.geom.shapes.flex_layout.drop_area');
app.common.geom.shapes.flex_layout.drop_area.drop_child_areas = (function app$common$geom$shapes$flex_layout$drop_area$drop_child_areas(frame,parent_rect,child_bounds,index,reverse_QMARK_,prev_x,prev_y,last_QMARK_){
var col_QMARK_ = app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(frame);
var row_QMARK_ = app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(frame);
var vec__68384 = app.common.types.shape.layout.gaps(frame);
var layout_gap_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68384,(0),null);
var layout_gap_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68384,(1),null);
var start_p = app.common.geom.shapes.points.origin(child_bounds);
var box_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_p);
var box_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_p);
var box_width = app.common.geom.shapes.points.width_points(child_bounds);
var box_height = app.common.geom.shapes.points.height_points(child_bounds);
var x = ((col_QMARK_)?new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(parent_rect):prev_x);
var y = ((row_QMARK_)?new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(parent_rect):prev_y);
var width = (cljs.core.truth_((function (){var and__5023__auto__ = row_QMARK_;
if(and__5023__auto__){
return last_QMARK_;
} else {
return and__5023__auto__;
}
})())?((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(parent_rect) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(parent_rect)) - x):((col_QMARK_)?new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(parent_rect):((box_width + (box_x - prev_x)) + (layout_gap_col / (2)))
));
var height = (cljs.core.truth_((function (){var and__5023__auto__ = col_QMARK_;
if(and__5023__auto__){
return last_QMARK_;
} else {
return and__5023__auto__;
}
})())?((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(parent_rect) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(parent_rect)) - y):((row_QMARK_)?new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(parent_rect):((box_height + (box_y - prev_y)) + (layout_gap_row / (2)))
));
if(row_QMARK_){
var half_point_width = ((box_x - x) + (box_width / (2)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(x,y,width,height),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(x,y,half_point_width,height),new cljs.core.Keyword(null,"index","index",-1531685915),(cljs.core.truth_(reverse_QMARK_)?(index + (1)):index)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4((x + half_point_width),y,(width - half_point_width),height),new cljs.core.Keyword(null,"index","index",-1531685915),(cljs.core.truth_(reverse_QMARK_)?index:(index + (1))))], null);
} else {
var half_point_height = ((box_y - y) + (box_height / (2)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(x,y,width,height),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(x,y,width,half_point_height),new cljs.core.Keyword(null,"index","index",-1531685915),(cljs.core.truth_(reverse_QMARK_)?(index + (1)):index)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(x,(y + half_point_height),width,(height - half_point_height)),new cljs.core.Keyword(null,"index","index",-1531685915),(cljs.core.truth_(reverse_QMARK_)?index:(index + (1))))], null);
}
});
app.common.geom.shapes.flex_layout.drop_area.drop_line_area = (function app$common$geom$shapes$flex_layout$drop_area$drop_line_area(p__68387,p__68388,prev_x,prev_y,last_QMARK_){
var map__68389 = p__68387;
var map__68389__$1 = cljs.core.__destructure_map(map__68389);
var frame = map__68389__$1;
var transform_inverse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68389__$1,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576));
var margin_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68389__$1,new cljs.core.Keyword(null,"margin-x","margin-x",1660588286));
var margin_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68389__$1,new cljs.core.Keyword(null,"margin-y","margin-y",-371718288));
var map__68390 = p__68388;
var map__68390__$1 = cljs.core.__destructure_map(map__68390);
var line_data = map__68390__$1;
var start_p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68390__$1,new cljs.core.Keyword(null,"start-p","start-p",767587445));
var layout_gap_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68390__$1,new cljs.core.Keyword(null,"layout-gap-row","layout-gap-row",609410826));
var layout_gap_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68390__$1,new cljs.core.Keyword(null,"layout-gap-col","layout-gap-col",-1979319979));
var num_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68390__$1,new cljs.core.Keyword(null,"num-children","num-children",-1656107233));
var line_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68390__$1,new cljs.core.Keyword(null,"line-width","line-width",-906934988));
var line_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68390__$1,new cljs.core.Keyword(null,"line-height","line-height",1870784992));
var col_QMARK_ = app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(frame);
var row_QMARK_ = app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(frame);
var h_center_QMARK_ = ((row_QMARK_) && (app.common.types.shape.layout.h_center_QMARK_(frame)));
var h_end_QMARK_ = ((row_QMARK_) && (app.common.types.shape.layout.h_end_QMARK_(frame)));
var v_center_QMARK_ = ((col_QMARK_) && (app.common.types.shape.layout.v_center_QMARK_(frame)));
var v_end_QMARK_ = ((row_QMARK_) && (app.common.types.shape.layout.v_end_QMARK_(frame)));
var center = app.common.geom.shapes.common.shape__GT_center(frame);
var start_p__$1 = app.common.geom.matrix.transform_point_center(start_p,center,transform_inverse);
var line_width__$1 = ((row_QMARK_)?new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(frame):((line_width + margin_x) + ((row_QMARK_)?(layout_gap_col * (num_children - (1))):(0))));
var line_height__$1 = ((col_QMARK_)?new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(frame):((line_height + margin_y) + ((col_QMARK_)?(layout_gap_row * (num_children - (1))):(0))));
var box_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_p__$1) - ((h_center_QMARK_)?(line_width__$1 / (2)):((h_end_QMARK_)?line_width__$1:(0)
)));
var box_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_p__$1) - ((v_center_QMARK_)?(line_height__$1 / (2)):((v_end_QMARK_)?line_height__$1:(0)
)));
var x = ((row_QMARK_)?new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame):prev_x);
var y = ((col_QMARK_)?new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame):prev_y);
var width = (cljs.core.truth_((function (){var and__5023__auto__ = col_QMARK_;
if(and__5023__auto__){
return last_QMARK_;
} else {
return and__5023__auto__;
}
})())?((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(frame)) - x):((row_QMARK_)?new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(frame):((line_width__$1 + (box_x - prev_x)) + (layout_gap_col / (2)))
));
var height = (cljs.core.truth_((function (){var and__5023__auto__ = row_QMARK_;
if(and__5023__auto__){
return last_QMARK_;
} else {
return and__5023__auto__;
}
})())?((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(frame)) - y):((col_QMARK_)?new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(frame):((line_height__$1 + (box_y - prev_y)) + (layout_gap_row / (2)))
));
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(x,y,width,height);
});
/**
 * Retrieve the layout drop areas to move shapes inside layouts
 */
app.common.geom.shapes.flex_layout.drop_area.layout_drop_areas = (function app$common$geom$shapes$flex_layout$drop_area$layout_drop_areas(frame,layout_data,children){
var reverse_QMARK_ = new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474).cljs$core$IFn$_invoke$arity$1(layout_data);
var children__$1 = cljs.core.vec((function (){var G__68391 = app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(children);
if(cljs.core.not(reverse_QMARK_)){
return cljs.core.reverse(G__68391);
} else {
return G__68391;
}
})());
var lines = new cljs.core.Keyword(null,"layout-lines","layout-lines",-1868555037).cljs$core$IFn$_invoke$arity$1(layout_data);
var areas = cljs.core.PersistentVector.EMPTY;
var from_idx = (0);
var prev_line_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame);
var prev_line_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame);
var lines__$1 = cljs.core.seq(lines);
while(true){
if(cljs.core.empty_QMARK_(lines__$1)){
return areas;
} else {
var current_line = cljs.core.first(lines__$1);
var line_area = app.common.geom.shapes.flex_layout.drop_area.drop_line_area(frame,current_line,prev_line_x,prev_line_y,cljs.core.empty_QMARK_(cljs.core.rest(lines__$1)));
var children__$2 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children__$1,from_idx,(from_idx + new cljs.core.Keyword(null,"num-children","num-children",-1656107233).cljs$core$IFn$_invoke$arity$1(current_line)));
var next_areas = (function (){var areas__$1 = areas;
var prev_child_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(line_area);
var prev_child_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(line_area);
var children__$3 = cljs.core.seq(children__$2);
while(true){
if(cljs.core.empty_QMARK_(children__$3)){
return areas__$1;
} else {
var vec__68410 = cljs.core.first(children__$3);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68410,(0),null);
var vec__68413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68410,(1),null);
var child_bounds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68413,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68413,(1),null);
var vec__68416 = app.common.geom.shapes.flex_layout.drop_area.drop_child_areas(frame,line_area,child_bounds,index,cljs.core.not(reverse_QMARK_),prev_child_x,prev_child_y,cljs.core.empty_QMARK_(cljs.core.rest(children__$3)));
var child_area = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68416,(0),null);
var child_area_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68416,(1),null);
var child_area_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68416,(2),null);
var G__68430 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(areas__$1,child_area_start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([child_area_end], 0));
var G__68431 = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(child_area) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(child_area));
var G__68432 = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(child_area) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(child_area));
var G__68433 = cljs.core.rest(children__$3);
areas__$1 = G__68430;
prev_child_x = G__68431;
prev_child_y = G__68432;
children__$3 = G__68433;
continue;
}
break;
}
})();
var G__68434 = next_areas;
var G__68435 = (from_idx + new cljs.core.Keyword(null,"num-children","num-children",-1656107233).cljs$core$IFn$_invoke$arity$1(current_line));
var G__68436 = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(line_area) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(line_area));
var G__68437 = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(line_area) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(line_area));
var G__68438 = cljs.core.rest(lines__$1);
areas = G__68434;
from_idx = G__68435;
prev_line_x = G__68436;
prev_line_y = G__68437;
lines__$1 = G__68438;
continue;
}
break;
}
});
app.common.geom.shapes.flex_layout.drop_area.get_flip_modifiers = (function app$common$geom$shapes$flex_layout$drop_area$get_flip_modifiers(p__68419){
var map__68420 = p__68419;
var map__68420__$1 = cljs.core.__destructure_map(map__68420);
var shape = map__68420__$1;
var flip_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68420__$1,new cljs.core.Keyword(null,"flip-x","flip-x",891276861));
var flip_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68420__$1,new cljs.core.Keyword(null,"flip-y","flip-y",935998815));
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68420__$1,new cljs.core.Keyword(null,"transform","transform",1381301764));
var transform_inverse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68420__$1,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576));
if(cljs.core.truth_((function (){var or__5025__auto__ = flip_x;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return flip_y;
}
})())){
var modifiers = app.common.types.modifiers.resize.cljs$core$IFn$_invoke$arity$5(app.common.types.modifiers.empty(),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(flip_x)?-1.0:1.0),(cljs.core.truth_(flip_y)?-1.0:1.0)),app.common.geom.shapes.common.shape__GT_center(shape),transform,transform_inverse);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.shapes.transforms.transform_shape.cljs$core$IFn$_invoke$arity$2(shape,modifiers),modifiers], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape,null], null);
}
});
app.common.geom.shapes.flex_layout.drop_area.get_drop_areas = (function app$common$geom$shapes$flex_layout$drop_area$get_drop_areas(frame,objects,bounds){
var vec__68423 = app.common.geom.shapes.flex_layout.drop_area.get_flip_modifiers(frame);
var frame__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68423,(0),null);
var modifiers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68423,(1),null);
var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68422_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[app.common.geom.shapes.points.parent_coords_bounds(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(p1__68422_SHARP_),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(frame__$1)),p1__68422_SHARP_],null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68421_SHARP_){
var G__68426 = p1__68421_SHARP_;
if((!((modifiers == null)))){
return app.common.geom.shapes.transforms.transform_shape.cljs$core$IFn$_invoke$arity$2(G__68426,modifiers);
} else {
return G__68426;
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hidden","hidden",-312506092),app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame__$1)))));
var layout_data = app.common.geom.shapes.flex_layout.layout_data.calc_layout_data.cljs$core$IFn$_invoke$arity$5(frame__$1,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(frame__$1),children,bounds,objects);
var drop_areas = app.common.geom.shapes.flex_layout.drop_area.layout_drop_areas(frame__$1,layout_data,children);
return drop_areas;
});
app.common.geom.shapes.flex_layout.drop_area.get_drop_index = (function app$common$geom$shapes$flex_layout$drop_area$get_drop_index(frame_id,objects,position){
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
var bounds = app.common.data.lazy_map(cljs.core.keys(objects),(function (p1__68427_SHARP_){
return app.common.geom.shapes.common.shape__GT_points(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__68427_SHARP_));
}));
var drop_areas = app.common.geom.shapes.flex_layout.drop_area.get_drop_areas(frame,objects,bounds);
var position__$1 = app.common.geom.matrix.transform_point_center(position,app.common.geom.shapes.common.shape__GT_center(frame),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$1(frame));
var area = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__68428_SHARP_){
return app.common.geom.rect.contains_point_QMARK_(p1__68428_SHARP_,position__$1);
}),drop_areas);
return new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(area);
});

//# sourceMappingURL=app.common.geom.shapes.flex_layout.drop_area.js.map
