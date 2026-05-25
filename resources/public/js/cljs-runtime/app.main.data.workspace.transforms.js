import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.modifiers.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.shapes.flex_layout.js";
import "./app.common.geom.shapes.grid_layout.js";
import "./app.common.logic.shapes.js";
import "./app.common.math.js";
import "./app.common.types.component.js";
import "./app.common.types.container.js";
import "./app.common.types.modifiers.js";
import "./app.common.types.shape_tree.js";
import "./app.common.types.shape.attrs.js";
import "./app.common.types.shape.layout.js";
import "./app.common.uuid.js";
import "./app.main.data.changes.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.collapse.js";
import "./app.main.data.workspace.modifiers.js";
import "./app.main.data.workspace.selection.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.features.js";
import "./app.main.snap.js";
import "./app.main.store.js";
import "./app.main.streams.js";
import "./app.render_wasm.api.js";
import "./app.util.array.js";
import "./app.util.dom.js";
import "./app.util.keyboard.js";
import "./app.util.mouse.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.transforms');
app.main.data.workspace.transforms.get_handler_multiplier = (function app$main$data$workspace$transforms$get_handler_multiplier(handler){
var G__49018 = handler;
var G__49018__$1 = (((G__49018 instanceof cljs.core.Keyword))?G__49018.fqn:null);
switch (G__49018__$1) {
case "right":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((1),(0));

break;
case "bottom":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(1));

break;
case "left":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((-1),(0));

break;
case "top":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(-1));

break;
case "top-right":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((1),(-1));

break;
case "top-left":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((-1),(-1));

break;
case "bottom-right":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((1),(1));

break;
case "bottom-left":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((-1),(1));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49018__$1)].join('')));

}
});
/**
 * Given a handler, return the coordinate origin for resizes.
 * This is the opposite of the handler so for right we want the
 * left side as origin of the resize.
 * 
 * sx, sy => start x/y
 * mx, my => middle x/y
 * ex, ey => end x/y
 *   
 */
app.main.data.workspace.transforms.get_handler_resize_origin = (function app$main$data$workspace$transforms$get_handler_resize_origin(selrect,handler){
var sx = (selrect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x","x",2099068185)));
var sy = (selrect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y","y",-1757859776)));
var width = (selrect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"width","width",-384071477)));
var height = (selrect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"height","height",1025178622)));
var mx = (sx + (width / (2)));
var my = (sy + (height / (2)));
var ex = (sx + width);
var ey = (sy + height);
var G__49022 = handler;
var G__49022__$1 = (((G__49022 instanceof cljs.core.Keyword))?G__49022.fqn:null);
switch (G__49022__$1) {
case "right":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(sx,my);

break;
case "bottom":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(mx,sy);

break;
case "left":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(ex,my);

break;
case "top":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(mx,ey);

break;
case "top-right":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(sx,ey);

break;
case "top-left":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(ex,ey);

break;
case "bottom-right":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(sx,sy);

break;
case "bottom-left":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(ex,sy);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49022__$1)].join('')));

}
});
/**
 * Fix the initial point so the resizes are accurate
 */
app.main.data.workspace.transforms.fix_init_point = (function app$main$data$workspace$transforms$fix_init_point(initial,handler,shape){
var selrect = (shape?.selrect?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"selrect","selrect",1966287292)));
var x = (selrect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (selrect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y","y",-1757859776)));
var width = (selrect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"width","width",-384071477)));
var height = (selrect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"height","height",1025178622)));
var G__49038 = handler;
var G__49038__$1 = (((G__49038 instanceof cljs.core.Keyword))?G__49038.fqn:null);
switch (G__49038__$1) {
case "left":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial,new cljs.core.Keyword(null,"x","x",2099068185),x);

break;
case "top":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial,new cljs.core.Keyword(null,"y","y",-1757859776),y);

break;
case "top-left":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial,new cljs.core.Keyword(null,"x","x",2099068185),x),new cljs.core.Keyword(null,"y","y",-1757859776),y);

break;
case "bottom-left":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial,new cljs.core.Keyword(null,"x","x",2099068185),x),new cljs.core.Keyword(null,"y","y",-1757859776),(y + height));

break;
case "right":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial,new cljs.core.Keyword(null,"x","x",2099068185),(x + width));

break;
case "top-right":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial,new cljs.core.Keyword(null,"x","x",2099068185),(x + width)),new cljs.core.Keyword(null,"y","y",-1757859776),y);

break;
case "bottom-right":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial,new cljs.core.Keyword(null,"x","x",2099068185),(x + width)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + height));

break;
case "bottom":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial,new cljs.core.Keyword(null,"y","y",-1757859776),(y + height));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49038__$1)].join('')));

}
});
app.main.data.workspace.transforms.finish_transform = (function app$main$data$workspace$transforms$finish_transform(){
if((typeof app.main.data.workspace.transforms.finish_transform_49039 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.transforms.finish_transform_49039 = (function (meta49040){
this.meta49040 = meta49040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.finish_transform_49039.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.finish_transform_49039.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.transforms","finish-transform","app.main.data.workspace.transforms/finish-transform",-1801177009);
}));

(app.main.data.workspace.transforms.finish_transform_49039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49041,meta49040__$1){
var self__ = this;
var _49041__$1 = this;
return (new app.main.data.workspace.transforms.finish_transform_49039(meta49040__$1));
}));

(app.main.data.workspace.transforms.finish_transform_49039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49041){
var self__ = this;
var _49041__$1 = this;
return self__.meta49040;
}));

(app.main.data.workspace.transforms.finish_transform_49039.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.finish_transform_49039.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),cljs.core.dissoc,new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"duplicate-move-started?","duplicate-move-started?",-158515824)),new cljs.core.Keyword(null,"workspace-selrect","workspace-selrect",683668588),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"workspace-wasm-modifiers","workspace-wasm-modifiers",-1284490597)], 0));
}));
}

return (new app.main.data.workspace.transforms.finish_transform_49039(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
*/
app.main.data.workspace.transforms.t_app$main$data$workspace$transforms49079 = (function (handler,ids,shape,resize,normalize_proportion_lock,meta49080){
this.handler = handler;
this.ids = ids;
this.shape = shape;
this.resize = resize;
this.normalize_proportion_lock = normalize_proportion_lock;
this.meta49080 = meta49080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.t_app$main$data$workspace$transforms49079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49081,meta49080__$1){
var self__ = this;
var _49081__$1 = this;
return (new app.main.data.workspace.transforms.t_app$main$data$workspace$transforms49079(self__.handler,self__.ids,self__.shape,self__.resize,self__.normalize_proportion_lock,meta49080__$1));
}));

(app.main.data.workspace.transforms.t_app$main$data$workspace$transforms49079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49081){
var self__ = this;
var _49081__$1 = this;
return self__.meta49080;
}));

(app.main.data.workspace.transforms.t_app$main$data$workspace$transforms49079.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.t_app$main$data$workspace$transforms49079.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"transform","transform",1381301764)], null),new cljs.core.Keyword(null,"resize","resize",297367086));
}));

(app.main.data.workspace.transforms.t_app$main$data$workspace$transforms49079.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.t_app$main$data$workspace$transforms49079.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"blocked","blocked",181326681).cljs$core$IFn$_invoke$arity$1(self__.shape))){
return beicon.v2.core.empty();
} else {
var initial_position = cljs.core.deref(app.main.streams.mouse_position);
var stopper = app.util.mouse.drag_stopper.cljs$core$IFn$_invoke$arity$1(stream);
var layout = new cljs.core.Keyword(null,"workspace-layout","workspace-layout",420938173).cljs$core$IFn$_invoke$arity$1(state);
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var focus = new cljs.core.Keyword(null,"workspace-focus-selected","workspace-focus-selected",978051257).cljs$core$IFn$_invoke$arity$1(state);
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(1));
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var shape_ids = cljs.core.filterv(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,new cljs.core.Keyword(null,"blocked","blocked",181326681),app.common.data.getf(objects)),self__.ids);
if(cljs.core.empty_QMARK_(shape_ids)){
return beicon.v2.core.empty();
} else {
var shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),shape_ids);
var resize_events_stream = beicon.v2.core.share(beicon.v2.core.map((function (p1__49051_SHARP_){
return (self__.resize.cljs$core$IFn$_invoke$arity$5 ? self__.resize.cljs$core$IFn$_invoke$arity$5(self__.shape,initial_position,layout,objects,p1__49051_SHARP_) : self__.resize.call(null,self__.shape,initial_position,layout,objects,p1__49051_SHARP_));
}),beicon.v2.core.switch_map((function (p__49087){
var vec__49089 = p__49087;
var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49089,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49089,(1),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49089,(2),null);
var current = vec__49089;
return beicon.v2.core.map((function (p1__49050_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,p1__49050_SHARP_);
}),app.main.snap.closest_snap_point(page_id,shapes,objects,layout,zoom,focus,point));
}),beicon.v2.core.map(self__.normalize_proportion_lock,beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$3(app.main.streams.mouse_position_shift,app.main.streams.mouse_position_alt,beicon.v2.core.filter(cljs.core.some_QMARK_,app.main.streams.mouse_position))))));
var modifiers_stream = (cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))?beicon.v2.core.merge(beicon.v2.core.take_until(stopper,beicon.v2.core.mapcat((function (modifiers){
var modif_tree = app.main.data.workspace.modifiers.create_modif_tree(shape_ids,modifiers);
return beicon.v2.core.of(app.main.data.workspace.modifiers.set_wasm_modifiers.cljs$core$IFn$_invoke$arity$variadic(modif_tree,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ignore-constraints","ignore-constraints",-1221464851),cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"scale-text","scale-text",302781380))], 0)));
}),resize_events_stream)),beicon.v2.core.map((function (p1__49053_SHARP_){
return app.main.data.workspace.modifiers.apply_wasm_modifiers.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.modifiers.create_modif_tree(shape_ids,p1__49053_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ignore-constraints","ignore-constraints",-1221464851),cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"scale-text","scale-text",302781380))], 0));
}),beicon.v2.core.last(beicon.v2.core.take_until(stopper,resize_events_stream)))):beicon.v2.core.take_until(stopper,beicon.v2.core.mapcat((function (modifiers){
var modif_tree = app.main.data.workspace.modifiers.create_modif_tree(shape_ids,modifiers);
return beicon.v2.core.of(app.main.data.workspace.modifiers.set_modifiers.cljs$core$IFn$_invoke$arity$2(modif_tree,cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"scale-text","scale-text",302781380))));
}),resize_events_stream)));
return beicon.v2.core.concat(beicon.v2.core.mapcat((function (){
return modifiers_stream;
}),beicon.v2.core.take_until(stopper,beicon.v2.core.take((1),beicon.v2.core.filter((function (p1__49056_SHARP_){
return (p1__49056_SHARP_ > ((10) / zoom));
}),beicon.v2.core.map((function (p1__49055_SHARP_){
return app.common.geom.point.length(p1__49055_SHARP_);
}),beicon.v2.core.map((function (p1__49054_SHARP_){
return app.common.geom.point.to_vec(initial_position,p1__49054_SHARP_);
}),app.main.streams.mouse_position)))))),(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))?beicon.v2.core.of(app.main.data.workspace.transforms.finish_transform()):beicon.v2.core.of(app.main.data.workspace.modifiers.apply_modifiers.cljs$core$IFn$_invoke$arity$0(),app.main.data.workspace.transforms.finish_transform())));
}
}
}));

(app.main.data.workspace.transforms.t_app$main$data$workspace$transforms49079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"ids","ids",641995731,null),new cljs.core.Symbol(null,"shape","shape",-1463741763,null),new cljs.core.Symbol(null,"resize","resize",1937898613,null),new cljs.core.Symbol(null,"normalize-proportion-lock","normalize-proportion-lock",195435937,null),new cljs.core.Symbol(null,"meta49080","meta49080",-145446503,null)], null);
}));

(app.main.data.workspace.transforms.t_app$main$data$workspace$transforms49079.cljs$lang$type = true);

(app.main.data.workspace.transforms.t_app$main$data$workspace$transforms49079.cljs$lang$ctorStr = "app.main.data.workspace.transforms/t_app$main$data$workspace$transforms49079");

