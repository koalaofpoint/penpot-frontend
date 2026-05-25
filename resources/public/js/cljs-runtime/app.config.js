import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.flags.js";
import "./app.common.logging.js";
import "./app.common.time.js";
import "./app.common.uri.js";
import "./app.common.version.js";
import "./app.util.avatars.js";
import "./app.util.extends.js";
import "./app.util.globals.js";
import "./app.util.navigator.js";
import "./app.util.object.js";
import "./app.util.storage.js";
import "./app.util.timers.js";
import "./cuerdas.core.js";
goog.provide('app.config');
(cljs.core._STAR_assert_STAR_ = goog.DEBUG);
app.config.valid_browsers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"edge","edge",919909153),null,new cljs.core.Keyword(null,"safari","safari",497115653),null,new cljs.core.Keyword(null,"safari-16","safari-16",-2098723899),null,new cljs.core.Keyword(null,"other","other",995793544),null,new cljs.core.Keyword(null,"firefox","firefox",1283768880),null,new cljs.core.Keyword(null,"chrome","chrome",1718738387),null,new cljs.core.Keyword(null,"safari-17","safari-17",412083955),null], null), null);
app.config.valid_platforms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"macos","macos",-1712303293),null,new cljs.core.Keyword(null,"windows","windows",2068861701),null,new cljs.core.Keyword(null,"other","other",995793544),null,new cljs.core.Keyword(null,"linux","linux",-238042662),null], null), null);
app.config.parse_browser = (function app$config$parse_browser(){
var user_agent = cuerdas.core.lower(app.util.navigator.get_user_agent());
var check_chrome_QMARK_ = (function (){
return cuerdas.core.includes_QMARK_(user_agent,"chrom");
});
var check_firefox_QMARK_ = (function (){
return cuerdas.core.includes_QMARK_(user_agent,"firefox");
});
var check_edge_QMARK_ = (function (){
return cuerdas.core.includes_QMARK_(user_agent,"edg");
});
var check_safari_QMARK_ = (function (){
return cuerdas.core.includes_QMARK_(user_agent,"safari");
});
var check_safari_16_QMARK_ = (function (){
var and__5023__auto__ = check_safari_QMARK_();
if(cljs.core.truth_(and__5023__auto__)){
return cuerdas.core.includes_QMARK_(user_agent,"version/16");
} else {
return and__5023__auto__;
}
});
var check_safari_17_QMARK_ = (function (){
var and__5023__auto__ = check_safari_QMARK_();
if(cljs.core.truth_(and__5023__auto__)){
return cuerdas.core.includes_QMARK_(user_agent,"version/17");
} else {
return and__5023__auto__;
}
});
if(check_edge_QMARK_()){
return new cljs.core.Keyword(null,"edge","edge",919909153);
} else {
if(check_chrome_QMARK_()){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(check_firefox_QMARK_()){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(check_safari_16_QMARK_()){
return new cljs.core.Keyword(null,"safari-16","safari-16",-2098723899);
} else {
if(check_safari_17_QMARK_()){
return new cljs.core.Keyword(null,"safari-17","safari-17",412083955);
} else {
if(check_safari_QMARK_()){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
return new cljs.core.Keyword(null,"other","other",995793544);

}
}
}
}
}
}
});
app.config.parse_platform = (function app$config$parse_platform(){
var user_agent = cuerdas.core.lower(app.util.navigator.get_user_agent());
var check_windows_QMARK_ = (function (){
return cuerdas.core.includes_QMARK_(user_agent,"windows");
});
var check_linux_QMARK_ = (function (){
return cuerdas.core.includes_QMARK_(user_agent,"linux");
});
var check_macos_QMARK_ = (function (){
return cuerdas.core.includes_QMARK_(user_agent,"mac os");
});
if(check_windows_QMARK_()){
return new cljs.core.Keyword(null,"windows","windows",2068861701);
} else {
if(check_linux_QMARK_()){
return new cljs.core.Keyword(null,"linux","linux",-238042662);
} else {
if(check_macos_QMARK_()){
return new cljs.core.Keyword(null,"macos","macos",-1712303293);
} else {
return new cljs.core.Keyword(null,"other","other",995793544);

}
}
}
});
app.config.parse_target = (function app$config$parse_target(global){
if((!((app.util.object.get.cljs$core$IFn$_invoke$arity$2(global,"document") == null)))){
return new cljs.core.Keyword(null,"browser","browser",828191719);
} else {
return new cljs.core.Keyword(null,"webworker","webworker",-1436600668);
}
});
app.config.parse_flags = (function app$config$parse_flags(global){
var flags = app.util.object.get.cljs$core$IFn$_invoke$arity$3(global,"penpotFlags","");
var flags__$1 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword),cuerdas.core.words.cljs$core$IFn$_invoke$arity$1(flags));
return app.common.flags.parse.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.flags.default$,flags__$1], 0));
});
app.config.parse_version = (function app$config$parse_version(global){
return app.common.version.parse(app.util.object.get.cljs$core$IFn$_invoke$arity$2(global,"penpotVersion"));
});
app.config.parse_build_date = (function app$config$parse_build_date(global){
var date = app.util.object.get.cljs$core$IFn$_invoke$arity$2(global,"penpotBuildDate");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(date,"%buildDate%")){
return "unknown";
} else {
return date;
}
});
/**
 * @define {string}
 */
