import "./cljs_env.js";
import "./cljs.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.releases.common');
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.ui !== 'undefined') && (typeof app.main.ui.releases !== 'undefined') && (typeof app.main.ui.releases.common !== 'undefined') && (typeof app.main.ui.releases.common.render_release_notes !== 'undefined')){
} else {
app.main.ui.releases.common.render_release_notes = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__82923 = cljs.core.get_global_hierarchy;
return (fexpr__82923.cljs$core$IFn$_invoke$arity$0 ? fexpr__82923.cljs$core$IFn$_invoke$arity$0() : fexpr__82923.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.main.ui.releases.common","render-release-notes"),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
app.main.ui.releases.common.navigation_bullets = (function app$main$ui$releases$common$navigation_bullets(props_82924){
var map__82925 = rumext.v2.util.wrap_props(props_82924);
var map__82925__$1 = cljs.core.__destructure_map(map__82925);
var slide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82925__$1,new cljs.core.Keyword(null,"slide","slide",142491892));
var navigate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82925__$1,new cljs.core.Keyword(null,"navigate","navigate",657596805));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82925__$1,new cljs.core.Keyword(null,"total","total",1916810418));
return rumext.v2.jsx("ul",{'className':"main_ui_releases_common__step-dots",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,i){
out_arr__46744__auto__.push(rumext.v2.jsx("li",{'onClick':(function (){
return (navigate.cljs$core$IFn$_invoke$arity$1 ? navigate.cljs$core$IFn$_invoke$arity$1(i) : navigate.call(null,i));
}),'className':"main_ui_releases_common__dot"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slide,i))?"main_ui_releases_common__current":"")}));

return out_arr__46744__auto__;
}),[],cljs.core.range.cljs$core$IFn$_invoke$arity$1(total))});
});

(app.main.ui.releases.common.navigation_bullets.displayName = "navigation-bullets");


//# sourceMappingURL=app.main.ui.releases.common.js.map
