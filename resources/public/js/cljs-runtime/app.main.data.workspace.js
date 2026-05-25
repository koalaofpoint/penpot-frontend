import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.attrs.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.helpers.js";
import "./app.common.files.variant.js";
import "./app.common.geom.align.js";
import "./app.common.geom.point.js";
import "./app.common.geom.proportions.js";
import "./app.common.geom.shapes.js";
import "./app.common.logging.js";
import "./app.common.path_names.js";
import "./app.common.transit.js";
import "./app.common.types.component.js";
import "./app.common.types.components_list.js";
import "./app.common.types.shape.js";
import "./app.common.types.variant.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.data.changes.js";
import "./app.main.data.comments.js";
import "./app.main.data.common.js";
import "./app.main.data.event.js";
import "./app.main.data.fonts.js";
import "./app.main.data.helpers.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.data.persistence.js";
import "./app.main.data.plugins.js";
import "./app.main.data.profile.js";
import "./app.main.data.project.js";
import "./app.main.data.workspace.bool.js";
import "./app.main.data.workspace.clipboard.js";
import "./app.main.data.workspace.colors.js";
import "./app.main.data.workspace.comments.js";
import "./app.main.data.workspace.common.js";
import "./app.main.data.workspace.drawing.js";
import "./app.main.data.workspace.edition.js";
import "./app.main.data.workspace.fix_deleted_fonts.js";
import "./app.main.data.workspace.groups.js";
import "./app.main.data.workspace.guides.js";
import "./app.main.data.workspace.highlight.js";
import "./app.main.data.workspace.interactions.js";
import "./app.main.data.workspace.layers.js";
import "./app.main.data.workspace.layout.js";
import "./app.main.data.workspace.libraries.js";
import "./app.main.data.workspace.notifications.js";
import "./app.main.data.workspace.pages.js";
import "./app.main.data.workspace.path.js";
import "./app.main.data.workspace.path.shapes_to_path.js";
import "./app.main.data.workspace.selection.js";
import "./app.main.data.workspace.shape_layout.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.thumbnails.js";
import "./app.main.data.workspace.transforms.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.data.workspace.variants.js";
import "./app.main.data.workspace.viewport.js";
import "./app.main.data.workspace.zoom.js";
import "./app.main.errors.js";
import "./app.main.features.js";
import "./app.main.features.pointer_map.js";
import "./app.main.refs.js";
import "./app.main.repo.js";
import "./app.main.router.js";
import "./app.render_wasm.js";
import "./app.render_wasm.api.js";
import "./app.util.dom.js";
import "./app.util.globals.js";
import "./app.util.http.js";
import "./app.util.perf.js";
import "./app.util.storage.js";
import "./app.util.timers.js";
import "./app.util.webapi.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace');
app.common.logging.loggers.set("app.main.data.workspace",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"info","info",-317069002)));
app.main.data.workspace.initialize_workspace_layout = (function app$main$data$workspace$initialize_workspace_layout(lname){
if((typeof app.main.data.workspace.initialize_layout_51308 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.initialize_layout_51308 = (function (lname,meta51309){
this.lname = lname;
this.meta51309 = meta51309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.initialize_layout_51308.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.initialize_layout_51308.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","initialize-layout","app.main.data.workspace/initialize-layout",-346313965);
}));

(app.main.data.workspace.initialize_layout_51308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51310,meta51309__$1){
var self__ = this;
var _51310__$1 = this;
return (new app.main.data.workspace.initialize_layout_51308(self__.lname,meta51309__$1));
}));

(app.main.data.workspace.initialize_layout_51308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51310){
var self__ = this;
var _51310__$1 = this;
return self__.meta51309;
}));

(app.main.data.workspace.initialize_layout_51308.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.initialize_layout_51308.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-layout","workspace-layout",420938173),(function (p1__51306_SHARP_){
var or__5025__auto__ = p1__51306_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.data.workspace.layout.default_layout;
}
})),new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),(function (p1__51307_SHARP_){
var or__5025__auto__ = p1__51307_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.data.workspace.layout.default_global;
}
}));
}));

(app.main.data.workspace.initialize_layout_51308.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.initialize_layout_51308.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_((function (){var and__5023__auto__ = self__.lname;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.contains_QMARK_(app.main.data.workspace.layout.presets,self__.lname);
} else {
return and__5023__auto__;
}
})())){
return beicon.v2.core.of(app.main.data.workspace.layout.ensure_layout(self__.lname));
} else {
return beicon.v2.core.of(app.main.data.workspace.layout.ensure_layout(new cljs.core.Keyword(null,"layers","layers",1944875032)));
}
}));
}

return (new app.main.data.workspace.initialize_layout_51308(lname,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.datauri__GT_blob_uri = (function app$main$data$workspace$datauri__GT_blob_uri(uri){
return beicon.v2.core.map((function (blob){
return app.util.webapi.create_uri(blob);
}),beicon.v2.core.map(new cljs.core.Keyword(null,"body","body",-2049205669),app.util.http.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"response-type","response-type",-1493770458),new cljs.core.Keyword(null,"blob","blob",1636965233),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755)], null))));
});
app.main.data.workspace.get_file_object_thumbnails = (function app$main$data$workspace$get_file_object_thumbnails(file_id){
return beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentArrayMap.EMPTY,beicon.v2.core.mapcat((function (thumbnails){
return beicon.v2.core.mapcat((function (p__51311){
var vec__51312 = p__51311;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51312,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51312,(1),null);
if(cuerdas.core.starts_with_QMARK_(v,"data:")){
return beicon.v2.core.map((function (uri){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,uri], null);
}),app.main.data.workspace.datauri__GT_blob_uri(v));
} else {
return beicon.v2.core.of(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),beicon.v2.core.from(thumbnails));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-file-object-thumbnails","get-file-object-thumbnails",574280650),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id], null))));
});
app.main.data.workspace.resolve_file = (function app$main$data$workspace$resolve_file(file){
if(app.common.logging.enabled_QMARK_("app.main.data.workspace",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"resolve file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",-1146962336),cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(file))], null)], null);
}),null)),null,null,"app.main.data.workspace",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}


return beicon.v2.core.map((function (data){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file,new cljs.core.Keyword(null,"data","data",-232669377),app.common.data.removem(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.common.transit.pointer_QMARK_,cljs.core.val),data));
}),beicon.v2.core.map(new cljs.core.Keyword(null,"data","data",-232669377),app.main.features.pointer_map.resolve_file(file)));
});
app.main.data.workspace.check_libraries_synchronization = (function app$main$data$workspace$check_libraries_synchronization(file_id,libraries){
if((typeof app.main.data.workspace.check_libraries_synchronization_51316 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.check_libraries_synchronization_51316 = (function (file_id,libraries,meta51317){
this.file_id = file_id;
this.libraries = libraries;
this.meta51317 = meta51317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.check_libraries_synchronization_51316.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.check_libraries_synchronization_51316.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","check-libraries-synchronization","app.main.data.workspace/check-libraries-synchronization",420100831);
}));

(app.main.data.workspace.check_libraries_synchronization_51316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51318,meta51317__$1){
var self__ = this;
var _51318__$1 = this;
return (new app.main.data.workspace.check_libraries_synchronization_51316(self__.file_id,self__.libraries,meta51317__$1));
}));

(app.main.data.workspace.check_libraries_synchronization_51316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51318){
var self__ = this;
var _51318__$1 = this;
return self__.meta51317;
}));

(app.main.data.workspace.check_libraries_synchronization_51316.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.check_libraries_synchronization_51316.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var file = app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$2(state,self__.file_id);
var ignore_until = cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"ignore-sync-until","ignore-sync-until",-722845166));
var needs_check_QMARK_ = cljs.core.some((function (p1__51315_SHARP_){
return (((new cljs.core.Keyword(null,"modified-at","modified-at",-932048179).cljs$core$IFn$_invoke$arity$1(p1__51315_SHARP_) > new cljs.core.Keyword(null,"synced-at","synced-at",98622459).cljs$core$IFn$_invoke$arity$1(p1__51315_SHARP_))) && (((cljs.core.not(ignore_until)) || ((new cljs.core.Keyword(null,"modified-at","modified-at",-932048179).cljs$core$IFn$_invoke$arity$1(p1__51315_SHARP_) > ignore_until)))));
}),self__.libraries);
if(cljs.core.truth_(needs_check_QMARK_)){
return beicon.v2.core.delay((1000),beicon.v2.core.of(app.main.data.workspace.libraries.notify_sync_file()));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.check_libraries_synchronization_51316(file_id,libraries,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.library_resolved = (function app$main$data$workspace$library_resolved(library){
if((typeof app.main.data.workspace.library_resolved_51321 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.library_resolved_51321 = (function (library,meta51322){
this.library = library;
this.meta51322 = meta51322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.library_resolved_51321.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.library_resolved_51321.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","library-resolved","app.main.data.workspace/library-resolved",-944700851);
}));

(app.main.data.workspace.library_resolved_51321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51323,meta51322__$1){
var self__ = this;
var _51323__$1 = this;
return (new app.main.data.workspace.library_resolved_51321(self__.library,meta51322__$1));
}));

(app.main.data.workspace.library_resolved_51321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51323){
var self__ = this;
var _51323__$1 = this;
return self__.meta51322;
}));

(app.main.data.workspace.library_resolved_51321.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.library_resolved_51321.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.library),self__.library);
}));
}

return (new app.main.data.workspace.library_resolved_51321(library,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.fetch_libraries = (function app$main$data$workspace$fetch_libraries(file_id,features__$1){
if((typeof app.main.data.workspace.fetch_libries_51326 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.fetch_libries_51326 = (function (file_id,features,meta51327){
this.file_id = file_id;
this.features = features;
this.meta51327 = meta51327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.fetch_libries_51326.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.fetch_libries_51326.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","fetch-libries","app.main.data.workspace/fetch-libries",-317037973);
}));

(app.main.data.workspace.fetch_libries_51326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51328,meta51327__$1){
var self__ = this;
var _51328__$1 = this;
return (new app.main.data.workspace.fetch_libries_51326(self__.file_id,self__.features,meta51327__$1));
}));

(app.main.data.workspace.fetch_libries_51326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51328){
var self__ = this;
var _51328__$1 = this;
return self__.meta51327;
}));

(app.main.data.workspace.fetch_libries_51326.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.fetch_libries_51326.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
var stopper_s = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace","finalize-workspace","app.main.data.workspace/finalize-workspace",203141404)),stream);
return beicon.v2.core.take_until(stopper_s,beicon.v2.core.concat(beicon.v2.core.mapcat((function (libraries){
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.libraries.libraries_fetched(self__.file_id,libraries)),beicon.v2.core.merge(beicon.v2.core.map(app.main.data.workspace.library_resolved,beicon.v2.core.mapcat(app.main.data.workspace.resolve_file,beicon.v2.core.merge_map((function (p__51329){
var map__51330 = p__51329;
var map__51330__$1 = cljs.core.__destructure_map(map__51330);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51330__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var synced_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51330__$1,new cljs.core.Keyword(null,"synced-at","synced-at",98622459));
return beicon.v2.core.map((function (p1__51325_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__51325_SHARP_,new cljs.core.Keyword(null,"synced-at","synced-at",98622459),synced_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"library-of","library-of",-2050526569),self__.file_id], 0));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-file","get-file",-588292783),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"features","features",-1146962336),self__.features], null)));
}),beicon.v2.core.from(libraries)))),beicon.v2.core.map(app.main.data.workspace.libraries.library_thumbnails_fetched,beicon.v2.core.mapcat((function (file_id__$1){
return app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-file-object-thumbnails","get-file-object-thumbnails",574280650),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),"component"], null));
}),beicon.v2.core.map(new cljs.core.Keyword(null,"id","id",-1388402092),beicon.v2.core.from(libraries))))),beicon.v2.core.of(app.main.data.workspace.check_libraries_synchronization(self__.file_id,libraries)));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-file-libraries","get-file-libraries",-1759425876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id], null))),beicon.v2.core.of(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace","all-libraries-resolved","app.main.data.workspace/all-libraries-resolved",-391037696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id], null)))));
}));
}

return (new app.main.data.workspace.fetch_libries_51326(file_id,features__$1,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.workspace_initialized = (function app$main$data$workspace$workspace_initialized(file_id){
if((typeof app.main.data.workspace.workspace_initialized_51331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.workspace_initialized_51331 = (function (file_id,meta51332){
this.file_id = file_id;
this.meta51332 = meta51332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.workspace_initialized_51331.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.workspace_initialized_51331.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","workspace-initialized","app.main.data.workspace/workspace-initialized",647513818);
}));

(app.main.data.workspace.workspace_initialized_51331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51333,meta51332__$1){
var self__ = this;
var _51333__$1 = this;
return (new app.main.data.workspace.workspace_initialized_51331(self__.file_id,meta51332__$1));
}));

(app.main.data.workspace.workspace_initialized_51331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51333){
var self__ = this;
var _51333__$1 = this;
return self__.meta51332;
}));

(app.main.data.workspace.workspace_initialized_51331.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.workspace_initialized_51331.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"workspace-ready","workspace-ready",418955745),self__.file_id);
}));

(app.main.data.workspace.workspace_initialized_51331.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.workspace_initialized_51331.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.plugins.check_open_plugin(),app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_local_library(self__.file_id));
}));
}

return (new app.main.data.workspace.workspace_initialized_51331(file_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.bundle_fetched = (function app$main$data$workspace$bundle_fetched(p__51334){
var map__51335 = p__51334;
var map__51335__$1 = cljs.core.__destructure_map(map__51335);
var bundle = map__51335__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51335__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51335__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var thumbnails = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51335__$1,new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572));
if((typeof app.main.data.workspace.bundle_fetched_51336 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.bundle_fetched_51336 = (function (p__51334,map__51335,bundle,file,file_id,thumbnails,meta51337){
this.p__51334 = p__51334;
this.map__51335 = map__51335;
this.bundle = bundle;
this.file = file;
this.file_id = file_id;
this.thumbnails = thumbnails;
this.meta51337 = meta51337;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.bundle_fetched_51336.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.bundle_fetched_51336.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","bundle-fetched","app.main.data.workspace/bundle-fetched",1862881298);
}));

(app.main.data.workspace.bundle_fetched_51336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51338,meta51337__$1){
var self__ = this;
var _51338__$1 = this;
return (new app.main.data.workspace.bundle_fetched_51336(self__.p__51334,self__.map__51335,self__.bundle,self__.file,self__.file_id,self__.thumbnails,meta51337__$1));
}));

(app.main.data.workspace.bundle_fetched_51336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51338){
var self__ = this;
var _51338__$1 = this;
return self__.meta51337;
}));

(app.main.data.workspace.bundle_fetched_51336.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.bundle;
}));

(app.main.data.workspace.bundle_fetched_51336.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.bundle_fetched_51336.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572),self__.thumbnails),new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.assoc,self__.file_id,self__.file);
}));
}

return (new app.main.data.workspace.bundle_fetched_51336(p__51334,map__51335__$1,bundle,file,file_id,thumbnails,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.zoom_to_frame = (function app$main$data$workspace$zoom_to_frame(){
if((typeof app.main.data.workspace.zoom_to_frame_51339 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.zoom_to_frame_51339 = (function (meta51340){
this.meta51340 = meta51340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.zoom_to_frame_51339.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom_to_frame_51339.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","zoom-to-frame","app.main.data.workspace/zoom-to-frame",349712294);
}));

(app.main.data.workspace.zoom_to_frame_51339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51341,meta51340__$1){
var self__ = this;
var _51341__$1 = this;
return (new app.main.data.workspace.zoom_to_frame_51339(meta51340__$1));
}));

(app.main.data.workspace.zoom_to_frame_51339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51341){
var self__ = this;
var _51341__$1 = this;
return self__.meta51340;
}));

(app.main.data.workspace.zoom_to_frame_51339.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom_to_frame_51339.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var params = app.main.router.get_params(state);
var board_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"board-id","board-id",-1767919501));
var board_id__$1 = ((cljs.core.vector_QMARK_(board_id))?board_id:((typeof board_id === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [board_id], null):null));
var frames_id = cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.uuid.uuid,board_id__$1));
return beicon.v2.core.of(app.main.data.workspace.selection.select_shapes(frames_id),app.main.data.workspace.zoom.zoom_to_selected_shape);
}));
}

return (new app.main.data.workspace.zoom_to_frame_51339(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Multi-stage file bundle fetch coordinator
 */
app.main.data.workspace.fetch_bundle = (function app$main$data$workspace$fetch_bundle(file_id,features__$1){
if((typeof app.main.data.workspace.fetch_bundle_51347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.fetch_bundle_51347 = (function (file_id,features,meta51348){
this.file_id = file_id;
this.features = features;
this.meta51348 = meta51348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.fetch_bundle_51347.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.fetch_bundle_51347.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","fetch-bundle","app.main.data.workspace/fetch-bundle",1704636394);
}));

(app.main.data.workspace.fetch_bundle_51347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51349,meta51348__$1){
var self__ = this;
var _51349__$1 = this;
return (new app.main.data.workspace.fetch_bundle_51347(self__.file_id,self__.features,meta51348__$1));
}));

(app.main.data.workspace.fetch_bundle_51347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51349){
var self__ = this;
var _51349__$1 = this;
return self__.meta51348;
}));

(app.main.data.workspace.fetch_bundle_51347.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.fetch_bundle_51347.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
if(app.common.logging.enabled_QMARK_("app.main.data.workspace",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"fetch bundle"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),""+(self__.file_id ?? "")], null)], null);
}),null)),null,null,"app.main.data.workspace",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


var stopper_s = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace","finalize-workspace","app.main.data.workspace/finalize-workspace",203141404)),stream);
return beicon.v2.core.take_until(stopper_s,beicon.v2.core.map(app.main.data.workspace.bundle_fetched,beicon.v2.core.mapcat((function (p__51352){
var vec__51353 = p__51352;
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51353,(0),null);
var thumbnails = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51353,(1),null);
return beicon.v2.core.map((function (file__$1){
if(app.common.logging.enabled_QMARK_("app.main.data.workspace",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"file resolved"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id], null)], null);
}),null)),null,null,"app.main.data.workspace",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}


return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),file__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"features","features",-1146962336),self__.features,new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572),thumbnails], null);
}),app.main.data.workspace.resolve_file(file));
}),beicon.v2.core.take((1),beicon.v2.core.zip(app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-file","get-file",-588292783),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.file_id,new cljs.core.Keyword(null,"features","features",-1146962336),self__.features], null)),app.main.data.workspace.get_file_object_thumbnails(self__.file_id))))));
}));
}

return (new app.main.data.workspace.fetch_bundle_51347(file_id,features__$1,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.process_wasm_object = (function app$main$data$workspace$process_wasm_object(id){
if((typeof app.main.data.workspace.process_wasm_object_51357 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.process_wasm_object_51357 = (function (id,meta51358){
this.id = id;
this.meta51358 = meta51358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.process_wasm_object_51357.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.process_wasm_object_51357.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","process-wasm-object","app.main.data.workspace/process-wasm-object",1172493534);
}));

(app.main.data.workspace.process_wasm_object_51357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51359,meta51358__$1){
var self__ = this;
var _51359__$1 = this;
return (new app.main.data.workspace.process_wasm_object_51357(self__.id,meta51358__$1));
}));

(app.main.data.workspace.process_wasm_object_51357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51359){
var self__ = this;
var _51359__$1 = this;
return self__.meta51358;
}));

(app.main.data.workspace.process_wasm_object_51357.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.process_wasm_object_51357.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.id);
if(cljs.core.truth_(shape)){
return app.render_wasm.api.process_object(shape);
} else {
return null;
}
}));
}

