import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.shapes.js";
import "./app.common.json.js";
import "./app.common.svg.js";
import "./app.common.types.color.js";
import "./app.common.types.shape.js";
import "./app.common.types.shape.radius.js";
import "./app.util.object.js";
import "./cuerdas.core.js";
goog.provide('app.main.ui.shapes.attrs');
app.main.ui.shapes.attrs.calculate_dasharray = (function app$main$ui$shapes$attrs$calculate_dasharray(style,width){
var w_PLUS_5 = ((5) + width);
var w_PLUS_1 = ((1) + width);
var w_PLUS_10 = ((10) + width);
var G__54002 = style;
var G__54002__$1 = (((G__54002 instanceof cljs.core.Keyword))?G__54002.fqn:null);
switch (G__54002__$1) {
case "mixed":
return ""+""+(w_PLUS_5 ?? "")+","+(w_PLUS_5 ?? "")+","+(w_PLUS_1 ?? "")+","+(w_PLUS_5 ?? "");

break;
case "dotted":
return ""+"0,"+(w_PLUS_5 ?? "");

break;
case "dashed":
return ""+""+(w_PLUS_10 ?? "")+","+(w_PLUS_10 ?? "");

break;
default:
return "";

}
});
app.main.ui.shapes.attrs.get_border_props = (function app$main$ui$shapes$attrs$get_border_props(shape){
var G__54007 = app.common.types.shape.radius.radius_mode(shape);
var G__54007__$1 = (((G__54007 instanceof cljs.core.Keyword))?G__54007.fqn:null);
switch (G__54007__$1) {
case "radius-1":
var radius = app.common.geom.shapes.shape_corners_1(shape);
return ({"rx": radius, "ry": radius});

break;
case "radius-4":
var vec__54008 = app.common.geom.shapes.shape_corners_4(shape);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54008,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54008,(1),null);
var r3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54008,(2),null);
var r4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54008,(3),null);
var x = (shape?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (shape?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"y","y",-1757859776)));
var width = (shape?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"width","width",-384071477)));
var height = (shape?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"height","height",1025178622)));
var top = ((width - r1) - r2);
var right = ((height - r2) - r3);
var bottom = ((width - r3) - r4);
var left = ((height - r4) - r1);
return ({"d": ""+"M"+((x + r1) ?? "")+","+(y ?? "")+" h"+(top ?? "")+" a"+(r2 ?? "")+","+(r2 ?? "")+" 0 0 1 "+(r2 ?? "")+","+(r2 ?? "")+" v"+(right ?? "")+" a"+(r3 ?? "")+","+(r3 ?? "")+" 0 0 1 "+((- r3) ?? "")+","+(r3 ?? "")+" h"+((- bottom) ?? "")+" a"+(r4 ?? "")+","+(r4 ?? "")+" 0 0 1 "+((- r4) ?? "")+","+((- r4) ?? "")+" v"+((- left) ?? "")+" a"+(r1 ?? "")+","+(r1 ?? "")+" 0 0 1 "+(r1 ?? "")+","+((- r1) ?? "")+" z"});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54007__$1)].join('')));

}
});
app.main.ui.shapes.attrs.add_border_props_BANG_ = (function app$main$ui$shapes$attrs$add_border_props_BANG_(props,shape){
return app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(props,app.main.ui.shapes.attrs.get_border_props(shape));
});
app.main.ui.shapes.attrs.add_fill_BANG_ = (function app$main$ui$shapes$attrs$add_fill_BANG_(var_args){
var G__54023 = arguments.length;
switch (G__54023) {
case 5:
return app.main.ui.shapes.attrs.add_fill_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return app.main.ui.shapes.attrs.add_fill_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.shapes.attrs.add_fill_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (attrs,fill_data,render_id,index,type){
return app.main.ui.shapes.attrs.add_fill_BANG_.cljs$core$IFn$_invoke$arity$6(attrs,fill_data,render_id,index,type,"none");
}));

(app.main.ui.shapes.attrs.add_fill_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (attrs,fill_data,render_id,index,type,fill_default){
var index__$1 = (((!((index == null))))?""+"-"+(index ?? ""):"");
if(cljs.core.contains_QMARK_(fill_data,new cljs.core.Keyword(null,"fill-image","fill-image",-99895848))){
var id_54091 = ""+"fill-image-"+(render_id ?? "");
app.util.object.set_BANG_(attrs,"fill",""+"url(#"+(id_54091 ?? "")+")");
} else {
if((!((new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870).cljs$core$IFn$_invoke$arity$1(fill_data) == null)))){
var id_54093 = ""+"fill-color-gradient-"+(render_id ?? "")+(index__$1 ?? "");
app.util.object.set_BANG_(attrs,"fill",""+"url(#"+(id_54093 ?? "")+")");
} else {
if(cljs.core.contains_QMARK_(fill_data,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903))){
app.util.object.set_BANG_(attrs,"fill",new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903).cljs$core$IFn$_invoke$arity$1(fill_data));
} else {
app.util.object.set_BANG_(attrs,"fill",fill_default);

}
}
}

