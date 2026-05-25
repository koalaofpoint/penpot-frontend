import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$$penpot$svgo$default.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.exceptions.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.shapes_builder.js";
import "./app.common.math.js";
import "./app.common.media.js";
import "./app.common.schema.js";
import "./app.common.types.container.js";
import "./app.common.types.fills.js";
import "./app.common.types.shape.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.data.changes.js";
import "./app.main.data.helpers.js";
import "./app.main.data.media.js";
import "./app.main.data.notifications.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.svg_upload.js";
import "./app.main.repo.js";
import "./app.main.store.js";
import "./app.util.http.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
import "./promesa.core.js";
import "./tubax.core.js";
goog.provide('app.main.data.workspace.media');
app.main.data.workspace.media.accept_image_types = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",app.common.media.image_types);
app.main.data.workspace.media.optimize = (function app$main$data$workspace$media$optimize(input){
return shadow.js.shim.module$$penpot$svgo$default.optimize(input,shadow.js.shim.module$$penpot$svgo$default.defaultOptions);
});
app.main.data.workspace.media.svg__GT_clj = (function app$main$data$workspace$media$svg__GT_clj(p__48675){
var vec__48676 = p__48675;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48676,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48676,(1),null);
try{var text__$1 = ((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"frontend-svgo","frontend-svgo",-1259208707)))?app.main.data.workspace.media.optimize(text):text);
var data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$1(text__$1),new cljs.core.Keyword(null,"name","name",1843675177),name);
return beicon.v2.core.of(data);
}catch (e48679){var cause = e48679;
console.error(cause);

return beicon.v2.core.throw$(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(cljs.core.ex_message(cause),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"svg-parser","svg-parser",-257903184),new cljs.core.Keyword(null,"hint","hint",439639918),cljs.core.ex_message(cause)], null),null], 0)),null));
}});
app.main.data.workspace.media.image_uploaded = (function app$main$data$workspace$media$image_uploaded(image,p__48680){
var map__48681 = p__48680;
var map__48681__$1 = cljs.core.__destructure_map(map__48681);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48681__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48681__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
if((typeof app.main.data.workspace.media.image_uploaded_48682 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.media.image_uploaded_48682 = (function (image,p__48680,map__48681,x,y,meta48683){
this.image = image;
this.p__48680 = p__48680;
this.map__48681 = map__48681;
this.x = x;
this.y = y;
this.meta48683 = meta48683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.media.image_uploaded_48682.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.media.image_uploaded_48682.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.media","image-uploaded","app.main.data.workspace.media/image-uploaded",-1620704432);
}));

(app.main.data.workspace.media.image_uploaded_48682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48684,meta48683__$1){
var self__ = this;
var _48684__$1 = this;
return (new app.main.data.workspace.media.image_uploaded_48682(self__.image,self__.p__48680,self__.map__48681,self__.x,self__.y,meta48683__$1));
}));

(app.main.data.workspace.media.image_uploaded_48682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48684){
var self__ = this;
var _48684__$1 = this;
return self__.meta48683;
}));

(app.main.data.workspace.media.image_uploaded_48682.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.media.image_uploaded_48682.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__48685 = self__.image;
var map__48685__$1 = cljs.core.__destructure_map(map__48685);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48685__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48685__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48685__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48685__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var mtype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48685__$1,new cljs.core.Keyword(null,"mtype","mtype",-1724656120));
var fills = app.common.types.fills.create.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(1),new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"mtype","mtype",-1724656120),mtype,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"keep-aspect-ratio","keep-aspect-ratio",-475848727),true], null)], null)], 0));
var shape = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"x","x",2099068185),app.common.math.round.cljs$core$IFn$_invoke$arity$1((self__.x - (width / (2)))),new cljs.core.Keyword(null,"y","y",-1757859776),app.common.math.round.cljs$core$IFn$_invoke$arity$1((self__.y - (height / (2)))),new cljs.core.Keyword(null,"fills","fills",902966780),fills], null);
return beicon.v2.core.of(app.main.data.workspace.shapes.create_and_add_shape(new cljs.core.Keyword(null,"rect","rect",-108902628),self__.x,self__.y,shape));
}));
}

