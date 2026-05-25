import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.helpers.js";
import "./app.common.files.shapes_helpers.js";
import "./app.common.logic.shapes.js";
import "./app.common.schema.js";
import "./app.common.types.component.js";
import "./app.common.types.container.js";
import "./app.common.types.shape.js";
import "./app.common.types.shape_tree.js";
import "./app.main.data.changes.js";
import "./app.main.data.comments.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.collapse.js";
import "./app.main.data.workspace.edition.js";
import "./app.main.data.workspace.selection.js";
import "./app.main.data.workspace.undo.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.shapes');
app.main.data.workspace.shapes.update_layout_attr_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),null], null), null);
app.main.data.workspace.shapes.add_undo_group = (function app$main$data$workspace$shapes$add_undo_group(changes,state){
var undo = new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606).cljs$core$IFn$_invoke$arity$1(state);
var items = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(undo);
var index = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(undo);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (cljs.core.count(items) - (1));
}
})();
var prev_item = ((((cljs.core.empty_QMARK_(items)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(-1)))))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(items,index));
var undo_group = new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846).cljs$core$IFn$_invoke$arity$1(prev_item);
var add_undo_group_QMARK_ = (((!((undo_group == null)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(changes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),(0),new cljs.core.Keyword(null,"type","type",1174270348)], null)),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(prev_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),(0),new cljs.core.Keyword(null,"type","type",1174270348)], null)),new cljs.core.Keyword(null,"add-obj","add-obj",-1569519983))) && (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(prev_item),new cljs.core.Keyword(null,"alt-duplication","alt-duplication",774015793))))))));
var G__48478 = changes;
if(add_undo_group_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48478,new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),undo_group);
} else {
return G__48478;
}
});
app.main.data.workspace.shapes.update_shapes = (function app$main$data$workspace$shapes$update_shapes(var_args){
var G__48485 = arguments.length;
switch (G__48485) {
case 2:
return app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2 = (function (ids,update_fn){
return app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(ids,update_fn,null);
}));

(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3 = (function (ids,update_fn,p__48486){
var map__48487 = p__48486;
var map__48487__$1 = cljs.core.__destructure_map(map__48487);
var changed_sub_attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48487__$1,new cljs.core.Keyword(null,"changed-sub-attr","changed-sub-attr",280796634));
var undo_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48487__$1,new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846));
var save_undo_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48487__$1,new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853),true);
var ignore_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48487__$1,new cljs.core.Keyword(null,"ignore-tree","ignore-tree",864252283));
var reg_objects_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48487__$1,new cljs.core.Keyword(null,"reg-objects?","reg-objects?",-195730116),false);
var stack_undo_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48487__$1,new cljs.core.Keyword(null,"stack-undo?","stack-undo?",1633924062),false);
var with_objects_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48487__$1,new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),false);
var ignore_touched = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48487__$1,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),false);
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48487__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48487__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
if(cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids)){
} else {
throw (new Error(["Assert failed: ","expect a coll of uuid for `ids`","\n","(every? uuid? ids)"].join('')));
}

if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw (new Error(["Assert failed: ","the `update-fn` should be a valid function","\n","(fn? update-fn)"].join('')));
}

if((typeof app.main.data.workspace.shapes.update_shapes_48491 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shapes.update_shapes_48491 = (function (changed_sub_attr,undo_group,save_undo_QMARK_,ignore_tree,p__48486,reg_objects_QMARK_,stack_undo_QMARK_,with_objects_QMARK_,ignore_touched,map__48487,ids,page_id,update_fn,attrs,meta48492){
this.changed_sub_attr = changed_sub_attr;
this.undo_group = undo_group;
this.save_undo_QMARK_ = save_undo_QMARK_;
this.ignore_tree = ignore_tree;
this.p__48486 = p__48486;
this.reg_objects_QMARK_ = reg_objects_QMARK_;
this.stack_undo_QMARK_ = stack_undo_QMARK_;
this.with_objects_QMARK_ = with_objects_QMARK_;
this.ignore_touched = ignore_touched;
this.map__48487 = map__48487;
this.ids = ids;
this.page_id = page_id;
this.update_fn = update_fn;
this.attrs = attrs;
this.meta48492 = meta48492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shapes.update_shapes_48491.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.update_shapes_48491.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shapes","update-shapes","app.main.data.workspace.shapes/update-shapes",-30456202);
}));

(app.main.data.workspace.shapes.update_shapes_48491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48493,meta48492__$1){
var self__ = this;
var _48493__$1 = this;
return (new app.main.data.workspace.shapes.update_shapes_48491(self__.changed_sub_attr,self__.undo_group,self__.save_undo_QMARK_,self__.ignore_tree,self__.p__48486,self__.reg_objects_QMARK_,self__.stack_undo_QMARK_,self__.with_objects_QMARK_,self__.ignore_touched,self__.map__48487,self__.ids,self__.page_id,self__.update_fn,self__.attrs,meta48492__$1));
}));

