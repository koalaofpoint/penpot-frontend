import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.math.js";
import "./cuerdas.core.js";
goog.provide('app.common.colors');
app.common.colors.black = "#000000";
app.common.colors.default_layout = "#DE4762";
app.common.colors.gray_20 = "#B1B2B5";
app.common.colors.info = "#59B9E2";
app.common.colors.test = "#fabada";
app.common.colors.white = "#FFFFFF";
app.common.colors.warning = "#FC8802";
app.common.colors.new_primary = "#7efff5";
app.common.colors.new_danger = "#ff3277";
app.common.colors.new_warning = "#fe4811";
app.common.colors.new_primary_light = "#6911d4";
app.common.colors.background_quaternary = "#2e3434";
app.common.colors.background_quaternary_light = "#eef0f2";
app.common.colors.canvas = "#E8E9EA";
app.common.colors.names = cljs.core.PersistentHashMap.fromArrays(["springgreen","aqua","blue","olivedrab","lightskyblue","greenyellow","ivory","navajowhite","cyan","mediumturquoise","darkslateblue","lawngreen","saddlebrown","white","silver","purple","gainsboro","plum","midnightblue","magenta","paleturquoise","hotpink","mediumorchid","gold","powderblue","papayawhip","bisque","salmon","forestgreen","blanchedalmond","grey","crimson","darkturquoise","steelblue","mediumvioletred","aquamarine","darkgoldenrod","orange","darkgray","lime","cornflowerblue","aliceblue","lightgoldenrodyellow","lemonchiffon","lightsalmon","deepskyblue","lightgreen","palegoldenrod","darkred","violet","gray","goldenrod","darksalmon","skyblue","darkviolet","fuchsia","lightcoral","moccasin","darkgreen","lightyellow","lavenderblush","sienna","burlywood","ghostwhite","coral","linen","lightslategray","azure","darkolivegreen","floralwhite","yellow","beige","wheat","slategray","darkmagenta","darkcyan","dodgerblue","mediumseagreen","darkgrey","mediumblue","pink","mistyrose","teal","olive","navy","darkkhaki","green","darkblue","red","maroon","limegreen","brown","seashell","chocolate","antiquewhite","tan","seagreen","palevioletred","rosybrown","cornsilk","lavender","mediumpurple","black","snow","lightseagreen","palegreen","deeppink","dimgray","blueviolet","cadetblue","slateblue","mediumspringgreen","lightpink","firebrick","dimgrey","khaki","royalblue","sandybrown","orangered","darkslategray","orchid","indianred","darkorchid","honeydew","oldlace","whitesmoke","mediumaquamarine","lightgrey","peru","chartreuse","lightcyan","lightblue","tomato","mintcream","peachpuff","thistle","lightsteelblue","mediumslateblue","darkslategrey","turquoise","slategrey","indigo","lightslategrey","darkorange","yellowgreen","lightgray","darkseagreen"],["#00ff7f","#00ffff","#0000ff","#6b8e23","#87cefa","#adff2f","#fffff0","#ffdead","#00ffff","#48d1cc","#483d8b","#7cfc00","#8b4513","#ffffff","#c0c0c0","#800080","#dcdcdc","#dda0dd","#191970","#ff00ff","#afeeee","#ff69b4","#ba55d3","#ffd700","#b0e0e6","#ffefd5","#ffe4c4","#fa8072","#228b22","#ffebcd","#808080","#dc143c","#00ced1","#4682b4","#c71585","#7fffd4","#b8860b","#ffa500","#a9a9a9","#00ff00","#6495ed","#f0f8ff","#fafad2","#fffacd","#ffa07a","#00bfff","#90ee90","#eee8aa","#8b0000","#ee82ee","#808080","#daa520","#e9967a","#87ceeb","#9400d3","#ff00ff","#f08080","#ffe4b5","#006400","#ffffe0","#fff0f5","#a0522d","#deb887","#f8f8ff","#ff7f50","#faf0e6","#778899","#f0ffff","#556b2f","#fffaf0","#ffff00","#f5f5dc","#f5deb3","#708090","#8b008b","#008b8b","#1e90ff","#3cb371","#a9a9a9","#0000cd","#ffc0cb","#ffe4e1","#008080","#808000","#000080","#bdb76b","#008000","#00008b","#ff0000","#800000","#32cd32","#a52a2a","#fff5ee","#d2691e","#faebd7","#d2b48c","#2e8b57","#db7093","#bc8f8f","#fff8dc","#e6e6fa","#9370db","#000000","#fffafa","#20b2aa","#98fb98","#ff1493","#696969","#8a2be2","#5f9ea0","#6a5acd","#00fa9a","#ffb6c1","#b22222","#696969","#f0e68c","#4169e1","#f4a460","#ff4500","#2f4f4f","#da70d6","#cd5c5c","#9932cc","#f0fff0","#fdf5e6","#f5f5f5","#66cdaa","#d3d3d3","#cd853f","#7fff00","#e0ffff","#add8e6","#ff6347","#f5fffa","#ffdab9","#d8bfd8","#b0c4de","#7b68ee","#2f4f4f","#40e0d0","#708090","#4b0082","#778899","#ff8c00","#9acd32","#d3d3d3","#8fbc8f"]);
app.common.colors.hex_color_re = /\#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/;
app.common.colors.rgb_color_re = /(?:|rgb)\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\)/;
app.common.colors.valid_hex_color_QMARK_ = (function app$common$colors$valid_hex_color_QMARK_(color){
return ((typeof color === 'string') && ((!((cljs.core.re_matches(app.common.colors.hex_color_re,color) == null)))));
});
app.common.colors.parse_rgb = (function app$common$colors$parse_rgb(color){
var result = cljs.core.re_matches(app.common.colors.rgb_color_re,color);
if((!((result == null)))){
var r = cljs.core.parse_long(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(result,(1)));
var g = cljs.core.parse_long(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(result,(2)));
var b = cljs.core.parse_long(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(result,(3)));
if(((((((0) <= r)) && ((r <= (255))))) && (((((((0) <= g)) && ((g <= (255))))) && (((((0) <= b)) && ((b <= (255))))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
} else {
return null;
}
} else {
return null;
}
});
app.common.colors.valid_rgb_color_QMARK_ = (function app$common$colors$valid_rgb_color_QMARK_(color){
if(typeof color === 'string'){
var result = app.common.colors.parse_rgb(color);
return (!((result == null)));
} else {
return false;
}
});
app.common.colors.normalize_hex = (function app$common$colors$normalize_hex(color){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(color),(4))){
return cuerdas.core.lower(cuerdas.core.replace(color,/\#(.)(.)(.)/,"#$1$1$2$2$3$3"));
} else {
return cuerdas.core.lower(color);
}
});
app.common.colors.rgb__GT_str = (function app$common$colors$rgb__GT_str(p__71680){
var vec__71688 = p__71680;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71688,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71688,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71688,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71688,(3),null);
if((!((a == null)))){
return ""+"rgba("+(r ?? "")+","+(g ?? "")+","+(b ?? "")+","+(a ?? "")+")";
} else {
return ""+"rgb("+(r ?? "")+","+(g ?? "")+","+(b ?? "")+")";
}
});
app.common.colors.rgb__GT_hsv = (function app$common$colors$rgb__GT_hsv(p__71698){
var vec__71699 = p__71698;
var red = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71699,(0),null);
var green = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71699,(1),null);
var blue = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71699,(2),null);
var max = app.common.data.max.cljs$core$IFn$_invoke$arity$3(red,green,blue);
var min = app.common.data.min.cljs$core$IFn$_invoke$arity$3(red,green,blue);
var val = max;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min,max)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),val], null);
} else {
var delta = (max - min);
var sat = (delta / max);
var hue = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(red,max))?((green - blue) / delta):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(green,max))?((2) + ((blue - red) / delta)):((4) + ((red - green) / delta))));
var hue__$1 = ((60) * hue);
var hue__$2 = (((hue__$1 < (0)))?(hue__$1 + (360)):hue__$1);
var hue__$3 = (((hue__$2 > (360)))?(hue__$2 - (360)):hue__$2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue__$3,sat,val], null);
}
});
app.common.colors.hsv__GT_rgb = (function app$common$colors$hsv__GT_rgb(p__71705){
var vec__71706 = p__71705;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71706,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71706,(1),null);
var brightness = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71706,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,(0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [brightness,brightness,brightness], null);
} else {
var sextant = (app.common.math.floor((h / (60))) | (0));
var remainder = ((h / (60)) - sextant);
var brightness__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(brightness,(0));
var val1 = ((brightness__$1 * ((1) - s)) | (0));
var val2 = ((brightness__$1 * ((1) - (s * remainder))) | (0));
var val3 = ((brightness__$1 * ((1) - (s * ((1) - remainder)))) | (0));
var G__71714 = sextant;
switch (G__71714) {
case (1):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [val2,brightness__$1,val1], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [val1,brightness__$1,val3], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [val1,val2,brightness__$1], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [val3,val1,brightness__$1], null);

break;
case (5):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [brightness__$1,val1,val2], null);

