import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.js";
import "./app.common.types.component.js";
import "./app.common.types.container.js";
import "./app.common.types.shape.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.context.js";
import "./app.main.ui.css_cursors.js";
import "./app.util.array.js";
import "./app.util.debug.js";
import "./app.util.dom.js";
import "./app.util.object.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.viewport.selection');
app.main.ui.workspace.viewport.selection.rotation_handler_size = (20);
app.main.ui.workspace.viewport.selection.resize_point_radius = (4);
app.main.ui.workspace.viewport.selection.resize_point_circle_radius = (10);
app.main.ui.workspace.viewport.selection.resize_point_rect_size = (8);
app.main.ui.workspace.viewport.selection.resize_side_height = (8);
app.main.ui.workspace.viewport.selection.selection_rect_color_normal = "var(--color-accent-tertiary)";
app.main.ui.workspace.viewport.selection.selection_rect_color_component = "var(--assets-component-hightlight)";
app.main.ui.workspace.viewport.selection.selection_rect_width = (1);
app.main.ui.workspace.viewport.selection.min_selrect_side = (10);
app.main.ui.workspace.viewport.selection.small_selrect_side = (30);
app.main.ui.workspace.viewport.selection.min_selrect_width = (10);
app.main.ui.workspace.viewport.selection.min_selrect_height = (10);
app.main.ui.workspace.viewport.selection.selection_rect = (function app$main$ui$workspace$viewport$selection$selection_rect(props_57194){
var rect = props_57194.rect;
var zoom = props_57194.zoom;
var transform = props_57194.transform;
var color = props_57194.color;
var on_context_menu = (props_57194["on-context-menu"]);
var on_move_selected = (props_57194["on-move-selected"]);
var x = (rect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (rect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"y","y",-1757859776)));
var width = (rect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"width","width",-384071477)));
var height = (rect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"height","height",1025178622)));
var vec__57195 = (((width < (app.main.ui.workspace.viewport.selection.min_selrect_width / zoom)))?(function (){var width_SINGLEQUOTE_ = (app.main.ui.workspace.viewport.selection.min_selrect_width / zoom);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - ((width_SINGLEQUOTE_ - width) / (2))),width_SINGLEQUOTE_], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,width], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57195,(0),null);
var width__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57195,(1),null);
var vec__57198 = (((height < (app.main.ui.workspace.viewport.selection.min_selrect_height / zoom)))?(function (){var height_SINGLEQUOTE_ = (app.main.ui.workspace.viewport.selection.min_selrect_height / zoom);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y - ((height_SINGLEQUOTE_ - height) / (2))),height_SINGLEQUOTE_], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,height], null));
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57198,(0),null);
var height__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57198,(1),null);
return rumext.v2.jsx("rect",{'width':(function (){var x__5110__auto__ = width__$1;
var y__5111__auto__ = ((10) / zoom);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})(),'height':(function (){var x__5110__auto__ = height__$1;
var y__5111__auto__ = ((10) / zoom);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})(),'className':"main viewport-selrect",'x':x__$1,'transform':cljs.core.str.cljs$core$IFn$_invoke$arity$1(transform),'onContextMenu':on_context_menu,'style':{'stroke':color,'strokeWidth':(app.main.ui.workspace.viewport.selection.selection_rect_width / zoom),'fill':"none"},'y':y__$1,'onPointerDown':on_move_selected});
});

(app.main.ui.workspace.viewport.selection.selection_rect.displayName = "selection-rect");

/**
 * Calculates selection handlers for the current selection.
 */
