import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.js";
import "./app.common.math.js";
import "./app.common.types.color.js";
import "./app.common.types.shape_tree.js";
import "./app.common.uuid.js";
import "./app.main.data.workspace.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.streams.js";
import "./app.main.ui.context.js";
import "./app.main.ui.css_cursors.js";
import "./app.main.ui.formats.js";
import "./app.main.ui.workspace.viewport.rulers.js";
import "./app.util.dom.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.viewport.guides');
app.main.ui.workspace.viewport.guides.guide_width = (1);
app.main.ui.workspace.viewport.guides.guide_opacity = 0.7;
app.main.ui.workspace.viewport.guides.guide_opacity_hover = (1);
app.main.ui.workspace.viewport.guides.guide_color = "#ff3277";
app.main.ui.workspace.viewport.guides.guide_pill_width = (34);
app.main.ui.workspace.viewport.guides.guide_pill_height = (20);
app.main.ui.workspace.viewport.guides.guide_pill_corner_radius = (4);
app.main.ui.workspace.viewport.guides.guide_active_area = (16);
app.main.ui.workspace.viewport.guides.guide_creation_margin_left = (8);
app.main.ui.workspace.viewport.guides.guide_creation_margin_top = (28);
app.main.ui.workspace.viewport.guides.guide_creation_width = (16);
app.main.ui.workspace.viewport.guides.guide_creation_height = (24);
/**
 * Hooks to support drag/drop for existing guides and new guides
 */
