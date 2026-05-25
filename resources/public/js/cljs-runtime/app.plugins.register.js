import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.schema.js";
import "./app.common.types.plugins.js";
import "./app.common.uri.js";
import "./app.common.uuid.js";
import "./app.main.repo.js";
import "./app.main.store.js";
import "./app.util.object.js";
import "./beicon.v2.core.js";
goog.provide('app.plugins.register');
if((typeof app !== 'undefined') && (typeof app.plugins !== 'undefined') && (typeof app.plugins.register !== 'undefined') && (typeof app.plugins.register.registry !== 'undefined')){
} else {
app.plugins.register.registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Retrieves the plugin data as an ordered list of plugin elements
 */
app.plugins.register.plugins_list = (function app$plugins$register$plugins_list(){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56125_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.plugins.register.registry),new cljs.core.Keyword(null,"data","data",-232669377)),p1__56125_SHARP_);
}),new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.plugins.register.registry)));
});
app.plugins.register.get_plugin = (function app$plugins$register$get_plugin(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.plugins.register.registry),new cljs.core.Keyword(null,"data","data",-232669377)),id);
});
/**
 * Read the manifest.json defined by the plugins definition and transforms it into an
 *   object that will be stored in the register.
 */
app.plugins.register.parse_manifest = (function app$plugins$register$parse_manifest(plugin_url,manifest){
var name = app.util.object.get.cljs$core$IFn$_invoke$arity$2(manifest,"name");
var desc = app.util.object.get.cljs$core$IFn$_invoke$arity$2(manifest,"description");
var code = app.util.object.get.cljs$core$IFn$_invoke$arity$2(manifest,"code");
var icon = app.util.object.get.cljs$core$IFn$_invoke$arity$2(manifest,"icon");
var vers = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(app.util.object.get.cljs$core$IFn$_invoke$arity$2(manifest,"version"),(1));
var permissions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,app.util.object.get.cljs$core$IFn$_invoke$arity$3(manifest,"permissions",cljs.core.PersistentVector.EMPTY));
var permissions__$1 = (function (){var G__56126 = permissions;
var G__56126__$1 = ((cljs.core.contains_QMARK_(permissions,"content:write"))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56126,"content:read"):G__56126);
var G__56126__$2 = ((cljs.core.contains_QMARK_(permissions,"library:write"))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56126__$1,"library:read"):G__56126__$1);
if(cljs.core.contains_QMARK_(permissions,"comment:write")){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56126__$2,"comment:read");
} else {
return G__56126__$2;
}
})();
var plugin_url__$1 = app.common.uri.uri(plugin_url);
var origin = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(vers,(1)))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(plugin_url__$1,new cljs.core.Keyword(null,"path","path",-188191168),"")):cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.common.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_url__$1,"."], 0))));
var prev_plugin = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (plugin){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(origin,new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(plugin))));
}),cljs.core.vals(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.plugins.register.registry))));
var plugin_id = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395).cljs$core$IFn$_invoke$arity$1(prev_plugin),cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.common.uuid.next()));
var manifest__$1 = app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395),plugin_id,new cljs.core.Keyword(null,"url","url",276297046),cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_url__$1),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"host","host",-1558485167),origin,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"icon","icon",1679606541),icon,new cljs.core.Keyword(null,"permissions","permissions",67803075),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.str),permissions__$1)], null));
if(cljs.core.truth_(app.common.schema.validate(app.common.types.plugins.schema_COLON_registry_entry,manifest__$1))){
return manifest__$1;
} else {
return console.error(cljs.core.clj__GT_js(app.common.schema.explain(app.common.types.plugins.schema_COLON_registry_entry,manifest__$1)));
}
});
app.plugins.register.save_to_store = (function app$plugins$register$save_to_store(){
var registry = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(app.plugins.register.registry),new cljs.core.Keyword(null,"data","data",-232669377),app.common.data.update_vals,app.common.data.without_nils);
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-profile-props","update-profile-props",1444979019),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plugins","plugins",1900073717),registry], null)], null)));
});
app.plugins.register.load_from_store = (function app$plugins$register$load_from_store(){
return cljs.core.reset_BANG_(app.plugins.register.registry,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app.main.store.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"plugins","plugins",1900073717)], null),cljs.core.PersistentArrayMap.EMPTY));
});
app.plugins.register.init = (function app$plugins$register$init(){
return app.plugins.register.load_from_store();
});
app.plugins.register.install_plugin_BANG_ = (function app$plugins$register$install_plugin_BANG_(plugin){
var update_ids = (function app$plugins$register$install_plugin_BANG__$_update_ids(ids){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56127_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__56127_SHARP_,new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395).cljs$core$IFn$_invoke$arity$1(plugin));
}),ids),new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395).cljs$core$IFn$_invoke$arity$1(plugin));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.plugins.register.registry,(function (p1__56128_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__56128_SHARP_,new cljs.core.Keyword(null,"ids","ids",-998535796),update_ids),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.assoc,new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395).cljs$core$IFn$_invoke$arity$1(plugin),plugin);
}));

return app.plugins.register.save_to_store();
});
app.plugins.register.remove_plugin_BANG_ = (function app$plugins$register$remove_plugin_BANG_(p__56134){
var map__56135 = p__56134;
var map__56135__$1 = cljs.core.__destructure_map(map__56135);
var plugin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56135__$1,new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395));
var update_ids = (function app$plugins$register$remove_plugin_BANG__$_update_ids(ids){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56132_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__56132_SHARP_,plugin_id);
}),ids);
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.plugins.register.registry,(function (p1__56133_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__56133_SHARP_,new cljs.core.Keyword(null,"ids","ids",-998535796),update_ids),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.dissoc,plugin_id);
}));

return app.plugins.register.save_to_store();
});
app.plugins.register.check_permission = (function app$plugins$register$check_permission(plugin_id,permission){
var or__5025__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(plugin_id,"00000000-0000-0000-0000-000000000000");
if(or__5025__auto__){
return or__5025__auto__;
} else {
var map__56143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.plugins.register.registry),new cljs.core.Keyword(null,"data","data",-232669377)),plugin_id);
var map__56143__$1 = cljs.core.__destructure_map(map__56143);
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56143__$1,new cljs.core.Keyword(null,"permissions","permissions",67803075));
return cljs.core.contains_QMARK_(permissions,permission);
}
});

//# sourceMappingURL=app.plugins.register.js.map
