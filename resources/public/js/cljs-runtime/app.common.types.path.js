import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.exceptions.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.common.js";
import "./app.common.types.path.bool.js";
import "./app.common.types.path.helpers.js";
import "./app.common.types.path.impl.js";
import "./app.common.types.path.segment.js";
import "./app.common.types.path.shape_to_path.js";
import "./app.common.types.path.subpath.js";
goog.provide('app.common.types.path');
app.common.types.path.bool_group_style_properties = app.common.types.path.bool.group_style_properties;
app.common.types.path.bool_style_properties = app.common.types.path.bool.style_properties;
app.common.types.path.get_default_bool_fills = (function app$common$types$path$get_default_bool_fills(){
return app.common.types.path.bool.get_default_fills();
});
app.common.types.path.schema_COLON_content = app.common.types.path.impl.schema_COLON_content;
app.common.types.path.schema_COLON_segments = app.common.types.path.impl.schema_COLON_segments;
app.common.types.path.content_QMARK_ = (function app$common$types$path$content_QMARK_(o){
return app.common.types.path.impl.path_data_QMARK_(o);
});
/**
 * Create path content from plain data or bytes, returns itself if it
 *   is already PathData instance
 */
app.common.types.path.content = (function app$common$types$path$content(data){
return app.common.types.path.impl.path_data(data);
});
app.common.types.path.from_bytes = (function app$common$types$path$from_bytes(data){
return app.common.types.path.impl.from_bytes(data);
});
app.common.types.path.from_string = (function app$common$types$path$from_string(data){
return app.common.types.path.impl.from_string(data);
});
app.common.types.path.from_plain = (function app$common$types$path$from_plain(data){
return app.common.types.path.impl.from_plain(data);
});
app.common.types.path.check_content = (function app$common$types$path$check_content(content){
return app.common.types.path.impl.check_content(content);
});
/**
 * Get byte size of a path content
 */
app.common.types.path.get_byte_size = (function app$common$types$path$get_byte_size(content){
return app.common.types.path.impl._get_byte_size(content);
});
app.common.types.path.write_to = (function app$common$types$path$write_to(content,buffer,offset){
return app.common.types.path.impl._write_to(content,buffer,offset);
});
/**
 * Given a content, searches a path for possible subpaths that can
 *   create closed loops and merge them; then return the transformed path
 *   content as PathData instance
 */
app.common.types.path.close_subpaths = (function app$common$types$path$close_subpaths(content){
return app.common.types.path.impl.from_plain(app.common.types.path.subpath.close_subpaths(content));
});
/**
 * Apply delta modifiers over the path content
 */