app.main.ui.workspace.viewport.selection.calculate_handlers = (function app$main$ui$workspace$viewport$selection$calculate_handlers(selection,shape,zoom){
var x = (selection?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selection,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (selection?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selection,new cljs.core.Keyword(null,"y","y",-1757859776)));
var width = (selection?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selection,new cljs.core.Keyword(null,"width","width",-384071477)));
var height = (selection?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selection,new cljs.core.Keyword(null,"height","height",1025178622)));
var threshold_small = ((25) / zoom);
var threshold_tiny = ((10) / zoom);
var small_width_QMARK_ = (width <= threshold_small);
var tiny_width_QMARK_ = (width <= threshold_tiny);
var small_height_QMARK_ = (height <= threshold_small);
var tiny_height_QMARK_ = (height <= threshold_tiny);
var path_QMARK_ = app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var vertical_line_QMARK_ = ((path_QMARK_) && (tiny_width_QMARK_));
var horizontal_line_QMARK_ = ((path_QMARK_) && (tiny_height_QMARK_));
var align = ((((small_width_QMARK_) || (small_height_QMARK_)))?new cljs.core.Keyword(null,"outside","outside",-13164995):new cljs.core.Keyword(null,"inside","inside",1972503011));
var result = [({"type": new cljs.core.Keyword(null,"rotation","rotation",-1728051644), "position": new cljs.core.Keyword(null,"top-left","top-left",-1396159636), "props": ({"cx": x, "cy": y})}),({"type": new cljs.core.Keyword(null,"rotation","rotation",-1728051644), "position": new cljs.core.Keyword(null,"top-right","top-right",284698505), "props": ({"cx": (x + width), "cy": y})}),({"type": new cljs.core.Keyword(null,"rotation","rotation",-1728051644), "position": new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646), "props": ({"cx": (x + width), "cy": (y + height)})}),({"type": new cljs.core.Keyword(null,"rotation","rotation",-1728051644), "position": new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488), "props": ({"cx": x, "cy": (y + height)})})];
if(horizontal_line_QMARK_){
} else {
app.util.array.conj_BANG_.cljs$core$IFn$_invoke$arity$3(result,({"type": new cljs.core.Keyword(null,"resize-side","resize-side",-532712885), "position": new cljs.core.Keyword(null,"top","top",-1856271961), "props": ({"x": ((small_width_QMARK_)?(x + ((width - threshold_small) / (2))):x), "y": y, "length": ((small_width_QMARK_)?threshold_small:width), "angle": (0), "align": align, "show-handler": tiny_width_QMARK_})}),({"type": new cljs.core.Keyword(null,"resize-side","resize-side",-532712885), "position": new cljs.core.Keyword(null,"bottom","bottom",-1550509018), "props": ({"x": ((small_width_QMARK_)?(x + ((width + threshold_small) / (2))):(x + width)), "y": (y + height), "length": ((small_width_QMARK_)?threshold_small:width), "angle": (180), "align": align, "show-handler": tiny_width_QMARK_})}));
}

if(vertical_line_QMARK_){
} else {
app.util.array.conj_BANG_.cljs$core$IFn$_invoke$arity$3(result,({"type": new cljs.core.Keyword(null,"resize-side","resize-side",-532712885), "position": new cljs.core.Keyword(null,"right","right",-452581833), "props": ({"x": (x + width), "y": ((small_height_QMARK_)?(y + ((height - threshold_small) / (2))):y), "length": ((small_height_QMARK_)?threshold_small:height), "angle": (90), "align": align, "show-handler": tiny_height_QMARK_})}),({"type": new cljs.core.Keyword(null,"resize-side","resize-side",-532712885), "position": new cljs.core.Keyword(null,"left","left",-399115937), "props": ({"x": x, "y": ((small_height_QMARK_)?(y + ((height + threshold_small) / (2))):(y + height)), "length": ((small_height_QMARK_)?threshold_small:height), "angle": (270), "align": align, "show-handler": tiny_height_QMARK_})}));
}

