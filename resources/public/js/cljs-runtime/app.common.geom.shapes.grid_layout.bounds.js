import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.points.js";
goog.provide('app.common.geom.shapes.grid_layout.bounds');
app.common.geom.shapes.grid_layout.bounds.layout_content_points = (function app$common$geom$shapes$grid_layout$bounds$layout_content_points(bounds,parent,p__54353){
var map__54354 = p__54353;
var map__54354__$1 = cljs.core.__destructure_map(map__54354);
var row_tracks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54354__$1,new cljs.core.Keyword(null,"row-tracks","row-tracks",-1727486848));
var column_tracks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54354__$1,new cljs.core.Keyword(null,"column-tracks","column-tracks",291761616));
var parent_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent);
var parent_bounds = cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,parent_id));
var hv = (function (p1__54349_SHARP_){
return app.common.geom.shapes.points.start_hv(parent_bounds,p1__54349_SHARP_);
});
var vv = (function (p1__54350_SHARP_){
return app.common.geom.shapes.points.start_vv(parent_bounds,p1__54350_SHARP_);
});
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__54351_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-p","start-p",767587445).cljs$core$IFn$_invoke$arity$1(p1__54351_SHARP_),app.common.geom.point.add(new cljs.core.Keyword(null,"start-p","start-p",767587445).cljs$core$IFn$_invoke$arity$1(p1__54351_SHARP_),vv(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p1__54351_SHARP_)))],null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row_tracks], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__54352_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-p","start-p",767587445).cljs$core$IFn$_invoke$arity$1(p1__54352_SHARP_),app.common.geom.point.add(new cljs.core.Keyword(null,"start-p","start-p",767587445).cljs$core$IFn$_invoke$arity$1(p1__54352_SHARP_),hv(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p1__54352_SHARP_)))],null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([column_tracks], 0))], 0));
});
app.common.geom.shapes.grid_layout.bounds.layout_content_bounds = (function app$common$geom$shapes$grid_layout$bounds$layout_content_bounds(bounds,p__54356,layout_data){
var map__54357 = p__54356;
var map__54357__$1 = cljs.core.__destructure_map(map__54357);
var parent = map__54357__$1;
var layout_padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54357__$1,new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747));
var parent_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent);
var parent_bounds = cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,parent_id));
var map__54358 = layout_padding;
var map__54358__$1 = cljs.core.__destructure_map(map__54358);
var pad_top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54358__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var pad_right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54358__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var pad_bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54358__$1,new cljs.core.Keyword(null,"p3","p3",1731040739));
var pad_left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54358__$1,new cljs.core.Keyword(null,"p4","p4",-1090126814));
var pad_top__$1 = (function (){var or__5025__auto__ = pad_top;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var pad_right__$1 = (function (){var or__5025__auto__ = pad_right;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var pad_bottom__$1 = (function (){var or__5025__auto__ = pad_bottom;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var pad_left__$1 = (function (){var or__5025__auto__ = pad_left;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var layout_points = app.common.geom.shapes.grid_layout.bounds.layout_content_points(bounds,parent,layout_data);
if(app.common.data.not_empty_QMARK_(layout_points)){
return app.common.geom.shapes.points.pad_points(app.common.geom.shapes.points.merge_parent_coords_bounds(layout_points,parent_bounds),(- pad_top__$1),(- pad_right__$1),(- pad_bottom__$1),(- pad_left__$1));
} else {
return parent_bounds;
}
});

//# sourceMappingURL=app.common.geom.shapes.grid_layout.bounds.js.map
