import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.record.js";
import "./app.config.js";
import "./app.plugins.format.js";
import "./app.plugins.utils.js";
import "./app.util.object.js";
goog.provide('app.plugins.user');

/**
* @constructor
*/
app.plugins.user.CurrentUserProxy = (function ($plugin){
this.$plugin = $plugin;
});

(app.plugins.user.CurrentUserProxy.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$plugin","$plugin",-1940699666,null)], null);
}));

(app.plugins.user.CurrentUserProxy.cljs$lang$type = true);

(app.plugins.user.CurrentUserProxy.cljs$lang$ctorStr = "app.plugins.user/CurrentUserProxy");

(app.plugins.user.CurrentUserProxy.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.plugins.user/CurrentUserProxy");
}));

/**
 * Positional factory function for app.plugins.user/CurrentUserProxy.
 */
app.plugins.user.__GT_CurrentUserProxy = (function app$plugins$user$__GT_CurrentUserProxy($plugin){
return (new app.plugins.user.CurrentUserProxy($plugin));
});


/**
* @constructor
*/
app.plugins.user.ActiveUserProxy = (function ($plugin){
this.$plugin = $plugin;
});

(app.plugins.user.ActiveUserProxy.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$plugin","$plugin",-1940699666,null)], null);
}));

(app.plugins.user.ActiveUserProxy.cljs$lang$type = true);

(app.plugins.user.ActiveUserProxy.cljs$lang$ctorStr = "app.plugins.user/ActiveUserProxy");

(app.plugins.user.ActiveUserProxy.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.plugins.user/ActiveUserProxy");
}));

/**
 * Positional factory function for app.plugins.user/ActiveUserProxy.
 */
app.plugins.user.__GT_ActiveUserProxy = (function app$plugins$user$__GT_ActiveUserProxy($plugin){
return (new app.plugins.user.ActiveUserProxy($plugin));
});


/**
* @constructor
*/
app.plugins.user.UserProxy = (function ($plugin){
this.$plugin = $plugin;
});

(app.plugins.user.UserProxy.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$plugin","$plugin",-1940699666,null)], null);
}));

(app.plugins.user.UserProxy.cljs$lang$type = true);

(app.plugins.user.UserProxy.cljs$lang$ctorStr = "app.plugins.user/UserProxy");

(app.plugins.user.UserProxy.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.plugins.user/UserProxy");
}));

/**
 * Positional factory function for app.plugins.user/UserProxy.
 */
app.plugins.user.__GT_UserProxy = (function app$plugins$user$__GT_UserProxy($plugin){
return (new app.plugins.user.UserProxy($plugin));
});

app.plugins.user.add_session_properties = (function app$plugins$user$add_session_properties(user_proxy,session_id){
var target85068 = user_proxy;
var get_fn85065_85311 = cljs.core.constantly(session_id);
var set_fn85066_85312 = null;
Object.defineProperty(target85068,"$session",(function (){var obj85070 = ({"enumerable":false,"get":(function (){
var this85067 = this;
return (get_fn85065_85311.cljs$core$IFn$_invoke$arity$1 ? get_fn85065_85311.cljs$core$IFn$_invoke$arity$1(this85067) : get_fn85065_85311.call(null,this85067));
})});
return obj85070;
})());

var get_fn85065_85313 = (function (_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.locate_profile(session_id)));
});
var set_fn85066_85314 = null;
Object.defineProperty(target85068,"id",(function (){var obj85072 = ({"enumerable":true,"get":(function (){
var this85067 = this;
return get_fn85065_85313(this85067);
})});
return obj85072;
})());

var get_fn85065_85315 = (function (_){
return new cljs.core.Keyword(null,"fullname","fullname",1638772587).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.locate_profile(session_id));
});
var set_fn85066_85316 = null;
Object.defineProperty(target85068,"name",(function (){var obj85074 = ({"enumerable":true,"get":(function (){
var this85067 = this;
return get_fn85065_85315(this85067);
})});
return obj85074;
})());

var get_fn85065_85317 = (function (_){
return app.config.resolve_profile_photo_url(app.plugins.utils.locate_profile(session_id));
});
var set_fn85066_85318 = null;
Object.defineProperty(target85068,"avatarUrl",(function (){var obj85076 = ({"enumerable":true,"get":(function (){
var this85067 = this;
return get_fn85065_85317(this85067);
})});
return obj85076;
})());

