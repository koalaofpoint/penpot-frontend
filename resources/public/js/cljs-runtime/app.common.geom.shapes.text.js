import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.common.js";
import "./app.common.geom.shapes.transforms.js";
goog.provide('app.common.geom.shapes.text');
app.common.geom.shapes.text.position_data__GT_rect = (function app$common$geom$shapes$text$position_data__GT_rect(p__50320){
var map__50321 = p__50320;
var map__50321__$1 = cljs.core.__destructure_map(map__50321);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50321__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50321__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50321__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50321__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(x,(y - height),width,height);
});
app.common.geom.shapes.text.shape__GT_rect = (function app$common$geom$shapes$text$shape__GT_rect(shape){
var points = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.common.geom.rect.rect__GT_points,app.common.geom.shapes.text.position_data__GT_rect),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position-data","position-data",-499622376).cljs$core$IFn$_invoke$arity$1(shape)], 0));
if(cljs.core.seq(points)){
return app.common.geom.rect.points__GT_rect(points);
} else {
return (shape?.selrect?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"selrect","selrect",1966287292)));
}
});
app.common.geom.shapes.text.shape__GT_bounds = (function app$common$geom$shapes$text$shape__GT_bounds(shape){
var points = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.common.geom.rect.rect__GT_points,app.common.geom.shapes.text.position_data__GT_rect),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position-data","position-data",-499622376).cljs$core$IFn$_invoke$arity$1(shape)], 0));
return app.common.geom.rect.points__GT_rect(app.common.geom.shapes.common.transform_points.cljs$core$IFn$_invoke$arity$2(points,app.common.geom.shapes.transforms.transform_matrix.cljs$core$IFn$_invoke$arity$1(shape)));
});
/**
 * Checks if the given position data is inside the shape
 */
app.common.geom.shapes.text.overlaps_position_data_QMARK_ = (function app$common$geom$shapes$text$overlaps_position_data_QMARK_(p__50327,position_data){
var map__50328 = p__50327;
var map__50328__$1 = cljs.core.__destructure_map(map__50328);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50328__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var bounding_box = app.common.geom.rect.points__GT_rect(points);
var fix_rect = (function (p1__50324_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50324_SHARP_,new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__50324_SHARP_) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(p1__50324_SHARP_)));
});
return cljs.core.boolean$(cljs.core.some((function (p1__50325_SHARP_){
return app.common.geom.rect.overlaps_rects_QMARK_(bounding_box,fix_rect(p1__50325_SHARP_));
}),position_data));
});

//# sourceMappingURL=app.common.geom.shapes.text.js.map
