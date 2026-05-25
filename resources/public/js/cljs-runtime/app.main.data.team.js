import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.exceptions.js";
import "./app.common.logging.js";
import "./app.common.schema.js";
import "./app.common.types.team.js";
import "./app.common.uri.js";
import "./app.config.js";
import "./app.main.data.event.js";
import "./app.main.data.media.js";
import "./app.main.data.profile.js";
import "./app.main.features.js";
import "./app.main.repo.js";
import "./app.main.router.js";
import "./app.util.clipboard.js";
import "./app.util.storage.js";
import "./beicon.v2.core.js";
import "./clojure.string.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.team');
app.common.logging.loggers.set("app.main.data.team",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"warn","warn",-436710552)));
/**
 * Get last accessed team id
 */
app.main.data.team.get_last_team_id = (function app$main$data$team$get_last_team_id(){
return new cljs.core.Keyword("app.main.data.team","current-team-id","app.main.data.team/current-team-id",675116812).cljs$core$IFn$_invoke$arity$1(app.util.storage.global);
});
app.main.data.team.teams_fetched = (function app$main$data$team$teams_fetched(teams){
if((typeof app.main.data.team.teams_fetched_47955 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.teams_fetched_47955 = (function (teams,meta47956){
this.teams = teams;
this.meta47956 = meta47956;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.teams_fetched_47955.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.teams_fetched_47955.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","teams-fetched","app.main.data.team/teams-fetched",1747661254);
}));

(app.main.data.team.teams_fetched_47955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47957,meta47956__$1){
var self__ = this;
var _47957__$1 = this;
return (new app.main.data.team.teams_fetched_47955(self__.teams,meta47956__$1));
}));

(app.main.data.team.teams_fetched_47955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47957){
var self__ = this;
var _47957__$1 = this;
return self__.meta47956;
}));

(app.main.data.team.teams_fetched_47955.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.teams;
}));

(app.main.data.team.teams_fetched_47955.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.teams_fetched_47955.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,p__47961){
var map__47962 = p__47961;
var map__47962__$1 = cljs.core.__destructure_map(map__47962);
var team = map__47962__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47962__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),id], null),cljs.core.merge,team);
}),state,self__.teams);
}));
}

return (new app.main.data.team.teams_fetched_47955(teams,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.fetch_teams = (function app$main$data$team$fetch_teams(){
if((typeof app.main.data.team.fetch_teams_47963 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.fetch_teams_47963 = (function (meta47964){
this.meta47964 = meta47964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.fetch_teams_47963.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.fetch_teams_47963.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","fetch-teams","app.main.data.team/fetch-teams",-2041250742);
}));

(app.main.data.team.fetch_teams_47963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47965,meta47964__$1){
var self__ = this;
var _47965__$1 = this;
return (new app.main.data.team.fetch_teams_47963(meta47964__$1));
}));

(app.main.data.team.fetch_teams_47963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47965){
var self__ = this;
var _47965__$1 = this;
return self__.meta47964;
}));

(app.main.data.team.fetch_teams_47963.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.fetch_teams_47963.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.map(app.main.data.team.teams_fetched,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"get-teams","get-teams",-760955609)));
}));
}

return (new app.main.data.team.fetch_teams_47963(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.members_fetched = (function app$main$data$team$members_fetched(team_id,members){
if((typeof app.main.data.team.members_fetched_47966 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.members_fetched_47966 = (function (team_id,members,meta47967){
this.team_id = team_id;
this.members = members;
this.meta47967 = meta47967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.members_fetched_47966.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.members_fetched_47966.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","members-fetched","app.main.data.team/members-fetched",-128392737);
}));

(app.main.data.team.members_fetched_47966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47968,meta47967__$1){
var self__ = this;
var _47968__$1 = this;
return (new app.main.data.team.members_fetched_47966(self__.team_id,self__.members,meta47967__$1));
}));

(app.main.data.team.members_fetched_47966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47968){
var self__ = this;
var _47968__$1 = this;
return self__.meta47967;
}));

(app.main.data.team.members_fetched_47966.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.members_fetched_47966.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),self__.team_id], null),cljs.core.assoc,new cljs.core.Keyword(null,"members","members",159001018),self__.members),new cljs.core.Keyword(null,"profiles","profiles",507634713),cljs.core.merge,app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),self__.members));
}));
}

return (new app.main.data.team.members_fetched_47966(team_id,members,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.fetch_members = (function app$main$data$team$fetch_members(var_args){
var G__47970 = arguments.length;
switch (G__47970) {
case 0:
return app.main.data.team.fetch_members.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.team.fetch_members.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.team.fetch_members.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.team.fetch_members.cljs$core$IFn$_invoke$arity$1(null);
}));

(app.main.data.team.fetch_members.cljs$core$IFn$_invoke$arity$1 = (function (team_id){
if((typeof app.main.data.team.fetch_members_47971 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.fetch_members_47971 = (function (team_id,meta47972){
this.team_id = team_id;
this.meta47972 = meta47972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.fetch_members_47971.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.fetch_members_47971.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","fetch-members","app.main.data.team/fetch-members",-204945333);
}));

(app.main.data.team.fetch_members_47971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47973,meta47972__$1){
var self__ = this;
var _47973__$1 = this;
return (new app.main.data.team.fetch_members_47971(self__.team_id,meta47972__$1));
}));

(app.main.data.team.fetch_members_47971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47973){
var self__ = this;
var _47973__$1 = this;
return self__.meta47972;
}));

(app.main.data.team.fetch_members_47971.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.fetch_members_47971.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
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
return beicon.v2.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.data.team.members_fetched,team_id__$1),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-team-members","get-team-members",15863431),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id__$1], null)));
} else {
return null;
}
}));
}

return (new app.main.data.team.fetch_members_47971(team_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.team.fetch_members.cljs$lang$maxFixedArity = 1);

app.main.data.team.invitations_fetched = (function app$main$data$team$invitations_fetched(team_id,invitations){
if((typeof app.main.data.team.invitations_fetched_47974 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.invitations_fetched_47974 = (function (team_id,invitations,meta47975){
this.team_id = team_id;
this.invitations = invitations;
this.meta47975 = meta47975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.invitations_fetched_47974.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.invitations_fetched_47974.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","invitations-fetched","app.main.data.team/invitations-fetched",1121972002);
}));

(app.main.data.team.invitations_fetched_47974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47976,meta47975__$1){
var self__ = this;
var _47976__$1 = this;
return (new app.main.data.team.invitations_fetched_47974(self__.team_id,self__.invitations,meta47975__$1));
}));

(app.main.data.team.invitations_fetched_47974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47976){
var self__ = this;
var _47976__$1 = this;
return self__.meta47975;
}));

(app.main.data.team.invitations_fetched_47974.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.invitations_fetched_47974.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),self__.team_id], null),cljs.core.assoc,new cljs.core.Keyword(null,"invitations","invitations",-1668975235),self__.invitations);
}));
}