(app.main.data.workspace.transforms.t_app$main$data$workspace$transforms49079.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.main.data.workspace.transforms/t_app$main$data$workspace$transforms49079");
}));

/**
 * Positional factory function for app.main.data.workspace.transforms/t_app$main$data$workspace$transforms49079.
 */
app.main.data.workspace.transforms.__GT_t_app$main$data$workspace$transforms49079 = (function app$main$data$workspace$transforms$__GT_t_app$main$data$workspace$transforms49079(handler,ids,shape,resize,normalize_proportion_lock,meta49080){
return (new app.main.data.workspace.transforms.t_app$main$data$workspace$transforms49079(handler,ids,shape,resize,normalize_proportion_lock,meta49080));
});


/**
 * Enter mouse resize mode, until mouse button is released.
 */
app.main.data.workspace.transforms.start_resize = (function app$main$data$workspace$transforms$start_resize(handler,ids,shape){
var resize = (function app$main$data$workspace$transforms$start_resize_$_resize(shape__$1,initial,layout,objects,p__49069){
var vec__49070 = p__49069;
var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49070,(0),null);
var lock_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49070,(1),null);
var center_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49070,(2),null);
var point_snap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49070,(3),null);
var selrect = (shape__$1?.selrect?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292)));
var width = (selrect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"width","width",-384071477)));
var height = (selrect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"height","height",1025178622)));
var rotation = (shape__$1?.rotation?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644)));
var shape_center = app.common.geom.shapes.shape__GT_center(shape__$1);
var shape_transform = new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(shape__$1);
var shape_transform_inverse = new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$1(shape__$1);
var rotation__$1 = (function (){var or__5025__auto__ = rotation;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var initial__$1 = app.common.geom.matrix.transform_point_center(initial,shape_center,shape_transform_inverse);
var initial__$2 = app.main.data.workspace.transforms.fix_init_point(initial__$1,handler,shape__$1);
var point__$1 = app.common.geom.matrix.transform_point_center(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rotation__$1,(0)))?point_snap:point),shape_center,shape_transform_inverse);
var shapev = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(width,height);
var scale_text = cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"scale-text","scale-text",302781380));
var lock_QMARK___$1 = ((lock_QMARK_) || (scale_text));
var deltav = app.common.geom.point.multiply(app.common.geom.point.to_vec(initial__$2,point__$1),app.main.data.workspace.transforms.get_handler_multiplier(handler));
var scalev = app.common.geom.point.no_zeros(app.common.geom.point.divide(app.common.geom.point.add(shapev,deltav),shapev));
var scalev__$1 = ((lock_QMARK___$1)?(function (){var v = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(handler,new cljs.core.Keyword(null,"right","right",-452581833))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(handler,new cljs.core.Keyword(null,"left","left",-399115937)))))?(scalev?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(scalev,new cljs.core.Keyword(null,"x","x",2099068185))):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(handler,new cljs.core.Keyword(null,"top","top",-1856271961))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(handler,new cljs.core.Keyword(null,"bottom","bottom",-1550509018)))))?(scalev?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(scalev,new cljs.core.Keyword(null,"y","y",-1757859776))):Math.max((scalev?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(scalev,new cljs.core.Keyword(null,"x","x",2099068185))),(scalev?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(scalev,new cljs.core.Keyword(null,"y","y",-1757859776))))
));
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(v,v);
})():scalev);
var selrect__$1 = (shape__$1?.selrect?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292)));
var handler_origin = app.main.data.workspace.transforms.get_handler_resize_origin(selrect__$1,handler);
var displacement = ((center_QMARK_)?app.common.geom.point.transform(app.common.geom.point.multiply(app.common.geom.point.subtract(app.common.geom.point.add(app.common.geom.point.multiply(app.common.geom.point.subtract(shape_center,handler_origin),scalev__$1),handler_origin),shape_center),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((-1),(-1))),shape_transform):null);
var resize_origin = app.common.geom.matrix.transform_point_center(handler_origin,shape_center,shape_transform);
var resize_origin__$1 = (((!((displacement == null))))?app.common.geom.point.add(resize_origin,displacement):resize_origin);
var new_grow_type = ((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1))?app.main.data.workspace.modifiers.next_grow_type((shape__$1?.grow_type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"grow-type","grow-type",-908344411))),scalev__$1):null);
var change_width_QMARK_ = cljs.core.not(app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2((scalev__$1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(scalev__$1,new cljs.core.Keyword(null,"x","x",2099068185))),(1)));
var change_height_QMARK_ = cljs.core.not(app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2((scalev__$1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(scalev__$1,new cljs.core.Keyword(null,"y","y",-1757859776))),(1)));
var G__49073 = app.common.types.modifiers.empty();
var G__49073__$1 = (((!((displacement == null))))?app.common.types.modifiers.move.cljs$core$IFn$_invoke$arity$2(G__49073,displacement):G__49073);
var G__49073__$2 = app.common.types.modifiers.resize.cljs$core$IFn$_invoke$arity$5(G__49073__$1,scalev__$1,resize_origin__$1,shape_transform,shape_transform_inverse)
;
var G__49073__$3 = ((((((app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape__$1)) || (app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1)))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(shape__$1),new cljs.core.Keyword(null,"fix","fix",-1031773329))) && (change_width_QMARK_)))))?app.common.types.modifiers.change_property(G__49073__$2,new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),new cljs.core.Keyword(null,"fix","fix",-1031773329)):G__49073__$2);
var G__49073__$4 = ((((((app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape__$1)) || (app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1)))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(shape__$1),new cljs.core.Keyword(null,"fix","fix",-1031773329))) && (change_height_QMARK_)))))?app.common.types.modifiers.change_property(G__49073__$3,new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),new cljs.core.Keyword(null,"fix","fix",-1031773329)):G__49073__$3);
var G__49073__$5 = (cljs.core.truth_((function (){var and__5023__auto__ = new_grow_type;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_grow_type,(shape__$1?.grow_type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"grow-type","grow-type",-908344411))));
} else {
return and__5023__auto__;
}
})())?app.common.types.modifiers.change_property(G__49073__$4,new cljs.core.Keyword(null,"grow-type","grow-type",-908344411),new_grow_type):G__49073__$4);
if(scale_text){
return app.common.types.modifiers.scale_content(G__49073__$5,(scalev__$1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(scalev__$1,new cljs.core.Keyword(null,"x","x",2099068185))));
} else {
return G__49073__$5;
}
});
var normalize_proportion_lock = (function app$main$data$workspace$transforms$start_resize_$_normalize_proportion_lock(p__49075){
var vec__49076 = p__49075;
var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49076,(0),null);
var shift_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49076,(1),null);
var alt_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49076,(2),null);
var proportion_lock_QMARK_ = new cljs.core.Keyword(null,"proportion-lock","proportion-lock",1363898127).cljs$core$IFn$_invoke$arity$1(shape);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,((proportion_lock_QMARK_) || (shift_QMARK_)),alt_QMARK_], null);
});
return (new app.main.data.workspace.transforms.t_app$main$data$workspace$transforms49079(handler,ids,shape,resize,normalize_proportion_lock,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Trigger the bounding box cloaking (with default timer of 1sec)
 * 
 *   Used to hide bounding-box of shape after changes in sidebar->measures.
 */
app.main.data.workspace.transforms.trigger_bounding_box_cloaking = (function app$main$data$workspace$transforms$trigger_bounding_box_cloaking(ids){
app.common.data.macros.runtime_assert("expected valid coll of uuids",(function (){
return cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids);
}));

if((typeof app.main.data.workspace.transforms.trigger_bounding_box_cloaking_49106 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.transforms.trigger_bounding_box_cloaking_49106 = (function (ids,meta49107){
this.ids = ids;
this.meta49107 = meta49107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.trigger_bounding_box_cloaking_49106.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.trigger_bounding_box_cloaking_49106.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.transforms","trigger-bounding-box-cloaking","app.main.data.workspace.transforms/trigger-bounding-box-cloaking",-109183821);
}));

(app.main.data.workspace.transforms.trigger_bounding_box_cloaking_49106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49108,meta49107__$1){
var self__ = this;
var _49108__$1 = this;
return (new app.main.data.workspace.transforms.trigger_bounding_box_cloaking_49106(self__.ids,meta49107__$1));
}));

(app.main.data.workspace.transforms.trigger_bounding_box_cloaking_49106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49108){
var self__ = this;
var _49108__$1 = this;
return self__.meta49107;
}));

(app.main.data.workspace.transforms.trigger_bounding_box_cloaking_49106.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.trigger_bounding_box_cloaking_49106.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
return beicon.v2.core.concat(beicon.v2.core.of((function (p1__49104_SHARP_){
return cljs.core.assoc_in(p1__49104_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"transform","transform",1381301764)], null),new cljs.core.Keyword(null,"move","move",-2110884309));
})),beicon.v2.core.take_until(beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.transforms","trigger-bounding-box-cloaking","app.main.data.workspace.transforms/trigger-bounding-box-cloaking",-109183821)),stream),beicon.v2.core.map((function (){
return (function (p1__49105_SHARP_){
return cljs.core.assoc_in(p1__49105_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"transform","transform",1381301764)], null),null);
});
}),beicon.v2.core.timer((1000)))));
}));
}

return (new app.main.data.workspace.transforms.trigger_bounding_box_cloaking_49106(ids,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Change size of shapes, from the sidebar options form
 *   (will ignore pixel snap)
 */
app.main.data.workspace.transforms.update_dimensions = (function app$main$data$workspace$transforms$update_dimensions(var_args){
var G__49114 = arguments.length;
switch (G__49114) {
case 3:
return app.main.data.workspace.transforms.update_dimensions.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.transforms.update_dimensions.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.transforms.update_dimensions.cljs$core$IFn$_invoke$arity$3 = (function (ids,attr,value){
return app.main.data.workspace.transforms.update_dimensions.cljs$core$IFn$_invoke$arity$4(ids,attr,value,null);
}));

(app.main.data.workspace.transforms.update_dimensions.cljs$core$IFn$_invoke$arity$4 = (function (ids,attr,value,options){
if(typeof value === 'number'){
} else {
throw (new Error("Assert failed: (number? value)"));
}

if(cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids)){
} else {
throw (new Error(["Assert failed: ","expected valid coll of uuids","\n","(every? uuid? ids)"].join('')));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),attr)){
} else {
throw (new Error(["Assert failed: ","expected valid attr","\n","(contains? #{:width :height} attr)"].join('')));
}

if((typeof app.main.data.workspace.transforms.update_dimensions_49127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.transforms.update_dimensions_49127 = (function (ids,attr,value,options,meta49128){
this.ids = ids;
this.attr = attr;
this.value = value;
this.options = options;
this.meta49128 = meta49128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.update_dimensions_49127.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.update_dimensions_49127.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.transforms","update-dimensions","app.main.data.workspace.transforms/update-dimensions",-469929331);
}));

(app.main.data.workspace.transforms.update_dimensions_49127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49129,meta49128__$1){
var self__ = this;
var _49129__$1 = this;
return (new app.main.data.workspace.transforms.update_dimensions_49127(self__.ids,self__.attr,self__.value,self__.options,meta49128__$1));
}));

(app.main.data.workspace.transforms.update_dimensions_49127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49129){
var self__ = this;
var _49129__$1 = this;
return self__.meta49128;
}));

(app.main.data.workspace.transforms.update_dimensions_49127.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.update_dimensions_49127.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.options,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425));
}
})();
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var get_modifier = (function (shape){
var modifiers = app.common.types.modifiers.change_dimensions_modifiers.cljs$core$IFn$_invoke$arity$3(shape,self__.attr,self__.value);
if(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
var map__49130 = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape);
var map__49130__$1 = cljs.core.__destructure_map(map__49130);
var sr_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49130__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var sr_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49130__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var new_width = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.attr,new cljs.core.Keyword(null,"width","width",-384071477)))?self__.value:sr_width);
var new_height = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.attr,new cljs.core.Keyword(null,"height","height",1025178622)))?self__.value:sr_height);
var scalev = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((new_width / sr_width),(new_height / sr_height));
var current_grow_type = (shape?.grow_type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"grow-type","grow-type",-908344411)));
var new_grow_type = app.main.data.workspace.modifiers.next_grow_type(current_grow_type,scalev);
var G__49133 = modifiers;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_grow_type,current_grow_type)){
return app.common.types.modifiers.change_property(G__49133,new cljs.core.Keyword(null,"grow-type","grow-type",-908344411),new_grow_type);
} else {
return G__49133;
}
} else {
return modifiers;
}
});
var modif_tree = app.main.data.workspace.modifiers.build_modif_tree(self__.ids,objects,get_modifier);
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))){
return beicon.v2.core.of(app.main.data.workspace.modifiers.apply_wasm_modifiers.cljs$core$IFn$_invoke$arity$variadic(modif_tree,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.options,new cljs.core.Keyword(null,"ignore-snap-pixel","ignore-snap-pixel",1451661032),true)], 0)));
} else {
var modif_tree__$1 = app.common.geom.modifiers.set_objects_modifiers.cljs$core$IFn$_invoke$arity$2(modif_tree,objects);
return beicon.v2.core.of(app.main.data.workspace.modifiers.apply_modifiers_STAR_(objects,modif_tree__$1,null,self__.options));
}
}));
}

