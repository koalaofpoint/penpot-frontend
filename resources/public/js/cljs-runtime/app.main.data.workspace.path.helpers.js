import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.geom.point.js";
import "./app.common.math.js";
import "./app.common.types.path.js";
import "./app.common.types.path.helpers.js";
goog.provide('app.main.data.workspace.path.helpers');
/**
 * Creates a new node in the path. Usually used when drawing.
 */
app.main.data.workspace.path.helpers.append_node = (function app$main$data$workspace$path$helpers$append_node(shape,position,prev_point,prev_handler){
var segment = app.common.types.path.next_node(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape),position,prev_point,prev_handler);
return app.common.types.path.update_geometry.cljs$core$IFn$_invoke$arity$1(cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"content","content",15833224),app.common.types.path.append_segment,segment));
});
app.main.data.workspace.path.helpers.angle_points = (function app$main$data$workspace$path$helpers$angle_points(common,p1,p2){
return app.common.math.abs(app.common.geom.point.angle_with_other(app.common.geom.point.to_vec(common,p1),app.common.geom.point.to_vec(common,p2)));
});
app.main.data.workspace.path.helpers.calculate_opposite_delta = (function app$main$data$workspace$path$helpers$calculate_opposite_delta(node,handler,opposite,match_angle_QMARK_,match_distance_QMARK_,dx,dy){
if((((!((handler == null)))) && ((!((opposite == null)))))){
var angle_handlers = app.main.data.workspace.path.helpers.angle_points(node,handler,opposite);
var match_angle_QMARK___$1 = (function (){var and__5023__auto__ = match_angle_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (app.common.math.abs(((180) - angle_handlers)) <= 0.1);
} else {
return and__5023__auto__;
}
})();
var match_distance_QMARK___$1 = (function (){var and__5023__auto__ = match_distance_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return app.common.math.almost_zero_QMARK_((app.common.geom.point.distance(node,handler) - app.common.geom.point.distance(node,opposite)));
} else {
return and__5023__auto__;
}
})();
var new_handler = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(handler,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,dx),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,dy);
var v1 = app.common.geom.point.to_vec(node,handler);
var v2 = app.common.geom.point.to_vec(node,new_handler);
var delta_angle = app.common.geom.point.angle_with_other(v1,v2);
var delta_sign = app.common.geom.point.angle_sign(v1,v2);
var distance_scale = (app.common.geom.point.distance(node,handler) / app.common.geom.point.distance(node,new_handler));
var new_opposite = (function (){var G__69975 = opposite;
var G__69975__$1 = (cljs.core.truth_(match_angle_QMARK___$1)?app.common.geom.point.rotate(G__69975,node,(delta_sign * delta_angle)):G__69975);
if(cljs.core.truth_(match_distance_QMARK___$1)){
return app.common.geom.point.scale_from(G__69975__$1,node,distance_scale);
} else {
return G__69975__$1;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new_opposite) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opposite)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new_opposite) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opposite))], null);
} else {
return null;
}
});
app.main.data.workspace.path.helpers.move_handler_modifiers = (function app$main$data$workspace$path$helpers$move_handler_modifiers(content,index,prefix,match_distance_QMARK_,match_angle_QMARK_,dx,dy){
var vec__69979 = app.common.types.path.helpers.prefix__GT_coords(prefix);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69979,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69979,(1),null);
var vec__69982 = app.common.types.path.opposite_index(content,index,prefix);
var op_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69982,(0),null);
var op_prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69982,(1),null);
var node = app.common.types.path.handler__GT_node(content,index,prefix);
var handler = app.common.types.path.get_handler_point(content,index,prefix);
var opposite = app.common.types.path.get_handler_point(content,op_idx,op_prefix);
var vec__69985 = app.common.types.path.helpers.prefix__GT_coords(op_prefix);
var ocx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69985,(0),null);
var ocy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69985,(1),null);
var vec__69988 = app.main.data.workspace.path.helpers.calculate_opposite_delta(node,handler,opposite,match_angle_QMARK_,match_distance_QMARK_,dx,dy);
var odx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69988,(0),null);
var ody = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69988,(1),null);
var hnv = (((!((handler == null))))?app.common.geom.point.to_vec(node,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(handler,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,dx),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,dy)):app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(dx,dy));
var G__69991 = cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,index,cljs.core.assoc,cx,dx,cy,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dy], 0));
var G__69991__$1 = (((((!((op_idx == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(opposite,node))))?cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(G__69991,op_idx,cljs.core.assoc,ocx,odx,ocy,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ody], 0)):G__69991);
if(cljs.core.truth_((function (){var and__5023__auto__ = (!((op_idx == null)));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opposite,node);
if(and__5023__auto____$1){
var and__5023__auto____$2 = match_distance_QMARK_;
if(cljs.core.truth_(and__5023__auto____$2)){
return match_angle_QMARK_;
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(G__69991__$1,op_idx,cljs.core.assoc,ocx,(- new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(hnv)),ocy,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(- new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(hnv))], 0));
} else {
return G__69991__$1;
}
});

//# sourceMappingURL=app.main.data.workspace.path.helpers.js.map