return (new app.main.data.team.invitations_fetched_47974(team_id,invitations,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.fetch_invitations = (function app$main$data$team$fetch_invitations(){
if((typeof app.main.data.team.fetch_invitations_47981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.fetch_invitations_47981 = (function (meta47982){
this.meta47982 = meta47982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.fetch_invitations_47981.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.fetch_invitations_47981.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","fetch-invitations","app.main.data.team/fetch-invitations",513994382);
}));

(app.main.data.team.fetch_invitations_47981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47983,meta47982__$1){
var self__ = this;
var _47983__$1 = this;
return (new app.main.data.team.fetch_invitations_47981(meta47982__$1));
}));

(app.main.data.team.fetch_invitations_47981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47983){
var self__ = this;
var _47983__$1 = this;
return self__.meta47982;
}));

(app.main.data.team.fetch_invitations_47981.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.fetch_invitations_47981.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.data.team.invitations_fetched,team_id),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-team-invitations","get-team-invitations",382367407),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null)));
}));
}

return (new app.main.data.team.fetch_invitations_47981(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.team_initialized = (function app$main$data$team$team_initialized(team_id){
if((typeof app.main.data.team.team_initialized_47993 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.team_initialized_47993 = (function (team_id,meta47994){
this.team_id = team_id;
this.meta47994 = meta47994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.team_initialized_47993.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.team_initialized_47993.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","team-initialized","app.main.data.team/team-initialized",-765687715);
}));

(app.main.data.team.team_initialized_47993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47995,meta47994__$1){
var self__ = this;
var _47995__$1 = this;
return (new app.main.data.team.team_initialized_47993(self__.team_id,meta47994__$1));
}));

(app.main.data.team.team_initialized_47993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47995){
var self__ = this;
var _47995__$1 = this;
return self__.meta47994;
}));

(app.main.data.team.team_initialized_47993.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.team_initialized_47993.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var teams = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"teams","teams",1677714510));
var team = cljs.core.get.cljs$core$IFn$_invoke$arity$2(teams,self__.team_id);
if(cljs.core.not(team)){
return beicon.v2.core.throw$(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("authentication",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"authentication","authentication",1746273042)], null),null], 0)),null));
} else {
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"permissions","permissions",67803075));
var features__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"features","features",-1146962336));
return beicon.v2.core.of((function (p1__47992_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47992_SHARP_,new cljs.core.Keyword(null,"permissions","permissions",67803075),permissions);
}),app.main.features.initialize(features__$1),app.main.data.team.fetch_members.cljs$core$IFn$_invoke$arity$1(self__.team_id));
}
}));

(app.main.data.team.team_initialized_47993.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.team_initialized_47993.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.storage.global,cljs.core.assoc,new cljs.core.Keyword("app.main.data.team","current-team-id","app.main.data.team/current-team-id",675116812),self__.team_id);
}));
}

return (new app.main.data.team.team_initialized_47993(team_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.initialize_team = (function app$main$data$team$initialize_team(team_id){
if((typeof app.main.data.team.initialize_team_48004 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.initialize_team_48004 = (function (team_id,meta48005){
this.team_id = team_id;
this.meta48005 = meta48005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.initialize_team_48004.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.initialize_team_48004.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","initialize-team","app.main.data.team/initialize-team",957607773);
}));

(app.main.data.team.initialize_team_48004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48006,meta48005__$1){
var self__ = this;
var _48006__$1 = this;
return (new app.main.data.team.initialize_team_48004(self__.team_id,meta48005__$1));
}));

(app.main.data.team.initialize_team_48004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48006){
var self__ = this;
var _48006__$1 = this;
return self__.meta48005;
}));

(app.main.data.team.initialize_team_48004.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.initialize_team_48004.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995),self__.team_id);
}));

(app.main.data.team.initialize_team_48004.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.initialize_team_48004.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
var stopper = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.team","finalize-team","app.main.data.team/finalize-team",-645954379)),stream);
return beicon.v2.core.take_until(stopper,beicon.v2.core.merge(beicon.v2.core.of(app.main.data.team.fetch_teams()),beicon.v2.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.data.team.team_initialized,self__.team_id),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.team","teams-fetched","app.main.data.team/teams-fetched",1747661254)),stream))));
}));
}

return (new app.main.data.team.initialize_team_48004(team_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.finalize_team = (function app$main$data$team$finalize_team(team_id){
if((typeof app.main.data.team.finalize_team_48010 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.finalize_team_48010 = (function (team_id,meta48011){
this.team_id = team_id;
this.meta48011 = meta48011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.finalize_team_48010.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.finalize_team_48010.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","finalize-team","app.main.data.team/finalize-team",-645954379);
}));

(app.main.data.team.finalize_team_48010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48012,meta48011__$1){
var self__ = this;
var _48012__$1 = this;
return (new app.main.data.team.finalize_team_48010(self__.team_id,meta48011__$1));
}));

(app.main.data.team.finalize_team_48010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48012){
var self__ = this;
var _48012__$1 = this;
return self__.meta48011;
}));

(app.main.data.team.finalize_team_48010.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.finalize_team_48010.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var team_id_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(team_id_SINGLEQUOTE_,self__.team_id)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995)),new cljs.core.Keyword(null,"shared-files","shared-files",-929120284)),new cljs.core.Keyword(null,"fonts","fonts",1683167295));
} else {
return state;
}
}));
}

return (new app.main.data.team.finalize_team_48010(team_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.update_member_role = (function app$main$data$team$update_member_role(p__48013){
var map__48014 = p__48013;
var map__48014__$1 = cljs.core.__destructure_map(map__48014);
var params = map__48014__$1;
var role = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48014__$1,new cljs.core.Keyword(null,"role","role",-736691072));
var member_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48014__$1,new cljs.core.Keyword(null,"member-id","member-id",606659713));
if(cljs.core.uuid_QMARK_(member_id)){
} else {
throw (new Error("Assert failed: (uuid? member-id)"));
}

if(cljs.core.contains_QMARK_(app.common.types.team.valid_roles,role)){
} else {
throw (new Error("Assert failed: (contains? ctt/valid-roles role)"));
}

if((typeof app.main.data.team.update_member_role_48018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.update_member_role_48018 = (function (p__48013,map__48014,params,role,member_id,meta48019){
this.p__48013 = p__48013;
this.map__48014 = map__48014;
this.params = params;
this.role = role;
this.member_id = member_id;
this.meta48019 = meta48019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.update_member_role_48018.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.update_member_role_48018.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","update-member-role","app.main.data.team/update-member-role",194380188);
}));

(app.main.data.team.update_member_role_48018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48020,meta48019__$1){
var self__ = this;
var _48020__$1 = this;
return (new app.main.data.team.update_member_role_48018(self__.p__48013,self__.map__48014,self__.params,self__.role,self__.member_id,meta48019__$1));
}));

(app.main.data.team.update_member_role_48018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48020){
var self__ = this;
var _48020__$1 = this;
return self__.meta48019;
}));

(app.main.data.team.update_member_role_48018.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.update_member_role_48018.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.params,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id);
return beicon.v2.core.mapcat((function (___$3){
return beicon.v2.core.of(app.main.data.profile.refresh_profile(),app.main.data.team.fetch_members.cljs$core$IFn$_invoke$arity$1(team_id),app.main.data.team.fetch_teams(),app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"update-team-member-role",new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id,new cljs.core.Keyword(null,"role","role",-736691072),self__.role,new cljs.core.Keyword(null,"member-id","member-id",606659713),self__.member_id], null)));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-team-member-role","update-team-member-role",1047320646),params__$1));
}));
}