return (new app.main.data.workspace.process_wasm_object_51357(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.initialize_workspace = (function app$main$data$workspace$initialize_workspace(team_id,file_id){
if(cljs.core.uuid_QMARK_(team_id)){
} else {
throw (new Error(["Assert failed: ","expected valud uuid for `team-id`","\n","(uuid? team-id)"].join('')));
}

if(cljs.core.uuid_QMARK_(file_id)){
} else {
throw (new Error(["Assert failed: ","expected valud uuid for `file-id`","\n","(uuid? file-id)"].join('')));
}

if((typeof app.main.data.workspace.initialize_workspace_51365 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.initialize_workspace_51365 = (function (team_id,file_id,meta51366){
this.team_id = team_id;
this.file_id = file_id;
this.meta51366 = meta51366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.initialize_workspace_51365.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.initialize_workspace_51365.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","initialize-workspace","app.main.data.workspace/initialize-workspace",401698955);
}));

(app.main.data.workspace.initialize_workspace_51365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51367,meta51366__$1){
var self__ = this;
var _51367__$1 = this;
return (new app.main.data.workspace.initialize_workspace_51365(self__.team_id,self__.file_id,meta51366__$1));
}));

(app.main.data.workspace.initialize_workspace_51365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51367){
var self__ = this;
var _51367__$1 = this;
return self__.meta51366;
}));

(app.main.data.workspace.initialize_workspace_51365.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.initialize_workspace_51365.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"recent-colors","recent-colors",237681180),new cljs.core.Keyword(null,"recent-colors","recent-colors",237681180).cljs$core$IFn$_invoke$arity$1(app.util.storage.user)),new cljs.core.Keyword(null,"recent-fonts","recent-fonts",1734170898),new cljs.core.Keyword(null,"recent-fonts","recent-fonts",1734170898).cljs$core$IFn$_invoke$arity$1(app.util.storage.user)),new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404),self__.file_id),new cljs.core.Keyword(null,"workspace-presence","workspace-presence",-919312096),cljs.core.PersistentArrayMap.EMPTY);
}));

(app.main.data.workspace.initialize_workspace_51365.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.initialize_workspace_51365.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var stoper_s = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace","finalize-workspace","app.main.data.workspace/finalize-workspace",203141404)),stream);
var rparams = app.main.router.get_params(state);
var features__$1 = app.main.features.get_enabled_features(state,self__.team_id);
var render_wasm_QMARK_ = cljs.core.contains_QMARK_(features__$1,"render-wasm/v1");
if(app.common.logging.enabled_QMARK_("app.main.data.workspace",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"initialize-workspace"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),""+(self__.team_id ?? "")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),""+(self__.file_id ?? "")], null)], null);
}),null)),null,null,"app.main.data.workspace",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return beicon.v2.core.take_until(stoper_s,beicon.v2.core.merge(beicon.v2.core.concat(beicon.v2.core.merge(((render_wasm_QMARK_)?beicon.v2.core.ignore(beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (___$2){
var event = app.util.globals.event("penpot:wasm:loaded");
return app.util.globals.dispatch_BANG_(event);
}),beicon.v2.core.filter(cljs.core.true_QMARK_,beicon.v2.core.from(cljs.core.deref(app.render_wasm.module))))):beicon.v2.core.empty()),beicon.v2.core.ignore(beicon.v2.core.take((1),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.fonts","fonts-loaded","app.main.data.fonts/fonts-loaded",484410584)),stream))),beicon.v2.core.of(app.main.data.notifications.hide(),app.main.data.comments.retrieve_comment_threads(self__.file_id),app.main.data.comments.fetch_profiles(),app.main.data.fonts.fetch_fonts(self__.team_id))),beicon.v2.core.of(app.main.data.workspace.fetch_bundle(self__.file_id,features__$1))),beicon.v2.core.mapcat((function (p__51368){
var map__51369 = p__51368;
var map__51369__$1 = cljs.core.__destructure_map(map__51369);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51369__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(app.common.logging.enabled_QMARK_("app.main.data.workspace",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"bundle fetched"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),""+(self__.team_id ?? "")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),""+(self__.file_id ?? "")], null)], null);
}),null)),null,null,"app.main.data.workspace",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return beicon.v2.core.of(app.main.data.project.initialize_project(new cljs.core.Keyword(null,"project-id","project-id",206449307).cljs$core$IFn$_invoke$arity$1(file)),app.main.data.workspace.notifications.initialize(self__.team_id,self__.file_id),app.main.data.workspace.shape_layout.initialize_shape_layout(),app.main.data.workspace.fetch_libraries(self__.file_id,features__$1),cljs.core.with_meta(app.main.data.workspace.workspace_initialized(self__.file_id),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id,new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id], null)));
}),beicon.v2.core.map(cljs.core.deref,beicon.v2.core.take((1),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace","bundle-fetched","app.main.data.workspace/bundle-fetched",1862881298)),stream)))),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"perf-logs","perf-logs",-2006058847)))?beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (___$2){
return app.util.perf.setup();
}),beicon.v2.core.take((1),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace","workspace-initialized","app.main.data.workspace/workspace-initialized",647513818)),stream))):null),beicon.v2.core.map(app.main.data.workspace.common.set_workspace_visited,beicon.v2.core.take((1),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.persistence","persistence-notification","app.main.data.persistence/persistence-notification",-1959405001)),stream))),(function (){var temp__5825__auto__ = (function (){var G__51370 = rparams;
var G__51370__$1 = (((G__51370 == null))?null:new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(G__51370));
if((G__51370__$1 == null)){
return null;
} else {
return app.common.uuid.parse(G__51370__$1);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var component_id = temp__5825__auto__;
return beicon.v2.core.map((function (){
return app.main.data.workspace.libraries.go_to_local_component.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),component_id,new cljs.core.Keyword(null,"update-layout?","update-layout?",-2012814935),new cljs.core.Keyword(null,"update-layout","update-layout",-1904092183).cljs$core$IFn$_invoke$arity$1(rparams)], 0));
}),beicon.v2.core.take((1),beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace","workspace-initialized","app.main.data.workspace/workspace-initialized",647513818)),stream))));
} else {
return null;
}
})(),(cljs.core.truth_(new cljs.core.Keyword(null,"board-id","board-id",-1767919501).cljs$core$IFn$_invoke$arity$1(rparams))?beicon.v2.core.map(app.main.data.workspace.zoom_to_frame,beicon.v2.core.take((1),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.viewport","initialize-viewport","app.main.data.workspace.viewport/initialize-viewport",1754018350)),stream))):null),(function (){var temp__5825__auto__ = (function (){var G__51371 = rparams;
var G__51371__$1 = (((G__51371 == null))?null:new cljs.core.Keyword(null,"comment-id","comment-id",-1387285800).cljs$core$IFn$_invoke$arity$1(G__51371));
if((G__51371__$1 == null)){
return null;
} else {
return app.common.uuid.parse(G__51371__$1);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var comment_id = temp__5825__auto__;
return beicon.v2.core.map((function (){
return app.main.data.workspace.comments.navigate_to_comment_id(comment_id);
}),beicon.v2.core.take((1),beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace","workspace-initialized","app.main.data.workspace/workspace-initialized",647513818)),stream))));
} else {
return null;
}
})(),((render_wasm_QMARK_)?beicon.v2.core.mapcat((function (p__51372){
var map__51373 = p__51372;
var map__51373__$1 = cljs.core.__destructure_map(map__51373);
var redo_changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51373__$1,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824));
var added = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51360_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__51360_SHARP_),new cljs.core.Keyword(null,"add-obj","add-obj",-1569519983));
}),redo_changes));
return beicon.v2.core.map(app.main.data.workspace.process_wasm_object,beicon.v2.core.from(added));
}),beicon.v2.core.map(cljs.core.deref,beicon.v2.core.filter(app.main.data.changes.commit_QMARK_,stream))):null),((render_wasm_QMARK_)?(function (){var local_commits_s = beicon.v2.core.filter(cljs.core.complement(cljs.core.empty_QMARK_),beicon.v2.core.filter((function (p1__51361_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local","local",-1497766724),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(p1__51361_SHARP_))) && ((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(p1__51361_SHARP_),new cljs.core.Keyword(null,"position-data","position-data",-499622376))))));
}),beicon.v2.core.map(cljs.core.deref,beicon.v2.core.filter(app.main.data.changes.commit_QMARK_,stream))));
var notifier_s = beicon.v2.core.merge(beicon.v2.core.debounce((1000),local_commits_s),beicon.v2.core.filter(app.main.data.persistence.force_persist_QMARK_,stream));
var objects_s = beicon.v2.core.from_atom.cljs$core$IFn$_invoke$arity$2(app.main.refs.workspace_page_objects,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"emit-current-value?","emit-current-value?",56289147),true], null));
var current_page_id_s = beicon.v2.core.from_atom.cljs$core$IFn$_invoke$arity$2(app.main.refs.current_page_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"emit-current-value?","emit-current-value?",56289147),true], null));
return beicon.v2.core.take_until(stoper_s,beicon.v2.core.map((function (p__51374){
var vec__51375 = p__51374;
var text_position_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51375,(0),null);
var page_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51375,(1),null);
var changes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__51378){
var vec__51379 = p__51378;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51379,(0),null);
var position_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51379,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"operations","operations",1630691895),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"position-data","position-data",-499622376),new cljs.core.Keyword(null,"val","val",128701612),position_data,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"ignore-geometry","ignore-geometry",1630780695),true], null)], null)], null);
}),text_position_data);
if(app.common.data.not_empty_QMARK_(changes)){
return app.main.data.changes.commit_changes(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),changes,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853),false,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position-data","position-data",-499622376),null], null), null)], null));
} else {
return null;
}
}),beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$2(current_page_id_s,beicon.v2.core.map((function (p__51382){
var vec__51383 = p__51382;
var commits = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51383,(0),null);
var objects = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51383,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51364_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51364_SHARP_),app.render_wasm.api.calculate_position_data(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51364_SHARP_)))],null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51363_SHARP_){
return app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51363_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51362_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),null,new cljs.core.Keyword(null,"add-obj","add-obj",-1569519983),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__51362_SHARP_));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([commits], 0)))));
}),beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$2(objects_s,beicon.v2.core.buffer_until(notifier_s,local_commits_s))))));
})():null),beicon.v2.core.mapcat((function (p__51386){
var map__51387 = p__51386;
var map__51387__$1 = cljs.core.__destructure_map(map__51387);
var save_undo_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51387__$1,new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853));
var undo_changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51387__$1,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692));
var redo_changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51387__$1,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824));
var undo_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51387__$1,new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51387__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var stack_undo_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51387__$1,new cljs.core.Keyword(null,"stack-undo?","stack-undo?",1633924062));
if(cljs.core.truth_((function (){var and__5023__auto__ = save_undo_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.seq(undo_changes);
} else {
return and__5023__auto__;
}
})())){
var entry = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),undo_changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),redo_changes,new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),undo_group,new cljs.core.Keyword(null,"tags","tags",1771418977),tags], null);
return beicon.v2.core.of(app.main.data.workspace.undo.append_undo(entry,stack_undo_QMARK_));
} else {
return beicon.v2.core.empty();
}
}),beicon.v2.core.map(cljs.core.deref,beicon.v2.core.filter(app.main.data.changes.commit_QMARK_,stream)))));
}));

(app.main.data.workspace.initialize_workspace_51365.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.initialize_workspace_51365.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var name = ""+"workspace-"+(self__.file_id ?? "");
return (app.util.globals.global["name"] = name);
}));
}

return (new app.main.data.workspace.initialize_workspace_51365(team_id,file_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.finalize_workspace = (function app$main$data$workspace$finalize_workspace(_team_id,file_id){
if((typeof app.main.data.workspace.finalize_workspace_51389 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.finalize_workspace_51389 = (function (_team_id,file_id,meta51390){
this._team_id = _team_id;
this.file_id = file_id;
this.meta51390 = meta51390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.finalize_workspace_51389.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.finalize_workspace_51389.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","finalize-workspace","app.main.data.workspace/finalize-workspace",203141404);
}));

(app.main.data.workspace.finalize_workspace_51389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51391,meta51390__$1){
var self__ = this;
var _51391__$1 = this;
return (new app.main.data.workspace.finalize_workspace_51389(self__._team_id,self__.file_id,meta51390__$1));
}));

(app.main.data.workspace.finalize_workspace_51389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51391){
var self__ = this;
var _51391__$1 = this;
return self__.meta51390;
}));

(app.main.data.workspace.finalize_workspace_51389.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.finalize_workspace_51389.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"workspace-editor-state","workspace-editor-state",-794384251),new cljs.core.Keyword(null,"workspace-media-objects","workspace-media-objects",-1373417168),new cljs.core.Keyword(null,"workspace-persistence","workspace-persistence",2007839858),new cljs.core.Keyword(null,"workspace-presence","workspace-presence",-919312096),new cljs.core.Keyword(null,"workspace-tokens","workspace-tokens",-15136920),new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606)], 0)),new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),cljs.core.dissoc,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"options-mode","options-mode",-1788898697)], null),new cljs.core.Keyword(null,"design","design",1241338903)),new cljs.core.Keyword(null,"files","files",-472457450),app.common.data.update_vals,(function (p1__51388_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51388_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377));
}));
}));

(app.main.data.workspace.finalize_workspace_51389.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.finalize_workspace_51389.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var project_id = new cljs.core.Keyword(null,"current-project-id","current-project-id",1950829814).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.of(app.main.data.workspace.notifications.finalize(self__.file_id),app.main.data.project.finalize_project(project_id),app.main.data.workspace.shape_layout.finalize_shape_layout(),app.main.data.workspace.colors.stop_picker(),app.main.data.workspace.common.set_workspace_visited(),app.main.data.modal.hide(),app.main.data.notifications.hide());
}));
}

return (new app.main.data.workspace.finalize_workspace_51389(_team_id,file_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.reload_current_file = (function app$main$data$workspace$reload_current_file(){
if((typeof app.main.data.workspace.reload_current_file_51392 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.reload_current_file_51392 = (function (meta51393){
this.meta51393 = meta51393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.reload_current_file_51392.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.reload_current_file_51392.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","reload-current-file","app.main.data.workspace/reload-current-file",-807745136);
}));

(app.main.data.workspace.reload_current_file_51392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51394,meta51393__$1){
var self__ = this;
var _51394__$1 = this;
return (new app.main.data.workspace.reload_current_file_51392(meta51393__$1));
}));

(app.main.data.workspace.reload_current_file_51392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51394){
var self__ = this;
var _51394__$1 = this;
return self__.meta51393;
}));

(app.main.data.workspace.reload_current_file_51392.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.reload_current_file_51392.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.of(app.main.data.workspace.initialize_workspace(team_id,file_id));
}));
}

return (new app.main.data.workspace.reload_current_file_51392(cljs.core.PersistentArrayMap.EMPTY));
});
potok.v2.core.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("app.main.data.workspace","reload-current-file","app.main.data.workspace/reload-current-file",-807745136),(function (_,___$1){
return app.main.data.workspace.reload_current_file();
}));
app.main.data.workspace.rename_file = (function app$main$data$workspace$rename_file(id,name){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error("Assert failed: (uuid? id)"));
}

if(typeof name === 'string'){
} else {
throw (new Error("Assert failed: (string? name)"));
}

var name__$1 = app.common.data.macros.truncate(name,(200));
if((typeof app.main.data.workspace.rename_file_51395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IDeref}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.rename_file_51395 = (function (id,name,meta51396){
this.id = id;
this.name = name;
this.meta51396 = meta51396;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.rename_file_51395.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.rename_file_51395.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","rename-file","app.main.data.workspace/rename-file",-1400530581);
}));

(app.main.data.workspace.rename_file_51395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51397,meta51396__$1){
var self__ = this;
var _51397__$1 = this;
return (new app.main.data.workspace.rename_file_51395(self__.id,self__.name,meta51396__$1));
}));

(app.main.data.workspace.rename_file_51395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51397){
var self__ = this;
var _51397__$1 = this;
return self__.meta51396;
}));

(app.main.data.workspace.rename_file_51395.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace",new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"name","name",1843675177),self__.name], null);
}));

(app.main.data.workspace.rename_file_51395.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.rename_file_51395.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),file_id,new cljs.core.Keyword(null,"name","name",1843675177)], null),self__.name);
}));

(app.main.data.workspace.rename_file_51395.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.rename_file_51395.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"name","name",1843675177),self__.name], null);
return beicon.v2.core.ignore(app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rename-file","rename-file",-1507579634),params));
}));
}

return (new app.main.data.workspace.rename_file_51395(id,name__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * @param {...*} var_args
 */
app.main.data.workspace.toggle_layout_flag = (function() { 
var app$main$data$workspace$toggle_layout_flag__delegate = function (param51398,param51399){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(app.main.data.workspace.layout.toggle_layout_flag,param51398,param51399);
};
var app$main$data$workspace$toggle_layout_flag = function (param51398,var_args){
var param51399 = null;
if (arguments.length > 1) {
var G__52000__i = 0, G__52000__a = new Array(arguments.length -  1);
while (G__52000__i < G__52000__a.length) {G__52000__a[G__52000__i] = arguments[G__52000__i + 1]; ++G__52000__i;}
  param51399 = new cljs.core.IndexedSeq(G__52000__a,0,null);
} 
return app$main$data$workspace$toggle_layout_flag__delegate.call(this,param51398,param51399);};
app$main$data$workspace$toggle_layout_flag.cljs$lang$maxFixedArity = 1;
app$main$data$workspace$toggle_layout_flag.cljs$lang$applyTo = (function (arglist__52002){
var param51398 = cljs.core.first(arglist__52002);
var param51399 = cljs.core.rest(arglist__52002);
return app$main$data$workspace$toggle_layout_flag__delegate(param51398,param51399);
});
app$main$data$workspace$toggle_layout_flag.cljs$core$IFn$_invoke$arity$variadic = app$main$data$workspace$toggle_layout_flag__delegate;
return app$main$data$workspace$toggle_layout_flag;
})()
;
app.main.data.workspace.remove_layout_flag = (function app$main$data$workspace$remove_layout_flag(param51400){
return app.main.data.workspace.layout.remove_layout_flag(param51400);
});
app.main.data.workspace.update_nudge = (function app$main$data$workspace$update_nudge(p__51401){
var map__51402 = p__51401;
var map__51402__$1 = cljs.core.__destructure_map(map__51402);
var params = map__51402__$1;
var big = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51402__$1,new cljs.core.Keyword(null,"big","big",903550151));
var small = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51402__$1,new cljs.core.Keyword(null,"small","small",2133478704));
if((typeof app.main.data.workspace.update_nudge_51403 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IDeref}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.update_nudge_51403 = (function (p__51401,map__51402,params,big,small,meta51404){
this.p__51401 = p__51401;
this.map__51402 = map__51402;
this.params = params;
this.big = big;
this.small = small;
this.meta51404 = meta51404;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.update_nudge_51403.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.update_nudge_51403.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","update-nudge","app.main.data.workspace/update-nudge",726860706);
}));

(app.main.data.workspace.update_nudge_51403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51405,meta51404__$1){
var self__ = this;
var _51405__$1 = this;
return (new app.main.data.workspace.update_nudge_51403(self__.p__51401,self__.map__51402,self__.params,self__.big,self__.small,meta51404__$1));
}));

