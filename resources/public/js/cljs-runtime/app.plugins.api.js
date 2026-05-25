import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.schema.js";
import "./app.common.types.color.js";
import "./app.common.types.shape.js";
import "./app.common.types.text.js";
import "./app.common.uuid.js";
import "./app.main.data.changes.js";
import "./app.main.data.common.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.bool.js";
import "./app.main.data.workspace.colors.js";
import "./app.main.data.workspace.groups.js";
import "./app.main.data.workspace.media.js";
import "./app.main.data.workspace.selection.js";
import "./app.main.data.workspace.wasm_text.js";
import "./app.main.features.js";
import "./app.main.fonts.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.main.ui.shapes.text.fontfaces.js";
import "./app.plugins.events.js";
import "./app.plugins.file.js";
import "./app.plugins.flags.js";
import "./app.plugins.fonts.js";
import "./app.plugins.format.js";
import "./app.plugins.history.js";
import "./app.plugins.library.js";
import "./app.plugins.local_storage.js";
import "./app.plugins.page.js";
import "./app.plugins.parser.js";
import "./app.plugins.shape.js";
import "./app.plugins.system_events.js";
import "./app.plugins.user.js";
import "./app.plugins.utils.js";
import "./app.plugins.viewport.js";
import "./app.util.code_gen.js";
import "./app.util.object.js";
import "./app.util.theme.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
goog.provide('app.plugins.api');
app.plugins.api.create_shape = (function app$plugins$api$create_shape(plugin_id,type){
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var shape = app.common.types.shape.setup_shape(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100)], null));
var changes = app.common.files.changes_builder.add_object.cljs$core$IFn$_invoke$arity$2(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_page(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$0(),page),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page)),shape);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.changes.commit_changes(changes),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.plugins.system_events.event.cljs$core$IFn$_invoke$arity$variadic(plugin_id,"create-shape",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),type], 0))], 0));