app.main.ui.workspace.viewport.guides.use_guide = (function app$main$ui$workspace$viewport$guides$use_guide(on_guide_change,get_hover_frame,zoom,p__57005){
var map__57006 = p__57005;
var map__57006__$1 = cljs.core.__destructure_map(map__57006);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57006__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57006__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var axis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57006__$1,new cljs.core.Keyword(null,"axis","axis",-1215390822));
var frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57006__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072));
var dragging_ref = rumext.v2.use_ref(false);
var start_ref = rumext.v2.use_ref(null);
var start_pos_ref = rumext.v2.use_ref(null);
var state = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hover","hover",-341141711),false,new cljs.core.Keyword(null,"new-position","new-position",-102281521),null,new cljs.core.Keyword(null,"new-frame-id","new-frame-id",150989205),frame_id], null);
}));
var frame_id__$1 = new cljs.core.Keyword(null,"new-frame-id","new-frame-id",150989205).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var frame_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frame_id__$1)],(function (){
return app.main.refs.object_by_id(frame_id__$1);
}));
var frame = rumext.v2.deref(frame_ref);
var snap_pixel_QMARK_ = rumext.v2.deref(app.main.refs.snap_pixel_QMARK_);
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
var on_pointer_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(read_only_QMARK_)],(function (){
if(cljs.core.truth_(read_only_QMARK_)){
return null;
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_hover_guide(id,true));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"hover","hover",-341141711),true);
}
}));
var on_pointer_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(read_only_QMARK_)],(function (){
if(cljs.core.truth_(read_only_QMARK_)){
return null;
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_hover_guide(id,false));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"hover","hover",-341141711),false);
}
}));
var on_pointer_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(read_only_QMARK_)],(function (event){
if(cljs.core.truth_(read_only_QMARK_)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),event.button)){
app.util.dom.capture_pointer(event);

rumext.v2.set_ref_val_BANG_(dragging_ref,true);

rumext.v2.set_ref_val_BANG_(start_ref,app.util.dom.get_client_position(event));

return rumext.v2.set_ref_val_BANG_(start_pos_ref,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.streams.mouse_position),axis));
} else {
return null;
}
}
}));
var on_pointer_up = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.select_keys(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-position","new-position",-102281521),new cljs.core.Keyword(null,"new-frame-id","new-frame-id",150989205)], null))),rumext.v2.adapt(on_guide_change),rumext.v2.adapt(read_only_QMARK_)],(function (){
if(cljs.core.truth_(read_only_QMARK_)){
return null;
} else {
if((!((on_guide_change == null)))){
if((!((new cljs.core.Keyword(null,"new-position","new-position",-102281521).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)) == null)))){
var G__57008 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"new-position","new-position",-102281521).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"new-frame-id","new-frame-id",150989205).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null);
return (on_guide_change.cljs$core$IFn$_invoke$arity$1 ? on_guide_change.cljs$core$IFn$_invoke$arity$1(G__57008) : on_guide_change.call(null,G__57008));
} else {
return null;
}
} else {
return null;
}
}
}));
var on_lost_pointer_capture = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(read_only_QMARK_)],(function (event){
if(cljs.core.truth_(read_only_QMARK_)){
return null;
} else {
app.util.dom.release_pointer(event);

rumext.v2.set_ref_val_BANG_(dragging_ref,false);

rumext.v2.set_ref_val_BANG_(start_ref,null);

rumext.v2.set_ref_val_BANG_(start_pos_ref,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"new-position","new-position",-102281521),null);
}
}));
var on_pointer_move = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(position),rumext.v2.adapt(zoom),rumext.v2.adapt(snap_pixel_QMARK_),rumext.v2.adapt(read_only_QMARK_),rumext.v2.adapt(get_hover_frame)],(function (event){
if(cljs.core.truth_(read_only_QMARK_)){
return null;
} else {
if(cljs.core.truth_(rumext.v2.ref_val(dragging_ref))){
var start_pt = rumext.v2.ref_val(start_ref);
var start_pos = rumext.v2.ref_val(start_pos_ref);
var current_pt = app.util.dom.get_client_position(event);
var delta = ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_pt,axis) - cljs.core.get.cljs$core$IFn$_invoke$arity$2(start_pt,axis)) / zoom);
var new_position = (((!((position == null))))?(position + delta):(start_pos + delta));
var new_position__$1 = (cljs.core.truth_(snap_pixel_QMARK_)?app.common.math.round.cljs$core$IFn$_invoke$arity$1(new_position):new_position);
var new_frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2((get_hover_frame.cljs$core$IFn$_invoke$arity$0 ? get_hover_frame.cljs$core$IFn$_invoke$arity$0() : get_hover_frame.call(null)),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"new-position","new-position",-102281521),new_position__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"new-frame-id","new-frame-id",150989205),new_frame_id], 0));
} else {
return null;
}
}
}));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"on-pointer-enter","on-pointer-enter",199832041),on_pointer_enter,new cljs.core.Keyword(null,"on-pointer-leave","on-pointer-leave",253985380),on_pointer_leave,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),on_pointer_down,new cljs.core.Keyword(null,"on-pointer-up","on-pointer-up",385194000),on_pointer_up,new cljs.core.Keyword(null,"on-lost-pointer-capture","on-lost-pointer-capture",-1554883134),on_lost_pointer_capture,new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695),on_pointer_move,new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"frame","frame",-1711082588),frame], null);
});
app.main.ui.workspace.viewport.guides.guide_area_axis = (function app$main$ui$workspace$viewport$guides$guide_area_axis(pos,vbox,zoom,frame,axis){
var rulers_pos = (app.main.ui.workspace.viewport.rulers.rulers_pos / zoom);
var guide_active_area = ((16) / zoom);
if((((!((frame == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"x","x",2099068185))))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(pos - (guide_active_area / (2))),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"width","width",-384071477),guide_active_area,new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(frame)], null);
} else {
if((!((frame == null)))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"y","y",-1757859776),(pos - (guide_active_area / (2))),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"height","height",1025178622),guide_active_area], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"x","x",2099068185))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(pos - (guide_active_area / (2))),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox) + rulers_pos),new cljs.core.Keyword(null,"width","width",-384071477),guide_active_area,new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vbox)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox) + rulers_pos),new cljs.core.Keyword(null,"y","y",-1757859776),(pos - (guide_active_area / (2))),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vbox),new cljs.core.Keyword(null,"height","height",1025178622),guide_active_area], null);

}
}
}
});
app.main.ui.workspace.viewport.guides.guide_line_axis = (function app$main$ui$workspace$viewport$guides$guide_line_axis(var_args){
var G__57017 = arguments.length;
switch (G__57017) {
case 3:
return app.main.ui.workspace.viewport.guides.guide_line_axis.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.ui.workspace.viewport.guides.guide_line_axis.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.workspace.viewport.guides.guide_line_axis.cljs$core$IFn$_invoke$arity$3 = (function (pos,vbox,axis){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"x","x",2099068185))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),pos,new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox),new cljs.core.Keyword(null,"x2","x2",-1362513475),pos,new cljs.core.Keyword(null,"y2","y2",-718691301),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vbox))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox),new cljs.core.Keyword(null,"y1","y1",589123466),pos,new cljs.core.Keyword(null,"x2","x2",-1362513475),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vbox)),new cljs.core.Keyword(null,"y2","y2",-718691301),pos], null);
}
}));