app.config.compiled_version_tag = goog.define("app.config.compiled_version_tag","develop");
app.config.default_theme = "default";
app.config.default_language = "en";
app.config.themes = app.util.object.get.cljs$core$IFn$_invoke$arity$2(app.util.globals.global,"penpotThemes");
app.config.build_date = app.config.parse_build_date(app.util.globals.global);
app.config.flags = app.config.parse_flags(app.util.globals.global);
app.config.target = app.config.parse_target(app.util.globals.global);
app.config.browser = app.config.parse_browser();
app.config.platform = app.config.parse_platform();
app.config.version = app.config.parse_version(app.util.globals.global);
app.config.version_tag = app.util.object.get.cljs$core$IFn$_invoke$arity$2(app.util.globals.global,"penpotVersionTag");
/**
 * Returns true when the compiled JS was built with a different version
 *   tag than the one present in the current index.html. This indicates
 *   the browser has cached JS from a previous deployment.
 */
app.config.stale_build_QMARK_ = (function app$config$stale_build_QMARK_(){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(app.config.compiled_version_tag,app.config.version_tag);
});
app.config.reload_storage_key = "penpot-last-reload-timestamp";
app.config.reload_cooldown_ms = (30000);
/**
 * Force a hard page reload unless one was already triggered within the
 *   last 30 seconds (tracked in sessionStorage). Returns true when a
 *   reload is initiated, false when suppressed.
 */
app.config.throttled_reload = (function app$config$throttled_reload(var_args){
var args__5755__auto__ = [];
var len__5749__auto___46389 = arguments.length;
var i__5750__auto___46390 = (0);
while(true){
if((i__5750__auto___46390 < len__5749__auto___46389)){
args__5755__auto__.push((arguments[i__5750__auto___46390]));

var G__46391 = (i__5750__auto___46390 + (1));
i__5750__auto___46390 = G__46391;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.config.throttled_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.config.throttled_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__46350){
var map__46351 = p__46350;
var map__46351__$1 = cljs.core.__destructure_map(map__46351);
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46351__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var now = app.common.time.now();
var prev_ts = app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$1(app.util.storage.get_item(app.util.storage.session_storage,app.config.reload_storage_key));
if((((!((prev_ts == null)))) && (((now - prev_ts) < app.config.reload_cooldown_ms)))){
if(app.common.logging.enabled_QMARK_("app.config",new cljs.core.Keyword(null,"warn","warn",-436710552))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"reload suppressed (cooldown active)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null)], null);
}),null)),null,null,"app.config",new cljs.core.Keyword(null,"warn","warn",-436710552),false);
} else {
}


return false;
} else {
if(app.common.logging.enabled_QMARK_("app.config",new cljs.core.Keyword(null,"warn","warn",-436710552))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"forcing page reload"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null)], null);
}),null)),null,null,"app.config",new cljs.core.Keyword(null,"warn","warn",-436710552),false);
} else {
}


