import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.features.js";
import "./app.common.files.helpers.js";
import "./app.common.logging.js";
import "./app.common.schema.js";
import "./app.common.time.js";
import "./app.common.types.project.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.constants.js";
import "./app.main.data.common.js";
import "./app.main.data.event.js";
import "./app.main.data.fonts.js";
import "./app.main.data.helpers.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.data.websocket.js";
import "./app.main.repo.js";
import "./app.main.store.js";
import "./app.util.i18n.js";
import "./app.util.sse.js";
import "./beicon.v2.core.js";
import "./clojure.set.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.dashboard');
app.common.logging.loggers.set("app.main.data.dashboard",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"warn","warn",-436710552)));
app.main.data.dashboard.initialize = (function app$main$data$dashboard$initialize(team_id){
if(cljs.core.uuid_QMARK_(team_id)){
} else {
throw (new Error(["Assert failed: ","expected uuid instance for `team-id`","\n","(uuid? team-id)"].join('')));
}

if((typeof app.main.data.dashboard.initialize_51533 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.initialize_51533 = (function (team_id,meta51534){
this.team_id = team_id;
this.meta51534 = meta51534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.initialize_51533.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.initialize_51533.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","initialize","app.main.data.dashboard/initialize",-1368877159);
}));

(app.main.data.dashboard.initialize_51533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51535,meta51534__$1){
var self__ = this;
var _51535__$1 = this;
return (new app.main.data.dashboard.initialize_51533(self__.team_id,meta51534__$1));
}));

(app.main.data.dashboard.initialize_51533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51535){
var self__ = this;
var _51535__$1 = this;
return self__.meta51534;
}));

(app.main.data.dashboard.initialize_51533.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.initialize_51533.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var stopper = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.dashboard","finalize","app.main.data.dashboard/finalize",624606997)),stream);
var profile_id = new cljs.core.Keyword(null,"profile-id","profile-id",1866572309).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.take_until(stopper,beicon.v2.core.merge(beicon.v2.core.of((app.main.data.dashboard.fetch_projects.cljs$core$IFn$_invoke$arity$1 ? app.main.data.dashboard.fetch_projects.cljs$core$IFn$_invoke$arity$1(self__.team_id) : app.main.data.dashboard.fetch_projects.call(null,self__.team_id)),app.main.data.fonts.fetch_fonts(self__.team_id)),beicon.v2.core.map(app.main.data.dashboard.process_message,beicon.v2.core.filter((function (p__51537){
var map__51539 = p__51537;
var map__51539__$1 = cljs.core.__destructure_map(map__51539);
var msg = map__51539__$1;
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51539__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,app.common.uuid.zero)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,profile_id)));
}),beicon.v2.core.map(cljs.core.deref,beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.websocket","message","app.main.data.websocket/message",-2128948247)),stream))))));
}));
}

return (new app.main.data.dashboard.initialize_51533(team_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.finalize = (function app$main$data$dashboard$finalize(team_id){
return potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.dashboard","finalize","app.main.data.dashboard/finalize",624606997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null));
});
app.main.data.dashboard.projects_fetched = (function app$main$data$dashboard$projects_fetched(projects){
if((typeof app.main.data.dashboard.projects_fetched_51543 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.projects_fetched_51543 = (function (projects,meta51544){
this.projects = projects;
this.meta51544 = meta51544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.projects_fetched_51543.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.projects_fetched_51543.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","projects-fetched","app.main.data.dashboard/projects-fetched",-1575596718);
}));

(app.main.data.dashboard.projects_fetched_51543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51545,meta51544__$1){
var self__ = this;
var _51545__$1 = this;
return (new app.main.data.dashboard.projects_fetched_51543(self__.projects,meta51544__$1));
}));

(app.main.data.dashboard.projects_fetched_51543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51545){
var self__ = this;
var _51545__$1 = this;
return self__.meta51544;
}));

(app.main.data.dashboard.projects_fetched_51543.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.projects_fetched_51543.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,p__51552){
var map__51553 = p__51552;
var map__51553__$1 = cljs.core.__destructure_map(map__51553);
var project = map__51553__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51553__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),id], null),project);
}),state,self__.projects);
}));
}

return (new app.main.data.dashboard.projects_fetched_51543(projects,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.fetch_projects = (function app$main$data$dashboard$fetch_projects(team_id){
if((typeof app.main.data.dashboard.fetch_projects_51554 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.fetch_projects_51554 = (function (team_id,meta51555){
this.team_id = team_id;
this.meta51555 = meta51555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.fetch_projects_51554.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.fetch_projects_51554.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","fetch-projects","app.main.data.dashboard/fetch-projects",-1013150815);
}));

(app.main.data.dashboard.fetch_projects_51554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51556,meta51555__$1){
var self__ = this;
var _51556__$1 = this;
return (new app.main.data.dashboard.fetch_projects_51554(self__.team_id,meta51555__$1));
}));

(app.main.data.dashboard.fetch_projects_51554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51556){
var self__ = this;
var _51556__$1 = this;
return self__.meta51555;
}));

(app.main.data.dashboard.fetch_projects_51554.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.fetch_projects_51554.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.map(app.main.data.dashboard.projects_fetched,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-projects","get-projects",933934649),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id], null)));
}));
}

return (new app.main.data.dashboard.fetch_projects_51554(team_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.schema_COLON_search_params = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-term","search-term",356193544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null);
app.main.data.dashboard.check_search_params = app.common.schema.check_fn(app.main.data.dashboard.schema_COLON_search_params);
app.main.data.dashboard.search = (function app$main$data$dashboard$search(params){
var params__$1 = app.main.data.dashboard.check_search_params(params);
if((typeof app.main.data.dashboard.search_51558 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.search_51558 = (function (params,meta51559){
this.params = params;
this.meta51559 = meta51559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.search_51558.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.search_51558.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","search","app.main.data.dashboard/search",-944445674);
}));

(app.main.data.dashboard.search_51558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51560,meta51559__$1){
var self__ = this;
var _51560__$1 = this;
return (new app.main.data.dashboard.search_51558(self__.params,meta51559__$1));
}));

(app.main.data.dashboard.search_51558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51560){
var self__ = this;
var _51560__$1 = this;
return self__.meta51559;
}));

(app.main.data.dashboard.search_51558.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.search_51558.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"search-result","search-result",528142443));
}));

(app.main.data.dashboard.search_51558.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.search_51558.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.params,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id);
return beicon.v2.core.map((function (result){
return (function (p1__51557_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51557_SHARP_,new cljs.core.Keyword(null,"search-result","search-result",528142443),result);
});
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"search-files","search-files",473802622),params__$1));
}));
}

return (new app.main.data.dashboard.search_51558(params__$1,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.recent_files_fetched = (function app$main$data$dashboard$recent_files_fetched(files){
if((typeof app.main.data.dashboard.recent_files_fetched_51561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.recent_files_fetched_51561 = (function (files,meta51562){
this.files = files;
this.meta51562 = meta51562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.recent_files_fetched_51561.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.recent_files_fetched_51561.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","recent-files-fetched","app.main.data.dashboard/recent-files-fetched",1922744559);
}));

(app.main.data.dashboard.recent_files_fetched_51561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51563,meta51562__$1){
var self__ = this;
var _51563__$1 = this;
return (new app.main.data.dashboard.recent_files_fetched_51561(self__.files,meta51562__$1));
}));

(app.main.data.dashboard.recent_files_fetched_51561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51563){
var self__ = this;
var _51563__$1 = this;
return self__.meta51562;
}));

(app.main.data.dashboard.recent_files_fetched_51561.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.recent_files_fetched_51561.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var files__$1 = app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),self__.files);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"recent-files","recent-files",-314450292),files__$1),new cljs.core.Keyword(null,"files","files",-472457450),app.common.data.merge,files__$1);
}));
}

return (new app.main.data.dashboard.recent_files_fetched_51561(files,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.fetch_recent_files = (function app$main$data$dashboard$fetch_recent_files(var_args){
var G__51565 = arguments.length;
switch (G__51565) {
case 0:
return app.main.data.dashboard.fetch_recent_files.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.dashboard.fetch_recent_files.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.dashboard.fetch_recent_files.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.dashboard.fetch_recent_files.cljs$core$IFn$_invoke$arity$1(null);
}));

(app.main.data.dashboard.fetch_recent_files.cljs$core$IFn$_invoke$arity$1 = (function (team_id){
if((typeof app.main.data.dashboard.fetch_recent_files_51566 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.fetch_recent_files_51566 = (function (team_id,meta51567){
this.team_id = team_id;
this.meta51567 = meta51567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.fetch_recent_files_51566.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.fetch_recent_files_51566.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","fetch-recent-files","app.main.data.dashboard/fetch-recent-files",-157817221);
}));

(app.main.data.dashboard.fetch_recent_files_51566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51568,meta51567__$1){
var self__ = this;
var _51568__$1 = this;
return (new app.main.data.dashboard.fetch_recent_files_51566(self__.team_id,meta51567__$1));
}));

(app.main.data.dashboard.fetch_recent_files_51566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51568){
var self__ = this;
var _51568__$1 = this;
return self__.meta51567;
}));

(app.main.data.dashboard.fetch_recent_files_51566.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.fetch_recent_files_51566.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var temp__5825__auto__ = (function (){var or__5025__auto__ = self__.team_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var team_id__$1 = temp__5825__auto__;
return beicon.v2.core.map(app.main.data.dashboard.recent_files_fetched,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-team-recent-files","get-team-recent-files",-1548935774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id__$1], null)));
} else {
return null;
}
}));
}

return (new app.main.data.dashboard.fetch_recent_files_51566(team_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.dashboard.fetch_recent_files.cljs$lang$maxFixedArity = 1);

app.main.data.dashboard.builtin_templates_fetched = (function app$main$data$dashboard$builtin_templates_fetched(libraries){
if((typeof app.main.data.dashboard.libraries_fetched_51572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.libraries_fetched_51572 = (function (libraries,meta51573){
this.libraries = libraries;
this.meta51573 = meta51573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.libraries_fetched_51572.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.libraries_fetched_51572.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","libraries-fetched","app.main.data.dashboard/libraries-fetched",1645518018);
}));

(app.main.data.dashboard.libraries_fetched_51572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51574,meta51573__$1){
var self__ = this;
var _51574__$1 = this;
return (new app.main.data.dashboard.libraries_fetched_51572(self__.libraries,meta51573__$1));
}));

(app.main.data.dashboard.libraries_fetched_51572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51574){
var self__ = this;
var _51574__$1 = this;
return self__.meta51573;
}));

(app.main.data.dashboard.libraries_fetched_51572.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.libraries_fetched_51572.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"builtin-templates","builtin-templates",698520902),self__.libraries);
}));
}

