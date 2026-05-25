import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.shapes.js";
import "./app.common.types.component.js";
import "./app.common.types.container.js";
import "./app.common.types.path.js";
import "./app.common.types.path.bool.js";
import "./app.common.types.shape.js";
import "./app.common.types.shape.layout.js";
import "./app.common.uuid.js";
import "./app.main.data.changes.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.selection.js";
import "./app.main.data.workspace.shapes.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.bool');
app.main.data.workspace.bool.create_bool_shape = (function app$main$data$workspace$bool$create_bool_shape(id,type,name,shapes,objects){
var shape_id = (function (){var or__5025__auto__ = id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.uuid.next();
}
})();
var head = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"difference","difference",1916101396)))?cljs.core.first(shapes):cljs.core.last(shapes));
var head__$1 = (function (){var G__48645 = head;
if(((cljs.core.contains_QMARK_(head,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772))) && (cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(head))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48645,new cljs.core.Keyword(null,"fills","fills",902966780),app.common.types.path.get_default_bool_fills());
} else {
return G__48645;
}
})();
var shape = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),shape_id,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"bool-type","bool-type",-1094918459),type,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(head__$1),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(head__$1),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.common.data.xf_COLON_map_id,shapes)], null);
var shape__$1 = app.common.types.path.update_bool_shape(app.common.types.shape.setup_shape(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shape,cljs.core.select_keys(head__$1,app.common.types.path.bool_style_properties)], 0))),objects);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape__$1,app.common.files.helpers.get_position_on_parent(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(head__$1))], null);
});
app.main.data.workspace.bool.group__GT_bool = (function app$main$data$workspace$bool$group__GT_bool(type,group,objects){
var shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(group));
var head = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"difference","difference",1916101396)))?cljs.core.first(shapes):cljs.core.last(shapes));
var head__$1 = (function (){var G__48646 = head;
if(((cljs.core.contains_QMARK_(head,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772))) && (cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(head))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48646,new cljs.core.Keyword(null,"fills","fills",902966780),app.common.types.path.get_default_bool_fills());
} else {
return G__48646;
}
})();
return app.common.types.path.update_bool_shape(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(group,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bool","bool",1444635321)),new cljs.core.Keyword(null,"bool-type","bool-type",-1094918459),type),cljs.core.select_keys(head__$1,app.common.types.path.bool.style_properties)], 0)),objects);
});
app.main.data.workspace.bool.create_bool = (function app$main$data$workspace$bool$create_bool(var_args){
var args__5755__auto__ = [];
var len__5749__auto___48726 = arguments.length;
var i__5750__auto___48727 = (0);
while(true){
if((i__5750__auto___48727 < len__5749__auto___48726)){
args__5755__auto__.push((arguments[i__5750__auto___48727]));

var G__48728 = (i__5750__auto___48727 + (1));
i__5750__auto___48727 = G__48728;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.main.data.workspace.bool.create_bool.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.main.data.workspace.bool.create_bool.cljs$core$IFn$_invoke$arity$variadic = (function (type,p__48653){
var map__48654 = p__48653;
var map__48654__$1 = cljs.core.__destructure_map(map__48654);
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48654__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var force_shape_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48654__$1,new cljs.core.Keyword(null,"force-shape-id","force-shape-id",-1073846094));
if((((ids == null)) || (cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids)))){
} else {
throw (new Error("Assert failed: (or (nil? ids) (every? uuid? ids))"));
}

if((typeof app.main.data.workspace.bool.create_bool_union_48662 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.bool.create_bool_union_48662 = (function (type,p__48653,map__48654,ids,force_shape_id,meta48663){
this.type = type;
this.p__48653 = p__48653;
this.map__48654 = map__48654;
this.ids = ids;
this.force_shape_id = force_shape_id;
this.meta48663 = meta48663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.bool.create_bool_union_48662.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.bool.create_bool_union_48662.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.bool","create-bool-union","app.main.data.workspace.bool/create-bool-union",-720276073);
}));

(app.main.data.workspace.bool.create_bool_union_48662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48664,meta48663__$1){
var self__ = this;
var _48664__$1 = this;
return (new app.main.data.workspace.bool.create_bool_union_48662(self__.type,self__.p__48653,self__.map__48654,self__.ids,self__.force_shape_id,meta48663__$1));
}));

(app.main.data.workspace.bool.create_bool_union_48662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48664){
var self__ = this;
var _48664__$1 = this;
return self__.meta48663;
}));

(app.main.data.workspace.bool.create_bool_union_48662.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.bool.create_bool_union_48662.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var name = cuerdas.core.capital(app.common.data.name(self__.type));
var ids__$1 = app.main.data.helpers.process_selected.cljs$core$IFn$_invoke$arity$2(objects,(function (){var or__5025__auto__ = self__.ids;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.data.helpers.get_selected_ids(state);
}
})());
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(app.common.files.helpers.frame_shape_QMARK_),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(app.common.types.component.is_variant_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__48648_SHARP_){
return app.common.types.container.has_any_copy_parent_QMARK_(objects,p1__48648_SHARP_);
}))], 0));
var shapes = cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xform,app.common.files.helpers.order_by_indexed_shapes(objects,ids__$1)));
if(cljs.core.truth_(shapes)){
var vec__48671 = app.main.data.workspace.bool.create_bool_shape(self__.force_shape_id,self__.type,name,cljs.core.reverse(shapes),objects);
var shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48671,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48671,(1),null);
var shape_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092));
var changes = app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.add_object.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),objects),shape,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),(index + (1))], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes),app.common.types.shape.layout.remove_layout_item_data),shape_id,shapes);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),app.main.data.workspace.selection.select_shapes(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$1(shape_id)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.bool.create_bool_union_48662(type,p__48653,map__48654__$1,ids,force_shape_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.bool.create_bool.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.main.data.workspace.bool.create_bool.cljs$lang$applyTo = (function (seq48650){
var G__48651 = cljs.core.first(seq48650);
var seq48650__$1 = cljs.core.next(seq48650);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48651,seq48650__$1);
}));

