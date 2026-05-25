import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.modifiers.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.math.js";
import "./app.common.types.component.js";
import "./app.common.types.container.js";
import "./app.common.types.modifiers.js";
import "./app.common.types.path.js";
import "./app.common.types.shape_tree.js";
import "./app.common.types.shape.attrs.js";
import "./app.common.types.shape.layout.js";
import "./app.common.uuid.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.features.js";
import "./app.render_wasm.api.js";
import "./app.render_wasm.shape.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.modifiers');
app.main.data.workspace.modifiers.xf_COLON_without_uuid_zero = cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__48752_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__48752_SHARP_,app.common.uuid.zero);
}));
app.main.data.workspace.modifiers.transform_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 35, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864),null,new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),null,new cljs.core.Keyword(null,"transform","transform",1381301764),null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"grow-type","grow-type",-908344411),null,new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"layout-item-margin-type","layout-item-margin-type",-1313230390),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),null,new cljs.core.Keyword(null,"layout-padding-type","layout-padding-type",-1407674837),null,new cljs.core.Keyword(null,"points","points",-1486596883),null,new cljs.core.Keyword(null,"r2","r2",252844174),null,new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366),null,new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),null,new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),null,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576),null,new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),null,new cljs.core.Keyword(null,"r3","r3",-2027148174),null,new cljs.core.Keyword(null,"blur","blur",-453500461),null,new cljs.core.Keyword(null,"r1","r1",690974900),null,new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548),null,new cljs.core.Keyword(null,"position-data","position-data",-499622376),null,new cljs.core.Keyword(null,"strokes","strokes",-1645650952),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"shadow","shadow",873231803),null,new cljs.core.Keyword(null,"r4","r4",1134323163),null,new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947),null,new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),null,new cljs.core.Keyword(null,"selrect","selrect",1966287292),null,new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548),null,new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307),null,new cljs.core.Keyword(null,"flip-x","flip-x",891276861),null,new cljs.core.Keyword(null,"height","height",1025178622),null,new cljs.core.Keyword(null,"flip-y","flip-y",935998815),null], null), null);
/**
 * If the shape is a component instance, check its relative position and rotation respect
 *   the root of the component, and see if it changes after applying a transformation.
 */
app.main.data.workspace.modifiers.check_delta = (function app$main$data$workspace$modifiers$check_delta(shape,root,transformed_shape,transformed_root){
var shape_delta = (cljs.core.truth_(root)?app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((app.common.geom.shapes.left_bound(shape) - app.common.geom.shapes.left_bound(root)),(app.common.geom.shapes.top_bound(shape) - app.common.geom.shapes.top_bound(root))):null);
var transformed_shape_delta = (cljs.core.truth_(transformed_root)?app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((app.common.geom.shapes.left_bound(transformed_shape) - app.common.geom.shapes.left_bound(transformed_root)),(app.common.geom.shapes.top_bound(transformed_shape) - app.common.geom.shapes.top_bound(transformed_root))):null);
var distance = (cljs.core.truth_((function (){var and__5023__auto__ = shape_delta;
if(cljs.core.truth_(and__5023__auto__)){
return transformed_shape_delta;
} else {
return and__5023__auto__;
}
})())?app.common.geom.point.distance_vector(shape_delta,transformed_shape_delta):app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0)));
var rotation_delta = (((((!((new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(shape) == null)))) && ((!((new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(shape) == null))))))?(new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(transformed_shape) - new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(shape)):(0));
var selrect = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape);
var transformed_selrect = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(transformed_shape);
var and__5023__auto__ = (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(distance) < (1))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(distance) < (1))));
if(and__5023__auto__){
var and__5023__auto____$1 = app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(selrect),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(transformed_selrect));
if(cljs.core.truth_(and__5023__auto____$1)){
var and__5023__auto____$2 = app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selrect),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(transformed_selrect));
if(cljs.core.truth_(and__5023__auto____$2)){
return app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(rotation_delta,(0));
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});
/**
 * Retrieves a map with the flag `ignore-geometry?` given a tree of modifiers
 */
app.main.data.workspace.modifiers.calculate_ignore_tree = (function app$main$data$workspace$modifiers$calculate_ignore_tree(modif_tree,objects){
var get_ignore_tree = (function() {
var app$main$data$workspace$modifiers$calculate_ignore_tree_$_get_ignore_tree = null;
var app$main$data$workspace$modifiers$calculate_ignore_tree_$_get_ignore_tree__2 = (function (ignore_tree,shape){
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var transformed_shape = app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(shape,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(modif_tree,shape_id),new cljs.core.Keyword(null,"modifiers","modifiers",50378834)));
var root = (cljs.core.truth_(new cljs.core.Keyword(null,"component-root","component-root",-485271026).cljs$core$IFn$_invoke$arity$1(shape))?shape:app.common.types.container.get_component_shape.cljs$core$IFn$_invoke$arity$3(objects,shape,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-main?","allow-main?",-837994938),true], null)));
var transformed_root = (cljs.core.truth_(new cljs.core.Keyword(null,"component-root","component-root",-485271026).cljs$core$IFn$_invoke$arity$1(shape))?transformed_shape:app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(root,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(modif_tree,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root)),new cljs.core.Keyword(null,"modifiers","modifiers",50378834))));
return app$main$data$workspace$modifiers$calculate_ignore_tree_$_get_ignore_tree.cljs$core$IFn$_invoke$arity$5(ignore_tree,shape,transformed_shape,root,transformed_root);
});
var app$main$data$workspace$modifiers$calculate_ignore_tree_$_get_ignore_tree__4 = (function (ignore_tree,shape,root,transformed_root){
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var transformed_shape = app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(shape,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(modif_tree,shape_id),new cljs.core.Keyword(null,"modifiers","modifiers",50378834)));
return app$main$data$workspace$modifiers$calculate_ignore_tree_$_get_ignore_tree.cljs$core$IFn$_invoke$arity$5(ignore_tree,shape,transformed_shape,root,transformed_root);
});
var app$main$data$workspace$modifiers$calculate_ignore_tree_$_get_ignore_tree__5 = (function (ignore_tree,shape,transformed_shape,root,transformed_root){
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var ignore_tree__$1 = (function (){var G__48787 = ignore_tree;
if((((!((root == null)))) && (app.common.types.component.in_component_copy_QMARK_(shape)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48787,shape_id,app.main.data.workspace.modifiers.check_delta(shape,root,transformed_shape,transformed_root));
} else {
return G__48787;
}
})();
var set_child = (function (ignore_tree__$2,child){
return app$main$data$workspace$modifiers$calculate_ignore_tree_$_get_ignore_tree.cljs$core$IFn$_invoke$arity$4(ignore_tree__$2,child,root,transformed_root);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(set_child,ignore_tree__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape)));
});
app$main$data$workspace$modifiers$calculate_ignore_tree_$_get_ignore_tree = function(ignore_tree,shape,transformed_shape,root,transformed_root){
switch(arguments.length){
case 2:
return app$main$data$workspace$modifiers$calculate_ignore_tree_$_get_ignore_tree__2.call(this,ignore_tree,shape);
case 4:
return app$main$data$workspace$modifiers$calculate_ignore_tree_$_get_ignore_tree__4.call(this,ignore_tree,shape,transformed_shape,root);
case 5:
return app$main$data$workspace$modifiers$calculate_ignore_tree_$_get_ignore_tree__5.call(this,ignore_tree,shape,transformed_shape,root,transformed_root);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$modifiers$calculate_ignore_tree_$_get_ignore_tree.cljs$core$IFn$_invoke$arity$2 = app$main$data$workspace$modifiers$calculate_ignore_tree_$_get_ignore_tree__2;
app$main$data$workspace$modifiers$calculate_ignore_tree_$_get_ignore_tree.cljs$core$IFn$_invoke$arity$4 = app$main$data$workspace$modifiers$calculate_ignore_tree_$_get_ignore_tree__4;
app$main$data$workspace$modifiers$calculate_ignore_tree_$_get_ignore_tree.cljs$core$IFn$_invoke$arity$5 = app$main$data$workspace$modifiers$calculate_ignore_tree_$_get_ignore_tree__5;
return app$main$data$workspace$modifiers$calculate_ignore_tree_$_get_ignore_tree;
})()
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(get_ignore_tree,null,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48773_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__48773_SHARP_);
}),cljs.core.keys(modif_tree)));
});
/**
 * Retrieves a map with the flag `ignore-geometry?` given a tree of modifiers
 */