(app.main.data.workspace.update_nudge_51403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51405){
var self__ = this;
var _51405__$1 = this;
return self__.meta51404;
}));

(app.main.data.workspace.update_nudge_51403.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(self__.params);
}));

(app.main.data.workspace.update_nudge_51403.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.update_nudge_51403.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"nudge","nudge",-715499585)], null),(function (nudge){
var G__51406 = nudge;
var G__51406__$1 = ((typeof self__.big === 'number')?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51406,new cljs.core.Keyword(null,"big","big",903550151),self__.big):G__51406);
if(typeof self__.small === 'number'){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51406__$1,new cljs.core.Keyword(null,"small","small",2133478704),self__.small);
} else {
return G__51406__$1;
}
}));
}));

(app.main.data.workspace.update_nudge_51403.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.update_nudge_51403.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var nudge = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"nudge","nudge",-715499585)], null));
return beicon.v2.core.of(app.main.data.profile.update_profile_props(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nudge","nudge",-715499585),nudge], null)));
}));
}

return (new app.main.data.workspace.update_nudge_51403(p__51401,map__51402__$1,params,big,small,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.set_options_mode = (function app$main$data$workspace$set_options_mode(param51407){
return app.main.data.workspace.layout.set_options_mode(param51407);
});
app.main.data.workspace.assign_cursor_tooltip = (function app$main$data$workspace$assign_cursor_tooltip(content){
if((typeof app.main.data.workspace.assign_cursor_tooltip_51408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.assign_cursor_tooltip_51408 = (function (content,meta51409){
this.content = content;
this.meta51409 = meta51409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.assign_cursor_tooltip_51408.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.assign_cursor_tooltip_51408.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","assign-cursor-tooltip","app.main.data.workspace/assign-cursor-tooltip",2023856478);
}));

(app.main.data.workspace.assign_cursor_tooltip_51408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51410,meta51409__$1){
var self__ = this;
var _51410__$1 = this;
return (new app.main.data.workspace.assign_cursor_tooltip_51408(self__.content,meta51409__$1));
}));

(app.main.data.workspace.assign_cursor_tooltip_51408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51410){
var self__ = this;
var _51410__$1 = this;
return self__.meta51409;
}));

(app.main.data.workspace.assign_cursor_tooltip_51408.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.assign_cursor_tooltip_51408.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if(typeof self__.content === 'string'){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058)], null),self__.content);
} else {
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058)], null),null);
}
}));
}

return (new app.main.data.workspace.assign_cursor_tooltip_51408(content,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.update_shape = (function app$main$data$workspace$update_shape(id,attrs){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","expected valid uuid for `id`","\n","(uuid? id)"].join('')));
}

var attrs__$1 = app.common.types.shape.check_shape_generic_attrs(attrs);
if((typeof app.main.data.workspace.update_shape_51412 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.update_shape_51412 = (function (id,attrs,meta51413){
this.id = id;
this.attrs = attrs;
this.meta51413 = meta51413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.update_shape_51412.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.update_shape_51412.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","update-shape","app.main.data.workspace/update-shape",-1091008128);
}));

(app.main.data.workspace.update_shape_51412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51414,meta51413__$1){
var self__ = this;
var _51414__$1 = this;
return (new app.main.data.workspace.update_shape_51412(self__.id,self__.attrs,meta51413__$1));
}));

(app.main.data.workspace.update_shape_51412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51414){
var self__ = this;
var _51414__$1 = this;
return self__.meta51413;
}));

(app.main.data.workspace.update_shape_51412.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.update_shape_51412.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.id], null),(function (p1__51411_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__51411_SHARP_,self__.attrs], 0));
})));
}));
}

return (new app.main.data.workspace.update_shape_51412(id,attrs__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Start shape renaming process
 */
app.main.data.workspace.start_rename_shape = (function app$main$data$workspace$start_rename_shape(id){
app.common.data.macros.runtime_assert("expr assert: (uuid? id)",(function (){
return cljs.core.uuid_QMARK_(id);
}));

if((typeof app.main.data.workspace.start_rename_shape_51415 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.start_rename_shape_51415 = (function (id,meta51416){
this.id = id;
this.meta51416 = meta51416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.start_rename_shape_51415.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.start_rename_shape_51415.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","start-rename-shape","app.main.data.workspace/start-rename-shape",1803085729);
}));

(app.main.data.workspace.start_rename_shape_51415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51417,meta51416__$1){
var self__ = this;
var _51417__$1 = this;
return (new app.main.data.workspace.start_rename_shape_51415(self__.id,meta51416__$1));
}));

(app.main.data.workspace.start_rename_shape_51415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51417){
var self__ = this;
var _51417__$1 = this;
return self__.meta51416;
}));

(app.main.data.workspace.start_rename_shape_51415.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.start_rename_shape_51415.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"shape-for-rename","shape-for-rename",2104336641)], null),self__.id);
}));
}

return (new app.main.data.workspace.start_rename_shape_51415(id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * End the ongoing shape rename process
 */
app.main.data.workspace.end_rename_shape = (function app$main$data$workspace$end_rename_shape(var_args){
var G__51419 = arguments.length;
switch (G__51419) {
case 0:
return app.main.data.workspace.end_rename_shape.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return app.main.data.workspace.end_rename_shape.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.end_rename_shape.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.workspace.end_rename_shape.cljs$core$IFn$_invoke$arity$2(null,null);
}));

(app.main.data.workspace.end_rename_shape.cljs$core$IFn$_invoke$arity$2 = (function (shape_id,name){
if((typeof app.main.data.workspace.end_rename_shape_51420 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.end_rename_shape_51420 = (function (shape_id,name,meta51421){
this.shape_id = shape_id;
this.name = name;
this.meta51421 = meta51421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.end_rename_shape_51420.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.end_rename_shape_51420.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","end-rename-shape","app.main.data.workspace/end-rename-shape",1266093757);
}));

(app.main.data.workspace.end_rename_shape_51420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51422,meta51421__$1){
var self__ = this;
var _51422__$1 = this;
return (new app.main.data.workspace.end_rename_shape_51420(self__.shape_id,self__.name,meta51421__$1));
}));

(app.main.data.workspace.end_rename_shape_51420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51422){
var self__ = this;
var _51422__$1 = this;
return self__.meta51421;
}));

(app.main.data.workspace.end_rename_shape_51420.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.end_rename_shape_51420.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),cljs.core.dissoc,new cljs.core.Keyword(null,"shape-for-rename","shape-for-rename",2104336641));
}));

(app.main.data.workspace.end_rename_shape_51420.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.end_rename_shape_51420.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var temp__5825__auto__ = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(self__.shape_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"shape-for-rename","shape-for-rename",2104336641)));
if(cljs.core.truth_(temp__5825__auto__)){
var shape_id__$1 = temp__5825__auto__;
var shape = app.main.data.helpers.lookup_shape.cljs$core$IFn$_invoke$arity$2(state,shape_id__$1);
var name__$1 = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(self__.name);
var clean_name = app.common.path_names.clean_path(name__$1);
var valid_QMARK_ = (((!(cuerdas.core.ends_with_QMARK_(name__$1,"/")))) && (((typeof clean_name === 'string') && ((!(cuerdas.core.blank_QMARK_(clean_name)))))));
var component_id = new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape);
var undo_id = Symbol();
if(valid_QMARK_){
if(cljs.core.truth_(app.common.types.component.is_variant_container_QMARK_(shape))){
return beicon.v2.core.of(app.main.data.workspace.variants.rename_variant(shape_id__$1,clean_name));
} else {
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.update_shape(shape_id__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),clean_name], null)),(((((!((component_id == null)))) && (app.common.types.component.main_instance_QMARK_(shape))))?app.main.data.workspace.libraries.rename_component(component_id,clean_name):null),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}
} else {
return null;
}
} else {
return null;
}
}));
}

return (new app.main.data.workspace.end_rename_shape_51420(shape_id,name,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.end_rename_shape.cljs$lang$maxFixedArity = 2);

app.main.data.workspace.rename_shape_or_variant = (function app$main$data$workspace$rename_shape_or_variant(var_args){
var G__51424 = arguments.length;
switch (G__51424) {
case 2:
return app.main.data.workspace.rename_shape_or_variant.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return app.main.data.workspace.rename_shape_or_variant.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.rename_shape_or_variant.cljs$core$IFn$_invoke$arity$2 = (function (id,name){
return app.main.data.workspace.rename_shape_or_variant.cljs$core$IFn$_invoke$arity$4(null,null,id,name);
}));

(app.main.data.workspace.rename_shape_or_variant.cljs$core$IFn$_invoke$arity$4 = (function (file_id,page_id,id,name){
if((typeof app.main.data.workspace.rename_shape_or_variant_51425 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.rename_shape_or_variant_51425 = (function (file_id,page_id,id,name,meta51426){
this.file_id = file_id;
this.page_id = page_id;
this.id = id;
this.name = name;
this.meta51426 = meta51426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.rename_shape_or_variant_51425.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.rename_shape_or_variant_51425.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","rename-shape-or-variant","app.main.data.workspace/rename-shape-or-variant",-1027514045);
}));

(app.main.data.workspace.rename_shape_or_variant_51425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51427,meta51426__$1){
var self__ = this;
var _51427__$1 = this;
return (new app.main.data.workspace.rename_shape_or_variant_51425(self__.file_id,self__.page_id,self__.id,self__.name,meta51426__$1));
}));

(app.main.data.workspace.rename_shape_or_variant_51425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51427){
var self__ = this;
var _51427__$1 = this;
return self__.meta51426;
}));

(app.main.data.workspace.rename_shape_or_variant_51425.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.rename_shape_or_variant_51425.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var file_id__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(self__.file_id,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state));
var page_id__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(self__.page_id,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state));
var file_data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,file_id__$1);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$3(state,file_id__$1,page_id__$1),self__.id);
var is_variant_QMARK_ = app.common.types.component.is_variant_QMARK_(shape);
var variant_id = ((is_variant_QMARK_)?new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(shape):null);
var variant_name = ((is_variant_QMARK_)?new cljs.core.Keyword(null,"variant-name","variant-name",-1785573622).cljs$core$IFn$_invoke$arity$1(shape):null);
var component_id = new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape);
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2(file_data,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape));
var variant_properties = new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(component);
if(cljs.core.truth_((function (){var and__5023__auto__ = variant_name;
if(cljs.core.truth_(and__5023__auto__)){
return app.common.types.variant.valid_properties_formula_QMARK_(self__.name);
} else {
return and__5023__auto__;
}
})())){
return beicon.v2.core.of(app.main.data.workspace.variants.update_properties_names_and_values(component_id,variant_id,variant_properties,app.common.types.variant.properties_formula__GT_map(self__.name)),app.main.data.workspace.variants.remove_empty_properties(variant_id),app.main.data.workspace.variants.update_error.cljs$core$IFn$_invoke$arity$1(component_id));
} else {
if(cljs.core.truth_(variant_name)){
return beicon.v2.core.of(app.main.data.workspace.variants.update_properties_names_and_values(component_id,variant_id,variant_properties,cljs.core.PersistentArrayMap.EMPTY),app.main.data.workspace.variants.remove_empty_properties(variant_id),app.main.data.workspace.variants.update_error.cljs$core$IFn$_invoke$arity$2(component_id,self__.name));
} else {
return beicon.v2.core.of(app.main.data.workspace.end_rename_shape.cljs$core$IFn$_invoke$arity$2(self__.id,self__.name));

}
}
}));
}

return (new app.main.data.workspace.rename_shape_or_variant_51425(file_id,page_id,id,name,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.rename_shape_or_variant.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.update_selected_shapes = (function app$main$data$workspace$update_selected_shapes(attrs){
if((typeof app.main.data.workspace.update_selected_shapes_51429 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.update_selected_shapes_51429 = (function (attrs,meta51430){
this.attrs = attrs;
this.meta51430 = meta51430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.update_selected_shapes_51429.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.update_selected_shapes_51429.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","update-selected-shapes","app.main.data.workspace/update-selected-shapes",683937235);
}));

(app.main.data.workspace.update_selected_shapes_51429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51431,meta51430__$1){
var self__ = this;
var _51431__$1 = this;
return (new app.main.data.workspace.update_selected_shapes_51429(self__.attrs,meta51430__$1));
}));

(app.main.data.workspace.update_selected_shapes_51429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51431){
var self__ = this;
var _51431__$1 = this;
return self__.meta51430;
}));

(app.main.data.workspace.update_selected_shapes_51429.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.update_selected_shapes_51429.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.from(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51428_SHARP_){
return app.main.data.workspace.update_shape(p1__51428_SHARP_,self__.attrs);
}),selected));
}));
}

return (new app.main.data.workspace.update_selected_shapes_51429(attrs,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deselect all and remove all selected shapes.
 */
app.main.data.workspace.delete_selected = (function app$main$data$workspace$delete_selected(){
if((typeof app.main.data.workspace.delete_selected_51432 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.delete_selected_51432 = (function (meta51433){
this.meta51433 = meta51433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.delete_selected_51432.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.delete_selected_51432.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","delete-selected","app.main.data.workspace/delete-selected",-1780665429);
}));

(app.main.data.workspace.delete_selected_51432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51434,meta51433__$1){
var self__ = this;
var _51434__$1 = this;
return (new app.main.data.workspace.delete_selected_51432(meta51433__$1));
}));

(app.main.data.workspace.delete_selected_51432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51434){
var self__ = this;
var _51434__$1 = this;
return self__.meta51433;
}));

(app.main.data.workspace.delete_selected_51432.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.delete_selected_51432.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var hover_guides = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-guides","workspace-guides",-728045274),new cljs.core.Keyword(null,"hover","hover",-341141711)], null));
if(app.common.data.not_empty_QMARK_(selected)){
return beicon.v2.core.of(app.main.data.workspace.shapes.delete_shapes.cljs$core$IFn$_invoke$arity$1(selected),app.main.data.workspace.selection.deselect_all.cljs$core$IFn$_invoke$arity$0());
} else {
if(app.common.data.not_empty_QMARK_(hover_guides)){
return beicon.v2.core.of(app.main.data.workspace.guides.remove_guides(hover_guides));
} else {
return null;
}
}
}));
}

return (new app.main.data.workspace.delete_selected_51432(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Rename selected shape.
 */
app.main.data.workspace.start_rename_selected = (function app$main$data$workspace$start_rename_selected(){
if((typeof app.main.data.workspace.start_rename_selected_51435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.start_rename_selected_51435 = (function (meta51436){
this.meta51436 = meta51436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.start_rename_selected_51435.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.start_rename_selected_51435.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","start-rename-selected","app.main.data.workspace/start-rename-selected",2047765576);
}));

(app.main.data.workspace.start_rename_selected_51435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51437,meta51436__$1){
var self__ = this;
var _51437__$1 = this;
return (new app.main.data.workspace.start_rename_selected_51435(meta51436__$1));
}));

(app.main.data.workspace.start_rename_selected_51435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51437){
var self__ = this;
var _51437__$1 = this;
return self__.meta51436;
}));

(app.main.data.workspace.start_rename_selected_51435.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.start_rename_selected_51435.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var id = cljs.core.first(selected);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected),(1))){
return beicon.v2.core.of(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"layers","layers",1944875032)], 0)),app.main.data.workspace.start_rename_shape(id));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.start_rename_selected_51435(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.valid_vertical_locations = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"down","down",1565245570),null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null,new cljs.core.Keyword(null,"top","top",-1856271961),null,new cljs.core.Keyword(null,"up","up",-269712113),null], null), null);
app.main.data.workspace.vertical_order_selected = (function app$main$data$workspace$vertical_order_selected(loc){
app.common.data.macros.runtime_assert("expected valid location",(function (){
return cljs.core.contains_QMARK_(app.main.data.workspace.valid_vertical_locations,loc);
}));

if((typeof app.main.data.workspace.vertical_order_selected_51438 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.vertical_order_selected_51438 = (function (loc,meta51439){
this.loc = loc;
this.meta51439 = meta51439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.vertical_order_selected_51438.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.vertical_order_selected_51438.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","vertical-order-selected","app.main.data.workspace/vertical-order-selected",826004224);
}));

(app.main.data.workspace.vertical_order_selected_51438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51440,meta51439__$1){
var self__ = this;
var _51440__$1 = this;
return (new app.main.data.workspace.vertical_order_selected_51438(self__.loc,meta51439__$1));
}));

(app.main.data.workspace.vertical_order_selected_51438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51440){
var self__ = this;
var _51440__$1 = this;
return self__.meta51439;
}));

(app.main.data.workspace.vertical_order_selected_51438.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.vertical_order_selected_51438.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var selected_ids = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var selected_shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),selected_ids);
var undo_id = Symbol();
var move_shape = (function (changes,shape){
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
var sibling_ids = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent);
var current_index = app.common.data.index_of(sibling_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
var index_in_selection = app.common.data.index_of(selected_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
var new_index = (function (){var G__51441 = self__.loc;
var G__51441__$1 = (((G__51441 instanceof cljs.core.Keyword))?G__51441.fqn:null);
switch (G__51441__$1) {
case "top":
return cljs.core.count(sibling_ids);

break;
case "down":
var x__5110__auto__ = (0);
var y__5111__auto__ = (current_index - (1));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);

break;
case "up":
var x__5113__auto__ = cljs.core.count(sibling_ids);
var y__5114__auto__ = ((current_index + (1)) + (1));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);

break;
case "bottom":
return index_in_selection;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51441__$1)].join('')));

}
})();
return app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null),new_index);
});
var changes = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(move_shape,app.common.files.changes_builder.with_objects(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),objects),selected_shapes);
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),selected_ids], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.vertical_order_selected_51438(loc,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.set_shape_index = (function app$main$data$workspace$set_shape_index(file_id,page_id,id,new_index){
if((typeof app.main.data.workspace.set_shape_index_51442 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.set_shape_index_51442 = (function (file_id,page_id,id,new_index,meta51443){
this.file_id = file_id;
this.page_id = page_id;
this.id = id;
this.new_index = new_index;
this.meta51443 = meta51443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.set_shape_index_51442.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_shape_index_51442.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","set-shape-index","app.main.data.workspace/set-shape-index",-1785790840);
}));

(app.main.data.workspace.set_shape_index_51442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51444,meta51443__$1){
var self__ = this;
var _51444__$1 = this;
return (new app.main.data.workspace.set_shape_index_51442(self__.file_id,self__.page_id,self__.id,self__.new_index,meta51443__$1));
}));

(app.main.data.workspace.set_shape_index_51442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51444){
var self__ = this;
var _51444__$1 = this;
return self__.meta51443;
}));

