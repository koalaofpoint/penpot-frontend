import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.math.js";
import "./app.common.types.shape.layout.js";
import "./app.main.refs.js";
import "./app.main.snap.js";
import "./app.main.ui.formats.js";
import "./beicon.v2.core.js";
import "./clojure.set.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.viewport.snap_distances');
app.main.ui.workspace.viewport.snap_distances.line_color = "var(--color-accent-quaternary)";
app.main.ui.workspace.viewport.snap_distances.segment_gap = (2);
app.main.ui.workspace.viewport.snap_distances.segment_gap_side = (5);
app.main.ui.workspace.viewport.snap_distances.selected__GT_cross_selrec = (function app$main$ui$workspace$viewport$snap_distances$selected__GT_cross_selrec(frame,selrect,coord){
var areas = app.common.geom.shapes.get_areas(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(frame),selrect);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),coord)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.shapes.pad_selrec.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(areas)),app.common.geom.shapes.pad_selrec.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(areas))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.shapes.pad_selrec.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(areas)),app.common.geom.shapes.pad_selrec.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(areas))], null);
}
});
/**
 * Calculates the middle point of the overlap between two selrects in the opposite axis
 */
app.main.ui.workspace.viewport.snap_distances.half_point = (function app$main$ui$workspace$viewport$snap_distances$half_point(coord,sr1,sr2){
var c1 = Math.max(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sr1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),coord))?new cljs.core.Keyword(null,"y1","y1",589123466):new cljs.core.Keyword(null,"x1","x1",-1863922247))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(sr2,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),coord))?new cljs.core.Keyword(null,"y1","y1",589123466):new cljs.core.Keyword(null,"x1","x1",-1863922247))));
var c2 = Math.min(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sr1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),coord))?new cljs.core.Keyword(null,"y2","y2",-718691301):new cljs.core.Keyword(null,"x2","x2",-1362513475))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(sr2,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),coord))?new cljs.core.Keyword(null,"y2","y2",-718691301):new cljs.core.Keyword(null,"x2","x2",-1362513475))));
return (c1 + ((c2 - c1) / (2)));
});
app.main.ui.workspace.viewport.snap_distances.pill_text_width_letter = (6);
app.main.ui.workspace.viewport.snap_distances.pill_text_width_margin = (6);
app.main.ui.workspace.viewport.snap_distances.pill_text_font_size = (12);
app.main.ui.workspace.viewport.snap_distances.pill_text_height = (20);
app.main.ui.workspace.viewport.snap_distances.pill_text_border_radius = (4);
app.main.ui.workspace.viewport.snap_distances.pill_text_padding = (4);
/**
 * Displays a segment between two selrects with the distance between them
 */
