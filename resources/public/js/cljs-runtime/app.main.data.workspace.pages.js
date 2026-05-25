import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.types.component.js";
import "./app.common.types.components_list.js";
import "./app.common.types.container.js";
import "./app.common.types.page.js";
import "./app.common.types.shape_tree.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.data.changes.js";
import "./app.main.data.common.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.drawing.js";
import "./app.main.data.workspace.fix_deleted_fonts.js";
import "./app.main.data.workspace.layout.js";
import "./app.main.data.workspace.libraries.js";
import "./app.main.data.workspace.thumbnails.js";
import "./app.main.errors.js";
import "./app.main.features.js";
import "./app.main.router.js";
import "./app.main.worker.js";
import "./app.render_wasm.shape.js";
import "./app.util.http.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./cljs.spec.alpha.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.pages');
app.main.data.workspace.pages.default_workspace_local = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(1)], null);
app.main.data.workspace.pages.select_frame_tool = (function app$main$data$workspace$pages$select_frame_tool(file_id,page_id){
if((typeof app.main.data.workspace.pages.select_frame_tool_50752 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.pages.select_frame_tool_50752 = (function (file_id,page_id,meta50753){
this.file_id = file_id;
this.page_id = page_id;
this.meta50753 = meta50753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.pages.select_frame_tool_50752.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.pages.select_frame_tool_50752.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.pages","select-frame-tool","app.main.data.workspace.pages/select-frame-tool",-968606818);
}));

(app.main.data.workspace.pages.select_frame_tool_50752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50754,meta50753__$1){
var self__ = this;
var _50754__$1 = this;
return (new app.main.data.workspace.pages.select_frame_tool_50752(self__.file_id,self__.page_id,meta50753__$1));
}));

(app.main.data.workspace.pages.select_frame_tool_50752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50754){
var self__ = this;
var _50754__$1 = this;
return self__.meta50753;
}));

(app.main.data.workspace.pages.select_frame_tool_50752.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.pages.select_frame_tool_50752.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$3(state,self__.file_id,self__.page_id);
if(app.common.types.page.is_empty_QMARK_(page)){
return beicon.v2.core.of(app.main.data.workspace.drawing.select_for_drawing(new cljs.core.Keyword(null,"frame","frame",-1711082588)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.pages.select_frame_tool_50752(file_id,page_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Resolve and collect all file media on page objects
 */
app.main.data.workspace.pages.xf_COLON_collect_file_media = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second),cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__50756){
var map__50757 = p__50756;
var map__50757__$1 = cljs.core.__destructure_map(map__50757);
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50757__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
var fill_image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50757__$1,new cljs.core.Keyword(null,"fill-image","fill-image",-99895848));
if((!((metadata == null)))){
return app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1(metadata);
} else {
if((!((fill_image == null)))){
return app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1(fill_image);
} else {
return null;
}
}
})));
app.main.data.workspace.pages.get_page_cache = (function app$main$data$workspace$pages$get_page_cache(state,file_id,page_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-cache","workspace-cache",773600470)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_id,page_id], null));
});
/**
 * Second phase of page initialization, once we know the page is
 *   available in the state
 */
app.main.data.workspace.pages.initialize_page_STAR_ = (function app$main$data$workspace$pages$initialize_page_STAR_(file_id,page_id){
if((typeof app.main.data.workspace.pages.initialize_page_STAR__50760 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.pages.initialize_page_STAR__50760 = (function (file_id,page_id,meta50761){
this.file_id = file_id;
this.page_id = page_id;
this.meta50761 = meta50761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.pages.initialize_page_STAR__50760.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.pages.initialize_page_STAR__50760.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.pages","initialize-page*","app.main.data.workspace.pages/initialize-page*",-142066834);
}));

(app.main.data.workspace.pages.initialize_page_STAR__50760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50762,meta50761__$1){
var self__ = this;
var _50762__$1 = this;
return (new app.main.data.workspace.pages.initialize_page_STAR__50760(self__.file_id,self__.page_id,meta50761__$1));
}));

(app.main.data.workspace.pages.initialize_page_STAR__50760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50762){
var self__ = this;
var _50762__$1 = this;
return self__.meta50761;
}));