if((((!(tiny_width_QMARK_))) && ((!(tiny_height_QMARK_))))){
return app.util.array.conj_BANG_.cljs$core$IFn$_invoke$arity$5(result,({"type": new cljs.core.Keyword(null,"resize-point","resize-point",-1472965451), "position": new cljs.core.Keyword(null,"top-left","top-left",-1396159636), "props": ({"cx": x, "cy": y, "align": align})}),({"type": new cljs.core.Keyword(null,"resize-point","resize-point",-1472965451), "position": new cljs.core.Keyword(null,"top-right","top-right",284698505), "props": ({"cx": (x + width), "cy": y, "align": align})}),({"type": new cljs.core.Keyword(null,"resize-point","resize-point",-1472965451), "position": new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646), "props": ({"cx": (x + width), "cy": (y + height), "align": align})}),({"type": new cljs.core.Keyword(null,"resize-point","resize-point",-1472965451), "position": new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488), "props": ({"cx": x, "cy": (y + height), "align": align})}));
} else {
return null;
}
});
app.main.ui.workspace.viewport.selection.rotation_handler = (function app$main$ui$workspace$viewport$selection$rotation_handler(props_57203){
var on_rotate = (props_57203["on-rotate"]);
var zoom = props_57203.zoom;
var transform = props_57203.transform;
var rotation = props_57203.rotation;
var cx = props_57203.cx;
var cy = props_57203.cy;
var position = props_57203.position;
var props = props_57203;
var size = (app.main.ui.workspace.viewport.selection.rotation_handler_size / zoom);
var delta_x = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"top-left","top-left",-1396159636))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488)))))?size:(0));
var delta_y = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"top-left","top-left",-1396159636),position)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"top-right","top-right",284698505),position))))?size:(0));
var x = (cx - delta_x);
var y = (cy - delta_y);
var angle = (function (){var G__57204 = position;
var G__57204__$1 = (((G__57204 instanceof cljs.core.Keyword))?G__57204.fqn:null);
switch (G__57204__$1) {
case "top-left":
return (0);

break;
case "top-right":
return (90);

break;
case "bottom-right":
return (180);

break;
case "bottom-left":
return (270);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57204__$1)].join('')));

}
})();
return rumext.v2.jsx("rect",{'width':size,'height':size,'className':app.main.ui.css_cursors.get_dynamic("rotate",(rotation + angle)),'x':x,'transform':""+(transform ?? ""),'fill':((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"handlers","handlers",79528781)))?"blue":"none"),'strokeWidth':(0),'y':y,'onPointerDown':on_rotate});
});

(app.main.ui.workspace.viewport.selection.rotation_handler.displayName = "rotation-handler");

app.main.ui.workspace.viewport.selection.resize_point_handler = (function app$main$ui$workspace$viewport$selection$resize_point_handler(props_57205){
var on_resize = (props_57205["on-resize"]);
var align = props_57205.align;
var zoom = props_57205.zoom;
var transform = props_57205.transform;
var rotation = props_57205.rotation;
var scale_text = (props_57205["scale-text"]);
var color = props_57205.color;
var cx = props_57205.cx;
var cy = props_57205.cy;
var position = props_57205.position;
var cursor = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"top-left","top-left",-1396159636))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646)))))?((scale_text)?app.main.ui.css_cursors.get_dynamic("scale-nesw",rotation):app.main.ui.css_cursors.get_dynamic("resize-nesw",rotation)):((scale_text)?app.main.ui.css_cursors.get_dynamic("scale-nwse",rotation):app.main.ui.css_cursors.get_dynamic("resize-nwse",rotation)));
var pt = app.common.geom.point.transform(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(cx,cy),transform);
var cx_SINGLEQUOTE_ = (pt?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"x","x",2099068185)));
var cy_SINGLEQUOTE_ = (pt?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"y","y",-1757859776)));
return rumext.v2.jsxs("g",{'className':"resize-handler",'children':[rumext.v2.jsx("circle",{'r':(app.main.ui.workspace.viewport.selection.resize_point_radius / zoom),'style':{'fillOpacity':"1",'strokeWidth':"1px",'vectorEffect':"non-scaling-stroke"},'fill':"var(--app-white)",'stroke':color,'cx':cx_SINGLEQUOTE_,'cy':cy_SINGLEQUOTE_}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(align,new cljs.core.Keyword(null,"outside","outside",-13164995)))?(function (){var resize_point_circle_radius = (app.main.ui.workspace.viewport.selection.resize_point_circle_radius / zoom);
var offset_x = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"top-right","top-right",284698505))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646)))))?(0):(- resize_point_circle_radius));
var offset_y = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646)))))?(0):(- resize_point_circle_radius));
var cx__$1 = (cx + offset_x);
var cy__$1 = (cy + offset_y);
var pt__$1 = app.common.geom.point.transform(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(cx__$1,cy__$1),transform);
var cx_SINGLEQUOTE___$1 = (pt__$1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt__$1,new cljs.core.Keyword(null,"x","x",2099068185)));
var cy_SINGLEQUOTE___$1 = (pt__$1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt__$1,new cljs.core.Keyword(null,"y","y",-1757859776)));
return rumext.v2.jsx("rect",{'width':resize_point_circle_radius,'height':resize_point_circle_radius,'className':cursor,'x':cx_SINGLEQUOTE___$1,'transform':(((!((rotation == null))))?""+"rotate("+(rotation ?? "")+", "+(cx_SINGLEQUOTE___$1 ?? "")+", "+(cy_SINGLEQUOTE___$1 ?? "")+")":null),'style':{'fill':((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"handlers","handlers",79528781)))?"red":"none"),'strokeWidth':(0)},'data-position':cljs.core.name(position),'y':cy_SINGLEQUOTE___$1,'onPointerDown':on_resize});
})():rumext.v2.jsx("circle",{'data-x':cx_SINGLEQUOTE_,'cy':cy_SINGLEQUOTE_,'className':cursor,'style':{'fill':((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"handlers","handlers",79528781)))?"red":"none"),'strokeWidth':(0)},'data-position':cljs.core.name(position),'data-y':cy_SINGLEQUOTE_,'r':(app.main.ui.workspace.viewport.selection.resize_point_circle_radius / zoom),'onPointerDown':on_resize,'cx':cx_SINGLEQUOTE_}))]});
});

