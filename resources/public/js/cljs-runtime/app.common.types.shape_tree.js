import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.js";
import "./app.common.math.js";
import "./app.common.types.component.js";
import "./app.common.types.shape.layout.js";
import "./app.common.uuid.js";
goog.provide('app.common.types.shape_tree');
/**
 * Insert a shape in the tree, at the given index below the given parent or frame.
 *   Update the parent as needed.
 */
app.common.types.shape_tree.add_shape = (function app$common$types$shape_tree$add_shape(id,shape,container,frame_id,parent_id,index,ignore_touched){
var update_parent_shapes = (function (shapes){
var shapes__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shapes);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),shapes__$1))){
return shapes__$1;
} else {
if((index == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shapes__$1,id);
} else {
return app.common.data.insert_at_index(shapes__$1,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));

}
}
});
var update_parent = (function (parent){
var G__51022 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(parent,new cljs.core.Keyword(null,"shapes","shapes",1897594879),update_parent_shapes),new cljs.core.Keyword(null,"shapes","shapes",1897594879),app.common.data.vec_without_nils);
if(((app.common.types.component.in_component_copy_QMARK_(parent)) && (cljs.core.not(ignore_touched)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51022,new cljs.core.Keyword(null,"remote-synced","remote-synced",1564821477));
} else {
return G__51022;
}
});
var update_objects = (function (objects,parent_id__$1){
var parent_id__$2 = ((cljs.core.contains_QMARK_(objects,parent_id__$1))?parent_id__$1:app.common.uuid.zero);
var frame_id__$1 = ((cljs.core.contains_QMARK_(objects,frame_id))?frame_id:app.common.uuid.zero);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(objects,id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id__$1),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id__$2),new cljs.core.Keyword(null,"id","id",-1388402092),id)),parent_id__$2,update_parent);
});
var parent_id__$1 = (function (){var or__5025__auto__ = parent_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return frame_id;
}
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(container,new cljs.core.Keyword(null,"objects","objects",2099713734),update_objects,parent_id__$1);
});
app.common.types.shape_tree.parent_of_QMARK_ = (function app$common$types$shape_tree$parent_of_QMARK_(parent,child){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(child));
});
/**
 * Get a shape identified by id
 */
app.common.types.shape_tree.get_shape = (function app$common$types$shape_tree$get_shape(container,id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container),id);
});
/**
 * Replace a shape in the tree with a new one
 */
app.common.types.shape_tree.set_shape = (function app$common$types$shape_tree$set_shape(container,shape){
return cljs.core.assoc_in(container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),shape);
});
/**
 * Remove a shape and all its children from the tree.
 * 
 * Remove it also from its parent, and marks it as touched
 * if needed, unless ignore-touched is true.
 */
app.common.types.shape_tree.delete_shape = (function app$common$types$shape_tree$delete_shape(var_args){
var G__51036 = arguments.length;
switch (G__51036) {
case 2:
return app.common.types.shape_tree.delete_shape.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.shape_tree.delete_shape.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape_tree.delete_shape.cljs$core$IFn$_invoke$arity$2 = (function (container,shape_id){
return app.common.types.shape_tree.delete_shape.cljs$core$IFn$_invoke$arity$3(container,shape_id,false);
}));

(app.common.types.shape_tree.delete_shape.cljs$core$IFn$_invoke$arity$3 = (function (container,shape_id,ignore_touched){
var delete_from_parent = (function app$common$types$shape_tree$delete_from_parent(parent){
var parent__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(parent,new cljs.core.Keyword(null,"shapes","shapes",1897594879),app.common.data.without_obj,shape_id);
var G__51044 = parent__$1;
if(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(parent__$1);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(ignore_touched);
} else {
return and__5023__auto__;
}
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51044,new cljs.core.Keyword(null,"remote-synced","remote-synced",1564821477));
} else {
return G__51044;
}
});
var delete_from_objects = (function app$common$types$shape_tree$delete_from_objects(objects){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,shape_id);
if(cljs.core.truth_(temp__5823__auto__)){
var target = temp__5823__auto__;
var parent_id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(target);
}
})();
var children_ids = app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,shape_id);
return app.common.data.update_when(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,objects,cljs.core.cons(shape_id,children_ids)),parent_id,delete_from_parent);
} else {
return objects;
}
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(container,new cljs.core.Keyword(null,"objects","objects",2099713734),delete_from_objects);
}));