(app.main.data.workspace.pages.initialize_page_STAR__50760.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.pages.initialize_page_STAR__50760.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var state__$1 = app.main.data.helpers.update_page.cljs$core$IFn$_invoke$arity$4(state,self__.file_id,self__.page_id,(function (p1__50758_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__50758_SHARP_,new cljs.core.Keyword(null,"objects","objects",2099713734),app.common.types.shape_tree.start_page_index);
}));
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$3(state__$1,self__.file_id,self__.page_id);
var local = (function (){var or__5025__auto__ = app.main.data.workspace.pages.get_page_cache(state__$1,self__.file_id,self__.page_id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.data.workspace.pages.default_workspace_local;
}
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425),self__.page_id),new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(local,new cljs.core.Keyword(null,"selected","selected",574897764),app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0())),new cljs.core.Keyword(null,"workspace-trimmed-page","workspace-trimmed-page",-460377068),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"id","id",-1388402092))], null)),new cljs.core.Keyword(null,"workspace-layout","workspace-layout",420938173),app.main.data.workspace.layout.load_layout_flags),new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),app.main.data.workspace.layout.load_layout_state);
}));

(app.main.data.workspace.pages.initialize_page_STAR__50760.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.pages.initialize_page_STAR__50760.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$3(state,self__.file_id,self__.page_id);
var uris = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,app.main.data.workspace.pages.xf_COLON_collect_file_media,new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page));
return beicon.v2.core.merge(beicon.v2.core.ignore(beicon.v2.core.map((function (p1__50759_SHARP_){
return app.util.http.fetch_data_uri.cljs$core$IFn$_invoke$arity$2(p1__50759_SHARP_,false);
}),beicon.v2.core.from(uris))),beicon.v2.core.ignore(app.main.worker.ask_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cmd","cmd",-302931143),new cljs.core.Keyword("index","initialize","index/initialize",510000551),new cljs.core.Keyword(null,"page","page",849072397),page], null))));
}));
}

return (new app.main.data.workspace.pages.initialize_page_STAR__50760(file_id,page_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.pages.initialize_page = (function app$main$data$workspace$pages$initialize_page(file_id,page_id){
if(cljs.core.uuid_QMARK_(file_id)){
} else {
throw (new Error(["Assert failed: ","expected valid uuid for `file-id`","\n","(uuid? file-id)"].join('')));
}

if(cljs.core.uuid_QMARK_(page_id)){
} else {
throw (new Error(["Assert failed: ","expected valid uuid for `page-id`","\n","(uuid? page-id)"].join('')));
}

if((typeof app.main.data.workspace.pages.initialize_page_50775 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.pages.initialize_page_50775 = (function (file_id,page_id,meta50776){
this.file_id = file_id;
this.page_id = page_id;
this.meta50776 = meta50776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.pages.initialize_page_50775.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.pages.initialize_page_50775.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.pages","initialize-page","app.main.data.workspace.pages/initialize-page",-80938988);
}));

(app.main.data.workspace.pages.initialize_page_50775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50777,meta50776__$1){
var self__ = this;
var _50777__$1 = this;
return (new app.main.data.workspace.pages.initialize_page_50775(self__.file_id,self__.page_id,meta50776__$1));
}));

(app.main.data.workspace.pages.initialize_page_50775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50777){
var self__ = this;
var _50777__$1 = this;
return self__.meta50776;
}));

(app.main.data.workspace.pages.initialize_page_50775.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.pages.initialize_page_50775.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$3(state,self__.file_id,self__.page_id))){
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.pages.initialize_page_STAR_(self__.file_id,self__.page_id),app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_page(self__.file_id,self__.page_id)),(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))?beicon.v2.core.empty():beicon.v2.core.of(app.main.data.workspace.thumbnails.watch_state_changes(self__.file_id,self__.page_id))),beicon.v2.core.of(app.main.data.workspace.libraries.watch_component_changes()),(function (){var profile = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(state);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(profile,new cljs.core.Keyword(null,"props","props",453281727));
if(cljs.core.not(new cljs.core.Keyword(null,"workspace-visited","workspace-visited",479274314).cljs$core$IFn$_invoke$arity$1(props))){
return beicon.v2.core.of(app.main.data.workspace.pages.select_frame_tool(self__.file_id,self__.page_id));
} else {
return null;
}
})());
} else {
return beicon.v2.core.of(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword("app.main.router","replace","app.main.router/replace",466128885),true], 0)));
}
}));
}

