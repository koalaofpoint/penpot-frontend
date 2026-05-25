import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.shapes.bounds.js";
import "./app.common.geom.shapes.text.js";
import "./app.common.types.path.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.ui.context.js";
import "./app.main.ui.shapes.attrs.js";
import "./app.main.ui.shapes.embed.js";
import "./app.main.ui.shapes.gradients.js";
import "./app.util.object.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.custom_stroke');
app.main.ui.shapes.custom_stroke.inner_stroke_clip_path = (function app$main$ui$shapes$custom_stroke$inner_stroke_clip_path(props_54232){
var index = props_54232.index;
var render_id = (props_54232["render-id"]);
var shape = props_54232.shape;
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var suffix = (((!((index == null))))?""+"-"+(index ?? ""):"");
var clip_id = ""+"inner-stroke-"+(render_id ?? "")+"-"+(shape_id ?? "")+(suffix ?? "");
var href = ""+"#stroke-shape-"+(render_id ?? "")+"-"+(shape_id ?? "")+(suffix ?? "");
return rumext.v2.jsx("clipPath",{'id':clip_id,'children':rumext.v2.jsx("use",{'href':href})});
});

(app.main.ui.shapes.custom_stroke.inner_stroke_clip_path.displayName = "inner-stroke-clip-path");

app.main.ui.shapes.custom_stroke.outer_stroke_mask = (function app$main$ui$shapes$custom_stroke$outer_stroke_mask(props_54239){
var stroke = props_54239.stroke;
var index = props_54239.index;
var render_id = (props_54239["render-id"]);
var shape = props_54239.shape;
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var suffix = (((!((index == null))))?""+"-"+(index ?? ""):"");
var mask_id = ""+"outer-stroke-"+(render_id ?? "")+"-"+(shape_id ?? "")+(suffix ?? "");
var shape_id__$1 = ""+"stroke-shape-"+(render_id ?? "")+"-"+(shape_id ?? "")+(suffix ?? "");
var href = ""+"#"+(shape_id__$1 ?? "");
var stroke_width = (function (){var G__54241 = new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340).cljs$core$IFn$_invoke$arity$2(stroke,new cljs.core.Keyword(null,"center","center",-748944368));
var G__54241__$1 = (((G__54241 instanceof cljs.core.Keyword))?G__54241.fqn:null);
switch (G__54241__$1) {
case "center":
return (new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$2(stroke,(0)) / (2));

break;
case "outer":
return new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$2(stroke,(0));

break;
default:
return (0);

}
})();
var stroke_margin = app.common.geom.shapes.bounds.shape_stroke_margin(shape,stroke_width);
var selrect = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape)],(function (){
if(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return app.common.geom.shapes.text.shape__GT_rect(shape);
} else {
return app.common.geom.rect.points__GT_rect(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape));
}
}));
var x = ((selrect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x","x",2099068185))) - stroke_margin);
var y = ((selrect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y","y",-1757859776))) - stroke_margin);
var w = ((selrect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"width","width",-384071477))) + ((2) * stroke_margin));
var h = ((selrect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"height","height",1025178622))) + ((2) * stroke_margin));
return rumext.v2.jsxs("mask",{'id':mask_id,'x':x,'y':y,'width':w,'height':h,'maskUnits':"userSpaceOnUse",'children':[rumext.v2.jsx("use",{'href':href,'style':{'fill':"none",'stroke':"white",'strokeWidth':(stroke_width * (2))}}),rumext.v2.jsx("use",{'href':href,'style':{'fill':"black",'stroke':"none"}})]});
});

(app.main.ui.shapes.custom_stroke.outer_stroke_mask.displayName = "outer-stroke-mask");

