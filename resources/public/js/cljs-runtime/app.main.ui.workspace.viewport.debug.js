import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.shapes.flex_layout.js";
import "./app.common.geom.shapes.grid_layout.js";
import "./app.common.geom.shapes.points.js";
import "./app.common.types.shape.layout.js";
import "./app.common.uuid.js";
import "./app.render_wasm.api.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.viewport.debug');
/**
 * Debug component to show the auto-layout drop areas
 */
app.main.ui.workspace.viewport.debug.debug_content_bounds = (function app$main$ui$workspace$viewport$debug$debug_content_bounds(props_80136){
var props = props_80136;
var objects = (props["objects"]);
var zoom = (props["zoom"]);
var selected_shapes = (props["selected-shapes"]);
var hover_top_frame_id = (props["hover-top-frame-id"]);
var selected_frame = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected_shapes),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(selected_shapes))))))?cljs.core.first(selected_shapes):null);
var shape = (function (){var or__5025__auto__ = selected_frame;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,hover_top_frame_id);
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = shape;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(shape);
} else {
return and__5023__auto__;
}
})())){
var children = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hidden","hidden",-312506092),app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));
var bounds = app.common.data.lazy_map(cljs.core.keys(objects),(function (p1__80134_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__80134_SHARP_),new cljs.core.Keyword(null,"points","points",-1486596883));
}));
var children_PLUS_bounds = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (shape__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1))),shape__$1], null);
}),children);
var grid_layout_data = ((app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?app.common.geom.shapes.grid_layout.calc_layout_data.cljs$core$IFn$_invoke$arity$5(shape,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape),children_PLUS_bounds,bounds,objects):null);
var layout_bounds = ((app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?app.common.geom.shapes.flex_layout.layout_content_bounds(bounds,shape,children,objects):((app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?app.common.geom.shapes.grid_layout.layout_content_bounds(bounds,shape,grid_layout_data):null));
var layout_points = ((app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?cljs.core.flatten(app.common.geom.shapes.flex_layout.layout_content_points(bounds,shape,children,objects)):((app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?cljs.core.flatten(app.common.geom.shapes.grid_layout.layout_content_points(bounds,shape,grid_layout_data)):null));
return rumext.v2.jsxs("g",{'className':"debug-layout",'pointerEvents':"none",'children':[rumext.v2.jsx("polygon",{'points':cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80135_SHARP_){
return ""+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__80135_SHARP_) ?? "")+", "+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__80135_SHARP_) ?? "");
}),layout_bounds)),'style':{'stroke':"red",'fill':"none"}}),rumext.v2.jsx(rumext.v2.Fragment,{'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p){
out_arr__46744__auto__.push(rumext.v2.jsx("circle",{'cx':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),'cy':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),'r':((4) / zoom),'style':{'fill':"red"}}));

return out_arr__46744__auto__;
}),[],layout_points)})]});
} else {
return null;
}
});

(app.main.ui.workspace.viewport.debug.debug_content_bounds.displayName = "debug-content-bounds");

/**
 * Debug component to show the auto-layout drop areas
 */
