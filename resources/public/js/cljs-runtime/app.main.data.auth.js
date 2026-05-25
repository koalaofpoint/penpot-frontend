import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.exceptions.js";
import "./app.common.schema.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.data.common.js";
import "./app.main.data.event.js";
import "./app.main.data.notifications.js";
import "./app.main.data.profile.js";
import "./app.main.data.team.js";
import "./app.main.data.websocket.js";
import "./app.main.repo.js";
import "./app.main.router.js";
import "./app.util.i18n.js";
import "./app.util.storage.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.auth');
app.main.data.auth.is_authenticated_QMARK_ = (function app$main$data$auth$is_authenticated_QMARK_(p__48937){
var map__48938 = p__48937;
var map__48938__$1 = cljs.core.__destructure_map(map__48938);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48938__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return ((cljs.core.uuid_QMARK_(id)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,app.common.uuid.zero)));
});
/**
 * This is the main event that is executed once we have logged in
 *   profile. The profile can proceed from standard login or from
 *   accepting invitation, or third party auth signup or singin.
 */
app.main.data.auth.logged_in = (function app$main$data$auth$logged_in(p__48939){
var map__48940 = p__48939;
var map__48940__$1 = cljs.core.__destructure_map(map__48940);
var profile = map__48940__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48940__$1,new cljs.core.Keyword(null,"props","props",453281727));
var get_redirect_events = (function app$main$data$auth$logged_in_$_get_redirect_events(teams){
var temp__5823__auto__ = new cljs.core.Keyword(null,"invitation-token","invitation-token",-310125311).cljs$core$IFn$_invoke$arity$1(profile);
if(cljs.core.truth_(temp__5823__auto__)){
var token = temp__5823__auto__;
return beicon.v2.core.of(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auth-verify-token","auth-verify-token",-675769474),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token","token",-1211463215),token], null)));
} else {
var temp__5823__auto____$1 = new cljs.core.Keyword(null,"login-redirect","login-redirect",-2132232884).cljs$core$IFn$_invoke$arity$1(app.util.storage.session);
if(cljs.core.truth_(temp__5823__auto____$1)){
var redirect_href = temp__5823__auto____$1;
var _STAR_sync_STAR__orig_val__48950 = app.util.storage._STAR_sync_STAR_;
var _STAR_sync_STAR__temp_val__48951 = true;
(app.util.storage._STAR_sync_STAR_ = _STAR_sync_STAR__temp_val__48951);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.util.storage.session,cljs.core.dissoc,new cljs.core.Keyword(null,"login-redirect","login-redirect",-2132232884));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(redirect_href,app.main.router.get_current_href())){
return beicon.v2.core.of(app.main.router.reload(true));
} else {
return beicon.v2.core.of(app.main.router.nav_raw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698),redirect_href], 0)));
}
}finally {(app.util.storage._STAR_sync_STAR_ = _STAR_sync_STAR__orig_val__48950);
}} else {
var temp__5823__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"welcome-file-id","welcome-file-id",594574650));
if(cljs.core.truth_(temp__5823__auto____$2)){
var file_id = temp__5823__auto____$2;
return beicon.v2.core.of(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"team-id","team-id",-14505725),new cljs.core.Keyword(null,"default-team-id","default-team-id",1198639706).cljs$core$IFn$_invoke$arity$1(profile)], 0)),app.main.data.profile.update_profile_props(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"welcome-file-id","welcome-file-id",594574650),null], null)));
} else {
var teams__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),teams);
var team_id = app.main.data.team.get_last_team_id();
var team_id__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = team_id;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.contains_QMARK_(teams__$1,team_id);
} else {
return and__5023__auto__;
}
})())?team_id:new cljs.core.Keyword(null,"default-team-id","default-team-id",1198639706).cljs$core$IFn$_invoke$arity$1(profile));
return beicon.v2.core.of(app.main.data.common.go_to_dashboard_recent.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id__$1], null)], 0)));
}
}
}
});
if((typeof app.main.data.auth.logged_in_48954 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.auth.logged_in_48954 = (function (p__48939,map__48940,profile,props,get_redirect_events,meta48955){
this.p__48939 = p__48939;
this.map__48940 = map__48940;
this.profile = profile;
this.props = props;
this.get_redirect_events = get_redirect_events;
this.meta48955 = meta48955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.auth.logged_in_48954.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.logged_in_48954.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.auth","logged-in","app.main.data.auth/logged-in",944094603);
}));

(app.main.data.auth.logged_in_48954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48956,meta48955__$1){
var self__ = this;
var _48956__$1 = this;
return (new app.main.data.auth.logged_in_48954(self__.p__48939,self__.map__48940,self__.profile,self__.props,self__.get_redirect_events,meta48955__$1));
}));