app.main.ui.shapes.custom_stroke.cap_markers = (function app$main$ui$shapes$custom_stroke$cap_markers(props_54244){
var stroke = props_54244.stroke;
var index = props_54244.index;
var render_id = (props_54244["render-id"]);
var id_prefix = ""+"marker-"+(render_id ?? "");
var gradient = new cljs.core.Keyword(null,"stroke-color-gradient","stroke-color-gradient",-195812260).cljs$core$IFn$_invoke$arity$1(stroke);
var image = new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214).cljs$core$IFn$_invoke$arity$1(stroke);
var cap_start = new cljs.core.Keyword(null,"stroke-cap-start","stroke-cap-start",-2018645757).cljs$core$IFn$_invoke$arity$1(stroke);
var cap_end = new cljs.core.Keyword(null,"stroke-cap-end","stroke-cap-end",-411370737).cljs$core$IFn$_invoke$arity$1(stroke);
var color = (((!((gradient == null))))?""+"url(#stroke-color-gradient-"+(render_id ?? "")+"-"+(index ?? "")+")":(((!((image == null))))?""+"url(#stroke-fill-"+(render_id ?? "")+"-"+(index ?? "")+")":new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937).cljs$core$IFn$_invoke$arity$1(stroke)
));
var opacity = (((!((gradient == null))))?null:new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159).cljs$core$IFn$_invoke$arity$1(stroke));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cap_start,new cljs.core.Keyword(null,"line-arrow","line-arrow",-1440558012))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cap_end,new cljs.core.Keyword(null,"line-arrow","line-arrow",-1440558012)))))?rumext.v2.jsx("marker",{'refX':"2",'children':rumext.v2.jsx("path",{'d':"M 0.5 0.5 L 3 3 L 0.5 5.5 L 0 5 L 2 3 L 0 1 z"}),'orient':"auto-start-reverse",'id':""+(id_prefix ?? "")+"-line-arrow",'viewBox':"0 0 3 6",'fill':color,'refY':"3",'fillOpacity':opacity,'markerWidth':"8.5",'markerHeight':"8.5"}):null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cap_start,new cljs.core.Keyword(null,"triangle-arrow","triangle-arrow",270775124))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cap_end,new cljs.core.Keyword(null,"triangle-arrow","triangle-arrow",270775124)))))?rumext.v2.jsx("marker",{'refX':"2",'children':rumext.v2.jsx("path",{'d':"M 0 0 L 3 3 L 0 6 z"}),'orient':"auto-start-reverse",'id':""+(id_prefix ?? "")+"-triangle-arrow",'viewBox':"0 0 3 6",'fill':color,'refY':"3",'fillOpacity':opacity,'markerWidth':"8.5",'markerHeight':"8.5"}):null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cap_start,new cljs.core.Keyword(null,"square-marker","square-marker",-789240803))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cap_end,new cljs.core.Keyword(null,"square-marker","square-marker",-789240803)))))?rumext.v2.jsx("marker",{'refX':"3",'children':rumext.v2.jsx("rect",{'x':(0),'y':(0),'width':(6),'height':(6)}),'orient':"auto-start-reverse",'id':""+(id_prefix ?? "")+"-square-marker",'viewBox':"0 0 6 6",'fill':color,'refY':"3",'fillOpacity':opacity,'markerWidth':"4.2426",'markerHeight':"4.2426"}):null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cap_start,new cljs.core.Keyword(null,"circle-marker","circle-marker",-241178759))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cap_end,new cljs.core.Keyword(null,"circle-marker","circle-marker",-241178759)))))?rumext.v2.jsx("marker",{'refX':"3",'children':rumext.v2.jsx("circle",{'cx':"3",'cy':"3",'r':"3"}),'orient':"auto-start-reverse",'id':""+(id_prefix ?? "")+"-circle-marker",'viewBox':"0 0 6 6",'fill':color,'refY':"3",'fillOpacity':opacity,'markerWidth':"4",'markerHeight':"4"}):null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cap_start,new cljs.core.Keyword(null,"diamond-marker","diamond-marker",-496524178))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cap_end,new cljs.core.Keyword(null,"diamond-marker","diamond-marker",-496524178)))))?rumext.v2.jsx("marker",{'refX':"3",'children':rumext.v2.jsx("path",{'d':"M 3 0 L 6 3 L 3 6 L 0 3 z"}),'orient':"auto-start-reverse",'id':""+(id_prefix ?? "")+"-diamond-marker",'viewBox':"0 0 6 6",'fill':color,'refY':"3",'fillOpacity':opacity,'markerWidth':"6",'markerHeight':"6"}):null),((((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cap_start,new cljs.core.Keyword(null,"round","round",2009433328))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cap_end,new cljs.core.Keyword(null,"round","round",2009433328))))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cap_start,cap_end))))?rumext.v2.jsx("marker",{'refX':"3",'children':rumext.v2.jsx("path",{'d':"M 3 2.5 A 0.5 0.5 0 0 1 3 3.5 "}),'orient':"auto-start-reverse",'id':""+(id_prefix ?? "")+"-round",'viewBox':"0 0 6 6",'fill':color,'refY':"3",'fillOpacity':opacity,'markerWidth':"6",'markerHeight':"6"}):null),((((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cap_start,new cljs.core.Keyword(null,"square","square",812434677))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cap_end,new cljs.core.Keyword(null,"square","square",812434677))))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cap_start,cap_end))))?rumext.v2.jsx("marker",{'refX':"3",'children':rumext.v2.jsx("rect",{'x':(3),'y':2.5,'width':0.5,'height':(1)}),'orient':"auto-start-reverse",'id':""+(id_prefix ?? "")+"-square",'viewBox':"0 0 6 6",'fill':color,'refY':"3",'fillOpacity':opacity,'markerWidth':"6",'markerHeight':"6"}):null)]});
});

