import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.data.common.js";
import "./app.main.data.helpers.js";
import "./app.main.data.persistence.js";
import "./app.main.data.plugins.js";
import "./app.main.data.workspace.js";
import "./app.main.features.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.product.loader.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.hooks.resize.js";
import "./app.main.ui.modal.js";
import "./app.main.ui.workspace.colorpicker.js";
import "./app.main.ui.workspace.context_menu.js";
import "./app.main.ui.workspace.coordinates.js";
import "./app.main.ui.workspace.libraries.js";
import "./app.main.ui.workspace.nudge.js";
import "./app.main.ui.workspace.palette.js";
import "./app.main.ui.workspace.plugins.js";
import "./app.main.ui.workspace.sidebar.js";
import "./app.main.ui.workspace.sidebar.history.js";
import "./app.main.ui.workspace.tokens.export.js";
import "./app.main.ui.workspace.tokens.export.modal.js";
import "./app.main.ui.workspace.tokens.import.js";
import "./app.main.ui.workspace.tokens.import.modal.js";
import "./app.main.ui.workspace.tokens.management.forms.modals.js";
import "./app.main.ui.workspace.tokens.remapping_modal.js";
import "./app.main.ui.workspace.tokens.settings.js";
import "./app.main.ui.workspace.tokens.themes.create_modal.js";
import "./app.main.ui.workspace.viewport.js";
import "./app.util.debug.js";
import "./app.util.dom.js";
import "./app.util.globals.js";
import "./app.util.i18n.js";
import "./goog.events.events.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace');
app.main.ui.workspace.workspace_content_STAR_ = (function app$main$ui$workspace$workspace_content_STAR_(props_57988){
var layout = props_57988.layout;
var file = props_57988.file;
var page = props_57988.page;
var wglobal = props_57988.wglobal;
var palete_size = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var selected = rumext.v2.deref(app.main.refs.selected_shapes);
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"id","id",-1388402092));
var vport = rumext.v2.deref(app.main.refs.workspace_vport);
var map__57989 = wglobal;
var map__57989__$1 = cljs.core.__destructure_map(map__57989);
var options_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57989__$1,new cljs.core.Keyword(null,"options-mode","options-mode",-1788898697));
var drawing = rumext.v2.deref(app.main.refs.workspace_drawing);
var colorpalette_QMARK_ = new cljs.core.Keyword(null,"colorpalette","colorpalette",-2142723517).cljs$core$IFn$_invoke$arity$1(layout);
var textpalette_QMARK_ = new cljs.core.Keyword(null,"textpalette","textpalette",-1296342868).cljs$core$IFn$_invoke$arity$1(layout);
var hide_ui_QMARK_ = new cljs.core.Keyword(null,"hide-ui","hide-ui",834012905).cljs$core$IFn$_invoke$arity$1(layout);
var on_resize = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(vport)],(function (resize_type,size){
if(cljs.core.truth_((function (){var and__5023__auto__ = vport;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(size,vport);
} else {
return and__5023__auto__;
}
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_viewport_size(resize_type,size));
} else {
return null;
}
}));
var on_resize_palette = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (size){
return cljs.core.reset_BANG_(palete_size,size);
}));
var node_ref = app.main.ui.hooks.resize.use_resize_observer(on_resize);
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(((!(hide_ui_QMARK_)))?rumext.v2.jsx(app.main.ui.workspace.palette.palette_STAR_,{'layout':layout,'onChangeSize':on_resize_palette}):null),rumext.v2.jsx("section",{'ref':node_ref,'className':"main_ui_workspace__workspace-content",'children':rumext.v2.jsxs("section",{'className':"main_ui_workspace__workspace-viewport",'children':[((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668)))?rumext.v2.jsx(app.main.ui.workspace.coordinates.coordinates,{'colorpalette?':colorpalette_QMARK_}):null),((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"history-overlay","history-overlay",1725695055)))?rumext.v2.jsxs("div",{'className':"main_ui_workspace__history-debug-overlay",'children':[rumext.v2.jsx("button",{'onClick':(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.reinitialize_undo);
}),'children':"CLEAR"}),rumext.v2.jsx(app.main.ui.workspace.sidebar.history.history_toolbox_STAR_,{})]}):null),rumext.v2.jsx(app.main.ui.workspace.viewport.viewport_STAR_,{'file':file,'page':page,'wglobal':wglobal,'selected':selected,'layout':layout,'paleteSize':(cljs.core.truth_((function (){var and__5023__auto__ = (function (){var or__5025__auto__ = colorpalette_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return textpalette_QMARK_;
}
})();
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(hide_ui_QMARK_);
} else {
return and__5023__auto__;
}
})())?cljs.core.deref(palete_size):null)})]})},""+"workspace-"+(page_id ?? "")),(cljs.core.truth_(hide_ui_QMARK_)?null:rumext.v2.jsx(app.main.ui.workspace.sidebar.sidebar_STAR_,{'layout':layout,'fileId':cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"id","id",-1388402092)),'pageId':page_id,'file':file,'selected':selected,'section':options_mode,'drawingTool':cljs.core.get.cljs$core$IFn$_invoke$arity$2(drawing,new cljs.core.Keyword(null,"tool","tool",-1298696470))}))]});
});