return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$2(plugin_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
});
app.plugins.api.create_context = (function app$plugins$api$create_context(plugin_id){
var obj_66140 = ({});
var to_string_66139 = (function (){
return "PenpotContext";
});
var obj_66140_target_66144_66685 = obj_66140;
var prop_get_fn__66152_66686 = (function (){
var obj_66140_this_66143 = this;
var internal_fn__66146 = to_string_66139;
return internal_fn__66146.call(obj_66140_this_66143);
});
var prop_get_fn__66159_66687 = (function (){
var obj_66140_this_66143 = this;
var internal_fn__66153 = to_string_66139;
return internal_fn__66153.call(obj_66140_this_66143);
});
var prop_get_fn_plugin_66166_66688 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_plugin_66160 = (function (){
return plugin_id;
});
return internal_fn_plugin_66160.call(obj_66140_this_66143);
});
var prop_get_fn_root_66173_66689 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_root_66167 = (function (p1__66111_SHARP_){
return p1__66111_SHARP_.getRoot();
});
return internal_fn_root_66167.call(obj_66140_this_66143,obj_66140_this_66143);
});
var prop_get_fn_currentfile_66180_66690 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_currentfile_66174 = (function (p1__66112_SHARP_){
return p1__66112_SHARP_.getFile();
});
return internal_fn_currentfile_66174.call(obj_66140_this_66143,obj_66140_this_66143);
});
var prop_get_fn_currentpage_66187_66691 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_currentpage_66181 = (function (p1__66113_SHARP_){
return p1__66113_SHARP_.getPage();
});
return internal_fn_currentpage_66181.call(obj_66140_this_66143,obj_66140_this_66143);
});
var prop_get_fn_theme_66194_66692 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_theme_66188 = (function (p1__66114_SHARP_){
return p1__66114_SHARP_.getTheme();
});
return internal_fn_theme_66188.call(obj_66140_this_66143,obj_66140_this_66143);
});
var prop_get_fn_localstorage_66201_66693 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_localstorage_66195 = (function (_){
return app.plugins.local_storage.local_storage_proxy(plugin_id);
});
return internal_fn_localstorage_66195.call(obj_66140_this_66143,obj_66140_this_66143);
});
var prop_get_fn_selection_66208_66694 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_selection_66202 = (function (p1__66115_SHARP_){
return p1__66115_SHARP_.getSelectedShapes();
});
return internal_fn_selection_66202.call(obj_66140_this_66143,obj_66140_this_66143);
});
var schema_selection_66205_66695 = null;
var coercer_fn_selection_66203_66696 = (((((!((schema_selection_66205_66695 == null)))) && ((!(cljs.core.fn_QMARK_(schema_selection_66205_66695))))))?app.common.schema.coercer(schema_selection_66205_66695):null);
var decode_fn_selection_66204_66697 = app.common.json.__GT_clj;
var prop_set_fn_selection_66209_66698 = (function (val_selection_66207){
var obj_66140_this_66143 = this;
var internal_fn_selection_66202 = (function (_,shapes){
if((((!(cljs.core.array_QMARK_(shapes)))) || ((!(cljs.core.every_QMARK_(app.plugins.shape.shape_proxy_QMARK_,shapes)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"selection","selection",975998651),shapes);
} else {
var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__66116_SHARP_){
return app.util.object.get.cljs$core$IFn$_invoke$arity$2(p1__66116_SHARP_,"$id");
})),shapes);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.selection.select_shapes(ids));

}
});
return internal_fn_selection_66202.call(obj_66140_this_66143,obj_66140_this_66143,val_selection_66207);
});
var prop_get_fn_viewport_66216_66699 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_viewport_66210 = (function (p1__66117_SHARP_){
return p1__66117_SHARP_.getViewport();
});
return internal_fn_viewport_66210.call(obj_66140_this_66143,obj_66140_this_66143);
});
var prop_get_fn_currentuser_66223_66700 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_currentuser_66217 = (function (p1__66118_SHARP_){
return p1__66118_SHARP_.getCurrentUser();
});
return internal_fn_currentuser_66217.call(obj_66140_this_66143,obj_66140_this_66143);
});
var prop_get_fn_activeusers_66230_66701 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_activeusers_66224 = (function (p1__66119_SHARP_){
return p1__66119_SHARP_.getActiveUsers();
});
return internal_fn_activeusers_66224.call(obj_66140_this_66143,obj_66140_this_66143);
});
var prop_get_fn_fonts_66237_66702 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_fonts_66231 = (function (){
return app.plugins.fonts.fonts_subcontext(plugin_id);
});
return internal_fn_fonts_66231.call(obj_66140_this_66143);
});
var prop_get_fn_flags_66244_66703 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_flags_66238 = (function (){
return app.plugins.flags.flags_proxy(plugin_id);
});
return internal_fn_flags_66238.call(obj_66140_this_66143);
});
var prop_get_fn_library_66251_66704 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_library_66245 = (function (){
return app.plugins.library.library_subcontext(plugin_id);
});
return internal_fn_library_66245.call(obj_66140_this_66143);
});
var prop_get_fn_history_66258_66705 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_history_66252 = (function (){
return app.plugins.history.history_subcontext(plugin_id);
});
return internal_fn_history_66252.call(obj_66140_this_66143);
});
var schema_addlistener_66262_66706 = null;
var coercer_fn_addlistener_66260_66707 = (((((!((schema_addlistener_66262_66706 == null)))) && ((!(cljs.core.fn_QMARK_(schema_addlistener_66262_66706))))))?app.common.schema.coercer(schema_addlistener_66262_66706):null);
var decode_fn_addlistener_66261_66708 = app.common.json.__GT_clj;
var prop_get_fn_addlistener_66265_66709 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_addlistener_66259 = (function (type,callback,props){
return app.plugins.events.add_listener(type,plugin_id,callback,props);
});
var internal_fn_addlistener_66259__$1 = internal_fn_addlistener_66259.bind(obj_66140_this_66143);
return internal_fn_addlistener_66259__$1;
});
var schema_removelistener_66269_66710 = null;
var coercer_fn_removelistener_66267_66711 = (((((!((schema_removelistener_66269_66710 == null)))) && ((!(cljs.core.fn_QMARK_(schema_removelistener_66269_66710))))))?app.common.schema.coercer(schema_removelistener_66269_66710):null);
var decode_fn_removelistener_66268_66712 = app.common.json.__GT_clj;
var prop_get_fn_removelistener_66272_66713 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_removelistener_66266 = (function (listener_id){
return app.plugins.events.remove_listener(listener_id);
});
var internal_fn_removelistener_66266__$1 = internal_fn_removelistener_66266.bind(obj_66140_this_66143);
return internal_fn_removelistener_66266__$1;
});
var schema_getviewport_66276_66714 = null;
var coercer_fn_getviewport_66274_66715 = (((((!((schema_getviewport_66276_66714 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getviewport_66276_66714))))))?app.common.schema.coercer(schema_getviewport_66276_66714):null);
var decode_fn_getviewport_66275_66716 = app.common.json.__GT_clj;
var prop_get_fn_getviewport_66279_66717 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_getviewport_66273 = (function (){
return app.plugins.viewport.viewport_proxy(plugin_id);
});
var internal_fn_getviewport_66273__$1 = internal_fn_getviewport_66273.bind(obj_66140_this_66143);
return internal_fn_getviewport_66273__$1;
});
var schema_getfile_66283_66718 = null;
var coercer_fn_getfile_66281_66719 = (((((!((schema_getfile_66283_66718 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getfile_66283_66718))))))?app.common.schema.coercer(schema_getfile_66283_66718):null);
var decode_fn_getfile_66282_66720 = app.common.json.__GT_clj;
var prop_get_fn_getfile_66286_66721 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_getfile_66280 = (function (){
if((!((new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)) == null)))){
return app.plugins.file.file_proxy(plugin_id,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)));
} else {
return null;
}
});
var internal_fn_getfile_66280__$1 = internal_fn_getfile_66280.bind(obj_66140_this_66143);
return internal_fn_getfile_66280__$1;
});
var schema_getpage_66290_66722 = null;
var coercer_fn_getpage_66288_66723 = (((((!((schema_getpage_66290_66722 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getpage_66290_66722))))))?app.common.schema.coercer(schema_getpage_66290_66722):null);
var decode_fn_getpage_66289_66724 = app.common.json.__GT_clj;
var prop_get_fn_getpage_66293_66725 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_getpage_66287 = (function (){
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
if((((!((file_id == null)))) && ((!((page_id == null)))))){
return app.plugins.page.page_proxy(plugin_id,file_id,page_id);
} else {
return null;
}
});
var internal_fn_getpage_66287__$1 = internal_fn_getpage_66287.bind(obj_66140_this_66143);
return internal_fn_getpage_66287__$1;
});
var schema_getselectedshapes_66297_66726 = null;
var coercer_fn_getselectedshapes_66295_66727 = (((((!((schema_getselectedshapes_66297_66726 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getselectedshapes_66297_66726))))))?app.common.schema.coercer(schema_getselectedshapes_66297_66726):null);
var decode_fn_getselectedshapes_66296_66728 = app.common.json.__GT_clj;
var prop_get_fn_getselectedshapes_66300_66729 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_getselectedshapes_66294 = (function (){
var selection = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"selected","selected",574897764)], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.plugins.shape.shape_proxy,plugin_id)),selection));
});
var internal_fn_getselectedshapes_66294__$1 = internal_fn_getselectedshapes_66294.bind(obj_66140_this_66143);
return internal_fn_getselectedshapes_66294__$1;
});
var schema_shapescolors_66304_66730 = null;
var coercer_fn_shapescolors_66302_66731 = (((((!((schema_shapescolors_66304_66730 == null)))) && ((!(cljs.core.fn_QMARK_(schema_shapescolors_66304_66730))))))?app.common.schema.coercer(schema_shapescolors_66304_66730):null);
var decode_fn_shapescolors_66303_66732 = app.common.json.__GT_clj;
var prop_get_fn_shapescolors_66307_66733 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_shapescolors_66301 = (function (shapes){
if((((!(cljs.core.array_QMARK_(shapes)))) || ((!(cljs.core.every_QMARK_(app.plugins.shape.shape_proxy_QMARK_,shapes)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"shapesColors-shapes","shapesColors-shapes",1999445904),shapes);
} else {
var objects = app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$0();
var shapes__$1 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__66121_SHARP_){
return app.common.files.helpers.get_children_with_self(objects,p1__66121_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66120_SHARP_){
return app.util.object.get.cljs$core$IFn$_invoke$arity$2(p1__66120_SHARP_,"$id");
}),shapes)], 0));
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var shared_libs = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
return app.plugins.format.format_array(app.plugins.format.format_color_result,cljs.core.group_by(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),app.main.data.workspace.colors.extract_all_colors(shapes__$1,file_id,shared_libs)));

}
});
var internal_fn_shapescolors_66301__$1 = internal_fn_shapescolors_66301.bind(obj_66140_this_66143);
return internal_fn_shapescolors_66301__$1;
});
var schema_replacecolor_66311_66734 = null;
var coercer_fn_replacecolor_66309_66735 = (((((!((schema_replacecolor_66311_66734 == null)))) && ((!(cljs.core.fn_QMARK_(schema_replacecolor_66311_66734))))))?app.common.schema.coercer(schema_replacecolor_66311_66734):null);
var decode_fn_replacecolor_66310_66736 = app.common.json.__GT_clj;
var prop_get_fn_replacecolor_66314_66737 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_replacecolor_66308 = (function (shapes,old_color,new_color){
var old_color__$1 = app.plugins.parser.parse_color_data(old_color);
var new_color__$1 = app.plugins.parser.parse_color_data(new_color);
if((((!(cljs.core.array_QMARK_(shapes)))) || ((!(cljs.core.every_QMARK_(app.plugins.shape.shape_proxy_QMARK_,shapes)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"replaceColor-shapes","replaceColor-shapes",61687483),shapes);
} else {
if(cljs.core.not(app.common.schema.validate(app.common.types.color.schema_COLON_color,old_color__$1))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"replaceColor-oldColor","replaceColor-oldColor",807960134),old_color__$1);
} else {
if(cljs.core.not(app.common.schema.validate(app.common.types.color.schema_COLON_color,new_color__$1))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"replaceColor-newColor","replaceColor-newColor",-1427541529),new_color__$1);
} else {
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var shared_libs = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var objects = app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$0();
var shapes__$1 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__66123_SHARP_){
return app.common.files.helpers.get_children_with_self(objects,p1__66123_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66122_SHARP_){
return app.util.object.get.cljs$core$IFn$_invoke$arity$2(p1__66122_SHARP_,"$id");
}),shapes)], 0));
var shapes_by_color = cljs.core.group_by(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),app.main.data.workspace.colors.extract_all_colors(shapes__$1,file_id,shared_libs));
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shapes_by_color,old_color__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var operations = temp__5825__auto__;
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.change_color_in_selected(operations,new_color__$1,old_color__$1));
} else {
return null;
}

}
}
}
});
var internal_fn_replacecolor_66308__$1 = internal_fn_replacecolor_66308.bind(obj_66140_this_66143);
return internal_fn_replacecolor_66308__$1;
});
var schema_getroot_66318_66738 = null;
var coercer_fn_getroot_66316_66739 = (((((!((schema_getroot_66318_66738 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getroot_66318_66738))))))?app.common.schema.coercer(schema_getroot_66318_66738):null);
var decode_fn_getroot_66317_66740 = app.common.json.__GT_clj;
var prop_get_fn_getroot_66321_66741 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_getroot_66315 = (function (){
if((((!((new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)) == null)))) && ((!((new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)) == null)))))){
return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$2(plugin_id,app.common.uuid.zero);
} else {
return null;
}
});
var internal_fn_getroot_66315__$1 = internal_fn_getroot_66315.bind(obj_66140_this_66143);
return internal_fn_getroot_66315__$1;
});
var schema_gettheme_66325_66742 = null;
var coercer_fn_gettheme_66323_66743 = (((((!((schema_gettheme_66325_66742 == null)))) && ((!(cljs.core.fn_QMARK_(schema_gettheme_66325_66742))))))?app.common.schema.coercer(schema_gettheme_66325_66742):null);
var decode_fn_gettheme_66324_66744 = app.common.json.__GT_clj;
var prop_get_fn_gettheme_66328_66745 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_gettheme_66322 = (function (){
var theme = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"theme","theme",-1247880880)], null));
if(((cljs.core.not(theme)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,"system")))){
return app.util.theme.get_system_theme();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,"default")){
return "dark";
} else {
return theme;

}
}
});
var internal_fn_gettheme_66322__$1 = internal_fn_gettheme_66322.bind(obj_66140_this_66143);
return internal_fn_gettheme_66322__$1;
});
var schema_getcurrentuser_66332_66746 = null;
var coercer_fn_getcurrentuser_66330_66747 = (((((!((schema_getcurrentuser_66332_66746 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getcurrentuser_66332_66746))))))?app.common.schema.coercer(schema_getcurrentuser_66332_66746):null);
var decode_fn_getcurrentuser_66331_66748 = app.common.json.__GT_clj;
var prop_get_fn_getcurrentuser_66335_66749 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_getcurrentuser_66329 = (function (){
return app.plugins.user.current_user_proxy(plugin_id,new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)));
});
var internal_fn_getcurrentuser_66329__$1 = internal_fn_getcurrentuser_66329.bind(obj_66140_this_66143);
return internal_fn_getcurrentuser_66329__$1;
});
var schema_getactiveusers_66339_66750 = null;
var coercer_fn_getactiveusers_66337_66751 = (((((!((schema_getactiveusers_66339_66750 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getactiveusers_66339_66750))))))?app.common.schema.coercer(schema_getactiveusers_66339_66750):null);
var decode_fn_getactiveusers_66338_66752 = app.common.json.__GT_clj;
var prop_get_fn_getactiveusers_66342_66753 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_getactiveusers_66336 = (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66125_SHARP_){
return app.plugins.user.active_user_proxy(plugin_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__66125_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__66124_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__66124_SHARP_),new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)));
}),cljs.core.vals(new cljs.core.Keyword(null,"workspace-presence","workspace-presence",-919312096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state))))));
});
var internal_fn_getactiveusers_66336__$1 = internal_fn_getactiveusers_66336.bind(obj_66140_this_66143);
return internal_fn_getactiveusers_66336__$1;
});
var schema_uploadmediaurl_66346_66754 = null;
var coercer_fn_uploadmediaurl_66344_66755 = (((((!((schema_uploadmediaurl_66346_66754 == null)))) && ((!(cljs.core.fn_QMARK_(schema_uploadmediaurl_66346_66754))))))?app.common.schema.coercer(schema_uploadmediaurl_66346_66754):null);
var decode_fn_uploadmediaurl_66345_66756 = app.common.json.__GT_clj;
var prop_get_fn_uploadmediaurl_66349_66757 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_uploadmediaurl_66343 = (function (name,url){
if((!(typeof name === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"uploadMedia-name","uploadMedia-name",-1741554770),name);
} else {
if((!(typeof url === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"uploadMedia-url","uploadMedia-url",-675246750),url);
} else {
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
return (new Promise((function (resolve,reject){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3(resolve,reject,beicon.v2.core.map(app.plugins.format.format_image,beicon.v2.core.take((1),app.main.data.workspace.media.upload_media_url(name,file_id,url))));
})));

}
}
});
var internal_fn_uploadmediaurl_66343__$1 = internal_fn_uploadmediaurl_66343.bind(obj_66140_this_66143);
return internal_fn_uploadmediaurl_66343__$1;
});
var schema_uploadmediadata_66353_66758 = null;
var coercer_fn_uploadmediadata_66351_66759 = (((((!((schema_uploadmediadata_66353_66758 == null)))) && ((!(cljs.core.fn_QMARK_(schema_uploadmediadata_66353_66758))))))?app.common.schema.coercer(schema_uploadmediadata_66353_66758):null);
var decode_fn_uploadmediadata_66352_66760 = app.common.json.__GT_clj;
var prop_get_fn_uploadmediadata_66356_66761 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_uploadmediadata_66350 = (function (name,data,mime_type){
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
return (new Promise((function (resolve,reject){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3(resolve,reject,beicon.v2.core.map(app.plugins.format.format_image,beicon.v2.core.take((1),app.main.data.workspace.media.process_blobs(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"local?","local?",-1422786101),false,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"blobs","blobs",-1606355916),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Blob([data],({"type": mime_type})))], null),new cljs.core.Keyword(null,"on-image","on-image",1794160201),cljs.core.identity,new cljs.core.Keyword(null,"on-svg","on-svg",981409697),cljs.core.identity], null)))));
})));
});
var internal_fn_uploadmediadata_66350__$1 = internal_fn_uploadmediadata_66350.bind(obj_66140_this_66143);
return internal_fn_uploadmediadata_66350__$1;
});
var schema_group_66360_66762 = null;
var coercer_fn_group_66358_66763 = (((((!((schema_group_66360_66762 == null)))) && ((!(cljs.core.fn_QMARK_(schema_group_66360_66762))))))?app.common.schema.coercer(schema_group_66360_66762):null);
var decode_fn_group_66359_66764 = app.common.json.__GT_clj;
var prop_get_fn_group_66363_66765 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_group_66357 = (function (shapes){
if((((!(cljs.core.array_QMARK_(shapes)))) || ((!(cljs.core.every_QMARK_(app.plugins.shape.shape_proxy_QMARK_,shapes)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"group-shapes","group-shapes",1902987914),shapes);
} else {
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var id = app.common.uuid.next();
var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__66126_SHARP_){
return app.util.object.get.cljs$core$IFn$_invoke$arity$2(p1__66126_SHARP_,"$id");
})),shapes);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.groups.group_shapes(id,ids),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.plugins.system_events.event.cljs$core$IFn$_invoke$arity$variadic(plugin_id,"create-shape",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type], 0))], 0));