(app.main.ui.shapes.custom_stroke.cap_markers.displayName = "cap-markers");

app.main.ui.shapes.custom_stroke.stroke_defs = (function app$main$ui$shapes$custom_stroke$stroke_defs(props_54252){
var stroke = props_54252.stroke;
var index = props_54252.index;
var render_id = (props_54252["render-id"]);
var shape = props_54252.shape;
var open_path_QMARK_ = ((app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (app.common.types.path.shape_with_open_path_QMARK_(shape)));
var gradient = new cljs.core.Keyword(null,"stroke-color-gradient","stroke-color-gradient",-195812260).cljs$core$IFn$_invoke$arity$1(stroke);
var alignment = new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340).cljs$core$IFn$_invoke$arity$2(stroke,new cljs.core.Keyword(null,"center","center",-748944368));
var width = new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$2(stroke,(0));
var props = ({"id": ""+"stroke-color-gradient-"+(render_id ?? "")+"-"+(index ?? ""), "gradient": gradient, "shape": shape, "force-transform": app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)});
var stroke_image = new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214).cljs$core$IFn$_invoke$arity$1(stroke);
var uri = (cljs.core.truth_(stroke_image)?app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1(stroke_image):null);
var embed = app.main.ui.shapes.embed.use_data_uris(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri], null));
var stroke_width = (function (){var G__54255 = new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340).cljs$core$IFn$_invoke$arity$2(stroke,new cljs.core.Keyword(null,"center","center",-748944368));
var G__54255__$1 = (((G__54255 instanceof cljs.core.Keyword))?G__54255.fqn:null);
switch (G__54255__$1) {
case "center":
return (new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$2(stroke,(0)) / (2));

break;
case "outer":
return new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$2(stroke,(0));

break;
default:
return (0);

}
})();
var margin = app.common.geom.shapes.bounds.shape_stroke_margin(stroke,stroke_width);
var selrect = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape)],(function (){
if(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return app.common.geom.shapes.text.shape__GT_rect(shape);
} else {
return app.common.geom.rect.points__GT_rect(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape));
}
}));
var stroke_margin = (stroke_width + margin);
var w = ((selrect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"width","width",-384071477))) + ((2) * stroke_margin));
var h = ((selrect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"height","height",1025178622))) + ((2) * stroke_margin));
var image_props = ({"href": cljs.core.get.cljs$core$IFn$_invoke$arity$3(embed,uri,uri), "preserveAspectRatio": "xMidYMid slice", "width": (1), "height": (1), "id": ""+"stroke-image-"+(render_id ?? "")+"-"+(index ?? "")});
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(((!((gradient == null))))?(function (){var G__54265 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(gradient);
var G__54265__$1 = (((G__54265 instanceof cljs.core.Keyword))?G__54265.fqn:null);
switch (G__54265__$1) {
case "linear":
return rumext.v2.create_element(app.main.ui.shapes.gradients.linear_gradient,props);

break;
case "radial":
return rumext.v2.create_element(app.main.ui.shapes.gradients.radial_gradient,props);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54265__$1)].join('')));

}
})():null),(cljs.core.truth_(new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214).cljs$core$IFn$_invoke$arity$1(stroke))?rumext.v2.jsx("pattern",{'width':(w / (selrect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"width","width",-384071477)))),'height':(h / (selrect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"height","height",1025178622)))),'children':rumext.v2.create_element("image",image_props),'patternTransform':((app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?app.common.geom.shapes.transform_str.cljs$core$IFn$_invoke$arity$1(shape):null),'x':(- (stroke_margin / (selrect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"width","width",-384071477))))),'id':""+"stroke-fill-"+(render_id ?? "")+"-"+(index ?? ""),'viewBox':"0 0 1 1",'preserveAspectRatio':"xMidYMid slice",'y':(- (stroke_margin / (selrect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"height","height",1025178622))))),'patternContentUnits':"objectBoundingBox"}):null),(((((!(open_path_QMARK_))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inner","inner",-1383171215),alignment)) && ((width > (0)))))))?rumext.v2.jsx(app.main.ui.shapes.custom_stroke.inner_stroke_clip_path,{'shape':shape,'render-id':render_id,'index':index}):(((((!(open_path_QMARK_))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"outer","outer",-375185956),alignment)) && ((width > (0)))))))?rumext.v2.jsx(app.main.ui.shapes.custom_stroke.outer_stroke_mask,{'shape':shape,'stroke':stroke,'render-id':render_id,'index':index}):(((((!((new cljs.core.Keyword(null,"stroke-cap-start","stroke-cap-start",-2018645757).cljs$core$IFn$_invoke$arity$1(stroke) == null)))) || ((!((new cljs.core.Keyword(null,"stroke-cap-end","stroke-cap-end",-411370737).cljs$core$IFn$_invoke$arity$1(stroke) == null))))))?rumext.v2.jsx(app.main.ui.shapes.custom_stroke.cap_markers,{'stroke':stroke,'render-id':render_id,'index':index}):null)))]});
});

(app.main.ui.shapes.custom_stroke.stroke_defs.displayName = "stroke-defs");

app.main.ui.shapes.custom_stroke.outer_stroke = (function app$main$ui$shapes$custom_stroke$outer_stroke(props_54276){
var children = props_54276.children;
var stroke = props_54276.stroke;
var index = props_54276.index;
var shape = props_54276.shape;
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var render_id = rumext.v2.use_ctx(app.main.ui.context.render_id);
var props = app.util.object.get.cljs$core$IFn$_invoke$arity$2(children,"props");
var style = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"style");
var stroke_width = new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$2(stroke,(0));
var suffix = (((!((index == null))))?""+"-"+(index ?? ""):"");
var mask_id = ""+"outer-stroke-"+(render_id ?? "")+"-"+(shape_id ?? "")+(suffix ?? "");
var shape_id__$1 = ""+"stroke-shape-"+(render_id ?? "")+"-"+(shape_id ?? "")+(suffix ?? "");
var href = ""+"#"+(shape_id__$1 ?? "");
return rumext.v2.jsxs("g",{'className':"outer-stroke-shape",'children':[rumext.v2.jsxs("defs",{'children':[rumext.v2.jsx(app.main.ui.shapes.custom_stroke.stroke_defs,{'shape':shape,'stroke':stroke,'render-id':render_id,'index':index}),(function (){var type = app.util.object.get.cljs$core$IFn$_invoke$arity$2(children,"type");
var style__$1 = app.util.object.unset_BANG_(app.util.object.unset_BANG_(app.util.object.unset_BANG_(app.util.object.unset_BANG_(app.util.object.unset_BANG_(app.util.object.unset_BANG_(app.util.object.unset_BANG_(app.util.object.clone(style),"fill"),"fillOpacity"),"stroke"),"strokeWidth"),"strokeOpacity"),"strokeStyle"),"strokeDasharray");
var props__$1 = app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.clone(props),"id",shape_id__$1),"style",style__$1);
return rumext.v2.create_element(type,props__$1);
})()]}),rumext.v2.jsx("use",{'href':href,'mask':""+"url(#"+(mask_id ?? "")+")",'style':app.util.object.unset_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.clone(style),"strokeWidth",(stroke_width * (2))),"fill","none"),"fillOpacity")}),rumext.v2.jsx("use",{'href':href,'style':app.util.object.set_BANG_(app.util.object.clone(style),"stroke","none")})]});
});

