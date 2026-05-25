import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.math.js";
goog.provide('app.common.geom.shapes.corners');
app.common.geom.shapes.corners.zero_div = (function app$common$geom$shapes$corners$zero_div(a,b){
if(app.common.math.almost_zero_QMARK_(b)){
return Infinity;
} else {
return (a / b);
}
});
app.common.geom.shapes.corners.fix_radius = (function app$common$geom$shapes$corners$fix_radius(var_args){
var G__47278 = arguments.length;
switch (G__47278) {
case 3:
return app.common.geom.shapes.corners.fix_radius.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 6:
return app.common.geom.shapes.corners.fix_radius.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.corners.fix_radius.cljs$core$IFn$_invoke$arity$3 = (function (width,height,r){
var f = (function (){var x__5113__auto__ = (function (){var x__5113__auto__ = (1);
var y__5114__auto__ = app.common.geom.shapes.corners.zero_div(width,((2) * r));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var y__5114__auto__ = app.common.geom.shapes.corners.zero_div(height,((2) * r));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
if((f < (1))){
return (r * f);
} else {
return r;
}
}));

(app.common.geom.shapes.corners.fix_radius.cljs$core$IFn$_invoke$arity$6 = (function (width,height,r1,r2,r3,r4){
var f = (function (){var x__5113__auto__ = (function (){var x__5113__auto__ = (function (){var x__5113__auto__ = (function (){var x__5113__auto__ = (1);
var y__5114__auto__ = app.common.geom.shapes.corners.zero_div(width,(r1 + r2));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var y__5114__auto__ = app.common.geom.shapes.corners.zero_div(height,(r2 + r3));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var y__5114__auto__ = app.common.geom.shapes.corners.zero_div(width,(r3 + r4));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var y__5114__auto__ = app.common.geom.shapes.corners.zero_div(height,(r4 + r1));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
if((f < (1))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(r1 * f),(r2 * f),(r3 * f),(r4 * f)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r1,r2,r3,r4], null);
}
}));

(app.common.geom.shapes.corners.fix_radius.cljs$lang$maxFixedArity = 6);

/**
 * Retrieve the effective value for the corner given a single value for corner.
 */
app.common.geom.shapes.corners.shape_corners_1 = (function app$common$geom$shapes$corners$shape_corners_1(p__47283){
var map__47284 = p__47283;
var map__47284__$1 = cljs.core.__destructure_map(map__47284);
var shape = map__47284__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47284__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47284__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var r1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47284__$1,new cljs.core.Keyword(null,"r1","r1",690974900));
if((((!((r1 == null)))) && ((!(app.common.math.almost_zero_QMARK_(r1)))))){
return app.common.geom.shapes.corners.fix_radius.cljs$core$IFn$_invoke$arity$3(width,height,r1);
} else {
return (0);
}
});
/**
 * Retrieve the effective value for the corner given four values for the corners.
 */
app.common.geom.shapes.corners.shape_corners_4 = (function app$common$geom$shapes$corners$shape_corners_4(p__47287){
var map__47288 = p__47287;
var map__47288__$1 = cljs.core.__destructure_map(map__47288);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47288__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47288__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var r1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47288__$1,new cljs.core.Keyword(null,"r1","r1",690974900));
var r2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47288__$1,new cljs.core.Keyword(null,"r2","r2",252844174));
var r3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47288__$1,new cljs.core.Keyword(null,"r3","r3",-2027148174));
var r4 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47288__$1,new cljs.core.Keyword(null,"r4","r4",1134323163));
if((((!((r1 == null)))) && ((((!((r2 == null)))) && ((((!((r3 == null)))) && ((!((r4 == null)))))))))){
return app.common.geom.shapes.corners.fix_radius.cljs$core$IFn$_invoke$arity$6(width,height,r1,r2,r3,r4);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r1,r2,r3,r4], null);
}
});
/**
 * Scales round corners
 */
app.common.geom.shapes.corners.update_corners_scale = (function app$common$geom$shapes$corners$update_corners_scale(shape,scale){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"r1","r1",690974900),cljs.core._STAR_,scale),new cljs.core.Keyword(null,"r2","r2",252844174),cljs.core._STAR_,scale),new cljs.core.Keyword(null,"r3","r3",-2027148174),cljs.core._STAR_,scale),new cljs.core.Keyword(null,"r4","r4",1134323163),cljs.core._STAR_,scale);
});

//# sourceMappingURL=app.common.geom.shapes.corners.js.map
