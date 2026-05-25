import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.js";
import "./app.common.schema.js";
import "./app.common.types.component.js";
import "./app.common.types.components_list.js";
import "./app.common.types.pages_list.js";
import "./app.common.types.plugins.js";
import "./app.common.types.shape_tree.js";
import "./app.common.types.shape.layout.js";
import "./app.common.types.text.js";
import "./app.common.types.token.js";
import "./app.common.uuid.js";
import "./clojure.set.js";
goog.provide('app.common.types.container');
app.common.types.container.valid_container_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),null,new cljs.core.Keyword(null,"component","component",1555936782),null], null), null);
app.common.types.container.schema_COLON_container = app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.container.valid_container_types], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.time","inst","app.common.time/inst",1401175972)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","max","gen/max",61264228),(10)], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.plugins.schema_COLON_plugin_data], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.common.schema","type","app.common.schema/type",-418801773),new cljs.core.Keyword("app.common.types.container","container","app.common.types.container/container",-604703537)], null)));
app.common.types.container.check_container = app.common.schema.check_fn(app.common.types.container.schema_COLON_container);
app.common.types.container.make_container = (function app$common$types$container$make_container(page_or_component,type){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page_or_component,new cljs.core.Keyword(null,"type","type",1174270348),type);
});
app.common.types.container.page_QMARK_ = (function app$common$types$container$page_QMARK_(container){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(container),new cljs.core.Keyword(null,"page","page",849072397));
});
app.common.types.container.component_QMARK_ = (function app$common$types$container$component_QMARK_(container){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(container),new cljs.core.Keyword(null,"component","component",1555936782));
});
app.common.types.container.get_container = (function app$common$types$container$get_container(file,type,id){
if(cljs.core.map_QMARK_(file)){
} else {
throw (new Error("Assert failed: (map? file)"));
}

if(cljs.core.contains_QMARK_(app.common.types.container.valid_container_types,type)){
} else {
throw (new Error("Assert failed: (contains? valid-container-types type)"));
}

if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error("Assert failed: (uuid? id)"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397)))?app.common.types.pages_list.get_page(file,id):app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2(file,id)),new cljs.core.Keyword(null,"type","type",1174270348),type);
});
app.common.types.container.get_shape = (function app$common$types$container$get_shape(container,shape_id){
if(cljs.core.uuid_QMARK_(shape_id)){
} else {
throw (new Error(["Assert failed: ","expected valid uuid for `shape-id`","\n","(uuid? shape-id)"].join('')));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(container,new cljs.core.Keyword(null,"objects","objects",2099713734)),shape_id);
});
app.common.types.container.shapes_seq = (function app$common$types$container$shapes_seq(container){
return cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container));
});
app.common.types.container.update_shape = (function app$common$types$container$update_shape(container,shape_id,f){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),shape_id], null),f);
});
app.common.types.container.get_container_root = (function app$common$types$container$get_container_root(container){
return app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__52867_SHARP_){
return (((new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(p1__52867_SHARP_) == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(p1__52867_SHARP_),app.common.uuid.zero)));
}),app.common.types.container.shapes_seq(container));
});
app.common.types.container.get_direct_children = (function app$common$types$container$get_direct_children(container,shape){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52869_SHARP_){
return app.common.types.container.get_shape(container,p1__52869_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
});
/**
 * Get the shape and their children recursively, but stopping when
 * a component nested instance is found.
 */
app.common.types.container.get_children_in_instance = (function app$common$types$container$get_children_in_instance(objects,id){
var get_children_rec = (function app$common$types$container$get_children_in_instance_$_get_children_rec(children,id__$1){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id__$1);
if(((app.common.types.component.instance_head_QMARK_(shape)) && (cljs.core.seq(children)))){
return children;
} else {
var children_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,shape);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(children_SINGLEQUOTE_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__52870_SHARP_){
return app$common$types$container$get_children_in_instance_$_get_children_rec(children_SINGLEQUOTE_,p1__52870_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape)], 0)));
}
});
return get_children_rec(cljs.core.PersistentVector.EMPTY,id);
});
/**
 * Get the parent top shape linked to a component main for this shape, if any
 */