(app.main.ui.shapes.custom_stroke.outer_stroke.displayName = "outer-stroke");

app.main.ui.shapes.custom_stroke.inner_stroke = (function app$main$ui$shapes$custom_stroke$inner_stroke(props_54318){
var props = props_54318;
var child = (props["children"]);
var shape = (props["shape"]);
var stroke = (props["stroke"]);
var index = (props["index"]);
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var render_id = rumext.v2.use_ctx(app.main.ui.context.render_id);
var type = app.util.object.get.cljs$core$IFn$_invoke$arity$2(child,"type");
var props__$1 = app.util.object.clone(app.util.object.get.cljs$core$IFn$_invoke$arity$2(child,"props"));
var style = app.util.object.clone(app.util.object.get.cljs$core$IFn$_invoke$arity$2(props__$1,"style"));
var transform = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props__$1,"transform");
var stroke_width = new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$2(stroke,(0));
var suffix = (((!((index == null))))?""+"-"+(index ?? ""):"");
var clip_id = ""+"inner-stroke-"+(render_id ?? "")+"-"+(shape_id ?? "")+(suffix ?? "");
var shape_id__$1 = ""+"stroke-shape-"+(render_id ?? "")+"-"+(shape_id ?? "")+(suffix ?? "");
var clip_path = ""+"url('#"+(clip_id ?? "")+"')";
var style__$1 = app.util.object.set_BANG_(style,"strokeWidth",(stroke_width * (2)));
var props__$2 = app.util.object.unset_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(props__$1,"id",""+(shape_id__$1 ?? "")),"style",style__$1),"transform");
return rumext.v2.jsxs("g",{'className':"inner-stroke-shape",'transform':transform,'children':[rumext.v2.jsxs("defs",{'children':[rumext.v2.jsx(app.main.ui.shapes.custom_stroke.stroke_defs,{'shape':shape,'stroke':stroke,'render-id':render_id,'index':index}),rumext.v2.create_element(type,props__$2)]}),rumext.v2.jsx("use",{'href':""+"#"+(shape_id__$1 ?? ""),'clipPath':clip_path})]});
});

