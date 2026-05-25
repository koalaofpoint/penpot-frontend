import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.common.types.path.js";
import "./app.common.types.path.helpers.js";
import "./app.main.data.workspace.path.js";
import "./app.main.snap.js";
import "./app.main.store.js";
import "./app.main.streams.js";
import "./app.main.ui.css_cursors.js";
import "./app.main.ui.hooks.js";
import "./app.util.dom.js";
import "./app.util.keyboard.js";
import "./clojure.set.js";
import "./goog.events.events.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.shapes.path.editor');
app.main.ui.workspace.shapes.path.editor.point_radius = (5);
app.main.ui.workspace.shapes.path.editor.point_radius_selected = (4);
app.main.ui.workspace.shapes.path.editor.point_radius_active_area = (15);
app.main.ui.workspace.shapes.path.editor.point_radius_stroke_width = (1);
app.main.ui.workspace.shapes.path.editor.handler_side = (6);
app.main.ui.workspace.shapes.path.editor.handler_stroke_width = (1);
app.main.ui.workspace.shapes.path.editor.path_preview_dasharray = (4);
app.main.ui.workspace.shapes.path.editor.path_snap_stroke_width = (1);
app.main.ui.workspace.shapes.path.editor.accent_color = "var(--color-accent-tertiary)";
app.main.ui.workspace.shapes.path.editor.secondary_color = "var(--color-accent-quaternary)";
app.main.ui.workspace.shapes.path.editor.black_color = "var(--app-black)";
app.main.ui.workspace.shapes.path.editor.white_color = "var(--app-white)";
app.main.ui.workspace.shapes.path.editor.gray_color = "var(--df-secondary)";
app.main.ui.workspace.shapes.path.editor.path_point_STAR_ = (function app$main$ui$workspace$shapes$path$editor$path_point_STAR_(props_56716){
var is_last = props_56716.isLast;
var edit_mode = props_56716.editMode;
var is_new = props_56716.isNew;
var zoom = props_56716.zoom;
var is_selected = props_56716.isSelected;
var is_start_path = props_56716.isStartPath;
var is_curve = props_56716.isCurve;
var is_preview = props_56716.isPreview;
var is_hover = props_56716.isHover;
var position = props_56716.position;
var map__56717 = position;
var map__56717__$1 = cljs.core.__destructure_map(map__56717);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56717__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56717__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var is_draw = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edit_mode,new cljs.core.Keyword(null,"draw","draw",1358331674));
var is_move = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edit_mode,new cljs.core.Keyword(null,"move","move",-2110884309));
var is_active = ((is_selected) || (is_hover));
var on_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.path_pointer_enter(position));
}));
var on_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.path_pointer_leave(position));
}));
var on_pointer_down = (function (event){
if(app.util.dom.left_mouse_QMARK_(event)){
app.util.dom.stop_propagation(event);

app.util.dom.prevent_default(event);

if(cljs.core.truth_((function (){var and__5023__auto__ = is_new;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.meta(position) == null)));
} else {
return and__5023__auto__;
}
})())){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.create_node_at_position(cljs.core.meta(position)));
} else {
}

var is_shift = app.util.keyboard.shift_QMARK_(event);
var is_mod = app.util.keyboard.mod_QMARK_(event);
if(cljs.core.truth_(is_last)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.reset_last_handler());
} else {
if(((is_move) && (((is_mod) && (cljs.core.not(is_curve)))))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.make_curve.cljs$core$IFn$_invoke$arity$1(position));
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = is_move;
if(and__5023__auto__){
var and__5023__auto____$1 = is_mod;
if(and__5023__auto____$1){
return is_curve;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.make_corner.cljs$core$IFn$_invoke$arity$1(position));
} else {
if(is_move){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.start_move_path_point(position,is_shift));
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = is_draw;
if(and__5023__auto__){
return is_start_path;
} else {
return and__5023__auto__;
}
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.start_path_from_point(position));
} else {
if(((is_draw) && (cljs.core.not(is_start_path)))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.close_path_drag_start(position));
} else {
return null;
}
}
}
}
}
}
} else {
return null;
}
});
return rumext.v2.jsxs("g",{'className':"path-point",'children':[rumext.v2.jsx("circle",{'className':"path-point",'cx':x,'cy':y,'r':((is_active)?(app.main.ui.workspace.shapes.path.editor.point_radius / zoom):(app.main.ui.workspace.shapes.path.editor.point_radius_selected / zoom)),'style':{'strokeWidth':(app.main.ui.workspace.shapes.path.editor.point_radius_stroke_width / zoom),'stroke':((is_active)?app.main.ui.workspace.shapes.path.editor.black_color:((is_preview)?app.main.ui.workspace.shapes.path.editor.secondary_color:app.main.ui.workspace.shapes.path.editor.accent_color
)),'fill':(cljs.core.truth_(is_selected)?app.main.ui.workspace.shapes.path.editor.accent_color:app.main.ui.workspace.shapes.path.editor.white_color
)}}),rumext.v2.jsx("circle",{'cy':y,'className':((is_draw)?app.main.ui.css_cursors.get_static("pen-node"):((is_move)?app.main.ui.css_cursors.get_static("pointer-node"):null)),'style':{'strokeWidth':(0),'fill':"none"},'r':(app.main.ui.workspace.shapes.path.editor.point_radius_active_area / zoom),'onPointerDown':on_pointer_down,'onPointerLeave':on_leave,'cx':x,'onPointerEnter':on_enter,'pointerEvents':((is_preview)?null:"visible")})]});
});

