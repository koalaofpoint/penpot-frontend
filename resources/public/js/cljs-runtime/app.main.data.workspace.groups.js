import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.shapes.js";
import "./app.common.types.component.js";
import "./app.common.types.container.js";
import "./app.common.types.shape.js";
import "./app.common.types.shape.layout.js";
import "./app.common.uuid.js";
import "./app.main.data.changes.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.selection.js";
import "./app.main.data.workspace.undo.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.groups');
app.main.data.workspace.groups.shapes_for_grouping = (function app$main$data$workspace$groups$shapes_for_grouping(objects,selected){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48458_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__48458_SHARP_);
}),cljs.core.reverse(app.common.files.helpers.order_by_indexed_shapes(objects,selected)));
});
/**
 * An auxiliary function that finds and returns a set of ids that
 *   corresponds to groups that should be deleted after a group creation.
 * 
 *   The corner case happens when you selects two (or more) shapes that
 *   belongs each one to different groups, and after creating the new
 *   group, one (or many) groups can become empty because they have had a
 *   single shape which is moved to the created group.
 */
app.main.data.workspace.groups.get_empty_groups_after_group_creation = (function app$main$data$workspace$groups$get_empty_groups_after_group_creation(objects,parent_id,shapes){
var ids = app.common.files.helpers.clean_loops(objects,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),shapes));
var parents = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__48459_SHARP_){
return app.common.files.helpers.get_parent_id(objects,p1__48459_SHARP_);
})),ids);
var current_id = cljs.core.first(parents);
var to_check = cljs.core.rest(parents);
var removed_id_QMARK_ = ids;
var result = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.not(current_id)){
return result;
} else {
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,current_id);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(group))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_id,parent_id)) && (cljs.core.empty_QMARK_(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(removed_id_QMARK_,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(group)))))))){
var to_check__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(to_check,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.files.helpers.get_parent_id(objects,current_id)], null));
var G__48586 = cljs.core.first(to_check__$1);
var G__48587 = cljs.core.rest(to_check__$1);
var G__48588 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(removed_id_QMARK_,current_id);
var G__48589 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,current_id);
current_id = G__48586;
to_check = G__48587;
removed_id_QMARK_ = G__48588;
result = G__48589;
continue;
} else {
var G__48590 = cljs.core.first(to_check);
var G__48591 = cljs.core.rest(to_check);
var G__48592 = removed_id_QMARK_;
var G__48593 = result;
current_id = G__48590;
to_check = G__48591;
removed_id_QMARK_ = G__48592;
result = G__48593;
continue;
}
}
break;
}
});
app.main.data.workspace.groups.prepare_create_group = (function app$main$data$workspace$groups$prepare_create_group(changes,id,objects,page_id,shapes,base_name,keep_name_QMARK_){
var frame_id = new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(cljs.core.first(shapes));
var parent_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(cljs.core.first(shapes));
var gname = (cljs.core.truth_((function (){var and__5023__auto__ = keep_name_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(shapes)),new cljs.core.Keyword(null,"group","group",582596132))));
} else {
return and__5023__auto__;
}
})())?new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(shapes)):base_name);
var selrect = app.common.geom.shapes.shapes__GT_rect(shapes);
var group_idx = (app.common.files.helpers.get_position_on_parent(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(shapes))) + (1));
var group = app.common.types.shape.setup_shape(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"selrect","selrect",1966287292),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"shapes","shapes",1897594879)],[new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(selrect),group_idx,gname,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(selrect),new cljs.core.Keyword(null,"group","group",582596132),id,parent_id,frame_id,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(selrect),selrect,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selrect),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes)]));
var shapes_to_detach = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.types.component.in_component_copy_not_head_QMARK_,shapes);
var ids_to_delete = app.main.data.workspace.groups.get_empty_groups_after_group_creation(objects,parent_id,shapes);
var target_cell = (cljs.core.truth_(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,parent_id))?app.common.types.shape.layout.get_cell_by_shape_id(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(shapes))):null);
var grid_parents = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.grid_layout_QMARK_,objects))),shapes);
var changes__$1 = app.common.files.changes_builder.remove_objects.cljs$core$IFn$_invoke$arity$2(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4((function (){var G__48460 = app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.add_object.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_page_id(changes,page_id),objects),group,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),group_idx], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes),(function (shape){
return app.common.data.assoc_when(app.common.data.assoc_when(shape,new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),new cljs.core.Keyword(null,"scale","scale",-230427353)),new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),new cljs.core.Keyword(null,"scale","scale",-230427353));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes),app.common.types.shape.layout.remove_layout_item_data),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(group),cljs.core.reverse(shapes)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes_to_detach),app.common.types.component.detach_shape);
if(cljs.core.truth_(target_cell)){
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(G__48460,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),(function (parent){
return cljs.core.assoc_in(parent,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_cell),new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(group)], null));
}));
} else {
return G__48460;
}
})(),grid_parents,app.common.types.shape.layout.assign_cells,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true], null)),ids_to_delete);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,changes__$1], null);
});
app.main.data.workspace.groups.remove_group_changes = (function app$main$data$workspace$groups$remove_group_changes(it,page_id,group,objects){
var children = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48462_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__48462_SHARP_);
}),app.common.files.helpers.order_by_indexed_shapes(objects,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(group)));
var parent_id = app.common.files.helpers.get_parent_id(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(group));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
var index_in_parent = (cljs.core.ffirst(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48463_SHARP_){
var G__48466 = cljs.core.second(p1__48463_SHARP_);
var fexpr__48464 = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(group)]);
return (fexpr__48464.cljs$core$IFn$_invoke$arity$1 ? fexpr__48464.cljs$core$IFn$_invoke$arity$1(G__48466) : fexpr__48464.call(null,G__48466));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent)))) + (1));
return app.common.files.changes_builder.remove_objects.cljs$core$IFn$_invoke$arity$2(app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$4(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it,page_id),objects),parent_id,children,index_in_parent),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(group)], null));
});
app.main.data.workspace.groups.remove_frame_changes = (function app$main$data$workspace$groups$remove_frame_changes(it,page_id,frame,objects){
var children = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48467_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__48467_SHARP_);
}),app.common.files.helpers.order_by_indexed_shapes(objects,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(frame)));
var parent_id = app.common.files.helpers.get_parent_id(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame));
var idx_in_parent = (app.common.files.helpers.get_position_on_parent(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame)) + (1));
return app.common.files.changes_builder.remove_objects.cljs$core$IFn$_invoke$arity$2(app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$4((function (){var G__48468 = app.common.files.changes_builder.with_objects(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it,page_id),objects);
if(app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(frame)){
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(G__48468,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(frame),app.common.types.shape.layout.remove_layout_item_data);
} else {
return G__48468;
}
})(),parent_id,children,idx_in_parent),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame)], null));
});
app.main.data.workspace.groups.group_shapes = (function app$main$data$workspace$groups$group_shapes(var_args){
var args__5755__auto__ = [];
var len__5749__auto___48599 = arguments.length;
var i__5750__auto___48600 = (0);
while(true){
if((i__5750__auto___48600 < len__5749__auto___48599)){
args__5755__auto__.push((arguments[i__5750__auto___48600]));

var G__48601 = (i__5750__auto___48600 + (1));
i__5750__auto___48600 = G__48601;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return app.main.data.workspace.groups.group_shapes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(app.main.data.workspace.groups.group_shapes.cljs$core$IFn$_invoke$arity$variadic = (function (id,ids,p__48473){
var map__48474 = p__48473;
var map__48474__$1 = cljs.core.__destructure_map(map__48474);
var change_selection_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48474__$1,new cljs.core.Keyword(null,"change-selection?","change-selection?",1166805125),false);
if((typeof app.main.data.workspace.groups.group_shapes_48475 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.groups.group_shapes_48475 = (function (id,ids,p__48473,map__48474,change_selection_QMARK_,meta48476){
this.id = id;
this.ids = ids;
this.p__48473 = p__48473;
this.map__48474 = map__48474;
this.change_selection_QMARK_ = change_selection_QMARK_;
this.meta48476 = meta48476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.groups.group_shapes_48475.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.groups.group_shapes_48475.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.groups","group-shapes","app.main.data.workspace.groups/group-shapes",1694900769);
}));

(app.main.data.workspace.groups.group_shapes_48475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48477,meta48476__$1){
var self__ = this;
var _48477__$1 = this;
return (new app.main.data.workspace.groups.group_shapes_48475(self__.id,self__.ids,self__.p__48473,self__.map__48474,self__.change_selection_QMARK_,meta48476__$1));
}));

(app.main.data.workspace.groups.group_shapes_48475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48477){
var self__ = this;
var _48477__$1 = this;
return self__.meta48476;
}));

(app.main.data.workspace.groups.group_shapes_48475.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.groups.group_shapes_48475.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var id__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(self__.id,app.common.uuid.next());
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var shapes = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(app.common.types.component.is_variant_QMARK_,app.main.data.workspace.groups.shapes_for_grouping(objects,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__48469_SHARP_){
return app.common.types.container.has_any_copy_parent_QMARK_(objects,cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__48469_SHARP_));
}),app.common.files.helpers.clean_loops(objects,self__.ids))));
var parents = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131)),shapes);
if(cljs.core.empty_QMARK_(shapes)){
return null;
} else {
var vec__48480 = app.main.data.workspace.groups.prepare_create_group(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),id__$1,objects,page_id,shapes,"Group",false);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48480,(0),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48480,(1),null);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),(cljs.core.truth_(self__.change_selection_QMARK_)?app.main.data.workspace.selection.select_shapes(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(group))):null),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),parents], null)));
}
}));
}

