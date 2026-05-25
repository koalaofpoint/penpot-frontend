import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.types.shape.interactions.js";
import "./app.main.data.workspace.js";
import "./app.main.refs.js";
import "./app.main.render.js";
import "./app.main.store.js";
import "./app.main.ui.context.js";
import "./app.main.ui.shapes.embed.js";
import "./app.main.ui.workspace.viewport.outline.js";
import "./app.util.dom.js";
import "./cuerdas.core.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.viewport.interactions');
app.main.ui.workspace.viewport.interactions.interactions_ref = okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (p1__57131_SHARP_){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"draw-interaction-to-frame","draw-interaction-to-frame",1468971233),cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__57131_SHARP_,new cljs.core.Keyword(null,"draw-interaction-to-frame","draw-interaction-to-frame",1468971233)),new cljs.core.Keyword(null,"editing-interaction-index","editing-interaction-index",1202734402),cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__57131_SHARP_,new cljs.core.Keyword(null,"editing-interaction-index","editing-interaction-index",1202734402)),new cljs.core.Keyword(null,"move-overlay-index","move-overlay-index",1594879653),cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__57131_SHARP_,new cljs.core.Keyword(null,"move-overlay-index","move-overlay-index",1594879653)),new cljs.core.Keyword(null,"move-overlay-to","move-overlay-to",1237478707),cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__57131_SHARP_,new cljs.core.Keyword(null,"move-overlay-to","move-overlay-to",1237478707)),new cljs.core.Keyword(null,"draw-interaction-to","draw-interaction-to",-518719969),cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__57131_SHARP_,new cljs.core.Keyword(null,"draw-interaction-to","draw-interaction-to",-518719969))], null);
}),app.main.refs.workspace_local,cljs.core._EQ_);
app.main.ui.workspace.viewport.interactions.on_pointer_down = (function app$main$ui$workspace$viewport$interactions$on_pointer_down(event,index,p__57132){
var map__57133 = p__57132;
var map__57133__$1 = cljs.core.__destructure_map(map__57133);
var shape = map__57133__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57133__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
app.util.dom.stop_propagation(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.select_shape.cljs$core$IFn$_invoke$arity$1(id));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.start_edit_interaction(index));
});
/**
 * Calculate the best position to draw an interaction line
 *   between two shapes
 */
app.main.ui.workspace.viewport.interactions.connect_to_shape = (function app$main$ui$workspace$viewport$interactions$connect_to_shape(orig_shape,dest_shape){
var orig_rect = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(orig_shape);
var dest_rect = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(dest_shape);
var orig_x_left = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(orig_rect);
var orig_x_right = (orig_x_left + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(orig_rect));
var orig_x_center = (orig_x_left + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(orig_rect) / (2)));
var dest_x_left = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(dest_rect);
var dest_x_right = (dest_x_left + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(dest_rect));
var dest_x_center = (dest_x_left + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(dest_rect) / (2)));
var orig_pos = (((orig_x_right <= dest_x_left))?new cljs.core.Keyword(null,"right","right",-452581833):(((orig_x_left >= dest_x_right))?new cljs.core.Keyword(null,"left","left",-399115937):(((orig_x_center <= dest_x_center))?new cljs.core.Keyword(null,"left","left",-399115937):new cljs.core.Keyword(null,"right","right",-452581833))));
var dest_pos = (((orig_x_right <= dest_x_left))?new cljs.core.Keyword(null,"left","left",-399115937):(((orig_x_left >= dest_x_right))?new cljs.core.Keyword(null,"right","right",-452581833):(((orig_x_center <= dest_x_center))?new cljs.core.Keyword(null,"left","left",-399115937):new cljs.core.Keyword(null,"right","right",-452581833))));
var orig_x = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orig_pos,new cljs.core.Keyword(null,"right","right",-452581833)))?orig_x_right:orig_x_left);
var dest_x = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dest_pos,new cljs.core.Keyword(null,"right","right",-452581833)))?dest_x_right:dest_x_left);
var orig_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(orig_rect) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(orig_rect) / (2)));
var dest_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(dest_rect) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(dest_rect) / (2)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [orig_pos,orig_x,orig_y,dest_pos,dest_x,dest_y], null);
});
/**
 * Calculate the best position to draw an interaction line
 *   between one shape and one point
 */
