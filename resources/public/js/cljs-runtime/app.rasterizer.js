import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.exceptions.js";
import "./app.common.logging.js";
import "./app.config.js";
import "./app.util.dom.js";
import "./app.util.http.js";
import "./app.util.object.js";
import "./app.util.webapi.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
goog.provide('app.rasterizer');
app.common.logging.loggers.set("app.rasterizer",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"info","info",-317069002)));
if((typeof app !== 'undefined') && (typeof app.rasterizer !== 'undefined') && (typeof app.rasterizer.data_uri_cache !== 'undefined')){
} else {
app.rasterizer.data_uri_cache = (new Map());
}
if((typeof app !== 'undefined') && (typeof app.rasterizer !== 'undefined') && (typeof app.rasterizer.parent_origin !== 'undefined')){
} else {
app.rasterizer.parent_origin = ""+(app.config.public_uri ?? "");
}
app.rasterizer.get_document_element = (function app$rasterizer$get_document_element(svg){
return svg.documentElement;
});
app.rasterizer.create_image = (function app$rasterizer$create_image(uri){
return beicon.v2.core.create((function (subs){
var image = (new Image());
app.util.object.set_BANG_(image,"onload",(function (){
subs.next(image);

return subs.complete();
}));

app.util.object.set_BANG_(image,"crossOrigin","anonymous");

app.util.object.set_BANG_(image,"onerror",(function (p1__75347_SHARP_){
return subs.error(p1__75347_SHARP_);
}));

app.util.object.set_BANG_(image,"onabort",(function (){
return subs.error(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("operation aborted",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"operation-aborted","operation-aborted",-860372392),new cljs.core.Keyword(null,"hint","hint",439639918),"operation aborted"], null),null], 0)),null));
}));

app.util.object.set_BANG_(image,"src",uri);

return (function (){
app.util.object.set_BANG_(image,"src","");

app.util.object.set_BANG_(image,"onload",null);

app.util.object.set_BANG_(image,"onerror",null);

return app.util.object.set_BANG_(image,"onabort",null);
});
}));
});
/**
 * Returns the adjusted size of an SVG.
 */
app.rasterizer.svg_get_adjusted_size = (function app$rasterizer$svg_get_adjusted_size(width,height,max){
var ratio = (width / height);
if((width < height)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [max,(max * ((1) / ratio))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(max * ratio),max], null);
}
});
/**
 * Returns the size of an SVG from its viewbox.
 */
app.rasterizer.svg_get_size_from_viewbox = (function app$rasterizer$svg_get_size_from_viewbox(svg,max){
var doc = app.rasterizer.get_document_element(svg);
var vbox = app.util.dom.get_attribute(doc,"viewBox");
if(typeof vbox === 'string'){
var vec__75350 = cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(vbox,/\s+/);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75350,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75350,(1),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75350,(2),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75350,(3),null);
var width__$1 = app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$2(width,(0));
var height__$1 = app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$2(height,(0));
return app.rasterizer.svg_get_adjusted_size(width__$1,height__$1,max);
} else {
return null;
}
});
/**
 * Returns the size of an SVG from its intrinsic size.
 */
app.rasterizer.svg_get_size_from_intrinsic_size = (function app$rasterizer$svg_get_size_from_intrinsic_size(svg,max){
var doc = app.rasterizer.get_document_element(svg);
var width = app.util.dom.get_attribute(doc,"width");
var height = app.util.dom.get_attribute(doc,"height");
var width__$1 = app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$2(width,(0));
var height__$1 = app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$2(height,(0));
return app.rasterizer.svg_get_adjusted_size(width__$1,height__$1,max);
});
/**
 * Returns true if the SVG has an intrinsic size.
 */
app.rasterizer.svg_has_intrinsic_size_QMARK_ = (function app$rasterizer$svg_has_intrinsic_size_QMARK_(svg){
var doc = app.rasterizer.get_document_element(svg);
var width = app.util.dom.get_attribute(doc,"width");
var height = app.util.dom.get_attribute(doc,"height");
return app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$2(width,height);
});
app.rasterizer.svg_get_size = (function app$rasterizer$svg_get_size(svg,max){
if(app.rasterizer.svg_has_intrinsic_size_QMARK_(svg)){
return app.rasterizer.svg_get_size_from_intrinsic_size(svg,max);
} else {
return app.rasterizer.svg_get_size_from_viewbox(svg,max);
}
});
/**
 * Sets the intrinsic size of an SVG to the given max size.
 */
