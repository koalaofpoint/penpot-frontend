import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.flags.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.math.js";
import "./app.common.types.color.js";
import "./app.common.types.fills.js";
import "./app.common.types.path.helpers.js";
import "./app.common.types.path.segment.js";
import "./app.common.types.path.subpath.js";
goog.provide('app.common.types.path.bool');
app.common.types.path.bool.get_default_fills = (function app$common$types$path$bool$get_default_fills(){
var fills = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),"#000000"], null)], null);
if(cljs.core.contains_QMARK_(app.common.flags._STAR_current_STAR_,new cljs.core.Keyword(null,"frontend-binary-fills","frontend-binary-fills",-342747503))){
return app.common.types.fills.from_plain(fills);
} else {
return fills;
}
});
app.common.types.path.bool.group_style_properties = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blur","blur",-453500461),null,new cljs.core.Keyword(null,"shadow","shadow",873231803),null], null), null);
app.common.types.path.bool.style_properties = cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.types.path.bool.group_style_properties,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fills","fills",902966780),new cljs.core.Keyword(null,"strokes","strokes",-1645650952)], null));
app.common.types.path.bool.add_previous = (function app$common$types$path$bool$add_previous(var_args){
var G__50012 = arguments.length;
switch (G__50012) {
case 1:
return app.common.types.path.bool.add_previous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.types.path.bool.add_previous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.path.bool.add_previous.cljs$core$IFn$_invoke$arity$1 = (function (content){
return app.common.types.path.bool.add_previous.cljs$core$IFn$_invoke$arity$2(content,null);
}));

(app.common.types.path.bool.add_previous.cljs$core$IFn$_invoke$arity$2 = (function (content,first){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__50015){
var vec__50016 = p__50015;
var cmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50016,(0),null);
var prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50016,(1),null);
var G__50019 = cmd;
var G__50019__$1 = (((((prev == null)) && ((!((first == null))))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50019,new cljs.core.Keyword(null,"prev","prev",-1597069226),first):G__50019);
if((!((prev == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50019__$1,new cljs.core.Keyword(null,"prev","prev",-1597069226),app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(prev));
} else {
return G__50019__$1;
}
}),app.common.data.with_prev(content));
}));

(app.common.types.path.bool.add_previous.cljs$lang$maxFixedArity = 2);

/**
 * Removes the :close-path commands and replace them for line-to so we can calculate
 *   the intersections
 */
