import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.record.js";
import "./app.common.schema.js";
import "./app.common.types.shape.js";
import "./app.common.types.text.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.texts.js";
import "./app.main.fonts.js";
import "./app.main.store.js";
import "./app.plugins.format.js";
import "./app.plugins.parser.js";
import "./app.plugins.register.js";
import "./app.plugins.utils.js";
import "./app.util.object.js";
import "./app.util.text_editor.js";
import "./cuerdas.core.js";
goog.provide('app.plugins.text');
app.plugins.text.font_size_re = /^\d*\.?\d*$/;
app.plugins.text.line_height_re = /^\d*\.?\d*$/;
app.plugins.text.letter_spacing_re = /^\d*\.?\d*$/;
app.plugins.text.text_transform_re = /uppercase|capitalize|lowercase|none/;
app.plugins.text.text_decoration_re = /underline|line-through|none/;
app.plugins.text.text_direction_re = /ltr|rtl/;
app.plugins.text.text_align_re = /left|center|right|justify/;
app.plugins.text.vertical_align_re = /top|center|bottom/;
app.plugins.text.font_data = (function app$plugins$text$font_data(font,variant){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(font),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"family","family",-1313145692).cljs$core$IFn$_invoke$arity$1(font),new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(variant),new cljs.core.Keyword(null,"font-style","font-style",-773672352),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(variant),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(variant)], null));
});
app.plugins.text.variant_data = (function app$plugins$text$variant_data(variant){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(variant),new cljs.core.Keyword(null,"font-style","font-style",-773672352),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(variant),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(variant)], null));
});
app.plugins.text.text_props = (function app$plugins$text$text_props(shape){
return app.common.data.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.texts.current_root_values(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shape","shape",1190694006),shape,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),app.common.types.text.root_attrs], null)),app.main.data.workspace.texts.current_paragraph_values(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shape","shape",1190694006),shape,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),app.common.types.text.paragraph_attrs], null)),app.main.data.workspace.texts.current_text_values(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shape","shape",1190694006),shape,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),app.common.types.text.text_node_attrs], null))], 0));
});
/**
 * Given a root node of a text content extracts the texts with its associated styles
 */