return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$4(plugin_id,file_id,page_id,id);

}
});
var internal_fn_group_66357__$1 = internal_fn_group_66357.bind(obj_66140_this_66143);
return internal_fn_group_66357__$1;
});
var schema_ungroup_66367_66766 = null;
var coercer_fn_ungroup_66365_66767 = (((((!((schema_ungroup_66367_66766 == null)))) && ((!(cljs.core.fn_QMARK_(schema_ungroup_66367_66766))))))?app.common.schema.coercer(schema_ungroup_66367_66766):null);
var decode_fn_ungroup_66366_66768 = app.common.json.__GT_clj;
var prop_get_fn_ungroup_66370_66769 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_ungroup_66364 = (function() { 
var G__66849__delegate = function (group,rest){
if((!(app.plugins.shape.shape_proxy_QMARK_(group)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"ungroup","ungroup",-1629254184),group);
} else {
if((((!((rest == null)))) && ((!(cljs.core.every_QMARK_(app.plugins.shape.shape_proxy_QMARK_,rest)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"ungroup","ungroup",-1629254184),rest);
} else {
var shapes = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [group], null),rest);
var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__66127_SHARP_){
return app.util.object.get.cljs$core$IFn$_invoke$arity$2(p1__66127_SHARP_,"$id");
})),shapes);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.groups.ungroup_shapes(ids));

}
}
};
var G__66849 = function (group,var_args){
var rest = null;
if (arguments.length > 1) {
var G__66850__i = 0, G__66850__a = new Array(arguments.length -  1);
while (G__66850__i < G__66850__a.length) {G__66850__a[G__66850__i] = arguments[G__66850__i + 1]; ++G__66850__i;}
  rest = new cljs.core.IndexedSeq(G__66850__a,0,null);
} 
return G__66849__delegate.call(this,group,rest);};
G__66849.cljs$lang$maxFixedArity = 1;
G__66849.cljs$lang$applyTo = (function (arglist__66851){
var group = cljs.core.first(arglist__66851);
var rest = cljs.core.rest(arglist__66851);
return G__66849__delegate(group,rest);
});
G__66849.cljs$core$IFn$_invoke$arity$variadic = G__66849__delegate;
return G__66849;
})()
;
var internal_fn_ungroup_66364__$1 = internal_fn_ungroup_66364.bind(obj_66140_this_66143);
return internal_fn_ungroup_66364__$1;
});
var schema_createboard_66374_66770 = null;
var coercer_fn_createboard_66372_66771 = (((((!((schema_createboard_66374_66770 == null)))) && ((!(cljs.core.fn_QMARK_(schema_createboard_66374_66770))))))?app.common.schema.coercer(schema_createboard_66374_66770):null);
var decode_fn_createboard_66373_66772 = app.common.json.__GT_clj;
var prop_get_fn_createboard_66377_66773 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_createboard_66371 = (function (){
return app.plugins.api.create_shape(plugin_id,new cljs.core.Keyword(null,"frame","frame",-1711082588));
});
var internal_fn_createboard_66371__$1 = internal_fn_createboard_66371.bind(obj_66140_this_66143);
return internal_fn_createboard_66371__$1;
});
var schema_createrectangle_66381_66774 = null;
var coercer_fn_createrectangle_66379_66775 = (((((!((schema_createrectangle_66381_66774 == null)))) && ((!(cljs.core.fn_QMARK_(schema_createrectangle_66381_66774))))))?app.common.schema.coercer(schema_createrectangle_66381_66774):null);
var decode_fn_createrectangle_66380_66776 = app.common.json.__GT_clj;
var prop_get_fn_createrectangle_66384_66777 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_createrectangle_66378 = (function (){
return app.plugins.api.create_shape(plugin_id,new cljs.core.Keyword(null,"rect","rect",-108902628));
});
var internal_fn_createrectangle_66378__$1 = internal_fn_createrectangle_66378.bind(obj_66140_this_66143);
return internal_fn_createrectangle_66378__$1;
});
var schema_createellipse_66388_66778 = null;
var coercer_fn_createellipse_66386_66779 = (((((!((schema_createellipse_66388_66778 == null)))) && ((!(cljs.core.fn_QMARK_(schema_createellipse_66388_66778))))))?app.common.schema.coercer(schema_createellipse_66388_66778):null);
var decode_fn_createellipse_66387_66780 = app.common.json.__GT_clj;
var prop_get_fn_createellipse_66391_66781 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_createellipse_66385 = (function (){
return app.plugins.api.create_shape(plugin_id,new cljs.core.Keyword(null,"circle","circle",1903212362));
});
var internal_fn_createellipse_66385__$1 = internal_fn_createellipse_66385.bind(obj_66140_this_66143);
return internal_fn_createellipse_66385__$1;
});
var schema_createpath_66395_66782 = null;
var coercer_fn_createpath_66393_66783 = (((((!((schema_createpath_66395_66782 == null)))) && ((!(cljs.core.fn_QMARK_(schema_createpath_66395_66782))))))?app.common.schema.coercer(schema_createpath_66395_66782):null);
var decode_fn_createpath_66394_66784 = app.common.json.__GT_clj;
var prop_get_fn_createpath_66398_66785 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_createpath_66392 = (function (){
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var shape = app.common.types.shape.setup_shape(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"line-to","line-to",1332939595),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null)], null)], null)], null));
var changes = app.common.files.changes_builder.add_object.cljs$core$IFn$_invoke$arity$2(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_page(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$0(),page),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page)),shape);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.changes.commit_changes(changes),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.plugins.system_events.event.cljs$core$IFn$_invoke$arity$variadic(plugin_id,"create-shape",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"path","path",-188191168)], 0))], 0));

