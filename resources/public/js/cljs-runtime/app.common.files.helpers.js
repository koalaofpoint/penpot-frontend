import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.shapes.common.js";
import "./app.common.uuid.js";
import "./clojure.set.js";
import "./clojure.walk.js";
import "./cuerdas.core.js";
goog.provide('app.common.files.helpers');
app.common.files.helpers.root_QMARK_ = (function app$common$files$helpers$root_QMARK_(shape){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348))),new cljs.core.Keyword(null,"frame","frame",-1711082588))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092))),app.common.uuid.zero)));
});
app.common.files.helpers.is_direct_child_of_root_QMARK_ = (function app$common$files$helpers$is_direct_child_of_root_QMARK_(var_args){
var G__47549 = arguments.length;
switch (G__47549) {
case 2:
return app.common.files.helpers.is_direct_child_of_root_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.files.helpers.is_direct_child_of_root_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.helpers.is_direct_child_of_root_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return app.common.files.helpers.is_direct_child_of_root_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id));
}));

(app.common.files.helpers.is_direct_child_of_root_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return (((!((shape == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((shape?.frame_id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072))),app.common.uuid.zero)));
}));

(app.common.files.helpers.is_direct_child_of_root_QMARK_.cljs$lang$maxFixedArity = 2);

app.common.files.helpers.root_frame_QMARK_ = (function app$common$files$helpers$root_frame_QMARK_(var_args){
var G__47562 = arguments.length;
switch (G__47562) {
case 2:
return app.common.files.helpers.root_frame_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.files.helpers.root_frame_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.helpers.root_frame_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,app.common.uuid.zero)){
return false;
} else {
return app.common.files.helpers.root_frame_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id));
}
}));

(app.common.files.helpers.root_frame_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return (((!((shape == null)))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092))),app.common.uuid.zero)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348))),new cljs.core.Keyword(null,"frame","frame",-1711082588))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((shape?.frame_id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072))),app.common.uuid.zero)))))));
}));

(app.common.files.helpers.root_frame_QMARK_.cljs$lang$maxFixedArity = 2);

app.common.files.helpers.frame_shape_QMARK_ = (function app$common$files$helpers$frame_shape_QMARK_(var_args){
var G__47581 = arguments.length;
switch (G__47581) {
case 2:
return app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id));
}));

(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return (((!((shape == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),(shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348))))));
}));

(app.common.files.helpers.frame_shape_QMARK_.cljs$lang$maxFixedArity = 2);

app.common.files.helpers.group_shape_QMARK_ = (function app$common$files$helpers$group_shape_QMARK_(var_args){
var G__47585 = arguments.length;
switch (G__47585) {
case 2:
return app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id));
}));

(app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return (((!((shape == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),(shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348))))));
}));

(app.common.files.helpers.group_shape_QMARK_.cljs$lang$maxFixedArity = 2);

app.common.files.helpers.mask_shape_QMARK_ = (function app$common$files$helpers$mask_shape_QMARK_(var_args){
var G__47607 = arguments.length;
switch (G__47607) {
case 1:
return app.common.files.helpers.mask_shape_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.files.helpers.mask_shape_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.helpers.mask_shape_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return ((app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (new cljs.core.Keyword(null,"masked-group","masked-group",1899947873).cljs$core$IFn$_invoke$arity$1(shape)));
}));

(app.common.files.helpers.mask_shape_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return app.common.files.helpers.mask_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id));
}));

(app.common.files.helpers.mask_shape_QMARK_.cljs$lang$maxFixedArity = 2);

app.common.files.helpers.bool_shape_QMARK_ = (function app$common$files$helpers$bool_shape_QMARK_(shape){
return (((!((shape == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bool","bool",1444635321),(shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348))))));
});
app.common.files.helpers.text_shape_QMARK_ = (function app$common$files$helpers$text_shape_QMARK_(var_args){
var G__47610 = arguments.length;
switch (G__47610) {
case 1:
return app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return (((!((shape == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),(shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348))))));
}));

(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id));
}));

(app.common.files.helpers.text_shape_QMARK_.cljs$lang$maxFixedArity = 2);

app.common.files.helpers.rect_shape_QMARK_ = (function app$common$files$helpers$rect_shape_QMARK_(shape){
return (((!((shape == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rect","rect",-108902628),(shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348))))));
});
app.common.files.helpers.circle_shape_QMARK_ = (function app$common$files$helpers$circle_shape_QMARK_(p__47611){
var map__47612 = p__47611;
var map__47612__$1 = cljs.core.__destructure_map(map__47612);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47612__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"circle","circle",1903212362));
});
app.common.files.helpers.image_shape_QMARK_ = (function app$common$files$helpers$image_shape_QMARK_(shape){
return (((!((shape == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"image","image",-58725096),(shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348))))));
});
app.common.files.helpers.svg_raw_shape_QMARK_ = (function app$common$files$helpers$svg_raw_shape_QMARK_(var_args){
var G__47615 = arguments.length;
switch (G__47615) {
case 2:
return app.common.files.helpers.svg_raw_shape_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.files.helpers.svg_raw_shape_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.helpers.svg_raw_shape_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return app.common.files.helpers.svg_raw_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id));
}));

(app.common.files.helpers.svg_raw_shape_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return (((!((shape == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"svg-raw","svg-raw",-594329202),(shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348))))));
}));

(app.common.files.helpers.svg_raw_shape_QMARK_.cljs$lang$maxFixedArity = 2);

app.common.files.helpers.path_shape_QMARK_ = (function app$common$files$helpers$path_shape_QMARK_(var_args){
var G__47620 = arguments.length;
switch (G__47620) {
case 2:
return app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id));
}));

(app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return (((!((shape == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),(shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348))))));
}));