app.main.ui.workspace.viewport.interactions.connect_to_point = (function app$main$ui$workspace$viewport$interactions$connect_to_point(orig_shape,dest_point){
var orig_rect = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(orig_shape);
var orig_x_left = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(orig_rect);
var orig_x_right = (orig_x_left + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(orig_rect));
var orig_x_center = (orig_x_left + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(orig_rect) / (2)));
var dest_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(dest_point);
var dest_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(dest_point);
var orig_pos = (((orig_x_right <= dest_x))?new cljs.core.Keyword(null,"right","right",-452581833):(((orig_x_left >= dest_x))?new cljs.core.Keyword(null,"left","left",-399115937):(((orig_x_center <= dest_x))?new cljs.core.Keyword(null,"right","right",-452581833):new cljs.core.Keyword(null,"left","left",-399115937))));
var dest_pos = (((orig_x_right <= dest_x))?new cljs.core.Keyword(null,"left","left",-399115937):(((orig_x_left >= dest_x))?new cljs.core.Keyword(null,"right","right",-452581833):(((orig_x_center <= dest_x))?new cljs.core.Keyword(null,"right","right",-452581833):new cljs.core.Keyword(null,"left","left",-399115937))));
var orig_x = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orig_pos,new cljs.core.Keyword(null,"right","right",-452581833)))?orig_x_right:orig_x_left);
var orig_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(orig_rect) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(orig_rect) / (2)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [orig_pos,orig_x,orig_y,dest_pos,dest_x,dest_y], null);
});
app.main.ui.workspace.viewport.interactions.interaction_marker = (function app$main$ui$workspace$viewport$interactions$interaction_marker(props_57134){
var map__57135 = rumext.v2.util.wrap_props(props_57134);
var map__57135__$1 = cljs.core.__destructure_map(map__57135);
var props = map__57135__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57135__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57135__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var stroke = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57135__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555));
var action_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57135__$1,new cljs.core.Keyword(null,"action-type","action-type",-1141667361));
var arrow_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57135__$1,new cljs.core.Keyword(null,"arrow-dir","arrow-dir",-591621960));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57135__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var icon_pdata = (function (){var G__57136 = action_type;
var G__57136__$1 = (((G__57136 instanceof cljs.core.Keyword))?G__57136.fqn:null);
switch (G__57136__$1) {
case "navigate":
var G__57137 = arrow_dir;
var G__57137__$1 = (((G__57137 instanceof cljs.core.Keyword))?G__57137.fqn:null);
switch (G__57137__$1) {
case "right":
return "M -6.5 0 L 5.5 0 M 6.715 0.715 L -0.5 -6.5 M 6.715 -0.715 L -0.365 6.635";

break;
case "left":
return "M 6.5 0 l -12 0 m -0.715 0.715 l 6.5 -6.9 m -6 6 l 6 6.35";

break;
default:
return null;

}

break;
case "open-overlay":
return "M-5 -5 h7 v7 h-7 z M2 -2 h3.5 v7 h-7 v-2.5";

break;
case "toggle-overlay":
return "M-5 -5 h7 v7 h-7 z M2 -2 h3.5 v7 h-7 v-2.5";

break;
case "close-overlay":
return "M -5 -5 L 5 5 M -5 5 L 5 -5";

break;
case "prev-screen":
var G__57138 = arrow_dir;
var G__57138__$1 = (((G__57138 instanceof cljs.core.Keyword))?G__57138.fqn:null);
switch (G__57138__$1) {
case "left":
return "M -6.5 0 l 12 0 l -6 -6 m 6 6 l -6 6";

break;
case "right":
return "M 6.5 0 l -12 0 l 6 -6 m -6 6 l 6 6";

break;
default:
return null;

}

break;
case "open-url":
return ""+"M1 -5 L 3 -7 L 7 -3 L 1 3 L -1 1M-1 5 L -3 7 L -7 3 L -1 -3 L 1 -1";

break;
default:
return null;

}
})();
var inv_zoom = ((1) / zoom);
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("circle",{'cx':(0),'cy':(0),'r':(((!((action_type == null))))?(11):(4)),'fill':stroke,'transform':["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inv_zoom),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inv_zoom),") ","translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((zoom * x)),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((zoom * y)),")"].join('')}),(cljs.core.truth_(icon_pdata)?rumext.v2.jsx("path",{'fill':stroke,'strokeWidth':(2),'stroke':"var(--app-white)",'d':icon_pdata,'transform':["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inv_zoom),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inv_zoom),") ","translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((zoom * x)),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((zoom * y)),")"].join('')}):null)]});
});

