import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.common.js";
import "./app.common.math.js";
import "./app.common.types.modifiers.js";
import "./app.common.types.path.js";
goog.provide('app.common.geom.shapes.transforms');
app.common.geom.shapes.transforms.valid_point_QMARK_ = (function app$common$geom$shapes$transforms$valid_point_QMARK_(o){
return ((app.common.geom.point.point_QMARK_(o)) && (app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$2((o?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(o,new cljs.core.Keyword(null,"x","x",2099068185))),(o?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(o,new cljs.core.Keyword(null,"y","y",-1757859776))))));
});
app.common.geom.shapes.transforms.move_selrect = (function app$common$geom$shapes$transforms$move_selrect(selrect,pt){
if((((!((selrect == null)))) && (app.common.geom.shapes.transforms.valid_point_QMARK_(pt)))){
var x = (selrect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (selrect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y","y",-1757859776)));
var w = (selrect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"width","width",-384071477)));
var h = (selrect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"height","height",1025178622)));
var dx = (pt?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"x","x",2099068185)));
var dy = (pt?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"y","y",-1757859776)));
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(((app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(x))?(dx + x):x),((app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(y))?(dy + y):y),w,h);
} else {
return selrect;
}
});
app.common.geom.shapes.transforms.move_points = (function app$common$geom$shapes$transforms$move_points(points,move_vec){
if(app.common.geom.shapes.transforms.valid_point_QMARK_(move_vec)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50243_SHARP_){
return app.common.geom.point.add(p1__50243_SHARP_,move_vec);
}),points);
} else {
return points;
}
});
app.common.geom.shapes.transforms.move_position_data = (function app$common$geom$shapes$transforms$move_position_data(position_data,delta){
if((!((position_data == null)))){
var dx = (delta?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(delta,new cljs.core.Keyword(null,"x","x",2099068185)));
var dy = (delta?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(delta,new cljs.core.Keyword(null,"y","y",-1757859776)));
if(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$2(dx,dy)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50244_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__50244_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,dx),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,dy);
}),position_data);
} else {
return position_data;
}
} else {
return null;
}
});
app.common.geom.shapes.transforms.transform_position_data = (function app$common$geom$shapes$transforms$transform_position_data(position_data,transform){
if((!((position_data == null)))){
var dx = (transform?.e?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(transform,new cljs.core.Keyword(null,"e","e",1381269198)));
var dy = (transform?.f?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(transform,new cljs.core.Keyword(null,"f","f",-1597136552)));
if(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$2(dx,dy)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50245_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__50245_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,dx),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,dy);
}),position_data);
} else {
return position_data;
}
} else {
return null;
}
});
/**
 * Move the shape relatively to its current
 *   position applying the provided delta.
 */
app.common.geom.shapes.transforms.move = (function app$common$geom$shapes$transforms$move(shape,point){
var type = (shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)));
var dx = (point?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.Keyword(null,"x","x",2099068185)));
var dy = (point?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.Keyword(null,"y","y",-1757859776)));
var dx__$1 = app.common.data.check_num.cljs$core$IFn$_invoke$arity$2(dx,(0));
var dy__$1 = app.common.data.check_num.cljs$core$IFn$_invoke$arity$2(dy,(0));
var mvec = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(dx__$1,dy__$1);
var G__50246 = app.common.data.update_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_when.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"selrect","selrect",1966287292),app.common.geom.shapes.transforms.move_selrect,mvec),new cljs.core.Keyword(null,"points","points",-1486596883),app.common.geom.shapes.transforms.move_points,mvec),new cljs.core.Keyword(null,"x","x",2099068185),app.common.data.safe_PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dx__$1], 0)),new cljs.core.Keyword(null,"y","y",-1757859776),app.common.data.safe_PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dy__$1], 0)),new cljs.core.Keyword(null,"position-data","position-data",-499622376),app.common.geom.shapes.transforms.move_position_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mvec], 0));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bool","bool",1444635321),type)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),type)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50246,new cljs.core.Keyword(null,"content","content",15833224),app.common.types.path.move_content,mvec);
} else {
return G__50246;
}
});
/**
 * Move the shape to the exactly specified position.
 */