app.plugins.text.content_range__GT_text_PLUS_styles = (function app$plugins$text$content_range__GT_text_PLUS_styles(node,start,end){
var sss = app.common.types.text.content__GT_text_PLUS_styles(node);
var styles = cljs.core.seq(sss);
var taking_QMARK_ = false;
var acc = (0);
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(styles){
var vec__59717 = cljs.core.first(styles);
var node_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59717,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59717,(1),null);
var from = acc;
var to = (acc + cljs.core.count(text));
var taking_QMARK___$1 = ((taking_QMARK_) || ((((from <= start)) && ((start < to)))));
var text__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (start - acc);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})(),(end - acc));
var result__$1 = (function (){var G__59720 = result;
if(((taking_QMARK___$1) && (app.common.data.not_empty_QMARK_(text__$1)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59720,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node_style,new cljs.core.Keyword(null,"text","text",-1790561697),text__$1));
} else {
return G__59720;
}
})();
var continue_QMARK_ = (((from > end)) || ((end >= to)));
var G__60615 = ((continue_QMARK_)?cljs.core.rest(styles):null);
var G__60616 = taking_QMARK___$1;
var G__60617 = to;
var G__60618 = result__$1;
styles = G__60615;
taking_QMARK_ = G__60616;
acc = G__60617;
result = G__60618;
continue;
} else {
return result;
}
break;
}
});
app.plugins.text.text_range_proxy_QMARK_ = (function app$plugins$text$text_range_proxy_QMARK_(range){
return app.util.object.type_of_QMARK_(range,"TextRange");
});
app.plugins.text.text_range_proxy = (function app$plugins$text$text_range_proxy(plugin_id,file_id,page_id,id,start,end){
var obj_59731 = ({});
var to_string_59730 = (function (){
return "TextRange";
});
var obj_59731_target_59738_60619 = obj_59731;
var prop_get_fn__59746_60620 = (function (){
var obj_59731_this_59737 = this;
var internal_fn__59740 = to_string_59730;
return internal_fn__59740.call(obj_59731_this_59737);
});
var prop_get_fn__59753_60621 = (function (){
var obj_59731_this_59737 = this;
var internal_fn__59747 = to_string_59730;
return internal_fn__59747.call(obj_59731_this_59737);
});
var prop_get_fn_plugin_59760_60622 = (function (){
var obj_59731_this_59737 = this;
var internal_fn_plugin_59754 = cljs.core.constantly(plugin_id);
return internal_fn_plugin_59754.call(obj_59731_this_59737);
});
var prop_get_fn_id_59767_60623 = (function (){
var obj_59731_this_59737 = this;
var internal_fn_id_59761 = cljs.core.constantly(id);
return internal_fn_id_59761.call(obj_59731_this_59737);
});
var prop_get_fn_file_59775_60624 = (function (){
var obj_59731_this_59737 = this;
var internal_fn_file_59768 = cljs.core.constantly(file_id);
return internal_fn_file_59768.call(obj_59731_this_59737);
});
var prop_get_fn_page_59782_60625 = (function (){
var obj_59731_this_59737 = this;
var internal_fn_page_59776 = cljs.core.constantly(page_id);
return internal_fn_page_59776.call(obj_59731_this_59737);
});
var prop_get_fn_shape_59789_60626 = (function (){
var obj_59731_this_59737 = this;
var internal_fn_shape_59783 = (function (p1__59723_SHARP_){
return app.plugins.utils.proxy__GT_shape(p1__59723_SHARP_);
});
return internal_fn_shape_59783.call(obj_59731_this_59737,obj_59731_this_59737);
});
var prop_get_fn_characters_59796_60627 = (function (){
var obj_59731_this_59737 = this;
var internal_fn_characters_59790 = (function (self){
var range_data = app.plugins.text.content_range__GT_text_PLUS_styles(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self)),start,end);
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),range_data));
});
return internal_fn_characters_59790.call(obj_59731_this_59737,obj_59731_this_59737);
});
var prop_get_fn_fontid_59803_60628 = (function (){
var obj_59731_this_59737 = this;
var internal_fn_fontid_59797 = (function (self){
var range_data = app.plugins.text.content_range__GT_text_PLUS_styles(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self)),start,end);
return app.plugins.utils.mixed_value(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font-id","font-id",-390084123),range_data));
});
return internal_fn_fontid_59797.call(obj_59731_this_59737,obj_59731_this_59737);
});
var schema_fontid_59800_60629 = null;
var coercer_fn_fontid_59798_60630 = (((((!((schema_fontid_59800_60629 == null)))) && ((!(cljs.core.fn_QMARK_(schema_fontid_59800_60629))))))?app.common.schema.coercer(schema_fontid_59800_60629):null);
var decode_fn_fontid_59799_60631 = app.common.json.__GT_clj;
var prop_set_fn_fontid_59804_60632 = (function (val_fontid_59802){
var obj_59731_this_59737 = this;
var internal_fn_fontid_59797 = (function (_,value){
var font = ((typeof value === 'string')?app.main.fonts.get_font_data(value):null);
var variant = app.main.fonts.get_default_variant(font);
if(cljs.core.not(font)){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontId","fontId",-474874285),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontId","fontId",-474874285),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_text_range(id,start,end,app.plugins.text.font_data(font,variant)));

}
}
});
return internal_fn_fontid_59797.call(obj_59731_this_59737,obj_59731_this_59737,val_fontid_59802);
});
var prop_get_fn_fontfamily_59813_60633 = (function (){
var obj_59731_this_59737 = this;
var internal_fn_fontfamily_59806 = (function (self){
var range_data = app.plugins.text.content_range__GT_text_PLUS_styles(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self)),start,end);
return app.plugins.utils.mixed_value(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font-family","font-family",-667419874),range_data));
});
return internal_fn_fontfamily_59806.call(obj_59731_this_59737,obj_59731_this_59737);
});
var schema_fontfamily_59810_60634 = null;
var coercer_fn_fontfamily_59807_60635 = (((((!((schema_fontfamily_59810_60634 == null)))) && ((!(cljs.core.fn_QMARK_(schema_fontfamily_59810_60634))))))?app.common.schema.coercer(schema_fontfamily_59810_60634):null);
var decode_fn_fontfamily_59809_60636 = app.common.json.__GT_clj;
var prop_set_fn_fontfamily_59814_60637 = (function (val_fontfamily_59812){
var obj_59731_this_59737 = this;
var internal_fn_fontfamily_59806 = (function (_,value){
var font = app.main.fonts.find_font_data(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),value], null));
var variant = app.main.fonts.get_default_variant(font);
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_text_range(id,start,end,app.plugins.text.font_data(font,variant)));

}
}
});
return internal_fn_fontfamily_59806.call(obj_59731_this_59737,obj_59731_this_59737,val_fontfamily_59812);
});
var prop_get_fn_fontvariantid_59821_60638 = (function (){
var obj_59731_this_59737 = this;
var internal_fn_fontvariantid_59815 = (function (self){
var range_data = app.plugins.text.content_range__GT_text_PLUS_styles(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self)),start,end);
return app.plugins.utils.mixed_value(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),range_data));
});
return internal_fn_fontvariantid_59815.call(obj_59731_this_59737,obj_59731_this_59737);
});
var schema_fontvariantid_59818_60639 = null;
var coercer_fn_fontvariantid_59816_60640 = (((((!((schema_fontvariantid_59818_60639 == null)))) && ((!(cljs.core.fn_QMARK_(schema_fontvariantid_59818_60639))))))?app.common.schema.coercer(schema_fontvariantid_59818_60639):null);
var decode_fn_fontvariantid_59817_60641 = app.common.json.__GT_clj;
var prop_set_fn_fontvariantid_59822_60642 = (function (val_fontvariantid_59820){
var obj_59731_this_59737 = this;
var internal_fn_fontvariantid_59815 = (function (self,value){
var font = app.main.fonts.get_font_data(app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"fontId"));
var variant = app.main.fonts.get_variant(font,value);
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontVariantId","fontVariantId",-598111105),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontVariantId","fontVariantId",-598111105),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_text_range(id,start,end,app.plugins.text.variant_data(variant)));

}
}
});
return internal_fn_fontvariantid_59815.call(obj_59731_this_59737,obj_59731_this_59737,val_fontvariantid_59820);
});
var prop_get_fn_fontsize_59829_60643 = (function (){
var obj_59731_this_59737 = this;
var internal_fn_fontsize_59823 = (function (self){
var range_data = app.plugins.text.content_range__GT_text_PLUS_styles(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self)),start,end);
return app.plugins.utils.mixed_value(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font-size","font-size",-1847940346),range_data));
});
return internal_fn_fontsize_59823.call(obj_59731_this_59737,obj_59731_this_59737);
});
var schema_fontsize_59826_60644 = null;
var coercer_fn_fontsize_59824_60645 = (((((!((schema_fontsize_59826_60644 == null)))) && ((!(cljs.core.fn_QMARK_(schema_fontsize_59826_60644))))))?app.common.schema.coercer(schema_fontsize_59826_60644):null);
var decode_fn_fontsize_59825_60646 = app.common.json.__GT_clj;
var prop_set_fn_fontsize_59830_60647 = (function (val_fontsize_59828){
var obj_59731_this_59737 = this;
var internal_fn_fontsize_59823 = (function (_,value){
var value__$1 = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(""+(value ?? ""));
if(((cljs.core.empty_QMARK_(value__$1)) || (cljs.core.not(cljs.core.re_matches(app.plugins.text.font_size_re,value__$1))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontSize","fontSize",919623033),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_text_range(id,start,end,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),value__$1], null)));

}
}
});
return internal_fn_fontsize_59823.call(obj_59731_this_59737,obj_59731_this_59737,val_fontsize_59828);
});
var prop_get_fn_fontweight_59837_60648 = (function (){
var obj_59731_this_59737 = this;
var internal_fn_fontweight_59831 = (function (self){
var range_data = app.plugins.text.content_range__GT_text_PLUS_styles(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self)),start,end);
return app.plugins.utils.mixed_value(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),range_data));
});
return internal_fn_fontweight_59831.call(obj_59731_this_59737,obj_59731_this_59737);
});
var schema_fontweight_59834_60649 = null;
var coercer_fn_fontweight_59832_60650 = (((((!((schema_fontweight_59834_60649 == null)))) && ((!(cljs.core.fn_QMARK_(schema_fontweight_59834_60649))))))?app.common.schema.coercer(schema_fontweight_59834_60649):null);
var decode_fn_fontweight_59833_60651 = app.common.json.__GT_clj;
var prop_set_fn_fontweight_59838_60652 = (function (val_fontweight_59836){
var obj_59731_this_59737 = this;
var internal_fn_fontweight_59831 = (function (self,value){
var font = app.main.fonts.get_font_data(app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"fontId"));
var weight = ""+(value ?? "");
var style = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"fontStyle");
var variant = (function (){var or__5025__auto__ = app.main.fonts.find_variant(font,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight], null));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.fonts.find_variant(font,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"weight","weight",-1262796205),weight], null));
}
})();
if((variant == null)){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),""+"Font weight '"+(value ?? "")+"' not supported for the current font");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_text_range(id,start,end,app.plugins.text.variant_data(variant)));

}
}
});
return internal_fn_fontweight_59831.call(obj_59731_this_59737,obj_59731_this_59737,val_fontweight_59836);
});
var prop_get_fn_fontstyle_59845_60653 = (function (){
var obj_59731_this_59737 = this;
var internal_fn_fontstyle_59839 = (function (self){
var range_data = app.plugins.text.content_range__GT_text_PLUS_styles(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self)),start,end);
return app.plugins.utils.mixed_value(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font-style","font-style",-773672352),range_data));
});
return internal_fn_fontstyle_59839.call(obj_59731_this_59737,obj_59731_this_59737);
});
var schema_fontstyle_59842_60654 = null;
var coercer_fn_fontstyle_59840_60655 = (((((!((schema_fontstyle_59842_60654 == null)))) && ((!(cljs.core.fn_QMARK_(schema_fontstyle_59842_60654))))))?app.common.schema.coercer(schema_fontstyle_59842_60654):null);
var decode_fn_fontstyle_59841_60656 = app.common.json.__GT_clj;
var prop_set_fn_fontstyle_59846_60657 = (function (val_fontstyle_59844){
var obj_59731_this_59737 = this;
var internal_fn_fontstyle_59839 = (function (self,value){
var font = app.main.fonts.get_font_data(app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"fontId"));
var style = ""+(value ?? "");
var weight = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"fontWeight");
var variant = (function (){var or__5025__auto__ = app.main.fonts.find_variant(font,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"weight","weight",-1262796205),weight,new cljs.core.Keyword(null,"style","style",-496642736),style], null));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.fonts.find_variant(font,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null));
}
})();
if((variant == null)){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontStyle","fontStyle",1246842165),""+"Font style '"+(value ?? "")+"' not supported for the current font");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontStyle","fontStyle",1246842165),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_text_range(id,start,end,app.plugins.text.variant_data(variant)));

}
}
});
return internal_fn_fontstyle_59839.call(obj_59731_this_59737,obj_59731_this_59737,val_fontstyle_59844);
});
var prop_get_fn_lineheight_59853_60658 = (function (){
var obj_59731_this_59737 = this;
var internal_fn_lineheight_59847 = (function (self){
var range_data = app.plugins.text.content_range__GT_text_PLUS_styles(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self)),start,end);
return app.plugins.utils.mixed_value(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line-height","line-height",1870784992),range_data));
});
return internal_fn_lineheight_59847.call(obj_59731_this_59737,obj_59731_this_59737);
});
var schema_lineheight_59850_60659 = null;
var coercer_fn_lineheight_59848_60660 = (((((!((schema_lineheight_59850_60659 == null)))) && ((!(cljs.core.fn_QMARK_(schema_lineheight_59850_60659))))))?app.common.schema.coercer(schema_lineheight_59850_60659):null);
var decode_fn_lineheight_59849_60661 = app.common.json.__GT_clj;
var prop_set_fn_lineheight_59855_60662 = (function (val_lineheight_59852){
var obj_59731_this_59737 = this;
var internal_fn_lineheight_59847 = (function (_,value){
var value__$1 = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(""+(value ?? ""));
if(((cljs.core.empty_QMARK_(value__$1)) || (cljs.core.not(cljs.core.re_matches(app.plugins.text.line_height_re,value__$1))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"lineHeight","lineHeight",-1729831016),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"lineHeight","lineHeight",-1729831016),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_text_range(id,start,end,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),value__$1], null)));

}
}
});
return internal_fn_lineheight_59847.call(obj_59731_this_59737,obj_59731_this_59737,val_lineheight_59852);
});
var prop_get_fn_letterspacing_59862_60663 = (function (){
var obj_59731_this_59737 = this;
var internal_fn_letterspacing_59856 = (function (self){
var range_data = app.plugins.text.content_range__GT_text_PLUS_styles(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self)),start,end);
return app.plugins.utils.mixed_value(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),range_data));
});
return internal_fn_letterspacing_59856.call(obj_59731_this_59737,obj_59731_this_59737);
});
var schema_letterspacing_59859_60664 = null;
var coercer_fn_letterspacing_59857_60665 = (((((!((schema_letterspacing_59859_60664 == null)))) && ((!(cljs.core.fn_QMARK_(schema_letterspacing_59859_60664))))))?app.common.schema.coercer(schema_letterspacing_59859_60664):null);
var decode_fn_letterspacing_59858_60666 = app.common.json.__GT_clj;
var prop_set_fn_letterspacing_59863_60667 = (function (val_letterspacing_59861){
var obj_59731_this_59737 = this;
var internal_fn_letterspacing_59856 = (function (_,value){
var value__$1 = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(""+(value ?? ""));
if(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.empty_QMARK_(value__$1);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.re_matches(app.plugins.text.letter_spacing_re,value__$1);
}
})())){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"letterSpacing","letterSpacing",-1331934989),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"letterSpacing","letterSpacing",-1331934989),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_text_range(id,start,end,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),value__$1], null)));

}
}
});
return internal_fn_letterspacing_59856.call(obj_59731_this_59737,obj_59731_this_59737,val_letterspacing_59861);
});
var prop_get_fn_texttransform_59870_60668 = (function (){
var obj_59731_this_59737 = this;
var internal_fn_texttransform_59864 = (function (self){
var range_data = app.plugins.text.content_range__GT_text_PLUS_styles(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self)),start,end);
return app.plugins.utils.mixed_value(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),range_data));
});
return internal_fn_texttransform_59864.call(obj_59731_this_59737,obj_59731_this_59737);
});
var schema_texttransform_59867_60669 = null;
var coercer_fn_texttransform_59865_60670 = (((((!((schema_texttransform_59867_60669 == null)))) && ((!(cljs.core.fn_QMARK_(schema_texttransform_59867_60669))))))?app.common.schema.coercer(schema_texttransform_59867_60669):null);
var decode_fn_texttransform_59866_60671 = app.common.json.__GT_clj;
var prop_set_fn_texttransform_59871_60672 = (function (val_texttransform_59869){
var obj_59731_this_59737 = this;
var internal_fn_texttransform_59864 = (function (_,value){
if(((typeof value === 'string') && (cljs.core.not(cljs.core.re_matches(app.plugins.text.text_transform_re,value))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"textTransform","textTransform",-1959669529),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"textTransform","textTransform",-1959669529),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_text_range(id,start,end,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),value], null)));

}
}
});
return internal_fn_texttransform_59864.call(obj_59731_this_59737,obj_59731_this_59737,val_texttransform_59869);
});
var prop_get_fn_textdecoration_59878_60673 = (function (){
var obj_59731_this_59737 = this;
var internal_fn_textdecoration_59872 = (function (self){
var range_data = app.plugins.text.content_range__GT_text_PLUS_styles(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self)),start,end);
return app.plugins.utils.mixed_value(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),range_data));
});
return internal_fn_textdecoration_59872.call(obj_59731_this_59737,obj_59731_this_59737);
});
var schema_textdecoration_59875_60674 = null;
var coercer_fn_textdecoration_59873_60675 = (((((!((schema_textdecoration_59875_60674 == null)))) && ((!(cljs.core.fn_QMARK_(schema_textdecoration_59875_60674))))))?app.common.schema.coercer(schema_textdecoration_59875_60674):null);
var decode_fn_textdecoration_59874_60676 = app.common.json.__GT_clj;
var prop_set_fn_textdecoration_59879_60677 = (function (val_textdecoration_59877){
var obj_59731_this_59737 = this;
var internal_fn_textdecoration_59872 = (function (_,value){
if(cljs.core.truth_((function (){var and__5023__auto__ = typeof value === 'string';
if(and__5023__auto__){
return cljs.core.re_matches(app.plugins.text.text_decoration_re,value);
} else {
return and__5023__auto__;
}
})())){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"textDecoration","textDecoration",418180221),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"textDecoration","textDecoration",418180221),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_text_range(id,start,end,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),value], null)));

}
}
});
return internal_fn_textdecoration_59872.call(obj_59731_this_59737,obj_59731_this_59737,val_textdecoration_59877);
});
var prop_get_fn_direction_59886_60678 = (function (){
var obj_59731_this_59737 = this;
var internal_fn_direction_59880 = (function (self){
var range_data = app.plugins.text.content_range__GT_text_PLUS_styles(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self)),start,end);
return app.plugins.utils.mixed_value(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"direction","direction",-633359395),range_data));
});
return internal_fn_direction_59880.call(obj_59731_this_59737,obj_59731_this_59737);
});
var schema_direction_59883_60679 = null;
var coercer_fn_direction_59881_60680 = (((((!((schema_direction_59883_60679 == null)))) && ((!(cljs.core.fn_QMARK_(schema_direction_59883_60679))))))?app.common.schema.coercer(schema_direction_59883_60679):null);
var decode_fn_direction_59882_60681 = app.common.json.__GT_clj;
var prop_set_fn_direction_59887_60682 = (function (val_direction_59885){
var obj_59731_this_59737 = this;
var internal_fn_direction_59880 = (function (_,value){
if(cljs.core.truth_((function (){var and__5023__auto__ = typeof value === 'string';
if(and__5023__auto__){
return cljs.core.re_matches(app.plugins.text.text_direction_re,value);
} else {
return and__5023__auto__;
}
})())){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"direction","direction",-633359395),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"direction","direction",-633359395),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_text_range(id,start,end,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"direction","direction",-633359395),value], null)));

}
}
});
return internal_fn_direction_59880.call(obj_59731_this_59737,obj_59731_this_59737,val_direction_59885);
});
var prop_get_fn_align_59896_60683 = (function (){
var obj_59731_this_59737 = this;
var internal_fn_align_59890 = (function (self){
var range_data = app.plugins.text.content_range__GT_text_PLUS_styles(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self)),start,end);
return app.plugins.utils.mixed_value(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text-align","text-align",1786091845),range_data));
});
return internal_fn_align_59890.call(obj_59731_this_59737,obj_59731_this_59737);
});
var schema_align_59893_60684 = null;
var coercer_fn_align_59891_60685 = (((((!((schema_align_59893_60684 == null)))) && ((!(cljs.core.fn_QMARK_(schema_align_59893_60684))))))?app.common.schema.coercer(schema_align_59893_60684):null);
var decode_fn_align_59892_60686 = app.common.json.__GT_clj;
var prop_set_fn_align_59897_60687 = (function (val_align_59895){
var obj_59731_this_59737 = this;
var internal_fn_align_59890 = (function (_,value){
if(cljs.core.truth_((function (){var and__5023__auto__ = typeof value === 'string';
if(and__5023__auto__){
return cljs.core.re_matches(app.plugins.text.text_align_re,value);
} else {
return and__5023__auto__;
}
})())){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"align","align",1964212802),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"align","align",1964212802),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_text_range(id,start,end,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),value], null)));

}
}
});
return internal_fn_align_59890.call(obj_59731_this_59737,obj_59731_this_59737,val_align_59895);
});
var prop_get_fn_fills_59904_60688 = (function (){
var obj_59731_this_59737 = this;
var internal_fn_fills_59898 = (function (self){
var range_data = app.plugins.text.content_range__GT_text_PLUS_styles(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self)),start,end);
return app.plugins.format.format_fills(app.plugins.utils.mixed_value(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fills","fills",902966780),range_data)));
});
return internal_fn_fills_59898.call(obj_59731_this_59737,obj_59731_this_59737);
});
var schema_fills_59901_60689 = null;
var coercer_fn_fills_59899_60690 = (((((!((schema_fills_59901_60689 == null)))) && ((!(cljs.core.fn_QMARK_(schema_fills_59901_60689))))))?app.common.schema.coercer(schema_fills_59901_60689):null);
var decode_fn_fills_59900_60691 = app.common.json.__GT_clj;
var prop_set_fn_fills_59905_60692 = (function (val_fills_59903){
var obj_59731_this_59737 = this;
var internal_fn_fills_59898 = (function (_,value){
var value__$1 = app.plugins.parser.parse_fills(value);
if(cljs.core.not(app.common.schema.validate(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword("app.common.types.shape","fill","app.common.types.shape/fill",1975990399)], null),value__$1))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fills","fills",902966780),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fills","fills",902966780),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_text_range(id,start,end,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fills","fills",902966780),value__$1], null)));

}
}
});
return internal_fn_fills_59898.call(obj_59731_this_59737,obj_59731_this_59737,val_fills_59903);
});
var schema_applytypography_59909_60693 = null;
var coercer_fn_applytypography_59907_60694 = (((((!((schema_applytypography_59909_60693 == null)))) && ((!(cljs.core.fn_QMARK_(schema_applytypography_59909_60693))))))?app.common.schema.coercer(schema_applytypography_59909_60693):null);
var decode_fn_applytypography_59908_60695 = app.common.json.__GT_clj;
var prop_get_fn_applytypography_59912_60696 = (function (){
var obj_59731_this_59737 = this;
var internal_fn_applytypography_59906 = (function (typography){
var typography__$1 = app.plugins.utils.proxy__GT_library_typography(typography);
var attrs = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(typography__$1,new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688),file_id),new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(typography__$1)),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177)], 0));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_text_range(id,start,end,attrs));
});
var internal_fn_applytypography_59906__$1 = internal_fn_applytypography_59906.bind(obj_59731_this_59737);
return internal_fn_applytypography_59906__$1;
});
Object.defineProperty(obj_59731_target_59738_60619,Symbol.toStringTag,(function (){var obj60392 = ({"enumerable":false,"get":prop_get_fn__59746_60620});
return obj60392;
})());

