import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.types.fills.impl.js";
import "./app.common.uuid.js";
import "./app.render_wasm.api.fonts.js";
import "./app.render_wasm.helpers.js";
import "./app.render_wasm.mem.js";
import "./app.render_wasm.serializers.js";
import "./app.render_wasm.wasm.js";
goog.provide('app.render_wasm.api.texts');
app.render_wasm.api.texts.PARAGRAPH_ATTR_U8_SIZE = (12);
app.render_wasm.api.texts.SPAN_ATTR_U8_SIZE = (64);
app.render_wasm.api.texts.MAX_TEXT_FILLS = (8);
/**
 * Into an UTF8 buffer. Returns an ArrayBuffer instance
 */
app.render_wasm.api.texts.encode_text = (function app$render_wasm$api$texts$encode_text(text){
var encoder = (new TextEncoder());
return encoder.encode(text);
});
app.render_wasm.api.texts.write_span_fills = (function app$render_wasm$api$texts$write_span_fills(offset,dview,fills){
var new_ofset = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (offset__$1,fill){
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(fill,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),1.0);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fill,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var gradient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fill,new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870));
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fill,new cljs.core.Keyword(null,"fill-image","fill-image",-99895848));
if((!((color == null)))){
return app.common.types.fills.impl.write_solid_fill(offset__$1,dview,opacity,color);
} else {
if((!((gradient == null)))){
return app.common.types.fills.impl.write_gradient_fill(offset__$1,dview,opacity,gradient);
} else {
if((!((image == null)))){
return app.common.types.fills.impl.write_image_fill(offset__$1,dview,opacity,image);
} else {
return null;
}
}
}
}),offset,fills);
var padding_fills = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (app.render_wasm.api.texts.MAX_TEXT_FILLS - cljs.core.count(fills));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
return (new_ofset + (padding_fills * app.common.types.fills.impl.FILL_U8_SIZE));
});
app.render_wasm.api.texts.write_paragraph = (function app$render_wasm$api$texts$write_paragraph(offset,dview,paragraph){
var text_align = app.render_wasm.serializers.translate_text_align(cljs.core.get.cljs$core$IFn$_invoke$arity$2(paragraph,new cljs.core.Keyword(null,"text-align","text-align",1786091845)));
var text_direction = app.render_wasm.serializers.translate_text_direction(cljs.core.get.cljs$core$IFn$_invoke$arity$2(paragraph,new cljs.core.Keyword(null,"text-direction","text-direction",590275785)));
var text_decoration = app.render_wasm.serializers.translate_text_decoration(cljs.core.get.cljs$core$IFn$_invoke$arity$2(paragraph,new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207)));
var text_transform = app.render_wasm.serializers.translate_text_transform(cljs.core.get.cljs$core$IFn$_invoke$arity$2(paragraph,new cljs.core.Keyword(null,"text-transform","text-transform",1685000676)));
var line_height = app.render_wasm.api.fonts.serialize_line_height.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(paragraph,new cljs.core.Keyword(null,"line-height","line-height",1870784992)));
var letter_spacing = app.render_wasm.api.fonts.serialize_letter_spacing(cljs.core.get.cljs$core$IFn$_invoke$arity$2(paragraph,new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767)));
return app.render_wasm.mem.assert_written(app.render_wasm.mem.write_f32(app.render_wasm.mem.write_f32(app.render_wasm.mem.write_u8(app.render_wasm.mem.write_u8(app.render_wasm.mem.write_u8(app.render_wasm.mem.write_u8(offset,dview,text_align),dview,text_direction),dview,text_decoration),dview,text_transform),dview,line_height),dview,letter_spacing),offset,(12));
});
app.render_wasm.api.texts.write_spans = (function app$render_wasm$api$texts$write_spans(offset,dview,spans,paragraph){
var paragraph_font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paragraph,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
var paragraph_font_weight = app.render_wasm.api.fonts.serialize_font_weight(new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(paragraph));
var paragraph_line_height = app.render_wasm.api.fonts.serialize_line_height.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(paragraph,new cljs.core.Keyword(null,"line-height","line-height",1870784992)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (offset__$1,span){
var font_style = app.render_wasm.serializers.translate_font_style(cljs.core.get.cljs$core$IFn$_invoke$arity$3(span,new cljs.core.Keyword(null,"font-style","font-style",-773672352),"normal"));
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(span,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),paragraph_font_size);
var font_size__$1 = app.render_wasm.api.fonts.serialize_font_size(font_size);
var line_height = app.render_wasm.api.fonts.serialize_line_height.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(span,new cljs.core.Keyword(null,"line-height","line-height",1870784992)),paragraph_line_height);
var letter_spacing = app.render_wasm.api.fonts.serialize_letter_spacing(cljs.core.get.cljs$core$IFn$_invoke$arity$2(span,new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767)));
var font_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(span,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),paragraph_font_weight);
var font_weight__$1 = app.render_wasm.api.fonts.serialize_font_weight(font_weight);
var font_id = app.render_wasm.api.fonts.normalize_font_id(cljs.core.get.cljs$core$IFn$_invoke$arity$3(span,new cljs.core.Keyword(null,"font-id","font-id",-390084123),"sourcesanspro"));
var font_family = cljs.core.hash(cljs.core.get.cljs$core$IFn$_invoke$arity$3(span,new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sourcesanspro"));
var text_buffer = app.render_wasm.api.texts.encode_text(cljs.core.get.cljs$core$IFn$_invoke$arity$3(span,new cljs.core.Keyword(null,"text","text",-1790561697),""));
var text_length = app.render_wasm.mem.size(text_buffer);
var fills = cljs.core.take.cljs$core$IFn$_invoke$arity$2(app.render_wasm.api.texts.MAX_TEXT_FILLS,cljs.core.get.cljs$core$IFn$_invoke$arity$3(span,new cljs.core.Keyword(null,"fills","fills",902966780),cljs.core.PersistentVector.EMPTY));
var font_variant_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(span,new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718));
var font_variant_id__$1 = ((cljs.core.uuid_QMARK_(font_variant_id))?font_variant_id:app.common.uuid.zero);
var text_decoration = (function (){var or__5025__auto__ = app.render_wasm.serializers.translate_text_decoration(new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207).cljs$core$IFn$_invoke$arity$1(span));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = app.render_wasm.serializers.translate_text_decoration(new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207).cljs$core$IFn$_invoke$arity$1(paragraph));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return app.render_wasm.serializers.translate_text_decoration("none");
}
}
})();
var text_transform = (function (){var or__5025__auto__ = app.render_wasm.serializers.translate_text_transform(new cljs.core.Keyword(null,"text-transform","text-transform",1685000676).cljs$core$IFn$_invoke$arity$1(span));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = app.render_wasm.serializers.translate_text_transform(new cljs.core.Keyword(null,"text-transform","text-transform",1685000676).cljs$core$IFn$_invoke$arity$1(paragraph));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return app.render_wasm.serializers.translate_text_transform("none");
}
}
})();
var text_direction = (function (){var or__5025__auto__ = app.render_wasm.serializers.translate_text_direction(new cljs.core.Keyword(null,"text-direction","text-direction",590275785).cljs$core$IFn$_invoke$arity$1(span));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = app.render_wasm.serializers.translate_text_direction(new cljs.core.Keyword(null,"text-direction","text-direction",590275785).cljs$core$IFn$_invoke$arity$1(paragraph));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return app.render_wasm.serializers.translate_text_direction("ltr");
}
}
})();
return app.render_wasm.api.texts.write_span_fills(app.render_wasm.mem.assert_written(app.render_wasm.mem.write_i32(app.render_wasm.mem.write_i32(app.render_wasm.mem.write_uuid(app.render_wasm.mem.write_i32(app.render_wasm.mem.write_uuid(app.render_wasm.mem.write_u32(app.render_wasm.mem.write_f32(app.render_wasm.mem.write_f32(app.render_wasm.mem.write_f32(app.render_wasm.mem.write_u8(app.render_wasm.mem.write_u8(app.render_wasm.mem.write_u8(app.render_wasm.mem.write_u8(offset__$1,dview,font_style),dview,text_decoration),dview,text_transform),dview,text_direction),dview,font_size__$1),dview,line_height),dview,letter_spacing),dview,font_weight__$1),dview,font_id),dview,font_family),dview,app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(font_variant_id__$1,app.common.uuid.zero)),dview,text_length),dview,cljs.core.count(fills)),offset__$1,(64)),dview,fills);
}),offset,spans);
});
app.render_wasm.api.texts.write_shape_text = (function app$render_wasm$api$texts$write_shape_text(spans,paragraph,text){
var normalized_paragraph = app.render_wasm.api.fonts.normalize_paragraph_font(paragraph);
var normalized_spans = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55161_SHARP_){
return app.render_wasm.api.fonts.normalize_span_font(p1__55161_SHARP_,normalized_paragraph);
}),spans);
var num_spans = cljs.core.count(normalized_spans);
var fills_size = (app.common.types.fills.impl.FILL_U8_SIZE * app.render_wasm.api.texts.MAX_TEXT_FILLS);
var metadata_size = ((12) + (num_spans * ((64) + fills_size)));
var text_buffer = app.render_wasm.api.texts.encode_text(text);
var text_size = app.render_wasm.mem.size(text_buffer);
var total_size = (((4) + metadata_size) + text_size);
var heapu8 = app.render_wasm.mem.get_heap_u8();
var dview = app.render_wasm.mem.get_data_view();
var offset = app.render_wasm.mem.alloc(total_size);
app.render_wasm.mem.write_buffer(app.render_wasm.api.texts.write_spans(app.render_wasm.api.texts.write_paragraph(app.render_wasm.mem.write_u32(offset,dview,num_spans),dview,normalized_paragraph),dview,normalized_spans,normalized_paragraph),heapu8,text_buffer);

