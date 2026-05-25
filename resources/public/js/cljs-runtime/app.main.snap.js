import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.focus.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.snap.js";
import "./app.common.math.js";
import "./app.common.uuid.js";
import "./app.main.refs.js";
import "./app.main.worker.js";
import "./app.util.range_tree.js";
import "./beicon.v2.core.js";
import "./clojure.set.js";
goog.provide('app.main.snap');
app.main.snap.snap_accuracy = (10);
app.main.snap.snap_path_accuracy = (10);
app.main.snap.snap_distance_accuracy = (20);
app.main.snap.remove_from_snap_points = (function app$main$snap$remove_from_snap_points(remove_snap_QMARK_){
return (function (query_result){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__68572){
var vec__68573 = p__68572;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68573,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68573,(1),null);
return cljs.core.seq(data);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68576){
var vec__68577 = p__68576;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68577,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68577,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_snap_QMARK_,data)], null);
}),query_result));
});
});
/**
 * Creates a filter for the snap data. Used to disable certain layouts
 */
app.main.snap.make_remove_snap = (function app$main$snap$make_remove_snap(layout,filter_shapes,objects,focus){
return (function (p__68580){
var map__68581 = p__68580;
var map__68581__$1 = cljs.core.__destructure_map(map__68581);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68581__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68581__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68581__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"layout","layout",-2120940921))){
return (((!(cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"display-guides","display-guides",-1025684907))))) || ((((!(cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"snap-guides","snap-guides",-1395069816))))) || (((app.common.data.not_empty_QMARK_(focus)) && ((!(cljs.core.contains_QMARK_(focus,id)))))))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"guide","guide",-935563924))){
return (((!(cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"rulers","rulers",756731282))))) || ((((!(cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"snap-ruler-guides","snap-ruler-guides",-1478768942))))) || (((app.common.data.not_empty_QMARK_(focus)) && ((!(cljs.core.contains_QMARK_(focus,frame_id)))))))));
} else {
return ((cljs.core.contains_QMARK_(filter_shapes,id)) || ((((!(cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"dynamic-alignment","dynamic-alignment",-1699946765))))) || (((app.common.data.not_empty_QMARK_(focus)) && (cljs.core.not(app.common.files.focus.is_in_focus_QMARK_(objects,focus,id))))))));

}
}
});
});
app.main.snap.calculate_distance = (function app$main$snap$calculate_distance(query_result,point,coord){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68582){
var vec__68583 = p__68582;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68583,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68583,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.math.abs((value - (coord.cljs$core$IFn$_invoke$arity$1 ? coord.cljs$core$IFn$_invoke$arity$1(point) : coord.call(null,point)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(coord.cljs$core$IFn$_invoke$arity$1 ? coord.cljs$core$IFn$_invoke$arity$1(point) : coord.call(null,point)),value], null)], null);
}),query_result);
});
app.main.snap.get_min_distance_snap = (function app$main$snap$get_min_distance_snap(points,coord){
return (function (query_result){
return cljs.core.second(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,cljs.core.first,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__68586_SHARP_){
return app.main.snap.calculate_distance(query_result,p1__68586_SHARP_,coord);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([points], 0))));
});
});
app.main.snap.snap_frame_id = (function app$main$snap$snap_frame_id(shapes){
var frames = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),shapes));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(frames))){
return cljs.core.first(frames);
} else {
if(cljs.core.not((frames.cljs$core$IFn$_invoke$arity$1 ? frames.cljs$core$IFn$_invoke$arity$1(app.common.uuid.zero) : frames.call(null,app.common.uuid.zero)))){
return new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(cljs.core.first(shapes));
} else {
return app.common.uuid.zero;

}
}
});
app.main.snap.get_snap_points = (function app$main$snap$get_snap_points(page_id,frame_id,remove_snap_QMARK_,zoom,point,coord){
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(point,coord);
var vbox = cljs.core.deref(app.main.refs.vbox);
var ranges = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(value - (0.5 / zoom)),(value + (0.5 / zoom))], null)], null);
return beicon.v2.core.map(app.main.snap.remove_from_snap_points(remove_snap_QMARK_),beicon.v2.core.take((1),app.main.worker.ask_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cmd","cmd",-302931143),new cljs.core.Keyword("index","query-snap","index/query-snap",1806121434),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id,new cljs.core.Keyword(null,"axis","axis",-1215390822),coord,new cljs.core.Keyword(null,"bounds","bounds",1691609455),vbox,new cljs.core.Keyword(null,"ranges","ranges",1887686682),ranges], null))));
});
app.main.snap.search_snap = (function app$main$snap$search_snap(page_id,frame_id,points,coord,remove_snap_QMARK_,zoom){
var snap_accuracy = ((10) / zoom);
var ranges = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__68587_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(p1__68587_SHARP_ - snap_accuracy),(p1__68587_SHARP_ + snap_accuracy)],null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(coord,points));
var vbox = cljs.core.deref(app.main.refs.vbox);
return beicon.v2.core.map(app.main.snap.get_min_distance_snap(points,coord),beicon.v2.core.map(app.main.snap.remove_from_snap_points(remove_snap_QMARK_),beicon.v2.core.take((1),app.main.worker.ask_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cmd","cmd",-302931143),new cljs.core.Keyword("index","query-snap","index/query-snap",1806121434),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id,new cljs.core.Keyword(null,"axis","axis",-1215390822),coord,new cljs.core.Keyword(null,"bounds","bounds",1691609455),vbox,new cljs.core.Keyword(null,"ranges","ranges",1887686682),ranges], null)))));
});
app.main.snap.snap__GT_vector = (function app$main$snap$snap__GT_vector(p__68589){
var vec__68590 = p__68589;
var vec__68593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68590,(0),null);
var from_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68593,(0),null);
var to_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68593,(1),null);
var vec__68596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68590,(1),null);
var from_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68596,(0),null);
var to_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68596,(1),null);
if(cljs.core.truth_((function (){var or__5025__auto__ = from_x;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = to_x;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = from_y;
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return to_y;
}
}
}
})())){
var from = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((function (){var or__5025__auto__ = from_x;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})(),(function (){var or__5025__auto__ = from_y;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})());
var to = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((function (){var or__5025__auto__ = to_x;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})(),(function (){var or__5025__auto__ = to_y;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})());
return app.common.geom.point.to_vec(from,to);
} else {
return null;
}
});
app.main.snap.closest_snap = (function app$main$snap$closest_snap(page_id,frame_id,points,remove_snap_QMARK_,zoom){
var snap_x = app.main.snap.search_snap(page_id,frame_id,points,new cljs.core.Keyword(null,"x","x",2099068185),remove_snap_QMARK_,zoom);
var snap_y = app.main.snap.search_snap(page_id,frame_id,points,new cljs.core.Keyword(null,"y","y",-1757859776),remove_snap_QMARK_,zoom);
return beicon.v2.core.map(app.main.snap.snap__GT_vector,beicon.v2.core.combine_latest(snap_x,snap_y));
});
app.main.snap.sr_distance = (function app$main$snap$sr_distance(coord,sr1,sr2){
var c1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,new cljs.core.Keyword(null,"x","x",2099068185)))?new cljs.core.Keyword(null,"x1","x1",-1863922247):new cljs.core.Keyword(null,"y1","y1",589123466));
var c2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,new cljs.core.Keyword(null,"x","x",2099068185)))?new cljs.core.Keyword(null,"x2","x2",-1362513475):new cljs.core.Keyword(null,"y2","y2",-718691301));
var dist = (c1.cljs$core$IFn$_invoke$arity$1(sr2) - c2.cljs$core$IFn$_invoke$arity$1(sr1));
return dist;
});
app.main.snap.overlap_QMARK_ = (function app$main$snap$overlap_QMARK_(coord,sr1,sr2){
var c1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,new cljs.core.Keyword(null,"x","x",2099068185)))?new cljs.core.Keyword(null,"y1","y1",589123466):new cljs.core.Keyword(null,"x1","x1",-1863922247));
var c2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,new cljs.core.Keyword(null,"x","x",2099068185)))?new cljs.core.Keyword(null,"y2","y2",-718691301):new cljs.core.Keyword(null,"x2","x2",-1362513475));
var s1c1 = c1.cljs$core$IFn$_invoke$arity$1(sr1);
var s1c2 = c2.cljs$core$IFn$_invoke$arity$1(sr1);
var s2c1 = c1.cljs$core$IFn$_invoke$arity$1(sr2);
var s2c2 = c2.cljs$core$IFn$_invoke$arity$1(sr2);
return (((((s2c1 >= s1c1)) && ((s2c1 <= s1c2)))) || ((((((s2c2 >= s1c1)) && ((s2c2 <= s1c2)))) || ((((((s1c1 >= s2c1)) && ((s1c1 <= s2c2)))) || ((((s1c2 >= s2c1)) && ((s1c2 <= s2c2)))))))));
});
app.main.snap.calculate_snap = (function app$main$snap$calculate_snap(coord,selrect,shapes_lt,shapes_gt,zoom){
var snap_distance_accuracy = ((20) / zoom);
var dist_lt = (function (other){
return app.main.snap.sr_distance(coord,new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(other),selrect);
});
var dist_gt = (function (other){
return app.main.snap.sr_distance(coord,selrect,new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(other));
});
var inner_distance = (function (selrects){
return app.common.data.map_perm.cljs$core$IFn$_invoke$arity$4((function (p1__68613_SHARP_,p2__68614_SHARP_){
return app.main.snap.sr_distance(coord,p1__68613_SHARP_,p2__68614_SHARP_);
}),(function (p1__68615_SHARP_,p2__68616_SHARP_){
return app.main.snap.overlap_QMARK_(coord,p1__68615_SHARP_,p2__68616_SHARP_);
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(coord,selrects));
});
var lt_cand = inner_distance(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selrect","selrect",1966287292),shapes_lt));
var gt_cand = inner_distance(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selrect","selrect",1966287292),shapes_gt));
var lt_dist = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(dist_lt),shapes_lt);
var gt_dist = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(dist_gt),shapes_gt);
var get_side_snaps = (function (candidates,distances){
var range_tree = app.util.range_tree.make_tree();
var range_tree__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__68617_SHARP_,p2__68618_SHARP_){
return app.util.range_tree.insert(p1__68617_SHARP_,p2__68618_SHARP_,p2__68618_SHARP_);
}),range_tree,candidates);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (cd){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68620_SHARP_){
return (cljs.core.first(p1__68620_SHARP_) - cd);
}),app.util.range_tree.range_query(range_tree__$1,(cd - snap_distance_accuracy),(cd + snap_distance_accuracy)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([distances], 0));
});
var get_middle_snaps = (function (lt_dist__$1,gt_dist__$1){
var range_tree = app.util.range_tree.make_tree();
var range_tree__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__68621_SHARP_,p2__68622_SHARP_){
return app.util.range_tree.insert(p1__68621_SHARP_,p2__68622_SHARP_,p2__68622_SHARP_);
}),range_tree,lt_dist__$1);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (cd){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68623_SHARP_){
return ((cd - cljs.core.first(p1__68623_SHARP_)) / (2));
}),app.util.range_tree.range_query(range_tree__$1,(cd - (snap_distance_accuracy * (2))),(cd + (snap_distance_accuracy * (2)))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gt_dist__$1], 0));
});
var lt_snap = get_side_snaps(lt_cand,lt_dist);
var gt_snap = get_side_snaps(gt_dist,gt_cand);
var md_snap = get_middle_snaps(lt_dist,gt_dist);
var snap_list = app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(lt_snap,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gt_snap,md_snap], 0));
var min_snap = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.min,Infinity,snap_list);
if(cljs.core.truth_(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(min_snap))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),min_snap], null);
} else {
return null;
}
});
app.main.snap.search_snap_distance = (function app$main$snap$search_snap_distance(selrect,coord,shapes_lt,shapes_gt,zoom){
return beicon.v2.core.map((function (p__68628){
var vec__68629 = p__68628;
var shapes_lt__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68629,(0),null);
var shapes_gt__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68629,(1),null);
return app.main.snap.calculate_snap(coord,selrect,shapes_lt__$1,shapes_gt__$1,zoom);
}),beicon.v2.core.combine_latest(shapes_lt,shapes_gt));
});
app.main.snap.select_shapes_area = (function app$main$snap$select_shapes_area(page_id,frame_id,selected,objects,area){
return beicon.v2.core.map((function (p1__68634_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),p1__68634_SHARP_);
}),beicon.v2.core.map((function (p1__68633_SHARP_){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(p1__68633_SHARP_,selected);
}),beicon.v2.core.map((function (p1__68632_SHARP_){
return app.common.files.helpers.clean_loops(objects,p1__68632_SHARP_);
}),app.main.worker.ask_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cmd","cmd",-302931143),new cljs.core.Keyword("index","query-selection","index/query-selection",-1103332922),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id,new cljs.core.Keyword(null,"include-frames?","include-frames?",-256091430),true,new cljs.core.Keyword(null,"rect","rect",-108902628),area], null)))));
});
app.main.snap.closest_distance_snap = (function app$main$snap$closest_distance_snap(page_id,shapes,objects,zoom,movev){
var frame_id = app.main.snap.snap_frame_id(shapes);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
var selrect = app.common.geom.shapes.shapes__GT_rect(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68635_SHARP_){
return app.common.geom.shapes.move(p1__68635_SHARP_,movev);
}),shapes));
return beicon.v2.core.map(app.main.snap.snap__GT_vector,beicon.v2.core.merge_map((function (p__68638){
var vec__68639 = p__68638;
var frame__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68639,(0),null);
var selrect__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68639,(1),null);
var vbox = cljs.core.deref(app.main.refs.vbox);
var frame_id__$1 = new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(cljs.core.first(shapes));
var frame_sr = ((app.common.files.helpers.root_QMARK_(frame__$1))?null:(frame__$1?.selrect?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(frame__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292))));
var bounds = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(app.common.geom.rect.clip_rect(frame_sr,vbox),vbox);
var selected = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes));
var areas = app.common.data.mapm.cljs$core$IFn$_invoke$arity$2((function (p1__68637_SHARP_,p2__68636_SHARP_){
return app.main.snap.select_shapes_area(page_id,frame_id__$1,selected,objects,p2__68636_SHARP_);
}),app.common.geom.shapes.get_areas(bounds,selrect__$1));
var snap_x = app.main.snap.search_snap_distance(selrect__$1,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(areas),new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(areas),zoom);
var snap_y = app.main.snap.search_snap_distance(selrect__$1,new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(areas),new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(areas),zoom);
return beicon.v2.core.combine_latest(snap_x,snap_y);
}),beicon.v2.core.of((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[frame,selrect],null)))));
});
app.main.snap.closest_snap_point = (function app$main$snap$closest_snap_point(page_id,shapes,objects,layout,zoom,focus,point){
var frame_id = app.main.snap.snap_frame_id(shapes);
var filter_shapes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes));
var remove_snap_QMARK_ = app.main.snap.make_remove_snap(layout,filter_shapes,objects,focus);
return beicon.v2.core.map((function (p1__68643_SHARP_){
return app.common.geom.point.add(point,p1__68643_SHARP_);
}),beicon.v2.core.map((function (p1__68642_SHARP_){
var or__5025__auto__ = p1__68642_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0));
}
}),app.main.snap.closest_snap(page_id,frame_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [point], null),remove_snap_QMARK_,zoom)));
});
app.main.snap.combine_snaps_points = (function app$main$snap$combine_snaps_points(var_args){
var G__68645 = arguments.length;
switch (G__68645) {
case 0:
return app.main.snap.combine_snaps_points.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.snap.combine_snaps_points.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.snap.combine_snaps_points.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.snap.combine_snaps_points.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(app.main.snap.combine_snaps_points.cljs$core$IFn$_invoke$arity$1 = (function (p1){
return p1;
}));

(app.main.snap.combine_snaps_points.cljs$core$IFn$_invoke$arity$2 = (function (p1,p2){
if((p2 == null)){
return p1;
} else {
if((p1 == null)){
return p2;
} else {
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(app.common.math.max_abs(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p2)),app.common.math.max_abs(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p2)));

}
}
}));

(app.main.snap.combine_snaps_points.cljs$lang$maxFixedArity = 2);

app.main.snap.closest_snap_move = (function app$main$snap$closest_snap_move(page_id,shapes,objects,layout,zoom,focus,movev){
var frame_id = app.main.snap.snap_frame_id(shapes);
var filter_shapes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes));
var remove_snap_QMARK_ = app.main.snap.make_remove_snap(layout,filter_shapes,objects,focus);
var snap_points = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68647_SHARP_){
return app.common.geom.point.add(p1__68647_SHARP_,movev);
}),app.common.geom.snap.rect__GT_snap_points(app.common.geom.shapes.shapes__GT_rect(shapes)));
return beicon.v2.core.map((function (p1__68648_SHARP_){
var or__5025__auto__ = p1__68648_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0));
}
}),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$2(app.main.snap.combine_snaps_points,beicon.v2.core.merge(app.main.snap.closest_snap(page_id,frame_id,snap_points,remove_snap_QMARK_,zoom),((cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"dynamic-alignment","dynamic-alignment",-1699946765)))?app.main.snap.closest_distance_snap(page_id,shapes,objects,zoom,movev):null))));
});
app.main.snap.create_ranges = (function app$main$snap$create_ranges(var_args){
var G__68652 = arguments.length;
switch (G__68652) {
case 1:
return app.main.snap.create_ranges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.snap.create_ranges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.snap.create_ranges.cljs$core$IFn$_invoke$arity$1 = (function (points){
return app.main.snap.create_ranges.cljs$core$IFn$_invoke$arity$2(points,cljs.core.PersistentHashSet.EMPTY);
}));

(app.main.snap.create_ranges.cljs$core$IFn$_invoke$arity$2 = (function (points,selected_points){
var selected_points__$1 = (function (){var or__5025__auto__ = selected_points;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var into_tree = (function (coord){
return (function (tree,point){
return app.util.range_tree.insert(tree,cljs.core.get.cljs$core$IFn$_invoke$arity$2(point,coord),point);
});
});
var make_ranges = (function (coord){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(into_tree(coord),app.util.range_tree.make_tree(),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,selected_points__$1),points));
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),make_ranges(new cljs.core.Keyword(null,"x","x",2099068185)),new cljs.core.Keyword(null,"y","y",-1757859776),make_ranges(new cljs.core.Keyword(null,"y","y",-1757859776))], null);
}));

(app.main.snap.create_ranges.cljs$lang$maxFixedArity = 2);

app.main.snap.query_delta_point = (function app$main$snap$query_delta_point(ranges,point,precision){
var query_coord = (function (point__$1,coord){
var pval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(point__$1,coord);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__68679){
var vec__68680 = p__68679;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68680,(0),null);
var points = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68680,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(value - pval),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__68670_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[point__$1,p1__68670_SHARP_],null));
}),points)], null);
}),app.util.range_tree.range_query(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ranges,coord),(pval - precision),(pval + precision)));
});
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(query_coord(point,new cljs.core.Keyword(null,"x","x",2099068185)),query_coord(point,new cljs.core.Keyword(null,"y","y",-1757859776)));
});
app.main.snap.merge_matches = (function app$main$snap$merge_matches(var_args){
var G__68691 = arguments.length;
switch (G__68691) {
case 0:
return app.main.snap.merge_matches.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return app.main.snap.merge_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.snap.merge_matches.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"y","y",-1757859776),null], null);
}));

