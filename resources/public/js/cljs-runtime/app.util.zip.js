import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$$zip_js$zip.js";
import "./app.common.exceptions.js";
import "./app.util.array.js";
import "./promesa.core.js";
goog.provide('app.util.zip');
app.util.zip.reader = (function app$util$zip$reader(blob){
if((blob instanceof Blob)){
var breader = (new shadow.js.shim.module$$zip_js$zip.BlobReader(blob));
return (new shadow.js.shim.module$$zip_js$zip.ZipReader(breader));
} else {
if((blob instanceof Uint8Array)){
var breader = (new shadow.js.shim.module$$zip_js$zip.Uint8ArrayReader(blob));
var zreader = (new shadow.js.shim.module$$zip_js$zip.ZipReader(breader,({"useWebWorkers": false})));
return zreader;
} else {
if((blob instanceof ArrayBuffer)){
var G__79503 = (new Uint8Array(blob));
return (app.util.zip.reader.cljs$core$IFn$_invoke$arity$1 ? app.util.zip.reader.cljs$core$IFn$_invoke$arity$1(G__79503) : app.util.zip.reader.call(null,G__79503));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("invalid data received for zip/reader",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.Keyword(null,"coce","coce",-1135173234),new cljs.core.Keyword(null,"invalid-type","invalid-type",-1552570890),new cljs.core.Keyword(null,"hint","hint",439639918),"invalid data received for zip/reader"], null),null], 0)),null);

}
}
}
});
app.util.zip.blob_writer = (function app$util$zip$blob_writer(var_args){
var args__5755__auto__ = [];
var len__5749__auto___79511 = arguments.length;
var i__5750__auto___79512 = (0);
while(true){
if((i__5750__auto___79512 < len__5749__auto___79511)){
args__5755__auto__.push((arguments[i__5750__auto___79512]));

var G__79513 = (i__5750__auto___79512 + (1));
i__5750__auto___79512 = G__79513;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.util.zip.blob_writer.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.util.zip.blob_writer.cljs$core$IFn$_invoke$arity$variadic = (function (p__79505){
var map__79506 = p__79505;
var map__79506__$1 = cljs.core.__destructure_map(map__79506);
var mtype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79506__$1,new cljs.core.Keyword(null,"mtype","mtype",-1724656120));
return (new shadow.js.shim.module$$zip_js$zip.BlobWriter((function (){var or__5025__auto__ = mtype;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "application/octet-stream";
}
})()));
}));

(app.util.zip.blob_writer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.util.zip.blob_writer.cljs$lang$applyTo = (function (seq79504){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq79504));
}));

app.util.zip.bytes_writer = (function app$util$zip$bytes_writer(){
return (new shadow.js.shim.module$$zip_js$zip.Uint8ArrayWriter());
});
app.util.zip.writer = (function app$util$zip$writer(stream_writer){
return (new shadow.js.shim.module$$zip_js$zip.ZipWriter(stream_writer));
});
app.util.zip.add = (function app$util$zip$add(writer,path,content){
if((writer instanceof shadow.js.shim.module$$zip_js$zip.ZipWriter)){
} else {
throw (new Error("Assert failed: (instance? zip/ZipWriter writer)"));
}

if((content instanceof Uint8Array)){
return writer.add(path,(new shadow.js.shim.module$$zip_js$zip.Uint8ArrayReader(content)));
} else {
if((content instanceof ArrayBuffer)){
return writer.add(path,(new shadow.js.shim.module$$zip_js$zip.Uint8ArrayReader((new Uint8Array(content)))));
} else {
if((content instanceof Blob)){
return writer.add(path,(new shadow.js.shim.module$$zip_js$zip.BlobReader(content)));
} else {
if(typeof content === 'string'){
return writer.add(path,(new shadow.js.shim.module$$zip_js$zip.TextReader(content)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("invalid data received for zip/add fn",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"invalid-type","invalid-type",-1552570890),new cljs.core.Keyword(null,"hint","hint",439639918),"invalid data received for zip/add fn"], null),null], 0)),null);

}
}
}
}
});
app.util.zip.get_entry = (function app$util$zip$get_entry(reader,path){
if((reader instanceof shadow.js.shim.module$$zip_js$zip.ZipReader)){
} else {
throw (new Error("Assert failed: (instance? zip/ZipReader reader)"));
}

return promesa.core.fmap.cljs$core$IFn$_invoke$arity$2((function (entries){
return app.util.array.find((function (p1__79507_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__79507_SHARP_.filename,path);
}),entries);
}),reader.getEntries());
});
app.util.zip.get_entries = (function app$util$zip$get_entries(reader){
if((reader instanceof shadow.js.shim.module$$zip_js$zip.ZipReader)){
} else {
throw (new Error("Assert failed: (instance? zip/ZipReader reader)"));
}

return reader.getEntries();
});
app.util.zip.read_as_text = (function app$util$zip$read_as_text(entry){
var writer = (new shadow.js.shim.module$$zip_js$zip.TextWriter());
return entry.getData(writer);
});
app.util.zip.close = (function app$util$zip$close(closeable){
if((((closeable instanceof shadow.js.shim.module$$zip_js$zip.ZipReader)) || ((closeable instanceof shadow.js.shim.module$$zip_js$zip.ZipWriter)))){
} else {
throw (new Error("Assert failed: (or (instance? zip/ZipReader closeable) (instance? zip/ZipWriter closeable))"));
}

return closeable.close();
});

//# sourceMappingURL=app.util.zip.js.map
