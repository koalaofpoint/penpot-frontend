import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.exceptions.js";
import "./app.common.logging.js";
import "./app.util.globals.js";
import "./app.util.object.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./promesa.core.js";
goog.provide('app.util.webapi');
app.common.logging.loggers.set("app.util.webapi",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"warn","warn",-436710552)));
app.util.webapi.webkit_datauri_fix_re = /^(data:image\/\w+)(,\s*image\/\w+)?(;base64.*)$/;
app.util.webapi.fix_webkit_data_uri = (function app$util$webapi$fix_webkit_data_uri(duri){
var G__46263 = duri;
if(typeof duri === 'string'){
return cuerdas.core.replace(G__46263,app.util.webapi.webkit_datauri_fix_re,"$1$3");
} else {
return G__46263;
}
});
app.util.webapi.file_reader = (function app$util$webapi$file_reader(f){
return beicon.v2.core.create((function (subs){
var reader = (new FileReader());
app.util.object.set_BANG_(reader,"onload",(function (){
var result = reader.result;
var result__$1 = app.util.webapi.fix_webkit_data_uri(result);
subs.next(result__$1);

return subs.complete();
}));

app.util.object.set_BANG_(reader,"onerror",(function (p1__46265_SHARP_){
return subs.error(p1__46265_SHARP_);
}));

app.util.object.set_BANG_(reader,"onabort",(function (){
return subs.error(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("operation aborted",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"operation-aborted","operation-aborted",-860372392),new cljs.core.Keyword(null,"hint","hint",439639918),"operation aborted"], null),null], 0)),null));
}));

(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(reader) : f.call(null,reader));

return (function (){
return reader.abort();
});
}));
});
app.util.webapi.read_file_as_text = (function app$util$webapi$read_file_as_text(file){
return app.util.webapi.file_reader((function (p1__46281_SHARP_){
return p1__46281_SHARP_.readAsText(file);
}));
});
app.util.webapi.read_file_as_array_buffer = (function app$util$webapi$read_file_as_array_buffer(file){
return app.util.webapi.file_reader((function (p1__46297_SHARP_){
return p1__46297_SHARP_.readAsArrayBuffer(file);
}));
});
app.util.webapi.read_file_as_data_url = (function app$util$webapi$read_file_as_data_url(file){
return app.util.webapi.file_reader((function (p1__46305_SHARP_){
return p1__46305_SHARP_.readAsDataURL(file);
}));
});
app.util.webapi.blob_QMARK_ = (function app$util$webapi$blob_QMARK_(v){
return (v instanceof Blob);
});
/**
 * Create a blob from content.
 */
app.util.webapi.create_blob = (function app$util$webapi$create_blob(var_args){
var G__46328 = arguments.length;
switch (G__46328) {
case 1:
return app.util.webapi.create_blob.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.webapi.create_blob.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.webapi.create_blob.cljs$core$IFn$_invoke$arity$1 = (function (content){
return app.util.webapi.create_blob.cljs$core$IFn$_invoke$arity$2(content,"application/octet-stream");
}));

(app.util.webapi.create_blob.cljs$core$IFn$_invoke$arity$2 = (function (content,mtype){
return (new Blob([content],({"type": mtype})));
}));

(app.util.webapi.create_blob.cljs$lang$maxFixedArity = 2);

app.util.webapi.create_blob_from_canvas = (function app$util$webapi$create_blob_from_canvas(var_args){
var G__46337 = arguments.length;
switch (G__46337) {
case 1:
return app.util.webapi.create_blob_from_canvas.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.webapi.create_blob_from_canvas.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.webapi.create_blob_from_canvas.cljs$core$IFn$_invoke$arity$1 = (function (canvas){
return app.util.webapi.create_blob_from_canvas.cljs$core$IFn$_invoke$arity$2(canvas,null);
}));

(app.util.webapi.create_blob_from_canvas.cljs$core$IFn$_invoke$arity$2 = (function (canvas,options){
if(app.util.object.in_QMARK_(canvas,"convertToBlob")){
return canvas.convertToBlob(options);
} else {
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,_){
return (function (p1__46334_SHARP_){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p1__46334_SHARP_) : resolve.call(null,p1__46334_SHARP_));
}).toBlob(canvas,options);
}));
}
}));

