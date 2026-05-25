import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.json.js";
import "./app.common.types.path.js";
import "./app.common.uuid.js";
import "./app.util.object.js";
import "./cuerdas.core.js";
goog.provide('app.plugins.parser');
app.plugins.parser.parse_id = (function app$plugins$parser$parse_id(id){
if(cljs.core.truth_(id)){
return app.common.uuid.parse(id);
} else {
return null;
}
});
app.plugins.parser.parse_keyword = (function app$plugins$parser$parse_keyword(kw){
if(cljs.core.truth_(kw)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kw);
} else {
return null;
}
});
app.plugins.parser.parse_hex = (function app$plugins$parser$parse_hex(color){
if(typeof color === 'string'){
return cuerdas.core.lower(color);
} else {
return color;
}
});
app.plugins.parser.parse_point = (function app$plugins$parser$parse_point(point){
if(cljs.core.truth_(point)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),app.util.object.get.cljs$core$IFn$_invoke$arity$2(point,"x"),new cljs.core.Keyword(null,"y","y",-1757859776),app.util.object.get.cljs$core$IFn$_invoke$arity$2(point,"y")], null);
} else {
return null;
}
});
app.plugins.parser.parse_shape_type = (function app$plugins$parser$parse_shape_type(type){
var G__83281 = type;
switch (G__83281) {
case "board":
return new cljs.core.Keyword(null,"frame","frame",-1711082588);

break;
case "boolean":
return new cljs.core.Keyword(null,"bool","bool",1444635321);

break;
case "rectangle":
return new cljs.core.Keyword(null,"rect","rect",-108902628);

break;
case "ellipse":
return new cljs.core.Keyword(null,"circle","circle",1903212362);

break;
default:
return app.plugins.parser.parse_keyword(type);

}
});
app.plugins.parser.parse_criteria = (function app$plugins$parser$parse_criteria(criteria){
if((!((criteria == null)))){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.object.get.cljs$core$IFn$_invoke$arity$2(criteria,"name"),new cljs.core.Keyword(null,"name-like","name-like",244303068),app.util.object.get.cljs$core$IFn$_invoke$arity$2(criteria,"nameLike"),new cljs.core.Keyword(null,"type","type",1174270348),app.plugins.parser.parse_shape_type(app.util.object.get.cljs$core$IFn$_invoke$arity$2(criteria,"type"))], null));
} else {
return null;
}
});
app.plugins.parser.parse_image_data = (function app$plugins$parser$parse_image_data(image_data){
if((!((image_data == null)))){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),app.plugins.parser.parse_id(app.util.object.get.cljs$core$IFn$_invoke$arity$2(image_data,"id")),new cljs.core.Keyword(null,"name","name",1843675177),app.util.object.get.cljs$core$IFn$_invoke$arity$2(image_data,"name"),new cljs.core.Keyword(null,"width","width",-384071477),app.util.object.get.cljs$core$IFn$_invoke$arity$2(image_data,"width"),new cljs.core.Keyword(null,"height","height",1025178622),app.util.object.get.cljs$core$IFn$_invoke$arity$2(image_data,"height"),new cljs.core.Keyword(null,"mtype","mtype",-1724656120),app.util.object.get.cljs$core$IFn$_invoke$arity$2(image_data,"mtype"),new cljs.core.Keyword(null,"keep-aspect-ratio","keep-aspect-ratio",-475848727),app.util.object.get.cljs$core$IFn$_invoke$arity$2(image_data,"keepAspectRatio")], null));
} else {
return null;
}
});
app.plugins.parser.parse_gradient_stop = (function app$plugins$parser$parse_gradient_stop(stop){
if((!((stop == null)))){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),app.plugins.parser.parse_hex(app.util.object.get.cljs$core$IFn$_invoke$arity$2(stop,"color")),new cljs.core.Keyword(null,"opacity","opacity",397153780),app.util.object.get.cljs$core$IFn$_invoke$arity$2(stop,"opacity"),new cljs.core.Keyword(null,"offset","offset",296498311),app.util.object.get.cljs$core$IFn$_invoke$arity$2(stop,"offset")], null));
} else {
return null;
}
});
app.plugins.parser.parse_gradient = (function app$plugins$parser$parse_gradient(gradient){
if((!((gradient == null)))){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),app.plugins.parser.parse_keyword(app.util.object.get.cljs$core$IFn$_invoke$arity$2(gradient,"type")),new cljs.core.Keyword(null,"start-x","start-x",-193941684),app.util.object.get.cljs$core$IFn$_invoke$arity$2(gradient,"startX"),new cljs.core.Keyword(null,"start-y","start-y",-771244577),app.util.object.get.cljs$core$IFn$_invoke$arity$2(gradient,"startY"),new cljs.core.Keyword(null,"end-x","end-x",-1323983821),app.util.object.get.cljs$core$IFn$_invoke$arity$2(gradient,"endX"),new cljs.core.Keyword(null,"end-y","end-y",859881965),app.util.object.get.cljs$core$IFn$_invoke$arity$2(gradient,"endY"),new cljs.core.Keyword(null,"width","width",-384071477),app.util.object.get.cljs$core$IFn$_invoke$arity$2(gradient,"width"),new cljs.core.Keyword(null,"stops","stops",-1205459005),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.plugins.parser.parse_gradient_stop,app.util.object.get.cljs$core$IFn$_invoke$arity$2(gradient,"stops"))], null));
} else {
return null;
}
});
app.plugins.parser.parse_color_data = (function app$plugins$parser$parse_color_data(color){
if((!((color == null)))){
var id = (function (){var or__5025__auto__ = app.util.object.get.cljs$core$IFn$_invoke$arity$2(color,"id");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.object.get.cljs$core$IFn$_invoke$arity$2(color,"refId");
}
})();
var file_id = (function (){var or__5025__auto__ = app.util.object.get.cljs$core$IFn$_invoke$arity$2(color,"fileId");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.object.get.cljs$core$IFn$_invoke$arity$2(color,"refFile");
}
})();
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),app.plugins.parser.parse_id(id),new cljs.core.Keyword(null,"file-id","file-id",-811871323),app.plugins.parser.parse_id(file_id),new cljs.core.Keyword(null,"color","color",1011675173),app.plugins.parser.parse_hex(app.util.object.get.cljs$core$IFn$_invoke$arity$2(color,"color")),new cljs.core.Keyword(null,"opacity","opacity",397153780),app.util.object.get.cljs$core$IFn$_invoke$arity$2(color,"opacity"),new cljs.core.Keyword(null,"gradient","gradient",-1983908971),app.plugins.parser.parse_gradient(app.util.object.get.cljs$core$IFn$_invoke$arity$2(color,"gradient")),new cljs.core.Keyword(null,"image","image",-58725096),app.plugins.parser.parse_image_data(app.util.object.get.cljs$core$IFn$_invoke$arity$2(color,"image"))], null));
} else {
return null;
}
});
app.plugins.parser.parse_color = (function app$plugins$parser$parse_color(color){
if((!((color == null)))){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(app.plugins.parser.parse_color_data(color),new cljs.core.Keyword(null,"name","name",1843675177),app.util.object.get.cljs$core$IFn$_invoke$arity$2(color,"name"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path","path",-188191168),app.util.object.get.cljs$core$IFn$_invoke$arity$2(color,"path")], 0)));
} else {
return null;
}
});
app.plugins.parser.parse_shadow = (function app$plugins$parser$parse_shadow(shadow__$1){
if((!((shadow__$1 == null)))){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),app.plugins.parser.parse_id(app.util.object.get.cljs$core$IFn$_invoke$arity$2(shadow__$1,"id")),new cljs.core.Keyword(null,"style","style",-496642736),app.plugins.parser.parse_keyword(app.util.object.get.cljs$core$IFn$_invoke$arity$2(shadow__$1,"style")),new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),app.util.object.get.cljs$core$IFn$_invoke$arity$2(shadow__$1,"offsetX"),new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),app.util.object.get.cljs$core$IFn$_invoke$arity$2(shadow__$1,"offsetY"),new cljs.core.Keyword(null,"blur","blur",-453500461),app.util.object.get.cljs$core$IFn$_invoke$arity$2(shadow__$1,"blur"),new cljs.core.Keyword(null,"spread","spread",862337191),app.util.object.get.cljs$core$IFn$_invoke$arity$2(shadow__$1,"spread"),new cljs.core.Keyword(null,"hidden","hidden",-312506092),app.util.object.get.cljs$core$IFn$_invoke$arity$2(shadow__$1,"hidden"),new cljs.core.Keyword(null,"color","color",1011675173),app.plugins.parser.parse_color(app.util.object.get.cljs$core$IFn$_invoke$arity$2(shadow__$1,"color"))], null));
} else {
return null;
}
});
app.plugins.parser.parse_shadows = (function app$plugins$parser$parse_shadows(shadows){
if((!((shadows == null)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.plugins.parser.parse_shadow),shadows);
} else {
return null;
}
});
app.plugins.parser.parse_fill = (function app$plugins$parser$parse_fill(fill){
if((!((fill == null)))){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),app.plugins.parser.parse_hex(app.util.object.get.cljs$core$IFn$_invoke$arity$2(fill,"fillColor")),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),app.util.object.get.cljs$core$IFn$_invoke$arity$2(fill,"fillOpacity"),new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870),app.plugins.parser.parse_gradient(app.util.object.get.cljs$core$IFn$_invoke$arity$2(fill,"fillColorGradient")),new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255),app.plugins.parser.parse_id(app.util.object.get.cljs$core$IFn$_invoke$arity$2(fill,"fillColorRefFile")),new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098),app.plugins.parser.parse_id(app.util.object.get.cljs$core$IFn$_invoke$arity$2(fill,"fillColorRefId")),new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),app.plugins.parser.parse_image_data(app.util.object.get.cljs$core$IFn$_invoke$arity$2(fill,"fillImage"))], null));
} else {
return null;
}
});
app.plugins.parser.parse_fills = (function app$plugins$parser$parse_fills(fills){
if((!((fills == null)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.plugins.parser.parse_fill),fills);
} else {
return null;
}
});
app.plugins.parser.parse_stroke = (function app$plugins$parser$parse_stroke(stroke){
if((!((stroke == null)))){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-cap-start","stroke-cap-start",-2018645757),new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146),new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340),new cljs.core.Keyword(null,"stroke-cap-end","stroke-cap-end",-411370737),new cljs.core.Keyword(null,"stroke-color-ref-id","stroke-color-ref-id",1785439761),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"stroke-color-ref-file","stroke-color-ref-file",2014652279),new cljs.core.Keyword(null,"stroke-color-gradient","stroke-color-gradient",-195812260)],[app.plugins.parser.parse_keyword(app.util.object.get.cljs$core$IFn$_invoke$arity$2(stroke,"strokeCapStart")),app.plugins.parser.parse_keyword(app.util.object.get.cljs$core$IFn$_invoke$arity$2(stroke,"strokeStyle")),app.plugins.parser.parse_hex(app.util.object.get.cljs$core$IFn$_invoke$arity$2(stroke,"strokeColor")),app.util.object.get.cljs$core$IFn$_invoke$arity$2(stroke,"strokeOpacity"),app.plugins.parser.parse_keyword(app.util.object.get.cljs$core$IFn$_invoke$arity$2(stroke,"strokeAlignment")),app.plugins.parser.parse_keyword(app.util.object.get.cljs$core$IFn$_invoke$arity$2(stroke,"strokeCapEnd")),app.plugins.parser.parse_id(app.util.object.get.cljs$core$IFn$_invoke$arity$2(stroke,"strokeColorRefId")),app.util.object.get.cljs$core$IFn$_invoke$arity$2(stroke,"strokeWidth"),app.plugins.parser.parse_id(app.util.object.get.cljs$core$IFn$_invoke$arity$2(stroke,"strokeColorRefFile")),app.plugins.parser.parse_gradient(app.util.object.get.cljs$core$IFn$_invoke$arity$2(stroke,"strokeColorGradient"))]));
} else {
return null;
}
});
app.plugins.parser.parse_strokes = (function app$plugins$parser$parse_strokes(strokes){
if((!((strokes == null)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.plugins.parser.parse_stroke),strokes);
} else {
return null;
}
});
app.plugins.parser.parse_blur = (function app$plugins$parser$parse_blur(blur){
if((!((blur == null)))){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),app.plugins.parser.parse_id(app.util.object.get.cljs$core$IFn$_invoke$arity$2(blur,"id")),new cljs.core.Keyword(null,"type","type",1174270348),app.plugins.parser.parse_keyword(app.util.object.get.cljs$core$IFn$_invoke$arity$2(blur,"type")),new cljs.core.Keyword(null,"value","value",305978217),app.util.object.get.cljs$core$IFn$_invoke$arity$2(blur,"value"),new cljs.core.Keyword(null,"hidden","hidden",-312506092),app.util.object.get.cljs$core$IFn$_invoke$arity$2(blur,"hidden")], null));
} else {
return null;
}
});
app.plugins.parser.parse_export = (function app$plugins$parser$parse_export(export$){
if((!((export$ == null)))){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),app.plugins.parser.parse_keyword(app.util.object.get.cljs$core$IFn$_invoke$arity$2(export$,"type")),new cljs.core.Keyword(null,"scale","scale",-230427353),app.util.object.get.cljs$core$IFn$_invoke$arity$3(export$,"scale",(1)),new cljs.core.Keyword(null,"suffix","suffix",367373057),app.util.object.get.cljs$core$IFn$_invoke$arity$3(export$,"suffix",""),new cljs.core.Keyword(null,"skip-children","skip-children",1139347942),app.util.object.get.cljs$core$IFn$_invoke$arity$3(export$,"skipChildren",false)], null));
} else {
return null;
}
});
app.plugins.parser.parse_exports = (function app$plugins$parser$parse_exports(exports){
if((!((exports == null)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.plugins.parser.parse_export),exports);
} else {
return null;
}
});
app.plugins.parser.parse_frame_guide_column_params = (function app$plugins$parser$parse_frame_guide_column_params(params){
if(cljs.core.truth_(params)){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),app.plugins.parser.parse_color(app.util.object.get.cljs$core$IFn$_invoke$arity$2(params,"color")),new cljs.core.Keyword(null,"type","type",1174270348),app.plugins.parser.parse_keyword(app.util.object.get.cljs$core$IFn$_invoke$arity$2(params,"type")),new cljs.core.Keyword(null,"size","size",1098693007),app.util.object.get.cljs$core$IFn$_invoke$arity$2(params,"size"),new cljs.core.Keyword(null,"margin","margin",-995903681),app.util.object.get.cljs$core$IFn$_invoke$arity$2(params,"margin"),new cljs.core.Keyword(null,"item-length","item-length",-2094673604),app.util.object.get.cljs$core$IFn$_invoke$arity$2(params,"itemLength"),new cljs.core.Keyword(null,"gutter","gutter",1047805662),app.util.object.get.cljs$core$IFn$_invoke$arity$2(params,"gutter")], null));
} else {
return null;
}
});
app.plugins.parser.parse_frame_guide_column = (function app$plugins$parser$parse_frame_guide_column(guide){
if(cljs.core.truth_(guide)){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),app.plugins.parser.parse_keyword(app.util.object.get.cljs$core$IFn$_invoke$arity$2(guide,"type")),new cljs.core.Keyword(null,"display","display",242065432),app.util.object.get.cljs$core$IFn$_invoke$arity$2(guide,"display"),new cljs.core.Keyword(null,"params","params",710516235),app.plugins.parser.parse_frame_guide_column_params(app.util.object.get.cljs$core$IFn$_invoke$arity$2(guide,"params"))], null));
} else {
return null;
}
});
app.plugins.parser.parse_frame_guide_row = (function app$plugins$parser$parse_frame_guide_row(guide){
if(cljs.core.truth_(guide)){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),app.plugins.parser.parse_keyword(app.util.object.get.cljs$core$IFn$_invoke$arity$2(guide,"type")),new cljs.core.Keyword(null,"display","display",242065432),app.util.object.get.cljs$core$IFn$_invoke$arity$2(guide,"display"),new cljs.core.Keyword(null,"params","params",710516235),app.plugins.parser.parse_frame_guide_column_params(app.util.object.get.cljs$core$IFn$_invoke$arity$2(guide,"params"))], null));
} else {
return null;
}
});
app.plugins.parser.parse_frame_guide_square_params = (function app$plugins$parser$parse_frame_guide_square_params(params){
if((!((params == null)))){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),app.plugins.parser.parse_color(app.util.object.get.cljs$core$IFn$_invoke$arity$2(params,"color")),new cljs.core.Keyword(null,"size","size",1098693007),app.util.object.get.cljs$core$IFn$_invoke$arity$2(params,"size")], null));
} else {
return null;
}
});
app.plugins.parser.parse_frame_guide_square = (function app$plugins$parser$parse_frame_guide_square(guide){
if(cljs.core.truth_(guide)){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),app.plugins.parser.parse_keyword(app.util.object.get.cljs$core$IFn$_invoke$arity$2(guide,"type")),new cljs.core.Keyword(null,"display","display",242065432),app.util.object.get.cljs$core$IFn$_invoke$arity$2(guide,"display"),new cljs.core.Keyword(null,"params","params",710516235),app.plugins.parser.parse_frame_guide_column_params(app.util.object.get.cljs$core$IFn$_invoke$arity$2(guide,"params"))], null));
} else {
return null;
}
});
app.plugins.parser.parse_frame_guide = (function app$plugins$parser$parse_frame_guide(guide){
if((!((guide == null)))){
var G__83289 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(guide,"type");
switch (G__83289) {
case "column":
return app.plugins.parser.parse_frame_guide_column;

break;
case "row":
return app.plugins.parser.parse_frame_guide_row;

break;
case "square":
return app.plugins.parser.parse_frame_guide_square(guide);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__83289)].join('')));

}
} else {
return null;
}
});
app.plugins.parser.parse_frame_guides = (function app$plugins$parser$parse_frame_guides(guides){
if((!((guides == null)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.plugins.parser.parse_frame_guide),guides);
} else {
return null;
}
});
app.plugins.parser.parse_animation = (function app$plugins$parser$parse_animation(animation){
if(cljs.core.truth_(animation)){
var animation_type = app.plugins.parser.parse_keyword(app.util.object.get.cljs$core$IFn$_invoke$arity$2(animation,"type"));
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1((function (){var G__83292 = animation_type;
var G__83292__$1 = (((G__83292 instanceof cljs.core.Keyword))?G__83292.fqn:null);
switch (G__83292__$1) {
case "dissolve":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230),animation_type,new cljs.core.Keyword(null,"duration","duration",1444101068),app.util.object.get.cljs$core$IFn$_invoke$arity$2(animation,"duration"),new cljs.core.Keyword(null,"easing","easing",735372043),app.plugins.parser.parse_keyword(app.util.object.get.cljs$core$IFn$_invoke$arity$2(animation,"easing"))], null);

break;
case "slide":
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230),animation_type,new cljs.core.Keyword(null,"way","way",1564954669),app.plugins.parser.parse_keyword(app.util.object.get.cljs$core$IFn$_invoke$arity$2(animation,"way")),new cljs.core.Keyword(null,"direction","direction",-633359395),app.plugins.parser.parse_keyword(app.util.object.get.cljs$core$IFn$_invoke$arity$2(animation,"direction")),new cljs.core.Keyword(null,"duration","duration",1444101068),app.util.object.get.cljs$core$IFn$_invoke$arity$2(animation,"duration"),new cljs.core.Keyword(null,"easing","easing",735372043),app.plugins.parser.parse_keyword(app.util.object.get.cljs$core$IFn$_invoke$arity$2(animation,"easing")),new cljs.core.Keyword(null,"offset-effect","offset-effect",1997999208),cljs.core.boolean$(app.util.object.get.cljs$core$IFn$_invoke$arity$2(animation,"offsetEffect"))], null);

break;
case "push":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230),animation_type,new cljs.core.Keyword(null,"direction","direction",-633359395),app.plugins.parser.parse_keyword(app.util.object.get.cljs$core$IFn$_invoke$arity$2(animation,"direction")),new cljs.core.Keyword(null,"duration","duration",1444101068),app.util.object.get.cljs$core$IFn$_invoke$arity$2(animation,"duration"),new cljs.core.Keyword(null,"easing","easing",735372043),app.plugins.parser.parse_keyword(app.util.object.get.cljs$core$IFn$_invoke$arity$2(animation,"easing"))], null);