var get_fn85065_85319 = (function (_){
return new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.locate_presence(session_id));
});
var set_fn85066_85320 = null;
Object.defineProperty(target85068,"color",(function (){var obj85079 = ({"enumerable":true,"get":(function (){
var this85067 = this;
return get_fn85065_85319(this85067);
})});
return obj85079;
})());

var get_fn85065_85321 = (function (_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(session_id);
});
var set_fn85066_85322 = null;
Object.defineProperty(target85068,"sessionId",(function (){var obj85083 = ({"enumerable":true,"get":(function (){
var this85067 = this;
return get_fn85065_85321(this85067);
})});
return obj85083;
})());

return target85068;
});
app.plugins.user.current_user_proxy_QMARK_ = (function app$plugins$user$current_user_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"CurrentUserProxy");
});
app.plugins.user.current_user_proxy = (function app$plugins$user$current_user_proxy(plugin_id,session_id){
return app.plugins.user.add_session_properties((function (){var obj_85088 = ({});
var to_string_85087 = (function (){
return "CurrentUserProxy";
});
var obj_85088_target_85092_85323 = obj_85088;
var prop_get_fn__85100_85324 = (function (){
var obj_85088_this_85091 = this;
var internal_fn__85094 = to_string_85087;
return internal_fn__85094.call(obj_85088_this_85091);
});
var prop_get_fn__85107_85325 = (function (){
var obj_85088_this_85091 = this;
var internal_fn__85101 = to_string_85087;
return internal_fn__85101.call(obj_85088_this_85091);
});
var prop_get_fn_plugin_85114_85326 = (function (){
var obj_85088_this_85091 = this;
var internal_fn_plugin_85108 = (function (){
return plugin_id;
});
return internal_fn_plugin_85108.call(obj_85088_this_85091);
});
Object.defineProperty(obj_85088_target_85092_85323,Symbol.toStringTag,(function (){var obj85118 = ({"enumerable":false,"get":prop_get_fn__85100_85324});
return obj85118;
})());

Object.defineProperty(obj_85088_target_85092_85323,Symbol["for"]("penpot.reify:type"),(function (){var obj85122 = ({"enumerable":false,"get":prop_get_fn__85107_85325});
return obj85122;
})());

Object.defineProperty(obj_85088_target_85092_85323,"$plugin",(function (){var obj85124 = ({"enumerable":false,"get":prop_get_fn_plugin_85114_85326});
return obj85124;
})());


return obj_85088;
})(),session_id);
});
app.plugins.user.active_user_proxy_QMARK_ = (function app$plugins$user$active_user_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"ActiveUserProxy");
});
app.plugins.user.active_user_proxy = (function app$plugins$user$active_user_proxy(plugin_id,session_id){
return app.plugins.user.add_session_properties((function (){var obj_85211 = ({});
var to_string_85209 = (function (){
return "ActiveUserProxy";
});
var obj_85211_target_85220_85327 = obj_85211;
var prop_get_fn__85228_85328 = (function (){
var obj_85211_this_85219 = this;
var internal_fn__85222 = to_string_85209;
return internal_fn__85222.call(obj_85211_this_85219);
});
var prop_get_fn__85235_85329 = (function (){
var obj_85211_this_85219 = this;
var internal_fn__85229 = to_string_85209;
return internal_fn__85229.call(obj_85211_this_85219);
});
var prop_get_fn_plugin_85242_85330 = (function (){
var obj_85211_this_85219 = this;
var internal_fn_plugin_85236 = (function (){
return plugin_id;
});
return internal_fn_plugin_85236.call(obj_85211_this_85219);
});
var prop_get_fn_position_85249_85331 = (function (){
var obj_85211_this_85219 = this;
var internal_fn_position_85243 = (function (){
return app.plugins.format.format_point(new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.locate_presence(session_id)));
});
return internal_fn_position_85243.call(obj_85211_this_85219);
});
var prop_get_fn_zoom_85256_85332 = (function (){
var obj_85211_this_85219 = this;
var internal_fn_zoom_85250 = (function (){
return new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.locate_presence(session_id));
});
return internal_fn_zoom_85250.call(obj_85211_this_85219);
});
Object.defineProperty(obj_85211_target_85220_85327,Symbol.toStringTag,(function (){var obj85258 = ({"enumerable":false,"get":prop_get_fn__85228_85328});
return obj85258;
})());

Object.defineProperty(obj_85211_target_85220_85327,Symbol["for"]("penpot.reify:type"),(function (){var obj85260 = ({"enumerable":false,"get":prop_get_fn__85235_85329});
return obj85260;
})());

Object.defineProperty(obj_85211_target_85220_85327,"$plugin",(function (){var obj85262 = ({"enumerable":false,"get":prop_get_fn_plugin_85242_85330});
return obj85262;
})());

Object.defineProperty(obj_85211_target_85220_85327,"position",(function (){var obj85264 = ({"enumerable":true,"get":prop_get_fn_position_85249_85331});
return obj85264;
})());

Object.defineProperty(obj_85211_target_85220_85327,"zoom",(function (){var obj85266 = ({"enumerable":true,"get":prop_get_fn_zoom_85256_85332});
return obj85266;
})());


return obj_85211;
})(),session_id);
});
app.plugins.user.add_user_properties = (function app$plugins$user$add_user_properties(user_proxy,data){
var target85270 = user_proxy;
var get_fn85267_85333 = (function (_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data));
});
var set_fn85268_85334 = null;
Object.defineProperty(target85270,"id",(function (){var obj85272 = ({"enumerable":true,"get":(function (){
var this85269 = this;
return get_fn85267_85333(this85269);
})});
return obj85272;
})());

