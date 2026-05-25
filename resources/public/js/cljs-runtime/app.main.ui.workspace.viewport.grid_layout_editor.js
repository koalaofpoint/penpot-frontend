import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.line.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.shapes.grid_layout.js";
import "./app.common.geom.shapes.points.js";
import "./app.common.math.js";
import "./app.common.types.modifiers.js";
import "./app.common.types.shape.layout.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.grid_layout.editor.js";
import "./app.main.data.workspace.modifiers.js";
import "./app.main.data.workspace.shape_layout.js";
import "./app.main.data.workspace.transforms.js";
import "./app.main.features.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.css_cursors.js";
import "./app.main.ui.formats.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.workspace.viewport.viewport_ref.js";
import "./app.util.debug.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./app.util.object.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.viewport.grid_layout_editor');
app.main.ui.workspace.viewport.grid_layout_editor.small_size_limit = (60);
app.main.ui.workspace.viewport.grid_layout_editor.medium_size_limit = (110);
app.main.ui.workspace.viewport.grid_layout_editor.apply_to_point = (function app$main$ui$workspace$viewport$grid_layout_editor$apply_to_point(result,next_fn){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,(function (){var G__56915 = cljs.core.last(result);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__56915) : next_fn.call(null,G__56915));
})());
});
app.main.ui.workspace.viewport.grid_layout_editor.format_size = (function app$main$ui$workspace$viewport$grid_layout_editor$format_size(p__56919){
var map__56921 = p__56919;
var map__56921__$1 = cljs.core.__destructure_map(map__56921);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56921__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56921__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__56922 = type;
var G__56922__$1 = (((G__56922 instanceof cljs.core.Keyword))?G__56922.fqn:null);
switch (G__56922__$1) {
case "fixed":
return ""+(app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(value) ?? "")+"PX";

break;
case "percent":
return ""+(app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(value) ?? "")+"%";

break;
case "flex":
return ""+(app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(value) ?? "")+"FR";

break;
case "auto":
return "AUTO";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56922__$1)].join('')));

}
});
app.main.ui.workspace.viewport.grid_layout_editor.grid_edition_actions = (function app$main$ui$workspace$viewport$grid_layout_editor$grid_edition_actions(props_56924){
var shape = props_56924.shape;
return rumext.v2.jsx("div",{'className':"main_ui_workspace_viewport_grid_layout_editor__grid-actions",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_viewport_grid_layout_editor__grid-actions-container",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_viewport_grid_layout_editor__grid-actions-title",'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.title")," ",rumext.v2.jsx("span",{'css':new cljs.core.Keyword(null,"board-name","board-name",-677515056),'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)})]}),rumext.v2.jsx("button",{'onClick':(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.grid_layout.editor.locate_board(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));
}),'className':"main_ui_workspace_viewport_grid_layout_editor__locate-btn",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.top-bar.locate")}),rumext.v2.jsx("button",{'onClick':(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.clear_edition_mode());
}),'className':"main_ui_workspace_viewport_grid_layout_editor__done-btn",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.top-bar.done")})]})});
});

(app.main.ui.workspace.viewport.grid_layout_editor.grid_edition_actions.displayName = "grid-edition-actions");

app.main.ui.workspace.viewport.grid_layout_editor.grid_editor_frame = (function app$main$ui$workspace$viewport$grid_layout_editor$grid_editor_frame(props_56941){
var props = props_56941;
var bounds = (props["bounds"]);
var width = (props["width"]);
var height = (props["height"]);
var zoom = (props["zoom"]);
var hv = (function (p1__56931_SHARP_){
return app.common.geom.shapes.points.start_hv(bounds,p1__56931_SHARP_);
});
var vv = (function (p1__56932_SHARP_){
return app.common.geom.shapes.points.start_vv(bounds,p1__56932_SHARP_);
});
var origin = app.common.geom.shapes.points.origin(bounds);
var frame_points = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.main.ui.workspace.viewport.grid_layout_editor.apply_to_point,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [origin], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__56933_SHARP_){
return app.common.geom.point.add(p1__56933_SHARP_,hv((width + ((70) / zoom))));
}),(function (p1__56934_SHARP_){
return app.common.geom.point.subtract(p1__56934_SHARP_,vv(((40) / zoom)));
}),(function (p1__56935_SHARP_){
return app.common.geom.point.subtract(p1__56935_SHARP_,hv((width + ((110) / zoom))));
}),(function (p1__56936_SHARP_){
return app.common.geom.point.add(p1__56936_SHARP_,vv((height + ((110) / zoom))));
}),(function (p1__56937_SHARP_){
return app.common.geom.point.add(p1__56937_SHARP_,hv(((40) / zoom)));
})], null));
return rumext.v2.jsx("polygon",{'points':cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56940_SHARP_){
return ""+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__56940_SHARP_) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__56940_SHARP_) ?? "");
}),frame_points)),'className':"main_ui_workspace_viewport_grid_layout_editor__grid-frame"});
});

(app.main.ui.workspace.viewport.grid_layout_editor.grid_editor_frame.displayName = "grid-editor-frame");

app.main.ui.workspace.viewport.grid_layout_editor.plus_btn = (function app$main$ui$workspace$viewport$grid_layout_editor$plus_btn(props_56945){
var props = props_56945;
var start_p = (props["start-p"]);
var zoom = (props["zoom"]);
var type = (props["type"]);
var on_click = (props["on-click"]);
var vec__56947 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_p),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_p) - ((40) / zoom)),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_p) + ((9) / zoom)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_p) - ((31) / zoom))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_p) - ((40) / zoom)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_p),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_p) - ((31) / zoom)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_p) + ((9) / zoom))], null));
var rect_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56947,(0),null);
var rect_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56947,(1),null);
var icon_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56947,(2),null);
var icon_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56947,(3),null);
var handle_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_click)],(function (){
if(cljs.core.truth_(on_click)){
return (on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
} else {
return null;
}
}));
return rumext.v2.jsxs("g",{'onClick':handle_click,'className':"main_ui_workspace_viewport_grid_layout_editor__grid-plus-button",'children':[rumext.v2.jsx("rect",{'x':(rect_x + ((6) / zoom)),'y':(rect_y + ((6) / zoom)),'width':(((40) - (12)) / zoom),'height':(((40) - (12)) / zoom),'rx':((4) / zoom),'ry':((4) / zoom),'className':"main_ui_workspace_viewport_grid_layout_editor__grid-plus-shape"}),rumext.v2.jsx("use",{'x':icon_x,'y':icon_y,'width':((22) / zoom),'height':((22) / zoom),'href':"#icon-add",'className':"main_ui_workspace_viewport_grid_layout_editor__grid-plus-icon"})]});
});

(app.main.ui.workspace.viewport.grid_layout_editor.plus_btn.displayName = "plus-btn");