app.rasterizer.svg_set_intrinsic_size_BANG_ = (function app$rasterizer$svg_set_intrinsic_size_BANG_(svg,max){
var doc_75368 = app.rasterizer.get_document_element(svg);
var vec__75354_75369 = app.rasterizer.svg_get_size(svg,max);
var w_75370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75354_75369,(0),null);
var h_75371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75354_75369,(1),null);
app.util.dom.set_attribute_BANG_(doc_75368,"width",""+(w_75370 ?? ""));

app.util.dom.set_attribute_BANG_(doc_75368,"height",""+(h_75371 ?? ""));

return svg;
});
/**
 * Fetches a URL as a Data URI.
 */
app.rasterizer.fetch_as_data_uri = (function app$rasterizer$fetch_as_data_uri(uri){
if(cljs.core.truth_(app.rasterizer.data_uri_cache.has(uri))){
var blob = app.rasterizer.data_uri_cache.get(uri);
return beicon.v2.core.from(blob.text());
} else {
return beicon.v2.core.mapcat((function (response){
if((response == null)){
return beicon.v2.core.of(uri);
} else {
return beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (data_uri){
return app.rasterizer.data_uri_cache.set(uri,app.util.webapi.create_blob.cljs$core$IFn$_invoke$arity$2(data_uri,"text/plain"));
}),beicon.v2.core.mapcat(app.util.webapi.read_file_as_data_url,beicon.v2.core.of(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response))));
}
}),beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (cause){
if(app.common.logging.enabled_QMARK_("app.rasterizer",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"fetching data uri"], null)], null);
}),null)),cause,null,"app.rasterizer",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}


return beicon.v2.core.of(null);
}),app.util.http.send_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"response-type","response-type",-1493770458),new cljs.core.Keyword(null,"blob","blob",1636965233),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"cors","cors",1066181665),new cljs.core.Keyword(null,"omit-default-headers","omit-default-headers",-2108409502),true], null))));
}
});
/**
 * Updates an image in an SVG to a Data URI.
 */
app.rasterizer.svg_update_image_BANG_ = (function app$rasterizer$svg_update_image_BANG_(image){
var temp__5823__auto__ = app.util.dom.get_attribute(image,"href");
if(cljs.core.truth_(temp__5823__auto__)){
var href = temp__5823__auto__;
if(cuerdas.core.starts_with_QMARK_(href,"data:")){
return beicon.v2.core.of(image);
} else {
return beicon.v2.core.map((function (url){
app.util.dom.set_attribute_BANG_(image,"href",url);

return image;
}),app.rasterizer.fetch_as_data_uri(href));
}
} else {
return beicon.v2.core.empty();
}
});
/**
 * Resolves all images in an SVG to Data URIs.
 */
app.rasterizer.svg_resolve_images_BANG_ = (function app$rasterizer$svg_resolve_images_BANG_(svg){
return beicon.v2.core.ignore(beicon.v2.core.mapcat(app.rasterizer.svg_update_image_BANG_,beicon.v2.core.from(app.util.dom.query_all.cljs$core$IFn$_invoke$arity$2(svg,"image"))));
});
/**
 * Adds a <style> node to an SVG.
 */
app.rasterizer.svg_add_style_BANG_ = (function app$rasterizer$svg_add_style_BANG_(svg,styles){
var doc = app.rasterizer.get_document_element(svg);
var style = app.util.dom.create_element.cljs$core$IFn$_invoke$arity$3(svg,"http://www.w3.org/2000/svg","style");
app.util.dom.append_child_BANG_(style,app.util.dom.create_text.cljs$core$IFn$_invoke$arity$2(svg,styles));

return app.util.dom.append_child_BANG_(doc,style);
});
/**
 * Resolves all external resources in an SVG to Data URIs.
 */
app.rasterizer.svg_resolve_external_resources = (function app$rasterizer$svg_resolve_external_resources(styles){
return beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3((function (styles__$1,p__75357){
var vec__75358 = p__75357;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75358,(0),null);
var uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75358,(1),null);
return cuerdas.core.replace(styles__$1,url,uri);
}),styles,beicon.v2.core.mapcat((function (url){
return beicon.v2.core.map((function (uri){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,uri], null);
}),app.rasterizer.fetch_as_data_uri(url));
}),beicon.v2.core.map(cljs.core.second,beicon.v2.core.from(cljs.core.re_seq(/url\((https?:\/\/[^)]+)\)/,styles)))));
});
/**
 * Resolves all fonts in an SVG to Data URIs.
 */