break;
default:
return null;

}
})());
} else {
return null;
}
});
app.plugins.parser.parse_action = (function app$plugins$parser$parse_action(action){
if(cljs.core.truth_(action)){
var action_type = app.plugins.parser.parse_keyword(app.util.object.get.cljs$core$IFn$_invoke$arity$2(action,"type"));
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1((function (){var G__83309 = action_type;
var G__83309__$1 = (((G__83309 instanceof cljs.core.Keyword))?G__83309.fqn:null);
switch (G__83309__$1) {
case "navigate-to":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"destination","destination",-253872483),app.util.object.get.cljs$core$IFn$_invoke$arity$2(app.util.object.get.cljs$core$IFn$_invoke$arity$2(action,"destination"),"$id"),new cljs.core.Keyword(null,"preserve-scroll","preserve-scroll",-1515148069),app.util.object.get.cljs$core$IFn$_invoke$arity$2(action,"preserveScrollPosition"),new cljs.core.Keyword(null,"animation","animation",-1248293244),app.plugins.parser.parse_animation(app.util.object.get.cljs$core$IFn$_invoke$arity$2(action,"animation"))], null);

break;
case "open-overlay":
case "toggle-overlay":
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),action_type,new cljs.core.Keyword(null,"destination","destination",-253872483),app.util.object.get.cljs$core$IFn$_invoke$arity$2(app.util.object.get.cljs$core$IFn$_invoke$arity$2(action,"destination"),"$id"),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),app.util.object.get.cljs$core$IFn$_invoke$arity$2(app.util.object.get.cljs$core$IFn$_invoke$arity$2(action,"relativeTo"),"$id"),new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455),app.plugins.parser.parse_keyword(app.util.object.get.cljs$core$IFn$_invoke$arity$2(action,"position")),new cljs.core.Keyword(null,"overlay-position","overlay-position",-2038634730),app.plugins.parser.parse_point(app.util.object.get.cljs$core$IFn$_invoke$arity$2(action,"manualPositionLocation")),new cljs.core.Keyword(null,"close-click-outside","close-click-outside",1133482612),app.util.object.get.cljs$core$IFn$_invoke$arity$2(action,"closeWhenClickOutside"),new cljs.core.Keyword(null,"background-overlay","background-overlay",1186220424),app.util.object.get.cljs$core$IFn$_invoke$arity$2(action,"addBackgroundOverlay"),new cljs.core.Keyword(null,"animation","animation",-1248293244),app.plugins.parser.parse_animation(app.util.object.get.cljs$core$IFn$_invoke$arity$2(action,"animation"))], null);