app.main.ui.workspace.viewport.grid_layout_editor.use_drag = (function app$main$ui$workspace$viewport$grid_layout_editor$use_drag(p__56961){
var map__56962 = p__56961;
var map__56962__$1 = cljs.core.__destructure_map(map__56962);
var on_drag_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56962__$1,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205));
var on_drag_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56962__$1,new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671));
var on_drag_delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56962__$1,new cljs.core.Keyword(null,"on-drag-delta","on-drag-delta",-81646512));
var on_drag_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56962__$1,new cljs.core.Keyword(null,"on-drag-position","on-drag-position",1447756755));
var dragging_ref = rumext.v2.use_ref(false);
var start_pos_ref = rumext.v2.use_ref(null);
var current_pos_ref = rumext.v2.use_ref(null);
var handle_pointer_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_drag_start)],(function (event){
var raw_pt = app.util.dom.get_client_position(event);
var position = app.main.ui.workspace.viewport.viewport_ref.point__GT_viewport(raw_pt);
app.util.dom.capture_pointer(event);

rumext.v2.set_ref_val_BANG_(dragging_ref,true);

rumext.v2.set_ref_val_BANG_(start_pos_ref,raw_pt);

rumext.v2.set_ref_val_BANG_(current_pos_ref,raw_pt);

if(cljs.core.truth_(on_drag_start)){
return (on_drag_start.cljs$core$IFn$_invoke$arity$2 ? on_drag_start.cljs$core$IFn$_invoke$arity$2(event,position) : on_drag_start.call(null,event,position));
} else {
return null;
}
}));
var handle_lost_pointer_capture = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_drag_end)],(function (event){
var raw_pt = rumext.v2.ref_val(current_pos_ref);
var position = app.main.ui.workspace.viewport.viewport_ref.point__GT_viewport(raw_pt);
var start = rumext.v2.ref_val(start_pos_ref);
var delta = app.common.geom.point.to_vec(start,app.util.dom.get_client_position(event));
app.util.dom.release_pointer(event);

rumext.v2.set_ref_val_BANG_(dragging_ref,false);

rumext.v2.set_ref_val_BANG_(start_pos_ref,null);

if(cljs.core.truth_(on_drag_end)){
return (on_drag_end.cljs$core$IFn$_invoke$arity$3 ? on_drag_end.cljs$core$IFn$_invoke$arity$3(event,position,delta) : on_drag_end.call(null,event,position,delta));
} else {
return null;
}
}));
var handle_pointer_move = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_drag_delta),rumext.v2.adapt(on_drag_position)],(function (event){
if(cljs.core.truth_(rumext.v2.ref_val(dragging_ref))){
var start = rumext.v2.ref_val(start_pos_ref);
var pos = app.util.dom.get_client_position(event);
var pt = app.main.ui.workspace.viewport.viewport_ref.point__GT_viewport(pos);
rumext.v2.set_ref_val_BANG_(current_pos_ref,pos);

if(cljs.core.truth_(on_drag_delta)){
var G__56963_57110 = event;
var G__56964_57111 = app.common.geom.point.to_vec(start,pos);
(on_drag_delta.cljs$core$IFn$_invoke$arity$2 ? on_drag_delta.cljs$core$IFn$_invoke$arity$2(G__56963_57110,G__56964_57111) : on_drag_delta.call(null,G__56963_57110,G__56964_57111));
} else {
}

if(cljs.core.truth_(on_drag_position)){
return (on_drag_position.cljs$core$IFn$_invoke$arity$2 ? on_drag_position.cljs$core$IFn$_invoke$arity$2(event,pt) : on_drag_position.call(null,event,pt));
} else {
return null;
}
} else {
return null;
}
}));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handle-pointer-down","handle-pointer-down",761659029),handle_pointer_down,new cljs.core.Keyword(null,"handle-lost-pointer-capture","handle-lost-pointer-capture",-895460559),handle_lost_pointer_capture,new cljs.core.Keyword(null,"handle-pointer-move","handle-pointer-move",1990039805),handle_pointer_move], null);
});
app.main.ui.workspace.viewport.grid_layout_editor.resize_cell_handler = (function app$main$ui$workspace$viewport$grid_layout_editor$resize_cell_handler(props_56965){
var props = props_56965;
var shape = (props["shape"]);
var x = (props["x"]);
var y = (props["y"]);
var width = (props["width"]);
var height = (props["height"]);
var handler = (props["handler"]);
var on_set_modifiers = (props["on-set-modifiers"]);
var on_clear_modifiers = (props["on-clear-modifiers"]);
var objects = rumext.v2.deref(app.main.refs.workspace_page_objects);
var map__56966 = (props["cell"]);
var map__56966__$1 = cljs.core.__destructure_map(map__56966);
var cell_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56966__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__56967 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),cell_id], null));
var map__56967__$1 = cljs.core.__destructure_map(map__56967);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56967__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56967__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var row_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56967__$1,new cljs.core.Keyword(null,"row-span","row-span",-365554241));
var column_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56967__$1,new cljs.core.Keyword(null,"column-span","column-span",1302376857));
var direction = (props["direction"]);
var layout_data = (props["layout-data"]);
var calculate_drag_modifiers = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape),rumext.v2.adapt(row),rumext.v2.adapt(column),rumext.v2.adapt(row_span),rumext.v2.adapt(column_span)],(function (position){
var vec__56969 = app.common.geom.shapes.grid_layout.get_position_grid_coord(layout_data,position);
var drag_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56969,(0),null);
var drag_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56969,(1),null);
var vec__56972 = (function (){var G__56975 = handler;
var G__56975__$1 = (((G__56975 instanceof cljs.core.Keyword))?G__56975.fqn:null);
switch (G__56975__$1) {
case "top":
var new_row = (function (){var x__5113__auto__ = (row + (row_span - (1)));
var y__5114__auto__ = drag_row;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var new_row_span = ((row - new_row) + row_span);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_row,column,new_row_span,column_span], null);

break;
case "left":
var new_column = (function (){var x__5113__auto__ = (column + (column_span - (1)));
var y__5114__auto__ = drag_column;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var new_column_span = ((column - new_column) + column_span);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,new_column,row_span,new_column_span], null);

break;
case "bottom":
var new_row_span = (function (){var x__5110__auto__ = (1);
var y__5111__auto__ = ((drag_row - row) + (1));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column,new_row_span,column_span], null);

break;
case "right":
var new_column_span = (function (){var x__5110__auto__ = (1);
var y__5111__auto__ = ((drag_column - column) + (1));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column,row_span,new_column_span], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56975__$1)].join('')));

}
})();
var new_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56972,(0),null);
var new_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56972,(1),null);
var new_row_span = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56972,(2),null);
var new_column_span = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56972,(3),null);
var shape__$1 = app.common.types.shape.layout.assign_cells(app.common.types.shape.layout.resize_cell_area(shape,row,column,new_row,new_column,new_row_span,new_column_span),objects);
return app.common.types.modifiers.change_property(app.common.types.modifiers.change_property(app.common.types.modifiers.change_property(app.common.types.modifiers.empty(),new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947),new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947).cljs$core$IFn$_invoke$arity$1(shape__$1)),new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864),new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864).cljs$core$IFn$_invoke$arity$1(shape__$1)),new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187).cljs$core$IFn$_invoke$arity$1(shape__$1));
}));
var handle_drag_position = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(calculate_drag_modifiers),rumext.v2.adapt(on_set_modifiers)],(function (_,position){
var modifiers = (calculate_drag_modifiers.cljs$core$IFn$_invoke$arity$1 ? calculate_drag_modifiers.cljs$core$IFn$_invoke$arity$1(position) : calculate_drag_modifiers.call(null,position));
var modif_tree = app.main.data.workspace.modifiers.create_modif_tree(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),modifiers);
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"render-wasm/v1"))){
if(cljs.core.truth_(on_set_modifiers)){
(on_set_modifiers.cljs$core$IFn$_invoke$arity$1 ? on_set_modifiers.cljs$core$IFn$_invoke$arity$1(modifiers) : on_set_modifiers.call(null,modifiers));
} else {
}

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.modifiers.set_wasm_modifiers(modif_tree));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.modifiers.set_modifiers.cljs$core$IFn$_invoke$arity$1(modif_tree));
}
}));
var handle_drag_end = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(calculate_drag_modifiers),rumext.v2.adapt(on_clear_modifiers)],(function (_,position){
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"render-wasm/v1"))){
var modifiers = (calculate_drag_modifiers.cljs$core$IFn$_invoke$arity$1 ? calculate_drag_modifiers.cljs$core$IFn$_invoke$arity$1(position) : calculate_drag_modifiers.call(null,position));
var modif_tree = app.main.data.workspace.modifiers.create_modif_tree(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),modifiers);
if(cljs.core.truth_(on_clear_modifiers)){
(on_clear_modifiers.cljs$core$IFn$_invoke$arity$1 ? on_clear_modifiers.cljs$core$IFn$_invoke$arity$1(modifiers) : on_clear_modifiers.call(null,modifiers));
} else {
}

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.modifiers.apply_wasm_modifiers(modif_tree),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.transforms.finish_transform()], 0));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.modifiers.apply_modifiers.cljs$core$IFn$_invoke$arity$0());
}
}));
var map__56968 = app.main.ui.workspace.viewport.grid_layout_editor.use_drag(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-drag-position","on-drag-position",1447756755),handle_drag_position,new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),handle_drag_end], null));
var map__56968__$1 = cljs.core.__destructure_map(map__56968);
var handle_pointer_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56968__$1,new cljs.core.Keyword(null,"handle-pointer-down","handle-pointer-down",761659029));
var handle_lost_pointer_capture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56968__$1,new cljs.core.Keyword(null,"handle-lost-pointer-capture","handle-lost-pointer-capture",-895460559));
var handle_pointer_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56968__$1,new cljs.core.Keyword(null,"handle-pointer-move","handle-pointer-move",1990039805));
return rumext.v2.jsx("rect",{'width':width,'height':height,'className':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"row","row",-570139521)))?app.main.ui.css_cursors.get_dynamic("scale-ns",new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(shape)):app.main.ui.css_cursors.get_dynamic("scale-ew",new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(shape))),'x':x,'style':{'fill':"transparent",'strokeWidth':(0)},'onLostPointerCapture':handle_lost_pointer_capture,'y':y,'onPointerMove':handle_pointer_move,'onPointerDown':handle_pointer_down});
});

(app.main.ui.workspace.viewport.grid_layout_editor.resize_cell_handler.displayName = "resize-cell-handler");

app.main.ui.workspace.viewport.grid_layout_editor.grid_cell_area_label = (function app$main$ui$workspace$viewport$grid_layout_editor$grid_cell_area_label(props_56976){
var props = props_56976;
var cell_origin = (props["origin"]);
var cell_width = (props["width"]);
var zoom = (props["zoom"]);
var text = (props["text"]);
var area_width = (((10) * cljs.core.count(text)) / zoom);
var area_height = ((25) / zoom);
var area_x = ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_origin) + cell_width) - area_width);
var area_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_origin);
var area_text_x = (area_x + (area_width / (2)));
var area_text_y = (area_y + (area_height / (2)));
return rumext.v2.jsxs("g",{'pointerEvents':"none",'children':[rumext.v2.jsx("rect",{'x':area_x,'y':area_y,'width':area_width,'height':area_height,'style':{'fill':"var(--grid-editor-area-background)",'fillOpacity':0.3}}),rumext.v2.jsx("text",{'x':area_text_x,'y':area_text_y,'style':{'fill':"var(--grid-editor-area-text)",'fontFamily':"worksans",'fontWeight':(600),'fontSize':((14) / zoom),'alignmentBaseline':"central",'textAnchor':"middle"},'children':text})]});
});