(app.main.ui.workspace.shapes.path.editor.path_point_STAR_.displayName = "path-point*");

app.main.ui.workspace.shapes.path.editor.path_handler_STAR_ = (function app$main$ui$workspace$shapes$path$editor$path_handler_STAR_(props_56718){
var handler = props_56718.handler;
var edit_mode = props_56718.editMode;
var zoom = props_56718.zoom;
var index = props_56718.index;
var is_selected = props_56718.isSelected;
var prefix = props_56718.prefix;
var is_hover = props_56718.isHover;
var snap_angle = props_56718.snapAngle;
var point = props_56718.point;
var x = (handler?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(handler,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (handler?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(handler,new cljs.core.Keyword(null,"y","y",-1757859776)));
var is_draw = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edit_mode,new cljs.core.Keyword(null,"draw","draw",1358331674));
var is_move = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edit_mode,new cljs.core.Keyword(null,"move","move",-2110884309));
var is_active = ((is_selected) || (is_hover));
var on_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(prefix)],(function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.path_handler_enter(index,prefix));
}));
var on_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(prefix)],(function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.path_handler_leave(index,prefix));
}));
var on_pointer_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(prefix),rumext.v2.adapt(is_move)],(function (event){
if(app.util.dom.left_mouse_QMARK_(event)){
app.util.dom.stop_propagation(event);

app.util.dom.prevent_default(event);

if(is_move){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.start_move_handler(index,prefix));
} else {
return null;
}
} else {
return null;
}
}));
return rumext.v2.jsxs("g",{'className':"handler",'pointerEvents':((is_draw)?"none":"visible"),'children':[rumext.v2.jsx("line",{'x1':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point),'y1':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point),'x2':x,'y2':y,'style':{'stroke':((is_hover)?app.main.ui.workspace.shapes.path.editor.black_color:app.main.ui.workspace.shapes.path.editor.gray_color),'strokeWidth':(app.main.ui.workspace.shapes.path.editor.point_radius_stroke_width / zoom)}}),((snap_angle)?rumext.v2.jsx("line",{'x1':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point),'y1':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point),'x2':x,'y2':y,'style':{'stroke':app.main.ui.workspace.shapes.path.editor.secondary_color,'strokeWidth':(app.main.ui.workspace.shapes.path.editor.point_radius_stroke_width / zoom)}}):null),rumext.v2.jsx("rect",{'x':(x - ((app.main.ui.workspace.shapes.path.editor.handler_side / (2)) / zoom)),'y':(y - ((app.main.ui.workspace.shapes.path.editor.handler_side / (2)) / zoom)),'width':(app.main.ui.workspace.shapes.path.editor.handler_side / zoom),'height':(app.main.ui.workspace.shapes.path.editor.handler_side / zoom),'style':{'strokeWidth':(app.main.ui.workspace.shapes.path.editor.handler_stroke_width / zoom),'stroke':((is_active)?app.main.ui.workspace.shapes.path.editor.black_color:app.main.ui.workspace.shapes.path.editor.accent_color
),'fill':((is_selected)?app.main.ui.workspace.shapes.path.editor.accent_color:app.main.ui.workspace.shapes.path.editor.white_color
)}}),rumext.v2.jsx("circle",{'cx':x,'cy':y,'r':(app.main.ui.workspace.shapes.path.editor.point_radius_active_area / zoom),'onPointerDown':on_pointer_down,'onPointerEnter':on_enter,'onPointerLeave':on_leave,'style':{'fill':"none",'strokeWidth':(0)},'className':((is_move)?app.main.ui.css_cursors.get_static("pointer-move"):null)})]});
});