return (new app.main.data.workspace.groups.group_shapes_48475(id,ids,p__48473,map__48474__$1,change_selection_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.groups.group_shapes.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(app.main.data.workspace.groups.group_shapes.cljs$lang$applyTo = (function (seq48470){
var G__48471 = cljs.core.first(seq48470);
var seq48470__$1 = cljs.core.next(seq48470);
var G__48472 = cljs.core.first(seq48470__$1);
var seq48470__$2 = cljs.core.next(seq48470__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48471,G__48472,seq48470__$2);
}));

app.main.data.workspace.groups.group_selected = (function app$main$data$workspace$groups$group_selected(){
if((typeof app.main.data.workspace.groups.group_selected_48488 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.groups.group_selected_48488 = (function (meta48489){
this.meta48489 = meta48489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.groups.group_selected_48488.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.groups.group_selected_48488.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.groups","group-selected","app.main.data.workspace.groups/group-selected",353677864);
}));

(app.main.data.workspace.groups.group_selected_48488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48490,meta48489__$1){
var self__ = this;
var _48490__$1 = this;
return (new app.main.data.workspace.groups.group_selected_48488(meta48489__$1));
}));

(app.main.data.workspace.groups.group_selected_48488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48490){
var self__ = this;
var _48490__$1 = this;
return self__.meta48489;
}));

(app.main.data.workspace.groups.group_selected_48488.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.groups.group_selected_48488.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.of(app.main.data.workspace.groups.group_shapes.cljs$core$IFn$_invoke$arity$variadic(null,selected,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"change-selection?","change-selection?",1166805125),true], 0)));
}));
}

