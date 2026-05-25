import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.math.js";
import "./app.common.types.path.helpers.js";
import "./app.common.types.path.impl.js";
import "./clojure.set.js";
goog.provide('app.common.types.path.segment');
app.common.types.path.segment.update_handler = (function app$common$types$path$segment$update_handler(command,prefix,point){
var vec__49732 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefix,new cljs.core.Keyword(null,"c1","c1",1132530803)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c1x","c1x",-1789291378),new cljs.core.Keyword(null,"c1y","c1y",-1210747344)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c2x","c2x",-699963108),new cljs.core.Keyword(null,"c2y","c2y",1361944924)], null));
var cox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49732,(0),null);
var coy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49732,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(command,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),cox], null),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),coy], null),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point));
});
app.common.types.path.segment.get_handler = (function app$common$types$path$segment$get_handler(p__49742,prefix){
var map__49743 = p__49742;
var map__49743__$1 = cljs.core.__destructure_map(map__49743);
var command = map__49743__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49743__$1,new cljs.core.Keyword(null,"params","params",710516235));
var cx = app.common.data.prefix_keyword(prefix,new cljs.core.Keyword(null,"x","x",2099068185));
var cy = app.common.data.prefix_keyword(prefix,new cljs.core.Keyword(null,"y","y",-1757859776));
if(cljs.core.truth_((function (){var and__5023__auto__ = command;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.contains_QMARK_(params,cx)) && (cljs.core.contains_QMARK_(params,cy)));
} else {
return and__5023__auto__;
}
})())){
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cx),cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cy));
} else {
return null;
}
});
/**
 * Retrieve a map where for every point will retrieve a list of
 *   the handlers that are associated with that point.
 *   point -> [[index, prefix]]
 */
app.common.types.path.segment.get_handlers = (function app$common$types$path$segment$get_handlers(content){
var prev_point_STAR_ = cljs.core.volatile_BANG_(null);
var vec_conj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY);
return app.common.types.path.impl._reduce(content,(function (result,index,type,_,___$1,___$2,___$3,x,y){
var curr_point = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y);
var prev_point = cljs.core.deref(prev_point_STAR_);
cljs.core.vreset_BANG_(prev_point_STAR_,curr_point);

if(cljs.core.truth_((function (){var and__5023__auto__ = prev_point;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curve-to","curve-to",-936461191),type);
} else {
return and__5023__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,prev_point,vec_conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"c1","c1",1132530803)], null)),curr_point,vec_conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"c2","c2",-1561880371)], null));
} else {
return result;
}
}),cljs.core.PersistentArrayMap.EMPTY);
});
app.common.types.path.segment.point_indices = (function app$common$types$path$segment$point_indices(content,point){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49751){
var vec__49752 = p__49751;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49752,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49752,(1),null);
return index;
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49755){
var vec__49756 = p__49755;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49756,(0),null);
var segment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49756,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(point,app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(segment));
}),app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(content)));
});
/**
 * Returns [[index prefix] ...] of all handlers associated with point.
 */
app.common.types.path.segment.handler_indices = (function app$common$types$path$segment$handler_indices(content,point){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__49763){
var vec__49764 = p__49763;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49764,(0),null);
var vec__49767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49764,(1),null);
var cur_segment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49767,(0),null);
var pre_segment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49767,(1),null);
if((((!((pre_segment == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curve-to","curve-to",-936461191),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(cur_segment))))){
var cur_pos = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(cur_segment);
var pre_pos = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(pre_segment);
var G__49770 = cljs.core.PersistentVector.EMPTY;
var G__49770__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pre_pos,point))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49770,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"c1","c1",1132530803)], null)):G__49770);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur_pos,point)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49770__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"c2","c2",-1561880371)], null));
} else {
return G__49770__$1;
}
} else {
return cljs.core.PersistentVector.EMPTY;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(app.common.data.with_prev(content))], 0));
});
/**
 * Calculates the opposite handler index given a content, index and prefix.
 */
app.common.types.path.segment.opposite_index = (function app$common$types$path$segment$opposite_index(content,index,prefix){
var point = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefix,new cljs.core.Keyword(null,"c2","c2",-1561880371)))?app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(content,index)):app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(content,(index - (1)))));
var point__GT_handlers = app.common.types.path.segment.get_handlers(content);
var handlers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49771){
var vec__49772 = p__49771;
var ci = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49772,(0),null);
var cp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49772,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(index,ci)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prefix,cp)));
}),(point__GT_handlers.cljs$core$IFn$_invoke$arity$1 ? point__GT_handlers.cljs$core$IFn$_invoke$arity$1(point) : point__GT_handlers.call(null,point)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(handlers),(1))){
return cljs.core.first(handlers);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"c1","c1",1132530803),prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(content),index)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index - (1)),new cljs.core.Keyword(null,"c2","c2",-1561880371)], null);
} else {
return null;

}
}
});
/**
 * Given a segment index and prefix, get a handler point
 */
app.common.types.path.segment.get_handler_point = (function app$common$types$path$segment$get_handler_point(content,index,prefix){
if((((!((index == null)))) && ((!((content == null)))))){
return app.common.types.path.impl._lookup(content,index,(function (command,c1x,c1y,c2x,c2y,x,y){
var prefix__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curve-to","curve-to",-936461191),command))?prefix:null);
var G__49779 = prefix__$1;
var G__49779__$1 = (((G__49779 instanceof cljs.core.Keyword))?G__49779.fqn:null);
switch (G__49779__$1) {
case "c1":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(c1x,c1y);

break;
case "c2":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(c2x,c2y);

break;
default:
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y);

}
}));
} else {
return null;
}
});
app.common.types.path.segment.handler__GT_node = (function app$common$types$path$segment$handler__GT_node(content,index,prefix){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefix,new cljs.core.Keyword(null,"c1","c1",1132530803))){
return app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(content,(index - (1))));
} else {
return app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(content,index));
}
});
/**
 * Given a point and its handler, gives the symmetric handler
 */
