import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.points.js";
import "./app.common.types.shape.layout.js";
goog.provide('app.common.geom.shapes.flex_layout.bounds');
app.common.geom.shapes.flex_layout.bounds._child_min_width = null;
app.common.geom.shapes.flex_layout.bounds.child_min_width = (function app$common$geom$shapes$flex_layout$bounds$child_min_width(child,child_bounds,bounds,objects){
return (app.common.geom.shapes.flex_layout.bounds._child_min_width.cljs$core$IFn$_invoke$arity$4 ? app.common.geom.shapes.flex_layout.bounds._child_min_width.cljs$core$IFn$_invoke$arity$4(child,child_bounds,bounds,objects) : app.common.geom.shapes.flex_layout.bounds._child_min_width.call(null,child,child_bounds,bounds,objects));
});
app.common.geom.shapes.flex_layout.bounds._child_min_height = null;
app.common.geom.shapes.flex_layout.bounds.child_min_height = (function app$common$geom$shapes$flex_layout$bounds$child_min_height(child,child_bounds,bounds,objects){
return (app.common.geom.shapes.flex_layout.bounds._child_min_height.cljs$core$IFn$_invoke$arity$4 ? app.common.geom.shapes.flex_layout.bounds._child_min_height.cljs$core$IFn$_invoke$arity$4(child,child_bounds,bounds,objects) : app.common.geom.shapes.flex_layout.bounds._child_min_height.call(null,child,child_bounds,bounds,objects));
});
/**
 * Returns the bounds of the children as points
 */