app.main.ui.workspace.viewport.debug.debug_layout_lines = (function app$main$ui$workspace$viewport$debug$debug_layout_lines(props_80146){
var props = props_80146;
var objects = (props["objects"]);
var zoom = (props["zoom"]);
var selected_shapes = (props["selected-shapes"]);
var hover_top_frame_id = (props["hover-top-frame-id"]);
var selected_frame = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected_shapes),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(selected_shapes))))))?cljs.core.first(selected_shapes):null);
var shape = (function (){var or__5025__auto__ = selected_frame;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,hover_top_frame_id);
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = shape;
if(cljs.core.truth_(and__5023__auto__)){
return app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
} else {
return and__5023__auto__;
}
})())){
var row_QMARK_ = app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var col_QMARK_ = app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80141_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[app.common.geom.shapes.points.parent_coords_bounds(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(p1__80141_SHARP_),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape)),p1__80141_SHARP_],null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hidden","hidden",-312506092),app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))));
var bounds = app.common.data.lazy_map(cljs.core.keys(objects),(function (p1__80142_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__80142_SHARP_),new cljs.core.Keyword(null,"points","points",-1486596883));
}));
var layout_data = app.common.geom.shapes.flex_layout.calc_layout_data.cljs$core$IFn$_invoke$arity$5(shape,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape),children,bounds,objects);
var layout_bounds = new cljs.core.Keyword(null,"layout-bounds","layout-bounds",-1028383563).cljs$core$IFn$_invoke$arity$1(layout_data);
var xv = (function (p1__80143_SHARP_){
return app.common.geom.shapes.points.start_hv(layout_bounds,p1__80143_SHARP_);
});
var yv = (function (p1__80144_SHARP_){
return app.common.geom.shapes.points.start_vv(layout_bounds,p1__80144_SHARP_);
});
return rumext.v2.jsx("g",{'className':"debug-layout",'pointerEvents':"none",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__80147){
var vec__80148 = p__80147;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80148,(0),null);
var map__80151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80148,(1),null);
var map__80151__$1 = cljs.core.__destructure_map(map__80151);
var start_p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80151__$1,new cljs.core.Keyword(null,"start-p","start-p",767587445));
var line_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80151__$1,new cljs.core.Keyword(null,"line-width","line-width",-906934988));
var line_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80151__$1,new cljs.core.Keyword(null,"line-height","line-height",1870784992));
var layout_gap_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80151__$1,new cljs.core.Keyword(null,"layout-gap-row","layout-gap-row",609410826));
var layout_gap_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80151__$1,new cljs.core.Keyword(null,"layout-gap-col","layout-gap-col",-1979319979));
var num_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80151__$1,new cljs.core.Keyword(null,"num-children","num-children",-1656107233));
out_arr__46744__auto__.push((function (){var line_width__$1 = ((row_QMARK_)?(line_width + ((num_children - (1)) * layout_gap_row)):line_width);
var line_height__$1 = ((col_QMARK_)?(line_height + ((num_children - (1)) * layout_gap_col)):line_height);
var points = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_p,app.common.geom.point.add(start_p,xv(line_width__$1)),app.common.geom.point.add(app.common.geom.point.add(start_p,xv(line_width__$1)),yv(line_height__$1)),app.common.geom.point.add(start_p,yv(line_height__$1))], null);
return rumext.v2.jsx("g",{'className':"layout-line",'children':rumext.v2.jsx("polygon",{'points':cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80145_SHARP_){
return ""+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__80145_SHARP_) ?? "")+", "+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__80145_SHARP_) ?? "");
}),points)),'style':{'stroke':"red",'strokeWidth':((2) / zoom),'strokeDasharray':""+(((10) / zoom) ?? "")+" "+(((5) / zoom) ?? "")}})},""+"line-"+(idx ?? ""));
})());

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-lines","layout-lines",-1868555037).cljs$core$IFn$_invoke$arity$1(layout_data)))});
} else {
return null;
}
});

(app.main.ui.workspace.viewport.debug.debug_layout_lines.displayName = "debug-layout-lines");

/**
 * Debug component to show the auto-layout drop areas
 */
app.main.ui.workspace.viewport.debug.debug_drop_zones = (function (p1__80155_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__80155_SHARP_,(function (new_props_80159,old_props_80160){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_80159.objects,old_props_80160.objects)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props_80159["selected-shapes"]),(old_props_80160["selected-shapes"]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props_80159["hover-top-frame-id"]),(old_props_80160["hover-top-frame-id"]))))));
}));
})((function app$main$ui$workspace$viewport$debug$debug_drop_zones(props_80157){
var props = props_80157;
var objects = (props["objects"]);
var zoom = (props["objects"]);
var selected_shapes = (props["selected-shapes"]);
var hover_top_frame_id = (props["hover-top-frame-id"]);
var selected_frame = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected_shapes),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(selected_shapes))))))?cljs.core.first(selected_shapes):null);
var shape = (function (){var or__5025__auto__ = selected_frame;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,hover_top_frame_id);
}
})();
var bounds = app.common.data.lazy_map(cljs.core.keys(objects),(function (p1__80156_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__80156_SHARP_),new cljs.core.Keyword(null,"points","points",-1486596883));
}));
if(cljs.core.truth_((function (){var and__5023__auto__ = shape;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(shape);
} else {
return and__5023__auto__;
}
})())){
var drop_areas = app.common.geom.shapes.flex_layout.get_drop_areas(shape,objects,bounds);
return rumext.v2.jsx("g",{'className':"debug-layout",'pointerEvents':"none",'transform':app.common.geom.shapes.transform_str.cljs$core$IFn$_invoke$arity$1(shape),'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__80161){
var vec__80162 = p__80161;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80162,(0),null);
var drop_area = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80162,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsxs("g",{'className':"drop-area",'children':[rumext.v2.jsx("rect",{'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(drop_area),'y':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(drop_area),'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(drop_area),'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(drop_area),'style':{'fill':"blue",'fillOpacity':0.3,'stroke':"red",'strokeWidth':(zoom / (1)),'strokeDasharray':""+(((3) / zoom) ?? "")+" "+(((6) / zoom) ?? "")}}),rumext.v2.jsx("text",{'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(drop_area),'y':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(drop_area),'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(drop_area),'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(drop_area),'alignmentBaseline':"hanging",'fill':"black",'children':new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(drop_area)})]},""+"drop-area-"+(idx ?? "")));

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(drop_areas))});
} else {
return null;
}
}));