(app.main.snap.merge_matches.cljs$core$IFn$_invoke$arity$2 = (function (matches,other){
var merge_coord = (function (matches__$1,other__$1){
var matches__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,matches__$1);
var other__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,other__$1);
var keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(matches__$2)),cljs.core.set(cljs.core.keys(other__$2)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$3(matches__$2,key,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$3(other__$2,key,cljs.core.PersistentVector.EMPTY)], 0))], null);
})),keys);
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(matches,new cljs.core.Keyword(null,"x","x",2099068185),merge_coord,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(other)),new cljs.core.Keyword(null,"y","y",-1757859776),merge_coord,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(other));
}));

(app.main.snap.merge_matches.cljs$lang$maxFixedArity = 2);

app.main.snap.min_match = (function app$main$snap$min_match(default$,matches){
var get_min = (function (p__68693,p__68694){
var vec__68695 = p__68693;
var cur_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68695,(0),null);
var current = vec__68695;
var vec__68698 = p__68694;
var other_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68698,(0),null);
var other = vec__68698;
if((app.common.math.abs(cur_val) < app.common.math.abs(other_val))){
return current;
} else {
return other;
}
});
var min_match_coord = (function (matches__$1){
if(cljs.core.seq(matches__$1)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(get_min,matches__$1);
} else {
return default$;
}
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(matches,new cljs.core.Keyword(null,"x","x",2099068185),min_match_coord),new cljs.core.Keyword(null,"y","y",-1757859776),min_match_coord);
});
app.main.snap.get_snap_delta_match = (function app$main$snap$get_snap_delta_match(points,ranges,accuracy){
if(cljs.core.truth_(cljs.core.vector_QMARK_)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(points),"\n","vector?"].join('')));
}