(app.main.data.auth.logged_in_48954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48956){
var self__ = this;
var _48956__$1 = this;
return self__.meta48955;
}));

(app.main.data.auth.logged_in_48954.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.logged_in_48954.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"signin",new cljs.core.Keyword("app.main.data.event","type","app.main.data.event/type",-599808406),"identify",new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(self__.profile),new cljs.core.Keyword(null,"auth-backend","auth-backend",1958958121),new cljs.core.Keyword(null,"auth-backend","auth-backend",1958958121).cljs$core$IFn$_invoke$arity$1(self__.profile),new cljs.core.Keyword(null,"fullname","fullname",1638772587),new cljs.core.Keyword(null,"fullname","fullname",1638772587).cljs$core$IFn$_invoke$arity$1(self__.profile),new cljs.core.Keyword(null,"is-muted","is-muted",-431849576),new cljs.core.Keyword(null,"is-muted","is-muted",-431849576).cljs$core$IFn$_invoke$arity$1(self__.profile),new cljs.core.Keyword(null,"default-team-id","default-team-id",1198639706),new cljs.core.Keyword(null,"default-team-id","default-team-id",1198639706).cljs$core$IFn$_invoke$arity$1(self__.profile),new cljs.core.Keyword(null,"default-project-id","default-project-id",-850768589),new cljs.core.Keyword(null,"default-project-id","default-project-id",-850768589).cljs$core$IFn$_invoke$arity$1(self__.profile)], null);
}));

(app.main.data.auth.logged_in_48954.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.logged_in_48954.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
app.config.initialize_external_context_info();

return beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.merge(beicon.v2.core.of(app.main.data.profile.set_profile(self__.profile),app.main.data.websocket.initialize(),app.main.data.team.fetch_teams()),beicon.v2.core.mapcat(self__.get_redirect_events,beicon.v2.core.map(cljs.core.deref,beicon.v2.core.take((1),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.team","teams-fetched","app.main.data.team/teams-fetched",1747661254)),stream))))));
}));
}

return (new app.main.data.auth.logged_in_48954(p__48939,map__48940__$1,profile,props,get_redirect_events,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.auth.login = (function app$main$data$auth$login(p__48960){
var map__48961 = p__48960;
var map__48961__$1 = cljs.core.__destructure_map(map__48961);
var data = map__48961__$1;
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48961__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48961__$1,new cljs.core.Keyword(null,"password","password",417022471));
var invitation_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48961__$1,new cljs.core.Keyword(null,"invitation-token","invitation-token",-310125311));
if((typeof app.main.data.auth.login_48962 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.auth.login_48962 = (function (p__48960,map__48961,data,email,password,invitation_token,meta48963){
this.p__48960 = p__48960;
this.map__48961 = map__48961;
this.data = data;
this.email = email;
this.password = password;
this.invitation_token = invitation_token;
this.meta48963 = meta48963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.auth.login_48962.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.login_48962.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.auth","login","app.main.data.auth/login",783166603);
}));

(app.main.data.auth.login_48962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48964,meta48963__$1){
var self__ = this;
var _48964__$1 = this;
return (new app.main.data.auth.login_48962(self__.p__48960,self__.map__48961,self__.data,self__.email,self__.password,self__.invitation_token,meta48963__$1));
}));

(app.main.data.auth.login_48962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48964){
var self__ = this;
var _48964__$1 = this;
return self__.meta48963;
}));