app.util.storage.set_item(app.util.storage.session_storage,app.config.reload_storage_key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(now));

app.util.timers.asap((function (){
return app.util.globals.location.reload(true);
}));

return true;
}
}));

(app.config.throttled_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.config.throttled_reload.cljs$lang$applyTo = (function (seq46349){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46349));
}));

app.config.terms_of_service_uri = app.util.object.get.cljs$core$IFn$_invoke$arity$2(app.util.globals.global,"penpotTermsOfServiceURI");
app.config.privacy_policy_uri = app.util.object.get.cljs$core$IFn$_invoke$arity$2(app.util.globals.global,"penpotPrivacyPolicyURI");
app.config.flex_help_uri = app.util.object.get.cljs$core$IFn$_invoke$arity$3(app.util.globals.global,"penpotGridHelpURI","https://help.penpot.app/user-guide/flexible-layouts/");
app.config.grid_help_uri = app.util.object.get.cljs$core$IFn$_invoke$arity$3(app.util.globals.global,"penpotGridHelpURI","https://help.penpot.app/user-guide/flexible-layouts/");
app.config.plugins_list_uri = app.util.object.get.cljs$core$IFn$_invoke$arity$3(app.util.globals.global,"penpotPluginsListURI","https://penpot.app/penpothub/plugins");
app.config.plugins_whitelist = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,app.util.object.get.cljs$core$IFn$_invoke$arity$3(app.util.globals.global,"penpotPluginsWhitelist",cljs.core.PersistentVector.EMPTY));
app.config.templates_uri = app.util.object.get.cljs$core$IFn$_invoke$arity$3(app.util.globals.global,"penpotTemplatesURI","https://penpot.github.io/penpot-files/");
(app.common.flags._STAR_current_STAR_ = app.config.flags);
app.config.normalize_uri = (function app$config$normalize_uri(uri_str){
return app.common.uri.ensure_path_slash(uri_str);
});
app.config.public_uri = app.config.normalize_uri((function (){var or__5025__auto__ = app.util.object.get.cljs$core$IFn$_invoke$arity$2(app.util.globals.global,"penpotPublicURI");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.object.get.cljs$core$IFn$_invoke$arity$2(app.util.globals.location,"origin");
}
})());
app.config.rasterizer_uri = (function (){var or__5025__auto__ = (function (){var G__46355 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(app.util.globals.global,"penpotRasterizerURI");
if((G__46355 == null)){
return null;
} else {
return app.config.normalize_uri(G__46355);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.config.public_uri;
}
})();
app.config.worker_uri = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.public_uri,"js/worker/main.js"], 0)),new cljs.core.Keyword(null,"path","path",-188191168))),"?version=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.config.version_tag)].join('');
app.config.external_feature_flag = (function app$config$external_feature_flag(flag,value){
var f = app.util.object.get.cljs$core$IFn$_invoke$arity$2(app.util.globals.global,"externalFeatureFlag");
if(cljs.core.fn_QMARK_(f)){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(flag,value) : f.call(null,flag,value));
} else {
return null;
}
});
app.config.external_session_id = (function app$config$external_session_id(){
var f = app.util.object.get.cljs$core$IFn$_invoke$arity$2(app.util.globals.global,"externalSessionId");
if(cljs.core.fn_QMARK_(f)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
app.config.external_context_info = (function app$config$external_context_info(){
var f = app.util.object.get.cljs$core$IFn$_invoke$arity$2(app.util.globals.global,"externalContextInfo");
if(cljs.core.fn_QMARK_(f)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
app.config.external_notify_register_success = (function app$config$external_notify_register_success(profile_id){
var f = app.util.object.get.cljs$core$IFn$_invoke$arity$2(app.util.globals.global,"externalNotifyRegisterSuccess");
if(cljs.core.fn_QMARK_(f)){
var G__46359 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(profile_id);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46359) : f.call(null,G__46359));
} else {
return null;
}
});
app.config.initialize_external_context_info = (function app$config$initialize_external_context_info(){
var f = app.util.object.get.cljs$core$IFn$_invoke$arity$2(app.util.globals.global,"initializeExternalConfigInfo");
if(cljs.core.fn_QMARK_(f)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
app.config.check_browser_QMARK_ = (function app$config$check_browser_QMARK_(candidate){
app.common.data.macros.runtime_assert("expr assert: (contains? valid-browsers candidate)",(function (){
return cljs.core.contains_QMARK_(app.config.valid_browsers,candidate);
}));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(candidate,new cljs.core.Keyword(null,"safari","safari",497115653))){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"safari","safari",497115653),null,new cljs.core.Keyword(null,"safari-16","safari-16",-2098723899),null,new cljs.core.Keyword(null,"safari-17","safari-17",412083955),null], null), null),app.config.browser);
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(candidate,app.config.browser);
}
});
app.config.check_platform_QMARK_ = (function app$config$check_platform_QMARK_(candidate){
app.common.data.macros.runtime_assert("expr assert: (contains? valid-platforms candidate)",(function (){
return cljs.core.contains_QMARK_(app.config.valid_platforms,candidate);
}));

return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(candidate,app.config.platform);
});
app.config.resolve_profile_photo_url = (function app$config$resolve_profile_photo_url(p__46361){
var map__46362 = p__46361;
var map__46362__$1 = cljs.core.__destructure_map(map__46362);
var profile = map__46362__$1;
var photo_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46362__$1,new cljs.core.Keyword(null,"photo-id","photo-id",108052797));
var fullname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46362__$1,new cljs.core.Keyword(null,"fullname","fullname",1638772587));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46362__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46362__$1,new cljs.core.Keyword(null,"color","color",1011675173));
if((photo_id == null)){
return app.util.avatars.generate(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5025__auto__ = fullname;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return name;
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color], null));
} else {
return ""+(app.common.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.public_uri,"assets/by-id/",photo_id], 0)) ?? "");
}
});
app.config.resolve_team_photo_url = (function app$config$resolve_team_photo_url(p__46363){
var map__46364 = p__46363;
var map__46364__$1 = cljs.core.__destructure_map(map__46364);
var team = map__46364__$1;
var photo_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46364__$1,new cljs.core.Keyword(null,"photo-id","photo-id",108052797));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46364__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if((photo_id == null)){
return app.util.avatars.generate(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null));
} else {
return ""+(app.common.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.public_uri,"assets/by-id/",photo_id], 0)) ?? "");
}
});
app.config.resolve_media = (function app$config$resolve_media(id){
return ""+(app.common.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.public_uri,"assets/by-id/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], 0)) ?? "");
});
app.config.resolve_file_media = (function app$config$resolve_file_media(var_args){
var G__46368 = arguments.length;
switch (G__46368) {
case 1:
return app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1 = (function (media){
return app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$2(media,false);
}));

(app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$2 = (function (p__46369,thumbnail_QMARK_){
var map__46370 = p__46369;
var map__46370__$1 = cljs.core.__destructure_map(map__46370);
var media = map__46370__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46370__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var data_uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46370__$1,new cljs.core.Keyword(null,"data-uri","data-uri",1087820220));
var or__5025__auto__ = data_uri;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ""+((function (){var G__46371 = app.common.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.public_uri,"assets/by-file-media-id/"], 0));
var G__46371__$1 = ((thumbnail_QMARK_ === true)?app.common.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__46371,""+(id ?? "")+"/thumbnail"], 0)):G__46371);
if(thumbnail_QMARK_ === false){
return app.common.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__46371__$1,""+(id ?? "")], 0));
} else {
return G__46371__$1;
}
})() ?? "");
}
}));

(app.config.resolve_file_media.cljs$lang$maxFixedArity = 2);

app.config.resolve_href = (function app$config$resolve_href(resource){
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.uri.ensure_path_slash(app.config.public_uri),resource], 0)),new cljs.core.Keyword(null,"path","path",-188191168));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(href),"?version=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.config.version_tag)].join('');
});

//# sourceMappingURL=app.config.js.map
