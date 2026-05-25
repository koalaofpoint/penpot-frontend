import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.shapes.js";
import "./app.common.types.shape.interactions.js";
import "./app.main.data.viewer.js";
import "./app.main.refs.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.main.ui.shapes.bool.js";
import "./app.main.ui.shapes.circle.js";
import "./app.main.ui.shapes.frame.js";
import "./app.main.ui.shapes.group.js";
import "./app.main.ui.shapes.image.js";
import "./app.main.ui.shapes.path.js";
import "./app.main.ui.shapes.rect.js";
import "./app.main.ui.shapes.shape.js";
import "./app.main.ui.shapes.svg_raw.js";
import "./app.main.ui.shapes.text.js";
import "./app.util.dom.js";
import "./app.util.object.js";
import "./app.util.timers.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.viewer.shapes');
app.main.ui.viewer.shapes.base_frame_ctx = rumext.v2.create_context(null);
app.main.ui.viewer.shapes.frame_offset_ctx = rumext.v2.create_context(null);
app.main.ui.viewer.shapes.ref_COLON_viewer_show_interactions = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"show-interactions","show-interactions",622664467),app.main.refs.viewer_local);
app.main.ui.viewer.shapes.find_relative_to_base_frame = (function app$main$ui$viewer$shapes$find_relative_to_base_frame(shape,objects,overlays_ids,base_frame){
if(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return shape;
} else {
if(((cljs.core.empty_QMARK_(overlays_ids)) || ((((shape == null)) || (app.common.files.helpers.root_QMARK_(shape)))))){
return base_frame;
} else {
var G__53249 = app.common.files.helpers.get_parent(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
var G__53250 = objects;
var G__53251 = overlays_ids;
var G__53252 = base_frame;
return (app.main.ui.viewer.shapes.find_relative_to_base_frame.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.viewer.shapes.find_relative_to_base_frame.cljs$core$IFn$_invoke$arity$4(G__53249,G__53250,G__53251,G__53252) : app.main.ui.viewer.shapes.find_relative_to_base_frame.call(null,G__53249,G__53250,G__53251,G__53252));

}
}
});
app.main.ui.viewer.shapes.ignore_frame_shape = (function app$main$ui$viewer$shapes$ignore_frame_shape(shape,objects,manual_QMARK_){
var shape__$1 = (function (){var G__53253 = shape;
if(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(manual_QMARK_);
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53253,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628));
} else {
return G__53253;
}
})();
var objects__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1),shape__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape__$1,objects__$1], null);
});
app.main.ui.viewer.shapes.activate_interaction = (function app$main$ui$viewer$shapes$activate_interaction(interaction,shape,base_frame,frame_offset,objects,overlays){
var G__53256 = new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction);
var G__53256__$1 = (((G__53256 instanceof cljs.core.Keyword))?G__53256.fqn:null);
switch (G__53256__$1) {
case "navigate":
var temp__5825__auto__ = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction);
if(cljs.core.truth_(temp__5825__auto__)){
var frame_id = temp__5825__auto__;
var viewer_section = app.util.dom.get_element("viewer-section");
var scroll = (cljs.core.truth_(new cljs.core.Keyword(null,"preserve-scroll","preserve-scroll",-1515148069).cljs$core$IFn$_invoke$arity$1(interaction))?app.util.dom.get_scroll_pos(viewer_section):(0));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.viewer.set_nav_scroll(scroll),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.viewer.go_to_frame.cljs$core$IFn$_invoke$arity$2(frame_id,new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction))], 0));
} else {
return null;
}

break;
case "open-overlay":
var manual_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"manual","manual",-237370608),new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455).cljs$core$IFn$_invoke$arity$1(interaction));
var vec__53257 = app.main.ui.viewer.shapes.ignore_frame_shape(shape,objects,manual_QMARK_);
var shape__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53257,(0),null);
var objects__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53257,(1),null);
var dest_frame_id = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction);
var dest_frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects__$1,dest_frame_id);
var relative_to_id = ((manual_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape__$1),new cljs.core.Keyword(null,"frame","frame",-1711082588)))?new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape__$1):new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1)):new cljs.core.Keyword(null,"position-relative-to","position-relative-to",-1904679190).cljs$core$IFn$_invoke$arity$1(interaction));
var relative_to_shape = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects__$1,relative_to_id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return base_frame;
}
})();
var close_click_outside = new cljs.core.Keyword(null,"close-click-outside","close-click-outside",1133482612).cljs$core$IFn$_invoke$arity$1(interaction);
var background_overlay = new cljs.core.Keyword(null,"background-overlay","background-overlay",1186220424).cljs$core$IFn$_invoke$arity$1(interaction);
var overlays_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),overlays));
var relative_to_base_frame = app.main.ui.viewer.shapes.find_relative_to_base_frame(relative_to_shape,objects__$1,overlays_ids,base_frame);
var fixed_base_QMARK_ = app.common.files.helpers.fixed_QMARK_(objects__$1,relative_to_id);
var vec__53260 = app.common.types.shape.interactions.calc_overlay_position(interaction,shape__$1,objects__$1,relative_to_shape,relative_to_base_frame,dest_frame,frame_offset);
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53260,(0),null);
var snap_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53260,(1),null);
if(cljs.core.truth_(dest_frame_id)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.open_overlay(dest_frame_id,position,snap_to,close_click_outside,background_overlay,new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction),fixed_base_QMARK_));
} else {
return null;
}