(app.main.data.auth.login_48962.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.login_48962.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
var map__48965 = cljs.core.meta(self__.data);
var map__48965__$1 = cljs.core.__destructure_map(map__48965);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48965__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48965__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"email","email",1415816706),self__.email,new cljs.core.Keyword(null,"password","password",417022471),self__.password,new cljs.core.Keyword(null,"invitation-token","invitation-token",-310125311),self__.invitation_token], null);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.merge_map((function (data__$1){
return beicon.v2.core.merge(beicon.v2.core.of(app.main.data.profile.fetch_profile()),beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.map((function (){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("authentication",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"authentication","authentication",1746273042)], null),null], 0)),null);
}),beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.filter(cljs.core.complement(app.main.data.auth.is_authenticated_QMARK_),beicon.v2.core.map(cljs.core.deref,beicon.v2.core.take((1),beicon.v2.core.filter(app.main.data.profile.profile_fetched_QMARK_,stream))))))),beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.map(app.main.data.auth.logged_in,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,beicon.v2.core.map((function (profile){
return cljs.core.with_meta(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data__$1,profile], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","source","app.main.data.event/source",1802544019),"login"], null));
}),beicon.v2.core.filter(app.main.data.auth.is_authenticated_QMARK_,beicon.v2.core.map(cljs.core.deref,beicon.v2.core.take((1),beicon.v2.core.filter(app.main.data.profile.profile_fetched_QMARK_,stream)))))))));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login-with-password","login-with-password",-305903165),app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(params))));
}));
}

return (new app.main.data.auth.login_48962(p__48960,map__48961__$1,data,email,password,invitation_token,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.auth.schema_COLON_login_with_ldap = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"login-with-ldap"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword("app.common.schema","email","app.common.schema/email",2070921211)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
app.main.data.auth.login_with_ldap = (function app$main$data$auth$login_with_ldap(params){
if(cljs.core.truth_(app.common.schema.check(app.main.data.auth.schema_COLON_login_with_ldap,params))){
} else {
throw (new Error("Assert failed: (sm/check schema:login-with-ldap params)"));
}

if((typeof app.main.data.auth.login_with_ldap_48966 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.auth.login_with_ldap_48966 = (function (params,meta48967){
this.params = params;
this.meta48967 = meta48967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.auth.login_with_ldap_48966.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.login_with_ldap_48966.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.auth","login-with-ldap","app.main.data.auth/login-with-ldap",1589848961);
}));

(app.main.data.auth.login_with_ldap_48966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48968,meta48967__$1){
var self__ = this;
var _48968__$1 = this;
return (new app.main.data.auth.login_with_ldap_48966(self__.params,meta48967__$1));
}));

(app.main.data.auth.login_with_ldap_48966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48968){
var self__ = this;
var _48968__$1 = this;
return self__.meta48967;
}));

(app.main.data.auth.login_with_ldap_48966.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.login_with_ldap_48966.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__48969 = cljs.core.meta(self__.params);
var map__48969__$1 = cljs.core.__destructure_map(map__48969);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48969__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48969__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.map((function (profile){
return app.main.data.auth.logged_in(cljs.core.with_meta(profile,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","source","app.main.data.event/source",1802544019),"login-with-ldap"], null)));
}),beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login-with-ldap","login-with-ldap",1944357469),self__.params))));
}));
}

return (new app.main.data.auth.login_with_ldap_48966(params,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.auth.schema_COLON_login_with_sso = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"login-with-sso"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"provider","provider",-302056900),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null)], null);
/**
 * Start the SSO flow
 */
app.main.data.auth.login_with_sso = (function app$main$data$auth$login_with_sso(params){
if(cljs.core.truth_(app.common.schema.check(app.main.data.auth.schema_COLON_login_with_sso,params))){
} else {
throw (new Error("Assert failed: (sm/check schema:login-with-sso params)"));
}

if((typeof app.main.data.auth.login_with_sso_48970 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.auth.login_with_sso_48970 = (function (params,meta48971){
this.params = params;
this.meta48971 = meta48971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.auth.login_with_sso_48970.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.login_with_sso_48970.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.auth","login-with-sso","app.main.data.auth/login-with-sso",-1613996868);
}));

(app.main.data.auth.login_with_sso_48970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48972,meta48971__$1){
var self__ = this;
var _48972__$1 = this;
return (new app.main.data.auth.login_with_sso_48970(self__.params,meta48971__$1));
}));

(app.main.data.auth.login_with_sso_48970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48972){
var self__ = this;
var _48972__$1 = this;
return self__.meta48971;
}));