app.common.types.path.apply_content_modifiers = (function app$common$types$path$apply_content_modifiers(content,modifiers){
if(cljs.core.truth_(app.common.types.path.impl.check_content(content))){
} else {
throw (new Error("Assert failed: (impl/check-content content)"));
}

var apply_to_index = (function app$common$types$path$apply_content_modifiers_$_apply_to_index(content__$1,p__50216){
var vec__50217 = p__50216;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50217,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50217,(1),null);
if(cljs.core.contains_QMARK_(content__$1,index)){
var G__50220 = content__$1;
var G__50220__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"c1x","c1x",-1789291378).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"c1y","c1y",-1210747344).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = new cljs.core.Keyword(null,"c2x","c2x",-699963108).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return new cljs.core.Keyword(null,"c2y","c2y",1361944924).cljs$core$IFn$_invoke$arity$1(params);
}
}
}
})();
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line-to","line-to",1332939595),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(content__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"command","command",-894540724)], null)));
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc_in(cljs.core.assoc_in(G__50220,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"command","command",-894540724)], null),new cljs.core.Keyword(null,"curve-to","curve-to",-936461191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"params","params",710516235)], null),app.common.types.path.helpers.make_curve_params.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(content__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"params","params",710516235)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(content__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index - (1)),new cljs.core.Keyword(null,"params","params",710516235)], null)))):G__50220);
var G__50220__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(params))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__50220__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(params)):G__50220__$1);
var G__50220__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(params))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__50220__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(params)):G__50220__$2);
var G__50220__$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"c1x","c1x",-1789291378).cljs$core$IFn$_invoke$arity$1(params))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__50220__$3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"c1x","c1x",-1789291378)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"c1x","c1x",-1789291378).cljs$core$IFn$_invoke$arity$1(params)):G__50220__$3);
var G__50220__$5 = (cljs.core.truth_(new cljs.core.Keyword(null,"c1y","c1y",-1210747344).cljs$core$IFn$_invoke$arity$1(params))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__50220__$4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"c1y","c1y",-1210747344)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"c1y","c1y",-1210747344).cljs$core$IFn$_invoke$arity$1(params)):G__50220__$4);
var G__50220__$6 = (cljs.core.truth_(new cljs.core.Keyword(null,"c2x","c2x",-699963108).cljs$core$IFn$_invoke$arity$1(params))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__50220__$5,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"c2x","c2x",-699963108)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"c2x","c2x",-699963108).cljs$core$IFn$_invoke$arity$1(params)):G__50220__$5);
if(cljs.core.truth_(new cljs.core.Keyword(null,"c2y","c2y",1361944924).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__50220__$6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"c2y","c2y",1361944924)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"c2y","c2y",1361944924).cljs$core$IFn$_invoke$arity$1(params));
} else {
return G__50220__$6;
}
} else {
return content__$1;
}
});
if((!((modifiers == null)))){
return app.common.types.path.impl.path_data(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(apply_to_index,cljs.core.vec(content),modifiers));
} else {
return content;
}
});
/**
 * Applies a transformation matrix over content and returns a new
 *   content as PathData instance.
 */
app.common.types.path.transform_content = (function app$common$types$path$transform_content(content,transform){
return app.common.types.path.segment.transform_content(content,transform);
});
app.common.types.path.move_content = (function app$common$types$path$move_content(content,move_vec){
if(app.common.geom.point.zero_QMARK_(move_vec)){
return content;
} else {
return app.common.types.path.segment.move_content(content,move_vec);
}
});
/**
 * Update shape with new geometry calculated from provided content
 */
app.common.types.path.update_geometry = (function app$common$types$path$update_geometry(var_args){
var G__50222 = arguments.length;
switch (G__50222) {
case 2:
return app.common.types.path.update_geometry.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.types.path.update_geometry.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.path.update_geometry.cljs$core$IFn$_invoke$arity$2 = (function (shape,content){
return app.common.types.path.update_geometry.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"content","content",15833224),content));
}));

(app.common.types.path.update_geometry.cljs$core$IFn$_invoke$arity$1 = (function (shape){
var flip_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"flip-x","flip-x",891276861));
var flip_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"flip-y","flip-y",935998815));
var content = app.common.types.path.impl.path_data(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"content","content",15833224)));
var transform = (function (){var G__50223 = new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$2(shape,app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0());
var G__50223__$1 = (cljs.core.truth_(flip_x)?app.common.geom.matrix.scale.cljs$core$IFn$_invoke$arity$2(G__50223,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((-1),(1))):G__50223);
if(cljs.core.truth_(flip_y)){
return app.common.geom.matrix.scale.cljs$core$IFn$_invoke$arity$2(G__50223__$1,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((1),(-1)));
} else {
return G__50223__$1;
}
})();
var transform_inverse = (function (){var G__50224 = app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0();
var G__50224__$1 = (cljs.core.truth_(flip_x)?app.common.geom.matrix.scale.cljs$core$IFn$_invoke$arity$2(G__50224,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((-1),(1))):G__50224);
var G__50224__$2 = (cljs.core.truth_(flip_y)?app.common.geom.matrix.scale.cljs$core$IFn$_invoke$arity$2(G__50224__$1,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((1),(-1))):G__50224__$1);
return app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$2(G__50224__$2,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$2(shape,app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0()));

})();
var center = (function (){var or__5025__auto__ = (function (){var G__50225 = (shape?.selrect?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"selrect","selrect",1966287292)));
if((G__50225 == null)){
return null;
} else {
return app.common.geom.rect.rect__GT_center(G__50225);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.path.segment.content_center(content);
}
})();
var base_content = app.common.types.path.segment.transform_content(content,app.common.geom.matrix.transform_in(center,transform_inverse));
var points = app.common.geom.shapes.common.transform_points.cljs$core$IFn$_invoke$arity$3(app.common.geom.rect.rect__GT_points(app.common.types.path.segment.content__GT_selrect(base_content)),center,transform);
var points_center = app.common.geom.shapes.common.points__GT_center(points);
var selrect = app.common.geom.rect.points__GT_rect(app.common.geom.shapes.common.transform_points.cljs$core$IFn$_invoke$arity$3(points,points_center,transform_inverse));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"content","content",15833224),content),new cljs.core.Keyword(null,"points","points",-1486596883),points),new cljs.core.Keyword(null,"selrect","selrect",1966287292),selrect);
}));