Object.defineProperty(obj_59731_target_59738_60619,Symbol["for"]("penpot.reify:type"),(function (){var obj60394 = ({"enumerable":false,"get":prop_get_fn__59753_60621});
return obj60394;
})());

Object.defineProperty(obj_59731_target_59738_60619,"$plugin",(function (){var obj60396 = ({"enumerable":false,"get":prop_get_fn_plugin_59760_60622});
return obj60396;
})());

Object.defineProperty(obj_59731_target_59738_60619,"$id",(function (){var obj60398 = ({"enumerable":false,"get":prop_get_fn_id_59767_60623});
return obj60398;
})());

Object.defineProperty(obj_59731_target_59738_60619,"$file",(function (){var obj60400 = ({"enumerable":false,"get":prop_get_fn_file_59775_60624});
return obj60400;
})());

Object.defineProperty(obj_59731_target_59738_60619,"$page",(function (){var obj60402 = ({"enumerable":false,"get":prop_get_fn_page_59782_60625});
return obj60402;
})());

Object.defineProperty(obj_59731_target_59738_60619,"shape",(function (){var obj60404 = ({"enumerable":true,"get":prop_get_fn_shape_59789_60626});
return obj60404;
})());

Object.defineProperty(obj_59731_target_59738_60619,"characters",(function (){var obj60406 = ({"enumerable":true,"get":prop_get_fn_characters_59796_60627});
return obj60406;
})());