break;
case (6):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [brightness__$1,val3,val1], null);

break;
case (0):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [brightness__$1,val3,val1], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71714)].join('')));

}
}
});
app.common.colors.hex__GT_rgb = (function app$common$colors$hex__GT_rgb(color){
try{var rgb = parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(color,(1)),(16));
var r = (rgb >> (16));
var g = ((rgb >> (8)) & (255));
var b = (rgb & (255));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
}catch (e71716){var _cause = e71716;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
}});
app.common.colors.hex__GT_lum = (function app$common$colors$hex__GT_lum(color){
var vec__71717 = app.common.colors.hex__GT_rgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71717,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71717,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71717,(2),null);
return app.common.math.sqrt((((0.241 * r) + (0.691 * g)) + (0.068 * b)));
});
/**
 * Convert integer to hex string
 */
app.common.colors.int__GT_hex = (function app$common$colors$int__GT_hex(v){
return v.toString((16));
});
app.common.colors.rgb__GT_hex = (function app$common$colors$rgb__GT_hex(p__71720){
var vec__71721 = p__71720;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71721,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71721,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71721,(2),null);
var r__$1 = (r | (0));
var g__$1 = (g | (0));
var b__$1 = (b | (0));
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(r__$1,(r__$1 & (255)))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(g__$1,(g__$1 & (255)))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(b__$1,(b__$1 & (255)))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("not valid rgb",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),r__$1,new cljs.core.Keyword(null,"g","g",1738089905),g__$1,new cljs.core.Keyword(null,"b","b",1482224470),b__$1], null));
} else {
var rgb = (((r__$1 << (16)) | (g__$1 << (8))) | b__$1);
if((r__$1 < (16))){
return ""+"#"+(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(app.common.colors.int__GT_hex(((16777216) | rgb)),(1)) ?? "");
} else {
return ""+"#"+(app.common.colors.int__GT_hex(rgb) ?? "");
}
}
});
app.common.colors.rgb__GT_hsl = (function app$common$colors$rgb__GT_hsl(p__71725){
var vec__71726 = p__71725;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71726,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71726,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71726,(2),null);
var norm_r = (r / 255.0);
var norm_g = (g / 255.0);
var norm_b = (b / 255.0);
var max = app.common.data.max.cljs$core$IFn$_invoke$arity$3(norm_r,norm_g,norm_b);
var min = app.common.data.min.cljs$core$IFn$_invoke$arity$3(norm_r,norm_g,norm_b);
var l = ((max + min) / 2.0);
var h = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max,min))?(0):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max,norm_r))?((60) * ((norm_g - norm_b) / (max - min))):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max,norm_g))?((120) + ((60) * ((norm_b - norm_r) / (max - min)))):((240) + ((60) * ((norm_r - norm_g) / (max - min)))))));
var s = (((((l > (0))) && ((l <= 0.5))))?((max - min) / ((2) * l)):((max - min) / ((2) - ((2) * l))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((h + (360)),(360)),s,l], null);
});
app.common.colors.hex__GT_hsv = (function app$common$colors$hex__GT_hsv(v){
return app.common.colors.rgb__GT_hsv(app.common.colors.hex__GT_rgb(v));
});
app.common.colors.hex__GT_rgba = (function app$common$colors$hex__GT_rgba(data,opacity){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(app.common.colors.hex__GT_rgb(data),opacity);
});
app.common.colors.hex__GT_hsl = (function app$common$colors$hex__GT_hsl(hex){
try{return app.common.colors.rgb__GT_hsl(app.common.colors.hex__GT_rgb(hex));
}catch (e71730){var _e = e71730;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
}});
app.common.colors.hex__GT_hsla = (function app$common$colors$hex__GT_hsla(data,opacity){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(app.common.colors.hex__GT_hsl(data),opacity);
});
app.common.colors.format_hsla = (function app$common$colors$format_hsla(p__71734){
var vec__71735 = p__71734;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71735,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71735,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71735,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71735,(3),null);
var precision = (2);
var rounded_h = (h | (0));
var rounded_s = app.common.data.format_number.cljs$core$IFn$_invoke$arity$2(((100) * s),precision);
var rounded_l = app.common.data.format_number.cljs$core$IFn$_invoke$arity$2(((100) * l),precision);
var rounded_a = app.common.data.format_number.cljs$core$IFn$_invoke$arity$2(a,precision);
return ""+""+(rounded_h ?? "")+" "+(rounded_s ?? "")+"% "+(rounded_l ?? "")+"% / "+(rounded_a ?? "");
});
app.common.colors.format_rgba = (function app$common$colors$format_rgba(p__71738){
var vec__71739 = p__71738;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71739,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71739,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71739,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71739,(3),null);
var precision = (2);
var rounded_a = app.common.data.format_number.cljs$core$IFn$_invoke$arity$2(a,precision);
return ""+(r ?? "")+", "+(g ?? "")+", "+(b ?? "")+", "+(rounded_a ?? "");
});
/**
 * Helper for hsl->rgb
 */