return (new app.main.data.workspace.transforms.update_dimensions_49127(ids,attr,value,options,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.transforms.update_dimensions.cljs$lang$maxFixedArity = 4);

/**
 * Change orientation of shapes, from the sidebar options form.
 *   Will ignore pixel snap used in the options side panel
 */
app.main.data.workspace.transforms.change_orientation = (function app$main$data$workspace$transforms$change_orientation(ids,orientation){
app.common.data.macros.runtime_assert("expected valid coll of uuids",(function (){
return cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids);
}));

app.common.data.macros.runtime_assert("expected valid orientation",(function (){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horiz","horiz",-776322169),null,new cljs.core.Keyword(null,"vert","vert",-360932977),null], null), null),orientation);
}));

if((typeof app.main.data.workspace.transforms.change_orientation_49134 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.transforms.change_orientation_49134 = (function (ids,orientation,meta49135){
this.ids = ids;
this.orientation = orientation;
this.meta49135 = meta49135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.change_orientation_49134.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.change_orientation_49134.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.transforms","change-orientation","app.main.data.workspace.transforms/change-orientation",-140139154);
}));

(app.main.data.workspace.transforms.change_orientation_49134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49136,meta49135__$1){
var self__ = this;
var _49136__$1 = this;
return (new app.main.data.workspace.transforms.change_orientation_49134(self__.ids,self__.orientation,meta49135__$1));
}));

(app.main.data.workspace.transforms.change_orientation_49134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49136){
var self__ = this;
var _49136__$1 = this;
return self__.meta49135;
}));

(app.main.data.workspace.transforms.change_orientation_49134.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.change_orientation_49134.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))){
return state;
} else {
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var get_modifier = (function (shape){
return app.common.types.modifiers.change_orientation_modifiers(shape,self__.orientation);
});
var modif_tree = app.common.geom.modifiers.set_objects_modifiers.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.modifiers.build_modif_tree(self__.ids,objects,get_modifier),objects);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-modifiers","workspace-modifiers",1432219828),modif_tree);
}
}));

(app.main.data.workspace.transforms.change_orientation_49134.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.change_orientation_49134.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var get_modifier = (function (shape){
return app.common.types.modifiers.change_orientation_modifiers(shape,self__.orientation);
});
var modif_tree = app.common.geom.modifiers.set_objects_modifiers.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.modifiers.build_modif_tree(self__.ids,objects,get_modifier),objects);
return beicon.v2.core.of(app.main.data.workspace.modifiers.apply_wasm_modifiers(modif_tree));
} else {
return beicon.v2.core.of(app.main.data.workspace.modifiers.apply_modifiers.cljs$core$IFn$_invoke$arity$0());
}
}));
}

return (new app.main.data.workspace.transforms.change_orientation_49134(ids,orientation,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.transforms.rotation_modifiers = (function app$main$data$workspace$transforms$rotation_modifiers(angle,shapes,center){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__49139_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(p1__49139_SHARP_,new cljs.core.Keyword(null,"blocked","blocked",181326681),false);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__49140_SHARP_){
return new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.attrs.editable_attrs,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__49140_SHARP_)));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__49141_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__49141_SHARP_),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),app.common.types.modifiers.rotation_modifiers(p1__49141_SHARP_,center,angle)], null)],null));
}))),shapes);
});
/**
 * Enter mouse rotate mode, until mouse button is released.
 */
app.main.data.workspace.transforms.start_rotate = (function app$main$data$workspace$transforms$start_rotate(shapes){
if((typeof app.main.data.workspace.transforms.start_rotate_49145 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.transforms.start_rotate_49145 = (function (shapes,meta49146){
this.shapes = shapes;
this.meta49146 = meta49146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.start_rotate_49145.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.start_rotate_49145.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.transforms","start-rotate","app.main.data.workspace.transforms/start-rotate",-1356627299);
}));

(app.main.data.workspace.transforms.start_rotate_49145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49147,meta49146__$1){
var self__ = this;
var _49147__$1 = this;
return (new app.main.data.workspace.transforms.start_rotate_49145(self__.shapes,meta49146__$1));
}));

(app.main.data.workspace.transforms.start_rotate_49145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49147){
var self__ = this;
var _49147__$1 = this;
return self__.meta49146;
}));

(app.main.data.workspace.transforms.start_rotate_49145.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.start_rotate_49145.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"transform","transform",1381301764)], null),new cljs.core.Keyword(null,"rotate","rotate",152705015));
}));

(app.main.data.workspace.transforms.start_rotate_49145.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.start_rotate_49145.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var stopper = app.util.mouse.drag_stopper.cljs$core$IFn$_invoke$arity$1(stream);
var group = app.common.geom.shapes.shapes__GT_rect(self__.shapes);
var group_center = app.common.geom.rect.rect__GT_center(group);
var initial_angle = app.common.geom.point.angle.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.streams.mouse_position),group_center);
var calculate_angle = (function (pos,mod_QMARK_,shift_QMARK_){
var angle = (app.common.geom.point.angle.cljs$core$IFn$_invoke$arity$2(pos,group_center) - initial_angle);
var angle__$1 = (((angle < (0)))?((360) + angle):angle);
var angle__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(angle__$1,(360)))?(0):angle__$1);
var angle__$3 = (cljs.core.truth_(mod_QMARK_)?(app.common.math.floor((angle__$2 / (45))) * (45)):angle__$2);
var angle__$4 = (cljs.core.truth_(shift_QMARK_)?(app.common.math.floor((angle__$3 / (15))) * (15)):angle__$3);
return angle__$4;
});
var angle_stream = beicon.v2.core.share(beicon.v2.core.map((function (p__49150){
var vec__49151 = p__49150;
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49151,(0),null);
var mod_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49151,(1),null);
var shift_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49151,(2),null);
return calculate_angle(pos,mod_QMARK_,shift_QMARK_);
}),beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$3(app.main.streams.mouse_position_mod,app.main.streams.mouse_position_shift,app.main.streams.mouse_position)));
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))){
return beicon.v2.core.concat(beicon.v2.core.merge(beicon.v2.core.take_until(stopper,beicon.v2.core.map((function (p1__49142_SHARP_){
return app.main.data.workspace.modifiers.set_wasm_modifiers(app.main.data.workspace.transforms.rotation_modifiers(p1__49142_SHARP_,self__.shapes,group_center));
}),angle_stream)),beicon.v2.core.map((function (p1__49143_SHARP_){
return app.main.data.workspace.modifiers.apply_wasm_modifiers(app.main.data.workspace.transforms.rotation_modifiers(p1__49143_SHARP_,self__.shapes,group_center));
}),beicon.v2.core.last(beicon.v2.core.take_until(stopper,angle_stream)))),beicon.v2.core.of(app.main.data.workspace.transforms.finish_transform()));
} else {
return beicon.v2.core.concat(beicon.v2.core.merge(beicon.v2.core.take_until(stopper,beicon.v2.core.map((function (p1__49144_SHARP_){
return app.main.data.workspace.modifiers.set_rotation_modifiers.cljs$core$IFn$_invoke$arity$3(p1__49144_SHARP_,self__.shapes,group_center);
}),angle_stream))),beicon.v2.core.of(app.main.data.workspace.modifiers.apply_modifiers.cljs$core$IFn$_invoke$arity$0(),app.main.data.workspace.transforms.finish_transform()));
}
}));
}

return (new app.main.data.workspace.transforms.start_rotate_49145(shapes,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Rotate shapes a fixed angle, from a keyboard action.
 */
app.main.data.workspace.transforms.increase_rotation = (function app$main$data$workspace$transforms$increase_rotation(var_args){
var G__49160 = arguments.length;
switch (G__49160) {
case 2:
return app.main.data.workspace.transforms.increase_rotation.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___49421 = arguments.length;
var i__5750__auto___49422 = (0);
while(true){
if((i__5750__auto___49422 < len__5749__auto___49421)){
args_arr__5774__auto__.push((arguments[i__5750__auto___49422]));

var G__49423 = (i__5750__auto___49422 + (1));
i__5750__auto___49422 = G__49423;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return app.main.data.workspace.transforms.increase_rotation.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(app.main.data.workspace.transforms.increase_rotation.cljs$core$IFn$_invoke$arity$2 = (function (ids,rotation){
return app.main.data.workspace.transforms.increase_rotation(ids,rotation,null);
}));

(app.main.data.workspace.transforms.increase_rotation.cljs$core$IFn$_invoke$arity$variadic = (function (ids,rotation,p__49161,p__49162){
var map__49163 = p__49161;
var map__49163__$1 = cljs.core.__destructure_map(map__49163);
var params = map__49163__$1;
var center = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49163__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var delta_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49163__$1,new cljs.core.Keyword(null,"delta?","delta?",-1801433442));
var map__49164 = p__49162;
var map__49164__$1 = cljs.core.__destructure_map(map__49164);
var options = map__49164__$1;
if((typeof app.main.data.workspace.transforms.increase_rotation_49165 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.transforms.increase_rotation_49165 = (function (options,delta_QMARK_,p__49161,p__49162,rotation,map__49163,params,ids,center,map__49164,meta49166){
this.options = options;
this.delta_QMARK_ = delta_QMARK_;
this.p__49161 = p__49161;
this.p__49162 = p__49162;
this.rotation = rotation;
this.map__49163 = map__49163;
this.params = params;
this.ids = ids;
this.center = center;
this.map__49164 = map__49164;
this.meta49166 = meta49166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.increase_rotation_49165.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.increase_rotation_49165.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.transforms","increase-rotation","app.main.data.workspace.transforms/increase-rotation",1727435167);
}));

(app.main.data.workspace.transforms.increase_rotation_49165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49167,meta49166__$1){
var self__ = this;
var _49167__$1 = this;
return (new app.main.data.workspace.transforms.increase_rotation_49165(self__.options,self__.delta_QMARK_,self__.p__49161,self__.p__49162,self__.rotation,self__.map__49163,self__.params,self__.ids,self__.center,self__.map__49164,meta49166__$1));
}));

(app.main.data.workspace.transforms.increase_rotation_49165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49167){
var self__ = this;
var _49167__$1 = this;
return self__.meta49166;
}));

(app.main.data.workspace.transforms.increase_rotation_49165.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.increase_rotation_49165.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var get_modifier = (function (shape){
var delta = (cljs.core.truth_(self__.delta_QMARK_)?self__.rotation:(self__.rotation - new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(shape)));
var center__$1 = (function (){var or__5025__auto__ = self__.center;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.geom.shapes.shape__GT_center(shape);
}
})();
return app.common.types.modifiers.rotation_modifiers(shape,center__$1,delta);
});
var modif_tree = app.main.data.workspace.modifiers.build_modif_tree(self__.ids,objects,get_modifier);
return beicon.v2.core.of(app.main.data.workspace.modifiers.apply_wasm_modifiers(modif_tree));
} else {
var page_id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(self__.options);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
}
})();
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49154_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__49154_SHARP_);
}),self__.ids);
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.options,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id);
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.modifiers.set_delta_rotation_modifiers(self__.rotation,shapes,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.params,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id))),beicon.v2.core.of(app.main.data.workspace.modifiers.apply_modifiers.cljs$core$IFn$_invoke$arity$1(options__$1)));
}
}));
}

