import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.schema.js";
import "./app.common.types.profile.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.data.event.js";
import "./app.main.data.media.js";
import "./app.main.data.notifications.js";
import "./app.main.repo.js";
import "./app.main.router.js";
import "./app.plugins.register.js";
import "./app.util.http.js";
import "./app.util.i18n.js";
import "./app.util.storage.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.profile');
app.main.data.profile.check_profile = app.common.schema.check_fn(app.common.types.profile.schema_COLON_profile);
app.main.data.profile.is_authenticated_QMARK_ = (function app$main$data$profile$is_authenticated_QMARK_(p__37895){
var map__37896 = p__37895;
var map__37896__$1 = cljs.core.__destructure_map(map__37896);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37896__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return ((cljs.core.uuid_QMARK_(id)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,app.common.uuid.zero)));
});
/**
 * Initialize profile state, only logged-in profile data should be
 *   passed to this event
 */
app.main.data.profile.set_profile = (function app$main$data$profile$set_profile(p__37902){
var map__37904 = p__37902;
var map__37904__$1 = cljs.core.__destructure_map(map__37904);
var profile = map__37904__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37904__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if((typeof app.main.data.profile.set_profile_37905 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IDeref}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.set_profile_37905 = (function (p__37902,map__37904,profile,id,meta37906){
this.p__37902 = p__37902;
this.map__37904 = map__37904;
this.profile = profile;
this.id = id;
this.meta37906 = meta37906;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.set_profile_37905.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.set_profile_37905.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","set-profile","app.main.data.profile/set-profile",145925411);
}));

(app.main.data.profile.set_profile_37905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37907,meta37906__$1){
var self__ = this;
var _37907__$1 = this;
return (new app.main.data.profile.set_profile_37905(self__.p__37902,self__.map__37904,self__.profile,self__.id,meta37906__$1));
}));

(app.main.data.profile.set_profile_37905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37907){
var self__ = this;
var _37907__$1 = this;
return self__.meta37906;
}));

(app.main.data.profile.set_profile_37905.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.profile;
}));

(app.main.data.profile.set_profile_37905.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.set_profile_37905.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"profile-id","profile-id",1866572309),self__.id),new cljs.core.Keyword(null,"profile","profile",-545963874),self__.profile);
}));

(app.main.data.profile.set_profile_37905.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.set_profile_37905.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var profile__$1 = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.ignore(beicon.v2.core.from(app.util.i18n.set_locale(new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(profile__$1))));
}));

(app.main.data.profile.set_profile_37905.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.set_profile_37905.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var profile__$1 = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.storage.user,cljs.core.assoc,new cljs.core.Keyword(null,"profile","profile",-545963874),profile__$1);

return app.plugins.register.init();
}));
}

return (new app.main.data.profile.set_profile_37905(p__37902,map__37904__$1,profile,id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.profile.profile_fetched_QMARK_ = potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.profile","profile-fetched","app.main.data.profile/profile-fetched",1641970658));
app.main.data.profile.on_fetch_profile_exception = (function app$main$data$profile$on_fetch_profile_exception(cause){
var data = cljs.core.ex_data(cause);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"authorization","authorization",-166302136),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"challenge-required","challenge-required",2136495006),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(data))))){
var path = app.main.router.get_current_path();
var href = ["/challenge.html?redirect=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(path))].join('');
return beicon.v2.core.of(app.main.router.nav_raw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698),href], 0)));
} else {
return beicon.v2.core.throw$(cause);
}
});
app.main.data.profile.on_fetch_profile_success = (function app$main$data$profile$on_fetch_profile_success(profile){
if(((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776))) && (app.main.data.profile.is_authenticated_QMARK_(profile)))){
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (cause){
console.error("unexpected error on obtaining subscription usage",cause);

return beicon.v2.core.of(profile);
}),beicon.v2.core.map((function (p__37930){
var map__37931 = p__37930;
var map__37931__$1 = cljs.core.__destructure_map(map__37931);
var editors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37931__$1,new cljs.core.Keyword(null,"editors","editors",557792993));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(profile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"subscription","subscription",1949009182)], null),cljs.core.assoc,new cljs.core.Keyword(null,"editors","editors",557792993),editors);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-subscription-usage","get-subscription-usage",1943951861),cljs.core.PersistentArrayMap.EMPTY)));
} else {
return beicon.v2.core.of(profile);
}
});
app.main.data.profile.fetch_profile = (function app$main$data$profile$fetch_profile(){
if((typeof app.main.data.profile.fetch_profile_37932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.fetch_profile_37932 = (function (meta37933){
this.meta37933 = meta37933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.fetch_profile_37932.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.fetch_profile_37932.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","fetch-profile","app.main.data.profile/fetch-profile",721190654);
}));

(app.main.data.profile.fetch_profile_37932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37934,meta37933__$1){
var self__ = this;
var _37934__$1 = this;
return (new app.main.data.profile.fetch_profile_37932(meta37933__$1));
}));

(app.main.data.profile.fetch_profile_37932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37934){
var self__ = this;
var _37934__$1 = this;
return self__.meta37933;
}));