return (new app.main.data.team.update_member_role_48018(p__48013,map__48014__$1,params,role,member_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.delete_member = (function app$main$data$team$delete_member(p__48036){
var map__48037 = p__48036;
var map__48037__$1 = cljs.core.__destructure_map(map__48037);
var params = map__48037__$1;
var member_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48037__$1,new cljs.core.Keyword(null,"member-id","member-id",606659713));
app.common.data.macros.runtime_assert("expr assert: (uuid? member-id)",(function (){
return cljs.core.uuid_QMARK_(member_id);
}));

if((typeof app.main.data.team.delete_member_48038 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.delete_member_48038 = (function (p__48036,map__48037,params,member_id,meta48039){
this.p__48036 = p__48036;
this.map__48037 = map__48037;
this.params = params;
this.member_id = member_id;
this.meta48039 = meta48039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.delete_member_48038.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.delete_member_48038.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","delete-member","app.main.data.team/delete-member",-1611932477);
}));

(app.main.data.team.delete_member_48038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48040,meta48039__$1){
var self__ = this;
var _48040__$1 = this;
return (new app.main.data.team.delete_member_48038(self__.p__48036,self__.map__48037,self__.params,self__.member_id,meta48039__$1));
}));

(app.main.data.team.delete_member_48038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48040){
var self__ = this;
var _48040__$1 = this;
return self__.meta48039;
}));

(app.main.data.team.delete_member_48038.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.delete_member_48038.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.params,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id);
return beicon.v2.core.mapcat((function (___$3){
return beicon.v2.core.of(app.main.data.profile.refresh_profile(),app.main.data.team.fetch_members.cljs$core$IFn$_invoke$arity$1(team_id),app.main.data.team.fetch_teams(),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"delete-team-member",new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id,new cljs.core.Keyword(null,"member-id","member-id",606659713),self__.member_id], null)));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-team-member","delete-team-member",400304162),params__$1));
}));
}

return (new app.main.data.team.delete_member_48038(p__48036,map__48037__$1,params,member_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.stats_fetched = (function app$main$data$team$stats_fetched(team_id,stats){
if((typeof app.main.data.team.stats_fetched_48041 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.stats_fetched_48041 = (function (team_id,stats,meta48042){
this.team_id = team_id;
this.stats = stats;
this.meta48042 = meta48042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.stats_fetched_48041.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.stats_fetched_48041.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","stats-fetched","app.main.data.team/stats-fetched",-807692414);
}));

(app.main.data.team.stats_fetched_48041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48043,meta48042__$1){
var self__ = this;
var _48043__$1 = this;
return (new app.main.data.team.stats_fetched_48041(self__.team_id,self__.stats,meta48042__$1));
}));

(app.main.data.team.stats_fetched_48041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48043){
var self__ = this;
var _48043__$1 = this;
return self__.meta48042;
}));

(app.main.data.team.stats_fetched_48041.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.stats_fetched_48041.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),self__.team_id], null),cljs.core.assoc,new cljs.core.Keyword(null,"stats","stats",-85643011),self__.stats);
}));
}

return (new app.main.data.team.stats_fetched_48041(team_id,stats,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.fetch_stats = (function app$main$data$team$fetch_stats(){
if((typeof app.main.data.team.fetch_stats_48044 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.fetch_stats_48044 = (function (meta48045){
this.meta48045 = meta48045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.fetch_stats_48044.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.fetch_stats_48044.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","fetch-stats","app.main.data.team/fetch-stats",1035659502);
}));

(app.main.data.team.fetch_stats_48044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48046,meta48045__$1){
var self__ = this;
var _48046__$1 = this;
return (new app.main.data.team.fetch_stats_48044(meta48045__$1));
}));

(app.main.data.team.fetch_stats_48044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48046){
var self__ = this;
var _48046__$1 = this;
return self__.meta48045;
}));

(app.main.data.team.fetch_stats_48044.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.fetch_stats_48044.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.data.team.stats_fetched,team_id),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-team-stats","get-team-stats",253209389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null)));
}));
}

return (new app.main.data.team.fetch_stats_48044(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.webhooks_fetched = (function app$main$data$team$webhooks_fetched(team_id,webhooks){
if((typeof app.main.data.team.webhooks_fetched_48050 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.webhooks_fetched_48050 = (function (team_id,webhooks,meta48051){
this.team_id = team_id;
this.webhooks = webhooks;
this.meta48051 = meta48051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.webhooks_fetched_48050.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.webhooks_fetched_48050.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","webhooks-fetched","app.main.data.team/webhooks-fetched",1471512138);
}));

(app.main.data.team.webhooks_fetched_48050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48052,meta48051__$1){
var self__ = this;
var _48052__$1 = this;
return (new app.main.data.team.webhooks_fetched_48050(self__.team_id,self__.webhooks,meta48051__$1));
}));

(app.main.data.team.webhooks_fetched_48050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48052){
var self__ = this;
var _48052__$1 = this;
return self__.meta48051;
}));

(app.main.data.team.webhooks_fetched_48050.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.webhooks_fetched_48050.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),self__.team_id], null),cljs.core.assoc,new cljs.core.Keyword(null,"webhooks","webhooks",1535047469),self__.webhooks);
}));
}

return (new app.main.data.team.webhooks_fetched_48050(team_id,webhooks,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.fetch_webhooks = (function app$main$data$team$fetch_webhooks(){
if((typeof app.main.data.team.fetch_webhooks_48053 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.fetch_webhooks_48053 = (function (meta48054){
this.meta48054 = meta48054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.fetch_webhooks_48053.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.fetch_webhooks_48053.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","fetch-webhooks","app.main.data.team/fetch-webhooks",-1001690679);
}));

(app.main.data.team.fetch_webhooks_48053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48055,meta48054__$1){
var self__ = this;
var _48055__$1 = this;
return (new app.main.data.team.fetch_webhooks_48053(meta48054__$1));
}));

(app.main.data.team.fetch_webhooks_48053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48055){
var self__ = this;
var _48055__$1 = this;
return self__.meta48054;
}));

(app.main.data.team.fetch_webhooks_48053.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.fetch_webhooks_48053.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.data.team.webhooks_fetched,team_id),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-webhooks","get-webhooks",1755105908),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null)));
}));
}