app.common.types.path.segment.calculate_opposite_handler = (function app$common$types$path$segment$calculate_opposite_handler(point,handler){
var handler_vector = app.common.geom.point.to_vec(point,handler);
return app.common.geom.point.add(point,app.common.geom.point.negate(handler_vector));
});
/**
 * Returns points for the given segment, faster version of
 *   the `content->points`.
 */
app.common.types.path.segment.get_points = (function app$common$types$path$segment$get_points(content){
var cache = content.cache;
if((!((cache == null)))){
var result = cache.get("get-points");
if(cljs.core.truth_(result)){
return result;
} else {
var result__$1 = app.common.types.path.impl._walk(content,(function (type,_,___$1,___$2,___$3,x,y){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"close-path","close-path",1220079654))){
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y);
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);
cache.set("get-points",result__$1);

return result__$1;
}
} else {
return app.common.types.path.impl._walk(content,(function (type,_,___$1,___$2,___$3,x,y){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"close-path","close-path",1220079654))){
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y);
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);
}
});
/**
 * Given a path returns a list of lines that approximate the path
 */
app.common.types.path.segment.path__GT_lines = (function app$common$types$path$segment$path__GT_lines(shape){
var command = cljs.core.first(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape));
var pending = cljs.core.rest(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape));
var result = cljs.core.PersistentVector.EMPTY;
var last_start = null;
var prev_point = null;
while(true){
var temp__5823__auto__ = command;
if(cljs.core.truth_(temp__5823__auto__)){
var map__49794 = temp__5823__auto__;
var map__49794__$1 = cljs.core.__destructure_map(map__49794);
var command__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49794__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49794__$1,new cljs.core.Keyword(null,"params","params",710516235));
var point = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"close-path","close-path",1220079654),command__$1))?last_start:app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(params));
var result__$1 = (function (){var G__49795 = command__$1;
var G__49795__$1 = (((G__49795 instanceof cljs.core.Keyword))?G__49795.fqn:null);
switch (G__49795__$1) {
case "line-to":
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_point,point], null));

break;
case "curve-to":
var h1 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"c1x","c1x",-1789291378).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"c1y","c1y",-1210747344).cljs$core$IFn$_invoke$arity$1(params));
var h2 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"c2x","c2x",-699963108).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"c2y","c2y",1361944924).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,app.common.types.path.helpers.curve__GT_lines(prev_point,point,h1,h2));

break;
case "move-to":
var G__49796 = result;
if(cljs.core.truth_(last_start)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49796,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_point,last_start], null));
} else {
return G__49796;
}

break;
default:
return result;

}
})();
var last_start__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-to","move-to",-127537048),command__$1))?point:last_start);
var G__49997 = cljs.core.first(pending);
var G__49998 = cljs.core.rest(pending);
var G__49999 = result__$1;
var G__50000 = last_start__$1;
var G__50001 = point;
command = G__49997;
pending = G__49998;
result = G__49999;
last_start = G__50000;
prev_point = G__50001;
continue;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_point,last_start], null));
}
break;
}
});
app.common.types.path.segment.curve_closest_point = (function app$common$types$path$segment$curve_closest_point(position,start,end,h1,h2,precision){
var d = cljs.core.memoize((function (t){
return app.common.geom.point.distance(position,app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$5(start,end,h1,h2,t));
}));
var t1 = 0.0;
var t2 = 1.0;
while(true){
if((app.common.math.abs((t1 - t2)) <= precision)){
return cljs.core.with_meta(app.common.types.path.helpers.curve_values.cljs$core$IFn$_invoke$arity$5(start,end,h1,h2,t1),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),t1,new cljs.core.Keyword(null,"from-p","from-p",2047181810),start,new cljs.core.Keyword(null,"to-p","to-p",1750614589),end], null));
} else {
var ht = (t1 + ((t2 - t1) / (2)));
var ht1 = (t1 + ((t2 - t1) / (4)));
var ht2 = (t1 + (((3) * (t2 - t1)) / (4)));
var vec__49809 = (((d(ht1) < d(ht2)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1,ht], null):(((d(ht2) < d(ht1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ht,t2], null):(((((d(ht) < d(t1))) && ((d(ht) < d(t2)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ht1,ht2], null):(((d(t1) < d(t2)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1,ht], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ht,t2], null)
))));
var t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49809,(0),null);
var t2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49809,(1),null);
var G__50003 = t1__$1;
var G__50004 = t2__$1;
t1 = G__50003;
t2 = G__50004;
continue;
}
break;
}
});
/**
 * Finds the closest point in the line segment defined by from-p and to-p
 */
app.common.types.path.segment.line_closest_point = (function app$common$types$path$segment$line_closest_point(position,from_p,to_p){
var e1 = app.common.geom.point.to_vec(from_p,to_p);
var e2 = app.common.geom.point.to_vec(from_p,position);
var len2 = (app.common.math.sq(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(e1)) + app.common.math.sq(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(e1)));
var t = (app.common.geom.point.dot(e1,e2) / len2);
if((((t >= (0))) && ((((t <= (1))) && ((!(app.common.math.almost_zero_QMARK_(len2)))))))){
return cljs.core.with_meta(app.common.geom.point.add(from_p,app.common.geom.point.scale(e1,t)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),t,new cljs.core.Keyword(null,"from-p","from-p",2047181810),from_p,new cljs.core.Keyword(null,"to-p","to-p",1750614589),to_p], null));
} else {
if((app.common.geom.point.distance(position,from_p) <= app.common.geom.point.distance(position,to_p))){
return from_p;
} else {
return to_p;
}
}
});
/**
 * Returns the closest point in the path to the position, at a given precision
 */