(app.main.ui.workspace.viewport.guides.guide_line_axis.cljs$core$IFn$_invoke$arity$4 = (function (pos,vbox,frame,axis){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"x","x",2099068185))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"l2-x2","l2-x2",-962595741),new cljs.core.Keyword(null,"l1-x2","l1-x2",-1981212693),new cljs.core.Keyword(null,"l3-x2","l3-x2",-949175405),new cljs.core.Keyword(null,"l3-x1","l3-x1",-228486922),new cljs.core.Keyword(null,"l1-y1","l1-y1",-946090345),new cljs.core.Keyword(null,"l3-y1","l3-y1",-159671272),new cljs.core.Keyword(null,"l3-y2","l3-y2",-331288200),new cljs.core.Keyword(null,"l1-y2","l1-y2",1399825048),new cljs.core.Keyword(null,"l2-x1","l2-x1",1119885113),new cljs.core.Keyword(null,"l1-x1","l1-x1",867974042),new cljs.core.Keyword(null,"l2-y2","l2-y2",1349041214),new cljs.core.Keyword(null,"l2-y1","l2-y1",503329823)],[pos,pos,pos,pos,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(frame)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vbox)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame),pos,pos,(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(frame)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame)]);
} else {
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"l2-x2","l2-x2",-962595741),new cljs.core.Keyword(null,"l1-x2","l1-x2",-1981212693),new cljs.core.Keyword(null,"l3-x2","l3-x2",-949175405),new cljs.core.Keyword(null,"l3-x1","l3-x1",-228486922),new cljs.core.Keyword(null,"l1-y1","l1-y1",-946090345),new cljs.core.Keyword(null,"l3-y1","l3-y1",-159671272),new cljs.core.Keyword(null,"l3-y2","l3-y2",-331288200),new cljs.core.Keyword(null,"l1-y2","l1-y2",1399825048),new cljs.core.Keyword(null,"l2-x1","l2-x1",1119885113),new cljs.core.Keyword(null,"l1-x1","l1-x1",867974042),new cljs.core.Keyword(null,"l2-y2","l2-y2",1349041214),new cljs.core.Keyword(null,"l2-y1","l2-y1",503329823)],[(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(frame)),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vbox)),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(frame)),pos,pos,pos,pos,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox),pos,pos]);
}
}));

(app.main.ui.workspace.viewport.guides.guide_line_axis.cljs$lang$maxFixedArity = 4);