(app.common.types.shape_tree.delete_shape.cljs$lang$maxFixedArity = 3);

/**
 * Checks and fix the children relations of the shape. If a children does not
 *   exists on the objects tree, it will be removed from shape.
 */
app.common.types.shape_tree.fix_broken_children = (function app$common$types$shape_tree$fix_broken_children(p__51045,id){
var map__51046 = p__51045;
var map__51046__$1 = cljs.core.__destructure_map(map__51046);
var container = map__51046__$1;
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51046__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var contains_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,objects);
return app.common.data.update_in_when(container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),id,new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null),(function (shapes){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(contains_QMARK_),shapes);
}));
});
/**
 * Retrieves all frame objects as vector
 */
app.common.types.shape_tree.get_frames = (function app$common$types$shape_tree$get_frames(var_args){
var G__51050 = arguments.length;
switch (G__51050) {
case 1:
return app.common.types.shape_tree.get_frames.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.types.shape_tree.get_frames.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape_tree.get_frames.cljs$core$IFn$_invoke$arity$1 = (function (objects){
return app.common.types.shape_tree.get_frames.cljs$core$IFn$_invoke$arity$2(objects,null);
}));

(app.common.types.shape_tree.get_frames.cljs$core$IFn$_invoke$arity$2 = (function (objects,p__51056){
var map__51057 = p__51056;
var map__51057__$1 = cljs.core.__destructure_map(map__51057);
var skip_components_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51057__$1,new cljs.core.Keyword(null,"skip-components?","skip-components?",1022507747),false);
var skip_copies_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51057__$1,new cljs.core.Keyword(null,"skip-copies?","skip-copies?",1278015996),false);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51048_SHARP_){
return ((((skip_components_QMARK_) && (app.common.types.component.instance_head_QMARK_(p1__51048_SHARP_)))) || (((skip_copies_QMARK_) && (((app.common.types.component.instance_head_QMARK_(p1__51048_SHARP_)) && ((!(app.common.types.component.main_instance_QMARK_(p1__51048_SHARP_)))))))));
}),(function (){var or__5025__auto__ = new cljs.core.Keyword("app.common.types.shape-tree","index-frames","app.common.types.shape-tree/index-frames",-155995028).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(objects));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var lookup = app.common.data.getf(objects);
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__51047_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.common.uuid.zero,p1__51047_SHARP_);
})),cljs.core.keep.cljs$core$IFn$_invoke$arity$1(lookup),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(app.common.files.helpers.frame_shape_QMARK_));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(xform,cljs.core.keys(objects));
}
})());
}));

(app.common.types.shape_tree.get_frames.cljs$lang$maxFixedArity = 2);

/**
 * Retrieves all frame ids as vector
 */
app.common.types.shape_tree.get_frames_ids = (function app$common$types$shape_tree$get_frames_ids(var_args){
var G__51068 = arguments.length;
switch (G__51068) {
case 1:
return app.common.types.shape_tree.get_frames_ids.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.types.shape_tree.get_frames_ids.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape_tree.get_frames_ids.cljs$core$IFn$_invoke$arity$1 = (function (objects){
return app.common.types.shape_tree.get_frames_ids.cljs$core$IFn$_invoke$arity$2(objects,null);
}));

(app.common.types.shape_tree.get_frames_ids.cljs$core$IFn$_invoke$arity$2 = (function (objects,options){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),app.common.types.shape_tree.get_frames.cljs$core$IFn$_invoke$arity$2(objects,options));
}));

(app.common.types.shape_tree.get_frames_ids.cljs$lang$maxFixedArity = 2);

app.common.types.shape_tree.get_nested_frames = (function app$common$types$shape_tree$get_nested_frames(objects,frame_id){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(app.common.files.helpers.frame_shape_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092))),app.common.files.helpers.get_children(objects,frame_id));
});
/**
 * Retrieves all frame objects as vector. It is not implemented in
 *   function of `cfh/get-immediate-children` for performance
 *   reasons. This function is executed in the render hot path.
 */