(app.main.data.auth.login_with_sso_48970.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.login_with_sso_48970.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (cause){
var map__48973 = cljs.core.ex_data(cause);
var map__48973__$1 = cljs.core.__destructure_map(map__48973);
var error = map__48973__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48973__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48973__$1,new cljs.core.Keyword(null,"code","code",1586293142));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"restriction","restriction",-1380234912))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.Keyword(null,"provider-not-configured","provider-not-configured",609627056))))){
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.auth-provider-not-configured")));
} else {
return beicon.v2.core.throw$(cause);
}
}),beicon.v2.core.map((function (p__48974){
var map__48975 = p__48974;
var map__48975__$1 = cljs.core.__destructure_map(map__48975);
var rsp = map__48975__$1;
var redirect_uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48975__$1,new cljs.core.Keyword(null,"redirect-uri","redirect-uri",374475842));
if(cljs.core.truth_(redirect_uri)){
return app.main.router.nav_raw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"uri","uri",-774711847),redirect_uri], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("unexpected response from OIDC method",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"unexpected-response","unexpected-response",-1471929181),new cljs.core.Keyword(null,"hint","hint",439639918),"unexpected response from OIDC method",new cljs.core.Keyword(null,"resp","resp",1418702376),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rsp], 0))], null),null], 0)),null);
}
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login-with-oidc","login-with-oidc",688254834),self__.params)));
}));
}

return (new app.main.data.auth.login_with_sso_48970(params,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Used mainly as flow continuation after token validation.
 */
app.main.data.auth.login_from_token = (function app$main$data$auth$login_from_token(p__48976){
var map__48977 = p__48976;
var map__48977__$1 = cljs.core.__destructure_map(map__48977);
var tdata = map__48977__$1;
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48977__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
if((typeof app.main.data.auth.login_from_token_48978 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.auth.login_from_token_48978 = (function (p__48976,map__48977,tdata,profile,meta48979){
this.p__48976 = p__48976;
this.map__48977 = map__48977;
this.tdata = tdata;
this.profile = profile;
this.meta48979 = meta48979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.auth.login_from_token_48978.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.login_from_token_48978.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.auth","login-from-token","app.main.data.auth/login-from-token",-37432826);
}));

(app.main.data.auth.login_from_token_48978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48980,meta48979__$1){
var self__ = this;
var _48980__$1 = this;
return (new app.main.data.auth.login_from_token_48978(self__.p__48976,self__.map__48977,self__.tdata,self__.profile,meta48979__$1));
}));

(app.main.data.auth.login_from_token_48978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48980){
var self__ = this;
var _48980__$1 = this;
return self__.meta48979;
}));

(app.main.data.auth.login_from_token_48978.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.login_from_token_48978.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.map((function (profile__$1){
return app.main.data.auth.logged_in(cljs.core.with_meta(profile__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","source","app.main.data.event/source",1802544019),"login-with-token"], null)));
}),app.main.data.profile.on_fetch_profile_success(self__.profile)));
}));
}

return (new app.main.data.auth.login_from_token_48978(p__48976,map__48977__$1,tdata,profile,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Event used mainly for mark current session as logged-in in after the
 *   user successfully registered using third party auth provider (in this
 *   case we dont need to verify the email).
 */
app.main.data.auth.login_from_register = (function app$main$data$auth$login_from_register(){
if((typeof app.main.data.auth.login_from_register_48981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.auth.login_from_register_48981 = (function (meta48982){
this.meta48982 = meta48982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.auth.login_from_register_48981.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.login_from_register_48981.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.auth","login-from-register","app.main.data.auth/login-from-register",-1141216339);
}));

(app.main.data.auth.login_from_register_48981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48983,meta48982__$1){
var self__ = this;
var _48983__$1 = this;
return (new app.main.data.auth.login_from_register_48981(meta48982__$1));
}));

(app.main.data.auth.login_from_register_48981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48983){
var self__ = this;
var _48983__$1 = this;
return self__.meta48982;
}));

(app.main.data.auth.login_from_register_48981.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.login_from_register_48981.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
return beicon.v2.core.merge(beicon.v2.core.of(app.main.data.profile.fetch_profile()),beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.map(app.main.data.auth.logged_in,beicon.v2.core.map((function (profile){
return cljs.core.with_meta(profile,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","source","app.main.data.event/source",1802544019),"register"], null));
}),beicon.v2.core.filter(app.main.data.auth.is_authenticated_QMARK_,beicon.v2.core.map(cljs.core.deref,beicon.v2.core.take((1),beicon.v2.core.filter(app.main.data.profile.profile_fetched_QMARK_,stream))))))));
}));
}