app.common.types.path.bool.close_paths = (function app$common$types$path$bool$close_paths(content){
var segments = cljs.core.seq(content);
var result = cljs.core.PersistentVector.EMPTY;
var last_move = null;
var last_point = null;
while(true){
var temp__5823__auto__ = cljs.core.first(segments);
if(cljs.core.truth_(temp__5823__auto__)){
var segment = temp__5823__auto__;
var point = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(segment);
var segment__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"close-path","close-path",1220079654),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(segment))) && ((((last_point == null)) || ((app.common.geom.point.distance(last_point,last_move) < 0.01))))))?null:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"close-path","close-path",1220079654),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(segment)))?app.common.types.path.helpers.make_line_to(last_move):segment
));
var G__50149 = cljs.core.rest(segments);
var G__50150 = (function (){var G__50028 = result;
if((!((segment__$1 == null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__50028,segment__$1);
} else {
return G__50028;
}
})();
var G__50151 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(segment__$1)))?point:last_move);
var G__50152 = point;
segments = G__50149;
result = G__50150;
last_move = G__50151;
last_point = G__50152;
continue;
} else {
return result;
}
break;
}
});
app.common.types.path.bool.split_command = (function app$common$types$path$bool$split_command(cmd,values){
var G__50029 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(cmd);
var G__50029__$1 = (((G__50029 instanceof cljs.core.Keyword))?G__50029.fqn:null);
switch (G__50029__$1) {
case "line-to":
return app.common.types.path.helpers.split_line_to_ranges(new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(cmd),cmd,values);

break;
case "curve-to":
return app.common.types.path.helpers.split_curve_to_ranges(new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(cmd),cmd,values);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmd], null);

}
});
app.common.types.path.bool.split_ts = (function app$common$types$path$bool$split_ts(seg_1,seg_2){
var cmd_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(seg_1,new cljs.core.Keyword(null,"command","command",-894540724));
var cmd_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(seg_2,new cljs.core.Keyword(null,"command","command",-894540724));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line-to","line-to",1332939595),cmd_1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line-to","line-to",1332939595),cmd_2)))){
return app.common.types.path.helpers.line_line_intersect(app.common.types.path.helpers.command__GT_line.cljs$core$IFn$_invoke$arity$1(seg_1),app.common.types.path.helpers.command__GT_line.cljs$core$IFn$_invoke$arity$1(seg_2));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line-to","line-to",1332939595),cmd_1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curve-to","curve-to",-936461191),cmd_2)))){
return app.common.types.path.helpers.line_curve_intersect(app.common.types.path.helpers.command__GT_line.cljs$core$IFn$_invoke$arity$1(seg_1),app.common.types.path.helpers.command__GT_bezier.cljs$core$IFn$_invoke$arity$1(seg_2));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curve-to","curve-to",-936461191),cmd_1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line-to","line-to",1332939595),cmd_2)))){
var vec__50042 = app.common.types.path.helpers.line_curve_intersect(app.common.types.path.helpers.command__GT_line.cljs$core$IFn$_invoke$arity$1(seg_2),app.common.types.path.helpers.command__GT_bezier.cljs$core$IFn$_invoke$arity$1(seg_1));
var seg_2_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50042,(0),null);
var seg_1_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50042,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg_1_SINGLEQUOTE_,seg_2_SINGLEQUOTE_], null);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curve-to","curve-to",-936461191),cmd_1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curve-to","curve-to",-936461191),cmd_2)))){
return app.common.types.path.helpers.curve_curve_intersect(app.common.types.path.helpers.command__GT_bezier.cljs$core$IFn$_invoke$arity$1(seg_1),app.common.types.path.helpers.command__GT_bezier.cljs$core$IFn$_invoke$arity$1(seg_2));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null);

}
}
}
}
});
app.common.types.path.bool.content_intersect_split = (function app$common$types$path$bool$content_intersect_split(content_a,content_b,sr_a,sr_b){
var command__GT_selrect = cljs.core.memoize(app.common.types.path.helpers.command__GT_selrect);
var overlap_segment_selrect_QMARK_ = (function app$common$types$path$bool$content_intersect_split_$_overlap_segment_selrect_QMARK_(segment,selrect){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(segment))){
return false;
} else {
var r1 = command__GT_selrect(segment);
return app.common.geom.rect.overlaps_rects_QMARK_(r1,selrect);
}
});
var overlap_segments_QMARK_ = (function app$common$types$path$bool$content_intersect_split_$_overlap_segments_QMARK_(seg_1,seg_2){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(seg_1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(seg_2))))){
return false;
} else {
var r1 = command__GT_selrect(seg_1);
var r2 = command__GT_selrect(seg_2);
return app.common.geom.rect.overlaps_rects_QMARK_(r1,r2);
}
});
var split = (function app$common$types$path$bool$content_intersect_split_$_split(seg_1,seg_2){
if(cljs.core.not(overlap_segments_QMARK_(seg_1,seg_2))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg_1], null);
} else {
var vec__50068 = app.common.types.path.bool.split_ts(seg_1,seg_2);
var ts_seg_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50068,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50068,(1),null);
return app.common.types.path.bool.add_previous.cljs$core$IFn$_invoke$arity$2(app.common.types.path.bool.split_command(seg_1,ts_seg_1),new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(seg_1));
}
});
var split_segment_on_content = (function app$common$types$path$bool$content_intersect_split_$_split_segment_on_content(segment,content,content_sr){
if(cljs.core.truth_(overlap_segment_selrect_QMARK_(segment,content_sr))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,current){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__50054_SHARP_){
return split(p1__50054_SHARP_,current);
})),result);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segment], null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50053_SHARP_){
return overlap_segments_QMARK_(segment,p1__50053_SHARP_);
}),content));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segment], null);
}
});
var split_content = (function app$common$types$path$bool$content_intersect_split_$_split_content(content_a__$1,content_b__$1,sr_b__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__50055_SHARP_){
return split_segment_on_content(p1__50055_SHARP_,content_b__$1,sr_b__$1);
})),content_a__$1);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [split_content(content_a,content_b,sr_b),split_content(content_b,content_a,sr_a)], null);
});
app.common.types.path.bool.is_segment_QMARK_ = (function app$common$types$path$bool$is_segment_QMARK_(cmd){
return ((cljs.core.contains_QMARK_(cmd,new cljs.core.Keyword(null,"prev","prev",-1597069226))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-to","line-to",1332939595),null,new cljs.core.Keyword(null,"curve-to","curve-to",-936461191),null], null), null),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(cmd))));
});
app.common.types.path.bool.contains_segment_QMARK_ = (function app$common$types$path$bool$contains_segment_QMARK_(segment,content,content_sr,content_geom){
var point = (function (){var G__50089 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(segment);
var G__50089__$1 = (((G__50089 instanceof cljs.core.Keyword))?G__50089.fqn:null);
switch (G__50089__$1) {
case "line-to":
return app.common.types.path.helpers.line_values(app.common.types.path.helpers.command__GT_line.cljs$core$IFn$_invoke$arity$1(segment),0.5);

break;
case "curve-to":
return app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$2(app.common.types.path.helpers.command__GT_bezier.cljs$core$IFn$_invoke$arity$1(segment),0.5);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50089__$1)].join('')));

}
})();
var and__5023__auto__ = app.common.geom.rect.contains_point_QMARK_(content_sr,point);
if(and__5023__auto__){
var or__5025__auto__ = app.common.types.path.helpers.is_point_in_geom_data_QMARK_(point,content_geom);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.common.types.path.helpers.is_point_in_border_QMARK_(point,content);
}
} else {
return and__5023__auto__;
}
});
app.common.types.path.bool.inside_segment_QMARK_ = (function app$common$types$path$bool$inside_segment_QMARK_(segment,content_sr,content_geom){
var point = (function (){var G__50093 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(segment);
var G__50093__$1 = (((G__50093 instanceof cljs.core.Keyword))?G__50093.fqn:null);
switch (G__50093__$1) {
case "line-to":
return app.common.types.path.helpers.line_values(app.common.types.path.helpers.command__GT_line.cljs$core$IFn$_invoke$arity$1(segment),0.5);

break;
case "curve-to":
return app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$2(app.common.types.path.helpers.command__GT_bezier.cljs$core$IFn$_invoke$arity$1(segment),0.5);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50093__$1)].join('')));

}
})();
return ((app.common.geom.rect.contains_point_QMARK_(content_sr,point)) && (app.common.types.path.helpers.is_point_in_geom_data_QMARK_(point,content_geom)));
});
/**
 * Finds if the current segment is overlapping against other
 *   segment meaning they have the same coordinates
 */