return (new app.main.data.workspace.groups.group_selected_48488(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.groups.ungroup_shapes = (function app$main$data$workspace$groups$ungroup_shapes(var_args){
var args__5755__auto__ = [];
var len__5749__auto___48608 = arguments.length;
var i__5750__auto___48609 = (0);
while(true){
if((i__5750__auto___48609 < len__5749__auto___48608)){
args__5755__auto__.push((arguments[i__5750__auto___48609]));

var G__48610 = (i__5750__auto___48609 + (1));
i__5750__auto___48609 = G__48610;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.main.data.workspace.groups.ungroup_shapes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.main.data.workspace.groups.ungroup_shapes.cljs$core$IFn$_invoke$arity$variadic = (function (ids,p__48501){
var map__48502 = p__48501;
var map__48502__$1 = cljs.core.__destructure_map(map__48502);
var change_selection_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48502__$1,new cljs.core.Keyword(null,"change-selection?","change-selection?",1166805125),false);
if((typeof app.main.data.workspace.groups.ungroup_shapes_48503 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.groups.ungroup_shapes_48503 = (function (ids,p__48501,map__48502,change_selection_QMARK_,meta48504){
this.ids = ids;
this.p__48501 = p__48501;
this.map__48502 = map__48502;
this.change_selection_QMARK_ = change_selection_QMARK_;
this.meta48504 = meta48504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.groups.ungroup_shapes_48503.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.groups.ungroup_shapes_48503.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.groups","ungroup-shapes","app.main.data.workspace.groups/ungroup-shapes",-1575715894);
}));

(app.main.data.workspace.groups.ungroup_shapes_48503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48505,meta48504__$1){
var self__ = this;
var _48505__$1 = this;
return (new app.main.data.workspace.groups.ungroup_shapes_48503(self__.ids,self__.p__48501,self__.map__48502,self__.change_selection_QMARK_,meta48504__$1));
}));

(app.main.data.workspace.groups.ungroup_shapes_48503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48505){
var self__ = this;
var _48505__$1 = this;
return self__.meta48504;
}));

(app.main.data.workspace.groups.ungroup_shapes_48503.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.groups.ungroup_shapes_48503.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var prepare = (function (shape_id){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,shape_id);
var changes = ((((app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) || (app.common.files.helpers.bool_shape_QMARK_(shape))))?app.main.data.workspace.groups.remove_group_changes(it__$1,page_id,shape,objects):((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?app.main.data.workspace.groups.remove_frame_changes(it__$1,page_id,shape,objects):null));
var G__48508 = changes;
if(cljs.core.truth_(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape)))){
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(G__48508,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape)], null),app.common.types.shape.layout.assign_cells,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true], null));
} else {
return G__48508;
}
});
var ids__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__48496_SHARP_){
return app.common.types.component.is_variant_container_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__48496_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__48495_SHARP_){
return app.common.types.component.instance_head_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__48495_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__48494_SHARP_){
return app.common.types.container.has_any_copy_parent_QMARK_(objects,cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__48494_SHARP_));
}),self__.ids)));
var changes_list = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$1(prepare),ids__$1);
var parents = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__48497_SHARP_){
return app.common.files.helpers.get_parent(objects,p1__48497_SHARP_);
})),cljs.core.keep.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092))),ids__$1);
var child_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__48498_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__48498_SHARP_),new cljs.core.Keyword(null,"shapes","shapes",1897594879));
})),ids__$1);
var changes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([changes_list], 0))),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([changes_list], 0))),new cljs.core.Keyword(null,"origin","origin",1037372088),it__$1], null);
var undo_id = Symbol();
if(cljs.core.empty_QMARK_(ids__$1)){
return null;
} else {
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),parents], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id),(cljs.core.truth_(self__.change_selection_QMARK_)?app.main.data.workspace.selection.select_shapes(child_ids):null));
}
}));
}