return (new app.main.data.workspace.media.image_uploaded_48682(image,p__48680,map__48681__$1,x,y,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.media.svg_uploaded = (function app$main$data$workspace$media$svg_uploaded(svg_data,file_id,position){
if((typeof app.main.data.workspace.media.svg_uploaded_48687 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.media.svg_uploaded_48687 = (function (svg_data,file_id,position,meta48688){
this.svg_data = svg_data;
this.file_id = file_id;
this.position = position;
this.meta48688 = meta48688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.media.svg_uploaded_48687.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.media.svg_uploaded_48687.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.media","svg-uploaded","app.main.data.workspace.media/svg-uploaded",960276736);
}));

(app.main.data.workspace.media.svg_uploaded_48687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48689,meta48688__$1){
var self__ = this;
var _48689__$1 = this;
return (new app.main.data.workspace.media.svg_uploaded_48687(self__.svg_data,self__.file_id,self__.position,meta48688__$1));
}));

(app.main.data.workspace.media.svg_uploaded_48687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48689){
var self__ = this;
var _48689__$1 = this;
return self__.meta48688;
}));

(app.main.data.workspace.media.svg_uploaded_48687.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.media.svg_uploaded_48687.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.map((function (p1__48686_SHARP_){
return app.main.data.workspace.svg_upload.add_svg_shapes.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.svg_data,new cljs.core.Keyword(null,"image-data","image-data",-377483758),p1__48686_SHARP_),self__.position);
}),app.main.data.workspace.svg_upload.upload_images(self__.svg_data,self__.file_id));
}));
}