app.main.data.workspace.modifiers.calculate_ignore_tree_wasm = (function app$main$data$workspace$modifiers$calculate_ignore_tree_wasm(transforms,objects){
var get_ignore_tree = (function() {
var app$main$data$workspace$modifiers$calculate_ignore_tree_wasm_$_get_ignore_tree = null;
var app$main$data$workspace$modifiers$calculate_ignore_tree_wasm_$_get_ignore_tree__2 = (function (ignore_tree,shape){
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var transformed_shape = app.common.geom.shapes.apply_transform(shape,cljs.core.get.cljs$core$IFn$_invoke$arity$2(transforms,shape_id));
var root = (cljs.core.truth_(new cljs.core.Keyword(null,"component-root","component-root",-485271026).cljs$core$IFn$_invoke$arity$1(shape))?shape:app.common.types.container.get_component_shape.cljs$core$IFn$_invoke$arity$3(objects,shape,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-main?","allow-main?",-837994938),true], null)));
var transformed_root = (cljs.core.truth_(new cljs.core.Keyword(null,"component-root","component-root",-485271026).cljs$core$IFn$_invoke$arity$1(shape))?transformed_shape:app.common.geom.shapes.apply_transform(root,cljs.core.get.cljs$core$IFn$_invoke$arity$2(transforms,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root))));
return app$main$data$workspace$modifiers$calculate_ignore_tree_wasm_$_get_ignore_tree.cljs$core$IFn$_invoke$arity$5(ignore_tree,shape,transformed_shape,root,transformed_root);
});
var app$main$data$workspace$modifiers$calculate_ignore_tree_wasm_$_get_ignore_tree__4 = (function (ignore_tree,shape,root,transformed_root){
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var transformed_shape = app.common.geom.shapes.apply_transform(shape,cljs.core.get.cljs$core$IFn$_invoke$arity$2(transforms,shape_id));
return app$main$data$workspace$modifiers$calculate_ignore_tree_wasm_$_get_ignore_tree.cljs$core$IFn$_invoke$arity$5(ignore_tree,shape,transformed_shape,root,transformed_root);
});
var app$main$data$workspace$modifiers$calculate_ignore_tree_wasm_$_get_ignore_tree__5 = (function (ignore_tree,shape,transformed_shape,root,transformed_root){
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var ignore_tree__$1 = (function (){var G__48799 = ignore_tree;
if((((!((root == null)))) && (app.common.types.component.in_component_copy_QMARK_(shape)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48799,shape_id,app.main.data.workspace.modifiers.check_delta(shape,root,transformed_shape,transformed_root));
} else {
return G__48799;
}
})();
var set_child = (function (ignore_tree__$2,child){
return app$main$data$workspace$modifiers$calculate_ignore_tree_wasm_$_get_ignore_tree.cljs$core$IFn$_invoke$arity$4(ignore_tree__$2,child,root,transformed_root);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(set_child,ignore_tree__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape)));
});
app$main$data$workspace$modifiers$calculate_ignore_tree_wasm_$_get_ignore_tree = function(ignore_tree,shape,transformed_shape,root,transformed_root){
switch(arguments.length){
case 2:
return app$main$data$workspace$modifiers$calculate_ignore_tree_wasm_$_get_ignore_tree__2.call(this,ignore_tree,shape);
case 4:
return app$main$data$workspace$modifiers$calculate_ignore_tree_wasm_$_get_ignore_tree__4.call(this,ignore_tree,shape,transformed_shape,root);
case 5:
return app$main$data$workspace$modifiers$calculate_ignore_tree_wasm_$_get_ignore_tree__5.call(this,ignore_tree,shape,transformed_shape,root,transformed_root);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$data$workspace$modifiers$calculate_ignore_tree_wasm_$_get_ignore_tree.cljs$core$IFn$_invoke$arity$2 = app$main$data$workspace$modifiers$calculate_ignore_tree_wasm_$_get_ignore_tree__2;
app$main$data$workspace$modifiers$calculate_ignore_tree_wasm_$_get_ignore_tree.cljs$core$IFn$_invoke$arity$4 = app$main$data$workspace$modifiers$calculate_ignore_tree_wasm_$_get_ignore_tree__4;
app$main$data$workspace$modifiers$calculate_ignore_tree_wasm_$_get_ignore_tree.cljs$core$IFn$_invoke$arity$5 = app$main$data$workspace$modifiers$calculate_ignore_tree_wasm_$_get_ignore_tree__5;
return app$main$data$workspace$modifiers$calculate_ignore_tree_wasm_$_get_ignore_tree;
})()
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(get_ignore_tree,null,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48788_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__48788_SHARP_);
}),cljs.core.keys(transforms)));
});
app.main.data.workspace.modifiers.assoc_position_data = (function app$main$data$workspace$modifiers$assoc_position_data(shape,position_data,old_shape){
var deltav = app.common.geom.point.to_vec(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(old_shape)),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape)));
var position_data__$1 = app.common.geom.shapes.move_position_data(position_data,deltav);
var G__48802 = shape;
if(app.common.data.not_empty_QMARK_(position_data__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48802,new cljs.core.Keyword(null,"position-data","position-data",-499622376),position_data__$1);
} else {
return G__48802;
}
});
app.main.data.workspace.modifiers.set_wasm_props_BANG_ = (function app$main$data$workspace$modifiers$set_wasm_props_BANG_(objects,prev_wasm_props,wasm_props){
var clean_props = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48804){
var vec__48805 = p__48804;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48805,(0),null);
var map__48808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48805,(1),null);
var map__48808__$1 = cljs.core.__destructure_map(map__48808);
var change = map__48808__$1;
var property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48808__$1,new cljs.core.Keyword(null,"property","property",-1114278232));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(change,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,property))], null);
}),prev_wasm_props);
var wasm_props__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clean_props,wasm_props);
var shape_changes = cljs.core.update_vals(cljs.core.group_by(cljs.core.first,wasm_props__$1),(function (p1__48803_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"property","property",-1114278232),cljs.core.second)),p1__48803_SHARP_);
}));
var objects_changed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (objects__$1,p__48809){
var vec__48810 = p__48809;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48810,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48810,(1),null);
var shape = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (shape,p__48813){
var vec__48814 = p__48813;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48814,(0),null);
var operation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48814,(1),null);
return app.common.types.modifiers.apply_modifier(shape,operation);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects__$1,id),properties);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(objects__$1,id,shape);
}),objects,cljs.core.group_by(cljs.core.first,wasm_props__$1));
return app.render_wasm.shape.process_shape_changes_BANG_(objects_changed,shape_changes);
});
app.main.data.workspace.modifiers.clear_local_transform = (function app$main$data$workspace$modifiers$clear_local_transform(){
if((typeof app.main.data.workspace.modifiers.clear_local_transform_48817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.modifiers.clear_local_transform_48817 = (function (meta48818){
this.meta48818 = meta48818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.modifiers.clear_local_transform_48817.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.clear_local_transform_48817.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.modifiers","clear-local-transform","app.main.data.workspace.modifiers/clear-local-transform",-136322627);
}));

(app.main.data.workspace.modifiers.clear_local_transform_48817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48819,meta48818__$1){
var self__ = this;
var _48819__$1 = this;
return (new app.main.data.workspace.modifiers.clear_local_transform_48817(meta48818__$1));
}));

(app.main.data.workspace.modifiers.clear_local_transform_48817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48819){
var self__ = this;
var _48819__$1 = this;
return self__.meta48818;
}));

(app.main.data.workspace.modifiers.clear_local_transform_48817.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.clear_local_transform_48817.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))){
app.render_wasm.api.clean_modifiers();

return app.main.data.workspace.modifiers.set_wasm_props_BANG_(app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"wasm-props","wasm-props",-484881436).cljs$core$IFn$_invoke$arity$1(state),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
}));

(app.main.data.workspace.modifiers.clear_local_transform_48817.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.clear_local_transform_48817.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"workspace-modifiers","workspace-modifiers",1432219828),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wasm-props","wasm-props",-484881436),new cljs.core.Keyword(null,"prev-wasm-props","prev-wasm-props",2005132939)], 0)),new cljs.core.Keyword("app.main.data.workspace.transforms","current-move-selected","app.main.data.workspace.transforms/current-move-selected",-1360032117));
}));
}