(app.main.data.workspace.shapes.update_shapes_48491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48493){
var self__ = this;
var _48493__$1 = this;
return self__.meta48492;
}));

(app.main.data.workspace.shapes.update_shapes_48491.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.update_shapes_48491.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id__$1 = (function (){var or__5025__auto__ = self__.page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425));
}
})();
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id__$1);
var ids__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.some_QMARK_),self__.ids);
var xf_update_layout = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__48479_SHARP_){
return cljs.core.some(app.main.data.workspace.shapes.update_layout_attr_QMARK_,app.common.files.changes_builder.changed_attrs(p1__48479_SHARP_,objects,self__.update_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),self__.with_objects_QMARK_], null)));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)));
var update_layout_ids = cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xf_update_layout,ids__$1));
var changes = (function (){var G__48506 = app.common.logic.shapes.generate_update_shapes(app.common.files.changes_builder.set_stack_undo_QMARK_(app.common.files.changes_builder.set_save_undo_QMARK_(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id__$1),self__.save_undo_QMARK_),self__.stack_undo_QMARK_),ids__$1,self__.update_fn,objects,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,new cljs.core.Keyword(null,"changed-sub-attr","changed-sub-attr",280796634),self__.changed_sub_attr,new cljs.core.Keyword(null,"ignore-tree","ignore-tree",864252283),self__.ignore_tree,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),self__.ignore_touched,new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),self__.with_objects_QMARK_], null));
if(cljs.core.truth_(self__.undo_group)){
return app.common.files.changes_builder.set_undo_group(G__48506,self__.undo_group);
} else {
return G__48506;
}
})();
var changes__$1 = app.main.data.workspace.shapes.add_undo_group(changes,state);
return beicon.v2.core.concat(((cljs.core.seq(new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(changes__$1)))?(function (){var changes__$2 = (function (){var G__48507 = changes__$1;
if(cljs.core.truth_(self__.reg_objects_QMARK_)){
return app.common.files.changes_builder.resize_parents(G__48507,ids__$1);
} else {
return G__48507;
}
})();
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes__$2));
})():beicon.v2.core.empty()),(cljs.core.truth_(update_layout_ids)?beicon.v2.core.of(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),update_layout_ids], null))):beicon.v2.core.empty()));
}));
}

return (new app.main.data.workspace.shapes.update_shapes_48491(changed_sub_attr,undo_group,save_undo_QMARK_,ignore_tree,p__48486,reg_objects_QMARK_,stack_undo_QMARK_,with_objects_QMARK_,ignore_touched,map__48487__$1,ids,page_id,update_fn,attrs,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.shapes.update_shapes.cljs$lang$maxFixedArity = 3);

app.main.data.workspace.shapes.add_shape = (function app$main$data$workspace$shapes$add_shape(var_args){
var G__48510 = arguments.length;
switch (G__48510) {
case 1:
return app.main.data.workspace.shapes.add_shape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.shapes.add_shape.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.shapes.add_shape.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return app.main.data.workspace.shapes.add_shape.cljs$core$IFn$_invoke$arity$2(shape,cljs.core.PersistentArrayMap.EMPTY);
}));

(app.main.data.workspace.shapes.add_shape.cljs$core$IFn$_invoke$arity$2 = (function (shape,p__48511){
var map__48512 = p__48511;
var map__48512__$1 = cljs.core.__destructure_map(map__48512);
var no_select_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48512__$1,new cljs.core.Keyword(null,"no-select?","no-select?",345814430));
var no_update_layout_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48512__$1,new cljs.core.Keyword(null,"no-update-layout?","no-update-layout?",-390161987));
app.common.types.shape.check_shape(shape);

if((typeof app.main.data.workspace.shapes.add_shape_48513 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shapes.add_shape_48513 = (function (shape,p__48511,map__48512,no_select_QMARK_,no_update_layout_QMARK_,meta48514){
this.shape = shape;
this.p__48511 = p__48511;
this.map__48512 = map__48512;
this.no_select_QMARK_ = no_select_QMARK_;
this.no_update_layout_QMARK_ = no_update_layout_QMARK_;
this.meta48514 = meta48514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shapes.add_shape_48513.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.add_shape_48513.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shapes","add-shape","app.main.data.workspace.shapes/add-shape",2080836645);
}));

(app.main.data.workspace.shapes.add_shape_48513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48515,meta48514__$1){
var self__ = this;
var _48515__$1 = this;
return (new app.main.data.workspace.shapes.add_shape_48513(self__.shape,self__.p__48511,self__.map__48512,self__.no_select_QMARK_,self__.no_update_layout_QMARK_,meta48514__$1));
}));

(app.main.data.workspace.shapes.add_shape_48513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48515){
var self__ = this;
var _48515__$1 = this;
return self__.meta48514;
}));

