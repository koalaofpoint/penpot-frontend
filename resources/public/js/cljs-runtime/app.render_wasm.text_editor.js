import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.uuid.js";
import "./app.render_wasm.helpers.js";
import "./app.render_wasm.mem.js";
import "./app.render_wasm.wasm.js";
goog.provide('app.render_wasm.text_editor');
app.render_wasm.text_editor.text_editor_start = (function app$render_wasm$text_editor$text_editor_start(id){
if(app.render_wasm.wasm.context_initialized_QMARK_){
var buffer = app.common.uuid.get_u32(id);
var fn_55233 = (app.render_wasm.wasm.internal_module["_text_editor_start"]);
return fn_55233((buffer[(0)]),(buffer[(1)]),(buffer[(2)]),(buffer[(3)]));
} else {
return null;
}
});
app.render_wasm.text_editor.text_editor_set_cursor_from_point = (function app$render_wasm$text_editor$text_editor_set_cursor_from_point(x,y){
if(app.render_wasm.wasm.context_initialized_QMARK_){
var fn_55234 = (app.render_wasm.wasm.internal_module["_text_editor_set_cursor_from_point"]);
return fn_55234(x,y);
} else {
return null;
}
});
app.render_wasm.text_editor.text_editor_update_blink = (function app$render_wasm$text_editor$text_editor_update_blink(timestamp_ms){
if(app.render_wasm.wasm.context_initialized_QMARK_){
var fn_55235 = (app.render_wasm.wasm.internal_module["_text_editor_update_blink"]);
return fn_55235(timestamp_ms);
} else {
return null;
}
});
app.render_wasm.text_editor.text_editor_render_overlay = (function app$render_wasm$text_editor$text_editor_render_overlay(){
if(app.render_wasm.wasm.context_initialized_QMARK_){
var fn_55236 = (app.render_wasm.wasm.internal_module["_text_editor_render_overlay"]);
return fn_55236();
} else {
return null;
}
});
app.render_wasm.text_editor.text_editor_poll_event = (function app$render_wasm$text_editor$text_editor_poll_event(){
if(app.render_wasm.wasm.context_initialized_QMARK_){
var res = (function (){var fn_55240 = (app.render_wasm.wasm.internal_module["_text_editor_poll_event"]);
return fn_55240();
})();
return res;
} else {
return null;
}
});
app.render_wasm.text_editor.text_editor_insert_text = (function app$render_wasm$text_editor$text_editor_insert_text(text){
if(app.render_wasm.wasm.context_initialized_QMARK_){
var encoder = (new TextEncoder());
var buf = encoder.encode(text);
var heapu8 = app.render_wasm.mem.get_heap_u8();
var size = app.render_wasm.mem.size(buf);
var offset = app.render_wasm.mem.alloc(size);
app.render_wasm.mem.write_buffer(offset,heapu8,buf);

var fn_55242_55317 = (app.render_wasm.wasm.internal_module["_text_editor_insert_text"]);
fn_55242_55317();

return app.render_wasm.mem.free();
} else {
return null;
}
});
app.render_wasm.text_editor.text_editor_delete_backward = (function app$render_wasm$text_editor$text_editor_delete_backward(){
if(app.render_wasm.wasm.context_initialized_QMARK_){
var fn_55245 = (app.render_wasm.wasm.internal_module["_text_editor_delete_backward"]);
return fn_55245();
} else {
return null;
}
});
app.render_wasm.text_editor.text_editor_delete_forward = (function app$render_wasm$text_editor$text_editor_delete_forward(){
if(app.render_wasm.wasm.context_initialized_QMARK_){
var fn_55246 = (app.render_wasm.wasm.internal_module["_text_editor_delete_forward"]);
return fn_55246();
} else {
return null;
}
});
app.render_wasm.text_editor.text_editor_insert_paragraph = (function app$render_wasm$text_editor$text_editor_insert_paragraph(){
if(app.render_wasm.wasm.context_initialized_QMARK_){
var fn_55252 = (app.render_wasm.wasm.internal_module["_text_editor_insert_paragraph"]);
return fn_55252();
} else {
return null;
}
});
app.render_wasm.text_editor.text_editor_move_cursor = (function app$render_wasm$text_editor$text_editor_move_cursor(direction,extend_selection){
if(app.render_wasm.wasm.context_initialized_QMARK_){
var fn_55257 = (app.render_wasm.wasm.internal_module["_text_editor_move_cursor"]);
return fn_55257(direction,(cljs.core.truth_(extend_selection)?(1):(0)));
} else {
return null;
}
});
app.render_wasm.text_editor.text_editor_select_all = (function app$render_wasm$text_editor$text_editor_select_all(){
if(app.render_wasm.wasm.context_initialized_QMARK_){
var fn_55258 = (app.render_wasm.wasm.internal_module["_text_editor_select_all"]);
return fn_55258();
} else {
return null;
}
});
app.render_wasm.text_editor.text_editor_stop = (function app$render_wasm$text_editor$text_editor_stop(){
if(app.render_wasm.wasm.context_initialized_QMARK_){
var fn_55259 = (app.render_wasm.wasm.internal_module["_text_editor_stop"]);
return fn_55259();
} else {
return null;
}
});
app.render_wasm.text_editor.text_editor_is_active_QMARK_ = (function app$render_wasm$text_editor$text_editor_is_active_QMARK_(){
if(app.render_wasm.wasm.context_initialized_QMARK_){
return (!(((function (){var fn_55260 = (app.render_wasm.wasm.internal_module["_text_editor_is_active"]);
return fn_55260();
})() === (0))));
} else {
return null;
}
});
app.render_wasm.text_editor.text_editor_export_content = (function app$render_wasm$text_editor$text_editor_export_content(){
if(app.render_wasm.wasm.context_initialized_QMARK_){
var ptr = (function (){var fn_55261 = (app.render_wasm.wasm.internal_module["_text_editor_export_content"]);
return fn_55261();
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = ptr;
if(cljs.core.truth_(and__5023__auto__)){
return (!((ptr === (0))));
} else {
return and__5023__auto__;
}
})())){
var json_str = app.render_wasm.mem.read_null_terminated_string(ptr);
app.render_wasm.mem.free();

return JSON.parse(json_str);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Export only the currently selected text as plain text from the WASM editor. Requires WASM support (_text_editor_export_selection).
 */
app.render_wasm.text_editor.text_editor_export_selection = (function app$render_wasm$text_editor$text_editor_export_selection(){
if(app.render_wasm.wasm.context_initialized_QMARK_){
var ptr = (function (){var fn_55262 = (app.render_wasm.wasm.internal_module["_text_editor_export_selection"]);
return fn_55262();
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = ptr;
if(cljs.core.truth_(and__5023__auto__)){
return (!((ptr === (0))));
} else {
return and__5023__auto__;
}
})())){
var text = app.render_wasm.mem.read_null_terminated_string(ptr);
app.render_wasm.mem.free();

return text;
} else {
return null;
}
} else {
return null;
}
});
app.render_wasm.text_editor.text_editor_get_active_shape_id = (function app$render_wasm$text_editor$text_editor_get_active_shape_id(){
if(app.render_wasm.wasm.context_initialized_QMARK_){
try{var byte_offset = app.render_wasm.mem.alloc((16));
var u32_offset = app.render_wasm.mem.__GT_offset_32(byte_offset);
var heap = app.render_wasm.mem.get_heap_u32();
var fn_55264_55321 = (app.render_wasm.wasm.internal_module["_text_editor_get_active_shape_id"]);
fn_55264_55321(byte_offset);

var a = (heap[u32_offset]);
var b = (heap[(u32_offset + (1))]);
var c = (heap[(u32_offset + (2))]);
var d = (heap[(u32_offset + (3))]);
var result = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,(0))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(b,(0))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,(0))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(d,(0)))))))))?app.common.uuid.from_unsigned_parts(a,b,c,d):null);
app.render_wasm.mem.free();