return app.main.snap.min_match(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(app.main.snap.merge_matches,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__68702_SHARP_){
return app.main.snap.query_delta_point(ranges,p1__68702_SHARP_,accuracy);
}),points)));
});
app.main.snap.get_snap_delta = (function app$main$snap$get_snap_delta(points,ranges,accuracy){
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(app.main.snap.get_snap_delta_match(points,ranges,accuracy),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.first),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.first));
});
/**
 * Snaps a position given an old snap to a different position. We use this to provide a temporal
 *   snap while the new is being processed.
 */
app.main.snap.correct_snap_point = (function app$main$snap$correct_snap_point(p__68720){
var vec__68721 = p__68720;
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68721,(0),null);
var vec__68724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68721,(1),null);
var snap_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68724,(0),null);
var snap_delta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68724,(1),null);
if((snap_delta == null)){
return position;
} else {
var dx = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(snap_delta)))?((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(snap_pos) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(snap_delta)) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position)):(0));
var dy = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(snap_delta)))?((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(snap_pos) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(snap_delta)) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position)):(0));
var dx__$1 = (((app.common.math.abs(dx) > (10)))?(0):dx);
var dy__$1 = (((app.common.math.abs(dy) > (10)))?(0):dy);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(position,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,dx__$1),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,dy__$1);
}
});

//# sourceMappingURL=app.main.snap.js.map
