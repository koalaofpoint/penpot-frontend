import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.points.js";
import "./app.common.types.shape.layout.js";
goog.provide('app.common.geom.shapes.flex_layout.positions');
app.common.geom.shapes.flex_layout.positions.get_base_line = (function app$common$geom$shapes$flex_layout$positions$get_base_line(parent,layout_bounds,total_width,total_height,num_lines){
var layout_width = app.common.geom.shapes.points.width_points(layout_bounds);
var layout_height = app.common.geom.shapes.points.height_points(layout_bounds);
var row_QMARK_ = app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var col_QMARK_ = app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var hv = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.points.start_hv,layout_bounds);
var vv = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.points.start_vv,layout_bounds);
var wrap_QMARK_ = app.common.types.shape.layout.wrap_QMARK_(parent);
var end_QMARK_ = ((((wrap_QMARK_) && (app.common.types.shape.layout.content_end_QMARK_(parent)))) || ((((!(wrap_QMARK_))) && (app.common.types.shape.layout.align_items_end_QMARK_(parent)))));
var center_QMARK_ = ((((wrap_QMARK_) && (app.common.types.shape.layout.content_center_QMARK_(parent)))) || ((((!(wrap_QMARK_))) && (app.common.types.shape.layout.align_items_center_QMARK_(parent)))));
var around_QMARK_ = ((wrap_QMARK_) && (app.common.types.shape.layout.content_around_QMARK_(parent)));
var evenly_QMARK_ = ((wrap_QMARK_) && (app.common.types.shape.layout.content_evenly_QMARK_(parent)));
var vec__68137 = app.common.types.shape.layout.gaps(parent);
var layout_gap_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68137,(0),null);
var layout_gap_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68137,(1),null);
var lines_gap_row = ((num_lines - (1)) * layout_gap_row);
var lines_gap_col = ((num_lines - (1)) * layout_gap_col);
var free_width_gap = ((layout_width - total_width) - lines_gap_col);
var free_height_gap = ((layout_height - total_height) - lines_gap_row);
var free_width = (layout_width - total_width);
var free_height = (layout_height - total_height);
var G__68141 = app.common.geom.shapes.points.origin(layout_bounds);
var G__68141__$1 = ((row_QMARK_)?(function (){var G__68142 = G__68141;
var G__68142__$1 = ((center_QMARK_)?app.common.geom.point.add(G__68142,vv((free_height_gap / (2)))):G__68142);
var G__68142__$2 = ((end_QMARK_)?app.common.geom.point.add(G__68142__$1,vv(free_height_gap)):G__68142__$1);
var G__68142__$3 = ((around_QMARK_)?app.common.geom.point.add(G__68142__$2,vv((function (){var x__5110__auto__ = lines_gap_row;
var y__5111__auto__ = ((free_height / num_lines) / (2));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})())):G__68142__$2);
if(evenly_QMARK_){
return app.common.geom.point.add(G__68142__$3,vv((function (){var x__5110__auto__ = lines_gap_row;
var y__5111__auto__ = (free_height / (num_lines + (1)));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()));
} else {
return G__68142__$3;
}
})():G__68141);
if(col_QMARK_){
var G__68144 = G__68141__$1;
var G__68144__$1 = ((center_QMARK_)?app.common.geom.point.add(G__68144,hv((free_width_gap / (2)))):G__68144);
var G__68144__$2 = ((end_QMARK_)?app.common.geom.point.add(G__68144__$1,hv(free_width_gap)):G__68144__$1);
var G__68144__$3 = ((around_QMARK_)?app.common.geom.point.add(G__68144__$2,hv((function (){var x__5110__auto__ = (function (){var x__5110__auto__ = lines_gap_col;
var y__5111__auto__ = (free_width / num_lines);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y__5111__auto__ = (2);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})())):G__68144__$2);
if(evenly_QMARK_){
return app.common.geom.point.add(G__68144__$3,hv((function (){var x__5110__auto__ = lines_gap_col;
var y__5111__auto__ = (free_width / (num_lines + (1)));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()));
} else {
return G__68144__$3;
}
} else {
return G__68141__$1;
}
});
app.common.geom.shapes.flex_layout.positions.get_next_line = (function app$common$geom$shapes$flex_layout$positions$get_next_line(parent,layout_bounds,p__68148,base_p,total_width,total_height,num_lines){
var map__68149 = p__68148;
var map__68149__$1 = cljs.core.__destructure_map(map__68149);
var line_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68149__$1,new cljs.core.Keyword(null,"line-width","line-width",-906934988));
var line_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68149__$1,new cljs.core.Keyword(null,"line-height","line-height",1870784992));
var layout_width = app.common.geom.shapes.points.width_points(layout_bounds);
var layout_height = app.common.geom.shapes.points.height_points(layout_bounds);
var row_QMARK_ = app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var col_QMARK_ = app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var auto_width_QMARK_ = app.common.types.shape.layout.auto_width_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var auto_height_QMARK_ = app.common.types.shape.layout.auto_height_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var vec__68151 = app.common.types.shape.layout.gaps(parent);
var layout_gap_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68151,(0),null);
var layout_gap_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68151,(1),null);
var hv = (function (p1__68146_SHARP_){
return app.common.geom.shapes.points.start_hv(layout_bounds,p1__68146_SHARP_);
});
var vv = (function (p1__68147_SHARP_){
return app.common.geom.shapes.points.start_vv(layout_bounds,p1__68147_SHARP_);
});
var stretch_QMARK_ = app.common.types.shape.layout.content_stretch_QMARK_(parent);
var between_QMARK_ = app.common.types.shape.layout.content_between_QMARK_(parent);
var around_QMARK_ = app.common.types.shape.layout.content_around_QMARK_(parent);
var evenly_QMARK_ = app.common.types.shape.layout.content_evenly_QMARK_(parent);
var free_width = (layout_width - total_width);
var free_height = (layout_height - total_height);
var line_gap_col = ((auto_width_QMARK_)?layout_gap_col:((stretch_QMARK_)?(free_width / num_lines):((between_QMARK_)?(free_width / (num_lines - (1))):((around_QMARK_)?(free_width / num_lines):((evenly_QMARK_)?(free_width / (num_lines + (1))):layout_gap_col
)))));
var line_gap_row = ((auto_height_QMARK_)?layout_gap_row:((stretch_QMARK_)?(free_height / num_lines):((between_QMARK_)?(free_height / (num_lines - (1))):((around_QMARK_)?(free_height / num_lines):((evenly_QMARK_)?(free_height / (num_lines + (1))):layout_gap_row
)))));
var G__68162 = base_p;
var G__68162__$1 = ((row_QMARK_)?app.common.geom.point.add(G__68162,vv((line_height + (function (){var x__5110__auto__ = layout_gap_row;
var y__5111__auto__ = line_gap_row;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()))):G__68162);
if(col_QMARK_){
return app.common.geom.point.add(G__68162__$1,hv((line_width + (function (){var x__5110__auto__ = layout_gap_col;
var y__5111__auto__ = line_gap_col;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})())));
} else {
return G__68162__$1;
}
});
/**
 * Cross axis line. It's position is fixed along the different lines
 */
app.common.geom.shapes.flex_layout.positions.get_start_line = (function app$common$geom$shapes$flex_layout$positions$get_start_line(parent,layout_bounds,p__68179,base_p,total_width,total_height,num_lines){
var map__68181 = p__68179;
var map__68181__$1 = cljs.core.__destructure_map(map__68181);
var line_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68181__$1,new cljs.core.Keyword(null,"line-width","line-width",-906934988));
var line_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68181__$1,new cljs.core.Keyword(null,"line-height","line-height",1870784992));
var num_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68181__$1,new cljs.core.Keyword(null,"num-children","num-children",-1656107233));
var layout_width = app.common.geom.shapes.points.width_points(layout_bounds);
var layout_height = app.common.geom.shapes.points.height_points(layout_bounds);
var vec__68182 = app.common.types.shape.layout.gaps(parent);
var layout_gap_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68182,(0),null);
var layout_gap_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68182,(1),null);
var row_QMARK_ = app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var col_QMARK_ = app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var space_between_QMARK_ = app.common.types.shape.layout.space_between_QMARK_(parent);
var space_around_QMARK_ = app.common.types.shape.layout.space_around_QMARK_(parent);
var space_evenly_QMARK_ = app.common.types.shape.layout.space_evenly_QMARK_(parent);
var h_center_QMARK_ = app.common.types.shape.layout.h_center_QMARK_(parent);
var h_end_QMARK_ = app.common.types.shape.layout.h_end_QMARK_(parent);
var v_center_QMARK_ = app.common.types.shape.layout.v_center_QMARK_(parent);
var v_end_QMARK_ = app.common.types.shape.layout.v_end_QMARK_(parent);
var content_stretch_QMARK_ = app.common.types.shape.layout.content_stretch_QMARK_(parent);
var auto_width_QMARK_ = app.common.types.shape.layout.auto_width_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var auto_height_QMARK_ = app.common.types.shape.layout.auto_height_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var hv = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.points.start_hv,layout_bounds);
var vv = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.points.start_vv,layout_bounds);
var children_gap_width = (layout_gap_col * (num_children - (1)));
var children_gap_height = (layout_gap_row * (num_children - (1)));
var line_height__$1 = ((((row_QMARK_) && (((content_stretch_QMARK_) && ((!(auto_height_QMARK_)))))))?(line_height + ((layout_height - total_height) / num_lines)):line_height);
var line_width__$1 = ((((col_QMARK_) && (((content_stretch_QMARK_) && ((!(auto_width_QMARK_)))))))?(line_width + ((layout_width - total_width) / num_lines)):line_width);
var start_p = (function (){var G__68190 = base_p;
var G__68190__$1 = ((((row_QMARK_) && (((h_center_QMARK_) && ((((!(space_around_QMARK_))) && ((((!(space_evenly_QMARK_))) && ((!(space_between_QMARK_)))))))))))?app.common.geom.point.subtract(app.common.geom.point.add(G__68190,hv((layout_width / (2)))),hv(((line_width__$1 + children_gap_width) / (2)))):G__68190);
var G__68190__$2 = ((((row_QMARK_) && (((h_end_QMARK_) && ((((!(space_around_QMARK_))) && ((((!(space_evenly_QMARK_))) && ((!(space_between_QMARK_)))))))))))?app.common.geom.point.subtract(app.common.geom.point.add(G__68190__$1,hv(layout_width)),hv((line_width__$1 + children_gap_width))):G__68190__$1);
var G__68190__$3 = ((((col_QMARK_) && (((v_center_QMARK_) && ((((!(space_around_QMARK_))) && ((((!(space_evenly_QMARK_))) && ((!(space_between_QMARK_)))))))))))?app.common.geom.point.subtract(app.common.geom.point.add(G__68190__$2,vv((layout_height / (2)))),vv(((line_height__$1 + children_gap_height) / (2)))):G__68190__$2);
if(((col_QMARK_) && (((v_end_QMARK_) && ((((!(space_around_QMARK_))) && ((((!(space_evenly_QMARK_))) && ((!(space_between_QMARK_))))))))))){
return app.common.geom.point.subtract(app.common.geom.point.add(G__68190__$3,vv(layout_height)),vv((line_height__$1 + children_gap_height)));
} else {
return G__68190__$3;
}
})();
return start_p;
});
/**
 * Calculates the position for the current shape given the layout-data context
 */