if(cljs.core.contains_QMARK_(fill_data,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170))){
app.util.object.set_BANG_(attrs,"fillOpacity",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170).cljs$core$IFn$_invoke$arity$1(fill_data));
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),type)) && ((((new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870).cljs$core$IFn$_invoke$arity$1(fill_data) == null)) && ((new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903).cljs$core$IFn$_invoke$arity$1(fill_data) == null)))))){
app.util.object.set_BANG_(attrs,"fill","black");
} else {
}

return attrs;
}));

(app.main.ui.shapes.attrs.add_fill_BANG_.cljs$lang$maxFixedArity = 6);

app.main.ui.shapes.attrs.add_stroke_BANG_ = (function app$main$ui$shapes$attrs$add_stroke_BANG_(attrs,data,render_id,index,open_path_QMARK_){
var style = new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146).cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"solid","solid",-2023773691));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"none","none",1333468478))){
} else {
var width_54097 = new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$2(data,(1));
var gradient_54098 = new cljs.core.Keyword(null,"stroke-color-gradient","stroke-color-gradient",-195812260).cljs$core$IFn$_invoke$arity$1(data);
var color_54099 = new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937).cljs$core$IFn$_invoke$arity$1(data);
var opacity_54100 = new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159).cljs$core$IFn$_invoke$arity$1(data);
app.util.object.set_BANG_(attrs,"strokeWidth",width_54097);

if((!((gradient_54098 == null)))){
var gradient_id_54103 = ""+"stroke-color-gradient-"+(render_id ?? "")+"-"+(index ?? "");
app.util.object.set_BANG_(attrs,"stroke",""+"url(#"+(gradient_id_54103 ?? "")+")");
} else {
if((!((color_54099 == null)))){
app.util.object.set_BANG_(attrs,"stroke",color_54099);
} else {
}
}

if((!((opacity_54100 == null)))){
app.util.object.set_BANG_(attrs,"strokeOpacity",opacity_54100);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"svg","svg",856789142))){
app.util.object.set_BANG_(attrs,"strokeDasharray",app.main.ui.shapes.attrs.calculate_dasharray(style,width_54097));
} else {
}

var caps_start_54124 = new cljs.core.Keyword(null,"stroke-cap-start","stroke-cap-start",-2018645757).cljs$core$IFn$_invoke$arity$1(data);
var caps_end_54125 = new cljs.core.Keyword(null,"stroke-cap-end","stroke-cap-end",-411370737).cljs$core$IFn$_invoke$arity$1(data);
var alignment_54126 = new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.contains_QMARK_(app.common.types.shape.stroke_caps_line,caps_start_54124);
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(caps_start_54124,caps_end_54125);
if(and__5023__auto____$1){
var and__5023__auto____$2 = (function (){var or__5025__auto__ = open_path_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inner","inner",-1383171215),alignment_54126)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"outer","outer",-375185956),alignment_54126)));
}
})();
if(cljs.core.truth_(and__5023__auto____$2)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted","dotted",-1504510307),style);
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
app.util.object.set_BANG_(attrs,"strokeLinecap",cljs.core.name(caps_start_54124));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted","dotted",-1504510307),style)){
app.util.object.set_BANG_(attrs,"strokeLinecap","round");
} else {
}
}