app.main.ui.workspace.viewport.guides.guide_pill_axis = (function app$main$ui$workspace$viewport$guides$guide_pill_axis(pos,vbox,zoom,axis){
var rulers_pos = (app.main.ui.workspace.viewport.rulers.rulers_pos / zoom);
var guide_pill_width = ((34) / zoom);
var guide_pill_height = ((20) / zoom);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"x","x",2099068185))){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"rect-x","rect-x",2027933546),(pos - (guide_pill_width / (2))),new cljs.core.Keyword(null,"rect-y","rect-y",-234175138),(((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox) + rulers_pos) + (- (guide_pill_width / (2)))) + ((3) / zoom)),new cljs.core.Keyword(null,"rect-width","rect-width",1414450590),guide_pill_width,new cljs.core.Keyword(null,"rect-height","rect-height",1948275951),guide_pill_height,new cljs.core.Keyword(null,"text-x","text-x",-1791964043),pos,new cljs.core.Keyword(null,"text-y","text-y",-1680264360),((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox) + rulers_pos) + (- ((3) / zoom)))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"rect-x","rect-x",2027933546),(((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox) + rulers_pos) + (- (guide_pill_height / (2)))) + (- ((4) / zoom))),new cljs.core.Keyword(null,"rect-y","rect-y",-234175138),(pos - (guide_pill_width / (2))),new cljs.core.Keyword(null,"rect-width","rect-width",1414450590),guide_pill_height,new cljs.core.Keyword(null,"rect-height","rect-height",1948275951),guide_pill_width,new cljs.core.Keyword(null,"text-x","text-x",-1791964043),((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox) + rulers_pos) + (- ((3) / zoom))),new cljs.core.Keyword(null,"text-y","text-y",-1680264360),pos], null);
}
});
app.main.ui.workspace.viewport.guides.guide_inside_vbox_QMARK_ = (function app$main$ui$workspace$viewport$guides$guide_inside_vbox_QMARK_(var_args){
var G__57027 = arguments.length;
switch (G__57027) {
case 2:
return app.main.ui.workspace.viewport.guides.guide_inside_vbox_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.ui.workspace.viewport.guides.guide_inside_vbox_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.workspace.viewport.guides.guide_inside_vbox_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (zoom,vbox){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.ui.workspace.viewport.guides.guide_inside_vbox_QMARK_,zoom,vbox);
}));

(app.main.ui.workspace.viewport.guides.guide_inside_vbox_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (zoom,p__57037,p__57038){
var map__57039 = p__57037;
var map__57039__$1 = cljs.core.__destructure_map(map__57039);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57039__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57039__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57039__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57039__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__57040 = p__57038;
var map__57040__$1 = cljs.core.__destructure_map(map__57040);
var axis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57040__$1,new cljs.core.Keyword(null,"axis","axis",-1215390822));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57040__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var rule_area_size = (app.main.ui.workspace.viewport.rulers.ruler_area_size / zoom);
var x1 = x;
var x2 = (x + width);
var y1 = y;
var y2 = (y + height);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"x","x",2099068185))){
return (((position >= (x1 + rule_area_size))) && ((position <= x2)));
} else {
return (((position >= (y1 + rule_area_size))) && ((position <= y2)));
}
}));

(app.main.ui.workspace.viewport.guides.guide_inside_vbox_QMARK_.cljs$lang$maxFixedArity = 3);