app.common.colors.hue__GT_rgb = (function app$common$colors$hue__GT_rgb(v1,v2,vh){
var vh__$1 = (((vh < (0)))?(vh + (1)):(((vh > (1)))?(vh - (1)):vh));
if((((6) * vh__$1) < (1))){
return (v1 + (((v2 - v1) * (6)) * vh__$1));
} else {
if((((2) * vh__$1) < (1))){
return v2;
} else {
if((((3) * vh__$1) < (2))){
return (v1 + (((v2 - v1) * (((2) / (3)) - vh__$1)) * (6)));
} else {
return v1;

}
}
}
});
app.common.colors.hsl__GT_rgb = (function app$common$colors$hsl__GT_rgb(p__71743){
var vec__71744 = p__71743;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71744,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71744,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71744,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,(0))){
var o = (l * (255));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,o,o], null);
} else {
var norm_h = (h / 360.0);
var temp2 = (((l < 0.5))?(l * ((1) + s)):((l + s) - (s * l)));
var temp1 = ((l * (2)) - temp2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.math.round.cljs$core$IFn$_invoke$arity$1(((255) * app.common.colors.hue__GT_rgb(temp1,temp2,(norm_h + ((1) / (3)))))),app.common.math.round.cljs$core$IFn$_invoke$arity$1(((255) * app.common.colors.hue__GT_rgb(temp1,temp2,norm_h))),app.common.math.round.cljs$core$IFn$_invoke$arity$1(((255) * app.common.colors.hue__GT_rgb(temp1,temp2,(norm_h - ((1) / (3))))))], null);
}
});
app.common.colors.hsl__GT_hex = (function app$common$colors$hsl__GT_hex(v){
return app.common.colors.rgb__GT_hex(app.common.colors.hsl__GT_rgb(v));
});
app.common.colors.hsl__GT_hsv = (function app$common$colors$hsl__GT_hsv(hsl){
return app.common.colors.rgb__GT_hsv(app.common.colors.hsl__GT_rgb(hsl));
});
app.common.colors.hsv__GT_hex = (function app$common$colors$hsv__GT_hex(hsv){
return app.common.colors.rgb__GT_hex(app.common.colors.hsv__GT_rgb(hsv));
});
app.common.colors.hsv__GT_hsl = (function app$common$colors$hsv__GT_hsl(hsv){
return app.common.colors.hex__GT_hsl(app.common.colors.hsv__GT_hex(hsv));
});
app.common.colors.expand_hex = (function app$common$colors$expand_hex(v){
if(cljs.core.truth_(cljs.core.re_matches(/^[0-9A-Fa-f]$/,v))){
return ""+(v ?? "")+(v ?? "")+(v ?? "")+(v ?? "")+(v ?? "")+(v ?? "");
} else {
if(cljs.core.truth_(cljs.core.re_matches(/^[0-9A-Fa-f]{2}$/,v))){
return ""+(v ?? "")+(v ?? "")+(v ?? "");
} else {
if(cljs.core.truth_(cljs.core.re_matches(/^[0-9A-Fa-f]{3}$/,v))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2));
return ""+(a ?? "")+(a ?? "")+(b ?? "")+(b ?? "")+(c ?? "")+(c ?? "");
} else {
return v;

}
}
}
});
app.common.colors.prepend_hash = (function app$common$colors$prepend_hash(color){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(color,(0),(1)))){
return color;
} else {
return ""+"#"+(color ?? "");
}
});
app.common.colors.remove_hash = (function app$common$colors$remove_hash(color){
if(cuerdas.core.starts_with_QMARK_(color,"#")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(color,(1));
} else {
return color;
}
});
app.common.colors.color_string_QMARK_ = (function app$common$colors$color_string_QMARK_(color){
return ((typeof color === 'string') && (((app.common.colors.valid_hex_color_QMARK_(color)) || (((app.common.colors.valid_rgb_color_QMARK_(color)) || (cljs.core.contains_QMARK_(app.common.colors.names,color)))))));
});
app.common.colors.parse = (function app$common$colors$parse(color){
if(typeof color === 'string'){
if(((app.common.colors.valid_hex_color_QMARK_(color)) || (app.common.colors.valid_hex_color_QMARK_(""+"#"+(color ?? ""))))){
return app.common.colors.normalize_hex(color);
} else {
var or__5025__auto__ = (function (){var G__71755 = app.common.colors.parse_rgb(color);
if((G__71755 == null)){
return null;
} else {
return app.common.colors.rgb__GT_hex(G__71755);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.colors.names,cuerdas.core.lower(color));
}
}
} else {
return null;
}
});
app.common.colors.color_names = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keys(app.common.colors.names));
app.common.colors.empty_color = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__71759_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__71759_SHARP_,null],null));
})),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"gradient","gradient",-1983908971),new cljs.core.Keyword(null,"opacity","opacity",397153780)], null));
/**
 * Given a color in rgb returns the next color
 */