return (new app.main.data.workspace.transforms.increase_rotation_49165(options,delta_QMARK_,p__49161,p__49162,rotation,map__49163__$1,params,ids,center,map__49164__$1,cljs.core.PersistentArrayMap.EMPTY));
}));

/** @this {Function} */
(app.main.data.workspace.transforms.increase_rotation.cljs$lang$applyTo = (function (seq49156){
var G__49157 = cljs.core.first(seq49156);
var seq49156__$1 = cljs.core.next(seq49156);
var G__49158 = cljs.core.first(seq49156__$1);
var seq49156__$2 = cljs.core.next(seq49156__$1);
var G__49159 = cljs.core.first(seq49156__$2);
var seq49156__$3 = cljs.core.next(seq49156__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49157,G__49158,G__49159,seq49156__$3);
}));

(app.main.data.workspace.transforms.increase_rotation.cljs$lang$maxFixedArity = (3));

/**
 * Enter mouse move mode, until mouse button is released.
 */
app.main.data.workspace.transforms.start_move_selected = (function app$main$data$workspace$transforms$start_move_selected(var_args){
var G__49174 = arguments.length;
switch (G__49174) {
case 0:
return app.main.data.workspace.transforms.start_move_selected.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return app.main.data.workspace.transforms.start_move_selected.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.transforms.start_move_selected.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.workspace.transforms.start_move_selected.cljs$core$IFn$_invoke$arity$2(null,false);
}));

(app.main.data.workspace.transforms.start_move_selected.cljs$core$IFn$_invoke$arity$2 = (function (id,shift_QMARK_){
if((typeof app.main.data.workspace.transforms.start_move_selected_49175 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.transforms.start_move_selected_49175 = (function (id,shift_QMARK_,meta49176){
this.id = id;
this.shift_QMARK_ = shift_QMARK_;
this.meta49176 = meta49176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.start_move_selected_49175.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.start_move_selected_49175.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.transforms","start-move-selected","app.main.data.workspace.transforms/start-move-selected",1856855753);
}));

(app.main.data.workspace.transforms.start_move_selected_49175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49177,meta49176__$1){
var self__ = this;
var _49177__$1 = this;
return (new app.main.data.workspace.transforms.start_move_selected_49175(self__.id,self__.shift_QMARK_,meta49176__$1));
}));

(app.main.data.workspace.transforms.start_move_selected_49175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49177){
var self__ = this;
var _49177__$1 = this;
return self__.meta49176;
}));

(app.main.data.workspace.transforms.start_move_selected_49175.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.start_move_selected_49175.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var initial = cljs.core.deref(app.main.streams.mouse_position);
var stopper = app.util.mouse.drag_stopper.cljs$core$IFn$_invoke$arity$2(stream,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interrupt?","interrupt?",275320536),false], null));
var zoom = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),(1));
var selected = (function (){var G__49178 = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"omit-blocked?","omit-blocked?",558115876),true], null));
if((!((self__.id == null)))){
return app.common.data.toggle_selection.cljs$core$IFn$_invoke$arity$3(G__49178,self__.id,self__.shift_QMARK_);
} else {
return G__49178;
}
})();
if(((app.common.data.not_empty_QMARK_(selected)) || ((!((self__.id == null)))))){
return beicon.v2.core.take_until(stopper,beicon.v2.core.mapcat((function (p__49179){
var vec__49180 = p__49179;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49180,(0),null);
var alt_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49180,(1),null);
return beicon.v2.core.concat((((!((self__.id == null))))?beicon.v2.core.of(app.main.data.workspace.selection.select_shape.cljs$core$IFn$_invoke$arity$2(self__.id,self__.shift_QMARK_)):beicon.v2.core.empty()),(cljs.core.truth_(alt_QMARK_)?beicon.v2.core.of((app.main.data.workspace.transforms.start_move_duplicate.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.transforms.start_move_duplicate.cljs$core$IFn$_invoke$arity$1(initial) : app.main.data.workspace.transforms.start_move_duplicate.call(null,initial)),app.main.data.workspace.selection.duplicate_selected.cljs$core$IFn$_invoke$arity$2(false,true)):beicon.v2.core.of((app.main.data.workspace.transforms.start_move.cljs$core$IFn$_invoke$arity$2 ? app.main.data.workspace.transforms.start_move.cljs$core$IFn$_invoke$arity$2(initial,selected) : app.main.data.workspace.transforms.start_move.call(null,initial,selected)))));
}),beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$2(app.main.streams.mouse_position_alt,beicon.v2.core.take((1),beicon.v2.core.filter((function (p1__49172_SHARP_){
return (p1__49172_SHARP_ > ((10) / zoom));
}),beicon.v2.core.map((function (p1__49171_SHARP_){
return app.common.geom.point.length(p1__49171_SHARP_);
}),beicon.v2.core.map((function (p1__49170_SHARP_){
return app.common.geom.point.to_vec(initial,p1__49170_SHARP_);
}),app.main.streams.mouse_position)))))));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.transforms.start_move_selected_49175(id,shift_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.transforms.start_move_selected.cljs$lang$maxFixedArity = 2);

app.main.data.workspace.transforms.start_move_duplicate = (function app$main$data$workspace$transforms$start_move_duplicate(from_position){
if((typeof app.main.data.workspace.transforms.start_move_duplicate_49183 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.transforms.start_move_duplicate_49183 = (function (from_position,meta49184){
this.from_position = from_position;
this.meta49184 = meta49184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.start_move_duplicate_49183.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.start_move_duplicate_49183.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.transforms","start-move-duplicate","app.main.data.workspace.transforms/start-move-duplicate",-1788098437);
}));

(app.main.data.workspace.transforms.start_move_duplicate_49183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49185,meta49184__$1){
var self__ = this;
var _49185__$1 = this;
return (new app.main.data.workspace.transforms.start_move_duplicate_49183(self__.from_position,meta49184__$1));
}));

(app.main.data.workspace.transforms.start_move_duplicate_49183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49185){
var self__ = this;
var _49185__$1 = this;
return self__.meta49184;
}));

(app.main.data.workspace.transforms.start_move_duplicate_49183.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.start_move_duplicate_49183.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"transform","transform",1381301764)], null),new cljs.core.Keyword(null,"move","move",-2110884309)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"duplicate-move-started?","duplicate-move-started?",-158515824)], null),true);
}));

(app.main.data.workspace.transforms.start_move_duplicate_49183.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.start_move_duplicate_49183.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
return beicon.v2.core.map((function (){
return (app.main.data.workspace.transforms.start_move.cljs$core$IFn$_invoke$arity$3 ? app.main.data.workspace.transforms.start_move.cljs$core$IFn$_invoke$arity$3(self__.from_position,null,true) : app.main.data.workspace.transforms.start_move.call(null,self__.from_position,null,true));
}),beicon.v2.core.take((1),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.selection","duplicate-selected","app.main.data.workspace.selection/duplicate-selected",-1398135140)),stream)));
}));
}

return (new app.main.data.workspace.transforms.start_move_duplicate_49183(from_position,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.transforms.get_drop_cell = (function app$main$data$workspace$transforms$get_drop_cell(target_frame,objects,position){
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"render-wasm/v1"))){
app.render_wasm.api.use_shape(target_frame);

var cell = app.render_wasm.api.get_grid_coords(position);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null))){
return cell;
} else {
return null;
}
} else {
return app.common.geom.shapes.grid_layout.get_drop_cell(target_frame,objects,position);
}
});
app.main.data.workspace.transforms.set_ghost_displacement = (function app$main$data$workspace$transforms$set_ghost_displacement(move_vector){
if((typeof app.main.data.workspace.transforms.set_ghost_displacement_49186 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.transforms.set_ghost_displacement_49186 = (function (move_vector,meta49187){
this.move_vector = move_vector;
this.meta49187 = meta49187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.set_ghost_displacement_49186.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.set_ghost_displacement_49186.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.transforms","set-ghost-displacement","app.main.data.workspace.transforms/set-ghost-displacement",-253602999);
}));

(app.main.data.workspace.transforms.set_ghost_displacement_49186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49188,meta49187__$1){
var self__ = this;
var _49188__$1 = this;
return (new app.main.data.workspace.transforms.set_ghost_displacement_49186(self__.move_vector,meta49187__$1));
}));

(app.main.data.workspace.transforms.set_ghost_displacement_49186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49188){
var self__ = this;
var _49188__$1 = this;
return self__.meta49187;
}));

(app.main.data.workspace.transforms.set_ghost_displacement_49186.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.set_ghost_displacement_49186.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var temp__5825__auto__ = app.util.dom.get_element_by_class.cljs$core$IFn$_invoke$arity$1("ghost-outline");
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
return app.util.dom.set_property_BANG_(node,"transform",app.common.geom.matrix.translate_matrix.cljs$core$IFn$_invoke$arity$1(self__.move_vector));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.transforms.set_ghost_displacement_49186(move_vector,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.transforms.start_move = (function app$main$data$workspace$transforms$start_move(var_args){
var G__49193 = arguments.length;
switch (G__49193) {
case 1:
return app.main.data.workspace.transforms.start_move.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.transforms.start_move.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.transforms.start_move.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.transforms.start_move.cljs$core$IFn$_invoke$arity$1 = (function (from_position){
return app.main.data.workspace.transforms.start_move.cljs$core$IFn$_invoke$arity$3(from_position,null,false);
}));

(app.main.data.workspace.transforms.start_move.cljs$core$IFn$_invoke$arity$2 = (function (from_position,ids){
return app.main.data.workspace.transforms.start_move.cljs$core$IFn$_invoke$arity$3(from_position,ids,false);
}));

(app.main.data.workspace.transforms.start_move.cljs$core$IFn$_invoke$arity$3 = (function (from_position,ids,from_duplicate_QMARK_){
if((typeof app.main.data.workspace.transforms.start_move_49194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.transforms.start_move_49194 = (function (from_position,ids,from_duplicate_QMARK_,meta49195){
this.from_position = from_position;
this.ids = ids;
this.from_duplicate_QMARK_ = from_duplicate_QMARK_;
this.meta49195 = meta49195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.start_move_49194.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.start_move_49194.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.transforms","start-move","app.main.data.workspace.transforms/start-move",1943175830);
}));

(app.main.data.workspace.transforms.start_move_49194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49196,meta49195__$1){
var self__ = this;
var _49196__$1 = this;
return (new app.main.data.workspace.transforms.start_move_49194(self__.from_position,self__.ids,self__.from_duplicate_QMARK_,meta49195__$1));
}));

(app.main.data.workspace.transforms.start_move_49194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49196){
var self__ = this;
var _49196__$1 = this;
return self__.meta49195;
}));

(app.main.data.workspace.transforms.start_move_49194.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.start_move_49194.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"transform","transform",1381301764)], null),new cljs.core.Keyword(null,"move","move",-2110884309));
}));