(app.main.ui.workspace.viewport.interactions.interaction_marker.displayName = "interaction-marker");

app.main.ui.workspace.viewport.interactions.interaction_path = (function app$main$ui$workspace$viewport$interactions$interaction_path(props_57141){
var map__57142 = rumext.v2.util.wrap_props(props_57141);
var map__57142__$1 = cljs.core.__destructure_map(map__57142);
var props = map__57142__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57142__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57142__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var orig_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57142__$1,new cljs.core.Keyword(null,"orig-shape","orig-shape",-1779157292));
var dest_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57142__$1,new cljs.core.Keyword(null,"dest-shape","dest-shape",-1843960370));
var dest_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57142__$1,new cljs.core.Keyword(null,"dest-point","dest-point",1315807485));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57142__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var action_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57142__$1,new cljs.core.Keyword(null,"action-type","action-type",-1141667361));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57142__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var vec__57143 = (cljs.core.truth_(dest_shape)?app.main.ui.workspace.viewport.interactions.connect_to_shape(orig_shape,dest_shape):(cljs.core.truth_(dest_point)?app.main.ui.workspace.viewport.interactions.connect_to_point(orig_shape,dest_point):app.main.ui.workspace.viewport.interactions.connect_to_point(orig_shape,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(orig_shape)) + ((100) / zoom)),new cljs.core.Keyword(null,"y","y",-1757859776),((new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(orig_shape)) - ((50) / zoom)) + ((level * (32)) / zoom))], null))
));
var orig_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57143,(0),null);
var orig_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57143,(1),null);
var orig_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57143,(2),null);
var dest_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57143,(3),null);
var dest_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57143,(4),null);
var dest_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57143,(5),null);
var orig_dx = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orig_pos,new cljs.core.Keyword(null,"right","right",-452581833)))?(100):(-100)) / zoom);
var dest_dx = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dest_pos,new cljs.core.Keyword(null,"right","right",-452581833)))?(100):(-100)) / zoom);
var path = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",orig_x,orig_y,"C",(orig_x + orig_dx),orig_y,(dest_x + dest_dx),dest_y,dest_x,dest_y], null);
var pdata = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",path);
var arrow_dir = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dest_pos,new cljs.core.Keyword(null,"left","left",-399115937)))?new cljs.core.Keyword(null,"right","right",-452581833):new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.not(selected_QMARK_)){
return rumext.v2.jsxs("g",{'onPointerDown':(function (p1__57139_SHARP_){
return app.main.ui.workspace.viewport.interactions.on_pointer_down(p1__57139_SHARP_,index,orig_shape);
}),'children':[rumext.v2.jsx("path",{'stroke':"var(--df-secondary)",'fill':"none",'pointerEvents':"visible",'strokeWidth':((2) / zoom),'d':pdata}),((cljs.core.not(dest_shape))?rumext.v2.jsx(app.main.ui.workspace.viewport.interactions.interaction_marker,{'index':index,'x':dest_x,'y':dest_y,'stroke':"var(--df-secondary)",'action-type':action_type,'arrow-dir':arrow_dir,'zoom':zoom}):null)]});
} else {
return rumext.v2.jsxs("g",{'onPointerDown':(function (p1__57140_SHARP_){
return app.main.ui.workspace.viewport.interactions.on_pointer_down(p1__57140_SHARP_,index,orig_shape);
}),'children':[rumext.v2.jsx("path",{'stroke':"var(--color-accent-tertiary)",'fill':"none",'pointerEvents':"visible",'strokeWidth':((2) / zoom),'d':pdata}),(cljs.core.truth_(dest_shape)?rumext.v2.jsx(app.main.ui.workspace.viewport.outline.outline,{'zoom':zoom,'shape':dest_shape,'color':"var(--color-accent-tertiary)"}):null),rumext.v2.jsx(app.main.ui.workspace.viewport.interactions.interaction_marker,{'index':index,'x':orig_x,'y':orig_y,'stroke':"var(--color-accent-tertiary)",'zoom':zoom}),rumext.v2.jsx(app.main.ui.workspace.viewport.interactions.interaction_marker,{'index':index,'x':dest_x,'y':dest_y,'stroke':"var(--color-accent-tertiary)",'action-type':action_type,'arrow-dir':arrow_dir,'zoom':zoom})]});
}
});

