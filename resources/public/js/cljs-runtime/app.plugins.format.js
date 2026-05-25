import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.plugins.image_data.js";
import "./app.util.object.js";
goog.provide('app.plugins.format');
app.plugins.format.shape_proxy = null;
app.plugins.format.format_id = (function app$plugins$format$format_id(id){
if(cljs.core.truth_(id)){
return ""+(id ?? "");
} else {
return null;
}
});
app.plugins.format.format_key = (function app$plugins$format$format_key(kw){
if(cljs.core.truth_(kw)){
return app.common.data.name(kw);
} else {
return null;
}
});
app.plugins.format.format_array = (function app$plugins$format$format_array(format_fn,coll){
if((!((coll == null)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(format_fn,coll));
} else {
return null;
}
});
app.plugins.format.format_mixed = (function app$plugins$format$format_mixed(value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"multiple","multiple",1244445549))){
return "mixed";
} else {
return value;
}
});
app.plugins.format.format_point = (function app$plugins$format$format_point(p__83213){
var map__83214 = p__83213;
var map__83214__$1 = cljs.core.__destructure_map(map__83214);
var point = map__83214__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83214__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83214__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
if((!((point == null)))){
return app.util.object.without_empty(({"x": x, "y": y}));
} else {
return null;
}
});
app.plugins.format.shape_type = (function app$plugins$format$shape_type(type){
var G__83215 = type;
var G__83215__$1 = (((G__83215 instanceof cljs.core.Keyword))?G__83215.fqn:null);
switch (G__83215__$1) {
case "frame":
return "board";

break;
case "rect":
return "rectangle";

break;
case "circle":
return "ellipse";

break;
default:
return app.common.data.name(type);

}
});
app.plugins.format.format_bounds = (function app$plugins$format$format_bounds(p__83216){
var map__83217 = p__83216;
var map__83217__$1 = cljs.core.__destructure_map(map__83217);
var bounds = map__83217__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83217__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83217__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83217__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83217__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if((!((bounds == null)))){
return app.util.object.without_empty(({"x": x, "y": y, "width": width, "height": height}));
} else {
return null;
}
});
app.plugins.format.format_shape_info = (function app$plugins$format$format_shape_info(p__83218){
var map__83219 = p__83218;
var map__83219__$1 = cljs.core.__destructure_map(map__83219);
var info = map__83219__$1;
var prop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83219__$1,new cljs.core.Keyword(null,"prop","prop",-515168332));
var shape_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83219__$1,new cljs.core.Keyword(null,"shape-id","shape-id",981169327));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83219__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if((!((info == null)))){
return app.util.object.without_empty(({"property": app.common.data.name(prop), "index": index, "shapeId": ""+(shape_id ?? "")}));
} else {
return null;
}
});
app.plugins.format.format_stop = (function app$plugins$format$format_stop(p__83220){
var map__83221 = p__83220;
var map__83221__$1 = cljs.core.__destructure_map(map__83221);
var stop = map__83221__$1;
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83221__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83221__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83221__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
if((!((stop == null)))){
return app.util.object.without_empty(({"color": color, "opacity": opacity, "offset": offset}));
} else {
return null;
}
});
app.plugins.format.format_gradient = (function app$plugins$format$format_gradient(p__83222){
var map__83223 = p__83222;
var map__83223__$1 = cljs.core.__destructure_map(map__83223);
var gradient = map__83223__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83223__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var start_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83223__$1,new cljs.core.Keyword(null,"start-x","start-x",-193941684));
var start_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83223__$1,new cljs.core.Keyword(null,"start-y","start-y",-771244577));
var end_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83223__$1,new cljs.core.Keyword(null,"end-x","end-x",-1323983821));
var end_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83223__$1,new cljs.core.Keyword(null,"end-y","end-y",859881965));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83223__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var stops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83223__$1,new cljs.core.Keyword(null,"stops","stops",-1205459005));
if((!((gradient == null)))){
return app.util.object.without_empty(({"type": app.plugins.format.format_key(type), "startX": start_x, "startY": start_y, "endX": end_x, "endY": end_y, "width": width, "stops": app.plugins.format.format_array(app.plugins.format.format_stop,stops)}));
} else {
return null;
}
});
app.plugins.format.format_image = (function app$plugins$format$format_image(image){
if((!((image == null)))){
return app.plugins.image_data.create_image_data(image);
} else {
return null;
}
});
app.plugins.format.format_color = (function app$plugins$format$format_color(p__83224){
var map__83225 = p__83224;
var map__83225__$1 = cljs.core.__destructure_map(map__83225);
var color_data = map__83225__$1;
var ref_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83225__$1,new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83225__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83225__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83225__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83225__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ref_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83225__$1,new cljs.core.Keyword(null,"ref-file","ref-file",255004238));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83225__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83225__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var gradient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83225__$1,new cljs.core.Keyword(null,"gradient","gradient",-1983908971));
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83225__$1,new cljs.core.Keyword(null,"image","image",-58725096));
if((!((color_data == null)))){
var id__$1 = (function (){var or__5025__auto__ = app.plugins.format.format_id(id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.plugins.format.format_id(ref_id);
}
})();
var file_id__$1 = (function (){var or__5025__auto__ = app.plugins.format.format_id(file_id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.plugins.format.format_id(ref_file);
}
})();
return app.util.object.without_empty(({"path": path, "color": color, "name": name, "refFile": app.plugins.format.format_id(ref_file), "refId": app.plugins.format.format_id(ref_id), "opacity": opacity, "id": (function (){var or__5025__auto__ = app.plugins.format.format_id(id__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.plugins.format.format_id(ref_id);
}
})(), "gradient": app.plugins.format.format_gradient(gradient), "image": app.plugins.format.format_image(image), "fileId": (function (){var or__5025__auto__ = app.plugins.format.format_id(file_id__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.plugins.format.format_id(ref_file);
}
})()}));
} else {
return null;
}
});
app.plugins.format.format_color_result = (function app$plugins$format$format_color_result(p__83226){
var vec__83227 = p__83226;
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83227,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83227,(1),null);
var shapes_info = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.plugins.format.format_shape_info,attrs));
var color__$1 = app.plugins.format.format_color(color);
app.util.object.set_BANG_(color__$1,"shapeInfo",shapes_info);