(app.main.ui.workspace.viewport.grid_layout_editor.grid_cell_area_label.displayName = "grid-cell-area-label");

app.main.ui.workspace.viewport.grid_layout_editor.grid_cell = (function (component__35533__auto__){
return rumext.v2.memo_SINGLEQUOTE_(component__35533__auto__,(function (new_props_56978,old_props_56979){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_56978.zoom,old_props_56979.zoom)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props_56978["on-clear-modifiers"]),(old_props_56979["on-clear-modifiers"]))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props_56978["on-set-modifiers"]),(old_props_56979["on-set-modifiers"]))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_56978.shape,old_props_56979.shape)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props_56978["layout-data"]),(old_props_56979["layout-data"]))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_56978.cell,old_props_56979.cell)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props_56978["selected?"]),(old_props_56979["selected?"]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props_56978["hover?"]),(old_props_56979["hover?"]))))))))))))))));
}));
})((function app$main$ui$workspace$viewport$grid_layout_editor$grid_cell(props_56977){
var layout_data = (props_56977["layout-data"]);
var selected_QMARK_ = (props_56977["selected?"]);
var cell = props_56977.cell;
var hover_QMARK_ = (props_56977["hover?"]);
var zoom = props_56977.zoom;
var on_clear_modifiers = (props_56977["on-clear-modifiers"]);
var on_set_modifiers = (props_56977["on-set-modifiers"]);
var shape = props_56977.shape;
var cell_bounds = app.common.geom.shapes.grid_layout.cell_bounds(layout_data,cell);
var cell_origin = app.common.geom.shapes.points.origin(cell_bounds);
var cell_width = app.common.geom.shapes.points.width_points(cell_bounds);
var cell_height = app.common.geom.shapes.points.height_points(cell_bounds);
var cell_center = app.common.geom.shapes.points__GT_center(cell_bounds);
var cell_origin__$1 = app.common.geom.point.transform(cell_origin,app.common.geom.matrix.transform_in(cell_center,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$1(shape)));
var handle_pointer_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell))],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.grid_layout.editor.hover_grid_cell(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell),true));
}));
var handle_pointer_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell))],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.grid_layout.editor.hover_grid_cell(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell),false));
}));
var handle_pointer_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)),rumext.v2.adapt(selected_QMARK_)],(function (event){
if(app.util.dom.left_mouse_QMARK_(event)){
if(cljs.core.truth_((function (){var and__5023__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return ((app.util.keyboard.mod_QMARK_(event)) || (app.util.keyboard.shift_QMARK_(event)));
} else {
return and__5023__auto__;
}
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.grid_layout.editor.remove_selection(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)));
} else {
if(((cljs.core.not(selected_QMARK_)) && (app.util.keyboard.mod_QMARK_(event)))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.grid_layout.editor.add_to_selection.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)));
} else {
if(((cljs.core.not(selected_QMARK_)) && (app.util.keyboard.shift_QMARK_(event)))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.grid_layout.editor.add_to_selection.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell),true));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.grid_layout.editor.set_selection(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)));

}
}
}
} else {
return null;
}
}));
var handle_context_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)),rumext.v2.adapt(selected_QMARK_)],(function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

var position = app.util.dom.get_client_position(event);
if(cljs.core.truth_(selected_QMARK_)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.show_grid_cell_context_menu(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"grid-id","grid-id",1007140206),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.grid_layout.editor.set_selection(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.show_grid_cell_context_menu(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"grid-id","grid-id",1007140206),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null))], 0));
}
}));
return rumext.v2.jsxs("g",{'className':"cell-editor",'children':[((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"grid-cells","grid-cells",-486475418)))?rumext.v2.jsxs("g",{'className':"debug-cell",'pointerEvents':"none",'transform':""+(app.common.geom.matrix.transform_in(cell_center,new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(shape)) ?? ""),'children':[rumext.v2.jsx("rect",{'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_origin__$1),'y':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_origin__$1),'width':cell_width,'height':cell_height,'fill':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"auto","auto",-566279492)))?"green":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"manual","manual",-237370608)))?"red":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"area","area",472007256)))?"yellow":"black"
))),'fillOpacity':0.2}),((cljs.core.seq(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(cell)))?rumext.v2.jsx("circle",{'cx':((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_origin__$1) + cell_width) + (- ((7) / zoom))),'cy':(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_origin__$1) + ((7) / zoom)),'r':((5) / zoom),'fill':"red"}):null)]}):null),rumext.v2.jsx("rect",{'width':cell_width,'height':cell_height,'className':app.util.dom.classnames.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["main_ui_workspace_viewport_grid_layout_editor__grid-cell-outline",true,"main_ui_workspace_viewport_grid_layout_editor__hover",hover_QMARK_,"main_ui_workspace_viewport_grid_layout_editor__selected",selected_QMARK_], 0)),'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_origin__$1),'transform':""+(app.common.geom.matrix.transform_in(cell_center,new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(shape)) ?? ""),'onContextMenu':handle_context_menu,'y':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_origin__$1),'onPointerDown':handle_pointer_down,'onPointerLeave':handle_pointer_leave,'onPointerEnter':handle_pointer_enter}),(cljs.core.truth_(new cljs.core.Keyword(null,"area-name","area-name",-496581211).cljs$core$IFn$_invoke$arity$1(cell))?rumext.v2.jsx(app.main.ui.workspace.viewport.grid_layout_editor.grid_cell_area_label,{'origin':cell_origin__$1,'width':cell_width,'zoom':zoom,'text':new cljs.core.Keyword(null,"area-name","area-name",-496581211).cljs$core$IFn$_invoke$arity$1(cell)}):null),(cljs.core.truth_(selected_QMARK_)?(function (){var handlers = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_origin__$1),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_origin__$1) + ((-10) / zoom)),cell_width,((20) / zoom),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_origin__$1) + cell_width) + ((-10) / zoom)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_origin__$1),((20) / zoom),cell_height,new cljs.core.Keyword(null,"column","column",2078222095)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_origin__$1),((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_origin__$1) + cell_height) + ((-10) / zoom)),cell_width,((20) / zoom),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_origin__$1) + ((-10) / zoom)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_origin__$1),((20) / zoom),cell_height,new cljs.core.Keyword(null,"column","column",2078222095)], null)], null);
return rumext.v2.jsx("g",{'transform':""+(app.common.geom.matrix.transform_in(cell_center,new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(shape)) ?? ""),'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__56980){
var vec__56981 = p__56980;
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56981,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56981,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56981,(2),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56981,(3),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56981,(4),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56981,(5),null);
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.viewport.grid_layout_editor.resize_cell_handler,{'y':y,'width':width,'on-clear-modifiers':on_clear_modifiers,'on-set-modifiers':on_set_modifiers,'shape':shape,'x':x,'layout-data':layout_data,'cell':cell,'handler':handler,'direction':dir,'height':height},""+"resize-"+(app.common.data.name(handler) ?? "")+"-"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell) ?? "")));

return out_arr__35152__auto__;
}),[],handlers)});
})():null)]});
}));

(app.main.ui.workspace.viewport.grid_layout_editor.grid_cell.displayName = "grid-cell");

