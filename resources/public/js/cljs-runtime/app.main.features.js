import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.features.js";
import "./app.common.logging.js";
import "./app.config.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.render_wasm.js";
import "./clojure.set.js";
import "./cuerdas.core.js";
import "./okulary.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.features');
app.common.logging.loggers.set("app.main.features",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"trace","trace",-1082747415)));
app.main.features.global_enabled_features = app.common.features.get_enabled_features(app.config.flags);
app.main.features.setup_wasm_features = (function app$main$features$setup_wasm_features(features__$1,state){
var params = app.main.router.get_params(state);
var wasm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"wasm","wasm",-969992002));
var enable_wasm = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",wasm);
var disable_wasm = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",wasm);
var features__$2 = (function (){var G__37882 = features__$1;
var G__37882__$1 = ((enable_wasm)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__37882,"render-wasm/v1"):G__37882);
if(disable_wasm){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(G__37882__$1,"render-wasm/v1");
} else {
return G__37882__$1;
}
})();
var G__37883 = features__$2;
if(cljs.core.contains_QMARK_(features__$2,"render-wasm/v1")){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__37883,"text-editor/v2");
} else {
return G__37883;
}
});
/**
 * An explicit lookup of enabled features for the current team
 */
app.main.features.get_enabled_features = (function app$main$features$get_enabled_features(state,team_id){
var team = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"teams","teams",1677714510)),team_id);
return app.main.features.setup_wasm_features(clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(clojure.set.union.cljs$core$IFn$_invoke$arity$2(app.main.features.global_enabled_features,cljs.core.get.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"features-runtime","features-runtime",-389800627),cljs.core.PersistentHashSet.EMPTY)),app.common.features.no_migration_features),cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"features","features",-1146962336))),state);
});
app.main.features.enabled_by_flags_QMARK_ = (function app$main$features$enabled_by_flags_QMARK_(p__37884,feature){
var map__37885 = p__37884;
var map__37885__$1 = cljs.core.__destructure_map(map__37885);
var features_runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37885__$1,new cljs.core.Keyword(null,"features-runtime","features-runtime",-389800627));
var features__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37885__$1,new cljs.core.Keyword(null,"features","features",-1146962336));
return ((cljs.core.contains_QMARK_(features_runtime,feature)) || (cljs.core.contains_QMARK_(features__$1,feature)));
});
app.main.features.enabled_without_migration_QMARK_ = (function app$main$features$enabled_without_migration_QMARK_(p__37891,feature){
var map__37892 = p__37891;
var map__37892__$1 = cljs.core.__destructure_map(map__37892);
var features_runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37892__$1,new cljs.core.Keyword(null,"features-runtime","features-runtime",-389800627));
var features__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37892__$1,new cljs.core.Keyword(null,"features","features",-1146962336));
return ((cljs.core.contains_QMARK_(features_runtime,feature)) || (((cljs.core.contains_QMARK_(app.main.features.global_enabled_features,feature)) || (cljs.core.contains_QMARK_(features__$1,feature)))));
});
app.main.features.wasm_url_override = (function app$main$features$wasm_url_override(state){
var G__37893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.router.get_params(state),new cljs.core.Keyword(null,"wasm","wasm",-969992002));
switch (G__37893) {
case "true":
return true;

break;
case "false":
return false;

break;
default:
return null;

}
});
/**
 * Given a state and feature, check if feature is enabled.
 */
app.main.features.active_feature_QMARK_ = (function app$main$features$active_feature_QMARK_(state,feature){
if(cljs.core.contains_QMARK_(app.common.features.supported_features,feature)){
} else {
throw (new Error(["Assert failed: ","feature not supported","\n","(contains? cfeat/supported-features feature)"].join('')));
}

var wasm_override = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(feature,"render-wasm/v1"))?app.main.features.wasm_url_override(state):null);
if((!((wasm_override == null)))){
return wasm_override;
} else {
if(cljs.core.contains_QMARK_(app.common.features.no_migration_features,feature)){
return app.main.features.enabled_without_migration_QMARK_(state,feature);
} else {
return app.main.features.enabled_by_flags_QMARK_(state,feature);

}
}
});
app.main.features.features_ref = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.key(new cljs.core.Keyword(null,"features","features",-1146962336)),app.main.store.state);
/**
 * A react hook that checks if feature is currently enabled
 */
app.main.features.use_feature = (function app$main$features$use_feature(feature){
var enabled_features = rumext.v2.deref(app.main.features.features_ref);
return cljs.core.contains_QMARK_(enabled_features,feature);
});
/**
 * An event constructor for runtime feature toggle.
 * 
 *   Warning: if a feature is active globally or by team, it can't be
 *   disabled.
 */