app.main.data.workspace.bool.group_to_bool = (function app$main$data$workspace$bool$group_to_bool(shape_id,type){
if((typeof app.main.data.workspace.bool.group_to_bool_48698 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.bool.group_to_bool_48698 = (function (shape_id,type,meta48699){
this.shape_id = shape_id;
this.type = type;
this.meta48699 = meta48699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.bool.group_to_bool_48698.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.bool.group_to_bool_48698.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.bool","group-to-bool","app.main.data.workspace.bool/group-to-bool",1540299050);
}));

(app.main.data.workspace.bool.group_to_bool_48698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48700,meta48699__$1){
var self__ = this;
var _48700__$1 = this;
return (new app.main.data.workspace.bool.group_to_bool_48698(self__.shape_id,self__.type,meta48699__$1));
}));

(app.main.data.workspace.bool.group_to_bool_48698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48700){
var self__ = this;
var _48700__$1 = this;
return self__.meta48699;
}));

(app.main.data.workspace.bool.group_to_bool_48698.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.bool.group_to_bool_48698.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var update_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.bool.group__GT_bool,self__.type);
if(cljs.core.truth_(app.common.types.container.has_any_copy_parent_QMARK_(objects,cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.shape_id)))){
return null;
} else {
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.shape_id], null),update_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true,new cljs.core.Keyword(null,"reg-objects?","reg-objects?",-195730116),true], null)));
}
}));
}

return (new app.main.data.workspace.bool.group_to_bool_48698(shape_id,type,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.bool.bool__GT_group = (function app$main$data$workspace$bool$bool__GT_group(shape,objects){
return app.common.geom.shapes.update_group_selrect(app.common.data.without_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"group","group",582596132)),new cljs.core.Keyword(null,"bool-type","bool-type",-1094918459)),app.common.types.path.bool_group_style_properties),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape)));
});
app.main.data.workspace.bool.bool_to_group = (function app$main$data$workspace$bool$bool_to_group(shape_id){
if((typeof app.main.data.workspace.bool.bool_to_group_48712 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.bool.bool_to_group_48712 = (function (shape_id,meta48713){
this.shape_id = shape_id;
this.meta48713 = meta48713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.bool.bool_to_group_48712.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.bool.bool_to_group_48712.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.bool","bool-to-group","app.main.data.workspace.bool/bool-to-group",1880089387);
}));

(app.main.data.workspace.bool.bool_to_group_48712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48714,meta48713__$1){
var self__ = this;
var _48714__$1 = this;
return (new app.main.data.workspace.bool.bool_to_group_48712(self__.shape_id,meta48713__$1));
}));

(app.main.data.workspace.bool.bool_to_group_48712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48714){
var self__ = this;
var _48714__$1 = this;
return self__.meta48713;
}));

(app.main.data.workspace.bool.bool_to_group_48712.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.bool.bool_to_group_48712.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(app.common.types.container.has_any_copy_parent_QMARK_(objects,cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.shape_id)))){
return null;
} else {
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.shape_id], null),app.main.data.workspace.bool.bool__GT_group,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true,new cljs.core.Keyword(null,"reg-objects?","reg-objects?",-195730116),true], null)));
}
}));
}

return (new app.main.data.workspace.bool.bool_to_group_48712(shape_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.bool.change_bool_type = (function app$main$data$workspace$bool$change_bool_type(shape_id,type){
if((typeof app.main.data.workspace.bool.change_bool_type_48720 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.bool.change_bool_type_48720 = (function (shape_id,type,meta48721){
this.shape_id = shape_id;
this.type = type;
this.meta48721 = meta48721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.bool.change_bool_type_48720.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.bool.change_bool_type_48720.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.bool","change-bool-type","app.main.data.workspace.bool/change-bool-type",424899887);
}));

(app.main.data.workspace.bool.change_bool_type_48720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48722,meta48721__$1){
var self__ = this;
var _48722__$1 = this;
return (new app.main.data.workspace.bool.change_bool_type_48720(self__.shape_id,self__.type,meta48721__$1));
}));

(app.main.data.workspace.bool.change_bool_type_48720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48722){
var self__ = this;
var _48722__$1 = this;
return self__.meta48721;
}));

(app.main.data.workspace.bool.change_bool_type_48720.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.bool.change_bool_type_48720.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var change_type = (function (shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"bool-type","bool-type",-1094918459),self__.type);
});
if(cljs.core.truth_(app.common.types.container.has_any_copy_parent_QMARK_(objects,cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.shape_id)))){
return null;
} else {
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.shape_id], null),change_type,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reg-objects?","reg-objects?",-195730116),true], null)));
}
}));
}

return (new app.main.data.workspace.bool.change_bool_type_48720(shape_id,type,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.bool.js.map
