import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.common.js";
import "./app.common.geom.shapes.constraints.js";
import "./app.common.geom.shapes.corners.js";
import "./app.common.geom.shapes.fit_frame.js";
import "./app.common.geom.shapes.intersect.js";
import "./app.common.geom.shapes.transforms.js";
import "./app.common.math.js";
goog.provide('app.common.geom.shapes');
app.common.geom.shapes.translate_to_frame = (function app$common$geom$shapes$translate_to_frame(shape,frame){
return app.common.geom.shapes.transforms.move(shape,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((- (frame?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(frame,new cljs.core.Keyword(null,"x","x",2099068185)))),(- (frame?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(frame,new cljs.core.Keyword(null,"y","y",-1757859776))))));
});
app.common.geom.shapes.translate_from_frame = (function app$common$geom$shapes$translate_from_frame(shape,frame){
return app.common.geom.shapes.transforms.move(shape,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((frame?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(frame,new cljs.core.Keyword(null,"x","x",2099068185))),(frame?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(frame,new cljs.core.Keyword(null,"y","y",-1757859776)))));
});
app.common.geom.shapes.shape__GT_rect = (function app$common$geom$shapes$shape__GT_rect(shape){
var x = (shape?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (shape?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"y","y",-1757859776)));
var w = (shape?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"width","width",-384071477)));
var h = (shape?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"height","height",1025178622)));
if(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$4(x,y,w,h)){
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(x,y,w,h);
} else {
return null;
}
});
/**
 * Returns a rect that wraps the shape after all transformations applied.
 */
app.common.geom.shapes.bounding_box = (function app$common$geom$shapes$bounding_box(shape){
return app.common.geom.rect.points__GT_rect(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape));
});
/**
 * Returns the lowest x coord of the shape BEFORE applying transformations.
 */
app.common.geom.shapes.left_bound = (function app$common$geom$shapes$left_bound(shape){
var or__5025__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape));
}
});
/**
 * Returns the lowest y coord of the shape BEFORE applying transformations.
 */
app.common.geom.shapes.top_bound = (function app$common$geom$shapes$top_bound(shape){
var or__5025__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape));
}
});
/**
 * Checks if one rect is fully inside the other
 */
app.common.geom.shapes.fully_contained_QMARK_ = (function app$common$geom$shapes$fully_contained_QMARK_(rect,other){
return (((new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(rect) <= new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(other))) && ((((new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(rect) >= new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(other))) && ((((new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(rect) <= new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(other))) && ((new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(rect) >= new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(other))))))));
});
app.common.geom.shapes.pad_selrec = (function app$common$geom$shapes$pad_selrec(var_args){
var G__50550 = arguments.length;
switch (G__50550) {
case 1:
return app.common.geom.shapes.pad_selrec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.geom.shapes.pad_selrec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.pad_selrec.cljs$core$IFn$_invoke$arity$1 = (function (selrect){
return app.common.geom.shapes.pad_selrec.cljs$core$IFn$_invoke$arity$2(selrect,(1));
}));

(app.common.geom.shapes.pad_selrec.cljs$core$IFn$_invoke$arity$2 = (function (selrect,size){
var inc = (function (p1__50547_SHARP_){
return (p1__50547_SHARP_ + size);
});
var dec = (function (p1__50548_SHARP_){
return (p1__50548_SHARP_ - size);
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(selrect,new cljs.core.Keyword(null,"x","x",2099068185),dec),new cljs.core.Keyword(null,"y","y",-1757859776),dec),new cljs.core.Keyword(null,"x1","x1",-1863922247),dec),new cljs.core.Keyword(null,"y1","y1",589123466),dec),new cljs.core.Keyword(null,"x2","x2",-1362513475),inc),new cljs.core.Keyword(null,"y2","y2",-718691301),inc),new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inc,inc)),new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inc,inc));
}));