app.main.features.toggle_feature = (function app$main$features$toggle_feature(feature){
if((typeof app.main.features.toggle_feature_37898 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.features.toggle_feature_37898 = (function (feature,meta37899){
this.feature = feature;
this.meta37899 = meta37899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.features.toggle_feature_37898.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.features.toggle_feature_37898.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.features","toggle-feature","app.main.features/toggle-feature",-1719396584);
}));

(app.main.features.toggle_feature_37898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37900,meta37899__$1){
var self__ = this;
var _37900__$1 = this;
return (new app.main.features.toggle_feature_37898(self__.feature,meta37899__$1));
}));

(app.main.features.toggle_feature_37898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37900){
var self__ = this;
var _37900__$1 = this;
return self__.meta37899;
}));

(app.main.features.toggle_feature_37898.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.features.toggle_feature_37898.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_(app.common.features.supported_features,self__.feature)){
} else {
throw (new Error(["Assert failed: ","not supported feature","\n","(contains? cfeat/supported-features feature)"].join('')));
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"features-runtime","features-runtime",-389800627),(function (features__$1){
if(cljs.core.contains_QMARK_(features__$1,self__.feature)){
if(app.common.logging.enabled_QMARK_("app.main.features",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"feature disabled"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature","feature",27242652),self__.feature], null)], null);
}),null)),null,null,"app.main.features",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}


return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(features__$1,self__.feature);
} else {
if(app.common.logging.enabled_QMARK_("app.main.features",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"feature enabled"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature","feature",27242652),self__.feature], null)], null);
}),null)),null,null,"app.main.features",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}


return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(features__$1,self__.feature);
}
})),new cljs.core.Keyword(null,"features-runtime","features-runtime",-389800627),clojure.set.intersection,app.common.features.no_migration_features);
}));
}

return (new app.main.features.toggle_feature_37898(feature,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.features.enable_feature = (function app$main$features$enable_feature(feature){
if((typeof app.main.features.enable_feature_37911 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.features.enable_feature_37911 = (function (feature,meta37912){
this.feature = feature;
this.meta37912 = meta37912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.features.enable_feature_37911.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.features.enable_feature_37911.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.features","enable-feature","app.main.features/enable-feature",-2137493388);
}));

(app.main.features.enable_feature_37911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37913,meta37912__$1){
var self__ = this;
var _37913__$1 = this;
return (new app.main.features.enable_feature_37911(self__.feature,meta37912__$1));
}));

(app.main.features.enable_feature_37911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37913){
var self__ = this;
var _37913__$1 = this;
return self__.meta37912;
}));

(app.main.features.enable_feature_37911.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.features.enable_feature_37911.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_(app.common.features.supported_features,self__.feature)){
} else {
throw (new Error(["Assert failed: ","not supported feature","\n","(contains? cfeat/supported-features feature)"].join('')));
}

if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,self__.feature))){
return state;
} else {
if(app.common.logging.enabled_QMARK_("app.main.features",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"feature enabled"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature","feature",27242652),self__.feature], null)], null);
}),null)),null,null,"app.main.features",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}


return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"features-runtime","features-runtime",-389800627),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),self__.feature),new cljs.core.Keyword(null,"features-runtime","features-runtime",-389800627),clojure.set.intersection,app.common.features.no_migration_features);
}
}));
}

return (new app.main.features.enable_feature_37911(feature,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.features.initialize = (function app$main$features$initialize(features__$1){
if((typeof app.main.features.initialize_37920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.features.initialize_37920 = (function (features,meta37921){
this.features = features;
this.meta37921 = meta37921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.features.initialize_37920.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.features.initialize_37920.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.features","initialize","app.main.features/initialize",1791758028);
}));

(app.main.features.initialize_37920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37922,meta37921__$1){
var self__ = this;
var _37922__$1 = this;
return (new app.main.features.initialize_37920(self__.features,meta37921__$1));
}));

(app.main.features.initialize_37920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37922){
var self__ = this;
var _37922__$1 = this;
return self__.meta37921;
}));

(app.main.features.initialize_37920.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.features.initialize_37920.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var features__$2 = app.main.features.setup_wasm_features(clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.union.cljs$core$IFn$_invoke$arity$2(app.main.features.global_enabled_features,cljs.core.get.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"features-runtime","features-runtime",-389800627),cljs.core.PersistentHashSet.EMPTY)),self__.features),state);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"features","features",-1146962336),features__$2);
}));

(app.main.features.initialize_37920.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.features.initialize_37920.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var features__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"features","features",-1146962336));
if(cljs.core.contains_QMARK_(features__$2,"render-wasm/v1")){
app.render_wasm.initialize(true);
} else {
app.render_wasm.initialize(false);
}

if(app.common.logging.enabled_QMARK_("app.main.features",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"initialized"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",features__$2)], null)], null);
}),null)),null,null,"app.main.features",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}

return null;
}));
}

return (new app.main.features.initialize_37920(features__$1,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.features.js.map
