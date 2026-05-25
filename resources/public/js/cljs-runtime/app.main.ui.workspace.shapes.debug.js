import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.shapes.text.js";
import "./app.common.math.js";
import "./app.common.types.path.js";
import "./app.common.types.path.bool.js";
import "./app.common.types.path.helpers.js";
import "./app.common.types.path.subpath.js";
import "./app.main.refs.js";
import "./app.util.color.js";
import "./app.util.debug.js";
import "./app.util.dom.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.shapes.debug');
app.main.ui.workspace.shapes.debug.debug_bounding_boxes = (function app$main$ui$workspace$shapes$debug$debug_bounding_boxes(props_73461){
var map__73462 = rumext.v2.util.wrap_props(props_73461);
var map__73462__$1 = cljs.core.__destructure_map(map__73462);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73462__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var points = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__73460_SHARP_){
return ""+((p1__73460_SHARP_?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__73460_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185))) ?? "")+","+((p1__73460_SHARP_?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__73460_SHARP_,new cljs.core.Keyword(null,"y","y",-1757859776))) ?? "");
}),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape)));
var color = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$1((function (){
return app.util.color.random_color();
}));
var sr = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape);
return rumext.v2.jsxs("g",{'className':"debug-bounding-boxes",'children':[rumext.v2.jsx("rect",{'transform':app.common.geom.shapes.transform_str.cljs$core$IFn$_invoke$arity$1(shape),'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(sr),'y':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(sr),'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(sr),'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(sr),'fill':color,'opacity':0.2}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p){
out_arr__46744__auto__.push(rumext.v2.jsx("circle",{'cx':(p?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"x","x",2099068185))),'cy':(p?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"y","y",-1757859776))),'r':(2),'fill':color}));

return out_arr__46744__auto__;
}),[],new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape)),rumext.v2.jsx("polygon",{'points':points,'strokeWidth':(1),'stroke':color})]});
});

(app.main.ui.workspace.shapes.debug.debug_bounding_boxes.displayName = "debug-bounding-boxes");

app.main.ui.workspace.shapes.debug.debug_text_bounds = (function app$main$ui$workspace$shapes$debug$debug_text_bounds(props_73464){
var props = props_73464;
var shape = (props["shape"]);
var zoom = rumext.v2.deref(app.main.refs.selected_zoom);
var bounding_box = app.common.geom.shapes.text.shape__GT_rect(shape);
var ctx = document.createElement("canvas").getContext("2d");
return rumext.v2.jsxs("g",{'transform':app.common.geom.shapes.transform_str.cljs$core$IFn$_invoke$arity$1(shape),'children':[rumext.v2.jsx("rect",{'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounding_box),'y':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounding_box),'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bounding_box),'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bounding_box),'style':{'fill':"none",'stroke':"orange",'strokeWidth':((1) / zoom)}}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__73465){
var vec__73466 = p__73465;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73466,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73466,(1),null);
out_arr__46744__auto__.push((function (){var map__73469 = data;
var map__73469__$1 = cljs.core.__destructure_map(map__73469);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73469__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73469__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73469__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73469__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var res = app.util.dom.measure_text(ctx,new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(data));
return rumext.v2.jsxs("g",{'children':[rumext.v2.jsx("rect",{'x':x,'y':(y - height),'width':width,'height':height,'style':{'fill':"none",'stroke':"red",'strokeWidth':((1) / zoom)}}),rumext.v2.jsx("line",{'x1':app.common.math.round.cljs$core$IFn$_invoke$arity$1(x),'y1':app.common.math.round.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(data) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(data))),'x2':app.common.math.round.cljs$core$IFn$_invoke$arity$1((x + width)),'y2':app.common.math.round.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(data) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(data))),'style':{'stroke':"blue",'strokeWidth':((1) / zoom)}}),rumext.v2.jsx("line",{'x1':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(data),'y1':(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(data) - new cljs.core.Keyword(null,"descent","descent",1331783219).cljs$core$IFn$_invoke$arity$1(res)),'x2':(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(data) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(data)),'y2':(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(data) - new cljs.core.Keyword(null,"descent","descent",1331783219).cljs$core$IFn$_invoke$arity$1(res)),'style':{'stroke':"green",'strokeWidth':((2) / zoom)}})]},""+(index ?? ""));
})());

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"position-data","position-data",-499622376).cljs$core$IFn$_invoke$arity$1(shape)))]});
});

(app.main.ui.workspace.shapes.debug.debug_text_bounds.displayName = "debug-text-bounds");

