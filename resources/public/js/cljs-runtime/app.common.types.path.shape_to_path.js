import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.common.js";
import "./app.common.geom.shapes.corners.js";
import "./app.common.types.path.bool.js";
import "./app.common.types.path.helpers.js";
import "./app.common.types.path.impl.js";
import "./app.common.types.path.segment.js";
import "./app.common.types.shape.radius.js";
goog.provide('app.common.types.path.shape_to_path');
app.common.types.path.shape_to_path.bezier_circle_c = 0.551915024494;
app.common.types.path.shape_to_path.dissoc_attrs = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563),new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"r4","r4",1134323163),new cljs.core.Keyword(null,"metadata","metadata",1799301597)], null);
app.common.types.path.shape_to_path.without_position_attrs = (function app$common$types$path$shape_to_path$without_position_attrs(shape){
return app.common.data.without_keys(shape,app.common.types.path.shape_to_path.dissoc_attrs);
});
/**
 * Creates a curve corner for border radius
 */
app.common.types.path.shape_to_path.make_corner_arc = (function app$common$types$path$shape_to_path$make_corner_arc(from,to,corner,radius){
var x = (function (){var G__50158 = corner;
var G__50158__$1 = (((G__50158 instanceof cljs.core.Keyword))?G__50158.fqn:null);
switch (G__50158__$1) {
case "top-left":
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(from);

break;
case "top-right":
return (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(from) - radius);

break;
case "bottom-right":
return (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to) - radius);

break;
case "bottom-left":
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50158__$1)].join('')));

}
})();
var y = (function (){var G__50159 = corner;
var G__50159__$1 = (((G__50159 instanceof cljs.core.Keyword))?G__50159.fqn:null);
switch (G__50159__$1) {
case "top-left":
return (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from) - radius);

break;
case "top-right":
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from);

break;
case "bottom-right":
return (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to) - ((2) * radius));

break;
case "bottom-left":
return (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to) - radius);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50159__$1)].join('')));

}
})();
var width = (radius * (2));
var height = (radius * (2));
var c = 0.551915024494;
var c1x = (x + ((width / (2)) * ((1) - c)));
var c2x = (x + ((width / (2)) * ((1) + c)));
var c1y = (y + ((height / (2)) * ((1) - c)));
var c2y = (y + ((height / (2)) * ((1) + c)));
var h1 = (function (){var G__50161 = corner;
var G__50161__$1 = (((G__50161 instanceof cljs.core.Keyword))?G__50161.fqn:null);
switch (G__50161__$1) {
case "top-left":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(from,new cljs.core.Keyword(null,"y","y",-1757859776),c1y);

break;
case "top-right":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(from,new cljs.core.Keyword(null,"x","x",2099068185),c2x);

break;
case "bottom-right":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(from,new cljs.core.Keyword(null,"y","y",-1757859776),c2y);

break;
case "bottom-left":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(from,new cljs.core.Keyword(null,"x","x",2099068185),c1x);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50161__$1)].join('')));

}
})();
var h2 = (function (){var G__50162 = corner;
var G__50162__$1 = (((G__50162 instanceof cljs.core.Keyword))?G__50162.fqn:null);
switch (G__50162__$1) {
case "top-left":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(to,new cljs.core.Keyword(null,"x","x",2099068185),c1x);

break;
case "top-right":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(to,new cljs.core.Keyword(null,"y","y",-1757859776),c1y);

break;
case "bottom-right":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(to,new cljs.core.Keyword(null,"x","x",2099068185),c2x);

break;
case "bottom-left":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(to,new cljs.core.Keyword(null,"y","y",-1757859776),c2y);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50162__$1)].join('')));

}
})();
return app.common.types.path.helpers.make_curve_to(to,h1,h2);
});
/**
 * Creates the bezier curves to approximate a circle shape
 */