(app.main.data.workspace.transforms.start_move_49194.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.start_move_49194.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var prev_cell_data = cljs.core.volatile_BANG_(null);
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var libraries = app.main.data.helpers.lookup_libraries(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"omit-blocked?","omit-blocked?",558115876),true], null));
var ids__$1 = (((self__.ids == null))?selected:self__.ids);
var shapes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__49189_SHARP_){
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(p1__49189_SHARP_));
return ((app.common.types.component.in_component_copy_QMARK_(parent)) && (app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)));
}))),ids__$1);
var duplicate_move_started_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"duplicate-move-started?","duplicate-move-started?",-158515824)], null),false);
var stopper = app.util.mouse.drag_stopper.cljs$core$IFn$_invoke$arity$1(stream);
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-layout","workspace-layout",420938173));
var zoom = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),(1));
var focus = new cljs.core.Keyword(null,"workspace-focus-selected","workspace-focus-selected",978051257).cljs$core$IFn$_invoke$arity$1(state);
var exclude_frames = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.frame_shape_QMARK_,objects)),app.common.files.helpers.selected_with_children(objects,selected));
var exclude_frames_siblings = cljs.core.into.cljs$core$IFn$_invoke$arity$3(exclude_frames,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.get_siblings_ids,objects)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.any_layout_immediate_child_id_QMARK_,objects))),selected);
var position = beicon.v2.core.map((function (p1__49190_SHARP_){
return app.common.geom.point.to_vec(self__.from_position,p1__49190_SHARP_);
}),app.main.streams.mouse_position);
var snap_delta = beicon.v2.core.concat(beicon.v2.core.of(null),beicon.v2.core.switch_map((function (pos){
return beicon.v2.core.map((function (p1__49191_SHARP_){
return [pos,p1__49191_SHARP_];
}),app.main.snap.closest_snap_move(page_id,shapes,objects,layout,zoom,focus,pos));
}),beicon.v2.core.throttle.cljs$core$IFn$_invoke$arity$2((20),position)));
if(cljs.core.empty_QMARK_(shapes)){
return beicon.v2.core.of(app.main.data.workspace.transforms.finish_transform());
} else {
var move_stream = beicon.v2.core.take_until(stopper,beicon.v2.core.map((function (p__49197){
var vec__49198 = p__49197;
var move_vector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49198,(0),null);
var mod_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49198,(1),null);
var position__$1 = app.common.geom.point.add(self__.from_position,move_vector);
var exclude_frames__$1 = (cljs.core.truth_(mod_QMARK_)?exclude_frames:exclude_frames_siblings);
var target_frame = app.common.types.shape_tree.top_nested_frame.cljs$core$IFn$_invoke$arity$3(objects,position__$1,exclude_frames__$1);
var vec__49201 = app.common.types.container.find_valid_parent_and_frame_ids.cljs$core$IFn$_invoke$arity$5(target_frame,objects,shapes,false,libraries);
var target_frame__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49201,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49201,(1),null);
var flex_layout_QMARK_ = app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,target_frame__$1);
var grid_layout_QMARK_ = app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,target_frame__$1);
var drop_index = (cljs.core.truth_(flex_layout_QMARK_)?app.common.geom.shapes.flex_layout.get_drop_index(target_frame__$1,objects,position__$1):null);
var cell_data = (cljs.core.truth_((function (){var and__5023__auto__ = grid_layout_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(mod_QMARK_);
} else {
return and__5023__auto__;
}
})())?app.main.data.workspace.transforms.get_drop_cell(target_frame__$1,objects,position__$1):null);
return [move_vector,target_frame__$1,drop_index,cell_data];
}),beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$2(app.main.streams.mouse_position_mod,beicon.v2.core.map(app.main.snap.correct_snap_point,beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$2(snap_delta,position)))));
var modifiers_stream = beicon.v2.core.share(beicon.v2.core.map((function (p__49207){
var vec__49208 = p__49207;
var move_vector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49208,(0),null);
var target_frame = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49208,(1),null);
var drop_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49208,(2),null);
var cell_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49208,(3),null);
var shift_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49208,(4),null);
var cell_data__$1 = (function (){var or__5025__auto__ = cell_data;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(prev_cell_data);
}
})();
var x_disp_QMARK_ = (app.common.math.abs(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(move_vector)) > app.common.math.abs(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(move_vector)));
var vec__49216 = (cljs.core.truth_((function (){var and__5023__auto__ = shift_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return x_disp_QMARK_;
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(move_vector,new cljs.core.Keyword(null,"y","y",-1757859776),(0)),new cljs.core.Keyword(null,"y","y",-1757859776)], null):(cljs.core.truth_(shift_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(move_vector,new cljs.core.Keyword(null,"x","x",2099068185),(0)),new cljs.core.Keyword(null,"x","x",2099068185)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [move_vector,null], null)
));
var move_vector__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49216,(0),null);
var snap_ignore_axis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49216,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.modifiers.build_change_frame_modifiers(app.main.data.workspace.modifiers.create_modif_tree(ids__$1,app.common.types.modifiers.move_modifiers.cljs$core$IFn$_invoke$arity$1(move_vector__$1)),objects,selected,target_frame,drop_index,cell_data__$1),snap_ignore_axis], null);
}),beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (p__49220){
var vec__49221 = p__49220;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49221,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49221,(1),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49221,(2),null);
var cell_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49221,(3),null);
var ___$5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49221,(4),null);
if((!((cell_data == null)))){
return cljs.core.vreset_BANG_(prev_cell_data,cell_data);
} else {
return null;
}
}),beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$3(app.util.array.conj,app.main.streams.mouse_position_shift,move_stream))));
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))){
var duplicate_stopper = beicon.v2.core.mapcat((function (alt_QMARK_){
if(cljs.core.truth_((function (){var and__5023__auto__ = alt_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(self__.from_duplicate_QMARK_);
} else {
return and__5023__auto__;
}
})())){
return beicon.v2.core.of(true);
} else {
return beicon.v2.core.empty();
}
}),app.main.streams.mouse_position_alt);
return beicon.v2.core.merge(beicon.v2.core.map((function (p__49224){
var vec__49225 = p__49224;
var modifiers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49225,(0),null);
var snap_ignore_axis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49225,(1),null);
return app.main.data.workspace.modifiers.set_wasm_modifiers.cljs$core$IFn$_invoke$arity$variadic(modifiers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"snap-ignore-axis","snap-ignore-axis",642992690),snap_ignore_axis], 0));
}),beicon.v2.core.take_until(duplicate_stopper,modifiers_stream)),beicon.v2.core.mapcat((function (p__49228){
var vec__49229 = p__49228;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49229,(0),null);
var alt_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49229,(1),null);
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(self__.from_duplicate_QMARK_);
if(and__5023__auto__){
return alt_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return beicon.v2.core.of(app.main.data.workspace.transforms.start_move_duplicate(self__.from_position),app.main.data.workspace.selection.duplicate_selected.cljs$core$IFn$_invoke$arity$2(false,true));
} else {
return beicon.v2.core.empty();
}
}),beicon.v2.core.take((1),beicon.v2.core.filter((function (p__49232){
var vec__49233 = p__49232;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49233,(0),null);
var alt_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49233,(1),null);
return alt_QMARK_;
}),beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$2(app.main.streams.mouse_position_alt,move_stream)))),beicon.v2.core.mapcat((function (p__49236){
var vec__49237 = p__49236;
var vec__49240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49237,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49240,(0),null);
var target_frame = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49240,(1),null);
var drop_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49240,(2),null);
var drop_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49240,(3),null);
var vec__49243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49237,(1),null);
var modifiers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49243,(0),null);
var snap_ignore_axis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49243,(1),null);
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.modifiers.apply_wasm_modifiers.cljs$core$IFn$_invoke$arity$variadic(modifiers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"snap-ignore-axis","snap-ignore-axis",642992690),snap_ignore_axis,new cljs.core.Keyword(null,"undo-transation?","undo-transation?",-1838368123),false], 0)),(app.main.data.workspace.transforms.move_shapes_to_frame.cljs$core$IFn$_invoke$arity$4 ? app.main.data.workspace.transforms.move_shapes_to_frame.cljs$core$IFn$_invoke$arity$4(ids__$1,target_frame,drop_index,drop_cell) : app.main.data.workspace.transforms.move_shapes_to_frame.call(null,ids__$1,target_frame,drop_index,drop_cell)),app.main.data.workspace.transforms.finish_transform(),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}),beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$2(modifiers_stream,beicon.v2.core.take_until(duplicate_stopper,beicon.v2.core.last(move_stream)))));
} else {
return beicon.v2.core.merge(beicon.v2.core.map((function (p__49246){
var vec__49247 = p__49246;
var modifiers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49247,(0),null);
var snap_ignore_axis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49247,(1),null);
return app.main.data.workspace.modifiers.set_modifiers.cljs$core$IFn$_invoke$arity$4(modifiers,false,false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"snap-ignore-axis","snap-ignore-axis",642992690),snap_ignore_axis], null));
}),modifiers_stream),beicon.v2.core.mapcat((function (p__49250){
var vec__49251 = p__49250;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49251,(0),null);
var alt_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49251,(1),null);
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(duplicate_move_started_QMARK_);
if(and__5023__auto__){
return alt_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return beicon.v2.core.of(app.main.data.workspace.transforms.start_move_duplicate(self__.from_position),app.main.data.workspace.selection.duplicate_selected.cljs$core$IFn$_invoke$arity$2(false,true));
} else {
return beicon.v2.core.empty();
}
}),beicon.v2.core.take((1),beicon.v2.core.filter((function (p__49254){
var vec__49255 = p__49254;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49255,(0),null);
var alt_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49255,(1),null);
return alt_QMARK_;
}),beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$2(app.main.streams.mouse_position_alt,move_stream)))),beicon.v2.core.map(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.transforms.set_ghost_displacement,cljs.core.first),move_stream),beicon.v2.core.mapcat((function (p__49258){
var vec__49259 = p__49258;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49259,(0),null);
var target_frame = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49259,(1),null);
var drop_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49259,(2),null);
var drop_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49259,(3),null);
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.modifiers.apply_modifiers.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"undo-transation?","undo-transation?",-1838368123),false], null)),(app.main.data.workspace.transforms.move_shapes_to_frame.cljs$core$IFn$_invoke$arity$4 ? app.main.data.workspace.transforms.move_shapes_to_frame.cljs$core$IFn$_invoke$arity$4(ids__$1,target_frame,drop_index,drop_cell) : app.main.data.workspace.transforms.move_shapes_to_frame.call(null,ids__$1,target_frame,drop_index,drop_cell)),app.main.data.workspace.transforms.finish_transform(),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}),beicon.v2.core.last(move_stream)));
}
}
}));
}

return (new app.main.data.workspace.transforms.start_move_49194(from_position,ids,from_duplicate_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.transforms.start_move.cljs$lang$maxFixedArity = 3);

app.main.data.workspace.transforms.valid_directions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"down","down",1565245570),null,new cljs.core.Keyword(null,"up","up",-269712113),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null);
app.main.data.workspace.transforms.reorder_selected_layout_child = (function app$main$data$workspace$transforms$reorder_selected_layout_child(direction){
if((typeof app.main.data.workspace.transforms.reorder_layout_child_49265 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.transforms.reorder_layout_child_49265 = (function (direction,meta49266){
this.direction = direction;
this.meta49266 = meta49266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.reorder_layout_child_49265.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.reorder_layout_child_49265.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.transforms","reorder-layout-child","app.main.data.workspace.transforms/reorder-layout-child",-752044762);
}));

(app.main.data.workspace.transforms.reorder_layout_child_49265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49267,meta49266__$1){
var self__ = this;
var _49267__$1 = this;
return (new app.main.data.workspace.transforms.reorder_layout_child_49265(self__.direction,meta49266__$1));
}));

(app.main.data.workspace.transforms.reorder_layout_child_49265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49267){
var self__ = this;
var _49267__$1 = this;
return self__.meta49266;
}));

