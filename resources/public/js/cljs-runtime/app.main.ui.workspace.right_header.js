import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.common.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.data.shortcuts.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.drawing.common.js";
import "./app.main.data.workspace.history.js";
import "./app.main.data.workspace.shortcuts.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.context.js";
import "./app.main.ui.dashboard.team.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.exports.assets.js";
import "./app.main.ui.formats.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.workspace.presence.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.right_header');
app.main.ui.workspace.right_header.ref_COLON_persistence_status = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413),app.main.refs.persistence);
app.main.ui.workspace.right_header.zoom_widget_workspace = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$right_header$zoom_widget_workspace(props_55106){
var on_zoom_reset = (props_55106["on-zoom-reset"]);
var zoom = props_55106.zoom;
var on_zoom_fit = (props_55106["on-zoom-fit"]);
var on_zoom_selected = (props_55106["on-zoom-selected"]);
var on_decrease = (props_55106["on-decrease"]);
var on_increase = (props_55106["on-increase"]);
var open_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var open_QMARK_ = cljs.core.deref(open_STAR_);
var open_dropdown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return cljs.core.reset_BANG_(open_STAR_,true);
}));
var close_dropdown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return cljs.core.reset_BANG_(open_STAR_,false);
}));
var on_increase__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_increase)],(function (event){
app.util.dom.stop_propagation(event);

return (on_increase.cljs$core$IFn$_invoke$arity$0 ? on_increase.cljs$core$IFn$_invoke$arity$0() : on_increase.call(null));
}));
var on_decrease__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_decrease)],(function (event){
app.util.dom.stop_propagation(event);

return (on_decrease.cljs$core$IFn$_invoke$arity$0 ? on_decrease.cljs$core$IFn$_invoke$arity$0() : on_decrease.call(null));
}));
var zoom__$1 = app.main.ui.formats.format_percent.cljs$core$IFn$_invoke$arity$2(zoom,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"precision","precision",-1175707478),(0)], null));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'onClick':open_dropdown,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.zoom"),'className':"main_ui_workspace_right_header__zoom-widget"+" "+(cljs.core.truth_(open_QMARK_)?"main_ui_workspace_right_header__selected":""),'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_right_header__label",'children':zoom__$1})}),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':open_QMARK_,'on-close':close_dropdown,'children':rumext.v2.jsxs("ul",{'className':"main_ui_workspace_right_header__dropdown",'children':[rumext.v2.jsxs("li",{'className':"main_ui_workspace_right_header__basic-zoom-bar",'children':[rumext.v2.jsxs("span",{'className':"main_ui_workspace_right_header__zoom-btns",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("shortcuts.decrease-zoom"),'onClick':on_decrease__$1,'icon':app.main.ui.ds.foundations.assets.icon.remove}),rumext.v2.jsx("p",{'className':"main_ui_workspace_right_header__zoom-text",'children':zoom__$1}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("shortcuts.increase-zoom"),'onClick':on_increase__$1,'icon':app.main.ui.ds.foundations.assets.icon.add})]}),rumext.v2.jsx("button",{'onClick':on_zoom_reset,'className':"main_ui_workspace_right_header__reset-btn",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.reset-zoom")})]}),rumext.v2.jsxs("li",{'onClick':on_zoom_fit,'className':"main_ui_workspace_right_header__zoom-option",'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.zoom-fit-all"),rumext.v2.jsx("span",{'className':"main_ui_workspace_right_header__shortcuts",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_right_header__shortcut-key",'children':sc},["zoom-fit-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sc)].join('')));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"fit-all","fit-all",90208612))))})]}),rumext.v2.jsxs("li",{'onClick':on_zoom_selected,'className':"main_ui_workspace_right_header__zoom-option",'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.zoom-selected"),rumext.v2.jsx("span",{'className':"main_ui_workspace_right_header__shortcuts",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_right_header__shortcut-key",'children':sc},["zoom-selected-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sc)].join('')));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"zoom-selected","zoom-selected",-1583985803))))})]})]})})]});
}));

(app.main.ui.workspace.right_header.zoom_widget_workspace.displayName = "zoom-widget-workspace");