(app.main.data.profile.fetch_profile_37932.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.fetch_profile_37932.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(app.main.data.profile.on_fetch_profile_exception,beicon.v2.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(potok.v2.core.data_event,new cljs.core.Keyword("app.main.data.profile","profile-fetched","app.main.data.profile/profile-fetched",1641970658)),beicon.v2.core.mapcat(app.main.data.profile.on_fetch_profile_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"get-profile","get-profile",1713676914)))));
}));
}

return (new app.main.data.profile.fetch_profile_37932(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.profile.refresh_profile = (function app$main$data$profile$refresh_profile(){
if((typeof app.main.data.profile.refresh_profile_37935 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.refresh_profile_37935 = (function (meta37936){
this.meta37936 = meta37936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.refresh_profile_37935.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.refresh_profile_37935.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","refresh-profile","app.main.data.profile/refresh-profile",364238237);
}));

(app.main.data.profile.refresh_profile_37935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37937,meta37936__$1){
var self__ = this;
var _37937__$1 = this;
return (new app.main.data.profile.refresh_profile_37935(meta37936__$1));
}));

(app.main.data.profile.refresh_profile_37935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37937){
var self__ = this;
var _37937__$1 = this;
return self__.meta37936;
}));

(app.main.data.profile.refresh_profile_37935.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.refresh_profile_37935.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
return beicon.v2.core.merge(beicon.v2.core.of(app.main.data.profile.fetch_profile()),beicon.v2.core.map(app.main.data.profile.set_profile,beicon.v2.core.take((1),beicon.v2.core.filter(app.main.data.profile.is_authenticated_QMARK_,beicon.v2.core.map(cljs.core.deref,beicon.v2.core.filter(app.main.data.profile.profile_fetched_QMARK_,stream))))));
}));
}

return (new app.main.data.profile.refresh_profile_37935(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.profile.persist_profile = (function app$main$data$profile$persist_profile(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38174 = arguments.length;
var i__5750__auto___38175 = (0);
while(true){
if((i__5750__auto___38175 < len__5749__auto___38174)){
args__5755__auto__.push((arguments[i__5750__auto___38175]));

var G__38177 = (i__5750__auto___38175 + (1));
i__5750__auto___38175 = G__38177;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.data.profile.persist_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.data.profile.persist_profile.cljs$core$IFn$_invoke$arity$variadic = (function (p__37939){
var map__37940 = p__37939;
var map__37940__$1 = cljs.core.__destructure_map(map__37940);
var opts = map__37940__$1;
if((typeof app.main.data.profile.persist_profile_37941 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.persist_profile_37941 = (function (p__37939,map__37940,opts,meta37942){
this.p__37939 = p__37939;
this.map__37940 = map__37940;
this.opts = opts;
this.meta37942 = meta37942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.persist_profile_37941.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.persist_profile_37941.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","persist-profile","app.main.data.profile/persist-profile",-305039457);
}));

(app.main.data.profile.persist_profile_37941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37943,meta37942__$1){
var self__ = this;
var _37943__$1 = this;
return (new app.main.data.profile.persist_profile_37941(self__.p__37939,self__.map__37940,self__.opts,meta37942__$1));
}));

(app.main.data.profile.persist_profile_37941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37943){
var self__ = this;
var _37943__$1 = this;
return self__.meta37942;
}));

(app.main.data.profile.persist_profile_37941.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.persist_profile_37941.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var on_success = new cljs.core.Keyword(null,"on-success","on-success",1786904109).cljs$core$IFn$_invoke$arity$2(self__.opts,cljs.core.identity);
var on_error = new cljs.core.Keyword(null,"on-error","on-error",1728533530).cljs$core$IFn$_invoke$arity$2(self__.opts,beicon.v2.core.throw$);
var profile = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(state);
var params = cljs.core.select_keys(profile,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fullname","fullname",1638772587),new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"theme","theme",-1247880880)], null));
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.map(app.main.data.profile.set_profile,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-profile","update-profile",1458083625),params))));
}));
}

return (new app.main.data.profile.persist_profile_37941(p__37939,map__37940__$1,opts,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.profile.persist_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.data.profile.persist_profile.cljs$lang$applyTo = (function (seq37938){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37938));
}));

/**
 * Optimistic update of the current profile.
 * 
 *   Props are ignored because there is a specific event for updating
 *   props
 */
app.main.data.profile.update_profile = (function app$main$data$profile$update_profile(profile){
var profile__$1 = app.main.data.profile.check_profile(profile);
if((typeof app.main.data.profile.update_profile_37946 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.update_profile_37946 = (function (profile,meta37947){
this.profile = profile;
this.meta37947 = meta37947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.update_profile_37946.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.update_profile_37946.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","update-profile","app.main.data.profile/update-profile",2016618526);
}));

(app.main.data.profile.update_profile_37946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37948,meta37947__$1){
var self__ = this;
var _37948__$1 = this;
return (new app.main.data.profile.update_profile_37946(self__.profile,meta37947__$1));
}));

(app.main.data.profile.update_profile_37946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37948){
var self__ = this;
var _37948__$1 = this;
return self__.meta37947;
}));

(app.main.data.profile.update_profile_37946.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.update_profile_37946.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var profile_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"profile","profile",-545963874));
var profile__$1 = app.common.data.deep_merge.cljs$core$IFn$_invoke$arity$2(profile_SINGLEQUOTE_,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.profile,new cljs.core.Keyword(null,"props","props",453281727)));
return beicon.v2.core.merge(beicon.v2.core.of(app.main.data.profile.set_profile(profile__$1)),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(profile__$1),new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(profile_SINGLEQUOTE_)))?beicon.v2.core.of(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"activate-theme",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"settings",new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(profile__$1)], null))):null));
}));
}