return (new app.main.data.dashboard.libraries_fetched_51572(libraries,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.fetch_builtin_templates = (function app$main$data$dashboard$fetch_builtin_templates(){
if((typeof app.main.data.dashboard.fetch_builtin_templates_51578 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.fetch_builtin_templates_51578 = (function (meta51579){
this.meta51579 = meta51579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.fetch_builtin_templates_51578.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.fetch_builtin_templates_51578.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","fetch-builtin-templates","app.main.data.dashboard/fetch-builtin-templates",1341565156);
}));

(app.main.data.dashboard.fetch_builtin_templates_51578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51580,meta51579__$1){
var self__ = this;
var _51580__$1 = this;
return (new app.main.data.dashboard.fetch_builtin_templates_51578(meta51579__$1));
}));

(app.main.data.dashboard.fetch_builtin_templates_51578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51580){
var self__ = this;
var _51580__$1 = this;
return self__.meta51579;
}));

(app.main.data.dashboard.fetch_builtin_templates_51578.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.fetch_builtin_templates_51578.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.map(app.main.data.dashboard.builtin_templates_fetched,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"get-builtin-templates","get-builtin-templates",-981643185)));
}));
}

return (new app.main.data.dashboard.fetch_builtin_templates_51578(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.deleted_files_fetched = (function app$main$data$dashboard$deleted_files_fetched(files){
if((typeof app.main.data.dashboard.deleted_files_fetched_51582 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.deleted_files_fetched_51582 = (function (files,meta51583){
this.files = files;
this.meta51583 = meta51583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.deleted_files_fetched_51582.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.deleted_files_fetched_51582.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","deleted-files-fetched","app.main.data.dashboard/deleted-files-fetched",-890046446);
}));

(app.main.data.dashboard.deleted_files_fetched_51582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51584,meta51583__$1){
var self__ = this;
var _51584__$1 = this;
return (new app.main.data.dashboard.deleted_files_fetched_51582(self__.files,meta51583__$1));
}));

(app.main.data.dashboard.deleted_files_fetched_51582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51584){
var self__ = this;
var _51584__$1 = this;
return self__.meta51583;
}));

(app.main.data.dashboard.deleted_files_fetched_51582.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.deleted_files_fetched_51582.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var now = app.common.time.now();
var filtered_files = cljs.core.filterv((function (file){
var will_be_deleted_at = new cljs.core.Keyword(null,"will-be-deleted-at","will-be-deleted-at",-1174985202).cljs$core$IFn$_invoke$arity$1(file);
return (((will_be_deleted_at == null)) || (app.common.time.is_after_QMARK_(will_be_deleted_at,now)));
}),self__.files);
var files__$1 = app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),filtered_files);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"deleted-files","deleted-files",-555859130),files__$1),new cljs.core.Keyword(null,"files","files",-472457450),app.common.data.merge,files__$1);
}));
}

return (new app.main.data.dashboard.deleted_files_fetched_51582(files,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.fetch_deleted_files = (function app$main$data$dashboard$fetch_deleted_files(var_args){
var G__51608 = arguments.length;
switch (G__51608) {
case 0:
return app.main.data.dashboard.fetch_deleted_files.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.dashboard.fetch_deleted_files.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.dashboard.fetch_deleted_files.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.dashboard.fetch_deleted_files.cljs$core$IFn$_invoke$arity$1(null);
}));

(app.main.data.dashboard.fetch_deleted_files.cljs$core$IFn$_invoke$arity$1 = (function (team_id){
if((typeof app.main.data.dashboard.fetch_deleted_files_51610 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.fetch_deleted_files_51610 = (function (team_id,meta51611){
this.team_id = team_id;
this.meta51611 = meta51611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.fetch_deleted_files_51610.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.fetch_deleted_files_51610.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","fetch-deleted-files","app.main.data.dashboard/fetch-deleted-files",-1974788947);
}));

(app.main.data.dashboard.fetch_deleted_files_51610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51612,meta51611__$1){
var self__ = this;
var _51612__$1 = this;
return (new app.main.data.dashboard.fetch_deleted_files_51610(self__.team_id,meta51611__$1));
}));

(app.main.data.dashboard.fetch_deleted_files_51610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51612){
var self__ = this;
var _51612__$1 = this;
return self__.meta51611;
}));

(app.main.data.dashboard.fetch_deleted_files_51610.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.fetch_deleted_files_51610.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var temp__5825__auto__ = (function (){var or__5025__auto__ = self__.team_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var team_id__$1 = temp__5825__auto__;
return beicon.v2.core.map(app.main.data.dashboard.deleted_files_fetched,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-team-deleted-files","get-team-deleted-files",888137090),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id__$1], null)));
} else {
return null;
}
}));
}

return (new app.main.data.dashboard.fetch_deleted_files_51610(team_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.dashboard.fetch_deleted_files.cljs$lang$maxFixedArity = 1);

app.main.data.dashboard.clear_selected_files = (function app$main$data$dashboard$clear_selected_files(){
if((typeof app.main.data.dashboard.clear_file_select_51616 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.clear_file_select_51616 = (function (meta51617){
this.meta51617 = meta51617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.clear_file_select_51616.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.clear_file_select_51616.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","clear-file-select","app.main.data.dashboard/clear-file-select",-107086303);
}));

(app.main.data.dashboard.clear_file_select_51616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51618,meta51617__$1){
var self__ = this;
var _51618__$1 = this;
return (new app.main.data.dashboard.clear_file_select_51616(meta51617__$1));
}));

(app.main.data.dashboard.clear_file_select_51616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51618){
var self__ = this;
var _51618__$1 = this;
return self__.meta51617;
}));

(app.main.data.dashboard.clear_file_select_51616.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.clear_file_select_51616.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"selected-files","selected-files",1045525459)),new cljs.core.Keyword(null,"selected-project","selected-project",993223033)),new cljs.core.Keyword(null,"dashboard-local","dashboard-local",-334594003),cljs.core.dissoc,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),new cljs.core.Keyword(null,"menu-pos","menu-pos",1459627496));
}));
}

return (new app.main.data.dashboard.clear_file_select_51616(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.toggle_file_select = (function app$main$data$dashboard$toggle_file_select(p__51626){
var map__51627 = p__51626;
var map__51627__$1 = cljs.core.__destructure_map(map__51627);
var file = map__51627__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51627__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51627__$1,new cljs.core.Keyword(null,"project-id","project-id",206449307));
if((typeof app.main.data.dashboard.toggle_file_select_51628 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.toggle_file_select_51628 = (function (p__51626,map__51627,file,id,project_id,meta51629){
this.p__51626 = p__51626;
this.map__51627 = map__51627;
this.file = file;
this.id = id;
this.project_id = project_id;
this.meta51629 = meta51629;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.toggle_file_select_51628.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.toggle_file_select_51628.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","toggle-file-select","app.main.data.dashboard/toggle-file-select",-767554472);
}));

(app.main.data.dashboard.toggle_file_select_51628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51630,meta51629__$1){
var self__ = this;
var _51630__$1 = this;
return (new app.main.data.dashboard.toggle_file_select_51628(self__.p__51626,self__.map__51627,self__.file,self__.id,self__.project_id,meta51629__$1));
}));

(app.main.data.dashboard.toggle_file_select_51628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51630){
var self__ = this;
var _51630__$1 = this;
return self__.meta51629;
}));

(app.main.data.dashboard.toggle_file_select_51628.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.toggle_file_select_51628.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var selected_project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"selected-project","selected-project",993223033));
if((((selected_project_id == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_project_id,self__.project_id)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"selected-files","selected-files",1045525459),(function (p1__51625_SHARP_){
if(cljs.core.contains_QMARK_(p1__51625_SHARP_,self__.id)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__51625_SHARP_,self__.id);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__51625_SHARP_,self__.id);
}
})),new cljs.core.Keyword(null,"selected-project","selected-project",993223033),self__.project_id);
} else {
return state;
}
}));
}

return (new app.main.data.dashboard.toggle_file_select_51628(p__51626,map__51627__$1,file,id,project_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.show_file_menu_with_position = (function app$main$data$dashboard$show_file_menu_with_position(file_id,pos){
if((typeof app.main.data.dashboard.show_file_menu_with_position_51633 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.show_file_menu_with_position_51633 = (function (file_id,pos,meta51634){
this.file_id = file_id;
this.pos = pos;
this.meta51634 = meta51634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.show_file_menu_with_position_51633.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.show_file_menu_with_position_51633.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","show-file-menu-with-position","app.main.data.dashboard/show-file-menu-with-position",1901428190);
}));

(app.main.data.dashboard.show_file_menu_with_position_51633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51635,meta51634__$1){
var self__ = this;
var _51635__$1 = this;
return (new app.main.data.dashboard.show_file_menu_with_position_51633(self__.file_id,self__.pos,meta51634__$1));
}));

(app.main.data.dashboard.show_file_menu_with_position_51633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51635){
var self__ = this;
var _51635__$1 = this;
return self__.meta51634;
}));

(app.main.data.dashboard.show_file_menu_with_position_51633.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.show_file_menu_with_position_51633.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"dashboard-local","dashboard-local",-334594003),cljs.core.assoc,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),true,new cljs.core.Keyword(null,"menu-pos","menu-pos",1459627496),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.pos,new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id], 0));
}));
}

return (new app.main.data.dashboard.show_file_menu_with_position_51633(file_id,pos,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.show_file_menu = (function app$main$data$dashboard$show_file_menu(){
if((typeof app.main.data.dashboard.show_file_menu_51639 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.show_file_menu_51639 = (function (meta51640){
this.meta51640 = meta51640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.show_file_menu_51639.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.show_file_menu_51639.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","show-file-menu","app.main.data.dashboard/show-file-menu",1692911416);
}));

(app.main.data.dashboard.show_file_menu_51639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51641,meta51640__$1){
var self__ = this;
var _51641__$1 = this;
return (new app.main.data.dashboard.show_file_menu_51639(meta51640__$1));
}));

(app.main.data.dashboard.show_file_menu_51639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51641){
var self__ = this;
var _51641__$1 = this;
return self__.meta51640;
}));

(app.main.data.dashboard.show_file_menu_51639.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.show_file_menu_51639.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"dashboard-local","dashboard-local",-334594003),cljs.core.assoc,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),true);
}));
}

return (new app.main.data.dashboard.show_file_menu_51639(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.hide_file_menu = (function app$main$data$dashboard$hide_file_menu(){
if((typeof app.main.data.dashboard.hide_file_menu_51643 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.hide_file_menu_51643 = (function (meta51644){
this.meta51644 = meta51644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.hide_file_menu_51643.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.hide_file_menu_51643.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","hide-file-menu","app.main.data.dashboard/hide-file-menu",1101642004);
}));

(app.main.data.dashboard.hide_file_menu_51643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51645,meta51644__$1){
var self__ = this;
var _51645__$1 = this;
return (new app.main.data.dashboard.hide_file_menu_51643(meta51644__$1));
}));

(app.main.data.dashboard.hide_file_menu_51643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51645){
var self__ = this;
var _51645__$1 = this;
return self__.meta51644;
}));

(app.main.data.dashboard.hide_file_menu_51643.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.hide_file_menu_51643.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"dashboard-local","dashboard-local",-334594003),cljs.core.assoc,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
}));
}

