import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.data.workspace.path.drawing.js";
import "./app.main.data.workspace.path.edition.js";
import "./app.main.data.workspace.path.selection.js";
import "./app.main.data.workspace.path.tools.js";
import "./app.main.data.workspace.path.undo.js";
goog.provide('app.main.data.workspace.path');
/**
 * Hanndle the start of drawing new path shape
 */
app.main.data.workspace.path.handle_drawing = (function app$main$data$workspace$path$handle_drawing(){
return app.main.data.workspace.path.drawing.handle_drawing();
});
app.main.data.workspace.path.start_path_from_point = (function app$main$data$workspace$path$start_path_from_point(param50027){
return app.main.data.workspace.path.drawing.start_path_from_point(param50027);
});
app.main.data.workspace.path.close_path_drag_start = (function app$main$data$workspace$path$close_path_drag_start(param50029){
return app.main.data.workspace.path.drawing.close_path_drag_start(param50029);
});
app.main.data.workspace.path.change_edit_mode = (function app$main$data$workspace$path$change_edit_mode(param50030){
return app.main.data.workspace.path.drawing.change_edit_mode(param50030);
});
app.main.data.workspace.path.reset_last_handler = (function app$main$data$workspace$path$reset_last_handler(){
return app.main.data.workspace.path.drawing.reset_last_handler();
});
app.main.data.workspace.path.start_move_handler = (function app$main$data$workspace$path$start_move_handler(param50031,param50032){
return app.main.data.workspace.path.edition.start_move_handler(param50031,param50032);
});
app.main.data.workspace.path.start_move_path_point = (function app$main$data$workspace$path$start_move_path_point(param50033,param50034){
return app.main.data.workspace.path.edition.start_move_path_point(param50033,param50034);
});
app.main.data.workspace.path.start_path_edit = (function app$main$data$workspace$path$start_path_edit(param50035){
return app.main.data.workspace.path.edition.start_path_edit(param50035);
});
app.main.data.workspace.path.create_node_at_position = (function app$main$data$workspace$path$create_node_at_position(param50036){
return app.main.data.workspace.path.edition.create_node_at_position(param50036);
});
app.main.data.workspace.path.move_selected = (function app$main$data$workspace$path$move_selected(param50038,param50039){
return app.main.data.workspace.path.edition.move_selected(param50038,param50039);
});
app.main.data.workspace.path.handle_area_selection = (function app$main$data$workspace$path$handle_area_selection(param50040,param50041){
return app.main.data.workspace.path.selection.handle_area_selection(param50040,param50041);
});
app.main.data.workspace.path.select_node = (function app$main$data$workspace$path$select_node(param50045,param50046){
return app.main.data.workspace.path.selection.select_node(param50045,param50046);
});
app.main.data.workspace.path.path_handler_enter = (function app$main$data$workspace$path$path_handler_enter(param50047,param50048){
return app.main.data.workspace.path.selection.path_handler_enter(param50047,param50048);
});
app.main.data.workspace.path.path_handler_leave = (function app$main$data$workspace$path$path_handler_leave(param50049,param50050){
return app.main.data.workspace.path.selection.path_handler_leave(param50049,param50050);
});
app.main.data.workspace.path.path_pointer_enter = (function app$main$data$workspace$path$path_pointer_enter(param50051){
return app.main.data.workspace.path.selection.path_pointer_enter(param50051);
});
app.main.data.workspace.path.path_pointer_leave = (function app$main$data$workspace$path$path_pointer_leave(param50052){
return app.main.data.workspace.path.selection.path_pointer_leave(param50052);
});
app.main.data.workspace.path.make_curve = (function() {
var app$main$data$workspace$path$make_curve = null;
var app$main$data$workspace$path$make_curve__0 = (function (){
return app.main.data.workspace.path.tools.make_curve.cljs$core$IFn$_invoke$arity$0();
});
var app$main$data$workspace$path$make_curve__1 = (function (param50053){
return app.main.data.workspace.path.tools.make_curve.cljs$core$IFn$_invoke$arity$1(param50053);
});
app$main$data$workspace$path$make_curve = function(param50053){
switch(arguments.length){
case 0:
return app$main$data$workspace$path$make_curve__0.call(this);
case 1:
return app$main$data$workspace$path$make_curve__1.call(this,param50053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$path$make_curve.cljs$core$IFn$_invoke$arity$0 = app$main$data$workspace$path$make_curve__0;
app$main$data$workspace$path$make_curve.cljs$core$IFn$_invoke$arity$1 = app$main$data$workspace$path$make_curve__1;
return app$main$data$workspace$path$make_curve;
})()
;
app.main.data.workspace.path.make_corner = (function() {
var app$main$data$workspace$path$make_corner = null;
var app$main$data$workspace$path$make_corner__0 = (function (){
return app.main.data.workspace.path.tools.make_corner.cljs$core$IFn$_invoke$arity$0();
});
var app$main$data$workspace$path$make_corner__1 = (function (param50055){
return app.main.data.workspace.path.tools.make_corner.cljs$core$IFn$_invoke$arity$1(param50055);
});
app$main$data$workspace$path$make_corner = function(param50055){
switch(arguments.length){
case 0:
return app$main$data$workspace$path$make_corner__0.call(this);
case 1:
return app$main$data$workspace$path$make_corner__1.call(this,param50055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$path$make_corner.cljs$core$IFn$_invoke$arity$0 = app$main$data$workspace$path$make_corner__0;
app$main$data$workspace$path$make_corner.cljs$core$IFn$_invoke$arity$1 = app$main$data$workspace$path$make_corner__1;
return app$main$data$workspace$path$make_corner;
})()
;
app.main.data.workspace.path.add_node = (function app$main$data$workspace$path$add_node(){
return app.main.data.workspace.path.tools.add_node();
});
app.main.data.workspace.path.remove_node = (function app$main$data$workspace$path$remove_node(){
return app.main.data.workspace.path.tools.remove_node();
});
app.main.data.workspace.path.merge_nodes = (function app$main$data$workspace$path$merge_nodes(){
return app.main.data.workspace.path.tools.merge_nodes();
});
app.main.data.workspace.path.join_nodes = (function app$main$data$workspace$path$join_nodes(){
return app.main.data.workspace.path.tools.join_nodes();
});
app.main.data.workspace.path.separate_nodes = (function app$main$data$workspace$path$separate_nodes(){
return app.main.data.workspace.path.tools.separate_nodes();
});
app.main.data.workspace.path.toggle_snap = (function app$main$data$workspace$path$toggle_snap(){
return app.main.data.workspace.path.tools.toggle_snap();
});
app.main.data.workspace.path.undo_path = (function app$main$data$workspace$path$undo_path(){
return app.main.data.workspace.path.undo.undo_path();
});
app.main.data.workspace.path.redo_path = (function app$main$data$workspace$path$redo_path(){
return app.main.data.workspace.path.undo.redo_path();
});
/**
 * Joins the head with the previous undo in one. This is done so when the user changes a
 *   node handlers after adding it the undo merges both in one operation only
 */
app.main.data.workspace.path.merge_head = (function app$main$data$workspace$path$merge_head(){
return app.main.data.workspace.path.undo.merge_head();
});

//# sourceMappingURL=app.main.data.workspace.path.js.map