return (new app.main.data.workspace.media.svg_uploaded_48687(svg_data,file_id,position,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.media.upload_media_url = (function app$main$data$workspace$media$upload_media_url(name,file_id,url){
return app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-file-media-object-from-url","create-file-media-object-from-url",660909681),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"is-local","is-local",-258841872),true], null));
});
app.main.data.workspace.media.process_uris = (function app$main$data$workspace$media$process_uris(p__48692){
var map__48693 = p__48692;
var map__48693__$1 = cljs.core.__destructure_map(map__48693);
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48693__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48693__$1,new cljs.core.Keyword(null,"local?","local?",-1422786101));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48693__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var uris = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48693__$1,new cljs.core.Keyword(null,"uris","uris",-253706916));
var mtype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48693__$1,new cljs.core.Keyword(null,"mtype","mtype",-1724656120));
var on_image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48693__$1,new cljs.core.Keyword(null,"on-image","on-image",1794160201));
var on_svg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48693__$1,new cljs.core.Keyword(null,"on-svg","on-svg",981409697));
var svg_url_QMARK_ = (function app$main$data$workspace$media$process_uris_$_svg_url_QMARK_(url){
var or__5025__auto__ = (function (){var and__5023__auto__ = mtype;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mtype,"image/svg+xml");
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cuerdas.core.ends_with_QMARK_(url,".svg");
}
});
var upload = (function app$main$data$workspace$media$process_uris_$_upload(uri){
return beicon.v2.core.mapcat((function (p1__48690_SHARP_){
return app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upload-file-media-object","upload-file-media-object",-350555764),p1__48690_SHARP_);
}),beicon.v2.core.map((function (content){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5025__auto__ = name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.data.workspace.svg_upload.extract_name(uri);
}
})(),new cljs.core.Keyword(null,"is-local","is-local",-258841872),local_QMARK_,new cljs.core.Keyword(null,"content","content",15833224),content], null);
}),beicon.v2.core.map(new cljs.core.Keyword(null,"body","body",-2049205669),app.util.http.send_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"no-cors","no-cors",-603212056),new cljs.core.Keyword(null,"response-type","response-type",-1493770458),new cljs.core.Keyword(null,"blob","blob",1636965233)], null)))));
});
var fetch_svg = (function app$main$data$workspace$media$process_uris_$_fetch_svg(name__$1,uri){
return beicon.v2.core.map((function (p1__48691_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var or__5025__auto__ = name__$1;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.data.workspace.svg_upload.extract_name(uri);
}
})(),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(p1__48691_SHARP_)],null));
}),app.util.http.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"no-cors","no-cors",-603212056)], null)));
});
return beicon.v2.core.merge(beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_image,beicon.v2.core.mapcat(upload,beicon.v2.core.filter(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,svg_url_QMARK_),beicon.v2.core.from(uris)))),beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_svg,beicon.v2.core.merge_map(app.main.data.workspace.media.svg__GT_clj,beicon.v2.core.merge_map(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fetch_svg,name),beicon.v2.core.filter(svg_url_QMARK_,beicon.v2.core.from(uris))))));
});
app.main.data.workspace.media.process_blobs = (function app$main$data$workspace$media$process_blobs(p__48696){
var map__48697 = p__48696;
var map__48697__$1 = cljs.core.__destructure_map(map__48697);
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48697__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48697__$1,new cljs.core.Keyword(null,"local?","local?",-1422786101));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48697__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var blobs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48697__$1,new cljs.core.Keyword(null,"blobs","blobs",-1606355916));
var force_media = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48697__$1,new cljs.core.Keyword(null,"force-media","force-media",-1307284609));
var on_image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48697__$1,new cljs.core.Keyword(null,"on-image","on-image",1794160201));
var on_svg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48697__$1,new cljs.core.Keyword(null,"on-svg","on-svg",981409697));
var svg_blob_QMARK_ = (function app$main$data$workspace$media$process_blobs_$_svg_blob_QMARK_(blob){
return ((cljs.core.not(force_media)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(blob.type,"image/svg+xml")));
});
var prepare_blob = (function app$main$data$workspace$media$process_blobs_$_prepare_blob(blob){
var name__$1 = (function (){var or__5025__auto__ = name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(app.main.data.media.file_QMARK_(blob)){
return app.common.media.strip_image_extension(blob.name);
} else {
return "blob";
}
}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"name","name",1843675177),name__$1,new cljs.core.Keyword(null,"is-local","is-local",-258841872),local_QMARK_,new cljs.core.Keyword(null,"content","content",15833224),blob], null);
});
var extract_content = (function app$main$data$workspace$media$process_blobs_$_extract_content(blob){
var name__$1 = (function (){var or__5025__auto__ = name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return blob.name;
}
})();
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(blob.text(),(function (p1__48694_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[name__$1,p1__48694_SHARP_],null));
}));
});
return beicon.v2.core.merge(beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_image,beicon.v2.core.mapcat((function (p1__48695_SHARP_){
return app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upload-file-media-object","upload-file-media-object",-350555764),p1__48695_SHARP_);
}),beicon.v2.core.map(prepare_blob,beicon.v2.core.filter(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,svg_blob_QMARK_),beicon.v2.core.map(app.main.data.media.validate_file,beicon.v2.core.from(blobs)))))),beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_svg,beicon.v2.core.merge_map(app.main.data.workspace.media.svg__GT_clj,beicon.v2.core.merge_map(extract_content,beicon.v2.core.filter(svg_blob_QMARK_,beicon.v2.core.map(app.main.data.media.validate_file,beicon.v2.core.from(blobs)))))));
});
app.main.data.workspace.media.handle_media_error = (function app$main$data$workspace$media$handle_media_error(error,on_error){
if(app.common.exceptions.ex_info_QMARK_(error)){
var G__48701 = cljs.core.ex_data(error);
var G__48702 = on_error;
return (app.main.data.workspace.media.handle_media_error.cljs$core$IFn$_invoke$arity$2 ? app.main.data.workspace.media.handle_media_error.cljs$core$IFn$_invoke$arity$2(G__48701,G__48702) : app.main.data.workspace.media.handle_media_error.call(null,G__48701,G__48702));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error),new cljs.core.Keyword(null,"invalid-svg-file","invalid-svg-file",1057558874))){
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.media-type-not-allowed")));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error),new cljs.core.Keyword(null,"media-type-not-allowed","media-type-not-allowed",77597312))){
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.media-type-not-allowed")));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error),new cljs.core.Keyword(null,"unable-to-access-to-url","unable-to-access-to-url",1056683412))){
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.media-type-not-allowed")));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error),new cljs.core.Keyword(null,"invalid-image","invalid-image",127294201))){
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.media-type-not-allowed")));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error),new cljs.core.Keyword(null,"media-max-file-size-reached","media-max-file-size-reached",-1593957636))){
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.media-too-large")));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error),new cljs.core.Keyword(null,"media-type-mismatch","media-type-mismatch",-608739035))){
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.media-type-mismatch")));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error),new cljs.core.Keyword(null,"unable-to-optimize","unable-to-optimize",-38574044))){
return beicon.v2.core.of(app.main.data.notifications.error(new cljs.core.Keyword(null,"hint","hint",439639918).cljs$core$IFn$_invoke$arity$1(error)));
} else {
if(cljs.core.fn_QMARK_(on_error)){
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(error) : on_error.call(null,error));
} else {
console.error("ERROR",error);

return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.cannot-upload")));

}
}
}
}
}
}
}
}
}
});
app.main.data.workspace.media.schema_COLON_process_media_objects = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"process-media-objects"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"local?","local?",-1422786101),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uris","uris",-253706916),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mtype","mtype",-1724656120),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
app.main.data.workspace.media.process_media_objects = (function app$main$data$workspace$media$process_media_objects(p__48704){
var map__48705 = p__48704;
var map__48705__$1 = cljs.core.__destructure_map(map__48705);
var params = map__48705__$1;
var uris = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48705__$1,new cljs.core.Keyword(null,"uris","uris",-253706916));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48705__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
app.common.data.macros.runtime_assert("expr assert: (and (sm/check schema:process-media-objects params) (or (contains? params :blobs) (contains? params :uris)))",(function (){
var and__5023__auto__ = app.common.schema.check(app.main.data.workspace.media.schema_COLON_process_media_objects,params);
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.contains_QMARK_(params,new cljs.core.Keyword(null,"blobs","blobs",-1606355916))) || (cljs.core.contains_QMARK_(params,new cljs.core.Keyword(null,"uris","uris",-253706916))));
} else {
return and__5023__auto__;
}
}));

