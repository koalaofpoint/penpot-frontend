import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.store.js";
goog.provide('app.util.debug');
if((typeof app !== 'undefined') && (typeof app.util !== 'undefined') && (typeof app.util.debug !== 'undefined') && (typeof app.util.debug.state !== 'undefined')){
} else {
app.util.debug.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
app.util.debug.options = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 31, [new cljs.core.Keyword(null,"disable-thumbnail-cache","disable-thumbnail-cache",-1747004158),null,new cljs.core.Keyword(null,"grid-layout","grid-layout",-227324382),null,new cljs.core.Keyword(null,"disable-frame-thumbnails","disable-frame-thumbnails",-1073907006),null,new cljs.core.Keyword(null,"layout-lines","layout-lines",-1868555037),null,new cljs.core.Keyword(null,"group","group",582596132),null,new cljs.core.Keyword(null,"simple-selection","simple-selection",1793712036),null,new cljs.core.Keyword(null,"grid-cells","grid-cells",-486475418),null,new cljs.core.Keyword(null,"bounding-boxes","bounding-boxes",-542662202),null,new cljs.core.Keyword(null,"layout-content-bounds","layout-content-bounds",-1216447768),null,new cljs.core.Keyword(null,"events","events",1792552201),null,new cljs.core.Keyword(null,"layout-drop-zones","layout-drop-zones",-665395958),null,new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572),null,new cljs.core.Keyword(null,"parent-bounds","parent-bounds",-168980852),null,new cljs.core.Keyword(null,"handlers","handlers",79528781),null,new cljs.core.Keyword(null,"events-times","events-times",420818190),null,new cljs.core.Keyword(null,"wasm-viewbox","wasm-viewbox",-1694070386),null,new cljs.core.Keyword(null,"history-overlay","history-overlay",1725695055),null,new cljs.core.Keyword(null,"gl-context","gl-context",2058385711),null,new cljs.core.Keyword(null,"wasm-gl-context-init-error","wasm-gl-context-init-error",-2060239440),null,new cljs.core.Keyword(null,"force-frame-thumbnails","force-frame-thumbnails",-717831919),null,new cljs.core.Keyword(null,"selection-center","selection-center",-521638829),null,new cljs.core.Keyword(null,"text-outline","text-outline",-2026960525),null,new cljs.core.Keyword(null,"show-ids","show-ids",1853916915),null,new cljs.core.Keyword(null,"bool-shapes","bool-shapes",-1080624236),null,new cljs.core.Keyword(null,"pixel-grid","pixel-grid",-148102857),null,new cljs.core.Keyword(null,"show-export-metadata","show-export-metadata",-1612589127),null,new cljs.core.Keyword(null,"display-touched","display-touched",-1742826950),null,new cljs.core.Keyword(null,"shape-titles","shape-titles",959632283),null,new cljs.core.Keyword(null,"shape-panel","shape-panel",-2139910340),null,new cljs.core.Keyword(null,"show-touched","show-touched",2135884991),null,new cljs.core.Keyword(null,"html-text","html-text",2147046975),null], null), null);
app.util.debug.handle_change = (function app$util$debug$handle_change(){
(app.main.store._STAR_debug_events_STAR_ = cljs.core.contains_QMARK_(cljs.core.deref(app.util.debug.state),new cljs.core.Keyword(null,"events","events",1792552201)));

return (app.main.store._STAR_debug_events_time_STAR_ = cljs.core.contains_QMARK_(cljs.core.deref(app.util.debug.state),new cljs.core.Keyword(null,"events-times","events-times",420818190)));
});
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
app.util.debug.handle_change();

cljs.core.add_watch(app.util.debug.state,new cljs.core.Keyword(null,"watcher","watcher",2145165251),app.util.debug.handle_change);
} else {
}
app.util.debug.enable_BANG_ = (function app$util$debug$enable_BANG_(option){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.util.debug.state,cljs.core.conj,option);
});
app.util.debug.disable_BANG_ = (function app$util$debug$disable_BANG_(option){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.util.debug.state,cljs.core.disj,option);
});
app.util.debug.enabled_QMARK_ = (function app$util$debug$enabled_QMARK_(option){
return cljs.core.contains_QMARK_(cljs.core.deref(app.util.debug.state),option);
});
app.util.debug.toggle_BANG_ = (function app$util$debug$toggle_BANG_(option){
if(app.util.debug.enabled_QMARK_(option)){
return app.util.debug.disable_BANG_(option);
} else {
return app.util.debug.enable_BANG_(option);
}
});

//# sourceMappingURL=app.util.debug.js.map