return (new app.main.data.team.fetch_webhooks_48053(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.update_team_photo = (function app$main$data$team$update_team_photo(file){
app.common.data.macros.runtime_assert("expected a valid blob for `file` param",(function (){
return app.main.data.media.blob_QMARK_(file);
}));

if((typeof app.main.data.team.update_team_photo_48062 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.update_team_photo_48062 = (function (file,meta48063){
this.file = file;
this.meta48063 = meta48063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.update_team_photo_48062.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.update_team_photo_48062.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","update-team-photo","app.main.data.team/update-team-photo",-1731113001);
}));

(app.main.data.team.update_team_photo_48062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48064,meta48063__$1){
var self__ = this;
var _48064__$1 = this;
return (new app.main.data.team.update_team_photo_48062(self__.file,meta48063__$1));
}));

(app.main.data.team.update_team_photo_48062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48064){
var self__ = this;
var _48064__$1 = this;
return self__.meta48063;
}));

(app.main.data.team.update_team_photo_48062.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.update_team_photo_48062.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var on_success = app.main.data.media.notify_finished_loading;
var on_error = (function (p1__48059_SHARP_){
app.main.data.media.notify_finished_loading();

return app.main.data.media.process_error(p1__48059_SHARP_);
});
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
var prepare = (function (p1__48060_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"team-id","team-id",-14505725)],[p1__48060_SHARP_,team_id]);
});
app.main.data.media.notify_start_loading();

return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.mapcat((function (___$3){
return beicon.v2.core.of(app.main.data.team.fetch_teams(),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"update-team-photo",new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null)));
}),beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,beicon.v2.core.mapcat((function (p1__48061_SHARP_){
return app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-team-photo","update-team-photo",539796592),p1__48061_SHARP_);
}),beicon.v2.core.map(prepare,beicon.v2.core.map(app.main.data.media.validate_file,beicon.v2.core.of(self__.file)))))));
}));
}

return (new app.main.data.team.update_team_photo_48062(file,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.team_created = (function app$main$data$team$team_created(team){
if((typeof app.main.data.team.team_created_48068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.team_created_48068 = (function (team,meta48069){
this.team = team;
this.meta48069 = meta48069;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.team_created_48068.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.team_created_48068.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","team-created","app.main.data.team/team-created",-1962244948);
}));

(app.main.data.team.team_created_48068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48070,meta48069__$1){
var self__ = this;
var _48070__$1 = this;
return (new app.main.data.team.team_created_48068(self__.team,meta48069__$1));
}));

(app.main.data.team.team_created_48068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48070){
var self__ = this;
var _48070__$1 = this;
return self__.meta48069;
}));

(app.main.data.team.team_created_48068.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.team;
}));
}

return (new app.main.data.team.team_created_48068(team,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.create_team = (function app$main$data$team$create_team(p__48074){
var map__48075 = p__48074;
var map__48075__$1 = cljs.core.__destructure_map(map__48075);
var params = map__48075__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48075__$1,new cljs.core.Keyword(null,"name","name",1843675177));
app.common.data.macros.runtime_assert("expr assert: (string? name)",(function (){
return typeof name === 'string';
}));

if((typeof app.main.data.team.create_team_48079 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.create_team_48079 = (function (p__48074,map__48075,params,name,meta48080){
this.p__48074 = p__48074;
this.map__48075 = map__48075;
this.params = params;
this.name = name;
this.meta48080 = meta48080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.create_team_48079.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.create_team_48079.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","create-team","app.main.data.team/create-team",2113808240);
}));

(app.main.data.team.create_team_48079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48081,meta48080__$1){
var self__ = this;
var _48081__$1 = this;
return (new app.main.data.team.create_team_48079(self__.p__48074,self__.map__48075,self__.params,self__.name,meta48080__$1));
}));

(app.main.data.team.create_team_48079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48081){
var self__ = this;
var _48081__$1 = this;
return self__.meta48080;
}));

(app.main.data.team.create_team_48079.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.create_team_48079.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,_,___$1){
var self__ = this;
var it__$1 = this;
var map__48082 = cljs.core.meta(self__.params);
var map__48082__$1 = cljs.core.__destructure_map(map__48082);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48082__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48082__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
var features__$1 = app.main.features.global_enabled_features;
var params__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),self__.name,new cljs.core.Keyword(null,"features","features",-1146962336),features__$1], null);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.map(app.main.data.team.team_created,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-team","create-team",1092298721),cljs.core.with_meta(params__$1,cljs.core.meta(it__$1))))));
}));
}

return (new app.main.data.team.create_team_48079(p__48074,map__48075__$1,params,name,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.create_team_with_invitations = (function app$main$data$team$create_team_with_invitations(p__48087){
var map__48088 = p__48087;
var map__48088__$1 = cljs.core.__destructure_map(map__48088);
var params = map__48088__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48088__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var emails = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48088__$1,new cljs.core.Keyword(null,"emails","emails",306754554));
var role = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48088__$1,new cljs.core.Keyword(null,"role","role",-736691072));
if((typeof app.main.data.team.create_team_with_invitations_48089 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.create_team_with_invitations_48089 = (function (p__48087,map__48088,params,name,emails,role,meta48090){
this.p__48087 = p__48087;
this.map__48088 = map__48088;
this.params = params;
this.name = name;
this.emails = emails;
this.role = role;
this.meta48090 = meta48090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.create_team_with_invitations_48089.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.create_team_with_invitations_48089.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","create-team-with-invitations","app.main.data.team/create-team-with-invitations",-1634362488);
}));

(app.main.data.team.create_team_with_invitations_48089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48091,meta48090__$1){
var self__ = this;
var _48091__$1 = this;
return (new app.main.data.team.create_team_with_invitations_48089(self__.p__48087,self__.map__48088,self__.params,self__.name,self__.emails,self__.role,meta48090__$1));
}));

(app.main.data.team.create_team_with_invitations_48089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48091){
var self__ = this;
var _48091__$1 = this;
return self__.meta48090;
}));

(app.main.data.team.create_team_with_invitations_48089.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.create_team_with_invitations_48089.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,_,___$1){
var self__ = this;
var it__$1 = this;
var map__48092 = cljs.core.meta(self__.params);
var map__48092__$1 = cljs.core.__destructure_map(map__48092);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48092__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48092__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
var features__$1 = app.main.features.global_enabled_features;
var params__$1 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),self__.name,new cljs.core.Keyword(null,"emails","emails",306754554),self__.emails,new cljs.core.Keyword(null,"role","role",-736691072),self__.role,new cljs.core.Keyword(null,"features","features",-1146962336),features__$1], null);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.map(app.main.data.team.team_created,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-team-with-invitations","create-team-with-invitations",429565487),cljs.core.with_meta(params__$1,cljs.core.meta(it__$1))))));
}));
}

return (new app.main.data.team.create_team_with_invitations_48089(p__48087,map__48088__$1,params,name,emails,role,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.update_team = (function app$main$data$team$update_team(p__48093){
var map__48094 = p__48093;
var map__48094__$1 = cljs.core.__destructure_map(map__48094);
var params = map__48094__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48094__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48094__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if((typeof app.main.data.team.update_team_48095 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.update_team_48095 = (function (p__48093,map__48094,params,id,name,meta48096){
this.p__48093 = p__48093;
this.map__48094 = map__48094;
this.params = params;
this.id = id;
this.name = name;
this.meta48096 = meta48096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.update_team_48095.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.update_team_48095.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","update-team","app.main.data.team/update-team",1243061138);
}));

(app.main.data.team.update_team_48095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48097,meta48096__$1){
var self__ = this;
var _48097__$1 = this;
return (new app.main.data.team.update_team_48095(self__.p__48093,self__.map__48094,self__.params,self__.id,self__.name,meta48096__$1));
}));

(app.main.data.team.update_team_48095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48097){
var self__ = this;
var _48097__$1 = this;
return self__.meta48096;
}));

(app.main.data.team.update_team_48095.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.update_team_48095.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),self__.id,new cljs.core.Keyword(null,"name","name",1843675177)], null),self__.name);
}));