app.common.types.shape_tree.get_root_frames_ids = (function app$common$types$shape_tree$get_root_frames_ids(objects){
var add_frame = (function (result,shape){
var G__51071 = result;
if(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__51071,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
} else {
return G__51071;
}
});
return app.common.files.helpers.reduce_objects.cljs$core$IFn$_invoke$arity$4(objects,cljs.core.complement(app.common.files.helpers.frame_shape_QMARK_),add_frame,cljs.core.PersistentVector.EMPTY);
});
/**
 * Get all the objects under the root object
 */
app.common.types.shape_tree.get_root_objects = (function app$common$types$shape_tree$get_root_objects(objects){
var add_shape = (function (result,shape){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,shape);
});
return app.common.files.helpers.reduce_objects.cljs$core$IFn$_invoke$arity$4(objects,cljs.core.complement(app.common.files.helpers.frame_shape_QMARK_),add_shape,cljs.core.PersistentVector.EMPTY);
});
/**
 * Get all shapes that are not frames
 */
app.common.types.shape_tree.get_root_shapes = (function app$common$types$shape_tree$get_root_shapes(objects){
var add_shape = (function (result,shape){
var G__51072 = result;
if((!(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__51072,shape);
} else {
return G__51072;
}
});
return app.common.files.helpers.reduce_objects.cljs$core$IFn$_invoke$arity$4(objects,cljs.core.complement(app.common.files.helpers.frame_shape_QMARK_),add_shape,cljs.core.PersistentVector.EMPTY);
});
app.common.types.shape_tree.get_root_shapes_ids = (function app$common$types$shape_tree$get_root_shapes_ids(objects){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),app.common.types.shape_tree.get_root_shapes(objects));
});
app.common.types.shape_tree.get_base = (function app$common$types$shape_tree$get_base(id_a,id_b,id_parents){
var vec__51073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_parents,id_a);
var parents_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51073,(0),null);
var parents_a_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51073,(1),null);
var vec__51076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_parents,id_b);
var parents_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51076,(0),null);
var parents_b_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51076,(1),null);
var parents_a__$1 = cljs.core.cons(id_a,parents_a);
var parents_b__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id_b]),parents_b);
var base_id = (function (){var or__5025__auto__ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(parents_b__$1,parents_a__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.uuid.zero;
}
})();
var idx_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(parents_a_index,base_id);
var idx_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(parents_b_index,base_id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_id,idx_a,idx_b], null);
});
app.common.types.shape_tree.is_shape_over_shape_QMARK_ = (function app$common$types$shape_tree$is_shape_over_shape_QMARK_(objects,base_shape_id,over_shape_id,bottom_frames_QMARK_,id_parents){
var vec__51079 = app.common.types.shape_tree.get_base(base_shape_id,over_shape_id,id_parents);
var base_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51079,(0),null);
var index_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51079,(1),null);
var index_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51079,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_id,base_shape_id)){
return ((bottom_frames_QMARK_) && (app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,base_id)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_id,over_shape_id)){
return (((!(bottom_frames_QMARK_))) || ((!(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,base_id)))));
} else {
var layer_order_QMARK_ = app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,base_id);
var vec__51082 = (cljs.core.truth_(layer_order_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.shape.layout.layout_z_index.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,base_id),new cljs.core.Keyword(null,"shapes","shapes",1897594879)),index_a)),app.common.types.shape.layout.layout_z_index.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,base_id),new cljs.core.Keyword(null,"shapes","shapes",1897594879)),index_b))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var z_index_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51082,(0),null);
var z_index_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51082,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z_index_a,z_index_b)) && (cljs.core.not(layer_order_QMARK_)))){
return (index_a < index_b);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z_index_a,z_index_b);
if(and__5023__auto__){
return layer_order_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return (index_a > index_b);
} else {
return (z_index_a < z_index_b);

}
}

}
}
});
app.common.types.shape_tree.sort_z_index = (function app$common$types$shape_tree$sort_z_index(var_args){
var G__51087 = arguments.length;
switch (G__51087) {
case 2:
return app.common.types.shape_tree.sort_z_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.shape_tree.sort_z_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape_tree.sort_z_index.cljs$core$IFn$_invoke$arity$2 = (function (objects,ids){
return app.common.types.shape_tree.sort_z_index.cljs$core$IFn$_invoke$arity$3(objects,ids,null);
}));

(app.common.types.shape_tree.sort_z_index.cljs$core$IFn$_invoke$arity$3 = (function (objects,ids,p__51088){
var map__51089 = p__51088;
var map__51089__$1 = cljs.core.__destructure_map(map__51089);
var options = map__51089__$1;
var bottom_frames_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51089__$1,new cljs.core.Keyword(null,"bottom-frames?","bottom-frames?",1381369412),false);
var id_parents = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__51085_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__51085_SHARP_,app.common.files.helpers.get_parent_ids_with_index(objects,p1__51085_SHARP_)],null));
})),ids);
var comp = (function app$common$types$shape_tree$comp(id_a,id_b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_a,id_b)){
return (0);
} else {
if(app.common.types.shape_tree.is_shape_over_shape_QMARK_(objects,id_a,id_b,bottom_frames_QMARK_,id_parents)){
return (1);
} else {
return (-1);

}
}
});
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(comp,ids);
}));