(app.main.ui.workspace.viewport.debug.debug_drop_zones.displayName = "debug-drop-zones");

app.main.ui.workspace.viewport.debug.shape_parent_bound = (function (p1__80165_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__80165_SHARP_,(function (new_props_80168,old_props_80169){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_80168.shape,old_props_80169.shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_80168.parent,old_props_80169.parent)));
}));
})((function app$main$ui$workspace$viewport$debug$shape_parent_bound(props_80167){
var props = props_80167;
var shape = (props["shape"]);
var parent = (props["parent"]);
var zoom = (props["zoom"]);
var vec__80170 = app.common.geom.shapes.points.parent_coords_bounds(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(parent));
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80170,(0),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80170,(1),null);
var i3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80170,(2),null);
var i4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80170,(3),null);
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("polygon",{'points':cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80166_SHARP_){
return ""+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__80166_SHARP_) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__80166_SHARP_) ?? "");
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [i1,i2,i3,i4], null))),'style':{'fill':"none",'stroke':"red",'strokeWidth':((1) / zoom)}}),rumext.v2.jsx("line",{'x1':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(i1),'y1':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(i1),'x2':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(i2),'y2':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(i2),'style':{'stroke':"green",'strokeWidth':((1) / zoom)}}),rumext.v2.jsx("line",{'x1':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(i1),'y1':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(i1),'x2':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(i4),'y2':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(i4),'style':{'stroke':"blue",'strokeWidth':((1) / zoom)}})]});
}));

(app.main.ui.workspace.viewport.debug.shape_parent_bound.displayName = "shape-parent-bound");

app.main.ui.workspace.viewport.debug.debug_parent_bounds = (function app$main$ui$workspace$viewport$debug$debug_parent_bounds(props_80178){
var props = props_80178;
var objects = (props["objects"]);
var zoom = (props["zoom"]);
var selected_shapes = (props["selected-shapes"]);
var hover_top_frame_id = (props["hover-top-frame-id"]);
var selected_frame = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected_shapes),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(selected_shapes))))))?cljs.core.first(selected_shapes):null);
var parent = (function (){var or__5025__auto__ = selected_frame;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,hover_top_frame_id);
}
})();
var parent_bounds = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(parent);
var bounds = app.common.data.lazy_map(cljs.core.keys(objects),(function (p1__80177_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__80177_SHARP_),new cljs.core.Keyword(null,"points","points",-1486596883));
}));
if((((!((parent == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(app.common.uuid.zero,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent))))){
var children = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hidden","hidden",-312506092),app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent)));
return rumext.v2.jsx("g",{'className':"debug-parent-bounds",'pointerEvents':"none",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__80182){
var vec__80183 = p__80182;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80183,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80183,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.viewport.debug.shape_parent_bound,{'zoom':zoom,'shape':child,'parent':parent},""+"bound-"+(idx ?? "")),(function (){var child_bounds = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(child);
var points = ((((app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1(child)) || (app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1(child))))?app.common.geom.shapes.flex_layout.child_layout_bound_points.cljs$core$IFn$_invoke$arity$6(parent,child,parent_bounds,child_bounds,bounds,objects):child_bounds);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto____$1,point){
out_arr__46744__auto____$1.push(rumext.v2.jsx("circle",{'cx':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point),'cy':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point),'r':((2) / zoom),'style':{'fill':"red"}}));

return out_arr__46744__auto____$1;
}),[],points);
})()]}));

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(children))});
} else {
return null;
}
});

(app.main.ui.workspace.viewport.debug.debug_parent_bounds.displayName = "debug-parent-bounds");