return (new app.main.data.workspace.pages.initialize_page_50775(file_id,page_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.pages.finalize_page = (function app$main$data$workspace$pages$finalize_page(file_id,page_id){
if(cljs.core.uuid_QMARK_(file_id)){
} else {
throw (new Error(["Assert failed: ","expected valid uuid for `file-id`","\n","(uuid? file-id)"].join('')));
}

if(cljs.core.uuid_QMARK_(page_id)){
} else {
throw (new Error(["Assert failed: ","expected valid uuid for `page-id`","\n","(uuid? page-id)"].join('')));
}

if((typeof app.main.data.workspace.pages.finalize_page_50783 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.pages.finalize_page_50783 = (function (file_id,page_id,meta50784){
this.file_id = file_id;
this.page_id = page_id;
this.meta50784 = meta50784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.pages.finalize_page_50783.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.pages.finalize_page_50783.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.pages","finalize-page","app.main.data.workspace.pages/finalize-page",526513034);
}));

(app.main.data.workspace.pages.finalize_page_50783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50785,meta50784__$1){
var self__ = this;
var _50785__$1 = this;
return (new app.main.data.workspace.pages.finalize_page_50783(self__.file_id,self__.page_id,meta50784__$1));
}));

(app.main.data.workspace.pages.finalize_page_50783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50785){
var self__ = this;
var _50785__$1 = this;
return self__.meta50784;
}));

(app.main.data.workspace.pages.finalize_page_50783.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.pages.finalize_page_50783.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var local = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"edition","edition",1337508089),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),new cljs.core.Keyword(null,"selected","selected",574897764)], 0));
var exit_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace","workspace",-1096735709),app.main.router.lookup_name(state));
var state__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"workspace-cache","workspace-cache",773600470),cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.file_id,self__.page_id], null),local),new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"workspace-trimmed-page","workspace-trimmed-page",-460377068),new cljs.core.Keyword(null,"workspace-focus-selected","workspace-focus-selected",978051257)], 0));
var G__50787 = state__$1;
if(exit_QMARK_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50787,new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973));
} else {
return G__50787;
}
}));
}

return (new app.main.data.workspace.pages.finalize_page_50783(file_id,page_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.pages.update_page_root = (function app$main$data$workspace$pages$update_page_root(file_id,page_id){
if((typeof app.main.data.workspace.pages.update_page_root_50788 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.pages.update_page_root_50788 = (function (file_id,page_id,meta50789){
this.file_id = file_id;
this.page_id = page_id;
this.meta50789 = meta50789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.pages.update_page_root_50788.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.pages.update_page_root_50788.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.pages","update-page-root","app.main.data.workspace.pages/update-page-root",-1237648848);
}));

(app.main.data.workspace.pages.update_page_root_50788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50790,meta50789__$1){
var self__ = this;
var _50790__$1 = this;
return (new app.main.data.workspace.pages.update_page_root_50788(self__.file_id,self__.page_id,meta50789__$1));
}));

(app.main.data.workspace.pages.update_page_root_50788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50790){
var self__ = this;
var _50790__$1 = this;
return self__.meta50789;
}));

(app.main.data.workspace.pages.update_page_root_50788.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.pages.update_page_root_50788.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),self__.file_id,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),self__.page_id,new cljs.core.Keyword(null,"objects","objects",2099713734),app.common.uuid.zero], null),app.render_wasm.shape.create_shape);
}));
}

return (new app.main.data.workspace.pages.update_page_root_50788(file_id,page_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.pages.create_page = (function app$main$data$workspace$pages$create_page(p__50791){
var map__50792 = p__50791;
var map__50792__$1 = cljs.core.__destructure_map(map__50792);
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50792__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50792__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var id = (function (){var or__5025__auto__ = page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.uuid.next();
}
})();
if((typeof app.main.data.workspace.pages.create_page_50793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.pages.create_page_50793 = (function (p__50791,map__50792,page_id,file_id,id,meta50794){
this.p__50791 = p__50791;
this.map__50792 = map__50792;
this.page_id = page_id;
this.file_id = file_id;
this.id = id;
this.meta50794 = meta50794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.pages.create_page_50793.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.pages.create_page_50793.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.pages","create-page","app.main.data.workspace.pages/create-page",-101676872);
}));

(app.main.data.workspace.pages.create_page_50793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50795,meta50794__$1){
var self__ = this;
var _50795__$1 = this;
return (new app.main.data.workspace.pages.create_page_50793(self__.p__50791,self__.map__50792,self__.page_id,self__.file_id,self__.id,meta50794__$1));
}));

(app.main.data.workspace.pages.create_page_50793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50795){
var self__ = this;
var _50795__$1 = this;
return self__.meta50794;
}));

