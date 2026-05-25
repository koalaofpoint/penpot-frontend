import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.shapes.common.js";
import "./app.common.geom.shapes.points.js";
import "./app.common.geom.shapes.transforms.js";
import "./app.common.math.js";
import "./app.common.types.modifiers.js";
import "./app.common.uuid.js";
goog.provide('app.common.geom.bounds_map');
app.common.geom.bounds_map.objects__GT_bounds_map = (function app$common$geom$bounds_map$objects__GT_bounds_map(objects){
return app.common.data.lazy_map(cljs.core.keys(objects),(function (p1__68068_SHARP_){
return app.common.geom.shapes.common.shape__GT_points(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__68068_SHARP_));
}));
});
/**
 * Create the bounds object for the current shape in this context
 */
app.common.geom.bounds_map.create_bounds = (function app$common$geom$bounds_map$create_bounds(var_args){
var G__68071 = arguments.length;
switch (G__68071) {
case 3:
return app.common.geom.bounds_map.create_bounds.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.geom.bounds_map.create_bounds.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return app.common.geom.bounds_map.create_bounds.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.bounds_map.create_bounds.cljs$core$IFn$_invoke$arity$3 = (function (shape,bounds_map,objects){
return app.common.geom.bounds_map.create_bounds.cljs$core$IFn$_invoke$arity$5(shape,bounds_map,objects,null,null);
}));

(app.common.geom.bounds_map.create_bounds.cljs$core$IFn$_invoke$arity$4 = (function (shape,bounds_map,objects,modif_tree){
return app.common.geom.bounds_map.create_bounds.cljs$core$IFn$_invoke$arity$5(shape,bounds_map,objects,modif_tree,null);
}));

(app.common.geom.bounds_map.create_bounds.cljs$core$IFn$_invoke$arity$5 = (function (p__68072,bounds_map,objects,modif_tree,current_ref){
var map__68073 = p__68072;
var map__68073__$1 = cljs.core.__destructure_map(map__68073);
var shape = map__68073__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68073__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(modif_tree,id),new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
var children = (function (){var G__68074 = app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$2(objects,id);
if(app.common.files.helpers.mask_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),G__68074);
} else {
return G__68074;
}
})();
var shape_bounds = (cljs.core.truth_(current_ref)?cljs.core.deref(current_ref):cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds_map,id)));
var current_bounds = (function (){var G__68075 = shape_bounds;
if((!(app.common.types.modifiers.empty_QMARK_(modifiers)))){
return app.common.geom.shapes.transforms.transform_bounds.cljs$core$IFn$_invoke$arity$2(G__68075,modifiers);
} else {
return G__68075;
}
})();
var children_bounds = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__68069_SHARP_){
return cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__68069_SHARP_)));
}),children);
return app.common.geom.shapes.points.merge_parent_coords_bounds(children_bounds,current_bounds);
} else {
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(modif_tree,id),new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
var shape_bounds = (cljs.core.truth_(current_ref)?cljs.core.deref(current_ref):cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds_map,id)));
var G__68076 = shape_bounds;
if((!(app.common.types.modifiers.empty_QMARK_(modifiers)))){
return app.common.geom.shapes.transforms.transform_bounds.cljs$core$IFn$_invoke$arity$2(G__68076,modifiers);
} else {
return G__68076;
}
}
}));

(app.common.geom.bounds_map.create_bounds.cljs$lang$maxFixedArity = 5);

app.common.geom.bounds_map.resolve_modif_tree_ids = (function app$common$geom$bounds_map$resolve_modif_tree_ids(objects,modif_tree){
var base_ids = cljs.core.keys(modif_tree);
var ids = (new Set(base_ids));
var base_ids_68093__$1 = cljs.core.seq(base_ids);
while(true){
if((!((base_ids_68093__$1 == null)))){
var cid_68094 = cljs.core.first(base_ids_68093__$1);
var new_ids_68095 = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (base_ids_68093__$1,cid_68094,base_ids,ids){
return (function (p1__68078_SHARP_){
return ((app.common.files.helpers.group_like_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__68078_SHARP_)) && (cljs.core.not(ids.has(p1__68078_SHARP_))));
});})(base_ids_68093__$1,cid_68094,base_ids,ids))
,app.common.files.helpers.get_parent_seq.cljs$core$IFn$_invoke$arity$2(objects,cid_68094)));
while(true){
if((!((new_ids_68095 == null)))){
ids.add(cljs.core.first(new_ids_68095));

var G__68099 = cljs.core.next(new_ids_68095);
new_ids_68095 = G__68099;
continue;
} else {
}
break;
}