return (new app.main.data.workspace.modifiers.clear_local_transform_48817(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.modifiers.create_modif_tree = (function app$main$data$workspace$modifiers$create_modif_tree(ids,modifiers){
app.common.data.macros.runtime_assert("expected valid coll of uuids",(function (){
return cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids);
}));

return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__48820_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__48820_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),modifiers], null)],null));
})),ids);
});
app.main.data.workspace.modifiers.build_modif_tree = (function app$main$data$workspace$modifiers$build_modif_tree(ids,objects,get_modifier){
app.common.data.macros.runtime_assert("expected valid coll of uuids",(function (){
return cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids);
}));

return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__48821_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__48821_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),(function (){var G__48822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__48821_SHARP_);
return (get_modifier.cljs$core$IFn$_invoke$arity$1 ? get_modifier.cljs$core$IFn$_invoke$arity$1(G__48822) : get_modifier.call(null,G__48822));
})()], null)],null));
})),ids);
});
app.main.data.workspace.modifiers.modifier_remove_from_parent = (function app$main$data$workspace$modifiers$modifier_remove_from_parent(modif_tree,objects,shapes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (modif_tree__$1,child_id){
var parent_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [child_id,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131)], null));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(modif_tree__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id,new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null),app.common.types.modifiers.remove_children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [child_id], null));
}),modif_tree,shapes);
});
app.main.data.workspace.modifiers.add_grid_children_modifiers = (function app$main$data$workspace$modifiers$add_grid_children_modifiers(modifiers,frame_id,shapes,objects,p__48825){
var vec__48826 = p__48825;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48826,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48826,(1),null);
var cell = vec__48826;
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
var ids = cljs.core.set(shapes);
var frame__$1 = app.common.types.shape.layout.assign_cells(cljs.core.update.cljs$core$IFn$_invoke$arity$3(frame,new cljs.core.Keyword(null,"shapes","shapes",1897594879),(function (p1__48823_SHARP_){
return app.common.data.removev(ids,p1__48823_SHARP_);
})),objects);
var ids__$1 = cljs.core.reverse(app.common.types.shape_tree.sort_z_index.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__48824_SHARP_){
return app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,p1__48824_SHARP_);
}),ids)));
var frame__$2 = app.common.types.shape.layout.assign_cells((function (){var G__48829 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(frame__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879),app.common.data.concat_vec,ids__$1);
if((!((cell == null)))){
return app.common.types.shape.layout.push_into_cell(G__48829,ids__$1,row,column);
} else {
return G__48829;
}
})(),objects);
return app.common.types.modifiers.change_property(app.common.types.modifiers.change_property(app.common.types.modifiers.change_property(modifiers,new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947),new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947).cljs$core$IFn$_invoke$arity$1(frame__$2)),new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864),new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864).cljs$core$IFn$_invoke$arity$1(frame__$2)),new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187).cljs$core$IFn$_invoke$arity$1(frame__$2));
});
app.main.data.workspace.modifiers.build_change_frame_modifiers = (function app$main$data$workspace$modifiers$build_change_frame_modifiers(modif_tree,objects,selected,target_frame_id,drop_index,cell_data){
var origin_frame_ids = cljs.core.group_by((function (p1__48830_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48830_SHARP_,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072)], null));
}),selected);
var child_set = cljs.core.set(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_frame_id,new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null)));
var target_frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,target_frame_id);
var target_flex_layout_QMARK_ = app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(target_frame);
var target_grid_layout_QMARK_ = app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(target_frame);
var children_ids = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(target_frame),selected);
var set_parent_ids = (function (modif_tree__$1,shapes,target_frame_id__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (modif_tree__$2,id){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(modif_tree__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null),(function (p1__48831_SHARP_){
return app.common.types.modifiers.change_property(app.common.types.modifiers.change_property(p1__48831_SHARP_,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),target_frame_id__$1),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),target_frame_id__$1);
}));
}),modif_tree__$1,shapes);
});
var update_frame_modifiers = (function (modif_tree__$1,p__48834){
var vec__48835 = p__48834;
var original_frame = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48835,(0),null);
var shapes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48835,(1),null);
var shapes__$1 = app.common.data.removev((function (p1__48832_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_frame_id,p1__48832_SHARP_);
}),shapes);
var shapes__$2 = (function (){var G__48838 = shapes__$1;
if(((((target_grid_layout_QMARK_) || (target_flex_layout_QMARK_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(original_frame,target_frame_id)))){
return cljs.core.filterv((function (p1__48833_SHARP_){
return cljs.core.contains_QMARK_(child_set,p1__48833_SHARP_);
}),G__48838);
} else {
return G__48838;
}
})();
var children_ids__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(selected),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,original_frame),new cljs.core.Keyword(null,"shapes","shapes",1897594879)));
var h_sizing_QMARK_ = (function (){var and__5023__auto__ = app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,original_frame);
if(cljs.core.truth_(and__5023__auto__)){
return app.common.types.shape.layout.change_h_sizing_QMARK_(original_frame,objects,children_ids__$1);
} else {
return and__5023__auto__;
}
})();
var v_sizing_QMARK_ = (function (){var and__5023__auto__ = app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,original_frame);
if(cljs.core.truth_(and__5023__auto__)){
return app.common.types.shape.layout.change_v_sizing_QMARK_(original_frame,objects,children_ids__$1);
} else {
return and__5023__auto__;
}
})();
var G__48839 = modif_tree__$1;
var G__48839__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(original_frame,target_frame_id))?(function (){var G__48840 = (function (){var G__48841 = set_parent_ids(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(app.main.data.workspace.modifiers.modifier_remove_from_parent(G__48839,objects,shapes__$2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_frame_id,new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null),app.common.types.modifiers.add_children,shapes__$2,drop_index),shapes__$2,target_frame_id);
if(cljs.core.truth_(h_sizing_QMARK_)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__48841,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [original_frame,new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null),app.common.types.modifiers.change_property,new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),new cljs.core.Keyword(null,"fix","fix",-1031773329));
} else {
return G__48841;
}
})();
if(cljs.core.truth_(v_sizing_QMARK_)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__48840,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [original_frame,new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null),app.common.types.modifiers.change_property,new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),new cljs.core.Keyword(null,"fix","fix",-1031773329));
} else {
return G__48840;
}
})():G__48839);
var G__48839__$2 = ((((target_flex_layout_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(original_frame,target_frame_id))))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__48839__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_frame_id,new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null),app.common.types.modifiers.add_children,shapes__$2,drop_index):G__48839__$1);
if(target_grid_layout_QMARK_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(G__48839__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_frame_id,new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null),app.main.data.workspace.modifiers.add_grid_children_modifiers,target_frame_id,shapes__$2,objects,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cell_data], 0));
} else {
return G__48839__$2;
}
});
var $ = modif_tree;
var $__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(update_frame_modifiers,$,origin_frame_ids);
var G__48842 = $__$1;
var G__48842__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,target_frame_id);
if(cljs.core.truth_(and__5023__auto__)){
return app.common.types.shape.layout.change_h_sizing_QMARK_(target_frame_id,objects,children_ids);
} else {
return and__5023__auto__;
}
})())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__48842,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_frame_id,new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null),app.common.types.modifiers.change_property,new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),new cljs.core.Keyword(null,"fix","fix",-1031773329)):G__48842);
if(cljs.core.truth_((function (){var and__5023__auto__ = app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,target_frame_id);
if(cljs.core.truth_(and__5023__auto__)){
return app.common.types.shape.layout.change_v_sizing_QMARK_(target_frame_id,objects,children_ids);
} else {
return and__5023__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__48842__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_frame_id,new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null),app.common.types.modifiers.change_property,new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),new cljs.core.Keyword(null,"fix","fix",-1031773329));
} else {
return G__48842__$1;
}
});
app.main.data.workspace.modifiers.modif__GT_js = (function app$main$data$workspace$modifiers$modif__GT_js(modif_tree,objects){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__48843){
var vec__48844 = p__48843;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48844,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48844,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"name","name",1843675177)], null)),v], null);
})),modif_tree));
});
app.main.data.workspace.modifiers.apply_text_modifier = (function app$main$data$workspace$modifiers$apply_text_modifier(shape,p__48847){
var map__48848 = p__48847;
var map__48848__$1 = cljs.core.__destructure_map(map__48848);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48848__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48848__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var G__48849 = shape;
var G__48849__$1 = (((!((width == null))))?app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(G__48849,app.common.types.modifiers.change_dimensions_modifiers.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-lock?","ignore-lock?",1533033230),true], null))):G__48849);
if((!((height == null)))){
return app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(G__48849__$1,app.common.types.modifiers.change_dimensions_modifiers.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-lock?","ignore-lock?",1533033230),true], null)));
} else {
return G__48849__$1;
}
});
app.main.data.workspace.modifiers.apply_text_modifiers = (function app$main$data$workspace$modifiers$apply_text_modifiers(objects,text_modifiers){
var modifiers = cljs.core.seq(text_modifiers);
var result = objects;
while(true){
if(cljs.core.empty_QMARK_(modifiers)){
return result;
} else {
var vec__48850 = cljs.core.first(modifiers);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48850,(0),null);
var text_modifier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48850,(1),null);
var G__48995 = cljs.core.rest(modifiers);
var G__48996 = app.common.data.update_when.cljs$core$IFn$_invoke$arity$variadic(result,id,app.main.data.workspace.modifiers.apply_text_modifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text_modifier], 0));
modifiers = G__48995;
result = G__48996;
continue;
}
break;
}
});
app.main.data.workspace.modifiers.calculate_modifiers = (function app$main$data$workspace$modifiers$calculate_modifiers(var_args){
var G__48854 = arguments.length;
switch (G__48854) {
case 2:
return app.main.data.workspace.modifiers.calculate_modifiers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return app.main.data.workspace.modifiers.calculate_modifiers.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return app.main.data.workspace.modifiers.calculate_modifiers.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.modifiers.calculate_modifiers.cljs$core$IFn$_invoke$arity$2 = (function (state,modif_tree){
return app.main.data.workspace.modifiers.calculate_modifiers.cljs$core$IFn$_invoke$arity$5(state,false,false,modif_tree,null);
}));

(app.main.data.workspace.modifiers.calculate_modifiers.cljs$core$IFn$_invoke$arity$5 = (function (state,ignore_constraints,ignore_snap_pixel,modif_tree,page_id){
return app.main.data.workspace.modifiers.calculate_modifiers.cljs$core$IFn$_invoke$arity$6(state,ignore_constraints,ignore_snap_pixel,modif_tree,page_id,null);
}));

(app.main.data.workspace.modifiers.calculate_modifiers.cljs$core$IFn$_invoke$arity$6 = (function (state,ignore_constraints,ignore_snap_pixel,modif_tree,page_id,params){
var page_id__$1 = (function (){var or__5025__auto__ = page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
}
})();
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id__$1);
var snap_pixel_QMARK_ = ((cljs.core.not(ignore_snap_pixel)) && (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"workspace-layout","workspace-layout",420938173).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"snap-pixel-grid","snap-pixel-grid",-1263132602))));
var $ = objects;
var $__$1 = app.main.data.workspace.modifiers.apply_text_modifiers($,cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-text-modifier","workspace-text-modifier",1403277807)));
return app.common.geom.modifiers.set_objects_modifiers.cljs$core$IFn$_invoke$arity$3(modif_tree,$__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore-constraints","ignore-constraints",-1221464851),ignore_constraints,new cljs.core.Keyword(null,"snap-pixel?","snap-pixel?",-1854606324),snap_pixel_QMARK_], null)], 0)));
}));

