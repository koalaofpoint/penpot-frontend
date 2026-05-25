import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.shapes.points.js";
goog.provide('app.common.geom.align');
app.common.geom.align.valid_align_axis = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"vtop","vtop",1654808384),null,new cljs.core.Keyword(null,"vbottom","vbottom",-2106028734),null,new cljs.core.Keyword(null,"hcenter","hcenter",-1502998396),null,new cljs.core.Keyword(null,"hright","hright",-2037540371),null,new cljs.core.Keyword(null,"hleft","hleft",1814954288),null,new cljs.core.Keyword(null,"vcenter","vcenter",564475646),null], null), null);
/**
 * Move the shape so that it is aligned with the given rectangle
 *   in the given axis. Take account the form of the shape and the
 *   possible rotation. What is aligned is the rectangle that wraps
 *   the shape with the given rectangle. If the shape is a group,
 *   move also all of its recursive children.
 */
app.common.geom.align.align_to_rect = (function app$common$geom$align$align_to_rect(shape,rect,axis){
var wrapper_rect = app.common.geom.shapes.shapes__GT_rect(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null));
var align_pos = (app.common.geom.align.calc_align_pos.cljs$core$IFn$_invoke$arity$3 ? app.common.geom.align.calc_align_pos.cljs$core$IFn$_invoke$arity$3(wrapper_rect,rect,axis) : app.common.geom.align.calc_align_pos.call(null,wrapper_rect,rect,axis));
var delta = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(align_pos) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wrapper_rect)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(align_pos) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wrapper_rect)));
return app.common.geom.shapes.move(shape,delta);
});
/**
 * Does the same calc as align-to-rect but relative to a parent shape.
 */
app.common.geom.align.align_to_parent = (function app$common$geom$align$align_to_parent(shape,parent,axis){
var parent_bounds = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(parent);
var wrapper_rect = app.common.geom.rect.points__GT_rect(app.common.geom.shapes.transform_points.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape),app.common.geom.shapes.shape__GT_center(parent),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$1(parent)));
var align_pos = (function (){var G__56252 = wrapper_rect;
var G__56253 = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(parent);
var G__56254 = axis;
return (app.common.geom.align.calc_align_pos.cljs$core$IFn$_invoke$arity$3 ? app.common.geom.align.calc_align_pos.cljs$core$IFn$_invoke$arity$3(G__56252,G__56253,G__56254) : app.common.geom.align.calc_align_pos.call(null,G__56252,G__56253,G__56254));
})();
var xv = (function (p1__56250_SHARP_){
return app.common.geom.shapes.points.start_hv(parent_bounds,p1__56250_SHARP_);
});
var yv = (function (p1__56251_SHARP_){
return app.common.geom.shapes.points.start_vv(parent_bounds,p1__56251_SHARP_);
});
var delta = app.common.geom.point.add(xv((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(align_pos) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wrapper_rect))),yv((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(align_pos) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wrapper_rect))));
return app.common.geom.shapes.move(shape,delta);
});
app.common.geom.align.calc_align_pos = (function app$common$geom$align$calc_align_pos(wrapper_rect,rect,axis){
var G__56255 = axis;
var G__56255__$1 = (((G__56255 instanceof cljs.core.Keyword))?G__56255.fqn:null);
switch (G__56255__$1) {
case "hleft":
var left = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),left,new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wrapper_rect)], null);

break;
case "hcenter":
var center = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect) / (2)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(center - (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(wrapper_rect) / (2))),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wrapper_rect)], null);

break;
case "hright":
var right = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(right - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(wrapper_rect)),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wrapper_rect)], null);

break;
case "vtop":
var top = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wrapper_rect),new cljs.core.Keyword(null,"y","y",-1757859776),top], null);

break;
case "vcenter":
var center = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect) / (2)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wrapper_rect),new cljs.core.Keyword(null,"y","y",-1757859776),(center - (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(wrapper_rect) / (2)))], null);

break;
case "vbottom":
var bottom = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wrapper_rect),new cljs.core.Keyword(null,"y","y",-1757859776),(bottom - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(wrapper_rect))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56255__$1)].join('')));

}
});
app.common.geom.align.valid_dist_axis = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),null,new cljs.core.Keyword(null,"vertical","vertical",718696748),null], null), null);
/**
 * Distribute equally the space between shapes in the given axis.
 *   It takes into account the form of the shape and the rotation,
 *   what is distributed is the wrapping rectangles of the shapes.
 *   If any shape is a group, move also all of its recursive children.
 */