return color__$1;
});
app.plugins.format.format_shadow = (function app$plugins$format$format_shadow(p__83230){
var map__83231 = p__83230;
var map__83231__$1 = cljs.core.__destructure_map(map__83231);
var shadow__$1 = map__83231__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83231__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83231__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var offset_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83231__$1,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230));
var offset_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83231__$1,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008));
var blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83231__$1,new cljs.core.Keyword(null,"blur","blur",-453500461));
var spread = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83231__$1,new cljs.core.Keyword(null,"spread","spread",862337191));
var hidden = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83231__$1,new cljs.core.Keyword(null,"hidden","hidden",-312506092));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83231__$1,new cljs.core.Keyword(null,"color","color",1011675173));
if((!((shadow__$1 == null)))){
return app.util.object.without_empty(({"id": app.plugins.format.format_id(id), "style": app.plugins.format.format_key(style), "offsetX": offset_x, "offsetY": offset_y, "blur": blur, "spread": spread, "hidden": hidden, "color": app.plugins.format.format_color(color)}));
} else {
return null;
}
});
app.plugins.format.format_shadows = (function app$plugins$format$format_shadows(shadows){
if((!((shadows == null)))){
return app.plugins.format.format_array(app.plugins.format.format_shadow,shadows);
} else {
return [];
}
});
app.plugins.format.format_fill = (function app$plugins$format$format_fill(p__83232){
var map__83233 = p__83232;
var map__83233__$1 = cljs.core.__destructure_map(map__83233);
var fill = map__83233__$1;
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83233__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var fill_opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83233__$1,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170));
var fill_color_gradient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83233__$1,new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870));
var fill_color_ref_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83233__$1,new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255));
var fill_color_ref_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83233__$1,new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098));
var fill_image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83233__$1,new cljs.core.Keyword(null,"fill-image","fill-image",-99895848));
if((!((fill == null)))){
return app.util.object.without_empty(({"fillColor": fill_color, "fillOpacity": fill_opacity, "fillColorGradient": app.plugins.format.format_gradient(fill_color_gradient), "fillColorRefFile": app.plugins.format.format_id(fill_color_ref_file), "fillColorRefId": app.plugins.format.format_id(fill_color_ref_id), "fillImage": app.plugins.format.format_image(fill_image)}));
} else {
return null;
}
});
app.plugins.format.format_fills = (function app$plugins$format$format_fills(fills){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fills,new cljs.core.Keyword(null,"multiple","multiple",1244445549))){
return "mixed";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fills,"mixed")){
return "mixed";
} else {
if((!((fills == null)))){
return app.plugins.format.format_array(app.plugins.format.format_fill,fills);
} else {
return null;
}
}
}
});
app.plugins.format.format_stroke = (function app$plugins$format$format_stroke(p__83234){
var map__83235 = p__83234;
var map__83235__$1 = cljs.core.__destructure_map(map__83235);
var stroke = map__83235__$1;
var stroke_color_gradient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83235__$1,new cljs.core.Keyword(null,"stroke-color-gradient","stroke-color-gradient",-195812260));
var stroke_cap_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83235__$1,new cljs.core.Keyword(null,"stroke-cap-start","stroke-cap-start",-2018645757));
var stroke_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83235__$1,new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146));
var stroke_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83235__$1,new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937));
var stroke_opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83235__$1,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159));
var stroke_alignment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83235__$1,new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340));
var stroke_cap_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83235__$1,new cljs.core.Keyword(null,"stroke-cap-end","stroke-cap-end",-411370737));
var stroke_color_ref_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83235__$1,new cljs.core.Keyword(null,"stroke-color-ref-id","stroke-color-ref-id",1785439761));
var stroke_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83235__$1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435));
var stroke_color_ref_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83235__$1,new cljs.core.Keyword(null,"stroke-color-ref-file","stroke-color-ref-file",2014652279));
if((!((stroke == null)))){
return app.util.object.without_empty(({"strokeCapEnd": app.plugins.format.format_key(stroke_cap_end), "strokeOpacity": stroke_opacity, "strokeStyle": app.plugins.format.format_key(stroke_style), "strokeColorRefFile": app.plugins.format.format_id(stroke_color_ref_file), "strokeColorRefId": app.plugins.format.format_id(stroke_color_ref_id), "strokeCapStart": app.plugins.format.format_key(stroke_cap_start), "strokeWidth": stroke_width, "strokeColorGradient": app.plugins.format.format_gradient(stroke_color_gradient), "strokeColor": stroke_color, "strokeAlignment": app.plugins.format.format_key(stroke_alignment)}));
} else {
return null;
}
});
app.plugins.format.format_strokes = (function app$plugins$format$format_strokes(strokes){
if((!((strokes == null)))){
return app.plugins.format.format_array(app.plugins.format.format_stroke,strokes);
} else {
return null;
}
});
app.plugins.format.format_blur = (function app$plugins$format$format_blur(p__83236){
var map__83237 = p__83236;
var map__83237__$1 = cljs.core.__destructure_map(map__83237);
var blur = map__83237__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83237__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83237__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83237__$1,new cljs.core.Keyword(null,"value","value",305978217));
var hidden = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83237__$1,new cljs.core.Keyword(null,"hidden","hidden",-312506092));
if((!((blur == null)))){
return app.util.object.without_empty(({"id": app.plugins.format.format_id(id), "type": app.plugins.format.format_key(type), "value": value, "hidden": hidden}));
} else {
return null;
}
});
app.plugins.format.format_export = (function app$plugins$format$format_export(p__83238){
var map__83239 = p__83238;
var map__83239__$1 = cljs.core.__destructure_map(map__83239);
var export$ = map__83239__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83239__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83239__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var suffix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83239__$1,new cljs.core.Keyword(null,"suffix","suffix",367373057));
if((!((export$ == null)))){
return app.util.object.without_empty(({"type": app.plugins.format.format_key(type), "scale": scale, "suffix": suffix}));
} else {
return null;
}
});
app.plugins.format.format_exports = (function app$plugins$format$format_exports(exports){
if((!((exports == null)))){
return app.plugins.format.format_array(app.plugins.format.format_export,exports);
} else {
return null;
}
});
app.plugins.format.format_frame_guide_column_params = (function app$plugins$format$format_frame_guide_column_params(p__83240){
var map__83241 = p__83240;
var map__83241__$1 = cljs.core.__destructure_map(map__83241);
var params = map__83241__$1;
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83241__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83241__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83241__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83241__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var item_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83241__$1,new cljs.core.Keyword(null,"item-length","item-length",-2094673604));
var gutter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83241__$1,new cljs.core.Keyword(null,"gutter","gutter",1047805662));
if((!((params == null)))){
return app.util.object.without_empty(({"color": app.plugins.format.format_color(color), "type": app.plugins.format.format_key(type), "size": size, "margin": margin, "itemLength": item_length, "gutter": gutter}));
} else {
return null;
}
});
app.plugins.format.format_frame_guide_column = (function app$plugins$format$format_frame_guide_column(p__83242){
var map__83243 = p__83242;
var map__83243__$1 = cljs.core.__destructure_map(map__83243);
var guide = map__83243__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83243__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var display = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83243__$1,new cljs.core.Keyword(null,"display","display",242065432));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83243__$1,new cljs.core.Keyword(null,"params","params",710516235));
if((!((guide == null)))){
return app.util.object.without_empty(({"type": app.plugins.format.format_key(type), "display": display, "params": app.plugins.format.format_frame_guide_column_params(params)}));
} else {
return null;
}
});
app.plugins.format.format_frame_guide_row = (function app$plugins$format$format_frame_guide_row(p__83244){
var map__83245 = p__83244;
var map__83245__$1 = cljs.core.__destructure_map(map__83245);
var guide = map__83245__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83245__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var display = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83245__$1,new cljs.core.Keyword(null,"display","display",242065432));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83245__$1,new cljs.core.Keyword(null,"params","params",710516235));
if((!((guide == null)))){
return app.util.object.without_empty(({"type": app.plugins.format.format_key(type), "display": display, "params": app.plugins.format.format_frame_guide_column_params(params)}));
} else {
return null;
}
});
app.plugins.format.format_frame_guide_square_params = (function app$plugins$format$format_frame_guide_square_params(p__83246){
var map__83247 = p__83246;
var map__83247__$1 = cljs.core.__destructure_map(map__83247);
var params = map__83247__$1;
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83247__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83247__$1,new cljs.core.Keyword(null,"size","size",1098693007));
if((!((params == null)))){
return app.util.object.without_empty(({"color": app.plugins.format.format_color(color), "size": size}));
} else {
return null;
}
});
app.plugins.format.format_frame_guide_square = (function app$plugins$format$format_frame_guide_square(p__83248){
var map__83249 = p__83248;
var map__83249__$1 = cljs.core.__destructure_map(map__83249);
var guide = map__83249__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83249__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var display = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83249__$1,new cljs.core.Keyword(null,"display","display",242065432));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83249__$1,new cljs.core.Keyword(null,"params","params",710516235));
if((!((guide == null)))){
return app.util.object.without_empty(({"type": app.plugins.format.format_key(type), "display": display, "params": app.plugins.format.format_frame_guide_column_params(params)}));
} else {
return null;
}
});
app.plugins.format.format_frame_guide = (function app$plugins$format$format_frame_guide(p__83250){
var map__83251 = p__83250;
var map__83251__$1 = cljs.core.__destructure_map(map__83251);
var guide = map__83251__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83251__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if((!((guide == null)))){
var G__83252 = type;
var G__83252__$1 = (((G__83252 instanceof cljs.core.Keyword))?G__83252.fqn:null);
switch (G__83252__$1) {
case "column":
return app.plugins.format.format_frame_guide_column(guide);

break;
case "row":
return app.plugins.format.format_frame_guide_row(guide);

break;
case "square":
return app.plugins.format.format_frame_guide_square(guide);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__83252__$1)].join('')));

}
} else {
return null;
}
});
app.plugins.format.format_frame_guides = (function app$plugins$format$format_frame_guides(guides){
if((!((guides == null)))){
return app.plugins.format.format_array(app.plugins.format.format_frame_guide,guides);
} else {
return null;
}
});
app.plugins.format.format_command_params = (function app$plugins$format$format_command_params(p__83253){
var map__83254 = p__83253;
var map__83254__$1 = cljs.core.__destructure_map(map__83254);
var props = map__83254__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83254__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var c2x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83254__$1,new cljs.core.Keyword(null,"c2x","c2x",-699963108));
var c2y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83254__$1,new cljs.core.Keyword(null,"c2y","c2y",1361944924));
var ry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83254__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83254__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var rx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83254__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var large_arc_flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83254__$1,new cljs.core.Keyword(null,"large-arc-flag","large-arc-flag",396724034));
var c1x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83254__$1,new cljs.core.Keyword(null,"c1x","c1x",-1789291378));
var x_axis_rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83254__$1,new cljs.core.Keyword(null,"x-axis-rotation","x-axis-rotation",-637606609));
var c1y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83254__$1,new cljs.core.Keyword(null,"c1y","c1y",-1210747344));
var sweep_flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83254__$1,new cljs.core.Keyword(null,"sweep-flag","sweep-flag",1319872435));
if((!((props == null)))){
return app.util.object.without_empty(({"y": y, "sweepFlag": sweep_flag, "rx": rx, "c1x": c1x, "largeArcFlag": large_arc_flag, "c1y": c1y, "x": x, "c2x": c2x, "c2y": c2y, "ry": ry, "xAxisRotation": x_axis_rotation}));
} else {
return null;
}
});
app.plugins.format.format_command = (function app$plugins$format$format_command(p__83255){
var map__83256 = p__83255;
var map__83256__$1 = cljs.core.__destructure_map(map__83256);
var props = map__83256__$1;
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83256__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83256__$1,new cljs.core.Keyword(null,"params","params",710516235));
if((!((props == null)))){
return app.util.object.without_empty(({"command": app.plugins.format.format_key(command), "params": app.plugins.format.format_command_params(params)}));
} else {
return null;
}
});
app.plugins.format.format_path_content = (function app$plugins$format$format_path_content(content){
if((!((content == null)))){
return app.plugins.format.format_array(app.plugins.format.format_command,content);
} else {
return null;
}
});
app.plugins.format.format_track = (function app$plugins$format$format_track(p__83257){
var map__83258 = p__83257;
var map__83258__$1 = cljs.core.__destructure_map(map__83258);
var track = map__83258__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83258__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83258__$1,new cljs.core.Keyword(null,"value","value",305978217));
if((!((track == null)))){
return app.util.object.without_empty(({"type": app.plugins.format.format_key(type), "value": value}));
} else {
return null;
}
});
app.plugins.format.format_tracks = (function app$plugins$format$format_tracks(tracks){
if((!((tracks == null)))){
return app.plugins.format.format_array(app.plugins.format.format_track,tracks);
} else {
return null;
}
});
app.plugins.format.format_animation = (function app$plugins$format$format_animation(animation){
if(cljs.core.truth_(animation)){
return app.util.object.without_empty((function (){var G__83259 = new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230).cljs$core$IFn$_invoke$arity$1(animation);
var G__83259__$1 = (((G__83259 instanceof cljs.core.Keyword))?G__83259.fqn:null);
switch (G__83259__$1) {
case "dissolve":
return ({"type": "dissolve", "duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": app.plugins.format.format_key(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))});

break;
case "slide":
return ({"type": "slide", "way": app.plugins.format.format_key(new cljs.core.Keyword(null,"way","way",1564954669).cljs$core$IFn$_invoke$arity$1(animation)), "direction": app.plugins.format.format_key(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(animation)), "duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": app.plugins.format.format_key(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation)), "offsetEffect": new cljs.core.Keyword(null,"offset-effect","offset-effect",1997999208).cljs$core$IFn$_invoke$arity$1(animation)});

break;
case "push":
return ({"type": "push", "direction": app.plugins.format.format_key(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(animation)), "duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": app.plugins.format.format_key(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))});

break;
default:
return null;

}
})());
} else {
return null;
}
});
app.plugins.format.format_action = (function app$plugins$format$format_action(interaction,plugin,file_id,page_id){
if(cljs.core.truth_(interaction)){
return app.util.object.without_empty((function (){var G__83260 = new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction);
var G__83260__$1 = (((G__83260 instanceof cljs.core.Keyword))?G__83260.fqn:null);
switch (G__83260__$1) {
case "navigate":
return ({"type": "navigate-to", "destination": (cljs.core.truth_(new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction))?(function (){var G__83261 = plugin;
var G__83262 = file_id;
var G__83263 = page_id;
var G__83264 = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction);
return (app.plugins.format.shape_proxy.cljs$core$IFn$_invoke$arity$4 ? app.plugins.format.shape_proxy.cljs$core$IFn$_invoke$arity$4(G__83261,G__83262,G__83263,G__83264) : app.plugins.format.shape_proxy.call(null,G__83261,G__83262,G__83263,G__83264));
})():null), "preserveScrollPosition": new cljs.core.Keyword(null,"preserve-scroll","preserve-scroll",-1515148069).cljs$core$IFn$_invoke$arity$2(interaction,false), "animation": app.plugins.format.format_animation(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction))});

break;
case "open-overlay":
return ({"type": "open-overlay", "destination": (cljs.core.truth_(new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction))?(function (){var G__83265 = plugin;
var G__83266 = file_id;
var G__83267 = page_id;
var G__83268 = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction);
return (app.plugins.format.shape_proxy.cljs$core$IFn$_invoke$arity$4 ? app.plugins.format.shape_proxy.cljs$core$IFn$_invoke$arity$4(G__83265,G__83266,G__83267,G__83268) : app.plugins.format.shape_proxy.call(null,G__83265,G__83266,G__83267,G__83268));
})():null), "relativeTo": (cljs.core.truth_(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(interaction))?(function (){var G__83269 = plugin;
var G__83270 = file_id;
var G__83271 = page_id;
var G__83272 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(interaction);
return (app.plugins.format.shape_proxy.cljs$core$IFn$_invoke$arity$4 ? app.plugins.format.shape_proxy.cljs$core$IFn$_invoke$arity$4(G__83269,G__83270,G__83271,G__83272) : app.plugins.format.shape_proxy.call(null,G__83269,G__83270,G__83271,G__83272));
})():null), "position": app.plugins.format.format_key(new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455).cljs$core$IFn$_invoke$arity$1(interaction)), "manualPositionLocation": app.plugins.format.format_point(new cljs.core.Keyword(null,"overlay-position","overlay-position",-2038634730).cljs$core$IFn$_invoke$arity$1(interaction)), "closeWhenClickOutside": new cljs.core.Keyword(null,"close-click-outside","close-click-outside",1133482612).cljs$core$IFn$_invoke$arity$1(interaction), "addBackgroundOverlay": new cljs.core.Keyword(null,"background-overlay","background-overlay",1186220424).cljs$core$IFn$_invoke$arity$1(interaction), "animation": app.plugins.format.format_animation(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction))});