app.common.types.path.segment.closest_point = (function app$common$types$path$segment$closest_point(content,position,precision){
var point_PLUS_distance = (function (p__49826){
var vec__49827 = p__49826;
var cur_segment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49827,(0),null);
var prev_segment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49827,(1),null);
var from_p = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(prev_segment);
var to_p = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(cur_segment);
var h1 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cur_segment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"c1x","c1x",-1789291378)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cur_segment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"c1y","c1y",-1210747344)], null)));
var h2 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cur_segment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"c2x","c2x",-699963108)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cur_segment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"c2y","c2y",1361944924)], null)));
var point = (function (){var G__49830 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(cur_segment);
var G__49830__$1 = (((G__49830 instanceof cljs.core.Keyword))?G__49830.fqn:null);
switch (G__49830__$1) {
case "line-to":
return app.common.types.path.segment.line_closest_point(position,from_p,to_p);

break;
case "curve-to":
return app.common.types.path.segment.curve_closest_point(position,from_p,to_p,h1,h2,precision);

break;
default:
return null;

}
})();
if(cljs.core.truth_(point)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,app.common.geom.point.distance(point,position)], null);
} else {
return null;
}
});
var find_min_point = (function (p__49833,p__49834){
var vec__49835 = p__49833;
var min_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49835,(0),null);
var min_dist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49835,(1),null);
var acc = vec__49835;
var vec__49838 = p__49834;
var cur_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49838,(0),null);
var cur_dist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49838,(1),null);
var cur = vec__49838;
if((((!((acc == null)))) && (((cljs.core.not(cur)) || ((min_dist <= cur_dist)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [min_p,min_dist], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_p,cur_dist], null);
}
});
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(find_min_point,cljs.core.map.cljs$core$IFn$_invoke$arity$2(point_PLUS_distance,app.common.data.with_prev(content))));
});
/**
 * Remove all curves that have both handlers in the same position that the
 *   beginning and end points. This makes them really line-to commands.
 * 
 *   NOTE: works with plain format so it expects to receive a vector
 */
app.common.types.path.segment.remove_line_curves = (function app$common$types$path$segment$remove_line_curves(content){
if(cljs.core.vector_QMARK_(content)){
} else {
throw (new Error(["Assert failed: ","expected a plain format for `content`","\n","(vector? content)"].join('')));
}

var with_prev = app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(app.common.data.with_prev(content));
var process_segment = (function (content__$1,p__49846){
var vec__49847 = p__49846;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49847,(0),null);
var vec__49850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49847,(1),null);
var segment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49850,(0),null);
var prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49850,(1),null);
var cur_point = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(segment);
var pre_point = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(prev);
var handler_c1 = app.common.types.path.segment.get_handler(segment,new cljs.core.Keyword(null,"c1","c1",1132530803));
var handler_c2 = app.common.types.path.segment.get_handler(segment,new cljs.core.Keyword(null,"c2","c2",-1561880371));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curve-to","curve-to",-936461191),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(segment))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur_point,handler_c2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pre_point,handler_c1)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(content__$1,index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"line-to","line-to",1332939595),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cur_point)], null));
} else {
return content__$1;
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_segment,content,with_prev);
});
/**
 * Changes the content to make a point a 'corner'
 */
app.common.types.path.segment.make_corner_point = (function app$common$types$path$segment$make_corner_point(content,point){
var handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.types.path.segment.get_handlers(content),point);
var transform_content = (function (content__$1,p__49858){
var vec__49859 = p__49858;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49859,(0),null);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49859,(1),null);
var cx = app.common.data.prefix_keyword(prefix,new cljs.core.Keyword(null,"x","x",2099068185));
var cy = app.common.data.prefix_keyword(prefix,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.assoc_in(cljs.core.assoc_in(content__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"params","params",710516235),cx], null),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"params","params",710516235),cy], null),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point));
});
var content__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(transform_content,cljs.core.vec(content),handlers);
var content__$2 = app.common.types.path.segment.remove_line_curves(content__$1);
return app.common.types.path.impl.from_plain(content__$2);
});
app.common.types.path.segment.line__GT_curve = (function app$common$types$path$segment$line__GT_curve(from_p,segment){
var to_p = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(segment);
var v = app.common.geom.point.to_vec(from_p,to_p);
var d = app.common.geom.point.distance(from_p,to_p);
var dv1 = app.common.geom.point.scale(app.common.geom.point.normal_left(v),(d / (3)));
var h1 = app.common.geom.point.add(from_p,dv1);
var dv2 = app.common.geom.point.scale(app.common.geom.point.unit(app.common.geom.point.to_vec(to_p,h1)),(d / (3)));
var h2 = app.common.geom.point.add(to_p,dv2);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(segment,new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"curve-to","curve-to",-936461191)),new cljs.core.Keyword(null,"params","params",710516235),(function (params){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,params),new cljs.core.Keyword(null,"c1x","c1x",-1789291378),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(h1)),new cljs.core.Keyword(null,"c1y","c1y",-1210747344),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(h1)),new cljs.core.Keyword(null,"c2x","c2x",-699963108),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(h2)),new cljs.core.Keyword(null,"c2y","c2y",1361944924),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(h2));
}));
});
app.common.types.path.segment.is_curve_QMARK_ = (function app$common$types$path$segment$is_curve_QMARK_(content,point){
var handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.types.path.segment.get_handlers(content),point);
var handler_points = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49862_SHARP_){
return app.common.types.path.segment.get_handler_point(content,cljs.core.first(p1__49862_SHARP_),cljs.core.second(p1__49862_SHARP_));
}),handlers);
return cljs.core.some((function (p1__49863_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(point,p1__49863_SHARP_);
}),handler_points);
});
app.common.types.path.segment.xf_COLON_mapcat_points = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__49864_SHARP_){
return (new cljs.core.List(null,new cljs.core.Keyword(null,"next-p","next-p",-465723819).cljs$core$IFn$_invoke$arity$1(p1__49864_SHARP_),(new cljs.core.List(null,new cljs.core.Keyword(null,"prev-p","prev-p",-1536591838).cljs$core$IFn$_invoke$arity$1(p1__49864_SHARP_),null,(1),null)),(2),null));
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_));
/**
 * Changes the content to make the point a 'curve'. The handlers will be
 *   positioned in the same vector that results from the previous->next
 *   points but with fixed length; return a plain segments vector
 */