app.main.ui.workspace.viewport.grid_layout_editor.use_resize_track = (function app$main$ui$workspace$viewport$grid_layout_editor$use_resize_track(type,shape,index,track_before,track_after,zoom,snap_pixel_QMARK_,on_set_modifiers,on_clear_modifiers){
var start_size_before = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(null);
var start_size_after = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(null);
var handle_drag_start = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape),rumext.v2.adapt(track_before),rumext.v2.adapt(track_after)],(function (){
cljs.core.reset_BANG_(start_size_before,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(track_before));

cljs.core.reset_BANG_(start_size_after,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(track_after));

var tracks_prop = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),type))?new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864):new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947));
var shape__$1 = (function (){var G__56984 = (function (){var G__56985 = shape;
if((!((track_before == null)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__56985,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tracks_prop,(index - (1))], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(track_before)], null));
} else {
return G__56985;
}
})();
if((!((track_after == null)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__56984,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tracks_prop,index], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(track_after)], null));
} else {
return G__56984;
}
})();
var modifiers = app.common.types.modifiers.change_property(app.common.types.modifiers.empty(),tracks_prop,cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,tracks_prop));
var modif_tree = app.main.data.workspace.modifiers.create_modif_tree(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1)], null),modifiers);
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"render-wasm/v1"))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.modifiers.set_wasm_modifiers(modif_tree));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.modifiers.set_modifiers.cljs$core$IFn$_invoke$arity$1(modif_tree));
}
}));
var calculate_modifiers = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape),rumext.v2.adapt(track_before),rumext.v2.adapt(track_after)],(function (position){
var vec__56986 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),type))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864),new cljs.core.Keyword(null,"x","x",2099068185)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
var tracks_prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56986,(0),null);
var axis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56986,(1),null);
var precision = (cljs.core.truth_(snap_pixel_QMARK_)?app.common.math.round:cljs.core.identity);
var delta = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(position,axis) / zoom);
var new_size_before = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (function (){var G__56989 = (cljs.core.deref(start_size_before) + delta);
return (precision.cljs$core$IFn$_invoke$arity$1 ? precision.cljs$core$IFn$_invoke$arity$1(G__56989) : precision.call(null,G__56989));
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var new_size_after = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (function (){var G__56990 = (cljs.core.deref(start_size_after) - delta);
return (precision.cljs$core$IFn$_invoke$arity$1 ? precision.cljs$core$IFn$_invoke$arity$1(G__56990) : precision.call(null,G__56990));
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var shape__$1 = (function (){var G__56991 = (function (){var G__56992 = shape;
if((!((track_before == null)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__56992,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tracks_prop,(index - (1))], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"value","value",305978217),new_size_before], null));
} else {
return G__56992;
}
})();
if((!((track_after == null)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__56991,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tracks_prop,index], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"value","value",305978217),new_size_after], null));
} else {
return G__56991;
}
})();
return app.common.types.modifiers.change_property(app.common.types.modifiers.empty(),tracks_prop,cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,tracks_prop));
}));
var handle_drag_position = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(calculate_modifiers),rumext.v2.adapt(on_set_modifiers)],(function (_,position){
var modifiers = (calculate_modifiers.cljs$core$IFn$_invoke$arity$1 ? calculate_modifiers.cljs$core$IFn$_invoke$arity$1(position) : calculate_modifiers.call(null,position));
var modif_tree = app.main.data.workspace.modifiers.create_modif_tree(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),modifiers);
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"render-wasm/v1"))){
if(cljs.core.truth_(on_set_modifiers)){
(on_set_modifiers.cljs$core$IFn$_invoke$arity$1 ? on_set_modifiers.cljs$core$IFn$_invoke$arity$1(modifiers) : on_set_modifiers.call(null,modifiers));
} else {
}

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.modifiers.set_wasm_modifiers(modif_tree));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.modifiers.set_modifiers.cljs$core$IFn$_invoke$arity$1(modif_tree));
}
}));
var handle_drag_end = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(calculate_modifiers),rumext.v2.adapt(on_clear_modifiers)],(function (_,___$1,position){
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"render-wasm/v1"))){
var modifiers_57116 = (calculate_modifiers.cljs$core$IFn$_invoke$arity$1 ? calculate_modifiers.cljs$core$IFn$_invoke$arity$1(position) : calculate_modifiers.call(null,position));
var modif_tree_57117 = app.main.data.workspace.modifiers.create_modif_tree(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),modifiers_57116);
if(cljs.core.truth_(on_clear_modifiers)){
(on_clear_modifiers.cljs$core$IFn$_invoke$arity$0 ? on_clear_modifiers.cljs$core$IFn$_invoke$arity$0() : on_clear_modifiers.call(null));
} else {
}

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.modifiers.apply_wasm_modifiers(modif_tree_57117),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.transforms.finish_transform()], 0));
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.modifiers.apply_modifiers.cljs$core$IFn$_invoke$arity$0());
}

cljs.core.reset_BANG_(start_size_before,null);

return cljs.core.reset_BANG_(start_size_after,null);
}));
return app.main.ui.workspace.viewport.grid_layout_editor.use_drag(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),handle_drag_start,new cljs.core.Keyword(null,"on-drag-delta","on-drag-delta",-81646512),handle_drag_position,new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),handle_drag_end], null));
});
app.main.ui.workspace.viewport.grid_layout_editor.resize_track_handler = (function app$main$ui$workspace$viewport$grid_layout_editor$resize_track_handler(props_56995){
var props = props_56995;
var shape = (props["shape"]);
var index = (props["index"]);
var last_QMARK_ = (props["last?"]);
var drop_QMARK_ = (props["drop?"]);
var track_before = (props["track-before"]);
var track_after = (props["track-after"]);
var snap_pixel_QMARK_ = (props["snap-pixel?"]);
var on_set_modifiers = (props["on-set-modifiers"]);
var on_clear_modifiers = (props["on-clear-modifiers"]);
var map__56996 = (props["layout-data"]);
var map__56996__$1 = cljs.core.__destructure_map(map__56996);
var layout_data = map__56996__$1;
var column_total_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56996__$1,new cljs.core.Keyword(null,"column-total-size","column-total-size",1061541632));
var column_total_gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56996__$1,new cljs.core.Keyword(null,"column-total-gap","column-total-gap",1781452557));
var row_total_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56996__$1,new cljs.core.Keyword(null,"row-total-size","row-total-size",-2056972834));
var row_total_gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56996__$1,new cljs.core.Keyword(null,"row-total-gap","row-total-gap",-853642856));
var start_p = (props["start-p"]);
var type = (props["type"]);
var zoom = (props["zoom"]);
var bounds = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape);
var hv = (function (p1__56993_SHARP_){
return app.common.geom.shapes.points.start_hv(bounds,p1__56993_SHARP_);
});
var vv = (function (p1__56994_SHARP_){
return app.common.geom.shapes.points.start_vv(bounds,p1__56994_SHARP_);
});
var vec__56997 = app.common.types.shape.layout.gaps(shape);
var layout_gap_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56997,(0),null);
var layout_gap_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56997,(1),null);
var map__57000 = app.main.ui.workspace.viewport.grid_layout_editor.use_resize_track(type,shape,index,track_before,track_after,zoom,snap_pixel_QMARK_,on_set_modifiers,on_clear_modifiers);
var map__57000__$1 = cljs.core.__destructure_map(map__57000);
var handle_pointer_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57000__$1,new cljs.core.Keyword(null,"handle-pointer-down","handle-pointer-down",761659029));
var handle_lost_pointer_capture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57000__$1,new cljs.core.Keyword(null,"handle-lost-pointer-capture","handle-lost-pointer-capture",-895460559));
var handle_pointer_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57000__$1,new cljs.core.Keyword(null,"handle-pointer-move","handle-pointer-move",1990039805));
var vec__57001 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5110__auto__ = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (layout_gap_col - ((10) / zoom));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y__5111__auto__ = ((8) / zoom);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})(),(row_total_size + row_total_gap)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(column_total_size + column_total_gap),(function (){var x__5110__auto__ = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (layout_gap_row - ((10) / zoom));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y__5111__auto__ = ((8) / zoom);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()], null));
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57001,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57001,(1),null);
var start_p_resize = (function (){var G__57004 = start_p;
var G__57004__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(0)))))?app.common.geom.point.subtract(G__57004,hv((width / (2)))):G__57004);
var G__57004__$2 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"row","row",-570139521))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(0)))))?app.common.geom.point.subtract(G__57004__$1,vv((height / (2)))):G__57004__$1);
var G__57004__$3 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(index,(0))) && (cljs.core.not(last_QMARK_))))))?app.common.geom.point.subtract(app.common.geom.point.subtract(G__57004__$2,hv((layout_gap_col / (2)))),hv((width / (2)))):G__57004__$2);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"row","row",-570139521))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(index,(0))) && (cljs.core.not(last_QMARK_)))))){
return app.common.geom.point.subtract(app.common.geom.point.subtract(G__57004__$3,vv((layout_gap_row / (2)))),vv((height / (2))));
} else {
return G__57004__$3;
}
})();
var start_p_drop = (function (){var G__57007 = start_p;
var G__57007__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(0)))))?app.common.geom.point.subtract(G__57007,hv((width / (2)))):G__57007);
var G__57007__$2 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"row","row",-570139521))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(0)))))?app.common.geom.point.subtract(G__57007__$1,vv((height / (2)))):G__57007__$1);
var G__57007__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095));
if(and__5023__auto__){
return last_QMARK_;
} else {
return and__5023__auto__;
}
})())?app.common.geom.point.add(G__57007__$2,hv((width / (2)))):G__57007__$2);
var G__57007__$4 = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"row","row",-570139521));
if(and__5023__auto__){
return last_QMARK_;
} else {
return and__5023__auto__;
}
})())?app.common.geom.point.add(G__57007__$3,vv((height / (2)))):G__57007__$3);
var G__57007__$5 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(index,(0))) && (cljs.core.not(last_QMARK_))))))?app.common.geom.point.subtract(app.common.geom.point.subtract(G__57007__$4,hv((layout_gap_col / (2)))),hv(((5) / zoom))):G__57007__$4);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"row","row",-570139521))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(index,(0))) && (cljs.core.not(last_QMARK_)))))){
return app.common.geom.point.subtract(app.common.geom.point.subtract(G__57007__$5,vv((layout_gap_row / (2)))),vv(((5) / zoom)));
} else {
return G__57007__$5;
}
})();
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(cljs.core.truth_(drop_QMARK_)?rumext.v2.jsx("rect",{'className':"drop",'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_p_drop),'y':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_p_drop),'width':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?((10) / zoom):width),'height':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"row","row",-570139521)))?((10) / zoom):height),'fill':"var(--grid-editor-area-background)"}):null),rumext.v2.jsx("rect",{'width':width,'height':height,'className':"resize-track-handler"+" "+(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?app.main.ui.css_cursors.get_dynamic("resize-ew",new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(shape)):app.main.ui.css_cursors.get_dynamic("resize-ns",new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(shape))) ?? ""),'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_p_resize),'transform':""+(app.common.geom.matrix.transform_in(start_p,new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(shape)) ?? ""),'style':{'fill':"transparent",'strokeWidth':(0)},'onLostPointerCapture':handle_lost_pointer_capture,'y':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_p_resize),'onPointerMove':handle_pointer_move,'onPointerDown':handle_pointer_down})]});
});