app.common.geom.shapes.transforms.absolute_move = (function app$common$geom$shapes$transforms$absolute_move(shape,pos){
if(cljs.core.truth_(shape)){
var x = (pos?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pos,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (pos?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pos,new cljs.core.Keyword(null,"y","y",-1757859776)));
var sr = (shape?.selrect?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"selrect","selrect",1966287292)));
var px = (sr?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(sr,new cljs.core.Keyword(null,"x","x",2099068185)));
var py = (sr?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(sr,new cljs.core.Keyword(null,"y","y",-1757859776)));
var dx = (app.common.data.check_num.cljs$core$IFn$_invoke$arity$1(x) - px);
var dy = (app.common.data.check_num.cljs$core$IFn$_invoke$arity$1(y) - py);
return app.common.geom.shapes.transforms.move(shape,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(dx,dy));
} else {
return null;
}
});
/**
 * Returns a transformation matrix without changing the shape properties.
 *   The result should be used in a `transform` attribute in svg
 */
app.common.geom.shapes.transforms.transform_matrix = (function app$common$geom$shapes$transforms$transform_matrix(var_args){
var G__50248 = arguments.length;
switch (G__50248) {
case 1:
return app.common.geom.shapes.transforms.transform_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.geom.shapes.transforms.transform_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.geom.shapes.transforms.transform_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.transforms.transform_matrix.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return app.common.geom.shapes.transforms.transform_matrix.cljs$core$IFn$_invoke$arity$2(shape,null);
}));

(app.common.geom.shapes.transforms.transform_matrix.cljs$core$IFn$_invoke$arity$2 = (function (shape,params){
return app.common.geom.shapes.transforms.transform_matrix.cljs$core$IFn$_invoke$arity$3(shape,params,(function (){var or__5025__auto__ = app.common.geom.shapes.common.shape__GT_center(shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0));
}
})());
}));

(app.common.geom.shapes.transforms.transform_matrix.cljs$core$IFn$_invoke$arity$3 = (function (p__50249,p__50250,shape_center){
var map__50251 = p__50249;
var map__50251__$1 = cljs.core.__destructure_map(map__50251);
var shape = map__50251__$1;
var flip_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50251__$1,new cljs.core.Keyword(null,"flip-x","flip-x",891276861));
var flip_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50251__$1,new cljs.core.Keyword(null,"flip-y","flip-y",935998815));
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50251__$1,new cljs.core.Keyword(null,"transform","transform",1381301764));
var map__50252 = p__50250;
var map__50252__$1 = cljs.core.__destructure_map(map__50252);
var no_flip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50252__$1,new cljs.core.Keyword(null,"no-flip","no-flip",-318174213));
return app.common.geom.matrix.translate((function (){var G__50253 = (function (){var G__50254 = (function (){var G__50255 = app.common.geom.matrix.translate(app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0(),shape_center);
if((!((transform == null)))){
return app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$2(G__50255,transform);
} else {
return G__50255;
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = flip_x;
if(cljs.core.truth_(and__5023__auto__)){
return no_flip;
} else {
return and__5023__auto__;
}
})())){
return app.common.geom.matrix.scale.cljs$core$IFn$_invoke$arity$2(G__50254,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((-1),(1)));
} else {
return G__50254;
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = flip_y;
if(cljs.core.truth_(and__5023__auto__)){
return no_flip;
} else {
return and__5023__auto__;
}
})())){
return app.common.geom.matrix.scale.cljs$core$IFn$_invoke$arity$2(G__50253,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((1),(-1)));
} else {
return G__50253;
}
})(),app.common.geom.point.negate(shape_center));
}));

(app.common.geom.shapes.transforms.transform_matrix.cljs$lang$maxFixedArity = 3);

app.common.geom.shapes.transforms.inverse_transform_matrix = (function app$common$geom$shapes$transforms$inverse_transform_matrix(var_args){
var G__50257 = arguments.length;
switch (G__50257) {
case 1:
return app.common.geom.shapes.transforms.inverse_transform_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.geom.shapes.transforms.inverse_transform_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.geom.shapes.transforms.inverse_transform_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.transforms.inverse_transform_matrix.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return app.common.geom.shapes.transforms.inverse_transform_matrix.cljs$core$IFn$_invoke$arity$2(shape,null);
}));

(app.common.geom.shapes.transforms.inverse_transform_matrix.cljs$core$IFn$_invoke$arity$2 = (function (shape,params){
return app.common.geom.shapes.transforms.inverse_transform_matrix.cljs$core$IFn$_invoke$arity$3(shape,params,(function (){var or__5025__auto__ = app.common.geom.shapes.common.shape__GT_center(shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0));
}
})());
}));