(app.main.ui.shapes.custom_stroke.inner_stroke.displayName = "inner-stroke");

app.main.ui.shapes.custom_stroke.shape_custom_stroke = (function app$main$ui$shapes$custom_stroke$shape_custom_stroke(props_54322){
var props = props_54322;
var child = (props["children"]);
var shape = (props["shape"]);
var stroke = (props["stroke"]);
var index = (props["index"]);
var render_id = rumext.v2.use_ctx(app.main.ui.context.render_id);
var render_id__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((props["render-id"]),render_id);
var stroke_width = new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$2(stroke,(0));
var stroke_style = new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146).cljs$core$IFn$_invoke$arity$2(stroke,new cljs.core.Keyword(null,"none","none",1333468478));
var stroke_position = new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340).cljs$core$IFn$_invoke$arity$2(stroke,new cljs.core.Keyword(null,"center","center",-748944368));
var has_stroke_QMARK_ = (((stroke_width > (0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stroke_style,new cljs.core.Keyword(null,"none","none",1333468478))));
var closed_QMARK_ = (((!(app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))) || ((!(app.common.types.path.shape_with_open_path_QMARK_(shape)))));
var inner_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inner","inner",-1383171215),stroke_position);
var outer_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"outer","outer",-375185956),stroke_position);
if(((has_stroke_QMARK_) && (((inner_QMARK_) && (closed_QMARK_))))){
return rumext.v2.jsx(app.main.ui.shapes.custom_stroke.inner_stroke,{'shape':shape,'stroke':stroke,'index':index,'children':child});
} else {
if(((has_stroke_QMARK_) && (((outer_QMARK_) && (closed_QMARK_))))){
return rumext.v2.jsx(app.main.ui.shapes.custom_stroke.outer_stroke,{'shape':shape,'stroke':stroke,'index':index,'children':child});
} else {
return rumext.v2.jsxs("g",{'className':"stroke-shape",'children':[rumext.v2.jsx("defs",{'children':rumext.v2.jsx(app.main.ui.shapes.custom_stroke.stroke_defs,{'shape':shape,'stroke':stroke,'render-id':render_id__$1,'index':index})}),child]});

}
}
});

(app.main.ui.shapes.custom_stroke.shape_custom_stroke.displayName = "shape-custom-stroke");