(app.main.ui.workspace.viewport.selection.resize_point_handler.displayName = "resize-point-handler");

app.main.ui.workspace.viewport.selection.resize_side_handler = (function app$main$ui$workspace$viewport$selection$resize_side_handler(props_57208){
var x = props_57208.x;
var on_resize = (props_57208["on-resize"]);
var y = props_57208.y;
var align = props_57208.align;
var zoom = props_57208.zoom;
var shape_type = (props_57208["shape-type"]);
var show_handler = (props_57208["show-handler"]);
var transform = props_57208.transform;
var rotation = props_57208.rotation;
var scale_text = (props_57208["scale-text"]);
var color = props_57208.color;
var angle = props_57208.angle;
var shape_id = (props_57208["shape-id"]);
var length = props_57208.length;
var position = props_57208.position;
var height = (app.main.ui.workspace.viewport.selection.resize_side_height / zoom);
var offset_y = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(align,new cljs.core.Keyword(null,"outside","outside",-13164995)))?(- height):(- (height / (2))));
var target_y = (y + offset_y);
var transform_str = ""+(app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$2(transform,app.common.geom.matrix.rotate_matrix.cljs$core$IFn$_invoke$arity$2(angle,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y))) ?? "");
var cursor = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"left","left",-399115937))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"right","right",-452581833)))))?((scale_text)?app.main.ui.css_cursors.get_dynamic("scale-ew",rotation):app.main.ui.css_cursors.get_dynamic("resize-ew",rotation)):((scale_text)?app.main.ui.css_cursors.get_dynamic("scale-ns",rotation):app.main.ui.css_cursors.get_dynamic("resize-ns",rotation)));
var on_double_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_id),rumext.v2.adapt(position),rumext.v2.adapt(shape_type)],(function (_event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape_type,new cljs.core.Keyword(null,"text","text",-1790561697))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"right","right",-452581833))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null),(function (p1__57206_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__57206_SHARP_,new cljs.core.Keyword(null,"grow-type","grow-type",-908344411),new cljs.core.Keyword(null,"auto-width","auto-width",-992925188));
})));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null),(function (p1__57207_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__57207_SHARP_,new cljs.core.Keyword(null,"grow-type","grow-type",-908344411),new cljs.core.Keyword(null,"auto-height","auto-height",-960519663));
})));
} else {
return null;
}
}
} else {
return null;
}
}));
return rumext.v2.jsxs("g",{'className':"resize-handler",'children':[((show_handler)?rumext.v2.jsx("circle",{'r':(app.main.ui.workspace.viewport.selection.resize_point_radius / zoom),'style':{'fillOpacity':(1),'stroke':color,'strokeWidth':"1px",'fill':"var(--app-white)",'vectorEffect':"non-scaling-stroke"},'data-position':cljs.core.name(position),'cx':(x + (length / (2))),'cy':y,'transform':transform_str}):null),rumext.v2.jsx("rect",{'onDoubleClick':on_double_click,'width':length,'height':height,'className':cursor,'x':x,'transform':transform_str,'style':{'fill':((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"handlers","handlers",79528781)))?"yellow":"none"),'strokeWidth':(0)},'data-position':cljs.core.name(position),'y':target_y,'onPointerDown':on_resize})]});
});

