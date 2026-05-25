import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.shapes.flex_layout.js";
import "./app.common.geom.shapes.grid_layout.js";
import "./app.common.math.js";
import "./app.common.types.container.js";
import "./app.common.types.modifiers.js";
import "./app.common.types.shape.js";
import "./app.common.types.shape_tree.js";
import "./app.common.types.shape.layout.js";
import "./app.common.uuid.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.drawing.common.js";
import "./app.main.snap.js";
import "./app.main.streams.js";
import "./app.util.array.js";
import "./app.util.mouse.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.drawing.box');
app.main.data.workspace.drawing.box.adjust_ratio = (function app$main$data$workspace$drawing$box$adjust_ratio(point,initial){
var v = app.common.geom.point.to_vec(point,initial);
var dx = app.common.math.abs(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v));
var dy = app.common.math.abs(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v));
var sx = app.common.math.sign(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v));
var sy = app.common.math.sign(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v));
var G__49349 = point;
var G__49349__$1 = (((dx > dy))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49349,new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point) - (sy * (dx - dy)))):G__49349);
if((dy > dx)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49349__$1,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point) - (sx * (dy - dx))));
} else {
return G__49349__$1;
}
});
app.main.data.workspace.drawing.box.resize_shape = (function app$main$data$workspace$drawing$box$resize_shape(p__49351,initial,point,lock_QMARK_,mod_QMARK_,snap_pixel_QMARK_){
var map__49352 = p__49351;
var map__49352__$1 = cljs.core.__destructure_map(map__49352);
var shape = map__49352__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49352__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49352__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49352__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49352__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if((((!((x == null)))) && ((((!((y == null)))) && ((((!((width == null)))) && ((!((height == null)))))))))){
var draw_rect = (function (){var G__49354 = app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$2(initial,(function (){var G__49355 = point;
if(cljs.core.truth_(lock_QMARK_)){
return app.main.data.workspace.drawing.box.adjust_ratio(G__49355,initial);
} else {
return G__49355;
}
})());
if(cljs.core.truth_(snap_pixel_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49354,new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.max,(1)),new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.max,(1));
} else {
return G__49354;
}
})();
var shape_rect = app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(x,y,width,height);
var scalev = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(draw_rect) / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(shape_rect)),(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(draw_rect) / new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(shape_rect)));
var movev = app.common.geom.point.to_vec(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(shape_rect),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(draw_rect));
return app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"click-draw?","click-draw?",-1784736640),false),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mod?","mod?",964661324),mod_QMARK_], null)),app.common.types.modifiers.move.cljs$core$IFn$_invoke$arity$2(app.common.types.modifiers.resize.cljs$core$IFn$_invoke$arity$3(app.common.types.modifiers.empty(),scalev,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y)),movev));
} else {
return shape;
}
});
app.main.data.workspace.drawing.box.update_drawing = (function app$main$data$workspace$drawing$box$update_drawing(state,initial,point,lock_QMARK_,mod_QMARK_,snap_pixel_QMARK_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973),new cljs.core.Keyword(null,"object","object",1474613949)], null),app.main.data.workspace.drawing.box.resize_shape,initial,point,lock_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mod_QMARK_,snap_pixel_QMARK_], 0));
});
app.main.data.workspace.drawing.box.move_drawing = (function app$main$data$workspace$drawing$box$move_drawing(p__49356){
var map__49357 = p__49356;
var map__49357__$1 = cljs.core.__destructure_map(map__49357);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49357__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49357__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return (function (state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973),new cljs.core.Keyword(null,"object","object",1474613949)], null),app.common.geom.shapes.absolute_move,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y));
});
});
app.main.data.workspace.drawing.box.handle_drawing = (function app$main$data$workspace$drawing$box$handle_drawing(type){
if((typeof app.main.data.workspace.drawing.box.handle_drawing_49361 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.drawing.box.handle_drawing_49361 = (function (type,meta49362){
this.type = type;
this.meta49362 = meta49362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.drawing.box.handle_drawing_49361.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.box.handle_drawing_49361.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.drawing.box","handle-drawing","app.main.data.workspace.drawing.box/handle-drawing",1605587535);
}));

(app.main.data.workspace.drawing.box.handle_drawing_49361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49363,meta49362__$1){
var self__ = this;
var _49363__$1 = this;
return (new app.main.data.workspace.drawing.box.handle_drawing_49361(self__.type,meta49362__$1));
}));

(app.main.data.workspace.drawing.box.handle_drawing_49361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49363){
var self__ = this;
var _49363__$1 = this;
return self__.meta49362;
}));

