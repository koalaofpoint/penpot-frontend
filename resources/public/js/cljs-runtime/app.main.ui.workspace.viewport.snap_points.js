import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.snap.js";
import "./app.common.types.shape.layout.js";
import "./app.main.snap.js";
import "./beicon.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.viewport.snap_points');
app.main.ui.workspace.viewport.snap_points.line_color = "var(--color-accent-quaternary)";
app.main.ui.workspace.viewport.snap_points.line_opacity = 0.6;
app.main.ui.workspace.viewport.snap_points.line_width = (1);
app.main.ui.workspace.viewport.snap_points.snap_point = (function app$main$ui$workspace$viewport$snap_points$snap_point(props_80663){
var map__80664 = rumext.v2.util.wrap_props(props_80663);
var map__80664__$1 = cljs.core.__destructure_map(map__80664);
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80664__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80664__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__80665 = point;
var map__80665__$1 = cljs.core.__destructure_map(map__80665);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80665__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80665__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cross_width = ((3) / zoom);
return rumext.v2.jsxs("g",{'children':[rumext.v2.jsx("line",{'x1':(x - cross_width),'y1':(y - cross_width),'x2':(x + cross_width),'y2':(y + cross_width),'style':{'stroke':app.main.ui.workspace.viewport.snap_points.line_color,'strokeWidth':cljs.core.str.cljs$core$IFn$_invoke$arity$1((app.main.ui.workspace.viewport.snap_points.line_width / zoom))}}),rumext.v2.jsx("line",{'x1':(x - cross_width),'y1':(y + cross_width),'x2':(x + cross_width),'y2':(y - cross_width),'style':{'stroke':app.main.ui.workspace.viewport.snap_points.line_color,'strokeWidth':cljs.core.str.cljs$core$IFn$_invoke$arity$1((app.main.ui.workspace.viewport.snap_points.line_width / zoom))}})]});
});

(app.main.ui.workspace.viewport.snap_points.snap_point.displayName = "snap-point");

app.main.ui.workspace.viewport.snap_points.snap_line = (function app$main$ui$workspace$viewport$snap_points$snap_line(props_80666){
var map__80667 = rumext.v2.util.wrap_props(props_80666);
var map__80667__$1 = cljs.core.__destructure_map(map__80667);
var snap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80667__$1,new cljs.core.Keyword(null,"snap","snap",-51714904));
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80667__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80667__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
return rumext.v2.jsx("line",{'x1':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(snap),'y1':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(snap),'x2':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point),'y2':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point),'style':{'stroke':app.main.ui.workspace.viewport.snap_points.line_color,'strokeWidth':cljs.core.str.cljs$core$IFn$_invoke$arity$1((app.main.ui.workspace.viewport.snap_points.line_width / zoom))},'opacity':app.main.ui.workspace.viewport.snap_points.line_opacity});
});

(app.main.ui.workspace.viewport.snap_points.snap_line.displayName = "snap-line");

app.main.ui.workspace.viewport.snap_points.get_snap = (function app$main$ui$workspace$viewport$snap_points$get_snap(coord,p__80672){
var map__80673 = p__80672;
var map__80673__$1 = cljs.core.__destructure_map(map__80673);
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80673__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80673__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var remove_snap_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80673__$1,new cljs.core.Keyword(null,"remove-snap?","remove-snap?",-1090687881));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80673__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var bounds = app.common.geom.shapes.shapes__GT_rect(shapes);
var frame_id = app.main.snap.snap_frame_id(shapes);
return beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,beicon.v2.core.merge_map((function (p__80674){
var vec__80675 = p__80674;
var frame_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80675,(0),null);
var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80675,(1),null);
return beicon.v2.core.map((function (p1__80671_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[point,p1__80671_SHARP_,coord],null));
}),beicon.v2.core.map((function (p1__80670_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pt","pt",556460867),p1__80670_SHARP_);
}),beicon.v2.core.map((function (p1__80669_SHARP_){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.second,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__80669_SHARP_], 0));
}),app.main.snap.get_snap_points(page_id,frame_id__$1,remove_snap_QMARK_,zoom,point,coord))));
}),beicon.v2.core.merge_map((function (bounds__$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80668_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[frame_id,p1__80668_SHARP_],null));
}),app.common.geom.snap.rect__GT_snap_points(bounds__$1));
}),beicon.v2.core.of(bounds))));
});
/**
 * Function that reverses the x/y coordinates to their counterpart
 */