(app.main.ui.workspace.viewport.selection.resize_side_handler.displayName = "resize-side-handler");

app.main.ui.workspace.viewport.selection.controls_selection_STAR_ = (function app$main$ui$workspace$viewport$selection$controls_selection_STAR_(props_57209){
var zoom = props_57209.zoom;
var color = props_57209.color;
var disabled = props_57209.disabled;
var on_context_menu = props_57209.onContextMenu;
var on_move_selected = props_57209.onMoveSelected;
var shape = props_57209.shape;
var selrect_transform = rumext.v2.deref(app.main.refs.workspace_selrect);
var transform_type = rumext.v2.deref(app.main.refs.current_transform);
var vec__57210 = app.main.data.helpers.get_selrect(selrect_transform,shape);
var selrect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57210,(0),null);
var transform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57210,(1),null);
if((((!((selrect == null)))) && ((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(transform_type,new cljs.core.Keyword(null,"move","move",-2110884309))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(transform_type,new cljs.core.Keyword(null,"rotate","rotate",152705015))))))))){
return rumext.v2.jsx("g",{'className':"controls",'pointerEvents':((disabled)?"none":"visible"),'children':rumext.v2.jsx(app.main.ui.workspace.viewport.selection.selection_rect,{'rect':selrect,'transform':transform,'zoom':zoom,'color':color,'on-move-selected':on_move_selected,'on-context-menu':on_context_menu})});
} else {
return null;
}
});

(app.main.ui.workspace.viewport.selection.controls_selection_STAR_.displayName = "controls-selection*");

app.main.ui.workspace.viewport.selection.controls_handlers_STAR_ = (function app$main$ui$workspace$viewport$selection$controls_handlers_STAR_(props_57213){
var on_resize = props_57213.onResize;
var on_rotate = props_57213.onRotate;
var zoom = props_57213.zoom;
var color = props_57213.color;
var disabled = props_57213.disabled;
var shape = props_57213.shape;
var selrect_transform = rumext.v2.deref(app.main.refs.workspace_selrect);
var transform_type = rumext.v2.deref(app.main.refs.current_transform);
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
var layout = rumext.v2.deref(app.main.refs.workspace_layout);
var scale_text_QMARK_ = cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"scale-text","scale-text",302781380));
var vec__57214 = app.main.data.helpers.get_selrect(selrect_transform,shape);
var selrect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57214,(0),null);
var transform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57214,(1),null);
var rotation = cljs.core.mod(app.common.geom.point.angle.cljs$core$IFn$_invoke$arity$1(app.common.geom.point.transform(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((1),(0)),new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(shape))),(360));
var flip_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"flip-x","flip-x",891276861));
var flip_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"flip-y","flip-y",935998815));
var half_flip_QMARK_ = (function (){var or__5025__auto__ = (function (){var and__5023__auto__ = flip_x;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(flip_y);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto__ = flip_y;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(flip_x);
} else {
return and__5023__auto__;
}
}
})();
if((((!(read_only_QMARK_))) && (((cljs.core.not(new cljs.core.Keyword(null,"blocked","blocked",181326681).cljs$core$IFn$_invoke$arity$1(shape))) && ((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(transform_type,new cljs.core.Keyword(null,"move","move",-2110884309))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(transform_type,new cljs.core.Keyword(null,"rotate","rotate",152705015))))))))))){
return rumext.v2.jsx("g",{'className':"controls",'pointerEvents':((disabled)?"none":"visible"),'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,handler){
out_arr__35152__auto__.push((function (){var type = app.util.object.get.cljs$core$IFn$_invoke$arity$2(handler,"type");
var position = app.util.object.get.cljs$core$IFn$_invoke$arity$2(handler,"position");
var props = app.util.object.get.cljs$core$IFn$_invoke$arity$2(handler,"props");
var rotation__$1 = ((((half_flip_QMARK_) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"top-left","top-left",-1396159636))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646)))))))?(rotation - (90)):((((half_flip_QMARK_) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"top-right","top-right",284698505))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488)))))))?(rotation + (90)):rotation
));
var props__$1 = app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(({"zoom": zoom, "shape-type": (shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348))), "transform": transform, "rotation": rotation__$1, "scale-text": scale_text_QMARK_, "color": color, "key": ""+(cljs.core.name(type) ?? "")+"-"+(cljs.core.name(position) ?? ""), "shape-id": (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092))), "position": position, "on-resize": on_resize, "on-rotate": on_rotate}),props);
var G__57217 = type;
var G__57217__$1 = (((G__57217 instanceof cljs.core.Keyword))?G__57217.fqn:null);
switch (G__57217__$1) {
case "rotation":
return rumext.v2.create_element(app.main.ui.workspace.viewport.selection.rotation_handler,props__$1);

break;
case "resize-point":
return rumext.v2.create_element(app.main.ui.workspace.viewport.selection.resize_point_handler,props__$1);

break;
case "resize-side":
return rumext.v2.create_element(app.main.ui.workspace.viewport.selection.resize_side_handler,props__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57217__$1)].join('')));

}
})());

