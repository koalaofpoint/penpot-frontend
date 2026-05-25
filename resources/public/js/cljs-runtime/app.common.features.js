import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.exceptions.js";
import "./app.common.schema.js";
import "./app.common.schema.generators.js";
import "./clojure.set.js";
import "./cuerdas.core.js";
goog.provide('app.common.features');
app.common.features._STAR_previous_STAR_ = cljs.core.PersistentHashSet.EMPTY;
app.common.features._STAR_current_STAR_ = cljs.core.PersistentHashSet.EMPTY;
app.common.features._STAR_new_STAR_ = null;
app.common.features._STAR_wrap_with_objects_map_fn_STAR_ = cljs.core.identity;
app.common.features._STAR_wrap_with_pointer_map_fn_STAR_ = cljs.core.identity;
app.common.features.supported_features = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["fdata/path-data",null,"plugins/runtime",null,"design-tokens/v1",null,"variants/v1",null,"layout/grid",null,"styles/v2",null,"fdata/pointer-map",null,"text-editor/v2-html-paste",null,"fdata/objects-map",null,"text-editor/v2",null,"tokens/numeric-input",null,"render-wasm/v1",null,"text-editor-wasm/v1",null,"components/v2",null,"fdata/shape-data-type",null], null), null);
app.common.features.default_features = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["fdata/path-data",null,"plugins/runtime",null,"design-tokens/v1",null,"variants/v1",null,"layout/grid",null,"styles/v2",null,"components/v2",null,"fdata/shape-data-type",null], null), null);
app.common.features.frontend_only_features = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["plugins/runtime",null,"styles/v2",null,"text-editor/v2-html-paste",null,"text-editor/v2",null,"tokens/numeric-input",null,"render-wasm/v1",null,"text-editor-wasm/v1",null], null), null);
app.common.features.backend_only_features = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["fdata/pointer-map",null,"fdata/objects-map",null], null), null);
app.common.features.no_team_inheritable_features = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["fdata/path-data",null,"fdata/shape-data-type",null], null), null);
app.common.features.no_migration_features = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["fdata/path-data",null,"design-tokens/v1",null,"variants/v1",null,"layout/grid",null,"tokens/numeric-input",null,"fdata/shape-data-type",null], null), null),app.common.features.frontend_only_features),app.common.features.backend_only_features);
app.common.features.schema_COLON_features = app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"FileFeatures",new cljs.core.Keyword("app.common.schema.desc-js-like","inline","app.common.schema.desc-js-like/inline",1288677112),true,new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.subseq.cljs$core$IFn$_invoke$arity$1(app.common.features.supported_features)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","set","app.common.schema/set",1226590145),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.common.schema","type","app.common.schema/type",-418801773),new cljs.core.Keyword("app.common.features","features","app.common.features/features",-559981229)], null)));
/**
 * Translate a flag to a feature name
 */
app.common.features.flag__GT_feature = (function app$common$features$flag__GT_feature(flag){
var G__52901 = flag;
var G__52901__$1 = (((G__52901 instanceof cljs.core.Keyword))?G__52901.fqn:null);
switch (G__52901__$1) {
case "feature-styles-v2":
return "styles/v2";

break;
case "feature-fdata-objects-map":
return "fdata/objects-map";

break;
case "feature-fdata-pointer-map":
return "fdata/pointer-map";

break;
case "feature-plugins":
return "plugins/runtime";

break;
case "feature-design-tokens":
return "design-tokens/v1";

break;
case "feature-text-editor-v2":
return "text-editor/v2";

break;
case "feature-text-editor-v2-html-paste":
return "text-editor/v2-html-paste";

break;
case "feature-text-editor-wasm":
return "text-editor-wasm/v1";

break;
case "feature-render-wasm":
return "render-wasm/v1";

break;
case "feature-variants":
return "variants/v1";

break;
case "feature-token-input":
return "tokens/numeric-input";

break;
default:
return null;

}
});
/**
 * A helper that translates old feature names to new names
 */
app.common.features.migrate_legacy_features = (function app$common$features$migrate_legacy_features(features__$1){
var G__52905 = (function (){var or__5025__auto__ = features__$1;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var G__52905__$1 = ((cljs.core.contains_QMARK_(features__$1,"storage/pointer-map"))?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__52905,"fdata/pointer-map"),"storage/pointer-map"):G__52905);
var G__52905__$2 = ((cljs.core.contains_QMARK_(features__$1,"storage/objects-map"))?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__52905__$1,"fdata/objects-map"),"storage/objects-map"):G__52905__$1);
if(((cljs.core.contains_QMARK_(features__$1,"internal/geom-record")) || (cljs.core.contains_QMARK_(features__$1,"internal/shape-record")))){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__52905__$2,"fdata/shape-data-type"),"internal/geom-record"),"internal/shape-record");
} else {
return G__52905__$2;
}
});
app.common.features.xf_supported_features = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,app.common.features.supported_features));
app.common.features.xf_remove_ephimeral = cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__52911_SHARP_){
return cuerdas.core.starts_with_QMARK_(p1__52911_SHARP_,"ephimeral/");
}));
app.common.features.xf_flag_to_feature = cljs.core.keep.cljs$core$IFn$_invoke$arity$1(app.common.features.flag__GT_feature);
/**
 * Get the globally enabled features set.
 */
