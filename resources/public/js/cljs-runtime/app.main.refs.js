import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.types.shape_tree.js";
import "./app.common.types.shape.layout.js";
import "./app.common.types.tokens_lib.js";
import "./app.config.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.tokens.selected_set.js";
import "./app.main.store.js";
import "./okulary.core.js";
goog.provide('app.main.refs');
app.main.refs.route = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.key(new cljs.core.Keyword(null,"route","route",329891309)),app.main.store.state);
app.main.refs.router = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.key(new cljs.core.Keyword(null,"router","router",1091916230)),app.main.store.state);
app.main.refs.profile = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.key(new cljs.core.Keyword(null,"profile","profile",-545963874)),app.main.store.state);
app.main.refs.current_page_id = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.key(new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425)),app.main.store.state);
app.main.refs.team = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (state){
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
var teams = new cljs.core.Keyword(null,"teams","teams",1677714510).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(teams,team_id);
}),app.main.store.state);
app.main.refs.project = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (state){
var project_id = new cljs.core.Keyword(null,"current-project-id","current-project-id",1950829814).cljs$core$IFn$_invoke$arity$1(state);
var projects = new cljs.core.Keyword(null,"projects","projects",-364845983).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(projects,project_id);
}),app.main.store.state);
app.main.refs.permissions = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.key(new cljs.core.Keyword(null,"permissions","permissions",67803075)),app.main.refs.team);
app.main.refs.teams = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.key(new cljs.core.Keyword(null,"teams","teams",1677714510)),app.main.store.state);
app.main.refs.exception = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"exception","exception",-335277064),app.main.store.state);
app.main.refs.threads = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"comment-threads","comment-threads",1951187179),app.main.store.state);
app.main.refs.share_links = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"share-links","share-links",-307384490),app.main.store.state);
app.main.refs.export$ = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"export","export",214356590),app.main.store.state);
app.main.refs.persistence = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"persistence","persistence",-203044807),app.main.store.state);
app.main.refs.projects = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"projects","projects",-364845983),app.main.store.state);
app.main.refs.files = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"files","files",-472457450),app.main.store.state);
app.main.refs.file = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (state){
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var files = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(files,file_id);
}),app.main.store.state);
/**
 * A derived state that points to the current list of shared
 *   files (without the content, only summary)
 */
app.main.refs.shared_files = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shared-files","shared-files",-929120284),app.main.store.state);
/**
 * Find between all the given files, those who are libraries of the file-id.
 * Also include the file-id file itself.
 * Return a map of id -> library.
 */
app.main.refs.select_libraries = (function app$main$refs$select_libraries(files,file_id){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (result,id,file){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,file_id)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"library-of","library-of",-2050526569).cljs$core$IFn$_invoke$arity$1(file),file_id)))){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(result,id,file);
} else {
return result;
}
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),files));
});
/**
 * A derived state that contanins the currently loaded shared
 *   libraries with all its content; including the current file
 */
app.main.refs.libraries = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (state){
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"files","files",-472457450));
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404));
return app.main.refs.select_libraries(files,file_id);
}),app.main.store.state);
app.main.refs.extract_selected_files = (function app$main$refs$extract_selected_files(files,selected){
var get_file = (function (p1__51516_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(files,p1__51516_SHARP_);
});
var sim_file = (function (p1__51517_SHARP_){
return cljs.core.select_keys(p1__51517_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.Keyword(null,"is-shared","is-shared",2126511925)], null));
});
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$1(get_file),cljs.core.map.cljs$core$IFn$_invoke$arity$1(sim_file));
return app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(xform,selected));
});
app.main.refs.selected_files = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (state){
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"selected-files","selected-files",1045525459));
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"files","files",-472457450));
return app.main.refs.extract_selected_files(files,selected);
}),app.main.store.state);
app.main.refs.selected_project = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selected-project","selected-project",993223033),app.main.store.state);
app.main.refs.dashboard_local = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dashboard-local","dashboard-local",-334594003),app.main.store.state);
app.main.refs.render_state = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"render-state","render-state",2053902270),app.main.store.state);
app.main.refs.render_context_lost_QMARK_ = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lost","lost",-744692984),app.main.refs.render_state);
app.main.refs.workspace_local = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),app.main.store.state);
app.main.refs.workspace_global = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),app.main.store.state);
app.main.refs.workspace_drawing = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973),app.main.store.state);
/**
 * All tokens related ephimeral state
 */