app.rasterizer.svg_resolve_styles_BANG_ = (function app$rasterizer$svg_resolve_styles_BANG_(svg,styles){
return beicon.v2.core.ignore(beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.rasterizer.svg_add_style_BANG_,svg),app.rasterizer.svg_resolve_external_resources(styles)));
});
/**
 * Resolves all inline styles in an SVG to Data URIs.
 */
app.rasterizer.svg_resolve_inline_styles_BANG_ = (function app$rasterizer$svg_resolve_inline_styles_BANG_(svg){
return beicon.v2.core.ignore(beicon.v2.core.mapcat((function (node){
var styles = app.util.dom.get_attribute(node,"style");
return beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (styles__$1){
return app.util.dom.set_attribute_BANG_(node,"style",styles__$1);
}),app.rasterizer.svg_resolve_external_resources(styles));
}),beicon.v2.core.from(app.util.dom.query_all.cljs$core$IFn$_invoke$arity$2(svg,"[style]"))));
});
/**
 * Resolves all style elements in an SVG to Data URIs.
 */
app.rasterizer.svg_resolve_style_elements_BANG_ = (function app$rasterizer$svg_resolve_style_elements_BANG_(svg){
return beicon.v2.core.ignore(beicon.v2.core.mapcat((function (node){
var styles = app.util.dom.get_text(node);
return beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (styles__$1){
return app.util.dom.set_text_BANG_(node,styles__$1);
}),app.rasterizer.svg_resolve_external_resources(styles));
}),beicon.v2.core.from(app.util.dom.query_all.cljs$core$IFn$_invoke$arity$2(svg,"style"))));
});
/**
 * Resolves all images and fonts in an SVG to Data URIs.
 */
app.rasterizer.svg_resolve_all_BANG_ = (function app$rasterizer$svg_resolve_all_BANG_(svg,styles){
return beicon.v2.core.concat(app.rasterizer.svg_resolve_images_BANG_(svg),app.rasterizer.svg_resolve_styles_BANG_(svg,styles),app.rasterizer.svg_resolve_inline_styles_BANG_(svg),app.rasterizer.svg_resolve_style_elements_BANG_(svg),beicon.v2.core.of(svg));
});
/**
 * Parses an SVG string into an SVG DOM.
 */
app.rasterizer.svg_parse = (function app$rasterizer$svg_parse(data){
var parser = (new DOMParser());
return parser.parseFromString(data,"image/svg+xml");
});
/**
 * Converts an SVG to a string.
 */
app.rasterizer.svg_stringify = (function app$rasterizer$svg_stringify(svg){
var doc = app.rasterizer.get_document_element(svg);
var serializer = (new XMLSerializer());
return serializer.serializeToString(doc);
});
/**
 * Prepares an SVG for rendering (resolves images to Data URIs and adds intrinsic size).
 */
app.rasterizer.svg_prepare = (function app$rasterizer$svg_prepare(data,styles,width){
var svg = app.rasterizer.svg_parse(data);
return beicon.v2.core.map(app.rasterizer.svg_stringify,beicon.v2.core.map((function (p1__75361_SHARP_){
return app.rasterizer.svg_set_intrinsic_size_BANG_(p1__75361_SHARP_,width);
}),app.rasterizer.svg_resolve_all_BANG_(svg,styles)));
});
/**
 * Converts an ImageBitmap to a Blob.
 */
app.rasterizer.bitmap__GT_blob = (function app$rasterizer$bitmap__GT_blob(bitmap){
return beicon.v2.core.create((function (subs){
var canvas = app.util.dom.create_element.cljs$core$IFn$_invoke$arity$1("canvas");
(canvas.width = bitmap.width);

(canvas.height = bitmap.height);

var context_75372 = canvas.getContext("bitmaprenderer");
context_75372.transferFromImageBitmap(bitmap);

canvas.toBlob((function (p1__75362_SHARP_){
subs.next(p1__75362_SHARP_);

return subs.complete();
}));

return cljs.core.constantly(null);
}));
});
/**
 * Renders a thumbnail using it's SVG and returns an ImageBitmap of the image.
 */