app.common.types.path.segment.make_curve_point = (function app$common$types$path$segment$make_curve_point(content,point){
var indices = app.common.types.path.segment.point_indices(content,point);
var content__$1 = cljs.core.vec(content);
var vectors = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (index){
var segment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(content__$1,index);
var prev_i = (index - (1));
var prev = (((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(segment)))))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(content__$1,prev_i):null);
var next_i = (index + (1));
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(content__$1,next_i);
var next__$1 = (((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(next)))))?next:null);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"prev-i","prev-i",182192286),(((!((prev == null))))?prev_i:null),new cljs.core.Keyword(null,"prev-c","prev-c",1580249416),prev,new cljs.core.Keyword(null,"prev-p","prev-p",-1536591838),app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(prev),new cljs.core.Keyword(null,"next-i","next-i",-22842911),(((!((next__$1 == null))))?next_i:null),new cljs.core.Keyword(null,"next-c","next-c",-776594929),next__$1,new cljs.core.Keyword(null,"next-p","next-p",-465723819),app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(next__$1),new cljs.core.Keyword(null,"segment","segment",-964921196),segment], null);
}),indices);
var points = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,app.common.types.path.segment.xf_COLON_mapcat_points,vectors);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(points),(2))){
var vec__49873 = cljs.core.vec(points);
var fpoint = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49873,(0),null);
var spoint = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49873,(1),null);
var v1 = app.common.geom.point.to_vec(fpoint,point);
var v2 = app.common.geom.point.to_vec(fpoint,spoint);
var vp = app.common.geom.point.project(v1,v2);
var vh = app.common.geom.point.subtract(v1,vp);
var add_curve = (function (content__$2,p__49876){
var map__49877 = p__49876;
var map__49877__$1 = cljs.core.__destructure_map(map__49877);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49877__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var prev_p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49877__$1,new cljs.core.Keyword(null,"prev-p","prev-p",-1536591838));
var next_p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49877__$1,new cljs.core.Keyword(null,"next-p","next-p",-465723819));
var next_i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49877__$1,new cljs.core.Keyword(null,"next-i","next-i",-22842911));
var curr_segment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(content__$2,index);
var curr_command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(curr_segment,new cljs.core.Keyword(null,"command","command",-894540724));
var next_segment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(content__$2,next_i);
var next_command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(next_segment,new cljs.core.Keyword(null,"command","command",-894540724));
var prev_h = (((!((prev_p == null))))?app.common.geom.point.add(prev_p,vh):null);
var next_h = (((!((next_p == null))))?app.common.geom.point.add(next_p,vh):null);
var prev_correction = (((!((prev_h == null))))?app.common.geom.point.scale(app.common.geom.point.to_vec(prev_h,point),((1) / (3))):null);
var next_correction = (((!((next_h == null))))?app.common.geom.point.scale(app.common.geom.point.to_vec(next_h,point),((1) / (3))):null);
var prev_h__$1 = (((!((prev_h == null))))?app.common.geom.point.add(prev_h,prev_correction):null);
var next_h__$1 = (((!((next_h == null))))?app.common.geom.point.add(next_h,next_correction):null);
var G__49879 = content__$2;
var G__49879__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line-to","line-to",1332939595),curr_command)) && ((!((prev_p == null))))))?cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__49879,index,app.common.types.path.helpers.update_curve_to,prev_p,prev_h__$1):G__49879);
var G__49879__$2 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line-to","line-to",1332939595),next_command)) && ((!((next_p == null))))))?cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__49879__$1,next_i,app.common.types.path.helpers.update_curve_to,next_h__$1,next_p):G__49879__$1);
var G__49879__$3 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curve-to","curve-to",-936461191),curr_command)) && ((!((prev_p == null))))))?cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__49879__$2,index,app.common.types.path.segment.update_handler,new cljs.core.Keyword(null,"c2","c2",-1561880371),prev_h__$1):G__49879__$2);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curve-to","curve-to",-936461191),next_command)) && ((!((next_p == null)))))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__49879__$3,next_i,app.common.types.path.segment.update_handler,new cljs.core.Keyword(null,"c1","c1",1132530803),next_h__$1);
} else {
return G__49879__$3;
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_curve,content__$1,vectors);
} else {
var add_curve = (function (content__$2,p__49880){
var map__49882 = p__49880;
var map__49882__$1 = cljs.core.__destructure_map(map__49882);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49882__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var segment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49882__$1,new cljs.core.Keyword(null,"segment","segment",-964921196));
var prev_p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49882__$1,new cljs.core.Keyword(null,"prev-p","prev-p",-1536591838));
var next_c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49882__$1,new cljs.core.Keyword(null,"next-c","next-c",-776594929));
var next_i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49882__$1,new cljs.core.Keyword(null,"next-i","next-i",-22842911));
var G__49884 = content__$2;
var G__49884__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line-to","line-to",1332939595),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(segment)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__49884,index,(function (p1__49866_SHARP_){
return app.common.types.path.segment.line__GT_curve(prev_p,p1__49866_SHARP_);
})):G__49884);
var G__49884__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curve-to","curve-to",-936461191),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(segment)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__49884__$1,index,(function (p1__49867_SHARP_){
return app.common.types.path.segment.line__GT_curve(prev_p,p1__49867_SHARP_);
})):G__49884__$1);
var G__49884__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line-to","line-to",1332939595),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(next_c)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__49884__$2,next_i,(function (p1__49868_SHARP_){
return app.common.types.path.segment.line__GT_curve(point,p1__49868_SHARP_);
})):G__49884__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curve-to","curve-to",-936461191),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(next_c))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__49884__$3,next_i,(function (p1__49869_SHARP_){
return app.common.types.path.segment.line__GT_curve(point,p1__49869_SHARP_);
}));
} else {
return G__49884__$3;
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_curve,content__$1,vectors);
}
});
/**
 * Given a content and a set of points return all the segments in the path
 *   that uses the points
 */