break;
case "toggle-overlay":
var manual_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"manual","manual",-237370608),new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455).cljs$core$IFn$_invoke$arity$1(interaction));
var vec__53269 = app.main.ui.viewer.shapes.ignore_frame_shape(shape,objects,manual_QMARK_);
var shape__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53269,(0),null);
var objects__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53269,(1),null);
var dest_frame_id = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction);
var dest_frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects__$1,dest_frame_id);
var relative_to_id = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"manual","manual",-237370608),new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455).cljs$core$IFn$_invoke$arity$1(interaction)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape__$1),new cljs.core.Keyword(null,"frame","frame",-1711082588)))?new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape__$1):new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1)):new cljs.core.Keyword(null,"position-relative-to","position-relative-to",-1904679190).cljs$core$IFn$_invoke$arity$1(interaction));
var relative_to_shape = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects__$1,relative_to_id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return base_frame;
}
})();
var overlays_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),overlays));
var relative_to_base_frame = app.main.ui.viewer.shapes.find_relative_to_base_frame(relative_to_shape,objects__$1,overlays_ids,base_frame);
var fixed_base_QMARK_ = app.common.files.helpers.fixed_QMARK_(objects__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(base_frame));
var vec__53272 = app.common.types.shape.interactions.calc_overlay_position(interaction,shape__$1,objects__$1,relative_to_shape,relative_to_base_frame,dest_frame,frame_offset);
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53272,(0),null);
var snap_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53272,(1),null);
var close_click_outside = new cljs.core.Keyword(null,"close-click-outside","close-click-outside",1133482612).cljs$core$IFn$_invoke$arity$1(interaction);
var background_overlay = new cljs.core.Keyword(null,"background-overlay","background-overlay",1186220424).cljs$core$IFn$_invoke$arity$1(interaction);
if(cljs.core.truth_(dest_frame_id)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.toggle_overlay(dest_frame_id,position,snap_to,close_click_outside,background_overlay,new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction),fixed_base_QMARK_));
} else {
return null;
}

break;
case "close-overlay":
var dest_frame_id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"frame","frame",-1711082588));
if(and__5023__auto__){
return cljs.core.some((function (p1__53254_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__53254_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
}),overlays);
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
} else {
return new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape);
}
}
})();
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.close_overlay.cljs$core$IFn$_invoke$arity$2(dest_frame_id,new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction)));

break;
case "prev-screen":
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav_back_local());

break;
case "open-url":
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(interaction)));

break;
default:
return null;

}
});
app.main.ui.viewer.shapes.deactivate_interaction = (function app$main$ui$viewer$shapes$deactivate_interaction(interaction,shape,base_frame,frame_offset,objects,overlays){
var G__53279 = new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction);
var G__53279__$1 = (((G__53279 instanceof cljs.core.Keyword))?G__53279.fqn:null);
switch (G__53279__$1) {
case "open-overlay":
var frame_id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"frame","frame",-1711082588))){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
} else {
return new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape);
}
}
})();
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.close_overlay.cljs$core$IFn$_invoke$arity$1(frame_id));

break;
case "toggle-overlay":
var manual_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"manual","manual",-237370608),new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455).cljs$core$IFn$_invoke$arity$1(interaction));
var vec__53280 = app.main.ui.viewer.shapes.ignore_frame_shape(shape,objects,manual_QMARK_);
var shape__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53280,(0),null);
var objects__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53280,(1),null);
var dest_frame_id = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction);
var dest_frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects__$1,dest_frame_id);
var relative_to_id = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"manual","manual",-237370608),new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455).cljs$core$IFn$_invoke$arity$1(interaction)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape__$1),new cljs.core.Keyword(null,"frame","frame",-1711082588)))?new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape__$1):new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1)):new cljs.core.Keyword(null,"position-relative-to","position-relative-to",-1904679190).cljs$core$IFn$_invoke$arity$1(interaction));
var relative_to_shape = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects__$1,relative_to_id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return base_frame;
}
})();
var overlays_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),overlays));
var relative_to_base_frame = app.main.ui.viewer.shapes.find_relative_to_base_frame(relative_to_shape,objects__$1,overlays_ids,base_frame);
var fixed_base_QMARK_ = app.common.files.helpers.fixed_QMARK_(objects__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(base_frame));
var vec__53283 = app.common.types.shape.interactions.calc_overlay_position(interaction,shape__$1,objects__$1,relative_to_shape,relative_to_base_frame,dest_frame,frame_offset);
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53283,(0),null);
var snap_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53283,(1),null);
var close_click_outside = new cljs.core.Keyword(null,"close-click-outside","close-click-outside",1133482612).cljs$core$IFn$_invoke$arity$1(interaction);
var background_overlay = new cljs.core.Keyword(null,"background-overlay","background-overlay",1186220424).cljs$core$IFn$_invoke$arity$1(interaction);
if(cljs.core.truth_(dest_frame_id)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.toggle_overlay(dest_frame_id,position,snap_to,close_click_outside,background_overlay,new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction),fixed_base_QMARK_));
} else {
return null;
}