(app.main.data.workspace.shapes.add_shape_48513.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.add_shape_48513.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var vec__48519 = app.common.files.shapes_helpers.prepare_add_shape(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),objects),self__.shape,objects);
var shape__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48519,(0),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48519,(1),null);
var changes__$1 = (function (){var G__48522 = changes;
if(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1)){
return app.common.files.changes_builder.set_undo_group(G__48522,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1));
} else {
return G__48522;
}
})();
var undo_id = Symbol();
var parent_type = app.common.files.helpers.get_shape_type(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape__$1));
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes__$1),(cljs.core.truth_(self__.no_update_layout_QMARK_)?null:potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape__$1)], null)], null))),(cljs.core.truth_(self__.no_select_QMARK_)?null:app.main.data.workspace.selection.select_shapes(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1)))),app.main.data.workspace.undo.commit_undo_transaction(undo_id)),((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1))?beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.of(app.main.data.workspace.edition.start_edition_mode(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1)))):null),beicon.v2.core.of(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"create-shape",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:add-shape",new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"parent-type","parent-type",1460910476),parent_type], null))),((app.common.files.helpers.has_layout_QMARK_(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape__$1)))?beicon.v2.core.of(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"layout-add-element",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:add-shape",new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"parent-type","parent-type",1460910476),parent_type], null))):null));
}));
}

return (new app.main.data.workspace.shapes.add_shape_48513(shape,p__48511,map__48512__$1,no_select_QMARK_,no_update_layout_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.shapes.add_shape.cljs$lang$maxFixedArity = 2);

app.main.data.workspace.shapes.move_shapes_into_frame = (function app$main$data$workspace$shapes$move_shapes_into_frame(frame_id,shapes){
if((typeof app.main.data.workspace.shapes.move_shapes_into_frame_48524 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shapes.move_shapes_into_frame_48524 = (function (frame_id,shapes,meta48525){
this.frame_id = frame_id;
this.shapes = shapes;
this.meta48525 = meta48525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shapes.move_shapes_into_frame_48524.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.move_shapes_into_frame_48524.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shapes","move-shapes-into-frame","app.main.data.workspace.shapes/move-shapes-into-frame",1690401691);
}));

(app.main.data.workspace.shapes.move_shapes_into_frame_48524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48526,meta48525__$1){
var self__ = this;
var _48526__$1 = this;
return (new app.main.data.workspace.shapes.move_shapes_into_frame_48524(self__.frame_id,self__.shapes,meta48525__$1));
}));

(app.main.data.workspace.shapes.move_shapes_into_frame_48524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48526){
var self__ = this;
var _48526__$1 = this;
return self__.meta48525;
}));

(app.main.data.workspace.shapes.move_shapes_into_frame_48524.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.move_shapes_into_frame_48524.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var shapes__$1 = app.common.files.helpers.order_by_indexed_shapes(objects,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__48523_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__48523_SHARP_),new cljs.core.Keyword(null,"blocked","blocked",181326681));
}),self__.shapes));
var changes = app.common.files.changes_builder.with_objects(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),objects);
var changes__$1 = app.common.files.shapes_helpers.prepare_move_shapes_into_frame(changes,self__.frame_id,shapes__$1,objects,true);
if((!((changes__$1 == null)))){
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes__$1));
} else {
return beicon.v2.core.empty();
}
}));
}

return (new app.main.data.workspace.shapes.move_shapes_into_frame_48524(frame_id,shapes,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.shapes.delete_shapes = (function app$main$data$workspace$shapes$delete_shapes(var_args){
var G__48529 = arguments.length;
switch (G__48529) {
case 1:
return app.main.data.workspace.shapes.delete_shapes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.shapes.delete_shapes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.shapes.delete_shapes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.shapes.delete_shapes.cljs$core$IFn$_invoke$arity$1 = (function (ids){
return app.main.data.workspace.shapes.delete_shapes.cljs$core$IFn$_invoke$arity$3(null,ids,cljs.core.PersistentArrayMap.EMPTY);
}));

(app.main.data.workspace.shapes.delete_shapes.cljs$core$IFn$_invoke$arity$2 = (function (page_id,ids){
return app.main.data.workspace.shapes.delete_shapes.cljs$core$IFn$_invoke$arity$3(page_id,ids,cljs.core.PersistentArrayMap.EMPTY);
}));

(app.main.data.workspace.shapes.delete_shapes.cljs$core$IFn$_invoke$arity$3 = (function (page_id,ids,options){
if(cljs.core.truth_(app.common.schema.check_set_of_uuid(ids))){
} else {
throw (new Error("Assert failed: (sm/check-set-of-uuid ids)"));
}

if((typeof app.main.data.workspace.shapes.delete_shapes_48530 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shapes.delete_shapes_48530 = (function (page_id,ids,options,meta48531){
this.page_id = page_id;
this.ids = ids;
this.options = options;
this.meta48531 = meta48531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shapes.delete_shapes_48530.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.delete_shapes_48530.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shapes","delete-shapes","app.main.data.workspace.shapes/delete-shapes",1337837165);
}));

(app.main.data.workspace.shapes.delete_shapes_48530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48532,meta48531__$1){
var self__ = this;
var _48532__$1 = this;
return (new app.main.data.workspace.shapes.delete_shapes_48530(self__.page_id,self__.ids,self__.options,meta48531__$1));
}));

(app.main.data.workspace.shapes.delete_shapes_48530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48532){
var self__ = this;
var _48532__$1 = this;
return self__.meta48531;
}));

(app.main.data.workspace.shapes.delete_shapes_48530.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.delete_shapes_48530.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var page_id__$1 = (function (){var or__5025__auto__ = self__.page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
}
})();
var fdata = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,file_id);
var page = app.main.data.helpers.get_page(fdata,page_id__$1);
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page);
var undo_id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"undo-id","undo-id",-650073754).cljs$core$IFn$_invoke$arity$1(self__.options);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return Symbol();
}
})();
var vec__48535 = app.common.logic.shapes.generate_delete_shapes.cljs$core$IFn$_invoke$arity$6(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page)),fdata,page,objects,self__.ids,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),new cljs.core.Keyword(null,"allow-altering-copies","allow-altering-copies",1930197967).cljs$core$IFn$_invoke$arity$1(self__.options),new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846).cljs$core$IFn$_invoke$arity$1(self__.options),new cljs.core.Keyword(null,"undo-id","undo-id",-650073754),undo_id], null));
var all_parents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48535,(0),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48535,(1),null);
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.comments.detach_comment_thread(self__.ids),app.main.data.changes.commit_changes(changes),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ids","ids",-998535796),all_parents,new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846).cljs$core$IFn$_invoke$arity$1(self__.options)], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.shapes.delete_shapes_48530(page_id,ids,options,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.shapes.delete_shapes.cljs$lang$maxFixedArity = 3);