(app.util.webapi.create_blob_from_canvas.cljs$lang$maxFixedArity = 2);

app.util.webapi.revoke_uri = (function app$util$webapi$revoke_uri(url){
if(cuerdas.core.starts_with_QMARK_(url,"blob:")){
return URL.revokeObjectURL(url);
} else {
return null;
}
});
/**
 * Create a url from blob.
 */
app.util.webapi.create_uri = (function app$util$webapi$create_uri(b){
if(app.util.webapi.blob_QMARK_(b)){
} else {
throw (new Error(["Assert failed: ","invalid arguments","\n","(blob? b)"].join('')));
}

return URL.createObjectURL(b);
});
app.util.webapi.data_uri_QMARK_ = (function app$util$webapi$data_uri_QMARK_(s){
return cuerdas.core.starts_with_QMARK_(s,"data:");
});
app.util.webapi.data_uri__GT_blob = (function app$util$webapi$data_uri__GT_blob(data_uri){
var vec__46338 = cuerdas.core.split.cljs$core$IFn$_invoke$arity$3(data_uri,";base64,",(2));
var mtype = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46338,(0),null);
var b64_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46338,(1),null);
var mtype__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(mtype,(cuerdas.core.index_of.cljs$core$IFn$_invoke$arity$2(mtype,":") + (1)));
var decoded = window.atob(b64_data);
var size = decoded.length;
var content = (new Uint8Array(size));
var i_46380 = (0);
while(true){
if((i_46380 < size)){
(content[i_46380] = decoded.charCodeAt(i_46380));

var G__46381 = (i_46380 + (1));
i_46380 = G__46381;
continue;
} else {
}
break;
}

return app.util.webapi.create_blob.cljs$core$IFn$_invoke$arity$2(content,mtype__$1);
});
app.util.webapi.get_current_selected_text = (function app$util$webapi$get_current_selected_text(){
return window.getSelection().toString();
});
app.util.webapi.create_canvas_element = (function app$util$webapi$create_canvas_element(width,height){
var canvas = document.createElement("canvas");
app.util.object.set_BANG_(canvas,"width",width);

app.util.object.set_BANG_(canvas,"height",height);

return canvas;
});
app.util.webapi.create_offscreen_canvas = (function app$util$webapi$create_offscreen_canvas(width,height){
if(app.util.object.in_QMARK_(window,"OffscreenCanvas")){
return (new OffscreenCanvas(width,height));
} else {
return app.util.webapi.create_canvas_element(width,height);
}
});
app.util.webapi.create_image_bitmap = (function app$util$webapi$create_image_bitmap(var_args){
var G__46342 = arguments.length;
switch (G__46342) {
case 1:
return app.util.webapi.create_image_bitmap.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.webapi.create_image_bitmap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.webapi.create_image_bitmap.cljs$core$IFn$_invoke$arity$1 = (function (image){
return createImageBitmap(image);
}));

(app.util.webapi.create_image_bitmap.cljs$core$IFn$_invoke$arity$2 = (function (image,options){
return createImageBitmap(image,options);
}));

(app.util.webapi.create_image_bitmap.cljs$lang$maxFixedArity = 2);

app.util.webapi.create_image = (function app$util$webapi$create_image(var_args){
var G__46344 = arguments.length;
switch (G__46344) {
case 1:
return app.util.webapi.create_image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return app.util.webapi.create_image.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.webapi.create_image.cljs$core$IFn$_invoke$arity$1 = (function (src){
return app.util.webapi.create_image.cljs$core$IFn$_invoke$arity$3(src,null,null);
}));

(app.util.webapi.create_image.cljs$core$IFn$_invoke$arity$3 = (function (src,width,height){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
var img = document.createElement("img");
if((width == null)){
} else {
app.util.object.set_BANG_(img,"width",width);
}

if((height == null)){
} else {
app.util.object.set_BANG_(img,"height",height);
}

app.util.object.set_BANG_(img,"src",src);

app.util.object.set_BANG_(img,"onload",(function (){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(img) : resolve.call(null,img));
}));

return app.util.object.set_BANG_(img,"onerror",reject);
}));
}));