app.main.ui.workspace.viewport.snap_distances.shape_distance_segment = (function app$main$ui$workspace$viewport$snap_distances$shape_distance_segment(props_80612){
var map__80613 = rumext.v2.util.wrap_props(props_80612);
var map__80613__$1 = cljs.core.__destructure_map(map__80613);
var sr1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80613__$1,new cljs.core.Keyword(null,"sr1","sr1",1440906108));
var sr2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80613__$1,new cljs.core.Keyword(null,"sr2","sr2",-1173654748));
var coord = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80613__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80613__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var from_c = Math.min(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sr1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),coord))?new cljs.core.Keyword(null,"x2","x2",-1362513475):new cljs.core.Keyword(null,"y2","y2",-718691301))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(sr2,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),coord))?new cljs.core.Keyword(null,"x2","x2",-1362513475):new cljs.core.Keyword(null,"y2","y2",-718691301))));
var to_c = Math.max(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sr1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),coord))?new cljs.core.Keyword(null,"x1","x1",-1863922247):new cljs.core.Keyword(null,"y1","y1",589123466))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(sr2,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),coord))?new cljs.core.Keyword(null,"x1","x1",-1863922247):new cljs.core.Keyword(null,"y1","y1",589123466))));
var distance = (to_c - from_c);
var distance_str = app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(distance);
var half_point = app.main.ui.workspace.viewport.snap_distances.half_point(coord,sr1,sr2);
var width = (((cljs.core.count(distance_str) * (app.main.ui.workspace.viewport.snap_distances.pill_text_width_letter / zoom)) + (app.main.ui.workspace.viewport.snap_distances.pill_text_width_margin / zoom)) + ((app.main.ui.workspace.viewport.snap_distances.pill_text_width_margin / zoom) * (2)));
return rumext.v2.jsxs("g",{'className':"distance-segment",'children':[(function (){var point = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(from_c + (distance / (2))),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,new cljs.core.Keyword(null,"x","x",2099068185)))?(half_point - ((10) / zoom)):(half_point + ((5) / zoom)))], null);
var vec__80614 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),coord))?point:cljs.core.reverse(point));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80614,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80614,(1),null);
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("rect",{'x':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,new cljs.core.Keyword(null,"x","x",2099068185)))?(x - (width / (2))):x),'y':((y - ((app.main.ui.workspace.viewport.snap_distances.pill_text_height / zoom) / (2))) - ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,new cljs.core.Keyword(null,"x","x",2099068185)))?((2) / zoom):(0))),'width':width,'height':(app.main.ui.workspace.viewport.snap_distances.pill_text_height / zoom),'rx':(app.main.ui.workspace.viewport.snap_distances.pill_text_border_radius / zoom),'fill':app.main.ui.workspace.viewport.snap_distances.line_color}),rumext.v2.jsx("text",{'x':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,new cljs.core.Keyword(null,"x","x",2099068185)))?x:(x + (width / (2)))),'y':(((y + ((app.main.ui.workspace.viewport.snap_distances.pill_text_height / zoom) / (2))) + (- ((6) / zoom))) - ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,new cljs.core.Keyword(null,"x","x",2099068185)))?((2) / zoom):(0))),'fontSize':(app.main.ui.workspace.viewport.snap_distances.pill_text_font_size / zoom),'fill':"var(--app-white)",'textAnchor':"middle",'children':app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(distance)})]});
})(),(function (){var p1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(from_c + (app.main.ui.workspace.viewport.snap_distances.segment_gap / zoom)),(half_point + (app.main.ui.workspace.viewport.snap_distances.segment_gap_side / zoom))], null);
var p2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(from_c + (app.main.ui.workspace.viewport.snap_distances.segment_gap / zoom)),(half_point - (app.main.ui.workspace.viewport.snap_distances.segment_gap_side / zoom))], null);
var vec__80617 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),coord))?p1:cljs.core.reverse(p1));
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80617,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80617,(1),null);
var vec__80620 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),coord))?p2:cljs.core.reverse(p2));
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80620,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80620,(1),null);
return rumext.v2.jsx("line",{'x1':x1,'y1':y1,'x2':x2,'y2':y2,'style':{'stroke':app.main.ui.workspace.viewport.snap_distances.line_color,'strokeWidth':cljs.core.str.cljs$core$IFn$_invoke$arity$1(((1) / zoom))}});
})(),(function (){var p1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(to_c - (app.main.ui.workspace.viewport.snap_distances.segment_gap / zoom)),(half_point + (app.main.ui.workspace.viewport.snap_distances.segment_gap_side / zoom))], null);
var p2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(to_c - (app.main.ui.workspace.viewport.snap_distances.segment_gap / zoom)),(half_point - (app.main.ui.workspace.viewport.snap_distances.segment_gap_side / zoom))], null);
var vec__80623 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),coord))?p1:cljs.core.reverse(p1));
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80623,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80623,(1),null);
var vec__80626 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),coord))?p2:cljs.core.reverse(p2));
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80626,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80626,(1),null);
return rumext.v2.jsx("line",{'x1':x1,'y1':y1,'x2':x2,'y2':y2,'style':{'stroke':app.main.ui.workspace.viewport.snap_distances.line_color,'strokeWidth':cljs.core.str.cljs$core$IFn$_invoke$arity$1(((1) / zoom))}});
})(),(function (){var p1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(from_c + (app.main.ui.workspace.viewport.snap_distances.segment_gap / zoom)),half_point], null);
var p2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(to_c - (app.main.ui.workspace.viewport.snap_distances.segment_gap / zoom)),half_point], null);
var vec__80629 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),coord))?p1:cljs.core.reverse(p1));
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80629,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80629,(1),null);
var vec__80632 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),coord))?p2:cljs.core.reverse(p2));
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80632,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80632,(1),null);
return rumext.v2.jsx("line",{'x1':x1,'y1':y1,'x2':x2,'y2':y2,'style':{'stroke':app.main.ui.workspace.viewport.snap_distances.line_color,'strokeWidth':cljs.core.str.cljs$core$IFn$_invoke$arity$1(((1) / zoom))}});
})()]});
});