app.main.ui.workspace.viewport.debug.debug_grid_layout = (function app$main$ui$workspace$viewport$debug$debug_grid_layout(props_80191){
var props = props_80191;
var objects = (props["objects"]);
var zoom = (props["zoom"]);
var selected_shapes = (props["selected-shapes"]);
var hover_top_frame_id = (props["hover-top-frame-id"]);
var selected_frame = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected_shapes),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(selected_shapes))))))?cljs.core.first(selected_shapes):null);
var parent = (function (){var or__5025__auto__ = selected_frame;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,hover_top_frame_id);
}
})();
var parent_bounds = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(parent);
var bounds = app.common.data.lazy_map(cljs.core.keys(objects),(function (p1__80187_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__80187_SHARP_),new cljs.core.Keyword(null,"points","points",-1486596883));
}));
if((((!((parent == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(app.common.uuid.zero,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent))))){
var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80188_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[app.common.geom.shapes.points.parent_coords_bounds(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(p1__80188_SHARP_),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(parent)),p1__80188_SHARP_],null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hidden","hidden",-312506092),app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent))));
var hv = (function (p1__80189_SHARP_){
return app.common.geom.shapes.points.start_hv(parent_bounds,p1__80189_SHARP_);
});
var vv = (function (p1__80190_SHARP_){
return app.common.geom.shapes.points.start_vv(parent_bounds,p1__80190_SHARP_);
});
var width = app.common.geom.shapes.points.width_points(parent_bounds);
var height = app.common.geom.shapes.points.height_points(parent_bounds);
var origin = app.common.geom.shapes.points.origin(parent_bounds);
var map__80200 = app.common.geom.shapes.grid_layout.calc_layout_data.cljs$core$IFn$_invoke$arity$5(parent,parent_bounds,children,bounds,objects);
var map__80200__$1 = cljs.core.__destructure_map(map__80200);
var row_tracks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80200__$1,new cljs.core.Keyword(null,"row-tracks","row-tracks",-1727486848));
var column_tracks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80200__$1,new cljs.core.Keyword(null,"column-tracks","column-tracks",291761616));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,row_data){
out_arr__46744__auto__.push((function (){var start_p = app.common.geom.point.add(origin,vv(new cljs.core.Keyword(null,"distance","distance",-1671893894).cljs$core$IFn$_invoke$arity$1(row_data)));
var end_p = app.common.geom.point.add(start_p,hv(width));
return rumext.v2.jsx("line",{'x1':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_p),'y1':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_p),'x2':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end_p),'y2':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end_p),'style':{'stroke':"red",'strokeWidth':((1) / zoom)}});
})());

return out_arr__46744__auto__;
}),[],row_tracks),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,column_data){
out_arr__46744__auto__.push((function (){var start_p = app.common.geom.point.add(origin,hv(new cljs.core.Keyword(null,"distance","distance",-1671893894).cljs$core$IFn$_invoke$arity$1(column_data)));
var end_p = app.common.geom.point.add(start_p,vv(height));
return rumext.v2.jsx("line",{'x1':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_p),'y1':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_p),'x2':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end_p),'y2':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end_p),'style':{'stroke':"red",'strokeWidth':((1) / zoom)}});
})());

return out_arr__46744__auto__;
}),[],column_tracks)]});
} else {
return null;
}
});

(app.main.ui.workspace.viewport.debug.debug_grid_layout.displayName = "debug-grid-layout");

app.main.ui.workspace.viewport.debug.debug_text_wasm_position_data = (function app$main$ui$workspace$viewport$debug$debug_text_wasm_position_data(props_80202){
var props = props_80202;
var zoom = (props["zoom"]);
var selected_shapes = (props["selected-shapes"]);
var selected_text = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected_shapes),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(selected_shapes))))))?cljs.core.first(selected_shapes):null);
var position_data = (cljs.core.truth_(selected_text)?app.render_wasm.api.calculate_position_data(selected_text):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__80203){
var map__80204 = p__80203;
var map__80204__$1 = cljs.core.__destructure_map(map__80204);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80204__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80204__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80204__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80204__$1,new cljs.core.Keyword(null,"height","height",1025178622));
out_arr__46744__auto__.push(rumext.v2.jsx("rect",{'x':x,'y':(y - height),'width':width,'height':height,'fill':"none",'strokeWidth':((1) / zoom),'stroke':"red"}));

return out_arr__46744__auto__;
}),[],position_data);
});

(app.main.ui.workspace.viewport.debug.debug_text_wasm_position_data.displayName = "debug-text-wasm-position-data");


//# sourceMappingURL=app.main.ui.workspace.viewport.debug.js.map