app.common.types.container.get_component_shape = (function app$common$types$container$get_component_shape(var_args){
var G__52872 = arguments.length;
switch (G__52872) {
case 2:
return app.common.types.container.get_component_shape.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.container.get_component_shape.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.container.get_component_shape.cljs$core$IFn$_invoke$arity$2 = (function (objects,shape){
return app.common.types.container.get_component_shape.cljs$core$IFn$_invoke$arity$3(objects,shape,null);
}));

(app.common.types.container.get_component_shape.cljs$core$IFn$_invoke$arity$3 = (function (objects,shape,p__52885){
var map__52886 = p__52885;
var map__52886__$1 = cljs.core.__destructure_map(map__52886);
var options = map__52886__$1;
var allow_main_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52886__$1,new cljs.core.Keyword(null,"allow-main?","allow-main?",-837994938),false);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
if((shape == null)){
return null;
} else {
if(app.common.files.helpers.root_QMARK_(shape)){
return null;
} else {
if(app.common.types.component.instance_root_QMARK_(shape)){
return shape;
} else {
if((((!(app.common.types.component.in_component_copy_QMARK_(shape)))) && (cljs.core.not(allow_main_QMARK_)))){
return null;
} else {
if(((app.common.types.component.instance_head_QMARK_(shape)) && ((!(app.common.types.component.in_component_copy_QMARK_(parent)))))){
return shape;
} else {
return app.common.types.container.get_component_shape.cljs$core$IFn$_invoke$arity$3(objects,parent,options);

}
}
}
}
}
}));

(app.common.types.container.get_component_shape.cljs$lang$maxFixedArity = 3);

/**
 * Get the parent top or nested shape linked to a component for this shape, if any
 */
app.common.types.container.get_head_shape = (function app$common$types$container$get_head_shape(var_args){
var G__52916 = arguments.length;
switch (G__52916) {
case 2:
return app.common.types.container.get_head_shape.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.container.get_head_shape.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.container.get_head_shape.cljs$core$IFn$_invoke$arity$2 = (function (objects,shape){
return app.common.types.container.get_head_shape.cljs$core$IFn$_invoke$arity$3(objects,shape,null);
}));

(app.common.types.container.get_head_shape.cljs$core$IFn$_invoke$arity$3 = (function (objects,shape,p__52923){
var map__52924 = p__52923;
var map__52924__$1 = cljs.core.__destructure_map(map__52924);
var options = map__52924__$1;
var allow_main_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52924__$1,new cljs.core.Keyword(null,"allow-main?","allow-main?",-837994938),false);
if((shape == null)){
return null;
} else {
if(app.common.files.helpers.root_QMARK_(shape)){
return null;
} else {
if(app.common.types.component.instance_head_QMARK_(shape)){
return shape;
} else {
if((((!(app.common.types.component.in_component_copy_QMARK_(shape)))) && (cljs.core.not(allow_main_QMARK_)))){
return null;
} else {
return app.common.types.container.get_head_shape.cljs$core$IFn$_invoke$arity$3(objects,cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape)),options);

}
}
}
}
}));

(app.common.types.container.get_head_shape.cljs$lang$maxFixedArity = 3);

/**
 * Get all recursive childs that are heads (when a head is found, do not
 * continue down looking for subsequent nested heads).
 */
app.common.types.container.get_child_heads = (function app$common$types$container$get_child_heads(objects,shape_id){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,shape_id);
if((shape == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(app.common.types.component.instance_head_QMARK_(shape)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null);
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__52930_SHARP_){
return (app.common.types.container.get_child_heads.cljs$core$IFn$_invoke$arity$2 ? app.common.types.container.get_child_heads.cljs$core$IFn$_invoke$arity$2(objects,p1__52930_SHARP_) : app.common.types.container.get_child_heads.call(null,objects,p1__52930_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape)], 0));
}
}
});
/**
 * Get all component heads that are ancestors of the shape, in top-down order
 * (include self if it's also a head).
 */
app.common.types.container.get_parent_heads = (function app$common$types$container$get_parent_heads(objects,shape){
return cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.types.component.instance_head_QMARK_,app.common.files.helpers.get_parents_with_self(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))));
});
/**
 * Get all component heads that are ancestors of the shape, in top-down order,
 * excluding mains (include self if it's also a head).
 */
app.common.types.container.get_parent_copy_heads = (function app$common$types$container$get_parent_copy_heads(objects,shape){
return cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52932_SHARP_){
return ((app.common.types.component.instance_head_QMARK_(p1__52932_SHARP_)) && (app.common.types.component.in_component_copy_QMARK_(p1__52932_SHARP_)));
}),app.common.files.helpers.get_parents_with_self(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))));
});
/**
 * Get how many levels a shape will 'go up' if moved under the new parent.
 */
app.common.types.container.get_nesting_level_delta = (function app$common$types$container$get_nesting_level_delta(objects,shape,new_parent){
var orig_heads = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__52933_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__52933_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
}),app.common.types.container.get_parent_copy_heads(objects,shape));
var dest_heads = app.common.types.container.get_parent_copy_heads(objects,new_parent);
var pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,orig_heads,dest_heads);
var common_count = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (a,b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b);
}),pairs));
return (cljs.core.count(orig_heads) - common_count);
});
/**
 * Get the parent shape at the top of the component instance (main or copy).
 */
app.common.types.container.get_instance_root = (function app$common$types$container$get_instance_root(objects,shape){
if((shape == null)){
return null;
} else {
if(app.common.files.helpers.root_QMARK_(shape)){
return null;
} else {
if(app.common.types.component.instance_root_QMARK_(shape)){
return shape;
} else {
var G__52935 = objects;
var G__52936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
return (app.common.types.container.get_instance_root.cljs$core$IFn$_invoke$arity$2 ? app.common.types.container.get_instance_root.cljs$core$IFn$_invoke$arity$2(G__52935,G__52936) : app.common.types.container.get_instance_root.call(null,G__52935,G__52936));

}
}
}
});
/**
 * If the shape is a component main instance or is inside one, return that instance.
 * Uses an iterative loop with cycle detection to prevent stack overflow on circular
 * parent references or malformed data structures.
 */
