import "./cljs_env.js";
import "./cljs.core.js";
goog.provide('app.common.geom.shapes.grid_layout.areas');
app.common.geom.shapes.grid_layout.areas.area__GT_cell_props = (function app$common$geom$shapes$grid_layout$areas$area__GT_cell_props(p__47496){
var vec__47499 = p__47496;
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47499,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47499,(1),null);
var column_span = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47499,(2),null);
var row_span = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47499,(3),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"row-span","row-span",-365554241),row_span,new cljs.core.Keyword(null,"column-span","column-span",1302376857),column_span], null);
});
app.common.geom.shapes.grid_layout.areas.make_area = (function app$common$geom$shapes$grid_layout$areas$make_area(var_args){
var G__47505 = arguments.length;
switch (G__47505) {
case 1:
return app.common.geom.shapes.grid_layout.areas.make_area.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return app.common.geom.shapes.grid_layout.areas.make_area.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.grid_layout.areas.make_area.cljs$core$IFn$_invoke$arity$1 = (function (p__47507){
var map__47509 = p__47507;
var map__47509__$1 = cljs.core.__destructure_map(map__47509);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47509__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47509__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var column_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47509__$1,new cljs.core.Keyword(null,"column-span","column-span",1302376857));
var row_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47509__$1,new cljs.core.Keyword(null,"row-span","row-span",-365554241));
return app.common.geom.shapes.grid_layout.areas.make_area.cljs$core$IFn$_invoke$arity$4(column,row,column_span,row_span);
}));

(app.common.geom.shapes.grid_layout.areas.make_area.cljs$core$IFn$_invoke$arity$4 = (function (x,y,width,height){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,width,height], null);
}));

(app.common.geom.shapes.grid_layout.areas.make_area.cljs$lang$maxFixedArity = 4);