Object.defineProperty(obj_59731_target_59738_60619,"fontId",(function (){var obj60408 = ({"enumerable":true,"get":prop_get_fn_fontid_59803_60628,"set":prop_set_fn_fontid_59804_60632});
return obj60408;
})());

Object.defineProperty(obj_59731_target_59738_60619,"fontFamily",(function (){var obj60410 = ({"enumerable":true,"get":prop_get_fn_fontfamily_59813_60633,"set":prop_set_fn_fontfamily_59814_60637});
return obj60410;
})());

Object.defineProperty(obj_59731_target_59738_60619,"fontVariantId",(function (){var obj60412 = ({"enumerable":true,"get":prop_get_fn_fontvariantid_59821_60638,"set":prop_set_fn_fontvariantid_59822_60642});
return obj60412;
})());

Object.defineProperty(obj_59731_target_59738_60619,"fontSize",(function (){var obj60414 = ({"enumerable":true,"get":prop_get_fn_fontsize_59829_60643,"set":prop_set_fn_fontsize_59830_60647});
return obj60414;
})());

Object.defineProperty(obj_59731_target_59738_60619,"fontWeight",(function (){var obj60416 = ({"enumerable":true,"get":prop_get_fn_fontweight_59837_60648,"set":prop_set_fn_fontweight_59838_60652});
return obj60416;
})());

