import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.shapes.js";
import "./app.common.types.shape.layout.js";
import "./app.main.ui.formats.js";
import "./app.util.code_gen.common.js";
import "./cuerdas.core.js";
goog.provide('app.util.code_gen.style_css_values');
app.util.code_gen.style_css_values.fill__GT_color = (function app$util$code_gen$style_css_values$fill__GT_color(p__69541){
var map__69542 = p__69541;
var map__69542__$1 = cljs.core.__destructure_map(map__69542);
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69542__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var fill_opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69542__$1,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170));
var fill_color_gradient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69542__$1,new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870));
var fill_image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69542__$1,new cljs.core.Keyword(null,"fill-image","fill-image",-99895848));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),fill_color,new cljs.core.Keyword(null,"opacity","opacity",397153780),fill_opacity,new cljs.core.Keyword(null,"gradient","gradient",-1983908971),fill_color_gradient,new cljs.core.Keyword(null,"image","image",-58725096),fill_image], null);
});
app.util.code_gen.style_css_values.get_shape_position = (function app$util$code_gen$style_css_values$get_shape_position(shape,objects,coord){
if(cljs.core.truth_((function (){var and__5023__auto__ = (!(app.common.files.helpers.root_frame_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)));
if(and__5023__auto__){
var or__5025__auto__ = (!(app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape)));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
}
} else {
return and__5023__auto__;
}
})())){
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
var parent_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(parent,new cljs.core.Keyword(null,"selrect","selrect",1966287292)),coord);
var vec__69543 = app.common.geom.shapes.calculate_geometry(app.common.geom.shapes.transform_points.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape),app.common.geom.shapes.shape__GT_center(parent),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$2(parent,app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0())));
var selrect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69543,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69543,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69543,(2),null);
var shape_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,coord);
return (shape_value - parent_value);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_shape_size = (function app$util$code_gen$style_css_values$get_shape_size(shape,objects,type){
var parent = app.common.files.helpers.get_parent(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
var sizing = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"width","width",-384071477)))?new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(shape):new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(shape));
if(((app.common.types.shape.layout.flex_layout_immediate_child_QMARK_(objects,shape)) && (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"height","height",1025178622))) && (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-reverse","row-reverse",78332847),null,new cljs.core.Keyword(null,"row","row",-570139521),null], null), null),new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670).cljs$core$IFn$_invoke$arity$1(parent))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(shape))))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"width","width",-384071477))) && (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"column-reverse","column-reverse",278726587),null], null), null),new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670).cljs$core$IFn$_invoke$arity$1(parent))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(shape))))))))))){
return new cljs.core.Keyword(null,"fill","fill",883462889);
} else {
if(((app.common.types.shape.layout.flex_layout_immediate_child_QMARK_(objects,shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sizing,new cljs.core.Keyword(null,"fill","fill",883462889))))){
return null;
} else {
if(((((app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sizing,new cljs.core.Keyword(null,"auto","auto",-566279492))) && ((!(app.util.code_gen.common.svg_markup_QMARK_(shape)))))))) || (((app.common.types.shape.layout.grid_layout_immediate_child_QMARK_(objects,shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sizing,new cljs.core.Keyword(null,"fill","fill",883462889))))))){
return sizing;
} else {
if((!((new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape) == null)))){
var G__69549 = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape);
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(G__69549) : type.call(null,G__69549));
} else {
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,type) == null)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,type);
} else {
return null;
}
}
}
}
}
});
app.util.code_gen.style_css_values.get_stroke_data = (function app$util$code_gen$style_css_values$get_stroke_data(stroke){
var width = new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$1(stroke);
var style = new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146).cljs$core$IFn$_invoke$arity$1(stroke);
var color = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937).cljs$core$IFn$_invoke$arity$1(stroke),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159).cljs$core$IFn$_invoke$arity$1(stroke),new cljs.core.Keyword(null,"gradient","gradient",-1983908971),new cljs.core.Keyword(null,"stroke-color-gradient","stroke-color-gradient",-195812260).cljs$core$IFn$_invoke$arity$1(stroke)], null);
if((((!((stroke == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146).cljs$core$IFn$_invoke$arity$1(stroke))))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"width","width",-384071477),width], null);
} else {
return null;
}
});
app.util.code_gen.style_css_values.area_cell_QMARK_ = (function app$util$code_gen$style_css_values$area_cell_QMARK_(p__69550){
var map__69551 = p__69550;
var map__69551__$1 = cljs.core.__destructure_map(map__69551);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69551__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var area_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69551__$1,new cljs.core.Keyword(null,"area-name","area-name",-496581211));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"area","area",472007256))) && (app.common.data.not_empty_QMARK_(area_name)));
});
app.util.code_gen.style_css_values.get_grid_coord = (function app$util$code_gen$style_css_values$get_grid_coord(shape,objects,prop,span_prop){
if(((app.common.types.shape.layout.grid_layout_immediate_child_QMARK_(objects,shape)) && (cljs.core.not(app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))))){
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
var cell = app.common.types.shape.layout.get_cell_by_shape_id(parent,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
if((((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"area","area",472007256))) && (app.common.data.not_empty_QMARK_(new cljs.core.Keyword(null,"area-name","area-name",-496581211).cljs$core$IFn$_invoke$arity$1(cell))))))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"manual","manual",-237370608))) || ((((new cljs.core.Keyword(null,"row-span","row-span",-365554241).cljs$core$IFn$_invoke$arity$1(cell) > (1))) || ((new cljs.core.Keyword(null,"column-span","column-span",1302376857).cljs$core$IFn$_invoke$arity$1(cell) > (1))))))))){
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,span_prop) > (1))){
return ""+(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) ?? "")+" / "+((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) + cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,span_prop)) ?? "");
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop);
}
} else {
return null;
}
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_position = (function app$util$code_gen$style_css_values$get_position(shape,objects){
if(((((app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape)) && (((cljs.core.not(app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))) && (((app.common.files.helpers.group_like_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) || (((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) || (app.util.code_gen.common.svg_markup_QMARK_(shape)))))))))) || (app.common.files.helpers.root_frame_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))){
return new cljs.core.Keyword(null,"relative","relative",22796862);
} else {
if(((app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape)) && (cljs.core.not(app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))))){
return null;
} else {
return new cljs.core.Keyword(null,"absolute","absolute",1655386478);

}
}
});
app.util.code_gen.style_css_values.get_left_position = (function app$util$code_gen$style_css_values$get_left_position(shape,objects){
return app.util.code_gen.style_css_values.get_shape_position(shape,objects,new cljs.core.Keyword(null,"x","x",2099068185));
});
app.util.code_gen.style_css_values.get_top_position = (function app$util$code_gen$style_css_values$get_top_position(shape,objects){
return app.util.code_gen.style_css_values.get_shape_position(shape,objects,new cljs.core.Keyword(null,"y","y",-1757859776));
});
app.util.code_gen.style_css_values.get_flex = (function app$util$code_gen$style_css_values$get_flex(shape,objects){
var parent = app.common.files.helpers.get_parent(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
if(((app.common.types.shape.layout.flex_layout_immediate_child_QMARK_(objects,shape)) && (((((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-reverse","row-reverse",78332847),null,new cljs.core.Keyword(null,"row","row",-570139521),null], null), null),new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670).cljs$core$IFn$_invoke$arity$1(parent))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(shape))))) || (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"column-reverse","column-reverse",278726587),null], null), null),new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670).cljs$core$IFn$_invoke$arity$1(parent))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(shape))))))))){
return (1);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_width = (function app$util$code_gen$style_css_values$get_width(shape,objects,options){
var root_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"root-shapes","root-shapes",2046683285).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
if(((root_QMARK_) && (app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))){
return new cljs.core.Keyword(null,"fill","fill",883462889);
} else {
if(((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grow-type","grow-type",-908344411).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"auto-width","auto-width",-992925188))))){
return null;
} else {
return app.util.code_gen.style_css_values.get_shape_size(shape,objects,new cljs.core.Keyword(null,"width","width",-384071477));
}
}
});
app.util.code_gen.style_css_values.get_height = (function app$util$code_gen$style_css_values$get_height(shape,objects,options){
var root_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"root-shapes","root-shapes",2046683285).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
if(((root_QMARK_) && (app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))){
return null;
} else {
if(((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grow-type","grow-type",-908344411).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"auto-height","auto-height",-960519663))))){
return null;
} else {
return app.util.code_gen.style_css_values.get_shape_size(shape,objects,new cljs.core.Keyword(null,"height","height",1025178622));
}
}
});
app.util.code_gen.style_css_values.get_flex_grow = (function app$util$code_gen$style_css_values$get_flex_grow(shape,options){
var root_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"root-shapes","root-shapes",2046683285).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
if(((root_QMARK_) && (app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))){
return (1);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_transform = (function app$util$code_gen$style_css_values$get_transform(shape,objects){
if(app.util.code_gen.common.svg_markup_QMARK_(shape)){
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
var transform = new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$2(parent,app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0());
var transform_str = ((app.common.geom.matrix.unit_QMARK_(transform))?null:app.main.ui.formats.format_matrix.cljs$core$IFn$_invoke$arity$1(transform));
if(app.util.code_gen.common.has_wrapper_QMARK_(objects,shape)){
return ""+"translate(-50%, -50%) "+(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(transform_str,"") ?? "");
} else {
return transform_str;
}
} else {
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
var transform = app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$2(shape,app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0()),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$2(parent,app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0()));
var transform_str = ((app.common.geom.matrix.unit_QMARK_(transform))?null:app.main.ui.formats.format_matrix.cljs$core$IFn$_invoke$arity$1(transform));
if(app.util.code_gen.common.has_wrapper_QMARK_(objects,shape)){
return ""+"translate(-50%, -50%) "+(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(transform_str,"") ?? "");
} else {
return transform_str;
}
}
});
app.util.code_gen.style_css_values.get_background = (function app$util$code_gen$style_css_values$get_background(p__69557){
var map__69558 = p__69557;
var map__69558__$1 = cljs.core.__destructure_map(map__69558);
var shape = map__69558__$1;
var fills = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69558__$1,new cljs.core.Keyword(null,"fills","fills",902966780));
var single_fill_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(fills),(1));
if((((!(app.util.code_gen.common.svg_markup_QMARK_(shape)))) && ((((!(app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))) && (single_fill_QMARK_))))){
return app.util.code_gen.style_css_values.fill__GT_color(cljs.core.first(fills));
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_border = (function app$util$code_gen$style_css_values$get_border(shape){
if(app.util.code_gen.common.svg_markup_QMARK_(shape)){
return null;
} else {
return app.util.code_gen.style_css_values.get_stroke_data(cljs.core.first(new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(shape)));
}
});
app.util.code_gen.style_css_values.get_border_radius = (function app$util$code_gen$style_css_values$get_border_radius(p__69559){
var map__69560 = p__69559;
var map__69560__$1 = cljs.core.__destructure_map(map__69560);
var shape = map__69560__$1;
var rx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69560__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var r1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69560__$1,new cljs.core.Keyword(null,"r1","r1",690974900));
var r2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69560__$1,new cljs.core.Keyword(null,"r2","r2",252844174));
var r3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69560__$1,new cljs.core.Keyword(null,"r3","r3",-2027148174));
var r4 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69560__$1,new cljs.core.Keyword(null,"r4","r4",1134323163));
if(app.common.files.helpers.circle_shape_QMARK_(shape)){
return "50%";
} else {
if((!((rx == null)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rx], null);
} else {
if(cljs.core.every_QMARK_(cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r1,r2,r3,r4], null))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r1,r2,r3,r4], null);
} else {
return null;
}
}
}
});
app.util.code_gen.style_css_values.get_border_start_start_radius = (function app$util$code_gen$style_css_values$get_border_start_start_radius(p__69561){
var map__69562 = p__69561;
var map__69562__$1 = cljs.core.__destructure_map(map__69562);
var shape = map__69562__$1;
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69562__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var r1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69562__$1,new cljs.core.Keyword(null,"r1","r1",690974900));
if(cljs.core.truth_((function (){var and__5023__auto__ = r1;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(r1,(0));
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r1], null);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_border_start_end_radius = (function app$util$code_gen$style_css_values$get_border_start_end_radius(p__69563){
var map__69564 = p__69563;
var map__69564__$1 = cljs.core.__destructure_map(map__69564);
var shape = map__69564__$1;
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69564__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var r2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69564__$1,new cljs.core.Keyword(null,"r2","r2",252844174));
if(cljs.core.truth_((function (){var and__5023__auto__ = r2;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(r2,(0));
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r2], null);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_border_end_start_radius = (function app$util$code_gen$style_css_values$get_border_end_start_radius(p__69565){
var map__69566 = p__69565;
var map__69566__$1 = cljs.core.__destructure_map(map__69566);
var shape = map__69566__$1;
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69566__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var r3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69566__$1,new cljs.core.Keyword(null,"r3","r3",-2027148174));
if(cljs.core.truth_((function (){var and__5023__auto__ = r3;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(r3,(0));
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r3], null);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_border_end_end_radius = (function app$util$code_gen$style_css_values$get_border_end_end_radius(p__69567){
var map__69568 = p__69567;
var map__69568__$1 = cljs.core.__destructure_map(map__69568);
var shape = map__69568__$1;
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69568__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var r4 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69568__$1,new cljs.core.Keyword(null,"r4","r4",1134323163));
if(cljs.core.truth_((function (){var and__5023__auto__ = r4;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(r4,(0));
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r4], null);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_border_style = (function app$util$code_gen$style_css_values$get_border_style(stroke){
if(app.util.code_gen.common.svg_markup_QMARK_(stroke)){
return null;
} else {
return app.util.code_gen.style_css_values.get_stroke_data(stroke);
}
});
app.util.code_gen.style_css_values.get_border_width = (function app$util$code_gen$style_css_values$get_border_width(stroke){
if(app.util.code_gen.common.svg_markup_QMARK_(stroke)){
return null;
} else {
return app.util.code_gen.style_css_values.get_stroke_data(stroke);
}
});
app.util.code_gen.style_css_values.get_border_color = (function app$util$code_gen$style_css_values$get_border_color(stroke){
if(app.util.code_gen.common.svg_markup_QMARK_(stroke)){
return null;
} else {
return app.util.code_gen.style_css_values.get_stroke_data(stroke);
}
});
app.util.code_gen.style_css_values.get_box_shadow = (function app$util$code_gen$style_css_values$get_box_shadow(shape){
if(app.util.code_gen.common.svg_markup_QMARK_(shape)){
return null;
} else {
return new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(shape);
}
});
app.util.code_gen.style_css_values.get_filter = (function app$util$code_gen$style_css_values$get_filter(shape){
if(app.util.code_gen.common.svg_markup_QMARK_(shape)){
return null;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"value","value",305978217)], null));
}
});
app.util.code_gen.style_css_values.get_display = (function app$util$code_gen$style_css_values$get_display(shape){
if(cljs.core.truth_(new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(shape))){
return "none";
} else {
if(app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return "flex";
} else {
if(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return "grid";
} else {
return null;
}
}
}
});
app.util.code_gen.style_css_values.get_opacity = (function app$util$code_gen$style_css_values$get_opacity(shape){
if((new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(shape) < (1))){
return new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(shape);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_overflow = (function app$util$code_gen$style_css_values$get_overflow(shape){
if(((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && ((((!(app.util.code_gen.common.svg_markup_QMARK_(shape)))) && (cljs.core.not(new cljs.core.Keyword(null,"show-content","show-content",-878000465).cljs$core$IFn$_invoke$arity$1(shape))))))){
return "hidden";
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_flex_direction = (function app$util$code_gen$style_css_values$get_flex_direction(shape){
return new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670).cljs$core$IFn$_invoke$arity$1(shape);
});
app.util.code_gen.style_css_values.get_align_items = (function app$util$code_gen$style_css_values$get_align_items(shape){
return new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895).cljs$core$IFn$_invoke$arity$1(shape);
});
app.util.code_gen.style_css_values.get_align_content = (function app$util$code_gen$style_css_values$get_align_content(shape){
return new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473).cljs$core$IFn$_invoke$arity$1(shape);
});
app.util.code_gen.style_css_values.get_justify_items = (function app$util$code_gen$style_css_values$get_justify_items(shape){
return new cljs.core.Keyword(null,"layout-justify-items","layout-justify-items",1271685173).cljs$core$IFn$_invoke$arity$1(shape);
});
app.util.code_gen.style_css_values.get_justify_content = (function app$util$code_gen$style_css_values$get_justify_content(shape){
return new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134).cljs$core$IFn$_invoke$arity$1(shape);
});
app.util.code_gen.style_css_values.get_flex_wrap = (function app$util$code_gen$style_css_values$get_flex_wrap(shape){
return new cljs.core.Keyword(null,"layout-wrap-type","layout-wrap-type",186626597).cljs$core$IFn$_invoke$arity$1(shape);
});
app.util.code_gen.style_css_values.get_gap = (function app$util$code_gen$style_css_values$get_gap(shape){
var vec__69569 = app.common.types.shape.layout.gaps(shape);
var g1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69569,(0),null);
var g2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69569,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(g1,g2)) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(g1,(0))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(g2,(0))))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g1], null);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_row_gap = (function app$util$code_gen$style_css_values$get_row_gap(shape){
var vec__69572 = app.common.types.shape.layout.gaps(shape);
var g1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69572,(0),null);
var g2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69572,(1),null);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(g1,g2)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(g1,(0))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g1], null);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_column_gap = (function app$util$code_gen$style_css_values$get_column_gap(shape){
var vec__69578 = app.common.types.shape.layout.gaps(shape);
var g1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69578,(0),null);
var g2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69578,(1),null);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(g1,g2)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(g2,(0))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g2], null);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_padding = (function app$util$code_gen$style_css_values$get_padding(p__69584){
var map__69585 = p__69584;
var map__69585__$1 = cljs.core.__destructure_map(map__69585);
var layout_padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69585__$1,new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747));
if((!((layout_padding == null)))){
var default_padding = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p1","p1",-936759954),(0),new cljs.core.Keyword(null,"p2","p2",905500641),(0),new cljs.core.Keyword(null,"p3","p3",1731040739),(0),new cljs.core.Keyword(null,"p4","p4",-1090126814),(0)], null);
var map__69586 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_padding,layout_padding], 0));
var map__69586__$1 = cljs.core.__destructure_map(map__69586);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69586__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69586__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var p3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69586__$1,new cljs.core.Keyword(null,"p3","p3",1731040739));
var p4 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69586__$1,new cljs.core.Keyword(null,"p4","p4",-1090126814));
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1,(0))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p2,(0))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p3,(0))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p4,(0))))))))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2,p3,p4], null);
} else {
return null;
}
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_padding_block_start = (function app$util$code_gen$style_css_values$get_padding_block_start(p__69590){
var map__69591 = p__69590;
var map__69591__$1 = cljs.core.__destructure_map(map__69591);
var layout_padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69591__$1,new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747));
if(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(layout_padding);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(layout_padding),(0));
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(layout_padding)], null);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_padding_inline_end = (function app$util$code_gen$style_css_values$get_padding_inline_end(p__69595){
var map__69596 = p__69595;
var map__69596__$1 = cljs.core.__destructure_map(map__69596);
var layout_padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69596__$1,new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747));
if(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(layout_padding);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(layout_padding),(0));
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(layout_padding)], null);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_padding_block_end = (function app$util$code_gen$style_css_values$get_padding_block_end(p__69597){
var map__69598 = p__69597;
var map__69598__$1 = cljs.core.__destructure_map(map__69598);
var layout_padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69598__$1,new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747));
if(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"p3","p3",1731040739).cljs$core$IFn$_invoke$arity$1(layout_padding);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p3","p3",1731040739).cljs$core$IFn$_invoke$arity$1(layout_padding),(0));
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p3","p3",1731040739).cljs$core$IFn$_invoke$arity$1(layout_padding)], null);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_padding_inline_start = (function app$util$code_gen$style_css_values$get_padding_inline_start(p__69599){
var map__69600 = p__69599;
var map__69600__$1 = cljs.core.__destructure_map(map__69600);
var layout_padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69600__$1,new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747));
if(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"p4","p4",-1090126814).cljs$core$IFn$_invoke$arity$1(layout_padding);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p4","p4",-1090126814).cljs$core$IFn$_invoke$arity$1(layout_padding),(0));
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p4","p4",-1090126814).cljs$core$IFn$_invoke$arity$1(layout_padding)], null);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_grid_template_rows = (function app$util$code_gen$style_css_values$get_grid_template_rows(shape){
return new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947).cljs$core$IFn$_invoke$arity$1(shape);
});
app.util.code_gen.style_css_values.get_grid_template_columns = (function app$util$code_gen$style_css_values$get_grid_template_columns(shape){
return new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864).cljs$core$IFn$_invoke$arity$1(shape);
});
app.util.code_gen.style_css_values.get_grid_template_areas = (function app$util$code_gen$style_css_values$get_grid_template_areas(shape){
if(cljs.core.truth_((function (){var and__5023__auto__ = app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
if(and__5023__auto__){
return cljs.core.some(app.util.code_gen.style_css_values.area_cell_QMARK_,cljs.core.vals(new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187).cljs$core$IFn$_invoke$arity$1(shape)));
} else {
return and__5023__auto__;
}
})())){
var result = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__69616){
var vec__69617 = p__69616;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69617,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69617,(1),null);
return ""+"\""+(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__69620){
var vec__69621 = p__69620;
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69621,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69621,(1),null);
var cell = app.common.types.shape.layout.get_cell_by_position(shape,(row + (1)),(column + (1)));
return cuerdas.core.replace(new cljs.core.Keyword(null,"area-name","area-name",-496581211).cljs$core$IFn$_invoke$arity$2(cell,".")," ","-");
}),app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864).cljs$core$IFn$_invoke$arity$1(shape)))) ?? "")+"\"";
}),app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947).cljs$core$IFn$_invoke$arity$1(shape))));
return result;
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_grid_column = (function app$util$code_gen$style_css_values$get_grid_column(shape,objects){
return app.util.code_gen.style_css_values.get_grid_coord(shape,objects,new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column-span","column-span",1302376857));
});
app.util.code_gen.style_css_values.get_grid_row = (function app$util$code_gen$style_css_values$get_grid_row(shape,objects){
return app.util.code_gen.style_css_values.get_grid_coord(shape,objects,new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row-span","row-span",-365554241));
});
app.util.code_gen.style_css_values.get_grid_area = (function app$util$code_gen$style_css_values$get_grid_area(shape,objects){
if(((app.common.types.shape.layout.grid_layout_immediate_child_QMARK_(objects,shape)) && (cljs.core.not(app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))))){
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
var cell = app.common.types.shape.layout.get_cell_by_shape_id(parent,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"area","area",472007256))) && (app.common.data.not_empty_QMARK_(new cljs.core.Keyword(null,"area-name","area-name",-496581211).cljs$core$IFn$_invoke$arity$1(cell))))){
return cuerdas.core.replace(new cljs.core.Keyword(null,"area-name","area-name",-496581211).cljs$core$IFn$_invoke$arity$1(cell)," ","-");
} else {
return null;
}
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_flex_shrink = (function app$util$code_gen$style_css_values$get_flex_shrink(shape,objects){
if(((app.common.types.shape.layout.flex_layout_immediate_child_QMARK_(objects,shape)) && ((((!(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reverse-row","reverse-row",2097961623),null,new cljs.core.Keyword(null,"row","row",-570139521),null], null), null),new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670).cljs$core$IFn$_invoke$arity$1(shape))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(shape))))))) && ((((!(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-row","column-row",868545736),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null), null),new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670).cljs$core$IFn$_invoke$arity$1(shape))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(shape))))))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(shape))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(shape))))))))))){
return (0);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_margin = (function app$util$code_gen$style_css_values$get_margin(p__69647,objects){
var map__69648 = p__69647;
var map__69648__$1 = cljs.core.__destructure_map(map__69648);
var shape = map__69648__$1;
var layout_item_margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69648__$1,new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708));
if(app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape)){
var default_margin = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"m1","m1",-108094626),(0),new cljs.core.Keyword(null,"m2","m2",-587003306),(0),new cljs.core.Keyword(null,"m3","m3",-703635357),(0),new cljs.core.Keyword(null,"m4","m4",-1624571215),(0)], null);
var map__69649 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_margin,layout_item_margin], 0));
var map__69649__$1 = cljs.core.__destructure_map(map__69649);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69649__$1,new cljs.core.Keyword(null,"m1","m1",-108094626));
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69649__$1,new cljs.core.Keyword(null,"m2","m2",-587003306));
var m3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69649__$1,new cljs.core.Keyword(null,"m3","m3",-703635357));
var m4 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69649__$1,new cljs.core.Keyword(null,"m4","m4",-1624571215));
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(m1,(0))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(m2,(0))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(m3,(0))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(m4,(0))))))))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m1,m2,m3,m4], null);
} else {
return null;
}
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_margin_block_start = (function app$util$code_gen$style_css_values$get_margin_block_start(p__69650,objects){
var map__69651 = p__69650;
var map__69651__$1 = cljs.core.__destructure_map(map__69651);
var shape = map__69651__$1;
var layout_item_margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69651__$1,new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708));
if(cljs.core.truth_((function (){var and__5023__auto__ = app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape);
if(and__5023__auto__){
var and__5023__auto____$1 = new cljs.core.Keyword(null,"m1","m1",-108094626).cljs$core$IFn$_invoke$arity$1(layout_item_margin);
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"m1","m1",-108094626).cljs$core$IFn$_invoke$arity$1(layout_item_margin),(0));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m1","m1",-108094626).cljs$core$IFn$_invoke$arity$1(layout_item_margin)], null);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_margin_inline_end = (function app$util$code_gen$style_css_values$get_margin_inline_end(p__69653,objects){
var map__69654 = p__69653;
var map__69654__$1 = cljs.core.__destructure_map(map__69654);
var shape = map__69654__$1;
var layout_item_margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69654__$1,new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708));
if(cljs.core.truth_((function (){var and__5023__auto__ = app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape);
if(and__5023__auto__){
var and__5023__auto____$1 = new cljs.core.Keyword(null,"m2","m2",-587003306).cljs$core$IFn$_invoke$arity$1(layout_item_margin);
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"m2","m2",-587003306).cljs$core$IFn$_invoke$arity$1(layout_item_margin),(0));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m2","m2",-587003306).cljs$core$IFn$_invoke$arity$1(layout_item_margin)], null);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_margin_block_end = (function app$util$code_gen$style_css_values$get_margin_block_end(p__69655,objects){
var map__69656 = p__69655;
var map__69656__$1 = cljs.core.__destructure_map(map__69656);
var shape = map__69656__$1;
var layout_item_margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69656__$1,new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708));
if(cljs.core.truth_((function (){var and__5023__auto__ = app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape);
if(and__5023__auto__){
var and__5023__auto____$1 = new cljs.core.Keyword(null,"m3","m3",-703635357).cljs$core$IFn$_invoke$arity$1(layout_item_margin);
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"m3","m3",-703635357).cljs$core$IFn$_invoke$arity$1(layout_item_margin),(0));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m3","m3",-703635357).cljs$core$IFn$_invoke$arity$1(layout_item_margin)], null);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_margin_inline_start = (function app$util$code_gen$style_css_values$get_margin_inline_start(p__69657,objects){
var map__69658 = p__69657;
var map__69658__$1 = cljs.core.__destructure_map(map__69658);
var shape = map__69658__$1;
var layout_item_margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69658__$1,new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708));
if(cljs.core.truth_((function (){var and__5023__auto__ = app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape);
if(and__5023__auto__){
var and__5023__auto____$1 = new cljs.core.Keyword(null,"m4","m4",-1624571215).cljs$core$IFn$_invoke$arity$1(layout_item_margin);
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"m4","m4",-1624571215).cljs$core$IFn$_invoke$arity$1(layout_item_margin),(0));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m4","m4",-1624571215).cljs$core$IFn$_invoke$arity$1(layout_item_margin)], null);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_z_index = (function app$util$code_gen$style_css_values$get_z_index(p__69659,objects){
var map__69662 = p__69659;
var map__69662__$1 = cljs.core.__destructure_map(map__69662);
var shape = map__69662__$1;
var layout_item_z_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69662__$1,new cljs.core.Keyword(null,"layout-item-z-index","layout-item-z-index",728479455));
if(app.common.files.helpers.root_frame_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return (0);
} else {
if(app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape)){
return layout_item_z_index;
} else {
return null;
}
}
});
app.util.code_gen.style_css_values.get_max_height = (function app$util$code_gen$style_css_values$get_max_height(shape,objects){
if(app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape)){
return new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307).cljs$core$IFn$_invoke$arity$1(shape);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_min_height = (function app$util$code_gen$style_css_values$get_min_height(shape,objects){
if(((app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape)) && ((!((new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548).cljs$core$IFn$_invoke$arity$1(shape) == null)))))){
return new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548).cljs$core$IFn$_invoke$arity$1(shape);
} else {
if(((app.common.types.shape.layout.auto_height_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core.not(new cljs.core.Keyword(null,"show-content","show-content",-878000465).cljs$core$IFn$_invoke$arity$1(shape))))))){
return new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape));
} else {
return null;
}
}
});
app.util.code_gen.style_css_values.get_max_width = (function app$util$code_gen$style_css_values$get_max_width(shape,objects){
if(app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape)){
return new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366).cljs$core$IFn$_invoke$arity$1(shape);
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_min_width = (function app$util$code_gen$style_css_values$get_min_width(shape,objects){
if(((app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape)) && ((!((new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548).cljs$core$IFn$_invoke$arity$1(shape) == null)))))){
return new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548).cljs$core$IFn$_invoke$arity$1(shape);
} else {
if(((app.common.types.shape.layout.auto_width_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core.not(new cljs.core.Keyword(null,"show-content","show-content",-878000465).cljs$core$IFn$_invoke$arity$1(shape))))))){
return new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape));
} else {
return null;
}
}
});
app.util.code_gen.style_css_values.get_align_self = (function app$util$code_gen$style_css_values$get_align_self(shape,objects){
if(app.common.types.shape.layout.flex_layout_immediate_child_QMARK_(objects,shape)){
return new cljs.core.Keyword(null,"layout-item-align-self","layout-item-align-self",-1976194692).cljs$core$IFn$_invoke$arity$1(shape);
} else {
if(app.common.types.shape.layout.grid_layout_immediate_child_QMARK_(objects,shape)){
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
var cell = app.common.types.shape.layout.get_cell_by_shape_id(parent,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
var align_self = new cljs.core.Keyword(null,"align-self","align-self",1475936794).cljs$core$IFn$_invoke$arity$1(cell);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(align_self,new cljs.core.Keyword(null,"auto","auto",-566279492))){
return align_self;
} else {
return null;
}
} else {
return null;
}
}
});
app.util.code_gen.style_css_values.get_justify_self = (function app$util$code_gen$style_css_values$get_justify_self(shape,objects){
if(app.common.types.shape.layout.grid_layout_immediate_child_QMARK_(objects,shape)){
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
var cell = app.common.types.shape.layout.get_cell_by_shape_id(parent,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
var justify_self = new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605).cljs$core$IFn$_invoke$arity$1(cell);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(justify_self,new cljs.core.Keyword(null,"auto","auto",-566279492))){
return justify_self;
} else {
return null;
}
} else {
return null;
}
});
app.util.code_gen.style_css_values.get_grid_auto_flow = (function app$util$code_gen$style_css_values$get_grid_auto_flow(shape){
if(((app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout-grid-dir","layout-grid-dir",1868849661).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"column","column",2078222095))))){
return "column";
} else {
return null;
}
});
/**
 * Get the value for a given CSS property from a shape
 */
app.util.code_gen.style_css_values.get_value = (function app$util$code_gen$style_css_values$get_value(property,shape,objects,options){
var G__69682 = property;
var G__69682__$1 = (((G__69682 instanceof cljs.core.Keyword))?G__69682.fqn:null);
switch (G__69682__$1) {
case "position":
return app.util.code_gen.style_css_values.get_position(shape,objects);

break;
case "left":
return app.util.code_gen.style_css_values.get_left_position(shape,objects);

break;
case "top":
return app.util.code_gen.style_css_values.get_top_position(shape,objects);

break;
case "z-index":
return app.util.code_gen.style_css_values.get_z_index(shape,objects);

break;
case "transform":
return app.util.code_gen.style_css_values.get_transform(shape,objects);

break;
case "width":
return app.util.code_gen.style_css_values.get_width(shape,objects,options);

break;
case "height":
return app.util.code_gen.style_css_values.get_height(shape,objects,options);

break;
case "max-width":
case "max-inline-size":
return app.util.code_gen.style_css_values.get_max_width(shape,objects);

break;
case "min-width":
case "min-inline-size":
return app.util.code_gen.style_css_values.get_min_width(shape,objects);

break;
case "max-height":
case "max-block-size":
return app.util.code_gen.style_css_values.get_max_height(shape,objects);

break;
case "min-height":
case "min-block-size":
return app.util.code_gen.style_css_values.get_min_height(shape,objects);

break;
case "margin":
return app.util.code_gen.style_css_values.get_margin(shape,objects);

break;
case "margin-block-start":
return app.util.code_gen.style_css_values.get_margin_block_start(shape,objects);

break;
case "margin-inline-end":
return app.util.code_gen.style_css_values.get_margin_inline_end(shape,objects);

break;
case "margin-block-end":
return app.util.code_gen.style_css_values.get_margin_block_end(shape,objects);

break;
case "margin-inline-start":
return app.util.code_gen.style_css_values.get_margin_inline_start(shape,objects);

break;
case "padding":
return app.util.code_gen.style_css_values.get_padding(shape);

break;
case "padding-block-start":
return app.util.code_gen.style_css_values.get_padding_block_start(shape);

break;
case "padding-inline-end":
return app.util.code_gen.style_css_values.get_padding_inline_end(shape);

break;
case "padding-block-end":
return app.util.code_gen.style_css_values.get_padding_block_end(shape);

break;
case "padding-inline-start":
return app.util.code_gen.style_css_values.get_padding_inline_start(shape);

break;
case "border":
return app.util.code_gen.style_css_values.get_border(shape);

break;
case "border-style":
return app.util.code_gen.style_css_values.get_border_style(shape);

break;
case "border-width":
return app.util.code_gen.style_css_values.get_border_width(shape);

break;
case "border-color":
return app.util.code_gen.style_css_values.get_border_color(shape);

break;
case "border-radius":
return app.util.code_gen.style_css_values.get_border_radius(shape);

break;
case "border-start-start-radius":
return app.util.code_gen.style_css_values.get_border_start_start_radius(shape);

break;
case "border-start-end-radius":
return app.util.code_gen.style_css_values.get_border_start_end_radius(shape);

break;
case "border-end-start-radius":
return app.util.code_gen.style_css_values.get_border_end_start_radius(shape);

break;
case "border-end-end-radius":
return app.util.code_gen.style_css_values.get_border_end_end_radius(shape);

break;
case "background":
return app.util.code_gen.style_css_values.get_background(shape);

break;
case "opacity":
return app.util.code_gen.style_css_values.get_opacity(shape);

break;
case "box-shadow":
return app.util.code_gen.style_css_values.get_box_shadow(shape);

break;
case "filter":
return app.util.code_gen.style_css_values.get_filter(shape);

break;
case "overflow":
return app.util.code_gen.style_css_values.get_overflow(shape);

break;
case "display":
return app.util.code_gen.style_css_values.get_display(shape);

break;
case "flex":
return app.util.code_gen.style_css_values.get_flex(shape,objects);

break;
case "flex-grow":
return app.util.code_gen.style_css_values.get_flex_grow(shape,options);

break;
case "flex-shrink":
return app.util.code_gen.style_css_values.get_flex_shrink(shape,objects);

break;
case "flex-direction":
return app.util.code_gen.style_css_values.get_flex_direction(shape);

break;
case "flex-wrap":
return app.util.code_gen.style_css_values.get_flex_wrap(shape);

break;
case "align-items":
return app.util.code_gen.style_css_values.get_align_items(shape);

break;
case "align-content":
return app.util.code_gen.style_css_values.get_align_content(shape);

break;
case "align-self":
return app.util.code_gen.style_css_values.get_align_self(shape,objects);

break;
case "justify-content":
return app.util.code_gen.style_css_values.get_justify_content(shape);

break;
case "justify-items":
return app.util.code_gen.style_css_values.get_justify_items(shape);

break;
case "justify-self":
return app.util.code_gen.style_css_values.get_justify_self(shape,objects);

break;
case "grid-template-rows":
return app.util.code_gen.style_css_values.get_grid_template_rows(shape);

break;
case "grid-template-columns":
return app.util.code_gen.style_css_values.get_grid_template_columns(shape);

break;
case "grid-template-areas":
return app.util.code_gen.style_css_values.get_grid_template_areas(shape);

break;
case "grid-column":
return app.util.code_gen.style_css_values.get_grid_column(shape,objects);

break;
case "grid-row":
return app.util.code_gen.style_css_values.get_grid_row(shape,objects);

break;
case "grid-area":
return app.util.code_gen.style_css_values.get_grid_area(shape,objects);

break;
case "grid-auto-flow":
return app.util.code_gen.style_css_values.get_grid_auto_flow(shape);

break;
case "gap":
return app.util.code_gen.style_css_values.get_gap(shape);

break;
case "row-gap":
return app.util.code_gen.style_css_values.get_row_gap(shape);

break;
case "column-gap":
return app.util.code_gen.style_css_values.get_column_gap(shape);

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,property);

}
});

//# sourceMappingURL=app.util.code_gen.style_css_values.js.map