app.common.geom.shapes.grid_layout.areas.contains_QMARK_ = (function app$common$geom$shapes$grid_layout$areas$contains_QMARK_(p__47517,p__47518){
var vec__47524 = p__47517;
var a_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47524,(0),null);
var a_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47524,(1),null);
var a_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47524,(2),null);
var a_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47524,(3),null);
var a = vec__47524;
var vec__47527 = p__47518;
var b_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47527,(0),null);
var b_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47527,(1),null);
var b_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47527,(2),null);
var b_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47527,(3),null);
var b = vec__47527;
return (((b_x >= a_x)) && ((((b_y >= a_y)) && (((((b_x + b_width) <= (a_x + a_width))) && (((b_y + b_height) <= (a_y + a_height))))))));
});
app.common.geom.shapes.grid_layout.areas.intersects_QMARK_ = (function app$common$geom$shapes$grid_layout$areas$intersects_QMARK_(p__47534,p__47535){
var vec__47536 = p__47534;
var a_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47536,(0),null);
var a_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47536,(1),null);
var a_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47536,(2),null);
var a_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47536,(3),null);
var vec__47539 = p__47535;
var b_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47539,(0),null);
var b_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47539,(1),null);
var b_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47539,(2),null);
var b_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47539,(3),null);
return (!(((((b_x + b_width) <= a_x)) || (((((b_y + b_height) <= a_y)) || ((((b_x >= (a_x + a_width))) || ((b_y >= (a_y + a_height))))))))));
});
app.common.geom.shapes.grid_layout.areas.top_rect = (function app$common$geom$shapes$grid_layout$areas$top_rect(p__47550,p__47551){
var vec__47552 = p__47550;
var a_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47552,(0),null);
var a_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47552,(1),null);
var a_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47552,(2),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47552,(3),null);
var vec__47555 = p__47551;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47555,(0),null);
var b_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47555,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47555,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47555,(3),null);
var height = (b_y - a_y);
if((height > (0))){
return app.common.geom.shapes.grid_layout.areas.make_area.cljs$core$IFn$_invoke$arity$4(a_x,a_y,a_width,height);
} else {
return null;
}
});
app.common.geom.shapes.grid_layout.areas.bottom_rect = (function app$common$geom$shapes$grid_layout$areas$bottom_rect(p__47563,p__47564){
var vec__47565 = p__47563;
var a_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47565,(0),null);
var a_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47565,(1),null);
var a_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47565,(2),null);
var a_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47565,(3),null);
var vec__47568 = p__47564;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47568,(0),null);
var b_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47568,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47568,(2),null);
var b_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47568,(3),null);
var y = (b_y + b_height);
var height = (a_height - (y - a_y));
if((((height > (0))) && ((y < (a_y + a_height))))){
return app.common.geom.shapes.grid_layout.areas.make_area.cljs$core$IFn$_invoke$arity$4(a_x,y,a_width,height);
} else {
return null;
}
});
app.common.geom.shapes.grid_layout.areas.left_rect = (function app$common$geom$shapes$grid_layout$areas$left_rect(p__47572,p__47573){
var vec__47575 = p__47572;
var a_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47575,(0),null);
var a_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47575,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47575,(2),null);
var a_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47575,(3),null);
var vec__47578 = p__47573;
var b_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47578,(0),null);
var b_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47578,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47578,(2),null);
var b_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47578,(3),null);
var rb_y = (b_y + b_height);
var ra_y = (a_y + a_height);
var y1 = (function (){var x__5110__auto__ = a_y;
var y__5111__auto__ = b_y;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y2 = (function (){var x__5113__auto__ = ra_y;
var y__5114__auto__ = rb_y;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var height = (y2 - y1);
var width = (b_x - a_x);
if((((width > (0))) && ((height > (0))))){
return app.common.geom.shapes.grid_layout.areas.make_area.cljs$core$IFn$_invoke$arity$4(a_x,y1,width,height);
} else {
return null;
}
});
app.common.geom.shapes.grid_layout.areas.right_rect = (function app$common$geom$shapes$grid_layout$areas$right_rect(p__47587,p__47588){
var vec__47589 = p__47587;
var a_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47589,(0),null);
var a_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47589,(1),null);
var a_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47589,(2),null);
var a_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47589,(3),null);
var vec__47592 = p__47588;
var b_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47592,(0),null);
var b_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47592,(1),null);
var b_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47592,(2),null);
var b_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47592,(3),null);
var rb_y = (b_y + b_height);
var ra_y = (a_y + a_height);
var y1 = (function (){var x__5110__auto__ = a_y;
var y__5111__auto__ = b_y;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y2 = (function (){var x__5113__auto__ = ra_y;
var y__5114__auto__ = rb_y;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var height = (y2 - y1);
var rb_x = (b_x + b_width);
var width = (a_width - (rb_x - a_x));
if((((width > (0))) && ((height > (0))))){
return app.common.geom.shapes.grid_layout.areas.make_area.cljs$core$IFn$_invoke$arity$4(rb_x,y1,width,height);
} else {
return null;
}
});
app.common.geom.shapes.grid_layout.areas.difference = (function app$common$geom$shapes$grid_layout$areas$difference(area_a,area_b){
if((((area_b == null)) || ((((!(app.common.geom.shapes.grid_layout.areas.intersects_QMARK_(area_a,area_b)))) || (app.common.geom.shapes.grid_layout.areas.contains_QMARK_(area_b,area_a)))))){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__47596_SHARP_){
return (p1__47596_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__47596_SHARP_.cljs$core$IFn$_invoke$arity$2(area_a,area_b) : p1__47596_SHARP_.call(null,area_a,area_b));
})),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.shapes.grid_layout.areas.top_rect,app.common.geom.shapes.grid_layout.areas.left_rect,app.common.geom.shapes.grid_layout.areas.right_rect,app.common.geom.shapes.grid_layout.areas.bottom_rect], null));
}
});

//# sourceMappingURL=app.common.geom.shapes.grid_layout.areas.js.map