(app.main.data.workspace.set_shape_index_51442.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_shape_index_51442.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var file_id__$1 = (function (){var or__5025__auto__ = self__.file_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
}
})();
var page_id__$1 = (function (){var or__5025__auto__ = self__.page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
}
})();
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$3(state,file_id__$1,page_id__$1);
var undo_id = Symbol();
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.id);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
var current_index = app.common.data.index_of(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent),self__.id);
var new_index__$1 = (((self__.new_index > current_index))?(self__.new_index + (1)):self__.new_index);
var changes = app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$4(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id__$1),objects),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null),new_index__$1);
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.id], null)], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.set_shape_index_51442(file_id,page_id,id,new_index,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.reorder_children = (function app$main$data$workspace$reorder_children(file_id,page_id,parent_id,children){
if((typeof app.main.data.workspace.reorder_children_51445 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.reorder_children_51445 = (function (file_id,page_id,parent_id,children,meta51446){
this.file_id = file_id;
this.page_id = page_id;
this.parent_id = parent_id;
this.children = children;
this.meta51446 = meta51446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.reorder_children_51445.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.reorder_children_51445.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","reorder-children","app.main.data.workspace/reorder-children",-163468785);
}));

(app.main.data.workspace.reorder_children_51445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51447,meta51446__$1){
var self__ = this;
var _51447__$1 = this;
return (new app.main.data.workspace.reorder_children_51445(self__.file_id,self__.page_id,self__.parent_id,self__.children,meta51446__$1));
}));

(app.main.data.workspace.reorder_children_51445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51447){
var self__ = this;
var _51447__$1 = this;
return self__.meta51446;
}));

(app.main.data.workspace.reorder_children_51445.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.reorder_children_51445.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var file_id__$1 = (function (){var or__5025__auto__ = self__.file_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
}
})();
var page_id__$1 = (function (){var or__5025__auto__ = self__.page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
}
})();
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$3(state,file_id__$1,page_id__$1);
var undo_id = Symbol();
var changes = app.common.files.changes_builder.reorder_children(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id__$1),objects),self__.parent_id,self__.children);
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.parent_id], null)], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.reorder_children_51445(file_id,page_id,parent_id,children,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.relocate_selected_shapes = (function app$main$data$workspace$relocate_selected_shapes(parent_id,to_index){
if((typeof app.main.data.workspace.relocate_selected_shapes_51448 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.relocate_selected_shapes_51448 = (function (parent_id,to_index,meta51449){
this.parent_id = parent_id;
this.to_index = to_index;
this.meta51449 = meta51449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.relocate_selected_shapes_51448.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.relocate_selected_shapes_51448.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","relocate-selected-shapes","app.main.data.workspace/relocate-selected-shapes",-426112807);
}));

(app.main.data.workspace.relocate_selected_shapes_51448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51450,meta51449__$1){
var self__ = this;
var _51450__$1 = this;
return (new app.main.data.workspace.relocate_selected_shapes_51448(self__.parent_id,self__.to_index,meta51449__$1));
}));

(app.main.data.workspace.relocate_selected_shapes_51448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51450){
var self__ = this;
var _51450__$1 = this;
return self__.meta51449;
}));

(app.main.data.workspace.relocate_selected_shapes_51448.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.relocate_selected_shapes_51448.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.of(app.main.data.workspace.shapes.relocate_shapes(selected,self__.parent_id,self__.to_index));
}));
}

return (new app.main.data.workspace.relocate_selected_shapes_51448(parent_id,to_index,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.start_editing_selected = (function app$main$data$workspace$start_editing_selected(){
if((typeof app.main.data.workspace.start_editing_selected_51451 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.start_editing_selected_51451 = (function (meta51452){
this.meta51452 = meta51452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.start_editing_selected_51451.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.start_editing_selected_51451.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","start-editing-selected","app.main.data.workspace/start-editing-selected",-2103360348);
}));

(app.main.data.workspace.start_editing_selected_51451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51453,meta51452__$1){
var self__ = this;
var _51453__$1 = this;
return (new app.main.data.workspace.start_editing_selected_51451(meta51452__$1));
}));

(app.main.data.workspace.start_editing_selected_51451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51453){
var self__ = this;
var _51453__$1 = this;
return self__.meta51452;
}));

(app.main.data.workspace.start_editing_selected_51451.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.start_editing_selected_51451.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var pred__51454 = cljs.core._EQ_;
var expr__51455 = cljs.core.count(selected);
if(cljs.core.truth_((pred__51454.cljs$core$IFn$_invoke$arity$2 ? pred__51454.cljs$core$IFn$_invoke$arity$2((0),expr__51455) : pred__51454.call(null,(0),expr__51455)))){
return beicon.v2.core.empty();
} else {
if(cljs.core.truth_((pred__51454.cljs$core$IFn$_invoke$arity$2 ? pred__51454.cljs$core$IFn$_invoke$arity$2((1),expr__51455) : pred__51454.call(null,(1),expr__51455)))){
var map__51457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.first(selected));
var map__51457__$1 = cljs.core.__destructure_map(map__51457);
var shape = map__51457__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51457__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51457__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__51458 = type;
var G__51458__$1 = (((G__51458 instanceof cljs.core.Keyword))?G__51458.fqn:null);
switch (G__51458__$1) {
case "text":
return beicon.v2.core.of(app.main.data.workspace.edition.start_edition_mode(id));

break;
case "group":
case "bool":
case "frame":
var shapes_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"shapes","shapes",1897594879)));
return beicon.v2.core.of(app.main.data.workspace.selection.select_shapes(shapes_ids));

break;
case "svg-raw":
return null;

break;
default:
return beicon.v2.core.of(app.main.data.workspace.edition.start_edition_mode(id),app.main.data.workspace.path.start_path_edit(id));

}
} else {
var shapes_to_select = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,shape_id){
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,shape_id),new cljs.core.Keyword(null,"shapes","shapes",1897594879));
if(cljs.core.empty_QMARK_(children)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,shape_id);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,children);
}
}),app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),selected);
return beicon.v2.core.of(app.main.data.workspace.selection.select_shapes(shapes_to_select));
}
}
}));
}

return (new app.main.data.workspace.start_editing_selected_51451(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.select_parent_layer = (function app$main$data$workspace$select_parent_layer(){
if((typeof app.main.data.workspace.select_parent_layer_51459 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.select_parent_layer_51459 = (function (meta51460){
this.meta51460 = meta51460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.select_parent_layer_51459.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.select_parent_layer_51459.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","select-parent-layer","app.main.data.workspace/select-parent-layer",-1982254562);
}));

(app.main.data.workspace.select_parent_layer_51459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51461,meta51460__$1){
var self__ = this;
var _51461__$1 = this;
return (new app.main.data.workspace.select_parent_layer_51459(meta51460__$1));
}));

(app.main.data.workspace.select_parent_layer_51459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51461){
var self__ = this;
var _51461__$1 = this;
return self__.meta51460;
}));

(app.main.data.workspace.select_parent_layer_51459.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.select_parent_layer_51459.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var shapes_to_select = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,shape_id){
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,shape_id),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
if((((!((parent_id == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,app.common.uuid.zero)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,parent_id);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,shape_id);
}
}),app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),selected);
return beicon.v2.core.of(app.main.data.workspace.selection.select_shapes(shapes_to_select));
}));
}

return (new app.main.data.workspace.select_parent_layer_51459(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.relocate_page = (function app$main$data$workspace$relocate_page(id,index){
if((typeof app.main.data.workspace.relocate_page_51462 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.relocate_page_51462 = (function (id,index,meta51463){
this.id = id;
this.index = index;
this.meta51463 = meta51463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.relocate_page_51462.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.relocate_page_51462.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","relocate-page","app.main.data.workspace/relocate-page",1396350911);
}));

(app.main.data.workspace.relocate_page_51462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51464,meta51463__$1){
var self__ = this;
var _51464__$1 = this;
return (new app.main.data.workspace.relocate_page_51462(self__.id,self__.index,meta51463__$1));
}));

(app.main.data.workspace.relocate_page_51462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51464){
var self__ = this;
var _51464__$1 = this;
return self__.meta51463;
}));

(app.main.data.workspace.relocate_page_51462.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.relocate_page_51462.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var prev_index = app.common.data.index_of(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"pages","pages",-285406513)),self__.id);
var changes = app.common.files.changes_builder.move_page(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),self__.id,self__.index,prev_index);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
}));
}

return (new app.main.data.workspace.relocate_page_51462(id,index,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.can_align_QMARK_ = (function app$main$data$workspace$can_align_QMARK_(selected,objects){
if(cljs.core.empty_QMARK_(selected)){
return false;
} else {
if((cljs.core.count(selected) > (1))){
return true;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(app.common.uuid.zero,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(selected)))));

}
}
});
app.main.data.workspace.align_object_to_parent = (function app$main$data$workspace$align_object_to_parent(objects,object_id,axis){
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,object_id);
var parent_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,object_id));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.align.align_to_parent(object,parent,axis)], null);
});
app.main.data.workspace.align_objects_list = (function app$main$data$workspace$align_objects_list(objects,selected,axis){
var selected_objs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51465_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__51465_SHARP_);
}),selected);
var rect = app.common.geom.shapes.shapes__GT_rect(selected_objs);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51466_SHARP_){
return app.common.geom.align.align_to_rect(p1__51466_SHARP_,rect,axis);
}),selected_objs);
});
app.main.data.workspace.align_objects = (function app$main$data$workspace$align_objects(var_args){
var G__51468 = arguments.length;
switch (G__51468) {
case 1:
return app.main.data.workspace.align_objects.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.align_objects.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.align_objects.cljs$core$IFn$_invoke$arity$1 = (function (axis){
return app.main.data.workspace.align_objects.cljs$core$IFn$_invoke$arity$2(axis,null);
}));

(app.main.data.workspace.align_objects.cljs$core$IFn$_invoke$arity$2 = (function (axis,selected){
app.common.data.macros.runtime_assert("expected valid align axis value",(function (){
return cljs.core.contains_QMARK_(app.common.geom.align.valid_align_axis,axis);
}));

if((typeof app.main.data.workspace.align_objects_51469 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.align_objects_51469 = (function (axis,selected,meta51470){
this.axis = axis;
this.selected = selected;
this.meta51470 = meta51470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.align_objects_51469.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.align_objects_51469.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","align-objects","app.main.data.workspace/align-objects",2022797753);
}));

(app.main.data.workspace.align_objects_51469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51471,meta51470__$1){
var self__ = this;
var _51471__$1 = this;
return (new app.main.data.workspace.align_objects_51469(self__.axis,self__.selected,meta51470__$1));
}));

(app.main.data.workspace.align_objects_51469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51471){
var self__ = this;
var _51471__$1 = this;
return self__.meta51470;
}));

(app.main.data.workspace.align_objects_51469.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.align_objects_51469.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected__$1 = (function (){var or__5025__auto__ = self__.selected;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
}
})();
var moved = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selected__$1)))?app.main.data.workspace.align_object_to_parent(objects,cljs.core.first(selected__$1),self__.axis):app.main.data.workspace.align_objects_list(objects,selected__$1,self__.axis));
var undo_id = Symbol();
if(app.main.data.workspace.can_align_QMARK_(selected__$1,objects)){
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.transforms.position_shapes(moved),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),selected__$1], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.align_objects_51469(axis,selected,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.align_objects.cljs$lang$maxFixedArity = 2);

app.main.data.workspace.can_distribute_QMARK_ = (function app$main$data$workspace$can_distribute_QMARK_(selected){
if(cljs.core.empty_QMARK_(selected)){
return false;
} else {
if((cljs.core.count(selected) < (3))){
return false;
} else {
return true;

}
}
});
app.main.data.workspace.distribute_objects = (function app$main$data$workspace$distribute_objects(var_args){
var G__51474 = arguments.length;
switch (G__51474) {
case 1:
return app.main.data.workspace.distribute_objects.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.distribute_objects.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.distribute_objects.cljs$core$IFn$_invoke$arity$1 = (function (axis){
return app.main.data.workspace.distribute_objects.cljs$core$IFn$_invoke$arity$2(axis,null);
}));

(app.main.data.workspace.distribute_objects.cljs$core$IFn$_invoke$arity$2 = (function (axis,ids){
app.common.data.macros.runtime_assert("expected valid distribute axis value",(function (){
return cljs.core.contains_QMARK_(app.common.geom.align.valid_dist_axis,axis);
}));

if((typeof app.main.data.workspace.distribute_objects_51475 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.distribute_objects_51475 = (function (axis,ids,meta51476){
this.axis = axis;
this.ids = ids;
this.meta51476 = meta51476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.distribute_objects_51475.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.distribute_objects_51475.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","distribute-objects","app.main.data.workspace/distribute-objects",379745207);
}));

(app.main.data.workspace.distribute_objects_51475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51477,meta51476__$1){
var self__ = this;
var _51477__$1 = this;
return (new app.main.data.workspace.distribute_objects_51475(self__.axis,self__.ids,meta51476__$1));
}));

(app.main.data.workspace.distribute_objects_51475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51477){
var self__ = this;
var _51477__$1 = this;
return self__.meta51476;
}));

(app.main.data.workspace.distribute_objects_51475.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.distribute_objects_51475.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var selected = (function (){var or__5025__auto__ = self__.ids;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
}
})();
var moved = app.common.geom.align.distribute_space(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51472_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__51472_SHARP_);
}),selected),self__.axis);
var undo_id = Symbol();
if(app.main.data.workspace.can_distribute_QMARK_(selected)){
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.transforms.position_shapes(moved),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),selected], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.distribute_objects_51475(axis,ids,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.distribute_objects.cljs$lang$maxFixedArity = 2);

app.main.data.workspace.set_shape_proportion_lock = (function app$main$data$workspace$set_shape_proportion_lock(id,lock){
if((typeof app.main.data.workspace.set_shape_proportion_lock_51478 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.set_shape_proportion_lock_51478 = (function (id,lock,meta51479){
this.id = id;
this.lock = lock;
this.meta51479 = meta51479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.set_shape_proportion_lock_51478.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_shape_proportion_lock_51478.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","set-shape-proportion-lock","app.main.data.workspace/set-shape-proportion-lock",1359513115);
}));

(app.main.data.workspace.set_shape_proportion_lock_51478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51480,meta51479__$1){
var self__ = this;
var _51480__$1 = this;
return (new app.main.data.workspace.set_shape_proportion_lock_51478(self__.id,self__.lock,meta51479__$1));
}));

(app.main.data.workspace.set_shape_proportion_lock_51478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51480){
var self__ = this;
var _51480__$1 = this;
return self__.meta51479;
}));

(app.main.data.workspace.set_shape_proportion_lock_51478.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_shape_proportion_lock_51478.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var assign_proportions = (function app$main$data$workspace$set_shape_proportion_lock_$_assign_proportions(shape){
if(cljs.core.not(self__.lock)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"proportion-lock","proportion-lock",1363898127),false);
} else {
return app.common.geom.proportions.assign_proportions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"proportion-lock","proportion-lock",1363898127),true));
}
});
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.id], null),assign_proportions));
}));
}

return (new app.main.data.workspace.set_shape_proportion_lock_51478(id,lock,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.toggle_proportion_lock = (function app$main$data$workspace$toggle_proportion_lock(){
if((typeof app.main.data.workspace.toggle_proportion_lock_51484 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.toggle_proportion_lock_51484 = (function (meta51485){
this.meta51485 = meta51485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.toggle_proportion_lock_51484.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.toggle_proportion_lock_51484.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","toggle-proportion-lock","app.main.data.workspace/toggle-proportion-lock",2079914676);
}));

(app.main.data.workspace.toggle_proportion_lock_51484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51486,meta51485__$1){
var self__ = this;
var _51486__$1 = this;
return (new app.main.data.workspace.toggle_proportion_lock_51484(meta51485__$1));
}));

(app.main.data.workspace.toggle_proportion_lock_51484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51486){
var self__ = this;
var _51486__$1 = this;
return self__.meta51485;
}));

(app.main.data.workspace.toggle_proportion_lock_51484.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.toggle_proportion_lock_51484.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var selected_obj = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51481_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__51481_SHARP_);
}),selected);
var multi = app.common.attrs.get_attrs_multi.cljs$core$IFn$_invoke$arity$2(selected_obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proportion-lock","proportion-lock",1363898127)], null));
var multi_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"proportion-lock","proportion-lock",1363898127).cljs$core$IFn$_invoke$arity$1(multi));
if(multi_QMARK_){
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(selected,(function (p1__51482_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51482_SHARP_,new cljs.core.Keyword(null,"proportion-lock","proportion-lock",1363898127),true);
})));
} else {
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(selected,(function (p1__51483_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__51483_SHARP_,new cljs.core.Keyword(null,"proportion-lock","proportion-lock",1363898127),cljs.core.not);
})));
}
}));
}

return (new app.main.data.workspace.toggle_proportion_lock_51484(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.workspace_focus_lost = (function app$main$data$workspace$workspace_focus_lost(){
if((typeof app.main.data.workspace.workspace_focus_lost_51487 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.workspace_focus_lost_51487 = (function (meta51488){
this.meta51488 = meta51488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.workspace_focus_lost_51487.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.workspace_focus_lost_51487.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","workspace-focus-lost","app.main.data.workspace/workspace-focus-lost",1572750041);
}));

(app.main.data.workspace.workspace_focus_lost_51487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51489,meta51488__$1){
var self__ = this;
var _51489__$1 = this;
return (new app.main.data.workspace.workspace_focus_lost_51487(meta51488__$1));
}));

(app.main.data.workspace.workspace_focus_lost_51487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51489){
var self__ = this;
var _51489__$1 = this;
return self__.meta51488;
}));

(app.main.data.workspace.workspace_focus_lost_51487.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.workspace_focus_lost_51487.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"show-distances?","show-distances?",-2103559896)], null),false);
}));
}

return (new app.main.data.workspace.workspace_focus_lost_51487(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.set_assets_section_open = (function app$main$data$workspace$set_assets_section_open(file_id,section,open_QMARK_){
if((typeof app.main.data.workspace.set_assets_section_open_51490 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.set_assets_section_open_51490 = (function (file_id,section,open_QMARK_,meta51491){
this.file_id = file_id;
this.section = section;
this.open_QMARK_ = open_QMARK_;
this.meta51491 = meta51491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.set_assets_section_open_51490.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_assets_section_open_51490.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","set-assets-section-open","app.main.data.workspace/set-assets-section-open",286343660);
}));

(app.main.data.workspace.set_assets_section_open_51490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51492,meta51491__$1){
var self__ = this;
var _51492__$1 = this;
return (new app.main.data.workspace.set_assets_section_open_51490(self__.file_id,self__.section,self__.open_QMARK_,meta51491__$1));
}));

(app.main.data.workspace.set_assets_section_open_51490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51492){
var self__ = this;
var _51492__$1 = this;
return self__.meta51491;
}));

(app.main.data.workspace.set_assets_section_open_51490.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_assets_section_open_51490.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-assets","workspace-assets",-912330383),new cljs.core.Keyword(null,"open-status","open-status",-381209745),self__.file_id,self__.section], null),self__.open_QMARK_);
}));
}

return (new app.main.data.workspace.set_assets_section_open_51490(file_id,section,open_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.clear_assets_section_open = (function app$main$data$workspace$clear_assets_section_open(){
if((typeof app.main.data.workspace.clear_assets_section_open_51493 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.clear_assets_section_open_51493 = (function (meta51494){
this.meta51494 = meta51494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.clear_assets_section_open_51493.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clear_assets_section_open_51493.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","clear-assets-section-open","app.main.data.workspace/clear-assets-section-open",-1852940833);
}));

(app.main.data.workspace.clear_assets_section_open_51493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51495,meta51494__$1){
var self__ = this;
var _51495__$1 = this;
return (new app.main.data.workspace.clear_assets_section_open_51493(meta51494__$1));
}));

(app.main.data.workspace.clear_assets_section_open_51493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51495){
var self__ = this;
var _51495__$1 = this;
return self__.meta51494;
}));

(app.main.data.workspace.clear_assets_section_open_51493.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clear_assets_section_open_51493.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-assets","workspace-assets",-912330383),new cljs.core.Keyword(null,"open-status","open-status",-381209745)], null),cljs.core.PersistentArrayMap.EMPTY);
}));
}