app.main.ui.workspace.right_header.right_header_STAR_ = (function app$main$ui$workspace$right_header$right_header_STAR_(props_55112){
var layout = props_55112.layout;
var file = props_55112.file;
var page_id = props_55112.pageId;
var file_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file);
var threads_map = rumext.v2.deref(app.main.refs.comment_threads);
var zoom = rumext.v2.deref(app.main.refs.selected_zoom);
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
var selected_drawtool = rumext.v2.deref(app.main.refs.selected_drawing_tool);
var on_increase = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.increase_zoom.cljs$core$IFn$_invoke$arity$1(null));
}));
var on_decrease = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.decrease_zoom.cljs$core$IFn$_invoke$arity$1(null));
}));
var on_zoom_reset = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.reset_zoom);
}));
var on_zoom_fit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.zoom_to_fit_all);
}));
var on_zoom_selected = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.zoom_to_selected_shape);
}));
var editing_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var editing_QMARK_ = cljs.core.deref(editing_STAR_);
var input_ref = rumext.v2.use_ref(null);
var team = rumext.v2.deref(app.main.refs.team);
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"permissions","permissions",67803075));
var has_unread_comments_QMARK_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(threads_map),rumext.v2.adapt(file_id)],(function (){
return cljs.core.boolean$(cljs.core.some((function (p1__55111_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(p1__55111_SHARP_),file_id)) && ((new cljs.core.Keyword(null,"count-unread-comments","count-unread-comments",1085002472).cljs$core$IFn$_invoke$arity$1(p1__55111_SHARP_) > (0))));
}),cljs.core.vals(threads_map)));
}));
var display_share_button_QMARK_ = (function (){var and__5023__auto__ = cljs.core.not(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(team));
if(and__5023__auto__){
var or__5025__auto__ = new cljs.core.Keyword(null,"is-admin","is-admin",-1352205216).cljs$core$IFn$_invoke$arity$1(permissions);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"is-owner","is-owner",-1163290132).cljs$core$IFn$_invoke$arity$1(permissions);
}
} else {
return and__5023__auto__;
}
})();
var nav_to_viewer = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(page_id)],(function (){
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"section","section",-300141526),"interactions"], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_viewer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0)));
}));
var active_comments = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(layout)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.clear_edition_mode(),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(app.main.data.workspace.remove_layout_flag(new cljs.core.Keyword(null,"document-history","document-history",1908608999)),cljs.core.assoc,new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace-header"),app.main.data.workspace.select_for_drawing(new cljs.core.Keyword(null,"comments","comments",-293346423))], 0));
}));
var toggle_comments = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_drawtool)],(function (_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_drawtool,new cljs.core.Keyword(null,"comments","comments",-293346423))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.drawing.common.clear_drawing());
} else {
return (active_comments.cljs$core$IFn$_invoke$arity$0 ? active_comments.cljs$core$IFn$_invoke$arity$0() : active_comments.call(null));
}
}));
var toggle_history = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_drawtool)],(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"comments","comments",-293346423),selected_drawtool)){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.clear_edition_mode()], 0));
} else {
}

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(app.main.data.workspace.history.initialize_history(),cljs.core.assoc,new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace-header"));
}));
var open_share_dialog = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invite-members","invite-members",683231892),new cljs.core.Keyword(null,"team","team",1355747699),team,new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"workspace","workspace",-1096735709)], null)));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(editing_QMARK_)],(function (){
if(editing_QMARK_){
return app.util.dom.select_text_BANG_(rumext.v2.ref_val(input_ref));
} else {
return null;
}
}));

return rumext.v2.jsxs("div",{'className':"main_ui_workspace_right_header__workspace-header-right",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_right_header__users-section",'children':rumext.v2.jsx(app.main.ui.workspace.presence.active_sessions,{})}),rumext.v2.jsx(app.main.ui.exports.assets.progress_widget,{}),rumext.v2.jsx("div",{'className':"main_ui_workspace_right_header__separator"}),rumext.v2.jsx("div",{'className':"main_ui_workspace_right_header__zoom-section",'children':rumext.v2.jsx(app.main.ui.workspace.right_header.zoom_widget_workspace,{'zoom':zoom,'on-increase':on_increase,'on-decrease':on_decrease,'on-zoom-reset':on_zoom_reset,'on-zoom-fit':on_zoom_fit,'on-zoom-selected':on_zoom_selected})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_right_header__comments-section",'children':rumext.v2.jsxs("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.comments",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"add-comment","add-comment",-1169367708))], 0)),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.toolbar.comments",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"add-comment","add-comment",-1169367708))], 0)),'onClick':toggle_comments,'data-tool':"comments",'style':{'position':"relative"},'className':"main_ui_workspace_right_header__comments-btn"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_drawtool,new cljs.core.Keyword(null,"comments","comments",-293346423)))?"main_ui_workspace_right_header__selected":""),'children':[app.main.ui.icons.comments,((has_unread_comments_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_workspace_right_header__unread"}):null)]})}),((read_only_QMARK_)?null:rumext.v2.jsx("div",{'className':"main_ui_workspace_right_header__history-section",'children':rumext.v2.jsx("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.history"),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.history"),'onClick':toggle_history,'className':((cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"document-history","document-history",1908608999)))?"main_ui_workspace_right_header__selected":"")+" "+"main_ui_workspace_right_header__history-button",'children':app.main.ui.icons.history})})),(cljs.core.truth_(display_share_button_QMARK_)?rumext.v2.jsx("a",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.share"),'onClick':open_share_dialog,'className':"main_ui_workspace_right_header__viewer-btn",'children':app.main.ui.icons.share}):null),rumext.v2.jsx("a",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.header.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"open-viewer","open-viewer",-29795505))], 0)),'onClick':nav_to_viewer,'className':"main_ui_workspace_right_header__viewer-btn",'children':app.main.ui.icons.play})]});
});

(app.main.ui.workspace.right_header.right_header_STAR_.displayName = "right-header*");


//# sourceMappingURL=app.main.ui.workspace.right_header.js.map