app.common.types.path.shape_to_path.circle__GT_path = (function app$common$types$path$shape_to_path$circle__GT_path(p__50163){
var map__50164 = p__50163;
var map__50164__$1 = cljs.core.__destructure_map(map__50164);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50164__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50164__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50164__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50164__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var mx = (x + (width / (2)));
var my = (y + (height / (2)));
var ex = (x + width);
var ey = (y + height);
var p1 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(mx,y);
var p2 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(ex,my);
var p3 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(mx,ey);
var p4 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,my);
var c = 0.551915024494;
var c1x = (x + ((width / (2)) * ((1) - c)));
var c2x = (x + ((width / (2)) * ((1) + c)));
var c1y = (y + ((height / (2)) * ((1) - c)));
var c2y = (y + ((height / (2)) * ((1) + c)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.path.helpers.make_move_to(p1),app.common.types.path.helpers.make_curve_to(p2,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1,new cljs.core.Keyword(null,"x","x",2099068185),c2x),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,new cljs.core.Keyword(null,"y","y",-1757859776),c1y)),app.common.types.path.helpers.make_curve_to(p3,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,new cljs.core.Keyword(null,"y","y",-1757859776),c2y),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p3,new cljs.core.Keyword(null,"x","x",2099068185),c2x)),app.common.types.path.helpers.make_curve_to(p4,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p3,new cljs.core.Keyword(null,"x","x",2099068185),c1x),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p4,new cljs.core.Keyword(null,"y","y",-1757859776),c2y)),app.common.types.path.helpers.make_curve_to(p1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p4,new cljs.core.Keyword(null,"y","y",-1757859776),c1y),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1,new cljs.core.Keyword(null,"x","x",2099068185),c1x))], null);
});
app.common.types.path.shape_to_path.draw_rounded_rect_path = (function app$common$types$path$shape_to_path$draw_rounded_rect_path(var_args){
var G__50180 = arguments.length;
switch (G__50180) {
case 5:
return app.common.types.path.shape_to_path.draw_rounded_rect_path.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 8:
return app.common.types.path.shape_to_path.draw_rounded_rect_path.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.path.shape_to_path.draw_rounded_rect_path.cljs$core$IFn$_invoke$arity$5 = (function (x,y,width,height,r){
return app.common.types.path.shape_to_path.draw_rounded_rect_path.cljs$core$IFn$_invoke$arity$8(x,y,width,height,r,r,r,r);
}));

(app.common.types.path.shape_to_path.draw_rounded_rect_path.cljs$core$IFn$_invoke$arity$8 = (function (x,y,width,height,r1,r2,r3,r4){
var p1 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,(y + r1));
var p2 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + r1),y);
var p3 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(((width + x) + (- r2)),y);
var p4 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((width + x),(y + r2));
var p5 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((width + x),((height + y) + (- r3)));
var p6 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(((width + x) + (- r3)),(height + y));
var p7 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + r4),(height + y));
var p8 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,((height + y) + (- r4)));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__50184 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__50185 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__50186 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__50187 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,app.common.types.path.helpers.make_move_to(p1));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1,p2)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__50187,app.common.types.path.shape_to_path.make_corner_arc(p1,p2,new cljs.core.Keyword(null,"top-left","top-left",-1396159636),r1));
} else {
return G__50187;
}
})(),app.common.types.path.helpers.make_line_to(p3));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p3,p4)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__50186,app.common.types.path.shape_to_path.make_corner_arc(p3,p4,new cljs.core.Keyword(null,"top-right","top-right",284698505),r2));
} else {
return G__50186;
}
})(),app.common.types.path.helpers.make_line_to(p5));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p5,p6)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__50185,app.common.types.path.shape_to_path.make_corner_arc(p5,p6,new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646),r3));
} else {
return G__50185;
}
})(),app.common.types.path.helpers.make_line_to(p7));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p7,p8)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__50184,app.common.types.path.shape_to_path.make_corner_arc(p7,p8,new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488),r4));
} else {
return G__50184;
}
})(),app.common.types.path.helpers.make_line_to(p1));
}));

(app.common.types.path.shape_to_path.draw_rounded_rect_path.cljs$lang$maxFixedArity = 8);

/**
 * Creates a bezier curve that approximates a rounded corner rectangle
 */
app.common.types.path.shape_to_path.rect__GT_path = (function app$common$types$path$shape_to_path$rect__GT_path(p__50190){
var map__50191 = p__50190;
var map__50191__$1 = cljs.core.__destructure_map(map__50191);
var shape = map__50191__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50191__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50191__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50191__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50191__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var G__50192 = app.common.types.shape.radius.radius_mode(shape);
var G__50192__$1 = (((G__50192 instanceof cljs.core.Keyword))?G__50192.fqn:null);
switch (G__50192__$1) {
case "radius-1":
var radius = app.common.geom.shapes.corners.shape_corners_1(shape);
return app.common.types.path.shape_to_path.draw_rounded_rect_path.cljs$core$IFn$_invoke$arity$5(x,y,width,height,radius);

break;
case "radius-4":
var vec__50193 = app.common.geom.shapes.corners.shape_corners_4(shape);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50193,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50193,(1),null);
var r3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50193,(2),null);
var r4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50193,(3),null);
return app.common.types.path.shape_to_path.draw_rounded_rect_path.cljs$core$IFn$_invoke$arity$8(x,y,width,height,r1,r2,r3,r4);

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
});
/**
 * Fix an issue with the simplify commands not changing the first relative
 */