(app.common.geom.shapes.transforms.inverse_transform_matrix.cljs$core$IFn$_invoke$arity$3 = (function (p__50258,p__50259,shape_center){
var map__50260 = p__50258;
var map__50260__$1 = cljs.core.__destructure_map(map__50260);
var shape = map__50260__$1;
var flip_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50260__$1,new cljs.core.Keyword(null,"flip-x","flip-x",891276861));
var flip_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50260__$1,new cljs.core.Keyword(null,"flip-y","flip-y",935998815));
var transform_inverse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50260__$1,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576));
var map__50261 = p__50259;
var map__50261__$1 = cljs.core.__destructure_map(map__50261);
var no_flip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50261__$1,new cljs.core.Keyword(null,"no-flip","no-flip",-318174213));
return app.common.geom.matrix.translate((function (){var G__50262 = (function (){var G__50263 = (function (){var G__50264 = app.common.geom.matrix.translate(app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0(),shape_center);
if(cljs.core.truth_((function (){var and__5023__auto__ = flip_x;
if(cljs.core.truth_(and__5023__auto__)){
return no_flip;
} else {
return and__5023__auto__;
}
})())){
return app.common.geom.matrix.scale.cljs$core$IFn$_invoke$arity$2(G__50264,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((-1),(1)));
} else {
return G__50264;
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = flip_y;
if(cljs.core.truth_(and__5023__auto__)){
return no_flip;
} else {
return and__5023__auto__;
}
})())){
return app.common.geom.matrix.scale.cljs$core$IFn$_invoke$arity$2(G__50263,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((1),(-1)));
} else {
return G__50263;
}
})();
if((!((transform_inverse == null)))){
return app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$2(G__50262,transform_inverse);
} else {
return G__50262;
}
})(),app.common.geom.point.negate(shape_center));
}));

(app.common.geom.shapes.transforms.inverse_transform_matrix.cljs$lang$maxFixedArity = 3);

app.common.geom.shapes.transforms.transform_str = (function app$common$geom$shapes$transforms$transform_str(var_args){
var G__50266 = arguments.length;
switch (G__50266) {
case 1:
return app.common.geom.shapes.transforms.transform_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.geom.shapes.transforms.transform_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.transforms.transform_str.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return app.common.geom.shapes.transforms.transform_str.cljs$core$IFn$_invoke$arity$2(shape,null);
}));

(app.common.geom.shapes.transforms.transform_str.cljs$core$IFn$_invoke$arity$2 = (function (p__50267,p__50268){
var map__50269 = p__50267;
var map__50269__$1 = cljs.core.__destructure_map(map__50269);
var shape = map__50269__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50269__$1,new cljs.core.Keyword(null,"transform","transform",1381301764));
var flip_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50269__$1,new cljs.core.Keyword(null,"flip-x","flip-x",891276861));
var flip_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50269__$1,new cljs.core.Keyword(null,"flip-y","flip-y",935998815));
var map__50270 = p__50268;
var map__50270__$1 = cljs.core.__destructure_map(map__50270);
var params = map__50270__$1;
var no_flip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50270__$1,new cljs.core.Keyword(null,"no-flip","no-flip",-318174213));
if(cljs.core.truth_((function (){var and__5023__auto__ = (!((shape == null)));
if(and__5023__auto__){
var or__5025__auto__ = (!((transform == null)));
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){var and__5023__auto____$1 = no_flip;
if(cljs.core.truth_(and__5023__auto____$1)){
return flip_x;
} else {
return and__5023__auto____$1;
}
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var and__5023__auto____$1 = no_flip;
if(cljs.core.truth_(and__5023__auto____$1)){
return flip_y;
} else {
return and__5023__auto____$1;
}
}
}
} else {
return and__5023__auto__;
}
})())){
return ""+(app.common.geom.shapes.transforms.transform_matrix.cljs$core$IFn$_invoke$arity$2(shape,params) ?? "");
} else {
return "";
}
}));

(app.common.geom.shapes.transforms.transform_str.cljs$lang$maxFixedArity = 2);

/**
 * Transform a rectangles and changes its attributes
 */