return (new app.main.data.dashboard.hide_file_menu_51643(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.start_edit_file_name = (function app$main$data$dashboard$start_edit_file_name(file_id){
if((typeof app.main.data.dashboard.start_edit_file_menu_51657 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.start_edit_file_menu_51657 = (function (file_id,meta51658){
this.file_id = file_id;
this.meta51658 = meta51658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.start_edit_file_menu_51657.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.start_edit_file_menu_51657.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","start-edit-file-menu","app.main.data.dashboard/start-edit-file-menu",-1952572977);
}));

(app.main.data.dashboard.start_edit_file_menu_51657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51659,meta51658__$1){
var self__ = this;
var _51659__$1 = this;
return (new app.main.data.dashboard.start_edit_file_menu_51657(self__.file_id,meta51658__$1));
}));

(app.main.data.dashboard.start_edit_file_menu_51657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51659){
var self__ = this;
var _51659__$1 = this;
return self__.meta51658;
}));

(app.main.data.dashboard.start_edit_file_menu_51657.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.start_edit_file_menu_51657.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"dashboard-local","dashboard-local",-334594003),cljs.core.assoc,new cljs.core.Keyword(null,"edition","edition",1337508089),true,new cljs.core.Keyword(null,"file-id","file-id",-811871323),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.file_id], 0));
}));
}

return (new app.main.data.dashboard.start_edit_file_menu_51657(file_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.stop_edit_file_name = (function app$main$data$dashboard$stop_edit_file_name(){
if((typeof app.main.data.dashboard.stop_edit_file_name_51664 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.stop_edit_file_name_51664 = (function (meta51665){
this.meta51665 = meta51665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.stop_edit_file_name_51664.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.stop_edit_file_name_51664.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","stop-edit-file-name","app.main.data.dashboard/stop-edit-file-name",1215006280);
}));

(app.main.data.dashboard.stop_edit_file_name_51664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51666,meta51665__$1){
var self__ = this;
var _51666__$1 = this;
return (new app.main.data.dashboard.stop_edit_file_name_51664(meta51665__$1));
}));

(app.main.data.dashboard.stop_edit_file_name_51664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51666){
var self__ = this;
var _51666__$1 = this;
return self__.meta51665;
}));

(app.main.data.dashboard.stop_edit_file_name_51664.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.stop_edit_file_name_51664.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"dashboard-local","dashboard-local",-334594003),cljs.core.assoc,new cljs.core.Keyword(null,"edition","edition",1337508089),false);
}));
}

return (new app.main.data.dashboard.stop_edit_file_name_51664(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.project_created = (function app$main$data$dashboard$project_created(p__51674){
var map__51678 = p__51674;
var map__51678__$1 = cljs.core.__destructure_map(map__51678);
var project = map__51678__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51678__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if((typeof app.main.data.dashboard.project_created_51679 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.project_created_51679 = (function (p__51674,map__51678,project,id,meta51680){
this.p__51674 = p__51674;
this.map__51678 = map__51678;
this.project = project;
this.id = id;
this.meta51680 = meta51680;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.project_created_51679.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.project_created_51679.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","project-created","app.main.data.dashboard/project-created",-1879505768);
}));

(app.main.data.dashboard.project_created_51679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51681,meta51680__$1){
var self__ = this;
var _51681__$1 = this;
return (new app.main.data.dashboard.project_created_51679(self__.p__51674,self__.map__51678,self__.project,self__.id,meta51680__$1));
}));

(app.main.data.dashboard.project_created_51679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51681){
var self__ = this;
var _51681__$1 = this;
return self__.meta51680;
}));

(app.main.data.dashboard.project_created_51679.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.project;
}));

(app.main.data.dashboard.project_created_51679.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.project_created_51679.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),self__.id], null),self__.project),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard-local","dashboard-local",-334594003),new cljs.core.Keyword(null,"project-for-edit","project-for-edit",-763691370)], null),self__.id);
}));
}

return (new app.main.data.dashboard.project_created_51679(p__51674,map__51678__$1,project,id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.create_project = (function app$main$data$dashboard$create_project(){
if((typeof app.main.data.dashboard.create_project_51692 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.create_project_51692 = (function (meta51693){
this.meta51693 = meta51693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.create_project_51692.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.create_project_51692.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","create-project","app.main.data.dashboard/create-project",180950463);
}));

(app.main.data.dashboard.create_project_51692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51694,meta51693__$1){
var self__ = this;
var _51694__$1 = this;
return (new app.main.data.dashboard.create_project_51692(meta51693__$1));
}));

(app.main.data.dashboard.create_project_51692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51694){
var self__ = this;
var _51694__$1 = this;
return self__.meta51693;
}));

(app.main.data.dashboard.create_project_51692.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.create_project_51692.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
var projects = app.main.data.helpers.lookup_team_projects.cljs$core$IFn$_invoke$arity$2(state,team_id);
var unames = app.common.files.helpers.get_used_names(projects);
var base_name = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.new-project-prefix");
var name = app.common.files.helpers.generate_unique_name.cljs$core$IFn$_invoke$arity$variadic(base_name,unames,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"immediate-suffix?","immediate-suffix?",-127830647),true], 0));
var team_id__$1 = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id__$1], null);
var map__51716 = cljs.core.meta(params);
var map__51716__$1 = cljs.core.__destructure_map(map__51716);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51716__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51716__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.map(app.main.data.dashboard.project_created,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-project","create-project",-2068207849),params))));
}));
}

return (new app.main.data.dashboard.create_project_51692(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.project_duplicated = (function app$main$data$dashboard$project_duplicated(p__51730){
var map__51731 = p__51730;
var map__51731__$1 = cljs.core.__destructure_map(map__51731);
var project = map__51731__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51731__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if((typeof app.main.data.dashboard.project_duplicated_51739 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.project_duplicated_51739 = (function (p__51730,map__51731,project,id,meta51740){
this.p__51730 = p__51730;
this.map__51731 = map__51731;
this.project = project;
this.id = id;
this.meta51740 = meta51740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.project_duplicated_51739.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.project_duplicated_51739.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","project-duplicated","app.main.data.dashboard/project-duplicated",-1069292527);
}));

(app.main.data.dashboard.project_duplicated_51739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51741,meta51740__$1){
var self__ = this;
var _51741__$1 = this;
return (new app.main.data.dashboard.project_duplicated_51739(self__.p__51730,self__.map__51731,self__.project,self__.id,meta51740__$1));
}));

(app.main.data.dashboard.project_duplicated_51739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51741){
var self__ = this;
var _51741__$1 = this;
return self__.meta51740;
}));

(app.main.data.dashboard.project_duplicated_51739.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.project_duplicated_51739.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),self__.id], null),self__.project);
}));
}

return (new app.main.data.dashboard.project_duplicated_51739(p__51730,map__51731__$1,project,id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.duplicate_project = (function app$main$data$dashboard$duplicate_project(p__51764){
var map__51765 = p__51764;
var map__51765__$1 = cljs.core.__destructure_map(map__51765);
var params = map__51765__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51765__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51765__$1,new cljs.core.Keyword(null,"name","name",1843675177));
app.common.data.macros.runtime_assert("expr assert: (uuid? id)",(function (){
return cljs.core.uuid_QMARK_(id);
}));

if((typeof app.main.data.dashboard.duplicate_project_51771 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.duplicate_project_51771 = (function (p__51764,map__51765,params,id,name,meta51772){
this.p__51764 = p__51764;
this.map__51765 = map__51765;
this.params = params;
this.id = id;
this.name = name;
this.meta51772 = meta51772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.duplicate_project_51771.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.duplicate_project_51771.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","duplicate-project","app.main.data.dashboard/duplicate-project",1509170664);
}));

(app.main.data.dashboard.duplicate_project_51771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51773,meta51772__$1){
var self__ = this;
var _51773__$1 = this;
return (new app.main.data.dashboard.duplicate_project_51771(self__.p__51764,self__.map__51765,self__.params,self__.id,self__.name,meta51772__$1));
}));

(app.main.data.dashboard.duplicate_project_51771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51773){
var self__ = this;
var _51773__$1 = this;
return self__.meta51772;
}));

(app.main.data.dashboard.duplicate_project_51771.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.duplicate_project_51771.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"project-id","project-id",206449307),self__.id,new cljs.core.Keyword(null,"name","name",1843675177),self__.name], null);
}));

(app.main.data.dashboard.duplicate_project_51771.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.duplicate_project_51771.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var map__51781 = cljs.core.meta(self__.params);
var map__51781__$1 = cljs.core.__destructure_map(map__51781);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51781__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51781__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
var projects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"projects","projects",-364845983));
var unames = app.common.files.helpers.get_used_names(projects);
var suffix_fn = (function (copy_count){
return ""+" "+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.copy-suffix") ?? "")+((((copy_count > (1)))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(copy_count)].join(''):null) ?? "");
});
var new_name = app.common.files.helpers.generate_unique_name.cljs$core$IFn$_invoke$arity$variadic(self__.name,unames,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"suffix-fn","suffix-fn",-1026050512),suffix_fn], 0));
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.map(app.main.data.dashboard.project_duplicated,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"duplicate-project","duplicate-project",-1075466496),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"project-id","project-id",206449307),self__.id,new cljs.core.Keyword(null,"name","name",1843675177),new_name], null)))));
}));
}

return (new app.main.data.dashboard.duplicate_project_51771(p__51764,map__51765__$1,params,id,name,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.move_project = (function app$main$data$dashboard$move_project(p__51789){
var map__51790 = p__51789;
var map__51790__$1 = cljs.core.__destructure_map(map__51790);
var params = map__51790__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51790__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51790__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
app.common.data.macros.runtime_assert("expr assert: (uuid? id)",(function (){
return cljs.core.uuid_QMARK_(id);
}));

app.common.data.macros.runtime_assert("expr assert: (uuid? team-id)",(function (){
return cljs.core.uuid_QMARK_(team_id);
}));

if((typeof app.main.data.dashboard.move_project_51793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.move_project_51793 = (function (p__51789,map__51790,params,id,team_id,meta51794){
this.p__51789 = p__51789;
this.map__51790 = map__51790;
this.params = params;
this.id = id;
this.team_id = team_id;
this.meta51794 = meta51794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.move_project_51793.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.move_project_51793.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","move-project","app.main.data.dashboard/move-project",-1447817466);
}));

(app.main.data.dashboard.move_project_51793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51795,meta51794__$1){
var self__ = this;
var _51795__$1 = this;
return (new app.main.data.dashboard.move_project_51793(self__.p__51789,self__.map__51790,self__.params,self__.id,self__.team_id,meta51794__$1));
}));

(app.main.data.dashboard.move_project_51793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51795){
var self__ = this;
var _51795__$1 = this;
return self__.meta51794;
}));

(app.main.data.dashboard.move_project_51793.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.move_project_51793.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id], null);
}));

