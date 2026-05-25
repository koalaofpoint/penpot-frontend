import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.logging.js";
import "./app.common.types.text.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.fonts.js";
import "./app.main.store.js";
import "./app.render_wasm.helpers.js";
import "./app.render_wasm.wasm.js";
import "./app.util.http.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./goog.object.object.js";
import "./lambdaisland.uri.js";
import "./okulary.core.js";
goog.provide('app.render_wasm.api.fonts');
goog.scope(function(){
  app.render_wasm.api.fonts.goog$module$goog$object = goog.module.get('goog.object');
});
app.render_wasm.api.fonts.fonts = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fonts","fonts",1683167295),app.main.store.state);
app.render_wasm.api.fonts.default_font_size = (14);
app.render_wasm.api.fonts.default_line_height = 1.2;
app.render_wasm.api.fonts.default_letter_spacing = 0.0;
/**
 * Returns the UUID for a Google Font ID. Uses uuid/zero as fallback when the
 *   font is not found in fontsdb. uuid/zero maps to the default font (Source
 *   Sans Pro) in WASM.
 *   A font id may not exist for different reasons:
 *   - the gfonts.json catalog was updated and fonts were renamed or removed,
 *   - the file was imported from another Penpot instance with different fonts,
 *   ...
 */
app.render_wasm.api.fonts.google_font_id__GT_uuid = (function app$render_wasm$api$fonts$google_font_id__GT_uuid(font_id){
var font = app.main.fonts.get_font_data(font_id);
var result = new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(font);
var or__5025__auto__ = result;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.uuid.zero;
}
});
app.render_wasm.api.fonts.custom_font_id__GT_uuid = (function app$render_wasm$api$fonts$custom_font_id__GT_uuid(font_id){
return app.common.uuid.uuid(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(font_id,(cuerdas.core.index_of.cljs$core$IFn$_invoke$arity$2(font_id,"-") + (1))));
});
app.render_wasm.api.fonts.font_backend = (function app$render_wasm$api$fonts$font_backend(font_id){
if(cuerdas.core.starts_with_QMARK_(font_id,"gfont-")){
return new cljs.core.Keyword(null,"google","google",578454873);
} else {
if(cuerdas.core.starts_with_QMARK_(font_id,"custom-")){
return new cljs.core.Keyword(null,"custom","custom",340151948);
} else {
return new cljs.core.Keyword(null,"builtin","builtin",-1707593346);

}
}
});
app.render_wasm.api.fonts.font_db_data = (function app$render_wasm$api$fonts$font_db_data(font_id,font_variant_id,font_weight_fallback,font_style_fallback){
var font = app.main.fonts.get_font_data(font_id);
var closest_variant = app.main.fonts.find_closest_variant(font,font_weight_fallback,font_style_fallback);
var variant = app.main.fonts.get_variant(font,font_variant_id);
if((((closest_variant == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(closest_variant,variant)))){
return variant;
} else {
return closest_variant;
}
});
app.render_wasm.api.fonts.font_id__GT_uuid = (function app$render_wasm$api$fonts$font_id__GT_uuid(font_id){
var G__55094 = app.render_wasm.api.fonts.font_backend(font_id);
var G__55094__$1 = (((G__55094 instanceof cljs.core.Keyword))?G__55094.fqn:null);
switch (G__55094__$1) {
case "google":
return app.render_wasm.api.fonts.google_font_id__GT_uuid(font_id);

break;
case "custom":
return app.render_wasm.api.fonts.custom_font_id__GT_uuid(font_id);

break;
case "builtin":
return app.common.uuid.zero;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55094__$1)].join('')));

}
});
app.render_wasm.api.fonts.font_id__GT_asset_id = (function app$render_wasm$api$fonts$font_id__GT_asset_id(font_id,font_variant_id,font_weight,font_style){
var G__55095 = app.render_wasm.api.fonts.font_backend(font_id);
var G__55095__$1 = (((G__55095 instanceof cljs.core.Keyword))?G__55095.fqn:null);
switch (G__55095__$1) {
case "google":
return font_id;

break;
case "custom":
var font_uuid = app.render_wasm.api.fonts.custom_font_id__GT_uuid(font_id);
var matching_font = cljs.core.some((function (p__55096){
var vec__55097 = p__55096;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55097,(0),null);
var font = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55097,(1),null);
var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(font),font_uuid);
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(font)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_weight));
if(and__5023__auto____$1){
return font;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}),cljs.core.seq(cljs.core.deref(app.render_wasm.api.fonts.fonts)));
if(cljs.core.truth_(matching_font)){
return new cljs.core.Keyword(null,"ttf-file-id","ttf-file-id",-1342545748).cljs$core$IFn$_invoke$arity$1(matching_font);
} else {
return null;
}

