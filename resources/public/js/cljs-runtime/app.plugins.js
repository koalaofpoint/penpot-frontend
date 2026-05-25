import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$$penpot$plugins_runtime.js";
import "./app.main.features.js";
import "./app.main.store.js";
import "./app.plugins.api.js";
import "./app.plugins.flex.js";
import "./app.plugins.format.js";
import "./app.plugins.grid.js";
import "./app.plugins.library.js";
import "./app.plugins.public_utils.js";
import "./app.plugins.ruler_guides.js";
import "./app.plugins.shape.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.plugins');
app.plugins.init_plugins_runtime_BANG_ = (function app$plugins$init_plugins_runtime_BANG_(){
return shadow.js.shim.module$$penpot$plugins_runtime.initPluginsRuntime((function (plugin_id){
return app.plugins.api.create_context(plugin_id);
}));
});
app.plugins.initialize = (function app$plugins$initialize(){
if((typeof app.plugins.initialize_66846 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.plugins.initialize_66846 = (function (meta66847){
this.meta66847 = meta66847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.plugins.initialize_66846.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.plugins.initialize_66846.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.plugins","initialize","app.plugins/initialize",-280898138);
}));

(app.plugins.initialize_66846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66848,meta66847__$1){
var self__ = this;
var _66848__$1 = this;
return (new app.plugins.initialize_66846(meta66847__$1));
}));

(app.plugins.initialize_66846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66848){
var self__ = this;
var _66848__$1 = this;
return self__.meta66847;
}));

(app.plugins.initialize_66846.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.plugins.initialize_66846.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
return beicon.v2.core.ignore(beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(app.plugins.init_plugins_runtime_BANG_,beicon.v2.core.take((1),beicon.v2.core.filter((function (){
return app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"plugins/runtime");
}),beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.features","initialize","app.main.features/initialize",1791758028)),stream))))));
}));
}

return (new app.plugins.initialize_66846(cljs.core.PersistentArrayMap.EMPTY));
});
(app.plugins.flex.shape_proxy_QMARK_ = app.plugins.shape.shape_proxy_QMARK_);
(app.plugins.grid.shape_proxy_QMARK_ = app.plugins.shape.shape_proxy_QMARK_);
(app.plugins.format.shape_proxy = app.plugins.shape.shape_proxy);
(app.plugins.ruler_guides.shape_proxy = app.plugins.shape.shape_proxy);
(app.plugins.ruler_guides.shape_proxy_QMARK_ = app.plugins.shape.shape_proxy_QMARK_);
(app.plugins.shape.lib_typography_proxy_QMARK_ = app.plugins.library.lib_typography_proxy_QMARK_);
(app.plugins.shape.lib_component_proxy = app.plugins.library.lib_component_proxy);

//# sourceMappingURL=app.plugins.js.map