Object.defineProperty(obj_59731_target_59738_60619,"fontStyle",(function (){var obj60418 = ({"enumerable":true,"get":prop_get_fn_fontstyle_59845_60653,"set":prop_set_fn_fontstyle_59846_60657});
return obj60418;
})());

Object.defineProperty(obj_59731_target_59738_60619,"lineHeight",(function (){var obj60420 = ({"enumerable":true,"get":prop_get_fn_lineheight_59853_60658,"set":prop_set_fn_lineheight_59855_60662});
return obj60420;
})());

Object.defineProperty(obj_59731_target_59738_60619,"letterSpacing",(function (){var obj60422 = ({"enumerable":true,"get":prop_get_fn_letterspacing_59862_60663,"set":prop_set_fn_letterspacing_59863_60667});
return obj60422;
})());

Object.defineProperty(obj_59731_target_59738_60619,"textTransform",(function (){var obj60424 = ({"enumerable":true,"get":prop_get_fn_texttransform_59870_60668,"set":prop_set_fn_texttransform_59871_60672});
return obj60424;
})());

Object.defineProperty(obj_59731_target_59738_60619,"textDecoration",(function (){var obj60426 = ({"enumerable":true,"get":prop_get_fn_textdecoration_59878_60673,"set":prop_set_fn_textdecoration_59879_60677});
return obj60426;
})());