return out_arr__35152__auto__;
}),[],app.main.ui.workspace.viewport.selection.calculate_handlers(selrect,shape,zoom))});
} else {
return null;
}
});

(app.main.ui.workspace.viewport.selection.controls_handlers_STAR_.displayName = "controls-handlers*");

app.main.ui.workspace.viewport.selection.text_edition_selection = (function app$main$ui$workspace$viewport$selection$text_edition_selection(props_57226){
var zoom = props_57226.zoom;
var color = props_57226.color;
var shape = props_57226.shape;
var x = (shape?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (shape?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"y","y",-1757859776)));
var width = (shape?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"width","width",-384071477)));
var height = (shape?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"height","height",1025178622)));
return rumext.v2.jsx("g",{'className':"controls",'children':rumext.v2.jsx("rect",{'className':"main",'x':x,'y':y,'transform':app.common.geom.shapes.transform_str.cljs$core$IFn$_invoke$arity$1(shape),'width':width,'height':height,'pointerEvents':"visible",'style':{'stroke':color,'strokeWidth':(0.5 / zoom),'strokeOpacity':(1),'fill':"none"}})});
});

(app.main.ui.workspace.viewport.selection.text_edition_selection.displayName = "text-edition-selection");

app.main.ui.workspace.viewport.selection.multiple_handlers_STAR_ = (function app$main$ui$workspace$viewport$selection$multiple_handlers_STAR_(props_57231){
var shapes = props_57231.shapes;
var zoom = props_57231.zoom;
var selected = props_57231.selected;
var color = props_57231.color;
var disabled = props_57231.disabled;
var shape = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes)],(function (){
return app.common.types.shape.setup_shape(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.geom.shapes.shapes__GT_rect(shapes),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"multiple","multiple",1244445549)));
}));
var on_resize = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected),rumext.v2.adapt(shape)],(function (event){
if(app.util.dom.left_mouse_QMARK_(event)){
app.util.dom.stop_propagation(event);

var target = app.util.dom.get_current_target(event);
var position = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(target,"position"));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.start_resize(position,selected,shape));
} else {
return null;
}
}));
var on_rotate = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes)],(function (event){
if(app.util.dom.left_mouse_QMARK_(event)){
app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.start_rotate(shapes));
} else {
return null;
}
}));
return rumext.v2.jsx(app.main.ui.workspace.viewport.selection.controls_handlers_STAR_,{'shape':shape,'zoom':zoom,'color':color,'disabled':disabled,'onResize':on_resize,'onRotate':on_rotate});
});

