import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.config.js";
import "./app.main.ui.formats.js";
import "./app.util.color.js";
import "./cuerdas.core.js";
goog.provide('app.util.code_gen.style_css_formats');
app.util.code_gen.style_css_formats.css_formatters = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"padding-inline-end","padding-inline-end",-647416958),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"margin-inline-end","margin-inline-end",-1696808891),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"border-end-start-radius","border-end-start-radius",-251560249),new cljs.core.Keyword(null,"max-block-size","max-block-size",-1751985816),new cljs.core.Keyword(null,"padding-block-end","padding-block-end",923602025),new cljs.core.Keyword(null,"min-inline-size","min-inline-size",-2050841943),new cljs.core.Keyword(null,"margin-block-end","margin-block-end",-1287470806),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"column-gap","column-gap",384822863),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),new cljs.core.Keyword(null,"border-start-end-radius","border-start-end-radius",867698004),new cljs.core.Keyword(null,"min-block-size","min-block-size",2039624084),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"max-inline-size","max-inline-size",1870424342),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"border-end-end-radius","border-end-end-radius",670676344),new cljs.core.Keyword(null,"margin-inline-start","margin-inline-start",320232954),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),new cljs.core.Keyword(null,"border-start-start-radius","border-start-start-radius",520714431),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"padding-inline-start","padding-inline-start",1837266335),new cljs.core.Keyword(null,"margin","margin",-995903681)],[new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-array","size-array",-1012282519),new cljs.core.Keyword(null,"shadows","shadows",-1489088471),new cljs.core.Keyword(null,"size-array","size-array",-1012282519),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-array","size-array",-1012282519),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"string-or-size-array","string-or-size-array",209186492),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-array","size-array",-1012282519),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-array","size-array",-1012282519),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"tracks","tracks",-326768501),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-array","size-array",-1012282519),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"size-array","size-array",-1012282519),new cljs.core.Keyword(null,"string-or-size-array","string-or-size-array",209186492),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-array","size-array",-1012282519),new cljs.core.Keyword(null,"size-array","size-array",-1012282519),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"string-or-size-array","string-or-size-array",209186492),new cljs.core.Keyword(null,"size-array","size-array",-1012282519),new cljs.core.Keyword(null,"tracks","tracks",-326768501),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"string-or-size-array","string-or-size-array",209186492),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-array","size-array",-1012282519),new cljs.core.Keyword(null,"string-or-size-array","string-or-size-array",209186492),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"size-array","size-array",-1012282519),new cljs.core.Keyword(null,"size-array","size-array",-1012282519)]);
/**
 * Format a color value to a CSS compatible string based on the given format.
 */