app.common.geom.shapes.transforms.transform_rect = (function app$common$geom$shapes$transforms$transform_rect(rect,matrix){
var points = app.common.geom.shapes.common.transform_points.cljs$core$IFn$_invoke$arity$2(app.common.geom.rect.rect__GT_points(rect),matrix);
return app.common.geom.rect.points__GT_rect(points);
});
app.common.geom.shapes.transforms.transform_points_matrix = (function app$common$geom$shapes$transforms$transform_points_matrix(selrect,p__50271){
var vec__50272 = p__50271;
var d1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50272,(0),null);
var d2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50272,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50272,(2),null);
var d4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50272,(3),null);
var x1 = app.common.math.round_to_zero((selrect?.x1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x1","x1",-1863922247))));
var y1 = app.common.math.round_to_zero((selrect?.y1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y1","y1",589123466))));
var x2 = app.common.math.round_to_zero((selrect?.x2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x2","x2",-1362513475))));
var y2 = app.common.math.round_to_zero((selrect?.y2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y2","y2",-718691301))));
var det = ((((y1 - y2) * x1) - ((y1 - y2) * x2)) + ((y1 - y1) * x1));
if((det === (0))){
return null;
} else {
var ma0 = app.common.math.round_to_zero((d1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(d1,new cljs.core.Keyword(null,"x","x",2099068185))));
var ma1 = app.common.math.round_to_zero((d2?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(d2,new cljs.core.Keyword(null,"x","x",2099068185))));
var ma2 = app.common.math.round_to_zero((d4?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(d4,new cljs.core.Keyword(null,"x","x",2099068185))));
var ma3 = app.common.math.round_to_zero((d1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(d1,new cljs.core.Keyword(null,"y","y",-1757859776))));
var ma4 = app.common.math.round_to_zero((d2?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(d2,new cljs.core.Keyword(null,"y","y",-1757859776))));
var ma5 = app.common.math.round_to_zero((d4?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(d4,new cljs.core.Keyword(null,"y","y",-1757859776))));
var mb0 = ((y1 - y2) / det);
var mb1 = ((x1 - x2) / det);
var mb2 = (((x2 * y2) - (x1 * y1)) / det);
var mb3 = ((y2 - y1) / det);
var mb4 = ((x1 - x1) / det);
var mb5 = (((x1 * y1) - (x1 * y2)) / det);
var mb6 = ((y1 - y1) / det);
var mb7 = ((x2 - x1) / det);
var mb8 = (((x1 * y1) - (x2 * y1)) / det);
return app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$6((((ma0 * mb0) + (ma1 * mb3)) + (ma2 * mb6)),(((ma3 * mb0) + (ma4 * mb3)) + (ma5 * mb6)),(((ma0 * mb1) + (ma1 * mb4)) + (ma2 * mb7)),(((ma3 * mb1) + (ma4 * mb4)) + (ma5 * mb7)),(((ma0 * mb2) + (ma1 * mb5)) + (ma2 * mb8)),(((ma3 * mb2) + (ma4 * mb5)) + (ma5 * mb8)));
}
});
app.common.geom.shapes.transforms.calculate_selrect = (function app$common$geom$shapes$transforms$calculate_selrect(points,center){
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,(0));
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,(1));
var p4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,(3));
var width = app.common.math.hypot(((p2?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"x","x",2099068185))) - (p1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"x","x",2099068185)))),((p2?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2,new cljs.core.Keyword(null,"y","y",-1757859776))) - (p1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"y","y",-1757859776)))));
var height = app.common.math.hypot(((p1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"x","x",2099068185))) - (p4?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p4,new cljs.core.Keyword(null,"x","x",2099068185)))),((p1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1,new cljs.core.Keyword(null,"y","y",-1757859776))) - (p4?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p4,new cljs.core.Keyword(null,"y","y",-1757859776)))));
return app.common.geom.rect.center__GT_rect.cljs$core$IFn$_invoke$arity$3(center,width,height);
});
app.common.geom.shapes.transforms.calculate_transform = (function app$common$geom$shapes$transforms$calculate_transform(points,center,selrect){
var transform = app.common.geom.shapes.transforms.transform_points_matrix(selrect,points);
var transform__$1 = (((!((transform == null))))?app.common.geom.matrix.multiply_BANG_(app.common.geom.matrix.multiply_BANG_(app.common.geom.matrix.translate_matrix_neg.cljs$core$IFn$_invoke$arity$1(center),transform),app.common.geom.matrix.translate_matrix.cljs$core$IFn$_invoke$arity$1(center)):null);
if(app.common.geom.matrix.matrix_QMARK_(transform__$1)){
if(app.common.geom.matrix.unit_QMARK_(transform__$1)){
return app.common.geom.matrix.base;
} else {
return transform__$1;
}
} else {
return null;
}
});
app.common.geom.shapes.transforms.calculate_geometry = (function app$common$geom$shapes$transforms$calculate_geometry(points){
var center = app.common.geom.shapes.common.points__GT_center(points);
var selrect = app.common.geom.shapes.transforms.calculate_selrect(points,center);
var transform = app.common.geom.shapes.transforms.calculate_transform(points,center,selrect);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selrect,transform,(((!((transform == null))))?app.common.geom.matrix.inverse(transform):null)], null);
});
/**
 * After some tranformations the flip-x/flip-y flags can change we need
 *   to check this before adjusting the selrect
 */