return (new app.main.data.profile.update_profile_37946(profile__$1,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.profile.toggle_theme = (function app$main$data$profile$toggle_theme(){
if((typeof app.main.data.profile.toggle_theme_37954 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.toggle_theme_37954 = (function (meta37955){
this.meta37955 = meta37955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.toggle_theme_37954.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.toggle_theme_37954.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","toggle-theme","app.main.data.profile/toggle-theme",481874575);
}));

(app.main.data.profile.toggle_theme_37954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37956,meta37955__$1){
var self__ = this;
var _37956__$1 = this;
return (new app.main.data.profile.toggle_theme_37954(meta37955__$1));
}));

(app.main.data.profile.toggle_theme_37954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37956){
var self__ = this;
var _37956__$1 = this;
return self__.meta37955;
}));

(app.main.data.profile.toggle_theme_37954.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.toggle_theme_37954.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"theme","theme",-1247880880)], null),(function (current){
var current__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,"default"))?"dark":current
);
var G__37961 = current__$1;
switch (G__37961) {
case "dark":
return "light";

break;
case "light":
return "system";

break;
case "system":
return "dark";

break;
default:
return "dark";

}
}));
}));

(app.main.data.profile.toggle_theme_37954.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.toggle_theme_37954.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"profile","profile",-545963874));
var origin = new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(it__$1));
return beicon.v2.core.of(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(profile),new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"activate-theme",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),origin], null)),app.main.data.profile.persist_profile());
}));
}

return (new app.main.data.profile.toggle_theme_37954(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.profile.request_email_change = (function app$main$data$profile$request_email_change(p__37966){
var map__37967 = p__37966;
var map__37967__$1 = cljs.core.__destructure_map(map__37967);
var data = map__37967__$1;
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37967__$1,new cljs.core.Keyword(null,"email","email",1415816706));
if(cljs.core.truth_(app.common.schema.email_string_QMARK_(email))){
} else {
throw (new Error(["Assert failed: ","exepected a valid email","\n","(sm/email-string? email)"].join('')));
}

if((typeof app.main.data.profile.request_email_change_37968 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.request_email_change_37968 = (function (p__37966,map__37967,data,email,meta37969){
this.p__37966 = p__37966;
this.map__37967 = map__37967;
this.data = data;
this.email = email;
this.meta37969 = meta37969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.request_email_change_37968.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.request_email_change_37968.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","request-email-change","app.main.data.profile/request-email-change",1254180691);
}));

(app.main.data.profile.request_email_change_37968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37970,meta37969__$1){
var self__ = this;
var _37970__$1 = this;
return (new app.main.data.profile.request_email_change_37968(self__.p__37966,self__.map__37967,self__.data,self__.email,meta37969__$1));
}));

(app.main.data.profile.request_email_change_37968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37970){
var self__ = this;
var _37970__$1 = this;
return self__.meta37969;
}));

(app.main.data.profile.request_email_change_37968.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.request_email_change_37968.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),self__.email], null);
}));

(app.main.data.profile.request_email_change_37968.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.request_email_change_37968.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__37976 = cljs.core.meta(self__.data);
var map__37976__$1 = cljs.core.__destructure_map(map__37976);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37976__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),cljs.core.identity);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37976__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"request-email-change","request-email-change",562477360),self__.data)));
}));
}

return (new app.main.data.profile.request_email_change_37968(p__37966,map__37967__$1,data,email,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.profile.cancel_email_change = (function (){
if((typeof app.main.data.profile.cancel_email_change_37977 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.cancel_email_change_37977 = (function (meta37978){
this.meta37978 = meta37978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.cancel_email_change_37977.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.cancel_email_change_37977.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","cancel-email-change","app.main.data.profile/cancel-email-change",-957917627);
}));

(app.main.data.profile.cancel_email_change_37977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37979,meta37978__$1){
var self__ = this;
var _37979__$1 = this;
return (new app.main.data.profile.cancel_email_change_37977(meta37978__$1));
}));

(app.main.data.profile.cancel_email_change_37977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37979){
var self__ = this;
var _37979__$1 = this;
return self__.meta37978;
}));

(app.main.data.profile.cancel_email_change_37977.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.cancel_email_change_37977.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.map(cljs.core.constantly(app.main.data.profile.refresh_profile()),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel-email-change","cancel-email-change",-1474418788),cljs.core.PersistentArrayMap.EMPTY));
}));
}