app.common.types.container.find_component_main = (function app$common$types$container$find_component_main(var_args){
var G__52945 = arguments.length;
switch (G__52945) {
case 2:
return app.common.types.container.find_component_main.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.container.find_component_main.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.container.find_component_main.cljs$core$IFn$_invoke$arity$2 = (function (objects,shape){
return app.common.types.container.find_component_main.cljs$core$IFn$_invoke$arity$3(objects,shape,true);
}));

(app.common.types.container.find_component_main.cljs$core$IFn$_invoke$arity$3 = (function (objects,shape,only_direct_child_QMARK_){
var shape__$1 = shape;
var visited = cljs.core.PersistentHashSet.EMPTY;
while(true){
if((((shape__$1 == null)) || (app.common.files.helpers.root_QMARK_(shape__$1)))){
return null;
} else {
if(cljs.core.contains_QMARK_(visited,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1))){
return null;
} else {
if((new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape__$1) == null)){
return shape__$1;
} else {
if(app.common.types.component.main_instance_QMARK_(shape__$1)){
return shape__$1;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = only_direct_child_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return app.common.types.component.instance_head_QMARK_(shape__$1);
} else {
return and__5023__auto__;
}
})())){
return null;
} else {
if(((cljs.core.not(only_direct_child_QMARK_)) && (app.common.types.component.instance_root_QMARK_(shape__$1)))){
return null;
} else {
var G__53028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape__$1));
var G__53029 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1));
shape__$1 = G__53028;
visited = G__53029;
continue;

}
}
}
}
}
}
break;
}
}));

(app.common.types.container.find_component_main.cljs$lang$maxFixedArity = 3);

/**
 * Check if the shape is a component main instance or is inside one.
 */
app.common.types.container.inside_component_main_QMARK_ = (function app$common$types$container$inside_component_main_QMARK_(var_args){
var G__52954 = arguments.length;
switch (G__52954) {
case 2:
return app.common.types.container.inside_component_main_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.container.inside_component_main_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.container.inside_component_main_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,shape){
return app.common.types.container.inside_component_main_QMARK_.cljs$core$IFn$_invoke$arity$3(objects,shape,true);
}));

(app.common.types.container.inside_component_main_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (objects,shape,only_direct_child_QMARK_){
return (!((app.common.types.container.find_component_main.cljs$core$IFn$_invoke$arity$3(objects,shape,only_direct_child_QMARK_) == null)));
}));

(app.common.types.container.inside_component_main_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * Check if the shape is part of any component (main or copy), wether it's
 * head or not.
 */
app.common.types.container.in_any_component_QMARK_ = (function app$common$types$container$in_any_component_QMARK_(objects,shape){
var or__5025__auto__ = app.common.types.component.in_component_copy_QMARK_(shape);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = app.common.types.component.instance_head_QMARK_(shape);
if(or__5025__auto____$1){
return or__5025__auto____$1;
} else {
return app.common.types.container.inside_component_main_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,shape);
}
}
});
/**
 * Set the shape as a main root instance, pointing to a new component.
 * Also remove component-root of all children. Return the same structure
 * as make-component-shape.
 */
app.common.types.container.convert_shape_in_component = (function app$common$types$container$convert_shape_in_component(root,objects,file_id){
var new_id = app.common.uuid.next();
var inside_component_QMARK_ = (!((app.common.types.container.get_instance_root(objects,root) == null)));
var new_root = (function (){var G__52958 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(root,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component-file","component-file",-1378670433),file_id,new cljs.core.Keyword(null,"main-instance","main-instance",476264761),true], 0));
if((!(inside_component_QMARK_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52958,new cljs.core.Keyword(null,"component-root","component-root",-485271026),true);
} else {
return G__52958;
}
})();
var new_children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52957_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52957_SHARP_,new cljs.core.Keyword(null,"component-root","component-root",-485271026));
}),app.common.files.helpers.get_children(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_root,new cljs.core.Keyword(null,"id","id",-1388402092),new_id),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_root], null),new_children)], null);
});
/**
 * Remove flex children properties except the fit-content for flex layouts. These are properties
 *   that we don't have to propagate to copies but will be respected when swapping components
 */