if((typeof app.main.data.workspace.media.process_media_objects_48706 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.media.process_media_objects_48706 = (function (p__48704,map__48705,params,uris,on_error,meta48707){
this.p__48704 = p__48704;
this.map__48705 = map__48705;
this.params = params;
this.uris = uris;
this.on_error = on_error;
this.meta48707 = meta48707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.media.process_media_objects_48706.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.media.process_media_objects_48706.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.media","process-media-objects","app.main.data.workspace.media/process-media-objects",-2102281761);
}));

(app.main.data.workspace.media.process_media_objects_48706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48708,meta48707__$1){
var self__ = this;
var _48708__$1 = this;
return (new app.main.data.workspace.media.process_media_objects_48706(self__.p__48704,self__.map__48705,self__.params,self__.uris,self__.on_error,meta48707__$1));
}));

(app.main.data.workspace.media.process_media_objects_48706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48708){
var self__ = this;
var _48708__$1 = this;
return self__.meta48707;
}));

(app.main.data.workspace.media.process_media_objects_48706.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.media.process_media_objects_48706.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("media.loading"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"timeout","timeout",-318625318),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"media-loading","media-loading",1502530571)], null))),beicon.v2.core.finalize((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.hide.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"media-loading","media-loading",1502530571)], 0)));
}),beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (p1__48703_SHARP_){
return app.main.data.workspace.media.handle_media_error(p1__48703_SHARP_,self__.on_error);
}),beicon.v2.core.ignore(((cljs.core.seq(self__.uris))?app.main.data.workspace.media.process_uris(self__.params):app.main.data.workspace.media.process_blobs(self__.params))))));
}));
}