(app.main.data.workspace.modifiers.calculate_modifiers.cljs$lang$maxFixedArity = 6);

app.main.data.workspace.modifiers.calculate_update_modifiers = (function app$main$data$workspace$modifiers$calculate_update_modifiers(old_modif_tree,state,ignore_constraints,ignore_snap_pixel,modif_tree){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var snap_pixel_QMARK_ = ((cljs.core.not(ignore_snap_pixel)) && (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"workspace-layout","workspace-layout",420938173).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"snap-pixel-grid","snap-pixel-grid",-1263132602))));
var objects__$1 = app.main.data.workspace.modifiers.apply_text_modifiers(objects,cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-text-modifier","workspace-text-modifier",1403277807)));
return app.common.geom.modifiers.set_objects_modifiers.cljs$core$IFn$_invoke$arity$4(old_modif_tree,modif_tree,objects__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore-constraints","ignore-constraints",-1221464851),ignore_constraints,new cljs.core.Keyword(null,"snap-pixel?","snap-pixel?",-1854606324),snap_pixel_QMARK_], null));
});
app.main.data.workspace.modifiers.update_modifiers = (function app$main$data$workspace$modifiers$update_modifiers(var_args){
var G__48856 = arguments.length;
switch (G__48856) {
case 1:
return app.main.data.workspace.modifiers.update_modifiers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.modifiers.update_modifiers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.modifiers.update_modifiers.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.modifiers.update_modifiers.cljs$core$IFn$_invoke$arity$1 = (function (modif_tree){
return app.main.data.workspace.modifiers.update_modifiers.cljs$core$IFn$_invoke$arity$2(modif_tree,false);
}));

(app.main.data.workspace.modifiers.update_modifiers.cljs$core$IFn$_invoke$arity$2 = (function (modif_tree,ignore_constraints){
return app.main.data.workspace.modifiers.update_modifiers.cljs$core$IFn$_invoke$arity$3(modif_tree,ignore_constraints,false);
}));

(app.main.data.workspace.modifiers.update_modifiers.cljs$core$IFn$_invoke$arity$3 = (function (modif_tree,ignore_constraints,ignore_snap_pixel){
if((typeof app.main.data.workspace.modifiers.update_modifiers_48857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.modifiers.update_modifiers_48857 = (function (modif_tree,ignore_constraints,ignore_snap_pixel,meta48858){
this.modif_tree = modif_tree;
this.ignore_constraints = ignore_constraints;
this.ignore_snap_pixel = ignore_snap_pixel;
this.meta48858 = meta48858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.modifiers.update_modifiers_48857.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.update_modifiers_48857.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.modifiers","update-modifiers","app.main.data.workspace.modifiers/update-modifiers",-705310363);
}));

(app.main.data.workspace.modifiers.update_modifiers_48857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48859,meta48858__$1){
var self__ = this;
var _48859__$1 = this;
return (new app.main.data.workspace.modifiers.update_modifiers_48857(self__.modif_tree,self__.ignore_constraints,self__.ignore_snap_pixel,meta48858__$1));
}));

(app.main.data.workspace.modifiers.update_modifiers_48857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48859){
var self__ = this;
var _48859__$1 = this;
return self__.meta48858;
}));

(app.main.data.workspace.modifiers.update_modifiers_48857.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.update_modifiers_48857.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"workspace-modifiers","workspace-modifiers",1432219828),app.main.data.workspace.modifiers.calculate_update_modifiers,state,self__.ignore_constraints,self__.ignore_snap_pixel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.modif_tree], 0));
}));
}

return (new app.main.data.workspace.modifiers.update_modifiers_48857(modif_tree,ignore_constraints,ignore_snap_pixel,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.modifiers.update_modifiers.cljs$lang$maxFixedArity = 3);

app.main.data.workspace.modifiers.set_modifiers = (function app$main$data$workspace$modifiers$set_modifiers(var_args){
var G__48861 = arguments.length;
switch (G__48861) {
case 1:
return app.main.data.workspace.modifiers.set_modifiers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.modifiers.set_modifiers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.modifiers.set_modifiers.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.modifiers.set_modifiers.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.modifiers.set_modifiers.cljs$core$IFn$_invoke$arity$1 = (function (modif_tree){
return app.main.data.workspace.modifiers.set_modifiers.cljs$core$IFn$_invoke$arity$2(modif_tree,false);
}));

(app.main.data.workspace.modifiers.set_modifiers.cljs$core$IFn$_invoke$arity$2 = (function (modif_tree,ignore_constraints){
return app.main.data.workspace.modifiers.set_modifiers.cljs$core$IFn$_invoke$arity$3(modif_tree,ignore_constraints,false);
}));

(app.main.data.workspace.modifiers.set_modifiers.cljs$core$IFn$_invoke$arity$3 = (function (modif_tree,ignore_constraints,ignore_snap_pixel){
return app.main.data.workspace.modifiers.set_modifiers.cljs$core$IFn$_invoke$arity$4(modif_tree,ignore_constraints,ignore_snap_pixel,null);
}));

(app.main.data.workspace.modifiers.set_modifiers.cljs$core$IFn$_invoke$arity$4 = (function (modif_tree,ignore_constraints,ignore_snap_pixel,params){
if((typeof app.main.data.workspace.modifiers.set_modifiers_48862 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.modifiers.set_modifiers_48862 = (function (modif_tree,ignore_constraints,ignore_snap_pixel,params,meta48863){
this.modif_tree = modif_tree;
this.ignore_constraints = ignore_constraints;
this.ignore_snap_pixel = ignore_snap_pixel;
this.params = params;
this.meta48863 = meta48863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.modifiers.set_modifiers_48862.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.set_modifiers_48862.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.modifiers","set-modifiers","app.main.data.workspace.modifiers/set-modifiers",-925598309);
}));

(app.main.data.workspace.modifiers.set_modifiers_48862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48864,meta48863__$1){
var self__ = this;
var _48864__$1 = this;
return (new app.main.data.workspace.modifiers.set_modifiers_48862(self__.modif_tree,self__.ignore_constraints,self__.ignore_snap_pixel,self__.params,meta48863__$1));
}));

(app.main.data.workspace.modifiers.set_modifiers_48862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48864){
var self__ = this;
var _48864__$1 = this;
return self__.meta48863;
}));

(app.main.data.workspace.modifiers.set_modifiers_48862.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.set_modifiers_48862.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var modifiers = app.main.data.workspace.modifiers.calculate_modifiers.cljs$core$IFn$_invoke$arity$6(state,self__.ignore_constraints,self__.ignore_snap_pixel,self__.modif_tree,page_id,self__.params);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-modifiers","workspace-modifiers",1432219828),modifiers);
}));
}

return (new app.main.data.workspace.modifiers.set_modifiers_48862(modif_tree,ignore_constraints,ignore_snap_pixel,params,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.modifiers.set_modifiers.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.modifiers.parse_structure_modifiers = (function app$main$data$workspace$modifiers$parse_structure_modifiers(modif_tree){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__48865){
var vec__48866 = p__48865;
var parent_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48866,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48866,(1),null);
if(app.common.types.modifiers.has_structure_QMARK_(new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(data))){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (modifier){
var G__48869 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(modifier);
var G__48869__$1 = (((G__48869 instanceof cljs.core.Keyword))?G__48869.fqn:null);
switch (G__48869__$1) {
case "remove-children":
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (child_id){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"remove-children","remove-children",1296934069),new cljs.core.Keyword(null,"parent","parent",-878878779),parent_id,new cljs.core.Keyword(null,"id","id",-1388402092),child_id,new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"value","value",305978217),(0)], null);
}),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(modifier));