var G__68100 = cljs.core.next(base_ids_68093__$1);
base_ids_68093__$1 = G__68100;
continue;
} else {
}
break;
}

return ids;
});
app.common.geom.bounds_map.transform_bounds_map = (function app$common$geom$bounds_map$transform_bounds_map(var_args){
var G__68080 = arguments.length;
switch (G__68080) {
case 3:
return app.common.geom.bounds_map.transform_bounds_map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.geom.bounds_map.transform_bounds_map.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.bounds_map.transform_bounds_map.cljs$core$IFn$_invoke$arity$3 = (function (bounds_map,objects,modif_tree){
return app.common.geom.bounds_map.transform_bounds_map.cljs$core$IFn$_invoke$arity$4(bounds_map,objects,modif_tree,null);
}));

(app.common.geom.bounds_map.transform_bounds_map.cljs$core$IFn$_invoke$arity$4 = (function (bounds_map,objects,modif_tree,ids){
var bm_holder = cljs.core.volatile_BANG_(null);
var ids__$1 = (function (){var or__5025__auto__ = ids;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.geom.bounds_map.resolve_modif_tree_ids(objects,modif_tree);
}
})();
var new_bounds_map = (function (){var tr_bounds_map = cljs.core.transient$(bounds_map);
var ids__$2 = cljs.core.seq(ids__$1);
while(true){
if(cljs.core.not(ids__$2)){
return cljs.core.persistent_BANG_(tr_bounds_map);
} else {
var shape_id = cljs.core.first(ids__$2);
var G__68102 = (function (){var G__68081 = tr_bounds_map;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(app.common.uuid.zero,shape_id)){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(G__68081,shape_id,(new cljs.core.Delay(((function (tr_bounds_map,ids__$2,G__68081,shape_id,bm_holder,ids__$1){
return (function (){
return app.common.geom.bounds_map.create_bounds.cljs$core$IFn$_invoke$arity$5(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,shape_id),cljs.core.deref(bm_holder),objects,modif_tree,cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds_map,shape_id));
});})(tr_bounds_map,ids__$2,G__68081,shape_id,bm_holder,ids__$1))
,null)));
} else {
return G__68081;
}
})();
var G__68103 = cljs.core.next(ids__$2);
tr_bounds_map = G__68102;
ids__$2 = G__68103;
continue;
}
break;
}
})();
cljs.core.vreset_BANG_(bm_holder,new_bounds_map);

return new_bounds_map;
}));

(app.common.geom.bounds_map.transform_bounds_map.cljs$lang$maxFixedArity = 4);

app.common.geom.bounds_map.bounds_map = (function app$common$geom$bounds_map$bounds_map(objects,bounds_map){
var parse_bound = (function app$common$geom$bounds_map$bounds_map_$_parse_bound(p__68086){
var vec__68087 = p__68086;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68087,(0),null);
var bounds_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68087,(1),null);
var bounds = cljs.core.deref(bounds_STAR_);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
if(cljs.core.truth_((function (){var and__5023__auto__ = shape;
if(cljs.core.truth_(and__5023__auto__)){
return bounds;
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),app.common.math.round.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app.common.geom.shapes.points.origin(bounds)),(2)),new cljs.core.Keyword(null,"y","y",-1757859776),app.common.math.round.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app.common.geom.shapes.points.origin(bounds)),(2)),new cljs.core.Keyword(null,"width","width",-384071477),app.common.math.round.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.points.width_points(bounds),(2)),new cljs.core.Keyword(null,"height","height",1025178622),app.common.math.round.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.points.height_points(bounds),(2))], null)], null);
} else {
return null;
}
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(parse_bound),bounds_map);
});

//# sourceMappingURL=app.common.geom.bounds_map.js.map