app.common.types.path.bool.overlap_segment_QMARK_ = (function app$common$types$path$bool$overlap_segment_QMARK_(segment,content){
var overlap_single_QMARK_ = (function (other){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(segment),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-to","line-to",1332939595),null,new cljs.core.Keyword(null,"curve-to","curve-to",-936461191),null], null), null),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(segment))))){
var G__50097 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(segment);
var G__50097__$1 = (((G__50097 instanceof cljs.core.Keyword))?G__50097.fqn:null);
switch (G__50097__$1) {
case "line-to":
var vec__50098 = app.common.types.path.helpers.command__GT_line.cljs$core$IFn$_invoke$arity$1(segment);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50098,(0),null);
var q1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50098,(1),null);
var vec__50101 = app.common.types.path.helpers.command__GT_line.cljs$core$IFn$_invoke$arity$1(other);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50101,(0),null);
var q2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50101,(1),null);
if((((((app.common.geom.point.distance(p1,p2) < 0.1)) && ((app.common.geom.point.distance(q1,q2) < 0.1)))) || ((((app.common.geom.point.distance(p1,q2) < 0.1)) && ((app.common.geom.point.distance(q1,p2) < 0.1)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [segment,other], null);
} else {
return null;
}

break;
case "curve-to":
var vec__50104 = app.common.types.path.helpers.command__GT_bezier.cljs$core$IFn$_invoke$arity$1(segment);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50104,(0),null);
var q1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50104,(1),null);
var h11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50104,(2),null);
var h21 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50104,(3),null);
var vec__50107 = app.common.types.path.helpers.command__GT_bezier.cljs$core$IFn$_invoke$arity$1(other);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50107,(0),null);
var q2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50107,(1),null);
var h12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50107,(2),null);
var h22 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50107,(3),null);
if((((((app.common.geom.point.distance(p1,p2) < 0.1)) && ((((app.common.geom.point.distance(q1,q2) < 0.1)) && ((((app.common.geom.point.distance(h11,h12) < 0.1)) && ((app.common.geom.point.distance(h21,h22) < 0.1)))))))) || ((((app.common.geom.point.distance(p1,q2) < 0.1)) && ((((app.common.geom.point.distance(q1,p2) < 0.1)) && ((((app.common.geom.point.distance(h11,h22) < 0.1)) && ((app.common.geom.point.distance(h21,h12) < 0.1)))))))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [segment,other], null);
} else {
return null;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50097__$1)].join('')));

}
} else {
return null;
}
});
return (!((app.common.data.seek.cljs$core$IFn$_invoke$arity$2(overlap_single_QMARK_,content) == null)));
});
app.common.types.path.bool.fix_move_to = (function app$common$types$path$bool$fix_move_to(content){
var current = cljs.core.first(content);
var content__$1 = cljs.core.rest(content);
var prev = null;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if((current == null)){
return result;
} else {
var result__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(current),prev))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,app.common.types.path.helpers.make_move_to(new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(current))):result);
var G__50170 = cljs.core.first(content__$1);
var G__50171 = cljs.core.rest(content__$1);
var G__50172 = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(current);
var G__50173 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__$1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(current,new cljs.core.Keyword(null,"prev","prev",-1597069226)));
current = G__50170;
content__$1 = G__50171;
prev = G__50172;
result = G__50173;
continue;
}
break;
}
});
/**
 * Remove from the content segments
 */