app.rasterizer.render_image_bitmap = (function app$rasterizer$render_image_bitmap(payload){
var data = (payload["data"]);
var styles = (payload["styles"]);
var width = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((payload["width"]),(300));
var quality = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((payload["quality"]),"medium");
return beicon.v2.core.mapcat((function (uri){
return beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (){
return app.util.webapi.revoke_uri(uri);
}),beicon.v2.core.mapcat((function (p1__75364_SHARP_){
return app.util.webapi.create_image_bitmap_with_workaround.cljs$core$IFn$_invoke$arity$2(p1__75364_SHARP_,({"resizeWidth": width, "resizeQuality": quality}));
}),app.rasterizer.create_image(uri)));
}),beicon.v2.core.map(app.util.webapi.create_uri,beicon.v2.core.map((function (p1__75363_SHARP_){
return app.util.webapi.create_blob.cljs$core$IFn$_invoke$arity$2(p1__75363_SHARP_,"image/svg+xml");
}),app.rasterizer.svg_prepare(data,styles,width))));
});
/**
 * Renders a thumbnail using it's SVG and returns a Blob of the image.
 */
app.rasterizer.render_blob = (function app$rasterizer$render_blob(payload){
return beicon.v2.core.mapcat(app.rasterizer.bitmap__GT_blob,app.rasterizer.render_image_bitmap(payload));
});
/**
 * Renders a thumbnail and returns a stream.
 */
app.rasterizer.render = (function app$rasterizer$render(payload){
var result = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((payload["result"]),"blob");
var G__75365 = result;
switch (G__75365) {
case "image-bitmap":
return app.rasterizer.render_image_bitmap(payload);

break;
default:
return app.rasterizer.render_blob(payload);

}
});
/**
 * Handles messages from the main thread.
 */
app.rasterizer.on_message = (function app$rasterizer$on_message(event){
var evdata = (event["data"]);
var evorigin = (event["origin"]);
if(cuerdas.core.starts_with_QMARK_(app.rasterizer.parent_origin,evorigin)){
var id = (evdata["id"]);
var payload = (evdata["payload"]);
var scope = (evdata["scope"]);
if((((!((payload == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(scope,"penpot/rasterizer")))){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.rasterizer.send_success_BANG_,id),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.rasterizer.send_failure_BANG_,id),app.rasterizer.render(payload));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Initializes the listener for messages from the main thread.
 */
app.rasterizer.listen = (function app$rasterizer$listen(){
return window.addEventListener("message",app.rasterizer.on_message);
});
/**
 * Sends an answer message.
 */
app.rasterizer.send_answer_BANG_ = (function app$rasterizer$send_answer_BANG_(id,type,payload){
var message = ({"id": id, "type": type, "scope": "penpot/rasterizer", "payload": payload});
if((window === parent)){
return null;
} else {
if((payload instanceof ImageBitmap)){
return parent.postMessage(message,app.rasterizer.parent_origin,[payload]);
} else {
return parent.postMessage(message,app.rasterizer.parent_origin);
}
}
});
/**
 * Sends a success message.
 */
app.rasterizer.send_success_BANG_ = (function app$rasterizer$send_success_BANG_(id,payload){
return app.rasterizer.send_answer_BANG_(id,"success",payload);
});
/**
 * Sends a failure message.
 */
app.rasterizer.send_failure_BANG_ = (function app$rasterizer$send_failure_BANG_(id,cause){
return app.rasterizer.send_answer_BANG_(id,"failure",cljs.core.ex_message(cause));
});
/**
 * Sends a ready message.
 */
app.rasterizer.send_ready_BANG_ = (function app$rasterizer$send_ready_BANG_(){
return app.rasterizer.send_answer_BANG_(null,"ready",null);
});
app.rasterizer.init = (function app$rasterizer$init(){
app.rasterizer.listen();

app.rasterizer.send_ready_BANG_();

if(app.common.logging.enabled_QMARK_("app.rasterizer",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"initialized"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"public-uri","public-uri",-1456511719),""+(app.config.public_uri ?? "")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-uri","parent-uri",-371819908),""+(app.rasterizer.parent_origin ?? "")], null)], null);
}),null)),null,null,"app.rasterizer",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}

return null;
});
goog.exportSymbol('app.rasterizer.init', app.rasterizer.init);

//# sourceMappingURL=app.rasterizer.js.map