app.common.geom.shapes.transforms.adjust_shape_flips = (function app$common$geom$shapes$transforms$adjust_shape_flips(shape,points){
var points_SINGLEQUOTE_ = (shape?.points?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"points","points",-1486596883)));
var p0_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points_SINGLEQUOTE_,(0));
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,(0));
var xv1 = app.common.geom.point.to_vec(p0_SINGLEQUOTE_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points_SINGLEQUOTE_,(1)));
var xv2 = app.common.geom.point.to_vec(p0,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,(1)));
var dot_x = app.common.geom.point.dot(xv1,xv2);
var yv1 = app.common.geom.point.to_vec(p0_SINGLEQUOTE_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points_SINGLEQUOTE_,(3)));
var yv2 = app.common.geom.point.to_vec(p0,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,(3)));
var dot_y = app.common.geom.point.dot(yv1,yv2);
var G__50275 = shape;
var G__50275__$1 = (((dot_x < (0)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__50275,new cljs.core.Keyword(null,"flip-x","flip-x",891276861),cljs.core.not):G__50275);
var G__50275__$2 = (((dot_x < (0)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__50275__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core._):G__50275__$1);
var G__50275__$3 = (((dot_y < (0)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__50275__$2,new cljs.core.Keyword(null,"flip-y","flip-y",935998815),cljs.core.not):G__50275__$2);
if((dot_y < (0))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__50275__$3,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core._);
} else {
return G__50275__$3;
}
});
/**
 * Given a new set of points transformed, set up the rectangle so it keeps
 *   its properties. We adjust de x,y,width,height and create a custom transform
 */
app.common.geom.shapes.transforms.apply_transform_move = (function app$common$geom$shapes$transforms$apply_transform_move(shape,transform_mtx){
var type = (shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)));
var points = app.common.geom.shapes.common.transform_points.cljs$core$IFn$_invoke$arity$2((shape?.points?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"points","points",-1486596883))),transform_mtx);
var selrect = app.common.geom.shapes.common.transform_selrect((shape?.selrect?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"selrect","selrect",1966287292))),transform_mtx);
var shape__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"text","text",-1790561697)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"position-data","position-data",-499622376),app.common.geom.shapes.transforms.transform_position_data,transform_mtx):shape);
var shape__$2 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"path","path",-188191168))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"bool","bool",1444635321)))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape__$1,new cljs.core.Keyword(null,"content","content",15833224),app.common.types.path.transform_content,transform_mtx):cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shape__$1,new cljs.core.Keyword(null,"x","x",2099068185),(selrect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x","x",2099068185))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),(selrect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y","y",-1757859776))),new cljs.core.Keyword(null,"width","width",-384071477),(selrect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"width","width",-384071477))),new cljs.core.Keyword(null,"height","height",1025178622),(selrect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"height","height",1025178622)))], 0)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$2,new cljs.core.Keyword(null,"selrect","selrect",1966287292),selrect),new cljs.core.Keyword(null,"points","points",-1486596883),points);
});
/**
 * Given a new set of points transformed, set up the rectangle so it keeps
 *   its properties. We adjust de x,y,width,height and create a custom transform
 */
app.common.geom.shapes.transforms.apply_transform_generic = (function app$common$geom$shapes$transforms$apply_transform_generic(shape,transform_mtx){
var points = app.common.geom.shapes.common.transform_points.cljs$core$IFn$_invoke$arity$2((shape?.points?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"points","points",-1486596883))),transform_mtx);
var shape__$1 = app.common.geom.shapes.transforms.adjust_shape_flips(shape,points);
var center = app.common.geom.shapes.common.points__GT_center(points);
var selrect = app.common.geom.shapes.transforms.calculate_selrect(points,center);
var vec__50276 = (function (){var transform = app.common.geom.shapes.transforms.calculate_transform(points,center,selrect);
var inverse = (((!((transform == null))))?app.common.geom.matrix.inverse(transform):null);
if((((!((transform == null)))) && ((!((inverse == null)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [transform,inverse], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$2(shape__$1,app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0()),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$2(shape__$1,app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0())], null);
}
})();
var transform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50276,(0),null);
var inverse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50276,(1),null);
var type = (shape__$1?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"type","type",1174270348)));
var rotation = cljs.core.mod((app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(shape__$1),(0)) + app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"modifiers","modifiers",50378834)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644)),(0))),(360));
var shape__$2 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"path","path",-188191168))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"bool","bool",1444635321)))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape__$1,new cljs.core.Keyword(null,"content","content",15833224),app.common.types.path.transform_content,transform_mtx):cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shape__$1,new cljs.core.Keyword(null,"x","x",2099068185),(selrect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x","x",2099068185))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),(selrect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y","y",-1757859776))),new cljs.core.Keyword(null,"width","width",-384071477),(selrect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"width","width",-384071477))),new cljs.core.Keyword(null,"height","height",1025178622),(selrect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"height","height",1025178622)))], 0)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$2,new cljs.core.Keyword(null,"transform","transform",1381301764),transform),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576),inverse),new cljs.core.Keyword(null,"selrect","selrect",1966287292),selrect),new cljs.core.Keyword(null,"points","points",-1486596883),points),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),rotation);
});
/**
 * Given a new set of points transformed, set up the rectangle so it keeps
 *   its properties. We adjust de x,y,width,height and create a custom transform
 */