(app.main.data.dashboard.move_project_51793.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.move_project_51793.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__51817 = cljs.core.meta(self__.params);
var map__51817__$1 = cljs.core.__destructure_map(map__51817);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51817__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51817__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-project","move-project",797212190),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"project-id","project-id",206449307),self__.id,new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id], null))));
}));
}

return (new app.main.data.dashboard.move_project_51793(p__51789,map__51790__$1,params,id,team_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.toggle_project_pin = (function app$main$data$dashboard$toggle_project_pin(p__51824){
var map__51825 = p__51824;
var map__51825__$1 = cljs.core.__destructure_map(map__51825);
var project = map__51825__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51825__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var is_pinned = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51825__$1,new cljs.core.Keyword(null,"is-pinned","is-pinned",620920978));
if((typeof app.main.data.dashboard.toggle_project_pin_51826 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.toggle_project_pin_51826 = (function (p__51824,map__51825,project,id,is_pinned,meta51827){
this.p__51824 = p__51824;
this.map__51825 = map__51825;
this.project = project;
this.id = id;
this.is_pinned = is_pinned;
this.meta51827 = meta51827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.toggle_project_pin_51826.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.toggle_project_pin_51826.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","toggle-project-pin","app.main.data.dashboard/toggle-project-pin",2028304822);
}));

(app.main.data.dashboard.toggle_project_pin_51826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51828,meta51827__$1){
var self__ = this;
var _51828__$1 = this;
return (new app.main.data.dashboard.toggle_project_pin_51826(self__.p__51824,self__.map__51825,self__.project,self__.id,self__.is_pinned,meta51827__$1));
}));

(app.main.data.dashboard.toggle_project_pin_51826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51828){
var self__ = this;
var _51828__$1 = this;
return self__.meta51827;
}));

(app.main.data.dashboard.toggle_project_pin_51826.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.toggle_project_pin_51826.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),self__.id], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"is-pinned","is-pinned",620920978),cljs.core.not(self__.is_pinned)], 0));
}));

(app.main.data.dashboard.toggle_project_pin_51826.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.toggle_project_pin_51826.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var project__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),self__.id], null));
var params = cljs.core.select_keys(project__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"is-pinned","is-pinned",620920978),new cljs.core.Keyword(null,"team-id","team-id",-14505725)], null));
return beicon.v2.core.ignore(app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-project-pin","update-project-pin",-1855624591),params));
}));
}

return (new app.main.data.dashboard.toggle_project_pin_51826(p__51824,map__51825__$1,project,id,is_pinned,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.rename_project = (function app$main$data$dashboard$rename_project(p__51840){
var map__51841 = p__51840;
var map__51841__$1 = cljs.core.__destructure_map(map__51841);
var params = map__51841__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51841__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51841__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if((typeof app.main.data.dashboard.rename_project_51842 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.rename_project_51842 = (function (p__51840,map__51841,params,id,name,meta51843){
this.p__51840 = p__51840;
this.map__51841 = map__51841;
this.params = params;
this.id = id;
this.name = name;
this.meta51843 = meta51843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.rename_project_51842.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.rename_project_51842.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","rename-project","app.main.data.dashboard/rename-project",-1207543221);
}));

(app.main.data.dashboard.rename_project_51842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51844,meta51843__$1){
var self__ = this;
var _51844__$1 = this;
return (new app.main.data.dashboard.rename_project_51842(self__.p__51840,self__.map__51841,self__.params,self__.id,self__.name,meta51843__$1));
}));

(app.main.data.dashboard.rename_project_51842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51844){
var self__ = this;
var _51844__$1 = this;
return self__.meta51843;
}));

(app.main.data.dashboard.rename_project_51842.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.rename_project_51842.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),self__.id], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),self__.name], 0)),new cljs.core.Keyword(null,"dashboard-local","dashboard-local",-334594003),cljs.core.dissoc,new cljs.core.Keyword(null,"project-for-edit","project-for-edit",-763691370));
}));

(app.main.data.dashboard.rename_project_51842.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.rename_project_51842.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var params__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"name","name",1843675177),self__.name], null);
return beicon.v2.core.ignore(app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rename-project","rename-project",640216451),params__$1));
}));
}

return (new app.main.data.dashboard.rename_project_51842(p__51840,map__51841__$1,params,id,name,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.delete_project = (function app$main$data$dashboard$delete_project(p__51851){
var map__51853 = p__51851;
var map__51853__$1 = cljs.core.__destructure_map(map__51853);
var params = map__51853__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51853__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if((typeof app.main.data.dashboard.delete_project_51854 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.delete_project_51854 = (function (p__51851,map__51853,params,id,meta51855){
this.p__51851 = p__51851;
this.map__51853 = map__51853;
this.params = params;
this.id = id;
this.meta51855 = meta51855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.delete_project_51854.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.delete_project_51854.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","delete-project","app.main.data.dashboard/delete-project",507415211);
}));

(app.main.data.dashboard.delete_project_51854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51856,meta51855__$1){
var self__ = this;
var _51856__$1 = this;
return (new app.main.data.dashboard.delete_project_51854(self__.p__51851,self__.map__51853,self__.params,self__.id,meta51855__$1));
}));

(app.main.data.dashboard.delete_project_51854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51856){
var self__ = this;
var _51856__$1 = this;
return self__.meta51855;
}));

(app.main.data.dashboard.delete_project_51854.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.delete_project_51854.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.dissoc,self__.id);
}));

(app.main.data.dashboard.delete_project_51854.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.delete_project_51854.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.ignore(app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-project","delete-project",-1196614829),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)));
}));
}

return (new app.main.data.dashboard.delete_project_51854(p__51851,map__51853__$1,params,id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.file_deleted = (function app$main$data$dashboard$file_deleted(project_id){
if((typeof app.main.data.dashboard.file_deleted_51861 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.file_deleted_51861 = (function (project_id,meta51862){
this.project_id = project_id;
this.meta51862 = meta51862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.file_deleted_51861.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.file_deleted_51861.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","file-deleted","app.main.data.dashboard/file-deleted",-1133811731);
}));

(app.main.data.dashboard.file_deleted_51861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51863,meta51862__$1){
var self__ = this;
var _51863__$1 = this;
return (new app.main.data.dashboard.file_deleted_51861(self__.project_id,meta51862__$1));
}));

(app.main.data.dashboard.file_deleted_51861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51863){
var self__ = this;
var _51863__$1 = this;
return self__.meta51862;
}));

(app.main.data.dashboard.file_deleted_51861.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.file_deleted_51861.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.common.data.update_in_when(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),self__.project_id,new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.dec);
}));
}

return (new app.main.data.dashboard.file_deleted_51861(project_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.delete_file = (function app$main$data$dashboard$delete_file(p__51869){
var map__51871 = p__51869;
var map__51871__$1 = cljs.core.__destructure_map(map__51871);
var params = map__51871__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51871__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51871__$1,new cljs.core.Keyword(null,"project-id","project-id",206449307));
if((typeof app.main.data.dashboard.delete_file_51872 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.delete_file_51872 = (function (p__51869,map__51871,params,id,project_id,meta51873){
this.p__51869 = p__51869;
this.map__51871 = map__51871;
this.params = params;
this.id = id;
this.project_id = project_id;
this.meta51873 = meta51873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.delete_file_51872.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.delete_file_51872.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","delete-file","app.main.data.dashboard/delete-file",-1450992873);
}));

(app.main.data.dashboard.delete_file_51872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51874,meta51873__$1){
var self__ = this;
var _51874__$1 = this;
return (new app.main.data.dashboard.delete_file_51872(self__.p__51869,self__.map__51871,self__.params,self__.id,self__.project_id,meta51873__$1));
}));

(app.main.data.dashboard.delete_file_51872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51874){
var self__ = this;
var _51874__$1 = this;
return self__.meta51873;
}));

(app.main.data.dashboard.delete_file_51872.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.delete_file_51872.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.common.data.update_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_when.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0)),new cljs.core.Keyword(null,"shared-files","shared-files",-929120284),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0)),new cljs.core.Keyword(null,"recent-files","recent-files",-314450292),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
}));

(app.main.data.dashboard.delete_file_51872.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.delete_file_51872.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.data.dashboard.file_deleted,self__.project_id),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-file","delete-file",527846719),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)));
}));
}

return (new app.main.data.dashboard.delete_file_51872(p__51869,map__51871__$1,params,id,project_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.rename_file = (function app$main$data$dashboard$rename_file(p__51879){
var map__51881 = p__51879;
var map__51881__$1 = cljs.core.__destructure_map(map__51881);
var params = map__51881__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51881__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51881__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if((typeof app.main.data.dashboard.rename_file_51882 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.rename_file_51882 = (function (p__51879,map__51881,params,id,name,meta51883){
this.p__51879 = p__51879;
this.map__51881 = map__51881;
this.params = params;
this.id = id;
this.name = name;
this.meta51883 = meta51883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.rename_file_51882.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.rename_file_51882.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","rename-file","app.main.data.dashboard/rename-file",808622966);
}));

(app.main.data.dashboard.rename_file_51882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51884,meta51883__$1){
var self__ = this;
var _51884__$1 = this;
return (new app.main.data.dashboard.rename_file_51882(self__.p__51879,self__.map__51881,self__.params,self__.id,self__.name,meta51883__$1));
}));

(app.main.data.dashboard.rename_file_51882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51884){
var self__ = this;
var _51884__$1 = this;
return self__.meta51883;
}));

(app.main.data.dashboard.rename_file_51882.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.rename_file_51882.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"dashboard",new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"name","name",1843675177),self__.name], null);
}));

(app.main.data.dashboard.rename_file_51882.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.rename_file_51882.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.common.data.update_in_when(app.common.data.update_in_when(app.common.data.update_in_when(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),self__.id,new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.constantly(self__.name)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared-files","shared-files",-929120284),self__.id,new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.constantly(self__.name)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recent-files","recent-files",-314450292),self__.id,new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.constantly(self__.name));
}));

(app.main.data.dashboard.rename_file_51882.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.rename_file_51882.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var params__$1 = cljs.core.select_keys(self__.params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null));
return beicon.v2.core.ignore(app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rename-file","rename-file",-1507579634),params__$1));
}));
}

return (new app.main.data.dashboard.rename_file_51882(p__51879,map__51881__$1,params,id,name,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.set_file_shared = (function app$main$data$dashboard$set_file_shared(p__51898){
var map__51904 = p__51898;
var map__51904__$1 = cljs.core.__destructure_map(map__51904);
var params = map__51904__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51904__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var is_shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51904__$1,new cljs.core.Keyword(null,"is-shared","is-shared",2126511925));
if((typeof app.main.data.dashboard.set_file_shared_51906 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.set_file_shared_51906 = (function (p__51898,map__51904,params,id,is_shared,meta51907){
this.p__51898 = p__51898;
this.map__51904 = map__51904;
this.params = params;
this.id = id;
this.is_shared = is_shared;
this.meta51907 = meta51907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.set_file_shared_51906.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.set_file_shared_51906.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","set-file-shared","app.main.data.dashboard/set-file-shared",-875921747);
}));

(app.main.data.dashboard.set_file_shared_51906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51908,meta51907__$1){
var self__ = this;
var _51908__$1 = this;
return (new app.main.data.dashboard.set_file_shared_51906(self__.p__51898,self__.map__51904,self__.params,self__.id,self__.is_shared,meta51907__$1));
}));

(app.main.data.dashboard.set_file_shared_51906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51908){
var self__ = this;
var _51908__$1 = this;
return self__.meta51907;
}));