app.main.ui.workspace.shapes.debug.debug_bool_shape = (function app$main$ui$workspace$shapes$debug$debug_bool_shape(props_73470){
var shape = props_73470.shape;
var objects = rumext.v2.deref(app.main.refs.workspace_page_objects);
var zoom = rumext.v2.deref(app.main.refs.selected_zoom);
var radius = ((3) / zoom);
var c1 = app.common.types.path.convert_to_path.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.first(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape))),objects);
var c2 = app.common.types.path.convert_to_path.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.second(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape))),objects);
var content_a = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(c1);
var content_b = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(c2);
var bool_type = new cljs.core.Keyword(null,"bool-type","bool-type",-1094918459).cljs$core$IFn$_invoke$arity$1(shape);
var should_reverse_QMARK_ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),bool_type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.common.types.path.subpath.clockwise_QMARK_(content_b),app.common.types.path.subpath.clockwise_QMARK_(content_a))));
var content_a__$1 = app.common.types.path.bool.add_previous.cljs$core$IFn$_invoke$arity$1(app.common.types.path.bool.close_paths(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(c1)));
var content_b__$1 = app.common.types.path.bool.add_previous.cljs$core$IFn$_invoke$arity$1((function (){var G__73474 = app.common.types.path.bool.close_paths(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(c2));
if(should_reverse_QMARK_){
return app.common.types.path.subpath.reverse_content(G__73474);
} else {
return G__73474;
}
})());
var sr_a = app.common.types.path.calc_selrect(content_a__$1);
var sr_b = app.common.types.path.calc_selrect(content_b__$1);
var vec__73471 = app.common.types.path.bool.content_intersect_split(content_a__$1,content_b__$1,sr_a,sr_b);
var content_a_split = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73471,(0),null);
var content_b_split = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73471,(1),null);
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__73475){
var vec__73476 = p__73475;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73476,(0),null);
var segment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73476,(1),null);
out_arr__46744__auto__.push((function (){var p1 = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(segment);
var p2 = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(segment);
var hp = (function (){var G__73479 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(segment);
var G__73479__$1 = (((G__73479 instanceof cljs.core.Keyword))?G__73479.fqn:null);
switch (G__73479__$1) {
case "line-to":
return app.common.types.path.helpers.line_values(app.common.types.path.helpers.command__GT_line.cljs$core$IFn$_invoke$arity$1(segment),0.5);

break;
case "curve-to":
return app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$2(app.common.types.path.helpers.command__GT_bezier.cljs$core$IFn$_invoke$arity$1(segment),0.5);

break;
default:
return null;

}
})();
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(cljs.core.truth_(p1)?rumext.v2.jsx("circle",{'data-i':i,'cx':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1),'cy':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1),'r':radius,'fill':"red"},""+"c11-"+(i ?? "")):null),rumext.v2.jsx("circle",{'data-i':i,'cx':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p2),'cy':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p2),'r':radius,'fill':"red"},""+"c12-"+(i ?? "")),(cljs.core.truth_(hp)?rumext.v2.jsx("circle",{'data-i':i,'cx':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(hp),'cy':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(hp),'r':radius,'fill':"orange"},""+"c13-"+(i ?? "")):null)]});
})());

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(content_a_split)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__73480){
var vec__73481 = p__73480;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73481,(0),null);
var segment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73481,(1),null);
out_arr__46744__auto__.push((function (){var p1 = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(segment);
var p2 = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(segment);
var hp = (function (){var G__73484 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(segment);
var G__73484__$1 = (((G__73484 instanceof cljs.core.Keyword))?G__73484.fqn:null);
switch (G__73484__$1) {
case "line-to":
return app.common.types.path.helpers.line_values(app.common.types.path.helpers.command__GT_line.cljs$core$IFn$_invoke$arity$1(segment),0.5);

break;
case "curve-to":
return app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$2(app.common.types.path.helpers.command__GT_bezier.cljs$core$IFn$_invoke$arity$1(segment),0.5);

break;
default:
return null;

}
})();
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(cljs.core.truth_(p1)?rumext.v2.jsx("circle",{'cx':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1),'cy':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1),'r':radius,'fill':"blue"},""+"c21-"+(i ?? "")):null),rumext.v2.jsx("circle",{'cx':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p2),'cy':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p2),'r':radius,'fill':"blue"},""+"c22-"+(i ?? "")),(cljs.core.truth_(hp)?rumext.v2.jsx("circle",{'data-i':i,'cx':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(hp),'cy':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(hp),'r':radius,'fill':"green"},""+"c13-"+(i ?? "")):null)]});
})());

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(content_b_split))]});
});

(app.main.ui.workspace.shapes.debug.debug_bool_shape.displayName = "debug-bool-shape");

app.main.ui.workspace.shapes.debug.shape_debug = (function app$main$ui$workspace$shapes$debug$shape_debug(props_73485){
var map__73486 = rumext.v2.util.wrap_props(props_73485);
var map__73486__$1 = cljs.core.__destructure_map(map__73486);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73486__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"bounding-boxes","bounding-boxes",-542662202)))?rumext.v2.jsx(app.main.ui.workspace.shapes.debug.debug_bounding_boxes,{'shape':shape}):null),((((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"bool-shapes","bool-shapes",-1080624236))) && (app.common.files.helpers.bool_shape_QMARK_(shape))))?rumext.v2.jsx(app.main.ui.workspace.shapes.debug.debug_bool_shape,{'shape':shape}):null),((((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"text-outline","text-outline",-2026960525))) && (((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core.seq(new cljs.core.Keyword(null,"position-data","position-data",-499622376).cljs$core$IFn$_invoke$arity$1(shape)))))))?rumext.v2.jsx(app.main.ui.workspace.shapes.debug.debug_text_bounds,{'shape':shape}):null)]});
});

(app.main.ui.workspace.shapes.debug.shape_debug.displayName = "shape-debug");


//# sourceMappingURL=app.main.ui.workspace.shapes.debug.js.map