(app.main.data.workspace.transforms.reorder_layout_child_49265.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.reorder_layout_child_49265.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"omit-blocked?","omit-blocked?",558115876),true], null));
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var get_move_to_index = (function (parent_id,position){
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
if(((((app.common.types.shape.layout.reverse_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.direction,new cljs.core.Keyword(null,"left","left",-399115937))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.direction,new cljs.core.Keyword(null,"up","up",-269712113))))))) || ((((!(app.common.types.shape.layout.reverse_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.direction,new cljs.core.Keyword(null,"right","right",-452581833))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.direction,new cljs.core.Keyword(null,"down","down",1565245570))))))))){
return (position - (1));
} else {
return (position + (2));
}
});
var move_flex_children = (function (changes,parent_id,children){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes__$1,p__49268){
var vec__49269 = p__49268;
var child_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49269,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49269,(1),null);
return app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$4(changes__$1,parent_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,child_id)], null),index);
}),changes,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
var position = app.common.files.helpers.get_position_on_parent(objects,id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,get_move_to_index(parent_id,position)], null);
}),children)));
});
var move_grid_children = (function (changes,parent_id,children){
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
var key_prop = (function (){var G__49273 = self__.direction;
var G__49273__$1 = (((G__49273 instanceof cljs.core.Keyword))?G__49273.fqn:null);
switch (G__49273__$1) {
case "up":
case "down":
return new cljs.core.Keyword(null,"row","row",-570139521);

break;
case "right":
case "left":
return new cljs.core.Keyword(null,"column","column",2078222095);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49273__$1)].join('')));

}
})();
var key_comp = (function (){var G__49274 = self__.direction;
var G__49274__$1 = (((G__49274 instanceof cljs.core.Keyword))?G__49274.fqn:null);
switch (G__49274__$1) {
case "up":
case "left":
return cljs.core._LT_;

break;
case "down":
case "right":
return cljs.core._GT_;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49274__$1)].join('')));

}
})();
var map__49272 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (parent__$1,p__49275){
var map__49276 = p__49275;
var map__49276__$1 = cljs.core.__destructure_map(map__49276);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49276__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49276__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49276__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var row_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49276__$1,new cljs.core.Keyword(null,"row-span","row-span",-365554241));
var column_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49276__$1,new cljs.core.Keyword(null,"column-span","column-span",1302376857));
var vec__49277 = (function (){var G__49280 = self__.direction;
var G__49280__$1 = (((G__49280 instanceof cljs.core.Keyword))?G__49280.fqn:null);
switch (G__49280__$1) {
case "up":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row - (1)),column], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(column + column_span)], null);

break;
case "down":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row + row_span),column], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(column - (1))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49280__$1)].join('')));

}
})();
var next_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49277,(0),null);
var next_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49277,(1),null);
var next_cell = app.common.types.shape.layout.get_cell_by_position(parent__$1,next_row,next_column);
var G__49281 = parent__$1;
if((!((next_cell == null)))){
return app.common.types.shape.layout.swap_shapes(G__49281,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(next_cell));
} else {
return G__49281;
}
}),parent,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(key_prop,key_comp,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__49263_SHARP_){
return app.common.types.shape.layout.get_cell_by_shape_id(parent,p1__49263_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49262_SHARP_){
return app.common.types.component.in_component_copy_not_head_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__49262_SHARP_));
}),children))));
var map__49272__$1 = cljs.core.__destructure_map(map__49272);
var layout_grid_cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49272__$1,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187));
return app.common.files.changes_builder.reorder_grid_children(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(changes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent)], null),(function (shape){
return app.common.types.shape.layout.assign_cells(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),layout_grid_cells),objects);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent)], null));
});
var changes = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes,p__49282){
var vec__49283 = p__49282;
var parent_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49283,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49283,(1),null);
var G__49286 = changes;
var G__49286__$1 = (cljs.core.truth_(app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,parent_id))?move_flex_children(G__49286,parent_id,children):G__49286);
if(cljs.core.truth_(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,parent_id))){
return move_grid_children(G__49286__$1,parent_id,children);
} else {
return G__49286__$1;
}
}),app.common.files.changes_builder.with_objects(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),objects),cljs.core.group_by((function (p1__49264_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__49264_SHARP_),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
}),selected));
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),selected], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.transforms.reorder_layout_child_49265(direction,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Move shapes a fixed increment in one direction, from a keyboard action.
 */
app.main.data.workspace.transforms.nudge_selected_shapes = (function app$main$data$workspace$transforms$nudge_selected_shapes(direction,shift_QMARK_){
var same_event = Symbol("same-event");
if((typeof app.main.data.workspace.transforms.nudge_selected_shapes_49295 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IDeref}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.transforms.nudge_selected_shapes_49295 = (function (direction,shift_QMARK_,same_event,meta49296){
this.direction = direction;
this.shift_QMARK_ = shift_QMARK_;
this.same_event = same_event;
this.meta49296 = meta49296;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.nudge_selected_shapes_49295.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.nudge_selected_shapes_49295.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.transforms","nudge-selected-shapes","app.main.data.workspace.transforms/nudge-selected-shapes",-2083477304);
}));

(app.main.data.workspace.transforms.nudge_selected_shapes_49295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49297,meta49296__$1){
var self__ = this;
var _49297__$1 = this;
return (new app.main.data.workspace.transforms.nudge_selected_shapes_49295(self__.direction,self__.shift_QMARK_,self__.same_event,meta49296__$1));
}));

(app.main.data.workspace.transforms.nudge_selected_shapes_49295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49297){
var self__ = this;
var _49297__$1 = this;
return self__.meta49296;
}));

(app.main.data.workspace.transforms.nudge_selected_shapes_49295.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.direction;
}));

(app.main.data.workspace.transforms.nudge_selected_shapes_49295.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.nudge_selected_shapes_49295.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("app.main.data.workspace.transforms","current-move-selected","app.main.data.workspace.transforms/current-move-selected",-1360032117)) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"transform","transform",1381301764)], null),new cljs.core.Keyword(null,"move","move",-2110884309)),new cljs.core.Keyword("app.main.data.workspace.transforms","current-move-selected","app.main.data.workspace.transforms/current-move-selected",-1360032117),self__.same_event);
} else {
return state;
}
}));

(app.main.data.workspace.transforms.nudge_selected_shapes_49295.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.nudge_selected_shapes_49295.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.same_event,cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("app.main.data.workspace.transforms","current-move-selected","app.main.data.workspace.transforms/current-move-selected",-1360032117)))){
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"omit-blocked?","omit-blocked?",558115876),true], null));
var nudge = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"nudge","nudge",-715499585)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"big","big",903550151),(10),new cljs.core.Keyword(null,"small","small",2133478704),(1)], null));
var move_events = beicon.v2.core.filter((function (p1__49287_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.direction,cljs.core.deref(p1__49287_SHARP_));
}),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.transforms","nudge-selected-shapes","app.main.data.workspace.transforms/nudge-selected-shapes",-2083477304)),stream));
var stopper = beicon.v2.core.take((1),beicon.v2.core.switch_map((function (){
return beicon.v2.core.merge(beicon.v2.core.timer((1000)),beicon.v2.core.delay((250),beicon.v2.core.filter(app.util.keyboard.key_up_event_QMARK_,beicon.v2.core.filter(app.util.keyboard.keyboard_event_QMARK_,stream))));
}),move_events));
var scale = (cljs.core.truth_(self__.shift_QMARK_)?app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"big","big",903550151).cljs$core$IFn$_invoke$arity$1(nudge);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (10);
}
})()):app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"small","small",2133478704).cljs$core$IFn$_invoke$arity$1(nudge);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})()));
var mov_vec = app.common.geom.point.multiply((app.main.data.workspace.transforms.get_displacement.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.transforms.get_displacement.cljs$core$IFn$_invoke$arity$1(self__.direction) : app.main.data.workspace.transforms.get_displacement.call(null,self__.direction)),scale);
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))){
var modif_stream = beicon.v2.core.take_until(stopper,beicon.v2.core.map((function (p1__49289_SHARP_){
return app.main.data.workspace.modifiers.create_modif_tree(selected,app.common.types.modifiers.move_modifiers.cljs$core$IFn$_invoke$arity$1(p1__49289_SHARP_));
}),beicon.v2.core.scan.cljs$core$IFn$_invoke$arity$3((function (p1__49288_SHARP_){
return app.common.geom.point.add(p1__49288_SHARP_,mov_vec);
}),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0)),move_events)));
return beicon.v2.core.concat(beicon.v2.core.merge(beicon.v2.core.map((function (p1__49290_SHARP_){
return app.main.data.workspace.modifiers.set_wasm_modifiers.cljs$core$IFn$_invoke$arity$variadic(p1__49290_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-snap-pixel","ignore-snap-pixel",1451661032),true], null)], 0));
}),modif_stream),beicon.v2.core.map((function (p1__49291_SHARP_){
return app.main.data.workspace.modifiers.apply_wasm_modifiers.cljs$core$IFn$_invoke$arity$variadic(p1__49291_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-snap-pixel","ignore-snap-pixel",1451661032),true], null)], 0));
}),beicon.v2.core.last(modif_stream)),beicon.v2.core.of((app.main.data.workspace.transforms.nudge_selected_shapes.cljs$core$IFn$_invoke$arity$2 ? app.main.data.workspace.transforms.nudge_selected_shapes.cljs$core$IFn$_invoke$arity$2(self__.direction,self__.shift_QMARK_) : app.main.data.workspace.transforms.nudge_selected_shapes.call(null,self__.direction,self__.shift_QMARK_)))),beicon.v2.core.of(app.main.data.workspace.transforms.finish_transform()));
} else {
return beicon.v2.core.concat(beicon.v2.core.merge(beicon.v2.core.take_until(stopper,beicon.v2.core.map((function (p1__49294_SHARP_){
return app.main.data.workspace.modifiers.set_modifiers.cljs$core$IFn$_invoke$arity$3(p1__49294_SHARP_,false,true);
}),beicon.v2.core.map((function (p1__49293_SHARP_){
return app.main.data.workspace.modifiers.create_modif_tree(selected,app.common.types.modifiers.move_modifiers.cljs$core$IFn$_invoke$arity$1(p1__49293_SHARP_));
}),beicon.v2.core.scan.cljs$core$IFn$_invoke$arity$3((function (p1__49292_SHARP_){
return app.common.geom.point.add(p1__49292_SHARP_,mov_vec);
}),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0)),move_events)))),beicon.v2.core.of((app.main.data.workspace.transforms.nudge_selected_shapes.cljs$core$IFn$_invoke$arity$2 ? app.main.data.workspace.transforms.nudge_selected_shapes.cljs$core$IFn$_invoke$arity$2(self__.direction,self__.shift_QMARK_) : app.main.data.workspace.transforms.nudge_selected_shapes.call(null,self__.direction,self__.shift_QMARK_)))),beicon.v2.core.of(app.main.data.workspace.modifiers.apply_modifiers.cljs$core$IFn$_invoke$arity$0(),app.main.data.workspace.transforms.finish_transform()));
}
} else {
return beicon.v2.core.empty();
}
}));
}

return (new app.main.data.workspace.transforms.nudge_selected_shapes_49295(direction,shift_QMARK_,same_event,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Move shapes a fixed increment in one direction, from a keyboard action.
 */
app.main.data.workspace.transforms.move_selected = (function app$main$data$workspace$transforms$move_selected(direction,shift_QMARK_){
if(cljs.core.contains_QMARK_(app.main.data.workspace.transforms.valid_directions,direction)){
} else {
throw (new Error("Assert failed: (contains? valid-directions direction)"));
}

if(cljs.core.boolean_QMARK_(shift_QMARK_)){
} else {
throw (new Error("Assert failed: (boolean? shift?)"));
}

if((typeof app.main.data.workspace.transforms.move_selected_49299 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.transforms.move_selected_49299 = (function (direction,shift_QMARK_,meta49300){
this.direction = direction;
this.shift_QMARK_ = shift_QMARK_;
this.meta49300 = meta49300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.move_selected_49299.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.move_selected_49299.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.transforms","move-selected","app.main.data.workspace.transforms/move-selected",1781006970);
}));

(app.main.data.workspace.transforms.move_selected_49299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49301,meta49300__$1){
var self__ = this;
var _49301__$1 = this;
return (new app.main.data.workspace.transforms.move_selected_49299(self__.direction,self__.shift_QMARK_,meta49300__$1));
}));

(app.main.data.workspace.transforms.move_selected_49299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49301){
var self__ = this;
var _49301__$1 = this;
return self__.meta49300;
}));

(app.main.data.workspace.transforms.move_selected_49299.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.move_selected_49299.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"omit-blocked?","omit-blocked?",558115876),true], null));
var selected_shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),selected);
if(cljs.core.every_QMARK_((function (p1__49298_SHARP_){
return ((app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,p1__49298_SHARP_)) && (cljs.core.not(app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__49298_SHARP_))));
}),selected_shapes)){
return beicon.v2.core.of(app.main.data.workspace.transforms.reorder_selected_layout_child(self__.direction));
} else {
return beicon.v2.core.of(app.main.data.workspace.transforms.nudge_selected_shapes(self__.direction,self__.shift_QMARK_));
}
}));
}