(app.common.geom.shapes.pad_selrec.cljs$lang$maxFixedArity = 2);

app.common.geom.shapes.get_areas = (function app$common$geom$shapes$get_areas(bounds,selrect){
var bound_x1 = (bounds?.x1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"x1","x1",-1863922247)));
var bound_x2 = (bounds?.x2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"x2","x2",-1362513475)));
var bound_y1 = (bounds?.y1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"y1","y1",589123466)));
var bound_y2 = (bounds?.y2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"y2","y2",-718691301)));
var sr_x1 = (selrect?.x1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x1","x1",-1863922247)));
var sr_x2 = (selrect?.x2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x2","x2",-1362513475)));
var sr_y1 = (selrect?.y1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y1","y1",589123466)));
var sr_y2 = (selrect?.y2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y2","y2",-718691301)));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),app.common.geom.rect.corners__GT_rect.cljs$core$IFn$_invoke$arity$4(bound_x1,sr_y1,sr_x1,sr_y2),new cljs.core.Keyword(null,"top","top",-1856271961),app.common.geom.rect.corners__GT_rect.cljs$core$IFn$_invoke$arity$4(sr_x1,bound_y1,sr_x2,sr_y1),new cljs.core.Keyword(null,"right","right",-452581833),app.common.geom.rect.corners__GT_rect.cljs$core$IFn$_invoke$arity$4(sr_x2,sr_y1,bound_x2,sr_y2),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),app.common.geom.rect.corners__GT_rect.cljs$core$IFn$_invoke$arity$4(sr_x1,sr_y2,sr_x2,bound_y2)], null);
});
app.common.geom.shapes.distance_selrect = (function app$common$geom$shapes$distance_selrect(selrect,other){
app.common.data.macros.runtime_assert("expr assert: (and (grc/rect? selrect) (grc/rect? other))",(function (){
return ((app.common.geom.rect.rect_QMARK_(selrect)) && (app.common.geom.rect.rect_QMARK_(other)));
}));

var x1 = (other?.x1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(other,new cljs.core.Keyword(null,"x1","x1",-1863922247)));
var y1 = (other?.y1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(other,new cljs.core.Keyword(null,"y1","y1",589123466)));
var x2 = (selrect?.x2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x2","x2",-1362513475)));
var y2 = (selrect?.y2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y2","y2",-718691301)));
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x1 - x2),(y1 - y2));
});
app.common.geom.shapes.distance_shapes = (function app$common$geom$shapes$distance_shapes(shape,other){
return app.common.geom.shapes.distance_selrect((shape?.selrect?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"selrect","selrect",1966287292))),(other?.selrect?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(other,new cljs.core.Keyword(null,"selrect","selrect",1966287292))));
});
/**
 * Compares two shapes attributes to see if they are equal or almost
 *   equal (in case of numeric). Takes into account attributes that are
 *   data structures with numbers inside.
 */