app.util.code_gen.style_css_formats.format_color_value = (function app$util$code_gen$style_css_formats$format_color_value(value,options){
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"hex","hex",41691346));
if(cljs.core.truth_(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(value))){
var image_url = app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(value));
var opacity_color = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(value),(1)))?app.util.color.gradient__GT_css(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"linear","linear",872268697),new cljs.core.Keyword(null,"stops","stops",-1205459005),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#FFFFFF",new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(value)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#FFFFFF",new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(value)], null)], null)], null)):null);
if(cljs.core.truth_(opacity_color)){
return ""+(opacity_color ?? "")+", url("+(image_url ?? "")+") no-repeat center center / cover";
} else {
return ""+"url("+(image_url ?? "")+") no-repeat center center / cover";
}
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(value),(1))){
return app.util.color.color__GT_format__GT_background(value,format);
} else {
return app.util.color.color__GT_format__GT_background(value,format);

}
}
});
app.util.code_gen.style_css_formats.format_shadow__GT_css = (function app$util$code_gen$style_css_formats$format_shadow__GT_css(p__69454,options){
var map__69455 = p__69454;
var map__69455__$1 = cljs.core.__destructure_map(map__69455);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69455__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var offset_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69455__$1,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230));
var offset_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69455__$1,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008));
var blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69455__$1,new cljs.core.Keyword(null,"blur","blur",-453500461));
var spread = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69455__$1,new cljs.core.Keyword(null,"spread","spread",862337191));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69455__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var css_color = app.util.code_gen.style_css_formats.format_color_value(color,options);
return ""+(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"inner-shadow","inner-shadow",-548982250)))?"inset ":"") ?? "")+((cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$6 ? cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$6("%spx %spx %spx %spx %s",offset_x,offset_y,blur,spread,css_color) : cuerdas.core.fmt.call(null,"%spx %spx %spx %spx %s",offset_x,offset_y,blur,spread,css_color)) ?? "");
});
app.util.code_gen.style_css_formats.format_position = (function app$util$code_gen$style_css_formats$format_position(value){
if(typeof value === 'number'){
return app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$1(value);
} else {
return value;

}
});
app.util.code_gen.style_css_formats.format_size = (function app$util$code_gen$style_css_formats$format_size(value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"fill","fill",883462889))){
return "100%";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"auto","auto",-566279492))){
return "auto";
} else {
if(typeof value === 'number'){
return app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$1(value);
} else {
return value;

}
}
}
});
app.util.code_gen.style_css_formats.format_color = (function app$util$code_gen$style_css_formats$format_color(value,options){
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"hex","hex",41691346));
return app.util.code_gen.style_css_formats.format_color_value(value,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"format","format",-1306924766),format));
});
app.util.code_gen.style_css_formats.format_color_array = (function app$util$code_gen$style_css_formats$format_color_array(value,options){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69456_SHARP_){
return app.util.code_gen.style_css_formats.format_color_value(p1__69456_SHARP_,options);
}),value));
});
app.util.code_gen.style_css_formats.format_border = (function app$util$code_gen$style_css_formats$format_border(p__69457,options){
var map__69458 = p__69457;
var map__69458__$1 = cljs.core.__destructure_map(map__69458);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69458__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69458__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69458__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ""+(app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$1(width) ?? "")+" "+(app.common.data.name(style) ?? "")+" "+(app.util.code_gen.style_css_formats.format_color_value(color,options) ?? "");
});
app.util.code_gen.style_css_formats.format_border_style = (function app$util$code_gen$style_css_formats$format_border_style(value){
return app.common.data.name(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(value));
});
app.util.code_gen.style_css_formats.format_border_width = (function app$util$code_gen$style_css_formats$format_border_width(value){
return app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(value));
});
app.util.code_gen.style_css_formats.format_border_color = (function app$util$code_gen$style_css_formats$format_border_color(value,options){
return app.util.code_gen.style_css_formats.format_color(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(value),options);
});
app.util.code_gen.style_css_formats.format_size_array = (function app$util$code_gen$style_css_formats$format_size_array(value){
if(((cljs.core.coll_QMARK_(value)) && (app.common.data.not_empty_QMARK_(value)))){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.ui.formats.format_pixels,value));
} else {
if((!((value == null)))){
return value;
} else {
return null;
}
}
});
app.util.code_gen.style_css_formats.format_string_or_size_array = (function app$util$code_gen$style_css_formats$format_string_or_size_array(value){
if(typeof value === 'string'){
return value;
} else {
if(((cljs.core.coll_QMARK_(value)) && (app.common.data.not_empty_QMARK_(value)))){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.ui.formats.format_pixels,value));
} else {
if((!((value == null)))){
return value;
} else {
return null;
}
}
}
});
app.util.code_gen.style_css_formats.format_keyword = (function app$util$code_gen$style_css_formats$format_keyword(value){
return app.common.data.name(value);
});
app.util.code_gen.style_css_formats.format_tracks = (function app$util$code_gen$style_css_formats$format_tracks(value){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__69461){
var map__69462 = p__69461;
var map__69462__$1 = cljs.core.__destructure_map(map__69462);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69462__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69462__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__69463 = type;
var G__69463__$1 = (((G__69463 instanceof cljs.core.Keyword))?G__69463.fqn:null);
switch (G__69463__$1) {
case "flex":
return ""+(app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(value__$1) ?? "")+"fr";

break;
case "percent":
return app.main.ui.formats.format_percent.cljs$core$IFn$_invoke$arity$1((value__$1 / (100)));

break;
case "auto":
return "auto";

break;
default:
return app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$1(value__$1);

}
}),value));
});
app.util.code_gen.style_css_formats.format_shadow = (function app$util$code_gen$style_css_formats$format_shadow(value,options){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69464_SHARP_){
return app.util.code_gen.style_css_formats.format_shadow__GT_css(p1__69464_SHARP_,options);
}),value));
});
app.util.code_gen.style_css_formats.format_blur = (function app$util$code_gen$style_css_formats$format_blur(value){
return ""+"blur("+(app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$1(value) ?? "")+")";
});
app.util.code_gen.style_css_formats.format_matrix = (function app$util$code_gen$style_css_formats$format_matrix(value){
return app.main.ui.formats.format_matrix.cljs$core$IFn$_invoke$arity$1(value);
});
/**
 * Get the appropriate value formatter function for a given CSS property.
 */
app.util.code_gen.style_css_formats.format_value = (function app$util$code_gen$style_css_formats$format_value(property,value,options){
var property__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.util.code_gen.style_css_formats.css_formatters,property);
var G__69468 = property__$1;
var G__69468__$1 = (((G__69468 instanceof cljs.core.Keyword))?G__69468.fqn:null);
switch (G__69468__$1) {
case "position":
return app.util.code_gen.style_css_formats.format_position(value);

break;
case "size":
return app.util.code_gen.style_css_formats.format_size(value);

break;
case "color":
return app.util.code_gen.style_css_formats.format_color(value,options);

break;
case "color-array":
return app.util.code_gen.style_css_formats.format_color_array(value,options);

break;
case "border":
return app.util.code_gen.style_css_formats.format_border(value,options);

break;
case "border-style":
return app.util.code_gen.style_css_formats.format_border_style(value);

break;
case "border-width":
return app.util.code_gen.style_css_formats.format_border_width(value);

break;
case "border-color":
return app.util.code_gen.style_css_formats.format_border_color(value,options);

break;
case "size-array":
return app.util.code_gen.style_css_formats.format_size_array(value);

break;
case "string-or-size-array":
return app.util.code_gen.style_css_formats.format_string_or_size_array(value);

break;
case "keyword":
return app.util.code_gen.style_css_formats.format_keyword(value);

break;
case "tracks":
return app.util.code_gen.style_css_formats.format_tracks(value);

break;
case "shadows":
return app.util.code_gen.style_css_formats.format_shadow(value,options);

break;
case "blur":
return app.util.code_gen.style_css_formats.format_blur(value);

break;
case "matrix":
return app.util.code_gen.style_css_formats.format_matrix(value);

break;
default:
if((value instanceof cljs.core.Keyword)){
return app.common.data.name(value);
} else {
return value;
}

}
});

//# sourceMappingURL=app.util.code_gen.style_css_formats.js.map