(app.common.files.helpers.path_shape_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Checks if it's a non-frame shape in the top level.
 */
app.common.files.helpers.unframed_shape_QMARK_ = (function app$common$files$helpers$unframed_shape_QMARK_(shape){
return (((!((shape == null)))) && ((((!(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((shape?.frame_id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072))),app.common.uuid.zero)))));
});
app.common.files.helpers.has_children_QMARK_ = (function app$common$files$helpers$has_children_QMARK_(var_args){
var G__47622 = arguments.length;
switch (G__47622) {
case 2:
return app.common.files.helpers.has_children_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.files.helpers.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.helpers.has_children_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return app.common.files.helpers.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id));
}));

(app.common.files.helpers.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return app.common.data.not_empty_QMARK_(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
}));

(app.common.files.helpers.has_children_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the provided shape has a layout assigned
 */
app.common.files.helpers.has_layout_QMARK_ = (function app$common$files$helpers$has_layout_QMARK_(objects,id){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
return cljs.core.boolean$((function (){var and__5023__auto__ = shape;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(shape);
} else {
return and__5023__auto__;
}
})());
});
app.common.files.helpers.group_like_shape_QMARK_ = (function app$common$files$helpers$group_like_shape_QMARK_(var_args){
var G__47631 = arguments.length;
switch (G__47631) {
case 2:
return app.common.files.helpers.group_like_shape_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.files.helpers.group_like_shape_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.helpers.group_like_shape_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return app.common.files.helpers.group_like_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id));
}));

(app.common.files.helpers.group_like_shape_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return ((app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) || (((app.common.files.helpers.bool_shape_QMARK_(shape)) || (((app.common.files.helpers.svg_raw_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (app.common.files.helpers.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))))));
}));

(app.common.files.helpers.group_like_shape_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Returns the type of the shape if only one, or :multiple if more
 *   than one
 */
app.common.files.helpers.get_selected_type = (function app$common$files$helpers$get_selected_type(objects,selected){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selected))){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.first(selected));
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
} else {
return new cljs.core.Keyword(null,"multiple","multiple",1244445549);
}
});
/**
 * Returns the type of the shape, or 'root' if it's Root Frame, always
 *   as string
 */
app.common.files.helpers.get_shape_type = (function app$common$files$helpers$get_shape_type(objects,id){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
if(app.common.files.helpers.root_QMARK_(shape)){
return new cljs.core.Keyword(null,"root","root",-448657453);
} else {
return (shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)));
}
});
/**
 * Returns the ids of all the descendants of the shape identified
 *   by the id. Optionally, you can pass an ignore function to indicate
 *   when to ignore a descendant (and all its descendants)
 */
app.common.files.helpers.get_children_ids = (function app$common$files$helpers$get_children_ids(var_args){
var G__47665 = arguments.length;
switch (G__47665) {
case 2:
return app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$3(objects,id,cljs.core.PersistentArrayMap.EMPTY);
}));

(app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$3 = (function (objects,id,p__47668){
var map__47669 = p__47668;
var map__47669__$1 = cljs.core.__destructure_map(map__47669);
var ignore_children_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47669__$1,new cljs.core.Keyword(null,"ignore-children-fn","ignore-children-fn",576274564),cljs.core.constantly(false));
var get_children_ids_rec = (function app$common$files$helpers$get_children_ids_rec(id__$1,processed){
if(cljs.core.contains_QMARK_(processed,id__$1)){
return null;
} else {
var temp__5825__auto__ = (function (){var $ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id__$1);
var $__$1 = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1($);
var $__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(ignore_children_fn,$__$1);
var G__47673 = $__$2;
if((G__47673 == null)){
return null;
} else {
return cljs.core.vec(G__47673);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var shapes = temp__5825__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(shapes,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__47663_SHARP_){
return app$common$files$helpers$get_children_ids_rec(p1__47663_SHARP_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(processed,id__$1));
})),shapes);
} else {
return null;
}
}
});
return get_children_ids_rec(id,cljs.core.PersistentHashSet.EMPTY);
}));

(app.common.files.helpers.get_children_ids.cljs$lang$maxFixedArity = 3);

app.common.files.helpers.get_children_ids_with_self = (function app$common$files$helpers$get_children_ids_with_self(objects,id){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,id));
});
app.common.files.helpers.get_children = (function app$common$files$helpers$get_children(objects,id){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,id));
});
app.common.files.helpers.get_children_with_self = (function app$common$files$helpers$get_children_with_self(objects,id){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),app.common.files.helpers.get_children_ids_with_self(objects,id));
});
/**
 * Return the child of the given object with the given id (allow that the
 * id may point to the object itself).
 */
app.common.files.helpers.get_child = (function app$common$files$helpers$get_child(objects,id,child_id){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,child_id)){
return shape;
} else {
return cljs.core.some((function (p1__47675_SHARP_){
return (app.common.files.helpers.get_child.cljs$core$IFn$_invoke$arity$3 ? app.common.files.helpers.get_child.cljs$core$IFn$_invoke$arity$3(objects,p1__47675_SHARP_,child_id) : app.common.files.helpers.get_child.call(null,objects,p1__47675_SHARP_,child_id));
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
}
});
/**
 * Retrieve the parent for the shape-id (if exists)
 */
app.common.files.helpers.get_parent = (function app$common$files$helpers$get_parent(objects,id){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
if(cljs.core.truth_(temp__5825__auto__)){
var shape = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,(shape?.parent_id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131))));
} else {
return null;
}
});
/**
 * Retrieve the id of the parent for the shape-id (if exists)
 */
app.common.files.helpers.get_parent_id = (function app$common$files$helpers$get_parent_id(objects,id){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
if(cljs.core.truth_(temp__5825__auto__)){
var shape = temp__5825__auto__;
return (shape?.parent_id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131)));
} else {
return null;
}
});
/**
 * Returns a vector of parents of the specified shape.
 */
