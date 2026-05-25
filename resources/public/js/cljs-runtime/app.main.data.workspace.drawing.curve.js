import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.flex_layout.js";
import "./app.common.geom.shapes.grid_layout.js";
import "./app.common.types.container.js";
import "./app.common.types.path.js";
import "./app.common.types.shape.js";
import "./app.common.types.shape_tree.js";
import "./app.common.types.shape.layout.js";
import "./app.common.uuid.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.drawing.common.js";
import "./app.main.streams.js";
import "./app.util.mouse.js";
import "./app.util.path.simplify_curve.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.drawing.curve');
app.main.data.workspace.drawing.curve.simplify_tolerance = 0.3;
app.main.data.workspace.drawing.curve.setup_frame = (function app$main$data$workspace$drawing$curve$setup_frame(){
if((typeof app.main.data.workspace.drawing.curve.setup_frame_49364 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.drawing.curve.setup_frame_49364 = (function (meta49365){
this.meta49365 = meta49365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.drawing.curve.setup_frame_49364.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.curve.setup_frame_49364.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.drawing.curve","setup-frame","app.main.data.workspace.drawing.curve/setup-frame",149327428);
}));

(app.main.data.workspace.drawing.curve.setup_frame_49364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49366,meta49365__$1){
var self__ = this;
var _49366__$1 = this;
return (new app.main.data.workspace.drawing.curve.setup_frame_49364(meta49365__$1));
}));

(app.main.data.workspace.drawing.curve.setup_frame_49364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49366){
var self__ = this;
var _49366__$1 = this;
return self__.meta49365;
}));

(app.main.data.workspace.drawing.curve.setup_frame_49364.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.curve.setup_frame_49364.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973)),new cljs.core.Keyword(null,"object","object",1474613949)),new cljs.core.Keyword(null,"content","content",15833224));
var position = app.common.types.path.get_handler_point(content,(0),null);
var frame_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(app.common.types.container.get_first_valid_parent(objects,app.common.types.shape_tree.top_nested_frame.cljs$core$IFn$_invoke$arity$2(objects,position)));
var flex_layout_QMARK_ = app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
var grid_layout_QMARK_ = app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
var drop_index = (cljs.core.truth_(flex_layout_QMARK_)?app.common.geom.shapes.flex_layout.get_drop_index(frame_id,objects,position):null);
var drop_cell = (cljs.core.truth_(grid_layout_QMARK_)?app.common.geom.shapes.grid_layout.get_drop_cell(frame_id,objects,position):null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973),new cljs.core.Keyword(null,"object","object",1474613949)], null),(function (object){
var G__49368 = (function (){var G__49369 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(object,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),frame_id);
if((!((drop_index == null)))){
return cljs.core.with_meta(G__49369,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),drop_index], null));
} else {
return G__49369;
}
})();
if((!((drop_cell == null)))){
return cljs.core.with_meta(G__49368,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cell","cell",764245084),drop_cell], null));
} else {
return G__49368;
}
}));
}));
}

return (new app.main.data.workspace.drawing.curve.setup_frame_49364(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.drawing.curve.insert_point = (function app$main$data$workspace$drawing$curve$insert_point(point){
if((typeof app.main.data.workspace.drawing.curve.insert_point_49372 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.drawing.curve.insert_point_49372 = (function (point,meta49373){
this.point = point;
this.meta49373 = meta49373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.drawing.curve.insert_point_49372.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.curve.insert_point_49372.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.drawing.curve","insert-point","app.main.data.workspace.drawing.curve/insert-point",-997179771);
}));

(app.main.data.workspace.drawing.curve.insert_point_49372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49374,meta49373__$1){
var self__ = this;
var _49374__$1 = this;
return (new app.main.data.workspace.drawing.curve.insert_point_49372(self__.point,meta49373__$1));
}));

(app.main.data.workspace.drawing.curve.insert_point_49372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49374){
var self__ = this;
var _49374__$1 = this;
return self__.meta49373;
}));

(app.main.data.workspace.drawing.curve.insert_point_49372.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.curve.insert_point_49372.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973),new cljs.core.Keyword(null,"object","object",1474613949)], null),(function (object){
var points = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.drawing.curve","points","app.main.data.workspace.drawing.curve/points",1859601459).cljs$core$IFn$_invoke$arity$1(object),self__.point);
var content = app.common.types.path.points__GT_content(points);
var selrect = app.common.types.path.calc_selrect(content);
var points_SINGLEQUOTE_ = app.common.geom.rect.rect__GT_points(selrect);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(object,new cljs.core.Keyword("app.main.data.workspace.drawing.curve","points","app.main.data.workspace.drawing.curve/points",1859601459),points),new cljs.core.Keyword(null,"content","content",15833224),content),new cljs.core.Keyword(null,"selrect","selrect",1966287292),selrect),new cljs.core.Keyword(null,"points","points",-1486596883),points_SINGLEQUOTE_);
}));
}));
}

