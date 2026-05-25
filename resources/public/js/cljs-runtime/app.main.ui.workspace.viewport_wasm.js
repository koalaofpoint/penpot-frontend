import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.shapes.js";
import "./app.common.types.color.js";
import "./app.common.types.component.js";
import "./app.common.types.path.js";
import "./app.common.types.shape.js";
import "./app.common.types.shape.layout.js";
import "./app.main.data.common.js";
import "./app.main.data.workspace.transforms.js";
import "./app.main.data.workspace.variants.js";
import "./app.main.features.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.context.js";
import "./app.main.ui.flex_controls.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.measurements.js";
import "./app.main.ui.workspace.shapes.path.editor.js";
import "./app.main.ui.workspace.shapes.text.editor.js";
import "./app.main.ui.workspace.shapes.text.text_edition_outline.js";
import "./app.main.ui.workspace.shapes.text.v2_editor.js";
import "./app.main.ui.workspace.top_toolbar.js";
import "./app.main.ui.workspace.viewport.actions.js";
import "./app.main.ui.workspace.viewport.comments.js";
import "./app.main.ui.workspace.viewport.debug.js";
import "./app.main.ui.workspace.viewport.drawarea.js";
import "./app.main.ui.workspace.viewport.frame_grid.js";
import "./app.main.ui.workspace.viewport.gradients.js";
import "./app.main.ui.workspace.viewport.grid_layout_editor.js";
import "./app.main.ui.workspace.viewport.guides.js";
import "./app.main.ui.workspace.viewport.hooks.js";
import "./app.main.ui.workspace.viewport.interactions.js";
import "./app.main.ui.workspace.viewport.outline.js";
import "./app.main.ui.workspace.viewport.pixel_overlay.js";
import "./app.main.ui.workspace.viewport.presence.js";
import "./app.main.ui.workspace.viewport.rulers.js";
import "./app.main.ui.workspace.viewport.scroll_bars.js";
import "./app.main.ui.workspace.viewport.selection.js";
import "./app.main.ui.workspace.viewport.snap_distances.js";
import "./app.main.ui.workspace.viewport.snap_points.js";
import "./app.main.ui.workspace.viewport.top_bar.js";
import "./app.main.ui.workspace.viewport.utils.js";
import "./app.main.ui.workspace.viewport.viewport_ref.js";
import "./app.main.ui.workspace.viewport.widgets.js";
import "./app.render_wasm.api.js";
import "./app.render_wasm.text_editor_input.js";
import "./app.util.debug.js";
import "./app.util.text_editor.js";
import "./beicon.v2.core.js";
import "./promesa.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.viewport_wasm');
app.main.ui.workspace.viewport_wasm.apply_modifiers_to_selected = (function app$main$ui$workspace$viewport_wasm$apply_modifiers_to_selected(selected,objects,modifiers){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (objects__$1,p__57281){
var vec__57282 = p__57281;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57282,(0),null);
var transform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57282,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(objects__$1,id,app.common.geom.shapes.apply_transform,transform);
}),objects,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__57280_SHARP_){
return cljs.core.contains_QMARK_(selected,cljs.core.first(p1__57280_SHARP_));
}),modifiers));
});
app.main.ui.workspace.viewport_wasm.viewport_STAR_ = (function app$main$ui$workspace$viewport_wasm$viewport_STAR_(props_57286){
var palete_size = props_57286.paleteSize;
var selected = props_57286.selected;
var layout = props_57286.layout;
var file = props_57286.file;
var page = props_57286.page;
var wglobal = props_57286.wglobal;
var map__57287 = rumext.v2.deref(app.main.refs.workspace_local);
var map__57287__$1 = cljs.core.__destructure_map(map__57287);
var edition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57287__$1,new cljs.core.Keyword(null,"edition","edition",1337508089));
var selrect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57287__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
var zoom_inverse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57287__$1,new cljs.core.Keyword(null,"zoom-inverse","zoom-inverse",-1760246179));
var panning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57287__$1,new cljs.core.Keyword(null,"panning","panning",-1931627491));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57287__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57287__$1,new cljs.core.Keyword(null,"transform","transform",1381301764));
var vbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57287__$1,new cljs.core.Keyword(null,"vbox","vbox",-492787765));
var edit_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57287__$1,new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229));
var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57287__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));
var vport = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57287__$1,new cljs.core.Keyword(null,"vport","vport",-1317419022));
var map__57288 = wglobal;
var map__57288__$1 = cljs.core.__destructure_map(map__57288);
var options_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57288__$1,new cljs.core.Keyword(null,"options-mode","options-mode",-1788898697));
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57288__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
var show_distances_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57288__$1,new cljs.core.Keyword(null,"show-distances?","show-distances?",-2103559896));
var picking_color_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57288__$1,new cljs.core.Keyword(null,"picking-color?","picking-color?",-819672832));
var permissions = rumext.v2.use_ctx(app.main.ui.context.permissions);
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
var drawing = rumext.v2.deref(app.main.refs.workspace_drawing);
var focus = rumext.v2.deref(app.main.refs.workspace_focus_selected);
var wasm_modifiers = rumext.v2.deref(app.main.refs.workspace_wasm_modifiers);
var workspace_editor_state = rumext.v2.deref(app.main.refs.workspace_editor_state);
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"id","id",-1388402092));
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"objects","objects",2099713734));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"id","id",-1388402092));
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword(null,"background","background",-863952629),"#E8E9EA");
var guides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"guides","guides",-1398390510));
var base_objects = app.main.ui.hooks.with_focus_objects.cljs$core$IFn$_invoke$arity$2(objects,focus);
var objects_modified = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(base_objects),rumext.v2.adapt(wasm_modifiers)],(function (){
return app.main.ui.workspace.viewport_wasm.apply_modifiers_to_selected(selected,base_objects,wasm_modifiers);
}));
var selected_shapes = cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects_modified)),selected));
var alt_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var shift_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var mod_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var space_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var z_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var cursor = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(app.main.ui.workspace.viewport.utils.get_cursor(new cljs.core.Keyword(null,"pointer-inner","pointer-inner",1173575841)));
var hover_ids = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var hover = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var measure_hover = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var hover_disabled_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var hover_top_frame_id = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var frame_hover = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var active_frames = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var canvas_init_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var initialized_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var vec__57289 = app.main.ui.workspace.viewport.viewport_ref.create_viewport_ref();
var viewport_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57289,(0),null);
var on_viewport_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57289,(1),null);
var canvas_ref = rumext.v2.use_ref(null);
var text_editor_ref = rumext.v2.use_ref(null);
var disable_paste_ref = rumext.v2.use_ref(false);
var in_viewport_ref = rumext.v2.use_ref(false);
var move_stream = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$1((function (){
return beicon.v2.core.subject();
}));
var guide_frame = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(hover_ids)),rumext.v2.adapt(base_objects)],(function (){
var parent_id = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.root_frame_QMARK_,base_objects),cljs.core.deref(hover_ids));
if((!((parent_id == null)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(base_objects,parent_id);
} else {
return null;
}
}));
var zoom__$1 = app.common.data.check_num.cljs$core$IFn$_invoke$arity$2(zoom,(1));
var prev_zoom = rumext.v2.use_ref(zoom__$1);
var drawing_tool = new cljs.core.Keyword(null,"tool","tool",-1298696470).cljs$core$IFn$_invoke$arity$1(drawing);
var drawing_obj = new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(drawing);
var selected_frames = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frame-id","frame-id",-636372072)),selected_shapes);
var selected_frame = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected_frames),(1)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(base_objects,cljs.core.first(selected_frames)):null);
var edit_path_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(edit_path,edition);
var edit_path_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(edit_path_state,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993));
var path_editing_QMARK_ = (!((edit_path_state == null)));
var path_drawing_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edit_path_mode,new cljs.core.Keyword(null,"draw","draw",1358331674))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.get.cljs$core$IFn$_invoke$arity$2(drawing_obj,new cljs.core.Keyword(null,"type","type",1174270348)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curve","curve",-569677866),drawing_tool)))));
var editing_shape = (cljs.core.truth_(edition)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(base_objects,edition):null);
var editing_shape__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(editing_shape),rumext.v2.adapt(path_editing_QMARK_),rumext.v2.adapt(base_objects)],(function (){
if(path_editing_QMARK_){
return app.common.types.path.convert_to_path.cljs$core$IFn$_invoke$arity$2(editing_shape,base_objects);
} else {
return editing_shape;
}
}));
var create_comment_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"comments","comments",-293346423),drawing_tool);
var text_editing_QMARK_ = app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(editing_shape__$1);
var grid_editing_QMARK_ = (function (){var and__5023__auto__ = edition;
if(cljs.core.truth_(and__5023__auto__)){
return app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(base_objects,edition);
} else {
return and__5023__auto__;
}
})();
var mode_inspect_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(options_mode,new cljs.core.Keyword(null,"inspect","inspect",688794057));
var on_click = app.main.ui.workspace.viewport.actions.on_click(hover,selected,edition,path_drawing_QMARK_,drawing_tool,space_QMARK_,selrect,z_QMARK_);
var on_context_menu = app.main.ui.workspace.viewport.actions.on_context_menu(hover,hover_ids,read_only_QMARK_);
var on_double_click = app.main.ui.workspace.viewport.actions.on_double_click(hover,hover_ids,hover_top_frame_id,path_drawing_QMARK_,base_objects,edition,drawing_tool,z_QMARK_,read_only_QMARK_);
var comp_inst_ref = rumext.v2.use_ref(false);
var on_drag_enter = app.main.ui.workspace.viewport.actions.on_drag_enter(comp_inst_ref);
var on_drag_over = app.main.ui.workspace.viewport.actions.on_drag_over(move_stream);
var on_drag_end = app.main.ui.workspace.viewport.actions.on_drag_over(comp_inst_ref);
var on_drop = app.main.ui.workspace.viewport.actions.on_drop(file,comp_inst_ref);
var on_pointer_down = app.main.ui.workspace.viewport.actions.on_pointer_down(cljs.core.deref(hover),selected,edition,drawing_tool,text_editing_QMARK_,path_editing_QMARK_,grid_editing_QMARK_,path_drawing_QMARK_,create_comment_QMARK_,space_QMARK_,panning,z_QMARK_,read_only_QMARK_);
var on_pointer_up = app.main.ui.workspace.viewport.actions.on_pointer_up(disable_paste_ref);
var on_pointer_enter = app.main.ui.workspace.viewport.actions.on_pointer_enter(in_viewport_ref);
var on_pointer_leave = app.main.ui.workspace.viewport.actions.on_pointer_leave(in_viewport_ref);
var on_pointer_move = app.main.ui.workspace.viewport.actions.on_pointer_move(move_stream);
var on_move_selected = app.main.ui.workspace.viewport.actions.on_move_selected(hover,hover_ids,selected,space_QMARK_,z_QMARK_,read_only_QMARK_);
var on_menu_selected = app.main.ui.workspace.viewport.actions.on_menu_selected(hover,hover_ids,selected,read_only_QMARK_);
var on_frame_enter = app.main.ui.workspace.viewport.actions.on_frame_enter(frame_hover);
var on_frame_leave = app.main.ui.workspace.viewport.actions.on_frame_leave(frame_hover);
var on_frame_select = app.main.ui.workspace.viewport.actions.on_frame_select(selected,read_only_QMARK_);
var disable_events_QMARK_ = cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"comments","comments",-293346423));
var show_comments_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drawing_tool,new cljs.core.Keyword(null,"comments","comments",-293346423));
var show_cursor_tooltip_QMARK_ = tooltip;
var show_draw_area_QMARK_ = drawing_obj;
var show_gradient_handlers_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected),(1));
var show_grids_QMARK_ = cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"display-guides","display-guides",-1025684907));
var show_frame_outline_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(transform,new cljs.core.Keyword(null,"move","move",-2110884309));
var show_outlines_QMARK_ = (((transform == null)) && (((cljs.core.not(edition)) && (((cljs.core.not(drawing_obj)) && (cljs.core.not((function (){var fexpr__57292 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"comments","comments",-293346423),null,new cljs.core.Keyword(null,"curve","curve",-569677866),null], null), null);
return (fexpr__57292.cljs$core$IFn$_invoke$arity$1 ? fexpr__57292.cljs$core$IFn$_invoke$arity$1(drawing_tool) : fexpr__57292.call(null,drawing_tool));
})())))))));
var show_pixel_grid_QMARK_ = ((cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"show-pixel-grid","show-pixel-grid",-247932281))) && ((zoom__$1 >= (8))));
var show_text_editor_QMARK_ = (function (){var and__5023__auto__ = editing_shape__$1;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(editing_shape__$1));
} else {
return and__5023__auto__;
}
})();
var hover_grid_QMARK_ = (function (){var and__5023__auto__ = (!((cljs.core.deref(hover_top_frame_id) == null)));
if(and__5023__auto__){
return app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.deref(hover_top_frame_id));
} else {
return and__5023__auto__;
}
})();
var show_grid_editor_QMARK_ = (function (){var and__5023__auto__ = editing_shape__$1;
if(cljs.core.truth_(and__5023__auto__)){
return app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(editing_shape__$1);
} else {
return and__5023__auto__;
}
})();
var show_presence_QMARK_ = page_id;
var show_prototypes_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(options_mode,new cljs.core.Keyword(null,"prototype","prototype",-1121365005));
var show_selection_handlers_QMARK_ = ((cljs.core.seq(selected)) && (cljs.core.not(show_text_editor_QMARK_)));
var show_snap_distance_QMARK_ = ((cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"dynamic-alignment","dynamic-alignment",-1699946765))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(transform,new cljs.core.Keyword(null,"move","move",-2110884309))) && (cljs.core.seq(selected)))));
var show_snap_points_QMARK_ = (function (){var and__5023__auto__ = ((cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"dynamic-alignment","dynamic-alignment",-1699946765))) || (cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"snap-guides","snap-guides",-1395069816))));
if(and__5023__auto__){
var or__5025__auto__ = drawing_obj;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return transform;
}
} else {
return and__5023__auto__;
}
})();
var show_selrect_QMARK_ = (function (){var and__5023__auto__ = selrect;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.empty_QMARK_(drawing)) && ((!(text_editing_QMARK_))));
} else {
return and__5023__auto__;
}
})();
var show_measures_QMARK_ = (function (){var and__5023__auto__ = cljs.core.not(transform);
if(and__5023__auto__){
var and__5023__auto____$1 = (!(path_editing_QMARK_));
if(and__5023__auto____$1){
var or__5025__auto__ = show_distances_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return mode_inspect_QMARK_;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})();
var show_artboard_names_QMARK_ = cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"display-artboard-names","display-artboard-names",-579016150));
var hide_ui_QMARK_ = cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"hide-ui","hide-ui",834012905));
var show_rulers_QMARK_ = ((cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"rulers","rulers",756731282))) && ((!(hide_ui_QMARK_))));
var disabled_guides_QMARK_ = (function (){var or__5025__auto__ = drawing_tool;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = transform;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return ((path_drawing_QMARK_) || (path_editing_QMARK_));
}
}
})();
var single_select_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected_shapes),(1));
var first_shape = cljs.core.first(selected_shapes);
var show_add_variant_QMARK_ = (function (){var and__5023__auto__ = single_select_QMARK_;
if(and__5023__auto__){
var or__5025__auto__ = app.common.types.component.is_variant_container_QMARK_(first_shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.component.is_variant_QMARK_(first_shape);
}
} else {
return and__5023__auto__;
}
})();
var add_variant = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(first_shape)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.variants.add_new_variant.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(first_shape)));
}));
var show_padding_QMARK_ = (((transform == null)) && (((single_select_QMARK_) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(first_shape),new cljs.core.Keyword(null,"frame","frame",-1711082588))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(first_shape),new cljs.core.Keyword(null,"flex","flex",-1425124628))) && ((new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(first_shape) === (0))))))))));
var show_margin_QMARK_ = (((transform == null)) && (((single_select_QMARK_) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(selected_frame),new cljs.core.Keyword(null,"flex","flex",-1425124628))) && ((new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(first_shape) === (0))))))));
var selecting_first_level_frame_QMARK_ = ((single_select_QMARK_) && (app.common.files.helpers.root_frame_QMARK_.cljs$core$IFn$_invoke$arity$1(first_shape)));
var offset_x = ((selecting_first_level_frame_QMARK_)?new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(first_shape):new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(selected_frame));
var offset_y = ((selecting_first_level_frame_QMARK_)?new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(first_shape):new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(selected_frame));
var rule_area_size = (app.main.ui.workspace.viewport.rulers.ruler_area_size / zoom__$1);
var preview_blend = rumext.v2.deref(app.main.refs.workspace_preview_blend);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(page_id)],(function (){
var temp__5825__auto__ = rumext.v2.ref_val(canvas_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var canvas = temp__5825__auto__;
promesa.core.fmap.cljs$core$IFn$_invoke$arity$2((function (ready_QMARK_){
if(cljs.core.truth_(ready_QMARK_)){
var init_QMARK_ = (function (){try{return app.render_wasm.api.init_canvas_context(canvas);
}catch (e57293){var e = e57293;
console.error("Error initializing canvas context:",e);

return false;
}})();
cljs.core.reset_BANG_(canvas_init_QMARK_,init_QMARK_);

if(cljs.core.truth_(init_QMARK_)){
app.render_wasm.api.apply_canvas_blur();

(app.render_wasm.api.restore_previous_canvas_pixels.cljs$core$IFn$_invoke$arity$0 ? app.render_wasm.api.restore_previous_canvas_pixels.cljs$core$IFn$_invoke$arity$0() : app.render_wasm.api.restore_previous_canvas_pixels.call(null));
} else {
}

if(cljs.core.truth_(init_QMARK_)){
return null;
} else {
alert("WebGL not supported");

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_recent());
}
} else {
return null;
}
}),app.render_wasm.api.module);

return (function (){
return app.render_wasm.api.clear_canvas();
});
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(show_text_editor_QMARK_),rumext.v2.adapt(workspace_editor_state),rumext.v2.adapt(edition)],(function (){
var active_editor_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(workspace_editor_state,edition);
if(cljs.core.truth_((function (){var and__5023__auto__ = show_text_editor_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return active_editor_state;
} else {
return and__5023__auto__;
}
})())){
var content = app.util.text_editor.export_content(app.util.text_editor.get_editor_current_content(active_editor_state));
app.render_wasm.api.use_shape(edition);

app.render_wasm.api.set_shape_text_content(edition,content);

var dimension = app.render_wasm.api.get_text_dimensions.cljs$core$IFn$_invoke$arity$0();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.transforms.resize_text_editor(edition,dimension));

return app.render_wasm.api.request_render("content");
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(vport)],(function (){
if(cljs.core.truth_(cljs.core.deref(canvas_init_QMARK_))){
return app.render_wasm.api.resize_viewbox(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vport),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vport));
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(canvas_init_QMARK_)),rumext.v2.adapt(preview_blend)],(function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref(canvas_init_QMARK_);
if(cljs.core.truth_(and__5023__auto__)){
return preview_blend;
} else {
return and__5023__auto__;
}
})())){
return app.render_wasm.api.request_render("with-effect");
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(canvas_init_QMARK_)),rumext.v2.adapt(zoom__$1),rumext.v2.adapt(vbox),rumext.v2.adapt(background)],(function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref(canvas_init_QMARK_);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.deref(initialized_QMARK_));
} else {
return and__5023__auto__;
}
})())){
(app.render_wasm.api.clear_canvas_pixels.cljs$core$IFn$_invoke$arity$0 ? app.render_wasm.api.clear_canvas_pixels.cljs$core$IFn$_invoke$arity$0() : app.render_wasm.api.clear_canvas_pixels.call(null));

app.render_wasm.api.initialize_viewport.cljs$core$IFn$_invoke$arity$4(base_objects,zoom__$1,vbox,background);

return cljs.core.reset_BANG_(initialized_QMARK_,true);
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(focus)],(function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref(canvas_init_QMARK_);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.deref(initialized_QMARK_);
} else {
return and__5023__auto__;
}
})())){
if(cljs.core.empty_QMARK_(focus)){
return app.render_wasm.api.clear_focus_mode();
} else {
return app.render_wasm.api.set_focus_mode(focus);
}
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(vbox),rumext.v2.adapt(zoom__$1)],(function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref(canvas_init_QMARK_);
if(cljs.core.truth_(and__5023__auto__)){
return initialized_QMARK_;
} else {
return and__5023__auto__;
}
})())){
app.render_wasm.api.set_view_box(rumext.v2.ref_val(prev_zoom),zoom__$1,vbox);
} else {
}