break;
case "toggle-overlay":
return ({"type": "toggle-overlay", "destination": (cljs.core.truth_(new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction))?(function (){var G__83273 = plugin;
var G__83274 = file_id;
var G__83275 = page_id;
var G__83276 = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction);
return (app.plugins.format.shape_proxy.cljs$core$IFn$_invoke$arity$4 ? app.plugins.format.shape_proxy.cljs$core$IFn$_invoke$arity$4(G__83273,G__83274,G__83275,G__83276) : app.plugins.format.shape_proxy.call(null,G__83273,G__83274,G__83275,G__83276));
})():null), "relativeTo": (cljs.core.truth_(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(interaction))?(function (){var G__83277 = plugin;
var G__83278 = file_id;
var G__83279 = page_id;
var G__83280 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(interaction);
return (app.plugins.format.shape_proxy.cljs$core$IFn$_invoke$arity$4 ? app.plugins.format.shape_proxy.cljs$core$IFn$_invoke$arity$4(G__83277,G__83278,G__83279,G__83280) : app.plugins.format.shape_proxy.call(null,G__83277,G__83278,G__83279,G__83280));
})():null), "position": app.plugins.format.format_key(new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455).cljs$core$IFn$_invoke$arity$1(interaction)), "manualPositionLocation": app.plugins.format.format_point(new cljs.core.Keyword(null,"overlay-position","overlay-position",-2038634730).cljs$core$IFn$_invoke$arity$1(interaction)), "closeWhenClickOutside": new cljs.core.Keyword(null,"close-click-outside","close-click-outside",1133482612).cljs$core$IFn$_invoke$arity$1(interaction), "addBackgroundOverlay": new cljs.core.Keyword(null,"background-overlay","background-overlay",1186220424).cljs$core$IFn$_invoke$arity$1(interaction), "animation": app.plugins.format.format_animation(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction))});