var fn_55162 = (app.render_wasm.wasm.internal_module["_set_shape_text_content"]);
return fn_55162();
});
app.render_wasm.api.texts.emoji_pattern = /(?:\uD83C[\uDDE6-\uDDFF]\uD83C[\uDDE6-\uDDFF])|(?:\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDEFF])|(?:\uD83E[\uDD00-\uDDFF])|(?:\uD83D[\uDE80-\uDEFF]|\uD83E[\uDC00-\uDCFF])|(?:\uD83E[\uDE70-\uDEFF])|[\u2600-\u26FF\u2700-\u27BF\u2300-\u23FF\u2B00-\u2BFF]/;
app.render_wasm.api.texts.unicode_ranges = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"oriya","oriya",977386913),new cljs.core.Keyword(null,"coptic","coptic",-403969758),new cljs.core.Keyword(null,"japanese","japanese",-331893406),new cljs.core.Keyword(null,"runic","runic",-276407709),new cljs.core.Keyword(null,"tamil","tamil",870246788),new cljs.core.Keyword(null,"ol-chiki","ol-chiki",-1012768220),new cljs.core.Keyword(null,"music","music",-1063514396),new cljs.core.Keyword(null,"osmanya","osmanya",-223695996),new cljs.core.Keyword(null,"shavian","shavian",1437298405),new cljs.core.Keyword(null,"bengali","bengali",841130917),new cljs.core.Keyword(null,"cyrillic","cyrillic",-1535699162),new cljs.core.Keyword(null,"latin-ext","latin-ext",-1782999545),new cljs.core.Keyword(null,"chinese","chinese",-59488313),new cljs.core.Keyword(null,"gurmukhi","gurmukhi",1350541448),new cljs.core.Keyword(null,"ethiopic","ethiopic",1727041736),new cljs.core.Keyword(null,"sinhala","sinhala",-1694245590),new cljs.core.Keyword(null,"sora-sompeng","sora-sompeng",2067371434),new cljs.core.Keyword(null,"khmer","khmer",-1851491350),new cljs.core.Keyword(null,"telugu","telugu",-687861364),new cljs.core.Keyword(null,"vai","vai",611244557),new cljs.core.Keyword(null,"javanese","javanese",755903469),new cljs.core.Keyword(null,"malayalam","malayalam",1037991502),new cljs.core.Keyword(null,"vietnamese","vietnamese",-1593849970),new cljs.core.Keyword(null,"devanagari","devanagari",737012815),new cljs.core.Keyword(null,"thai","thai",-49788081),new cljs.core.Keyword(null,"gujarati","gujarati",722386737),new cljs.core.Keyword(null,"cherokee","cherokee",1112096818),new cljs.core.Keyword(null,"symbols-2","symbols-2",-1632799182),new cljs.core.Keyword(null,"tibetan","tibetan",-1226351341),new cljs.core.Keyword(null,"bamum","bamum",-1327772939),new cljs.core.Keyword(null,"hebrew","hebrew",-1789946506),new cljs.core.Keyword(null,"lao","lao",963598070),new cljs.core.Keyword(null,"georgian","georgian",1734823735),new cljs.core.Keyword(null,"tifinagh","tifinagh",1474030232),new cljs.core.Keyword(null,"korean","korean",1402655801),new cljs.core.Keyword(null,"myanmar","myanmar",764220601),new cljs.core.Keyword(null,"modi","modi",-125885639),new cljs.core.Keyword(null,"mongolian","mongolian",-233794022),new cljs.core.Keyword(null,"syriac","syriac",-841890245),new cljs.core.Keyword(null,"greek","greek",-21364933),new cljs.core.Keyword(null,"old-italic","old-italic",2142922587),new cljs.core.Keyword(null,"arabic","arabic",-561980419),new cljs.core.Keyword(null,"brahmi","brahmi",17936575),new cljs.core.Keyword(null,"kannada","kannada",-1605659329),new cljs.core.Keyword(null,"symbols","symbols",1211743),new cljs.core.Keyword(null,"armenian","armenian",610189759),new cljs.core.Keyword(null,"meroitic","meroitic",1079957951)],[/[\u0B00-\u0B7F]/,/[\u2C80-\u2CFF]/,/[\u3040-\u30FF\u31F0-\u31FF\uFF66-\uFF9F]/,/[\u16A0-\u16FF]/,/[\u0B80-\u0BFF]/,/[\u1C50-\u1C7F]/,/[\u2669-\u267B]|\uD834[\uDD00-\uDD1F]/,/\uD801[\uDC80-\uDCAF]/,/\uD801[\uDC50-\uDC7F]/,/[\u0980-\u09FF]/,/[\u0400-\u04FF\u0500-\u052F\u2DE0-\u2DFF\uA640-\uA69F]/,/[\u0100-\u017F\u0180-\u024F]/,/[\u4E00-\u9FFF\u3400-\u4DBF]/,/[\u0A00-\u0A7F]/,/[\u1200-\u137F]/,/[\u0D80-\u0DFF]/,/\uD804[\uDCD0-\uDCFF]/,/[\u1780-\u17FF\u19E0-\u19FF]/,/[\u0C00-\u0C7F]/,/[\uA500-\uA63F]/,/[\uA980-\uA9DF]/,/[\u0D00-\u0D7F]/,/[\u1EA0-\u1EF9]/,/[\u0900-\u097F\uA8E0-\uA8FF]/,/[\u0E00-\u0E7F]/,/[\u0A80-\u0AFF]/,/[\u13A0-\u13FF]/,/[\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\u2B00-\u2BFF]/,/[\u0F00-\u0FFF]/,/[\uA6A0-\uA6FF]/,/[\u0590-\u05FF\uFB1D-\uFB4F]/,/[\u0E80-\u0EFF]/,/[\u10A0-\u10FF]/,/[\u2D30-\u2D7F]/,/[\uAC00-\uD7AF]/,/[\u1000-\u109F\uAA60-\uAA7F]/,/\uD805[\uDE00-\uDE5F]/,/[\u1800-\u18AF]/,/[\u0700-\u074F]/,/[\u0370-\u03FF\u1F00-\u1FFF]/,/\uD800[\uDF00-\uDF2F]/,/[\u0600-\u06FF\u0750-\u077F\u0870-\u089F\u08A0-\u08FF]/,/\uD804[\uDC00-\uDC7F]/,/[\u0C80-\u0CFF]/,/[\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\u2B00-\u2BFF]/,/[\u0530-\u058F\uFB13-\uFB17]/,/\uD802[\uDD80-\uDD9F]/]);
app.render_wasm.api.texts.contains_emoji_QMARK_ = (function app$render_wasm$api$texts$contains_emoji_QMARK_(text){
var result = cljs.core.re_find(app.render_wasm.api.texts.emoji_pattern,text);
return cljs.core.boolean$(result);
});
app.render_wasm.api.texts.collect_used_languages = (function app$render_wasm$api$texts$collect_used_languages(used,text){
return cljs.core.reduce_kv((function (result,lang,pattern){
if(cljs.core.contains_QMARK_(result,lang)){
return result;
} else {
if(cljs.core.truth_(cljs.core.re_find(pattern,text))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,lang);
} else {
return result;

}
}
}),used,app.render_wasm.api.texts.unicode_ranges);
});

//# sourceMappingURL=app.render_wasm.api.texts.js.map