return (new app.main.data.profile.cancel_email_change_37977(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.profile.schema_COLON_update_password = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password-1","password-1",983206964),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password-2","password-2",-1471375738),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password-old","password-old",119312255),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null);
app.main.data.profile.check_update_password = app.common.schema.check_fn.cljs$core$IFn$_invoke$arity$variadic(app.main.data.profile.schema_COLON_update_password,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hint","hint",439639918),"expected valid parameters for update password"], 0));
app.main.data.profile.update_password = (function app$main$data$profile$update_password(data){
var data__$1 = app.main.data.profile.check_update_password(data);
if((typeof app.main.data.profile.update_password_37983 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.update_password_37983 = (function (data,meta37984){
this.data = data;
this.meta37984 = meta37984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.update_password_37983.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.update_password_37983.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","update-password","app.main.data.profile/update-password",1111855582);
}));

(app.main.data.profile.update_password_37983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37985,meta37984__$1){
var self__ = this;
var _37985__$1 = this;
return (new app.main.data.profile.update_password_37983(self__.data,meta37984__$1));
}));

(app.main.data.profile.update_password_37983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37985){
var self__ = this;
var _37985__$1 = this;
return self__.meta37984;
}));

(app.main.data.profile.update_password_37983.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.update_password_37983.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(app.main.data.profile.update_password_37983.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.update_password_37983.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__37988 = cljs.core.meta(self__.data);
var map__37988__$1 = cljs.core.__destructure_map(map__37988);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37988__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),cljs.core.identity);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37988__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old-password","old-password",1136552804),new cljs.core.Keyword(null,"password-old","password-old",119312255).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"password-1","password-1",983206964).cljs$core$IFn$_invoke$arity$1(self__.data)], null);
return beicon.v2.core.ignore(beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (err){
(on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(err) : on_error.call(null,err));

return beicon.v2.core.empty();
}),beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-profile-password","update-profile-password",-979479751),params))));
}));
}

return (new app.main.data.profile.update_password_37983(data__$1,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.profile.schema_COLON_update_notifications = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"NotificationsForm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard-comments","dashboard-comments",-1615685019),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"all","all",892129742),null,new cljs.core.Keyword(null,"partial","partial",241141745),null,new cljs.core.Keyword(null,"none","none",1333468478),null], null), null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email-comments","email-comments",-1304503955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"all","all",892129742),null,new cljs.core.Keyword(null,"partial","partial",241141745),null,new cljs.core.Keyword(null,"none","none",1333468478),null], null), null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email-invites","email-invites",1802476410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"all","all",892129742),null,new cljs.core.Keyword(null,"none","none",1333468478),null], null), null)], null)], null)], null);
app.main.data.profile.check_update_notifications_params = app.common.schema.check_fn(app.main.data.profile.schema_COLON_update_notifications);
app.main.data.profile.update_notifications = (function app$main$data$profile$update_notifications(options){
var options__$1 = app.main.data.profile.check_update_notifications_params(options);
if((typeof app.main.data.profile.update_notifications_37995 !== 'undefined')){
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
app.main.data.profile.update_notifications_37995 = (function (options,meta37996){
this.options = options;
this.meta37996 = meta37996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.update_notifications_37995.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.update_notifications_37995.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","update-notifications","app.main.data.profile/update-notifications",774323308);
}));

(app.main.data.profile.update_notifications_37995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37997,meta37996__$1){
var self__ = this;
var _37997__$1 = this;
return (new app.main.data.profile.update_notifications_37995(self__.options,meta37996__$1));
}));

(app.main.data.profile.update_notifications_37995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37997){
var self__ = this;
var _37997__$1 = this;
return self__.meta37996;
}));

(app.main.data.profile.update_notifications_37995.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.update_notifications_37995.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(app.main.data.profile.update_notifications_37995.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.update_notifications_37995.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"props","props",453281727)], null),cljs.core.assoc,new cljs.core.Keyword(null,"notifications","notifications",1685638001),self__.options);
}));

(app.main.data.profile.update_notifications_37995.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.update_notifications_37995.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.map((function (){
return app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.notifications.notifications-saved"));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-profile-notifications","update-profile-notifications",1757892382),self__.options));
}));
}

return (new app.main.data.profile.update_notifications_37995(options__$1,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.profile.update_profile_props = (function app$main$data$profile$update_profile_props(props){
if((typeof app.main.data.profile.update_profile_props_38009 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.update_profile_props_38009 = (function (props,meta38010){
this.props = props;
this.meta38010 = meta38010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.update_profile_props_38009.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.update_profile_props_38009.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","update-profile-props","app.main.data.profile/update-profile-props",853020256);
}));

(app.main.data.profile.update_profile_props_38009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38011,meta38010__$1){
var self__ = this;
var _38011__$1 = this;
return (new app.main.data.profile.update_profile_props_38009(self__.props,meta38010__$1));
}));

(app.main.data.profile.update_profile_props_38009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38011){
var self__ = this;
var _38011__$1 = this;
return self__.meta38010;
}));

(app.main.data.profile.update_profile_props_38009.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.update_profile_props_38009.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"props","props",453281727)], null),cljs.core.merge,self__.props);
}));