(app.main.ui.workspace.viewport.interactions.interaction_path.displayName = "interaction-path");

app.main.ui.workspace.viewport.interactions.interaction_handle = (function app$main$ui$workspace$viewport$interactions$interaction_handle(props_57147){
var map__57148 = rumext.v2.util.wrap_props(props_57147);
var map__57148__$1 = cljs.core.__destructure_map(map__57148);
var props = map__57148__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57148__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57148__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57148__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var shape_rect = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape);
var handle_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape_rect) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(shape_rect));
var handle_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape_rect) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(shape_rect) / (2)));
return rumext.v2.jsx("g",{'onPointerDown':(function (p1__57146_SHARP_){
return app.main.ui.workspace.viewport.interactions.on_pointer_down(p1__57146_SHARP_,index,shape);
}),'children':rumext.v2.jsx(app.main.ui.workspace.viewport.interactions.interaction_marker,{'x':handle_x,'y':handle_y,'stroke':"var(--color-accent-tertiary)",'action-type':new cljs.core.Keyword(null,"navigate","navigate",657596805),'arrow-dir':new cljs.core.Keyword(null,"right","right",-452581833),'zoom':zoom})});
});

(app.main.ui.workspace.viewport.interactions.interaction_handle.displayName = "interaction-handle");

app.main.ui.workspace.viewport.interactions.overlay_marker = (function app$main$ui$workspace$viewport$interactions$overlay_marker(props_57149){
var map__57150 = rumext.v2.util.wrap_props(props_57149);
var map__57150__$1 = cljs.core.__destructure_map(map__57150);
var props = map__57150__$1;
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57150__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57150__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var orig_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57150__$1,new cljs.core.Keyword(null,"orig-shape","orig-shape",-1779157292));
var dest_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57150__$1,new cljs.core.Keyword(null,"dest-shape","dest-shape",-1843960370));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57150__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57150__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var hover_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57150__$1,new cljs.core.Keyword(null,"hover-disabled?","hover-disabled?",1130690863));
var start_move_position = (function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.start_move_overlay_pos(index));
});
if(cljs.core.truth_(dest_shape)){
var orig_frame = app.common.files.helpers.get_frame.cljs$core$IFn$_invoke$arity$2(objects,orig_shape);
var marker_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(orig_frame) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position));
var marker_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(orig_frame) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position));
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(dest_shape);
var height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(dest_shape);
var dest_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(dest_shape);
var dest_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(dest_shape);
var shape_wrapper = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.main.render.shape_wrapper_factory(objects);
}));
var dest_shape_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dest_shape);
var thumbnail_data_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(page_id),rumext.v2.adapt(dest_shape_id)],(function (){
return app.main.refs.workspace_thumbnail_by_id(dest_shape_id);
}));
var thumbnail_data = rumext.v2.deref(thumbnail_data_ref);
var dest_shape__$1 = (function (){var G__57151 = dest_shape;
if((!((thumbnail_data == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57151,new cljs.core.Keyword(null,"thumbnail","thumbnail",-867906798),thumbnail_data);
} else {
return G__57151;
}
})();
return rumext.v2.jsxs("g",{'onPointerDown':start_move_position,'onPointerEnter':(function (){
return cljs.core.reset_BANG_(hover_disabled_QMARK_,true);
}),'onPointerLeave':(function (){
return cljs.core.reset_BANG_(hover_disabled_QMARK_,false);
}),'children':[rumext.v2.jsx("g",{'transform':app.common.geom.matrix.translate_matrix.cljs$core$IFn$_invoke$arity$1(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((marker_x - dest_x),(marker_y - dest_y))),'children':rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.render_thumbnails),{'value':true,'children':rumext.v2.jsx(rumext.v2.provider(app.main.ui.shapes.embed.context),{'value':false,'children':rumext.v2.jsx(shape_wrapper,{'shape':dest_shape__$1})})})}),rumext.v2.jsx("path",{'stroke':"var(--color-accent-tertiary)",'fill':"var(--app-black)",'fillOpacity':0.5,'strokeWidth':(1),'d':""+"M"+(marker_x ?? "")+" "+(marker_y ?? "")+" h "+(width ?? "")+" v "+(height ?? "")+" h -"+(width ?? "")+" zM"+(marker_x ?? "")+" "+(marker_y ?? "")+" l "+(width ?? "")+" "+(height ?? "")+" M"+(marker_x ?? "")+" "+((marker_y + height) ?? "")+" l "+(width ?? "")+" -"+(height ?? "")+" "}),rumext.v2.jsx("circle",{'cx':(marker_x + (width / (2))),'cy':(marker_y + (height / (2))),'r':(8),'fill':"var(--color-accent-tertiary)"})]});
} else {
return null;
}
});