break;
case "close-overlay":
var manual_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"manual","manual",-237370608),new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455).cljs$core$IFn$_invoke$arity$1(interaction));
var vec__53286 = app.main.ui.viewer.shapes.ignore_frame_shape(shape,objects,manual_QMARK_);
var shape__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53286,(0),null);
var objects__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53286,(1),null);
var dest_frame_id = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction);
var dest_frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects__$1,dest_frame_id);
var relative_to_id = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"manual","manual",-237370608),new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455).cljs$core$IFn$_invoke$arity$1(interaction)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape__$1),new cljs.core.Keyword(null,"frame","frame",-1711082588)))?new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape__$1):new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1)):new cljs.core.Keyword(null,"position-relative-to","position-relative-to",-1904679190).cljs$core$IFn$_invoke$arity$1(interaction));
var relative_to_shape = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects__$1,relative_to_id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return base_frame;
}
})();
var close_click_outside = new cljs.core.Keyword(null,"close-click-outside","close-click-outside",1133482612).cljs$core$IFn$_invoke$arity$1(interaction);
var background_overlay = new cljs.core.Keyword(null,"background-overlay","background-overlay",1186220424).cljs$core$IFn$_invoke$arity$1(interaction);
var overlays_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),overlays));
var relative_to_base_frame = app.main.ui.viewer.shapes.find_relative_to_base_frame(relative_to_shape,objects__$1,overlays_ids,base_frame);
var fixed_base_QMARK_ = app.common.files.helpers.fixed_QMARK_(objects__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(base_frame));
var vec__53289 = app.common.types.shape.interactions.calc_overlay_position(interaction,shape__$1,objects__$1,relative_to_shape,relative_to_base_frame,dest_frame,frame_offset);
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53289,(0),null);
var snap_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53289,(1),null);
if(cljs.core.truth_(dest_frame_id)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.open_overlay(dest_frame_id,position,snap_to,close_click_outside,background_overlay,new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction),fixed_base_QMARK_));
} else {
return null;
}