app.main.ui.shapes.custom_stroke.build_fill_element = (function app$main$ui$shapes$custom_stroke$build_fill_element(shape,child,position,render_id){
var type = app.util.object.get.cljs$core$IFn$_invoke$arity$2(child,"type");
var props = app.util.object.clone(app.util.object.get.cljs$core$IFn$_invoke$arity$2(child,"props"));
var props__$1 = app.main.ui.shapes.attrs.add_fill_props_BANG_.cljs$core$IFn$_invoke$arity$4(props,shape,position,render_id);
return rumext.v2.create_element(type,props__$1);
});
app.main.ui.shapes.custom_stroke.build_stroke_element = (function app$main$ui$shapes$custom_stroke$build_stroke_element(child,value,position,render_id,open_path_QMARK_){
var props = app.util.object.get.cljs$core$IFn$_invoke$arity$2(child,"props");
var type = app.util.object.get.cljs$core$IFn$_invoke$arity$2(child,"type");
var style = app.main.ui.shapes.attrs.add_stroke_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.clone(app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"style")),"fill","none"),"fillOpacity","none"),value,render_id,position,open_path_QMARK_);
var style__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214).cljs$core$IFn$_invoke$arity$1(value))?app.util.object.set_BANG_(style,"stroke",""+"url(#stroke-fill-"+(render_id ?? "")+"-"+(position ?? "")+")"):style);
var props__$1 = app.util.object.set_BANG_(app.util.object.unset_BANG_(app.util.object.unset_BANG_(app.util.object.clone(props),"fill"),"fillOpacity"),"style",style__$1);
return rumext.v2.create_element(type,props__$1);
});
app.main.ui.shapes.custom_stroke.shape_fills = (function app$main$ui$shapes$custom_stroke$shape_fills(props_54331){
var props = props_54331;
var child = (props["children"]);
var shape = (props["shape"]);
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var position = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((props["position"]),(0));
var render_id = rumext.v2.use_ctx(app.main.ui.context.render_id);
var render_id__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((props["render-id"]),render_id);
return rumext.v2.jsx("g",{'className':"fills",'id':""+"fills-"+(shape_id ?? ""),'children':app.main.ui.shapes.custom_stroke.build_fill_element(shape,child,position,render_id__$1)});
});

(app.main.ui.shapes.custom_stroke.shape_fills.displayName = "shape-fills");

app.main.ui.shapes.custom_stroke.shape_strokes = (function app$main$ui$shapes$custom_stroke$shape_strokes(props_54332){
var props = props_54332;
var child = (props["children"]);
var shape = (props["shape"]);
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var render_id = rumext.v2.use_ctx(app.main.ui.context.render_id);
var render_id__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((props["render-id"]),render_id);
var strokes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"strokes","strokes",-1645650952));
var prefix = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(strokes)],(function (){
return ""+(app.common.uuid.next() ?? "");
}));
var stroke_id = ""+(""+"strokes-"+(prefix ?? "")+"-"+(shape_id ?? "") ?? "");
var shape_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"blur","blur",-453500461));
var shape_fills = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"fills","fills",902966780));
var shape_shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var shape_strokes__$1 = cljs.core.not_empty(strokes);
var svg_attrs = app.main.ui.shapes.attrs.get_svg_props(shape,render_id__$1);
var style = app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(app.util.object.clone(app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"style")),app.util.object.get.cljs$core$IFn$_invoke$arity$2(svg_attrs,"style"));
var props__$1 = {...svg_attrs, 'id':stroke_id,'className':"strokes",'style':style};
var open_path_QMARK_ = ((app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (app.common.types.path.shape_with_open_path_QMARK_(shape)));
if(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
} else {
if((((!((shape_blur == null)))) && ((!(new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(shape_blur)))))){
app.util.object.set_BANG_(props__$1,"filter",""+"url(#filter-blur-"+(render_id__$1 ?? "")+")");
} else {
}

if(((cljs.core.empty_QMARK_(shape_fills)) && ((!((cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hidden","hidden",-312506092),shape_shadow)) == null)))))){
app.util.object.set_BANG_(props__$1,"filter",""+"url(#filter-"+(render_id__$1 ?? "")+")");
} else {
}
}

if((!((shape_strokes__$1 == null)))){
return rumext.v2.create_element("g",props__$1,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__54334){
var vec__54335 = p__54334;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54335,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54335,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.shapes.custom_stroke.shape_custom_stroke,{'shape':shape,'stroke':value,'index':index,'children':app.main.ui.shapes.custom_stroke.build_stroke_element(child,value,index,render_id__$1,open_path_QMARK_)},""+(index ?? "")+"-"+(stroke_id ?? "")));

return out_arr__46744__auto__;
}),[],cljs.core.reverse(app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(shape_strokes__$1))));
} else {
return null;
}
});

(app.main.ui.shapes.custom_stroke.shape_strokes.displayName = "shape-strokes");

app.main.ui.shapes.custom_stroke.shape_custom_strokes = (function app$main$ui$shapes$custom_stroke$shape_custom_strokes(props_54338){
var props = props_54338;
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.create_element(app.main.ui.shapes.custom_stroke.shape_fills,props),rumext.v2.create_element(app.main.ui.shapes.custom_stroke.shape_strokes,props)]});
});

(app.main.ui.shapes.custom_stroke.shape_custom_strokes.displayName = "shape-custom-strokes");


//# sourceMappingURL=app.main.ui.shapes.custom_stroke.js.map