if(cljs.core.truth_((function (){var or__5025__auto__ = open_path_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inner","inner",-1383171215),alignment_54126)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"outer","outer",-375185956),alignment_54126)));
}
})())){
if(((cljs.core.contains_QMARK_(app.common.types.shape.stroke_caps_marker,caps_start_54124)) || (((cljs.core.contains_QMARK_(app.common.types.shape.stroke_caps_line,caps_start_54124)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(caps_start_54124,caps_end_54125)))))){
app.util.object.set_BANG_(attrs,"markerStart",""+"url(#marker-"+(render_id ?? "")+"-"+(cljs.core.name(caps_start_54124) ?? "")+")");
} else {
}

if(((cljs.core.contains_QMARK_(app.common.types.shape.stroke_caps_marker,caps_end_54125)) || (((cljs.core.contains_QMARK_(app.common.types.shape.stroke_caps_line,caps_end_54125)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(caps_start_54124,caps_end_54125)))))){
app.util.object.set_BANG_(attrs,"markerEnd",""+"url(#marker-"+(render_id ?? "")+"-"+(cljs.core.name(caps_end_54125) ?? "")+")");
} else {
}
} else {
}
}

return attrs;
});
app.main.ui.shapes.attrs.get_svg_props = (function app$main$ui$shapes$attrs$get_svg_props(shape,render_id){
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),cljs.core.PersistentArrayMap.EMPTY);
var defs = cljs.core.get.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"svg-defs","svg-defs",364869720),cljs.core.PersistentArrayMap.EMPTY);
if(((cljs.core.empty_QMARK_(defs)) && (cljs.core.empty_QMARK_(attrs)))){
return ({});
} else {
return app.common.json.__GT_js.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(app.common.svg.update_attr_ids(attrs,(function (id){
if(cljs.core.contains_QMARK_(defs,id)){
return ""+(render_id ?? "")+"-"+(id ?? "");
} else {
return id;
}
})),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.name], 0));
}
});
app.main.ui.shapes.attrs.get_fill_style = (function app$main$ui$shapes$attrs$get_fill_style(var_args){
var G__54053 = arguments.length;
switch (G__54053) {
case 4:
return app.main.ui.shapes.attrs.get_fill_style.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return app.main.ui.shapes.attrs.get_fill_style.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.shapes.attrs.get_fill_style.cljs$core$IFn$_invoke$arity$4 = (function (fill_data,index,render_id,type){
return app.main.ui.shapes.attrs.add_fill_BANG_.cljs$core$IFn$_invoke$arity$5(({}),fill_data,render_id,index,type);
}));

(app.main.ui.shapes.attrs.get_fill_style.cljs$core$IFn$_invoke$arity$5 = (function (fill_data,index,render_id,type,fill_default){
return app.main.ui.shapes.attrs.add_fill_BANG_.cljs$core$IFn$_invoke$arity$6(({}),fill_data,render_id,index,type,fill_default);
}));

(app.main.ui.shapes.attrs.get_fill_style.cljs$lang$maxFixedArity = 5);

app.main.ui.shapes.attrs.add_fill_props_BANG_ = (function app$main$ui$shapes$attrs$add_fill_props_BANG_(var_args){
var G__54067 = arguments.length;
switch (G__54067) {
case 3:
return app.main.ui.shapes.attrs.add_fill_props_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.ui.shapes.attrs.add_fill_props_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.shapes.attrs.add_fill_props_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (props,shape,render_id){
return app.main.ui.shapes.attrs.add_fill_props_BANG_.cljs$core$IFn$_invoke$arity$4(props,shape,(0),render_id);
}));

(app.main.ui.shapes.attrs.add_fill_props_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (props,shape,position,render_id){
var shape_fills = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"fills","fills",902966780));
var shape_shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var shape_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"blur","blur",-453500461));
var svg_attrs = app.main.ui.shapes.attrs.get_svg_props(shape,render_id);
var svg_styles = app.util.object.get.cljs$core$IFn$_invoke$arity$2(svg_attrs,"style");
var shape_type = (shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)));
var style = app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(app.util.object.clone(app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"style")),svg_styles);
var url_fill_QMARK_ = (((!((new cljs.core.Keyword(null,"fill-image","fill-image",-99895848).cljs$core$IFn$_invoke$arity$1(shape) == null)))) || (((app.common.files.helpers.image_shape_QMARK_(shape)) || ((((cljs.core.count(shape_fills) > (1))) || ((((!((cljs.core.some(new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870),shape_fills) == null)))) || ((!((cljs.core.some(new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),shape_fills) == null)))))))))));
var props__$1 = ((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?props:(((((!((cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hidden","hidden",-312506092),shape_shadow)) == null)))) || ((((!((shape_blur == null)))) && ((!(new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(shape_blur))))))))?app.util.object.set_BANG_(props,"filter",""+"url(#filter-"+(render_id ?? "")+")"):props));
if(((cljs.core.contains_QMARK_(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772))) && (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"svg-raw","svg-raw",-594329202),shape_type)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),shape_type)))) && (cljs.core.empty_QMARK_(shape_fills)))))){
var wstyle_54141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"wrapper-styles","wrapper-styles",484780849));
var fill_54142 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(wstyle_54141,"fill");
var fill_54143__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(fill_54142,"#000000");
app.util.object.set_BANG_(style,"fill",fill_54143__$1);
} else {
if(url_fill_QMARK_){
app.util.object.unset_BANG_(style,"fill");

app.util.object.unset_BANG_(style,"fillOpacity");

app.util.object.set_BANG_(props__$1,"fill",""+"url(#fill-"+(position ?? "")+"-"+(render_id ?? "")+")");
} else {
if((((!((svg_styles == null)))) && (app.util.object.contains_QMARK_(svg_styles,"fill")))){
var fill_54144 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(svg_styles,"fill");
var opacity_54145 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(svg_styles,"fillOpacity");
if((!((fill_54144 == null)))){
app.util.object.set_BANG_(style,"fill",fill_54144);
} else {
}

if((!((opacity_54145 == null)))){
app.util.object.set_BANG_(style,"fillOpacity",opacity_54145);
} else {
}
} else {
if((((!((svg_attrs == null)))) && (cljs.core.empty_QMARK_(shape_fills)))){
var fill_54148 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(svg_attrs,"fill");
var opacity_54149 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(svg_attrs,"fillOpacity");
if((!((fill_54148 == null)))){
app.util.object.set_BANG_(style,"fill",fill_54148);
} else {
}

if((!((opacity_54149 == null)))){
app.util.object.set_BANG_(style,"fillOpacity",opacity_54149);
} else {
}
} else {
if(app.common.data.not_empty_QMARK_(shape_fills)){
var fill_54155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shape_fills,(0));
var svg_fill_54156 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(svg_attrs,"fill");
var fill_default_54157 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(svg_fill_54156,"none");
app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(style,app.main.ui.shapes.attrs.get_fill_style.cljs$core$IFn$_invoke$arity$5(fill_54155,render_id,(0),shape_type,fill_default_54157));
} else {
if(((app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core.empty_QMARK_(shape_fills)))){
app.util.object.set_BANG_(style,"fill","none");
} else {
}
}
}
}
}
}

return app.util.object.set_BANG_(app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(props__$1,svg_attrs),"style",style);
}));

(app.main.ui.shapes.attrs.add_fill_props_BANG_.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=app.main.ui.shapes.attrs.js.map