(app.main.data.dashboard.set_file_shared_51906.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.set_file_shared_51906.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"dashboard",new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"shared","shared",-384145993),self__.is_shared], null);
}));

(app.main.data.dashboard.set_file_shared_51906.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.set_file_shared_51906.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var G__51920 = app.common.data.update_in_when(app.common.data.update_in_when(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),self__.id,new cljs.core.Keyword(null,"is-shared","is-shared",2126511925)], null),cljs.core.constantly(self__.is_shared)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recent-files","recent-files",-314450292),self__.id,new cljs.core.Keyword(null,"is-shared","is-shared",2126511925)], null),cljs.core.constantly(self__.is_shared));
if(cljs.core.not(self__.is_shared)){
return app.common.data.update_when.cljs$core$IFn$_invoke$arity$variadic(G__51920,new cljs.core.Keyword(null,"shared-files","shared-files",-929120284),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return G__51920;
}
}));

(app.main.data.dashboard.set_file_shared_51906.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.set_file_shared_51906.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var params__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"is-shared","is-shared",2126511925),self__.is_shared], null);
return beicon.v2.core.concat(beicon.v2.core.ignore(app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-file-shared","set-file-shared",1102909653),params__$1)),(cljs.core.truth_(self__.is_shared)?beicon.v2.core.map((function (summary){
if((new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"variants","variants",-176391100).cljs$core$IFn$_invoke$arity$1(summary)) > (0))){
return potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"set-file-variants-shared",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"dashboard"], null));
} else {
return null;
}
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-file-summary","get-file-summary",-845116685),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null))):null));
}));
}

return (new app.main.data.dashboard.set_file_shared_51906(p__51898,map__51904__$1,params,id,is_shared,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.set_file_thumbnail = (function app$main$data$dashboard$set_file_thumbnail(file_id,thumbnail_id){
if((typeof app.main.data.dashboard.set_file_thumbnail_51933 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.set_file_thumbnail_51933 = (function (file_id,thumbnail_id,meta51934){
this.file_id = file_id;
this.thumbnail_id = thumbnail_id;
this.meta51934 = meta51934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.set_file_thumbnail_51933.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.set_file_thumbnail_51933.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","set-file-thumbnail","app.main.data.dashboard/set-file-thumbnail",1221585802);
}));

(app.main.data.dashboard.set_file_thumbnail_51933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51935,meta51934__$1){
var self__ = this;
var _51935__$1 = this;
return (new app.main.data.dashboard.set_file_thumbnail_51933(self__.file_id,self__.thumbnail_id,meta51934__$1));
}));

(app.main.data.dashboard.set_file_thumbnail_51933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51935){
var self__ = this;
var _51935__$1 = this;
return self__.meta51934;
}));

(app.main.data.dashboard.set_file_thumbnail_51933.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.set_file_thumbnail_51933.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var update_search_files = (function app$main$data$dashboard$set_file_thumbnail_$_update_search_files(files){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__51932_SHARP_){
var G__51942 = p1__51932_SHARP_;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.file_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51932_SHARP_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51942,new cljs.core.Keyword(null,"thumbnail-id","thumbnail-id",406242421),self__.thumbnail_id);
} else {
return G__51942;
}
}),files);
});
return app.common.data.update_when(app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),self__.file_id], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"thumbnail-id","thumbnail-id",406242421),self__.thumbnail_id], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recent-files","recent-files",-314450292),self__.file_id], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"thumbnail-id","thumbnail-id",406242421),self__.thumbnail_id], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deleted-files","deleted-files",-555859130),self__.file_id], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"thumbnail-id","thumbnail-id",406242421),self__.thumbnail_id], 0)),new cljs.core.Keyword(null,"dashboard-search-result","dashboard-search-result",1480869810),update_search_files);
}));
}

return (new app.main.data.dashboard.set_file_thumbnail_51933(file_id,thumbnail_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.file_created = (function app$main$data$dashboard$file_created(p__51943){
var map__51945 = p__51943;
var map__51945__$1 = cljs.core.__destructure_map(map__51945);
var file = map__51945__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51945__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51945__$1,new cljs.core.Keyword(null,"project-id","project-id",206449307));
if((typeof app.main.data.dashboard.file_created_51946 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.file_created_51946 = (function (p__51943,map__51945,file,id,project_id,meta51947){
this.p__51943 = p__51943;
this.map__51945 = map__51945;
this.file = file;
this.id = id;
this.project_id = project_id;
this.meta51947 = meta51947;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.file_created_51946.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.file_created_51946.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","file-created","app.main.data.dashboard/file-created",758247287);
}));

(app.main.data.dashboard.file_created_51946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51948,meta51947__$1){
var self__ = this;
var _51948__$1 = this;
return (new app.main.data.dashboard.file_created_51946(self__.p__51943,self__.map__51945,self__.file,self__.id,self__.project_id,meta51947__$1));
}));

(app.main.data.dashboard.file_created_51946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51948){
var self__ = this;
var _51948__$1 = this;
return self__.meta51947;
}));

(app.main.data.dashboard.file_created_51946.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.id,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.file)], null);
}));

(app.main.data.dashboard.file_created_51946.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.file_created_51946.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var file__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.file,new cljs.core.Keyword(null,"data","data",-232669377));
return app.common.data.update_in_when(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),self__.id], null),file__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recent-files","recent-files",-314450292),self__.id], null),file__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),self__.project_id,new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
}));
}

return (new app.main.data.dashboard.file_created_51946(p__51943,map__51945__$1,file,id,project_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.create_file = (function app$main$data$dashboard$create_file(p__51950){
var map__51951 = p__51950;
var map__51951__$1 = cljs.core.__destructure_map(map__51951);
var params = map__51951__$1;
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51951__$1,new cljs.core.Keyword(null,"project-id","project-id",206449307));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51951__$1,new cljs.core.Keyword(null,"name","name",1843675177));
app.common.data.macros.runtime_assert("expr assert: (uuid? project-id)",(function (){
return cljs.core.uuid_QMARK_(project_id);
}));

if((typeof app.main.data.dashboard.create_file_51952 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.create_file_51952 = (function (p__51950,map__51951,params,project_id,name,meta51953){
this.p__51950 = p__51950;
this.map__51951 = map__51951;
this.params = params;
this.project_id = project_id;
this.name = name;
this.meta51953 = meta51953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.create_file_51952.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.create_file_51952.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","create-file","app.main.data.dashboard/create-file",1672646055);
}));

(app.main.data.dashboard.create_file_51952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51954,meta51953__$1){
var self__ = this;
var _51954__$1 = this;
return (new app.main.data.dashboard.create_file_51952(self__.p__51950,self__.map__51951,self__.params,self__.project_id,self__.name,meta51953__$1));
}));

(app.main.data.dashboard.create_file_51952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51954){
var self__ = this;
var _51954__$1 = this;
return self__.meta51953;
}));

(app.main.data.dashboard.create_file_51952.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.create_file_51952.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project-id","project-id",206449307),self__.project_id], null);
}));

(app.main.data.dashboard.create_file_51952.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.create_file_51952.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var map__51955 = cljs.core.meta(self__.params);
var map__51955__$1 = cljs.core.__destructure_map(map__51955);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51955__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51955__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
var files = app.main.data.helpers.lookup_team_files.cljs$core$IFn$_invoke$arity$1(state);
var unames = app.common.files.helpers.get_used_names(files);
var base_name = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.new-file-prefix");
var name__$1 = (function (){var or__5025__auto__ = self__.name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.files.helpers.generate_unique_name.cljs$core$IFn$_invoke$arity$variadic(base_name,unames,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"immediate-suffix?","immediate-suffix?",-127830647),true], 0));
}
})();
var features__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"features","features",-1146962336)),app.common.features.frontend_only_features);
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.params,new cljs.core.Keyword(null,"name","name",1843675177),name__$1),new cljs.core.Keyword(null,"features","features",-1146962336),features__$1);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.map((function (p1__51949_SHARP_){
return cljs.core.with_meta(app.main.data.dashboard.file_created(p1__51949_SHARP_),cljs.core.meta(it__$1));
}),beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-file","create-file",-39781249),params__$1))));
}));
}

return (new app.main.data.dashboard.create_file_51952(p__51950,map__51951__$1,params,project_id,name,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.duplicate_file = (function app$main$data$dashboard$duplicate_file(p__51959){
var map__51960 = p__51959;
var map__51960__$1 = cljs.core.__destructure_map(map__51960);
var params = map__51960__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51960__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51960__$1,new cljs.core.Keyword(null,"name","name",1843675177));
app.common.data.macros.runtime_assert("expr assert: (uuid? id)",(function (){
return cljs.core.uuid_QMARK_(id);
}));

app.common.data.macros.runtime_assert("expr assert: (string? name)",(function (){
return typeof name === 'string';
}));

if((typeof app.main.data.dashboard.duplicate_file_51961 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.duplicate_file_51961 = (function (p__51959,map__51960,params,id,name,meta51962){
this.p__51959 = p__51959;
this.map__51960 = map__51960;
this.params = params;
this.id = id;
this.name = name;
this.meta51962 = meta51962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.duplicate_file_51961.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.duplicate_file_51961.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","duplicate-file","app.main.data.dashboard/duplicate-file",1371387416);
}));

(app.main.data.dashboard.duplicate_file_51961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51963,meta51962__$1){
var self__ = this;
var _51963__$1 = this;
return (new app.main.data.dashboard.duplicate_file_51961(self__.p__51959,self__.map__51960,self__.params,self__.id,self__.name,meta51962__$1));
}));

(app.main.data.dashboard.duplicate_file_51961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51963){
var self__ = this;
var _51963__$1 = this;
return self__.meta51962;
}));

(app.main.data.dashboard.duplicate_file_51961.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.duplicate_file_51961.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var map__51965 = cljs.core.meta(self__.params);
var map__51965__$1 = cljs.core.__destructure_map(map__51965);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51965__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51965__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
var unames = app.common.files.helpers.get_used_names(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"files","files",-472457450)));
var suffix_fn = (function (copy_count){
return ""+" "+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.copy-suffix") ?? "")+((((copy_count > (1)))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(copy_count)].join(''):null) ?? "");
});
var new_name = app.common.files.helpers.generate_unique_name.cljs$core$IFn$_invoke$arity$variadic(self__.name,unames,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"suffix-fn","suffix-fn",-1026050512),suffix_fn], 0));
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.map(app.main.data.dashboard.file_created,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"duplicate-file","duplicate-file",-875616544),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.id,new cljs.core.Keyword(null,"name","name",1843675177),new_name], null)))));
}));
}