break;
case "add-children":
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (child_id){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"add-children","add-children",705239943),new cljs.core.Keyword(null,"parent","parent",-878878779),parent_id,new cljs.core.Keyword(null,"id","id",-1388402092),child_id,new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(modifier),new cljs.core.Keyword(null,"value","value",305978217),(0)], null);
}),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(modifier));

break;
case "scale-content":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scale-content","scale-content",1165837834),new cljs.core.Keyword(null,"parent","parent",-878878779),parent_id,new cljs.core.Keyword(null,"id","id",-1388402092),parent_id,new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(modifier)], null)], null);

break;
default:
return null;

}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.Keyword(null,"structure-child","structure-child",-1244004583)], null)))], 0));
} else {
return null;
}
})),modif_tree);
});
app.main.data.workspace.modifiers.xf_COLON_parse_geometry_modifier = (function (){var default_transform = app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0();
return cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__48870){
var vec__48871 = p__48870;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48871,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48871,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,app.common.uuid.zero)){
return null;
} else {
if(app.common.types.modifiers.has_geometry_QMARK_(new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(data))){
var parent = new cljs.core.Keyword(null,"geometry-parent","geometry-parent",1427808503).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(data));
var kind = ((app.common.data.not_empty_QMARK_(parent))?new cljs.core.Keyword(null,"parent","parent",-878878779):new cljs.core.Keyword(null,"child","child",623967545));
return app.common.data.vec2(id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),app.common.types.modifiers.modifiers__GT_transform(new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"kind","kind",-717265803),kind], null));
} else {
return app.common.data.vec2(id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),default_transform,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"parent","parent",-878878779)], null));

}
}
}));
})();
app.main.data.workspace.modifiers.parse_geometry_modifiers = (function app$main$data$workspace$modifiers$parse_geometry_modifiers(modif_tree){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.main.data.workspace.modifiers.xf_COLON_parse_geometry_modifier,modif_tree);
});
app.main.data.workspace.modifiers.extract_property_changes = (function app$main$data$workspace$modifiers$extract_property_changes(modif_tree){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__48875){
var vec__48876 = p__48875;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48876,(0),null);
var map__48879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48876,(1),null);
var map__48879__$1 = cljs.core.__destructure_map(map__48879);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48879__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"change-property","change-property",271308648));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__48880){
var vec__48881 = p__48880;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48881,(0),null);
var map__48884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48881,(1),null);
var map__48884__$1 = cljs.core.__destructure_map(map__48884);
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48884__$1,new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48874_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[id,p1__48874_SHARP_],null));
}),new cljs.core.Keyword(null,"structure-parent","structure-parent",-188442324).cljs$core$IFn$_invoke$arity$1(modifiers));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([modif_tree], 0)));
});
app.main.data.workspace.modifiers.set_temporary_selrect = (function app$main$data$workspace$modifiers$set_temporary_selrect(selrect){
if((typeof app.main.data.workspace.modifiers.set_temporary_selrect_48885 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.modifiers.set_temporary_selrect_48885 = (function (selrect,meta48886){
this.selrect = selrect;
this.meta48886 = meta48886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.modifiers.set_temporary_selrect_48885.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.set_temporary_selrect_48885.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.modifiers","set-temporary-selrect","app.main.data.workspace.modifiers/set-temporary-selrect",-51398342);
}));

(app.main.data.workspace.modifiers.set_temporary_selrect_48885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48887,meta48886__$1){
var self__ = this;
var _48887__$1 = this;
return (new app.main.data.workspace.modifiers.set_temporary_selrect_48885(self__.selrect,meta48886__$1));
}));

(app.main.data.workspace.modifiers.set_temporary_selrect_48885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48887){
var self__ = this;
var _48887__$1 = this;
return self__.meta48886;
}));

(app.main.data.workspace.modifiers.set_temporary_selrect_48885.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.set_temporary_selrect_48885.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-selrect","workspace-selrect",683668588),self__.selrect);
}));
}

return (new app.main.data.workspace.modifiers.set_temporary_selrect_48885(selrect,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.modifiers.set_temporary_modifiers = (function app$main$data$workspace$modifiers$set_temporary_modifiers(modifiers){
if((typeof app.main.data.workspace.modifiers.set_temporary_modifiers_48888 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.modifiers.set_temporary_modifiers_48888 = (function (modifiers,meta48889){
this.modifiers = modifiers;
this.meta48889 = meta48889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.modifiers.set_temporary_modifiers_48888.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.set_temporary_modifiers_48888.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.modifiers","set-temporary-modifiers","app.main.data.workspace.modifiers/set-temporary-modifiers",1171692928);
}));

(app.main.data.workspace.modifiers.set_temporary_modifiers_48888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48890,meta48889__$1){
var self__ = this;
var _48890__$1 = this;
return (new app.main.data.workspace.modifiers.set_temporary_modifiers_48888(self__.modifiers,meta48889__$1));
}));

(app.main.data.workspace.modifiers.set_temporary_modifiers_48888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48890){
var self__ = this;
var _48890__$1 = this;
return self__.meta48889;
}));

(app.main.data.workspace.modifiers.set_temporary_modifiers_48888.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.set_temporary_modifiers_48888.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-wasm-modifiers","workspace-wasm-modifiers",-1284490597),self__.modifiers);
}));
}

return (new app.main.data.workspace.modifiers.set_temporary_modifiers_48888(modifiers,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.modifiers.xf_COLON_map_key = cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.key);
app.main.data.workspace.modifiers.set_wasm_modifiers = (function app$main$data$workspace$modifiers$set_wasm_modifiers(var_args){
var args__5755__auto__ = [];
var len__5749__auto___49032 = arguments.length;
var i__5750__auto___49033 = (0);
while(true){
if((i__5750__auto___49033 < len__5749__auto___49032)){
args__5755__auto__.push((arguments[i__5750__auto___49033]));

var G__49037 = (i__5750__auto___49033 + (1));
i__5750__auto___49033 = G__49037;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.main.data.workspace.modifiers.set_wasm_modifiers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.main.data.workspace.modifiers.set_wasm_modifiers.cljs$core$IFn$_invoke$arity$variadic = (function (modif_tree,p__48893){
var map__48894 = p__48893;
var map__48894__$1 = cljs.core.__destructure_map(map__48894);
var params = map__48894__$1;
var ignore_constraints = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48894__$1,new cljs.core.Keyword(null,"ignore-constraints","ignore-constraints",-1221464851),false);
var ignore_snap_pixel = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48894__$1,new cljs.core.Keyword(null,"ignore-snap-pixel","ignore-snap-pixel",1451661032),false);
if((typeof app.main.data.workspace.modifiers.set_wasm_modifiers_48895 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.modifiers.set_wasm_modifiers_48895 = (function (modif_tree,p__48893,map__48894,params,ignore_constraints,ignore_snap_pixel,meta48896){
this.modif_tree = modif_tree;
this.p__48893 = p__48893;
this.map__48894 = map__48894;
this.params = params;
this.ignore_constraints = ignore_constraints;
this.ignore_snap_pixel = ignore_snap_pixel;
this.meta48896 = meta48896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.modifiers.set_wasm_modifiers_48895.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.set_wasm_modifiers_48895.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.modifiers","set-wasm-modifiers","app.main.data.workspace.modifiers/set-wasm-modifiers",2017937478);
}));

(app.main.data.workspace.modifiers.set_wasm_modifiers_48895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48897,meta48896__$1){
var self__ = this;
var _48897__$1 = this;
return (new app.main.data.workspace.modifiers.set_wasm_modifiers_48895(self__.modif_tree,self__.p__48893,self__.map__48894,self__.params,self__.ignore_constraints,self__.ignore_snap_pixel,meta48896__$1));
}));

(app.main.data.workspace.modifiers.set_wasm_modifiers_48895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48897){
var self__ = this;
var _48897__$1 = this;
return self__.meta48896;
}));

(app.main.data.workspace.modifiers.set_wasm_modifiers_48895.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.set_wasm_modifiers_48895.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var property_changes = app.main.data.workspace.modifiers.extract_property_changes(self__.modif_tree);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"prev-wasm-props","prev-wasm-props",2005132939),new cljs.core.Keyword(null,"wasm-props","wasm-props",-484881436).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"wasm-props","wasm-props",-484881436),property_changes);
}));