(app.main.data.profile.update_profile_props_38009.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.update_profile_props_38009.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.map(cljs.core.constantly(app.main.data.profile.refresh_profile()),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-profile-props","update-profile-props",1444979019),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"props","props",453281727),self__.props], null)));
}));
}

return (new app.main.data.profile.update_profile_props_38009(props,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.profile.mark_onboarding_as_viewed = (function app$main$data$profile$mark_onboarding_as_viewed(var_args){
var G__38015 = arguments.length;
switch (G__38015) {
case 0:
return app.main.data.profile.mark_onboarding_as_viewed.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.profile.mark_onboarding_as_viewed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.profile.mark_onboarding_as_viewed.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.profile.mark_onboarding_as_viewed.cljs$core$IFn$_invoke$arity$1(null);
}));

(app.main.data.profile.mark_onboarding_as_viewed.cljs$core$IFn$_invoke$arity$1 = (function (p__38017){
var map__38018 = p__38017;
var map__38018__$1 = cljs.core.__destructure_map(map__38018);
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38018__$1,new cljs.core.Keyword(null,"version","version",425292698));
if((typeof app.main.data.profile.mark_onboarding_as_viewed_38019 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.mark_onboarding_as_viewed_38019 = (function (p__38017,map__38018,version,meta38020){
this.p__38017 = p__38017;
this.map__38018 = map__38018;
this.version = version;
this.meta38020 = meta38020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.mark_onboarding_as_viewed_38019.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.mark_onboarding_as_viewed_38019.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","mark-onboarding-as-viewed","app.main.data.profile/mark-onboarding-as-viewed",-514151808);
}));

(app.main.data.profile.mark_onboarding_as_viewed_38019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38021,meta38020__$1){
var self__ = this;
var _38021__$1 = this;
return (new app.main.data.profile.mark_onboarding_as_viewed_38019(self__.p__38017,self__.map__38018,self__.version,meta38020__$1));
}));

(app.main.data.profile.mark_onboarding_as_viewed_38019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38021){
var self__ = this;
var _38021__$1 = this;
return self__.meta38020;
}));

(app.main.data.profile.mark_onboarding_as_viewed_38019.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.mark_onboarding_as_viewed_38019.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var version__$1 = (function (){var or__5025__auto__ = self__.version;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"main","main",-2117802661).cljs$core$IFn$_invoke$arity$1(app.config.version);
}
})();
var props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onboarding-viewed","onboarding-viewed",-399988124),true,new cljs.core.Keyword(null,"release-notes-viewed","release-notes-viewed",-1668623270),version__$1], null);
return beicon.v2.core.map(cljs.core.constantly(app.main.data.profile.refresh_profile()),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-profile-props","update-profile-props",1444979019),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"props","props",453281727),props], null)));
}));
}

return (new app.main.data.profile.mark_onboarding_as_viewed_38019(p__38017,map__38018__$1,version,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.profile.mark_onboarding_as_viewed.cljs$lang$maxFixedArity = 1);

app.main.data.profile.mark_questions_as_answered = (function app$main$data$profile$mark_questions_as_answered(onboarding_questions){
if((typeof app.main.data.profile.mark_questions_as_answered_38025 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.mark_questions_as_answered_38025 = (function (onboarding_questions,meta38026){
this.onboarding_questions = onboarding_questions;
this.meta38026 = meta38026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.mark_questions_as_answered_38025.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.mark_questions_as_answered_38025.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","mark-questions-as-answered","app.main.data.profile/mark-questions-as-answered",328106487);
}));

(app.main.data.profile.mark_questions_as_answered_38025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38027,meta38026__$1){
var self__ = this;
var _38027__$1 = this;
return (new app.main.data.profile.mark_questions_as_answered_38025(self__.onboarding_questions,meta38026__$1));
}));

(app.main.data.profile.mark_questions_as_answered_38025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38027){
var self__ = this;
var _38027__$1 = this;
return self__.meta38026;
}));

(app.main.data.profile.mark_questions_as_answered_38025.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.mark_questions_as_answered_38025.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"props","props",453281727)], null),cljs.core.assoc,new cljs.core.Keyword(null,"onboarding-questions-answered","onboarding-questions-answered",1395823145),true);
}));

(app.main.data.profile.mark_questions_as_answered_38025.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.mark_questions_as_answered_38025.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onboarding-questions-answered","onboarding-questions-answered",1395823145),true,new cljs.core.Keyword(null,"onboarding-questions","onboarding-questions",1680690249),self__.onboarding_questions], null);
return beicon.v2.core.map(cljs.core.constantly(app.main.data.profile.refresh_profile()),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-profile-props","update-profile-props",1444979019),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"props","props",453281727),props], null)));
}));
}