app.common.types.path.segment.get_segments_with_points = (function app$common$types$path$segment$get_segments_with_points(content,points){
var point_set = cljs.core.set(points);
var result = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var prev_point = null;
var start_point = null;
var index = (0);
var content__$1 = cljs.core.seq(content);
while(true){
var temp__5823__auto__ = cljs.core.first(content__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var map__49887 = temp__5823__auto__;
var map__49887__$1 = cljs.core.__destructure_map(map__49887);
var segment = map__49887__$1;
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49887__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var close_path_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(command,new cljs.core.Keyword(null,"close-path","close-path",1220079654));
var move_to_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(command,new cljs.core.Keyword(null,"move-to","move-to",-127537048));
var cur_point = ((close_path_QMARK_)?start_point:app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(segment));
var prev_point__$1 = ((move_to_QMARK_)?null:prev_point);
var start_point__$1 = ((move_to_QMARK_)?cur_point:start_point);
var result__$1 = (function (){var G__49888 = result;
if((((!((prev_point__$1 == null)))) && (((cljs.core.contains_QMARK_(point_set,prev_point__$1)) && (cljs.core.contains_QMARK_(point_set,cur_point)))))){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__49888,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(segment,new cljs.core.Keyword(null,"start","start",-355208981),prev_point__$1),new cljs.core.Keyword(null,"end","end",-268185958),cur_point),new cljs.core.Keyword(null,"index","index",-1531685915),index));
} else {
return G__49888;
}
})();
var G__50022 = result__$1;
var G__50023 = cur_point;
var G__50024 = start_point__$1;
var G__50025 = (index + (1));
var G__50026 = cljs.core.rest(content__$1);
result = G__50022;
prev_point = G__50023;
start_point = G__50024;
index = G__50025;
content__$1 = G__50026;
continue;
} else {
return cljs.core.persistent_BANG_(result);
}
break;
}
});
/**
 * Given a content creates splits commands between points with new segments
 */
app.common.types.path.segment.split_segments = (function app$common$types$path$segment$split_segments(content,points,value){
var split_command = (function (p__49889){
var map__49890 = p__49889;
var map__49890__$1 = cljs.core.__destructure_map(map__49890);
var segment = map__49890__$1;
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49890__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49890__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49890__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49890__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var G__49891 = command;
var G__49891__$1 = (((G__49891 instanceof cljs.core.Keyword))?G__49891.fqn:null);
switch (G__49891__$1) {
case "line-to":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,app.common.types.path.helpers.split_line_to(start,segment,value)], null);

break;
case "curve-to":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,app.common.types.path.helpers.split_curve_to(start,segment,value)], null);

break;
case "close-path":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.path.helpers.make_line_to(app.common.geom.point.lerp(start,end,value)),segment], null)], null);

break;
default:
return null;

}
});
var segment_changes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(split_command),app.common.types.path.segment.get_segments_with_points(content,points));
var process_segments = (function (p__49892){
var vec__49893 = p__49892;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49893,(0),null);
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49893,(1),null);
if(cljs.core.contains_QMARK_(segment_changes,index)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(segment_changes,index);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [command], null);
}
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(process_segments),app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(content));
});
/**
 * Calculates the next-node to be inserted.
 */
app.common.types.path.segment.next_node = (function app$common$types$path$segment$next_node(content,position,prev_point,prev_handler){
var position__$1 = cljs.core.select_keys(position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
var last_command = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(cljs.core.last(content));
var add_line_QMARK_ = (function (){var and__5023__auto__ = prev_point;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.not(prev_handler)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_command,new cljs.core.Keyword(null,"close-path","close-path",1220079654))));
} else {
return and__5023__auto__;
}
})();
var add_curve_QMARK_ = (function (){var and__5023__auto__ = prev_point;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = prev_handler;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_command,new cljs.core.Keyword(null,"close-path","close-path",1220079654));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(add_line_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"line-to","line-to",1332939595),new cljs.core.Keyword(null,"params","params",710516235),position__$1], null);
} else {
if(cljs.core.truth_(add_curve_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"curve-to","curve-to",-936461191),new cljs.core.Keyword(null,"params","params",710516235),app.common.types.path.helpers.make_curve_params.cljs$core$IFn$_invoke$arity$2(position__$1,prev_handler)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"params","params",710516235),position__$1], null);

}
}
});
/**
 * Removes from content the points given. Will try to reconstruct the paths
 *   to keep everything consistent
 */
app.common.types.path.segment.remove_nodes = (function app$common$types$path$segment$remove_nodes(content,points){
if(cljs.core.empty_QMARK_(points)){
return content;
} else {
var content__$1 = app.common.data.with_prev(content);
var result = cljs.core.PersistentVector.EMPTY;
var last_handler = null;
var G__49902 = cljs.core.first(content__$1);
var vec__49903 = G__49902;
var cur_segment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49903,(0),null);
var prev_segment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49903,(1),null);
var content__$2 = cljs.core.rest(content__$1);
var result__$1 = result;
var last_handler__$1 = last_handler;
var G__49902__$1 = G__49902;
var content__$3 = content__$2;
while(true){
var result__$2 = result__$1;
var last_handler__$2 = last_handler__$1;
var vec__49911 = G__49902__$1;
var cur_segment__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49911,(0),null);
var prev_segment__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49911,(1),null);
var content__$4 = content__$3;
if((cur_segment__$1 == null)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.flatten(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (result__$1,last_handler__$1,G__49902__$1,content__$3,result__$2,last_handler__$2,vec__49911,cur_segment__$1,prev_segment__$1,content__$4,result,last_handler,G__49902,vec__49903,cur_segment,prev_segment,content__$2,content__$1){
return (function (p1__49898_SHARP_){
return (cljs.core.count(p1__49898_SHARP_) > (1));
});})(result__$1,last_handler__$1,G__49902__$1,content__$3,result__$2,last_handler__$2,vec__49911,cur_segment__$1,prev_segment__$1,content__$4,result,last_handler,G__49902,vec__49903,cur_segment,prev_segment,content__$2,content__$1))
,result__$2)));
} else {
var move_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(cur_segment__$1));
var curve_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curve-to","curve-to",-936461191),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(cur_segment__$1));
var result__$3 = ((move_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__$2,cljs.core.PersistentVector.EMPTY):result__$2);
var subpath = cljs.core.peek(result__$3);
var point = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(cur_segment__$1);
var old_prev_point = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(prev_segment__$1);
var new_prev_point = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(cljs.core.peek(subpath));
var remove_QMARK_ = cljs.core.contains_QMARK_(points,point);
var cur_handler = ((((cljs.core.not(last_handler__$2)) && (((remove_QMARK_) && (curve_QMARK_)))))?cljs.core.select_keys(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cur_segment__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c1x","c1x",-1789291378),new cljs.core.Keyword(null,"c1y","c1y",-1210747344)], null)):(((!(remove_QMARK_)))?null:last_handler__$2
));
var cur_segment__$2 = (function (){var G__49914 = cur_segment__$1;
var G__49914__$1 = (((((!(move_QMARK_))) && (cljs.core.empty_QMARK_(subpath))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__49914,new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"move-to","move-to",-127537048),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),cljs.core.select_keys(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cur_segment__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null))], 0)):G__49914);
if(((curve_QMARK_) && (((cljs.core.seq(subpath)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_prev_point,new_prev_point)))))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49914__$1,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge,last_handler__$2);
} else {
return G__49914__$1;
}
})();
var head_idx = (cljs.core.count(result__$3) - (1));
var result__$4 = (function (){var G__49915 = result__$3;
if((!(remove_QMARK_))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49915,head_idx,cljs.core.conj,cur_segment__$2);
} else {
return G__49915;
}
})();
var G__50045 = result__$4;
var G__50046 = cur_handler;
var G__50047 = cljs.core.first(content__$4);
var G__50048 = cljs.core.rest(content__$4);
result__$1 = G__50045;
last_handler__$1 = G__50046;
G__49902__$1 = G__50047;
content__$3 = G__50048;
continue;
}
break;
}
}
});
/**
 * Creates new segments between points that weren't previously.
 *   Returns plain segments vector.
 */