return (new app.main.data.workspace.media.process_media_objects_48706(p__48704,map__48705__$1,params,uris,on_error,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.media.upload_media_workspace = (function app$main$data$workspace$media$upload_media_workspace(p__48711){
var map__48715 = p__48711;
var map__48715__$1 = cljs.core.__destructure_map(map__48715);
var params = map__48715__$1;
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48715__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48715__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"local?","local?",-1422786101),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-image","on-image",1794160201),(function (p1__48709_SHARP_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.media.image_uploaded(p1__48709_SHARP_,position));
}),new cljs.core.Keyword(null,"on-svg","on-svg",981409697),(function (p1__48710_SHARP_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.media.svg_uploaded(p1__48710_SHARP_,file_id,position));
})], 0));
return app.main.data.workspace.media.process_media_objects(params__$1);
});
app.main.data.workspace.media.upload_fill_image = (function app$main$data$workspace$media$upload_fill_image(file,on_success){
if(app.main.data.media.blob_QMARK_(file)){
} else {
throw (new Error(["Assert failed: ","expected a valid blob for `file` param","\n","(dmm/blob? file)"].join('')));
}

if((typeof app.main.data.workspace.media.upload_fill_image_48717 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.media.upload_fill_image_48717 = (function (file,on_success,meta48718){
this.file = file;
this.on_success = on_success;
this.meta48718 = meta48718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.media.upload_fill_image_48717.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.media.upload_fill_image_48717.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.media","upload-fill-image","app.main.data.workspace.media/upload-fill-image",1325282481);
}));

(app.main.data.workspace.media.upload_fill_image_48717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48719,meta48718__$1){
var self__ = this;
var _48719__$1 = this;
return (new app.main.data.workspace.media.upload_fill_image_48717(self__.file,self__.on_success,meta48718__$1));
}));

(app.main.data.workspace.media.upload_fill_image_48717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48719){
var self__ = this;
var _48719__$1 = this;
return self__.meta48718;
}));

(app.main.data.workspace.media.upload_fill_image_48717.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.media.upload_fill_image_48717.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var on_upload_success = (function (image){
(self__.on_success.cljs$core$IFn$_invoke$arity$1 ? self__.on_success.cljs$core$IFn$_invoke$arity$1(image) : self__.on_success.call(null,image));

return app.main.data.media.notify_finished_loading();
});
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var prepare = (function (content){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"name","name",1843675177),((app.main.data.media.file_QMARK_(content))?content.name:app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("media.image")),new cljs.core.Keyword(null,"is-local","is-local",-258841872),false,new cljs.core.Keyword(null,"content","content",15833224),content], null);
});
app.main.data.media.notify_start_loading();

return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.media.handle_media_error,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_upload_success,beicon.v2.core.mapcat((function (p1__48716_SHARP_){
return app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upload-file-media-object","upload-file-media-object",-350555764),p1__48716_SHARP_);
}),beicon.v2.core.map(prepare,beicon.v2.core.map(app.main.data.media.validate_file,beicon.v2.core.of(self__.file))))));
}));
}

return (new app.main.data.workspace.media.upload_fill_image_48717(file,on_success,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Convert svg elements into penpot shapes.
 */
app.main.data.workspace.media.create_shapes_svg = (function app$main$data$workspace$media$create_shapes_svg(file_id,objects,pos,svg_data){
var upload_images = (function (svg_data__$1){
return beicon.v2.core.map((function (p1__48723_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(svg_data__$1,new cljs.core.Keyword(null,"image-data","image-data",-377483758),p1__48723_SHARP_);
}),app.main.data.workspace.svg_upload.upload_images(svg_data__$1,file_id));
});
var process_svg = (function (svg_data__$1){
var vec__48729 = app.common.files.shapes_builder.create_svg_shapes.cljs$core$IFn$_invoke$arity$7(svg_data__$1,pos,objects,app.common.uuid.zero,null,cljs.core.PersistentHashSet.EMPTY,false);
var root_svg_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48729,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48729,(1),null);
var frame_shape = app.common.types.shape.setup_shape(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"fills","fills",902966780),new cljs.core.Keyword(null,"height","height",1025178622)],[new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(root_svg_shape),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(root_svg_shape)),new cljs.core.Keyword(null,"frame","frame",-1711082588),app.common.uuid.zero,app.common.uuid.zero,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos),app.common.types.fills.create(),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(root_svg_shape))]));
var root_svg_shape__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(root_svg_shape,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame_shape),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame_shape)], 0));
var shapes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48724_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(p1__48724_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root_svg_shape__$1));
}),children));
var root_svg_shape__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(root_svg_shape__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879),shapes);
var children__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48725_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48725_SHARP_,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame_shape));
}),children);
var children__$2 = app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_svg_shape__$2], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children__$1], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_shape,children__$2], null);
});
return beicon.v2.core.map(process_svg,upload_images(svg_data));
});
/**
 * Convert a media object that contains a bitmap image into shapes,
 *   one shape of type :rect containing an image fill and one group that contains it.
 */