return (new app.main.data.dashboard.duplicate_file_51961(p__51959,map__51960__$1,params,id,name,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.move_files = (function app$main$data$dashboard$move_files(p__51967){
var map__51968 = p__51967;
var map__51968__$1 = cljs.core.__destructure_map(map__51968);
var params = map__51968__$1;
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51968__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51968__$1,new cljs.core.Keyword(null,"project-id","project-id",206449307));
if(cljs.core.uuid_QMARK_(project_id)){
} else {
throw (new Error("Assert failed: (uuid? project-id)"));
}

if(cljs.core.truth_(app.common.schema.check_set_of_uuid(ids))){
} else {
throw (new Error("Assert failed: (sm/check-set-of-uuid ids)"));
}

if((typeof app.main.data.dashboard.move_files_51969 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.move_files_51969 = (function (p__51967,map__51968,params,ids,project_id,meta51970){
this.p__51967 = p__51967;
this.map__51968 = map__51968;
this.params = params;
this.ids = ids;
this.project_id = project_id;
this.meta51970 = meta51970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.move_files_51969.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.move_files_51969.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","move-files","app.main.data.dashboard/move-files",1848681271);
}));

(app.main.data.dashboard.move_files_51969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51971,meta51970__$1){
var self__ = this;
var _51971__$1 = this;
return (new app.main.data.dashboard.move_files_51969(self__.p__51967,self__.map__51968,self__.params,self__.ids,self__.project_id,meta51970__$1));
}));

(app.main.data.dashboard.move_files_51969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51971){
var self__ = this;
var _51971__$1 = this;
return self__.meta51970;
}));

(app.main.data.dashboard.move_files_51969.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.move_files_51969.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-files","num-files",1227997359),cljs.core.count(self__.ids),new cljs.core.Keyword(null,"project-id","project-id",206449307),self__.project_id], null);
}));

(app.main.data.dashboard.move_files_51969.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.move_files_51969.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var origin_project = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.first(self__.ids),new cljs.core.Keyword(null,"project-id","project-id",206449307)], null));
var update_project = (function (project,delta,op){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(project,new cljs.core.Keyword(null,"count","count",2139924085),(function (p1__51966_SHARP_){
var G__51972 = p1__51966_SHARP_;
var G__51973 = cljs.core.count(self__.ids);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__51972,G__51973) : op.call(null,G__51972,G__51973));
})),new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),app.common.time.in_future(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512),delta], null)));
});
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),origin_project], null),update_project,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),cljs.core._], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),self__.project_id], null),update_project,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(10),cljs.core._PLUS_], 0));
}));

(app.main.data.dashboard.move_files_51969.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.move_files_51969.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__51974 = cljs.core.meta(self__.params);
var map__51974__$1 = cljs.core.__destructure_map(map__51974);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51974__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51974__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-files","move-files",-536857601),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ids","ids",-998535796),self__.ids,new cljs.core.Keyword(null,"project-id","project-id",206449307),self__.project_id], null))));
}));
}

return (new app.main.data.dashboard.move_files_51969(p__51967,map__51968__$1,params,ids,project_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.clone_template = (function app$main$data$dashboard$clone_template(p__51975){
var map__51976 = p__51975;
var map__51976__$1 = cljs.core.__destructure_map(map__51976);
var params = map__51976__$1;
var template_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51976__$1,new cljs.core.Keyword(null,"template-id","template-id",1952916477));
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51976__$1,new cljs.core.Keyword(null,"project-id","project-id",206449307));
if((typeof app.main.data.dashboard.clone_template_51977 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.clone_template_51977 = (function (p__51975,map__51976,params,template_id,project_id,meta51978){
this.p__51975 = p__51975;
this.map__51976 = map__51976;
this.params = params;
this.template_id = template_id;
this.project_id = project_id;
this.meta51978 = meta51978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.clone_template_51977.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.clone_template_51977.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","clone-template","app.main.data.dashboard/clone-template",-1909834924);
}));

(app.main.data.dashboard.clone_template_51977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51979,meta51978__$1){
var self__ = this;
var _51979__$1 = this;
return (new app.main.data.dashboard.clone_template_51977(self__.p__51975,self__.map__51976,self__.params,self__.template_id,self__.project_id,meta51978__$1));
}));

(app.main.data.dashboard.clone_template_51977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51979){
var self__ = this;
var _51979__$1 = this;
return self__.meta51978;
}));

(app.main.data.dashboard.clone_template_51977.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.clone_template_51977.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"template-id","template-id",1952916477),self__.template_id], null);
}));

(app.main.data.dashboard.clone_template_51977.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.clone_template_51977.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var map__51980 = cljs.core.meta(self__.params);
var map__51980__$1 = cljs.core.__destructure_map(map__51980);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51980__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51980__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
var project_id__$1 = (function (){var or__5025__auto__ = self__.project_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-project-id","current-project-id",1950829814).cljs$core$IFn$_invoke$arity$1(state);
}
})();
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,beicon.v2.core.map(app.util.sse.get_payload,beicon.v2.core.filter(app.util.sse.end_of_stream_QMARK_,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (event){
var payload = app.util.sse.get_payload(event);
var type = app.util.sse.get_type(event);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"progress")){
if(app.common.logging.enabled_QMARK_("app.main.data.dashboard",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"clone-template: progress"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(payload)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(payload)], null)], null);
}),null)),null,null,"app.main.data.dashboard",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}

return null;
} else {
if(app.common.logging.enabled_QMARK_("app.main.data.dashboard",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"clone-template: end"], null)], null);
}),null)),null,null,"app.main.data.dashboard",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}

return null;
}
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.util.sse","clone-template","app.util.sse/clone-template",1175830498),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"project-id","project-id",206449307),project_id__$1,new cljs.core.Keyword(null,"template-id","template-id",1952916477),self__.template_id], null)))))));
}));
}

return (new app.main.data.dashboard.clone_template_51977(p__51975,map__51976__$1,params,template_id,project_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.create_element = (function app$main$data$dashboard$create_element(){
if((typeof app.main.data.dashboard.create_element_51982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.create_element_51982 = (function (meta51983){
this.meta51983 = meta51983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.create_element_51982.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.create_element_51982.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","create-element","app.main.data.dashboard/create-element",-2119035296);
}));

(app.main.data.dashboard.create_element_51982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51984,meta51983__$1){
var self__ = this;
var _51984__$1 = this;
return (new app.main.data.dashboard.create_element_51982(meta51983__$1));
}));

(app.main.data.dashboard.create_element_51982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51984){
var self__ = this;
var _51984__$1 = this;
return self__.meta51983;
}));

(app.main.data.dashboard.create_element_51982.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.create_element_51982.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
var route = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(state);
var pparams = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route);
var in_project_QMARK_ = cljs.core.contains_QMARK_(pparams,new cljs.core.Keyword(null,"project-id","project-id",206449307));
var name = ((in_project_QMARK_)?(function (){var files = app.main.data.helpers.lookup_team_files.cljs$core$IFn$_invoke$arity$2(state,team_id);
var unames = app.common.files.helpers.get_used_names(files);
return app.common.files.helpers.generate_unique_name.cljs$core$IFn$_invoke$arity$variadic(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.new-file-prefix"),unames,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"immediate-suffix?","immediate-suffix?",-127830647),true], 0));
})():(function (){var projects = app.main.data.helpers.lookup_team_projects.cljs$core$IFn$_invoke$arity$2(state,team_id);
var unames = app.common.files.helpers.get_used_names(projects);
return app.common.files.helpers.generate_unique_name.cljs$core$IFn$_invoke$arity$variadic(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.new-project-prefix"),unames,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"immediate-suffix?","immediate-suffix?",-127830647),true], 0));
})());
var params = ((in_project_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.Keyword(null,"project-id","project-id",206449307).cljs$core$IFn$_invoke$arity$1(pparams),new cljs.core.Keyword(null,"name","name",1843675177),name], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null));
var action_name = ((in_project_QMARK_)?new cljs.core.Keyword(null,"create-file","create-file",-39781249):new cljs.core.Keyword(null,"create-project","create-project",-2068207849));
var action = ((in_project_QMARK_)?app.main.data.dashboard.file_created:app.main.data.dashboard.project_created);
var can_edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"teams","teams",1677714510)),team_id),new cljs.core.Keyword(null,"permissions","permissions",67803075)),new cljs.core.Keyword(null,"can-edit","can-edit",442089902));
if(cljs.core.truth_(can_edit_QMARK_)){
return beicon.v2.core.map(action,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(action_name,params));
} else {
return null;
}
}));
}

return (new app.main.data.dashboard.create_element_51982(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.open_selected_file = (function app$main$data$dashboard$open_selected_file(){
if((typeof app.main.data.dashboard.open_selected_file_51987 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.open_selected_file_51987 = (function (meta51988){
this.meta51988 = meta51988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.open_selected_file_51987.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.open_selected_file_51987.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","open-selected-file","app.main.data.dashboard/open-selected-file",-1578788297);
}));

(app.main.data.dashboard.open_selected_file_51987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51989,meta51988__$1){
var self__ = this;
var _51989__$1 = this;
return (new app.main.data.dashboard.open_selected_file_51987(meta51988__$1));
}));

(app.main.data.dashboard.open_selected_file_51987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51989){
var self__ = this;
var _51989__$1 = this;
return self__.meta51988;
}));

(app.main.data.dashboard.open_selected_file_51987.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.open_selected_file_51987.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var vec__51994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"selected-files","selected-files",1045525459));
var file_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51994,(0),null);
var files = vec__51994;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(files))){
return beicon.v2.core.of(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id], 0)));
} else {
return beicon.v2.core.empty();
}
}));
}

return (new app.main.data.dashboard.open_selected_file_51987(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.handle_change_team_role = (function app$main$data$dashboard$handle_change_team_role(params){
if((typeof app.main.data.dashboard.handle_change_team_role_51997 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.handle_change_team_role_51997 = (function (params,meta51998){
this.params = params;
this.meta51998 = meta51998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.handle_change_team_role_51997.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.handle_change_team_role_51997.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","handle-change-team-role","app.main.data.dashboard/handle-change-team-role",823143837);
}));

(app.main.data.dashboard.handle_change_team_role_51997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51999,meta51998__$1){
var self__ = this;
var _51999__$1 = this;
return (new app.main.data.dashboard.handle_change_team_role_51997(self__.params,meta51998__$1));
}));

(app.main.data.dashboard.handle_change_team_role_51997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51999){
var self__ = this;
var _51999__$1 = this;
return self__.meta51998;
}));

(app.main.data.dashboard.handle_change_team_role_51997.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.handle_change_team_role_51997.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.common.change_team_role(self__.params),app.main.data.modal.hide());
}));
}