return (new app.main.data.workspace.transforms.move_selected_49299(direction,shift_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.transforms.calculate_delta = (function app$main$data$workspace$transforms$calculate_delta(position,bbox,relative_to){
var current = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bbox),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bbox));
var position__$1 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((function (){var or__5025__auto__ = (function (){var G__49302 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position);
if((G__49302 == null)){
return null;
} else {
return (G__49302 + (relative_to?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(relative_to,new cljs.core.Keyword(null,"x","x",2099068185))));
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bbox);
}
})(),(function (){var or__5025__auto__ = (function (){var G__49303 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position);
if((G__49303 == null)){
return null;
} else {
return (G__49303 + (relative_to?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(relative_to,new cljs.core.Keyword(null,"y","y",-1757859776))));
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bbox);
}
})());
return app.common.geom.point.subtract(position__$1,current);
});
/**
 * Move shapes to a new position. It will resolve to the current frame
 *   of the shape, unless given the absolute option. In this case it will
 *   resolve to the root frame of the page.
 * 
 *   The position is a map that can have a partial position (it means it
 *   can receive {:x 10}.
 */
app.main.data.workspace.transforms.update_position = (function app$main$data$workspace$transforms$update_position(var_args){
var G__49305 = arguments.length;
switch (G__49305) {
case 2:
return app.main.data.workspace.transforms.update_position.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.transforms.update_position.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.transforms.update_position.cljs$core$IFn$_invoke$arity$2 = (function (id,position){
return app.main.data.workspace.transforms.update_position.cljs$core$IFn$_invoke$arity$3(id,position,null);
}));

(app.main.data.workspace.transforms.update_position.cljs$core$IFn$_invoke$arity$3 = (function (id,position,options){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","expected a valid uuid for `id`","\n","(uuid? id)"].join('')));
}

if(cljs.core.map_QMARK_(position)){
} else {
throw (new Error(["Assert failed: ","expected a valid map for `position`","\n","(map? position)"].join('')));
}

if((typeof app.main.data.workspace.transforms.update_position_49306 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.transforms.update_position_49306 = (function (id,position,options,meta49307){
this.id = id;
this.position = position;
this.options = options;
this.meta49307 = meta49307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.update_position_49306.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.update_position_49306.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.transforms","update-position","app.main.data.workspace.transforms/update-position",524068701);
}));

(app.main.data.workspace.transforms.update_position_49306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49308,meta49307__$1){
var self__ = this;
var _49308__$1 = this;
return (new app.main.data.workspace.transforms.update_position_49306(self__.id,self__.position,self__.options,meta49307__$1));
}));

(app.main.data.workspace.transforms.update_position_49306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49308){
var self__ = this;
var _49308__$1 = this;
return self__.meta49307;
}));

(app.main.data.workspace.transforms.update_position_49306.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.update_position_49306.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.options,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425));
}
})();
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.id);
var bbox = app.common.geom.rect.points__GT_rect(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape));
var frame = (cljs.core.truth_(new cljs.core.Keyword(null,"absolute?","absolute?",1457842844).cljs$core$IFn$_invoke$arity$1(self__.options))?app.common.files.helpers.get_frame.cljs$core$IFn$_invoke$arity$1(objects):app.common.files.helpers.get_parent_frame(objects,shape));
var delta = app.main.data.workspace.transforms.calculate_delta(self__.position,bbox,frame);
var modifiers = app.main.data.workspace.modifiers.create_modif_tree(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.id], null),app.common.types.modifiers.move_modifiers.cljs$core$IFn$_invoke$arity$1(delta));
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))){
return beicon.v2.core.of(app.main.data.workspace.modifiers.apply_wasm_modifiers.cljs$core$IFn$_invoke$arity$variadic(modifiers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ignore-constraints","ignore-constraints",-1221464851),false,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699).cljs$core$IFn$_invoke$arity$1(self__.options),new cljs.core.Keyword(null,"ignore-snap-pixel","ignore-snap-pixel",1451661032),true], null)], 0)));
} else {
return beicon.v2.core.of(app.main.data.workspace.modifiers.apply_modifiers.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),modifiers,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"ignore-constraints","ignore-constraints",-1221464851),false,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699).cljs$core$IFn$_invoke$arity$1(self__.options),new cljs.core.Keyword(null,"ignore-snap-pixel","ignore-snap-pixel",1451661032),true], null)));
}
}));
}

return (new app.main.data.workspace.transforms.update_position_49306(id,position,options,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.transforms.update_position.cljs$lang$maxFixedArity = 3);

/**
 * Move multiple shapes to a new position.
 */
app.main.data.workspace.transforms.update_positions = (function app$main$data$workspace$transforms$update_positions(var_args){
var G__49310 = arguments.length;
switch (G__49310) {
case 2:
return app.main.data.workspace.transforms.update_positions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.transforms.update_positions.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.transforms.update_positions.cljs$core$IFn$_invoke$arity$2 = (function (ids,position){
return app.main.data.workspace.transforms.update_positions.cljs$core$IFn$_invoke$arity$3(ids,position,null);
}));

(app.main.data.workspace.transforms.update_positions.cljs$core$IFn$_invoke$arity$3 = (function (ids,position,options){
if(cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids)){
} else {
throw (new Error(["Assert failed: ","expected valid coll of uuids","\n","(every? uuid? ids)"].join('')));
}

if(cljs.core.map_QMARK_(position)){
} else {
throw (new Error(["Assert failed: ","expected a valid map for `position`","\n","(map? position)"].join('')));
}

if((typeof app.main.data.workspace.transforms.update_positions_49311 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.transforms.update_positions_49311 = (function (ids,position,options,meta49312){
this.ids = ids;
this.position = position;
this.options = options;
this.meta49312 = meta49312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.update_positions_49311.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.update_positions_49311.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.transforms","update-positions","app.main.data.workspace.transforms/update-positions",1729520309);
}));

(app.main.data.workspace.transforms.update_positions_49311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49313,meta49312__$1){
var self__ = this;
var _49313__$1 = this;
return (new app.main.data.workspace.transforms.update_positions_49311(self__.ids,self__.position,self__.options,meta49312__$1));
}));

(app.main.data.workspace.transforms.update_positions_49311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49313){
var self__ = this;
var _49313__$1 = this;
return self__.meta49312;
}));

(app.main.data.workspace.transforms.update_positions_49311.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.update_positions_49311.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.from(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return app.main.data.workspace.transforms.update_position.cljs$core$IFn$_invoke$arity$3(id,self__.position,self__.options);
}),self__.ids));
}));
}

return (new app.main.data.workspace.transforms.update_positions_49311(ids,position,options,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.transforms.update_positions.cljs$lang$maxFixedArity = 3);

app.main.data.workspace.transforms.position_shapes = (function app$main$data$workspace$transforms$position_shapes(shapes){
if((typeof app.main.data.workspace.transforms.position_shapes_49314 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.transforms.position_shapes_49314 = (function (shapes,meta49315){
this.shapes = shapes;
this.meta49315 = meta49315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.position_shapes_49314.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.position_shapes_49314.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.transforms","position-shapes","app.main.data.workspace.transforms/position-shapes",1701060771);
}));

(app.main.data.workspace.transforms.position_shapes_49314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49316,meta49315__$1){
var self__ = this;
var _49316__$1 = this;
return (new app.main.data.workspace.transforms.position_shapes_49314(self__.shapes,meta49315__$1));
}));

(app.main.data.workspace.transforms.position_shapes_49314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49316){
var self__ = this;
var _49316__$1 = this;
return self__.meta49315;
}));

(app.main.data.workspace.transforms.position_shapes_49314.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.position_shapes_49314.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var shapes__$1 = app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),self__.shapes);
var modif_tree = app.main.data.workspace.modifiers.build_modif_tree(cljs.core.keys(shapes__$1),objects,(function (cshape){
var oshape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shapes__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cshape));
var cpos = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(cshape)));
var opos = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(oshape)));
return app.common.types.modifiers.move_modifiers.cljs$core$IFn$_invoke$arity$1(app.common.geom.point.subtract(opos,cpos));
}));
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))){
return beicon.v2.core.of(app.main.data.workspace.modifiers.apply_wasm_modifiers.cljs$core$IFn$_invoke$arity$variadic(modif_tree,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore-constraints","ignore-constraints",-1221464851),false,new cljs.core.Keyword(null,"ignore-snap-pixel","ignore-snap-pixel",1451661032),true], null)], 0)));
} else {
return beicon.v2.core.of(app.main.data.workspace.modifiers.apply_modifiers.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),modif_tree,new cljs.core.Keyword(null,"ignore-constraints","ignore-constraints",-1221464851),false,new cljs.core.Keyword(null,"ignore-snap-pixel","ignore-snap-pixel",1451661032),true], null)));
}
}));
}

return (new app.main.data.workspace.transforms.position_shapes_49314(shapes,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.transforms.cleanup_invalid_moving_shapes = (function app$main$data$workspace$transforms$cleanup_invalid_moving_shapes(ids,objects,frame_id){
var lookup = app.common.data.getf(objects);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
var layout_QMARK_ = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(frame);
var shapes = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49318_SHARP_){
var and__5023__auto__ = app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__49318_SHARP_);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frame_id,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(p1__49318_SHARP_));
} else {
return and__5023__auto__;
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49317_SHARP_){
return app.common.types.component.in_component_copy_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(p1__49317_SHARP_)));
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2(lookup,app.common.files.helpers.clean_loops(objects,cljs.core.set(ids)))));
var shapes__$1 = (function (){var G__49321 = shapes;
var G__49321__$1 = ((cljs.core.not(layout_QMARK_))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49319_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(p1__49319_SHARP_),frame_id);
}),G__49321):G__49321);
if(cljs.core.truth_(layout_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49320_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(p1__49320_SHARP_),frame_id)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(p1__49320_SHARP_),frame_id)));
}),G__49321__$1);
} else {
return G__49321__$1;
}
})();
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes__$1);
});
app.main.data.workspace.transforms.move_shapes_to_frame = (function app$main$data$workspace$transforms$move_shapes_to_frame(ids,frame_id,drop_index,cell){
if((typeof app.main.data.workspace.transforms.move_shapes_to_frame_49324 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.transforms.move_shapes_to_frame_49324 = (function (ids,frame_id,drop_index,cell,meta49325){
this.ids = ids;
this.frame_id = frame_id;
this.drop_index = drop_index;
this.cell = cell;
this.meta49325 = meta49325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.move_shapes_to_frame_49324.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.move_shapes_to_frame_49324.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.transforms","move-shapes-to-frame","app.main.data.workspace.transforms/move-shapes-to-frame",-1512544373);
}));

(app.main.data.workspace.transforms.move_shapes_to_frame_49324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49326,meta49325__$1){
var self__ = this;
var _49326__$1 = this;
return (new app.main.data.workspace.transforms.move_shapes_to_frame_49324(self__.ids,self__.frame_id,self__.drop_index,self__.cell,meta49325__$1));
}));

(app.main.data.workspace.transforms.move_shapes_to_frame_49324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49326){
var self__ = this;
var _49326__$1 = this;
return self__.meta49325;
}));