(app.main.ui.workspace.workspace_content_STAR_.displayName = "workspace-content*");

app.main.ui.workspace.workspace_loader_STAR_ = (function app$main$ui$workspace$workspace_loader_STAR_(props_57997){
return rumext.v2.jsx(app.main.ui.ds.product.loader.loader_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.loading"),'className':"main_ui_workspace__workspace-loader",'overlay':true,'fileLoading':true});
});

(app.main.ui.workspace.workspace_loader_STAR_.displayName = "workspace-loader*");

app.main.ui.workspace.make_team_ref = (function app$main$ui$workspace$make_team_ref(team_id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (state){
var teams = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"teams","teams",1677714510));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(teams,team_id);
}),app.main.store.state);
});
app.main.ui.workspace.make_file_ref = (function app$main$ui$workspace$make_file_ref(file_id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404)),file_id)){
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"files","files",-472457450));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(files,file_id);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword("app.main.ui.workspace","has-data","app.main.ui.workspace/has-data",-1439290016),cljs.core.contains_QMARK_(file,new cljs.core.Keyword(null,"data","data",-232669377)));
} else {
return null;
}
}),app.main.store.state,cljs.core._EQ_);
});
app.main.ui.workspace.make_page_ref = (function app$main$ui$workspace$make_page_ref(file_id,page_id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (state){
var current_page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_page_id,page_id)){
return app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$3(state,file_id,page_id);
} else {
return null;
}
}),app.main.store.state);
});
app.main.ui.workspace.workspace_inner_STAR_ = (function app$main$ui$workspace$workspace_inner_STAR_(props_58000){
var file_id = props_58000.fileId;
var layout = props_58000.layout;
var file = props_58000.file;
var page_id = props_58000.pageId;
var wglobal = props_58000.wglobal;
var page_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(page_id)],(function (){
return app.main.ui.workspace.make_page_ref(file_id,page_id);
}));
var page = rumext.v2.deref(page_ref);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var focus_out = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.workspace_focus_lost());
});
var key = goog.events.listen(app.util.globals.window,"blur",focus_out);
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(goog.events.unlistenByKey,key);
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(page_id)],(function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.initialize_page(file_id,page_id));

return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.finalize_page(file_id,page_id));
});
}));

if((!((page == null)))){
return rumext.v2.jsx(app.main.ui.workspace.workspace_content_STAR_,{'file':file,'page':page,'wglobal':wglobal,'layout':layout});
} else {
return rumext.v2.jsx(app.main.ui.workspace.workspace_loader_STAR_,{});
}
});

(app.main.ui.workspace.workspace_inner_STAR_.displayName = "workspace-inner*");