(app.util.webapi.create_image.cljs$lang$maxFixedArity = 3);

app.util.webapi.create_image_bitmap_with_workaround = (function app$util$webapi$create_image_bitmap_with_workaround(var_args){
var G__46346 = arguments.length;
switch (G__46346) {
case 1:
return app.util.webapi.create_image_bitmap_with_workaround.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.webapi.create_image_bitmap_with_workaround.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.webapi.create_image_bitmap_with_workaround.cljs$core$IFn$_invoke$arity$1 = (function (image){
return app.util.webapi.create_image_bitmap_with_workaround.cljs$core$IFn$_invoke$arity$2(image,null);
}));

(app.util.webapi.create_image_bitmap_with_workaround.cljs$core$IFn$_invoke$arity$2 = (function (image,options){
var offscreen_canvas = app.util.webapi.create_offscreen_canvas(image.width,image.height);
var offscreen_context = offscreen_canvas.getContext("2d");
offscreen_context.drawImage(image,(0),(0));

return app.util.webapi.create_image_bitmap.cljs$core$IFn$_invoke$arity$2(offscreen_canvas,options);
}));

(app.util.webapi.create_image_bitmap_with_workaround.cljs$lang$maxFixedArity = 2);

app.util.webapi.request_fullscreen = (function app$util$webapi$request_fullscreen(el){
if(app.util.object.in_QMARK_(el,"requestFullscreen")){
return el.requestFullscreen();
} else {
if(app.util.object.in_QMARK_(el,"webkitRequestFullscreen")){
return el.webkitRequestFullscreen();
} else {
if(app.common.logging.enabled_QMARK_("app.util.webapi",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Seems like the current browser does not support fullscreen api."], null)], null);
}),null)),null,null,"app.util.webapi",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}


return false;

}
}
});
app.util.webapi.exit_fullscreen = (function app$util$webapi$exit_fullscreen(){
if(app.util.object.in_QMARK_(document,"exitFullscreen")){
return document.exitFullscreen();
} else {
if(app.util.object.in_QMARK_(document,"webkitExitFullscreen")){
return document.webkitExitFullscreen();
} else {
if(app.common.logging.enabled_QMARK_("app.util.webapi",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Seems like the current browser does not support fullscreen api."], null)], null);
}),null)),null,null,"app.util.webapi",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}


return false;

}
}
});
app.util.webapi.observe_resize = (function app$util$webapi$observe_resize(node){
return beicon.v2.core.create((function (subs){
var obs = (new ResizeObserver((function (entries,_){
return subs.next(entries);
})));
obs.observe(node);

return (function (){
return obs.disconnect();
});
}));
});
app.util.webapi.empty_png_size_STAR_ = (function app$util$webapi$empty_png_size_STAR_(width,height){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
try{var canvas = document.createElement("canvas");
var _ = (canvas.width = width);
var ___$1 = (canvas.height = height);
var ___$2 = (canvas.background = "white");
var canvas_context = canvas.getContext("2d");
canvas_context.fillRect((0),(0),width,height);

return canvas.toBlob((function (blob){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (result){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(result) : resolve.call(null,result));
}),beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (err){
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(err) : reject.call(null,err));
}),app.util.webapi.read_file_as_data_url(blob)));
}));
}catch (e46347){var e = e46347;
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(e) : reject.call(null,e));
}}));
});
app.util.webapi.empty_png_size = cljs.core.memoize(app.util.webapi.empty_png_size_STAR_);
app.util.webapi.create_range = (function app$util$webapi$create_range(){
var document__$1 = app.util.globals.document;
return document__$1.createRange();
});
app.util.webapi.select_contents_BANG_ = (function app$util$webapi$select_contents_BANG_(range,node){
if(cljs.core.truth_((function (){var and__5023__auto__ = range;
if(cljs.core.truth_(and__5023__auto__)){
return node;
} else {
return and__5023__auto__;
}
})())){
range.selectNodeContents(node);
} else {
}

return range;
});
app.util.webapi.select_all_children_BANG_ = (function app$util$webapi$select_all_children_BANG_(selection,node){
return selection.selectAllChildren(node);
});
/**
 * Only returns valid selection
 */