app.common.geom.shapes.close_attrs_QMARK_ = (function app$common$geom$shapes$close_attrs_QMARK_(var_args){
var G__50563 = arguments.length;
switch (G__50563) {
case 3:
return app.common.geom.shapes.close_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.geom.shapes.close_attrs_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.close_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (attr,val1,val2){
return app.common.geom.shapes.close_attrs_QMARK_.cljs$core$IFn$_invoke$arity$4(attr,val1,val2,app.common.math.float_equal_precision);
}));

(app.common.geom.shapes.close_attrs_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (attr,val1,val2,precision){
var close_val_QMARK_ = (function (num1,num2){
if(((typeof num1 === 'number') && (typeof num2 === 'number'))){
return (app.common.math.abs((num1 - num2)) < precision);
} else {
return null;
}
});
if(((typeof val1 === 'number') && (typeof val2 === 'number'))){
return close_val_QMARK_(val1,val2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"selrect","selrect",1966287292))){
return cljs.core.every_QMARK_((function (p1__50559_SHARP_){
return close_val_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(val1,p1__50559_SHARP_),cljs.core.get.cljs$core$IFn$_invoke$arity$2(val2,p1__50559_SHARP_));
}),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"points","points",-1486596883))){
return cljs.core.every_QMARK_((function (p1__50560_SHARP_){
var and__5023__auto__ = close_val_QMARK_(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__50560_SHARP_)),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__50560_SHARP_)));
if(cljs.core.truth_(and__5023__auto__)){
return close_val_QMARK_(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__50560_SHARP_)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__50560_SHARP_)));
} else {
return and__5023__auto__;
}
}),app.common.data.zip(val1,val2));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"position-data","position-data",-499622376))){
return cljs.core.every_QMARK_((function (p1__50561_SHARP_){
var and__5023__auto__ = close_val_QMARK_(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__50561_SHARP_)),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__50561_SHARP_)));
if(cljs.core.truth_(and__5023__auto__)){
return close_val_QMARK_(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__50561_SHARP_)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__50561_SHARP_)));
} else {
return and__5023__auto__;
}
}),app.common.data.zip(val1,val2));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val1,val2);

}
}
}
}
}));

(app.common.geom.shapes.close_attrs_QMARK_.cljs$lang$maxFixedArity = 4);

/**
 * Calculate the center of the shape.
 */
app.common.geom.shapes.shape__GT_center = (function app$common$geom$shapes$shape__GT_center(param50565){
return app.common.geom.shapes.common.shape__GT_center(param50565);
});
/**
 * Returns a rect that contains all the shapes and is aware of the
 *   rotation of each shape. Mainly used for multiple selection.
 */
