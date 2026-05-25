import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.common.js";
import "./app.common.math.js";
import "./app.common.types.shape_tree.js";
goog.provide('app.common.geom.shapes.flex_layout.params');
/**
 * Given the shapes calculate its flex parameters (horizontal vs vertical, gaps, etc)
 */
app.common.geom.shapes.flex_layout.params.calculate_params = (function app$common$geom$shapes$flex_layout$params$calculate_params(var_args){
var G__68370 = arguments.length;
switch (G__68370) {
case 2:
return app.common.geom.shapes.flex_layout.params.calculate_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.geom.shapes.flex_layout.params.calculate_params.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.flex_layout.params.calculate_params.cljs$core$IFn$_invoke$arity$2 = (function (objects,shapes){
return app.common.geom.shapes.flex_layout.params.calculate_params.cljs$core$IFn$_invoke$arity$3(objects,shapes,null);
}));

(app.common.geom.shapes.flex_layout.params.calculate_params.cljs$core$IFn$_invoke$arity$3 = (function (objects,shapes,parent){
if(app.common.data.not_empty_QMARK_(shapes)){
var shapes__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hidden","hidden",-312506092),shapes);
var points = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.common.shape__GT_center,app.common.data.getf(objects)),app.common.types.shape_tree.sort_z_index.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes__$1)));
var start = cljs.core.first(points);
var end = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (acc,p){
return app.common.geom.point.add(acc,app.common.geom.point.to_vec(start,p));
}),points);
var angle = app.common.geom.point.signed_angle_with_other(app.common.geom.point.to_vec(start,end),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((1),(0)));
var angle__$1 = cljs.core.mod(angle,(360));
var t1 = (function (){var x__5113__auto__ = cljs.core.abs((angle__$1 - (0)));
var y__5114__auto__ = cljs.core.abs((angle__$1 - (360)));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var t2 = cljs.core.abs((angle__$1 - (90)));
var t3 = cljs.core.abs((angle__$1 - (180)));
var t4 = cljs.core.abs((angle__$1 - (270)));
var tmin = (function (){var x__5113__auto__ = (function (){var x__5113__auto__ = (function (){var x__5113__auto__ = t1;
var y__5114__auto__ = t2;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var y__5114__auto__ = t3;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var y__5114__auto__ = t4;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var direction = (cljs.core.truth_(app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(tmin,t1))?new cljs.core.Keyword(null,"row","row",-570139521):(cljs.core.truth_(app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(tmin,t2))?new cljs.core.Keyword(null,"column-reverse","column-reverse",278726587):(cljs.core.truth_(app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(tmin,t3))?new cljs.core.Keyword(null,"row-reverse","row-reverse",78332847):(cljs.core.truth_(app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(tmin,t4))?new cljs.core.Keyword(null,"column","column",2078222095):null))));
var selrects = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selrect","selrect",1966287292),shapes__$1);
var min_x = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__68365_SHARP_){
var x__5113__auto__ = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(p1__68365_SHARP_);
var y__5114__auto__ = new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(p1__68365_SHARP_);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
}),selrects));
var max_x = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__68366_SHARP_){
var x__5110__auto__ = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(p1__68366_SHARP_);
var y__5111__auto__ = new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(p1__68366_SHARP_);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
}),selrects));
var all_width = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477),selrects));
var column_gap = (((((cljs.core.count(shapes__$1) > (1))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"row","row",-570139521))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"row-reverse","row-reverse",78332847)))))))?(((max_x - min_x) - all_width) / (cljs.core.count(shapes__$1) - (1))):(0));
var min_y = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__68367_SHARP_){
var x__5113__auto__ = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(p1__68367_SHARP_);
var y__5114__auto__ = new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(p1__68367_SHARP_);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
}),selrects));
var max_y = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__68368_SHARP_){
var x__5110__auto__ = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(p1__68368_SHARP_);
var y__5111__auto__ = new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(p1__68368_SHARP_);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
}),selrects));
var all_height = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"height","height",1025178622),selrects));
var row_gap = (((((cljs.core.count(shapes__$1) > (1))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"column","column",2078222095))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"column-reverse","column-reverse",278726587)))))))?(((max_y - min_y) - all_height) / (cljs.core.count(shapes__$1) - (1))):(0));
var layout_gap = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),(function (){var x__5110__auto__ = row_gap;
var y__5111__auto__ = (0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})(),new cljs.core.Keyword(null,"column-gap","column-gap",384822863),(function (){var x__5110__auto__ = column_gap;
var y__5111__auto__ = (0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()], null);
var parent_selrect = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(parent);
var padding = (((((!((parent == null)))) && ((cljs.core.count(shapes__$1) > (0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p1","p1",-936759954),(min_y - new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(parent_selrect)),new cljs.core.Keyword(null,"p2","p2",905500641),(min_x - new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(parent_selrect))], null):null);
var G__68382 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670),direction,new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),layout_gap], null);
if((!((padding == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68382,new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(padding),new cljs.core.Keyword(null,"p2","p2",905500641),new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(padding),new cljs.core.Keyword(null,"p3","p3",1731040739),new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(padding),new cljs.core.Keyword(null,"p4","p4",-1090126814),new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(padding)], null));
} else {
return G__68382;
}
} else {
return null;
}
}));

(app.common.geom.shapes.flex_layout.params.calculate_params.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=app.common.geom.shapes.flex_layout.params.js.map