(app.main.ui.workspace.shapes.path.editor.path_handler_STAR_.displayName = "path-handler*");

app.main.ui.workspace.shapes.path.editor.path_preview_STAR_ = (function app$main$ui$workspace$shapes$path$editor$path_preview_STAR_(props_56719){
var zoom = props_56719.zoom;
var from = props_56719.from;
var segment = props_56719.segment;
var path = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(segment)))?(function (){var segments = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"params","params",710516235),from], null)], null);
var segments__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segments,segment);
return app.common.types.path.content(segments__$1);
})():null);
var position = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(segment)],(function (){
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(segment));
}));
return rumext.v2.jsxs("g",{'className':"preview",'style':{'pointerEvents':"none"},'children':[(((!((path == null))))?rumext.v2.jsx("path",{'style':{'fill':"none",'stroke':app.main.ui.workspace.shapes.path.editor.black_color,'strokeWidth':(app.main.ui.workspace.shapes.path.editor.handler_stroke_width / zoom),'strokeDasharray':(app.main.ui.workspace.shapes.path.editor.path_preview_dasharray / zoom)},'d':cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)}):null),rumext.v2.jsx(app.main.ui.workspace.shapes.path.editor.path_point_STAR_,{'position':position,'isPreview':true,'zoom':zoom})]});
});

(app.main.ui.workspace.shapes.path.editor.path_preview_STAR_.displayName = "path-preview*");

app.main.ui.workspace.shapes.path.editor.path_snap_STAR_ = (function app$main$ui$workspace$shapes$path$editor$path_snap_STAR_(props_56720){
var zoom = props_56720.zoom;
var selected = props_56720.selected;
var points = props_56720.points;
var ranges = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected),rumext.v2.adapt(points)],(function (){
return app.main.snap.create_ranges.cljs$core$IFn$_invoke$arity$2(points,selected);
}));
var snap_matches = app.main.snap.get_snap_delta_match(selected,ranges,((1) / zoom));
var matches = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.second(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(snap_matches)),cljs.core.second(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(snap_matches)));
return rumext.v2.jsx("g",{'className':"snap-paths",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__56721){
var vec__56722 = p__56721;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56722,(0),null);
var vec__56725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56722,(1),null);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56725,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56725,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx("line",{'x1':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(from),'y1':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from),'x2':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to),'y2':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to),'style':{'stroke':app.main.ui.workspace.shapes.path.editor.secondary_color,'strokeWidth':(app.main.ui.workspace.shapes.path.editor.path_snap_stroke_width / zoom)}},""+"snap-"+(idx ?? "")+"-"+(from ?? "")+"-"+(to ?? "")));

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(matches))});
});

(app.main.ui.workspace.shapes.path.editor.path_snap_STAR_.displayName = "path-snap*");