(app.main.data.workspace.modifiers.set_wasm_modifiers_48895.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.set_wasm_modifiers_48895.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
app.render_wasm.api.clean_modifiers();

var prev_wasm_props = new cljs.core.Keyword(null,"prev-wasm-props","prev-wasm-props",2005132939).cljs$core$IFn$_invoke$arity$1(state);
var wasm_props = new cljs.core.Keyword(null,"wasm-props","wasm-props",-484881436).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var pixel_precision = false;
app.main.data.workspace.modifiers.set_wasm_props_BANG_(objects,prev_wasm_props,wasm_props);

var structure_entries = app.main.data.workspace.modifiers.parse_structure_modifiers(self__.modif_tree);
app.render_wasm.api.set_structure_modifiers(structure_entries);

var geometry_entries = app.main.data.workspace.modifiers.parse_geometry_modifiers(self__.modif_tree);
var modifiers = app.render_wasm.api.propagate_modifiers(geometry_entries,pixel_precision);
app.render_wasm.api.set_modifiers(modifiers);

var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.main.data.workspace.modifiers.xf_COLON_map_key,geometry_entries);
var selrect = app.render_wasm.api.get_selection_rect(ids);
return beicon.v2.core.of(app.main.data.workspace.modifiers.set_temporary_selrect(selrect),app.main.data.workspace.modifiers.set_temporary_modifiers(modifiers));
}));
}

return (new app.main.data.workspace.modifiers.set_wasm_modifiers_48895(modif_tree,p__48893,map__48894__$1,params,ignore_constraints,ignore_snap_pixel,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.modifiers.set_wasm_modifiers.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.main.data.workspace.modifiers.set_wasm_modifiers.cljs$lang$applyTo = (function (seq48891){
var G__48892 = cljs.core.first(seq48891);
var seq48891__$1 = cljs.core.next(seq48891);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48892,seq48891__$1);
}));

app.main.data.workspace.modifiers.propagate_structure_modifiers = (function app$main$data$workspace$modifiers$propagate_structure_modifiers(modif_tree,objects){
var propagate_children = (function app$main$data$workspace$modifiers$propagate_structure_modifiers_$_propagate_children(modif_tree__$1,parent_id,modifiers){
var new_modifiers = app.common.types.modifiers.select_child_structre_modifiers(modifiers);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__48898_SHARP_,p2__48899_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__48898_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__48899_SHARP_,new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null),app.common.types.modifiers.add_modifiers,new_modifiers);
}),modif_tree__$1,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id,new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null)));
});
var pending = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keys(modif_tree));
var modif_tree__$1 = modif_tree;
while(true){
var temp__5823__auto__ = cljs.core.first(pending);
if(cljs.core.truth_(temp__5823__auto__)){
var next = temp__5823__auto__;
var pending__$1 = cljs.core.rest(pending);
var modifiers = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(modif_tree__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next,new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null));
var vec__48903 = ((app.common.types.modifiers.has_structure_child_QMARK_(modifiers))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(pending__$1,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next,new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null))),propagate_children(modif_tree__$1,next,modifiers)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pending__$1,modif_tree__$1], null));
var pending__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48903,(0),null);
var modif_tree__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48903,(1),null);
var G__49042 = pending__$2;
var G__49043 = modif_tree__$2;
pending = G__49042;
modif_tree__$1 = G__49043;
continue;
} else {
return modif_tree__$1;
}
break;
}
});
app.main.data.workspace.modifiers.apply_wasm_modifiers = (function app$main$data$workspace$modifiers$apply_wasm_modifiers(var_args){
var args__5755__auto__ = [];
var len__5749__auto___49044 = arguments.length;
var i__5750__auto___49045 = (0);
while(true){
if((i__5750__auto___49045 < len__5749__auto___49044)){
args__5755__auto__.push((arguments[i__5750__auto___49045]));

var G__49046 = (i__5750__auto___49045 + (1));
i__5750__auto___49045 = G__49046;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.main.data.workspace.modifiers.apply_wasm_modifiers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.main.data.workspace.modifiers.apply_wasm_modifiers.cljs$core$IFn$_invoke$arity$variadic = (function (modif_tree,p__48908){
var map__48909 = p__48908;
var map__48909__$1 = cljs.core.__destructure_map(map__48909);
var params = map__48909__$1;
var ignore_constraints = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48909__$1,new cljs.core.Keyword(null,"ignore-constraints","ignore-constraints",-1221464851),false);
var ignore_snap_pixel = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48909__$1,new cljs.core.Keyword(null,"ignore-snap-pixel","ignore-snap-pixel",1451661032),false);
var snap_ignore_axis = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48909__$1,new cljs.core.Keyword(null,"snap-ignore-axis","snap-ignore-axis",642992690),null);
var undo_transation_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48909__$1,new cljs.core.Keyword(null,"undo-transation?","undo-transation?",-1838368123),true);
if((typeof app.main.data.workspace.modifiers.apply_wasm_modifiesr_48910 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.modifiers.apply_wasm_modifiesr_48910 = (function (modif_tree,p__48908,map__48909,params,ignore_constraints,ignore_snap_pixel,snap_ignore_axis,undo_transation_QMARK_,meta48911){
this.modif_tree = modif_tree;
this.p__48908 = p__48908;
this.map__48909 = map__48909;
this.params = params;
this.ignore_constraints = ignore_constraints;
this.ignore_snap_pixel = ignore_snap_pixel;
this.snap_ignore_axis = snap_ignore_axis;
this.undo_transation_QMARK_ = undo_transation_QMARK_;
this.meta48911 = meta48911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.modifiers.apply_wasm_modifiesr_48910.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.apply_wasm_modifiesr_48910.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.modifiers","apply-wasm-modifiesr","app.main.data.workspace.modifiers/apply-wasm-modifiesr",1138986038);
}));

(app.main.data.workspace.modifiers.apply_wasm_modifiesr_48910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48912,meta48911__$1){
var self__ = this;
var _48912__$1 = this;
return (new app.main.data.workspace.modifiers.apply_wasm_modifiesr_48910(self__.modif_tree,self__.p__48908,self__.map__48909,self__.params,self__.ignore_constraints,self__.ignore_snap_pixel,self__.snap_ignore_axis,self__.undo_transation_QMARK_,meta48911__$1));
}));

(app.main.data.workspace.modifiers.apply_wasm_modifiesr_48910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48912){
var self__ = this;
var _48912__$1 = this;
return self__.meta48911;
}));

(app.main.data.workspace.modifiers.apply_wasm_modifiesr_48910.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.apply_wasm_modifiesr_48910.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
app.render_wasm.api.clean_modifiers();

var structure_entries_49052 = app.main.data.workspace.modifiers.parse_structure_modifiers(self__.modif_tree);
app.render_wasm.api.set_structure_modifiers(structure_entries_49052);

var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var geometry_entries = app.main.data.workspace.modifiers.parse_geometry_modifiers(self__.modif_tree);
var snap_pixel_QMARK_ = ((cljs.core.not(self__.ignore_snap_pixel)) && (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"workspace-layout","workspace-layout",420938173).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"snap-pixel-grid","snap-pixel-grid",-1263132602))));
var transforms = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,app.render_wasm.api.propagate_modifiers(geometry_entries,snap_pixel_QMARK_));
var ignore_tree = app.main.data.workspace.modifiers.calculate_ignore_tree_wasm(transforms,objects);
var options = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.params,new cljs.core.Keyword(null,"reg-objects?","reg-objects?",-195730116),true),new cljs.core.Keyword(null,"ignore-tree","ignore-tree",864252283),ignore_tree),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),app.main.data.workspace.modifiers.transform_attrs);
var modif_tree__$1 = app.main.data.workspace.modifiers.propagate_structure_modifiers(self__.modif_tree,app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state));
var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.set(cljs.core.keys(modif_tree__$1)),app.main.data.workspace.modifiers.xf_COLON_without_uuid_zero,cljs.core.keys(transforms));
var update_shape = (function (shape){
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(transforms,shape_id);
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(modif_tree__$1,shape_id),new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
return app.common.types.modifiers.apply_structure_modifiers(app.common.geom.shapes.apply_transform(shape,transform),modifiers);
});
var bool_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.get_parents_with_self,objects)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(app.common.files.helpers.bool_shape_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092))),ids);
var undo_id = Symbol();
return beicon.v2.core.concat((cljs.core.truth_(self__.undo_transation_QMARK_)?beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id)):beicon.v2.core.empty()),beicon.v2.core.of(app.main.data.workspace.modifiers.clear_local_transform(),potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.guides","move-frame-guides","app.main.data.workspace.guides/move-frame-guides",1545364171),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ids","ids",-998535796),ids,new cljs.core.Keyword(null,"transforms","transforms",793344554),transforms], null)),potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.comments","move-frame-comment-threads","app.main.data.workspace.comments/move-frame-comment-threads",-1863105348),transforms),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(ids,update_shape,options),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(bool_ids,app.common.types.path.update_bool_shape,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true))),(cljs.core.truth_(self__.undo_transation_QMARK_)?beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)):beicon.v2.core.empty()));
}));
}

return (new app.main.data.workspace.modifiers.apply_wasm_modifiesr_48910(modif_tree,p__48908,map__48909__$1,params,ignore_constraints,ignore_snap_pixel,snap_ignore_axis,undo_transation_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.modifiers.apply_wasm_modifiers.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.main.data.workspace.modifiers.apply_wasm_modifiers.cljs$lang$applyTo = (function (seq48906){
var G__48907 = cljs.core.first(seq48906);
var seq48906__$1 = cljs.core.next(seq48906);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48907,seq48906__$1);
}));