(app.main.data.workspace.pages.create_page_50793.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.pages.create_page_50793.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id], null);
}));

(app.main.data.workspace.pages.create_page_50793.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.pages.create_page_50793.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145));
var unames = app.common.files.helpers.get_used_names(pages);
var name = app.common.files.helpers.generate_unique_name.cljs$core$IFn$_invoke$arity$variadic("Page",unames,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"immediate-suffix?","immediate-suffix?",-127830647),true], 0));
var changes = app.common.files.changes_builder.add_empty_page(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),self__.id,name);
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.changes.commit_changes(changes)),(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))?beicon.v2.core.of(app.main.data.workspace.pages.update_page_root(self__.file_id,self__.id)):beicon.v2.core.empty()));
}));
}

return (new app.main.data.workspace.pages.create_page_50793(p__50791,map__50792__$1,page_id,file_id,id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.pages.duplicate_page = (function app$main$data$workspace$pages$duplicate_page(page_id){
if((typeof app.main.data.workspace.pages.duplicate_page_50800 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.pages.duplicate_page_50800 = (function (page_id,meta50801){
this.page_id = page_id;
this.meta50801 = meta50801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.pages.duplicate_page_50800.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.pages.duplicate_page_50800.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.pages","duplicate-page","app.main.data.workspace.pages/duplicate-page",-622790476);
}));

(app.main.data.workspace.pages.duplicate_page_50800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50802,meta50801__$1){
var self__ = this;
var _50802__$1 = this;
return (new app.main.data.workspace.pages.duplicate_page_50800(self__.page_id,meta50801__$1));
}));

(app.main.data.workspace.pages.duplicate_page_50800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50802){
var self__ = this;
var _50802__$1 = this;
return self__.meta50801;
}));

(app.main.data.workspace.pages.duplicate_page_50800.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.pages.duplicate_page_50800.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var new_page_id = app.common.uuid.next();
var fdata = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fdata,new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pages,self__.page_id);
var unames = app.common.files.helpers.get_used_names(pages);
var suffix_fn = (function (copy_count){
return ""+" "+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.copy-suffix") ?? "")+((((copy_count > (1)))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(copy_count)].join(''):null) ?? "");
});
var base_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(page);
var name = app.common.files.helpers.generate_unique_name.cljs$core$IFn$_invoke$arity$variadic(base_name,unames,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"suffix-fn","suffix-fn",-1026050512),suffix_fn], 0));
var objects = cljs.core.update_vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),(function (p1__50796_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50796_SHARP_,new cljs.core.Keyword(null,"use-for-thumbnail","use-for-thumbnail",1921212442));
}));
var main_not_variant_ids = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__50797_SHARP_){
if(((app.common.types.component.main_instance_QMARK_(cljs.core.val(p1__50797_SHARP_))) && ((!(app.common.types.component.is_variant_QMARK_(cljs.core.val(p1__50797_SHARP_))))))){
return cljs.core.key(p1__50797_SHARP_);
} else {
return null;
}
}),objects));
var ids_to_remove = cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50798_SHARP_){
return app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,p1__50798_SHARP_);
}),main_not_variant_ids)));
var add_component_copy = (function (objs,id,shape){
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2(fdata,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape));
var parent_id = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),app.common.uuid.zero))?new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape):null);
var vec__50803 = app.common.types.container.make_component_instance.cljs$core$IFn$_invoke$arity$5(page,component,fdata,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keep-ids?","keep-ids?",-236947248),true,new cljs.core.Keyword(null,"force-frame-id","force-frame-id",1562086521),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"force-parent-id","force-parent-id",724093063),parent_id], null));
var new_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50803,(0),null);
var new_shapes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50803,(1),null);
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (shape__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1),shape__$1], null);
}),new_shapes));
var objs__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(objs,id,new_shape);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([objs__$1,children], 0));
});
var variant_mains = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.types.component.is_variant_QMARK_,cljs.core.vals(objects));
var variants_ids_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ids_map,shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ids_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),app.common.uuid.next(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape),app.common.uuid.next(),new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(shape),app.common.uuid.next()], 0));
}),cljs.core.PersistentArrayMap.EMPTY,variant_mains);
var update_variant_values = (function (shape){
var new_shape = (function (){var G__50815 = shape;
var G__50815__$1 = ((cljs.core.contains_QMARK_(shape,new cljs.core.Keyword(null,"component-id","component-id",1551113783)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50815,new cljs.core.Keyword(null,"component-id","component-id",1551113783),cljs.core.get.cljs$core$IFn$_invoke$arity$2(variants_ids_map,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape))):G__50815);
if(cljs.core.contains_QMARK_(shape,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50815__$1,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),cljs.core.get.cljs$core$IFn$_invoke$arity$2(variants_ids_map,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(shape)));
} else {
return G__50815__$1;
}
})();
return new_shape;
});
var add_comp = (function (changes,main){
var new_component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(variants_ids_map,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(main));
var new_variant_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(variants_ids_map,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(main));
var main_instance_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(variants_ids_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(main));
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2(fdata,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(main));
return app.common.files.changes_builder.add_component(changes,new_component_id,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component),cljs.core.PersistentVector.EMPTY,main_instance_id,new_page_id,new cljs.core.Keyword(null,"annotation","annotation",-344661666).cljs$core$IFn$_invoke$arity$1(component),new_variant_id,new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(component));
});
var objects__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (objs,p__50818){
var vec__50819 = p__50818;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50819,(0),null);
var shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50819,(1),null);
if(cljs.core.contains_QMARK_(main_not_variant_ids,id)){
return add_component_copy(objs,id,shape);
} else {
if(cljs.core.contains_QMARK_(ids_to_remove,id)){
return objs;
} else {
if(cljs.core.contains_QMARK_(variants_ids_map,id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(objs,id,update_variant_values(shape));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(objs,id,shape);

}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,objects);
var objects__$2 = cljs.core.reduce_kv((function (objs,___$1,p__50822){
var map__50823 = p__50822;
var map__50823__$1 = cljs.core.__destructure_map(map__50823);
var shape = map__50823__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50823__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50823__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50823__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(objs,cljs.core.get.cljs$core$IFn$_invoke$arity$3(variants_ids_map,id,id),(function (){var G__50825 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.cljs$core$IFn$_invoke$arity$3(variants_ids_map,id,id)),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),cljs.core.get.cljs$core$IFn$_invoke$arity$3(variants_ids_map,parent_id,parent_id)),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),cljs.core.get.cljs$core$IFn$_invoke$arity$3(variants_ids_map,frame_id,frame_id));
if(cljs.core.contains_QMARK_(shape,new cljs.core.Keyword(null,"shapes","shapes",1897594879))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50825,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50799_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(variants_ids_map,p1__50799_SHARP_,p1__50799_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape)));
} else {
return G__50825;
}
})());
}),cljs.core.PersistentArrayMap.EMPTY,objects__$1);
var page__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword(null,"name","name",1843675177),name),new cljs.core.Keyword(null,"id","id",-1388402092),new_page_id),new cljs.core.Keyword(null,"objects","objects",2099713734),objects__$2);
var changes = (function (){var changes = app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_page(app.common.files.changes_builder.add_page(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),new_page_id,page__$1),page__$1),objects__$2);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_comp,changes,variant_mains);
})();
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
}));
}