return (new app.main.data.workspace.groups.ungroup_shapes_48503(ids,p__48501,map__48502__$1,change_selection_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.groups.ungroup_shapes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.main.data.workspace.groups.ungroup_shapes.cljs$lang$applyTo = (function (seq48499){
var G__48500 = cljs.core.first(seq48499);
var seq48499__$1 = cljs.core.next(seq48499);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48500,seq48499__$1);
}));

app.main.data.workspace.groups.ungroup_selected = (function app$main$data$workspace$groups$ungroup_selected(){
if((typeof app.main.data.workspace.groups.ungroup_selected_48516 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.groups.ungroup_selected_48516 = (function (meta48517){
this.meta48517 = meta48517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.groups.ungroup_selected_48516.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.groups.ungroup_selected_48516.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.groups","ungroup-selected","app.main.data.workspace.groups/ungroup-selected",-980266808);
}));

(app.main.data.workspace.groups.ungroup_selected_48516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48518,meta48517__$1){
var self__ = this;
var _48518__$1 = this;
return (new app.main.data.workspace.groups.ungroup_selected_48516(meta48517__$1));
}));

(app.main.data.workspace.groups.ungroup_selected_48516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48518){
var self__ = this;
var _48518__$1 = this;
return self__.meta48517;
}));

(app.main.data.workspace.groups.ungroup_selected_48516.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.groups.ungroup_selected_48516.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.of(app.main.data.workspace.groups.ungroup_shapes.cljs$core$IFn$_invoke$arity$variadic(selected,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"change-selection?","change-selection?",1166805125),true], 0)));
}));
}

