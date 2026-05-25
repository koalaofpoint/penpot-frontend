import "./cljs_env.js";
import "./cljs.core.js";
import "./cuerdas.core.js";
goog.provide('app.common.media');
app.common.media.font_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["font/ttf",null,"font/otf",null,"font/woff",null,"font/opentype",null], null), null);
app.common.media.image_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["image/gif",null,"image/png",null,"image/svg+xml",null,"image/webp",null,"image/jpeg",null], null), null);
app.common.media.format__GT_extension = (function app$common$media$format__GT_extension(format){
var G__46226 = format;
var G__46226__$1 = (((G__46226 instanceof cljs.core.Keyword))?G__46226.fqn:null);
switch (G__46226__$1) {
case "png":
return ".png";

break;
case "jpeg":
return ".jpg";

break;
case "webp":
return ".webp";

break;
case "gif":
return ".gif";

break;
case "svg":
return ".svg";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46226__$1)].join('')));

}
});
app.common.media.format__GT_mtype = (function app$common$media$format__GT_mtype(format){
var G__46232 = format;
var G__46232__$1 = (((G__46232 instanceof cljs.core.Keyword))?G__46232.fqn:null);
switch (G__46232__$1) {
case "png":
return "image/png";

break;
case "jpeg":
return "image/jpeg";

break;
case "jpg":
return "image/jpeg";

break;
case "webp":
return "image/webp";

break;
case "gif":
return "image/gif";

break;
case "svg":
return "image/svg+xml";

break;
default:
return "application/octet-stream";

}
});
app.common.media.mtype__GT_format = (function app$common$media$mtype__GT_format(mtype){
var G__46234 = mtype;
switch (G__46234) {
case "image/png":
return new cljs.core.Keyword(null,"png","png",551930691);

break;
case "image/jpeg":
return new cljs.core.Keyword(null,"jpeg","jpeg",-646816934);

break;
case "image/webp":
return new cljs.core.Keyword(null,"webp","webp",1501869900);

break;
case "image/gif":
return new cljs.core.Keyword(null,"gif","gif",1261828260);

break;
case "image/svg+xml":
return new cljs.core.Keyword(null,"svg","svg",856789142);

break;
default:
return null;

}
});
app.common.media.mtype__GT_extension = (function app$common$media$mtype__GT_extension(mtype){
var G__46238 = mtype;
switch (G__46238) {
case "image/apng":
return ".apng";

break;
case "image/avif":
return ".avif";

break;
case "image/gif":
return ".gif";

break;
case "image/jpeg":
return ".jpg";

break;
case "image/png":
return ".png";

break;
case "image/svg+xml":
return ".svg";

break;
case "image/webp":
return ".webp";

break;
case "application/zip":
return ".zip";

break;
case "application/penpot":
return ".penpot";

break;
case "application/pdf":
return ".pdf";

break;
case "text/plain":
return ".txt";

break;
case "font/woff":
return ".woff";

break;
case "font/woff2":
return ".woff2";

break;
case "font/ttf":
return ".ttf";

break;
case "font/otf":
return ".otf";

break;
case "application/octet-stream":
return ".bin";

break;
default:
return null;

}
});
app.common.media.strip_image_extension = (function app$common$media$strip_image_extension(filename){
var image_extensions_re = /(\.png)|(\.jpg)|(\.jpeg)|(\.webp)|(\.gif)|(\.svg)$/;
return cuerdas.core.replace(filename,image_extensions_re,"");
});
app.common.media.parse_font_weight = (function app$common$media$parse_font_weight(variant){
if(cljs.core.truth_(cljs.core.re_seq(/(?:hairline|thin)/i,variant))){
return (100);
} else {
if(cljs.core.truth_(cljs.core.re_seq(/(?:extra\s*light|ultra\s*light)/i,variant))){
return (200);
} else {
if(cljs.core.truth_(cljs.core.re_seq(/(?:light)/i,variant))){
return (300);
} else {
if(cljs.core.truth_(cljs.core.re_seq(/(?:normal|regular)/i,variant))){
return (400);
} else {
if(cljs.core.truth_(cljs.core.re_seq(/(?:medium)/i,variant))){
return (500);
} else {
if(cljs.core.truth_(cljs.core.re_seq(/(?:semi\s*bold|demi\s*bold)/i,variant))){
return (600);
} else {
if(cljs.core.truth_(cljs.core.re_seq(/(?:extra\s*bold|ultra\s*bold)/i,variant))){
return (800);
} else {
if(cljs.core.truth_(cljs.core.re_seq(/(?:bold)/i,variant))){
return (700);
} else {
if(cljs.core.truth_(cljs.core.re_seq(/(?:extra\s*black|ultra\s*black)/i,variant))){
return (950);
} else {
if(cljs.core.truth_(cljs.core.re_seq(/(?:black|heavy|solid)/i,variant))){
return (900);
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
app.common.media.parse_font_style = (function app$common$media$parse_font_style(variant){
if(cljs.core.truth_(cljs.core.re_seq(/(?:italic)/i,variant))){
return "italic";
} else {
return "normal";
}
});
app.common.media.font_weight__GT_name = (function app$common$media$font_weight__GT_name(weight){
var G__46267 = cljs.core.long$(weight);
switch (G__46267) {
case (100):
return "Hairline";

break;
case (200):
return "Extra Light";

break;
case (300):
return "Light";

break;
case (400):
return "Regular";

break;
case (500):
return "Medium";

break;
case (600):
return "Semi Bold";

break;
case (700):
return "Bold";

break;
case (800):
return "Extra Bold";

break;
case (900):
return "Black";

break;
case (950):
return "Extra Black";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46267)].join('')));

}
});

//# sourceMappingURL=app.common.media.js.map
