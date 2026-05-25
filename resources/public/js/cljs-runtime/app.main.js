import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.logging.js";
import "./app.common.types.objects_map.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.data.auth.js";
import "./app.main.data.event.js";
import "./app.main.data.profile.js";
import "./app.main.data.websocket.js";
import "./app.main.errors.js";
import "./app.main.features.js";
import "./app.main.rasterizer.js";
import "./app.main.store.js";
import "./app.main.ui.js";
import "./app.main.ui.alert.js";
import "./app.main.ui.confirm.js";
import "./app.main.ui.css_cursors.js";
import "./app.main.ui.delete_shared.js";
import "./app.main.ui.routes.js";
import "./app.main.worker.js";
import "./app.plugins.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./debug.js";
import "./features.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main');
app.common.logging.setup_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"info","info",-317069002)], null));
app.common.logging.loggers.set("app.main",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"debug","debug",-1608172596)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"browser","browser",828191719),app.config.target)){
if(app.common.logging.enabled_QMARK_("app.main",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"full","full",436801220).cljs$core$IFn$_invoke$arity$1(app.config.version)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asserts","asserts",359548304),cljs.core._STAR_assert_STAR_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"build-date","build-date",-325850528),app.config.build_date], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"public-uri","public-uri",-1456511719),""+(app.config.public_uri ?? "")], null)], null);
}),null)),null,null,"app.main",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}


if(app.common.logging.enabled_QMARK_("app.main",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"enabled flags"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flags","flags",1775418075),cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,app.config.flags))], null)], null);
}),null)),null,null,"app.main",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}

} else {
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.app_root !== 'undefined')){
} else {
app.main.app_root = (function (){var el = app.util.dom.get_element("app");
return rumext.v2.create_root(el);
})();
}
app.main.init_ui = (function app$main$init_ui(){
return rumext.v2.render_BANG_(app.main.app_root,rumext.v2.element.cljs$core$IFn$_invoke$arity$1(app.main.ui.app));
});
app.main.initialize = (function app$main$initialize(){
if((typeof app.main.initialize_66854 !== 'undefined')){
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
app.main.initialize_66854 = (function (meta66855){
this.meta66855 = meta66855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.initialize_66854.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.initialize_66854.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main","initialize","app.main/initialize",1664955691);
}));

(app.main.initialize_66854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66856,meta66855__$1){
var self__ = this;
var _66856__$1 = this;
return (new app.main.initialize_66854(meta66855__$1));
}));

(app.main.initialize_66854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66856){
var self__ = this;
var _66856__$1 = this;
return self__.meta66855;
}));

(app.main.initialize_66854.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.initialize_66854.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"session-id","session-id",-1147060351),app.common.uuid.next());
}));

(app.main.initialize_66854.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.initialize_66854.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
return beicon.v2.core.merge(((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"audit-log","audit-log",1352683940)))?beicon.v2.core.of(app.main.data.event.initialize()):beicon.v2.core.empty()),beicon.v2.core.of(app.main.data.profile.refresh_profile()),beicon.v2.core.map(app.main.data.auth.logged_out,beicon.v2.core.filter(app.main.data.profile.profile_deleted_event_QMARK_,stream)),beicon.v2.core.map((function (){
return app.main.ui.routes.init_routes();
}),beicon.v2.core.take((1),beicon.v2.core.filter(app.main.data.profile.profile_fetched_QMARK_,stream))),beicon.v2.core.map((function (){
return app.main.data.websocket.initialize();
}),beicon.v2.core.take((1),beicon.v2.core.filter(app.main.data.profile.is_authenticated_QMARK_,beicon.v2.core.map(cljs.core.deref,beicon.v2.core.filter(app.main.data.profile.profile_fetched_QMARK_,stream))))));
}));

(app.main.initialize_66854.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.initialize_66854.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))){
return null;
} else {
return app.main.rasterizer.init_BANG_();
}
}));
}

return (new app.main.initialize_66854(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.init = (function app$main$init(options){
if(app.config.stale_build_QMARK_()){
return app.config.throttled_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reason","reason",-2070751759),""+"stale JS: compiled="+(app.config.compiled_version_tag ?? "")+" expected="+(app.config.version_tag ?? "")], 0));
} else {
var G__66857_66860 = (options["defaultTranslations"]);
if((G__66857_66860 == null)){
} else {
app.util.i18n.set_default_translations(G__66857_66860);
}

app.main.worker.init_BANG_();

app.util.i18n.init();

app.main.ui.css_cursors.init_styles();

app.main.init_ui();

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.plugins.initialize(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.initialize()], 0));
}
});
goog.exportSymbol('app.main.init', app.main.init);
app.main.reinit = (function app$main$reinit(var_args){
var G__66859 = arguments.length;
switch (G__66859) {
case 0:
return app.main.reinit.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.reinit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('app.main.reinit', app.main.reinit);

(app.main.reinit.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.reinit.cljs$core$IFn$_invoke$arity$1(false);
}));

(app.main.reinit.cljs$core$IFn$_invoke$arity$1 = (function (hard_QMARK_){
if(cljs.core.truth_(hard_QMARK_)){
rumext.v2.unmount_BANG_(app.main.app_root);

(app.main.app_root = rumext.v2.create_root(app.util.dom.get_element("app")));
} else {
}

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.event.initialize());

return app.main.init_ui();
}));

(app.main.reinit.cljs$lang$maxFixedArity = 1);

app.main.after_load = (function app$main$after_load(){
return app.main.reinit.cljs$core$IFn$_invoke$arity$0();
});
(Error.stackTraceLimit = (50));

//# sourceMappingURL=app.main.js.map