app.main.refs.workspace_tokens = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace-tokens","workspace-tokens",-15136920),app.main.store.state);
app.main.refs.workspace_selrect = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace-selrect","workspace-selrect",683668588),app.main.store.state);
app.main.refs.selected_shapes_data = okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (state){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"selected","selected",574897764));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"objects","objects",2099713734),objects,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null);
}),app.main.store.state,(function (v1,v2){
return (((new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(v1) === new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(v2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(v1),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(v2))));
}));
app.main.refs.selected_shapes = okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (p__51524){
var map__51525 = p__51524;
var map__51525__$1 = cljs.core.__destructure_map(map__51525);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51525__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51525__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
return app.main.data.helpers.process_selected.cljs$core$IFn$_invoke$arity$2(objects,selected);
}),app.main.refs.selected_shapes_data,cljs.core._EQ_);
app.main.refs.make_selected_ref = (function app$main$refs$make_selected_ref(id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (p1__51527_SHARP_){
return cljs.core.contains_QMARK_(p1__51527_SHARP_,id);
}),app.main.refs.selected_shapes);
});
app.main.refs.highlighted_shapes = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),app.main.refs.workspace_local);
app.main.refs.export_in_progress_QMARK_ = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"export-in-progress?","export-in-progress?",59631588),app.main.refs.export$);
app.main.refs.export_error_QMARK_ = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"export-error?","export-error?",-1564759176),app.main.refs.export$);
app.main.refs.export_progress = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"export-progress","export-progress",-2109079533),app.main.refs.export$);
app.main.refs.exports = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"exports","exports",-745008272),app.main.refs.export$);
app.main.refs.export_detail_visibililty = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"export-detail-visibililty","export-detail-visibililty",-1984070648),app.main.refs.export$);
app.main.refs.export_widget_visibililty = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"export-widget-visibililty","export-widget-visibililty",-1810562675),app.main.refs.export$);
app.main.refs.export_health = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"export-health","export-health",677260718),app.main.refs.export$);
app.main.refs.selected_zoom = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"zoom","zoom",-1827487038),app.main.refs.workspace_local);
app.main.refs.selected_drawing_tool = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tool","tool",-1298696470),app.main.refs.workspace_drawing);
app.main.refs.current_drawing_shape = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"object","object",1474613949),app.main.refs.workspace_drawing);
app.main.refs.selected_edition = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"edition","edition",1337508089),app.main.refs.workspace_local);
app.main.refs.current_transform = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transform","transform",1381301764),app.main.refs.workspace_local);
app.main.refs.options_mode = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options-mode","options-mode",-1788898697),app.main.refs.workspace_local);
app.main.refs.options_mode_global = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options-mode","options-mode",-1788898697),app.main.refs.workspace_global);
app.main.refs.default_font = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default-font","default-font",-1606411738),app.main.refs.workspace_global);
app.main.refs.inspect_expanded = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inspect-expanded","inspect-expanded",-1784925651),app.main.refs.workspace_local);
app.main.refs.workspace_vport = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vport","vport",-1317419022),app.main.refs.workspace_local);
app.main.refs.vbox = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vbox","vbox",-492787765),app.main.refs.workspace_local);
app.main.refs.current_hover = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hover","hover",-341141711),app.main.refs.workspace_local);
app.main.refs.context_menu = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),app.main.refs.workspace_local);
app.main.refs.token_context_menu = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token-context-menu","token-context-menu",1588110807),app.main.refs.workspace_local);
app.main.refs.editing_page_item = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page-item","page-item",-547415760),app.main.refs.workspace_local);
app.main.refs.current_hover_ids = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hover-ids","hover-ids",-792079290),app.main.refs.context_menu);
app.main.refs.workspace_layout = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace-layout","workspace-layout",420938173),app.main.store.state);
app.main.refs.snap_pixel_QMARK_ = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (p1__51534_SHARP_){
return cljs.core.contains_QMARK_(p1__51534_SHARP_,new cljs.core.Keyword(null,"snap-pixel-grid","snap-pixel-grid",-1263132602));
}),app.main.refs.workspace_layout);
app.main.refs.rulers_QMARK_ = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (p1__51535_SHARP_){
return cljs.core.contains_QMARK_(p1__51535_SHARP_,new cljs.core.Keyword(null,"rulers","rulers",756731282));
}),app.main.refs.workspace_layout);
/**
 * Currently working file data on workspace
 */
