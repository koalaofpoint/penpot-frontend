import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.uri.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.data.team.js";
import "./app.main.errors.js";
import "./app.main.repo.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.util.storage.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.ui.routes');
app.main.ui.routes.routes = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/auth",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/login",new cljs.core.Keyword(null,"auth-login","auth-login",-1527817479)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/register",new cljs.core.Keyword(null,"auth-register","auth-register",826284239)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/register/validate",new cljs.core.Keyword(null,"auth-register-validate","auth-register-validate",1333056214)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/register/success",new cljs.core.Keyword(null,"auth-register-success","auth-register-success",-965924859)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/recovery/request",new cljs.core.Keyword(null,"auth-recovery-request","auth-recovery-request",206791454)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/recovery",new cljs.core.Keyword(null,"auth-recovery","auth-recovery",-1821305124)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/verify-token",new cljs.core.Keyword(null,"auth-verify-token","auth-verify-token",-675769474)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/settings",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/profile",new cljs.core.Keyword(null,"settings-profile","settings-profile",-520294200)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/password",new cljs.core.Keyword(null,"settings-password","settings-password",-1747755582)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/feedback",new cljs.core.Keyword(null,"settings-feedback","settings-feedback",-1884878904)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/options",new cljs.core.Keyword(null,"settings-options","settings-options",1577810826)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/subscriptions",new cljs.core.Keyword(null,"settings-subscription","settings-subscription",11670706)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/access-tokens",new cljs.core.Keyword(null,"settings-access-tokens","settings-access-tokens",-527363437)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/notifications",new cljs.core.Keyword(null,"settings-notifications","settings-notifications",-990272802)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/frame-preview",new cljs.core.Keyword(null,"frame-preview","frame-preview",1876875008)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/view",new cljs.core.Keyword(null,"viewer","viewer",-783949853)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/view/:file-id",new cljs.core.Keyword(null,"viewer-legacy","viewer-legacy",-1892502654)], null),(cljs.core.truth_(cljs.core._STAR_assert_STAR_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/debug/icons-preview",new cljs.core.Keyword(null,"debug-icons-preview","debug-icons-preview",-444662807)], null):null),(cljs.core.truth_(cljs.core._STAR_assert_STAR_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/debug/playground",new cljs.core.Keyword(null,"debug-playground","debug-playground",371173136)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/render-sprite/:file-id",new cljs.core.Keyword(null,"render-sprite","render-sprite",463778943)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/dashboard",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/members",new cljs.core.Keyword(null,"dashboard-members","dashboard-members",726788044)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/invitations",new cljs.core.Keyword(null,"dashboard-invitations","dashboard-invitations",-357467805)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/webhooks",new cljs.core.Keyword(null,"dashboard-webhooks","dashboard-webhooks",-1830316512)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/settings",new cljs.core.Keyword(null,"dashboard-settings","dashboard-settings",1232740502)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/recent",new cljs.core.Keyword(null,"dashboard-recent","dashboard-recent",-1541043167)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/search",new cljs.core.Keyword(null,"dashboard-search","dashboard-search",-644447359)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/fonts",new cljs.core.Keyword(null,"dashboard-fonts","dashboard-fonts",-1313435498)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/fonts/providers",new cljs.core.Keyword(null,"dashboard-font-providers","dashboard-font-providers",-593422352)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/libraries",new cljs.core.Keyword(null,"dashboard-libraries","dashboard-libraries",-1057436771)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/files",new cljs.core.Keyword(null,"dashboard-files","dashboard-files",-1779590854)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/deleted",new cljs.core.Keyword(null,"dashboard-deleted","dashboard-deleted",-551384632)], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/dashboard/team/:team-id",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/members",new cljs.core.Keyword(null,"dashboard-legacy-team-members","dashboard-legacy-team-members",-659515913)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/invitations",new cljs.core.Keyword(null,"dashboard-legacy-team-invitations","dashboard-legacy-team-invitations",464259896)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/webhooks",new cljs.core.Keyword(null,"dashboard-legacy-team-webhooks","dashboard-legacy-team-webhooks",-1694314662)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/settings",new cljs.core.Keyword(null,"dashboard-legacy-team-settings","dashboard-legacy-team-settings",1266059192)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/projects",new cljs.core.Keyword(null,"dashboard-legacy-projects","dashboard-legacy-projects",-834288049)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/search",new cljs.core.Keyword(null,"dashboard-legacy-search","dashboard-legacy-search",1431918022)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/fonts",new cljs.core.Keyword(null,"dashboard-legacy-fonts","dashboard-legacy-fonts",-1082225854)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/fonts/providers",new cljs.core.Keyword(null,"dashboard-legacy-font-providers","dashboard-legacy-font-providers",192867763)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/libraries",new cljs.core.Keyword(null,"dashboard-legacy-libraries","dashboard-legacy-libraries",-1600130587)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/projects/:project-id",new cljs.core.Keyword(null,"dashboard-legacy-files","dashboard-legacy-files",-547738017)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/workspace",new cljs.core.Keyword(null,"workspace","workspace",-1096735709)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/workspace/:project-id/:file-id",new cljs.core.Keyword(null,"workspace-legacy","workspace-legacy",104522706)], null)], null);
app.main.ui.routes.store_session_params = (function app$main$ui$routes$store_session_params(p__58866){
var map__58867 = p__58866;
var map__58867__$1 = cljs.core.__destructure_map(map__58867);
var template = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58867__$1,new cljs.core.Keyword(null,"template","template",-702405684));
var plugin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58867__$1,new cljs.core.Keyword(null,"plugin","plugin",-1688841923));
var _STAR_sync_STAR__orig_val__58868 = app.util.storage._STAR_sync_STAR_;
var _STAR_sync_STAR__temp_val__58869 = true;
(app.util.storage._STAR_sync_STAR_ = _STAR_sync_STAR__temp_val__58869);

try{if((!((template == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.storage.session,cljs.core.assoc,new cljs.core.Keyword(null,"template","template",-702405684),template);
} else {
}

if((!((plugin == null)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.storage.session,cljs.core.assoc,new cljs.core.Keyword(null,"plugin-url","plugin-url",1542869449),plugin);
} else {
return null;
}
}finally {(app.util.storage._STAR_sync_STAR_ = _STAR_sync_STAR__orig_val__58868);
}});
app.main.ui.routes.on_navigate = (function app$main$ui$routes$on_navigate(router,path,send_event_info_QMARK_){
var location__$1 = document.location;
var vec__58870 = cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(path,"?");
var base_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58870,(0),null);
var qs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58870,(1),null);
var valid_location_QMARK_ = cuerdas.core.starts_with_QMARK_(""+(app.config.public_uri ?? ""),location__$1.origin);
var match = app.main.router.match(router,path);
var empty_path_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_path,"")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_path,"/")));
var query_params = app.common.uri.query_string__GT_map(qs);
if((!(valid_location_QMARK_))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.assign_exception(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null)));
} else {
if((!((match == null)))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.navigated(match,send_event_info_QMARK_));
} else {
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((function (p__58873){
var map__58874 = p__58873;
var map__58874__$1 = cljs.core.__destructure_map(map__58874);
var profile = map__58874__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58874__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var teams = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58874__$1,new cljs.core.Keyword("app.main.ui.routes","teams","app.main.ui.routes/teams",-1977218830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,app.common.uuid.zero)){
app.main.ui.routes.store_session_params(query_params);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"auth-login","auth-login",-1527817479)));
} else {
if(empty_path_QMARK_){
var team_id = app.main.data.team.get_last_team_id();
if(cljs.core.contains_QMARK_(teams,team_id)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dashboard-recent","dashboard-recent",-1541043167),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_params,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dashboard-recent","dashboard-recent",-1541043167),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_params,new cljs.core.Keyword(null,"team-id","team-id",-14505725),new cljs.core.Keyword(null,"default-team-id","default-team-id",1198639706).cljs$core$IFn$_invoke$arity$1(profile))));
}
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.assign_exception(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null)));

}
}
}),(function (cause){
return app.main.errors.on_error(cause);
}),beicon.v2.core.mapcat((function (profile){
return beicon.v2.core.map((function (teams){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(profile,new cljs.core.Keyword("app.main.ui.routes","teams","app.main.ui.routes/teams",-1977218830),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),teams));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-teams","get-teams",-760955609),cljs.core.PersistentArrayMap.EMPTY));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"get-profile","get-profile",1713676914))));

}
}
});
app.main.ui.routes.init_routes = (function app$main$ui$routes$init_routes(){
if((typeof app.main.ui.routes.init_routes_58875 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.ui.routes.init_routes_58875 = (function (meta58876){
this.meta58876 = meta58876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.ui.routes.init_routes_58875.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.ui.routes.init_routes_58875.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.ui.routes","init-routes","app.main.ui.routes/init-routes",601316191);
}));

(app.main.ui.routes.init_routes_58875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58877,meta58876__$1){
var self__ = this;
var _58877__$1 = this;
return (new app.main.ui.routes.init_routes_58875(meta58876__$1));
}));

(app.main.ui.routes.init_routes_58875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58877){
var self__ = this;
var _58877__$1 = this;
return self__.meta58876;
}));

(app.main.ui.routes.init_routes_58875.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.ui.routes.init_routes_58875.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.router.initialize_router(app.main.ui.routes.routes),app.main.router.initialize_history(app.main.ui.routes.on_navigate));
}));
}

return (new app.main.ui.routes.init_routes_58875(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.ui.routes.js.map