app.main.ui.workspace.shapes.path.editor.matching_handler_QMARK_ = (function app$main$ui$workspace$shapes$path$editor$matching_handler_QMARK_(content,node,handlers){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(handlers))){
var vec__56728 = handlers;
var vec__56731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56728,(0),null);
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56731,(0),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56731,(1),null);
var vec__56734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56728,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56734,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56734,(1),null);
var p1__$1 = app.common.types.path.get_handler_point(content,i1,p1);
var p2__$1 = app.common.types.path.get_handler_point(content,i2,p2);
var v1 = app.common.geom.point.to_vec(node,p1__$1);
var v2 = app.common.geom.point.to_vec(node,p2__$1);
var angle = app.common.geom.point.angle_with_other(v1,v2);
return (((180) - angle) <= 0.1);
} else {
return null;
}
});
app.main.ui.workspace.shapes.path.editor.path_editor_STAR_ = (function app$main$ui$workspace$shapes$path$editor$path_editor_STAR_(props_56737){
var zoom = props_56737.zoom;
var state = props_56737.state;
var shape = props_56737.shape;
var hover_point = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var editor_ref = rumext.v2.use_ref(null);
var map__56738 = state;
var map__56738__$1 = cljs.core.__destructure_map(map__56738);
var prev_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"prev-handler","prev-handler",1106999648));
var edit_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993));
var moving_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"moving-handler","moving-handler",-188315359));
var hover_points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"hover-points","hover-points",-372943198));
var snap_toggled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"snap-toggled","snap-toggled",-1650735574));
var moving_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"moving-nodes","moving-nodes",-1718310036));
var hover_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"hover-handlers","hover-handlers",976618668));
var last_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"last-point","last-point",-247743763));
var selected_points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"selected-points","selected-points",-1374936179));
var content_modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"content-modifiers","content-modifiers",158766480));
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"preview","preview",451279890));
var drag_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"drag-handler","drag-handler",401100376));
var selected_points__$1 = (function (){var or__5025__auto__ = selected_points;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var base_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"content","content",15833224));
var base_points = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(base_content)],(function (){
return app.common.types.path.get_points(base_content);
}));
var content = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(base_content),rumext.v2.adapt(content_modifiers)],(function (){
return app.common.types.path.apply_content_modifiers(base_content,content_modifiers);
}));
var content_points = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(content)],(function (){
return app.common.types.path.get_points(content);
}));
var point__GT_base = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.hash_map,content_points,base_points));
var base__GT_point = clojure.set.map_invert(point__GT_base);
var points = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(content_points)],(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,content_points);
}));
var last_p = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(cljs.core.last(content));
var handlers = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(content)],(function (){
return app.common.types.path.get_handlers(content);
}));
var is_path_start = (!((!((last_point == null)))));
var show_snap_QMARK_ = (function (){var and__5023__auto__ = snap_toggled;
if(and__5023__auto__){
var or__5025__auto__ = (!((drag_handler == null)));
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (!((preview == null)));
if(or__5025__auto____$1){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = (!((moving_handler == null)));
if(or__5025__auto____$2){
return or__5025__auto____$2;
} else {
return moving_nodes;
}
}
}
} else {
return and__5023__auto__;
}
})();
rumext.v2.use_layout_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(edit_mode)],(function (){
var key = goog.events.listen(app.util.dom.get_root(),"dblclick",(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edit_mode,new cljs.core.Keyword(null,"move","move",-2110884309))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178));
} else {
return null;
}
}));
return (function (){
return goog.events.unlistenByKey(key);
});
}));

app.main.ui.hooks.use_stream.cljs$core$IFn$_invoke$arity$3(app.main.streams.mouse_position,[rumext.v2.adapt(base_content),rumext.v2.adapt(zoom)],(function (position){
var temp__5825__auto__ = app.common.types.path.closest_point(base_content,position,(0.01 / zoom));
if(cljs.core.truth_(temp__5825__auto__)){
var point = temp__5825__auto__;
return cljs.core.reset_BANG_(hover_point,(((app.common.geom.point.distance(position,point) < ((10) / zoom)))?point:null));
} else {
return null;
}
}));