app.common.features.get_enabled_features = (function app$common$features$get_enabled_features(flags){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(app.common.features.default_features,app.common.features.xf_flag_to_feature,flags);
});
/**
 * Get the team enabled features.
 * 
 *   Team features are defined as: all features found on team plus all
 *   no-migration features enabled globally.
 */
app.common.features.get_team_enabled_features = (function app$common$features$get_team_enabled_features(flags,team){
var enabled_features = app.common.features.get_enabled_features(flags);
var team_features = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,app.common.features.xf_remove_ephimeral,new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(team));
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(enabled_features,app.common.features.no_migration_features),team_features);
});
/**
 * Function used for check feature compability between currently enabled
 *   features set on backend with the enabled featured set by the
 *   frontend client
 */
app.common.features.check_client_features_BANG_ = (function app$common$features$check_client_features_BANG_(enabled_features,client_features){
if(cljs.core.set_QMARK_(client_features)){
var not_supported_52937 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(enabled_features,client_features),app.common.features.frontend_only_features),app.common.features.backend_only_features);
if(cljs.core.seq(not_supported_52937)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(""+"client declares no support for '"+(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",not_supported_52937) ?? "")+"' features",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"restriction","restriction",-1380234912),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"feature-not-supported","feature-not-supported",1036203378),new cljs.core.Keyword(null,"feature","feature",27242652),cljs.core.first(not_supported_52937),new cljs.core.Keyword(null,"hint","hint",439639918),""+"client declares no support for '"+(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",not_supported_52937) ?? "")+"' features"], null),null], 0)),null);
} else {
}
} else {
}

return enabled_features;
});
/**
 * Check if a given set of features are supported by this
 *   backend. Usually used for check if imported file features are
 *   supported by the current backend
 */
app.common.features.check_supported_features_BANG_ = (function app$common$features$check_supported_features_BANG_(enabled_features){
var not_supported = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(enabled_features,app.common.features.supported_features);
var temp__5825__auto___52943 = cljs.core.first(not_supported);
if(cljs.core.truth_(temp__5825__auto___52943)){
var not_supported_52944__$1 = temp__5825__auto___52943;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(""+"feature '"+(not_supported_52944__$1 ?? "")+"' not supported on this backend",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"restriction","restriction",-1380234912),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"feature-not-supported","feature-not-supported",1036203378),new cljs.core.Keyword(null,"feature","feature",27242652),not_supported_52944__$1,new cljs.core.Keyword(null,"hint","hint",439639918),""+"feature '"+(not_supported_52944__$1 ?? "")+"' not supported on this backend"], null),null], 0)),null);
} else {
}

return enabled_features;
});
/**
 * Function used for check feature compability between currently
 *   enabled features set on backend with the provided featured set by
 *   the penpot file
 */
app.common.features.check_file_features_BANG_ = (function app$common$features$check_file_features_BANG_(enabled_features,file_features){
var file_features__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,app.common.features.xf_remove_ephimeral,file_features);
var not_supported = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(enabled_features,file_features__$1),app.common.features.no_migration_features);
var temp__5825__auto___52946 = cljs.core.first(not_supported);
if(cljs.core.truth_(temp__5825__auto___52946)){
var not_supported_52947__$1 = temp__5825__auto___52946;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(""+"enabled feature '"+(not_supported_52947__$1 ?? "")+"' not present in file (missing migration)",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"restriction","restriction",-1380234912),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"file-feature-mismatch","file-feature-mismatch",-792098307),new cljs.core.Keyword(null,"feature","feature",27242652),not_supported_52947__$1,new cljs.core.Keyword(null,"hint","hint",439639918),""+"enabled feature '"+(not_supported_52947__$1 ?? "")+"' not present in file (missing migration)"], null),null], 0)),null);
} else {
}

if(cljs.core.contains_QMARK_(file_features__$1,"components/v2")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("components v1 is deprecated",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"restriction","restriction",-1380234912),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"file-in-components-v1","file-in-components-v1",-1067825588),new cljs.core.Keyword(null,"hint","hint",439639918),"components v1 is deprecated"], null),null], 0)),null);
}

var not_supported_52948__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(file_features__$1,enabled_features),app.common.features.backend_only_features),app.common.features.frontend_only_features);
var temp__5825__auto___52949 = cljs.core.first(not_supported_52948__$1);
if(cljs.core.truth_(temp__5825__auto___52949)){
var not_supported_52950__$2 = temp__5825__auto___52949;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(""+"file feature '"+(not_supported_52950__$2 ?? "")+"' not enabled",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"restriction","restriction",-1380234912),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"file-feature-mismatch","file-feature-mismatch",-792098307),new cljs.core.Keyword(null,"feature","feature",27242652),not_supported_52950__$2,new cljs.core.Keyword(null,"hint","hint",439639918),""+"file feature '"+(not_supported_52950__$2 ?? "")+"' not enabled"], null),null], 0)),null);
} else {
}