app.main.ui.workspace.workspace_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$workspace_STAR_(props_58003){
var project_id = props_58003.projectId;
var team_id = props_58003.teamId;
var file_id = props_58003.fileId;
var layout_name = props_58003.layoutName;
var page_id = props_58003.pageId;
var file_id__$1 = app.main.ui.hooks.use_equal_memo(file_id);
var page_id__$1 = app.main.ui.hooks.use_equal_memo(page_id);
var layout = rumext.v2.deref(app.main.refs.workspace_layout);
var wglobal = rumext.v2.deref(app.main.refs.workspace_global);
var team_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id)],(function (){
return app.main.ui.workspace.make_team_ref(team_id);
}));
var file_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id__$1)],(function (){
return app.main.ui.workspace.make_file_ref(file_id__$1);
}));
var team = rumext.v2.deref(team_ref);
var file = rumext.v2.deref(file_ref);
var file_loaded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword("app.main.ui.workspace","has-data","app.main.ui.workspace/has-data",-1439290016));
var file_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file);
var permissions = new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(team);
var read_only_QMARK_ = rumext.v2.deref(app.main.refs.workspace_read_only_QMARK_);
var read_only_QMARK___$1 = (function (){var or__5025__auto__ = read_only_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.not(new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(permissions));
}
})();
var design_tokens_QMARK_ = app.main.features.use_feature("design-tokens/v1");
var wasm_renderer_enabled_QMARK_ = app.main.features.use_feature("render-wasm/v1");
var first_frame_rendered_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var background_color = new cljs.core.Keyword(null,"background-color","background-color",570434026).cljs$core$IFn$_invoke$arity$1(wglobal);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.persistence.initialize_persistence(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.plugins.update_plugins_permissions_peek()], 0));
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(layout_name)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.initialize_workspace_layout(layout_name));
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_name)],(function (){
if(cljs.core.truth_(file_name)){
return app.util.dom.set_html_title(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("title.workspace",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_name], 0)));
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id),rumext.v2.adapt(file_id__$1)],(function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.initialize_workspace(team_id,file_id__$1));

return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app.main.data.persistence","force-persist","app.main.data.persistence/force-persist",-1937686199),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.finalize_workspace(team_id,file_id__$1)], 0));
});
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id__$1),rumext.v2.adapt(page_id__$1),rumext.v2.adapt(file_loaded_QMARK_)],(function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = file_loaded_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(page_id__$1);
} else {
return and__5023__auto__;
}
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id__$1,new cljs.core.Keyword("app.main.router","replace","app.main.router/replace",466128885),true], 0)));
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id__$1),rumext.v2.adapt(page_id__$1)],(function (){
return cljs.core.reset_BANG_(first_frame_rendered_QMARK_,false);
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var handle_wasm_render = (function (_){
return cljs.core.reset_BANG_(first_frame_rendered_QMARK_,true);
});
var listener_key = goog.events.listen(app.util.globals.document,"penpot:wasm:render",handle_wasm_render);
return (function (){
return goog.events.unlistenByKey(listener_key);
});
}));

return rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.current_project_id),{'value':project_id,'children':rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.current_file_id),{'value':file_id__$1,'children':rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.current_page_id),{'value':page_id__$1,'children':rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.design_tokens),{'value':design_tokens_QMARK_,'children':rumext.v2.jsxs(rumext.v2.provider(app.main.ui.context.workspace_read_only_QMARK_),{'value':read_only_QMARK___$1,'children':[rumext.v2.jsx(app.main.ui.modal.modal_container_STAR_,{}),rumext.v2.jsxs("section",{'style':{'backgroundColor':background_color,'touchAction':"none",'position':"relative"},'className':"main_ui_workspace__workspace",'children':[rumext.v2.jsx(app.main.ui.workspace.context_menu.context_menu_STAR_,{}),(cljs.core.truth_((function (){var and__5023__auto__ = file_loaded_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return page_id__$1;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.workspace.workspace_inner_STAR_,{'pageId':page_id__$1,'fileId':file_id__$1,'file':file,'wglobal':wglobal,'layout':layout}):null),((((cljs.core.not((function (){var and__5023__auto__ = file_loaded_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return page_id__$1;
} else {
return and__5023__auto__;
}
})())) || (((wasm_renderer_enabled_QMARK_) && (((cljs.core.not(file_loaded_QMARK_)) && (cljs.core.not(cljs.core.deref(first_frame_rendered_QMARK_)))))))))?rumext.v2.jsx(app.main.ui.workspace.workspace_loader_STAR_,{}):null)]})]})})})})});
}));

(app.main.ui.workspace.workspace_STAR_.displayName = "workspace*");

app.main.ui.workspace.workspace_page_STAR_ = (function app$main$ui$workspace$workspace_page_STAR_(props_58033){
var props = props_58033;
return rumext.v2.create_element(app.main.ui.workspace.workspace_STAR_,props);
});

(app.main.ui.workspace.workspace_page_STAR_.displayName = "workspace-page*");


//# sourceMappingURL=app.main.ui.workspace.js.map