app.common.types.container.remove_swap_keep_attrs = (function app$common$types$container$remove_swap_keep_attrs(shape){
var layout_item_h_sizing = ((((app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (app.common.types.shape.layout.auto_width_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))))?new cljs.core.Keyword(null,"auto","auto",-566279492):null);
var layout_item_v_sizing = ((((app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (app.common.types.shape.layout.auto_height_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))))?new cljs.core.Keyword(null,"auto","auto",-566279492):null);
var G__52959 = (function (){var G__52960 = app.common.data.without_keys(shape,app.common.types.component.swap_keep_attrs);
if((!((layout_item_h_sizing == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52960,new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),layout_item_h_sizing);
} else {
return G__52960;
}
})();
if((!((layout_item_v_sizing == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52959,new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),layout_item_v_sizing);
} else {
return G__52959;
}
});
/**
 * Generate a new instance of the component inside the given container.
 * 
 *   Clone the shapes of the component, generating new names and ids, and
 *   linking each new shape to the corresponding one of the
 *   component. Place the new instance coordinates in the given
 *   position.
 * 
 *   WARNING: This process does not remap media references (on fills, strokes, ...); that is
 *   delegated to an async process on the backend side that checks unreferenced shapes and
 *   automatically creates correct references.
 */
app.common.types.container.make_component_instance = (function app$common$types$container$make_component_instance(var_args){
var G__52964 = arguments.length;
switch (G__52964) {
case 4:
return app.common.types.container.make_component_instance.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return app.common.types.container.make_component_instance.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.container.make_component_instance.cljs$core$IFn$_invoke$arity$4 = (function (page,component,library_data,position){
return app.common.types.container.make_component_instance.cljs$core$IFn$_invoke$arity$5(page,component,library_data,position,cljs.core.PersistentArrayMap.EMPTY);
}));

(app.common.types.container.make_component_instance.cljs$core$IFn$_invoke$arity$5 = (function (page,component,library_data,position,p__52966){
var map__52967 = p__52966;
var map__52967__$1 = cljs.core.__destructure_map(map__52967);
var main_instance_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52967__$1,new cljs.core.Keyword(null,"main-instance?","main-instance?",-1502113126),false);
var force_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52967__$1,new cljs.core.Keyword(null,"force-id","force-id",916825032),null);
var force_frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52967__$1,new cljs.core.Keyword(null,"force-frame-id","force-frame-id",1562086521),null);
var keep_ids_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52967__$1,new cljs.core.Keyword(null,"keep-ids?","keep-ids?",-236947248),false);
var force_parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52967__$1,new cljs.core.Keyword(null,"force-parent-id","force-parent-id",724093063),null);
var component_page = app.common.types.pages_list.get_page(library_data,new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component));
var component_shape = app.common.types.container.remove_swap_keep_attrs(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.types.container.get_shape(component_page,new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component)),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),null),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),app.common.uuid.zero));
var orig_pos = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(component_shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(component_shape));
var delta = app.common.geom.point.subtract(position,orig_pos);
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page);
var unames = cljs.core.volatile_BANG_(app.common.files.helpers.get_used_names(objects));
var component_children = app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),app.common.files.helpers.get_children_with_self(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component_shape)));
var frame_id = (function (){var or__5025__auto__ = force_frame_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.shape_tree.get_frame_id_by_position.cljs$core$IFn$_invoke$arity$3(objects,app.common.geom.point.add(orig_pos,delta),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-components?","skip-components?",1022507747),true,new cljs.core.Keyword(null,"bottom-frames?","bottom-frames?",1381369412),true,new cljs.core.Keyword(null,"validator","validator",-1966190681),(function (p1__52961_SHARP_){
return (((cljs.core.get.cljs$core$IFn$_invoke$arity$2(component_children,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__52961_SHARP_)) == null)) && ((!(app.common.types.component.in_component_copy_QMARK_(p1__52961_SHARP_)))));
})], null));
}
})();
var frame = app.common.types.container.get_shape(page,frame_id);
var component_frame = app.common.types.container.get_component_shape.cljs$core$IFn$_invoke$arity$3(objects,frame,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-main?","allow-main?",-837994938),true], null));
var ids_map = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var update_new_shape = (function (new_shape,original_shape){
var new_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new_shape);
var root_QMARK_ = app.common.types.component.instance_root_QMARK_(original_shape);
if(root_QMARK_){
unames.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(unames.cljs$core$IDeref$_deref$arity$1(null),new_name));
} else {
}

ids_map.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ids_map.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(original_shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_shape)));