return (new app.main.data.workspace.pages.duplicate_page_50800(page_id,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.main.data.workspace.pages","rename-page","app.main.data.workspace.pages/rename-page",-862208872),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.main.data.workspace.pages","id","app.main.data.workspace.pages/id",422466501),new cljs.core.Keyword("app.main.data.workspace.pages","name","app.main.data.workspace.pages/name",813037210)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.main.data.workspace.pages","id","app.main.data.workspace.pages/id",422466501),new cljs.core.Keyword("app.main.data.workspace.pages","name","app.main.data.workspace.pages/name",813037210)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__50826){
return cljs.core.map_QMARK_(G__50826);
}),(function (G__50826){
return cljs.core.contains_QMARK_(G__50826,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__50826){
return cljs.core.contains_QMARK_(G__50826,new cljs.core.Keyword(null,"name","name",1843675177));
})], null),(function (G__50826){
return ((cljs.core.map_QMARK_(G__50826)) && (((cljs.core.contains_QMARK_(G__50826,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__50826,new cljs.core.Keyword(null,"name","name",1843675177))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.main.data.workspace.pages","id","app.main.data.workspace.pages/id",422466501),new cljs.core.Keyword("app.main.data.workspace.pages","name","app.main.data.workspace.pages/name",813037210)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"name","name",1843675177)))], null),null])));
app.main.data.workspace.pages.rename_page = (function app$main$data$workspace$pages$rename_page(id,name){
app.common.data.macros.runtime_assert("expr assert: (uuid? id)",(function (){
return cljs.core.uuid_QMARK_(id);
}));

app.common.data.macros.runtime_assert("expr assert: (string? name)",(function (){
return typeof name === 'string';
}));

if((typeof app.main.data.workspace.pages.rename_page_50827 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.pages.rename_page_50827 = (function (id,name,meta50828){
this.id = id;
this.name = name;
this.meta50828 = meta50828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.pages.rename_page_50827.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.pages.rename_page_50827.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.pages","rename-page","app.main.data.workspace.pages/rename-page",-862208872);
}));

(app.main.data.workspace.pages.rename_page_50827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50829,meta50828__$1){
var self__ = this;
var _50829__$1 = this;
return (new app.main.data.workspace.pages.rename_page_50827(self__.id,self__.name,meta50828__$1));
}));

(app.main.data.workspace.pages.rename_page_50827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50829){
var self__ = this;
var _50829__$1 = this;
return self__.meta50828;
}));

(app.main.data.workspace.pages.rename_page_50827.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.pages.rename_page_50827.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$2(state,self__.id);
var changes = app.common.files.changes_builder.mod_page.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_page(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),page),page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),self__.name], null));
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
}));
}