app.main.data.workspace.media.create_shapes_img = (function app$main$data$workspace$media$create_shapes_img(pos,p__48732){
var map__48733 = p__48732;
var map__48733__$1 = cljs.core.__destructure_map(map__48733);
var media_obj = map__48733__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48733__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48733__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48733__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48733__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var mtype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48733__$1,new cljs.core.Keyword(null,"mtype","mtype",-1724656120));
var frame_shape = app.common.types.shape.setup_shape(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),app.common.uuid.zero,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),app.common.uuid.zero], null));
var img_fills = app.common.types.fills.create.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(1),new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"mtype","mtype",-1724656120),mtype,new cljs.core.Keyword(null,"keep-aspect-ratio","keep-aspect-ratio",-475848727),true], null)], null)], 0));
var img_shape = app.common.types.shape.setup_shape(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"fills","fills",902966780),new cljs.core.Keyword(null,"height","height",1025178622)],[new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos),name,width,new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame_shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame_shape),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos),img_fills,height]));
return beicon.v2.core.of(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_shape,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [img_shape], null)], null));
});
app.main.data.workspace.media.add_shapes_and_component = (function app$main$data$workspace$media$add_shapes_and_component(it,file_data,page,name,p__48735){
var vec__48736 = p__48735;
var shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48736,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48736,(1),null);
var vec__48739 = app.common.types.container.convert_shape_in_component(shape,children,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file_data));
var component_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48739,(0),null);
var updated_shapes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48739,(1),null);
var changes = app.common.files.changes_builder.add_component.cljs$core$IFn$_invoke$arity$7(app.common.files.changes_builder.add_objects.cljs$core$IFn$_invoke$arity$2(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_page(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it),page),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page)),file_data),cljs.core.cons(shape,children)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component_shape),"",name,updated_shapes,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page));
return app.main.data.changes.commit_changes(changes);
});
app.main.data.workspace.media.process_img_component = (function app$main$data$workspace$media$process_img_component(media_obj){
if((typeof app.main.data.workspace.media.process_img_component_48742 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.media.process_img_component_48742 = (function (media_obj,meta48743){
this.media_obj = media_obj;
this.meta48743 = meta48743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.media.process_img_component_48742.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.media.process_img_component_48742.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.media","process-img-component","app.main.data.workspace.media/process-img-component",-1524222794);
}));

(app.main.data.workspace.media.process_img_component_48742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48744,meta48743__$1){
var self__ = this;
var _48744__$1 = this;
return (new app.main.data.workspace.media.process_img_component_48742(self__.media_obj,meta48743__$1));
}));

(app.main.data.workspace.media.process_img_component_48742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48744){
var self__ = this;
var _48744__$1 = this;
return self__.meta48743;
}));

(app.main.data.workspace.media.process_img_component_48742.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.media.process_img_component_48742.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var fdata = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,file_id);
var page = app.main.data.helpers.get_page(fdata,page_id);
var pos = app.main.data.helpers.get_viewport_center(state);
return beicon.v2.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.media.add_shapes_and_component,it__$1,fdata,page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.media_obj)], 0)),app.main.data.workspace.media.create_shapes_img(pos,self__.media_obj));
}));
}