return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$2(plugin_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
});
var internal_fn_createpath_66392__$1 = internal_fn_createpath_66392.bind(obj_66140_this_66143);
return internal_fn_createpath_66392__$1;
});
var schema_createtext_66402_66786 = null;
var coercer_fn_createtext_66400_66787 = (((((!((schema_createtext_66402_66786 == null)))) && ((!(cljs.core.fn_QMARK_(schema_createtext_66402_66786))))))?app.common.schema.coercer(schema_createtext_66402_66786):null);
var decode_fn_createtext_66401_66788 = app.common.json.__GT_clj;
var prop_get_fn_createtext_66405_66789 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_createtext_66399 = (function (text){
if((((!(typeof text === 'string'))) || (cljs.core.empty_QMARK_(text)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"createText","createText",256547428),text);
} else {
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var shape = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$5(app.common.types.shape.setup_shape(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"grow-type","grow-type",-908344411),new cljs.core.Keyword(null,"auto-width","auto-width",-992925188)], null)),new cljs.core.Keyword(null,"content","content",15833224),app.common.types.text.change_text,text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fills","fills",902966780),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),"#000000",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(1)], null)], null)], null)),new cljs.core.Keyword(null,"position-data","position-data",-499622376));
var changes = app.common.files.changes_builder.add_object.cljs$core$IFn$_invoke$arity$2(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_page(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$0(),page),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page)),shape);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.changes.commit_changes(changes),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.plugins.system_events.event.cljs$core$IFn$_invoke$arity$variadic(plugin_id,"create-shape",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)], 0))], 0));

if(cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"render-wasm/v1"))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.wasm_text.resize_wasm_text_debounce(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));
} else {
}

return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$2(plugin_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));

}
});
var internal_fn_createtext_66399__$1 = internal_fn_createtext_66399.bind(obj_66140_this_66143);
return internal_fn_createtext_66399__$1;
});
var schema_createshapefromsvg_66409_66790 = null;
var coercer_fn_createshapefromsvg_66407_66791 = (((((!((schema_createshapefromsvg_66409_66790 == null)))) && ((!(cljs.core.fn_QMARK_(schema_createshapefromsvg_66409_66790))))))?app.common.schema.coercer(schema_createshapefromsvg_66409_66790):null);
var decode_fn_createshapefromsvg_66408_66792 = app.common.json.__GT_clj;
var prop_get_fn_createshapefromsvg_66412_66793 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_createshapefromsvg_66406 = (function (svg_string){
if((((!(typeof svg_string === 'string'))) || (cljs.core.empty_QMARK_(svg_string)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"createShapeFromSvg","createShapeFromSvg",1744668068),svg_string);
} else {
var id = app.common.uuid.next();
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.media.create_svg_shape(id,"svg",svg_string,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.plugins.system_events.event.cljs$core$IFn$_invoke$arity$variadic(plugin_id,"create-shape",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"svg","svg",856789142)], 0))], 0));