app.common.types.path.segment.join_nodes = (function app$common$types$path$segment$join_nodes(content,points){
var content__$1 = cljs.core.vec(content);
var segments_set = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958))),app.common.types.path.segment.get_segments_with_points(content__$1,points));
var create_line_segment = (function (point,other){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.path.helpers.make_move_to(point),app.common.types.path.helpers.make_line_to(other)], null);
});
var not_segment_QMARK_ = (function (point,other){
return (((!(cljs.core.contains_QMARK_(segments_set,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,other], null))))) && ((!(cljs.core.contains_QMARK_(segments_set,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [other,point], null))))));
});
var new_content = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.flatten(app.common.data.map_perm.cljs$core$IFn$_invoke$arity$3(create_line_segment,not_segment_QMARK_,points)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(content__$1,new_content);
});
/**
 * Removes the segments between the points given
 */
app.common.types.path.segment.separate_nodes = (function app$common$types$path$segment$separate_nodes(content,points){
var content__$1 = app.common.data.with_prev(content);
var result = cljs.core.PersistentVector.EMPTY;
var G__49923 = cljs.core.first(content__$1);
var vec__49924 = G__49923;
var cur_segment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49924,(0),null);
var prev_segment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49924,(1),null);
var content__$2 = cljs.core.rest(content__$1);
var result__$1 = result;
var G__49923__$1 = G__49923;
var content__$3 = content__$2;
while(true){
var result__$2 = result__$1;
var vec__49934 = G__49923__$1;
var cur_segment__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49934,(0),null);
var prev_segment__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49934,(1),null);
var content__$4 = content__$3;
if((cur_segment__$1 == null)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.flatten(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (result__$1,G__49923__$1,content__$3,result__$2,vec__49934,cur_segment__$1,prev_segment__$1,content__$4,result,G__49923,vec__49924,cur_segment,prev_segment,content__$2,content__$1){
return (function (p1__49919_SHARP_){
return (cljs.core.count(p1__49919_SHARP_) > (1));
});})(result__$1,G__49923__$1,content__$3,result__$2,vec__49934,cur_segment__$1,prev_segment__$1,content__$4,result,G__49923,vec__49924,cur_segment,prev_segment,content__$2,content__$1))
,result__$2)));
} else {
var prev_point = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(prev_segment__$1);
var cur_point = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(cur_segment__$1);
var cur_segment__$2 = (function (){var G__49937 = cur_segment__$1;
if(((cljs.core.contains_QMARK_(points,prev_point)) && (cljs.core.contains_QMARK_(points,cur_point)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__49937,new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"move-to","move-to",-127537048),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),cljs.core.select_keys(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cur_segment__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null))], 0));
} else {
return G__49937;
}
})();
var move_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(cur_segment__$2));
var result__$3 = ((move_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__$2,cljs.core.PersistentVector.EMPTY):result__$2);
var head_idx = (cljs.core.count(result__$3) - (1));
var result__$4 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(result__$3,head_idx,cljs.core.conj,cur_segment__$2);
var G__50056 = result__$4;
var G__50057 = cljs.core.first(content__$4);
var G__50058 = cljs.core.rest(content__$4);
result__$1 = G__50056;
G__49923__$1 = G__50057;
content__$3 = G__50058;
continue;
}
break;
}
});
/**
 * Given a list of sets adds the value to the target set
 */
app.common.types.path.segment.add_to_set = (function app$common$types$path$segment$add_to_set(set_list,target,value){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (it){
var G__49940 = it;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(it,target)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49940,value);
} else {
return G__49940;
}
}),set_list);
});
/**
 * Given a list of sets join two sets in the list into a new one
 */