(app.common.types.shape_tree.sort_z_index.cljs$lang$maxFixedArity = 3);

app.common.types.shape_tree.sort_z_index_objects = (function app$common$types$shape_tree$sort_z_index_objects(var_args){
var G__51092 = arguments.length;
switch (G__51092) {
case 2:
return app.common.types.shape_tree.sort_z_index_objects.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.shape_tree.sort_z_index_objects.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape_tree.sort_z_index_objects.cljs$core$IFn$_invoke$arity$2 = (function (objects,items){
return app.common.types.shape_tree.sort_z_index_objects.cljs$core$IFn$_invoke$arity$3(objects,items,null);
}));

(app.common.types.shape_tree.sort_z_index_objects.cljs$core$IFn$_invoke$arity$3 = (function (objects,items,p__51093){
var map__51094 = p__51093;
var map__51094__$1 = cljs.core.__destructure_map(map__51094);
var bottom_frames_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51094__$1,new cljs.core.Keyword(null,"bottom-frames?","bottom-frames?",1381369412),false);
var id_parents = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__51090_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(p1__51090_SHARP_?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__51090_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092))),app.common.files.helpers.get_parent_ids_with_index(objects,(p1__51090_SHARP_?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__51090_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092))))],null));
})),items);
return app.common.data.unstable_sort.cljs$core$IFn$_invoke$arity$2((function (obj_a,obj_b){
var id_a = (obj_a?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(obj_a,new cljs.core.Keyword(null,"id","id",-1388402092)));
var id_b = (obj_b?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(obj_b,new cljs.core.Keyword(null,"id","id",-1388402092)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_a,id_b)){
return (0);
} else {
if(app.common.types.shape_tree.is_shape_over_shape_QMARK_(objects,id_a,id_b,bottom_frames_QMARK_,id_parents)){
return (1);
} else {
return (-1);
}
}
}),items);
}));

(app.common.types.shape_tree.sort_z_index_objects.cljs$lang$maxFixedArity = 3);

app.common.types.shape_tree.get_frame_by_position = (function app$common$types$shape_tree$get_frame_by_position(var_args){
var G__51111 = arguments.length;
switch (G__51111) {
case 2:
return app.common.types.shape_tree.get_frame_by_position.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.shape_tree.get_frame_by_position.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape_tree.get_frame_by_position.cljs$core$IFn$_invoke$arity$2 = (function (objects,position){
return app.common.types.shape_tree.get_frame_by_position.cljs$core$IFn$_invoke$arity$3(objects,position,null);
}));

(app.common.types.shape_tree.get_frame_by_position.cljs$core$IFn$_invoke$arity$3 = (function (objects,position,options){
app.common.data.macros.runtime_assert("expected a point",(function (){
return app.common.geom.point.point_QMARK_(position);
}));

var frames = app.common.types.shape_tree.get_frames.cljs$core$IFn$_invoke$arity$2(objects,options);
var frames__$1 = app.common.types.shape_tree.sort_z_index_objects.cljs$core$IFn$_invoke$arity$3(objects,frames,options);
var validator = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"validator","validator",-1966190681));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (function (){
return true;
});
}
})();
var or__5025__auto__ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__51099_SHARP_){
return (((!((position == null)))) && (((app.common.geom.shapes.has_point_QMARK_(p1__51099_SHARP_,position)) && ((validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(p1__51099_SHARP_) : validator.call(null,p1__51099_SHARP_))))));
}),frames__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,app.common.uuid.zero);
}
}));