(app.main.ui.workspace.viewport.grid_layout_editor.resize_track_handler.displayName = "resize-track-handler");

app.main.ui.workspace.viewport.grid_layout_editor.marker_width = (24);
app.main.ui.workspace.viewport.grid_layout_editor.marker_h1 = (20);
app.main.ui.workspace.viewport.grid_layout_editor.marker_h2 = (10);
app.main.ui.workspace.viewport.grid_layout_editor.marker_bradius = (2);
app.main.ui.workspace.viewport.grid_layout_editor.marker_shape_d = (function app$main$ui$workspace$viewport$grid_layout_editor$marker_shape_d(center,zoom){
var marker_width = (app.main.ui.workspace.viewport.grid_layout_editor.marker_width / zoom);
var marker_h1 = (app.main.ui.workspace.viewport.grid_layout_editor.marker_h1 / zoom);
var marker_h2 = (app.main.ui.workspace.viewport.grid_layout_editor.marker_h2 / zoom);
var marker_bradius = (app.main.ui.workspace.viewport.grid_layout_editor.marker_bradius / zoom);
var marker_half_width = (marker_width / (2));
var marker_half_height = ((marker_h1 + marker_h2) / (2));
var start_p = app.common.geom.point.subtract(center,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(marker_half_width,marker_half_height));
var vec__57013 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.main.ui.workspace.viewport.grid_layout_editor.apply_to_point,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_p], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__57009_SHARP_){
return app.common.geom.point.add(p1__57009_SHARP_,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(marker_width,(0)));
}),(function (p1__57010_SHARP_){
return app.common.geom.point.add(p1__57010_SHARP_,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),marker_h1));
}),(function (p1__57011_SHARP_){
return app.common.geom.point.add(p1__57011_SHARP_,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((- marker_half_width),marker_h2));
}),(function (p1__57012_SHARP_){
return app.common.geom.point.subtract(p1__57012_SHARP_,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(marker_half_width,marker_h2));
})], null));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57013,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57013,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57013,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57013,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57013,(4),null);
var vea = app.common.geom.point.to_vec(e,a);
var vab = app.common.geom.point.to_vec(a,b);
var vbc = app.common.geom.point.to_vec(b,c);
var vcd = app.common.geom.point.to_vec(c,d);
var vde = app.common.geom.point.to_vec(d,e);
var lea = app.common.geom.point.length(vea);
var lab = app.common.geom.point.length(vab);
var lbc = app.common.geom.point.length(vbc);
var lcd = app.common.geom.point.length(vcd);
var lde = app.common.geom.point.length(vde);
var a1 = app.common.geom.point.add(e,app.common.geom.point.resize(vea,(lea - marker_bradius)));
var a2 = app.common.geom.point.add(a,app.common.geom.point.resize(vab,marker_bradius));
var b1 = app.common.geom.point.add(a,app.common.geom.point.resize(vab,(lab - marker_bradius)));
var b2 = app.common.geom.point.add(b,app.common.geom.point.resize(vbc,marker_bradius));
var c1 = app.common.geom.point.add(b,app.common.geom.point.resize(vbc,(lbc - marker_bradius)));
var c2 = app.common.geom.point.add(c,app.common.geom.point.resize(vcd,marker_bradius));
var d1 = app.common.geom.point.add(c,app.common.geom.point.resize(vcd,(lcd - marker_bradius)));
var d2 = app.common.geom.point.add(d,app.common.geom.point.resize(vde,marker_bradius));
var e1 = app.common.geom.point.add(d,app.common.geom.point.resize(vde,(lde - marker_bradius)));
var e2 = app.common.geom.point.add(e,app.common.geom.point.resize(vea,marker_bradius));
return ""+(""+"M"+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a1) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a1) ?? "") ?? "")+(""+"Q"+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a) ?? "")+","+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a2) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a2) ?? "") ?? "")+(""+"L"+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b1) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b1) ?? "") ?? "")+(""+"Q"+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b) ?? "")+","+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b2) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b2) ?? "") ?? "")+(""+"L"+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(c1) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(c1) ?? "") ?? "")+(""+"Q"+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(c) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(c) ?? "")+","+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(c2) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(c2) ?? "") ?? "")+(""+"L"+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(d1) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(d1) ?? "") ?? "")+(""+"Q"+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(d) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(d) ?? "")+","+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(d2) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(d2) ?? "") ?? "")+(""+"L"+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(e1) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(e1) ?? "") ?? "")+(""+"Q"+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(e) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(e) ?? "")+","+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(e2) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(e2) ?? "") ?? "")+(""+"L"+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a1) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a1) ?? "") ?? "")+"Z";
});
app.main.ui.workspace.viewport.grid_layout_editor.track_marker = (function app$main$ui$workspace$viewport$grid_layout_editor$track_marker(props_57018){
var props = props_57018;
var center = (props["center"]);
var value = (props["value"]);
var zoom = (props["zoom"]);
var shape = (props["shape"]);
var index = (props["index"]);
var type = (props["type"]);
var track_before = (props["track-before"]);
var track_after = (props["track-after"]);
var snap_pixel_QMARK_ = (props["snap-pixel?"]);
var on_set_modifiers = (props["on-set-modifiers"]);
var on_clear_modifiers = (props["on-clear-modifiers"]);
var text_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(center);
var text_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(center);
var map__57019 = app.main.ui.workspace.viewport.grid_layout_editor.use_resize_track(type,shape,index,track_before,track_after,zoom,snap_pixel_QMARK_,on_set_modifiers,on_clear_modifiers);
var map__57019__$1 = cljs.core.__destructure_map(map__57019);
var handle_pointer_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57019__$1,new cljs.core.Keyword(null,"handle-pointer-down","handle-pointer-down",761659029));
var handle_lost_pointer_capture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57019__$1,new cljs.core.Keyword(null,"handle-lost-pointer-capture","handle-lost-pointer-capture",-895460559));
var handle_pointer_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57019__$1,new cljs.core.Keyword(null,"handle-pointer-move","handle-pointer-move",1990039805));
return rumext.v2.jsxs("g",{'onPointerDown':handle_pointer_down,'onLostPointerCapture':handle_lost_pointer_capture,'onPointerMove':handle_pointer_move,'transform':""+(app.common.geom.matrix.transform_in(center,new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(shape)) ?? ""),'className':app.util.dom.classnames.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["main_ui_workspace_viewport_grid_layout_editor__grid-track-marker",true,app.main.ui.css_cursors.get_dynamic("resize-ew",new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(shape)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)),app.main.ui.css_cursors.get_dynamic("resize-ns",new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(shape)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"row","row",-570139521))], 0)),'children':[rumext.v2.jsx("path",{'d':app.main.ui.workspace.viewport.grid_layout_editor.marker_shape_d(center,zoom),'className':"main_ui_workspace_viewport_grid_layout_editor__marker-shape"}),rumext.v2.jsx("text",{'x':text_x,'y':text_y,'width':(26.26 / zoom),'height':((36) / zoom),'textAnchor':"middle",'dominantBaseline':"middle",'className':"main_ui_workspace_viewport_grid_layout_editor__marker-text",'children':""+(value ?? "")})]});
});

(app.main.ui.workspace.viewport.grid_layout_editor.track_marker.displayName = "track-marker");