(app.main.data.team.update_team_48095.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.update_team_48095.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.ignore(app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-team","update-team",1861918263),self__.params));
}));
}

return (new app.main.data.team.update_team_48095(p__48093,map__48094__$1,params,id,name,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.team_leaved = (function app$main$data$team$team_leaved(p__48099){
var map__48100 = p__48099;
var map__48100__$1 = cljs.core.__destructure_map(map__48100);
var params = map__48100__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48100__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if((typeof app.main.data.team.team_leaved_48101 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.team_leaved_48101 = (function (p__48099,map__48100,params,id,meta48102){
this.p__48099 = p__48099;
this.map__48100 = map__48100;
this.params = params;
this.id = id;
this.meta48102 = meta48102;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.team_leaved_48101.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.team_leaved_48101.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","team-leaved","app.main.data.team/team-leaved",1476806175);
}));

(app.main.data.team.team_leaved_48101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48103,meta48102__$1){
var self__ = this;
var _48103__$1 = this;
return (new app.main.data.team.team_leaved_48101(self__.p__48099,self__.map__48100,self__.params,self__.id,meta48102__$1));
}));

(app.main.data.team.team_leaved_48101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48103){
var self__ = this;
var _48103__$1 = this;
return self__.meta48102;
}));

(app.main.data.team.team_leaved_48101.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.params;
}));

(app.main.data.team.team_leaved_48101.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.team_leaved_48101.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"teams","teams",1677714510),cljs.core.dissoc,self__.id);
}));

(app.main.data.team.team_leaved_48101.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.team_leaved_48101.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var teams = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"teams","teams",1677714510));
var temp__5825__auto__ = new cljs.core.Keyword("app.main.data.team","current-team-id","app.main.data.team/current-team-id",675116812).cljs$core$IFn$_invoke$arity$1(app.util.storage.user);
if(cljs.core.truth_(temp__5825__auto__)){
var ctid = temp__5825__auto__;
if(cljs.core.contains_QMARK_(teams,ctid)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.util.storage.user,cljs.core.dissoc,new cljs.core.Keyword("app.main.data.team","current-team-id","app.main.data.team/current-team-id",675116812));
}
} else {
return null;
}
}));
}

return (new app.main.data.team.team_leaved_48101(p__48099,map__48100__$1,params,id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * High-level event for leave team, mainly executed from the
 *   dashboard. It automatically redirects user to the default team, once
 *   the team-leave operation succeed
 */
app.main.data.team.leave_current_team = (function app$main$data$team$leave_current_team(p__48112){
var map__48113 = p__48112;
var map__48113__$1 = cljs.core.__destructure_map(map__48113);
var params = map__48113__$1;
var reassign_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48113__$1,new cljs.core.Keyword(null,"reassign-to","reassign-to",-161965705));
if(cljs.core.truth_(reassign_to)){
if(cljs.core.uuid_QMARK_(reassign_to)){
} else {
throw (new Error(["Assert failed: ","expect a valid uuid for `reassign-to`","\n","(uuid? reassign-to)"].join('')));
}
} else {
}

if((typeof app.main.data.team.leave_current_team_48114 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.leave_current_team_48114 = (function (p__48112,map__48113,params,reassign_to,meta48115){
this.p__48112 = p__48112;
this.map__48113 = map__48113;
this.params = params;
this.reassign_to = reassign_to;
this.meta48115 = meta48115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.leave_current_team_48114.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.leave_current_team_48114.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","leave-current-team","app.main.data.team/leave-current-team",1086395474);
}));

(app.main.data.team.leave_current_team_48114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48116,meta48115__$1){
var self__ = this;
var _48116__$1 = this;
return (new app.main.data.team.leave_current_team_48114(self__.p__48112,self__.map__48113,self__.params,self__.reassign_to,meta48115__$1));
}));

(app.main.data.team.leave_current_team_48114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48116){
var self__ = this;
var _48116__$1 = this;
return self__.meta48115;
}));

(app.main.data.team.leave_current_team_48114.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.leave_current_team_48114.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995));
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.params,new cljs.core.Keyword(null,"id","id",-1388402092),team_id);
var map__48120 = cljs.core.meta(params__$1);
var map__48120__$1 = cljs.core.__destructure_map(map__48120);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48120__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48120__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),beicon.v2.core.empty);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.mapcat((function (___$3){
return beicon.v2.core.merge(beicon.v2.core.of(app.main.data.team.team_leaved(params__$1),app.main.data.team.fetch_teams(),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"leave-team",new cljs.core.Keyword(null,"reassign-to","reassign-to",-161965705),self__.reassign_to,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null))),(on_success.cljs$core$IFn$_invoke$arity$0 ? on_success.cljs$core$IFn$_invoke$arity$0() : on_success.call(null)));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leave-team","leave-team",-1470569524),params__$1)));
}));
}

return (new app.main.data.team.leave_current_team_48114(p__48112,map__48113__$1,params,reassign_to,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.schema_COLON_create_invitation = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emails","emails",306754554),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","set","app.common.schema/set",1226590145),new cljs.core.Keyword("app.common.schema","email","app.common.schema/email",2070921211)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invitations","invitations",-1668975235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword("app.common.schema","email","app.common.schema/email",2070921211)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.team.valid_roles], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resend?","resend?",-682387124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","boolean","app.common.schema/boolean",-727386221)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (attrs){
return ((cljs.core.contains_QMARK_(attrs,new cljs.core.Keyword(null,"emails","emails",306754554))) || (cljs.core.contains_QMARK_(attrs,new cljs.core.Keyword(null,"invitations","invitations",-1668975235))));
})], null)], null);
app.main.data.team.check_create_invitations_params = app.common.schema.check_fn(app.main.data.team.schema_COLON_create_invitation);
/**
 * Unified function to create invitations. Supports two parameter formats:
 *   1. {:emails #{...} :role :admin :team-id uuid} - single role for all emails
 *   2. {:invitations [{:email ... :role ...}] :team-id uuid} - individual roles per email
 */
app.main.data.team.create_invitations = (function app$main$data$team$create_invitations(p__48124){
var map__48125 = p__48124;
var map__48125__$1 = cljs.core.__destructure_map(map__48125);
var params = map__48125__$1;
var emails = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48125__$1,new cljs.core.Keyword(null,"emails","emails",306754554));
var role = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48125__$1,new cljs.core.Keyword(null,"role","role",-736691072));
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48125__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
var invitations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48125__$1,new cljs.core.Keyword(null,"invitations","invitations",-1668975235));
var resend_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48125__$1,new cljs.core.Keyword(null,"resend?","resend?",-682387124));
app.main.data.team.check_create_invitations_params(params);