app.main.data.workspace.modifiers.xf_rotation_shape = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__48913_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(p1__48913_SHARP_,new cljs.core.Keyword(null,"blocked","blocked",181326681),false);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__48914_SHARP_){
return new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.attrs.editable_attrs,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__48914_SHARP_)));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)));
app.main.data.workspace.modifiers.set_wasm_rotation_modifiers = (function app$main$data$workspace$modifiers$set_wasm_rotation_modifiers(var_args){
var G__48916 = arguments.length;
switch (G__48916) {
case 2:
return app.main.data.workspace.modifiers.set_wasm_rotation_modifiers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.modifiers.set_wasm_rotation_modifiers.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.modifiers.set_wasm_rotation_modifiers.cljs$core$IFn$_invoke$arity$2 = (function (angle,shapes){
return app.main.data.workspace.modifiers.set_wasm_rotation_modifiers.cljs$core$IFn$_invoke$arity$3(angle,shapes,app.common.geom.rect.rect__GT_center(app.common.geom.shapes.shapes__GT_rect(shapes)));
}));

(app.main.data.workspace.modifiers.set_wasm_rotation_modifiers.cljs$core$IFn$_invoke$arity$3 = (function (angle,shapes,center){
if((typeof app.main.data.workspace.modifiers.set_wasm_rotation_modifiers_48917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.modifiers.set_wasm_rotation_modifiers_48917 = (function (angle,shapes,center,meta48918){
this.angle = angle;
this.shapes = shapes;
this.center = center;
this.meta48918 = meta48918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.modifiers.set_wasm_rotation_modifiers_48917.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.set_wasm_rotation_modifiers_48917.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.modifiers","set-wasm-rotation-modifiers","app.main.data.workspace.modifiers/set-wasm-rotation-modifiers",582356407);
}));

(app.main.data.workspace.modifiers.set_wasm_rotation_modifiers_48917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48919,meta48918__$1){
var self__ = this;
var _48919__$1 = this;
return (new app.main.data.workspace.modifiers.set_wasm_rotation_modifiers_48917(self__.angle,self__.shapes,self__.center,meta48918__$1));
}));

(app.main.data.workspace.modifiers.set_wasm_rotation_modifiers_48917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48919){
var self__ = this;
var _48919__$1 = this;
return self__.meta48918;
}));

(app.main.data.workspace.modifiers.set_wasm_rotation_modifiers_48917.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.set_wasm_rotation_modifiers_48917.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var ids = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.modifiers.xf_rotation_shape,self__.shapes);
var get_modifier = (function (shape){
return app.common.types.modifiers.rotation_modifiers(shape,self__.center,self__.angle);
});
var modif_tree = app.main.data.workspace.modifiers.build_modif_tree(ids,objects,get_modifier);
var modifiers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__48920){
var vec__48921 = p__48920;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48921,(0),null);
var map__48924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48921,(1),null);
var map__48924__$1 = cljs.core.__destructure_map(map__48924);
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48924__$1,new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
return app.common.data.vec2(id,app.common.types.modifiers.modifiers__GT_transform(modifiers));
}),modif_tree);
return app.render_wasm.api.set_modifiers(modifiers);
}));
}

return (new app.main.data.workspace.modifiers.set_wasm_rotation_modifiers_48917(angle,shapes,center,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.modifiers.set_wasm_rotation_modifiers.cljs$lang$maxFixedArity = 3);

app.main.data.workspace.modifiers.set_rotation_modifiers = (function app$main$data$workspace$modifiers$set_rotation_modifiers(var_args){
var G__48926 = arguments.length;
switch (G__48926) {
case 2:
return app.main.data.workspace.modifiers.set_rotation_modifiers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.modifiers.set_rotation_modifiers.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.modifiers.set_rotation_modifiers.cljs$core$IFn$_invoke$arity$2 = (function (angle,shapes){
return app.main.data.workspace.modifiers.set_rotation_modifiers.cljs$core$IFn$_invoke$arity$3(angle,shapes,app.common.geom.rect.rect__GT_center(app.common.geom.shapes.shapes__GT_rect(shapes)));
}));

(app.main.data.workspace.modifiers.set_rotation_modifiers.cljs$core$IFn$_invoke$arity$3 = (function (angle,shapes,center){
if((typeof app.main.data.workspace.modifiers.set_rotation_modifiers_48927 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.modifiers.set_rotation_modifiers_48927 = (function (angle,shapes,center,meta48928){
this.angle = angle;
this.shapes = shapes;
this.center = center;
this.meta48928 = meta48928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.modifiers.set_rotation_modifiers_48927.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.set_rotation_modifiers_48927.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.modifiers","set-rotation-modifiers","app.main.data.workspace.modifiers/set-rotation-modifiers",-286134133);
}));

(app.main.data.workspace.modifiers.set_rotation_modifiers_48927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48929,meta48928__$1){
var self__ = this;
var _48929__$1 = this;
return (new app.main.data.workspace.modifiers.set_rotation_modifiers_48927(self__.angle,self__.shapes,self__.center,meta48928__$1));
}));

(app.main.data.workspace.modifiers.set_rotation_modifiers_48927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48929){
var self__ = this;
var _48929__$1 = this;
return self__.meta48928;
}));

(app.main.data.workspace.modifiers.set_rotation_modifiers_48927.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.set_rotation_modifiers_48927.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var ids = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.modifiers.xf_rotation_shape,self__.shapes);
var get_modifier = (function (shape){
return app.common.types.modifiers.rotation_modifiers(shape,self__.center,self__.angle);
});
var modif_tree = app.common.geom.modifiers.set_objects_modifiers.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.modifiers.build_modif_tree(ids,objects,get_modifier),objects);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-modifiers","workspace-modifiers",1432219828),modif_tree);
}));
}

return (new app.main.data.workspace.modifiers.set_rotation_modifiers_48927(angle,shapes,center,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.modifiers.set_rotation_modifiers.cljs$lang$maxFixedArity = 3);

app.main.data.workspace.modifiers.set_delta_rotation_modifiers = (function app$main$data$workspace$modifiers$set_delta_rotation_modifiers(angle,shapes,p__48932){
var map__48933 = p__48932;
var map__48933__$1 = cljs.core.__destructure_map(map__48933);
var center = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48933__$1,new cljs.core.Keyword(null,"center","center",-748944368),null);
var delta_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48933__$1,new cljs.core.Keyword(null,"delta?","delta?",-1801433442),false);
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48933__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
if((typeof app.main.data.workspace.modifiers.set_delta_rotation_modifiers_48934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.modifiers.set_delta_rotation_modifiers_48934 = (function (angle,shapes,p__48932,map__48933,center,delta_QMARK_,page_id,meta48935){
this.angle = angle;
this.shapes = shapes;
this.p__48932 = p__48932;
this.map__48933 = map__48933;
this.center = center;
this.delta_QMARK_ = delta_QMARK_;
this.page_id = page_id;
this.meta48935 = meta48935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.modifiers.set_delta_rotation_modifiers_48934.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.set_delta_rotation_modifiers_48934.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.modifiers","set-delta-rotation-modifiers","app.main.data.workspace.modifiers/set-delta-rotation-modifiers",-1633341513);
}));

(app.main.data.workspace.modifiers.set_delta_rotation_modifiers_48934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48936,meta48935__$1){
var self__ = this;
var _48936__$1 = this;
return (new app.main.data.workspace.modifiers.set_delta_rotation_modifiers_48934(self__.angle,self__.shapes,self__.p__48932,self__.map__48933,self__.center,self__.delta_QMARK_,self__.page_id,meta48935__$1));
}));

(app.main.data.workspace.modifiers.set_delta_rotation_modifiers_48934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48936){
var self__ = this;
var _48936__$1 = this;
return self__.meta48935;
}));

(app.main.data.workspace.modifiers.set_delta_rotation_modifiers_48934.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.set_delta_rotation_modifiers_48934.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var page_id__$1 = (function (){var or__5025__auto__ = self__.page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
}
})();
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id__$1);
var ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48931_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.attrs.editable_attrs,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__48931_SHARP_)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__48930_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(p1__48930_SHARP_,new cljs.core.Keyword(null,"blocked","blocked",181326681),false);
}),self__.shapes)));
var get_modifier = (function (shape){
var delta = (cljs.core.truth_(self__.delta_QMARK_)?self__.angle:(self__.angle - new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(shape)));
var center__$1 = (function (){var or__5025__auto__ = self__.center;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.geom.shapes.shape__GT_center(shape);
}
})();
return app.common.types.modifiers.rotation_modifiers(shape,center__$1,delta);
});
var modif_tree = app.common.geom.modifiers.set_objects_modifiers.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.modifiers.build_modif_tree(ids,objects,get_modifier),objects);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-modifiers","workspace-modifiers",1432219828),modif_tree);
}));
}