app.util.webapi.get_selection = (function app$util$webapi$get_selection(){
var temp__5825__auto__ = app.util.globals.document;
if(cljs.core.truth_(temp__5825__auto__)){
var document__$1 = temp__5825__auto__;
var selection = document__$1.getSelection();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selection.type,"None")){
return selection;
} else {
return null;
}
} else {
return null;
}
});
app.util.webapi.get_anchor_node = (function app$util$webapi$get_anchor_node(selection){
if(cljs.core.truth_(selection)){
return selection.anchorNode;
} else {
return null;
}
});
app.util.webapi.get_anchor_offset = (function app$util$webapi$get_anchor_offset(selection){
if(cljs.core.truth_(selection)){
return selection.anchorOffset;
} else {
return null;
}
});
app.util.webapi.remove_all_ranges_BANG_ = (function app$util$webapi$remove_all_ranges_BANG_(sel){
sel.removeAllRanges();

return sel;
});
app.util.webapi.add_range_BANG_ = (function app$util$webapi$add_range_BANG_(sel,range){
sel.addRange(range);

return sel;
});
app.util.webapi.collapse_end_BANG_ = (function app$util$webapi$collapse_end_BANG_(sel){
sel.collapseToEnd();

return sel;
});
app.util.webapi.set_cursor_BANG_ = (function app$util$webapi$set_cursor_BANG_(var_args){
var G__46353 = arguments.length;
switch (G__46353) {
case 1:
return app.util.webapi.set_cursor_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.webapi.set_cursor_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.webapi.set_cursor_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (node){
return app.util.webapi.set_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(node,(0));
}));

(app.util.webapi.set_cursor_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (node,offset){
if(cljs.core.truth_(node)){
var child_nodes = node.childNodes;
var sel = app.util.webapi.get_selection();
var r = app.util.webapi.create_range();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child_nodes.length,(0))){
r.setStart(node,offset);

r.setEnd(node,offset);

app.util.webapi.remove_all_ranges_BANG_(sel);

return app.util.webapi.add_range_BANG_(sel,r);
} else {
var text_node = (child_nodes[(0)]);
r.setStart(text_node,offset);

r.setEnd(text_node,offset);

app.util.webapi.remove_all_ranges_BANG_(sel);

return app.util.webapi.add_range_BANG_(sel,r);
}
} else {
return null;
}
}));

(app.util.webapi.set_cursor_BANG_.cljs$lang$maxFixedArity = 2);

app.util.webapi.set_cursor_before_BANG_ = (function app$util$webapi$set_cursor_before_BANG_(node){
return app.util.webapi.set_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(node,(1));
});
app.util.webapi.set_cursor_after_BANG_ = (function app$util$webapi$set_cursor_after_BANG_(node){
var child_nodes = node.childNodes;
var first_child = (child_nodes[(0)]);
var offset = (cljs.core.truth_(first_child)?first_child.length:(0));
return app.util.webapi.set_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(node,offset);
});
app.util.webapi.get_range = (function app$util$webapi$get_range(selection,idx){
return selection.getRangeAt(idx);
});
app.util.webapi.range_start_container = (function app$util$webapi$range_start_container(range){
if(cljs.core.truth_(range)){
return range.startContainer;
} else {
return null;
}
});
app.util.webapi.range_start_offset = (function app$util$webapi$range_start_offset(range){
if(cljs.core.truth_(range)){
return range.startOffset;
} else {
return null;
}
});
app.util.webapi.range_end_container = (function app$util$webapi$range_end_container(range){
if(cljs.core.truth_(range)){
return range.endContainer;
} else {
return null;
}
});
app.util.webapi.range_end_offset = (function app$util$webapi$range_end_offset(range){
if(cljs.core.truth_(range)){
return range.endOffset;
} else {
return null;
}
});

//# sourceMappingURL=app.util.webapi.js.map