Object.defineProperty(obj_59731_target_59738_60619,"direction",(function (){var obj60428 = ({"enumerable":true,"get":prop_get_fn_direction_59886_60678,"set":prop_set_fn_direction_59887_60682});
return obj60428;
})());

Object.defineProperty(obj_59731_target_59738_60619,"align",(function (){var obj60430 = ({"enumerable":true,"get":prop_get_fn_align_59896_60683,"set":prop_set_fn_align_59897_60687});
return obj60430;
})());

Object.defineProperty(obj_59731_target_59738_60619,"fills",(function (){var obj60432 = ({"enumerable":true,"get":prop_get_fn_fills_59904_60688,"set":prop_set_fn_fills_59905_60692});
return obj60432;
})());

Object.defineProperty(obj_59731_target_59738_60619,"applyTypography",(function (){var obj60434 = ({"enumerable":false,"get":prop_get_fn_applytypography_59912_60696});
return obj60434;
})());


return obj_59731;
});
app.plugins.text.add_text_props = (function app$plugins$text$add_text_props(shape_proxy,plugin_id){
var target60537 = shape_proxy;
var get_fn60534_60697 = (function (p1__60435_SHARP_){
return app.common.types.text.content__GT_text(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60435_SHARP_)));
});
var set_fn60535_60698 = (function (self,value){
var id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
if((((!(typeof value === 'string'))) || (cljs.core.empty_QMARK_(value)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"characters","characters",-163867197),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"characters","characters",-163867197),"Plugin doesn't have 'content:write' permission");
} else {
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"workspace-editor-state","workspace-editor-state",-794384251).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)),id)){
var shape = app.plugins.utils.proxy__GT_shape(self);
var editor = app.util.text_editor.create_editor_state.cljs$core$IFn$_invoke$arity$1(app.util.text_editor.import_content(app.common.types.text.change_text(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"content","content",15833224)),value)));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_editor_state(shape,editor));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),(function (p1__60436_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__60436_SHARP_,new cljs.core.Keyword(null,"content","content",15833224),app.common.types.text.change_text,value);
})));

}
}
}
});
Object.defineProperty(target60537,"characters",(function (){var obj60539 = ({"enumerable":true,"get":(function (){
var this60536 = this;
return get_fn60534_60697(this60536);
}),"set":(function (value__34924__auto__){
var this60536 = this;
return set_fn60535_60698(this60536,value__34924__auto__);
})});
return obj60539;
})());

var get_fn60534_60699 = (function (p1__60437_SHARP_){
return app.common.data.name(new cljs.core.Keyword(null,"grow-type","grow-type",-908344411).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60437_SHARP_)));
});
var set_fn60535_60700 = (function (self,value){
var id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
if((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-height","auto-height",-960519663),null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),null,new cljs.core.Keyword(null,"auto-width","auto-width",-992925188),null], null), null),value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"growType","growType",-2038406868),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"growType","growType",-2038406868),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),(function (p1__60438_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60438_SHARP_,new cljs.core.Keyword(null,"grow-type","grow-type",-908344411),value__$1);
})));

}
}
});
Object.defineProperty(target60537,"growType",(function (){var obj60541 = ({"enumerable":true,"get":(function (){
var this60536 = this;
return get_fn60534_60699(this60536);
}),"set":(function (value__34924__auto__){
var this60536 = this;
return set_fn60535_60700(this60536,value__34924__auto__);
})});
return obj60541;
})());

var get_fn60534_60701 = (function (p1__60439_SHARP_){
return app.plugins.format.format_mixed(new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(app.plugins.text.text_props(app.plugins.utils.proxy__GT_shape(p1__60439_SHARP_))));
});
var set_fn60535_60702 = (function (self,value){
var id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var font = ((typeof value === 'string')?app.main.fonts.get_font_data(value):null);
var variant = app.main.fonts.get_default_variant(font);
if(cljs.core.not(font)){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontId","fontId",-474874285),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontId","fontId",-474874285),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_attrs(id,app.plugins.text.font_data(font,variant)));

}
}
});
Object.defineProperty(target60537,"fontId",(function (){var obj60543 = ({"enumerable":true,"get":(function (){
var this60536 = this;
return get_fn60534_60701(this60536);
}),"set":(function (value__34924__auto__){
var this60536 = this;
return set_fn60535_60702(this60536,value__34924__auto__);
})});
return obj60543;
})());

var get_fn60534_60713 = (function (p1__60440_SHARP_){
return app.plugins.format.format_mixed(new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(app.plugins.text.text_props(app.plugins.utils.proxy__GT_shape(p1__60440_SHARP_))));
});
var set_fn60535_60714 = (function (self,value){
var id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var font = app.main.fonts.find_font_data(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),value], null));
var variant = app.main.fonts.get_default_variant(font);
if(cljs.core.not(font)){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_attrs(id,app.plugins.text.font_data(font,variant)));

}
}
});
Object.defineProperty(target60537,"fontFamily",(function (){var obj60545 = ({"enumerable":true,"get":(function (){
var this60536 = this;
return get_fn60534_60713(this60536);
}),"set":(function (value__34924__auto__){
var this60536 = this;
return set_fn60535_60714(this60536,value__34924__auto__);
})});
return obj60545;
})());