return (new app.main.data.workspace.modifiers.set_delta_rotation_modifiers_48934(angle,shapes,p__48932,map__48933__$1,center,delta_QMARK_,page_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * A lower-level version of apply-modifiers, that expects receive ready
 *   to use objects, object-modifiers and text-modifiers.
 */
app.main.data.workspace.modifiers.apply_modifiers_STAR_ = (function app$main$data$workspace$modifiers$apply_modifiers_STAR_(objects,object_modifiers,text_modifiers,options){
if((typeof app.main.data.workspace.modifiers.apply_modifiers_STAR__48943 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.modifiers.apply_modifiers_STAR__48943 = (function (objects,object_modifiers,text_modifiers,options,meta48944){
this.objects = objects;
this.object_modifiers = object_modifiers;
this.text_modifiers = text_modifiers;
this.options = options;
this.meta48944 = meta48944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.modifiers.apply_modifiers_STAR__48943.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.apply_modifiers_STAR__48943.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.modifiers","apply-modifiers*","app.main.data.workspace.modifiers/apply-modifiers*",1001902394);
}));

(app.main.data.workspace.modifiers.apply_modifiers_STAR__48943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48945,meta48944__$1){
var self__ = this;
var _48945__$1 = this;
return (new app.main.data.workspace.modifiers.apply_modifiers_STAR__48943(self__.objects,self__.object_modifiers,self__.text_modifiers,self__.options,meta48944__$1));
}));

(app.main.data.workspace.modifiers.apply_modifiers_STAR__48943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48945){
var self__ = this;
var _48945__$1 = this;
return self__.meta48944;
}));

(app.main.data.workspace.modifiers.apply_modifiers_STAR__48943.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.apply_modifiers_STAR__48943.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.main.data.workspace.modifiers.xf_COLON_without_uuid_zero,cljs.core.keys(self__.object_modifiers));
var ids_with_children = cljs.core.into.cljs$core$IFn$_invoke$arity$3(ids,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.get_children_ids,self__.objects)),ids);
var ignore_tree = app.main.data.workspace.modifiers.calculate_ignore_tree(self__.object_modifiers,self__.objects);
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.options,new cljs.core.Keyword(null,"reg-objects?","reg-objects?",-195730116),true),new cljs.core.Keyword(null,"ignore-tree","ignore-tree",864252283),ignore_tree),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),app.main.data.workspace.modifiers.transform_attrs);
var update_shape = (function (shape){
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.object_modifiers,shape_id),new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
var text_shape_QMARK_ = app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var pos_data = ((text_shape_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.text_modifiers,shape_id),new cljs.core.Keyword(null,"position-data","position-data",-499622376)):null);
var G__48946 = app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(shape,modifiers);
if(app.common.data.not_empty_QMARK_(pos_data)){
return app.main.data.workspace.modifiers.assoc_position_data(G__48946,pos_data,shape);
} else {
return G__48946;
}
});
return beicon.v2.core.of(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.guides","move-frame-guides","app.main.data.workspace.guides/move-frame-guides",1545364171),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ids","ids",-998535796),ids_with_children,new cljs.core.Keyword(null,"modifiers","modifiers",50378834),self__.object_modifiers], null)),potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.comments","move-frame-comment-threads","app.main.data.workspace.comments/move-frame-comment-threads",-1863105348),ids_with_children),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(ids,update_shape,options__$1));
}));
}

return (new app.main.data.workspace.modifiers.apply_modifiers_STAR__48943(objects,object_modifiers,text_modifiers,options,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.modifiers.apply_modifiers = (function app$main$data$workspace$modifiers$apply_modifiers(var_args){
var G__48949 = arguments.length;
switch (G__48949) {
case 0:
return app.main.data.workspace.modifiers.apply_modifiers.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.workspace.modifiers.apply_modifiers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.modifiers.apply_modifiers.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.workspace.modifiers.apply_modifiers.cljs$core$IFn$_invoke$arity$1(null);
}));

(app.main.data.workspace.modifiers.apply_modifiers.cljs$core$IFn$_invoke$arity$1 = (function (p__48952){
var map__48953 = p__48952;
var map__48953__$1 = cljs.core.__destructure_map(map__48953);
var options = map__48953__$1;
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48953__$1,new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
var undo_transation_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48953__$1,new cljs.core.Keyword(null,"undo-transation?","undo-transation?",-1838368123),true);
var ignore_constraints = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48953__$1,new cljs.core.Keyword(null,"ignore-constraints","ignore-constraints",-1221464851),false);
var ignore_snap_pixel = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48953__$1,new cljs.core.Keyword(null,"ignore-snap-pixel","ignore-snap-pixel",1451661032),false);
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48953__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
if((typeof app.main.data.workspace.modifiers.apply_modifiers_48957 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.modifiers.apply_modifiers_48957 = (function (p__48952,map__48953,options,modifiers,undo_transation_QMARK_,ignore_constraints,ignore_snap_pixel,page_id,meta48958){
this.p__48952 = p__48952;
this.map__48953 = map__48953;
this.options = options;
this.modifiers = modifiers;
this.undo_transation_QMARK_ = undo_transation_QMARK_;
this.ignore_constraints = ignore_constraints;
this.ignore_snap_pixel = ignore_snap_pixel;
this.page_id = page_id;
this.meta48958 = meta48958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.modifiers.apply_modifiers_48957.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.apply_modifiers_48957.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.modifiers","apply-modifiers","app.main.data.workspace.modifiers/apply-modifiers",1960839948);
}));

(app.main.data.workspace.modifiers.apply_modifiers_48957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48959,meta48958__$1){
var self__ = this;
var _48959__$1 = this;
return (new app.main.data.workspace.modifiers.apply_modifiers_48957(self__.p__48952,self__.map__48953,self__.options,self__.modifiers,self__.undo_transation_QMARK_,self__.ignore_constraints,self__.ignore_snap_pixel,self__.page_id,meta48958__$1));
}));

(app.main.data.workspace.modifiers.apply_modifiers_48957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48959){
var self__ = this;
var _48959__$1 = this;
return self__.meta48958;
}));

(app.main.data.workspace.modifiers.apply_modifiers_48957.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.modifiers.apply_modifiers_48957.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var text_modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-text-modifier","workspace-text-modifier",1403277807));
var page_id__$1 = (function (){var or__5025__auto__ = self__.page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
}
})();
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id__$1);
var object_modifiers = (((!((self__.modifiers == null))))?app.main.data.workspace.modifiers.calculate_modifiers.cljs$core$IFn$_invoke$arity$5(state,self__.ignore_constraints,self__.ignore_snap_pixel,self__.modifiers,page_id__$1):cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-modifiers","workspace-modifiers",1432219828)));
var undo_id = Symbol();
return beicon.v2.core.concat((cljs.core.truth_(self__.undo_transation_QMARK_)?beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id)):beicon.v2.core.empty()),beicon.v2.core.of(app.main.data.workspace.modifiers.apply_modifiers_STAR_(objects,object_modifiers,text_modifiers,self__.options),(function (state__$1){
var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.main.data.workspace.modifiers.xf_COLON_without_uuid_zero,cljs.core.keys(object_modifiers));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"workspace-text-modifier","workspace-text-modifier",1403277807),(function (p1__48947_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__48947_SHARP_,ids);
}));
})),(((self__.modifiers == null))?beicon.v2.core.of(app.main.data.workspace.modifiers.clear_local_transform()):beicon.v2.core.empty()),(cljs.core.truth_(self__.undo_transation_QMARK_)?beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)):beicon.v2.core.empty()));
}));
}

return (new app.main.data.workspace.modifiers.apply_modifiers_48957(p__48952,map__48953__$1,options,modifiers,undo_transation_QMARK_,ignore_constraints,ignore_snap_pixel,page_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.modifiers.apply_modifiers.cljs$lang$maxFixedArity = 1);

app.main.data.workspace.modifiers.next_grow_type = (function app$main$data$workspace$modifiers$next_grow_type(current_grow_type,scalev){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_grow_type,new cljs.core.Keyword(null,"fixed","fixed",-562004358))){
return new cljs.core.Keyword(null,"fixed","fixed",-562004358);
} else {
if(((cljs.core.not(app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(scalev),1.0))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_grow_type,new cljs.core.Keyword(null,"auto-width","auto-width",-992925188))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_grow_type,new cljs.core.Keyword(null,"auto-height","auto-height",-960519663))))))){
return new cljs.core.Keyword(null,"fixed","fixed",-562004358);
} else {
if(((cljs.core.not(app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(scalev),1.0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_grow_type,new cljs.core.Keyword(null,"auto-width","auto-width",-992925188))))){
return new cljs.core.Keyword(null,"auto-height","auto-height",-960519663);
} else {
return current_grow_type;

}
}
}
});

//# sourceMappingURL=app.main.data.workspace.modifiers.js.map