app.main.data.workspace.shapes.create_and_add_shape = (function app$main$data$workspace$shapes$create_and_add_shape(type,frame_x,frame_y,p__48538){
var map__48539 = p__48538;
var map__48539__$1 = cljs.core.__destructure_map(map__48539);
var attrs = map__48539__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48539__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48539__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if((typeof app.main.data.workspace.shapes.create_and_add_shape_48543 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shapes.create_and_add_shape_48543 = (function (type,frame_x,frame_y,p__48538,map__48539,attrs,width,height,meta48544){
this.type = type;
this.frame_x = frame_x;
this.frame_y = frame_y;
this.p__48538 = p__48538;
this.map__48539 = map__48539;
this.attrs = attrs;
this.width = width;
this.height = height;
this.meta48544 = meta48544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shapes.create_and_add_shape_48543.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.create_and_add_shape_48543.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shapes","create-and-add-shape","app.main.data.workspace.shapes/create-and-add-shape",-1895732796);
}));

(app.main.data.workspace.shapes.create_and_add_shape_48543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48545,meta48544__$1){
var self__ = this;
var _48545__$1 = this;
return (new app.main.data.workspace.shapes.create_and_add_shape_48543(self__.type,self__.frame_x,self__.frame_y,self__.p__48538,self__.map__48539,self__.attrs,self__.width,self__.height,meta48544__$1));
}));

(app.main.data.workspace.shapes.create_and_add_shape_48543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48545){
var self__ = this;
var _48545__$1 = this;
return self__.meta48544;
}));

(app.main.data.workspace.shapes.create_and_add_shape_48543.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.create_and_add_shape_48543.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var vbc = app.main.data.helpers.get_viewport_center(state);
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(self__.attrs,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbc) - (self__.width / (2))));
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(self__.attrs,(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbc) - (self__.height / (2))));
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var frame_id = app.common.types.shape_tree.top_nested_frame.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),self__.frame_x,new cljs.core.Keyword(null,"y","y",-1757859776),self__.frame_y], null));
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var base = app.common.files.helpers.get_base_shape(objects,selected);
var parent_id = ((((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selected))) && (app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.first(selected)))))) || (cljs.core.empty_QMARK_(selected))))?frame_id:new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(base));
var parent_id__$1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(app.common.types.container.get_first_valid_parent(objects,parent_id));
var frame_id__$1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(app.common.types.container.get_first_valid_parent(objects,frame_id));
var shape = app.common.types.shape.setup_shape(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.attrs,new cljs.core.Keyword(null,"type","type",1174270348),self__.type),new cljs.core.Keyword(null,"x","x",2099068185),x),new cljs.core.Keyword(null,"y","y",-1757859776),y),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id__$1),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id__$1));
return beicon.v2.core.of(app.main.data.workspace.shapes.add_shape.cljs$core$IFn$_invoke$arity$1(shape));
}));
}