app.common.files.helpers.get_parent_ids = (function app$common$files$helpers$get_parent_ids(objects,shape_id){
var result = cljs.core.PersistentVector.EMPTY;
var id = shape_id;
while(true){
var parent_id = app.common.files.helpers.get_parent_id(objects,id);
if((((!((parent_id == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,id)))){
var G__47764 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,parent_id);
var G__47765 = parent_id;
result = G__47764;
id = G__47765;
continue;
} else {
return result;
}
break;
}
});
/**
 * Returns a sequence of parents of the specified shape.
 */
app.common.files.helpers.get_parent_ids_seq = (function app$common$files$helpers$get_parent_ids_seq(objects,shape_id){
var parent_id = app.common.files.helpers.get_parent_id(objects,shape_id);
if((((!((parent_id == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,shape_id)))){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(parent_id,(app.common.files.helpers.get_parent_ids_seq.cljs$core$IFn$_invoke$arity$2 ? app.common.files.helpers.get_parent_ids_seq.cljs$core$IFn$_invoke$arity$2(objects,parent_id) : app.common.files.helpers.get_parent_ids_seq.call(null,objects,parent_id)));
}),null,null));
} else {
return null;
}
});
/**
 * Returns a sequence of parents of the specified shape, including itself.
 */
app.common.files.helpers.get_parent_ids_seq_with_self = (function app$common$files$helpers$get_parent_ids_seq_with_self(objects,shape_id){
return cljs.core.cons(shape_id,app.common.files.helpers.get_parent_ids_seq(objects,shape_id));
});
/**
 * Returns a vector of parents of the specified shape.
 */
app.common.files.helpers.get_parents = (function app$common$files$helpers$get_parents(objects,shape_id){
var result = cljs.core.PersistentVector.EMPTY;
var id = shape_id;
while(true){
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
if((((!((parent_id == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,id)))){
var G__47766 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id));
var G__47767 = parent_id;
result = G__47766;
id = G__47767;
continue;
} else {
return result;
}
break;
}
});
/**
 * Returns a lazy seq of parents of the specified shape.
 */
app.common.files.helpers.get_parent_seq = (function app$common$files$helpers$get_parent_seq(var_args){
var G__47689 = arguments.length;
switch (G__47689) {
case 2:
return app.common.files.helpers.get_parent_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.files.helpers.get_parent_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.helpers.get_parent_seq.cljs$core$IFn$_invoke$arity$2 = (function (objects,shape_id){
return app.common.files.helpers.get_parent_seq.cljs$core$IFn$_invoke$arity$3(objects,cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,shape_id),shape_id);
}));

(app.common.files.helpers.get_parent_seq.cljs$core$IFn$_invoke$arity$3 = (function (objects,shape,shape_id){
var parent_id = (shape?.parent_id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131)));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
if((((!((parent == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,shape_id)))){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(parent,app.common.files.helpers.get_parent_seq.cljs$core$IFn$_invoke$arity$3(objects,parent,parent_id));
}),null,null));
} else {
return null;
}
}));

(app.common.files.helpers.get_parent_seq.cljs$lang$maxFixedArity = 3);

app.common.files.helpers.get_parents_with_self = (function app$common$files$helpers$get_parents_with_self(objects,id){
var lookup = app.common.data.getf(objects);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lookup(id)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(lookup),app.common.files.helpers.get_parent_ids(objects,id));
});
/**
 * Checks the parent for the hidden property
 */
app.common.files.helpers.hidden_parent_QMARK_ = (function app$common$files$helpers$hidden_parent_QMARK_(objects,shape_id){
while(true){
var parent_id = app.common.files.helpers.get_parent_id(objects,shape_id);
if((((parent_id == null)) || ((((shape_id == null)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape_id,app.common.uuid.zero)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,app.common.uuid.zero)))))))){
return false;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id),new cljs.core.Keyword(null,"hidden","hidden",-312506092)))){
return true;
} else {
var G__47769 = objects;
var G__47770 = parent_id;
objects = G__47769;
shape_id = G__47770;
continue;
}
}
break;
}
});
/**
 * Returns a tuple with the list of parents and a map with the position within each parent
 */
app.common.files.helpers.get_parent_ids_with_index = (function app$common$files$helpers$get_parent_ids_with_index(objects,shape_id){
var parent_list = cljs.core.PersistentVector.EMPTY;
var parent_indices = cljs.core.PersistentArrayMap.EMPTY;
var current = shape_id;
while(true){
var parent_id = app.common.files.helpers.get_parent_id(objects,current);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
if((((!((parent == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,current)))){
var parent_list__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parent_list,parent_id);
var parent_indices__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parent_indices,parent_id,app.common.data.index_of(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent),current));
var G__47771 = parent_list__$1;
var G__47772 = parent_indices__$1;
var G__47773 = parent_id;
parent_list = G__47771;
parent_indices = G__47772;
current = G__47773;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_list,parent_indices], null);
}
break;
}
});
app.common.files.helpers.get_siblings_ids = (function app$common$files$helpers$get_siblings_ids(objects,id){
var parent = app.common.files.helpers.get_parent(objects,id);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__47697_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__47697_SHARP_,id);
})),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent));
});
/**
 * Get the frame that contains the shape. If the shape is already a
 *   frame, get itself. If no shape is provided, returns the root frame.
 */