(app.main.data.workspace.transforms.move_shapes_to_frame_49324.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.move_shapes_to_frame_49324.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var ids__$1 = app.main.data.workspace.transforms.cleanup_invalid_moving_shapes(self__.ids,objects,self__.frame_id);
var changes = app.common.logic.shapes.generate_relocate.cljs$core$IFn$_invoke$arity$variadic(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_page_id(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),page_id),objects),data),self__.frame_id,self__.drop_index,ids__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cell","cell",764245084),self__.cell], 0));
var add_component_to_variant_QMARK_ = (function (){var and__5023__auto__ = cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.common.types.component.instance_head_QMARK_,objects),ids__$1);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.some(app.common.types.component.is_variant_QMARK_,app.common.files.helpers.get_parents_with_self(objects,self__.frame_id));
} else {
return and__5023__auto__;
}
})();
var add_new_variant_QMARK_ = (function (){var and__5023__auto__ = app.common.types.component.is_variant_container_QMARK_((objects.cljs$core$IFn$_invoke$arity$1 ? objects.cljs$core$IFn$_invoke$arity$1(self__.frame_id) : objects.call(null,self__.frame_id)));
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.common.types.component.main_instance_QMARK_,objects),ids__$1);
} else {
return and__5023__auto__;
}
})();
return beicon.v2.core.concat((function (){var shapes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49322_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__49322_SHARP_);
}),ids__$1);
var moved_count = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49323_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(p1__49323_SHARP_),self__.frame_id);
}),shapes));
var emit_layout_event_QMARK_ = ((app.common.files.helpers.has_layout_QMARK_(objects,self__.frame_id)) && ((moved_count > (0))));
if(emit_layout_event_QMARK_){
return beicon.v2.core.of(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"layout-add-element",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:move-shapes-to-frame",new cljs.core.Keyword(null,"element-type","element-type",-1609504232),app.common.files.helpers.get_selected_type(objects,ids__$1),new cljs.core.Keyword(null,"moved","moved",486549219),moved_count], null)));
} else {
return null;
}
})(),(((((!((self__.frame_id == null)))) && (app.common.data.not_empty_QMARK_(changes))))?beicon.v2.core.of(app.main.data.changes.commit_changes(changes),app.main.data.workspace.collapse.expand_collapse(self__.frame_id)):null),(cljs.core.truth_(add_component_to_variant_QMARK_)?beicon.v2.core.of(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-component-to-variant"], null))):null),(cljs.core.truth_(add_new_variant_QMARK_)?beicon.v2.core.of(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-new-variant",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:move-shapes-to-frame"], null))):null));
}));
}

return (new app.main.data.workspace.transforms.move_shapes_to_frame_49324(ids,frame_id,drop_index,cell,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Retrieve the correct displacement delta point for the
 *   provided direction speed and distances thresholds.
 */
app.main.data.workspace.transforms.get_displacement = (function app$main$data$workspace$transforms$get_displacement(direction){
var G__49327 = direction;
var G__49327__$1 = (((G__49327 instanceof cljs.core.Keyword))?G__49327.fqn:null);
switch (G__49327__$1) {
case "up":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(- (1)));

break;
case "down":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(1));

break;
case "left":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((- (1)),(0));

break;
case "right":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((1),(0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49327__$1)].join('')));

}
});
app.main.data.workspace.transforms.flip_horizontal_selected = (function app$main$data$workspace$transforms$flip_horizontal_selected(var_args){
var G__49329 = arguments.length;
switch (G__49329) {
case 0:
return app.main.data.workspace.transforms.flip_horizontal_selected.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.workspace.transforms.flip_horizontal_selected.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.transforms.flip_horizontal_selected.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.workspace.transforms.flip_horizontal_selected.cljs$core$IFn$_invoke$arity$1(null);
}));

(app.main.data.workspace.transforms.flip_horizontal_selected.cljs$core$IFn$_invoke$arity$1 = (function (ids){
if((typeof app.main.data.workspace.transforms.flip_horizontal_selected_49330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.transforms.flip_horizontal_selected_49330 = (function (ids,meta49331){
this.ids = ids;
this.meta49331 = meta49331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.flip_horizontal_selected_49330.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.flip_horizontal_selected_49330.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.transforms","flip-horizontal-selected","app.main.data.workspace.transforms/flip-horizontal-selected",702685415);
}));

(app.main.data.workspace.transforms.flip_horizontal_selected_49330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49332,meta49331__$1){
var self__ = this;
var _49332__$1 = this;
return (new app.main.data.workspace.transforms.flip_horizontal_selected_49330(self__.ids,meta49331__$1));
}));

(app.main.data.workspace.transforms.flip_horizontal_selected_49330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49332){
var self__ = this;
var _49332__$1 = this;
return self__.meta49331;
}));

(app.main.data.workspace.transforms.flip_horizontal_selected_49330.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.flip_horizontal_selected_49330.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected = (function (){var or__5025__auto__ = self__.ids;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"omit-blocked?","omit-blocked?",558115876),true], null));
}
})();
var shapes = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(app.common.types.component.is_variant_container_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),selected));
var selected__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes);
var selrect = app.common.geom.shapes.shapes__GT_rect(shapes);
var center = app.common.geom.rect.rect__GT_center(selrect);
var modifiers = app.main.data.workspace.modifiers.create_modif_tree(selected__$1,app.common.types.modifiers.resize_modifiers.cljs$core$IFn$_invoke$arity$2(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(-1.0,1.0),center));
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))){
return beicon.v2.core.of(app.main.data.workspace.modifiers.apply_wasm_modifiers.cljs$core$IFn$_invoke$arity$variadic(modifiers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-snap-pixel","ignore-snap-pixel",1451661032),true], null)], 0)));
} else {
return beicon.v2.core.of(app.main.data.workspace.modifiers.apply_modifiers.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),modifiers,new cljs.core.Keyword(null,"ignore-snap-pixel","ignore-snap-pixel",1451661032),true], null)));
}
}));
}

return (new app.main.data.workspace.transforms.flip_horizontal_selected_49330(ids,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.transforms.flip_horizontal_selected.cljs$lang$maxFixedArity = 1);

app.main.data.workspace.transforms.flip_vertical_selected = (function app$main$data$workspace$transforms$flip_vertical_selected(var_args){
var G__49335 = arguments.length;
switch (G__49335) {
case 0:
return app.main.data.workspace.transforms.flip_vertical_selected.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.workspace.transforms.flip_vertical_selected.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.transforms.flip_vertical_selected.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.workspace.transforms.flip_vertical_selected.cljs$core$IFn$_invoke$arity$1(null);
}));

(app.main.data.workspace.transforms.flip_vertical_selected.cljs$core$IFn$_invoke$arity$1 = (function (ids){
if((typeof app.main.data.workspace.transforms.flip_vertical_selected_49336 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.transforms.flip_vertical_selected_49336 = (function (ids,meta49337){
this.ids = ids;
this.meta49337 = meta49337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.flip_vertical_selected_49336.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.flip_vertical_selected_49336.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.transforms","flip-vertical-selected","app.main.data.workspace.transforms/flip-vertical-selected",1439561180);
}));

(app.main.data.workspace.transforms.flip_vertical_selected_49336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49338,meta49337__$1){
var self__ = this;
var _49338__$1 = this;
return (new app.main.data.workspace.transforms.flip_vertical_selected_49336(self__.ids,meta49337__$1));
}));

(app.main.data.workspace.transforms.flip_vertical_selected_49336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49338){
var self__ = this;
var _49338__$1 = this;
return self__.meta49337;
}));

(app.main.data.workspace.transforms.flip_vertical_selected_49336.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.flip_vertical_selected_49336.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected = (function (){var or__5025__auto__ = self__.ids;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"omit-blocked?","omit-blocked?",558115876),true], null));
}
})();
var shapes = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(app.common.types.component.is_variant_container_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49333_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__49333_SHARP_);
}),selected));
var selected__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes);
var selrect = app.common.geom.shapes.shapes__GT_rect(shapes);
var center = app.common.geom.rect.rect__GT_center(selrect);
var modifiers = app.main.data.workspace.modifiers.create_modif_tree(selected__$1,app.common.types.modifiers.resize_modifiers.cljs$core$IFn$_invoke$arity$2(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(1.0,-1.0),center));
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))){
return beicon.v2.core.of(app.main.data.workspace.modifiers.apply_wasm_modifiers.cljs$core$IFn$_invoke$arity$variadic(modifiers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-snap-pixel","ignore-snap-pixel",1451661032),true], null)], 0)));
} else {
return beicon.v2.core.of(app.main.data.workspace.modifiers.apply_modifiers.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),modifiers,new cljs.core.Keyword(null,"ignore-snap-pixel","ignore-snap-pixel",1451661032),true], null)));
}
}));
}

return (new app.main.data.workspace.transforms.flip_vertical_selected_49336(ids,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.transforms.flip_vertical_selected.cljs$lang$maxFixedArity = 1);

app.main.data.workspace.transforms.fit_layout_modifiers = (function app$main$data$workspace$transforms$fit_layout_modifiers(objects,frame){
var objects__$1 = cljs.core.assoc_in(cljs.core.assoc_in(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527)], null),new cljs.core.Keyword(null,"auto","auto",-566279492)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641)], null),new cljs.core.Keyword(null,"auto","auto",-566279492));
return app.common.geom.modifiers.set_objects_modifiers.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),app.common.types.modifiers.reflow_modifiers()], null)]),objects__$1);
});
app.main.data.workspace.transforms.selected_fit_content = (function app$main$data$workspace$transforms$selected_fit_content(){
if((typeof app.main.data.workspace.transforms.selected_fit_content_49339 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.transforms.selected_fit_content_49339 = (function (meta49340){
this.meta49340 = meta49340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.selected_fit_content_49339.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.selected_fit_content_49339.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.transforms","selected-fit-content","app.main.data.workspace.transforms/selected-fit-content",-1229213719);
}));

(app.main.data.workspace.transforms.selected_fit_content_49339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49341,meta49340__$1){
var self__ = this;
var _49341__$1 = this;
return (new app.main.data.workspace.transforms.selected_fit_content_49339(meta49340__$1));
}));

(app.main.data.workspace.transforms.selected_fit_content_49339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49341){
var self__ = this;
var _49341__$1 = this;
return self__.meta49340;
}));

(app.main.data.workspace.transforms.selected_fit_content_49339.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.selected_fit_content_49339.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var undo_group = app.common.uuid.next();
var modifiers = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (modifiers,frame){
if(app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(frame)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([modifiers,app.main.data.workspace.transforms.fit_layout_modifiers(objects,frame)], 0));
} else {
var new_modif = app.common.geom.shapes.fit_frame_modifiers(objects,frame);
var G__49342 = modifiers;
if((!((new_modif == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49342,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new_modif], null));
} else {
return G__49342;
}
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.frame_shape_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),selected)));
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))){
return beicon.v2.core.of(app.main.data.workspace.modifiers.apply_wasm_modifiers.cljs$core$IFn$_invoke$arity$variadic(modifiers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),undo_group], null)], 0)));
} else {
return beicon.v2.core.of(app.main.data.workspace.modifiers.apply_modifiers.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),modifiers,new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),undo_group], null)));
}
}));
}

return (new app.main.data.workspace.transforms.selected_fit_content_49339(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.transforms.resize_text_editor = (function app$main$data$workspace$transforms$resize_text_editor(id,p__49343){
var map__49344 = p__49343;
var map__49344__$1 = cljs.core.__destructure_map(map__49344);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49344__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49344__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if((typeof app.main.data.workspace.transforms.resize_text_editor_49345 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.transforms.resize_text_editor_49345 = (function (id,p__49343,map__49344,width,height,meta49346){
this.id = id;
this.p__49343 = p__49343;
this.map__49344 = map__49344;
this.width = width;
this.height = height;
this.meta49346 = meta49346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.transforms.resize_text_editor_49345.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.resize_text_editor_49345.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.transforms","resize-text-editor","app.main.data.workspace.transforms/resize-text-editor",-2053748947);
}));

(app.main.data.workspace.transforms.resize_text_editor_49345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49347,meta49346__$1){
var self__ = this;
var _49347__$1 = this;
return (new app.main.data.workspace.transforms.resize_text_editor_49345(self__.id,self__.p__49343,self__.map__49344,self__.width,self__.height,meta49346__$1));
}));

(app.main.data.workspace.transforms.resize_text_editor_49345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49347){
var self__ = this;
var _49347__$1 = this;
return self__.meta49346;
}));

(app.main.data.workspace.transforms.resize_text_editor_49345.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.transforms.resize_text_editor_49345.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.id);
var resize_v = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((self__.width / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape))),(self__.height / new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape))));
var origin = cljs.core.first(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape));
var modifiers = cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),app.common.types.modifiers.resize_modifiers.cljs$core$IFn$_invoke$arity$4(resize_v,origin,new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$2(shape,app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0()),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$2(shape,app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0()))], null)]);
return beicon.v2.core.of(app.main.data.workspace.modifiers.set_wasm_modifiers(modifiers));
}));
}

return (new app.main.data.workspace.transforms.resize_text_editor_49345(id,p__49343,map__49344__$1,width,height,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.transforms.js.map