return (new app.main.data.workspace.shapes.create_and_add_shape_48543(type,frame_x,frame_y,p__48538,map__48539__$1,attrs,width,height,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.shapes.create_artboard_from_shapes = (function app$main$data$workspace$shapes$create_artboard_from_shapes(var_args){
var G__48548 = arguments.length;
switch (G__48548) {
case 6:
return app.main.data.workspace.shapes.create_artboard_from_shapes.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return app.main.data.workspace.shapes.create_artboard_from_shapes.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.shapes.create_artboard_from_shapes.cljs$core$IFn$_invoke$arity$6 = (function (shapes,id,parent_id,index,name,delta){
return app.main.data.workspace.shapes.create_artboard_from_shapes.cljs$core$IFn$_invoke$arity$7(shapes,id,parent_id,index,name,delta,true);
}));

(app.main.data.workspace.shapes.create_artboard_from_shapes.cljs$core$IFn$_invoke$arity$7 = (function (shapes,id,parent_id,index,name,delta,layout_update_QMARK_){
if((typeof app.main.data.workspace.shapes.create_artboard_from_shapes_48549 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shapes.create_artboard_from_shapes_48549 = (function (shapes,id,parent_id,index,name,delta,layout_update_QMARK_,meta48550){
this.shapes = shapes;
this.id = id;
this.parent_id = parent_id;
this.index = index;
this.name = name;
this.delta = delta;
this.layout_update_QMARK_ = layout_update_QMARK_;
this.meta48550 = meta48550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shapes.create_artboard_from_shapes_48549.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.create_artboard_from_shapes_48549.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shapes","create-artboard-from-shapes","app.main.data.workspace.shapes/create-artboard-from-shapes",-284689606);
}));

(app.main.data.workspace.shapes.create_artboard_from_shapes_48549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48551,meta48550__$1){
var self__ = this;
var _48551__$1 = this;
return (new app.main.data.workspace.shapes.create_artboard_from_shapes_48549(self__.shapes,self__.id,self__.parent_id,self__.index,self__.name,self__.delta,self__.layout_update_QMARK_,meta48550__$1));
}));

(app.main.data.workspace.shapes.create_artboard_from_shapes_48549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48551){
var self__ = this;
var _48551__$1 = this;
return self__.meta48550;
}));

(app.main.data.workspace.shapes.create_artboard_from_shapes_48549.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.create_artboard_from_shapes_48549.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var changes = app.common.files.changes_builder.with_objects(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),objects);
var vec__48552 = app.common.files.shapes_helpers.prepare_create_artboard_from_selection.cljs$core$IFn$_invoke$arity$10(changes,self__.id,self__.parent_id,objects,self__.shapes,self__.index,self__.name,false,null,self__.delta);
var frame_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48552,(0),null);
var changes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48552,(1),null);
var undo_id = Symbol();
if(cljs.core.truth_(changes__$1)){
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes__$1),app.main.data.workspace.selection.select_shapes(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame_shape))),(cljs.core.truth_(self__.layout_update_QMARK_)?potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame_shape)], null)], null)):null),app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"create-board",new cljs.core.Keyword(null,"converted-from","converted-from",1608276057),app.common.files.helpers.get_selected_type(objects,self__.shapes),new cljs.core.Keyword(null,"parent-type","parent-type",1460910476),app.common.files.helpers.get_shape_type(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(frame_shape))], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.shapes.create_artboard_from_shapes_48549(shapes,id,parent_id,index,name,delta,layout_update_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.shapes.create_artboard_from_shapes.cljs$lang$maxFixedArity = 7);

app.main.data.workspace.shapes.create_artboard_from_selection = (function app$main$data$workspace$shapes$create_artboard_from_selection(var_args){
var G__48563 = arguments.length;
switch (G__48563) {
case 0:
return app.main.data.workspace.shapes.create_artboard_from_selection.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.workspace.shapes.create_artboard_from_selection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.shapes.create_artboard_from_selection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.shapes.create_artboard_from_selection.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.shapes.create_artboard_from_selection.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return app.main.data.workspace.shapes.create_artboard_from_selection.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.shapes.create_artboard_from_selection.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.workspace.shapes.create_artboard_from_selection.cljs$core$IFn$_invoke$arity$1(null);
}));

(app.main.data.workspace.shapes.create_artboard_from_selection.cljs$core$IFn$_invoke$arity$1 = (function (id){
return app.main.data.workspace.shapes.create_artboard_from_selection.cljs$core$IFn$_invoke$arity$2(id,null);
}));

(app.main.data.workspace.shapes.create_artboard_from_selection.cljs$core$IFn$_invoke$arity$2 = (function (id,parent_id){
return app.main.data.workspace.shapes.create_artboard_from_selection.cljs$core$IFn$_invoke$arity$3(id,parent_id,null);
}));

(app.main.data.workspace.shapes.create_artboard_from_selection.cljs$core$IFn$_invoke$arity$3 = (function (id,parent_id,index){
return app.main.data.workspace.shapes.create_artboard_from_selection.cljs$core$IFn$_invoke$arity$4(id,parent_id,index,null);
}));

(app.main.data.workspace.shapes.create_artboard_from_selection.cljs$core$IFn$_invoke$arity$4 = (function (id,parent_id,index,name){
return app.main.data.workspace.shapes.create_artboard_from_selection.cljs$core$IFn$_invoke$arity$5(id,parent_id,index,name,null);
}));