(app.common.types.shape_tree.get_frame_by_position.cljs$lang$maxFixedArity = 3);

app.common.types.shape_tree.get_frame_id_by_position = (function app$common$types$shape_tree$get_frame_id_by_position(var_args){
var G__51114 = arguments.length;
switch (G__51114) {
case 2:
return app.common.types.shape_tree.get_frame_id_by_position.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.shape_tree.get_frame_id_by_position.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape_tree.get_frame_id_by_position.cljs$core$IFn$_invoke$arity$2 = (function (objects,position){
return app.common.types.shape_tree.get_frame_id_by_position.cljs$core$IFn$_invoke$arity$3(objects,position,null);
}));

(app.common.types.shape_tree.get_frame_id_by_position.cljs$core$IFn$_invoke$arity$3 = (function (objects,position,options){
var temp__5825__auto__ = app.common.types.shape_tree.get_frame_by_position.cljs$core$IFn$_invoke$arity$3(objects,position,options);
if(cljs.core.truth_(temp__5825__auto__)){
var frame = temp__5825__auto__;
return (frame?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(frame,new cljs.core.Keyword(null,"id","id",-1388402092)));
} else {
return null;
}
}));

(app.common.types.shape_tree.get_frame_id_by_position.cljs$lang$maxFixedArity = 3);

app.common.types.shape_tree.get_frames_by_position = (function app$common$types$shape_tree$get_frames_by_position(var_args){
var G__51119 = arguments.length;
switch (G__51119) {
case 2:
return app.common.types.shape_tree.get_frames_by_position.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.shape_tree.get_frames_by_position.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape_tree.get_frames_by_position.cljs$core$IFn$_invoke$arity$2 = (function (objects,position){
return app.common.types.shape_tree.get_frames_by_position.cljs$core$IFn$_invoke$arity$3(objects,position,null);
}));

(app.common.types.shape_tree.get_frames_by_position.cljs$core$IFn$_invoke$arity$3 = (function (objects,position,options){
return app.common.types.shape_tree.sort_z_index_objects.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51117_SHARP_){
return (((!((position == null)))) && (app.common.geom.shapes.has_point_QMARK_(p1__51117_SHARP_,position)));
}),app.common.types.shape_tree.get_frames.cljs$core$IFn$_invoke$arity$2(objects,options)));
}));

(app.common.types.shape_tree.get_frames_by_position.cljs$lang$maxFixedArity = 3);

/**
 * Search for the top nested frame for positioning shapes when moving or creating.
 *   Looks for all the frames in a position and then goes in depth between the top-most and its
 *   children to find the target.
 */