app.main.refs.workspace_data = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.lookup_file_data,app.main.store.state);
app.main.refs.workspace_file_colors = okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (p__51538){
var map__51539 = p__51538;
var map__51539__$1 = cljs.core.__destructure_map(map__51539);
var data = map__51539__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51539__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var G__51541 = new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(data);
if((G__51541 == null)){
return null;
} else {
return cljs.core.update_vals(G__51541,(function (p1__51537_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51537_SHARP_,new cljs.core.Keyword(null,"file-id","file-id",-811871323),id);
}));
}
}),app.main.refs.workspace_data,cljs.core._EQ_);
/**
 * Recent colors for the currently selected file
 */
app.main.refs.recent_colors = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (state){
var temp__5825__auto__ = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5825__auto__)){
var file_id = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"recent-colors","recent-colors",237681180)),file_id);
} else {
return null;
}
}),app.main.store.state);
/**
 * Recent fonts for the currently selected file
 */
app.main.refs.recent_fonts = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (state){
var temp__5825__auto__ = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5825__auto__)){
var file_id = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"recent-fonts","recent-fonts",1734170898)),file_id);
} else {
return null;
}
}),app.main.store.state);
app.main.refs.workspace_file_typography = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"typographies","typographies",-482095730),app.main.refs.workspace_data);
app.main.refs.workspace_presence = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace-presence","workspace-presence",-919312096),app.main.store.state);
/**
 * Ref to currently active page on workspace
 */