var G__52971 = new_shape;
var G__52971__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(app.common.geom.shapes.move(G__52971,delta),new cljs.core.Keyword(null,"touched","touched",-609134419),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),new cljs.core.Keyword(null,"variant-name","variant-name",-1785573622)], 0))
;
var G__52971__$2 = (cljs.core.truth_((function (){var and__5023__auto__ = main_instance_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return root_QMARK_;
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52971__$1,new cljs.core.Keyword(null,"main-instance","main-instance",476264761),true):G__52971__$1);
var G__52971__$3 = ((cljs.core.not(main_instance_QMARK_))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52971__$2,new cljs.core.Keyword(null,"main-instance","main-instance",476264761)):G__52971__$2);
var G__52971__$4 = (cljs.core.truth_(main_instance_QMARK_)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52971__$3,new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329)):G__52971__$3);
var G__52971__$5 = ((cljs.core.not(main_instance_QMARK_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52971__$4,new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(original_shape)):G__52971__$4);
var G__52971__$6 = (((new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(original_shape) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__52971__$5,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component-file","component-file",-1378670433),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(library_data),new cljs.core.Keyword(null,"component-root","component-root",-485271026),true,new cljs.core.Keyword(null,"name","name",1843675177),new_name], 0)):G__52971__$5);
if((((!((new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(original_shape) == null)))) || ((!((component_frame == null)))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52971__$6,new cljs.core.Keyword(null,"component-root","component-root",-485271026));
} else {
return G__52971__$6;
}
});
var vec__52968 = app.common.types.shape_tree.clone_shape.cljs$core$IFn$_invoke$arity$variadic(component_shape,(function (){var or__5025__auto__ = force_parent_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return frame_id;
}
})(),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component_page),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-new-shape","update-new-shape",1958657165),update_new_shape,new cljs.core.Keyword(null,"force-id","force-id",916825032),force_id,new cljs.core.Keyword(null,"keep-ids?","keep-ids?",-236947248),keep_ids_QMARK_,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id,new cljs.core.Keyword(null,"dest-objects","dest-objects",1417587106),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page)], 0));
var new_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52968,(0),null);
var new_shapes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52968,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52968,(2),null);
var remap_ids = (function (shape){
var $ = shape;
var $__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3($,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),(function (p1__52962_SHARP_){
var or__5025__auto__ = p1__52962_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1($);
}
}));
var G__52973 = $__$1;
if(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return app.common.types.shape.layout.remap_grid_cells(G__52973,cljs.core.deref(ids_map));
} else {
return G__52973;
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remap_ids(new_shape),cljs.core.map.cljs$core$IFn$_invoke$arity$2(remap_ids,new_shapes)], null);
}));

(app.common.types.container.make_component_instance.cljs$lang$maxFixedArity = 5);

/**
 * Go trough the parents until we find a shape that is not a copy of a component nor
 * a variant container.
 */
app.common.types.container.get_first_valid_parent = (function app$common$types$container$get_first_valid_parent(objects,id){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
if(cljs.core.truth_((function (){var or__5025__auto__ = app.common.types.component.in_component_copy_QMARK_(shape);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.common.types.component.is_variant_container_QMARK_(shape);
}
})())){
var G__52974 = objects;
var G__52975 = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape);
return (app.common.types.container.get_first_valid_parent.cljs$core$IFn$_invoke$arity$2 ? app.common.types.container.get_first_valid_parent.cljs$core$IFn$_invoke$arity$2(G__52974,G__52975) : app.common.types.container.get_first_valid_parent.call(null,G__52974,G__52975));
} else {
return shape;
}
});
/**
 * Check if the shape has any parent that is a copy of a component.
 */
app.common.types.container.has_any_copy_parent_QMARK_ = (function app$common$types$container$has_any_copy_parent_QMARK_(objects,shape){
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
if((parent == null)){
return false;
} else {
if(app.common.types.component.in_component_copy_QMARK_(parent)){
return true;
} else {
var G__52976 = objects;
var G__52977 = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape);
return (app.common.types.container.has_any_copy_parent_QMARK_.cljs$core$IFn$_invoke$arity$2 ? app.common.types.container.has_any_copy_parent_QMARK_.cljs$core$IFn$_invoke$arity$2(G__52976,G__52977) : app.common.types.container.has_any_copy_parent_QMARK_.call(null,G__52976,G__52977));
}
}
});
/**
 * Check if the shape is a main component or has any children or parent that is a main component.
 */
app.common.types.container.has_any_main_QMARK_ = (function app$common$types$container$has_any_main_QMARK_(objects,shape){
var children = app.common.files.helpers.get_children_with_self(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
var parents = app.common.files.helpers.get_parents(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
var or__5025__auto__ = cljs.core.some(app.common.types.component.main_instance_QMARK_,children);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.some(app.common.types.component.main_instance_QMARK_,parents);
}
});
/**
 * Check if a main component can be generated from this shape in terms of nested components:
 *   - A main can't be the ancestor of another main
 *   - A main can't be nested in copies
 */
app.common.types.container.valid_shape_for_component_QMARK_ = (function app$common$types$container$valid_shape_for_component_QMARK_(objects,shape){
return ((cljs.core.not(app.common.types.container.has_any_main_QMARK_(objects,shape))) && (cljs.core.not(app.common.types.container.has_any_copy_parent_QMARK_(objects,shape))));
});
app.common.types.container.collect_main_shapes = (function app$common$types$container$collect_main_shapes(shape,objects){
if(app.common.types.component.main_instance_QMARK_(shape)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null);
} else {
var temp__5823__auto__ = app.common.files.helpers.get_children(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.truth_(temp__5823__auto__)){
var children = temp__5823__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__52978_SHARP_){
return (app.common.types.container.collect_main_shapes.cljs$core$IFn$_invoke$arity$2 ? app.common.types.container.collect_main_shapes.cljs$core$IFn$_invoke$arity$2(p1__52978_SHARP_,objects) : app.common.types.container.collect_main_shapes.call(null,p1__52978_SHARP_,objects));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
});
app.common.types.container.get_component_from_shape = (function app$common$types$container$get_component_from_shape(shape,libraries){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape)], null));
});
/**
 * Check if the structure generated nesting children in parent is invalid in terms of nested components
 */