app.main.ui.workspace.viewport.grid_layout_editor.track = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$viewport$grid_layout_editor$track(props_57022){
var props = props_57022;
var shape = (props["shape"]);
var zoom = (props["zoom"]);
var type = (props["type"]);
var index = (props["index"]);
var snap_pixel_QMARK_ = (props["snap-pixel?"]);
var track_data = (props["track-data"]);
var layout_data = (props["layout-data"]);
var hovering_QMARK_ = (props["hovering?"]);
var drop_QMARK_ = (props["drop?"]);
var on_start_reorder_track = (props["on-start-reorder-track"]);
var on_move_reorder_track = (props["on-move-reorder-track"]);
var on_end_reorder_track = (props["on-end-reorder-track"]);
var on_set_modifiers = (props["on-set-modifiers"]);
var on_clear_modifiers = (props["on-clear-modifiers"]);
var track_input_ref = rumext.v2.use_ref();
var vec__57024 = app.common.types.shape.layout.gaps(shape);
var layout_gap_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57024,(0),null);
var layout_gap_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57024,(1),null);
var bounds = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape);
var vv = (function (p1__57020_SHARP_){
return app.common.geom.shapes.points.start_vv(bounds,p1__57020_SHARP_);
});
var hv = (function (p1__57021_SHARP_){
return app.common.geom.shapes.points.start_hv(bounds,p1__57021_SHARP_);
});
var start_p = new cljs.core.Keyword(null,"start-p","start-p",767587445).cljs$core$IFn$_invoke$arity$1(track_data);
var hpt = app.common.geom.shapes.points.project_point(bounds,new cljs.core.Keyword(null,"h","h",1109658740),start_p);
var vpt = app.common.geom.shapes.points.project_point(bounds,new cljs.core.Keyword(null,"v","v",21465059),start_p);
var marker_p = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?(function (){var G__57032 = app.common.geom.point.subtract(hpt,vv(((20) / zoom)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(index,(0))){
return app.common.geom.point.subtract(G__57032,hv((layout_gap_col / (2))));
} else {
return G__57032;
}
})():(function (){var G__57033 = app.common.geom.point.subtract(vpt,hv(((20) / zoom)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(index,(0))){
return app.common.geom.point.subtract(G__57033,vv((layout_gap_row / (2))));
} else {
return G__57033;
}
})());
var text_p = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?hpt:vpt);
var handle_blur_track_input = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))],(function (event){
var target = app.util.dom.get_target(event);
var value = cuerdas.core.upper(app.util.dom.get_input_value(target));
var value_int = app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$1(value);
var value_int__$1 = (cljs.core.truth_(value_int)?(function (){var x__5110__auto__ = (0);
var y__5111__auto__ = value_int;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})():null);
var vec__57034 = ((cuerdas.core.ends_with_QMARK_(value,"%"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"percent","percent",2031453817),app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(value_int__$1,(50))], null):((cuerdas.core.ends_with_QMARK_(value,"FR"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(value_int__$1,(1))], null):(((!((value_int__$1 == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fixed","fixed",-562004358),app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(value_int__$1,(100))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auto","auto",-566279492),null], null)
)));
var track_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57034,(0),null);
var value__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57034,(1),null);
var track_data__$1 = (((!((track_type == null))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),track_type,new cljs.core.Keyword(null,"value","value",305978217),value__$1], null):null);
app.util.dom.set_value_BANG_(rumext.v2.ref_val(track_input_ref),app.main.ui.workspace.viewport.grid_layout_editor.format_size(track_data__$1));

if((!((track_type == null)))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.change_layout_track(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),type,index,track_data__$1));

return app.util.dom.set_data_BANG_(target,"default-value",app.main.ui.workspace.viewport.grid_layout_editor.format_size(track_data__$1));
} else {
return app.util.object.set_BANG_(target,"value",app.util.dom.get_attribute(target,"data-default-value"));
}
}));
var handle_keydown_track_input = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var enter_QMARK_ = app.util.keyboard.enter_QMARK_(event);
var esc_QMARK_ = app.util.keyboard.esc_QMARK_(event);
if(cljs.core.truth_(enter_QMARK_)){
app.util.dom.blur_BANG_(app.util.dom.get_target(event));
} else {
}

if(cljs.core.truth_(esc_QMARK_)){
return app.util.dom.blur_BANG_(app.util.dom.get_target(event));
} else {
return null;
}
}));
var handle_pointer_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),rumext.v2.adapt(type),rumext.v2.adapt(index)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.hover_layout_track(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),type,index,true));
}));
var handle_pointer_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),rumext.v2.adapt(type),rumext.v2.adapt(index)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.hover_layout_track(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),type,index,false));
}));
var track_list_prop = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?new cljs.core.Keyword(null,"column-tracks","column-tracks",291761616):new cljs.core.Keyword(null,"row-tracks","row-tracks",-1727486848));
var vec__57028 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(text_p),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(text_p) - ((36) / zoom)),(function (){var x__5110__auto__ = (0);
var y__5111__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(track_data);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})(),((36) / zoom)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(text_p) - (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(track_data);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(text_p) - ((36) / zoom)),(function (){var x__5110__auto__ = (0);
var y__5111__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(track_data);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})(),((36) / zoom)], null));
var text_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57028,(0),null);
var text_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57028,(1),null);
var text_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57028,(2),null);
var text_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57028,(3),null);
var handle_drag_start = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_start_reorder_track),rumext.v2.adapt(type),rumext.v2.adapt(index)],(function (){
return (on_start_reorder_track.cljs$core$IFn$_invoke$arity$2 ? on_start_reorder_track.cljs$core$IFn$_invoke$arity$2(type,index) : on_start_reorder_track.call(null,type,index));
}));
var handle_drag_end = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_end_reorder_track),rumext.v2.adapt(type),rumext.v2.adapt(index)],(function (event,position){
var G__57041 = type;
var G__57042 = index;
var G__57043 = position;
var G__57044 = (!(app.util.keyboard.mod_QMARK_(event)));
return (on_end_reorder_track.cljs$core$IFn$_invoke$arity$4 ? on_end_reorder_track.cljs$core$IFn$_invoke$arity$4(G__57041,G__57042,G__57043,G__57044) : on_end_reorder_track.call(null,G__57041,G__57042,G__57043,G__57044));
}));
var handle_drag_position = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_move_reorder_track),rumext.v2.adapt(type),rumext.v2.adapt(index)],(function (_,position){
return (on_move_reorder_track.cljs$core$IFn$_invoke$arity$3 ? on_move_reorder_track.cljs$core$IFn$_invoke$arity$3(type,index,position) : on_move_reorder_track.call(null,type,index,position));
}));
var handle_show_track_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

app.util.dom.prevent_default(event);

var position = (function (){var G__57046 = app.util.dom.get_client_position(event);
var G__57046__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__57046,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,(40)):G__57046);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"row","row",-570139521))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__57046__$1,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,(30));
} else {
return G__57046__$1;
}
})();
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.show_track_context_menu(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"grid-id","grid-id",1007140206),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"index","index",-1531685915),index], null)));
}));
var trackwidth = (text_width * zoom);
var medium_QMARK_ = (((trackwidth >= app.main.ui.workspace.viewport.grid_layout_editor.small_size_limit)) && ((trackwidth < app.main.ui.workspace.viewport.grid_layout_editor.medium_size_limit)));
var small_QMARK_ = (trackwidth < app.main.ui.workspace.viewport.grid_layout_editor.small_size_limit);
var track_before = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [track_list_prop,(index - (1))], null));
var map__57031 = app.main.ui.workspace.viewport.grid_layout_editor.use_drag(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),handle_drag_start,new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),handle_drag_end,new cljs.core.Keyword(null,"on-drag-position","on-drag-position",1447756755),handle_drag_position], null));
var map__57031__$1 = cljs.core.__destructure_map(map__57031);
var handle_pointer_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57031__$1,new cljs.core.Keyword(null,"handle-pointer-down","handle-pointer-down",761659029));
var handle_lost_pointer_capture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57031__$1,new cljs.core.Keyword(null,"handle-lost-pointer-capture","handle-lost-pointer-capture",-895460559));
var handle_pointer_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57031__$1,new cljs.core.Keyword(null,"handle-pointer-move","handle-pointer-move",1990039805));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(track_data)],(function (){
return app.util.dom.set_value_BANG_(rumext.v2.ref_val(track_input_ref),app.main.ui.workspace.viewport.grid_layout_editor.format_size(track_data));
}));

return rumext.v2.jsxs("g",{'className':"track",'children':[rumext.v2.jsxs("g",{'onPointerEnter':handle_pointer_enter,'onPointerLeave':handle_pointer_leave,'transform':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?""+(app.common.geom.matrix.transform_in(text_p,new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(shape)) ?? ""):""+(app.common.geom.matrix.transform_in(text_p,app.common.geom.matrix.rotate.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(shape),(-90))) ?? "")),'children':[rumext.v2.jsx("rect",{'x':(text_x + ((18) / zoom)),'y':text_y,'width':(text_width - ((36) / zoom)),'height':(text_height - ((5) / zoom)),'rx':((3) / zoom),'style':{'cursor':"pointer"},'opacity':(cljs.core.truth_((function (){var and__5023__auto__ = hovering_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (!(small_QMARK_));
} else {
return and__5023__auto__;
}
})())?0.2:(0)),'className':"main_ui_workspace_viewport_grid_layout_editor__grid-editor-header-hover"}),(((!(small_QMARK_)))?rumext.v2.jsx("foreignObject",{'x':text_x,'y':text_y,'width':text_width,'height':text_height,'children':rumext.v2.jsxs("div",{'onContextMenu':handle_show_track_menu,'onPointerDown':handle_pointer_down,'onLostPointerCapture':handle_lost_pointer_capture,'onPointerMove':handle_pointer_move,'className':"main_ui_workspace_viewport_grid_layout_editor__grid-editor-wrapper",'children':[rumext.v2.jsx("input",{'ref':track_input_ref,'style':{},'type':"text",'defaultValue':app.main.ui.workspace.viewport.grid_layout_editor.format_size(track_data),'data-default-value':app.main.ui.workspace.viewport.grid_layout_editor.format_size(track_data),'onKeyDown':handle_keydown_track_input,'onBlur':handle_blur_track_input,'className':"main_ui_workspace_viewport_grid_layout_editor__grid-editor-label"}),(cljs.core.truth_((function (){var and__5023__auto__ = hovering_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (((!(medium_QMARK_))) && ((!(small_QMARK_))));
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx("button",{'onClick':handle_show_track_menu,'className':"main_ui_workspace_viewport_grid_layout_editor__grid-editor-button",'children':app.main.ui.icons.menu}):null)]})}):null)]}),rumext.v2.jsx("g",{'transform':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"row","row",-570139521)))?""+"rotate(-90 "+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(marker_p) ?? "")+" "+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(marker_p) ?? "")+")":null),'children':rumext.v2.jsx(app.main.ui.workspace.viewport.grid_layout_editor.track_marker,{'zoom':zoom,'index':index,'value':""+((index + (1)) ?? ""),'track-before':track_before,'snap-pixel?':snap_pixel_QMARK_,'type':type,'on-clear-modifiers':on_clear_modifiers,'track-after':track_data,'center':marker_p,'on-set-modifiers':on_set_modifiers,'shape':shape})}),rumext.v2.jsx(app.main.ui.workspace.viewport.grid_layout_editor.resize_track_handler,{'zoom':zoom,'index':index,'track-before':track_before,'snap-pixel?':snap_pixel_QMARK_,'type':type,'on-clear-modifiers':on_clear_modifiers,'track-after':track_data,'on-set-modifiers':on_set_modifiers,'start-p':start_p,'shape':shape,'layout-data':layout_data,'drop?':drop_QMARK_})]});
}));