return result;
}catch (e55263){if((e55263 instanceof Error)){
var e = e55263;
console.error("[text-editor-get-active-shape-id] Error:",e);

return null;
} else {
throw e55263;

}
}} else {
return null;
}
});
app.render_wasm.text_editor.text_editor_get_selection = (function app$render_wasm$text_editor$text_editor_get_selection(){
if(app.render_wasm.wasm.context_initialized_QMARK_){
var byte_offset = app.render_wasm.mem.alloc((16));
var u32_offset = app.render_wasm.mem.__GT_offset_32(byte_offset);
var heap = app.render_wasm.mem.get_heap_u32();
var active_QMARK_ = (function (){var fn_55270 = (app.render_wasm.wasm.internal_module["_text_editor_get_selection"]);
return fn_55270(byte_offset);
})();
try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_QMARK_,(1))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"anchor-para","anchor-para",-1599568776),(heap[u32_offset]),new cljs.core.Keyword(null,"anchor-offset","anchor-offset",175135585),(heap[(u32_offset + (1))]),new cljs.core.Keyword(null,"focus-para","focus-para",-292469673),(heap[(u32_offset + (2))]),new cljs.core.Keyword(null,"focus-offset","focus-offset",2058579811),(heap[(u32_offset + (3))])], null);
} else {
return null;
}
}finally {app.render_wasm.mem.free();
}} else {
return null;
}
});
app.render_wasm.text_editor.shape_text_contents = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Merge exported span texts back into the existing content tree.
 * 
 *   The WASM editor may split or merge paragraphs (Enter / Backspace at
 *   paragraph boundary), so the exported structure can differ from the
 *   original.  When extra paragraphs or spans appear we clone styling from
 *   the nearest existing sibling; when fewer appear we truncate.
 * 
 *   exported-texts  vector of vectors  [["span1" "span2"] ["p2s1"]]
 *   content         existing Penpot content map (root -> paragraph-set -> …)
 */