return (new app.main.data.profile.mark_questions_as_answered_38025(onboarding_questions,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.profile.update_photo = (function app$main$data$profile$update_photo(file){
if(app.main.data.media.blob_QMARK_(file)){
} else {
throw (new Error(["Assert failed: ","expected a blob instance on `update-photo`","\n","(di/blob? file)"].join('')));
}

if((typeof app.main.data.profile.update_photo_38040 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.update_photo_38040 = (function (file,meta38041){
this.file = file;
this.meta38041 = meta38041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.update_photo_38040.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.update_photo_38040.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","update-photo","app.main.data.profile/update-photo",37896275);
}));

(app.main.data.profile.update_photo_38040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38042,meta38041__$1){
var self__ = this;
var _38042__$1 = this;
return (new app.main.data.profile.update_photo_38040(self__.file,meta38041__$1));
}));

(app.main.data.profile.update_photo_38040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38042){
var self__ = this;
var _38042__$1 = this;
return self__.meta38041;
}));

(app.main.data.profile.update_photo_38040.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.update_photo_38040.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(app.main.data.profile.update_photo_38040.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.update_photo_38040.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var on_success = app.main.data.media.notify_finished_loading;
var on_error = (function (p1__38038_SHARP_){
app.main.data.media.notify_finished_loading();

return app.main.data.media.process_error(p1__38038_SHARP_);
});
var prepare = (function (file__$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),file__$1], null);
});
app.main.data.media.notify_start_loading();

return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.map(cljs.core.constantly(app.main.data.profile.refresh_profile()),beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,beicon.v2.core.mapcat((function (p1__38039_SHARP_){
return app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-profile-photo","update-profile-photo",1847991804),p1__38039_SHARP_);
}),beicon.v2.core.map(prepare,beicon.v2.core.map(app.main.data.media.validate_file,beicon.v2.core.of(self__.file)))))));
}));
}

return (new app.main.data.profile.update_photo_38040(file,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.profile.fetch_file_comments_users = (function app$main$data$profile$fetch_file_comments_users(p__38048){
var map__38049 = p__38048;
var map__38049__$1 = cljs.core.__destructure_map(map__38049);
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38049__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
if(cljs.core.uuid_QMARK_(team_id)){
} else {
throw (new Error(["Assert failed: ","expected a valid uuid for `team-id`","\n","(uuid? team-id)"].join('')));
}

var fetched = (function app$main$data$profile$fetch_file_comments_users_$_fetched(users,state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"file-comments-users","file-comments-users",1002954415),app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),users));
});
if((typeof app.main.data.profile.fetch_file_comments_users_38059 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.fetch_file_comments_users_38059 = (function (p__38048,map__38049,team_id,fetched,meta38060){
this.p__38048 = p__38048;
this.map__38049 = map__38049;
this.team_id = team_id;
this.fetched = fetched;
this.meta38060 = meta38060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.fetch_file_comments_users_38059.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.fetch_file_comments_users_38059.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","fetch-file-comments-users","app.main.data.profile/fetch-file-comments-users",-2007471791);
}));

(app.main.data.profile.fetch_file_comments_users_38059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38061,meta38060__$1){
var self__ = this;
var _38061__$1 = this;
return (new app.main.data.profile.fetch_file_comments_users_38059(self__.p__38048,self__.map__38049,self__.team_id,self__.fetched,meta38060__$1));
}));

(app.main.data.profile.fetch_file_comments_users_38059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38061){
var self__ = this;
var _38061__$1 = this;
return self__.meta38060;
}));

(app.main.data.profile.fetch_file_comments_users_38059.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.fetch_file_comments_users_38059.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var share_id = new cljs.core.Keyword(null,"share-id","share-id",795821204).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498).cljs$core$IFn$_invoke$arity$1(state));
return beicon.v2.core.map((function (p1__38047_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.fetched,p1__38047_SHARP_);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-profiles-for-file-comments","get-profiles-for-file-comments",-903478036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id,new cljs.core.Keyword(null,"share-id","share-id",795821204),share_id], null)));
}));
}

return (new app.main.data.profile.fetch_file_comments_users_38059(p__38048,map__38049__$1,team_id,fetched,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.profile.profile_deleted_event_QMARK_ = potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.profile","profile-deleted","app.main.data.profile/profile-deleted",-1669169122));
app.main.data.profile.delete_subscription = (function app$main$data$profile$delete_subscription(){
if(cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776))){
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (){
return beicon.v2.core.empty();
}),beicon.v2.core.map(cljs.core.constantly(null),app.util.http.fetch(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/payments/subscriptions/delete",new cljs.core.Keyword(null,"credentials","credentials",1373178854),"include",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755)], null))));
} else {
return beicon.v2.core.empty();
}
});
app.main.data.profile.request_account_deletion = (function app$main$data$profile$request_account_deletion(params){
if((typeof app.main.data.profile.request_account_deletion_38073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.request_account_deletion_38073 = (function (params,meta38074){
this.params = params;
this.meta38074 = meta38074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.request_account_deletion_38073.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.request_account_deletion_38073.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","request-account-deletion","app.main.data.profile/request-account-deletion",-1431849983);
}));

(app.main.data.profile.request_account_deletion_38073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38075,meta38074__$1){
var self__ = this;
var _38075__$1 = this;
return (new app.main.data.profile.request_account_deletion_38073(self__.params,meta38074__$1));
}));

(app.main.data.profile.request_account_deletion_38073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38075){
var self__ = this;
var _38075__$1 = this;
return self__.meta38074;
}));