app.common.types.shape_tree.top_nested_frame = (function app$common$types$shape_tree$top_nested_frame(var_args){
var G__51126 = arguments.length;
switch (G__51126) {
case 2:
return app.common.types.shape_tree.top_nested_frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.shape_tree.top_nested_frame.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape_tree.top_nested_frame.cljs$core$IFn$_invoke$arity$2 = (function (objects,position){
return app.common.types.shape_tree.top_nested_frame.cljs$core$IFn$_invoke$arity$3(objects,position,null);
}));

(app.common.types.shape_tree.top_nested_frame.cljs$core$IFn$_invoke$arity$3 = (function (objects,position,excluded){
if((((excluded == null)) || (cljs.core.set_QMARK_(excluded)))){
} else {
throw (new Error("Assert failed: (or (nil? excluded) (set? excluded))"));
}

var frames = (function (){var G__51127 = app.common.types.shape_tree.get_frames_by_position.cljs$core$IFn$_invoke$arity$2(objects,position);
var G__51127__$1 = (((!((excluded == null))))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (obj){
var id = (obj?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(obj,new cljs.core.Keyword(null,"id","id",-1388402092)));
return cljs.core.contains_QMARK_(excluded,id);
}),G__51127):G__51127);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51122_SHARP_){
return ((new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(p1__51122_SHARP_) === true) || (new cljs.core.Keyword(null,"blocked","blocked",181326681).cljs$core$IFn$_invoke$arity$1(p1__51122_SHARP_) === true));
}),G__51127__$1);

})();
var frame_set = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__51123_SHARP_){
return (p1__51123_SHARP_?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__51123_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092)));
})),frames);
var current_shape = cljs.core.first(frames);
while(true){
var child_frame_id = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(((function (current_shape,frames,frame_set){
return (function (p1__51124_SHARP_){
return cljs.core.contains_QMARK_(frame_set,p1__51124_SHARP_);
});})(current_shape,frames,frame_set))
,cljs.core.reverse(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(current_shape)));
if((child_frame_id == null)){
var or__5025__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(current_shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.uuid.zero;
}
} else {
var G__51177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,child_frame_id);
current_shape = G__51177;
continue;
}
break;
}
}));

(app.common.types.shape_tree.top_nested_frame.cljs$lang$maxFixedArity = 3);

app.common.types.shape_tree.get_viewer_frames = (function app$common$types$shape_tree$get_viewer_frames(var_args){
var G__51130 = arguments.length;
switch (G__51130) {
case 1:
return app.common.types.shape_tree.get_viewer_frames.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.types.shape_tree.get_viewer_frames.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape_tree.get_viewer_frames.cljs$core$IFn$_invoke$arity$1 = (function (objects){
return app.common.types.shape_tree.get_viewer_frames.cljs$core$IFn$_invoke$arity$2(objects,null);
}));

(app.common.types.shape_tree.get_viewer_frames.cljs$core$IFn$_invoke$arity$2 = (function (objects,p__51131){
var map__51132 = p__51131;
var map__51132__$1 = cljs.core.__destructure_map(map__51132);
var all_frames_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51132__$1,new cljs.core.Keyword(null,"all-frames?","all-frames?",-104533347));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(all_frames_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.identity):cljs.core.remove.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hide-in-viewer","hide-in-viewer",1478442312))),app.common.types.shape_tree.sort_z_index_objects.cljs$core$IFn$_invoke$arity$2(objects,app.common.types.shape_tree.get_frames.cljs$core$IFn$_invoke$arity$1(objects)));
}));

(app.common.types.shape_tree.get_viewer_frames.cljs$lang$maxFixedArity = 2);

app.common.types.shape_tree.start_page_index = (function app$common$types$shape_tree$start_page_index(objects){
return cljs.core.with_meta(objects,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.common.types.shape-tree","index-frames","app.common.types.shape-tree/index-frames",-155995028),app.common.types.shape_tree.get_frames.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(objects,null))], null));
});
app.common.types.shape_tree.update_page_index = (function app$common$types$shape_tree$update_page_index(objects){
return cljs.core.with_meta(objects,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.common.types.shape-tree","index-frames","app.common.types.shape-tree/index-frames",-155995028),app.common.types.shape_tree.get_frames.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(objects,null))], null));
});
app.common.types.shape_tree.update_object_indices = (function app$common$types$shape_tree$update_object_indices(file,page_id){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(file,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),page_id,new cljs.core.Keyword(null,"objects","objects",2099713734)], null),app.common.types.shape_tree.update_page_index);
});
app.common.types.shape_tree.rotated_frame_QMARK_ = (function app$common$types$shape_tree$rotated_frame_QMARK_(frame){
return (!(app.common.math.almost_zero_QMARK_(new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$2(frame,(0)))));
});
/**
 * Gets a copy of the shape and all its children, with new ids and with
 *   the parent-children links correctly set. Admits functions to make
 *   more transformations to the cloned shapes and the original ones.
 * 
 *   Returns the cloned shape, the list of all new shapes (including
 *   the cloned one), and possibly a list of original shapes modified.
 * 
 *   The list of shapes are returned in tree traversal order, respecting
 *   the order of the children of each parent.
 */