return (new app.main.data.workspace.clear_assets_section_open_51493(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.set_assets_group_open = (function app$main$data$workspace$set_assets_group_open(file_id,section,path,open_QMARK_){
if((typeof app.main.data.workspace.set_assets_group_open_51496 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.set_assets_group_open_51496 = (function (file_id,section,path,open_QMARK_,meta51497){
this.file_id = file_id;
this.section = section;
this.path = path;
this.open_QMARK_ = open_QMARK_;
this.meta51497 = meta51497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.set_assets_group_open_51496.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_assets_group_open_51496.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","set-assets-group-open","app.main.data.workspace/set-assets-group-open",1694747588);
}));

(app.main.data.workspace.set_assets_group_open_51496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51498,meta51497__$1){
var self__ = this;
var _51498__$1 = this;
return (new app.main.data.workspace.set_assets_group_open_51496(self__.file_id,self__.section,self__.path,self__.open_QMARK_,meta51497__$1));
}));

(app.main.data.workspace.set_assets_group_open_51496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51498){
var self__ = this;
var _51498__$1 = this;
return self__.meta51497;
}));

(app.main.data.workspace.set_assets_group_open_51496.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_assets_group_open_51496.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-assets","workspace-assets",-912330383),new cljs.core.Keyword(null,"open-status","open-status",-381209745),self__.file_id,new cljs.core.Keyword(null,"groups","groups",-136896102),self__.section,self__.path], null),self__.open_QMARK_);
}));
}

return (new app.main.data.workspace.set_assets_group_open_51496(file_id,section,path,open_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.check_in_asset = (function app$main$data$workspace$check_in_asset(items,element){
var items__$1 = (function (){var or__5025__auto__ = items;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(items__$1,element)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(items__$1,element);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items__$1,element);
}
});
app.main.data.workspace.toggle_selected_assets = (function app$main$data$workspace$toggle_selected_assets(file_id,asset_id,type){
if((typeof app.main.data.workspace.toggle_selected_assets_51499 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.toggle_selected_assets_51499 = (function (file_id,asset_id,type,meta51500){
this.file_id = file_id;
this.asset_id = asset_id;
this.type = type;
this.meta51500 = meta51500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.toggle_selected_assets_51499.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.toggle_selected_assets_51499.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","toggle-selected-assets","app.main.data.workspace/toggle-selected-assets",1325899622);
}));

(app.main.data.workspace.toggle_selected_assets_51499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51501,meta51500__$1){
var self__ = this;
var _51501__$1 = this;
return (new app.main.data.workspace.toggle_selected_assets_51499(self__.file_id,self__.asset_id,self__.type,meta51500__$1));
}));

(app.main.data.workspace.toggle_selected_assets_51499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51501){
var self__ = this;
var _51501__$1 = this;
return self__.meta51500;
}));

(app.main.data.workspace.toggle_selected_assets_51499.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.toggle_selected_assets_51499.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-assets","workspace-assets",-912330383),new cljs.core.Keyword(null,"selected","selected",574897764),self__.file_id,self__.type], null),app.main.data.workspace.check_in_asset,self__.asset_id);
}));
}

return (new app.main.data.workspace.toggle_selected_assets_51499(file_id,asset_id,type,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.select_single_asset = (function app$main$data$workspace$select_single_asset(file_id,asset_id,type){
if((typeof app.main.data.workspace.select_single_asset_51502 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.select_single_asset_51502 = (function (file_id,asset_id,type,meta51503){
this.file_id = file_id;
this.asset_id = asset_id;
this.type = type;
this.meta51503 = meta51503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.select_single_asset_51502.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.select_single_asset_51502.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","select-single-asset","app.main.data.workspace/select-single-asset",-126229974);
}));

(app.main.data.workspace.select_single_asset_51502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51504,meta51503__$1){
var self__ = this;
var _51504__$1 = this;
return (new app.main.data.workspace.select_single_asset_51502(self__.file_id,self__.asset_id,self__.type,meta51503__$1));
}));

(app.main.data.workspace.select_single_asset_51502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51504){
var self__ = this;
var _51504__$1 = this;
return self__.meta51503;
}));

(app.main.data.workspace.select_single_asset_51502.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.select_single_asset_51502.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-assets","workspace-assets",-912330383),new cljs.core.Keyword(null,"selected","selected",574897764),self__.file_id,self__.type], null),cljs.core.PersistentHashSet.createAsIfByAssoc([self__.asset_id]));
}));
}

return (new app.main.data.workspace.select_single_asset_51502(file_id,asset_id,type,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.select_assets = (function app$main$data$workspace$select_assets(file_id,assets_ids,type){
if((typeof app.main.data.workspace.select_assets_51505 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.select_assets_51505 = (function (file_id,assets_ids,type,meta51506){
this.file_id = file_id;
this.assets_ids = assets_ids;
this.type = type;
this.meta51506 = meta51506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.select_assets_51505.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.select_assets_51505.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","select-assets","app.main.data.workspace/select-assets",-638797101);
}));

(app.main.data.workspace.select_assets_51505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51507,meta51506__$1){
var self__ = this;
var _51507__$1 = this;
return (new app.main.data.workspace.select_assets_51505(self__.file_id,self__.assets_ids,self__.type,meta51506__$1));
}));

(app.main.data.workspace.select_assets_51505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51507){
var self__ = this;
var _51507__$1 = this;
return self__.meta51506;
}));

(app.main.data.workspace.select_assets_51505.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.select_assets_51505.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-assets","workspace-assets",-912330383),new cljs.core.Keyword(null,"selected","selected",574897764),self__.file_id,self__.type], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,self__.assets_ids));
}));
}

return (new app.main.data.workspace.select_assets_51505(file_id,assets_ids,type,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.unselect_all_assets = (function app$main$data$workspace$unselect_all_assets(var_args){
var G__51509 = arguments.length;
switch (G__51509) {
case 0:
return app.main.data.workspace.unselect_all_assets.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.workspace.unselect_all_assets.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.unselect_all_assets.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.workspace.unselect_all_assets.cljs$core$IFn$_invoke$arity$1(null);
}));

(app.main.data.workspace.unselect_all_assets.cljs$core$IFn$_invoke$arity$1 = (function (file_id){
if((typeof app.main.data.workspace.unselect_all_assets_51510 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.unselect_all_assets_51510 = (function (file_id,meta51511){
this.file_id = file_id;
this.meta51511 = meta51511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.unselect_all_assets_51510.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.unselect_all_assets_51510.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","unselect-all-assets","app.main.data.workspace/unselect-all-assets",436596758);
}));

(app.main.data.workspace.unselect_all_assets_51510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51512,meta51511__$1){
var self__ = this;
var _51512__$1 = this;
return (new app.main.data.workspace.unselect_all_assets_51510(self__.file_id,meta51511__$1));
}));

(app.main.data.workspace.unselect_all_assets_51510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51512){
var self__ = this;
var _51512__$1 = this;
return self__.meta51511;
}));

(app.main.data.workspace.unselect_all_assets_51510.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.unselect_all_assets_51510.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.file_id)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-assets","workspace-assets",-912330383),new cljs.core.Keyword(null,"selected","selected",574897764)], null),cljs.core.dissoc,self__.file_id);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"workspace-assets","workspace-assets",-912330383),cljs.core.dissoc,new cljs.core.Keyword(null,"selected","selected",574897764));
}
}));
}

return (new app.main.data.workspace.unselect_all_assets_51510(file_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.unselect_all_assets.cljs$lang$maxFixedArity = 1);

app.main.data.workspace.show_component_in_assets = (function app$main$data$workspace$show_component_in_assets(component_id){
if((typeof app.main.data.workspace.show_component_in_assets_51514 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.show_component_in_assets_51514 = (function (component_id,meta51515){
this.component_id = component_id;
this.meta51515 = meta51515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.show_component_in_assets_51514.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.show_component_in_assets_51514.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","show-component-in-assets","app.main.data.workspace/show-component-in-assets",26575746);
}));

(app.main.data.workspace.show_component_in_assets_51514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51516,meta51515__$1){
var self__ = this;
var _51516__$1 = this;
return (new app.main.data.workspace.show_component_in_assets_51514(self__.component_id,meta51515__$1));
}));

(app.main.data.workspace.show_component_in_assets_51514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51516){
var self__ = this;
var _51516__$1 = this;
return self__.meta51515;
}));

(app.main.data.workspace.show_component_in_assets_51514.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.show_component_in_assets_51514.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var fdata = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,file_id);
var component = app.common.files.variant.get_primary_component(fdata,self__.component_id);
var cpath = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(component);
var cpath__$1 = app.common.path_names.split_path(cpath);
var paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return app.common.path_names.join_path(cljs.core.take.cljs$core$IFn$_invoke$arity$2((i + (1)),cpath__$1));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cpath__$1)));
return beicon.v2.core.concat(beicon.v2.core.from(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51513_SHARP_){
return app.main.data.workspace.set_assets_group_open(file_id,new cljs.core.Keyword(null,"components","components",-1073188942),p1__51513_SHARP_,true);
}),paths)),beicon.v2.core.of(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"assets","assets",210278279)], 0)),app.main.data.workspace.set_assets_section_open(file_id,new cljs.core.Keyword(null,"library","library",467978288),true),app.main.data.workspace.set_assets_section_open(file_id,new cljs.core.Keyword(null,"components","components",-1073188942),true),app.main.data.workspace.select_single_asset(file_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"components","components",-1073188942))));
}));

(app.main.data.workspace.show_component_in_assets_51514.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.show_component_in_assets_51514.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var fdata = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,file_id);
var component = app.common.files.variant.get_primary_component(fdata,self__.component_id);
var wrapper_id = ["component-shape-id-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component))].join('');
return app.util.timers.schedule_on_idle.cljs$core$IFn$_invoke$arity$1((function (){
return app.util.dom.scroll_into_view_if_needed_BANG_.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_element(wrapper_id));
}));
}));
}

return (new app.main.data.workspace.show_component_in_assets_51514(component_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.show_context_menu = (function app$main$data$workspace$show_context_menu(p__51517){
var map__51518 = p__51517;
var map__51518__$1 = cljs.core.__destructure_map(map__51518);
var params = map__51518__$1;
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51518__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
app.common.data.macros.runtime_assert("expr assert: (gpt/point? position)",(function (){
return app.common.geom.point.point_QMARK_(position);
}));

if((typeof app.main.data.workspace.show_context_menu_51519 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.show_context_menu_51519 = (function (p__51517,map__51518,params,position,meta51520){
this.p__51517 = p__51517;
this.map__51518 = map__51518;
this.params = params;
this.position = position;
this.meta51520 = meta51520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.show_context_menu_51519.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.show_context_menu_51519.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","show-context-menu","app.main.data.workspace/show-context-menu",-1116685582);
}));

(app.main.data.workspace.show_context_menu_51519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51521,meta51520__$1){
var self__ = this;
var _51521__$1 = this;
return (new app.main.data.workspace.show_context_menu_51519(self__.p__51517,self__.map__51518,self__.params,self__.position,meta51520__$1));
}));

(app.main.data.workspace.show_context_menu_51519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51521){
var self__ = this;
var _51521__$1 = this;
return self__.meta51520;
}));

(app.main.data.workspace.show_context_menu_51519.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.show_context_menu_51519.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451)], null),self__.params);
}));
}

return (new app.main.data.workspace.show_context_menu_51519(p__51517,map__51518__$1,params,position,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.show_shape_context_menu = (function app$main$data$workspace$show_shape_context_menu(p__51523){
var map__51524 = p__51523;
var map__51524__$1 = cljs.core.__destructure_map(map__51524);
var params = map__51524__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51524__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
if((typeof app.main.data.workspace.show_shape_context_menu_51525 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.show_shape_context_menu_51525 = (function (p__51523,map__51524,params,shape,meta51526){
this.p__51523 = p__51523;
this.map__51524 = map__51524;
this.params = params;
this.shape = shape;
this.meta51526 = meta51526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.show_shape_context_menu_51525.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.show_shape_context_menu_51525.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","show-shape-context-menu","app.main.data.workspace/show-shape-context-menu",1953943978);
}));

(app.main.data.workspace.show_shape_context_menu_51525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51527,meta51526__$1){
var self__ = this;
var _51527__$1 = this;
return (new app.main.data.workspace.show_shape_context_menu_51525(self__.p__51523,self__.map__51524,self__.params,self__.shape,meta51526__$1));
}));

(app.main.data.workspace.show_shape_context_menu_51525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51527){
var self__ = this;
var _51527__$1 = this;
return self__.meta51526;
}));

(app.main.data.workspace.show_shape_context_menu_51525.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.show_shape_context_menu_51525.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var all_selected = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__51522_SHARP_){
return app.common.files.helpers.get_children_with_self(objects,p1__51522_SHARP_);
})),selected);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.first(selected));
var not_group_like_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected),(1))) && ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"group","group",582596132),null,new cljs.core.Keyword(null,"bool","bool",1444635321),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(head))))));
var no_bool_shapes_QMARK_ = cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frame","frame",-1711082588),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348)),all_selected);
if((((!((self__.shape == null)))) && ((!(cljs.core.contains_QMARK_(selected,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.shape))))))){
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.selection.select_shape.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.shape))),beicon.v2.core.of((app.main.data.workspace.show_shape_context_menu.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.show_shape_context_menu.cljs$core$IFn$_invoke$arity$1(self__.params) : app.main.data.workspace.show_shape_context_menu.call(null,self__.params))));
} else {
return beicon.v2.core.of(app.main.data.workspace.show_context_menu(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.params,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"shape","shape",1190694006),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"disable-booleans?","disable-booleans?",990388370),(function (){var or__5025__auto__ = no_bool_shapes_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return not_group_like_QMARK_;
}
})(),new cljs.core.Keyword(null,"disable-flatten?","disable-flatten?",1058516011),no_bool_shapes_QMARK_,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selected,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.shape))], 0))));
}
}));
}

return (new app.main.data.workspace.show_shape_context_menu_51525(p__51523,map__51524__$1,params,shape,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.show_page_item_context_menu = (function app$main$data$workspace$show_page_item_context_menu(p__51528){
var map__51529 = p__51528;
var map__51529__$1 = cljs.core.__destructure_map(map__51529);
var params = map__51529__$1;
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51529__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51529__$1,new cljs.core.Keyword(null,"page","page",849072397));
app.common.data.macros.runtime_assert("expr assert: (gpt/point? position)",(function (){
return app.common.geom.point.point_QMARK_(position);
}));

if((typeof app.main.data.workspace.show_page_item_context_menu_51530 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.show_page_item_context_menu_51530 = (function (p__51528,map__51529,params,position,page,meta51531){
this.p__51528 = p__51528;
this.map__51529 = map__51529;
this.params = params;
this.position = position;
this.page = page;
this.meta51531 = meta51531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.show_page_item_context_menu_51530.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.show_page_item_context_menu_51530.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","show-page-item-context-menu","app.main.data.workspace/show-page-item-context-menu",-836313139);
}));

(app.main.data.workspace.show_page_item_context_menu_51530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51532,meta51531__$1){
var self__ = this;
var _51532__$1 = this;
return (new app.main.data.workspace.show_page_item_context_menu_51530(self__.p__51528,self__.map__51529,self__.params,self__.position,self__.page,meta51531__$1));
}));

(app.main.data.workspace.show_page_item_context_menu_51530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51532){
var self__ = this;
var _51532__$1 = this;
return self__.meta51531;
}));

(app.main.data.workspace.show_page_item_context_menu_51530.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.show_page_item_context_menu_51530.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.workspace.show_context_menu(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.params,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"page","page",849072397),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.page)], 0))));
}));
}

return (new app.main.data.workspace.show_page_item_context_menu_51530(p__51528,map__51529__$1,params,position,page,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.show_track_context_menu = (function app$main$data$workspace$show_track_context_menu(p__51536){
var map__51538 = p__51536;
var map__51538__$1 = cljs.core.__destructure_map(map__51538);
var params = map__51538__$1;
var grid_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51538__$1,new cljs.core.Keyword(null,"grid-id","grid-id",1007140206));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51538__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51538__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if((typeof app.main.data.workspace.show_track_context_menu_51540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.show_track_context_menu_51540 = (function (p__51536,map__51538,params,grid_id,type,index,meta51541){
this.p__51536 = p__51536;
this.map__51538 = map__51538;
this.params = params;
this.grid_id = grid_id;
this.type = type;
this.index = index;
this.meta51541 = meta51541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.show_track_context_menu_51540.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.show_track_context_menu_51540.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","show-track-context-menu","app.main.data.workspace/show-track-context-menu",1392002592);
}));

(app.main.data.workspace.show_track_context_menu_51540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51542,meta51541__$1){
var self__ = this;
var _51542__$1 = this;
return (new app.main.data.workspace.show_track_context_menu_51540(self__.p__51536,self__.map__51538,self__.params,self__.grid_id,self__.type,self__.index,meta51541__$1));
}));

(app.main.data.workspace.show_track_context_menu_51540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51542){
var self__ = this;
var _51542__$1 = this;
return self__.meta51541;
}));

(app.main.data.workspace.show_track_context_menu_51540.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.show_track_context_menu_51540.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.workspace.show_context_menu(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.params,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"grid-track","grid-track",1096508183),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"grid-id","grid-id",1007140206),self__.grid_id,new cljs.core.Keyword(null,"type","type",1174270348),self__.type,new cljs.core.Keyword(null,"index","index",-1531685915),self__.index], 0))));
}));
}

return (new app.main.data.workspace.show_track_context_menu_51540(p__51536,map__51538__$1,params,grid_id,type,index,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.show_grid_cell_context_menu = (function app$main$data$workspace$show_grid_cell_context_menu(p__51547){
var map__51548 = p__51547;
var map__51548__$1 = cljs.core.__destructure_map(map__51548);
var params = map__51548__$1;
var grid_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51548__$1,new cljs.core.Keyword(null,"grid-id","grid-id",1007140206));
if((typeof app.main.data.workspace.show_grid_cell_context_menu_51549 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.show_grid_cell_context_menu_51549 = (function (p__51547,map__51548,params,grid_id,meta51550){
this.p__51547 = p__51547;
this.map__51548 = map__51548;
this.params = params;
this.grid_id = grid_id;
this.meta51550 = meta51550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.show_grid_cell_context_menu_51549.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.show_grid_cell_context_menu_51549.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","show-grid-cell-context-menu","app.main.data.workspace/show-grid-cell-context-menu",269559320);
}));

(app.main.data.workspace.show_grid_cell_context_menu_51549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51551,meta51550__$1){
var self__ = this;
var _51551__$1 = this;
return (new app.main.data.workspace.show_grid_cell_context_menu_51549(self__.p__51547,self__.map__51548,self__.params,self__.grid_id,meta51550__$1));
}));

(app.main.data.workspace.show_grid_cell_context_menu_51549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51551){
var self__ = this;
var _51551__$1 = this;
return self__.meta51550;
}));