app.common.types.container.invalid_structure_for_component_QMARK_ = (function app$common$types$container$invalid_structure_for_component_QMARK_(objects,parent,children,pasting_QMARK_,libraries){
var objects__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([objects,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),children))], 0));
var remove_QMARK_ = (function (shape){
var component = app.common.types.container.get_component_from_shape(shape,libraries);
var and__5023__auto__ = component;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component));
} else {
return and__5023__auto__;
}
});
var selected_components = (function (){var G__52981 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(app.common.types.container.collect_main_shapes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children,objects__$1], 0));
if(cljs.core.truth_(pasting_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__52979_SHARP_){
return remove_QMARK_(p1__52979_SHARP_);
}),G__52981);
} else {
return G__52981;
}
})();
var selected_main_instance_QMARK_ = cljs.core.seq(selected_components);
var parent_in_component_QMARK_ = app.common.types.container.in_any_component_QMARK_(objects__$1,parent);
var comps_nesting_loop_QMARK_ = (!(cljs.core.every_QMARK_(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52980_SHARP_){
return app.common.files.helpers.components_nesting_loop_QMARK_.cljs$core$IFn$_invoke$arity$3(objects__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__52980_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent));
}),children))));
var or__5025__auto__ = app.common.types.component.in_component_copy_QMARK_(parent);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = app.common.types.container.has_any_copy_parent_QMARK_(objects__$1,parent);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = (function (){var and__5023__auto__ = selected_main_instance_QMARK_;
if(and__5023__auto__){
return parent_in_component_QMARK_;
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return comps_nesting_loop_QMARK_;
}
}
}
});
/**
 * Navigate trough the ancestors until find one that is valid. Returns [ parent-id frame-id ]
 */
