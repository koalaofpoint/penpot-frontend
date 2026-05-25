import "./cljs_env.js";
import "./cljs.core.js";
import "./app.config.js";
import "./app.main.data.auth.js";
import "./app.main.data.common.js";
import "./app.main.data.notifications.js";
import "./app.main.data.profile.js";
import "./app.main.repo.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.main.ui.ds.product.loader.js";
import "./app.main.ui.static.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.timers.js";
import "./beicon.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.auth.verify_token');
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.ui !== 'undefined') && (typeof app.main.ui.auth !== 'undefined') && (typeof app.main.ui.auth.verify_token !== 'undefined') && (typeof app.main.ui.auth.verify_token.handle_token !== 'undefined')){
} else {
app.main.ui.auth.verify_token.handle_token = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__58603 = cljs.core.get_global_hierarchy;
return (fexpr__58603.cljs$core$IFn$_invoke$arity$0 ? fexpr__58603.cljs$core$IFn$_invoke$arity$0() : fexpr__58603.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.main.ui.auth.verify-token","handle-token"),(function (token){
return new cljs.core.Keyword(null,"iss","iss",1130086696).cljs$core$IFn$_invoke$arity$1(token);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
app.main.ui.auth.verify_token.handle_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"verify-email","verify-email",464870696),(function (data){
app.config.external_notify_register_success(new cljs.core.Keyword(null,"profile-id","profile-id",1866572309).cljs$core$IFn$_invoke$arity$1(data));

var msg = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.notifications.email-verified-successfully");
app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((1000),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(msg));
}));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.auth.login_from_token(data));
}));
app.main.ui.auth.verify_token.handle_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"change-email","change-email",-1066380073),(function (_data){
var msg = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.notifications.email-changed-successfully");
app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((100),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(msg));
}));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"settings-profile","settings-profile",-520294200)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.profile.refresh_profile()], 0));
}));
app.main.ui.auth.verify_token.handle_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"auth","auth",1389754926),(function (tdata){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.auth.login_from_token(tdata));
}));
app.main.ui.auth.verify_token.handle_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"team-invitation","team-invitation",672622666),(function (tdata){
var G__58604 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(tdata);
var G__58604__$1 = (((G__58604 instanceof cljs.core.Keyword))?G__58604.fqn:null);
switch (G__58604__$1) {
case "created":
var team_id = new cljs.core.Keyword(null,"team-id","team-id",-14505725).cljs$core$IFn$_invoke$arity$1(tdata);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.notifications.team-invitation-accepted")),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.profile.refresh_profile(),app.main.data.common.go_to_dashboard_recent.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], 0))], 0));

break;
case "pending":
var token = new cljs.core.Keyword(null,"invitation-token","invitation-token",-310125311).cljs$core$IFn$_invoke$arity$1(tdata);
var route_id = new cljs.core.Keyword(null,"redirect-to","redirect-to",-1381988340).cljs$core$IFn$_invoke$arity$2(tdata,new cljs.core.Keyword(null,"auth-register","auth-register",826284239));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(route_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invitation-token","invitation-token",-310125311),token], null)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58604__$1)].join('')));

}
}));
app.main.ui.auth.verify_token.handle_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_tdata){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"auth-login","auth-login",-1527817479)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.notifications.warn.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.unexpected-token"))], 0));
}));
app.main.ui.auth.verify_token.verify_token_STAR_ = (function app$main$ui$auth$verify_token$verify_token_STAR_(props_58605){
var route = props_58605.route;
var token = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"token","token",-1211463215)], null));
var bad_token = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
app.util.dom.set_html_title(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("title.default"));

return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((function (tdata){
return app.main.ui.auth.verify_token.handle_token.cljs$core$IFn$_invoke$arity$1(tdata);
}),(function (cause){
var map__58606 = cljs.core.ex_data(cause);
var map__58606__$1 = cljs.core.__destructure_map(map__58606);
var error = map__58606__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58606__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58606__$1,new cljs.core.Keyword(null,"code","code",1586293142));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"validation","validation",-2141396518),type)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid-token","invalid-token",2042664034),code)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token-expired","token-expired",-312857642),new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(error))))))){
return cljs.core.reset_BANG_(bad_token,true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"email-already-exists","email-already-exists",-516776612),code)){
var msg = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.email-already-exists");
app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((100),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(msg));
}));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"auth-login","auth-login",-1527817479)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"email-already-validated","email-already-validated",-1757263672),code)){
var msg = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.email-already-validated");
app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((100),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.warn.cljs$core$IFn$_invoke$arity$1(msg));
}));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"auth-login","auth-login",-1527817479)));
} else {
var msg = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.generic");
app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((100),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(msg));
}));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"auth-login","auth-login",-1527817479)));

}
}
}
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"verify-token","verify-token",1740891189),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token","token",-1211463215),token], null)));
}));

if(cljs.core.truth_(cljs.core.deref(bad_token))){
return rumext.v2.jsx(app.main.ui.static$.invalid_token,{});
} else {
return rumext.v2.jsx(app.main.ui.ds.product.loader.loader_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.loading"),'overlay':true});
}
});

(app.main.ui.auth.verify_token.verify_token_STAR_.displayName = "verify-token*");

app.main.ui.auth.verify_token.verify_token_page_STAR_ = (function app$main$ui$auth$verify_token$verify_token_page_STAR_(props_58607){
var props = props_58607;
return rumext.v2.create_element(app.main.ui.auth.verify_token.verify_token_STAR_,props);
});

(app.main.ui.auth.verify_token.verify_token_page_STAR_.displayName = "verify-token-page*");


//# sourceMappingURL=app.main.ui.auth.verify_token.js.map