(app.main.data.profile.request_account_deletion_38073.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.request_account_deletion_38073.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__38082 = cljs.core.meta(self__.params);
var map__38082__$1 = cljs.core.__destructure_map(map__38082);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38082__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38082__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
return beicon.v2.core.concat(app.main.data.profile.delete_subscription(),beicon.v2.core.delay_at_least((300),beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.map((function (___$4){
return potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.profile","profile-deleted","app.main.data.profile/profile-deleted",-1669169122),self__.params);
}),beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-profile","delete-profile",-1573088455),cljs.core.PersistentArrayMap.EMPTY))))));
}));
}

return (new app.main.data.profile.request_account_deletion_38073(params,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.profile.schema_COLON_request_profile_recovery = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"request-profile-recovery",new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword("app.common.schema","email","app.common.schema/email",2070921211)], null)], null);
app.main.data.profile.check_request_profile_recovery = app.common.schema.check_fn(app.main.data.profile.schema_COLON_request_profile_recovery);
app.main.data.profile.request_profile_recovery = (function app$main$data$profile$request_profile_recovery(data){
var data__$1 = app.main.data.profile.check_request_profile_recovery(data);
if((typeof app.main.data.profile.request_profile_recovery_38087 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.request_profile_recovery_38087 = (function (data,meta38088){
this.data = data;
this.meta38088 = meta38088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.request_profile_recovery_38087.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.request_profile_recovery_38087.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","request-profile-recovery","app.main.data.profile/request-profile-recovery",-593601211);
}));

(app.main.data.profile.request_profile_recovery_38087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38089,meta38088__$1){
var self__ = this;
var _38089__$1 = this;
return (new app.main.data.profile.request_profile_recovery_38087(self__.data,meta38088__$1));
}));

(app.main.data.profile.request_profile_recovery_38087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38089){
var self__ = this;
var _38089__$1 = this;
return self__.meta38088;
}));

(app.main.data.profile.request_profile_recovery_38087.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.request_profile_recovery_38087.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__38094 = cljs.core.meta(self__.data);
var map__38094__$1 = cljs.core.__destructure_map(map__38094);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38094__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38094__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"request-profile-recovery","request-profile-recovery",-1226574152),self__.data)));
}));
}

return (new app.main.data.profile.request_profile_recovery_38087(data__$1,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.profile.schema_COLON_recover_profile = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"recover-profile",new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
app.main.data.profile.check_recover_profile = app.common.schema.check_fn(app.main.data.profile.schema_COLON_recover_profile);
app.main.data.profile.recover_profile = (function app$main$data$profile$recover_profile(data){
var data__$1 = app.main.data.profile.check_recover_profile(data);
if((typeof app.main.data.profile.recover_profile_38110 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.recover_profile_38110 = (function (data,meta38111){
this.data = data;
this.meta38111 = meta38111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.recover_profile_38110.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.recover_profile_38110.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","recover-profile","app.main.data.profile/recover-profile",1151588383);
}));

(app.main.data.profile.recover_profile_38110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38112,meta38111__$1){
var self__ = this;
var _38112__$1 = this;
return (new app.main.data.profile.recover_profile_38110(self__.data,meta38111__$1));
}));

(app.main.data.profile.recover_profile_38110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38112){
var self__ = this;
var _38112__$1 = this;
return self__.meta38111;
}));

(app.main.data.profile.recover_profile_38110.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.recover_profile_38110.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__38116 = cljs.core.meta(self__.data);
var map__38116__$1 = cljs.core.__destructure_map(map__38116);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38116__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38116__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recover-profile","recover-profile",627730638),self__.data)));
}));
}

return (new app.main.data.profile.recover_profile_38110(data__$1,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.profile.access_tokens_fetched = (function app$main$data$profile$access_tokens_fetched(access_tokens){
if((typeof app.main.data.profile.access_tokens_fetched_38117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.access_tokens_fetched_38117 = (function (access_tokens,meta38118){
this.access_tokens = access_tokens;
this.meta38118 = meta38118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.access_tokens_fetched_38117.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.access_tokens_fetched_38117.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","access-tokens-fetched","app.main.data.profile/access-tokens-fetched",-398221297);
}));

(app.main.data.profile.access_tokens_fetched_38117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38119,meta38118__$1){
var self__ = this;
var _38119__$1 = this;
return (new app.main.data.profile.access_tokens_fetched_38117(self__.access_tokens,meta38118__$1));
}));

(app.main.data.profile.access_tokens_fetched_38117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38119){
var self__ = this;
var _38119__$1 = this;
return self__.meta38118;
}));

(app.main.data.profile.access_tokens_fetched_38117.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.access_tokens_fetched_38117.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"access-tokens","access-tokens",713316693),self__.access_tokens);
}));
}