app.common.files.helpers.get_frame = (function app$common$files$helpers$get_frame(var_args){
var G__47699 = arguments.length;
switch (G__47699) {
case 1:
return app.common.files.helpers.get_frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.files.helpers.get_frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.helpers.get_frame.cljs$core$IFn$_invoke$arity$1 = (function (objects){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,app.common.uuid.zero);
}));

(app.common.files.helpers.get_frame.cljs$core$IFn$_invoke$arity$2 = (function (objects,shape_or_id){
if(cljs.core.map_QMARK_(shape_or_id)){
if(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape_or_id)){
return shape_or_id;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,(shape_or_id?.frame_id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape_or_id,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072))));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.common.uuid.zero,shape_or_id)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,app.common.uuid.zero);
} else {
var G__47701 = shape_or_id;
var G__47701__$1 = (((G__47701 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,G__47701));
if((G__47701__$1 == null)){
return null;
} else {
return app.common.files.helpers.get_frame.cljs$core$IFn$_invoke$arity$2(objects,G__47701__$1);
}

}
}
}));

(app.common.files.helpers.get_frame.cljs$lang$maxFixedArity = 2);

app.common.files.helpers.get_root_frame = (function app$common$files$helpers$get_root_frame(objects,shape_id){
var frame_id = (cljs.core.truth_(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,shape_id))?shape_id:cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,shape_id),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072)));
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
if(((app.common.files.helpers.root_QMARK_(frame)) || ((frame == null)))){
return null;
} else {
if(app.common.files.helpers.root_frame_QMARK_.cljs$core$IFn$_invoke$arity$1(frame)){
return frame;
} else {
var G__47702 = objects;
var G__47703 = new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(frame);
return (app.common.files.helpers.get_root_frame.cljs$core$IFn$_invoke$arity$2 ? app.common.files.helpers.get_root_frame.cljs$core$IFn$_invoke$arity$2(G__47702,G__47703) : app.common.files.helpers.get_root_frame.call(null,G__47702,G__47703));

}
}
});
/**
 * Similar to `get-frame, but always return the parent frame. When root
 *   frame is provided, then itself is returned.
 */
app.common.files.helpers.get_parent_frame = (function app$common$files$helpers$get_parent_frame(objects,shape_or_id){
if(cljs.core.map_QMARK_(shape_or_id)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,(shape_or_id?.frame_id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape_or_id,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.common.uuid.zero,shape_or_id)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,app.common.uuid.zero);
} else {
var G__47705 = shape_or_id;
var G__47705__$1 = (((G__47705 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,G__47705));
if((G__47705__$1 == null)){
return null;
} else {
return app.common.files.helpers.get_frame.cljs$core$IFn$_invoke$arity$2(objects,G__47705__$1);
}

}
}
});
app.common.files.helpers.valid_frame_target_QMARK_ = (function app$common$files$helpers$valid_frame_target_QMARK_(objects,parent_id,shape_id){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,shape_id);
return (((!(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,app.common.uuid.zero)));
});
app.common.files.helpers.get_position_on_parent = (function app$common$files$helpers$get_position_on_parent(objects,id){
var obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
var pid = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(obj);
var prt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,pid);
return app.common.data.index_of(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(prt),id);
});
app.common.files.helpers.get_prev_sibling = (function app$common$files$helpers$get_prev_sibling(objects,id){
var obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
var pid = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(obj);
var prt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,pid);
var shapes = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(prt);
var pos = app.common.data.index_of(shapes,id);
if((((!((pos == null)))) && ((pos > (0))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(shapes,(pos - (1)));
} else {
return null;
}
});
/**
 * Retrieve resolved shape objects that are immediate children
 * of the specified shape-id
 */
app.common.files.helpers.get_immediate_children = (function app$common$files$helpers$get_immediate_children(var_args){
var G__47708 = arguments.length;
switch (G__47708) {
case 1:
return app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$1 = (function (objects){
return app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$3(objects,app.common.uuid.zero,null);
}));

(app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$2 = (function (objects,shape_id){
return app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$3(objects,shape_id,null);
}));

(app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$3 = (function (objects,shape_id,p__47709){
var map__47710 = p__47709;
var map__47710__$1 = cljs.core.__destructure_map(map__47710);
var remove_hidden = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47710__$1,new cljs.core.Keyword(null,"remove-hidden","remove-hidden",-1900786853),false);
var remove_blocked = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47710__$1,new cljs.core.Keyword(null,"remove-blocked","remove-blocked",-2130484791),false);
var lookup = app.common.data.getf(objects);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.common.invalid_geometry_QMARK_,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (cid){
var temp__5825__auto__ = lookup(cid);
if(cljs.core.truth_(temp__5825__auto__)){
var child = temp__5825__auto__;
if(((((cljs.core.not(remove_hidden)) || (cljs.core.not(new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(child))))) && (((cljs.core.not(remove_blocked)) || (cljs.core.not(new cljs.core.Keyword(null,"blocked","blocked",181326681).cljs$core$IFn$_invoke$arity$1(child))))))){
return child;
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(lookup(shape_id))));
}));

(app.common.files.helpers.get_immediate_children.cljs$lang$maxFixedArity = 3);

/**
 * Selects the shape that will be the base to add the shapes over
 */
app.common.files.helpers.get_base_shape = (function app$common$files$helpers$get_base_shape(objects,selected){
var indexed_shapes = (app.common.files.helpers.indexed_shapes.cljs$core$IFn$_invoke$arity$2 ? app.common.files.helpers.indexed_shapes.cljs$core$IFn$_invoke$arity$2(objects,selected) : app.common.files.helpers.indexed_shapes.call(null,objects,selected));
var sorted_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.val,indexed_shapes);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.first(sorted_ids));
});
/**
 * Check if `parent-candidate` is parent of `shape-id`
 */