var get_fn85267_85335 = (function (_){
return new cljs.core.Keyword(null,"fullname","fullname",1638772587).cljs$core$IFn$_invoke$arity$1(data);
});
var set_fn85268_85336 = null;
Object.defineProperty(target85270,"name",(function (){var obj85274 = ({"enumerable":true,"get":(function (){
var this85269 = this;
return get_fn85267_85335(this85269);
})});
return obj85274;
})());

var get_fn85267_85337 = (function (_){
return app.config.resolve_profile_photo_url(data);
});
var set_fn85268_85338 = null;
Object.defineProperty(target85270,"avatarUrl",(function (){var obj85276 = ({"enumerable":true,"get":(function (){
var this85269 = this;
return get_fn85267_85337(this85269);
})});
return obj85276;
})());

return target85270;
});
app.plugins.user.user_proxy = (function app$plugins$user$user_proxy(plugin_id,data){
return app.plugins.user.add_user_properties((function (){var obj_85278 = ({});
var to_string_85277 = (function (){
return "UserProxy";
});
var obj_85278_target_85282_85339 = obj_85278;
var prop_get_fn__85290_85340 = (function (){
var obj_85278_this_85281 = this;
var internal_fn__85284 = to_string_85277;
return internal_fn__85284.call(obj_85278_this_85281);
});
var prop_get_fn__85297_85341 = (function (){
var obj_85278_this_85281 = this;
var internal_fn__85291 = to_string_85277;
return internal_fn__85291.call(obj_85278_this_85281);
});
var prop_get_fn_plugin_85304_85342 = (function (){
var obj_85278_this_85281 = this;
var internal_fn_plugin_85298 = (function (){
return plugin_id;
});
return internal_fn_plugin_85298.call(obj_85278_this_85281);
});
Object.defineProperty(obj_85278_target_85282_85339,Symbol.toStringTag,(function (){var obj85306 = ({"enumerable":false,"get":prop_get_fn__85290_85340});
return obj85306;
})());

Object.defineProperty(obj_85278_target_85282_85339,Symbol["for"]("penpot.reify:type"),(function (){var obj85308 = ({"enumerable":false,"get":prop_get_fn__85297_85341});
return obj85308;
})());

Object.defineProperty(obj_85278_target_85282_85339,"$plugin",(function (){var obj85310 = ({"enumerable":false,"get":prop_get_fn_plugin_85304_85342});
return obj85310;
})());


return obj_85278;
})(),data);
});
app.plugins.user.user_proxy_QMARK_ = (function app$plugins$user$user_proxy_QMARK_(p){
return ((app.util.object.type_of_QMARK_(p,"UserProxy")) || (((app.plugins.user.current_user_proxy_QMARK_(p)) || (app.plugins.user.active_user_proxy_QMARK_(p)))));
});

//# sourceMappingURL=app.plugins.user.js.map