app.common.geom.shapes.transforms.apply_transform = (function app$common$geom$shapes$transforms$apply_transform(shape,transform_mtx){
if((transform_mtx == null)){
return shape;
} else {
if(app.common.geom.matrix.move_QMARK_(transform_mtx)){
return app.common.geom.shapes.transforms.apply_transform_move(shape,transform_mtx);
} else {
return app.common.geom.shapes.transforms.apply_transform_generic(shape,transform_mtx);

}
}
});
/**
 * Updates the viewbox for groups imported from SVG's
 */
app.common.geom.shapes.transforms.update_group_viewbox = (function app$common$geom$shapes$transforms$update_group_viewbox(p__50280,new_selrect){
var map__50281 = p__50280;
var map__50281__$1 = cljs.core.__destructure_map(map__50281);
var group = map__50281__$1;
var selrect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50281__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
var svg_viewbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50281__$1,new cljs.core.Keyword(null,"svg-viewbox","svg-viewbox",-255575146));
var deltas = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(new_selrect,(0)) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(selrect,(0))),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(new_selrect,(0)) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(selrect,(0))),new cljs.core.Keyword(null,"width","width",-384071477),(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$2(new_selrect,(1)) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$2(selrect,(1))),new cljs.core.Keyword(null,"height","height",1025178622),(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$2(new_selrect,(1)) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$2(selrect,(1)))], null);
var G__50282 = group;
if((((!((svg_viewbox == null)))) && ((((!((selrect == null)))) && ((!((new_selrect == null)))))))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__50282,new cljs.core.Keyword(null,"svg-viewbox","svg-viewbox",-255575146),(function (p1__50279_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__50279_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(deltas)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(deltas)),new cljs.core.Keyword(null,"width","width",-384071477),cljs.core._PLUS_,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(deltas)),new cljs.core.Keyword(null,"height","height",1025178622),cljs.core._PLUS_,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(deltas));
}));
} else {
return G__50282;
}
});
app.common.geom.shapes.transforms.update_group_selrect = (function app$common$geom$shapes$transforms$update_group_selrect(group,children){
var points = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0));
var shape_center = app.common.geom.shapes.common.points__GT_center(points);
var points__$1 = ((cljs.core.empty_QMARK_(points))?new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(group):points);
var base_points = app.common.geom.shapes.common.transform_points.cljs$core$IFn$_invoke$arity$3(points__$1,shape_center,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$2(group,app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0()));
var new_points = app.common.geom.shapes.common.transform_points.cljs$core$IFn$_invoke$arity$3(app.common.geom.rect.rect__GT_points(app.common.geom.rect.points__GT_rect(base_points)),shape_center,new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$2(group,app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0()));
var sr_transform = app.common.geom.matrix.transform_in(app.common.geom.shapes.common.points__GT_center(new_points),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$2(group,app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0()));
var new_selrect = app.common.geom.rect.points__GT_rect(app.common.geom.shapes.common.transform_points.cljs$core$IFn$_invoke$arity$2(new_points,sr_transform));
return app.common.geom.shapes.transforms.apply_transform(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.geom.shapes.transforms.update_group_viewbox(group,new_selrect),new cljs.core.Keyword(null,"selrect","selrect",1966287292),new_selrect),new cljs.core.Keyword(null,"points","points",-1486596883),new_points),new cljs.core.Keyword(null,"flip-x","flip-x",891276861),false),new cljs.core.Keyword(null,"flip-y","flip-y",935998815),false),app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0());
});
app.common.geom.shapes.transforms.update_mask_selrect = (function app$common$geom$shapes$transforms$update_mask_selrect(masked_group,children){
var mask = cljs.core.first(children);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(masked_group,new cljs.core.Keyword(null,"selrect","selrect",1966287292),new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(mask)),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(mask)),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(mask))),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(mask))),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(mask))),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(mask))),new cljs.core.Keyword(null,"flip-x","flip-x",891276861),new cljs.core.Keyword(null,"flip-x","flip-x",891276861).cljs$core$IFn$_invoke$arity$1(mask)),new cljs.core.Keyword(null,"flip-y","flip-y",935998815),new cljs.core.Keyword(null,"flip-y","flip-y",935998815).cljs$core$IFn$_invoke$arity$1(mask));
});
app.common.geom.shapes.transforms.update_shapes_geometry = (function app$common$geom$shapes$transforms$update_shapes_geometry(objects,ids){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (objects__$1,id){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects__$1,id);
var children = app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$2(objects__$1,id);
var shape__$1 = ((app.common.files.helpers.mask_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?app.common.geom.shapes.transforms.update_mask_selrect(shape,children):((app.common.files.helpers.bool_shape_QMARK_(shape))?app.common.types.path.update_bool_shape(shape,objects__$1):((app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?app.common.geom.shapes.transforms.update_group_selrect(shape,children):shape
)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(objects__$1,id,shape__$1);
}),objects,ids);
});
app.common.geom.shapes.transforms.transform_shape = (function app$common$geom$shapes$transforms$transform_shape(var_args){
var G__50284 = arguments.length;
switch (G__50284) {
case 1:
return app.common.geom.shapes.transforms.transform_shape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.geom.shapes.transforms.transform_shape.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.transforms.transform_shape.cljs$core$IFn$_invoke$arity$1 = (function (shape){
var modifiers = new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(shape);
return app.common.geom.shapes.transforms.transform_shape.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"modifiers","modifiers",50378834)),modifiers);
}));