app.common.files.helpers.is_parent_QMARK_ = (function app$common$files$helpers$is_parent_QMARK_(objects,shape_id,parent_candidate){
var current_id = shape_id;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_id,parent_candidate)){
return true;
} else {
if((((current_id == null)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_id,app.common.uuid.zero)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_id,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131)], null)))))))){
return false;
} else {
var G__47791 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_id,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131)], null));
current_id = G__47791;
continue;

}
}
break;
}
});
app.common.files.helpers.make_container = (function app$common$files$helpers$make_container(page_or_component,type){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page_or_component,new cljs.core.Keyword(null,"type","type",1174270348),type);
});
app.common.files.helpers.page_QMARK_ = (function app$common$files$helpers$page_QMARK_(container){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(container),new cljs.core.Keyword(null,"page","page",849072397));
});
app.common.files.helpers.component_QMARK_ = (function app$common$files$helpers$component_QMARK_(container){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(container),new cljs.core.Keyword(null,"component","component",1555936782));
});
/**
 * Check if any shape in the component is touched
 */
app.common.files.helpers.component_touched_QMARK_ = (function app$common$files$helpers$component_touched_QMARK_(objects,root_id){
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,new cljs.core.Keyword(null,"touched","touched",-609134419)),app.common.files.helpers.get_children_with_self(objects,root_id)));
});
/**
 * Check if a nesting loop would be created if the given shape is moved below the given parent
 */
app.common.files.helpers.components_nesting_loop_QMARK_ = (function app$common$files$helpers$components_nesting_loop_QMARK_(var_args){
var G__47712 = arguments.length;
switch (G__47712) {
case 3:
return app.common.files.helpers.components_nesting_loop_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return app.common.files.helpers.components_nesting_loop_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.helpers.components_nesting_loop_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (objects,shape_id,parent_id){
var children = app.common.files.helpers.get_children_with_self(objects,shape_id);
var parents = app.common.files.helpers.get_parents_with_self(objects,parent_id);
return app.common.files.helpers.components_nesting_loop_QMARK_.cljs$core$IFn$_invoke$arity$2(children,parents);
}));

(app.common.files.helpers.components_nesting_loop_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (children,parents){
var xf_get_component_id = cljs.core.keep.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var child_components = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,xf_get_component_id,children);
var parent_components = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,xf_get_component_id,parents);
return cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(child_components,parent_components));
}));

(app.common.files.helpers.components_nesting_loop_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * Return a set with the all unique names used in the
 *   elements (any entity thas has a :name)
 */
app.common.files.helpers.get_used_names = (function app$common$files$helpers$get_used_names(elements){
var elements__$1 = ((cljs.core.map_QMARK_(elements))?cljs.core.vals(elements):elements);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177)),elements__$1);
});
/**
 * Creates a lazy, infinite sequence of names starting with `base-name`,
 * followed by variants with suffixes applied. The sequence follows this pattern:
 * - `base-name`
 * - `(str base-name (suffix-fn 1))`
 * - `(str base-name (suffix-fn 2))`
 * - `(str base-name (suffix-fn 3))`, etc.
 */
app.common.files.helpers.name_seq = (function app$common$files$helpers$name_seq(base_name,suffix_fn){
return cljs.core.cons(base_name,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47713_SHARP_){
return ""+(base_name ?? "")+((suffix_fn.cljs$core$IFn$_invoke$arity$1 ? suffix_fn.cljs$core$IFn$_invoke$arity$1(p1__47713_SHARP_) : suffix_fn.call(null,p1__47713_SHARP_)) ?? "");
}),cljs.core.iterate(cljs.core.inc,(1))));
});
/**
 * Generates a unique name by selecting the first available name from a generated sequence.
 * The sequence consists of `base-name` and its variants, avoiding conflicts with `existing-names`.
 * 
 * Parameters:
 * - `base-name` - string used as the base for name generation.
 * - `existing-names` - a collection of existing names to check for uniqueness.
 * - Options:
 *   - `:suffix-fn` - a function that generates suffixes, given an integer (default: `get-suffix`).
 *   - `:immediate-suffix?` - if `true`, the base name is considered taken, and suffixing starts immediately.
 * 
 * Returns:
 * - A unique name not present in `existing-names`.
 */
app.common.files.helpers.generate_unique_name = (function app$common$files$helpers$generate_unique_name(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47795 = arguments.length;
var i__5750__auto___47796 = (0);
while(true){
if((i__5750__auto___47796 < len__5749__auto___47795)){
args__5755__auto__.push((arguments[i__5750__auto___47796]));

var G__47797 = (i__5750__auto___47796 + (1));
i__5750__auto___47796 = G__47797;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return app.common.files.helpers.generate_unique_name.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(app.common.files.helpers.generate_unique_name.cljs$core$IFn$_invoke$arity$variadic = (function (base_name,existing_names,p__47718){
var map__47719 = p__47718;
var map__47719__$1 = cljs.core.__destructure_map(map__47719);
var suffix_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47719__$1,new cljs.core.Keyword(null,"suffix-fn","suffix-fn",-1026050512));
var immediate_suffix_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47719__$1,new cljs.core.Keyword(null,"immediate-suffix?","immediate-suffix?",-127830647));
var suffix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47719__$1,new cljs.core.Keyword(null,"suffix","suffix",367373057));
app.common.data.macros.runtime_assert("expected a set of strings",(function (){
return cljs.core.coll_QMARK_(existing_names);
}));

app.common.data.macros.runtime_assert("expected a string for `basename`.",(function (){
return typeof base_name === 'string';
}));

var suffix_fn__$1 = (cljs.core.truth_(suffix_fn)?suffix_fn:(cljs.core.truth_(suffix)?(function (copy_count){
return ""+"-"+(suffix ?? "")+((((copy_count > (1)))?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(copy_count)].join(''):null) ?? "");
}):(function (copy_count){
return ""+" "+(copy_count ?? "");
})));
var existing_name_set = (function (){var G__47720 = cljs.core.set(existing_names);
if(cljs.core.truth_(immediate_suffix_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__47720,base_name);
} else {
return G__47720;
}
})();
var names = app.common.files.helpers.name_seq(base_name,suffix_fn__$1);
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__47714_SHARP_){
return cljs.core.contains_QMARK_(existing_name_set,p1__47714_SHARP_);
}),names));
}));