(app.main.data.workspace.drawing.box.handle_drawing_49361.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.box.handle_drawing_49361.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var stopper = app.util.mouse.drag_stopper.cljs$core$IFn$_invoke$arity$1(stream);
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-layout","workspace-layout",420938173));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(1));
var snap_pixel_QMARK_ = cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"snap-pixel-grid","snap-pixel-grid",-1263132602));
var initial = (function (){var G__49367 = cljs.core.deref(app.main.streams.mouse_position);
if(snap_pixel_QMARK_){
return app.common.geom.point.round_step(G__49367,(1));
} else {
return G__49367;
}
})();
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var focus = new cljs.core.Keyword(null,"workspace-focus-selected","workspace-focus-selected",978051257).cljs$core$IFn$_invoke$arity$1(state);
var fid = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(app.common.types.container.get_first_valid_parent(objects,app.common.types.shape_tree.top_nested_frame.cljs$core$IFn$_invoke$arity$2(objects,initial)));
var flex_layout_QMARK_ = app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,fid);
var grid_layout_QMARK_ = app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,fid);
var drop_index = (cljs.core.truth_(flex_layout_QMARK_)?app.common.geom.shapes.flex_layout.get_drop_index(fid,objects,initial):null);
var drop_cell = (cljs.core.truth_(grid_layout_QMARK_)?app.common.geom.shapes.grid_layout.get_drop_cell(fid,objects,initial):null);
var shape = (function (){var G__49370 = (function (){var G__49371 = app.common.types.shape.setup_shape(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),self__.type,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(initial),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(initial),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),fid,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),fid,new cljs.core.Keyword(null,"initialized?","initialized?",1707939066),true,new cljs.core.Keyword(null,"click-draw?","click-draw?",-1784736640),true,new cljs.core.Keyword(null,"hide-in-viewer","hide-in-viewer",1478442312),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,new cljs.core.Keyword(null,"frame","frame",-1711082588))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fid,app.common.uuid.zero)))], null));
if((!((drop_index == null)))){
return cljs.core.with_meta(G__49371,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),drop_index], null));
} else {
return G__49371;
}
})();
if((!((drop_cell == null)))){
return cljs.core.with_meta(G__49370,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cell","cell",764245084),drop_cell], null));
} else {
return G__49370;
}
})();
return beicon.v2.core.concat(beicon.v2.core.of((function (p1__49358_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(p1__49358_SHARP_,new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973),cljs.core.assoc,new cljs.core.Keyword(null,"object","object",1474613949),shape);
})),beicon.v2.core.concat(beicon.v2.core.map(app.main.data.workspace.drawing.box.move_drawing,app.main.snap.closest_snap_point(page_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null),objects,layout,zoom,focus,initial)),beicon.v2.core.map((function (p__49375){
var vec__49376 = p__49375;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49376,(0),null);
var shift_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49376,(1),null);
var mod_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49376,(2),null);
var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49376,(3),null);
return (function (p1__49360_SHARP_){
return app.main.data.workspace.drawing.box.update_drawing(p1__49360_SHARP_,initial,(function (){var G__49379 = point;
if(snap_pixel_QMARK_){
return app.common.geom.point.round_step(G__49379,(1));
} else {
return G__49379;
}
})(),shift_QMARK_,mod_QMARK_,snap_pixel_QMARK_);
});
}),beicon.v2.core.switch_map((function (p__49381){
var vec__49382 = p__49381;
var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49382,(0),null);
var current = vec__49382;
return beicon.v2.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.util.array.conj,current),app.main.snap.closest_snap_point(page_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null),objects,layout,zoom,focus,point));
}),beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$3(app.main.streams.mouse_position_shift,app.main.streams.mouse_position_mod,beicon.v2.core.take_until(stopper,beicon.v2.core.filter((function (p1__49359_SHARP_){
return ((app.common.geom.point.distance(p1__49359_SHARP_,initial) * zoom) > (10));
}),app.main.streams.mouse_position)))))),beicon.v2.core.delay((100),beicon.v2.core.of(app.main.data.workspace.drawing.common.handle_finish_drawing())));
}));
}

return (new app.main.data.workspace.drawing.box.handle_drawing_49361(type,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.drawing.box.js.map