(app.main.ui.workspace.viewport.snap_distances.shape_distance_segment.displayName = "shape-distance-segment");

app.main.ui.workspace.viewport.snap_distances.add_distance = (function app$main$ui$workspace$viewport$snap_distances$add_distance(coord,sh1,sh2){
var sr1 = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(sh1);
var sr2 = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(sh2);
var c1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,new cljs.core.Keyword(null,"x","x",2099068185)))?new cljs.core.Keyword(null,"x1","x1",-1863922247):new cljs.core.Keyword(null,"y1","y1",589123466));
var c2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,new cljs.core.Keyword(null,"x","x",2099068185)))?new cljs.core.Keyword(null,"x2","x2",-1362513475):new cljs.core.Keyword(null,"y2","y2",-718691301));
var dist = (c1.cljs$core$IFn$_invoke$arity$1(sr2) - c2.cljs$core$IFn$_invoke$arity$1(sr1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sh1,sh2], null)], null);
});
app.main.ui.workspace.viewport.snap_distances.overlap_QMARK_ = (function app$main$ui$workspace$viewport$snap_distances$overlap_QMARK_(coord,sh1,sh2){
var sr1 = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(sh1);
var sr2 = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(sh2);
var c1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,new cljs.core.Keyword(null,"x","x",2099068185)))?new cljs.core.Keyword(null,"y1","y1",589123466):new cljs.core.Keyword(null,"x1","x1",-1863922247));
var c2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,new cljs.core.Keyword(null,"x","x",2099068185)))?new cljs.core.Keyword(null,"y2","y2",-718691301):new cljs.core.Keyword(null,"x2","x2",-1362513475));
var s1c1 = c1.cljs$core$IFn$_invoke$arity$1(sr1);
var s1c2 = c2.cljs$core$IFn$_invoke$arity$1(sr1);
var s2c1 = c1.cljs$core$IFn$_invoke$arity$1(sr2);
var s2c2 = c2.cljs$core$IFn$_invoke$arity$1(sr2);
return (((((s2c1 >= s1c1)) && ((s2c1 <= s1c2)))) || ((((((s2c2 >= s1c1)) && ((s2c2 <= s1c2)))) || ((((((s1c1 >= s2c1)) && ((s1c1 <= s2c2)))) || ((((s1c2 >= s2c1)) && ((s1c2 <= s2c2)))))))));
});
app.main.ui.workspace.viewport.snap_distances.calculate_segments = (function app$main$ui$workspace$viewport$snap_distances$calculate_segments(coord,selrect,lt_shapes,gt_shapes){
var distance_to_selrect = (function (shape){
var sr = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape);
var G__80648 = ((((coord.cljs$core$IFn$_invoke$arity$1 ? coord.cljs$core$IFn$_invoke$arity$1(sr) : coord.call(null,sr)) <= (coord.cljs$core$IFn$_invoke$arity$1 ? coord.cljs$core$IFn$_invoke$arity$1(selrect) : coord.call(null,selrect))))?app.common.geom.shapes.distance_selrect(sr,selrect):app.common.geom.shapes.distance_selrect(selrect,sr));
return (coord.cljs$core$IFn$_invoke$arity$1 ? coord.cljs$core$IFn$_invoke$arity$1(G__80648) : coord.call(null,G__80648));
});
var get_shapes_match = (function (pred_QMARK_,shapes){
return cljs.core.filterv(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(pred_QMARK_,cljs.core.first),app.common.data.map_perm.cljs$core$IFn$_invoke$arity$3((function (p1__80635_SHARP_,p2__80636_SHARP_){
return app.main.ui.workspace.viewport.snap_distances.add_distance(coord,p1__80635_SHARP_,p2__80636_SHARP_);
}),(function (p1__80637_SHARP_,p2__80638_SHARP_){
return app.main.ui.workspace.viewport.snap_distances.overlap_QMARK_(coord,p1__80637_SHARP_,p2__80638_SHARP_);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(coord,new cljs.core.Keyword(null,"selrect","selrect",1966287292)),shapes)));
});
var check_in_set = (function (value,number_set){
return cljs.core.some((function (p1__80639_SHARP_){
return (app.common.math.abs((value - p1__80639_SHARP_)) <= 1.5);
}),number_set);
});
var distances_xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.some_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(distance_to_selrect),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.pos_QMARK_));
var lt_distances = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,distances_xf,lt_shapes);
var gt_distances = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,distances_xf,gt_shapes);
var distances = clojure.set.union.cljs$core$IFn$_invoke$arity$2(lt_distances,gt_distances);
var show_candidate_QMARK_ = (function (p1__80640_SHARP_){
return check_in_set(p1__80640_SHARP_,distances);
});
var distance_coincidences = app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(get_shapes_match(show_candidate_QMARK_,lt_shapes),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([get_shapes_match(show_candidate_QMARK_,gt_shapes)], 0));
var distance_candidates = app.common.data.concat_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,distance_coincidences),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__80641_SHARP_){
return check_in_set(p1__80641_SHARP_,lt_distances);
}),gt_distances),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__80642_SHARP_){
return check_in_set(p1__80642_SHARP_,gt_distances);
}),lt_distances)], 0));
var min_distance = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,distance_candidates);
var show_distance_QMARK_ = (function (p1__80643_SHARP_){
return check_in_set(p1__80643_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([min_distance]));
});
var other_shapes_segments = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80645_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selrect","selrect",1966287292),p1__80645_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__80644_SHARP_){
return show_distance_QMARK_(cljs.core.first(p1__80644_SHARP_));
}),distance_coincidences)));
var selection_segments = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80647_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[selrect,new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(p1__80647_SHARP_)],null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__80646_SHARP_){
return show_distance_QMARK_(distance_to_selrect(p1__80646_SHARP_));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lt_shapes,gt_shapes)));
var segments_to_display = app.common.data.concat_set.cljs$core$IFn$_invoke$arity$variadic(other_shapes_segments,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([selection_segments], 0));
return segments_to_display;
});
app.main.ui.workspace.viewport.snap_distances.query_worker = (function app$main$ui$workspace$viewport$snap_distances$query_worker(page_id,coord,p__80649){
var vec__80650 = p__80649;
var selrect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80650,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80650,(1),null);
var frame = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80650,(2),null);
var lt_side = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,new cljs.core.Keyword(null,"x","x",2099068185)))?new cljs.core.Keyword(null,"left","left",-399115937):new cljs.core.Keyword(null,"top","top",-1856271961));
var gt_side = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,new cljs.core.Keyword(null,"x","x",2099068185)))?new cljs.core.Keyword(null,"right","right",-452581833):new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
var vbox = cljs.core.deref(app.main.refs.vbox);
var frame_sr = ((app.common.files.helpers.root_QMARK_(frame))?null:(frame?.selrect?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(frame,new cljs.core.Keyword(null,"selrect","selrect",1966287292))));
var bounds = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(app.common.geom.rect.clip_rect(frame_sr,vbox),vbox);
var areas = app.common.geom.shapes.get_areas(bounds,selrect);
var query_side = (function (side){
var rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(areas,side);
if((((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect) > (0))) && ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect) > (0))))){
return app.main.snap.select_shapes_area(page_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame),selected,cljs.core.deref(app.main.refs.workspace_page_objects),rect);
} else {
return beicon.v2.core.of(null);
}
});
return beicon.v2.core.combine_latest(query_side(lt_side),query_side(gt_side));
});
app.main.ui.workspace.viewport.snap_distances.shape_distance = (function app$main$ui$workspace$viewport$snap_distances$shape_distance(props_80653){
var props = props_80653;
var frame = (props["frame"]);
var selrect = (props["selrect"]);
var page_id = (props["page-id"]);
var zoom = (props["zoom"]);
var coord = (props["coord"]);
var selected = (props["selected"]);
var subject = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$1((function (){
return beicon.v2.core.subject();
}));
var lt_shapes_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var lt_shapes = cljs.core.deref(lt_shapes_STAR_);
var gt_shapes_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var gt_shapes = cljs.core.deref(gt_shapes_STAR_);
var segments_to_display = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(lt_shapes),rumext.v2.adapt(gt_shapes),rumext.v2.adapt(selrect)],(function (){
return app.main.ui.workspace.viewport.snap_distances.calculate_segments(coord,selrect,lt_shapes,gt_shapes);
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(page_id)],(function (){
var sub = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (p__80654){
var vec__80655 = p__80654;
var lt_shapes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80655,(0),null);
var gt_shapes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80655,(1),null);
cljs.core.reset_BANG_(lt_shapes_STAR_,lt_shapes__$1);

return cljs.core.reset_BANG_(gt_shapes_STAR_,gt_shapes__$1);
}),beicon.v2.core.switch_map(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.ui.workspace.viewport.snap_distances.query_worker,page_id,coord),beicon.v2.core.throttle.cljs$core$IFn$_invoke$arity$2((100),subject)));
return (function (){
return beicon.v2.core.dispose_BANG_(sub);
});
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selrect)],(function (){
return subject.next(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selrect,selected,frame], null));
}));

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__80658){
var vec__80659 = p__80658;
var sr1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80659,(0),null);
var sr2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80659,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.workspace.viewport.snap_distances.shape_distance_segment,{'sr1':sr1,'sr2':sr2,'coord':coord,'zoom':zoom},""+((sr1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(sr1,new cljs.core.Keyword(null,"x","x",2099068185))) ?? "")+"-"+((sr1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(sr1,new cljs.core.Keyword(null,"y","y",-1757859776))) ?? "")+"-"+((sr2?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(sr2,new cljs.core.Keyword(null,"x","x",2099068185))) ?? "")+"-"+((sr2?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(sr2,new cljs.core.Keyword(null,"y","y",-1757859776))) ?? "")));