break;
default:
return null;

}
});
app.main.ui.viewer.shapes.on_pointer_down = (function app$main$ui$viewer$shapes$on_pointer_down(event,shape,base_frame,frame_offset,objects,overlays){
var interactions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53292_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(p1__53292_SHARP_),new cljs.core.Keyword(null,"click","click",1912301393))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(p1__53292_SHARP_),new cljs.core.Keyword(null,"mouse-press","mouse-press",-273498051))));
}),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.seq(interactions)){
app.util.dom.stop_propagation(event);

var seq__53293 = cljs.core.seq(interactions);
var chunk__53294 = null;
var count__53295 = (0);
var i__53296 = (0);
while(true){
if((i__53296 < count__53295)){
var interaction = chunk__53294.cljs$core$IIndexed$_nth$arity$2(null,i__53296);
app.main.ui.viewer.shapes.activate_interaction(interaction,shape,base_frame,frame_offset,objects,overlays);


var G__53358 = seq__53293;
var G__53359 = chunk__53294;
var G__53360 = count__53295;
var G__53361 = (i__53296 + (1));
seq__53293 = G__53358;
chunk__53294 = G__53359;
count__53295 = G__53360;
i__53296 = G__53361;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__53293);
if(temp__5825__auto__){
var seq__53293__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53293__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__53293__$1);
var G__53362 = cljs.core.chunk_rest(seq__53293__$1);
var G__53363 = c__5548__auto__;
var G__53364 = cljs.core.count(c__5548__auto__);
var G__53365 = (0);
seq__53293 = G__53362;
chunk__53294 = G__53363;
count__53295 = G__53364;
i__53296 = G__53365;
continue;
} else {
var interaction = cljs.core.first(seq__53293__$1);
app.main.ui.viewer.shapes.activate_interaction(interaction,shape,base_frame,frame_offset,objects,overlays);


var G__53366 = cljs.core.next(seq__53293__$1);
var G__53367 = null;
var G__53368 = (0);
var G__53369 = (0);
seq__53293 = G__53366;
chunk__53294 = G__53367;
count__53295 = G__53368;
i__53296 = G__53369;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
app.main.ui.viewer.shapes.on_pointer_up = (function app$main$ui$viewer$shapes$on_pointer_up(event,shape,base_frame,frame_offset,objects,overlays){
var interactions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53302_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(p1__53302_SHARP_),new cljs.core.Keyword(null,"mouse-press","mouse-press",-273498051));
}),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.seq(interactions)){
app.util.dom.stop_propagation(event);

var seq__53304 = cljs.core.seq(interactions);
var chunk__53305 = null;
var count__53306 = (0);
var i__53307 = (0);
while(true){
if((i__53307 < count__53306)){
var interaction = chunk__53305.cljs$core$IIndexed$_nth$arity$2(null,i__53307);
app.main.ui.viewer.shapes.deactivate_interaction(interaction,shape,base_frame,frame_offset,objects,overlays);


var G__53370 = seq__53304;
var G__53371 = chunk__53305;
var G__53372 = count__53306;
var G__53373 = (i__53307 + (1));
seq__53304 = G__53370;
chunk__53305 = G__53371;
count__53306 = G__53372;
i__53307 = G__53373;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__53304);
if(temp__5825__auto__){
var seq__53304__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53304__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__53304__$1);
var G__53374 = cljs.core.chunk_rest(seq__53304__$1);
var G__53375 = c__5548__auto__;
var G__53376 = cljs.core.count(c__5548__auto__);
var G__53377 = (0);
seq__53304 = G__53374;
chunk__53305 = G__53375;
count__53306 = G__53376;
i__53307 = G__53377;
continue;
} else {
var interaction = cljs.core.first(seq__53304__$1);
app.main.ui.viewer.shapes.deactivate_interaction(interaction,shape,base_frame,frame_offset,objects,overlays);


var G__53378 = cljs.core.next(seq__53304__$1);
var G__53379 = null;
var G__53380 = (0);
var G__53381 = (0);
seq__53304 = G__53378;
chunk__53305 = G__53379;
count__53306 = G__53380;
i__53307 = G__53381;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
app.main.ui.viewer.shapes.on_pointer_enter = (function app$main$ui$viewer$shapes$on_pointer_enter(event,shape,base_frame,frame_offset,objects,overlays){
var interactions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53314_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(p1__53314_SHARP_),new cljs.core.Keyword(null,"mouse-enter","mouse-enter",678856303))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(p1__53314_SHARP_),new cljs.core.Keyword(null,"mouse-over","mouse-over",-882913683))));
}),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.seq(interactions)){
app.util.dom.stop_propagation(event);

var seq__53316 = cljs.core.seq(interactions);
var chunk__53317 = null;
var count__53318 = (0);
var i__53319 = (0);
while(true){
if((i__53319 < count__53318)){
var interaction = chunk__53317.cljs$core$IIndexed$_nth$arity$2(null,i__53319);
app.main.ui.viewer.shapes.activate_interaction(interaction,shape,base_frame,frame_offset,objects,overlays);


var G__53384 = seq__53316;
var G__53385 = chunk__53317;
var G__53386 = count__53318;
var G__53387 = (i__53319 + (1));
seq__53316 = G__53384;
chunk__53317 = G__53385;
count__53318 = G__53386;
i__53319 = G__53387;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__53316);
if(temp__5825__auto__){
var seq__53316__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53316__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__53316__$1);
var G__53388 = cljs.core.chunk_rest(seq__53316__$1);
var G__53389 = c__5548__auto__;
var G__53390 = cljs.core.count(c__5548__auto__);
var G__53391 = (0);
seq__53316 = G__53388;
chunk__53317 = G__53389;
count__53318 = G__53390;
i__53319 = G__53391;
continue;
} else {
var interaction = cljs.core.first(seq__53316__$1);
app.main.ui.viewer.shapes.activate_interaction(interaction,shape,base_frame,frame_offset,objects,overlays);


var G__53394 = cljs.core.next(seq__53316__$1);
var G__53395 = null;
var G__53396 = (0);
var G__53397 = (0);
seq__53316 = G__53394;
chunk__53317 = G__53395;
count__53318 = G__53396;
i__53319 = G__53397;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
app.main.ui.viewer.shapes.on_pointer_leave = (function app$main$ui$viewer$shapes$on_pointer_leave(event,shape,base_frame,frame_offset,objects,overlays){
var interactions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53321_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(p1__53321_SHARP_),new cljs.core.Keyword(null,"mouse-leave","mouse-leave",135558349));
}),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(shape));
var interactions_inv = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53322_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(p1__53322_SHARP_),new cljs.core.Keyword(null,"mouse-over","mouse-over",-882913683));
}),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(shape));
if(((cljs.core.seq(interactions)) || (cljs.core.seq(interactions_inv)))){
app.util.dom.stop_propagation(event);

var seq__53323_53402 = cljs.core.seq(interactions);
var chunk__53324_53403 = null;
var count__53325_53404 = (0);
var i__53326_53405 = (0);
while(true){
if((i__53326_53405 < count__53325_53404)){
var interaction_53406 = chunk__53324_53403.cljs$core$IIndexed$_nth$arity$2(null,i__53326_53405);
app.main.ui.viewer.shapes.activate_interaction(interaction_53406,shape,base_frame,frame_offset,objects,overlays);


var G__53407 = seq__53323_53402;
var G__53408 = chunk__53324_53403;
var G__53409 = count__53325_53404;
var G__53410 = (i__53326_53405 + (1));
seq__53323_53402 = G__53407;
chunk__53324_53403 = G__53408;
count__53325_53404 = G__53409;
i__53326_53405 = G__53410;
continue;
} else {
var temp__5825__auto___53411 = cljs.core.seq(seq__53323_53402);
if(temp__5825__auto___53411){
var seq__53323_53412__$1 = temp__5825__auto___53411;
if(cljs.core.chunked_seq_QMARK_(seq__53323_53412__$1)){
var c__5548__auto___53413 = cljs.core.chunk_first(seq__53323_53412__$1);
var G__53415 = cljs.core.chunk_rest(seq__53323_53412__$1);
var G__53416 = c__5548__auto___53413;
var G__53417 = cljs.core.count(c__5548__auto___53413);
var G__53418 = (0);
seq__53323_53402 = G__53415;
chunk__53324_53403 = G__53416;
count__53325_53404 = G__53417;
i__53326_53405 = G__53418;
continue;
} else {
var interaction_53420 = cljs.core.first(seq__53323_53412__$1);
app.main.ui.viewer.shapes.activate_interaction(interaction_53420,shape,base_frame,frame_offset,objects,overlays);


var G__53422 = cljs.core.next(seq__53323_53412__$1);
var G__53423 = null;
var G__53424 = (0);
var G__53425 = (0);
seq__53323_53402 = G__53422;
chunk__53324_53403 = G__53423;
count__53325_53404 = G__53424;
i__53326_53405 = G__53425;
continue;
}
} else {
}
}
break;
}

var seq__53327 = cljs.core.seq(interactions_inv);
var chunk__53328 = null;
var count__53329 = (0);
var i__53330 = (0);
while(true){
if((i__53330 < count__53329)){
var interaction = chunk__53328.cljs$core$IIndexed$_nth$arity$2(null,i__53330);
app.main.ui.viewer.shapes.deactivate_interaction(interaction,shape,base_frame,frame_offset,objects,overlays);


var G__53432 = seq__53327;
var G__53433 = chunk__53328;
var G__53434 = count__53329;
var G__53435 = (i__53330 + (1));
seq__53327 = G__53432;
chunk__53328 = G__53433;
count__53329 = G__53434;
i__53330 = G__53435;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__53327);
if(temp__5825__auto__){
var seq__53327__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53327__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__53327__$1);
var G__53439 = cljs.core.chunk_rest(seq__53327__$1);
var G__53440 = c__5548__auto__;
var G__53441 = cljs.core.count(c__5548__auto__);
var G__53442 = (0);
seq__53327 = G__53439;
chunk__53328 = G__53440;
count__53329 = G__53441;
i__53330 = G__53442;
continue;
} else {
var interaction = cljs.core.first(seq__53327__$1);
app.main.ui.viewer.shapes.deactivate_interaction(interaction,shape,base_frame,frame_offset,objects,overlays);


var G__53448 = cljs.core.next(seq__53327__$1);
var G__53449 = null;
var G__53450 = (0);
var G__53451 = (0);
seq__53327 = G__53448;
chunk__53328 = G__53449;
count__53329 = G__53450;
i__53330 = G__53451;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
app.main.ui.viewer.shapes.on_load = (function app$main$ui$viewer$shapes$on_load(shape,base_frame,frame_offset,objects,overlays){
var interactions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53331_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(p1__53331_SHARP_),new cljs.core.Keyword(null,"after-delay","after-delay",-2054763582));
}),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(shape));
var interactions__$1 = cljs.core.seq(interactions);
var sems = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5823__auto__ = cljs.core.first(interactions__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var interaction = temp__5823__auto__;
var sem = app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(interaction),((function (interactions__$1,sems,interaction,temp__5823__auto__,interactions){
return (function (){
return app.main.ui.viewer.shapes.activate_interaction(interaction,shape,base_frame,frame_offset,objects,overlays);
});})(interactions__$1,sems,interaction,temp__5823__auto__,interactions))
);
var G__53460 = cljs.core.next(interactions__$1);
var G__53461 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sems,sem);
interactions__$1 = G__53460;
sems = G__53461;
continue;
} else {
return sems;
}
break;
}
});
app.main.ui.viewer.shapes.interaction = (function app$main$ui$viewer$shapes$interaction(props_53332){
var map__53333 = rumext.v2.util.wrap_props(props_53332);
var map__53333__$1 = cljs.core.__destructure_map(map__53333);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53333__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var interactions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53333__$1,new cljs.core.Keyword(null,"interactions","interactions",550841811));
var show_interactions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53333__$1,new cljs.core.Keyword(null,"show-interactions","show-interactions",622664467));
var map__53335 = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape);
var map__53335__$1 = cljs.core.__destructure_map(map__53335);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53335__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53335__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53335__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53335__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.empty_QMARK_(interactions)){
return null;
} else {
return rumext.v2.jsx("rect",{'width':(width + (2)),'height':(height + (2)),'x':(x - (1)),'transform':app.common.geom.shapes.transform_str.cljs$core$IFn$_invoke$arity$1(shape),'stroke':"var(--color-accent-tertiary)",'fill':"var(--color-accent-tertiary)",'strokeWidth':(cljs.core.truth_(show_interactions)?(1):(0)),'y':(y - (1)),'fillOpacity':(cljs.core.truth_(show_interactions)?0.2:(0))});
}
});