app.main.ui.workspace.viewport.guides.guide_creation_area = (function app$main$ui$workspace$viewport$guides$guide_creation_area(vbox,zoom,axis){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"x","x",2099068185))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox) + ((8) / zoom)),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox),new cljs.core.Keyword(null,"width","width",-384071477),((16) / zoom),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vbox)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox) + ((28) / zoom)),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vbox),new cljs.core.Keyword(null,"height","height",1025178622),((24) / zoom)], null);
}
});
app.main.ui.workspace.viewport.guides.is_guide_inside_frame_QMARK_ = (function app$main$ui$workspace$viewport$guides$is_guide_inside_frame_QMARK_(guide,frame){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(guide))){
return (((new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(guide) >= new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame))) && ((new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(guide) <= (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(frame)))));
} else {
return (((new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(guide) >= new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame))) && ((new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(guide) <= (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(frame)))));
}
});
app.main.ui.workspace.viewport.guides.guide_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$viewport$guides$guide_STAR_(props_57045){
var zoom = props_57045.zoom;
var vbox = props_57045.vbox;
var guide = props_57045.guide;
var frame_modifier = props_57045.frameModifier;
var get_hover_frame = props_57045.getHoverFrame;
var on_guide_change = props_57045.onGuideChange;
var disabled_guides = props_57045.disabledGuides;
var hover_frame = props_57045.hoverFrame;
var is_hover = props_57045.isHover;
var frame_transform = props_57045.frameTransform;
var axis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(guide,new cljs.core.Keyword(null,"axis","axis",-1215390822));
var handle_change_position = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_guide_change)],(function (changes){
if(cljs.core.truth_(on_guide_change)){
var G__57048 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([guide,changes], 0));
return (on_guide_change.cljs$core$IFn$_invoke$arity$1 ? on_guide_change.cljs$core$IFn$_invoke$arity$1(G__57048) : on_guide_change.call(null,G__57048));
} else {
return null;
}
}));
var map__57047 = app.main.ui.workspace.viewport.guides.use_guide(handle_change_position,get_hover_frame,zoom,guide);
var map__57047__$1 = cljs.core.__destructure_map(map__57047);
var on_pointer_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57047__$1,new cljs.core.Keyword(null,"on-pointer-enter","on-pointer-enter",199832041));
var on_pointer_leave = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57047__$1,new cljs.core.Keyword(null,"on-pointer-leave","on-pointer-leave",253985380));
var on_pointer_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57047__$1,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138));
var on_pointer_up = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57047__$1,new cljs.core.Keyword(null,"on-pointer-up","on-pointer-up",385194000));
var on_lost_pointer_capture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57047__$1,new cljs.core.Keyword(null,"on-lost-pointer-capture","on-lost-pointer-capture",-1554883134));
var on_pointer_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57047__$1,new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57047__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57047__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var base_frame = (function (){var or__5025__auto__ = frame;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return hover_frame;
}
})();
var frame__$1 = (function (){var G__57049 = base_frame;
var G__57049__$1 = (((!((frame_modifier == null))))?app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(G__57049,frame_modifier):G__57049);
if((!((frame_transform == null)))){
return app.common.geom.shapes.apply_transform(G__57049__$1,frame_transform);
} else {
return G__57049__$1;
}
})();
var move_vec = app.common.geom.point.to_vec(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(base_frame),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(base_frame)),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame__$1)));
var pos = ((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"new-position","new-position",-102281521).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(guide);
}
})() + cljs.core.get.cljs$core$IFn$_invoke$arity$2(move_vec,axis));
var guide_width = ((1) / zoom);
var guide_pill_corner_radius = ((4) / zoom);
var frame_guide_outside_QMARK_ = (((!((frame__$1 == null)))) && ((!(app.main.ui.workspace.viewport.guides.is_guide_inside_frame_QMARK_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(guide,new cljs.core.Keyword(null,"position","position",-2011731912),pos),frame__$1)))));
if((((frame__$1 == null)) || (((app.common.files.helpers.root_frame_QMARK_.cljs$core$IFn$_invoke$arity$1(frame__$1)) && ((!(app.common.types.shape_tree.rotated_frame_QMARK_(frame__$1)))))))){
return rumext.v2.jsxs("g",{'className':"guide-area",'opacity':((frame_guide_outside_QMARK_)?(0):null),'children':[(cljs.core.truth_(disabled_guides)?null:(function (){var map__57050 = app.main.ui.workspace.viewport.guides.guide_area_axis(pos,vbox,zoom,frame__$1,axis);
var map__57050__$1 = cljs.core.__destructure_map(map__57050);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57050__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57050__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57050__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57050__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return rumext.v2.jsx("rect",{'width':width,'height':height,'className':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"x","x",2099068185)))?app.main.ui.css_cursors.get_dynamic("resize-ew",(0)):app.main.ui.css_cursors.get_dynamic("resize-ns",(0))),'x':x,'onPointerUp':on_pointer_up,'style':{'fill':"none",'pointerEvents':((frame_guide_outside_QMARK_)?"none":"fill")},'onLostPointerCapture':on_lost_pointer_capture,'y':y,'onPointerMove':on_pointer_move,'onPointerDown':on_pointer_down,'onPointerLeave':on_pointer_leave,'onPointerEnter':on_pointer_enter});
})()),(((!((frame__$1 == null))))?(function (){var map__57051 = app.main.ui.workspace.viewport.guides.guide_line_axis.cljs$core$IFn$_invoke$arity$4(pos,vbox,frame__$1,axis);
var map__57051__$1 = cljs.core.__destructure_map(map__57051);
var l2_x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57051__$1,new cljs.core.Keyword(null,"l2-x1","l2-x1",1119885113));
var l1_x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57051__$1,new cljs.core.Keyword(null,"l1-x1","l1-x1",867974042));
var l2_y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57051__$1,new cljs.core.Keyword(null,"l2-y2","l2-y2",1349041214));
var l2_y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57051__$1,new cljs.core.Keyword(null,"l2-y1","l2-y1",503329823));
var l2_x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57051__$1,new cljs.core.Keyword(null,"l2-x2","l2-x2",-962595741));
var l1_x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57051__$1,new cljs.core.Keyword(null,"l1-x2","l1-x2",-1981212693));
var l3_x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57051__$1,new cljs.core.Keyword(null,"l3-x2","l3-x2",-949175405));
var l3_x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57051__$1,new cljs.core.Keyword(null,"l3-x1","l3-x1",-228486922));
var l1_y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57051__$1,new cljs.core.Keyword(null,"l1-y1","l1-y1",-946090345));
var l1_y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57051__$1,new cljs.core.Keyword(null,"l1-y2","l1-y2",1399825048));
var l3_y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57051__$1,new cljs.core.Keyword(null,"l3-y1","l3-y1",-159671272));
var l3_y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57051__$1,new cljs.core.Keyword(null,"l3-y2","l3-y2",-331288200));
return rumext.v2.jsxs("g",{'children':[(cljs.core.truth_((function (){var or__5025__auto__ = is_hover;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
}
})())?rumext.v2.jsx("line",{'x1':l1_x1,'y1':l1_y1,'x2':l1_x2,'y2':l1_y2,'style':{'stroke':app.main.ui.workspace.viewport.guides.guide_color,'strokeOpacity':(1),'strokeDasharray':["0, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((6) / zoom))].join(''),'strokeLinecap':"round",'strokeWidth':guide_width}}):null),rumext.v2.jsx("line",{'x1':l2_x1,'y1':l2_y1,'x2':l2_x2,'y2':l2_y2,'style':{'stroke':app.main.ui.workspace.viewport.guides.guide_color,'strokeWidth':guide_width,'strokeOpacity':(cljs.core.truth_((function (){var or__5025__auto__ = is_hover;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
}
})())?(1):0.7)}}),(cljs.core.truth_((function (){var or__5025__auto__ = is_hover;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
}
})())?rumext.v2.jsx("line",{'x1':l3_x1,'y1':l3_y1,'x2':l3_x2,'y2':l3_y2,'style':{'stroke':app.main.ui.workspace.viewport.guides.guide_color,'strokeOpacity':(1),'strokeWidth':guide_width,'strokeDasharray':["0, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((6) / zoom))].join(''),'strokeLinecap':"round"}}):null)]});
})():(function (){var map__57059 = app.main.ui.workspace.viewport.guides.guide_line_axis.cljs$core$IFn$_invoke$arity$3(pos,vbox,axis);
var map__57059__$1 = cljs.core.__destructure_map(map__57059);
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57059__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57059__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57059__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57059__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
return rumext.v2.jsx("line",{'x1':x1,'y1':y1,'x2':x2,'y2':y2,'style':{'stroke':app.main.ui.workspace.viewport.guides.guide_color,'strokeWidth':guide_width,'strokeOpacity':(cljs.core.truth_((function (){var or__5025__auto__ = is_hover;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
}
})())?(1):0.7)}});
})()),(cljs.core.truth_((function (){var or__5025__auto__ = is_hover;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
}
})())?(function (){var map__57060 = app.main.ui.workspace.viewport.guides.guide_pill_axis(pos,vbox,zoom,axis);
var map__57060__$1 = cljs.core.__destructure_map(map__57060);
var rect_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57060__$1,new cljs.core.Keyword(null,"rect-x","rect-x",2027933546));
var rect_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57060__$1,new cljs.core.Keyword(null,"rect-y","rect-y",-234175138));
var rect_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57060__$1,new cljs.core.Keyword(null,"rect-width","rect-width",1414450590));
var rect_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57060__$1,new cljs.core.Keyword(null,"rect-height","rect-height",1948275951));
var text_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57060__$1,new cljs.core.Keyword(null,"text-x","text-x",-1791964043));
var text_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57060__$1,new cljs.core.Keyword(null,"text-y","text-y",-1680264360));
return rumext.v2.jsxs("g",{'className':"guide-pill",'children':[rumext.v2.jsx("rect",{'x':rect_x,'y':rect_y,'width':rect_width,'height':rect_height,'rx':guide_pill_corner_radius,'ry':guide_pill_corner_radius,'style':{'fill':app.main.ui.workspace.viewport.guides.guide_color}}),rumext.v2.jsx("text",{'x':text_x,'y':text_y,'textAnchor':"middle",'dominantBaseline':"middle",'transform':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"y","y",-1757859776)))?["rotate(-90 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_y),")"].join(''):null),'style':{'fontSize':(app.main.ui.workspace.viewport.rulers.font_size / zoom),'fontFamily':app.main.ui.workspace.viewport.rulers.font_family,'fill':"#FFFFFF"},'children':app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1((pos - ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"x","x",2099068185)))?new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame__$1):new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame__$1))))})]});
})():null)]});
} else {
return null;
}
}));

