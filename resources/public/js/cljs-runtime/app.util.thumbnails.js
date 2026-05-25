import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.math.js";
goog.provide('app.util.thumbnails');
app.util.thumbnails.max_recommended_size = app.common.math.pow((2),(11));
app.util.thumbnails.max_absolute_size = app.common.math.pow((2),(14));
app.util.thumbnails.min_size = (1);
app.util.thumbnails.max_size = app.util.thumbnails.max_recommended_size;
app.util.thumbnails.min_aspect_ratio = 0.5;
app.util.thumbnails.max_aspect_ratio = 2.0;
/**
 * Returns the aspect ratio of a given width and height.
 */
app.util.thumbnails.get_aspect_ratio = (function app$util$thumbnails$get_aspect_ratio(width,height){
return (width / height);
});
app.util.thumbnails.get_size_from = (function app$util$thumbnails$get_size_from(ref_size,opp_size,clamped_size){
return ((opp_size * clamped_size) / ref_size);
});
app.util.thumbnails.get_height_from_width = (function app$util$thumbnails$get_height_from_width(width,height,clamped_width){
return app.util.thumbnails.get_size_from(width,height,clamped_width);
});
app.util.thumbnails.get_width_from_height = (function app$util$thumbnails$get_width_from_height(width,height,clamped_height){
return app.util.thumbnails.get_size_from(height,width,clamped_height);
});
/**
 * Returns a proportional size given a width and height and some size constraints.
 */
app.util.thumbnails.get_proportional_size = (function app$util$thumbnails$get_proportional_size(var_args){
var G__54938 = arguments.length;
switch (G__54938) {
case 2:
return app.util.thumbnails.get_proportional_size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return app.util.thumbnails.get_proportional_size.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return app.util.thumbnails.get_proportional_size.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.thumbnails.get_proportional_size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return app.util.thumbnails.get_proportional_size.cljs$core$IFn$_invoke$arity$6(width,height,(1),app.util.thumbnails.max_size,(1),app.util.thumbnails.max_size);
}));

(app.util.thumbnails.get_proportional_size.cljs$core$IFn$_invoke$arity$4 = (function (width,height,min_size,max_size){
return app.util.thumbnails.get_proportional_size.cljs$core$IFn$_invoke$arity$6(width,height,min_size,max_size,min_size,max_size);
}));

(app.util.thumbnails.get_proportional_size.cljs$core$IFn$_invoke$arity$6 = (function (width,height,min_width,max_width,min_height,max_height){
var clamped_width = app.common.math.clamp(width,min_width,max_width);
var clamped_height = app.common.math.clamp(height,min_height,max_height);
if((width > height)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clamped_width,app.util.thumbnails.get_height_from_width(width,height,clamped_width)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.util.thumbnails.get_width_from_height(width,height,clamped_height),clamped_height], null);
}
}));

(app.util.thumbnails.get_proportional_size.cljs$lang$maxFixedArity = 6);

/**
 * Returns a recommended size given a width and height.
 */
app.util.thumbnails.get_relative_size = (function app$util$thumbnails$get_relative_size(width,height){
var aspect_ratio = app.util.thumbnails.get_aspect_ratio(width,height);
if((((aspect_ratio < 0.5)) || ((aspect_ratio > 2.0)))){
return app.util.thumbnails.get_proportional_size.cljs$core$IFn$_invoke$arity$4(width,height,(1),app.util.thumbnails.max_absolute_size);
} else {
return app.util.thumbnails.get_proportional_size.cljs$core$IFn$_invoke$arity$4(width,height,(1),app.util.thumbnails.max_recommended_size);
}
});

//# sourceMappingURL=app.util.thumbnails.js.map