return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$4(plugin_id,file_id,page_id,id);

}
});
var internal_fn_createshapefromsvg_66406__$1 = internal_fn_createshapefromsvg_66406.bind(obj_66140_this_66143);
return internal_fn_createshapefromsvg_66406__$1;
});
var schema_createshapefromsvgwithimages_66416_66794 = null;
var coercer_fn_createshapefromsvgwithimages_66414_66795 = (((((!((schema_createshapefromsvgwithimages_66416_66794 == null)))) && ((!(cljs.core.fn_QMARK_(schema_createshapefromsvgwithimages_66416_66794))))))?app.common.schema.coercer(schema_createshapefromsvgwithimages_66416_66794):null);
var decode_fn_createshapefromsvgwithimages_66415_66796 = app.common.json.__GT_clj;
var prop_get_fn_createshapefromsvgwithimages_66419_66797 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_createshapefromsvgwithimages_66413 = (function (svg_string){
return (new Promise((function (resolve,reject){
if((((!(typeof svg_string === 'string'))) || (cljs.core.empty_QMARK_(svg_string)))){
app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"createShapeFromSvg","createShapeFromSvg",1744668068),"Svg not valid");

return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1("Svg not valid") : reject.call(null,"Svg not valid"));
} else {
var id = app.common.uuid.next();
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.media.create_svg_shape_with_images(file_id,id,"svg",svg_string,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0)),(function (){
var G__66551 = app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$4(plugin_id,file_id,page_id,id);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__66551) : resolve.call(null,G__66551));
}),reject),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.plugins.system_events.event.cljs$core$IFn$_invoke$arity$variadic(plugin_id,"create-shape",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)], 0))], 0));

}
})));
});
var internal_fn_createshapefromsvgwithimages_66413__$1 = internal_fn_createshapefromsvgwithimages_66413.bind(obj_66140_this_66143);
return internal_fn_createshapefromsvgwithimages_66413__$1;
});
var schema_createboolean_66423_66798 = null;
var coercer_fn_createboolean_66421_66799 = (((((!((schema_createboolean_66423_66798 == null)))) && ((!(cljs.core.fn_QMARK_(schema_createboolean_66423_66798))))))?app.common.schema.coercer(schema_createboolean_66423_66798):null);
var decode_fn_createboolean_66422_66800 = app.common.json.__GT_clj;
var prop_get_fn_createboolean_66426_66801 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_createboolean_66420 = (function (bool_type,shapes){
var bool_type__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(bool_type);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.bool_types,bool_type__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"createBoolean-boolType","createBoolean-boolType",1854310447),bool_type__$1);
} else {
if((((!(cljs.core.array_QMARK_(shapes)))) || (((cljs.core.empty_QMARK_(shapes)) || ((!(cljs.core.every_QMARK_(app.plugins.shape.shape_proxy_QMARK_,shapes)))))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"createBoolean-shapes","createBoolean-shapes",-1009255477),shapes);
} else {
var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__66128_SHARP_){
return app.util.object.get.cljs$core$IFn$_invoke$arity$2(p1__66128_SHARP_,"$id");
})),shapes);
var shape_id = app.common.uuid.next();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.bool.create_bool.cljs$core$IFn$_invoke$arity$variadic(bool_type__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ids","ids",-998535796),ids,new cljs.core.Keyword(null,"force-shape-id","force-shape-id",-1073846094),shape_id], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.plugins.system_events.event.cljs$core$IFn$_invoke$arity$variadic(plugin_id,"create-shape",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], 0))], 0));

return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$2(plugin_id,shape_id);

}
}
});
var internal_fn_createboolean_66420__$1 = internal_fn_createboolean_66420.bind(obj_66140_this_66143);
return internal_fn_createboolean_66420__$1;
});
var schema_generatemarkup_66430_66802 = null;
var coercer_fn_generatemarkup_66428_66803 = (((((!((schema_generatemarkup_66430_66802 == null)))) && ((!(cljs.core.fn_QMARK_(schema_generatemarkup_66430_66802))))))?app.common.schema.coercer(schema_generatemarkup_66430_66802):null);
var decode_fn_generatemarkup_66429_66804 = app.common.json.__GT_clj;
var prop_get_fn_generatemarkup_66433_66805 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_generatemarkup_66427 = (function (shapes,options){
var type = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(app.util.object.get.cljs$core$IFn$_invoke$arity$2(options,"type"),"html");
if((((!(cljs.core.array_QMARK_(shapes)))) || ((!(cljs.core.every_QMARK_(app.plugins.shape.shape_proxy_QMARK_,shapes)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"generateMarkup-shapes","generateMarkup-shapes",-1635320333),shapes);
} else {
if((((!((type == null)))) && ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"html",null], null), null),type)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"generateMarkup-type","generateMarkup-type",-177562878),type);
} else {
var resolved_code = cljs.core.reduce_kv((function (acc,_,shapes__$1){
var shape = cljs.core.first(shapes__$1);
var objects = app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(shape));
var resolved_shapes = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__66129_SHARP_){
return app.common.files.helpers.get_children_with_self(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__66129_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.files.helpers.clean_loops(objects,shapes__$1)], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,app.util.code_gen.generate_formatted_markup_code(objects,type,resolved_shapes));
}),cljs.core.PersistentVector.EMPTY,cljs.core.group_by(new cljs.core.Keyword(null,"page-id","page-id",-872941168),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.plugins.utils.proxy__GT_shape(s),new cljs.core.Keyword(null,"page-id","page-id",-872941168),app.util.object.get.cljs$core$IFn$_invoke$arity$2(s,"$page")),new cljs.core.Keyword(null,"file-id","file-id",-811871323),app.util.object.get.cljs$core$IFn$_invoke$arity$2(s,"$file"));
})),shapes)));
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",resolved_code);

}
}
});
var internal_fn_generatemarkup_66427__$1 = internal_fn_generatemarkup_66427.bind(obj_66140_this_66143);
return internal_fn_generatemarkup_66427__$1;
});
var schema_generatestyle_66437_66806 = null;
var coercer_fn_generatestyle_66435_66807 = (((((!((schema_generatestyle_66437_66806 == null)))) && ((!(cljs.core.fn_QMARK_(schema_generatestyle_66437_66806))))))?app.common.schema.coercer(schema_generatestyle_66437_66806):null);
var decode_fn_generatestyle_66436_66808 = app.common.json.__GT_clj;
var prop_get_fn_generatestyle_66440_66809 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_generatestyle_66434 = (function (shapes,options){
var type = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(app.util.object.get.cljs$core$IFn$_invoke$arity$2(options,"type"),"css");
var prelude_QMARK_ = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(app.util.object.get.cljs$core$IFn$_invoke$arity$2(options,"withPrelude"),false);
var children_QMARK_ = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(app.util.object.get.cljs$core$IFn$_invoke$arity$2(options,"includeChildren"),true);
if((((!(cljs.core.array_QMARK_(shapes)))) || ((!(cljs.core.every_QMARK_(app.plugins.shape.shape_proxy_QMARK_,shapes)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"generateStyle-shapes","generateStyle-shapes",-2048142893),shapes);
} else {
if((((!((type == null)))) && ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["css",null], null), null),type)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"generateStyle-type","generateStyle-type",196722442),type);
} else {
if((((!((prelude_QMARK_ == null)))) && ((!(cljs.core.boolean_QMARK_(prelude_QMARK_)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"generateStyle-withPrelude","generateStyle-withPrelude",-551214991),prelude_QMARK_);
} else {
if((((!((children_QMARK_ == null)))) && ((!(cljs.core.boolean_QMARK_(children_QMARK_)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"generateStyle-includeChildren","generateStyle-includeChildren",-441924583),children_QMARK_);
} else {
var resolved_styles = cljs.core.reduce_kv((function (acc,_,shapes__$1){
var shape = cljs.core.first(shapes__$1);
var objects = app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(shape));
var resolved_shapes = (function (){var G__66576 = app.common.files.helpers.clean_loops(objects,shapes__$1);
if(cljs.core.truth_(children_QMARK_)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__66130_SHARP_){
return app.common.files.helpers.get_children_with_self(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__66130_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__66576], 0));
} else {
return G__66576;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,app.util.code_gen.generate_style_code.cljs$core$IFn$_invoke$arity$5(objects,type,shapes__$1,resolved_shapes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-prelude?","with-prelude?",-1449344035),prelude_QMARK_], null)));
}),cljs.core.PersistentVector.EMPTY,cljs.core.group_by(new cljs.core.Keyword(null,"page-id","page-id",-872941168),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.plugins.utils.proxy__GT_shape(s),new cljs.core.Keyword(null,"page-id","page-id",-872941168),app.util.object.get.cljs$core$IFn$_invoke$arity$2(s,"$page")),new cljs.core.Keyword(null,"file-id","file-id",-811871323),app.util.object.get.cljs$core$IFn$_invoke$arity$2(s,"$file"));
})),shapes)));
return ""+((cljs.core.truth_(prelude_QMARK_)?app.util.code_gen.prelude(type):"") ?? "")+(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n\n",resolved_styles) ?? "");

}
}
}
}
});
var internal_fn_generatestyle_66434__$1 = internal_fn_generatestyle_66434.bind(obj_66140_this_66143);
return internal_fn_generatestyle_66434__$1;
});
var schema_generatefontfaces_66444_66810 = null;
var coercer_fn_generatefontfaces_66442_66811 = (((((!((schema_generatefontfaces_66444_66810 == null)))) && ((!(cljs.core.fn_QMARK_(schema_generatefontfaces_66444_66810))))))?app.common.schema.coercer(schema_generatefontfaces_66444_66810):null);
var decode_fn_generatefontfaces_66443_66812 = app.common.json.__GT_clj;
var prop_get_fn_generatefontfaces_66447_66813 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_generatefontfaces_66441 = (function (shapes){
return (new Promise((function (resolve,reject){
var objects = app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$0();
var all_children = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),app.common.files.helpers.selected_with_children(objects,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66131_SHARP_){
return app.util.object.get.cljs$core$IFn$_invoke$arity$2(p1__66131_SHARP_,"$id");
}),shapes)));
var fonts = app.main.ui.shapes.text.fontfaces.shapes__GT_fonts(all_children);
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((function (p1__66133_SHARP_){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p1__66133_SHARP_) : resolve.call(null,p1__66133_SHARP_));
}),reject,beicon.v2.core.first(beicon.v2.core.map((function (p1__66132_SHARP_){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",p1__66132_SHARP_);
}),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,beicon.v2.core.merge_map(app.main.fonts.fetch_font_css,beicon.v2.core.from(fonts))))));
})));
});
var internal_fn_generatefontfaces_66441__$1 = internal_fn_generatefontfaces_66441.bind(obj_66140_this_66143);
return internal_fn_generatefontfaces_66441__$1;
});
var schema_openviewer_66451_66814 = null;
var coercer_fn_openviewer_66449_66815 = (((((!((schema_openviewer_66451_66814 == null)))) && ((!(cljs.core.fn_QMARK_(schema_openviewer_66451_66814))))))?app.common.schema.coercer(schema_openviewer_66451_66814):null);
var decode_fn_openviewer_66450_66816 = app.common.json.__GT_clj;
var prop_get_fn_openviewer_66454_66817 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_openviewer_66448 = (function (){
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)),new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)),new cljs.core.Keyword(null,"section","section",-300141526),"interactions"], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_viewer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0)));
});
var internal_fn_openviewer_66448__$1 = internal_fn_openviewer_66448.bind(obj_66140_this_66143);
return internal_fn_openviewer_66448__$1;
});
var schema_createpage_66458_66818 = null;
var coercer_fn_createpage_66456_66819 = (((((!((schema_createpage_66458_66818 == null)))) && ((!(cljs.core.fn_QMARK_(schema_createpage_66458_66818))))))?app.common.schema.coercer(schema_createpage_66458_66818):null);
var decode_fn_createpage_66457_66820 = app.common.json.__GT_clj;
var prop_get_fn_createpage_66461_66821 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_createpage_66455 = (function (){
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var id = app.common.uuid.next();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.create_page(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),id,new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id], null)));