if((typeof app.main.data.team.create_invitations_48126 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.create_invitations_48126 = (function (p__48124,map__48125,params,emails,role,team_id,invitations,resend_QMARK_,meta48127){
this.p__48124 = p__48124;
this.map__48125 = map__48125;
this.params = params;
this.emails = emails;
this.role = role;
this.team_id = team_id;
this.invitations = invitations;
this.resend_QMARK_ = resend_QMARK_;
this.meta48127 = meta48127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.create_invitations_48126.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.create_invitations_48126.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","create-invitations","app.main.data.team/create-invitations",207317748);
}));

(app.main.data.team.create_invitations_48126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48128,meta48127__$1){
var self__ = this;
var _48128__$1 = this;
return (new app.main.data.team.create_invitations_48126(self__.p__48124,self__.map__48125,self__.params,self__.emails,self__.role,self__.team_id,self__.invitations,self__.resend_QMARK_,meta48127__$1));
}));

(app.main.data.team.create_invitations_48126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48128){
var self__ = this;
var _48128__$1 = this;
return self__.meta48127;
}));

(app.main.data.team.create_invitations_48126.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.create_invitations_48126.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),(cljs.core.truth_(self__.invitations)?clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"role","role",-736691072),self__.invitations)))):cljs.core.name(self__.role)),new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id,new cljs.core.Keyword(null,"resend","resend",-958877571),cljs.core.boolean$(self__.resend_QMARK_)], null);
}));

(app.main.data.team.create_invitations_48126.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.create_invitations_48126.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,_,___$1){
var self__ = this;
var it__$1 = this;
var map__48132 = cljs.core.meta(self__.params);
var map__48132__$1 = cljs.core.__destructure_map(map__48132);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48132__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48132__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
var rpc_params = (cljs.core.truth_((function (){var and__5023__auto__ = self__.emails;
if(cljs.core.truth_(and__5023__auto__)){
return self__.role;
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"emails","emails",306754554),self__.emails,new cljs.core.Keyword(null,"role","role",-736691072),self__.role,new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id], null):(cljs.core.truth_(self__.invitations)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"invitations","invitations",-1668975235),self__.invitations,new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id], null):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(" Invalid parameters ",self__.params)})()
));
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-team-invitations","create-team-invitations",-1043494311),cljs.core.with_meta(rpc_params,cljs.core.meta(it__$1)))));
}));
}

return (new app.main.data.team.create_invitations_48126(p__48124,map__48125__$1,params,emails,role,team_id,invitations,resend_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.copy_invitation_link = (function app$main$data$team$copy_invitation_link(p__48136){
var map__48137 = p__48136;
var map__48137__$1 = cljs.core.__destructure_map(map__48137);
var params = map__48137__$1;
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48137__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48137__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
if(cljs.core.truth_(app.common.schema.check_email(email))){
} else {
throw (new Error("Assert failed: (sm/check-email email)"));
}

if(cljs.core.uuid_QMARK_(team_id)){
} else {
throw (new Error("Assert failed: (uuid? team-id)"));
}

if((typeof app.main.data.team.copy_invitation_link_48138 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.copy_invitation_link_48138 = (function (p__48136,map__48137,params,email,team_id,meta48139){
this.p__48136 = p__48136;
this.map__48137 = map__48137;
this.params = params;
this.email = email;
this.team_id = team_id;
this.meta48139 = meta48139;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.copy_invitation_link_48138.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.copy_invitation_link_48138.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","copy-invitation-link","app.main.data.team/copy-invitation-link",-836652211);
}));

(app.main.data.team.copy_invitation_link_48138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48140,meta48139__$1){
var self__ = this;
var _48140__$1 = this;
return (new app.main.data.team.copy_invitation_link_48138(self__.p__48136,self__.map__48137,self__.params,self__.email,self__.team_id,meta48139__$1));
}));

(app.main.data.team.copy_invitation_link_48138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48140){
var self__ = this;
var _48140__$1 = this;
return self__.meta48139;
}));

(app.main.data.team.copy_invitation_link_48138.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),self__.email,new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id], null);
}));

(app.main.data.team.copy_invitation_link_48138.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.copy_invitation_link_48138.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var map__48144 = cljs.core.meta(self__.params);
var map__48144__$1 = cljs.core.__destructure_map(map__48144);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48144__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48144__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
var router = new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.ignore(beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (uri){
return app.util.clipboard.to_clipboard(cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri));
}),beicon.v2.core.map((function (fragment){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.config.public_uri,new cljs.core.Keyword(null,"fragment","fragment",826775688),fragment);
}),beicon.v2.core.map((function (params__$1){
return app.main.router.resolve.cljs$core$IFn$_invoke$arity$3(router,new cljs.core.Keyword(null,"auth-verify-token","auth-verify-token",-675769474),params__$1);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-team-invitation-token","get-team-invitation-token",-412833462),self__.params)))))));
}));
}

return (new app.main.data.team.copy_invitation_link_48138(p__48136,map__48137__$1,params,email,team_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.update_invitation_role = (function app$main$data$team$update_invitation_role(p__48145){
var map__48146 = p__48145;
var map__48146__$1 = cljs.core.__destructure_map(map__48146);
var params = map__48146__$1;
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48146__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48146__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
var role = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48146__$1,new cljs.core.Keyword(null,"role","role",-736691072));
if(cljs.core.truth_(app.common.schema.check_email(email))){
} else {
throw (new Error("Assert failed: (sm/check-email email)"));
}

if(cljs.core.uuid_QMARK_(team_id)){
} else {
throw (new Error("Assert failed: (uuid? team-id)"));
}

if(cljs.core.contains_QMARK_(app.common.types.team.valid_roles,role)){
} else {
throw (new Error("Assert failed: (contains? ctt/valid-roles role)"));
}

if((typeof app.main.data.team.update_invitation_role_48147 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.update_invitation_role_48147 = (function (p__48145,map__48146,params,email,team_id,role,meta48148){
this.p__48145 = p__48145;
this.map__48146 = map__48146;
this.params = params;
this.email = email;
this.team_id = team_id;
this.role = role;
this.meta48148 = meta48148;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.update_invitation_role_48147.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.update_invitation_role_48147.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","update-invitation-role","app.main.data.team/update-invitation-role",-1416415162);
}));

(app.main.data.team.update_invitation_role_48147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48149,meta48148__$1){
var self__ = this;
var _48149__$1 = this;
return (new app.main.data.team.update_invitation_role_48147(self__.p__48145,self__.map__48146,self__.params,self__.email,self__.team_id,self__.role,meta48148__$1));
}));

(app.main.data.team.update_invitation_role_48147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48149){
var self__ = this;
var _48149__$1 = this;
return self__.meta48148;
}));

(app.main.data.team.update_invitation_role_48147.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),self__.role], null);
}));

(app.main.data.team.update_invitation_role_48147.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.update_invitation_role_48147.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__48150 = cljs.core.meta(self__.params);
var map__48150__$1 = cljs.core.__destructure_map(map__48150);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48150__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48150__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-team-invitation-role","update-team-invitation-role",206939756),self__.params)));
}));
}