(app.common.files.helpers.generate_unique_name.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(app.common.files.helpers.generate_unique_name.cljs$lang$applyTo = (function (seq47715){
var G__47716 = cljs.core.first(seq47715);
var seq47715__$1 = cljs.core.next(seq47715);
var G__47717 = cljs.core.first(seq47715__$1);
var seq47715__$2 = cljs.core.next(seq47715__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47716,G__47717,seq47715__$2);
}));

/**
 * Go through all pages of a file and apply a function to each one
 */
app.common.files.helpers.walk_pages = (function app$common$files$helpers$walk_pages(f,data){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),(function (p1__47721_SHARP_){
return app.common.data.mapm.cljs$core$IFn$_invoke$arity$2(f,p1__47721_SHARP_);
}));
});
/**
 * Update multiple objects in a page at once
 */
app.common.files.helpers.update_object_list = (function app$common$files$helpers$update_object_list(page,objects_list){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword(null,"objects","objects",2099713734),(function (p1__47722_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__47722_SHARP_,app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),objects_list));
}));
});
app.common.files.helpers.append_at_the_end = (function app$common$files$helpers$append_at_the_end(prev_ids,ids){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,id){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),acc))){
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,id);
}
}),cljs.core.vec(prev_ids),ids);
});
/**
 * Clean a list of ids from circular references. Optimized fast-path for single selections.
 */
app.common.files.helpers.clean_loops = (function app$common$files$helpers$clean_loops(objects,ids){
if((cljs.core.count(ids) <= (1))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),ids);
} else {
var ids_set = ((cljs.core.set_QMARK_(ids))?ids:cljs.core.set(ids));
var parent_selected_QMARK_ = (function (id){
var parents = app.common.files.helpers.get_parent_ids(objects,id);
return cljs.core.some((function (p1__47724_SHARP_){
return cljs.core.contains_QMARK_(ids_set,p1__47724_SHARP_);
}),parents);
});
var add_element = (function (result,id){
var G__47725 = result;
if(cljs.core.not(parent_selected_QMARK_(id))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__47725,id);
} else {
return G__47725;
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_element,app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),ids);
}
});
/**
 * Retrieves a vector with the indexes for each element in the layer
 *   tree. This will be used for shift+selection.
 */
app.common.files.helpers.indexed_shapes = (function app$common$files$helpers$indexed_shapes(objects,selected){
var index = (1);
var result = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var add_QMARK_ = false;
var pending = cljs.core.set(selected);
var shapes = cljs.core.rseq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,app.common.uuid.zero),new cljs.core.Keyword(null,"shapes","shapes",1897594879)));
while(true){
var shape_id = cljs.core.first(shapes);
if(cljs.core.truth_((function (){var and__5023__auto__ = app.common.data.not_empty_QMARK_(pending);
if(and__5023__auto__){
return shape_id;
} else {
return and__5023__auto__;
}
})())){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,shape_id);
var add_QMARK___$1 = ((add_QMARK_) || (cljs.core.contains_QMARK_(selected,shape_id)));
var pending__$1 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pending,shape_id);
var result__$1 = ((add_QMARK___$1)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,app.common.data.vec2(index,shape_id)):result);
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
if(cljs.core.truth_(temp__5823__auto__)){
var children = temp__5823__auto__;
var G__47798 = (index + (1));
var G__47799 = result__$1;
var G__47800 = add_QMARK___$1;
var G__47801 = pending__$1;
var G__47802 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rseq(children),cljs.core.rest(shapes));
index = G__47798;
result = G__47799;
add_QMARK_ = G__47800;
pending = G__47801;
shapes = G__47802;
continue;
} else {
var G__47803 = (index + (1));
var G__47804 = result__$1;
var G__47805 = add_QMARK___$1;
var G__47806 = pending__$1;
var G__47807 = cljs.core.rest(shapes);
index = G__47803;
result = G__47804;
add_QMARK_ = G__47805;
pending = G__47806;
shapes = G__47807;
continue;
}
} else {
return cljs.core.persistent_BANG_(result);
}
break;
}
});
/**
 * Given a selection selects all the shapes between the first and last in
 * an indexed manner (shift selection)
 */
app.common.files.helpers.expand_region_selection = (function app$common$files$helpers$expand_region_selection(objects,selection){
var selection__$1 = ((cljs.core.set_QMARK_(selection))?selection:cljs.core.set(selection));
var indexed_shapes = app.common.files.helpers.indexed_shapes(objects,selection__$1);
var indexes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,indexed_shapes);
var from = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,indexes);
var to = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,indexes);
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__47726){
var vec__47727 = p__47726;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47727,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47727,(1),null);
return (((idx >= from)) && ((idx <= to)));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.val));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,xform,indexed_shapes);
});
/**
 * Retrieves a ordered vector for each element in the layer tree and
 *   filted by selected set
 */
app.common.files.helpers.order_by_indexed_shapes = (function app$common$files$helpers$order_by_indexed_shapes(objects,selected){
var selected__$1 = ((cljs.core.set_QMARK_(selected))?selected:cljs.core.set(selected));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (o){
return cljs.core.contains_QMARK_(selected__$1,cljs.core.val(o));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.val)),app.common.files.helpers.indexed_shapes(objects,selected__$1));
});
/**
 * Given a collection of shapes, calculate their positions
 * in the parent, find first index and return next one
 */
app.common.files.helpers.get_index_replacement = (function app$common$files$helpers$get_index_replacement(shapes,objects){
return (app.common.files.helpers.get_position_on_parent(objects,cljs.core.first(app.common.files.helpers.order_by_indexed_shapes(objects,shapes))) + (1));
});
/**
 * Collect all media refs on the provided shape. Returns a set of ids
 */