return app.plugins.page.page_proxy(plugin_id,file_id,id);
});
var internal_fn_createpage_66455__$1 = internal_fn_createpage_66455.bind(obj_66140_this_66143);
return internal_fn_createpage_66455__$1;
});
var schema_openpage_66465_66822 = null;
var coercer_fn_openpage_66463_66823 = (((((!((schema_openpage_66465_66822 == null)))) && ((!(cljs.core.fn_QMARK_(schema_openpage_66465_66822))))))?app.common.schema.coercer(schema_openpage_66465_66822):null);
var decode_fn_openpage_66464_66824 = app.common.json.__GT_clj;
var prop_get_fn_openpage_66468_66825 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_openpage_66462 = (function (page,new_window){
var id = ((app.plugins.page.page_proxy_QMARK_(page))?app.util.object.get.cljs$core$IFn$_invoke$arity$2(page,"$id"):((typeof page === 'string')?app.common.uuid.parse_STAR_(page):null
));
var new_window__$1 = ((cljs.core.boolean_QMARK_(new_window))?new_window:false);
if((id == null)){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"openPage","openPage",136412439),"Expected a Page object or a page UUID string");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"page-id","page-id",-872941168),id,new cljs.core.Keyword("app.main.router","new-window","app.main.router/new-window",1705407424),new_window__$1], 0)));
}
});
var internal_fn_openpage_66462__$1 = internal_fn_openpage_66462.bind(obj_66140_this_66143);
return internal_fn_openpage_66462__$1;
});
var schema_alignhorizontal_66472_66826 = null;
var coercer_fn_alignhorizontal_66470_66827 = (((((!((schema_alignhorizontal_66472_66826 == null)))) && ((!(cljs.core.fn_QMARK_(schema_alignhorizontal_66472_66826))))))?app.common.schema.coercer(schema_alignhorizontal_66472_66826):null);
var decode_fn_alignhorizontal_66471_66828 = app.common.json.__GT_clj;
var prop_get_fn_alignhorizontal_66475_66829 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_alignhorizontal_66469 = (function (shapes,direction){
var dir = (function (){var G__66580 = direction;
switch (G__66580) {
case "left":
return new cljs.core.Keyword(null,"hleft","hleft",1814954288);

break;
case "center":
return new cljs.core.Keyword(null,"hcenter","hcenter",-1502998396);

break;
case "right":
return new cljs.core.Keyword(null,"hright","hright",-2037540371);

break;
default:
return null;

}
})();
if((dir == null)){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"alignHorizontal-direction","alignHorizontal-direction",-378078007),"Direction not valid");
} else {
if((((!(cljs.core.array_QMARK_(shapes)))) || ((!(cljs.core.every_QMARK_(app.plugins.shape.shape_proxy_QMARK_,shapes)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"alignHorizontal-shapes","alignHorizontal-shapes",1742786132),"Not valid shapes");
} else {
var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__66134_SHARP_){
return app.util.object.get.cljs$core$IFn$_invoke$arity$2(p1__66134_SHARP_,"$id");
})),shapes);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.align_objects.cljs$core$IFn$_invoke$arity$2(dir,ids));

}
}
});
var internal_fn_alignhorizontal_66469__$1 = internal_fn_alignhorizontal_66469.bind(obj_66140_this_66143);
return internal_fn_alignhorizontal_66469__$1;
});
var schema_alignvertical_66479_66830 = null;
var coercer_fn_alignvertical_66477_66831 = (((((!((schema_alignvertical_66479_66830 == null)))) && ((!(cljs.core.fn_QMARK_(schema_alignvertical_66479_66830))))))?app.common.schema.coercer(schema_alignvertical_66479_66830):null);
var decode_fn_alignvertical_66478_66832 = app.common.json.__GT_clj;
var prop_get_fn_alignvertical_66482_66833 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_alignvertical_66476 = (function (shapes,direction){
var dir = (function (){var G__66581 = direction;
switch (G__66581) {
case "top":
return new cljs.core.Keyword(null,"vtop","vtop",1654808384);

break;
case "center":
return new cljs.core.Keyword(null,"vcenter","vcenter",564475646);

break;
case "bottom":
return new cljs.core.Keyword(null,"vbottom","vbottom",-2106028734);

break;
default:
return null;

}
})();
if((dir == null)){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"alignVertical-direction","alignVertical-direction",-2037964308),"Direction not valid");
} else {
if((((!(cljs.core.array_QMARK_(shapes)))) || ((!(cljs.core.every_QMARK_(app.plugins.shape.shape_proxy_QMARK_,shapes)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"alignVertical-shapes","alignVertical-shapes",53178325),"Not valid shapes");
} else {
var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__66135_SHARP_){
return app.util.object.get.cljs$core$IFn$_invoke$arity$2(p1__66135_SHARP_,"$id");
})),shapes);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.align_objects.cljs$core$IFn$_invoke$arity$2(dir,ids));

}
}
});
var internal_fn_alignvertical_66476__$1 = internal_fn_alignvertical_66476.bind(obj_66140_this_66143);
return internal_fn_alignvertical_66476__$1;
});
var schema_distributehorizontal_66486_66834 = null;
var coercer_fn_distributehorizontal_66484_66835 = (((((!((schema_distributehorizontal_66486_66834 == null)))) && ((!(cljs.core.fn_QMARK_(schema_distributehorizontal_66486_66834))))))?app.common.schema.coercer(schema_distributehorizontal_66486_66834):null);
var decode_fn_distributehorizontal_66485_66836 = app.common.json.__GT_clj;
var prop_get_fn_distributehorizontal_66489_66837 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_distributehorizontal_66483 = (function (shapes){
if((((!(cljs.core.array_QMARK_(shapes)))) || ((!(cljs.core.every_QMARK_(app.plugins.shape.shape_proxy_QMARK_,shapes)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"distributeHorizontal-shapes","distributeHorizontal-shapes",-995314595),"Not valid shapes");
} else {
var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__66136_SHARP_){
return app.util.object.get.cljs$core$IFn$_invoke$arity$2(p1__66136_SHARP_,"$id");
})),shapes);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.distribute_objects.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),ids));

}
});
var internal_fn_distributehorizontal_66483__$1 = internal_fn_distributehorizontal_66483.bind(obj_66140_this_66143);
return internal_fn_distributehorizontal_66483__$1;
});
var schema_distributevertical_66493_66838 = null;
var coercer_fn_distributevertical_66491_66839 = (((((!((schema_distributevertical_66493_66838 == null)))) && ((!(cljs.core.fn_QMARK_(schema_distributevertical_66493_66838))))))?app.common.schema.coercer(schema_distributevertical_66493_66838):null);
var decode_fn_distributevertical_66492_66840 = app.common.json.__GT_clj;
var prop_get_fn_distributevertical_66496_66841 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_distributevertical_66490 = (function (shapes){
if((((!(cljs.core.array_QMARK_(shapes)))) || ((!(cljs.core.every_QMARK_(app.plugins.shape.shape_proxy_QMARK_,shapes)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"distributeVertical-shapes","distributeVertical-shapes",404282144),"Not valid shapes");
} else {
var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__66137_SHARP_){
return app.util.object.get.cljs$core$IFn$_invoke$arity$2(p1__66137_SHARP_,"$id");
})),shapes);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.distribute_objects.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vertical","vertical",718696748),ids));

}
});
var internal_fn_distributevertical_66490__$1 = internal_fn_distributevertical_66490.bind(obj_66140_this_66143);
return internal_fn_distributevertical_66490__$1;
});
var schema_flatten_66500_66842 = null;
var coercer_fn_flatten_66498_66843 = (((((!((schema_flatten_66500_66842 == null)))) && ((!(cljs.core.fn_QMARK_(schema_flatten_66500_66842))))))?app.common.schema.coercer(schema_flatten_66500_66842):null);
var decode_fn_flatten_66499_66844 = app.common.json.__GT_clj;
var prop_get_fn_flatten_66503_66845 = (function (){
var obj_66140_this_66143 = this;
var internal_fn_flatten_66497 = (function (shapes){
if((((!(cljs.core.array_QMARK_(shapes)))) || ((!(cljs.core.every_QMARK_(app.plugins.shape.shape_proxy_QMARK_,shapes)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"flatten-shapes","flatten-shapes",489189922),"Not valid shapes");
} else {
var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__66138_SHARP_){
return app.util.object.get.cljs$core$IFn$_invoke$arity$2(p1__66138_SHARP_,"$id");
})),shapes);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.convert_selected_to_path.cljs$core$IFn$_invoke$arity$1(ids));

}
});
var internal_fn_flatten_66497__$1 = internal_fn_flatten_66497.bind(obj_66140_this_66143);
return internal_fn_flatten_66497__$1;
});
Object.defineProperty(obj_66140_target_66144_66685,Symbol.toStringTag,(function (){var obj66583 = ({"enumerable":false,"get":prop_get_fn__66152_66686});
return obj66583;
})());