app.common.types.container.find_valid_parent_and_frame_ids = (function app$common$types$container$find_valid_parent_and_frame_ids(var_args){
var G__52986 = arguments.length;
switch (G__52986) {
case 3:
return app.common.types.container.find_valid_parent_and_frame_ids.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return app.common.types.container.find_valid_parent_and_frame_ids.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.container.find_valid_parent_and_frame_ids.cljs$core$IFn$_invoke$arity$3 = (function (parent_id,objects,children){
return app.common.types.container.find_valid_parent_and_frame_ids.cljs$core$IFn$_invoke$arity$5(parent_id,objects,children,false,null);
}));

(app.common.types.container.find_valid_parent_and_frame_ids.cljs$core$IFn$_invoke$arity$5 = (function (parent_id,objects,children,pasting_QMARK_,libraries){
while(true){
var get_frame = ((function (parent_id,objects,children,pasting_QMARK_,libraries){
return (function app$common$types$container$get_frame(parent_id__$1){
if(cljs.core.truth_(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,parent_id__$1))){
return parent_id__$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072)], null));
}
});})(parent_id,objects,children,pasting_QMARK_,libraries))
;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
var children_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),children));
var top_children = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (parent_id,objects,children,pasting_QMARK_,libraries,parent,children_ids){
return (function (p1__52982_SHARP_){
return cljs.core.contains_QMARK_(children_ids,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(p1__52982_SHARP_));
});})(parent_id,objects,children,pasting_QMARK_,libraries,parent,children_ids))
,children);
var no_changes_QMARK_ = ((cljs.core.every_QMARK_(((function (parent_id,objects,children,pasting_QMARK_,libraries,parent,children_ids,top_children){
return (function (p1__52983_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(p1__52983_SHARP_));
});})(parent_id,objects,children,pasting_QMARK_,libraries,parent,children_ids,top_children))
,top_children)) && (cljs.core.not(pasting_QMARK_)));
var all_main_QMARK_ = cljs.core.every_QMARK_(app.common.types.component.main_instance_QMARK_,top_children);
var ascendants = app.common.files.helpers.get_parents_with_self(objects,parent_id);
var any_main_ascendant = cljs.core.some(app.common.types.component.main_instance_QMARK_,ascendants);
var any_variant_container_ascendant = cljs.core.some(app.common.types.component.is_variant_container_QMARK_,ascendants);
var get_variant_id = ((function (parent_id,objects,children,pasting_QMARK_,libraries,parent,children_ids,top_children,no_changes_QMARK_,all_main_QMARK_,ascendants,any_main_ascendant,any_variant_container_ascendant){
return (function (shape){
if(cljs.core.truth_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape))){
return new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(app.common.types.container.get_component_from_shape(shape,libraries));
} else {
return null;
}
});})(parent_id,objects,children,pasting_QMARK_,libraries,parent,children_ids,top_children,no_changes_QMARK_,all_main_QMARK_,ascendants,any_main_ascendant,any_variant_container_ascendant))
;
var descendants = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (parent_id,objects,children,pasting_QMARK_,libraries,parent,children_ids,top_children,no_changes_QMARK_,all_main_QMARK_,ascendants,any_main_ascendant,any_variant_container_ascendant,get_variant_id){
return (function (p1__52984_SHARP_){
return app.common.files.helpers.get_children_with_self(objects,p1__52984_SHARP_);
});})(parent_id,objects,children,pasting_QMARK_,libraries,parent,children_ids,top_children,no_changes_QMARK_,all_main_QMARK_,ascendants,any_main_ascendant,any_variant_container_ascendant,get_variant_id))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children_ids], 0));
var any_variant_container_descendant = cljs.core.some(app.common.types.component.is_variant_container_QMARK_,descendants);
var descendants_variant_ids_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_variant_id,descendants));
var any_main_descendant = cljs.core.some(((function (parent_id,objects,children,pasting_QMARK_,libraries,parent,children_ids,top_children,no_changes_QMARK_,all_main_QMARK_,ascendants,any_main_ascendant,any_variant_container_ascendant,get_variant_id,descendants,any_variant_container_descendant,descendants_variant_ids_set){
return (function (shape){
return cljs.core.some(app.common.types.component.main_instance_QMARK_,app.common.files.helpers.get_children_with_self(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));
});})(parent_id,objects,children,pasting_QMARK_,libraries,parent,children_ids,top_children,no_changes_QMARK_,all_main_QMARK_,ascendants,any_main_ascendant,any_variant_container_ascendant,get_variant_id,descendants,any_variant_container_descendant,descendants_variant_ids_set))
,children);
if(cljs.core.truth_((function (){var or__5025__auto__ = no_changes_QMARK_;
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = cljs.core.not(app.common.types.container.invalid_structure_for_component_QMARK_(objects,parent,children,pasting_QMARK_,libraries));
if(and__5023__auto__){
var and__5023__auto____$1 = (function (){var or__5025__auto____$1 = pasting_QMARK_;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return (((any_main_descendant == null)) || ((!(app.common.types.component.main_instance_QMARK_(parent)))));
}
})();
if(cljs.core.truth_(and__5023__auto____$1)){
return ((((cljs.core.not(any_variant_container_descendant)) || (((cljs.core.not(any_variant_container_ascendant)) && (cljs.core.not(any_main_ascendant)))))) && (((((cljs.core.not(app.common.types.component.is_variant_container_QMARK_(parent))) || (all_main_QMARK_))) && (((cljs.core.not(pasting_QMARK_)) || ((((!(app.common.types.component.is_variant_QMARK_(parent)))) || ((!(cljs.core.contains_QMARK_(descendants_variant_ids_set,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(parent))))))))))));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id,get_frame(parent_id)], null);
} else {
var G__53049 = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(parent);
var G__53050 = objects;
var G__53051 = children;
var G__53052 = pasting_QMARK_;
var G__53053 = libraries;
parent_id = G__53049;
objects = G__53050;
children = G__53051;
pasting_QMARK_ = G__53052;
libraries = G__53053;
continue;
}
break;
}
}));

(app.common.types.container.find_valid_parent_and_frame_ids.cljs$lang$maxFixedArity = 5);

/**
 * Get the sync attrs groups that are affected by changes in applied tokens.
 * 
 * If any token has been applied or unapplied in the shape, calculate the corresponding
 * attributes and get the groups. If some of the attributes are to be applied in the
 * content nodes of a text shape, also return the content groups (only for attributes,
 * so the text is not touched).
 */
app.common.types.container.get_token_groups = (function app$common$types$container$get_token_groups(shape,new_applied_tokens){
var old_applied_tokens = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871).cljs$core$IFn$_invoke$arity$1(shape),cljs.core.PersistentHashSet.EMPTY);
var changed_token_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52987_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_applied_tokens,p1__52987_SHARP_),cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_applied_tokens,p1__52987_SHARP_));
}),app.common.types.token.all_keys);
var text_shape_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"text","text",-1790561697));
var attrs_in_text_content_QMARK_ = cljs.core.some((function (p1__52988_SHARP_){
return (app.common.types.token.attrs_in_text_content.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.attrs_in_text_content.cljs$core$IFn$_invoke$arity$1(p1__52988_SHARP_) : app.common.types.token.attrs_in_text_content.call(null,p1__52988_SHARP_));
}),changed_token_attrs);
var changed_groups = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.common.types.token.token_attr__GT_shape_attr),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__52989_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.types.component.sync_attrs,p1__52989_SHARP_);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.some_QMARK_)),changed_token_attrs);
var changed_groups__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = text_shape_QMARK_;
if(and__5023__auto__){
var and__5023__auto____$1 = app.common.data.not_empty_QMARK_(changed_groups);
if(and__5023__auto____$1){
return attrs_in_text_content_QMARK_;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(changed_groups,new cljs.core.Keyword(null,"content-group","content-group",-531031163),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"text-content-attribute","text-content-attribute",2029723884)], 0)):changed_groups);
return changed_groups__$1;
});
/**
 * Assign attribute to shape with touched logic.
 * 
 *   The returned shape will contain a metadata associated with it
 *   indicating if shape is touched or not.
 */