(app.main.data.workspace.show_grid_cell_context_menu_51549.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.show_grid_cell_context_menu_51549.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.grid_id);
var cells = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51546_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),p1__51546_SHARP_], null));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-grid-edition","workspace-grid-edition",-40250766),self__.grid_id,new cljs.core.Keyword(null,"selected","selected",574897764)], null)));
return beicon.v2.core.of(app.main.data.workspace.show_context_menu(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.params,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"grid-cells","grid-cells",-486475418),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"grid","grid",402978600),grid,new cljs.core.Keyword(null,"cells","cells",-985166822),cells], 0))));
}));
}

return (new app.main.data.workspace.show_grid_cell_context_menu_51549(p__51547,map__51548__$1,params,grid_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.hide_context_menu = (function (){
if((typeof app.main.data.workspace.hide_context_menu_51569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.hide_context_menu_51569 = (function (meta51570){
this.meta51570 = meta51570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.hide_context_menu_51569.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.hide_context_menu_51569.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","hide-context-menu","app.main.data.workspace/hide-context-menu",1649353875);
}));

(app.main.data.workspace.hide_context_menu_51569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51571,meta51570__$1){
var self__ = this;
var _51571__$1 = this;
return (new app.main.data.workspace.hide_context_menu_51569(meta51570__$1));
}));

(app.main.data.workspace.hide_context_menu_51569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51571){
var self__ = this;
var _51571__$1 = this;
return self__.meta51570;
}));

(app.main.data.workspace.hide_context_menu_51569.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.hide_context_menu_51569.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451)], null),null);
}));
}

return (new app.main.data.workspace.hide_context_menu_51569(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.workspace.toggle_distances_display = (function app$main$data$workspace$toggle_distances_display(value){
if((typeof app.main.data.workspace.toggle_distances_display_51575 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.toggle_distances_display_51575 = (function (value,meta51576){
this.value = value;
this.meta51576 = meta51576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.toggle_distances_display_51575.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.toggle_distances_display_51575.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","toggle-distances-display","app.main.data.workspace/toggle-distances-display",-1005138727);
}));

(app.main.data.workspace.toggle_distances_display_51575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51577,meta51576__$1){
var self__ = this;
var _51577__$1 = this;
return (new app.main.data.workspace.toggle_distances_display_51575(self__.value,meta51576__$1));
}));

(app.main.data.workspace.toggle_distances_display_51575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51577){
var self__ = this;
var _51577__$1 = this;
return self__.meta51576;
}));

(app.main.data.workspace.toggle_distances_display_51575.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.toggle_distances_display_51575.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"show-distances?","show-distances?",-2103559896)], null),self__.value);
}));
}

return (new app.main.data.workspace.toggle_distances_display_51575(value,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.start_edit_interaction = (function app$main$data$workspace$start_edit_interaction(param51581){
return app.main.data.workspace.interactions.start_edit_interaction(param51581);
});
app.main.data.workspace.move_edit_interaction = (function app$main$data$workspace$move_edit_interaction(param51586,param51587){
return app.main.data.workspace.interactions.move_edit_interaction(param51586,param51587);
});
app.main.data.workspace.finish_edit_interaction = (function app$main$data$workspace$finish_edit_interaction(param51588,param51589){
return app.main.data.workspace.interactions.finish_edit_interaction(param51588,param51589);
});
app.main.data.workspace.start_move_overlay_pos = (function app$main$data$workspace$start_move_overlay_pos(param51594){
return app.main.data.workspace.interactions.start_move_overlay_pos(param51594);
});
app.main.data.workspace.move_overlay_pos = (function app$main$data$workspace$move_overlay_pos(param51595,param51596,param51597){
return app.main.data.workspace.interactions.move_overlay_pos(param51595,param51596,param51597);
});
app.main.data.workspace.finish_move_overlay_pos = (function app$main$data$workspace$finish_move_overlay_pos(param51598,param51599,param51600){
return app.main.data.workspace.interactions.finish_move_overlay_pos(param51598,param51599,param51600);
});
app.main.data.workspace.change_canvas_color = (function app$main$data$workspace$change_canvas_color(var_args){
var G__51602 = arguments.length;
switch (G__51602) {
case 1:
return app.main.data.workspace.change_canvas_color.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.change_canvas_color.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.change_canvas_color.cljs$core$IFn$_invoke$arity$1 = (function (color){
return app.main.data.workspace.change_canvas_color.cljs$core$IFn$_invoke$arity$2(null,color);
}));

(app.main.data.workspace.change_canvas_color.cljs$core$IFn$_invoke$arity$2 = (function (page_id,color){
if((typeof app.main.data.workspace.change_canvas_color_51603 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.change_canvas_color_51603 = (function (page_id,color,meta51604){
this.page_id = page_id;
this.color = color;
this.meta51604 = meta51604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.change_canvas_color_51603.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.change_canvas_color_51603.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","change-canvas-color","app.main.data.workspace/change-canvas-color",1969630674);
}));

(app.main.data.workspace.change_canvas_color_51603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51605,meta51604__$1){
var self__ = this;
var _51605__$1 = this;
return (new app.main.data.workspace.change_canvas_color_51603(self__.page_id,self__.color,meta51604__$1));
}));

(app.main.data.workspace.change_canvas_color_51603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51605){
var self__ = this;
var _51605__$1 = this;
return self__.meta51604;
}));

(app.main.data.workspace.change_canvas_color_51603.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.change_canvas_color_51603.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id__$1 = (function (){var or__5025__auto__ = self__.page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
}
})();
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$2(state,page_id__$1);
var changes = app.common.files.changes_builder.mod_page.cljs$core$IFn$_invoke$arity$2(app.common.files.changes_builder.with_page(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),page),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.color)], null));
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
}));
}

return (new app.main.data.workspace.change_canvas_color_51603(page_id,color,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.change_canvas_color.cljs$lang$maxFixedArity = 2);

app.main.data.workspace.set_paddings_selected = (function app$main$data$workspace$set_paddings_selected(paddings_selected){
if((typeof app.main.data.workspace.set_paddings_selected_51613 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.set_paddings_selected_51613 = (function (paddings_selected,meta51614){
this.paddings_selected = paddings_selected;
this.meta51614 = meta51614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.set_paddings_selected_51613.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_paddings_selected_51613.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","set-paddings-selected","app.main.data.workspace/set-paddings-selected",868339237);
}));

(app.main.data.workspace.set_paddings_selected_51613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51615,meta51614__$1){
var self__ = this;
var _51615__$1 = this;
return (new app.main.data.workspace.set_paddings_selected_51613(self__.paddings_selected,meta51614__$1));
}));

(app.main.data.workspace.set_paddings_selected_51613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51615){
var self__ = this;
var _51615__$1 = this;
return self__.meta51614;
}));

(app.main.data.workspace.set_paddings_selected_51613.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_paddings_selected_51613.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"paddings-selected","paddings-selected",1140014065)], null),self__.paddings_selected);
}));
}

return (new app.main.data.workspace.set_paddings_selected_51613(paddings_selected,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.set_gap_selected = (function app$main$data$workspace$set_gap_selected(gap_selected){
if((typeof app.main.data.workspace.set_gap_selected_51619 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.set_gap_selected_51619 = (function (gap_selected,meta51620){
this.gap_selected = gap_selected;
this.meta51620 = meta51620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.set_gap_selected_51619.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_gap_selected_51619.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","set-gap-selected","app.main.data.workspace/set-gap-selected",492549877);
}));

(app.main.data.workspace.set_gap_selected_51619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51621,meta51620__$1){
var self__ = this;
var _51621__$1 = this;
return (new app.main.data.workspace.set_gap_selected_51619(self__.gap_selected,meta51620__$1));
}));

(app.main.data.workspace.set_gap_selected_51619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51621){
var self__ = this;
var _51621__$1 = this;
return self__.meta51620;
}));

(app.main.data.workspace.set_gap_selected_51619.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_gap_selected_51619.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"gap-selected","gap-selected",-1435692040)], null),self__.gap_selected);
}));
}

return (new app.main.data.workspace.set_gap_selected_51619(gap_selected,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.set_margins_selected = (function app$main$data$workspace$set_margins_selected(margins_selected){
if((typeof app.main.data.workspace.set_margins_selected_51622 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.set_margins_selected_51622 = (function (margins_selected,meta51623){
this.margins_selected = margins_selected;
this.meta51623 = meta51623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.set_margins_selected_51622.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_margins_selected_51622.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","set-margins-selected","app.main.data.workspace/set-margins-selected",-61238202);
}));

(app.main.data.workspace.set_margins_selected_51622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51624,meta51623__$1){
var self__ = this;
var _51624__$1 = this;
return (new app.main.data.workspace.set_margins_selected_51622(self__.margins_selected,meta51623__$1));
}));

(app.main.data.workspace.set_margins_selected_51622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51624){
var self__ = this;
var _51624__$1 = this;
return self__.meta51623;
}));

(app.main.data.workspace.set_margins_selected_51622.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_margins_selected_51622.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"margins-selected","margins-selected",890458559)], null),self__.margins_selected);
}));
}

return (new app.main.data.workspace.set_margins_selected_51622(margins_selected,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.find_orphan_shapes = (function app$main$data$workspace$find_orphan_shapes(var_args){
var G__51632 = arguments.length;
switch (G__51632) {
case 1:
return app.main.data.workspace.find_orphan_shapes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.find_orphan_shapes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.find_orphan_shapes.cljs$core$IFn$_invoke$arity$1 = (function (state){
return app.main.data.workspace.find_orphan_shapes.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state));
}));

(app.main.data.workspace.find_orphan_shapes.cljs$core$IFn$_invoke$arity$2 = (function (state,page_id){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var objects__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (item){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.key(item),app.common.uuid.zero)) && ((!(cljs.core.contains_QMARK_(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(cljs.core.val(item)))))));
}),objects);
return objects__$1;
}));

(app.main.data.workspace.find_orphan_shapes.cljs$lang$maxFixedArity = 2);

app.main.data.workspace.fix_orphan_shapes = (function app$main$data$workspace$fix_orphan_shapes(){
if((typeof app.main.data.workspace.fix_orphan_shapes_51636 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.fix_orphan_shapes_51636 = (function (meta51637){
this.meta51637 = meta51637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.fix_orphan_shapes_51636.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.fix_orphan_shapes_51636.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","fix-orphan-shapes","app.main.data.workspace/fix-orphan-shapes",-1593553661);
}));

(app.main.data.workspace.fix_orphan_shapes_51636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51638,meta51637__$1){
var self__ = this;
var _51638__$1 = this;
return (new app.main.data.workspace.fix_orphan_shapes_51636(meta51637__$1));
}));

(app.main.data.workspace.fix_orphan_shapes_51636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51638){
var self__ = this;
var _51638__$1 = this;
return self__.meta51637;
}));

(app.main.data.workspace.fix_orphan_shapes_51636.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.fix_orphan_shapes_51636.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var orphans = cljs.core.set(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keys(app.main.data.workspace.find_orphan_shapes.cljs$core$IFn$_invoke$arity$1(state))));
return beicon.v2.core.of(app.main.data.workspace.shapes.relocate_shapes.cljs$core$IFn$_invoke$arity$variadic(orphans,app.common.uuid.zero,(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));
}));
}

return (new app.main.data.workspace.fix_orphan_shapes_51636(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.start_rename_page_item = (function app$main$data$workspace$start_rename_page_item(id){
if((typeof app.main.data.workspace.start_rename_page_item_51646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.start_rename_page_item_51646 = (function (id,meta51647){
this.id = id;
this.meta51647 = meta51647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.start_rename_page_item_51646.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.start_rename_page_item_51646.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","start-rename-page-item","app.main.data.workspace/start-rename-page-item",279403443);
}));

(app.main.data.workspace.start_rename_page_item_51646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51648,meta51647__$1){
var self__ = this;
var _51648__$1 = this;
return (new app.main.data.workspace.start_rename_page_item_51646(self__.id,meta51647__$1));
}));

(app.main.data.workspace.start_rename_page_item_51646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51648){
var self__ = this;
var _51648__$1 = this;
return self__.meta51647;
}));

(app.main.data.workspace.start_rename_page_item_51646.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.start_rename_page_item_51646.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"page-item","page-item",-547415760)], null),self__.id);
}));
}

return (new app.main.data.workspace.start_rename_page_item_51646(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.stop_rename_page_item = (function app$main$data$workspace$stop_rename_page_item(){
if((typeof app.main.data.workspace.stop_rename_page_item_51653 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.stop_rename_page_item_51653 = (function (meta51654){
this.meta51654 = meta51654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.stop_rename_page_item_51653.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.stop_rename_page_item_51653.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","stop-rename-page-item","app.main.data.workspace/stop-rename-page-item",-931411905);
}));

(app.main.data.workspace.stop_rename_page_item_51653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51655,meta51654__$1){
var self__ = this;
var _51655__$1 = this;
return (new app.main.data.workspace.stop_rename_page_item_51653(meta51654__$1));
}));

(app.main.data.workspace.stop_rename_page_item_51653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51655){
var self__ = this;
var _51655__$1 = this;
return self__.meta51654;
}));

(app.main.data.workspace.stop_rename_page_item_51653.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.stop_rename_page_item_51653.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var local = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"page-item","page-item",-547415760));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),local);
}));
}

return (new app.main.data.workspace.stop_rename_page_item_51653(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Update the component with the given annotation
 */
app.main.data.workspace.update_component_annotation = (function app$main$data$workspace$update_component_annotation(id,annotation){
app.common.data.macros.runtime_assert("expr assert: (uuid? id)",(function (){
return cljs.core.uuid_QMARK_(id);
}));

app.common.data.macros.runtime_assert("expr assert: (or (nil? annotation) (string? annotation))",(function (){
return (((annotation == null)) || (typeof annotation === 'string'));
}));

if((typeof app.main.data.workspace.update_component_annotation_51661 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.update_component_annotation_51661 = (function (id,annotation,meta51662){
this.id = id;
this.annotation = annotation;
this.meta51662 = meta51662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.update_component_annotation_51661.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.update_component_annotation_51661.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","update-component-annotation","app.main.data.workspace/update-component-annotation",-859622103);
}));

(app.main.data.workspace.update_component_annotation_51661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51663,meta51662__$1){
var self__ = this;
var _51663__$1 = this;
return (new app.main.data.workspace.update_component_annotation_51661(self__.id,self__.annotation,meta51662__$1));
}));

(app.main.data.workspace.update_component_annotation_51661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51663){
var self__ = this;
var _51663__$1 = this;
return self__.meta51662;
}));

(app.main.data.workspace.update_component_annotation_51661.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.update_component_annotation_51661.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var update_fn = (function (component){
if(cljs.core.truth_(component)){
if((self__.annotation == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.Keyword(null,"annotation","annotation",-344661666));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(component,new cljs.core.Keyword(null,"annotation","annotation",-344661666),self__.annotation);
}
} else {
return null;
}
});
var changes = app.common.files.changes_builder.update_component(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),data),self__.id,update_fn);
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.changes.commit_changes(changes)),(((self__.annotation == null))?beicon.v2.core.of(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"delete-component-annotation"], null))):null));
}));
}

return (new app.main.data.workspace.update_component_annotation_51661(id,annotation,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.set_annotations_expanded = (function app$main$data$workspace$set_annotations_expanded(expanded){
if((typeof app.main.data.workspace.set_annotations_expanded_51675 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.set_annotations_expanded_51675 = (function (expanded,meta51676){
this.expanded = expanded;
this.meta51676 = meta51676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.set_annotations_expanded_51675.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_annotations_expanded_51675.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","set-annotations-expanded","app.main.data.workspace/set-annotations-expanded",159587434);
}));

(app.main.data.workspace.set_annotations_expanded_51675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51677,meta51676__$1){
var self__ = this;
var _51677__$1 = this;
return (new app.main.data.workspace.set_annotations_expanded_51675(self__.expanded,meta51676__$1));
}));

(app.main.data.workspace.set_annotations_expanded_51675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51677){
var self__ = this;
var _51677__$1 = this;
return self__.meta51676;
}));

(app.main.data.workspace.set_annotations_expanded_51675.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_annotations_expanded_51675.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-annotations","workspace-annotations",-1857761670),new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null),self__.expanded);
}));
}

return (new app.main.data.workspace.set_annotations_expanded_51675(expanded,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.set_annotations_id_for_create = (function app$main$data$workspace$set_annotations_id_for_create(id){
if((typeof app.main.data.workspace.set_annotations_id_for_create_51682 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.set_annotations_id_for_create_51682 = (function (id,meta51683){
this.id = id;
this.meta51683 = meta51683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.set_annotations_id_for_create_51682.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_annotations_id_for_create_51682.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","set-annotations-id-for-create","app.main.data.workspace/set-annotations-id-for-create",1708769738);
}));

(app.main.data.workspace.set_annotations_id_for_create_51682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51684,meta51683__$1){
var self__ = this;
var _51684__$1 = this;
return (new app.main.data.workspace.set_annotations_id_for_create_51682(self__.id,meta51683__$1));
}));

(app.main.data.workspace.set_annotations_id_for_create_51682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51684){
var self__ = this;
var _51684__$1 = this;
return self__.meta51683;
}));

(app.main.data.workspace.set_annotations_id_for_create_51682.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_annotations_id_for_create_51682.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.id)){
return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-annotations","workspace-annotations",-1857761670),new cljs.core.Keyword(null,"id-for-create","id-for-create",1988159458)], null),self__.id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-annotations","workspace-annotations",-1857761670),new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null),true);
} else {
return app.common.data.dissoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-annotations","workspace-annotations",-1857761670),new cljs.core.Keyword(null,"id-for-create","id-for-create",1988159458)], null));
}
}));

(app.main.data.workspace.set_annotations_id_for_create_51682.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_annotations_id_for_create_51682.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
if((!((self__.id == null)))){
return beicon.v2.core.of(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"create-component-annotation"], null)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.set_annotations_id_for_create_51682(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.set_preview_blend_mode = (function app$main$data$workspace$set_preview_blend_mode(ids,blend_mode){
if((typeof app.main.data.workspace.set_preview_blend_mode_51689 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.set_preview_blend_mode_51689 = (function (ids,blend_mode,meta51690){
this.ids = ids;
this.blend_mode = blend_mode;
this.meta51690 = meta51690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.set_preview_blend_mode_51689.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_preview_blend_mode_51689.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","set-preview-blend-mode","app.main.data.workspace/set-preview-blend-mode",-629971646);
}));

(app.main.data.workspace.set_preview_blend_mode_51689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51691,meta51690__$1){
var self__ = this;
var _51691__$1 = this;
return (new app.main.data.workspace.set_preview_blend_mode_51689(self__.ids,self__.blend_mode,meta51690__$1));
}));

(app.main.data.workspace.set_preview_blend_mode_51689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51691){
var self__ = this;
var _51691__$1 = this;
return self__.meta51690;
}));

(app.main.data.workspace.set_preview_blend_mode_51689.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_preview_blend_mode_51689.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__51687_SHARP_,p2__51688_SHARP_){
return cljs.core.assoc_in(p1__51687_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-preview-blend","workspace-preview-blend",-1720937040),p2__51688_SHARP_], null),self__.blend_mode);
}),state,self__.ids);
}));
}