app.common.files.helpers.collect_shape_media_refs = (function app$common$files$helpers$collect_shape_media_refs(shape){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill-image","fill-image",-99895848).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(shape)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(shape)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214),new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(shape)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fills","fills",902966780),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.tree_seq(cljs.core.map_QMARK_,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape))], 0)))], 0)));
});
/**
 * A transducer for collect media-id usage across a container (page or
 *   component)
 */
app.common.files.helpers.xform_COLON_collect_media_refs = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"objects","objects",2099713734)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.vals),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(app.common.files.helpers.collect_shape_media_refs));
/**
 * Given a fdata (file data), returns all media references used in the
 *   file data
 */
app.common.files.helpers.collect_used_media = (function app$common$files$helpers$collect_used_media(data){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,app.common.files.helpers.xform_COLON_collect_media_refs,cljs.core.vals(new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145).cljs$core$IFn$_invoke$arity$1(data))),app.common.files.helpers.xform_COLON_collect_media_refs,cljs.core.vals(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(data))),cljs.core.keys(new cljs.core.Keyword(null,"media","media",-1066138403).cljs$core$IFn$_invoke$arity$1(data)));
});
/**
 * A function responsible to analyze the file data or shape for references
 *   and apply lookup-index on it.
 */
app.common.files.helpers.relink_refs = (function app$common$files$helpers$relink_refs(data,lookup_index){
var process_map_form = (function app$common$files$helpers$relink_refs_$_process_map_form(form){
var G__47732 = form;
var G__47732__$1 = ((((cljs.core.map_QMARK_(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(form))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(form)))))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__47732,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"id","id",-1388402092)], null),lookup_index):G__47732);
var G__47732__$2 = ((cljs.core.map_QMARK_(new cljs.core.Keyword(null,"fill-image","fill-image",-99895848).cljs$core$IFn$_invoke$arity$1(form)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__47732__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),new cljs.core.Keyword(null,"id","id",-1388402092)], null),lookup_index):G__47732__$1);
var G__47732__$3 = ((cljs.core.map_QMARK_(new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214).cljs$core$IFn$_invoke$arity$1(form)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__47732__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214),new cljs.core.Keyword(null,"id","id",-1388402092)], null),lookup_index):G__47732__$2);
var G__47732__$4 = ((cljs.core.uuid_QMARK_(new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255).cljs$core$IFn$_invoke$arity$1(form)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__47732__$3,new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255),lookup_index):G__47732__$3);
var G__47732__$5 = ((cljs.core.uuid_QMARK_(new cljs.core.Keyword(null,"stroke-color-ref-file","stroke-color-ref-file",2014652279).cljs$core$IFn$_invoke$arity$1(form)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__47732__$4,new cljs.core.Keyword(null,"stroke-color-ref-file","stroke-color-ref-file",2014652279),lookup_index):G__47732__$4);
var G__47732__$6 = ((cljs.core.uuid_QMARK_(new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688).cljs$core$IFn$_invoke$arity$1(form)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__47732__$5,new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688),lookup_index):G__47732__$5);
var G__47732__$7 = ((cljs.core.uuid_QMARK_(new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(form)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__47732__$6,new cljs.core.Keyword(null,"component-file","component-file",-1378670433),lookup_index):G__47732__$6);
if(cljs.core.uuid_QMARK_(new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(form))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__47732__$7,new cljs.core.Keyword(null,"file-id","file-id",-811871323),lookup_index);
} else {
return G__47732__$7;
}
});
var process_form = (function app$common$files$helpers$relink_refs_$_process_form(form){
if(cljs.core.map_QMARK_(form)){
return process_map_form(form);
} else {
return form;
}
});
return clojure.walk.postwalk(process_form,data);
});
/**
 * Retrieves a new objects map only with the objects under frame-id (with frame-id)
 */
app.common.files.helpers.get_frame_objects = (function app$common$files$helpers$get_frame_objects(objects,frame_id){
var ids = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_id], null),app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,frame_id));
return cljs.core.select_keys(objects,ids);
});
/**
 * Returns a map of the `objects` grouped by frame. Every value of the map has
 *   the same format as objects id->shape-data
 */
app.common.files.helpers.objects_by_frame = (function app$common$files$helpers$objects_by_frame(objects){
var process_shape = (function app$common$files$helpers$objects_by_frame_$_process_shape(objects__$1,p__47737){
var vec__47738 = p__47737;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47738,(0),null);
var shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47738,(1),null);
var frame_id = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape)))?id:new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape));
var cur = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects__$1,frame_id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
}
})(),id,shape);
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(objects__$1,frame_id,cur);
});
return cljs.core.update_vals(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_shape,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),objects)),cljs.core.persistent_BANG_);
});
/**
 * Given a set of shapes, returns an objects subtree with the parents
 *   of the selected items up to the root. Useful to calculate a partial z-index
 */