(app.common.geom.shapes.transforms.transform_shape.cljs$core$IFn$_invoke$arity$2 = (function (shape,modifiers){
if((((!((shape == null)))) && ((((!((modifiers == null)))) && ((!(app.common.types.modifiers.empty_QMARK_(modifiers)))))))){
var transform = app.common.types.modifiers.modifiers__GT_transform(modifiers);
var G__50285 = shape;
var G__50285__$1 = (((((!((transform == null)))) && ((!(app.common.files.helpers.root_QMARK_(shape))))))?app.common.geom.shapes.transforms.apply_transform(G__50285,transform):G__50285);
if(app.common.types.modifiers.has_structure_QMARK_(modifiers)){
return app.common.types.modifiers.apply_structure_modifiers(G__50285__$1,modifiers);
} else {
return G__50285__$1;
}
} else {
return shape;
}
}));

(app.common.geom.shapes.transforms.transform_shape.cljs$lang$maxFixedArity = 2);

app.common.geom.shapes.transforms.apply_objects_modifiers = (function app$common$geom$shapes$transforms$apply_objects_modifiers(var_args){
var G__50287 = arguments.length;
switch (G__50287) {
case 2:
return app.common.geom.shapes.transforms.apply_objects_modifiers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.geom.shapes.transforms.apply_objects_modifiers.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.transforms.apply_objects_modifiers.cljs$core$IFn$_invoke$arity$2 = (function (objects,modifiers){
return app.common.geom.shapes.transforms.apply_objects_modifiers.cljs$core$IFn$_invoke$arity$3(objects,modifiers,cljs.core.keys(modifiers));
}));

(app.common.geom.shapes.transforms.apply_objects_modifiers.cljs$core$IFn$_invoke$arity$3 = (function (objects,modifiers,ids){
var objects__$1 = objects;
var ids__$1 = cljs.core.seq(ids);
while(true){
if(cljs.core.empty_QMARK_(ids__$1)){
return objects__$1;
} else {
var id = cljs.core.first(ids__$1);
var modifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,id),new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
var G__50335 = app.common.data.update_when.cljs$core$IFn$_invoke$arity$variadic(objects__$1,id,app.common.geom.shapes.transforms.transform_shape,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([modifier], 0));
var G__50336 = cljs.core.rest(ids__$1);
objects__$1 = G__50335;
ids__$1 = G__50336;
continue;
}
break;
}
}));

(app.common.geom.shapes.transforms.apply_objects_modifiers.cljs$lang$maxFixedArity = 3);

app.common.geom.shapes.transforms.transform_bounds = (function app$common$geom$shapes$transforms$transform_bounds(var_args){
var G__50289 = arguments.length;
switch (G__50289) {
case 2:
return app.common.geom.shapes.transforms.transform_bounds.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.geom.shapes.transforms.transform_bounds.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.transforms.transform_bounds.cljs$core$IFn$_invoke$arity$2 = (function (points,modifiers){
return app.common.geom.shapes.transforms.transform_bounds.cljs$core$IFn$_invoke$arity$3(points,null,modifiers);
}));

(app.common.geom.shapes.transforms.transform_bounds.cljs$core$IFn$_invoke$arity$3 = (function (points,center,modifiers){
var transform = app.common.types.modifiers.modifiers__GT_transform(modifiers);
var G__50290 = points;
if((!((transform == null)))){
return app.common.geom.shapes.common.transform_points.cljs$core$IFn$_invoke$arity$3(G__50290,center,transform);
} else {
return G__50290;
}
}));

(app.common.geom.shapes.transforms.transform_bounds.cljs$lang$maxFixedArity = 3);

app.common.geom.shapes.transforms.transform_selrect = (function app$common$geom$shapes$transforms$transform_selrect(selrect,modifiers){
return app.common.geom.rect.points__GT_rect(app.common.geom.shapes.transforms.transform_bounds.cljs$core$IFn$_invoke$arity$2(app.common.geom.rect.rect__GT_points(selrect),modifiers));
});
app.common.geom.shapes.transforms.transform_selrect_matrix = (function app$common$geom$shapes$transforms$transform_selrect_matrix(selrect,mtx){
return app.common.geom.rect.points__GT_rect(app.common.geom.shapes.common.transform_points.cljs$core$IFn$_invoke$arity$2(app.common.geom.rect.rect__GT_points(selrect),mtx));
});
app.common.geom.shapes.transforms.apply_children_modifiers = (function app$common$geom$shapes$transforms$apply_children_modifiers(objects,modif_tree,parent_modifiers,children,propagate_QMARK_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (child){
var modifiers = (function (){var G__50292 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(modif_tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null));
if(cljs.core.truth_(propagate_QMARK_)){
return app.common.types.modifiers.add_modifiers(G__50292,parent_modifiers);
} else {
return G__50292;
}
})();
var child__$1 = app.common.geom.shapes.transforms.transform_shape.cljs$core$IFn$_invoke$arity$2(child,modifiers);
var parent_QMARK_ = app.common.files.helpers.group_like_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(child__$1);
var modif_tree__$1 = (function (){var G__50293 = modif_tree;
if(cljs.core.truth_(propagate_QMARK_)){
return cljs.core.assoc_in(G__50293,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child__$1),new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null),modifiers);
} else {
return G__50293;
}
})();
var G__50294 = child__$1;
if(parent_QMARK_){
return (app.common.geom.shapes.transforms.apply_group_modifiers.cljs$core$IFn$_invoke$arity$4 ? app.common.geom.shapes.transforms.apply_group_modifiers.cljs$core$IFn$_invoke$arity$4(G__50294,objects,modif_tree__$1,propagate_QMARK_) : app.common.geom.shapes.transforms.apply_group_modifiers.call(null,G__50294,objects,modif_tree__$1,propagate_QMARK_));
} else {
return G__50294;
}
}),children);
});
/**
 * Apply the modifiers to the group children to calculate its selection rect
 */