return (new app.main.data.workspace.set_preview_blend_mode_51689(ids,blend_mode,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.unset_preview_blend_mode = (function app$main$data$workspace$unset_preview_blend_mode(ids){
if((typeof app.main.data.workspace.unset_preview_blend_mode_51697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.unset_preview_blend_mode_51697 = (function (ids,meta51698){
this.ids = ids;
this.meta51698 = meta51698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.unset_preview_blend_mode_51697.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.unset_preview_blend_mode_51697.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","unset-preview-blend-mode","app.main.data.workspace/unset-preview-blend-mode",1606695736);
}));

(app.main.data.workspace.unset_preview_blend_mode_51697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51699,meta51698__$1){
var self__ = this;
var _51699__$1 = this;
return (new app.main.data.workspace.unset_preview_blend_mode_51697(self__.ids,meta51698__$1));
}));

(app.main.data.workspace.unset_preview_blend_mode_51697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51699){
var self__ = this;
var _51699__$1 = this;
return self__.meta51698;
}));

(app.main.data.workspace.unset_preview_blend_mode_51697.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.unset_preview_blend_mode_51697.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__51695_SHARP_,p2__51696_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__51695_SHARP_,new cljs.core.Keyword(null,"workspace-preview-blend","workspace-preview-blend",-1720937040),cljs.core.dissoc,p2__51696_SHARP_);
}),state,self__.ids);
}));
}

return (new app.main.data.workspace.unset_preview_blend_mode_51697(ids,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.find_components_norefs = (function app$main$data$workspace$find_components_norefs(){
if((typeof app.main.data.workspace.find_components_norefs_51709 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.find_components_norefs_51709 = (function (meta51710){
this.meta51710 = meta51710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.find_components_norefs_51709.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.find_components_norefs_51709.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","find-components-norefs","app.main.data.workspace/find-components-norefs",1513370826);
}));

(app.main.data.workspace.find_components_norefs_51709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51711,meta51710__$1){
var self__ = this;
var _51711__$1 = this;
return (new app.main.data.workspace.find_components_norefs_51709(meta51710__$1));
}));

(app.main.data.workspace.find_components_norefs_51709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51711){
var self__ = this;
var _51711__$1 = this;
return self__.meta51710;
}));

(app.main.data.workspace.find_components_norefs_51709.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.find_components_norefs_51709.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var copies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51706_SHARP_){
return ((app.common.types.component.instance_head_QMARK_(p1__51706_SHARP_)) && ((!(app.common.types.component.main_instance_QMARK_(p1__51706_SHARP_)))));
}),cljs.core.vals(objects));
var copies_no_ref = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51707_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(p1__51707_SHARP_));
}),copies);
var find_childs_no_ref = (function (acc_map,item){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
var childs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51708_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(p1__51708_SHARP_));
}),app.common.files.helpers.get_children(objects,id));
if(cljs.core.seq(childs)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc_map,id,childs);
} else {
return acc_map;
}
});
var childs_no_ref = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(find_childs_no_ref,cljs.core.PersistentArrayMap.EMPTY,copies);
console.log("Copies no ref",cljs.core.count(copies_no_ref),cljs.core.clj__GT_js(copies_no_ref));

return console.log("Childs no ref",cljs.core.count(childs_no_ref),cljs.core.clj__GT_js(childs_no_ref));
}));
}

return (new app.main.data.workspace.find_components_norefs_51709(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.set_clipboard_style = (function app$main$data$workspace$set_clipboard_style(style){
if((typeof app.main.data.workspace.set_clipboard_style_51719 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.set_clipboard_style_51719 = (function (style,meta51720){
this.style = style;
this.meta51720 = meta51720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.set_clipboard_style_51719.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_clipboard_style_51719.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace","set-clipboard-style","app.main.data.workspace/set-clipboard-style",1125559197);
}));

(app.main.data.workspace.set_clipboard_style_51719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51721,meta51720__$1){
var self__ = this;
var _51721__$1 = this;
return (new app.main.data.workspace.set_clipboard_style_51719(self__.style,meta51720__$1));
}));

(app.main.data.workspace.set_clipboard_style_51719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51721){
var self__ = this;
var _51721__$1 = this;
return self__.meta51720;
}));

(app.main.data.workspace.set_clipboard_style_51719.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.set_clipboard_style_51719.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"clipboard-style","clipboard-style",987303829)], null),self__.style);
}));
}