break;
case "builtin":
var variant = app.render_wasm.api.fonts.font_db_data(font_id,font_variant_id,font_weight,font_style);
return new cljs.core.Keyword(null,"ttf-url","ttf-url",1019700400).cljs$core$IFn$_invoke$arity$1(variant);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55095__$1)].join('')));

}
});
app.render_wasm.api.fonts.update_text_layout = (function app$render_wasm$api$fonts$update_text_layout(id){
if(app.render_wasm.wasm.context_initialized_QMARK_){
var shape_id_buffer = app.common.uuid.get_u32(id);
var fn_55101 = (app.render_wasm.wasm.internal_module["_update_shape_text_layout_for"]);
return fn_55101((shape_id_buffer[(0)]),(shape_id_buffer[(1)]),(shape_id_buffer[(2)]),(shape_id_buffer[(3)]));
} else {
return null;
}
});
app.render_wasm.api.fonts.store_font_buffer = (function app$render_wasm$api$fonts$store_font_buffer(font_data,font_array_buffer,emoji_QMARK_,fallback_QMARK_){
var font_id_buffer = new cljs.core.Keyword(null,"family-id-buffer","family-id-buffer",2023888629).cljs$core$IFn$_invoke$arity$1(font_data);
var size = font_array_buffer.byteLength;
var ptr = (function (){var fn_55102 = (app.render_wasm.wasm.internal_module["_alloc_bytes"]);
return fn_55102(size);
})();
var heap = app.render_wasm.api.fonts.goog$module$goog$object.get(app.render_wasm.wasm.internal_module,"HEAPU8");
var mem = (new Uint8Array(heap.buffer,ptr,size));
mem.set((new Uint8Array(font_array_buffer)));

var fn_55104_55144 = (app.render_wasm.wasm.internal_module["_store_font"]);
fn_55104_55144((font_id_buffer[(0)]),(font_id_buffer[(1)]),(font_id_buffer[(2)]),(font_id_buffer[(3)]),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(font_data),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(font_data),emoji_QMARK_,fallback_QMARK_);

return true;
});
app.render_wasm.api.fonts.fetching = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
app.render_wasm.api.fonts.fetch_font = (function app$render_wasm$api$fonts$fetch_font(font_data,font_url,emoji_QMARK_,fallback_QMARK_){
if(cljs.core.contains_QMARK_(cljs.core.deref(app.render_wasm.api.fonts.fetching),font_url)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.render_wasm.api.fonts.fetching,cljs.core.conj,font_url);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),font_url,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (){
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (cause){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.render_wasm.api.fonts.fetching,cljs.core.disj,font_url);

if(app.common.logging.enabled_QMARK_("app.render-wasm.api.fonts",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"Could not fetch font"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-url","font-url",253222612),font_url], null)], null);
}),null)),cause,null,"app.render-wasm.api.fonts",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}


return beicon.v2.core.empty();
}),beicon.v2.core.map((function (p__55105){
var map__55106 = p__55105;
var map__55106__$1 = cljs.core.__destructure_map(map__55106);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55106__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.render_wasm.api.fonts.fetching,cljs.core.disj,font_url);

return app.render_wasm.api.fonts.store_font_buffer(font_data,body,emoji_QMARK_,fallback_QMARK_);
}),app.util.http.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),font_url,new cljs.core.Keyword(null,"response-type","response-type",-1493770458),new cljs.core.Keyword(null,"buffer","buffer",617295198)], null))));
})], null);
}
});
app.render_wasm.api.fonts.google_font_ttf_url = (function app$render_wasm$api$fonts$google_font_ttf_url(font_id,font_variant_id,font_weight,font_style){
var variant = app.render_wasm.api.fonts.font_db_data(font_id,font_variant_id,font_weight,font_style);
var temp__5823__auto__ = new cljs.core.Keyword(null,"ttf-url","ttf-url",1019700400).cljs$core$IFn$_invoke$arity$1(variant);
if(cljs.core.truth_(temp__5823__auto__)){
var ttf_url = temp__5823__auto__;
return cuerdas.core.replace(ttf_url,"https://fonts.gstatic.com/s/",lambdaisland.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.public_uri,"internal/gfonts/font/"], 0)));
} else {
return null;
}
});
app.render_wasm.api.fonts.font_id__GT_ttf_url = (function app$render_wasm$api$fonts$font_id__GT_ttf_url(font_id,asset_id,font_variant_id,font_weight,font_style){
var G__55108 = app.render_wasm.api.fonts.font_backend(font_id);
var G__55108__$1 = (((G__55108 instanceof cljs.core.Keyword))?G__55108.fqn:null);
switch (G__55108__$1) {
case "google":
return app.render_wasm.api.fonts.google_font_ttf_url(font_id,font_variant_id,font_weight,font_style);

break;
case "custom":
return ""+(lambdaisland.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.public_uri,"assets/by-id/",asset_id], 0)) ?? "");