return (new app.main.data.workspace.groups.ungroup_selected_48516(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.groups.mask_group = (function app$main$data$workspace$groups$mask_group(var_args){
var G__48534 = arguments.length;
switch (G__48534) {
case 0:
return app.main.data.workspace.groups.mask_group.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.workspace.groups.mask_group.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.groups.mask_group.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.workspace.groups.mask_group.cljs$core$IFn$_invoke$arity$1(null);
}));

(app.main.data.workspace.groups.mask_group.cljs$core$IFn$_invoke$arity$1 = (function (ids){
if((typeof app.main.data.workspace.groups.mask_group_48540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.groups.mask_group_48540 = (function (ids,meta48541){
this.ids = ids;
this.meta48541 = meta48541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.groups.mask_group_48540.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.groups.mask_group_48540.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.groups","mask-group","app.main.data.workspace.groups/mask-group",650109249);
}));

(app.main.data.workspace.groups.mask_group_48540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48542,meta48541__$1){
var self__ = this;
var _48542__$1 = this;
return (new app.main.data.workspace.groups.mask_group_48540(self__.ids,meta48541__$1));
}));

(app.main.data.workspace.groups.mask_group_48540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48542){
var self__ = this;
var _48542__$1 = this;
return self__.meta48541;
}));

(app.main.data.workspace.groups.mask_group_48540.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.groups.mask_group_48540.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var selected = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__48527_SHARP_){
return app.common.types.container.has_any_copy_parent_QMARK_(objects,cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__48527_SHARP_));
}),app.common.files.helpers.clean_loops(objects,(function (){var or__5025__auto__ = self__.ids;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
}
})()));
var shapes = app.main.data.workspace.groups.shapes_for_grouping(objects,selected);
var first_shape = cljs.core.first(shapes);
if(cljs.core.empty_QMARK_(shapes)){
return null;
} else {
var vec__48555 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(shapes)),new cljs.core.Keyword(null,"group","group",582596132)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_shape,app.common.files.changes_builder.with_objects(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),objects)], null):app.main.data.workspace.groups.prepare_create_group(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),app.common.uuid.next(),objects,page_id,shapes,"Mask",true));
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48555,(0),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48555,(1),null);
var changes__$1 = app.common.files.changes_builder.resize_parents(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(changes,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(group),(function (shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),new cljs.core.Keyword(null,"scale","scale",-230427353),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),new cljs.core.Keyword(null,"scale","scale",-230427353)], 0));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(group)], null),(function (group__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(group__$1,new cljs.core.Keyword(null,"masked-group","masked-group",1899947873),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selrect","selrect",1966287292),new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(first_shape),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(first_shape),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(first_shape),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$1(first_shape)], 0));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(group)], null));
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes__$1),app.main.data.workspace.selection.select_shapes(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(group))),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(group)], null)], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}
}));
}

return (new app.main.data.workspace.groups.mask_group_48540(ids,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.groups.mask_group.cljs$lang$maxFixedArity = 1);

app.main.data.workspace.groups.unmask_group = (function app$main$data$workspace$groups$unmask_group(var_args){
var G__48565 = arguments.length;
switch (G__48565) {
case 0:
return app.main.data.workspace.groups.unmask_group.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.workspace.groups.unmask_group.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.groups.unmask_group.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.workspace.groups.unmask_group.cljs$core$IFn$_invoke$arity$1(null);
}));

(app.main.data.workspace.groups.unmask_group.cljs$core$IFn$_invoke$arity$1 = (function (ids){
if((typeof app.main.data.workspace.groups.unmask_group_48569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.groups.unmask_group_48569 = (function (ids,meta48570){
this.ids = ids;
this.meta48570 = meta48570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.groups.unmask_group_48569.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.groups.unmask_group_48569.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.groups","unmask-group","app.main.data.workspace.groups/unmask-group",487219487);
}));

(app.main.data.workspace.groups.unmask_group_48569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48571,meta48570__$1){
var self__ = this;
var _48571__$1 = this;
return (new app.main.data.workspace.groups.unmask_group_48569(self__.ids,meta48570__$1));
}));

(app.main.data.workspace.groups.unmask_group_48569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48571){
var self__ = this;
var _48571__$1 = this;
return self__.meta48570;
}));

(app.main.data.workspace.groups.unmask_group_48569.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.groups.unmask_group_48569.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var masked_groups = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48562_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__48562_SHARP_))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__48562_SHARP_))));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48561_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__48561_SHARP_);
}),app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(self__.ids,app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state))));
var changes = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes,mask){
return app.common.files.changes_builder.resize_parents(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(changes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mask)], null),(function (shape){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"masked-group","masked-group",1899947873));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mask)], null));
}),app.common.files.changes_builder.with_objects(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),objects),masked_groups);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
}));
}

return (new app.main.data.workspace.groups.unmask_group_48569(ids,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.groups.unmask_group.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=app.main.data.workspace.groups.js.map