app.render_wasm.text_editor.merge_exported_texts_into_content = (function app$render_wasm$text_editor$merge_exported_texts_into_content(content,exported_texts){
var para_set = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(content,new cljs.core.Keyword(null,"children","children",-940561982)));
var orig_paras = cljs.core.get.cljs$core$IFn$_invoke$arity$2(para_set,new cljs.core.Keyword(null,"children","children",-940561982));
var num_orig = cljs.core.count(orig_paras);
var last_orig_para = ((cljs.core.seq(orig_paras))?cljs.core.last(orig_paras):null);
var template_span = (cljs.core.truth_(last_orig_para)?cljs.core.last(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(last_orig_para)):null);
var new_paras = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (para_idx,exported_span_texts){
var orig_para = (((para_idx < num_orig))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(orig_paras,para_idx):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(last_orig_para,new cljs.core.Keyword(null,"children","children",-940561982)));
var orig_spans = cljs.core.get.cljs$core$IFn$_invoke$arity$2(orig_para,new cljs.core.Keyword(null,"children","children",-940561982));
var num_orig_spans = cljs.core.count(orig_spans);
var last_orig_span = ((cljs.core.seq(orig_spans))?cljs.core.last(orig_spans):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(orig_para,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (span_idx,new_text){
var orig_span = (((span_idx < num_orig_spans))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(orig_spans,span_idx):(function (){var or__5025__auto__ = last_orig_span;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return template_span;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(orig_span,new cljs.core.Keyword(null,"text","text",-1790561697),new_text);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(exported_span_texts)),exported_span_texts));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(exported_texts)),exported_texts);
var new_para_set = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(para_set,new cljs.core.Keyword(null,"children","children",-940561982),new_paras);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(content,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_para_set], null));
});
/**
 * Sync text content from the WASM text editor back to the frontend shape.
 * 
 *   Exports the current span texts from WASM, merges them into the shape's
 *   cached content tree (preserving per-span styling), and returns the
 *   shape-id and the fully merged content map ready for
 *   v2-update-text-shape-content.
 */