return (new app.main.data.dashboard.handle_change_team_role_51997(params,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.handle_change_team_org = (function app$main$data$dashboard$handle_change_team_org(p__52004){
var map__52006 = p__52004;
var map__52006__$1 = cljs.core.__destructure_map(map__52006);
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52006__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
var organization_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52006__$1,new cljs.core.Keyword(null,"organization-id","organization-id",-501672147));
var organization_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52006__$1,new cljs.core.Keyword(null,"organization-name","organization-name",1335899468));
if((typeof app.main.data.dashboard.handle_change_team_org_52007 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.handle_change_team_org_52007 = (function (p__52004,map__52006,team_id,organization_id,organization_name,meta52008){
this.p__52004 = p__52004;
this.map__52006 = map__52006;
this.team_id = team_id;
this.organization_id = organization_id;
this.organization_name = organization_name;
this.meta52008 = meta52008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.handle_change_team_org_52007.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.handle_change_team_org_52007.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","handle-change-team-org","app.main.data.dashboard/handle-change-team-org",-1440550750);
}));

(app.main.data.dashboard.handle_change_team_org_52007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52009,meta52008__$1){
var self__ = this;
var _52009__$1 = this;
return (new app.main.data.dashboard.handle_change_team_org_52007(self__.p__52004,self__.map__52006,self__.team_id,self__.organization_id,self__.organization_name,meta52008__$1));
}));

(app.main.data.dashboard.handle_change_team_org_52007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52009){
var self__ = this;
var _52009__$1 = this;
return self__.meta52008;
}));

(app.main.data.dashboard.handle_change_team_org_52007.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.handle_change_team_org_52007.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"nitrate","nitrate",1567206870))){
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),self__.team_id], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"organization-id","organization-id",-501672147),self__.organization_id,new cljs.core.Keyword(null,"organization-name","organization-name",1335899468),self__.organization_name], 0));
} else {
return state;
}
}));
}

return (new app.main.data.dashboard.handle_change_team_org_52007(p__52004,map__52006__$1,team_id,organization_id,organization_name,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.process_message = (function app$main$data$dashboard$process_message(p__52010){
var map__52011 = p__52010;
var map__52011__$1 = cljs.core.__destructure_map(map__52011);
var msg = map__52011__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52011__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__52012 = type;
var G__52012__$1 = (((G__52012 instanceof cljs.core.Keyword))?G__52012.fqn:null);
switch (G__52012__$1) {
case "notification":
return app.main.data.common.handle_notification(msg);

break;
case "team-role-change":
return app.main.data.dashboard.handle_change_team_role(msg);

break;
case "team-membership-change":
return app.main.data.common.team_membership_change(msg);

break;
case "team-org-change":
return app.main.data.dashboard.handle_change_team_org(msg);

break;
default:
return null;

}
});
app.main.data.dashboard.delete_files = (function app$main$data$dashboard$delete_files(p__52016){
var map__52017 = p__52016;
var map__52017__$1 = cljs.core.__destructure_map(map__52017);
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52017__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52017__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52017__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52017__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
if(cljs.core.uuid_QMARK_(team_id)){
} else {
throw (new Error("Assert failed: (uuid? team-id)"));
}

if(cljs.core.set_QMARK_(ids)){
} else {
throw (new Error("Assert failed: (set? ids)"));
}

if(cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids)){
} else {
throw (new Error("Assert failed: (every? uuid? ids)"));
}

if(cljs.core.fn_QMARK_(on_success)){
} else {
throw (new Error("Assert failed: (fn? on-success)"));
}

if(cljs.core.fn_QMARK_(on_error)){
} else {
throw (new Error("Assert failed: (fn? on-error)"));
}

if((typeof app.main.data.dashboard.delete_files_52021 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.delete_files_52021 = (function (p__52016,map__52017,team_id,ids,on_success,on_error,meta52022){
this.p__52016 = p__52016;
this.map__52017 = map__52017;
this.team_id = team_id;
this.ids = ids;
this.on_success = on_success;
this.on_error = on_error;
this.meta52022 = meta52022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.delete_files_52021.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.delete_files_52021.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","delete-files","app.main.data.dashboard/delete-files",-1227239895);
}));

(app.main.data.dashboard.delete_files_52021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52023,meta52022__$1){
var self__ = this;
var _52023__$1 = this;
return (new app.main.data.dashboard.delete_files_52021(self__.p__52016,self__.map__52017,self__.team_id,self__.ids,self__.on_success,self__.on_error,meta52022__$1));
}));

(app.main.data.dashboard.delete_files_52021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52023){
var self__ = this;
var _52023__$1 = this;
return self__.meta52022;
}));

(app.main.data.dashboard.delete_files_52021.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.delete_files_52021.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var progress_hint = (function (){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.progress-notification.deleting-files");
});
var slow_hint = (function (){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.progress-notification.slow-delete");
});
var stream = beicon.v2.core.share(app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.util.sse","permanently-delete-team-files","app.util.sse/permanently-delete-team-files",2138355294),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id,new cljs.core.Keyword(null,"ids","ids",-998535796),self__.ids], null)));
return beicon.v2.core.merge(beicon.v2.core.of(app.main.data.common.initialize_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slow-progress-threshold","slow-progress-threshold",-1289590291),(1000),new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.count(self__.ids),new cljs.core.Keyword(null,"hints","hints",-991113151),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"progress","progress",244323547),progress_hint,new cljs.core.Keyword(null,"slow","slow",120317203),slow_hint], null)], null)], 0))),beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(beicon.v2.core.empty,beicon.v2.core.mapcat((function (event){
var temp__5823__auto__ = app.util.sse.get_payload(event);
if(cljs.core.truth_(temp__5823__auto__)){
var payload = temp__5823__auto__;
var map__52028 = payload;
var map__52028__$1 = cljs.core.__destructure_map(map__52028);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52028__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52028__$1,new cljs.core.Keyword(null,"total","total",1916810418));
if(cljs.core.truth_((function (){var and__5023__auto__ = index;
if(cljs.core.truth_(and__5023__auto__)){
return total;
} else {
return and__5023__auto__;
}
})())){
return beicon.v2.core.of(app.main.data.common.update_progress(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"total","total",1916810418),total], null)));
} else {
return beicon.v2.core.empty();
}
} else {
return beicon.v2.core.empty();
}
}),beicon.v2.core.filter(app.util.sse.progress_QMARK_,stream))),beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (error){
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.common.clear_progress()),(self__.on_error.cljs$core$IFn$_invoke$arity$1 ? self__.on_error.cljs$core$IFn$_invoke$arity$1(error) : self__.on_error.call(null,error)));
}),beicon.v2.core.merge_map((function (___$4){
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.common.clear_progress(),app.main.data.dashboard.fetch_projects(self__.team_id),app.main.data.dashboard.fetch_deleted_files.cljs$core$IFn$_invoke$arity$1(self__.team_id),app.main.data.dashboard.fetch_projects(self__.team_id)),(self__.on_success.cljs$core$IFn$_invoke$arity$0 ? self__.on_success.cljs$core$IFn$_invoke$arity$0() : self__.on_success.call(null)));
}),beicon.v2.core.map(app.util.sse.get_payload,beicon.v2.core.filter(app.util.sse.end_of_stream_QMARK_,stream)))));
}));
}

return (new app.main.data.dashboard.delete_files_52021(p__52016,map__52017__$1,team_id,ids,on_success,on_error,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.delete_files_immediately = (function app$main$data$dashboard$delete_files_immediately(p__52033){
var map__52034 = p__52033;
var map__52034__$1 = cljs.core.__destructure_map(map__52034);
var params = map__52034__$1;
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52034__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52034__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
if(cljs.core.uuid_QMARK_(team_id)){
} else {
throw (new Error("Assert failed: (uuid? team-id)"));
}

if(cljs.core.set_QMARK_(ids)){
} else {
throw (new Error("Assert failed: (set? ids)"));
}

if(cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids)){
} else {
throw (new Error("Assert failed: (every? uuid? ids)"));
}

if((typeof app.main.data.dashboard.delete_files_immediately_52035 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.delete_files_immediately_52035 = (function (p__52033,map__52034,params,team_id,ids,meta52036){
this.p__52033 = p__52033;
this.map__52034 = map__52034;
this.params = params;
this.team_id = team_id;
this.ids = ids;
this.meta52036 = meta52036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.delete_files_immediately_52035.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.delete_files_immediately_52035.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","delete-files-immediately","app.main.data.dashboard/delete-files-immediately",-1239559697);
}));

(app.main.data.dashboard.delete_files_immediately_52035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52037,meta52036__$1){
var self__ = this;
var _52037__$1 = this;
return (new app.main.data.dashboard.delete_files_immediately_52035(self__.p__52033,self__.map__52034,self__.params,self__.team_id,self__.ids,meta52036__$1));
}));

(app.main.data.dashboard.delete_files_immediately_52035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52037){
var self__ = this;
var _52037__$1 = this;
return self__.meta52036;
}));

(app.main.data.dashboard.delete_files_immediately_52035.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.delete_files_immediately_52035.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var deleted_files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"deleted-files","deleted-files",-555859130));
var on_success = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(self__.ids))){
var fname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(deleted_files,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(self__.ids),new cljs.core.Keyword(null,"name","name",1843675177)], null));
return beicon.v2.core.of(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.delete-success-notification",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fname], 0))));
} else {
return beicon.v2.core.of(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.delete-files-success-notification",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(self__.ids)], 0))));
}
});
var on_error = (function (){
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.errors.error-on-delete-files")));
});
return beicon.v2.core.of(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"delete-files",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"dashboard:trash",new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id,new cljs.core.Keyword(null,"num-files","num-files",1227997359),cljs.core.count(self__.ids)], null)),app.main.data.dashboard.delete_files(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id,new cljs.core.Keyword(null,"ids","ids",-998535796),self__.ids,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null)));
}));
}

return (new app.main.data.dashboard.delete_files_immediately_52035(p__52033,map__52034__$1,params,team_id,ids,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.delete_project_immediately = (function app$main$data$dashboard$delete_project_immediately(p__52060){
var map__52061 = p__52060;
var map__52061__$1 = cljs.core.__destructure_map(map__52061);
var project = map__52061__$1;
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52061__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52061__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52061__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(app.common.types.project.valid_project_QMARK_(project))){
} else {
throw (new Error("Assert failed: (valid-project? project)"));
}

if((typeof app.main.data.dashboard.delete_project_immediately_52070 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.delete_project_immediately_52070 = (function (p__52060,map__52061,project,team_id,id,name,meta52071){
this.p__52060 = p__52060;
this.map__52061 = map__52061;
this.project = project;
this.team_id = team_id;
this.id = id;
this.name = name;
this.meta52071 = meta52071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.delete_project_immediately_52070.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.delete_project_immediately_52070.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","delete-project-immediately","app.main.data.dashboard/delete-project-immediately",-1785355806);
}));

(app.main.data.dashboard.delete_project_immediately_52070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52072,meta52071__$1){
var self__ = this;
var _52072__$1 = this;
return (new app.main.data.dashboard.delete_project_immediately_52070(self__.p__52060,self__.map__52061,self__.project,self__.team_id,self__.id,self__.name,meta52071__$1));
}));

(app.main.data.dashboard.delete_project_immediately_52070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52072){
var self__ = this;
var _52072__$1 = this;
return self__.meta52071;
}));