(app.main.data.workspace.shapes.create_artboard_from_selection.cljs$core$IFn$_invoke$arity$5 = (function (id,parent_id,index,name,delta){
if((typeof app.main.data.workspace.shapes.create_artboard_from_selection_48566 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shapes.create_artboard_from_selection_48566 = (function (id,parent_id,index,name,delta,meta48567){
this.id = id;
this.parent_id = parent_id;
this.index = index;
this.name = name;
this.delta = delta;
this.meta48567 = meta48567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shapes.create_artboard_from_selection_48566.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.create_artboard_from_selection_48566.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shapes","create-artboard-from-selection","app.main.data.workspace.shapes/create-artboard-from-selection",1204722774);
}));

(app.main.data.workspace.shapes.create_artboard_from_selection_48566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48568,meta48567__$1){
var self__ = this;
var _48568__$1 = this;
return (new app.main.data.workspace.shapes.create_artboard_from_selection_48566(self__.id,self__.parent_id,self__.index,self__.name,self__.delta,meta48567__$1));
}));

(app.main.data.workspace.shapes.create_artboard_from_selection_48566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48568){
var self__ = this;
var _48568__$1 = this;
return self__.meta48567;
}));

(app.main.data.workspace.shapes.create_artboard_from_selection_48566.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.create_artboard_from_selection_48566.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var selected = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__48559_SHARP_){
return app.common.types.component.is_variant_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__48559_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__48558_SHARP_){
return app.common.types.container.has_any_copy_parent_QMARK_(objects,cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__48558_SHARP_));
}),app.common.files.helpers.clean_loops(objects,app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state))));
return beicon.v2.core.of(app.main.data.workspace.shapes.create_artboard_from_shapes.cljs$core$IFn$_invoke$arity$6(selected,self__.id,self__.parent_id,self__.index,self__.name,self__.delta));
}));
}

return (new app.main.data.workspace.shapes.create_artboard_from_selection_48566(id,parent_id,index,name,delta,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.shapes.create_artboard_from_selection.cljs$lang$maxFixedArity = 5);

app.main.data.workspace.shapes.update_shape_flags = (function app$main$data$workspace$shapes$update_shape_flags(ids,flags){
if(cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids)){
} else {
throw (new Error(["Assert failed: ","expected valid coll of uuids","\n","(every? uuid? ids)"].join('')));
}

var map__48573 = app.common.types.shape.check_shape_generic_attrs(flags);
var map__48573__$1 = cljs.core.__destructure_map(map__48573);
var blocked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48573__$1,new cljs.core.Keyword(null,"blocked","blocked",181326681));
var hidden = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48573__$1,new cljs.core.Keyword(null,"hidden","hidden",-312506092));
var undo_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48573__$1,new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846));
if((typeof app.main.data.workspace.shapes.update_shape_flags_48574 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shapes.update_shape_flags_48574 = (function (ids,flags,map__48573,blocked,hidden,undo_group,meta48575){
this.ids = ids;
this.flags = flags;
this.map__48573 = map__48573;
this.blocked = blocked;
this.hidden = hidden;
this.undo_group = undo_group;
this.meta48575 = meta48575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shapes.update_shape_flags_48574.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.update_shape_flags_48574.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shapes","update-shape-flags","app.main.data.workspace.shapes/update-shape-flags",89719760);
}));

(app.main.data.workspace.shapes.update_shape_flags_48574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48576,meta48575__$1){
var self__ = this;
var _48576__$1 = this;
return (new app.main.data.workspace.shapes.update_shape_flags_48574(self__.ids,self__.flags,self__.map__48573,self__.blocked,self__.hidden,self__.undo_group,meta48575__$1));
}));

(app.main.data.workspace.shapes.update_shape_flags_48574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48576){
var self__ = this;
var _48576__$1 = this;
return self__.meta48575;
}));

(app.main.data.workspace.shapes.update_shape_flags_48574.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.update_shape_flags_48574.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var update_fn = (function (obj){
var G__48577 = obj;
var G__48577__$1 = ((cljs.core.boolean_QMARK_(self__.blocked))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48577,new cljs.core.Keyword(null,"blocked","blocked",181326681),self__.blocked):G__48577);
if(cljs.core.boolean_QMARK_(self__.hidden)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48577__$1,new cljs.core.Keyword(null,"hidden","hidden",-312506092),self__.hidden);
} else {
return G__48577__$1;
}
});
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var ids__$1 = ((cljs.core.boolean_QMARK_(self__.blocked))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(self__.ids,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__48572_SHARP_){
return app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,p1__48572_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ids], 0))):self__.ids);
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(ids__$1,update_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),null,new cljs.core.Keyword(null,"blocked","blocked",181326681),null], null), null),new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),self__.undo_group], null)));
}));
}