return rumext.v2.set_ref_val_BANG_(prev_zoom,zoom__$1);
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(background)],(function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref(canvas_init_QMARK_);
if(cljs.core.truth_(and__5023__auto__)){
return initialized_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return app.render_wasm.api.set_canvas_background(background);
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(canvas_init_QMARK_)),rumext.v2.adapt(hover_grid_QMARK_),rumext.v2.adapt(cljs.core.deref(hover_top_frame_id))],(function (){
if(cljs.core.truth_(cljs.core.deref(canvas_init_QMARK_))){
if(cljs.core.truth_(hover_grid_QMARK_)){
return app.render_wasm.api.show_grid(cljs.core.deref(hover_top_frame_id));
} else {
return app.render_wasm.api.clear_grid();
}
} else {
return null;
}
}));

app.main.ui.workspace.viewport.hooks.setup_dom_events(zoom__$1,disable_paste_ref,in_viewport_ref,read_only_QMARK_,drawing_tool,path_drawing_QMARK_);

app.main.ui.workspace.viewport.hooks.setup_viewport_size(vport,viewport_ref);

app.main.ui.workspace.viewport.hooks.setup_cursor(cursor,alt_QMARK_,mod_QMARK_,space_QMARK_,panning,drawing_tool,path_drawing_QMARK_,path_editing_QMARK_,z_QMARK_,read_only_QMARK_);