(app.main.ui.workspace.viewport.selection.multiple_handlers_STAR_.displayName = "multiple-handlers*");

app.main.ui.workspace.viewport.selection.multiple_selection_STAR_ = (function app$main$ui$workspace$viewport$selection$multiple_selection_STAR_(props_57232){
var shapes = props_57232.shapes;
var zoom = props_57232.zoom;
var color = props_57232.color;
var disabled = props_57232.disabled;
var on_context_menu = props_57232.onContextMenu;
var on_move_selected = props_57232.onMoveSelected;
var shape = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes)],(function (){
return app.common.types.shape.setup_shape(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.geom.shapes.shapes__GT_rect(shapes),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"multiple","multiple",1244445549)));
}));
return rumext.v2.jsx(app.main.ui.workspace.viewport.selection.controls_selection_STAR_,{'shape':shape,'zoom':zoom,'color':color,'disabled':disabled,'onMoveSelected':on_move_selected,'onContextMenu':on_context_menu});
});

(app.main.ui.workspace.viewport.selection.multiple_selection_STAR_.displayName = "multiple-selection*");

app.main.ui.workspace.viewport.selection.single_handlers_STAR_ = (function app$main$ui$workspace$viewport$selection$single_handlers_STAR_(props_57236){
var zoom = props_57236.zoom;
var color = props_57236.color;
var disabled = props_57236.disabled;
var shape = props_57236.shape;
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var grow_type = (shape?.grow_type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"grow-type","grow-type",-908344411)));
var shape_type = (shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)));
var on_resize = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_id),rumext.v2.adapt(shape),rumext.v2.adapt(grow_type),rumext.v2.adapt(shape_type)],(function (event){
if(app.util.dom.left_mouse_QMARK_(event)){
app.util.dom.stop_propagation(event);

var target = app.util.dom.get_current_target(event);
var position = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(target,"position"));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape_type,new cljs.core.Keyword(null,"text","text",-1790561697))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(grow_type,new cljs.core.Keyword(null,"auto-width","auto-width",-992925188))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"right","right",-452581833))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"left","left",-399115937))))))))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null),(function (p1__57233_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__57233_SHARP_,new cljs.core.Keyword(null,"grow-type","grow-type",-908344411),new cljs.core.Keyword(null,"auto-height","auto-height",-960519663)),new cljs.core.Keyword(null,"last-resize-direction","last-resize-direction",-1738384379),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475));
})));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape_type,new cljs.core.Keyword(null,"text","text",-1790561697))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(grow_type,new cljs.core.Keyword(null,"auto-height","auto-height",-960519663))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"right","right",-452581833))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"left","left",-399115937))))))))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null),(function (p1__57234_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__57234_SHARP_,new cljs.core.Keyword(null,"last-resize-direction","last-resize-direction",-1738384379),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475));
})));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape_type,new cljs.core.Keyword(null,"text","text",-1790561697))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(grow_type,new cljs.core.Keyword(null,"auto-height","auto-height",-960519663))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"top","top",-1856271961))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))))))))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null),(function (p1__57235_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__57235_SHARP_,new cljs.core.Keyword(null,"last-resize-direction","last-resize-direction",-1738384379),new cljs.core.Keyword(null,"vertical","vertical",718696748));
})));
} else {

}
}
}

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.start_resize(position,cljs.core.PersistentHashSet.createAsIfByAssoc([shape_id]),shape));
} else {
return null;
}
}));
var on_rotate = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape)],(function (event){
if(app.util.dom.left_mouse_QMARK_(event)){
app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.start_rotate(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null)));
} else {
return null;
}
}));
return rumext.v2.jsx(app.main.ui.workspace.viewport.selection.controls_handlers_STAR_,{'shape':shape,'zoom':zoom,'color':color,'disabled':disabled,'onRotate':on_rotate,'onResize':on_resize});
});

(app.main.ui.workspace.viewport.selection.single_handlers_STAR_.displayName = "single-handlers*");