return (new app.main.data.workspace.pages.rename_page_50827(id,name,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.pages.delete_page_components = (function app$main$data$workspace$pages$delete_page_components(changes,page){
var components_to_delete = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-id","component-id",1551113783),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50830_SHARP_){
return new cljs.core.Keyword(null,"main-instance","main-instance",476264761).cljs$core$IFn$_invoke$arity$1(p1__50830_SHARP_) === true;
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page))));
var changes__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes__$1,component_id){
return app.common.files.changes_builder.delete_component(changes__$1,component_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page));
}),changes,components_to_delete);
return changes__$1;
});
app.main.data.workspace.pages.delete_page = (function app$main$data$workspace$pages$delete_page(id){
if((typeof app.main.data.workspace.pages.delete_page_50832 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.pages.delete_page_50832 = (function (id,meta50833){
this.id = id;
this.meta50833 = meta50833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.pages.delete_page_50832.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.pages.delete_page_50832.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.pages","delete-page","app.main.data.workspace.pages/delete-page",2094037607);
}));

(app.main.data.workspace.pages.delete_page_50832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50834,meta50833__$1){
var self__ = this;
var _50834__$1 = this;
return (new app.main.data.workspace.pages.delete_page_50832(self__.id,meta50833__$1));
}));

(app.main.data.workspace.pages.delete_page_50832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50834){
var self__ = this;
var _50834__$1 = this;
return self__.meta50833;
}));

(app.main.data.workspace.pages.delete_page_50832.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.pages.delete_page_50832.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var fdata = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,file_id);
var pindex = new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145).cljs$core$IFn$_invoke$arity$1(fdata);
var pages = new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(fdata);
var index = app.common.data.index_of(pages,self__.id);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pindex,self__.id);
var page__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword(null,"index","index",-1531685915),index);
var pages__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50831_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__50831_SHARP_,self__.id);
}),pages);
var changes = app.common.files.changes_builder.del_page(app.main.data.workspace.pages.delete_page_components(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),fdata),page__$1),page__$1);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.id,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state)))?app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),cljs.core.first(pages__$1)], null)], 0)):null));
}));
}

return (new app.main.data.workspace.pages.delete_page_50832(id,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.pages.js.map