app.common.types.shape_tree.clone_shape = (function app$common$types$shape_tree$clone_shape(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51179 = arguments.length;
var i__5750__auto___51180 = (0);
while(true){
if((i__5750__auto___51180 < len__5749__auto___51179)){
args__5755__auto__.push((arguments[i__5750__auto___51180]));

var G__51181 = (i__5750__auto___51180 + (1));
i__5750__auto___51180 = G__51181;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return app.common.types.shape_tree.clone_shape.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(app.common.types.shape_tree.clone_shape.cljs$core$IFn$_invoke$arity$variadic = (function (shape,parent_id,objects,p__51141){
var map__51142 = p__51141;
var map__51142__$1 = cljs.core.__destructure_map(map__51142);
var update_new_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51142__$1,new cljs.core.Keyword(null,"update-new-shape","update-new-shape",1958657165),(function (shape__$1,_){
return shape__$1;
}));
var update_original_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51142__$1,new cljs.core.Keyword(null,"update-original-shape","update-original-shape",1527494425),(function (shape__$1,_){
return shape__$1;
}));
var force_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51142__$1,new cljs.core.Keyword(null,"force-id","force-id",916825032),null);
var keep_ids_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51142__$1,new cljs.core.Keyword(null,"keep-ids?","keep-ids?",-236947248),false);
var frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51142__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),null);
var dest_objects = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51142__$1,new cljs.core.Keyword(null,"dest-objects","dest-objects",1417587106),objects);
var new_id = (((!((force_id == null))))?force_id:(cljs.core.truth_(keep_ids_QMARK_)?new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape):app.common.uuid.next()
));
var frame_id__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = (frame_id == null);
if(and__5023__auto__){
return app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$2(dest_objects,parent_id);
} else {
return and__5023__auto__;
}
})())?parent_id:(((frame_id == null))?cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dest_objects,parent_id),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),app.common.uuid.zero):frame_id
));
var child_ids = cljs.core.seq(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
var new_direct_children = cljs.core.PersistentVector.EMPTY;
var new_children = cljs.core.PersistentVector.EMPTY;
var updated_children = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(child_ids)){
var new_shape = (function (){var G__51148 = shape;
var G__51148__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__51148,new cljs.core.Keyword(null,"id","id",-1388402092),new_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id__$1], 0))
;
var G__51148__$2 = cljs.core.with_meta(G__51148__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.common.types.shape-tree","old-id","app.common.types.shape-tree/old-id",-1625827509),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null))
;
if((!((new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape) == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51148__$2,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new_direct_children));
} else {
return G__51148__$2;
}
})();
var new_shape__$1 = ((app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(new_shape))?(function (){var ids_map = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (child_ids,new_direct_children,new_children,updated_children,new_shape,new_id,frame_id__$1,map__51142,map__51142__$1,update_new_shape,update_original_shape,force_id,keep_ids_QMARK_,frame_id,dest_objects){
return (function (p1__51135_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("app.common.types.shape-tree","old-id","app.common.types.shape-tree/old-id",-1625827509).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__51135_SHARP_)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51135_SHARP_)],null));
});})(child_ids,new_direct_children,new_children,updated_children,new_shape,new_id,frame_id__$1,map__51142,map__51142__$1,update_new_shape,update_original_shape,force_id,keep_ids_QMARK_,frame_id,dest_objects))
),new_children);
return app.common.types.shape.layout.remap_grid_cells(new_shape,ids_map);
})():new_shape);
var new_shape__$2 = (update_new_shape.cljs$core$IFn$_invoke$arity$2 ? update_new_shape.cljs$core$IFn$_invoke$arity$2(new_shape__$1,shape) : update_new_shape.call(null,new_shape__$1,shape));
var new_shapes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_shape__$2], null),new_children);
var updated_shape = (update_original_shape.cljs$core$IFn$_invoke$arity$2 ? update_original_shape.cljs$core$IFn$_invoke$arity$2(shape,new_shape__$2) : update_original_shape.call(null,shape,new_shape__$2));
var updated_shapes = (((shape === updated_shape))?updated_children:cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_shape], null),updated_children));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_shape__$2,new_shapes,updated_shapes], null);
} else {
var child_id = cljs.core.first(child_ids);
var child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,child_id);
var _ = app.common.data.macros.runtime_assert("expr assert: (some? child)",((function (child_ids,new_direct_children,new_children,updated_children,child_id,child,new_id,frame_id__$1,map__51142,map__51142__$1,update_new_shape,update_original_shape,force_id,keep_ids_QMARK_,frame_id,dest_objects){
return (function (){
return (!((child == null)));
});})(child_ids,new_direct_children,new_children,updated_children,child_id,child,new_id,frame_id__$1,map__51142,map__51142__$1,update_new_shape,update_original_shape,force_id,keep_ids_QMARK_,frame_id,dest_objects))
);
var frame_id_child = ((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?new_id:frame_id__$1);
var vec__51149 = app.common.types.shape_tree.clone_shape.cljs$core$IFn$_invoke$arity$variadic(child,new_id,objects,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-new-shape","update-new-shape",1958657165),update_new_shape,new cljs.core.Keyword(null,"update-original-shape","update-original-shape",1527494425),update_original_shape,new cljs.core.Keyword(null,"force-id","force-id",916825032),null,new cljs.core.Keyword(null,"keep-ids?","keep-ids?",-236947248),keep_ids_QMARK_,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id_child,new cljs.core.Keyword(null,"dest-objects","dest-objects",1417587106),dest_objects], 0));
var new_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51149,(0),null);
var new_child_shapes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51149,(1),null);
var updated_child_shapes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51149,(2),null);
var G__51182 = cljs.core.next(child_ids);
var G__51183 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new_direct_children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_child], null));
var G__51184 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new_children,new_child_shapes);
var G__51185 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(updated_children,updated_child_shapes);
child_ids = G__51182;
new_direct_children = G__51183;
new_children = G__51184;
updated_children = G__51185;
continue;
}
break;
}
}));