break;
case "close-overlay":
return ({"type": "close-overlay", "destination": (cljs.core.truth_(new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction))?(function (){var G__83282 = plugin;
var G__83283 = file_id;
var G__83284 = page_id;
var G__83285 = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction);
return (app.plugins.format.shape_proxy.cljs$core$IFn$_invoke$arity$4 ? app.plugins.format.shape_proxy.cljs$core$IFn$_invoke$arity$4(G__83282,G__83283,G__83284,G__83285) : app.plugins.format.shape_proxy.call(null,G__83282,G__83283,G__83284,G__83285));
})():null), "animation": app.plugins.format.format_animation(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction))});

break;
case "prev-screen":
return ({"type": "previous-screen"});

break;
case "open-url":
return ({"type": "open-url", "url": new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(interaction)});

break;
default:
return null;

}
})());
} else {
return null;
}
});
app.plugins.format.axis__GT_orientation = (function app$plugins$format$axis__GT_orientation(axis){
var G__83286 = axis;
var G__83286__$1 = (((G__83286 instanceof cljs.core.Keyword))?G__83286.fqn:null);
switch (G__83286__$1) {
case "y":
return "horizontal";

break;
case "x":
return "vertical";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__83286__$1)].join('')));

}
});

//# sourceMappingURL=app.plugins.format.js.map