var get_fn60534_60805 = (function (p1__60441_SHARP_){
return app.plugins.format.format_mixed(new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718).cljs$core$IFn$_invoke$arity$1(app.plugins.text.text_props(app.plugins.utils.proxy__GT_shape(p1__60441_SHARP_))));
});
var set_fn60535_60806 = (function (self,value){
var id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var font = app.main.fonts.get_font_data(app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"fontId"));
var variant = app.main.fonts.get_variant(font,value);
if(cljs.core.not(variant)){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontVariantId","fontVariantId",-598111105),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontVariantId","fontVariantId",-598111105),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_attrs(id,app.plugins.text.variant_data(variant)));

}
}
});
Object.defineProperty(target60537,"fontVariantId",(function (){var obj60547 = ({"enumerable":true,"get":(function (){
var this60536 = this;
return get_fn60534_60805(this60536);
}),"set":(function (value__34924__auto__){
var this60536 = this;
return set_fn60535_60806(this60536,value__34924__auto__);
})});
return obj60547;
})());

var get_fn60534_60807 = (function (p1__60442_SHARP_){
return app.plugins.format.format_mixed(new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(app.plugins.text.text_props(app.plugins.utils.proxy__GT_shape(p1__60442_SHARP_))));
});
var set_fn60535_60808 = (function (self,value){
var id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var value__$1 = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(""+(value ?? ""));
if(((cljs.core.empty_QMARK_(value__$1)) || (cljs.core.not(cljs.core.re_matches(app.plugins.text.font_size_re,value__$1))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontSize","fontSize",919623033),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_attrs(id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),value__$1], null)));

}
}
});
Object.defineProperty(target60537,"fontSize",(function (){var obj60549 = ({"enumerable":true,"get":(function (){
var this60536 = this;
return get_fn60534_60807(this60536);
}),"set":(function (value__34924__auto__){
var this60536 = this;
return set_fn60535_60808(this60536,value__34924__auto__);
})});
return obj60549;
})());

var get_fn60534_60809 = (function (p1__60443_SHARP_){
return app.plugins.format.format_mixed(new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(app.plugins.text.text_props(app.plugins.utils.proxy__GT_shape(p1__60443_SHARP_))));
});
var set_fn60535_60810 = (function (self,value){
var id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var font = app.main.fonts.get_font_data(app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"fontId"));
var weight = ""+(value ?? "");
var style = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"fontStyle");
var variant = (function (){var or__5025__auto__ = app.main.fonts.find_variant(font,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight], null));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.fonts.find_variant(font,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"weight","weight",-1262796205),weight], null));
}
})();
if((variant == null)){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),""+"Font weight '"+(value ?? "")+"' not supported for the current font");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_attrs(id,app.plugins.text.variant_data(variant)));

}
}
});
Object.defineProperty(target60537,"fontWeight",(function (){var obj60551 = ({"enumerable":true,"get":(function (){
var this60536 = this;
return get_fn60534_60809(this60536);
}),"set":(function (value__34924__auto__){
var this60536 = this;
return set_fn60535_60810(this60536,value__34924__auto__);
})});
return obj60551;
})());

var get_fn60534_60835 = (function (p1__60444_SHARP_){
return app.plugins.format.format_mixed(new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(app.plugins.text.text_props(app.plugins.utils.proxy__GT_shape(p1__60444_SHARP_))));
});
var set_fn60535_60836 = (function (self,value){
var id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var font = app.main.fonts.get_font_data(app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"fontId"));
var style = ""+(value ?? "");
var weight = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"fontWeight");
var variant = (function (){var or__5025__auto__ = app.main.fonts.find_variant(font,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"weight","weight",-1262796205),weight,new cljs.core.Keyword(null,"style","style",-496642736),style], null));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.fonts.find_variant(font,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null));
}
})();
if((variant == null)){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontStyle","fontStyle",1246842165),""+"Font style '"+(value ?? "")+"' not supported for the current font");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontStyle","fontStyle",1246842165),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_attrs(id,app.plugins.text.variant_data(variant)));

}
}
});
Object.defineProperty(target60537,"fontStyle",(function (){var obj60553 = ({"enumerable":true,"get":(function (){
var this60536 = this;
return get_fn60534_60835(this60536);
}),"set":(function (value__34924__auto__){
var this60536 = this;
return set_fn60535_60836(this60536,value__34924__auto__);
})});
return obj60553;
})());

var get_fn60534_60861 = (function (p1__60445_SHARP_){
return app.plugins.format.format_mixed(new cljs.core.Keyword(null,"line-height","line-height",1870784992).cljs$core$IFn$_invoke$arity$1(app.plugins.text.text_props(app.plugins.utils.proxy__GT_shape(p1__60445_SHARP_))));
});
var set_fn60535_60862 = (function (self,value){
var id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var value__$1 = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(""+(value ?? ""));
if(((cljs.core.empty_QMARK_(value__$1)) || (cljs.core.not(cljs.core.re_matches(app.plugins.text.line_height_re,value__$1))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"lineHeight","lineHeight",-1729831016),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"lineHeight","lineHeight",-1729831016),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_attrs(id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),value__$1], null)));

}
}
});
Object.defineProperty(target60537,"lineHeight",(function (){var obj60555 = ({"enumerable":true,"get":(function (){
var this60536 = this;
return get_fn60534_60861(this60536);
}),"set":(function (value__34924__auto__){
var this60536 = this;
return set_fn60535_60862(this60536,value__34924__auto__);
})});
return obj60555;
})());