return enabled_features;
});
app.common.features.check_teams_compatibility_BANG_ = (function app$common$features$check_teams_compatibility_BANG_(p__52926,p__52927){
var map__52928 = p__52926;
var map__52928__$1 = cljs.core.__destructure_map(map__52928);
var source_features = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52928__$1,new cljs.core.Keyword(null,"features","features",-1146962336));
var map__52929 = p__52927;
var map__52929__$1 = cljs.core.__destructure_map(map__52929);
var destination_features = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52929__$1,new cljs.core.Keyword(null,"features","features",-1146962336));
if(cljs.core.contains_QMARK_(source_features,"ephimeral/migration")){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("the source team is in migration process",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"restriction","restriction",-1380234912),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"migration-in-progress","migration-in-progress",800384336),new cljs.core.Keyword(null,"hint","hint",439639918),"the source team is in migration process"], null),null], 0)),null);
} else {
}

if(cljs.core.contains_QMARK_(destination_features,"ephimeral/migration")){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("the destination team is in migration process",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"restriction","restriction",-1380234912),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"migration-in-progress","migration-in-progress",800384336),new cljs.core.Keyword(null,"hint","hint",439639918),"the destination team is in migration process"], null),null], 0)),null);
} else {
}

var not_supported_52951 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2((function (){var or__5025__auto__ = source_features;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),destination_features),app.common.features.no_migration_features),app.common.features.default_features));
if(not_supported_52951){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(""+"the destination team does not have support '"+(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",not_supported_52951) ?? "")+"' features",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"restriction","restriction",-1380234912),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"team-feature-mismatch","team-feature-mismatch",-1423359773),new cljs.core.Keyword(null,"feature","feature",27242652),cljs.core.first(not_supported_52951),new cljs.core.Keyword(null,"hint","hint",439639918),""+"the destination team does not have support '"+(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",not_supported_52951) ?? "")+"' features"], null),null], 0)),null);
} else {
}

var not_supported = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2((function (){var or__5025__auto__ = destination_features;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),source_features),app.common.features.no_migration_features),app.common.features.default_features));
if(not_supported){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(""+"the source team does not have support '"+(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",not_supported) ?? "")+"' features",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"restriction","restriction",-1380234912),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"team-feature-mismatch","team-feature-mismatch",-1423359773),new cljs.core.Keyword(null,"feature","feature",27242652),cljs.core.first(not_supported),new cljs.core.Keyword(null,"hint","hint",439639918),""+"the source team does not have support '"+(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",not_supported) ?? "")+"' features"], null),null], 0)),null);
} else {
return null;
}
});
/**
 * Function used for check feature compability between currently enabled
 *   features set on the application with the provided featured set by
 *   the paste data (frontend clipboard).
 */
app.common.features.check_paste_features_BANG_ = (function app$common$features$check_paste_features_BANG_(enabled_features,paste_features){
var not_supported_52952 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(enabled_features,paste_features),app.common.features.no_migration_features);
if(cljs.core.seq(not_supported_52952)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(""+"expected features '"+(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",not_supported_52952) ?? "")+"' not present in pasted content",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"restriction","restriction",-1380234912),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"missing-features-in-paste-content","missing-features-in-paste-content",1178098165),new cljs.core.Keyword(null,"feature","feature",27242652),cljs.core.first(not_supported_52952),new cljs.core.Keyword(null,"hint","hint",439639918),""+"expected features '"+(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",not_supported_52952) ?? "")+"' not present in pasted content"], null),null], 0)),null);
} else {
}

var not_supported_52955 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(enabled_features,app.common.features.supported_features);
if(cljs.core.seq(not_supported_52955)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(""+"features '"+(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",not_supported_52955) ?? "")+"' not supported in the application",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"restriction","restriction",-1380234912),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"paste-feature-not-supported","paste-feature-not-supported",-204919938),new cljs.core.Keyword(null,"feature","feature",27242652),cljs.core.first(not_supported_52955),new cljs.core.Keyword(null,"hint","hint",439639918),""+"features '"+(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",not_supported_52955) ?? "")+"' not supported in the application"], null),null], 0)),null);
} else {
}

var not_supported = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(paste_features,enabled_features),app.common.features.backend_only_features),app.common.features.frontend_only_features);
if(cljs.core.seq(not_supported)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(""+"paste features '"+(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",not_supported) ?? "")+"' not enabled on the application",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"restriction","restriction",-1380234912),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"paste-feature-not-enabled","paste-feature-not-enabled",163689318),new cljs.core.Keyword(null,"feature","feature",27242652),cljs.core.first(not_supported),new cljs.core.Keyword(null,"hint","hint",439639918),""+"paste features '"+(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",not_supported) ?? "")+"' not enabled on the application"], null),null], 0)),null);
} else {
return null;
}
});

//# sourceMappingURL=app.common.features.js.map