app.common.types.container.set_shape_attr = (function app$common$types$container$set_shape_attr(var_args){
var args__5755__auto__ = [];
var len__5749__auto___53057 = arguments.length;
var i__5750__auto___53058 = (0);
while(true){
if((i__5750__auto___53058 < len__5749__auto___53057)){
args__5755__auto__.push((arguments[i__5750__auto___53058]));

var G__53059 = (i__5750__auto___53058 + (1));
i__5750__auto___53058 = G__53059;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return app.common.types.container.set_shape_attr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(app.common.types.container.set_shape_attr.cljs$core$IFn$_invoke$arity$variadic = (function (shape,attr,val,p__52996){
var map__52997 = p__52996;
var map__52997__$1 = cljs.core.__destructure_map(map__52997);
var ignore_touched = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52997__$1,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699));
var ignore_geometry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52997__$1,new cljs.core.Keyword(null,"ignore-geometry","ignore-geometry",1630780695));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.types.component.sync_attrs,attr);
var shape_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,attr);
var ignore_QMARK_ = (function (){var or__5025__auto__ = ignore_touched;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"position-data","position-data",-499622376));
}
})();
var is_geometry_QMARK_ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword(null,"geometry-group","geometry-group",801077954))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword(null,"content-group","content-group",-531031163))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"path","path",-188191168))))))) && (cljs.core.not((function (){var fexpr__52998 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null);
return (fexpr__52998.cljs$core$IFn$_invoke$arity$1 ? fexpr__52998.cljs$core$IFn$_invoke$arity$1(attr) : fexpr__52998.call(null,attr));
})())));
var in_copy_QMARK_ = app.common.types.component.in_component_copy_QMARK_(shape);
var equal_QMARK_ = ((is_geometry_QMARK_)?app.common.geom.shapes.close_attrs_QMARK_.cljs$core$IFn$_invoke$arity$4(attr,val,shape_val,(1)):app.common.geom.shapes.close_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3(attr,val,shape_val));
var touched_QMARK_ = (function (){var and__5023__auto__ = group;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.not(equal_QMARK_)) && (cljs.core.not((function (){var and__5023__auto____$2 = ignore_geometry;
if(cljs.core.truth_(and__5023__auto____$2)){
return is_geometry_QMARK_;
} else {
return and__5023__auto____$2;
}
})())));
} else {
return and__5023__auto__;
}
})();
var content_diff_type = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"text","text",-1790561697))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"content","content",15833224)))))?app.common.types.text.get_diff_type(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape),val):null);
var token_groups = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871)))?app.common.types.container.get_token_groups(shape,val):cljs.core.PersistentHashSet.EMPTY);
var groups = (function (){var G__52999 = token_groups;
if(cljs.core.truth_((function (){var and__5023__auto__ = group;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(equal_QMARK_);
} else {
return and__5023__auto__;
}
})())){
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(G__52999,cljs.core.PersistentHashSet.createAsIfByAssoc([group]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content_diff_type], 0));
} else {
return G__52999;
}
})();
var G__53000 = shape;
var G__53000__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = in_copy_QMARK_;
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core.not_empty(groups);
if(cljs.core.truth_(and__5023__auto____$1)){
return ((cljs.core.not(ignore_QMARK_)) && (cljs.core.not((function (){var and__5023__auto____$3 = ignore_geometry;
if(cljs.core.truth_(and__5023__auto____$3)){
return is_geometry_QMARK_;
} else {
return and__5023__auto____$3;
}
})())));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__53000,new cljs.core.Keyword(null,"touched","touched",-609134419),(function (touched){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__52990_SHARP_,p2__52991_SHARP_){
return app.common.types.component.set_touched_group(p1__52990_SHARP_,p2__52991_SHARP_);
}),touched,groups);
})),new cljs.core.Keyword(null,"remote-synced","remote-synced",1564821477)):G__53000);
var G__53000__$2 = (((val == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53000__$1,attr):G__53000__$1);
var G__53000__$3 = (((!((val == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53000__$2,attr,val):G__53000__$2);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__53000__$3,cljs.core.assoc,new cljs.core.Keyword("app.common.types.container","touched","app.common.types.container/touched",245224963),touched_QMARK_);

}));

(app.common.types.container.set_shape_attr.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(app.common.types.container.set_shape_attr.cljs$lang$applyTo = (function (seq52992){
var G__52993 = cljs.core.first(seq52992);
var seq52992__$1 = cljs.core.next(seq52992);
var G__52994 = cljs.core.first(seq52992__$1);
var seq52992__$2 = cljs.core.next(seq52992__$1);
var G__52995 = cljs.core.first(seq52992__$2);
var seq52992__$3 = cljs.core.next(seq52992__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52993,G__52994,G__52995,seq52992__$3);
}));


//# sourceMappingURL=app.common.types.container.js.map