return (new app.main.data.auth.login_from_register_48981(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.auth.logged_out = (function app$main$data$auth$logged_out(p__48984){
var map__48985 = p__48984;
var map__48985__$1 = cljs.core.__destructure_map(map__48985);
var redirect_uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48985__$1,new cljs.core.Keyword(null,"redirect-uri","redirect-uri",374475842));
if((typeof app.main.data.auth.logged_out_48986 !== 'undefined')){
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
app.main.data.auth.logged_out_48986 = (function (p__48984,map__48985,redirect_uri,meta48987){
this.p__48984 = p__48984;
this.map__48985 = map__48985;
this.redirect_uri = redirect_uri;
this.meta48987 = meta48987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.auth.logged_out_48986.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.logged_out_48986.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.auth","logged-out","app.main.data.auth/logged-out",614492580);
}));

(app.main.data.auth.logged_out_48986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48988,meta48987__$1){
var self__ = this;
var _48988__$1 = this;
return (new app.main.data.auth.logged_out_48986(self__.p__48984,self__.map__48985,self__.redirect_uri,meta48987__$1));
}));

(app.main.data.auth.logged_out_48986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48988){
var self__ = this;
var _48988__$1 = this;
return self__.meta48987;
}));

(app.main.data.auth.logged_out_48986.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.logged_out_48986.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.select_keys(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"session-id","session-id",-1147060351),new cljs.core.Keyword(null,"history","history",-247395220)], null));
}));

(app.main.data.auth.logged_out_48986.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.logged_out_48986.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.redirect_uri)){
return beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.of(app.main.router.nav_raw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"uri","uri",-774711847),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.redirect_uri)], 0))));
} else {
return beicon.v2.core.merge(beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.of(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"auth-login","auth-login",-1527817479)))),beicon.v2.core.of(app.main.data.websocket.finalize()));
}
}));

(app.main.data.auth.logged_out_48986.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.logged_out_48986.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.util.storage.user,cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));
}));
}

return (new app.main.data.auth.logged_out_48986(p__48984,map__48985__$1,redirect_uri,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.auth.logout = (function app$main$data$auth$logout(){
if((typeof app.main.data.auth.logout_48989 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.auth.logout_48989 = (function (meta48990){
this.meta48990 = meta48990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.auth.logout_48989.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.logout_48989.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.auth","logout","app.main.data.auth/logout",1269314021);
}));

(app.main.data.auth.logout_48989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48991,meta48990__$1){
var self__ = this;
var _48991__$1 = this;
return (new app.main.data.auth.logout_48989(meta48990__$1));
}));

(app.main.data.auth.logout_48989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48991){
var self__ = this;
var _48991__$1 = this;
return self__.meta48990;
}));

(app.main.data.auth.logout_48989.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.logout_48989.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(app.main.data.auth.logout_48989.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.logout_48989.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var profile_id = new cljs.core.Keyword(null,"profile-id","profile-id",1866572309).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.map(app.main.data.auth.logged_out,beicon.v2.core.mapcat((function (___$3){
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly(beicon.v2.core.of(null)),beicon.v2.core.delay_at_least((300),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logout","logout",1418564329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"profile-id","profile-id",1866572309),profile_id], null))));
}),beicon.v2.core.take((1),beicon.v2.core.interval((500)))));
}));
}

return (new app.main.data.auth.logout_48989(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.auth.schema_COLON_request_profile_recovery = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"request-profile-recovery",new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword("app.common.schema","email","app.common.schema/email",2070921211)], null)], null);
app.main.data.auth.request_profile_recovery = (function app$main$data$auth$request_profile_recovery(data){
if(cljs.core.truth_(app.common.schema.check(app.main.data.auth.schema_COLON_request_profile_recovery,data))){
} else {
throw (new Error("Assert failed: (sm/check schema:request-profile-recovery data)"));
}

if((typeof app.main.data.auth.request_profile_recovery_48992 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.auth.request_profile_recovery_48992 = (function (data,meta48993){
this.data = data;
this.meta48993 = meta48993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.auth.request_profile_recovery_48992.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.request_profile_recovery_48992.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.auth","request-profile-recovery","app.main.data.auth/request-profile-recovery",197070156);
}));

(app.main.data.auth.request_profile_recovery_48992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48994,meta48993__$1){
var self__ = this;
var _48994__$1 = this;
return (new app.main.data.auth.request_profile_recovery_48992(self__.data,meta48993__$1));
}));

(app.main.data.auth.request_profile_recovery_48992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48994){
var self__ = this;
var _48994__$1 = this;
return self__.meta48993;
}));

(app.main.data.auth.request_profile_recovery_48992.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.request_profile_recovery_48992.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__48998 = cljs.core.meta(self__.data);
var map__48998__$1 = cljs.core.__destructure_map(map__48998);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48998__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48998__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"request-profile-recovery","request-profile-recovery",-1226574152),self__.data)));
}));
}