app.common.geom.shapes.flex_layout.positions.get_child_position = (function app$common$geom$shapes$flex_layout$positions$get_child_position(parent,child,child_width,child_height,p__68227){
var map__68228 = p__68227;
var map__68228__$1 = cljs.core.__destructure_map(map__68228);
var layout_data = map__68228__$1;
var start_p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68228__$1,new cljs.core.Keyword(null,"start-p","start-p",767587445));
var layout_gap_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68228__$1,new cljs.core.Keyword(null,"layout-gap-row","layout-gap-row",609410826));
var layout_gap_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68228__$1,new cljs.core.Keyword(null,"layout-gap-col","layout-gap-col",-1979319979));
var margin_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68228__$1,new cljs.core.Keyword(null,"margin-x","margin-x",1660588286));
var margin_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68228__$1,new cljs.core.Keyword(null,"margin-y","margin-y",-371718288));
var line_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68228__$1,new cljs.core.Keyword(null,"line-height","line-height",1870784992));
var line_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68228__$1,new cljs.core.Keyword(null,"line-width","line-width",-906934988));
var layout_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68228__$1,new cljs.core.Keyword(null,"layout-bounds","layout-bounds",-1028383563));
var row_QMARK_ = app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var col_QMARK_ = app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var h_start_QMARK_ = app.common.types.shape.layout.h_start_QMARK_(parent);
var h_center_QMARK_ = app.common.types.shape.layout.h_center_QMARK_(parent);
var h_end_QMARK_ = app.common.types.shape.layout.h_end_QMARK_(parent);
var v_start_QMARK_ = app.common.types.shape.layout.v_start_QMARK_(parent);
var v_center_QMARK_ = app.common.types.shape.layout.v_center_QMARK_(parent);
var v_end_QMARK_ = app.common.types.shape.layout.v_end_QMARK_(parent);
var self_start_QMARK_ = app.common.types.shape.layout.align_self_start_QMARK_(child);
var self_end_QMARK_ = app.common.types.shape.layout.align_self_end_QMARK_(child);
var self_center_QMARK_ = app.common.types.shape.layout.align_self_center_QMARK_(child);
var align_self_QMARK_ = ((self_start_QMARK_) || (((self_end_QMARK_) || (self_center_QMARK_))));
var v_start_QMARK___$1 = ((((col_QMARK_) || ((!(align_self_QMARK_)))))?v_start_QMARK_:self_start_QMARK_);
var v_center_QMARK___$1 = ((((col_QMARK_) || ((!(align_self_QMARK_)))))?v_center_QMARK_:self_center_QMARK_);
var v_end_QMARK___$1 = ((((col_QMARK_) || ((!(align_self_QMARK_)))))?v_end_QMARK_:self_end_QMARK_);
var h_start_QMARK___$1 = ((((row_QMARK_) || ((!(align_self_QMARK_)))))?h_start_QMARK_:self_start_QMARK_);
var h_center_QMARK___$1 = ((((row_QMARK_) || ((!(align_self_QMARK_)))))?h_center_QMARK_:self_center_QMARK_);
var h_end_QMARK___$1 = ((((row_QMARK_) || ((!(align_self_QMARK_)))))?h_end_QMARK_:self_end_QMARK_);
var vec__68229 = app.common.types.shape.layout.child_margins(child);
var margin_top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68229,(0),null);
var margin_right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68229,(1),null);
var margin_bottom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68229,(2),null);
var margin_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68229,(3),null);
var hv = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.points.start_hv,layout_bounds);
var vv = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.points.start_vv,layout_bounds);
var corner_p = (function (){var G__68232 = start_p;
var G__68232__$1 = ((col_QMARK_)?(function (){var G__68233 = G__68232;
var G__68233__$1 = (((!((margin_top == null))))?app.common.geom.point.add(G__68233,vv(margin_top)):G__68233);
var G__68233__$2 = ((h_center_QMARK___$1)?app.common.geom.point.add(G__68233__$1,hv((- (child_width / (2))))):G__68233__$1);
var G__68233__$3 = ((h_end_QMARK___$1)?app.common.geom.point.add(G__68233__$2,hv((- child_width))):G__68233__$2);
var G__68233__$4 = ((h_start_QMARK___$1)?app.common.geom.point.add(G__68233__$3,hv(margin_left)):G__68233__$3);
var G__68233__$5 = ((h_center_QMARK___$1)?app.common.geom.point.add(G__68233__$4,hv(((line_width / (2)) + ((margin_left - margin_right) / (2))))):G__68233__$4);
if(h_end_QMARK___$1){
return app.common.geom.point.add(G__68233__$5,hv((line_width + (- margin_right))));
} else {
return G__68233__$5;
}
})():G__68232);
var G__68232__$2 = ((row_QMARK_)?(function (){var G__68234 = G__68232__$1;
var G__68234__$1 = ((v_center_QMARK___$1)?app.common.geom.point.add(G__68234,vv((- (child_height / (2))))):G__68234);
var G__68234__$2 = ((v_end_QMARK___$1)?app.common.geom.point.add(G__68234__$1,vv((- child_height))):G__68234__$1);
var G__68234__$3 = (((!((margin_left == null))))?app.common.geom.point.add(G__68234__$2,hv(margin_left)):G__68234__$2);
var G__68234__$4 = ((v_start_QMARK___$1)?app.common.geom.point.add(G__68234__$3,vv(margin_top)):G__68234__$3);
var G__68234__$5 = ((v_center_QMARK___$1)?app.common.geom.point.add(G__68234__$4,vv(((line_height / (2)) + ((margin_top - margin_bottom) / (2))))):G__68234__$4);
if(v_end_QMARK___$1){
return app.common.geom.point.add(G__68234__$5,vv((line_height + (- margin_bottom))));
} else {
return G__68234__$5;
}
})():G__68232__$1);
var G__68232__$3 = (((!((margin_x == null))))?app.common.geom.point.add(G__68232__$2,hv(margin_x)):G__68232__$2);
if((!((margin_y == null)))){
return app.common.geom.point.add(G__68232__$3,vv(margin_y));
} else {
return G__68232__$3;
}
})();
var next_p = (function (){var G__68235 = start_p;
var G__68235__$1 = ((row_QMARK_)?app.common.geom.point.add(app.common.geom.point.add(G__68235,hv((child_width + layout_gap_col))),hv((margin_left + margin_right))):G__68235);
var G__68235__$2 = ((col_QMARK_)?app.common.geom.point.add(app.common.geom.point.add(G__68235__$1,vv((margin_top + margin_bottom))),vv((child_height + layout_gap_row))):G__68235__$1);
var G__68235__$3 = (((!((margin_x == null))))?app.common.geom.point.add(G__68235__$2,hv(margin_x)):G__68235__$2);
if((!((margin_y == null)))){
return app.common.geom.point.add(G__68235__$3,vv(margin_y));
} else {
return G__68235__$3;
}
})();
var layout_data__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(layout_data,new cljs.core.Keyword(null,"start-p","start-p",767587445),next_p);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [corner_p,layout_data__$1], null);
});

//# sourceMappingURL=app.common.geom.shapes.flex_layout.positions.js.map