app.main.ui.workspace.viewport.snap_points.flip = (function app$main$ui$workspace$viewport$snap_points$flip(coord){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,new cljs.core.Keyword(null,"x","x",2099068185))){
return new cljs.core.Keyword(null,"y","y",-1757859776);
} else {
return new cljs.core.Keyword(null,"x","x",2099068185);
}
});
app.main.ui.workspace.viewport.snap_points.add_point_to_snaps = (function app$main$ui$workspace$viewport$snap_points$add_point_to_snaps(p__80679){
var vec__80680 = p__80679;
var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80680,(0),null);
var snaps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80680,(1),null);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80680,(2),null);
var normalize_coord = (function (p1__80678_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__80678_SHARP_,coord,cljs.core.get.cljs$core$IFn$_invoke$arity$2(point,coord));
});
return cljs.core.cons(point,cljs.core.map.cljs$core$IFn$_invoke$arity$2(normalize_coord,snaps));
});
/**
 * Gets the snaps for a coordinate and creates lines with a fixed coordinate
 */
app.main.ui.workspace.viewport.snap_points.process_snap_lines = (function app$main$ui$workspace$viewport$snap_points$process_snap_lines(snaps,coord){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__80688){
var vec__80689 = p__80688;
var fixedv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80689,(0),null);
var vec__80692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80689,(1),null);
var minv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80692,(0),null);
var maxv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80692,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([coord,app.main.ui.workspace.viewport.snap_points.flip(coord)],[fixedv,minv]),cljs.core.PersistentHashMap.fromArrays([coord,app.main.ui.workspace.viewport.snap_points.flip(coord)],[fixedv,maxv])], null);
}),app.common.data.mapm.cljs$core$IFn$_invoke$arity$2((function (p1__80687_SHARP_,p2__80686_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,p2__80686_SHARP_),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,p2__80686_SHARP_)],null));
}),app.common.data.mapm.cljs$core$IFn$_invoke$arity$2((function (p1__80685_SHARP_,p2__80684_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.viewport.snap_points.flip(coord),p2__80684_SHARP_);
}),cljs.core.group_by(coord,cljs.core.flatten(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(app.main.ui.workspace.viewport.snap_points.add_point_to_snaps,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__80683_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__80683_SHARP_,(2)),coord);
}),snaps)], 0)))))));
});
app.main.ui.workspace.viewport.snap_points.snap_feedback = (function app$main$ui$workspace$viewport$snap_points$snap_feedback(props_80695){
var map__80696 = rumext.v2.util.wrap_props(props_80695);
var map__80696__$1 = cljs.core.__destructure_map(map__80696);
var props = map__80696__$1;
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80696__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var remove_snap_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80696__$1,new cljs.core.Keyword(null,"remove-snap?","remove-snap?",-1090687881));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80696__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80696__$1,new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
var state = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var subject = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$1((function (){
return beicon.v2.core.subject();
}));
var snap_points = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(app.main.ui.workspace.viewport.snap_points.add_point_to_snaps),cljs.core.deref(state));
var snap_lines = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.viewport.snap_points.process_snap_lines(cljs.core.deref(state),new cljs.core.Keyword(null,"x","x",2099068185)),app.main.ui.workspace.viewport.snap_points.process_snap_lines(cljs.core.deref(state),new cljs.core.Keyword(null,"y","y",-1757859776))));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
var sub = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (data){
var rs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__80697){
var vec__80698 = p__80697;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80698,(0),null);
var snaps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80698,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80698,(2),null);
return (cljs.core.count(snaps) > (0));
}),data);
return cljs.core.reset_BANG_(state,rs);
}),beicon.v2.core.map((function (result){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.common.data.concat_vec,cljs.core.seq(result));
}),beicon.v2.core.switch_map((function (props__$1){
return beicon.v2.core.combine_latest(app.main.ui.workspace.viewport.snap_points.get_snap(new cljs.core.Keyword(null,"x","x",2099068185),props__$1),app.main.ui.workspace.viewport.snap_points.get_snap(new cljs.core.Keyword(null,"y","y",-1757859776),props__$1));
}),subject)));
return (function (){
return beicon.v2.core.dispose_BANG_(sub);
});
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes),rumext.v2.adapt(remove_snap_QMARK_),rumext.v2.adapt(modifiers)],(function (){
return subject.next(props);
}));

