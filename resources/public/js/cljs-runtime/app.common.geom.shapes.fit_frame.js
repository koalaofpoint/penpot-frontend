import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.bounds.js";
import "./app.common.geom.shapes.common.js";
import "./app.common.geom.shapes.transforms.js";
import "./app.common.types.modifiers.js";
goog.provide('app.common.geom.shapes.fit_frame');
app.common.geom.shapes.fit_frame.fit_frame_modifiers = (function app$common$geom$shapes$fit_frame$fit_frame_modifiers(objects,p__50366){
var map__50367 = p__50366;
var map__50367__$1 = cljs.core.__destructure_map(map__50367);
var frame = map__50367__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50367__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50367__$1,new cljs.core.Keyword(null,"transform","transform",1381301764));
var transform_inverse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50367__$1,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576));
var selrect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50367__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50367__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var show_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50367__$1,new cljs.core.Keyword(null,"show-content","show-content",-878000465));
var children = app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame));
if(app.common.data.not_empty_QMARK_(children)){
var ids = app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,id);
var center = app.common.geom.shapes.common.shape__GT_center(frame);
var transform_inverse__$1 = app.common.geom.matrix.transform_in(center,transform_inverse);
var transform__$1 = app.common.geom.matrix.transform_in(center,transform);
var tr_objects = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__50362_SHARP_,p2__50363_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__50362_SHARP_,p2__50363_SHARP_,app.common.geom.shapes.transforms.apply_transform,transform_inverse__$1);
}),objects,ids);
var bounds = app.common.geom.rect.join_rects(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50365_SHARP_){
return app.common.geom.shapes.bounds.get_object_bounds.cljs$core$IFn$_invoke$arity$3(tr_objects,p1__50365_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore-shadow-margin?","ignore-shadow-margin?",-10356246),show_content,new cljs.core.Keyword(null,"ignore-margin?","ignore-margin?",1173241988),false], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50364_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(tr_objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__50364_SHARP_));
}),children)));
var new_origin = app.common.geom.point.transform(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(bounds),transform__$1);
var origin = cljs.core.first(points);
var resize_v = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bounds) / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(selrect)),(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bounds) / new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selrect)));
return app.common.types.modifiers.move_parent.cljs$core$IFn$_invoke$arity$2(app.common.types.modifiers.resize_parent.cljs$core$IFn$_invoke$arity$5(app.common.types.modifiers.empty(),resize_v,origin,transform__$1,transform_inverse__$1),app.common.geom.point.to_vec(origin,new_origin));
} else {
return null;
}
});

//# sourceMappingURL=app.common.geom.shapes.fit_frame.js.map