(app.main.ui.viewer.shapes.interaction.displayName = "interaction");

/**
 * Wrap some svg shape and add interaction controls
 */
app.main.ui.viewer.shapes.generic_wrapper_factory = (function app$main$ui$viewer$shapes$generic_wrapper_factory(component){
var generic_wrapper__53341 = (function app$main$ui$viewer$shapes$generic_wrapper_factory_$_generic_wrapper(props_53340){
var props = props_53340;
var shape = (props["shape"]);
var childs = (props["childs"]);
var frame = (props["frame"]);
var objects = (props["objects"]);
var all_objects = (function (){var or__5025__auto__ = (props["all-objects"]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return objects;
}
})();
var base_frame = rumext.v2.use_ctx(app.main.ui.viewer.shapes.base_frame_ctx);
var frame_offset = rumext.v2.use_ctx(app.main.ui.viewer.shapes.frame_offset_ctx);
var show_interactions = rumext.v2.deref(app.main.ui.viewer.shapes.ref_COLON_viewer_show_interactions);
var overlays = rumext.v2.deref(app.main.refs.viewer_overlays);
var interactions = new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(shape);
var svg_element_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"svg-raw","svg-raw",-594329202),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null)))));
var on_pointer_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape),rumext.v2.adapt(base_frame),rumext.v2.adapt(frame_offset),rumext.v2.adapt(all_objects)],(function (p1__53336_SHARP_){
return app.main.ui.viewer.shapes.on_pointer_down(p1__53336_SHARP_,shape,base_frame,frame_offset,all_objects,overlays);
}));
var on_pointer_up = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape),rumext.v2.adapt(base_frame),rumext.v2.adapt(frame_offset),rumext.v2.adapt(all_objects)],(function (p1__53337_SHARP_){
return app.main.ui.viewer.shapes.on_pointer_up(p1__53337_SHARP_,shape,base_frame,frame_offset,all_objects,overlays);
}));
var on_pointer_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape),rumext.v2.adapt(base_frame),rumext.v2.adapt(frame_offset),rumext.v2.adapt(all_objects)],(function (p1__53338_SHARP_){
return app.main.ui.viewer.shapes.on_pointer_enter(p1__53338_SHARP_,shape,base_frame,frame_offset,all_objects,overlays);
}));
var on_pointer_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape),rumext.v2.adapt(base_frame),rumext.v2.adapt(frame_offset),rumext.v2.adapt(all_objects)],(function (p1__53339_SHARP_){
return app.main.ui.viewer.shapes.on_pointer_leave(p1__53339_SHARP_,shape,base_frame,frame_offset,all_objects,overlays);
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var sems = app.main.ui.viewer.shapes.on_load(shape,base_frame,frame_offset,objects,overlays);
return cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.run_BANG_,app.util.timers.dispose_BANG_,sems);
}));