app.common.files.helpers.selected_subtree = (function app$common$files$helpers$selected_subtree(objects,selected){
var selected_PLUS_parents = cljs.core.into.cljs$core$IFn$_invoke$arity$3(selected,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__47741_SHARP_){
return app.common.files.helpers.get_parent_ids(objects,p1__47741_SHARP_);
})),selected);
var remove_children = (function (shape){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"shapes","shapes",1897594879),(function (p1__47742_SHARP_){
return cljs.core.filterv(selected_PLUS_parents,p1__47742_SHARP_);
}));
});
return cljs.core.update_vals(cljs.core.select_keys(objects,selected_PLUS_parents),remove_children);
});
app.common.files.helpers.is_child_QMARK_ = (function app$common$files$helpers$is_child_QMARK_(objects,parent_id,candidate_child_id){
var cur_id = candidate_child_id;
while(true){
var cur_parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,cur_id),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,cur_parent_id)){
return true;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur_parent_id,app.common.uuid.zero)) || ((cur_parent_id == null)))){
return false;
} else {
var G__47824 = cur_parent_id;
cur_id = G__47824;
continue;

}
}
break;
}
});
app.common.files.helpers.reduce_objects = (function app$common$files$helpers$reduce_objects(var_args){
var G__47744 = arguments.length;
switch (G__47744) {
case 3:
return app.common.files.helpers.reduce_objects.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.files.helpers.reduce_objects.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return app.common.files.helpers.reduce_objects.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.helpers.reduce_objects.cljs$core$IFn$_invoke$arity$3 = (function (objects,reducer_fn,init_val){
return app.common.files.helpers.reduce_objects.cljs$core$IFn$_invoke$arity$4(objects,null,reducer_fn,init_val);
}));

(app.common.files.helpers.reduce_objects.cljs$core$IFn$_invoke$arity$4 = (function (objects,check_children_QMARK_,reducer_fn,init_val){
return app.common.files.helpers.reduce_objects.cljs$core$IFn$_invoke$arity$5(objects,check_children_QMARK_,app.common.uuid.zero,reducer_fn,init_val);
}));

(app.common.files.helpers.reduce_objects.cljs$core$IFn$_invoke$arity$5 = (function (objects,check_children_QMARK_,root_id,reducer_fn,init_val){
var root_children = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_id,new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null));
if(cljs.core.empty_QMARK_(root_children)){
return init_val;
} else {
var current_val = init_val;
var current_id = cljs.core.first(root_children);
var pending_ids = cljs.core.rest(root_children);
var processed = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.contains_QMARK_(processed,current_id)){
var G__47828 = current_val;
var G__47829 = cljs.core.first(pending_ids);
var G__47830 = cljs.core.rest(pending_ids);
var G__47831 = processed;
current_val = G__47828;
current_id = G__47829;
pending_ids = G__47830;
processed = G__47831;
continue;
} else {
var current_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,current_id);
var processed__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(processed,current_id);
var next_val = (reducer_fn.cljs$core$IFn$_invoke$arity$2 ? reducer_fn.cljs$core$IFn$_invoke$arity$2(current_val,current_shape) : reducer_fn.call(null,current_val,current_shape));
var next_pending_ids = (cljs.core.truth_((function (){var or__5025__auto__ = (check_children_QMARK_ == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return (check_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? check_children_QMARK_.cljs$core$IFn$_invoke$arity$1(current_shape) : check_children_QMARK_.call(null,current_shape));
}
})())?cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(current_shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),pending_ids):pending_ids);
if(cljs.core.empty_QMARK_(next_pending_ids)){
return next_val;
} else {
var G__47832 = next_val;
var G__47833 = cljs.core.first(next_pending_ids);
var G__47834 = cljs.core.rest(next_pending_ids);
var G__47835 = processed__$1;
current_val = G__47832;
current_id = G__47833;
pending_ids = G__47834;
processed = G__47835;
continue;
}
}
break;
}
}
}));

(app.common.files.helpers.reduce_objects.cljs$lang$maxFixedArity = 5);

app.common.files.helpers.selected_with_children = (function app$common$files$helpers$selected_with_children(objects,selected){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(selected,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__47745_SHARP_){
return app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,p1__47745_SHARP_);
})),selected);
});
app.common.files.helpers.get_shape_id_root_frame = (function app$common$files$helpers$get_shape_id_root_frame(objects,shape_id){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(app.common.data.seek.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.root_frame_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),cljs.core.cons(shape_id,app.common.files.helpers.get_parent_ids(objects,shape_id)))));
});
/**
 * Search for the common frame for the selected shapes. Otherwise returns the root frame
 */
app.common.files.helpers.common_parent_frame = (function app$common$files$helpers$common_parent_frame(objects,selected){
var frame_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(selected),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072)], null));
var frame_parents = app.common.files.helpers.get_parent_ids(objects,frame_id);
var selected__$1 = cljs.core.rest(selected);
while(true){
if(cljs.core.empty_QMARK_(selected__$1)){
return frame_id;
} else {
var current = cljs.core.first(selected__$1);
var parent_QMARK_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,app.common.files.helpers.get_parent_ids(objects,current));
var vec__47749 = (cljs.core.truth_((parent_QMARK_.cljs$core$IFn$_invoke$arity$1 ? parent_QMARK_.cljs$core$IFn$_invoke$arity$1(frame_id) : parent_QMARK_.call(null,frame_id)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_id,frame_parents], null):(function (){var frame_id__$1 = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(parent_QMARK_,frame_parents);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_id__$1,app.common.files.helpers.get_parent_ids(objects,frame_id__$1)], null);
})());
var frame_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47749,(0),null);
var frame_parents__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47749,(1),null);
var G__47840 = frame_id__$1;
var G__47841 = frame_parents__$1;
var G__47842 = cljs.core.rest(selected__$1);
frame_id = G__47840;
frame_parents = G__47841;
selected__$1 = G__47842;
continue;
}
break;
}
});
app.common.files.helpers.fixed_scroll_QMARK_ = (function app$common$files$helpers$fixed_scroll_QMARK_(shape){
var and__5023__auto__ = new cljs.core.Keyword(null,"fixed-scroll","fixed-scroll",-83520691).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape),app.common.uuid.zero)));
} else {
return and__5023__auto__;
}
});
app.common.files.helpers.fixed_QMARK_ = (function app$common$files$helpers$fixed_QMARK_(objects,shape_id){
var ids_to_check = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null),app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,shape_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__47752_SHARP_){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__47752_SHARP_,app.common.uuid.zero)) && (cljs.core.not(app.common.files.helpers.root_frame_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,p1__47752_SHARP_))));
}),app.common.files.helpers.get_parent_ids(objects,shape_id))], 0));
return cljs.core.boolean$(app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (id){

return app.common.files.helpers.fixed_scroll_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id));
}),ids_to_check));
});

//# sourceMappingURL=app.common.files.helpers.js.map