(app.main.ui.workspace.viewport.grid_layout_editor.track.displayName = "track");

app.main.ui.workspace.viewport.grid_layout_editor.editor = rumext.v2.memo_SINGLEQUOTE_((function app$main$ui$workspace$viewport$grid_layout_editor$editor(props_57058){
var props = props_57058;
var base_shape = (props["shape"]);
var objects = (props["objects"]);
var modifiers = (props["modifiers"]);
var zoom = (props["zoom"]);
var view_only = (props["view-only"]);
var st_modif = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var shape = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(base_shape),rumext.v2.adapt(modifiers),rumext.v2.adapt(cljs.core.deref(st_modif))],(function (){
var G__57062 = base_shape;
var G__57062__$1 = (((!((modifiers == null))))?app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(G__57062,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(base_shape)),new cljs.core.Keyword(null,"modifiers","modifiers",50378834))):G__57062);
if((!((cljs.core.deref(st_modif) == null)))){
return app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(G__57062__$1,cljs.core.deref(st_modif));
} else {
return G__57062__$1;
}
}));
var snap_pixel_QMARK_ = rumext.v2.deref(app.main.refs.snap_pixel_QMARK_);
var grid_edition_id_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))],(function (){
return app.main.refs.workspace_grid_edition_id(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
}));
var grid_edition = rumext.v2.deref(grid_edition_id_ref);
var hover_cells = new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(grid_edition);
var selected_cells = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(grid_edition);
var hover_columns = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__57063){
var vec__57064 = p__57063;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57064,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57064,(1),null);
return idx;
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__57068){
var vec__57069 = p__57068;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57069,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57069,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword(null,"column","column",2078222095));
}),new cljs.core.Keyword(null,"hover-track","hover-track",-995236856).cljs$core$IFn$_invoke$arity$1(grid_edition))));
var hover_rows = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__57072){
var vec__57073 = p__57072;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57073,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57073,(1),null);
return idx;
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__57076){
var vec__57077 = p__57076;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57077,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57077,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword(null,"row","row",-570139521));
}),new cljs.core.Keyword(null,"hover-track","hover-track",-995236856).cljs$core$IFn$_invoke$arity$1(grid_edition))));
var bounds = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape);
var hv = (function (p1__57052_SHARP_){
return app.common.geom.shapes.points.start_hv(bounds,p1__57052_SHARP_);
});
var vv = (function (p1__57053_SHARP_){
return app.common.geom.shapes.points.start_vv(bounds,p1__57053_SHARP_);
});
var origin = app.common.geom.shapes.points.origin(bounds);
var layout_data = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape),rumext.v2.adapt(modifiers)],(function (){
var objects__$1 = app.common.geom.shapes.apply_objects_modifiers.cljs$core$IFn$_invoke$arity$2(objects,modifiers);
var ids = app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
var objects__$2 = app.common.geom.shapes.update_shapes_geometry(objects__$1,cljs.core.reverse(ids));
var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57054_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[app.common.geom.shapes.points.parent_coords_bounds(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(p1__57054_SHARP_),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape)),p1__57054_SHARP_],null));
}),app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$3(objects__$2,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remove-hidden","remove-hidden",-1900786853),true], null)));
var children_bounds = app.common.data.lazy_map(ids,(function (p1__57055_SHARP_){
return app.common.geom.shapes.shape__GT_points(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects__$2,p1__57055_SHARP_));
}));
return app.common.geom.shapes.grid_layout.calc_layout_data.cljs$core$IFn$_invoke$arity$5(shape,bounds,children,children_bounds,objects__$2);
}));
var map__57061 = layout_data;
var map__57061__$1 = cljs.core.__destructure_map(map__57061);
var row_tracks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57061__$1,new cljs.core.Keyword(null,"row-tracks","row-tracks",-1727486848));
var column_tracks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57061__$1,new cljs.core.Keyword(null,"column-tracks","column-tracks",291761616));
var column_total_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57061__$1,new cljs.core.Keyword(null,"column-total-size","column-total-size",1061541632));
var column_total_gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57061__$1,new cljs.core.Keyword(null,"column-total-gap","column-total-gap",1781452557));
var row_total_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57061__$1,new cljs.core.Keyword(null,"row-total-size","row-total-size",-2056972834));
var row_total_gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57061__$1,new cljs.core.Keyword(null,"row-total-gap","row-total-gap",-853642856));
var width = (function (){var x__5110__auto__ = app.common.geom.shapes.points.width_points(bounds);
var y__5111__auto__ = ((column_total_size + column_total_gap) + app.common.types.shape.layout.h_padding(shape));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var height = (function (){var x__5110__auto__ = app.common.geom.shapes.points.height_points(bounds);
var y__5111__auto__ = ((row_total_size + row_total_gap) + app.common.types.shape.layout.v_padding(shape));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var handle_pointer_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
if(app.util.dom.left_mouse_QMARK_(event)){
return app.util.dom.stop_propagation(event);
} else {
return null;
}
}));
var handle_add_column = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.add_layout_track.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.Keyword(null,"column","column",2078222095),app.common.types.shape.layout.default_track_value));
}));
var handle_add_row = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.add_layout_track.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.Keyword(null,"row","row",-570139521),app.common.types.shape.layout.default_track_value));
}));
var target_tracks_STAR_ = rumext.v2.use_ref(null);
var drop_track_type_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var drop_track_target_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var handle_start_reorder_track = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(layout_data)],(function (type,_from_idx){
var line_vec = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?vv((1)):hv((1)));
var first_point = origin;
var last_point = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bounds,(1)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bounds,(3)));
var mid_points = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__57056_SHARP_){
return app.common.geom.point.add(new cljs.core.Keyword(null,"start-p","start-p",767587445).cljs$core$IFn$_invoke$arity$1(p1__57056_SHARP_),hv((new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p1__57056_SHARP_) / (2))));
}),new cljs.core.Keyword(null,"column-tracks","column-tracks",291761616).cljs$core$IFn$_invoke$arity$1(layout_data)):cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__57057_SHARP_){
return app.common.geom.point.add(new cljs.core.Keyword(null,"start-p","start-p",767587445).cljs$core$IFn$_invoke$arity$1(p1__57057_SHARP_),vv((new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p1__57057_SHARP_) / (2))));
}),new cljs.core.Keyword(null,"row-tracks","row-tracks",-1727486848).cljs$core$IFn$_invoke$arity$1(layout_data)));
var tracks = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__57083){
var vec__57084 = p__57083;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57084,(0),null);
var vec__57087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57084,(1),null);
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57087,(0),null);
var prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57087,(1),null);
if((!((prev == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev,current,line_vec], null),(index - (1))], null);
} else {
return null;
}
}),app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(app.common.data.with_prev(app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_point], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mid_points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_point], null)], 0)))));
rumext.v2.set_ref_val_BANG_(target_tracks_STAR_,tracks);

return cljs.core.reset_BANG_(drop_track_type_STAR_,type);
}));
var handle_move_reorder_track = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_type,_from_idx,position){
var index = cljs.core.second(app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p__57092){
var vec__57093 = p__57092;
var vec__57096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57093,(0),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57096,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57096,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57096,(2),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57093,(1),null);
return app.common.geom.line.is_inside_lines_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2,v], null),position);
}),rumext.v2.ref_val(target_tracks_STAR_)));
if((!((index == null)))){
return cljs.core.reset_BANG_(drop_track_target_STAR_,index);
} else {
return null;
}
}));
var handle_end_reorder_track = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(base_shape),rumext.v2.adapt(cljs.core.deref(drop_track_target_STAR_))],(function (type,from_index,_position,move_content_QMARK_){
var temp__5825__auto___57118 = cljs.core.deref(drop_track_target_STAR_);
if(cljs.core.truth_(temp__5825__auto___57118)){
var to_index_57119 = temp__5825__auto___57118;
var ids_57120 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(base_shape)], null);
if((from_index < to_index_57119)){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.reorder_layout_track(ids_57120,type,from_index,(to_index_57119 - (1)),move_content_QMARK_));
} else {
if((from_index > to_index_57119)){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.reorder_layout_track(ids_57120,type,from_index,(to_index_57119 - (1)),move_content_QMARK_));
} else {
}
}
} else {
}