(app.main.ui.workspace.viewport.guides.guide_STAR_.displayName = "guide*");

app.main.ui.workspace.viewport.guides.new_guide_area_STAR_ = (function app$main$ui$workspace$viewport$guides$new_guide_area_STAR_(props_57067){
var axis = props_57067.axis;
var zoom = props_57067.zoom;
var vbox = props_57067.vbox;
var get_hover_frame = props_57067.getHoverFrame;
var disabled_guides = props_57067.disabledGuides;
var on_guide_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(vbox)],(function (guide){
var guide__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(guide,new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next()),new cljs.core.Keyword(null,"axis","axis",-1215390822),axis);
if(app.main.ui.workspace.viewport.guides.guide_inside_vbox_QMARK_.cljs$core$IFn$_invoke$arity$3(zoom,vbox,guide__$1)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_guides(guide__$1));
} else {
return null;
}
}));
var map__57080 = app.main.ui.workspace.viewport.guides.use_guide(on_guide_change,get_hover_frame,zoom,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"axis","axis",-1215390822),axis], null));
var map__57080__$1 = cljs.core.__destructure_map(map__57080);
var on_pointer_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57080__$1,new cljs.core.Keyword(null,"on-pointer-enter","on-pointer-enter",199832041));
var on_pointer_leave = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57080__$1,new cljs.core.Keyword(null,"on-pointer-leave","on-pointer-leave",253985380));
var on_pointer_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57080__$1,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138));
var on_pointer_up = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57080__$1,new cljs.core.Keyword(null,"on-pointer-up","on-pointer-up",385194000));
var on_lost_pointer_capture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57080__$1,new cljs.core.Keyword(null,"on-lost-pointer-capture","on-lost-pointer-capture",-1554883134));
var on_pointer_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57080__$1,new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57080__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57080__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
return rumext.v2.jsxs("g",{'className':"new-guides",'children':[(cljs.core.truth_(disabled_guides)?null:(function (){var map__57081 = app.main.ui.workspace.viewport.guides.guide_creation_area(vbox,zoom,axis);
var map__57081__$1 = cljs.core.__destructure_map(map__57081);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57081__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57081__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57081__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57081__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return rumext.v2.jsx("rect",{'width':width,'height':height,'className':(cljs.core.truth_(read_only_QMARK_)?null:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"x","x",2099068185)))?app.main.ui.css_cursors.get_dynamic("resize-ew",(0)):app.main.ui.css_cursors.get_dynamic("resize-ns",(0)))),'x':x,'onPointerUp':on_pointer_up,'style':{'fill':"none",'pointerEvents':"fill"},'onLostPointerCapture':on_lost_pointer_capture,'y':y,'onPointerMove':on_pointer_move,'onPointerDown':on_pointer_down,'onPointerLeave':on_pointer_leave,'onPointerEnter':on_pointer_enter});
})()),(cljs.core.truth_(new cljs.core.Keyword(null,"new-position","new-position",-102281521).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?rumext.v2.jsx(app.main.ui.workspace.viewport.guides.guide_STAR_,{'guide':new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"axis","axis",-1215390822),axis,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"new-position","new-position",-102281521).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),'getHoverFrame':get_hover_frame,'vbox':vbox,'zoom':zoom,'isHover':true,'hoverFrame':frame}):null)]});
});