app.common.types.path.segment.join_sets = (function app$common$types$path$segment$join_sets(set_list,target,other){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.filterv((function (p1__49941_SHARP_){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__49941_SHARP_,target)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__49941_SHARP_,other)));
}),set_list),clojure.set.union.cljs$core$IFn$_invoke$arity$2(target,other));
});
app.common.types.path.segment.group_segments = (function app$common$types$path$segment$group_segments(segments){
var result = cljs.core.PersistentVector.EMPTY;
var G__49946 = cljs.core.first(segments);
var map__49947 = G__49946;
var map__49947__$1 = cljs.core.__destructure_map(map__49947);
var segment = map__49947__$1;
var point_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49947__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var point_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49947__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var segments__$1 = cljs.core.rest(segments);
var result__$1 = result;
var G__49946__$1 = G__49946;
var segments__$2 = segments__$1;
while(true){
var result__$2 = result__$1;
var map__49953 = G__49946__$1;
var map__49953__$1 = cljs.core.__destructure_map(map__49953);
var segment__$1 = map__49953__$1;
var point_a__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49953__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var point_b__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49953__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var segments__$3 = segments__$2;
if((segment__$1 == null)){
return result__$2;
} else {
var set_a = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(((function (result__$1,G__49946__$1,segments__$2,result__$2,map__49953,map__49953__$1,segment__$1,point_a__$1,point_b__$1,segments__$3,result,G__49946,map__49947,map__49947__$1,segment,point_a,point_b,segments__$1){
return (function (p1__49943_SHARP_){
return cljs.core.contains_QMARK_(p1__49943_SHARP_,point_a__$1);
});})(result__$1,G__49946__$1,segments__$2,result__$2,map__49953,map__49953__$1,segment__$1,point_a__$1,point_b__$1,segments__$3,result,G__49946,map__49947,map__49947__$1,segment,point_a,point_b,segments__$1))
,result__$2);
var set_b = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(((function (result__$1,G__49946__$1,segments__$2,set_a,result__$2,map__49953,map__49953__$1,segment__$1,point_a__$1,point_b__$1,segments__$3,result,G__49946,map__49947,map__49947__$1,segment,point_a,point_b,segments__$1){
return (function (p1__49944_SHARP_){
return cljs.core.contains_QMARK_(p1__49944_SHARP_,point_b__$1);
});})(result__$1,G__49946__$1,segments__$2,set_a,result__$2,map__49953,map__49953__$1,segment__$1,point_a__$1,point_b__$1,segments__$3,result,G__49946,map__49947,map__49947__$1,segment,point_a,point_b,segments__$1))
,result__$2);
var result__$3 = (function (){var G__49954 = result__$2;
var G__49954__$1 = (((((set_a == null)) && ((set_b == null))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49954,cljs.core.PersistentHashSet.createAsIfByAssoc([point_b__$1,point_a__$1])):G__49954);
var G__49954__$2 = (((((!((set_a == null)))) && ((set_b == null))))?app.common.types.path.segment.add_to_set(G__49954__$1,set_a,point_b__$1):G__49954__$1);
var G__49954__$3 = (((((set_a == null)) && ((!((set_b == null))))))?app.common.types.path.segment.add_to_set(G__49954__$2,set_b,point_a__$1):G__49954__$2);
if((((!((set_a == null)))) && ((((!((set_b == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(set_a,set_b)))))){
return app.common.types.path.segment.join_sets(G__49954__$3,set_a,set_b);
} else {
return G__49954__$3;
}
})();
var G__50064 = result__$3;
var G__50065 = cljs.core.first(segments__$3);
var G__50066 = cljs.core.rest(segments__$3);
result__$1 = G__50064;
G__49946__$1 = G__50065;
segments__$2 = G__50066;
continue;
}
break;
}
});
app.common.types.path.segment.calculate_merge_points = (function app$common$types$path$segment$calculate_merge_points(group_segments,points){
var index_merge_point = (function (group){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[group,app.common.geom.point.center_points(group)],null));
});
var index_group = (function (point){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[point,app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__49958_SHARP_){
return cljs.core.contains_QMARK_(p1__49958_SHARP_,point);
}),group_segments)],null));
});
var group__GT_merge_point = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(index_merge_point),group_segments);
var point__GT_group = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(index_group),points);
return app.common.data.mapm.cljs$core$IFn$_invoke$arity$2((function (p1__49960_SHARP_,p2__49959_SHARP_){
return (group__GT_merge_point.cljs$core$IFn$_invoke$arity$1 ? group__GT_merge_point.cljs$core$IFn$_invoke$arity$1(p2__49959_SHARP_) : group__GT_merge_point.call(null,p2__49959_SHARP_));
}),point__GT_group);
});
/**
 * Replaces the points in a path for its merge-point
 */
app.common.types.path.segment.replace_points = (function app$common$types$path$segment$replace_points(content,point__GT_merge_point){
var replace_command = (function (segment){
var point = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(segment);
if(cljs.core.contains_QMARK_(point__GT_merge_point,point)){
var merge_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(point__GT_merge_point,point);
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(segment,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(merge_point),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(merge_point)], 0));
} else {
return segment;
}
});
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(replace_command,content);
});
/**
 * Reduces the contiguous segments in points to a single point
 */
app.common.types.path.segment.merge_nodes = (function app$common$types$path$segment$merge_nodes(content,points){
var segments = app.common.types.path.segment.get_segments_with_points(content,points);
if(cljs.core.seq(segments)){
var point__GT_merge_point = app.common.types.path.segment.calculate_merge_points(app.common.types.path.segment.group_segments(segments),points);
return app.common.types.path.segment.replace_points(app.common.types.path.segment.separate_nodes(content,points),point__GT_merge_point);
} else {
return content;
}
});
/**
 * Applies a transformation matrix over content and returns a new
 *   content as PathData instance.
 */
app.common.types.path.segment.transform_content = (function app$common$types$path$segment$transform_content(content,transform){
if((!((transform == null)))){
return app.common.types.path.impl._transform(app.common.types.path.impl.path_data(content),transform);
} else {
return content;
}
});
/**
 * Applies a displacement over content and returns a new content as
 *   PathData instance. Implemented in function of `transform-content`.
 */
app.common.types.path.segment.move_content = (function app$common$types$path$segment$move_content(content,move_vec){
var transform = app.common.geom.matrix.translate_matrix.cljs$core$IFn$_invoke$arity$1(move_vec);
return app.common.types.path.segment.transform_content(content,transform);
});
/**
 * Calculate extremities for the provided content
 */