return (new app.main.data.team.update_invitation_role_48147(p__48145,map__48146__$1,params,email,team_id,role,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.delete_invitation = (function app$main$data$team$delete_invitation(p__48156){
var map__48157 = p__48156;
var map__48157__$1 = cljs.core.__destructure_map(map__48157);
var params = map__48157__$1;
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48157__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48157__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
if(cljs.core.truth_(app.common.schema.check_email(email))){
} else {
throw (new Error("Assert failed: (sm/check-email email)"));
}

if(cljs.core.uuid_QMARK_(team_id)){
} else {
throw (new Error("Assert failed: (uuid? team-id)"));
}

if((typeof app.main.data.team.delete_invitation_48158 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.delete_invitation_48158 = (function (p__48156,map__48157,params,email,team_id,meta48159){
this.p__48156 = p__48156;
this.map__48157 = map__48157;
this.params = params;
this.email = email;
this.team_id = team_id;
this.meta48159 = meta48159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.delete_invitation_48158.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.delete_invitation_48158.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","delete-invitation","app.main.data.team/delete-invitation",322136827);
}));

(app.main.data.team.delete_invitation_48158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48160,meta48159__$1){
var self__ = this;
var _48160__$1 = this;
return (new app.main.data.team.delete_invitation_48158(self__.p__48156,self__.map__48157,self__.params,self__.email,self__.team_id,meta48159__$1));
}));

(app.main.data.team.delete_invitation_48158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48160){
var self__ = this;
var _48160__$1 = this;
return self__.meta48159;
}));

(app.main.data.team.delete_invitation_48158.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.delete_invitation_48158.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__48161 = cljs.core.meta(self__.params);
var map__48161__$1 = cljs.core.__destructure_map(map__48161);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48161__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48161__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-team-invitation","delete-team-invitation",602824509),self__.params)));
}));
}

return (new app.main.data.team.delete_invitation_48158(p__48156,map__48157__$1,params,email,team_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.team_deleted = (function app$main$data$team$team_deleted(id){
if((typeof app.main.data.team.team_deleted_48162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.team_deleted_48162 = (function (id,meta48163){
this.id = id;
this.meta48163 = meta48163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.team_deleted_48162.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.team_deleted_48162.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","team-deleted","app.main.data.team/team-deleted",1479146302);
}));

(app.main.data.team.team_deleted_48162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48164,meta48163__$1){
var self__ = this;
var _48164__$1 = this;
return (new app.main.data.team.team_deleted_48162(self__.id,meta48163__$1));
}));

(app.main.data.team.team_deleted_48162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48164){
var self__ = this;
var _48164__$1 = this;
return self__.meta48163;
}));

(app.main.data.team.team_deleted_48162.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.team_deleted_48162.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"teams","teams",1677714510),cljs.core.dissoc,self__.id);
}));
}

return (new app.main.data.team.team_deleted_48162(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.delete_team = (function app$main$data$team$delete_team(p__48169){
var map__48172 = p__48169;
var map__48172__$1 = cljs.core.__destructure_map(map__48172);
var params = map__48172__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48172__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if((typeof app.main.data.team.delete_team_48173 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.delete_team_48173 = (function (p__48169,map__48172,params,id,meta48174){
this.p__48169 = p__48169;
this.map__48172 = map__48172;
this.params = params;
this.id = id;
this.meta48174 = meta48174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.delete_team_48173.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.delete_team_48173.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","delete-team","app.main.data.team/delete-team",212490685);
}));

(app.main.data.team.delete_team_48173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48175,meta48174__$1){
var self__ = this;
var _48175__$1 = this;
return (new app.main.data.team.delete_team_48173(self__.p__48169,self__.map__48172,self__.params,self__.id,meta48174__$1));
}));

(app.main.data.team.delete_team_48173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48175){
var self__ = this;
var _48175__$1 = this;
return self__.meta48174;
}));

(app.main.data.team.delete_team_48173.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.delete_team_48173.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__48176 = cljs.core.meta(self__.params);
var map__48176__$1 = cljs.core.__destructure_map(map__48176);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48176__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),beicon.v2.core.empty);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48176__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.mapcat((function (result){
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.team.team_deleted(self__.id)),(on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(result) : on_success.call(null,result)));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-team","delete-team",323575412),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null))));
}));
}

return (new app.main.data.team.delete_team_48173(p__48169,map__48172__$1,params,id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.delete_webhook = (function app$main$data$team$delete_webhook(p__48177){
var map__48178 = p__48177;
var map__48178__$1 = cljs.core.__destructure_map(map__48178);
var params = map__48178__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48178__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
app.common.data.macros.runtime_assert("expr assert: (uuid? id)",(function (){
return cljs.core.uuid_QMARK_(id);
}));

if((typeof app.main.data.team.delete_webhook_48181 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.delete_webhook_48181 = (function (p__48177,map__48178,params,id,meta48182){
this.p__48177 = p__48177;
this.map__48178 = map__48178;
this.params = params;
this.id = id;
this.meta48182 = meta48182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.delete_webhook_48181.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.delete_webhook_48181.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","delete-webhook","app.main.data.team/delete-webhook",1885812780);
}));

(app.main.data.team.delete_webhook_48181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48183,meta48182__$1){
var self__ = this;
var _48183__$1 = this;
return (new app.main.data.team.delete_webhook_48181(self__.p__48177,self__.map__48178,self__.params,self__.id,meta48182__$1));
}));

(app.main.data.team.delete_webhook_48181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48183){
var self__ = this;
var _48183__$1 = this;
return self__.meta48182;
}));

(app.main.data.team.delete_webhook_48181.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.delete_webhook_48181.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.params,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id);
var map__48188 = cljs.core.meta(params__$1);
var map__48188__$1 = cljs.core.__destructure_map(map__48188);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48188__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48188__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-webhook","delete-webhook",1803171729),params__$1)));
}));
}

return (new app.main.data.team.delete_webhook_48181(p__48177,map__48178__$1,params,id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.valid_mtypes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["application/json",null,"application/x-www-form-urlencoded",null,"application/transit+json",null], null), null);
app.main.data.team.update_webhook = (function app$main$data$team$update_webhook(p__48189){
var map__48191 = p__48189;
var map__48191__$1 = cljs.core.__destructure_map(map__48191);
var params = map__48191__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48191__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48191__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var mtype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48191__$1,new cljs.core.Keyword(null,"mtype","mtype",-1724656120));
var is_active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48191__$1,new cljs.core.Keyword(null,"is-active","is-active",-1424968720));
app.common.data.macros.runtime_assert("expr assert: (uuid? id)",(function (){
return cljs.core.uuid_QMARK_(id);
}));

app.common.data.macros.runtime_assert("expr assert: (contains? valid-mtypes mtype)",(function (){
return cljs.core.contains_QMARK_(app.main.data.team.valid_mtypes,mtype);
}));

app.common.data.macros.runtime_assert("expr assert: (boolean? is-active)",(function (){
return cljs.core.boolean_QMARK_(is_active);
}));

app.common.data.macros.runtime_assert("expr assert: (u/uri? uri)",(function (){
return app.common.uri.uri_QMARK_(uri);
}));