(app.main.ui.workspace.viewport.guides.new_guide_area_STAR_.displayName = "new-guide-area*");

app.main.ui.workspace.viewport.guides.viewport_guides_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$viewport$guides$viewport_guides_STAR_(props_57082){
var zoom = props_57082.zoom;
var vbox = props_57082.vbox;
var modifiers = props_57082.modifiers;
var guides = props_57082.guides;
var disabled_guides = props_57082.disabledGuides;
var hover_frame = props_57082.hoverFrame;
var guides__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(guides),rumext.v2.adapt(vbox)],(function (){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.ui.workspace.viewport.guides.guide_inside_vbox_QMARK_,zoom,vbox),cljs.core.vals(guides));
}));
var focus = rumext.v2.deref(app.main.refs.workspace_focus_selected);
var hover_frame_ref = rumext.v2.use_ref(null);
var get_hover_frame = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return rumext.v2.ref_val(hover_frame_ref);
}));
var on_guide_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(vbox)],(function (guide){
if(app.main.ui.workspace.viewport.guides.guide_inside_vbox_QMARK_.cljs$core$IFn$_invoke$arity$3(zoom,vbox,guide)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_guides(guide));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.remove_guide(guide));
}
}));
var frame_modifiers = cljs.core.update_vals(cljs.core.group_by(new cljs.core.Keyword(null,"id","id",-1388402092),modifiers),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.first));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(hover_frame)],(function (){
return rumext.v2.set_ref_val_BANG_(hover_frame_ref,hover_frame);
}));