app.render_wasm.text_editor.text_editor_sync_content = (function app$render_wasm$text_editor$text_editor_sync_content(){
if(cljs.core.truth_((function (){var and__5023__auto__ = app.render_wasm.wasm.context_initialized_QMARK_;
if(and__5023__auto__){
return app.render_wasm.text_editor.text_editor_is_active_QMARK_();
} else {
return and__5023__auto__;
}
})())){
var shape_id = app.render_wasm.text_editor.text_editor_get_active_shape_id();
var new_texts = app.render_wasm.text_editor.text_editor_export_content();
if(cljs.core.truth_((function (){var and__5023__auto__ = shape_id;
if(cljs.core.truth_(and__5023__auto__)){
return new_texts;
} else {
return and__5023__auto__;
}
})())){
var texts_clj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new_texts);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.render_wasm.text_editor.shape_text_contents),shape_id);
if(cljs.core.truth_(content)){
var merged = app.render_wasm.text_editor.merge_exported_texts_into_content(content,texts_clj);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.render_wasm.text_editor.shape_text_contents,cljs.core.assoc,shape_id,merged);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shape-id","shape-id",981169327),shape_id,new cljs.core.Keyword(null,"content","content",15833224),merged], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
app.render_wasm.text_editor.cache_shape_text_content_BANG_ = (function app$render_wasm$text_editor$cache_shape_text_content_BANG_(shape_id,content){
if((!((content == null)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.render_wasm.text_editor.shape_text_contents,cljs.core.assoc,shape_id,content);
} else {
return null;
}
});
app.render_wasm.text_editor.get_cached_content = (function app$render_wasm$text_editor$get_cached_content(shape_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.render_wasm.text_editor.shape_text_contents),shape_id);
});
app.render_wasm.text_editor.update_cached_content_BANG_ = (function app$render_wasm$text_editor$update_cached_content_BANG_(shape_id,content){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.render_wasm.text_editor.shape_text_contents,cljs.core.assoc,shape_id,content);
});
/**
 * Given anchor/focus para+offset, return {:start-para :start-offset :end-para :end-offset}
 * ordered so start <= end.
 */
app.render_wasm.text_editor.normalize_selection = (function app$render_wasm$text_editor$normalize_selection(p__55294){
var map__55295 = p__55294;
var map__55295__$1 = cljs.core.__destructure_map(map__55295);
var anchor_para = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55295__$1,new cljs.core.Keyword(null,"anchor-para","anchor-para",-1599568776));
var anchor_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55295__$1,new cljs.core.Keyword(null,"anchor-offset","anchor-offset",175135585));
var focus_para = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55295__$1,new cljs.core.Keyword(null,"focus-para","focus-para",-292469673));
var focus_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55295__$1,new cljs.core.Keyword(null,"focus-offset","focus-offset",2058579811));
if((((anchor_para < focus_para)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anchor_para,focus_para)) && ((anchor_offset <= focus_offset)))))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start-para","start-para",1332705210),anchor_para,new cljs.core.Keyword(null,"start-offset","start-offset",1295473814),anchor_offset,new cljs.core.Keyword(null,"end-para","end-para",-354953982),focus_para,new cljs.core.Keyword(null,"end-offset","end-offset",-1290057545),focus_offset], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start-para","start-para",1332705210),focus_para,new cljs.core.Keyword(null,"start-offset","start-offset",1295473814),focus_offset,new cljs.core.Keyword(null,"end-para","end-para",-354953982),anchor_para,new cljs.core.Keyword(null,"end-offset","end-offset",-1290057545),anchor_offset], null);
}
});
/**
 * Apply attrs to spans within [sel-start, sel-end) char range of a single paragraph.
 * Splits spans at boundaries as needed.
 */