(app.common.types.path.update_geometry.cljs$lang$maxFixedArity = 2);

/**
 * Returns points for the given content. Accepts PathData instances or
 *   plain segment vectors.
 */
app.common.types.path.get_points = (function app$common$types$path$get_points(content){
var content__$1 = app.common.types.path.impl.path_data(content);
return app.common.types.path.segment.get_points(content__$1);
});
/**
 * Calculate selrect from a content. The content can be in a PathData
 *   instance or plain vector of segments.
 */
app.common.types.path.calc_selrect = (function app$common$types$path$calc_selrect(content){
var content__$1 = app.common.types.path.impl.path_data(content);
return app.common.types.path.segment.content__GT_selrect(content__$1);
});
/**
 * Retrieve a map where for every point will retrieve a list of the
 *   handlers that are associated with that point.
 *   point -> [[index, prefix]]
 */
app.common.types.path.get_handlers = (function app$common$types$path$get_handlers(content){
var content__$1 = app.common.types.path.impl.path_data(content);
return app.common.types.path.segment.get_handlers(content__$1);
});
/**
 * Given a content, segment index and prefix, get a handler point.
 */
app.common.types.path.get_handler_point = (function app$common$types$path$get_handler_point(content,index,prefix){
var content__$1 = app.common.types.path.impl.path_data(content);
return app.common.types.path.segment.get_handler_point(content__$1,index,prefix);
});
/**
 * Given a segment (command map) and a prefix, returns the handler
 *   coordinate map {:x ... :y ...} from its params, or nil when absent.
 */
app.common.types.path.get_handler = (function app$common$types$path$get_handler(command,prefix){
return app.common.types.path.segment.get_handler(command,prefix);
});
/**
 * Given a content, index and prefix, returns the path node (anchor
 *   point) that the handler belongs to.
 */
app.common.types.path.handler__GT_node = (function app$common$types$path$handler__GT_node(content,index,prefix){
var content__$1 = app.common.types.path.impl.path_data(content);
return app.common.types.path.segment.handler__GT_node(content__$1,index,prefix);
});
/**
 * Calculates the opposite handler index given a content, index and
 *   prefix.
 */
app.common.types.path.opposite_index = (function app$common$types$path$opposite_index(content,index,prefix){
var content__$1 = app.common.types.path.impl.path_data(content);
return app.common.types.path.segment.opposite_index(content__$1,index,prefix);
});
/**
 * Returns the indices of all segments whose endpoint matches point.
 */
app.common.types.path.point_indices = (function app$common$types$path$point_indices(content,point){
var content__$1 = app.common.types.path.impl.path_data(content);
return app.common.types.path.segment.point_indices(content__$1,point);
});
/**
 * Returns [[index prefix] ...] of all handlers associated with point.
 */
app.common.types.path.handler_indices = (function app$common$types$path$handler_indices(content,point){
var content__$1 = app.common.types.path.impl.path_data(content);
return app.common.types.path.segment.handler_indices(content__$1,point);
});
/**
 * Calculates the next node segment to be inserted when drawing.
 */
app.common.types.path.next_node = (function app$common$types$path$next_node(content,position,prev_point,prev_handler){
var content__$1 = app.common.types.path.impl.path_data(content);
return app.common.types.path.segment.next_node(content__$1,position,prev_point,prev_handler);
});
/**
 * Appends a segment to content, accepting PathData or plain vector.
 */