(app.main.data.dashboard.delete_project_immediately_52070.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.delete_project_immediately_52070.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var ids = cljs.core.reduce_kv((function (acc,file_id,file){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"project-id","project-id",206449307).cljs$core$IFn$_invoke$arity$1(file),self__.id)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,file_id);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"deleted-files","deleted-files",-555859130)));
var on_success = (function (){
return beicon.v2.core.of(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.delete-success-notification",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.name], 0))));
});
var on_error = (function (){
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.errors.error-on-delete-project",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.name], 0))));
});
return beicon.v2.core.of(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"delete-files",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"dashboard:trash",new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id,new cljs.core.Keyword(null,"project-id","project-id",206449307),self__.id,new cljs.core.Keyword(null,"num-files","num-files",1227997359),cljs.core.count(ids)], null)),app.main.data.dashboard.delete_files(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id,new cljs.core.Keyword(null,"ids","ids",-998535796),ids,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null)));
}));
}

return (new app.main.data.dashboard.delete_project_immediately_52070(p__52060,map__52061__$1,project,team_id,id,name,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.restore_files = (function app$main$data$dashboard$restore_files(p__52084){
var map__52085 = p__52084;
var map__52085__$1 = cljs.core.__destructure_map(map__52085);
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52085__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52085__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52085__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52085__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
if(cljs.core.uuid_QMARK_(team_id)){
} else {
throw (new Error("Assert failed: (uuid? team-id)"));
}

if(cljs.core.set_QMARK_(ids)){
} else {
throw (new Error("Assert failed: (set? ids)"));
}

if(cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids)){
} else {
throw (new Error("Assert failed: (every? uuid? ids)"));
}

if(cljs.core.fn_QMARK_(on_success)){
} else {
throw (new Error("Assert failed: (fn? on-success)"));
}

if(cljs.core.fn_QMARK_(on_error)){
} else {
throw (new Error("Assert failed: (fn? on-error)"));
}

if((typeof app.main.data.dashboard.restore_files_52092 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.restore_files_52092 = (function (p__52084,map__52085,team_id,ids,on_success,on_error,meta52093){
this.p__52084 = p__52084;
this.map__52085 = map__52085;
this.team_id = team_id;
this.ids = ids;
this.on_success = on_success;
this.on_error = on_error;
this.meta52093 = meta52093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.restore_files_52092.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.restore_files_52092.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","restore-files","app.main.data.dashboard/restore-files",-1025998028);
}));

(app.main.data.dashboard.restore_files_52092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52094,meta52093__$1){
var self__ = this;
var _52094__$1 = this;
return (new app.main.data.dashboard.restore_files_52092(self__.p__52084,self__.map__52085,self__.team_id,self__.ids,self__.on_success,self__.on_error,meta52093__$1));
}));

(app.main.data.dashboard.restore_files_52092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52094){
var self__ = this;
var _52094__$1 = this;
return self__.meta52093;
}));

(app.main.data.dashboard.restore_files_52092.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.restore_files_52092.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var progress_hint = (function (){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.progress-notification.restoring-files");
});
var slow_hint = (function (){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.progress-notification.slow-restore");
});
return beicon.v2.core.merge(beicon.v2.core.of(app.main.data.common.initialize_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slow-progress-threshold","slow-progress-threshold",-1289590291),(1000),new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.count(self__.ids),new cljs.core.Keyword(null,"hints","hints",-991113151),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"progress","progress",244323547),progress_hint,new cljs.core.Keyword(null,"slow","slow",120317203),slow_hint], null)], null)], 0))),(function (){var stream = beicon.v2.core.share(app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.util.sse","restore-deleted-team-files","app.util.sse/restore-deleted-team-files",-2130814225),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id,new cljs.core.Keyword(null,"ids","ids",-998535796),self__.ids], null)));
return beicon.v2.core.merge(beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(beicon.v2.core.empty,beicon.v2.core.mapcat((function (event){
var temp__5823__auto__ = app.util.sse.get_payload(event);
if(cljs.core.truth_(temp__5823__auto__)){
var payload = temp__5823__auto__;
var map__52107 = payload;
var map__52107__$1 = cljs.core.__destructure_map(map__52107);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52107__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52107__$1,new cljs.core.Keyword(null,"total","total",1916810418));
if(cljs.core.truth_((function (){var and__5023__auto__ = index;
if(cljs.core.truth_(and__5023__auto__)){
return total;
} else {
return and__5023__auto__;
}
})())){
return beicon.v2.core.of(app.main.data.common.update_progress(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"total","total",1916810418),total], null)));
} else {
return beicon.v2.core.empty();
}
} else {
return beicon.v2.core.empty();
}
}),beicon.v2.core.filter(app.util.sse.progress_QMARK_,stream))),beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (error){
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.common.clear_progress()),(self__.on_error.cljs$core$IFn$_invoke$arity$1 ? self__.on_error.cljs$core$IFn$_invoke$arity$1(error) : self__.on_error.call(null,error)));
}),beicon.v2.core.mapcat((function (___$4){
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.common.clear_progress(),app.main.data.dashboard.fetch_projects(self__.team_id),app.main.data.dashboard.fetch_deleted_files.cljs$core$IFn$_invoke$arity$1(self__.team_id),app.main.data.dashboard.fetch_projects(self__.team_id)),(self__.on_success.cljs$core$IFn$_invoke$arity$0 ? self__.on_success.cljs$core$IFn$_invoke$arity$0() : self__.on_success.call(null)));
}),beicon.v2.core.map(app.util.sse.get_payload,beicon.v2.core.filter(app.util.sse.end_of_stream_QMARK_,stream)))));
})());
}));
}

return (new app.main.data.dashboard.restore_files_52092(p__52084,map__52085__$1,team_id,ids,on_success,on_error,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.restore_files_immediately = (function app$main$data$dashboard$restore_files_immediately(p__52113){
var map__52114 = p__52113;
var map__52114__$1 = cljs.core.__destructure_map(map__52114);
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52114__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52114__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
if(cljs.core.uuid_QMARK_(team_id)){
} else {
throw (new Error("Assert failed: (uuid? team-id)"));
}

if(cljs.core.set_QMARK_(ids)){
} else {
throw (new Error("Assert failed: (set? ids)"));
}

if((typeof app.main.data.dashboard.restore_files_immediately_52115 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.restore_files_immediately_52115 = (function (p__52113,map__52114,team_id,ids,meta52116){
this.p__52113 = p__52113;
this.map__52114 = map__52114;
this.team_id = team_id;
this.ids = ids;
this.meta52116 = meta52116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.restore_files_immediately_52115.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.restore_files_immediately_52115.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","restore-files-immediately","app.main.data.dashboard/restore-files-immediately",155671388);
}));

(app.main.data.dashboard.restore_files_immediately_52115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52117,meta52116__$1){
var self__ = this;
var _52117__$1 = this;
return (new app.main.data.dashboard.restore_files_immediately_52115(self__.p__52113,self__.map__52114,self__.team_id,self__.ids,meta52116__$1));
}));

(app.main.data.dashboard.restore_files_immediately_52115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52117){
var self__ = this;
var _52117__$1 = this;
return self__.meta52116;
}));

(app.main.data.dashboard.restore_files_immediately_52115.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.restore_files_immediately_52115.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var deleted_files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"deleted-files","deleted-files",-555859130));
var on_success = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(self__.ids))){
var fname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(deleted_files,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(self__.ids),new cljs.core.Keyword(null,"name","name",1843675177)], null));
return beicon.v2.core.of(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.restore-success-notification",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fname], 0))));
} else {
return beicon.v2.core.of(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.restore-files-success-notification",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(self__.ids)], 0))));
}
});
var on_error = (function (_cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(self__.ids))){
var fname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(deleted_files,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(self__.ids),new cljs.core.Keyword(null,"name","name",1843675177)], null));
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.errors.error-on-restore-file",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fname], 0))));
} else {
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.errors.error-on-restore-files")));
}
});
return beicon.v2.core.of(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"restore-files",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"dashboard:trash",new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id,new cljs.core.Keyword(null,"num-files","num-files",1227997359),cljs.core.count(self__.ids)], null)),app.main.data.dashboard.restore_files(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id,new cljs.core.Keyword(null,"ids","ids",-998535796),self__.ids,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null)));
}));
}

return (new app.main.data.dashboard.restore_files_immediately_52115(p__52113,map__52114__$1,team_id,ids,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.dashboard.restore_project_immediately = (function app$main$data$dashboard$restore_project_immediately(p__52135){
var map__52136 = p__52135;
var map__52136__$1 = cljs.core.__destructure_map(map__52136);
var project = map__52136__$1;
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52136__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52136__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52136__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(app.common.types.project.valid_project_QMARK_(project))){
} else {
throw (new Error("Assert failed: (valid-project? project)"));
}

if((typeof app.main.data.dashboard.restore_project_immediately_52137 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.dashboard.restore_project_immediately_52137 = (function (p__52135,map__52136,project,team_id,id,name,meta52138){
this.p__52135 = p__52135;
this.map__52136 = map__52136;
this.project = project;
this.team_id = team_id;
this.id = id;
this.name = name;
this.meta52138 = meta52138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.dashboard.restore_project_immediately_52137.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.restore_project_immediately_52137.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.dashboard","restore-project-immediately","app.main.data.dashboard/restore-project-immediately",-206008453);
}));

(app.main.data.dashboard.restore_project_immediately_52137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52139,meta52138__$1){
var self__ = this;
var _52139__$1 = this;
return (new app.main.data.dashboard.restore_project_immediately_52137(self__.p__52135,self__.map__52136,self__.project,self__.team_id,self__.id,self__.name,meta52138__$1));
}));

(app.main.data.dashboard.restore_project_immediately_52137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52139){
var self__ = this;
var _52139__$1 = this;
return self__.meta52138;
}));

(app.main.data.dashboard.restore_project_immediately_52137.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.dashboard.restore_project_immediately_52137.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var ids = cljs.core.reduce_kv((function (acc,file_id,file){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"project-id","project-id",206449307).cljs$core$IFn$_invoke$arity$1(file),self__.id)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,file_id);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"deleted-files","deleted-files",-555859130)));
var on_success = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.restore-success-notification",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.name], 0))));
});
var on_error = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.errors.error-on-restoring-project",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.name], 0))));
});
return beicon.v2.core.of(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"restore-files",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"dashboard:trash",new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id,new cljs.core.Keyword(null,"project-id","project-id",206449307),self__.id,new cljs.core.Keyword(null,"num-files","num-files",1227997359),cljs.core.count(ids)], null)),app.main.data.dashboard.restore_files(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id,new cljs.core.Keyword(null,"ids","ids",-998535796),ids,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null)));
}));
}

return (new app.main.data.dashboard.restore_project_immediately_52137(p__52135,map__52136__$1,project,team_id,id,name,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.dashboard.js.map