app.render_wasm.text_editor.apply_attrs_to_paragraph = (function app$render_wasm$text_editor$apply_attrs_to_paragraph(para,sel_start,sel_end,attrs){
var spans = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(para);
var result = (function (){var spans__$1 = spans;
var pos = (0);
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(spans__$1)){
return acc;
} else {
var span = cljs.core.first(spans__$1);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(span);
var span_len = cljs.core.count(text);
var span_end = (pos + span_len);
var ol_start = (function (){var x__5110__auto__ = pos;
var y__5111__auto__ = sel_start;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var ol_end = (function (){var x__5113__auto__ = span_end;
var y__5114__auto__ = sel_end;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var has_overlap_QMARK_ = (ol_start < ol_end);
if((!(has_overlap_QMARK_))){
var G__55329 = cljs.core.rest(spans__$1);
var G__55330 = span_end;
var G__55331 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,span);
spans__$1 = G__55329;
pos = G__55330;
acc = G__55331;
continue;
} else {
var before = (((ol_start > pos))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(span,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(0),(ol_start - pos))):null);
var selected = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([span,attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(ol_start - pos),(ol_end - pos))], null)], 0));
var after = (((ol_end < span_end))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(span,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,(ol_end - pos))):null);
var G__55335 = cljs.core.rest(spans__$1);
var G__55336 = span_end;
var G__55337 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [before,selected,after], null)));
spans__$1 = G__55335;
pos = G__55336;
acc = G__55337;
continue;
}
}
break;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(para,new cljs.core.Keyword(null,"children","children",-940561982),result);
});
app.render_wasm.text_editor.para_char_count = (function app$render_wasm$text_editor$para_char_count(para){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (span){
return cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(span));
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(para)));
});
app.render_wasm.text_editor.apply_style_to_selection = (function app$render_wasm$text_editor$apply_style_to_selection(attrs,use_shape_fn,set_shape_text_content_fn){
if(cljs.core.truth_((function (){var and__5023__auto__ = app.render_wasm.wasm.context_initialized_QMARK_;
if(and__5023__auto__){
return app.render_wasm.text_editor.text_editor_is_active_QMARK_();
} else {
return and__5023__auto__;
}
})())){
var shape_id = app.render_wasm.text_editor.text_editor_get_active_shape_id();
var sel = app.render_wasm.text_editor.text_editor_get_selection();
if(cljs.core.truth_((function (){var and__5023__auto__ = shape_id;
if(cljs.core.truth_(and__5023__auto__)){
return sel;
} else {
return and__5023__auto__;
}
})())){
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.render_wasm.text_editor.shape_text_contents),shape_id);
if(cljs.core.truth_(content)){
var map__55308 = app.render_wasm.text_editor.normalize_selection(sel);
var map__55308__$1 = cljs.core.__destructure_map(map__55308);
var start_para = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55308__$1,new cljs.core.Keyword(null,"start-para","start-para",1332705210));
var start_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55308__$1,new cljs.core.Keyword(null,"start-offset","start-offset",1295473814));
var end_para = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55308__$1,new cljs.core.Keyword(null,"end-para","end-para",-354953982));
var end_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55308__$1,new cljs.core.Keyword(null,"end-offset","end-offset",-1290057545));
var collapsed_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_para,end_para)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_offset,end_offset)));
var para_set = cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(content));
var paras = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(para_set);
var new_paras = (((!(collapsed_QMARK_)))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (idx,para){
if((((idx < start_para)) || ((idx > end_para)))){
return para;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_para,end_para)){
return app.render_wasm.text_editor.apply_attrs_to_paragraph(para,start_offset,end_offset,attrs);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,start_para)){
return app.render_wasm.text_editor.apply_attrs_to_paragraph(para,start_offset,app.render_wasm.text_editor.para_char_count(para),attrs);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,end_para)){
return app.render_wasm.text_editor.apply_attrs_to_paragraph(para,(0),end_offset,attrs);
} else {
return app.render_wasm.text_editor.apply_attrs_to_paragraph(para,(0),app.render_wasm.text_editor.para_char_count(para),attrs);

}
}
}
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(paras)),paras):null);
var new_content = (cljs.core.truth_(new_paras)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(content,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(para_set,new cljs.core.Keyword(null,"children","children",-940561982),new_paras)], null)):null);
if(cljs.core.truth_(new_content)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.render_wasm.text_editor.shape_text_contents,cljs.core.assoc,shape_id,new_content);

(use_shape_fn.cljs$core$IFn$_invoke$arity$1 ? use_shape_fn.cljs$core$IFn$_invoke$arity$1(shape_id) : use_shape_fn.call(null,shape_id));

(set_shape_text_content_fn.cljs$core$IFn$_invoke$arity$2 ? set_shape_text_content_fn.cljs$core$IFn$_invoke$arity$2(shape_id,new_content) : set_shape_text_content_fn.call(null,shape_id,new_content));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shape-id","shape-id",981169327),shape_id,new cljs.core.Keyword(null,"content","content",15833224),new_content], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=app.render_wasm.text_editor.js.map