(app.main.ui.workspace.viewport.interactions.overlay_marker.displayName = "overlay-marker");

app.main.ui.workspace.viewport.interactions.interactions = (function app$main$ui$workspace$viewport$interactions$interactions(props_57154){
var map__57155 = rumext.v2.util.wrap_props(props_57154);
var map__57155__$1 = cljs.core.__destructure_map(map__57155);
var props = map__57155__$1;
var current_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57155__$1,new cljs.core.Keyword(null,"current-transform","current-transform",786524455));
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57155__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57155__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57155__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var hover_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57155__$1,new cljs.core.Keyword(null,"hover-disabled?","hover-disabled?",1130690863));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57155__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var active_shapes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__57152_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(p1__57152_SHARP_));
}))),cljs.core.vals(objects));
var selected_shapes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),selected);
var map__57156 = rumext.v2.deref(app.main.ui.workspace.viewport.interactions.interactions_ref);
var map__57156__$1 = cljs.core.__destructure_map(map__57156);
var editing_interaction_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57156__$1,new cljs.core.Keyword(null,"editing-interaction-index","editing-interaction-index",1202734402));
var draw_interaction_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57156__$1,new cljs.core.Keyword(null,"draw-interaction-to","draw-interaction-to",-518719969));
var draw_interaction_to_frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57156__$1,new cljs.core.Keyword(null,"draw-interaction-to-frame","draw-interaction-to-frame",1468971233));
var move_overlay_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57156__$1,new cljs.core.Keyword(null,"move-overlay-to","move-overlay-to",1237478707));
var move_overlay_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57156__$1,new cljs.core.Keyword(null,"move-overlay-index","move-overlay-index",1594879653));
var first_selected = cljs.core.first(selected_shapes);
var calc_level = (function (index,interactions__$1){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__57153_SHARP_){
return (new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(p1__57153_SHARP_) == null);
}),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(interactions__$1,(0),index)));
});
return rumext.v2.jsxs("g",{'className':"interactions",'children':[rumext.v2.jsx("g",{'className':"non-selected",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,shape){
out_arr__35152__auto__.push(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto____$1,p__57157){
var vec__57158 = p__57157;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57158,(0),null);
var interaction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57158,(1),null);
out_arr__35152__auto____$1.push((function (){var dest_shape = (cljs.core.truth_(app.common.types.shape.interactions.destination_QMARK_(interaction))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction)):null);
var selected_QMARK_ = cljs.core.contains_QMARK_(selected,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
var level = calc_level(index,new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(shape));
if(selected_QMARK_){
return null;
} else {
return rumext.v2.jsx(app.main.ui.workspace.viewport.interactions.interaction_path,{'zoom':zoom,'selected':selected,'index':index,'dest-shape':dest_shape,'level':level,'orig-shape':shape,'selected?':false,'action-type':new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction)},""+"non-selected-"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape) ?? "")+"-"+(index ?? ""));
}
})());