return (new app.main.data.workspace.media.process_img_component_48742(media_obj,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.media.process_svg_component = (function app$main$data$workspace$media$process_svg_component(svg_data){
if((typeof app.main.data.workspace.media.process_svg_component_48746 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.media.process_svg_component_48746 = (function (svg_data,meta48747){
this.svg_data = svg_data;
this.meta48747 = meta48747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.media.process_svg_component_48746.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.media.process_svg_component_48746.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.media","process-svg-component","app.main.data.workspace.media/process-svg-component",797837409);
}));

(app.main.data.workspace.media.process_svg_component_48746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48748,meta48747__$1){
var self__ = this;
var _48748__$1 = this;
return (new app.main.data.workspace.media.process_svg_component_48746(self__.svg_data,meta48747__$1));
}));

(app.main.data.workspace.media.process_svg_component_48746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48748){
var self__ = this;
var _48748__$1 = this;
return self__.meta48747;
}));

(app.main.data.workspace.media.process_svg_component_48746.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.media.process_svg_component_48746.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var fdata = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,file_id);
var page = app.main.data.helpers.get_page(fdata,page_id);
var pos = app.main.data.helpers.get_viewport_center(state);
return beicon.v2.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.media.add_shapes_and_component,it__$1,fdata,page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.svg_data)], 0)),app.main.data.workspace.media.create_shapes_svg(file_id,new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),pos,self__.svg_data));
}));
}

return (new app.main.data.workspace.media.process_svg_component_48746(svg_data,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.media.upload_media_components = (function app$main$data$workspace$media$upload_media_components(params){
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"local?","local?",-1422786101),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-image","on-image",1794160201),(function (p1__48750_SHARP_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.media.process_img_component(p1__48750_SHARP_));
}),new cljs.core.Keyword(null,"on-svg","on-svg",981409697),(function (p1__48751_SHARP_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.media.process_svg_component(p1__48751_SHARP_));
})], 0));
return app.main.data.workspace.media.process_media_objects(params__$1);
});
app.main.data.workspace.media.schema_COLON_clone_media_object = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"clone-media-object"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object-id","object-id",-754527291),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null);
app.main.data.workspace.media.clone_media_object = (function app$main$data$workspace$media$clone_media_object(p__48753){
var map__48754 = p__48753;
var map__48754__$1 = cljs.core.__destructure_map(map__48754);
var params = map__48754__$1;
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48754__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var object_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48754__$1,new cljs.core.Keyword(null,"object-id","object-id",-754527291));
app.common.data.macros.runtime_assert("expr assert: (sm/check schema:clone-media-object params)",(function (){
return app.common.schema.check(app.main.data.workspace.media.schema_COLON_clone_media_object,params);
}));

if((typeof app.main.data.workspace.media.clone_media_objects_48755 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.media.clone_media_objects_48755 = (function (p__48753,map__48754,params,file_id,object_id,meta48756){
this.p__48753 = p__48753;
this.map__48754 = map__48754;
this.params = params;
this.file_id = file_id;
this.object_id = object_id;
this.meta48756 = meta48756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.media.clone_media_objects_48755.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.media.clone_media_objects_48755.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.media","clone-media-objects","app.main.data.workspace.media/clone-media-objects",22347496);
}));

(app.main.data.workspace.media.clone_media_objects_48755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48757,meta48756__$1){
var self__ = this;
var _48757__$1 = this;
return (new app.main.data.workspace.media.clone_media_objects_48755(self__.p__48753,self__.map__48754,self__.params,self__.file_id,self__.object_id,meta48756__$1));
}));

(app.main.data.workspace.media.clone_media_objects_48755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48757){
var self__ = this;
var _48757__$1 = this;
return self__.meta48756;
}));

(app.main.data.workspace.media.clone_media_objects_48755.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.media.clone_media_objects_48755.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__48761 = cljs.core.meta(self__.params);
var map__48761__$1 = cljs.core.__destructure_map(map__48761);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48761__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48761__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),cljs.core.identity);
var params__$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"is-local","is-local",-258841872),true,new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"id","id",-1388402092),self__.object_id], null);
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("media.loading"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"timeout","timeout",-318625318),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"media-loading","media-loading",1502530571)], null))),beicon.v2.core.finalize((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.hide.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"media-loading","media-loading",1502530571)], 0)));
}),beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clone-file-media-object","clone-file-media-object",-1220638245),params__$1)))));
}));
}