return (new app.main.data.profile.access_tokens_fetched_38117(access_tokens,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.profile.fetch_access_tokens = (function app$main$data$profile$fetch_access_tokens(){
if((typeof app.main.data.profile.fetch_access_tokens_38122 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.fetch_access_tokens_38122 = (function (meta38123){
this.meta38123 = meta38123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.fetch_access_tokens_38122.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.fetch_access_tokens_38122.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","fetch-access-tokens","app.main.data.profile/fetch-access-tokens",-1393543345);
}));

(app.main.data.profile.fetch_access_tokens_38122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38124,meta38123__$1){
var self__ = this;
var _38124__$1 = this;
return (new app.main.data.profile.fetch_access_tokens_38122(meta38123__$1));
}));

(app.main.data.profile.fetch_access_tokens_38122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38124){
var self__ = this;
var _38124__$1 = this;
return self__.meta38123;
}));

(app.main.data.profile.fetch_access_tokens_38122.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.fetch_access_tokens_38122.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.map(app.main.data.profile.access_tokens_fetched,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"get-access-tokens","get-access-tokens",2009261502)));
}));
}

return (new app.main.data.profile.fetch_access_tokens_38122(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.profile.access_token_created = (function app$main$data$profile$access_token_created(access_token){
if((typeof app.main.data.profile.access_token_created_38128 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.access_token_created_38128 = (function (access_token,meta38129){
this.access_token = access_token;
this.meta38129 = meta38129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.access_token_created_38128.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.access_token_created_38128.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","access-token-created","app.main.data.profile/access-token-created",-1371452256);
}));

(app.main.data.profile.access_token_created_38128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38130,meta38129__$1){
var self__ = this;
var _38130__$1 = this;
return (new app.main.data.profile.access_token_created_38128(self__.access_token,meta38129__$1));
}));

(app.main.data.profile.access_token_created_38128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38130){
var self__ = this;
var _38130__$1 = this;
return self__.meta38129;
}));

(app.main.data.profile.access_token_created_38128.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.access_token_created_38128.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"access-token-created","access-token-created",294001579),self__.access_token);
}));
}

return (new app.main.data.profile.access_token_created_38128(access_token,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.profile.create_access_token = (function app$main$data$profile$create_access_token(p__38134){
var map__38135 = p__38134;
var map__38135__$1 = cljs.core.__destructure_map(map__38135);
var params = map__38135__$1;
if((typeof app.main.data.profile.create_access_token_38136 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.create_access_token_38136 = (function (p__38134,map__38135,params,meta38137){
this.p__38134 = p__38134;
this.map__38135 = map__38135;
this.params = params;
this.meta38137 = meta38137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.create_access_token_38136.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.create_access_token_38136.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","create-access-token","app.main.data.profile/create-access-token",-1348344493);
}));

(app.main.data.profile.create_access_token_38136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38138,meta38137__$1){
var self__ = this;
var _38138__$1 = this;
return (new app.main.data.profile.create_access_token_38136(self__.p__38134,self__.map__38135,self__.params,meta38137__$1));
}));

(app.main.data.profile.create_access_token_38136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38138){
var self__ = this;
var _38138__$1 = this;
return self__.meta38137;
}));

(app.main.data.profile.create_access_token_38136.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.create_access_token_38136.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__38139 = cljs.core.meta(self__.params);
var map__38139__$1 = cljs.core.__destructure_map(map__38139);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38139__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38139__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,beicon.v2.core.map(app.main.data.profile.access_token_created,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-access-token","create-access-token",-865569728),self__.params))));
}));
}

return (new app.main.data.profile.create_access_token_38136(p__38134,map__38135__$1,params,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.profile.delete_access_token = (function app$main$data$profile$delete_access_token(p__38140){
var map__38144 = p__38140;
var map__38144__$1 = cljs.core.__destructure_map(map__38144);
var params = map__38144__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38144__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error("Assert failed: (uuid? id)"));
}

if((typeof app.main.data.profile.delete_access_token_38145 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.profile.delete_access_token_38145 = (function (p__38140,map__38144,params,id,meta38146){
this.p__38140 = p__38140;
this.map__38144 = map__38144;
this.params = params;
this.id = id;
this.meta38146 = meta38146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.profile.delete_access_token_38145.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.delete_access_token_38145.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.profile","delete-access-token","app.main.data.profile/delete-access-token",446209693);
}));

(app.main.data.profile.delete_access_token_38145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38147,meta38146__$1){
var self__ = this;
var _38147__$1 = this;
return (new app.main.data.profile.delete_access_token_38145(self__.p__38140,self__.map__38144,self__.params,self__.id,meta38146__$1));
}));

(app.main.data.profile.delete_access_token_38145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38147){
var self__ = this;
var _38147__$1 = this;
return self__.meta38146;
}));

(app.main.data.profile.delete_access_token_38145.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.profile.delete_access_token_38145.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__38151 = cljs.core.meta(self__.params);
var map__38151__$1 = cljs.core.__destructure_map(map__38151);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38151__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38151__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-access-token","delete-access-token",-110686384),self__.params)));
}));
}

return (new app.main.data.profile.delete_access_token_38145(p__38140,map__38144__$1,params,id,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.profile.js.map