return (new app.main.data.workspace.drawing.curve.insert_point_49372(point,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.drawing.curve.finish_drawing = (function app$main$data$workspace$drawing$curve$finish_drawing(){
if((typeof app.main.data.workspace.drawing.curve.finish_drawing_49385 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.drawing.curve.finish_drawing_49385 = (function (meta49386){
this.meta49386 = meta49386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.drawing.curve.finish_drawing_49385.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.curve.finish_drawing_49385.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.drawing.curve","finish-drawing","app.main.data.workspace.drawing.curve/finish-drawing",-1275239528);
}));

(app.main.data.workspace.drawing.curve.finish_drawing_49385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49387,meta49386__$1){
var self__ = this;
var _49387__$1 = this;
return (new app.main.data.workspace.drawing.curve.finish_drawing_49385(meta49386__$1));
}));

(app.main.data.workspace.drawing.curve.finish_drawing_49385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49387){
var self__ = this;
var _49387__$1 = this;
return self__.meta49386;
}));

(app.main.data.workspace.drawing.curve.finish_drawing_49385.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.curve.finish_drawing_49385.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973),new cljs.core.Keyword(null,"object","object",1474613949)], null),(function (p__49389){
var map__49393 = p__49389;
var map__49393__$1 = cljs.core.__destructure_map(map__49393);
var shape = map__49393__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49393__$1,new cljs.core.Keyword("app.main.data.workspace.drawing.curve","points","app.main.data.workspace.drawing.curve/points",1859601459));
var points__$1 = app.util.path.simplify_curve.simplify.cljs$core$IFn$_invoke$arity$2(points,0.3);
var content = app.common.types.path.points__GT_content(points__$1);
var selrect = app.common.types.path.calc_selrect(content);
var points__$2 = app.common.geom.rect.rect__GT_points(selrect);
var G__49394 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword("app.main.data.workspace.drawing.curve","points","app.main.data.workspace.drawing.curve/points",1859601459)),new cljs.core.Keyword(null,"content","content",15833224),content),new cljs.core.Keyword(null,"selrect","selrect",1966287292),selrect),new cljs.core.Keyword(null,"points","points",-1486596883),points__$2);
if(((cljs.core.empty_QMARK_(points__$2)) || ((((selrect == null)) || ((cljs.core.count(content) <= (1))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49394,new cljs.core.Keyword(null,"initialized?","initialized?",1707939066),false);
} else {
return G__49394;
}
}));
}));
}

return (new app.main.data.workspace.drawing.curve.finish_drawing_49385(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.drawing.curve.handle_drawing = (function app$main$data$workspace$drawing$curve$handle_drawing(){
if((typeof app.main.data.workspace.drawing.curve.handle_drawing_49399 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.drawing.curve.handle_drawing_49399 = (function (meta49400){
this.meta49400 = meta49400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.drawing.curve.handle_drawing_49399.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.curve.handle_drawing_49399.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.drawing.curve","handle-drawing","app.main.data.workspace.drawing.curve/handle-drawing",571234859);
}));

(app.main.data.workspace.drawing.curve.handle_drawing_49399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49401,meta49400__$1){
var self__ = this;
var _49401__$1 = this;
return (new app.main.data.workspace.drawing.curve.handle_drawing_49399(meta49400__$1));
}));

(app.main.data.workspace.drawing.curve.handle_drawing_49399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49401){
var self__ = this;
var _49401__$1 = this;
return self__.meta49400;
}));

(app.main.data.workspace.drawing.curve.handle_drawing_49399.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.curve.handle_drawing_49399.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
var stopper = app.util.mouse.drag_stopper.cljs$core$IFn$_invoke$arity$1(stream);
var mouse = beicon.v2.core.sample((10),app.main.streams.mouse_position);
var shape = app.common.types.shape.setup_shape(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"initialized?","initialized?",1707939066),true,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),app.common.uuid.zero,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),app.common.uuid.zero,new cljs.core.Keyword("app.main.data.workspace.drawing.curve","points","app.main.data.workspace.drawing.curve/points",1859601459),cljs.core.PersistentVector.EMPTY], null));
return beicon.v2.core.concat(beicon.v2.core.of((function (p1__49398_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(p1__49398_SHARP_,new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973),cljs.core.assoc,new cljs.core.Keyword(null,"object","object",1474613949),shape);
})),beicon.v2.core.take_until(stopper,beicon.v2.core.map(app.main.data.workspace.drawing.curve.insert_point,mouse)),beicon.v2.core.of(app.main.data.workspace.drawing.curve.setup_frame(),app.main.data.workspace.drawing.curve.finish_drawing(),app.main.data.workspace.drawing.common.handle_finish_drawing()));
}));
}

return (new app.main.data.workspace.drawing.curve.handle_drawing_49399(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.drawing.curve.js.map