app.common.geom.shapes.shapes__GT_rect = (function app$common$geom$shapes$shapes__GT_rect(param50566){
return app.common.geom.shapes.common.shapes__GT_rect(param50566);
});
app.common.geom.shapes.points__GT_center = (function app$common$geom$shapes$points__GT_center(param50567){
return app.common.geom.shapes.common.points__GT_center(param50567);
});
app.common.geom.shapes.transform_points = (function() {
var app$common$geom$shapes$transform_points = null;
var app$common$geom$shapes$transform_points__2 = (function (param50570,param50571){
return app.common.geom.shapes.common.transform_points.cljs$core$IFn$_invoke$arity$2(param50570,param50571);
});
var app$common$geom$shapes$transform_points__3 = (function (param50572,param50573,param50574){
return app.common.geom.shapes.common.transform_points.cljs$core$IFn$_invoke$arity$3(param50572,param50573,param50574);
});
app$common$geom$shapes$transform_points = function(param50572,param50573,param50574){
switch(arguments.length){
case 2:
return app$common$geom$shapes$transform_points__2.call(this,param50572,param50573);
case 3:
return app$common$geom$shapes$transform_points__3.call(this,param50572,param50573,param50574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$common$geom$shapes$transform_points.cljs$core$IFn$_invoke$arity$2 = app$common$geom$shapes$transform_points__2;
app$common$geom$shapes$transform_points.cljs$core$IFn$_invoke$arity$3 = app$common$geom$shapes$transform_points__3;
return app$common$geom$shapes$transform_points;
})()
;
app.common.geom.shapes.shape__GT_points = (function app$common$geom$shapes$shape__GT_points(param50575){
return app.common.geom.shapes.common.shape__GT_points(param50575);
});
/**
 * Move the shape relatively to its current
 *   position applying the provided delta.
 */
app.common.geom.shapes.move = (function app$common$geom$shapes$move(param50576,param50577){
return app.common.geom.shapes.transforms.move(param50576,param50577);
});
/**
 * Move the shape to the exactly specified position.
 */
app.common.geom.shapes.absolute_move = (function app$common$geom$shapes$absolute_move(param50582,param50583){
return app.common.geom.shapes.transforms.absolute_move(param50582,param50583);
});
/**
 * Returns a transformation matrix without changing the shape properties.
 *   The result should be used in a `transform` attribute in svg
 */
app.common.geom.shapes.transform_matrix = (function() {
var app$common$geom$shapes$transform_matrix = null;
var app$common$geom$shapes$transform_matrix__1 = (function (param50584){
return app.common.geom.shapes.transforms.transform_matrix.cljs$core$IFn$_invoke$arity$1(param50584);
});
var app$common$geom$shapes$transform_matrix__2 = (function (param50585,param50586){
return app.common.geom.shapes.transforms.transform_matrix.cljs$core$IFn$_invoke$arity$2(param50585,param50586);
});
var app$common$geom$shapes$transform_matrix__3 = (function (param50587,param50588,param50589){
return app.common.geom.shapes.transforms.transform_matrix.cljs$core$IFn$_invoke$arity$3(param50587,param50588,param50589);
});
app$common$geom$shapes$transform_matrix = function(param50587,param50588,param50589){
switch(arguments.length){
case 1:
return app$common$geom$shapes$transform_matrix__1.call(this,param50587);
case 2:
return app$common$geom$shapes$transform_matrix__2.call(this,param50587,param50588);
case 3:
return app$common$geom$shapes$transform_matrix__3.call(this,param50587,param50588,param50589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$common$geom$shapes$transform_matrix.cljs$core$IFn$_invoke$arity$1 = app$common$geom$shapes$transform_matrix__1;
app$common$geom$shapes$transform_matrix.cljs$core$IFn$_invoke$arity$2 = app$common$geom$shapes$transform_matrix__2;
app$common$geom$shapes$transform_matrix.cljs$core$IFn$_invoke$arity$3 = app$common$geom$shapes$transform_matrix__3;
return app$common$geom$shapes$transform_matrix;
})()
;
app.common.geom.shapes.transform_str = (function() {
var app$common$geom$shapes$transform_str = null;
var app$common$geom$shapes$transform_str__1 = (function (param50590){
return app.common.geom.shapes.transforms.transform_str.cljs$core$IFn$_invoke$arity$1(param50590);
});
var app$common$geom$shapes$transform_str__2 = (function (param50591,param50592){
return app.common.geom.shapes.transforms.transform_str.cljs$core$IFn$_invoke$arity$2(param50591,param50592);
});
app$common$geom$shapes$transform_str = function(param50591,param50592){
switch(arguments.length){
case 1:
return app$common$geom$shapes$transform_str__1.call(this,param50591);
case 2:
return app$common$geom$shapes$transform_str__2.call(this,param50591,param50592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$common$geom$shapes$transform_str.cljs$core$IFn$_invoke$arity$1 = app$common$geom$shapes$transform_str__1;
app$common$geom$shapes$transform_str.cljs$core$IFn$_invoke$arity$2 = app$common$geom$shapes$transform_str__2;
return app$common$geom$shapes$transform_str;
})()
;
app.common.geom.shapes.inverse_transform_matrix = (function() {
var app$common$geom$shapes$inverse_transform_matrix = null;
var app$common$geom$shapes$inverse_transform_matrix__1 = (function (param50597){
return app.common.geom.shapes.transforms.inverse_transform_matrix.cljs$core$IFn$_invoke$arity$1(param50597);
});
var app$common$geom$shapes$inverse_transform_matrix__2 = (function (param50598,param50599){
return app.common.geom.shapes.transforms.inverse_transform_matrix.cljs$core$IFn$_invoke$arity$2(param50598,param50599);
});
var app$common$geom$shapes$inverse_transform_matrix__3 = (function (param50600,param50601,param50602){
return app.common.geom.shapes.transforms.inverse_transform_matrix.cljs$core$IFn$_invoke$arity$3(param50600,param50601,param50602);
});
app$common$geom$shapes$inverse_transform_matrix = function(param50600,param50601,param50602){
switch(arguments.length){
case 1:
return app$common$geom$shapes$inverse_transform_matrix__1.call(this,param50600);
case 2:
return app$common$geom$shapes$inverse_transform_matrix__2.call(this,param50600,param50601);
case 3:
return app$common$geom$shapes$inverse_transform_matrix__3.call(this,param50600,param50601,param50602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$common$geom$shapes$inverse_transform_matrix.cljs$core$IFn$_invoke$arity$1 = app$common$geom$shapes$inverse_transform_matrix__1;
app$common$geom$shapes$inverse_transform_matrix.cljs$core$IFn$_invoke$arity$2 = app$common$geom$shapes$inverse_transform_matrix__2;
app$common$geom$shapes$inverse_transform_matrix.cljs$core$IFn$_invoke$arity$3 = app$common$geom$shapes$inverse_transform_matrix__3;
return app$common$geom$shapes$inverse_transform_matrix;
})()
;
/**
 * Transform a rectangles and changes its attributes
 */
app.common.geom.shapes.transform_rect = (function app$common$geom$shapes$transform_rect(param50603,param50604){
return app.common.geom.shapes.transforms.transform_rect(param50603,param50604);
});
app.common.geom.shapes.calculate_geometry = (function app$common$geom$shapes$calculate_geometry(param50605){
return app.common.geom.shapes.transforms.calculate_geometry(param50605);
});
app.common.geom.shapes.calculate_selrect = (function app$common$geom$shapes$calculate_selrect(param50606,param50607){
return app.common.geom.shapes.transforms.calculate_selrect(param50606,param50607);
});
app.common.geom.shapes.update_group_selrect = (function app$common$geom$shapes$update_group_selrect(param50608,param50609){
return app.common.geom.shapes.transforms.update_group_selrect(param50608,param50609);
});
app.common.geom.shapes.update_mask_selrect = (function app$common$geom$shapes$update_mask_selrect(param50610,param50611){
return app.common.geom.shapes.transforms.update_mask_selrect(param50610,param50611);
});
/**
 * Given a new set of points transformed, set up the rectangle so it keeps
 *   its properties. We adjust de x,y,width,height and create a custom transform
 */
app.common.geom.shapes.apply_transform = (function app$common$geom$shapes$apply_transform(param50612,param50613){
return app.common.geom.shapes.transforms.apply_transform(param50612,param50613);
});
app.common.geom.shapes.transform_shape = (function() {
var app$common$geom$shapes$transform_shape = null;
var app$common$geom$shapes$transform_shape__1 = (function (param50614){
return app.common.geom.shapes.transforms.transform_shape.cljs$core$IFn$_invoke$arity$1(param50614);
});
var app$common$geom$shapes$transform_shape__2 = (function (param50615,param50616){
return app.common.geom.shapes.transforms.transform_shape.cljs$core$IFn$_invoke$arity$2(param50615,param50616);
});
app$common$geom$shapes$transform_shape = function(param50615,param50616){
switch(arguments.length){
case 1:
return app$common$geom$shapes$transform_shape__1.call(this,param50615);
case 2:
return app$common$geom$shapes$transform_shape__2.call(this,param50615,param50616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$common$geom$shapes$transform_shape.cljs$core$IFn$_invoke$arity$1 = app$common$geom$shapes$transform_shape__1;
app$common$geom$shapes$transform_shape.cljs$core$IFn$_invoke$arity$2 = app$common$geom$shapes$transform_shape__2;
return app$common$geom$shapes$transform_shape;
})()
;
app.common.geom.shapes.transform_selrect = (function app$common$geom$shapes$transform_selrect(param50617,param50618){
return app.common.geom.shapes.transforms.transform_selrect(param50617,param50618);
});
app.common.geom.shapes.transform_selrect_matrix = (function app$common$geom$shapes$transform_selrect_matrix(param50620,param50621){
return app.common.geom.shapes.transforms.transform_selrect_matrix(param50620,param50621);
});
app.common.geom.shapes.transform_bounds = (function() {
var app$common$geom$shapes$transform_bounds = null;
var app$common$geom$shapes$transform_bounds__2 = (function (param50622,param50623){
return app.common.geom.shapes.transforms.transform_bounds.cljs$core$IFn$_invoke$arity$2(param50622,param50623);
});
var app$common$geom$shapes$transform_bounds__3 = (function (param50624,param50625,param50626){
return app.common.geom.shapes.transforms.transform_bounds.cljs$core$IFn$_invoke$arity$3(param50624,param50625,param50626);
});
app$common$geom$shapes$transform_bounds = function(param50624,param50625,param50626){
switch(arguments.length){
case 2:
return app$common$geom$shapes$transform_bounds__2.call(this,param50624,param50625);
case 3:
return app$common$geom$shapes$transform_bounds__3.call(this,param50624,param50625,param50626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$common$geom$shapes$transform_bounds.cljs$core$IFn$_invoke$arity$2 = app$common$geom$shapes$transform_bounds__2;
app$common$geom$shapes$transform_bounds.cljs$core$IFn$_invoke$arity$3 = app$common$geom$shapes$transform_bounds__3;
return app$common$geom$shapes$transform_bounds;
})()
;
app.common.geom.shapes.move_position_data = (function app$common$geom$shapes$move_position_data(param50630,param50631){
return app.common.geom.shapes.transforms.move_position_data(param50630,param50631);
});
app.common.geom.shapes.apply_objects_modifiers = (function() {
var app$common$geom$shapes$apply_objects_modifiers = null;
var app$common$geom$shapes$apply_objects_modifiers__2 = (function (param50634,param50635){
return app.common.geom.shapes.transforms.apply_objects_modifiers.cljs$core$IFn$_invoke$arity$2(param50634,param50635);
});
var app$common$geom$shapes$apply_objects_modifiers__3 = (function (param50637,param50638,param50639){
return app.common.geom.shapes.transforms.apply_objects_modifiers.cljs$core$IFn$_invoke$arity$3(param50637,param50638,param50639);
});
app$common$geom$shapes$apply_objects_modifiers = function(param50637,param50638,param50639){
switch(arguments.length){
case 2:
return app$common$geom$shapes$apply_objects_modifiers__2.call(this,param50637,param50638);
case 3:
return app$common$geom$shapes$apply_objects_modifiers__3.call(this,param50637,param50638,param50639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$common$geom$shapes$apply_objects_modifiers.cljs$core$IFn$_invoke$arity$2 = app$common$geom$shapes$apply_objects_modifiers__2;
app$common$geom$shapes$apply_objects_modifiers.cljs$core$IFn$_invoke$arity$3 = app$common$geom$shapes$apply_objects_modifiers__3;
return app$common$geom$shapes$apply_objects_modifiers;
})()
;
app.common.geom.shapes.apply_children_modifiers = (function app$common$geom$shapes$apply_children_modifiers(param50643,param50644,param50645,param50646,param50647){
return app.common.geom.shapes.transforms.apply_children_modifiers(param50643,param50644,param50645,param50646,param50647);
});
app.common.geom.shapes.update_shapes_geometry = (function app$common$geom$shapes$update_shapes_geometry(param50650,param50651){
return app.common.geom.shapes.transforms.update_shapes_geometry(param50650,param50651);
});
app.common.geom.shapes.calc_child_modifiers = (function app$common$geom$shapes$calc_child_modifiers(param50654,param50655,param50656,param50657,param50658,param50659,param50660){
return app.common.geom.shapes.constraints.calc_child_modifiers(param50654,param50655,param50656,param50657,param50658,param50659,param50660);
});
/**
 * General case to check for overlapping between shapes and a rectangle
 */
app.common.geom.shapes.overlaps_QMARK_ = (function app$common$geom$shapes$overlaps_QMARK_(param50661,param50662){
return app.common.geom.shapes.intersect.overlaps_QMARK_(param50661,param50662);
});
/**
 * Checks if the given rect overlaps with the path in any point
 */
app.common.geom.shapes.overlaps_path_QMARK_ = (function app$common$geom$shapes$overlaps_path_QMARK_(param50665,param50666,param50667){
return app.common.geom.shapes.intersect.overlaps_path_QMARK_(param50665,param50666,param50667);
});
app.common.geom.shapes.has_point_QMARK_ = (function app$common$geom$shapes$has_point_QMARK_(param50669,param50670){
return app.common.geom.shapes.intersect.has_point_QMARK_(param50669,param50670);
});
app.common.geom.shapes.has_point_rect_QMARK_ = (function app$common$geom$shapes$has_point_rect_QMARK_(param50671,param50672){
return app.common.geom.shapes.intersect.has_point_rect_QMARK_(param50671,param50672);
});
app.common.geom.shapes.rect_contains_shape_QMARK_ = (function app$common$geom$shapes$rect_contains_shape_QMARK_(param50673,param50674){
return app.common.geom.shapes.intersect.rect_contains_shape_QMARK_(param50673,param50674);
});
app.common.geom.shapes.default_constraints_h = (function app$common$geom$shapes$default_constraints_h(param50675){
return app.common.geom.shapes.constraints.default_constraints_h(param50675);
});
app.common.geom.shapes.default_constraints_v = (function app$common$geom$shapes$default_constraints_v(param50676){
return app.common.geom.shapes.constraints.default_constraints_v(param50676);
});
/**
 * Retrieve the effective value for the corner given a single value for corner.
 */
app.common.geom.shapes.shape_corners_1 = (function app$common$geom$shapes$shape_corners_1(param50677){
return app.common.geom.shapes.corners.shape_corners_1(param50677);
});
/**
 * Retrieve the effective value for the corner given four values for the corners.
 */
app.common.geom.shapes.shape_corners_4 = (function app$common$geom$shapes$shape_corners_4(param50678){
return app.common.geom.shapes.corners.shape_corners_4(param50678);
});
app.common.geom.shapes.rect__GT_points = (function app$common$geom$shapes$rect__GT_points(param50679){
return app.common.geom.rect.rect__GT_points(param50679);
});
app.common.geom.shapes.center__GT_rect = (function() {
var app$common$geom$shapes$center__GT_rect = null;
var app$common$geom$shapes$center__GT_rect__2 = (function (param50680,param50681){
return app.common.geom.rect.center__GT_rect.cljs$core$IFn$_invoke$arity$2(param50680,param50681);
});
var app$common$geom$shapes$center__GT_rect__3 = (function (param50682,param50683,param50684){
return app.common.geom.rect.center__GT_rect.cljs$core$IFn$_invoke$arity$3(param50682,param50683,param50684);
});
app$common$geom$shapes$center__GT_rect = function(param50682,param50683,param50684){
switch(arguments.length){
case 2:
return app$common$geom$shapes$center__GT_rect__2.call(this,param50682,param50683);
case 3:
return app$common$geom$shapes$center__GT_rect__3.call(this,param50682,param50683,param50684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$common$geom$shapes$center__GT_rect.cljs$core$IFn$_invoke$arity$2 = app$common$geom$shapes$center__GT_rect__2;
app$common$geom$shapes$center__GT_rect.cljs$core$IFn$_invoke$arity$3 = app$common$geom$shapes$center__GT_rect__3;
return app$common$geom$shapes$center__GT_rect;
})()
;
app.common.geom.shapes.fit_frame_modifiers = (function app$common$geom$shapes$fit_frame_modifiers(param50685,param50686){
return app.common.geom.shapes.fit_frame.fit_frame_modifiers(param50685,param50686);
});

//# sourceMappingURL=app.common.geom.shapes.js.map