if((!(svg_element_QMARK_))){
return rumext.v2.jsxs(app.main.ui.shapes.shape.shape_container,{'shape':shape,'cursor':(cljs.core.truth_(app.common.types.shape.interactions.actionable_QMARK_(interactions))?"pointer":null),'onPointerDown':on_pointer_down,'onPointerUp':on_pointer_up,'onPointerEnter':on_pointer_enter,'onPointerLeave':on_pointer_leave,'children':[rumext.v2.jsx(component,{'shape':shape,'frame':frame,'childs':childs,'is-child-selected?':true,'objects':objects}),rumext.v2.jsx(app.main.ui.viewer.shapes.interaction,{'shape':shape,'interactions':interactions,'show-interactions':show_interactions})]});
} else {
return rumext.v2.jsx(component,{'shape':shape,'frame':frame,'childs':childs,'objects':objects});
}
});
(generic_wrapper__53341.displayName = "generic-wrapper");

return generic_wrapper__53341;
});
app.main.ui.viewer.shapes.frame_wrapper = (function app$main$ui$viewer$shapes$frame_wrapper(shape_container){
return app.main.ui.viewer.shapes.generic_wrapper_factory(app.main.ui.shapes.frame.frame_shape(shape_container));
});
app.main.ui.viewer.shapes.group_wrapper = (function app$main$ui$viewer$shapes$group_wrapper(shape_container){
return app.main.ui.viewer.shapes.generic_wrapper_factory(app.main.ui.shapes.group.group_shape(shape_container));
});
app.main.ui.viewer.shapes.bool_wrapper = (function app$main$ui$viewer$shapes$bool_wrapper(shape_container){
return app.main.ui.viewer.shapes.generic_wrapper_factory(app.main.ui.shapes.bool.bool_shape(shape_container));
});
app.main.ui.viewer.shapes.svg_raw_wrapper = (function app$main$ui$viewer$shapes$svg_raw_wrapper(shape_container){
return app.main.ui.viewer.shapes.generic_wrapper_factory(app.main.ui.shapes.svg_raw.svg_raw_shape(shape_container));
});
app.main.ui.viewer.shapes.rect_wrapper = (function app$main$ui$viewer$shapes$rect_wrapper(){
return app.main.ui.viewer.shapes.generic_wrapper_factory(app.main.ui.shapes.rect.rect_shape);
});
app.main.ui.viewer.shapes.image_wrapper = (function app$main$ui$viewer$shapes$image_wrapper(){
return app.main.ui.viewer.shapes.generic_wrapper_factory(app.main.ui.shapes.image.image_shape);
});
app.main.ui.viewer.shapes.path_wrapper = (function app$main$ui$viewer$shapes$path_wrapper(){
return app.main.ui.viewer.shapes.generic_wrapper_factory(app.main.ui.shapes.path.path_shape);
});
app.main.ui.viewer.shapes.text_wrapper = (function app$main$ui$viewer$shapes$text_wrapper(){
return app.main.ui.viewer.shapes.generic_wrapper_factory(app.main.ui.shapes.text.text_shape);
});
app.main.ui.viewer.shapes.circle_wrapper = (function app$main$ui$viewer$shapes$circle_wrapper(){
return app.main.ui.viewer.shapes.generic_wrapper_factory(app.main.ui.shapes.circle.circle_shape);
});
app.main.ui.viewer.shapes.frame_container_factory = (function app$main$ui$viewer$shapes$frame_container_factory(objects,all_objects){
var shape_container = (app.main.ui.viewer.shapes.shape_container_factory.cljs$core$IFn$_invoke$arity$2 ? app.main.ui.viewer.shapes.shape_container_factory.cljs$core$IFn$_invoke$arity$2(objects,all_objects) : app.main.ui.viewer.shapes.shape_container_factory.call(null,objects,all_objects));
var frame_wrapper = app.main.ui.viewer.shapes.frame_wrapper(shape_container);
var lookup_xf = cljs.core.keep.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects));
var frame_container__53343 = (function app$main$ui$viewer$shapes$frame_container_factory_$_frame_container(props_53342){
var props = props_53342;
var shape = (props["shape"]);
var childs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,lookup_xf,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
var props__$1 = app.util.object.merge.cljs$core$IFn$_invoke$arity$2(props,({"childs": childs, "objects": objects, "all-objects": all_objects}));
return rumext.v2.create_element(frame_wrapper,props__$1);
});
(frame_container__53343.displayName = "frame-container");