break;
case "close-overlay":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),action_type,new cljs.core.Keyword(null,"destination","destination",-253872483),app.util.object.get.cljs$core$IFn$_invoke$arity$2(app.util.object.get.cljs$core$IFn$_invoke$arity$2(action,"destination"),"$id"),new cljs.core.Keyword(null,"animation","animation",-1248293244),app.plugins.parser.parse_animation(app.util.object.get.cljs$core$IFn$_invoke$arity$2(action,"animation"))], null);

break;
case "previous-screen":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),new cljs.core.Keyword(null,"prev-screen","prev-screen",1175524591)], null);

break;
case "open-url":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),action_type,new cljs.core.Keyword(null,"url","url",276297046),app.util.object.get.cljs$core$IFn$_invoke$arity$2(action,"url")], null);

break;
default:
return null;

}
})());
} else {
return null;
}
});
app.plugins.parser.parse_interaction = (function app$plugins$parser$parse_interaction(trigger,action,delay){
if(((typeof trigger === 'string') && ((!((action == null)))))){
var trigger__$1 = app.plugins.parser.parse_keyword(trigger);
var action__$1 = app.plugins.parser.parse_action(action);
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-type","event-type",319722813),trigger__$1,new cljs.core.Keyword(null,"delay","delay",-574225219),delay], null),action__$1));
} else {
return null;
}
});
app.plugins.parser.orientation__GT_axis = (function app$plugins$parser$orientation__GT_axis(axis){
var G__83612 = axis;
switch (G__83612) {
case "horizontal":
return new cljs.core.Keyword(null,"y","y",-1757859776);

break;
case "vertical":
return new cljs.core.Keyword(null,"x","x",2099068185);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__83612)].join('')));

}
});
app.plugins.parser.parse_commands = (function app$plugins$parser$parse_commands(commands){
return app.common.types.path.decode_segments(app.common.json.__GT_clj(commands));
});

//# sourceMappingURL=app.plugins.parser.js.map