break;
case "builtin":
return ""+(lambdaisland.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.public_uri,"fonts/",asset_id], 0)) ?? "");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55108__$1)].join('')));

}
});
app.render_wasm.api.fonts.font_stored_QMARK_ = (function app$render_wasm$api$fonts$font_stored_QMARK_(font_data,emoji_QMARK_){
var temp__5825__auto__ = app.common.uuid.get_u32(new cljs.core.Keyword(null,"wasm-id","wasm-id",1590636146).cljs$core$IFn$_invoke$arity$1(font_data));
if(cljs.core.truth_(temp__5825__auto__)){
var id_buffer = temp__5825__auto__;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),(function (){var fn_55109 = (app.render_wasm.wasm.internal_module["_is_font_uploaded"]);
return fn_55109((id_buffer[(0)]),(id_buffer[(1)]),(id_buffer[(2)]),(id_buffer[(3)]),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(font_data),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(font_data),emoji_QMARK_);
})());
} else {
return null;
}
});
app.render_wasm.api.fonts.store_font_id = (function app$render_wasm$api$fonts$store_font_id(font_data,asset_id,emoji_QMARK_,fallback_QMARK_){
if(cljs.core.truth_(asset_id)){
var uri = app.render_wasm.api.fonts.font_id__GT_ttf_url(new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(font_data),asset_id,new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718).cljs$core$IFn$_invoke$arity$1(font_data),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(font_data),new cljs.core.Keyword(null,"style-name","style-name",977914017).cljs$core$IFn$_invoke$arity$1(font_data));
var id_buffer = app.common.uuid.get_u32(new cljs.core.Keyword(null,"wasm-id","wasm-id",1590636146).cljs$core$IFn$_invoke$arity$1(font_data));
var font_data__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(font_data,new cljs.core.Keyword(null,"family-id-buffer","family-id-buffer",2023888629),id_buffer);
var font_stored_QMARK_ = app.render_wasm.api.fonts.font_stored_QMARK_(font_data__$1,emoji_QMARK_);
if(cljs.core.truth_(font_stored_QMARK_)){
return null;
} else {
return app.render_wasm.api.fonts.fetch_font(font_data__$1,uri,emoji_QMARK_,fallback_QMARK_);
}
} else {
return null;
}
});
app.render_wasm.api.fonts.serialize_font_style = (function app$render_wasm$api$fonts$serialize_font_style(font_style){
var G__55110 = font_style;
switch (G__55110) {
case "normal":
return (0);

break;
case "regular":
return (0);

break;
case "italic":
return (1);

break;
default:
return (0);

}
});
app.render_wasm.api.fonts.normalize_font_id = (function app$render_wasm$api$fonts$normalize_font_id(font_id){
try{if(cuerdas.core.starts_with_QMARK_(font_id,"gfont-")){
return app.render_wasm.api.fonts.google_font_id__GT_uuid(font_id);
} else {
var no_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(font_id,(cuerdas.core.index_of.cljs$core$IFn$_invoke$arity$2(font_id,"-") + (1)));
if((((no_prefix == null)) || ((((!(typeof no_prefix === 'string'))) || (cuerdas.core.blank_QMARK_(no_prefix)))))){
return app.common.uuid.zero;
} else {
return app.common.uuid.parse(no_prefix);
}
}
}catch (e55112){var _e = e55112;
return app.common.uuid.zero;
}});
app.render_wasm.api.fonts.normalize_span_font = (function app$render_wasm$api$fonts$normalize_span_font(span,paragraph){
var font_id = new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(span);
var font_variant_id = new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718).cljs$core$IFn$_invoke$arity$1(span);
var font_weight_fallback = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(span);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(paragraph);
}
})();
var font_style_fallback = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(span);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(paragraph);
}
})();
var font_data = app.render_wasm.api.fonts.font_db_data(font_id,font_variant_id,font_weight_fallback,font_style_fallback);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(span,new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(font_data);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(font_data);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return font_variant_id;
}
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(font_data);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return font_weight_fallback;
}
})(),new cljs.core.Keyword(null,"font-style","font-style",-773672352),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(font_data);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return font_style_fallback;
}
})()], 0));
});
app.render_wasm.api.fonts.normalize_paragraph_font = (function app$render_wasm$api$fonts$normalize_paragraph_font(paragraph){
var font_id = new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(paragraph);
var font_variant_id = new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718).cljs$core$IFn$_invoke$arity$1(paragraph);
var font_weight_fallback = new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(paragraph);
var font_style_fallback = new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(paragraph);
var font_data = app.render_wasm.api.fonts.font_db_data(font_id,font_variant_id,font_weight_fallback,font_style_fallback);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(paragraph,new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(font_data);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(font_data);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return font_variant_id;
}
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(font_data);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return font_weight_fallback;
}
})(),new cljs.core.Keyword(null,"font-style","font-style",-773672352),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(font_data);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return font_style_fallback;
}
})()], 0));
});
app.render_wasm.api.fonts.serialize_font_size = (function app$render_wasm$api$fonts$serialize_font_size(font_size){
if(typeof font_size === 'number'){
return font_size;
} else {
if(typeof font_size === 'string'){
var or__5025__auto__ = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(font_size);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.render_wasm.api.fonts.default_font_size;
}
} else {
return null;
}
}
});
app.render_wasm.api.fonts.serialize_font_weight = (function app$render_wasm$api$fonts$serialize_font_weight(font_weight){
if(typeof font_weight === 'number'){
return font_weight;
} else {
var font_weight_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_weight);
if(cljs.core.truth_(cljs.core.re_matches(/\d+/,font_weight_str))){
return Number(font_weight_str);
} else {
if(cljs.core.truth_(cuerdas.core.includes_QMARK_(font_weight_str,"bold"))){
return (700);
} else {
if(cljs.core.truth_(cuerdas.core.includes_QMARK_(font_weight_str,"black"))){
return (900);
} else {
if(cljs.core.truth_(cuerdas.core.includes_QMARK_(font_weight_str,"extrabold"))){
return (800);
} else {
if(cljs.core.truth_(cuerdas.core.includes_QMARK_(font_weight_str,"extralight"))){
return (200);
} else {
if(cljs.core.truth_(cuerdas.core.includes_QMARK_(font_weight_str,"light"))){
return (300);
} else {
if(cljs.core.truth_(cuerdas.core.includes_QMARK_(font_weight_str,"medium"))){
return (500);
} else {
if(cljs.core.truth_(cuerdas.core.includes_QMARK_(font_weight_str,"semibold"))){
return (600);
} else {
if(cljs.core.truth_(cuerdas.core.includes_QMARK_(font_weight_str,"thin"))){
return (100);
} else {
return (400);

}
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
app.render_wasm.api.fonts.serialize_line_height = (function app$render_wasm$api$fonts$serialize_line_height(var_args){
var G__55115 = arguments.length;
switch (G__55115) {
case 1:
return app.render_wasm.api.fonts.serialize_line_height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.render_wasm.api.fonts.serialize_line_height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.render_wasm.api.fonts.serialize_line_height.cljs$core$IFn$_invoke$arity$1 = (function (line_height){
return app.render_wasm.api.fonts.serialize_line_height.cljs$core$IFn$_invoke$arity$2(line_height,app.render_wasm.api.fonts.default_line_height);
}));

(app.render_wasm.api.fonts.serialize_line_height.cljs$core$IFn$_invoke$arity$2 = (function (line_height,default_value){
if(typeof line_height === 'number'){
return line_height;
} else {
if(typeof line_height === 'string'){
var or__5025__auto__ = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(line_height);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default_value;
}
} else {
return null;
}
}
}));

(app.render_wasm.api.fonts.serialize_line_height.cljs$lang$maxFixedArity = 2);

app.render_wasm.api.fonts.serialize_letter_spacing = (function app$render_wasm$api$fonts$serialize_letter_spacing(letter_spacing){
if(typeof letter_spacing === 'number'){
return letter_spacing;
} else {
if(typeof letter_spacing === 'string'){
var or__5025__auto__ = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(letter_spacing);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.render_wasm.api.fonts.default_letter_spacing;
}
} else {
return null;
}
}
});
app.render_wasm.api.fonts.normalize_font_variant = (function app$render_wasm$api$fonts$normalize_font_variant(font_variant_id){
if((((font_variant_id == null)) || (cuerdas.core.blank_QMARK_(font_variant_id)))){
return "regular";
} else {
return font_variant_id;
}
});
app.render_wasm.api.fonts.make_font_data = (function app$render_wasm$api$fonts$make_font_data(font){
var font_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(font,new cljs.core.Keyword(null,"font-id","font-id",-390084123));
var font_variant_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(font,new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718));
var normalized_variant_id = (cljs.core.truth_(font_variant_id)?cuerdas.core.replace(cuerdas.core.lower(font_variant_id),/\s+/,""):null);
var font_weight_fallback = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(font,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (400);
}
})();
var font_style_fallback = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(font,new cljs.core.Keyword(null,"font-style","font-style",-773672352));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "normal";
}
})();
var emoji_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(font,new cljs.core.Keyword(null,"is-emoji","is-emoji",-1643384064),false);
var fallback_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(font,new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),false);
var font_data = app.render_wasm.api.fonts.font_db_data(font_id,normalized_variant_id,font_weight_fallback,font_style_fallback);
var wasm_id = app.render_wasm.api.fonts.font_id__GT_uuid(font_id);
var raw_weight = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(font_data);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return font_weight_fallback;
}
})();
var weight = app.render_wasm.api.fonts.serialize_font_weight(raw_weight);
var style = (cljs.core.truth_(cuerdas.core.includes_QMARK_((function (){var or__5025__auto__ = normalized_variant_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),"italic"))?"italic":(cljs.core.truth_(cuerdas.core.includes_QMARK_(raw_weight,"italic"))?"italic":font_style_fallback
));
var variant_id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(font_data);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return normalized_variant_id;
}
})();
var asset_id = app.render_wasm.api.fonts.font_id__GT_asset_id(font_id,variant_id,raw_weight,style);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"emoji?","emoji?",-927869376),new cljs.core.Keyword(null,"style-name","style-name",977914017),new cljs.core.Keyword(null,"fallback?","fallback?",-1074968796),new cljs.core.Keyword(null,"font-id","font-id",-390084123),new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"wasm-id","wasm-id",1590636146),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"asset-id","asset-id",249736185)],[emoji_QMARK_,style,fallback_QMARK_,font_id,variant_id,app.render_wasm.api.fonts.serialize_font_style(style),wasm_id,weight,asset_id]);
});
app.render_wasm.api.fonts.store_font = (function app$render_wasm$api$fonts$store_font(font){
var map__55124 = app.render_wasm.api.fonts.make_font_data(font);
var map__55124__$1 = cljs.core.__destructure_map(map__55124);
var font_data = map__55124__$1;
var asset_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55124__$1,new cljs.core.Keyword(null,"asset-id","asset-id",249736185));
var emoji_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55124__$1,new cljs.core.Keyword(null,"emoji?","emoji?",-927869376));
var fallback_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55124__$1,new cljs.core.Keyword(null,"fallback?","fallback?",-1074968796));
return app.render_wasm.api.fonts.store_font_id(font_data,asset_id,emoji_QMARK_,fallback_QMARK_);
});
app.render_wasm.api.fonts.load_fallback_fonts_for_editor_BANG_ = (function app$render_wasm$api$fonts$load_fallback_fonts_for_editor_BANG_(fonts){
var seq__55125 = cljs.core.seq(fonts);
var chunk__55126 = null;
var count__55127 = (0);
var i__55128 = (0);
while(true){
if((i__55128 < count__55127)){
var font = chunk__55126.cljs$core$IIndexed$_nth$arity$2(null,i__55128);
app.main.fonts.ensure_loaded_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(font),new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718).cljs$core$IFn$_invoke$arity$1(font));


var G__55148 = seq__55125;
var G__55149 = chunk__55126;
var G__55150 = count__55127;
var G__55151 = (i__55128 + (1));
seq__55125 = G__55148;
chunk__55126 = G__55149;
count__55127 = G__55150;
i__55128 = G__55151;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__55125);
if(temp__5825__auto__){
var seq__55125__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55125__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__55125__$1);
var G__55152 = cljs.core.chunk_rest(seq__55125__$1);
var G__55153 = c__5548__auto__;
var G__55154 = cljs.core.count(c__5548__auto__);
var G__55155 = (0);
seq__55125 = G__55152;
chunk__55126 = G__55153;
count__55127 = G__55154;
i__55128 = G__55155;
continue;
} else {
var font = cljs.core.first(seq__55125__$1);
app.main.fonts.ensure_loaded_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(font),new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718).cljs$core$IFn$_invoke$arity$1(font));