return (new app.main.data.workspace.set_clipboard_style_51719(style,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Trigger the bounding box cloaking (with default timer of 1sec)
 * 
 *   Used to hide bounding-box of shape after changes in sidebar->measures.
 */
app.main.data.workspace.trigger_bounding_box_cloaking = (function app$main$data$workspace$trigger_bounding_box_cloaking(param51726){
return app.main.data.workspace.transforms.trigger_bounding_box_cloaking(param51726);
});
/**
 * Enter mouse resize mode, until mouse button is released.
 */
app.main.data.workspace.start_resize = (function app$main$data$workspace$start_resize(param51727,param51728,param51729){
return app.main.data.workspace.transforms.start_resize(param51727,param51728,param51729);
});
/**
 * Change size of shapes, from the sidebar options form
 *   (will ignore pixel snap)
 */
app.main.data.workspace.update_dimensions = (function() {
var app$main$data$workspace$update_dimensions = null;
var app$main$data$workspace$update_dimensions__3 = (function (param51732,param51733,param51734){
return app.main.data.workspace.transforms.update_dimensions.cljs$core$IFn$_invoke$arity$3(param51732,param51733,param51734);
});
var app$main$data$workspace$update_dimensions__4 = (function (param51735,param51736,param51737,param51738){
return app.main.data.workspace.transforms.update_dimensions.cljs$core$IFn$_invoke$arity$4(param51735,param51736,param51737,param51738);
});
app$main$data$workspace$update_dimensions = function(param51735,param51736,param51737,param51738){
switch(arguments.length){
case 3:
return app$main$data$workspace$update_dimensions__3.call(this,param51735,param51736,param51737);
case 4:
return app$main$data$workspace$update_dimensions__4.call(this,param51735,param51736,param51737,param51738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$update_dimensions.cljs$core$IFn$_invoke$arity$3 = app$main$data$workspace$update_dimensions__3;
app$main$data$workspace$update_dimensions.cljs$core$IFn$_invoke$arity$4 = app$main$data$workspace$update_dimensions__4;
return app$main$data$workspace$update_dimensions;
})()
;
/**
 * Change orientation of shapes, from the sidebar options form.
 *   Will ignore pixel snap used in the options side panel
 */
app.main.data.workspace.change_orientation = (function app$main$data$workspace$change_orientation(param51746,param51747){
return app.main.data.workspace.transforms.change_orientation(param51746,param51747);
});
/**
 * Enter mouse rotate mode, until mouse button is released.
 */
app.main.data.workspace.start_rotate = (function app$main$data$workspace$start_rotate(param51748){
return app.main.data.workspace.transforms.start_rotate(param51748);
});
/**
 * Rotate shapes a fixed angle, from a keyboard action.
 * @param {...*} var_args
 */
app.main.data.workspace.increase_rotation = (function() {
var app$main$data$workspace$increase_rotation = null;
var app$main$data$workspace$increase_rotation__2 = (function (param51749,param51750){
return app.main.data.workspace.transforms.increase_rotation.cljs$core$IFn$_invoke$arity$2(param51749,param51750);
});
var app$main$data$workspace$increase_rotation__4 = (function() { 
var G__52199__delegate = function (param51751,param51752,param51753,param51754){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(app.main.data.workspace.transforms.increase_rotation,param51751,param51752,param51753,param51754);
};
var G__52199 = function (param51751,param51752,param51753,var_args){
var param51754 = null;
if (arguments.length > 3) {
var G__52200__i = 0, G__52200__a = new Array(arguments.length -  3);
while (G__52200__i < G__52200__a.length) {G__52200__a[G__52200__i] = arguments[G__52200__i + 3]; ++G__52200__i;}
  param51754 = new cljs.core.IndexedSeq(G__52200__a,0,null);
} 
return G__52199__delegate.call(this,param51751,param51752,param51753,param51754);};
G__52199.cljs$lang$maxFixedArity = 3;
G__52199.cljs$lang$applyTo = (function (arglist__52201){
var param51751 = cljs.core.first(arglist__52201);
arglist__52201 = cljs.core.next(arglist__52201);
var param51752 = cljs.core.first(arglist__52201);
arglist__52201 = cljs.core.next(arglist__52201);
var param51753 = cljs.core.first(arglist__52201);
var param51754 = cljs.core.rest(arglist__52201);
return G__52199__delegate(param51751,param51752,param51753,param51754);
});
G__52199.cljs$core$IFn$_invoke$arity$variadic = G__52199__delegate;
return G__52199;
})()
;
app$main$data$workspace$increase_rotation = function(param51751,param51752,param51753,var_args){
var param51754 = var_args;
switch(arguments.length){
case 2:
return app$main$data$workspace$increase_rotation__2.call(this,param51751,param51752);
default:
var G__52205 = null;
if (arguments.length > 3) {
var G__52206__i = 0, G__52206__a = new Array(arguments.length -  3);
while (G__52206__i < G__52206__a.length) {G__52206__a[G__52206__i] = arguments[G__52206__i + 3]; ++G__52206__i;}
G__52205 = new cljs.core.IndexedSeq(G__52206__a,0,null);
}
return app$main$data$workspace$increase_rotation__4.cljs$core$IFn$_invoke$arity$variadic(param51751,param51752,param51753, G__52205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$increase_rotation.cljs$lang$maxFixedArity = 3;
app$main$data$workspace$increase_rotation.cljs$lang$applyTo = app$main$data$workspace$increase_rotation__4.cljs$lang$applyTo;
app$main$data$workspace$increase_rotation.cljs$core$IFn$_invoke$arity$2 = app$main$data$workspace$increase_rotation__2;
app$main$data$workspace$increase_rotation.cljs$core$IFn$_invoke$arity$variadic = app$main$data$workspace$increase_rotation__4.cljs$core$IFn$_invoke$arity$variadic;
return app$main$data$workspace$increase_rotation;
})()
;
/**
 * Enter mouse move mode, until mouse button is released.
 */
app.main.data.workspace.start_move_selected = (function() {
var app$main$data$workspace$start_move_selected = null;
var app$main$data$workspace$start_move_selected__0 = (function (){
return app.main.data.workspace.transforms.start_move_selected.cljs$core$IFn$_invoke$arity$0();
});
var app$main$data$workspace$start_move_selected__2 = (function (param51755,param51756){
return app.main.data.workspace.transforms.start_move_selected.cljs$core$IFn$_invoke$arity$2(param51755,param51756);
});
app$main$data$workspace$start_move_selected = function(param51755,param51756){
switch(arguments.length){
case 0:
return app$main$data$workspace$start_move_selected__0.call(this);
case 2:
return app$main$data$workspace$start_move_selected__2.call(this,param51755,param51756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$start_move_selected.cljs$core$IFn$_invoke$arity$0 = app$main$data$workspace$start_move_selected__0;
app$main$data$workspace$start_move_selected.cljs$core$IFn$_invoke$arity$2 = app$main$data$workspace$start_move_selected__2;
return app$main$data$workspace$start_move_selected;
})()
;
/**
 * Move shapes a fixed increment in one direction, from a keyboard action.
 */
app.main.data.workspace.move_selected = (function app$main$data$workspace$move_selected(param51757,param51758){
return app.main.data.workspace.transforms.move_selected(param51757,param51758);
});
/**
 * Move shapes to a new position. It will resolve to the current frame
 *   of the shape, unless given the absolute option. In this case it will
 *   resolve to the root frame of the page.
 * 
 *   The position is a map that can have a partial position (it means it
 *   can receive {:x 10}.
 */
app.main.data.workspace.update_position = (function() {
var app$main$data$workspace$update_position = null;
var app$main$data$workspace$update_position__2 = (function (param51759,param51760){
return app.main.data.workspace.transforms.update_position.cljs$core$IFn$_invoke$arity$2(param51759,param51760);
});
var app$main$data$workspace$update_position__3 = (function (param51761,param51762,param51763){
return app.main.data.workspace.transforms.update_position.cljs$core$IFn$_invoke$arity$3(param51761,param51762,param51763);
});
app$main$data$workspace$update_position = function(param51761,param51762,param51763){
switch(arguments.length){
case 2:
return app$main$data$workspace$update_position__2.call(this,param51761,param51762);
case 3:
return app$main$data$workspace$update_position__3.call(this,param51761,param51762,param51763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$update_position.cljs$core$IFn$_invoke$arity$2 = app$main$data$workspace$update_position__2;
app$main$data$workspace$update_position.cljs$core$IFn$_invoke$arity$3 = app$main$data$workspace$update_position__3;
return app$main$data$workspace$update_position;
})()
;
/**
 * Move multiple shapes to a new position.
 */
app.main.data.workspace.update_positions = (function() {
var app$main$data$workspace$update_positions = null;
var app$main$data$workspace$update_positions__2 = (function (param51766,param51767){
return app.main.data.workspace.transforms.update_positions.cljs$core$IFn$_invoke$arity$2(param51766,param51767);
});
var app$main$data$workspace$update_positions__3 = (function (param51768,param51769,param51770){
return app.main.data.workspace.transforms.update_positions.cljs$core$IFn$_invoke$arity$3(param51768,param51769,param51770);
});
app$main$data$workspace$update_positions = function(param51768,param51769,param51770){
switch(arguments.length){
case 2:
return app$main$data$workspace$update_positions__2.call(this,param51768,param51769);
case 3:
return app$main$data$workspace$update_positions__3.call(this,param51768,param51769,param51770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$update_positions.cljs$core$IFn$_invoke$arity$2 = app$main$data$workspace$update_positions__2;
app$main$data$workspace$update_positions.cljs$core$IFn$_invoke$arity$3 = app$main$data$workspace$update_positions__3;
return app$main$data$workspace$update_positions;
})()
;
app.main.data.workspace.flip_horizontal_selected = (function() {
var app$main$data$workspace$flip_horizontal_selected = null;
var app$main$data$workspace$flip_horizontal_selected__0 = (function (){
return app.main.data.workspace.transforms.flip_horizontal_selected.cljs$core$IFn$_invoke$arity$0();
});
var app$main$data$workspace$flip_horizontal_selected__1 = (function (param51774){
return app.main.data.workspace.transforms.flip_horizontal_selected.cljs$core$IFn$_invoke$arity$1(param51774);
});
app$main$data$workspace$flip_horizontal_selected = function(param51774){
switch(arguments.length){
case 0:
return app$main$data$workspace$flip_horizontal_selected__0.call(this);
case 1:
return app$main$data$workspace$flip_horizontal_selected__1.call(this,param51774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$flip_horizontal_selected.cljs$core$IFn$_invoke$arity$0 = app$main$data$workspace$flip_horizontal_selected__0;
app$main$data$workspace$flip_horizontal_selected.cljs$core$IFn$_invoke$arity$1 = app$main$data$workspace$flip_horizontal_selected__1;
return app$main$data$workspace$flip_horizontal_selected;
})()
;
app.main.data.workspace.flip_vertical_selected = (function() {
var app$main$data$workspace$flip_vertical_selected = null;
var app$main$data$workspace$flip_vertical_selected__0 = (function (){
return app.main.data.workspace.transforms.flip_vertical_selected.cljs$core$IFn$_invoke$arity$0();
});
var app$main$data$workspace$flip_vertical_selected__1 = (function (param51775){
return app.main.data.workspace.transforms.flip_vertical_selected.cljs$core$IFn$_invoke$arity$1(param51775);
});
app$main$data$workspace$flip_vertical_selected = function(param51775){
switch(arguments.length){
case 0:
return app$main$data$workspace$flip_vertical_selected__0.call(this);
case 1:
return app$main$data$workspace$flip_vertical_selected__1.call(this,param51775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$flip_vertical_selected.cljs$core$IFn$_invoke$arity$0 = app$main$data$workspace$flip_vertical_selected__0;
app$main$data$workspace$flip_vertical_selected.cljs$core$IFn$_invoke$arity$1 = app$main$data$workspace$flip_vertical_selected__1;
return app$main$data$workspace$flip_vertical_selected;
})()
;
app.main.data.workspace.set_opacity = (function app$main$data$workspace$set_opacity(param51776){
return app.main.data.workspace.layers.set_opacity(param51776);
});
app.main.data.workspace.add_shape = (function() {
var app$main$data$workspace$add_shape = null;
var app$main$data$workspace$add_shape__1 = (function (param51777){
return app.main.data.workspace.shapes.add_shape.cljs$core$IFn$_invoke$arity$1(param51777);
});
var app$main$data$workspace$add_shape__2 = (function (param51778,param51779){
return app.main.data.workspace.shapes.add_shape.cljs$core$IFn$_invoke$arity$2(param51778,param51779);
});
app$main$data$workspace$add_shape = function(param51778,param51779){
switch(arguments.length){
case 1:
return app$main$data$workspace$add_shape__1.call(this,param51778);
case 2:
return app$main$data$workspace$add_shape__2.call(this,param51778,param51779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$add_shape.cljs$core$IFn$_invoke$arity$1 = app$main$data$workspace$add_shape__1;
app$main$data$workspace$add_shape.cljs$core$IFn$_invoke$arity$2 = app$main$data$workspace$add_shape__2;
return app$main$data$workspace$add_shape;
})()
;
app.main.data.workspace.clear_edition_mode = (function app$main$data$workspace$clear_edition_mode(){
return app.main.data.workspace.edition.clear_edition_mode();
});
app.main.data.workspace.select_shapes = (function app$main$data$workspace$select_shapes(param51780){
return app.main.data.workspace.selection.select_shapes(param51780);
});
/**
 * Mark a shape in edition mode
 */
app.main.data.workspace.start_edition_mode = (function app$main$data$workspace$start_edition_mode(param51782){
return app.main.data.workspace.edition.start_edition_mode(param51782);
});
app.main.data.workspace.copy_selected = (function app$main$data$workspace$copy_selected(){
return app.main.data.workspace.clipboard.copy_selected();
});
/**
 * Perform a `paste` operation using the Clipboard API.
 */
app.main.data.workspace.paste_from_clipboard = (function app$main$data$workspace$paste_from_clipboard(){
return app.main.data.workspace.clipboard.paste_from_clipboard();
});
/**
 * Perform a `paste` operation from user emmited event.
 */
app.main.data.workspace.paste_from_event = (function app$main$data$workspace$paste_from_event(param51783,param51784){
return app.main.data.workspace.clipboard.paste_from_event(param51783,param51784);
});
app.main.data.workspace.copy_selected_css = (function app$main$data$workspace$copy_selected_css(){
return app.main.data.workspace.clipboard.copy_selected_css();
});
app.main.data.workspace.copy_selected_css_nested = (function app$main$data$workspace$copy_selected_css_nested(){
return app.main.data.workspace.clipboard.copy_selected_css_nested();
});
app.main.data.workspace.copy_selected_props = (function app$main$data$workspace$copy_selected_props(){
return app.main.data.workspace.clipboard.copy_selected_props();
});
app.main.data.workspace.copy_selected_svg = (function app$main$data$workspace$copy_selected_svg(){
return app.main.data.workspace.clipboard.copy_selected_svg();
});
app.main.data.workspace.copy_selected_text = (function app$main$data$workspace$copy_selected_text(){
return app.main.data.workspace.clipboard.copy_selected_text();
});
app.main.data.workspace.paste_selected_props = (function app$main$data$workspace$paste_selected_props(){
return app.main.data.workspace.clipboard.paste_selected_props();
});
app.main.data.workspace.paste_shapes = (function app$main$data$workspace$paste_shapes(param51791){
return app.main.data.workspace.clipboard.paste_shapes(param51791);
});
app.main.data.workspace.paste_data_valid_QMARK_ = app.main.data.workspace.clipboard.paste_data_valid_QMARK_;
app.main.data.workspace.copy_link_to_clipboard = (function app$main$data$workspace$copy_link_to_clipboard(){
return app.main.data.workspace.clipboard.copy_link_to_clipboard();
});
app.main.data.workspace.select_for_drawing = (function app$main$data$workspace$select_for_drawing(param51792){
return app.main.data.workspace.drawing.select_for_drawing(param51792);
});
/**
 * Zoom in on and center viewport on selection;
 * hide all other layers in viewport and layer panel.
 * 
 * When in focus mode, exit restoring previous viewport and selection.
 *   
 */
app.main.data.workspace.toggle_focus_mode = (function app$main$data$workspace$toggle_focus_mode(){
return app.main.data.workspace.selection.toggle_focus_mode();
});
/**
 * Clear all possible state of drawing, edition
 *   or any similar action taken by the user.
 *   When `check-modal` the method will check if a modal is opened
 *   and not deselect if it's true
 */
app.main.data.workspace.deselect_all = (function() {
var app$main$data$workspace$deselect_all = null;
var app$main$data$workspace$deselect_all__0 = (function (){
return app.main.data.workspace.selection.deselect_all.cljs$core$IFn$_invoke$arity$0();
});
var app$main$data$workspace$deselect_all__1 = (function (param51797){
return app.main.data.workspace.selection.deselect_all.cljs$core$IFn$_invoke$arity$1(param51797);
});
app$main$data$workspace$deselect_all = function(param51797){
switch(arguments.length){
case 0:
return app$main$data$workspace$deselect_all__0.call(this);
case 1:
return app$main$data$workspace$deselect_all__1.call(this,param51797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$deselect_all.cljs$core$IFn$_invoke$arity$0 = app$main$data$workspace$deselect_all__0;
app$main$data$workspace$deselect_all.cljs$core$IFn$_invoke$arity$1 = app$main$data$workspace$deselect_all__1;
return app$main$data$workspace$deselect_all;
})()
;
app.main.data.workspace.deselect_shape = (function app$main$data$workspace$deselect_shape(param51798){
return app.main.data.workspace.selection.deselect_shape(param51798);
});
app.main.data.workspace.duplicate_selected = (function() {
var app$main$data$workspace$duplicate_selected = null;
var app$main$data$workspace$duplicate_selected__1 = (function (param51799){
return app.main.data.workspace.selection.duplicate_selected.cljs$core$IFn$_invoke$arity$1(param51799);
});
var app$main$data$workspace$duplicate_selected__2 = (function (param51800,param51801){
return app.main.data.workspace.selection.duplicate_selected.cljs$core$IFn$_invoke$arity$2(param51800,param51801);
});
app$main$data$workspace$duplicate_selected = function(param51800,param51801){
switch(arguments.length){
case 1:
return app$main$data$workspace$duplicate_selected__1.call(this,param51800);
case 2:
return app$main$data$workspace$duplicate_selected__2.call(this,param51800,param51801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$duplicate_selected.cljs$core$IFn$_invoke$arity$1 = app$main$data$workspace$duplicate_selected__1;
app$main$data$workspace$duplicate_selected.cljs$core$IFn$_invoke$arity$2 = app$main$data$workspace$duplicate_selected__2;
return app$main$data$workspace$duplicate_selected;
})()
;
app.main.data.workspace.handle_area_selection = (function app$main$data$workspace$handle_area_selection(param51805,param51806,param51807){
return app.main.data.workspace.selection.handle_area_selection(param51805,param51806,param51807);
});
app.main.data.workspace.select_all = (function app$main$data$workspace$select_all(){
return app.main.data.workspace.selection.select_all();
});
app.main.data.workspace.select_inside_group = (function app$main$data$workspace$select_inside_group(param51812,param51813){
return app.main.data.workspace.selection.select_inside_group(param51812,param51813);
});
app.main.data.workspace.select_shape = (function() {
var app$main$data$workspace$select_shape = null;
var app$main$data$workspace$select_shape__1 = (function (param51814){
return app.main.data.workspace.selection.select_shape.cljs$core$IFn$_invoke$arity$1(param51814);
});
var app$main$data$workspace$select_shape__2 = (function (param51815,param51816){
return app.main.data.workspace.selection.select_shape.cljs$core$IFn$_invoke$arity$2(param51815,param51816);
});
app$main$data$workspace$select_shape = function(param51815,param51816){
switch(arguments.length){
case 1:
return app$main$data$workspace$select_shape__1.call(this,param51815);
case 2:
return app$main$data$workspace$select_shape__2.call(this,param51815,param51816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$select_shape.cljs$core$IFn$_invoke$arity$1 = app$main$data$workspace$select_shape__1;
app$main$data$workspace$select_shape.cljs$core$IFn$_invoke$arity$2 = app$main$data$workspace$select_shape__2;
return app$main$data$workspace$select_shape;
})()
;
app.main.data.workspace.select_prev_shape = (function app$main$data$workspace$select_prev_shape(){
return app.main.data.workspace.selection.select_prev_shape();
});
app.main.data.workspace.select_next_shape = (function app$main$data$workspace$select_next_shape(){
return app.main.data.workspace.selection.select_next_shape();
});
app.main.data.workspace.shift_select_shapes = (function() {
var app$main$data$workspace$shift_select_shapes = null;
var app$main$data$workspace$shift_select_shapes__1 = (function (param51818){
return app.main.data.workspace.selection.shift_select_shapes.cljs$core$IFn$_invoke$arity$1(param51818);
});
var app$main$data$workspace$shift_select_shapes__2 = (function (param51819,param51820){
return app.main.data.workspace.selection.shift_select_shapes.cljs$core$IFn$_invoke$arity$2(param51819,param51820);
});
app$main$data$workspace$shift_select_shapes = function(param51819,param51820){
switch(arguments.length){
case 1:
return app$main$data$workspace$shift_select_shapes__1.call(this,param51819);
case 2:
return app$main$data$workspace$shift_select_shapes__2.call(this,param51819,param51820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$shift_select_shapes.cljs$core$IFn$_invoke$arity$1 = app$main$data$workspace$shift_select_shapes__1;
app$main$data$workspace$shift_select_shapes.cljs$core$IFn$_invoke$arity$2 = app$main$data$workspace$shift_select_shapes__2;
return app$main$data$workspace$shift_select_shapes;
})()
;
app.main.data.workspace.highlight_shape = (function app$main$data$workspace$highlight_shape(param51821){
return app.main.data.workspace.highlight.highlight_shape(param51821);
});
app.main.data.workspace.dehighlight_shape = (function app$main$data$workspace$dehighlight_shape(param51822){
return app.main.data.workspace.highlight.dehighlight_shape(param51822);
});
app.main.data.workspace.update_shape_flags = (function app$main$data$workspace$update_shape_flags(param51832,param51833){
return app.main.data.workspace.shapes.update_shape_flags(param51832,param51833);
});
app.main.data.workspace.toggle_visibility_selected = (function app$main$data$workspace$toggle_visibility_selected(){
return app.main.data.workspace.shapes.toggle_visibility_selected();
});
app.main.data.workspace.toggle_lock_selected = (function app$main$data$workspace$toggle_lock_selected(){
return app.main.data.workspace.shapes.toggle_lock_selected();
});
app.main.data.workspace.toggle_file_thumbnail_selected = (function app$main$data$workspace$toggle_file_thumbnail_selected(){
return app.main.data.workspace.shapes.toggle_file_thumbnail_selected();
});
app.main.data.workspace.mask_group = (function() {
var app$main$data$workspace$mask_group = null;
var app$main$data$workspace$mask_group__0 = (function (){
return app.main.data.workspace.groups.mask_group.cljs$core$IFn$_invoke$arity$0();
});
var app$main$data$workspace$mask_group__1 = (function (param51849){
return app.main.data.workspace.groups.mask_group.cljs$core$IFn$_invoke$arity$1(param51849);
});
app$main$data$workspace$mask_group = function(param51849){
switch(arguments.length){
case 0:
return app$main$data$workspace$mask_group__0.call(this);
case 1:
return app$main$data$workspace$mask_group__1.call(this,param51849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$mask_group.cljs$core$IFn$_invoke$arity$0 = app$main$data$workspace$mask_group__0;
app$main$data$workspace$mask_group.cljs$core$IFn$_invoke$arity$1 = app$main$data$workspace$mask_group__1;
return app$main$data$workspace$mask_group;
})()
;
app.main.data.workspace.unmask_group = (function() {
var app$main$data$workspace$unmask_group = null;
var app$main$data$workspace$unmask_group__0 = (function (){
return app.main.data.workspace.groups.unmask_group.cljs$core$IFn$_invoke$arity$0();
});
var app$main$data$workspace$unmask_group__1 = (function (param51860){
return app.main.data.workspace.groups.unmask_group.cljs$core$IFn$_invoke$arity$1(param51860);
});
app$main$data$workspace$unmask_group = function(param51860){
switch(arguments.length){
case 0:
return app$main$data$workspace$unmask_group__0.call(this);
case 1:
return app$main$data$workspace$unmask_group__1.call(this,param51860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$unmask_group.cljs$core$IFn$_invoke$arity$0 = app$main$data$workspace$unmask_group__0;
app$main$data$workspace$unmask_group.cljs$core$IFn$_invoke$arity$1 = app$main$data$workspace$unmask_group__1;
return app$main$data$workspace$unmask_group;
})()
;
app.main.data.workspace.group_selected = (function app$main$data$workspace$group_selected(){
return app.main.data.workspace.groups.group_selected();
});
app.main.data.workspace.ungroup_selected = (function app$main$data$workspace$ungroup_selected(){
return app.main.data.workspace.groups.ungroup_selected();
});
/**
 * @param {...*} var_args
 */
app.main.data.workspace.create_bool = (function() { 
var app$main$data$workspace$create_bool__delegate = function (param51875,param51876){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(app.main.data.workspace.bool.create_bool,param51875,param51876);
};
var app$main$data$workspace$create_bool = function (param51875,var_args){
var param51876 = null;
if (arguments.length > 1) {
var G__52218__i = 0, G__52218__a = new Array(arguments.length -  1);
while (G__52218__i < G__52218__a.length) {G__52218__a[G__52218__i] = arguments[G__52218__i + 1]; ++G__52218__i;}
  param51876 = new cljs.core.IndexedSeq(G__52218__a,0,null);
} 
return app$main$data$workspace$create_bool__delegate.call(this,param51875,param51876);};
app$main$data$workspace$create_bool.cljs$lang$maxFixedArity = 1;
app$main$data$workspace$create_bool.cljs$lang$applyTo = (function (arglist__52219){
var param51875 = cljs.core.first(arglist__52219);
var param51876 = cljs.core.rest(arglist__52219);
return app$main$data$workspace$create_bool__delegate(param51875,param51876);
});
app$main$data$workspace$create_bool.cljs$core$IFn$_invoke$arity$variadic = app$main$data$workspace$create_bool__delegate;
return app$main$data$workspace$create_bool;
})()
;
app.main.data.workspace.group_to_bool = (function app$main$data$workspace$group_to_bool(param51877,param51878){
return app.main.data.workspace.bool.group_to_bool(param51877,param51878);
});
app.main.data.workspace.bool_to_group = (function app$main$data$workspace$bool_to_group(param51880){
return app.main.data.workspace.bool.bool_to_group(param51880);
});
app.main.data.workspace.change_bool_type = (function app$main$data$workspace$change_bool_type(param51885,param51886){
return app.main.data.workspace.bool.change_bool_type(param51885,param51886);
});
app.main.data.workspace.convert_selected_to_path = (function() {
var app$main$data$workspace$convert_selected_to_path = null;
var app$main$data$workspace$convert_selected_to_path__0 = (function (){
return app.main.data.workspace.path.shapes_to_path.convert_selected_to_path.cljs$core$IFn$_invoke$arity$0();
});
var app$main$data$workspace$convert_selected_to_path__1 = (function (param51887){
return app.main.data.workspace.path.shapes_to_path.convert_selected_to_path.cljs$core$IFn$_invoke$arity$1(param51887);
});
app$main$data$workspace$convert_selected_to_path = function(param51887){
switch(arguments.length){
case 0:
return app$main$data$workspace$convert_selected_to_path__0.call(this);
case 1:
return app$main$data$workspace$convert_selected_to_path__1.call(this,param51887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$convert_selected_to_path.cljs$core$IFn$_invoke$arity$0 = app$main$data$workspace$convert_selected_to_path__0;
app$main$data$workspace$convert_selected_to_path.cljs$core$IFn$_invoke$arity$1 = app$main$data$workspace$convert_selected_to_path__1;
return app$main$data$workspace$convert_selected_to_path;
})()
;
app.main.data.workspace.update_guides = (function app$main$data$workspace$update_guides(param51888){
return app.main.data.workspace.guides.update_guides(param51888);
});
app.main.data.workspace.remove_guide = (function app$main$data$workspace$remove_guide(param51889){
return app.main.data.workspace.guides.remove_guide(param51889);
});
app.main.data.workspace.set_hover_guide = (function app$main$data$workspace$set_hover_guide(param51890,param51891){
return app.main.data.workspace.guides.set_hover_guide(param51890,param51891);
});
app.main.data.workspace.reset_zoom = app.main.data.workspace.zoom.reset_zoom;
app.main.data.workspace.zoom_to_selected_shape = app.main.data.workspace.zoom.zoom_to_selected_shape;
app.main.data.workspace.start_zooming = (function app$main$data$workspace$start_zooming(param51892){
return app.main.data.workspace.zoom.start_zooming(param51892);
});
app.main.data.workspace.finish_zooming = (function app$main$data$workspace$finish_zooming(){
return app.main.data.workspace.zoom.finish_zooming();
});
app.main.data.workspace.zoom_to_fit_all = app.main.data.workspace.zoom.zoom_to_fit_all;
app.main.data.workspace.decrease_zoom = (function() {
var app$main$data$workspace$decrease_zoom = null;
var app$main$data$workspace$decrease_zoom__0 = (function (){
return app.main.data.workspace.zoom.decrease_zoom.cljs$core$IFn$_invoke$arity$0();
});
var app$main$data$workspace$decrease_zoom__1 = (function (param51893){
return app.main.data.workspace.zoom.decrease_zoom.cljs$core$IFn$_invoke$arity$1(param51893);
});
app$main$data$workspace$decrease_zoom = function(param51893){
switch(arguments.length){
case 0:
return app$main$data$workspace$decrease_zoom__0.call(this);
case 1:
return app$main$data$workspace$decrease_zoom__1.call(this,param51893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$decrease_zoom.cljs$core$IFn$_invoke$arity$0 = app$main$data$workspace$decrease_zoom__0;
app$main$data$workspace$decrease_zoom.cljs$core$IFn$_invoke$arity$1 = app$main$data$workspace$decrease_zoom__1;
return app$main$data$workspace$decrease_zoom;
})()
;
app.main.data.workspace.increase_zoom = (function() {
var app$main$data$workspace$increase_zoom = null;
var app$main$data$workspace$increase_zoom__0 = (function (){
return app.main.data.workspace.zoom.increase_zoom.cljs$core$IFn$_invoke$arity$0();
});
var app$main$data$workspace$increase_zoom__1 = (function (param51894){
return app.main.data.workspace.zoom.increase_zoom.cljs$core$IFn$_invoke$arity$1(param51894);
});
app$main$data$workspace$increase_zoom = function(param51894){
switch(arguments.length){
case 0:
return app$main$data$workspace$increase_zoom__0.call(this);
case 1:
return app$main$data$workspace$increase_zoom__1.call(this,param51894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$increase_zoom.cljs$core$IFn$_invoke$arity$0 = app$main$data$workspace$increase_zoom__0;
app$main$data$workspace$increase_zoom.cljs$core$IFn$_invoke$arity$1 = app$main$data$workspace$increase_zoom__1;
return app$main$data$workspace$increase_zoom;
})()
;
app.main.data.workspace.set_zoom = (function() {
var app$main$data$workspace$set_zoom = null;
var app$main$data$workspace$set_zoom__1 = (function (param51895){
return app.main.data.workspace.zoom.set_zoom.cljs$core$IFn$_invoke$arity$1(param51895);
});
var app$main$data$workspace$set_zoom__2 = (function (param51896,param51897){
return app.main.data.workspace.zoom.set_zoom.cljs$core$IFn$_invoke$arity$2(param51896,param51897);
});
app$main$data$workspace$set_zoom = function(param51896,param51897){
switch(arguments.length){
case 1:
return app$main$data$workspace$set_zoom__1.call(this,param51896);
case 2:
return app$main$data$workspace$set_zoom__2.call(this,param51896,param51897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$set_zoom.cljs$core$IFn$_invoke$arity$1 = app$main$data$workspace$set_zoom__1;
app$main$data$workspace$set_zoom.cljs$core$IFn$_invoke$arity$2 = app$main$data$workspace$set_zoom__2;
return app$main$data$workspace$set_zoom;
})()
;
/**
 * Updates the thumbnail information for the given `id`
 */
app.main.data.workspace.update_thumbnail = (function app$main$data$workspace$update_thumbnail(param51899,param51900,param51901,param51902,param51903){
return app.main.data.workspace.thumbnails.update_thumbnail(param51899,param51900,param51901,param51902,param51903);
});
app.main.data.workspace.initialize_viewport = (function app$main$data$workspace$initialize_viewport(param51909){
return app.main.data.workspace.viewport.initialize_viewport(param51909);
});
app.main.data.workspace.update_viewport_position = (function app$main$data$workspace$update_viewport_position(param51911){
return app.main.data.workspace.viewport.update_viewport_position(param51911);
});
app.main.data.workspace.update_viewport_size = (function app$main$data$workspace$update_viewport_size(param51913,param51914){
return app.main.data.workspace.viewport.update_viewport_size(param51913,param51914);
});
app.main.data.workspace.start_panning = (function app$main$data$workspace$start_panning(){
return app.main.data.workspace.viewport.start_panning();
});
app.main.data.workspace.finish_panning = (function app$main$data$workspace$finish_panning(){
return app.main.data.workspace.viewport.finish_panning();
});
app.main.data.workspace.reinitialize_undo = app.main.data.workspace.undo.reinitialize_undo;
app.main.data.workspace.initialize_page = (function app$main$data$workspace$initialize_page(param51916,param51917){
return app.main.data.workspace.pages.initialize_page(param51916,param51917);
});
app.main.data.workspace.finalize_page = (function app$main$data$workspace$finalize_page(param51918,param51919){
return app.main.data.workspace.pages.finalize_page(param51918,param51919);
});
app.main.data.workspace.create_page = (function app$main$data$workspace$create_page(param51922){
return app.main.data.workspace.pages.create_page(param51922);
});
app.main.data.workspace.duplicate_page = (function app$main$data$workspace$duplicate_page(param51923){
return app.main.data.workspace.pages.duplicate_page(param51923);
});
app.main.data.workspace.rename_page = (function app$main$data$workspace$rename_page(param51924,param51925){
return app.main.data.workspace.pages.rename_page(param51924,param51925);
});
app.main.data.workspace.delete_page = (function app$main$data$workspace$delete_page(param51926){
return app.main.data.workspace.pages.delete_page(param51926);
});

//# sourceMappingURL=app.main.data.workspace.js.map