app.main.refs.workspace_page = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.lookup_page,app.main.store.state);
app.main.refs.workspace_page_flows = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (p1__51543_SHARP_){
return cljs.core.not_empty(new cljs.core.Keyword(null,"flows","flows",-1369576628).cljs$core$IFn$_invoke$arity$1(p1__51543_SHARP_));
}),app.main.refs.workspace_page);
app.main.refs.workspace_page_object_by_id = (function app$main$refs$workspace_page_object_by_id(page_id,shape_id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (p1__51545_SHARP_){
return app.main.data.helpers.lookup_shape.cljs$core$IFn$_invoke$arity$3(p1__51545_SHARP_,page_id,shape_id);
}),app.main.store.state,cljs.core._EQ_);
});
app.main.refs.workspace_page_objects = okulary.core.derived.cljs$core$IFn$_invoke$arity$3(app.main.data.helpers.lookup_page_objects,app.main.store.state,cljs.core.identical_QMARK_);
app.main.refs.workspace_read_only_QMARK_ = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"read-only?","read-only?",-770285386),app.main.refs.workspace_global);
app.main.refs.workspace_paddings_selected = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"paddings-selected","paddings-selected",1140014065),app.main.refs.workspace_global);
app.main.refs.workspace_gap_selected = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gap-selected","gap-selected",-1435692040),app.main.refs.workspace_global);
app.main.refs.workspace_margins_selected = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"margins-selected","margins-selected",890458559),app.main.refs.workspace_global);
app.main.refs.object_by_id = (function app$main$refs$object_by_id(id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (p1__51548_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__51548_SHARP_,id);
}),app.main.refs.workspace_page_objects);
});
app.main.refs.objects_by_id = (function app$main$refs$objects_by_id(ids){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (p1__51549_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(p1__51549_SHARP_)),ids);
}),app.main.refs.workspace_page_objects,cljs.core._EQ_);
});
app.main.refs.parents_by_ids = (function app$main$refs$parents_by_ids(ids){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (objects){
var parent_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__51551_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51551_SHARP_,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131)], null));
})),ids);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__51552_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__51552_SHARP_);
})),parent_ids);
}),app.main.refs.workspace_page_objects,cljs.core._EQ_);
});
app.main.refs.shape_parents = (function app$main$refs$shape_parents(id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (objects){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),app.common.files.helpers.get_parent_ids(objects,id));
}),app.main.refs.workspace_page_objects,cljs.core._EQ_);
});
app.main.refs.children_objects = (function app$main$refs$children_objects(id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (objects){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id),new cljs.core.Keyword(null,"shapes","shapes",1897594879)));
}),app.main.refs.workspace_page_objects,cljs.core._EQ_);
});
app.main.refs.all_children_objects = (function app$main$refs$all_children_objects(id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (objects){
var children_ids = app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,id);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),children_ids);
}),app.main.refs.workspace_page_objects,cljs.core._EQ_);
});
app.main.refs.workspace_frames = okulary.core.derived.cljs$core$IFn$_invoke$arity$3(app.common.types.shape_tree.get_frames,app.main.refs.workspace_page_objects,cljs.core._EQ_);
app.main.refs.workspace_editor = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace-editor","workspace-editor",1700926848),app.main.store.state);
app.main.refs.workspace_editor_state = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace-editor-state","workspace-editor-state",-794384251),app.main.store.state);
app.main.refs.workspace_v2_editor_state = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace-v2-editor-state","workspace-v2-editor-state",-2092501766),app.main.store.state);
app.main.refs.workspace_modifiers = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace-modifiers","workspace-modifiers",1432219828),app.main.store.state);
app.main.refs.workspace_wasm_modifiers = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace-wasm-modifiers","workspace-wasm-modifiers",-1284490597),app.main.store.state);
app.main.refs.workspace_modifiers_with_objects = okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-modifiers","workspace-modifiers",1432219828)),new cljs.core.Keyword(null,"objects","objects",2099713734),app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state)], null);
}),app.main.store.state,(function (a,b){
return (((new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(a) === new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(b))) && ((new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(a) === new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(b))));
}));
app.main.refs.workspace_frame_modifiers = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (p__51562){
var map__51563 = p__51562;
var map__51563__$1 = cljs.core.__destructure_map(map__51563);
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51563__$1,new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51563__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__51564){
var vec__51565 = p__51564;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51565,(0),null);
var modifiers__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51565,(1),null);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
var frame_id = new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape);
if(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return cljs.core.assoc_in(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,id], null),modifiers__$1);
} else {
if((!((frame_id == null)))){
return cljs.core.assoc_in(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_id,id], null),modifiers__$1);
} else {
return result;

}
}
}),cljs.core.PersistentArrayMap.EMPTY,modifiers);
}),app.main.refs.workspace_modifiers_with_objects);
app.main.refs.workspace_modifiers_by_frame_id = (function app$main$refs$workspace_modifiers_by_frame_id(frame_id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (p1__51573_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__51573_SHARP_,frame_id);
}),app.main.refs.workspace_frame_modifiers,cljs.core._EQ_);
});
app.main.refs.workspace_clipboard_style = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clipboard-style","clipboard-style",987303829),app.main.refs.workspace_global);
app.main.refs.select_bool_children = (function app$main$refs$select_bool_children(id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (p1__51588_SHARP_){
return app.main.data.helpers.select_bool_children(p1__51588_SHARP_,id);
}),app.main.store.state,cljs.core._EQ_);
});
app.main.refs.is_child_selected_QMARK_ = (function app$main$refs$is_child_selected_QMARK_(id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (p__51605){
var map__51610 = p__51605;
var map__51610__$1 = cljs.core.__destructure_map(map__51610);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51610__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51610__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var children = app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,id);
return cljs.core.some((function (p1__51596_SHARP_){
return cljs.core.contains_QMARK_(selected,p1__51596_SHARP_);
}),children);
}),app.main.refs.selected_shapes_data,cljs.core._EQ_);
});
app.main.refs.workspace_focus_selected = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace-focus-selected","workspace-focus-selected",978051257),app.main.store.state);
app.main.refs.workspace_get_flex_child = (function app$main$refs$workspace_get_flex_child(ids){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (state){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.flex_layout_immediate_child_QMARK_,objects))),ids);
}),app.main.store.state,cljs.core._EQ_);
});
app.main.refs.tokens_lib = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991),app.main.refs.workspace_data);
app.main.refs.workspace_token_theme_groups = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(app.common.data.nilf(app.common.types.tokens_lib.get_theme_groups),app.main.refs.tokens_lib);
app.main.refs.workspace_token_theme = (function app$main$refs$workspace_token_theme(id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (lib){
if(cljs.core.truth_(lib)){
return app.common.types.tokens_lib.get_theme(lib,id);
} else {
return null;
}
}),app.main.refs.tokens_lib);
});
app.main.refs.workspace_token_theme_tree_no_hidden = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (lib){
var or__5025__auto__ = (function (){var G__51630 = lib;
var G__51630__$1 = (((G__51630 == null))?null:app.common.types.tokens_lib.delete_theme(G__51630,app.common.types.tokens_lib.hidden_theme_id));
if((G__51630__$1 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_theme_tree(G__51630__$1);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}),app.main.refs.tokens_lib);
app.main.refs.workspace_token_themes = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (p1__51634_SHARP_){
var or__5025__auto__ = (function (){var G__51639 = p1__51634_SHARP_;
if((G__51639 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_themes(G__51639);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}),app.main.refs.tokens_lib);
app.main.refs.workspace_token_themes_no_hidden = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (p1__51640_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(app.common.types.tokens_lib.hidden_theme_QMARK_,p1__51640_SHARP_);
}),app.main.refs.workspace_token_themes);
app.main.refs.selected_token_set_id = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.key(new cljs.core.Keyword(null,"selected-token-set-id","selected-token-set-id",-1828640116)),app.main.refs.workspace_tokens);
app.main.refs.workspace_ordered_token_sets = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (p1__51646_SHARP_){
var or__5025__auto__ = (function (){var G__51647 = p1__51646_SHARP_;
if((G__51647 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_sets(G__51647);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}),app.main.refs.tokens_lib);
app.main.refs.workspace_token_sets_tree = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(app.common.data.nilf(app.common.types.tokens_lib.get_set_tree),app.main.refs.tokens_lib);
app.main.refs.workspace_active_theme_paths = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(app.common.data.nilf(app.common.types.tokens_lib.get_active_theme_paths),app.main.refs.tokens_lib);
app.main.refs.workspace_all_tokens_map = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(app.common.data.nilf(app.common.types.tokens_lib.get_all_tokens_map),app.main.refs.tokens_lib);
app.main.refs.token_sets_at_path_all_active = (function app$main$refs$token_sets_at_path_all_active(group_path){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (lib){
if(cljs.core.truth_(lib)){
return app.common.types.tokens_lib.sets_at_path_all_active_QMARK_(lib,group_path);
} else {
return null;
}
}),app.main.refs.tokens_lib);
});
app.main.refs.workspace_active_theme_paths_no_hidden = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (p1__51663_SHARP_){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__51663_SHARP_,app.common.types.tokens_lib.hidden_theme_path);
}),app.main.refs.workspace_active_theme_paths);
app.main.refs.workspace_active_theme_sets_tokens = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (p1__51666_SHARP_){
var or__5025__auto__ = (function (){var G__51668 = p1__51666_SHARP_;
if((G__51668 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_tokens_in_active_sets(G__51668);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}),app.main.refs.tokens_lib);
app.main.refs.workspace_token_in_selected_set = (function app$main$refs$workspace_token_in_selected_set(token_id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (p1__51669_SHARP_){
return app.main.data.workspace.tokens.selected_set.get_token_in_selected_set(p1__51669_SHARP_,token_id);
}),app.main.store.state);
});
app.main.refs.workspace_all_tokens_in_selected_set = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (p1__51670_SHARP_){
var or__5025__auto__ = app.main.data.workspace.tokens.selected_set.get_all_tokens_in_selected_set(p1__51670_SHARP_);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}),app.main.store.state);
app.main.refs.plugins_permissions_peek = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"plugins-permissions-peek","plugins-permissions-peek",1646727084)),new cljs.core.Keyword(null,"data","data",-232669377));
}),app.main.store.state);
app.main.refs.get_viewer_objects = (function app$main$refs$get_viewer_objects(state,page_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"viewer","viewer",-783949853)),new cljs.core.Keyword(null,"pages","pages",-285406513)),page_id),new cljs.core.Keyword(null,"objects","objects",2099713734));
});
app.main.refs.lookup_viewer_objects_by_id = (function app$main$refs$lookup_viewer_objects_by_id(page_id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (p1__51674_SHARP_){
return app.main.refs.get_viewer_objects(p1__51674_SHARP_,page_id);
}),app.main.store.state,cljs.core._EQ_);
});
app.main.refs.viewer_data = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.key(new cljs.core.Keyword(null,"viewer","viewer",-783949853)),app.main.store.state);
app.main.refs.viewer_file = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),app.main.refs.viewer_data);
app.main.refs.viewer_thumbnails = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572),app.main.refs.viewer_file);
app.main.refs.viewer_project = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"project","project",1124394579),app.main.refs.viewer_data);
app.main.refs.viewer_state = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"viewer","viewer",-783949853),app.main.store.state);
app.main.refs.viewer_local = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),app.main.store.state);
app.main.refs.viewer_overlays = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"viewer-overlays","viewer-overlays",-1841198928),app.main.store.state);
app.main.refs.comment_threads = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"comment-threads","comment-threads",1951187179),app.main.store.state);
app.main.refs.comments_local = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"comments-local","comments-local",-777921181),app.main.store.state);
app.main.refs.profiles = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"profiles","profiles",507634713),app.main.store.state);
app.main.refs.viewer_fullscreen_QMARK_ = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498)),new cljs.core.Keyword(null,"fullscreen?","fullscreen?",-1171717820));
}),app.main.store.state);
app.main.refs.viewer_zoom_type = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498)),new cljs.core.Keyword(null,"zoom-type","zoom-type",-1936775769));
}),app.main.store.state);
app.main.refs.workspace_thumbnail_by_id = (function app$main$refs$workspace_thumbnail_by_id(object_id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (state){
var G__51683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572)),object_id);
if((G__51683 == null)){
return null;
} else {
return app.config.resolve_media(G__51683);
}
}),app.main.store.state);
});
app.main.refs.workspace_text_modifier = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace-text-modifier","workspace-text-modifier",1403277807),app.main.store.state);
app.main.refs.workspace_text_modifier_by_id = (function app$main$refs$workspace_text_modifier_by_id(id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (p1__51684_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__51684_SHARP_,id);
}),app.main.refs.workspace_text_modifier,cljs.core._EQ_);
});
app.main.refs.is_layout_child_QMARK_ = (function app$main$refs$is_layout_child_QMARK_(ids){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (objects){
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.any_layout_immediate_child_QMARK_,objects),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),ids));
}),app.main.refs.workspace_page_objects);
});
app.main.refs.all_layout_child_QMARK_ = (function app$main$refs$all_layout_child_QMARK_(ids){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (objects){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.any_layout_immediate_child_QMARK_,objects),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),ids));
}),app.main.refs.workspace_page_objects,cljs.core._EQ_);
});
app.main.refs.flex_layout_child_QMARK_ = (function app$main$refs$flex_layout_child_QMARK_(ids){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (objects){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.flex_layout_immediate_child_QMARK_,objects),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),ids));
}),app.main.refs.workspace_page_objects,cljs.core._EQ_);
});
app.main.refs.grid_layout_child_QMARK_ = (function app$main$refs$grid_layout_child_QMARK_(ids){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (objects){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.grid_layout_immediate_child_QMARK_,objects),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),ids));
}),app.main.refs.workspace_page_objects,cljs.core._EQ_);
});
app.main.refs.colorpicker = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),app.main.store.state);
app.main.refs.workspace_grid_edition = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace-grid-edition","workspace-grid-edition",-40250766),app.main.store.state);
app.main.refs.workspace_grid_edition_id = (function app$main$refs$workspace_grid_edition_id(id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (p1__51694_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__51694_SHARP_,id);
}),app.main.refs.workspace_grid_edition);
});
app.main.refs.workspace_preview_blend = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace-preview-blend","workspace-preview-blend",-1720937040),app.main.store.state);
app.main.refs.workspace_preview_blend_by_id = (function app$main$refs$workspace_preview_blend_by_id(id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$3(okulary.core.key(id),app.main.refs.workspace_preview_blend,cljs.core._EQ_);
});
app.main.refs.specialized_panel = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"specialized-panel","specialized-panel",2140639966),app.main.store.state);
app.main.refs.updating_library = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"updating-library","updating-library",1829693573),app.main.store.state);
app.main.refs.persistence_state = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"persistence","persistence",-203044807)),app.main.store.state);
app.main.refs.progress = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"progress","progress",244323547),app.main.store.state);

//# sourceMappingURL=app.main.refs.js.map