return rumext.v2.jsxs("g",{'className':"path-editor",'ref':editor_ref,'children':[rumext.v2.jsx("path",{'d':content.toString(),'style':{'fill':"none",'stroke':app.main.ui.workspace.shapes.path.editor.accent_color,'strokeWidth':((1) / zoom)}}),(cljs.core.truth_((function (){var and__5023__auto__ = preview;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(drag_handler);
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.workspace.shapes.path.editor.path_preview_STAR_,{'segment':preview,'from':last_p,'zoom':zoom}):null),(cljs.core.truth_((function (){var and__5023__auto__ = drag_handler;
if(cljs.core.truth_(and__5023__auto__)){
return last_p;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx("g",{'className':"drag-handler",'pointerEvents':"none",'children':rumext.v2.jsx(app.main.ui.workspace.shapes.path.editor.path_handler_STAR_,{'point':last_p,'handler':drag_handler,'editMode':edit_mode,'zoom':zoom})}):null),(cljs.core.truth_(cljs.core.deref(hover_point))?rumext.v2.jsx("g",{'className':"hover-point",'children':rumext.v2.jsx(app.main.ui.workspace.shapes.path.editor.path_point_STAR_,{'position':cljs.core.deref(hover_point),'editMode':edit_mode,'isNew':true,'isStartPath':is_path_start,'zoom':zoom})}):null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,position){
out_arr__35152__auto__.push((function (){var pos_x = (position?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"x","x",2099068185)));
var pos_y = (position?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"y","y",-1757859776)));
var show_handler_QMARK_ = (function (p__56776){
var vec__56777 = p__56776;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56777,(0),null);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56777,(1),null);
var handler_position = app.common.types.path.get_handler_point(content,index,prefix);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(position,handler_position);
});
var position_handlers = cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(show_handler_QMARK_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(handlers,position)));
var point_selected_QMARK_ = cljs.core.contains_QMARK_(selected_points__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(point__GT_base,position));
var point_hover_QMARK_ = cljs.core.contains_QMARK_(hover_points,cljs.core.get.cljs$core$IFn$_invoke$arity$2(point__GT_base,position));
var is_last = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_point,cljs.core.get.cljs$core$IFn$_invoke$arity$2(point__GT_base,position));
var is_curve = cljs.core.boolean$(position_handlers);
return rumext.v2.jsxs("g",{'className':"path-node",'children':[rumext.v2.jsx("g",{'className':"point-handlers",'pointerEvents':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edit_mode,new cljs.core.Keyword(null,"draw","draw",1358331674)))?"none":null),'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto____$1,p__56780){
var vec__56781 = p__56780;
var hindex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56781,(0),null);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56781,(1),null);
out_arr__35152__auto____$1.push((function (){var handler_position = app.common.types.path.get_handler_point(content,hindex,prefix);
var handler_hover_QMARK_ = cljs.core.contains_QMARK_(hover_handlers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hindex,prefix], null));
var moving_handler_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(handler_position,moving_handler);
var matching_handler_QMARK_ = app.main.ui.workspace.shapes.path.editor.matching_handler_QMARK_(content,position,position_handlers);
if(cljs.core.truth_((function (){var and__5023__auto__ = position;
if(cljs.core.truth_(and__5023__auto__)){
return handler_position;
} else {
return and__5023__auto__;
}
})())){
return rumext.v2.jsx(app.main.ui.workspace.shapes.path.editor.path_handler_STAR_,{'editMode':edit_mode,'zoom':zoom,'index':hindex,'prefix':prefix,'isHover':handler_hover_QMARK_,'point':position,'snapAngle':(function (){var and__5023__auto__ = moving_handler_QMARK_;
if(and__5023__auto__){
return matching_handler_QMARK_;
} else {
return and__5023__auto__;
}
})(),'handler':handler_position},""+(hindex ?? "")+"-"+(app.common.data.name(prefix) ?? ""));
} else {
return null;
}
})());

return out_arr__35152__auto____$1;
}),[],position_handlers)}),rumext.v2.jsx(app.main.ui.workspace.shapes.path.editor.path_point_STAR_,{'position':position,'zoom':zoom,'editMode':edit_mode,'isSelected':point_selected_QMARK_,'isHover':point_hover_QMARK_,'isLast':is_last,'isStartPath':is_path_start,'isCurve':is_curve})]},""+(pos_x ?? "")+"-"+(pos_y ?? ""));
})());

return out_arr__35152__auto__;
}),[],points),(cljs.core.truth_((function (){var and__5023__auto__ = prev_handler;
if(cljs.core.truth_(and__5023__auto__)){
return last_p;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx("g",{'className':"prev-handler",'pointerEvents':"none",'children':rumext.v2.jsx(app.main.ui.workspace.shapes.path.editor.path_handler_STAR_,{'point':last_p,'editMode':edit_mode,'handler':prev_handler,'zoom':zoom})}):null),((show_snap_QMARK_)?(function (){var vec__56784 = (((!((drag_handler == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.createAsIfByAssoc([drag_handler]),points], null):(((!((preview == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.createAsIfByAssoc([app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(preview)]),points], null):(((!((moving_handler == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.createAsIfByAssoc([moving_handler]),points], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(base__GT_point,selected_points__$1)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(selected_points__$1,points))], null)
)));
var snap_selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56784,(0),null);
var snap_points = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56784,(1),null);
return rumext.v2.jsx("g",{'className':"path-snap",'pointerEvents':"none",'children':rumext.v2.jsx(app.main.ui.workspace.shapes.path.editor.path_snap_STAR_,{'selected':snap_selected,'points':snap_points,'zoom':zoom})});
})():null)]});
});

(app.main.ui.workspace.shapes.path.editor.path_editor_STAR_.displayName = "path-editor*");


//# sourceMappingURL=app.main.ui.workspace.shapes.path.editor.js.map
