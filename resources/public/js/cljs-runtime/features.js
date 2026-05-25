import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.features.js";
import "./app.main.store.js";
import "./app.plugins.js";
import "./app.util.timers.js";
goog.provide('features');
features.grid = (function features$grid(){
app.util.timers.schedule_on_idle.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.features.toggle_feature("layout/grid"));
}));

return null;
});
goog.exportSymbol('features.grid', features.grid);
features.get_enabled = (function features$get_enabled(){
return cljs.core.clj__GT_js(app.main.features.global_enabled_features);
});
goog.exportSymbol('features.get_enabled', features.get_enabled);
features.get_team_enabled = (function features$get_team_enabled(){
return cljs.core.clj__GT_js(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"features","features",-1146962336)));
});
goog.exportSymbol('features.get_team_enabled', features.get_team_enabled);
features.plugins = (function features$plugins(){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.features.enable_feature("plugins/runtime"));

app.plugins.init_plugins_runtime_BANG_();

return null;
});
goog.exportSymbol('features.plugins', features.plugins);

//# sourceMappingURL=features.js.map