rumext.v2.set_ref_val_BANG_(target_tracks_STAR_,null);

cljs.core.reset_BANG_(drop_track_type_STAR_,null);

return cljs.core.reset_BANG_(drop_track_target_STAR_,null);
}));
var handle_set_modifiers = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (modifier){
return cljs.core.reset_BANG_(st_modif,modifier);
}));
var handle_clear_modifiers = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(st_modif,null);
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.grid_layout.editor.stop_grid_layout_editing(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));
});
}));

if(((cljs.core.not(new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(shape))) && (cljs.core.not(new cljs.core.Keyword(null,"blocked","blocked",181326681).cljs$core$IFn$_invoke$arity$1(shape))))){
return rumext.v2.jsxs("g",{'className':"grid-editor",'pointerEvents':(cljs.core.truth_(view_only)?"none":null),'onPointerDown':handle_pointer_down,'children':[rumext.v2.jsx("g",{'className':"cells",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,cell){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.viewport.grid_layout_editor.grid_cell,{'zoom':zoom,'on-clear-modifiers':handle_clear_modifiers,'on-set-modifiers':handle_set_modifiers,'shape':base_shape,'layout-data':layout_data,'cell':cell,'selected?':cljs.core.contains_QMARK_(selected_cells,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)),'hover?':cljs.core.contains_QMARK_(hover_cells,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell))},""+"cell-"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell) ?? "")));

return out_arr__35152__auto__;
}),[],app.common.types.shape.layout.get_cells.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort?","sort?",-567661924),true], null)))}),((view_only)?null:rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.viewport.grid_layout_editor.grid_editor_frame,{'zoom':zoom,'bounds':bounds,'width':width,'height':height}),(function (){var start_p = app.common.geom.point.add(origin,hv((width + ((30) / zoom))));
return rumext.v2.jsx("g",{'transform':""+(app.common.geom.matrix.transform_in(start_p,new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(shape)) ?? ""),'children':rumext.v2.jsx(app.main.ui.workspace.viewport.grid_layout_editor.plus_btn,{'start-p':start_p,'zoom':zoom,'type':new cljs.core.Keyword(null,"column","column",2078222095),'on-click':handle_add_column})});
})(),(function (){var start_p = app.common.geom.point.add(origin,vv((height + ((30) / zoom))));
return rumext.v2.jsx("g",{'transform':""+(app.common.geom.matrix.transform_in(start_p,new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(shape)) ?? ""),'children':rumext.v2.jsx(app.main.ui.workspace.viewport.grid_layout_editor.plus_btn,{'start-p':start_p,'zoom':zoom,'type':new cljs.core.Keyword(null,"row","row",-570139521),'on-click':handle_add_row})});
})(),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__57099){
var vec__57100 = p__57099;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57100,(0),null);
var column_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57100,(1),null);
out_arr__35152__auto__.push((function (){var drop_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),cljs.core.deref(drop_track_type_STAR_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,cljs.core.deref(drop_track_target_STAR_))));
return rumext.v2.jsx(app.main.ui.workspace.viewport.grid_layout_editor.track,{'zoom':zoom,'hovering?':cljs.core.contains_QMARK_(hover_columns,idx),'index':idx,'snap-pixel?':snap_pixel_QMARK_,'type':new cljs.core.Keyword(null,"column","column",2078222095),'track-data':column_data,'on-clear-modifiers':handle_clear_modifiers,'on-start-reorder-track':handle_start_reorder_track,'on-set-modifiers':handle_set_modifiers,'on-end-reorder-track':handle_end_reorder_track,'shape':shape,'layout-data':layout_data,'drop?':drop_QMARK_,'on-move-reorder-track':handle_move_reorder_track},""+"column-track-"+(idx ?? ""));
})());

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(column_tracks)),((cljs.core.empty_QMARK_(column_tracks))?null:(function (){var last_track = cljs.core.last(column_tracks);
var start_p = new cljs.core.Keyword(null,"start-p","start-p",767587445).cljs$core$IFn$_invoke$arity$1(last_track);
var end_p = app.common.geom.point.add(start_p,hv(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(last_track)));
var marker_p = app.common.geom.point.subtract(app.common.geom.shapes.points.project_point(bounds,new cljs.core.Keyword(null,"h","h",1109658740),end_p),vv(((20) / zoom)));
return rumext.v2.jsxs("g",{'className':"track",'children':[rumext.v2.jsx(app.main.ui.workspace.viewport.grid_layout_editor.track_marker,{'zoom':zoom,'index':cljs.core.count(column_tracks),'value':""+((cljs.core.count(column_tracks) + (1)) ?? ""),'track-before':cljs.core.last(column_tracks),'snap-pixel?':snap_pixel_QMARK_,'type':new cljs.core.Keyword(null,"column","column",2078222095),'on-clear-modifiers':handle_clear_modifiers,'center':marker_p,'on-set-modifiers':handle_set_modifiers,'shape':shape}),(function (){var drop_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),cljs.core.deref(drop_track_type_STAR_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(column_tracks),cljs.core.deref(drop_track_target_STAR_))));
return rumext.v2.jsx(app.main.ui.workspace.viewport.grid_layout_editor.resize_track_handler,{'zoom':zoom,'index':cljs.core.count(column_tracks),'last?':true,'track-before':cljs.core.last(column_tracks),'snap-pixel?':snap_pixel_QMARK_,'type':new cljs.core.Keyword(null,"column","column",2078222095),'on-clear-modifiers':handle_clear_modifiers,'on-set-modifiers':handle_set_modifiers,'start-p':end_p,'shape':shape,'layout-data':layout_data,'drop?':drop_QMARK_});
})()]});
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__57103){
var vec__57104 = p__57103;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57104,(0),null);
var row_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57104,(1),null);
out_arr__35152__auto__.push((function (){var drop_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.deref(drop_track_type_STAR_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,cljs.core.deref(drop_track_target_STAR_))));
return rumext.v2.jsx(app.main.ui.workspace.viewport.grid_layout_editor.track,{'zoom':zoom,'hovering?':cljs.core.contains_QMARK_(hover_rows,idx),'index':idx,'snap-pixel?':snap_pixel_QMARK_,'type':new cljs.core.Keyword(null,"row","row",-570139521),'track-data':row_data,'on-clear-modifiers':handle_clear_modifiers,'on-start-reorder-track':handle_start_reorder_track,'on-set-modifiers':handle_set_modifiers,'on-end-reorder-track':handle_end_reorder_track,'shape':shape,'layout-data':layout_data,'drop?':drop_QMARK_,'on-move-reorder-track':handle_move_reorder_track},""+"row-track-"+(idx ?? ""));
})());

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(row_tracks)),((cljs.core.empty_QMARK_(row_tracks))?null:(function (){var last_track = cljs.core.last(row_tracks);
var start_p = new cljs.core.Keyword(null,"start-p","start-p",767587445).cljs$core$IFn$_invoke$arity$1(last_track);
var end_p = app.common.geom.point.add(start_p,vv(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(last_track)));
var marker_p = app.common.geom.point.subtract(app.common.geom.shapes.points.project_point(bounds,new cljs.core.Keyword(null,"v","v",21465059),end_p),hv(((20) / zoom)));
return rumext.v2.jsxs("g",{'className':"track",'children':[rumext.v2.jsx("g",{'transform':""+"rotate(-90 "+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(marker_p) ?? "")+" "+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(marker_p) ?? "")+")",'children':rumext.v2.jsx(app.main.ui.workspace.viewport.grid_layout_editor.track_marker,{'zoom':zoom,'index':cljs.core.count(row_tracks),'value':""+((cljs.core.count(row_tracks) + (1)) ?? ""),'track-before':cljs.core.last(row_tracks),'snap-pixel?':snap_pixel_QMARK_,'type':new cljs.core.Keyword(null,"row","row",-570139521),'on-clear-modifiers':handle_clear_modifiers,'center':marker_p,'on-set-modifiers':handle_set_modifiers,'shape':shape})}),(function (){var drop_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.deref(drop_track_type_STAR_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(row_tracks),cljs.core.deref(drop_track_target_STAR_))));
return rumext.v2.jsx(app.main.ui.workspace.viewport.grid_layout_editor.resize_track_handler,{'zoom':zoom,'index':cljs.core.count(row_tracks),'last?':true,'track-before':cljs.core.last(row_tracks),'snap-pixel?':snap_pixel_QMARK_,'type':new cljs.core.Keyword(null,"row","row",-570139521),'on-clear-modifiers':handle_clear_modifiers,'on-set-modifiers':handle_set_modifiers,'start-p':end_p,'shape':shape,'layout-data':layout_data,'drop?':drop_QMARK_});
})()]});
})())]}))]});
} else {
return null;
}
}));

(app.main.ui.workspace.viewport.grid_layout_editor.editor.displayName = "editor");


//# sourceMappingURL=app.main.ui.workspace.viewport.grid_layout_editor.js.map