return out_arr__35152__auto____$1;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(shape))));

return out_arr__35152__auto__;
}),[],active_shapes)}),rumext.v2.jsxs("g",{'className':"selected",'children':[(cljs.core.truth_((function (){var and__5023__auto__ = draw_interaction_to;
if(cljs.core.truth_(and__5023__auto__)){
return first_selected;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.workspace.viewport.interactions.interaction_path,{'index':null,'orig-shape':first_selected,'dest-point':draw_interaction_to,'dest-shape':draw_interaction_to_frame,'selected?':true,'action-type':new cljs.core.Keyword(null,"navigate","navigate",657596805),'zoom':zoom},"interactive"):null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,shape){
out_arr__35152__auto__.push(((cljs.core.seq(new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(shape)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto____$1,p__57161){
var vec__57162 = p__57161;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57162,(0),null);
var interaction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57162,(1),null);
out_arr__35152__auto____$1.push(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,editing_interaction_index))?null:(function (){var dest_shape = (cljs.core.truth_(app.common.types.shape.interactions.destination_QMARK_(interaction))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction)):null);
var level = calc_level(index,new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(shape));
return rumext.v2.jsxs("g",{'children':[rumext.v2.jsx(app.main.ui.workspace.viewport.interactions.interaction_path,{'index':index,'level':level,'orig-shape':shape,'dest-shape':dest_shape,'selected':selected,'selected?':true,'action-type':new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction),'zoom':zoom}),((((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"open-overlay","open-overlay",-611391651))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"toggle-overlay","toggle-overlay",1195934961))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"manual","manual",-237370608)))))?(((((!((move_overlay_to == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(move_overlay_index,index))))?rumext.v2.jsx(app.main.ui.workspace.viewport.interactions.overlay_marker,{'page-id':page_id,'index':index,'orig-shape':shape,'dest-shape':dest_shape,'position':move_overlay_to,'objects':objects,'hover-disabled?':hover_disabled_QMARK_}):rumext.v2.jsx(app.main.ui.workspace.viewport.interactions.overlay_marker,{'page-id':page_id,'index':index,'orig-shape':shape,'dest-shape':dest_shape,'position':new cljs.core.Keyword(null,"overlay-position","overlay-position",-2038634730).cljs$core$IFn$_invoke$arity$1(interaction),'objects':objects,'hover-disabled?':hover_disabled_QMARK_})):null)]},""+"interaction-path-"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape) ?? "")+"-"+(index ?? ""));
})()));

return out_arr__35152__auto____$1;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(shape))):(cljs.core.truth_((function (){var and__5023__auto__ = shape;
if(cljs.core.truth_(and__5023__auto__)){
return (((!(app.common.files.helpers.unframed_shape_QMARK_(shape)))) && (cljs.core.not((function (){var fexpr__57179 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move","move",-2110884309),null,new cljs.core.Keyword(null,"rotate","rotate",152705015),null], null), null);
return (fexpr__57179.cljs$core$IFn$_invoke$arity$1 ? fexpr__57179.cljs$core$IFn$_invoke$arity$1(current_transform) : fexpr__57179.call(null,current_transform));
})())));
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.workspace.viewport.interactions.interaction_handle,{'index':null,'shape':shape,'selected':selected,'zoom':zoom},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)):null)));

return out_arr__35152__auto__;
}),[],selected_shapes)]})]});
});

(app.main.ui.workspace.viewport.interactions.interactions.displayName = "interactions");


//# sourceMappingURL=app.main.ui.workspace.viewport.interactions.js.map