Object.defineProperty(obj_66140_target_66144_66685,Symbol["for"]("penpot.reify:type"),(function (){var obj66585 = ({"enumerable":false,"get":prop_get_fn__66159_66687});
return obj66585;
})());

Object.defineProperty(obj_66140_target_66144_66685,"$plugin",(function (){var obj66587 = ({"enumerable":false,"get":prop_get_fn_plugin_66166_66688});
return obj66587;
})());

Object.defineProperty(obj_66140_target_66144_66685,"root",(function (){var obj66589 = ({"enumerable":true,"get":prop_get_fn_root_66173_66689});
return obj66589;
})());

Object.defineProperty(obj_66140_target_66144_66685,"currentFile",(function (){var obj66591 = ({"enumerable":true,"get":prop_get_fn_currentfile_66180_66690});
return obj66591;
})());

Object.defineProperty(obj_66140_target_66144_66685,"currentPage",(function (){var obj66593 = ({"enumerable":true,"get":prop_get_fn_currentpage_66187_66691});
return obj66593;
})());

Object.defineProperty(obj_66140_target_66144_66685,"theme",(function (){var obj66595 = ({"enumerable":true,"get":prop_get_fn_theme_66194_66692});
return obj66595;
})());

Object.defineProperty(obj_66140_target_66144_66685,"localStorage",(function (){var obj66597 = ({"enumerable":true,"get":prop_get_fn_localstorage_66201_66693});
return obj66597;
})());

Object.defineProperty(obj_66140_target_66144_66685,"selection",(function (){var obj66599 = ({"enumerable":true,"get":prop_get_fn_selection_66208_66694,"set":prop_set_fn_selection_66209_66698});
return obj66599;
})());

Object.defineProperty(obj_66140_target_66144_66685,"viewport",(function (){var obj66601 = ({"enumerable":true,"get":prop_get_fn_viewport_66216_66699});
return obj66601;
})());

Object.defineProperty(obj_66140_target_66144_66685,"currentUser",(function (){var obj66603 = ({"enumerable":true,"get":prop_get_fn_currentuser_66223_66700});
return obj66603;
})());

Object.defineProperty(obj_66140_target_66144_66685,"activeUsers",(function (){var obj66605 = ({"enumerable":true,"get":prop_get_fn_activeusers_66230_66701});
return obj66605;
})());

Object.defineProperty(obj_66140_target_66144_66685,"fonts",(function (){var obj66607 = ({"enumerable":true,"get":prop_get_fn_fonts_66237_66702});
return obj66607;
})());

Object.defineProperty(obj_66140_target_66144_66685,"flags",(function (){var obj66609 = ({"enumerable":true,"get":prop_get_fn_flags_66244_66703});
return obj66609;
})());

