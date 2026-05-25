import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.common.types.path.js";
import "./app.main.data.workspace.path.state.js";
import "./app.main.snap.js";
import "./app.main.store.js";
import "./app.main.streams.js";
import "./app.util.mouse.js";
import "./beicon.v2.core.js";
import "./okulary.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.path.streams');
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.data !== 'undefined') && (typeof app.main.data.workspace !== 'undefined') && (typeof app.main.data.workspace.path !== 'undefined') && (typeof app.main.data.workspace.path.streams !== 'undefined') && (typeof app.main.data.workspace.path.streams.drag_threshold !== 'undefined')){
} else {
app.main.data.workspace.path.streams.drag_threshold = (5);
}
app.main.data.workspace.path.streams.dragging_QMARK_ = (function app$main$data$workspace$path$streams$dragging_QMARK_(start,zoom){
return (function (current){
return (app.common.geom.point.distance(start,current) >= (app.main.data.workspace.path.streams.drag_threshold / zoom));
});
});
app.main.data.workspace.path.streams.finish_edition_QMARK_ = (function app$main$data$workspace$path$streams$finish_edition_QMARK_(event){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(potok.v2.core.type(event),new cljs.core.Keyword("app.main.data.workspace.common","clear-edition-mode","app.main.data.workspace.common/clear-edition-mode",1327339287));
});
app.main.data.workspace.path.streams.to_pixel_snap = (function app$main$data$workspace$path$streams$to_pixel_snap(position){
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"workspace-layout","workspace-layout",420938173));
var snap_pixel_QMARK_ = cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"snap-pixel-grid","snap-pixel-grid",-1263132602));
if((((!(snap_pixel_QMARK_))) || ((!(app.common.geom.point.point_QMARK_(position)))))){
return position;
} else {
return app.common.geom.point.round.cljs$core$IFn$_invoke$arity$1(position);

}
});
app.main.data.workspace.path.streams.drag_stream = (function app$main$data$workspace$path$streams$drag_stream(var_args){
var G__70003 = arguments.length;
switch (G__70003) {
case 1:
return app.main.data.workspace.path.streams.drag_stream.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.path.streams.drag_stream.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.path.streams.drag_stream.cljs$core$IFn$_invoke$arity$1 = (function (to_stream){
return app.main.data.workspace.path.streams.drag_stream.cljs$core$IFn$_invoke$arity$2(to_stream,beicon.v2.core.empty());
}));

(app.main.data.workspace.path.streams.drag_stream.cljs$core$IFn$_invoke$arity$2 = (function (to_stream,not_drag_stream){
var zoom = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app.main.store.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),(1));
var start = app.main.data.workspace.path.streams.to_pixel_snap(cljs.core.deref(app.main.streams.mouse_position));
var stopper = beicon.v2.core.merge(app.util.mouse.drag_stopper.cljs$core$IFn$_invoke$arity$1(app.main.store.stream),beicon.v2.core.filter(app.main.data.workspace.path.streams.finish_edition_QMARK_,app.main.store.stream));
var position_stream = beicon.v2.core.take_until(stopper,beicon.v2.core.take((1),beicon.v2.core.filter(app.main.data.workspace.path.streams.dragging_QMARK_(start,zoom),beicon.v2.core.map(app.main.data.workspace.path.streams.to_pixel_snap,app.main.streams.mouse_position))));
return beicon.v2.core.merge(beicon.v2.core.merge_map((function (value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("app.main.data.workspace.path.streams","empty","app.main.data.workspace.path.streams/empty",1775930509))){
return not_drag_stream;
} else {
return beicon.v2.core.empty();
}
}),beicon.v2.core.if_empty(new cljs.core.Keyword("app.main.data.workspace.path.streams","empty","app.main.data.workspace.path.streams/empty",1775930509),position_stream)),beicon.v2.core.merge_map((function (){
return to_stream;
}),position_stream));
}));

(app.main.data.workspace.path.streams.drag_stream.cljs$lang$maxFixedArity = 2);