return frame_container__53343;
});
app.main.ui.viewer.shapes.group_container_factory = (function app$main$ui$viewer$shapes$group_container_factory(objects,all_objects){
var shape_container = (app.main.ui.viewer.shapes.shape_container_factory.cljs$core$IFn$_invoke$arity$2 ? app.main.ui.viewer.shapes.shape_container_factory.cljs$core$IFn$_invoke$arity$2(objects,all_objects) : app.main.ui.viewer.shapes.shape_container_factory.call(null,objects,all_objects));
var group_wrapper = app.main.ui.viewer.shapes.group_wrapper(shape_container);
var group_container__53346 = (function app$main$ui$viewer$shapes$group_container_factory_$_group_container(props_53345){
var props = props_53345;
var childs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__53344_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__53344_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1((props["shape"])));
var props__$1 = app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$variadic(({}),props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([({"childs": childs, "objects": objects, "all-objects": all_objects})], 0));
if(cljs.core.truth_(cljs.core.not_empty(childs))){
return rumext.v2.create_element(group_wrapper,props__$1);
} else {
return null;
}
});
(group_container__53346.displayName = "group-container");

return group_container__53346;
});
app.main.ui.viewer.shapes.bool_container_factory = (function app$main$ui$viewer$shapes$bool_container_factory(objects,all_objects){
var shape_container = (app.main.ui.viewer.shapes.shape_container_factory.cljs$core$IFn$_invoke$arity$2 ? app.main.ui.viewer.shapes.shape_container_factory.cljs$core$IFn$_invoke$arity$2(objects,all_objects) : app.main.ui.viewer.shapes.shape_container_factory.call(null,objects,all_objects));
var bool_wrapper = app.main.ui.viewer.shapes.bool_wrapper(shape_container);
var bool_container__53348 = (function app$main$ui$viewer$shapes$bool_container_factory_$_bool_container(props_53347){
var props = props_53347;
var childs = cljs.core.select_keys(objects,app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1((props["shape"]))));
var props__$1 = app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$variadic(({}),props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([({"childs": childs, "objects": objects})], 0));
return rumext.v2.create_element(bool_wrapper,props__$1);
});
(bool_container__53348.displayName = "bool-container");

return bool_container__53348;
});
app.main.ui.viewer.shapes.svg_raw_container_factory = (function app$main$ui$viewer$shapes$svg_raw_container_factory(objects,all_objects){
var shape_container = (app.main.ui.viewer.shapes.shape_container_factory.cljs$core$IFn$_invoke$arity$2 ? app.main.ui.viewer.shapes.shape_container_factory.cljs$core$IFn$_invoke$arity$2(objects,all_objects) : app.main.ui.viewer.shapes.shape_container_factory.call(null,objects,all_objects));
var svg_raw_wrapper = app.main.ui.viewer.shapes.svg_raw_wrapper(shape_container);
var svg_raw_container__53351 = (function app$main$ui$viewer$shapes$svg_raw_container_factory_$_svg_raw_container(props_53350){
var props = props_53350;
var childs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__53349_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__53349_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1((props["shape"])));
var props__$1 = app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$variadic(({}),props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([({"childs": childs, "objects": objects})], 0));
return rumext.v2.create_element(svg_raw_wrapper,props__$1);
});
(svg_raw_container__53351.displayName = "svg-raw-container");

return svg_raw_container__53351;
});
app.main.ui.viewer.shapes.shape_container_factory = (function app$main$ui$viewer$shapes$shape_container_factory(objects,all_objects){
var path_wrapper = app.main.ui.viewer.shapes.path_wrapper();
var text_wrapper = app.main.ui.viewer.shapes.text_wrapper();
var rect_wrapper = app.main.ui.viewer.shapes.rect_wrapper();
var image_wrapper = app.main.ui.viewer.shapes.image_wrapper();
var circle_wrapper = app.main.ui.viewer.shapes.circle_wrapper();
var shape_container__53354 = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$viewer$shapes$shape_container_factory_$_shape_container(props_53353){
var props = props_53353;
var shape = (props["shape"]);
var frame = (props["frame"]);
var group_container = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.main.ui.viewer.shapes.group_container_factory(objects,all_objects);
}));
var frame_container = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.main.ui.viewer.shapes.frame_container_factory(objects,all_objects);
}));
var bool_container = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.main.ui.viewer.shapes.bool_container_factory(objects,all_objects);
}));
var svg_raw_container = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.main.ui.viewer.shapes.svg_raw_container_factory(objects,all_objects);
}));
if(cljs.core.truth_((function (){var and__5023__auto__ = shape;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(shape));
} else {
return and__5023__auto__;
}
})())){
var shape__$1 = (cljs.core.truth_(frame)?app.common.geom.shapes.translate_to_frame(shape,frame):shape);
var opts = ({"shape": shape__$1, "objects": objects, "all-objects": all_objects});
var G__53355 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape__$1);
var G__53355__$1 = (((G__53355 instanceof cljs.core.Keyword))?G__53355.fqn:null);
switch (G__53355__$1) {
case "frame":
return rumext.v2.create_element(frame_container,opts);

break;
case "text":
return rumext.v2.create_element(text_wrapper,opts);

break;
case "rect":
return rumext.v2.create_element(rect_wrapper,opts);

break;
case "path":
return rumext.v2.create_element(path_wrapper,opts);

break;
case "image":
return rumext.v2.create_element(image_wrapper,opts);

break;
case "circle":
return rumext.v2.create_element(circle_wrapper,opts);

break;
case "group":
return rumext.v2.jsx(group_container,{'shape':shape__$1,'frame':frame,'objects':objects});

break;
case "bool":
return rumext.v2.jsx(bool_container,{'shape':shape__$1,'frame':frame,'objects':objects});

break;
case "svg-raw":
return rumext.v2.jsx(svg_raw_container,{'shape':shape__$1,'frame':frame,'objects':objects});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53355__$1)].join('')));

}
} else {
return null;
}
}));
(shape_container__53354.displayName = "shape-container");

return shape_container__53354;
});

//# sourceMappingURL=app.main.ui.viewer.shapes.js.map