app.common.types.path.shape_to_path.fix_first_relative = (function app$common$types$path$shape_to_path$fix_first_relative(content){
var head = cljs.core.first(content);
var G__50197 = content;
if(cljs.core.truth_((function (){var and__5023__auto__ = head;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"relative","relative",22796862).cljs$core$IFn$_invoke$arity$1(head);
} else {
return and__5023__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__50197,(0),cljs.core.assoc,new cljs.core.Keyword(null,"relative","relative",22796862),false);
} else {
return G__50197;
}
});
app.common.types.path.shape_to_path.group_to_path = (function app$common$types$path$shape_to_path$group_to_path(group,objects){
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__50198_SHARP_){
return (app.common.types.path.shape_to_path.convert_to_path.cljs$core$IFn$_invoke$arity$2 ? app.common.types.path.shape_to_path.convert_to_path.cljs$core$IFn$_invoke$arity$2(p1__50198_SHARP_,objects) : app.common.types.path.shape_to_path.convert_to_path.call(null,p1__50198_SHARP_,objects));
})));
var child_as_paths = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xform,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(group));
var head = cljs.core.peek(child_as_paths);
var head_data = cljs.core.select_keys(head,app.common.types.path.bool.style_properties);
var content = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(app.common.files.helpers.path_shape_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.vec),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(app.common.types.path.shape_to_path.fix_first_relative)], 0)),child_as_paths);
return app.common.data.without_keys(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(group,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"path","path",-188191168)),new cljs.core.Keyword(null,"content","content",15833224),app.common.types.path.impl.path_data(content)),head_data], 0)),app.common.types.path.shape_to_path.dissoc_attrs);
});
app.common.types.path.shape_to_path.bool_to_path = (function app$common$types$path$shape_to_path$bool_to_path(shape,objects){
var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50199_SHARP_){
return (app.common.types.path.shape_to_path.convert_to_path.cljs$core$IFn$_invoke$arity$2 ? app.common.types.path.shape_to_path.convert_to_path.cljs$core$IFn$_invoke$arity$2(p1__50199_SHARP_,objects) : app.common.types.path.shape_to_path.convert_to_path.call(null,p1__50199_SHARP_,objects));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape)));
var bool_type = new cljs.core.Keyword(null,"bool-type","bool-type",-1094918459).cljs$core$IFn$_invoke$arity$1(shape);
var content = app.common.types.path.impl.path_data(app.common.types.path.bool.calculate_content(bool_type,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224),children)));
return app.common.data.without_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"path","path",-188191168)),new cljs.core.Keyword(null,"content","content",15833224),content),new cljs.core.Keyword(null,"bool-type","bool-type",-1094918459)),app.common.types.path.shape_to_path.dissoc_attrs);
});
/**
 * Transforms the given shape to a path shape
 */
app.common.types.path.shape_to_path.convert_to_path = (function app$common$types$path$shape_to_path$convert_to_path(shape,objects){
if(cljs.core.map_QMARK_(objects)){
} else {
throw (new Error("Assert failed: (map? objects)"));
}

var type = (shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)));
var G__50200 = type;
var G__50200__$1 = (((G__50200 instanceof cljs.core.Keyword))?G__50200.fqn:null);
switch (G__50200__$1) {
case "group":
case "frame":
return app.common.types.path.shape_to_path.group_to_path(shape,objects);

break;
case "bool":
return app.common.types.path.shape_to_path.bool_to_path(shape,objects);

break;
case "rect":
case "circle":
case "image":
case "text":
var content = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"circle","circle",1903212362)))?app.common.types.path.shape_to_path.circle__GT_path(shape):app.common.types.path.shape_to_path.rect__GT_path(shape));
var content__$1 = app.common.types.path.impl.from_plain(content);
var transform = (function (){var G__50201 = new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$2(shape,app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0());
var G__50201__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"flip-x","flip-x",891276861).cljs$core$IFn$_invoke$arity$1(shape))?app.common.geom.matrix.scale.cljs$core$IFn$_invoke$arity$2(G__50201,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((-1),(1))):G__50201);
if(cljs.core.truth_(new cljs.core.Keyword(null,"flip-y","flip-y",935998815).cljs$core$IFn$_invoke$arity$1(shape))){
return app.common.geom.matrix.scale.cljs$core$IFn$_invoke$arity$2(G__50201__$1,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((1),(-1)));
} else {
return G__50201__$1;
}
})();
var content__$2 = (function (){var G__50202 = content__$1;
if((!((transform == null)))){
return app.common.types.path.segment.transform_content(G__50202,app.common.geom.matrix.transform_in(app.common.geom.shapes.common.shape__GT_center(shape),transform));
} else {
return G__50202;
}
})();
return app.common.data.without_keys((function (){var G__50203 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"path","path",-188191168)),new cljs.core.Keyword(null,"content","content",15833224),content__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"image","image",-58725096),type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50203,new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"metadata","metadata",1799301597)));
} else {
return G__50203;
}
})(),app.common.types.path.shape_to_path.dissoc_attrs);

break;
default:
return shape;

}
});

//# sourceMappingURL=app.common.types.path.shape_to_path.js.map