var get_fn60534_60878 = (function (p1__60446_SHARP_){
return app.plugins.format.format_mixed(new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767).cljs$core$IFn$_invoke$arity$1(app.plugins.text.text_props(app.plugins.utils.proxy__GT_shape(p1__60446_SHARP_))));
});
var set_fn60535_60879 = (function (self,value){
var id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var value__$1 = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(""+(value ?? ""));
if((((!(typeof value__$1 === 'string'))) || (cljs.core.not(cljs.core.re_matches(app.plugins.text.letter_spacing_re,value__$1))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"letterSpacing","letterSpacing",-1331934989),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"letterSpacing","letterSpacing",-1331934989),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_attrs(id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),value__$1], null)));

}
}
});
Object.defineProperty(target60537,"letterSpacing",(function (){var obj60557 = ({"enumerable":true,"get":(function (){
var this60536 = this;
return get_fn60534_60878(this60536);
}),"set":(function (value__34924__auto__){
var this60536 = this;
return set_fn60535_60879(this60536,value__34924__auto__);
})});
return obj60557;
})());

var get_fn60534_60880 = (function (p1__60447_SHARP_){
return app.plugins.format.format_mixed(new cljs.core.Keyword(null,"text-transform","text-transform",1685000676).cljs$core$IFn$_invoke$arity$1(app.plugins.text.text_props(app.plugins.utils.proxy__GT_shape(p1__60447_SHARP_))));
});
var set_fn60535_60881 = (function (self,value){
var id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
if((((!(typeof value === 'string'))) || (cljs.core.not(cljs.core.re_matches(app.plugins.text.text_transform_re,value))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"textTransform","textTransform",-1959669529),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"textTransform","textTransform",-1959669529),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_attrs(id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),value], null)));

}
}
});
Object.defineProperty(target60537,"textTransform",(function (){var obj60559 = ({"enumerable":true,"get":(function (){
var this60536 = this;
return get_fn60534_60880(this60536);
}),"set":(function (value__34924__auto__){
var this60536 = this;
return set_fn60535_60881(this60536,value__34924__auto__);
})});
return obj60559;
})());

var get_fn60534_60893 = (function (p1__60448_SHARP_){
return app.plugins.format.format_mixed(new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207).cljs$core$IFn$_invoke$arity$1(app.plugins.text.text_props(app.plugins.utils.proxy__GT_shape(p1__60448_SHARP_))));
});
var set_fn60535_60894 = (function (self,value){
var id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
if((((!(typeof value === 'string'))) || (cljs.core.not(cljs.core.re_matches(app.plugins.text.text_decoration_re,value))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"textDecoration","textDecoration",418180221),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"textDecoration","textDecoration",418180221),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_attrs(id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),value], null)));

}
}
});
Object.defineProperty(target60537,"textDecoration",(function (){var obj60608 = ({"enumerable":true,"get":(function (){
var this60536 = this;
return get_fn60534_60893(this60536);
}),"set":(function (value__34924__auto__){
var this60536 = this;
return set_fn60535_60894(this60536,value__34924__auto__);
})});
return obj60608;
})());

var get_fn60534_60896 = (function (p1__60449_SHARP_){
return app.plugins.format.format_mixed(new cljs.core.Keyword(null,"text-direction","text-direction",590275785).cljs$core$IFn$_invoke$arity$1(app.plugins.text.text_props(app.plugins.utils.proxy__GT_shape(p1__60449_SHARP_))));
});
var set_fn60535_60897 = (function (self,value){
var id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
if((((!(typeof value === 'string'))) || (cljs.core.not(cljs.core.re_matches(app.plugins.text.text_direction_re,value))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"textDirection","textDirection",-486409590),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"textDirection","textDirection",-486409590),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_attrs(id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-direction","text-direction",590275785),value], null)));

}
}
});
Object.defineProperty(target60537,"direction",(function (){var obj60610 = ({"enumerable":true,"get":(function (){
var this60536 = this;
return get_fn60534_60896(this60536);
}),"set":(function (value__34924__auto__){
var this60536 = this;
return set_fn60535_60897(this60536,value__34924__auto__);
})});
return obj60610;
})());

var get_fn60534_60899 = (function (p1__60532_SHARP_){
return app.plugins.format.format_mixed(new cljs.core.Keyword(null,"text-align","text-align",1786091845).cljs$core$IFn$_invoke$arity$1(app.plugins.text.text_props(app.plugins.utils.proxy__GT_shape(p1__60532_SHARP_))));
});
var set_fn60535_60900 = (function (self,value){
var id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
if((((!(typeof value === 'string'))) || (cljs.core.not(cljs.core.re_matches(app.plugins.text.text_align_re,value))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"align","align",1964212802),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"align","align",1964212802),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_attrs(id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),value], null)));

}
}
});
Object.defineProperty(target60537,"align",(function (){var obj60612 = ({"enumerable":true,"get":(function (){
var this60536 = this;
return get_fn60534_60899(this60536);
}),"set":(function (value__34924__auto__){
var this60536 = this;
return set_fn60535_60900(this60536,value__34924__auto__);
})});
return obj60612;
})());

var get_fn60534_60901 = (function (p1__60533_SHARP_){
return new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333).cljs$core$IFn$_invoke$arity$1(app.plugins.text.text_props(app.plugins.utils.proxy__GT_shape(p1__60533_SHARP_)));
});
var set_fn60535_60902 = (function (self,value){
var id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
if((((!(typeof value === 'string'))) || (cljs.core.not(cljs.core.re_matches(app.plugins.text.vertical_align_re,value))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"verticalAlign","verticalAlign",465597462),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"verticalAlign","verticalAlign",465597462),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_attrs(id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),value], null)));

}
}
});
Object.defineProperty(target60537,"verticalAlign",(function (){var obj60614 = ({"enumerable":true,"get":(function (){
var this60536 = this;
return get_fn60534_60901(this60536);
}),"set":(function (value__34924__auto__){
var this60536 = this;
return set_fn60535_60902(this60536,value__34924__auto__);
})});
return obj60614;
})());

return target60537;
});

//# sourceMappingURL=app.plugins.text.js.map