app.common.types.path.append_segment = (function app$common$types$path$append_segment(content,segment){
var content__$1 = app.common.types.path.impl.path_data(content);
return app.common.types.path.segment.append_segment(content__$1,segment);
});
/**
 * Given a vector of points generate a path content.
 */
app.common.types.path.points__GT_content = (function app$common$types$path$points__GT_content(var_args){
var args__5755__auto__ = [];
var len__5749__auto___50239 = arguments.length;
var i__5750__auto___50240 = (0);
while(true){
if((i__5750__auto___50240 < len__5749__auto___50239)){
args__5755__auto__.push((arguments[i__5750__auto___50240]));

var G__50241 = (i__5750__auto___50240 + (1));
i__5750__auto___50240 = G__50241;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.types.path.points__GT_content.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.types.path.points__GT_content.cljs$core$IFn$_invoke$arity$variadic = (function (points,p__50230){
var map__50231 = p__50230;
var map__50231__$1 = cljs.core.__destructure_map(map__50231);
var close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50231__$1,new cljs.core.Keyword(null,"close","close",1835149582));
return app.common.types.path.segment.points__GT_content.cljs$core$IFn$_invoke$arity$variadic(points,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"close","close",1835149582),close], 0));
}));

(app.common.types.path.points__GT_content.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.types.path.points__GT_content.cljs$lang$applyTo = (function (seq50228){
var G__50229 = cljs.core.first(seq50228);
var seq50228__$1 = cljs.core.next(seq50228);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50229,seq50228__$1);
}));

/**
 * Returns the closest point in the path to position, at a given precision.
 */
app.common.types.path.closest_point = (function app$common$types$path$closest_point(content,position,precision){
var content__$1 = app.common.types.path.impl.path_data(content);
if((cljs.core.count(content__$1) > (0))){
return app.common.types.path.segment.closest_point(content__$1,position,precision);
} else {
return null;
}
});
/**
 * Changes the content to make a point a corner.
 */
app.common.types.path.make_corner_point = (function app$common$types$path$make_corner_point(content,point){
var content__$1 = app.common.types.path.impl.path_data(content);
return app.common.types.path.segment.make_corner_point(content__$1,point);
});
/**
 * Changes the content to make a point a curve.
 */
app.common.types.path.make_curve_point = (function app$common$types$path$make_curve_point(content,point){
var content__$1 = app.common.types.path.impl.path_data(content);
return app.common.types.path.segment.make_curve_point(content__$1,point);
});
/**
 * Given a content, splits segments between points with new segments.
 */
app.common.types.path.split_segments = (function app$common$types$path$split_segments(content,points,value){
var content__$1 = app.common.types.path.impl.path_data(content);
return app.common.types.path.segment.split_segments(content__$1,points,value);
});
/**
 * Removes the given points from content, reconstructing paths as needed.
 */
app.common.types.path.remove_nodes = (function app$common$types$path$remove_nodes(content,points){
var content__$1 = app.common.types.path.impl.path_data(content);
return app.common.types.path.segment.remove_nodes(content__$1,points);
});
/**
 * Reduces contiguous segments at the given points to a single point.
 */
app.common.types.path.merge_nodes = (function app$common$types$path$merge_nodes(content,points){
var content__$1 = app.common.types.path.impl.path_data(content);
return app.common.types.path.segment.merge_nodes(content__$1,points);
});
/**
 * Creates new segments between points that weren't previously connected.
 */
app.common.types.path.join_nodes = (function app$common$types$path$join_nodes(content,points){
var content__$1 = app.common.types.path.impl.path_data(content);
return app.common.types.path.segment.join_nodes(content__$1,points);
});
/**
 * Removes the segments between the given points.
 */
app.common.types.path.separate_nodes = (function app$common$types$path$separate_nodes(content,points){
var content__$1 = app.common.types.path.impl.path_data(content);
return app.common.types.path.segment.separate_nodes(content__$1,points);
});
/**
 * Calculate the boolean content from shape and objects. Returns plain
 *   vector of segments
 */
