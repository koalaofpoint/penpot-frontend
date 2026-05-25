import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.math.js";
import "./app.common.record.js";
goog.provide('app.common.geom.shapes.common');
app.common.geom.shapes.common.xf_keep_x = cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__47475_SHARP_){
return (p1__47475_SHARP_?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__47475_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185)));
}));
app.common.geom.shapes.common.xf_keep_y = cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__47477_SHARP_){
return (p1__47477_SHARP_?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__47477_SHARP_,new cljs.core.Keyword(null,"y","y",-1757859776)));
}));
/**
 * Returns a rect that contains all the shapes and is aware of the
 *   rotation of each shape. Mainly used for multiple selection.
 */
app.common.geom.shapes.common.shapes__GT_rect = (function app$common$geom$shapes$common$shapes__GT_rect(shapes){
return app.common.geom.rect.join_rects(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (shape){
return app.common.geom.rect.points__GT_rect((shape?.points?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"points","points",-1486596883))));
}),shapes));
});
app.common.geom.shapes.common.points__GT_center = (function app$common$geom$shapes$common$points__GT_center(points){
var ptx = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.common.geom.shapes.common.xf_keep_x,points);
var pty = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.common.geom.shapes.common.xf_keep_y,points);
var minx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.data.min,Infinity,ptx);
var miny = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.data.min,Infinity,pty);
var maxx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.data.max,-Infinity,ptx);
var maxy = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.data.max,-Infinity,pty);
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(((minx + maxx) / 2.0),((miny + maxy) / 2.0));
});
/**
 * Calculate the center of the shape.
 */
app.common.geom.shapes.common.shape__GT_center = (function app$common$geom$shapes$common$shape__GT_center(shape){
return app.common.geom.rect.rect__GT_center((shape?.selrect?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"selrect","selrect",1966287292))));
});
app.common.geom.shapes.common.transform_points = (function app$common$geom$shapes$common$transform_points(var_args){
var G__47486 = arguments.length;
switch (G__47486) {
case 2:
return app.common.geom.shapes.common.transform_points.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.geom.shapes.common.transform_points.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.common.transform_points.cljs$core$IFn$_invoke$arity$2 = (function (points,matrix){
return app.common.geom.shapes.common.transform_points.cljs$core$IFn$_invoke$arity$3(points,null,matrix);
}));

(app.common.geom.shapes.common.transform_points.cljs$core$IFn$_invoke$arity$3 = (function (points,center,matrix){
if(((app.common.geom.matrix.matrix_QMARK_(matrix)) && (cljs.core.seq(points)))){
var prev = (((!((center == null))))?app.common.geom.matrix.translate_matrix.cljs$core$IFn$_invoke$arity$1(center):cljs.core.clone(app.common.geom.matrix.base));
var post = (((!((center == null))))?app.common.geom.matrix.translate_matrix_neg.cljs$core$IFn$_invoke$arity$1(center):app.common.geom.matrix.base);
var mtx = app.common.geom.matrix.multiply_BANG_(app.common.geom.matrix.multiply_BANG_(prev,matrix),post);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__47484_SHARP_){
return app.common.geom.point.transform(p1__47484_SHARP_,mtx);
}),points);
} else {
return points;
}
}));

(app.common.geom.shapes.common.transform_points.cljs$lang$maxFixedArity = 3);

app.common.geom.shapes.common.transform_selrect = (function app$common$geom$shapes$common$transform_selrect(selrect,matrix){
app.common.data.macros.runtime_assert("expected valid rect and matrix instances",(function (){
return ((app.common.geom.rect.rect_QMARK_(selrect)) && (app.common.geom.matrix.matrix_QMARK_(matrix)));
}));

var x1 = (selrect?.x1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x1","x1",-1863922247)));
var y1 = (selrect?.y1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y1","y1",589123466)));
var x2 = (selrect?.x2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x2","x2",-1362513475)));
var y2 = (selrect?.y2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y2","y2",-718691301)));
var p1 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x1,y1);
var p2 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x2,y2);
var c1 = app.common.geom.point.transform_BANG_(p1,matrix);
var c2 = app.common.geom.point.transform_BANG_(p2,matrix);
return app.common.geom.rect.corners__GT_rect.cljs$core$IFn$_invoke$arity$2(c1,c2);
});
app.common.geom.shapes.common.invalid_geometry_QMARK_ = (function app$common$geom$shapes$common$invalid_geometry_QMARK_(p__47489){
var map__47490 = p__47489;
var map__47490__$1 = cljs.core.__destructure_map(map__47490);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47490__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var selrect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47490__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
return ((app.common.math.nan_QMARK_(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(selrect))) || (((app.common.math.nan_QMARK_(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(selrect))) || (((app.common.math.nan_QMARK_(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(selrect))) || (((app.common.math.nan_QMARK_(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selrect))) || (cljs.core.some((function (p){
return ((app.common.math.nan_QMARK_(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p))) || (app.common.math.nan_QMARK_(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p))));
}),points)))))))));
});
app.common.geom.shapes.common.shape__GT_points = (function app$common$geom$shapes$common$shape__GT_points(p__47497){
var map__47498 = p__47497;
var map__47498__$1 = cljs.core.__destructure_map(map__47498);
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47498__$1,new cljs.core.Keyword(null,"transform","transform",1381301764));
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47498__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
if(app.common.geom.matrix.unit_QMARK_(transform)){
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,(0));
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,(2));
var p1 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p2),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p0));
var p3 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p0),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p2));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [p0,p1,p2,p3], null);
} else {
return points;
}
});

//# sourceMappingURL=app.common.geom.shapes.common.js.map