app.common.geom.shapes.flex_layout.bounds.child_layout_bound_points = (function app$common$geom$shapes$flex_layout$bounds$child_layout_bound_points(var_args){
var G__68136 = arguments.length;
switch (G__68136) {
case 6:
return app.common.geom.shapes.flex_layout.bounds.child_layout_bound_points.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return app.common.geom.shapes.flex_layout.bounds.child_layout_bound_points.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.flex_layout.bounds.child_layout_bound_points.cljs$core$IFn$_invoke$arity$6 = (function (parent,child,parent_bounds,child_bounds,bounds,objects){
return app.common.geom.shapes.flex_layout.bounds.child_layout_bound_points.cljs$core$IFn$_invoke$arity$7(parent,child,parent_bounds,child_bounds,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$0(),bounds,objects);
}));

(app.common.geom.shapes.flex_layout.bounds.child_layout_bound_points.cljs$core$IFn$_invoke$arity$7 = (function (parent,child,parent_bounds,child_bounds,correct_v,bounds,objects){
var row_QMARK_ = app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var col_QMARK_ = app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var hv = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.points.start_hv,parent_bounds);
var vv = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.points.start_vv,parent_bounds);
var v_start_QMARK_ = app.common.types.shape.layout.v_start_QMARK_(parent);
var v_center_QMARK_ = app.common.types.shape.layout.v_center_QMARK_(parent);
var v_end_QMARK_ = app.common.types.shape.layout.v_end_QMARK_(parent);
var h_start_QMARK_ = app.common.types.shape.layout.h_start_QMARK_(parent);
var h_center_QMARK_ = app.common.types.shape.layout.h_center_QMARK_(parent);
var h_end_QMARK_ = app.common.types.shape.layout.h_end_QMARK_(parent);
var base_p = app.common.geom.shapes.points.origin(child_bounds);
var width = app.common.geom.shapes.points.width_points(child_bounds);
var height = app.common.geom.shapes.points.height_points(child_bounds);
var min_width = app.common.geom.shapes.flex_layout.bounds.child_min_width(child,child_bounds,bounds,objects);
var min_height = app.common.geom.shapes.flex_layout.bounds.child_min_height(child,child_bounds,bounds,objects);
var base_p__$1 = (function (){var G__68140 = base_p;
var G__68140__$1 = ((((row_QMARK_) && (v_center_QMARK_)))?app.common.geom.point.add(G__68140,vv((height / (2)))):G__68140);
var G__68140__$2 = ((((row_QMARK_) && (v_end_QMARK_)))?app.common.geom.point.add(G__68140__$1,vv(height)):G__68140__$1);
var G__68140__$3 = ((((col_QMARK_) && (h_center_QMARK_)))?app.common.geom.point.add(G__68140__$2,hv((width / (2)))):G__68140__$2);
if(((col_QMARK_) && (h_end_QMARK_))){
return app.common.geom.point.add(G__68140__$3,hv(width));
} else {
return G__68140__$3;
}
})();
var min_width__$1 = (function (){var x__5110__auto__ = min_width;
var y__5111__auto__ = 0.01;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var min_height__$1 = (function (){var x__5110__auto__ = min_height;
var y__5111__auto__ = 0.01;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var base_p__$2 = app.common.geom.point.add(base_p__$1,correct_v);
var result = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_p__$2,app.common.geom.point.add(base_p__$2,hv(0.01)),app.common.geom.point.add(base_p__$2,vv(0.01))], null);
var result__$1 = (function (){var G__68143 = result;
var G__68143__$1 = ((col_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68143,app.common.geom.point.add(base_p__$2,vv(min_height__$1))):G__68143);
var G__68143__$2 = ((row_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68143__$1,app.common.geom.point.add(base_p__$2,hv(min_width__$1))):G__68143__$1);
var G__68143__$3 = ((((col_QMARK_) && (h_start_QMARK_)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68143__$2,app.common.geom.point.add(base_p__$2,hv(min_width__$1))):G__68143__$2);
var G__68143__$4 = ((((col_QMARK_) && (h_center_QMARK_)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__68143__$3,app.common.geom.point.add(base_p__$2,hv((min_width__$1 / (2)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.geom.point.subtract(base_p__$2,hv((min_width__$1 / (2))))], 0)):G__68143__$3);
var G__68143__$5 = ((((col_QMARK_) && (h_end_QMARK_)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68143__$4,app.common.geom.point.subtract(base_p__$2,hv(min_width__$1))):G__68143__$4);
var G__68143__$6 = ((((row_QMARK_) && (v_start_QMARK_)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68143__$5,app.common.geom.point.add(base_p__$2,vv(min_height__$1))):G__68143__$5);
var G__68143__$7 = ((((row_QMARK_) && (v_center_QMARK_)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__68143__$6,app.common.geom.point.add(base_p__$2,vv((min_height__$1 / (2)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.geom.point.subtract(base_p__$2,vv((min_height__$1 / (2))))], 0)):G__68143__$6);
if(((row_QMARK_) && (v_end_QMARK_))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68143__$7,app.common.geom.point.subtract(base_p__$2,vv(min_height__$1)));
} else {
return G__68143__$7;
}
})();
var correct_v__$1 = (function (){var G__68145 = correct_v;
var G__68145__$1 = ((((row_QMARK_) && (app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$1(child))))?app.common.geom.point.subtract(G__68145,hv((width + min_width__$1))):G__68145);
if(((col_QMARK_) && (app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1(child)))){
return app.common.geom.point.subtract(G__68145__$1,vv((height + min_height__$1)));
} else {
return G__68145__$1;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,correct_v__$1], null);
}));

(app.common.geom.shapes.flex_layout.bounds.child_layout_bound_points.cljs$lang$maxFixedArity = 7);

app.common.geom.shapes.flex_layout.bounds.layout_content_points = (function app$common$geom$shapes$flex_layout$bounds$layout_content_points(bounds,parent,children,objects){
var parent_id = (parent?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(parent,new cljs.core.Keyword(null,"id","id",-1388402092)));
var parent_bounds = cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,parent_id));
var reverse_QMARK_ = app.common.types.shape.layout.reverse_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var children__$1 = (function (){var G__68154 = children;
if((!(reverse_QMARK_))){
return cljs.core.reverse(G__68154);
} else {
return G__68154;
}
})();
var children__$2 = cljs.core.seq(children__$1);
var result = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var correct_v = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1((0));
while(true){
if(cljs.core.not(children__$2)){
return cljs.core.persistent_BANG_(result);
} else {
var child = cljs.core.first(children__$2);
var child_id = (child?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(child,new cljs.core.Keyword(null,"id","id",-1388402092)));
var child_bounds = cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,child_id));
var vec__68172 = app.common.types.shape.layout.child_margins(child);
var margin_top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68172,(0),null);
var margin_right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68172,(1),null);
var margin_bottom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68172,(2),null);
var margin_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68172,(3),null);
var vec__68175 = ((((app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$1(child)) || (app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1(child))))?app.common.geom.shapes.flex_layout.bounds.child_layout_bound_points.cljs$core$IFn$_invoke$arity$7(parent,child,parent_bounds,child_bounds,correct_v,bounds,objects):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (children__$2,result,correct_v,child,child_id,child_bounds,vec__68172,margin_top,margin_right,margin_bottom,margin_left,parent_id,parent_bounds,reverse_QMARK_,children__$1){
return (function (p1__68150_SHARP_){
return app.common.geom.point.add(p1__68150_SHARP_,correct_v);
});})(children__$2,result,correct_v,child,child_id,child_bounds,vec__68172,margin_top,margin_right,margin_bottom,margin_left,parent_id,parent_bounds,reverse_QMARK_,children__$1))
,child_bounds),correct_v], null));
var child_bounds__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68175,(0),null);
var correct_v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68175,(1),null);
var child_bounds__$2 = ((app.common.data.not_empty_QMARK_(child_bounds__$1))?app.common.geom.shapes.points.pad_points(app.common.geom.shapes.points.parent_coords_bounds(child_bounds__$1,parent_bounds),(- margin_top),(- margin_right),(- margin_bottom),(- margin_left)):null);
var G__68216 = cljs.core.next(children__$2);
var G__68217 = (function (){var G__68185 = result;
if((!((child_bounds__$2 == null)))){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__68185,child_bounds__$2);
} else {
return G__68185;
}
})();
var G__68218 = correct_v__$1;
children__$2 = G__68216;
result = G__68217;
correct_v = G__68218;
continue;
}
break;
}
});
app.common.geom.shapes.flex_layout.bounds.layout_content_bounds = (function app$common$geom$shapes$flex_layout$bounds$layout_content_bounds(bounds,p__68188,children,objects){
var map__68189 = p__68188;
var map__68189__$1 = cljs.core.__destructure_map(map__68189);
var parent = map__68189__$1;
var layout_padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68189__$1,new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747));
var parent_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent);
var parent_bounds = cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,parent_id));
var row_QMARK_ = app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var col_QMARK_ = app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var space_around_QMARK_ = app.common.types.shape.layout.space_around_QMARK_(parent);
var space_evenly_QMARK_ = app.common.types.shape.layout.space_evenly_QMARK_(parent);
var content_evenly_QMARK_ = app.common.types.shape.layout.content_evenly_QMARK_(parent);
var vec__68191 = app.common.types.shape.layout.gaps(parent);
var layout_gap_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68191,(0),null);
var layout_gap_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68191,(1),null);
var row_pad = ((((((col_QMARK_) && (space_evenly_QMARK_))) || (((((col_QMARK_) && (space_around_QMARK_))) || (((row_QMARK_) && (content_evenly_QMARK_)))))))?layout_gap_row:(0));
var col_pad = ((((((row_QMARK_) && (space_evenly_QMARK_))) || (((((row_QMARK_) && (space_around_QMARK_))) || (((col_QMARK_) && (content_evenly_QMARK_)))))))?layout_gap_col:(0));
var map__68194 = layout_padding;
var map__68194__$1 = cljs.core.__destructure_map(map__68194);
var pad_top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68194__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var pad_right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68194__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var pad_bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68194__$1,new cljs.core.Keyword(null,"p3","p3",1731040739));
var pad_left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68194__$1,new cljs.core.Keyword(null,"p4","p4",-1090126814));
var pad_top__$1 = ((function (){var or__5025__auto__ = pad_top;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})() + row_pad);
var pad_right__$1 = ((function (){var or__5025__auto__ = pad_right;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})() + col_pad);
var pad_bottom__$1 = ((function (){var or__5025__auto__ = pad_bottom;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})() + row_pad);
var pad_left__$1 = ((function (){var or__5025__auto__ = pad_left;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})() + col_pad);
var layout_points = app.common.geom.shapes.flex_layout.bounds.layout_content_points(bounds,parent,children,objects);
if(app.common.data.not_empty_QMARK_(layout_points)){
return app.common.geom.shapes.points.pad_points(app.common.geom.shapes.points.merge_parent_coords_bounds(layout_points,parent_bounds),(- pad_top__$1),(- pad_right__$1),(- pad_bottom__$1),(- pad_left__$1));
} else {
return parent_bounds;
}
});

//# sourceMappingURL=app.common.geom.shapes.flex_layout.bounds.js.map