return rumext.v2.jsxs("g",{'className':"guides",'pointerEvents':"none",'children':[rumext.v2.jsx(app.main.ui.workspace.viewport.guides.new_guide_area_STAR_,{'vbox':vbox,'zoom':zoom,'axis':new cljs.core.Keyword(null,"x","x",2099068185),'getHoverFrame':get_hover_frame,'disabledGuides':disabled_guides}),rumext.v2.jsx(app.main.ui.workspace.viewport.guides.new_guide_area_STAR_,{'vbox':vbox,'zoom':zoom,'axis':new cljs.core.Keyword(null,"y","y",-1757859776),'getHoverFrame':get_hover_frame,'disabledGuides':disabled_guides}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__57090){
var map__57091 = p__57090;
var map__57091__$1 = cljs.core.__destructure_map(map__57091);
var guide = map__57091__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57091__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57091__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072));
out_arr__35152__auto__.push((((((frame_id == null)) || (((cljs.core.empty_QMARK_(focus)) || (cljs.core.contains_QMARK_(focus,frame_id))))))?rumext.v2.jsx(app.main.ui.workspace.viewport.guides.guide_STAR_,{'guide':guide,'vbox':vbox,'zoom':zoom,'frameTransform':cljs.core.get.cljs$core$IFn$_invoke$arity$2(frame_modifiers,frame_id),'getHoverFrame':get_hover_frame,'onGuideChange':on_guide_change,'disabledGuides':disabled_guides},""+"guide-"+(id ?? "")):null));

return out_arr__35152__auto__;
}),[],guides__$1)]});
}));

(app.main.ui.workspace.viewport.guides.viewport_guides_STAR_.displayName = "viewport-guides*");


//# sourceMappingURL=app.main.ui.workspace.viewport.guides.js.map