app.main.ui.workspace.viewport.selection.single_selection_STAR_ = (function app$main$ui$workspace$viewport$selection$single_selection_STAR_(props_57237){
var zoom = props_57237.zoom;
var color = props_57237.color;
var disabled = props_57237.disabled;
var on_context_menu = props_57237.onContextMenu;
var on_move_selected = props_57237.onMoveSelected;
var shape = props_57237.shape;
return rumext.v2.jsx(app.main.ui.workspace.viewport.selection.controls_selection_STAR_,{'shape':shape,'zoom':zoom,'color':color,'disabled':disabled,'onMoveSelected':on_move_selected,'onContextMenu':on_context_menu});
});

(app.main.ui.workspace.viewport.selection.single_selection_STAR_.displayName = "single-selection*");

app.main.ui.workspace.viewport.selection.area_STAR_ = (function app$main$ui$workspace$viewport$selection$area_STAR_(props_57238){
var edition = props_57238.edition;
var shapes = props_57238.shapes;
var zoom = props_57238.zoom;
var disabled = props_57238.disabled;
var on_context_menu = props_57238.onContextMenu;
var on_move_selected = props_57238.onMoveSelected;
var total = cljs.core.count(shapes);
var shape = cljs.core.first(shapes);
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var objects = cljs.core.deref(app.main.refs.workspace_page_objects);
var color = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total,(1));
if(and__5023__auto__){
var or__5025__auto__ = app.common.types.container.in_any_component_QMARK_(objects,shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.component.is_variant_container_QMARK_(shape);
}
} else {
return and__5023__auto__;
}
})())?app.main.ui.workspace.viewport.selection.selection_rect_color_component:app.main.ui.workspace.viewport.selection.selection_rect_color_normal);
if((total > (1))){
return rumext.v2.jsx(app.main.ui.workspace.viewport.selection.multiple_selection_STAR_,{'shapes':shapes,'zoom':zoom,'color':color,'disabled':disabled,'onMoveSelected':on_move_selected,'onContextMenu':on_context_menu});
} else {
if(((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edition,shape_id)))){
return rumext.v2.jsx(app.main.ui.workspace.viewport.selection.text_edition_selection,{'shape':shape,'zoom':zoom,'color':color});
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edition,shape_id)){
return null;
} else {
return rumext.v2.jsx(app.main.ui.workspace.viewport.selection.single_selection_STAR_,{'shape':shape,'zoom':zoom,'color':color,'disabled':disabled,'onMoveSelected':on_move_selected,'onContextMenu':on_context_menu});

}
}
}
});

(app.main.ui.workspace.viewport.selection.area_STAR_.displayName = "area*");

app.main.ui.workspace.viewport.selection.handlers_STAR_ = (function app$main$ui$workspace$viewport$selection$handlers_STAR_(props_57239){
var shapes = props_57239.shapes;
var zoom = props_57239.zoom;
var selected = props_57239.selected;
var disabled = props_57239.disabled;
var total = cljs.core.count(shapes);
var shape = cljs.core.first(shapes);
var objects = cljs.core.deref(app.main.refs.workspace_page_objects);
var color = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total,(1));
if(and__5023__auto__){
var or__5025__auto__ = app.common.types.container.in_any_component_QMARK_(objects,shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.component.is_variant_container_QMARK_(shape);
}
} else {
return and__5023__auto__;
}
})())?app.main.ui.workspace.viewport.selection.selection_rect_color_component:app.main.ui.workspace.viewport.selection.selection_rect_color_normal);
if((total > (1))){
return rumext.v2.jsx(app.main.ui.workspace.viewport.selection.multiple_handlers_STAR_,{'shapes':shapes,'selected':selected,'zoom':zoom,'color':color,'disabled':disabled});
} else {
return rumext.v2.jsx(app.main.ui.workspace.viewport.selection.single_handlers_STAR_,{'shape':shape,'zoom':zoom,'color':color,'disabled':disabled});
}
});

(app.main.ui.workspace.viewport.selection.handlers_STAR_.displayName = "handlers*");


//# sourceMappingURL=app.main.ui.workspace.viewport.selection.js.map
