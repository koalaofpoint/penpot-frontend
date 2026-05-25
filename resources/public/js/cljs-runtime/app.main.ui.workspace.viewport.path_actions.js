import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.types.path.segment.js";
import "./app.main.data.workspace.path.js";
import "./app.main.data.workspace.path.shortcuts.js";
import "./app.main.store.js";
import "./app.main.ui.icons.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.viewport.path_actions');
app.main.ui.workspace.viewport.path_actions.pentool_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_workspace_viewport_path_actions__pentool-icon main_ui_workspace_viewport_path_actions__pathbar-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-pentool"})});
app.main.ui.workspace.viewport.path_actions.move_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_workspace_viewport_path_actions__move-icon main_ui_workspace_viewport_path_actions__pathbar-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-move"})});
app.main.ui.workspace.viewport.path_actions.add_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_workspace_viewport_path_actions__add-icon main_ui_workspace_viewport_path_actions__pathbar-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-add"})});
app.main.ui.workspace.viewport.path_actions.remove_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_workspace_viewport_path_actions__remove main_ui_workspace_viewport_path_actions__pathbar-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-remove"})});
app.main.ui.workspace.viewport.path_actions.merge_nodes_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_workspace_viewport_path_actions__merge-nodes-icon main_ui_workspace_viewport_path_actions__pathbar-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-merge-nodes"})});
app.main.ui.workspace.viewport.path_actions.join_nodes_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_workspace_viewport_path_actions__join-nodes-icon main_ui_workspace_viewport_path_actions__pathbar-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-join-nodes"})});
app.main.ui.workspace.viewport.path_actions.separate_nodes_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_workspace_viewport_path_actions__separate-nodes-icon main_ui_workspace_viewport_path_actions__pathbar-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-separate-nodes"})});
app.main.ui.workspace.viewport.path_actions.to_corner_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_workspace_viewport_path_actions__to-corner-icon main_ui_workspace_viewport_path_actions__pathbar-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-to-corner"})});
app.main.ui.workspace.viewport.path_actions.to_curve_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_workspace_viewport_path_actions__to-curve-icon main_ui_workspace_viewport_path_actions__pathbar-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-to-curve"})});
app.main.ui.workspace.viewport.path_actions.snap_nodes_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_workspace_viewport_path_actions__snap-nodes-icon main_ui_workspace_viewport_path_actions__pathbar-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-snap-nodes"})});
app.main.ui.workspace.viewport.path_actions.check_enabled = (function app$main$ui$workspace$viewport$path_actions$check_enabled(content,selected_points){
if(cljs.core.truth_(content)){
var segments = app.common.types.path.segment.get_segments_with_points(content,selected_points);
var num_segments = cljs.core.count(segments);
var num_points = cljs.core.count(selected_points);
var points_selected_QMARK_ = cljs.core.seq(selected_points);
var segments_selected_QMARK_ = cljs.core.seq(segments);
var max_segments = ((num_points * (num_points - (1))) / (2));
var is_curve_QMARK_ = cljs.core.some((function (p1__57242_SHARP_){
return app.common.types.path.segment.is_curve_QMARK_(content,p1__57242_SHARP_);
}),selected_points);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"make-corner","make-corner",-1029141688),(function (){var and__5023__auto__ = points_selected_QMARK_;
if(and__5023__auto__){
return is_curve_QMARK_;
} else {
return and__5023__auto__;
}
})(),new cljs.core.Keyword(null,"make-curve","make-curve",-1823500424),((points_selected_QMARK_) && (cljs.core.not(is_curve_QMARK_))),new cljs.core.Keyword(null,"add-node","add-node",-2069253988),segments_selected_QMARK_,new cljs.core.Keyword(null,"remove-node","remove-node",-1450759511),points_selected_QMARK_,new cljs.core.Keyword(null,"merge-nodes","merge-nodes",714582572),segments_selected_QMARK_,new cljs.core.Keyword(null,"join-nodes","join-nodes",923290343),((points_selected_QMARK_) && ((((num_points >= (2))) && ((num_segments < max_segments))))),new cljs.core.Keyword(null,"separate-nodes","separate-nodes",-1215076842),segments_selected_QMARK_], null);
} else {
return null;
}
});
app.main.ui.workspace.viewport.path_actions.path_actions_STAR_ = (function app$main$ui$workspace$viewport$path_actions$path_actions_STAR_(props_57243){
var state = props_57243.state;
var shape = props_57243.shape;
var map__57244 = state;
var map__57244__$1 = cljs.core.__destructure_map(map__57244);
var edit_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57244__$1,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993));
var selected_points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57244__$1,new cljs.core.Keyword(null,"selected-points","selected-points",-1374936179));
var snap_toggled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57244__$1,new cljs.core.Keyword(null,"snap-toggled","snap-toggled",-1650735574));
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape);
var enabled_buttons = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(content),rumext.v2.adapt(selected_points)],(function (){
return app.main.ui.workspace.viewport.path_actions.check_enabled(content,selected_points);
}));
var on_select_draw_mode = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.change_edit_mode(new cljs.core.Keyword(null,"draw","draw",1358331674)));
}));
var on_select_edit_mode = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.change_edit_mode(new cljs.core.Keyword(null,"move","move",-2110884309)));
}));
var on_add_node = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"add-node","add-node",-2069253988).cljs$core$IFn$_invoke$arity$1(enabled_buttons))],(function (_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"add-node","add-node",-2069253988).cljs$core$IFn$_invoke$arity$1(enabled_buttons))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.add_node());
} else {
return null;
}
}));
var on_remove_node = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"remove-node","remove-node",-1450759511).cljs$core$IFn$_invoke$arity$1(enabled_buttons))],(function (_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"remove-node","remove-node",-1450759511).cljs$core$IFn$_invoke$arity$1(enabled_buttons))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.remove_node());
} else {
return null;
}
}));
var on_merge_nodes = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"merge-nodes","merge-nodes",714582572).cljs$core$IFn$_invoke$arity$1(enabled_buttons))],(function (_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"merge-nodes","merge-nodes",714582572).cljs$core$IFn$_invoke$arity$1(enabled_buttons))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.merge_nodes());
} else {
return null;
}
}));
var on_join_nodes = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"join-nodes","join-nodes",923290343).cljs$core$IFn$_invoke$arity$1(enabled_buttons))],(function (_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"join-nodes","join-nodes",923290343).cljs$core$IFn$_invoke$arity$1(enabled_buttons))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.join_nodes());
} else {
return null;
}
}));
var on_separate_nodes = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"separate-nodes","separate-nodes",-1215076842).cljs$core$IFn$_invoke$arity$1(enabled_buttons))],(function (_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"separate-nodes","separate-nodes",-1215076842).cljs$core$IFn$_invoke$arity$1(enabled_buttons))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.separate_nodes());
} else {
return null;
}
}));
var on_make_corner = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"make-corner","make-corner",-1029141688).cljs$core$IFn$_invoke$arity$1(enabled_buttons))],(function (_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"make-corner","make-corner",-1029141688).cljs$core$IFn$_invoke$arity$1(enabled_buttons))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.make_corner.cljs$core$IFn$_invoke$arity$0());
} else {
return null;
}
}));
var on_make_curve = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"make-curve","make-curve",-1823500424).cljs$core$IFn$_invoke$arity$1(enabled_buttons))],(function (_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"make-curve","make-curve",-1823500424).cljs$core$IFn$_invoke$arity$1(enabled_buttons))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.make_curve.cljs$core$IFn$_invoke$arity$0());
} else {
return null;
}
}));
var on_toggle_snap = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.toggle_snap());
}));
return rumext.v2.jsxs("div",{'data-dont-clear-path':true,'className':"main_ui_workspace_viewport_path_actions__sub-actions",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_viewport_path_actions__sub-actions-group",'children':[rumext.v2.jsx("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.path.actions.draw-nodes",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.path.shortcuts.get_tooltip(new cljs.core.Keyword(null,"draw-nodes","draw-nodes",1085190985))], 0)),'onClick':on_select_draw_mode,'className':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edit_mode,new cljs.core.Keyword(null,"draw","draw",1358331674)))?"main_ui_workspace_viewport_path_actions__is-toggled":"")+" "+"main_ui_workspace_viewport_path_actions__topbar-btn",'children':app.main.ui.workspace.viewport.path_actions.pentool_icon}),rumext.v2.jsx("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.path.actions.move-nodes",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.path.shortcuts.get_tooltip(new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850))], 0)),'onClick':on_select_edit_mode,'className':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edit_mode,new cljs.core.Keyword(null,"move","move",-2110884309)))?"main_ui_workspace_viewport_path_actions__is-toggled":"")+" "+"main_ui_workspace_viewport_path_actions__topbar-btn",'children':app.main.ui.workspace.viewport.path_actions.move_icon})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_viewport_path_actions__sub-actions-group",'children':[rumext.v2.jsx("button",{'disabled':cljs.core.not(new cljs.core.Keyword(null,"add-node","add-node",-2069253988).cljs$core$IFn$_invoke$arity$1(enabled_buttons)),'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.path.actions.add-node",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.path.shortcuts.get_tooltip(new cljs.core.Keyword(null,"add-node","add-node",-2069253988))], 0)),'onClick':on_add_node,'className':"main_ui_workspace_viewport_path_actions__topbar-btn",'children':app.main.ui.workspace.viewport.path_actions.add_icon}),rumext.v2.jsx("button",{'disabled':cljs.core.not(new cljs.core.Keyword(null,"remove-node","remove-node",-1450759511).cljs$core$IFn$_invoke$arity$1(enabled_buttons)),'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.path.actions.delete-node",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.path.shortcuts.get_tooltip(new cljs.core.Keyword(null,"delete-node","delete-node",-573394678))], 0)),'onClick':on_remove_node,'className':"main_ui_workspace_viewport_path_actions__topbar-btn",'children':app.main.ui.workspace.viewport.path_actions.remove_icon})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_viewport_path_actions__sub-actions-group",'children':[rumext.v2.jsx("button",{'disabled':cljs.core.not(new cljs.core.Keyword(null,"merge-nodes","merge-nodes",714582572).cljs$core$IFn$_invoke$arity$1(enabled_buttons)),'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.path.actions.merge-nodes",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.path.shortcuts.get_tooltip(new cljs.core.Keyword(null,"merge-nodes","merge-nodes",714582572))], 0)),'onClick':on_merge_nodes,'className':"main_ui_workspace_viewport_path_actions__topbar-btn",'children':app.main.ui.workspace.viewport.path_actions.merge_nodes_icon}),rumext.v2.jsx("button",{'disabled':cljs.core.not(new cljs.core.Keyword(null,"join-nodes","join-nodes",923290343).cljs$core$IFn$_invoke$arity$1(enabled_buttons)),'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.path.actions.join-nodes",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.path.shortcuts.get_tooltip(new cljs.core.Keyword(null,"join-nodes","join-nodes",923290343))], 0)),'onClick':on_join_nodes,'className':"main_ui_workspace_viewport_path_actions__topbar-btn",'children':app.main.ui.workspace.viewport.path_actions.join_nodes_icon}),rumext.v2.jsx("button",{'disabled':cljs.core.not(new cljs.core.Keyword(null,"separate-nodes","separate-nodes",-1215076842).cljs$core$IFn$_invoke$arity$1(enabled_buttons)),'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.path.actions.separate-nodes",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.path.shortcuts.get_tooltip(new cljs.core.Keyword(null,"separate-nodes","separate-nodes",-1215076842))], 0)),'onClick':on_separate_nodes,'className':"main_ui_workspace_viewport_path_actions__topbar-btn",'children':app.main.ui.workspace.viewport.path_actions.separate_nodes_icon})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_viewport_path_actions__sub-actions-group",'children':[rumext.v2.jsx("button",{'disabled':cljs.core.not(new cljs.core.Keyword(null,"make-corner","make-corner",-1029141688).cljs$core$IFn$_invoke$arity$1(enabled_buttons)),'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.path.actions.make-corner",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.path.shortcuts.get_tooltip(new cljs.core.Keyword(null,"make-corner","make-corner",-1029141688))], 0)),'onClick':on_make_corner,'className':"main_ui_workspace_viewport_path_actions__topbar-btn",'children':app.main.ui.workspace.viewport.path_actions.to_corner_icon}),rumext.v2.jsx("button",{'disabled':cljs.core.not(new cljs.core.Keyword(null,"make-curve","make-curve",-1823500424).cljs$core$IFn$_invoke$arity$1(enabled_buttons)),'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.path.actions.make-curve",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.path.shortcuts.get_tooltip(new cljs.core.Keyword(null,"make-curve","make-curve",-1823500424))], 0)),'onClick':on_make_curve,'className':"main_ui_workspace_viewport_path_actions__topbar-btn",'children':app.main.ui.workspace.viewport.path_actions.to_curve_icon})]}),rumext.v2.jsx("div",{'className':"main_ui_workspace_viewport_path_actions__sub-actions-group",'children':rumext.v2.jsx("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.path.actions.snap-nodes",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.path.shortcuts.get_tooltip(new cljs.core.Keyword(null,"snap-nodes","snap-nodes",42271851))], 0)),'onClick':on_toggle_snap,'className':(cljs.core.truth_(snap_toggled)?"main_ui_workspace_viewport_path_actions__is-toggled":"")+" "+"main_ui_workspace_viewport_path_actions__topbar-btn",'children':app.main.ui.workspace.viewport.path_actions.snap_nodes_icon})})]});
});

(app.main.ui.workspace.viewport.path_actions.path_actions_STAR_.displayName = "path-actions*");


//# sourceMappingURL=app.main.ui.workspace.viewport.path_actions.js.map
