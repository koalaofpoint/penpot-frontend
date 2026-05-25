import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.logging.js";
import "./app.main.repo.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.project');
app.common.logging.loggers.set("app.main.data.project",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"warn","warn",-436710552)));
app.main.data.project.project_fetched = (function app$main$data$project$project_fetched(p__56396){
var map__56397 = p__56396;
var map__56397__$1 = cljs.core.__destructure_map(map__56397);
var project = map__56397__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56397__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if((typeof app.main.data.project.project_fetched_56398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.project.project_fetched_56398 = (function (p__56396,map__56397,project,id,meta56399){
this.p__56396 = p__56396;
this.map__56397 = map__56397;
this.project = project;
this.id = id;
this.meta56399 = meta56399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.project.project_fetched_56398.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.project.project_fetched_56398.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.project","project-fetched","app.main.data.project/project-fetched",-1022027404);
}));

(app.main.data.project.project_fetched_56398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56400,meta56399__$1){
var self__ = this;
var _56400__$1 = this;
return (new app.main.data.project.project_fetched_56398(self__.p__56396,self__.map__56397,self__.project,self__.id,meta56399__$1));
}));

(app.main.data.project.project_fetched_56398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56400){
var self__ = this;
var _56400__$1 = this;
return self__.meta56399;
}));

(app.main.data.project.project_fetched_56398.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.project.project_fetched_56398.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),self__.id], null),cljs.core.merge,self__.project);
}));
}

return (new app.main.data.project.project_fetched_56398(p__56396,map__56397__$1,project,id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Fetch or refresh a single project
 */
app.main.data.project.fetch_project = (function app$main$data$project$fetch_project(var_args){
var G__56416 = arguments.length;
switch (G__56416) {
case 0:
return app.main.data.project.fetch_project.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.project.fetch_project.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.project.fetch_project.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.project.fetch_project.cljs$core$IFn$_invoke$arity$0();
}));

(app.main.data.project.fetch_project.cljs$core$IFn$_invoke$arity$1 = (function (project_id){
if(cljs.core.uuid_QMARK_(project_id)){
} else {
throw (new Error(["Assert failed: ","expected a valid uuid for `project-id`","\n","(uuid? project-id)"].join('')));
}

if((typeof app.main.data.project.fetch_project_56417 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.project.fetch_project_56417 = (function (project_id,meta56418){
this.project_id = project_id;
this.meta56418 = meta56418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.project.fetch_project_56417.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.project.fetch_project_56417.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.project","fetch-project","app.main.data.project/fetch-project",2128789384);
}));

(app.main.data.project.fetch_project_56417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56419,meta56418__$1){
var self__ = this;
var _56419__$1 = this;
return (new app.main.data.project.fetch_project_56417(self__.project_id,meta56418__$1));
}));

(app.main.data.project.fetch_project_56417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56419){
var self__ = this;
var _56419__$1 = this;
return self__.meta56418;
}));

(app.main.data.project.fetch_project_56417.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.project.fetch_project_56417.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var project_id__$1 = (function (){var or__5025__auto__ = self__.project_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-project-id","current-project-id",1950829814).cljs$core$IFn$_invoke$arity$1(state);
}
})();
return beicon.v2.core.map(app.main.data.project.project_fetched,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-project","get-project",621757082),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),project_id__$1], null)));
}));
}

return (new app.main.data.project.fetch_project_56417(project_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.project.fetch_project.cljs$lang$maxFixedArity = 1);

app.main.data.project.initialize_project = (function app$main$data$project$initialize_project(project_id){
if((typeof app.main.data.project.initialize_project_56423 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.project.initialize_project_56423 = (function (project_id,meta56424){
this.project_id = project_id;
this.meta56424 = meta56424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.project.initialize_project_56423.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.project.initialize_project_56423.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.project","initialize-project","app.main.data.project/initialize-project",-1472717746);
}));

(app.main.data.project.initialize_project_56423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56425,meta56424__$1){
var self__ = this;
var _56425__$1 = this;
return (new app.main.data.project.initialize_project_56423(self__.project_id,meta56424__$1));
}));

(app.main.data.project.initialize_project_56423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56425){
var self__ = this;
var _56425__$1 = this;
return self__.meta56424;
}));