return (new app.main.data.auth.request_profile_recovery_48992(data,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.auth.schema_COLON_recover_profile = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"recover-profile",new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
app.main.data.auth.recover_profile = (function app$main$data$auth$recover_profile(data){
if(cljs.core.truth_(app.common.schema.check(app.main.data.auth.schema_COLON_recover_profile,data))){
} else {
throw (new Error("Assert failed: (sm/check schema:recover-profile data)"));
}

if((typeof app.main.data.auth.recover_profile_48999 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.auth.recover_profile_48999 = (function (data,meta49000){
this.data = data;
this.meta49000 = meta49000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.auth.recover_profile_48999.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.recover_profile_48999.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.auth","recover-profile","app.main.data.auth/recover-profile",839157794);
}));

(app.main.data.auth.recover_profile_48999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49001,meta49000__$1){
var self__ = this;
var _49001__$1 = this;
return (new app.main.data.auth.recover_profile_48999(self__.data,meta49000__$1));
}));

(app.main.data.auth.recover_profile_48999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49001){
var self__ = this;
var _49001__$1 = this;
return self__.meta49000;
}));

(app.main.data.auth.recover_profile_48999.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.recover_profile_48999.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__49002 = cljs.core.meta(self__.data);
var map__49002__$1 = cljs.core.__destructure_map(map__49002);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49002__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49002__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recover-profile","recover-profile",627730638),self__.data)));
}));
}

return (new app.main.data.auth.recover_profile_48999(data,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.auth.create_demo_profile = (function app$main$data$auth$create_demo_profile(){
if((typeof app.main.data.auth.create_demo_profile_49003 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.auth.create_demo_profile_49003 = (function (meta49004){
this.meta49004 = meta49004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.auth.create_demo_profile_49003.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.create_demo_profile_49003.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.auth","create-demo-profile","app.main.data.auth/create-demo-profile",1415198086);
}));

(app.main.data.auth.create_demo_profile_49003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49005,meta49004__$1){
var self__ = this;
var _49005__$1 = this;
return (new app.main.data.auth.create_demo_profile_49003(meta49004__$1));
}));

(app.main.data.auth.create_demo_profile_49003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49005){
var self__ = this;
var _49005__$1 = this;
return self__.meta49004;
}));

(app.main.data.auth.create_demo_profile_49003.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.create_demo_profile_49003.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.map(app.main.data.auth.login,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-demo-profile","create-demo-profile",1091998858),cljs.core.PersistentArrayMap.EMPTY));
}));
}

return (new app.main.data.auth.create_demo_profile_49003(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * A helper event that interprets the OIDC redirect errors on the URI
 *   and shows an appropriate error message using the notification
 *   banners.
 */
app.main.data.auth.show_redirect_error = (function app$main$data$auth$show_redirect_error(error){
if((typeof app.main.data.auth.show_redirect_error_49008 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.auth.show_redirect_error_49008 = (function (error,meta49009){
this.error = error;
this.meta49009 = meta49009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.auth.show_redirect_error_49008.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.show_redirect_error_49008.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.auth","show-redirect-error","app.main.data.auth/show-redirect-error",-1078266261);
}));

(app.main.data.auth.show_redirect_error_49008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49010,meta49009__$1){
var self__ = this;
var _49010__$1 = this;
return (new app.main.data.auth.show_redirect_error_49008(self__.error,meta49009__$1));
}));

(app.main.data.auth.show_redirect_error_49008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49010){
var self__ = this;
var _49010__$1 = this;
return self__.meta49009;
}));

(app.main.data.auth.show_redirect_error_49008.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.auth.show_redirect_error_49008.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var temp__5825__auto__ = (function (){var G__49023 = self__.error;
switch (G__49023) {
case "registration-disabled":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.registration-disabled");

break;
case "profile-blocked":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.profile-blocked");

break;
case "auth-provider-not-allowed":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.auth-provider-not-allowed");

break;
case "email-domain-not-allowed":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.email-domain-not-allowed");

break;
case "unable-to-auth":
return null;

break;
default:
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.generic");

}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var hint = temp__5825__auto__;
return beicon.v2.core.of(app.main.data.notifications.warn.cljs$core$IFn$_invoke$arity$1(hint));
} else {
return null;
}
}));
}

return (new app.main.data.auth.show_redirect_error_49008(error,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.auth.js.map