app.main.ui.workspace.viewport.hooks.setup_keyboard(alt_QMARK_,mod_QMARK_,space_QMARK_,z_QMARK_,shift_QMARK_);

app.main.ui.workspace.viewport.hooks.setup_hover_shapes(page_id,move_stream,base_objects,transform,selected,mod_QMARK_,hover,measure_hover,hover_ids,hover_top_frame_id,cljs.core.deref(hover_disabled_QMARK_),focus,zoom__$1,show_measures_QMARK_);

app.main.ui.workspace.viewport.hooks.setup_shortcuts(path_editing_QMARK_,path_drawing_QMARK_,text_editing_QMARK_,grid_editing_QMARK_);

app.main.ui.workspace.viewport.hooks.setup_active_frames(base_objects,hover_ids,selected,active_frames,zoom__$1,transform,vbox);

return rumext.v2.jsxs("div",{'style':({"--zoom": zoom__$1}),'data-testid':"viewport",'className':"main_ui_workspace_viewport_wasm__viewport",'children':[(cljs.core.truth_(new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(permissions))?(cljs.core.truth_(read_only_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.viewport.top_bar.view_only_bar_STAR_,{}):rumext.v2.jsxs(rumext.v2.Fragment,{'children':[((hide_ui_QMARK_)?null:rumext.v2.jsx(app.main.ui.workspace.top_toolbar.top_toolbar_STAR_,{'layout':layout})),((((path_editing_QMARK_) && (single_select_QMARK_)))?rumext.v2.jsx(app.main.ui.workspace.viewport.top_bar.path_edition_bar_STAR_,{'shape':editing_shape__$1,'editPathState':edit_path_state,'layout':layout}):null),((((grid_editing_QMARK_) && (single_select_QMARK_)))?rumext.v2.jsx(app.main.ui.workspace.viewport.top_bar.grid_edition_bar_STAR_,{'shape':editing_shape__$1}):null)]})):null),rumext.v2.jsxs("div",{'className':"main_ui_workspace_viewport_wasm__viewport-overlays",'children':[((show_comments_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.viewport.comments.comments_layer_STAR_,{'vbox':vbox,'pageId':page_id,'fileId':file_id,'vport':vport,'zoom':zoom__$1}):null),(cljs.core.truth_(picking_color_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.viewport.pixel_overlay.pixel_overlay_wasm_STAR_,{'viewportRef':viewport_ref,'canvasRef':canvas_ref}):null),(cljs.core.truth_((function (){var and__5023__auto__ = show_text_editor_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"text-editor-wasm/v1");
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.render_wasm.text_editor_input.text_editor_input,{'shape':editing_shape__$1,'zoom':zoom__$1,'vbox':vbox}):null)]}),rumext.v2.jsx("canvas",{'id':"render",'data-testid':"canvas-wasm-shapes",'ref':canvas_ref,'width':(app.render_wasm.api.dpr * new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$2(vport,(0))),'height':(app.render_wasm.api.dpr * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$2(vport,(0))),'style':{'backgroundColor':background,'pointerEvents':"none"},'className':"main_ui_workspace_viewport_wasm__render-shapes"},""+"render"+(page_id ?? "")),rumext.v2.jsxs("svg",{'onDoubleClick':on_double_click,'onDragEnter':on_drag_enter,'xmlns':"http://www.w3.org/2000/svg",'className':"viewport-controls"+" "+(""+(cljs.core.deref(cursor) ?? "")+((cljs.core.truth_(drawing_tool)?" drawing":null) ?? "")+" "+("main_ui_workspace_viewport_wasm__viewport-controls" ?? "") ?? ""),'children':[rumext.v2.jsx("defs",{'children':rumext.v2.jsx("clipPath",{'id':"clip-handlers",'children':rumext.v2.jsx("rect",{'x':(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox) + rule_area_size),'y':(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox) + rule_area_size),'width':(function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vbox) - rule_area_size);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})(),'height':(function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vbox) - rule_area_size);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()})})}),rumext.v2.jsxs("g",{'style':{'pointerEvents':((disable_events_QMARK_)?"none":"auto")},'children':[(cljs.core.truth_((function (){var and__5023__auto__ = show_text_editor_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"text-editor-wasm/v1"));
} else {
return and__5023__auto__;
}
})())?(cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"text-editor/v2"))?rumext.v2.jsx(app.main.ui.workspace.shapes.text.v2_editor.text_editor,{'shape':editing_shape__$1,'canvas-ref':canvas_ref,'ref':text_editor_ref}):rumext.v2.jsx(app.main.ui.workspace.shapes.text.editor.text_editor_svg,{'shape':editing_shape__$1,'ref':text_editor_ref})):null),((show_frame_outline_QMARK_)?(function (){var outlined_frame_id = cljs.core.last(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(selected,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__57285_SHARP_){
return app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(base_objects,p1__57285_SHARP_));
}),cljs.core.deref(hover_ids))));
var outlined_frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,outlined_frame_id);
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.viewport.outline.shape_outlines,{'objects':base_objects,'hover':cljs.core.PersistentHashSet.createAsIfByAssoc([outlined_frame_id]),'zoom':zoom__$1}),((app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(outlined_frame))?rumext.v2.jsx("g",{'className':"ghost-outline blurrable",'children':rumext.v2.jsx(app.main.ui.workspace.viewport.outline.shape_outlines,{'objects':base_objects,'selected':selected,'zoom':zoom__$1})}):null)]});
})():null),((show_outlines_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.viewport.outline.shape_outlines,{'objects':base_objects,'selected':selected,'hover':cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hover)),cljs.core.deref(frame_hover)]),'highlighted':highlighted,'edition':edition,'zoom':zoom__$1}):null),(cljs.core.truth_((function (){var and__5023__auto__ = show_selection_handlers_QMARK_;
if(and__5023__auto__){
return selected_shapes;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.workspace.viewport.selection.area_STAR_,{'shapes':selected_shapes,'zoom':zoom__$1,'edition':edition,'disabled':(function (){var or__5025__auto__ = drawing_tool;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = edition;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = cljs.core.deref(space_QMARK_);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return cljs.core.deref(mod_QMARK_);
}
}
}
})(),'onMoveSelected':on_move_selected,'onContextMenu':on_menu_selected}):null),(cljs.core.truth_(show_text_editor_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.shapes.text.text_edition_outline.text_edition_outline,{'shape':cljs.core.get.cljs$core$IFn$_invoke$arity$2(base_objects,edition),'zoom':zoom__$1}):null),(cljs.core.truth_(show_measures_QMARK_)?rumext.v2.jsx(app.main.ui.measurements.measurement,{'bounds':vbox,'selected-shapes':selected_shapes,'frame':selected_frame,'hover-shape':cljs.core.deref(measure_hover),'zoom':zoom__$1}):null),((show_padding_QMARK_)?rumext.v2.jsx(app.main.ui.flex_controls.padding_control,{'frame':first_shape,'hover':cljs.core.deref(frame_hover),'zoom':zoom__$1,'alt?':cljs.core.deref(alt_QMARK_),'shift?':cljs.core.deref(shift_QMARK_),'on-move-selected':on_move_selected,'on-context-menu':on_menu_selected}):null),((show_padding_QMARK_)?rumext.v2.jsx(app.main.ui.flex_controls.gap_control,{'frame':first_shape,'hover':cljs.core.deref(frame_hover),'zoom':zoom__$1,'alt?':cljs.core.deref(alt_QMARK_),'shift?':cljs.core.deref(shift_QMARK_),'on-move-selected':on_move_selected,'on-context-menu':on_menu_selected}):null),((show_margin_QMARK_)?rumext.v2.jsx(app.main.ui.flex_controls.margin_control,{'shape':first_shape,'parent':selected_frame,'hover':cljs.core.deref(frame_hover),'zoom':zoom__$1,'alt?':cljs.core.deref(alt_QMARK_),'shift?':cljs.core.deref(shift_QMARK_)}):null),rumext.v2.jsx(app.main.ui.workspace.viewport.widgets.frame_titles_STAR_,{'objects':cljs.core.with_meta(objects_modified,null),'selected':selected,'zoom':zoom__$1,'isShowArtboardNames':show_artboard_names_QMARK_,'onFrameEnter':on_frame_enter,'onFrameLeave':on_frame_leave,'onFrameSelect':on_frame_select,'focus':focus}),((show_prototypes_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.viewport.widgets.frame_flows_STAR_,{'flows':new cljs.core.Keyword(null,"flows","flows",-1369576628).cljs$core$IFn$_invoke$arity$1(page),'objects':objects_modified,'selected':selected,'zoom':zoom__$1,'onFrameEnter':on_frame_enter,'onFrameLeave':on_frame_leave,'onFrameSelect':on_frame_select}):null),((((show_draw_area_QMARK_) && (app.common.types.shape.shape_QMARK_(drawing_obj))))?rumext.v2.jsx(app.main.ui.workspace.viewport.drawarea.draw_area_STAR_,{'shape':drawing_obj,'zoom':zoom__$1,'tool':drawing_tool}):null),((show_grids_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.viewport.frame_grid.frame_grid,{'zoom':zoom__$1,'selected':selected,'transform':transform,'focus':focus}):null),((show_pixel_grid_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.viewport.widgets.pixel_grid_STAR_,{'vbox':vbox,'zoom':zoom__$1}):null),(cljs.core.truth_(show_snap_points_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.viewport.snap_points.snap_points,{'layout':layout,'transform':transform,'drawing':drawing_obj,'zoom':zoom__$1,'page-id':page_id,'selected':selected,'objects':objects_modified,'focus':focus}):null),((show_snap_distance_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.viewport.snap_distances.snap_distances,{'layout':layout,'zoom':zoom__$1,'transform':transform,'selected':selected,'selected-shapes':selected_shapes,'page-id':page_id}):null),(cljs.core.truth_(show_cursor_tooltip_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.viewport.widgets.cursor_tooltip_STAR_,{'zoom':zoom__$1,'tooltip':tooltip}):null),(cljs.core.truth_(show_selrect_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.viewport.widgets.selection_rect_STAR_,{'data':selrect,'zoom':zoom__$1}):null),(cljs.core.truth_(show_presence_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.viewport.presence.active_cursors,{'page-id':page_id}):null),((hide_ui_QMARK_)?null:rumext.v2.jsx(app.main.ui.workspace.viewport.rulers.rulers,{'zoom':zoom__$1,'zoom-inverse':zoom_inverse,'vbox':vbox,'selected-shapes':selected_shapes,'offset-x':offset_x,'offset-y':offset_y,'show-rulers?':show_rulers_QMARK_})),((((show_rulers_QMARK_) && (show_grids_QMARK_)))?rumext.v2.jsx(app.main.ui.workspace.viewport.guides.viewport_guides_STAR_,{'zoom':zoom__$1,'vbox':vbox,'guides':guides,'hoverFrame':guide_frame,'disabledGuides':disabled_guides_QMARK_,'modifiers':wasm_modifiers}):null),((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"layout-drop-zones","layout-drop-zones",-665395958)))?rumext.v2.jsx(app.main.ui.workspace.viewport.debug.debug_drop_zones,{'selected-shapes':selected_shapes,'objects':base_objects,'hover-top-frame-id':cljs.core.deref(hover_top_frame_id),'zoom':zoom__$1}):null),((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"layout-content-bounds","layout-content-bounds",-1216447768)))?rumext.v2.jsx(app.main.ui.workspace.viewport.debug.debug_content_bounds,{'selected-shapes':selected_shapes,'objects':base_objects,'hover-top-frame-id':cljs.core.deref(hover_top_frame_id),'zoom':zoom__$1}):null),((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"layout-lines","layout-lines",-1868555037)))?rumext.v2.jsx(app.main.ui.workspace.viewport.debug.debug_layout_lines,{'selected-shapes':selected_shapes,'objects':base_objects,'hover-top-frame-id':cljs.core.deref(hover_top_frame_id),'zoom':zoom__$1}):null),((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"parent-bounds","parent-bounds",-168980852)))?rumext.v2.jsx(app.main.ui.workspace.viewport.debug.debug_parent_bounds,{'selected-shapes':selected_shapes,'objects':base_objects,'hover-top-frame-id':cljs.core.deref(hover_top_frame_id),'zoom':zoom__$1}):null),((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"grid-layout","grid-layout",-227324382)))?rumext.v2.jsx(app.main.ui.workspace.viewport.debug.debug_grid_layout,{'selected-shapes':selected_shapes,'objects':base_objects,'hover-top-frame-id':cljs.core.deref(hover_top_frame_id),'zoom':zoom__$1}):null),((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"text-outline","text-outline",-2026960525)))?rumext.v2.jsx(app.main.ui.workspace.viewport.debug.debug_text_wasm_position_data,{'selected-shapes':selected_shapes,'objects':base_objects,'zoom':zoom__$1}):null),((show_selection_handlers_QMARK_)?rumext.v2.jsxs("g",{'className':"selection-handlers",'clipPath':"url(#clip-handlers)",'children':[((text_editing_QMARK_)?null:(cljs.core.truth_((function (){var and__5023__auto__ = editing_shape__$1;
if(cljs.core.truth_(and__5023__auto__)){
return path_editing_QMARK_;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.workspace.shapes.path.editor.path_editor_STAR_,{'shape':editing_shape__$1,'state':edit_path_state,'zoom':zoom__$1}):(cljs.core.truth_(selected_shapes)?rumext.v2.jsx(app.main.ui.workspace.viewport.selection.handlers_STAR_,{'selected':selected,'shapes':selected_shapes,'zoom':zoom__$1,'disabled':(function (){var or__5025__auto__ = drawing_tool;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(space_QMARK_);
}
})()}):null))),((show_prototypes_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.viewport.interactions.interactions,{'selected':selected,'page-id':page_id,'zoom':zoom__$1,'objects':objects_modified,'current-transform':transform,'hover-disabled?':hover_disabled_QMARK_}):null)]}):null),((show_gradient_handlers_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.viewport.gradients.gradient_handlers_STAR_,{'id':cljs.core.first(selected),'zoom':zoom__$1}):null),(cljs.core.truth_(show_add_variant_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.viewport.widgets.button_add_STAR_,{'shape':first_shape,'zoom':zoom__$1,'onClick':add_variant}):null),rumext.v2.jsx("g",{'className':"grid-layout-editor",'clipPath':"url(#clip-handlers)",'children':(cljs.core.truth_(show_grid_editor_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.viewport.grid_layout_editor.editor,{'zoom':zoom__$1,'objects':objects_modified,'shape':(function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects_modified,edition);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects_modified,cljs.core.deref(hover_top_frame_id));
}
})(),'view-only':cljs.core.not(show_grid_editor_QMARK_)}):null)}),rumext.v2.jsx("g",{'className':"scrollbar-wrapper",'clipPath':"url(#clip-handlers)",'children':rumext.v2.jsx(app.main.ui.workspace.viewport.scroll_bars.viewport_scrollbars,{'objects':base_objects,'zoom':zoom__$1,'vbox':vbox,'bottom-padding':(cljs.core.truth_(palete_size)?(palete_size + (8)):null)})})]})],'id':"viewport-controls",'viewBox':app.main.ui.workspace.viewport.utils.format_viewbox(vbox),'onPointerUp':on_pointer_up,'onContextMenu':on_context_menu,'onDrop':on_drop,'preserveAspectRatio':"xMidYMid meet",'style':{'touchAction':"none"},'xmlnsXlink':"http://www.w3.org/1999/xlink",'fill':"none",'onDragOver':on_drag_over,'onDragEnd':on_drag_end,'onClick':on_click,'onPointerMove':on_pointer_move,'ref':on_viewport_ref,'onPointerDown':on_pointer_down,'onPointerLeave':on_pointer_leave,'onPointerEnter':on_pointer_enter},["viewport",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_id)].join(''))]});
});

(app.main.ui.workspace.viewport_wasm.viewport_STAR_.displayName = "viewport*");


//# sourceMappingURL=app.main.ui.workspace.viewport_wasm.js.map