return (new app.main.data.workspace.media.clone_media_objects_48755(p__48753,map__48754__$1,params,file_id,object_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.media.create_svg_shape = (function app$main$data$workspace$media$create_svg_shape(id,name,svg_string,position){
if((typeof app.main.data.workspace.media.create_svg_shape_48763 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.media.create_svg_shape_48763 = (function (id,name,svg_string,position,meta48764){
this.id = id;
this.name = name;
this.svg_string = svg_string;
this.position = position;
this.meta48764 = meta48764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.media.create_svg_shape_48763.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.media.create_svg_shape_48763.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.media","create-svg-shape","app.main.data.workspace.media/create-svg-shape",-72398721);
}));

(app.main.data.workspace.media.create_svg_shape_48763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48765,meta48764__$1){
var self__ = this;
var _48765__$1 = this;
return (new app.main.data.workspace.media.create_svg_shape_48763(self__.id,self__.name,self__.svg_string,self__.position,meta48764__$1));
}));

(app.main.data.workspace.media.create_svg_shape_48763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48765){
var self__ = this;
var _48765__$1 = this;
return self__.meta48764;
}));

(app.main.data.workspace.media.create_svg_shape_48763.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.media.create_svg_shape_48763.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.map((function (p1__48762_SHARP_){
return app.main.data.workspace.svg_upload.add_svg_shapes.cljs$core$IFn$_invoke$arity$4(self__.id,p1__48762_SHARP_,self__.position,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore-selection?","ignore-selection?",1748318677),true,new cljs.core.Keyword(null,"change-selection?","change-selection?",1166805125),false], null));
}),beicon.v2.core.take((1),app.main.data.workspace.media.svg__GT_clj(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.name,self__.svg_string], null))));
}));
}

return (new app.main.data.workspace.media.create_svg_shape_48763(id,name,svg_string,position,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.media.create_svg_shape_with_images = (function app$main$data$workspace$media$create_svg_shape_with_images(file_id,id,name,svg_string,position,on_success,on_error){
if((typeof app.main.data.workspace.media.create_svg_shape_with_images_48774 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.media.create_svg_shape_with_images_48774 = (function (file_id,id,name,svg_string,position,on_success,on_error,meta48775){
this.file_id = file_id;
this.id = id;
this.name = name;
this.svg_string = svg_string;
this.position = position;
this.on_success = on_success;
this.on_error = on_error;
this.meta48775 = meta48775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.media.create_svg_shape_with_images_48774.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.media.create_svg_shape_with_images_48774.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.media","create-svg-shape-with-images","app.main.data.workspace.media/create-svg-shape-with-images",-945432051);
}));

(app.main.data.workspace.media.create_svg_shape_with_images_48774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48776,meta48775__$1){
var self__ = this;
var _48776__$1 = this;
return (new app.main.data.workspace.media.create_svg_shape_with_images_48774(self__.file_id,self__.id,self__.name,self__.svg_string,self__.position,self__.on_success,self__.on_error,meta48775__$1));
}));

(app.main.data.workspace.media.create_svg_shape_with_images_48774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48776){
var self__ = this;
var _48776__$1 = this;
return self__.meta48775;
}));

(app.main.data.workspace.media.create_svg_shape_with_images_48774.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.media.create_svg_shape_with_images_48774.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(self__.on_error,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(self__.on_success,beicon.v2.core.map((function (svg_data){
return app.main.data.workspace.svg_upload.add_svg_shapes.cljs$core$IFn$_invoke$arity$4(self__.id,svg_data,self__.position,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore-selection?","ignore-selection?",1748318677),true,new cljs.core.Keyword(null,"change-selection?","change-selection?",1166805125),false], null));
}),beicon.v2.core.mapcat((function (svg_data){
return beicon.v2.core.map((function (p1__48768_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(svg_data,new cljs.core.Keyword(null,"image-data","image-data",-377483758),p1__48768_SHARP_);
}),app.main.data.workspace.svg_upload.upload_images(svg_data,self__.file_id));
}),beicon.v2.core.take((1),app.main.data.workspace.media.svg__GT_clj(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.name,self__.svg_string], null)))))));
}));
}

return (new app.main.data.workspace.media.create_svg_shape_with_images_48774(file_id,id,name,svg_string,position,on_success,on_error,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.media.js.map
