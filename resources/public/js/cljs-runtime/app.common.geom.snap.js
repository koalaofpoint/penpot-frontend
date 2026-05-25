import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.types.shape_tree.js";
goog.provide('app.common.geom.snap');
app.common.geom.snap.rect__GT_snap_points = (function app$common$geom$snap$rect__GT_snap_points(rect){
if((!((rect == null)))){
var x = (rect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (rect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"y","y",-1757859776)));
var w = (rect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"width","width",-384071477)));
var h = (rect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"height","height",1025178622)));
return cljs.core.PersistentHashSet.createAsIfByAssoc([app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + w),y),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,(y + h)),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + w),(y + h)),app.common.geom.rect.rect__GT_center(rect)]);
} else {
return null;
}
});
app.common.geom.snap.frame__GT_snap_points = (function app$common$geom$snap$frame__GT_snap_points(frame){
var points = (frame?.points?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(frame,new cljs.core.Keyword(null,"points","points",-1486596883)));
var rect = app.common.geom.rect.points__GT_rect(points);
var x = (rect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (rect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"y","y",-1757859776)));
var w = (rect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"width","width",-384071477)));
var h = (rect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"height","height",1025178622)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.geom.snap.rect__GT_snap_points(rect),cljs.core.PersistentHashSet.createAsIfByAssoc([app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + (w / (2))),(y + h)),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + (w / (2))),y),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,(y + (h / (2)))),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + w),(y + (h / (2))))]));
});
app.common.geom.snap.shape__GT_snap_points = (function app$common$geom$snap$shape__GT_snap_points(shape){
if(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return app.common.geom.snap.frame__GT_snap_points(shape);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([app.common.geom.shapes.shape__GT_center(shape)]),(shape?.points?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"points","points",-1486596883))));
}
});
app.common.geom.snap.guide__GT_snap_points = (function app$common$geom$snap$guide__GT_snap_points(guide,frame){
if((((!((frame == null)))) && ((((!(app.common.types.shape_tree.rotated_frame_QMARK_(frame)))) && ((!(app.common.files.helpers.is_direct_child_of_root_QMARK_.cljs$core$IFn$_invoke$arity$1(frame)))))))){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(guide))){
return cljs.core.PersistentHashSet.createAsIfByAssoc([app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(guide),(0))]);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(guide))]);

}
}
});

//# sourceMappingURL=app.common.geom.snap.js.map