(app.main.data.project.initialize_project_56423.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.project.initialize_project_56423.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-project-id","current-project-id",1950829814),self__.project_id);
}));

(app.main.data.project.initialize_project_56423.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.project.initialize_project_56423.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.project.fetch_project.cljs$core$IFn$_invoke$arity$1(self__.project_id));
}));
}

return (new app.main.data.project.initialize_project_56423(project_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.project.finalize_project = (function app$main$data$project$finalize_project(project_id){
if((typeof app.main.data.project.finalize_project_56431 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.project.finalize_project_56431 = (function (project_id,meta56432){
this.project_id = project_id;
this.meta56432 = meta56432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.project.finalize_project_56431.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.project.finalize_project_56431.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.project","finalize-project","app.main.data.project/finalize-project",-533802710);
}));

(app.main.data.project.finalize_project_56431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56433,meta56432__$1){
var self__ = this;
var _56433__$1 = this;
return (new app.main.data.project.finalize_project_56431(self__.project_id,meta56432__$1));
}));

(app.main.data.project.finalize_project_56431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56433){
var self__ = this;
var _56433__$1 = this;
return self__.meta56432;
}));

(app.main.data.project.finalize_project_56431.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.project.finalize_project_56431.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var project_id_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-project-id","current-project-id",1950829814));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(project_id_SINGLEQUOTE_,self__.project_id)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-project-id","current-project-id",1950829814));
} else {
return state;
}
}));
}

return (new app.main.data.project.finalize_project_56431(project_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.project.files_fetched = (function app$main$data$project$files_fetched(project_id,files){
if((typeof app.main.data.project.files_fetched_56440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.project.files_fetched_56440 = (function (project_id,files,meta56441){
this.project_id = project_id;
this.files = files;
this.meta56441 = meta56441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.project.files_fetched_56440.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.project.files_fetched_56440.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.project","files-fetched","app.main.data.project/files-fetched",32635619);
}));

(app.main.data.project.files_fetched_56440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56442,meta56441__$1){
var self__ = this;
var _56442__$1 = this;
return (new app.main.data.project.files_fetched_56440(self__.project_id,self__.files,meta56441__$1));
}));

(app.main.data.project.files_fetched_56440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56442){
var self__ = this;
var _56442__$1 = this;
return self__.meta56441;
}));

(app.main.data.project.files_fetched_56440.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.project.files_fetched_56440.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.common.data.update_in_when(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.merge,app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),self__.files)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),self__.project_id], null),(function (project){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(project,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.count(self__.files));
}));
}));
}

return (new app.main.data.project.files_fetched_56440(project_id,files,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.project.fetch_files = (function app$main$data$project$fetch_files(var_args){
var G__56444 = arguments.length;
switch (G__56444) {
case 0:
return app.main.data.project.fetch_files.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.project.fetch_files.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.project.fetch_files.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.project.fetch_files.cljs$core$IFn$_invoke$arity$1(null);
}));

(app.main.data.project.fetch_files.cljs$core$IFn$_invoke$arity$1 = (function (project_id){
if((typeof app.main.data.project.fetch_files_56451 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.project.fetch_files_56451 = (function (project_id,meta56452){
this.project_id = project_id;
this.meta56452 = meta56452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.project.fetch_files_56451.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.project.fetch_files_56451.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.project","fetch-files","app.main.data.project/fetch-files",1623536159);
}));

(app.main.data.project.fetch_files_56451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56453,meta56452__$1){
var self__ = this;
var _56453__$1 = this;
return (new app.main.data.project.fetch_files_56451(self__.project_id,meta56452__$1));
}));

(app.main.data.project.fetch_files_56451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56453){
var self__ = this;
var _56453__$1 = this;
return self__.meta56452;
}));

(app.main.data.project.fetch_files_56451.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.project.fetch_files_56451.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var temp__5825__auto__ = (function (){var or__5025__auto__ = self__.project_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-project-id","current-project-id",1950829814).cljs$core$IFn$_invoke$arity$1(state);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var project_id__$1 = temp__5825__auto__;
return beicon.v2.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.data.project.files_fetched,project_id__$1),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-project-files","get-project-files",1403433285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project-id","project-id",206449307),project_id__$1], null)));
} else {
return null;
}
}));
}

return (new app.main.data.project.fetch_files_56451(project_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.project.fetch_files.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=app.main.data.project.js.map