return (new app.main.data.workspace.shapes.update_shape_flags_48574(ids,flags,map__48573__$1,blocked,hidden,undo_group,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.shapes.toggle_visibility_selected = (function app$main$data$workspace$shapes$toggle_visibility_selected(){
if((typeof app.main.data.workspace.shapes.toggle_visibility_selected_48579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shapes.toggle_visibility_selected_48579 = (function (meta48580){
this.meta48580 = meta48580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shapes.toggle_visibility_selected_48579.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.toggle_visibility_selected_48579.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shapes","toggle-visibility-selected","app.main.data.workspace.shapes/toggle-visibility-selected",-1946017969);
}));

(app.main.data.workspace.shapes.toggle_visibility_selected_48579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48581,meta48580__$1){
var self__ = this;
var _48581__$1 = this;
return (new app.main.data.workspace.shapes.toggle_visibility_selected_48579(meta48580__$1));
}));

(app.main.data.workspace.shapes.toggle_visibility_selected_48579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48581){
var self__ = this;
var _48581__$1 = this;
return self__.meta48580;
}));

(app.main.data.workspace.shapes.toggle_visibility_selected_48579.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.toggle_visibility_selected_48579.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(selected,(function (p1__48578_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__48578_SHARP_,new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.not);
})));
}));
}

return (new app.main.data.workspace.shapes.toggle_visibility_selected_48579(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.shapes.toggle_lock_selected = (function app$main$data$workspace$shapes$toggle_lock_selected(){
if((typeof app.main.data.workspace.shapes.toggle_lock_selected_48583 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shapes.toggle_lock_selected_48583 = (function (meta48584){
this.meta48584 = meta48584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shapes.toggle_lock_selected_48583.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.toggle_lock_selected_48583.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shapes","toggle-lock-selected","app.main.data.workspace.shapes/toggle-lock-selected",458405573);
}));

(app.main.data.workspace.shapes.toggle_lock_selected_48583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48585,meta48584__$1){
var self__ = this;
var _48585__$1 = this;
return (new app.main.data.workspace.shapes.toggle_lock_selected_48583(meta48584__$1));
}));

(app.main.data.workspace.shapes.toggle_lock_selected_48583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48585){
var self__ = this;
var _48585__$1 = this;
return self__.meta48584;
}));

(app.main.data.workspace.shapes.toggle_lock_selected_48583.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.toggle_lock_selected_48583.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(selected,(function (p1__48582_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__48582_SHARP_,new cljs.core.Keyword(null,"blocked","blocked",181326681),cljs.core.not);
})));
}));
}

return (new app.main.data.workspace.shapes.toggle_lock_selected_48583(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.shapes.toggle_file_thumbnail_selected = (function app$main$data$workspace$shapes$toggle_file_thumbnail_selected(){
if((typeof app.main.data.workspace.shapes.toggle_file_thumbnail_selected_48596 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shapes.toggle_file_thumbnail_selected_48596 = (function (meta48597){
this.meta48597 = meta48597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shapes.toggle_file_thumbnail_selected_48596.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.toggle_file_thumbnail_selected_48596.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shapes","toggle-file-thumbnail-selected","app.main.data.workspace.shapes/toggle-file-thumbnail-selected",308632699);
}));

(app.main.data.workspace.shapes.toggle_file_thumbnail_selected_48596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48598,meta48597__$1){
var self__ = this;
var _48598__$1 = this;
return (new app.main.data.workspace.shapes.toggle_file_thumbnail_selected_48596(meta48597__$1));
}));

(app.main.data.workspace.shapes.toggle_file_thumbnail_selected_48596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48598){
var self__ = this;
var _48598__$1 = this;
return self__.meta48597;
}));

(app.main.data.workspace.shapes.toggle_file_thumbnail_selected_48596.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.toggle_file_thumbnail_selected_48596.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var fdata = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var pages = cljs.core.vals(new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145).cljs$core$IFn$_invoke$arity$1(fdata));
var undo_id = Symbol();
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id)),beicon.v2.core.from(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48602){
var vec__48603 = p__48602;
var page_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48603,(0),null);
var frame_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48603,(1),null);
return app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(frame_ids,(function (p1__48594_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__48594_SHARP_,new cljs.core.Keyword(null,"use-for-thumbnail","use-for-thumbnail",1921212442));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null));
}),app.common.data.group_by.cljs$core$IFn$_invoke$arity$3(cljs.core.first,cljs.core.second,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__48606){
var map__48607 = p__48606;
var map__48607__$1 = cljs.core.__destructure_map(map__48607);
var page = map__48607__$1;
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48607__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48607__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"use-for-thumbnail","use-for-thumbnail",1921212442)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(selected),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,id))], 0)),app.common.types.shape_tree.get_frames.cljs$core$IFn$_invoke$arity$1(objects));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages], 0))))),beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(selected,(function (p1__48595_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__48595_SHARP_,new cljs.core.Keyword(null,"use-for-thumbnail","use-for-thumbnail",1921212442),cljs.core.not);
})),app.main.data.workspace.undo.commit_undo_transaction(undo_id)));
}));
}

