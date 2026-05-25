import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.exceptions.js";
import "./app.common.media.js";
import "./app.main.data.notifications.js";
import "./app.main.store.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./cljs.spec.alpha.js";
import "./cuerdas.core.js";
goog.provide('app.main.data.media');
app.main.data.media.file_QMARK_ = (function app$main$data$media$file_QMARK_(o){
return (o instanceof File);
});
app.main.data.media.blob_QMARK_ = (function app$main$data$media$blob_QMARK_(o){
return (o instanceof Blob);
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.main.data.media","blob","app.main.data.media/blob",-491326055),new cljs.core.Symbol("app.main.data.media","blob?","app.main.data.media/blob?",-950868156,null),app.main.data.media.blob_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.main.data.media","blobs","app.main.data.media/blobs",426101340),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.main.data.media","blob","app.main.data.media/blob",-491326055)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.main.data.media","blob","app.main.data.media/blob",-491326055),new cljs.core.Keyword("app.main.data.media","blob","app.main.data.media/blob",-491326055),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.main.data.media","blob","app.main.data.media/blob",-491326055)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56275){
return cljs.core.coll_QMARK_(G__56275);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.main.data.media","file","app.main.data.media/file",-1955317758),new cljs.core.Symbol("app.main.data.media","file?","app.main.data.media/file?",1402746591,null),app.main.data.media.file_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.main.data.media","files","app.main.data.media/files",1806158910),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.main.data.media","file","app.main.data.media/file",-1955317758)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.main.data.media","file","app.main.data.media/file",-1955317758),new cljs.core.Keyword("app.main.data.media","file","app.main.data.media/file",-1955317758),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.main.data.media","file","app.main.data.media/file",-1955317758)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56276){
return cljs.core.coll_QMARK_(G__56276);
})], null),null));
/**
 * Check that a file obtained with the file javascript API is valid.
 */
app.main.data.media.validate_file = (function app$main$data$media$validate_file(file){
if(cljs.core.contains_QMARK_(app.common.media.image_types,file.type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(""+"media type "+(file.type ?? "")+" is not supported",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"media-type-not-allowed","media-type-not-allowed",77597312),new cljs.core.Keyword(null,"hint","hint",439639918),""+"media type "+(file.type ?? "")+" is not supported"], null),null], 0)),null);
}

return file;
});
app.main.data.media.notify_start_loading = (function app$main$data$media$notify_start_loading(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("media.loading"),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("app.main.data.media","media-upload","app.main.data.media/media-upload",1206899563),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"timeout","timeout",-318625318),null], null)));
});
app.main.data.media.notify_finished_loading = (function app$main$data$media$notify_finished_loading(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.hide.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("app.main.data.media","media-upload","app.main.data.media/media-upload",1206899563)], 0)));
});
app.main.data.media.process_error = (function app$main$data$media$process_error(error){
var msg = (cljs.core.truth_(error.message)?error.message:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error),new cljs.core.Keyword(null,"media-type-not-allowed","media-type-not-allowed",77597312)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.media-type-not-allowed"):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error),new cljs.core.Keyword(null,"media-type-mismatch","media-type-mismatch",-608739035)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.media-type-mismatch"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.unexpected-error")
)));
return beicon.v2.core.of(app.main.data.notifications.error(msg));
});

//# sourceMappingURL=app.main.data.media.js.map