return rumext.v2.jsxs("g",{'className':"snap-feedback",'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__80701){
var vec__80702 = p__80701;
var from_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80702,(0),null);
var to_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80702,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.workspace.viewport.snap_points.snap_line,{'snap':from_point,'point':to_point,'zoom':zoom},["line-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(from_point)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from_point)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to_point)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to_point)),"-"].join('')));

return out_arr__46744__auto__;
}),[],snap_lines),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,point){
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.workspace.viewport.snap_points.snap_point,{'point':point,'zoom':zoom},["point-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point))].join('')));

return out_arr__46744__auto__;
}),[],snap_points)]});
});

(app.main.ui.workspace.viewport.snap_points.snap_feedback.displayName = "snap-feedback");

app.main.ui.workspace.viewport.snap_points.snap_points = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$viewport$snap_points$snap_points(props_80706){
var map__80707 = rumext.v2.util.wrap_props(props_80706);
var map__80707__$1 = cljs.core.__destructure_map(map__80707);
var props = map__80707__$1;
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80707__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80707__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80707__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80707__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80707__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var drawing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80707__$1,new cljs.core.Keyword(null,"drawing","drawing",1181749528));
var focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80707__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
app.common.data.macros.runtime_assert("expr assert: (set? selected)",(function (){
return cljs.core.set_QMARK_(selected);
}));

var shapes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),selected);
var filter_shapes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(selected,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__80705_SHARP_){
return app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,p1__80705_SHARP_);
})),selected);
var remove_snap_base_QMARK_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(layout),rumext.v2.adapt(filter_shapes),rumext.v2.adapt(objects),rumext.v2.adapt(focus)],(function (){
return app.main.snap.make_remove_snap(layout,filter_shapes,objects,focus);
}));
var remove_snap_QMARK_ = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(remove_snap_base_QMARK_)],(function (p__80708){
var map__80709 = p__80708;
var map__80709__$1 = cljs.core.__destructure_map(map__80709);
var snap = map__80709__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80709__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80709__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var or__5025__auto__ = (remove_snap_base_QMARK_.cljs$core$IFn$_invoke$arity$1 ? remove_snap_base_QMARK_.cljs$core$IFn$_invoke$arity$1(snap) : remove_snap_base_QMARK_.call(null,snap));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"layout","layout",-2120940921))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.Keyword(null,"square","square",812434677))))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"guide","guide",-935563924))));
}
}));
var shapes__$1 = (cljs.core.truth_(drawing)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawing], null):shapes);
var frame_id = app.main.snap.snap_frame_id(shapes__$1);
if(cljs.core.truth_(app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,frame_id))){
return null;
} else {
return rumext.v2.jsx(app.main.ui.workspace.viewport.snap_points.snap_feedback,{'shapes':shapes__$1,'page-id':page_id,'remove-snap?':remove_snap_QMARK_,'zoom':zoom});
}
}));

(app.main.ui.workspace.viewport.snap_points.snap_points.displayName = "snap-points");


//# sourceMappingURL=app.main.ui.workspace.viewport.snap_points.js.map