app.common.geom.shapes.transforms.apply_group_modifiers = (function app$common$geom$shapes$transforms$apply_group_modifiers(var_args){
var G__50296 = arguments.length;
switch (G__50296) {
case 3:
return app.common.geom.shapes.transforms.apply_group_modifiers.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.geom.shapes.transforms.apply_group_modifiers.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.transforms.apply_group_modifiers.cljs$core$IFn$_invoke$arity$3 = (function (group,objects,modif_tree){
return app.common.geom.shapes.transforms.apply_group_modifiers.cljs$core$IFn$_invoke$arity$4(group,objects,modif_tree,true);
}));

(app.common.geom.shapes.transforms.apply_group_modifiers.cljs$core$IFn$_invoke$arity$4 = (function (group,objects,modif_tree,propagate_QMARK_){
var modifiers = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(modif_tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(group),new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null));
var children = (function (){var $ = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(group);
var $__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),$);
return app.common.geom.shapes.transforms.apply_children_modifiers(objects,modif_tree,modifiers,$__$1,propagate_QMARK_);
})();
if(app.common.files.helpers.mask_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(group)){
return app.common.geom.shapes.transforms.update_mask_selrect(group,children);
} else {
if(app.common.files.helpers.bool_shape_QMARK_(group)){
return app.common.geom.shapes.transforms.transform_shape.cljs$core$IFn$_invoke$arity$2(group,modifiers);
} else {
if(app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(group)){
return app.common.geom.shapes.transforms.update_group_selrect(group,children);
} else {
return group;

}
}
}
}));

(app.common.geom.shapes.transforms.apply_group_modifiers.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=app.common.geom.shapes.transforms.js.map