return (new app.main.data.workspace.shapes.toggle_file_thumbnail_selected_48596(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.shapes.relocate_shapes = (function app$main$data$workspace$shapes$relocate_shapes(var_args){
var args__5755__auto__ = [];
var len__5749__auto___48665 = arguments.length;
var i__5750__auto___48666 = (0);
while(true){
if((i__5750__auto___48666 < len__5749__auto___48665)){
args__5755__auto__.push((arguments[i__5750__auto___48666]));

var G__48667 = (i__5750__auto___48666 + (1));
i__5750__auto___48666 = G__48667;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return app.main.data.workspace.shapes.relocate_shapes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(app.main.data.workspace.shapes.relocate_shapes.cljs$core$IFn$_invoke$arity$variadic = (function (ids,parent_id,to_index,p__48622){
var vec__48623 = p__48622;
var ignore_parents_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48623,(0),null);
app.common.data.macros.runtime_assert("expr assert: (every? uuid? ids)",(function (){
return cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids);
}));

app.common.data.macros.runtime_assert("expr assert: (set? ids)",(function (){
return cljs.core.set_QMARK_(ids);
}));

app.common.data.macros.runtime_assert("expr assert: (uuid? parent-id)",(function (){
return cljs.core.uuid_QMARK_(parent_id);
}));

app.common.data.macros.runtime_assert("expr assert: (number? to-index)",(function (){
return typeof to_index === 'number';
}));

if((typeof app.main.data.workspace.shapes.relocate_shapes_48626 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shapes.relocate_shapes_48626 = (function (ids,parent_id,to_index,p__48622,vec__48623,ignore_parents_QMARK_,meta48627){
this.ids = ids;
this.parent_id = parent_id;
this.to_index = to_index;
this.p__48622 = p__48622;
this.vec__48623 = vec__48623;
this.ignore_parents_QMARK_ = ignore_parents_QMARK_;
this.meta48627 = meta48627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shapes.relocate_shapes_48626.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.relocate_shapes_48626.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shapes","relocate-shapes","app.main.data.workspace.shapes/relocate-shapes",154933971);
}));

(app.main.data.workspace.shapes.relocate_shapes_48626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48628,meta48627__$1){
var self__ = this;
var _48628__$1 = this;
return (new app.main.data.workspace.shapes.relocate_shapes_48626(self__.ids,self__.parent_id,self__.to_index,self__.p__48622,self__.vec__48623,self__.ignore_parents_QMARK_,meta48627__$1));
}));

(app.main.data.workspace.shapes.relocate_shapes_48626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48628){
var self__ = this;
var _48628__$1 = this;
return self__.meta48627;
}));

(app.main.data.workspace.shapes.relocate_shapes_48626.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shapes.relocate_shapes_48626.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var ids__$1 = app.common.files.helpers.clean_loops(objects,self__.ids);
var ids__$2 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48611_SHARP_){
return (!(app.common.files.helpers.is_parent_QMARK_(objects,self__.parent_id,p1__48611_SHARP_)));
}),ids__$1);
var all_parents = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([self__.parent_id]),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__48612_SHARP_){
return app.common.files.helpers.get_parent_id(objects,p1__48612_SHARP_);
})),ids__$2);
var changes = app.common.logic.shapes.generate_relocate.cljs$core$IFn$_invoke$arity$variadic(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_page_id(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),page_id),objects),data),self__.parent_id,self__.to_index,ids__$2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ignore-parents?","ignore-parents?",1793745865),self__.ignore_parents_QMARK_], 0));
var add_component_to_variant_QMARK_ = (function (){var and__5023__auto__ = cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.common.types.component.instance_head_QMARK_,objects),ids__$2);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.some(app.common.types.component.is_variant_QMARK_,app.common.files.helpers.get_parents_with_self(objects,self__.parent_id));
} else {
return and__5023__auto__;
}
})();
var add_new_variant_QMARK_ = (function (){var and__5023__auto__ = app.common.types.component.is_variant_container_QMARK_((objects.cljs$core$IFn$_invoke$arity$1 ? objects.cljs$core$IFn$_invoke$arity$1(self__.parent_id) : objects.call(null,self__.parent_id)));
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.common.types.component.main_instance_QMARK_,objects),ids__$2);
} else {
return and__5023__auto__;
}
})();
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes),app.main.data.workspace.collapse.expand_collapse(self__.parent_id),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_parents,ids__$2)], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id),(cljs.core.truth_(add_component_to_variant_QMARK_)?app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-component-to-variant"], null)):null),(cljs.core.truth_(add_new_variant_QMARK_)?app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-new-variant",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:move-shapes-in-layers-tab"], null)):null));
}));
}

return (new app.main.data.workspace.shapes.relocate_shapes_48626(ids,parent_id,to_index,p__48622,vec__48623,ignore_parents_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.shapes.relocate_shapes.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(app.main.data.workspace.shapes.relocate_shapes.cljs$lang$applyTo = (function (seq48615){
var G__48616 = cljs.core.first(seq48615);
var seq48615__$1 = cljs.core.next(seq48615);
var G__48617 = cljs.core.first(seq48615__$1);
var seq48615__$2 = cljs.core.next(seq48615__$1);
var G__48618 = cljs.core.first(seq48615__$2);
var seq48615__$3 = cljs.core.next(seq48615__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48616,G__48617,G__48618,seq48615__$3);
}));


//# sourceMappingURL=app.main.data.workspace.shapes.js.map
