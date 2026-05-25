import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.common.js";
import "./app.main.store.js";
import "./app.main.ui.workspace.viewport.grid_layout_editor.js";
import "./app.main.ui.workspace.viewport.path_actions.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.viewport.top_bar');
app.main.ui.workspace.viewport.top_bar.view_only_bar_STAR_ = (function app$main$ui$workspace$viewport$top_bar$view_only_bar_STAR_(props_57245){
var handle_close_view_mode = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.set_options_mode(new cljs.core.Keyword(null,"design","design",1241338903)),app.main.data.workspace.common.set_workspace_read_only(false)], 0));
}));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_viewport_top_bar__viewport-actions",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_viewport_top_bar__viewport-actions-container",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_viewport_top_bar__viewport-actions-title",'children':rumext.v2.jsx(app.util.i18n.tr_html_STAR_,{'tagName':"span",'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.top-bar.view-only")})}),rumext.v2.jsx("button",{'onClick':handle_close_view_mode,'className':"main_ui_workspace_viewport_top_bar__done-btn",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.top-bar.read-only.done")})]})});
});

(app.main.ui.workspace.viewport.top_bar.view_only_bar_STAR_.displayName = "view-only-bar*");

app.main.ui.workspace.viewport.top_bar.path_edition_bar_STAR_ = (function app$main$ui$workspace$viewport$top_bar$path_edition_bar_STAR_(props_57246){
var edit_path_state = props_57246.editPathState;
var layout = props_57246.layout;
var shape = props_57246.shape;
var rulers_QMARK_ = cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"rulers","rulers",756731282));
var class$ = "main_ui_workspace_viewport_top_bar__viewport-actions-path"+" "+(((!(rulers_QMARK_)))?"main_ui_workspace_viewport_top_bar__viewport-actions-no-rulers":"");
return rumext.v2.jsx("div",{'className':class$,'children':rumext.v2.jsx(app.main.ui.workspace.viewport.path_actions.path_actions_STAR_,{'shape':shape,'state':edit_path_state})});
});

(app.main.ui.workspace.viewport.top_bar.path_edition_bar_STAR_.displayName = "path-edition-bar*");

app.main.ui.workspace.viewport.top_bar.grid_edition_bar_STAR_ = (function app$main$ui$workspace$viewport$top_bar$grid_edition_bar_STAR_(props_57247){
var shape = props_57247.shape;
return rumext.v2.jsx(app.main.ui.workspace.viewport.grid_layout_editor.grid_edition_actions,{'shape':shape});
});

(app.main.ui.workspace.viewport.top_bar.grid_edition_bar_STAR_.displayName = "grid-edition-bar*");


//# sourceMappingURL=app.main.ui.workspace.viewport.top_bar.js.map