app.main.data.workspace.path.streams.snap_toggled_stream = (function app$main$data$workspace$path$streams$snap_toggled_stream(){
var get_snap = (function (state){
var id = app.main.data.workspace.path.state.get_path_id(state);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229)),id),new cljs.core.Keyword(null,"snap-toggled","snap-toggled",-1650735574));
});
return beicon.v2.core.from_atom.cljs$core$IFn$_invoke$arity$2(okulary.core.derived.cljs$core$IFn$_invoke$arity$2(get_snap,app.main.store.state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"emit-current-value?","emit-current-value?",56289147),true], null));
});
app.main.data.workspace.path.streams.move_points_stream = (function app$main$data$workspace$path$streams$move_points_stream(start_point,selected_points,points){
var zoom = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app.main.store.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),(1));
var ranges = app.main.snap.create_ranges.cljs$core$IFn$_invoke$arity$2(points,selected_points);
var d_pos = ((10) / zoom);
var check_path_snap = (function (p__70009){
var vec__70010 = p__70009;
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70010,(0),null);
var snap_toggled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70010,(1),null);
if(cljs.core.truth_(snap_toggled)){
var delta = app.common.geom.point.subtract(position,start_point);
var moved_points = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__70005_SHARP_){
return app.common.geom.point.add(p1__70005_SHARP_,delta);
}),selected_points);
var snap = app.main.snap.get_snap_delta(moved_points,ranges,d_pos);
return app.common.geom.point.add(position,snap);
} else {
return position;
}
});
return beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$4((function (position,shift_QMARK_,alt_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(position,new cljs.core.Keyword(null,"shift?","shift?",-1034734696),shift_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"alt?","alt?",-1427998432),alt_QMARK_], 0));
}),app.main.streams.mouse_position_shift,app.main.streams.mouse_position_alt,beicon.v2.core.map(check_path_snap,beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.path.streams.snap_toggled_stream(),beicon.v2.core.map(app.main.data.workspace.path.streams.to_pixel_snap,app.main.streams.mouse_position))));
});
app.main.data.workspace.path.streams.get_angle = (function app$main$data$workspace$path$streams$get_angle(node,handler,opposite){
if((((!((node == null)))) && ((((!((handler == null)))) && ((!((opposite == null)))))))){
var v1 = app.common.geom.point.to_vec(node,opposite);
var v2 = app.common.geom.point.to_vec(node,handler);
var rot_angle = app.common.geom.point.angle_with_other(v1,v2);
var rot_sign = app.common.geom.point.angle_sign(v1,v2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rot_angle,rot_sign], null);
} else {
return null;
}
});
app.main.data.workspace.path.streams.move_handler_stream = (function app$main$data$workspace$path$streams$move_handler_stream(start_point,node,handler,opposite,points){
var zoom = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app.main.store.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),(1));
var ranges = app.main.snap.create_ranges.cljs$core$IFn$_invoke$arity$1(points);
var d_pos = ((10) / zoom);
var vec__70013 = app.main.data.workspace.path.streams.get_angle(node,handler,opposite);
var initial_angle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70013,(0),null);
var check_path_snap = (function (p__70016){
var vec__70017 = p__70016;
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70017,(0),null);
var snap_toggled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70017,(1),null);
if(cljs.core.truth_(snap_toggled)){
var delta = app.common.geom.point.subtract(position,start_point);
var handler__$1 = app.common.geom.point.add(handler,delta);
var vec__70020 = app.main.data.workspace.path.streams.get_angle(node,handler__$1,opposite);
var rot_angle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70020,(0),null);
var rot_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70020,(1),null);
var snap_opposite_angle_QMARK_ = (function (){var and__5023__auto__ = (!((rot_angle == null)));
if(and__5023__auto__){
var and__5023__auto____$1 = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"alt?","alt?",-1427998432).cljs$core$IFn$_invoke$arity$1(position);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (((180) - initial_angle) > 0.1);
}
})();
if(cljs.core.truth_(and__5023__auto____$1)){
return (((180) - rot_angle) <= (5));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(snap_opposite_angle_QMARK_)){
var rot_handler = app.common.geom.point.rotate(handler__$1,node,((180) - (rot_sign * rot_angle)));
var snap = app.common.geom.point.to_vec(handler__$1,rot_handler);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([position,app.common.geom.point.add(position,snap)], 0));
} else {
var snap = app.main.snap.get_snap_delta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler__$1], null),ranges,d_pos);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([position,app.common.geom.point.add(position,snap)], 0));

}
} else {
return position;
}
});
return beicon.v2.core.map(check_path_snap,beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.path.streams.snap_toggled_stream(),beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$4((function (position,shift_QMARK_,alt_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(position,new cljs.core.Keyword(null,"shift?","shift?",-1034734696),shift_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"alt?","alt?",-1427998432),alt_QMARK_], 0));
}),app.main.streams.mouse_position_shift,app.main.streams.mouse_position_alt,beicon.v2.core.map(app.main.data.workspace.path.streams.to_pixel_snap,app.main.streams.mouse_position))));
});
app.main.data.workspace.path.streams.position_stream = (function app$main$data$workspace$path$streams$position_stream(state){
var zoom = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),(1));
var d_pos = ((10) / zoom);
var get_content = (function (p1__70024_SHARP_){
return app.main.data.workspace.path.state.get_path.cljs$core$IFn$_invoke$arity$variadic(p1__70024_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0));
});
var content_stream = beicon.v2.core.from_atom.cljs$core$IFn$_invoke$arity$2(okulary.core.derived.cljs$core$IFn$_invoke$arity$2(get_content,app.main.store.state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"emit-current-value?","emit-current-value?",56289147),true], null));
var ranges_stream = beicon.v2.core.map(app.main.snap.create_ranges,beicon.v2.core.map(app.common.types.path.get_points,beicon.v2.core.filter(cljs.core.some_QMARK_,content_stream)));
return beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$4((function (position,shift_QMARK_,alt_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(position,new cljs.core.Keyword(null,"shift?","shift?",-1034734696),shift_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"alt?","alt?",-1427998432),alt_QMARK_], 0));
}),app.main.streams.mouse_position_shift,app.main.streams.mouse_position_alt,beicon.v2.core.map((function (p__70028){
var vec__70029 = p__70028;
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70029,(0),null);
var ranges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70029,(1),null);
var snap_toggled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70029,(2),null);
if(cljs.core.truth_(snap_toggled)){
var snap = app.main.snap.get_snap_delta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [position], null),ranges,d_pos);
return app.common.geom.point.add(position,snap);
} else {
return position;
}
}),beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$3(ranges_stream,app.main.data.workspace.path.streams.snap_toggled_stream(),beicon.v2.core.map(app.main.data.workspace.path.streams.to_pixel_snap,app.main.streams.mouse_position))));
});

//# sourceMappingURL=app.main.data.workspace.path.streams.js.map