app.common.types.path.calc_bool_content_STAR_ = (function app$common$types$path$calc_bool_content_STAR_(shape,objects){
var extract_content_xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hidden","hidden",-312506092)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(app.common.files.helpers.svg_raw_shape_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__50232_SHARP_){
return app.common.types.path.shape_to_path.convert_to_path(p1__50232_SHARP_,objects);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224))], 0));
var contents = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(extract_content_xf,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
try{return app.common.types.path.bool.calculate_content(new cljs.core.Keyword(null,"bool-type","bool-type",-1094918459).cljs$core$IFn$_invoke$arity$1(shape),contents);
}catch (e50234){var exc50233 = e50234;
var handler__43144__auto__ = (function (cause){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["unable to calculate bool content for shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))].join(''),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bool-type","bool-type",-1094918459).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"invalid-path-content","invalid-path-content",995132187),new cljs.core.Keyword(null,"hint","hint",439639918),["unable to calculate bool content for shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))].join(''),new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec(contents)], null),null], 0)),cause);
});
return handler__43144__auto__(exc50233);
}});
/**
 * A overwrite point for setup a WASM version of the `calc-bool-content*` function
 */
app.common.types.path.wasm_COLON_calc_bool_content = null;
/**
 * Calculate the boolean content from shape and objects. Returns a
 *   packed PathData instance
 */
app.common.types.path.calc_bool_content = (function app$common$types$path$calc_bool_content(shape,objects){
var content = app.common.types.path.calc_bool_content_STAR_(shape,objects);
return app.common.types.path.impl.path_data(content);
});
/**
 * Calculates the selrect+points for the boolean shape
 */
app.common.types.path.update_bool_shape = (function app$common$types$path$update_bool_shape(shape,objects){
var content = ((cljs.core.fn_QMARK_(app.common.types.path.wasm_COLON_calc_bool_content))?(app.common.types.path.wasm_COLON_calc_bool_content.cljs$core$IFn$_invoke$arity$2 ? app.common.types.path.wasm_COLON_calc_bool_content.cljs$core$IFn$_invoke$arity$2(shape,objects) : app.common.types.path.wasm_COLON_calc_bool_content.call(null,shape,objects)):app.common.types.path.calc_bool_content(shape,objects));
var shape__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"content","content",15833224),content);
return app.common.types.path.update_geometry.cljs$core$IFn$_invoke$arity$1(shape__$1);
});
app.common.types.path.shape_with_open_path_QMARK_ = (function app$common$types$path$shape_with_open_path_QMARK_(shape){
var svg_QMARK_ = cljs.core.contains_QMARK_(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772));
var maybe_close = ((svg_QMARK_)?cljs.core.identity:app.common.types.path.subpath.close_subpaths);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape))) && ((!(cljs.core.every_QMARK_(app.common.types.path.subpath.is_closed_QMARK_,app.common.types.path.subpath.get_subpaths((function (){var G__50235 = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape);
return (maybe_close.cljs$core$IFn$_invoke$arity$1 ? maybe_close.cljs$core$IFn$_invoke$arity$1(G__50235) : maybe_close.call(null,G__50235));
})()))))));
});
/**
 * Transform a shape to a path shape
 */
app.common.types.path.convert_to_path = (function app$common$types$path$convert_to_path(var_args){
var G__50237 = arguments.length;
switch (G__50237) {
case 1:
return app.common.types.path.convert_to_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.types.path.convert_to_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.path.convert_to_path.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return app.common.types.path.convert_to_path.cljs$core$IFn$_invoke$arity$2(shape,cljs.core.PersistentArrayMap.EMPTY);
}));

(app.common.types.path.convert_to_path.cljs$core$IFn$_invoke$arity$2 = (function (shape,objects){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(app.common.types.path.shape_to_path.convert_to_path(shape,objects),new cljs.core.Keyword(null,"content","content",15833224),app.common.types.path.impl.path_data);
}));

(app.common.types.path.convert_to_path.cljs$lang$maxFixedArity = 2);

app.common.types.path.decode_segments = app.common.types.path.impl.decode_segments;

//# sourceMappingURL=app.common.types.path.js.map
