import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.uuid.js";
import "./cuerdas.core.js";
goog.provide('app.common.thumbnails');
/**
 * Returns ids formatted as a string (object-id)
 */
app.common.thumbnails.fmt_object_id = (function app$common$thumbnails$fmt_object_id(var_args){
var G__68042 = arguments.length;
switch (G__68042) {
case 1:
return app.common.thumbnails.fmt_object_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return app.common.thumbnails.fmt_object_id.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.thumbnails.fmt_object_id.cljs$core$IFn$_invoke$arity$1 = (function (object){
return app.common.thumbnails.fmt_object_id.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(object),new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(object),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(object),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(object));
}));

(app.common.thumbnails.fmt_object_id.cljs$core$IFn$_invoke$arity$4 = (function (file_id,page_id,frame_id,tag){
return ""+(file_id ?? "")+"/"+(page_id ?? "")+"/"+(frame_id ?? "")+"/"+(tag ?? "");
}));

(app.common.thumbnails.fmt_object_id.cljs$lang$maxFixedArity = 4);

/**
 * Returns ids formatted as a string (file-id)
 */
app.common.thumbnails.file_id_QMARK_ = (function app$common$thumbnails$file_id_QMARK_(object_id,file_id){
return cuerdas.core.starts_with_QMARK_(object_id,""+(file_id ?? "")+"/");
});
app.common.thumbnails.parse_object_id = (function app$common$thumbnails$parse_object_id(object_id){
var vec__68043 = cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(object_id,"/");
var file_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68043,(0),null);
var page_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68043,(1),null);
var frame_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68043,(2),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68043,(3),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),cljs.core.parse_uuid(file_id),new cljs.core.Keyword(null,"page-id","page-id",-872941168),cljs.core.parse_uuid(page_id),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),cljs.core.parse_uuid(frame_id),new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], null);
});
app.common.thumbnails.get_file_id = (function app$common$thumbnails$get_file_id(object_id){
return app.common.uuid.uuid(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(object_id,(0),cuerdas.core.index_of.cljs$core$IFn$_invoke$arity$2(object_id,"/")));
});

//# sourceMappingURL=app.common.thumbnails.js.map