app.common.colors.next_rgb = (function app$common$colors$next_rgb(p__71760){
var vec__71761 = p__71760;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71761,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71761,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71761,(2),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((255),r)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((255),g)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((255),b)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot get next color",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"g","g",1738089905),g,new cljs.core.Keyword(null,"b","b",1482224470),b], null));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((255),g)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((255),b)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(r + (1)),(0),(0)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((255),b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,(g + (1)),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,(b + (1))], null);

}
}
}
});
app.common.colors.reduce_range = (function app$common$colors$reduce_range(value,range){
return (app.common.math.floor((value * range)) / range);
});
app.common.colors.sort_colors = (function app$common$colors$sort_colors(a,b){
var vec__71764 = app.common.colors.hex__GT_hsv(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(a));
var ah = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71764,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71764,(1),null);
var av = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71764,(2),null);
var vec__71767 = app.common.colors.hex__GT_hsv(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(b));
var bh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71767,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71767,(1),null);
var bv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71767,(2),null);
var ah__$1 = app.common.colors.reduce_range((ah / (60)),(8));
var bh__$1 = app.common.colors.reduce_range((bh / (60)),(8));
var av__$1 = (av / (255));
var bv__$1 = (bv / (255));
var a__$1 = ((ah__$1 * (100)) + (av__$1 * (10)));
var b__$1 = ((bh__$1 * (100)) + (bv__$1 * (10)));
return cljs.core.compare(a__$1,b__$1);
});

//# sourceMappingURL=app.common.colors.js.map