if((typeof app.main.data.team.update_webhook_48192 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.update_webhook_48192 = (function (p__48189,map__48191,params,id,uri,mtype,is_active,meta48193){
this.p__48189 = p__48189;
this.map__48191 = map__48191;
this.params = params;
this.id = id;
this.uri = uri;
this.mtype = mtype;
this.is_active = is_active;
this.meta48193 = meta48193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.update_webhook_48192.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.update_webhook_48192.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","update-webhook","app.main.data.team/update-webhook",1627752910);
}));

(app.main.data.team.update_webhook_48192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48194,meta48193__$1){
var self__ = this;
var _48194__$1 = this;
return (new app.main.data.team.update_webhook_48192(self__.p__48189,self__.map__48191,self__.params,self__.id,self__.uri,self__.mtype,self__.is_active,meta48193__$1));
}));

(app.main.data.team.update_webhook_48192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48194){
var self__ = this;
var _48194__$1 = this;
return self__.meta48193;
}));

(app.main.data.team.update_webhook_48192.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.update_webhook_48192.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.params,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id);
var map__48203 = cljs.core.meta(params__$1);
var map__48203__$1 = cljs.core.__destructure_map(map__48203);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48203__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),beicon.v2.core.empty);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48203__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.mapcat((function (___$3){
return beicon.v2.core.concat((on_success.cljs$core$IFn$_invoke$arity$0 ? on_success.cljs$core$IFn$_invoke$arity$0() : on_success.call(null)),beicon.v2.core.of(app.main.data.team.fetch_webhooks()));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-webhook","update-webhook",1982105527),params__$1)));
}));
}

return (new app.main.data.team.update_webhook_48192(p__48189,map__48191__$1,params,id,uri,mtype,is_active,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.create_webhook = (function app$main$data$team$create_webhook(p__48210){
var map__48211 = p__48210;
var map__48211__$1 = cljs.core.__destructure_map(map__48211);
var params = map__48211__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48211__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var mtype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48211__$1,new cljs.core.Keyword(null,"mtype","mtype",-1724656120));
var is_active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48211__$1,new cljs.core.Keyword(null,"is-active","is-active",-1424968720));
app.common.data.macros.runtime_assert("expr assert: (contains? valid-mtypes mtype)",(function (){
return cljs.core.contains_QMARK_(app.main.data.team.valid_mtypes,mtype);
}));

app.common.data.macros.runtime_assert("expr assert: (boolean? is-active)",(function (){
return cljs.core.boolean_QMARK_(is_active);
}));

app.common.data.macros.runtime_assert("expr assert: (u/uri? uri)",(function (){
return app.common.uri.uri_QMARK_(uri);
}));

if((typeof app.main.data.team.create_webhook_48215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.create_webhook_48215 = (function (p__48210,map__48211,params,uri,mtype,is_active,meta48216){
this.p__48210 = p__48210;
this.map__48211 = map__48211;
this.params = params;
this.uri = uri;
this.mtype = mtype;
this.is_active = is_active;
this.meta48216 = meta48216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.create_webhook_48215.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.create_webhook_48215.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","create-webhook","app.main.data.team/create-webhook",-1180018953);
}));

(app.main.data.team.create_webhook_48215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48217,meta48216__$1){
var self__ = this;
var _48217__$1 = this;
return (new app.main.data.team.create_webhook_48215(self__.p__48210,self__.map__48211,self__.params,self__.uri,self__.mtype,self__.is_active,meta48216__$1));
}));

(app.main.data.team.create_webhook_48215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48217){
var self__ = this;
var _48217__$1 = this;
return self__.meta48216;
}));

(app.main.data.team.create_webhook_48215.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.create_webhook_48215.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
var params__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.params,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id),new cljs.core.Keyword(null,"uri","uri",-774711847),cljs.core.str);
var map__48221 = cljs.core.meta(params__$1);
var map__48221__$1 = cljs.core.__destructure_map(map__48221);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48221__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),beicon.v2.core.empty);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48221__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.mapcat((function (___$3){
return beicon.v2.core.concat((on_success.cljs$core$IFn$_invoke$arity$0 ? on_success.cljs$core$IFn$_invoke$arity$0() : on_success.call(null)),beicon.v2.core.of(app.main.data.team.fetch_webhooks()));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-webhook","create-webhook",-997639408),params__$1)));
}));
}

return (new app.main.data.team.create_webhook_48215(p__48210,map__48211__$1,params,uri,mtype,is_active,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.team.shared_files_fetched = (function app$main$data$team$shared_files_fetched(files){
if((typeof app.main.data.team.shared_files_fetched_48223 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.shared_files_fetched_48223 = (function (files,meta48224){
this.files = files;
this.meta48224 = meta48224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.shared_files_fetched_48223.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.shared_files_fetched_48223.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","shared-files-fetched","app.main.data.team/shared-files-fetched",1714765517);
}));

(app.main.data.team.shared_files_fetched_48223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48225,meta48224__$1){
var self__ = this;
var _48225__$1 = this;
return (new app.main.data.team.shared_files_fetched_48223(self__.files,meta48224__$1));
}));

(app.main.data.team.shared_files_fetched_48223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48225){
var self__ = this;
var _48225__$1 = this;
return self__.meta48224;
}));

(app.main.data.team.shared_files_fetched_48223.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.shared_files_fetched_48223.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var files__$1 = app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),self__.files);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"shared-files","shared-files",-929120284),cljs.core.merge,files__$1);
}));
}

return (new app.main.data.team.shared_files_fetched_48223(files,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Event mainly used for fetch a list of shared libraries for a team,
 *   this list does not includes the content of the library per se.  It
 *   is used mainly for show available libraries and a summary of it.
 */
app.main.data.team.fetch_shared_files = (function app$main$data$team$fetch_shared_files(var_args){
var G__48227 = arguments.length;
switch (G__48227) {
case 0:
return app.main.data.team.fetch_shared_files.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.team.fetch_shared_files.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.team.fetch_shared_files.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.team.fetch_shared_files.cljs$core$IFn$_invoke$arity$1(null);
}));

(app.main.data.team.fetch_shared_files.cljs$core$IFn$_invoke$arity$1 = (function (team_id){
if((typeof app.main.data.team.fetch_shared_files_48228 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.team.fetch_shared_files_48228 = (function (team_id,meta48229){
this.team_id = team_id;
this.meta48229 = meta48229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.team.fetch_shared_files_48228.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.fetch_shared_files_48228.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.team","fetch-shared-files","app.main.data.team/fetch-shared-files",426251101);
}));

(app.main.data.team.fetch_shared_files_48228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48230,meta48229__$1){
var self__ = this;
var _48230__$1 = this;
return (new app.main.data.team.fetch_shared_files_48228(self__.team_id,meta48229__$1));
}));

(app.main.data.team.fetch_shared_files_48228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48230){
var self__ = this;
var _48230__$1 = this;
return self__.meta48229;
}));

(app.main.data.team.fetch_shared_files_48228.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.team.fetch_shared_files_48228.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
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
return beicon.v2.core.map(app.main.data.team.shared_files_fetched,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-team-shared-files","get-team-shared-files",1195206608),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id__$1], null)));
} else {
return null;
}
}));
}

return (new app.main.data.team.fetch_shared_files_48228(team_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.team.fetch_shared_files.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=app.main.data.team.js.map