return out_arr__46744__auto__;
}),[],segments_to_display);
});

(app.main.ui.workspace.viewport.snap_distances.shape_distance.displayName = "shape-distance");

app.main.ui.workspace.viewport.snap_distances.snap_distances = (function app$main$ui$workspace$viewport$snap_distances$snap_distances(props_80662){
var props = props_80662;
var page_id = (props["page-id"]);
var zoom = (props["zoom"]);
var selected = (props["selected"]);
var selected_shapes = (props["selected-shapes"]);
var frame_id = new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(cljs.core.first(selected_shapes));
var frame = rumext.v2.deref(app.main.refs.object_by_id(frame_id));
var selrect = app.common.geom.shapes.shapes__GT_rect(selected_shapes);
if(app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(frame)){
return null;
} else {
return rumext.v2.jsxs("g",{'className':"distance",'children':[rumext.v2.jsx(app.main.ui.workspace.viewport.snap_distances.shape_distance,{'selrect':selrect,'page-id':page_id,'frame':frame,'zoom':zoom,'coord':new cljs.core.Keyword(null,"x","x",2099068185),'selected':selected}),rumext.v2.jsx(app.main.ui.workspace.viewport.snap_distances.shape_distance,{'selrect':selrect,'page-id':page_id,'frame':frame,'zoom':zoom,'coord':new cljs.core.Keyword(null,"y","y",-1757859776),'selected':selected})]});
}
});

(app.main.ui.workspace.viewport.snap_distances.snap_distances.displayName = "snap-distances");


//# sourceMappingURL=app.main.ui.workspace.viewport.snap_distances.js.map