var G__55156 = cljs.core.next(seq__55125__$1);
var G__55157 = null;
var G__55158 = (0);
var G__55159 = (0);
seq__55125 = G__55156;
chunk__55126 = G__55157;
count__55127 = G__55158;
i__55128 = G__55159;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Extends from app.main.fonts/get-content-fonts. Extracts the fonts used by the content of a text shape, resolving the correct font variant info.
 */
app.render_wasm.api.fonts.get_content_fonts = (function app$render_wasm$api$fonts$get_content_fonts(content){
var paragraph_set = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(content,new cljs.core.Keyword(null,"children","children",-940561982)));
var paragraphs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paragraph_set,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__55130){
var map__55131 = p__55130;
var map__55131__$1 = cljs.core.__destructure_map(map__55131);
var node = map__55131__$1;
var font_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55131__$1,new cljs.core.Keyword(null,"font-id","font-id",-390084123));
var font_variant_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55131__$1,new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718));
var font_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55131__$1,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583));
var font_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55131__$1,new cljs.core.Keyword(null,"font-style","font-style",-773672352));
var resolved_font_id = (function (){var or__5025__auto__ = font_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(app.common.types.text.default_typography);
}
})();
var resolved_variant_id = (function (){var or__5025__auto__ = font_variant_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718).cljs$core$IFn$_invoke$arity$1(app.common.types.text.default_typography);
}
})();
var font_weight_fallback = (function (){var or__5025__auto__ = font_weight;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(app.common.types.text.default_typography);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return (400);
}
}
})();
var font_style_fallback = (function (){var or__5025__auto__ = font_style;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(app.common.types.text.default_typography);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return "normal";
}
}
})();
var font_data = app.render_wasm.api.fonts.font_db_data(resolved_font_id,resolved_variant_id,font_weight_fallback,font_style_fallback);
var font_ref = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),resolved_font_id,new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(font_data);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(font_data);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return resolved_variant_id;
}
}
})(),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(font_data);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return font_weight_fallback;
}
})(),new cljs.core.Keyword(null,"font-style","font-style",-773672352),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(font_data);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return font_style_fallback;
}
})()], null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,font_ref);
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.types.text.is_text_node_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__55129_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__55129_SHARP_,new cljs.core.Keyword(null,"children","children",-940561982));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([paragraphs], 0))));
});
app.render_wasm.api.fonts.store_fonts = (function app$render_wasm$api$fonts$store_fonts(fonts){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (font){
return app.render_wasm.api.fonts.store_font(font);
}),fonts);
});
app.render_wasm.api.fonts.add_emoji_font = (function app$render_wasm$api$fonts$add_emoji_font(fonts){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fonts,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-color-emoji",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-emoji","is-emoji",-1643384064),true,new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null));
});
app.render_wasm.api.fonts.noto_fonts = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"oriya","oriya",977386913),new cljs.core.Keyword(null,"coptic","coptic",-403969758),new cljs.core.Keyword(null,"japanese","japanese",-331893406),new cljs.core.Keyword(null,"runic","runic",-276407709),new cljs.core.Keyword(null,"tamil","tamil",870246788),new cljs.core.Keyword(null,"ol-chiki","ol-chiki",-1012768220),new cljs.core.Keyword(null,"music","music",-1063514396),new cljs.core.Keyword(null,"osmanya","osmanya",-223695996),new cljs.core.Keyword(null,"shavian","shavian",1437298405),new cljs.core.Keyword(null,"bengali","bengali",841130917),new cljs.core.Keyword(null,"cyrillic","cyrillic",-1535699162),new cljs.core.Keyword(null,"latin-ext","latin-ext",-1782999545),new cljs.core.Keyword(null,"chinese","chinese",-59488313),new cljs.core.Keyword(null,"gurmukhi","gurmukhi",1350541448),new cljs.core.Keyword(null,"ethiopic","ethiopic",1727041736),new cljs.core.Keyword(null,"sinhala","sinhala",-1694245590),new cljs.core.Keyword(null,"sora-sompeng","sora-sompeng",2067371434),new cljs.core.Keyword(null,"khmer","khmer",-1851491350),new cljs.core.Keyword(null,"telugu","telugu",-687861364),new cljs.core.Keyword(null,"vai","vai",611244557),new cljs.core.Keyword(null,"javanese","javanese",755903469),new cljs.core.Keyword(null,"malayalam","malayalam",1037991502),new cljs.core.Keyword(null,"vietnamese","vietnamese",-1593849970),new cljs.core.Keyword(null,"devanagari","devanagari",737012815),new cljs.core.Keyword(null,"thai","thai",-49788081),new cljs.core.Keyword(null,"gujarati","gujarati",722386737),new cljs.core.Keyword(null,"cherokee","cherokee",1112096818),new cljs.core.Keyword(null,"symbols-2","symbols-2",-1632799182),new cljs.core.Keyword(null,"tibetan","tibetan",-1226351341),new cljs.core.Keyword(null,"bamum","bamum",-1327772939),new cljs.core.Keyword(null,"hebrew","hebrew",-1789946506),new cljs.core.Keyword(null,"lao","lao",963598070),new cljs.core.Keyword(null,"georgian","georgian",1734823735),new cljs.core.Keyword(null,"tifinagh","tifinagh",1474030232),new cljs.core.Keyword(null,"korean","korean",1402655801),new cljs.core.Keyword(null,"myanmar","myanmar",764220601),new cljs.core.Keyword(null,"modi","modi",-125885639),new cljs.core.Keyword(null,"mongolian","mongolian",-233794022),new cljs.core.Keyword(null,"syriac","syriac",-841890245),new cljs.core.Keyword(null,"greek","greek",-21364933),new cljs.core.Keyword(null,"old-italic","old-italic",2142922587),new cljs.core.Keyword(null,"arabic","arabic",-561980419),new cljs.core.Keyword(null,"brahmi","brahmi",17936575),new cljs.core.Keyword(null,"kannada","kannada",-1605659329),new cljs.core.Keyword(null,"symbols","symbols",1211743),new cljs.core.Keyword(null,"armenian","armenian",610189759),new cljs.core.Keyword(null,"meroitic","meroitic",1079957951)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-oriya",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-coptic",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-jp",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-runic",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-tamil",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-ol-chiki",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-music",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-osmanya",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-shavian",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-bengali",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-sc",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-gurmukhi",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-ethiopic",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-sinhala",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-sora-sompeng",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-khmer",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-telugu",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-vai",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-javanese",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-malayalam",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-thai",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-gujarati",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-cherokee",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-symbols-2",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-serif-tibetan",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-bamum",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-hebrew",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-lao",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-georgian",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-tifinagh",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-kr",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-myanmar",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-modi",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-mongolian",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-syriac",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-old-italic",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-arabic",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-brahmi",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-kannada",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-symbols",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-armenian",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),"gfont-noto-sans-meroitic",new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"regular",new cljs.core.Keyword(null,"style","style",-496642736),(0),new cljs.core.Keyword(null,"weight","weight",-1262796205),(400),new cljs.core.Keyword(null,"is-fallback","is-fallback",-2080537356),true], null)]);
app.render_wasm.api.fonts.add_noto_fonts = (function app$render_wasm$api$fonts$add_noto_fonts(fonts,languages){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,lang){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.render_wasm.api.fonts.noto_fonts,lang);
if(cljs.core.truth_(temp__5823__auto__)){
var font = temp__5823__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,font);
} else {
return acc;
}
}),fonts,languages);
});

//# sourceMappingURL=app.render_wasm.api.fonts.js.map