app.common.geom.align.distribute_space = (function app$common$geom$align$distribute_space(shapes,axis){
var coord = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"y","y",-1757859776));
var other_coord = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)))?new cljs.core.Keyword(null,"y","y",-1757859776):new cljs.core.Keyword(null,"x","x",2099068185));
var size = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)))?new cljs.core.Keyword(null,"width","width",-384071477):new cljs.core.Keyword(null,"height","height",1025178622));
var wrapper_rect = app.common.geom.shapes.shapes__GT_rect(shapes);
var sorted_shapes = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__56256_SHARP_){
return coord.cljs$core$IFn$_invoke$arity$1(app.common.geom.shapes.shape__GT_center(p1__56256_SHARP_));
}),shapes);
var wrapped_shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56257_SHARP_){
return app.common.geom.shapes.shapes__GT_rect(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56257_SHARP_], null));
}),sorted_shapes);
var space = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._,size.cljs$core$IFn$_invoke$arity$1(wrapper_rect),cljs.core.map.cljs$core$IFn$_invoke$arity$2(size,wrapped_shapes));
var unit_space = (space / (cljs.core.count(wrapped_shapes) - (1)));
var deltas = (function (){var shapes_SINGLEQUOTE_ = wrapped_shapes;
var start_pos = coord.cljs$core$IFn$_invoke$arity$1(wrapper_rect);
var deltas = cljs.core.PersistentVector.EMPTY;
while(true){
var first_shape = cljs.core.first(shapes_SINGLEQUOTE_);
var delta = (start_pos - coord.cljs$core$IFn$_invoke$arity$1(first_shape));
var new_pos = ((start_pos + size.cljs$core$IFn$_invoke$arity$1(first_shape)) + unit_space);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes_SINGLEQUOTE_),(1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(deltas,delta);
} else {
var G__56278 = cljs.core.rest(shapes_SINGLEQUOTE_);
var G__56279 = new_pos;
var G__56280 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(deltas,delta);
shapes_SINGLEQUOTE_ = G__56278;
start_pos = G__56279;
deltas = G__56280;
continue;
}
break;
}
})();
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__56258_SHARP_,p2__56259_SHARP_){
return app.common.geom.shapes.move(p1__56258_SHARP_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$0(),coord,p2__56259_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([other_coord,(0)], 0)));
}),sorted_shapes,deltas);
});
app.common.geom.align.adjust_to_viewport = (function app$common$geom$align$adjust_to_viewport(var_args){
var G__56268 = arguments.length;
switch (G__56268) {
case 2:
return app.common.geom.align.adjust_to_viewport.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.geom.align.adjust_to_viewport.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.align.adjust_to_viewport.cljs$core$IFn$_invoke$arity$2 = (function (viewport,srect){
return app.common.geom.align.adjust_to_viewport.cljs$core$IFn$_invoke$arity$3(viewport,srect,null);
}));

(app.common.geom.align.adjust_to_viewport.cljs$core$IFn$_invoke$arity$3 = (function (viewport,srect,p__56270){
var map__56271 = p__56270;
var map__56271__$1 = cljs.core.__destructure_map(map__56271);
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56271__$1,new cljs.core.Keyword(null,"padding","padding",1660304693),(0));
var min_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56271__$1,new cljs.core.Keyword(null,"min-zoom","min-zoom",1063884318),null);
var gprop = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(viewport) / new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(viewport));
var srect_padded = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(srect,new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__56260_SHARP_){
return (p1__56260_SHARP_ - padding);
})),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__56261_SHARP_){
return (p1__56261_SHARP_ - padding);
})),new cljs.core.Keyword(null,"width","width",-384071477),(function (p1__56262_SHARP_){
return ((p1__56262_SHARP_ + padding) + padding);
})),new cljs.core.Keyword(null,"height","height",1025178622),(function (p1__56263_SHARP_){
return ((p1__56263_SHARP_ + padding) + padding);
}));
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(srect_padded);
var height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(srect_padded);
var lprop = (width / height);
var adjusted_rect = (((gprop > lprop))?(function (){var width_SINGLEQUOTE_ = ((width / lprop) * gprop);
var padding__$1 = ((width_SINGLEQUOTE_ - width) / (2));
return app.common.geom.rect.update_rect(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(srect_padded,new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__56264_SHARP_){
return (p1__56264_SHARP_ - padding__$1);
})),new cljs.core.Keyword(null,"width","width",-384071477),width_SINGLEQUOTE_),new cljs.core.Keyword(null,"position","position",-2011731912));
})():(((gprop < lprop))?(function (){var height_SINGLEQUOTE_ = ((height * lprop) / gprop);
var padding__$1 = ((height_SINGLEQUOTE_ - height) / (2));
return app.common.geom.rect.update_rect(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(srect_padded,new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__56265_SHARP_){
return (p1__56265_SHARP_ - padding__$1);
})),new cljs.core.Keyword(null,"height","height",1025178622),height_SINGLEQUOTE_),new cljs.core.Keyword(null,"position","position",-2011731912));
})():app.common.geom.rect.update_rect(srect_padded,new cljs.core.Keyword(null,"position","position",-2011731912))
));
if((((!((min_zoom == null)))) && (((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(viewport) / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(adjusted_rect)) < min_zoom)))){
var anchor_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(srect);
var anchor_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(srect);
var vbox_width = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(viewport) / min_zoom);
var vbox_height = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(viewport) / min_zoom);
return app.common.geom.rect.update_rect(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(adjusted_rect,new cljs.core.Keyword(null,"x","x",2099068185),(anchor_x - (vbox_width / (2))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),(anchor_y - (vbox_height / (2))),new cljs.core.Keyword(null,"width","width",-384071477),vbox_width,new cljs.core.Keyword(null,"height","height",1025178622),vbox_height], 0)),new cljs.core.Keyword(null,"position","position",-2011731912));
} else {
return adjusted_rect;
}
}));

(app.common.geom.align.adjust_to_viewport.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=app.common.geom.align.js.map