Object.defineProperty(obj_66140_target_66144_66685,"library",(function (){var obj66611 = ({"enumerable":true,"get":prop_get_fn_library_66251_66704});
return obj66611;
})());

Object.defineProperty(obj_66140_target_66144_66685,"history",(function (){var obj66613 = ({"enumerable":true,"get":prop_get_fn_history_66258_66705});
return obj66613;
})());

Object.defineProperty(obj_66140_target_66144_66685,"addListener",(function (){var obj66615 = ({"enumerable":false,"get":prop_get_fn_addlistener_66265_66709});
return obj66615;
})());

Object.defineProperty(obj_66140_target_66144_66685,"removeListener",(function (){var obj66617 = ({"enumerable":false,"get":prop_get_fn_removelistener_66272_66713});
return obj66617;
})());

Object.defineProperty(obj_66140_target_66144_66685,"getViewport",(function (){var obj66619 = ({"enumerable":false,"get":prop_get_fn_getviewport_66279_66717});
return obj66619;
})());

Object.defineProperty(obj_66140_target_66144_66685,"getFile",(function (){var obj66621 = ({"enumerable":false,"get":prop_get_fn_getfile_66286_66721});
return obj66621;
})());

Object.defineProperty(obj_66140_target_66144_66685,"getPage",(function (){var obj66623 = ({"enumerable":false,"get":prop_get_fn_getpage_66293_66725});
return obj66623;
})());

Object.defineProperty(obj_66140_target_66144_66685,"getSelectedShapes",(function (){var obj66625 = ({"enumerable":false,"get":prop_get_fn_getselectedshapes_66300_66729});
return obj66625;
})());

Object.defineProperty(obj_66140_target_66144_66685,"shapesColors",(function (){var obj66627 = ({"enumerable":false,"get":prop_get_fn_shapescolors_66307_66733});
return obj66627;
})());

Object.defineProperty(obj_66140_target_66144_66685,"replaceColor",(function (){var obj66629 = ({"enumerable":false,"get":prop_get_fn_replacecolor_66314_66737});
return obj66629;
})());

Object.defineProperty(obj_66140_target_66144_66685,"getRoot",(function (){var obj66631 = ({"enumerable":false,"get":prop_get_fn_getroot_66321_66741});
return obj66631;
})());

Object.defineProperty(obj_66140_target_66144_66685,"getTheme",(function (){var obj66633 = ({"enumerable":false,"get":prop_get_fn_gettheme_66328_66745});
return obj66633;
})());

Object.defineProperty(obj_66140_target_66144_66685,"getCurrentUser",(function (){var obj66635 = ({"enumerable":false,"get":prop_get_fn_getcurrentuser_66335_66749});
return obj66635;
})());

Object.defineProperty(obj_66140_target_66144_66685,"getActiveUsers",(function (){var obj66637 = ({"enumerable":false,"get":prop_get_fn_getactiveusers_66342_66753});
return obj66637;
})());

Object.defineProperty(obj_66140_target_66144_66685,"uploadMediaUrl",(function (){var obj66639 = ({"enumerable":false,"get":prop_get_fn_uploadmediaurl_66349_66757});
return obj66639;
})());

Object.defineProperty(obj_66140_target_66144_66685,"uploadMediaData",(function (){var obj66641 = ({"enumerable":false,"get":prop_get_fn_uploadmediadata_66356_66761});
return obj66641;
})());

Object.defineProperty(obj_66140_target_66144_66685,"group",(function (){var obj66643 = ({"enumerable":false,"get":prop_get_fn_group_66363_66765});
return obj66643;
})());

Object.defineProperty(obj_66140_target_66144_66685,"ungroup",(function (){var obj66645 = ({"enumerable":false,"get":prop_get_fn_ungroup_66370_66769});
return obj66645;
})());

Object.defineProperty(obj_66140_target_66144_66685,"createBoard",(function (){var obj66647 = ({"enumerable":false,"get":prop_get_fn_createboard_66377_66773});
return obj66647;
})());

Object.defineProperty(obj_66140_target_66144_66685,"createRectangle",(function (){var obj66649 = ({"enumerable":false,"get":prop_get_fn_createrectangle_66384_66777});
return obj66649;
})());

Object.defineProperty(obj_66140_target_66144_66685,"createEllipse",(function (){var obj66651 = ({"enumerable":false,"get":prop_get_fn_createellipse_66391_66781});
return obj66651;
})());

Object.defineProperty(obj_66140_target_66144_66685,"createPath",(function (){var obj66653 = ({"enumerable":false,"get":prop_get_fn_createpath_66398_66785});
return obj66653;
})());

Object.defineProperty(obj_66140_target_66144_66685,"createText",(function (){var obj66655 = ({"enumerable":false,"get":prop_get_fn_createtext_66405_66789});
return obj66655;
})());

Object.defineProperty(obj_66140_target_66144_66685,"createShapeFromSvg",(function (){var obj66657 = ({"enumerable":false,"get":prop_get_fn_createshapefromsvg_66412_66793});
return obj66657;
})());

Object.defineProperty(obj_66140_target_66144_66685,"createShapeFromSvgWithImages",(function (){var obj66659 = ({"enumerable":false,"get":prop_get_fn_createshapefromsvgwithimages_66419_66797});
return obj66659;
})());

Object.defineProperty(obj_66140_target_66144_66685,"createBoolean",(function (){var obj66661 = ({"enumerable":false,"get":prop_get_fn_createboolean_66426_66801});
return obj66661;
})());

Object.defineProperty(obj_66140_target_66144_66685,"generateMarkup",(function (){var obj66663 = ({"enumerable":false,"get":prop_get_fn_generatemarkup_66433_66805});
return obj66663;
})());

Object.defineProperty(obj_66140_target_66144_66685,"generateStyle",(function (){var obj66665 = ({"enumerable":false,"get":prop_get_fn_generatestyle_66440_66809});
return obj66665;
})());

Object.defineProperty(obj_66140_target_66144_66685,"generateFontFaces",(function (){var obj66667 = ({"enumerable":false,"get":prop_get_fn_generatefontfaces_66447_66813});
return obj66667;
})());

Object.defineProperty(obj_66140_target_66144_66685,"openViewer",(function (){var obj66669 = ({"enumerable":false,"get":prop_get_fn_openviewer_66454_66817});
return obj66669;
})());

Object.defineProperty(obj_66140_target_66144_66685,"createPage",(function (){var obj66671 = ({"enumerable":false,"get":prop_get_fn_createpage_66461_66821});
return obj66671;
})());

Object.defineProperty(obj_66140_target_66144_66685,"openPage",(function (){var obj66673 = ({"enumerable":false,"get":prop_get_fn_openpage_66468_66825});
return obj66673;
})());

Object.defineProperty(obj_66140_target_66144_66685,"alignHorizontal",(function (){var obj66675 = ({"enumerable":false,"get":prop_get_fn_alignhorizontal_66475_66829});
return obj66675;
})());

Object.defineProperty(obj_66140_target_66144_66685,"alignVertical",(function (){var obj66677 = ({"enumerable":false,"get":prop_get_fn_alignvertical_66482_66833});
return obj66677;
})());

Object.defineProperty(obj_66140_target_66144_66685,"distributeHorizontal",(function (){var obj66679 = ({"enumerable":false,"get":prop_get_fn_distributehorizontal_66489_66837});
return obj66679;
})());

Object.defineProperty(obj_66140_target_66144_66685,"distributeVertical",(function (){var obj66681 = ({"enumerable":false,"get":prop_get_fn_distributevertical_66496_66841});
return obj66681;
})());

Object.defineProperty(obj_66140_target_66144_66685,"flatten",(function (){var obj66683 = ({"enumerable":false,"get":prop_get_fn_flatten_66503_66845});
return obj66683;
})());


return obj_66140;
});

//# sourceMappingURL=app.plugins.api.js.map