(app.common.types.shape_tree.clone_shape.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(app.common.types.shape_tree.clone_shape.cljs$lang$applyTo = (function (seq51137){
var G__51138 = cljs.core.first(seq51137);
var seq51137__$1 = cljs.core.next(seq51137);
var G__51139 = cljs.core.first(seq51137__$1);
var seq51137__$2 = cljs.core.next(seq51137__$1);
var G__51140 = cljs.core.first(seq51137__$2);
var seq51137__$3 = cljs.core.next(seq51137__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51138,G__51139,G__51140,seq51137__$3);
}));

/**
 * Generate a sequence of positions that lays out the list of
 *   shapes in a grid of equal-sized rows and columns.
 */
app.common.types.shape_tree.generate_shape_grid = (function app$common$types$shape_tree$generate_shape_grid(shapes,start_position,gap){
if(cljs.core.seq(shapes)){
var bounds = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.bounding_box,shapes);
var grid_size = app.common.math.ceil(app.common.math.sqrt(cljs.core.count(shapes)));
var row_size = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.data.max,-Infinity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"height","height",1025178622),bounds)) + gap);
var column_size = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.data.max,-Infinity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477),bounds)) + gap);
var get_next = (function app$common$types$shape_tree$generate_shape_grid_$_get_next(counter){
var row = cljs.core.quot(counter,grid_size);
var column = cljs.core.mod(counter,grid_size);
var position = app.common.geom.point.add(start_position,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((column * column_size),(row * row_size)));
return cljs.core.cons(position,(new cljs.core.LazySeq(null,(function (){
return app$common$types$shape_tree$generate_shape_grid_$_get_next((counter + (1)));
}),null,null)));
});
return cljs.core.with_meta(get_next((0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(grid_size * column_size),new cljs.core.Keyword(null,"height","height",1025178622),(grid_size * row_size)], null));
} else {
return null;
}
});

//# sourceMappingURL=app.common.types.shape_tree.js.map