app.common.types.path.bool.remove_duplicated_segments = (function app$common$types$path$bool$remove_duplicated_segments(content){
var comparator = (function app$common$types$path$bool$remove_duplicated_segments_$_comparator(p__50121,p__50122){
var vec__50123 = p__50121;
var fx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50123,(0),null);
var fy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50123,(1),null);
var tx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50123,(2),null);
var ty1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50123,(3),null);
var v1 = vec__50123;
var vec__50126 = p__50122;
var fx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50126,(0),null);
var fy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50126,(1),null);
var tx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50126,(2),null);
var ty2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50126,(3),null);
var v2 = vec__50126;
if(cljs.core.truth_((function (){var and__5023__auto__ = app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(tx1,tx2);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(ty1,ty2);
if(cljs.core.truth_(and__5023__auto____$1)){
var and__5023__auto____$2 = app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(fx1,fx2);
if(cljs.core.truth_(and__5023__auto____$2)){
return app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(fy1,fy2);
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return (0);
} else {
return cljs.core.compare(v1,v2);
}
});
var current = cljs.core.first(content);
var content__$1 = cljs.core.rest(content);
var segments = cljs.core.sorted_set_by(comparator);
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if((current == null)){
return result;
} else {
var fx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(current));
var fy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(current));
var tx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(current));
var ty = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(current));
var result__$1 = (function (){var G__50130 = result;
if((((!(cljs.core.contains_QMARK_(segments,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [fx,fy,tx,ty], null))))) && ((!(cljs.core.contains_QMARK_(segments,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty,fx,fy], null))))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__50130,current);
} else {
return G__50130;
}
})();
var segments__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segments,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [fx,fy,tx,ty], null));
var G__50175 = cljs.core.first(content__$1);
var G__50176 = cljs.core.rest(content__$1);
var G__50177 = segments__$1;
var G__50178 = result__$1;
current = G__50175;
content__$1 = G__50176;
segments = G__50177;
result = G__50178;
continue;
}
break;
}
});
app.common.types.path.bool.close_content = (function app$common$types$path$bool$close_content(content){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377)),app.common.types.path.subpath.get_subpaths(app.common.types.path.subpath.close_subpaths(content)));
});
app.common.types.path.bool.content__GT_geom_data = (function app$common$types$path$bool$content__GT_geom_data(content){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (segment){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(segment),new cljs.core.Keyword(null,"segment","segment",-964921196),segment,new cljs.core.Keyword(null,"geom","geom",1207084371),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line-to","line-to",1332939595),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(segment)))?app.common.types.path.helpers.command__GT_line.cljs$core$IFn$_invoke$arity$1(segment):app.common.types.path.helpers.command__GT_bezier.cljs$core$IFn$_invoke$arity$1(segment)),new cljs.core.Keyword(null,"selrect","selrect",1966287292),app.common.types.path.helpers.command__GT_selrect.cljs$core$IFn$_invoke$arity$1(segment)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50132_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line-to","line-to",1332939595),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(p1__50132_SHARP_)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curve-to","curve-to",-936461191),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(p1__50132_SHARP_)));
}),app.common.types.path.bool.close_content(content)));
});
app.common.types.path.bool.create_union = (function app$common$types$path$bool$create_union(content_a,content_a_split,content_b,content_b_split,sr_a,sr_b){
var content_a_geom = app.common.types.path.bool.content__GT_geom_data(content_a);
var content_b_geom = app.common.types.path.bool.content__GT_geom_data(content_b);
var content = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50133_SHARP_){
return cljs.core.not(app.common.types.path.bool.contains_segment_QMARK_(p1__50133_SHARP_,content_b,sr_b,content_b_geom));
}),content_a_split),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50134_SHARP_){
return cljs.core.not(app.common.types.path.bool.contains_segment_QMARK_(p1__50134_SHARP_,content_a,sr_a,content_a_geom));
}),content_b_split));
var content_geom = app.common.types.path.bool.content__GT_geom_data(content);
var content_sr = app.common.types.path.segment.content__GT_selrect(app.common.types.path.bool.fix_move_to(content));
var border_content = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50135_SHARP_){
var and__5023__auto__ = app.common.types.path.bool.contains_segment_QMARK_(p1__50135_SHARP_,content_a,sr_a,content_a_geom);
if(cljs.core.truth_(and__5023__auto__)){
return ((app.common.types.path.bool.overlap_segment_QMARK_(p1__50135_SHARP_,content_a_split)) && ((!(app.common.types.path.bool.inside_segment_QMARK_(p1__50135_SHARP_,content_sr,content_geom)))));
} else {
return and__5023__auto__;
}
}),content_b_split);
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(content,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([border_content], 0));
});
app.common.types.path.bool.create_difference = (function app$common$types$path$bool$create_difference(content_a,content_a_split,content_b,content_b_split,sr_a,sr_b){
var content_a_geom = app.common.types.path.bool.content__GT_geom_data(content_a);
var content_b_geom = app.common.types.path.bool.content__GT_geom_data(content_b);
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50137_SHARP_){
return cljs.core.not(app.common.types.path.bool.contains_segment_QMARK_(p1__50137_SHARP_,content_b,sr_b,content_b_geom));
}),content_a_split),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50138_SHARP_){
var and__5023__auto__ = app.common.types.path.bool.contains_segment_QMARK_(p1__50138_SHARP_,content_a,sr_a,content_a_geom);
if(cljs.core.truth_(and__5023__auto__)){
return (!(app.common.types.path.bool.overlap_segment_QMARK_(p1__50138_SHARP_,content_a_split)));
} else {
return and__5023__auto__;
}
}),content_b_split)], 0));
});
app.common.types.path.bool.create_intersection = (function app$common$types$path$bool$create_intersection(content_a,content_a_split,content_b,content_b_split,sr_a,sr_b){
var content_a_geom = app.common.types.path.bool.content__GT_geom_data(content_a);
var content_b_geom = app.common.types.path.bool.content__GT_geom_data(content_b);
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50139_SHARP_){
return app.common.types.path.bool.contains_segment_QMARK_(p1__50139_SHARP_,content_b,sr_b,content_b_geom);
}),content_a_split),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50140_SHARP_){
return app.common.types.path.bool.contains_segment_QMARK_(p1__50140_SHARP_,content_a,sr_a,content_a_geom);
}),content_b_split)], 0));
});
app.common.types.path.bool.create_exclusion = (function app$common$types$path$bool$create_exclusion(content_a,content_b){
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(content_a,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content_b], 0));
});
app.common.types.path.bool.content_bool_pair = (function app$common$types$path$bool$content_bool_pair(bool_type,content_a,content_b){
var should_reverse_QMARK_ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),bool_type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.common.types.path.subpath.clockwise_QMARK_(content_b),app.common.types.path.subpath.clockwise_QMARK_(content_a))));
var content_a__$1 = app.common.types.path.bool.add_previous.cljs$core$IFn$_invoke$arity$1(app.common.types.path.bool.close_paths(content_a));
var content_b__$1 = app.common.types.path.bool.add_previous.cljs$core$IFn$_invoke$arity$1((function (){var G__50145 = app.common.types.path.bool.close_paths(content_b);
if(should_reverse_QMARK_){
return app.common.types.path.subpath.reverse_content(G__50145);
} else {
return G__50145;
}
})());
var sr_a = app.common.types.path.segment.content__GT_selrect(content_a__$1);
var sr_b = app.common.types.path.segment.content__GT_selrect(content_b__$1);
var vec__50142 = app.common.types.path.bool.content_intersect_split(content_a__$1,content_b__$1,sr_a,sr_b);
var content_a_split = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50142,(0),null);
var content_b_split = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50142,(1),null);
var content_a_split__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.types.path.bool.is_segment_QMARK_,app.common.types.path.bool.add_previous.cljs$core$IFn$_invoke$arity$1(content_a_split));
var content_b_split__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.types.path.bool.is_segment_QMARK_,app.common.types.path.bool.add_previous.cljs$core$IFn$_invoke$arity$1(content_b_split));
var content = (function (){var G__50146 = bool_type;
var G__50146__$1 = (((G__50146 instanceof cljs.core.Keyword))?G__50146.fqn:null);
switch (G__50146__$1) {
case "union":
return app.common.types.path.bool.create_union(content_a__$1,content_a_split__$1,content_b__$1,content_b_split__$1,sr_a,sr_b);

break;
case "difference":
return app.common.types.path.bool.create_difference(content_a__$1,content_a_split__$1,content_b__$1,content_b_split__$1,sr_a,sr_b);

break;
case "intersection":
return app.common.types.path.bool.create_intersection(content_a__$1,content_a_split__$1,content_b__$1,content_b_split__$1,sr_a,sr_b);

break;
case "exclude":
return app.common.types.path.bool.create_exclusion(content_a_split__$1,content_b_split__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50146__$1)].join('')));

}
})();
return app.common.types.path.subpath.close_subpaths(app.common.types.path.bool.fix_move_to(app.common.types.path.bool.remove_duplicated_segments(content)));
});
/**
 * Create a bool content from a collection of contents and specified
 *   type. Returns plain segments
 */
app.common.types.path.bool.calculate_content = (function app$common$types$path$bool$calculate_content(bool_type,contents){
if(cljs.core.seq(contents)){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.path.bool.content_bool_pair,bool_type),contents));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});

//# sourceMappingURL=app.common.types.path.bool.js.map