app.common.types.path.segment.calculate_extremities = (function app$common$types$path$segment$calculate_extremities(content){
var points = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var content__$1 = cljs.core.not_empty(cljs.core.vec(content));
var from_p = null;
var move_p = null;
while(true){
if(cljs.core.truth_(content__$1)){
var last_p = cljs.core.peek(content__$1);
var content__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(last_p)))?cljs.core.pop(content__$1):content__$1);
var segment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(content__$2,(0));
var to_p = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(segment);
if(cljs.core.truth_(segment)){
var G__49972 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(segment);
var G__49972__$1 = (((G__49972 instanceof cljs.core.Keyword))?G__49972.fqn:null);
switch (G__49972__$1) {
case "move-to":
var G__50073 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(points,to_p);
var G__50074 = cljs.core.not_empty(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(content__$2,(1)));
var G__50075 = to_p;
var G__50076 = to_p;
points = G__50073;
content__$1 = G__50074;
from_p = G__50075;
move_p = G__50076;
continue;

break;
case "close-path":
var G__50077 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(points,move_p);
var G__50078 = cljs.core.not_empty(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(content__$2,(1)));
var G__50079 = move_p;
var G__50080 = move_p;
points = G__50077;
content__$1 = G__50078;
from_p = G__50079;
move_p = G__50080;
continue;

break;
case "line-to":
var G__50081 = (function (){var G__49973 = points;
if(cljs.core.truth_((function (){var and__5023__auto__ = from_p;
if(cljs.core.truth_(and__5023__auto__)){
return to_p;
} else {
return and__5023__auto__;
}
})())){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__49973,from_p),to_p);
} else {
return G__49973;
}
})();
var G__50082 = cljs.core.not_empty(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(content__$2,(1)));
var G__50083 = to_p;
var G__50084 = move_p;
points = G__50081;
content__$1 = G__50082;
from_p = G__50083;
move_p = G__50084;
continue;

break;
case "curve-to":
var c1 = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$2(segment,new cljs.core.Keyword(null,"c1","c1",1132530803));
var c2 = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$2(segment,new cljs.core.Keyword(null,"c2","c2",-1561880371));
var G__50085 = (cljs.core.truth_((function (){var and__5023__auto__ = from_p;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = to_p;
if(cljs.core.truth_(and__5023__auto____$1)){
var and__5023__auto____$2 = c1;
if(cljs.core.truth_(and__5023__auto____$2)){
return c2;
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(points,from_p),to_p),app.common.types.path.helpers.calculate_curve_extremities(from_p,to_p,c1,c2)):points);
var G__50086 = cljs.core.not_empty(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(content__$2,(1)));
var G__50087 = to_p;
var G__50088 = move_p;
points = G__50085;
content__$1 = G__50086;
from_p = G__50087;
move_p = G__50088;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49972__$1)].join('')));

}
} else {
return cljs.core.persistent_BANG_(points);
}
} else {
return cljs.core.persistent_BANG_(points);
}
break;
}
});
app.common.types.path.segment.content__GT_selrect = (function app$common$types$path$segment$content__GT_selrect(content){
var extremities = app.common.types.path.segment.calculate_extremities(content);
var extremities__$1 = ((cljs.core.empty_QMARK_(extremities))?cljs.core.keep.cljs$core$IFn$_invoke$arity$2(app.common.types.path.helpers.segment__GT_point,content):extremities);
if(app.common.data.not_empty_QMARK_(extremities__$1)){
return app.common.geom.rect.points__GT_rect(extremities__$1);
} else {
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$0();
}
});
app.common.types.path.segment.content_center = (function app$common$types$path$segment$content_center(content){
return app.common.geom.rect.rect__GT_center(app.common.types.path.segment.content__GT_selrect(content));
});
app.common.types.path.segment.append_segment = (function app$common$types$path$segment$append_segment(content,segment){
var content__$1 = ((app.common.types.path.impl.path_data_QMARK_(content))?cljs.core.vec(content):(((content == null))?cljs.core.PersistentVector.EMPTY:content
));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(content__$1,app.common.types.path.impl.check_segment(segment));
});
/**
 * Given a vector of points generate a path content.
 * 
 *   Mainly used for generate a path content from user drawing points
 *   using curve drawing tool.
 */
app.common.types.path.segment.points__GT_content = (function app$common$types$path$segment$points__GT_content(var_args){
var args__5755__auto__ = [];
var len__5749__auto___50090 = arguments.length;
var i__5750__auto___50091 = (0);
while(true){
if((i__5750__auto___50091 < len__5749__auto___50090)){
args__5755__auto__.push((arguments[i__5750__auto___50091]));

var G__50092 = (i__5750__auto___50091 + (1));
i__5750__auto___50091 = G__50092;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.types.path.segment.points__GT_content.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.types.path.segment.points__GT_content.cljs$core$IFn$_invoke$arity$variadic = (function (points,p__49978){
var map__49979 = p__49978;
var map__49979__$1 = cljs.core.__destructure_map(map__49979);
var close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49979__$1,new cljs.core.Keyword(null,"close","close",1835149582));
var initial = cljs.core.first(points);
var point__GT_params = (function (point){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(point?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.Keyword(null,"x","x",2099068185))),new cljs.core.Keyword(null,"y","y",-1757859776),(point?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.Keyword(null,"y","y",-1757859776)))], null);
});
var points__$1 = cljs.core.rest(points);
var result = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"params","params",710516235),point__GT_params(initial)], null)], null);
while(true){
var temp__5823__auto__ = cljs.core.first(points__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var point = temp__5823__auto__;
var G__50094 = cljs.core.rest(points__$1);
var G__50095 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"line-to","line-to",1332939595),new cljs.core.Keyword(null,"params","params",710516235),point__GT_params(point)], null));
points__$1 = G__50094;
result = G__50095;
continue;
} else {
var result__$1 = (cljs.core.truth_(close)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"close-path","close-path",1220079654)], null)):result);
return app.common.types.path.impl.from_plain(result__$1);
}
break;
}
}));

(app.common.types.path.segment.points__GT_content.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.types.path.segment.points__GT_content.cljs$lang$applyTo = (function (seq49975){
var G__49976 = cljs.core.first(seq49975);
var seq49975__$1 = cljs.core.next(seq49975);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49976,seq49975__$1);
}));


//# sourceMappingURL=app.common.types.path.segment.js.map
